/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","20a16165e289b834e4cf02bc5b135da8"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","89b1eb2e081d24f5980a362213d8b36c"],["/2019/12/25/Review/無法計算的青春/index.html","0ecfb1fe447ef26fade0c8ee6cb22a48"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","1bfdd7f1cb28958b494eea255152a166"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","dbd1fe1436a0369fd75f48849a7f7a84"],["/2020/01/19/Review/下雨天，不上學/index.html","6cdf8435af455def008250a68535e1c3"],["/2020/01/26/Review/三日間的幸福/index.html","f88886854d9bb855af55d3094e17dabf"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","803b323b47236efac8c4f767de94f068"],["/2020/02/09/Review/青春期超感應/index.html","88ad7d2ec15cac07b0a1c8a1c5e24e62"],["/2020/02/15/Review/又做了，相同的夢/index.html","4962876666cccfe0522f757e974847be"],["/2020/02/22/Review/回憶當鋪/index.html","1d1f4be2b42555e25bdfe45db7d1f904"],["/2020/03/22/Review/不適合自殺的季節/index.html","4f8b269a043318838a72054eb5d81bc8"],["/2020/04/26/Review/我們都無法成為大人/index.html","632779334c576fc706c3dd61bd59b4d5"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","a809fc6022d6b8ccac04ee0d91526a37"],["/2020/05/17/Review/人間失格/index.html","537a8bbfa0e889994839bd44b0cdd9f2"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","a8823cf1fe767098f987de9daef0986a"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","b0a5ab4b78de69040e71a7f0cff76ca2"],["/2020/08/01/Review/銀河鐵道之夜/index.html","2c75e39c4ff3c9a7dea017696304c665"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","9540928425388454cad3a13ab7d5d421"],["/2020/08/16/Review/15歲的恐怖分子/index.html","2551c7aec3b1b0fd75cf40e20e2d5a81"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b028a43d495e4ce18375509f0c4087dd"],["/2020/09/13/Review/羅生門/index.html","bf014b04195cd6a1e87649956a2ffb82"],["/2020/09/20/Review/闇夜的怪物/index.html","752bbc793e48ecf746732bd20d874a11"],["/2020/09/27/Review/14歲，明日的課表/index.html","3dd10d94fe6817be6f46dfe55448a74e"],["/2020/10/04/Review/致十年後的你/index.html","0aa1e8f3b6ee6f1ef35d645e76dd13f7"],["/2020/11/08/Review/滅絕之園/index.html","b059614d82ca4bc0b516df9cbc7d30bf"],["/2020/11/15/Review/將愛拒於門外/index.html","59b2c606c9fd8f107bd5050aaed4e7fa"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","c835d6361e028aba0ba07dc9bceb883a"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","4cfacd134b61f44c885e6064e0f03e2b"],["/2021/04/22/Review/道印/index.html","4e0164f9e015ec46a8e07eeac23d143a"],["/2021/05/03/Review/戀入膏肓/index.html","c4aa1d14f18e2972286628bf909fa5b7"],["/2021/05/10/Review/Dice/index.html","0c10f5148419293f735273ef3f94af04"],["/2021/05/15/Review/魔女之旅/index.html","bb88011f72750c58144bfa00a63642e3"],["/2021/05/28/Review/戀愛寄生蟲/index.html","bc8acef7cb395cd5b642a6f7da596b8b"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","58ece4280f1097d70f17603a933c27af"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3878126046a00d9abdb166480900ab35"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","41444ec4a7f75c46ad7a6e58a1c5844a"],["/2021/06/05/Review/流浪的月/index.html","2203a03fbfcafeab41cf0354b0be64cd"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","ce82783899b939dffa6e0bf1f2b3bc52"],["/2021/06/13/Review/第一人稱單數/index.html","435ef3ee72aca18c2b7b7ffd7d99c2c9"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","c0abd669a5db03169cbee281a32c73be"],["/2021/06/16/Review/願你幸福/index.html","b9722c3a526ff34d66eb334192216897"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","a3e9d1497ca5e882ef10252a7e4c2064"],["/2021/06/21/Review/神隱少女/index.html","1c2c8e8c7951d34d40edfd5d2c38ae97"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","c85dd4d33e7693bed2c51f4b6cbf8ec7"],["/2021/06/23/Review/天空之城/index.html","fd89ebfc2384c60ebffe34c0f5080fa0"],["/2021/06/24/Review/魔女宅急便/index.html","2b0a8e1bf04ff502a5d8700ffe067f2c"],["/2021/06/25/Review/借物少女艾利緹/index.html","10ab30c1c70804bdf0815f2b58ee5fe8"],["/2021/06/26/Review/魔法公主/index.html","dea527bf879e0a7d59dc0bb031a89b35"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","e251ca4ba9a5fc7ce4a1bf95642d3539"],["/2021/07/04/Review/飛雪與劍/index.html","abaf3a340c7358c7241378f74cca0d02"],["/2021/07/09/Review/地球防衛少年/index.html","1b98a51b061a264c86d63248ac531ac1"],["/2021/07/12/Review/Angel Beats!/index.html","eb4a46bd779824925c4908a3d1699478"],["/2021/07/13/Review/Clannad/index.html","ea3517f42e6a9770fb6c4cca7611a6dd"],["/2021/07/15/Review/AIR/index.html","87d4a2c51f0ced5bcae8a280946dd73d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","89e3c410b4037c85ac6b500e70c06870"],["/2021/07/15/Review/螢火之森/index.html","4229da2455ed6d7b23e3a05bd71947cc"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","6030ee295b40dd7279b6555b4972c5ed"],["/2021/07/17/Review/奇蛋物語/index.html","22709c4f226684fc66de2bfb6e1e8033"],["/2021/07/18/Review/Vivy/index.html","b496f77bed61fe51182e5874b014835b"],["/2021/07/18/Review/請妳消失吧/index.html","39263bdd14e50a9974cbe80f5d9a8542"],["/2021/07/19/Review/漣漪的夜晚/index.html","a7eca2e145f649e8140e5963b77f6688"],["/2021/07/20/Review/月色真美/index.html","8a39b865e3979e451875d0d2f1022107"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","3e598e5cb8a8ea5dd14e47fd8515ebf4"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","c7d0087e935883a738ca9f70f3296b64"],["/2021/07/22/Review/罪惡王冠/index.html","e28b3a4f51e72477d6a79469f15bb476"],["/2021/07/23/Review/弱角友崎同學/index.html","87416e51665167da34e558f58a365b19"],["/2021/07/23/Review/惡之教程/index.html","9490b4cd793ae5c7b44f888743440098"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","b8e98215017ac8c9a102d25b2539b4c4"],["/2021/07/25/Review/魔王勇者/index.html","e980afd9cfbce8bf67d02669d43b3834"],["/2021/07/27/Review/一年A班的怪物/index.html","69604d84629897d51b8b451faf893f8a"],["/2021/07/27/Review/奇巧計程車/index.html","be8c323bedb4b9cabc11e30bc4120a6b"],["/2021/07/27/Review/專情的碧池學妹/index.html","7c2a74b01cd23a23b0fc3829fdf36e2f"],["/2021/07/29/Review/只有我不存在的城市/index.html","fc65367a6000ed2ea1d8049f82192f92"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","801aae4f52ea94c5f367c4870a9f7f90"],["/2021/07/30/Review/可塑性記憶/index.html","cba735d7a6b067b7a18b186ece2f61ef"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","0aaeecda65d644a27d42ef6889932583"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f65118bff0749f14397c5ec940d90ee0"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","feb216f851ecdfdb53b2d6ef97f3da5a"],["/2021/08/25/Review/清戀/index.html","57f165c020f8271e75eeda74d091b3a9"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","374d62a80b2742e198221f2950501e81"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","66dfc63d355a06cdce1a908866e70ffe"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","16d5772d7d31e6d0f46d8c57ecd798d4"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","dd4f071747e90d766a314601b160013e"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c0166bf329564c68906385bd7cf3791a"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","8e6a1a1ad3c98218a51bc3ff2ec06b5e"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a64a8e4ab3594ff421cc70ca33dccd74"],["/2021/10/16/Review/龍與雀斑公主/index.html","8a80465cdcd8bc093f56159f0a63001e"],["/2021/10/19/Review/孤狼不想開後宮/index.html","49b5da4f874db9f1a79cdba136a24060"],["/2021/11/13/Review/徹夜之歌/index.html","0f7f453e5258e6be47655a02b28c53e3"],["/2021/11/24/Review/武煉巔峰/index.html","ed982ebdeb996adeb2d08afa4e7355d0"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","59d409971b38eab325c981860a4afb5f"],["/2022/01/28/Review/神醫凰后/index.html","8443240ff08afc282d7a1378bc120c0c"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","b719cfda3418ef9d77c8dc226d3a6eb2"],["/2022/02/13/Review/夏日幽靈/index.html","782ee45e90654316e99fbcfcf7f9ac3c"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","72802d5992ff8b12c02b474c0745d3ca"],["/2022/02/26/Review/賽馬娘/index.html","dc2c19dc04dfa9aa1a3b13d341c5e193"],["/2022/02/27/Review/大欺詐師/index.html","4e67b79bed0df7835a885712d9df6eb3"],["/2022/02/28/Review/前輩有夠煩/index.html","a1a4b9b911f5152d14a8d5517f96123c"],["/2022/02/28/Review/碧藍之海/index.html","bd74bf98059bb46bfdb8788858a83d5b"],["/2022/03/05/Review/落第騎士英雄譚/index.html","b2aa6b7e013e84c3eb89f91989f79165"],["/2022/03/06/Review/Another/index.html","1ee42cf631e0f2917b577383a88025fd"],["/2022/03/06/Review/入間同學入魔了/index.html","379ebb256ae656b9b176f185305ade70"],["/2022/03/18/Review/再見宣言/index.html","94f8e39369650cc9f18617cadf72794a"],["/2022/03/23/Review/生若冬花的妳/index.html","0033abe916e1e1a3c0528c61fbf8fad4"],["/2022/03/25/Review/天之弱/index.html","8370fdf64e271269769fb37e0ff5adc9"],["/2022/03/31/Review/滅了天道之後轉生/index.html","f3128d0f5edc40a1f3f3be0b4b6e9a07"],["/2022/04/30/Review/泡泡/index.html","b8083576ad5aee681f119da6cfb467a0"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","c4eb590cd583eb0ce2128730db4172da"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","aa7b3f7bfa85f7b8dcbd11df35e86c3e"],["/2022/06/13/Review/偵探已經，死了/index.html","ab0ed154ee225d46886c688ae759cad6"],["/2022/06/14/Review/黑色子彈/index.html","0f31ed289e992732bb83d122588135da"],["/2022/06/15/Review/黑白來看守所/index.html","8aaeb7876f4f4ca35032e399666d61ed"],["/2022/06/16/Review/虛構推理/index.html","1c5fa43892dec22c12d4bad7efba8cc3"],["/2022/06/17/Review/戀愛與謊言/index.html","1e4be3a93178a7acea4434122680b3f8"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c23082041711558db86e852d8b76e040"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","173de70f2ac0eb1668fed9bb378d9e36"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","fa2784985e4f4a98ffe2445c4a5c7101"],["/2022/07/03/Review/Hello World/index.html","4e3988252e84cc9fb48a04825d5c1e6e"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","e1ae128a57deaffdb4bda4aba042bdd9"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","f10ae63e106639dc50b70540fc747bcb"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","b20403ca333efa9746b52238b3c51731"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","8a4b16165931e7733c8c4eec40ba061f"],["/2022/07/16/Japanese/動詞分類/index.html","587c27c2fba7583ac530061e88173306"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","a59ef371ba3950364a87bb35b247046e"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","ea5bfba79c9806712064c4d07d13be6a"],["/2022/07/17/Japanese/音便/index.html","1ce1e0873f49cd7a3ecfc117f9d086fd"],["/2022/07/18/Japanese/動詞 時態變化/index.html","900e505a71ef41766ecfcf9c0c8c6ff8"],["/2022/07/19/Japanese/助詞用法整理1/index.html","38419537560d2e993ed6c55f3270ba92"],["/2022/07/26/Japanese/助詞用法整理2/index.html","5e2286be67fb23e2059a22a9d6aac243"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","fa5944b64c67d734a112d10477190285"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","8648b4b005d577e9f922e5fdcf1972d6"],["/2022/07/30/Japanese/疑問詞/index.html","6eab4dba517bf098e2d52c9030e1bfca"],["/2022/07/31/Japanese/助詞用法整理3/index.html","17ed4116ad9df199bd6fb936c79d56c0"],["/2022/08/02/Japanese/副詞整理/index.html","48c77cdcfe3a1475643e05b95a2451be"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","7008dacb9318d147612af719a2be50b8"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","f68388123c66ac016ba706f1805068c4"],["/2022/11/22/Review/組長女兒與保姆/index.html","a53c293f74a13052e2a36dd45b101bd2"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","21fe7e3d0232b7e3ef258b0518bcd50c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","8cb61db4f89d236d5124e5d991159df9"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","5fbde6620488903b1b911b2e50e449ff"],["/404.html","a91cca3591fbc73e858431c4f64c4953"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","6ce935fbabbcf923e35a45682e3fb25d"],["/archives/2019/11/index.html","ce0d3e669cd42d71969d195eb69fc0e0"],["/archives/2019/12/index.html","711383a9b9d4db9b7314a49380f4bbe0"],["/archives/2019/index.html","0c61384e51ee6e7258275496155e530f"],["/archives/2020/01/index.html","ba4483655ee87a4349ea78d204116fbe"],["/archives/2020/02/index.html","31cabd4d3a52ea2ce78da097be2e1626"],["/archives/2020/03/index.html","a9e649fc06327481873fe352a14ed972"],["/archives/2020/04/index.html","b6090d244fa8298f17abccfb9251374f"],["/archives/2020/05/index.html","8420bd6982b5544024c4995659cbd025"],["/archives/2020/07/index.html","f85eaccda2eb75a2075c3cd098cf3362"],["/archives/2020/08/index.html","63b51d8eac388a7e211f78935ddcd206"],["/archives/2020/09/index.html","912da18833425f11c38ed1d5cc601982"],["/archives/2020/10/index.html","041c8b637eb6e2b8edcbdcdba31b0649"],["/archives/2020/11/index.html","bd8d387e88839e53b8fc00a21bfa80b6"],["/archives/2020/12/index.html","a6c18891b9b4551486eeaa8db2b453ea"],["/archives/2020/index.html","17d54cc693f29a91a8daf7448beb1564"],["/archives/2020/page/2/index.html","bb0a378be305a207b3537f7531891655"],["/archives/2020/page/3/index.html","1ddc9d07a5d2ada089b4a40495b5bfc2"],["/archives/2021/04/index.html","c355e046e655f20df764088bd612b513"],["/archives/2021/05/index.html","d8fe3d8b70aecc947ec9fec18de6c98c"],["/archives/2021/06/index.html","3ecee3f2b3fdf015f7f99f72f52eb2dc"],["/archives/2021/06/page/2/index.html","5389e5f156640bdc7e3355afbcfada07"],["/archives/2021/07/index.html","fcaf25bf54a49b47f3ce41c0e1fcf01a"],["/archives/2021/07/page/2/index.html","9a7e29ad2321b826579e3e2f0d506579"],["/archives/2021/07/page/3/index.html","85f5a701c41aae0347ab5f85058a8746"],["/archives/2021/08/index.html","29f32f962a178e5180f361a37c1eb4f2"],["/archives/2021/09/index.html","0d371864d544b485d0d48472433c6784"],["/archives/2021/10/index.html","6f581394b5424f0841d45d6ab5623b66"],["/archives/2021/11/index.html","25b4e1905a8d07c38cf130beb030d50b"],["/archives/2021/12/index.html","8665f500739eb6f23bfb6bd91380bb32"],["/archives/2021/index.html","f8d1b2fa5f3f526aca0c64f1733beb90"],["/archives/2021/page/2/index.html","32f5fd274a5406c32af4ca906a3f682c"],["/archives/2021/page/3/index.html","d496999af8d9a5b4d079b2936013d84a"],["/archives/2021/page/4/index.html","95bbc58dcf02ac1b7ca737e7a6880fd4"],["/archives/2021/page/5/index.html","37127f41cae30fd9d3b6931297ef5993"],["/archives/2021/page/6/index.html","cddd766b6981c30d61895d2f0b059a81"],["/archives/2021/page/7/index.html","94b4870babea5ed3d2888455cae9e2ab"],["/archives/2022/01/index.html","1610dadcb5ce89dc8767ebef3323895d"],["/archives/2022/02/index.html","a2c0af7154c556c0134e23a46bce2849"],["/archives/2022/03/index.html","e0efce275e3f30257a6a2c8982318ea7"],["/archives/2022/04/index.html","06918512727765b9f9054b4877b60184"],["/archives/2022/05/index.html","0715b973c6bb74c4b8f33978d184b01b"],["/archives/2022/06/index.html","c51c4b50739bd67e995e02ce3c00bdbb"],["/archives/2022/07/index.html","f991f3cde9a28cbadd3c83ab7bcf3c4e"],["/archives/2022/07/page/2/index.html","ed4cdc2d33e529fc2fd1ac6329bdd260"],["/archives/2022/08/index.html","4d3854a85a11a9bf661a304f04f6e7a4"],["/archives/2022/11/index.html","c54b1f2a99767753d5943d37c81bacc9"],["/archives/2022/12/index.html","615f0028c0225a0059b0624a4887da23"],["/archives/2022/index.html","22e9724568ed590d89126d4f408100eb"],["/archives/2022/page/2/index.html","654715261eed9024eead1adc56d70bb2"],["/archives/2022/page/3/index.html","fac5b8c02f47ca758b0712af807bbd57"],["/archives/2022/page/4/index.html","8eb02805e2ba295e15e15998bfcaafcd"],["/archives/2022/page/5/index.html","aac1489e41b1b712d608085b3b081cfc"],["/archives/index.html","2cfc6d861a8e13feff67bf8027f8f910"],["/archives/page/10/index.html","17552ed01c32858a94de6d31de0d847b"],["/archives/page/11/index.html","f8eae4813a08ceae11e31d5e9085ad64"],["/archives/page/12/index.html","23827f266a867dfba1dbe3b014c99bbf"],["/archives/page/13/index.html","6662750452fb28fba1a280dd33424fc8"],["/archives/page/14/index.html","b828daea68acec50cb653070f4fa7b79"],["/archives/page/15/index.html","cf5c623fb18558bfc9c5720b657ba1fd"],["/archives/page/2/index.html","4539f037bd6bec7b7e50711145b9cd51"],["/archives/page/3/index.html","6d4ae7edd2c4700ecef4d2df6cb507fb"],["/archives/page/4/index.html","cc81b955a241a0d4ef936348609b877e"],["/archives/page/5/index.html","e1f084495a6662e7339afeed45a31bb3"],["/archives/page/6/index.html","4b91006f0f25f53ecb9f2c8cb91bafc3"],["/archives/page/7/index.html","1772524c06f5b51bb9ff6063dd1a6179"],["/archives/page/8/index.html","7d7b7b3c764bb254671fc25f673f13c4"],["/archives/page/9/index.html","ff2d136e68dd4dc43d88e10bf40d99c3"],["/categories/Algorithm/index.html","569b2f72f4e85dbca7034280eac29504"],["/categories/Review/index.html","28d2b7e480911a8d6aea383b29772102"],["/categories/Review/page/10/index.html","093152e612d50eb0cedf2ffb399d5886"],["/categories/Review/page/11/index.html","a3e57f4801bd4074c939fb7e474b84bb"],["/categories/Review/page/12/index.html","84f810824facdf76ad9059416eda58c3"],["/categories/Review/page/13/index.html","35797f246902434081090dcc4dddcd22"],["/categories/Review/page/2/index.html","d6122472927118b88cba63a12e91747c"],["/categories/Review/page/3/index.html","6742f21ba744439e948585569e18241f"],["/categories/Review/page/4/index.html","aa5de3314bc9b7c60c3aac24ee78705d"],["/categories/Review/page/5/index.html","5d29f789e2ece39dfe65d6d1f1ef678c"],["/categories/Review/page/6/index.html","8afc96f496d970c24861625b345e54e7"],["/categories/Review/page/7/index.html","872297b72a2c925c69455061c97ab478"],["/categories/Review/page/8/index.html","63172eef3742d3af1b29c7ff58e46da9"],["/categories/Review/page/9/index.html","e91e655323658a1783a9df46846c0df9"],["/categories/index.html","0d15dbaba112bbeb7d13cccede9b3346"],["/categories/日本語/index.html","f4218d8482352f4115b530e646f2ca6a"],["/categories/日本語/page/2/index.html","3aa5cef57d317f68a7aaa438df4b26b6"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","97fbed410f85cdc694b555f8a097457b"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","86a0190f6163c1deaef720dc3d8663ae"],["/page/10/index.html","bee81afd644a58b26b4a7e3e3a6b8c63"],["/page/11/index.html","9366066515e6bcd5eaeb59b6c8ca9e96"],["/page/12/index.html","b74ff6714fddc8a0348e68bc56fba80b"],["/page/13/index.html","d93c0237860500fcc368f1fbdeb52a99"],["/page/14/index.html","600468dd04de4ec7db8b0b860cd84efa"],["/page/15/index.html","7c2c13664ab691c5482167e5848b889f"],["/page/2/index.html","3efe953421c13ca9d1154efa9abbdde0"],["/page/3/index.html","613828f0c77ae7cc354f3af00ba9a400"],["/page/4/index.html","654bc86aeccde3688c6fb367ebdc6971"],["/page/5/index.html","df34ee1fa378a7d96ef9b472fde1e2bc"],["/page/6/index.html","a33c3d83ecf88a800fb4b5f14ee42423"],["/page/7/index.html","f3a9ac6cf929d0a2194cd6dcf46cd7e1"],["/page/8/index.html","28eb39a86c6e854dd671c637156b68b1"],["/page/9/index.html","d71308fe4f6cadcd8179579de77c9658"],["/sw-register.js","b039a98cfa0b260f5b5cb2a1920c93f4"],["/tags/10分作品/index.html","fecc2e13796278a3cf9ae9c85df41c74"],["/tags/3分作品/index.html","3f9bd15284712cc0069b65709228a2db"],["/tags/4分作品/index.html","950029d79ee09f0b9399838b2917d4f5"],["/tags/5分作品/index.html","5180290a816b0b644c83694e99768153"],["/tags/6分作品/index.html","265bc345a73fe8941797578ab2ca4747"],["/tags/6分作品/page/2/index.html","fbfba0bed987ee0d653ff53c89cc2fef"],["/tags/6分作品/page/3/index.html","570f1f5bbd41b2d516977450ff64fd8d"],["/tags/7分作品/index.html","7baea49c352a2eef0eef9166815906bf"],["/tags/7分作品/page/2/index.html","6d9ee3733ee05b012f6ad88f40a90e91"],["/tags/7分作品/page/3/index.html","54d66d139faf4eab1863e9af9cf8e567"],["/tags/7分作品/page/4/index.html","ec4fba8e8affc377ad3d693f79fb4784"],["/tags/8分作品/index.html","bc2d175389908ec4d881c908cab00222"],["/tags/8分作品/page/2/index.html","6fb24523d947e6d7abc6d0c72a703373"],["/tags/8分作品/page/3/index.html","0669f3e4f67f314c5f2c50953ba566b2"],["/tags/8分作品/page/4/index.html","d0299645e3c75d71c7a56052ec480e09"],["/tags/8分作品/page/5/index.html","dcd794a9142caa89d8260c1425e49c2f"],["/tags/9分作品/index.html","7e1bc934a480db168cb261f23b569ce5"],["/tags/N5難度/index.html","d71b04797a3120fed2d5f85587a594c0"],["/tags/N5難度/page/2/index.html","f5f2270986ba32c677177ea9bc511a73"],["/tags/index.html","83a090e7f8ae9480f472da17e925f3bb"],["/tags/アボガド６/index.html","43c21608db407ea6f66c0e68f232a616"],["/tags/三秋縋/index.html","ee228b8276705836d9b0e3d93e859374"],["/tags/中國武俠/index.html","d7dc25b1013217d6f9b80c7f40668fe7"],["/tags/中國言情/index.html","fa9e37979b20b568ba4b834ab557c0fa"],["/tags/二宮敦人/index.html","9856471dcbc2b0bb12629c46f3b903c3"],["/tags/人性/index.html","a5e09765dcd2cb75d840c8b8f5aed4ce"],["/tags/人際/index.html","aac9d74d2912c8f59cb4eb1942ebcc9a"],["/tags/住野夜/index.html","e7cef9b6c9376cc70443b0ad437ec887"],["/tags/佐野徹夜/index.html","9a78d5702dee3e45e3737fde8dd66fe7"],["/tags/努力/index.html","d6390d19b24228b0df24a9038e8f8fc4"],["/tags/動畫/index.html","37e9be46136888a67b1515d00b4a930f"],["/tags/動畫/page/2/index.html","c348452aaf0e4a0706e78d405dcca727"],["/tags/動畫/page/3/index.html","e9eb5bfe18ae582376f816777779a5c2"],["/tags/動畫/page/4/index.html","918588c9ea4adc86c9f0f173e0382f40"],["/tags/原諒/index.html","3f3ec78970de5b791f32598d1574dbd9"],["/tags/反烏托邦/index.html","7b18fff38e4333907f864a9d29555681"],["/tags/啞鳴/index.html","358392e6a678a58b2b5183e954bb1833"],["/tags/喜劇/index.html","d2fe0103bfcd156973a3f2d8fc58956d"],["/tags/夢想/index.html","5cfada0a1195a3d7977d6eb502ccd627"],["/tags/天澤夏月/index.html","6b7bba0e36d85f287a299c709fae96e3"],["/tags/學習/index.html","98b41326859612e880d50bb90c8ea624"],["/tags/學習/page/2/index.html","6b90271ea590f7fbefe93ef938ee3f8f"],["/tags/宮崎駿/index.html","ca1f7e48163c2bc9b033da03889bb3da"],["/tags/小說/index.html","5aaab6d1859eae993c8c60e08d3bd254"],["/tags/小說/page/2/index.html","874d84d59d3988273738232fb19a123e"],["/tags/小說/page/3/index.html","b5a9abeadcf6d2c643acf9f328308544"],["/tags/小說/page/4/index.html","9e5fc85a1252363e36edb5b826c9293e"],["/tags/小說/page/5/index.html","55a6000074f2de2287bc7d3ca47474d2"],["/tags/小說/page/6/index.html","62fa1d69fe61497f8e476cbcec8b7ba6"],["/tags/小說/page/7/index.html","f37e345cece4c37564863ee0415ab519"],["/tags/平淡生活/index.html","6e7d4d1cf507c717e67d5b9fdd6138f8"],["/tags/幸福/index.html","7e1e12ad6e2b8663be092367baba0165"],["/tags/志茂文彥/index.html","7c45a76b037be135ade9212a734a004f"],["/tags/愛情/index.html","b3d82ee7627022232e8e8d17d55221c5"],["/tags/愛情/page/2/index.html","23d811e432fe4b421ccb16b19f23cf78"],["/tags/愛情/page/3/index.html","4a30fc1ab253fdd8f1d8c7edbbb76185"],["/tags/感動/index.html","761da88414cac1dcb51924d97a7e3294"],["/tags/懸疑/index.html","a881391be3ef0986f85bb58d269402a7"],["/tags/懸疑科幻/index.html","2fabb1c324d2bd62c9bae9f99bd85b40"],["/tags/戀愛/index.html","667dc2eea01c947863eda4624a21d61a"],["/tags/成長/index.html","1ae20b37bebeb2eb9e88e4023377686d"],["/tags/成長/page/2/index.html","3783dd35b95f7e8f63bae9896cb97e01"],["/tags/戰爭/index.html","0d43ca9afd6d3e45a75ca7e560a19c8e"],["/tags/推理/index.html","020af04ffee97428f4c76e6fa2c4bebf"],["/tags/搞笑/index.html","1043809bfff9e95eee1aa201a632b70f"],["/tags/救贖/index.html","aa798bfb2bf5f0416632058fffb20946"],["/tags/斜線堂有紀/index.html","c1680b709c178ed6a504f372874f4d5b"],["/tags/日常/index.html","d7e5e9a2db6e2c0de55cb3a7725fe293"],["/tags/末日/index.html","2ed4a79ad9834b2c48bffcede2ca008c"],["/tags/校園/index.html","b70dbdc03723e17d9733fadaf0806137"],["/tags/武俠/index.html","479dae8f9582cb1847051a610dd7d525"],["/tags/武俠言情/index.html","11e202c223d2e93f73056d2da3977532"],["/tags/漫畫/index.html","997c2b4307e718177047b815ee46d0ea"],["/tags/生命/index.html","db58ca16d19dd263161f1f3767df2c70"],["/tags/生命/page/2/index.html","f1da78c459ce5ff9ed4eb66fa32121b7"],["/tags/短篇/index.html","59477c6a528c683469bef8fee69a81f5"],["/tags/社會/index.html","d49fa9f3726bfa07f7705aca92a6cea5"],["/tags/科幻/index.html","6a05183811e9aef7443306e7a2da0208"],["/tags/童話/index.html","14b3a96e29cb5103a9d0d99eaab6d318"],["/tags/競爭/index.html","ab679f6a7628f5d2341b635140f752d5"],["/tags/自我/index.html","f4158fa4e59bc4ee2ab3ef085e0eced9"],["/tags/自我認知/index.html","3bb800e4ba7cf0f43c3f58f2ed767121"],["/tags/葦舟ナツ/index.html","dc58d2a32ade0542257672498035295a"],["/tags/藤萬留/index.html","82db9a93915e3e8b2b6657cec9121087"],["/tags/親情/index.html","a962a1b6d26e1e52b041b37e9e540d14"],["/tags/雜項/index.html","af115885b2c9831e9f2e0c2de8dcef24"],["/tags/電影/index.html","13081f4e8cdbb48af0ace77f9099ca49"],["/tags/電影/page/2/index.html","edfa9dac333e92c14662a58ee1495eb7"],["/tags/霸凌/index.html","4c98f44d7fd06f1eaad9c666ac7775f7"],["/tags/青春/index.html","611ae0b04c6896fa2854675699a0e996"]];
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
