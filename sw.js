/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","6ee0662c0aabaf774925b1c9c9a58be9"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","248841e87a70101b07949231bd6fef06"],["/2019/12/25/Review/無法計算的青春/index.html","1436c250dfb079b701c74ff646f94067"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","eabb59b236f139201c91eeb58a06fec1"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","35eedcc4033169b0773de93e1d8aa29e"],["/2020/01/19/Review/下雨天，不上學/index.html","abb60faee7eff0b2d675fbf6b47cbcea"],["/2020/01/26/Review/三日間的幸福/index.html","7d22b5f1f56554885d587c52c202a873"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","eb87c6f051b3c0a4a304fcda9ed52367"],["/2020/02/09/Review/青春期超感應/index.html","de628bb6b7f495f1faefa4ef5becc7d7"],["/2020/02/15/Review/又做了，相同的夢/index.html","f4a5b94ff321f2d309372c22b0673fe3"],["/2020/02/22/Review/回憶當鋪/index.html","122569c7b05b65036ac92d2c756f622f"],["/2020/03/22/Review/不適合自殺的季節/index.html","68187cf89858ecf45f97a54f325b51b6"],["/2020/04/26/Review/我們都無法成為大人/index.html","f1719bcf6731ea9ea36e2713292507b6"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b4475bd6389b86499a0152bf8a9134c3"],["/2020/05/17/Review/人間失格/index.html","6cc81e456f77b099f4ddabcb05d11086"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","f14528499d548082761c21abafeefa9a"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","3a21fdf3d4ad5d4fc51a1f01f55745ef"],["/2020/08/01/Review/銀河鐵道之夜/index.html","1d8d5f56f613fb0fd0d6754476f46c35"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","f6a73c0e3db50c41a34148ab551d44a4"],["/2020/08/16/Review/15歲的恐怖分子/index.html","e61d561cb657de1a60eb54e057970e93"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","14e0919532e5a4bedcc6f521ce2fc401"],["/2020/09/13/Review/羅生門/index.html","67c9cf1d56e76f61d11fe04214ef4b89"],["/2020/09/20/Review/闇夜的怪物/index.html","3b84fa5e53c21c241b1ae0a707a1f73c"],["/2020/09/27/Review/14歲，明日的課表/index.html","e50429f0e15f2f6996e6c680db124b49"],["/2020/10/04/Review/致十年後的你/index.html","06359d4190d9dae64665d377df2132f4"],["/2020/11/08/Review/滅絕之園/index.html","669e0ae56fe12a48020c5c31f88f685e"],["/2020/11/15/Review/將愛拒於門外/index.html","c2e516ef8fd1b278bb0e36362033e932"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","75b058d85f4948e2dc6846309240034d"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","71694dae2aba994cd47ec1a6fcdde731"],["/2021/04/22/Review/道印/index.html","926f72399ee443dbcdc280555d5dc63c"],["/2021/05/03/Review/戀入膏肓/index.html","ac4a275f44cc875daeb43fabcb32eeec"],["/2021/05/10/Review/Dice/index.html","6b1f9abcad4a4a9f3a47d9f9c635193e"],["/2021/05/15/Review/魔女之旅/index.html","5bc7669d14e3a9a09e88ee92293c68aa"],["/2021/05/28/Review/戀愛寄生蟲/index.html","51de506ee352028be015a41ca3b42853"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","f52f3f98b366d0576023b35a1d733795"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","8c48e2a04a0de041cd76f16f1740b499"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","31b055efe26f4201fb78556331307e8b"],["/2021/06/05/Review/流浪的月/index.html","b720981a0cd1f9f3160ac39578092f6b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","fdb6e6244c0e81e5eef05413aca777cf"],["/2021/06/13/Review/第一人稱單數/index.html","033dd2b358bc655e2723c295143fb054"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","04ea10d0a9bc7e36a33b8d82cc798335"],["/2021/06/16/Review/願你幸福/index.html","aaffc573cccc4100e2559e24cf34ed1f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","89a37d32ad0b32e0f24592007711f9f9"],["/2021/06/21/Review/神隱少女/index.html","f83ac1097c9b855c08e2506072a196a9"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","396e970c0cdaf1a29be8a33819202c3b"],["/2021/06/23/Review/天空之城/index.html","f5ee67f10821d0892f6ac8726f30d10c"],["/2021/06/24/Review/魔女宅急便/index.html","836b2c6194df0353cd78c01bca3d5ed2"],["/2021/06/25/Review/借物少女艾利緹/index.html","8d566c3237ad1e1d4752d688321c9d4e"],["/2021/06/26/Review/魔法公主/index.html","92f56e2472e378388121a24cf20e6d5d"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","5ad1f63a52b76331481835433aac3135"],["/2021/07/04/Review/飛雪與劍/index.html","c04c8c49ed33e100939d070773eed736"],["/2021/07/09/Review/地球防衛少年/index.html","80716bb011c49e2a1782e1b03b927b34"],["/2021/07/12/Review/Angel Beats!/index.html","34b88efcc8ece83b9aab5fdb4c0fc33d"],["/2021/07/13/Review/Clannad/index.html","b238515ee103a64158ae31e0daeac275"],["/2021/07/15/Review/AIR/index.html","fd49ddfd60fb1976d1d9c4e40470cad1"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","a6462db042f458daf2b476530f079029"],["/2021/07/15/Review/螢火之森/index.html","972cebb28024c3bf5768a410f0047566"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","48dc5c9c6bf39c774867d1b29a01ceaa"],["/2021/07/17/Review/奇蛋物語/index.html","56a3dea564a1bd27aae05f02fee5cc70"],["/2021/07/18/Review/Vivy/index.html","e20dc493f80d4ea2b6b0eb2feda45d0c"],["/2021/07/18/Review/請妳消失吧/index.html","bf06c15d3969df35aa514570335471e9"],["/2021/07/19/Review/漣漪的夜晚/index.html","a96e0ebda46958b97444cff380afb108"],["/2021/07/20/Review/月色真美/index.html","ccdfc135b7d3b0241d59ab6e4cd19153"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","65a0f99c227a9addb4cbd92826e20ec0"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","78715d7d1f2982dc609cf1f1a38c16ee"],["/2021/07/22/Review/罪惡王冠/index.html","d75fa555dc1850e8a60940c3b9a950cb"],["/2021/07/23/Review/弱角友崎同學/index.html","51d494d79c98afc45cc7eeedaf42af43"],["/2021/07/23/Review/惡之教程/index.html","1b01e36093f33a54f6cc2398d35a59d1"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e26cef45b4ef2bd231060e934d924743"],["/2021/07/25/Review/魔王勇者/index.html","ef20b6d7a6ffb1d17a2d8345c9c20d19"],["/2021/07/27/Review/一年A班的怪物/index.html","6a0352ff98e50b1a9e5fc66e9f3dbf1d"],["/2021/07/27/Review/奇巧計程車/index.html","fadd66484fbf36213e604704549b2887"],["/2021/07/27/Review/專情的碧池學妹/index.html","b697e9b56625853f02435641cab8e5ca"],["/2021/07/29/Review/只有我不存在的城市/index.html","e8a18e05a1a9f33fc9352d9006d9cd4b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","1775bde2d1c4abea3908b44011f74d35"],["/2021/07/30/Review/可塑性記憶/index.html","1bc1f3034fbb8908f980ce0c0dcf8786"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","2ccbe9d099999b49e5f7fc68d3695c9e"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","2e1383f1bd7d524b7050d8118909b080"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","88b80e262c5e0fa350944366d1c49b1c"],["/2021/08/25/Review/清戀/index.html","5bbca726263dad3b0e19245729a73723"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","112375f53786dc689e5d67b8a5ca4f5a"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","55bec5969fa98be3b489774515aebb9d"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6ffd22ee70f1a96281cbf6b0515a0c03"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","21546347d7b1a8f551ef8e423cdf9a65"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c0b904048e1ba7818578aa58a7da58c7"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","d3087c236f82571ede0735c15a57ead9"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","e0ff306ac1ff8ba0fcc8a1dbb0d4f81d"],["/2021/10/16/Review/龍與雀斑公主/index.html","fe62aa9156d0219e36e66d93433ab533"],["/2021/10/19/Review/孤狼不想開後宮/index.html","22e66b6c38848189ca899c23aa7ebda6"],["/2021/11/13/Review/徹夜之歌/index.html","1b241958bd97866c49b05d60393c096d"],["/2021/11/24/Review/武煉巔峰/index.html","e992c1fa8aa0db056426f044fbede441"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","fde1d5f8ed2acf95a37e7b2ccc0e7d55"],["/2022/01/28/Review/神醫凰后/index.html","cc32bee5a432190aa391b794afe8072c"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","75312ed1066321feb639cbb8c38a717c"],["/2022/02/13/Review/夏日幽靈/index.html","4235ef1a1f5928b6227e98b517636f3d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","f2da02c2e4109b67ad4c90cdcb6783c4"],["/2022/02/26/Review/賽馬娘/index.html","f05f0f78ad7efcd76b355a892dbbc827"],["/2022/02/27/Review/大欺詐師/index.html","5c7e10da1d884c3707d559a7d80521bd"],["/2022/02/28/Review/前輩有夠煩/index.html","8b1e837dcc221f9474bc95f96d4a545c"],["/2022/02/28/Review/碧藍之海/index.html","e7bf27c2f8bc2552daf72fea15c4f272"],["/2022/03/05/Review/落第騎士英雄譚/index.html","8d845137723281983109a67ceebcd20a"],["/2022/03/06/Review/Another/index.html","a6c88cd7f9b43cd6200c35d19f8de487"],["/2022/03/06/Review/入間同學入魔了/index.html","ec0ca40d1dae824bc85596b2b46c025e"],["/2022/03/18/Review/再見宣言/index.html","ebf8abba5d08799cb0044ed8da6276aa"],["/2022/03/23/Review/生若冬花的妳/index.html","36d110240235ccc10717313a00bd059f"],["/2022/03/25/Review/天之弱/index.html","57d55d20f0c3511c8e3394df69e86c8e"],["/2022/03/31/Review/滅了天道之後轉生/index.html","2b3dc43620f1f468c3e2b457ed4adea6"],["/2022/04/30/Review/泡泡/index.html","76c440456568b758f01cb8df8523694d"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","a97fdf6106350c0592dd070a8803df09"],["/2022/06/13/Review/偵探已經，死了/index.html","3ad7f75040bc5c54369c48541d0f0b5e"],["/2022/06/14/Review/黑色子彈/index.html","f2fca3fee26bc3cbbe75bf7ea385d477"],["/2022/06/15/Review/黑白來看守所/index.html","1aff6de60dee996aba1961eb85468dd8"],["/2022/06/16/Review/虛構推理/index.html","b45bc46bad34a49560984bdcb61a0256"],["/2022/06/17/Review/戀愛與謊言/index.html","ba3b00ceae442c276d30e7ff0f3d91a8"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","e6d55ba98d5c66c6746e59ac49ad1862"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","12773b43c6ad2bd54775c30bc23379fb"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","dccff9b705e9261cfeba07a67d03710c"],["/2022/07/03/Review/Hello World/index.html","82b132e595e83d70aa76a7ddd67c0245"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","13fd97f79d559619746203a6ca2c0400"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","30f896e113898f4e9b943fd98b7caa77"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","3ec40c28dc87426ef97431699680c302"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","dfcf267443356026de31a30f9ab2935f"],["/2022/07/16/Japanese/動詞分類/index.html","0ba32b96461d036f06bf32d28e424c0b"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","9700464c56a07641a823e60c89a38946"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","27de916f7030996f7d642a5db1e82083"],["/2022/07/17/Japanese/音便/index.html","5ba32fc53b5b757a207e6c7b31826106"],["/2022/07/18/Japanese/動詞 時態變化/index.html","7369e3174ba2d9f89e60887fdba3255e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","21bd3e5d821b903f7682dee95ea8d252"],["/2022/07/26/Japanese/助詞用法整理2/index.html","e470ae53e2b86dc6bfd8d5579c3a3922"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","691efca3cdf12c6c6315843f9d7b3fed"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","3c84960c9a3a3275221591c9f0af64fd"],["/2022/07/30/Japanese/疑問詞/index.html","2a0ca9dff11ce37d0fbd553ae70d52bb"],["/2022/07/31/Japanese/助詞用法整理3/index.html","29d2713405606fa5b08a4fcf93635f02"],["/2022/08/02/Japanese/副詞整理/index.html","2d8e582bc8c894c6fe49302cf43af1bf"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","f8bc98549aed6b9ef500641934664163"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","51af48a5354fd6d6a7c3ff6ff50c7b15"],["/2022/11/22/Review/組長女兒與保姆/index.html","a33f0eed250560af47b48ed5b2a46b84"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","e5afe03a512ebad68c9488afa1fbd445"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","2a98ed0a44e1ff04bc33437d283de5fa"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","607e704133a05b20d1eaf633acde1628"],["/404.html","d6a6a4f01b8a50ed98ae9690489ad6bf"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0d392fa5d6290cfa75786a64a17d77fd"],["/archives/2019/11/index.html","b31a74d4c1a8e32b0517fcefb442db19"],["/archives/2019/12/index.html","70d1605f01de129f5925fbe4fe02e2ae"],["/archives/2019/index.html","94b6db12e3d95fdfafff654926f7efb8"],["/archives/2020/01/index.html","b475faebedcc3e9b666e22e034af502b"],["/archives/2020/02/index.html","1122d727b65f43191bfb802f49af6f35"],["/archives/2020/03/index.html","3fa5807df699500a9d1a20167370334a"],["/archives/2020/04/index.html","df48bdae01a79cd96c7781cef6862c97"],["/archives/2020/05/index.html","9d7d17703d81c0a116b132b0d368ea5e"],["/archives/2020/07/index.html","ca1a1eb66931325a1cd27fea9d536cd5"],["/archives/2020/08/index.html","6d39ecf3a76bfed4ae4c0a8555ef036d"],["/archives/2020/09/index.html","937c34bdd6dc7c54275ac9295cd079f2"],["/archives/2020/10/index.html","a7a44563fc3d6d8b6f24cab13a3a94c3"],["/archives/2020/11/index.html","7a26aa8365dfe8404b9d20d6a689e186"],["/archives/2020/12/index.html","98ec44858953f62d7fca00b163b4ce28"],["/archives/2020/index.html","b2236a3b66e1812e590aea4f97709a6d"],["/archives/2020/page/2/index.html","8c116a0a494b63b3e5c23bcab7e7abf1"],["/archives/2020/page/3/index.html","c676ffc33ced5d81fd82ad4ae89f8ca7"],["/archives/2021/04/index.html","2d1a38e6504e3005f38f3a3f3e68ba0e"],["/archives/2021/05/index.html","aa56a07bb33e69960b110fa803610f33"],["/archives/2021/06/index.html","57edb2cc8b4e457cc571b4306dbbb72f"],["/archives/2021/06/page/2/index.html","a4eb8cc7e8b25f954048b15bcf9cf01f"],["/archives/2021/07/index.html","5f961b24918cb5c64bfa2589ee1b3cd9"],["/archives/2021/07/page/2/index.html","e81ad846a4c94ed4d65742cb53b3b6cd"],["/archives/2021/07/page/3/index.html","4f2cef3a0c2523b4664ee081eaf9a151"],["/archives/2021/08/index.html","7933287c35e0bc6698ea42272bde72ad"],["/archives/2021/09/index.html","93e6b16de270434b1bac83cea20c26c4"],["/archives/2021/10/index.html","71ab12264ef00e597d42be94329c1a44"],["/archives/2021/11/index.html","04fe7d08bbcd425d89e0ef2378c497dc"],["/archives/2021/12/index.html","773c528f3686f87b48ac222bb9aad0cd"],["/archives/2021/index.html","b2c8bd52b0eac2cc86f046a430cbf7ca"],["/archives/2021/page/2/index.html","f3162016aa0cee712f6f1a0d7071e685"],["/archives/2021/page/3/index.html","22a5f52b853cbe48284fbcfb0438d67c"],["/archives/2021/page/4/index.html","5d8a13bab03c935a106e433586104e8e"],["/archives/2021/page/5/index.html","2ed08640fde205c397fad17a20ea9ba0"],["/archives/2021/page/6/index.html","911e79a3cd60f873d88b16b849ccfae9"],["/archives/2021/page/7/index.html","bbd058d69bb1d3e22780bb17c5fb5e45"],["/archives/2022/01/index.html","f36c2fe88088f427a8781e2f84755737"],["/archives/2022/02/index.html","17ece19f85e4db3eb9162cb8cc3517f9"],["/archives/2022/03/index.html","0c3e687aaa68ab7b0cbbee41e63f1bd0"],["/archives/2022/04/index.html","d4b6bf37f5cc3c948a47a0ab2656a8de"],["/archives/2022/05/index.html","9cc1e31a10e5e5e490e6e8df8ef07cae"],["/archives/2022/06/index.html","73405ac7c3c1e6f4060193b1a89044e4"],["/archives/2022/07/index.html","cd384869696edfd90928779dece18e52"],["/archives/2022/07/page/2/index.html","aebc98f0dce1a6147c8f533d8326c524"],["/archives/2022/08/index.html","76b700634af2c86479089d02817ccfe3"],["/archives/2022/11/index.html","60f0902f7e752bb25df94eebfdd623c0"],["/archives/2022/12/index.html","e53fd7cc71c1fc3f6af0d0908a12a706"],["/archives/2022/index.html","0d3ad93d1db9e88cb6c2068b597c2639"],["/archives/2022/page/2/index.html","a6fe57ad21fd8ab5b8e9aca79fbebb64"],["/archives/2022/page/3/index.html","0532bb7c610d75eef6873fda6948054d"],["/archives/2022/page/4/index.html","a8f822b00edc4000767d8f5289e2ab9d"],["/archives/2022/page/5/index.html","aa89fe662627c9c483d886324f5a3a18"],["/archives/index.html","0a38d84fc74cd7127384cd61621cd4f4"],["/archives/page/10/index.html","d7d6223b22ee7268861e21608f9a06ab"],["/archives/page/11/index.html","444e0d8a2ba3bb78143afe0825d5aac4"],["/archives/page/12/index.html","48f74c14597f75dcd58ac7548e01c598"],["/archives/page/13/index.html","3eebc7bc3b0a649e5cc76134a9ff890a"],["/archives/page/14/index.html","716a81ff9a1392ce710e69bf702b2849"],["/archives/page/15/index.html","94ede2b7e861759f9de1af74747687fb"],["/archives/page/2/index.html","3a0f9d076ec6ecb86f05d1fb0204a26d"],["/archives/page/3/index.html","2ed33f5ec16e7bc16a9fc3f09d618d8b"],["/archives/page/4/index.html","6498aa9597ec164aa4ef931823e68d7a"],["/archives/page/5/index.html","3d518dec3e621f752d7cc2ec484748dd"],["/archives/page/6/index.html","310f02b0d46b8501876f616d6381c8ee"],["/archives/page/7/index.html","6f64266f98e58f7bf8bf193eb25a4798"],["/archives/page/8/index.html","348478159b7287f996383af114fc3b0c"],["/archives/page/9/index.html","a5b3ba05e9c0fd55347ef309a178f2ce"],["/categories/Programming/index.html","761c3c56f9e5781a83d29df09f002a3e"],["/categories/Review/index.html","bfe5fca1289f798383b614de2e03a4c0"],["/categories/Review/page/10/index.html","ab3474ebf8329fb1a834b115c2e9e065"],["/categories/Review/page/11/index.html","0dd81bad99970f324d72cc75d674cc93"],["/categories/Review/page/12/index.html","eb70d4e9993eeb7b69154fc81d9ca8f4"],["/categories/Review/page/13/index.html","e1f37b46eaf9ce0d5c04b1b86e6fb70b"],["/categories/Review/page/2/index.html","ce7fa45588736077b6efcf06751ad114"],["/categories/Review/page/3/index.html","e042de4b945d5a5f7b8f1fffa91f473e"],["/categories/Review/page/4/index.html","2f03b72b2832da6b7eb8dbe6435eac94"],["/categories/Review/page/5/index.html","2b7c819c8ef4fcc0414a990715760550"],["/categories/Review/page/6/index.html","9f64cbed9c429d9d072652cd478f9b20"],["/categories/Review/page/7/index.html","8d12ff59873d63a5db97e60d58f40fb4"],["/categories/Review/page/8/index.html","dac0805ecdd9272b30e09da25d217811"],["/categories/Review/page/9/index.html","1403187e07d4d0c74e7bbdf4c24624ab"],["/categories/index.html","84749f50feb9cbbd06f0db966e7d5bec"],["/categories/日本語/index.html","2d40229c77bd7048a9f061fc635752d8"],["/categories/日本語/page/2/index.html","c1a87edcddfd5881b856fa5bc3df0f21"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7c4711d522bfd3708a738d0b1582290f"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","8acad61ad4855e541691abcedc1dca48"],["/page/10/index.html","6229d2274ce4566eccd5fdbd0e031c36"],["/page/11/index.html","40eb5d5b83692b3dfbec60580f09d7d8"],["/page/12/index.html","b9547519df25f2426d5310c4b3fd7682"],["/page/13/index.html","ac4fdd3e6a30942f65bd077f614a3fea"],["/page/14/index.html","faaa9b4445f036ecd99fa3939d26dd0b"],["/page/15/index.html","6b81c01ee5adbea52bbc76a222cb4f60"],["/page/2/index.html","7e14c5c07f8521adc8c537b1378d06ad"],["/page/3/index.html","a6d7fc7d04338c0f1eedcfc0b6e55616"],["/page/4/index.html","5bcde0014c38430641a02597526f3de5"],["/page/5/index.html","737603569d46f87327778517185b7d52"],["/page/6/index.html","6b100415eb8a0936739386e773ac40c0"],["/page/7/index.html","43b241544678ef4eea6fa5c095d1c982"],["/page/8/index.html","f903d6bbf2e68d0474d7f7d9df5efcde"],["/page/9/index.html","0702439de20235f6063f0663abcbfb5b"],["/sw-register.js","a0dcc2dab526b22897706329579644d2"],["/tags/10分作品/index.html","58a56776800f5dc1df45f834ba222aad"],["/tags/3分作品/index.html","59f7036268ad2c680d74813e30c61725"],["/tags/4分作品/index.html","479ed0d12bd318572f95f4aa79d2497e"],["/tags/5分作品/index.html","dca479d62b8c3e16f4411d3ce3249c44"],["/tags/6分作品/index.html","595963652c3cb6ca75a751d7b4934cdc"],["/tags/6分作品/page/2/index.html","f024df71bb5dbe66e004379df26a2789"],["/tags/6分作品/page/3/index.html","39d7c7417268d28b534c1d4b2155d602"],["/tags/7分作品/index.html","1178e3fdf9447bd1b4fde030430dfe76"],["/tags/7分作品/page/2/index.html","28dadf2be81229b90c4bd4b197f13d7a"],["/tags/7分作品/page/3/index.html","683622d21505ab2d94bcd3e8ce60dcc7"],["/tags/7分作品/page/4/index.html","7b5b38ca33dda9fadeb3a68315ef0f5d"],["/tags/8分作品/index.html","39136738a07a7881aac591215d07b948"],["/tags/8分作品/page/2/index.html","f9cf18ca257a29517e2b545c70430282"],["/tags/8分作品/page/3/index.html","fcc7145eb3279a94595890a5cb219d8e"],["/tags/8分作品/page/4/index.html","69e9c6a13a3e84de2f218a76b7844402"],["/tags/8分作品/page/5/index.html","224035a48b03e5dbfe7edf99dcead975"],["/tags/9分作品/index.html","07f53d85a62c5f7c460785e0fe1b9e60"],["/tags/N5難度/index.html","1b39b827053f96cb27819815301e6a1a"],["/tags/N5難度/page/2/index.html","e511b8c933992d35dac4fa1439f6f698"],["/tags/index.html","bd6f66b719a90ec799213906001a5e81"],["/tags/アボガド６/index.html","b50e04a0b4573e160e31ebd05250b574"],["/tags/三秋縋/index.html","f254bb823b471749054dbef62bcbdad1"],["/tags/中國武俠/index.html","a9c2ace90543e866d68d62f113d19ee0"],["/tags/中國言情/index.html","76f7baeb5ad760738e64569120c06189"],["/tags/二宮敦人/index.html","26614bb89c4ba41654161cec22146a95"],["/tags/人性/index.html","f26bcf4513222450a894c427c9b82829"],["/tags/人際/index.html","40f8a5ed0b0a933133cf4688906c3286"],["/tags/住野夜/index.html","28bb1fc632b65dc5a1a1d75ae20af1c8"],["/tags/佐野徹夜/index.html","42ba425dd3be85ebc5e5938df7619a48"],["/tags/努力/index.html","6a5ec3daf3dcca11fbf5c5d3e21f88e0"],["/tags/動畫/index.html","8dea79a9e53e94b3e9feedc1ee433e9a"],["/tags/動畫/page/2/index.html","1026b52db0dfb913fbb1837e63a19bf7"],["/tags/動畫/page/3/index.html","4072080d492b0852ffc9ce872925f793"],["/tags/動畫/page/4/index.html","fde0f7dc448599e75af88d92be422476"],["/tags/原諒/index.html","6259c816b6ec2b5e9ca919a14b5098fe"],["/tags/反烏托邦/index.html","4c07e323dda13157fe563491809d644d"],["/tags/啞鳴/index.html","639535d22bda45a4d8d1d3b08888749f"],["/tags/喜劇/index.html","da14d2ca2eca43dc9eba3a49bf94789a"],["/tags/夢想/index.html","743ddcf0479dccf25fa7684382bac1b4"],["/tags/天澤夏月/index.html","8f92704a10e208096492a8fd201b00ba"],["/tags/學習/index.html","e29e9265d9f40c123d12c9a9f0dd1fbe"],["/tags/學習/page/2/index.html","2310eb57268576ba042717215abcd4cd"],["/tags/宮崎駿/index.html","799ad823b4874e2ba8dbd143dd108cfe"],["/tags/小說/index.html","abc8d83a8ffdb54e6fca9f20d5bf0680"],["/tags/小說/page/2/index.html","0d9f6f0b03b02db877603e31ed6d2ebf"],["/tags/小說/page/3/index.html","4a09a5796d6bbda9de1a7998f31dc3f5"],["/tags/小說/page/4/index.html","68c64a171cec71b8e9ef040a9f965ef0"],["/tags/小說/page/5/index.html","9f99ad3fca59c44e598f0c427de2d81d"],["/tags/小說/page/6/index.html","ab513bd1eafcab76ef614e31639372b5"],["/tags/小說/page/7/index.html","ebcdec9b14cbaa0f9a9aedc74b1773be"],["/tags/平淡生活/index.html","25b5f7c64a0f6b8c43d5bb540a0a12ab"],["/tags/幸福/index.html","a1cc1db6b958073501bee9b0979b46df"],["/tags/志茂文彥/index.html","993ee2a241e239f90122115a1dec55c1"],["/tags/愛情/index.html","77579e790e897984c0c6088a92a42db2"],["/tags/愛情/page/2/index.html","c94a336c5a68f58db63303806a8b2e91"],["/tags/愛情/page/3/index.html","83ee0a67d852b9e2e63c81b3ea74a3c6"],["/tags/感動/index.html","629a7ff873c9a5fc76e6a0db3cea9bd8"],["/tags/懸疑/index.html","1211506be0c14b7611d4c6a1c2c87d16"],["/tags/懸疑科幻/index.html","6fc1d0ca3af72f19dfae1a61afc88be0"],["/tags/戀愛/index.html","0aa25180e4c35a52f58012dac541c635"],["/tags/成長/index.html","f4c3ec9d741ce2572f52be0d76d592e2"],["/tags/成長/page/2/index.html","e30c303764071b5d966a3a440ae87a50"],["/tags/戰爭/index.html","845ca9f99cfee5b84fde55ef6938f761"],["/tags/推理/index.html","a1b8009bcb8e6050956ff35457823ce3"],["/tags/搞笑/index.html","bc7bb9e583c55e806f88cfa28f8cfa85"],["/tags/救贖/index.html","b63f88465f270e9ff6061919557f324f"],["/tags/斜線堂有紀/index.html","35e29c80e0b6cab1ca46f9af4e8f2f3d"],["/tags/日常/index.html","4d2d23a76c5117e8bbe10c0d5617765e"],["/tags/末日/index.html","afe83a87826c5b375c79403818e7b4e7"],["/tags/校園/index.html","3ef68d067c97c004ff19ec428d5a98c9"],["/tags/武俠/index.html","c62bfc6687dd6e9d29b8d7067cba5978"],["/tags/武俠言情/index.html","81ab76453bdb0d03986abd6143835a00"],["/tags/漫畫/index.html","32b72dc53c86a3679c533e3d426ce884"],["/tags/生命/index.html","75415e62fd101f4159e646cbc6b1e0bb"],["/tags/生命/page/2/index.html","351687e1351586367c8f98142a45a482"],["/tags/短篇/index.html","017b3393508d650f35f92fe211fa2358"],["/tags/社會/index.html","62ffc43ccf648e24fbe2e46077b78757"],["/tags/科幻/index.html","c4756d5986492d3830be720905dfe024"],["/tags/童話/index.html","04d727a72db1f13aeb1af205eb38cf02"],["/tags/競爭/index.html","aafb0f9e6dd876c1144018b1cdab6fab"],["/tags/自我/index.html","17fdfc868597ad4f55b477d6b6ece7c2"],["/tags/自我認知/index.html","e2c6188702e5c857a6405a9801a965c1"],["/tags/葦舟ナツ/index.html","9237081409b70f406a05f4b4a9364897"],["/tags/藤萬留/index.html","9614e993dfd8c1a370b4fdcecc16037f"],["/tags/親情/index.html","6c8df10ce8b739b06ee778aebc3618c6"],["/tags/雜項/index.html","077e7522835efa92a55e826fc33c7b40"],["/tags/電影/index.html","3ea5a5a052a24024301096440efe9d2d"],["/tags/電影/page/2/index.html","421fcf2a9459e75180f6ff8cfe2462eb"],["/tags/霸凌/index.html","3063870f9f00ecd9bcae987f80f3da0c"],["/tags/青春/index.html","30610992d62980662f5a2bba4be9b27b"]];
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
