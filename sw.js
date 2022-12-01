/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","2c628f1c9c419a975f96590dfb4afbb5"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","864d8c189027b7a4f13a626f43e178cc"],["/2019/12/25/Review/無法計算的青春/index.html","305649395806f6398faed37bc70a6c0e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","188a6c03e7f25ae56582761449f3ca3a"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","fcf5a01730e56423761976eee3a6f693"],["/2020/01/19/Review/下雨天，不上學/index.html","a14b8caf4cf9b9e9e923ff5724625092"],["/2020/01/26/Review/三日間的幸福/index.html","1de852f4554fa51b28200eb633f5b637"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a62b3641f4a4d0103ec727ebad54134e"],["/2020/02/09/Review/青春期超感應/index.html","4c19f185600857bf37774eb892790248"],["/2020/02/15/Review/又做了，相同的夢/index.html","ab5d6a4ef738345a448e9cdc9069aab7"],["/2020/02/22/Review/回憶當鋪/index.html","6b1a18bce992b73acb55d32f6cf99165"],["/2020/03/22/Review/不適合自殺的季節/index.html","cf495878f796d447349cd4680bc9d88e"],["/2020/04/26/Review/我們都無法成為大人/index.html","1d5c79e0783ee9a464085a72a103bd37"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b51e390309f23852f3c7850ab4a62210"],["/2020/05/17/Review/人間失格/index.html","bb49e6bfd3b6a7bd2b08ab6efa31eb37"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ff568477b74fb4db3ff70bf1968eff44"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","73be3d9bb89f7e4a39403aaa0c76c2b9"],["/2020/08/01/Review/銀河鐵道之夜/index.html","c8c9123f912f0c8042d6bc838ae6a786"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","e602d22f0dc1210560b8538b04bb3342"],["/2020/08/16/Review/15歲的恐怖分子/index.html","471810fb7cacb378466aea39d3961803"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e9dcd8660e8056123b703166dfdaad1f"],["/2020/09/13/Review/羅生門/index.html","327040d4a7fa888e566a8e6022510260"],["/2020/09/20/Review/闇夜的怪物/index.html","54a49f18cbe7f22eec78beca1b0536dd"],["/2020/09/27/Review/14歲，明日的課表/index.html","461c4d86ae6326637dc516b342cb8261"],["/2020/10/04/Review/致十年後的你/index.html","008dc1e8586cff9c1b45ec92d4cf3130"],["/2020/11/08/Review/滅絕之園/index.html","a723b2358f65fd610732427ff9d038ef"],["/2020/11/15/Review/將愛拒於門外/index.html","161cd655ffe124cea4ce2cf7307ac348"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","c13d914ec48f3d70458b11f46c7acbdf"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2c2b197d9453451a31c3f0c6f259dc6d"],["/2021/04/22/Review/道印/index.html","62adfb01c71faf9e5866fef680a3890b"],["/2021/05/03/Review/戀入膏肓/index.html","dd1682eed254623297dd0852982fea08"],["/2021/05/10/Review/Dice/index.html","dd1c8d35c0fe98c1eb65c0f4fda18fff"],["/2021/05/15/Review/魔女之旅/index.html","d4c7e2f0666b08ed8e2d455a2035e89c"],["/2021/05/28/Review/戀愛寄生蟲/index.html","d83afe4b1ff98b353e33c99e0cf5bdf1"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2389e8dae643911aec66623fa1feef03"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3c545996a5d9ee1cf81398c902a8417a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","f99969690ca2b622b7a8119ebb570767"],["/2021/06/05/Review/流浪的月/index.html","4be023266b25262cf3880b1f02c70334"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","3661b7ac48af6bd687540ebc1aa19e05"],["/2021/06/13/Review/第一人稱單數/index.html","b40ddfd0263308a129280df5f2f71d01"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","1f3669bb82e911a84d3c4c315a564d19"],["/2021/06/16/Review/願你幸福/index.html","f0cb9af7a557e0a13c2a263e603c42cf"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","dfbe1dd5ea2aaf9a1f0e558b01476ea5"],["/2021/06/21/Review/神隱少女/index.html","4117614df70f41e4739669548c691778"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","762194ca9a17bfc195b4e8bd4f444fc8"],["/2021/06/23/Review/天空之城/index.html","d3b3a78b3629dc755d56401aad1365eb"],["/2021/06/24/Review/魔女宅急便/index.html","086f4131cf7063b32ec30743a0635fc6"],["/2021/06/25/Review/借物少女艾利緹/index.html","4a6ecec154e5cba5c47bb11cf6c54ac7"],["/2021/06/26/Review/魔法公主/index.html","c0532bca93f09e676d52abeffbf7f6a1"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","fe30d4c39d31e0e65dd405ceb0bd1a7d"],["/2021/07/04/Review/飛雪與劍/index.html","a1c2fc77d11929e4587bc7778d6a0cb0"],["/2021/07/09/Review/地球防衛少年/index.html","1063c9d0d03337327c75785f3d07673d"],["/2021/07/12/Review/Angel Beats!/index.html","e7d0fc219907158e6e18fdf7978b006d"],["/2021/07/13/Review/Clannad/index.html","995eb8b0f00d89fb4c45ac033ff13853"],["/2021/07/15/Review/AIR/index.html","44bdb2a0b7f903eb1446e627764ff8c3"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","340c327b080ca08ea687ba49150dc71e"],["/2021/07/15/Review/螢火之森/index.html","163c372af7c606187439d5657d932618"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","44d763a8d871441271b4da2f756b42eb"],["/2021/07/17/Review/奇蛋物語/index.html","fdba89b71b6d7fb17de00c8040abb36d"],["/2021/07/18/Review/Vivy/index.html","b0d4db54992b97af5c1f5bc0b2a81cc8"],["/2021/07/18/Review/請妳消失吧/index.html","fc199c115b2a4908f147b94969669053"],["/2021/07/19/Review/漣漪的夜晚/index.html","ed4978f9f71bd7869cd002e370a6f534"],["/2021/07/20/Review/月色真美/index.html","1a6f5e45aa716c9d85c815559a338104"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","2f3412298f0c8e99125b0c11faf54b6c"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ca38998b78c34e65bc941663be15f7b9"],["/2021/07/22/Review/罪惡王冠/index.html","d111940469de884726710df65bf61651"],["/2021/07/23/Review/弱角友崎同學/index.html","6909296ed19a90bd0fd69577ee44b967"],["/2021/07/23/Review/惡之教程/index.html","49e4a9250d0e697a4192dfa630f123b4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","86bce1d7eec755a11c575d318a43c6bf"],["/2021/07/25/Review/魔王勇者/index.html","85da5084a861a530078a3cc3f0831236"],["/2021/07/27/Review/一年A班的怪物/index.html","731846b06447309d8728bb27486b043a"],["/2021/07/27/Review/奇巧計程車/index.html","68ed0055459d169fff4581d5d2e15c18"],["/2021/07/27/Review/專情的碧池學妹/index.html","5caa4745685f1353d3365532a44474f3"],["/2021/07/29/Review/只有我不存在的城市/index.html","2de1d2d649d53472f9c381dc240a3b70"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2afef9fdc2e610a0006c42e7978f8de0"],["/2021/07/30/Review/可塑性記憶/index.html","c90d9ffb167bb5b3f95df098566e83bf"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1702ac4aed3acab14c0319bb40a19590"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","56fd236ab931e65178f5fbb0c7b1e74f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","2e57d195e04c229e09e0382805becf9f"],["/2021/08/25/Review/清戀/index.html","fb80641980c04c887f93ec26cad10dd4"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","2331576305fdf0fff8dba5ec1c1ec1f8"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f0ad260e38ad2ef8f8f16d02891c9419"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6df5519324779488a24beead6bc28c27"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","d8b7c42ff04b2696397f9a3e8b9c67c7"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c073315f0a758fcb83c24051751d8fa8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","fc67c7cdff63a9793922a592cb5fb71d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","237728f80545946a0087672dfe2a1f50"],["/2021/10/16/Review/龍與雀斑公主/index.html","86d04c294622d21689b9980e6b5bdc6b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","cb5f34cd6d5192ccbb7262af6bc54222"],["/2021/11/13/Review/徹夜之歌/index.html","a842169619d6fb2177efb7229cf5c8f5"],["/2021/11/24/Review/武煉巔峰/index.html","b9333411a7b1c9f2ff14a0faa61e208e"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","9cc7b53e3f74a0c9dfd583d75ea7e6f9"],["/2022/01/28/Review/神醫凰后/index.html","73fd82e90df10f936d7c53f16568631f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","3231d0722bff0b28b2feeb1217c77121"],["/2022/02/13/Review/夏日幽靈/index.html","e6c37adef6a7b57d75f1b41a8308909d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e6de4f44519636c0fbb4488590552b8f"],["/2022/02/26/Review/賽馬娘/index.html","a28068e19c7ec209e4b9b2ad3fbd091a"],["/2022/02/27/Review/大欺詐師/index.html","38e805078447e52f92c8b3882598509e"],["/2022/02/28/Review/前輩有夠煩/index.html","ad235de3c754c0dfe4f98650eaf210b4"],["/2022/02/28/Review/碧藍之海/index.html","30d7baece331071b6727374fcead5dea"],["/2022/03/05/Review/落第騎士英雄譚/index.html","aaff6538a3160e1c8fa1bd0662fbf8f5"],["/2022/03/06/Review/Another/index.html","d3726821824dd15eb0e1b7c65264f2d4"],["/2022/03/06/Review/入間同學入魔了/index.html","00fa2f881168e2b88dc0e9a959d0031f"],["/2022/03/18/Review/再見宣言/index.html","4eae081a62230c9c34d0b794638153a6"],["/2022/03/23/Review/生若冬花的妳/index.html","b8cfa776170137a8999a0b5102567496"],["/2022/03/25/Review/天之弱/index.html","022afb4a15b88c275981025b34843a53"],["/2022/03/31/Review/滅了天道之後轉生/index.html","64ca5b8c8d2388063a8f5cc069ddec91"],["/2022/04/30/Review/泡泡/index.html","82b2d1308c8c953f26e969824790173c"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","5c7bab0a27a6e7ee570f10f23eff3e48"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","3bdd83018db015956e08f0c1ffcef996"],["/2022/06/13/Review/偵探已經，死了/index.html","8276b7b6cbf7e49d9ca84957aff1bb87"],["/2022/06/14/Review/黑色子彈/index.html","1a71a454b4335ed1a6391903ceba2adb"],["/2022/06/15/Review/黑白來看守所/index.html","061e415308293099ceec66de0055d25e"],["/2022/06/16/Review/虛構推理/index.html","16d13785d109e995cc61e4b754e9825b"],["/2022/06/17/Review/戀愛與謊言/index.html","1483f309c388e1da06ac3b5e464571e6"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","432b900873c77a6b433613617f09adeb"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a1ac8ad5c8a951f60d11681259494d0c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2426ad27d6d46268ad01fa4307cb340a"],["/2022/07/03/Review/Hello World/index.html","0f57dbaf6457faee143d17c4b6b91c49"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","d99d43470798275e1504231ec2bbeaef"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","c2949bdb5b10aef577bcbb957ad53d00"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","e460d4c0760b21c4ed929cd169d26306"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","49f5bc7a7ae9114b0e6dc5f519853a3c"],["/2022/07/16/Japanese/動詞分類/index.html","73cecf0ecebcc3f7ad9b5d17c5b44221"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","357bf267b9f5326a15eb799636b1d051"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","cbf0094211215b333bc5b318b062883a"],["/2022/07/17/Japanese/音便/index.html","0519019e4ef0d50058f5a7eb016bc310"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d59b3b5aed5689fd7ff7bfd12d50986c"],["/2022/07/19/Japanese/助詞用法整理1/index.html","794c5435bfa3ba7089c9748eba839ac1"],["/2022/07/26/Japanese/助詞用法整理2/index.html","eff61f35800b3edfd19cb7fb294ab659"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","e1a0e4b0dc7c25cd0bb8799c77951941"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","e2b333834a69946989722bf2c26b0d1a"],["/2022/07/30/Japanese/疑問詞/index.html","be52dac8538d9b6687b4e6f2bb96bb70"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3efd1ceb03dc6170662563eb325759bc"],["/2022/08/02/Japanese/副詞整理/index.html","0d93b0504a25cc35566b923728b08c6a"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","b286ef8ff714f2ce7faab494d85ac2bc"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","018453ee277119e02e38bbf0445959ef"],["/2022/11/22/Review/組長女兒與保姆/index.html","7b1d3fa71e655b5e014de3746b242de7"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","a3578b96f717d4c133e2a879c7fecb02"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","8bfe4ad4ef0bfe6934fb8ce3390a6057"],["/404.html","c7057056c955818f1eecc617ab4112a5"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","6d48b1698e284e5f6de44bcd8b14b091"],["/archives/2019/11/index.html","580a904c2c33c915c6a2347ed07ae6e5"],["/archives/2019/12/index.html","8ff81621096db36e9b2610a9ec56bb13"],["/archives/2019/index.html","15eb0070b96a3dcf15028ffc056fe5e3"],["/archives/2020/01/index.html","9225cad9c52ffbe5af73ad19e965ecc9"],["/archives/2020/02/index.html","42e66e8bfb035579ba3bf144277d5851"],["/archives/2020/03/index.html","fc870dce9e9732d31bf628fb6ff9ebec"],["/archives/2020/04/index.html","b33540eb17709962d83f8eebdc24a770"],["/archives/2020/05/index.html","90db83ed6ee883fccaac0cbc20dd7e24"],["/archives/2020/07/index.html","58c176a9e4f1967d594356aca24cd6e8"],["/archives/2020/08/index.html","9b258b0c877fdaad52300bf8948e1202"],["/archives/2020/09/index.html","33445451ee07b7ecfcae90abaca142c7"],["/archives/2020/10/index.html","0155e573e0f8cee248312e7488e5a7a1"],["/archives/2020/11/index.html","61b7e15481ff1630bece63b4434aa5a9"],["/archives/2020/12/index.html","c7101b6318713f249f24a3b9fc4769b1"],["/archives/2020/index.html","3294d5585838eb682dd4a7e31eb38d52"],["/archives/2020/page/2/index.html","0e58978865a8366499065a79e4b11137"],["/archives/2020/page/3/index.html","9948a3563302482509a4f9de2cf5fdcc"],["/archives/2021/04/index.html","2130fca1971de6e71f8ae56becaaf351"],["/archives/2021/05/index.html","844d398ed62b23fe15356eafbd87ce61"],["/archives/2021/06/index.html","358c90e2072a9b3ab070fc49707a0d38"],["/archives/2021/06/page/2/index.html","3fdbbe811b4b537d773c59160267fcb2"],["/archives/2021/07/index.html","07c85a1370a9bac7e8d86ef397f5769e"],["/archives/2021/07/page/2/index.html","065cf235f9407db375e5d715fb227966"],["/archives/2021/07/page/3/index.html","1077eb1224a5c3a8ce198477de06cac0"],["/archives/2021/08/index.html","cac7b1254710f41104ff83c75c61539a"],["/archives/2021/09/index.html","ae57cde3ee1c0b8ff7f88f74aa12b87f"],["/archives/2021/10/index.html","87581ea0fb9fd4b79513ac6f56afac87"],["/archives/2021/11/index.html","a64c3286bd38c0211e17e28fbe124bc0"],["/archives/2021/12/index.html","d18e1a7bb2787774098d97130420b806"],["/archives/2021/index.html","6b31328c57601e3ce8b713f633540ad8"],["/archives/2021/page/2/index.html","c37da6ea4228d68f01fc8ae4232c3bdb"],["/archives/2021/page/3/index.html","8fcacdf2ab233275d0d3a1a13c9b168c"],["/archives/2021/page/4/index.html","e375d09807b6354ba798f7a984439d67"],["/archives/2021/page/5/index.html","628faefe444eda449245c1e0da024e5e"],["/archives/2021/page/6/index.html","59b9c36087e5501d54bab753ebcbe29c"],["/archives/2021/page/7/index.html","6e30261a58f26cbd445ac983eacdec5c"],["/archives/2022/01/index.html","cc50e060be26864a3e07c871e68b7d28"],["/archives/2022/02/index.html","4f7c1a0732887cd15e84ab9003ad6c13"],["/archives/2022/03/index.html","7de611027a0cc97d6272767319ef3980"],["/archives/2022/04/index.html","ac573cc982afb99faa837b57be109eff"],["/archives/2022/05/index.html","44612ffae8f8b919cf2171deb0616a73"],["/archives/2022/06/index.html","2a7c8eec5bfbe6f4c758e53ed610fa54"],["/archives/2022/07/index.html","ba827bde147b8c970197a551676e571f"],["/archives/2022/07/page/2/index.html","63570ee472630230f297899ad4e7427b"],["/archives/2022/08/index.html","b7b69662602f747863459158f95780fe"],["/archives/2022/11/index.html","ce24c58639b48aa90a214005d24f9f4c"],["/archives/2022/index.html","6b54574424785bc5bf0b2fccdff2abbe"],["/archives/2022/page/2/index.html","0f1907ecdfb1615bcd43af3493be539c"],["/archives/2022/page/3/index.html","6ef80f21120f1de85c28b414a7b1a852"],["/archives/2022/page/4/index.html","cc193f3f42d20ee6605f8f5665fefef6"],["/archives/2022/page/5/index.html","7829a31dfbb0c59d08c4278024629547"],["/archives/index.html","910fc5a7c788bed28ef48e42bb6921cc"],["/archives/page/10/index.html","8a47b6338e81d30dd8f7a2e9fbf41092"],["/archives/page/11/index.html","876db64e7c6259d317be769296a64ca2"],["/archives/page/12/index.html","a8e5696a4d234aeb66f3093c59d6c434"],["/archives/page/13/index.html","924e3ac3a660e5dbd2ebe02770c298c8"],["/archives/page/14/index.html","060699222a3af4edf0ad2b66a4ee604d"],["/archives/page/2/index.html","559d428ebc556c8d74acba694c98be98"],["/archives/page/3/index.html","cb84f4ad1c0aca8196d12948c3a4efb1"],["/archives/page/4/index.html","964d9b750ef436c4d20f959635519c76"],["/archives/page/5/index.html","cc3c11d78eafbfaceb3ad3ccc1b4933a"],["/archives/page/6/index.html","5a22dbdf1a86a665b78f171ced6fe2cc"],["/archives/page/7/index.html","12ceef0bfcb66ed4737051889585f44a"],["/archives/page/8/index.html","f6b2973f509f224ebd4c3876ddc2971c"],["/archives/page/9/index.html","328cd01890c2ff0c1b0e7fdfd41b1ddf"],["/categories/Algorithm/index.html","826e1ab862d881fc945bd63f76d598bb"],["/categories/Review/index.html","2c77b28aa0da0ca720c1ce28dc78c923"],["/categories/Review/page/10/index.html","a1e96f6ccbb740895d0b118f5f065489"],["/categories/Review/page/11/index.html","8b8a6802f070c198af504477ad3e000d"],["/categories/Review/page/12/index.html","e3f3eb597fc92f26ab614f9a7f9cbc10"],["/categories/Review/page/13/index.html","f0f0626837e11af430f0f549984944f6"],["/categories/Review/page/2/index.html","915955ca6b08a8b35dd50972ce1de406"],["/categories/Review/page/3/index.html","c476badd60ec767854a6e63fcae419fd"],["/categories/Review/page/4/index.html","069ebc85b3c365df1a54679df5046dee"],["/categories/Review/page/5/index.html","7b5a4472f71d34ea4025ed5ec36d0d89"],["/categories/Review/page/6/index.html","335afaa0c89f5379568653b3670b8ba7"],["/categories/Review/page/7/index.html","0dfce2b94f9b971a3749c58a307bd041"],["/categories/Review/page/8/index.html","11e23a41fb7dd8981d59cdbff702e938"],["/categories/Review/page/9/index.html","33cedaf0437368ff8bcfc63ce99d5246"],["/categories/index.html","e1321a876328abe057b2a9b2fc635e91"],["/categories/日本語/index.html","eb784276651fca44ea84b3d792487019"],["/categories/日本語/page/2/index.html","277d35c1a5b77d11b6ed5932575a0763"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4c38e701ab9b102fd949803968df7f25"],["/js/custom.js","fe59cbe1ca6b7aee7ce6ad0cf3d4b434"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","5159b02959cc26a50311ff6a695de12a"],["/page/10/index.html","4e1f196bbdfb6c2d97f6278747fee301"],["/page/11/index.html","27390438b46f737094dfd2aacc1af706"],["/page/12/index.html","92237a8ba09f0f4b531b84f6c9f138a8"],["/page/13/index.html","4cf2ebff34f233442cf6544a5901f3a6"],["/page/14/index.html","3ea8b0e5fe364441112824157897bb5f"],["/page/2/index.html","4eac693fb1a2f659bd65f3cca10ca1a1"],["/page/3/index.html","76505e4d3814fbdc370692705a837f09"],["/page/4/index.html","cae5ad2875ed8fafcad919ed7ccae9af"],["/page/5/index.html","46c0175d4766592e866143e7e87335f8"],["/page/6/index.html","92de09ac0d09581b42fcc5791b2c86d7"],["/page/7/index.html","d828bb3b4aa40982f789d8ade86c1212"],["/page/8/index.html","d3ae5e4d135056e9add9fddbae2eb77b"],["/page/9/index.html","1798e9b63cb05f27ddee4772f9ba5f2c"],["/sw-register.js","08614dd6b00784e99c05d56978f82f39"],["/tags/10分作品/index.html","95e979e096edbe550785db1ecc064034"],["/tags/3分作品/index.html","71b91b4c3b9e7abd17931719964df231"],["/tags/4分作品/index.html","f03f4020238d6f599064a374e1c02de4"],["/tags/5分作品/index.html","2b55caac39806969b180711bafd66551"],["/tags/6分作品/index.html","aae3d6e609a68a8bf55f5c2022bed179"],["/tags/6分作品/page/2/index.html","53f61a39407b458c96773b62cdb7d67f"],["/tags/6分作品/page/3/index.html","9c9bf20d843da8f8040c91f92b2ed621"],["/tags/7分作品/index.html","479c3de267eaef5584a8ebbf7eea9605"],["/tags/7分作品/page/2/index.html","86fd6edeaa0a1d562b5b01e76256796b"],["/tags/7分作品/page/3/index.html","572ab6dfb820d1340ca9b464ee9b28c0"],["/tags/7分作品/page/4/index.html","5a0829d29881592c0b33d4b47df891f5"],["/tags/8分作品/index.html","834a1d7df778fd2082270be6d8748ab3"],["/tags/8分作品/page/2/index.html","6b2ba8a3fe5e0441189da54a1f09667b"],["/tags/8分作品/page/3/index.html","f0089e0afc781eadbb31c5c21647bcb9"],["/tags/8分作品/page/4/index.html","db761241ed82e2baf0d2adc0fcb5176b"],["/tags/8分作品/page/5/index.html","fbac6ac9db639bb0a19073d85e4a1e66"],["/tags/9分作品/index.html","f7474a47c3c8d95e9561575b046eee48"],["/tags/index.html","154c13aefedd0f929d05a14e5086fec8"],["/tags/アボガド６/index.html","a7fbbb9139cfb3e116dc04e6391729d0"],["/tags/三秋縋/index.html","5e910f290703d0f833fbdb41b5a7c21f"],["/tags/二宮敦人/index.html","19e8598cde173fce421610e1c1bd1bd9"],["/tags/住野夜/index.html","fed4141bcba109aedf83adaf5d130ba4"],["/tags/佐野徹夜/index.html","7d7137b2ab6610a4fa2ee8ec35d2c4d0"],["/tags/動畫/index.html","a56c6ba82856f7bf47e6bfce407caeae"],["/tags/動畫/page/2/index.html","1063821051b216e6ea0d7227bc5b7609"],["/tags/動畫/page/3/index.html","922229805686839cf738ff656cb224f9"],["/tags/動畫/page/4/index.html","7f24b10f8d2dcc7d9ab59e90fdaac732"],["/tags/啞鳴/index.html","eedf787d25121473afd4ca06a9cda332"],["/tags/天澤夏月/index.html","612ab7d030dccdd4d700abd509c3ea9d"],["/tags/學習/index.html","086442078f6fb7d1437da2dfcc8faed8"],["/tags/學習/page/2/index.html","d797a29ad223d6cebb3e1b9e177a631a"],["/tags/宮崎駿/index.html","684ae83b7cce44841d8fe065a348baf5"],["/tags/小說/index.html","492ff3bf3f82864e3e1fc2f81599f8d0"],["/tags/小說/page/2/index.html","c4cac9bf8d56c4ba6f9d20d2be213f8f"],["/tags/小說/page/3/index.html","f9571d3ce3e0a2c2c07d13f3146db305"],["/tags/小說/page/4/index.html","f59480e6d704c4cf4b8b2f4dbb8f8ba2"],["/tags/小說/page/5/index.html","f5fdee3d14dd652356a48f9c0b353f0f"],["/tags/小說/page/6/index.html","f751db510d3d2c993f975c2eab107e87"],["/tags/小說/page/7/index.html","40706302fb5e14bf5a5e2c6b220e4d30"],["/tags/志茂文彥/index.html","1af6ba2bbd544e512e632a709c588caf"],["/tags/斜線堂有紀/index.html","8b6d93833d021c00cfd806ee82fc4845"],["/tags/漫畫/index.html","8293ebaa45b85ebcb74d89269e218cfe"],["/tags/葦舟ナツ/index.html","304447bf436f05ed42b162152be5857c"],["/tags/藤萬留/index.html","72ca6649ca9f1cada2ab5629d5498b00"],["/tags/電影/index.html","5491d7216a0ad8dfc58af27a18b612f1"],["/tags/電影/page/2/index.html","39488c42ceaf3c970417912e0c2e897c"]];
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
