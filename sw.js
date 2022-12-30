/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","e9461bfa96bbaf1f2e206e599ba1f9ee"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","4bf006ed8a93cee319e016a5867c09db"],["/2019/12/25/Review/無法計算的青春/index.html","4f34a3a97af5c433dac491fa44a5ec57"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6658913f165bf04764ed317b1e3999fe"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","73516b6add846009bdba892cb5640ad7"],["/2020/01/19/Review/下雨天，不上學/index.html","481b7ba94cd7be1845cecdf660a4f390"],["/2020/01/26/Review/三日間的幸福/index.html","49e9930afd670c25723cceeb52f6127b"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","71ec179e2e6e5796c79d5b2d2309354a"],["/2020/02/09/Review/青春期超感應/index.html","0fae9ac5c5d9d1c17128c9f56de7ee38"],["/2020/02/15/Review/又做了，相同的夢/index.html","0bbbf231e7e76d96e2d119f79ce5b64a"],["/2020/02/22/Review/回憶當鋪/index.html","698bfa67a3762c38b241d7cfbffcffc3"],["/2020/03/22/Review/不適合自殺的季節/index.html","8a282006a6536f87d9f2cbcfc7cdbc02"],["/2020/04/26/Review/我們都無法成為大人/index.html","90250f33ced06a98f1bb002ddb724c59"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","cc74a9a1ffd575f36fd86e6f49ddcdae"],["/2020/05/17/Review/人間失格/index.html","9979c318a7dffde5a8c4bf6f0e78a36e"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","bc6c16fc24023187f6a5150a4a555a8a"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","e9042fddae4c3b955074ff68be2eda75"],["/2020/08/01/Review/銀河鐵道之夜/index.html","5b84d3929f9885519a0a58351f047746"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","0bee83f7b40d8c03e84109d47cbc1a67"],["/2020/08/16/Review/15歲的恐怖分子/index.html","8e0eeae26b8dc9c16d9777f3bee25c2e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b80f99b04710e195f8bbb2f84fa36c49"],["/2020/09/13/Review/羅生門/index.html","0cc31c650479ecc374fc4d5a7e9d79b3"],["/2020/09/20/Review/闇夜的怪物/index.html","5126b32dc300f4466fe31645194aeaae"],["/2020/09/27/Review/14歲，明日的課表/index.html","3e9ee85389eda22048a223ff738568df"],["/2020/10/04/Review/致十年後的你/index.html","ca95200ae14e4b837c417e602fc4bc40"],["/2020/11/08/Review/滅絕之園/index.html","9a1f69efe44c9e3977a06bec6be111dc"],["/2020/11/15/Review/將愛拒於門外/index.html","2460251ce170b1b1b2d2eb26cb8d5b9f"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","5280605903f3d6071af5293da7448dc7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","7e156e4abb3c77b739d8ddbced961d88"],["/2021/04/22/Review/道印/index.html","954fdea5e46486c97d77f15e661a04b2"],["/2021/05/03/Review/戀入膏肓/index.html","38afcc9c95be9c128146b83b4e09d495"],["/2021/05/10/Review/Dice/index.html","0d7c315cb321beef1e977ebb6bba6afb"],["/2021/05/15/Review/魔女之旅/index.html","2a1013001cd7f5732da32776fe686823"],["/2021/05/28/Review/戀愛寄生蟲/index.html","bff48de05a5eecd06a6a5654713cc73d"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","397f376ef21c4e5f909daa425c35924a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","d916390c173d537c203fc5db65ea30dd"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","2f68714678116b420eb362637d1f3ef4"],["/2021/06/05/Review/流浪的月/index.html","070dfa81b9002be79418d110f4cbf517"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","7127a51018d314778d724d30cffa89d3"],["/2021/06/13/Review/第一人稱單數/index.html","85fa7eff6ec5c44d156ea5f9766ad5aa"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","6f088aa716856d2056a003270791e3b3"],["/2021/06/16/Review/願你幸福/index.html","6491ee029f302e9aa5c4b5002e6e6256"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","fac11c4fcc8f5ef77e8e027b9e0159d1"],["/2021/06/21/Review/神隱少女/index.html","454ac29fd3a2cecd0abd4ce26ad24b90"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","66f49777ca99f2e69925006e46946eea"],["/2021/06/23/Review/天空之城/index.html","28ecd7bb4ced2d287208a56f902cd0e3"],["/2021/06/24/Review/魔女宅急便/index.html","acac937b06fe4314d03b736a25ec5c4d"],["/2021/06/25/Review/借物少女艾利緹/index.html","e5cb30042794e613119046edc5980d4c"],["/2021/06/26/Review/魔法公主/index.html","b64eea057f97bbb46b8ea1f530e63aa6"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","2a1e9d2fe9b2f90ca2803593c6605ba5"],["/2021/07/04/Review/飛雪與劍/index.html","4e61436e481a5c62a77ff8aea43cb48a"],["/2021/07/09/Review/地球防衛少年/index.html","bc7b9d5048afaf4ea5986dc6567bee76"],["/2021/07/12/Review/Angel Beats!/index.html","38da377a1c2b0aeb2a6ac61f736256ff"],["/2021/07/13/Review/Clannad/index.html","bf3ebf053c5cd28be2b458ba9ebfed15"],["/2021/07/15/Review/AIR/index.html","8e973c189d933dab8f15fc555e4905e3"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","33d918bddc731ed27346dad22cb87776"],["/2021/07/15/Review/螢火之森/index.html","e5cda285fee0a07c4ab1da46b6104f51"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","cc3a264347e5ac73e639bd95f517b7b8"],["/2021/07/17/Review/奇蛋物語/index.html","f062a6d5807669c3d6e8360ee612a7fb"],["/2021/07/18/Review/Vivy/index.html","997ab1140ddfa282f630ee8e32c935d3"],["/2021/07/18/Review/請妳消失吧/index.html","cd066a0c08600b8e3a5e59e260202640"],["/2021/07/19/Review/漣漪的夜晚/index.html","8d17764b62961f624ee9e2a1cee8c6af"],["/2021/07/20/Review/月色真美/index.html","fcb84dd4fba08ad6611abcd3b384b019"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","2daab64ac79e1fc28f07d257354adf0e"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","3009a12984bea0519812eaeea8b6f784"],["/2021/07/22/Review/罪惡王冠/index.html","8accdb90e4564543c76a538d95f08acb"],["/2021/07/23/Review/弱角友崎同學/index.html","7b46ea86aa5c002d41811741aa111483"],["/2021/07/23/Review/惡之教程/index.html","3a4ea2342723f6c06a9c868f287bf33c"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","9106bc745fbd82f3fa55c254504a0f91"],["/2021/07/25/Review/魔王勇者/index.html","778c9b7c6346a523a349fb0b1b0e0851"],["/2021/07/27/Review/一年A班的怪物/index.html","9c7b2a580186fa89bf7bef05eeaa7204"],["/2021/07/27/Review/奇巧計程車/index.html","22a85193c307806fbadfec86f4d9c48c"],["/2021/07/27/Review/專情的碧池學妹/index.html","7947f351f5ebd35a818c53e5b85e41d9"],["/2021/07/29/Review/只有我不存在的城市/index.html","09b1170f4733538f734871bfee96fbfb"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","b12112b3d5f89fce52900459f33e551c"],["/2021/07/30/Review/可塑性記憶/index.html","df1e1333806ae3abb0b9a6f9df328ac0"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","9ec960eb29b301f5e6a08ac3027ca840"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","6054e6eb0b752b93a1bc8e5277d0cb19"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","204c0aed434b3deb871471361209aab7"],["/2021/08/25/Review/清戀/index.html","991f5d7bffcff7cc8ade58ccac8c33de"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","7a7b16ca1ccaac8fb6fe5f76f1105d0a"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","6d4799086d15d05127f21a8b8cef26a0"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","116f6f5f0fccfcd3d3379ca4b6932b24"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","a7efcfcf3bcd46b496e895a70f205023"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","e34e081ea084bd30cc425929fb17bf3e"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","55a5bc1d5a7027cf7f2adb734df429f9"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","e27c15dbd88fe7b8559ca44c24a0b6a2"],["/2021/10/16/Review/龍與雀斑公主/index.html","b6e1cdda13f68de3d71aed741be0e44f"],["/2021/10/19/Review/孤狼不想開後宮/index.html","970211ca2b920b3086391029786d0015"],["/2021/11/13/Review/徹夜之歌/index.html","3b3bb9ff8ae4b152a6089d8eee5374ea"],["/2021/11/24/Review/武煉巔峰/index.html","b923548d602bc19439cae7ab6af0301f"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","00d57e06225b992d5b1bb895b23e37d9"],["/2022/01/28/Review/神醫凰后/index.html","de6c45605ef8cfea9bf8760706de90dc"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","ea83b115ad6046aeace061eed0d3da22"],["/2022/02/13/Review/夏日幽靈/index.html","21729ded4618caf832a4c83292ed4f66"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","666de71ea3a652d1f72475f54a89929c"],["/2022/02/26/Review/賽馬娘/index.html","f0341f97c30aac2c2ebfe8791c0bb849"],["/2022/02/27/Review/大欺詐師/index.html","54affbe16362de3f3bc168596c5ab984"],["/2022/02/28/Review/前輩有夠煩/index.html","c7c74c64326dafbf59caf00177287712"],["/2022/02/28/Review/碧藍之海/index.html","b5791f805ee2ebd853c97100af433934"],["/2022/03/05/Review/落第騎士英雄譚/index.html","391b3822a436b8527566d623efb663d8"],["/2022/03/06/Review/Another/index.html","cb97d6f381504ec562d25760e2b277bf"],["/2022/03/06/Review/入間同學入魔了/index.html","cb8601c03cd84b7b73dc244908c9858a"],["/2022/03/18/Review/再見宣言/index.html","7d30325f4bba3f6360ee4f1a901f9e42"],["/2022/03/23/Review/生若冬花的妳/index.html","b04ac5dcf8a315c475ffd224f9a34ff6"],["/2022/03/25/Review/天之弱/index.html","b17a5b98f7227e505aeb896263ff9303"],["/2022/03/31/Review/滅了天道之後轉生/index.html","8d00567b0d8c1a38ec7e9df3cbee8625"],["/2022/04/30/Review/泡泡/index.html","57e0386c599df078fb6b393a0d7bbb2b"],["/2022/05/04/Programming/Dynamic Programming/index.html","8d32f770a8a9b1707b8b447c810f527a"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","7aff841a4ed2ea1961bdc081b0076760"],["/2022/06/13/Review/偵探已經，死了/index.html","dc23c7dca71313304f42c7cf74e4a5e1"],["/2022/06/14/Review/黑色子彈/index.html","8446b7f6ad7c648b21b7d2f33627e410"],["/2022/06/15/Review/黑白來看守所/index.html","0757bab194035020758e2e2fd605dbc9"],["/2022/06/16/Review/虛構推理/index.html","b1b753129ce37ef3a4c5387c0b5de8da"],["/2022/06/17/Review/戀愛與謊言/index.html","a10f5a2df31dd0e457578dbbe7076a19"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","03254c43dce48179d3d1075a855edef0"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a59d77891ed8260e6cea45ee280c7400"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","e4797f19de4c415549b8dad18bd3f61a"],["/2022/07/03/Review/Hello World/index.html","c816bd2e2bf65e0656763475c85a775d"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","842029a89cfa1b39a98a677a51b9d205"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","e14152120901efd4d2a08df0a1d4f75d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","ad257d29c6fdf012ceae4440e59a2a2d"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","399ec7fd1d2378cb51989e103b09720f"],["/2022/07/16/Japanese/動詞分類/index.html","c62098bca277607bc3edac46a2b7319d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","09dca7ce3c3b7af3d4b4f840827f3e2e"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","06dc890ec4f1ff0e24b0704f5fad682f"],["/2022/07/17/Japanese/音便/index.html","fa6b7fb967fb18db53a48ec4b7c6f6cc"],["/2022/07/18/Japanese/動詞 時態變化/index.html","c943644e95daad24bfe7e082f6d86173"],["/2022/07/19/Japanese/助詞用法整理1/index.html","b43be11cc816a25e2d6a8d847bc6ba36"],["/2022/07/26/Japanese/助詞用法整理2/index.html","4f3ab4a7aab6818452676fa32a852c15"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","ca57e48844f483f04c72ab44c1b69050"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","973d61de9a36b3c21dc16115fd138e06"],["/2022/07/30/Japanese/疑問詞/index.html","73ee3027044a61b49413c4d13818be6d"],["/2022/07/31/Japanese/助詞用法整理3/index.html","681b569a4173fea4dadc7040755c16ce"],["/2022/08/02/Japanese/副詞整理/index.html","50a0cca641aea01663ad604cc36fa538"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","1d1473a256cb0273e17f05981ff56545"],["/2022/11/04/Programming/Data Structure/index.html","cc674ca60c351899cee372c2129b4a02"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","09c198250af2d778841d652593084d36"],["/2022/11/22/Review/組長女兒與保姆/index.html","fba3277ef29272473924823436393692"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","094b4eb68074619697290c0230b08995"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","edc5a5b71d3e2118ebf768ed0c40c4a5"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","4516ad269a847d7961c0602368825ab2"],["/404.html","94558bdebab821f64015484c10c526f9"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","eb83bd59166496a56bbc51e988283039"],["/archives/2019/11/index.html","7bc9d5cfc9e8ec21b31071b0fc7f5a8e"],["/archives/2019/12/index.html","75d33004c3eb4644ddbe1dc703e3d439"],["/archives/2019/index.html","fc71f4d83687f08a0063dc4cc633d8ab"],["/archives/2020/01/index.html","1fee065ed6cc626361673cf3574131d7"],["/archives/2020/02/index.html","db3952d5f34c1de549c7bb80a58ea699"],["/archives/2020/03/index.html","888961adaa60a14174240edd8345af8f"],["/archives/2020/04/index.html","f98dd77850da098d45c36345c7695cfd"],["/archives/2020/05/index.html","babdd925c3d1b0143be857f64f6e1373"],["/archives/2020/07/index.html","e5ed62f9f50bbc0035971873ad675d2c"],["/archives/2020/08/index.html","1c8a82e94934fad145100356a724d1d6"],["/archives/2020/09/index.html","03713805f85fc4e4ccb360239ed54df7"],["/archives/2020/10/index.html","b75d4512cbcbd276e2ea15e27fb7e711"],["/archives/2020/11/index.html","42dd4135c2dd9a1461c17ca293e3a106"],["/archives/2020/12/index.html","86c236e2a3543546d219b264d42bec90"],["/archives/2020/index.html","c61590e7364a40044ab5cdbf1d041f20"],["/archives/2020/page/2/index.html","60a2c9dc4bbbc20044244d93969b20c5"],["/archives/2020/page/3/index.html","f60e84ab0a7435589652694a6a79f9d0"],["/archives/2021/04/index.html","1a21aef47e3ba3d6cbc2be3c2739854e"],["/archives/2021/05/index.html","5d40af7cbcb65d991d7ed5c62377ffdf"],["/archives/2021/06/index.html","6abfb90f03406ea890d04e6a05a15574"],["/archives/2021/06/page/2/index.html","5199f06ac78a82df6a6a8e60a189eb93"],["/archives/2021/07/index.html","2f707add3d047b86a7d98fb0e3c3206b"],["/archives/2021/07/page/2/index.html","3b937bff3bb5e5426f0959455fce041d"],["/archives/2021/07/page/3/index.html","5dc44f99d0fe6f09780d1e306e99c28f"],["/archives/2021/08/index.html","257a9ca648622ffae1c6a9ab1cc2ae78"],["/archives/2021/09/index.html","37d69bc65a7933bca5883120b5e1ddf2"],["/archives/2021/10/index.html","17bef9090ca617891113b493b1e451c5"],["/archives/2021/11/index.html","f9d8f9e691c895eeaabb55bd67165a1d"],["/archives/2021/12/index.html","94b390e18006690527e34ab397d30155"],["/archives/2021/index.html","e9c7b616397ebc80d9581567603bdc8a"],["/archives/2021/page/2/index.html","6716d4d6249101bb0ac9fa1bb8a6c507"],["/archives/2021/page/3/index.html","cdd708e3f7bc4de47642da3295de3926"],["/archives/2021/page/4/index.html","79d2c3234d8f14bc5fa3f2679a70b63d"],["/archives/2021/page/5/index.html","f061d4f4d488042856a33877d0481cb6"],["/archives/2021/page/6/index.html","3e90b687150bbbcb3648b8d41552a315"],["/archives/2021/page/7/index.html","c96e0d5246c6ea4a84970b78616cc5c6"],["/archives/2022/01/index.html","57205a2b6e0b15e5092b3ca7ff1945c2"],["/archives/2022/02/index.html","a0919a12107e739c6b9d1507e95cad5f"],["/archives/2022/03/index.html","cbdea63e6b276652246e82d4bbf103aa"],["/archives/2022/04/index.html","0a634818da878b90257748667afdf92a"],["/archives/2022/05/index.html","d20b0192eec6a7533f6d8d92babf932f"],["/archives/2022/06/index.html","416993972e06170c18cfc17320735e2d"],["/archives/2022/07/index.html","d6d43816bc065f38161a970c27f1dbe5"],["/archives/2022/07/page/2/index.html","cc8d1bfa730a5fa831df1e74a3fc28cc"],["/archives/2022/08/index.html","e81f324573900d63c4aa64eabacd195c"],["/archives/2022/11/index.html","027648fb8593cf81431def54a3034e2a"],["/archives/2022/12/index.html","c3f5188337f9a0f8a30f8ddca06b9ea5"],["/archives/2022/index.html","dfd84b6474b238f3eaa0ff97f8035df4"],["/archives/2022/page/2/index.html","21fd5fa043e0c34a61548bf9aafa2d79"],["/archives/2022/page/3/index.html","cf35544c6f7c63da868eda9ed4d4b4f6"],["/archives/2022/page/4/index.html","06a2f258134096f79efd5398a774e936"],["/archives/2022/page/5/index.html","7e253de7504e3b3d8b40a780f7af022d"],["/archives/index.html","102b92e135f4b130d3d3d0f9a887054a"],["/archives/page/10/index.html","61b939d6a7177b4c7b58488a53c32439"],["/archives/page/11/index.html","f988bb14065fcaf8a23c93ed7f0ba0eb"],["/archives/page/12/index.html","751395789b9bbad6544e566ced7efb35"],["/archives/page/13/index.html","901886adf49bf47bf8eab2f32d3b0329"],["/archives/page/14/index.html","a047e4bcac30719aba0e164dfc4be43f"],["/archives/page/15/index.html","6a734c0aaed23814b98321abfb68caad"],["/archives/page/2/index.html","b2b5398341efc2934997c7f12e1874e6"],["/archives/page/3/index.html","a9352cd676d90f9131440cadfdb38b2e"],["/archives/page/4/index.html","928fc6014df90bff252f350dc706c4e7"],["/archives/page/5/index.html","2f8579526f30377a87ba49feedbd4398"],["/archives/page/6/index.html","8e1960dcc2b70c6512ae928233e351e4"],["/archives/page/7/index.html","9143994c166422d977aa2fe4812b8c63"],["/archives/page/8/index.html","8f2d09c1f5955cefc6a57f1618829243"],["/archives/page/9/index.html","6c32576437aa46d74a334086a7032a1a"],["/categories/Programming/index.html","5db0973c6cbddfe67728639e66fb0f70"],["/categories/Review/index.html","bd3642d81c949b59a4e101ba2b572d5d"],["/categories/Review/page/10/index.html","8f86bb7fe7f52f50ee95ed146b82aaa3"],["/categories/Review/page/11/index.html","3e780df443d85852ced9b4d5d2e7b829"],["/categories/Review/page/12/index.html","483117b7dbd032ab2bf44b9b335346a0"],["/categories/Review/page/13/index.html","f3d958bdf7df0a5ec3ef53ef7c6ca96b"],["/categories/Review/page/2/index.html","070450f3b3216f12ff8ca0b0fdb9f451"],["/categories/Review/page/3/index.html","1527533248fe1575605df7f52163bc71"],["/categories/Review/page/4/index.html","b2cc801a9eb504145dda7901ef0a1309"],["/categories/Review/page/5/index.html","d143c1029af2726ab4531ff1dbc37a55"],["/categories/Review/page/6/index.html","9a0ed57415a3a70c9b51ac2d1bcd36b7"],["/categories/Review/page/7/index.html","da6db5a156e5279cd2bfadaebda1549e"],["/categories/Review/page/8/index.html","6cd53282cb6267790bf8f3856395c98f"],["/categories/Review/page/9/index.html","e7b4f667805259ef1a1131a088af30cd"],["/categories/index.html","200917c40bac01330d5765c8b99bfd8f"],["/categories/日本語/index.html","b1d7c6b2fef1e7a18b6c30af91e6985f"],["/categories/日本語/page/2/index.html","b45b24a44657c2d15f0588daeb116bd1"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","ef4e19664fccb5d7e11c15a76061aec6"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","7402b39cc694fc1333f7d5a1ed9bae16"],["/page/10/index.html","ecac65117c1ddc633fde1db15c006649"],["/page/11/index.html","d3c78174eed0c9a08ce2d8d962499701"],["/page/12/index.html","faeda04f309820c5fb2bac8e807a4577"],["/page/13/index.html","31e0539451c2b1252b4d7f608b0f2678"],["/page/14/index.html","923e4c1edc71070b822318fcb817a5d8"],["/page/15/index.html","fd3650dffbb30694ce1abcc0154637f0"],["/page/2/index.html","1c2b5d15c8ec49ab9e01b8fb932d6b4d"],["/page/3/index.html","bc88e7851293cdd2fae9ac8c273df78c"],["/page/4/index.html","1450a3440596942f1b8a1da9ac269991"],["/page/5/index.html","17952f4ccf84d172e7b0aa0630b4ddfa"],["/page/6/index.html","6b2eab1ab7e0ab2e6f568932b09188a1"],["/page/7/index.html","6b41f189e8b39e1f2ba83284ddde98f9"],["/page/8/index.html","a9430c981d77ab8f5a2196b54649ab63"],["/page/9/index.html","5f52a91d552033b3bc008cdd73db077d"],["/sw-register.js","b434b6fb7dac0ef4faaebcb7908f9728"],["/tags/10分作品/index.html","78d4447603352d08c1d39baf6894831e"],["/tags/3分作品/index.html","9ae83975c55af44dbdf5f8ad63ab084b"],["/tags/4分作品/index.html","208beee40a0863b8dfd93bccf59c936b"],["/tags/5分作品/index.html","2a498ca8de45382750132dbb41b5b3ae"],["/tags/6分作品/index.html","6990f7389ad0bba1f908652d71c7909e"],["/tags/6分作品/page/2/index.html","f05d651a007451facef75142cff56771"],["/tags/6分作品/page/3/index.html","1eaaa93d25a7d224aa5433da439dff13"],["/tags/7分作品/index.html","5a9c3b7df3b8887622476c1324063bab"],["/tags/7分作品/page/2/index.html","f92b33f178bc0b645fea8b6849ef614a"],["/tags/7分作品/page/3/index.html","09f18b9869520cf87bfaa7a7d836d224"],["/tags/7分作品/page/4/index.html","46f536c14d7237ee5a65c464f3f0c1ed"],["/tags/8分作品/index.html","10961effe715460858bb562b172bd81e"],["/tags/8分作品/page/2/index.html","5cf4a5fe44f5d4907a341f4d3d60e874"],["/tags/8分作品/page/3/index.html","45a1b20c00236be8c695f53f8a247504"],["/tags/8分作品/page/4/index.html","bab88a4dde484f21ab11d2cf3c12a185"],["/tags/8分作品/page/5/index.html","037690ba2cea5a45084ee9c508b7541b"],["/tags/9分作品/index.html","2074b8b36ba792f272628d2b3b562a3d"],["/tags/N5難度/index.html","4a07dbe391b59af61b213b117ef3e08c"],["/tags/N5難度/page/2/index.html","456cfa3b2a25013405104ce7992958f4"],["/tags/index.html","acc7579174b6c92d224a17cb2bafe3b3"],["/tags/アボガド６/index.html","a2be15f3aff2c690eec4ff41b9ecce32"],["/tags/三秋縋/index.html","1d1cb8114ad2f123de6f60a17dc01c3e"],["/tags/中國武俠/index.html","71d33f445f323bc06136dfd0071308e7"],["/tags/中國言情/index.html","435478ec462800a4499d3ed2a1a9a93c"],["/tags/二宮敦人/index.html","e9c55d2592939c97503223df8606a1e7"],["/tags/人性/index.html","853b906e48491407c76489d4b922be1d"],["/tags/人際/index.html","d5aa1733db7e9dd25768712b178a01d5"],["/tags/住野夜/index.html","f52d0a532b8321f942c633972f84951f"],["/tags/佐野徹夜/index.html","2e2e3acb00a533c4668dbe8814531efb"],["/tags/努力/index.html","e20a5dafbd2608d1add885f71d3c3502"],["/tags/動畫/index.html","8dd9cb2af5851de8d149b494c2a01503"],["/tags/動畫/page/2/index.html","91ce721a8979a17995ecc4a5f6907a0a"],["/tags/動畫/page/3/index.html","0cb88c01c03a6caa79187029c573ee03"],["/tags/動畫/page/4/index.html","a2421ef48c584597953956ac29f0deac"],["/tags/原諒/index.html","5923a6fe87803ad509c379439e9bc7bf"],["/tags/反烏托邦/index.html","62049ed5ce32b9c7e40993e345cfa121"],["/tags/啞鳴/index.html","b4c6578d16497b3da7bbdac70474ae23"],["/tags/喜劇/index.html","56534b49b9f2db5f4bad1094df4fdf67"],["/tags/夢想/index.html","e8a19f5fd4e3fc84cd2d97a1cfd25d50"],["/tags/天澤夏月/index.html","d8f445be6e4a2e9a66b0fe69efd4b0af"],["/tags/學習/index.html","14c19b53d33ff50636a6fb1092564a30"],["/tags/學習/page/2/index.html","a6cc1fa6f714241deb71d40ae586e977"],["/tags/宮崎駿/index.html","24e2152a2f208fbf888402c79d46ea68"],["/tags/小說/index.html","a1b31f8a3c6a02b6b09479d99d3df2b5"],["/tags/小說/page/2/index.html","d53bb83fed7ff9c05ffb36c521f7c05a"],["/tags/小說/page/3/index.html","27e8ec0d9d0da7cd754374430b4a35fa"],["/tags/小說/page/4/index.html","0f39dc746e7bc0a73b110a9ab8d49bac"],["/tags/小說/page/5/index.html","7dd784110b970eed4cc6f1bd24a1f409"],["/tags/小說/page/6/index.html","d705e27341c6821c38c47d1873f44871"],["/tags/小說/page/7/index.html","49e07b83edd77847b1f3e750536fd9cb"],["/tags/平淡生活/index.html","d504a9a9c374f1b71ae86ccb671d1d85"],["/tags/幸福/index.html","7f6edb3cfe0a07ce69753b576506f286"],["/tags/志茂文彥/index.html","5e9966bb2c8328c869b5eefca7f8f72a"],["/tags/愛情/index.html","8a0ab89fef1f485072318d41f3b2b7cd"],["/tags/愛情/page/2/index.html","3802aceda18e7631849421abf2b8da99"],["/tags/愛情/page/3/index.html","df998e7c75a9f86827bb3254e2de2074"],["/tags/感動/index.html","207c570cd25ca524cdee55dc7fe4ee35"],["/tags/懸疑/index.html","b7331b69a957715022dedd9270752432"],["/tags/懸疑科幻/index.html","8cb27bd34ff3259991e077686584c406"],["/tags/戀愛/index.html","0797b215992ae369a77c3ada20d52ac7"],["/tags/成長/index.html","975f7ea7f4b0d77d24f7863d297b0689"],["/tags/成長/page/2/index.html","df41ec69e3f0bc73e3c965ff4c524e7f"],["/tags/戰爭/index.html","8b567848509f3ffb31c35fe22711acf3"],["/tags/推理/index.html","d07340e1355514e8b123e9f25a12765a"],["/tags/搞笑/index.html","658f1491dcaaf8b11bded11adc720be4"],["/tags/救贖/index.html","f8ec2c21ad7513fe900dcd32bf86be60"],["/tags/斜線堂有紀/index.html","51c0ca81d4ed24d4f3d6d0e715f71d10"],["/tags/日常/index.html","98da2cbc0e41b3a6b3953cdd36edd917"],["/tags/末日/index.html","0f506bb506358d4253fb352cba86343e"],["/tags/校園/index.html","140ec7d20e7cebc1d3e2a0ff749f5748"],["/tags/武俠/index.html","d13cdcba7e2869dd438a541bbc032422"],["/tags/武俠言情/index.html","922730f56e5a62a36068f1ea9d55dad3"],["/tags/漫畫/index.html","6795cbab71afec678fa88321e40fbd10"],["/tags/生命/index.html","24b99f2aa272695a34305b2e4844b92a"],["/tags/生命/page/2/index.html","d6c4a57af14acc4e2baae8a2e1c2acba"],["/tags/短篇/index.html","b8e16058febcabda9cf013d3b416e249"],["/tags/社會/index.html","cff60273cca689f42c106b1c981cb7e7"],["/tags/科幻/index.html","232903d65ee9195cef429ce6fcd17da1"],["/tags/童話/index.html","e59fb37c5896a338c191da6f2c5682d5"],["/tags/競爭/index.html","996869cfd940c22c0e5a7ddfff17233b"],["/tags/自我/index.html","610eee4a75ba3a055a03a5cd7ee5db78"],["/tags/自我認知/index.html","c4bcdd9a6de789a764ea69d5fb127028"],["/tags/葦舟ナツ/index.html","a18e8d9742bb123dd6b74a858590f778"],["/tags/藤萬留/index.html","d3802dea4361bc2bbdb5344baeec2058"],["/tags/親情/index.html","f916af9a04e4baf118bf41240c9003f1"],["/tags/雜項/index.html","849a45d43f0befb52235a42495a04fc7"],["/tags/電影/index.html","e754e6f6998ecb8512c1d35e785871d5"],["/tags/電影/page/2/index.html","1265c432a3621706797f47a4c7d8337d"],["/tags/霸凌/index.html","374838fcef5ffc8a29116b0a91a95ea6"],["/tags/青春/index.html","ef71f623b94260cf63a8f217cae2e5fc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
