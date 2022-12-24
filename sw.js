/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","c6ed576095cfd0d57a0d7ddce7267dec"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","ccb70c64e7cf674a24edd810f6605bcd"],["/2019/12/25/Review/無法計算的青春/index.html","d776fe82caa3dc3862ff0456f49e3c65"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","0bc420ce251d345cd3f64d8bcfa70995"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","eeb03127a0369b1bf61ff73a13ee34f1"],["/2020/01/19/Review/下雨天，不上學/index.html","5b673fdbcfe0c9eba51f5f30122fe289"],["/2020/01/26/Review/三日間的幸福/index.html","af3564abb96d9400d31011dad6897035"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a022a37b52ac34373564da92d70bd134"],["/2020/02/09/Review/青春期超感應/index.html","68451cc2ccf4ef6ddd30b653e2073f56"],["/2020/02/15/Review/又做了，相同的夢/index.html","cd1ed7589643e251267f4b09c78dbee8"],["/2020/02/22/Review/回憶當鋪/index.html","c6f2fdffef0c27194ee0039d8ed5b41e"],["/2020/03/22/Review/不適合自殺的季節/index.html","6b35666e666d1d2c48c70205b3fe3cc5"],["/2020/04/26/Review/我們都無法成為大人/index.html","b2a0966a290e0ccd292fb4aa2d936031"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b1de80cef49f65c7bc60ae783a2c228e"],["/2020/05/17/Review/人間失格/index.html","5177ea0aac8a893ee9b72d7069987e78"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","aa1d89ee0f53c2f72c9a698bf36b444a"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","2635702fa69a57dec3810af2fc1ff516"],["/2020/08/01/Review/銀河鐵道之夜/index.html","667dadfc2f4f034bfc91b3c9da8cc5c0"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","74753b32403d74fe5c503b1f28704cf1"],["/2020/08/16/Review/15歲的恐怖分子/index.html","974f1f086cc3f19d728b38d7a6519b86"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","5e2f80f8a8d1acfafbcb9c285d6624da"],["/2020/09/13/Review/羅生門/index.html","4303ac4d3c6313057bc1d25e8d3e3ce3"],["/2020/09/20/Review/闇夜的怪物/index.html","3b1e800922a25c20a6b04f614069f10b"],["/2020/09/27/Review/14歲，明日的課表/index.html","24ba5180576855e63cdd32c8de722d74"],["/2020/10/04/Review/致十年後的你/index.html","974347eebfcf2f0462ab38838865a879"],["/2020/11/08/Review/滅絕之園/index.html","8eb0de72b2cb33cf4f1e5c920cefa5d9"],["/2020/11/15/Review/將愛拒於門外/index.html","d08cff9c569d289cebb0fe57bccd9a9a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","563d1eef8f4b7064877caf8f1b46e665"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","6ccf267103bc7c96fa7c38065e447575"],["/2021/04/22/Review/道印/index.html","ab4b766d3b642e9b3eebe061f4718042"],["/2021/05/03/Review/戀入膏肓/index.html","c03e9d8fdc078ec99c3de263624885d5"],["/2021/05/10/Review/Dice/index.html","4090a501736686732c1a901838f58d91"],["/2021/05/15/Review/魔女之旅/index.html","f5ff44f27ff3c65dccad3eab8202b212"],["/2021/05/28/Review/戀愛寄生蟲/index.html","903cee7f10e6e66fa47a7bf6df07e8af"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","994d12b0e8a3977113c83137d9608b09"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","c885839b8f171abb78bc3468d8cdac47"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","0865ae74775a5dbbb2ba198839739ba3"],["/2021/06/05/Review/流浪的月/index.html","5bfbe880da59d2ff06d254fd28355a78"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1fca715495f1bd2b5395d2d0ca355382"],["/2021/06/13/Review/第一人稱單數/index.html","6779bf8ac753b3ab81d55763a7c5aee3"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","78006505d2a8ea44b6d3e4ded727c773"],["/2021/06/16/Review/願你幸福/index.html","138ad06e87421be889131932ed230254"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","4b2b21a97d059e95a0a9749c9307e8ad"],["/2021/06/21/Review/神隱少女/index.html","1b3c257cac607f27f7dc17e073d19f34"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","24bed1f83ee83efdf595b29f544b1b60"],["/2021/06/23/Review/天空之城/index.html","c1678390e33a394654b392a6ee1cf187"],["/2021/06/24/Review/魔女宅急便/index.html","970bb731879ae94b0443592e084334a1"],["/2021/06/25/Review/借物少女艾利緹/index.html","f709009b05e4ae8ab53c8187a8856230"],["/2021/06/26/Review/魔法公主/index.html","fa6e4b67687a0341b33c387467dcf0a7"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","93f2eab80325795027e86ab4881c91c9"],["/2021/07/04/Review/飛雪與劍/index.html","a7fc4995a90224e54ad18e0c9efd059a"],["/2021/07/09/Review/地球防衛少年/index.html","7cb63a3f55e0159161e2f9178a55828b"],["/2021/07/12/Review/Angel Beats!/index.html","db4a5dcef443a82e8f589a35aca55112"],["/2021/07/13/Review/Clannad/index.html","e548f04171b34a7cdb5831a1873cee53"],["/2021/07/15/Review/AIR/index.html","e3f48627420b4067f49a590a11fe6162"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d1c6a38bc6fb5c1843f17556fdbff58c"],["/2021/07/15/Review/螢火之森/index.html","480e1668345c03b63fd36a21582f8033"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","d9401625cb380838cb93872a6213f063"],["/2021/07/17/Review/奇蛋物語/index.html","7245aacb0e8c3577d457718a29a2a91d"],["/2021/07/18/Review/Vivy/index.html","564eec884cdf36da7b4656181c42c35f"],["/2021/07/18/Review/請妳消失吧/index.html","f64aaa051b81fd273a6f27f731948d06"],["/2021/07/19/Review/漣漪的夜晚/index.html","699ace64b43f90cc03bfcf9e9557da04"],["/2021/07/20/Review/月色真美/index.html","99fb7cec1b5133b3f9d5fa50a2735ed2"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","99523ce2a34aae6c012736c05dd5cf5e"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","6ea02407377ddafc030e52510fd17f02"],["/2021/07/22/Review/罪惡王冠/index.html","9f10179c0a53c509f98d495a5b9fa685"],["/2021/07/23/Review/弱角友崎同學/index.html","0ce8fbf8e1c4e8633ade7ef0f7930ca9"],["/2021/07/23/Review/惡之教程/index.html","b4108e0a782f20839a08f135785ce7c4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","8c5309479b8ded87a40e66bf4839c5ef"],["/2021/07/25/Review/魔王勇者/index.html","6f276d4b92370bd0e808c79a39166fa6"],["/2021/07/27/Review/一年A班的怪物/index.html","4aca4f2dc407b63d658d2f760b03e2d9"],["/2021/07/27/Review/奇巧計程車/index.html","a6bbd7690765fde56a274d8478d885c9"],["/2021/07/27/Review/專情的碧池學妹/index.html","a87207db194d8520398038338f41c0d5"],["/2021/07/29/Review/只有我不存在的城市/index.html","11edac98e732e9bd5ec35a64c4bdef63"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","89158bb8a6cb65a9c13d5e7e62346439"],["/2021/07/30/Review/可塑性記憶/index.html","6e1eabdc7d8d781a0fadda6dd6e2d930"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","eade8eedc53ff878587aa14b4c79689c"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f09e0fd253bc690bdef70341971ed289"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","dc7d5ada105c3df9e15514f9a120b202"],["/2021/08/25/Review/清戀/index.html","d2c37256bff341d86347b9b2fdbf0b51"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","d0b61432e7535a83fd6cd951ff24288e"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","c5be5a2fb663a560b5d97fbf3889036f"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","a3af7fa7b87b984902fcaa7e0832ccab"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","e7face3e9692652c4840df653baa98a4"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","e19195741f1dcf81cf6718d63c0bc8d8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","77e983ff402885ad9f7eeb3188e47000"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","75ff061c0ce45a67c836918fa946da8a"],["/2021/10/16/Review/龍與雀斑公主/index.html","f9e54ee44644cff9b8ddc0f8fd1498fc"],["/2021/10/19/Review/孤狼不想開後宮/index.html","629fccd89bd489f0e5142e27168a1092"],["/2021/11/13/Review/徹夜之歌/index.html","517f38a1000929bd4d4983a4ca424d2c"],["/2021/11/24/Review/武煉巔峰/index.html","451044e6f63b3801bc2904466fdcf6af"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","9d8348465cd88000e3feb06d33d9d58d"],["/2022/01/28/Review/神醫凰后/index.html","e72f5c21ab842899f91bc833cadadc9c"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","6320afe239354ebb0c7012ffface04be"],["/2022/02/13/Review/夏日幽靈/index.html","40259ed72ff6feb66bf73a517a058668"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","847a7f01558f32dfd9605c8384b831e2"],["/2022/02/26/Review/賽馬娘/index.html","1e5b7b93bb21133b01c0794b15853809"],["/2022/02/27/Review/大欺詐師/index.html","54eb5da3f159e4f96b91e25ca631810e"],["/2022/02/28/Review/前輩有夠煩/index.html","1346ba7f6990467d445b8efa12560b64"],["/2022/02/28/Review/碧藍之海/index.html","0b2121a725affbae4db02fcd5a6131b1"],["/2022/03/05/Review/落第騎士英雄譚/index.html","226dba573dfaa46751f96f17b44b0257"],["/2022/03/06/Review/Another/index.html","578eefb403e35962b1c7592bae04c3ec"],["/2022/03/06/Review/入間同學入魔了/index.html","409bf342d02cd7671507f1d435b5fc36"],["/2022/03/18/Review/再見宣言/index.html","a2b39f2de86dec5cb6b10ee5bdb7eea0"],["/2022/03/23/Review/生若冬花的妳/index.html","b9d1f4ed170bcd1987ed3674bd2f1cea"],["/2022/03/25/Review/天之弱/index.html","bcce37be1d47841ef0ba5280cc5568f4"],["/2022/03/31/Review/滅了天道之後轉生/index.html","6528562d873cecadb9f7726726ed78ba"],["/2022/04/30/Review/泡泡/index.html","3a7ad755ffee85a4a4baffbc57b001ee"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","e2e6c5ce511099e868ae28e48452a3ab"],["/2022/06/13/Review/偵探已經，死了/index.html","119a971b192fb49530d4c920d88ad80a"],["/2022/06/14/Review/黑色子彈/index.html","8ca418253c6923dbc591b881d9ae3ecf"],["/2022/06/15/Review/黑白來看守所/index.html","2f6211f47a4a6f190696cf8ab4db3245"],["/2022/06/16/Review/虛構推理/index.html","4bf27bda0ee69102ec8ed40ec3169432"],["/2022/06/17/Review/戀愛與謊言/index.html","aa626aa83bc0a240446a8a0b12f33ce4"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","5dbaea8f426ce5c7ff3590b7542062c2"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","118e0e24f344d2738cb62e46da98877f"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ed73f64f703f3d82ad76017248360360"],["/2022/07/03/Review/Hello World/index.html","1c976564dd5a290ff371d5dd08194c5c"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","efe124608cf0520dc47cffd698535a0b"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","706a615252c6d4ef9b162688a57cbea5"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a409a36016a5a22cdc2808027a2c9b7e"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","b24adc5e9540535864318e44e2054b30"],["/2022/07/16/Japanese/動詞分類/index.html","5c157ec263bcff7515fcbdbb68e12069"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","b85091689092a8087a51429d053fe353"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","9c3ae716eb516c15fff5ff187254508a"],["/2022/07/17/Japanese/音便/index.html","7f98fca1873273834fb156e4eac06fd0"],["/2022/07/18/Japanese/動詞 時態變化/index.html","6d48e8af0080bbbfdb17bb3d1f940051"],["/2022/07/19/Japanese/助詞用法整理1/index.html","e04b8f3fecb09f0b2b9604e025c80893"],["/2022/07/26/Japanese/助詞用法整理2/index.html","154b570a09adee046d8bad804043c918"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","446f114acf3ac71b4189776b788294c6"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","3757a6fad281056385822dcbe4150c94"],["/2022/07/30/Japanese/疑問詞/index.html","e7af1b0469088088958bfa451095f24d"],["/2022/07/31/Japanese/助詞用法整理3/index.html","c9c85598669721821f21f01da949d5d4"],["/2022/08/02/Japanese/副詞整理/index.html","9595848db0649e29b57160e78dcbc5ed"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","57e09cc881d33d3877e8768683aab228"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","0c1398ddf442428206073fa132a23929"],["/2022/11/22/Review/組長女兒與保姆/index.html","eda34a23ae478d21247b8be4cde6fcff"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","8abb3f7c9bbc4dd59813f247a62f6413"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","09a8b4812b0c6ba858f1250194410944"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","da966e607e1581eb761d58726db8b79c"],["/404.html","a1159e7d040f7fe4b07ff485b413161c"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","1bcc9a138107b3708054f1385be3b33b"],["/archives/2019/11/index.html","eeb667b4286bd4b23fca4c71d5cb6cab"],["/archives/2019/12/index.html","427126604cedf6e6f996958b7eee690c"],["/archives/2019/index.html","b67d2e44305898b302b1f7cc164f0518"],["/archives/2020/01/index.html","4d5abc50d18d6bb5966376755c7876a4"],["/archives/2020/02/index.html","146b4aa8c241244815d461b66297ea0e"],["/archives/2020/03/index.html","9c9dbe66b64f594682053bb36f4b16d8"],["/archives/2020/04/index.html","2e5e0c589ad66bfee676213ed321fb19"],["/archives/2020/05/index.html","6d3211d9d3c78631d652916b7019bce6"],["/archives/2020/07/index.html","811c15f8c5c274594495423327daa5a9"],["/archives/2020/08/index.html","c78706ff60d939c4c44953190b4ae887"],["/archives/2020/09/index.html","381b1bdcf66130654c19d3243d1e29d2"],["/archives/2020/10/index.html","d148b82837f01d9be7ee4df0ca360c13"],["/archives/2020/11/index.html","6e592bec788de689749c53b8c93c3a58"],["/archives/2020/12/index.html","fc4f894c1979cff2360f9bdf945d6429"],["/archives/2020/index.html","ae4503bed7df98af1f11edd9469687ee"],["/archives/2020/page/2/index.html","a7344dfd439963e895e53ea95dedab7f"],["/archives/2020/page/3/index.html","a117438894615642c7c8b12f6c610698"],["/archives/2021/04/index.html","84d804a3383d0849fc4ead059e5e1d09"],["/archives/2021/05/index.html","05b653daaee4e3cdefafd4248590f5a9"],["/archives/2021/06/index.html","f8a93c6e24e39a7afc5b681519138933"],["/archives/2021/06/page/2/index.html","9e1d67ce0978f4caa7ac18a407366c76"],["/archives/2021/07/index.html","9e2fa3981b919c7aafceef73b37d579c"],["/archives/2021/07/page/2/index.html","2a7b963410e5fe2f8d960f89bc43a721"],["/archives/2021/07/page/3/index.html","59242802f45f9c0c0d9979ba409e9da2"],["/archives/2021/08/index.html","d4d03e18c90a630d5ae4f095aa9d9c3a"],["/archives/2021/09/index.html","e5b514c2305a61773a3617d952d595a0"],["/archives/2021/10/index.html","6da1e3037ba4ec20313ce9ed9c00aa1b"],["/archives/2021/11/index.html","43baeab6865dde046dfb4834fc80ff57"],["/archives/2021/12/index.html","f47d90f11223ebd273462ae5d82e7e93"],["/archives/2021/index.html","76bf7d28283e8c219c2ed2499964ea12"],["/archives/2021/page/2/index.html","01db5e9f20231ed88ab7d5ea7aae4bee"],["/archives/2021/page/3/index.html","b5a9966313f81e0644fdbcfd3d3f130b"],["/archives/2021/page/4/index.html","91576c0380b7c5930c0a627196036116"],["/archives/2021/page/5/index.html","ad8e600e393cc41776ea04fc46fe9ce2"],["/archives/2021/page/6/index.html","0fe8e61554649371980c2d82968b3969"],["/archives/2021/page/7/index.html","3b9a1d0d7134c903ead804d5e512153b"],["/archives/2022/01/index.html","11ece495778697243d127818c4a378c2"],["/archives/2022/02/index.html","6854818e3956fe33db0947fc4f71abce"],["/archives/2022/03/index.html","85e2b140f1effd41b0fae7c83e86c82b"],["/archives/2022/04/index.html","eaeb89b7f5cb28584c13f75f959a86ad"],["/archives/2022/05/index.html","8c6ec07641376c0d42863559341a2021"],["/archives/2022/06/index.html","158a8b2ea9ddf37f3e337b138b869d16"],["/archives/2022/07/index.html","69e6dcd6aa58a5a0cea654e091eab63d"],["/archives/2022/07/page/2/index.html","4bcac9964d5b673e566cae9f6c890e30"],["/archives/2022/08/index.html","727df3e589028f720e0beb5f0fb05167"],["/archives/2022/11/index.html","a4a01d275f1e41384ca6e81992256ed5"],["/archives/2022/12/index.html","c2d0342d7d053a46ac3b4818b41ae7c3"],["/archives/2022/index.html","412dcd3493f321fffcef785436b5fa5b"],["/archives/2022/page/2/index.html","dabe0d4242e6703bc36bbf9a4de8f246"],["/archives/2022/page/3/index.html","f33dd6dd6bd394cf28355b4da94df0a5"],["/archives/2022/page/4/index.html","ebb5828bf7854e197e8e5841ce0ab430"],["/archives/2022/page/5/index.html","00be74677636f3b2aafb58058d0c4c74"],["/archives/index.html","abdcb91669a94f17033fc78845644fb2"],["/archives/page/10/index.html","1d2f9dd237909d9c459961e50f674c11"],["/archives/page/11/index.html","672c73d50948a3f0e6dcc58a121efe30"],["/archives/page/12/index.html","5f4820e64bb327d38dde9cbb2e7cac39"],["/archives/page/13/index.html","c1f4cb77adf159a92df2da77778fa2b5"],["/archives/page/14/index.html","bef07b85db40ae4bb3aa338f25fb4307"],["/archives/page/15/index.html","74de5fc22821a10f64265c8ff9903646"],["/archives/page/2/index.html","acedab9effbf8cdc03c6d27d26ed7a45"],["/archives/page/3/index.html","f9ca7f9c8b81b0bf5d91f2b460e9f160"],["/archives/page/4/index.html","ff45be92d430161ffb2310e8af24ff87"],["/archives/page/5/index.html","7e790a5c1d73ed8fae794303e861a759"],["/archives/page/6/index.html","c5010bd34fc761e87186ce4b9f9d0033"],["/archives/page/7/index.html","ad8eed5d5ceb6c6c555d123dbf635360"],["/archives/page/8/index.html","92706e9637715205e3e7ddb1a0d6d523"],["/archives/page/9/index.html","ccbd9fb0fe79207067be10fe35d1c51c"],["/categories/Programming/index.html","d4e3599f1570b6b26683ba81be62600e"],["/categories/Review/index.html","01ffcdde6c3f5fd26633e2d061aaeec1"],["/categories/Review/page/10/index.html","1fa47fe1d4eca00f6cef5f1561b109c9"],["/categories/Review/page/11/index.html","5a6042d2105525d50fcb515957d7f1b9"],["/categories/Review/page/12/index.html","364309e4b2933747d71e5a697a3e3932"],["/categories/Review/page/13/index.html","1288d3e4e867046eae869aabcbd68317"],["/categories/Review/page/2/index.html","77acfa6ce10dd36a00bf512e0d1f3b8a"],["/categories/Review/page/3/index.html","6cfd258cf129e2dbc202b18ae26142ce"],["/categories/Review/page/4/index.html","4710236a225cdb96b22ec3d89247635c"],["/categories/Review/page/5/index.html","7b39c716b9f09b3c3d37f7d87c31ecbc"],["/categories/Review/page/6/index.html","54cd46e114062ea538162e34b6626c1d"],["/categories/Review/page/7/index.html","aac0c5c472621a310f4df7c371447ff0"],["/categories/Review/page/8/index.html","a1df7ed0a382ff05aaffa3078e5ea4b1"],["/categories/Review/page/9/index.html","d51c0a7a26fb74139882352110cb3b16"],["/categories/index.html","72bca3c295f7b3161428f92b97b78663"],["/categories/日本語/index.html","01cab38963f677a7b0dfa0de189f34b7"],["/categories/日本語/page/2/index.html","e8628c7704a77e809dbd1218fee3ed6b"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5bf01eef4d77f8aedb5013a300896f45"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","19b9ab4f68c20d5405923fecad87d70e"],["/page/10/index.html","c35c50677e9134485d7561f217588ca1"],["/page/11/index.html","e33bb19b91e6eddd7752cd8cfab86b6f"],["/page/12/index.html","381138e968865eac7e829af5d2d3666b"],["/page/13/index.html","90424e145374844432ab7ac4f7f937c5"],["/page/14/index.html","3dbb5f0ec816d3eb179ba190023e7647"],["/page/15/index.html","e0e52b8e34d7e27edbf7fc51d066761f"],["/page/2/index.html","427f95c46efb7b858e67ab9e4a11c878"],["/page/3/index.html","25bcc1f083264297ec3afe494a21cabe"],["/page/4/index.html","f907e1b7fb49bbb42ca6588ac7aee7cc"],["/page/5/index.html","e3676371ca15609dcb2bc269aa28278b"],["/page/6/index.html","6a4d6723a4fb237d9b291be0b41baedf"],["/page/7/index.html","cd905cf742349afe10dafd1698faa620"],["/page/8/index.html","2cdd7362bce2e29b867fd8244e05d536"],["/page/9/index.html","307294ec889dc636a15650e459693757"],["/sw-register.js","48a68a4e730d484ebe206a242695e093"],["/tags/10分作品/index.html","62cc86d55a31cdac4eca3f492ca76713"],["/tags/3分作品/index.html","c074af7c79cb6d53923057aa08b491ee"],["/tags/4分作品/index.html","f43723533441b5e6259f6fabcf4e1a94"],["/tags/5分作品/index.html","4c5d54eb78fca48fe3ce25f8694261f6"],["/tags/6分作品/index.html","d7b7e8cd92ecc0b1a10dd57af68570dc"],["/tags/6分作品/page/2/index.html","49c96d88fe422b6ce698912b5a523fe1"],["/tags/6分作品/page/3/index.html","c0b85e21367d7e580f71aee2f1c0f1d9"],["/tags/7分作品/index.html","91f5094ce7f0c0e3dc79d93422fda41d"],["/tags/7分作品/page/2/index.html","2f779af627ff1ae797a9be0203ac1838"],["/tags/7分作品/page/3/index.html","d4890c1b1f372ac5e3ba0d15b28e8185"],["/tags/7分作品/page/4/index.html","754d91dafa7837c061fafca4bc4a917b"],["/tags/8分作品/index.html","6f3cc8603b8f680dbeaed52465797531"],["/tags/8分作品/page/2/index.html","dae82f07aa1021e832f8bda46ea20292"],["/tags/8分作品/page/3/index.html","e189a3cb7c964312e7851d9e304aebfe"],["/tags/8分作品/page/4/index.html","36cb7341f9f6cdf04ae36cf73d1d1611"],["/tags/8分作品/page/5/index.html","b4bb3c3e1c2ddc1282ea270209e85d68"],["/tags/9分作品/index.html","cdad6822cb763234542fbb7700ce066c"],["/tags/N5難度/index.html","7d538d97e9ba627e1e15df8af0edbf55"],["/tags/N5難度/page/2/index.html","ba4eb852caceaf3d795c07ecf8eeac00"],["/tags/index.html","0f2f6b6eda35ae7fce546d23217898ab"],["/tags/アボガド６/index.html","085e437cf3656b65e6034e3eff631481"],["/tags/三秋縋/index.html","3d0b9ce40fa20090b4cc675fba490710"],["/tags/中國武俠/index.html","0a11899f84fce2991cefe33bbc81911b"],["/tags/中國言情/index.html","871fee6214e2ec67b511b8a68228f559"],["/tags/二宮敦人/index.html","6375a0c4b5d4684b1fc3b760d869b609"],["/tags/人性/index.html","a9693f7bdf2672d20da2dad072de8311"],["/tags/人際/index.html","3c324d9447c559d03a3d3f0298a71ee9"],["/tags/住野夜/index.html","321472be3dca540b1ff37bf7d1d02887"],["/tags/佐野徹夜/index.html","ae958f77ccb747fe4fb33c6770e99fad"],["/tags/努力/index.html","cb60910a27f4eac69bfa55f6275a91cb"],["/tags/動畫/index.html","fd62dcd649e35b16f095561de196da13"],["/tags/動畫/page/2/index.html","d835fe2c8ef13b1308f70af6c5e362d7"],["/tags/動畫/page/3/index.html","41a22de203c2a79822cabf7da48fde41"],["/tags/動畫/page/4/index.html","7c55077e2003b76edfc5914ee2e3b75c"],["/tags/原諒/index.html","a95f3dbf03ae5870dbf1889fb025ee94"],["/tags/反烏托邦/index.html","660fe2cd3e685f189fa158f4f09a9f3e"],["/tags/啞鳴/index.html","3427857c7d7054c9474ce07461827cea"],["/tags/喜劇/index.html","300af05cfcacdacd8465e7d03ccfdb84"],["/tags/夢想/index.html","fbc8f004941027b94b7707451c5a2d7c"],["/tags/天澤夏月/index.html","e643b3790fb6bd893ec8d2ee132c407f"],["/tags/學習/index.html","f50d491ff11de8a533ef05307c807d13"],["/tags/學習/page/2/index.html","6be566acf481e0ec9899de6a0badae5c"],["/tags/宮崎駿/index.html","ab74fbc16cd2c4508402d78458494d9c"],["/tags/小說/index.html","10ef3dbe27e30d52214e648a9e25b485"],["/tags/小說/page/2/index.html","0bcef66d05e866b415c42f32815d9b81"],["/tags/小說/page/3/index.html","ae2b0d45e5f104f6cc7b8590c5629356"],["/tags/小說/page/4/index.html","1f6a44f69b1f2cd60c424ac7132a3bc9"],["/tags/小說/page/5/index.html","56ddbb28dd7accbe144e6e411fecc530"],["/tags/小說/page/6/index.html","042064778af830a99ec5024bdaac732a"],["/tags/小說/page/7/index.html","3d83125013bf19b372ddbdb69cfeaf02"],["/tags/平淡生活/index.html","5aec71466d0507e8b163d52ec72b95ba"],["/tags/幸福/index.html","aa020c486884fdcc13584dcc7c21468d"],["/tags/志茂文彥/index.html","01ecaef9bf048eb41fda2af36afc0104"],["/tags/愛情/index.html","0508f8d0277f127b929be2d3ed8a6c6f"],["/tags/愛情/page/2/index.html","84bce51f6cd34386efc56bcd5537a896"],["/tags/愛情/page/3/index.html","4ec25773ff06190e8d912c8dfb167bbe"],["/tags/感動/index.html","fd7609ccc5cb997fecfd0a35d4ef76e9"],["/tags/懸疑/index.html","d290d7799c9c81443a06dbd8fab2d639"],["/tags/懸疑科幻/index.html","3e9d7eb6ae210eabd9dcf83f3001d4b5"],["/tags/戀愛/index.html","e41bd1763ee5e6a9dc7b9ee643648834"],["/tags/成長/index.html","21322cd13041c0d161eef673bc9a8900"],["/tags/成長/page/2/index.html","d5cb04a1033dcd1366d3c37d90f1e61a"],["/tags/戰爭/index.html","3978e1dc73b84e30e7e08c2465ea11a9"],["/tags/推理/index.html","4d95a082c05f5db3c9e433570cc06f15"],["/tags/搞笑/index.html","eec842bf0cf563742946392b4cb5376a"],["/tags/救贖/index.html","cbece35a472377b87756c39a9d5b1a9b"],["/tags/斜線堂有紀/index.html","7f2a9e7ec4355b50ddaec48a3ea243e9"],["/tags/日常/index.html","de12990ddebbc77f77a66b234d8f9d47"],["/tags/末日/index.html","263d0f8e0ba7a488a207ce98f9d18f6e"],["/tags/校園/index.html","29d9e5e035315938486634334b3efa8f"],["/tags/武俠/index.html","a7ff0b08480f5a4f1d6c6f1f17efb836"],["/tags/武俠言情/index.html","c2765a0cf16347afee4481dd048a3cbe"],["/tags/漫畫/index.html","6df1859f0f1a576098df13f8366fd733"],["/tags/生命/index.html","25659bc88d79d63465e5763ca68b21b6"],["/tags/生命/page/2/index.html","76a212270c322f962a7dc043f22dd6fe"],["/tags/短篇/index.html","4b9ce8f08e5ee00efa0ef8005c9be214"],["/tags/社會/index.html","c54bd87a68626df02284e20891b51e9f"],["/tags/科幻/index.html","676197fbb0c7e94595968fa652e52dae"],["/tags/童話/index.html","777ae10b1fa3ce926228839cddd85de5"],["/tags/競爭/index.html","5018e4f8cdf262556a2a5cbdc929fd6f"],["/tags/自我/index.html","6b179f961e3f74a520a099f838795a90"],["/tags/自我認知/index.html","5abe3e6c2bae21a26391da0af72f414e"],["/tags/葦舟ナツ/index.html","d32b94d2ce08f2c149a96c5ac8fa2de8"],["/tags/藤萬留/index.html","79c2643f66aa2bb1ba47489bca287430"],["/tags/親情/index.html","933fb69c53472d70c6db7167ca6b0e02"],["/tags/雜項/index.html","c4855d65ccf094b64757f732d1199c34"],["/tags/電影/index.html","26e99aa5303d74934d6548fb1369a3f3"],["/tags/電影/page/2/index.html","7136ee9980a583b7653de977f2090955"],["/tags/霸凌/index.html","4a65ea6e7f417820f8a3fc8b94646377"],["/tags/青春/index.html","fc4abaf370a9b62cf59e7620e8ef7632"]];
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
