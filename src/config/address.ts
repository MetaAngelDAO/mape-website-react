const whitelistAddresses = [
  "0xfDF913d48E2A3bf83f3D53d515962147b692e18a",
  "0x817DA4A1bB93dadfE003F59ac60e4832A939032A",
  "0x2b709d300f4dbeb8b496f6bffc960599a8142ac0",
  "0x7b0F8FAF7f0e035Bcb26Db62376F5a0df571D543",
  "0x9A349e95cd2e54B034A5E452752714D0E8AD6b99",
  "0x94BD885E56667bC65ebdE762410EFD11fF0E6ad8",
  "0x1c73b706d4c6b0451aDf31E4162f5afe60e5169c",
  "0x90b83321297AE3a5cDb1c92692aF953165c00fa0",
  "0x49d554bc0911d28d486b0720A97678b9fbb24Fb1",
  "0xa3Fec9CceF569C9645a69915B2510175E09C37A8",
  "0xC92B4009A3525f5bD94A37140f36e2A48A15F4F5",
  "0x421388a1C547575C614e544f808021D580688263",
  "0xC0fB9F1100902f6AB3bb9d7d659a88915CF099f6",
  "0xCCA4857039066a525CDB28271817cc2185ac2F64",
  "0x8a2c52706F56C44B9b2FbC8c5f2ba007A89bFAaa",
  "0xE64b9014CF457fa26ecFfC03357a31A57Cf3AAe9",
  "0x92FeCfd2fa36D81a95906Ed47908d371ad2C8349",
  "0x7D81e20BAe808DCc7121478AfdcbB0049244c1fB",
  "0x36333fd9b8d9b0e11119e9ec09f54fe42738a90f",
  "0x2066Fce10E781d811715eaFb32D10B24fc3fF831",
  "0x24FE32B5216DafA64b32140121779E3E9031646e",
  "0x9e6f98de1bc2e28663492057552c5323c93a0996",
  "0x2bdBf6057610FBd173cA364EAD647941c4285Cf8",
  "0x1E954AD08F80EA7155Ac03968882c63B2851316C",
  "0x2fd69A8d512E0220aAE31d3604994fd878F98Fc5",
  "0x00A86c630E4978030a17D6a49FB1Ef036B1303fe",
  "0x883156632a55582dDFc2D674aF1d1920Ec031AE8",
  "0xC28FC3A962414685ee6d9b24c48a710EbD0aB351",
  "0x799Ec95bFc23eC1C304F016288078251fEE2D7b6",
  "0x1fb2e3bFc225Ad73D841B2d62e319d22Cb753b44",
  "0xe75Ae425f8673d09F36c946b981312433b6688fc",
  "0xd14658475D606c70ab6f7b860Ca00592C33a8fb3",
  "0xA8C70533331be88189DF54E3fD30ADBD3072DD60",
  "0x6Fa247f86c86Cb089B18cc17D59824B09a2d9fe1",
  "0xdbdFEBCFd0F96eb00B31eF4235d2b5Ea3E76A5Fc",
  "0xAeeA5033D88336AE6d8b90c0B2EE86A8A2B7E165",
  "0x76cFE8c49c48503FbaBf3baDe495250a8EDC48ec",
  "0x69D78e10BE8573729e395bB774FBeeF9cfe03061",
  "0x88116C4E577a6390ed546865df8c67d23B3C8ad6",
  "0xe5Daf39106F3d826b74588d7477C277955046363",
  "0x85844A1c2ea1B9CB0CDD1708BD8e5c33d0872007",
  "0xf37515673F36E64856416dce73037E578137b786",
  "0x4bdb8b565805B27b9D5C3c14104A706fd08ae373",
  "0xd8416d96f18eF5eF782066C91349B9376B7647Ee",
  "0xD54EfF97a09399e5fdA6f0534420b8160de42E97",
  "0x47a27102d66145e3b29dF9CE0ebab8D49fAE50D0",
  "0x9487Aa21D9ecdce9522Ea48d450773D684A3ee1d",
  "0x7D44dB0689a5F4113D457D358faC867711CEAbaE",
  "0x5164A153D344CA747008A345739e431BB9326112",
  "0x60381B224f2D7918211ca218B59C20B25Cc96c93",
  "0xE3BB0a5ddEB5ff7b4B6740B74DFaAeF0faDb29ce",
  "0xa5bfa3edb7e69b20b4c556c1945d2a45d98a557d",
  "0x4Ba83871fA90f5d899098f350dF695b88154651d",
  "0xB4df905e586C298457647b8522F65585e27c1f82",
  "0x7841D24285E5d08D80E449319c21370379487120",
  "0x8b6b989D0B1256Dc574De378734A4Bc85E3cd2Db",
  "0x5E74477362037B248F1d423b49C66b3Dbb8ac8C2",
  "0xBdE1b08071421AAB08BbB3133097A589891c25F5",
  "0x409305E3380f3dDd782657106E7D3DFc9660980E",
  "0x027DA9eE9E7F0f6ab6b0160935Dd362cB951d513",
  "0x6bABdC32B9aCE875df6C547585d6bBED77E2A178",
  "0x6941C343F3d66Be5F9F25474ED95Bd04ea90fA69",
  "0x21460522F072f49AC4C3067EcA85BC662E32Be6D",
  "0x55F3157F40A39B603d4C0d0fD2AA71b680b28e30",
  "0x7b839462539f58A73C26462433383979fd910cBA",
  "0xDdA1be9067e92CFA3b5F081d33D3d95797b18c2d",
  "0x02817CFB1a4C8AB29CDE4F25591fC92f5e70Bec4",
  "0xf3A97df0B38f64E241352547EbB4B6C1ae1A74F4",
  "0xa58e2f9b1F3Eb0635035D5f7cc2CcEc573a98228",
  "0xaDfdA5e88D3642219427DC8278029B17a7DF5CE0",
  "0xe3CED6605170706C07E8B126DC5e3bC084f24ad8",
  "0xb96D7934D3d86667758da0d8e455a3744F6a552d",
  "0x688119B82d38942920c89A5e48064d1ca6723180",
  "0x758F9FBe87e14eB58A34CDc922675337a238415f",
  "0xa7156B7168909B2011e7ae48F05707b4D9d486AB",
  "0x167beB5Bb21BEdE7461eF8716F765371e45588DB",
  "0x72db502e4bE920FD7c8f986CCA61243CF8879308",
  "0x02886a6723BeC2bfb36A2E7E518fdfD7b27070d6",
  "0xa3540388280fcA223Da6a0D7283D8907300b19Fe",
  "0xd81bb955ff732E0BCCe7D040b4d2ca3834E97C7D",
  "0xbc80459397aa2e417bf6b2d15b37de49957faa98",
  "0x0264BB36B78F747666d2C4257844AbE299AaE57a",
  "0x674D3E9EBd62891a5e72255b148a01021284E944",
  "0x686dFe646A73C43a16ba73d778c660Ba4E359046",
  "0x4B3c61970a38C23F62dc3DB11429220D1862DeE0",
  "0x5FD78Cf7Cc4aBd29FC520f8fC7BBE5fBA32c6369",
  "0x6566567eB9cE9Bf8cd64eD27989c380bF7F61bE5",
  "0x185a0a38012C5Ec0634A7ef63ee1aC285A54C0a6",
  "0x0f3561b445238f2e3E45Bdf926B1301eA28Bd584",
  "0x281bD23Ec33332Ee3771210d38482b979568958C",
  "0x25904d69555507E86C19164D692c95731c9bc666",
  "0xa7135EBd6c6975df2EE4BDC3917310952AE18803",
  "0x13eDC3347cdF16B6386b92B693Afe8C207E130d9",
  "0x2cb6ADC20F7d6C9A6FC3334C49E1b403D64b6A80",
  "0x94c56e35C84478A3285c949e4427cCA1BEEb8fE9",
  "0xa7da2B58C6Ea7Ac9D074f4183D0D32836bdE08BE",
  "0xE105EBc1b57AC5a5B72acD1583Cc1816f1Cd6Ee5",
  "0x3cb92Ce8C697A69D139f63A2331E545e7Ce62C67",
  "0xD6D9a62eB3cdE930D0509B88eaEb767419592C9c",
  "0x1e2aA177Ea865445B615B19e49b984dd83E11aaB",
  "0xE30a861b24351536d0E5067A1c9A7c712f447605",
  "0xBE446Ab49649a6895AAe652DdcfF643DEdffa9cc",
  "0x040716834A0500e2ac7313f00BaA52e8Ff2A77fC",
  "0xcFc3294DEc9fe237093Ce60228cD4Dae880A4FC3",
  "0xB93954BC15535B061440EbdB9B6f47f299Be34f7",
  "0x11eFD8579B24e49F0ff2c14Be23241045c8f7C01",
  "0xfc6f6CC633C7DbE3EA55816561073E7bB818D386",
  "0x23787E083f1c0C858A026F0d57aFC9832204b8B0",
  "0xEc706c67abd39BF20AB33129A2990aa73df10200",
  "0x55D5622c6D4e1181466e64FB4451B497bb331d8e",
  "0x643eC75c790280F61078A9617Ff936C092712e21",
  "0xE30a861b24351536d0E5067A1c9A7c712f447605",
  "0xb93959fd3a01d7904f19ce86ea4462f10aca3bca",
  "0xAC7591d52Ce5Be3875BFdE6Def2E363aFA54D5B5",
  "0x3Ed4b92a9a71bC8a84ed46e5cc9Fe84d78a7085D",
  "0xD6DDfd180D98393E4b24FA72ed0D5C258f31647D",
  "0x3C39c4a67382a10765d37C7837F1E5C39FcE5282",
  "0xC9c5DC94A13a0FB3792928654A8689FD7b00510e",
  "0x57A695c68af5B70092ABF9a8D67D574f853bbde8",
  "0xC1d3222B36A9d7c29bf2E2A16AEc9F3Aae3375f7",
  "0x7C19Da8c30d5D40FcCa0129a33E63369123d10ff",
  "0x243967d5f76ac4c576cB0F02aabD1B8C4178ec3a",
  "0x883156632a55582dDFc2D674aF1d1920Ec031AE8",
  "0x71C016E9104e71bB93220b882B4585F21F0f2C5c",
  "0xCd494fc8695D7fEeEA07aDe18A3d120919bB5822",
  "0x9133cd4071e261ea89600F74929Ba633eB7cF180",
  "0x3107bAF3c81efeB71B7493504cd28dc57D52970F",
  "0x178F56FeD183685541D0A22bc9BF36FED9B3D3bD",
  "0x3e2e90726bDC80623f92829D46Cc16F94ec186A3",
  "0xBFdc403a22A073B36489aa0255784442EE8Ba450",
  "0x3200CF293eC047Bb0212F704CCDE4C1FcEbAcFB0",
  "0x82694D377E38fCC338C6ec4B704A23276d964aaC",
  "0xa10759865eC8C03b8457fA99CbfbFc5F2B8F678b",
  "0x2dd38f8E6245C6eFDe41018f7086c8dB828e629f",
  "0xD463CB374d6090BF2AD1561f9991f37b79DDb6c1",
  "0xEbd43762e9B4b4162F7846eBE1B57A43cf11FC7B",
  "0xc938e671c733f25e02Cc247AD3686A20A3302Fac",
  "0xfDF913d48E2A3bf83f3D53d515962147b692e18a",
  "0xce510258888ad226Fa67362d94546e6886BE7018",
  "0x1e2aA177Ea865445B615B19e49b984dd83E11aaB",
  "0xE30a861b24351536d0E5067A1c9A7c712f447605",
  "0xBE446Ab49649a6895AAe652DdcfF643DEdffa9cc",
  "0x040716834A0500e2ac7313f00BaA52e8Ff2A77fC",
  "0xcFc3294DEc9fe237093Ce60228cD4Dae880A4FC3",
  "0xB93954BC15535B061440EbdB9B6f47f299Be34f7",
  "0x11eFD8579B24e49F0ff2c14Be23241045c8f7C01",
  "0xfc6f6CC633C7DbE3EA55816561073E7bB818D386",
  "0x23787E083f1c0C858A026F0d57aFC9832204b8B0",
  "0xEc706c67abd39BF20AB33129A2990aa73df10200",
  "0x55D5622c6D4e1181466e64FB4451B497bb331d8e",
  "0x643eC75c790280F61078A9617Ff936C092712e21",
  "0xE30a861b24351536d0E5067A1c9A7c712f447605",
  "0xb93959fd3a01d7904f19ce86ea4462f10aca3bca",
  "0xAC7591d52Ce5Be3875BFdE6Def2E363aFA54D5B5",
  "0x3Ed4b92a9a71bC8a84ed46e5cc9Fe84d78a7085D",
  "0xD6DDfd180D98393E4b24FA72ed0D5C258f31647D",
  "0x3C39c4a67382a10765d37C7837F1E5C39FcE5282",
  "0xC9c5DC94A13a0FB3792928654A8689FD7b00510e",
  "0x57A695c68af5B70092ABF9a8D67D574f853bbde8",
  "0xC1d3222B36A9d7c29bf2E2A16AEc9F3Aae3375f7",
  "0x7C19Da8c30d5D40FcCa0129a33E63369123d10ff",
  "0x243967d5f76ac4c576cB0F02aabD1B8C4178ec3a",
  "0x883156632a55582dDFc2D674aF1d1920Ec031AE8",
  "0x71C016E9104e71bB93220b882B4585F21F0f2C5c",
  "0xCd494fc8695D7fEeEA07aDe18A3d120919bB5822",
  "0xc938e671c733f25e02Cc247AD3686A20A3302Fac",
  "0x72Be00fEdebcf19E55b124e1D1BE53A2A5432A95",
  "0x41255C719a448517ba1d7CF4158ab488dB24dcc0",
  "0xb94Ab52003795A02Aa527D3f2948e676aF78836a",
  "0x4b94AA37e1918355eD36f494d5237C6f355A7ff4",
  "0x5a88567d92e71640aec59842219df0aba1bb8c07",
  "0x2e031970D8EC04015A5dea445037D0c873273A55",
  "0xE0D9dc6C0bc5dcFFf508Ad34373FC8008927E273",
  "0xDd5002d05fcC5AC9FAE5F9F43dE69BF45816cdFa",
  "0x4bf88e4f92b2d296511AF7CBa8f8faa331607d6D",
  "0x674D3E9EBd62891a5e72255b148a01021284E944",
  "0x178F56FeD183685541D0A22bc9BF36FED9B3D3bD",
  "0x3200CF293eC047Bb0212F704CCDE4C1FcEbAcFB0",
  "0x4Dc991Ad6B669a9b2EBebadcED8DC990ca9E2914",
  "0x681665ce8fCf40F16A2D4F27B5e38f30d654b138",
  "0xb289b73aC162ec6562C1a37d6aF0aCa92f80c791",
  "0x14B4829C0E5Ad3165315bbc30AC5e6f7Bc6d8329",
  "0x12F42ae34f409FC672Bcb8A903C04968FCEdAfcA",
  "0xC68d7097859DD01aE3fAAd88016b452922AB244a",
  "0xa31719b2692eE2591D8358022392982Af0788861",
  "0xe4F6803F201F67d5EaBCF06B8020E52e31e6ad66",
  "0xa34176831EfE01e24e96835244583bb2Af3Db9e8",
  "0xc922346F84C8A94E2cA7C149Ec433eEd7C111838",
  "0x4226b6f9f9BD886938cd1F3878f1bDF2B0971CCD",
  "0xA6621aFa9812A36AFB6D1965683ea4f39FBD080e",
  "0x65C408F90EC3f778db0E271F6Cdadfb3605034A2",
  "0xA78946cBDc6F74cAcf063EDD2fDb71632B4a3BeE",
  "0xDBaB23200B561F4B6BE4C9397E90dBFFE34e85B4",
  "0x3597A22941622b365cAD5a0fe3F07a6746d6829E",
  "0x4D321EF0B1Eb576A8D5633AdA498469847ec1413",
  "0xDFD1A49a330241a6D929fA65c4BcFb6b122C423c",
  "0x423C38A1B96f2C12e1F862faCA9a19ae6373b720",
  "0x803c71761e1E3088979f66eA480d15e38BC9AE6f",
  "0xD36F91e17bd3326c5eC3897052b214B922771B9C",
  "0xAeCe4838Cb09f7cbf344d00eF972EdD38FE290cb",
  "0x2b531651ccA0561D49D56795fd116b680D3dc1f2",
  "0x044CE69c36cCa6890Bf743744eF7e22e114B1533",
  "0x0152CDBB6200f88034dEBEEb0214d1CBA85aDaab",
  "0xA20cb8f72BD1EDBCfE2E790787f14EE69f80B182",
  "0xC7bE80975E932659423D7A5CBa745732FeC04234",
  "0xf04683631f47B3e2C2493Af4c1B44dd3196fBb5C",
  "0x978823c5524DeC38D9A990b4f00Be7dc6167E1EB",
  "0xb94Ab52003795A02Aa527D3f2948e676aF78836a",
  "0x3DAF6990D34a3f4289E69A11a2116D0Ec465Dbe2",
  "0x89f0023395C1Cd4039cc44C326873Bca6C14eeE9",
  "0x58ebFfb435CBB5c127abc0636d67B106C11A24e7",
  "0x6E2a89f38d5D21CA3A8CfeB0b02eb81a6f0acc48",
  "0xcb3E7C68d6078375c3C984D1a851FD4f41efd1b8",
  "0x9188da1F197d3352c5f6c7E167F2dB76a5f635eB",
  "0xe7d757665CF3CB848aD9fcB3c5db16246013cDFF",
  "0x7af6309fb7e9d9C3fB796893f49697c15692E8e3",
  "0x746E59435A380fed6c4271E89A5B123470620fBd",
  "0xEe0132699E4df98aA86F429417d14a0048Af4336",
  "0x6D4314d9b1Ad02A6F45ec1Fc6b20adBc4E6f4782",
  "0x75b444C23B367668FCf434d28586994D75417D0f",
  "0x3B9C99dB5be1A888A43ef9E3Ef03d6c998B4d8f5",
  "0x7Ff8052eF08334C7Be9Ec01b01EC9f7e6d00B738",
  "0x719b6C923Cb48f175e07cD30085c14dF952a9a13",
  "0x8b7469D608AD74e362f03a89387B625bCfB95a9f",
  "0x3808e2Cb646CA606CF115Bc9A1105155bB698a4d",
  "0xf4b2690D92fA392649Ff6B9E9be77B046276A503",
  "0xC342f4b883Ad5cD2d4038B5E15924fC762bDd103",
  "0x7181c8377Cc6295f77F41AC235E9E9416d93BDED",
  "0x187D99DEA7dd1E2090f7cDDee1673308A451a503",
  "0xED495F9c4e7A613B33082dF1cFCe4D864e4F4f1F",
  "0xa9FabbcC6327ddbc976F7a8C6a631F8739eE7430",
  "0xdd1Dee5d1442818F3b21Bfbb5f66542991DFb1A9",
  "0xa12ec6BD2847Ee74483A571BC2A7017017a034fd",
  "0x13F18caAD7e3D7f8497bbEdAc82624747C9f0150",
  "0xF3Ac9A9BC94DBe422D7064000D12113619369edF",
  "0x1112b08735f81c8Ca0b847d654994c9398543C70",
  "0xfF7ce5Cc43F05b5FD85db6474788aaCcf5Fd3E34",
  "0x4876Bed41a9fbeDd9Aef20ad4737FBED498fa8C0",
  "0xbd8FC1AfF6f3ff0Af20677cf8f73567E46faf32d",
  "0x759d72556715d6f3Bd692B24A83CF7AaB9017640",
  "0x90fC17B9Fc394c5606DACd39438F9AbC9d4Cf9Ee",
  "0x01B0aeE1689550dbA396D4a4D797Ad4B331fAa91",
  "0x114ACcd0Bd900706E6f0fA7D0a099A9937a0cd9A",
  "0x092c1546Db750e0E17EF6f89CFb689bc06310310",
  "0x01b7f584c5286e3DD48102d48DE94cc32A88C5D5",
  "0x5E2A8852505366B467434721F3F76Fef4CDC8885",
  "0xb2b5AF53Cc17Fe8D2F031ca4c3478133177365Ed",
  "0x8ae5EfeA4e43089B38ec4E54A37B792F89Ebc58B",
  "0x8038e31EF18b5A8f0Ef5338AEe9a348Bbf516165",
  "0xaeA0BabFA8597Be45Ae362452A093c42C90f483C",
  "0x006d178494EE902B512633a0Ed3192Eb798A1F2a",
  "0x7D1e5FCEf12937F4270b1226aB44bf6e78913aAf",
  "0x4206A6726e988408550396f18E15906B8E6a5fcd",
  "0x1b236Fdeb08a18cdf6b02AB20BCDCc00417f7696",
  "0xBC2E26C5fD96d4d00ACDc19262db3F6C305a7c2B",
  "0x81b57d6cf09f316c0446ac5C03CC4350bdAa2Fa8",
  "0x9160Eb507F102Df5300EBBb1D5935916DFeB2261",
  "0xc77F67DfEB665888943335CabAF44249c55C10f3",
  "0xFF91ea3d9bd45398dB6d8c63Ac295f2A5A3f2147",
  "0xa48BB3C4367041c37385fA4660Da019852b0f0F6",
  "0xC95C28083ee660298e40DeaBA60DF459F591072a",
  "0xd82C7DC40fEa9C40A646C0DbaD32E6110Ec0f942",
  "0x9ac578c1702Cbd73c25B9044875f65FFdaA513D9",
  "0x4dc2b1c7a40379b2a52D55942D34B75aAB972C26",
  "0x24D21Ab67Ad85a7d8eF425d055CcD68ed40fD3c1",
  "0x6470EfBbA3D624214B9ff8dEA63674C72e4893f0",
  "0x27C655A6206e2051BfC2966D0461f448bEebCf3F",
  "0x51bB0A58f63B61DA2e077aBC133372f3E29aAC6E",
  "0xfe1191d4D1cdEb04eaf0832C7E58f4e46967Ee52",
  "0xD6032a03deA84b467325487A0e076134d5C5882A",
  "0xadc02Cfe0aDA054456d53454389D5faB110526f0",
  "0xf751986d4e1C2De135D7748170D9922310faf49c",
  "0xC21524F11592BbE055F571f3207366f2E5DD4954",
  "0xb9C504DC3E4f05844bB7aBe13DA5C4635126cdfE",
  "0xFBe491d456180287D31a9B55B9c904F139Ad1A65",
  "0xa4d18A8DCa3CB0cA3DE882368158b0A2480ba4eE",
  "0x9A25d563c0cCf9bB0a078a06242E7C942cEA4593",
  "0x267A37648B3Acc16DE45A30D9E347c0D30d682D5",
  "0x3ACA622837964E3F8a070b151E0806B806E3cb39",
  "0xCC8Cfb4F6e2E836b9A68EC61BC496F48E50C3725",
  "0x830B76678F1540e875850a226385565cFB344d76",
  "0xbF07434F9FA8254dc20a8ea3011dd79CEDd7E432",
  "0x3A2105773Db9972212AE861E05b87da4cDc03B93",
  "0x15412b0d7Bf97326b818e972c640972cDaAD1C19",
  "0xB19eA113b9744b2d4fBa8de3e29E9993487Cc8c7",
  "0xAFD4Fcc4397b65Fc53dd1D085C69Ec6134307C63",
  "0x0CFd72ec4b22B10c32221c2D014fC29bdaf86aa9",
  "0x361246bC6bE3E58C29fd67B7D8425d9A585D9071",
  "0x60355d8A321Cc5723dD134643bB159F41aaDB545",
  "0xE2bF47A58AC9CD2A44b4747b0dDf67dEb4601D6E",
  "0xBD11bD32cB014406942C19830aC36921c56effE4",
  "0x1C7b1Ea9A1d20c78969d81f2Fee156Fe783E8940",
  "0x4daAEF4Ca4279fe94ca22eD37151AE94c0C4Ea26",
  "0x44CFB2996c6D780C902ec0FFE71A7d64504B5057",
  "0xf104D5B8314ed838cbee848b9BeeeD524020D633",
  "0xB36B4eD4C1c860A6CF35100089e20345e1cf02CC",
  "0x52a36Ac6cF1271527721514D5B0663B0Af94f318",
  "0xEC5EE3D87141b0b5839f8aC39a30f71ed69ecd25",
  "0x398c8921A735b88aA6cD634a5D5aA52b1269E661",
  "0x57A695c68af5B70092ABF9a8D67D574f853bbde8",
  "0x5E74477362037B248F1d423b49C66b3Dbb8ac8C2",
  "0xcabFa48Ec969234AC7d4a911373283dE505AFBBa",
  "0x20f89AFf0D8BBEC2C7d73dF79d813165094fD69c",
  "0xa37e9299094F378254d45AC00554e8609bE1da97",
  "0x2a79c7a41cc002ac8105ee9e90d91bfda4eec767",
  "0x6670b7884dbfeedf76265b2fc8e08e42ef7b5f3c",
  "0xC3E4095920692BF808E92810C1A9e1DaE474E1Ab",
  "0xf37515673F36E64856416dce73037E578137b786",
  "0xd3b077541BE5521345D6aBaeBe53B866f817061a",
  "0x26a1fbd991F1F09a6E6143c67be611A8864a8142",
  "0x0b6a339EFbdbb3Dca2a4c35d571b421AB57109d2",
  "0xc8aE87a13083c6877A2a40337510ff6d3f2A7640",
  "0xad91c7cc5185BCbEbb4712B94611406F2ad78d49",
  "0xb28a62D6fFE6df66B921FC458a8A4B43b6D93c33",
  "0x5B570Fe80979f757d3828cc473cDa979F9db393F",
  "0xAe4f341C17322428BB882A828bF0f02C0f8728AA",
  "0x6A29e7Cd7e47946D0D81c7c79230676Dd5549e9B",
  "0x3926Ed710410E901cE139B97693ab633746C54c7",
  "0x5B570Fe80979f757d3828cc473cDa979F9db393F",
  "0x2B3EC2D5Ff9ada834FEf215fF30857920A33E022",
  "0x0cBaEE0d94C8BE7984862CA5F7E9b9D2Ea3D0D8c",
  "0x83aa3620498011e94f697df3b59bd1b1634f4480"
];
const OGALOne = [
  "0xfDF913d48E2A3bf83f3D53d515962147b692e18a",
  "0xce510258888ad226Fa67362d94546e6886BE7018",
  "0x1e2aA177Ea865445B615B19e49b984dd83E11aaB",
  "0xE30a861b24351536d0E5067A1c9A7c712f447605",
  "0xBE446Ab49649a6895AAe652DdcfF643DEdffa9cc",
  "0x040716834A0500e2ac7313f00BaA52e8Ff2A77fC",
  "0xcFc3294DEc9fe237093Ce60228cD4Dae880A4FC3",
  "0xB93954BC15535B061440EbdB9B6f47f299Be34f7",
  "0x11eFD8579B24e49F0ff2c14Be23241045c8f7C01",
  "0xfc6f6CC633C7DbE3EA55816561073E7bB818D386",
  "0x23787E083f1c0C858A026F0d57aFC9832204b8B0",
  "0xEc706c67abd39BF20AB33129A2990aa73df10200",
  "0x55D5622c6D4e1181466e64FB4451B497bb331d8e",
  "0x643eC75c790280F61078A9617Ff936C092712e21",
  "0xE30a861b24351536d0E5067A1c9A7c712f447605",
  "0xb93959fd3a01d7904f19ce86ea4462f10aca3bca",
  "0xAC7591d52Ce5Be3875BFdE6Def2E363aFA54D5B5",
  "0x3Ed4b92a9a71bC8a84ed46e5cc9Fe84d78a7085D",
  "0xD6DDfd180D98393E4b24FA72ed0D5C258f31647D",
  "0x3C39c4a67382a10765d37C7837F1E5C39FcE5282",
  "0xC9c5DC94A13a0FB3792928654A8689FD7b00510e",
  "0x57A695c68af5B70092ABF9a8D67D574f853bbde8",
  "0xC1d3222B36A9d7c29bf2E2A16AEc9F3Aae3375f7",
  "0x7C19Da8c30d5D40FcCa0129a33E63369123d10ff",
  "0x243967d5f76ac4c576cB0F02aabD1B8C4178ec3a",
  "0x883156632a55582dDFc2D674aF1d1920Ec031AE8",
  "0x71C016E9104e71bB93220b882B4585F21F0f2C5c",
  "0xCd494fc8695D7fEeEA07aDe18A3d120919bB5822",
  "0x9133cd4071e261ea89600F74929Ba633eB7cF180",
  "0xc938e671c733f25e02Cc247AD3686A20A3302Fac",
  "0x72Be00fEdebcf19E55b124e1D1BE53A2A5432A95",
  "0x41255C719a448517ba1d7CF4158ab488dB24dcc0",
  "0xb94Ab52003795A02Aa527D3f2948e676aF78836a",
  "0x4b94AA37e1918355eD36f494d5237C6f355A7ff4",
  "0x5a88567d92e71640aec59842219df0aba1bb8c07",
  "0x2e031970D8EC04015A5dea445037D0c873273A55",
  "0xE0D9dc6C0bc5dcFFf508Ad34373FC8008927E273",
  "0xDd5002d05fcC5AC9FAE5F9F43dE69BF45816cdFa",
  "0x4bf88e4f92b2d296511AF7CBa8f8faa331607d6D",
  "0x674D3E9EBd62891a5e72255b148a01021284E944",
  "0x178F56FeD183685541D0A22bc9BF36FED9B3D3bD",
  "0x3200CF293eC047Bb0212F704CCDE4C1FcEbAcFB0",
  "0x4Dc991Ad6B669a9b2EBebadcED8DC990ca9E2914",
  "0x674D3E9EBd62891a5e72255b148a01021284E944",
  "0x57A695c68af5B70092ABF9a8D67D574f853bbde8",
];

const OGALTwo = [
  "0x681665ce8fCf40F16A2D4F27B5e38f30d654b138",
  "0xb289b73aC162ec6562C1a37d6aF0aCa92f80c791",
  "0x14B4829C0E5Ad3165315bbc30AC5e6f7Bc6d8329",
  "0x12F42ae34f409FC672Bcb8A903C04968FCEdAfcA",
  "0xC68d7097859DD01aE3fAAd88016b452922AB244a",
  "0xa31719b2692eE2591D8358022392982Af0788861",
  "0xe4F6803F201F67d5EaBCF06B8020E52e31e6ad66",
  "0xa34176831EfE01e24e96835244583bb2Af3Db9e8",
  "0xc922346F84C8A94E2cA7C149Ec433eEd7C111838",
  "0x4226b6f9f9BD886938cd1F3878f1bDF2B0971CCD",
  "0xA6621aFa9812A36AFB6D1965683ea4f39FBD080e",
  "0x65C408F90EC3f778db0E271F6Cdadfb3605034A2",
  "0xA78946cBDc6F74cAcf063EDD2fDb71632B4a3BeE",
  "0xDBaB23200B561F4B6BE4C9397E90dBFFE34e85B4",
  "0x3597A22941622b365cAD5a0fe3F07a6746d6829E",
  "0x4D321EF0B1Eb576A8D5633AdA498469847ec1413",
  "0xDFD1A49a330241a6D929fA65c4BcFb6b122C423c",
  "0x423C38A1B96f2C12e1F862faCA9a19ae6373b720",
  "0x803c71761e1E3088979f66eA480d15e38BC9AE6f",
  "0xD36F91e17bd3326c5eC3897052b214B922771B9C",
  "0xAeCe4838Cb09f7cbf344d00eF972EdD38FE290cb",
  "0x2b531651ccA0561D49D56795fd116b680D3dc1f2",
  "0x044CE69c36cCa6890Bf743744eF7e22e114B1533",
  "0x0152CDBB6200f88034dEBEEb0214d1CBA85aDaab",
  "0xA20cb8f72BD1EDBCfE2E790787f14EE69f80B182",
  "0xC7bE80975E932659423D7A5CBa745732FeC04234",
  "0xf04683631f47B3e2C2493Af4c1B44dd3196fBb5C",
  "0x978823c5524DeC38D9A990b4f00Be7dc6167E1EB",
  "0xb94Ab52003795A02Aa527D3f2948e676aF78836a",
  "0x3DAF6990D34a3f4289E69A11a2116D0Ec465Dbe2",
  "0x89f0023395C1Cd4039cc44C326873Bca6C14eeE9",
  "0x58ebFfb435CBB5c127abc0636d67B106C11A24e7",
  "0x6E2a89f38d5D21CA3A8CfeB0b02eb81a6f0acc48",
  "0xcb3E7C68d6078375c3C984D1a851FD4f41efd1b8",
  "0x9188da1F197d3352c5f6c7E167F2dB76a5f635eB",
  "0xe7d757665CF3CB848aD9fcB3c5db16246013cDFF",
  "0x7af6309fb7e9d9C3fB796893f49697c15692E8e3",
  "0x746E59435A380fed6c4271E89A5B123470620fBd",
  "0xEe0132699E4df98aA86F429417d14a0048Af4336",
  "0x6D4314d9b1Ad02A6F45ec1Fc6b20adBc4E6f4782",
  "0x75b444C23B367668FCf434d28586994D75417D0f",
  "0x3B9C99dB5be1A888A43ef9E3Ef03d6c998B4d8f5",
  "0x7Ff8052eF08334C7Be9Ec01b01EC9f7e6d00B738",
  "0x719b6C923Cb48f175e07cD30085c14dF952a9a13",
  "0x8b7469D608AD74e362f03a89387B625bCfB95a9f",
  "0x3808e2Cb646CA606CF115Bc9A1105155bB698a4d",
  "0xf4b2690D92fA392649Ff6B9E9be77B046276A503",
  "0xC342f4b883Ad5cD2d4038B5E15924fC762bDd103",
  "0x7181c8377Cc6295f77F41AC235E9E9416d93BDED",
  "0x187D99DEA7dd1E2090f7cDDee1673308A451a503",
  "0xED495F9c4e7A613B33082dF1cFCe4D864e4F4f1F",
  "0xa9FabbcC6327ddbc976F7a8C6a631F8739eE7430",
  "0xdd1Dee5d1442818F3b21Bfbb5f66542991DFb1A9",
  "0xa12ec6BD2847Ee74483A571BC2A7017017a034fd",
  "0x13F18caAD7e3D7f8497bbEdAc82624747C9f0150",
  "0xF3Ac9A9BC94DBe422D7064000D12113619369edF",
  "0x1112b08735f81c8Ca0b847d654994c9398543C70",
  "0xfF7ce5Cc43F05b5FD85db6474788aaCcf5Fd3E34",
  "0x4876Bed41a9fbeDd9Aef20ad4737FBED498fa8C0",
  "0xbd8FC1AfF6f3ff0Af20677cf8f73567E46faf32d",
  "0x759d72556715d6f3Bd692B24A83CF7AaB9017640",
  "0x90fC17B9Fc394c5606DACd39438F9AbC9d4Cf9Ee",
  "0x01B0aeE1689550dbA396D4a4D797Ad4B331fAa91",
  "0x114ACcd0Bd900706E6f0fA7D0a099A9937a0cd9A",
  "0x092c1546Db750e0E17EF6f89CFb689bc06310310",
  "0x01b7f584c5286e3DD48102d48DE94cc32A88C5D5",
  "0x5E2A8852505366B467434721F3F76Fef4CDC8885",
  "0xb2b5AF53Cc17Fe8D2F031ca4c3478133177365Ed",
  "0x8ae5EfeA4e43089B38ec4E54A37B792F89Ebc58B",
  "0x8038e31EF18b5A8f0Ef5338AEe9a348Bbf516165",
  "0xaeA0BabFA8597Be45Ae362452A093c42C90f483C",
  "0x006d178494EE902B512633a0Ed3192Eb798A1F2a",
  "0x7D1e5FCEf12937F4270b1226aB44bf6e78913aAf",
  "0x4206A6726e988408550396f18E15906B8E6a5fcd",
  "0x1b236Fdeb08a18cdf6b02AB20BCDCc00417f7696",
  "0xBC2E26C5fD96d4d00ACDc19262db3F6C305a7c2B",
  "0x81b57d6cf09f316c0446ac5C03CC4350bdAa2Fa8",
  "0x9160Eb507F102Df5300EBBb1D5935916DFeB2261",
  "0xc77F67DfEB665888943335CabAF44249c55C10f3",
  "0xFF91ea3d9bd45398dB6d8c63Ac295f2A5A3f2147",
  "0xa48BB3C4367041c37385fA4660Da019852b0f0F6",
  "0xC95C28083ee660298e40DeaBA60DF459F591072a",
  "0xd82C7DC40fEa9C40A646C0DbaD32E6110Ec0f942",
  "0x76534376277c1B4b344FB260501beC642409c551"
];
const OGALThrid = [
  "0x9ac578c1702Cbd73c25B9044875f65FFdaA513D9",
  "0x4dc2b1c7a40379b2a52D55942D34B75aAB972C26",
  "0x24D21Ab67Ad85a7d8eF425d055CcD68ed40fD3c1",
  "0x6470EfBbA3D624214B9ff8dEA63674C72e4893f0",
  "0x27C655A6206e2051BfC2966D0461f448bEebCf3F",
  "0x51bB0A58f63B61DA2e077aBC133372f3E29aAC6E",
  "0xfe1191d4D1cdEb04eaf0832C7E58f4e46967Ee52",
  "0xD6032a03deA84b467325487A0e076134d5C5882A",
  "0xadc02Cfe0aDA054456d53454389D5faB110526f0",
  "0xf751986d4e1C2De135D7748170D9922310faf49c",
  "0xC21524F11592BbE055F571f3207366f2E5DD4954",
  "0xb9C504DC3E4f05844bB7aBe13DA5C4635126cdfE",
  "0xFBe491d456180287D31a9B55B9c904F139Ad1A65",
  "0xa4d18A8DCa3CB0cA3DE882368158b0A2480ba4eE",
  "0x9A25d563c0cCf9bB0a078a06242E7C942cEA4593",
  "0x267A37648B3Acc16DE45A30D9E347c0D30d682D5",
  "0x3ACA622837964E3F8a070b151E0806B806E3cb39",
  "0xCC8Cfb4F6e2E836b9A68EC61BC496F48E50C3725",
  "0x830B76678F1540e875850a226385565cFB344d76",
  "0xbF07434F9FA8254dc20a8ea3011dd79CEDd7E432",
  "0x3A2105773Db9972212AE861E05b87da4cDc03B93",
  "0x15412b0d7Bf97326b818e972c640972cDaAD1C19",
  "0xB19eA113b9744b2d4fBa8de3e29E9993487Cc8c7",
  "0xAFD4Fcc4397b65Fc53dd1D085C69Ec6134307C63",
  "0x0CFd72ec4b22B10c32221c2D014fC29bdaf86aa9",
  "0x361246bC6bE3E58C29fd67B7D8425d9A585D9071",
  "0x60355d8A321Cc5723dD134643bB159F41aaDB545",
  "0xE2bF47A58AC9CD2A44b4747b0dDf67dEb4601D6E",
  "0xBD11bD32cB014406942C19830aC36921c56effE4",
  "0x1C7b1Ea9A1d20c78969d81f2Fee156Fe783E8940",
  "0x4daAEF4Ca4279fe94ca22eD37151AE94c0C4Ea26",
  "0x44CFB2996c6D780C902ec0FFE71A7d64504B5057",
  "0xAe4f341C17322428BB882A828bF0f02C0f8728AA",
  "0x6A29e7Cd7e47946D0D81c7c79230676Dd5549e9B",
  "0x3926Ed710410E901cE139B97693ab633746C54c7",
  "0x151F52adf7800DFC6ee0e81809dC78278a7347fC",
  "0x7A6Aa707bCd52E8e52E39ba876942dC6fE592C4D",
  "0xBEAa47AE2Abbd267d0B46328c7c02A0fB833E1aD"
];

export {
  OGALThrid, OGALTwo, OGALOne, whitelistAddresses
}