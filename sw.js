/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","efbadddb3f24e079d32aac5b6544056d"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","18ca9a522cf5369827acb57d3abff371"],["/2019/12/25/Review/無法計算的青春/index.html","1fecef04719276a12cb1a488ed14036b"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","1894c95f03cbf9f9b71170bca96faef5"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","7ad26081b413022524072911a0708722"],["/2020/01/19/Review/下雨天，不上學/index.html","de8559434d56f21108a35f980bf31202"],["/2020/01/26/Review/三日間的幸福/index.html","b127eeae066f2b31c2abf07cdf3cb09a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","3158fcae9449e0b8602977a1d0d45cd8"],["/2020/02/09/Review/青春期超感應/index.html","0e334cb18e41ab8cc0996e1b618c8ae1"],["/2020/02/15/Review/又做了，相同的夢/index.html","178a6570288c108c32a26488f01b5551"],["/2020/02/22/Review/回憶當鋪/index.html","b6272f7124b8069e21b2d1fde5ffd1c1"],["/2020/03/22/Review/不適合自殺的季節/index.html","9c5dd3e31e71536f7fa1144f243cf1f9"],["/2020/04/26/Review/我們都無法成為大人/index.html","2d61d6b6aa5c8448f5ceb3c7607eaaab"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","992cbe652113e1606442dc1deba4eb8b"],["/2020/05/17/Review/人間失格/index.html","1d2a460857e940c3a8eccc06ace858ee"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","1643e5a06e7fd164dec46dd8ea6ccd52"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","c0113c7f22b3fe2c71434178a90aae6e"],["/2020/08/01/Review/銀河鐵道之夜/index.html","bd0770fa2f54cd982e1a19a8b5853f5b"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","94f9ff1bca1c2e77712753e295f78e95"],["/2020/08/16/Review/15歲的恐怖分子/index.html","bbd22877b3681713abec13d51ccb37b6"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","2f14fc99f03e63681f9cfe67d886d987"],["/2020/09/13/Review/羅生門/index.html","0dba7f309ef077cbf7abdb4982fefd5f"],["/2020/09/20/Review/闇夜的怪物/index.html","fad893d69fb2e65601c147f3a965862a"],["/2020/09/27/Review/14歲，明日的課表/index.html","4822fb77b1a674fc62b329f11f5e6eb5"],["/2020/10/04/Review/致十年後的你/index.html","1fd710ce70c165b63b55d1f2cd1965b5"],["/2020/11/08/Review/滅絕之園/index.html","427d8320d29984ec5c95f7316f4cc5bc"],["/2020/11/15/Review/將愛拒於門外/index.html","f0b7fddb7793bc95796b9fe157e747e1"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","3b9e0744f060caaf6800a5d96ef04296"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2876ed101a98de3f3cc835fe19e013a9"],["/2021/04/22/Review/道印/index.html","66cfabfe772d096849de62cd1203dfa7"],["/2021/05/03/Review/戀入膏肓/index.html","fc238a33e9b34b0d159abee0ab0536f2"],["/2021/05/10/Review/Dice/index.html","e5acb43f88bcd182a08cbb8804207b69"],["/2021/05/15/Review/魔女之旅/index.html","d514a0d2d053a9580568bb429fafb7fa"],["/2021/05/28/Review/戀愛寄生蟲/index.html","aefcc6ec56fd91e4f505686bf7267ae3"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","4d4fb1d033a34d1c0ec5d49b72286f47"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","2bf03721780f1dd50122eb97e61ddb27"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","51da572fa65c6b85eb8f26a2ead1ead8"],["/2021/06/05/Review/流浪的月/index.html","7d73bdd2986dc868a9efd5660cdbb4a1"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","2ec85da6cdbc89fee28d685641191aef"],["/2021/06/13/Review/第一人稱單數/index.html","b77ab56dc041c975f4f99a21066d6b70"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","97d8ae1ca2b4e8449c25b938ce2bb0b9"],["/2021/06/16/Review/願你幸福/index.html","e251609b1320ab0cc35a557a4a121df7"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","3cdd5dbcda2ff3d0db9b5d7342ae11da"],["/2021/06/21/Review/神隱少女/index.html","b7295b6a86dc6a17ac8250161e19cfd7"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","07dd111b90c5c50e621381cc372ec90e"],["/2021/06/23/Review/天空之城/index.html","c7f4b181b12f013d65b18c7ae1c9bfcc"],["/2021/06/24/Review/魔女宅急便/index.html","a9011965affcb095431933719a585065"],["/2021/06/25/Review/借物少女艾利緹/index.html","aadabdc739848ee254d0b263f5bded29"],["/2021/06/26/Review/魔法公主/index.html","5d9dc86b59994902e349d2d146a6bf4a"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","d4bb70378821c3c2e619020a6309880e"],["/2021/07/04/Review/飛雪與劍/index.html","d80b2452ab8940205541dd0a4baaa23c"],["/2021/07/09/Review/地球防衛少年/index.html","3d86d6b20b158a2350188291b2bd6ac5"],["/2021/07/12/Review/Angel Beats!/index.html","a881a9bfd8a0dd4c92e6dbf048a0baef"],["/2021/07/13/Review/Clannad/index.html","673dd234c8af002ee75e1b8fe859a56b"],["/2021/07/15/Review/AIR/index.html","da450a9a1bb218a2a2b66daf7fc45d33"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","0064f0a14fa1f223238a30bc84defd0b"],["/2021/07/15/Review/螢火之森/index.html","72a4bcfd10551e3012434322e8a71124"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","61a3ec2fd9372628eed7a35f7cf28038"],["/2021/07/17/Review/奇蛋物語/index.html","e03b0f092dea6637a85bf69777eb06dd"],["/2021/07/18/Review/Vivy/index.html","90d7a11fe1cffccd23db33bd8146e2c2"],["/2021/07/18/Review/請妳消失吧/index.html","be3ac63da33c3d4204c7e4ae6e39772c"],["/2021/07/19/Review/漣漪的夜晚/index.html","4b1a323ca92c455b0df26dfa5d60bdf2"],["/2021/07/20/Review/月色真美/index.html","9c9bb3ec635095d0cca50377daa0df73"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","a8d6de1004a2354996e4dffa68b41843"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","287a3af5b3afe78401d4b74372e2f5b6"],["/2021/07/22/Review/罪惡王冠/index.html","7becc0af3ec74aa14bfd0872824a88a1"],["/2021/07/23/Review/弱角友崎同學/index.html","2f30639ff4e6f04d692a608d2433bef5"],["/2021/07/23/Review/惡之教程/index.html","0d64ddce5cf5a15d10ecd522ab88b386"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","fdb1cb51ac80b180929cda6ba4c955bf"],["/2021/07/25/Review/魔王勇者/index.html","7460bba583f8f5d9da8cab9c33a9d41e"],["/2021/07/27/Review/一年A班的怪物/index.html","ce90872b848e9d82185c51645601161d"],["/2021/07/27/Review/奇巧計程車/index.html","09e5605540e05816ce3a444b3ebae623"],["/2021/07/27/Review/專情的碧池學妹/index.html","f61aaee114048753e07dd37967da8747"],["/2021/07/29/Review/只有我不存在的城市/index.html","2d213d687c04495e6a2d3e53007e7965"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","9ada713712a9c838a99ccd16c929cdd9"],["/2021/07/30/Review/可塑性記憶/index.html","29ac4d59b6a1fb9c048a6cf9fc51e4b4"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","3861aa13b68389794ad4f0e6c7207f60"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","febf8cb5b50efbe26905f5d6bf29a572"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","ed3f34b7653c3a90651e9a5370a04a3c"],["/2021/08/25/Review/清戀/index.html","1efe213f1a21e8cc47dcbb8435e31b27"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","f369dca04b94c3b2a7adaaee8ed72446"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","a958c9cf707b29a0fab3a9f4972ef2ac"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","0f693d0eb082fa7e50cffea8fac19a0d"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","431f9c7a3eb76840c942ebafad4af8df"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","aa8fc72acb63dbf028e3d40ed7e03a81"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","4839e038f3fd5c4d3f17b5347230e742"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","f4d0cd5d5d215f04c9569804bae40dbf"],["/2021/10/16/Review/龍與雀斑公主/index.html","03cf8663d01200a72c2db4e0f72ffaa6"],["/2021/10/19/Review/孤狼不想開後宮/index.html","c794b23e9267d2e9e6ad93d04f171e90"],["/2021/11/13/Review/徹夜之歌/index.html","66b9e9a2d29cce3ed35291946cf0e130"],["/2021/11/24/Review/武煉巔峰/index.html","b97f9a5e90075a22e73f0770c85501ef"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","20746e0bc93be1fc6c3589dfda03daa7"],["/2022/01/28/Review/神醫凰后/index.html","58ed382362513c00bc855f41e353602d"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","ab423a2cb85b65e15b802c3c9ef96be1"],["/2022/02/13/Review/夏日幽靈/index.html","687c7b87bc36feb4ba4cd2c6d5e101e0"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","cc0047544d602660ed1a18adefd856e3"],["/2022/02/26/Review/賽馬娘/index.html","460c2841750ef2f7f8e8744815d9221b"],["/2022/02/27/Review/大欺詐師/index.html","d32600fa98dc52fcd24ecb34669e7ffe"],["/2022/02/28/Review/前輩有夠煩/index.html","5f381d6a7d4068777501b3b74bd77157"],["/2022/02/28/Review/碧藍之海/index.html","81fd519acb17897439bb1aeb55950e69"],["/2022/03/05/Review/落第騎士英雄譚/index.html","dbf4ef622938ab2ab2e5bcf97addb232"],["/2022/03/06/Review/Another/index.html","d7a2aa1487ed787cba60180ed2d903b9"],["/2022/03/06/Review/入間同學入魔了/index.html","3c1ede4487461581e3a384c58b1c0bf8"],["/2022/03/18/Review/再見宣言/index.html","bfeffdfbbbb19afbe44f7e07da2682b4"],["/2022/03/23/Review/生若冬花的妳/index.html","66118603f262c390b395e0f68c8c713e"],["/2022/03/25/Review/天之弱/index.html","ae0b553a5fe6609f1a10a8ecf445c24e"],["/2022/03/31/Review/滅了天道之後轉生/index.html","a428a529304dfbc0474d312cb29e59b4"],["/2022/04/30/Review/泡泡/index.html","aeb60e164342bcb39bf9ef47e9d67186"],["/2022/05/04/Programming/Dynamic Programming/index.html","16d474e0f746e5dab70ea93ee681adcf"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","abcbf89c9a4e7a24f0c2f29218c886bb"],["/2022/06/13/Review/偵探已經，死了/index.html","5dbb6f14a3fd6b051aed8ac27aa4359d"],["/2022/06/14/Review/黑色子彈/index.html","90fc965235f74e349a71bbc9d157f62c"],["/2022/06/15/Review/黑白來看守所/index.html","e2fa2ab657671ef8113ae80365920132"],["/2022/06/16/Review/虛構推理/index.html","bdb39e7b35f723b14a31091f44751d56"],["/2022/06/17/Review/戀愛與謊言/index.html","a41ba5014e1dc17b369efc52fcc1c696"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","831c3d416dc877929680c4294abc62cf"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","ee529829334cd1f6f161dc508b6e9932"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","e3f919d333fbbbd82bae0002df751eb9"],["/2022/07/03/Review/Hello World/index.html","c49c46d88e5becf53fd1c5d890e44d07"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","67a2830b3497f45d278b2f05e0ef929e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","19aa9a40bd637120ed07fcd1efdfc6dd"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","4b7999291694399fff4d5ad1a6b53d28"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","e4646ad32a4029cda9fcb2a25b1785e6"],["/2022/07/16/Japanese/動詞分類/index.html","72b247cbd5a45b567950c2d27ec9c155"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","05f43299edb0646173e362a9788b1b23"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e5e03eefc56639b5f1cc94f993e54d92"],["/2022/07/17/Japanese/音便/index.html","4e6039b222a233aff5f3f57dab428a8c"],["/2022/07/18/Japanese/動詞 時態變化/index.html","ad5b4c4dbec2845ff7d11be041d013dc"],["/2022/07/19/Japanese/助詞用法整理1/index.html","8d407e2d71cc68a9aad053f731cd319c"],["/2022/07/26/Japanese/助詞用法整理2/index.html","185a1be03efd526b71d6514cfa2064b8"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","c596f7948c409131756ab2d9f5d1d75a"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","fe615ea1960fcab3473806d99e5135c5"],["/2022/07/30/Japanese/疑問詞/index.html","e8232d7c351b49d477afb27c3b3865bf"],["/2022/07/31/Japanese/助詞用法整理3/index.html","32527fcd0d9b085752dbb736db59ec1b"],["/2022/08/02/Japanese/副詞整理/index.html","4394115dc3c774de9e47b509c4937645"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","42f70485e1fbf5a0cb8fa19afcb427e9"],["/2022/11/04/Programming/Data Structure/index.html","f8e70d19c94c515856208c21d00ca815"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","417f50c33ef17ae3ec1bf998ecfcc080"],["/2022/11/22/Review/組長女兒與保姆/index.html","7a98c5102c037838ac7ce8cc39bda5f5"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","da9767a270045151fec1563ad69438c5"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","90148415b24a23d4e880b2fdcd8e8c47"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","65fd2a475a6e633a3ba186e53bb77e72"],["/404.html","9ed2ed5b5e33d05d231455d11f02d7cc"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f817222a28cd1a0dbb1c7f1634aa32ff"],["/archives/2019/11/index.html","ba236336f4a2ffe1f4019ffd67d1143d"],["/archives/2019/12/index.html","6d3336033895c2acd471d4e2d0a242c5"],["/archives/2019/index.html","ac7be1f66a47a808938987c5bd7b5f0f"],["/archives/2020/01/index.html","010b577ba772adbbb7d4e7ba89aa9b78"],["/archives/2020/02/index.html","e53dccd4a06039a1a120e0392455b931"],["/archives/2020/03/index.html","3d62d49d6ff2c491f190d26aa52035ed"],["/archives/2020/04/index.html","bf09d0d657294616d8ca9d8c7fc46ccb"],["/archives/2020/05/index.html","7620b055db1084519da5ed1ab2fdeec5"],["/archives/2020/07/index.html","fc9d545c43609bdfd027b4c8dd0eb23c"],["/archives/2020/08/index.html","516fb3f470331c28ea92a0aedab5f2eb"],["/archives/2020/09/index.html","1d737db9f8df3a30b29ede79343ba6e8"],["/archives/2020/10/index.html","8714bb99e340269ac87a157a7942adc6"],["/archives/2020/11/index.html","179c55648f5af8e1e3bcbb90890bd99d"],["/archives/2020/12/index.html","00cc35a52995ade80ca6bdce24056798"],["/archives/2020/index.html","6dc262084aa713f5294bc204a7f8196a"],["/archives/2020/page/2/index.html","f7fb74429fc4753c7cfaabc1673ba220"],["/archives/2020/page/3/index.html","79bf5deab4bd7198f1f64abf313a6ef0"],["/archives/2021/04/index.html","12b0fbf112cfc2c66ae0cab4d9dba385"],["/archives/2021/05/index.html","fb658852c85d9c373a20c9740bd41f55"],["/archives/2021/06/index.html","afb4a2f97536b9a99566f646258257f6"],["/archives/2021/06/page/2/index.html","c89467904056697c039640747b5a7379"],["/archives/2021/07/index.html","308d175be9b3f278673499411a543695"],["/archives/2021/07/page/2/index.html","e754a7bc4a33040295ca3612259e8b23"],["/archives/2021/07/page/3/index.html","a09c30061065e5bf84174fa1ba02b439"],["/archives/2021/08/index.html","f7d905f7b4b2efbb80ea8439fa8a57ba"],["/archives/2021/09/index.html","23449809e5a6574b2e3cebf4591ae59c"],["/archives/2021/10/index.html","120a7cb6eb5de5902a7153e9657502d9"],["/archives/2021/11/index.html","3b688b96dca7399b3e95f39676f0eeb4"],["/archives/2021/12/index.html","f47c87bcca995e1da7f5d83de2dd2fc7"],["/archives/2021/index.html","b90a6805618c80dc374271732e8930a2"],["/archives/2021/page/2/index.html","697c9a5ae7e233d585739a9ac52de707"],["/archives/2021/page/3/index.html","5b2d84669f26a0bec89cef13f88a815d"],["/archives/2021/page/4/index.html","ec8e42dba9cebf3cc995dac837a5c337"],["/archives/2021/page/5/index.html","c1885df03bcf30c33b55f5ddde56a795"],["/archives/2021/page/6/index.html","b691d9753a9c41ae4296b7ab5fa97435"],["/archives/2021/page/7/index.html","1506c98dd094e58b1984a013d5a6c23e"],["/archives/2022/01/index.html","9dded24e9b4d3c726803254e1bdf162c"],["/archives/2022/02/index.html","5a4532549e9fd340cdcfc56bdde73c2c"],["/archives/2022/03/index.html","14e49b0a815819cf4209940213dadef9"],["/archives/2022/04/index.html","2acc6f4cb8e15af64a611a21957525ae"],["/archives/2022/05/index.html","be0042d1ec32cf35ca837754f3abfd30"],["/archives/2022/06/index.html","23df1e64afef99ccfedf700adfe1ecb8"],["/archives/2022/07/index.html","8a085a5f795f017a448cd6aa0bb389a9"],["/archives/2022/07/page/2/index.html","593a740c25f80edc26c183896d60a605"],["/archives/2022/08/index.html","6a9d0fdc5d15f0eb330816b03f4de04d"],["/archives/2022/11/index.html","1b8971182400c18cbb4cefbad7e7a5e0"],["/archives/2022/12/index.html","ece93d9cb43f72f3ceb957f089bdc3d3"],["/archives/2022/index.html","60dc96cd52a3bb5cf8963191ddcd4b8f"],["/archives/2022/page/2/index.html","083c26f6e23c329fc751ab20ca9091e1"],["/archives/2022/page/3/index.html","4a567e4990f1371ebd937bde381c256b"],["/archives/2022/page/4/index.html","6dbf2a73f4c0b00bbfb72e0c015b7a2e"],["/archives/2022/page/5/index.html","3b197d4bb1814e90124fe8c3ef4ca006"],["/archives/index.html","527c24113077ae2e6d36420b37ae504f"],["/archives/page/10/index.html","19a170d825be65b2a2a6487f9359099c"],["/archives/page/11/index.html","9131a406752cb7d16eeb72283a957315"],["/archives/page/12/index.html","edd82c0b0ef7c899eaca337032389c73"],["/archives/page/13/index.html","7743b45ec22854fcd6d8b75202c9910c"],["/archives/page/14/index.html","114c8165c7ce191fd1b680775454a4ba"],["/archives/page/15/index.html","ad19a784f70a83a94c8513c9b6fd2f47"],["/archives/page/2/index.html","dbcf5b5ca9bbfecbb5a1777f5fb9cb25"],["/archives/page/3/index.html","6d38bf2723d45b848d09ec653bccb9b8"],["/archives/page/4/index.html","80112d2142ea74fee12c6563d2462796"],["/archives/page/5/index.html","06ae890c980aa28a799c340e7233eac6"],["/archives/page/6/index.html","cf1bd6cd98c5da6056d8a4b24a563158"],["/archives/page/7/index.html","7716edc21334349a580bb2ddc3fe26b4"],["/archives/page/8/index.html","e19fe553deb9587bb9a05d1521a05761"],["/archives/page/9/index.html","726a0b8d8a097ed1166328e85b482896"],["/categories/Programming/index.html","7abec96c23ebc02d37b47e5892c853ae"],["/categories/Review/index.html","b81688aa5df4cf818235b634e18e01d8"],["/categories/Review/page/10/index.html","2bacba9cb8b8cba68b0988dc186173d5"],["/categories/Review/page/11/index.html","582f624dee34dfffc53113734ad32d3b"],["/categories/Review/page/12/index.html","d33f95f0f7a69600f5b1dfe5b78d7416"],["/categories/Review/page/13/index.html","d1c12548159de0dbd8ce799f98d4a343"],["/categories/Review/page/2/index.html","284166cb0f5a5f7137f0cc2203cc8aff"],["/categories/Review/page/3/index.html","81ea94c59d1d284a4e8683579ff8a331"],["/categories/Review/page/4/index.html","2a6ef222af37882b364d367483cb2b6a"],["/categories/Review/page/5/index.html","95fe6cd85788e552de51c7896b62fd6f"],["/categories/Review/page/6/index.html","53a8826d338d772f0f72c9f30fc0a6cf"],["/categories/Review/page/7/index.html","ad26b10de7019945838de40ea0a346e6"],["/categories/Review/page/8/index.html","d49295a2fd03af70d99f6150568370ff"],["/categories/Review/page/9/index.html","3744a5ccee817f1ec39f48cc995e9b39"],["/categories/index.html","b224b673da7cd2ec07b44e825b7a5fc7"],["/categories/日本語/index.html","518372cbf675aad9ce3c25d468f58d33"],["/categories/日本語/page/2/index.html","433106d8c9e95deb55203b0f03723a5c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","88dedef13e7f641e7ca6980a20f7b630"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e747c62807b75afc9117e1ca6a1dcfbb"],["/page/10/index.html","7b6e386af3babcc522ecd014e54c2d6f"],["/page/11/index.html","897b22d8a212b2b37c3b6d253f75a563"],["/page/12/index.html","0d506f08d5f6194dbe5914f908bc2be0"],["/page/13/index.html","183092f9730b32b6fe9dcd236cc6b094"],["/page/14/index.html","5518d36786283bf265b316ec87899dfd"],["/page/15/index.html","8d26b0eb1f19d2a023f26d0480578c43"],["/page/2/index.html","0c5a7fe00c647dd9005202c174c418b3"],["/page/3/index.html","800b56398f3bb5741f6cb6f5527f3b9e"],["/page/4/index.html","d918a807cb5a75324899144c5dfd1864"],["/page/5/index.html","2c24394410d8b3d3d0551a28405dcf5a"],["/page/6/index.html","a947b86938642abeb9393618b7058214"],["/page/7/index.html","ab1ebfd38e22e1ae33e28282e63f0b11"],["/page/8/index.html","e03beee26bda845293717d8ad2c1278d"],["/page/9/index.html","a53322a1a9d4feb90fd324e9426d3757"],["/sw-register.js","151e3891cd7fee6592b8e738f7d88133"],["/tags/10分作品/index.html","b787d8a3f508591da804ac2a4d2c6ccb"],["/tags/3分作品/index.html","7a76457ed603a423e2402429b39c38dd"],["/tags/4分作品/index.html","436b1bcc1a2935a628c4493135354367"],["/tags/5分作品/index.html","86ec079dca888b6d6eed32c757db3314"],["/tags/6分作品/index.html","89a7d2a71970e5478f06512d8b760c18"],["/tags/6分作品/page/2/index.html","1ce4a247cda1e4ab162c7f63a0307b1b"],["/tags/6分作品/page/3/index.html","1e272c93bf633f95e88ad1f44a4611c0"],["/tags/7分作品/index.html","08ef0e4860df3fd75064d099db584daf"],["/tags/7分作品/page/2/index.html","f4becde47a5e73e44c5f95ea34b7bbd6"],["/tags/7分作品/page/3/index.html","5b24fc97c67f7796799b3296facc9e3a"],["/tags/7分作品/page/4/index.html","3eb8d78c3dce71d02229fe943463f7a1"],["/tags/8分作品/index.html","ffe451a169f2a9bfd82b38130a7a76ce"],["/tags/8分作品/page/2/index.html","7dcfbaf1f2928f5fbda5c435923ed9a0"],["/tags/8分作品/page/3/index.html","7116a7756e35ebc82cddc730c56e0cf2"],["/tags/8分作品/page/4/index.html","9a452b07860356f18429e808fc4d2218"],["/tags/8分作品/page/5/index.html","2e03c8c1b6cca79a2543885c808cecc5"],["/tags/9分作品/index.html","3b560e7d192cfc86333820ab329df84d"],["/tags/N5難度/index.html","c159e44f0d08fcb80f348242f0c94989"],["/tags/N5難度/page/2/index.html","8cb60a86bf79444ecc3129d66fa36604"],["/tags/index.html","50c894f905124c8bc6f227bf0a27d48f"],["/tags/アボガド６/index.html","862a1b964e380c36fd3c0e79fc5d5a99"],["/tags/三秋縋/index.html","064e4b2e6ced099ced9ed51b316bc106"],["/tags/中國武俠/index.html","1b61f042efda3271e8fa70e0524bc74c"],["/tags/中國言情/index.html","081fdb7f3da5930f6013f00859da7356"],["/tags/二宮敦人/index.html","848e367903a89a59ed969de5b591d335"],["/tags/人性/index.html","0877a56f4f738f02cbacac7be1762a6e"],["/tags/人際/index.html","1b23629468859ec80949d43d5aadcf0f"],["/tags/住野夜/index.html","30f674022588afae1395cf5265e42f41"],["/tags/佐野徹夜/index.html","30323d6197001c0c05dc217081f7ab2b"],["/tags/努力/index.html","6aa40f7229d75cd7d2fcb7092a559404"],["/tags/動畫/index.html","d989d41dd1927c22c2f96ecc38e7b97c"],["/tags/動畫/page/2/index.html","ee33241c4d0f4c71037cde8460ef0759"],["/tags/動畫/page/3/index.html","fba35592824429cc429ae7961022fd9a"],["/tags/動畫/page/4/index.html","3928b244b82a8dfe8d38c6ffbd8be495"],["/tags/原諒/index.html","1df8bf55e18bc5605d814bd478b9ec33"],["/tags/反烏托邦/index.html","c34781a382927b9aa5ba6311ac17187e"],["/tags/啞鳴/index.html","1bf656a425dd43a1b8b37c8d000217a1"],["/tags/喜劇/index.html","114691f22ef13f3e955157caf5b851f0"],["/tags/夢想/index.html","e6b660773481cdf36b0b4c8678a358b2"],["/tags/天澤夏月/index.html","27696aa8356612d42c1568230f07bf6f"],["/tags/學習/index.html","5e0f267441d0e771ebe6a53497f74dea"],["/tags/學習/page/2/index.html","25d18bb66e8d3875f448ec857b87d92a"],["/tags/宮崎駿/index.html","90f9cf53759ebee779f71d34764e38d5"],["/tags/小說/index.html","7aacd72eb11228eeb333a1f058ad5a11"],["/tags/小說/page/2/index.html","ed4211f97fdec39ec36208181e4f9fb2"],["/tags/小說/page/3/index.html","996fab640bbf2c2783b7cb74e2199246"],["/tags/小說/page/4/index.html","5628ac6bf182dd288fce4620c9700381"],["/tags/小說/page/5/index.html","858a4435d0ce153f60d249a753ea1d3e"],["/tags/小說/page/6/index.html","70e21bc0e462ffa6ad7bce5033482e80"],["/tags/小說/page/7/index.html","83c8ddbaac99beda867f15bd758e1650"],["/tags/平淡生活/index.html","c55f81efcbc6d1c507522b90f45473d9"],["/tags/幸福/index.html","8de6c117d9a357781a3887e7a1eb94f6"],["/tags/志茂文彥/index.html","77247c29b5a5f14f5659f9eafb1358e4"],["/tags/愛情/index.html","c865530664cffaa2bb88a21dee18e10c"],["/tags/愛情/page/2/index.html","bbc4fceef1ea1432fda3a3e72fece269"],["/tags/愛情/page/3/index.html","383ee97b25bae32ae19b3818b541b302"],["/tags/感動/index.html","9ab8a09d12da264a62326a26ccd2c5d1"],["/tags/懸疑/index.html","a9f8bbd3d1406199cb57eaaa8cbac9c5"],["/tags/懸疑科幻/index.html","f3da2be356369afb2790d72af5ad7c2f"],["/tags/戀愛/index.html","df8dfdd8c12753c969a4e900132480e7"],["/tags/成長/index.html","20b1cee33794f4bc83247f124c093a6b"],["/tags/成長/page/2/index.html","f8c194efdd7dc252aeb081d51f1b56af"],["/tags/戰爭/index.html","a4fc6f9355cda1fe41eb39b7cea311e9"],["/tags/推理/index.html","d598bb59551f536d3ed66f9ba00d2529"],["/tags/搞笑/index.html","a0cfdb2092faa81bb94d5967adf94c16"],["/tags/救贖/index.html","55e44786bed1e0797269e437b2a0c724"],["/tags/斜線堂有紀/index.html","1f6551035ca679fce334c6f4b1922759"],["/tags/日常/index.html","2b476993ff48fcfb58b9563ca3b3b1e0"],["/tags/末日/index.html","57d3b9f0b8e6cd75229203e0991ca242"],["/tags/校園/index.html","48fb248cd79c01cba551ba88e0733ffa"],["/tags/武俠/index.html","a3c1766e7ddde88397e19a983411ede6"],["/tags/武俠言情/index.html","4a21c36b379acaada5153c0b88425d11"],["/tags/漫畫/index.html","09fb23e723ed7d0df4302ca3f76f404b"],["/tags/生命/index.html","3316ca3caec015f698f66ac9cc7a4275"],["/tags/生命/page/2/index.html","585e090ebf840950e8135d3830352412"],["/tags/短篇/index.html","cfd30a97ce35133962b901f5fc0c258d"],["/tags/社會/index.html","9f728068825e46594d3ea0231f4f0e77"],["/tags/科幻/index.html","177990e2c9321eccc1073180b9edf271"],["/tags/童話/index.html","724de6d35b5f121bf80cbf4af1da1ab7"],["/tags/競爭/index.html","f5dd02a62559c4bf1889a0c17bfb6b17"],["/tags/自我/index.html","525df2f6b7bfc59d96357949cb2602eb"],["/tags/自我認知/index.html","5dbc2ccbb55510353b7e70982ae03a78"],["/tags/葦舟ナツ/index.html","66c0f214315e5bb8a748cb4635c0d50d"],["/tags/藤萬留/index.html","1664eedfd1979131e069c46e1e3cfb6e"],["/tags/親情/index.html","3c431b2ec4319cea4218d57e5cb537d0"],["/tags/雜項/index.html","ccbdd1bfe238b5f2053d3aad6a091a76"],["/tags/電影/index.html","f14977e100b0671394bcfd073d53d690"],["/tags/電影/page/2/index.html","11ce59674ddfc439da1981fe22e93067"],["/tags/霸凌/index.html","eebecf3d054eae02a7bb6aa6dcccfda0"],["/tags/青春/index.html","20898d10d7d15a9390363bdc690b472a"]];
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
