/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","41d69bc443e97abc209097baee56b6e5"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","563b22483b0d277982c2f168a1445fae"],["/2019/12/25/Review/無法計算的青春/index.html","cef646de1b313d05148d93b8d8f1f9ac"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","9664934e90e8bcd2f99dc8e9d3479588"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","086ae435af13211dd0fc7fd92487dfd6"],["/2020/01/19/Review/下雨天，不上學/index.html","55d63dfbc328fa090032a267f377eafb"],["/2020/01/26/Review/三日間的幸福/index.html","2e3d1aa5c7b73a84413108dd76b069df"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","d07f978274a3cf23187437e478b36610"],["/2020/02/09/Review/青春期超感應/index.html","27f78c607cd74deed7ff1235b708eb55"],["/2020/02/15/Review/又做了，相同的夢/index.html","65eaf9e5a1bf9b2fb38c11a21bdd4c96"],["/2020/02/22/Review/回憶當鋪/index.html","5cfe629782b9f9db9016ef4dd1a20281"],["/2020/03/22/Review/不適合自殺的季節/index.html","0fe182d6eae1abb2272f8e8345961f31"],["/2020/04/26/Review/我們都無法成為大人/index.html","aebb0e516b2902d82c0613472700416e"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","e202caf4490001e5414c04b05efeff05"],["/2020/05/17/Review/人間失格/index.html","1480ea1334279cf67935a2aba0d9368f"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","3b9199f99ab9f0254429fd8ecfcbde5e"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","a6f01c8caac668b409c8194f911a5986"],["/2020/08/01/Review/銀河鐵道之夜/index.html","9a45b416d0e6dbe84427bd639addadeb"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","bd828b63917e6e13db7d6eb1077238ed"],["/2020/08/16/Review/15歲的恐怖分子/index.html","5f27906aa499081fbf09728caa25975a"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","2dfa8c7f9f0c0a9ca4f4c1a43603b608"],["/2020/09/13/Review/羅生門/index.html","a4bbabe1b23fb5f4dd4aef13072ce960"],["/2020/09/20/Review/闇夜的怪物/index.html","e89fdbcdc45479f5ae4d431527ef8747"],["/2020/09/27/Review/14歲，明日的課表/index.html","92a990ceca61f204a670d32030ee5336"],["/2020/10/04/Review/致十年後的你/index.html","9a38be8814afae07a6331af26b56e056"],["/2020/11/08/Review/滅絕之園/index.html","f948320f712e49745083de3d11cc43b0"],["/2020/11/15/Review/將愛拒於門外/index.html","7bccf2007d5f7808a4243c49f878106d"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","15cec1751456422b8f626a33015fe609"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","929873cf30b79d7749694edc0f481294"],["/2021/04/22/Review/道印/index.html","ca650e7806d33774808c2092e9dd3ea2"],["/2021/05/03/Review/戀入膏肓/index.html","a4473c3f16742ed97569407c5b53f37d"],["/2021/05/10/Review/Dice/index.html","8fad3fffada5cf06c368b1167d607ca3"],["/2021/05/15/Review/魔女之旅/index.html","ecdce4386ede471485c9804c6a372d2d"],["/2021/05/28/Review/戀愛寄生蟲/index.html","918a8df968d5825ecaa1b75ae562efca"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","5c062744ac8b8f6a798f2432d45701f5"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","ebcb0109a0a9cf7c250f2f0c1be5e14a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","6cdfbe7addbf67e3b2a6fa7220b4c857"],["/2021/06/05/Review/流浪的月/index.html","4477ae61763b59416f83de7e6620947a"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","93fff9f8116d7d5e074689c951f141ce"],["/2021/06/13/Review/第一人稱單數/index.html","5f3334f5d47694753fd5586a3a94f61a"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","e0e2c7bb0af525da58ee8effa98ba983"],["/2021/06/16/Review/願你幸福/index.html","ae23445cd5fb45be89fdc2bd5f0947fc"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","1f92d4736f0e5ae23146549eec407c6b"],["/2021/06/21/Review/神隱少女/index.html","e10d470a1ff6662ce471e812ad70de1e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","0c9e8a67f4b80c2c5eed4ffb80e60c7e"],["/2021/06/23/Review/天空之城/index.html","3ea54d9bf2b9c1e22605c7a2ef01964a"],["/2021/06/24/Review/魔女宅急便/index.html","c08033f4df6e34e15bd3ae898d154046"],["/2021/06/25/Review/借物少女艾利緹/index.html","6c4f6a9d31d70d64a96b34eed12180a7"],["/2021/06/26/Review/魔法公主/index.html","8cef196a4b463c5bbce93740a5324549"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","2fa955bc23eb6a6ad9b09fa387680859"],["/2021/07/04/Review/飛雪與劍/index.html","bf2dca8e88276e3dbfa4b6e448f31362"],["/2021/07/09/Review/地球防衛少年/index.html","b8d8af44d23faaac75c41544b22f7191"],["/2021/07/12/Review/Angel Beats!/index.html","cc279129f78a81bdfb4855e8e5160c47"],["/2021/07/13/Review/Clannad/index.html","146e907d076e605a3dfbe50201516545"],["/2021/07/15/Review/AIR/index.html","50ad73bc73a2b97ba282298acc477181"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d62cd092f393c86cc1528433e14e976b"],["/2021/07/15/Review/螢火之森/index.html","725dc839862814f7a3faff566ac1ef17"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","d6c277d53002e4fe3191cdf6f1976c4e"],["/2021/07/17/Review/奇蛋物語/index.html","932e4d9280e4f4cdcf4aa113089d8762"],["/2021/07/18/Review/Vivy/index.html","8ccc030e48690e9f1f948fb3ba832b32"],["/2021/07/18/Review/請妳消失吧/index.html","6d7244c02b0d911675405e9d86c5d77b"],["/2021/07/19/Review/漣漪的夜晚/index.html","f75bea8771602726d5551aec5451635f"],["/2021/07/20/Review/月色真美/index.html","fdec33a5bc8c18134b75524015b7035c"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","a714659e1b96f774d6af21b94ea69d02"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","0ce50f91e3cfc62142dda137ebb6aeda"],["/2021/07/22/Review/罪惡王冠/index.html","c99597be6915b23e8a720c36dedb0a07"],["/2021/07/23/Review/弱角友崎同學/index.html","bc550bc28c7e1ff9f48d3512d13979a3"],["/2021/07/23/Review/惡之教程/index.html","f3d238f48fcb4256a3c794c8a1069873"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e4c15026e48e99922a8cc9c10cf2d862"],["/2021/07/25/Review/魔王勇者/index.html","faa1a90654f2a9d159662f39db6d74ba"],["/2021/07/27/Review/一年A班的怪物/index.html","4c3d36022e9334ff4013fce7810cf441"],["/2021/07/27/Review/奇巧計程車/index.html","e15afc86a2c86dd8c8dbd0fc721d22cc"],["/2021/07/27/Review/專情的碧池學妹/index.html","891db716f5a5594fd6ae9f8b171a32f1"],["/2021/07/29/Review/只有我不存在的城市/index.html","a62c77e8c4af4f297506482bcfb206e3"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","7649b428fe3df4568b9c22369d386c1a"],["/2021/07/30/Review/可塑性記憶/index.html","96b8e2f05bd6fcd1a73b61c6ad70b77b"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","0686a06450168858857353a6e4fbbb62"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","069b8b1872f9a2515c1db882c0158ef6"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","ae156b61421dad55dc5ca8d7ee6e08d9"],["/2021/08/25/Review/清戀/index.html","0a85446d6ac93c03ca9e1ea222735349"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","c02bc17ff5ae843e17dabfc5b7a498b9"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7ac3cc24beee0670bea8f05c2aeb23fc"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","283aefba1cd9921ff2b067d891c31163"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","0844fb8628a50b043663a8a452214920"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","b90a1cbde95646117260208a6d60ea15"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","f9a714da9c8544e7ea0c63d065f52b21"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","d3fa4c4797a29fa719f9bafebda87076"],["/2021/10/16/Review/龍與雀斑公主/index.html","703cc7c1ba6b775f9cc7fb3eb0219c90"],["/2021/10/19/Review/孤狼不想開後宮/index.html","d169c3ef0ea74944f065da63d8d34fe9"],["/2021/11/13/Review/徹夜之歌/index.html","843640b5b825db8cfa09d83e5fae701d"],["/2021/11/24/Review/武煉巔峰/index.html","1e30eccfa87a5d88473358f3b2ec03f0"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d03822dd532eda0228acfd4befd5dc3c"],["/2022/01/28/Review/神醫凰后/index.html","98431d8e0fcc58aa2261e1ece96132ca"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e75f26cdcc8a244f3076e1cd214d0f8c"],["/2022/02/13/Review/夏日幽靈/index.html","8fbb654f482a93fb82a00609a428f841"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","14288bd69c72dbf31a674769e8200196"],["/2022/02/26/Review/賽馬娘/index.html","d4579ceb4557a33e6ef046d7ff8a5ed0"],["/2022/02/27/Review/大欺詐師/index.html","d03d407a58a15ad8ef25c2058341dcbc"],["/2022/02/28/Review/前輩有夠煩/index.html","3f516f5039e3d194b6e09165c2f2e50e"],["/2022/02/28/Review/碧藍之海/index.html","38f35c9043dab730b88b5b957efd600e"],["/2022/03/05/Review/落第騎士英雄譚/index.html","24425f812d735b154cf8ed1ce9141d30"],["/2022/03/06/Review/Another/index.html","5c70e2d7946efee0c258e762e4da7fd7"],["/2022/03/06/Review/入間同學入魔了/index.html","2b76a116ed3754ab92e1ac17719c98dd"],["/2022/03/18/Review/再見宣言/index.html","128691858a65510f4ddc51ea84494f9c"],["/2022/03/23/Review/生若冬花的妳/index.html","4443d3ffdcac55584400842cc8cc6d0f"],["/2022/03/25/Review/天之弱/index.html","356bef200afa05bcdb1aac6a69133f30"],["/2022/03/31/Review/滅了天道之後轉生/index.html","0cfeaed80c622b3a1affbd6acd8ccd39"],["/2022/04/30/Review/泡泡/index.html","d92d771261c392fc0745620973f0e7dd"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","0295b77c99cc59f3f5c9382634a4dfe9"],["/2022/06/13/Review/偵探已經，死了/index.html","a7776a7347e622924707cf85140e04e8"],["/2022/06/14/Review/黑色子彈/index.html","a0cdcc7859308c7b6f948254edcb0d9b"],["/2022/06/15/Review/黑白來看守所/index.html","c6c31528e8052ea70e776b57c285a430"],["/2022/06/16/Review/虛構推理/index.html","2ea766b9323d8083f7c9f418f3e52794"],["/2022/06/17/Review/戀愛與謊言/index.html","d3dec98edfbdd50e1f3137f3e616cf00"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c75324a703bfcbc416c4dee98e93ce29"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","e09bc64fe1752c5948e9895971095598"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","639e54da55ea429c0c786aac7e9e6844"],["/2022/07/03/Review/Hello World/index.html","30f51485ff6c80d3974b2e79083018d2"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","460df352ae988469dd61bd96379e7032"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","1d965c3886bb269da4d208bdb07cb359"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","fc411fc5a549d35e1558e3b629da3bef"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c87ab5f684dfc80ff01f6f83c74a953c"],["/2022/07/16/Japanese/動詞分類/index.html","afb5f8127d07f849f8cf2220c67b3c6d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","9c7c22120bfaa2c6fccb6a594b7e934a"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e646e522ed6768776f765c957c7228af"],["/2022/07/17/Japanese/音便/index.html","08a284be7d568bd8603b5d3f6558f515"],["/2022/07/18/Japanese/動詞 時態變化/index.html","5fe6017a0b0bfecd9fd03ebc683c39a3"],["/2022/07/19/Japanese/助詞用法整理1/index.html","cd6c1c15421a78aaf12ac03d455d70f4"],["/2022/07/26/Japanese/助詞用法整理2/index.html","0e1b38a9696b8e9813fe644269eafb41"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","aa4ff7b8cbb70d03678d088477dbd99a"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","ffd284f771775461fa9db993c98b42e1"],["/2022/07/30/Japanese/疑問詞/index.html","13cd42cfbe7b0cc1671b57b5c04916fb"],["/2022/07/31/Japanese/助詞用法整理3/index.html","a86421b6eec36655d581a6279998ad87"],["/2022/08/02/Japanese/副詞整理/index.html","91a0d0e4db592a44642cd25102c6f3f5"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","32be02cb0c14e0e62c8078407e7cec2f"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","eb57b5c167b1d53c6d50d09ddfb719c8"],["/2022/11/22/Review/組長女兒與保姆/index.html","04015458873ab98c40ca6ffdd520ac4b"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","6156067ebbedcc882ba1dedd9a1cec33"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","9acf8dc7bf308e8042070f66870cbc35"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","7100b0da527932bd1e3e790a4c948421"],["/404.html","e0d5cde37ef8baf9adff377d347dfb84"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","7366a64da32af4d5bce994c5c23feff2"],["/archives/2019/11/index.html","85422282c3e7b0810a1fb79ca728c773"],["/archives/2019/12/index.html","f7c5fa18a6fa011db60bdb2c8aaa8cb9"],["/archives/2019/index.html","caf8b31148cad185b2b916db990094c2"],["/archives/2020/01/index.html","d5cd34673b31ed0e1c9049a308aa9bec"],["/archives/2020/02/index.html","b7816eaef94135f7e73f41a7d3aa3ee2"],["/archives/2020/03/index.html","d67a8d5e71984fc30b1bda19c0436c65"],["/archives/2020/04/index.html","c29dfba237f8b6b4e73b81594d7f4050"],["/archives/2020/05/index.html","c8426e4505e83f90936365cb167c6556"],["/archives/2020/07/index.html","eb8462c3f077db3a9bbee7188e58ae97"],["/archives/2020/08/index.html","83893800219a80d5576bb2389b683d76"],["/archives/2020/09/index.html","62812476471521f5ff725ac8fceaabb8"],["/archives/2020/10/index.html","7e023bcad7bd8c03eb63ee943dcc0a4b"],["/archives/2020/11/index.html","5fe8a71edf092cc3cf7ad0f2fc6b586b"],["/archives/2020/12/index.html","6213637fae157bda93baea8ead01d86c"],["/archives/2020/index.html","7e5b679453755301dec535eb3e954e18"],["/archives/2020/page/2/index.html","5c150ff8edce694c9ef5e5c9d4e8d782"],["/archives/2020/page/3/index.html","94e40fd9d742699cb14680c0fc59cde9"],["/archives/2021/04/index.html","683f33291ec5e3aa12cde6ed0f2d242c"],["/archives/2021/05/index.html","8670359c88fe3c1f2a4cb5fb48e1b091"],["/archives/2021/06/index.html","2cd1e4166eeb2c44c0d88826db3cbdfa"],["/archives/2021/06/page/2/index.html","c23c5ca3745bc569a9cacf8da485c1ab"],["/archives/2021/07/index.html","8c2e5659ae8215f994165112a4622904"],["/archives/2021/07/page/2/index.html","5fddd1cf885db33a43f3e10a6de3be1a"],["/archives/2021/07/page/3/index.html","2eea8a33f37ec6c42efd15af8e86b4c7"],["/archives/2021/08/index.html","e9d2f0e8fd65d8ae2f354f0d57688834"],["/archives/2021/09/index.html","c651216c85906785f0b0c9734b74acec"],["/archives/2021/10/index.html","71c4d43d227431034ea917459d41cfb1"],["/archives/2021/11/index.html","b5a0e6af40c612c80a18f2d832f6ac2b"],["/archives/2021/12/index.html","d1285b58ddacf4047b94e77e66f1735c"],["/archives/2021/index.html","bb4b0ac16f0d69955d44a9d2b894e866"],["/archives/2021/page/2/index.html","fbac3920bd20ebff9137b693041adef7"],["/archives/2021/page/3/index.html","52e05df926460ee7f2ad847dbea0eeb3"],["/archives/2021/page/4/index.html","761a68a08d387b23d37d0029297d634e"],["/archives/2021/page/5/index.html","5ce7dbc9ec1b44905726eaf2e74854e8"],["/archives/2021/page/6/index.html","b2b823fbe77c081320a42be4f8da038f"],["/archives/2021/page/7/index.html","06987b49a66c27af96514bb05697afe5"],["/archives/2022/01/index.html","5e87763163111eeb45933fe8a1fd342e"],["/archives/2022/02/index.html","3579ed814502c8793a27402c13ac47b6"],["/archives/2022/03/index.html","86b58c855dafddc206fcb4d30389b305"],["/archives/2022/04/index.html","0b06af8fce22cdc36019aee780f8c816"],["/archives/2022/05/index.html","e467cdc2fec3ead1b3c7505fd7787f15"],["/archives/2022/06/index.html","abf8417de66fa17aa61bae1e31b664a0"],["/archives/2022/07/index.html","661ec9ea6b2d6e87ae9a927295607d80"],["/archives/2022/07/page/2/index.html","3ce6357491a941bcdfcc519f061e7bf2"],["/archives/2022/08/index.html","baf15e752748d277375167b3c6c90840"],["/archives/2022/11/index.html","fc71f320a7b98fa1c531ab58f460f2a0"],["/archives/2022/12/index.html","6070df675ac3497218f991aa613a6a0b"],["/archives/2022/index.html","f4c9c05b596772aa01b27a24a86c0c8e"],["/archives/2022/page/2/index.html","eb5f5049a3a98abd713f447d7db06e62"],["/archives/2022/page/3/index.html","1421e7aeb304f7148be2a5037e2df397"],["/archives/2022/page/4/index.html","a6655d774fc2182ea124409743e88fcf"],["/archives/2022/page/5/index.html","6290c524e5634b93b77895d24fe8f99d"],["/archives/index.html","998515e122ce308040378383bbc211d4"],["/archives/page/10/index.html","9f5a45cde1765ca18d4e7abe5add1343"],["/archives/page/11/index.html","b0a7f99b952b07cc7a5f0d283e2ff34f"],["/archives/page/12/index.html","0d9c1e7fe6dbe916116591e02db4702c"],["/archives/page/13/index.html","41ada35a354d79c74924139cc3d2aaf8"],["/archives/page/14/index.html","b77134bf79b0101ba70d417abdb8e396"],["/archives/page/15/index.html","e8f79c306a1605c7ea49d82bf3a8b3bd"],["/archives/page/2/index.html","9c593cee43655453ff1b8f05be56ce73"],["/archives/page/3/index.html","b2d9dcb71f1837e798c4a3623f10ea5e"],["/archives/page/4/index.html","d3b8554434d323e7db8a9aa3dfb02c32"],["/archives/page/5/index.html","3aabecd32581a088dd073ca3591c1454"],["/archives/page/6/index.html","895e2ce9646beb9788cbc5c0f5d87027"],["/archives/page/7/index.html","ca3ec7e7b29dcb24901302302a861a66"],["/archives/page/8/index.html","571dfd8e20811eb941bb600accb526e6"],["/archives/page/9/index.html","949372e38832a54f04efda50af1cafe4"],["/categories/Programming/index.html","548f92f813882d2d9f7da02345cedea8"],["/categories/Review/index.html","3889cfeac72eebc25213469a5339522e"],["/categories/Review/page/10/index.html","ef0ad7d16e0d01c27840de192a062de4"],["/categories/Review/page/11/index.html","6b351c43ec14e76234c17e050b46db75"],["/categories/Review/page/12/index.html","f3ae9c5bf32477436f0c92ce72bf17ff"],["/categories/Review/page/13/index.html","15de24cdb9837ddcf21e62ca394fba6b"],["/categories/Review/page/2/index.html","207a287af06af4873969d1805a6c2f12"],["/categories/Review/page/3/index.html","35cd75a6e478dfbe5082c0999e2d9af1"],["/categories/Review/page/4/index.html","f35d44efad44d15e0fff75671a50c0f5"],["/categories/Review/page/5/index.html","768bcb9f602022bbd33e192b5735cb32"],["/categories/Review/page/6/index.html","e34fa0f90ed2f4efd3db2cca50a5930c"],["/categories/Review/page/7/index.html","b3e6354abf112eab0cdbef39e914d6f4"],["/categories/Review/page/8/index.html","6be04ef5077893b5dcd6ed6db794b37c"],["/categories/Review/page/9/index.html","f29f12f6acfe5deb7d2706528ec087b1"],["/categories/index.html","e3c821550c5f0f49b44fdf99cc48efea"],["/categories/日本語/index.html","eb8f4bc4d5cd50fe5051dbf589f8aafc"],["/categories/日本語/page/2/index.html","ca12cde36a5ffe8e1f8c0558bb8eabf0"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bd76bb7550481d6ee472b7ab7226f3b0"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1f2050160bfb17170df0c1981d1ca471"],["/page/10/index.html","011db53b82d57667b147e4d469a32b78"],["/page/11/index.html","3d1ab33ffa829aebe589a6d131abcd5f"],["/page/12/index.html","9bb0a06682476bbda44ab2d24e17de62"],["/page/13/index.html","1d6f94d0884bdf914c5caadeeb13b10f"],["/page/14/index.html","55d77a1e0119e72dd5faa298e9d1038a"],["/page/15/index.html","5372b574e4397d7e452b17cb4dfdee17"],["/page/2/index.html","d7df6f0f5926988711f9ec83513c3716"],["/page/3/index.html","8c484eb88a32e8c78fbb1df1be9099c1"],["/page/4/index.html","1b30d9656de4eb2469da5c2fa3d617a4"],["/page/5/index.html","642773deeca25054c23df1f3b8a7b3ae"],["/page/6/index.html","8337da822ce91b3f3e53b808893f5b94"],["/page/7/index.html","911eb2093b5b3771e5f78bac071f995b"],["/page/8/index.html","75e209893ad2270cad4537378f1ee5e3"],["/page/9/index.html","c26869878cb5e333ebae567ff9855231"],["/sw-register.js","3d7d9b9403cbd4cba89b4dfd0bea7007"],["/tags/10分作品/index.html","a57cbc6bf8efccbbf704d0c573f643cd"],["/tags/3分作品/index.html","1e48ce6c261c20d1981bc3e77a9d3e4b"],["/tags/4分作品/index.html","9e6deafaec172f7bb65a5af277653f7d"],["/tags/5分作品/index.html","5d0e1464992d43f0dcf5856ebe61e3c6"],["/tags/6分作品/index.html","97e0edaa50e1daf425c9f1db261b20bf"],["/tags/6分作品/page/2/index.html","38efcf5e8763525cb5c0369133f026b0"],["/tags/6分作品/page/3/index.html","6dc15e9cf8c128f7cae40d872a6bee5f"],["/tags/7分作品/index.html","5f3f09e642a6e4f6246c6bf8f33f5497"],["/tags/7分作品/page/2/index.html","aa510593056f4ddd1fd8da4b8b7407fe"],["/tags/7分作品/page/3/index.html","5a228d0d8150cf7432d58aaae77e3a6b"],["/tags/7分作品/page/4/index.html","ce712891c6dcc6b811c8fe81aa6bd4a9"],["/tags/8分作品/index.html","b618bcf7810d84ee4a4bea0ee86d077a"],["/tags/8分作品/page/2/index.html","66c111ff8f623a20cab3cb674de5b5f2"],["/tags/8分作品/page/3/index.html","02f9f90e1f817a9bf42695216c778acb"],["/tags/8分作品/page/4/index.html","4aafd03a35c4d86a8610519a3ad9820b"],["/tags/8分作品/page/5/index.html","5d1449caed3e036e313de8deb8a1166e"],["/tags/9分作品/index.html","efabc05a113a948839efea3c25a69947"],["/tags/N5難度/index.html","3add1c51a1b8eeaaca4d6aac75f2aa05"],["/tags/N5難度/page/2/index.html","b0c6da0829a3eea2b981b86d87b51cd9"],["/tags/index.html","f4fc427706cdca74d405855694ec767c"],["/tags/アボガド６/index.html","386de413c3f784e3f805d11a5bbee9e2"],["/tags/三秋縋/index.html","a719802f64c90904467e3e16adc00bbe"],["/tags/中國武俠/index.html","8f5bbaefebbd6843e14ba52624430d7a"],["/tags/中國言情/index.html","53780c181c05c52371a51d2cd55b1139"],["/tags/二宮敦人/index.html","b4fb2de3266ad0cc2cec2cbabebca25d"],["/tags/人性/index.html","e8ceb26529dfd87ba4d41036954bf815"],["/tags/人際/index.html","654f652c7281fd622000e31573941839"],["/tags/住野夜/index.html","2a61d56a8b1c89cc6d4f9ac2da6fa224"],["/tags/佐野徹夜/index.html","6261113fcd514f9bf31a95881ef93140"],["/tags/努力/index.html","cb77415c5399d516025ed8372c04943e"],["/tags/動畫/index.html","bc288920e0623937137927bf0a854be1"],["/tags/動畫/page/2/index.html","63cbe9d67c98a9509a0d81a988dd3802"],["/tags/動畫/page/3/index.html","8770474c0b51b2aceb7e58243c48a6b0"],["/tags/動畫/page/4/index.html","ad66042ce043c5fb31e7bb5aba466d18"],["/tags/原諒/index.html","3a7c2729bb17e6d833067f6bddb0799a"],["/tags/反烏托邦/index.html","0d451f279564b9ce7193f2b6e46d1795"],["/tags/啞鳴/index.html","7185c5ca9ddc02e27244e9c78590f732"],["/tags/喜劇/index.html","92cf2daf77941c73c05c3d040f3c1d05"],["/tags/夢想/index.html","77551d27164709e8db5e773979e8952e"],["/tags/天澤夏月/index.html","372e4b36d63f11b0ce28ec50b122ccca"],["/tags/學習/index.html","558b7402e1961ae4fea8bd1d85975613"],["/tags/學習/page/2/index.html","909cf25bedcc4bd84e940edfaec54e29"],["/tags/宮崎駿/index.html","8602ce7baa3ef22ba173551db7408d39"],["/tags/小說/index.html","dcbc75af7e6b907775b6fa2d8e697d0a"],["/tags/小說/page/2/index.html","b79a7494df7d545241365d150ca4fd63"],["/tags/小說/page/3/index.html","e039b244f2405baedc319b06eff353bd"],["/tags/小說/page/4/index.html","59c6f4894d515570cdc5495eef372ef3"],["/tags/小說/page/5/index.html","e208f5d2ad863f8c9fa4589339d8e33e"],["/tags/小說/page/6/index.html","c06e9d0ebfd7ff668eca0b0636315620"],["/tags/小說/page/7/index.html","793d5281f08763762a6103ab96c271b1"],["/tags/平淡生活/index.html","73eeb264aeae8ab116dee3f605e5185b"],["/tags/幸福/index.html","403d35bdaf4ce356a97abda0389a1da6"],["/tags/志茂文彥/index.html","ebd1c355c1d9d269ad0ede1fe5ced217"],["/tags/愛情/index.html","9cc2b592a0030f930fd24f74144211b3"],["/tags/愛情/page/2/index.html","42401a43148e84a351c9a5c628dfafd8"],["/tags/愛情/page/3/index.html","44d0a41f0d90dfa481a563c377d1c361"],["/tags/感動/index.html","bba33ac9524a226883d8050cdcd8f7bd"],["/tags/懸疑/index.html","a6e3ae32799a7680b4df013b8488fa25"],["/tags/懸疑科幻/index.html","69075e68ab6ef7ca4db73e61e57bbad4"],["/tags/戀愛/index.html","8a3ca1ad055d339642ca859a7e13bdc7"],["/tags/成長/index.html","a86f5a191eea924680e1b46343eeca21"],["/tags/成長/page/2/index.html","7c3a844c987c6e503a6692cced550e5c"],["/tags/戰爭/index.html","3e0119f8b887a82a54bafd8e3a447630"],["/tags/推理/index.html","1c550a11bac6de497829d393cb0c3a17"],["/tags/搞笑/index.html","f7f5f8c26ed7e7229ba5d6404a8c001e"],["/tags/救贖/index.html","0bd16e28b53e875b1b64edf5a81b027f"],["/tags/斜線堂有紀/index.html","c364be3c81ec54c18c5072b7df2a26b6"],["/tags/日常/index.html","1a832e4720d5987e709f46798778f95a"],["/tags/末日/index.html","406fc048e13d786b3e9876e84f1abad0"],["/tags/校園/index.html","ad76da47f296630be27e1bba4dd4662d"],["/tags/武俠/index.html","f711bd0342750634c9be38c6ded0c88b"],["/tags/武俠言情/index.html","ceaf828d28e5bd64a328f0ddf6382e90"],["/tags/漫畫/index.html","d57f55cd666345d5ae06c7b1bef8b5a1"],["/tags/生命/index.html","f30659d7597f9bfb0fd05036e2d58254"],["/tags/生命/page/2/index.html","cb1be06656dd73c4182268b749b59aeb"],["/tags/短篇/index.html","e2e4237ab5b6374051cf299c86db5e92"],["/tags/社會/index.html","c1df0f726047ed202bd6ba553f9e9724"],["/tags/科幻/index.html","060dfdc763025f3abf684751a94f1562"],["/tags/童話/index.html","39d706d19c432687f9ff102e6bce766f"],["/tags/競爭/index.html","1a9c6fbc35b3d2aa838ec164a805db67"],["/tags/自我/index.html","9f2fe8aee283471e9ba56e7e037c9fb8"],["/tags/自我認知/index.html","abec4379c601f6ecfbd6b7f3134a4bcd"],["/tags/葦舟ナツ/index.html","87165c137ebab3f6ea793e6fa04d44f2"],["/tags/藤萬留/index.html","dc5f2ad108dd58b6e59bb5220da34f54"],["/tags/親情/index.html","41e59104f3e760382defbd84bf33a671"],["/tags/雜項/index.html","aad363dd5364f08bccad1a374fed9176"],["/tags/電影/index.html","09d41ee4b4bede1e410ec44c54781a63"],["/tags/電影/page/2/index.html","0a4f42c0debefb7a57e3f57e6313eaa3"],["/tags/霸凌/index.html","8294a6d8295656b39a7ea7c011da7995"],["/tags/青春/index.html","f659d3ce0444d876349e98d56d9aef29"]];
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
