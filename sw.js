/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","445bdf56a19fc343b7d7f3d29facc8d8"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","8b749862bd3fad5e25dc2519bc13f4c6"],["/2019/12/25/Review/無法計算的青春/index.html","25d9e19f74287a0c56a0cf64054c2e3c"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","44b04aa8103660943a204b50dce5200a"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","ea48d2e00c5deb305e64c0d888dca183"],["/2020/01/19/Review/下雨天，不上學/index.html","e69c9ed48eb92db630b15c497f3518f2"],["/2020/01/26/Review/三日間的幸福/index.html","b7a6764bf98623edf9dbcdbb74b2abce"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","e7cbaecce8224abd45b09a0c55e817d0"],["/2020/02/09/Review/青春期超感應/index.html","aae57975f9781557b8e4c1ced7b91037"],["/2020/02/15/Review/又做了，相同的夢/index.html","dd8b44d2b57546980014e77ad664a7f4"],["/2020/02/22/Review/回憶當鋪/index.html","a203de4b776055e2c4e943a5b9f5845b"],["/2020/03/22/Review/不適合自殺的季節/index.html","24f0fdc4e7d99faf9fae2219369fda86"],["/2020/04/26/Review/我們都無法成為大人/index.html","6af9b009a3c7db7138b8fa8adc19b721"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","e455085bb8fc224d64132e5242736b67"],["/2020/05/17/Review/人間失格/index.html","c5ab2d606bf369763e2f163c75715f32"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","d48c65ac2e7d110e90d1de8a593a1f52"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","7d3c3ea49d50f88fe701cc0747fa81c8"],["/2020/08/01/Review/銀河鐵道之夜/index.html","52ac806dc59cfee3b57dd864cf0e77f5"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","0cd3580c6df36a399a8f84402e21d6b9"],["/2020/08/16/Review/15歲的恐怖分子/index.html","fa95c36d6c7ca02a1dee0f517f3ab1b3"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","95d698be6286318d742b9d6afe05715d"],["/2020/09/13/Review/羅生門/index.html","c808311c41dd8fba2ebb758babdc9854"],["/2020/09/20/Review/闇夜的怪物/index.html","5d8b3d28bf18f01ceb7e0ab25a347755"],["/2020/09/27/Review/14歲，明日的課表/index.html","ff30e40f48240f1136f0d93fdf6f9ffe"],["/2020/10/04/Review/致十年後的你/index.html","e88e865c070dd7a6b74e3b266189dc7f"],["/2020/11/08/Review/滅絕之園/index.html","3e25d723d320a3d90da424eb8253fbdf"],["/2020/11/15/Review/將愛拒於門外/index.html","804ddd284b8625a6039bf63ee94c4626"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","2ccb856ac7fe08c6523319fd7664afdf"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","ad14c7372b73c91953992228c81f6a54"],["/2021/04/22/Review/道印/index.html","7805f3a35a7cc60eb8ea90e9abc66edb"],["/2021/05/03/Review/戀入膏肓/index.html","f216b5b17bc27cb353e55f0bc402cafa"],["/2021/05/10/Review/Dice/index.html","45f1f20cc7770589db84831d5900c5a6"],["/2021/05/15/Review/魔女之旅/index.html","948377207f57f9c6b384801c043ffb26"],["/2021/05/28/Review/戀愛寄生蟲/index.html","0595314ee98b8ab2dcd0f0295deedd66"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","9a6cea4de6ad30de886e5024b91f6060"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","b3d6e05c140fff0d0b19a3e71a2e70d5"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","0c09f4cfaad2a51b9a53a9b1a5e3c312"],["/2021/06/05/Review/流浪的月/index.html","930db7c46ba1affd69f780fc5f3f7971"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","7008073c1e8e2cb4b4bc0a12eed6f6f6"],["/2021/06/13/Review/第一人稱單數/index.html","257dff89f3871d480d3d576483158a35"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2b4badcdd5e9083bd83cbed9d62247d9"],["/2021/06/16/Review/願你幸福/index.html","a915c4feb58158c1edfc40f4036f23e7"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","2c6b3a81ffe19507fc2b5e08fc12a99a"],["/2021/06/21/Review/神隱少女/index.html","56289b928a704aedc344ef774c10767a"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","280852eb5fe67bda02481551f9619645"],["/2021/06/23/Review/天空之城/index.html","9778ab8db192227bb2dfb6f84d0d3898"],["/2021/06/24/Review/魔女宅急便/index.html","dc55aab49b0e6276172dfa057399cd48"],["/2021/06/25/Review/借物少女艾利緹/index.html","f13b3078c4ec16997c0b2c5012525cc0"],["/2021/06/26/Review/魔法公主/index.html","b5bb9726b80cd12f51676bca273adc67"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","a2f300c8c0f97f38d11e06892c4e713d"],["/2021/07/04/Review/飛雪與劍/index.html","f6fa6e2f96992bb193337f9889a4f028"],["/2021/07/09/Review/地球防衛少年/index.html","0fcaedcefdf4770da6110a2bc2290967"],["/2021/07/12/Review/Angel Beats!/index.html","044514504a89248325f9e881d2458269"],["/2021/07/13/Review/Clannad/index.html","7e075cde147bb29f5bab0769b5e8c260"],["/2021/07/15/Review/AIR/index.html","18ccb168ab47e984648ff1bd7a8adc20"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","0f490f2e30c95e637fa20ae57b860237"],["/2021/07/15/Review/螢火之森/index.html","2ca9c7be01916e9a1afc039728956f74"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","d4dfa13d495cadb2e82ed64cd0f9b929"],["/2021/07/17/Review/奇蛋物語/index.html","a6d7d02ca2db39a0faf08b1d7b9b2a0b"],["/2021/07/18/Review/Vivy/index.html","7b4569e28ebfab5f66eec63c79afb02a"],["/2021/07/18/Review/請妳消失吧/index.html","e74b10c3468f114bbd4c90bbb0098ce9"],["/2021/07/19/Review/漣漪的夜晚/index.html","f78c72db2813e986addd1a697560a104"],["/2021/07/20/Review/月色真美/index.html","85e553eae5692213c5dafecd3fdc2586"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","5b9bf21ddb1cf03819b6292bf1324748"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","748d1ab55dd52bbb4b74e9aadbaba042"],["/2021/07/22/Review/罪惡王冠/index.html","0acbe25f8a8a92fe27f7b83727869e3d"],["/2021/07/23/Review/弱角友崎同學/index.html","ed3d09e0fccb6b94e51a7e8029f5ab3d"],["/2021/07/23/Review/惡之教程/index.html","b6311097b8e9c21527782bbd6368c62f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","22a84e1c09f55b79123a1d1dfdedf0b6"],["/2021/07/25/Review/魔王勇者/index.html","3c1899baa30da7c752f8605c587efb16"],["/2021/07/27/Review/一年A班的怪物/index.html","b50d56ba996fc11aab86b221650f7b1c"],["/2021/07/27/Review/奇巧計程車/index.html","3a09325a8538f3565aa54b76cc397e03"],["/2021/07/27/Review/專情的碧池學妹/index.html","d06872d95e3d8d7174ba9eadbe9c4ad4"],["/2021/07/29/Review/只有我不存在的城市/index.html","986841836a44005c661613808627b804"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","950ed28f3601781c3d1535bdbc53ba69"],["/2021/07/30/Review/可塑性記憶/index.html","dfccc27697e49efe526847cdf4a97b73"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","0f091f84c8a8b4e188c186f68f4e4693"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","e9a7adf70b846bbbc1a5912374c539d6"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","6b85f146ccd4b86af99080b3c0a169dc"],["/2021/08/25/Review/清戀/index.html","f97bb638ffe41c4da8153bc7deb2e9a0"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","b36b759685d2e9a7b3566bbfa291cd0c"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","dedba26e8b62eae9b4871c84ab7fa5ce"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","38cea80678402160b6dbebcfb10b6419"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","9aae640755aa27aee87bc7df38bd118b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","b904fcfa98e7ddcfb89f10220638c54d"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","45b7769010b532cd74caa359ea9fbbb8"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","be8dca7c380f875faa984c31858029ca"],["/2021/10/16/Review/龍與雀斑公主/index.html","2236fe32ba1500909302f85b62bed6ab"],["/2021/10/19/Review/孤狼不想開後宮/index.html","43e986c65f73b0758e88349f5294231e"],["/2021/11/13/Review/徹夜之歌/index.html","a377789477acf3ff862e5bced5c1582b"],["/2021/11/24/Review/武煉巔峰/index.html","fc85e8d8be035913bba9297b904e0919"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","20bd6bcdcbbb53d9d58c616ce8139b68"],["/2022/01/28/Review/神醫凰后/index.html","c025dc9c858f2e9a8d408713ed51d4dc"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","8720abf949d0841092ab7e0640c8eda7"],["/2022/02/13/Review/夏日幽靈/index.html","4a39a35ec98ebbf0eda928eaf75cef17"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","6523e2ff49a92d3aab9e462e5afe2dc3"],["/2022/02/26/Review/賽馬娘/index.html","a57fc8677a6dc10324d76321c8739041"],["/2022/02/27/Review/大欺詐師/index.html","0998633927756f39c6d991ea5389bc02"],["/2022/02/28/Review/前輩有夠煩/index.html","cfd8aec764276b6988b5559286a59091"],["/2022/02/28/Review/碧藍之海/index.html","5d67e0cefa7026eb57f6d3402556bf7c"],["/2022/03/05/Review/落第騎士英雄譚/index.html","ab43eea88fedb7766c743aaff2c33d8d"],["/2022/03/06/Review/Another/index.html","e338000cd4ea0f1e356e92fca92349fa"],["/2022/03/06/Review/入間同學入魔了/index.html","278338e0484bc154e047f8afbbeb5f33"],["/2022/03/18/Review/再見宣言/index.html","de36d25d3a3d8b606a7416016f252620"],["/2022/03/23/Review/生若冬花的妳/index.html","139797423161d54e34d068d5d6ff6f28"],["/2022/03/25/Review/天之弱/index.html","8d2aa21c196b906f15f63cf4bbc3950f"],["/2022/03/31/Review/滅了天道之後轉生/index.html","5799cdfa63fdfc5e33508481a168872b"],["/2022/04/30/Review/泡泡/index.html","9987181276829a91f4843166639c4ba9"],["/2022/05/04/Programming/Dynamic Programming/index.html","05cd25bb24e9e83aa29cd87bacc1ab05"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","3a52198373a84587c056f23a617b991c"],["/2022/06/13/Review/偵探已經，死了/index.html","c2401ad15d1a2379ccd6daefd1f0cc21"],["/2022/06/14/Review/黑色子彈/index.html","3ea910ab7d133d96dc2fb196cf0b7ccc"],["/2022/06/15/Review/黑白來看守所/index.html","2d0eb2e2877636498a2dd8e0891f6569"],["/2022/06/16/Review/虛構推理/index.html","425a231fb048f5bacaa48d4414876234"],["/2022/06/17/Review/戀愛與謊言/index.html","03e3bb8297ca002fc79c621a57308dc2"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","b72f8c4e376964923ebcb8bcc79e6e88"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","076a28bfede438c53fc35e469f8a8886"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","a69e6204fb04f99465002e8ff22a517f"],["/2022/07/03/Review/Hello World/index.html","55f19d6aa32196100389c0f6fe5fab0a"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","e6d29aa9e1d250725ee1d52e09273027"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","db66b3d43cf86dc2b950acee255ed1dc"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","b70c435bb2e284e1222b1aa8b94726f6"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","0c434db44a2cc3c56d1c72d5ecc2ce69"],["/2022/07/16/Japanese/動詞分類/index.html","888079f04dbad3ad16a91cf5a4a1fadc"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","6e1d577de66a03ab5a8d7e115a36dc16"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","156c69c1d7505207ce1f9f63bef0fcc9"],["/2022/07/17/Japanese/音便/index.html","51cfa158e82f7aa7eb556296099d4336"],["/2022/07/18/Japanese/動詞 時態變化/index.html","873d87e53c4520980cb24eaa38429e1b"],["/2022/07/19/Japanese/助詞用法整理1/index.html","d6391c4df2b770e6155fd77c1abd71d6"],["/2022/07/26/Japanese/助詞用法整理2/index.html","de167991cdf052d3038b13f01c50e156"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","a934bfa047fb3cc6fe9cdf087a105892"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b9e6b4ca7564cc689cab96126720b5c5"],["/2022/07/30/Japanese/疑問詞/index.html","ce5d94caef98f8160e91db8e1bacc581"],["/2022/07/31/Japanese/助詞用法整理3/index.html","0d91bea36c58b69c789fcf350db0de42"],["/2022/08/02/Japanese/副詞整理/index.html","953731b07577800b37f6957dfd9ae35c"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","6cabd6cbb0c9d7635856638862129eb2"],["/2022/11/04/Programming/Data Structure/index.html","41f106632bb77ac7a690c9b87459fbad"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","350ee050e5fda8ece90664987a7eaae9"],["/2022/11/22/Review/組長女兒與保姆/index.html","0e984f2779b140fd0a05badd2107e8a5"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","a1e2a0927bac74f00dd99c7df33bf3ef"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","644ea3ba3606e5c7cfcf40e22da9ecc9"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","bcd1116d07d4d00e681bab5eebc995ad"],["/2023/01/01/Review/あの夏が飽和する/index.html","598bf2b0ae93b3375682e6eccb2a1fec"],["/2023/01/02/Review/孤獨搖滾/index.html","afe96b37f034eecfca108627e3db992b"],["/404.html","57388ac1a549fafb52db6984d531a90f"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","92d57968ca80abd6d6490ad7f23bcdd2"],["/archives/2019/11/index.html","7cfca4f4c6b26d167d2131cb890d4a9b"],["/archives/2019/12/index.html","f7b05eeb3343e63171c5c136f53d26f5"],["/archives/2019/index.html","507b1b97baf18712b1af61550a54f835"],["/archives/2020/01/index.html","a1a99225ce052da2d7cf444564dae675"],["/archives/2020/02/index.html","e72c91d7dd2a98edf375cfc7722b813c"],["/archives/2020/03/index.html","f7945e82fd3cc15fd3bcb1662f75ff8c"],["/archives/2020/04/index.html","26daaf495180cc2018bdb42c9fc0d5d0"],["/archives/2020/05/index.html","65443b7c7f4427d68e992908b2d5f314"],["/archives/2020/07/index.html","e611f134ed6d8c54faed6f49bdcd722f"],["/archives/2020/08/index.html","82d750fb09c7f76d07e1e1f7e3b7b3e1"],["/archives/2020/09/index.html","2b69983ea8f3003318979a27ce67cc2c"],["/archives/2020/10/index.html","ce9affc238bfb8e598383657c67b94fc"],["/archives/2020/11/index.html","96ca35f41f53619e843c25960129c7fd"],["/archives/2020/12/index.html","09e20edf9fc9a6081fba986db185c426"],["/archives/2020/index.html","b247e800ee3dc911b63a9d7999c447a0"],["/archives/2020/page/2/index.html","019fbd69e3e34beca20053c666dd37c5"],["/archives/2020/page/3/index.html","e3940aefbd91807f14601d59e491bc9a"],["/archives/2021/04/index.html","00fc2e99844fe051c573e2266e6c6c2c"],["/archives/2021/05/index.html","854ac7a9bd5c898caf8f1b26d97246ca"],["/archives/2021/06/index.html","bfa6fd87ab9261f677a22e8cf6ed4035"],["/archives/2021/06/page/2/index.html","4fb2446adeafe9fff116c373a9192439"],["/archives/2021/07/index.html","2e36de89558d556a666cf41f6e5a7f50"],["/archives/2021/07/page/2/index.html","b628aac519310180066dd602a72d336b"],["/archives/2021/07/page/3/index.html","48417230b871916c3535280c61cc6b68"],["/archives/2021/08/index.html","e63fd38c5da7680ad58ede56b0b768f4"],["/archives/2021/09/index.html","b0e42bc625774090f08ca04fd6a61402"],["/archives/2021/10/index.html","c66ae30dc2ccc47199a3ee38a8f790e4"],["/archives/2021/11/index.html","c733be9376c4f04b25ef8bfe5ab6d823"],["/archives/2021/12/index.html","2779fea3fdcbdfaa5f22b6297466cf1f"],["/archives/2021/index.html","a5e6d0a90e1028ce019fb625c789ca57"],["/archives/2021/page/2/index.html","a3dd97fa6c26a8c331ede61606570302"],["/archives/2021/page/3/index.html","e29cd1bb2f99dfd298957ecb6e9865a9"],["/archives/2021/page/4/index.html","d1717bce65aba36ad7bc895b7edbdf29"],["/archives/2021/page/5/index.html","c55a12da0d8840d823c7a728c54f2133"],["/archives/2021/page/6/index.html","02ad0b73eb717c77f87d7adc7b984df7"],["/archives/2021/page/7/index.html","d8ea2dcc9707e5f4c2494ef0f17aecfc"],["/archives/2022/01/index.html","0e173a697dd1d476950c31f4066f73f6"],["/archives/2022/02/index.html","bb19f7bea9088ba822f3714da5bf7319"],["/archives/2022/03/index.html","5f7063e920ef5390c1222ee4cde8d0f8"],["/archives/2022/04/index.html","b4192a7a3cdd2c24c2157378dc68827b"],["/archives/2022/05/index.html","634e6bfa657cfefb37ec1788fb6ad240"],["/archives/2022/06/index.html","645fadb417791189e00b58b89e208b9c"],["/archives/2022/07/index.html","b6f0ae9ab636f315110a50e66fd05b32"],["/archives/2022/07/page/2/index.html","cdc1cbaa9a7479df93f05104ea0f0337"],["/archives/2022/08/index.html","98d238d6f339e288cb2552f2fb604384"],["/archives/2022/11/index.html","d763317e4ece4a57b8e1ea79a16f895c"],["/archives/2022/12/index.html","b640e33bf8a59761f8b9e2ad2a07bc1b"],["/archives/2022/index.html","9d3077b1d625f16cd1e7a144ec1b0c1d"],["/archives/2022/page/2/index.html","451cc01d7bb8be0fb3e091c6254c0d1b"],["/archives/2022/page/3/index.html","0574644e9a0c40e976ff22b0c2163312"],["/archives/2022/page/4/index.html","70584d8447add19c59a27ea0ecb63a5d"],["/archives/2022/page/5/index.html","25858758b3bb43cd81c0895ad40ea472"],["/archives/2023/01/index.html","137e114b512f73ac11db5b50b87874ad"],["/archives/2023/index.html","7f2024f3acf10298ca4eee0f8e78c353"],["/archives/index.html","656a9701067a665381956c4208bb0545"],["/archives/page/10/index.html","c7b5b962ff912d2b9a77f47b251397d5"],["/archives/page/11/index.html","ebc66e582bbfc9b5e69a0aba122ce007"],["/archives/page/12/index.html","bcef38aaad1dedea68aa97a8ac18a0e7"],["/archives/page/13/index.html","93d6639894c1bec63e0818bfa9ec2f9a"],["/archives/page/14/index.html","ff583fb1f77f8afae05114ad3d594899"],["/archives/page/15/index.html","bd933cb1302ac238fe48d0aa53586f3a"],["/archives/page/2/index.html","85e720debc320b9b202b013469621fd6"],["/archives/page/3/index.html","c3b337da9769cd08bd308d0ca765173a"],["/archives/page/4/index.html","335cdc681c60a3a37a77818f727c92bb"],["/archives/page/5/index.html","f4c3e709fb5dc00f43e4775cb9a005df"],["/archives/page/6/index.html","8bab2665dce31bb79a6bdd1bbbad646e"],["/archives/page/7/index.html","64df137f07972e934e41b3ba564a1559"],["/archives/page/8/index.html","261f117d2014b3d35aeb3b8149774099"],["/archives/page/9/index.html","b2998bf628ef88e0d06f341d86f3121a"],["/categories/Programming/index.html","bc7d72696341b2b8287f28b2a4ace8aa"],["/categories/Review/index.html","2067648f1712a48b4e93340199434d5d"],["/categories/Review/page/10/index.html","90611219a837cd68b3ba986b5a078813"],["/categories/Review/page/11/index.html","18dde61b04da0e0349cf419a5b3d08e5"],["/categories/Review/page/12/index.html","32ddc43f4c9fdaf8e568ad1d80825929"],["/categories/Review/page/13/index.html","dde400874877f8e598fe180228e57dc4"],["/categories/Review/page/2/index.html","eeabd6539b525ee6df54979109480c03"],["/categories/Review/page/3/index.html","d76bdfcb0cc9f0d91ea78e12e6e25a28"],["/categories/Review/page/4/index.html","3da6fe79a8d93c1698576e08e7679df3"],["/categories/Review/page/5/index.html","f0213b49e57e9b23fb3b058cfdf2779a"],["/categories/Review/page/6/index.html","42738be40f9be257a3595a8d571ae567"],["/categories/Review/page/7/index.html","9f20ce679abfdee35581befe71b4f7a7"],["/categories/Review/page/8/index.html","5fde5ff2f6c5c65012a529500a3e020d"],["/categories/Review/page/9/index.html","e76bb0db8e59b44bab0ff9195e1d6a37"],["/categories/index.html","525bc9e101ce6600530ed6a2ff057eed"],["/categories/日本語/index.html","18b4eef3b0994ac27a5882415d7d37cc"],["/categories/日本語/page/2/index.html","baac059b9d4a832997c0a7f3799cb826"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0c90dd149d4320cd0597140494aff430"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","65bb611036206496f01cb8a90e5eb467"],["/page/10/index.html","9818009496110458ed2302d30752881c"],["/page/11/index.html","006b66ec433b5c1b3722886ac4d2943e"],["/page/12/index.html","d55d169914e8e6fada050f576b3b0e86"],["/page/13/index.html","d84388e6679c107d55688c24d8a6b3e2"],["/page/14/index.html","f090f43aff0718f14b6c8bf5f2c1209c"],["/page/15/index.html","eb7f25e7fc8e568c72ccfb3526038387"],["/page/2/index.html","c99015d18b46b1f00b89505d6b711150"],["/page/3/index.html","9b3c1f28a176de3154749940aab048c9"],["/page/4/index.html","249cf31eed28946afe4bc0a265ba51fe"],["/page/5/index.html","1327348cf4f2dff0784bf8b29dc4a2be"],["/page/6/index.html","09322e60a7ff63459b2cd270641f7e41"],["/page/7/index.html","4668414b2e237be0c69f5ced43d84bad"],["/page/8/index.html","75f4a4f4b3f2bb494e4e12250d7f8103"],["/page/9/index.html","12e1201e7e987a4a559df2228dd944b1"],["/sw-register.js","e506dc0241f991731deaea78d7a92f05"],["/tags/10分作品/index.html","657d5d67f94c8ea517e6d56c1134e0ab"],["/tags/3分作品/index.html","faff0a1fe4f0dc294508ad8f2aa4abe6"],["/tags/4分作品/index.html","c777284dd5525ad83ea12079ae4dbf40"],["/tags/5分作品/index.html","bcd1ae20fab9aa35bcbb2d23a2fceac9"],["/tags/6分作品/index.html","02111de07918ef52c39531f18ee0df1e"],["/tags/6分作品/page/2/index.html","ef96c2d83a02fda75593c82382f31965"],["/tags/6分作品/page/3/index.html","1e24b1073428af6e93b11da2665c4284"],["/tags/7分作品/index.html","8eb63aadb362d9ac6e3c69c49993de07"],["/tags/7分作品/page/2/index.html","ef15fd46e17f6c46327e776bbe1aef86"],["/tags/7分作品/page/3/index.html","1564140ec7074db0b250e7622fb4d62f"],["/tags/7分作品/page/4/index.html","18d147794f54a7f92dbc7f44ea1c72fb"],["/tags/8分作品/index.html","dac6168b0139be858182fb68351fa2c3"],["/tags/8分作品/page/2/index.html","f3f50071df327719feb9fadd8f5413fe"],["/tags/8分作品/page/3/index.html","4b1826ab53abccde022b3ebd20e0e5ab"],["/tags/8分作品/page/4/index.html","49fce4a1a2828caa022f1ca576c46ebf"],["/tags/8分作品/page/5/index.html","461b75878edd33a4f42f87314929782a"],["/tags/9分作品/index.html","a1935251b7533c6c4dcda00c5a13469e"],["/tags/N5難度/index.html","8dfc73ec84973b980aaa4430c4f0aaf5"],["/tags/N5難度/page/2/index.html","09b50e048b9adfcf7effb39b593741c2"],["/tags/index.html","fad35e3223f8f67db4c8f99e708ae23f"],["/tags/アボガド６/index.html","b26cd489a5097235e84002c872b1ae7f"],["/tags/三秋縋/index.html","68a42ee25475ea18654e570858032eff"],["/tags/中國武俠/index.html","cf7b1e1a71fd1d24fc6f09ba5dd5351b"],["/tags/中國言情/index.html","0cf9e3b435e1a174e375e0df44b3f4a7"],["/tags/二宮敦人/index.html","9bd39dfdff019beb844c20ac5a4eb626"],["/tags/人性/index.html","53ef7f0c50362cfc68a1446c92c37fa1"],["/tags/人際/index.html","70b6e69d87794a7da4ae1ea9820c0426"],["/tags/住野夜/index.html","3604f1fc54ff8cf6d5a959d7d2e84689"],["/tags/佐野徹夜/index.html","cc9db35fe563c653d23789c7c8ebcb9b"],["/tags/努力/index.html","5268d1f0c3d5911a04036a5e4f601307"],["/tags/動畫/index.html","957516fe9c52f556c7ed72819490b521"],["/tags/動畫/page/2/index.html","e964f225ef23aae2c56b64b2931481a4"],["/tags/動畫/page/3/index.html","10bf29e69382040aa3ec5aaee400f174"],["/tags/動畫/page/4/index.html","f86b152fcb7b833c1d0188b35d4e121d"],["/tags/原諒/index.html","c0c6abccbaf0731b1d09ab156c61645b"],["/tags/反烏托邦/index.html","e3f217bfdaca1076ebb7f17168608f21"],["/tags/啞鳴/index.html","7c0dfbdcaae185f109fce4e91732508a"],["/tags/喜劇/index.html","9a64f6b3e90e3e585f69adfd19615705"],["/tags/夢想/index.html","202995da9b6dda574688b1b1187de46b"],["/tags/天澤夏月/index.html","773051ec88a37e5b46865fe7abf09084"],["/tags/學習/index.html","600124a554d20e15ce8d8cc134d602a7"],["/tags/學習/page/2/index.html","530ff9efe7a32b8619827d0208f67350"],["/tags/宮崎駿/index.html","2f2f9ef6a40a7cc80a67a224bc633323"],["/tags/小說/index.html","7ef4f4f073b5abfb9289c30cbdfd11df"],["/tags/小說/page/2/index.html","a35864af23bd3f5ba8451dfd4368d830"],["/tags/小說/page/3/index.html","f963e94a49499bfc222ff74c41e07d1d"],["/tags/小說/page/4/index.html","7132f9c31c80da730b3b1e7ba45b207e"],["/tags/小說/page/5/index.html","87c1956476b107da0950a0140caa95d3"],["/tags/小說/page/6/index.html","df9d360be603bc303a8e14d82ce1a3ec"],["/tags/小說/page/7/index.html","03df2ab49872952687de2c2d626a743e"],["/tags/平淡生活/index.html","e23a1415e15a7160410a7a809c8bd50f"],["/tags/幸福/index.html","f2e7605a8780bf227bdca7a1271dd7b2"],["/tags/志茂文彥/index.html","88f0740bd7d04af78ddb604e13d1f6f5"],["/tags/愛情/index.html","b808315b1a14a8f88fa7d2daa0d71b1d"],["/tags/愛情/page/2/index.html","49fe2edf652af51d5f15087719d9fa85"],["/tags/愛情/page/3/index.html","6431df613ad2d3b54af2cac41350ede6"],["/tags/感動/index.html","fec1b2792480306131b02d4ff3cfd502"],["/tags/懸疑/index.html","5189c6a1d15d9570d1a4868269cef6c3"],["/tags/懸疑科幻/index.html","4ae778e75140ca1bc28b1cbfe2ebed8b"],["/tags/戀愛/index.html","7ab58e0b36ea807f69623db3bf1e8459"],["/tags/成長/index.html","79bce87f4dc0afbd8a48ee2a8d4bc567"],["/tags/成長/page/2/index.html","fe836d8a4554c42c82a0e29c7a6daf30"],["/tags/戰爭/index.html","012e1ee34dffb6b71a54f42ba7c3b5ed"],["/tags/推理/index.html","01da6a305c789b31abe3d8f5fd2661c9"],["/tags/搞笑/index.html","cc1d77200f5a112df7ab7de2790b33cd"],["/tags/救贖/index.html","0ab36515e582b1a33a1d0075a4416981"],["/tags/斜線堂有紀/index.html","2478ad0b8d49e6eecf4e0d52193c4a2a"],["/tags/日常/index.html","480e119e309a66061898f213aed224c2"],["/tags/末日/index.html","a91484158cec4fa20874546304904d1b"],["/tags/校園/index.html","a926877ea0208959877731e7646310a0"],["/tags/武俠/index.html","7130722cfa417ee39714dc224e9a97cb"],["/tags/武俠言情/index.html","6ac8b4e64a9827fbfb1524bb78d80432"],["/tags/漫畫/index.html","d028f3ebd9e3d077168d1f84a64d33da"],["/tags/生命/index.html","356073cdf127450dc8e6ab9cc8e15789"],["/tags/生命/page/2/index.html","71a3edca5703d8ef8007eaaeb4e07e78"],["/tags/短篇/index.html","0d4215cfd74f27d90e0c593b42b32baa"],["/tags/社會/index.html","5395263e075c7d174956c0c0db2c16fd"],["/tags/科幻/index.html","e3107e21013dc8e773a1f4816a1ec058"],["/tags/童話/index.html","8a07be6b78a6ca2f7bf7cd1131310ee2"],["/tags/競爭/index.html","adf080eeac7f5f6fb71d73830b65c2e3"],["/tags/自我/index.html","0f00d25cf8f2846ac5db140f86c82123"],["/tags/自我認知/index.html","8f3f5e1af2db841f11ea7e956ef855ba"],["/tags/葦舟ナツ/index.html","8f237296508022e7ff6b81cc362e62f2"],["/tags/藤萬留/index.html","a8495f7c4e40d8d5aa7ef2c6ad57ca7c"],["/tags/親情/index.html","374f34d14079ce3686b79af099203536"],["/tags/雜項/index.html","683b5f6ff101c7c0c269ce92a96c8b40"],["/tags/電影/index.html","aa7140f754278ba6d915e1b518b1a493"],["/tags/電影/page/2/index.html","d904e813c88864f97a3918ea365335d0"],["/tags/霸凌/index.html","1e5bd548c291a0862a541a385c00cfb0"],["/tags/青春/index.html","b9036cc88de7fa4970f0d07045939a25"]];
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
