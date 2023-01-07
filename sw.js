/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","4078c6c8fae37a0730dd295b9c3686ee"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","1ccd1ac6e8c1a55437e5ac8348617496"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","f1cb1e3548a439f9446c303c1e3f6bd2"],["/2019/12/25/Review/無法計算的青春/index.html","de95f5fb8f9656b449cd9726d31657f5"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","108be3f6fd10f6c231fc3fa2cd7b6572"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","2370b2efde3e10b5512131763fb2916f"],["/2020/01/19/Review/下雨天，不上學/index.html","4f33cded3abb6985bf0aef9b6438b44a"],["/2020/01/26/Review/三日間的幸福/index.html","f2bd26f75b8de4f0037e38d3b2dee799"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a9ed027f8e618f550fecc56ef188fbdf"],["/2020/02/09/Review/青春期超感應/index.html","da1dbb432b88b57933f864cac9e54755"],["/2020/02/15/Review/又做了，相同的夢/index.html","cfbf7d792d2b804c079c5c1455701659"],["/2020/02/22/Review/回憶當鋪/index.html","bf8e4f0079c3589a584b31f0e37a25fa"],["/2020/03/22/Review/不適合自殺的季節/index.html","509505415932fb421ad97ae8b03303ba"],["/2020/04/26/Review/我們都無法成為大人/index.html","0e96eba41f4da0e2411294c4152d1cbd"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","a071350893de213cebcedf7e002ba022"],["/2020/05/17/Review/人間失格/index.html","53b90219ea35ddcde5608a1914f5b551"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","908da4f5e91e5185a00082df4a4e361a"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","9f2ad49403229420df5d588705d6d2f7"],["/2020/08/01/Review/銀河鐵道之夜/index.html","7406dcdb989d30110d9b39623743a607"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","378b1d3c521b015d4fb14e5cb8c5a5f0"],["/2020/08/16/Review/15歲的恐怖分子/index.html","21134e6bd70ab61eeb7d4477f1959c4a"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","9c9842c0579fa690dbf00b874a1232ff"],["/2020/09/13/Review/羅生門/index.html","f7cd39c189707dc57ab3ae37043f7651"],["/2020/09/20/Review/闇夜的怪物/index.html","a41402cc9ecf7e89716e0c775b330876"],["/2020/09/27/Review/14歲，明日的課表/index.html","e28cfaf1cdc6e0d365066dbfc7d2bdad"],["/2020/10/04/Review/致十年後的你/index.html","8c8c058de92b9c80e6c1ccb87a844b3d"],["/2020/11/08/Review/滅絕之園/index.html","4b48b9e841fda54c141440e5f03be480"],["/2020/11/15/Review/將愛拒於門外/index.html","101fac468cc0eeed7472d52dfa6d69a7"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","8133351c1308f5b9eb91c4321f05344a"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","50cbbb0b7145167c6108a9c7e53b2d44"],["/2021/04/22/Review/道印/index.html","3ba3f40fc4b9c4d36831e5ee15a90c4d"],["/2021/05/03/Review/戀入膏肓/index.html","0ce86e0d2be2c0be9c4c51bc23614461"],["/2021/05/10/Review/Dice/index.html","29eedd071800f37778e8ee3b25044295"],["/2021/05/15/Review/魔女之旅/index.html","3781ee046bca9f0c1841a8dbb0049719"],["/2021/05/28/Review/戀愛寄生蟲/index.html","a11a79332fe99119d688218b4b01f70c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","cc6ac686347ec277227c5573f87b84d7"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","6b4e5c60dd05f96df36b42d521e5dcf2"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","0c2600d77b1f0bbf2bd1432b598a4618"],["/2021/06/05/Review/流浪的月/index.html","dc99e4313d78f9dcec932e38ca6fe10e"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","8509ba50d5600bfd4c215761389219bd"],["/2021/06/13/Review/第一人稱單數/index.html","28563f8e8acaeda1c174c2cecca80120"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","8f20cfbf48b27805285deb2fb2b8c69d"],["/2021/06/16/Review/願你幸福/index.html","bfbe953f93f13537d5821fcba233b045"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","b035f4d0625e164e1c34b982152590ff"],["/2021/06/21/Review/神隱少女/index.html","613599238fe992a7d6145c7151c627b9"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","ab8615884c7d1804899b19688de5197c"],["/2021/06/23/Review/天空之城/index.html","e5a595a4aea40d20d8a212877ebd8b12"],["/2021/06/24/Review/魔女宅急便/index.html","41d69eba43fdcf540084aa9d65b273da"],["/2021/06/25/Review/借物少女艾利緹/index.html","53d37da2fbc99f23ea39360733a6eb52"],["/2021/06/26/Review/魔法公主/index.html","a5fdec27f054a801066ee7e7bff6982b"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","62860582e79c0ce62aa849a0658395c8"],["/2021/07/04/Review/飛雪與劍/index.html","912bbfa2ae62bf6d64e368c8c18cd4d8"],["/2021/07/09/Review/地球防衛少年/index.html","6dbba1fff4324f0362b53abc135d3e99"],["/2021/07/12/Review/Angel Beats!/index.html","692f6abb0e1b22a6662c913d118fce7c"],["/2021/07/13/Review/Clannad/index.html","8da5320357c82a7edf642fc007206d76"],["/2021/07/15/Review/AIR/index.html","aab8953abecd3b01244a5107e0d9b568"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","e87f6e5dd5ab267d9d7481fe796ba313"],["/2021/07/15/Review/螢火之森/index.html","2960fc904116d75fe328a43eeefd2514"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","91ceda2f101d0a0c75f92970dbb195c0"],["/2021/07/17/Review/奇蛋物語/index.html","56768a532ca78c8c7380f5e5a935ea53"],["/2021/07/18/Review/Vivy/index.html","a404bd032ebe66407e6999f91086669b"],["/2021/07/18/Review/請妳消失吧/index.html","de13ddc51c2f328206e68acf575deb0f"],["/2021/07/19/Review/漣漪的夜晚/index.html","f61f57289ff8af04074134caa8957208"],["/2021/07/20/Review/月色真美/index.html","ba93687d4e4122a70ac66235f9c13c5a"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","7d01fba1e12df5a50887fb6bfbb3c735"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","4ae8423ece9bb0ef1d72ce91f8598415"],["/2021/07/22/Review/罪惡王冠/index.html","5922cd95a33b7995c2785bcd69aacd59"],["/2021/07/23/Review/弱角友崎同學/index.html","f1c6551c85a3e1354fc4c452f7ef8f3d"],["/2021/07/23/Review/惡之教程/index.html","c7f868e88a6e6a34228cb5fa300fb0ad"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","0a04cf3dd9fcaae51ef34feaad960281"],["/2021/07/25/Review/魔王勇者/index.html","86fdabcbb33a2a53be1fef1ef98aa246"],["/2021/07/27/Review/一年A班的怪物/index.html","0d88be7ad802dd95e32debdc2ed7fbb0"],["/2021/07/27/Review/奇巧計程車/index.html","e2ba1cae948f6048148dae6cc28154db"],["/2021/07/27/Review/專情的碧池學妹/index.html","7e16a489ad3fb0bacdd44b126ace3012"],["/2021/07/29/Review/只有我不存在的城市/index.html","bfddd6220027c4472d5cf2d1ad60831f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","7f045bb6867bd0f3b1f4cab6d67488b2"],["/2021/07/30/Review/可塑性記憶/index.html","6760e86955c7ae2c847bda0c983fa892"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","227143947101173fc5993c8122cbd275"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","bab09c46db426e333a18ffe3a7049be5"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","431f963bf6b6343891c9987942052ddc"],["/2021/08/25/Review/清戀/index.html","fc31a9fa4fa9eaf1a6a0e1f17fd24fda"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","46eb0539e822a2ca1553ea8486e3bc3d"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","af72091672b55c11aa9c1f15acc2bebc"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","db0ca7088ab56546dfea9e5145229375"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","6f7bf48a7758f39c5c39f6ed87fc61e3"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","6eaa34eebbd76c109e9bec61cf4a2e96"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","848d4febc524999dfdf05343f3ccf1f6"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","705e938561421781f7207139a81a26a6"],["/2021/10/16/Review/龍與雀斑公主/index.html","cac8acaf9a96a97ff5a52e88e5005ab5"],["/2021/10/19/Review/孤狼不想開後宮/index.html","658bfa94b4207435ff327201b8cf2428"],["/2021/11/13/Review/徹夜之歌/index.html","3a7733c10ea49d5c5438370533ce0958"],["/2021/11/24/Review/武煉巔峰/index.html","1c1bca408b6cb43a227b88bb3a8fd8f8"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","becf9b5adb633f9cdddf8ad2fb8a34d4"],["/2022/01/28/Review/神醫凰后/index.html","a3257a7a85d5cda71d3604c48160af81"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","4b379204fbb4784884b9c2075c648036"],["/2022/02/13/Review/夏日幽靈/index.html","e8c2c052e8ee6e0535226a8053c46295"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","938d96d5cfbe5a314a83be72d7014fb2"],["/2022/02/26/Review/賽馬娘/index.html","3beacc49918b6c49913e34f52e5ee5bb"],["/2022/02/27/Review/大欺詐師/index.html","b2053dd692fa1c73ffec47895da398ac"],["/2022/02/28/Review/前輩有夠煩/index.html","17c899da021f70881fc99d3a6a726df7"],["/2022/02/28/Review/碧藍之海/index.html","2c759f60a242dbc0a6b121a5f0c225bc"],["/2022/03/05/Review/落第騎士英雄譚/index.html","9420f585b3ce863300094ede5f35c637"],["/2022/03/06/Review/Another/index.html","6ae0123f40969c0cc2348ac69b74c670"],["/2022/03/06/Review/入間同學入魔了/index.html","8ef95fb28bf00b83a340b7faa98b646b"],["/2022/03/18/Review/再見宣言/index.html","a0b044acff271ad5d824e8e785644f38"],["/2022/03/23/Review/生若冬花的妳/index.html","e39bc1374e894fdac3e0506b889cf28b"],["/2022/03/25/Review/天之弱/index.html","19c1e6f37db490de8e541b2d61bb329f"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c0d31d03b0ed478fc1e8ac6c6dc08155"],["/2022/04/30/Review/泡泡/index.html","e074aef4c77d973bb5418dc22962a21d"],["/2022/05/04/Programming/Dynamic Programming/index.html","3f106154fc2939c123549c8cb3dea762"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","97b571a9bd66e0063a0fd224d2630258"],["/2022/06/13/Review/偵探已經，死了/index.html","0d0f8bc3ed9a1888e112086ab6ac8675"],["/2022/06/14/Review/黑色子彈/index.html","33c3db7a339173c92c818dc9522d44d7"],["/2022/06/15/Review/黑白來看守所/index.html","62c38931b365b0eebd1d20245c4fa29a"],["/2022/06/16/Review/虛構推理/index.html","43720b78649027ebbc34cdd4f05789c8"],["/2022/06/17/Review/戀愛與謊言/index.html","596edb6786d3873a7ded6b5fd6f9abc3"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","ef3098a290dc1b35e0a668c949dd73ee"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","286d957ea59cef174e6f7f903003d47d"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","65b9ffb1c6c88b49cbbf057e21182452"],["/2022/07/03/Review/Hello World/index.html","8f1542ec45f17b1ca712cba94e582c61"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","f2f72a1c865182c05545f4ec78967243"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","9ccd08745d99a862ff519e8cf04b8deb"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","6a5b2c8f1831e53b15dcd04d957df1db"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","28681e92dacf46070e17f3528852e868"],["/2022/07/16/Japanese/動詞分類/index.html","c9aac253e21a888f9e004c81b0c11501"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","3c066b9d676796889ff2605a89dcf680"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","1ef8c66a4a82fdece17953b0a6b3d9f5"],["/2022/07/17/Japanese/音便/index.html","24116b80863d4802ebf3960b93d22827"],["/2022/07/18/Japanese/動詞 時態變化/index.html","71692f258b72b926d09e7bebd603a4ce"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4b38bfe59e9ec889425e9d94362024c3"],["/2022/07/26/Japanese/助詞用法整理2/index.html","db8e6a1b578d1b7f68eee8e0ed5235cf"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","94e071aaf5401ff14920f68d0fb31051"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","16c4f611d63f647102cae0d742c8d281"],["/2022/07/30/Japanese/疑問詞/index.html","279605243c93c7964387b30f521662c8"],["/2022/07/31/Japanese/助詞用法整理3/index.html","17b5a4d3fb21e4fad585dc1754fbd710"],["/2022/08/02/Japanese/副詞整理/index.html","ce632bc8801ff45775f43d8b6e34a47d"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","1426a64378a5375b8924289b915ae411"],["/2022/11/04/Programming/Data Structure/index.html","daa8c5734756659aad194160cea03681"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","4f44d87bc7f1d9dfbdeac04fd0fd9165"],["/2022/11/22/Review/組長女兒與保姆/index.html","9a7f673317e9c4da187e0a8e2bc70863"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","add09be81a45cee54415419d5ef1491e"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","50cf9d7e8f24e959139e544487c18660"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","5a01f781c0ebbfe6c66b85b953a914f9"],["/2023/01/01/Review/あの夏が飽和する/index.html","5672a387dab8816a07065fb3d25985d6"],["/2023/01/02/Review/孤獨搖滾/index.html","f3c4dbd7deee735841334cd3a93622c3"],["/2023/01/03/Review/來自深淵/index.html","2d5b72d3c26264a05dd83d577dc17923"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","a6f2d331fd15951947723637870f2dc1"],["/2023/01/05/Review/處刑少女的生存之道/index.html","d5166e278c8bf1a04ad352725ae65f7a"],["/404.html","1ea95b280cc04aea5c684821532c73ef"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","d6c9ce4884072a9ac55c7638be2f569d"],["/archives/2019/07/index.html","c77a91e970a9907575de60408170115f"],["/archives/2019/11/index.html","0cc7a626296311006c7549fe24d4cde2"],["/archives/2019/12/index.html","29d7e719c957e22a83b93cf1eac8861f"],["/archives/2019/index.html","daca66f9e8d5c91c7a734ad6080a1642"],["/archives/2020/01/index.html","0662d1375548f9e8a8f9007b08ed6a11"],["/archives/2020/02/index.html","c29180a6dfab78050517ef00a5c30e28"],["/archives/2020/03/index.html","676a488b93ede5bd3696f14aa40cfc57"],["/archives/2020/04/index.html","1bfc27c135b1f98fd234763fe40db1be"],["/archives/2020/05/index.html","aa671ff2e34407d8aa75ac4a676d0370"],["/archives/2020/07/index.html","97f3cc506686d87317965d5dd2156f9a"],["/archives/2020/08/index.html","33b72b24c840f8bb2e799caf650c941d"],["/archives/2020/09/index.html","6c1f652b7dff47a0411454a0e80c39a0"],["/archives/2020/10/index.html","f0f655a261484ef64cc4604c61a8ec32"],["/archives/2020/11/index.html","12d207a267488d84240011b5be471ee5"],["/archives/2020/12/index.html","d9a41c347556f82d2f68f7531b93cd0c"],["/archives/2020/index.html","9708aed52781b51e9a6022e22071a072"],["/archives/2020/page/2/index.html","e3646f17e2d665afe7419d3616e18379"],["/archives/2020/page/3/index.html","43216f14df77e85f14160a38886f1918"],["/archives/2021/04/index.html","65331107c415dd6011b0d3ef41888fda"],["/archives/2021/05/index.html","f1f594a02a591412cf663ff57d542cde"],["/archives/2021/06/index.html","e01bcd8744acebf4fcf6f3f56e579780"],["/archives/2021/06/page/2/index.html","a92b6c15bd22841391c09a076a830462"],["/archives/2021/07/index.html","5ff96ebf334f8b235e2eccc9a009917e"],["/archives/2021/07/page/2/index.html","0ee9a07c23fab6f0c0d38155c3e33af0"],["/archives/2021/07/page/3/index.html","34af98ca7f951fdf1a59782586f27ad4"],["/archives/2021/08/index.html","f54916f12bd02154ee6bbff088b621a6"],["/archives/2021/09/index.html","fefe0040e37fce752f5e7162ba02a64d"],["/archives/2021/10/index.html","d3d670b10bf12902fa7aaf5f337ec6c1"],["/archives/2021/11/index.html","588ed854f46fe20c976ff86867db2879"],["/archives/2021/12/index.html","a367d58cb8f65ea5e38ab7deabdca7e9"],["/archives/2021/index.html","0241dcc02f8bf11a808d2b358e75611d"],["/archives/2021/page/2/index.html","af6eb4ad2291a3f53c6cc8eb2691d622"],["/archives/2021/page/3/index.html","52f696c027a4f10ac717c3bc24bab1e9"],["/archives/2021/page/4/index.html","521bedaa8980156d2fad1c9492098169"],["/archives/2021/page/5/index.html","8ce36cfb46be4428423ee2defb132fd3"],["/archives/2021/page/6/index.html","a57bd718630e6b46a2bf1aa456763e1f"],["/archives/2021/page/7/index.html","72dfd5aa3bcfcd430b82d204fa4c67b3"],["/archives/2022/01/index.html","58aafeca3a4d99bc13426aad9a50d55a"],["/archives/2022/02/index.html","49bab714208cb95a98c522ea969ace3b"],["/archives/2022/03/index.html","01ea78228f3a709b2f610ed6168504ec"],["/archives/2022/04/index.html","9df3b12166ee5db3cca7156b8dd3887a"],["/archives/2022/05/index.html","b70dfc0e24685ec80430dec1aea3873a"],["/archives/2022/06/index.html","4bfff91b53b01fe56794b78c081d8859"],["/archives/2022/07/index.html","cb223098a85d493772df668d05ea82f5"],["/archives/2022/07/page/2/index.html","dce42834da9bb3e6693e0b8fb393ee63"],["/archives/2022/08/index.html","17b14b70b2d7d06e9ba70b059e472433"],["/archives/2022/11/index.html","e6b81be1b6d31f8a13b146c4f5a9fd1c"],["/archives/2022/12/index.html","c7709c7fcbb3c7ab5c0074ee4d53df27"],["/archives/2022/index.html","9480199cf6bdb48b543c5d65c497b8f9"],["/archives/2022/page/2/index.html","68c999812251ebf9ad3269d494744428"],["/archives/2022/page/3/index.html","aaa20f6a1d11af52f9a887f73b9de4d2"],["/archives/2022/page/4/index.html","58dc7a47a2bc63330e0c6a74fedb7384"],["/archives/2022/page/5/index.html","850357366501177ff2c204dc38eaacf3"],["/archives/2023/01/index.html","d521a0dde38c9f863f5d6eb269d5d11a"],["/archives/2023/index.html","833f150e524ef6011f31bf9a0176a7ac"],["/archives/index.html","2755ad675001441b70ffad9929999e31"],["/archives/page/10/index.html","2c2df9deebc13ef972764e2504341bde"],["/archives/page/11/index.html","e7ed1e518092359fd5520de3a76fad86"],["/archives/page/12/index.html","8892385bf71d017325e526f1245e8c97"],["/archives/page/13/index.html","551cf5f6bd3ebb3e1947c1b1a75221c5"],["/archives/page/14/index.html","e02547006a002e7bf26bdf2bd78f73e3"],["/archives/page/15/index.html","e4c1885ac6fc8045c87496440f9efa5a"],["/archives/page/2/index.html","0cb43d6d35ce3eed58db99f35f5c301b"],["/archives/page/3/index.html","e8eee5b39c157cb26986233be91c2a78"],["/archives/page/4/index.html","e803638dd8e112d9d8c2aa70962b5c60"],["/archives/page/5/index.html","6b84c369571a4122995ac247759a5f9b"],["/archives/page/6/index.html","0d985368789947c309d0ddfda59c3c9a"],["/archives/page/7/index.html","4d3f7b3321326304565e7c1528c4499d"],["/archives/page/8/index.html","52219a4615e54af2fc70805185814efa"],["/archives/page/9/index.html","d6565979a7016c1da485be6be18d133b"],["/categories/Programming/index.html","34cacbccd939cacbdfd56af0c5026fd1"],["/categories/Review/index.html","cdfdf192ec7b2187fcfd5b2441cd1a27"],["/categories/Review/page/10/index.html","4ea421ab30a85c4bed722ada546cfe0c"],["/categories/Review/page/11/index.html","adb3a3a615df5e266aaf88ba3999e606"],["/categories/Review/page/12/index.html","5dbf72f239063f7eaaf7a8db1175c4e1"],["/categories/Review/page/13/index.html","3b7166e058216be08a362cad237bb598"],["/categories/Review/page/2/index.html","99a299d4c222ec55884a02dcc484d3a9"],["/categories/Review/page/3/index.html","e9898ba5d41bbb932678684d24e517ee"],["/categories/Review/page/4/index.html","2590365bf447eb75409a65b0f99da91c"],["/categories/Review/page/5/index.html","38a62b78e4ff796266b6d1aa7ccebd47"],["/categories/Review/page/6/index.html","ae3919fd0c1cd38a56501b29de3901e4"],["/categories/Review/page/7/index.html","62ff53b377ad42cc68dbd8149e958f68"],["/categories/Review/page/8/index.html","b8b4cf3765931bab12862c9600ad2559"],["/categories/Review/page/9/index.html","6295689e4c0e65bcffbef5aeb9143c55"],["/categories/index.html","aa1c674f0cad5dd9e61e9574f8ce0760"],["/categories/日本語/index.html","b0222160ebd2fdc8642d55b46c9e575a"],["/categories/日本語/page/2/index.html","9eda94ef75add17fd692d87959bd9d1d"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7884cd93d7911f07d4dd75460d9b7d8a"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1e789887a2fb51f309794f5e56bac64e"],["/page/10/index.html","9b1e7218a285e930f52244aa4da3f212"],["/page/11/index.html","05493b0cb9fdcc22f004e4295eee44f7"],["/page/12/index.html","297bc16041be01f0ea4d468c655ebde7"],["/page/13/index.html","9730fb86a496312e2f3561632fbf076c"],["/page/14/index.html","565d15c45f5ac9a04eff1aab8bba86da"],["/page/15/index.html","9b445b3d7bbeaad076a525d594de9373"],["/page/2/index.html","d77b662041545597be8916ac1ecae806"],["/page/3/index.html","41f9c86d184b7a6d3937a257dacdd57d"],["/page/4/index.html","8e9ff7a96ecbaa68e4e5b064672c74f0"],["/page/5/index.html","26e9bf968f7178790d518bfed7704ac5"],["/page/6/index.html","24624fbf6b1fd74e79b3677374964e21"],["/page/7/index.html","d0f82b73ca71dccd6bacb32e314b8035"],["/page/8/index.html","9e7f4a9781c650c4306ec01f7d713bb2"],["/page/9/index.html","36d730467e82c0ab8e4af9310fb6b6b7"],["/sw-register.js","4e0cabe7d2ad8d065d9db1f25a402d6c"],["/tags/10分作品/index.html","67c574730ea4a6a5bfe2b1c476ace8e2"],["/tags/3分作品/index.html","fc36bf31bde78a347110b42d1e3a2b6f"],["/tags/4分作品/index.html","7caa2698db8000a14c180f669fb8cc7b"],["/tags/5分作品/index.html","aa7dd2249fef6f51539d180c2f396fb4"],["/tags/6分作品/index.html","702b1563ac54350c241f35ea6787f827"],["/tags/6分作品/page/2/index.html","9f36692cfff1c5651ef1762857d4604c"],["/tags/6分作品/page/3/index.html","7dbd4f7758da840ecfad4e09429ceb3d"],["/tags/7分作品/index.html","58a386d93198aacc0e1acbab8a43e1d6"],["/tags/7分作品/page/2/index.html","a31193d59297765f2c985f2a673998cd"],["/tags/7分作品/page/3/index.html","203141c652fe1c4d5bfcdcb39585c0cd"],["/tags/7分作品/page/4/index.html","3fc41b6cecc1376d9cd02a96104cdff3"],["/tags/8分作品/index.html","49565ff55f704dc17a65791efd1ffb54"],["/tags/8分作品/page/2/index.html","635aeba687d3b81448d9194f207f2d18"],["/tags/8分作品/page/3/index.html","48071c3e491436f8c53e993d5ee07a4b"],["/tags/8分作品/page/4/index.html","4586de746fab83abb2149afa95a16049"],["/tags/8分作品/page/5/index.html","464b7aa8f651243e31c963d5e3bc1441"],["/tags/9分作品/index.html","7f8d79029a905de9afe5705740e646ed"],["/tags/N5難度/index.html","40c74b0bf208a13fc77febf16524c410"],["/tags/N5難度/page/2/index.html","6b7b790c8c41b19d8f2a90b0159761ef"],["/tags/index.html","a3d7d4c80b7bed151adf51bc59691711"],["/tags/アボガド６/index.html","13301eac21b53f75c769c8f0d7059917"],["/tags/三秋縋/index.html","4688237c3f867c25f1c8cd9094ea171b"],["/tags/中國武俠/index.html","7bf161f569c5515e5a029dc8eba9cea6"],["/tags/中國言情/index.html","d8cbd53147b43b94ed4b66ff2067d1fb"],["/tags/二宮敦人/index.html","0a1f320c4045c4d4942d9048794298ea"],["/tags/人性/index.html","333e7ad16b23a1a7ad02b6972cd96caa"],["/tags/人際/index.html","b23169decece1590d4ca7de235708fbb"],["/tags/住野夜/index.html","5369595f57328ddcef563a42bdcb1bbf"],["/tags/佐野徹夜/index.html","7589e046251abed0aa69a4431fb0d7a5"],["/tags/努力/index.html","53c85f166653c4ea3647be8fcb3e0751"],["/tags/動畫/index.html","569d7c199d31217a478532c40deed912"],["/tags/動畫/page/2/index.html","d9823f544e8a45967579a64013353f10"],["/tags/動畫/page/3/index.html","93f983129a5a29bb900eb253acfc1fcf"],["/tags/動畫/page/4/index.html","18f9078f47bb420b308c865f90b3c219"],["/tags/原諒/index.html","7d9113d71599ba383545545c454cf600"],["/tags/反烏托邦/index.html","1de5d79c7d897831fe10029e10581a95"],["/tags/啞鳴/index.html","f07d0712fac0808b44c2b0e0089d4175"],["/tags/喜劇/index.html","b91498e88a85988797e7f8ac54063fa7"],["/tags/夢想/index.html","89a1108a6a53a6cc53d353132b2351f8"],["/tags/天澤夏月/index.html","94bf768e999583062c150e0bcaf1fd21"],["/tags/奇幻/index.html","8348d416e29f29f8473191fd739ebf77"],["/tags/學習/index.html","61791718642c170d0a36b4a05e108029"],["/tags/學習/page/2/index.html","f573739229ddb1d3182fa9fd4cd26524"],["/tags/宮崎駿/index.html","45f59dea29077274764f9a9eb2a3a7fd"],["/tags/小說/index.html","258b983f6e9718bfb5bcfde1c292bdd3"],["/tags/小說/page/2/index.html","30a4fcbe3d362c286f6da50032d4e5fc"],["/tags/小說/page/3/index.html","bcc2e6736e3429aa9a2dd64ae4ff0375"],["/tags/小說/page/4/index.html","93ea1e746ff46fe4d78c763906cba8c7"],["/tags/小說/page/5/index.html","b5fa1c2a445978b09306cdaf3869e09a"],["/tags/小說/page/6/index.html","7acf6425d9cb55c52c2039270b984e0d"],["/tags/小說/page/7/index.html","f9712343abaca6a60b4c6da27541c196"],["/tags/平淡生活/index.html","48779a05377fe83d687f773489ff0cf6"],["/tags/幸福/index.html","71c16c29c2b03b435cfe57ce0f198414"],["/tags/志茂文彥/index.html","82ae83c3f1210160a7e5945414f6ad5b"],["/tags/愛情/index.html","be249ededb0e997fb95e3b4e0d588309"],["/tags/愛情/page/2/index.html","e5ab50ed819f6e21435828499a1b9452"],["/tags/愛情/page/3/index.html","99496fbc81e9f8547f05066bde848786"],["/tags/感動/index.html","e9c97a407c733036548f4c8c903b237a"],["/tags/懸疑/index.html","b3c097a9ad029562c03917877c02ad08"],["/tags/懸疑科幻/index.html","39dea3ec87ff131dd50faf40d916d23f"],["/tags/戀愛/index.html","c847f03286db2c27473af596d7c3f25d"],["/tags/成長/index.html","3b8d872d888ec8da8e767c93a59ae99c"],["/tags/成長/page/2/index.html","72c949aa286a0f43cde55bd384a797ac"],["/tags/戰爭/index.html","e8613c8376f02d99dd07a06ed1708cb2"],["/tags/推理/index.html","2cf2484348e8d67468f5e488a0526c94"],["/tags/搞笑/index.html","889f8ded0b1134c081ed2825d801cd4b"],["/tags/救贖/index.html","d8dd60a332bc1355f10bab54fc582f62"],["/tags/斜線堂有紀/index.html","d0a49b3db5afbe0306f1bd6d459407f5"],["/tags/日常/index.html","b9dc6aa7d5af463c78e5bb13786794eb"],["/tags/末日/index.html","5f0496cf0391f07e4a0d009d228d3e1c"],["/tags/校園/index.html","12bef9b976d78be7de7d98e826800fef"],["/tags/武俠/index.html","5b07b76efe08fc399867a221b1cefe01"],["/tags/武俠言情/index.html","efab9d10d911c7721154bfb8cf359e80"],["/tags/漫畫/index.html","1ed8390505ae664edb3216bedea237b4"],["/tags/生命/index.html","5f78fb259e5bd020b10ae853b8326b86"],["/tags/生命/page/2/index.html","92ba83eb44ff0506ea619d2ef208aeba"],["/tags/短篇/index.html","18426f157ebe54fccea204d24ba4fe38"],["/tags/社會/index.html","7068ac133c91fc6a04a744c719614fdb"],["/tags/科幻/index.html","6c0a6617a63263ab822bc776327c473f"],["/tags/童話/index.html","e1e1fa7da4f3efc1d12183eea0047adb"],["/tags/競爭/index.html","931956b0532cb6f6a428c8779ac4b93a"],["/tags/自我/index.html","12f9c41a82a0dccb2c44d64e3408b934"],["/tags/自我認知/index.html","7409eb4223e88f33ae1325aaa207fda3"],["/tags/葦舟ナツ/index.html","33a3d6f39604b449489d5329957653f3"],["/tags/藤萬留/index.html","f185ad2733c9de5f914bc5d6c64b2c41"],["/tags/親情/index.html","3c19c7949d9dd3e794813449d8f9fca4"],["/tags/言/index.html","7e112de594a27a468efbf5ede6058b68"],["/tags/雜項/index.html","82bee174eccb6b46e32f316d63781518"],["/tags/電影/index.html","1b1c7be39bfa7cd41fed2f5d690404bc"],["/tags/電影/page/2/index.html","cbfd78b48a1713ecb2f5bba753a11aaf"],["/tags/霸凌/index.html","3ca7c8da222c6a047fb8b2fb85b6442b"],["/tags/青春/index.html","27150e4e3880f216b23dc20cfc574631"]];
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
