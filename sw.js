/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","879cb8d65323e9341b506713219e415c"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","cb54b44e4eb05eecaa5a6d98f0daa75c"],["/2019/12/25/Review/無法計算的青春/index.html","2ada5efd4d69db31cf87d0a24d9e2bef"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","5e97250e52364d6e52516886191e219b"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","d3f0627f97ef49c7cd8e25c8c8eab44c"],["/2020/01/19/Review/下雨天，不上學/index.html","9e09a026ba090876a51a29fe0c97e8ce"],["/2020/01/26/Review/三日間的幸福/index.html","95653cf2ffcc5836e5f0e8ec22a898f2"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","c0bee8fd83f866b99f3e70847f40449d"],["/2020/02/09/Review/青春期超感應/index.html","f3c221a28ea6d0998fdc5315988e2f79"],["/2020/02/15/Review/又做了，相同的夢/index.html","15b87ca4505d3e0a4e6d10007e1a75c8"],["/2020/02/22/Review/回憶當鋪/index.html","fb12d39c9b7951b2b5cde431aba61721"],["/2020/03/22/Review/不適合自殺的季節/index.html","cc952b1d7d525ca7a4bd7c7c8a890e66"],["/2020/04/26/Review/我們都無法成為大人/index.html","177431b71aa2359c2c84cb9c9a3b7e39"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","333703e899d0af8192badd9b8517aa5e"],["/2020/05/17/Review/人間失格/index.html","da62d708fe810f5e3b22c9b6d5220332"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","f06dd4e30232f4c683f93dd10820d3fa"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","f59237d75a98daee9b12fcc3239b0902"],["/2020/08/01/Review/銀河鐵道之夜/index.html","f38977f8841a6c83d419bce793db76f9"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","8536df58f16b01e71a17f0f13942446b"],["/2020/08/16/Review/15歲的恐怖分子/index.html","71e6f87fc06bb63af243d15ebe7c47e2"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","d490d7c63fcf7ffe735f6ca033a872e8"],["/2020/09/13/Review/羅生門/index.html","261da839e93449c11ca54a29a4ee9692"],["/2020/09/20/Review/闇夜的怪物/index.html","38829087354e6f365405b72c357760b4"],["/2020/09/27/Review/14歲，明日的課表/index.html","e557ab81bc20baabf738d333899335fc"],["/2020/10/04/Review/致十年後的你/index.html","5030c9210b1ae58172286ae8af0ed332"],["/2020/11/08/Review/滅絕之園/index.html","2903b11bd75364ed3b533aae5b1076a7"],["/2020/11/15/Review/將愛拒於門外/index.html","b871426229b40c9ae5f648e464f760fc"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","bf6c1506ebbe969dcf1f17eb781338c7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","ec0f67e082a805f97638d1219d510d3b"],["/2021/04/22/Review/道印/index.html","5fb7967c7247965bfea3a40a4cd09e00"],["/2021/05/03/Review/戀入膏肓/index.html","9a3c8d1202fa5d85895e80e1d57d0c8d"],["/2021/05/10/Review/Dice/index.html","3304b7d850d0cfe720a462ea247e1701"],["/2021/05/15/Review/魔女之旅/index.html","dfb4f388c7af7299d877f4a9b4b50837"],["/2021/05/28/Review/戀愛寄生蟲/index.html","96999b1a71923b24ef405f96f67ffb66"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","5c5edd6310cc31ab0ef27fc6fd91e4cc"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","9432ace55727142f71fc9b67c48680ae"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d348f55bd140116f91b86a88150ccc1c"],["/2021/06/05/Review/流浪的月/index.html","bb820e194d3a9993feaad4cf6583ce1a"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","2968a12baeffed4cb1cd15eaa1739f47"],["/2021/06/13/Review/第一人稱單數/index.html","1c4594e8a13bcb471c5d5a0f799fce2a"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","63d7c6367d8dd8c7b3ea7c53e7db79b0"],["/2021/06/16/Review/願你幸福/index.html","31c7cf2b347283867594e4d9bb931fe7"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","47d7f31676a87be7346e0b6831877160"],["/2021/06/21/Review/神隱少女/index.html","1c53ac47fb129f16d222051de47f716d"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","7252d7b98ef5c30085cb4176d9942866"],["/2021/06/23/Review/天空之城/index.html","b41851c325dd4947bfe00e0662187f70"],["/2021/06/24/Review/魔女宅急便/index.html","ab4f9fb9347a37a016e41b210f02dbfb"],["/2021/06/25/Review/借物少女艾利緹/index.html","c39587a6d860a6cbe154e213503083ba"],["/2021/06/26/Review/魔法公主/index.html","389e2c742dd3643f66abad14d04946c3"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","74a4aa2b1ed344b1aa5e7c16a56bcf5c"],["/2021/07/04/Review/飛雪與劍/index.html","2aeb3b423b68b6b72eae4fa586997ae3"],["/2021/07/09/Review/地球防衛少年/index.html","b184942b88419d235876eff53d21f704"],["/2021/07/12/Review/Angel Beats!/index.html","9fd805cc454899b82ccfae7c1e93b912"],["/2021/07/13/Review/Clannad/index.html","fdbb1938a6ad88f3f5e1c18e8eeeedd8"],["/2021/07/15/Review/AIR/index.html","a4ce4e6ade6a3fefa89fd617b89e0b41"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","b2dfac3b6dc7b5f3b2b792a0990d1af8"],["/2021/07/15/Review/螢火之森/index.html","e9eda47909e5450279441e40b6283002"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","ad8be119904a2183bf1f55f92e1bfa78"],["/2021/07/17/Review/奇蛋物語/index.html","e73bc68feb73afa03f172b0121ccf8e8"],["/2021/07/18/Review/Vivy/index.html","6b24860daebf3c73f8f4fb83b0710bbe"],["/2021/07/18/Review/請妳消失吧/index.html","1e2383705ff00a6685d9428316310bac"],["/2021/07/19/Review/漣漪的夜晚/index.html","0748c7e1878808dbc873a01b459b1eb0"],["/2021/07/20/Review/月色真美/index.html","29c5c5219a610ba3241e9b6bc9b53bf4"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","5b1347724897d4b9f522c22cdec5d628"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","bd6ace7070a53f7af36a10533b0e7bd8"],["/2021/07/22/Review/罪惡王冠/index.html","be5098379b8e256626811f2aa39b8d92"],["/2021/07/23/Review/弱角友崎同學/index.html","3d5a18ff257422964353d4678abc4cc6"],["/2021/07/23/Review/惡之教程/index.html","f6c390571b9b9363065a134aed78edb4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","eec7ead15eb283855b988415d6b786e0"],["/2021/07/25/Review/魔王勇者/index.html","5df9afa39cc586d44799bcdb0bba658a"],["/2021/07/27/Review/一年A班的怪物/index.html","32b4268f2bd9c1109412c11cf7440144"],["/2021/07/27/Review/奇巧計程車/index.html","794ba7c48d4677ee8e6de0e4dad3b8d6"],["/2021/07/27/Review/專情的碧池學妹/index.html","f9928c85a517cbaf4baaa5bd665338fe"],["/2021/07/29/Review/只有我不存在的城市/index.html","389f69af8bed8a7c72df4f5c659bc6f9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","54c3666fdac507092ff51fafb306fdf8"],["/2021/07/30/Review/可塑性記憶/index.html","555af3d11d52daf3e769ec014fee5271"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","74a9054db584e4d11accd14d1b719e1a"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","34941faaa62d08f168ad102562f9cf81"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","aa9b61c082feaad6106781924a9268c1"],["/2021/08/25/Review/清戀/index.html","adf4d6daa3ab96070510a86ad8cf174d"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","031a47712e17aaa3ec154e179a2486d7"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","4953bb562c59ba0850f5b48b52dc48f7"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f542448f90a7490c5cbeaf9e34138513"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","c9352211cef8a9384ff70f7fc3be0029"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","bc0ff0b158edc12b49a9767a52996a85"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","7380bbb43c8f3862027ff92cd31e49e9"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","afc6514959017cc98881b28b454457e6"],["/2021/10/16/Review/龍與雀斑公主/index.html","64421c3f92d9eb77e5c5e0fb71111a3d"],["/2021/10/19/Review/孤狼不想開後宮/index.html","5fe36e383dea44aa5c463b5166333763"],["/2021/11/13/Review/徹夜之歌/index.html","9207da149d2435ba1591012deff8f348"],["/2021/11/24/Review/武煉巔峰/index.html","0458122c1d2368eef41393637d5ef9e9"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","6dff2f189b5ece27bde3537e9b8931ae"],["/2022/01/28/Review/神醫凰后/index.html","7859c4d89a061c0f27d23e1daa27ed57"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","c15c5efb9c1253e159aa8f049125a76d"],["/2022/02/13/Review/夏日幽靈/index.html","f2630aeb13e76f7f070c36b2e136ec74"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","b6514ac3fa6329a30d7f7f512f1e8b0b"],["/2022/02/26/Review/賽馬娘/index.html","db4b6d5a380e1060f9e3f01ecd778d86"],["/2022/02/27/Review/大欺詐師/index.html","7986c707c278dccb110ee136d6145308"],["/2022/02/28/Review/前輩有夠煩/index.html","0adf013df26e634b309e97667ff5a122"],["/2022/02/28/Review/碧藍之海/index.html","6e34a9d7078df574b0ce158bbd214008"],["/2022/03/05/Review/落第騎士英雄譚/index.html","55ef6d5ee0a1f50f75c683ce86593746"],["/2022/03/06/Review/Another/index.html","23f1554e3b5debae221fde08a5b25e0c"],["/2022/03/06/Review/入間同學入魔了/index.html","c807813aa30f69b9250879e9f580042d"],["/2022/03/18/Review/再見宣言/index.html","088c5ce5dd0a43588fd08135e5c888bb"],["/2022/03/23/Review/生若冬花的妳/index.html","30b393bc8c64a241db7495b874345d84"],["/2022/03/25/Review/天之弱/index.html","78d1ec7e99230628f46013623640cf69"],["/2022/03/31/Review/滅了天道之後轉生/index.html","46f4875a1a2d29262a7788af8c726c02"],["/2022/04/30/Review/泡泡/index.html","2cf73e89d5fbc729b253780f550dd05c"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","1d6af907f5a5cc19c7a04c643975f44b"],["/2022/06/13/Review/偵探已經，死了/index.html","44c82cdaa8809db7513e1483619f3355"],["/2022/06/14/Review/黑色子彈/index.html","9b9e8060ef1459ef1183870b84dd611f"],["/2022/06/15/Review/黑白來看守所/index.html","de4134c12a905a72e8af67bcdeee8f49"],["/2022/06/16/Review/虛構推理/index.html","aa860b355d0605c29286dd81aea953d2"],["/2022/06/17/Review/戀愛與謊言/index.html","fc805b772f110a2184d1315131a7521b"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","29eb5dd4fcbdd880253dafb6b3130f54"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","bce67db70726266bec606d0c7212e8a2"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ad6de1bcb6b93ef32b4d09bfb11aa6e9"],["/2022/07/03/Review/Hello World/index.html","652f6fdfa9e167984fa7b4510532b37f"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","dbe6abd1c1ebc7931a693f63905fdbad"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","11c3e8d13dcfab6c462eb5f7ec4e4851"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","50f42fd3e2737648b317a8feaafb9677"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","82deab4c69b56a90d2712e77ecdd9455"],["/2022/07/16/Japanese/動詞分類/index.html","bd4bce8607b277e4e8e11b34469b4622"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","d7d96109f8329aa24809f4a9d5d7f6a2"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","cc9ed9d180218084c16523644bbc705f"],["/2022/07/17/Japanese/音便/index.html","c80f06deed5aeb555891f6093f9233b9"],["/2022/07/18/Japanese/動詞 時態變化/index.html","915b5a512bc5667eb93b8240e1ff7f88"],["/2022/07/19/Japanese/助詞用法整理1/index.html","56f4d0ae84e7bf1506d7b60f2054bbdd"],["/2022/07/26/Japanese/助詞用法整理2/index.html","8f21932ac958bb146592258b77d1e488"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","ccc75d5f981bdcc06d2232dfa104f190"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","de569e4553a57ac83b319f45f327a6c5"],["/2022/07/30/Japanese/疑問詞/index.html","fd2c557a6610d8c1d61eed0b5db4680c"],["/2022/07/31/Japanese/助詞用法整理3/index.html","059805615c7306c8582f013f613b6f07"],["/2022/08/02/Japanese/副詞整理/index.html","d230a01d2d3e54e07a4758fbeda33984"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","abef4a92e6469e71eef18338c80d8cd2"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","3c0e02396b4515dde9e38e24f6109cd7"],["/2022/11/22/Review/組長女兒與保姆/index.html","f65bd9117fc8d51b218320ae77fdff00"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","e8d96e37edcaa15222844599d2f701e5"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","82ecc9e1e2a32d35bbeb2b396b181e23"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","87bcf738140a9263e444bac00b8f7ffd"],["/404.html","06cfd48533de547028917d64ba16e678"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","66c22b8bdd9ff78ee64d20c1a8d3ac25"],["/archives/2019/11/index.html","f91f60a3e56978102d1e10ec79d102e8"],["/archives/2019/12/index.html","fbc478d153e52ba33da4dd7493213a3f"],["/archives/2019/index.html","00725d63c483e359861e5b6ac8a00433"],["/archives/2020/01/index.html","e91a8d4fe8889dcd196458c262f22040"],["/archives/2020/02/index.html","7d0c881eae6dec51c02d0bc7d99e944c"],["/archives/2020/03/index.html","12d37dc3ba3c249fb0ff8fb49987f532"],["/archives/2020/04/index.html","ff00e38e944c652afa0f6011ed610643"],["/archives/2020/05/index.html","6ad892cd07299f8341acac3850c32904"],["/archives/2020/07/index.html","06eaf2c8792818df6f5a9ed48802417c"],["/archives/2020/08/index.html","7654f54401b9682d46772f0da0df00f0"],["/archives/2020/09/index.html","6e4d1163013102ac3144a12cba428296"],["/archives/2020/10/index.html","1780e5be8746293679a8bcf637215712"],["/archives/2020/11/index.html","044b6d4c85b29fad8f5a285841175d1b"],["/archives/2020/12/index.html","6a1ceb48135bdbe573cf3275ec7ff3d7"],["/archives/2020/index.html","c5ec1536ca1cc38313bfa2978d2a70e2"],["/archives/2020/page/2/index.html","0fccc6c9692a90e448f33c1b1053188f"],["/archives/2020/page/3/index.html","e69aadaebf1c372503d6f6e70453618d"],["/archives/2021/04/index.html","2eee3464a665ce022601e10a89d4a1e6"],["/archives/2021/05/index.html","a0fb2935e9e17db3ae40d7e32787a399"],["/archives/2021/06/index.html","d3f859fe41103a7569645046850cdb59"],["/archives/2021/06/page/2/index.html","0a56b193cbaf1755327e0722983af401"],["/archives/2021/07/index.html","18d143cb111d95171d9829fbc6f197ae"],["/archives/2021/07/page/2/index.html","78d0a0fa8d650479c3900efbffe07375"],["/archives/2021/07/page/3/index.html","fbf1cc0ad97c0aa26efa7b3504e71f60"],["/archives/2021/08/index.html","b6156570483d476a724b63994287a8c6"],["/archives/2021/09/index.html","8f35c716c016c3c626924dd106e99eca"],["/archives/2021/10/index.html","99bb9da2c62393cf6d38f62d54b1c7bf"],["/archives/2021/11/index.html","98a97a956552063753a69706004f68fc"],["/archives/2021/12/index.html","39fc384efdf77588dcaa9aff26accd2d"],["/archives/2021/index.html","d55bc39dbdb8a2955838ac31dcb82c1a"],["/archives/2021/page/2/index.html","07f5673059da05cce36b8cd406c174e1"],["/archives/2021/page/3/index.html","2d714da9685c4e3cc2ee80817a91df6f"],["/archives/2021/page/4/index.html","1d3cf1788d159b49afac4dc43e115b81"],["/archives/2021/page/5/index.html","4853ebb11e945116437621885e64d783"],["/archives/2021/page/6/index.html","2822e10aa7403f0517b44d6cf14a0d47"],["/archives/2021/page/7/index.html","f6be908180f3691d265f27c7f898e5a5"],["/archives/2022/01/index.html","bc03746fb9a55ee1590eece4e1a7d408"],["/archives/2022/02/index.html","5552ac981c9f9cade6a435f75fe5ae43"],["/archives/2022/03/index.html","eef761b58c2440fb0369043257bac57d"],["/archives/2022/04/index.html","a529ebde72e1e6b2d4abc2690741fa67"],["/archives/2022/05/index.html","1e7c0d4b57feae6e1d1a74c8b5e1ce1b"],["/archives/2022/06/index.html","5cfc8ce33cb03c72fcd7e2673e9c812e"],["/archives/2022/07/index.html","b29a3a34bce5a8b830165621d6828f7c"],["/archives/2022/07/page/2/index.html","ecc020fa15cb21fb47968b2a226ebac4"],["/archives/2022/08/index.html","05aef99d9eb022e847c78ebf4c2e3420"],["/archives/2022/11/index.html","0f8bde1b32f29dcc6692e4eac7af6b68"],["/archives/2022/12/index.html","f5449ffc544f9b41f83b42a42f1284b2"],["/archives/2022/index.html","aec4865c85d9bddf50eb16313438bad8"],["/archives/2022/page/2/index.html","843fd6f620a6d23da2af58432cf0af2b"],["/archives/2022/page/3/index.html","81d10d553e990882d5dfd49beaba6f85"],["/archives/2022/page/4/index.html","90806e9bfcc7b0fb4d9c121d873444c4"],["/archives/2022/page/5/index.html","6e6baae6fccc6e1d912a47da9e4df625"],["/archives/index.html","cf35612a928af92eabe2b09ab4039305"],["/archives/page/10/index.html","9e37f42d0ac5762afb084a6d4c76d6ed"],["/archives/page/11/index.html","df78815e8ce69ef63686c8b7291e2756"],["/archives/page/12/index.html","f27575eb4048f97d7a60a1bf3a270504"],["/archives/page/13/index.html","3e1c11bfa5a21f1e2d016b4b32b3a877"],["/archives/page/14/index.html","ad609bbf075533dfdff63d581386f390"],["/archives/page/15/index.html","4fbd497c5d8e8cca911ec6b78e564d66"],["/archives/page/2/index.html","78395450e69b6fe026fcf59595342f6a"],["/archives/page/3/index.html","d98669f0054ab630a3d8b9db11d18b32"],["/archives/page/4/index.html","26178e28e4c07cdeb5985f2b2fcbf99a"],["/archives/page/5/index.html","5c6576a15be1cea60a0d27b66673f076"],["/archives/page/6/index.html","d717cdb02442bc26b4390907bc26255e"],["/archives/page/7/index.html","2fe92f21081358d06b694023e337697b"],["/archives/page/8/index.html","71083d8449bd0e2fe9bc61ae68bfcb0a"],["/archives/page/9/index.html","80f65dffab412f5d4a05125acc016e4f"],["/categories/Programming/index.html","eedb2e6b46399d12628cb48779eea3ce"],["/categories/Review/index.html","3c5d719fae634701db133db95586863f"],["/categories/Review/page/10/index.html","92f3b3e8f6314eef297387a6eea76796"],["/categories/Review/page/11/index.html","f4a65617b6b5c466b078d904957abb9b"],["/categories/Review/page/12/index.html","f47d9384543d65f1890c41b447232054"],["/categories/Review/page/13/index.html","ed0d0241414c80d1c9e40e3b3c7a05c0"],["/categories/Review/page/2/index.html","61399a015b4354b3586712ecbe1b376e"],["/categories/Review/page/3/index.html","655f7e10977d6dd5afadc35ff00ad266"],["/categories/Review/page/4/index.html","e744ed4eb7c5d604518fb059fdf97d5b"],["/categories/Review/page/5/index.html","38d7c87a61644d14c8da931b1cb2ed72"],["/categories/Review/page/6/index.html","aac4d5d42312126b11219351484381fa"],["/categories/Review/page/7/index.html","8d9f53bd106f5b0d69e55d50740cfbb3"],["/categories/Review/page/8/index.html","f5a9a83f61a18df2e3411c23518a7c6f"],["/categories/Review/page/9/index.html","290a9daaebf9315d7f3e940c313dbf9a"],["/categories/index.html","85658842b6e336a1183fe532695962b5"],["/categories/日本語/index.html","9ad96aeeba5bb5c37a9ec96d245d8a33"],["/categories/日本語/page/2/index.html","80de3824440148ff9ab5c0459663f76b"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3a9f0818139a2a050e79ed8d3159baba"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","b9dd83b9d0e329b6e35681a5ec850888"],["/page/10/index.html","c837057260babd068aec9b09fb53793f"],["/page/11/index.html","fc5883ad441a403a6de7556e8f8f6a74"],["/page/12/index.html","45ea2c3deb726c26523ccbf9391b78c0"],["/page/13/index.html","f445c76ca7e4da4faf5248f7fc7633ab"],["/page/14/index.html","1574cb2fa31541cc1e6e277228f8164a"],["/page/15/index.html","2973aacda8a947dac761a6625e1c26d0"],["/page/2/index.html","2f2f723e64bca0620c1b717f18113857"],["/page/3/index.html","be9834508c7cda83c17f09c9cf320964"],["/page/4/index.html","81dc5d4fba7bf5405a1a8a5c90d02b8a"],["/page/5/index.html","b492237cdeedb595cf8be844feef7350"],["/page/6/index.html","80552a0291757986431e9ff4c8babf4e"],["/page/7/index.html","8f8b2356e173fdec67e1859c56451870"],["/page/8/index.html","b552f662382a05f9d9ae043ee1a419d0"],["/page/9/index.html","28d96f5043256cda96625e96f82099b9"],["/sw-register.js","37de0de20978d6ecd277aadf3fabeaa7"],["/tags/10分作品/index.html","7b6b0dc2c207fa616fffe6c7cc916960"],["/tags/3分作品/index.html","b89ad274d5d6ef784a4ca8f8e3385f8d"],["/tags/4分作品/index.html","95280c5a0ca617607cc00ba404f735ea"],["/tags/5分作品/index.html","c957ed00eb133665257731ac4464efd3"],["/tags/6分作品/index.html","3765e85605e37f1ffb30acdcfbfa576d"],["/tags/6分作品/page/2/index.html","4f685c31b346f3e7d21ad53a35083f22"],["/tags/6分作品/page/3/index.html","6ef72effefab68ce46fd487f0fd3f35f"],["/tags/7分作品/index.html","b4263d84eb067946d5e1f3eaaa17e38d"],["/tags/7分作品/page/2/index.html","870742ffc043e07e8a380868581ebcb6"],["/tags/7分作品/page/3/index.html","9300a305311de0c189605ca0991c8717"],["/tags/7分作品/page/4/index.html","2e7f82e5e96c505149cddcc326183cfc"],["/tags/8分作品/index.html","74c02122aff3c5ec6e5212b5afa42375"],["/tags/8分作品/page/2/index.html","2bcc1dfb9b746eae05857d029c96e5d6"],["/tags/8分作品/page/3/index.html","aba3b0e90a2242f80b4118a6f2ca33e1"],["/tags/8分作品/page/4/index.html","6ce7228ac74d92d2c9f207b16ee40c9b"],["/tags/8分作品/page/5/index.html","b01fca816f2b446692555e5851ea78bc"],["/tags/9分作品/index.html","db1fd717ee6be4249fea890a6ccbf354"],["/tags/N5難度/index.html","0f5ffe62e87bd4652aacdf3ac912a0ba"],["/tags/N5難度/page/2/index.html","fecd258300ef3b4926f4a42fb986d232"],["/tags/index.html","552422fcc3f7cfc0891e0d295cdbc347"],["/tags/アボガド６/index.html","4be25088a39e0d436faec88b7b2e6072"],["/tags/三秋縋/index.html","4187fc4e6854522bff66976d661a4ac4"],["/tags/中國武俠/index.html","1e9ce066786f05b778c5424391acd5c9"],["/tags/中國言情/index.html","d43d4d09eb0681bd33a232db6e78b59f"],["/tags/二宮敦人/index.html","dc8591d9a6f6e117c373b6f855d8e97a"],["/tags/人性/index.html","90706ad3a2e36cf04fa477bb7b95bb86"],["/tags/人際/index.html","92b9a74cc954864129dbda959999beba"],["/tags/住野夜/index.html","c3e7610e8dd158873df6184e8f2e0bcc"],["/tags/佐野徹夜/index.html","2090fa835b1578c52f6dd4ba4e17f06d"],["/tags/努力/index.html","fc510399c834c9193e0d629dbf0d1d1b"],["/tags/動畫/index.html","b88a9d869c515c1bb420df84bcdb2cca"],["/tags/動畫/page/2/index.html","c5ad598ae09fbfb8479a5c867a76fc37"],["/tags/動畫/page/3/index.html","4e6b528d7a5b256c504fd0cdcbc3fe48"],["/tags/動畫/page/4/index.html","ed034bdce9632d2a9e27271188da11af"],["/tags/原諒/index.html","9df98febd4d034fd3fb77cf6d31c7af3"],["/tags/反烏托邦/index.html","eddd78cf546d42806feaafb2bdc56948"],["/tags/啞鳴/index.html","f3bf6ca8656c8c86992c84b6248cc44f"],["/tags/喜劇/index.html","639c2311b9559c9174a9af1e52232419"],["/tags/夢想/index.html","37319b80b206378b3aafd4753e58e22c"],["/tags/天澤夏月/index.html","625e6e2209fff8c012d040d1632395b8"],["/tags/學習/index.html","f768a49107c097310c663beb1cb87ff7"],["/tags/學習/page/2/index.html","9ba190890c36dae2195fd9dd4c8e515b"],["/tags/宮崎駿/index.html","0a34851874e5133045fe2c54864429c5"],["/tags/小說/index.html","3fcb6bad4a30050acd44b72ee2561ced"],["/tags/小說/page/2/index.html","cabf509ee43a0659658953bb020d824f"],["/tags/小說/page/3/index.html","8f8af824ec366307e948ced77ebcc5e8"],["/tags/小說/page/4/index.html","ae985141694b7d8b15eaee2b0abbea4d"],["/tags/小說/page/5/index.html","1262e94679bdaadcd3fbcd44677c0ef8"],["/tags/小說/page/6/index.html","cc9c18b36d718b1d05d0cd2557b42351"],["/tags/小說/page/7/index.html","63c6eb7ce83102359a7551f7202d9c1d"],["/tags/平淡生活/index.html","250141c0fc227c0732e91504725e6c0b"],["/tags/幸福/index.html","075a4262074c6eed4f0a330054d5b641"],["/tags/志茂文彥/index.html","bbea69ea7cb7f4271057ccb36766dfef"],["/tags/愛情/index.html","dcc30a85bb4e936f1795ea5b03e0c731"],["/tags/愛情/page/2/index.html","ad305e3bc478d30f89fe5b8496aad657"],["/tags/愛情/page/3/index.html","2ebc146a0534f7f468b18a722b994e8e"],["/tags/感動/index.html","8ca9f5010dfd367c33bca3af78b14e1b"],["/tags/懸疑/index.html","288f9d9619a59de946662e7ca9549157"],["/tags/懸疑科幻/index.html","88d78708a42e3aa880c64411c7a84095"],["/tags/戀愛/index.html","84c52e40854698f6edc921733a2c066e"],["/tags/成長/index.html","7a3b4bd7bb91d03586f5a4c5b43681c8"],["/tags/成長/page/2/index.html","aa0200587968d4ade1b6cef79db91b8a"],["/tags/戰爭/index.html","98f2cc346924c747eab38f3814467f54"],["/tags/推理/index.html","bb90659acfe1c07b9c9caa02747a1f94"],["/tags/搞笑/index.html","f8aefb51570730b7cfaefe37295532a8"],["/tags/救贖/index.html","065c2cf86417ef689ff25ae4fee74999"],["/tags/斜線堂有紀/index.html","c52696d3c3d07f1f92b6613d843e85a4"],["/tags/日常/index.html","7ffdd1dfc9ca7844ff5151fdba08059d"],["/tags/末日/index.html","8e600831911195640fd33c54e3ac49b5"],["/tags/校園/index.html","91032f5cda47bbd8af2325d91f881bf9"],["/tags/武俠/index.html","73e8bf9fe2a2b8c2715a9b4d9736b04f"],["/tags/武俠言情/index.html","a407997bbeceaac1aabe3bb68c9faeb4"],["/tags/漫畫/index.html","a0d83aff989b0214842b8c1e94d69ae0"],["/tags/生命/index.html","b558dfb381565dc1a473e562548e7984"],["/tags/生命/page/2/index.html","311e4b9b3f6dac469b78cdff3139171a"],["/tags/短篇/index.html","cc2e1e3ee4ca0f5c43a4f1688f61e70e"],["/tags/社會/index.html","b8d9ff6e53603d49abe9e8bc047c44ed"],["/tags/科幻/index.html","5f2a091bb8bf8cc807b961ca5e8f8f13"],["/tags/童話/index.html","642a5e60dc334457eeb3372fa07d3ceb"],["/tags/競爭/index.html","6942cac528683889d94c93c1a300e99c"],["/tags/自我/index.html","7ac0e1730a00fff901d2fd2f80208d40"],["/tags/自我認知/index.html","4ded2af6e280bade208885cef38c37e3"],["/tags/葦舟ナツ/index.html","791442c6c7f2d3ddebfbfbe1ec4a9578"],["/tags/藤萬留/index.html","35e3c373201c04b71a6b8edfc47340a1"],["/tags/親情/index.html","5b858df5e61b84d9641c10e256718736"],["/tags/雜項/index.html","49cb1d72ed95accb68a8808ac9c40936"],["/tags/電影/index.html","f748f0eab794e38b8077079ffe0a1b2b"],["/tags/電影/page/2/index.html","2c4bac5d7b08a971c9d8cee80a0e9ea4"],["/tags/霸凌/index.html","27b7dfb1c476690c9c3d04fa00fd1f10"],["/tags/青春/index.html","57e6c51413047ad84ad6f3fbaeaef0be"]];
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
