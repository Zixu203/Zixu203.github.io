/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","cab3d07292902957333f69a3b98f0132"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","c7b6e6bea2e1a34fc5233f7a6a4a70cd"],["/2019/12/25/Review/無法計算的青春/index.html","ab8a87de0a0f8a64be6219d1eb33383d"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","1467edf89064ec1b4b5ada787d1fc0c8"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","a9d95e2b5cdbabcd2eca97291cf1663b"],["/2020/01/19/Review/下雨天，不上學/index.html","ed28f60dd174caa216994bb5d8af396c"],["/2020/01/26/Review/三日間的幸福/index.html","59f0b287a6fc8354073bc71a5239d2a0"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a7bdf6f3391da6cd249153460a58f0ed"],["/2020/02/09/Review/青春期超感應/index.html","5a9a23f233cb9b530aa0237ed2c74639"],["/2020/02/15/Review/又做了，相同的夢/index.html","26f54eac1dcd075a06078b6f04996551"],["/2020/02/22/Review/回憶當鋪/index.html","01f4e12d928f661abce36ddc8738ab6c"],["/2020/03/22/Review/不適合自殺的季節/index.html","bb5ce4bd947a1bcabfc125d55fb0f0f2"],["/2020/04/26/Review/我們都無法成為大人/index.html","386b5681aa5b8ff0fb8008ea4c5badc8"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","3d7a61efc82a88741d7b7aa49f923b03"],["/2020/05/17/Review/人間失格/index.html","fe160b1030deb39102247bf381c1e7fb"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","b5f89e7a8a0edfdd83253c1aa197989d"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","b170f4529cd90b1f57ded0d4ca8e4e5c"],["/2020/08/01/Review/銀河鐵道之夜/index.html","00851026edb0b2ebe6c96de19f5c55f1"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","163a30fbba18dc20fad162e1d2865f7f"],["/2020/08/16/Review/15歲的恐怖分子/index.html","9db1ba847b0e6a7bb0ce8bd944a9a84a"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","3696fd03bfb4e4b9dc9ec407aebffba5"],["/2020/09/13/Review/羅生門/index.html","97a4f4ac3f25caface2ad3202ddc3982"],["/2020/09/20/Review/闇夜的怪物/index.html","db896ac03b00403a8ceeda94a7668810"],["/2020/09/27/Review/14歲，明日的課表/index.html","102972ae39d09f6e8b2bcdec196a2567"],["/2020/10/04/Review/致十年後的你/index.html","81f6a80bb433cc951f4ee3caa1db12cf"],["/2020/11/08/Review/滅絕之園/index.html","4888743feaad0a9eba3a30224581d11f"],["/2020/11/15/Review/將愛拒於門外/index.html","c361788d6d25e157f17c02ccef9eaad2"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","00c59e6dd505563ee6f08bea5c7f91c7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","3674750895ee189133cf69cfcb2fc42d"],["/2021/04/22/Review/道印/index.html","71f44979fa8211bfe9ea9bb7d5cfcb4b"],["/2021/05/03/Review/戀入膏肓/index.html","a0e2b88aadc3502097e8f655a46a4a83"],["/2021/05/10/Review/Dice/index.html","23a46b0f746e1f5b146c352913e0048b"],["/2021/05/15/Review/魔女之旅/index.html","98c31eadce383ba43468d1d82cc8a3fa"],["/2021/05/28/Review/戀愛寄生蟲/index.html","a90e8063fcdd2e950e57c534b895b3bf"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","4399b23cb1ed27b08da74f6884c2fe9a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","a7559a6f3f0d7e0444aa600359fbef45"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","254e3a1c5b726af11786e6b22f8a2bf6"],["/2021/06/05/Review/流浪的月/index.html","33876904aa7831850bbe01d48c78d524"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","0ca8663029a67d7c0070c13d4b798772"],["/2021/06/13/Review/第一人稱單數/index.html","168b959a3f04e69e458d915a40f9cbf8"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","447c8e1394558f80513dada218fdf127"],["/2021/06/16/Review/願你幸福/index.html","ae2c5dcebf0bc81ee812ae4fdf1b33bc"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","b2dca0fad9ea2ded79bdf2d7d0c2948d"],["/2021/06/21/Review/神隱少女/index.html","ddf4ebb7d7d1c7f002b43169246c5cbd"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","18b6f046911b910228faf66c00e2dccd"],["/2021/06/23/Review/天空之城/index.html","8c4c6f5ed5afebd687dedc60017382d7"],["/2021/06/24/Review/魔女宅急便/index.html","b16591369b8902358a267d34946b2632"],["/2021/06/25/Review/借物少女艾利緹/index.html","be3e8e963850f4d0aef43fede3cd6de9"],["/2021/06/26/Review/魔法公主/index.html","4ea37688c7242d0be8c2095d59c54272"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","7cf983693468ac82f4ca004c3c33494d"],["/2021/07/04/Review/飛雪與劍/index.html","27fcc91c4296e48d9c819829a2baa981"],["/2021/07/09/Review/地球防衛少年/index.html","b486fdc2f8636b8417f64b82dab1297c"],["/2021/07/12/Review/Angel Beats!/index.html","292fc61ad88d4328a721963e28c2d7a9"],["/2021/07/13/Review/Clannad/index.html","10e36743b8e31b09c5bf9e427c41637a"],["/2021/07/15/Review/AIR/index.html","728e52d56efc650759aed564c850176d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","ff333bd663875ade33a84812c7bfef13"],["/2021/07/15/Review/螢火之森/index.html","d09aebf3fd36f15a33910b3e95147bbb"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","1b63eb278082c1a487eec2c0b2a6b7f5"],["/2021/07/17/Review/奇蛋物語/index.html","0d45e58db8cea1d8161119e70e58e6e0"],["/2021/07/18/Review/Vivy/index.html","0a7711c8dca6f65e15bb83e1dbe158ae"],["/2021/07/18/Review/請妳消失吧/index.html","3d5ebc0fde43be42dcf0f33289f79365"],["/2021/07/19/Review/漣漪的夜晚/index.html","6e81e5ade3ae5b09bd16a736b3511dd0"],["/2021/07/20/Review/月色真美/index.html","d4a0d1ad5a4d7dcb29ecdd3f41df8b5b"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","9123518ec14c8cd5b1e999c716ef3eaf"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","9639f12eb2f90be933e4d066d67bfe16"],["/2021/07/22/Review/罪惡王冠/index.html","2985be4e131bb4f001920c567f07968c"],["/2021/07/23/Review/弱角友崎同學/index.html","7bb69335207c55cdd1e78ee7e008170e"],["/2021/07/23/Review/惡之教程/index.html","01a5fef2016d17ceadb3961b5bde6089"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3ee1f5557e08bbe5d2d0b8ec52cd5904"],["/2021/07/25/Review/魔王勇者/index.html","b576bee73d868e156ade1c6ce1a6e7d4"],["/2021/07/27/Review/一年A班的怪物/index.html","b92c35486a39e3bb0d62386329f8e621"],["/2021/07/27/Review/奇巧計程車/index.html","57c80652ca66089941047f2c2a63752c"],["/2021/07/27/Review/專情的碧池學妹/index.html","75e39decb0923ad647876df3ea171522"],["/2021/07/29/Review/只有我不存在的城市/index.html","d98d28c60e175b8aba1184992cc75151"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","999191df1a1505ef760fe65185e9e605"],["/2021/07/30/Review/可塑性記憶/index.html","b8c575318ff3e4bc4b3c5c7ec101445d"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","dd62c3d47317e8de35e79e6c333c438d"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","7937563b54ad3d8cf7d4fec4299bd3b9"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","10e9a77a9f0ae1885cf9211b0070f408"],["/2021/08/25/Review/清戀/index.html","2db965bec6c17739dafd247f4eb010ae"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","101a656b02759d47c4bde9c0dfb8703a"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","26668ad266ce94533b3f82b6f47ab692"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","eeaf4cf904267cf849d80b42b0089aa4"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","943dff7417e9819f8954973d04025e51"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","190e38ab0c7d51615d5e5f214e7d0ca9"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","03d9d54c43165b2eed316c3ba8a485ef"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","4e59be1c404a7cadb27cb773f2230f91"],["/2021/10/16/Review/龍與雀斑公主/index.html","922ca251ff34067dad6ccdb5a99c398c"],["/2021/10/19/Review/孤狼不想開後宮/index.html","3041c62780b8251af4eb7fdbb998a96d"],["/2021/11/13/Review/徹夜之歌/index.html","edcbc70cf39a4bd6f82e2fd52340f669"],["/2021/11/24/Review/武煉巔峰/index.html","6847aedfb4fa56eb1fe92c4454f91c02"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d31a40aa2bbab4be462b43d80ced03bf"],["/2022/01/28/Review/神醫凰后/index.html","a890398cf9be6fd15483653171977716"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","0816340b298a1c7ff369cdb91a8d4a60"],["/2022/02/13/Review/夏日幽靈/index.html","c90aaad62e400a42b1d0a3be0ff1237f"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","474ec64c3eeabd3a5258ee0bf3247b90"],["/2022/02/26/Review/賽馬娘/index.html","4fcdaab497c412f467439f457fc9d414"],["/2022/02/27/Review/大欺詐師/index.html","0fdcd5b330b2f6fc388c99b922162320"],["/2022/02/28/Review/前輩有夠煩/index.html","b276b553169d260e36406f910774e7bf"],["/2022/02/28/Review/碧藍之海/index.html","6b6f1074a45e3a00cc2e802340c7b896"],["/2022/03/05/Review/落第騎士英雄譚/index.html","6f8426261292c1ace4978c830f7c711f"],["/2022/03/06/Review/Another/index.html","2020e40baef867aa4dfdf0bd7ac200ee"],["/2022/03/06/Review/入間同學入魔了/index.html","76bdfe4c44e5a891369529b3c435e09b"],["/2022/03/18/Review/再見宣言/index.html","850ae3d9a58696679c0c3851f61ead35"],["/2022/03/23/Review/生若冬花的妳/index.html","df58598ed8cbe1232e8075e30553e395"],["/2022/03/25/Review/天之弱/index.html","c46fb173ae6a3aee5787236c935ad9ec"],["/2022/03/31/Review/滅了天道之後轉生/index.html","025b5f153d0aac22af67aa9119d3fbbf"],["/2022/04/30/Review/泡泡/index.html","555dccee952485144744baa469b89593"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","c8f95ae9fce17dc31f9556a984587d07"],["/2022/06/13/Review/偵探已經，死了/index.html","b7278c502d47553a8a0cf7e34b70978c"],["/2022/06/14/Review/黑色子彈/index.html","0b4947ac2425653ffee319cb1a0ae5e5"],["/2022/06/15/Review/黑白來看守所/index.html","7282dbc85e98a98de4dfdf17be2c2443"],["/2022/06/16/Review/虛構推理/index.html","03357ea1083c5094d5fccd038278058c"],["/2022/06/17/Review/戀愛與謊言/index.html","0cbaee4e8ebda446ae63a53597bbe7bb"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d05507b0638454d7ec07aaecfcd9d429"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","d8d95ed373ddd93e1ba24527ac2cdaca"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","31be36f6a79ac0784e8004ce854918f0"],["/2022/07/03/Review/Hello World/index.html","57b465d33cdaf23a9ca0b0b555f3dcff"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","9221fe03f1dac6b39d8b2666b2c6461e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","e8f76c25a4b66abd768f3a8c00e575d5"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","14afff20c62c125b20c7e7ae1d065862"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","fcc449379e29528203fdc5407cd637e9"],["/2022/07/16/Japanese/動詞分類/index.html","83fe8d6c3f38045a2c39c49d0d7ee670"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","80dfb564466b5045e4946af85bbbd0ab"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","d4cee5a1d8dd62a144f893c53b0d73c9"],["/2022/07/17/Japanese/音便/index.html","a9642eb497396ce3f0a1e61ac63f13cc"],["/2022/07/18/Japanese/動詞 時態變化/index.html","fbf1e88b2254fd435a9ac97eb23d8111"],["/2022/07/19/Japanese/助詞用法整理1/index.html","e8457f2af3f0a0b2b1d594aefc8c8a0b"],["/2022/07/26/Japanese/助詞用法整理2/index.html","e9a71d3e5d4b77b80121678c0aa2d43c"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","f43d468e8b6b246b422d05b7fd88d8c9"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","813910b17c1a671ac2815849c1f20df2"],["/2022/07/30/Japanese/疑問詞/index.html","2c3df9fb4aa4a0a450f4b009931fdf9a"],["/2022/07/31/Japanese/助詞用法整理3/index.html","16156fa99fdde9a17d224d11d21d2353"],["/2022/08/02/Japanese/副詞整理/index.html","dea27f9aebf4b45caa012436b742b961"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","66a06ba9b0a098e0a2f5b3fa9d12c9e4"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","def20f2fd9cce28ef68c2adc7efc4868"],["/2022/11/22/Review/組長女兒與保姆/index.html","97eca3dd3c735675dcd34a4cacd3787e"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","8d93d01d64c383055b3c73d30100faf5"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","510a2b9998ff4dbf0ba00e1df35a0e4f"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","a4171742a2fb8680191c79e378ce2446"],["/404.html","ba2d6584b49f0afb6df0a2214d6d4ef9"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","90fc1893843f81ef519cd36f373a53f8"],["/archives/2019/11/index.html","65aba0b56cc50ddedac116f6ef6ed75c"],["/archives/2019/12/index.html","81c9a0e40733a6658d30926e4e5a0dc0"],["/archives/2019/index.html","19003c2fd0c3b9e9efff34f091607987"],["/archives/2020/01/index.html","73f9ab923808b6f1e2bbfb4c02832533"],["/archives/2020/02/index.html","ee553c70773b9497f570ff32cfdb9a22"],["/archives/2020/03/index.html","c9cca800a78fae6947f2684d18b08627"],["/archives/2020/04/index.html","3d56b351a02aebf31e251887f6dfc2de"],["/archives/2020/05/index.html","17d6757d07b7617cbbdf310e96f97b5c"],["/archives/2020/07/index.html","3d20a09ded312ae93bf0fd31168bf77c"],["/archives/2020/08/index.html","ceb6111a0e191767e6f098bd3b8a2022"],["/archives/2020/09/index.html","3a64cb898d7724a4258504d8fce856a6"],["/archives/2020/10/index.html","ac17b38a9608b3ec702c9907b4326288"],["/archives/2020/11/index.html","b77ab9333af0179017e2b64960baf807"],["/archives/2020/12/index.html","5870b9f2b64cf0163bc63d0835615182"],["/archives/2020/index.html","3700ba213413035e9b6e758876698fe1"],["/archives/2020/page/2/index.html","9f45c1509a87bd85557cd30eb383e863"],["/archives/2020/page/3/index.html","755a72ad406333172c9ce097c0ea382c"],["/archives/2021/04/index.html","4f34cf2aa8b5512a679c6fda6223c8a2"],["/archives/2021/05/index.html","596a592e84f4a721ad952cca34e1daba"],["/archives/2021/06/index.html","ec74c933525cc96afe50a30ad6b3ac3c"],["/archives/2021/06/page/2/index.html","779055702e7ecd2aefd5c8eca1868be1"],["/archives/2021/07/index.html","3fc53dc86adff0cd152cfb8c79d16e1d"],["/archives/2021/07/page/2/index.html","745d081baa4f2c7bbfae5fcb6d1dbf97"],["/archives/2021/07/page/3/index.html","bfab9f24ddbc705bc90339e746e80a4f"],["/archives/2021/08/index.html","be7d3564a6c89aa9a3cd3893fd503a48"],["/archives/2021/09/index.html","25e12f4a8f6451a1c02563a262d9c4c2"],["/archives/2021/10/index.html","68af7360ececee49422d68bd3f394926"],["/archives/2021/11/index.html","160e3142b8fec6a2c6726906002a8efe"],["/archives/2021/12/index.html","0990f5da94495103da23d19c5e1cb2a3"],["/archives/2021/index.html","b3cada3bec78e46e68842085d1c41b88"],["/archives/2021/page/2/index.html","b5fc690f1256b98a0bd2ddef7e9857ba"],["/archives/2021/page/3/index.html","f9113d913714dee43ff6a2058e254324"],["/archives/2021/page/4/index.html","fa7ea5bb9adba149f770555c25af3ced"],["/archives/2021/page/5/index.html","a44a981895ece9b9ffd5f2e61a0e7687"],["/archives/2021/page/6/index.html","aa22ab648e3a50e36b15df64e86622e6"],["/archives/2021/page/7/index.html","afacbdca217b498973fd02cc284ad8d5"],["/archives/2022/01/index.html","8e221823f06f3c03b14d9c72bdc091fb"],["/archives/2022/02/index.html","ff8163a2248f8fdb741c7b35366fc696"],["/archives/2022/03/index.html","85a770565c1cb4f0e94c9c8c5b127a0a"],["/archives/2022/04/index.html","ce3c9464f819f14585f45cb5b5bbad2d"],["/archives/2022/05/index.html","01fc82208032f366dc2b65198a2942cc"],["/archives/2022/06/index.html","e193ab3b331850505fd4bfd12a335d25"],["/archives/2022/07/index.html","9e78625ae6595c3deb8ec470db880ce0"],["/archives/2022/07/page/2/index.html","ff131a8da944580616fcf8f450956cad"],["/archives/2022/08/index.html","b7b6d62788ee39247abf8d5564e44229"],["/archives/2022/11/index.html","830b648a4a4d166b1e8ed1ed04c81a3e"],["/archives/2022/12/index.html","d898427c18553d6935358f3fdc58653e"],["/archives/2022/index.html","94c5d0f886098179f781e374e261c10f"],["/archives/2022/page/2/index.html","50e3778c3ae0a93fa42f9d2450985ffb"],["/archives/2022/page/3/index.html","737dfafdcffba135d76ec07972032536"],["/archives/2022/page/4/index.html","f068db5abf5c37a86603e56e2a2360ed"],["/archives/2022/page/5/index.html","f6f64fbccd741fb3b53967dd89d39947"],["/archives/index.html","66c5b4abdc445dc268f9b37006034274"],["/archives/page/10/index.html","cac41c25ce70af50bcf7cba0a280dbf3"],["/archives/page/11/index.html","6046d6f1b9b3873215873dfc5dbf32fa"],["/archives/page/12/index.html","ef9d13bc472a967f27328ba0266ed69f"],["/archives/page/13/index.html","16852269353c89d0a9acfcc55f59606c"],["/archives/page/14/index.html","dfc766e07051d611b5b20a44d555bb42"],["/archives/page/15/index.html","253f453ceb8957d8e6cad225abe0a2c1"],["/archives/page/2/index.html","c21f9134e55c38fa8d36ac138bca3f45"],["/archives/page/3/index.html","51b5bdfd90ba8d6a5c6460cb969a7e26"],["/archives/page/4/index.html","f7a4a87f364fd62d5d4be9e486a57e01"],["/archives/page/5/index.html","6a3d8ab0f08d95fdfe32b2fe17dbd868"],["/archives/page/6/index.html","696c5fa590545faecb88a11a195d8c04"],["/archives/page/7/index.html","19dae9dc3d3b3311248a1a27273f12ff"],["/archives/page/8/index.html","6e08de4d34d8bb28cf580328466ab218"],["/archives/page/9/index.html","d81f1d8d930f855f6f34db7cd379d3e5"],["/categories/Programming/index.html","398d2b67a8cd350164c18f01e1b2fd2b"],["/categories/Review/index.html","5a745f9acdd3d48f97d4cec4acbae0a4"],["/categories/Review/page/10/index.html","cd5394aec3436bbf4383c59b7320c9ed"],["/categories/Review/page/11/index.html","5c649db98428cb1b9a863930942d4229"],["/categories/Review/page/12/index.html","7b7d2878557c700b4f3527680e012f88"],["/categories/Review/page/13/index.html","307d3e01bd70696cf1311fca04861c81"],["/categories/Review/page/2/index.html","750dd8b69c47dad38dec3d2e4b08f8fa"],["/categories/Review/page/3/index.html","af7e3ad0703bed2594ed0e9f9fa69d9a"],["/categories/Review/page/4/index.html","3d03cca045629a83514a08b547b163a2"],["/categories/Review/page/5/index.html","e671412fbc24b6a5f64284d86b91b6ba"],["/categories/Review/page/6/index.html","a198480503e2bfa0ff1176b32b013b96"],["/categories/Review/page/7/index.html","d7c76914fae2e4b9caea032c5b1e3565"],["/categories/Review/page/8/index.html","0f105959c905536490b74577874e5dcd"],["/categories/Review/page/9/index.html","7d5d06cb09224718df82fed5178ce535"],["/categories/index.html","7b4793a11077d3fc926cc9e92c6d52d4"],["/categories/日本語/index.html","e85563d3220eb180858120716ef1e19c"],["/categories/日本語/page/2/index.html","5dfced008677e758432afbf9e7ed1e2c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5e656049e041ebec29a1610f906650b8"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","735a85a04a9e9e3b16c81afc3603b2c5"],["/page/10/index.html","a5ba849153762783cf1bf4591bdce249"],["/page/11/index.html","33e1960902cd8f7055285d156e0f6aac"],["/page/12/index.html","95a4688a5f4cdf974c6d8fc066587058"],["/page/13/index.html","354d950df903481fbacbfc42b776bd8f"],["/page/14/index.html","13db1e53b1f94929223d7fc966576b78"],["/page/15/index.html","79dac3041f67ff593664318a063d4574"],["/page/2/index.html","33a26e685b98299aad9504b043c2e708"],["/page/3/index.html","5840e42e9fc8fff38bdbc02cea5e3397"],["/page/4/index.html","ca8ce785b63b27b9c795a506488e379d"],["/page/5/index.html","f9510ef351d6e6432e8911270e0edab0"],["/page/6/index.html","d3ae6e7a84ca978a6d3bee70accdd4d5"],["/page/7/index.html","a4422befdc8c0a619eca3ef47fe4721c"],["/page/8/index.html","91c894b9b1bc8e3052dd657f8303454b"],["/page/9/index.html","61c60e108843a6b199c6427888cd3c51"],["/sw-register.js","de01713f31f9f572782f67988d4eb40b"],["/tags/10分作品/index.html","1e44741ed56fc7d0a117458beb00148f"],["/tags/3分作品/index.html","2fc0591f83b8d694be8692a23a52df97"],["/tags/4分作品/index.html","2ccfde18a9ca5a71f8538f8dd47f13b1"],["/tags/5分作品/index.html","e8ecbc4d3c77cda3dd656287fc5ca511"],["/tags/6分作品/index.html","9c75a966945deaa810f859e7e60fb222"],["/tags/6分作品/page/2/index.html","ebcb0e2b2941b59f2f498ae8b85a2a12"],["/tags/6分作品/page/3/index.html","0c7529b1e625fec9cb9550c7c9f3211f"],["/tags/7分作品/index.html","ea4e1f5facc06c4caaf43614103032ae"],["/tags/7分作品/page/2/index.html","41929df4d633a5b5126050b471fcaa08"],["/tags/7分作品/page/3/index.html","beddb23a58367ff1156b868f5413b6e7"],["/tags/7分作品/page/4/index.html","0d8c1a9df455d29e5617163d097feecf"],["/tags/8分作品/index.html","e67fdd9f9e0f6c31dccfc9363907e5ee"],["/tags/8分作品/page/2/index.html","37e7aea72e5fe8224a6c6ba8620b9921"],["/tags/8分作品/page/3/index.html","6932f63955462aaab1bcda9fff960728"],["/tags/8分作品/page/4/index.html","c399ab14c64ef6e80cdf60b1baf49b1f"],["/tags/8分作品/page/5/index.html","1c2ef5520bd5c0b43da668ff2382cc59"],["/tags/9分作品/index.html","f9f95c1a2496a309d4138f3cfbb46979"],["/tags/N5難度/index.html","1527ef44151446ae60e9c00ee5790fb0"],["/tags/N5難度/page/2/index.html","fbf96b6d7af8d1ebc6ab17e8a9337f7f"],["/tags/index.html","738c0ba1370b774c1b5bfcede430d38e"],["/tags/アボガド６/index.html","f1bd95652b9a7cd6f16fe8b06e9064eb"],["/tags/三秋縋/index.html","44a04f52ebad6dc60bb30bf48722932e"],["/tags/中國武俠/index.html","50096db222219a974ccca36275adbb24"],["/tags/中國言情/index.html","c49e78afd2e74213408c551ccb29ff27"],["/tags/二宮敦人/index.html","39c61a4c83791d5aa9095f6664f38215"],["/tags/人性/index.html","2f4f478479dc85ebb10783de3e2bb583"],["/tags/人際/index.html","187074270ed7c216115a08b19a35601e"],["/tags/住野夜/index.html","dd1e63d353296a5721e23e607e92b561"],["/tags/佐野徹夜/index.html","12733392c067a6650822ddf2c1f559b8"],["/tags/努力/index.html","3f8a43c67d3b64eb5fef5be2a5427893"],["/tags/動畫/index.html","406054448afdfbb6f1acb880c2c03ed3"],["/tags/動畫/page/2/index.html","ba97e80156367ed1fde46d9b5bc1bfc1"],["/tags/動畫/page/3/index.html","7c8b57a07d347d3a126bcbe36e8683b8"],["/tags/動畫/page/4/index.html","f146afdb67ae69093e14167a84977014"],["/tags/原諒/index.html","b0bc4bc0bb9cf9762bb40653aceb3533"],["/tags/反烏托邦/index.html","1b28b6a154f75acf468c19100a4edc78"],["/tags/啞鳴/index.html","ec4e1a680a0302f5680e9f3289a03b88"],["/tags/喜劇/index.html","0e7dc184c7a8b47d16277ef49f3b37dd"],["/tags/夢想/index.html","05a77a5e37677b7bc342bfe831439f66"],["/tags/天澤夏月/index.html","c1185726ac0da071f9257de99634d0ef"],["/tags/學習/index.html","baaf729c916157e0140e3ab48528cde1"],["/tags/學習/page/2/index.html","4f8427f8a866d1766c88d0243c730f73"],["/tags/宮崎駿/index.html","5e8d651a38f264073248f553cc3139d9"],["/tags/小說/index.html","039be4128840ec5900dec871382c5f1a"],["/tags/小說/page/2/index.html","16ad025148a50fb6cbe20894ebacb158"],["/tags/小說/page/3/index.html","2d71cef2fe378e801164d86bd8a06c36"],["/tags/小說/page/4/index.html","466821c50f5d246a09ce6493eaf3d9a2"],["/tags/小說/page/5/index.html","b3cdd36721b821733fb70d917ca8fe37"],["/tags/小說/page/6/index.html","cfa2450e11b825f1d34fabeabc81a447"],["/tags/小說/page/7/index.html","329c8656d3e7f634c4dac73417226dfd"],["/tags/平淡生活/index.html","0003f32e477fe767842b0600dec33c5a"],["/tags/幸福/index.html","f77ce1da04426bfd07b50913cf5f4026"],["/tags/志茂文彥/index.html","3d3f7fee15db4f1b9eb4a76de3aa4444"],["/tags/愛情/index.html","b2bae819c37917fa146e9efe1dea4205"],["/tags/愛情/page/2/index.html","e85dee9250269b9337b099c34f986633"],["/tags/愛情/page/3/index.html","3ae7ab52096f60e7baacdfde7f5a2454"],["/tags/感動/index.html","d5eab100fe23d87aea75b75f4b3d5492"],["/tags/懸疑/index.html","44cb01620264833a8d55228702b6de03"],["/tags/懸疑科幻/index.html","107d89c1743e8e550fc0e62ea35310e8"],["/tags/戀愛/index.html","8d5bfb602cf040b6e5c8913538d8da30"],["/tags/成長/index.html","08d8809b64bcb10e218c60e502225239"],["/tags/成長/page/2/index.html","6fb646fba34cb7707616a80cfa573f8f"],["/tags/戰爭/index.html","0129acacbeed4fdf90019995330e1217"],["/tags/推理/index.html","b20e589265060b8772c5e4ed468da922"],["/tags/搞笑/index.html","fa1291cf8967a1e9e351a9af6ee0bacd"],["/tags/救贖/index.html","9b9088561bf032cd4c7f94d741148270"],["/tags/斜線堂有紀/index.html","c450378450f5c629a61cb08e05fe72bb"],["/tags/日常/index.html","125bcf2577e4451ca654675cbb02ff9e"],["/tags/末日/index.html","0c9b8ae9d865edc5589972b3e2cc804d"],["/tags/校園/index.html","ece3f7a15b9c06c63d3c4f4db72eacc5"],["/tags/武俠/index.html","734481be31232e187a38b54f08e006f9"],["/tags/武俠言情/index.html","eec6ecf017c52c2b0b41a1255881c37e"],["/tags/漫畫/index.html","8666f9d72b256b1ef5928558d62d5135"],["/tags/生命/index.html","b3f6aaaac3fc48cfb539313266717013"],["/tags/生命/page/2/index.html","7daf3e060cb69d8af5eddd557b26b125"],["/tags/短篇/index.html","341c84e135956b815d8640dcb368e247"],["/tags/社會/index.html","8e9c6d2570e25f52db3f332ba8b9728a"],["/tags/科幻/index.html","1a9f623071b0b2871e3aa4d980996dfb"],["/tags/童話/index.html","931e1fc2550437d854973d3148813320"],["/tags/競爭/index.html","089f33602ad127ccf86a27e96a61a209"],["/tags/自我/index.html","2c47c9b5e5c40016b59d80c886bf93d9"],["/tags/自我認知/index.html","da4a84729f2af65ea04f78f9f60977bb"],["/tags/葦舟ナツ/index.html","fe3605cefc3502ef231c4a9055f6e110"],["/tags/藤萬留/index.html","e67e22c221b578487ce61e3331528089"],["/tags/親情/index.html","6c2ac727981bd9ea31dafe049a8f5466"],["/tags/雜項/index.html","6666213438e0109292890a8a76ec5fc3"],["/tags/電影/index.html","d64bedc6c321af64439072717697ef84"],["/tags/電影/page/2/index.html","32b0671d88bf3b1e71bc1b968500e940"],["/tags/霸凌/index.html","70e0a35dbd3d8c5a6ac3aab701dfa938"],["/tags/青春/index.html","78120cb7dafc580bb95e5fbec843adba"]];
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
