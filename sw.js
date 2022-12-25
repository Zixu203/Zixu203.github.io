/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","31cebc0030ab69a1dfad42fb2682dd9b"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","359f3b4181e7bbdd9f2e9aa835a94780"],["/2019/12/25/Review/無法計算的青春/index.html","50cb4745a9a84688394e521462ca9097"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","a1b313ae503aba9d9a7085d3a9af285f"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","e8f772088f43a637887058bd78db45ef"],["/2020/01/19/Review/下雨天，不上學/index.html","7c0ac055dabd438156daae6a8afe74a3"],["/2020/01/26/Review/三日間的幸福/index.html","363916bf4c283afe8b09ceabf2a03e4d"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","f52237a86cb76a16bb1eabb2a712c43b"],["/2020/02/09/Review/青春期超感應/index.html","ae6c4391006ac1080c06fd52a56d15e5"],["/2020/02/15/Review/又做了，相同的夢/index.html","693c4f810b6df61f5f05a3929b9bae14"],["/2020/02/22/Review/回憶當鋪/index.html","029d52b9ed0e634845b8b3f65d8c8b91"],["/2020/03/22/Review/不適合自殺的季節/index.html","684512008e1f6b9a5c7d6550e4c85286"],["/2020/04/26/Review/我們都無法成為大人/index.html","cc470bef53a8b8be3c5d0581165d5ac8"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","442f6ffc53bd9bac00c174c6092ed3d7"],["/2020/05/17/Review/人間失格/index.html","0443c2fad23d33f314e0d3292e328e05"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","3e7eac87dfb20afc76c24c15e8a35ec1"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","e9a49b3c0317608857d1f75f0b232362"],["/2020/08/01/Review/銀河鐵道之夜/index.html","d11bf5734762095df0ccc37e93397d5b"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","3f8d516aef3cce0af869852cb82a9ee3"],["/2020/08/16/Review/15歲的恐怖分子/index.html","13fcdb0bb95384d16f7dc1f298b71f33"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","fbde934e108c5c614c6447de56207c00"],["/2020/09/13/Review/羅生門/index.html","c770e838222f1f3bdb83d88d11f94c25"],["/2020/09/20/Review/闇夜的怪物/index.html","903993ccfa680b24b5d44b9972968a22"],["/2020/09/27/Review/14歲，明日的課表/index.html","9e7bb3678b88344ff5ef988f7b84f268"],["/2020/10/04/Review/致十年後的你/index.html","32e194ab835e5b7cac81fbcab637dc1b"],["/2020/11/08/Review/滅絕之園/index.html","fba58a77d8bf37a960dfc505fcd5169f"],["/2020/11/15/Review/將愛拒於門外/index.html","ca461af4d70d11463071bf00066b4154"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","258249db9904d087b22d49ae5060a987"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","e6f8bd4c7247c44ac0aa819b647529d1"],["/2021/04/22/Review/道印/index.html","63d3b7e9032ddc62a15bf845dfeeab91"],["/2021/05/03/Review/戀入膏肓/index.html","6d9cd2fe1a36e7c54ce1e8a0d235e2d6"],["/2021/05/10/Review/Dice/index.html","2569502e1015d3cebdf12e34175ebc5f"],["/2021/05/15/Review/魔女之旅/index.html","83c2ec46b01a5a59fbe3dc5d50bc32df"],["/2021/05/28/Review/戀愛寄生蟲/index.html","63107e36b0f8b0fda102e3c95a572e45"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","cc6c8046d9341af7633de59dad7bc1ae"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","df5d1cde5ba178452b88e248aa940059"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","61240cb815c482859256a257e902dcaf"],["/2021/06/05/Review/流浪的月/index.html","1f7e223a5e91cd61ce82798092ea1a82"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","6a67e1c286e776f91c098011a7403a05"],["/2021/06/13/Review/第一人稱單數/index.html","a4cfe07ac70268ebd1782f4f4ca0af71"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","9e1677eef219c6daf78caf7bda9638e3"],["/2021/06/16/Review/願你幸福/index.html","1b1020143ffac124c06a6579d108a351"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","8440c6e83ab8775d0acc5af293a043c0"],["/2021/06/21/Review/神隱少女/index.html","60a76744da654a58b06233179cf0b6ce"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","3c491fc7323bea05d561849d0c21a3f3"],["/2021/06/23/Review/天空之城/index.html","5c79e5e780fa16ee5ba77d5eed06fe52"],["/2021/06/24/Review/魔女宅急便/index.html","26b46c5c6122ab9af62bb462f291bd68"],["/2021/06/25/Review/借物少女艾利緹/index.html","8280186c284ed721d11329c5e56ffa72"],["/2021/06/26/Review/魔法公主/index.html","840875364b8a6e8f25927794b2990538"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","91628c66c16015ec9531dbc41cee3621"],["/2021/07/04/Review/飛雪與劍/index.html","36bbabefcd8ea10bf799e9a96f4b43af"],["/2021/07/09/Review/地球防衛少年/index.html","51cbc9c7e94e9df972abf5a9caffe715"],["/2021/07/12/Review/Angel Beats!/index.html","d345791fb588b0bcbe04f50d667de9df"],["/2021/07/13/Review/Clannad/index.html","9476e154e5a38d27a7c113e4b73fdd76"],["/2021/07/15/Review/AIR/index.html","0f024cf490d94909e5e5f0716256016b"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","72278272428a0c7c54fe254936fcfccf"],["/2021/07/15/Review/螢火之森/index.html","f05dddcff9610b7cf4efb9092a87ad39"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","19ce2e7d22ebc5e203e097b98f31d5b8"],["/2021/07/17/Review/奇蛋物語/index.html","46998f7640ed8b4d111d536e774432f6"],["/2021/07/18/Review/Vivy/index.html","1947f4d40b1f4eaadba1fa0274de95b3"],["/2021/07/18/Review/請妳消失吧/index.html","1e837fd71ca6a5c0582224cb706c7b60"],["/2021/07/19/Review/漣漪的夜晚/index.html","c9c8bc703932ae2e1c2700fb049ad10f"],["/2021/07/20/Review/月色真美/index.html","bc6b87574524e4c691692c834ca20b6f"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","8b4d113db9df809750399255b3ff55fa"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","417edd419d7c51a0686d57bf363e08fd"],["/2021/07/22/Review/罪惡王冠/index.html","418429a5c27696e192f8434265ad0d78"],["/2021/07/23/Review/弱角友崎同學/index.html","d90afd41b6e98a7a287f54ec84e44cda"],["/2021/07/23/Review/惡之教程/index.html","f3abb8c3e8fdb3d933a54cab1a8c1e8f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3b33d4e81aa5f5581f6d1bbef1bc4f56"],["/2021/07/25/Review/魔王勇者/index.html","99d7cc52c9f156a79208250e6c6e28ed"],["/2021/07/27/Review/一年A班的怪物/index.html","1febd0a3ae122db01b447476ce7e26ad"],["/2021/07/27/Review/奇巧計程車/index.html","020b40663d6a13a2ca134ba381b334cf"],["/2021/07/27/Review/專情的碧池學妹/index.html","9638e6438c13735322e24a96f34a1930"],["/2021/07/29/Review/只有我不存在的城市/index.html","36da2d3295c118572fd202cb4d8f8a73"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","37a94dea8563cc2017c39dbc33994851"],["/2021/07/30/Review/可塑性記憶/index.html","6fa27ef8d17d7aabc476670801488760"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","e3e7f4a2860413e5496fcea4e16003b3"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","a08f229f88a60e9ce847a91c7e995765"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","ced94a10b6b05922231384c054e8d07a"],["/2021/08/25/Review/清戀/index.html","57beac2d312d2fb5982ccf3d97791424"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","43bb84548075a6eeb198be67236c9fea"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","ea954f52506100e8a6d1da3f12375dae"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ca5db7a5cbea8e537c7d91e8a9e3c775"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","939ba19310d12af6896586235433a32b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","6645dc1a3c4f69336e65f032f89b7bfe"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","a8866ed228b275a8dbc7e13b7a0e9a1d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","742e4a73a2d95a92b520988adb2fde91"],["/2021/10/16/Review/龍與雀斑公主/index.html","f1e2d80ac012245a5ae0310d0ac24351"],["/2021/10/19/Review/孤狼不想開後宮/index.html","5b603ff2499f6d28531b6c6fa2efb4de"],["/2021/11/13/Review/徹夜之歌/index.html","3668ca39fa5686f5a80869266e242103"],["/2021/11/24/Review/武煉巔峰/index.html","f7943e61a0da84ac9c8e19e26f3afb0c"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","a6fd855150426324824dd8cde87cd5af"],["/2022/01/28/Review/神醫凰后/index.html","e6e1731c9d112542abcf80bd1a13031d"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","882471dd4cb08cfa786d1e72fe5b8eeb"],["/2022/02/13/Review/夏日幽靈/index.html","c81e0e5021d6658e15a20d5e0fafe96c"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","7473d16270327297779873db3350c5d3"],["/2022/02/26/Review/賽馬娘/index.html","58bcb3238b9b4ed480378fbf39b8dffa"],["/2022/02/27/Review/大欺詐師/index.html","ef6789fa0e6612faa0d90c007b7fcf64"],["/2022/02/28/Review/前輩有夠煩/index.html","44799c78d8cc5eaf587d48495f75f220"],["/2022/02/28/Review/碧藍之海/index.html","650d4fa34bbcf0eef1e758436e1d3f9e"],["/2022/03/05/Review/落第騎士英雄譚/index.html","31f012b0d7b74551506bdc90bfdbb762"],["/2022/03/06/Review/Another/index.html","05ed7e00029be169633b8fc80ace1d1d"],["/2022/03/06/Review/入間同學入魔了/index.html","09f750b17a46116064ad95613f34811a"],["/2022/03/18/Review/再見宣言/index.html","1a72c4e5d0b7c1201fe9f2b11e8472bb"],["/2022/03/23/Review/生若冬花的妳/index.html","f290c6aa0fbe7ab2fbdc68f446a0aada"],["/2022/03/25/Review/天之弱/index.html","8af0448c9156a8165cc43c0dd3786217"],["/2022/03/31/Review/滅了天道之後轉生/index.html","fe86239855465dc5ef41f208abd6ee2f"],["/2022/04/30/Review/泡泡/index.html","4a4a93b1c044a0ca7da01666ef7cf10e"],["/2022/05/04/Programming/Dynamic Programming/index.html","6f08e700eb4d2b6f05a7fb2e64e87c92"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","179ceafb0c90425664119f5676188963"],["/2022/06/13/Review/偵探已經，死了/index.html","554f4a064a4cd2b2b2741ae3aa093bb0"],["/2022/06/14/Review/黑色子彈/index.html","547af354dd9357773e41f8f524e7dd49"],["/2022/06/15/Review/黑白來看守所/index.html","d240a9f61e6eb7fbe8c322dd61897eed"],["/2022/06/16/Review/虛構推理/index.html","46250211acebf7f3591fb3eda356f189"],["/2022/06/17/Review/戀愛與謊言/index.html","76cf0457fcea9fdc2d293beb66db7d21"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","3a976f739d059b372a2bbbd545a08090"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","b2d7f99a8a36d0dde62f4720e3e342a1"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","f95e8e1a742f2a6cefc00c92ca692173"],["/2022/07/03/Review/Hello World/index.html","9c6631bf87e5b5e93b771b4c03c165bf"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","0c2fd4f13f8bd15ca8e029c2eb67732a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","6af6c93da0740d706737de9c49e7c710"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","195e70ce4598f0ba4ea84eb6b463792a"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","1140a172fa701728419bfda91e4fca79"],["/2022/07/16/Japanese/動詞分類/index.html","a9b0ffbb63b285cf4399ee3856d81157"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","b80c54ae4d91fd90d459551ca465c18b"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","f40a145b4d1f1165b737e50000733b81"],["/2022/07/17/Japanese/音便/index.html","02c7391af4b654dfeea7a14ceabad5a0"],["/2022/07/18/Japanese/動詞 時態變化/index.html","601f02be81bb7318edd8ccb2c28a945b"],["/2022/07/19/Japanese/助詞用法整理1/index.html","994a5ac580794fea998771624379ed4c"],["/2022/07/26/Japanese/助詞用法整理2/index.html","6eefd95d818e08b3bfa4c59b93aa5711"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","34c8e1201c7d67a363b7f7bf310145a1"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","04fcad2e7b94f3c43a91882135b97b2a"],["/2022/07/30/Japanese/疑問詞/index.html","7ae26610ed971901f0bf28fd2f91f504"],["/2022/07/31/Japanese/助詞用法整理3/index.html","cfb341ff633df1070d60f7418454aab1"],["/2022/08/02/Japanese/副詞整理/index.html","ea130047a596aef01f300361cae28884"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","3dc049199f8c6fdc9997119a2664a33d"],["/2022/11/04/Programming/Data Structure/index.html","4a049ec2269a3302510fae49f867f224"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","07fc97eae31d2aaaa505e71a0ffa5a1e"],["/2022/11/22/Review/組長女兒與保姆/index.html","03e7da354a3e067441e4dfeaec1d42bd"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","ab679b45dee96101346013065c690fb0"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","dafb4553a296710df1dd58f1d778e5c7"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","75707ba9cbcbae8427deade60c11b3ed"],["/404.html","00b21ded469360b55c11ab4dcb72aaef"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0542299b2ad900068c0dfa583c72e8c1"],["/archives/2019/11/index.html","f94cbb9bee9262a1903b0b7d9e9cf2c5"],["/archives/2019/12/index.html","7883d59d078ea7a92d8de6c31532c099"],["/archives/2019/index.html","7ac30a5968d447908b37ddcc1b1d538b"],["/archives/2020/01/index.html","1025c35612c793c62e4717c07d63eea2"],["/archives/2020/02/index.html","98075d13923f7aa645e0c0d7f976d540"],["/archives/2020/03/index.html","9abf6617b8519bfce063ac43dfcf514a"],["/archives/2020/04/index.html","e7bb5d2dcdca2ca5eabc8569e6f3c274"],["/archives/2020/05/index.html","622623e15c450c6461e5ef116354b23d"],["/archives/2020/07/index.html","0359d0b8f9135189b7a0825a962f45e2"],["/archives/2020/08/index.html","8109fad980453eda1ab493b7c0e21cb5"],["/archives/2020/09/index.html","8d341bd2ab39bdcccc684987af889d31"],["/archives/2020/10/index.html","211e076632ac7a89dd2778a43d2d1123"],["/archives/2020/11/index.html","257c0b00d0564af389bc9fbe01d27547"],["/archives/2020/12/index.html","4ec821f612854cebe857517f55cfe872"],["/archives/2020/index.html","aca0be6bec27da09d3701feff2796bf1"],["/archives/2020/page/2/index.html","709f14e424a4a36b722d378b7595667f"],["/archives/2020/page/3/index.html","3e2f914805a6cb0f4e5636a2c4e80986"],["/archives/2021/04/index.html","0359bf1b0934dd3248247a739c0aadc1"],["/archives/2021/05/index.html","0aad018936880d6df4a2de2c5f118197"],["/archives/2021/06/index.html","769667d1f30f98ca11b5cac311810910"],["/archives/2021/06/page/2/index.html","9135d7ddaff0da0c763518c3c720bce7"],["/archives/2021/07/index.html","dbe786a092bf84b51ac3f3063bfd70c4"],["/archives/2021/07/page/2/index.html","9e531668676db94b9ba4dbe4c72e5929"],["/archives/2021/07/page/3/index.html","725ea42d63133a557793cddcf149792c"],["/archives/2021/08/index.html","db93a5f92ef37b25d3082099077d97b7"],["/archives/2021/09/index.html","c1d78cac0e5d3b3faa4cca578e0e1a57"],["/archives/2021/10/index.html","191dff9ff5102618624c56730eaa4f6b"],["/archives/2021/11/index.html","687bd7a549992caf1c642007160ddce9"],["/archives/2021/12/index.html","bce18a7f48897f7d4324953d0048fc90"],["/archives/2021/index.html","6e3d4d8469d40692437f36973c0fa2de"],["/archives/2021/page/2/index.html","08b9c0116a30a522501051bc5933cf77"],["/archives/2021/page/3/index.html","758e6834485decce8b9bd14db8a3861b"],["/archives/2021/page/4/index.html","b54629ad5be6547feb47604664fd40d2"],["/archives/2021/page/5/index.html","677ad367867f31875ac753f7fac86ea6"],["/archives/2021/page/6/index.html","5083546ccbc486621661eb88b35411d6"],["/archives/2021/page/7/index.html","a07c35250e50031bbe5d3f1212f25015"],["/archives/2022/01/index.html","2cebd1f2a18922807daa8a2027479451"],["/archives/2022/02/index.html","685f513b9ab2c83fac754aa426670815"],["/archives/2022/03/index.html","1c38d4b265f9314fec08ef5112278e43"],["/archives/2022/04/index.html","74be8af5bd31330fe2e39fa7efd93f9c"],["/archives/2022/05/index.html","1a35f858a8afbf6e051d17e56e7a98b4"],["/archives/2022/06/index.html","865e5a7f29e32773828cb63e345596ae"],["/archives/2022/07/index.html","3af44c47cda8fe3bfbb49179ad537f83"],["/archives/2022/07/page/2/index.html","27ca45636ea2356f7cd603526435aa4e"],["/archives/2022/08/index.html","cd4f0ee96f47decc506aefa7da2185d9"],["/archives/2022/11/index.html","316a3b72cf6a20c42bc611caa586e65f"],["/archives/2022/12/index.html","407e658a0a54d93b5f016af92785fb53"],["/archives/2022/index.html","ce289bb1c94d70bbffb7cee46b588da5"],["/archives/2022/page/2/index.html","1c50b5ef380c8a1433aaf2e946ee1f05"],["/archives/2022/page/3/index.html","1c3c1a2bdd9e7f453eb69d112ea48cc5"],["/archives/2022/page/4/index.html","b752f91b5cef4bdc1fe3a3380f9b250f"],["/archives/2022/page/5/index.html","795b4b2d8341acffbcddeca5ef6a4d01"],["/archives/index.html","441b7976cbab8b92ab2fb0b3749404c5"],["/archives/page/10/index.html","f5bffb9d5cc7f13817d4a45482afb88c"],["/archives/page/11/index.html","fcb4df097cf86560c5540d34439b2317"],["/archives/page/12/index.html","77150abc13d3e0e6a1c850ffb4363fd6"],["/archives/page/13/index.html","7a8c6a8af3001077b1757b07a561979b"],["/archives/page/14/index.html","e2e9e9f1786df62d0ab32a20bc45dd5a"],["/archives/page/15/index.html","2e65fa176eb3f8fa2dc0fa800867522d"],["/archives/page/2/index.html","a6a8a855bb5e5a98cd8b67be0fd0f019"],["/archives/page/3/index.html","27a776647555204db9dda4e76b7aede4"],["/archives/page/4/index.html","cd7290d5da8f40608b0e3308f4a27564"],["/archives/page/5/index.html","b5095b9d17f78fcf2a73018d9f2f4619"],["/archives/page/6/index.html","7155eec3326ecd56603ed5c6b8b13c2b"],["/archives/page/7/index.html","c0d7be0a9d042357b251ee514174c051"],["/archives/page/8/index.html","00a0c5d4ce7fa4fe3c407f7bf0263601"],["/archives/page/9/index.html","d986270b797bfdb8dde3511180cc23ae"],["/categories/Programming/index.html","5d1961180763279d0cf0f9c7819b6176"],["/categories/Review/index.html","71c078eeabae15c5f8093d062d5c4627"],["/categories/Review/page/10/index.html","2acac3efc9cfbfc1bb118d2d5b61be21"],["/categories/Review/page/11/index.html","0802e466195516a5b498b2e8c8b6ba10"],["/categories/Review/page/12/index.html","16331bcb9a287d373021f547753ce079"],["/categories/Review/page/13/index.html","a000cb06b214022d384c4e3bbe586e67"],["/categories/Review/page/2/index.html","d2b9e88a908a1f48761876d999f05e87"],["/categories/Review/page/3/index.html","922afda764b8b467ba857cfdbfd54fd8"],["/categories/Review/page/4/index.html","1f1307ba67a9ee524400274558fe5537"],["/categories/Review/page/5/index.html","f57352720e0df089937edd7574ddc241"],["/categories/Review/page/6/index.html","3312ff4fb8967d43df72d6e0b1000a55"],["/categories/Review/page/7/index.html","51c1d42b46643013123bd5242fa7e641"],["/categories/Review/page/8/index.html","f26c85e46c03b8bcc7cde805e9afb78e"],["/categories/Review/page/9/index.html","2fcee8d02d2801142eb056ab2b7a0f45"],["/categories/index.html","a066d2e839d797180294691367f479a1"],["/categories/日本語/index.html","8b6b08e6e16161d2c447ad5a6475d500"],["/categories/日本語/page/2/index.html","7e6a093c32e169d7c490c43b5223ddb8"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","75bb0f2f744f1f57914ed7d49022baeb"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","bbc5e3aa26e4ea7ffc531eea871d3d65"],["/page/10/index.html","02276e2610b32a8514298584883f4aec"],["/page/11/index.html","8dbf9d13c5a183d0ea1beb8e9549566a"],["/page/12/index.html","aa67300c65ec131bf7308c2e4aebb4e6"],["/page/13/index.html","1294913cd0e805b3b1b25cc4bb3d058d"],["/page/14/index.html","5defa9506b3b8077e234b19c6fcc66ba"],["/page/15/index.html","2a7503bc68cd076e2b53d8abd05e765f"],["/page/2/index.html","1af0b4851120578cc089d38f38dbc85e"],["/page/3/index.html","82018696deb56ce1930dc7d69a1f1d9c"],["/page/4/index.html","18e24faa5b46629fa3fad177734785d5"],["/page/5/index.html","4f7b08c455abbbad8264d2ed930bcd10"],["/page/6/index.html","1bb3acc13a0b02be4b5898c5c9b8f05c"],["/page/7/index.html","da333dd127d4d2098b64e48ceba5dfd8"],["/page/8/index.html","a6c563096f1f2a92e2ebff1a47af6339"],["/page/9/index.html","3cf0ebc9d021f19fb29c0398e8cff7fc"],["/sw-register.js","21f18032d25841b75cb85e840702669f"],["/tags/10分作品/index.html","ad41eed5cee207bd66aa5bd0af751a1b"],["/tags/3分作品/index.html","a0b4541327f967216cd04f3031f63b2e"],["/tags/4分作品/index.html","ffe80e9b421cfde068a5e29f638fa19a"],["/tags/5分作品/index.html","21777ee881f05acee6e4c1d601d7379e"],["/tags/6分作品/index.html","a448b0dbcf3cbba1cc5f7aba4fa7a468"],["/tags/6分作品/page/2/index.html","d76fa98fa3cc1d02afba4509a1c7e6d5"],["/tags/6分作品/page/3/index.html","5bc39b6c3c2342d80520565f1da2d7f0"],["/tags/7分作品/index.html","c8c4b8c06fd5abffd017dcf73c5c0d6a"],["/tags/7分作品/page/2/index.html","9dc73f5c8bb1e50a1bfe39fda8f66987"],["/tags/7分作品/page/3/index.html","5ea27451404bb6e1846e4f8cd907bab2"],["/tags/7分作品/page/4/index.html","4ed2c5249594cfaf869ba9d8e77d4700"],["/tags/8分作品/index.html","67a62491e12f3bc75c5d7d8d03474962"],["/tags/8分作品/page/2/index.html","8365c5f83efe0bada2c36b57a8b043fd"],["/tags/8分作品/page/3/index.html","a38d1269c7dbe8ab5a1e8641c2ba34cc"],["/tags/8分作品/page/4/index.html","08274bf3f8cc1b3dddfa30120fa8c8ca"],["/tags/8分作品/page/5/index.html","937272d1f1c1dca8d0f49b140decafc7"],["/tags/9分作品/index.html","32362eeecf98ddcc8a9ff8c6eda31370"],["/tags/N5難度/index.html","4f7f6a09dbc10bffb4be15d45598e0c8"],["/tags/N5難度/page/2/index.html","e164c893143784b44e4acb8dc940fa6f"],["/tags/index.html","a87283695b6fa003f9e3eacab36fb569"],["/tags/アボガド６/index.html","2da2fb5a44fdcbcbeda5a3df3746a7e1"],["/tags/三秋縋/index.html","a4cf825f0dd9ed25b632fc3f847a96e4"],["/tags/中國武俠/index.html","aa2ce78fd903469f570025f82dcf990d"],["/tags/中國言情/index.html","37208ed3738e0615493fda3a92e0803b"],["/tags/二宮敦人/index.html","5d0c88b9392713c6b2db5bd38d53f583"],["/tags/人性/index.html","d75f9cf0ab270b9fd29659d2d523c8e6"],["/tags/人際/index.html","45d2ee0045a96229c310abdabb624e77"],["/tags/住野夜/index.html","7daca3c89906afdd4f589a851d62ecbd"],["/tags/佐野徹夜/index.html","65f716fde8fe345bb2e4d858b05defa2"],["/tags/努力/index.html","d599ea862f045da4237087e93eb652d2"],["/tags/動畫/index.html","b5a786c67805cecf68f1ab82a2001354"],["/tags/動畫/page/2/index.html","bc2ff8fc4b90111d53a17ea05457c67e"],["/tags/動畫/page/3/index.html","7bdb45c2fcb2641d45cf7c77da78e79d"],["/tags/動畫/page/4/index.html","352b55cf305b00a6422a71993a769fd8"],["/tags/原諒/index.html","548f7457e0bdc83b82d4b150775b54fd"],["/tags/反烏托邦/index.html","4e94168fa04b68b7811881cda8947efd"],["/tags/啞鳴/index.html","d155fede2c362e7c48662e4ff876a90a"],["/tags/喜劇/index.html","83ff3d6da17247ff74f68a4809ac033d"],["/tags/夢想/index.html","49432927bc19e50e766f186c92312b96"],["/tags/天澤夏月/index.html","d4ff6f01a61b3aa6d877662434b2c8cd"],["/tags/學習/index.html","55ca0ccffd75d342644762bb04ab99ca"],["/tags/學習/page/2/index.html","af5cb33f8f7daa432bb5615d1af85896"],["/tags/宮崎駿/index.html","361d1bf69f86c6824c6a5928f06b9d49"],["/tags/小說/index.html","0fb388944f42b0b1edeca337704de336"],["/tags/小說/page/2/index.html","088c1dfc4f3c7f1baa6ce141847a26b1"],["/tags/小說/page/3/index.html","1f68faad37fe5c32a5e995e1b97a3b2b"],["/tags/小說/page/4/index.html","edd95f3dfa63aaf7f2373c1f59ea889f"],["/tags/小說/page/5/index.html","ede71a076258e53fc0d7b06480cc6b53"],["/tags/小說/page/6/index.html","0eb2078fb984fe9fa113a6ac4da10120"],["/tags/小說/page/7/index.html","1894908eb35a2cf918c3ab45420031e7"],["/tags/平淡生活/index.html","c7cc0ac589cf2f6975d692e36a67d3f1"],["/tags/幸福/index.html","f872594c533e96688fbd32ad5431aa02"],["/tags/志茂文彥/index.html","fce9e63fb791e16166dea6f7c327ae05"],["/tags/愛情/index.html","7c6f031bbd02f1ba129be9b20f072951"],["/tags/愛情/page/2/index.html","d22c06ad88b752bb21633fd59cce6057"],["/tags/愛情/page/3/index.html","e284470ba2ee175490dd652aa078d9b6"],["/tags/感動/index.html","e5e9581aa705d943d1d6f18dca527d9f"],["/tags/懸疑/index.html","4f474314031870bf662b8baf09517520"],["/tags/懸疑科幻/index.html","bd8bbdad5218eec025b0484ce12f4a10"],["/tags/戀愛/index.html","6de777e5e601142c30a3716bcb17fcec"],["/tags/成長/index.html","0275501046f0aaf53f2cceb0a72ccbe3"],["/tags/成長/page/2/index.html","ed73de3441c364f30d6d2cd695c5edc2"],["/tags/戰爭/index.html","16167f8869fbbedb576456874ef0a9ae"],["/tags/推理/index.html","019209e2e446b4853a5b21b38d67765d"],["/tags/搞笑/index.html","d6d76e454ef96918d67498e10f7e4626"],["/tags/救贖/index.html","93f3f82d2d320869653c0ade9b1014eb"],["/tags/斜線堂有紀/index.html","063a62294d4787fcaf20db21f7872a16"],["/tags/日常/index.html","60ef7e35825911aadff92103b9a9a88d"],["/tags/末日/index.html","32cf1dc954da3c184b90afd7d46ce2cf"],["/tags/校園/index.html","738b9f564f1a1e4bd6eabc86e6f3dab2"],["/tags/武俠/index.html","49121baed82d1a008a7a110e7aa262bf"],["/tags/武俠言情/index.html","13635cd0a2ff34a6890fd94a742da4f2"],["/tags/漫畫/index.html","acbebdae0183eddd663df0b7e922b06a"],["/tags/生命/index.html","e14d236da87c75ce9c2a542bb1b32c70"],["/tags/生命/page/2/index.html","e85c863665e6f71820275c77fb0724ee"],["/tags/短篇/index.html","52236afc381efae36f6b6db000f79d5a"],["/tags/社會/index.html","a982f07eb669b0af46f7a14735247c96"],["/tags/科幻/index.html","e42dfb72d5fa6f57194aac9b59b7688a"],["/tags/童話/index.html","db5de43e861a3396243b9a30514f7a55"],["/tags/競爭/index.html","7815dd0e53338a2742284101a8a9636f"],["/tags/自我/index.html","036f54fcf44bede42d254d724efe1eb5"],["/tags/自我認知/index.html","c33c9751c15339c32a727382ac6baa5f"],["/tags/葦舟ナツ/index.html","ad4682c1d5e7e56dd25638a623bdff73"],["/tags/藤萬留/index.html","c2b13c1bddf4dadab61126e05958f3a7"],["/tags/親情/index.html","53f07a7f4077688f62439d1cf04c379e"],["/tags/雜項/index.html","eb9fe03b160d707b4148a67e348e3d4a"],["/tags/電影/index.html","0f2fc92630b8ce66f6dab4b9949bf630"],["/tags/電影/page/2/index.html","f624ab932be2123b058b594a0c80031f"],["/tags/霸凌/index.html","ef902388c5d533218c064586445b2719"],["/tags/青春/index.html","7f6baac4493adad5725669377b38eafb"]];
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
