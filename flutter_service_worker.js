'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "a801dd32e8d3a8f9f5e32d4d10649abb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "46e72625a02534d5184c6522f0bbcb96",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d04e0b80fd79924c1c8b6ce6aa05dd34",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7dbde127107de453800277e1253e27b2",
".git/logs/refs/heads/master": "7dbde127107de453800277e1253e27b2",
".git/logs/refs/remotes/origin/master": "6a5e8c53f6235194619acbd76046fa18",
".git/objects/00/1482e0444b39d02ea4b8b46934106aa0971f99": "884e56023cf106448e2a8ee9d6f3d356",
".git/objects/03/4cf1ef48a83a615fca61d6d2e56f62f13c30e6": "63e64c0f909af3e0f4460c8ae115048f",
".git/objects/03/f4174ab9cf3a3a660df2bd7ee0f7212b873270": "00770b8988a3792f12891ba73ca6ae80",
".git/objects/05/f89666184125ed4934395549fa78d9f05617af": "777debc83f9010f209a2d9b7ba5301a1",
".git/objects/06/21e0f8371131f722a2d6074b121f75c87e3170": "4b04d6e8c7980a541da93a176d7c747f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/a1a65a825d2b85f5469f983c093a759909b8e4": "9030663517d96ecd0db2ca8cc64c7b1f",
".git/objects/11/82c687d926873a9ba4e87aa3d49fb343fc9312": "9cb8e21e149af279044330245b4306f5",
".git/objects/12/9c9689b7ff5d67ea3f71abf214ef3445f881ac": "08f7ab3c492c0cfd818ac05bc53d2201",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/7c857749767f106eb18e07a17f27d454484bec": "a7622d2c802996883c1501f5c2c33625",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/3925189ff0492fce3aba1ea09052c9794565e8": "33ea2f57963b2773a7a4df038d789299",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/78cc3d54529c8c27b2d4c311785bea7d2dcfbb": "e6fd4bce9d04a28dd2ab1395b3f0a289",
".git/objects/24/6ac4bcfb2fcbfc39fb6beb9abe58b53e00e24b": "a4b7b989df9909ca1ef3cb23eedbeb71",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/b58bb221286861dc37bf1fb1f121f4ab3e6aa6": "e30f7cb1beffaaa19f36bb8ff120b790",
".git/objects/26/4ee6c86953489d204439f90ae00b3e9a0893a5": "e37d6cf9bc0c3b12ec2e8956abfeafd2",
".git/objects/2a/b7df4b08c46819aba24cbcb2573534ad3a6490": "c0b1433fbe2a01661938bfeb6e609908",
".git/objects/2c/efb977bf83120c9321be0350e9aa08631f5ab6": "ae2009d8ad6686c6aa5af7bb26c811a6",
".git/objects/34/4399e7140add0a6342259eca2d8fd67e49c61b": "4ead7eaff8b1a5e736dc5ef0fdbbc467",
".git/objects/35/e12e8e9e1c42f8fe423b0f14d4a91b1686ce6b": "e3cd68203278618f302a7872b777bf3d",
".git/objects/3a/42c15023d7ca64380db47883d016810a256343": "2ddf97fddb525955fc181f4d2b2642ec",
".git/objects/3e/c29f36e092ff519c1583749a5ba26909b597a8": "2cb767de9f68751c7cbd3d253878fe60",
".git/objects/3e/d0600486e86d9d73fe28cbb62c6d7f6fda331a": "5bd2d13495d000112009f36a57ca3dbb",
".git/objects/42/3098064feb84ab7979054cbc553a8a457ac480": "8c2a3873e88140aab160c77bb7223a31",
".git/objects/44/a875e497e6e3f4d537a13af1148bae7115607f": "f71bfacc7b22de78eda3d3f7d7a2c0e5",
".git/objects/47/74fc419ec51417cf53aaf5e2107e37fe3c429b": "943fae3fcccb2d21424b603f8198ed36",
".git/objects/49/105020d99971516e21258904afb88dd59e989b": "954ef0c701202d351816f2229969e827",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/ec55465e4656abb6dc16579a4c99c16c5a8a5f": "8a160549e97fcdfcb50240d29bc0f2bb",
".git/objects/4e/9febbad694fde6e93591e78ce94cd9ebcdd17c": "36bb4cfad86845f72bc96b49ac2e9036",
".git/objects/4e/bf0fe1cab78f5b129d96cee36ddf2a57174226": "53fcdd69173d7695a2b6408ca7954b59",
".git/objects/50/94039647c056cf7de4400f1d8ccf0c6fb95885": "66facb073c8d8e5fc7f6a4b09de32521",
".git/objects/52/e634a4f1ab86c4d2669f260416a8a11b8f3c29": "b3d69d47914362a3c9a9daa55f6728c4",
".git/objects/53/ac9e0aaab5c2687d2c9fcc2d64e1528c96941a": "d03839d763d9623e2a46cb825815fcbe",
".git/objects/56/dbf7856ab5a7518eea305824e290888d2c64b7": "0037729433660924d182ed91f612eff3",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/358df7d37202b45c17f079c7a145770a010b52": "ba16cf9f92730ba5b30f3bd943c999c7",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/421b15930975a0a2c27056bc72126e2a05d586": "cd733c871b87e614ca8124ff9dca8231",
".git/objects/62/6d4c33fcda37ef2cd3d038daff3ea94fa3dcf6": "c069c2868d2ca1b54de6e6d1c75fbc58",
".git/objects/62/c2ed0f89a63fc12f7060014779a3e95d2fa73d": "c0c957589cc484de2bf00190be42162b",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/1cfc6a5ba38f1a0f5ec488685e56adef3da741": "77c89c94ec78a002110c8bf9bb6963e8",
".git/objects/6a/0c2c0ad10aa1db462c6f4482807755bcde5b46": "aefeb8e57d6a9f582343f50f5dd9fcf7",
".git/objects/6c/fef9424c71facc37eb519b5883cbe4a2e54bb1": "a2afcceeec6239ef6c92ebe8ed3abd7c",
".git/objects/6d/fb37b1592fc603396ac7edad8a54022214da24": "36027fef671d293211f5a053c1b35495",
".git/objects/6e/fe1f0f67ea7557e051b0cbc28de94d99f75cde": "d7a06efaeef6e7c81b4111f8aecc98ec",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/c14e12e15f740eab1b85ca9291af008941d7f9": "fedbcb57947d34992c6e636759452c4c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/7e4dd7a84b4135b453284de98a645933db1fb8": "b6a400465d01b84e99b508d4095cfa5d",
".git/objects/73/f492e307e1e3cceaf363d8532d862ae2d2c6c7": "709602cbe2287698f0f51bfeac120d3a",
".git/objects/75/82f84317f8f8f728f9ba19dbc7a04b48759285": "aa4eccf4975dbe217a220b1c56db6f89",
".git/objects/79/35ebdc08c44ab7aae19ee77215061ecf25d79a": "5ee23ed801b85393f972976fa5d8b986",
".git/objects/79/79ec6fa59898b6ffd99e1f9fb82d589ec241dc": "0f4fc094de5ed6e7344a5db950a5aa99",
".git/objects/7a/cec2a843b49002d1715203a000ca536a2bf312": "f7bad48803579f8a1971f34ce75dba16",
".git/objects/7d/e53c1a447120456436e71787b33da37bfebb82": "2c221ec48b5cb4c277c3cbdcf105310a",
".git/objects/7f/99acce8b007495bccdae392862b1604bc72649": "074b2d90a2f7b64ad34603c28a0e1507",
".git/objects/82/a123268b2493dd1c0ea6c5e78ee68325c5facf": "54705cb0f8d024dd00be26fecb391f3c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/36d43d850f9cbd719d3c2a198d86c491cf560a": "d30c214508a6adfe680b42dec4fd3f8e",
".git/objects/89/dd0fd16a2feb5d99be797858cfd1adf2caf1de": "2c7f49fac1f1d881a36308de70be5f8a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/3ac108f7eea100b0dd632edba967b5f260f929": "e5ea8707905b43c53a1e4f13ccb0523d",
".git/objects/8d/664b717abadf5bd1b14ef6bf6ba2bd49c1c403": "78348670d11a3e9efdc6cf19f5449fc5",
".git/objects/8d/deebc1c2bc39d3e1146712ef692fa7e7bd463e": "e8c5d0cb70228f38d87a06868c940c21",
".git/objects/8e/5e30a28b4435359945cf08b261c86d0de8da53": "6906b6f1c1183f6388ddf8a760f85a58",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9b/10fa9abb50131bca4f483d687c602d18e74eb1": "f48fd3ce7f8e351bec5296f0fb751338",
".git/objects/9d/6969fd89ba175ccb5c67a35bb555e8feccfb25": "6d3d053f05233ecf4395e91bbd221f23",
".git/objects/9f/0dc98abfc8489757f868c586be2fc8591819a9": "47ddd8cf1d605ed683442faa647c10ac",
".git/objects/a0/1f7e9bdcea69916703a820d406ba4a27207dab": "e24fdcdbba47b18b6731961f6aa53f21",
".git/objects/a3/da31f98cf0fb4bd083ec0ad98c2467778565f4": "eda7f1ed8cf94c7f8af238375aba93c6",
".git/objects/a7/3fdb1a716b9014173f7c34a824b90801e9cd81": "3fadf829cc7477d1b0dc5542c692b2d6",
".git/objects/a8/7cd68a45ebf83b8d7f060570305b12a9b052d2": "7bfdc1552fbdea8d42ef407440c22091",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/e27d0c82a1813ae923c62701ef8c4f333382bd": "8be356e996029b9f411f611d786b9d28",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/4ea4208a43c3c2117a275309708a23c570a5ff": "60a5b3c5ee63c5728b4376eb73bfb209",
".git/objects/b7/013232652dd8ee94c8a01d1cd8ff8b6ec4fbb8": "15d5f548a4d55bd0a7ab808c09577853",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8a218726fbcafa16a3a7cc391420abced43939": "bb99cb855e8082998b403b404d8c7166",
".git/objects/b8/9c554cd69284f767d1d09b7504cc671b529b50": "088ca85602c4fc912795a0cd6c3429b4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/25a4becb4a7cd5a9921017d99649935e8fd313": "deb810a87ed9d4dda212815722daae17",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/ced73904b6d5270ef151d07afc901fb2c9b49d": "72eee89fa6e65f9dbb37afb2999e6306",
".git/objects/bc/34d3049f911c3c33b6a76125fef894a84a761f": "f2161a4985636c1c4ca34ffa744946ad",
".git/objects/bc/c88abde7410cdd889232970cdbe6d1df55564c": "92d61f29b0df9a9ee2b624539cc762fe",
".git/objects/bf/81ab8589bcd7ab14b02fdb2ef803cbb6217fe7": "8ea4b799f10fae9d5f2f6e3eab508abb",
".git/objects/c0/0aef4d1be8c3b417c04657c09af6509ee51c7a": "193fea5b21185fd42326e8e25cfea678",
".git/objects/c2/365415d345dd078d10ae5fe837f5cc45808465": "cfafc2bd7a0cc8d4f028c9647c11a65b",
".git/objects/c2/724de09dfa4b12f500d28641cf4157a5b7b41c": "c56d9bc0fe007db166506d46c6fa4888",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/b082ba93c631a3f73f7e402548ff642b329c84": "cdaff3c5d62e666bd9aa970789928268",
".git/objects/ce/ef8f23843efc44364ac5b4c70f8b7f70f847c5": "efbbfedcd097f9b055d06ed7b35e8cbc",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/76ee32739e910627665038a3a6381fcb0e5428": "a666180a39ac9bad22c3924d1b586960",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/5b09b61339348203c9a26aa1c0f2584a940e0e": "94ea11df8311cda7aac8ff2f08fc7ce7",
".git/objects/e3/fe633af10f04aae65275f4045af433b8733e3c": "1e8967c0d54cdc8a553563f14d3038b9",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/03a03ed773fb29dee726bbf5e0bb87c1f32bb2": "3517ed88126a52b79e1d126ef5c127a6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2f1c54b583f8c19340f45622549d4c34aa3566": "2784615a16f4a72c834170dceb377947",
".git/objects/f3/cf98b45a121bc91928612b8b0fc5b3b4b311c4": "6fe503aa171b63e77a9dc128f288fc75",
".git/objects/f4/16efbe9c5a4abfcf17edc9b02f12ad28007d32": "5737b39972aa767a88c92c841d7ecb0b",
".git/objects/f7/f9bbb41289861747178d2365b488d254dd42ed": "b76d76d36a62fe9fdba9a59f352e2f12",
".git/objects/f9/b706f9b19cdc510ff4f8e16e1a1920f14179e7": "4195bafd54a4eefd105fbd421ce17fe5",
".git/objects/f9/d60117699d05963952d08e085e373d42656b58": "95fe4b638fce7d0bc6d2475e8f729a31",
".git/objects/fa/9a5f9e9008a700188aec0e3356dd1ee2464f3d": "2baaa76acaa871e14de9e6274d2db12f",
".git/objects/fc/d4b3a1fbdacb6e9b8e5b26906d779c10e3c469": "af9c7a3596f1f88894172ceec3fe49c1",
".git/objects/fe/7d3c011f18194fbe35148417b94325ff99d8c9": "84a94ff70b1e87701cd090e31e3f1e26",
".git/refs/heads/master": "d3ea79e69a80da4f90366c517530f0fa",
".git/refs/remotes/origin/master": "d3ea79e69a80da4f90366c517530f0fa",
"assets/AssetManifest.bin": "6bae26890069fe2ddefd73d777eb8122",
"assets/AssetManifest.bin.json": "c8f59eb16c6ccd5d7337799e763edcc6",
"assets/AssetManifest.json": "89494e16e291e8031fa2086fae421543",
"assets/assets/fonts/JogumanOksusu-Color.otf": "5f3a777b151c08a77a358ab4bbf27fab",
"assets/assets/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/SUIT-Bold.otf": "7ae1273a03489307427e1e726c6bc5fc",
"assets/assets/img/0.png": "edba6980d8c1c21c1340c22b34aa5048",
"assets/assets/img/1.png": "9e1839dbc31ba967085a26bc3efd306f",
"assets/assets/img/2.png": "490516e1f5d8a382e5e734e8808335d7",
"assets/assets/img/3.png": "aeb97f66c329d973e3294f4bef3e6854",
"assets/assets/img/4.png": "cadd8e1765b772e208997a2bf5888e24",
"assets/assets/img/5.png": "d84c8294949c7bc1d3465dce145a8eab",
"assets/assets/img/6.png": "21a2d68ff37366adaf6ee9d5e378e4cf",
"assets/assets/img/7.png": "dadd91b578eb9e88b5740dab45745d9c",
"assets/assets/img/8.png": "bff31ef7e1ec7b3ecfbee3698411da09",
"assets/assets/img/9.png": "e8fbef5fb3cd9bbba89182011d3dcd6c",
"assets/assets/img/big_brachio_body.png": "9cad5a36aa981ee01f634c68f234fab0",
"assets/assets/img/big_brachio_hand.png": "4903e8cd86c66683ecb9f44b3001a7d5",
"assets/assets/img/brachio_8.png": "aa62c65d08cad7b7429c2de3d866e70d",
"assets/assets/img/brachio_8_body.png": "cb81598940a28512381dc9a1596985ee",
"assets/assets/img/brachio_8_hand.png": "4fb5a5779074963a38ba4650d3e6d63c",
"assets/assets/img/brachio_body.png": "82b440a53de32452ca34cd41e175e025",
"assets/assets/img/brachio_bodytail.png": "2027bb42f0f7724db1c6ac8aae1263a4",
"assets/assets/img/brachio_hand.png": "192d491e15664bdaf676d14ea70751da",
"assets/assets/img/brachio_tail.png": "bfb0f76386d0628f0cadafd425fdb20c",
"assets/assets/img/clear.png": "b75d5ce193ff4eed6448dfc626f338df",
"assets/assets/img/delete.png": "5000a36e164b6d98a97b9ba6cc492b61",
"assets/assets/img/division.png": "16bc1dda052cb71213652d518a07f82e",
"assets/assets/img/dot.png": "0d6da0937ae080cf07aff5c1de6b6e44",
"assets/assets/img/equal.png": "7b9033c190c705081a66521520b1e8af",
"assets/assets/img/equal_icon.png": "ff2177512f22c573987346a168fa7be2",
"assets/assets/img/minus.png": "612d9079091bd8b3d43987e39e006b76",
"assets/assets/img/multiple.png": "6119ca0bb6e3fc098c6f14ad7e7575c4",
"assets/assets/img/percent.png": "5b435c32207ab22e123acf01d78130e1",
"assets/assets/img/plus.png": "c3e256184af89501cc0e3b16797f883e",
"assets/assets/sounds/typewriter_snippet_02.wav": "0047cd02d984c7ae0736d859a7ac0a23",
"assets/FontManifest.json": "4d2f13675d63799da46a11491579f02f",
"assets/fonts/MaterialIcons-Regular.otf": "6f0ae34bdcad22f8932e0c24b8400301",
"assets/NOTICES": "ace61c7f9be5c0d32530274704e25034",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0d05551916d5f3fb895f514dc61115c0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "74692134b1d2d8467e60cf23794fb313",
"/": "74692134b1d2d8467e60cf23794fb313",
"main.dart.js": "a62319e17cad3d87168ead32d02a3f2d",
"manifest.json": "75ee4d7df7310e304ab0db7c1ac1cab3",
"version.json": "bbfe66aaeb73d5bb8be140269d74efbe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
