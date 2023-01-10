/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","1dfd32afc7b43d46c31625f47a849fd6"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","515ef2700709651228d21785c954fb7f"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","fa587cef930e8246a96035b055bdd472"],["/2019/12/25/Review/無法計算的青春/index.html","a49c18ee6b732db85c941708ff7af6bb"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6936e4082e0efd88cfecfc5cdd8b4a17"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","d01ce4b34533d9ccc21c8da09436d0aa"],["/2020/01/19/Review/下雨天，不上學/index.html","3d5a98262001a5e5d2bc966437ca370f"],["/2020/01/26/Review/三日間的幸福/index.html","2fb1ca56743a81f561d645e31cc99702"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","20f580e31cf7ac17708aea7c4d0c404b"],["/2020/02/09/Review/青春期超感應/index.html","5822526aed90984b52083bcf348fa320"],["/2020/02/15/Review/又做了，相同的夢/index.html","5035fbf4cf6077f9252d7e5ede906cb5"],["/2020/02/22/Review/回憶當鋪/index.html","79b12cf37cdfea0fe3d90197827ea0c2"],["/2020/03/22/Review/不適合自殺的季節/index.html","7076971efd0d53ebda959fb2951f9595"],["/2020/04/26/Review/我們都無法成為大人/index.html","a54592fc9c4b749a48f67850ae8b5bfc"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","0856b0ac332773c61fa8e2ab981b69e7"],["/2020/05/17/Review/人間失格/index.html","ef13973c457b89c1ffa4d74dc0784ebf"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","48d10d4e5d2531e9dc2e48493474d0ac"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","8874233736d2952336f480a938079e56"],["/2020/08/01/Review/銀河鐵道之夜/index.html","0056e9ea2f8bfc3b158061bc2d1f2fe5"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","3c6a9e7d8cdcdafc10a1b8cf25a879a8"],["/2020/08/16/Review/15歲的恐怖分子/index.html","ff681d7a555131656d390e3da84bdb8f"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","626ac0e6b708023b88c96e7e134d92a6"],["/2020/09/13/Review/羅生門/index.html","bcd1e1dcc83415da9f2436ede7155d18"],["/2020/09/20/Review/闇夜的怪物/index.html","56d54c900fcaba184239cc77facfe3ea"],["/2020/09/27/Review/14歲，明日的課表/index.html","feb746f31ca78c7d5a0f5de9c8fdc72f"],["/2020/10/04/Review/致十年後的你/index.html","d0c548890d3c7a81bcd3a02882ffbaa2"],["/2020/11/08/Review/滅絕之園/index.html","3271cde06cf9b37e26b4e78a9fc62e6b"],["/2020/11/15/Review/將愛拒於門外/index.html","160a5ccfdc86e4a01a87078bc9ccd05f"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","506a69e702486ddb969acdb4e9183a79"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","b0706a96181aac297c990d30fabb849d"],["/2021/04/22/Review/道印/index.html","692db69f439c92157ed6c375b9a97280"],["/2021/05/03/Review/戀入膏肓/index.html","fc0a6fdd32f37646f7f246da0fa00138"],["/2021/05/10/Review/Dice/index.html","2fc3d33fe932702854854141f6720088"],["/2021/05/15/Review/魔女之旅/index.html","329d611dd38fafd03fc686f91cefcfd5"],["/2021/05/28/Review/戀愛寄生蟲/index.html","0030652ac9f2a6d497df688a8d8579e6"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","cd621d126a3aa708b90071410f338e0b"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","d9e3d7cedb123c49b01599e6e3cd9b68"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","a571a33712a5170f1d66ebacef6fccf3"],["/2021/06/05/Review/流浪的月/index.html","03d9291fc104471ad61e2659015d601e"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","003714ed0501dadc08ef90a379c8ab61"],["/2021/06/13/Review/第一人稱單數/index.html","13e9493a688692a87a981027baeb4b34"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","7ee6f0e8086e992c57507863549f1c8c"],["/2021/06/16/Review/願你幸福/index.html","e5bd241f226899e2d2671cac59e3d21a"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","c24fb922205162a8fe07fae188df44ff"],["/2021/06/21/Review/神隱少女/index.html","501a64648f5760a8b7c7cb056508e9e8"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","1050d5d425e0ed58cb56ab16de9c2637"],["/2021/06/23/Review/天空之城/index.html","86aa58ffb9cc36945869bbdca1422883"],["/2021/06/24/Review/魔女宅急便/index.html","2a8038e55db9ccbb5a397860bb620462"],["/2021/06/25/Review/借物少女艾利緹/index.html","094aa720098c7f5c29364116d0574daa"],["/2021/06/26/Review/魔法公主/index.html","eda81c7f1f89835e2a0e846ef9d25548"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","8ab45a36d5e97a939bf1a9c60dee75a7"],["/2021/07/04/Review/飛雪與劍/index.html","06d2d537b01b2d65cfcb714a057de505"],["/2021/07/09/Review/地球防衛少年/index.html","50d22f7fb5148f054a608248ea8752cd"],["/2021/07/12/Review/Angel Beats!/index.html","865313dba8f598464fb905eba0de3678"],["/2021/07/13/Review/Clannad/index.html","dba39255a8880ee432dc4f6da5806860"],["/2021/07/15/Review/AIR/index.html","1a94c3f1c0ebe6ef82368cee06e79aca"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","51bb9b09f15355e7c82600f7526fd2d6"],["/2021/07/15/Review/螢火之森/index.html","ae210319869b93f6dce36d7719bd83ac"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","cba6dde091b67d8e9c185387d50eb7c1"],["/2021/07/17/Review/奇蛋物語/index.html","8617e65a4222d93347447e94a67f59e3"],["/2021/07/18/Review/Vivy/index.html","41209a3e1655471c887039e3c9e8f995"],["/2021/07/18/Review/請妳消失吧/index.html","13ce0a53ea7099c544d5ea5b37f7e4db"],["/2021/07/19/Review/漣漪的夜晚/index.html","6a0dcb612a88e36bc92a02f57abf715c"],["/2021/07/20/Review/月色真美/index.html","66e9aca5d689f8280be56ceace679d1d"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","f54923cedb8c03deb9623060d5435956"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","9c26690ebdfd65c1b6a2d5cfe28497f5"],["/2021/07/22/Review/罪惡王冠/index.html","0e003ee7cbdd69c0970e3739a190cddf"],["/2021/07/23/Review/弱角友崎同學/index.html","4f7bc3941d5e4210ba5984aaed7a7e7d"],["/2021/07/23/Review/惡之教程/index.html","0dd079afd9fea22adc8cab2fa57a612b"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","8abe9cad4e1438a881cb4f12cd2fe1df"],["/2021/07/25/Review/魔王勇者/index.html","aa9cd7a9339e8f890666ccdf49937171"],["/2021/07/27/Review/一年A班的怪物/index.html","894714b17a8605d503e2d90d25da311f"],["/2021/07/27/Review/奇巧計程車/index.html","33d044f293db2f37537150d2a377908e"],["/2021/07/27/Review/專情的碧池學妹/index.html","1b91a2e6d7b1af031931aee4bbc5016b"],["/2021/07/29/Review/只有我不存在的城市/index.html","dad042c92b35efb6611f18642886f8bd"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","f20fc0793fb614caf60d2530aa120f5b"],["/2021/07/30/Review/可塑性記憶/index.html","1adb59100ca37b928cbb336674970fa1"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","38c9e41d2e26033f6aa82ecc364dce3c"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","c4fcfe4478763890a159a53825756fe0"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","9f52d92c82c83650e720c69cce70f3b1"],["/2021/08/25/Review/清戀/index.html","b92b8b9f4670caa2859bcc2892f3f2dc"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","331aecd82f453ee4d4d7a7a508e1fb7c"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","9bf172aa6f368ed4b611e24268873dea"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","dc25fdf966e43694c2915532a4bfbc02"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","4b86f76e6ad464b685aa1373142b08df"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a38481834b26c3f678469a54cf6aa2c7"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","43f69f9e9c1b32f86f626c0068582f23"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","1433d2caf073477b851f34046a894d1e"],["/2021/10/16/Review/龍與雀斑公主/index.html","e91e4f66fe75e2cb80d51c3a1d492a08"],["/2021/10/19/Review/孤狼不想開後宮/index.html","1b475fc56e90d23aeb35c4f7ca215373"],["/2021/11/13/Review/徹夜之歌/index.html","2a78e9181e22c08fe2a9e392f2d522a8"],["/2021/11/24/Review/武煉巔峰/index.html","cbcd3c97ac29ebe338d8b2d346c37c6c"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","36135f03c1da77ca940952ed2ea661af"],["/2022/01/28/Review/神醫凰后/index.html","9ccc1c4a278804c81d77e8e5242617b7"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","394aaafff6264c6e1cfd29c4236e7791"],["/2022/02/13/Review/夏日幽靈/index.html","542f5613559773702f022b4bea912795"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e95842d910fbb1d917cbed5b8f534a66"],["/2022/02/26/Review/賽馬娘/index.html","e757ad69fac2ffcb8a43cf6b45a634d9"],["/2022/02/27/Review/大欺詐師/index.html","bfe224a065e01bd68bf2b268edc1cfc4"],["/2022/02/28/Review/前輩有夠煩/index.html","dc212d9eb9685543f69d3bd5695b3e46"],["/2022/02/28/Review/碧藍之海/index.html","1c341b51895c7642ed83f4c41b8c1a4f"],["/2022/03/05/Review/落第騎士英雄譚/index.html","a0ff6ba0d413a6017ccd722dbadd4a0e"],["/2022/03/06/Review/Another/index.html","7183a71b4e7d515d37ded14c94e28429"],["/2022/03/06/Review/入間同學入魔了/index.html","d58449807d6696ed3dea0bee22271ebe"],["/2022/03/18/Review/再見宣言/index.html","31f3d4f64a61db53fc7e78a8ac3738bb"],["/2022/03/23/Review/生若冬花的妳/index.html","ab1136a9495d7fefd56a8f47d19f61c1"],["/2022/03/25/Review/天之弱/index.html","136a84cf383b60729bf45142b74c24ee"],["/2022/03/31/Review/滅了天道之後轉生/index.html","26cc96138f10c40f899ba2c8aa056464"],["/2022/04/30/Review/泡泡/index.html","e5784f43230bbfab5db721f55f5718fe"],["/2022/05/04/Programming/Dynamic Programming/index.html","97c173cc50c28b36ac41de424825a251"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","234fe594893894ca8c46bad57f74bd78"],["/2022/06/13/Review/偵探已經，死了/index.html","44b4f43f0e52a3b51bb9459224612222"],["/2022/06/14/Review/黑色子彈/index.html","ce7904307125a89f5a988efcb61aec02"],["/2022/06/15/Review/黑白來看守所/index.html","cbd1604f2c356f680c5bc18ce9a1678b"],["/2022/06/16/Review/虛構推理/index.html","3a442302d5712ffe0a3b22de734a1611"],["/2022/06/17/Review/戀愛與謊言/index.html","3283c20453c3da065e05ded49cf4c161"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","83d99a61d182f2b1657eeae7f500aadf"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","d58113a18aee30d958ad89f2fcb0306a"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","391fc10e2c9c7d0d71677fb36185602c"],["/2022/07/03/Review/Hello World/index.html","76e4e66a111a66b1832e84f70f1ad0d9"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","10eb00e483f04587b2a5141dd19af738"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","536c1fa967c47e5e7b96321d746fd122"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","3fa48716364275d637a280233864e1ff"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","0a3a06bcf09b2e0d568cb63f557f95fa"],["/2022/07/16/Japanese/動詞分類/index.html","8635ca109feddca8ab978c6ec3ee47e0"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","ef9b768ad0f3f3c6a245336de4ea1e4e"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","9eb31e46db613a1baf2dd71b23f6c18d"],["/2022/07/17/Japanese/音便/index.html","a67c37fcded6d58d7e91d2f5e4c113e5"],["/2022/07/18/Japanese/動詞 時態變化/index.html","518d7f58329118d548825fbb1eb30e00"],["/2022/07/19/Japanese/助詞用法整理1/index.html","d5e650b9075c6b49f18c1f728fb52146"],["/2022/07/26/Japanese/助詞用法整理2/index.html","c9d0cd2032e5f01d5eb301d36abdee1c"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","d541afd918bbef5d46bf4aaa4dbf8c99"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","f48c9b9b07dcfaebba86f7d462fed845"],["/2022/07/30/Japanese/疑問詞/index.html","6ed6a65abdf6ca04886255d292d10b9c"],["/2022/07/31/Japanese/助詞用法整理3/index.html","661764b3f2bd512e0cc9263f2e9854dc"],["/2022/08/02/Japanese/副詞整理/index.html","2e5d63ffe3d303cd03570da5e320af5a"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","77faa81a9256fd15e28731bada1aa647"],["/2022/11/04/Programming/Data Structure/index.html","50d6dd4a489a86a00b60ae66d066ea24"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","57226dbadde1e02330ee3a449761c810"],["/2022/11/22/Review/組長女兒與保姆/index.html","1a766fdfa1587a9fb2c2fac7f3ae31f3"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","6c880127cf7cd6af53e8022a19cbef87"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","69c02e7cb41bd78d06975956b9441125"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","679c6a5349561a4150cd54c4bf088258"],["/2022/12/31/Lyrics/一番の宝物/index.html","4e84646f8736670c75e0315d6b6a8b7e"],["/2023/01/01/Review/あの夏が飽和する/index.html","4b4a32dc8af935afa2d5cfc42da804da"],["/2023/01/02/Review/孤獨搖滾/index.html","81300f2eda7619e5d01026f3f79cf3ba"],["/2023/01/02/Review/藍色監獄/index.html","a22441644d82812267fbd1a0844bf70d"],["/2023/01/03/Review/來自深淵/index.html","fe5ada2635cea4ac681a83b03a9c2c35"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","f9d36f55ecfb9cf9e2d13ca689769597"],["/2023/01/05/Review/處刑少女的生存之道/index.html","0285069e6cba745c99504e104e664682"],["/404.html","5c63260240493e3b0e8b36dfde78ea28"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","76271ce414baf26ceeb696f5ebcfb662"],["/archives/2019/07/index.html","3f7f091ce14f3cdaba78123747813ab8"],["/archives/2019/11/index.html","2f259935525c2d6c4a64607a0dab57d4"],["/archives/2019/12/index.html","783098ad825c6e4872b0b1ad91d8720e"],["/archives/2019/index.html","a0d54b002fde6cbce85ddd8995667345"],["/archives/2020/01/index.html","a2686adbf9049ba59940438744ac1b1e"],["/archives/2020/02/index.html","70a25d9fc93d664a4f79b6261e531ad0"],["/archives/2020/03/index.html","d3d9d689dc6e6af9135b4fdd66bd3ee7"],["/archives/2020/04/index.html","eeda4bb69b20218715e3f9dd22b6f51c"],["/archives/2020/05/index.html","488aa2535bb5c7e05bdba24f8d521e7a"],["/archives/2020/07/index.html","79c770527cb61d094a3d7012985c323d"],["/archives/2020/08/index.html","7c15cc99b96378fbc93c468c325da6cb"],["/archives/2020/09/index.html","f7de22a9182319fcd1702f2c923b1ddc"],["/archives/2020/10/index.html","fcc929731ccd92651f258880b7400de8"],["/archives/2020/11/index.html","f79149a8bb40c8ee2cf928fe2a9e53fa"],["/archives/2020/12/index.html","e236c644e70a6fd7dc162f61579a893e"],["/archives/2020/index.html","107c5311e683fb78d64861ec46df65e8"],["/archives/2020/page/2/index.html","8cc577578cee2d0094856fb94422096b"],["/archives/2020/page/3/index.html","ad54e3bf706829a19318766455ccc67c"],["/archives/2021/04/index.html","2a84bf5192a7ce1164e68db84bbd72df"],["/archives/2021/05/index.html","7a0102f83c7af0fb79cf572f20395f1c"],["/archives/2021/06/index.html","b93b888f0443b6ae8d84d0c5d6f7d1af"],["/archives/2021/06/page/2/index.html","003c6fa0e516eb8f8da2f1110ec804d0"],["/archives/2021/07/index.html","a6e19559053dbb5a21268696b6888070"],["/archives/2021/07/page/2/index.html","a660899896141b5a2f8bc526f60de373"],["/archives/2021/07/page/3/index.html","5b277a6d5a003b2e5a58051519b4acc1"],["/archives/2021/08/index.html","4e953f78dc8fd7721ae97138e68939b6"],["/archives/2021/09/index.html","ba5dcdf1398150e7f5f3f331ad565fcf"],["/archives/2021/10/index.html","b803df0681151a8eb2698086d1b91351"],["/archives/2021/11/index.html","1449efdd3e1e30ecbfe5c3b3fd4b85e4"],["/archives/2021/12/index.html","4a3cbb44143dcb6c303c8a31b3cd8591"],["/archives/2021/index.html","2b374effc7e83dcc1e26d3f4314f8f13"],["/archives/2021/page/2/index.html","65bc2b3336b27f296a91c500b8a8275c"],["/archives/2021/page/3/index.html","9013c2481b58cff69c29e0518dd5254f"],["/archives/2021/page/4/index.html","32faf33262db1c86b22a6f99424e8712"],["/archives/2021/page/5/index.html","089345887978a8d92b435b895375a8a0"],["/archives/2021/page/6/index.html","023bd57127442947786b11443590287c"],["/archives/2021/page/7/index.html","eb6f48c001edb59d71e2f60903ce80f6"],["/archives/2022/01/index.html","07875e5e38e9e8be74cd8c10a84967c4"],["/archives/2022/02/index.html","b003b95723f23c676c32f8f3ab33e55b"],["/archives/2022/03/index.html","57f691a89673294fb99945d48c712b8b"],["/archives/2022/04/index.html","4d2df6fba2b4b60faf506c50db2c1fca"],["/archives/2022/05/index.html","19d4951eda26bbe2938bb7f6ce8e95a6"],["/archives/2022/06/index.html","e9a20d35f222c093938148ee6f57d5fd"],["/archives/2022/07/index.html","139cb03a0b010b4acb4e9985a2a1082e"],["/archives/2022/07/page/2/index.html","9642eb0517ab8929adb60df18056398f"],["/archives/2022/08/index.html","13dce44057f477381c4af43f14855d48"],["/archives/2022/11/index.html","e06e4a2d86bc868d77505827d102c45c"],["/archives/2022/12/index.html","fa696eadcccb69d9fa01612648fcb78a"],["/archives/2022/index.html","e841e6f46d736bcfb7e963b3fc10ddd9"],["/archives/2022/page/2/index.html","28a83feb3c7bfebf91922aa038f4c0ea"],["/archives/2022/page/3/index.html","61aa4abcfe05045b47cfcdf560433d4e"],["/archives/2022/page/4/index.html","1bedcd253a1a65d589d3bdd6ebcf4e33"],["/archives/2022/page/5/index.html","399cbc5a89dc08137e4cf397408a3260"],["/archives/2022/page/6/index.html","b8e540c27f3f3beccf7c8d2d2679ea3e"],["/archives/2023/01/index.html","46d1a24b591cf3fd19c3b97c1d32baff"],["/archives/2023/index.html","88589cc81a4affabb99833c5854f4489"],["/archives/index.html","5a953f45f56e730a1ff40fcac52b66ed"],["/archives/page/10/index.html","b18c50bb5fb401f4882ceb73ab6c5f0f"],["/archives/page/11/index.html","92e67f00d3a002ac5e75ba62e8fe36c3"],["/archives/page/12/index.html","75bc527362353227c280e8f4312fb6ec"],["/archives/page/13/index.html","9004ed439ab791eaf9998178cfa8aa9d"],["/archives/page/14/index.html","84a11bba9eb5b1bac0483db77758e810"],["/archives/page/15/index.html","ccf27dbe110fea764dbbe60fdf66a238"],["/archives/page/2/index.html","a23792e28ac87b06929ee744c3f5d3c2"],["/archives/page/3/index.html","a636c6d782ecec3f10b66921460c3d87"],["/archives/page/4/index.html","21b763fa8c0a05ee524fe9278be19828"],["/archives/page/5/index.html","5d2a1e7ac706e1249b465d61a680e13b"],["/archives/page/6/index.html","6863d9e2f4448fe5d68a61ff6a4d112d"],["/archives/page/7/index.html","4231ec2fbff4242398fdbc936a843967"],["/archives/page/8/index.html","4450c44bd7e8f104506b4559ae0412b3"],["/archives/page/9/index.html","c8c7dbf123c468a21d71aecb53367863"],["/categories/Lyrics/index.html","52190691b58b7d4a50fe31dd356c29d7"],["/categories/Programming/index.html","aea1aa493bcae2f42e8ee25de56dc0bb"],["/categories/Review/index.html","16c29bb5a23018ffd9ef14819883a542"],["/categories/Review/page/10/index.html","5d41e2f1c7062f6a5b7b178de51cf68b"],["/categories/Review/page/11/index.html","966149b055c5cb6efab494e757fadf6b"],["/categories/Review/page/12/index.html","76d5c85eccf5846bbd85d08c50669a01"],["/categories/Review/page/13/index.html","e8b54d0f1624e1a0961d83eb725aea81"],["/categories/Review/page/2/index.html","8479d345c90f684070c409447787ea86"],["/categories/Review/page/3/index.html","1c811e55a86507139bb196cbecca7dcd"],["/categories/Review/page/4/index.html","6aaad7add1893cd0d16296f56b8b283c"],["/categories/Review/page/5/index.html","ca82f49f2467692a4f8183673b32b34b"],["/categories/Review/page/6/index.html","78b5a4f94dd9fbc9d6d93a263c05ea10"],["/categories/Review/page/7/index.html","0ba5f1d22810f1320732176cdf422fe3"],["/categories/Review/page/8/index.html","47273124950df094ee6ae55ec422eb46"],["/categories/Review/page/9/index.html","b54d9d30670f45742ed77dfabbdc0ed3"],["/categories/index.html","1f7eff9688016a24b517fa53f5d4ddc8"],["/categories/日本語/index.html","e9a3f395c9b3f1cbafed15eb4446c108"],["/categories/日本語/page/2/index.html","982011d00f37208ca0fe5b576e459a88"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bacfea8801ebb72a5541f788974cd726"],["/js/custom.js","2b7e785b857773766c776e2af8375ca3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e14033dca3467e72d9e26307784677a0"],["/page/10/index.html","35ca18f6658227a1adb0bcfba4127cd9"],["/page/11/index.html","3dfca5b87fe179202280aba8464dbdd7"],["/page/12/index.html","c59803d0728ff6b6789ba8ee220ffeff"],["/page/13/index.html","897d03c086755db68d26ba18b8e0b4c2"],["/page/14/index.html","635219a1b6167ef0786e495280027768"],["/page/15/index.html","621ac49cec5b83edbb45ada03eb01282"],["/page/2/index.html","b09ea20a6397c95ac9c881e01027974e"],["/page/3/index.html","55c38a21aea52c66d42ad0fa4fb3146a"],["/page/4/index.html","96e7cb4e560bb936cfe19bc507e45dcc"],["/page/5/index.html","fcf4b062bfcdc1c684dd3b7a2e0ff48f"],["/page/6/index.html","3586f89750bbb03412fe11fc2c5f7d59"],["/page/7/index.html","661ee9f1bdc0e8bb705761a2f89298b3"],["/page/8/index.html","b5ee4c5f3bfc2ca4374b28b21355b0aa"],["/page/9/index.html","0b7fec83245481a44c13e495b2082a01"],["/sw-register.js","851c234085f158e96e1649b349647181"],["/tags/10分作品/index.html","d3d0a10f3189b9f89a6bf03291d35b70"],["/tags/3分作品/index.html","1ae6ba21fc3ca4d2b0cb842400ad3c7f"],["/tags/4分作品/index.html","e46d60d3bc6cbb5f149841d123d4aac6"],["/tags/5分作品/index.html","ad550cbe09c7e3de5362172045364db8"],["/tags/6分作品/index.html","6dd77e8ef9dec06e6506864772ca5259"],["/tags/6分作品/page/2/index.html","488c125f7c8d31c83ee5862030bba497"],["/tags/6分作品/page/3/index.html","f526d8c2f7e3d7bfe9699cc208cb8f2c"],["/tags/7分作品/index.html","ce775b6958a1df804d63d3da3e2ebf1f"],["/tags/7分作品/page/2/index.html","295e2c266bfe1cadef77c99dab63de86"],["/tags/7分作品/page/3/index.html","3b8a8e20fbc7743735256be4d7702de4"],["/tags/7分作品/page/4/index.html","69b7e8f24e0a74d8758e90e536bdc29d"],["/tags/8分作品/index.html","a03017969120846731af2a7becd737f4"],["/tags/8分作品/page/2/index.html","90b2bb61cc3046f5199fe148eef9327a"],["/tags/8分作品/page/3/index.html","351172ab3c5a7091cbe136b23c96f599"],["/tags/8分作品/page/4/index.html","57b86cb62b57353b0c8741fc08662360"],["/tags/8分作品/page/5/index.html","8c189e41ac5f5f97a2558ba704698565"],["/tags/9分作品/index.html","c941eb65a14057e76663e2e5347dc051"],["/tags/Lyrics/index.html","f0e0a50faebde0ba67dec506066277a6"],["/tags/N5難度/index.html","0cb8654a5e57ea2cb1c5aac01a8bf51d"],["/tags/N5難度/page/2/index.html","17c9fbe6a63fa70a1f7552a4f78c18c5"],["/tags/index.html","fdfe07df77e1a3ea59570fa24d8a8158"],["/tags/アボガド６/index.html","11e4c4d9c33b744f46a5438c0f7a6f55"],["/tags/三秋縋/index.html","6bd56967294303f57b6b0109ae61174f"],["/tags/中國武俠/index.html","a24e6a157f034f5d1db078f8b334993e"],["/tags/中國言情/index.html","330124b7e1d9e792a02940eb0bfb709a"],["/tags/二宮敦人/index.html","bd7cd07a675d3ce31036ebaeb74cf1f1"],["/tags/人性/index.html","6bb35714f30100a8853def4647d0c177"],["/tags/人際/index.html","e729069bde7394353eeccc1e2652c6be"],["/tags/住野夜/index.html","7f9448e84b9ca038878c0564d49b8c67"],["/tags/佐野徹夜/index.html","97f24245fe3544f8b4ddf3029d4ffdb2"],["/tags/努力/index.html","fcecc63b0e2641b4a7186d48d66e3a28"],["/tags/動畫/index.html","353688a46351b5d3f5929e6678255b22"],["/tags/動畫/page/2/index.html","eed2764ed5cf74a5c6e2cbb933343eb8"],["/tags/動畫/page/3/index.html","bba199f7ab897e12972311d7d53b3def"],["/tags/動畫/page/4/index.html","319fb83b3abaea60324357e2f0c61e53"],["/tags/原諒/index.html","1dec44c59e7f632ae3f1a78f3708273c"],["/tags/反烏托邦/index.html","5a2d9f890057afe5d806dc3fac1d1981"],["/tags/啞鳴/index.html","0a752bc7df77467dd9738a02068e61d3"],["/tags/喜劇/index.html","1932bc45e818e6ec77118e32af9786c9"],["/tags/夢想/index.html","665486e5137c3d6e42a4c65b00e8a65e"],["/tags/天澤夏月/index.html","787440eb9116e4e4060137877c490fc1"],["/tags/奇幻/index.html","a78ae1e9a0ed4c8bda18c14ea7d886ca"],["/tags/學習/index.html","b97ccef968d7a75cd72ca09df8a82291"],["/tags/學習/page/2/index.html","57d67e494c124e364543f51d4eccf324"],["/tags/宮崎駿/index.html","98eba13f3ea239888bdaea786046ca07"],["/tags/小說/index.html","e6219511093b76418c0f647e21afe587"],["/tags/小說/page/2/index.html","bcf5736ca1c6f088f633cd5b8e6403ef"],["/tags/小說/page/3/index.html","a8fb816a6ade501f55ad6e563794ccea"],["/tags/小說/page/4/index.html","5591b557dc91b86e95867d53014c1eca"],["/tags/小說/page/5/index.html","bf92433b6fc6f2b5918703aa9b392c3b"],["/tags/小說/page/6/index.html","067b1bdd3feea93385f9b23469d22149"],["/tags/小說/page/7/index.html","3a8ed2f0d79c1dc3e7c7de7457b76e9d"],["/tags/平淡生活/index.html","9a3e9b07be10c34a21ed3b9a6e19bbd8"],["/tags/幸福/index.html","c3c5657d6fb9a70eff954da333b8af4d"],["/tags/志茂文彥/index.html","2bdf45ecaf57b3949ac6e34ae7d66fb7"],["/tags/愛情/index.html","772f539d3fe0376b14593f6f82f084c9"],["/tags/愛情/page/2/index.html","c5dff8b7b541b6666f200af745ca57c8"],["/tags/愛情/page/3/index.html","6104cbc1c6bffc6c23785acf96bdd9a5"],["/tags/感動/index.html","3c7f1941f58b0e95b6437fe8850e773e"],["/tags/懸疑/index.html","050810233e49927ec58e3140318692ba"],["/tags/懸疑科幻/index.html","7ad0a0aaa803f8093063674fb96a2792"],["/tags/戀愛/index.html","fc943a1972cff5221539c3ffbdc30c4e"],["/tags/成長/index.html","92c6ed10a766c487e9e173a47857826a"],["/tags/成長/page/2/index.html","5c2ade4507e412bfac5095af01a5707e"],["/tags/戰爭/index.html","e61f6fde241948f891cddae233722df9"],["/tags/推理/index.html","962a4871f37c93eeead184629031d3a8"],["/tags/搞笑/index.html","10a35745fac9166f243e72c4f5c974d6"],["/tags/救贖/index.html","b1c3dcf747ba478efb8efd094cef7ff2"],["/tags/斜線堂有紀/index.html","f98e93ae93f7c34beebbb5767f901cdc"],["/tags/日常/index.html","644b1f63676df4bfa08a1382bd703567"],["/tags/末日/index.html","2dee76b503f87b7e0b4ecc1f14e71f3a"],["/tags/校園/index.html","c7f4141b8d7a59349e7c22a73a46e5e8"],["/tags/武俠/index.html","404a3e6e96dc8081e49a41bb5807b9b5"],["/tags/武俠言情/index.html","cd05f76fc504395984f837889c6c807d"],["/tags/漫畫/index.html","aac2a853a11940b3bb6d3fad08ea8029"],["/tags/生命/index.html","5a13cc48ac5c02c8d764938200732748"],["/tags/生命/page/2/index.html","43036836079cb71b6bd21fa693d19152"],["/tags/短篇/index.html","e98d05aa29dd70f0a6ade8c0a62afdc1"],["/tags/社會/index.html","fcab55825c59633f5bc99e41ce42452a"],["/tags/科幻/index.html","1eefd4404d273ec49e4934b6dd166193"],["/tags/童話/index.html","93d6dc946b2ce3bed10bcaf955904fd9"],["/tags/競爭/index.html","a7c7065bf79ffba3e89fd9ccd1dad496"],["/tags/自我/index.html","83ca10eb75929fe0345faba343b909d2"],["/tags/自我認知/index.html","3ff5a4b24691319719d06e1b8d3d4369"],["/tags/葦舟ナツ/index.html","6ee3a13973902bd16cc9a8f77eb29611"],["/tags/藤萬留/index.html","c61d4a751113921b0653c0ba94b8762d"],["/tags/親情/index.html","4dd23d6fdd9d152df18fc267565447d7"],["/tags/言/index.html","5903177e8ecf598362579f65e275fdb8"],["/tags/雜項/index.html","fb7358edf216bfb3143c9acc8c3daded"],["/tags/電影/index.html","d2b2dbfa44571e24165ed2959a64270d"],["/tags/電影/page/2/index.html","140a72905bb550e36f58650df3ba9276"],["/tags/霸凌/index.html","b7594a4f701159b5b960bc0386a49f53"],["/tags/青春/index.html","c6f62459d0ba9f3fdf5d71b7b1c28543"]];
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
