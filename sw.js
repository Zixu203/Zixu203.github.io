/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","c127a82aa0c9ad6e8836e32dc9ca1903"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","3856fd099d3fad6c17093ca6aa9e27df"],["/2019/12/25/Review/無法計算的青春/index.html","6ccaec3ddb921947ec22ebf4377f8047"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","480cf389cd779830cac94d692a438a6d"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","9051cbcfd3a45299868777970c6da09c"],["/2020/01/19/Review/下雨天，不上學/index.html","d73800a3bd5101091411b1c98b25998a"],["/2020/01/26/Review/三日間的幸福/index.html","65d9253aa4bd3b59b0f06422c3528799"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","6a8f80afc3707fce24ad8f84a367b72d"],["/2020/02/09/Review/青春期超感應/index.html","b28e9204257623ddaafce7b98171ff5f"],["/2020/02/15/Review/又做了，相同的夢/index.html","cf65b2fc1ae38e823152464e0cff3a1a"],["/2020/02/22/Review/回憶當鋪/index.html","0a9c5aed069b799f745c63e54390ea20"],["/2020/03/22/Review/不適合自殺的季節/index.html","88bc87b8ebe2ab80352137437b22fce8"],["/2020/04/26/Review/我們都無法成為大人/index.html","57cb9bbef9f54454bbbe149ab5de4955"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","3ffabe3e3c8dee4dbe9ff88c80c905b7"],["/2020/05/17/Review/人間失格/index.html","f232453ee9ed514ebb76f08c196a5fb1"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","06e20b51bb2035ce6943a9915e111bb9"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","3ce355fcc12603f667ea147065d62897"],["/2020/08/01/Review/銀河鐵道之夜/index.html","68e08f13c0c7199dfdd3bc0fcdcdfd0e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","1b815b374319f78a27fdd9ff9eae81db"],["/2020/08/16/Review/15歲的恐怖分子/index.html","1771f387fecc154341c163cbcbbce312"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","dcbe37b59a5a4f65937443505132e04d"],["/2020/09/13/Review/羅生門/index.html","da17928fb47df23b1732041aa37848c8"],["/2020/09/20/Review/闇夜的怪物/index.html","34693ad822506c5adcdad1f5ea9f8862"],["/2020/09/27/Review/14歲，明日的課表/index.html","9e69d4fcd9514a14ea7ac7d44ca993ae"],["/2020/10/04/Review/致十年後的你/index.html","82f189b6df35cba6bfce9f930d8ad01b"],["/2020/11/08/Review/滅絕之園/index.html","8d8f003d3a701ca70a48487f9ac36aac"],["/2020/11/15/Review/將愛拒於門外/index.html","7c6f48d15a84fe7f5d4e8c123939de11"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","ea3eae02d2cda004571e74f15f8915f2"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","10cb293b431a762dcf8239cc16db679c"],["/2021/04/22/Review/道印/index.html","119c4beca85968ec44f7bf4ddad51aa6"],["/2021/05/03/Review/戀入膏肓/index.html","f4e062298024cbe212f0422619bbe7a3"],["/2021/05/10/Review/Dice/index.html","bfb4f6774e4fade2077d725a820ad7e3"],["/2021/05/15/Review/魔女之旅/index.html","33ed31f66f926bb27223a4fea43faf8a"],["/2021/05/28/Review/戀愛寄生蟲/index.html","9b54a93c80588f00c4c7578ba2b172b1"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","1224ecad30e95b0670aad2f47b7b301e"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","243a1c63b8d26827b67316308ab11a24"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","60bba8133b063df7f4f98021dd02c316"],["/2021/06/05/Review/流浪的月/index.html","1c4b2620c3a261171bf4e904033dfbab"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","12bc49e559e60c50903e0709ab3b0a5a"],["/2021/06/13/Review/第一人稱單數/index.html","9567c655998773a145ae026254ecc46f"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2ea4611e2aa3627d800004fb6b6841b7"],["/2021/06/16/Review/願你幸福/index.html","f86eb4619a115e10fb6bc08ae9bda132"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","19f38bfd05cd5c4125c2868b6d554931"],["/2021/06/21/Review/神隱少女/index.html","d1db19a90b01d3939866fce66a4c5e5f"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","d063f1fd32eff6566217265c9f6cbab0"],["/2021/06/23/Review/天空之城/index.html","28235be4bd8e6fd34fd19b46e6070245"],["/2021/06/24/Review/魔女宅急便/index.html","dc7c1c26c7b488c21a9d8cc14d9ff8de"],["/2021/06/25/Review/借物少女艾利緹/index.html","d8c9e878910060301d2aa3b4a92f9236"],["/2021/06/26/Review/魔法公主/index.html","d6e00e0166278b1a87cdc2b0ebb1ef26"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","0400bdc242f6adc3c784fcaf9bf38cca"],["/2021/07/04/Review/飛雪與劍/index.html","a33ffd67adb81d1d62dcafdc7cebe752"],["/2021/07/09/Review/地球防衛少年/index.html","ac501879642058aadf381f284a850b4c"],["/2021/07/12/Review/Angel Beats!/index.html","3815592afe3b87e684e18a3615c20108"],["/2021/07/13/Review/Clannad/index.html","4056a189710e2c0eff8536285f705275"],["/2021/07/15/Review/AIR/index.html","d5bfeaec69f0c92843a16a0207028ba4"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","37cf0362d3ef810346dcb2168cfceb6b"],["/2021/07/15/Review/螢火之森/index.html","215166c45ddd32d2824e59d3169d984b"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","e5365711485abe9ba822457a910eb6c4"],["/2021/07/17/Review/奇蛋物語/index.html","bae49cfa98d2c85754971ae1093b6b16"],["/2021/07/18/Review/Vivy/index.html","4a9ab2654eac8d6f8a989efcbe68d057"],["/2021/07/18/Review/請妳消失吧/index.html","e10b7187f600b1fe9f675e3389b2aeeb"],["/2021/07/19/Review/漣漪的夜晚/index.html","9f56b072091a30731b869828abaf6e42"],["/2021/07/20/Review/月色真美/index.html","f1cabe0a9f5292393065f2442d1c3eb1"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","5f2161096129d1a2b4698660ad4af844"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","38926d9e1f7bffd3a5f5b9b63900533e"],["/2021/07/22/Review/罪惡王冠/index.html","76c795589de1d61fbb20963d22512498"],["/2021/07/23/Review/弱角友崎同學/index.html","f4a31f10257900b5231d3a90024bec46"],["/2021/07/23/Review/惡之教程/index.html","5ad299b3331579cdc448264d0b38782a"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3e29dd57d87a0c66b849ba2becd3aecf"],["/2021/07/25/Review/魔王勇者/index.html","07f5159828d6dc92439b094df16e301d"],["/2021/07/27/Review/一年A班的怪物/index.html","1f40c2158659415e4d5197a761381f2a"],["/2021/07/27/Review/奇巧計程車/index.html","1246e16ea977b8c1f48c4465e077bf5b"],["/2021/07/27/Review/專情的碧池學妹/index.html","7cf7223d005bf24c45b4ff6bd9ee8edb"],["/2021/07/29/Review/只有我不存在的城市/index.html","53488bade9cd774436e834ca57267e5a"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","7f6cfea6fd4f3e0d5dc374d5258e29c5"],["/2021/07/30/Review/可塑性記憶/index.html","3f89d6ff81b0217034df57f70efa5574"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","cb035064bc33a19cf28e0cbd9baf6628"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","8048e8995e8699e7f477cf422d81228c"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","c15793b308b2c43bf99b921ee3f7ad04"],["/2021/08/25/Review/清戀/index.html","60cd05cd7168f3b0724e153deead3d79"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","5449fd60a603bb1ce6f18fa890832ded"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","afc6aa7377d06649b432b456ae0dee7c"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","79415a00780a5006214d28ff2ae98544"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","cba4fe586bcc8c1e200a0bada6b35ed8"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c36e08594034d0251714cb790d7e215f"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","9869e78d656138311a71a184273dba97"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","529900f81cece1591d4298b5f4431c0c"],["/2021/10/16/Review/龍與雀斑公主/index.html","9bd0a81f29629a123cbb5a04c5129bae"],["/2021/10/19/Review/孤狼不想開後宮/index.html","81dde3e3e5ecead2f6d8321cc91e2e0d"],["/2021/11/13/Review/徹夜之歌/index.html","27e7718aac83cc47489f98939a59d0e5"],["/2021/11/24/Review/武煉巔峰/index.html","4daf40d54ce03486cdab2c4f993c3fe2"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","8b240d7b9b3e3a1565895cc7b3b94d9f"],["/2022/01/28/Review/神醫凰后/index.html","ef6e65e116a460847150ef2eddec974e"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","125b3b8d914eb1cee0ef7e2b142d5e20"],["/2022/02/13/Review/夏日幽靈/index.html","af176a4a6923757627d69ff4a9fef8ae"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","38dc10ebecb7dcb7d16205868039a427"],["/2022/02/26/Review/賽馬娘/index.html","05e2e9e83afbc76354584d39dfdf1ced"],["/2022/02/27/Review/大欺詐師/index.html","f5fc77d47adc94fdce8fd881ee22c368"],["/2022/02/28/Review/前輩有夠煩/index.html","a8261b155b84a7ace58fc3adf608d2d0"],["/2022/02/28/Review/碧藍之海/index.html","d461b9fc196ce82497cba4bb254d23d7"],["/2022/03/05/Review/落第騎士英雄譚/index.html","c9decd53d55c01690ec252829ada0931"],["/2022/03/06/Review/Another/index.html","21e083233fe34612b355dab9a443784d"],["/2022/03/06/Review/入間同學入魔了/index.html","6ca503ba309a39c99c3d2b182e44a193"],["/2022/03/18/Review/再見宣言/index.html","3abe5b3ae56912e86a336dfa8c1442ce"],["/2022/03/23/Review/生若冬花的妳/index.html","4ff4c39a4c52713582ae5d097dcd51f6"],["/2022/03/25/Review/天之弱/index.html","e5c53b3904f4d2728d2e0d47fc85c862"],["/2022/03/31/Review/滅了天道之後轉生/index.html","58a1e9ccac1e75d44d686fcedcaa7d27"],["/2022/04/30/Review/泡泡/index.html","a942f1706be1921b294039c9ded86e32"],["/2022/05/04/Programming/Dynamic Programming/index.html","016a07297ea82a424133e2d42048aada"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","116a4b9f8916e4da14422d76724c49a0"],["/2022/06/13/Review/偵探已經，死了/index.html","6f887da6b5aab1e174fc1a89efc3a777"],["/2022/06/14/Review/黑色子彈/index.html","b39bd3de6d53c70e55ccb504426ba338"],["/2022/06/15/Review/黑白來看守所/index.html","c36641ec8f6117a2ef3fabf083740da1"],["/2022/06/16/Review/虛構推理/index.html","101417704c4c91b26a5c5c2b83b1f7c8"],["/2022/06/17/Review/戀愛與謊言/index.html","de1dcd475e4438e9d049fc73e930f6c1"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d597b1d18b8d74b2790d94d5d3d6b712"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","15d1ac57965fb8b729dad685059d71c2"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","dd74ae5cbc186c3446082a2c3f633df4"],["/2022/07/03/Review/Hello World/index.html","b07d0a693efc0758c02b9e862831a659"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","eb86daccc440e6251d36bdef0e3d948e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","ae4463198f9fb72782ed169704decfa4"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","8a57c1f4dd9ba3a84a9ac87d51205ac6"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","d3d698713dd97c54e5f6233f78adb290"],["/2022/07/16/Japanese/動詞分類/index.html","41a24d0888fa5975c1a24d7f624806ab"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","2e8fc08defc663e14d3bc3cefbe8e5e3"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","3583ab3c23e08e8dcc79849365a2b338"],["/2022/07/17/Japanese/音便/index.html","a2e6b58cf50852e8b014a88e36a6fdbe"],["/2022/07/18/Japanese/動詞 時態變化/index.html","56a12dbc598f1d1e523abf0ec7ab9b2c"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ba8a998a7464e98a5ba3807d674235a5"],["/2022/07/26/Japanese/助詞用法整理2/index.html","9464df408d062d2d76bbc98fe76654fc"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","9ef1b4bf58c76bd132a91a82dbefb4a4"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","c04052dc85ee2b67cfbbd9fbbe51ce13"],["/2022/07/30/Japanese/疑問詞/index.html","592db15d22f3906954a9f3fa0bdeefeb"],["/2022/07/31/Japanese/助詞用法整理3/index.html","a0b82fb38625663cefe047c0050c3a13"],["/2022/08/02/Japanese/副詞整理/index.html","f207b2fcde920495a5c47585b0ee3b1a"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","dee13cb76b69eeb948b0a23729e4e5c3"],["/2022/11/04/Programming/Data Structure/index.html","bde5af348b09708cab0858f7f6dc5f8b"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","ce69506bac65cc2f13ec4e5dc9dcd0bd"],["/2022/11/22/Review/組長女兒與保姆/index.html","0180ca87a54455513e5364733206c392"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","0ddaa714c2f5871014d4e86d32f91f98"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","901c853d90d1ef26b25414ca1014a011"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","7d36d3e7e55030d6318322d0f88a3c74"],["/404.html","112828ad3d5cd2d41dfc71a58b596f55"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","238333002e8193ae07af98d7ad60fe38"],["/archives/2019/11/index.html","47a971add8ebbb6a916ef35e6637b0d5"],["/archives/2019/12/index.html","b31e376c7501222eb26b156478f5d556"],["/archives/2019/index.html","121728bc2d4e1a723d5e2bd2ad13011d"],["/archives/2020/01/index.html","4a638bac207c258d7969aa6163f1553d"],["/archives/2020/02/index.html","aa5fb4b7eb5b6b7607ef4d2f7d746fd1"],["/archives/2020/03/index.html","24832e235036aa20b65b993641c06340"],["/archives/2020/04/index.html","1c39e9890a0cc0034c9b392de33ff288"],["/archives/2020/05/index.html","21b82dcaf7a002f55f71b6869a0663b3"],["/archives/2020/07/index.html","e4bc448c945a0e12165c8d82c6ce700d"],["/archives/2020/08/index.html","96d91ea75b1bcc76ccaed66a4ac4b97f"],["/archives/2020/09/index.html","da81836a8efd4a716d0e1cf16680c066"],["/archives/2020/10/index.html","082455884b7a69f6a7ca0fc338f077ef"],["/archives/2020/11/index.html","6ddcb32a57d7a639faa3666b19f12cc5"],["/archives/2020/12/index.html","6632d392e5c621278557a74338452cd6"],["/archives/2020/index.html","158ab31128bd2c4e53d4c79fbf6c79be"],["/archives/2020/page/2/index.html","15573ee532771e94d2da6e13e97fe471"],["/archives/2020/page/3/index.html","c200a0455d75f57bdee1d7a752e1bb56"],["/archives/2021/04/index.html","21fe335cebf83eb78894962f1b69c03e"],["/archives/2021/05/index.html","efde5d0c27c79e846549daf2a2b4a05e"],["/archives/2021/06/index.html","18c8527367a026e0c7b5a81ad525abf9"],["/archives/2021/06/page/2/index.html","693fcbbe55a0c8b6a49c2de85fba48bd"],["/archives/2021/07/index.html","a9880f0d42a67e7a4b528e53e23476ed"],["/archives/2021/07/page/2/index.html","45cac7d206a0c3df684939e142ebfaac"],["/archives/2021/07/page/3/index.html","9826e4e4eaf658dbbb9997dd29360ff3"],["/archives/2021/08/index.html","4b8879cb37a5b71be4b9de9c2fa0d2fd"],["/archives/2021/09/index.html","2d4d123fc6d733d1912612ca6943a53a"],["/archives/2021/10/index.html","ed2fa8435007d3b2c92463d7413f93e0"],["/archives/2021/11/index.html","35829d964ff2bb9fb450ac56de370b08"],["/archives/2021/12/index.html","4bb8f1142642bd15cef25dd5edab5f77"],["/archives/2021/index.html","c926bf6fe7a8e11e81f6e819fb646b84"],["/archives/2021/page/2/index.html","00f16888ba7b320385ff412da0fc0230"],["/archives/2021/page/3/index.html","45ae99ec7f50ecb26e081890dec7b8a2"],["/archives/2021/page/4/index.html","33241fa6c782d8e9692abf2f5a04737b"],["/archives/2021/page/5/index.html","f0f86dd55092b8f8bbcf102d4544516e"],["/archives/2021/page/6/index.html","6f19525190750a14573ffe0edd3a26de"],["/archives/2021/page/7/index.html","d2a8490a328deece771b07ca2897cd54"],["/archives/2022/01/index.html","cc6cac9b59cfbe10ced66ca8378d3a38"],["/archives/2022/02/index.html","3513fd44cf62711776ce9edbc5753d2b"],["/archives/2022/03/index.html","d26cb05663a34fc5706245fd3055b020"],["/archives/2022/04/index.html","37426e6bad6484bc441f2bdd4f916501"],["/archives/2022/05/index.html","615e93dcf702e09405a0199cd322f4f8"],["/archives/2022/06/index.html","fc69313bab55ce2c68e6e2685b65cd60"],["/archives/2022/07/index.html","7be5f1e7b71e41b1aa899ed0aa7595dd"],["/archives/2022/07/page/2/index.html","d07d9ef0e86927bf228b2f0e6d988c4c"],["/archives/2022/08/index.html","9670e64b7fb896910a3be94dab5de30f"],["/archives/2022/11/index.html","4535180d52b25a3b287207d6da5e8add"],["/archives/2022/12/index.html","6c07c25e4484364928e8712760ab61bb"],["/archives/2022/index.html","945e665d45e8daacfaab05d5fa1a0e54"],["/archives/2022/page/2/index.html","c61eae7d87db6389ff6976558e15bebe"],["/archives/2022/page/3/index.html","59fd4888c27c41d82b562a48e0f7dfe9"],["/archives/2022/page/4/index.html","f556ec2314f98050a47ca053926e1049"],["/archives/2022/page/5/index.html","6e3b56166a9be9d10dab358b0abe1ad5"],["/archives/index.html","d18a4d4fb73fbf9d4b3c0e6d46ce82ed"],["/archives/page/10/index.html","2e7922b66b979564304611a6e3c46174"],["/archives/page/11/index.html","e84763c51a8180b1996ed1c13e9a67a1"],["/archives/page/12/index.html","afc7d180bf6ab37242f8c6435c11b9df"],["/archives/page/13/index.html","61e67ba7e69bf2d6912a0a20eea36c10"],["/archives/page/14/index.html","b9da4a817a4d3c256e8592239b262d67"],["/archives/page/15/index.html","62dd80040c2003ec15d16dcf84eda123"],["/archives/page/2/index.html","fe54e1361413b8c07654e849cd803bb2"],["/archives/page/3/index.html","3ec9a631de173aa813da8ac52e1ba065"],["/archives/page/4/index.html","71014401bedbb5042d3e5e73906b5993"],["/archives/page/5/index.html","a6dd75337090fe7978b11f45a64e8723"],["/archives/page/6/index.html","8dd7ce0a09bd452adbddfb6ba59a27cc"],["/archives/page/7/index.html","5b2ef929ebce2f52e5bd8ec4b3fcbf22"],["/archives/page/8/index.html","fc9dcfad14a3d9013046897bc1c3f18d"],["/archives/page/9/index.html","0848c684bf0760249768cd0bd72d3ca3"],["/categories/Programming/index.html","0aaeb6390da670956a9e9bbe700940ab"],["/categories/Review/index.html","8fdd8d817b90c158bdbc8cd16162b473"],["/categories/Review/page/10/index.html","68db15e77723b53523cdb104cf4081d5"],["/categories/Review/page/11/index.html","465ba537162d83e4526cf0cc1fe1f45b"],["/categories/Review/page/12/index.html","384a4a382f81d96e15c50941c2600f41"],["/categories/Review/page/13/index.html","d800ec4958caffe4a276e40032dfb198"],["/categories/Review/page/2/index.html","43ccd1858c19b2055ce477e3399d9dc1"],["/categories/Review/page/3/index.html","619bb63b5032f27d6377837225dfdafe"],["/categories/Review/page/4/index.html","94c916dd14cc9afe6c5ce648c5dad917"],["/categories/Review/page/5/index.html","b839b27f363531deddbc7f0382adcb00"],["/categories/Review/page/6/index.html","805af082a99b307ddc4685e31976c1a1"],["/categories/Review/page/7/index.html","630c4507a42c0bb963ccf82059927b49"],["/categories/Review/page/8/index.html","72bd2fc6d2e10be89e78c1a7858b041d"],["/categories/Review/page/9/index.html","f28841974f71b043187a96b2c9859674"],["/categories/index.html","eb3871eaea3e12b792a99fcfd144da75"],["/categories/日本語/index.html","740d85ba71580d40dd9490aae7cf9576"],["/categories/日本語/page/2/index.html","c079caec75137e621493f0ddac78b128"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","799c150274cd4e597c4e139386e8a4fc"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","98ba7cce4799bea4c5576f4098640b70"],["/page/10/index.html","b3bc3556828580ba4ba23feeb7dae37c"],["/page/11/index.html","5c0e22db08066c936bfd8905b5aa270f"],["/page/12/index.html","8e94a99306fb2a4768ebd1715274bc47"],["/page/13/index.html","b06e35ea0d7d1df6bdd0e586d3406e5a"],["/page/14/index.html","eb2287f1e8fee478615b75725234cdcd"],["/page/15/index.html","428308d3d1eadc850782203ec844df66"],["/page/2/index.html","2f4a8fb26f2ab5d56da35db21ec8d865"],["/page/3/index.html","ac00b0c4c0969c0e822a7eb484fec945"],["/page/4/index.html","b3e947095d8f4b7cd6ea5ae3a41cc82b"],["/page/5/index.html","e48cdd2492078a7268fa24f5695c7094"],["/page/6/index.html","fd52d72c7b68865f4302a115fbfc1071"],["/page/7/index.html","ce330772ab2eb56b8fb728fa58ff98fd"],["/page/8/index.html","196477ea71b26690944add8a7bfbad21"],["/page/9/index.html","c4e277f85852343ac4386d23cc24836b"],["/sw-register.js","6eae50bba18fafab69a55cda57b18af6"],["/tags/10分作品/index.html","be78c1f1641c27729e54856a9eacd84d"],["/tags/3分作品/index.html","4d3bde59bebe21883bdbb52eb9ebc719"],["/tags/4分作品/index.html","1e95112ddd2c5dc2b5b8a63f827d2fd6"],["/tags/5分作品/index.html","fc618f7707e0a4a88a43b701a8565141"],["/tags/6分作品/index.html","2e817533aa68de363a85b1384bb24baa"],["/tags/6分作品/page/2/index.html","2798cc4904b00f44f9d5bd4375c8f6a7"],["/tags/6分作品/page/3/index.html","5a509ad5136e8771280e31fa001964ae"],["/tags/7分作品/index.html","e655a0d510fc276487e9c16d1c36e372"],["/tags/7分作品/page/2/index.html","7e42d514269cdab8f7cca6d11674e7d9"],["/tags/7分作品/page/3/index.html","f45a7c2f1a93d9dbff716f410fee2629"],["/tags/7分作品/page/4/index.html","9c197bb7ae655c6eba90abaf5eb5f302"],["/tags/8分作品/index.html","26380f456096139f8fdc97ad6e046061"],["/tags/8分作品/page/2/index.html","c99945462133c4b7517015227cac260d"],["/tags/8分作品/page/3/index.html","dfa7d62eb78d9e86042e18f82f9a6e45"],["/tags/8分作品/page/4/index.html","3075a483b37eec25d715bbd15783de13"],["/tags/8分作品/page/5/index.html","517dff8078b1fb0cd25cafb6c637348e"],["/tags/9分作品/index.html","eb2d904b9ef90cd3d1bbbbd915b5be99"],["/tags/N5難度/index.html","9fa4fb37f2ab9eb0d4bb4edebc5d2642"],["/tags/N5難度/page/2/index.html","e282524c9ef6a7490f5df24bbfe2b0a2"],["/tags/index.html","f74026112fc38f93659536f34a7677eb"],["/tags/アボガド６/index.html","38243ac8f8c807c27b2de8d58261bdfc"],["/tags/三秋縋/index.html","35dc5548a75a64365f0bd9de05d3c028"],["/tags/中國武俠/index.html","edf2dda109bfe0a360ac1b55b2fe9535"],["/tags/中國言情/index.html","a54406d33f04a5057cdc70e2a755f8f0"],["/tags/二宮敦人/index.html","5bcc36b850e66eace72cec7956f2fafc"],["/tags/人性/index.html","aa09c1d27897340a9cd4e0309edf2171"],["/tags/人際/index.html","09d1ba5d506d2bd028a92e849714bb11"],["/tags/住野夜/index.html","5eade7aa87a0b2f3e513c89734726400"],["/tags/佐野徹夜/index.html","428587f1ba77cfcacad06419b7c39775"],["/tags/努力/index.html","be3909a6c961a8107bb5d47002d569c6"],["/tags/動畫/index.html","db14ce8b8f81bd3eeaad703d024e32b8"],["/tags/動畫/page/2/index.html","d782a1d74eeac3cf093b7ed8b71cb6ee"],["/tags/動畫/page/3/index.html","b01a9bdef50304851f3dccd495ede605"],["/tags/動畫/page/4/index.html","d55c9cd09c95fdbb4ab648eb683ca96e"],["/tags/原諒/index.html","048a9b7ca15dc86472e4078e06ab58ed"],["/tags/反烏托邦/index.html","cf81819cbc782c7b7d96a235bd852318"],["/tags/啞鳴/index.html","5368c982e5a7bcf1e7e5503f3da7f53b"],["/tags/喜劇/index.html","8389d85133be98ed628212816a09e5fe"],["/tags/夢想/index.html","3abc23f552669c4b2c56067425ddee5f"],["/tags/天澤夏月/index.html","689ea5bcbc76baf661ddfd38072c06fb"],["/tags/學習/index.html","97f39e90e2f7138b6d4ea554ed0813e1"],["/tags/學習/page/2/index.html","500c7ea8347966801d848e09567ca0ca"],["/tags/宮崎駿/index.html","f3c73223d09a0ddfb6ac046a16aa0689"],["/tags/小說/index.html","e930ef0c94c41a84247e4bdac28e6e20"],["/tags/小說/page/2/index.html","63f14bac85cfd135c611191c93dfd343"],["/tags/小說/page/3/index.html","41339b739f56b39816b9d23eb7147bb9"],["/tags/小說/page/4/index.html","625855a884d249c2a44ca42897df5ed3"],["/tags/小說/page/5/index.html","d1cf65793de8ef24594db00a2df69f2f"],["/tags/小說/page/6/index.html","782bc4177d229ee292ecd3931ca8c2ab"],["/tags/小說/page/7/index.html","5caf5b37f7db6aab03fee954161733ad"],["/tags/平淡生活/index.html","4c547be3665f654f1da565d1605c144c"],["/tags/幸福/index.html","82629b514959c784816ab5cb5a4208f2"],["/tags/志茂文彥/index.html","57c3491e7364ac0bced95d2ca7a41f7a"],["/tags/愛情/index.html","7c5f30bc1e56dd2df761ee39795b8910"],["/tags/愛情/page/2/index.html","e25d99b9ac59bc1c5e516d55aa75fc13"],["/tags/愛情/page/3/index.html","fa4031b2718029daf9173da33bab4d83"],["/tags/感動/index.html","ea199289336cf3be06e62db4a29655b1"],["/tags/懸疑/index.html","523a81d287fc23bddafa203ae67fba05"],["/tags/懸疑科幻/index.html","44d2a1e8e9aaea0f4a430bd85c8a84ac"],["/tags/戀愛/index.html","ff1d65a5515d61e59572b21e085481aa"],["/tags/成長/index.html","107911fcb4ccedba49bf59862e4fa9d8"],["/tags/成長/page/2/index.html","dad2dcd3283b22076ef5a2f5ed298d32"],["/tags/戰爭/index.html","4ba07bf43e9c7bb99422f4c995428775"],["/tags/推理/index.html","d2c81748c59fcdd1ec288fb05e6ca15c"],["/tags/搞笑/index.html","dfdcaa64d18c33c013afe6c022d18d8d"],["/tags/救贖/index.html","263a0b606761fb3dfaa83d6e7a6598c7"],["/tags/斜線堂有紀/index.html","d9abc438b5f90fd5f322272ad38c0587"],["/tags/日常/index.html","ec7071640085d2eec8fb5276731ee9a3"],["/tags/末日/index.html","9b851d5bc58f1773f651af7079328537"],["/tags/校園/index.html","ad6cbab71d3d66b45d6395654a7782c9"],["/tags/武俠/index.html","bcd6e51f4c53a78a679fca68227311a8"],["/tags/武俠言情/index.html","a0998ea5ace838d654eaacfc481e5910"],["/tags/漫畫/index.html","209fa3bd746d3a431054335f92784f12"],["/tags/生命/index.html","85ce629f5155f56cefc545a153aa0882"],["/tags/生命/page/2/index.html","774e411a8a93c4221ef51678f47fef9d"],["/tags/短篇/index.html","72b4974a37638e4349458e0d2a3c1c5a"],["/tags/社會/index.html","084b9382fd4868217c8a84689a123477"],["/tags/科幻/index.html","7a79785abbb9780d97a586bc6744d410"],["/tags/童話/index.html","89dea9ce7b91d55044ca7d2645397e25"],["/tags/競爭/index.html","d057ddcccfe3aa80eb00e57b4745661b"],["/tags/自我/index.html","3b1d59403d99df27dd488b4b99e3f61d"],["/tags/自我認知/index.html","834be5c3c43b369658ba620b34f36a9d"],["/tags/葦舟ナツ/index.html","811a60957625c5f01fcac83b715556ca"],["/tags/藤萬留/index.html","19293c36947f5f42c226bb4e342f4e16"],["/tags/親情/index.html","5c780a3eecfacad6437d9623e319d3ec"],["/tags/雜項/index.html","70fe5a2b7f19877a44a4b7fccc31b8f5"],["/tags/電影/index.html","584d983da82cd0914438bdb944c24f2a"],["/tags/電影/page/2/index.html","352e08bc9838433a25b512e3c5723365"],["/tags/霸凌/index.html","11b7ef776a66c3a3221170f79de1a2ca"],["/tags/青春/index.html","f16bd7c6b57596a0cc634a69e52ff854"]];
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
