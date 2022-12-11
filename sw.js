/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","d95c1a4aeeef8ae5e2cc87dfb550b2d8"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","d483337cd80c04906cce270df3e33782"],["/2019/12/25/Review/無法計算的青春/index.html","08a54f229f13a275ef3e485d2e9b1641"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","d57d5fd4a895027e6d6b3f71cae61849"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","2c53507df00d5cc6cd0c14c60503b793"],["/2020/01/19/Review/下雨天，不上學/index.html","55fae3457177932631c533fc54bb3150"],["/2020/01/26/Review/三日間的幸福/index.html","f598f96e0b096db62938517fa245e74b"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","234e67adc3bf091248fe4c8d08a43088"],["/2020/02/09/Review/青春期超感應/index.html","ece2e54cffcbbda10a8db8ce287079c3"],["/2020/02/15/Review/又做了，相同的夢/index.html","501502e38a765224e64caf068dc1013a"],["/2020/02/22/Review/回憶當鋪/index.html","3e1cb53e42e3e3f0e08e6e9634ce3043"],["/2020/03/22/Review/不適合自殺的季節/index.html","a7988845b2274b039241e7136c7dbbc2"],["/2020/04/26/Review/我們都無法成為大人/index.html","637c931830a1748f77f73293c0926874"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","18738ac95fae0df33842ce14bc277fa2"],["/2020/05/17/Review/人間失格/index.html","b4d542316bce8ef7907d57d1a39e6209"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","9fcc7c23d6b3f08db19f48092c116935"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","31c40eb4ee6923c3c03cdbd9e471897d"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6ab7e433f9f766605e9cc9685b2ae00a"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","a241e1cb9b71a80dc298733cdf12d2f0"],["/2020/08/16/Review/15歲的恐怖分子/index.html","5a4b7e669904099f1c54b8f7aa2ae1d1"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","cc70189882c8bc12a9b27ce3140c8452"],["/2020/09/13/Review/羅生門/index.html","2c55e196399a6d868360a7e9d77542da"],["/2020/09/20/Review/闇夜的怪物/index.html","c84e358185fac33f96af8c2787387f6c"],["/2020/09/27/Review/14歲，明日的課表/index.html","e3a05cd50c42fa3924209df479f89f0f"],["/2020/10/04/Review/致十年後的你/index.html","7212a8c99019b9e63c4b610ce3702f3b"],["/2020/11/08/Review/滅絕之園/index.html","d941415e8abc457a8173b98cc5a1d351"],["/2020/11/15/Review/將愛拒於門外/index.html","d7962c348a251c098c875630a22c856c"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","8a9cd00318a457ab6f8863c82466b1eb"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","27043afd315df9579679c4fbe4dfe515"],["/2021/04/22/Review/道印/index.html","338de3932379dbd587afcfc7e42c4e27"],["/2021/05/03/Review/戀入膏肓/index.html","23d9332f60312a9b2805fa49c0a2b5a4"],["/2021/05/10/Review/Dice/index.html","a98b58ccf18c2ac19c20045336dfcbe8"],["/2021/05/15/Review/魔女之旅/index.html","d977afb437b7e543ecc7e3aa9c181c44"],["/2021/05/28/Review/戀愛寄生蟲/index.html","665de7eb1c93d8dd276fffcb42b70219"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","cb8c51562864c3b87ae40db2b60e08bf"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","31760f9871436dd3f789e8fcbc09b230"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","55787a57cb82f56deb6fcf58ec9d4337"],["/2021/06/05/Review/流浪的月/index.html","b6a0d6aebf6cdfaa3dafac8c2cc67927"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","cec1cabc4afd3b7971b1e3406a09fd88"],["/2021/06/13/Review/第一人稱單數/index.html","2905a45ae5567b773194ffc8a110416d"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2dc0ec3d15ad60e03653680d931c409f"],["/2021/06/16/Review/願你幸福/index.html","592d497e7a8fde9488e9d11e5cdddf15"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","d5ee01c7991cf0e1e3ad9733505c2c21"],["/2021/06/21/Review/神隱少女/index.html","a0a7b03efcbd57dd2c9db4b2dedcc4c4"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","5f857be89f93467a537a6d2e04390b33"],["/2021/06/23/Review/天空之城/index.html","c5d67afbd83af613c4731302a9a5e77d"],["/2021/06/24/Review/魔女宅急便/index.html","45ccec2d6a521fed79604de85d72b34f"],["/2021/06/25/Review/借物少女艾利緹/index.html","7f17304b92a108a5c4c1d1fc457a23af"],["/2021/06/26/Review/魔法公主/index.html","c3f06c1d59ad95c530920bb889f578a5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","6be864285c338d2c4f4414eb798fb83d"],["/2021/07/04/Review/飛雪與劍/index.html","5ee97382a3fb5e081a0d0b646c58364f"],["/2021/07/09/Review/地球防衛少年/index.html","d67c730acac7ffdea7fb2451b3cef273"],["/2021/07/12/Review/Angel Beats!/index.html","600d9370d09883d6d049ac48371dd8bb"],["/2021/07/13/Review/Clannad/index.html","8beb337c8f4ff1f27aa4fc5f9bc223e6"],["/2021/07/15/Review/AIR/index.html","279e442daf719ebd673d5f80d572e48a"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","e5f3bdf5924d8d0665966e698e96b506"],["/2021/07/15/Review/螢火之森/index.html","670eac36c0b87590c2cee17672a022a3"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","139c6c4443a02f7c248b2b499780f925"],["/2021/07/17/Review/奇蛋物語/index.html","846148e248918506944f190fd0403068"],["/2021/07/18/Review/Vivy/index.html","f1b719b8076eeff6df6cd0612e463f20"],["/2021/07/18/Review/請妳消失吧/index.html","7c8754be9ca6528158c7b594d3040408"],["/2021/07/19/Review/漣漪的夜晚/index.html","e8cffc40791991ebf8b4444e253e0b10"],["/2021/07/20/Review/月色真美/index.html","88aa97edcc8b0d323d03237f3983bd78"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","7f7ac8f8432224e4b5813385e4d1edb2"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","55b687e4f4bb016a0925d6155adf032f"],["/2021/07/22/Review/罪惡王冠/index.html","7359313fd31192b7a56d88adc253fe19"],["/2021/07/23/Review/弱角友崎同學/index.html","27ac0ed94cbb27853c70c8e037452b7b"],["/2021/07/23/Review/惡之教程/index.html","7ee043a2d7cd0fe83e86d0a8add63864"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","235929429628e9c5304326f6de29b4c6"],["/2021/07/25/Review/魔王勇者/index.html","2ccc6027c53522e78565c66eb21ccbd0"],["/2021/07/27/Review/一年A班的怪物/index.html","bb3c8de39ff651a17943328bdb512a78"],["/2021/07/27/Review/奇巧計程車/index.html","4813c61b9213ddd8ecfd9e9bc109c154"],["/2021/07/27/Review/專情的碧池學妹/index.html","8dd1a2d99a9716b28cfa409aa083ad07"],["/2021/07/29/Review/只有我不存在的城市/index.html","825ba452e6d59c5f83f54204b43cde1d"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","11c3cab37faf83a1a3c2b1642a5db01b"],["/2021/07/30/Review/可塑性記憶/index.html","32155eba86faa1d2ad1ff43bac8f0558"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","ec7089151e434b460926907e15a07e10"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f8359b72d6bb9507a3b8a54c5e849746"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","2b87c9578875532c138e8687637eb0e5"],["/2021/08/25/Review/清戀/index.html","0433593f77546098e2514edb43f0903e"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","c29cac1a9a61ccb5b8ee1dbe155d1e37"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","86c07ab89e63f3ff7d4867898e4619e4"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","234f11828a56b1cd684bcb6a33a9a0db"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","b07d44899a61e1711132d9f1c7ceb087"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","130e382d49d8c95d75b1dfbb76f2f064"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","e98e674564a92f281ff6730331010065"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","fe39d13e78b9eaccd96fd5dea5f7c772"],["/2021/10/16/Review/龍與雀斑公主/index.html","bee729b697b7854e5aa45dbe4f7d8677"],["/2021/10/19/Review/孤狼不想開後宮/index.html","84bda1c79496ef2dd094b0807ac83719"],["/2021/11/13/Review/徹夜之歌/index.html","59e90e77a2e469c7d6ec90b285fde252"],["/2021/11/24/Review/武煉巔峰/index.html","7ebbffb3c1cec5e44cc0e6b7820a20c1"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","80a1bfd8c6795513287cd653a9eb85b1"],["/2022/01/28/Review/神醫凰后/index.html","ea80990bc31c72bbe50b6ee82539175e"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","45d2c6f4dd1cf66bd1f8f4ee3f884f22"],["/2022/02/13/Review/夏日幽靈/index.html","36213d5176cd04ab6a6b7b9e27aada3f"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","35990119b76117a84c83310c5bc35952"],["/2022/02/26/Review/賽馬娘/index.html","2e2112802db87bb5c0dc0d4e1f9f3c1f"],["/2022/02/27/Review/大欺詐師/index.html","7b8b09fcf0445ff322fa39214fc2fc90"],["/2022/02/28/Review/前輩有夠煩/index.html","6ea3fd42f84162cfc3ff11ec28cf29ba"],["/2022/02/28/Review/碧藍之海/index.html","825928ae21f983c320e7345d8c277c35"],["/2022/03/05/Review/落第騎士英雄譚/index.html","55ee26779a3687d29651dc39753134ab"],["/2022/03/06/Review/Another/index.html","7de5c328ba0a77e9d84b20eb330572f0"],["/2022/03/06/Review/入間同學入魔了/index.html","7268c2bee2189e2011a30323b0966600"],["/2022/03/18/Review/再見宣言/index.html","5f9bb509a12a4442c785c861416b8ef6"],["/2022/03/23/Review/生若冬花的妳/index.html","6c1ac6c9aaceddf4f159a7e13de26ff6"],["/2022/03/25/Review/天之弱/index.html","2bc8873a65d7e8263eee9ed800240a38"],["/2022/03/31/Review/滅了天道之後轉生/index.html","51d194354c4e2dc0abff6e87f9f8ce0b"],["/2022/04/30/Review/泡泡/index.html","f2739070c66744f405c6939a9e22daa5"],["/2022/05/04/Programming/Dynamic Programming/index.html","7162f380c3b7c9f12816d730957aed31"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","5f52877cef7cf9939158de96ab84c132"],["/2022/06/13/Review/偵探已經，死了/index.html","35555c5c7e512a8e3cba432bd0803951"],["/2022/06/14/Review/黑色子彈/index.html","5247241b052d806f4318725b08bf9282"],["/2022/06/15/Review/黑白來看守所/index.html","20445178f6f408ae953d5c8a28dada86"],["/2022/06/16/Review/虛構推理/index.html","0268eba32b721318be846cb8806c3020"],["/2022/06/17/Review/戀愛與謊言/index.html","a2ba36b6e79510f64cf782bc10382013"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","4810362ca1725d93aca5949458ca865f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","e317ad550eda2d690e9411fb63d58468"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","0d5813fb3cccd419bb9855061e8e0a82"],["/2022/07/03/Review/Hello World/index.html","ca623320ddeec78485a467af8f849794"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","54fe8df8f14530e9921d70da10081d45"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","f91f14666036e5e7de3a5b64d35f1c3a"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","41fcbb11968a8e0f45d34d01f9fde2ed"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","8b7d7a0c715cdc033c0a4d4347b10877"],["/2022/07/16/Japanese/動詞分類/index.html","c4fd53c6fe312b0accb54578bae4b3bd"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","a2014f8a80a2a320d80a4090797615a9"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","7eb17e69be944bea4d47a07bd232fb24"],["/2022/07/17/Japanese/音便/index.html","239795784fb33769635eb0128914b909"],["/2022/07/18/Japanese/動詞 時態變化/index.html","de520623dc07f0b85234f1c15ceaa6f1"],["/2022/07/19/Japanese/助詞用法整理1/index.html","65826d0f8b9387d1656a17acdedeade4"],["/2022/07/26/Japanese/助詞用法整理2/index.html","472d8f1aa2a3ff535688a5882cbfe1bd"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","6b15bd668aae552144853d146980f47d"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","bcd52f514ac1aead86317b201e81ff4a"],["/2022/07/30/Japanese/疑問詞/index.html","014dc62f922b46cfe3485345b54b6ed7"],["/2022/07/31/Japanese/助詞用法整理3/index.html","6a27c420502b64744f9db073b6878ddd"],["/2022/08/02/Japanese/副詞整理/index.html","73d361a3e4bfa181ab7fa83e1064c926"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","de7d3480e0d970f9f3ba68ed198090ad"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","eb4444a494660e157ee7cbc0e66a5820"],["/2022/11/22/Review/組長女兒與保姆/index.html","399f90e177e06a68a9853e537c764701"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","91a763acb1fd6866b64bc806de5942f7"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","e0e82659bdf151deff8a41139e338417"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","022ff7e6382b662172a996e24f245527"],["/404.html","cf24de298b150959d7a20d923a62e714"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f6bc53b36f6d08a73a35978d9b11a42d"],["/archives/2019/11/index.html","aaad28eb6d2e682ac8253c2194739344"],["/archives/2019/12/index.html","dac3cb277150856653a119a04c2850a7"],["/archives/2019/index.html","880b579017c5e3a2d91d132c10c79220"],["/archives/2020/01/index.html","6601cd511340d5bdb0970e753110aef2"],["/archives/2020/02/index.html","d92ba9cf5651443c8917798fa13d0d26"],["/archives/2020/03/index.html","755f0d67b8b4c49fe8c6060ce32c5806"],["/archives/2020/04/index.html","83daf3aea2b858d70490edaf50e98416"],["/archives/2020/05/index.html","f2bef20dd84d8eb93b6a7e70679ca2e7"],["/archives/2020/07/index.html","17ed8c01f4e5f09ca006f2819829b752"],["/archives/2020/08/index.html","9817fb93790b4faeb12a282b28de384b"],["/archives/2020/09/index.html","c4835a80ef8408d4364c60b3e001a698"],["/archives/2020/10/index.html","8a4259c6e30dc9f69a45709f353a8020"],["/archives/2020/11/index.html","fd789726175e6da615fcd94d43a23ca6"],["/archives/2020/12/index.html","1471a54c8db73fb8097da8796ed577d9"],["/archives/2020/index.html","d94e9d792fd9e5fa0ba1bed74f80733b"],["/archives/2020/page/2/index.html","88364d70d762c685feb658621aff01fa"],["/archives/2020/page/3/index.html","6abb469747d5c5ddaeefb089dcf80239"],["/archives/2021/04/index.html","cb571063212414793df7163df1cee576"],["/archives/2021/05/index.html","dfc82b47aeb3857731c97fd2eca38e0c"],["/archives/2021/06/index.html","83c54028aa22db1b28cedd2bf380d5da"],["/archives/2021/06/page/2/index.html","cd39219388dd2dcfaae458b3f9f92755"],["/archives/2021/07/index.html","508bffd2519e78e44926d9feabf1c1e7"],["/archives/2021/07/page/2/index.html","e0ef68f45a041d2988453d133926c1ee"],["/archives/2021/07/page/3/index.html","f77adf4ba303345406bd64463e37e92e"],["/archives/2021/08/index.html","381974e845b04147724023c8abbabc81"],["/archives/2021/09/index.html","27b65ded7d5f3390aa858aaaf8d38a36"],["/archives/2021/10/index.html","3cd25207e3b128faed2faa414a4d9134"],["/archives/2021/11/index.html","4518d9ec3773b0cb034b66eca96c97a9"],["/archives/2021/12/index.html","0d64ee7b7d0addee576278349b3ca7c6"],["/archives/2021/index.html","4a1a8c76b2a12f5e431e35538e037f35"],["/archives/2021/page/2/index.html","d3bcda46937a89fc0dff5a721757e0f2"],["/archives/2021/page/3/index.html","feea33980b856b5d2ba362773d4bb798"],["/archives/2021/page/4/index.html","d3353eb1406ca04ba22019a8c20ffc18"],["/archives/2021/page/5/index.html","cdc168276038598be4e87459480ca75e"],["/archives/2021/page/6/index.html","cf294043a3dfc5cff57d9c908915b371"],["/archives/2021/page/7/index.html","8770e3a8fb7d7352d68c821227d94951"],["/archives/2022/01/index.html","f0c59bd804c5e3e78adb1018730764c9"],["/archives/2022/02/index.html","fe0cab61c068096c33691cf961bfd22f"],["/archives/2022/03/index.html","6b4ad01a3f55305f140f8f37fe957f15"],["/archives/2022/04/index.html","b3dcef93055e097244f4cb3387fec9a9"],["/archives/2022/05/index.html","aab138213c31df05429ddd2725aa2cdd"],["/archives/2022/06/index.html","0ea35b12d7d97b551ee6b4569285135b"],["/archives/2022/07/index.html","e9fe107be1ec6a30c87096ab0914318e"],["/archives/2022/07/page/2/index.html","7438495ea49ef060491841de73f8d728"],["/archives/2022/08/index.html","3dc89694339ca15ae2be88d2fd775f56"],["/archives/2022/11/index.html","d27c53c27f6837372b7cde0e06d84945"],["/archives/2022/12/index.html","bae1754bbfe87b1decf3579cba632c5b"],["/archives/2022/index.html","3c157d0efd503e431f2de376c4de61e0"],["/archives/2022/page/2/index.html","031218c40d3c4309a5b08d729093e827"],["/archives/2022/page/3/index.html","8c60ee62b37e3da680fd01851da8f78c"],["/archives/2022/page/4/index.html","7bc9d04bd0ecae24f04a868fa29a3ba6"],["/archives/2022/page/5/index.html","0ff7a257dd3fe3e4c52763ce4cf3e07a"],["/archives/index.html","6f71207eeff5ac94ae637b2632ec42cf"],["/archives/page/10/index.html","df8305b48015fb4f3da48a313fdb966a"],["/archives/page/11/index.html","45ab30b24ab021e8a6a88a6eec801361"],["/archives/page/12/index.html","77d3cbb7dc737f7bf7ce4aaa2cbeaad0"],["/archives/page/13/index.html","70f2537ce59cd337d22d19a4abeab7b7"],["/archives/page/14/index.html","e73ab03eaeccb20dcec666f2d0058c1e"],["/archives/page/15/index.html","c033adba6f46c7cac30929ed7def0726"],["/archives/page/2/index.html","7ce8b19c7b4513b28b2411781c56ff66"],["/archives/page/3/index.html","5956d247459c43198b343e4bdc713661"],["/archives/page/4/index.html","c9ec7baeb2863c9ea0dd029577361941"],["/archives/page/5/index.html","1c0c4b63d058bacee5fd0a9be5145d16"],["/archives/page/6/index.html","f5f6c387ef034a568cc0421f1dbdd13f"],["/archives/page/7/index.html","c64dd82eb780e48fccf07d5dfd9b0a12"],["/archives/page/8/index.html","1b7c6423df88c88965fff756e47b3fd4"],["/archives/page/9/index.html","8e3d979243d99ca66e4b4cfe7d8a06be"],["/categories/Programming/index.html","2fee1becf494ccca68d3fb2d210e0def"],["/categories/Review/index.html","b48ff1794051c966ba7286f0d3f766f1"],["/categories/Review/page/10/index.html","3377be3b68a332242a35b91a534b18e5"],["/categories/Review/page/11/index.html","d4a242b4283a03b0c65f7dc41d411e83"],["/categories/Review/page/12/index.html","8a42d72482354224cd92bcf7f4e3ccbe"],["/categories/Review/page/13/index.html","37ed4b9b1b212c3229a16abc80d87f4e"],["/categories/Review/page/2/index.html","02c1775811dc341aab923f5c05a8cbab"],["/categories/Review/page/3/index.html","686edb0354ae9aa4248f62715c803ce0"],["/categories/Review/page/4/index.html","ee8b3168c6267837028cde1671f0fe3f"],["/categories/Review/page/5/index.html","c11b37e2aecc6cea38bdb49b976f0643"],["/categories/Review/page/6/index.html","78122ff458104c9b0d7cb24823755282"],["/categories/Review/page/7/index.html","a9fb59a0374990eb59c024f8a69387c9"],["/categories/Review/page/8/index.html","d5678a79d0ce349d9c9b30cf65f76d86"],["/categories/Review/page/9/index.html","5015ec107af883d3a438fdc20f18e347"],["/categories/index.html","d9ef14a6f247bc2776b91f41f4febbaf"],["/categories/日本語/index.html","a28a417d1063e75922d94d59e7a978d2"],["/categories/日本語/page/2/index.html","9ca33705240f37295ecbb9e6513a6d9e"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","94df9c983e909de6b093725a569815c4"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c9ad7e049d9057817b2d10cc2cc739c9"],["/page/10/index.html","b1ee0e5ac0ca1d42330d9fd44f0a3c94"],["/page/11/index.html","93d0e1dec03036bad0b8b0c3d24b8d5a"],["/page/12/index.html","554dbda15f69fa6586670286693a1f7a"],["/page/13/index.html","f7906640a37c96e789cdc376dff52655"],["/page/14/index.html","aea42f8792bb31af2c924ba1017e6b12"],["/page/15/index.html","6ef20906909eaa0f2776bf3b6c6e2532"],["/page/2/index.html","8e40968d2568c0cd68f2710cfff4ddd4"],["/page/3/index.html","042bc73bfe05fa3a76be3296af408740"],["/page/4/index.html","4c2e8330e856d4064ebbd2d02d48cb7a"],["/page/5/index.html","1b10cef353f4b808b20f86d9722b1599"],["/page/6/index.html","9241f1cf246f4d2ad0e29802df235848"],["/page/7/index.html","00ea3abf838318e85ac6939d4adb1e5e"],["/page/8/index.html","bfd5d010d59be8a23bf1ec7714e966a4"],["/page/9/index.html","ff6d17b93ea75921dfe4bdd12753477f"],["/sw-register.js","6f0ecadf267b06cf4549608237b51287"],["/tags/10分作品/index.html","fa1e2a08a8636a16e156efdbcd03dc58"],["/tags/3分作品/index.html","2abe267274bad1f1a6e553cabce1ef05"],["/tags/4分作品/index.html","8a5543147c0bf2ec620334f4ed335a6f"],["/tags/5分作品/index.html","7f70f308fce9c56992c6dc3f186906ab"],["/tags/6分作品/index.html","1e8ba624d98f0ed81369a151ca29d788"],["/tags/6分作品/page/2/index.html","b5751d7d8f11416d282d10b088853b00"],["/tags/6分作品/page/3/index.html","9034daf4500c1ee143a3f022fa716415"],["/tags/7分作品/index.html","413a371510800decd8654daa283c2be8"],["/tags/7分作品/page/2/index.html","14eb6d20baa40ccc73ea7a4bc8046cfe"],["/tags/7分作品/page/3/index.html","8df4615561ef6e0c5b505b09bff7e425"],["/tags/7分作品/page/4/index.html","ccd9f83acc128025068906e55e00f798"],["/tags/8分作品/index.html","891d6a1c50db1ced3a4e3e0d751ebc61"],["/tags/8分作品/page/2/index.html","7639bae4b0fc5ba7906246b356f80d28"],["/tags/8分作品/page/3/index.html","91288732f7244ef319c5e3533ed64bef"],["/tags/8分作品/page/4/index.html","0e4a84ce95e84f8f8603849b21a8539c"],["/tags/8分作品/page/5/index.html","20a594ef1b763df29ec4717b49cc1428"],["/tags/9分作品/index.html","b29dbe15ccb1874a029186e3aa12e971"],["/tags/N5難度/index.html","625c5d4c4e5e6faa74e784b3527b88dd"],["/tags/N5難度/page/2/index.html","bda214ccc9d34e7043d5c76fdae03599"],["/tags/index.html","cc6f082997d49c669ec525a5eac20e28"],["/tags/アボガド６/index.html","eb28f599f9aeec6606f31623cf04915c"],["/tags/三秋縋/index.html","f7c55d0a10d9e890dad37621b0f66bdb"],["/tags/中國武俠/index.html","7a40ee293803a5a013f4bfae8acc5abb"],["/tags/中國言情/index.html","3332ed80b59e11fdce4b17d880d053f5"],["/tags/二宮敦人/index.html","506aace4bed1d759c8b1daa5a110a739"],["/tags/人性/index.html","0a91a66d028f20b7c21970e1c31efd19"],["/tags/人際/index.html","be01dc81c48dee5ca3e5b9f630422414"],["/tags/住野夜/index.html","5782618b5ce516ba820b9eda1f208313"],["/tags/佐野徹夜/index.html","b920c5998e29124f4339b6aaa8d236ac"],["/tags/努力/index.html","17a2556e86779efde44277232e3ccbca"],["/tags/動畫/index.html","5ffa1c16efa62f919506553846a6ba57"],["/tags/動畫/page/2/index.html","08b7fc78259baa4859e76dc6335553fe"],["/tags/動畫/page/3/index.html","7b2f82a61e024eaa07b66428b1a414ce"],["/tags/動畫/page/4/index.html","74bdc419351761fc9f4a0f6e6937f05a"],["/tags/原諒/index.html","516636eeefa0b1cd700f1e604e6ed42d"],["/tags/反烏托邦/index.html","5db302fa2b69cc13947128e7cce5dc44"],["/tags/啞鳴/index.html","5c51711180bfcb149f1433c323bbcfbb"],["/tags/喜劇/index.html","14d9d5b3b58717659b1c25646f9f7f8f"],["/tags/夢想/index.html","b164b9f3285eb17e301f14c592dab8d1"],["/tags/天澤夏月/index.html","c84a975733926e1f866845b56217519a"],["/tags/學習/index.html","c8209e0b11e46b362a231f5fe11a8b6e"],["/tags/學習/page/2/index.html","2dd5f5a11252cd850b8a6e81272256d2"],["/tags/宮崎駿/index.html","51120881e5c1f852d311d51df1ade0be"],["/tags/小說/index.html","a903d9c3327126c5ea30f80d34f82df9"],["/tags/小說/page/2/index.html","fa911bebf4d0786d0c1bd8edde79cedd"],["/tags/小說/page/3/index.html","9674628493e78507171007e53f9d6a01"],["/tags/小說/page/4/index.html","6283efa7872c59531299c1306f8b4a19"],["/tags/小說/page/5/index.html","2c2cca986c318e65e326395ccae62ff3"],["/tags/小說/page/6/index.html","5095c50bec4515f09de2d00750fbbc21"],["/tags/小說/page/7/index.html","f9c49689bf14482fc764f36a48819f1b"],["/tags/平淡生活/index.html","ba8d8a9608af337cecbbc2f8e8ab8d0c"],["/tags/幸福/index.html","5fa82b4925de3232286a8c35ca5874c9"],["/tags/志茂文彥/index.html","fe0d5a9c4f95ebd4311c709c5075b5e8"],["/tags/愛情/index.html","c86f9816cfffc30ac13db13f7a78e746"],["/tags/愛情/page/2/index.html","df9a0a3760c4a85d0cc4536fe5f28886"],["/tags/愛情/page/3/index.html","b547f2d9e46dd6bfc58d56feae87af01"],["/tags/感動/index.html","4614688460bb54bfd9a6a4e61cd5526e"],["/tags/懸疑/index.html","ec0be560661feddda2dd4e6bd73c6407"],["/tags/懸疑科幻/index.html","5dbb61f7d22a651a35413fee47dc75fa"],["/tags/戀愛/index.html","18597ed11cbb9c27c103978882bec1bd"],["/tags/成長/index.html","6def36e9690da707e76283b822e72f4a"],["/tags/成長/page/2/index.html","90818eee4a10ac0272df0a0a47eae760"],["/tags/戰爭/index.html","eb4a3d619fa75aed913751c83d3e8a40"],["/tags/推理/index.html","a10144ac6c873a8a207cacef8ccc6c59"],["/tags/搞笑/index.html","9cf50159912c5ed7bea526196fc77e64"],["/tags/救贖/index.html","adc28325f395ce2ad376b644ce8357e6"],["/tags/斜線堂有紀/index.html","dbd4c9b0714da9ba28c34acecbff4eb6"],["/tags/日常/index.html","7e0952a77d5f68e8c2a4cfe18819f3df"],["/tags/末日/index.html","82e267016e3eac09dd8002de0ad457c9"],["/tags/校園/index.html","a9cc0c370587571fd69f1c9960c6fb92"],["/tags/武俠/index.html","e2383a2ecdfd305a36f0b19467083f69"],["/tags/武俠言情/index.html","6aec55ea3b46a75c7a8800bfe0c6c0fb"],["/tags/漫畫/index.html","a279d8bed5354a904c891b6bdcc540d5"],["/tags/生命/index.html","61d93ad9d741d22da591bf70833ac4da"],["/tags/生命/page/2/index.html","88bd6e862cacdda9f44dae2f40198967"],["/tags/短篇/index.html","a738a7122b606b7bfcc7ebc79d721d26"],["/tags/社會/index.html","c3319d5a941b24facd4d7deea50b1c0c"],["/tags/科幻/index.html","df5c847952d92bffebf3fa968b94ab47"],["/tags/童話/index.html","be65dc87debf87653a1f5708c5066a82"],["/tags/競爭/index.html","04b4fc2fcef5ab5e2eda1ed6790d7299"],["/tags/自我/index.html","c8b5bc06bb81964cc2410e31d4dd1297"],["/tags/自我認知/index.html","749abd657cdcfc992ae06ebcc8e50c97"],["/tags/葦舟ナツ/index.html","c82beac7c840bf9cc39153148afdb1f1"],["/tags/藤萬留/index.html","4a219930a466dad921371aaa430277d0"],["/tags/親情/index.html","8d43a441fb802ff64f47e4c95e5de846"],["/tags/雜項/index.html","04667f1f27e73fb5f9425d377b3ef555"],["/tags/電影/index.html","3af2528ab781dc9e1aa89545a1f4a656"],["/tags/電影/page/2/index.html","22bf659d81a894c178663e410dab8af1"],["/tags/霸凌/index.html","c075df65fc19ca9bd7d870db53ee43f8"],["/tags/青春/index.html","e1989b8c5a6b96a783bf785ae80cfe58"]];
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
