/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","31db90ef516e104d57be6acfdd8c883a"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","864d8c189027b7a4f13a626f43e178cc"],["/2019/12/25/Review/無法計算的青春/index.html","305649395806f6398faed37bc70a6c0e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","b9baf00df641c7acbb31c087f53a4350"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","fcf5a01730e56423761976eee3a6f693"],["/2020/01/19/Review/下雨天，不上學/index.html","5c12bdcb3ec34174d5beb467f1c1b843"],["/2020/01/26/Review/三日間的幸福/index.html","1de852f4554fa51b28200eb633f5b637"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a62b3641f4a4d0103ec727ebad54134e"],["/2020/02/09/Review/青春期超感應/index.html","dbc7733cdb194809f8a1ee6393b8376d"],["/2020/02/15/Review/又做了，相同的夢/index.html","ab5d6a4ef738345a448e9cdc9069aab7"],["/2020/02/22/Review/回憶當鋪/index.html","aa9948b4f7d0db66c37cdfd76c50bfb9"],["/2020/03/22/Review/不適合自殺的季節/index.html","d1259ba7fe0d343329db909b3280b143"],["/2020/04/26/Review/我們都無法成為大人/index.html","1d5c79e0783ee9a464085a72a103bd37"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","f92d19cf5c6af88ab4dba83839212b0c"],["/2020/05/17/Review/人間失格/index.html","bb49e6bfd3b6a7bd2b08ab6efa31eb37"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ff568477b74fb4db3ff70bf1968eff44"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","590e4cca537976bd8a85d1e4ad2004f8"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6e99bfc926752aa0cb4f430bbfb1021e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","c263eafbff30e94565c08937432f7f68"],["/2020/08/16/Review/15歲的恐怖分子/index.html","471810fb7cacb378466aea39d3961803"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e9dcd8660e8056123b703166dfdaad1f"],["/2020/09/13/Review/羅生門/index.html","327040d4a7fa888e566a8e6022510260"],["/2020/09/20/Review/闇夜的怪物/index.html","54a49f18cbe7f22eec78beca1b0536dd"],["/2020/09/27/Review/14歲，明日的課表/index.html","461c4d86ae6326637dc516b342cb8261"],["/2020/10/04/Review/致十年後的你/index.html","33110986b6d9944d0083712302458809"],["/2020/11/08/Review/滅絕之園/index.html","7b53c5723e01487af8081d39923e9e97"],["/2020/11/15/Review/將愛拒於門外/index.html","161cd655ffe124cea4ce2cf7307ac348"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","c13d914ec48f3d70458b11f46c7acbdf"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2c2b197d9453451a31c3f0c6f259dc6d"],["/2021/04/22/Review/道印/index.html","62adfb01c71faf9e5866fef680a3890b"],["/2021/05/03/Review/戀入膏肓/index.html","dd1682eed254623297dd0852982fea08"],["/2021/05/10/Review/Dice/index.html","dd1c8d35c0fe98c1eb65c0f4fda18fff"],["/2021/05/15/Review/魔女之旅/index.html","6927a36b806f1566aad5ec7ad7552693"],["/2021/05/28/Review/戀愛寄生蟲/index.html","d83afe4b1ff98b353e33c99e0cf5bdf1"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2389e8dae643911aec66623fa1feef03"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3c545996a5d9ee1cf81398c902a8417a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","35692b44a76d66b0c63318315fa25158"],["/2021/06/05/Review/流浪的月/index.html","a591fa5a9119bc5536a1abad687ca58c"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","3661b7ac48af6bd687540ebc1aa19e05"],["/2021/06/13/Review/第一人稱單數/index.html","c4098b51d8daba6de8725afe4fdc4f87"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","1f3669bb82e911a84d3c4c315a564d19"],["/2021/06/16/Review/願你幸福/index.html","f0cb9af7a557e0a13c2a263e603c42cf"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","dfbe1dd5ea2aaf9a1f0e558b01476ea5"],["/2021/06/21/Review/神隱少女/index.html","4117614df70f41e4739669548c691778"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","762194ca9a17bfc195b4e8bd4f444fc8"],["/2021/06/23/Review/天空之城/index.html","d3b3a78b3629dc755d56401aad1365eb"],["/2021/06/24/Review/魔女宅急便/index.html","086f4131cf7063b32ec30743a0635fc6"],["/2021/06/25/Review/借物少女艾利緹/index.html","4a6ecec154e5cba5c47bb11cf6c54ac7"],["/2021/06/26/Review/魔法公主/index.html","c0532bca93f09e676d52abeffbf7f6a1"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","fe30d4c39d31e0e65dd405ceb0bd1a7d"],["/2021/07/04/Review/飛雪與劍/index.html","a1c2fc77d11929e4587bc7778d6a0cb0"],["/2021/07/09/Review/地球防衛少年/index.html","1063c9d0d03337327c75785f3d07673d"],["/2021/07/12/Review/Angel Beats!/index.html","f038088178a3749273f25a265b24623a"],["/2021/07/13/Review/Clannad/index.html","b8cea7685c2c88b3b93da48f2ab73a8c"],["/2021/07/15/Review/AIR/index.html","57015f8012397ea99f85d7d53eb66f05"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","eb969c25d7f34b0fb1c7f87f426907bd"],["/2021/07/15/Review/螢火之森/index.html","8600b6727d0c1ca862387eed771989ad"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","44d763a8d871441271b4da2f756b42eb"],["/2021/07/17/Review/奇蛋物語/index.html","32eb94287bee0e6238373ec8f1118d45"],["/2021/07/18/Review/Vivy/index.html","c9fddbf3e96d5dc5319c64df73b43d32"],["/2021/07/18/Review/請妳消失吧/index.html","fc199c115b2a4908f147b94969669053"],["/2021/07/19/Review/漣漪的夜晚/index.html","ed4978f9f71bd7869cd002e370a6f534"],["/2021/07/20/Review/月色真美/index.html","3a7a67510b60322ba1afd1185cf3ef33"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","577153ad4d8d262fa2f3098c31723c09"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ca38998b78c34e65bc941663be15f7b9"],["/2021/07/22/Review/罪惡王冠/index.html","e80ca8151868d4a5eb8afd4d64a60d53"],["/2021/07/23/Review/弱角友崎同學/index.html","6909296ed19a90bd0fd69577ee44b967"],["/2021/07/23/Review/惡之教程/index.html","49e4a9250d0e697a4192dfa630f123b4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","9e263f266f6815a768fe2ecca9183a09"],["/2021/07/25/Review/魔王勇者/index.html","36dcebe811dde0f47fd4d661c821f63b"],["/2021/07/27/Review/一年A班的怪物/index.html","731846b06447309d8728bb27486b043a"],["/2021/07/27/Review/奇巧計程車/index.html","55f2539d339999cc1584ca363e845426"],["/2021/07/27/Review/專情的碧池學妹/index.html","5caa4745685f1353d3365532a44474f3"],["/2021/07/29/Review/只有我不存在的城市/index.html","7369610f5d3270e9d9c42bbea819c3f4"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2afef9fdc2e610a0006c42e7978f8de0"],["/2021/07/30/Review/可塑性記憶/index.html","df4120060c6a348502d4d58eed6561f3"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1702ac4aed3acab14c0319bb40a19590"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","56fd236ab931e65178f5fbb0c7b1e74f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","2e57d195e04c229e09e0382805becf9f"],["/2021/08/25/Review/清戀/index.html","1e74019bbc6095dfb98e4b6c682c2682"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","fbd619407a755e6f2a61e29866dd2f9b"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f0ad260e38ad2ef8f8f16d02891c9419"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6df5519324779488a24beead6bc28c27"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","d8b7c42ff04b2696397f9a3e8b9c67c7"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c073315f0a758fcb83c24051751d8fa8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","fc67c7cdff63a9793922a592cb5fb71d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","237728f80545946a0087672dfe2a1f50"],["/2021/10/16/Review/龍與雀斑公主/index.html","86d04c294622d21689b9980e6b5bdc6b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","cb5f34cd6d5192ccbb7262af6bc54222"],["/2021/11/13/Review/徹夜之歌/index.html","a842169619d6fb2177efb7229cf5c8f5"],["/2021/11/24/Review/武煉巔峰/index.html","b9333411a7b1c9f2ff14a0faa61e208e"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","9cc7b53e3f74a0c9dfd583d75ea7e6f9"],["/2022/01/28/Review/神醫凰后/index.html","73fd82e90df10f936d7c53f16568631f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","3231d0722bff0b28b2feeb1217c77121"],["/2022/02/13/Review/夏日幽靈/index.html","e6c37adef6a7b57d75f1b41a8308909d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e6de4f44519636c0fbb4488590552b8f"],["/2022/02/26/Review/賽馬娘/index.html","0e4d073d5da07a8e95e974096ae4cb68"],["/2022/02/27/Review/大欺詐師/index.html","3d94774fb45847f92a97fe83123b485f"],["/2022/02/28/Review/前輩有夠煩/index.html","ad235de3c754c0dfe4f98650eaf210b4"],["/2022/02/28/Review/碧藍之海/index.html","d565985d0832554f89e372198a49f9e9"],["/2022/03/05/Review/落第騎士英雄譚/index.html","963dced25b99f6c591c279d7fafc932f"],["/2022/03/06/Review/Another/index.html","d3726821824dd15eb0e1b7c65264f2d4"],["/2022/03/06/Review/入間同學入魔了/index.html","00fa2f881168e2b88dc0e9a959d0031f"],["/2022/03/18/Review/再見宣言/index.html","4eae081a62230c9c34d0b794638153a6"],["/2022/03/23/Review/生若冬花的妳/index.html","b8cfa776170137a8999a0b5102567496"],["/2022/03/25/Review/天之弱/index.html","022afb4a15b88c275981025b34843a53"],["/2022/03/31/Review/滅了天道之後轉生/index.html","64ca5b8c8d2388063a8f5cc069ddec91"],["/2022/04/30/Review/泡泡/index.html","82b2d1308c8c953f26e969824790173c"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","5c7bab0a27a6e7ee570f10f23eff3e48"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","10a5e4cec367c7cc37603eee166e9fc0"],["/2022/06/13/Review/偵探已經，死了/index.html","8276b7b6cbf7e49d9ca84957aff1bb87"],["/2022/06/14/Review/黑色子彈/index.html","1a71a454b4335ed1a6391903ceba2adb"],["/2022/06/15/Review/黑白來看守所/index.html","b59e64cc46e2c2c6bbac8d844a326d34"],["/2022/06/16/Review/虛構推理/index.html","16d13785d109e995cc61e4b754e9825b"],["/2022/06/17/Review/戀愛與謊言/index.html","1483f309c388e1da06ac3b5e464571e6"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","432b900873c77a6b433613617f09adeb"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a1ac8ad5c8a951f60d11681259494d0c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2426ad27d6d46268ad01fa4307cb340a"],["/2022/07/03/Review/Hello World/index.html","707d322d654110641b154959d7ab2f37"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","9dc95ae4c0e9e6c5fc9875924fe4da23"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","53ee65dc7a875174563447440d4107f0"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","0e9e53aeeb468d0f8bedee9f7602ac27"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","984a1620eb6d0730dbb83cfafe40880c"],["/2022/07/16/Japanese/動詞分類/index.html","97cfe18212867b78b9cfcca5ba2f856c"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","87c5ab1cb7339a9ffb10b87ba85b0172"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","a45b76bd0343e54969143ccc9df1769a"],["/2022/07/17/Japanese/音便/index.html","e530a9ab72455c35242f9bea13ce987d"],["/2022/07/18/Japanese/動詞 時態變化/index.html","a2dab08edc51098c463a0f7502bf6091"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ec8b2908aca133b9d7c93366de0da210"],["/2022/07/26/Japanese/助詞用法整理2/index.html","a2ba2a982ba85faf3c1b22cbc03ec3a1"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","9a46a8afafd8993342f4fce35b7c05c7"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","e182d013f1eddea47f684a0de924a3b8"],["/2022/07/30/Japanese/疑問詞/index.html","04acb8e66babd408c434fba74155f3fb"],["/2022/07/31/Japanese/助詞用法整理3/index.html","e80526a9c3cb56462eb8c7d32022ca97"],["/2022/08/02/Japanese/副詞整理/index.html","2caa695faf49a5822be6970f1548cd47"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","c573b8fcbef412bab66898daf481f189"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","018453ee277119e02e38bbf0445959ef"],["/2022/11/22/Review/組長女兒與保姆/index.html","6cb6c0123be77172bfe23996335e97cb"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","d4b0bb8cea10a2a6556d1b5c01fe42b0"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","13dffd114ccda5e67c04690250ee82cb"],["/404.html","94ef2a9483f3c3f0f66602fb90ee5943"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","003a4f9322fa1faa30dbfd6c4ea82d0b"],["/archives/2019/11/index.html","24981ac0df360a233f027f62808784ac"],["/archives/2019/12/index.html","e1e6cb1778158813bf487cbc9a411dda"],["/archives/2019/index.html","5125434620b186038acb458cd76f19da"],["/archives/2020/01/index.html","c1722693eb16ab457d363615b7660e14"],["/archives/2020/02/index.html","80a49668f2267ef19a62173ebebc644a"],["/archives/2020/03/index.html","659263b428d404613991fd74c0007c98"],["/archives/2020/04/index.html","74645c3f45ebb48e755f1bbe4eb5d745"],["/archives/2020/05/index.html","56dd6e76feac9016b6958c13980a2e5a"],["/archives/2020/07/index.html","eba1f385e20a970ab1d4a3b883fad4f5"],["/archives/2020/08/index.html","6c67ac64b7c0c0de0c1b1a2853d59589"],["/archives/2020/09/index.html","530fdc15171cb6e1412818e240ebd886"],["/archives/2020/10/index.html","e4265b07f296e0ccb4b3c2dcb2e85e4a"],["/archives/2020/11/index.html","aa8a1544c4e2d9eb643efe5b10678365"],["/archives/2020/12/index.html","38f095d67efca2192b2259a156f37f3e"],["/archives/2020/index.html","0143022d3ff2b1c5b74d9648f8063348"],["/archives/2020/page/2/index.html","bb4b423bd8a0b937cc7e5e430f917702"],["/archives/2020/page/3/index.html","95e90f86c5dc9fff1ad4339997902497"],["/archives/2021/04/index.html","54e1262400bfad4442170d7f89a1e11c"],["/archives/2021/05/index.html","ba139eb3081ea4d3cac759926d3c4ed8"],["/archives/2021/06/index.html","1865edfd8b5c22b425cdde0c34e98cc0"],["/archives/2021/06/page/2/index.html","91716c2aed310158d84b2e9a24a6984e"],["/archives/2021/07/index.html","e8c212c758eb439ea0376cc3298cb2e8"],["/archives/2021/07/page/2/index.html","c31a1aaa6dbf64311bdf54d412df2f46"],["/archives/2021/07/page/3/index.html","6b6dc180c1861ffa2efa4fdeb889e5bb"],["/archives/2021/08/index.html","0070c4cc328e173c46b780f30b96e33d"],["/archives/2021/09/index.html","ca9bbb42a5449532719b6bedd9714860"],["/archives/2021/10/index.html","38ef253da61b88216e24697a9824b8d9"],["/archives/2021/11/index.html","69e7e69f49e8c03945d5b9d195085ef9"],["/archives/2021/12/index.html","9a29dc502047908a65137050ed2689b6"],["/archives/2021/index.html","5838fab847532bb6abe5ebb06347a701"],["/archives/2021/page/2/index.html","267ff6fd5cc3c33c643f8a6885bf1115"],["/archives/2021/page/3/index.html","8f47fc7192b3f7d8263d9e567a88ca96"],["/archives/2021/page/4/index.html","5cb1f5d0fc76655bf791a7b2ceeb63fd"],["/archives/2021/page/5/index.html","6e9c92d05f9cdcb88c70ae07883f290e"],["/archives/2021/page/6/index.html","6e1d1cba11242889f17b6bf9911002eb"],["/archives/2021/page/7/index.html","12a92f9c121b4a2f63d136af9c55e646"],["/archives/2022/01/index.html","8292417c2e0095a0ee88b721527d0a30"],["/archives/2022/02/index.html","3a7b5e7bc74e165382736c2da6a91c97"],["/archives/2022/03/index.html","122067718c533ebe2cbf2e178ffe24dd"],["/archives/2022/04/index.html","4479bf864d5de0d35cc9e817b72d415e"],["/archives/2022/05/index.html","495635e288874cfee485da98a12a57b5"],["/archives/2022/06/index.html","22896257c10a33554e8772174dc8a3c0"],["/archives/2022/07/index.html","ad959ebe3a32447ff511d5824aca2137"],["/archives/2022/07/page/2/index.html","dea513c746b6c9f497514f36cebd0655"],["/archives/2022/08/index.html","ceab9b5bdb177c08f624ccd343a62666"],["/archives/2022/11/index.html","6a4c4134fea0374271c4619d5a7c0bff"],["/archives/2022/index.html","7393e90547a81dbfd57554fd2757cc96"],["/archives/2022/page/2/index.html","9ef8cec695b1236ee28937fbe6964943"],["/archives/2022/page/3/index.html","a239928d2681e5328c2aaa3e8ff71f87"],["/archives/2022/page/4/index.html","def20dfe5ff069f5a8a45d61fcedc690"],["/archives/2022/page/5/index.html","e22875605b846dac1a8703fd9f5ab920"],["/archives/index.html","85fee7cd4c59c65b6d28b6340d20f890"],["/archives/page/10/index.html","ad0656f6bcc80dd58a1a5455223f8e50"],["/archives/page/11/index.html","0efcc793cf7eb112851474e8a00d3a07"],["/archives/page/12/index.html","b6891e84ea6e0b0c133ffd6e49da71fc"],["/archives/page/13/index.html","48e9435a7ea9737f678bc994adc24cc3"],["/archives/page/14/index.html","f7b6492123923544f124fa333ec23247"],["/archives/page/2/index.html","1bb692e2e66277e2f4505887040cfb5c"],["/archives/page/3/index.html","f494f6db9129eab4e642ea147c016f23"],["/archives/page/4/index.html","c9a8d03ea2236dad09f47410b2380f85"],["/archives/page/5/index.html","0350c8c36c12d767a013cfb15d45232f"],["/archives/page/6/index.html","47c9d6e97826e79af075585a3bc1de05"],["/archives/page/7/index.html","c4254cffe2a8a42bfd47bfb56f6d40ac"],["/archives/page/8/index.html","7ef67d81ef2ff248e6658b2d2820965a"],["/archives/page/9/index.html","350f031197ac2789433a95dbaa2c2b9b"],["/categories/Algorithm/index.html","67ffef700df3f8a336cf90cfcb989d50"],["/categories/Review/index.html","8b4f2eb918e2f3031bccbab8cef53c66"],["/categories/Review/page/10/index.html","2593223c407ab598cb76dfa86e375bea"],["/categories/Review/page/11/index.html","1d9d36f7c93ddf01f86860aec303247f"],["/categories/Review/page/12/index.html","abff01d546f466b8f98e5c9b23582d50"],["/categories/Review/page/13/index.html","51ae7c8aeae963b991ab87f930aa171f"],["/categories/Review/page/2/index.html","ea788142efdc0fe0eef35a91f2a36dc7"],["/categories/Review/page/3/index.html","bc76dfa06ae3cd06011edca422eb8b76"],["/categories/Review/page/4/index.html","5a1efada3b6f4f0411193381318e9566"],["/categories/Review/page/5/index.html","c1ecb14d68d6411796276087eec0d7c0"],["/categories/Review/page/6/index.html","d9d5bac26d252c0d8afc7cd4ee83b072"],["/categories/Review/page/7/index.html","f46d0a87a3f46db7657e882fe31b112b"],["/categories/Review/page/8/index.html","c70166825c7586d66ad4763e8d8651ca"],["/categories/Review/page/9/index.html","652449b6b0dd1676a9b27bc96b493814"],["/categories/index.html","a8e1a62d07336a91750b481e7812aab4"],["/categories/日本語/index.html","5556b25b9bf01f94388a5ac9f68a9fe5"],["/categories/日本語/page/2/index.html","794fabe9bd3a949af67c860170e034f8"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b874bdce115724a41dd16b0eb7524a89"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","eb063a05957a3b34067a0b16abe9b5a2"],["/page/10/index.html","c30dd1e41a6ecf000658521777038988"],["/page/11/index.html","08153190df3f2a4658c06fb06860281b"],["/page/12/index.html","abd865237dd157400a94c8fd6dc61846"],["/page/13/index.html","61c8e55e17cad2c9d9773add95102740"],["/page/14/index.html","3696213af18825c4109572b68519d2c2"],["/page/2/index.html","87bd74d16ce8a178ea2fa8f323fd0049"],["/page/3/index.html","92df4dca6228ae6e573c65b4fe5a22f3"],["/page/4/index.html","77e65988d63b6454229f53d73943de7c"],["/page/5/index.html","10de33b4dc2d7404a594ca4e2eea6b5b"],["/page/6/index.html","d55887b11cc127a13efdc2d5c363b356"],["/page/7/index.html","9402445d55043bbf7c9f41583912a702"],["/page/8/index.html","84d16c7364110c669f0da71d6ad957b1"],["/page/9/index.html","99682859a9a205e4bcc9ca4119832b40"],["/sw-register.js","0a924c3ff871e4b00127c7e3d73f66b0"],["/tags/10分作品/index.html","342a397a97c1fc84a3babbba731ec848"],["/tags/3分作品/index.html","a410eab81d6a3fd0f7841c33bc5cdc1d"],["/tags/4分作品/index.html","46e5a730ecc34ae279a025c68a9e15c4"],["/tags/5分作品/index.html","e986c97df74f4a0526e44efaa001f099"],["/tags/6分作品/index.html","c4b15dc8cefabdec3ffa1059e1e95466"],["/tags/6分作品/page/2/index.html","93baa5257f79b3daaa76bd31bcfd5c8b"],["/tags/6分作品/page/3/index.html","7b3ff77a5530bfecaa0f7251ccea13a6"],["/tags/7分作品/index.html","9c10efea993a58c3cd72d71dc7f8945c"],["/tags/7分作品/page/2/index.html","a39e6833f140bdbfbc75f683d4129908"],["/tags/7分作品/page/3/index.html","ae76fb4b7f587204e2d88b4ed4424e1d"],["/tags/7分作品/page/4/index.html","6eb6b2948cd5a2cae4814f00104b597f"],["/tags/8分作品/index.html","bf269fee322cfb3c43f37fd4e203df7e"],["/tags/8分作品/page/2/index.html","6dd6e7a8c899c7815d2cc1c3a680cc24"],["/tags/8分作品/page/3/index.html","d5e317b20b213d5ef925b95b8cdbe1c8"],["/tags/8分作品/page/4/index.html","305e42eb703a5c1e56e3996ab6832087"],["/tags/8分作品/page/5/index.html","241c629fddcf64304dc4a196106e2c59"],["/tags/9分作品/index.html","0af4f1853ef441c700541737250a9e20"],["/tags/index.html","0de836947cd0d54eb7b7b9040482da57"],["/tags/アボガド６/index.html","19d3cc1a7f2731c434d63f19198d27be"],["/tags/三秋縋/index.html","6284a5adaabf1189ef4f0d9e6fed358f"],["/tags/二宮敦人/index.html","34eae102184380410f476ac7b2f22ffc"],["/tags/住野夜/index.html","dd6b172980023703c153e3bfc70a8e3e"],["/tags/佐野徹夜/index.html","86b53ad586c904bf2326a426b78c0a81"],["/tags/動畫/index.html","7ee2e77eca4b6e61205ddc700c2ac712"],["/tags/動畫/page/2/index.html","d915574337b59fcbde945cd956cd6a62"],["/tags/動畫/page/3/index.html","f0793a573232508ae15c14e2f0b3e6ac"],["/tags/動畫/page/4/index.html","744c68cd2156bea59050772fa2d03abc"],["/tags/啞鳴/index.html","b3d0a474bf0a2a020fe1aafa402a9b0b"],["/tags/天澤夏月/index.html","32a8250c4ccfa8ffce88e32958142c61"],["/tags/學習/index.html","f0dfdf16a3e474d2c55efa9b51b10289"],["/tags/學習/page/2/index.html","d7f5a6466bf6be47ed21deb67ffc973d"],["/tags/宮崎駿/index.html","395437184fad05711367a66f271aae2e"],["/tags/小說/index.html","51de077774bf016e475fb738d64cca1c"],["/tags/小說/page/2/index.html","7075cf1c7abdc461723dff1ba34d05ec"],["/tags/小說/page/3/index.html","c9097dfe29559abc3fbc7d9c4c6bce54"],["/tags/小說/page/4/index.html","10c5dd17e0f9fd4464043111a0f1a499"],["/tags/小說/page/5/index.html","e63053fe7196510603ee3854cf4fa17f"],["/tags/小說/page/6/index.html","89e8aada0cb8cbd2219ccff340c594e0"],["/tags/小說/page/7/index.html","d52cba606adae24f0536a10140dd6a58"],["/tags/志茂文彥/index.html","9ef4813d06287e66cf1619f9d74a5550"],["/tags/斜線堂有紀/index.html","0d5d35a87554f03dd2f2922e68e3a976"],["/tags/漫畫/index.html","07f3db4d569826b5e47c3353c8d4343b"],["/tags/葦舟ナツ/index.html","335ba35427888c0f47fac6200784cfe7"],["/tags/藤萬留/index.html","50a3bdc430435bc8d9f021ca641afd6a"],["/tags/電影/index.html","37f9c9b4c7d6f47c8bfb1cefa1e50aa0"],["/tags/電影/page/2/index.html","c7e1004526cb3c21e08065124f546eea"]];
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
