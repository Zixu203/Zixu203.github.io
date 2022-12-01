/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","9275685e93269ff795828082add5b515"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","74e1f31dc7226db1dcc45eb7edcb62fd"],["/2019/12/25/Review/無法計算的青春/index.html","5354481e07126b66c8499460c25f0556"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","a48cfea0c43c08d42c041faf5245f6e9"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","4dfbe2d2c1041e3523da9a5484fc7154"],["/2020/01/19/Review/下雨天，不上學/index.html","0cfefd53307c2f0c62c40d1eef5a51dc"],["/2020/01/26/Review/三日間的幸福/index.html","b19af3f85f7b91aa8387dc6143ecb0a7"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","477222255682d7a5a087196a43af7bb7"],["/2020/02/09/Review/青春期超感應/index.html","353d81036bdee0809f724fec477ae155"],["/2020/02/15/Review/又做了，相同的夢/index.html","9147a3ecd15d7fb09da59823b8ed97cd"],["/2020/02/22/Review/回憶當鋪/index.html","33d1d67a8682cdf44abd6e77f2271944"],["/2020/03/22/Review/不適合自殺的季節/index.html","abebafbafb645823386e80b7021c9f00"],["/2020/04/26/Review/我們都無法成為大人/index.html","56304d6895527d8c14896c5c84cfc9bb"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","f10d534c02f86ebee884aca7278e00c1"],["/2020/05/17/Review/人間失格/index.html","41af1d8b8b6ef8c815a6ed67719db5e8"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","48546d169afd66e8721a9a7a66854684"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","c26b723ca6f7f52fb2c78b7b4d18f07c"],["/2020/08/01/Review/銀河鐵道之夜/index.html","e7db81064210c173945e788a7f4ca87e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","61384e6be2b9ec0f85f495dbccc02fae"],["/2020/08/16/Review/15歲的恐怖分子/index.html","2ce9159a43171480f92f3147e9dde7cd"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","89664e5ad9810501fee0529a2097554d"],["/2020/09/13/Review/羅生門/index.html","1b1dc1188fe2f841361b56644dcee54a"],["/2020/09/20/Review/闇夜的怪物/index.html","e437cd1b7e8d039de37e5d42271d618d"],["/2020/09/27/Review/14歲，明日的課表/index.html","7d80403c97f62586b749966ccaa934bd"],["/2020/10/04/Review/致十年後的你/index.html","38c2d97891a0284d36dff52f442e6abf"],["/2020/11/08/Review/滅絕之園/index.html","579d66b758c59ca0c530576a2a205759"],["/2020/11/15/Review/將愛拒於門外/index.html","4222c3883f6e3dbd48f68708ca85a013"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","702fa0c98900b0caf13dfdbdce1ff931"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","49cb9adcfa9e29dc47147e8551ecd5af"],["/2021/04/22/Review/道印/index.html","a274da80559ebc5a99738990afa60562"],["/2021/05/03/Review/戀入膏肓/index.html","bdd242142e7324648b90484936a8f03c"],["/2021/05/10/Review/Dice/index.html","d0b451da54cd86df420061896d56fd17"],["/2021/05/15/Review/魔女之旅/index.html","260dbaadc1fb1f55b35b91c3c0e14246"],["/2021/05/28/Review/戀愛寄生蟲/index.html","93d5db7fa70ad160aaca3c38b0ab6271"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","64749fa7d3ed7dbff4cf4bd064cc4177"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","466742e069d2f80d6037a8772e9f1757"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","573fe6ce2666897938d3fb59e77cefbf"],["/2021/06/05/Review/流浪的月/index.html","b44a463a4ab3af95718c3b67b4fc35f6"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","75b4455eaa8e95dcff004a094ce40901"],["/2021/06/13/Review/第一人稱單數/index.html","00c17e1300c12a4a657341d3d10f29a4"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","469a94992530e2e7354515dfe9a2b17a"],["/2021/06/16/Review/願你幸福/index.html","d988b67d129c0b8b26c7f4459e45a359"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","4f4351286b890807fbb38913bd273ba0"],["/2021/06/21/Review/神隱少女/index.html","8537e18476b54c033cf31e167f143e31"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","ae8a1022c2be092122c393333db0945c"],["/2021/06/23/Review/天空之城/index.html","204a100ab776298fecd70c3e44341341"],["/2021/06/24/Review/魔女宅急便/index.html","0aad3dc994ce97f47ca917f6b96781ce"],["/2021/06/25/Review/借物少女艾利緹/index.html","17affcd7f361835266650784bb48b8b3"],["/2021/06/26/Review/魔法公主/index.html","56319228512b5eb9ea5e14a3026fd7f4"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","1720d1c2d8d41054874e32d85523c17f"],["/2021/07/04/Review/飛雪與劍/index.html","4c200ee1ef1c7ef887215c41e59c79ca"],["/2021/07/09/Review/地球防衛少年/index.html","2e32e69cafe20b27794b1b2ab9799ddf"],["/2021/07/12/Review/Angel Beats!/index.html","f5f3892aeec8a5ba548999ffc9288d48"],["/2021/07/13/Review/Clannad/index.html","f7bd4f69c782abfe97c1d1f4337e86bb"],["/2021/07/15/Review/AIR/index.html","012533cf77091d05d4ebfe84c6e70c4b"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","10f13187ac73454861d2660dab9bf240"],["/2021/07/15/Review/螢火之森/index.html","5b9fcd4bb38db6a23285481a6e3bc44e"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","03a569bfb607ea23c6d8825843889fdc"],["/2021/07/17/Review/奇蛋物語/index.html","e38bbed0a3813a576d7cc41768b489b8"],["/2021/07/18/Review/Vivy/index.html","ec89eb4d590e6f1b4ed50954c99b7799"],["/2021/07/18/Review/請妳消失吧/index.html","5dd15d46a8db11f43b6761d16a9c96c3"],["/2021/07/19/Review/漣漪的夜晚/index.html","046c512418d3ea893df97faf4ecc5d98"],["/2021/07/20/Review/月色真美/index.html","a251673ff1bf75700418bf53a8329c9e"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","dba42588bbe5aaf603ee3663fc2e026e"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","c12465a1e9e7a81bfd3b1a70ada8ab90"],["/2021/07/22/Review/罪惡王冠/index.html","ea795ce3233650f62075a39ab7f09b19"],["/2021/07/23/Review/弱角友崎同學/index.html","6a472644b621537ba0051fedb9445bcf"],["/2021/07/23/Review/惡之教程/index.html","ee1ae9576e0bc14e6ffdff5da87cfc2c"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","c3f9c737d23002930bef0a8240e0f99a"],["/2021/07/25/Review/魔王勇者/index.html","e4fe6b71f3fd2e4d5f7088f567ed9b31"],["/2021/07/27/Review/一年A班的怪物/index.html","e61c418d89c72edabb17caac785f1a69"],["/2021/07/27/Review/奇巧計程車/index.html","09d5def9ce1d5ee7d8857965bb2303ad"],["/2021/07/27/Review/專情的碧池學妹/index.html","51d71bfd7305b25319edffb4926126ec"],["/2021/07/29/Review/只有我不存在的城市/index.html","b237523f0fea12b0a907ca4ffc1bd41c"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","8fee5ce2b81d148eed942f43197aef50"],["/2021/07/30/Review/可塑性記憶/index.html","9ac0e673bcaaeb26d3b4438da4296c90"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","b22007d6610a17916dc65a1f99f81aa0"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","878695a0c59ac3df34c9814fe0b38aac"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","473e06ac87b23387cf072281d76ea5dc"],["/2021/08/25/Review/清戀/index.html","8d935cb910d574f403519d61c837f577"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","359c1effb7d36ada5e058fcf2ada4ac1"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","2390c1fa8d7434489afbad1b258f910b"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","775a6534a8895749298504eeac1bfd1a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","4489dbf0baf8cf8f6feaddef03876ca6"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","ee21606a739afde158892f762d3ccc46"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","66d12c1a36460c15afb22fce2995e3b8"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","86426c520abbbc681ce90ce5919c3bf4"],["/2021/10/16/Review/龍與雀斑公主/index.html","0e409a6fd02422cc606fde8db2061290"],["/2021/10/19/Review/孤狼不想開後宮/index.html","75e77f561474c3d71b1141b07332ec3f"],["/2021/11/13/Review/徹夜之歌/index.html","4853eaa478b58eb593554d52edb5cff6"],["/2021/11/24/Review/武煉巔峰/index.html","e3923fd775be303a5ab4b8d1a9624f77"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","25ef6f6e9b718725e55999a41dd7cd4a"],["/2022/01/28/Review/神醫凰后/index.html","8e35797e0dae47044670d16d3618ecc6"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","7e3b71ec34f57efb8db50168eddc17fb"],["/2022/02/13/Review/夏日幽靈/index.html","e3687738f9d7cb3f551565f4a88eb5f8"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","b3019b52a3e8ed589d1444dda722efba"],["/2022/02/26/Review/賽馬娘/index.html","4fdd049e3f94d310db431f09385a4064"],["/2022/02/27/Review/大欺詐師/index.html","9c67b9ee19063fdb0cf4fa227c47f0a6"],["/2022/02/28/Review/前輩有夠煩/index.html","8c8b5e4503e3082f6b451c2b596e5a61"],["/2022/02/28/Review/碧藍之海/index.html","eeb96b8db4dabfbd24a6a317256a6535"],["/2022/03/05/Review/落第騎士英雄譚/index.html","0a913f60e096143b13d2ce46a79267c0"],["/2022/03/06/Review/Another/index.html","7af61cea6a1312958484af77cfcefaa3"],["/2022/03/06/Review/入間同學入魔了/index.html","c37d0b3926885f79a862a6269edc8fba"],["/2022/03/18/Review/再見宣言/index.html","d50df93ce84791420a2cfaa5ce0518ea"],["/2022/03/23/Review/生若冬花的妳/index.html","2423b40134a713ef80b903af32db0dc6"],["/2022/03/25/Review/天之弱/index.html","26ba181122e7c3821e10dabbc47f28a8"],["/2022/03/31/Review/滅了天道之後轉生/index.html","b920466ad4409e2b2a89b8d3032cef13"],["/2022/04/30/Review/泡泡/index.html","16f62b03aaa91327e2bf138ff09448f8"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","96ade59c8cf025ab7de0db9cdad50734"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","0d8fd0a1695050bd80bc75c4faa1bd9e"],["/2022/06/13/Review/偵探已經，死了/index.html","a6fc9a5587529909fca9abec63d979b9"],["/2022/06/14/Review/黑色子彈/index.html","aef108aaf30e4c63ea9d8c100f4e47bd"],["/2022/06/15/Review/黑白來看守所/index.html","f6289f27754440e929d1cf506c0ae9da"],["/2022/06/16/Review/虛構推理/index.html","e75004731539d9b37044f77d9ec38047"],["/2022/06/17/Review/戀愛與謊言/index.html","d42b2a6cc42a29aaab22dda2e56fde5f"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d937f007119f1ac42d589fd0d929327b"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","b41b9433e8c8096dafab0359d3000236"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","1666febe99a2e52289e41e9121f28d88"],["/2022/07/03/Review/Hello World/index.html","38cb78201b79560d02dd37d207f3fa63"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","e0cf55d7cfd11583f9bdf0fe362632dd"],["/2022/07/12/Review/易忘日文名詞解釋/index.html","b5da25a286c9f49eba0d0b830ab444b9"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","847dca485dbde59f9b36354defa21c99"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","93070e68ec8b2083cc5c51711cb2155c"],["/2022/07/15/Review/ナ形容詞 時式/index.html","618b0db44e27933b92e03e5128ddcf93"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","5704f7ae190d4d968565991481747a46"],["/2022/07/16/Japanese/動詞分類/index.html","f12a98dd0ccb8fd70eb1c61816d3b7ec"],["/2022/07/16/Review/五段動詞 語尾變化/index.html","271d24354dbd192ed009ddef8a634707"],["/2022/07/16/Review/動詞分類/index.html","cbfb4505a433cfb56851afb712c9eb87"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","512fec3520fcabc1c5880355b29986a0"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","984d7284b60ceda6e2fb44be96bc99a2"],["/2022/07/17/Japanese/音便/index.html","705f1f77b08c68f6dbe536e91653a331"],["/2022/07/17/Review/カサ變格動詞 語尾變化/index.html","d551d39e442e0508aa9f28ba6edcea78"],["/2022/07/17/Review/上下一段動詞 語尾變化/index.html","b65af175b7baabe52c6243660260bd3e"],["/2022/07/17/Review/音便/index.html","2bb35f417ab03ebdd18ffaa4d0b4ed6c"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d5901e01dbc443cd3e8d233cdc519429"],["/2022/07/18/Review/動詞 時態變化/index.html","932fd3581962e782467a6072f2880050"],["/2022/07/19/Japanese/助詞用法整理1/index.html","d697a036bdae726f9e73dae972f7bee8"],["/2022/07/19/Review/助詞用法整理1/index.html","f1d776a577b87f77f69bd98d59d0140a"],["/2022/07/26/Japanese/助詞用法整理2/index.html","093033b24c3464e0276715f0a05cfac8"],["/2022/07/26/Review/助詞用法整理2/index.html","250d032031bdc1727f26ea2db96806f8"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","69f7f39e9b9926a71c808da460ecd02e"],["/2022/07/28/Review/動詞屬性 ている、てある/index.html","fb92b0c4c7738d9203b1bbadd612ecfd"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b9dd4310c887afe2f44c98b37505cc83"],["/2022/07/29/Review/動作順序助詞 整理/index.html","fa51f12224c9e17b18fb84050923c528"],["/2022/07/30/Japanese/疑問詞/index.html","c7d55fd140c5602d8e68854d910d1594"],["/2022/07/30/Review/疑問詞/index.html","0602b53f78ca4751d51ea3323bdd4f18"],["/2022/07/31/Japanese/助詞用法整理3/index.html","dcbf17e5b41b116180e144bd32919526"],["/2022/07/31/Review/助詞用法整理3/index.html","eebef88e35cc33fc8882eed93b782cf8"],["/2022/08/02/Japanese/副詞整理/index.html","0d83c82c589c606b26fa83c8d1d043a2"],["/2022/08/02/Review/副詞整理/index.html","0eba7d55b60f2c18f803d6a50623e378"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","4ffb04bc04e53272128ae98639e1d27d"],["/2022/08/05/Review/接續詞 感嘆詞/index.html","c126c12524f0d4d27e67472dd9b22974"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","bf0de4c237ee5772b858545629997cbf"],["/2022/11/22/Review/組長女兒與保姆/index.html","9557ee3f9e548f1220e17ab4400e48b8"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","5ba996bfc94d3fa0f762d87758a4f6d4"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","3603788282d1e23b83440e36036eb4d3"],["/2022/12/01/Review/イ形容詞 時式/index.html","fe4ded128ff497ac90e028c2c424f49c"],["/404.html","1af2534b94c32f1a9f984e760b38e6ea"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","ccc64cc6a13e85e95865cf65c9338840"],["/archives/2019/11/index.html","6ca289fedbe9eb3f1a687edea2a3813c"],["/archives/2019/12/index.html","240d54fabc9744f2e218886e4d0c65d8"],["/archives/2019/index.html","a4b4bea78ffb3d1623f5f3e1cbbb7680"],["/archives/2020/01/index.html","a389a19115137d62a2cc7a8623ecc60e"],["/archives/2020/02/index.html","2d4580bfcb78d80f94bd5077206bd4cf"],["/archives/2020/03/index.html","bd7da9fd2fbbbd2b461aa1294327ebc3"],["/archives/2020/04/index.html","31784050220ec52cfaa8e3c87afb93c4"],["/archives/2020/05/index.html","bbcf5cfc304aff43001e083b42d77ca2"],["/archives/2020/07/index.html","c9281d3c8403d1b1c0d9486915854a05"],["/archives/2020/08/index.html","572abd10a9b7ba8662625e067f557bdb"],["/archives/2020/09/index.html","39bfad480c6affb105fc8f607cfa638f"],["/archives/2020/10/index.html","e47728fd1268c7ae7a5fa6597e4f6c97"],["/archives/2020/11/index.html","aee91e2d1c99619026b87c681236ddff"],["/archives/2020/12/index.html","ff74d087b3ba496fb1ae5b1fbe495d85"],["/archives/2020/index.html","a62ff324250ca0b39f700a7d17419c1b"],["/archives/2020/page/2/index.html","3b6440af16015d8ff3f24bebea1b46ed"],["/archives/2020/page/3/index.html","96ed6233a2983df040bc417ea568b3b0"],["/archives/2021/04/index.html","9b0568ad188382fca31c39d0a2a7d126"],["/archives/2021/05/index.html","1d4c5165208a232a31ffab7a77c7808f"],["/archives/2021/06/index.html","d5c8bcbf5c5772abde1a9814aaf0a480"],["/archives/2021/06/page/2/index.html","2b946a4b610062b717b94f688870485d"],["/archives/2021/07/index.html","1fa2f9d34e2d033ffe2a71521005488e"],["/archives/2021/07/page/2/index.html","d3b798176a7a2038717e9b128ced07db"],["/archives/2021/07/page/3/index.html","0c2ef05b90fc9b16800b82bfc74413a7"],["/archives/2021/08/index.html","f62cb4e698b89f84bb42bf12a003289a"],["/archives/2021/09/index.html","fb6d9f27372fd15644b5418953bd39bd"],["/archives/2021/10/index.html","afa737b165c253baf040eec7cf080881"],["/archives/2021/11/index.html","63572f6e17311a1bfab86a08fefc82d3"],["/archives/2021/12/index.html","6e05087784fde7e3ea4a99ae33d82d73"],["/archives/2021/index.html","e5eb27cbc6022f364f5139cbf772b316"],["/archives/2021/page/2/index.html","9f0cd255ca32eb341e571fe3533d5cfd"],["/archives/2021/page/3/index.html","1062f85d5fc633a5d3d32352be398d54"],["/archives/2021/page/4/index.html","dce957d180f923cdf43cb1ffdb427bb0"],["/archives/2021/page/5/index.html","0adebe6e6b5cd95b5073ce5b355c1dd4"],["/archives/2021/page/6/index.html","17bbdb29150366fc388f9751f7b84945"],["/archives/2021/page/7/index.html","f94066fa90d8ee187557e79249f60886"],["/archives/2022/01/index.html","5b5ed853b491351c2cc4c286309b62a2"],["/archives/2022/02/index.html","4c4c0039eadd7794a0cce070e44ada7b"],["/archives/2022/03/index.html","53b8e34525cc3c5950f37e4020980278"],["/archives/2022/04/index.html","dee3695d0c49c781bebefe44fe636342"],["/archives/2022/05/index.html","29dce5559f5c97cc7073d92c63cd50f1"],["/archives/2022/06/index.html","3ebde95591d52484cb1b572dbdeac2c7"],["/archives/2022/07/index.html","bf6fc8ab006ce8370f13fef61a768692"],["/archives/2022/07/page/2/index.html","2f1ba1de820cca717aa0e4f7a111b190"],["/archives/2022/07/page/3/index.html","61097df464727dc9c757c0cb98f18fcb"],["/archives/2022/08/index.html","a8b1758ce4a6814a880ca4e2e480b6b1"],["/archives/2022/11/index.html","502d77e240dbfdd51f6b59d600b75ae4"],["/archives/2022/12/index.html","ef9bdbb84a50d780eb1a5d44381b97c4"],["/archives/2022/index.html","bf0f7e197bc4f71b6813f6c8d475e99b"],["/archives/2022/page/2/index.html","cd1cab2e5c8de1a39588df7a5863ff39"],["/archives/2022/page/3/index.html","34b8ec340e1e10a61a2918ded02dafe2"],["/archives/2022/page/4/index.html","eaba55adab690e54476215e65b9e1388"],["/archives/2022/page/5/index.html","3ba1f334853b266530f4a6777b27f222"],["/archives/2022/page/6/index.html","6ff0dc895a0ef3658b678f8a0ce30b36"],["/archives/2022/page/7/index.html","c953382f86e75d1e948c5f9a648d3022"],["/archives/index.html","6dc3b6f8cd9a7fb4fd3f9bca48002cee"],["/archives/page/10/index.html","1616c2ea99285b2ec224cbcb6b040ec6"],["/archives/page/11/index.html","2a96978573d192bd054497a4746f26d4"],["/archives/page/12/index.html","031f4acec9c71a7213e3daf07785852c"],["/archives/page/13/index.html","98bb061f4e450ad1f52de2142f8fdad4"],["/archives/page/14/index.html","4ce4297b2d4347fdceb1d72441770c1c"],["/archives/page/15/index.html","55cdbeccca95ade247c778a8940367df"],["/archives/page/16/index.html","c5a4400a531f3171fbecd59ee7c1c562"],["/archives/page/2/index.html","e065fdae9f601f2b2b790549b14b13ec"],["/archives/page/3/index.html","da7918df849e5b1ed9d671741138a034"],["/archives/page/4/index.html","59b5dee08f19fa2aaa39a0c9a60cef07"],["/archives/page/5/index.html","c51cc1ced3d5c13dcf41cc13c0791564"],["/archives/page/6/index.html","3cc80d29816593d5cb55989a88be0a9e"],["/archives/page/7/index.html","7b67b1e50a506eccf3d60a7428112140"],["/archives/page/8/index.html","0773c3b853569afddad6b1df88b99b5b"],["/archives/page/9/index.html","b13d1f773a2ba2281f9d28bba38babaf"],["/categories/Algorithm/index.html","d0f05e0f7daa8b1dcc22588e35a7d3ff"],["/categories/Review/index.html","9bc3d063831978fe7ff9cb385cada4b7"],["/categories/Review/page/10/index.html","4e59b20894d583880a75d3aed96405d2"],["/categories/Review/page/11/index.html","4a0defd9f43a01f70370d66bdc1a5408"],["/categories/Review/page/12/index.html","3938628ad833bad71e9571d6a394576c"],["/categories/Review/page/13/index.html","acaeafe8c78f9e4b3e380971d29c2edf"],["/categories/Review/page/2/index.html","f59a87f285dc6ff87e8a67c726865684"],["/categories/Review/page/3/index.html","10d6de27c153a0a7062ca4a621a05163"],["/categories/Review/page/4/index.html","1d98876dcdcb9bdb0dddc994f1827bc1"],["/categories/Review/page/5/index.html","945cac49345a632a639298a1baa7b0b7"],["/categories/Review/page/6/index.html","25d9c87d8e6ada9fbb1dd0c5fb7fb5a3"],["/categories/Review/page/7/index.html","0c3fd684cd41bcca829c21db06880b3b"],["/categories/Review/page/8/index.html","395615ef4981847ac34f023bf7f4e3eb"],["/categories/Review/page/9/index.html","23d01b1c7c8e65d242de64e9d97b702a"],["/categories/index.html","9e6c0be97a3fa79bcc0b6b1e9a38ef35"],["/categories/日本語/index.html","fea3a8c45c59a074711d2e8f0308af43"],["/categories/日本語/page/2/index.html","81a26acee9d8470713573dd871be7eb3"],["/categories/日本語/page/3/index.html","8bc4c115e9ecbe04fe6dcec2c2bc06cb"],["/categories/日本語/page/4/index.html","b620ddb60f4b97f8fc9a9526500f0d9a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a90e3a6f7af47276f4bc295c8b458508"],["/js/custom.js","fe59cbe1ca6b7aee7ce6ad0cf3d4b434"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","f64b7cc9d89db66136ca9c7720be14d2"],["/page/10/index.html","cd208c308e4e53e440ff1e7ed0c467c5"],["/page/11/index.html","0a65785e68eb93fac63087c67834ec06"],["/page/12/index.html","3cd05a940f459db2838781d3db73bc4b"],["/page/13/index.html","677c08af4408d4780fd422a5d8f6ed40"],["/page/14/index.html","b8deca4be4ea30dd14693cdc420555ae"],["/page/15/index.html","dd63c03b41208c7ef0a03be6884adb56"],["/page/16/index.html","bbc609776c0919924999aa8938de851d"],["/page/2/index.html","6def8ce2914543ea7b1fbf169b0ceb70"],["/page/3/index.html","ef7ab0eae45a1788ac66f4024dcdd050"],["/page/4/index.html","fc4ad47ee29601fdfd03d9d6d6860c50"],["/page/5/index.html","facf777617ffabe09057e282087c54ee"],["/page/6/index.html","795cf1664784b4907d14a8419382d660"],["/page/7/index.html","79d58f017002de359f4fab69e78cde02"],["/page/8/index.html","daac85abd47dd231391cc06cc229e6ef"],["/page/9/index.html","dcb346ca4728714f0fe321cf48becae5"],["/sw-register.js","c2eded24abcd05da2044e1f107d39797"],["/tags/10分/index.html","43ca2eac2b7acac1eeecde4246bbdb3c"],["/tags/3分/index.html","8bf9a9a47805c2433c95c5620ed9bbce"],["/tags/4分/index.html","ef004149a122ad17edfb6c2f091b85f6"],["/tags/5分/index.html","b348621bb80f5c31c34007d7702ecdf4"],["/tags/6分/index.html","4762137a735077e315f0e0926756e512"],["/tags/6分/page/2/index.html","e736f657e68d00be245822e163a8239b"],["/tags/6分/page/3/index.html","334276701067cda797df5807c336c38d"],["/tags/7分/index.html","3d09883622cad6457acbce0b591b7672"],["/tags/7分/page/2/index.html","9695e9bf9f2263ffdfd3d2de8fd55a6d"],["/tags/7分/page/3/index.html","76b119b27e3e86e0143a516c9e8f5776"],["/tags/7分/page/4/index.html","c798985a9a0eb567f038ace60ead9fc8"],["/tags/8分/index.html","931dad21efd637fa5fc809f06a62d3db"],["/tags/8分/page/2/index.html","dcab114116f0fd93a8b1190893f524da"],["/tags/8分/page/3/index.html","12acdb2542dffe62be1497692503bbfd"],["/tags/8分/page/4/index.html","aeb71e096c9a53ef3b17672a2dfa8632"],["/tags/8分/page/5/index.html","518ae13b26919de6938bf45db99d3c98"],["/tags/9分/index.html","68825566827754ba38be0bbf2b380fa3"],["/tags/index.html","9801ec83339e36018fe38c4a111ab91b"],["/tags/アボガド６/index.html","a172bb06b76ea501ab106b7035a97cf2"],["/tags/三秋縋/index.html","76ab9c08e9f827ea22e4620ebaf23a6e"],["/tags/二宮敦人/index.html","343b0b45ef75d9a903996f672670a172"],["/tags/住野夜/index.html","0938442e5f2f85f866c50979cc34e131"],["/tags/佐野徹夜/index.html","d64cf017eac28a83b6169615b4918003"],["/tags/動畫/index.html","4fa964e5181db063f0b3d3d4f6c79776"],["/tags/動畫/page/2/index.html","aea64dc7354805fc235671b7fb7e9b03"],["/tags/動畫/page/3/index.html","998f25e6f366847f5e033d763057359c"],["/tags/動畫/page/4/index.html","2c94f9fa8d19d4b3b7918bca74a3d9e1"],["/tags/啞鳴/index.html","0b069cde9b7a0355374099badc8da14b"],["/tags/天澤夏月/index.html","5ff09e696039be26b1c1bb8a5e6c5226"],["/tags/學習/index.html","d010d5d895daf7185364e09f3a9affc5"],["/tags/學習/page/2/index.html","87a15f9e20e743be8f2f7b391775bde6"],["/tags/學習/page/3/index.html","624e9a3810223cc93a1ad0414884bd11"],["/tags/學習/page/4/index.html","6dead4e3a086f6fb86ef21c628fd4950"],["/tags/宮崎駿/index.html","bf43f17d50b25135a98bd26c84886ccc"],["/tags/小說/index.html","98634f3d2b34fe7c36b7499ec316a052"],["/tags/小說/page/2/index.html","090e8b2f8d5f8fd41134bc40802afbf7"],["/tags/小說/page/3/index.html","95f82f704a0414ed693591735194532a"],["/tags/小說/page/4/index.html","7173af1c0b80b3684c3c0d1f1579cb13"],["/tags/小說/page/5/index.html","9bd91acda9bfcf4e55728883c65c63db"],["/tags/小說/page/6/index.html","74a168914f908ae9b4094170a234ec2a"],["/tags/小說/page/7/index.html","9a1dec244a636911779b9b588ce0b2d0"],["/tags/志茂文彥/index.html","b1fb33d9cc6dd684ac1da2b6b7ae6e47"],["/tags/斜線堂有紀/index.html","1481a8d5b2ab3ec49e1ec67a699d8706"],["/tags/漫畫/index.html","831a2bd405354871f8c14acd787cb9da"],["/tags/葦舟ナツ/index.html","520dc79b14f1f836a3082f5df72b7e6f"],["/tags/藤萬留/index.html","078689ba76b79877c1d8f03f53047f4e"],["/tags/電影/index.html","4264ef34e38af3e81a759e4e9c885c82"],["/tags/電影/page/2/index.html","f66f1fd0e4313df5465d7e06df9ca8e9"]];
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
