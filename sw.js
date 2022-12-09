/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","b2404ea24fe9bb1979561ef106e6ed88"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","0a6a4f458e3b3e07586d93c8a9502f6e"],["/2019/12/25/Review/無法計算的青春/index.html","fa37986a33b8f48063e5a5e210f6a1cd"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","dfde6d4bab86ec5bcefe49775988880e"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","dfa9ee2f07db1f1d0cf4d4d7bf552566"],["/2020/01/19/Review/下雨天，不上學/index.html","5ae043a1441143d6f320fe65caff9f72"],["/2020/01/26/Review/三日間的幸福/index.html","67518d75547a77aae2aad96af28c2ff2"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","5430cc7bfb753fbee8ac7a16fdf8cdb0"],["/2020/02/09/Review/青春期超感應/index.html","915de20ab45574f14dd5399ef7335f23"],["/2020/02/15/Review/又做了，相同的夢/index.html","2a1a30a87bbc91ec1e8c50b2b80f19e7"],["/2020/02/22/Review/回憶當鋪/index.html","dfe9fa5de1ae5ffa1fc68f1b0ee76acc"],["/2020/03/22/Review/不適合自殺的季節/index.html","7107732e76b6314c3dea05f865daf726"],["/2020/04/26/Review/我們都無法成為大人/index.html","33d0325662ae81fd8719a6e5f131b75a"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","717092e3c171cc81139c548af6ee0e5c"],["/2020/05/17/Review/人間失格/index.html","bfaf0696d03190258fe7c7d7b866dc50"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","fb1431fa7ee53cf75ebf942e40be6fa5"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","64e641f795a5c9a957b6bd269e0d9654"],["/2020/08/01/Review/銀河鐵道之夜/index.html","043ee991f4b102980707f2af78438e07"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","305c445fa60dfa3f0e5e334a7c9aeda0"],["/2020/08/16/Review/15歲的恐怖分子/index.html","5a853f1b4675bc0ffa63dc237a338fb8"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","960b9cd5ee138efdc218777900349745"],["/2020/09/13/Review/羅生門/index.html","f9eac1d17c6c12f9edaf0ba3f9e7bb6a"],["/2020/09/20/Review/闇夜的怪物/index.html","d41e977e5308a0c886e04ad54507beaa"],["/2020/09/27/Review/14歲，明日的課表/index.html","df7f33453bf0e27350d16fe7392bba28"],["/2020/10/04/Review/致十年後的你/index.html","d1428c3d5300cbcad55fb9c3003c6f40"],["/2020/11/08/Review/滅絕之園/index.html","be5dbb0cefb2709b0cd1985db6ac5c50"],["/2020/11/15/Review/將愛拒於門外/index.html","adda9f24341a31beb5768d5786f601f3"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e4f2843074b0c2c6772e05311edceb5a"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","6dd51be7c32d4404cc3b4ef508c43ac5"],["/2021/04/22/Review/道印/index.html","809c7b3bfb07593c3bbec4cedd1b9d74"],["/2021/05/03/Review/戀入膏肓/index.html","817f70c6d64ed60d00674c534a80ac42"],["/2021/05/10/Review/Dice/index.html","4e61de5f382582bfc137c4ab3ab65580"],["/2021/05/15/Review/魔女之旅/index.html","35f88774f8cccd1f31549e774ece5932"],["/2021/05/28/Review/戀愛寄生蟲/index.html","f6519d569bd9ea5c9a8827613ef7d0e7"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","31c219e4f25a58eeafbff2f403a9d3c1"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","e12a386989122153bc0732ccbdd3c8ca"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","49ef9029bb658080486265c72386b6a9"],["/2021/06/05/Review/流浪的月/index.html","3307b42ec392943aa771446a43150906"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","71510bd48972b841970d905eddb0a39c"],["/2021/06/13/Review/第一人稱單數/index.html","b5fc6f628b7eb3004b9667f429faf78b"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","0bade66f8e2b5b0bfbbb9c2ad4290caf"],["/2021/06/16/Review/願你幸福/index.html","8f47c46a158d5de7242229d715af1d87"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","eb8e9968ffd3b338d9d452dff997ed0e"],["/2021/06/21/Review/神隱少女/index.html","97334be1b5101910c0c975f5da86277e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","d6ce35f0785122e55f85a79744a75eef"],["/2021/06/23/Review/天空之城/index.html","be4b6fc22e7263849148782e9196ee66"],["/2021/06/24/Review/魔女宅急便/index.html","760c1d32b405bbca824d9a410b47ce2c"],["/2021/06/25/Review/借物少女艾利緹/index.html","1ba357867dc4fb20902228e4294c862a"],["/2021/06/26/Review/魔法公主/index.html","23f3f634eed717230fb9cdd8e3e4f93a"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","c32032b252e3d7420c0d1dae4f5f8b38"],["/2021/07/04/Review/飛雪與劍/index.html","68bb244e16d55fb999e3c8ea3a373adf"],["/2021/07/09/Review/地球防衛少年/index.html","bd832bff20eca7ff66f3085f59ff2418"],["/2021/07/12/Review/Angel Beats!/index.html","550bf9dfcce2ec61376768482b9d160c"],["/2021/07/13/Review/Clannad/index.html","7b41598684fa5835684c514a6b6da9c7"],["/2021/07/15/Review/AIR/index.html","b4636fde5526bdc97618ffa8533c5d7c"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","55faf65a6c60bf2a301941b0fd523e6f"],["/2021/07/15/Review/螢火之森/index.html","d78528e37ac644dec26ba289d9c41256"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","c462a54f55f034d89cccbe5c44460df2"],["/2021/07/17/Review/奇蛋物語/index.html","a689ac0e9a4a6e70c7306566d2b10ab5"],["/2021/07/18/Review/Vivy/index.html","ccebdbe6f1e9e7fc9285a817b293a9ce"],["/2021/07/18/Review/請妳消失吧/index.html","ed5aea4797cfca67101545b2c7b08b41"],["/2021/07/19/Review/漣漪的夜晚/index.html","a6044061d783f5296734c457bb467fe2"],["/2021/07/20/Review/月色真美/index.html","6c0f646e1429588f4fcb4c8f55216f54"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","b33e5dc65fe6653e0a7272a9afc8587f"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","145715e400aaef2369271a750d33f5d7"],["/2021/07/22/Review/罪惡王冠/index.html","b61f963709bcd7ad4b8865ca72baa623"],["/2021/07/23/Review/弱角友崎同學/index.html","29a2b22095121b0d572715001656611a"],["/2021/07/23/Review/惡之教程/index.html","71dc6e36a29a7c8c18a1194d34f88f89"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","f333b250cf1eda6ef36d8494dbc7c61f"],["/2021/07/25/Review/魔王勇者/index.html","0d694eadb9369b1f304bba69fa9727aa"],["/2021/07/27/Review/一年A班的怪物/index.html","a8f8fed54a2954710844c86a50b69309"],["/2021/07/27/Review/奇巧計程車/index.html","1000ac101fbc3c08f6b2fbbb69c08b99"],["/2021/07/27/Review/專情的碧池學妹/index.html","3e847ab4123e26005c874aa8bbef9bde"],["/2021/07/29/Review/只有我不存在的城市/index.html","ff817f3aa1f1dcfa770bef503f9ab4a0"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","346a67c8613717906738bd33aba7a732"],["/2021/07/30/Review/可塑性記憶/index.html","75334985263e497cfffcdb97c45392d3"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","e261fb31f90e9340e610b6b87b041b8b"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","9265be9551409bb6da2505f8d71928d7"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","0796badd7844951e0ef28dc72da39fcb"],["/2021/08/25/Review/清戀/index.html","24f3f4309c6025ca2e22845f92bf1375"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","14875c19213f34d2c31f1d0b9e86153d"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","5b48eba2476054016c3a7dc11a9c562d"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","b8260e6557e1539f439b337826f93031"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","288a4e220e2a9a9e61b881dd484d2859"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","813a0fe8205a62932dda2bd486102f19"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","38f7e47c2ee24eec9ce6f1e5d7c9fcc4"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","78e24ff7b8dbd66679fc7c8ffdc470ed"],["/2021/10/16/Review/龍與雀斑公主/index.html","f585958b745d4b1c57afe22a2b2b9562"],["/2021/10/19/Review/孤狼不想開後宮/index.html","6d446711a2195de78802ed7584ad6740"],["/2021/11/13/Review/徹夜之歌/index.html","cc36cd1f07ebc361dcf05abf7a69d907"],["/2021/11/24/Review/武煉巔峰/index.html","e999504fa679ab9cf71573d2cb8d5ff8"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","2417fe8da362c364d9a416e816b29328"],["/2022/01/28/Review/神醫凰后/index.html","d24cba56bf8b7d6ed64d8e0824f3e1aa"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","604b55ad4eac48c868299ba56bca3579"],["/2022/02/13/Review/夏日幽靈/index.html","fc0589486e2e881d79be6bf1d8102444"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","b56eabe474d9f288ced7c2c950972488"],["/2022/02/26/Review/賽馬娘/index.html","c0b25bee2aa182b6eee4d182b8b5e928"],["/2022/02/27/Review/大欺詐師/index.html","c37995e30b46b327c9d542647d8bf0e2"],["/2022/02/28/Review/前輩有夠煩/index.html","a244ea6ad14ec49d5402aeda925b2b1a"],["/2022/02/28/Review/碧藍之海/index.html","bc7257934f35fa2e968c93ec37d5530b"],["/2022/03/05/Review/落第騎士英雄譚/index.html","50148c6a977306fdca3e4c413fea702b"],["/2022/03/06/Review/Another/index.html","649a00c485f823c969fdc403b3587c29"],["/2022/03/06/Review/入間同學入魔了/index.html","c57640c23f0a6f09107e8c9a2853e06a"],["/2022/03/18/Review/再見宣言/index.html","99c9033c3046f62e8ea0cf85f2319734"],["/2022/03/23/Review/生若冬花的妳/index.html","1d3522949051c66a413e9b9c4bd177ce"],["/2022/03/25/Review/天之弱/index.html","5d68e1420baa165602470dcae973d787"],["/2022/03/31/Review/滅了天道之後轉生/index.html","ac2b4081d96ebd66f6043759eed7f0ed"],["/2022/04/30/Review/泡泡/index.html","ca04281fbb8b1fa531c77331e998ee58"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","5c026da285580734bcc0b862f0f2e0a5"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","cf0c093aba79b05aa3de42d5bbf277fc"],["/2022/06/13/Review/偵探已經，死了/index.html","dcbfc7127873d6a5e78ef8d841b3722b"],["/2022/06/14/Review/黑色子彈/index.html","61b6a8eef88d81ff1177eae0e30dd503"],["/2022/06/15/Review/黑白來看守所/index.html","438c955b9a0fa10cf5e83b4986539cf6"],["/2022/06/16/Review/虛構推理/index.html","8946a3971aa3c0fe7b1dbfca21982413"],["/2022/06/17/Review/戀愛與謊言/index.html","7c3f2b16a99098ef7811536ae3dc55df"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","7e5b27e39b33c81657200f072e6d3ee2"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","4e45d5e9eb224541d09e12abbeccf1db"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","a7376fede3e348aa0b7a994f2876f9a2"],["/2022/07/03/Review/Hello World/index.html","03ccfacb359f5844b44916e19f18cddc"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","2498304c43f2e4a7eaaa7a80125db36a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","ffed94cc66136e5475c3865790f57f4d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","43544504817e60f302c1c1ac5c8daee7"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","51cb43a8ae9ec843fd82089b1be0775e"],["/2022/07/16/Japanese/動詞分類/index.html","b11ab54be3b74bd4430fecf9312280b4"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","573698253b8f72aa40783eda245db776"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","c63d2a32f55b50f4f4c6b7b5707006b7"],["/2022/07/17/Japanese/音便/index.html","b96cd216291632d44c74cf7d4ab4c5a3"],["/2022/07/18/Japanese/動詞 時態變化/index.html","a004435795fc0cc38561be4e2d4f2496"],["/2022/07/19/Japanese/助詞用法整理1/index.html","fa7079b3842b2c9595f794131773419d"],["/2022/07/26/Japanese/助詞用法整理2/index.html","20135544b6476a9373e2f81f81aa0f15"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","5bca21c5e52aa6e1c6b407053c8f9099"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","8953ce2f37d3ea632a4487ed24c95646"],["/2022/07/30/Japanese/疑問詞/index.html","ae4f7d7d726ed2428f49deb780075a22"],["/2022/07/31/Japanese/助詞用法整理3/index.html","9dd10e08c5048e5570f36dea55597d4b"],["/2022/08/02/Japanese/副詞整理/index.html","26af041facf50f63e6c6fd533d71fc0b"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","29f2fb46c48e6606d0fec9e79de87aa3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","ff1bec69f77ad0831d9b8ef982aa6a0e"],["/2022/11/22/Review/組長女兒與保姆/index.html","7abe92b653989c6020edc2ba4bcfb033"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","81e7285ce1e51eeb3d3b7535ec7ccc57"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","dd9d7b8f06fe4e2510bb363497796ac6"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","6405b4975120a266996e9637fce3fedc"],["/404.html","d7e1fe9126d1efc5ecbd4a6b764afefa"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","29f9f5a31881de378283b4137ddc88f2"],["/archives/2019/11/index.html","dffa8c2c9ec61989440fa8979eac6dcf"],["/archives/2019/12/index.html","ba71fde66c593b11b7ad23572c6bc260"],["/archives/2019/index.html","7c189e1801ca5218cd823fdaee024586"],["/archives/2020/01/index.html","290fe010334dbbaab24d67eebb47f3ee"],["/archives/2020/02/index.html","c9d53d5000487dc8a653ddeb59d9c599"],["/archives/2020/03/index.html","bd13e607592a42a95fa4b7a75690a8e9"],["/archives/2020/04/index.html","307b4d7314dc76bca8e4a8a646f4db76"],["/archives/2020/05/index.html","8c88c94d0e1e1cb9dacf82a8336f0792"],["/archives/2020/07/index.html","52b561f742a9f0965a663a5987504118"],["/archives/2020/08/index.html","97d3ce662bae821546f37b5ac7844352"],["/archives/2020/09/index.html","8de5b7a45b28a389af505fd33b6ec90a"],["/archives/2020/10/index.html","8951c4fccb8c4cd02bcc7a3d596d3f67"],["/archives/2020/11/index.html","bd112af1c6d886a9f5f071642bdf55a4"],["/archives/2020/12/index.html","e7bfc2020c77b56396467bdf81bfb44b"],["/archives/2020/index.html","aaf737b6e0441ec10b183304891648c4"],["/archives/2020/page/2/index.html","69fe91f9390144ba12f4e769a0322bfd"],["/archives/2020/page/3/index.html","d0faf6a6c6f1adff130a14bc99d3c9c3"],["/archives/2021/04/index.html","0aef1d231c3db41911f9af3b9df95630"],["/archives/2021/05/index.html","27f851cbef97b16c6544662a9a74674c"],["/archives/2021/06/index.html","e701490d512c0dc4da2ad78fa8c29679"],["/archives/2021/06/page/2/index.html","a139e8c26ef3b049fa4d25de64a7e707"],["/archives/2021/07/index.html","8eec4c25b2db639629970d94008eed5f"],["/archives/2021/07/page/2/index.html","4a377ec7396e602c2e353e33fbb24b66"],["/archives/2021/07/page/3/index.html","2c66b28d86993cc71f6635916eb66cf5"],["/archives/2021/08/index.html","9c433829c98691ecea4ee47c5e49bbe3"],["/archives/2021/09/index.html","348dabf348f1f023a185fa688cf3b527"],["/archives/2021/10/index.html","a866c5efe052a6ede91a170ef8822bb1"],["/archives/2021/11/index.html","fae654da76b12a83f85cb4c22cddc21d"],["/archives/2021/12/index.html","1c8135a3f25f69f2e7eb2442029a4723"],["/archives/2021/index.html","fe31ed8296977326361396c89a80c6fd"],["/archives/2021/page/2/index.html","eebe076eec1ae124f450c94237cf3a18"],["/archives/2021/page/3/index.html","ed7f354bf72ee890c86343c022b33404"],["/archives/2021/page/4/index.html","702755d5d052e77ae925920c1e3fc381"],["/archives/2021/page/5/index.html","b583d2cba1540f4e58aeb13a067f49d8"],["/archives/2021/page/6/index.html","b25b630c3e1460509ae826157877ac1f"],["/archives/2021/page/7/index.html","2ebbddfdeb66ad9055a68e5981a19e8b"],["/archives/2022/01/index.html","08f04ddc041f0192b919f486ab7fdb4b"],["/archives/2022/02/index.html","700090da8da010ee8f3dfa4e9b340125"],["/archives/2022/03/index.html","807eae44a43bb916a2bb3fb07839111c"],["/archives/2022/04/index.html","f7a70d2f150481408e473de2cf210ed1"],["/archives/2022/05/index.html","3260bdf1110fee7ae0c96bb624612e23"],["/archives/2022/06/index.html","5312853595d90c088b01be57486ac895"],["/archives/2022/07/index.html","dd9d43a466ec79199d6fd40272f78d4a"],["/archives/2022/07/page/2/index.html","e72a7843b63a2227f9e346aad6af4606"],["/archives/2022/08/index.html","fb0167245d60eb1b90ee97d8f021a404"],["/archives/2022/11/index.html","057b797eeb16f7daf4b2b1fd2347bffb"],["/archives/2022/12/index.html","da12f805acec8c9737c1ce69eb0a3395"],["/archives/2022/index.html","a354db75cb583e850e6b1a4c4a51b14d"],["/archives/2022/page/2/index.html","6c62e7bb33a55a01f2a27866f0151aa3"],["/archives/2022/page/3/index.html","2eee6316e4850e8fd3c20a1308e4d757"],["/archives/2022/page/4/index.html","a1a48a3adcccf58d4f744d0a0ee4c7b6"],["/archives/2022/page/5/index.html","b504af5cd60f5ba3b69e75152e2ed258"],["/archives/index.html","6280a6a91857165511b7b27175bf7314"],["/archives/page/10/index.html","060b85771776db8c2a7983432c369857"],["/archives/page/11/index.html","1d8683288bf97a58295858b11da8f492"],["/archives/page/12/index.html","e44da7bdb90b5b2493f21e02a1e37def"],["/archives/page/13/index.html","956dd7d866802c00e7a995b4d3152414"],["/archives/page/14/index.html","98e8d0f51ac9c2fcd4810cd91fd2b827"],["/archives/page/15/index.html","b3badcf941a38b6d726eb84cd4eb3f9e"],["/archives/page/2/index.html","e3b833d534271842d462dddb47ef3f47"],["/archives/page/3/index.html","1b1ec08df4544d149a6bde70fdb1a3c8"],["/archives/page/4/index.html","083c23c703bb246ca38aabf6ca814436"],["/archives/page/5/index.html","bc9df65e3e0ff25bb6b2a74aafb0cf89"],["/archives/page/6/index.html","9ebc6984a2abe0e752796502470737fe"],["/archives/page/7/index.html","2da2778e38b00cbd836bfdab0c0853a5"],["/archives/page/8/index.html","ae91a7f44d4887659cab6d623fe88bbf"],["/archives/page/9/index.html","b4d323712123aba74e0515ba34d9330b"],["/categories/Algorithm/index.html","466de62be4ed2182c9d704614693b966"],["/categories/Review/index.html","1a3312d1effdf023b5b09c43da7ca609"],["/categories/Review/page/10/index.html","dde5d10ced45d35f29b60d3f924eca03"],["/categories/Review/page/11/index.html","318432a17381447e1952cd6671aabb48"],["/categories/Review/page/12/index.html","71971573ad31a438af08c3ca5aada3f9"],["/categories/Review/page/13/index.html","7d2fddfa4c37b6b26b3780785c5d33e5"],["/categories/Review/page/2/index.html","e78ea0d80e8a989d680480edefc2590d"],["/categories/Review/page/3/index.html","357f6915aa72ab42af34c28e2b82c232"],["/categories/Review/page/4/index.html","ef0168b6f3e3ccc720b3a91c82a2f177"],["/categories/Review/page/5/index.html","cbe5e89d23543db212c9fd7f6ae857fb"],["/categories/Review/page/6/index.html","e5f793b96d8d7b8a823cf043a39b07ef"],["/categories/Review/page/7/index.html","bf607b824eedcdfc58c7e43e685cdb83"],["/categories/Review/page/8/index.html","1ba09cc37b62b89fdace2dfc913c8e56"],["/categories/Review/page/9/index.html","fded2dbb4b9dbf2f2e7f49e58015d204"],["/categories/index.html","6af7dc64c6fb316b6ee8fc7a46be15e5"],["/categories/日本語/index.html","b7b670ab3c993300be4bba9449f64aeb"],["/categories/日本語/page/2/index.html","44bd569c76cc2b09a445819e1aabe384"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","567f3b0169fb25da065324c71fc85b86"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","93b38db08deaddb3f648a037b4ef8f51"],["/page/10/index.html","8e441ed2ab9d86c37809830fe97b43b4"],["/page/11/index.html","fb513332f8e2077cbbd0cafd43553086"],["/page/12/index.html","c949b72040d7f90ffb62c70d0e74dd5c"],["/page/13/index.html","df74d14436a0ea65b63bf0451fd01dcb"],["/page/14/index.html","1ba9676a62e006cd29af8dc10f377e91"],["/page/15/index.html","0b00d79efe4200a3e3534bdb7c20b2fb"],["/page/2/index.html","7cc2240c4b6edaacd5a7386ef72ccc77"],["/page/3/index.html","0fa254bb9c909e474f6f7b84771c1522"],["/page/4/index.html","b509803f17e6bf7daa526884f24e6b10"],["/page/5/index.html","f16050ede227625990b7267b06ceeca9"],["/page/6/index.html","aa2dd946b49e743abec9da009617dda5"],["/page/7/index.html","6d0c2bbf92578fbea2b64a70e830e17c"],["/page/8/index.html","feafb6bf27e71e74263cb7c5ca602515"],["/page/9/index.html","66d13a28b6ac65955b56928d172bb177"],["/sw-register.js","b38fe36bf8f54bc10dc3f9aa40708cd0"],["/tags/10分作品/index.html","ad9dc1c304cec731fe57c5c242b25bfc"],["/tags/3分作品/index.html","281d7b1e79817d76517902963ea77458"],["/tags/4分作品/index.html","ad38e25c750c2c67d1ef09e51efcc5bc"],["/tags/5分作品/index.html","eb872d3bf79500ef18b465e3b223a5b0"],["/tags/6分作品/index.html","362d327b4a5ddd08aecfcd3710198e32"],["/tags/6分作品/page/2/index.html","3543a1a1751c3cffb8e0393d30f37c21"],["/tags/6分作品/page/3/index.html","6ff1fec7561426dbe85ea7e0fb06625c"],["/tags/7分作品/index.html","a9800e0e22ec0a102b6986039c8129fc"],["/tags/7分作品/page/2/index.html","02525660130e510b775ebc710f82256b"],["/tags/7分作品/page/3/index.html","7c03e7d300631a43f58920ae933b6c95"],["/tags/7分作品/page/4/index.html","39090d421d63a26a81930ae3ced8baf7"],["/tags/8分作品/index.html","831b4c8df5bc0cb2fbd983e99c32d8b2"],["/tags/8分作品/page/2/index.html","fda5d06a7a8f4721d0da5665657f3196"],["/tags/8分作品/page/3/index.html","bce6b3d2cbe86c247e24aeeafe7eff74"],["/tags/8分作品/page/4/index.html","48668f3fd773f30dd65628c7c66f1fc7"],["/tags/8分作品/page/5/index.html","540403d1f9c7ce1ed25ab32e62cc8bb7"],["/tags/9分作品/index.html","283a98543bc590a7986a050f27f3bf4d"],["/tags/index.html","1df5ad2df5dca40c70e866325437fced"],["/tags/アボガド６/index.html","3e407ac3ec2c6c9e707446b2c9032b86"],["/tags/三秋縋/index.html","3689154b0896ddc7f1f2cbfcbcbad68c"],["/tags/中國武俠/index.html","296b33d2d699167a80bd847a45f051ef"],["/tags/中國言情/index.html","e895c7122cbb6c2aa2c6334d14bd9704"],["/tags/二宮敦人/index.html","4fdb0e5f5640f09af21c03ca89e8a9d9"],["/tags/人性/index.html","d7f786d7b68daf24ef8c6aa90fc8e4d7"],["/tags/人際/index.html","1d066cac07ae689650901510a90f9afb"],["/tags/住野夜/index.html","b6efe26b2864deb7a2d176c28b2bfdf4"],["/tags/佐野徹夜/index.html","7bc7ef362cd90573022cb0d1eeda31ed"],["/tags/努力/index.html","db418cd216faab0c35b43a644cd0dd2c"],["/tags/動畫/index.html","4e1d01bcb96a8ae68f7a100679cb45ee"],["/tags/動畫/page/2/index.html","f55c6fa61141b4ba97663761cdcb4745"],["/tags/動畫/page/3/index.html","302abb4ccdbfe66e9ddc64e97b13469a"],["/tags/動畫/page/4/index.html","91e600ced8931c356c039e387a8b4353"],["/tags/原諒/index.html","d307029027437fd355111cd79c026e25"],["/tags/反烏托邦/index.html","12355088ea265b15c6b55b5685e5b980"],["/tags/啞鳴/index.html","9aba100ae4cf4d45290d98d15bfbf811"],["/tags/喜劇/index.html","756eebab587426bedbed32fcb3bbae73"],["/tags/夢想/index.html","b4a24481ef2457b33ae725cfece330f6"],["/tags/天澤夏月/index.html","03fd7277aa79bbfbd064e6a32babc00f"],["/tags/學習-N5/index.html","cc80f98fd08b4856e32da84bc41a25c1"],["/tags/學習-N5/page/2/index.html","f42a928e8e6a8882381aef923c64957a"],["/tags/學習/index.html","c7836c5cd7d83e9e27ee6bc9031f0c6c"],["/tags/宮崎駿/index.html","7db20c6cedce155d6caf32eccbffede0"],["/tags/小說/index.html","25731ddc671f882be695902a37591e78"],["/tags/小說/page/2/index.html","c374bb8d9e3f15c40b72e81b01c52b58"],["/tags/小說/page/3/index.html","6b2fcec8c98b102be0d2ca3d0628f005"],["/tags/小說/page/4/index.html","7e9ddac7c17bcc6c35a8d8b1d8339888"],["/tags/小說/page/5/index.html","27adcfa7087ee311ccdc799e6322761d"],["/tags/小說/page/6/index.html","393c8adc89679200ee295cf3f31a1d91"],["/tags/小說/page/7/index.html","324ac388251d917f0bda1d1bdaabc901"],["/tags/平淡生活/index.html","374614e76f3d2623b1433d1806be022b"],["/tags/幸福/index.html","43a46163c343bd3283c9fd9f8311d6e0"],["/tags/志茂文彥/index.html","8e5c31a5c8a3bc59b9d02699688d19e4"],["/tags/愛情/index.html","7c7374d9e8a6598eca73dd345defb5a5"],["/tags/愛情/page/2/index.html","68b0ac84cec2342ad07dced62fab2b0a"],["/tags/愛情/page/3/index.html","be6c63e09b578d3827f5f090f2d7a879"],["/tags/感動/index.html","45b7ca8f70f761306754f4f137a7eb52"],["/tags/懸疑/index.html","b818562d186f9c74b475b03cbd0b64e0"],["/tags/懸疑科幻/index.html","f6cad57ed052513911eaa52fc5a29dea"],["/tags/戀愛/index.html","d8e5870782b729493cb62db19869b7ad"],["/tags/成長/index.html","2b1bc71d85aec58dbc0c01f3d911d54e"],["/tags/成長/page/2/index.html","49ec1f9a7a12495ea6b423a8c7067d26"],["/tags/戰爭/index.html","946b654ed277f3982d6e04035aeeae75"],["/tags/推理/index.html","b60c59d47991ea46444b9cb8a19d4918"],["/tags/搞笑/index.html","e72e1c68e1c754fc8552f2f57e982a64"],["/tags/救贖/index.html","b96e923ef3918c0e10c95addba1238ed"],["/tags/斜線堂有紀/index.html","29473d8850ed4615b946cc7eb0302ff8"],["/tags/日常/index.html","3af37f1c2d0083666c1579aea725bc24"],["/tags/末日/index.html","48891fd657a0f41ec74e614d90911b1e"],["/tags/校園/index.html","bf0ff573d015e587df85ba3512decd11"],["/tags/武俠/index.html","6ea219801556c400068b802b8aad189d"],["/tags/武俠言情/index.html","e9dbff584d1f369b441c11e5fe74223c"],["/tags/漫畫/index.html","6bae9613c6452fd0873484f720ff463a"],["/tags/生命/index.html","831337421019c0ff6274e9b4676f184a"],["/tags/生命/page/2/index.html","b674b9609f5478bfa2682febdbf28046"],["/tags/短篇/index.html","3053b4254d4bd5fa749445056cdf0faf"],["/tags/社會/index.html","e3bad1888f437d27b00626b7a14be3f4"],["/tags/科幻/index.html","ec147c6f4dff70d6236d760841f8aaa1"],["/tags/童話/index.html","4e7347b4edcf997c0e35f567ff94fd07"],["/tags/競爭/index.html","0fce35e2677a7ae7ace27429755ae830"],["/tags/自我/index.html","1654c2ef0cf8ed9c5cbd15bcbdb5be22"],["/tags/自我認知/index.html","f187813ec1dca2e50bb21d11b225887a"],["/tags/葦舟ナツ/index.html","fc4c49d3b9594c1ab96f82ff473ed061"],["/tags/藤萬留/index.html","2cb5c1be426ae752fcad8d340922b416"],["/tags/親情/index.html","ba2dce8639290c4c91cf2e2d503384ef"],["/tags/雜項/index.html","b76580b7dfb06d60998d02e3d0780133"],["/tags/電影/index.html","09200f0f163b717ad512699d84b92dc1"],["/tags/電影/page/2/index.html","f6dc8807481b0330349ff52d88740568"],["/tags/霸凌/index.html","aeb5040b62c6d8554d19e3fb44f7f65a"],["/tags/青春/index.html","e93a45c8f6a19236b0a208f0fec32879"]];
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
