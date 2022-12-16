/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","f6d9d2896c8c6d1674c9ad5320b43d08"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","0df1e52ad8d1a7033af57d700f956d82"],["/2019/12/25/Review/無法計算的青春/index.html","bf356755df4077b3f570e6a5e1bd0f0f"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","e3f301dbdc2428cc89f207814d0c8357"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","9e169dc9493597ee07e611efcf13a3be"],["/2020/01/19/Review/下雨天，不上學/index.html","cea057eff89caf505bd3760819f9da66"],["/2020/01/26/Review/三日間的幸福/index.html","2f0bc38280b31c6f376a39f99b07003d"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","73248d20d588cc2842a2e702fd4c02f4"],["/2020/02/09/Review/青春期超感應/index.html","fa11acc0019a8421b270ef23d5778756"],["/2020/02/15/Review/又做了，相同的夢/index.html","9b18527725ec783f97918de1ef87acb1"],["/2020/02/22/Review/回憶當鋪/index.html","2b93227dc7d7976108ce175905ce72c7"],["/2020/03/22/Review/不適合自殺的季節/index.html","78d80e439eaee81f5c986f96764d9992"],["/2020/04/26/Review/我們都無法成為大人/index.html","49fef90f6df395b19bb3405f2ded5ac0"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","09eaea35b10fb552ad9a94b3b9e571e9"],["/2020/05/17/Review/人間失格/index.html","909c25e5f3986a24cb572bf9b04a5b9d"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","7ffbfe8f7c911aa04c3312c5ad0fda72"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","02502c698c681c72dff1373ac6d3d3b1"],["/2020/08/01/Review/銀河鐵道之夜/index.html","e034a4979e3454c142d65b9c0a51f3bc"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","b4a03904a63e1abe92b01a696cc34f90"],["/2020/08/16/Review/15歲的恐怖分子/index.html","95b35496f52fbf4ac17fd2ca06547e65"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","5e1b7e5e60f547804a19edab01efb35c"],["/2020/09/13/Review/羅生門/index.html","c2dc1f1359f818875e0f89e564273567"],["/2020/09/20/Review/闇夜的怪物/index.html","bcca5ce072501415541f4c120157cf3a"],["/2020/09/27/Review/14歲，明日的課表/index.html","de65e4d0b4bc0924262b6e4e4ecc975b"],["/2020/10/04/Review/致十年後的你/index.html","5fd6de7046441042cbc1da49873b6fad"],["/2020/11/08/Review/滅絕之園/index.html","23600d42b85636184a789397d7e2c5dc"],["/2020/11/15/Review/將愛拒於門外/index.html","58670120703c31b4f53872660c72d1b9"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","95dfc79c538777b1e908a3cc4fce75a9"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","9cf28c7c05eb7b19009ac664b14dc4fb"],["/2021/04/22/Review/道印/index.html","8be3f5ea1c9d9c9b33d468d8eaa32d44"],["/2021/05/03/Review/戀入膏肓/index.html","c5c8dfba09202fff8e7df32f7338f2ed"],["/2021/05/10/Review/Dice/index.html","62e8f30e0d6200d95c2f5d023a021cd1"],["/2021/05/15/Review/魔女之旅/index.html","3a649f674de54bcdf3cbf6f8f6e83073"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8abbe87232659807629985081d026814"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","04dca1db3502fe5c48995f05933a02ea"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","6c4968992a1ebf140b167352e37c1fde"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","4264936d519109e24054f3825fe6d091"],["/2021/06/05/Review/流浪的月/index.html","86f1c39377250926d84ee84f94b89850"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","10458e0fc14c3102ce385bbf924018a3"],["/2021/06/13/Review/第一人稱單數/index.html","0b6978fa0624fd8083905f3acf3f4131"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","714b37f612b1aeed97ec11b340880415"],["/2021/06/16/Review/願你幸福/index.html","9c9de2fc328dd0f3064730b0f40d8231"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","b99a0e8b9583332744d72aa6c70d83e0"],["/2021/06/21/Review/神隱少女/index.html","2de2cd8c8f28480f9275f99fc1112a3c"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","a8b703a6f877ccfdee3c05b598916c2a"],["/2021/06/23/Review/天空之城/index.html","5468e48aea4bbe8f88d4161e4b4d3b43"],["/2021/06/24/Review/魔女宅急便/index.html","b275367e4fd18d19d14f96dc0e51b7d9"],["/2021/06/25/Review/借物少女艾利緹/index.html","634c0122d253cc8bfae48fa2357d3921"],["/2021/06/26/Review/魔法公主/index.html","02b7f083c3bec113b9b37b6df0210a1e"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","01b96f85263d49d17f920b63d2f910f5"],["/2021/07/04/Review/飛雪與劍/index.html","8e6789d4a19af9ffd18961373ff13301"],["/2021/07/09/Review/地球防衛少年/index.html","f9c62b64fb680a618c75f232a608705d"],["/2021/07/12/Review/Angel Beats!/index.html","e84e217a6aa84aa208457fe819304129"],["/2021/07/13/Review/Clannad/index.html","aa3a5dc0a612ea30eee5855dbe0d06b0"],["/2021/07/15/Review/AIR/index.html","493e3ae7659e05a6154e558898397a5c"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","cf9bccddda6caeef6ba44a9a93a27f17"],["/2021/07/15/Review/螢火之森/index.html","9967496c9372ba7153e19aac9e57ef10"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","08d59de67430ef2ad634bf2de6310083"],["/2021/07/17/Review/奇蛋物語/index.html","c89da1cc6229b5082fd52453ab817129"],["/2021/07/18/Review/Vivy/index.html","6a01625469b111e33b92782ab3aa7d22"],["/2021/07/18/Review/請妳消失吧/index.html","71197d58f6d4422c2f1e693f1675262d"],["/2021/07/19/Review/漣漪的夜晚/index.html","30259ed9c3998208eeb48fa6f6023dcd"],["/2021/07/20/Review/月色真美/index.html","93a3bea4d35deee8898ca432fcce4d3e"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","8693fae4fbd301ab75a78b7e67f55a5a"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","87e5d802b725afb04dfe62cf50808e1a"],["/2021/07/22/Review/罪惡王冠/index.html","464f83e791ce6eefbdf8433df2a91a53"],["/2021/07/23/Review/弱角友崎同學/index.html","40db7f7135384713e2ed9b8f384ab4c8"],["/2021/07/23/Review/惡之教程/index.html","f12f832825d26b16cf42ee27d2f06bbe"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","29a9c353942810855ae092629c70ca20"],["/2021/07/25/Review/魔王勇者/index.html","f780c592c98a3f08b186d50c96a90e49"],["/2021/07/27/Review/一年A班的怪物/index.html","b879e7efbfb1ffd50f0340243de25e17"],["/2021/07/27/Review/奇巧計程車/index.html","f0e28bccb7c0b8d50b91272c30f216a5"],["/2021/07/27/Review/專情的碧池學妹/index.html","c49ce7a3d09be9831c9f21e77192cf65"],["/2021/07/29/Review/只有我不存在的城市/index.html","d28fc495e835fa6573c0b54d575f3be2"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","e66ad34600fcfcf83ebcf165629d1d7e"],["/2021/07/30/Review/可塑性記憶/index.html","b700e853b2ff824165596483e6eec936"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","d420b17f5307879fdb2a9fcc274144c0"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","2a8a3ce867bf05a71650810403d7eff2"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","10480787016c013d61e700ce04858e3a"],["/2021/08/25/Review/清戀/index.html","f6060d0b10bcb25b9d4e383798e915ac"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","ef6a67fc6e4b4b70076de27eb93dcad7"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","a41423d8ce26e1474cbb535a67b7170f"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","18b98c177a6135387e618f57e30ddf54"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","341a539f0b98473ac5fb21ca4d19a7d7"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","69f2f4ab19d5f9478db430d785c1ad42"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","14b342894e2a9fad6b42a60e03fbcbd0"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","fea0abd23f9f3760697c647aa409aa2e"],["/2021/10/16/Review/龍與雀斑公主/index.html","f62d16f93faa618676c56a8f6dfb6d9e"],["/2021/10/19/Review/孤狼不想開後宮/index.html","a77279fc3e94b33490023632ad55617a"],["/2021/11/13/Review/徹夜之歌/index.html","7ea810f4417c0532696d810c79f9cf39"],["/2021/11/24/Review/武煉巔峰/index.html","c917275d83ffdaa17adb664685a14d01"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","bb7187d39ba879749d356d0990b8d9cc"],["/2022/01/28/Review/神醫凰后/index.html","7eed905fdf2ab2e76e48fbcdcd2c15a3"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","9d1e83c17172d8264e678a7f1a0d8d8a"],["/2022/02/13/Review/夏日幽靈/index.html","d421c17fdc4ae00b6bdbb92f18c27704"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","9c70f0d7f0d57b73899bcb8178f83984"],["/2022/02/26/Review/賽馬娘/index.html","b9b2520d511e4e06fff9e12f6bd76d98"],["/2022/02/27/Review/大欺詐師/index.html","72682ab88e8bfaf03390de1a0261f374"],["/2022/02/28/Review/前輩有夠煩/index.html","e28447412f17d396cedc6b6adec1e8ce"],["/2022/02/28/Review/碧藍之海/index.html","377c07b9902cb640e18bc56679aaca48"],["/2022/03/05/Review/落第騎士英雄譚/index.html","189e86c15588e65133392d8211911a84"],["/2022/03/06/Review/Another/index.html","d4a75673b3da045c8492df585928b3f1"],["/2022/03/06/Review/入間同學入魔了/index.html","c520672675fb6411f264f4d40e8d422c"],["/2022/03/18/Review/再見宣言/index.html","4b4e4b9dff75f1fe3fcc17cd21e087e0"],["/2022/03/23/Review/生若冬花的妳/index.html","5e29dd37c9d2a578ab5bd9b04798678b"],["/2022/03/25/Review/天之弱/index.html","0ea28f858d679d7a62299b7608aa0cc2"],["/2022/03/31/Review/滅了天道之後轉生/index.html","febfcc2648b6e58633c61715b1068bec"],["/2022/04/30/Review/泡泡/index.html","08a8a786d74c27e7f0930171a72bf9dc"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","7a39703d96355be6d958987064651185"],["/2022/06/13/Review/偵探已經，死了/index.html","b8c371743a5446139708a7581a8a5d17"],["/2022/06/14/Review/黑色子彈/index.html","c139c49b541163580e501a57f3b58d5a"],["/2022/06/15/Review/黑白來看守所/index.html","75a52ffe81fead320b05f61e3e19e195"],["/2022/06/16/Review/虛構推理/index.html","88dcf062661177c3d6abbf2c76e8ca49"],["/2022/06/17/Review/戀愛與謊言/index.html","ce9684c86637cdb506148a9b1f4f351f"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","0d4356742d6b796f620b9731ee92e2ae"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f0b3965183df096f6919c2dc911a04f0"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","4735e1feb7f837327cd42465c1bf8ea3"],["/2022/07/03/Review/Hello World/index.html","66fc4db42dc2442e25eb0947a9d8bc81"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","971215f40b83cb9c503dd89b3069edff"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","f701b4a5051daf9188937fa477d381ac"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","1ede14dea003d8e4ccc42317fe43ed62"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","2fb256c6c2a4b9b49558b502637c54c8"],["/2022/07/16/Japanese/動詞分類/index.html","24f0890e8bd4d2e8ce26ab2c7308fbc1"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","77346fd33c47a7202c4fd65d3bceb91a"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","521f5c9c5b97b122bd0b816b7e32cf07"],["/2022/07/17/Japanese/音便/index.html","72d5ccaef9a10ec7b6b78fd63743d7d0"],["/2022/07/18/Japanese/動詞 時態變化/index.html","86a5c71b266e5b60b21346fb33d59f3b"],["/2022/07/19/Japanese/助詞用法整理1/index.html","976f4c01fb8c04915ddcdb6808ca3eef"],["/2022/07/26/Japanese/助詞用法整理2/index.html","1646ae848cc7fc4f9886633baf353ec4"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","6ed8e2b6b805d5e497187461b9e3906c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","12558243959fee74bfcbfc43e0b955ab"],["/2022/07/30/Japanese/疑問詞/index.html","7862523e390eeed3e5ec9c20c6396ad4"],["/2022/07/31/Japanese/助詞用法整理3/index.html","8a26accb6ef66e09ba71a4f60a334d18"],["/2022/08/02/Japanese/副詞整理/index.html","fe2f1592880a6bec992ac2b5e3281a16"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","21b597a98c65eea446ce4b1c7557b5db"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","980a8dd2668c653c10d0514cba65e7fc"],["/2022/11/22/Review/組長女兒與保姆/index.html","549c7937ab0fa0648f0a9749f26890e6"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","711b07dc5a806c284de5b2e641d5120c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","018ce001abba4bf4dbb14fb7f0b8624b"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","107e0f069e9dc0c7e51d0ab52b35cb61"],["/404.html","899effbdb620681d663f00f806727190"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","e1b53c5026156395f3d88bce6251ffc3"],["/archives/2019/11/index.html","c6c652b27c0258170df4cfabdd0c5783"],["/archives/2019/12/index.html","d7786ac9af7d9420edb3b3e1eb96ee7e"],["/archives/2019/index.html","70e8dd7e2068d252d628c569101e6a53"],["/archives/2020/01/index.html","dd3f73e426e7d7fe7310a8f9e61f8e24"],["/archives/2020/02/index.html","1caf9953b2bd1600579dfbb5fbba1497"],["/archives/2020/03/index.html","971241a23f034f511d6808ffee226f7a"],["/archives/2020/04/index.html","3d712644d7f351ff8783e3ded573a661"],["/archives/2020/05/index.html","f1dfbce3521a9530c835248dbe1c8113"],["/archives/2020/07/index.html","a691df12f04b09b1349e189474794108"],["/archives/2020/08/index.html","dc7e8ca85c5a457c38dae6903cae1270"],["/archives/2020/09/index.html","2c90a8fd2d40194158f8d3728efa80e9"],["/archives/2020/10/index.html","5874abda686c0031388b9843e8773218"],["/archives/2020/11/index.html","161cf0d35ee245698a8a8c83c4a1e378"],["/archives/2020/12/index.html","fde5ab242698e3992484e6b92e928567"],["/archives/2020/index.html","f8aff438e94efc502bee4827f36a3797"],["/archives/2020/page/2/index.html","582420ae78927074604548bd1714b619"],["/archives/2020/page/3/index.html","a407a026081f01590b0c478419b55b71"],["/archives/2021/04/index.html","02094c8be46ecd0fe2e55cdac4ccf6f8"],["/archives/2021/05/index.html","fe4254157d1e5eb9e80f4e33a9bea4ce"],["/archives/2021/06/index.html","9dbd578e55d79f977a7d0363a5dacdad"],["/archives/2021/06/page/2/index.html","7746987673a23d9b439260676298800f"],["/archives/2021/07/index.html","c14ce388d8eba06748bdad1dfbef7624"],["/archives/2021/07/page/2/index.html","a7bbcbae22845b4a41b46230312be99c"],["/archives/2021/07/page/3/index.html","a8bb5261e534f4e4ae0fff4f76bd4fdf"],["/archives/2021/08/index.html","780d94e852209330d66478ef97cf899f"],["/archives/2021/09/index.html","0c7d6ae4ae7d756df5bdd2239dbe65eb"],["/archives/2021/10/index.html","1e593bafce80aa47b40fcca032df1442"],["/archives/2021/11/index.html","e724f7910e5541bff1d3f50292dd62a7"],["/archives/2021/12/index.html","7f0ad7eacd736aee9965396fc8d93c91"],["/archives/2021/index.html","4cbc9c061a99d9903597f737716866b7"],["/archives/2021/page/2/index.html","e7e921efc9e2ef713eaa9e74ac6d63ab"],["/archives/2021/page/3/index.html","8c5c22bd98be1c78f5cf0f1d1538fb0a"],["/archives/2021/page/4/index.html","cfbdf9082d467ec1ca21388dffd28a92"],["/archives/2021/page/5/index.html","cc5011480c07774a17cf218bed4a71e8"],["/archives/2021/page/6/index.html","b39d119a3fc8d3de9b9070e1f3c140a4"],["/archives/2021/page/7/index.html","d296fc85f6b1371347773166d0df0a3c"],["/archives/2022/01/index.html","16a51f7137bfbf6c9f58477775979a31"],["/archives/2022/02/index.html","fad8f55dbed157f2a8a369613d186806"],["/archives/2022/03/index.html","8957462dab95edb124c76f2ee4a0d16e"],["/archives/2022/04/index.html","8fe0e62b3940992043cb151d35d91cb8"],["/archives/2022/05/index.html","1b43284fc1c14e9ca6e5fd19dc632a1b"],["/archives/2022/06/index.html","009086f5475be2ef982588bbe6ef2d16"],["/archives/2022/07/index.html","c508baeb6c9663fc54d75001d1fcb784"],["/archives/2022/07/page/2/index.html","95aa10e37edb10db75104b610e9682fc"],["/archives/2022/08/index.html","d9b1cf990daa76fb13a3bb6620b29bd0"],["/archives/2022/11/index.html","0fa91969f2cc4a2165220a18da74f13b"],["/archives/2022/12/index.html","aaef8989d17f5bc516a4959788bbbeae"],["/archives/2022/index.html","0ec48998ec577e5feddcee269753dd87"],["/archives/2022/page/2/index.html","09f08371cf75b95739a33e7f6d698242"],["/archives/2022/page/3/index.html","68294f78f4a4bfee3850cc692f943eb7"],["/archives/2022/page/4/index.html","c826f375a5ee7c62df4fed11d5b42613"],["/archives/2022/page/5/index.html","ba16a488aea222b00e6b0fd321b492a8"],["/archives/index.html","6e170d02012a0e3eb83116d33aa3549a"],["/archives/page/10/index.html","440eaaf7cb312c186c5ace0c8cd746c0"],["/archives/page/11/index.html","110f60f63a6b3236d9c0d647a089e9ad"],["/archives/page/12/index.html","296320fcd2e6e74abf824b36823991e8"],["/archives/page/13/index.html","86d08bab1ac19c01b7c8702d10548241"],["/archives/page/14/index.html","7143f04c2675eb9083361a125f637b0f"],["/archives/page/15/index.html","5c5089d356207df4f237fc54cb529d1f"],["/archives/page/2/index.html","5eb5e576593af3f81326d2d29134ba63"],["/archives/page/3/index.html","acef6389412e71a738fa5e84cad56e5d"],["/archives/page/4/index.html","9b5186b7ed7f2ca1a5f837d4028bd28c"],["/archives/page/5/index.html","d7cb3839fdf87c07323e62f64f3fb1a9"],["/archives/page/6/index.html","192087fb3289d6c7068cc6377c28ba71"],["/archives/page/7/index.html","06d876ee1f517ca995ae5cc45e08417f"],["/archives/page/8/index.html","490ddccf108231a26fc5579168cdffd9"],["/archives/page/9/index.html","896d08493573c3f865b5c270e4de9e89"],["/categories/Programming/index.html","f1c2631825cf3ef54014d1f9e39ecf99"],["/categories/Review/index.html","058f9dccd50fa9a43fda14c4368f22e9"],["/categories/Review/page/10/index.html","871ad6d64b79cb4facc97ad1198f24a6"],["/categories/Review/page/11/index.html","ca484ea834149e52ee4f873b981eb8b3"],["/categories/Review/page/12/index.html","5dd0ff44ecd3908f0a759121a9ebbd45"],["/categories/Review/page/13/index.html","6b1a0adb276c113fe1f50fb69e324a15"],["/categories/Review/page/2/index.html","5ff554d56416a1e18b74be46a5707e85"],["/categories/Review/page/3/index.html","fa0a7fc5323cb838cebf7a01503b98e6"],["/categories/Review/page/4/index.html","c349435a63d6fc588f21067b5e131691"],["/categories/Review/page/5/index.html","d16344b0df0333b82811a68bbf2a3247"],["/categories/Review/page/6/index.html","7e3f386c856953585922c222680d3fd6"],["/categories/Review/page/7/index.html","e2f7f97e53c097397ebfe402cc4e7ff3"],["/categories/Review/page/8/index.html","9597967ade717c6f9460ad9cc87aa4f2"],["/categories/Review/page/9/index.html","4757e57452ac9326f5ead47763e441c4"],["/categories/index.html","3afc6174e792d38e8cdc4ad59ed76345"],["/categories/日本語/index.html","a589578a50f4244cb2ca3a7235790149"],["/categories/日本語/page/2/index.html","2ddc4b7bd07cd04c029654f688906518"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0d4e5dd108a49f8313b3a0943d715a59"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","a2bdede77fb64c27ea0ba43e498076e4"],["/page/10/index.html","caf7ffbfe0d86b53f31502820ccb2e80"],["/page/11/index.html","e157287848b4a3d443e87c62578a1181"],["/page/12/index.html","9423925427ff48bcee8fabeab3404e57"],["/page/13/index.html","9c7cbaafd563dcd2b95586388cb91b83"],["/page/14/index.html","7e41b5caa260f7151aa52fbe804802bf"],["/page/15/index.html","d32db6b58fbe73433f384679bda2981c"],["/page/2/index.html","40c3beae4e8192ae21e32884352eb0c5"],["/page/3/index.html","d10fd3d38b2109ab07e466b17031dbb2"],["/page/4/index.html","1f5a0b0f6dcd3d6403a1d0d766c7c9bd"],["/page/5/index.html","e2128425b337d67c930abbd08656489b"],["/page/6/index.html","bcc0eb06fab85c7f24a7d44e42eb5619"],["/page/7/index.html","4939a800011df5af5da526bdf5f579a5"],["/page/8/index.html","387402bc062914065ebdc63a7375f867"],["/page/9/index.html","e7a0f97775454338b22a76f785922ba0"],["/sw-register.js","689d0a57316cd44f489726c21043d3e5"],["/tags/10分作品/index.html","56f9417342769aafa3cef24af45c5a92"],["/tags/3分作品/index.html","8ca464e622326907ff21348ba572b77f"],["/tags/4分作品/index.html","b90290bbedeade48d43d6e1ff9b8aa4c"],["/tags/5分作品/index.html","cbe9843564f105bed3b35a3bd1ccbefd"],["/tags/6分作品/index.html","51ed89a461085fde52affc41ec8b1c8e"],["/tags/6分作品/page/2/index.html","0791830ec9003e9a2b9c1c87d280ec24"],["/tags/6分作品/page/3/index.html","50f79d21e6e6a38835d2a4e7fb12adbe"],["/tags/7分作品/index.html","e581000db003ec83238ba04a5221c907"],["/tags/7分作品/page/2/index.html","eb417cbe4dda344719f37c4a27e18297"],["/tags/7分作品/page/3/index.html","0fdaa10c865297435a10245635f08236"],["/tags/7分作品/page/4/index.html","b697106ff2fc6d36b843359ba807aa30"],["/tags/8分作品/index.html","737e3c327089b1e8d828c08f4e733b4b"],["/tags/8分作品/page/2/index.html","b9fa5a800ba917da631da8239aeaa38c"],["/tags/8分作品/page/3/index.html","364fe77e8e09615f59c8c8375b39da6d"],["/tags/8分作品/page/4/index.html","5240f24cef26a2bbc947a374cf424800"],["/tags/8分作品/page/5/index.html","dc643c833b4de3932c093abb23703fdd"],["/tags/9分作品/index.html","6f26c4f49e13a0a289c4ba4e59b64283"],["/tags/N5難度/index.html","bfae08d0b9fbe8de75af2ce2910bd66a"],["/tags/N5難度/page/2/index.html","922370545e8d6bf859ee32e1702d53a1"],["/tags/index.html","7201dcf8ebcaf9e772a201c599b3b141"],["/tags/アボガド６/index.html","39ebc0736143c305d316bea31fc24a4e"],["/tags/三秋縋/index.html","33745c0abc845d347cfa46765ddc5ae3"],["/tags/中國武俠/index.html","64a357b85bea2b723a9cae5859268382"],["/tags/中國言情/index.html","8559ddd8420909a9c923fdd98ee73a2e"],["/tags/二宮敦人/index.html","d1366e4ed3ba7fb67cfa6d9d2de4b866"],["/tags/人性/index.html","ee435feb0dd2c461622e99884d0ca835"],["/tags/人際/index.html","6537d9ab7ea8b24e0ff47b66582435d7"],["/tags/住野夜/index.html","e89277bcda2f8fe62e934247aeb66162"],["/tags/佐野徹夜/index.html","1b3695db2a9f8815c689cf1d44444922"],["/tags/努力/index.html","3a34be1c28d25b48a041056dee98d028"],["/tags/動畫/index.html","7ba59bbcfe93e445427f13c0c26cf2a0"],["/tags/動畫/page/2/index.html","f72c5df6dbcee26816258e782384b533"],["/tags/動畫/page/3/index.html","481ac1aa591b10df98d2e054803c0bc7"],["/tags/動畫/page/4/index.html","2d31b8c50e38c4a40a58118d56f0e38a"],["/tags/原諒/index.html","b6edae904021123b9dbe5c180acd6bbf"],["/tags/反烏托邦/index.html","c68cd53d711b209ad58f067093ca3766"],["/tags/啞鳴/index.html","b2e744fa58d74b1324328e9239375936"],["/tags/喜劇/index.html","9d3895de15585cbd91a65e46be58f9d9"],["/tags/夢想/index.html","e34af1c309c370ef948d73a745f1c5e5"],["/tags/天澤夏月/index.html","069576b04b6644739b7eea1fa1f7914a"],["/tags/學習/index.html","0f43aa451a84575c7c9178976ec93111"],["/tags/學習/page/2/index.html","0b4da60e698c0be979c2224906adbb99"],["/tags/宮崎駿/index.html","6ca6a91f1ba2b936f1565694e14ad2ef"],["/tags/小說/index.html","9d62fb83b103d6e23c90669f1f6d845e"],["/tags/小說/page/2/index.html","7797513544f1d60f9b833df2c87183ef"],["/tags/小說/page/3/index.html","d98f96bb98e8200982b0f8f672b56284"],["/tags/小說/page/4/index.html","f334a8c18c26e45e466fc4b634c04947"],["/tags/小說/page/5/index.html","df4971a41f1ae1f65fd93fccad1efdd7"],["/tags/小說/page/6/index.html","1040d4bfcd98df1a3ad75419e136ff95"],["/tags/小說/page/7/index.html","ab71c6a750e200ccb85824d09bdf957c"],["/tags/平淡生活/index.html","f6fa8dfebb5186dee589a40c6fb92658"],["/tags/幸福/index.html","67faf29ba93bcdbd5e90cf0fb8dee784"],["/tags/志茂文彥/index.html","e288a9a2fff3a23cf8b4a1d7030e985c"],["/tags/愛情/index.html","739f5125ce8f3b1c9de6e66f7b45565d"],["/tags/愛情/page/2/index.html","41f50c6e08a4d4b4b1d513511d3f3c24"],["/tags/愛情/page/3/index.html","41d26eb9e52091e81b849862be6b0592"],["/tags/感動/index.html","2a84ca83878220d5b269cc1d0714a208"],["/tags/懸疑/index.html","a671aa301fe81eec2453b5b52cfd0aca"],["/tags/懸疑科幻/index.html","ddd1db04211ad0dd2ff01846a7442fa9"],["/tags/戀愛/index.html","eba5a6d85b8ba51cb75dd872f3ffc47a"],["/tags/成長/index.html","c90fb9e291a2fa5ccae9944e2c12702c"],["/tags/成長/page/2/index.html","1c66caff4a5c9cc13b62a04e02053c4f"],["/tags/戰爭/index.html","98fab07985e34f172b035c27bc1054a0"],["/tags/推理/index.html","255ef591fb6f9c24946771019989f6eb"],["/tags/搞笑/index.html","11137b7327d7569e7695f8dcb4a5d10b"],["/tags/救贖/index.html","f691fd91cfc15417df36c40cf2ef31cb"],["/tags/斜線堂有紀/index.html","88e344a9ff56c56af48204a7a1c43282"],["/tags/日常/index.html","e1413ed62bd27eb6583685306c01c820"],["/tags/末日/index.html","cbd5f5dd1a5bf6cfbfe40e159ccd9248"],["/tags/校園/index.html","308cd7d0dc68b155119888fed48fe227"],["/tags/武俠/index.html","937bcabce85689cfcf853ac3a25dca22"],["/tags/武俠言情/index.html","bafbfbfe026683281472c0fc9e05c229"],["/tags/漫畫/index.html","8d1be63dda31636dba7f1f5c0fefe935"],["/tags/生命/index.html","3e3cadc2f48cc03b4c81b04c4f56b0c1"],["/tags/生命/page/2/index.html","499d671ae7e8769930e4528596ca7107"],["/tags/短篇/index.html","b8f0131ecf4ba3f7c1dc40b3f8facd4e"],["/tags/社會/index.html","dd4665b671957bd3ae3043e34e800195"],["/tags/科幻/index.html","53b83cad0e57af681a66cefa6e621cf7"],["/tags/童話/index.html","fa7fe201cab228499a12d8c27212d305"],["/tags/競爭/index.html","39347540492703e8aa196f60ee58b373"],["/tags/自我/index.html","d62d86a9a4726c2498743d596db19169"],["/tags/自我認知/index.html","115be36b6889f87cf15d56b8f3e4ec41"],["/tags/葦舟ナツ/index.html","34f6adb2bc3e1cd20ee1f83064831487"],["/tags/藤萬留/index.html","de5c652cfd79eb5049402f5a79b12265"],["/tags/親情/index.html","632573c58f5e1a1a8211d3bacaeff7b4"],["/tags/雜項/index.html","794e94050242e2cef95a6f130b39403c"],["/tags/電影/index.html","ec9580a4940de196d3aaa509630c6517"],["/tags/電影/page/2/index.html","5a0344360d4f4fc4161b97c8532784d5"],["/tags/霸凌/index.html","7b1962d07fa5f4ad90800785ff5bcdd5"],["/tags/青春/index.html","41047c58d2e60f7d4f5139851271ef0b"]];
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
