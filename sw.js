/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","ab369913958ae53b2b097f30e097fe32"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","22c3cf9fd531d4e2d25894975a465358"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","5873c60ca9c3859fc67fb830aceecfd3"],["/2019/12/25/Review/無法計算的青春/index.html","a5448370006a381beaadf28590130786"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","61369acb7791ff727638e49b32335299"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","9a6294f489925216f95e24f101bf411c"],["/2020/01/19/Review/下雨天，不上學/index.html","527cff14d571a52d9101d17a7d3ab2cb"],["/2020/01/26/Review/三日間的幸福/index.html","fa3bd677f9850f3dbc8c7dbba9e2a735"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","3ca06bfa1778aa90db16a4cde2748f3c"],["/2020/02/09/Review/青春期超感應/index.html","e22d1e7935eb4f88ef0320139178bdd3"],["/2020/02/15/Review/又做了，相同的夢/index.html","f5cf49f9ed07bc146fcb673495fdd40b"],["/2020/02/22/Review/回憶當鋪/index.html","8a61189390477d05f84e337d2d32b6c6"],["/2020/03/22/Review/不適合自殺的季節/index.html","cf97f905b49dd3225f4215ff5c36b0a7"],["/2020/04/26/Review/我們都無法成為大人/index.html","4f4d7ffa4798d6635f75a54f41bbddfd"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","58e55b1f80a246cb7fc06b690bbb7734"],["/2020/05/17/Review/人間失格/index.html","c556aae7e302cc543a988bce71feed1d"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","b1f0f7e6431caff5035e84b2e3987d5a"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","71dfa40818b9a43488b48e4a5421c254"],["/2020/08/01/Review/銀河鐵道之夜/index.html","344b2d557f186117510b8cd37b1a8415"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","15cb074fadf882c4488d21d51da28d90"],["/2020/08/16/Review/15歲的恐怖分子/index.html","1ddc193f45a4b1a5412483d82a5513df"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","ff22a16d2919be11608a285ee3d443ef"],["/2020/09/13/Review/羅生門/index.html","69e905c9b991e00e5a6149d2924569d9"],["/2020/09/20/Review/闇夜的怪物/index.html","b3cd1c55b6f050c9b4d42d193781049e"],["/2020/09/27/Review/14歲，明日的課表/index.html","f24d3cfa086b78150e59632b675e677f"],["/2020/10/04/Review/致十年後的你/index.html","5a7dc489a823186d995915bdfc37b4b6"],["/2020/11/08/Review/滅絕之園/index.html","bb1e806bf36d8826271bd2cdbe129d43"],["/2020/11/15/Review/將愛拒於門外/index.html","670129c8fa03956b58deada49e66ee8f"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","6594d4e8f54ac4b609d3fbce946fa81f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","c3718131e156b77e7c42271258baef6c"],["/2021/04/22/Review/道印/index.html","67d6b53352e0a6ee1c91987744b28460"],["/2021/05/03/Review/戀入膏肓/index.html","5af853dc6d0ab9dd0c36497fb9da7d9a"],["/2021/05/10/Review/Dice/index.html","458643bdf0571d33503337929ff42936"],["/2021/05/15/Review/魔女之旅/index.html","fa47d9e1c5ef7a2df26ace7032ddc0c1"],["/2021/05/28/Review/戀愛寄生蟲/index.html","83e649af86e0ac57ec72b45e694be209"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","bbfba0b1c4596e1d8109446639344f6b"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","5f1ab53205faadf9b96e9d27e1d510bb"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","5339a1090eafb545adf17699f8583524"],["/2021/06/05/Review/流浪的月/index.html","89a910e5567373d3adda9e014aaf3b0b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","757701b75a8fcdc6057fbf566a2657f1"],["/2021/06/13/Review/第一人稱單數/index.html","d124de4efda93e86fd812e4b6d0ede10"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","47f18c3f3939304053ed88ef51fc814a"],["/2021/06/16/Review/願你幸福/index.html","f9ab7fc07c6a8ba5f7053279b721196f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","2724c97207234abbe46c7ceeb36618f2"],["/2021/06/21/Review/神隱少女/index.html","a6de09e57eb477d2fc1a7e2c602c15c7"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","4d283a61dcee592b4bd3416d728f0bea"],["/2021/06/23/Review/天空之城/index.html","f7384a37978579925a5246e1c5dbcf99"],["/2021/06/24/Review/魔女宅急便/index.html","c2b88d325f106f631063a4c774790175"],["/2021/06/25/Review/借物少女艾利緹/index.html","9805015a0709f7d1fbc66a0e6ddd8d18"],["/2021/06/26/Review/魔法公主/index.html","f49cbeadcebb41b86967caa499b60dc3"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","8acd28becb2b4d403c1f622050c75ba5"],["/2021/07/04/Review/飛雪與劍/index.html","957f4153a3c3a03092fe0eaa375a8c95"],["/2021/07/09/Review/地球防衛少年/index.html","a447b029fc65d8b252a62120d0325615"],["/2021/07/12/Review/Angel Beats!/index.html","20ee91091a6ebc3757f8aff1b6607b4f"],["/2021/07/13/Review/Clannad/index.html","1339afa9b17a7cb7dfbf705c4d2a77c5"],["/2021/07/15/Review/AIR/index.html","292d616d9e61c35ef3d1913004cce121"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","5626df36e5dfa711918eb7bc220c09ac"],["/2021/07/15/Review/螢火之森/index.html","36fb01c5b8a77e184634ff0153b2e2ed"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","7e352ceabf3261f7d3da48e68d883d5f"],["/2021/07/17/Review/奇蛋物語/index.html","128176a08f51cc39f934f8809225c5e5"],["/2021/07/18/Review/Vivy/index.html","a90ad0fd81375620fb296219140324a6"],["/2021/07/18/Review/請妳消失吧/index.html","0e0e8952dcc5de197cfde1c4ad16253e"],["/2021/07/19/Review/漣漪的夜晚/index.html","93469cfe991e655ab77d783ccef212dc"],["/2021/07/20/Review/月色真美/index.html","4d3c1ca9cc3b4e79f6c4ba5191f3008e"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","8b54052de92eca943a98057d9cfb1ff2"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","6672f1c77cba69355f8d500de70ed7e9"],["/2021/07/22/Review/罪惡王冠/index.html","d66eb986bd6734789bba60de6e913f2e"],["/2021/07/23/Review/弱角友崎同學/index.html","9a823c9272e2fb251290a873456658b9"],["/2021/07/23/Review/惡之教程/index.html","55e656a14381070ea0870cd309a9fba9"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","1cddb2070bd08c211f876de264263129"],["/2021/07/25/Review/魔王勇者/index.html","0fc7718094cddecd69303ba8d82fe60c"],["/2021/07/27/Review/一年A班的怪物/index.html","82b5732cd728e9a1551bd8e449591401"],["/2021/07/27/Review/奇巧計程車/index.html","675a3922421e11082d8fea8903ce7d66"],["/2021/07/27/Review/專情的碧池學妹/index.html","aba8263d9a9c5ab3c3b885f95875fd4c"],["/2021/07/29/Review/只有我不存在的城市/index.html","5dfc48cc4b87f95da17a866aae0b87c1"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","ae43324b112709a2cc83252877d93108"],["/2021/07/30/Review/可塑性記憶/index.html","9f3127513cae5e2cd70aee7137cebfc5"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","99dadce005aeb206ab48dadba5b1d5a2"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","856da44e80a7d9b416952f4685ac3ab0"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","a6d562a079ccfbe46a5b977e66ab1f0c"],["/2021/08/25/Review/清戀/index.html","d12469d9fe421924532b2c3ed5695391"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","c4b8708d84d5c6a602823ad3986070af"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","e3d66c92259919ad07cc02e72e401c6a"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","532599a49ea73a9fb974123ff248a8da"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","ab3b484131d305b688bfdf127ed3dec6"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","fbbd1898595cc1e5a8de7d41912b585b"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","8d5adda844285aecfef59313f3ebdea7"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","1b2f0d9b59af53f3544d84440ea5f2af"],["/2021/10/16/Review/龍與雀斑公主/index.html","e2966d22d95f1d9e03ec1be689990260"],["/2021/10/19/Review/孤狼不想開後宮/index.html","c5a38da3da04a22d16e9c5d547060e6e"],["/2021/11/13/Review/徹夜之歌/index.html","2c82d11b46c80e545b59aa56acbc9c84"],["/2021/11/24/Review/武煉巔峰/index.html","e36ad5e25b341e2508a40899e42cc0a5"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","402333abc6d959e92645e740c6937f9b"],["/2022/01/28/Review/神醫凰后/index.html","8f808cc30d19688e1bb6d101ae8b1a84"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","b63502b70f37c47adade7c45b97c50e0"],["/2022/02/13/Review/夏日幽靈/index.html","8df796a8a0156771ab7c22133dc6e5a3"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","50f90d2136877bcac2803788030de0d3"],["/2022/02/26/Review/賽馬娘/index.html","7b21494209f12663f51d9596d05027bd"],["/2022/02/27/Review/大欺詐師/index.html","3dc287dba4c4175111d97c142aa7b417"],["/2022/02/28/Review/前輩有夠煩/index.html","46638c053e0ddaef6ceea95e1f119fea"],["/2022/02/28/Review/碧藍之海/index.html","24bf5531013c6f3123a7e3ce5e851370"],["/2022/03/05/Review/落第騎士英雄譚/index.html","96a2234061013185aa436ebdc75b498c"],["/2022/03/06/Review/Another/index.html","582fc14e8a848a3264567804659fbb8a"],["/2022/03/06/Review/入間同學入魔了/index.html","e671d62e3c517f80836bbdbff5508163"],["/2022/03/18/Review/再見宣言/index.html","6c599b59e2157407a9280cbbc0f54053"],["/2022/03/23/Review/生若冬花的妳/index.html","f0261c81e3adfa3c10b92544fed5946b"],["/2022/03/25/Review/天之弱/index.html","6f9e67e0c05fb1243a7f1d6567060d1e"],["/2022/03/31/Review/滅了天道之後轉生/index.html","714c542fb794de15fabfd3ac3658fc26"],["/2022/04/30/Review/泡泡/index.html","83db69742cf1e0c18435a38b4078d819"],["/2022/05/04/Programming/Dynamic Programming/index.html","3f106154fc2939c123549c8cb3dea762"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","b3e89e5b13bbce6be63ff778bc484a58"],["/2022/06/13/Review/偵探已經，死了/index.html","3d9aba706b6b2fc41290d9b7f5d6c992"],["/2022/06/14/Review/黑色子彈/index.html","e6152bc9d2d141d13d048eab3f50e555"],["/2022/06/15/Review/黑白來看守所/index.html","4fec2e8047559c788cda7d4b8782cc4a"],["/2022/06/16/Review/虛構推理/index.html","c6b236b46f5313a5aea43398a6d72611"],["/2022/06/17/Review/戀愛與謊言/index.html","cc409cdfd586ee8e0862a088b736f7ed"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","fc6a74435c8997684fb6f765a4b70457"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","952e3601ec73bd6036efc31e308921e5"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","a4e7bf7a696fd4a6fca6cbe21d6ba199"],["/2022/07/03/Review/Hello World/index.html","ba4c951b623db9abecdeffcdae881aba"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a1cca42fc2b2e40c849c2626feaa578e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","a2f58e9c06f541903450780510778f52"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","0d5f7cdead55d6703f2ab30f86b297ba"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","a91e4b3c7ca67f2e3b67755ae746ebf9"],["/2022/07/16/Japanese/動詞分類/index.html","866b12305561412aa28f45f7e0b7c74f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","bf49999c1b9a580803c097a73b4f7e74"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e97994b793212f9af11bcbf4646b95c5"],["/2022/07/17/Japanese/音便/index.html","6eb237de3c02166a0bcf9933f5daf43b"],["/2022/07/18/Japanese/動詞 時態變化/index.html","70fa2accf2602a83b43bb2ff6a895e68"],["/2022/07/19/Japanese/助詞用法整理1/index.html","d19519c3484370ea8e032ef6d22984f2"],["/2022/07/26/Japanese/助詞用法整理2/index.html","e2082e1e37b066bd460702ef4a56a84a"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","53f33b7f2c5d0815708476623ade0746"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","f9ca545df404be63f8a4af4b00829b97"],["/2022/07/30/Japanese/疑問詞/index.html","25fa092a910e969ab175728d4649d3e4"],["/2022/07/31/Japanese/助詞用法整理3/index.html","5cd4c63ca48cbaf33f83714b49fb2b3f"],["/2022/08/02/Japanese/副詞整理/index.html","b54a32264ee7374e8ff079851c5acc01"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","049d9a914887938d116d414283c5242f"],["/2022/11/04/Programming/Data Structure/index.html","daa8c5734756659aad194160cea03681"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","50f706179e1dd550aaaa72d437affac2"],["/2022/11/22/Review/組長女兒與保姆/index.html","844afb3f906ec1e65d57b9ba80384945"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","6549d39f0ace440ebb3168046227055c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","9d4c3b43e33be5db30af37387a849331"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","30a17745cefe8b96b09a3edf14e07556"],["/2023/01/01/Review/あの夏が飽和する/index.html","d0e007b959fd5c8ab5d97c7207fe68f5"],["/2023/01/02/Review/孤獨搖滾/index.html","0b62383da95589f3e03d165106de468d"],["/2023/01/03/Review/來自深淵/index.html","1944d397a67d403f153c9b3cc0ff08bc"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","84d63d195683f1d83c7739c3e023935d"],["/2023/01/05/Review/處刑少女的生存之道/index.html","c3c983171a3c308610d52d0683a49643"],["/404.html","eac5e7e80ed7a42dfba8aa2676b37b56"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","bc4c51f81f643f207842783d67685365"],["/archives/2019/07/index.html","99daef4c70cb6e1f9e0e6ce5c1d9a99d"],["/archives/2019/11/index.html","f19160a41c4aa2b07478e1a78e56a2cc"],["/archives/2019/12/index.html","1b00058d52b45907d58a3c90e4aa8c58"],["/archives/2019/index.html","b2dadf8a554e351580b2535d40923498"],["/archives/2020/01/index.html","63bda63cf3de3e927e972f95cf826758"],["/archives/2020/02/index.html","d548ca2350bc5acea654c55e04226237"],["/archives/2020/03/index.html","4ff01abefd8fcc46ed7f1697b8461837"],["/archives/2020/04/index.html","eafcffd90343f3574a6a4e7b71b802f6"],["/archives/2020/05/index.html","b7701a99491407ac32ac193caf916714"],["/archives/2020/07/index.html","d10706354ccddeddb2e0c12a9209f8e3"],["/archives/2020/08/index.html","5aa1d42e1cd6e888dec29df9bb5e5607"],["/archives/2020/09/index.html","14cc245a9ee1d9c01d4b775395ac2f54"],["/archives/2020/10/index.html","346dac17c82a120dfef183a80a300dc3"],["/archives/2020/11/index.html","500e903010aaadd95cae217525ad8248"],["/archives/2020/12/index.html","58c70ee0c69b1df211dba4f3bf35c3c5"],["/archives/2020/index.html","fefe31be818d6a73d885556d32339be7"],["/archives/2020/page/2/index.html","b3ace2231996bd508419a7fee56bbf88"],["/archives/2020/page/3/index.html","14621a7f6e818074cd3c4aa8aa6b2593"],["/archives/2021/04/index.html","1760ad987e709c003936c00191d12131"],["/archives/2021/05/index.html","e1f4c0ef7ecd265f6fa3d2a8c8bc812f"],["/archives/2021/06/index.html","d6b4ec11bcda1dce5b07f95eb805ad40"],["/archives/2021/06/page/2/index.html","5079666673d388e3d4d7709329703fa4"],["/archives/2021/07/index.html","e67a808247c3e77bf74d389569475b24"],["/archives/2021/07/page/2/index.html","28ef89c086330a65f49937296b376265"],["/archives/2021/07/page/3/index.html","b2dcc32f3ef3a95c73d3afe997060b0d"],["/archives/2021/08/index.html","a87890c60c80f2a007cdbe31182f69a5"],["/archives/2021/09/index.html","6b7763cd0b3488d947da4388097cfc12"],["/archives/2021/10/index.html","e33135f27539fcd5c66b7b27eca9d7ab"],["/archives/2021/11/index.html","ebbda4bee9d98b1b9942088dfb483cbb"],["/archives/2021/12/index.html","966ea76f36153017f0542da29c19268d"],["/archives/2021/index.html","e68f97b7d0146d58e356751557473539"],["/archives/2021/page/2/index.html","7bf5cd708300062fdff86ee3d8c12c97"],["/archives/2021/page/3/index.html","8bd8cd5d46965b945ec60224c4f82715"],["/archives/2021/page/4/index.html","17b8f6ec311edc12d57d199c215b7437"],["/archives/2021/page/5/index.html","00a8cc468418d6e430503852ca626c2e"],["/archives/2021/page/6/index.html","9001dfc14b9509a8e9b285c4d2d0b7d8"],["/archives/2021/page/7/index.html","2af79ce1b0450a9e261f4356cfda1912"],["/archives/2022/01/index.html","195fecfffa20d697fff0029cdf23ab43"],["/archives/2022/02/index.html","c8aff68d05be46e6cc14cd09face07d9"],["/archives/2022/03/index.html","449a4cdac8bd2bf3bc81950435a00eff"],["/archives/2022/04/index.html","9757ac89c2d40e5c1c963c2409bc8a16"],["/archives/2022/05/index.html","78f2b71d517fe1102ff6ecdc1d87a307"],["/archives/2022/06/index.html","16cfdb0037897103d653392967c5baec"],["/archives/2022/07/index.html","63e1793fce322e3e2511934e7385a0c4"],["/archives/2022/07/page/2/index.html","adc5daefda1ddf7f397f2e03c507b232"],["/archives/2022/08/index.html","4fee93f94a2f3deb82504e3e4417d242"],["/archives/2022/11/index.html","87f83044354eb07eda54d0941906cc9a"],["/archives/2022/12/index.html","fa819be3e082c9408615b5845108281b"],["/archives/2022/index.html","3f30f83faceb6914304f004ad3d48ba7"],["/archives/2022/page/2/index.html","c24029da620269a0439f946c3a21cdc7"],["/archives/2022/page/3/index.html","e1c33326f3aaaee28c0cc48f7c58abf2"],["/archives/2022/page/4/index.html","6c89f10e73d65047fe4d8d0cf5c53ed3"],["/archives/2022/page/5/index.html","f1cab325119e7351be6da691626ec0d7"],["/archives/2023/01/index.html","6542accf91c4d85887a7dc38a61a5fbb"],["/archives/2023/index.html","01171042bde4fd1c5cbc980c8de5232d"],["/archives/index.html","9d2e3d7468fec6ae5e9b91676e9c566c"],["/archives/page/10/index.html","fb7ba623edaf6c71c4bc5b92b973e5d8"],["/archives/page/11/index.html","7eb58778885b98d3121a39102ea5fa13"],["/archives/page/12/index.html","44bd7deeb59ae97eb4dae13008e04b94"],["/archives/page/13/index.html","42551fa3213ad9722f4d81eee1502830"],["/archives/page/14/index.html","0b9310acfc88d3793548df2869f4c7f1"],["/archives/page/15/index.html","d2d35d21dd9148c77da9660ad4a3f32c"],["/archives/page/2/index.html","0d9e218035c826fd29990df5981dc5eb"],["/archives/page/3/index.html","c9933468b183ba99c27104ef6d401e3d"],["/archives/page/4/index.html","3af60eefbe965c84f5b2e210072bd2b6"],["/archives/page/5/index.html","b1da8f0330ada41fe274caa582390150"],["/archives/page/6/index.html","53d2877d3117952609da584ce2be30fe"],["/archives/page/7/index.html","28b65880a0747a1f1252cc7d34dff4ec"],["/archives/page/8/index.html","bed49acbff5fcc42b92442049c914e8f"],["/archives/page/9/index.html","cca60fd4d0989e807211147e4a62d8cf"],["/categories/Programming/index.html","a5e6e0ef9ad1e8dfe17bc95f32942f03"],["/categories/Review/index.html","61ab9d3dc6f5282668d5aa394fc5c28e"],["/categories/Review/page/10/index.html","0216062823e0461a123993977f85863f"],["/categories/Review/page/11/index.html","0266536f694f9ac610bad940bf50ae4f"],["/categories/Review/page/12/index.html","857bfebf1535ba43369c6f74a7259ea9"],["/categories/Review/page/13/index.html","754e29a9da79660ea59ca23d0a31f4e0"],["/categories/Review/page/2/index.html","f35a1ec091c4a3e09063f0bc73bc0d0e"],["/categories/Review/page/3/index.html","2db61b319378428ba822406a61cb75f1"],["/categories/Review/page/4/index.html","827bc6ae9403b5e9df528656d8b0b49f"],["/categories/Review/page/5/index.html","f09bbcd18ad4d01c6b2a0d0df3233584"],["/categories/Review/page/6/index.html","af13b8dada17bd92f234957b6a663c38"],["/categories/Review/page/7/index.html","976e31616d16fca0390fff516cd5a82e"],["/categories/Review/page/8/index.html","4dd561e9da97648745db965c4a530b63"],["/categories/Review/page/9/index.html","dd8cae65c1573223f12e0a94a3dad393"],["/categories/index.html","b88f0fae4208b40d64843c79027a5d47"],["/categories/日本語/index.html","8c9ad66a2f2112bd0208fdbe11a3bbe9"],["/categories/日本語/page/2/index.html","cc11b0107c96774bdd52456bbe941d35"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e0442767fa9c8d7f9b766ff09a98ac19"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","d8d6fadc3aad1a62493c2857eaefaccd"],["/page/10/index.html","4c3596dcd8372e3b127039729f0b76c3"],["/page/11/index.html","f8bedde9691509380a6a6d01f8237069"],["/page/12/index.html","044d00193d28cf8950d9c8743e378366"],["/page/13/index.html","2f8057a41f997e5d792ffeaab11aa6ae"],["/page/14/index.html","d7cfe569f5677ead5dc670bddfb3299b"],["/page/15/index.html","ff5f75d422532c6984fb77efa632b959"],["/page/2/index.html","8d2425329318d9bef26843514e31dd50"],["/page/3/index.html","41a4a94e4b28c825c76178392757d10c"],["/page/4/index.html","422dc2f789f314c706c60075eb947256"],["/page/5/index.html","ce077050975bd264c197803b84e4ab1a"],["/page/6/index.html","ba3b11deb4b4533b2441a0f11e07f36b"],["/page/7/index.html","ef3f051e0d194b40c2ca4dd1e8994558"],["/page/8/index.html","88f766d6c0c142fcfadfb923c48de1c3"],["/page/9/index.html","d69b63876e9819fef917ef25b9633e96"],["/sw-register.js","818caedc78acfeb3acb2b7abfc410587"],["/tags/10分作品/index.html","471fc6cf8109aa87333ca9f89eb95734"],["/tags/3分作品/index.html","37e2eacb0abd5ae2a7303b3b685b4c9f"],["/tags/4分作品/index.html","3ecaf5fdcac470e3b3b48a935e3efaa2"],["/tags/5分作品/index.html","ee1d3d4171c21a42b8f2b7ac6f7d5290"],["/tags/6分作品/index.html","6861f3dd6b4b549e8f524c0fadecc4b4"],["/tags/6分作品/page/2/index.html","7eff6fcffb1ebe85cc4e4f1ea4cf73b7"],["/tags/6分作品/page/3/index.html","ef103f07e0aa5c196e7bed1c08eab149"],["/tags/7分作品/index.html","6e0da6ebb6a6f0cdcfea1aa01177ac0e"],["/tags/7分作品/page/2/index.html","ca7eb933f203b7b8cbd2c8b71dee5993"],["/tags/7分作品/page/3/index.html","ef36f3d6b3d75c5f759a5e58b0fdbe28"],["/tags/7分作品/page/4/index.html","a7be0e3684c5ffc1e1d86328fb841ed3"],["/tags/8分作品/index.html","1ac4ec221a7ea218080f6e90a1c2a502"],["/tags/8分作品/page/2/index.html","d6f716a8acc5950e0c5da1c8002b356b"],["/tags/8分作品/page/3/index.html","e01afc31b1a2303a907ccf6d8b62e80c"],["/tags/8分作品/page/4/index.html","c76e63cca388397dd0e357d559f2bb62"],["/tags/8分作品/page/5/index.html","0173f4d4e7572ddc2472c3499702466e"],["/tags/9分作品/index.html","84df32a738838573f6262a691de9ccff"],["/tags/N5難度/index.html","23c13379dcc79d449bffc52c95ee68b7"],["/tags/N5難度/page/2/index.html","69122cf7778a087186340e6478601a2c"],["/tags/index.html","19a7f5f2702703521db5c4f250a05c97"],["/tags/アボガド６/index.html","2261f185ff3ed946a139d4b52123029e"],["/tags/三秋縋/index.html","305c13358f8430f9e207408c4ed806e2"],["/tags/中國武俠/index.html","56330739f8b2f4f58ce98a082eaf8c1e"],["/tags/中國言情/index.html","8abb32e99f6cedca2931642910afb364"],["/tags/二宮敦人/index.html","5ed9e304ab4db4c0eff34858f0180378"],["/tags/人性/index.html","8af442572d19377c51feefb827b92e80"],["/tags/人際/index.html","2b7de50fa5eb33c239292de2fa99a45e"],["/tags/住野夜/index.html","4a47cf9cbcccf60f7194741b33673ca0"],["/tags/佐野徹夜/index.html","6da7aa735ed0230b3ed45db6ad2bd729"],["/tags/努力/index.html","ca31a806adbf91236ff7c17e5ccbbe6e"],["/tags/動畫/index.html","e9e63ca1229aaa2dc6d5ff9f8d61817b"],["/tags/動畫/page/2/index.html","84b9af15c5f15631e25aceaa15a936ad"],["/tags/動畫/page/3/index.html","2179d8ec585f6ad493eb6ba86e4d0c85"],["/tags/動畫/page/4/index.html","0fcddc33dad7abf941f444ae16d0b9d9"],["/tags/原諒/index.html","aabfa3c11ba0769312d4344d43b43933"],["/tags/反烏托邦/index.html","4b1601a7f5a0eb802212a6a25c043ae1"],["/tags/啞鳴/index.html","2caa92b9c8b6b6beaf702d9ea80e5d40"],["/tags/喜劇/index.html","bfa18865d4a2190c93322fe01a851122"],["/tags/夢想/index.html","dd8345219f4ff6ced1436555e6650a37"],["/tags/天澤夏月/index.html","4ce713365681902cb74065ba72f87686"],["/tags/奇幻/index.html","9b08706cb7df33042c5ba897f90a5270"],["/tags/學習/index.html","8e86d97afa8ca1104e2b9ff67828aaaa"],["/tags/學習/page/2/index.html","2b402c0713a822366dbfeb410bfa42ac"],["/tags/宮崎駿/index.html","199b6547a634bbf7f33e6bb4a6c2fe4f"],["/tags/小說/index.html","64173b1307e7af6c719d73a8c9e9f21c"],["/tags/小說/page/2/index.html","551ac54a8d45672a6d05f416fb179f65"],["/tags/小說/page/3/index.html","343108840bb50c08221e290503344448"],["/tags/小說/page/4/index.html","693fceab84aec241c7c002ee1d099dfb"],["/tags/小說/page/5/index.html","b393e59eaf933b8f23b3b2ea6df68872"],["/tags/小說/page/6/index.html","a59f0520bb193e03aa21e393ac59d7cd"],["/tags/小說/page/7/index.html","c90e554144b7988643ccbd957f7d4538"],["/tags/平淡生活/index.html","425d86b13df86cf07a8054eb6b9fc792"],["/tags/幸福/index.html","9ff95e425c239b7e649f8d3e3ce0ee3e"],["/tags/志茂文彥/index.html","111df0e2d2561744f9dde8a65d7b8eed"],["/tags/愛情/index.html","ed80e6ce7aa17712267b7c58555a40be"],["/tags/愛情/page/2/index.html","3acce4a28722dedda83129285310a030"],["/tags/愛情/page/3/index.html","2ef6e151da9aa9fbdb56fda4b9e77ab3"],["/tags/感動/index.html","66920a27408a9787a0db8825d364e83e"],["/tags/懸疑/index.html","488ca7576aea69b2fd2ba05bfc63677e"],["/tags/懸疑科幻/index.html","0b98951f66d6949b1a346c3da59132dc"],["/tags/戀愛/index.html","8668a6321b978e5f313afc786592eb52"],["/tags/成長/index.html","0728647455f93e4128fb572668abde87"],["/tags/成長/page/2/index.html","104fa27e6d32f95d493c876191a9a4a3"],["/tags/戰爭/index.html","51bca969caf062a09fb691c54fd9cdf0"],["/tags/推理/index.html","96b709f1fa8c665c9c5a6cad1a9b7db4"],["/tags/搞笑/index.html","23ed75f37f46d4a32fcb45d92237b117"],["/tags/救贖/index.html","b784ad1fc5aac5b164b06d8c0e4389d2"],["/tags/斜線堂有紀/index.html","7fb108f0b2e80dce5daed1723bf97c8d"],["/tags/日常/index.html","32a36ffdb7baa3268942a7ce9fbbd48e"],["/tags/末日/index.html","936e3aff48246e797936f9ea17349dd5"],["/tags/校園/index.html","028b2190e2cc87909e311a327246e30b"],["/tags/武俠/index.html","3b41ecfd1de949c5e46a54307b0db93d"],["/tags/武俠言情/index.html","87a384364010f8cb4ea05f47f13a3308"],["/tags/漫畫/index.html","9a169ec2b7e25306ee89fdc91f52ac21"],["/tags/生命/index.html","94f7ad0d019a23786ff2a137c0f3dc6b"],["/tags/生命/page/2/index.html","8c5dc62ad41249416915c8e0fafa059b"],["/tags/短篇/index.html","de9439eb94b27d9a50c78b49a74f5db5"],["/tags/社會/index.html","0c3a2fd80ef1330f1a7b90a9e6ab16ef"],["/tags/科幻/index.html","3d6571f31423a91b0ec6bc13aa5ef6b2"],["/tags/童話/index.html","ec6a6d9cf8d3c54bd96b511c50e8c736"],["/tags/競爭/index.html","06c6073274e87866b44e63871ae01a1d"],["/tags/自我/index.html","d8a196516c5b579263701628aa909d83"],["/tags/自我認知/index.html","e7390181ed7da3fced7cfa989a62426a"],["/tags/葦舟ナツ/index.html","1e10eca276df92c594fd9127ad156a1d"],["/tags/藤萬留/index.html","f859a74602b753a306fc661d518e666f"],["/tags/親情/index.html","400828f210dedc5d85bfa4b5924f34d3"],["/tags/言/index.html","b50246ce6a5a7d885809b70a785abc2e"],["/tags/雜項/index.html","af12c3ab774955d8d387cad425c90cd4"],["/tags/電影/index.html","f2e8897ff242d0a2888492edfb92eb4e"],["/tags/電影/page/2/index.html","340cd00e42443dd4f46d9743e2f28964"],["/tags/霸凌/index.html","40da701f7c51f47bef9ca16d53d55701"],["/tags/青春/index.html","6bb6d20d5efa164e3547eea1486d7bf9"]];
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
