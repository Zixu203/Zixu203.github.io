/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","0ba412eccf5d4614aff8c41a560d51f7"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","da7a3470dcf3bbf4dc4733bb0c0f234f"],["/2019/12/25/Review/無法計算的青春/index.html","d7445592f5e6e66c1a94dba2110b6c3d"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","d0a23c1bacf004b9002b63a1815723c0"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","98ea7f8c7de80cb7189009d697afd9bc"],["/2020/01/19/Review/下雨天，不上學/index.html","1130d637c16ce86c64b3006676049185"],["/2020/01/26/Review/三日間的幸福/index.html","db260cf1d6e46f7d21e84de2901a793b"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","639eb48be7064931551bb09180f0102c"],["/2020/02/09/Review/青春期超感應/index.html","01ab8dc70f94449e292c0a6a7398557d"],["/2020/02/15/Review/又做了，相同的夢/index.html","53e68605b8743e6de4d89b32220415b0"],["/2020/02/22/Review/回憶當鋪/index.html","5dd6b7547c595c65705552392d9f29d6"],["/2020/03/22/Review/不適合自殺的季節/index.html","20e5efc1602e71f9066134654f9e5a2a"],["/2020/04/26/Review/我們都無法成為大人/index.html","fc39c21ef903480791d938b72b96d660"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","429658a019ca170783f30941b3202079"],["/2020/05/17/Review/人間失格/index.html","48e5f434594f3f5310db81f32c0da835"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","349494df34f769b5139fcc9547dc3a9b"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","1b0a9bcce0f7affb9af48e6a21215fa2"],["/2020/08/01/Review/銀河鐵道之夜/index.html","593d450aebcc592663aa9037da0ffd9e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","469196ddc5648927c5aa8d7bdf50b940"],["/2020/08/16/Review/15歲的恐怖分子/index.html","56a14a77616af5883d875f7262652948"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","20f01abafe004e3d1c3f8dc45a1dca00"],["/2020/09/13/Review/羅生門/index.html","d4c2983339d5fde791d4f771d5a4fe03"],["/2020/09/20/Review/闇夜的怪物/index.html","5bd721d78a3be40aa45c480542cd1866"],["/2020/09/27/Review/14歲，明日的課表/index.html","c950622d831a639fa6822872cd8e1bb6"],["/2020/10/04/Review/致十年後的你/index.html","4cc29effe0cab85f6c26375d57de95a5"],["/2020/11/08/Review/滅絕之園/index.html","e858cf45db340953bc72ad107d8b3c2d"],["/2020/11/15/Review/將愛拒於門外/index.html","e79adeca31540dede110d93f5d69b62a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","bbe537b74b874beee1971bf4d4f2671a"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","222832a3c85bad2156b65006d18d3f9f"],["/2021/04/22/Review/道印/index.html","64f69cb550ec7a4b52d0678bb3ab3e16"],["/2021/05/03/Review/戀入膏肓/index.html","62b279a424d64038b24683fb3cef8a5b"],["/2021/05/10/Review/Dice/index.html","3cdebc1df268c59b5767e0cb7dc3de93"],["/2021/05/15/Review/魔女之旅/index.html","86c2989c481e7fce333d9f6574c3cea5"],["/2021/05/28/Review/戀愛寄生蟲/index.html","257c74ba08a0b76890b7ad3fd4874311"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","537ba1c53491507cedf9c7b088159cd8"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","1c9b75fd35882a8eee9fa204115672d6"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d4c2bf54574485747a9121bd7ad8a656"],["/2021/06/05/Review/流浪的月/index.html","7f8778c753d7fba6d40705c890477e1f"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","160deef138e8722cf248ff809c87ac98"],["/2021/06/13/Review/第一人稱單數/index.html","b2fdc7d8ed68c74a2e4477c5a2b8fd89"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","3ca02cfda2b23e8ebb353921f8d16f4c"],["/2021/06/16/Review/願你幸福/index.html","c223cd3b6b37add99e51fb2c03198e68"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","f5da612a0aa5b7c97ecee6c34418d6f5"],["/2021/06/21/Review/神隱少女/index.html","0ae4f17becbe97a042324fe769ffb331"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","d9dd140b8d32bfa28ac7c65f46e76c64"],["/2021/06/23/Review/天空之城/index.html","f9ebe1798374a22073c0215823f2cd79"],["/2021/06/24/Review/魔女宅急便/index.html","08aa49841e4b7f4a3280274f730a899b"],["/2021/06/25/Review/借物少女艾利緹/index.html","ec7fb32bb9430e5e6514cba13a6aa8c3"],["/2021/06/26/Review/魔法公主/index.html","a61c6d38696e2052a05268fe925bc40a"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","2ab4bf7c890d91fdd74abd22c537f2a1"],["/2021/07/04/Review/飛雪與劍/index.html","90e80fb0f884b31a05269bad3d538c72"],["/2021/07/09/Review/地球防衛少年/index.html","35556fe0b0c9fed6c0ff2abf1244d1b2"],["/2021/07/12/Review/Angel Beats!/index.html","e2fc385fb14bef0fa0e2b413f3ddfc3c"],["/2021/07/13/Review/Clannad/index.html","5b9f448f1178832f28697b335a4247cc"],["/2021/07/15/Review/AIR/index.html","ddc321a9e230de8aa46b5bdb723ebc7d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","b5e630be1c9572d8d35507d2beed7291"],["/2021/07/15/Review/螢火之森/index.html","9ec6963a329a5f94485c78184f1e1d37"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","e580e1258974fd096615eebd85ba1bfc"],["/2021/07/17/Review/奇蛋物語/index.html","ef984a97c7612450abe1e93ef5016c4b"],["/2021/07/18/Review/Vivy/index.html","7f2d9440f115e9c44e1d8124ec96a42f"],["/2021/07/18/Review/請妳消失吧/index.html","822bddbc3b7a104c7032a4ac7fe2b730"],["/2021/07/19/Review/漣漪的夜晚/index.html","16d3a00be6241e0865b0f1271e984a51"],["/2021/07/20/Review/月色真美/index.html","19527a9ef8411af96ec86f5fad50db01"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","b7d2690c4657814a527409809d548936"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ec1337358c9596f7fa5a372a6a397d6d"],["/2021/07/22/Review/罪惡王冠/index.html","d229b11d3c91f38f4a1eeb95e6851e18"],["/2021/07/23/Review/弱角友崎同學/index.html","fca365d930db057c301ac12e960b0c8e"],["/2021/07/23/Review/惡之教程/index.html","301a03ebcf6a9e419ac02c8415a6f47a"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","606a2222dfda5a896d7652bbbfc51ed9"],["/2021/07/25/Review/魔王勇者/index.html","8dbbb406a112b102d90f3346e15d5129"],["/2021/07/27/Review/一年A班的怪物/index.html","d95c80ebe5bb18d475c112d395939d99"],["/2021/07/27/Review/奇巧計程車/index.html","19c37c701eccc5eaf219f062b51d6ccc"],["/2021/07/27/Review/專情的碧池學妹/index.html","1cd1bb74449c98ca8c409ce8e38fb1c2"],["/2021/07/29/Review/只有我不存在的城市/index.html","1c4d538ceb557f8cdfe54578ec92a04b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","e0f8529f08bb5f2add50185f738bb73f"],["/2021/07/30/Review/可塑性記憶/index.html","21dcc77fb1c10d04a1cb391ce6ffa397"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","38f46225b081c7c8348858621e69338f"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","d5f40f6ac4cea1fb5f1f4ab757199def"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","7d9a652c2307b014ac9ee4147668367d"],["/2021/08/25/Review/清戀/index.html","d48427c2675f81fa32f022ec1af8170c"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","05f7a6f6f3bfc6fc45bbd7f4a5192be6"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","60ba69d6dab34aa044bafa592d015125"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","d6da6d59b48020aac17f43429beb8b3c"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","07cd14fe6379b97d463e1e1d66cf6b84"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","b7a8c156c5118ec273614869c24465d9"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","0176e8c0943559791bbde7c3d30b824e"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","14ebffaab04a6d57528b17f93026f5e4"],["/2021/10/16/Review/龍與雀斑公主/index.html","4fb31f4ce6510c8c113d3038a8b3e0b0"],["/2021/10/19/Review/孤狼不想開後宮/index.html","44358bd917e2c100183d3beb07f6acea"],["/2021/11/13/Review/徹夜之歌/index.html","0f4311161a92c59f833ba5092ecbcfef"],["/2021/11/24/Review/武煉巔峰/index.html","a8a00b22bc6b33adb7c8eb3f3c690dd0"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","142a562bcc44a0288384728816a9b3b5"],["/2022/01/28/Review/神醫凰后/index.html","5cb0329ea6c40b156f12cee5011206ef"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","2e94e3701be8ad7255353a0853c2348b"],["/2022/02/13/Review/夏日幽靈/index.html","63db3ee7afc0c8c372b6b5c1b1566be0"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","a66c7053aa433e5b7987bde8afbe88fc"],["/2022/02/26/Review/賽馬娘/index.html","34f20a5d069b628f60fcc138d74815d0"],["/2022/02/27/Review/大欺詐師/index.html","7be7c00258ab5536c5c3914c03061e01"],["/2022/02/28/Review/前輩有夠煩/index.html","832317e005f4d5087d8507b8c35b67f0"],["/2022/02/28/Review/碧藍之海/index.html","20530da8159af9b41c2a52cd4cb9d198"],["/2022/03/05/Review/落第騎士英雄譚/index.html","d62044cf6705707003d29ab816394896"],["/2022/03/06/Review/Another/index.html","d411097f86be9c22f7a84b6987b145f1"],["/2022/03/06/Review/入間同學入魔了/index.html","9a57e4d31543ce7cb1edb03c4fb61d57"],["/2022/03/18/Review/再見宣言/index.html","a829615f35a0a0a737b56cdcbfb2fe4c"],["/2022/03/23/Review/生若冬花的妳/index.html","780f7a2bbcdc203c22ea809e4fbf7ff5"],["/2022/03/25/Review/天之弱/index.html","5f3b84202d8c901630cc2c6519aaee2f"],["/2022/03/31/Review/滅了天道之後轉生/index.html","f7396d2692e50b63da6637c312a3ed83"],["/2022/04/30/Review/泡泡/index.html","55e92845fca13e6f13ce6170bad6b7a8"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","2e2c995d58488f28804a8580b5f6f553"],["/2022/06/13/Review/偵探已經，死了/index.html","e59f8f0f2afbed310804e1a5775ed15e"],["/2022/06/14/Review/黑色子彈/index.html","22a3acc64e3699a7cbf7a2508f699b56"],["/2022/06/15/Review/黑白來看守所/index.html","91177257adb4db0d8a1a3e1c4e6b9b6e"],["/2022/06/16/Review/虛構推理/index.html","6b21c7b6bb430a838b42d63a121869fe"],["/2022/06/17/Review/戀愛與謊言/index.html","19e38df222f902d034d46f2d616bca5d"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","bdfeb6a2a4386d91e279e9e17a17bb18"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","642bf7b3e01674903c00ed8757f4349c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2949c0158ad43279d141ccc3958dca03"],["/2022/07/03/Review/Hello World/index.html","e453272e2776ee5465f2febac7bbd1c1"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","35229e69c5839cfcd47d5987859c23ba"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","6ce4f3d16d822151c1c17c220684c1fa"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","8271ecbb630593d25b6460b7d7e92777"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","13714a355d726c6273ab45cfaf6a37bb"],["/2022/07/16/Japanese/動詞分類/index.html","056ae09a4cb45ed34a02f249bf66b54e"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","9de29b8923532f2f6c65a2b0f4a54a99"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","10e68546051d4ae72afeda71e4f2474f"],["/2022/07/17/Japanese/音便/index.html","52712504714a45ae2ab44a57656a1525"],["/2022/07/18/Japanese/動詞 時態變化/index.html","f9fdab8897d97baebaed0365b1606f0c"],["/2022/07/19/Japanese/助詞用法整理1/index.html","54dfaa7b5b0a7ca0247e4eeea79e562a"],["/2022/07/26/Japanese/助詞用法整理2/index.html","aa803d405b3d5de32304cc79b1ab3cb5"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","2c392ed069503578d3aedc7a1f13ce32"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","fa2bff71893c58ebab8faee43a4d7a06"],["/2022/07/30/Japanese/疑問詞/index.html","0cfcfaee27ca56e8f6dbd6e74d0b158e"],["/2022/07/31/Japanese/助詞用法整理3/index.html","660337d8ea4fc6208f1627a7529dcc8f"],["/2022/08/02/Japanese/副詞整理/index.html","c541bd8ec6436c2bd721eb2beb9d1eb1"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","e229b23e334b1f6138f0d51b60d0762a"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","a2f9abc8761a5782b06edcd15373e1e5"],["/2022/11/22/Review/組長女兒與保姆/index.html","641b82ec50229b7336e479393e8f6404"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","c96d823056bf760895ccd5b9a8a292fb"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","76cf397579350b318967bd3b8c17458c"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","0656814d594b38c699ce3f942a9dcbc4"],["/404.html","b154493e64ec4f18b3cb0fa212683c54"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0f09842562d5a04b432757ff65ff912a"],["/archives/2019/11/index.html","a4a5dae2a9205481e821b0e751cf4774"],["/archives/2019/12/index.html","55e709e679b79e5d602789a80ca2c8e7"],["/archives/2019/index.html","6b26f884502c9fd3b438bea782565c34"],["/archives/2020/01/index.html","c0f55c642f0afeeec065169518f05ad8"],["/archives/2020/02/index.html","4d98c530e3f6ad34a276c539e90642a8"],["/archives/2020/03/index.html","2ed55e8abbc87acba079b881d699ece5"],["/archives/2020/04/index.html","e6e1e7da362adb2cfeef7b267d92733c"],["/archives/2020/05/index.html","9bcedb57273b94c34f506d7622b98b03"],["/archives/2020/07/index.html","2acdc39868fff79b2574e7e330e74879"],["/archives/2020/08/index.html","87e7173ed4ba21498406608d10573555"],["/archives/2020/09/index.html","852c4b32ab3a3f00d170f0401f6f6776"],["/archives/2020/10/index.html","fe862059f0a44f6c70d26b372227b94d"],["/archives/2020/11/index.html","eabffcf6e43874dead2f1ed5edf6e444"],["/archives/2020/12/index.html","43fceb7b66786793ce0f2197fcd6c0fd"],["/archives/2020/index.html","8a208e7f6256c4fb576c0ac29af88083"],["/archives/2020/page/2/index.html","a6e6ac10c44ba61758bffc4de1551ad3"],["/archives/2020/page/3/index.html","4c8b0625346b96355b7bca64bdb4f9f1"],["/archives/2021/04/index.html","457b12f1470a7eb3cdfe4e5886a43bd7"],["/archives/2021/05/index.html","d74059a21cca8baca7fedffbabd55d7c"],["/archives/2021/06/index.html","775de2e5a8289c3d52aefdf3247d1733"],["/archives/2021/06/page/2/index.html","a9079d08db84eda38465d55bcad613f1"],["/archives/2021/07/index.html","61ae06605ed518d4891385f7ef59798f"],["/archives/2021/07/page/2/index.html","ae2254f824740582c01d7efd7d721753"],["/archives/2021/07/page/3/index.html","0baf6aea1c350aad6dfb0e4c6631ecfa"],["/archives/2021/08/index.html","7bdc6a382024992e70dc79d8dc81ee09"],["/archives/2021/09/index.html","86ad4edd30df910993cb4ec7fa184e23"],["/archives/2021/10/index.html","a004b43795b84fd43bbb2cf4ac112613"],["/archives/2021/11/index.html","d8c9b4b938d26b3e42fcd964ce2debef"],["/archives/2021/12/index.html","77bd17e63e34b4b95f623f72586323cc"],["/archives/2021/index.html","4483fd805294ba2e366a450a0032e5b8"],["/archives/2021/page/2/index.html","8801edfc4789c35074c4dcae2e5e07d4"],["/archives/2021/page/3/index.html","fabd2d87f1b03a86b8b38fc0a76a820f"],["/archives/2021/page/4/index.html","226438c9a592695e78fce5cd875964f4"],["/archives/2021/page/5/index.html","2370d9af1ea726cec175390907e1cf69"],["/archives/2021/page/6/index.html","dcb710c10e7201af8602471115c2b3d8"],["/archives/2021/page/7/index.html","93a0490f7ea69abff75ac1251adda5f4"],["/archives/2022/01/index.html","e8a615593f6b0ced781e9b2e765c7947"],["/archives/2022/02/index.html","125b8eaf72e049a31fbb46de9ae0ccc1"],["/archives/2022/03/index.html","d72dab0757133daf9fd46bd298254891"],["/archives/2022/04/index.html","11a11028ee4ae5c2047d7dd507c73d4e"],["/archives/2022/05/index.html","b52005f498d96a0d1fde356e9978dc44"],["/archives/2022/06/index.html","fff0e3f3787fab2e091b3bd92dfb2ded"],["/archives/2022/07/index.html","df815c072d09b9c59b651d5e34b2796f"],["/archives/2022/07/page/2/index.html","8269b9166f18b1969e9cd3377a3e4189"],["/archives/2022/08/index.html","c247976f9672899a39a64cdd5552004b"],["/archives/2022/11/index.html","bd2638559e3008bc89d002eb402d2c7d"],["/archives/2022/12/index.html","56f277e7cfd98e51114dab7bd82953a0"],["/archives/2022/index.html","53d9aefa2d740442e1413317bbced869"],["/archives/2022/page/2/index.html","ba760500b596a694537c137afa1e15ea"],["/archives/2022/page/3/index.html","68d9d2b41ad54f3f07efc6b65cbf58d3"],["/archives/2022/page/4/index.html","8d2b17ca1f4522ecdbd0e1333d2ad0b7"],["/archives/2022/page/5/index.html","8aa79f8f0ed2739a0dae5a52a7f7eeaa"],["/archives/index.html","f4780391bc8e75a9869a4887a7595476"],["/archives/page/10/index.html","058b2f4644c4737fcd87bba2be780571"],["/archives/page/11/index.html","cbfb9ccc6e805c422cd5360d51f8db39"],["/archives/page/12/index.html","deb56cf3980d04ece9662b81a468de0d"],["/archives/page/13/index.html","6bbab929775f0ff54453eb31a21fd4b1"],["/archives/page/14/index.html","43777ede18007af1148aa35503fb7409"],["/archives/page/15/index.html","636d83a31685b214c338fa0e69090d08"],["/archives/page/2/index.html","dacf12de16318eb9d7927b1e39d36ed0"],["/archives/page/3/index.html","4d0e51f0a92feaa8ae02310068adcea3"],["/archives/page/4/index.html","32b4d4f3e828973f6a34667bfa338e4e"],["/archives/page/5/index.html","c0219ec45238087189b42e14a5f58634"],["/archives/page/6/index.html","0e29790ede94bdb8acd58a4f5b41d863"],["/archives/page/7/index.html","679fc0c9c25c0c07fd08b41154d7032f"],["/archives/page/8/index.html","9e44aaaf6a5935789df6694a4fd7c91b"],["/archives/page/9/index.html","1891a6f87bde0542fdc693a95264dc9a"],["/categories/Programming/index.html","81075d4b90df5057f1ebf52a22060959"],["/categories/Review/index.html","8134022d0319c03145e873ed4ed22cf4"],["/categories/Review/page/10/index.html","ab8aac141abc57b8e2ecf23dd83e11d7"],["/categories/Review/page/11/index.html","c7f32dc3373e689d1300643a1d0159c4"],["/categories/Review/page/12/index.html","babaaf6e4cc47345e1b6b009dc4f1e51"],["/categories/Review/page/13/index.html","39087595e8aa53fb56649909bfd65088"],["/categories/Review/page/2/index.html","f97b8171ca92aaf87c3ffe41e97f8fb1"],["/categories/Review/page/3/index.html","5f873af1cbd8038d82f1bc102e62ac3c"],["/categories/Review/page/4/index.html","c00a5125b3d47d1eef1a04418d1a845e"],["/categories/Review/page/5/index.html","abb708d136aec69cfcc49f5972101a26"],["/categories/Review/page/6/index.html","624a242d482b0afcde8757d587885b69"],["/categories/Review/page/7/index.html","a915d464317a522a4144b2e0e9075757"],["/categories/Review/page/8/index.html","8b2c2ab66ae77b241226d3584eb31e9d"],["/categories/Review/page/9/index.html","d95c23efe1af466f8ff9a1fd23b46842"],["/categories/index.html","00b86da4ec82273fb42685aa28ee2d7e"],["/categories/日本語/index.html","9fc3cd31e31dd0273b3425332bee8612"],["/categories/日本語/page/2/index.html","12891106449d751761d972bb9fae1b9e"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a1d113096b5b9141306586257e930410"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","d0443e8796b22b5e01baad83b6261947"],["/page/10/index.html","bb9aa0b6f7ec0b2945458efa239f0137"],["/page/11/index.html","3b07cfe8d1d63aeb934d16a2576c56e9"],["/page/12/index.html","45deeba70cd4c9d0c2f8ad9055a7e01a"],["/page/13/index.html","4f5ea522802763d4ddf9ed6a437a23c6"],["/page/14/index.html","6680a6cb47d28a8ff8b4a6797435344a"],["/page/15/index.html","06810217ce336da8a7b1af91ab4b2c46"],["/page/2/index.html","ca9481a2d0dd6f8bd1524d4b992008db"],["/page/3/index.html","7ff013e1efb9e0f66e268d988a41a8b8"],["/page/4/index.html","d6af674b2b632d1a25f3ba047c0c0140"],["/page/5/index.html","a2c93f795e2b9d51af79da2a1ca1381c"],["/page/6/index.html","a3f3b555a4b51e6e5c05ac573f05c6c9"],["/page/7/index.html","eeb05d48d0310b3b5648bdd0cef1bdba"],["/page/8/index.html","0c9ab633a08e0b8a41eb5001802f7095"],["/page/9/index.html","94bb8055145441d94402c299a950a21f"],["/sw-register.js","09225dfc4e628a8c44cc3ad7a7bfafc6"],["/tags/10分作品/index.html","7288ef05ffc6854fa4f57aae7ab11f03"],["/tags/3分作品/index.html","553be7ea705099f281dfd4c17227aef1"],["/tags/4分作品/index.html","d5a483fb363cca6142829a75635b8e1f"],["/tags/5分作品/index.html","0c7a00240cfd549f2781ef3c15e70594"],["/tags/6分作品/index.html","4065883c0cfac225f5aaed199840204a"],["/tags/6分作品/page/2/index.html","5e5c65692b3a31fdfe7bb6cdefc77c33"],["/tags/6分作品/page/3/index.html","5b525760b811bbdce06fcc6e813ceedd"],["/tags/7分作品/index.html","e0aec7acd7be996a92bbbf13cdd03e86"],["/tags/7分作品/page/2/index.html","0361fa3522a80b91f9d502c7aea1308f"],["/tags/7分作品/page/3/index.html","b3fe7fca96575ce0bf45549ebbea77f6"],["/tags/7分作品/page/4/index.html","f7dce0997fea314dcc6ff72053711cd9"],["/tags/8分作品/index.html","0ab2840f64bf621795c9b2a3db9b0c78"],["/tags/8分作品/page/2/index.html","a30915a7cfbece31083d0809309e35d3"],["/tags/8分作品/page/3/index.html","8e1c6b3319f431d14e8cdedd76e7076a"],["/tags/8分作品/page/4/index.html","1d8e5143a84dae7f3fa2423f3adf7d0d"],["/tags/8分作品/page/5/index.html","aa6620cc46c5a41f24ce67ff98ab60d1"],["/tags/9分作品/index.html","809c01b0a53a09bebd8278947078297c"],["/tags/N5難度/index.html","4d125075bdec5931f4e98a45b17af080"],["/tags/N5難度/page/2/index.html","3e6084e7f8de0d9d6eba6d7d9fb2b926"],["/tags/index.html","1606831acceeb8d5f15cf743edc7d00e"],["/tags/アボガド６/index.html","3152c99d971237c0cbb89e3b31e08043"],["/tags/三秋縋/index.html","28fbd3c8b1dd76e1f57a39229e5a9568"],["/tags/中國武俠/index.html","fe23f3cfa63e3fc7e4346da7ea1b8819"],["/tags/中國言情/index.html","f59c814600f4f4418939b92a5f9e2269"],["/tags/二宮敦人/index.html","62feaac7bd6342d629bd20797354cb7d"],["/tags/人性/index.html","73962c5c6b9004c6e4161d1b4ae7dfe4"],["/tags/人際/index.html","c4120b91d947b7a27b482dc8663621e9"],["/tags/住野夜/index.html","8d78b76b654fabc21cc8831c04723a00"],["/tags/佐野徹夜/index.html","b3ea866c3370152325f9d1635b2bd6f7"],["/tags/努力/index.html","2786bf2863f5cbaabae4a5eea3d28972"],["/tags/動畫/index.html","6fb1febf3499d9a281f35b3b18306648"],["/tags/動畫/page/2/index.html","b1b257b690063c93a4aad60cb245ca36"],["/tags/動畫/page/3/index.html","935c8b632d0b26fc89dbd80b9cb0f90d"],["/tags/動畫/page/4/index.html","ecf0c8d3c6c59802fb32a10745ea523e"],["/tags/原諒/index.html","a1ab9fac2280d1327e46a8d45311177b"],["/tags/反烏托邦/index.html","301160040063ffcb7c89dcf9b84a5f44"],["/tags/啞鳴/index.html","de7cb2af52cfdab09c570e3d028e9ad1"],["/tags/喜劇/index.html","edfef223d925f47a1a1a854463f9370e"],["/tags/夢想/index.html","a81c4cf22ac9b24978a9ff4b99aeeb2b"],["/tags/天澤夏月/index.html","2ca2988f9e323beec4394ceac994d0a2"],["/tags/學習/index.html","3a5a9a54f9ac185a2dbfa591e72281d7"],["/tags/學習/page/2/index.html","3d7b631962ed623bcb247856b132302b"],["/tags/宮崎駿/index.html","e6fc7284b2bc2c872b2d9818c5aaea00"],["/tags/小說/index.html","9a170d3cc27b0a52a7c7c6540e9e7ba5"],["/tags/小說/page/2/index.html","1795c2c78cab8a10d6ba4e892d672338"],["/tags/小說/page/3/index.html","d235d7b7fffd9e83a180597cbd9bdf9f"],["/tags/小說/page/4/index.html","39e106e87336e4328bf16cd8d06ab06b"],["/tags/小說/page/5/index.html","a8ecd72d0e1a658c8685ec3f225c0bee"],["/tags/小說/page/6/index.html","778142454ca2e454554de6e20f58a281"],["/tags/小說/page/7/index.html","79e48cf8ee2b22c52819d2dfd311be22"],["/tags/平淡生活/index.html","e53352655ed057abb33c8e62946b509b"],["/tags/幸福/index.html","32d59c92fb65f9f898b1f03f468080d0"],["/tags/志茂文彥/index.html","becadd03e5ccee524af95037c264d1bc"],["/tags/愛情/index.html","34dbf7667f64d9b095f9394add0caf4e"],["/tags/愛情/page/2/index.html","4b9c2613a3af607c79c14f8bc60dc461"],["/tags/愛情/page/3/index.html","2d6802c899cb60d1279b1fcdc2198744"],["/tags/感動/index.html","e3211255a34e4e008c385d09e9b51fec"],["/tags/懸疑/index.html","88eea13770fa7c4716dc9b1e431b727a"],["/tags/懸疑科幻/index.html","c46973c978987ea70e174d7716014ac3"],["/tags/戀愛/index.html","e16fa449401892a1c65a039ced90971a"],["/tags/成長/index.html","5f70d4303a117e4c24dee099af8164ba"],["/tags/成長/page/2/index.html","41fd4af4068672acf0515fe5f66e2b78"],["/tags/戰爭/index.html","584e594e48825efab1684f4798dcc1d9"],["/tags/推理/index.html","3ed42986ed3a0b2618e2568f9bb1259e"],["/tags/搞笑/index.html","c1ac2ac746fe57edfd53a839f9981a56"],["/tags/救贖/index.html","677ef92f67ceec2a7063f11c3d075597"],["/tags/斜線堂有紀/index.html","799a61d628f44b5855551951bd8bf51e"],["/tags/日常/index.html","90042e509a3a5c5ffd825e876b98a176"],["/tags/末日/index.html","b53cca57de8e1a81dbfc9152975ea7ce"],["/tags/校園/index.html","262ef7638b7bad1d8ad432da25592615"],["/tags/武俠/index.html","1253a77946a7143e26dfa46978d1ab98"],["/tags/武俠言情/index.html","e5ff4ff32f82bb43ca9ad222ab0672cc"],["/tags/漫畫/index.html","903eba4a1f2324e79306fedbfa0cb606"],["/tags/生命/index.html","7a6461be51e0c49b1e218d6303239bdc"],["/tags/生命/page/2/index.html","8b0d47adc3498a56fc71b9cc7469ba23"],["/tags/短篇/index.html","9d361218d99338fcb2fe5772a5ce9582"],["/tags/社會/index.html","aa98d6bf2189df13e1ba353cb98557d7"],["/tags/科幻/index.html","3e6d62805eb436e0a2bd48ac09ea41f5"],["/tags/童話/index.html","a7a92142aeb452e98f6c7c39fa64f937"],["/tags/競爭/index.html","21654f68d01bd59508aac089d1c72f0e"],["/tags/自我/index.html","c64e7868aa924e6b66a76f55928c28a6"],["/tags/自我認知/index.html","349b69e7755b55876a3f623e97404adc"],["/tags/葦舟ナツ/index.html","ec30bec5af5e3268b290c5d9bd4bdc18"],["/tags/藤萬留/index.html","15c3e0392f69db511a453a0284250bd5"],["/tags/親情/index.html","8090d24c03788afe57754581702901cd"],["/tags/雜項/index.html","71c1cb52a077e6675fc192587c648804"],["/tags/電影/index.html","2fb862e0fd3d4c8a3838668e3b2c36e7"],["/tags/電影/page/2/index.html","4e71b6d061344010fae66c58008d88fa"],["/tags/霸凌/index.html","5cbc43f565961081cc718fb3751ce34a"],["/tags/青春/index.html","2375ab02de901951362295c474c858fd"]];
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
