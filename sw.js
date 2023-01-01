/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","b6eb5cf6817cf77d1bf398a71c0280a1"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","9522c36ef108ca64eb8b0fb10d372c6d"],["/2019/12/25/Review/無法計算的青春/index.html","230ab9e484b39bffa262ef2b566fd288"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","785f71137224ee7ecd5ec187fec67a68"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","769b7cb3018a5ad115dbd368c79f05bf"],["/2020/01/19/Review/下雨天，不上學/index.html","4490bd3f609b2ca8645f4d1ccd5adcf3"],["/2020/01/26/Review/三日間的幸福/index.html","9ff3d5a06806dce5d008128289394b43"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","fdda62b2ea95cca1da474564260c1d76"],["/2020/02/09/Review/青春期超感應/index.html","5f81c33b54f60a271f2f0134b4da88cd"],["/2020/02/15/Review/又做了，相同的夢/index.html","ab11a18004f76ba544ffff28929c4615"],["/2020/02/22/Review/回憶當鋪/index.html","000ba1563215bb816b91b8d18d1113fe"],["/2020/03/22/Review/不適合自殺的季節/index.html","b5a6e9c582130a57d03128204befe015"],["/2020/04/26/Review/我們都無法成為大人/index.html","5380c9c0a9c90f10f182a9c2548e24c9"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","6a0b2aa49f745e1eeb9c25ed1c43b1a7"],["/2020/05/17/Review/人間失格/index.html","6345b39b4d5175ba4bfb16ef03a89a4c"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","93fd170ad815533882fb73c4aaf0bccf"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","63279c2464e1710fb509f7532452b9f2"],["/2020/08/01/Review/銀河鐵道之夜/index.html","36095188a221d7fa648dded019ac7776"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","72396ed9bb2d0c9df56c361b78a8e19f"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d426c91ebf2c40c78bdcd0f7ebf1a68e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","35da15ac5f0830eea2600c4edabe2bae"],["/2020/09/13/Review/羅生門/index.html","b229df31fbedeb992e8827574bfe3561"],["/2020/09/20/Review/闇夜的怪物/index.html","03b429c9b647c304c0d0a071ff2efb54"],["/2020/09/27/Review/14歲，明日的課表/index.html","7231ea65bfc7b68d08ee0a6c1961d947"],["/2020/10/04/Review/致十年後的你/index.html","13ff7b798db22718bde61f9b9e843906"],["/2020/11/08/Review/滅絕之園/index.html","398ab9c20b7be43b575c10fb602d5992"],["/2020/11/15/Review/將愛拒於門外/index.html","4565ef9dcc7e03e0343c7f15189062fa"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","5901711e9e298ff393020daa8e639efe"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","17226cb66dc9eebf1564e50a740145d8"],["/2021/04/22/Review/道印/index.html","8523f5c396611562dbc55c774e3acb38"],["/2021/05/03/Review/戀入膏肓/index.html","c027cb70cbd69c49a5340059dbc470c5"],["/2021/05/10/Review/Dice/index.html","1e0a389414b3f06f69826caddb6406f6"],["/2021/05/15/Review/魔女之旅/index.html","693fb2d92546fd2a832e014ba3d3ac46"],["/2021/05/28/Review/戀愛寄生蟲/index.html","b94edd9419c325e5aaaae8ae8bc5e058"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","92b2266d9ee9d817fc2b47365dfa7f2f"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","6d867beefc818f1f57bef21bf9d14564"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","72b853edbf946a819451f2ab9b6f6e29"],["/2021/06/05/Review/流浪的月/index.html","c04d418e38e38435bdcb5108001a985c"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","790f242b7b8e12ae6e1731f0f44c1e51"],["/2021/06/13/Review/第一人稱單數/index.html","8144594d1671cef7efc47062eb0e4817"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","d28315699f274476f82ca3ef5eaf9c24"],["/2021/06/16/Review/願你幸福/index.html","cc805d83608925e8f1afc5e82bc4f65f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","5d4dc2751a98f3a483fc2707d4e393f5"],["/2021/06/21/Review/神隱少女/index.html","d40e5c371d10ebafca79348dc1a62a7f"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","b7a90bee61d33ee111ab1581160bdecf"],["/2021/06/23/Review/天空之城/index.html","4eeab30f9a10dbf5632e8adb0adde530"],["/2021/06/24/Review/魔女宅急便/index.html","86ac0431fc8426da61ba90c688c42b5e"],["/2021/06/25/Review/借物少女艾利緹/index.html","6321213ec194ce5dde9591d3243d2e09"],["/2021/06/26/Review/魔法公主/index.html","12aef82dd815dd8223b77a48c0fa047a"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","dff525aeb9e88b67b7b9509c6ffc16d8"],["/2021/07/04/Review/飛雪與劍/index.html","b4c857b3ccbbe66b9a7feaaf6f2cce0d"],["/2021/07/09/Review/地球防衛少年/index.html","072a6a378b5db4ba64d527db6be2f233"],["/2021/07/12/Review/Angel Beats!/index.html","d7de9edd062321d42db6cc9d720f66b6"],["/2021/07/13/Review/Clannad/index.html","55ee77a6a5a18dd80117b1ec9bcd18b6"],["/2021/07/15/Review/AIR/index.html","f6a364a6381de27531cfd9d71d92ece8"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","5c025ecd4d0de147c369e00646757e21"],["/2021/07/15/Review/螢火之森/index.html","9962c8c081f5e1cf01bba7eeedd43f61"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","0911f63104bade4eef611ca1d7ff3552"],["/2021/07/17/Review/奇蛋物語/index.html","9ce0b899536432e0ff809d247ed1142c"],["/2021/07/18/Review/Vivy/index.html","8314d4b119b43acc20e2bb8671d2b33e"],["/2021/07/18/Review/請妳消失吧/index.html","8b003eb2fa0027cddde18ff6f0b63796"],["/2021/07/19/Review/漣漪的夜晚/index.html","dcbb4d22177c9f6b88565bbeebedb95e"],["/2021/07/20/Review/月色真美/index.html","97e85796bac4d8912b9ea4fad82da341"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","69d3a274f37311833008eeea5fbbfed7"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","2067171bd5a7c76d8b7e38d1dc5acaf3"],["/2021/07/22/Review/罪惡王冠/index.html","6e32e98f13cc42f4a91e03e69a04fa84"],["/2021/07/23/Review/弱角友崎同學/index.html","c909ca048d9cc898316fed78c506416e"],["/2021/07/23/Review/惡之教程/index.html","3d32bbf1e22265b437f1be5943132c02"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","729a1d0cb6daa706fd1285087c716554"],["/2021/07/25/Review/魔王勇者/index.html","915f8111cfddec24c59132645472c2dd"],["/2021/07/27/Review/一年A班的怪物/index.html","571d5710d147ce94736cae2d0501b6e8"],["/2021/07/27/Review/奇巧計程車/index.html","87dc1b6655702f8597a69a60820812fe"],["/2021/07/27/Review/專情的碧池學妹/index.html","b135521f3401b912e42fdc87c5da8425"],["/2021/07/29/Review/只有我不存在的城市/index.html","0302d0f4e55aa0dff37f2515e1692c86"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","9d8a149c8ece2d6526cbd4c49e034d7b"],["/2021/07/30/Review/可塑性記憶/index.html","14dfb6c8692fc450a7134f1a5318d35c"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","4541a5ddc11a46cb557c79c6c13aa839"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","dedbe6477899b2ece50c304874aaf672"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","7974366de71af5120e2577cfc9694548"],["/2021/08/25/Review/清戀/index.html","e2be59d110cff121993edd691891de5c"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","ae90c2b2105418d3732176c1314193d6"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","15d2b670058d187d2ef3744da0c15d6a"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","5fa2ae5d0818155a45111aed07833d71"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","2e79ea2101f7517f0abd53de45e5965b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a0f79c25fada9920223ac4030835d9f0"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","ac0ee9968eb34aae7ca5f82e512ea0e2"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","c6f384cabf7fca40d6d2120870965e53"],["/2021/10/16/Review/龍與雀斑公主/index.html","390ac6dc0c1dd4b9fed9323a9e6840c7"],["/2021/10/19/Review/孤狼不想開後宮/index.html","366b62963a6ebafce9b5c2771115d047"],["/2021/11/13/Review/徹夜之歌/index.html","35f3b27e7145868824d0a88fc2c05ba5"],["/2021/11/24/Review/武煉巔峰/index.html","95da43602fca2e05fead22e1d37c902d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","b05ea03431528e618711e0cd3b3603cb"],["/2022/01/28/Review/神醫凰后/index.html","58ba55f1baaade54b00d6f5be2847060"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","fd4e8eafa1ac32bda7595c5656331d8a"],["/2022/02/13/Review/夏日幽靈/index.html","e76215020cc3ffe3a5e51fe935e47ec0"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","ed443beec01fda7e2fc761247638f81f"],["/2022/02/26/Review/賽馬娘/index.html","e3a6c2d41268dfd582aaf9587f6838fa"],["/2022/02/27/Review/大欺詐師/index.html","33dc8abb663d7328e7aac44aac6a10d0"],["/2022/02/28/Review/前輩有夠煩/index.html","52c4ac2430ecf35f7acd8c769ea7ffa7"],["/2022/02/28/Review/碧藍之海/index.html","d89e1edcc9a611f93a3db688c57668e8"],["/2022/03/05/Review/落第騎士英雄譚/index.html","7955ed6f854a14b6bd872a7304368ac0"],["/2022/03/06/Review/Another/index.html","eb71fd8fce8e38c34aca930ee8a18717"],["/2022/03/06/Review/入間同學入魔了/index.html","8261f9b00b96a756a50cce73a67a7355"],["/2022/03/18/Review/再見宣言/index.html","5bd638fd274a9c8a2f287dc461f715ea"],["/2022/03/23/Review/生若冬花的妳/index.html","06f66bb30735d776bc10cfc2b77f0484"],["/2022/03/25/Review/天之弱/index.html","5c5d11156ca9a5ac555e348a7d7dec7c"],["/2022/03/31/Review/滅了天道之後轉生/index.html","bf040954ea91a2b6e76ef96bad1b20e8"],["/2022/04/30/Review/泡泡/index.html","764c9862922f1a85a573725f73b3134f"],["/2022/05/04/Programming/Dynamic Programming/index.html","70716de85bce839615b15cb25eb7aee8"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","6185779ef6d657240f6b0b4d679555c7"],["/2022/06/13/Review/偵探已經，死了/index.html","c20e5afc615e63e63eb8484aee20d1fa"],["/2022/06/14/Review/黑色子彈/index.html","72a58ce580148a34753d107b48b09926"],["/2022/06/15/Review/黑白來看守所/index.html","35604718b37e27aed88bb1710f8eaba0"],["/2022/06/16/Review/虛構推理/index.html","30037e531cb1e5ec145153ce57c3060c"],["/2022/06/17/Review/戀愛與謊言/index.html","c3fb5b2c034e7fb8aba51b408aca2888"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","32d3885a489b001f9009c3f6337a1667"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","5e83b928188e41db4cc04e4a5a2b0672"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","36adc8dde3bbedc0ca8daa5fa8a839e0"],["/2022/07/03/Review/Hello World/index.html","e4cd335b17dabb64abb095e4b1428cab"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","501ce766da87485962d1f849d5e3a0df"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","fa3caddc4d6a6e9789ec677285fa594a"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","48f43565e3ec556c994d1151a1148447"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","d4e4cf7a6410f5bdafb3c984bd33dd49"],["/2022/07/16/Japanese/動詞分類/index.html","bcade84c61671b1d1f6518f91bc3e08b"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","f83fc9f11c916586a713180ee4259aa0"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","9a14573fd17ccccbc03024eddc98fa57"],["/2022/07/17/Japanese/音便/index.html","121558c8019b6af925c6f9c2071e8ca8"],["/2022/07/18/Japanese/動詞 時態變化/index.html","15b7de48bfba7a8a603a8d217cb5a50c"],["/2022/07/19/Japanese/助詞用法整理1/index.html","458b9491c8d5033df99f9a9bd6784d23"],["/2022/07/26/Japanese/助詞用法整理2/index.html","38d86a4054a26ca5bbeaf64477e32e38"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","73166aefa09a0db2d6849f86aeca3762"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","ef3972252cacd13f164c7b101a5b9f5c"],["/2022/07/30/Japanese/疑問詞/index.html","7419bcfe2d1547ba0bce6801f184dcc7"],["/2022/07/31/Japanese/助詞用法整理3/index.html","ed131bc0837d8f21a296153f7cc948fe"],["/2022/08/02/Japanese/副詞整理/index.html","9834fab7819f19c6d4231323fac73b3a"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","ec40bfcb62d9bc0919b3cbab5becc086"],["/2022/11/04/Programming/Data Structure/index.html","e49e853e473f9b2c96a4bb56323af2c6"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","81896e45656e19c18e6636d6c7bf0c22"],["/2022/11/22/Review/組長女兒與保姆/index.html","a4c6a9260fd2b4a0ed0a59c65bf94aeb"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","5ad1ea2f2679a67952a2d9ce78fc2bd0"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","0442d1cbda74852b9a6eecf7c1365192"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","07882f86891b2bda49da76dcf8da5e0e"],["/404.html","710075bc8a1d9a0920727d4305c10634"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","ee3f7c2af1f5f2e9bccd04eb2d1ade9b"],["/archives/2019/11/index.html","6a031ad6866b1c6c520a809bda9314de"],["/archives/2019/12/index.html","4e4dd76f783fbf85a0f7f44b8d4de6fc"],["/archives/2019/index.html","04ee3ad4fb5fe2cb0936d8b824117d16"],["/archives/2020/01/index.html","d4941472572ca77af9cd05a26f306dc8"],["/archives/2020/02/index.html","7c2b7c739d0c419bc122089876e0e46a"],["/archives/2020/03/index.html","878e41940853714d9f7e006f057314c7"],["/archives/2020/04/index.html","eec929c94914a4dbe2dab68f8d0e4c9c"],["/archives/2020/05/index.html","14cca666069ddc6b1a5187412ed71f4f"],["/archives/2020/07/index.html","a92e0e0b626bd0177e3eafb0318af230"],["/archives/2020/08/index.html","0e697d38789dda690e4508e1de56cd18"],["/archives/2020/09/index.html","ea9b9dd4f45f4f20edc96219e2f11a8b"],["/archives/2020/10/index.html","93bf3bbd529f60e306289b43e7378fb1"],["/archives/2020/11/index.html","9b21adb411e417a208f875434ca00cf0"],["/archives/2020/12/index.html","99d50e0d9c773f7bc990e697445144cd"],["/archives/2020/index.html","04daa7bc644cc24230996d009adb8bea"],["/archives/2020/page/2/index.html","8a96caafc410c5fa2a436996ce90a14d"],["/archives/2020/page/3/index.html","22e6bc7b4b25a07897bfc0227538c9e5"],["/archives/2021/04/index.html","a4d6b3d97fbefa294cf4f4fc4987f98a"],["/archives/2021/05/index.html","125eec94170b158d9fce67e7a96c3de4"],["/archives/2021/06/index.html","ae75358841ddb72ca7099d19cda5678a"],["/archives/2021/06/page/2/index.html","d20ad2996b3344a06bdd810fa4451c9f"],["/archives/2021/07/index.html","de76bb12266ddbe0a6d2d606206e9c95"],["/archives/2021/07/page/2/index.html","9c14f5a8739bd500d4fd10342379803f"],["/archives/2021/07/page/3/index.html","03f1b5d2e35e79388fc160760ba515a0"],["/archives/2021/08/index.html","5e45e39b751bcf416afdb4fc52c148fb"],["/archives/2021/09/index.html","b8a39450b24cfc1c91a58cf9758c5902"],["/archives/2021/10/index.html","06f02ab477b0583842f77cb0d6d2e5aa"],["/archives/2021/11/index.html","e403f2bb6f7994a369edca7a30cee564"],["/archives/2021/12/index.html","8a082eec75b2163d3082fed209356efb"],["/archives/2021/index.html","d9e61fadbbde1522a33321abe08124f1"],["/archives/2021/page/2/index.html","6e1487ac738c59366059cd478d010e13"],["/archives/2021/page/3/index.html","2154a460c8d8804cb7829b85ede54799"],["/archives/2021/page/4/index.html","4ace886b94ba95c896f39bbd214e8674"],["/archives/2021/page/5/index.html","e778448da1af34eecdb10a2a0df3222e"],["/archives/2021/page/6/index.html","184ec1013b8a8d3399021d0b8a98db98"],["/archives/2021/page/7/index.html","d5eb49244b537529d830f704d1814ea6"],["/archives/2022/01/index.html","ca1d21fa736faa6df9bc2aafd0ca1d01"],["/archives/2022/02/index.html","1d3011897c3cbf928e53f158b344736c"],["/archives/2022/03/index.html","dfd6ed38bb107a8c3716392b4c55a4a6"],["/archives/2022/04/index.html","366419334fd308b433365476c18dfd25"],["/archives/2022/05/index.html","acf48dc796fe8f384712b124d408808a"],["/archives/2022/06/index.html","d56aac8fa77c1ac2f42f8b216e9f837f"],["/archives/2022/07/index.html","69103f2c5f9b469d9fe683be1b698450"],["/archives/2022/07/page/2/index.html","b8b4a915583f28a42ef1ccf1855e74df"],["/archives/2022/08/index.html","dfbc09e713a986db6887aac49e88e7b6"],["/archives/2022/11/index.html","9ff6690bfd1d1210b6f1d6cca22a62d2"],["/archives/2022/12/index.html","1e262d1adfb832ce3cd1c28ec19a0348"],["/archives/2022/index.html","848a533cf1de0469acc4941474e52be9"],["/archives/2022/page/2/index.html","3246c49a6c791ee7961b2546699452a4"],["/archives/2022/page/3/index.html","337ec04b55759d9db385a9c07ef2871e"],["/archives/2022/page/4/index.html","2a26da73a6849135e22df1b267b51299"],["/archives/2022/page/5/index.html","173c6d39f9a3fc27c7b3d34ca6496933"],["/archives/index.html","ecabc3993a8e6c77944e14a0f39046f7"],["/archives/page/10/index.html","bfd4c2138aa07998179354cfac033aaa"],["/archives/page/11/index.html","f42b5ecb04f060bf02ed20581ea2a210"],["/archives/page/12/index.html","8064d858c2e8ef67ebeb1b0c65081323"],["/archives/page/13/index.html","ac1a262da8bca7a9ba143bf5dca11da1"],["/archives/page/14/index.html","1dffc43c0786ab84b7bbf7ad70448a22"],["/archives/page/15/index.html","be8b0b6d23ac75143664a427dfd6314d"],["/archives/page/2/index.html","765f1b1329584100bcf5c8b691116676"],["/archives/page/3/index.html","aa7843b3fa630a14a951114aa1cdeb23"],["/archives/page/4/index.html","43261f477388c81a7a1bbb69d4a0f454"],["/archives/page/5/index.html","622b80e1d7c355fd3c2fdf4a6e589f43"],["/archives/page/6/index.html","1ac545d00b20e44f4829ce6087314a2c"],["/archives/page/7/index.html","158765c02033b551113a1a74b8254043"],["/archives/page/8/index.html","9a290dacd79eb5ebf09f82af3af8a6d3"],["/archives/page/9/index.html","500cef9f9c4544ae0b553b50048e4635"],["/categories/Programming/index.html","ccebbc9cf09df182469054e447348cdf"],["/categories/Review/index.html","a6c3db26aab96d04b0a4e1f2953515f7"],["/categories/Review/page/10/index.html","359f381a0c5c249dab0dbb7c4121dbb2"],["/categories/Review/page/11/index.html","8fed2f4903a8b407c1023df4e3936a83"],["/categories/Review/page/12/index.html","ad7750f02e8bbbc63bdc55d07eee19c2"],["/categories/Review/page/13/index.html","9b682be214732ffa0778fe816279eb34"],["/categories/Review/page/2/index.html","27c6cb99a4db243f8d5608cef73c82e7"],["/categories/Review/page/3/index.html","e1bc45eb9e5b19c8ab8d105c23b24ff2"],["/categories/Review/page/4/index.html","28b31660b638d774ac62e521a54f481c"],["/categories/Review/page/5/index.html","b3f384111c25d5a9abb6167d3e3ae32b"],["/categories/Review/page/6/index.html","44d50c255e59285297786677b70bfda9"],["/categories/Review/page/7/index.html","c221b1a0f3facd1a1bbad7c356bd1abb"],["/categories/Review/page/8/index.html","ecf2a31222b4ffaf9f44904eb5460a04"],["/categories/Review/page/9/index.html","8601834e27befd23a5bb748002353349"],["/categories/index.html","dd743e8c8ff3d5ecee9f941d2a940ecc"],["/categories/日本語/index.html","7f45e7d04e5c9ed420e7d87178fac6e0"],["/categories/日本語/page/2/index.html","d5b2b78594a41ae57caefb599e1d996a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bc967e387ab77cfdbf2164b66a590a30"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","21d67b374025ecfa848ce3f11c524c97"],["/page/10/index.html","f1162b384e8262506b20a63b08add833"],["/page/11/index.html","a8f6650990a60f18c69414ad8838da11"],["/page/12/index.html","f15d1251f4a828846b7d0af629a3f343"],["/page/13/index.html","774465348ccff0c6ba84a1aac661d7b5"],["/page/14/index.html","ed6c548218faf47b7457b4dd858fc1d6"],["/page/15/index.html","960f9d649d9c5cb53680b141c6806a8a"],["/page/2/index.html","5121b89d504c7f0a0a1f34b08c436e69"],["/page/3/index.html","0f83ad21879424141387d51acdc98e0d"],["/page/4/index.html","5375011010d267e4c50dbd0182947e80"],["/page/5/index.html","b7f72235636be7dad84760f038eeff5a"],["/page/6/index.html","41dd4733bfd1d2e7eab4f31a89351d02"],["/page/7/index.html","8af6adb86779527629109f80a9fe7978"],["/page/8/index.html","5d314f278ceeb41ec4bc01fbc502f0c1"],["/page/9/index.html","43d07780700c7a568bd627d2a5c77a84"],["/sw-register.js","47e2f1565c481b09c65c3005bc8838dd"],["/tags/10分作品/index.html","c9a84f0313e62d64fb766b7f99ce242d"],["/tags/3分作品/index.html","52a47808043c1a3ba24ebd265d2e488c"],["/tags/4分作品/index.html","aced31ff783ab9a58c664482c865cfca"],["/tags/5分作品/index.html","636be4ea140f7250621b16ec497067ce"],["/tags/6分作品/index.html","6fa7d1eaec1aa8a313cde5914a6bc2f5"],["/tags/6分作品/page/2/index.html","628d971130992208ded4117d754d736b"],["/tags/6分作品/page/3/index.html","daf11d2b12ab02810a73fccc2f33b7bc"],["/tags/7分作品/index.html","f0c06a0cebb7188452f85e6e3f511def"],["/tags/7分作品/page/2/index.html","a32446bc6ca673ffd3f67a8797750fc7"],["/tags/7分作品/page/3/index.html","3f3c9b3fae0241c0500765cca16bb78d"],["/tags/7分作品/page/4/index.html","8ea03b3801f9b885ad27216ccf94136b"],["/tags/8分作品/index.html","038a4df2c7d7f3aa7e1af95e2d7d5356"],["/tags/8分作品/page/2/index.html","78ba00b1eabc974fe7b7343c68d4a684"],["/tags/8分作品/page/3/index.html","4bb192b89ac1eb9922c6eeb6ae2da0cc"],["/tags/8分作品/page/4/index.html","28168877ed0e1ab8074fde1522f500fe"],["/tags/8分作品/page/5/index.html","3638f5810487379db48ac7896e885966"],["/tags/9分作品/index.html","fac767167de8f88036f314c3ae85b3b3"],["/tags/N5難度/index.html","c01c9b386d1034dbe7195763c6a8fc07"],["/tags/N5難度/page/2/index.html","1a59ee058bd22d0085fb98d465b7b985"],["/tags/index.html","c740ae3fff070abc9f452f28ca931535"],["/tags/アボガド６/index.html","2b86e15b7a30992ba88acc1ba1902fbe"],["/tags/三秋縋/index.html","d54fe06c75a2f4f15b796d926d811e8f"],["/tags/中國武俠/index.html","4660547a35b7bb85223f9b66ad014482"],["/tags/中國言情/index.html","04d3e578fd677d809ebfb275e4562484"],["/tags/二宮敦人/index.html","29754c087e2410aaafd3e200f6f6a569"],["/tags/人性/index.html","8c038b7b05f1d52191d1368ca8390d38"],["/tags/人際/index.html","ddd7841c2f29c4789dae9740adf06039"],["/tags/住野夜/index.html","2cc4758155d51d9a30cb807f9f687906"],["/tags/佐野徹夜/index.html","13bd4b9c8ef084899dd7c84774861f50"],["/tags/努力/index.html","bf93c52ef9fb0a2effb713725f85daff"],["/tags/動畫/index.html","ea6e384a38486c464ffdc96d10180435"],["/tags/動畫/page/2/index.html","51bc037ac00daa6f6b7c96b72072f794"],["/tags/動畫/page/3/index.html","7588759dca7059cda2937ec3980bf690"],["/tags/動畫/page/4/index.html","0cbdfd626b969900a9090335c434bcd7"],["/tags/原諒/index.html","a690a580fa874ec4ed8527cc5b3853f8"],["/tags/反烏托邦/index.html","b639f8fbafcceb0157a4d74b5f705e64"],["/tags/啞鳴/index.html","046b27ad79b784e1895115551547b53a"],["/tags/喜劇/index.html","9b6a0b037c7631aee27ccbb532fc287c"],["/tags/夢想/index.html","daefa4e4b521937a0fb06c90a1f5336a"],["/tags/天澤夏月/index.html","3273295a7579d6319a13a56fc9a2c290"],["/tags/學習/index.html","e8ca03c5127d80fc7d8b552dd5e74c93"],["/tags/學習/page/2/index.html","879affd1c23279aed9a682414faa6dcc"],["/tags/宮崎駿/index.html","15203ca54ae512fc005ea5967c09422f"],["/tags/小說/index.html","68538de2344e84795492c2e39d1e0597"],["/tags/小說/page/2/index.html","c7432b3652da10bfc0cad3f9316b5aa4"],["/tags/小說/page/3/index.html","3f6dc07d811609883ada861fe6e21e78"],["/tags/小說/page/4/index.html","a0fae2ecaa9636d26d64d1e3fd16b12e"],["/tags/小說/page/5/index.html","2fa4a1c6a006401256592a9300468546"],["/tags/小說/page/6/index.html","e758636de86ed758a751be0a7ed67abb"],["/tags/小說/page/7/index.html","d854e28296df727675f6a6bc7d616808"],["/tags/平淡生活/index.html","2b7650d8a3ffad7cfb68aafa9db479c5"],["/tags/幸福/index.html","22dd3d1442753b5cd60e18bb3ad57ce0"],["/tags/志茂文彥/index.html","e44c228d5589540cbf4ea427dc7d21a8"],["/tags/愛情/index.html","3b4d0f4ec2ecbf0e779ba61102c02897"],["/tags/愛情/page/2/index.html","5beba693cd735cbf70bd7b05fd4dc16c"],["/tags/愛情/page/3/index.html","0fc8827a688752b2e9b682f995d2c383"],["/tags/感動/index.html","beff7f63cd0ec030db8d6d45ce9c4e45"],["/tags/懸疑/index.html","cfae7c356654b1c90c8751ee22dfbe25"],["/tags/懸疑科幻/index.html","8687b3dfacfe858b24d4d208a48c1174"],["/tags/戀愛/index.html","20a87640e79e02864e7834856af832e8"],["/tags/成長/index.html","0e1f1dd6588de9588a01c6d70da6293d"],["/tags/成長/page/2/index.html","b3d8dfc73fd8ffb701db7ccf08c9d426"],["/tags/戰爭/index.html","906fcfd080ac7beae8ce422e86ec4477"],["/tags/推理/index.html","4b4e8d7618adf290f15c6340716ee65c"],["/tags/搞笑/index.html","3c929d2dafb4aecade9d495dd0aaf355"],["/tags/救贖/index.html","4055397389ff6283729f4c83f91a343f"],["/tags/斜線堂有紀/index.html","bc65d660ea73db922ea7c699c6f9b385"],["/tags/日常/index.html","8cc19c879fe87a607a8f8ca008bd370d"],["/tags/末日/index.html","8573e84a4857f6f33327c01ff93a89dc"],["/tags/校園/index.html","3c38eb27aaf40de57fc7ffdb7f19be7b"],["/tags/武俠/index.html","289a7fadea1b8f08b486e89415cbf481"],["/tags/武俠言情/index.html","93dc3532054e0168f08d39295419734f"],["/tags/漫畫/index.html","0ca3cab7e8284aec5ff052cb4a7a17bc"],["/tags/生命/index.html","8fcae7ce6efcfbef3b0a98b8818c9c75"],["/tags/生命/page/2/index.html","a6e363a1674270ef5dfd5c0ecb2ce33f"],["/tags/短篇/index.html","82be50d5f8b4cc4294b97242d246e21f"],["/tags/社會/index.html","960c9ade5232f054a3020c6bd2f5ab29"],["/tags/科幻/index.html","c7814edb01d51a6e32fe477eb714922a"],["/tags/童話/index.html","04ae1c66fc9d5ad7f1e6ad7f93c336ae"],["/tags/競爭/index.html","2991b0756bc4e936bb0d763795fc3ede"],["/tags/自我/index.html","dcbd6fed21fab4d28b0fcd9e009d95a0"],["/tags/自我認知/index.html","f8c0eb50f55a09120a6b2f40d9e2351c"],["/tags/葦舟ナツ/index.html","d7317bc1e554d29b3da9e640c95b9636"],["/tags/藤萬留/index.html","67e8baaa7cd37002d2d057e44b9b8f26"],["/tags/親情/index.html","0067c552b9020682a51f24b18d00a207"],["/tags/雜項/index.html","1f1b8a28518578d460f3a0604c021341"],["/tags/電影/index.html","7ce9a2e0676608539322f94a2a2bd1ce"],["/tags/電影/page/2/index.html","21db4277b920420f03e7a0b06072ebab"],["/tags/霸凌/index.html","7c8d79933eb7ba9ab7c3fabf1b060dad"],["/tags/青春/index.html","211099d66b65839844c7d3d0572fdefe"]];
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
