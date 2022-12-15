/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","de060ee4d0de77958b7cfe2648bc5690"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","075758220e39ce43ce65e3b383c3da4a"],["/2019/12/25/Review/無法計算的青春/index.html","1320518ed945767e99c5437f80fc24f3"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","28254d680cea73869791f2fb248fdfd9"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","2e275cc0b6ef188abcab76b3c01a91a5"],["/2020/01/19/Review/下雨天，不上學/index.html","74c8181de8647b18ef55a3d7c71fe822"],["/2020/01/26/Review/三日間的幸福/index.html","dff350fe0b498468a5e6c00c942dbc01"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","9a1459dddef94684323b718fa8748a1e"],["/2020/02/09/Review/青春期超感應/index.html","44b626a123461e0388f96e5c3e6a1576"],["/2020/02/15/Review/又做了，相同的夢/index.html","f60b85f428f70e2371589ef4418228cb"],["/2020/02/22/Review/回憶當鋪/index.html","1701ba9f06142818e57ed991d3e10709"],["/2020/03/22/Review/不適合自殺的季節/index.html","0efdee273d1eaf26f1b6ced0d2e2efc4"],["/2020/04/26/Review/我們都無法成為大人/index.html","0eccf57bffa549950d0fcd2d52106ac2"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","045b488db7cae8e7008ffb717f78ac45"],["/2020/05/17/Review/人間失格/index.html","cc53429d3c1d80d4b355231f9e42c4f5"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","c2ca818c273024c7c9ad07b8b6678379"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","8e3f9427d657d8bf6660e0cfda7e68ce"],["/2020/08/01/Review/銀河鐵道之夜/index.html","c5b73c469c3640797f84549842a5c797"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","281702ac79b4d4487184a35d2f2e53cd"],["/2020/08/16/Review/15歲的恐怖分子/index.html","414e17161b18b766de918a255090d246"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","8d3d7c5d97fedcb1b0172778f5e208bc"],["/2020/09/13/Review/羅生門/index.html","fada930ef0480ca8abd0f534304cafe6"],["/2020/09/20/Review/闇夜的怪物/index.html","19bd7f5b839fb2d74b7d044d89b86d2a"],["/2020/09/27/Review/14歲，明日的課表/index.html","ebdbbaa91a9644f325c14b1c76644d59"],["/2020/10/04/Review/致十年後的你/index.html","422cdcb3656098b6ffa249e3fb90eedd"],["/2020/11/08/Review/滅絕之園/index.html","4c1290fb8f734555dbce3eb2f37c4c0a"],["/2020/11/15/Review/將愛拒於門外/index.html","a20c8efdfb8abdb5485a12887fac0fe2"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","c7738da32a37a440a6da7e07e218286f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","76f9834f41140d0cc1b69d77ff20edce"],["/2021/04/22/Review/道印/index.html","341ebe6b26e6b854efcae8504a44b053"],["/2021/05/03/Review/戀入膏肓/index.html","33e596f7d179aaac7ee6ca3f61a82799"],["/2021/05/10/Review/Dice/index.html","84ef6108eb12e2f351867e75008e28b7"],["/2021/05/15/Review/魔女之旅/index.html","e0b9ebbea95f80bb90c864b5b67f9555"],["/2021/05/28/Review/戀愛寄生蟲/index.html","a15d8116665d4818a641bcae89ffd88b"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","050f70d363fb2021e4852df8a6977eca"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","1a60f3b0c47af1833c7f01d2cd3039ba"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8223b47e0089f41379a5ad5556be68ab"],["/2021/06/05/Review/流浪的月/index.html","d125e8ee88ebbaae5d1cb1c0a46df646"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","6731f5a01c99e6bf12b89c4ab6f69a29"],["/2021/06/13/Review/第一人稱單數/index.html","931c5e6552ae7ac32169acb3cedeae5c"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","11fe5227a22e25148327617b37811c09"],["/2021/06/16/Review/願你幸福/index.html","ead29004dec41f90b6f9bfc643bf4468"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","ea1b7db2634602e46ce6476e5286befa"],["/2021/06/21/Review/神隱少女/index.html","e54d000ef415270022eabaf2d6daa823"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","79af9e661cb5445a24d7c21620113538"],["/2021/06/23/Review/天空之城/index.html","52bbeda61e891ce47853d3c3c49008e0"],["/2021/06/24/Review/魔女宅急便/index.html","4d6cad8b38ccaad253bafe76f02da9d9"],["/2021/06/25/Review/借物少女艾利緹/index.html","1ce9903334bbd9f126635b416a0f0916"],["/2021/06/26/Review/魔法公主/index.html","56c2eaf5f4b59a51d29f5e9295cbf87a"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","fe30fca47121d3cdb2df5680b232f874"],["/2021/07/04/Review/飛雪與劍/index.html","65736d41f0e6a3d21429ef3d61a1f14e"],["/2021/07/09/Review/地球防衛少年/index.html","94e80999b6d2a329d73fa61fb02b7302"],["/2021/07/12/Review/Angel Beats!/index.html","22c037c637a835278c8c00059e491e4c"],["/2021/07/13/Review/Clannad/index.html","ee3d0246a2bb840457b417f8884c1544"],["/2021/07/15/Review/AIR/index.html","ac37706e26a9f6a9aa3de33f3acc4e43"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","bfde2eda50d1680309e49523bcf98490"],["/2021/07/15/Review/螢火之森/index.html","a34b3bbdbc2135bf97357eb6229ff037"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","288299830584e0a5d1cab9b8a1fb4250"],["/2021/07/17/Review/奇蛋物語/index.html","9e358bb268443a930b15696232056f0e"],["/2021/07/18/Review/Vivy/index.html","c8d44dc3f67351a841baf0658ca013bc"],["/2021/07/18/Review/請妳消失吧/index.html","41604fd4379b85c987f47c36bc52f0bc"],["/2021/07/19/Review/漣漪的夜晚/index.html","9995189e4e3d0cbc90fe1b157e5d8b84"],["/2021/07/20/Review/月色真美/index.html","9d78eb1f2646abdc52ee6a2ec13f11a6"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","6079bd8d92a6efbe62daa7a2e1a26e50"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","fa30fde450eead6441dae720b0cfefbe"],["/2021/07/22/Review/罪惡王冠/index.html","59572b1a6c04fb548e8e5edb93a977fe"],["/2021/07/23/Review/弱角友崎同學/index.html","5abb14e1550f1e6db7434fbe1c96d522"],["/2021/07/23/Review/惡之教程/index.html","8cfaeb24ddc8b467cae3061d09235594"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","f16f936c3a28ddecc326a8294478b0d4"],["/2021/07/25/Review/魔王勇者/index.html","5b4f5d7749a590d77ad7a7ec503c9b58"],["/2021/07/27/Review/一年A班的怪物/index.html","c031c5584b2e68cbf5d8318d80185149"],["/2021/07/27/Review/奇巧計程車/index.html","75d21820e38c10f0dcdd9f8d90d3b733"],["/2021/07/27/Review/專情的碧池學妹/index.html","57ca4d2580258e033225ac69548e5fde"],["/2021/07/29/Review/只有我不存在的城市/index.html","8f6af0391ea187ce0bb7bf66cf96c547"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","88b5e6ed6a054d1f1ef3a357ebb522bf"],["/2021/07/30/Review/可塑性記憶/index.html","878599136d67ca649cf608b626d6cac1"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","f5201501fec2b165adbe65b0220200aa"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","df9d189dcaebfbf64a4a5bd91e55423d"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","e406d449e9052f7bd0c908fd8b23fefb"],["/2021/08/25/Review/清戀/index.html","9bf3669a91098aee4a87e93da1deb562"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","ccb4e36a91f04a2616cf6dfdf2ed8f55"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","42dd9dbde9deb1177f7326e0ccc162e4"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","769f599bbba6b36e4acb09f631361cc3"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","ba5539347a7e191f8ea0a252442e401a"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","eaf98a744f8bd8df64949e438982a6b5"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","e9a012165cb31dbb42d81c9bf1bebd12"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","2c425b8490b2d28e99c4707787e75ead"],["/2021/10/16/Review/龍與雀斑公主/index.html","35e4674495224304420fd17095495f87"],["/2021/10/19/Review/孤狼不想開後宮/index.html","d9386dffd62af3891fc0c5f7c65935ab"],["/2021/11/13/Review/徹夜之歌/index.html","31df8adb92c85bd027249406eb660f3a"],["/2021/11/24/Review/武煉巔峰/index.html","7f3902498e224ee082b2b3353139cf2b"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","06376ec51893c7779f08e6edea6a07cf"],["/2022/01/28/Review/神醫凰后/index.html","5f7a7b2d4d1017e09421f9f39c96932e"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","7c94fe8ff43d7d48d02bf3945a932756"],["/2022/02/13/Review/夏日幽靈/index.html","b250451c488f0cfccdf33c5a867d6d93"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","c42e57278c0f30d1f463584a584705aa"],["/2022/02/26/Review/賽馬娘/index.html","3c0c5014624454337db7996e2de98e28"],["/2022/02/27/Review/大欺詐師/index.html","d4a70f6b415e9362187aadfda0281700"],["/2022/02/28/Review/前輩有夠煩/index.html","18fb59448d6f24e0a06748ede07b9747"],["/2022/02/28/Review/碧藍之海/index.html","896a12d63fbcf3bc3718b67ae2d171c4"],["/2022/03/05/Review/落第騎士英雄譚/index.html","bbcdf929adeade2ec2ee72a4f334d5b3"],["/2022/03/06/Review/Another/index.html","cbcdffadedaebe4ad31cb1722d07716a"],["/2022/03/06/Review/入間同學入魔了/index.html","cb9e0bac4cd8d944da7016cb57fb68ba"],["/2022/03/18/Review/再見宣言/index.html","980008d741446adf14adcb57b27d1b65"],["/2022/03/23/Review/生若冬花的妳/index.html","178d024ffd0858c355c6e4c6abd0339d"],["/2022/03/25/Review/天之弱/index.html","cb81849a98156ae7ebc2a142d5a806d6"],["/2022/03/31/Review/滅了天道之後轉生/index.html","3f66324beb8af351b18c14abff192f9d"],["/2022/04/30/Review/泡泡/index.html","b9af3de214a31072c4123b262fcfe54e"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","0016d76d160539d49032601ceaaff03e"],["/2022/06/13/Review/偵探已經，死了/index.html","8a1a9b6841d420bfb76b0afb1b8298e3"],["/2022/06/14/Review/黑色子彈/index.html","5dbac28ad60e7f4448e1329387ccc5dc"],["/2022/06/15/Review/黑白來看守所/index.html","d8f3ceaa088daa1e97f64a81052ebb12"],["/2022/06/16/Review/虛構推理/index.html","afb5ffd6ae2c2723e854642f8881e7c5"],["/2022/06/17/Review/戀愛與謊言/index.html","aa78bdc8625a40dec887841aeb5e4fe1"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","028cc6b353c21fa6960b4b98b11848db"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","0b5344c6df64673e4f2fd19535d88c37"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","169765c65f5b5780939489fbe19570f2"],["/2022/07/03/Review/Hello World/index.html","6612842e1f5a0f9d774b20b99bb2568c"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a905aedf8cec63eec514ee748942ad4e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","45920b5b6ac42ce7be5965469acabd38"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","6e34f96ce75a0551cdae72ddfc1c4438"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","db2f62e48705520ff7ebfb135dd06f99"],["/2022/07/16/Japanese/動詞分類/index.html","ba886fd4122386c5c6afd4180e9522dc"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","5fc5b74be2082beec3254aab86b72f05"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","1417c3a763e4b7d95709eeafe305d090"],["/2022/07/17/Japanese/音便/index.html","998d8edbe52bbe7c21ef486fa919ce9a"],["/2022/07/18/Japanese/動詞 時態變化/index.html","a57e2edc289811840923eff0b3b03cec"],["/2022/07/19/Japanese/助詞用法整理1/index.html","5c5ced1c61f8e49e127c7bf5632137b3"],["/2022/07/26/Japanese/助詞用法整理2/index.html","9f148e6837e6b52f22fdc28886679b76"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","162adab9761e2dc664bec882268034ca"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","dd7a0798a93e0531cf13f11552eaf36d"],["/2022/07/30/Japanese/疑問詞/index.html","0d7a7e86a970dd08b5a63615394d5802"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3b0796697167d264c96f9ee3727275b1"],["/2022/08/02/Japanese/副詞整理/index.html","f629a8ce76fd8f1fa2d79d4f3241a4bc"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","029b64fa63ebfbfb87b1c027e53f1c6f"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","2ba783f37dc8b465b4729ab51704f387"],["/2022/11/22/Review/組長女兒與保姆/index.html","fb67c034254c44bfd1d5e58352ce8cc7"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","067aaa0f9466ab414351071efd1c62dc"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","f6cc0aa69443e58668fb60a13266bbb4"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","aaa92e3044342ae9e640847c5029f5e5"],["/404.html","f985ba43edbfb0f452eddc127b1550a6"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","1cac3ebcdd9c1742394c3de049c9c81d"],["/archives/2019/11/index.html","192c449bf2d579d5abbeca710229df4d"],["/archives/2019/12/index.html","a86eecc5e7dc8e8791ed537f4dc520ce"],["/archives/2019/index.html","5e564739a13e42bb4be6f0f293a4810b"],["/archives/2020/01/index.html","bf4a7620c50b6cb75c8a0cdbdce2f7a3"],["/archives/2020/02/index.html","9cfe028b7a022b502991f731aa16db7a"],["/archives/2020/03/index.html","146773ed3dda219409b876f3f0cc9da7"],["/archives/2020/04/index.html","d07d3ff52edf7765586a3b185976ff07"],["/archives/2020/05/index.html","61ac4837e1e0bd5fa8fe385be678ad36"],["/archives/2020/07/index.html","aa300cb863e88d2f7d4f818c35818e2e"],["/archives/2020/08/index.html","01624926e08877e5d8b8b7a9f554cba9"],["/archives/2020/09/index.html","f08e2dc9f9dade9bb59d93ea4fdf38e0"],["/archives/2020/10/index.html","b34e00e94e18d589f1abf5181f32b3f1"],["/archives/2020/11/index.html","b4e06370e14a81976c88c4c983e057ff"],["/archives/2020/12/index.html","d2bb06eb71310342eb48ae6d881528fe"],["/archives/2020/index.html","98118b5691c4b182ae9d8abf613792e6"],["/archives/2020/page/2/index.html","9004519173ebd746848a31f75780176d"],["/archives/2020/page/3/index.html","cb4a9815de7f94ba9aab9332acfd5d29"],["/archives/2021/04/index.html","fc34791a0458bd5fe4ae6412f0d6cf8f"],["/archives/2021/05/index.html","4f15184ee8c0009ebd0a14067f551e29"],["/archives/2021/06/index.html","0539b705bf27f06924b467efa3823b7b"],["/archives/2021/06/page/2/index.html","16e7781deeb46b3bf6f3b8d2a3b7fd39"],["/archives/2021/07/index.html","088f42c89effecfe8f0dff6f3e88a22d"],["/archives/2021/07/page/2/index.html","5072f5cdfe2b8207d3594da3e558b33f"],["/archives/2021/07/page/3/index.html","860fcf9c991088aa7bb4198d202465a6"],["/archives/2021/08/index.html","669a503e09c6c31ab071a84cfef4abdd"],["/archives/2021/09/index.html","574e1af702d3b581442397b0e283d840"],["/archives/2021/10/index.html","995b9bb1d187289af07e6ec5e2229f9b"],["/archives/2021/11/index.html","ecb5f05487a5bf26f401a91386ceed50"],["/archives/2021/12/index.html","b6945d82179e9835a07693c298ae3818"],["/archives/2021/index.html","22a68698dc12f9110afdea0ab2927ab7"],["/archives/2021/page/2/index.html","0cac9ab21ab186bf8f326f8e9849c39b"],["/archives/2021/page/3/index.html","661aa7a4ecc57c70067f94879009a37b"],["/archives/2021/page/4/index.html","8c4238b80a95bfbc12888e98bd29d5c7"],["/archives/2021/page/5/index.html","70657cff2a9f66f7b2e07ae46e6720d6"],["/archives/2021/page/6/index.html","0fb1cd163258bafbdc419bbf7ec775f4"],["/archives/2021/page/7/index.html","514f7877641bd34fa44449bfa9ff3945"],["/archives/2022/01/index.html","f3f19424f74fb5ddb5f0b20df130958d"],["/archives/2022/02/index.html","34b5e6b422dc5cfe10b1567aa20281ce"],["/archives/2022/03/index.html","40226119827d1559db452cc9ed5287c3"],["/archives/2022/04/index.html","a26779e5d054be02abc01d002a1ff873"],["/archives/2022/05/index.html","7a00b5f80e8e2acd58738b5eb163752f"],["/archives/2022/06/index.html","d1386178da9255a59326be68a2468d24"],["/archives/2022/07/index.html","1ca93950b57f92928be60175a06b14be"],["/archives/2022/07/page/2/index.html","17ff6d191b93da42633f0289c61fc07f"],["/archives/2022/08/index.html","1f6d18b1c78dbcb67478fc59d343b7d5"],["/archives/2022/11/index.html","ae080feaaffde43eec935beae3884532"],["/archives/2022/12/index.html","77dcbbfda1a5080023af65be3293d13c"],["/archives/2022/index.html","49b41a68c3dc6054e1301eabda0f9fce"],["/archives/2022/page/2/index.html","70c91e846b964ec594baf0cdd58378ce"],["/archives/2022/page/3/index.html","5f3928884937eff42e469aed39c8d1fb"],["/archives/2022/page/4/index.html","d04de6cf0fb025fe8eb4a8b631433285"],["/archives/2022/page/5/index.html","e4260530bf816bae36751125e64c7fff"],["/archives/index.html","d477a7821fc845aa7bef6a7af7f5d889"],["/archives/page/10/index.html","5c73dc03a777d52579054edb900a231c"],["/archives/page/11/index.html","c77f8ad8fd3c50a16ece1be6821be77d"],["/archives/page/12/index.html","23d4c1beea2b3d9897f73af3ed738559"],["/archives/page/13/index.html","85948ea07b4be59a7bbd96de87af5af2"],["/archives/page/14/index.html","4aba1a47ecb3b2f36a581421f05aaf7e"],["/archives/page/15/index.html","6045aa3d613a043ae7aacb91e86c81a4"],["/archives/page/2/index.html","dacd4a10ffea4c49b759e7c4ee2eb77b"],["/archives/page/3/index.html","830c0d44590b28e8ffbba434cde6d1e6"],["/archives/page/4/index.html","4fdab0a8766aaee6e035c005210a6795"],["/archives/page/5/index.html","123301a27daa68b8aca4deeb6f7920f4"],["/archives/page/6/index.html","5a8a5493793c557f13d1ac6a9ba57a35"],["/archives/page/7/index.html","fbdf0a0b578f4d1b36ce39d6dfb7189c"],["/archives/page/8/index.html","b1455bbe51a9d39a1ee434ea3094c5a2"],["/archives/page/9/index.html","a0dd8bd1accf7f5548d6b992b2cc04c6"],["/categories/Programming/index.html","6c2403b79e6f2e455c9bc45502a24ab2"],["/categories/Review/index.html","0f12321212ebac27f06fd97877123f8a"],["/categories/Review/page/10/index.html","59feb79893d17eb3e6703fb91f486058"],["/categories/Review/page/11/index.html","f3aa2dc3755c066174a94771b6b2457c"],["/categories/Review/page/12/index.html","e7f9a95025b3b5c7714ee646a6d0b094"],["/categories/Review/page/13/index.html","fd6016de77646d375ec2db258d5dc5e2"],["/categories/Review/page/2/index.html","aa415ba8621cf96a405e1bdca1f67c45"],["/categories/Review/page/3/index.html","b45cfcadc940d4e65c5e8baab6036a2e"],["/categories/Review/page/4/index.html","4287910563ce01305a9b6abb6df43aef"],["/categories/Review/page/5/index.html","5d471c2112b1633ef6e586416cbb366e"],["/categories/Review/page/6/index.html","ea22737d6bbd572d925d88d16e79f43d"],["/categories/Review/page/7/index.html","ab953ff519e89d955ed4133c138c95cd"],["/categories/Review/page/8/index.html","85fdf1a6302f886270185838b304ed21"],["/categories/Review/page/9/index.html","cf843048eee943b4645d4365f0af93c2"],["/categories/index.html","577a06813dad29b6cd7a41da605020af"],["/categories/日本語/index.html","c7f6def05424143ce9c71bd70200d593"],["/categories/日本語/page/2/index.html","c7c5106be59f56ad1334a2d858ef9709"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2b0e32b7113ae6e7c570dd2af4c14f4a"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","9e9c414dc1be8593b06595f416e7ef82"],["/page/10/index.html","32941bbf58fb7b6af26d1fd9b6ddc8fe"],["/page/11/index.html","c195ccf5a687b3be470c24f09867b8e2"],["/page/12/index.html","5acd390193d35bbc5ba40cf5763c5f0a"],["/page/13/index.html","ff10beaef33409f86b67bb5808a95dab"],["/page/14/index.html","fedb42800f1feda7e93b46b1e1edddbd"],["/page/15/index.html","c5788ed1585759bfe49cd5a0cc8eff2a"],["/page/2/index.html","6acaa157a54d6fa2c0edf28e4601bcf1"],["/page/3/index.html","2627839f286d00d59432cd77ba81bbc5"],["/page/4/index.html","f1b2b60351577ae865dc3e3dfe656fe4"],["/page/5/index.html","b9d07f7b1bdc777d8749169064298d82"],["/page/6/index.html","ab309561a86333e6b47d9ff763ae3734"],["/page/7/index.html","6f29128ad7f93bc7fef5b4034dffcd12"],["/page/8/index.html","c5adb3784514495fbaf9271a54ce1488"],["/page/9/index.html","bb01b4ce7b3ade52c097d2078dd84c6d"],["/sw-register.js","2686c361e90c73df0d4a70dddd591af2"],["/tags/10分作品/index.html","5c50894371a78de39d0e683ef16b9251"],["/tags/3分作品/index.html","a69316d1a882f6dfb011fcd667f5ed01"],["/tags/4分作品/index.html","4fc7868ad3ec3857815eb62ff8f4ac9a"],["/tags/5分作品/index.html","30acd581a6057def8a63451ae0c2f7a1"],["/tags/6分作品/index.html","168f8088d014a0cd98ee1d41a3a3ea4c"],["/tags/6分作品/page/2/index.html","2ceefd680971b448bdaf9ab77d3afd1a"],["/tags/6分作品/page/3/index.html","aec0a7a1ccf99200f3a3fb7aa573dd2d"],["/tags/7分作品/index.html","f33d4e0d185d2218819ab38c2aafb825"],["/tags/7分作品/page/2/index.html","e49fd7f26a1e201e47018ff5518f72da"],["/tags/7分作品/page/3/index.html","30719bdf1c7c5ff4a3630062f3a0b574"],["/tags/7分作品/page/4/index.html","a79a710bf9272eef845a73d05827988f"],["/tags/8分作品/index.html","eb6955df29a66472e5e1e0c8a2354a57"],["/tags/8分作品/page/2/index.html","c4373d2d099689cf1425e696210a3b46"],["/tags/8分作品/page/3/index.html","5f01cfbab6923b2321200cd891f10d10"],["/tags/8分作品/page/4/index.html","1b5fdd42a239e44c51b1b358e46afe29"],["/tags/8分作品/page/5/index.html","b38753e0c40d3763ffec3fd8ce0eab95"],["/tags/9分作品/index.html","447ed9b5da9cb0bab904a013da0c7fc2"],["/tags/N5難度/index.html","c49fcd006864ad750107095eb567c390"],["/tags/N5難度/page/2/index.html","cbb55779a7a9edb72481c4bca442a573"],["/tags/index.html","b601e23be1fb259aa24df0bb1fb04428"],["/tags/アボガド６/index.html","6909b579cbb0d31b5503cbcc050ffc47"],["/tags/三秋縋/index.html","329d7e14b9adbf85bee85255de516d9b"],["/tags/中國武俠/index.html","fd09a125f70688ad12603261c91bc8bf"],["/tags/中國言情/index.html","dbe6fbe1c71c8dba26e35f7147dbcd8e"],["/tags/二宮敦人/index.html","b1f8764c205166472ee538342afe96ca"],["/tags/人性/index.html","8424c3c7b62908795cf2f161a9c81fe8"],["/tags/人際/index.html","943dfc04cbb7726d91405913b96a2e93"],["/tags/住野夜/index.html","36994c4c894777e73133819728450ce8"],["/tags/佐野徹夜/index.html","3e87e2be040b5d698e5ef76ddba57806"],["/tags/努力/index.html","5d2face54a24b180c3210414e050b79f"],["/tags/動畫/index.html","360b2513fd93f1dde87bd03193bf27cd"],["/tags/動畫/page/2/index.html","7c182644a3d76c5ad43c484b8a2ff20c"],["/tags/動畫/page/3/index.html","9ef0ba660abf50fb6c3d5949b403e628"],["/tags/動畫/page/4/index.html","cb829f5060dbdaca212c9b7422890a00"],["/tags/原諒/index.html","fe73ac61aa0cc9c8a2cd5805a50cacec"],["/tags/反烏托邦/index.html","55bdf18e9741d543301a8368570f8da5"],["/tags/啞鳴/index.html","ebdd4c98b206aaadbe6742f502731b94"],["/tags/喜劇/index.html","f3b878b47a9a599285d0c248176c7170"],["/tags/夢想/index.html","dc61da2debeca7b38fa63a7b0c9d04c9"],["/tags/天澤夏月/index.html","d14565efa550d9c4d08fab1fff6348cc"],["/tags/學習/index.html","9faf13d04fefa7c91e747a29edd9c345"],["/tags/學習/page/2/index.html","37f62ca08bf451ddd0b750c6d1934480"],["/tags/宮崎駿/index.html","4d428ec492a3f195cc23546641bad84e"],["/tags/小說/index.html","8d4d5aba3e360124aba2543b5ac005a9"],["/tags/小說/page/2/index.html","a2a77ea98c0400e6b6b7562d3dc690b5"],["/tags/小說/page/3/index.html","9daf1215519de432cd875930619256cb"],["/tags/小說/page/4/index.html","bb1f756e95df635cad9d318b3417fc6d"],["/tags/小說/page/5/index.html","29bce30d60653f121933ffc6525e051b"],["/tags/小說/page/6/index.html","eb452c81e6a33b464a8a11baefd47cb2"],["/tags/小說/page/7/index.html","1edae536d4e4bb3628f7ea1c06873caa"],["/tags/平淡生活/index.html","d48b30d0e90472bf20f1e480cc0d4c32"],["/tags/幸福/index.html","e5af7b7d252ee95ea95f972ecd84ae2c"],["/tags/志茂文彥/index.html","b13cec077a01ed3d53ab38cdff475f52"],["/tags/愛情/index.html","59bb93a88eef397f77fe49c6b6558abe"],["/tags/愛情/page/2/index.html","b9eec1792d3dadb9e8f9a1963aa9141e"],["/tags/愛情/page/3/index.html","11fc0232a0c9f1cc0230349958f9b845"],["/tags/感動/index.html","843e32507f86fdf1be18315270bd50d8"],["/tags/懸疑/index.html","3cd53e7f405aab4a635a4e81988fef3c"],["/tags/懸疑科幻/index.html","988a92e786d4ddc17517c2dee746631b"],["/tags/戀愛/index.html","7e1153abc72c8148881e628924f835ae"],["/tags/成長/index.html","8b03708a5240caea4c4d6ac33c3e0dc7"],["/tags/成長/page/2/index.html","c09973c02ccfe3df91dbbcf24d2fcb75"],["/tags/戰爭/index.html","8e6544b63a5908fdebe2478cde456278"],["/tags/推理/index.html","0acb346a70a5e5978e41654c14ea85a7"],["/tags/搞笑/index.html","bac4b2c18d691cbd62c8c22421c65757"],["/tags/救贖/index.html","b12bf9405704a2596455a6a09756e352"],["/tags/斜線堂有紀/index.html","62f82d964c0f06e06b0b17f2ae978925"],["/tags/日常/index.html","c63cea5a271de4e3fec34897885837b3"],["/tags/末日/index.html","bb8a8e1610ebc837a9bf34ed9e35caa3"],["/tags/校園/index.html","845b74ba8e4015be711d78f888086f8a"],["/tags/武俠/index.html","68a8f7205bf3c3e7fa0111459cc0e3b8"],["/tags/武俠言情/index.html","6c4ccbce2b61ada17694a079c094c9f0"],["/tags/漫畫/index.html","b78f4abb11995a97c7384d98d071ef04"],["/tags/生命/index.html","a38fbed047dda3d620436af458c2fd95"],["/tags/生命/page/2/index.html","ba127d834eb9db40da7be7457cb06b2e"],["/tags/短篇/index.html","d6b14b33facdc2f70ee2c321e3843871"],["/tags/社會/index.html","560e5562744e2e86407f8abd3b364f9c"],["/tags/科幻/index.html","cf564cb0ce99382fc124b30379d93f90"],["/tags/童話/index.html","ab0f4bc5d5e73e8447a4ef0cb20736ff"],["/tags/競爭/index.html","c786a13a0505e76fd161c8a71be5a312"],["/tags/自我/index.html","1b3a4b057ac2c396e61f26af1553d687"],["/tags/自我認知/index.html","da1381148609d7c266c7262a2426881f"],["/tags/葦舟ナツ/index.html","4ff006cb4f5ba2aafa212b978f591356"],["/tags/藤萬留/index.html","afa690928e8add2e2f8f3b494aa6d603"],["/tags/親情/index.html","6b758ee0c97a5b7507c5194b8964b40d"],["/tags/雜項/index.html","1c43e8ea29fb1a3d10255451ab1b36a1"],["/tags/電影/index.html","78cffe6b1e43d5376f01a4d5a0e2d616"],["/tags/電影/page/2/index.html","10ae66bdd9e556ab4f4eb559ebc1e293"],["/tags/霸凌/index.html","e9b4b653dc90cdea6e445a35897fb755"],["/tags/青春/index.html","e9d952117b54f16c026462d23d4067b0"]];
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
