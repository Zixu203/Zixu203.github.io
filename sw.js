/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","61296bcbab7b407b72105e9c1e5f24fe"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","1bf6a600bad43077c93a058bee22b3ee"],["/2019/12/25/Review/無法計算的青春/index.html","fb5058ef23688f3f4c12aa6e5566a004"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6035285781983f6adcd188b2896d0650"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","0700cc2aa09970ec87f483396389e29f"],["/2020/01/19/Review/下雨天，不上學/index.html","3c8a7ac3c4446128e4122f5c4036ea0e"],["/2020/01/26/Review/三日間的幸福/index.html","753ad0a8699b29acafccdc96df460517"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","9c207272804a74f3dc2d2513ba035a17"],["/2020/02/09/Review/青春期超感應/index.html","a80695f794fbe23fe8a16ca387d6fad2"],["/2020/02/15/Review/又做了，相同的夢/index.html","9e52a1547005183e339de35c41d878a5"],["/2020/02/22/Review/回憶當鋪/index.html","9546006b8fe14a5671565a71d4b557c3"],["/2020/03/22/Review/不適合自殺的季節/index.html","bbfbb03d9f8465f7c61923109dda6be8"],["/2020/04/26/Review/我們都無法成為大人/index.html","99e91cab1ec7a79b0e28969be9a96c8a"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","a1fb1a5c60b99a3e0b3e9a4c2d1ae206"],["/2020/05/17/Review/人間失格/index.html","d58aea65c31bff10e23307437fb8571b"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","5383795a473e0ead44b286a458a20c06"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","3baa2b3431d8f6b80ef738b7905e0cdf"],["/2020/08/01/Review/銀河鐵道之夜/index.html","34422f73fb288a84ace06e5709ad4e9c"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","73cf7b8ac9d309dc70cc992d2ef1355d"],["/2020/08/16/Review/15歲的恐怖分子/index.html","c23031ce629ab1cddc1cef51202fc45e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e46ad7ce26520dbd8db4c8a303f89618"],["/2020/09/13/Review/羅生門/index.html","970b21ce81ec2da2870624bd124d3310"],["/2020/09/20/Review/闇夜的怪物/index.html","96aa93d7a3d92210da201d98475cdc39"],["/2020/09/27/Review/14歲，明日的課表/index.html","8462501cc7d321033964ea4ef02628c3"],["/2020/10/04/Review/致十年後的你/index.html","46006f6684d7b32a4a404d99abbf3bad"],["/2020/11/08/Review/滅絕之園/index.html","c156363cd78e179ea1e7ddb27401b68d"],["/2020/11/15/Review/將愛拒於門外/index.html","03e758719cffed8460d53e022d3f79df"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","bb1bd18dd1232a4475d79a0cba130ccb"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","b6897363d12ecdccc2d5eab9d7d436b4"],["/2021/04/22/Review/道印/index.html","22dc878ba461b814cf6f5d25d213b618"],["/2021/05/03/Review/戀入膏肓/index.html","ec3c2bad491a4c7d6f133c900d2071fd"],["/2021/05/10/Review/Dice/index.html","d928d328471e32fe95a4fd407433798d"],["/2021/05/15/Review/魔女之旅/index.html","465d49bbd0895e699e875147c8c1e0d0"],["/2021/05/28/Review/戀愛寄生蟲/index.html","bd214a2a1b63a6568918a25ee8ea2410"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","4fca9992a9f9e4ffc6fe518bdd2f188d"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","dc9c4299c54fc01c232d098a16df70a1"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","60127eb2791e6dd089492bb484a965f2"],["/2021/06/05/Review/流浪的月/index.html","8919ed3c83ae8a134481dad23d8cc386"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","fabededfc774d8f6defec218b1ba9c0a"],["/2021/06/13/Review/第一人稱單數/index.html","280bd6bb87e58845ba731851888a546f"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","c1f3544c02c5155894d264d521831cc0"],["/2021/06/16/Review/願你幸福/index.html","31207d3c4390a9260d9d167a5b5e74b9"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","44018ba9e21e0ac93982b92311ae5d31"],["/2021/06/21/Review/神隱少女/index.html","47eb672bb38539fba5ac23e970b6828e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","2dcc7dad7d47cafbaf8f907b55b97b6e"],["/2021/06/23/Review/天空之城/index.html","c0d6a82dca737909e7326b45eadcad82"],["/2021/06/24/Review/魔女宅急便/index.html","f653fd798a0a941756a6c182e649edaf"],["/2021/06/25/Review/借物少女艾利緹/index.html","65e9a1f2a40ffbdfdda1d43e646f7397"],["/2021/06/26/Review/魔法公主/index.html","9d346d059786a80148b7a8ce363f0afd"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","1dad66405f6824da33142f84204627a6"],["/2021/07/04/Review/飛雪與劍/index.html","c7ef17c21ba67654d6273707568cbc84"],["/2021/07/09/Review/地球防衛少年/index.html","2b05b407096aadfde2d65b7f2f057a54"],["/2021/07/12/Review/Angel Beats!/index.html","4c9d9cc08958eb96c46de131c705a642"],["/2021/07/13/Review/Clannad/index.html","fe8134f0deb667cf746b869ef3010889"],["/2021/07/15/Review/AIR/index.html","31e7e179ff718b7f808505fa1f34a780"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","242cb478e4d7683f177a377bf1a5ee9b"],["/2021/07/15/Review/螢火之森/index.html","dc3be2858268231fac4cd3a36f05a1a4"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","28688e4313d5c13f5141975da9bcbb81"],["/2021/07/17/Review/奇蛋物語/index.html","e75438bc2d7eeca69bac763b115430f0"],["/2021/07/18/Review/Vivy/index.html","b3bb9c4be638dcde948118cab6699e42"],["/2021/07/18/Review/請妳消失吧/index.html","297eb1908e1c968a7480d9cea4d97db4"],["/2021/07/19/Review/漣漪的夜晚/index.html","7a2abad8a7bd9a1e3274fbae28d71da2"],["/2021/07/20/Review/月色真美/index.html","4a2d184bfe3d068d42333a7861a90a06"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","0f68a259e50dd3f66f5a9fb2b175270c"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","879d38f316bf846f3c343a3904219bd7"],["/2021/07/22/Review/罪惡王冠/index.html","2563dc08b994581a5fb8b62f99d78328"],["/2021/07/23/Review/弱角友崎同學/index.html","45580cfb9e9c6f3dd2e2cb7ed88d4f46"],["/2021/07/23/Review/惡之教程/index.html","a067f2cff75a7c05b6ea2f9604423bac"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","2b6fc241ff76bbc4d0e923f4828279f9"],["/2021/07/25/Review/魔王勇者/index.html","175cdf236426aeb25360750789c2935e"],["/2021/07/27/Review/一年A班的怪物/index.html","d2c339c655936473514c2ec601862a57"],["/2021/07/27/Review/奇巧計程車/index.html","f5dcbcb23e70aef03cc8de50c6e5fecf"],["/2021/07/27/Review/專情的碧池學妹/index.html","4812a142b56e71cf5353461934c1dc49"],["/2021/07/29/Review/只有我不存在的城市/index.html","5fab9a0c65a528f3a9869c4054e3e40d"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2c1eba6b6ab1e5513d1a8de23ff38db1"],["/2021/07/30/Review/可塑性記憶/index.html","4c7b7770b233669378e6b5f694424ce0"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","9270b743a8d5d65546ff8846b86e45cc"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","e756837c853ef5d6c9eaa2306ca9771e"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","58d155564b9c7fc99339f64488038cd6"],["/2021/08/25/Review/清戀/index.html","9884dd9e48d5582f0a5c4414a3b3d5e8"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","e1e26e3e962b179f9fe8732c2dab2ddf"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","0aaee9d2a3a6b8a834b43a0bd38a257f"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","30951ecce2a591c34281cd83d61ab4c9"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","1993278659e2b7e3cda955878fcfa843"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","8d79de104d3b59bb39c7698e9b7c64a0"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","d3dbf59f8acefc9fb85263a521192898"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","4179b789c92adabf171996f0ec4b825e"],["/2021/10/16/Review/龍與雀斑公主/index.html","885591c58474786cf17cdcab6cf83fab"],["/2021/10/19/Review/孤狼不想開後宮/index.html","30c87872a71dfdc896dd9cf606cdc894"],["/2021/11/13/Review/徹夜之歌/index.html","54ab3653433a9e5993eb20058cd3b6e2"],["/2021/11/24/Review/武煉巔峰/index.html","af765745b956a8aa4fc8fab65218f4ae"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d759eaf3966c3c6a32e4d310f3c94366"],["/2022/01/28/Review/神醫凰后/index.html","e73d1df5a78c6f0f8115f18b0b094184"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","82b4a1b4286294158bb44414c2e522d0"],["/2022/02/13/Review/夏日幽靈/index.html","56721889b8eb52a6c92b502c8a2b3657"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","b425258fb1dab456dbc2253e55a54e39"],["/2022/02/26/Review/賽馬娘/index.html","b508d9a4439ae09a22182b5c5ea19099"],["/2022/02/27/Review/大欺詐師/index.html","fc085aea7411829fbf8af0dd7e84b561"],["/2022/02/28/Review/前輩有夠煩/index.html","bc42aac3eb366bf45695360ee7e22e1d"],["/2022/02/28/Review/碧藍之海/index.html","b0e7447f4f202f03ab2f9ef1f968cb8a"],["/2022/03/05/Review/落第騎士英雄譚/index.html","9ec0a0a0905c7121b845758be6ad5734"],["/2022/03/06/Review/Another/index.html","6edadc4927dbc918aa966f2fedfccfda"],["/2022/03/06/Review/入間同學入魔了/index.html","4dee1178236a53a6894b548c9c8eef5f"],["/2022/03/18/Review/再見宣言/index.html","69337d538f812d36a78b5a173988e010"],["/2022/03/23/Review/生若冬花的妳/index.html","5222f7b4409b2ffbad2b097b65e0908e"],["/2022/03/25/Review/天之弱/index.html","346a7ad5902b880a8a074bb0d52f0c2c"],["/2022/03/31/Review/滅了天道之後轉生/index.html","7adb1fb79e2171df1a4c818074d8a2a9"],["/2022/04/30/Review/泡泡/index.html","548ddd756967e3ce11c380db9ba5d8df"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","2df82b7aed9e4882607b0d932dd2bdb8"],["/2022/06/13/Review/偵探已經，死了/index.html","1841cab880c588bd9fee905f3f7bcb66"],["/2022/06/14/Review/黑色子彈/index.html","f713adfe8b1d27dfa8d4334ac86f2be9"],["/2022/06/15/Review/黑白來看守所/index.html","2d1700d1699ea4f56188278b05afa9d3"],["/2022/06/16/Review/虛構推理/index.html","64b16494d7b4c88ce927d8aedb092111"],["/2022/06/17/Review/戀愛與謊言/index.html","c8969cf169f29b23cfd839e885f0fec4"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","01eee309ec706daaa27c2178c5e20c2f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","2562b09b7b90ca4a31f17d34109bfff3"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","67bcc301140c4cb989c7b8ed05d7e29e"],["/2022/07/03/Review/Hello World/index.html","d48c3f1fb595fdb5894c6e130857bf4e"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","9ea8e9c127566a284e3fa9817e704e81"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","e43992dbe67a9ac39c72fd207548ff03"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a994ba2f894a29e916ca7b61c1dcac81"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","bf6d178eaa2df71b716511f1b25118e6"],["/2022/07/16/Japanese/動詞分類/index.html","4a66c60acf04d7c770834f6f29aca6aa"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","7c26d88792c19e9952f31187e1771c0b"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e16e5d4762c90da15005fcde97035eed"],["/2022/07/17/Japanese/音便/index.html","789cd86d86f37cfc4d7b8f5e14c51409"],["/2022/07/18/Japanese/動詞 時態變化/index.html","ffac12c7c146c8731f8614bfe0059828"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4750359bd88fc8ef86185c281a57e4e0"],["/2022/07/26/Japanese/助詞用法整理2/index.html","19895c137f3cf782341240a4ffc9930a"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","9bf877dbfae2d700ee2a766953b1dfdf"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","ed4428aee55191f2817c9263a0b22745"],["/2022/07/30/Japanese/疑問詞/index.html","3bc6ffd2ebc5744be49a400d54c5aad1"],["/2022/07/31/Japanese/助詞用法整理3/index.html","fd9dd12c7f48278c50fae9cd0fb294be"],["/2022/08/02/Japanese/副詞整理/index.html","82410b5d6d1ca8df1a015ea08e67f717"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","6c171591e828bdb7733c12965f4ace79"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","10fdedb3fd1609a58dd2af2516bcc2f9"],["/2022/11/22/Review/組長女兒與保姆/index.html","0c332396e72d4ed6e68a4085efb18695"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","765948c96c407275018769620206d094"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","9fbfdaf1902d04d3a3276044a2d31f62"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","8bd9b52b6342b57b1b10b0f86c1acf80"],["/404.html","6681c5e6a344ca341753ee4eaf3da829"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","fb86de03b06cc121a25c94e4479a2daf"],["/archives/2019/11/index.html","41bc47b3f474983134b9175924067faa"],["/archives/2019/12/index.html","f979710bfe7aff720f73fb8f48e4ad32"],["/archives/2019/index.html","a6cfc9ac4eebbd4384177a835bf2728c"],["/archives/2020/01/index.html","8b3d24abcd8dd54e1f7a3c64e364f765"],["/archives/2020/02/index.html","2894804426a7600ba0a88fccc9658be2"],["/archives/2020/03/index.html","137c4294344674e359515ac36897641a"],["/archives/2020/04/index.html","963bf00fc9a7e34e0294c2e181d0da46"],["/archives/2020/05/index.html","ec48c241355476ce5ff6a521b6edaf34"],["/archives/2020/07/index.html","d9d8496a6199645d47f20bacb90847e0"],["/archives/2020/08/index.html","df3bdeb8b5756b3a5b166a7be6679c4b"],["/archives/2020/09/index.html","22a304f795f52e7a5483925b13a705a4"],["/archives/2020/10/index.html","c8133f4612fff10ee48ef8761fa28108"],["/archives/2020/11/index.html","a262b2822a5e445e2f2be49b5fa55859"],["/archives/2020/12/index.html","7dce0b606897083acd25a88d76440630"],["/archives/2020/index.html","75e503ba71601355a7ca4a75bab8e131"],["/archives/2020/page/2/index.html","cefdf3d53b7cee516e011bc668580b30"],["/archives/2020/page/3/index.html","ceaf6d0b84560e061b7f2deb581a775b"],["/archives/2021/04/index.html","2e5f3abc5bd4ee8a88bd18e41f763464"],["/archives/2021/05/index.html","95e12622650fc3b48574fca5004be33a"],["/archives/2021/06/index.html","b93706e1af9c193a79f2bd7c2e895f40"],["/archives/2021/06/page/2/index.html","4535ab1be7693bab1a67d8a245267f01"],["/archives/2021/07/index.html","9eb8e82e5be5a4b82b2d4bae4ac71134"],["/archives/2021/07/page/2/index.html","c7c1791ddf746738c2d24c03d7d1b587"],["/archives/2021/07/page/3/index.html","96fecbf12dc68dd0a42132e626aabaa5"],["/archives/2021/08/index.html","a1f2654de0bb6614601ec9ce6b31003c"],["/archives/2021/09/index.html","b96e3baeb9c0a0bf5cb886fa29034581"],["/archives/2021/10/index.html","0592643f329abe065c113bc6e42f65db"],["/archives/2021/11/index.html","efa5c658cc2713f10141f9f3a4702d0e"],["/archives/2021/12/index.html","80ce7bd0e35a9259b14deb036f9a622b"],["/archives/2021/index.html","db55ce12f9030d1083bb62d0294f7646"],["/archives/2021/page/2/index.html","7658da4a61ea6d861e7cc74caee27579"],["/archives/2021/page/3/index.html","cbf48ec7c184c748bf45b7891ccf4880"],["/archives/2021/page/4/index.html","5a6b62b2f0ac497061838fd0307b2fe2"],["/archives/2021/page/5/index.html","cb428d3c583e3b4964b98170cd56f8bb"],["/archives/2021/page/6/index.html","bcc92e60897b20a68c3186e455816f98"],["/archives/2021/page/7/index.html","495952dbb34f7c4b3fb9a5919bc019a5"],["/archives/2022/01/index.html","39ebbfebc8f3cbe54dce1aee940aee59"],["/archives/2022/02/index.html","42ffefbced2962ff28e68138e28c7bab"],["/archives/2022/03/index.html","0aa601fe9152aaa26868395a53857a8e"],["/archives/2022/04/index.html","c8709203990b1886db3195c9e5838251"],["/archives/2022/05/index.html","449e9faf725313c06c11aecb7c21b6a6"],["/archives/2022/06/index.html","74156eed2b96e5a9a930567172e5e33e"],["/archives/2022/07/index.html","5bc318d8b5db4e9a056003b54e8f7114"],["/archives/2022/07/page/2/index.html","53b09d28e03abead1d2d676cf65dcee8"],["/archives/2022/08/index.html","55f7fb03230f87224c20fb73bca8515f"],["/archives/2022/11/index.html","6ffa2d9d04a291861324f31ae73c96ef"],["/archives/2022/12/index.html","cff507786e7e573e57d7cc9c933f31b2"],["/archives/2022/index.html","2d6226443535cf8e79dc36dbd7781d98"],["/archives/2022/page/2/index.html","3ec1855e2f52f9c615338b3cd718514b"],["/archives/2022/page/3/index.html","43f465352398f274ba82b440ae4b2085"],["/archives/2022/page/4/index.html","5ae2af9194f73d34abd291eb883674b5"],["/archives/2022/page/5/index.html","a74101cf49ce9a8d1154896dbe2a22b4"],["/archives/index.html","6b297d2fa787e7f87a53d0fb559c26cb"],["/archives/page/10/index.html","c402e589bd0b15ec4d1ac37ddfcc9b99"],["/archives/page/11/index.html","0dc26dab432fb34b956aed425ea83207"],["/archives/page/12/index.html","a92f1aa9b69f2fa7c19bdb19ff565c77"],["/archives/page/13/index.html","cf9034a7a0809c1219bb418ac111baff"],["/archives/page/14/index.html","de9dbbefef14a2789493a37c30336201"],["/archives/page/15/index.html","46b81d407f5b2a3d90a250e9481201e7"],["/archives/page/2/index.html","9d9e0af38192115b115b3def50b84d40"],["/archives/page/3/index.html","8157db71acc23a21eb2ab81bcf037bf7"],["/archives/page/4/index.html","797b9e5a49a813ce2533ad05b7931971"],["/archives/page/5/index.html","f3f10a7cd860836e215c8c04ae314863"],["/archives/page/6/index.html","92985573c8b8382f5052676dd9e3c2e2"],["/archives/page/7/index.html","65e8f66e3b0439c2f5b6d1267078ee55"],["/archives/page/8/index.html","19423936a273b371035e6c1475f216c1"],["/archives/page/9/index.html","74b595ec01b44a381d4a2a2b94b7a872"],["/categories/Programming/index.html","6599cffcb2bd13b7991d83d540420179"],["/categories/Review/index.html","fd0e7b27b2ee801d23b6698457617118"],["/categories/Review/page/10/index.html","92fcf200fa9ddbaaf540bcc29b9a24f5"],["/categories/Review/page/11/index.html","0f8feb2266cf2ea5db6130527e18cbe0"],["/categories/Review/page/12/index.html","49ca7b5f4c5487a1639def8236460383"],["/categories/Review/page/13/index.html","edbaa3b6a5e4367665bf43bf744f47dd"],["/categories/Review/page/2/index.html","ad09f82c96f4705780508bfa50833677"],["/categories/Review/page/3/index.html","f13137baf5f572029711dc3ae2b1789c"],["/categories/Review/page/4/index.html","dbec51ba0701e68caee2dc6fbafa81d8"],["/categories/Review/page/5/index.html","731853bb29212282ec5011c7fbf0ba11"],["/categories/Review/page/6/index.html","44fd05ff8b258194f6533e82737f26f8"],["/categories/Review/page/7/index.html","0f85695f8af8d38309e65ed15e196e05"],["/categories/Review/page/8/index.html","dbf919c3e259451e7451aba0d8cd0fc3"],["/categories/Review/page/9/index.html","45aaa3e27869fbc4424f46db6be268c4"],["/categories/index.html","ca4fdfe65ecd522632a93102aa12e31c"],["/categories/日本語/index.html","6568e237ca5b56c2453ed7d4f7525dcb"],["/categories/日本語/page/2/index.html","20676d732f9123e293462c24f468bf95"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","99a378ebe96ee10c592f174d3967bbed"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","cc87ed63428e4cb93a4468dae1dbbbe9"],["/page/10/index.html","01cabcb248f816e354375cfdfc7f569e"],["/page/11/index.html","517bb93555c6f86dfe78a2f9dd7706fc"],["/page/12/index.html","2f06e5119cb297a427dbf0fcb0e9e866"],["/page/13/index.html","740a31718a0145435ef46fd6c2c5ebdf"],["/page/14/index.html","5e62f8d7e22e15a4a1ad3c583681e1e0"],["/page/15/index.html","0fe4204eac674dab8d3dc08ef2e8561d"],["/page/2/index.html","645c62ff0ce3bcc58ac663bc81fcb635"],["/page/3/index.html","a03cd189557532e7a4bc370b1b9e5859"],["/page/4/index.html","ee6ab86246d2f9ab6a08e615d5ebb21d"],["/page/5/index.html","39739812b7de8f09c84ae10a914f7407"],["/page/6/index.html","e7cf97427094d138760555cbe139d6bd"],["/page/7/index.html","4db77e93cda24a3e4a9fd34f9551ec62"],["/page/8/index.html","9a2d4e275ec57036bb6f45d66d7a2c70"],["/page/9/index.html","987047294e24e860749c65320b029f84"],["/sw-register.js","12297f7241b485f006b34d01a540c03f"],["/tags/10分作品/index.html","ae78a06288ac2a67cf7afe9f1dd76d3e"],["/tags/3分作品/index.html","1b8086e81d3f8e845e64dc7a0bc6652b"],["/tags/4分作品/index.html","908de9464ff8e9633a1aa191faef21c5"],["/tags/5分作品/index.html","9ef0064664932f9c783dabb13ffd60b8"],["/tags/6分作品/index.html","aee9f4a0b7a77dacbf899094144f7737"],["/tags/6分作品/page/2/index.html","b5294b2a17e7ff062f70b2440373d377"],["/tags/6分作品/page/3/index.html","68510ab672be7edfe5406000ceb1abd8"],["/tags/7分作品/index.html","50f60dc0f8c21d6669a85e083b9cd14e"],["/tags/7分作品/page/2/index.html","64d200dec5fa0423293025582be11bdc"],["/tags/7分作品/page/3/index.html","862f8a40e2c79e0f3e23238bffba2744"],["/tags/7分作品/page/4/index.html","8cd5929185ffd2efe5255e35efafd283"],["/tags/8分作品/index.html","f0dbc5c28cd817c50a565e55775803aa"],["/tags/8分作品/page/2/index.html","3a84f7215f0dedf96e7519d4b5d3ea57"],["/tags/8分作品/page/3/index.html","9bf93a8710b882737b18027acf90b039"],["/tags/8分作品/page/4/index.html","ab82e6b4e15246feba6addd76e55ee84"],["/tags/8分作品/page/5/index.html","07744b3f320d2c3d2e6c687cd46af8da"],["/tags/9分作品/index.html","1ad7d8d24350d2abc6e83c62eee4e737"],["/tags/N5難度/index.html","42dfa8c7062a5918bb252cabeb63569a"],["/tags/N5難度/page/2/index.html","899d23605aef3f0e432063aef9ebc2ef"],["/tags/index.html","7a090242599bdb7cd2c8b38828e01e4e"],["/tags/アボガド６/index.html","797c48322f747399a0d81d35a13342b8"],["/tags/三秋縋/index.html","fa73cbb6248e1754f25d35736acfde28"],["/tags/中國武俠/index.html","05532c24667b85b1685aa3abc07424a9"],["/tags/中國言情/index.html","a9b6a8c9d1a8ae95adc73b34925bcdaf"],["/tags/二宮敦人/index.html","f0733714b30670737ca11196f309c005"],["/tags/人性/index.html","45932b92c6e1f69561c3a66bf3ab8274"],["/tags/人際/index.html","dc2fed80ca01647efd9f3175a47c1e32"],["/tags/住野夜/index.html","0a170c179aaed781a32f9a8aae869433"],["/tags/佐野徹夜/index.html","371db783ddea23860ea560e16272c8c2"],["/tags/努力/index.html","e6995f642e1622a7996e28ea86471ac4"],["/tags/動畫/index.html","a3de48c36d1372720ba59bdd372c77b9"],["/tags/動畫/page/2/index.html","6fcd8535deb0d6b9e62a7ce517f6ce61"],["/tags/動畫/page/3/index.html","e2e0936247dd5d873afca5cccfe87ced"],["/tags/動畫/page/4/index.html","85b3c40e9babf9cdf344b24a14cbdf56"],["/tags/原諒/index.html","8ed6b18a16200445b2188eb1b7a0c816"],["/tags/反烏托邦/index.html","68fa17b63abda199b345f3e618cf3478"],["/tags/啞鳴/index.html","921d2eb2381185a4ffa76e23d95cc706"],["/tags/喜劇/index.html","1e2f5cb3171810b1db09a7a9c3ca9b6e"],["/tags/夢想/index.html","b8a1fd4572af17e21184e800cc475738"],["/tags/天澤夏月/index.html","251d1f3defa43ca0e31d602b2154dbfe"],["/tags/學習/index.html","ad4651e8584f6d48666ef326952700a3"],["/tags/學習/page/2/index.html","267c55f39e9b08a56b697fee34b61563"],["/tags/宮崎駿/index.html","a95342b466fbe4cc924ed092855f4870"],["/tags/小說/index.html","7ac5ac002e2462c152d0e551cb2d67b0"],["/tags/小說/page/2/index.html","792579b4e98d0b21b22722ad664cb056"],["/tags/小說/page/3/index.html","2186bd059473c4c2446cc0650b05f5c9"],["/tags/小說/page/4/index.html","c52e18e7d65d5c52aeaeac01feb22ecd"],["/tags/小說/page/5/index.html","7826f407cbb439b310c5f80f5ccf9d79"],["/tags/小說/page/6/index.html","e62fcf2298a6c1b918aa4fc17c0ba8b5"],["/tags/小說/page/7/index.html","7b1c197b62b343408ce16c80d47ece11"],["/tags/平淡生活/index.html","a9c5880dca700dc0adc9f3d92349626a"],["/tags/幸福/index.html","7b0e75f9fb51ab0846ad51b5b77bce7f"],["/tags/志茂文彥/index.html","7ec501400db9e8203600c4d751bd38de"],["/tags/愛情/index.html","9c9b13cc0b29f377d185d1ec9aa1282a"],["/tags/愛情/page/2/index.html","0434b00f32388ef9426c36f407750b32"],["/tags/愛情/page/3/index.html","a551f9f3822735ce153f657721988555"],["/tags/感動/index.html","78a247fbac46cf79ae5a0c16e022e201"],["/tags/懸疑/index.html","f56b65b2bf948074066d2cd35c255aaf"],["/tags/懸疑科幻/index.html","c4e91a5d5e1bb2a0445b58c8f3472aed"],["/tags/戀愛/index.html","e82bc19318f04abb6412b391625ea320"],["/tags/成長/index.html","74cfe62d8ef6b8bf8509e9eefe6c2582"],["/tags/成長/page/2/index.html","3466c1e81e4d7c36b3fc022677ae4073"],["/tags/戰爭/index.html","3f0aa9a1d6bd3c75a1ec0b4655a84ca5"],["/tags/推理/index.html","12fc3e63bfb22b6b391e91c9d743547a"],["/tags/搞笑/index.html","d66610df2abcec24815d3cf3f0d1c5e1"],["/tags/救贖/index.html","e99236914ff0fcb86798aaed2170e15c"],["/tags/斜線堂有紀/index.html","bbc2cc34331864ccfbf8fdfc03553ccb"],["/tags/日常/index.html","a40defbdb407e33dbbd0f19efa4e1226"],["/tags/末日/index.html","c928f0530de681d9d14da886e4d19877"],["/tags/校園/index.html","6f4b7755c6238b9798c229d3279c3b4a"],["/tags/武俠/index.html","300e71f1c5c653ec5392b37def586ae5"],["/tags/武俠言情/index.html","2ee814e276dd42d21444d797ac5d032d"],["/tags/漫畫/index.html","8799ed60b91b2900d8e1e19790a18687"],["/tags/生命/index.html","f7772b2a0cfa89c8966a27f3ec51eab8"],["/tags/生命/page/2/index.html","c80cd985039563ee8e59266c9e97d706"],["/tags/短篇/index.html","6b6081a150a739456ea7601abf5f4962"],["/tags/社會/index.html","e555963a2643aa4a68094ede126386b2"],["/tags/科幻/index.html","24719b21e8b6d80f3fc110f6dcbf1da6"],["/tags/童話/index.html","29c2e34a0c5203e782e2f2fee3d82aee"],["/tags/競爭/index.html","d41123bfe5902d5160c5b06c24955136"],["/tags/自我/index.html","e92da8abcd0868276f9c4ef2a64cf472"],["/tags/自我認知/index.html","42ad83b6ff1464d1ce1424e9c68eff93"],["/tags/葦舟ナツ/index.html","907eb1e1ac432a681e43b265ca97899e"],["/tags/藤萬留/index.html","5883f9b6e733901cb0bbd21a08eb8799"],["/tags/親情/index.html","642d7e3c92bc84dd476d132dc786251c"],["/tags/雜項/index.html","ede6520f2adaa62e58fdbf117464fe04"],["/tags/電影/index.html","d0045d3db669c0760bdd031918df3400"],["/tags/電影/page/2/index.html","0255547ac9e0be36b81e8b7fe838c296"],["/tags/霸凌/index.html","4307c570fa13c41b54389c5a2cd9c874"],["/tags/青春/index.html","5ca449a66851d3277245c730399d56d0"]];
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
