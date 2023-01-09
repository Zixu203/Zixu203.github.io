/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","3fb8d9878b376785622845ce1934a24f"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","40e721a67f1bfe42351b51225062d341"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","9b0498108739feb0f6a985ff8ec4f201"],["/2019/12/25/Review/無法計算的青春/index.html","49275111e378496f38c4ba2d482affd3"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","e0e868d0a63806313f2e4b9f0fc9b5b2"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","33daf15415e8c77a12357739c98d0deb"],["/2020/01/19/Review/下雨天，不上學/index.html","84a564dd50af3b7dd54ad5c8b255f12a"],["/2020/01/26/Review/三日間的幸福/index.html","d4b7dc0925b401049007a36b4f6a033a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","12556707d0709a5ad54ec935fc544902"],["/2020/02/09/Review/青春期超感應/index.html","ad3069f6f825239f80f3caa7ed012d63"],["/2020/02/15/Review/又做了，相同的夢/index.html","96018fcc8680f7932597af54a8e9cd1b"],["/2020/02/22/Review/回憶當鋪/index.html","d6be1cf54b4c383b76d713abdbdc3f44"],["/2020/03/22/Review/不適合自殺的季節/index.html","44f8926c28448b9343098498d9d2d36a"],["/2020/04/26/Review/我們都無法成為大人/index.html","9398c9b95225fb7081ad82292ac9c6db"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","150a4e49dc94b4b39397daf7da05a3a9"],["/2020/05/17/Review/人間失格/index.html","756b944608fdd4c1b2a357631e75ceaf"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","39f3404e9797772bcac5d884c7cc9ca9"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","416e778d462b07ea73389c3ebb83df35"],["/2020/08/01/Review/銀河鐵道之夜/index.html","b2d958530566c3e0599dc269955fe625"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","fbcf873ffd8684791a5e6642c909970e"],["/2020/08/16/Review/15歲的恐怖分子/index.html","f1748556132bcc69d7c2a8c28a0f1953"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","a4dffe2c86686428a188bf00ba89191d"],["/2020/09/13/Review/羅生門/index.html","cc3eaa1e14e90a037b21aa802528a367"],["/2020/09/20/Review/闇夜的怪物/index.html","41b4b115e5ae09981a00f02e0b861502"],["/2020/09/27/Review/14歲，明日的課表/index.html","b0a32fbbe10bf9d0dae0459ed753976a"],["/2020/10/04/Review/致十年後的你/index.html","b5758366cc1cbd9422623ecd724c58c3"],["/2020/11/08/Review/滅絕之園/index.html","a1eec56e1289f078f8dc9b7acb59f86b"],["/2020/11/15/Review/將愛拒於門外/index.html","71f68f5f06674737af45d02dc329e18d"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","b2a58e687e3249e6b30121489b9c69f3"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","1f843ad280235f71bb6d04e647d2c087"],["/2021/04/22/Review/道印/index.html","1c038eb752a5077dd8ec420adda3de9a"],["/2021/05/03/Review/戀入膏肓/index.html","6708a3442b90bf6cb895a9d87f5fab54"],["/2021/05/10/Review/Dice/index.html","66d0d4a8de3246976b10fae646f3971e"],["/2021/05/15/Review/魔女之旅/index.html","0f350d43a966b61a12c8ea2cc6fd341e"],["/2021/05/28/Review/戀愛寄生蟲/index.html","69a8d2642edb81717460f1b2b65b01fd"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","99f4f4ddb007c5cb83fd7752e6884367"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4eb3731df6a058cd163732696e5c73b4"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","16006255461f5598008843b68a4f85e5"],["/2021/06/05/Review/流浪的月/index.html","2caedde6c8104086ebac85b7ef5ba081"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","cc16d8fec9cddc14af10da1d4799be4f"],["/2021/06/13/Review/第一人稱單數/index.html","ff310aa9c814a796a23d9cb6c4f7d05b"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","dfa52e81f7435b2377586abdd2704cc0"],["/2021/06/16/Review/願你幸福/index.html","e78bd3f25f18dceeefe03c6100037a4a"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","45a8286dd551fb4be2019f5a37591060"],["/2021/06/21/Review/神隱少女/index.html","0d87a2938bbfc3e64ca58c3bbb87ebad"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","93295fbde057b6c9b0f3382937204518"],["/2021/06/23/Review/天空之城/index.html","989a63f53f68eeaa0982a8d8966a3b3e"],["/2021/06/24/Review/魔女宅急便/index.html","ecbfbc9dfa74948012cdb78e49424657"],["/2021/06/25/Review/借物少女艾利緹/index.html","b31c49719138efb328c0740bb50a5a9b"],["/2021/06/26/Review/魔法公主/index.html","217db057ee3f1a94c5189b3700c1e1be"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","6dcd6e136441a801a9cac43bef6a8fa2"],["/2021/07/04/Review/飛雪與劍/index.html","4a6ab36f41ed6676db114085dcbaa7b2"],["/2021/07/09/Review/地球防衛少年/index.html","9a1618c6b84dc15eaa5c5b02999138a9"],["/2021/07/12/Review/Angel Beats!/index.html","3b0499cd00e24cb1610ed48dcb9b4f09"],["/2021/07/13/Review/Clannad/index.html","6d70e0554e67634611533d6d93c8dd8c"],["/2021/07/15/Review/AIR/index.html","801286399ea692c100f87cca7fdb82b2"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","93c83d0d2a25bde51a0f676e0c77fbfb"],["/2021/07/15/Review/螢火之森/index.html","4f43b1bc44a1ccb28f04bfb22633f342"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","a60eafdbfa36b07819ad24b7885536b2"],["/2021/07/17/Review/奇蛋物語/index.html","83a7c6b18b23b70cfe0fba33f06b679a"],["/2021/07/18/Review/Vivy/index.html","7743149e3fab8e08e7deb4c120937f6f"],["/2021/07/18/Review/請妳消失吧/index.html","986e39d0b8d9bda134759533267b800e"],["/2021/07/19/Review/漣漪的夜晚/index.html","894551827294d7904c68dea12e59156c"],["/2021/07/20/Review/月色真美/index.html","1a476cb0424483247f363db3f5e2271f"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","deb63365a9e0a3883affc5efa02cec3d"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","fc525b06907a421f78aed8a228630a3d"],["/2021/07/22/Review/罪惡王冠/index.html","c814403e31ba0903bbe3e8576942e2c0"],["/2021/07/23/Review/弱角友崎同學/index.html","04f23fffb8283e6cc474f62b364100da"],["/2021/07/23/Review/惡之教程/index.html","6368a04da0346ce2c6cc20b682b51ba3"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","074ad9e77008bff76f033994145be03d"],["/2021/07/25/Review/魔王勇者/index.html","02ca33500750d75afd5df8b411e3aad9"],["/2021/07/27/Review/一年A班的怪物/index.html","99256724b6065548fea9fb097c136d21"],["/2021/07/27/Review/奇巧計程車/index.html","b6eef5a132479fd0e022d469c196e78b"],["/2021/07/27/Review/專情的碧池學妹/index.html","6db1cada96d6899300261300ab7162fc"],["/2021/07/29/Review/只有我不存在的城市/index.html","0839e30cfe333aca4ba1481601b147c9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","61839b931567328e0ba542a9a7f90848"],["/2021/07/30/Review/可塑性記憶/index.html","8355a0a1a4b23cf18418b72d92535d38"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","200dbcda397ff3328191ac0d52943e9b"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","3c6f27d70a48b59a5bdbbee0d3cddca1"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","4cc3e94f9f706d1e7a952ba1c01e70eb"],["/2021/08/25/Review/清戀/index.html","9a0765ed2b6c5542f4fc86e829fd35a6"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","8a912afd4cfef2ff5eb4814ea6960b7c"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","62fd131537df6101c245102dc640ef9e"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","a3f9b88932b58e4c6d178165c3a97766"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","83bf2395cfc7cb1077dc1e0c94ea7fd5"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c4a3d75d87b8d743e6667752babd5045"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","42732ef177fac4e8fd025059887397b3"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","b2eeaa2b23374a11a0609b1675c55484"],["/2021/10/16/Review/龍與雀斑公主/index.html","0e4a005c135c6de44ffbd9361d5409bf"],["/2021/10/19/Review/孤狼不想開後宮/index.html","a794af4c5efc42056d4948c47ca764a5"],["/2021/11/13/Review/徹夜之歌/index.html","7aea6e8e1fab262fe0fc3b3790c8fffa"],["/2021/11/24/Review/武煉巔峰/index.html","4ddfec86102b7988178c10f1acdf3b31"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d32506c60223b931e7e5a70bb828f9a9"],["/2022/01/28/Review/神醫凰后/index.html","70d7fa2d9531745378da8c1c8e28226c"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","1ba2cfd0396420311e4181a13e36cc74"],["/2022/02/13/Review/夏日幽靈/index.html","c8d5b78aaaea96c85f2f91511502d439"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","93ccf73f7339e69baf8ca826d4f0229f"],["/2022/02/26/Review/賽馬娘/index.html","3a711023cec4e7e08f37b3fc96421748"],["/2022/02/27/Review/大欺詐師/index.html","312a34d9eab7a2f0c61e72bda9d3185c"],["/2022/02/28/Review/前輩有夠煩/index.html","4c0ee52e742f2c0b8884bf5510ea4b3a"],["/2022/02/28/Review/碧藍之海/index.html","f6911e93303d0990bb8587ca81205f3e"],["/2022/03/05/Review/落第騎士英雄譚/index.html","9420c7452d6612f3d7260e02f2efa8a5"],["/2022/03/06/Review/Another/index.html","4bb1c46bdaa71f9f7fb6f49928eb0f70"],["/2022/03/06/Review/入間同學入魔了/index.html","d1c63528a52e7d62e4aa47e974ab2a93"],["/2022/03/18/Review/再見宣言/index.html","0ed6e7292a98a7b17a394d38b1692a5e"],["/2022/03/23/Review/生若冬花的妳/index.html","e0310b6015c209643c7b11a973412a8b"],["/2022/03/25/Review/天之弱/index.html","f6dc4bbb157826c7a5b9d16b0f130387"],["/2022/03/31/Review/滅了天道之後轉生/index.html","3fab29431be2d7fbb532cf8d554ee68b"],["/2022/04/30/Review/泡泡/index.html","0c19b5ed45e8cbcf223b0383aff64144"],["/2022/05/04/Programming/Dynamic Programming/index.html","3f106154fc2939c123549c8cb3dea762"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","aef316cbf028272daf116ace4c245167"],["/2022/06/13/Review/偵探已經，死了/index.html","ab24ade9eed2d982347159a523ed0903"],["/2022/06/14/Review/黑色子彈/index.html","278377f82d598deb019d3bd51d0cc190"],["/2022/06/15/Review/黑白來看守所/index.html","28faba93c39fc9fe1307eabd7fbb7dbb"],["/2022/06/16/Review/虛構推理/index.html","02ddb9e2db11bbda84aa9952aa5a3553"],["/2022/06/17/Review/戀愛與謊言/index.html","d7b9c59671b3543d3de22ec40782aca3"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","775a3833a4cb50bfff1ddcf15282c7bf"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","3e19c34d32c84fd8343d5503ef64962c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","0bc48acd1ffa2327649f84d01880320e"],["/2022/07/03/Review/Hello World/index.html","e9bbed650568068dc4157d4ed90916ca"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1062d56b91c041ff2767ae44b15a008d"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","a47eb0e46fd478bc144591897cb451e3"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","6d7cbc4d5ded95c2d532de8d813868f3"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","b231f17c00625c665c3d96974e3db5bb"],["/2022/07/16/Japanese/動詞分類/index.html","df1832c6166989b07ffacda42811bfa7"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","2b43e3189eed964a2c4f108ff24b1c04"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","fe54ea645b9a407b2ee80ab2de0a05ab"],["/2022/07/17/Japanese/音便/index.html","8a2464cacac4916be27823e123eb0977"],["/2022/07/18/Japanese/動詞 時態變化/index.html","95ed0a8c1c27126677751da6f330824b"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ad76d3a14d3a1ef5f96ef6ef036ffe08"],["/2022/07/26/Japanese/助詞用法整理2/index.html","213a20228d8a84caeca86ba60f493f18"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","7c9bfa5e80a9b7b21bb5045abbea21a9"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","6a1da291b8218f5c9552d3db62daafb0"],["/2022/07/30/Japanese/疑問詞/index.html","5c55747b58d4d3b8b4c957f0b93251a3"],["/2022/07/31/Japanese/助詞用法整理3/index.html","38a7c2a1e0e28d6f886f772abf2c19f3"],["/2022/08/02/Japanese/副詞整理/index.html","8327c0378f2ce441e29a91efa2ef81ef"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","95d01401b363f7a0b626e07ba0f02aa7"],["/2022/11/04/Programming/Data Structure/index.html","daa8c5734756659aad194160cea03681"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","a00dfe35c37b84f4e918937b3d74bc96"],["/2022/11/22/Review/組長女兒與保姆/index.html","f3c5ed56479b1c09e7fbd61192198364"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","0d8a4de40b0bc1dc27bc87d5b7306ba7"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","b38f200225c0f222de6a4a7d59d76ac1"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","edd36079f057e01a0f7d708440bed04c"],["/2023/01/01/Review/あの夏が飽和する/index.html","a63aaf2e35148c82ccfa86556684477d"],["/2023/01/02/Review/孤獨搖滾/index.html","5dc9a899e9aaa7504460e13ee1fc5a84"],["/2023/01/03/Review/來自深淵/index.html","5cca3bc5a14d046f404470e71c1a0ab2"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","b551c0b76d721e9918fffdf132104aa5"],["/2023/01/05/Review/處刑少女的生存之道/index.html","9e3c5969d9c08e312dce0258e3410c50"],["/404.html","a284c3e78e657a3a30c45fc9f372e3c9"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f8e196dd159924862eabbba5e03ceec6"],["/archives/2019/07/index.html","1b39aae0ed1140eef8cfb82882059de8"],["/archives/2019/11/index.html","2acdf57b81ab88cb29f1016885a8468a"],["/archives/2019/12/index.html","fd121cd2820fbf849b9c3ba21c79ad9a"],["/archives/2019/index.html","4ac27cd3b8f417cbad9601d6fea9721a"],["/archives/2020/01/index.html","454c08c7ba85e62d29f64b83af0bce64"],["/archives/2020/02/index.html","54dd1eaf98e456003946e8c783462aac"],["/archives/2020/03/index.html","847f876550f117f14f65849c90cf214e"],["/archives/2020/04/index.html","dbac5a7b12280d6ee0011397e0b82bf5"],["/archives/2020/05/index.html","e961fedc2b97289226c6fec074c202d0"],["/archives/2020/07/index.html","e7ba16f7d74f7c8abe4cafe00d98e249"],["/archives/2020/08/index.html","776427434957afc89714ff32e29f95f0"],["/archives/2020/09/index.html","82bb0376226b2345dbddaa95e45079fd"],["/archives/2020/10/index.html","bc54811e0fdd876660c9b96d326a458f"],["/archives/2020/11/index.html","8340fee39b4c7e8341d0aac63f6b73f8"],["/archives/2020/12/index.html","6f491d472f02bffafe2850c9885d024d"],["/archives/2020/index.html","97b5193405c44a865d57bc5ddbab7594"],["/archives/2020/page/2/index.html","63dcbb26f8f003b75ca8c55e7a04d103"],["/archives/2020/page/3/index.html","4e330c731cbd96ebb9d19f6f0bd72941"],["/archives/2021/04/index.html","f94903ed4b982ca18407bb5d163bf49e"],["/archives/2021/05/index.html","5fdc373612fec7d1f0a5b9a7500325de"],["/archives/2021/06/index.html","16d97591a61939aa97df6c4ab8cc5522"],["/archives/2021/06/page/2/index.html","34dd99040335a1feeb6d37cdd1e5f754"],["/archives/2021/07/index.html","0784cb7365cea032787f153b455f0479"],["/archives/2021/07/page/2/index.html","40ff4821a7d858aa98c305f11ca0d4b6"],["/archives/2021/07/page/3/index.html","d6e3f02943366ac8b0b2fff18a280fce"],["/archives/2021/08/index.html","48740cd95e25bceb949019ebda0e10ef"],["/archives/2021/09/index.html","60dc08d257f04f7c1cf4320582884f0f"],["/archives/2021/10/index.html","6d1b75b41602fa95ca3999d62d7ae254"],["/archives/2021/11/index.html","1394add39178994ece0f46c715a14f9c"],["/archives/2021/12/index.html","0b1709b4e752187bb9f3765d83a5dc62"],["/archives/2021/index.html","fadec02bf66ee36523505f91a2d1a27b"],["/archives/2021/page/2/index.html","c5aef6b7ce05f5b401f4751dd7ebe16e"],["/archives/2021/page/3/index.html","5a905165e0b67520d66a95f9d6294117"],["/archives/2021/page/4/index.html","2b433d0233f7ca9f2f88b71b5417fb0e"],["/archives/2021/page/5/index.html","4140941ba9a50cb7f237858ef7a6ff1f"],["/archives/2021/page/6/index.html","b8dec1a9b026313198b1fbc78d34d180"],["/archives/2021/page/7/index.html","05aff18ee0d34d32e3864abcc14f7980"],["/archives/2022/01/index.html","5ccd073665a3e467bc2967240b6ff827"],["/archives/2022/02/index.html","383369f200c4ef96670401f340b616b1"],["/archives/2022/03/index.html","47d7b7992fc767b0cc2adf0453161b7f"],["/archives/2022/04/index.html","18cdf6eed3a89d6cfa0d2832ef2aceda"],["/archives/2022/05/index.html","2cd487431c1a8a31afd4a663aa2fd894"],["/archives/2022/06/index.html","0370499b971d5ef39671b70447db9b81"],["/archives/2022/07/index.html","c866ba656d7c84fb8c331e64e758e5eb"],["/archives/2022/07/page/2/index.html","d8866d1260f5ca1037a07d64883281c3"],["/archives/2022/08/index.html","314177659ab6623fc8acca0b010c05f1"],["/archives/2022/11/index.html","e24e302e82444a5a3a58793a74523736"],["/archives/2022/12/index.html","9c5042b2031be65933930cf681a3a732"],["/archives/2022/index.html","20bbe38ccf9e28b469db5082e5513cdc"],["/archives/2022/page/2/index.html","3defd31d0fb648f3d95187b8ffb74ac7"],["/archives/2022/page/3/index.html","ba076e646f2fbb39b3d08b0da41da40c"],["/archives/2022/page/4/index.html","2cd8efab0afea6e7d46778f5c3add5e5"],["/archives/2022/page/5/index.html","94533a8c26d6b167746ec4773b9fb7b7"],["/archives/2023/01/index.html","73ec686babc6ffe0db057599eecd5351"],["/archives/2023/index.html","4c6604223d31d8e05e15f740f7d054a8"],["/archives/index.html","a2a6bec7c5b16726602efff7e98b5ba1"],["/archives/page/10/index.html","2fac542a780d099489aa11279563c18b"],["/archives/page/11/index.html","0369ece16dce9eb756ff3542a6a1ed71"],["/archives/page/12/index.html","a5a1df9a6d298dc60427478b98438d31"],["/archives/page/13/index.html","9c3f0090538986ec5f1764091e83c9c9"],["/archives/page/14/index.html","620268004ba2c491ab787b2693a96e26"],["/archives/page/15/index.html","0b330d3c6cf8acf4e1bbf06bd89ab169"],["/archives/page/2/index.html","007cc05a405d6f6663b33bfb27985720"],["/archives/page/3/index.html","928744e9d043288bde37d54db8074fd5"],["/archives/page/4/index.html","19901e5edf50516342076d46d04772be"],["/archives/page/5/index.html","bc56df68cfa811178418e886ee5d647b"],["/archives/page/6/index.html","3119b691526a1edc155b76636de28a50"],["/archives/page/7/index.html","be1979767dc721304c3c5d0b2c6717b0"],["/archives/page/8/index.html","d0269b2a362ba20ff3dc074a0b11a515"],["/archives/page/9/index.html","2c848133a90a2fca45ae5d709df0a7d7"],["/categories/Programming/index.html","c2f5610884975f9ee7f7214b8da3d8ed"],["/categories/Review/index.html","6f21b69689b2db0fa31ff29850121671"],["/categories/Review/page/10/index.html","06d3f9cc904e7349ea922dc79125e303"],["/categories/Review/page/11/index.html","f6d057e3204572732f8f8fe13513a433"],["/categories/Review/page/12/index.html","ad941a1e4d870203e67ab4a4efedfa03"],["/categories/Review/page/13/index.html","85283f39d2dc61d03d89fb0ead1f95d1"],["/categories/Review/page/2/index.html","faa366a0ce7a69315cb92f26286fb617"],["/categories/Review/page/3/index.html","978155578deb4bf151e4f99c342a1e7d"],["/categories/Review/page/4/index.html","d91d9af9c356fedc73e7e49a4745c324"],["/categories/Review/page/5/index.html","b3b6e350c7abead222c0e89792af173f"],["/categories/Review/page/6/index.html","42a2bd2aa8769caad9212d36e09295bf"],["/categories/Review/page/7/index.html","dd487007caf6e14c7dda6bf2c124cd69"],["/categories/Review/page/8/index.html","4f6ff967b06f3a0358bfbb6b2a4b530e"],["/categories/Review/page/9/index.html","9ca33b24c1dc4c7fe716bb919e29a37d"],["/categories/index.html","d95ec597176a6274b433bf801454fe00"],["/categories/日本語/index.html","11992879bde84aedc34a92d0f4c97a6b"],["/categories/日本語/page/2/index.html","ff812a3026e6abee0b39b378ed876f63"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","86ae754f10f2d4c66a1d1603c1bc96de"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","f44d5ee5ef7da3553b1bdbdf2ea93811"],["/page/10/index.html","c15e3622b1824ca81c16452af5465736"],["/page/11/index.html","94f36144a457cef4a5e244c12e0fb130"],["/page/12/index.html","1024e24dba8763dc2ca4aa3c98f5fa11"],["/page/13/index.html","e16b187781cadc9927824f160a11b9bc"],["/page/14/index.html","c39c1df2d68b3531a65535deb89dc5b4"],["/page/15/index.html","033c06b1e17126bef49f449c41899859"],["/page/2/index.html","46541df678c44fb017c27c0a4836ac96"],["/page/3/index.html","4243e59703ae423dc5fe066fad1e3f29"],["/page/4/index.html","1042d3ddb7ff086fd5f6f0c188ff9669"],["/page/5/index.html","967245f02daf078aae49c2e340fd11f3"],["/page/6/index.html","0891e1379ad336c8280e3aa7f4ecc35b"],["/page/7/index.html","fa71c52dae9d10424c3e8cfdef6c734a"],["/page/8/index.html","508971d77d73bde627d99e7c2401a933"],["/page/9/index.html","051b974014cbd86fe8919f4fd76d3965"],["/sw-register.js","d19d68db5098268860aebef59e0db972"],["/tags/10分作品/index.html","6dc4827c1adf34d6b9ad5adee4bfc5d2"],["/tags/3分作品/index.html","cd56e17be44a71ba556d73382ac21696"],["/tags/4分作品/index.html","cf953bf0289cbe9bfd8540a922050276"],["/tags/5分作品/index.html","2b968e9ad76c6aab7c405af1ac94cc46"],["/tags/6分作品/index.html","7635d1f2771a745e697f6d2f1e10f3e7"],["/tags/6分作品/page/2/index.html","147715111c4b5ed67b20b1d8880eb39a"],["/tags/6分作品/page/3/index.html","65a8a47ac9010ae7f456ae635d665e04"],["/tags/7分作品/index.html","7609984c0f7a9e8ff53c4593730b80bf"],["/tags/7分作品/page/2/index.html","c982631122269531179387f70428a26c"],["/tags/7分作品/page/3/index.html","654c9532ae42eea378a7469bd5fab177"],["/tags/7分作品/page/4/index.html","d0ef30561b81c15e85b47b942c4f79fd"],["/tags/8分作品/index.html","f11424534eb1f9ecb67eb57de9353324"],["/tags/8分作品/page/2/index.html","216fa36de5278d951f79fa62a23a9bd8"],["/tags/8分作品/page/3/index.html","200ecf324624235d7fc9d8d8e230a027"],["/tags/8分作品/page/4/index.html","411b3e1be0b86ca575689b6e8e4c5ec4"],["/tags/8分作品/page/5/index.html","bd72cde33974059a4acc4fe0b9893a7b"],["/tags/9分作品/index.html","5b4894923e64f5ac5ef526ea9ae6cbdd"],["/tags/N5難度/index.html","45e47b2090a299298eac467d8e682ea3"],["/tags/N5難度/page/2/index.html","e8a17cf46e21fcd50c705f947f61703a"],["/tags/index.html","99ce04308e53732fbc707ad2601e41d8"],["/tags/アボガド６/index.html","88c12edf186ab6f6f66a87d29b6c1a4f"],["/tags/三秋縋/index.html","d4992dfac50cc54d9b7fe84c57e43e84"],["/tags/中國武俠/index.html","7ae212e05ccac724bc6ab4273972f81f"],["/tags/中國言情/index.html","15840b5442240ed5f4bc4471f23146a1"],["/tags/二宮敦人/index.html","2fec5d6532237ce0465d113d96e435e6"],["/tags/人性/index.html","831492b1d838c14f4b5509e16f9d3383"],["/tags/人際/index.html","324f795a9010150481d3f6fe26b2ae88"],["/tags/住野夜/index.html","138e7a2d08fbc09ddf9d9890d24f843b"],["/tags/佐野徹夜/index.html","3656453da5081909b16e0d1ebfce3e90"],["/tags/努力/index.html","d89cd3185991325ba13d7054a4a550b0"],["/tags/動畫/index.html","7cd605827570ab46569989ad28f59eb5"],["/tags/動畫/page/2/index.html","0c098f5969d1a3fbc9fa36305c55da05"],["/tags/動畫/page/3/index.html","805bc26ca474caa1bb43419860ee4e3b"],["/tags/動畫/page/4/index.html","cdd8ee7e5ab91927c289868640c0da36"],["/tags/原諒/index.html","de196bf359c5b9132766358bd86aedcf"],["/tags/反烏托邦/index.html","b73ab9241cc3dde1977d08f4f835be3c"],["/tags/啞鳴/index.html","6ce3a0354038783d1715b86198e51d96"],["/tags/喜劇/index.html","42845af3246105f51166b1a130931041"],["/tags/夢想/index.html","6e8f6522959cd78370f76e2e9c26e146"],["/tags/天澤夏月/index.html","e2e6b3f3a4a1f829d357607558ba1a3a"],["/tags/奇幻/index.html","23f8a3b1bd8709b0ae40a4379392ee66"],["/tags/學習/index.html","9739fcda40e0905d1d5d7c066913400a"],["/tags/學習/page/2/index.html","cf2d0db1692f6c653a4bc1f309cad38c"],["/tags/宮崎駿/index.html","6ead97b79976a452ae7c629b3ef0c90e"],["/tags/小說/index.html","610d0b0c968bc72d145856d638eb7435"],["/tags/小說/page/2/index.html","210f0d7c2ccbf4b727e1e070d8363051"],["/tags/小說/page/3/index.html","be8fd0b0e47bc19b8386888f3f72cd73"],["/tags/小說/page/4/index.html","6e76c3ef992ee9eac90e709d36794447"],["/tags/小說/page/5/index.html","3f9cb22b65d61ea9eaaccfb31e6abfc2"],["/tags/小說/page/6/index.html","36fe3c29146bd2dac79c98dbe7087aab"],["/tags/小說/page/7/index.html","f8bc765aeab8b3f90b4381720331e32a"],["/tags/平淡生活/index.html","903d1c051abf8c5d670a3db59449bb54"],["/tags/幸福/index.html","cf3e29f8c4b176295184261b9fc5675e"],["/tags/志茂文彥/index.html","d3706b7a96d8ebc5e4f72ca1e4e73a8c"],["/tags/愛情/index.html","439088b0c7465e0a3df170f8a8493dfe"],["/tags/愛情/page/2/index.html","9f8006715b6c846763c0dc605940e7e3"],["/tags/愛情/page/3/index.html","d47c034d912991a16e754e069837bbc3"],["/tags/感動/index.html","6100da40d0fb802826e0454ff75a803f"],["/tags/懸疑/index.html","f8e0dcc7c9da62a4ec1952f0bd314707"],["/tags/懸疑科幻/index.html","e4a21e997dc60c75b6eed05da4cd7f92"],["/tags/戀愛/index.html","393e63287971dc2d65c0b4ea65bcd8d2"],["/tags/成長/index.html","489b595a49d3abe6162608db4ca31ad0"],["/tags/成長/page/2/index.html","73bb7d2342942f6ed1cdb6f3b5da27a1"],["/tags/戰爭/index.html","cda35e6ac008f03ba8b9a4e19422af6c"],["/tags/推理/index.html","2af0d8d2506381463b079423554a9c51"],["/tags/搞笑/index.html","eb14e0694daa28190e7e93fcb30c0bce"],["/tags/救贖/index.html","4dab3fd0a0db3f736b9a2f815370cb9d"],["/tags/斜線堂有紀/index.html","84ae80ffcb000a587679e6a2618a43f8"],["/tags/日常/index.html","4997e14aeaba254b16ba2d3df6b99f13"],["/tags/末日/index.html","deaf0181190dd44efb27ecfa99368f71"],["/tags/校園/index.html","b6a7f2b9b2742bc427d9d0563484a944"],["/tags/武俠/index.html","6a44f6ad908f10c7f02d76aa8184ead5"],["/tags/武俠言情/index.html","a8b9d7e4ba5d8a70ff7f495b13327080"],["/tags/漫畫/index.html","9e1f20a9bf08dff8da7817506023df5c"],["/tags/生命/index.html","6b75d7ec1d0375fa00379cce3f56e268"],["/tags/生命/page/2/index.html","af02edf42cc86e71f409e4663eee87c7"],["/tags/短篇/index.html","46f560510849f41c14f5536a59d1f790"],["/tags/社會/index.html","ce64ae5765426ccf8d77ce82c5418203"],["/tags/科幻/index.html","61e9c09b7ca97e96962d554c1d3f9563"],["/tags/童話/index.html","a000b2c79f194c73fc2aaaa125f6e643"],["/tags/競爭/index.html","5b60df38d9f7c0e684bb04f032313298"],["/tags/自我/index.html","b5f4bd9643cc7a1af789d962f61d7d55"],["/tags/自我認知/index.html","cd9bd57c9fbae72fccd301b0b190a04c"],["/tags/葦舟ナツ/index.html","22106875aeb5f8acd8fbe6828a33356f"],["/tags/藤萬留/index.html","e05957d70b596b8634159ebe8355e429"],["/tags/親情/index.html","793999fa20ccbb08204b7e7a7a71b91b"],["/tags/言/index.html","574b515b7cd9d94334c893f57734a998"],["/tags/雜項/index.html","e1578869c904968d016a2205a16587ac"],["/tags/電影/index.html","ebee5f708a9dad6cddbdec3058d5ffa9"],["/tags/電影/page/2/index.html","4dd13da510f1c21fca2743ba3f37a266"],["/tags/霸凌/index.html","b3ad7c20462c5e995526c6d9d91f9bd5"],["/tags/青春/index.html","2628b756a5c8bb9c218dc743e51ea2c6"]];
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
