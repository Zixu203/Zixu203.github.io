/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","d990e899865abf42553ebd8b085cea5b"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","adbcd718e6d03196f8f1fd33ae802780"],["/2019/12/25/Review/無法計算的青春/index.html","7a7c9c6eb4bfebc3eae3438675d65af1"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","0452680e6b91a11b486635c17c30e274"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","f61b878307107bdb81063f91d43b1d10"],["/2020/01/19/Review/下雨天，不上學/index.html","3dd897b1156275738ee7f01323c99656"],["/2020/01/26/Review/三日間的幸福/index.html","e3a2a764b46f2264ba9da2501af42adb"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","1ec9dbaf4a44c3a569d42d1a3c72b372"],["/2020/02/09/Review/青春期超感應/index.html","60cced6fdbe3da9b1e844f033f45b28c"],["/2020/02/15/Review/又做了，相同的夢/index.html","611b9f375422efc2975552b6a4f0993a"],["/2020/02/22/Review/回憶當鋪/index.html","2ff94c11fbaf2af8a4883410dbf9312f"],["/2020/03/22/Review/不適合自殺的季節/index.html","6253df8c9b70acc42be0844de1ee75bb"],["/2020/04/26/Review/我們都無法成為大人/index.html","08d329733ce4a64ff6eb07327952c4b5"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","90d954d6e107e3ba1332ae431b3e12ea"],["/2020/05/17/Review/人間失格/index.html","07ad083a3a7b3737aa9134c046fa6d5b"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","d0c298ef6779b1ca538f6c16eaa6a938"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","49e02db6ce9452b1214a14dd08c68060"],["/2020/08/01/Review/銀河鐵道之夜/index.html","ff0f2d3747af26f68e66e94d375aeebf"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","e3278ba75282e831379b0fb37d6dfb9b"],["/2020/08/16/Review/15歲的恐怖分子/index.html","c16013f1c11d006086c4208293085deb"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","9256e1a81be1e4bc1329499a3a9c32a0"],["/2020/09/13/Review/羅生門/index.html","9fbe1ed6cb33f6fd5d912759ba5257b2"],["/2020/09/20/Review/闇夜的怪物/index.html","0cbfb4eea989f4aa5e55c5eaaae7e197"],["/2020/09/27/Review/14歲，明日的課表/index.html","457515d03caaa5cf1b2be1e6c52bb5d5"],["/2020/10/04/Review/致十年後的你/index.html","18f3391c93206bb0f931aba7b7b92422"],["/2020/11/08/Review/滅絕之園/index.html","9e5a400d514de7c947e6f36b1a564458"],["/2020/11/15/Review/將愛拒於門外/index.html","9a3522c785676d4e4e3ab06c39c5d58a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","2c6e9315d9e00ab1de6902237e3a2f40"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","3b5eaf2c72c9ae60c6733366607eedd8"],["/2021/04/22/Review/道印/index.html","8440faa15b3c86133b90bfa469bd18d2"],["/2021/05/03/Review/戀入膏肓/index.html","88bd3246b2530c17f70984815060ba0e"],["/2021/05/10/Review/Dice/index.html","bbad8a3e6d362db99c327300137fe850"],["/2021/05/15/Review/魔女之旅/index.html","e8502255be40aeaa803b7a2d32d43aea"],["/2021/05/28/Review/戀愛寄生蟲/index.html","abf4968bf6f5693e6e5c1bd59811400f"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","3cde79498c6b3a423d41e428b6b1cc2f"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","1d5931632221cc0411d172f40852d310"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","0e544d0d0cb2fb1e95692d682e8f6209"],["/2021/06/05/Review/流浪的月/index.html","c151e1fce809d0ee3cd3909667736309"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","0f9609208c60f8998717df66dcc3696b"],["/2021/06/13/Review/第一人稱單數/index.html","a14713b768a9b6f539c046bf94a40623"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","0d110c3600edc19aa53ded549874c0c0"],["/2021/06/16/Review/願你幸福/index.html","a1f26b3e8d36e6eb23dc8e7a536517e3"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","84421bf79995409663cfbad08b08c3f9"],["/2021/06/21/Review/神隱少女/index.html","650270517b47f65d37e6b8c28ee1f7cc"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","2885027c70021bed6c2dc6bd9d9a6af8"],["/2021/06/23/Review/天空之城/index.html","bace3822918bfe78330b1d223c0afa02"],["/2021/06/24/Review/魔女宅急便/index.html","68ad7bfbfa9fda5a6d4ee84fd6f46569"],["/2021/06/25/Review/借物少女艾利緹/index.html","15ec5b69fca06bc083dd2ceb367ac1d5"],["/2021/06/26/Review/魔法公主/index.html","5a493369e4bdbe948d55c270e91875a5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","187aa6c32ad1ed1a731e25dd3ec0703c"],["/2021/07/04/Review/飛雪與劍/index.html","93c82afa06f849f9f54b99ec48d36993"],["/2021/07/09/Review/地球防衛少年/index.html","75d56643cce41f7f1c2ef503e00a4cfe"],["/2021/07/12/Review/Angel Beats!/index.html","ce2f35a2131d1237f6cfbc065efb55ae"],["/2021/07/13/Review/Clannad/index.html","352d0a745cfd9980b048febff71bca42"],["/2021/07/15/Review/AIR/index.html","a1745bacd3c1d0cb094d2d20be55c441"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","23b1c925b7966ca691a7eb22d79836d2"],["/2021/07/15/Review/螢火之森/index.html","02690be8c6a7c972be369b8820c2a1c8"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","3d36574c112c2ae99030a7fcdd43d922"],["/2021/07/17/Review/奇蛋物語/index.html","a3878ce0d60e6022535248fca3d80a2b"],["/2021/07/18/Review/Vivy/index.html","1bd4f4f3779aff3ca5ffefe59095714f"],["/2021/07/18/Review/請妳消失吧/index.html","daac3eef4c98830aefe03954413bebc7"],["/2021/07/19/Review/漣漪的夜晚/index.html","95930b89fc53afd8b05cb7bbe62bdd71"],["/2021/07/20/Review/月色真美/index.html","cdbd3a81d520fe6114b0c9de2a0be053"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","317ab31b3a3dc835fcb106065b6f5be4"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","fcc9186f12bc6b9cd536e726d73589f7"],["/2021/07/22/Review/罪惡王冠/index.html","347c450865088806db7ae18cf4c0e2ce"],["/2021/07/23/Review/弱角友崎同學/index.html","f61c5295aeec42dadbba0a8cd31d0d3d"],["/2021/07/23/Review/惡之教程/index.html","e3a22390750b21bec40e471796622782"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3a749bb327bede12c7b215537c7b5adf"],["/2021/07/25/Review/魔王勇者/index.html","c841e51563920f1eb53be793a8fffded"],["/2021/07/27/Review/一年A班的怪物/index.html","cece60ca90e28eb97fb4032aaaa84463"],["/2021/07/27/Review/奇巧計程車/index.html","8b87f00fb50ef91b7907c8731ba80ebf"],["/2021/07/27/Review/專情的碧池學妹/index.html","8b091f1138f8eef5b2fb1dd829889c83"],["/2021/07/29/Review/只有我不存在的城市/index.html","d27bb12fe6250a4191a6b55fa47de8d5"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","a1aa23d7ba405e83f8da0c936d7fc777"],["/2021/07/30/Review/可塑性記憶/index.html","4195bf1ebf4ac6c1ff509893fcc43d1b"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","b0db086ea6721d00de2c34cb9e6dd307"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","91daae4fbece9792fb4ca4aed48cbe13"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","a69656dab02f7c4681ea828d160ff14b"],["/2021/08/25/Review/清戀/index.html","a8e86f4d550b2baaa00f81d24c64e27a"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","e51cac284a824804e831963cf408af9a"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","3925cf8595dc4e76b4e7e41526f5308c"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f36e80e05d60fd701e05ad2c38e7d78f"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","567ad51b3160a659111e64849124ee7c"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","bd759c9e9ff63308be27008951da4077"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","57f849fcdf3318735635cb253cb92b59"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","d4e1cd3f0b4a098905eb11032c628129"],["/2021/10/16/Review/龍與雀斑公主/index.html","abcecde49add3697a6c8d06323454b96"],["/2021/10/19/Review/孤狼不想開後宮/index.html","a13a29b6495f5029abd4c15dabc5fe7f"],["/2021/11/13/Review/徹夜之歌/index.html","aa85e63efcc2ea2d3753b1238b35fc65"],["/2021/11/24/Review/武煉巔峰/index.html","5230d158393d99ca779ffcaec867fa9a"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","006050f00afbf5d188195e9e65e919ba"],["/2022/01/28/Review/神醫凰后/index.html","b7db9a37fe6a2a87dbde0a30006f3735"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","a8e13bb39d803df2377f567b0426f5d1"],["/2022/02/13/Review/夏日幽靈/index.html","5bfb2b7f0c4b6d9b0e56212018b5f503"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","b5e6db603ec501fd7d1da90a8cfd551a"],["/2022/02/26/Review/賽馬娘/index.html","86077a3a531f42bbc822a9f6e51280cd"],["/2022/02/27/Review/大欺詐師/index.html","b4b5e736e41e007b9118cd6943fca87d"],["/2022/02/28/Review/前輩有夠煩/index.html","e61afa0cf5e3f613424513eae9a3e450"],["/2022/02/28/Review/碧藍之海/index.html","a01baf1e6d101e97ec1943f5b4ddb1bf"],["/2022/03/05/Review/落第騎士英雄譚/index.html","65faf72ce68728ade040050eef5f3136"],["/2022/03/06/Review/Another/index.html","3a3a3bef5eb693556890cc2e8d52dc23"],["/2022/03/06/Review/入間同學入魔了/index.html","109d4a02ab4ad94cc1cf9e24ef24423e"],["/2022/03/18/Review/再見宣言/index.html","822316f6576d3ce6e339651bf0e3b379"],["/2022/03/23/Review/生若冬花的妳/index.html","9b02a2b7a9935d765530976b51010903"],["/2022/03/25/Review/天之弱/index.html","a9d25cf71bf37019a145bafe7e540611"],["/2022/03/31/Review/滅了天道之後轉生/index.html","18740face59e72cb1f6f9bcf525428c4"],["/2022/04/30/Review/泡泡/index.html","3a24e90fc6bf36a97552bf5f2c5b6889"],["/2022/05/04/Programming/Dynamic Programming/index.html","6f08e700eb4d2b6f05a7fb2e64e87c92"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","5a85e662298935a342d11a3e1c5cf258"],["/2022/06/13/Review/偵探已經，死了/index.html","358819e2f52efd7d9ed1863b34fa6353"],["/2022/06/14/Review/黑色子彈/index.html","1e2b852fac19153e1f4c19d5e6326385"],["/2022/06/15/Review/黑白來看守所/index.html","32dc9891449e0d44bb0d9bdf7df11454"],["/2022/06/16/Review/虛構推理/index.html","735bdc639e03d944724e1314b18e5078"],["/2022/06/17/Review/戀愛與謊言/index.html","6da21620df10a2b51858da85047cd994"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c46686b2a456ee08a19616180834d01b"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","1fef3d08766f43cb272447e0be5d01e7"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","71125ea21cf3610d5b16e197e1be493a"],["/2022/07/03/Review/Hello World/index.html","739b35ee79f0f32a88f782539b6add51"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","84da4a67728bc89a71024e4d012dadc7"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","e2c3d5092396676b4937b277d7e18d5d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","bc60c833eac4d0db621ff394175bdc10"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","5dbefb952825384363e7cc253b745cc2"],["/2022/07/16/Japanese/動詞分類/index.html","c495f51f6037f105a1fcc212f6fb54a5"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","46cef7e7429136ee5b0c3f121a4ca400"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","9ae77652f593c8bc1f795c3b7d92ac6b"],["/2022/07/17/Japanese/音便/index.html","6d9040b80e12ec43f438a2f2c19623fe"],["/2022/07/18/Japanese/動詞 時態變化/index.html","896f7b8b8282520811fb6b1afa34deb8"],["/2022/07/19/Japanese/助詞用法整理1/index.html","c404d22e9eeb54f69d4e0f0616f2078e"],["/2022/07/26/Japanese/助詞用法整理2/index.html","5c0117f72fcdad1ee7be01fa51f401c0"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","911af7899509a0d13bd218997fa51751"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","e0efd5e2c53b4d90a074e1cd52d903f6"],["/2022/07/30/Japanese/疑問詞/index.html","706b68f2498a41d458181bfbfeea0236"],["/2022/07/31/Japanese/助詞用法整理3/index.html","b97952476415dca3396a6d888052787e"],["/2022/08/02/Japanese/副詞整理/index.html","11ff0643fffbd836c9eab74a65320aac"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","ca6a995126b874e737015370f5e4cfde"],["/2022/11/04/Programming/Data Structure/index.html","b5253ab7358465103781f8c4e95f4069"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","41bc326a8f24a9d959702738e927b3d8"],["/2022/11/22/Review/組長女兒與保姆/index.html","25cfd9cb3e704c0f2441807f493e4873"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","5e34a58d566cf894c0c8a3ddb52b07be"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","c227907878044a6382e31eb4b323f750"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","08f7c08df49d28459b2ecf1d1a03187f"],["/404.html","6382ea7615e3b475c58c02dae2fc5791"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","6ece1dab7ab18c2e13a5db650beebfd2"],["/archives/2019/11/index.html","1150e694971165523160efcf4dafa734"],["/archives/2019/12/index.html","d20bd363b874c10e6b19bc64cd401f3c"],["/archives/2019/index.html","1c0913799f44b0dc976414faca3613c2"],["/archives/2020/01/index.html","aa93f68a3e7fafef9369bf3538f359b3"],["/archives/2020/02/index.html","5fc7c82befdd2a4c4f55564296e36b02"],["/archives/2020/03/index.html","ab54e9cb282dbbaadd322cfcc7c55468"],["/archives/2020/04/index.html","026a19d2d771bf962c2fce8990510fcf"],["/archives/2020/05/index.html","5a467c976a34fe05de59af5fde3619d1"],["/archives/2020/07/index.html","1093588625217e1a364bd47b4be08830"],["/archives/2020/08/index.html","5e785103d5087b69a469e01b40d40cc9"],["/archives/2020/09/index.html","05f5c653c8e14a02703d5a7bdf64716a"],["/archives/2020/10/index.html","2b35a1cef5a74724ea7c77ffdf1c8d20"],["/archives/2020/11/index.html","77c19d4210336fbb6364bf8653a63918"],["/archives/2020/12/index.html","9a71c04c3b0d5154406ab59f9f1a4525"],["/archives/2020/index.html","aeeaf6e37dbd4d5be0656b8f64238e0e"],["/archives/2020/page/2/index.html","db37aedc28793b10824b2aa55d104f27"],["/archives/2020/page/3/index.html","61766db289c6e8f778f61b61a9df2631"],["/archives/2021/04/index.html","9944c10bfe00a3275d2bcd57daecb288"],["/archives/2021/05/index.html","e9a8d2c7f7707865216edf4d893fb54a"],["/archives/2021/06/index.html","575936946e7977983c6cb99ba97ed2f9"],["/archives/2021/06/page/2/index.html","41942b7d7fe60feb6be81d1d90e229bd"],["/archives/2021/07/index.html","4aa7772c7dac780ae420b375d656d774"],["/archives/2021/07/page/2/index.html","1ae42e86551582116785077303b10b12"],["/archives/2021/07/page/3/index.html","1a3e23677af2063236094277cb4e7a0e"],["/archives/2021/08/index.html","f913c79dc379e3698ec344d76fcb90f8"],["/archives/2021/09/index.html","74e61d480243b9f74e031c0ebcbf9529"],["/archives/2021/10/index.html","c09b2c6a055c3d675208494694e96b86"],["/archives/2021/11/index.html","2a09328a37b7905642bb702785c2bab4"],["/archives/2021/12/index.html","b589de649b673e1c0b9a6be77bc2b5ee"],["/archives/2021/index.html","13dcb7aa925c48d2fed57c4bd669bd39"],["/archives/2021/page/2/index.html","eab8393a729b9042f2eeff545e1d6c9c"],["/archives/2021/page/3/index.html","2dcd67b267c876a56eca67719279cfbd"],["/archives/2021/page/4/index.html","6b710c5b49c3836c521d11972e97aaa0"],["/archives/2021/page/5/index.html","87cc4db0a44feaa8c483f748f33e2aa5"],["/archives/2021/page/6/index.html","c1baf909f646efe3b75cfd62c82d3f48"],["/archives/2021/page/7/index.html","c0332d4b451f8a67a2b6679229cc9cbc"],["/archives/2022/01/index.html","beaf0aa9447e317d61d1923f391a1c90"],["/archives/2022/02/index.html","3446087302aeaba81cf8a9faae55d600"],["/archives/2022/03/index.html","9031474c92ba9a07aa1b55aff0e16589"],["/archives/2022/04/index.html","3ea6fca2bb16695a76c364a760f725fd"],["/archives/2022/05/index.html","7800b1fe2329347a36ad3698b762a63f"],["/archives/2022/06/index.html","f9c3726c2140d7a67651013b6317dc3d"],["/archives/2022/07/index.html","1984138506ef31c3e40a2c7bb0905aa8"],["/archives/2022/07/page/2/index.html","66c7572726ffb2fb8038384bbb3f3f7f"],["/archives/2022/08/index.html","1c9bbe35576d47b8eb38e24feecca49d"],["/archives/2022/11/index.html","361081c1e540019f8a32c0a9d610d546"],["/archives/2022/12/index.html","d4876554abcdd658585746d3d84357ee"],["/archives/2022/index.html","f2ea82b7e9db31030299c0aff7657c77"],["/archives/2022/page/2/index.html","cfddf1eec2719e45ed6f747b028483fe"],["/archives/2022/page/3/index.html","b51f54407a2690a8075d3dba15f5fe1c"],["/archives/2022/page/4/index.html","3e81fc7a997cbf9fe97f01d991faeddf"],["/archives/2022/page/5/index.html","d771b482470ccc23f0f06999abeb325d"],["/archives/index.html","e01ff265ae6d8cf702756ce540d54015"],["/archives/page/10/index.html","89df5bd39f68a810ddfc3759b28f36eb"],["/archives/page/11/index.html","bcb4c3ddcc0ef65c03f7d399058f2021"],["/archives/page/12/index.html","eb3a23fc048616c7f19818e495f7a0fa"],["/archives/page/13/index.html","be93a1bd22d8855536daa04d08496494"],["/archives/page/14/index.html","3367982e676e7b87bb05663a1c33e1f6"],["/archives/page/15/index.html","73b9814ae9ceed9dc43f4bc3384c16c1"],["/archives/page/2/index.html","0b5e38569b11aa98930b28af81159c4e"],["/archives/page/3/index.html","bf3c22fd5922ba01963f2b88807c3b9b"],["/archives/page/4/index.html","452b8b411d86f77cb2de23fbaf182f14"],["/archives/page/5/index.html","e54dd19a2da0f6fd425bb2aa5833c846"],["/archives/page/6/index.html","923253139258f1e66f9c4090285266bc"],["/archives/page/7/index.html","d262698abd7347806ec04adb36b584dd"],["/archives/page/8/index.html","2f1ddb7d43c5b3fa5346272b9b0bef96"],["/archives/page/9/index.html","1c1c12cb5b51468951e0fa41ec51cd0a"],["/categories/Programming/index.html","4fedfe429666633455bde9d0cd2c6c74"],["/categories/Review/index.html","3d3c375d17fcc009ff9960a1ef771f8f"],["/categories/Review/page/10/index.html","d12f8f52a6b2016f388157e855da77f2"],["/categories/Review/page/11/index.html","4148ce151f6b0d19e31ab7350533bcdf"],["/categories/Review/page/12/index.html","bcb61b8bb016d0afc46f5a9847b2ac64"],["/categories/Review/page/13/index.html","6d5b001f0b05e8469900f5c8c2f3ab7a"],["/categories/Review/page/2/index.html","527c7365f460493731125f22407775d4"],["/categories/Review/page/3/index.html","00c85fd94b630a247229bbc1f72d975c"],["/categories/Review/page/4/index.html","506e607dfb1e3afb982f658594e63e01"],["/categories/Review/page/5/index.html","5245c1753a1f7012ae8893f81ea1364f"],["/categories/Review/page/6/index.html","9c9e4e5e7df0a557f6628c3e54d7fdc9"],["/categories/Review/page/7/index.html","8b364324c5dfef883bb0ebb299b9e4b6"],["/categories/Review/page/8/index.html","b3c47111a26d2742f01c87fe40461302"],["/categories/Review/page/9/index.html","821b72ffa8ac92df10b73401a5736c83"],["/categories/index.html","ce52c776e805d3ce2176185d79583138"],["/categories/日本語/index.html","ba17a0089aa4ccf9a83004a2e6711730"],["/categories/日本語/page/2/index.html","5c467bde2f310bf1ff6cd4de6b65b985"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","97f2e5824663946ae53346ea9437fbcf"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e1432256af1673a404f3ac221eb02178"],["/page/10/index.html","32c27d4e2ce1441ef469a2253a4f3ea6"],["/page/11/index.html","7e013b52d793607599956e3acaaed978"],["/page/12/index.html","4cf12442fe69190ee7f689d4b841ee02"],["/page/13/index.html","b0a113fbb19d539cd269405443755904"],["/page/14/index.html","22350bbcde6c3205abc3c9fa3b934ba1"],["/page/15/index.html","fe6c95e7c87049f2557d099517984444"],["/page/2/index.html","dd5843a6f1151564f3785210ccaf3972"],["/page/3/index.html","8c186e35c92e806041a0c7e85cb2b348"],["/page/4/index.html","746f6bedaa18ff5a7fcb4930c554804e"],["/page/5/index.html","577f6613020961a68e99cc1f412c46a1"],["/page/6/index.html","c95ba9ac6187545f87f66e887a822cb7"],["/page/7/index.html","110dfece1c86c2586098c7b27015d284"],["/page/8/index.html","7b82cead058230ab834905dc90ff206d"],["/page/9/index.html","676f1b0308323ed04f0ecbe365c66741"],["/sw-register.js","33feef00319faf894dd0d42a50a58d80"],["/tags/10分作品/index.html","9abfa746b60d48452c458533fed143d1"],["/tags/3分作品/index.html","98f5f0807f30389f880697854c60b8be"],["/tags/4分作品/index.html","8c101e55729a60624b35adfa7bbd858b"],["/tags/5分作品/index.html","fd304f09f66d79972f1dbfb5845b7906"],["/tags/6分作品/index.html","3cfb09a314a3321d98e0062788a5533d"],["/tags/6分作品/page/2/index.html","02f09edaf832370d16c3ec9b8c6410e5"],["/tags/6分作品/page/3/index.html","22706b54f2a21e7079b150c75245aa68"],["/tags/7分作品/index.html","199273ecd6bdd3f21159b63afb95c40f"],["/tags/7分作品/page/2/index.html","30a597e38f0443b73f7326b8ba250c05"],["/tags/7分作品/page/3/index.html","e800bd14dadd4f630a75c05070192577"],["/tags/7分作品/page/4/index.html","089a57e84a723407d1a6955932054006"],["/tags/8分作品/index.html","389fc15cf992bda310d5e40bcd3cba22"],["/tags/8分作品/page/2/index.html","5e3afbc6bd9b03c3c7305a1cb8ce1d38"],["/tags/8分作品/page/3/index.html","21ea1ac7d9832f20f446ff86c8d8b0dc"],["/tags/8分作品/page/4/index.html","2e0f36326d684959deb064d1544113fe"],["/tags/8分作品/page/5/index.html","c451ea74240d22a56b9d0613a5558762"],["/tags/9分作品/index.html","02d98efb38a27cabd534b05b08f2ea80"],["/tags/N5難度/index.html","d6549593540e247a7ff27de5dc5a6f71"],["/tags/N5難度/page/2/index.html","50ef12f73259b0eed9c2c9a7ae7319ce"],["/tags/index.html","1f41e02a8006fb54d776766b907ad9f5"],["/tags/アボガド６/index.html","08f0f41590fb85b576e3c16c9850b0ee"],["/tags/三秋縋/index.html","63f50d0c4b32a38a909dfa9a6667fb5e"],["/tags/中國武俠/index.html","4c2dce86b5b032847ada99391806d571"],["/tags/中國言情/index.html","d836c9a0ac9ea075817c324602c7dce9"],["/tags/二宮敦人/index.html","e27ac33050b4e2ba81cfdf425771c461"],["/tags/人性/index.html","c81aafab154be698620acb61172f6703"],["/tags/人際/index.html","7c56d802a385df93ece45a742321390d"],["/tags/住野夜/index.html","5ff93df7aeef8f09319ec4f6e654eb03"],["/tags/佐野徹夜/index.html","3328411767ce784b5cf97867397b8756"],["/tags/努力/index.html","c5228df3f09b6a28d7146ae711fad088"],["/tags/動畫/index.html","ab12c25b86709629d94cb4e76903448b"],["/tags/動畫/page/2/index.html","d8f171c03b460991838e906df4fabb2e"],["/tags/動畫/page/3/index.html","b80150cb5ab5a86bd9a9befb94d11f23"],["/tags/動畫/page/4/index.html","d0284834e4e4fdf43a4c287b21d1b923"],["/tags/原諒/index.html","0db0856f69679b6252995aa8cf131ec1"],["/tags/反烏托邦/index.html","7b700f02bda363e25fc218c585440c98"],["/tags/啞鳴/index.html","c25403c92a140c2965028185248fbb81"],["/tags/喜劇/index.html","175274e09535c686b8213fed650650ec"],["/tags/夢想/index.html","e974d64ce9c9d1cd56c31f6c08e0bea6"],["/tags/天澤夏月/index.html","da551465944f9982b3cd857b82d705a3"],["/tags/學習/index.html","cc74aa6db2afd3e77539763b7e8786ca"],["/tags/學習/page/2/index.html","18d26b988dbf675dfd9af3f9aed6b21b"],["/tags/宮崎駿/index.html","69206dc4c82cdd913c81f16b979eaf46"],["/tags/小說/index.html","5bebd780d924636e20f2b7ebb361121f"],["/tags/小說/page/2/index.html","ad108a10639428ddd8fa1e949b1bd63d"],["/tags/小說/page/3/index.html","12c7ad5522a9d4ef4748f2e6912ff9a5"],["/tags/小說/page/4/index.html","a8685e1d84a8c30868164d757d567986"],["/tags/小說/page/5/index.html","0f60cf0875ee49b855dff730e6497872"],["/tags/小說/page/6/index.html","f234cce7eaaabb90fd891e40cac700d3"],["/tags/小說/page/7/index.html","fdca4c7af63009995ee73f234484f956"],["/tags/平淡生活/index.html","670280a03a2da2fbba2cc4a0d45d90ff"],["/tags/幸福/index.html","0b52bee35514df7bd476daeb87b8f374"],["/tags/志茂文彥/index.html","745bdc38cb364950e40fbc6d2a3d01a1"],["/tags/愛情/index.html","2522842650184b1084261873ddb97b2d"],["/tags/愛情/page/2/index.html","c59e45a438c0aeef1fe92cce0ce095a9"],["/tags/愛情/page/3/index.html","5cd4c30d919b0b9cc216e779b76dfbb3"],["/tags/感動/index.html","fc9481514e966986be8cacb5edff0ff1"],["/tags/懸疑/index.html","8897122c787234896f7c6df162ea7b92"],["/tags/懸疑科幻/index.html","9f6be3926b04c0fe3c4ff432bbc9ed7f"],["/tags/戀愛/index.html","67c043462bf8e027ec09da488e8b0006"],["/tags/成長/index.html","9c3e30a4f13dc3c5c464484bd11f234a"],["/tags/成長/page/2/index.html","a94907d2d7432f810e6aa216fc7182b0"],["/tags/戰爭/index.html","36c57b338d3d6d1391a80c81dbd8c93a"],["/tags/推理/index.html","af186d26b5832e506c0249e54f36a271"],["/tags/搞笑/index.html","3480d37ecc9f5cf7a4e6000b123d61e6"],["/tags/救贖/index.html","685300d75a6a771bfa3a7c3c25f77b55"],["/tags/斜線堂有紀/index.html","b55beefc7ec522685b0f386044790471"],["/tags/日常/index.html","d8f6c5362022ae6dbe8fd12c609fae0f"],["/tags/末日/index.html","d2b1c511df31110df59788726ecece0b"],["/tags/校園/index.html","c01ef12f4964a5e934c2eff27fbe9b8d"],["/tags/武俠/index.html","aaa05696b718da4827b3b136d2807508"],["/tags/武俠言情/index.html","9be809897244fdf8ce9a0e7586bfac72"],["/tags/漫畫/index.html","3ae3c62c73cf3ff84e9afc91a1bce818"],["/tags/生命/index.html","cf009360a15db6cea342c4f052fdb28a"],["/tags/生命/page/2/index.html","02554a20dd20da0dca0e4551b98b1ee3"],["/tags/短篇/index.html","dea4d3b79edf1e357c23d76e7fefa1d1"],["/tags/社會/index.html","bdad9ffca6071095ebc5cdfff72fb0e9"],["/tags/科幻/index.html","690e8de94e0fb464fab203e5c22e9970"],["/tags/童話/index.html","748004b21fd0a6e9e73df1da257adb4d"],["/tags/競爭/index.html","d9787b3aef56482280cd8d6ef39d105c"],["/tags/自我/index.html","417249c37a24c959b2103ae1b3db1da2"],["/tags/自我認知/index.html","2300413444b46946b3ce3bfa0cd3b5a9"],["/tags/葦舟ナツ/index.html","51c9e3fa3731c206da1ea0d061bda070"],["/tags/藤萬留/index.html","efbb69042ea2b8f6f16b04feab0695b6"],["/tags/親情/index.html","2f170abac08174e6db846f5f42b864e6"],["/tags/雜項/index.html","22d151c989123738ff908281bf00ea59"],["/tags/電影/index.html","1775c734a5c5a0610c35f54fc50ebbf5"],["/tags/電影/page/2/index.html","012b03d3d462185f9d076ebe7e314890"],["/tags/霸凌/index.html","31841985c4e8431241048b02c940431c"],["/tags/青春/index.html","0723853e1298debc20d2a729d35b2a12"]];
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
