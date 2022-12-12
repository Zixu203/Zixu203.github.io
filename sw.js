/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","133140fddf56d48970560c774ebaca98"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","cf5e681377c869e127de08bc72cec6b7"],["/2019/12/25/Review/無法計算的青春/index.html","1ac5dc9257ac2d770c3eb683372421ba"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","58b81b819208aceed8516c1dc966c8e2"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","9faff333d2c317c65f6380d27ea26b44"],["/2020/01/19/Review/下雨天，不上學/index.html","fa22a9dd0d161bbbc176a975ee13b5c3"],["/2020/01/26/Review/三日間的幸福/index.html","f9276ef8a473dcef57b99a4697b4bc0b"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","14791fa88a38df9c62718083b70fa881"],["/2020/02/09/Review/青春期超感應/index.html","0ac332d2d71964e10fa9a54981e63754"],["/2020/02/15/Review/又做了，相同的夢/index.html","13d80b2cb25d088faa77351755cf205f"],["/2020/02/22/Review/回憶當鋪/index.html","a8d18d82ec299367b5108d635880b486"],["/2020/03/22/Review/不適合自殺的季節/index.html","ac9d92a24bdfcd087d9bd4a4df2cb6a1"],["/2020/04/26/Review/我們都無法成為大人/index.html","eea90c176326b4e29da5dd503636e52f"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9745c8cb2cbed59d83c8fc4bbb70fc04"],["/2020/05/17/Review/人間失格/index.html","33da79c6a522c61e336b3450d3c5082b"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","f336fe8a2116a79940ac3dd606bcbb3c"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","cfd50a28947abc8ee955cf0e73562006"],["/2020/08/01/Review/銀河鐵道之夜/index.html","ab177a33173a26dfa8d5d6e923a7048b"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","8b2c34047f810509dd20d2eba3db1b50"],["/2020/08/16/Review/15歲的恐怖分子/index.html","765c8ec5d930aa80278394529540c212"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b08a1bd48a338d28b3212c07bf56c0bc"],["/2020/09/13/Review/羅生門/index.html","0bed0da38c8904a42fe35e6a02842ed0"],["/2020/09/20/Review/闇夜的怪物/index.html","690d310c046c7ef96d1595f80a86c971"],["/2020/09/27/Review/14歲，明日的課表/index.html","d96a86929c70330dabb01bb6d0c98c59"],["/2020/10/04/Review/致十年後的你/index.html","5b53e4ae3b199658169a8b49ec157008"],["/2020/11/08/Review/滅絕之園/index.html","b35fbbf45297b7298e896cc045a8f993"],["/2020/11/15/Review/將愛拒於門外/index.html","0fab9a44e7100fd8da0c4b54d35f19f0"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","2ac1d33223330852a7db725a7b311dc5"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","f5fd77ae83b11189eed2e119053fcabe"],["/2021/04/22/Review/道印/index.html","3230b9af5e5b6c2557e1191e138c8927"],["/2021/05/03/Review/戀入膏肓/index.html","c7c407d90d0dfcc47f856424aaf856b8"],["/2021/05/10/Review/Dice/index.html","b926ca491f0940aaaf701a2d460d5bac"],["/2021/05/15/Review/魔女之旅/index.html","9cfdea3fc3f363c0e091c83296b4a018"],["/2021/05/28/Review/戀愛寄生蟲/index.html","9ecc6a42c58a5d0c77182c3459b050b7"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","1c0f9a50f3555b7e8f1f71eba898a877"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","8a67f71f5483af8069edd380b5ff767a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8b1ccb33f576f1fd962ea5bdc7dffc4d"],["/2021/06/05/Review/流浪的月/index.html","bd9e9cbc2e29147ead763867a857abf0"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","0321f5e36ccf7c4ccf218c6e1670dd28"],["/2021/06/13/Review/第一人稱單數/index.html","b520f4fa02c2eb5a6913a6c12df50943"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","742399ceb284481f901e5bcd6587ec6f"],["/2021/06/16/Review/願你幸福/index.html","a62d00602b0f089b341a85575d83ff88"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","ebb05f98c41e0566ec04dbcb9929c42c"],["/2021/06/21/Review/神隱少女/index.html","0cf835eedc152e0597aabd2a02bcd9d5"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","b86e3eea92e86600e51c75d633a6fc79"],["/2021/06/23/Review/天空之城/index.html","867116d0a28e3f564c86c9a8376e6010"],["/2021/06/24/Review/魔女宅急便/index.html","80ef45afee2f25078b76c7b5b9b6b4ac"],["/2021/06/25/Review/借物少女艾利緹/index.html","c0894cc60c568f8d0733bc32e18896e6"],["/2021/06/26/Review/魔法公主/index.html","84ac3877b95e57473ea3c59331b2fdd5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","bde3773f8f2fc4a40e412f36095b39c4"],["/2021/07/04/Review/飛雪與劍/index.html","5a002b00a8a90a855a11234d4cce9d2e"],["/2021/07/09/Review/地球防衛少年/index.html","9fd205e59c55e30866111af0ff45f901"],["/2021/07/12/Review/Angel Beats!/index.html","9b54ca4c37cbe7134725020548f95cd7"],["/2021/07/13/Review/Clannad/index.html","4ab8b32d447481ab5cbc74aa90e4c223"],["/2021/07/15/Review/AIR/index.html","5179d5f07cb2efb667760348955cd302"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","20e77b949f6b640c457484c0ae9ccfdd"],["/2021/07/15/Review/螢火之森/index.html","7a1425aa4ffb0647c67dfa492f508198"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","23d5238a28751cf82f4db6991c415a0e"],["/2021/07/17/Review/奇蛋物語/index.html","7e4f9529a14d2b252434b67c60cb7fe2"],["/2021/07/18/Review/Vivy/index.html","8f223a09d4219325543e4727bfe37981"],["/2021/07/18/Review/請妳消失吧/index.html","bee7725d8d1aaa8e147d70215a301387"],["/2021/07/19/Review/漣漪的夜晚/index.html","dceba062269540a07ffc234f99d6e4c3"],["/2021/07/20/Review/月色真美/index.html","83d5f76a079590be09f8837659e70b4b"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","ec1a06efbf36cab6b0b8fd268fbd4e96"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ac9df98dc01207695ea5ae3f4249e33c"],["/2021/07/22/Review/罪惡王冠/index.html","7eb35580b65510175e45d755ac321f3e"],["/2021/07/23/Review/弱角友崎同學/index.html","3280516ba9821b58c26c9d7b5e63f514"],["/2021/07/23/Review/惡之教程/index.html","e6fbd73b8d31cf0de5608c2ff7cc41e6"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","38733c7e0e1287efc5b6ab8292fe88ab"],["/2021/07/25/Review/魔王勇者/index.html","c185225849b9d794afd9627fedbfb626"],["/2021/07/27/Review/一年A班的怪物/index.html","74acdfa4f5fdec1477dc906e2201362a"],["/2021/07/27/Review/奇巧計程車/index.html","b34300ac38dcf3f40f549632b6663c45"],["/2021/07/27/Review/專情的碧池學妹/index.html","dce97802853fa7094cb268c3e8896eb0"],["/2021/07/29/Review/只有我不存在的城市/index.html","a790ce75d6816df04187e61eb2177601"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","249de5e9d6afae5b44777a0fc060bdd3"],["/2021/07/30/Review/可塑性記憶/index.html","7f59622861108c9b409575d81537ea64"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","06aaa8b992012f5b9fd8db5444eb2eb0"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","dd0156d3495a5c1258349342a400262b"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","f00e05dd22b98202a9b8cb94752d93af"],["/2021/08/25/Review/清戀/index.html","5467c32b86b03c2f6bb2d43cc1b238f4"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","cfbc589b96b709122fca274fce5eb109"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7977861e57103bc0bad0c25e350baef6"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","3ae42b808bd1be303ff9161e34fe455a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","0f80b3bbf8c073432889170c8646ced0"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","7484d5764ed371d7e0c809ae83547f60"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","ae4475523d3a81a1e705b22274d3f5ac"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","5bfb15c1ac285e86ca9934b81e8f9842"],["/2021/10/16/Review/龍與雀斑公主/index.html","8950978381bc0a83d8537a01e300929d"],["/2021/10/19/Review/孤狼不想開後宮/index.html","6f4809ba7647f2d16818607007356108"],["/2021/11/13/Review/徹夜之歌/index.html","e6d7538557f239f1830863b4eefcec41"],["/2021/11/24/Review/武煉巔峰/index.html","d12a1e1a0e165057908b3a3444070ea3"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","37bde631b59c06bafb774ce0b773b2bc"],["/2022/01/28/Review/神醫凰后/index.html","f8ee2761c6b527826a986580e4b3fcc4"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","3218b01f64e0360c3d4e3fd0219137eb"],["/2022/02/13/Review/夏日幽靈/index.html","50b3e56179cc00c25b87460b7f8b9d5a"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","caaec1de7ecdeb65aafacc2379de15ac"],["/2022/02/26/Review/賽馬娘/index.html","78ed78000e6f402004168678341a6a38"],["/2022/02/27/Review/大欺詐師/index.html","b170e05343bcabe2e74e9fee5c5e8ee2"],["/2022/02/28/Review/前輩有夠煩/index.html","eed4fe62b9a4c051426e9edacd32227d"],["/2022/02/28/Review/碧藍之海/index.html","5ea10fff794e8003c059f9ad00b504ba"],["/2022/03/05/Review/落第騎士英雄譚/index.html","c19c7c3e5b7e7837723e9fa624ad39de"],["/2022/03/06/Review/Another/index.html","ab60ec2871e76ff5b7ab8ec82b53811d"],["/2022/03/06/Review/入間同學入魔了/index.html","ab69dc79621b0fa4bd6ea22b986d4aea"],["/2022/03/18/Review/再見宣言/index.html","8a1d4de286ed5fd2085769c3b7cf2c8f"],["/2022/03/23/Review/生若冬花的妳/index.html","9917f625d15496f384948199ec13e6e3"],["/2022/03/25/Review/天之弱/index.html","99e47969e49cd1885f9ed2925bc16ec4"],["/2022/03/31/Review/滅了天道之後轉生/index.html","876037f3a6753a3842525a2687a4037a"],["/2022/04/30/Review/泡泡/index.html","3bb396f43f809c3190e0be0d0b8c63c6"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","4e293957baa0813415962e0b90bb20d9"],["/2022/06/13/Review/偵探已經，死了/index.html","1018e8e1cb87d8c76ff10c19fb9e45bd"],["/2022/06/14/Review/黑色子彈/index.html","2a18c7ccf20ac19c15b0cd8a7fa83df2"],["/2022/06/15/Review/黑白來看守所/index.html","b60f8dedba5fec5c02b9942f78c7512d"],["/2022/06/16/Review/虛構推理/index.html","5d61a2acfdc0d92b2f7b8ec0f15062b7"],["/2022/06/17/Review/戀愛與謊言/index.html","ba41f1c520fb3e80325c57555fb6c430"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","bf6f76c1b5a18e3972201502e53e4a11"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","be512d8f13592234646b7b03e9cdbbe9"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","4708cfb4f5374bc8ee5ebb9fa3acbfa8"],["/2022/07/03/Review/Hello World/index.html","647a43df772970935b79877d8ec92a55"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","7f9fec8c716dbb549db50e96537b03d5"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","dd100f81b22695037877150d1cf3a35e"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a885239010e78fcf3bd387edfc669e71"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","bbe63fc47a455eeec40f82fd175d803f"],["/2022/07/16/Japanese/動詞分類/index.html","8ad82ce12ab25f07ca85d6824883faf0"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","0f8e31d5079d5d85bc2f9dfe4f85bb41"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","7d612cca5345ec63559159faeafddb1b"],["/2022/07/17/Japanese/音便/index.html","98a5030a690fbc7749fe3d1ae1e4baba"],["/2022/07/18/Japanese/動詞 時態變化/index.html","b261159a745d8157ed0bbf1a3dd2a9b5"],["/2022/07/19/Japanese/助詞用法整理1/index.html","1401a72ddd5f43041c9997ea4b1e7617"],["/2022/07/26/Japanese/助詞用法整理2/index.html","749184ae5205b914b075494d4f5d06e9"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","196d47019b1e44ef96a5befc039ba006"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","5f4fc7d3645aa8d924024ce96a45ee92"],["/2022/07/30/Japanese/疑問詞/index.html","97c0c5a8d86b8f92aad556f637177e49"],["/2022/07/31/Japanese/助詞用法整理3/index.html","a0b5561bcf6ed50aa682b96fcbe55c08"],["/2022/08/02/Japanese/副詞整理/index.html","728e65db3956b329ba6c0c2ff066517c"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","abb454fd28e381c7d09185ba39b4969e"],["/2022/11/04/Programming/Data Structure/index.html","f7555e5a81c9f1770990fc2d3be0428c"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","f0e462dfbc6855c5231d6c112d1d45bd"],["/2022/11/22/Review/組長女兒與保姆/index.html","005b92971f82d1185d4c845aa87b0ece"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","f105ea100d6e9a078c685fc1fb720789"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","c7bdf2a73817bda9df0ba29b23771d12"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","33c46a50e6443f896b58c55a20e4916b"],["/404.html","55c2c303a6ab84a3d7affa108e661cbb"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b767f80a961dd612a7038f3424e316e8"],["/archives/2019/11/index.html","37e1911a6c8f3ee4abf49190bea1f84a"],["/archives/2019/12/index.html","1e69b5c534a44196468638c6d97f6a38"],["/archives/2019/index.html","8eef92f6e96dce19043d52bae4f44b04"],["/archives/2020/01/index.html","3048adf4be5d161031d50491b3a54c36"],["/archives/2020/02/index.html","28aaf34604b6e06592d0be43a7d0fe3d"],["/archives/2020/03/index.html","40d5351bc8d70fc74f96d911ef732693"],["/archives/2020/04/index.html","1fa26e2a368afbe87429cd647f6f6532"],["/archives/2020/05/index.html","48f4d78a241217333a6a4e39a6ebc4dc"],["/archives/2020/07/index.html","f78ce90e5a99e81a5ac2cdc7ce9848da"],["/archives/2020/08/index.html","848ef6f6782017ac01a1421fd9acaa7a"],["/archives/2020/09/index.html","8e7398b69d9500c1fbd65331acb7b0bb"],["/archives/2020/10/index.html","33cd99cee484237aa8b3244108a9e2e9"],["/archives/2020/11/index.html","52a73bcc327451e29118e17bcc5f7e5f"],["/archives/2020/12/index.html","748ef7b642c6b6ce38f5b7049b78d5a6"],["/archives/2020/index.html","ad62a954911473250f6c35b40cbefd1f"],["/archives/2020/page/2/index.html","6f2d8c439aeb96329199b2c4759738ba"],["/archives/2020/page/3/index.html","eec2c62d64ca7da4fbbf0808ae28d983"],["/archives/2021/04/index.html","afa1691696717165ddfa6c23783464d0"],["/archives/2021/05/index.html","503fa4a635cc7e48c460901fe6f3864e"],["/archives/2021/06/index.html","39dd39ed891dbb6bd45a6d908b6a8ab0"],["/archives/2021/06/page/2/index.html","285226d7cf090441d2fba80c5c53effd"],["/archives/2021/07/index.html","64070659a471e2173ee4a0b9976cb3d6"],["/archives/2021/07/page/2/index.html","98125fd3250dc3b1c792acc4449028e0"],["/archives/2021/07/page/3/index.html","d6d88c4ce786c78795759d3a9619524c"],["/archives/2021/08/index.html","af5b6653ffdb334d072211e0c1e6f4a5"],["/archives/2021/09/index.html","a848ee0b0c512f5c6aabafda7e8e675a"],["/archives/2021/10/index.html","18a080c53c4f26a355c7f748d2ba1ee1"],["/archives/2021/11/index.html","21b67cb5507f0e82fd94caaafef4ed2d"],["/archives/2021/12/index.html","d9e42bd78b3719960e482629e005d643"],["/archives/2021/index.html","bbbd3f46e536d0893f8d8cab97c25013"],["/archives/2021/page/2/index.html","27930a107dcc296f75a92f042796671c"],["/archives/2021/page/3/index.html","efa68bf2bf28ad08e6b92a797d3c3374"],["/archives/2021/page/4/index.html","939f92f88b797183be0240daffb9e5f9"],["/archives/2021/page/5/index.html","c6eb7adf6a2895630e24eed8fb69e28d"],["/archives/2021/page/6/index.html","c6ea9a5a390d5c0e15f691debd6a08ae"],["/archives/2021/page/7/index.html","d2491c235cf8627786c7e80044c7815e"],["/archives/2022/01/index.html","833c06c2926680c704d7944555033ee7"],["/archives/2022/02/index.html","df4820322ce3ba9ea169c36d4b837b3a"],["/archives/2022/03/index.html","daa8db042e42e88ed3272acd1f5cd4c7"],["/archives/2022/04/index.html","e1d62e2a2c02c12a496b16a1c957220c"],["/archives/2022/05/index.html","6c8ddc0a2a48690acffe3d33bf0e5916"],["/archives/2022/06/index.html","2f10c3f250380f16a0976bbfbfff3f94"],["/archives/2022/07/index.html","7d80c4b1f1b3f9e02994cf8e1e7847ea"],["/archives/2022/07/page/2/index.html","256079c40dc8079f79699adda21aed67"],["/archives/2022/08/index.html","07fccba95ee192f6585b6dadaee640df"],["/archives/2022/11/index.html","b0065946fc5b383056d8e3a3424296a8"],["/archives/2022/12/index.html","6d2d9fd7322d093e236ce63984aa4498"],["/archives/2022/index.html","3cd055354c160b49713b640755f429ec"],["/archives/2022/page/2/index.html","bac594e781c6cc1374da8a27d06cefdc"],["/archives/2022/page/3/index.html","3cecce6293130f479b6f8aaa0caeb3a7"],["/archives/2022/page/4/index.html","ac916e21955505710724b1e15c934953"],["/archives/2022/page/5/index.html","f1400ece67af95dba9a52f70e6638004"],["/archives/index.html","ca0cde6920cf6c7b7434e008ea3b6130"],["/archives/page/10/index.html","82946f594128d715b2cbcca667e6a0c0"],["/archives/page/11/index.html","b1c9640f0ccb5ae5bd5b37df3c04f013"],["/archives/page/12/index.html","7247223fed9714cc0991dce9fb104264"],["/archives/page/13/index.html","7f65c51479596dc2a7b810b90f250a0e"],["/archives/page/14/index.html","85862b74aeca51fdc1b4c3fa55a12974"],["/archives/page/15/index.html","ce84a3c53c72dfb7e8fb521af644ca96"],["/archives/page/2/index.html","06266bb197e21c5abc583b8e54179015"],["/archives/page/3/index.html","6204a60b7cf16f97a8dd588fdb1dd697"],["/archives/page/4/index.html","016e660f497835197ee0f1bad9989fb3"],["/archives/page/5/index.html","64ddec1be693c4c05891ce7b626f9cf4"],["/archives/page/6/index.html","0926190997590709f6046ab2a22adb51"],["/archives/page/7/index.html","773c48bbd584340848be3bd00e348efc"],["/archives/page/8/index.html","b9beec369a1deab68f9b3b134d7a97d0"],["/archives/page/9/index.html","a46296343c0656c47868024d192339c9"],["/categories/Programming/index.html","ef6999b324597cabe1a4930ad6ae1955"],["/categories/Review/index.html","c0822d96a421719aff2f7c664eb5767a"],["/categories/Review/page/10/index.html","c728540aa84b486d4a3de61eddf4b64b"],["/categories/Review/page/11/index.html","fdde4ec994d6d8a68c253c8fb86c28d1"],["/categories/Review/page/12/index.html","66befbac317ecd034e59389d8822c21d"],["/categories/Review/page/13/index.html","4b811110e856f2b65aaa6fc9af9de006"],["/categories/Review/page/2/index.html","5d1204f99d5a05acf164eda37b518298"],["/categories/Review/page/3/index.html","c1129e11453995dd33ba6925c9554f62"],["/categories/Review/page/4/index.html","eaedeecf87504c80d0f5b7b873519167"],["/categories/Review/page/5/index.html","a0be0f9a97a8a94b749ea7a6a681bf45"],["/categories/Review/page/6/index.html","789b6f4280a45f1c0289fad75d8c6725"],["/categories/Review/page/7/index.html","5e0178158369b39772bce164e14560f8"],["/categories/Review/page/8/index.html","ce2f9ad8cf69032adcaa190b2c97b322"],["/categories/Review/page/9/index.html","d173f7c335a7c88703f08a58415725f2"],["/categories/index.html","ab207f8ad178d7d10c9b36f1aea0fe58"],["/categories/日本語/index.html","ab9cffe48e205e6ff5cb2e50c426a84a"],["/categories/日本語/page/2/index.html","c74e3a216ff4f87c3bdd3ed1b92404ee"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2b79e3b470feaf4f01edc542a98ac35b"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0de230409c1e490bb3d963794e25863b"],["/page/10/index.html","77925e15bae7ca9d64896e165bcc9457"],["/page/11/index.html","df77eb869f6eea9f8058185c836a7075"],["/page/12/index.html","31038d20b91394b49fa827e5dce4f516"],["/page/13/index.html","46b7ff7acd0e4963f7662cdbec56e595"],["/page/14/index.html","8fb277cd2dc35b9a6398ba11e34c99f8"],["/page/15/index.html","627cc230ebfd30499d03edf2f3967bd6"],["/page/2/index.html","40a4d386b5760a350e8ac66e3232a63e"],["/page/3/index.html","cb55ab0fd2deeb2ea4f4e78fae525684"],["/page/4/index.html","06c3cf77956600a2d5818b74d79adec5"],["/page/5/index.html","26cadaf45ae6130a6760972f59b5a2dc"],["/page/6/index.html","46e2187b1d54ecf0f367ce9968a65a62"],["/page/7/index.html","21b1032ea9493aa96fd54695bcb6cfb5"],["/page/8/index.html","f34bb8cf335bc34276f1e146413c9678"],["/page/9/index.html","179314d0f0210d7e68edb4093e53a7db"],["/sw-register.js","ed8ac2b0498a8b3eaf9197f0a147b78f"],["/tags/10分作品/index.html","c1e34e21dd71b3323166baecaa7f3d5a"],["/tags/3分作品/index.html","3063a3747fbcb1e68d4ef49b4c359038"],["/tags/4分作品/index.html","f33c326bcce708e6407abf78f7351643"],["/tags/5分作品/index.html","e9d393df631029345c198067c5d43d22"],["/tags/6分作品/index.html","1b4115a86617acd8147f1c8573729cda"],["/tags/6分作品/page/2/index.html","466ade597423af1c23b759901a2fe8a4"],["/tags/6分作品/page/3/index.html","c2f97235c4ca9e0f0671017e88dc72aa"],["/tags/7分作品/index.html","1e50a4594b5bf5a34e73f2c014e14981"],["/tags/7分作品/page/2/index.html","3c1921bba1abec391eb025479da2ab82"],["/tags/7分作品/page/3/index.html","b9daf78ab0cc881426d62c872347bc93"],["/tags/7分作品/page/4/index.html","b357812936287abf52dfe79602a23687"],["/tags/8分作品/index.html","52ea8bd686b4799a67ecbf0b66870f5b"],["/tags/8分作品/page/2/index.html","9d2b2d6df785a3db80d27e41893784e1"],["/tags/8分作品/page/3/index.html","1d6747da318ceefeb4c5b6a9cd87f335"],["/tags/8分作品/page/4/index.html","eeddace09a1769279b051da9909ea8fa"],["/tags/8分作品/page/5/index.html","1525f26201d2edbbae05a3c7e7c371de"],["/tags/9分作品/index.html","4bd349049de52c30e27dd86ab7e1ad24"],["/tags/N5難度/index.html","e00a53231f789edbe33fee251578c1ac"],["/tags/N5難度/page/2/index.html","97e4281050fd7cf82a6eff1e4d28ae70"],["/tags/index.html","17b010fd17eb7344a53b39f8058ab395"],["/tags/アボガド６/index.html","4bf2ea5ff0442cc9eaf085a7bfcd2735"],["/tags/三秋縋/index.html","a2134ce0c8b59aa00465c76d0625e60a"],["/tags/中國武俠/index.html","d2d76afe7c05c83d9fa6758994665ace"],["/tags/中國言情/index.html","1be24e6a9ef65cfa273c592f9b907c92"],["/tags/二宮敦人/index.html","0be203a947e7e7ae8a616ef674499ed5"],["/tags/人性/index.html","11d9e060ebf1c7a43f0ef2ddb13c8dc3"],["/tags/人際/index.html","1adecd1249def74868f000052c01df0f"],["/tags/住野夜/index.html","247122043a10dfc9790b9d822551e45e"],["/tags/佐野徹夜/index.html","68ea27b3179364363974db0389cd67eb"],["/tags/努力/index.html","9be34cfa7a46b7f5a5705193f5e84a56"],["/tags/動畫/index.html","1f54559a3454499a7c1ddeb678cf4054"],["/tags/動畫/page/2/index.html","d890561b9332a9ed32e723dc79ecdeb2"],["/tags/動畫/page/3/index.html","f34df45a6076e5c4c3d18a3470300226"],["/tags/動畫/page/4/index.html","d3ffb30bbbd3bb805fd82644d2b5b204"],["/tags/原諒/index.html","eb11301796de3b0cb3435e0444bee3ba"],["/tags/反烏托邦/index.html","08707de17c67925717eebd85c5d0ab50"],["/tags/啞鳴/index.html","52441d9513fac9e6a9cc3632eb5e5c5f"],["/tags/喜劇/index.html","944355c86efabd72351026636c6ddcef"],["/tags/夢想/index.html","4df6e41f9b652c8b8489c50795c1e818"],["/tags/天澤夏月/index.html","2140212c5851a43cb2bc5a1201d2fb15"],["/tags/學習/index.html","ca009eb20d5f89f7503fc6d9239e0ef2"],["/tags/學習/page/2/index.html","760eb7558c3d5c825411bf63007e51c4"],["/tags/宮崎駿/index.html","97880faefe1bb783b29ecf6f8c8304ab"],["/tags/小說/index.html","46231ae388901237e2ed97b32888106f"],["/tags/小說/page/2/index.html","76530b222b49cd496a36507c4a8aedae"],["/tags/小說/page/3/index.html","122af95b9e7d82fa4aa6d2791d6ed4bb"],["/tags/小說/page/4/index.html","aebf1c7fbad4dcfc6f79b05f815c1e5d"],["/tags/小說/page/5/index.html","a516b70921efa90a3e19eba940755c63"],["/tags/小說/page/6/index.html","10230bc5ebfe2d4b4f412f049afd2bbd"],["/tags/小說/page/7/index.html","d60c3294819b150836c6f4892eaa4356"],["/tags/平淡生活/index.html","1da8d3c23cc53d02163e3a70fe547bc0"],["/tags/幸福/index.html","4c5ccfb3d8aa17974ace98722b4375f8"],["/tags/志茂文彥/index.html","c79679cde81bdeb8058f2150118963a3"],["/tags/愛情/index.html","4c4c5645f612a374522c26ab47328ca9"],["/tags/愛情/page/2/index.html","76aaa8a9fa9c115ad8c954b846333111"],["/tags/愛情/page/3/index.html","6df4b394e268ed7f89fba34e967fd0f5"],["/tags/感動/index.html","af2b3731163b547a7d51fb1d1fada44c"],["/tags/懸疑/index.html","1c3358f7e79b30225af3129bcfad222b"],["/tags/懸疑科幻/index.html","ce0e90bdff5413ebb8a5fd0b0a49853b"],["/tags/戀愛/index.html","7dbcce7a258e55a5465b187e9687daa3"],["/tags/成長/index.html","68bc73099f741c6cc8c71859b3e515d4"],["/tags/成長/page/2/index.html","2ddf17eb98d7945ae79a4824d7549078"],["/tags/戰爭/index.html","a3acea8b9d1e110102f5f2337809d566"],["/tags/推理/index.html","fff7c96839d78dad2a35a39bf03eae80"],["/tags/搞笑/index.html","001be9ff24e417f77400fa42592141ba"],["/tags/救贖/index.html","93b6a36aec3640fc07e0a7d88a2632aa"],["/tags/斜線堂有紀/index.html","263dd50875d8b197111e62fda3195e2e"],["/tags/日常/index.html","baa6530afc2d08b57fa66ac52ca7f6c0"],["/tags/末日/index.html","b66432042c47e6640429e859e5903cd1"],["/tags/校園/index.html","609a9559ac1dfc1ceb1c4924853f8b04"],["/tags/武俠/index.html","99bc626947858305c0df9c9d5306e955"],["/tags/武俠言情/index.html","52c9ba745904bdd03723a0ddaecb9d56"],["/tags/漫畫/index.html","d176ab1543768bb28dfb09bc5cbc70ed"],["/tags/生命/index.html","d845630a0a48ab3c53f7396dde8e12a0"],["/tags/生命/page/2/index.html","d781cd165d15fab3fbe6f83834be78da"],["/tags/短篇/index.html","e5e204223f61db44ee39cee909e39754"],["/tags/社會/index.html","e46e015b8ee3f9af4b59a921066397af"],["/tags/科幻/index.html","d62b7c8a150a7b478be64319dfc2c5d9"],["/tags/童話/index.html","3f816bb1954552ae29f44a44064c18e8"],["/tags/競爭/index.html","d89345983960473e84328735af2d7f50"],["/tags/自我/index.html","9376346506f688bdfa76f5cc8c548a45"],["/tags/自我認知/index.html","6b949b24b6e8d71f14a406bd80c6454b"],["/tags/葦舟ナツ/index.html","77cc69787bdc513e7275bd2825a23f4f"],["/tags/藤萬留/index.html","e568d99e033d9475601d55b4cc97f834"],["/tags/親情/index.html","5431e1ad96a4e95a7455b1eba1c181c3"],["/tags/雜項/index.html","5a976e0845cac22b25674cc1f43037a3"],["/tags/電影/index.html","28c4a0b7c11aeeb04926671e394dfe99"],["/tags/電影/page/2/index.html","6ded32a9e6b18942c30c4ab7523a7de1"],["/tags/霸凌/index.html","b98f5d3887482ea8f38c707be8e2b68c"],["/tags/青春/index.html","740586f0b9680484a6bd3979eafd9a6a"]];
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
