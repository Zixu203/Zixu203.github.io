/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","a535ab87686f7134ecfe8fac8800dca5"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","18f8614dd5e09c5a591f502409048a46"],["/2019/12/25/Review/無法計算的青春/index.html","617531c685235a1db46cf8b15e06ec13"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","702b2799ccc64b6053aa8b4537945ecb"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","8ef6cc00cb272c2af0c9df107e40493c"],["/2020/01/19/Review/下雨天，不上學/index.html","5283d8ce4fe2d9e33d28a7930679d443"],["/2020/01/26/Review/三日間的幸福/index.html","7d5199b0361a874c09b57ee60853b5cc"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","6523f6075c96011f74e45936fb8d237c"],["/2020/02/09/Review/青春期超感應/index.html","605a9c8c68ec8793c1a9ea455ad63bed"],["/2020/02/15/Review/又做了，相同的夢/index.html","a610b239f3aa7df33ff3b547f91451a7"],["/2020/02/22/Review/回憶當鋪/index.html","fd54d6956cdbcb9cfe7203cf2243d44b"],["/2020/03/22/Review/不適合自殺的季節/index.html","43e675a209466c75daea04b5d75f903f"],["/2020/04/26/Review/我們都無法成為大人/index.html","db1b07a8a40fce5eaa65681e98603e40"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","02630c20542eeb418c0582a25e3b0129"],["/2020/05/17/Review/人間失格/index.html","c58f7443bf721a4b7761b4a13793e906"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","447101a785f2be9eaa476e6b952df3ba"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","aefccbf0d1c4f096f4e59255a74757ff"],["/2020/08/01/Review/銀河鐵道之夜/index.html","31927dfc5b75db8da21d87fe69948186"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","4d7588ba4d1e10062761ba799c9002e3"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d659fe3cd234c40ea9f1d4454826c9d1"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","93ef3accf04cc03d7ff45cd84d1ad769"],["/2020/09/13/Review/羅生門/index.html","c7e0350bbf5ab1781bc1bfb1a82dfcc4"],["/2020/09/20/Review/闇夜的怪物/index.html","1ae72514ebaf70c8dfb783eff7bc02af"],["/2020/09/27/Review/14歲，明日的課表/index.html","2353d39ef045a8ffcba99def89bb2cd7"],["/2020/10/04/Review/致十年後的你/index.html","ae08a5a6122640c07f916d00d6510154"],["/2020/11/08/Review/滅絕之園/index.html","8faad4c0b34bc7033c1c0068ee590574"],["/2020/11/15/Review/將愛拒於門外/index.html","05551c282d065c6e7356b323bbd4303d"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","20275aa03edebed92c26cdd9aec18aeb"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","e9bdf8a5e3b0acef041134df9d1d8e69"],["/2021/04/22/Review/道印/index.html","49b9f725ec4bd3cbeac4d27ce4672a3d"],["/2021/05/03/Review/戀入膏肓/index.html","07a5df9fe2574dad308dfe9fcca787f5"],["/2021/05/10/Review/Dice/index.html","f1098eeeb66d30fdf83a57a10efe2add"],["/2021/05/15/Review/魔女之旅/index.html","34d5e100e0e70568e3a069bb1c11f497"],["/2021/05/28/Review/戀愛寄生蟲/index.html","a304090a3f8915a36f887d1a89c9e77e"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","d044e02236502f0cc8825e7c456a58f7"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","d2e714d849aaa216ce1e65035b740661"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","836ea3e8ae8c7f83394d1cf5c817da92"],["/2021/06/05/Review/流浪的月/index.html","4a770345e2af43edda2a002b041634fa"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","4c08211082fe23914ff15e47076dba6d"],["/2021/06/13/Review/第一人稱單數/index.html","169146bf79554072c8f9087224d39a6d"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","7425dc3c47b77792cd1fc63d423e61d7"],["/2021/06/16/Review/願你幸福/index.html","29055c71483a33cc775fecf1e7d726fd"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","7ce2c7809573b6218e076dfaa2c02912"],["/2021/06/21/Review/神隱少女/index.html","e3410ab8e51f48f4cc334f789ce2340f"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","1e9f6e6cd2307338507a00957a4f230a"],["/2021/06/23/Review/天空之城/index.html","67500c320a509976b12005360f95077e"],["/2021/06/24/Review/魔女宅急便/index.html","e175dc69093f09d6851c7b586f0fa0cd"],["/2021/06/25/Review/借物少女艾利緹/index.html","08c498df918bad26104fd6b8a369a41a"],["/2021/06/26/Review/魔法公主/index.html","0b70e2e4fcd5b81a72197e636f8a46fb"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","a437fe717a377fed7053983e0bee095d"],["/2021/07/04/Review/飛雪與劍/index.html","8086e1abaf52edb5acec3e437ecb315a"],["/2021/07/09/Review/地球防衛少年/index.html","e99f70e8aa0c9faffa2bd9b59ef621e9"],["/2021/07/12/Review/Angel Beats!/index.html","ac6baebd45c4b4be55bcc01dd180871a"],["/2021/07/13/Review/Clannad/index.html","1a38919f6a63ea147aa47008a48375e3"],["/2021/07/15/Review/AIR/index.html","e672d82dcfef7fb62f8cc9592644a141"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","ad15a2eb96285d844b7ac31c5399aee1"],["/2021/07/15/Review/螢火之森/index.html","494ffef494949ec82a30cf4b5d7c6978"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","b9464521f6c8222236d514e3c74f5bf1"],["/2021/07/17/Review/奇蛋物語/index.html","c9e359326bcedc345f14c21c3de02091"],["/2021/07/18/Review/Vivy/index.html","df540d5e16fa83e89bd5311ca14498c7"],["/2021/07/18/Review/請妳消失吧/index.html","8bd11b0bc1b6615b7edc94faf48c3cc7"],["/2021/07/19/Review/漣漪的夜晚/index.html","8090f5fa9e587ff6aaeac5084233cc52"],["/2021/07/20/Review/月色真美/index.html","a1caa5ef565d5bc1aa374520b0cc9489"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","18542582b8f2f80250612435a962f6bd"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","9713dd930ae9335f0a28543fceb334e2"],["/2021/07/22/Review/罪惡王冠/index.html","fc6d9da62a38824e434a0bfd945750bb"],["/2021/07/23/Review/弱角友崎同學/index.html","800996a6e5d2a7944afa12a0abb2aaae"],["/2021/07/23/Review/惡之教程/index.html","acd95e4fb6d141d575645307295cec0f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e198f1a2b89c7c084fb24eb8c88651b5"],["/2021/07/25/Review/魔王勇者/index.html","f13f29aed833e83d1ca1056d24ecf93a"],["/2021/07/27/Review/一年A班的怪物/index.html","494153c8a9c9449e7431aced727a2409"],["/2021/07/27/Review/奇巧計程車/index.html","c200e27bda7ca1e144d064ea1924f8b6"],["/2021/07/27/Review/專情的碧池學妹/index.html","2de5ba6b6547b51ab7b8f1f013faebca"],["/2021/07/29/Review/只有我不存在的城市/index.html","16d9596d7c290f569363d2106abc1337"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","f1661fa2e072071ebc283f5ada4121ba"],["/2021/07/30/Review/可塑性記憶/index.html","2c4b70d5b2558d4f1fe25cca4aaf986a"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","bbc872393a808b240613f775e6ffea6d"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","cf24eeaabf712fabecaa991e50f5af9a"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","0661bfaf2e266f9ffeaa0566933cc0d4"],["/2021/08/25/Review/清戀/index.html","0221559d789d27cfcdf91b6cb7c30db5"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","da3879aa201d5c4196cafc4ffef40d45"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","1a9f2b748cf2e92d1e13c609cef112f4"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","1fc2b492b917c5f8552bc1743faca33f"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","1bacc2e2cf39f1967f0cbbe52582d678"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","51a1923df4a839a3402f9c918bad7ade"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","2b67e3d4bf7673de1c677f74cf1ccd33"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a9e157c7849ba0202ba0bbe7b87e1c27"],["/2021/10/16/Review/龍與雀斑公主/index.html","c4ff0a4cbdcea810f08eff211b9cb938"],["/2021/10/19/Review/孤狼不想開後宮/index.html","59f2a913bc3dad149fa11da49a3a9a20"],["/2021/11/13/Review/徹夜之歌/index.html","0da357ed36a3a698903ced0d02914cb1"],["/2021/11/24/Review/武煉巔峰/index.html","88ce14680baf75b57e65f67effccb12e"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","2b08eaa6ae995afd482f41a01c3b23f0"],["/2022/01/28/Review/神醫凰后/index.html","2fc9c5909b351c1a0e9b85e3e637ec1a"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","55b63bab1a1b3beeb361c4801657c80f"],["/2022/02/13/Review/夏日幽靈/index.html","1d8f2eeea1cafbe101d9528f38448188"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","eb83632b19a855ef108650128c355a29"],["/2022/02/26/Review/賽馬娘/index.html","679b48281a12a0e4cce7ec8324cc5117"],["/2022/02/27/Review/大欺詐師/index.html","0d685c7a9285d3da7eeacee57b76e07f"],["/2022/02/28/Review/前輩有夠煩/index.html","7db0666c3686daaf13f6ff24b85ece78"],["/2022/02/28/Review/碧藍之海/index.html","b7bb96f8bd3a89e16596d843b93056e2"],["/2022/03/05/Review/落第騎士英雄譚/index.html","e81b0430da14e11ddd2ad80e0a8873e6"],["/2022/03/06/Review/Another/index.html","d34ea1b61ba96edda6d26e407562460e"],["/2022/03/06/Review/入間同學入魔了/index.html","d62f42246eb5ab8bf09e65e73a7db64d"],["/2022/03/18/Review/再見宣言/index.html","47ff78b08e495153597a24aff94faf18"],["/2022/03/23/Review/生若冬花的妳/index.html","21d76a250a5a4294415211f3909a00ea"],["/2022/03/25/Review/天之弱/index.html","f2a10ff54fdd5086eb6a58cc0794f388"],["/2022/03/31/Review/滅了天道之後轉生/index.html","127f89177ecaaf94c50bed0a86438760"],["/2022/04/30/Review/泡泡/index.html","9ea50c4efda219b2c212bd5d205a6a35"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","684f3c14a0cb0bc25c297d6ba432eea5"],["/2022/06/13/Review/偵探已經，死了/index.html","908329e108f846dab723147700bd3c74"],["/2022/06/14/Review/黑色子彈/index.html","c30cd7665569e49b346c9794dc7f2aba"],["/2022/06/15/Review/黑白來看守所/index.html","34dcce52d335757503543706cb4219be"],["/2022/06/16/Review/虛構推理/index.html","024fddc8fb01491318c6499ceb25376f"],["/2022/06/17/Review/戀愛與謊言/index.html","d906c1408c7cd47c25b761e6d30a1a95"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d92be2934b3fe69ba8cab35810fdfb5c"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","7174424cb79cbc7e162cbcf1e065297c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","466a31a5d90532846dbafd1794e8c68a"],["/2022/07/03/Review/Hello World/index.html","26d9c84bdf7e48e594cab91827069b74"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","c6c7c2925e614942888ae985472c3025"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","08f6e07e4eb5fa1b9c6697bfb3bfec00"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","37c69da5d9700b0a8657ef66c0839b99"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","2028176b782b4623fe772c7ab2166b74"],["/2022/07/16/Japanese/動詞分類/index.html","47289e56201f978fc06d8e2e0ce456db"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","cb5c1896b84c1c9f7ad51818a7320454"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e9c016c794a2298f28486282602127b9"],["/2022/07/17/Japanese/音便/index.html","e1663c14353bf040f8877c3279402ce9"],["/2022/07/18/Japanese/動詞 時態變化/index.html","2de3412efaa894b8307c7702bb41170d"],["/2022/07/19/Japanese/助詞用法整理1/index.html","3957dc8f88d2eb463619241d126ec8c6"],["/2022/07/26/Japanese/助詞用法整理2/index.html","ce55b086d2af5b133002849686f3613d"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","78f7776c0fc1f8f2ceb522baf38e70ee"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","0302c84c1ab1cb299f7a9ebe36af2324"],["/2022/07/30/Japanese/疑問詞/index.html","2575f2361bfae1dc9e90f7682acbe8e1"],["/2022/07/31/Japanese/助詞用法整理3/index.html","c75bee7718be84ef432fff0102f918d5"],["/2022/08/02/Japanese/副詞整理/index.html","7278c6c3fa12b5217b68d9026b5ca5cc"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","f32d1a7047002f08677fc9622bc963a5"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","cd6bb7c1953e32e67399936723e10bb4"],["/2022/11/22/Review/組長女兒與保姆/index.html","a2a7b0b06109d2929bcf6c7324a41300"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","b1b60c0e13a224e43493a3cb68d4a6e4"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","c9ef840bab1ae3b9c67f65f0ca98111a"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","ce6221ac1794519d6cf88f2b5ce1dfc3"],["/404.html","49d5f34f35e99f2c3618eb2ec9a4d1cf"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","34e880e3c8554eeef0192d8ef624deaf"],["/archives/2019/11/index.html","8e3891c0db274a513dc4d7e69dabe6db"],["/archives/2019/12/index.html","9d88dc3e9fcb95d060b41f51912960ca"],["/archives/2019/index.html","005fbd6a36a4f4e23cec119eb6615524"],["/archives/2020/01/index.html","c50ac7354a120fb9d46e12b3e450bb7e"],["/archives/2020/02/index.html","0be5b908534c0890a93ad56b4d88127d"],["/archives/2020/03/index.html","ae5574354abc47b89191f5d1d8f36609"],["/archives/2020/04/index.html","d2446098e17e276f61794cf3e9829ada"],["/archives/2020/05/index.html","46c294fb38f8e79633605e3b83a884c4"],["/archives/2020/07/index.html","6d93b86dd43c6211a36b5f3234c54b48"],["/archives/2020/08/index.html","02f6a3fcedd33b96caee5ea475848bdd"],["/archives/2020/09/index.html","c1455852dfee93d48e1eb8edbba19f9d"],["/archives/2020/10/index.html","da8742e60c0d2a26518501dbf6b90720"],["/archives/2020/11/index.html","7df6e606acf588b8c7e43eda3b12b2ab"],["/archives/2020/12/index.html","d0c400fd292301608e7a17eb9d283593"],["/archives/2020/index.html","eecbdb855d3a73d8f4589733e9d412cd"],["/archives/2020/page/2/index.html","f5fc3526727e1886f55e6121615455c5"],["/archives/2020/page/3/index.html","6e330638fbd587e4aad21944165d8b4f"],["/archives/2021/04/index.html","7f1d2b1e248b8cc2c57f50dac698a81a"],["/archives/2021/05/index.html","d260404278dbc0bfbe5d3d1a17dcf5d2"],["/archives/2021/06/index.html","6d5b8a0321fd33f44ee3b6265573f002"],["/archives/2021/06/page/2/index.html","b0d28983d6101265b1cb82492f9c0901"],["/archives/2021/07/index.html","6add453714e52c897f4bda269c8ff65f"],["/archives/2021/07/page/2/index.html","2aeb2644f9a2f1c4d509e1cae9d7a63f"],["/archives/2021/07/page/3/index.html","2c056524c1c72c677471818359f78e0e"],["/archives/2021/08/index.html","00b22aaccd2728c6cfbb8e4d01ff132d"],["/archives/2021/09/index.html","a4211a88bfacae5c26ef934d8c3c8f2d"],["/archives/2021/10/index.html","71d695c7ae71e1c02e45dbc40902e9cc"],["/archives/2021/11/index.html","c4a2865dc1d9354bbf6fefeb2e744575"],["/archives/2021/12/index.html","68733c4060f0b1d4da66dac3c5b2fa1d"],["/archives/2021/index.html","f3df0568e49df79d4eb641db9268278f"],["/archives/2021/page/2/index.html","895542c506739efa54c42eb52e67ac5d"],["/archives/2021/page/3/index.html","70fa1d1881f5376069b85de7cf7d30d1"],["/archives/2021/page/4/index.html","f59a2be2d510328f3f1175dc149ee343"],["/archives/2021/page/5/index.html","3380e2ab0fde0943516a861960374af2"],["/archives/2021/page/6/index.html","3dc1dbcb3a99f5f1baab7b49e5e23510"],["/archives/2021/page/7/index.html","be6ee4305753bf56dba2e59fff456d4f"],["/archives/2022/01/index.html","573fc57a77776ad011e2fde014eced7e"],["/archives/2022/02/index.html","3f064824835f4e3e675b03edac7f676f"],["/archives/2022/03/index.html","9b5f832e1df238fe28188d9ead22970a"],["/archives/2022/04/index.html","d41574a21b9c15cf78da42cd3943aeec"],["/archives/2022/05/index.html","1c7cafa4bcdeca0799ac0c2629c976c0"],["/archives/2022/06/index.html","85b4feb25a26445435b877bf7d6b3b47"],["/archives/2022/07/index.html","9186bb7144ea0f9f0fcc329f1aad57b2"],["/archives/2022/07/page/2/index.html","0807cd14006770fd4453f2ad96db17d5"],["/archives/2022/08/index.html","fd59f417fb979e32ba32b4ad7aadaa67"],["/archives/2022/11/index.html","1ae54f369517b897ed61877a0d3f9ad4"],["/archives/2022/12/index.html","344954f27ccb9dfe919350597a07a78c"],["/archives/2022/index.html","1443712b587c7593a123be2b454893e8"],["/archives/2022/page/2/index.html","2068b63a17b04a2fb4272af34d59f4b0"],["/archives/2022/page/3/index.html","23e2d5ed5ef89ae2ebdc166da67cd370"],["/archives/2022/page/4/index.html","00049e4dcd13247211e18cc6601fca3e"],["/archives/2022/page/5/index.html","74ee4be392cc5b50c7f75159486e2c9f"],["/archives/index.html","459320c04315a796921153f37ec696fc"],["/archives/page/10/index.html","9289fd75d20010d7216c83ad33a9fd23"],["/archives/page/11/index.html","2143491636102c3c9b92ec815c9b8010"],["/archives/page/12/index.html","cb7967b210539414f5c09ffc0906969b"],["/archives/page/13/index.html","6c1eecd682e97271a6581fbf28bcf2f9"],["/archives/page/14/index.html","edbf88cd31146892c49b4ebcc28c61e5"],["/archives/page/15/index.html","ac54c8395986a1138009ddb0de7d75ed"],["/archives/page/2/index.html","3bcfbef3c48d3b036f2c2712833de029"],["/archives/page/3/index.html","e43cf8bc75518d6e797d48ac169e6a68"],["/archives/page/4/index.html","eeea4a00b06584dee3c41b4e9c21085b"],["/archives/page/5/index.html","d227e77a467dac9eb6b6d656d9bdc3b0"],["/archives/page/6/index.html","46047a4ac16d012b6aee934051062ce5"],["/archives/page/7/index.html","be4d60fd747366f6011a619bcb6ecdbf"],["/archives/page/8/index.html","80ebe6bb0fceb4be5f2513b55777bfa2"],["/archives/page/9/index.html","c46da9e304c5d0e13072185c32e24911"],["/categories/Programming/index.html","69b3ca01ad790d87e5f846e6cb0d820f"],["/categories/Review/index.html","3d8d57651ccccc784e3e5447ddfe8bfb"],["/categories/Review/page/10/index.html","a38f37f99d73c8926a94231ffc178220"],["/categories/Review/page/11/index.html","69b10e3380adc88fd0459d799f32c9d2"],["/categories/Review/page/12/index.html","6e3e34018640a41c35808efe6ed793ef"],["/categories/Review/page/13/index.html","75ecddc23ba947bf75613f782cd2f5a2"],["/categories/Review/page/2/index.html","dd5cbc6de3a4c77ff6d8b206a7976a47"],["/categories/Review/page/3/index.html","82da357d36ebac95b49ccd5e581ce9b7"],["/categories/Review/page/4/index.html","bb6b3dc0ec86204caf7ddbfc42e00987"],["/categories/Review/page/5/index.html","ec091269416c775bd9ff8e27dfe3bd96"],["/categories/Review/page/6/index.html","42e4e9af0c044500f7327d3418a5c848"],["/categories/Review/page/7/index.html","d26134154d1596fe7f8dccee1286f631"],["/categories/Review/page/8/index.html","b138589bde114c272c6fedf15760d7f3"],["/categories/Review/page/9/index.html","dbfd0a728aa93bec1d5f65976102967c"],["/categories/index.html","55f99710e27c6e84251e0fe6984b23e7"],["/categories/日本語/index.html","ccd2f6c159bfde9e8bf830d779b9927a"],["/categories/日本語/page/2/index.html","3920047cb2ca0fe7e8bd43c6b3a47342"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","33f2b6ec94c5bec251b3fd3c05ddbdd9"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","71bc22d43ab417aba4462cce3eaaffe3"],["/page/10/index.html","e7ce057c39d7ec610b147fb8d0eb744a"],["/page/11/index.html","00fc602593703b8f602e19e0aa99cec4"],["/page/12/index.html","c0cfa41a5963a2add5c08f2ef9efc75b"],["/page/13/index.html","3259c0272f42e32cf522c65454d7d3f1"],["/page/14/index.html","6904043bb13c1babee20ee1e9104deb3"],["/page/15/index.html","7a5dfe401c821544a3a9db20f53821ed"],["/page/2/index.html","854b410df305db28b006f64436035d80"],["/page/3/index.html","450db095e5e98298b8ff5bbb6ee7a513"],["/page/4/index.html","7ce0a44ab05d89106a9b2b32b9192311"],["/page/5/index.html","6ed019015d15b4e4a1f849022ca9b2be"],["/page/6/index.html","dcf8971ac319d21b8094e55bdececc38"],["/page/7/index.html","a34138c8ac95bfac23aee1f1938ebdc7"],["/page/8/index.html","cf1e46007539f65ab1771f4816b566da"],["/page/9/index.html","3684a6da5e6f95d6ac134dfef7e9bd2a"],["/sw-register.js","2f9a1278f2e20fcf05df68c5a9adb6d7"],["/tags/10分作品/index.html","2793a3f20306a3da98c5896410784a29"],["/tags/3分作品/index.html","1eb424c36ffa00244c9e4f12da64f0d0"],["/tags/4分作品/index.html","c3137a6da50a5b010ae2081407b589c0"],["/tags/5分作品/index.html","373835e19cfd56f04e19228a782ccda4"],["/tags/6分作品/index.html","8d7a1b3894ae7f0867f1f548f7c410b5"],["/tags/6分作品/page/2/index.html","ab1935eee960a54151fd9b5e72b28c22"],["/tags/6分作品/page/3/index.html","280d66a2fa5081677b36dfa0de1a487a"],["/tags/7分作品/index.html","95f00043d44dbe82098d2be904d189ac"],["/tags/7分作品/page/2/index.html","ba656786208c9f319c584cdf549acf63"],["/tags/7分作品/page/3/index.html","bc5418759595dbf6c4d137288a840b07"],["/tags/7分作品/page/4/index.html","1e30df7d83b353163f135d5e17f22966"],["/tags/8分作品/index.html","49ae63e053eb26828711d38ed3745d26"],["/tags/8分作品/page/2/index.html","8ba5aecb7d0ac3b5bb51ff24214c8c4b"],["/tags/8分作品/page/3/index.html","87eb68c5237dbfea24b56c25bdc91bdd"],["/tags/8分作品/page/4/index.html","b2f0856bd1f79025ae2db460202db3bc"],["/tags/8分作品/page/5/index.html","03e53130cb0cf818215de86234bafda8"],["/tags/9分作品/index.html","f4cf51ccd532a2adbd78c7fd922b0a7d"],["/tags/N5難度/index.html","b2d747d0080210668931dcae7c6c0afb"],["/tags/N5難度/page/2/index.html","fc3180adc38fdb034820caf1dbac035f"],["/tags/index.html","addcd60f28712d8e1aa12046178c2ce5"],["/tags/アボガド６/index.html","dcab0e6269680c7423d189ce8000f6d1"],["/tags/三秋縋/index.html","9531e67622d68cd4a6ca1c8908eaf30c"],["/tags/中國武俠/index.html","efd548ec522c2580b4e131a5c21dff5c"],["/tags/中國言情/index.html","2da5782b1c3ff59829274f2f219c2535"],["/tags/二宮敦人/index.html","de2695ae8b98c37c597c9e96756bda7a"],["/tags/人性/index.html","9694bd5846742ba58670b2901bf5d943"],["/tags/人際/index.html","2f22c8243a52bb0ac9108034b4834af2"],["/tags/住野夜/index.html","281a51ccc922372565e928702f4d4e1f"],["/tags/佐野徹夜/index.html","55c400c2d77d6cfd3c24302f05172dff"],["/tags/努力/index.html","d5e35e410d4f1591d5c8de6bc4fac82a"],["/tags/動畫/index.html","6338998a3dd13b2fbfefa794e09f6ab6"],["/tags/動畫/page/2/index.html","edaa7576c8f529f664e6ab69b7afb615"],["/tags/動畫/page/3/index.html","9157e9a401864ed101e40b4351781373"],["/tags/動畫/page/4/index.html","02705b3cb464406f621f8e1f7af12cbe"],["/tags/原諒/index.html","da660e726f72effe4ad6786d5eb960ea"],["/tags/反烏托邦/index.html","3af0fce6b0264eb079604c704fca68af"],["/tags/啞鳴/index.html","a2f0985e48da1de36137337f1a505a06"],["/tags/喜劇/index.html","1408af4a4d0f3f21f6c0164c96a083c4"],["/tags/夢想/index.html","8cfbc6d1214f239ce849308e8ee313bb"],["/tags/天澤夏月/index.html","abb01f55d923a4b1a6e51d266f4682d3"],["/tags/學習/index.html","512d6a0678f4e63c183273171ae281ab"],["/tags/學習/page/2/index.html","5e76d2892e1e4ba67026d8b697083647"],["/tags/宮崎駿/index.html","dc4f24a0264bbc8ae8ac75da387db9d6"],["/tags/小說/index.html","14080b8cf9af92eed6d55937d0e95586"],["/tags/小說/page/2/index.html","93f9eb38c6615946e7afe393ba0d06f4"],["/tags/小說/page/3/index.html","da6472340ea2e6b0b6905b3299a3fd23"],["/tags/小說/page/4/index.html","1589dfe614cda2d3d0317dae208985b5"],["/tags/小說/page/5/index.html","fea87f74e40395a56eb70e0bcad214e8"],["/tags/小說/page/6/index.html","03e034c642bf4fb5d8e72fd88fe5bafe"],["/tags/小說/page/7/index.html","27211d4d5bbbc9a3ff5035bb515d5ae2"],["/tags/平淡生活/index.html","b4881154275ff1b5faa407fd67b8f3df"],["/tags/幸福/index.html","28048626abedf99ea8d86dae3585a00c"],["/tags/志茂文彥/index.html","d0bf0b2a8d23af8ac4068d827b684c95"],["/tags/愛情/index.html","ad737ac6b30a6fd585dcc80c627807fb"],["/tags/愛情/page/2/index.html","d4516f51a752a79d1cf921d77b49320b"],["/tags/愛情/page/3/index.html","aabefe07df08aae2401a25aa33c35ad5"],["/tags/感動/index.html","920c2b00237c4e503e7a47cf1386a331"],["/tags/懸疑/index.html","10d336a0129ed60e0abb472cf4e1f63a"],["/tags/懸疑科幻/index.html","fcaca8c48ad2eb25f86d03e5b20d436a"],["/tags/戀愛/index.html","6e9605cb0420b684a922694867ffffa4"],["/tags/成長/index.html","3e483ff787161dba164e0bd5664386e5"],["/tags/成長/page/2/index.html","a9c70614122d5f786bfcd58908b1721d"],["/tags/戰爭/index.html","30d7518dc7f62096b836b5fad4fda390"],["/tags/推理/index.html","5b230d77fdefa20e0d2f7d06fc5d76fc"],["/tags/搞笑/index.html","ef47a986ab547bec96a458a7767f78dc"],["/tags/救贖/index.html","5ffd6e32a7d346cd971b6c94119ce383"],["/tags/斜線堂有紀/index.html","56ed68b5ee6dd2f63e249018d23f7eb5"],["/tags/日常/index.html","6bb357bdb168e1b108893d6f674a0a1f"],["/tags/末日/index.html","2bd1b41d22489033f485f928ec672e31"],["/tags/校園/index.html","417650785075e0a56b05acf91375beb2"],["/tags/武俠/index.html","6876ddf709751bdd193bbb8cfe7e692b"],["/tags/武俠言情/index.html","ce87d3dc4aeb87ec486efdfc4952959c"],["/tags/漫畫/index.html","9768aac9850426759081f11c80e216c6"],["/tags/生命/index.html","924f7da7e7cb1d85b907b69ce3ed1a20"],["/tags/生命/page/2/index.html","9b3b6ed6e2822d1face8777f56195722"],["/tags/短篇/index.html","b9f0866fd08c4e4772b5b3b4fb895e6f"],["/tags/社會/index.html","b984fd73109e8340cab8f7ac592f22a9"],["/tags/科幻/index.html","b924cc1476cee9c4605c634a96136a28"],["/tags/童話/index.html","2afacfb113d04172db1186a3509eeb5e"],["/tags/競爭/index.html","d42633ffb0d1c4f05b3c612c8d9cb8c1"],["/tags/自我/index.html","1f8cf1fecf185dc6bff7d6a0a56e7527"],["/tags/自我認知/index.html","bcc120875192817e0e12b74b29bab722"],["/tags/葦舟ナツ/index.html","e522e25374e45e8b6a85ea5b6d231baf"],["/tags/藤萬留/index.html","583e0d50125c4da201929ded0f40b66d"],["/tags/親情/index.html","d3c615873586e07231d3cf29a8893171"],["/tags/雜項/index.html","cd62e728d452b8a6fa0e4a126639e1e4"],["/tags/電影/index.html","155781840af7ec486094dc1b9438d8bc"],["/tags/電影/page/2/index.html","f6e679b722f7872be2f3b017504df2ed"],["/tags/霸凌/index.html","e37b006fe929999f9385fe8f2323bbab"],["/tags/青春/index.html","75180e8e69c8fb0b13b60256961e62d9"]];
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
