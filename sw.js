/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","31db90ef516e104d57be6acfdd8c883a"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","864d8c189027b7a4f13a626f43e178cc"],["/2019/12/25/Review/無法計算的青春/index.html","305649395806f6398faed37bc70a6c0e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","b9baf00df641c7acbb31c087f53a4350"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","fcf5a01730e56423761976eee3a6f693"],["/2020/01/19/Review/下雨天，不上學/index.html","5c12bdcb3ec34174d5beb467f1c1b843"],["/2020/01/26/Review/三日間的幸福/index.html","1de852f4554fa51b28200eb633f5b637"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a62b3641f4a4d0103ec727ebad54134e"],["/2020/02/09/Review/青春期超感應/index.html","b5f1e49cdb84df1c8f6089a2e42c0fb0"],["/2020/02/15/Review/又做了，相同的夢/index.html","ab5d6a4ef738345a448e9cdc9069aab7"],["/2020/02/22/Review/回憶當鋪/index.html","b98ed5ab1e1e811b672c009762471171"],["/2020/03/22/Review/不適合自殺的季節/index.html","b95b52e0221334dc1abcf59ec3e8dc12"],["/2020/04/26/Review/我們都無法成為大人/index.html","1d5c79e0783ee9a464085a72a103bd37"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","0e93f1f56edf9acb55d819b404dad6e1"],["/2020/05/17/Review/人間失格/index.html","bb49e6bfd3b6a7bd2b08ab6efa31eb37"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ff568477b74fb4db3ff70bf1968eff44"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","590e4cca537976bd8a85d1e4ad2004f8"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6e99bfc926752aa0cb4f430bbfb1021e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","e602d22f0dc1210560b8538b04bb3342"],["/2020/08/16/Review/15歲的恐怖分子/index.html","471810fb7cacb378466aea39d3961803"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e9dcd8660e8056123b703166dfdaad1f"],["/2020/09/13/Review/羅生門/index.html","327040d4a7fa888e566a8e6022510260"],["/2020/09/20/Review/闇夜的怪物/index.html","54a49f18cbe7f22eec78beca1b0536dd"],["/2020/09/27/Review/14歲，明日的課表/index.html","461c4d86ae6326637dc516b342cb8261"],["/2020/10/04/Review/致十年後的你/index.html","33110986b6d9944d0083712302458809"],["/2020/11/08/Review/滅絕之園/index.html","7b53c5723e01487af8081d39923e9e97"],["/2020/11/15/Review/將愛拒於門外/index.html","161cd655ffe124cea4ce2cf7307ac348"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","c13d914ec48f3d70458b11f46c7acbdf"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2c2b197d9453451a31c3f0c6f259dc6d"],["/2021/04/22/Review/道印/index.html","62adfb01c71faf9e5866fef680a3890b"],["/2021/05/03/Review/戀入膏肓/index.html","dd1682eed254623297dd0852982fea08"],["/2021/05/10/Review/Dice/index.html","dd1c8d35c0fe98c1eb65c0f4fda18fff"],["/2021/05/15/Review/魔女之旅/index.html","6927a36b806f1566aad5ec7ad7552693"],["/2021/05/28/Review/戀愛寄生蟲/index.html","d83afe4b1ff98b353e33c99e0cf5bdf1"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2389e8dae643911aec66623fa1feef03"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3c545996a5d9ee1cf81398c902a8417a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","169c3b5e772f1258e35b95cdc89cebbf"],["/2021/06/05/Review/流浪的月/index.html","46fccca2af5d50c10391140bf9de5699"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","3661b7ac48af6bd687540ebc1aa19e05"],["/2021/06/13/Review/第一人稱單數/index.html","c4098b51d8daba6de8725afe4fdc4f87"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","1f3669bb82e911a84d3c4c315a564d19"],["/2021/06/16/Review/願你幸福/index.html","f0cb9af7a557e0a13c2a263e603c42cf"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","dfbe1dd5ea2aaf9a1f0e558b01476ea5"],["/2021/06/21/Review/神隱少女/index.html","4117614df70f41e4739669548c691778"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","762194ca9a17bfc195b4e8bd4f444fc8"],["/2021/06/23/Review/天空之城/index.html","d3b3a78b3629dc755d56401aad1365eb"],["/2021/06/24/Review/魔女宅急便/index.html","086f4131cf7063b32ec30743a0635fc6"],["/2021/06/25/Review/借物少女艾利緹/index.html","4a6ecec154e5cba5c47bb11cf6c54ac7"],["/2021/06/26/Review/魔法公主/index.html","c0532bca93f09e676d52abeffbf7f6a1"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","fe30d4c39d31e0e65dd405ceb0bd1a7d"],["/2021/07/04/Review/飛雪與劍/index.html","a1c2fc77d11929e4587bc7778d6a0cb0"],["/2021/07/09/Review/地球防衛少年/index.html","326ce2f41a0f95d893344665b110b989"],["/2021/07/12/Review/Angel Beats!/index.html","f038088178a3749273f25a265b24623a"],["/2021/07/13/Review/Clannad/index.html","4b43ad88bac1faa609d4349efb0061b3"],["/2021/07/15/Review/AIR/index.html","57015f8012397ea99f85d7d53eb66f05"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","eb969c25d7f34b0fb1c7f87f426907bd"],["/2021/07/15/Review/螢火之森/index.html","8600b6727d0c1ca862387eed771989ad"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","44d763a8d871441271b4da2f756b42eb"],["/2021/07/17/Review/奇蛋物語/index.html","32eb94287bee0e6238373ec8f1118d45"],["/2021/07/18/Review/Vivy/index.html","c9fddbf3e96d5dc5319c64df73b43d32"],["/2021/07/18/Review/請妳消失吧/index.html","fc199c115b2a4908f147b94969669053"],["/2021/07/19/Review/漣漪的夜晚/index.html","ed4978f9f71bd7869cd002e370a6f534"],["/2021/07/20/Review/月色真美/index.html","3a7a67510b60322ba1afd1185cf3ef33"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","577153ad4d8d262fa2f3098c31723c09"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ca38998b78c34e65bc941663be15f7b9"],["/2021/07/22/Review/罪惡王冠/index.html","e80ca8151868d4a5eb8afd4d64a60d53"],["/2021/07/23/Review/弱角友崎同學/index.html","6909296ed19a90bd0fd69577ee44b967"],["/2021/07/23/Review/惡之教程/index.html","49e4a9250d0e697a4192dfa630f123b4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","9e263f266f6815a768fe2ecca9183a09"],["/2021/07/25/Review/魔王勇者/index.html","d7c1286c0456a6b846a05fad9f1c89a0"],["/2021/07/27/Review/一年A班的怪物/index.html","731846b06447309d8728bb27486b043a"],["/2021/07/27/Review/奇巧計程車/index.html","55f2539d339999cc1584ca363e845426"],["/2021/07/27/Review/專情的碧池學妹/index.html","5caa4745685f1353d3365532a44474f3"],["/2021/07/29/Review/只有我不存在的城市/index.html","7369610f5d3270e9d9c42bbea819c3f4"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2afef9fdc2e610a0006c42e7978f8de0"],["/2021/07/30/Review/可塑性記憶/index.html","df4120060c6a348502d4d58eed6561f3"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1702ac4aed3acab14c0319bb40a19590"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","56fd236ab931e65178f5fbb0c7b1e74f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","2e57d195e04c229e09e0382805becf9f"],["/2021/08/25/Review/清戀/index.html","0a1c03c3793c3e1c50003ca4441cdb40"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","f6de21c3666432559372160fe4fc5e08"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f0ad260e38ad2ef8f8f16d02891c9419"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6df5519324779488a24beead6bc28c27"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","d8b7c42ff04b2696397f9a3e8b9c67c7"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c073315f0a758fcb83c24051751d8fa8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","fc67c7cdff63a9793922a592cb5fb71d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","237728f80545946a0087672dfe2a1f50"],["/2021/10/16/Review/龍與雀斑公主/index.html","86d04c294622d21689b9980e6b5bdc6b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","cb5f34cd6d5192ccbb7262af6bc54222"],["/2021/11/13/Review/徹夜之歌/index.html","a842169619d6fb2177efb7229cf5c8f5"],["/2021/11/24/Review/武煉巔峰/index.html","b9333411a7b1c9f2ff14a0faa61e208e"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","9cc7b53e3f74a0c9dfd583d75ea7e6f9"],["/2022/01/28/Review/神醫凰后/index.html","73fd82e90df10f936d7c53f16568631f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","3231d0722bff0b28b2feeb1217c77121"],["/2022/02/13/Review/夏日幽靈/index.html","e6c37adef6a7b57d75f1b41a8308909d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e6de4f44519636c0fbb4488590552b8f"],["/2022/02/26/Review/賽馬娘/index.html","0e4d073d5da07a8e95e974096ae4cb68"],["/2022/02/27/Review/大欺詐師/index.html","83f04610dc6c0e8f85598f54a26009fa"],["/2022/02/28/Review/前輩有夠煩/index.html","ad235de3c754c0dfe4f98650eaf210b4"],["/2022/02/28/Review/碧藍之海/index.html","d565985d0832554f89e372198a49f9e9"],["/2022/03/05/Review/落第騎士英雄譚/index.html","d5ccdac6fb193dc242af4d6d3175194b"],["/2022/03/06/Review/Another/index.html","ab95982cf8dadc387a244d2bd0f7a5dc"],["/2022/03/06/Review/入間同學入魔了/index.html","00fa2f881168e2b88dc0e9a959d0031f"],["/2022/03/18/Review/再見宣言/index.html","4eae081a62230c9c34d0b794638153a6"],["/2022/03/23/Review/生若冬花的妳/index.html","b8cfa776170137a8999a0b5102567496"],["/2022/03/25/Review/天之弱/index.html","022afb4a15b88c275981025b34843a53"],["/2022/03/31/Review/滅了天道之後轉生/index.html","64ca5b8c8d2388063a8f5cc069ddec91"],["/2022/04/30/Review/泡泡/index.html","82b2d1308c8c953f26e969824790173c"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","e7983ed33318185c038828a194857dac"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","10a5e4cec367c7cc37603eee166e9fc0"],["/2022/06/13/Review/偵探已經，死了/index.html","8276b7b6cbf7e49d9ca84957aff1bb87"],["/2022/06/14/Review/黑色子彈/index.html","5c9542afe0a7cf27199f14822f2d3629"],["/2022/06/15/Review/黑白來看守所/index.html","b59e64cc46e2c2c6bbac8d844a326d34"],["/2022/06/16/Review/虛構推理/index.html","fd894c96a74e32f68fe26210ae27aeb9"],["/2022/06/17/Review/戀愛與謊言/index.html","94cede2f439323019d15f5f07fe7edb7"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","432b900873c77a6b433613617f09adeb"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a1ac8ad5c8a951f60d11681259494d0c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2426ad27d6d46268ad01fa4307cb340a"],["/2022/07/03/Review/Hello World/index.html","707d322d654110641b154959d7ab2f37"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","29f7f1f517fad5c67bf21874f934f04a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","b3191ee928fa20d25ac0ec8a6f9e9f3a"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","4def5cdaca2de39480868d252f26d4dd"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","b9f08b395a19de8b992ee2024ee5f132"],["/2022/07/16/Japanese/動詞分類/index.html","f43e40d72ad914cd8e9967bbe65d28a2"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","7b3f05591f80b0ae35807b4d1e7bc435"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","46003182d41bd50ecf25d9084c9e08d3"],["/2022/07/17/Japanese/音便/index.html","b700a0d32f6097827f492daf0af5a805"],["/2022/07/18/Japanese/動詞 時態變化/index.html","da8b50d3bd63ac3e830eaa8d85c5427c"],["/2022/07/19/Japanese/助詞用法整理1/index.html","59f042a1c2501884dc43f7911caa365f"],["/2022/07/26/Japanese/助詞用法整理2/index.html","3fd3e2a9d8bda58bb6c82e54f61b8535"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","d66f6a5cf03a439de19422a68c75d7a6"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","541b12d3b846952b8191207d55a60b4e"],["/2022/07/30/Japanese/疑問詞/index.html","4d58fdd527b2e9bac7da11237f6798b4"],["/2022/07/31/Japanese/助詞用法整理3/index.html","922ab6839a6fe835d779c194b4cc9a08"],["/2022/08/02/Japanese/副詞整理/index.html","d6ce98e6c8df2954f88bb4df4f871536"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","10ce821e4aee2be62e32e9ddf11d3ebb"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","018453ee277119e02e38bbf0445959ef"],["/2022/11/22/Review/組長女兒與保姆/index.html","6cb6c0123be77172bfe23996335e97cb"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","d4b0bb8cea10a2a6556d1b5c01fe42b0"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","13dffd114ccda5e67c04690250ee82cb"],["/404.html","6e7b3292ae1f74ddf06a1a192ff0e9f1"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b32a6ae5040f396e4aabc7f14d08266b"],["/archives/2019/11/index.html","4d9a5ee8ac84d04c2d39927757a4af2d"],["/archives/2019/12/index.html","59e3f4d21a3d6430b00d864a99158a17"],["/archives/2019/index.html","34babe784ca68ee4b5aa92c29578163a"],["/archives/2020/01/index.html","de0e5b5c786c26cb22896baf8fd5bb90"],["/archives/2020/02/index.html","4e9050a59807ab80df536dcd78e5b8c5"],["/archives/2020/03/index.html","afef9c96301b52c868a99f9ddf2072f4"],["/archives/2020/04/index.html","63891218098152f0a99dd55f839e7d24"],["/archives/2020/05/index.html","feb079cb2fb48abd9511c8d4677f1f94"],["/archives/2020/07/index.html","64a7d4446747d9e23bd93575d0ed1754"],["/archives/2020/08/index.html","840edb83555370b50ca24ff83709fca1"],["/archives/2020/09/index.html","7c25a8ba9e3a148d9e0e7e5ef756921c"],["/archives/2020/10/index.html","f91ed19d851c3ccf74bf48c3781aa3ee"],["/archives/2020/11/index.html","cfca0ea1222a9726b23df91d04fb9c81"],["/archives/2020/12/index.html","eb31991c345fc5704ad0e8582e834ead"],["/archives/2020/index.html","8a228d73981e6d352f010bd7e6859284"],["/archives/2020/page/2/index.html","e917fa922e8d402886c32d8968d2c373"],["/archives/2020/page/3/index.html","f4399fa4440914ff7d6ca4e8b5d3dcbd"],["/archives/2021/04/index.html","9c1279e2a6a02111dfd250c5a86549b9"],["/archives/2021/05/index.html","c7a8e322b218a9e422db9cde66d9de2d"],["/archives/2021/06/index.html","cadc7d609401132f1fb731ed40c320ad"],["/archives/2021/06/page/2/index.html","f58236084ea5d8995d5a955401e69532"],["/archives/2021/07/index.html","ba9fbbf8ee6b7416c1d7a6d57fac1523"],["/archives/2021/07/page/2/index.html","4984894e386e57a4bcf876f8799c3548"],["/archives/2021/07/page/3/index.html","a75e7088ac8c6f2684830cbaa805b459"],["/archives/2021/08/index.html","69292ad813cd2446494d3c68d9479148"],["/archives/2021/09/index.html","58faf79e39bb013cd964843fcd8ae816"],["/archives/2021/10/index.html","5db2d502ff0e5f3e04a0d127fe302464"],["/archives/2021/11/index.html","e9f3013bb467f16894e22279057e6271"],["/archives/2021/12/index.html","351495ce6def1d915affd62c19440333"],["/archives/2021/index.html","a443cb0e0cce964f55d8032da32bfc41"],["/archives/2021/page/2/index.html","5c2190f8e8292ed6a4c2fd90d55064ad"],["/archives/2021/page/3/index.html","f1b7e5defa2bfa5934f5d225b9a9af7a"],["/archives/2021/page/4/index.html","fe22fc6ad37ea837001bad885c98d1e0"],["/archives/2021/page/5/index.html","dc1ec046a3dc62e867a10f9f894d55ba"],["/archives/2021/page/6/index.html","b4ec690b511185e1d615db63a8e76133"],["/archives/2021/page/7/index.html","7f174709454d8c9435412f2261aee1f8"],["/archives/2022/01/index.html","cce5cc1880bf1841c3c369431285df63"],["/archives/2022/02/index.html","54a59d8174c2cf544b2e1b2f37f58c46"],["/archives/2022/03/index.html","247d36e43bd05df98204163d6754034c"],["/archives/2022/04/index.html","2336b8b6fc038cbb87e18af6dba603b2"],["/archives/2022/05/index.html","fe7342b9c5dcfcad1b89499e6d3c8621"],["/archives/2022/06/index.html","848ca0d1c725cb5f60f0014ce9f27f23"],["/archives/2022/07/index.html","96e2940512817a514df72a4a456c0e74"],["/archives/2022/07/page/2/index.html","fda43230a0ca6e99b5719566530271f0"],["/archives/2022/08/index.html","71eca24445586d28a5f15c4e4daf57cf"],["/archives/2022/11/index.html","ea5dccc13f997e422c96abc922770311"],["/archives/2022/index.html","e6a9c9d4a87eaf0fee40ae7f23d570ec"],["/archives/2022/page/2/index.html","454238851a81887afd457209a9dfcd4f"],["/archives/2022/page/3/index.html","8684727649b0d23dbdf93051db6037d9"],["/archives/2022/page/4/index.html","97b91fc6ca4d3085ed8a58367d05ba83"],["/archives/2022/page/5/index.html","4ad07902e1811240111f4d61bcb02257"],["/archives/index.html","3f4d2287605c16ace235dc2537351bc1"],["/archives/page/10/index.html","73003c930ca3edd3c892388c4e067512"],["/archives/page/11/index.html","a8bcf555a2f18f8dbed051e017d3940d"],["/archives/page/12/index.html","8f20f521365f555a9f267863c67630af"],["/archives/page/13/index.html","fd0b063bb5f4db94745784056bfc4e12"],["/archives/page/14/index.html","a5ff35514b3ee6f64fb56a6b1d6b96b3"],["/archives/page/2/index.html","3932f88cb814430a4c59ee65720b8d08"],["/archives/page/3/index.html","b262a3568e295e4ced1f875e84ef8344"],["/archives/page/4/index.html","28e9714bbbb0fe3eb30c319944bfadb1"],["/archives/page/5/index.html","1a999a999cfb448662345ac39ec352ed"],["/archives/page/6/index.html","7004f421e853391d86eeed236da74cdb"],["/archives/page/7/index.html","052fce48482cc8e323f5fd1373411cfb"],["/archives/page/8/index.html","2d7d1cff948185e0e5698c8ed2886d88"],["/archives/page/9/index.html","e5d82726171c9fb02f644ed917faed95"],["/categories/Algorithm/index.html","0dc97143d66ef5a4d6a970506c668b64"],["/categories/Review/index.html","09a8d502e7652f8c42e4b1eabb5324db"],["/categories/Review/page/10/index.html","5edcaf7ff3855842f5d93ad9f60701ba"],["/categories/Review/page/11/index.html","234039f17a3a7dd5416afd583593af1e"],["/categories/Review/page/12/index.html","1b5ecc2194eef8450eac4e636b122b50"],["/categories/Review/page/13/index.html","5cd7b55a38dcaeab525c753b97cf3ebb"],["/categories/Review/page/2/index.html","cdde4358ef09c1a77f922388cbf4538d"],["/categories/Review/page/3/index.html","6ad862d39acce2b3fcc985a58b60e16f"],["/categories/Review/page/4/index.html","20faebc551c7dc6f2985a0c675e1caee"],["/categories/Review/page/5/index.html","87fcc8cac92d07f4fee8fea1d14bfce8"],["/categories/Review/page/6/index.html","8d33c393eff2388ed0053c0f48151a67"],["/categories/Review/page/7/index.html","b84fb23f2bfb9e8b37c20eb18f313e1a"],["/categories/Review/page/8/index.html","7bfa8ab5c81d475fce6ab8c832277284"],["/categories/Review/page/9/index.html","4624d22cb3531983d6a9f892e002d490"],["/categories/index.html","21f10278ca8c4234b1030a827b89aea1"],["/categories/日本語/index.html","e9eb3d6e096dfa85db79d541280dd140"],["/categories/日本語/page/2/index.html","39591c70d01e3afab47e918a73801fe8"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e701d4bb8b9cc5edbe58038553d9acfc"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","12c2b5f4db6edc314e0d3b3f4763567e"],["/page/10/index.html","64e54ac1eb1efbe3937c69c99486947c"],["/page/11/index.html","26478d0e82830593d53f1c833b146755"],["/page/12/index.html","13d5b274e7f3a541ef78ec875b74ecb5"],["/page/13/index.html","2422a04e427615f9abd5877484c0bbb8"],["/page/14/index.html","e6fe6a5ca113297374ee9c43d7fdb6dd"],["/page/2/index.html","d4a2b5e1743732304e6f6b891ac14e76"],["/page/3/index.html","2e4ea5d5f771496bb8902c32f148cae3"],["/page/4/index.html","18446468c0132b9c08a64baae9f0aa9a"],["/page/5/index.html","b2c28e59f62d3b253f27f3c0f2b0d652"],["/page/6/index.html","103b721f7700c9574ba385ea953c0848"],["/page/7/index.html","782e910fc1e59abb5f27fc70b8c9a031"],["/page/8/index.html","600f5b8dd2e1abf45f951a8bbe312993"],["/page/9/index.html","9e38e1bfba9cede9c0e4bcf81e577e01"],["/sw-register.js","31865439ab762830ba3b105ae7b5a7f9"],["/tags/10分作品/index.html","788ae55a1b7bdb64efc75f8b84cff973"],["/tags/3分作品/index.html","d4c59ee0f8ab6e8e76b449ad64126e0a"],["/tags/4分作品/index.html","c728025992b55ae5358e62608ae2d594"],["/tags/5分作品/index.html","b7898484fb6081b225675cf453ce4326"],["/tags/6分作品/index.html","a970732bac74f72a7f2951fb24024c09"],["/tags/6分作品/page/2/index.html","9ec6d225d7d9561a00974434b46e8949"],["/tags/6分作品/page/3/index.html","d0868f9c97623d8a01ab2a8a1cba44a6"],["/tags/7分作品/index.html","e8ffd16f204c89815db9939811ac9831"],["/tags/7分作品/page/2/index.html","b5258981ba666204ecea9d9747e53113"],["/tags/7分作品/page/3/index.html","5683cef6febd3adfca82eae135d8a281"],["/tags/7分作品/page/4/index.html","27418c6a54288406c0f35144b9c80064"],["/tags/8分作品/index.html","e383e3fa6e6d9a5cdff028521d2ebc7d"],["/tags/8分作品/page/2/index.html","481d118cc5cf0bcea7a2d24e1aa99b47"],["/tags/8分作品/page/3/index.html","ad6ade8c6a296f3f551a83760069f3ba"],["/tags/8分作品/page/4/index.html","7799bbb4fb07be615f8747835927e07c"],["/tags/8分作品/page/5/index.html","ece7243cd4670f82e00611c671dba1c6"],["/tags/9分作品/index.html","d0aa7529741b40a486d292fdcbab097d"],["/tags/index.html","de51e6e9b49cb568cb248cdf32e38933"],["/tags/アボガド６/index.html","37acf8beecb52b9c0e3dd9dea5d91a8c"],["/tags/三秋縋/index.html","907a027525f7d97ac9de4729c801a8b2"],["/tags/二宮敦人/index.html","a7c0799cafcf7dfc1f556206871b9a43"],["/tags/住野夜/index.html","e280ebd8167a104a057b4140b197a7e3"],["/tags/佐野徹夜/index.html","d21ae9a705a652e40a53842dd5d4c035"],["/tags/動畫/index.html","b860f11ae0cc3d6e5811525318a1e71d"],["/tags/動畫/page/2/index.html","c7769ae8c74b581c6f227d57f8baedb9"],["/tags/動畫/page/3/index.html","96b37253e7428bb87e932c56f7e2b957"],["/tags/動畫/page/4/index.html","052241115a5c75459e806905de17d248"],["/tags/啞鳴/index.html","0bd216b0bfa8073fedf9b124e2b8e616"],["/tags/天澤夏月/index.html","42b2b75dee34d9e19ab1471ff6b9a1b5"],["/tags/學習/index.html","ac04f88957d8a715c9ac04a764eec64b"],["/tags/學習/page/2/index.html","2266f594e86343f5a92d39cdc39a192b"],["/tags/宮崎駿/index.html","bf78b7d42256b15a16f76b6ec1fe8231"],["/tags/小說/index.html","618b4fd6c5d001d516f9dc3cb9f31843"],["/tags/小說/page/2/index.html","ec42963abed8b89412c7e1fba5733fcf"],["/tags/小說/page/3/index.html","c5a2e94c7b77f96b391ac1371e958d61"],["/tags/小說/page/4/index.html","7923476387409f11bc23cf9d65bfee1d"],["/tags/小說/page/5/index.html","b40e801af444f987cd9e092b3e436265"],["/tags/小說/page/6/index.html","6da0aa7fc113f85fbaa09cc82e619e82"],["/tags/小說/page/7/index.html","98ea53de859fa16579043f463d06078b"],["/tags/志茂文彥/index.html","5c80a2d26e139f353f6c61ba2fdbf9de"],["/tags/斜線堂有紀/index.html","f0126825e476d5c4a0efbb7195c40a5b"],["/tags/漫畫/index.html","66964ebf7e4c54634a44954cd282c269"],["/tags/葦舟ナツ/index.html","744252dd60e8cbf657a72cbefc27e990"],["/tags/藤萬留/index.html","58a2d28a83f63d29948ff9c74bc6b877"],["/tags/電影/index.html","1089c592662d6d29a78b6055943e8fc8"],["/tags/電影/page/2/index.html","0627489afb1449d30a0e164799d84de8"]];
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
