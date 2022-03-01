import { useCallback, useEffect, useState, VFC } from 'react';
import Web3 from 'web3';

import { contractConfig } from 'config';
import TxHash from './txToast';
import s from './main.module.scss';

import gif from '../assets/MAPE.gif';
import { notify } from 'utils/toaster';
import { MerkleTree } from 'merkletreejs';

import keccak256 from 'keccak256';
import { OGALOne, OGALThrid, OGALTwo, whitelistAddresses } from 'config/address';

const Main: VFC = () => {
  const [value, setValue] = useState('1');
  const [userAddress, setUserAddress] = useState('');
  const [maxSupply, setMaxSupply] = useState('7888');
  const [totalSupply, setTotalSupply] = useState('0');


  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value >= 10) {
      setValue('10');
    } else setValue(e.target.value);
  };

  const toogleMinus = () => {
    let result = parseInt(value, 10) - 1;
    if (result < 1)
      result = 1;
    setValue(result.toString());
  }

  const tooglePlus = () => {
    let result = parseInt(value, 10) + 1;
    if (result > 10)
      result = 10;
    setValue(result.toString());
  }

  const ethWindow = window as any;

  const loginWithMetaMask = useCallback(async () => {
    if (ethWindow.ethereum) {
      const accounts = await ethWindow.ethereum.request({ method: 'eth_requestAccounts' });
      const userAcc = accounts[0];
      setUserAddress(userAcc);

      ethWindow.userWalletAddress = userAcc;
      const web3 = new Web3(ethWindow.ethereum);
      const erc_721 = new web3.eth.Contract(contractConfig.abi, contractConfig.address);
      const totalcount = await erc_721.methods.maxSupply().call();
      const currentcount = await erc_721.methods.totalSupply().call();
      setMaxSupply(totalcount.toString());
      setTotalSupply(currentcount.toString());
    }

    // eslint-disable-next-line
  }, [ethWindow.ethereum, ethWindow.userWalletAddress]);

  const mintNft = async (amount: string) => {
    const web3 = new Web3(ethWindow.ethereum);
    const erc_721 = new web3.eth.Contract(contractConfig.abi, contractConfig.address);
    // const price = await erc_721.methods.cost().call();
    const price = await erc_721.methods.preSaleNFTPrice().call();
    // alert(price);
    console.log(price);
    const account = ethWindow.userWalletAddress;
    const claimingAddress = keccak256(account);

    let leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    let merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const hexProofAL = merkleTree.getHexProof(claimingAddress);
    leafNodes = OGALOne.map(addr => keccak256(addr));
    merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const hexProofOGOne = merkleTree.getHexProof(claimingAddress);
    leafNodes = OGALTwo.map(addr => keccak256(addr));
    merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const hexProofOGTwo = merkleTree.getHexProof(claimingAddress);
    leafNodes = OGALThrid.map(addr => keccak256(addr));
    merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const hexProofOGThird = merkleTree.getHexProof(claimingAddress);

    await erc_721.methods
      .mintNFT(amount, hexProofOGOne, hexProofOGTwo, hexProofOGThird, hexProofAL, 0, 0, 0, 0)
      .send({ from: ethWindow.userWalletAddress, value: web3.utils.toWei(String(+amount * price), 'ether')})
      .on('transactionHash', (transactionHash: string) => {
        notify(<TxHash txId={transactionHash} />, 'info', 10000);
      })
      .then((result: any) => {
        if (Array.isArray(result.events.Transfer)) {
          notify('The NFTs are minted', 'success', 10000);
        } else {
          notify('The NFT is minted!', 'success', 10000);
        }
      });

  };

  useEffect(() => {
    loginWithMetaMask();
  }, [loginWithMetaMask]);

  return (
    <main className={s.main}>
      <div className={s.left}>
        <div className={s.gif}>
          <img src={gif} alt="gif" />
        </div>
      </div>
      <div className={s.right}>
        <img src="MAPE.png" alt="MAPE" width="700px" style={{ marginTop: '0px' }} />
        <div className={s.padding} />
        <div className={s.price} />
        <div className={s.price}>
          <span>Pre-sale mint:</span> 99 Matic + Gas
        </div>
        <div className={s.padding} />

        <div className={s.price}>
          <span> {totalSupply} / {maxSupply} Minted </span>
        </div>

        <div className={s.mint}>
          <span onClick={toogleMinus} onKeyDown={toogleMinus} aria-hidden="true" style={{ cursor: 'pointer', userSelect: 'none' }}><h1>-&nbsp;</h1></span>
          <input value={value} onChange={(e) => onInputChange(e)} type="text" />
          <span onClick={tooglePlus} onKeyDown={tooglePlus} aria-hidden="true" style={{ cursor: 'pointer', userSelect: 'none' }}><h1>+</h1></span>
          <button
            disabled={!userAddress}
            type="button"
            onClick={() => mintNft(value)}
            className={s.button}
          >
            mint
          </button>
        </div>

        <div className={s.info}>
          {/* eslint-disable */}
          {ethWindow.ethereum
            ? userAddress
              ? `Matic Wallet Address: ${userAddress}`
              : 'Please connect to MetaMask'
            : 'Please Install Metamask'}
        </div>
      </div>
    </main>
  );
};

export default Main;
