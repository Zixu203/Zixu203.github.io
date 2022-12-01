/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","08c31815ea6633fb74ab307e83d99e6b"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","dab22efe287db3a4828dd40df2ba3042"],["/2019/12/25/Review/無法計算的青春/index.html","9f1075766cd5a1776f3e034e4e7c7eef"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","b1eeac2b623abdacd5f55e17a8888168"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","beb61880372a3b3529691c822c844fd7"],["/2020/01/19/Review/下雨天，不上學/index.html","08694c2f6560b84439a6969517b025de"],["/2020/01/26/Review/三日間的幸福/index.html","df557890f3dd7174f4165bb3c53bb628"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","997b22b8c276c63516665e0c81dfacb1"],["/2020/02/09/Review/青春期超感應/index.html","aacbdf4aef6051fb58dea9e378bdc549"],["/2020/02/15/Review/又做了，相同的夢/index.html","22898d8df37adb4665ef2e1cacaa6a5c"],["/2020/02/22/Review/回憶當鋪/index.html","f2dc21f4ede3159464d5949ae548f21d"],["/2020/03/22/Review/不適合自殺的季節/index.html","6e1ac2a715893e9dbd9bf70c8ef28236"],["/2020/04/26/Review/我們都無法成為大人/index.html","e3f40f94b547ae575ec1e012eb4bdb3e"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","bc9f3ad61d6fdee19d2ecbb22362a8d3"],["/2020/05/17/Review/人間失格/index.html","3a28b96239d3125eb43bfdb800aa51aa"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","aa5ff4687e4c565ef031b0ec15f50a8d"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","11d396c0656bdf38a18bdc16b7c480bd"],["/2020/08/01/Review/銀河鐵道之夜/index.html","4599d52b1e7840b3c19307c721811c5e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","bdccce8ad2e1d594c0f224b6d255d9f2"],["/2020/08/16/Review/15歲的恐怖分子/index.html","765ce103240096dafaf8f47bd5e91af8"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","82d61b9ba00189940e561513c1b93615"],["/2020/09/13/Review/羅生門/index.html","90c9aebd36df7c1a0b49713ed656aecb"],["/2020/09/20/Review/闇夜的怪物/index.html","f884ca8fac276810a4e1719f0e4dac66"],["/2020/09/27/Review/14歲，明日的課表/index.html","e990a5ef41de1756734519dcd569f160"],["/2020/10/04/Review/致十年後的你/index.html","09fc84928a7af8ecfd7d72492e18c409"],["/2020/11/08/Review/滅絕之園/index.html","eebd6a975b20e7287c224604c9a5faa8"],["/2020/11/15/Review/將愛拒於門外/index.html","be19c7a1059ac6df8f85c84eab97a458"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","491b14e664461e9fcb13851e47958f37"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","e4910c4634313e7cac2d656d1f12391f"],["/2021/04/22/Review/道印/index.html","03588b96be7de2622fd9cbca3e3fbf4c"],["/2021/05/03/Review/戀入膏肓/index.html","4afa5f001aed20355c84ba392864aeea"],["/2021/05/10/Review/Dice/index.html","88f826c447e763de5c9c280db1453faa"],["/2021/05/15/Review/魔女之旅/index.html","8fddfd434704d1c5797d5754dbaa5078"],["/2021/05/28/Review/戀愛寄生蟲/index.html","5fa8e2294743566e76868e24fb829c21"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","45666b2d621d54521c8c0dbb4c0993cd"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","731ff3a30d6b5bc8772bbdd1bff0cd14"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","ceb3354db1d718444f83fcbb46571262"],["/2021/06/05/Review/流浪的月/index.html","77f88d7cb7cec44fa63db7c0a5eaf944"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","00fbbf3c96af1be3289547e3c5b19346"],["/2021/06/13/Review/第一人稱單數/index.html","44eaa79aebb08acb387d9cc24b96902a"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","bedd9cf296fcd159dbe09e1a3b35ed91"],["/2021/06/16/Review/願你幸福/index.html","1a6ef256c51b4fa8c5a071326522fd99"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","b4c0e5e1a55276dca8c9a61c18e0d338"],["/2021/06/21/Review/神隱少女/index.html","82ff8a7b0c94e5f899bd08f54104fb32"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","d9a1040348012751285b1f71f9764836"],["/2021/06/23/Review/天空之城/index.html","f343b0c8fed2bbeb15be40510e496133"],["/2021/06/24/Review/魔女宅急便/index.html","e03b0353fbcd245d5167f5b6c28d57bb"],["/2021/06/25/Review/借物少女艾利緹/index.html","32f6c555c2dfb4030c3323cadc5779b8"],["/2021/06/26/Review/魔法公主/index.html","f88149563abce910e63e9290608931fb"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","674110bbeba562dea72326941d054113"],["/2021/07/04/Review/飛雪與劍/index.html","69f2306ea9ad4154db66c46f0780d71e"],["/2021/07/09/Review/地球防衛少年/index.html","74e5bfeab25939f5a792b4517d0cfff5"],["/2021/07/12/Review/Angel Beats!/index.html","b5608080aa81987360e3f2f0947ef142"],["/2021/07/13/Review/Clannad/index.html","b6d7cb079f4733fb5b0a5ac2873365fb"],["/2021/07/15/Review/AIR/index.html","8e13aff55c5fede87e889feeff37679b"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","f43c26d2095d0d5e2a5feba767fac11e"],["/2021/07/15/Review/螢火之森/index.html","41f5b101ae00d7eed5eb3fa9513d10bc"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","09fe62be6e9e8538a52f997bfc991817"],["/2021/07/17/Review/奇蛋物語/index.html","7e5903756de2eab3aed03605ccca9ca8"],["/2021/07/18/Review/Vivy/index.html","02d298e7f440582df3acf93bd2341676"],["/2021/07/18/Review/請妳消失吧/index.html","f3c2c7b6c3f0bb2983360d807b487cf9"],["/2021/07/19/Review/漣漪的夜晚/index.html","165bf180b761fe20230af696c8a31620"],["/2021/07/20/Review/月色真美/index.html","3889655840071ae331d1af453757aeea"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","1c15c6b10bd5de8ea300a40e6ef6a22c"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","8b68a720101fb5d0c7a465bd8348c2d9"],["/2021/07/22/Review/罪惡王冠/index.html","581140609f860bcc835f76712b2d8f7f"],["/2021/07/23/Review/弱角友崎同學/index.html","2298ec0e2955426dfe943d4327131cd6"],["/2021/07/23/Review/惡之教程/index.html","3f23c07e1f918d7a3166052b6ba3be3d"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","f2271af199df41d7b0a2e9aaceabdc62"],["/2021/07/25/Review/魔王勇者/index.html","bd684deacb7a28a3546f5d4e96a362b1"],["/2021/07/27/Review/一年A班的怪物/index.html","d0570d97ac602bfbc7627a3af78c8cd7"],["/2021/07/27/Review/奇巧計程車/index.html","1634da3efe044d2b35ef14ccdc1a648a"],["/2021/07/27/Review/專情的碧池學妹/index.html","338db9e5af80f1edb7b5080a260f5ae0"],["/2021/07/29/Review/只有我不存在的城市/index.html","d83a5335d0e53ed5e4ac9f07d74127b3"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","a95a661dc31a6d9a1025b9cf546d504d"],["/2021/07/30/Review/可塑性記憶/index.html","c39ee0ce7c7a611b01f3ff262cc714ee"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","42230eb207dc2b58a177490014aae259"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","54ede398ac0257d738709b7b4e902745"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","af92f8f050801292272721f6f3fecda7"],["/2021/08/25/Review/清戀/index.html","5c24ffa8b7dc5c09f39f47b39e55c036"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","ded82533455cf3f4859be3b80fb5f0d7"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","b81dae62912bcaf23f6a1eafbdb82e95"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","137ee81324efa237c532f2df56cd751a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","7a3531b0e7f516ef0529003b349847d7"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","f06daa3fb2a5f3338428e5f07849777d"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","fdb9a83dc7501f9d0533f0200b8b85ab"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","55903365a41a2012d5d637f2abd7e247"],["/2021/10/16/Review/龍與雀斑公主/index.html","2d676fd08b9b125ddcb2d4764bfde88d"],["/2021/10/19/Review/孤狼不想開後宮/index.html","105a3fa000257fd85170cd829848133d"],["/2021/11/13/Review/徹夜之歌/index.html","e35eb65a1c6a1ec40a8c43e027a3439e"],["/2021/11/24/Review/武煉巔峰/index.html","cf5ca493fe569d97ed367e79f987752c"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","6b3c555c85bfe6a1e9b54070f6371c9f"],["/2022/01/28/Review/神醫凰后/index.html","4a32e106963e990d43888aaf7107ea2e"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","ccf89fecb0af5aa743b818af139d9860"],["/2022/02/13/Review/夏日幽靈/index.html","4eb22c8cff153421710803babd3b09bc"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","37ff7df9fdd740973377c97b050f223a"],["/2022/02/26/Review/賽馬娘/index.html","8038ef65978f57d8c8c8a139dee36677"],["/2022/02/27/Review/大欺詐師/index.html","82e22a97d2cdf348cfa6eb6260af4bb5"],["/2022/02/28/Review/前輩有夠煩/index.html","5bfddffdf8babc0742303e5fabc0e9b4"],["/2022/02/28/Review/碧藍之海/index.html","6d4ce24e26c0d8e2070507c7b6259fec"],["/2022/03/05/Review/落第騎士英雄譚/index.html","23a75c21eb9d5bf0bdfdddc09c860e25"],["/2022/03/06/Review/Another/index.html","2c7d643e68d61f38f6d3473f14ff92bb"],["/2022/03/06/Review/入間同學入魔了/index.html","03baa05b8b634ea3dbc05583dd80b75c"],["/2022/03/18/Review/再見宣言/index.html","6bd7555c4a536da53e829bfb4ffb5770"],["/2022/03/23/Review/生若冬花的妳/index.html","99de7e9e3455ff96f5dfb857def059ea"],["/2022/03/25/Review/天之弱/index.html","a098440f6cb4b0475aa51b15b4f17b94"],["/2022/03/31/Review/滅了天道之後轉生/index.html","a6766d6fed8de94300c02a70c5b3ba5d"],["/2022/04/30/Review/泡泡/index.html","0fd64225986fd6eae9d1d1721e8ca1a0"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","f51d9b10e1d32a6c9347130a673fe150"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","6d29dd1520406ed66613b911819629c8"],["/2022/06/13/Review/偵探已經，死了/index.html","fc3c998d22066ebad5fc60d1bac51bf1"],["/2022/06/14/Review/黑色子彈/index.html","84e5b366867bae1825885009425af7ad"],["/2022/06/15/Review/黑白來看守所/index.html","c80595f9f26d483c413608fdc7c23c80"],["/2022/06/16/Review/虛構推理/index.html","0a8e088e3d9b10f243d8f2df18b70a2c"],["/2022/06/17/Review/戀愛與謊言/index.html","4d0365d2ee89182e803459a002976ad8"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","7ab9ffbaf9b7f27e6d749f871748e239"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","51c2240d96260163fef55e1518f31ceb"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","3e30a3e84556f0503cf0fbdd1615df1e"],["/2022/07/03/Review/Hello World/index.html","b2c5e0f0c316a4ba7382edbf1012cd40"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","2fcd9f134edc7d4c84169fd0d703def0"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","e55ac333929b489a83f29eb79fffd01e"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","34db1a8b7be03388d893c9d3c8604e50"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","20b0e08543b883623d4da216230f5411"],["/2022/07/16/Japanese/動詞分類/index.html","71f8b778b6ffc74c2073e4e5ae9da65d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","d2453432e74d816faaa023cb032a45a0"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","c17816bebbcd947d245f8967bb95d0c0"],["/2022/07/17/Japanese/音便/index.html","d0a3c0252806bda7aec7165e5661e5f3"],["/2022/07/18/Japanese/動詞 時態變化/index.html","f6a58835e811b20b51e032bab5bcb88e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","76396e0b372b8835ad1f90224850691b"],["/2022/07/26/Japanese/助詞用法整理2/index.html","405e106d5887b5fea972348b0aa562cb"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","93a1527ee080bb90e15394e4d8cfc473"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","149b0af529eec64775cdfe7662908ea7"],["/2022/07/30/Japanese/疑問詞/index.html","24cb0c6e21891aac903c769b97e71b52"],["/2022/07/31/Japanese/助詞用法整理3/index.html","685733fa94a0cfab858e3ebe8f040ce8"],["/2022/08/02/Japanese/副詞整理/index.html","bd9f9e989318c60a956aad493dae16fc"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","7225a0fdc2ba8214524f1947c4ec6636"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","9c6f3a1ae291fc704c34532572a15a68"],["/2022/11/22/Review/組長女兒與保姆/index.html","9d74da75a900ec977502c15172f66d74"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","3ba2381a5da400f5d3013e553f0a24ae"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","883052edf28b54eccc85c9a585f97502"],["/404.html","37d062c33fca0585dcdab38150534f8e"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f1e3b0beaf83e41f0e1a445ebac58bf6"],["/archives/2019/11/index.html","c5ffab0fd8ae4fb5fa2a452d1bab86b4"],["/archives/2019/12/index.html","3c7ae482795c85c6e2be3bafdc2cc2ef"],["/archives/2019/index.html","d03a3afb9e916171a89f8ddc3464004d"],["/archives/2020/01/index.html","40ae390035560b0e95cf24a1962f1fd0"],["/archives/2020/02/index.html","3f03c466858248569d3248725de3cc20"],["/archives/2020/03/index.html","ab25a00f3be2f2e7d8eee285ddc5d9e8"],["/archives/2020/04/index.html","9fbca964ea5b50c0b9f0a1901b4e2bc9"],["/archives/2020/05/index.html","2e766b2a0a45f9d5b6d7e2f04d953a6b"],["/archives/2020/07/index.html","56958781b7739879a22dda161940d39e"],["/archives/2020/08/index.html","6da56024de398bbca2e1fdb10a1da2ed"],["/archives/2020/09/index.html","d8f106cbd1b214819bd6ef59f58fe70e"],["/archives/2020/10/index.html","8841c65de07c36d3e34035cfd1422ba9"],["/archives/2020/11/index.html","e763c721918b445c374f299b0da2f9f1"],["/archives/2020/12/index.html","ad65fce90a471205d946134ec7bc353c"],["/archives/2020/index.html","13bd03bf771b6b2ac1428287c0875722"],["/archives/2020/page/2/index.html","205a0cbad452d6a74e2c7b1d9b53760f"],["/archives/2020/page/3/index.html","9a90ce6db6cb09287d5fc63c9f127557"],["/archives/2021/04/index.html","8681a530d1ff976c710c4c0d11800e0e"],["/archives/2021/05/index.html","4661361068c16c5d4839d95bc42b4a78"],["/archives/2021/06/index.html","e2735424a6a7b824f059285073e8c518"],["/archives/2021/06/page/2/index.html","b9d69b77ae618417ad625730aea25f2a"],["/archives/2021/07/index.html","e44d4916b9850bc8d7a5bafa17ebd2ff"],["/archives/2021/07/page/2/index.html","6bd7ab8a24cc75f98cac82246ae64071"],["/archives/2021/07/page/3/index.html","2307797805a6ba3b9fb69c20b3218482"],["/archives/2021/08/index.html","d7276a84b03e84c5dc40474e9a748425"],["/archives/2021/09/index.html","b120cf425c42dde3989b984d44a2a857"],["/archives/2021/10/index.html","dec76a7d44c00576bfa51ba2ab3fc1d4"],["/archives/2021/11/index.html","9e88369b13d9aa4ccd69326a17ae6508"],["/archives/2021/12/index.html","7b84bbd54ff25cc96ba698ade49f35cb"],["/archives/2021/index.html","cd6e03e6a3847ec878eed035b15bc80c"],["/archives/2021/page/2/index.html","582733c1359ad4a147ffa9963dae29b4"],["/archives/2021/page/3/index.html","29a6c37ae823df7418e504e39697d9ee"],["/archives/2021/page/4/index.html","b4b6b6283708cbde5370874101ea1229"],["/archives/2021/page/5/index.html","c3182db8a55e161336407612fd9263c9"],["/archives/2021/page/6/index.html","c2bfbdf08145343ad29bfe1ee8b650e6"],["/archives/2021/page/7/index.html","622d7c4a81f51b8b4c231d96c8fa0435"],["/archives/2022/01/index.html","b0fe00eed5f627fca9629a3368d5d290"],["/archives/2022/02/index.html","eb0097afd351d313b78020a1a0973014"],["/archives/2022/03/index.html","f012a408e8322d897f7aae5fcc30831f"],["/archives/2022/04/index.html","e11080a27ffc220f34d6a36e4e135f27"],["/archives/2022/05/index.html","c9bf6038658aef8869739fe7fbec0aff"],["/archives/2022/06/index.html","b1add71241bb88549fd550917c841c64"],["/archives/2022/07/index.html","eb7925be2522494636c10d6651cde26f"],["/archives/2022/07/page/2/index.html","ae6b89af0abaf6b8f7dba23acf4f2ede"],["/archives/2022/08/index.html","a2e623a4175cb5715a3e131b21d6a108"],["/archives/2022/11/index.html","28ed43f1c956864c27629ef8b4b2ffab"],["/archives/2022/index.html","b9a344959a9d41f2061f6e1620f9731a"],["/archives/2022/page/2/index.html","61bf5e717925a44740433406231fc902"],["/archives/2022/page/3/index.html","46b4090840de88f9d4771fe7daacd95e"],["/archives/2022/page/4/index.html","0cb1e355c2ed67882ac4ad013d8154ac"],["/archives/2022/page/5/index.html","071ead84d4b8b17e4457bdf8cdf2b77e"],["/archives/index.html","243e2299818e0e26b65682f71cbe0728"],["/archives/page/10/index.html","17b22c2b5f7d8978305e2e84a4949b8e"],["/archives/page/11/index.html","47fc79bd3db9522d89afc5fbc808fc77"],["/archives/page/12/index.html","28bf6b63dcf26f946c61aefac0dcebc5"],["/archives/page/13/index.html","bad81bc0a1e87e53d20cc9259effca3e"],["/archives/page/14/index.html","2926dbafc8e3e43eb285bdae73e9ff4c"],["/archives/page/2/index.html","f16532f25db1776eca9c483e31d5a451"],["/archives/page/3/index.html","338be6c9de21bdfb7376c26ada6e6dec"],["/archives/page/4/index.html","c8d46c338cbfc45ca39f3ff84b7c3422"],["/archives/page/5/index.html","b50ecf1484973c4ed5f62c1c091c42f8"],["/archives/page/6/index.html","70df673cc705c2b8c5dcff0bcfb62975"],["/archives/page/7/index.html","a6c6d6306b4715f46016dbad7f6e87b5"],["/archives/page/8/index.html","7623550112bb38823940b0a1f32f9766"],["/archives/page/9/index.html","25fa86b0ce2e24093358111441771dad"],["/categories/Algorithm/index.html","30c8f414fd395daabe010c051c6002dd"],["/categories/Review/index.html","5e2cceb650b85c6dd1466fd81ff1fedc"],["/categories/Review/page/10/index.html","3466f8d1c18370508e2646453067dc3f"],["/categories/Review/page/11/index.html","1d527c42a2e3937f725b6b32d660fd75"],["/categories/Review/page/12/index.html","40d9574732f1c143d46dcdc1047870c8"],["/categories/Review/page/13/index.html","533715c9bb97f355047dc13d917af4da"],["/categories/Review/page/2/index.html","a5572f197f3c303328aa92d3de553b2e"],["/categories/Review/page/3/index.html","9db59a2f60f244f1f8f282247d5c5e6d"],["/categories/Review/page/4/index.html","a172c5cce3b43b3b24f5a68e890bf21a"],["/categories/Review/page/5/index.html","1a4f363dee7e37243c221990c6cf2a17"],["/categories/Review/page/6/index.html","f873cf1fabaccf224e6683bf2e4b5d42"],["/categories/Review/page/7/index.html","ac8c3220004aa72a5f8b3917ecbae78a"],["/categories/Review/page/8/index.html","f2c2d00889cc00372d6eb60a170e2e9f"],["/categories/Review/page/9/index.html","81a59dd5235dc97476cbcc497dd9c6be"],["/categories/index.html","7e4b089d832414f5dad7e1c13c0828d2"],["/categories/日本語/index.html","c1e7f074bbc2db1259ce075dc805248b"],["/categories/日本語/page/2/index.html","5db4dda1bafac384b4d8ecc5c72ca0a1"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b6ed555a0f96992c61980e1e2be98a93"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","bf94383b6d0f2d755ef8f47a224ca24f"],["/page/10/index.html","475cdece83ee04963e579b3e14be63bd"],["/page/11/index.html","6f1503fe12ff6b2a4bc2c1ac65d23729"],["/page/12/index.html","f3d1d9f15587f99d681d6d904d56f729"],["/page/13/index.html","4be904c60af12ae69c401029de3a0645"],["/page/14/index.html","ab0cd4ea7aebe10c32df7fe98534a716"],["/page/2/index.html","931f213c3ed9443428017d974892a2da"],["/page/3/index.html","49686db0fd20e3a29a5aa2eeeea97504"],["/page/4/index.html","905c01587802591faf0ee138bc62334d"],["/page/5/index.html","e43a41e421d2086ac1b185dd23875adc"],["/page/6/index.html","010017d535257d2cb8c34a9886053690"],["/page/7/index.html","db04c4914e41f50edf81c2344bb2ee17"],["/page/8/index.html","8684389c201cf086d5c2103b46ea912b"],["/page/9/index.html","940492cad350d1fdf8658cd57cda1c2c"],["/sw-register.js","5a5fe4f5f8c2ca49e2327cb475fd8bec"],["/tags/10分作品/index.html","5b5f9083696cafc01050ed80d7ce4338"],["/tags/3分作品/index.html","d041028ae3a70596fe7945e5e0718f0e"],["/tags/4分作品/index.html","34af268a7caea59d66ff50af1e3eabb6"],["/tags/5分作品/index.html","59cf616367ae66e094fc232a978cee95"],["/tags/6分作品/index.html","90e0f33e85bbf7ee83431fb21f57e190"],["/tags/6分作品/page/2/index.html","5f41e3423104f48063eb786c541fc49a"],["/tags/6分作品/page/3/index.html","0126700d874e40cc69f1fe709cab0bf6"],["/tags/7分作品/index.html","77f16b6793e96ea8993aa892e6e7ae01"],["/tags/7分作品/page/2/index.html","1242bddd676070a4f949b20ebde97de5"],["/tags/7分作品/page/3/index.html","10ce891aaa8e7992e5930e094424c59a"],["/tags/7分作品/page/4/index.html","82b8b6f947d3b8ab04ac4ec565675904"],["/tags/8分作品/index.html","f4c768d7024def01a80ce486aea29e98"],["/tags/8分作品/page/2/index.html","86ea029c90b3fefe92809bb28847b53b"],["/tags/8分作品/page/3/index.html","b23a4f1d1213f3135e049b4af4537a4b"],["/tags/8分作品/page/4/index.html","fe6cdb9623b6407b8496bb1f7d219a4a"],["/tags/8分作品/page/5/index.html","888e9a65f63aef4d85f0e39d49486100"],["/tags/9分作品/index.html","368b917d1bbdab8ca034ad1b8d920ec4"],["/tags/index.html","aa2a892b8047187ac601bff889b370d7"],["/tags/アボガド６/index.html","1c32d6936db9b54e5c64899913a594a0"],["/tags/三秋縋/index.html","692efa42b42488049ecd2aa3def09aff"],["/tags/二宮敦人/index.html","7d94f73ff679efeddabf101edd1e474c"],["/tags/住野夜/index.html","b5b09718108ee75a328b5a4d606bb0a5"],["/tags/佐野徹夜/index.html","4393d0bb99188ef7c7c5307a1b50631d"],["/tags/動畫/index.html","ec2fcd0186927e55b9ed62b433efd0f0"],["/tags/動畫/page/2/index.html","6af4069934b89d47a414486df279c1bc"],["/tags/動畫/page/3/index.html","2541cabd2decb416d4cbddb6cb4c5bb2"],["/tags/動畫/page/4/index.html","a53cee037ef7c1568c5164f2d5780c45"],["/tags/啞鳴/index.html","60a61ad25cf4a007272fa57dbbce7542"],["/tags/天澤夏月/index.html","4bdd70dcfaf2617b9840b8ed6e3a4242"],["/tags/學習/index.html","d7d37bb984dc30767dafbb909eb3770e"],["/tags/學習/page/2/index.html","0b7a41ee3c43fd061d75e71c7d595c10"],["/tags/宮崎駿/index.html","4bc532d1d4928e7b79bd2b272a29092b"],["/tags/小說/index.html","b9117d96478b4b0e58c7068e62218a85"],["/tags/小說/page/2/index.html","27f9319c9273d3f067d5b3b61765e398"],["/tags/小說/page/3/index.html","3b2ed89b232f045f8b37c4ac3d43af03"],["/tags/小說/page/4/index.html","1acac39443c6e2ee205f2cd573282fc2"],["/tags/小說/page/5/index.html","7f1b08277377e262f10afd5a34f64ed1"],["/tags/小說/page/6/index.html","9101e01ecc689dac58ba6dd689061b14"],["/tags/小說/page/7/index.html","b34e81035391e9bd04906a3bf6a455a5"],["/tags/志茂文彥/index.html","3304f2ce2af6449f51479a874d42c3d8"],["/tags/斜線堂有紀/index.html","e3bdf7adcf8e51951377529074d4ca73"],["/tags/漫畫/index.html","b07c220651410d28d347d483f76a7bcc"],["/tags/葦舟ナツ/index.html","86e7e56d27d2a018f0968b2835a99c34"],["/tags/藤萬留/index.html","c509c5d308d78e427782acc707dd0d45"],["/tags/電影/index.html","7c9fcfb65f4407affb0159a2f4c6a07b"],["/tags/電影/page/2/index.html","a50a3074fe0b37e324d5a797805dd6ee"]];
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
