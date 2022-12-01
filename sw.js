/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","65d0b03d16e999526608df7d4b896030"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","5e17d6377176ce244189031c4cd57778"],["/2019/12/25/Review/無法計算的青春/index.html","7cc966335dcb6918958e11598d03b137"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","ea7b4b50690378754a042fe279a630e0"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","11c0f0b36b336fd178df1cefdaa985bb"],["/2020/01/19/Review/下雨天，不上學/index.html","77ceee316cd376ba1bdc076a65a73f70"],["/2020/01/26/Review/三日間的幸福/index.html","6a660cf752a8f6f74bc04f5f1660a451"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","59ff206a46c2234fa3bc944bc93cb21d"],["/2020/02/09/Review/青春期超感應/index.html","e82f5439405c47ff6040147128c4dca2"],["/2020/02/15/Review/又做了，相同的夢/index.html","7e7680ccbc7878b2f2ecf14a9b9bd496"],["/2020/02/22/Review/回憶當鋪/index.html","9a9d43cccd7013d3b05c7c62ed82381a"],["/2020/03/22/Review/不適合自殺的季節/index.html","23a6f8b1f6addd7afaf28fe6c68ea639"],["/2020/04/26/Review/我們都無法成為大人/index.html","f0dba8a4f151955fdacb0ea4685a0e24"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","ff469cd2fde6ddc167ac603b6c87bde4"],["/2020/05/17/Review/人間失格/index.html","8b3ecadc2315ccfe70c5651d89ec4ae6"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","6ad4d43af41e7d3550848b546b68bc75"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","afb5611c0e900868650b274fae8ea8e2"],["/2020/08/01/Review/銀河鐵道之夜/index.html","443bb73e6a16eb3c3f60877d19f73458"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","0c6f9ac2e035bfc634348fb3361e6473"],["/2020/08/16/Review/15歲的恐怖分子/index.html","8692011f1379993e6e580a8312f3ac1b"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","5a9e8160cfbffb6365fbcab38ee99872"],["/2020/09/13/Review/羅生門/index.html","a524b801a1fd992b0959979cf2ddd6cf"],["/2020/09/20/Review/闇夜的怪物/index.html","1345530aa623893ab816cc5a622b9392"],["/2020/09/27/Review/14歲，明日的課表/index.html","757f14e018b231d47440a8fda0978d94"],["/2020/10/04/Review/致十年後的你/index.html","d616ecc10e2288e86f5f74b987dcce7d"],["/2020/11/08/Review/滅絕之園/index.html","999692d0a34e962a7a4d0d30469af1cc"],["/2020/11/15/Review/將愛拒於門外/index.html","cd5075e35e7a3634f1771382d80b65da"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","11f96f091bdc5df9d51c62daa329b829"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","10dd7c60b3f55135e11109094e302da3"],["/2021/04/22/Review/道印/index.html","6d3744442215be395d43ee81b6a2399a"],["/2021/05/03/Review/戀入膏肓/index.html","4ce969afd600621a3ec8dc01cffaeccf"],["/2021/05/10/Review/Dice/index.html","9bd9647c9187485e9129ace329210b5e"],["/2021/05/15/Review/魔女之旅/index.html","04a028fe1979f6915b3710119961b06c"],["/2021/05/28/Review/戀愛寄生蟲/index.html","04ccc25f7dce65f14232032a8c731afb"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","a54d1ef6b763885b1a899082fda14a1b"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","44869f9f875f2669032adfa87a9e956a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","f222ee5ee546dce926110abb121cf134"],["/2021/06/05/Review/流浪的月/index.html","da5fa82c6d17481435eac7a7a26b20db"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1b389128706d8170599edeff3f3d541d"],["/2021/06/13/Review/第一人稱單數/index.html","41b89bd7c8d611b52902039b8df644db"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","e1552537174b684b719e014bfb4919e5"],["/2021/06/16/Review/願你幸福/index.html","f0b907330069cdb0ee5cb0fdfe461860"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","37d142d5ae4a7a0695e5077c3270acba"],["/2021/06/21/Review/神隱少女/index.html","0ed5831a43981dbed4dfbda4c252d21d"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","f07833106ee2d07d8e5d6fa6f3916d5b"],["/2021/06/23/Review/天空之城/index.html","be6007a5b3bcaf7ae1d964b8c5c7427b"],["/2021/06/24/Review/魔女宅急便/index.html","81b23286a997185faa0b3dbbb941e771"],["/2021/06/25/Review/借物少女艾利緹/index.html","7edde4d97e3018f802690147eae9628a"],["/2021/06/26/Review/魔法公主/index.html","98247ad00f0065cbaa9332a5469ef242"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","cce30087587e3045f5e4307da6fd5a1c"],["/2021/07/04/Review/飛雪與劍/index.html","62f347a3a92febfcd2a51912746aa4dd"],["/2021/07/09/Review/地球防衛少年/index.html","7c7848677a586b7c38d28575540548f1"],["/2021/07/12/Review/Angel Beats!/index.html","a11ba96b1086d46d4022359bae161f3d"],["/2021/07/13/Review/Clannad/index.html","b4cb9818db38ca08b9fcdd5e6677e67f"],["/2021/07/15/Review/AIR/index.html","2cde6124962f0f4431ec81ba68a10988"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","c8f2595ca214d15644e3b2ff352d7e4b"],["/2021/07/15/Review/螢火之森/index.html","e47ad636b62051799c3376ce3d2fff63"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","9d55c1d2373ef77a02c70007d74e1dc8"],["/2021/07/17/Review/奇蛋物語/index.html","ab48f74df724c5f08fc1f0bde690e490"],["/2021/07/18/Review/Vivy/index.html","19f7bcb359fdffdebbbfafb8cf2d3795"],["/2021/07/18/Review/請妳消失吧/index.html","b6dfd4627b0d0d7081a6b35ad0ac6925"],["/2021/07/19/Review/漣漪的夜晚/index.html","9b255b613fc9fb7a0f5f29bd722b6ec7"],["/2021/07/20/Review/月色真美/index.html","98ef0590b447c7c0c1db627b963aebf1"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","90cf2a4ac68531dac1d594d36d24bfcf"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","90da92ec913a2d8929af93440cd6f0c6"],["/2021/07/22/Review/罪惡王冠/index.html","7948c2bd85f01d6c9eb3cdf2fc2ed66e"],["/2021/07/23/Review/弱角友崎同學/index.html","1cff90a59eedf72ceed00a3368a3813a"],["/2021/07/23/Review/惡之教程/index.html","a5b4629d41bb7c3ac975e14cfaa3f8d2"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","6733cd83c9c766bb47b46427a26618cd"],["/2021/07/25/Review/魔王勇者/index.html","75c884d10a93581f59cc8ab0eb0b3f7c"],["/2021/07/27/Review/一年A班的怪物/index.html","df78b6f654158ff2e9c693d9d84b2828"],["/2021/07/27/Review/奇巧計程車/index.html","ca7914a5a027068b2bb58f2529118ecb"],["/2021/07/27/Review/專情的碧池學妹/index.html","cf5e73a3d21c83ba3610a9c92bae12de"],["/2021/07/29/Review/只有我不存在的城市/index.html","1b9d9983493c41b1726d8022827421c2"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","cb60897ddde4f0850fd1d2774f456999"],["/2021/07/30/Review/可塑性記憶/index.html","8b2ac6b23995377048e0ff8cefa7cc7e"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","936de2cd90546b50f70b234dfa0943a6"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","377017141bc6fd4a79f7c7460af28f99"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","af8dd912c60688462ccc100e488aa999"],["/2021/08/25/Review/清戀/index.html","ea986933052ff3201d16f8fe5c44f993"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","5c8aedf1a66c5ad63014b1fbaf87e3d0"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","1cf40247d0fd48d96b55770f5b019049"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","c7226120f91378fae8b206937d78e88a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","86b6dfd724bffd314693ee577d83fe21"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","ebb8cdfb64ecec252bceb804d381a259"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","ab59f39bfe64aad0c4082e6c8df9045d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","40d59d01ea33ef07adbe65f46a617333"],["/2021/10/16/Review/龍與雀斑公主/index.html","44add1bddec63ad44b95e3545fa22f69"],["/2021/10/19/Review/孤狼不想開後宮/index.html","29dac1c0c8ede4fae48fa0356eb19b6e"],["/2021/11/13/Review/徹夜之歌/index.html","e4a8b8d8d29d41e72efe9f18f9f5a2aa"],["/2021/11/24/Review/武煉巔峰/index.html","0c83c7860d1e36d53de4108541a4ba85"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","bbac6389179feb86153c0005ba7eb0af"],["/2022/01/28/Review/神醫凰后/index.html","633bbf54429e3a6c26c4566fb6595e6f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","f099f25f307d3cb2adf66809900c0618"],["/2022/02/13/Review/夏日幽靈/index.html","78cea937ce583169b8e98eb5895be874"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","b61a2bcdd7a51df925143975432cd33b"],["/2022/02/26/Review/賽馬娘/index.html","b87d2dc8391837f8ea9a82631f346c3a"],["/2022/02/27/Review/大欺詐師/index.html","1d439559adb6f91ec91cc075f73c22cc"],["/2022/02/28/Review/前輩有夠煩/index.html","4ba874fa7475705b03c38c0dade85da5"],["/2022/02/28/Review/碧藍之海/index.html","3c4da292c24d49cdbe6d4e090be751b4"],["/2022/03/05/Review/落第騎士英雄譚/index.html","22f9aa2182fd9dead0c0474f0281ff45"],["/2022/03/06/Review/Another/index.html","9223a44da01464069f7afc149bc5c9d6"],["/2022/03/06/Review/入間同學入魔了/index.html","6a1af3dac8ee64c324d335d9e2517aba"],["/2022/03/18/Review/再見宣言/index.html","7949badc0fa3fc1a1fc39953398e5f48"],["/2022/03/23/Review/生若冬花的妳/index.html","836ad40a44a5273a0bbf8662a8499fe1"],["/2022/03/25/Review/天之弱/index.html","eaec877a24c036ab8f70166ae7740d91"],["/2022/03/31/Review/滅了天道之後轉生/index.html","67628abc277c738cccb52a9cab9ef6d2"],["/2022/04/30/Review/泡泡/index.html","fecd7747d49488e56d8768e686c76704"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","125fe514caf66d8cf6393caf1402bf70"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","42af37d3c5ff3ef8748280f4dc077a72"],["/2022/06/13/Review/偵探已經，死了/index.html","60ffbbec7b838acc1b826ea42eed254c"],["/2022/06/14/Review/黑色子彈/index.html","c29a3b948990dc450387c2a150c05d15"],["/2022/06/15/Review/黑白來看守所/index.html","c305e76f7cdc114e3a28ce9ae03e6a71"],["/2022/06/16/Review/虛構推理/index.html","4bde0538132377f20a34cdbde1c66358"],["/2022/06/17/Review/戀愛與謊言/index.html","e2f22f0fffefef72b99f32a39b6205d6"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","4b4b29aa5bec03fb5bd432d6a8aa6cf5"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","5a18c3b07f1fd28f9084ba987ea263ab"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","044daf1016ad777ae0593df88c90fd2d"],["/2022/07/03/Review/Hello World/index.html","4cc9b84cc6bb34038ca83176c5ab46bf"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","f2dbe36df0ee5109e54880a7ccd778e2"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","9606919e37a6377b133df1266ddbc86e"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","26991af47d39c1b837def404e02e3fa9"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c15c2394d9b6cad5bb8a6e7591d137d6"],["/2022/07/16/Japanese/動詞分類/index.html","921a589261b807c76a8f464582c816c5"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","b7b659ba6c42dc75507879fe0319400f"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","1a820a152c60d0dcae8213f1bd68fbbf"],["/2022/07/17/Japanese/音便/index.html","985f9669af3c15f92617be1d9723b53a"],["/2022/07/18/Japanese/動詞 時態變化/index.html","cfa35f7359b8db960510cd73ba26ab86"],["/2022/07/19/Japanese/助詞用法整理1/index.html","684b84abb9043d92f0bb7aae72dbe280"],["/2022/07/26/Japanese/助詞用法整理2/index.html","553ec7b73e77c73817bdabbdef849b50"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","64bb086ee117b2a28e9511d407dcda80"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","8a5bacb0c07966b9bed77023b55cc759"],["/2022/07/30/Japanese/疑問詞/index.html","4531d5b597429ef360225e00525c4f33"],["/2022/07/31/Japanese/助詞用法整理3/index.html","b6b0b6d29b2e38670b8a7880e7d376ad"],["/2022/08/02/Japanese/副詞整理/index.html","2692ef03fb3bb7aa3a59b813a8101566"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","9e57dedb1f23729df4a6dd9b559ce7c3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","7e8c27001071278b0283c01b9d65d615"],["/2022/11/22/Review/組長女兒與保姆/index.html","adcfeff56b3182bf78f8b104458bbcfd"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","3672855b05ee696a9b59bb0db5dd97bd"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","38205e5ff1b4f01f62f6a04bf2c2e021"],["/404.html","094ec09e48dda2567c7289fdf039ed3e"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","ba65d0bf2ae69121176bb44d7ed328c8"],["/archives/2019/11/index.html","1079c08d4a564b8879aadda8e5d45bc3"],["/archives/2019/12/index.html","b5dda01b8fc14c8d2fe8f801354d63af"],["/archives/2019/index.html","ab9828c223c1fcd81276484a589241a7"],["/archives/2020/01/index.html","5921f4954a5aa656678dd261fc1e3140"],["/archives/2020/02/index.html","5211666e8111a61a131e9dfe018d948f"],["/archives/2020/03/index.html","b7bb4a7fe63b48fa0be3b8e1e95dcea8"],["/archives/2020/04/index.html","151057bf1f2f57e3b12667d7937f06ae"],["/archives/2020/05/index.html","63efe0b5f7fc70aa4a663cb4e5bdedcc"],["/archives/2020/07/index.html","d67fc9cda01fc08f22c0e47a067f5de2"],["/archives/2020/08/index.html","227390caced4333ce2ab0275d42526fe"],["/archives/2020/09/index.html","5f2a960eb44a7af704db8c2fefb7b8cb"],["/archives/2020/10/index.html","8ecab7e8f00289dc19c106a46030ba5c"],["/archives/2020/11/index.html","ea037a812206e120b03ada4e48b7465d"],["/archives/2020/12/index.html","b6de10016608a8fd45761c98f2c7b5d0"],["/archives/2020/index.html","068362700015cca9a874727fad5741ff"],["/archives/2020/page/2/index.html","ce75d6f1033bdd9f7ec1c185d79fd9fb"],["/archives/2020/page/3/index.html","676ff04125eef365b4efd32e6a3d9de8"],["/archives/2021/04/index.html","87b450cfb42c8309532cc09d28aba045"],["/archives/2021/05/index.html","5c8f9e31a0645a2f5e77c4ee7ec708d0"],["/archives/2021/06/index.html","21dd42ae11ee778335aba9d5dd6ec7ae"],["/archives/2021/06/page/2/index.html","c7c0ace2cf9baa99f6e6c038e8bf7aca"],["/archives/2021/07/index.html","fe7139cbadfec7629bcab24a520bdfb9"],["/archives/2021/07/page/2/index.html","d2423cd5b80e4ebefd457f3ca6cd6939"],["/archives/2021/07/page/3/index.html","507c9ddd74143b7db0486d3d11160c02"],["/archives/2021/08/index.html","0511f491cd68d115b3bdbc34ad8e4ebd"],["/archives/2021/09/index.html","b2764ff9a0674b7d9127ca8729697730"],["/archives/2021/10/index.html","0268e0e3d32090366e2706b179d8513a"],["/archives/2021/11/index.html","4e836381c25ee44ccb96860e8de79aaf"],["/archives/2021/12/index.html","a4c6814234fbf1062efbcbaa0cb184ec"],["/archives/2021/index.html","1ae8b114dd6efcb479bb130dbbe7eac8"],["/archives/2021/page/2/index.html","12007f7467789e5ac847c8e6a87f05e5"],["/archives/2021/page/3/index.html","0b5a94d34741c71f7569e307ece7ed70"],["/archives/2021/page/4/index.html","0b46e608e29be519157651cec2fff7fc"],["/archives/2021/page/5/index.html","f57d19412af419500e6dcbb3cd07b59a"],["/archives/2021/page/6/index.html","a627eb6267ea969015de2951d714ff8f"],["/archives/2021/page/7/index.html","fe08f65f772f3ed46f1c47babefc2b16"],["/archives/2022/01/index.html","bc5c82e80f47edf59051633ff92728ae"],["/archives/2022/02/index.html","ca4c12e0a872d95ec3e6b7890fe1d7bc"],["/archives/2022/03/index.html","6cd186b35acd370c8c83226a47e26a26"],["/archives/2022/04/index.html","ad1e2e7ad6083b03b395c096a320b91c"],["/archives/2022/05/index.html","f999e097521cebd60731fe7c527a88b1"],["/archives/2022/06/index.html","a317128d7b721bc17ff622a3469de7fd"],["/archives/2022/07/index.html","10c444f0f87f59647491a0c963680231"],["/archives/2022/07/page/2/index.html","e943dcd0d3fe7a67cd41a757d6534c44"],["/archives/2022/08/index.html","7937baedaa7167938d79928b1657cf36"],["/archives/2022/11/index.html","58c505cb1299af03b041cddb13ad73c7"],["/archives/2022/index.html","fd04b4b40d73cb1e9b0c4933b494ce0e"],["/archives/2022/page/2/index.html","07f9ea4b0401c74b715c4445717d5c05"],["/archives/2022/page/3/index.html","b11feaaeab9957bcee001e35bec1ca45"],["/archives/2022/page/4/index.html","835db7bff9e9fae2fb6793c23c0cacdf"],["/archives/2022/page/5/index.html","df6b08c9280fa3ae0e1291964aca6813"],["/archives/index.html","0888c98f793ae25679af908f61fcccf0"],["/archives/page/10/index.html","1babea906eb313aa793c714d7d7be6aa"],["/archives/page/11/index.html","6a17872377c88ea93304a2a87e29c0de"],["/archives/page/12/index.html","c3e737936739d3d086f5e82b99f44f32"],["/archives/page/13/index.html","6bbdc3d348e8d6084491fccc5bd9bdb8"],["/archives/page/14/index.html","d28ac881ac98a309916735487298dea6"],["/archives/page/2/index.html","57a614e6d73699bf6c7b92bdf21db908"],["/archives/page/3/index.html","4db9881ca97326d5c24354b2020e335d"],["/archives/page/4/index.html","729bb7b357152cf58ee282980829733e"],["/archives/page/5/index.html","9ffb80096bc03a35795a110a8ce007db"],["/archives/page/6/index.html","d72f17174492fd5136bf4c03f9991151"],["/archives/page/7/index.html","ab526173a0f5aa98f14f597daa3b487d"],["/archives/page/8/index.html","4dda67e998acc976cc90fdc29b9889c2"],["/archives/page/9/index.html","2bbc26a96db1df7b89ee4f0fa5b93021"],["/categories/Algorithm/index.html","bae4b0b93480751f24f806358039e8f7"],["/categories/Review/index.html","d36c29bc5a3558cd94e27c9bf37e00ad"],["/categories/Review/page/10/index.html","79fb44f5028e05b8cd60c9f3d2a2bc96"],["/categories/Review/page/11/index.html","e09040d95044283882f407a4a83c20c0"],["/categories/Review/page/12/index.html","f7fd9f51b64b3d4d4508c53df61945cd"],["/categories/Review/page/13/index.html","9d72879dfc5a25368bad39ac30a71240"],["/categories/Review/page/2/index.html","cb046e4ec3f07befcd6bf3f381f6a7a8"],["/categories/Review/page/3/index.html","4f01eba2d5eccbff52658521a61240ea"],["/categories/Review/page/4/index.html","8e75b3cba8c6a767e762b1d352912017"],["/categories/Review/page/5/index.html","bc42574c1c2444942d4bd70a46ee7e50"],["/categories/Review/page/6/index.html","e78ca744fdc3310e782a93bd50970237"],["/categories/Review/page/7/index.html","d93f23864f5e594c4219f6d0cd4d2aec"],["/categories/Review/page/8/index.html","106b015cbf521b79c7a12fd2c28d87d6"],["/categories/Review/page/9/index.html","8024c01dbb353a89191e6d3ffd3a788d"],["/categories/index.html","937386a2eb06f37e64f49630f88fcad7"],["/categories/日本語/index.html","c8354ceb708fd5e0ba916d2d8afaea70"],["/categories/日本語/page/2/index.html","1b786a2cf9a6e95165248c3385fa525a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8e987caec6ba1ca694fcaec39630008a"],["/js/custom.js","fe59cbe1ca6b7aee7ce6ad0cf3d4b434"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","b671ec9a3b3ed8854dd3b9a48990d870"],["/page/10/index.html","2e642e00435ce2cfeeaca14a8d3697cd"],["/page/11/index.html","97e266d9db4216bb0be7b0d4dc05ecbe"],["/page/12/index.html","83b3acb974dd4c03e3d8283627d144d3"],["/page/13/index.html","fa8377235c8150616761e960cd6699b0"],["/page/14/index.html","bde3a6173ec6ef233ea9f645aea69fd6"],["/page/2/index.html","59855d857352e465eac567b4ad0f9e05"],["/page/3/index.html","1ac1a04e72c29419b9573f3ebb00ff2f"],["/page/4/index.html","9c7c9f6f825821bfbbfbffc51ef74313"],["/page/5/index.html","2db305aec053e09dd05ddd81bef56883"],["/page/6/index.html","648e29a4057ecbf62683ed7707b24bad"],["/page/7/index.html","496b974d43f9d3d91a6735d8874bad28"],["/page/8/index.html","f3b08c7755eb683bf03247f5a330efbe"],["/page/9/index.html","7c182bf5e4c79e43d248d9c040b9764f"],["/sw-register.js","123314f151985159199b5549332c37f7"],["/tags/index.html","7059ba266e74165c3205f940fa65904c"],["/tags/loundraw/index.html","22084961f188aa4b4cb7c6da7efcc238"],["/tags/こがらし輪音/index.html","7e410bf76448c93ee88dde03fa142aa6"],["/tags/ざっぽん/index.html","5985eb7a473e6b32ebfcc3822d9c6d8f"],["/tags/しろまんた/index.html","0e82c7f02667a0554fd9bdaf660403a2"],["/tags/つきや/index.html","2b68831eff084395d0596ba07f8f4eb7"],["/tags/アズマサワヨシ/index.html","4a0aeab0fe77c12676bdf168002307ae"],["/tags/アボガド６/index.html","25b1b7b2294db9d1081b2dc2cfe71695"],["/tags/ムサヲ/index.html","36980a57490ac0e3718bdb22e16e53db"],["/tags/一條岬/index.html","f521978c35a3a7a2a4692254e56f520b"],["/tags/七沢またり/index.html","c66b53bb725dbb9b51f33103d6141495"],["/tags/七野りく/index.html","d5f6a44d856430357ef1a59ca7aff5b3"],["/tags/三月みどり/index.html","3b6bb8c5f8853ee653736106d20935c6"],["/tags/三田千恵/index.html","ad0a35b837bf3c501966d9b50243febf"],["/tags/三秋縋/index.html","bf8120e6d895f3c11fde525662ba60e6"],["/tags/三部敬/index.html","abb91f82e327a15e5c3700c8ced713f6"],["/tags/丸深まろやか/index.html","0ebec9dfd4a38faa15d831cc634a1d51"],["/tags/九曜/index.html","bf6eedf3576d4e6a0d6a538c6b54968e"],["/tags/二宮敦人/index.html","e66dea9faaf9d4b9eccd58a90278b79d"],["/tags/二語十/index.html","e8f07d80ef469d96c0d08a92db5f07a2"],["/tags/井上堅二/index.html","1678a7ef07841f33df5383af62c66256"],["/tags/伊藤智彥/index.html","af53a26e4fe2954ec3e64ff957f11601"],["/tags/住野夜/index.html","9f5cc4e3ee829a41b4c9b44870f39590"],["/tags/佐野徹夜/index.html","e131793b33b446a30dd19c52f72703d1"],["/tags/兔谷あおい/index.html","23271d7b836ae8975246f1066bc425e3"],["/tags/凝微/index.html","9e9f28358d6d418e2d46559eb3a1104f"],["/tags/凪木エコ/index.html","83a5a3230b5af6c2bab5470ec8be8f03"],["/tags/凪良汐/index.html","eb6b8f9ac300aeabe87f9a76d6249913"],["/tags/勉強/index.html","45889a362edc7ffbc7af27ddd949e5e4"],["/tags/勉強/page/2/index.html","d0652ae781659a43ad4bf0f2a68d3978"],["/tags/動畫/index.html","817424c59bbca12ead8aa65387a6d5ee"],["/tags/動畫/page/2/index.html","bd2f0403d54a89d07dc5de67941e749a"],["/tags/動畫/page/3/index.html","207f55ad997e3fb80cda88d63d3ec39a"],["/tags/動畫/page/4/index.html","b1d558c8af97b944b3f71a6188d287c6"],["/tags/及川啟/index.html","b192601fdef283649e91752ba94b16cd"],["/tags/古澤良太/index.html","ef33b5b7f77696e0d1ada3695879e9ec"],["/tags/吉月生/index.html","6ff5de7cecd07935cd963e8a9d89a660"],["/tags/吉浦康裕/index.html","627bdd50b08772a797f26ebb7dc0e8a8"],["/tags/吉野万理子/index.html","662da77a35c72fde4d9ce7b1e9cf6529"],["/tags/周蛋撻/index.html","c4612950b82a271cbc9e3f501a1eb35a"],["/tags/啞鳴/index.html","a0b7408953509fa43db7f7bccfacea58"],["/tags/城平京/index.html","b3d0a7126c645b0a4a44f21499fe9957"],["/tags/大森貴弘/index.html","fd876a3b5528bcea8e400ef0d03251b9"],["/tags/天澤夏月/index.html","9755a5cb0ad0cb7f9e616719dc09344e"],["/tags/太宰治/index.html","942501ffca5ebf402babd6d3d98c29c2"],["/tags/安里アサト/index.html","0fae6701053ecfdeb432c5c1cc000aaa"],["/tags/宮城陽亮/index.html","26b48be3619f416e5e46f79715cb0701"],["/tags/宮崎駿/index.html","069e5762b80d89c61c7abdcc1d0a0e7e"],["/tags/宮澤賢治/index.html","e840d0074c72eeb92993d7c22ad4b0dc"],["/tags/小說/index.html","fd8ab63c94c1d46f8977a388ea5a1242"],["/tags/小說/page/2/index.html","72bcfc703c839314af0a4e1af99253fd"],["/tags/小說/page/3/index.html","8f774e6cc3667f3cc5d8d2ebfb859ded"],["/tags/小說/page/4/index.html","afd56ca9466ec90389491f85a13f45e7"],["/tags/小說/page/5/index.html","896231602062602a897f67ab9e658820"],["/tags/小說/page/6/index.html","16ac0786beeb595f1d26dd9128db35d1"],["/tags/小說/page/7/index.html","ae44cb071ae7e34ad33fa9bdc168a578"],["/tags/尹炫晳/index.html","c6bf6e3843b637dc55a62469e02983fa"],["/tags/屋久悠樹/index.html","1bc41119291c181bb13b1dd2017c1a13"],["/tags/岡田麿里/index.html","a3403f01ab285c0a912c0f1b5f99b2fa"],["/tags/岬鷺宮/index.html","373e70a5d99bc07f2315d3a2b1f22043"],["/tags/岸誠二/index.html","ddb643080c110e1bea95da7ebb18c0b5"],["/tags/志茂文彥/index.html","49ce78782092b06d36ca458a1e64d83e"],["/tags/恒川光太郎/index.html","3d78eb8525e05ab5c6f8804b2b0e75df"],["/tags/斜線堂有紀/index.html","822a81f81de9172014b3f5edbc80021d"],["/tags/望公太/index.html","9a3c2136492bdffbc8af0fcbbd072e51"],["/tags/木皿泉/index.html","dbe56fa5660b43ecfe2a19dd0b5c2599"],["/tags/村上春樹/index.html","4e8d4e8601d995a21140efccd2440410"],["/tags/松村涼哉/index.html","5c613daccc7c89e2ebc41ef05a5517bf"],["/tags/林直孝/index.html","2762d7d79d3a97b29a2038f718414c2b"],["/tags/柄本和昭/index.html","0a02960d17859d58788567b291ee467f"],["/tags/櫻井美奈/index.html","b1492afd26c0aaa74a012c9efaff011a"],["/tags/此元和津也/index.html","6d1e7fc7ae0e042b3ef3e5b5746307a1"],["/tags/武田綾乃/index.html","6ef85323be3b2798d7f40acbacc20835"],["/tags/沖田円/index.html","49f8a5ee201792b8b1034bb11a14985c"],["/tags/河野裕/index.html","6d120e1b4941d4e1fb5c45d880080570"],["/tags/海空陸/index.html","7feaedc1b53e328d639f831a262365af"],["/tags/海老名龍人/index.html","5dab22e079db02886f8065ef9561ca34"],["/tags/渡航/index.html","4c46fc58801fc478ba1ca8f53a8bd580"],["/tags/漫畫/index.html","6f1175706b4ab3bced8f8040fd6a0947"],["/tags/澄乃真希/index.html","8115713b2011e66ea7114f81b6384661"],["/tags/燃殼/index.html","63fa48963ca640ea23681ade3d3d95c2"],["/tags/犬君雀/index.html","7f2fb625b276e219440dedf8a8d6edee"],["/tags/猿渡風見/index.html","71587c083fd0b8d5e192874e21c2a4bc"],["/tags/玄歌浪蹈/index.html","da60a040c0d396dafcf65b8ffd574c2e"],["/tags/琴山/index.html","ebfa0fa51854d85bec522c589a7f7115"],["/tags/白石定規/index.html","7af90c95941732bae7dc7e57eceb3515"],["/tags/相澤沙呼/index.html","6cbef3cd9703f273b3dc89d4bdb4ed91"],["/tags/知念實希人/index.html","be74db5090481ffd0fd047f28ff2418e"],["/tags/神崎紫電/index.html","32dd5295c98ec2f85c9ce0d1911b4c41"],["/tags/笭菁/index.html","8ce128b12ab84d57323018b6c8f859fd"],["/tags/細田守/index.html","03028e89b886ddec3e0ac98150f505cc"],["/tags/綾辻行人/index.html","2727cfe1e5df3b1cc1370d6c2a1f6c56"],["/tags/色のん/index.html","a356e38e1c158be1c286a73962642778"],["/tags/芥川龍之介/index.html","3adc2a44ab4e0aefca91887dace6e0f4"],["/tags/英貴/index.html","2636da70539fcd2e8e361209c6d81e92"],["/tags/荒木哲郎/index.html","46c4baef88b5d155569ed7c46b2759ef"],["/tags/莫默/index.html","e3ad1bc5ada876a6499540980a418840"],["/tags/葦舟ナツ/index.html","c05bd14a02fbb98f2f90791b4f142403"],["/tags/藤萬留/index.html","3738ad5b4f86490cab25ed4d916bd839"],["/tags/蘇小暖/index.html","d8b21b1ec7049ac90dbf4158a5b25969"],["/tags/裕夢/index.html","05b258a35b9766ded21abc464d596e45"],["/tags/西修/index.html","307dac60db8ac2e4944a884614527b39"],["/tags/貪睡的龍/index.html","6b97afda7095e7b10cb1e04ce3872250"],["/tags/達平、英司/index.html","2fe4502e539b37f25e6dadaafe36b5c8"],["/tags/醋青魚/index.html","4c3a33df4d2cdd6e4a96f1eb52b8a628"],["/tags/野島伸司/index.html","96ec748121a048136e545d7454529355"],["/tags/野村美月/index.html","467d42a8ab5dd05298b3ca81f46b1ea1"],["/tags/鈴木露莉佳/index.html","f15ba990182f7ca4db403c5e9259ecc5"],["/tags/長井龍雪/index.html","a3e258cf275e512d05475404f6524af1"],["/tags/雙又翔/index.html","baec4562d44baa7b8f47a05399a39e89"],["/tags/電影/index.html","c6bb034305b4b6fc69bdd95ce80c9b02"],["/tags/電影/page/2/index.html","63717dca329ca98561e8b42bcc303691"],["/tags/高山箕犀/index.html","231f264676c986ed818f950c8e47ac23"],["/tags/鬼頭莫宏/index.html","0d70b920d36e751e4b47f54162690c15"],["/tags/鴨田志一/index.html","45928765c7cc769f1dcf0bea3ff91eff"],["/tags/麻之准/index.html","585f5a92d7c0060e19f0f69b3694fb7c"]];
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
