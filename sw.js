/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","31db90ef516e104d57be6acfdd8c883a"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","864d8c189027b7a4f13a626f43e178cc"],["/2019/12/25/Review/無法計算的青春/index.html","305649395806f6398faed37bc70a6c0e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","b9baf00df641c7acbb31c087f53a4350"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","fcf5a01730e56423761976eee3a6f693"],["/2020/01/19/Review/下雨天，不上學/index.html","5c12bdcb3ec34174d5beb467f1c1b843"],["/2020/01/26/Review/三日間的幸福/index.html","1de852f4554fa51b28200eb633f5b637"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a62b3641f4a4d0103ec727ebad54134e"],["/2020/02/09/Review/青春期超感應/index.html","b5f1e49cdb84df1c8f6089a2e42c0fb0"],["/2020/02/15/Review/又做了，相同的夢/index.html","ab5d6a4ef738345a448e9cdc9069aab7"],["/2020/02/22/Review/回憶當鋪/index.html","b98ed5ab1e1e811b672c009762471171"],["/2020/03/22/Review/不適合自殺的季節/index.html","b95b52e0221334dc1abcf59ec3e8dc12"],["/2020/04/26/Review/我們都無法成為大人/index.html","1d5c79e0783ee9a464085a72a103bd37"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","0e93f1f56edf9acb55d819b404dad6e1"],["/2020/05/17/Review/人間失格/index.html","bb49e6bfd3b6a7bd2b08ab6efa31eb37"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ff568477b74fb4db3ff70bf1968eff44"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","590e4cca537976bd8a85d1e4ad2004f8"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6e99bfc926752aa0cb4f430bbfb1021e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","e602d22f0dc1210560b8538b04bb3342"],["/2020/08/16/Review/15歲的恐怖分子/index.html","471810fb7cacb378466aea39d3961803"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e9dcd8660e8056123b703166dfdaad1f"],["/2020/09/13/Review/羅生門/index.html","327040d4a7fa888e566a8e6022510260"],["/2020/09/20/Review/闇夜的怪物/index.html","54a49f18cbe7f22eec78beca1b0536dd"],["/2020/09/27/Review/14歲，明日的課表/index.html","461c4d86ae6326637dc516b342cb8261"],["/2020/10/04/Review/致十年後的你/index.html","33110986b6d9944d0083712302458809"],["/2020/11/08/Review/滅絕之園/index.html","7b53c5723e01487af8081d39923e9e97"],["/2020/11/15/Review/將愛拒於門外/index.html","161cd655ffe124cea4ce2cf7307ac348"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","c13d914ec48f3d70458b11f46c7acbdf"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2c2b197d9453451a31c3f0c6f259dc6d"],["/2021/04/22/Review/道印/index.html","62adfb01c71faf9e5866fef680a3890b"],["/2021/05/03/Review/戀入膏肓/index.html","dd1682eed254623297dd0852982fea08"],["/2021/05/10/Review/Dice/index.html","fe0d23d1852bcfdb01e5890e7909d865"],["/2021/05/15/Review/魔女之旅/index.html","6927a36b806f1566aad5ec7ad7552693"],["/2021/05/28/Review/戀愛寄生蟲/index.html","d83afe4b1ff98b353e33c99e0cf5bdf1"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2389e8dae643911aec66623fa1feef03"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3c545996a5d9ee1cf81398c902a8417a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","169c3b5e772f1258e35b95cdc89cebbf"],["/2021/06/05/Review/流浪的月/index.html","46fccca2af5d50c10391140bf9de5699"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","3661b7ac48af6bd687540ebc1aa19e05"],["/2021/06/13/Review/第一人稱單數/index.html","c4098b51d8daba6de8725afe4fdc4f87"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","1f3669bb82e911a84d3c4c315a564d19"],["/2021/06/16/Review/願你幸福/index.html","f0cb9af7a557e0a13c2a263e603c42cf"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","dfbe1dd5ea2aaf9a1f0e558b01476ea5"],["/2021/06/21/Review/神隱少女/index.html","4117614df70f41e4739669548c691778"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","762194ca9a17bfc195b4e8bd4f444fc8"],["/2021/06/23/Review/天空之城/index.html","d3b3a78b3629dc755d56401aad1365eb"],["/2021/06/24/Review/魔女宅急便/index.html","086f4131cf7063b32ec30743a0635fc6"],["/2021/06/25/Review/借物少女艾利緹/index.html","4a6ecec154e5cba5c47bb11cf6c54ac7"],["/2021/06/26/Review/魔法公主/index.html","c0532bca93f09e676d52abeffbf7f6a1"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","fe30d4c39d31e0e65dd405ceb0bd1a7d"],["/2021/07/04/Review/飛雪與劍/index.html","a1c2fc77d11929e4587bc7778d6a0cb0"],["/2021/07/09/Review/地球防衛少年/index.html","493be1654a7b088af70b39c159ab5ab3"],["/2021/07/12/Review/Angel Beats!/index.html","80d31786ee61e52db180acb7f785fa73"],["/2021/07/13/Review/Clannad/index.html","995eb8b0f00d89fb4c45ac033ff13853"],["/2021/07/15/Review/AIR/index.html","a51807c6d73f3e3a6fa92ca356db73b2"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","bf623fb72a062d2edf5b52f993d60952"],["/2021/07/15/Review/螢火之森/index.html","3950720fefca495d0a99ad35f9e465f7"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","3eb496abd6ddeab07e0dad29c501e683"],["/2021/07/17/Review/奇蛋物語/index.html","32eb94287bee0e6238373ec8f1118d45"],["/2021/07/18/Review/Vivy/index.html","1e7b3db2988314dbe7f074036583b599"],["/2021/07/18/Review/請妳消失吧/index.html","fc199c115b2a4908f147b94969669053"],["/2021/07/19/Review/漣漪的夜晚/index.html","ed4978f9f71bd7869cd002e370a6f534"],["/2021/07/20/Review/月色真美/index.html","3a7a67510b60322ba1afd1185cf3ef33"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","098cdf5700ba3c1d79b8c4ea02c9c5fa"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ca38998b78c34e65bc941663be15f7b9"],["/2021/07/22/Review/罪惡王冠/index.html","e80ca8151868d4a5eb8afd4d64a60d53"],["/2021/07/23/Review/弱角友崎同學/index.html","6909296ed19a90bd0fd69577ee44b967"],["/2021/07/23/Review/惡之教程/index.html","49e4a9250d0e697a4192dfa630f123b4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","9e263f266f6815a768fe2ecca9183a09"],["/2021/07/25/Review/魔王勇者/index.html","79db1ff7b3021138e96740e405002a03"],["/2021/07/27/Review/一年A班的怪物/index.html","d7d46d3fc44d04af8b310d6e02f52c7c"],["/2021/07/27/Review/奇巧計程車/index.html","55f2539d339999cc1584ca363e845426"],["/2021/07/27/Review/專情的碧池學妹/index.html","5caa4745685f1353d3365532a44474f3"],["/2021/07/29/Review/只有我不存在的城市/index.html","7369610f5d3270e9d9c42bbea819c3f4"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","b2f27b42125136b675b46d5b1c7e84f5"],["/2021/07/30/Review/可塑性記憶/index.html","df4120060c6a348502d4d58eed6561f3"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1702ac4aed3acab14c0319bb40a19590"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","56fd236ab931e65178f5fbb0c7b1e74f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","2e57d195e04c229e09e0382805becf9f"],["/2021/08/25/Review/清戀/index.html","0a1c03c3793c3e1c50003ca4441cdb40"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","f6de21c3666432559372160fe4fc5e08"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f0ad260e38ad2ef8f8f16d02891c9419"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6df5519324779488a24beead6bc28c27"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","d8b7c42ff04b2696397f9a3e8b9c67c7"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c073315f0a758fcb83c24051751d8fa8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","fc67c7cdff63a9793922a592cb5fb71d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","237728f80545946a0087672dfe2a1f50"],["/2021/10/16/Review/龍與雀斑公主/index.html","86d04c294622d21689b9980e6b5bdc6b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","cb5f34cd6d5192ccbb7262af6bc54222"],["/2021/11/13/Review/徹夜之歌/index.html","6a70bafc02dd20627cf1225e13e9f1f4"],["/2021/11/24/Review/武煉巔峰/index.html","b9333411a7b1c9f2ff14a0faa61e208e"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","9cc7b53e3f74a0c9dfd583d75ea7e6f9"],["/2022/01/28/Review/神醫凰后/index.html","73fd82e90df10f936d7c53f16568631f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","3231d0722bff0b28b2feeb1217c77121"],["/2022/02/13/Review/夏日幽靈/index.html","e6c37adef6a7b57d75f1b41a8308909d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e6de4f44519636c0fbb4488590552b8f"],["/2022/02/26/Review/賽馬娘/index.html","0e4d073d5da07a8e95e974096ae4cb68"],["/2022/02/27/Review/大欺詐師/index.html","83f04610dc6c0e8f85598f54a26009fa"],["/2022/02/28/Review/前輩有夠煩/index.html","93cb70f2f3562799abd96f9fde0af781"],["/2022/02/28/Review/碧藍之海/index.html","d565985d0832554f89e372198a49f9e9"],["/2022/03/05/Review/落第騎士英雄譚/index.html","fff57b4854d159b6a6fa739f11532ff6"],["/2022/03/06/Review/Another/index.html","d3726821824dd15eb0e1b7c65264f2d4"],["/2022/03/06/Review/入間同學入魔了/index.html","a738cedf2cfde3be10e09a8326122a0a"],["/2022/03/18/Review/再見宣言/index.html","4eae081a62230c9c34d0b794638153a6"],["/2022/03/23/Review/生若冬花的妳/index.html","b8cfa776170137a8999a0b5102567496"],["/2022/03/25/Review/天之弱/index.html","022afb4a15b88c275981025b34843a53"],["/2022/03/31/Review/滅了天道之後轉生/index.html","64ca5b8c8d2388063a8f5cc069ddec91"],["/2022/04/30/Review/泡泡/index.html","82b2d1308c8c953f26e969824790173c"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","db7c6ae3f3104e76bf04c8ad68bc1a5b"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","1c0a7376cba08e7fc80248a575a23b8e"],["/2022/06/13/Review/偵探已經，死了/index.html","c0cc7add1dfc1e32de3d1be8b1953a18"],["/2022/06/14/Review/黑色子彈/index.html","97be3c8e94d2f316b850560e463be8b9"],["/2022/06/15/Review/黑白來看守所/index.html","b59e64cc46e2c2c6bbac8d844a326d34"],["/2022/06/16/Review/虛構推理/index.html","9f6481bdc44bd6036018630037b0a11f"],["/2022/06/17/Review/戀愛與謊言/index.html","bc897aa1b242943c2dcce007d8577f64"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","432b900873c77a6b433613617f09adeb"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a1ac8ad5c8a951f60d11681259494d0c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2426ad27d6d46268ad01fa4307cb340a"],["/2022/07/03/Review/Hello World/index.html","c9d51b17700c05f76b0ada7f9faa690a"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","6a49d2d0d70c5a7843a17dc3cf3a8143"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","2d900f5fb9cd5fe53f01ba948005bcc7"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","b5b30cbcfc314adaebfd04b4e86fe455"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","4e7396764a4c2bbe739d7aa0cf8c3f66"],["/2022/07/16/Japanese/動詞分類/index.html","f24067460af99770fb773d24bdb6185d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","9acb2ffe4518090fd07a0d5a5de75bcd"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","dbbbc11c2d621c074c8d973bac7b2abd"],["/2022/07/17/Japanese/音便/index.html","66b50610c07e6c28158f09290bd62cc2"],["/2022/07/18/Japanese/動詞 時態變化/index.html","509c62bfc37de9f6aac78fea3098def9"],["/2022/07/19/Japanese/助詞用法整理1/index.html","16694a6ef4fc23bf71eb7f4d48d14442"],["/2022/07/26/Japanese/助詞用法整理2/index.html","51ca046281448554e98b8193f8784a96"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","55b212a531b8fc3a07921c2f082db23c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","af1ea259d0bc4c382d4eaf5ae9fde657"],["/2022/07/30/Japanese/疑問詞/index.html","29967cb464a598632482ee5a861d41df"],["/2022/07/31/Japanese/助詞用法整理3/index.html","fd0cd503ef93eb1bb5a547855f240ca5"],["/2022/08/02/Japanese/副詞整理/index.html","64658eb7b1df0768b7c727a6798f08b8"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","6cc9fca97836b4ec1fe3eb4c6147fc9f"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","018453ee277119e02e38bbf0445959ef"],["/2022/11/22/Review/組長女兒與保姆/index.html","6cb6c0123be77172bfe23996335e97cb"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","1ff5744dd7a577050369c321bc704d45"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","13dffd114ccda5e67c04690250ee82cb"],["/404.html","bcc515cac819a1e3728fa0ca6674413f"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","02f4fa23935bf8215234fb6120a3ac72"],["/archives/2019/11/index.html","c137e97e62ca4aca0149b43aba59311b"],["/archives/2019/12/index.html","e5e3f752e82636c090b9d024fd580f28"],["/archives/2019/index.html","b4e28ac7ea1c60225c255e6f6654b49b"],["/archives/2020/01/index.html","1d15fd49a6b1ea51e269310cb0ba401d"],["/archives/2020/02/index.html","92f7c980d484a42a1388d02abb4eb287"],["/archives/2020/03/index.html","3f02cb28880e7a686d39508eb0b27930"],["/archives/2020/04/index.html","80899a57986327b0e5f2427e4e2b5a65"],["/archives/2020/05/index.html","0b41a3c20b666284a825601376b9a713"],["/archives/2020/07/index.html","ad31e539ca1f5bdbce203c72f64cba09"],["/archives/2020/08/index.html","b5ecc3088e675ceadbb708cddd5c719d"],["/archives/2020/09/index.html","1e9a4398dd870e04f0796d1009501eba"],["/archives/2020/10/index.html","cc0944719d9be692428b965dda15172f"],["/archives/2020/11/index.html","1b2fa86fb45f8dcd2e6661a67b65059a"],["/archives/2020/12/index.html","f19a5e30639fbf533fccfb08147b870c"],["/archives/2020/index.html","1e53729ba755b73aa19d35b166df73e1"],["/archives/2020/page/2/index.html","a339d866df53ac3b7c9ce4ee28b49ecc"],["/archives/2020/page/3/index.html","2e55672f967d9c24c1366c8dade3b69a"],["/archives/2021/04/index.html","c2cd846ba00841910726b8d90718dd31"],["/archives/2021/05/index.html","5040aaeab48527ccac7a50144e1ca632"],["/archives/2021/06/index.html","ecc0bf6fdfd74e701a1fde6d71fd74da"],["/archives/2021/06/page/2/index.html","c8aa88a35fdaeedbd2ee36c0cca26dcb"],["/archives/2021/07/index.html","72e5d1f42df67e8abc4950844e6e03b2"],["/archives/2021/07/page/2/index.html","96125b9ec7b520423c270d4a6e27c86f"],["/archives/2021/07/page/3/index.html","09b9b7043c25ac78fcf8d66f057ee1a3"],["/archives/2021/08/index.html","55283de298e2edf6925cfdfc3bee7bca"],["/archives/2021/09/index.html","e3f4a966fa26a19befb2d5ab5aff1609"],["/archives/2021/10/index.html","568fbfbb0592b670c75d5d6caabf7f11"],["/archives/2021/11/index.html","511927bbd23738c14f308bdeb17ae760"],["/archives/2021/12/index.html","454edda1d764790c4324297f415d19b2"],["/archives/2021/index.html","d38880a986578dd318dafa96429d0c12"],["/archives/2021/page/2/index.html","5d52fee05a2dd0ae64af95afada2ddc5"],["/archives/2021/page/3/index.html","f0e4f9a4e4d0f50d53372073363cab1c"],["/archives/2021/page/4/index.html","e3772f0066d3d580d40e6d2ba0f88953"],["/archives/2021/page/5/index.html","3a1918a5807fc62743bf93414c60bd01"],["/archives/2021/page/6/index.html","51ccb73991f73d45ae475fc799092c54"],["/archives/2021/page/7/index.html","7496c5553b5a2cdc40b2f874e8871928"],["/archives/2022/01/index.html","b01f5cd5d128caaf7f9486877f0976d3"],["/archives/2022/02/index.html","8eb002d47c7ad32db80a0a8382d9eb43"],["/archives/2022/03/index.html","1dbc51deb1b8a7783d47c57f61e09c5c"],["/archives/2022/04/index.html","0cb1885bdcdedc6b4a57181a76c858e0"],["/archives/2022/05/index.html","54777c31fe0dd94f05378e56e4219d55"],["/archives/2022/06/index.html","e644e2827d9bdb9c4a5c51a9fcf615ba"],["/archives/2022/07/index.html","5a31113021aac0fb32ee90fbe3f69b35"],["/archives/2022/07/page/2/index.html","9878241ffe5536b62ca4d68ec8521c72"],["/archives/2022/08/index.html","c6591b65db7ae541f495b046b0accb66"],["/archives/2022/11/index.html","73dc1a1ec4366963ea0b5942144b10f0"],["/archives/2022/index.html","b123183df5594ce0d08e2bfb14853bce"],["/archives/2022/page/2/index.html","f925c0aa28cd9b5e86fdea66f219d47d"],["/archives/2022/page/3/index.html","88324fc41ebd5d28008a6e08d80a53f5"],["/archives/2022/page/4/index.html","5ff7d68930290175819906ecc85df27d"],["/archives/2022/page/5/index.html","5337f958664b1558208692e978548750"],["/archives/index.html","e3e6d234e7fc3bd3023848a8b3542b40"],["/archives/page/10/index.html","a1576c716d3dce0d26da8876ea46dc59"],["/archives/page/11/index.html","38e5d27db9050cff13566bf5f7a3c194"],["/archives/page/12/index.html","d0ccebcff2f67ddae4fdbbf4434ffcd5"],["/archives/page/13/index.html","cd2b5ec6433980a1eeb06ebd92b649d5"],["/archives/page/14/index.html","5f66a555875268d738d6e61958f9a3c7"],["/archives/page/2/index.html","9fc11e716284546397ba6a550f8e0177"],["/archives/page/3/index.html","15535d8d55a6d620572602378c739631"],["/archives/page/4/index.html","1fadd231cd3cc794da449c7c41a63184"],["/archives/page/5/index.html","f051b5d48a06d3ee9125d8cd7a9fea38"],["/archives/page/6/index.html","b0548575ed4048216a174b9f4da85af9"],["/archives/page/7/index.html","090419e172f85313864537abf31ffe44"],["/archives/page/8/index.html","48edc8e21a1c5d02386ca7a3cd40b044"],["/archives/page/9/index.html","09abd93a0def10f3c6d14c49f0e6c8ad"],["/categories/Algorithm/index.html","66ebdae662aa9016360686bf1cca6715"],["/categories/Review/index.html","b748aa4a5ba66f79cfbcb7f59195c1c9"],["/categories/Review/page/10/index.html","7d7e79df503855e03556f17af74e0582"],["/categories/Review/page/11/index.html","09d36b64ef00c7ebfffd07e97336deb0"],["/categories/Review/page/12/index.html","b2b19b900980e0dfaf52aaf85fbe09da"],["/categories/Review/page/13/index.html","07e8affbe575bd6e13395a17ac252842"],["/categories/Review/page/2/index.html","2e284d1c7772c7c447268dca7cd983c7"],["/categories/Review/page/3/index.html","eb2e14a540bb0413822a099aa8af0755"],["/categories/Review/page/4/index.html","903541b1db23d437c26de60d434fe602"],["/categories/Review/page/5/index.html","6a07991b937cca7dff07b58804f4c99f"],["/categories/Review/page/6/index.html","3d2f55cb243739b68604da94bb24e881"],["/categories/Review/page/7/index.html","0a9794444662643def12a71ad0a52d54"],["/categories/Review/page/8/index.html","f9fa3f7574d415b17f0838eb8539f5d9"],["/categories/Review/page/9/index.html","faa9c435097979e43033d5c522f1a64c"],["/categories/index.html","e1fbb68433263809d6f76fe0ecdfa054"],["/categories/日本語/index.html","449f02f9a0f8a979a7812e68d2de2d1a"],["/categories/日本語/page/2/index.html","825fb5a2faee42818086c78394b822a5"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1b8d64101a2acc290c57661efd635394"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0746ae705f9466cf6f777a7a3d1abba7"],["/page/10/index.html","ea0dd704f513ebb23cc4b7bd1d08be8c"],["/page/11/index.html","a710a1349bee1e7e7c0c766ed7cbf6da"],["/page/12/index.html","13822e2f85be449ff18ce122833680d2"],["/page/13/index.html","0718e00165080850cd7f20b8573f1e4c"],["/page/14/index.html","e706122b762022918807b67626622684"],["/page/2/index.html","15825eabe5be7c15ef3dcf68c20b8115"],["/page/3/index.html","eff5748ab6823b7304a5f19010ac1b99"],["/page/4/index.html","4fc4760d9c913f4a58e41f2b956d3494"],["/page/5/index.html","00f1af62932e7bf7d02d68afbfb03552"],["/page/6/index.html","cab7de41d09451f4c621c891e4334401"],["/page/7/index.html","32265ea3d336b4a241d69c6d0f7c40ff"],["/page/8/index.html","1dc3b1fadd0ad3d5a50f9e2c75131570"],["/page/9/index.html","85994562ce88e450cc44caa905dabbdd"],["/sw-register.js","fea269220e860473825487cb98490b09"],["/tags/10分作品/index.html","bf0c05a3daddfaa64466d461160850ac"],["/tags/3分作品/index.html","c9f3fbcef4f61ccb06b55120fa20cadd"],["/tags/4分作品/index.html","c0c9f65df3a5e74fe2cbfbf5b5885047"],["/tags/5分作品/index.html","64f33007b9167ca7b759d65730558983"],["/tags/6分作品/index.html","64aaa8cb5a7e0f627db83f30c50de495"],["/tags/6分作品/page/2/index.html","9515a1004a7784cf3c5540b70ace8e47"],["/tags/6分作品/page/3/index.html","a689da2f7091e2091f6f833d339ad0e2"],["/tags/7分作品/index.html","38eaf0eaadebc18d423008b4d6c7b2f2"],["/tags/7分作品/page/2/index.html","d4c2c4ea76e0ae28f573ed97e021282c"],["/tags/7分作品/page/3/index.html","4e5659d77e4cbea02c661cb418b074de"],["/tags/7分作品/page/4/index.html","191148355db0d24e782a2737b0146b50"],["/tags/8分作品/index.html","564745d388b4e276438ad2453ee93762"],["/tags/8分作品/page/2/index.html","eca1d53bac0fef57cf2b04985390dfa2"],["/tags/8分作品/page/3/index.html","260c74187cddc8b81f36bf68a7a4131f"],["/tags/8分作品/page/4/index.html","9ed240ebfeb92730eb68d0c2b312e792"],["/tags/8分作品/page/5/index.html","bcbbf951cd599cc1c4c61853047f9f37"],["/tags/9分作品/index.html","02ca4b7ad9df481006f0267808aef48a"],["/tags/index.html","34638736c0097de938235ed492ffaa21"],["/tags/アボガド６/index.html","22f5371a5176ed68765e36d901fbe6e7"],["/tags/三秋縋/index.html","23a806672da2fdf8bdf35bc046a2c086"],["/tags/二宮敦人/index.html","bd4587136b0e03cfab1405699e95bd08"],["/tags/住野夜/index.html","bc0726d753c408cfdb88bb2bf747f75c"],["/tags/佐野徹夜/index.html","f6758804c44dafbef9da8c539b111553"],["/tags/動畫/index.html","ccca1a286eb2a510d1ff7afc8ffc80ae"],["/tags/動畫/page/2/index.html","1939b288669f24e85c497a9faac57c47"],["/tags/動畫/page/3/index.html","3e6b10f5c0a91a30ae474e44bb1bde1e"],["/tags/動畫/page/4/index.html","a52852f3e061f6983b45d44c3927739a"],["/tags/啞鳴/index.html","46e33060699ffdf34df3eb37a54c78e7"],["/tags/天澤夏月/index.html","a6d12ed027a98498bd945bdd7c82ed06"],["/tags/學習/index.html","e7559b39a9fe356fd508dd02f7d9557a"],["/tags/學習/page/2/index.html","abea48cfa73634125cc24edabc67d9d2"],["/tags/宮崎駿/index.html","288ab249d5bf283bb69a3f1a5e1a1f8e"],["/tags/小說/index.html","68dcec821cf68559c6edf1d61cf81083"],["/tags/小說/page/2/index.html","5d728282a212543d30f6a333edcae5ee"],["/tags/小說/page/3/index.html","45a6f5052e932100e5b9fe0f4ec25d49"],["/tags/小說/page/4/index.html","12ef1adb668c8c5f56bad54610894f3a"],["/tags/小說/page/5/index.html","d2c320cc10eaab388038216ba413a987"],["/tags/小說/page/6/index.html","9fe8825dc769a3d8c0940e093707615e"],["/tags/小說/page/7/index.html","bd5c5a9d2d5448b01a4c6cdac9e07473"],["/tags/志茂文彥/index.html","6c91586ef49098c207c0f9afad675422"],["/tags/斜線堂有紀/index.html","7f87ba75b6a0b902716af86c33978623"],["/tags/漫畫/index.html","34df5e97c8a4a97daa56133afcb1fbbe"],["/tags/葦舟ナツ/index.html","14bd3e5cf0723c513e68aaba936bd28f"],["/tags/藤萬留/index.html","04c03d5289fefcfdd8c0a72ea93f96f5"],["/tags/電影/index.html","d93423955f294d422052cd9248c4ad00"],["/tags/電影/page/2/index.html","35b4ec6332f473587c5872e1f9f39563"]];
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
