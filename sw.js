/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","b86f94f427279f472788251fe124e525"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","ed48ebaceb517c67394df8a68fb32b93"],["/2019/12/25/Review/無法計算的青春/index.html","64099ee786188cc0dd3f0c9c4ad0d04b"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","66a75d6c31e940515b73a3a1e872f03a"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","cf0a43eab0872da9c4133044b874d830"],["/2020/01/19/Review/下雨天，不上學/index.html","3bc1f3e42d93b5583b92b8aafc264f7d"],["/2020/01/26/Review/三日間的幸福/index.html","97b1625ba49f046faeb19f3a0839cb59"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","aee3748bfe62a74256507c2e784a79de"],["/2020/02/09/Review/青春期超感應/index.html","b935c637afc1994c1b4198190b47b40e"],["/2020/02/15/Review/又做了，相同的夢/index.html","64ce7e377676de719d6585a3a918a427"],["/2020/02/22/Review/回憶當鋪/index.html","c8bbfa57df9b57d2d4fe649eb0bdc920"],["/2020/03/22/Review/不適合自殺的季節/index.html","408fb4046f6566a718468575b648c7d0"],["/2020/04/26/Review/我們都無法成為大人/index.html","6dab53ec524a3db3ad46c5bd17ffd87f"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b987620dc7005f7069a7ecc5b3c39312"],["/2020/05/17/Review/人間失格/index.html","c3eae768d32848672bd506a336066896"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","6b06ff438759a362abc0dad3366d0964"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","24edd2b25c1622adefac31091824efce"],["/2020/08/01/Review/銀河鐵道之夜/index.html","d2464b608440fc386376d98a4496108d"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","6b2dae3c15e4609a87095ee1d4812bb5"],["/2020/08/16/Review/15歲的恐怖分子/index.html","74a07fd63f0a08ce5d28cc1fd0c91b4b"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","13fd21ba68babb70aeb30a7af75f8888"],["/2020/09/13/Review/羅生門/index.html","d2f30a31217dffdf67084a6eb0e158e7"],["/2020/09/20/Review/闇夜的怪物/index.html","4e6930cd9c2e6a6f470e893e94e58670"],["/2020/09/27/Review/14歲，明日的課表/index.html","9f41266689ff07395522689c3f5fb055"],["/2020/10/04/Review/致十年後的你/index.html","e0982806d40a84843df83fa95a055110"],["/2020/11/08/Review/滅絕之園/index.html","b43b1d6dd51caa97fdad65656f114768"],["/2020/11/15/Review/將愛拒於門外/index.html","2fa7544f2cd603563849374628dd804a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","bd82ec975e754ea812c0ca5c3fffffc9"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","652f9832bdd9cd7e20e6c89ff5344a5f"],["/2021/04/22/Review/道印/index.html","39fc0f2aeb6bbb4377679f7a2ee7d2b5"],["/2021/05/03/Review/戀入膏肓/index.html","784dca5e3c24e317148df3f2884f2069"],["/2021/05/10/Review/Dice/index.html","68419d865294e6cdaf883ae00cc8349b"],["/2021/05/15/Review/魔女之旅/index.html","1d7ae483ccbf904123df79508f3d21ac"],["/2021/05/28/Review/戀愛寄生蟲/index.html","ba8a531073edfdbfd0c0a0b242bb0d11"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","a138a5add7bc10d9d79abb36f8466860"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","cb3865670c51fab439b1331e6e604936"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","488a6541057835add26c442930256a07"],["/2021/06/05/Review/流浪的月/index.html","d3510a30c10bd3bfa1f937564e5aa665"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","071b4dc9f42ce3b8d1fe9029a094696c"],["/2021/06/13/Review/第一人稱單數/index.html","365095f3670d948680d3ed3947e2c287"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2d00cb1928ffd3558067ffb5a7abd521"],["/2021/06/16/Review/願你幸福/index.html","36a4571c1a494fd891b4f4ec14bf8e6f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","08453da84d58ccc39d563543445fd310"],["/2021/06/21/Review/神隱少女/index.html","244d631f47eb7313b10e5ccab421f8eb"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","7196fbab84e9281fccd091ffaf2007e3"],["/2021/06/23/Review/天空之城/index.html","ceb96077213c296675c51ca4c695df5a"],["/2021/06/24/Review/魔女宅急便/index.html","2c47ec638c92b490abf5e7d6b728d36e"],["/2021/06/25/Review/借物少女艾利緹/index.html","8d3ba2c04eea9ca41f069f589383f36b"],["/2021/06/26/Review/魔法公主/index.html","7d5104611ffae29cde045a2afcdb5cb8"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","eb6a867fde622b06253653f5ac77595f"],["/2021/07/04/Review/飛雪與劍/index.html","fc654c54357b19dad469f80418e817e3"],["/2021/07/09/Review/地球防衛少年/index.html","1aa35c6998bbd5310f0886798a201da9"],["/2021/07/12/Review/Angel Beats!/index.html","ba4e149e0b44a277a494c8bc06d4630e"],["/2021/07/13/Review/Clannad/index.html","54121dae17b84e002a1f5541f8cefc62"],["/2021/07/15/Review/AIR/index.html","912b5369e729ad6d208aa343c8fad6e7"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","2c026f09448f143acc017f294258cfb3"],["/2021/07/15/Review/螢火之森/index.html","8e801de37bc7f3acfee0d60f29f6cd30"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","f69008f135dffc71f9f62575b16de65b"],["/2021/07/17/Review/奇蛋物語/index.html","0c13c6a66819d6acf15260e734b67f5e"],["/2021/07/18/Review/Vivy/index.html","b064e0d7205ce4f9cd517ecff7d18638"],["/2021/07/18/Review/請妳消失吧/index.html","8eaa7db6f4324430a4075701be861b0a"],["/2021/07/19/Review/漣漪的夜晚/index.html","12723d4c69da6fd51158bef01af96bef"],["/2021/07/20/Review/月色真美/index.html","cd12d1f67ed7eee8e7f050fcda9d625e"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","07fc80c5e1a1b92cb216478631049160"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","6eb6904697bf31afc20f4055c2afc7f6"],["/2021/07/22/Review/罪惡王冠/index.html","3d7fcac3a4797ccb1b6613ca50454984"],["/2021/07/23/Review/弱角友崎同學/index.html","818f48453abdfedfaac699790fbd5e57"],["/2021/07/23/Review/惡之教程/index.html","cf94c8381612177892c944cc0877806b"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","53d954497c1e436e11bc174859af5b3d"],["/2021/07/25/Review/魔王勇者/index.html","7058975ea9cafbad4ac43dd43fcd5648"],["/2021/07/27/Review/一年A班的怪物/index.html","0f72b3a6888a458d0d76e75bd42cfe57"],["/2021/07/27/Review/奇巧計程車/index.html","0670eca00f286005185e2afad64fc358"],["/2021/07/27/Review/專情的碧池學妹/index.html","c9f68bc3ad5dd27b4d7bf6ddff0a252b"],["/2021/07/29/Review/只有我不存在的城市/index.html","835093cc3b800dee565c86e21e4c1eaa"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2000fb40297fd9804f35bf0acec77282"],["/2021/07/30/Review/可塑性記憶/index.html","b6d22d50427dd031b0f1535b0e8c2748"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","5baa384b7bc6396c10bdc2492341534c"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","26a156e7939d2e3c199ae6bd8b228e89"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","588803e26969a484ef88ba774bdd8193"],["/2021/08/25/Review/清戀/index.html","099f071d7301b0ad6d7ebdfa3c790284"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","4ecc9826e4b72c988776bd2920041dbd"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","b5ff7032e2fc95b8b493172b7542b7bc"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ee07c1798acc73db22631b9b7e5e8d2f"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","407a7557550969c5a782ac6e99e9314b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a80cc51ebd49687a1a52f82b6404b586"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","c2c6bdf7bc5b9ae5a8d85b4b25b14695"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","8116b136c9af8cdc6a0ac216f255a59e"],["/2021/10/16/Review/龍與雀斑公主/index.html","a1cd25e6192142194629d913486b1d0f"],["/2021/10/19/Review/孤狼不想開後宮/index.html","6a519d95c39527cfe87f41254cd5104b"],["/2021/11/13/Review/徹夜之歌/index.html","2deeb56cc5dd38a283cf859352fb9eab"],["/2021/11/24/Review/武煉巔峰/index.html","a47008d1f7ff4bdf344b1a3e4d0df5f7"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","ee3d08db95009f3e26c38d4bbcce6382"],["/2022/01/28/Review/神醫凰后/index.html","c3ab4b3208261aa3465228544e47f0f4"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","c5efeaa30bc8c2fcd6a399071639b56d"],["/2022/02/13/Review/夏日幽靈/index.html","ba4812a00d5026115ebf2117718ce543"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","72252d920cee31cdf1a2c1c4c5857b06"],["/2022/02/26/Review/賽馬娘/index.html","95d03e2e4f73b076482252e622720610"],["/2022/02/27/Review/大欺詐師/index.html","8e5fbe3ee85cc2ce7c52751465dabea7"],["/2022/02/28/Review/前輩有夠煩/index.html","5c653900847381f9c2cac8bb2bf2ac5d"],["/2022/02/28/Review/碧藍之海/index.html","f1575c95c19e2585c62f753914af336b"],["/2022/03/05/Review/落第騎士英雄譚/index.html","a3bc76761f8cacf864f6a7e3b251e3cd"],["/2022/03/06/Review/Another/index.html","694cc602d6a47083144a5a1c1c8c9c01"],["/2022/03/06/Review/入間同學入魔了/index.html","252260e21e1e182c45e998a2fcbae815"],["/2022/03/18/Review/再見宣言/index.html","0119bc5e8474f1dc02646a5d4bbe0eb1"],["/2022/03/23/Review/生若冬花的妳/index.html","7a85eefac118f5a1b9dff1ec3791170d"],["/2022/03/25/Review/天之弱/index.html","45d45d67181551bf5e0fe9f2a9b47bda"],["/2022/03/31/Review/滅了天道之後轉生/index.html","2dc6a41554b45d312794c7a4150d3412"],["/2022/04/30/Review/泡泡/index.html","1b370c2040bfc0e0a33d7c0161a4a7d8"],["/2022/05/04/Programming/Dynamic Programming/index.html","a6b27db0758ae55c3cc73e446afc7978"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","b1fec0e2b4b44e0275f12b659b368c5f"],["/2022/06/13/Review/偵探已經，死了/index.html","716afb35587ade44bd1a38dd6322c891"],["/2022/06/14/Review/黑色子彈/index.html","ba67d5117140438f983814978358dd59"],["/2022/06/15/Review/黑白來看守所/index.html","72faae439bb34139d655e26977451b67"],["/2022/06/16/Review/虛構推理/index.html","aeb51fb076a949f4d3672c1a8712206c"],["/2022/06/17/Review/戀愛與謊言/index.html","60a2434868a088b540dd29f09060c838"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","423d50cbf8f5306116c2b5b6f6acf3ad"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f4054fad155d2da7ffe6f939eb18beb7"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2828ed9a5d59367fc6ac545ad7ae658f"],["/2022/07/03/Review/Hello World/index.html","94ae6cea36e92e716a0bf6c59e8e806b"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","b50a53c98800671d7fb544ad16176ac3"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","96e71dd99b86ad657ae64af1a63e4712"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","80ee275482071629e44390b3dc82f76e"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","e24fef29abd3f768953343a6c8fc2f13"],["/2022/07/16/Japanese/動詞分類/index.html","f9d068d93cbaf7401cb7173cfee45b16"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","c1d8adf12f73273128720b4fee371141"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","00259493ddb143db5a542fc8376f4835"],["/2022/07/17/Japanese/音便/index.html","106f5e7ea3b24d3eaf7ae2bd69dc6abb"],["/2022/07/18/Japanese/動詞 時態變化/index.html","3389f1cc0443bce5e1601101f0a3faca"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ace61097671ea3c66f7700d5f6b1dbce"],["/2022/07/26/Japanese/助詞用法整理2/index.html","3d6d86824be5669f1b4d2644b6d5c5d4"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","28a0621c2924fbe6aaf43592138a051f"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b1eaeb48fe8b58e4336cacd8e4c24b47"],["/2022/07/30/Japanese/疑問詞/index.html","4dda417cec9a487344af2e585f81e019"],["/2022/07/31/Japanese/助詞用法整理3/index.html","71d3e61783d9b122203318bc78a9579f"],["/2022/08/02/Japanese/副詞整理/index.html","b8e0f02c20cd165ff07d6b0c040b45d3"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","3432cd03ed53b13814d34e27a774cd4a"],["/2022/11/04/Programming/Data Structure/index.html","0c54584dc275835f05c9566642d5bd25"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","5cd378d4baea2488a9b79fd375ad5f22"],["/2022/11/22/Review/組長女兒與保姆/index.html","38a33febc4c59316b480b8b81b38413b"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","8f13677aae88a3f26028c3ec0bbcc9b2"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","74ab162e7f3bb2f806ea6751e0bce60d"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","1a76ce0aecf25a3740d043580aea5e0e"],["/2023/01/01/Review/あの夏が飽和する/index.html","8a71addbd3d687a4ee6e93bfef94623b"],["/404.html","23ea026ec0cb641a1a99518465651178"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","1409ffc61048561e1566ccac2673cfae"],["/archives/2019/11/index.html","fda6773994a18bdb3f70e816366cb73f"],["/archives/2019/12/index.html","3fbe64bf58dfd02cca90942f41a2bd56"],["/archives/2019/index.html","c674dbaf522e94e6e1936924ec7094d8"],["/archives/2020/01/index.html","3ecfcfbc0956ac7f7b0814b04bf6a380"],["/archives/2020/02/index.html","f311aa8e0dbabe69b028f2d5a532eb5c"],["/archives/2020/03/index.html","e523d27c0082e600b420fd41a3998e46"],["/archives/2020/04/index.html","11f509fb57033f7de7a815b09a2006c4"],["/archives/2020/05/index.html","3728913f6c78ed7e97f7d229f0d3d4e0"],["/archives/2020/07/index.html","758ec9744d4cc91fe6de4f47f6be0b25"],["/archives/2020/08/index.html","9c0f16a128f298f83ddee16a2c3ddf21"],["/archives/2020/09/index.html","e75d1a82720f20baf7027c1458d8d2bb"],["/archives/2020/10/index.html","88ef243c02385f267c2c8fbe5147c425"],["/archives/2020/11/index.html","4c6dbd86e67b95a87b5b21001faf3de5"],["/archives/2020/12/index.html","d737ad7c7f70c9b85f924bdeafaf5183"],["/archives/2020/index.html","138f0762f62a5c27961a5f30129ef06c"],["/archives/2020/page/2/index.html","cd9a0d03cdd28917890110e98846ba92"],["/archives/2020/page/3/index.html","a226d2f7689f1daffe30e15ac0b394c1"],["/archives/2021/04/index.html","44a09b0be7145ea3e7f2528c5b7c47f6"],["/archives/2021/05/index.html","1e17505fae44506119b6206a9ddae907"],["/archives/2021/06/index.html","3bcb003da6a3645c36c093f4a1b47430"],["/archives/2021/06/page/2/index.html","32fc02ef9975ca440aa99417ce34f049"],["/archives/2021/07/index.html","8d31b7954952a9d1a4552c50a2a70cfc"],["/archives/2021/07/page/2/index.html","8369008f713cb14f9d0e9ddc0da29e88"],["/archives/2021/07/page/3/index.html","7ed84c785d162bfc8f1b39b167a4a820"],["/archives/2021/08/index.html","8502905d501f4e6f0ef2421da1919308"],["/archives/2021/09/index.html","3189a96e51eaa746f2903bed3a110c37"],["/archives/2021/10/index.html","6ec3d2a7711ab39122f5e984bd78fc44"],["/archives/2021/11/index.html","e722f080547d04ce3b5371e949ee80cf"],["/archives/2021/12/index.html","8a694077fcf16fdba57625d98848df8a"],["/archives/2021/index.html","0aa8c32359bb44dc947e5c0921e4adf2"],["/archives/2021/page/2/index.html","27e2c2a31f21a66ae73ed5d3dbfea90d"],["/archives/2021/page/3/index.html","31dd16b37912a0b1ab374caf45af9298"],["/archives/2021/page/4/index.html","81545cfff49a9d92ed0571502e9de893"],["/archives/2021/page/5/index.html","070d039e1b0099022f9a24221d637b37"],["/archives/2021/page/6/index.html","8c4858a5e213ea53d18f8afe9b0feca5"],["/archives/2021/page/7/index.html","42db439f08c3c811f159661fac24458f"],["/archives/2022/01/index.html","1ff43f99efd950aa0b3d021536ff42b4"],["/archives/2022/02/index.html","bec76bbf8103225657925f2d70306e3c"],["/archives/2022/03/index.html","cd9f55b78c13bc1c810d8055815b5380"],["/archives/2022/04/index.html","63474970a37090b81298f68555f8f6de"],["/archives/2022/05/index.html","fac988c4febbeb795194cc971ba83f2f"],["/archives/2022/06/index.html","b56baa3fd738488bf9253e57afc703eb"],["/archives/2022/07/index.html","3fc4cb88ac5f23d1e955f514c27a15ac"],["/archives/2022/07/page/2/index.html","f244a6a6bdeddd757db12d3319464cf0"],["/archives/2022/08/index.html","1bcd55f4e56377c530f53ad84020d0b5"],["/archives/2022/11/index.html","ee2815a96b4ca4d2ef1ce9fcf4d3db16"],["/archives/2022/12/index.html","438fe99be0c54d1e719ae0433989a406"],["/archives/2022/index.html","db2a227bf32b92c0f3fd4ca5fbcf4555"],["/archives/2022/page/2/index.html","88cb226ae5d6d17f133a2259946aff47"],["/archives/2022/page/3/index.html","e5041d6364560844cf15d2c1b07b0e89"],["/archives/2022/page/4/index.html","b76b2555db8e77e818f78f882a2f68c3"],["/archives/2022/page/5/index.html","aa6b9ec5cf4a38b480539032fa529593"],["/archives/2023/01/index.html","78763f0cb91b662abc220d189421a065"],["/archives/2023/index.html","d1c11374f937c1190698cf2b6fc8c64c"],["/archives/index.html","881bfff4f5c85c0477d8b2e2cde09c01"],["/archives/page/10/index.html","a5bdc4b124dcc18f61c1f9ce19a17fc6"],["/archives/page/11/index.html","4c27b1ec30a25ba3730ee166f07ee924"],["/archives/page/12/index.html","32c65f673a41f7aac1c306db140b254b"],["/archives/page/13/index.html","642695e92e3f89c0a423c17228acbe61"],["/archives/page/14/index.html","b851d6f2a7f1bfd0c35b23df4ca85db2"],["/archives/page/15/index.html","b1baa9aec1f2ab91bef6342aa4b48580"],["/archives/page/2/index.html","d0e07073e839e185404fab19615c2598"],["/archives/page/3/index.html","0ab9d73ed0c03d98fb25422a9a291615"],["/archives/page/4/index.html","afcf53d5d16e6eebfe3592958e0f3bd5"],["/archives/page/5/index.html","ac4cdc2901be945249e7a44f3c10e65b"],["/archives/page/6/index.html","e59e7d6d427afad5e4ac0a92eaf7fb23"],["/archives/page/7/index.html","6fae109d404e96ca2bbe870720002316"],["/archives/page/8/index.html","9ff789f6b91ca22d022a7251e41980e2"],["/archives/page/9/index.html","995121185ad4d8903902bd617736a9bf"],["/categories/Programming/index.html","35729e9ec65d6e94fcf9567b72e4c676"],["/categories/Review/index.html","0a81a8a73bec8928fdd2207a41ad874d"],["/categories/Review/page/10/index.html","a5b488a4466f2a4d16b51aa21b1abee9"],["/categories/Review/page/11/index.html","4ace900808c2e03d2053fcfc1f7b8f9e"],["/categories/Review/page/12/index.html","e3a8d47553882bc22f844b55b42e2706"],["/categories/Review/page/13/index.html","6fb9806972b9ea7f7bc95efbbe5d68e4"],["/categories/Review/page/2/index.html","aaf0bf5546bfc7be82da222ce7d9d3a2"],["/categories/Review/page/3/index.html","d7f1f8def113a9602a0ffebce3e2da38"],["/categories/Review/page/4/index.html","bebb3c783b4d3d2872d5ef038e1b9e9a"],["/categories/Review/page/5/index.html","294d90b01c5b348be5761232cb7fa157"],["/categories/Review/page/6/index.html","0444175a950ad4f6f71f4c4e988c3b2f"],["/categories/Review/page/7/index.html","6a96740da735e8b0681ea6ce34bc30f8"],["/categories/Review/page/8/index.html","4ae3ff4dd10d28dd4370f0e9dc67efc3"],["/categories/Review/page/9/index.html","319a99f7d6b16e1f8d6184ae9fc8e64f"],["/categories/index.html","7520964434d0eb20bfc52c7fd45a8cfa"],["/categories/日本語/index.html","4294f19a138a84a8a6d66f6899176264"],["/categories/日本語/page/2/index.html","82d19c8e0d9e8ab224985543266a30a9"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c49e734036a6ea0728880355585d4b5a"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","7c5f4c23ac86d30e7ad935c14d3a0fbc"],["/page/10/index.html","8a2bfe94c6d9d3e6be93708436d3d288"],["/page/11/index.html","366a0e58ea96771c155ef4608365b7ac"],["/page/12/index.html","89ffcb790841d65b66118017c3c6d265"],["/page/13/index.html","a9233461c7ea884810b05df24baeea88"],["/page/14/index.html","7fc806ac55a73c4b99b418a41074b0ac"],["/page/15/index.html","6a9748b59e584bdcb77759518689b941"],["/page/2/index.html","5dab9db845a80da7cfc401bcffec56b7"],["/page/3/index.html","3896084dd5c7f983717c0bc044fc362a"],["/page/4/index.html","0c33f5618deac4e57630479db5b5a0a7"],["/page/5/index.html","626d6e3b229434317f26850546e88c63"],["/page/6/index.html","2a1afc71d4bd4d4297bd0193e9fb0a2a"],["/page/7/index.html","049334a07b6d80fe95350779ace4e1cf"],["/page/8/index.html","c22cb71904e9cf25f94114c80f1d4911"],["/page/9/index.html","e8a1d8c7ba3482ce13b7dc8a293044e2"],["/sw-register.js","5109b41adf386b693a03157e946c6e04"],["/tags/10分作品/index.html","d44659d8d1f743d946220b8864b7029d"],["/tags/3分作品/index.html","36efbf32b393934bbd694890fcf6602e"],["/tags/4分作品/index.html","bfd8717c58730ce503bb776feb90b3a6"],["/tags/5分作品/index.html","ba9e449c7ee506ee1b3985a147ec428f"],["/tags/6分作品/index.html","90d88b810d67ea104ffd1dbaa708bc76"],["/tags/6分作品/page/2/index.html","4d065ac34496e2e73d047d3c88b37a04"],["/tags/6分作品/page/3/index.html","a0388c9ad2496386555c7c287fd10162"],["/tags/7分作品/index.html","7c52b7fd03644dea6922d9e7767fa967"],["/tags/7分作品/page/2/index.html","7335a088f3cd740cf8219da4fda996a5"],["/tags/7分作品/page/3/index.html","1d3236ed85908626f78a8d9813b930dc"],["/tags/7分作品/page/4/index.html","fe37a9e715a3c292d18ae5de5f8bd78d"],["/tags/8分作品/index.html","ef268ead4a8a6515e297f4f3a6390cb8"],["/tags/8分作品/page/2/index.html","197515e2986be36372843a6170766ee8"],["/tags/8分作品/page/3/index.html","4137526f1108ae12220e130983c932ad"],["/tags/8分作品/page/4/index.html","fef0c21f2171ddf6bac3ed45c511366e"],["/tags/8分作品/page/5/index.html","95933febbc92cd421d2dceac01e64fe2"],["/tags/9分作品/index.html","36202d4bb313efca46bb9a1a7b472523"],["/tags/N5難度/index.html","e4d5e28b239bfb40b5666696ec957217"],["/tags/N5難度/page/2/index.html","3363540a7e63bc6062195c9fb59e8b81"],["/tags/index.html","ea8a88e6261b5c54a0f68a5acca7c43e"],["/tags/アボガド６/index.html","f138b8428d72ab66f959500392940721"],["/tags/三秋縋/index.html","16265754837f9d2146114cb81436acb1"],["/tags/中國武俠/index.html","8c8585634d623dd468160bd6d1eeef10"],["/tags/中國言情/index.html","60d13a0f76b86ae8a6ff1ba6e5ca1c8e"],["/tags/二宮敦人/index.html","98bbf760c04d6b2c3c67eadcd1217a2d"],["/tags/人性/index.html","1680468ea7b30254d05f83407583b7bf"],["/tags/人際/index.html","e1d77289752783f8ec1780aae4969e95"],["/tags/住野夜/index.html","7c7b90e9b7ecfb5c9f64fa3d9e5a48eb"],["/tags/佐野徹夜/index.html","888e048ee73d2ae8cfa19d81fae7fa96"],["/tags/努力/index.html","ce833895a5ef08db43d03476d0941e6d"],["/tags/動畫/index.html","6701b7666d74599c448ee97be732c5fb"],["/tags/動畫/page/2/index.html","527b23b291beaaaf9c8a2bb5b0702e86"],["/tags/動畫/page/3/index.html","d1b49036c1906d8094e13725c6df9a1a"],["/tags/動畫/page/4/index.html","39072a32a222f64a60d928f4643d2975"],["/tags/原諒/index.html","baa3078a854dd1e365c2f585410c5da2"],["/tags/反烏托邦/index.html","ef126a7279fad7190f4527820d6d5c24"],["/tags/啞鳴/index.html","db88e833e373475a2c54cde94fa5b4c5"],["/tags/喜劇/index.html","ec4693d0a0cac495de218c097193a414"],["/tags/夢想/index.html","1b14140104f748453f407c06cff66dc9"],["/tags/天澤夏月/index.html","44bc3700fd9005006330870eed95cc3c"],["/tags/學習/index.html","9a482a07de8f648a2b69eb78681c630b"],["/tags/學習/page/2/index.html","6c8d80c3c26110f384ab850aa8c6f386"],["/tags/宮崎駿/index.html","85c374c2abf25bf86a51c0d3b6051347"],["/tags/小說/index.html","c190f80feb3cbb4d2a749116318cb915"],["/tags/小說/page/2/index.html","433be644c2627ef08472d091642c86d7"],["/tags/小說/page/3/index.html","44f88bc7beaeb900a5bde2c44d5122cb"],["/tags/小說/page/4/index.html","7a6792f5d365e7825f2fd1eb885c71e5"],["/tags/小說/page/5/index.html","dec5bd3e6a010a5ef035db3e61765735"],["/tags/小說/page/6/index.html","50d6de6a383748baa95e64b087fcb6ba"],["/tags/小說/page/7/index.html","7710d884f699e6f021bb3015cc4805ad"],["/tags/平淡生活/index.html","e13c6b7a3cf6b2c17ca8248a66c7d9ae"],["/tags/幸福/index.html","c50f9d775f0c99930c0750bf17eef704"],["/tags/志茂文彥/index.html","5c6b2ef95d7d228b0cf1575f27b76eb3"],["/tags/愛情/index.html","7966f6b97eff6f2a7737d39b6f6380c2"],["/tags/愛情/page/2/index.html","2990de30bf9dfc33ea62c9f07a468e8a"],["/tags/愛情/page/3/index.html","c6a3352deeffc7e199d1c59c1ca931e2"],["/tags/感動/index.html","498c0c58bf98b301ce351a8b19fedc50"],["/tags/懸疑/index.html","65f22e32a227fc73e1ca020f29cc29c3"],["/tags/懸疑科幻/index.html","50da4931b1be1e2fe3de2ffd64b49dda"],["/tags/戀愛/index.html","6dffee63e32162c77e897ee47f59b0e2"],["/tags/成長/index.html","56158466da1e1d894a03dab5946527b0"],["/tags/成長/page/2/index.html","460053f9314e09a13dbff64c5978babf"],["/tags/戰爭/index.html","64ab221ea83835e8984dd222b0ea0f5c"],["/tags/推理/index.html","5ec6d3988256f497e263d7b70835d6ef"],["/tags/搞笑/index.html","1c04a2cc3dd8dec7b15b5a29b171abf6"],["/tags/救贖/index.html","9fb6bc676dd996a5893a5e12a303a947"],["/tags/斜線堂有紀/index.html","8da1dfce9a1d3fbd93c578d9264838b3"],["/tags/日常/index.html","d3e3af93398785da051e6c3020fb9b01"],["/tags/末日/index.html","e76438746c571efb08ba23e35d7f7ed9"],["/tags/校園/index.html","e01f04fec0efbbe55d2df06ca28cecaa"],["/tags/武俠/index.html","256c8368eae76c6ae9755dc94bf8d3df"],["/tags/武俠言情/index.html","a93041dcfb639876d75941e8e20f014c"],["/tags/漫畫/index.html","e4d8d0938659ac0a71aa3521ce37e574"],["/tags/生命/index.html","841e68f9a0c302a515532d8b5e9fde65"],["/tags/生命/page/2/index.html","21b958a91a498025e8d25b934447d9eb"],["/tags/短篇/index.html","b2157b79ce084eec16b1fd70d9531686"],["/tags/社會/index.html","dde39551cc6c3c44ac43e33d24a6aedb"],["/tags/科幻/index.html","ec7bdee292a163dd6859329d50b354ec"],["/tags/童話/index.html","ac7dba6f1c6a7983b764d2f2b3b7d44a"],["/tags/競爭/index.html","42dc1511939f33855413078d039e13eb"],["/tags/自我/index.html","edb8373b4d3c28af0d909c7ed99e86eb"],["/tags/自我認知/index.html","ec1479e341c0822f9ed9c9936a86fd47"],["/tags/葦舟ナツ/index.html","53c69cd588c51f754562fff06d64024c"],["/tags/藤萬留/index.html","59ad1d324ea597510bae9f4fb9127c57"],["/tags/親情/index.html","97c28450390440599922e23ab41c75bf"],["/tags/雜項/index.html","4d4654297e516ee97bb176fb710e1389"],["/tags/電影/index.html","06f93650298ebdc1edc6b64a0bbcd021"],["/tags/電影/page/2/index.html","4a8d94b220e1e19819d68e29eef4a3b1"],["/tags/霸凌/index.html","7fb0d01b2bcdd9c0f63cbced47c62331"],["/tags/青春/index.html","f279a84bc79c8f752ad9490ba41ab04c"]];
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
