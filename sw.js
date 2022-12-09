/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","ec107dfb268346392b9647159c975a7a"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","0da470cdba862aa21ab71d23ce9ee3b2"],["/2019/12/25/Review/無法計算的青春/index.html","90b4eeb4732ae6bb7062e6343bed9dc7"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","ca8785f9ea9974c48c6f666a9f8b3bd4"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","38581a15c95817040687c9a6f30be14d"],["/2020/01/19/Review/下雨天，不上學/index.html","6eb0e24da9efd883f1d330673b2c305e"],["/2020/01/26/Review/三日間的幸福/index.html","a3767bc1965aee9836f414469b8d5c72"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","2f73e18c3fa490fcba1bf4534de8b081"],["/2020/02/09/Review/青春期超感應/index.html","398cba131d764f78972ae541979a302a"],["/2020/02/15/Review/又做了，相同的夢/index.html","c52c12d9d51c9bce00c821a20a55d09d"],["/2020/02/22/Review/回憶當鋪/index.html","fea2171da472e0330ba7aca74ba0ea74"],["/2020/03/22/Review/不適合自殺的季節/index.html","92f7f0bf267564b7431416f429e30369"],["/2020/04/26/Review/我們都無法成為大人/index.html","9372349f8b586fe28357ed892ac26dc6"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","aca664a31306261805f5f05d62e8dee7"],["/2020/05/17/Review/人間失格/index.html","135489823c86f6a0ffc5c52dae03d1ea"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","95f9b02e31c4299c296501cc06ff96c4"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","bd32198a812ce0b4a076960921709f00"],["/2020/08/01/Review/銀河鐵道之夜/index.html","b5f366045bfcfb9764e8b2491792757e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","8a3c36a8903d8874277c07e17cd8531e"],["/2020/08/16/Review/15歲的恐怖分子/index.html","5177a1fdd317f09b678707e2539a91ba"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","f1315da6610500fc11ebf748403bb99b"],["/2020/09/13/Review/羅生門/index.html","adf348d33ab17e3c30759df63303e57a"],["/2020/09/20/Review/闇夜的怪物/index.html","c8892c8491545ea36322608d1b7932ba"],["/2020/09/27/Review/14歲，明日的課表/index.html","9008273dcaea3a0380a4a5573e2c24b9"],["/2020/10/04/Review/致十年後的你/index.html","97fb02b9ed3499985f32d0f3e53fc1ca"],["/2020/11/08/Review/滅絕之園/index.html","899ea4feebfe7109da4c43febc6e35b6"],["/2020/11/15/Review/將愛拒於門外/index.html","ee38073a19e5188610e6e68bd3e3c7d0"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","5c28be8ce36bca5e3b3d56417d128738"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","ca57b2ba1c26642052bc5eefaa4eb107"],["/2021/04/22/Review/道印/index.html","7eff4fd704a195fe56542ff17a5b3355"],["/2021/05/03/Review/戀入膏肓/index.html","5212beca450e865b6b814927f8b73b4a"],["/2021/05/10/Review/Dice/index.html","53b4b1d9f1ad7bdc6d826f44e4217d97"],["/2021/05/15/Review/魔女之旅/index.html","1f9ad21eac9aa18030f8bc3190fcd343"],["/2021/05/28/Review/戀愛寄生蟲/index.html","4987224595f4f89c8868e492d960614e"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","3e97d9363eeb0ddfe51c29fbc33c7621"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","9b6a1b529bbc97beb3e0af0da806f558"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","ce58e64d3c52a2e66ee7fe1b96510252"],["/2021/06/05/Review/流浪的月/index.html","8c91d25a6d33f0b67b0c36815377794e"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","116a4f274356d838f51a56993a1ae2ea"],["/2021/06/13/Review/第一人稱單數/index.html","4482444bb725171a747055dfe93d9ac8"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","79e51d0f8f96397fe03ac075ed5d44ab"],["/2021/06/16/Review/願你幸福/index.html","3c5d39f61af0848d689fefa40aece039"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","5a1dced569bea7e7bce50d7d8dcef181"],["/2021/06/21/Review/神隱少女/index.html","fccde275a5572a3d0ce9794ae8a81258"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","2626594c9909d3c1db97b658bdf913cd"],["/2021/06/23/Review/天空之城/index.html","e468a4b2011afb6f1ba1ed8b3040fda7"],["/2021/06/24/Review/魔女宅急便/index.html","f77217c4c26fc1fdf353801532587a32"],["/2021/06/25/Review/借物少女艾利緹/index.html","47453feac4fc7d3e8e318e03c9c74d1a"],["/2021/06/26/Review/魔法公主/index.html","f6335c3f82cfa180bb7ebe1795d52c10"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","66eaa4f266e750b533048c2d2cdb5894"],["/2021/07/04/Review/飛雪與劍/index.html","b334489d7ef7d4fb7cab301347536ba6"],["/2021/07/09/Review/地球防衛少年/index.html","227b2275f57364321f20248a6ee1340a"],["/2021/07/12/Review/Angel Beats!/index.html","18d8409ffe40df95dad8395f8db16736"],["/2021/07/13/Review/Clannad/index.html","3b5ea2706d5b5b18b64bf895d0b14e71"],["/2021/07/15/Review/AIR/index.html","3fa60c4b558842f12fe2cb9282d7691c"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","63dd8840f0f772aa67dc2333af226cb3"],["/2021/07/15/Review/螢火之森/index.html","0c80b5a2b1d9ae8b2238760bd389a32b"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","f723acdb8b8c39bfa802f1144d97c931"],["/2021/07/17/Review/奇蛋物語/index.html","28771fbf18c9bd817c19f9677fe15486"],["/2021/07/18/Review/Vivy/index.html","f43035cf6854b905f884da7b172da0bc"],["/2021/07/18/Review/請妳消失吧/index.html","ce9c58aeb1e953a9250276651672316d"],["/2021/07/19/Review/漣漪的夜晚/index.html","9a8dd376cbf0711c5e22ad8dadb7d5fd"],["/2021/07/20/Review/月色真美/index.html","948f62eb85420e60b69a4f8f1dbe77f2"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","f5a30995016f454bb6bcb09a24b13d7e"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","a6c90b96896d996e60b386749a8dc119"],["/2021/07/22/Review/罪惡王冠/index.html","49ef6cf4c64f50556f798c290ab52daa"],["/2021/07/23/Review/弱角友崎同學/index.html","7a37ab1feee25c4f8bd9782a4871205e"],["/2021/07/23/Review/惡之教程/index.html","8b9b44af29693b92d08ed48e36017f2a"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","92827c82f62fc0dfe26fe75e51f6f1d4"],["/2021/07/25/Review/魔王勇者/index.html","5f4c9c5fab273d1cfd844d7988879154"],["/2021/07/27/Review/一年A班的怪物/index.html","5018f1fd90b927808b60b280124951d0"],["/2021/07/27/Review/奇巧計程車/index.html","3069dce4773a23462a4e497b580435dd"],["/2021/07/27/Review/專情的碧池學妹/index.html","b528972ec659b5499e554c2044368f97"],["/2021/07/29/Review/只有我不存在的城市/index.html","a578b2e80539e1ce268707807df5cf72"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","734a173672c2a7cb71a5ab19b5ea3bfa"],["/2021/07/30/Review/可塑性記憶/index.html","52de25f03ef79c8d2bb24b0f9ad15e12"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","e51c5378e0c3581b1e0fa59e2721f0bc"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","b143fcf7af66138e07cecb906b0ecc68"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","fefc0c22490caadd5ee1ff7dbb6da141"],["/2021/08/25/Review/清戀/index.html","bc631cfe1a6c7574707754793539da66"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","3226d28366cb9f2c61ba23adb3197f8f"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","3ff46f1cb75748e5618ee17cca1231e0"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","d90652e48d58bc5a5f544a47310b9dae"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","f2cc8f51fa35aad70a0633b4b90a5978"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","ed5bd50c5c2892570c906abfcc7b16c3"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","cec491f93640d5972adb1e77bc98e8f7"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","ce22fa4552e67ff4c343c65b3fc17bbd"],["/2021/10/16/Review/龍與雀斑公主/index.html","2e5ba0519a6794d9f950f5de1ef97268"],["/2021/10/19/Review/孤狼不想開後宮/index.html","66ce72dbd46739179ac6795609d96aee"],["/2021/11/13/Review/徹夜之歌/index.html","d201ca07c2ba39502223d8593f278cb5"],["/2021/11/24/Review/武煉巔峰/index.html","8f5802bb7819b4fe5250fc0d790e1b05"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","8006e2c8e7acfb81b4380ab7f63f9f1f"],["/2022/01/28/Review/神醫凰后/index.html","c4b22b38ba312dc534f00cb5b26888cc"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","eff0ca6c143028314e4bd5d7e872bc3c"],["/2022/02/13/Review/夏日幽靈/index.html","580414750c33d31d73b8a49cff917f09"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","324384497063198feb64f39944653bc2"],["/2022/02/26/Review/賽馬娘/index.html","ece73468f0102971ccc2505d599b52ab"],["/2022/02/27/Review/大欺詐師/index.html","4317b0ca866b3f1dc4323db6aa79d043"],["/2022/02/28/Review/前輩有夠煩/index.html","7513a2e347cf2530183522ad6931a08c"],["/2022/02/28/Review/碧藍之海/index.html","313191ece52b036b74a9cd2beb5f70f8"],["/2022/03/05/Review/落第騎士英雄譚/index.html","5d7b6b19e54bac1e758a6f9de894d8d6"],["/2022/03/06/Review/Another/index.html","5dfb13d1b2776641d0cdda7797df888b"],["/2022/03/06/Review/入間同學入魔了/index.html","e9546d3fd7c0a6ce4513ac2c5e7264c7"],["/2022/03/18/Review/再見宣言/index.html","aa445d15a39641f5b9892f260186903d"],["/2022/03/23/Review/生若冬花的妳/index.html","5ab47fd55b399d0830ec544c60d998f8"],["/2022/03/25/Review/天之弱/index.html","3f4fb1a3f662a3023aac2fd5dbb7b626"],["/2022/03/31/Review/滅了天道之後轉生/index.html","e774e075dfec1fe4fcbf27389b25d393"],["/2022/04/30/Review/泡泡/index.html","1efa661fec4f04646c2387e1f1f6d44c"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","c4eb590cd583eb0ce2128730db4172da"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","48152b3a60a9b80e892a8e71f7efc0b9"],["/2022/06/13/Review/偵探已經，死了/index.html","13f5eb12d9f21afbdce27a8ee71eea35"],["/2022/06/14/Review/黑色子彈/index.html","087d76d3219c3be828030569b6b81794"],["/2022/06/15/Review/黑白來看守所/index.html","fd849a18d1262acee5d3069d458c15f9"],["/2022/06/16/Review/虛構推理/index.html","ae01f1189807677283fcb6e69028b0b1"],["/2022/06/17/Review/戀愛與謊言/index.html","090ad222bec99cb88be4ebf53c030e9c"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","416fb193fb6b23ee2a924244cd762b08"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","7e007bdca48547a992a370cc9cffa79a"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","452d27bacba44371c26b48424935cee8"],["/2022/07/03/Review/Hello World/index.html","64e54f595455611faa5739df964ffe8a"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","046125f1870690a556e6379920c7c62b"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","d9df59eeccb7c49d1fc9d3df189be49c"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","dbc128f1c3ea02a08ff810e4cf0bcf25"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","649e48fc525d0555500774ab4b2c4364"],["/2022/07/16/Japanese/動詞分類/index.html","2622b954647a02ae71fca08a1f598454"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","fbebd78eb33958b372fc572199213f5f"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","72791731acedaa0c76bd5833bd110992"],["/2022/07/17/Japanese/音便/index.html","29618d5ea288ac6d0c554d767b00fc43"],["/2022/07/18/Japanese/動詞 時態變化/index.html","44fbf068918fb5e4db3f915d0438d19a"],["/2022/07/19/Japanese/助詞用法整理1/index.html","8710d0f866b9d11f679e62ebea04c894"],["/2022/07/26/Japanese/助詞用法整理2/index.html","ce54c9e6a707318be9061061138688a6"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","4eb1263aa470a38a2cbe32e9cb6cc8d4"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","34174bf30573428be08d642ddcca9654"],["/2022/07/30/Japanese/疑問詞/index.html","faaca0aec4227217510257c1852f09b5"],["/2022/07/31/Japanese/助詞用法整理3/index.html","b55a7a519e6b8decca058c5f6b19d9e7"],["/2022/08/02/Japanese/副詞整理/index.html","afa6971696829b27474cba9965ba74dd"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","7953836851db41e851ceb12431be6138"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","882f45b9539ed278d7e14f856cdeb5fc"],["/2022/11/22/Review/組長女兒與保姆/index.html","6b6b517644344c43a0b12e8376fa29f2"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","322255d3d258e4074e4130ae08d0ad33"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","5d21ab3695827c709eeda9f70677e055"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","82de9b492ee26b88d540476feeb6475c"],["/404.html","7269464a9e648754f0fcbedc20bf90db"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f31d4e9dc5972d77278f046d1d53f81e"],["/archives/2019/11/index.html","95efd902b84b117ed333cbc739c9040a"],["/archives/2019/12/index.html","e6eb9b9be06f4031d0ff7ea90f8512fb"],["/archives/2019/index.html","bcbfce60bb02de7ed36f5fbcb2a76af4"],["/archives/2020/01/index.html","0619f31862a021614aeed30106e2920f"],["/archives/2020/02/index.html","e5657ca544317e8adedc498596cad68b"],["/archives/2020/03/index.html","847a6a434ac196b63a4b4b6983a2dace"],["/archives/2020/04/index.html","057054e16deb61e6e937c915ba0bfd48"],["/archives/2020/05/index.html","dd8c57dd23c675d7ad0826039f436455"],["/archives/2020/07/index.html","5d14b04bdbe749fc47b435ce34756b73"],["/archives/2020/08/index.html","6a0451d1a1b6cf9236c9409557ced8f9"],["/archives/2020/09/index.html","9ed4ed109ecff9ff833536e488f63d54"],["/archives/2020/10/index.html","e09d3ac00c5c3ab0273ae74c11935fc9"],["/archives/2020/11/index.html","8ab91468daabf7cff64d3661b40cdc7d"],["/archives/2020/12/index.html","98573e0ddb711612902af94c6b7d1a23"],["/archives/2020/index.html","6e2bc1cf8f227a989d9b2b2cabff9eee"],["/archives/2020/page/2/index.html","3586c016e1a4105c478924eb8d42a246"],["/archives/2020/page/3/index.html","2a2713a51b5da1695180414d8cb8b550"],["/archives/2021/04/index.html","74f7a4e96a7d3d315acb4bd644cd656e"],["/archives/2021/05/index.html","4d0ee7a70a814331b5879f6c5e8af8ab"],["/archives/2021/06/index.html","2b35144fb87b2d04b06bde8b0eb2efde"],["/archives/2021/06/page/2/index.html","dd1f8fda0c9310a16ca6495ef395080b"],["/archives/2021/07/index.html","e69bab63d8bd591aa1b0baaa8f1ee956"],["/archives/2021/07/page/2/index.html","77983194ed58c6fb428032a44cf3241e"],["/archives/2021/07/page/3/index.html","428282b7d8e612bf7341f6a453990d34"],["/archives/2021/08/index.html","9f043cb07ae3f6a1a82ba2c985224d2c"],["/archives/2021/09/index.html","bf9201451ab53dca4d6072f00b2b24f2"],["/archives/2021/10/index.html","af65dab6fdce4de082668d586a9a72b1"],["/archives/2021/11/index.html","cff96cf39be522d282ca62f2cdd7ab8a"],["/archives/2021/12/index.html","aabeffd8bef2703f3fd020d85bc206fb"],["/archives/2021/index.html","9337fe9d606390ce4af2dd182ae1bab7"],["/archives/2021/page/2/index.html","2dcfe024c3c9c28a587d71bab70b1caa"],["/archives/2021/page/3/index.html","306495927bfe88638cd1783c22bc7923"],["/archives/2021/page/4/index.html","19b560f5d9b8c94e8cac27c6644f0476"],["/archives/2021/page/5/index.html","b5f7a1392ce94ff4be5fc434953aeb3a"],["/archives/2021/page/6/index.html","7cf51fd2536621db3566c94c420cc28e"],["/archives/2021/page/7/index.html","ecd72eab79f0eaad0f6019605e89d669"],["/archives/2022/01/index.html","126b4e8adcb60e2f59651c0bd4865297"],["/archives/2022/02/index.html","d6feb14e914d5dee2c7ae1e790f7a983"],["/archives/2022/03/index.html","f4e677c93f1efbc03be6533b775175a0"],["/archives/2022/04/index.html","fd7b4de8ba893b3a67d35563cfeb1db2"],["/archives/2022/05/index.html","dd6f1acf3b326365ea010064a76910df"],["/archives/2022/06/index.html","b5c0b767944fddb8b8049cf358eccb5d"],["/archives/2022/07/index.html","7dedcb6c3320ab1eb24b6d7fea7896dd"],["/archives/2022/07/page/2/index.html","f0caf40bac33241af49deafa2550028f"],["/archives/2022/08/index.html","56e974879218380d2716b2d9507ecc22"],["/archives/2022/11/index.html","9354179c2ee8d9820f90549c3adbb00f"],["/archives/2022/12/index.html","713e73f61edc3c239069340cf0f0f0a0"],["/archives/2022/index.html","7905983f30290cb75b877664cd6f0b48"],["/archives/2022/page/2/index.html","0096854da0097c35d4f5130a7d8e0afd"],["/archives/2022/page/3/index.html","fc4666b43e7a2bc1c0880ebd39a15e1f"],["/archives/2022/page/4/index.html","421be5c3190b5e665e83e07eddee157f"],["/archives/2022/page/5/index.html","ac5a13185b22b6f2efd9770f8cfb78ba"],["/archives/index.html","d086ead5167f9049bcf18d703116e5d3"],["/archives/page/10/index.html","02e6a6bce5460422dc89e087d6cf47c2"],["/archives/page/11/index.html","2c5917de4869a24e97aaf706a0b14851"],["/archives/page/12/index.html","c8b31320a89b23a03d55d6f564780572"],["/archives/page/13/index.html","d7aa9ab6c11e6a5e2e35e90cf31cff1d"],["/archives/page/14/index.html","9e2ba4dc3aaeb81d6512f8d5072101af"],["/archives/page/15/index.html","ebcfd64444f3cff1b219ab11648d7d83"],["/archives/page/2/index.html","6e0583b11186d7ba7e25e49300d89de7"],["/archives/page/3/index.html","6718ba95f0a16c973fb6cbcac0e1c9cb"],["/archives/page/4/index.html","5aeb03f69fccc1bdb4ba631a0985bf61"],["/archives/page/5/index.html","2244a311a8d7b74f172082ca51e6d242"],["/archives/page/6/index.html","9753429141807e2c73c5e0e2f66dc23c"],["/archives/page/7/index.html","36c04679334d3a6836ccb57e98e90b5a"],["/archives/page/8/index.html","f46170a9ccbb0c056c69a426614d39c0"],["/archives/page/9/index.html","1aea9c11656ec2df916b43dc685d6925"],["/categories/Algorithm/index.html","94a08d9ebc9ab499b39d1407e63b62cb"],["/categories/Review/index.html","c62d9fff21d02bab0d5ff2c882056be9"],["/categories/Review/page/10/index.html","ca89c9e07d95cd2e310e098ed360bfe6"],["/categories/Review/page/11/index.html","c0901d2975bffe0e38191e3d43e9a19b"],["/categories/Review/page/12/index.html","ad290223c91d992e15f29565a775ff1e"],["/categories/Review/page/13/index.html","f7173441e3782ea697da9f375a01b934"],["/categories/Review/page/2/index.html","cb750ec16b70e25e12ff052cb7dc487c"],["/categories/Review/page/3/index.html","778c7a9499411282beed83511dfa0c47"],["/categories/Review/page/4/index.html","64dbfd9228d43130cea332a39dcc13a3"],["/categories/Review/page/5/index.html","2a757b89ee22edaed21ef5d251655ab8"],["/categories/Review/page/6/index.html","d9e7774bd1b081b69e78f2eb7324e7d8"],["/categories/Review/page/7/index.html","c1634de3407fa2316bfa77e5778b913d"],["/categories/Review/page/8/index.html","edfa5e728a3ebda1742ed9bb41ffe53a"],["/categories/Review/page/9/index.html","be7988554688d44356010f36c4646e8b"],["/categories/index.html","adfd4c5858d77015700e9c28191b9ae3"],["/categories/日本語/index.html","d52f07c388ceaea416f8357bb27827c8"],["/categories/日本語/page/2/index.html","840373960ec046406783a53f0c6a3f0c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0919c021347e4afd06f275183fe44bac"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","7e539bbd0e383c69666b570c4d502830"],["/page/10/index.html","f1f6838e2baf2872f4150c0bb26c229b"],["/page/11/index.html","444cceaeb62705844827572cb12393f0"],["/page/12/index.html","7cf968500ed2f764851d99ba4c6692fb"],["/page/13/index.html","5087fe17aee752fdbcb31dcc95c696d6"],["/page/14/index.html","1285a23f52b4d4fdca8ac5c186c7058d"],["/page/15/index.html","9301f2931c0de19aa96983a2264251c0"],["/page/2/index.html","d1ff7b6cc4550e879736db37e1916c58"],["/page/3/index.html","2b6e85c9fe14bb68d8f151ce3390ad6c"],["/page/4/index.html","1a25e77d7839556030d5ebd489b23f5c"],["/page/5/index.html","ee5074a7ad5bfb24150ca9e4d09f6bdb"],["/page/6/index.html","be7ab19c193e501a068c32bd44ec9be4"],["/page/7/index.html","ed2ae591c9ca0a37f30e6fd7bed843af"],["/page/8/index.html","983b20cdf24ea64fc6bec463934b8387"],["/page/9/index.html","539f791675b8380a5cd92e513acbb122"],["/sw-register.js","ae0262d22b5c4006bb88fca5617ef34a"],["/tags/10分作品/index.html","441085c1ae5b70775b6fb0c867aa6eac"],["/tags/3分作品/index.html","169a1ab088e3fc4c69571ab4840b814a"],["/tags/4分作品/index.html","879c2b0ab9f94e63f126332fa3373ce4"],["/tags/5分作品/index.html","ebabdb2dc519041b55a8c5c61571e39c"],["/tags/6分作品/index.html","c7f7ae787e680553329f7a6872ef9bbd"],["/tags/6分作品/page/2/index.html","bf2f9dad84befefee640896f1463452c"],["/tags/6分作品/page/3/index.html","a51d1f26a98fcd656a2e88d5116016c3"],["/tags/7分作品/index.html","e375b476af6cac767155c6231580b4f0"],["/tags/7分作品/page/2/index.html","281f79035340e65bb6b7f994c50b6185"],["/tags/7分作品/page/3/index.html","ad3fbe568214fbef096f31468a2b0e77"],["/tags/7分作品/page/4/index.html","d43635cea7d35348c3f04efd88807bd6"],["/tags/8分作品/index.html","43c55728b51bb4960640e9a899da2226"],["/tags/8分作品/page/2/index.html","61bff6467eaa0701a0d896ccbbf548ad"],["/tags/8分作品/page/3/index.html","4b7c6ac7551c4a11b9dd9e211d7c8378"],["/tags/8分作品/page/4/index.html","31abeff48d114fccf4723f9bd75a07e3"],["/tags/8分作品/page/5/index.html","41f4a3d9cb64e5a14a188d6772311eb5"],["/tags/9分作品/index.html","c12b1eb4342219e9acf8ba84acf2683c"],["/tags/N5難度/index.html","8926b62be07cf8e266dcdabd6a29b7a5"],["/tags/N5難度/page/2/index.html","c668ac3fad8160379ba9c3b3bb8d6bd2"],["/tags/index.html","80b458390e048a862aee3156115e0ce7"],["/tags/アボガド６/index.html","95c83d46b6eca2c413a6bfba9c3c405c"],["/tags/三秋縋/index.html","d0aae1441c7e9a22fb4288da224b799b"],["/tags/中國武俠/index.html","65c3e5310ba74435a0ad1bed2db58c9f"],["/tags/中國言情/index.html","d550755c0e2584e2ff853130651e2b46"],["/tags/二宮敦人/index.html","b043e67837d242b95945cbec0d57d29f"],["/tags/人性/index.html","b082e1aabd70e3c70679604ea264b73a"],["/tags/人際/index.html","9a73cf0ea4f8e709fe1b37a3fc315be3"],["/tags/住野夜/index.html","00c5d7ed6937ea6810d8ef18e962bc0d"],["/tags/佐野徹夜/index.html","829d9ef6f446d5427fc4695b206dd952"],["/tags/努力/index.html","a94ade1d1d2906ffd3a7fde9efbf1663"],["/tags/動畫/index.html","512b6ed961396d866e813e8d9a6d251a"],["/tags/動畫/page/2/index.html","ba08605d6b172f1aa753f9dcb7fea63e"],["/tags/動畫/page/3/index.html","2222be944a3be8e3a36ba8ba7f4a0601"],["/tags/動畫/page/4/index.html","6e8be6b9030351cd1338fddb74f8abe4"],["/tags/原諒/index.html","569c951e079a5851753610197b80ef8f"],["/tags/反烏托邦/index.html","a42dbeef6c21a34531c6c28b93697d94"],["/tags/啞鳴/index.html","5849c4bad137c723a4bf2d757d0eeca8"],["/tags/喜劇/index.html","03dffeb3f6ed3d72c4849f918bf88c01"],["/tags/夢想/index.html","40daee7853a30ba51dbc485de0521713"],["/tags/天澤夏月/index.html","2642ca400cca02d2aa6263067d565673"],["/tags/學習/index.html","e21ee90b300ff8d49316404bfd7804a5"],["/tags/學習/page/2/index.html","dc09fae1e1001077d60831fe2744fbbb"],["/tags/宮崎駿/index.html","cd8654e746b7191e105178726985ad73"],["/tags/小說/index.html","f632a907c89a8b0c55b16cdf38488f91"],["/tags/小說/page/2/index.html","8daf097375076b9f224a44f1eb94f2c0"],["/tags/小說/page/3/index.html","b2b07ddcc7e2aeea62d6c0652ba99d9d"],["/tags/小說/page/4/index.html","de2eb82b440d968cf6a5a18d6bf5c8cb"],["/tags/小說/page/5/index.html","6f84387f5ae197484270cad448467b84"],["/tags/小說/page/6/index.html","bc74fa5b2abc93a516c2eebef2569376"],["/tags/小說/page/7/index.html","b3ac7b5040601f6af50a173fa4ce223a"],["/tags/平淡生活/index.html","9f7bca2c7b2ac57a9eb9357d68d3fca4"],["/tags/幸福/index.html","67fe33e516e24cefa2783ae319fa4a58"],["/tags/志茂文彥/index.html","80d625ae88d8e4e0e3e6703954586164"],["/tags/愛情/index.html","e10b2c5f5393b687400cc7aeb68c8d25"],["/tags/愛情/page/2/index.html","d17c1933207c0cd694591de375be21cf"],["/tags/愛情/page/3/index.html","4c5b022ea0ccf1dca0c722af10bf3b39"],["/tags/感動/index.html","a2b22ff7d64c5ef5d3b0b1e0979879e0"],["/tags/懸疑/index.html","668e67acb304c2f6276e00bd02753635"],["/tags/懸疑科幻/index.html","a83b17bcaccdd435d44dddc7ba8c86b0"],["/tags/戀愛/index.html","6117b9775768d3832844bf86ae3b4328"],["/tags/成長/index.html","daf011ee8266c885ff71e65e1eb8cb0b"],["/tags/成長/page/2/index.html","891fa86c11ffd024a5be47b59330da35"],["/tags/戰爭/index.html","7b1855ee7ac9843ccc20b7f2179eee8a"],["/tags/推理/index.html","ac471fb3172998062fed878159b0e338"],["/tags/搞笑/index.html","6e07cdfe43b4a1748588f72e424fcd0d"],["/tags/救贖/index.html","3f71e3f54654765e0c2727d9ac4c31f4"],["/tags/斜線堂有紀/index.html","f13d661a20771a2c39be1833fb9c8fc2"],["/tags/日常/index.html","ddda5db42644ceef87ad0cd6ee944fc5"],["/tags/末日/index.html","838df32891ac3bcea540942fc760d899"],["/tags/校園/index.html","b3441919311743b603f8e6d4bbf1c34f"],["/tags/武俠/index.html","6bba3d91252d974a49f412061ebcb324"],["/tags/武俠言情/index.html","a7027bd3e511f934cda810e0a430e4bd"],["/tags/漫畫/index.html","6b5c162a1d4b0c17c5a47e5b6014c500"],["/tags/生命/index.html","8ea8b790c22a55d486f89b568817402c"],["/tags/生命/page/2/index.html","d6fd74ca2c970598cee606a7cece096c"],["/tags/短篇/index.html","4a81edb861e0821ee7508f972c2bbcac"],["/tags/社會/index.html","288266f4bb50301d46e619425fd9e245"],["/tags/科幻/index.html","ff1f49e24318900f842017de4e7185d5"],["/tags/童話/index.html","fd071249bf6efa74b0dfa077833abf3b"],["/tags/競爭/index.html","b232341d86131fe8d38ea8beb7f7584c"],["/tags/自我/index.html","4c2d61a191a69707d641c532f12e24bd"],["/tags/自我認知/index.html","a08338c15fa3b105d70b8cf39c444a34"],["/tags/葦舟ナツ/index.html","bd273d8d7c17cada4940d4631281eca0"],["/tags/藤萬留/index.html","c426eabe360b65de683b2b180901b7d9"],["/tags/親情/index.html","6c8b2a5fc2f33f1652854ce469a8290e"],["/tags/雜項/index.html","ca8bed5c63a3254800210c8127c164bb"],["/tags/電影/index.html","a3b31946ce30ab9ce09841bc026d7d31"],["/tags/電影/page/2/index.html","a2bfff9f22ce5e89dccbff46e8e3a6f5"],["/tags/霸凌/index.html","618c3f3883f89108d6db2954a882cef2"],["/tags/青春/index.html","486d66750c8b55d6419b656311951292"]];
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
