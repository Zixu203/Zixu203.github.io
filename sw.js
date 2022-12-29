/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","b41a1832c81d6b7c4c23290024ff4ae1"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","4c583590c3b608e77cfc72d5174e20c4"],["/2019/12/25/Review/無法計算的青春/index.html","d2325ae6b39320b4d2599ce911a366ed"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","a077fccc963f9d9ff21761aafe630def"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","7756c96f678b48a87c0bfe6e5d34208b"],["/2020/01/19/Review/下雨天，不上學/index.html","134386abc34dbc452d87554a41b64954"],["/2020/01/26/Review/三日間的幸福/index.html","7a538a0289ec24859da697d597c9c76b"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","7f47aaf7db4c7a72fbe05822a9d421f4"],["/2020/02/09/Review/青春期超感應/index.html","6926a29709fc7b124fa81076009279f8"],["/2020/02/15/Review/又做了，相同的夢/index.html","d0aac6356d91569fe13538f8d19b0d18"],["/2020/02/22/Review/回憶當鋪/index.html","91446f6dd15cc33d4c233f2bc0acc50b"],["/2020/03/22/Review/不適合自殺的季節/index.html","8e915b4b3be5fb0b8bc8c4adff5551ba"],["/2020/04/26/Review/我們都無法成為大人/index.html","8cc955a8cf79ab26bcdd22f83ce5abbe"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","d5d2f47ab1253ad529b5e7943d1def7a"],["/2020/05/17/Review/人間失格/index.html","547d1b3d4a8e31a2bf0b5199e92650e5"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","db5928442346a6f3c8ad39edee634794"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","2036d1e716a2bf79051026b0d377cd51"],["/2020/08/01/Review/銀河鐵道之夜/index.html","7dfa06a407945949b00f1a0b1d3b1048"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","831662360d07c742c027d79fed717d0f"],["/2020/08/16/Review/15歲的恐怖分子/index.html","68e2c4a5aa46db719e82fae2e8b0ec56"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","46c326faffb9415da99834671d100d56"],["/2020/09/13/Review/羅生門/index.html","8992d7caee45d99b9841b992314df522"],["/2020/09/20/Review/闇夜的怪物/index.html","81f582873d7006fd0b413df5ccb8c7ed"],["/2020/09/27/Review/14歲，明日的課表/index.html","5f41dd673a00021156331d1c051b42c8"],["/2020/10/04/Review/致十年後的你/index.html","de74032e3254c27b30813f954f57b09c"],["/2020/11/08/Review/滅絕之園/index.html","00f1dcde42a763a127883390e7cb8596"],["/2020/11/15/Review/將愛拒於門外/index.html","33c0437cac1ef6146f6080fe372251a0"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","9d397521842e1dca3d2ae54d6aadfcc9"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","b7fe8048f9440e3affbb23cdc4fc0c70"],["/2021/04/22/Review/道印/index.html","ecc3648283bd07cc6334511585b76741"],["/2021/05/03/Review/戀入膏肓/index.html","994806c7aa2150f5ea4add694efb2653"],["/2021/05/10/Review/Dice/index.html","2eb523debc6c15bfee1ccefb7232d5d3"],["/2021/05/15/Review/魔女之旅/index.html","2c66349fa7badb86149439c6ddc56f29"],["/2021/05/28/Review/戀愛寄生蟲/index.html","306150d085528ad4ad9d7ea4b24fcad8"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","a1eb6d432b1d55013dd46af309995d4f"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","e2b48e449622f198965bc449e27a7cc5"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","fbbfed80b883fba4e55bc0cb3bef44ce"],["/2021/06/05/Review/流浪的月/index.html","7d63f8b6be9497eebcf6616f68546de9"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","a43f646ddc77048952ecb882168edb87"],["/2021/06/13/Review/第一人稱單數/index.html","98a35aea346823fa85f94c14d89b9852"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","fa57ed67c9b681858111af9fbe7ed17e"],["/2021/06/16/Review/願你幸福/index.html","f144231f348cccc5be1ece327205dfdd"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","a84c7cfcf2e557974b8e8790387f5354"],["/2021/06/21/Review/神隱少女/index.html","5c795c74e3c37693be5e6afcb405875f"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","406a3b363701105d4ddc375f5c79c3dd"],["/2021/06/23/Review/天空之城/index.html","04c8207a9a0f5362d49c5de6e6ee1aca"],["/2021/06/24/Review/魔女宅急便/index.html","82851ef1c10f7184cfae2613c894903c"],["/2021/06/25/Review/借物少女艾利緹/index.html","20ad6a80c864b9d3046e8dc347770265"],["/2021/06/26/Review/魔法公主/index.html","537c04fa56bf43c11b1a8a8d2ad40675"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","b4c03a637e560494142b7c5b73221080"],["/2021/07/04/Review/飛雪與劍/index.html","b24440feac436afb01df7741a3cff6b0"],["/2021/07/09/Review/地球防衛少年/index.html","d8b1cc1a848690f408798ecb93f1159d"],["/2021/07/12/Review/Angel Beats!/index.html","5f1ff4a7f1badfb948252a05b8a16a78"],["/2021/07/13/Review/Clannad/index.html","05e6de7664999297024e67f0ba7f0c2b"],["/2021/07/15/Review/AIR/index.html","61b703c3b26cd68bd02ad75dae35e04e"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","b61815dcc81af11f4ed41ac863cfd6bb"],["/2021/07/15/Review/螢火之森/index.html","cc1a5e607af2d907fe0c44fddd2b6e1a"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","cad31d8b90a4722dea548383ee0ab31f"],["/2021/07/17/Review/奇蛋物語/index.html","10e29feb076c297452243bb7633f7e04"],["/2021/07/18/Review/Vivy/index.html","7a2aeac8f0ef978b3ec7c171e32cc0c1"],["/2021/07/18/Review/請妳消失吧/index.html","15a5a9781953bebd5eb92e025bae6581"],["/2021/07/19/Review/漣漪的夜晚/index.html","80bf0313ebfa1271342c51cd0190c078"],["/2021/07/20/Review/月色真美/index.html","ab5ad97c15a35db7d5fd9d24902a9843"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","d9cdc9fc9062f76f7076c1fd47be5e73"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","b182e19e6771f7ac011b9465e19da547"],["/2021/07/22/Review/罪惡王冠/index.html","d3d5b74bf23c98c344336de89321a8da"],["/2021/07/23/Review/弱角友崎同學/index.html","f6cd57477a368ea63c605ab2ed780146"],["/2021/07/23/Review/惡之教程/index.html","3d5207971d8b9cdba5c655002caa54db"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","fdcb5ddc9230d4b6bf5963bb735e2dba"],["/2021/07/25/Review/魔王勇者/index.html","28381dd7a4c0ce929a297d7315c8a697"],["/2021/07/27/Review/一年A班的怪物/index.html","b147d7aa6fa3fd993a1614b065f953e2"],["/2021/07/27/Review/奇巧計程車/index.html","408843194689247a431b81413f03f0c5"],["/2021/07/27/Review/專情的碧池學妹/index.html","cd3e5a4c758c68bdb5c722b22f9936d9"],["/2021/07/29/Review/只有我不存在的城市/index.html","586a937cac683f32417cdfdccf8cb6bf"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","4f0ee51dae4f38919f6850f22d52063d"],["/2021/07/30/Review/可塑性記憶/index.html","9c70f59057ce970f844fc1ab79b99b5e"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","879a8ce226210468a786ec6b400bdaa8"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","1f3776e5ad30930c4905ec218985c0e0"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","cfa8fabe063e163c584c3aa5b25bd097"],["/2021/08/25/Review/清戀/index.html","20f3daefee1ea3e5f44f6ee5e3cc6270"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","f39f0e09208be68adeb54af949f315f2"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","1bb8bb76319f090639a233b84f936928"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f11c8a4195e2c6c77832a7028a4d5ec1"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","0248d0684aec209be27d1aa31ad2ecc2"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","1bad09d7d33586248b4cfe8e2afb10a4"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","f60fc39ae5a2d6308f2cb6b1bbd172ce"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a77fbc8031070c88c0e181b8bf4a4607"],["/2021/10/16/Review/龍與雀斑公主/index.html","d7ae15b56578227374c70975b0e9002b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","a788dc7d6734256d3b92dd219e1b9220"],["/2021/11/13/Review/徹夜之歌/index.html","6700e86b486e2dbca34d6563674b8d9c"],["/2021/11/24/Review/武煉巔峰/index.html","f141a0f772f055d713fa05d3f5fe35bb"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","0cfd24a29a05351abcb98a878b7df22b"],["/2022/01/28/Review/神醫凰后/index.html","1e33c8b642531ef799c0c912f06b26eb"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","af8b34a1f62da36f20321f8f97ea3225"],["/2022/02/13/Review/夏日幽靈/index.html","da7d50bb22b8b7f35206a5e6981bae05"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","767b360e2efbbd0a60d08e36f7d140f3"],["/2022/02/26/Review/賽馬娘/index.html","629296a7c81e409dbc82ef8db711849b"],["/2022/02/27/Review/大欺詐師/index.html","f5d4c8bfe247cdaaea1aa3fcba8ab0a9"],["/2022/02/28/Review/前輩有夠煩/index.html","09fca8e11263731245ba68ba9506904a"],["/2022/02/28/Review/碧藍之海/index.html","b3b1e8626282166e61b4c35255f08431"],["/2022/03/05/Review/落第騎士英雄譚/index.html","f3892e7a5128b94b3b07bf5c860ce20e"],["/2022/03/06/Review/Another/index.html","970adab1e94fe294de015a19eaf5ee75"],["/2022/03/06/Review/入間同學入魔了/index.html","6214bd987c28720e2862d0224ed5f9f3"],["/2022/03/18/Review/再見宣言/index.html","fe29235c943fff7591dee235cf05e0ef"],["/2022/03/23/Review/生若冬花的妳/index.html","3497bc0b262846893da71686101844b5"],["/2022/03/25/Review/天之弱/index.html","6cf2e7a7452484359ec3f8d0aa81b854"],["/2022/03/31/Review/滅了天道之後轉生/index.html","1f3e10bd0b3f6d5abfe92ed07b895164"],["/2022/04/30/Review/泡泡/index.html","2be4cc924aa4d56586f293d546f81357"],["/2022/05/04/Programming/Dynamic Programming/index.html","8d32f770a8a9b1707b8b447c810f527a"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","0daee9bc913bee49f94beb9859e079e7"],["/2022/06/13/Review/偵探已經，死了/index.html","4f68f00dd4409ff3b9be6c489f47ea50"],["/2022/06/14/Review/黑色子彈/index.html","03e5ac33b03e7befc2a3f4f1bab819d2"],["/2022/06/15/Review/黑白來看守所/index.html","16223b8572d0fe3b132d1789784285b2"],["/2022/06/16/Review/虛構推理/index.html","9437a42c8cdc2143c45a78879f9474b6"],["/2022/06/17/Review/戀愛與謊言/index.html","604f99fcfebfd07a81f44a11448490b7"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","b82c28511374ab4adf14509b7b2d0220"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","9b1eb8c87b59e0dff9aa47d9a050bffd"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","4f185afbb7e742687034fb6bbf962b39"],["/2022/07/03/Review/Hello World/index.html","fe5f01ebe6a5872f98160122c99bc193"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","6fe4f9d69c64b3d73c22224ad2605629"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","cf18063393e7926e2760f7b6b557e44b"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","5f97b0b610caf1b1ff480178de5abd47"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","cc4f9905b31545bb3e22b189faa392d4"],["/2022/07/16/Japanese/動詞分類/index.html","6b10f4e758221c65f834e01590d3bbcb"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","c8c9ee5dbcbbd4292085dd5e8cb448af"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","1e6fe46e163ee3e49076f1b4956ea122"],["/2022/07/17/Japanese/音便/index.html","e30e62360c58ad00ce2d82c4722b1f4f"],["/2022/07/18/Japanese/動詞 時態變化/index.html","96a87ac4f1b9b0ffeb94ec0e83ffcdd8"],["/2022/07/19/Japanese/助詞用法整理1/index.html","b8f1144ad4f0e35067bffcccc78e8221"],["/2022/07/26/Japanese/助詞用法整理2/index.html","4cf266c5eb3ae8156b0f7b9fdb9077fc"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","3935db09e9e6840e03a3b4200fd1caa6"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","1c33251436801f427bdae9f01f39b36b"],["/2022/07/30/Japanese/疑問詞/index.html","daf4a6ac5b683655c53dca87651f5022"],["/2022/07/31/Japanese/助詞用法整理3/index.html","c1ae83f0ce8ba2730904a8f601b1942e"],["/2022/08/02/Japanese/副詞整理/index.html","6a605643fb97b5e4cdf1133912b34dc4"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","790e602f5c235c2258d26e93082bcf35"],["/2022/11/04/Programming/Data Structure/index.html","cc674ca60c351899cee372c2129b4a02"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","bed8046f47b61005be8f83482657a509"],["/2022/11/22/Review/組長女兒與保姆/index.html","6924f7096fd40e92487c3bf5b2c8fd5d"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","b1f3c6e8285733a7589c21caa993a45b"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","cf2893bfee1c58507d3dca79853cdf52"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","7644fd598d76828c6471c977e5371c6e"],["/404.html","b9566dbf3ea0807e469fdbe8902958cd"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","fd0adfc9818094edb212defe6e713bb8"],["/archives/2019/11/index.html","29516ed5349be368493c6041560a849a"],["/archives/2019/12/index.html","4bb782ac8802fa3c4c9a3e044a46b68d"],["/archives/2019/index.html","fad19b66e72f3f5f976581e509ab2b53"],["/archives/2020/01/index.html","7514434c39ab88c108c47d4a69db1a77"],["/archives/2020/02/index.html","5de791fd08669ef77d5aeb72e9d612a1"],["/archives/2020/03/index.html","7e7ff767ad02a7f629d50138601c75c3"],["/archives/2020/04/index.html","05bca611b89064b5bcbddd02d361349c"],["/archives/2020/05/index.html","c415e213df5139b2f50328d1b141fb39"],["/archives/2020/07/index.html","675a1b686f2195fbb9fcecabbd615158"],["/archives/2020/08/index.html","cf7d0e5a921fc97d4437291a38e58bc6"],["/archives/2020/09/index.html","f3d9a2941b0012d1c2539941818d0be6"],["/archives/2020/10/index.html","957e1747948fab340bee72928fe8f6c6"],["/archives/2020/11/index.html","5cffa1dec5dad8eee35add42922d829f"],["/archives/2020/12/index.html","3ffd438afcfd56f93ba1de98cf871b8e"],["/archives/2020/index.html","9aa903b4487721c94eb9b7d67a3d6ce9"],["/archives/2020/page/2/index.html","1e12173cd0f8cd790a3580ed3dd42eaa"],["/archives/2020/page/3/index.html","4357e092ad0df4f86d15d42299cf0292"],["/archives/2021/04/index.html","dcb454a263047faff0fd91cfb4c55c6f"],["/archives/2021/05/index.html","3f8f79a13e2e41d892bef2773a7ce735"],["/archives/2021/06/index.html","53f0e281cb0d66d12f2c37a82f260360"],["/archives/2021/06/page/2/index.html","3ddfb8ce063d55a34e38668d4cc30d5c"],["/archives/2021/07/index.html","60390979f6ea3ec16543aa73dd6aafab"],["/archives/2021/07/page/2/index.html","3850c8ad0ede4b22121d39932a81065f"],["/archives/2021/07/page/3/index.html","63cc9205ed99151d7dad03eb25f21144"],["/archives/2021/08/index.html","9873820ebba5593995a00e5298ce6ea8"],["/archives/2021/09/index.html","3d3e0aa034c895201bd87c8ccc972c21"],["/archives/2021/10/index.html","ed1c240954d368ba57201e6961f934f4"],["/archives/2021/11/index.html","14a199bcee1665128024bdecb3969248"],["/archives/2021/12/index.html","93d4bdd6f4e9655fd1f812e36f3556a0"],["/archives/2021/index.html","387efe41c11c51828bccb988750d7d47"],["/archives/2021/page/2/index.html","d9f38e5789ae6117480797dadbee9d2c"],["/archives/2021/page/3/index.html","04633ec7ef38d741af5581107721bbd8"],["/archives/2021/page/4/index.html","615bbd50034602b06cb54d9f1b3130d7"],["/archives/2021/page/5/index.html","1dfc6efcc9f17ac7cdb8a0bb7040f2ef"],["/archives/2021/page/6/index.html","68957e6fc56db8ffbbc4bfc5b0d21a1d"],["/archives/2021/page/7/index.html","7fb544c342e38d3126f61a14e2d18362"],["/archives/2022/01/index.html","8df950d0095f29d1d91616d440d785fe"],["/archives/2022/02/index.html","017cc4685f9e0daf7c6665095a08a787"],["/archives/2022/03/index.html","dcf731848b2f85dcc6e730a8d29a2a08"],["/archives/2022/04/index.html","a468838bbb81e688c2e030d82440e4fe"],["/archives/2022/05/index.html","f8b80df27fe6e254e348ff1518c02826"],["/archives/2022/06/index.html","59c9b7d20e95b0d33be198d79cda0de8"],["/archives/2022/07/index.html","6c34151fc07d896d3ee060740c1c770e"],["/archives/2022/07/page/2/index.html","485ee0ae6c131335c16df1adc7b95806"],["/archives/2022/08/index.html","0c1ad66a20c468d667c743f1cbd974e5"],["/archives/2022/11/index.html","ada9927b155392579b5a5cb3a269eec5"],["/archives/2022/12/index.html","290a6c5e9b6838dbc9d950851f81babd"],["/archives/2022/index.html","ff233f08e89f432fe20328104bdf2202"],["/archives/2022/page/2/index.html","ffd58243d6dc5648aa269bbb9dbf54d8"],["/archives/2022/page/3/index.html","131769df683da167c3af23ca9e202a14"],["/archives/2022/page/4/index.html","de6da9070311251a0cd4e2822928c839"],["/archives/2022/page/5/index.html","15fb94dfb4f557bb248bd2dd97b9e42e"],["/archives/index.html","35f8cb961d7f7924c036e5823cf1d0b8"],["/archives/page/10/index.html","8129f75ace74495ca7e1ad1712ad4a81"],["/archives/page/11/index.html","4f6a2122d377ea7029f97962504cde15"],["/archives/page/12/index.html","283cd4a6eeed34172ce922badbee9149"],["/archives/page/13/index.html","1cfabe3cf131597b5a1bca5751f9d7ed"],["/archives/page/14/index.html","d08a01a89ac829c5b2d000131f721f8f"],["/archives/page/15/index.html","16551ca0aafb0ddcd45eaf732654ec52"],["/archives/page/2/index.html","a138e1ffcd063b5411199f3d1967e3cb"],["/archives/page/3/index.html","e5ed2b7fc79a01a486ad77bfdc42bf6f"],["/archives/page/4/index.html","d7de56af4cbc1383cd5416a98cf14d08"],["/archives/page/5/index.html","b648b3c863390c0db3383fb9c54539e6"],["/archives/page/6/index.html","0ee88f5c29277254a8afe375c327df39"],["/archives/page/7/index.html","2dcb27c74f0d9559311e52601ed348af"],["/archives/page/8/index.html","bc4866105904b3b1609484f4a8f4627f"],["/archives/page/9/index.html","e29c00ec371334f2773979d66de17594"],["/categories/Programming/index.html","5c5d806a2d7955fea3543bfb45be03c5"],["/categories/Review/index.html","3861c93886161084a88fbdf9f1ade492"],["/categories/Review/page/10/index.html","13c651db053c5d531c8d10f689dccfc1"],["/categories/Review/page/11/index.html","73f685b12bd532ae391ab3325d669aa7"],["/categories/Review/page/12/index.html","6c4e643f5c26dd7d45501e2e1fc18182"],["/categories/Review/page/13/index.html","3e6a3ce48c78f3f88434671602b7e460"],["/categories/Review/page/2/index.html","4f4237d2d608c6d5e008ad780e73551f"],["/categories/Review/page/3/index.html","0ab83c51e2a7c2abd6e8eda2110ccd8c"],["/categories/Review/page/4/index.html","342bb140d0d4bb53bf819fae30914039"],["/categories/Review/page/5/index.html","4d2d764b220619abe30a6866611c4a2d"],["/categories/Review/page/6/index.html","83d4fedadc318001fa01415cada0bc86"],["/categories/Review/page/7/index.html","54f98fff31984049df132168b5186c6b"],["/categories/Review/page/8/index.html","e62159741db5cec267e1da4044bf63e7"],["/categories/Review/page/9/index.html","143abb297e4b295c26e6856c2ee1e229"],["/categories/index.html","1da92f5b7fd49184369db30a7db170fd"],["/categories/日本語/index.html","8c6f0e18c763f3d5a03102f38595a4a2"],["/categories/日本語/page/2/index.html","676db7d771a3f6afe36ddcd909a854f3"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","dfe7f1c45d0c167151395c7bccbf73e3"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","080fb73f62ef566d73793489bea366c9"],["/page/10/index.html","64f43c4fd82137120d330fbf7c6fe00b"],["/page/11/index.html","8790d9b83a96fd8eb0e2c27ad590f7ae"],["/page/12/index.html","04dc03f915c20f4185fd48088eebac46"],["/page/13/index.html","8e2ba3fd72e1b9fad296b2f2d4aa7b49"],["/page/14/index.html","0eb324a265b800eeb293b47194b222a5"],["/page/15/index.html","dbfaae19b19c3e4f1f56dec7824980ae"],["/page/2/index.html","ebb23a62dee43f07cf7df286bab99116"],["/page/3/index.html","c357e3a4eccec0aedc6418c662d56cf1"],["/page/4/index.html","ae690d1ff52209829913f80a97d2d43c"],["/page/5/index.html","8c686a8dc8cb151aa85a49105a88144f"],["/page/6/index.html","1f4632537bb874b06ad411c041874662"],["/page/7/index.html","410ae5c776dc51e66ab3a06f961b8d13"],["/page/8/index.html","1b847f5760bfd14a5990f832db6920f3"],["/page/9/index.html","edd2bc992f2d8af87c0eb4ebe8b13f6f"],["/sw-register.js","19ba76ef831c12b9a5a41e9a78761101"],["/tags/10分作品/index.html","7d8414f533d13e452c1fc8f6619c9824"],["/tags/3分作品/index.html","de28b6c4de98cec65a66fd961425d0eb"],["/tags/4分作品/index.html","a6ea9c888a96e8b24aeff9af7e8ba14b"],["/tags/5分作品/index.html","c55aaff5696830548812bdf1b03cdcc4"],["/tags/6分作品/index.html","7395d9c9f3f28d9ffed74f63675e28b7"],["/tags/6分作品/page/2/index.html","9fb2a20c0ffc3038ca13906e47618e97"],["/tags/6分作品/page/3/index.html","3513870b031b07a04c507f3b35f7bbff"],["/tags/7分作品/index.html","2b8c14052783f3a662d2cef7e83c1128"],["/tags/7分作品/page/2/index.html","0b00a8079da6a13515590473ec0aab05"],["/tags/7分作品/page/3/index.html","0e186dd4dbb562a0da1da8396d29d932"],["/tags/7分作品/page/4/index.html","c27633b8706c3ea63e66626eff4046bd"],["/tags/8分作品/index.html","c03e6d5ca8af3e1f203dfb38024bbbee"],["/tags/8分作品/page/2/index.html","a40ca86403cb442815cc484643ff5c10"],["/tags/8分作品/page/3/index.html","b6f9c7d4eadbf73608d6881bf995f96d"],["/tags/8分作品/page/4/index.html","e34a554fef48d2765a3324b133bb35f0"],["/tags/8分作品/page/5/index.html","b30dba0d23ebeae4704b5eb942905704"],["/tags/9分作品/index.html","97e5769fc8bea7fe1f408787a261b73c"],["/tags/N5難度/index.html","67b7988f50974244d186fc8052588f98"],["/tags/N5難度/page/2/index.html","d8dea1b7989f44160ac0e033be08d919"],["/tags/index.html","d3892de1ea3f0abd1829917bf8e6d3bf"],["/tags/アボガド６/index.html","84a7db76126dcdfed097edbdfe382a83"],["/tags/三秋縋/index.html","3d2f9cd88603ee57aeb248e62c4962f7"],["/tags/中國武俠/index.html","5bcac2474fb797e6b0f7266fd5aea120"],["/tags/中國言情/index.html","595e9f574ae0abb9f2ccfb95f8816b0c"],["/tags/二宮敦人/index.html","f2e0e5ae85d34a95a08fdb24ccf4f1d5"],["/tags/人性/index.html","f396a87fd5071a6327696483823d7ea7"],["/tags/人際/index.html","d37db1e2107a24c4c3610d132c3538a3"],["/tags/住野夜/index.html","d3348b0ea299e72f3e4ec660aebe6a97"],["/tags/佐野徹夜/index.html","4254cea84777c836f4d30d07388a33fe"],["/tags/努力/index.html","325328d62527689114956acabe7035fc"],["/tags/動畫/index.html","7180e69388f8284352e5eebd5277f3a4"],["/tags/動畫/page/2/index.html","3ca3f8ae9f0e680881a2ad121ddefacb"],["/tags/動畫/page/3/index.html","a4a88a71de6db29bfc18987c6666e2ba"],["/tags/動畫/page/4/index.html","6b6233bbecd73b73eae882c91941a93f"],["/tags/原諒/index.html","29095b165a2be36554fecde7b009d7dd"],["/tags/反烏托邦/index.html","68da91389e8e85ac54aed17f6d9f63d3"],["/tags/啞鳴/index.html","1f13d4c99894a7407a0598e6631783f8"],["/tags/喜劇/index.html","6a44ad67302cb4c06a23615abcee32a4"],["/tags/夢想/index.html","d2b4d4040d5b70012364065d729e4fd6"],["/tags/天澤夏月/index.html","f99322ed6650b7c1fa749da3f9fabcaa"],["/tags/學習/index.html","9c18d7eb5ddc2a4a613200c18c3670b5"],["/tags/學習/page/2/index.html","d94e778693be6542d4aeebd7bfb60563"],["/tags/宮崎駿/index.html","9654abbad969048c264b038d3a2d0e58"],["/tags/小說/index.html","32866856e63ade8fa45c58a8bb9120a7"],["/tags/小說/page/2/index.html","f3b546e0bd6f05520a4c8215886567bc"],["/tags/小說/page/3/index.html","c36f98fcbee3045764ac3634c1ed755d"],["/tags/小說/page/4/index.html","2dc59e3ff71d5d0a9589ec8171491514"],["/tags/小說/page/5/index.html","cfdb981611d015583d0576d68192e571"],["/tags/小說/page/6/index.html","a07e5ce93eee7e0dcfec4345416bc4b6"],["/tags/小說/page/7/index.html","6b553db6168e5bb39aa6cd69c2818a7d"],["/tags/平淡生活/index.html","66cc34ce0c46aaf1d5e6f2cac8f0871a"],["/tags/幸福/index.html","000dfcb0e5927066e3fab6dff4b30b61"],["/tags/志茂文彥/index.html","665b519f233d91a5c12ce3025518de62"],["/tags/愛情/index.html","1715f68307f53d45d52ef7b5feec9fae"],["/tags/愛情/page/2/index.html","7295844c84167a2a9315301fd3b6f8dc"],["/tags/愛情/page/3/index.html","d7012ff2aa4fca5c24beadf4f4a6656e"],["/tags/感動/index.html","f7863af4894c52195179c82d3e044d2f"],["/tags/懸疑/index.html","6eb248dc0c648db88676796816cd19b1"],["/tags/懸疑科幻/index.html","c9813c164fbd2ecafff6f5a9791efc55"],["/tags/戀愛/index.html","836d326f9bca9594120c5902ddae1091"],["/tags/成長/index.html","532b4a2a636423bcc0c304ce75b813bf"],["/tags/成長/page/2/index.html","14617159594b89a9d614140614e3271f"],["/tags/戰爭/index.html","8437989ada2d9e8ae90a9ef0492c5860"],["/tags/推理/index.html","1e009b02da907f12f5325236044c1d69"],["/tags/搞笑/index.html","23bb0091490accdd78c33b83d5b647a5"],["/tags/救贖/index.html","33550a39fabcbb58c7662387621aef0b"],["/tags/斜線堂有紀/index.html","7befce0388d3309d935cf2f0350c7180"],["/tags/日常/index.html","5e05c0dc0ffc60e11b707dfe9263563f"],["/tags/末日/index.html","371b4702c5c332e8cc1378b82834bbfc"],["/tags/校園/index.html","d9e67a86c33bed5a485b419eadf4130f"],["/tags/武俠/index.html","a26473b8ea141be522b89b56e7d1fb65"],["/tags/武俠言情/index.html","8282871ee77dd854a8651fdf54f8532f"],["/tags/漫畫/index.html","12abc375094a519dbdee3d731b22bbfa"],["/tags/生命/index.html","1d733d66a9d2e13ebb78d11d26526511"],["/tags/生命/page/2/index.html","3d4925baae57aed314527863e9ce446c"],["/tags/短篇/index.html","c6b4e84d2d0839633fc5482cc83d921a"],["/tags/社會/index.html","43e9e7d1dfe8cd758abda570bac86112"],["/tags/科幻/index.html","8d178ff487b20bdf56744164acaf2ab1"],["/tags/童話/index.html","fdc69fa56b8b1c05bf97112674a11a46"],["/tags/競爭/index.html","94378dafeb2075e4f15df75326d932a5"],["/tags/自我/index.html","e7f8a8ec99427018fc2f29512596edcf"],["/tags/自我認知/index.html","57c469bfe2f674abaf416c770cb88dbf"],["/tags/葦舟ナツ/index.html","50628bdc7d8d38fd417f3ab4903cfa79"],["/tags/藤萬留/index.html","cc8af7b9f44b9723fd7569bcd965fa4d"],["/tags/親情/index.html","5958fdcd8072579c1f35f69a0e5715c1"],["/tags/雜項/index.html","da77abc4e913a7c8677bd11a168f7057"],["/tags/電影/index.html","b915b4a4f3b242130898ccaa01fd7a8c"],["/tags/電影/page/2/index.html","73c18ace9b7a1cc53b4aaa2bf6959229"],["/tags/霸凌/index.html","cce34bc835b302d560e735ba50eb41a9"],["/tags/青春/index.html","aed0e8407494510fb22505629b468818"]];
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
