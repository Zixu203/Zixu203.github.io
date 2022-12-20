/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","cc2c1bf88d93919cbd67bc53a7f9cd1d"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","ddc56d4fcd6837b0b9828dae16400294"],["/2019/12/25/Review/無法計算的青春/index.html","054a9e4347c7f9613681fda3209f0c5c"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","0c5d11324d3d97f8b1927ab4bc54a90e"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","7d64db063bceb074d513c213c9dcc3c1"],["/2020/01/19/Review/下雨天，不上學/index.html","f5aa6d68d3c6154ba09f814616005adc"],["/2020/01/26/Review/三日間的幸福/index.html","0d2b6b79700b862b66f3bb038438d5a9"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","6b373f1b745df792172cf8692d8bd1c7"],["/2020/02/09/Review/青春期超感應/index.html","de8d7fd755ba0c456910aae73755d0d7"],["/2020/02/15/Review/又做了，相同的夢/index.html","c3109e4fdc6ea7ce16595726d8f51e4d"],["/2020/02/22/Review/回憶當鋪/index.html","fe86182a0655adf9adef4be14179cb8e"],["/2020/03/22/Review/不適合自殺的季節/index.html","734d9c836881650ecfecde6f011efa8e"],["/2020/04/26/Review/我們都無法成為大人/index.html","57659b75ada8850a925c64e924f5c98d"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","e11217337a3848da5a8a8abe1857c245"],["/2020/05/17/Review/人間失格/index.html","efb3e89dd1af1908431852d30d3a6a07"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","769a4091727eb5304e48b81b171e532c"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","7dade8b9a729eeed1bc9d310aa49f797"],["/2020/08/01/Review/銀河鐵道之夜/index.html","27840ea0abea066b367ed90bc7d03fb4"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","9c1845dd15532a6e21ca2074fd2a5b5f"],["/2020/08/16/Review/15歲的恐怖分子/index.html","e8db9589e9c211ea82548511cce07fb6"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","93ce70ca53abf40ede18f65483672b44"],["/2020/09/13/Review/羅生門/index.html","b343fd65f313907d4731480c91853fec"],["/2020/09/20/Review/闇夜的怪物/index.html","e31053e93fd22a1e3bf6461c3e849846"],["/2020/09/27/Review/14歲，明日的課表/index.html","043337c0b2b3ada776b92bf6578313f0"],["/2020/10/04/Review/致十年後的你/index.html","1cd239f8ac78948319a5f00b317f7a91"],["/2020/11/08/Review/滅絕之園/index.html","46d0b64bc7ccf21c17d5c116e872d3f1"],["/2020/11/15/Review/將愛拒於門外/index.html","b5e266357b351572ed11392204a939b6"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","3e5a6681e4f87bf24d799d7931b15168"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","f3f32042adb30f9ac1d62742849724e4"],["/2021/04/22/Review/道印/index.html","3dd053be3401c7ede4886781cb94e38b"],["/2021/05/03/Review/戀入膏肓/index.html","763baadcfaf7a889052279e1c6b0cc13"],["/2021/05/10/Review/Dice/index.html","5966ab66654f6be6234ef42ea372f651"],["/2021/05/15/Review/魔女之旅/index.html","cae23829de386e5f54d7d0ca6622fc9b"],["/2021/05/28/Review/戀愛寄生蟲/index.html","c28cbf4562cf909afcbec657cfd08320"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","bb464555a59d6e463b5d61a931b624f9"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","e65dcc7dd36bd1bdb3f0fc95fef4e49c"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","7bd29d749b6cb8fb28d9b1d6be50b577"],["/2021/06/05/Review/流浪的月/index.html","fdd7fa65ab2337aa0ea48979b243f36c"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","e25514f55dd04f282704f4907796b9ef"],["/2021/06/13/Review/第一人稱單數/index.html","34459918ae852a31c5e2fa3c7659b594"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","0489804d5cbded22cdc1842bf9fb2bfa"],["/2021/06/16/Review/願你幸福/index.html","b381fd9f7d0303d6a7a20435802e853d"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","aeccae8acb5dec6885be64f8ae382c21"],["/2021/06/21/Review/神隱少女/index.html","b770ef0a3805ae2c174a4211f0055b72"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","590b5c33b2ca5847fb1a4163ce0bae00"],["/2021/06/23/Review/天空之城/index.html","d800361606c4e3b77ec51aa7ff1f26a9"],["/2021/06/24/Review/魔女宅急便/index.html","f68d558fa9f1db42b729eafbaca3a47b"],["/2021/06/25/Review/借物少女艾利緹/index.html","64e926d983fea69cbf866f959cc1ee97"],["/2021/06/26/Review/魔法公主/index.html","22da5e7f3a5779d427ec8e47b610cec8"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","f2e8a1156389d3257c208e09a7bf1b3a"],["/2021/07/04/Review/飛雪與劍/index.html","2078cfa6d196e6f720c36851906d7824"],["/2021/07/09/Review/地球防衛少年/index.html","862ee35a06d56a44bfeeb7c9daa1c2ff"],["/2021/07/12/Review/Angel Beats!/index.html","bbc369f4a50b77104d69ac0edd77c771"],["/2021/07/13/Review/Clannad/index.html","10df9bb73d5bfa2fc197bcf89058b552"],["/2021/07/15/Review/AIR/index.html","4d837299b33e8ed2960be5cc023f1cd4"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","67cd65c64d55b92927c1453e86a5d078"],["/2021/07/15/Review/螢火之森/index.html","544a96461520bf326a29880dd9e4ceb8"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","819561749c00e6591872318f7491c276"],["/2021/07/17/Review/奇蛋物語/index.html","0a8e9db32568920fcb47a3ab777b246d"],["/2021/07/18/Review/Vivy/index.html","7581d0af382b0a477aa334669d02d13e"],["/2021/07/18/Review/請妳消失吧/index.html","e1cb09811878ae063b43374b563e6602"],["/2021/07/19/Review/漣漪的夜晚/index.html","fcfd15b0c05e1deae6d0385e99948632"],["/2021/07/20/Review/月色真美/index.html","cb4ccd81ff9d0d68143b68ec9d6504ce"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","b8fa56d7334d05b265d8b31873f941dd"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ecb63fff872baed3cfd3637de1961255"],["/2021/07/22/Review/罪惡王冠/index.html","81e2948c407dc5b126c45d0b9b6d556b"],["/2021/07/23/Review/弱角友崎同學/index.html","417c60486830758ee8fab5179bf13303"],["/2021/07/23/Review/惡之教程/index.html","ab976adbb47c13e3a90c368b98e16c3f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","4e1591874770893a89520da9a37a7290"],["/2021/07/25/Review/魔王勇者/index.html","0c81c2d8e8dc7b53987bcc2fe42097ea"],["/2021/07/27/Review/一年A班的怪物/index.html","48f7007c9cbfe4f42deec96886328340"],["/2021/07/27/Review/奇巧計程車/index.html","1987f497b6a76ecf4090410f97e33158"],["/2021/07/27/Review/專情的碧池學妹/index.html","272914301ea5705b6d409926b3ace2d7"],["/2021/07/29/Review/只有我不存在的城市/index.html","6220e9372cf86e18e3fdf259ff8219d2"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","588a06b90704bc43f2af9fe7d6ce087f"],["/2021/07/30/Review/可塑性記憶/index.html","a8f4aff25d898de7a58edc3001235649"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","ddfe657a4925cc4a6e23e09f7c027e49"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","102393d93f90be4b87e3d29ce3d4034c"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","a9d85fa2ac03fc2f05d6f87aad8a7301"],["/2021/08/25/Review/清戀/index.html","b72362b6759a5d1a58ec2a2563cf7548"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","5dfc51aa02ae9d0400419c883e1c36b2"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","798226f883c4ff64b10390acdaae3ed2"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ab39ab0e074d1944865f6680d9dfc6de"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","311d07e29f65a1ae495ed93caf49d1aa"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","13fd2c9c96df8d568cd2fa74b0d9d81d"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","047fead4327bb944e480462ca28bfd8b"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","5f75a6eacbddae4d72f88512a83015d2"],["/2021/10/16/Review/龍與雀斑公主/index.html","46e73b0efc357755532109af46612543"],["/2021/10/19/Review/孤狼不想開後宮/index.html","e1745d9f5b66aa674f8ba618707efd4c"],["/2021/11/13/Review/徹夜之歌/index.html","1774710dba630b1749410287b7643f40"],["/2021/11/24/Review/武煉巔峰/index.html","d320b0dd164ce5dc01675a74f481de2c"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","997701392af4c049e11a8323889718c4"],["/2022/01/28/Review/神醫凰后/index.html","920c894542226e6043cc5bfec473afe1"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","b771c0f7c8f23f3fbf89b0c91c65d96c"],["/2022/02/13/Review/夏日幽靈/index.html","91657a729e3b756efae32866bcebd250"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","727a474a4de2e6089917cf494e5a81ae"],["/2022/02/26/Review/賽馬娘/index.html","b38932ad1139d3875e96dd6111e2e8cb"],["/2022/02/27/Review/大欺詐師/index.html","b518b2458a3f016407b09605ffb09a91"],["/2022/02/28/Review/前輩有夠煩/index.html","359bfba6524f8612cb48f626e94b614c"],["/2022/02/28/Review/碧藍之海/index.html","a67e83d4bc69603f53930060019bdab2"],["/2022/03/05/Review/落第騎士英雄譚/index.html","802a04f93697a0f67db37595276b01f2"],["/2022/03/06/Review/Another/index.html","872e11f1f902c5cace61f01931a251fc"],["/2022/03/06/Review/入間同學入魔了/index.html","b29df22c1953e42242831ddfd823c70e"],["/2022/03/18/Review/再見宣言/index.html","a85b48edc401dea73e16a1352da92203"],["/2022/03/23/Review/生若冬花的妳/index.html","ae20ab5664010e48a24ed78a4081f1c4"],["/2022/03/25/Review/天之弱/index.html","f646bb6381da7cb938002cd3c0008c49"],["/2022/03/31/Review/滅了天道之後轉生/index.html","639f846d5f1c29e73ce709a3d7307ab8"],["/2022/04/30/Review/泡泡/index.html","5de9de593400e3976299c14bc643e172"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","46929728e499fd8cb00de7b037bfceaa"],["/2022/06/13/Review/偵探已經，死了/index.html","acb3d1f8ff952872dc3807e09b9439a6"],["/2022/06/14/Review/黑色子彈/index.html","32ce0d5f267ecd6d8ccb07db16fc6728"],["/2022/06/15/Review/黑白來看守所/index.html","4c11946fc08b387e2b13dc84ee50faf2"],["/2022/06/16/Review/虛構推理/index.html","8914aebcb3486d6a0790b6ad0222dd3e"],["/2022/06/17/Review/戀愛與謊言/index.html","a39919968266f238d1734b36a5bd9e24"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","ca7aedf14f0e063ca45b58b5cc9983a7"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","65d001a7c5c9b4246098171692cfd8ad"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","aafc7c60c7790a61e4367e873fa913ae"],["/2022/07/03/Review/Hello World/index.html","5813e0a0668b034534199393d5239f08"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","dffccb74c096d990659ca61176e346c9"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","56ef94ddefe38ea12f9e59aaa9e34d48"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","aa4cd492e9070cf42a6c9f0f766f0b95"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","ac33b856aede853981359a8cf5b0c19f"],["/2022/07/16/Japanese/動詞分類/index.html","282b8ca468e43c2d1cee59b4a213693a"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","3104f1720a66da48179347d36d08a3d6"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","ca7f510bed4b67f4a3f5fd19d76cc421"],["/2022/07/17/Japanese/音便/index.html","6b0608f965910df699109665dc07c1f8"],["/2022/07/18/Japanese/動詞 時態變化/index.html","5b459ffe291eb78ca802e4b739896a11"],["/2022/07/19/Japanese/助詞用法整理1/index.html","19ed1582919ecc1534d97145a2cb7adc"],["/2022/07/26/Japanese/助詞用法整理2/index.html","a3354dc1d6eaeebcb9484ed1158d5fa2"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","bf1b64313ef9e83d632c5d0ee0bc3132"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","745cc196734b59db1fb403f42e7df884"],["/2022/07/30/Japanese/疑問詞/index.html","b477210066d74817dc8fb8827868b5ac"],["/2022/07/31/Japanese/助詞用法整理3/index.html","5475490632f5aafefe10233e342f7766"],["/2022/08/02/Japanese/副詞整理/index.html","6a5fadb4648c40e114a9e1762ab0aa4b"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","09a62c66f07ff4ae7c14cfc2f6660418"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","6ddc70c54df44245cd2aec69eda4da1e"],["/2022/11/22/Review/組長女兒與保姆/index.html","9ce14c6fa50399ac4c252e0bec0f7aae"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","6e9fbf779fc0431ee5a077a26740031c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","6679202e3bf5b3d2aa3938e0018ef1c5"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","8f71425d2580e9c4cad43eee92dafcb8"],["/404.html","0143ca2e195e665b978cf57c0a840a00"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0d219d150907b979beb6ccb797f4af3d"],["/archives/2019/11/index.html","754a675472e51c6738649c5d9907c1a8"],["/archives/2019/12/index.html","8c8c30bbffebbffab0db0a4c8b728c4c"],["/archives/2019/index.html","524324a299bef4cc880dafdb8c20af35"],["/archives/2020/01/index.html","7a1ba23a97aa35044a7b95be5212d69f"],["/archives/2020/02/index.html","b07b5afce008e08a1e862bc25ddef172"],["/archives/2020/03/index.html","4fe55a99a4cac861448a90981e72bcf0"],["/archives/2020/04/index.html","fdf4152e05553ed078710c24c3f2516a"],["/archives/2020/05/index.html","f568836e6dc3045e7e819844ae6272e7"],["/archives/2020/07/index.html","db0e3d51f02df8eb94c12c30cc0bd6fc"],["/archives/2020/08/index.html","596eaf612391317263c014c179c60bbc"],["/archives/2020/09/index.html","91f6854bfac657cacd835486681e4438"],["/archives/2020/10/index.html","e31811f69d33eda84925e2dd3393968a"],["/archives/2020/11/index.html","986b373e16fa05ab2250aea5fdffbf28"],["/archives/2020/12/index.html","a3a67be4d740ebc493ff3c1a9b27f6ca"],["/archives/2020/index.html","87a49c915f3557f053b4efe0c1d99e42"],["/archives/2020/page/2/index.html","e8af4b20d8f1c382df92691175f89707"],["/archives/2020/page/3/index.html","e3d12da5e19421a9c5f99ac66a02dbd1"],["/archives/2021/04/index.html","1afd1fdda3b55e2389581e743c8adee4"],["/archives/2021/05/index.html","80cd9c90af5744e320e0e4cea81f7a9e"],["/archives/2021/06/index.html","41715cdb94b1c8500bb37bff33b421ce"],["/archives/2021/06/page/2/index.html","7c36dcab7eca581f4f5ba86d743c8208"],["/archives/2021/07/index.html","9a23351997a2da930b6fb31d088ba312"],["/archives/2021/07/page/2/index.html","3ed59580823bf9d521d789044c9b0b1d"],["/archives/2021/07/page/3/index.html","8e030a4efdf2a98071672c52b4e383b9"],["/archives/2021/08/index.html","9ec88ca111e11b8c4dcdd272fd96ad68"],["/archives/2021/09/index.html","63a24991ddfb727cb9b4bf361ef5d6af"],["/archives/2021/10/index.html","504c8ba3c6c590397203bb13e112db8e"],["/archives/2021/11/index.html","0a14e538e7877cfd1310b52f1a075fae"],["/archives/2021/12/index.html","d5952092c01348a15de35358bac59186"],["/archives/2021/index.html","ee1cc920a54e58895f457e2bcf0362b8"],["/archives/2021/page/2/index.html","8e79e8e92a7a4b24599157a356868b62"],["/archives/2021/page/3/index.html","579ed5519a3fafc53eaa8c0f1abd1950"],["/archives/2021/page/4/index.html","f5db06f1c9bf352eddc056ec678aaca0"],["/archives/2021/page/5/index.html","7a7534eda6ecd40f1aa179b87c7ab41f"],["/archives/2021/page/6/index.html","7e714be6a1d1dc9bdded0272fed78b39"],["/archives/2021/page/7/index.html","a457be71970b580b720cad642e9272c5"],["/archives/2022/01/index.html","4f1a74f616de805bf7b3a7ec19de3eae"],["/archives/2022/02/index.html","bd971192545005c528eb5601cb86e8ca"],["/archives/2022/03/index.html","9d0640750e376cfbe1c7bd72ae3dfd9b"],["/archives/2022/04/index.html","213b4d8f1192b464da7f63cd8d81c6f9"],["/archives/2022/05/index.html","ea370310a39f67c90d73a09e467c3e05"],["/archives/2022/06/index.html","cf1e17d5ed339bac40d992e2cfd0abca"],["/archives/2022/07/index.html","26b789d6c4ffd489c91d72f7689a9a88"],["/archives/2022/07/page/2/index.html","d9bf46cbd76a4e68cd9e990d63366946"],["/archives/2022/08/index.html","efbb4658295d153e50779d7aaf422ab4"],["/archives/2022/11/index.html","0b3add986fe8ab04ff171d2ceb0536fd"],["/archives/2022/12/index.html","19cc3f35f43988d37cf0382c3244972d"],["/archives/2022/index.html","7e44a658b69db132f06dfa5347bff017"],["/archives/2022/page/2/index.html","cc240d88f37a093d217798975b79c53b"],["/archives/2022/page/3/index.html","c436cb1c303b64398e1884d5d6eb3c78"],["/archives/2022/page/4/index.html","5f0e050f0a0c097ae0c99c4ebba1455f"],["/archives/2022/page/5/index.html","25e61b2c556e3043c2bc8bf8cd329727"],["/archives/index.html","595d058177fec5a497275e395b0bfae9"],["/archives/page/10/index.html","3cce08fb652f1273d512d4583a66ba46"],["/archives/page/11/index.html","3637124ac6c8af23a6c232ffa28ec190"],["/archives/page/12/index.html","9435f3aad455a934b5f8cd6ccd1dd7a9"],["/archives/page/13/index.html","acc01708c918a604593acbcfcd46326e"],["/archives/page/14/index.html","e11a2a5c3608b776b27cf10dc82c9e79"],["/archives/page/15/index.html","bfae5be7be1df796b0b2eeb49550a562"],["/archives/page/2/index.html","3ab566dcb5923e084e1e969f7a3cdc9b"],["/archives/page/3/index.html","71265d50e5ee04c4bff32f244ea11b87"],["/archives/page/4/index.html","47fc30977f527fc5a8766f1434cd6a36"],["/archives/page/5/index.html","0d2bff8ad45bef9ffad85648ece91562"],["/archives/page/6/index.html","87fcac841633e76daee725bc6fe4ed06"],["/archives/page/7/index.html","93f6ef45fb32cadfeb428c33783a0751"],["/archives/page/8/index.html","e1da8f4499a61ee0a18dfefc879620a8"],["/archives/page/9/index.html","44b774df44d3f111f3ec2f15d768eea8"],["/categories/Programming/index.html","9064329ee1a6c6d529598f8b7caed794"],["/categories/Review/index.html","dfb2d1197f9162a09f4b590cd7591c3b"],["/categories/Review/page/10/index.html","e4adf7d90895a233dfc3f487cbb9acbb"],["/categories/Review/page/11/index.html","584e3a8704b43b4d94de30e85f436057"],["/categories/Review/page/12/index.html","7c5bbbb4704e1d1e2f223041beb31cee"],["/categories/Review/page/13/index.html","f9d25faca52f922002b52d40c0eb6a56"],["/categories/Review/page/2/index.html","7f88c6c042e242bb51c3f94f9a275cb7"],["/categories/Review/page/3/index.html","033b45ceac41c34737d766ed76c5a53e"],["/categories/Review/page/4/index.html","3875838ab95564afd2fa0cdeafc64bad"],["/categories/Review/page/5/index.html","416786cdafa4025282d3617385257497"],["/categories/Review/page/6/index.html","26b3af60e886a0f152e00aa6ae232b3c"],["/categories/Review/page/7/index.html","f2de7923a49aaca56cde831b1aa2deda"],["/categories/Review/page/8/index.html","ffa2ac0058b2b227605274f08bf791a7"],["/categories/Review/page/9/index.html","5330e78c3b878738f0c2263c35086934"],["/categories/index.html","317ff1afad5862227ae2f4f22a38e54e"],["/categories/日本語/index.html","8ee1e0cab9639e55702cf7f0d56f61f0"],["/categories/日本語/page/2/index.html","802230b5c29122304e655b4cf0f6f673"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6f289a2ff0c889009867663f10ccdcf9"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","cbcc9eb3c1cf26cb04dc4a5e2ae386e1"],["/page/10/index.html","804e2e87d4077de4a8d2a48b811b0825"],["/page/11/index.html","02cfa7065a6f2bda6da6c546a0a53b24"],["/page/12/index.html","e4e26c863e80cecdcfcdcf53e948b126"],["/page/13/index.html","8470f89350d13f26f9a498d14d473b23"],["/page/14/index.html","fab194586f120288c27f23ab9efeaef2"],["/page/15/index.html","6eb7281e4d5b82aa2f2f9d124eb23c10"],["/page/2/index.html","70fe87352ce3b0268ccb2cef15949bc6"],["/page/3/index.html","9391a3efa564e77b9cf728a2de620039"],["/page/4/index.html","59fd777411ca44b768d9b4c04bcda4bf"],["/page/5/index.html","3dde04c777d725367314c39fb27b8f4e"],["/page/6/index.html","92231bf4de38ecc39d8f715caf95fd51"],["/page/7/index.html","086803eaec2b35a4368431d7bf6c8d5e"],["/page/8/index.html","ce032b235d0cc4168a990b5efeb84cc8"],["/page/9/index.html","99213a88f66399966f4475015169b201"],["/sw-register.js","094f1ea18469c4f010800067cc8fd3ef"],["/tags/10分作品/index.html","293800908e45a10af30ccdfba29bf78f"],["/tags/3分作品/index.html","c0aecb71dcbd4084fc5435ca7435a67f"],["/tags/4分作品/index.html","400e8451d918b1c12e8f6480d0339228"],["/tags/5分作品/index.html","4843164703fd5f50c67f4915dd01015c"],["/tags/6分作品/index.html","7794b69d34f021b5f8db20ecc4fff1a6"],["/tags/6分作品/page/2/index.html","62f9b56e90a0254b5824562ee7a3c6ef"],["/tags/6分作品/page/3/index.html","156efe79ff6799864eb307086d4d1351"],["/tags/7分作品/index.html","24699c8345faf424d1051b9d74cc5a16"],["/tags/7分作品/page/2/index.html","7b95c1c12a21e205fda94c0fb74d40cc"],["/tags/7分作品/page/3/index.html","7b8fcee06d24c1375fff43f9c08d7ced"],["/tags/7分作品/page/4/index.html","e9da6f13ee95618cb83c13c17416e698"],["/tags/8分作品/index.html","2c049d47c3321ac98b455e517dbfb174"],["/tags/8分作品/page/2/index.html","89e0f7b047879a5ff4b36cf0ec7933a2"],["/tags/8分作品/page/3/index.html","2b744f62f6452f6d0178bcefdb555665"],["/tags/8分作品/page/4/index.html","c1059972f3df186aaf87bd3f65e6a10f"],["/tags/8分作品/page/5/index.html","54f836e5cfd8468b7e91d539f5776cc2"],["/tags/9分作品/index.html","c7d4dbce41879892ad7da9b394f25bd9"],["/tags/N5難度/index.html","f60201eb16a64cda44b021e616caa116"],["/tags/N5難度/page/2/index.html","05c22e4fd67154aeb8547f43b9356f0e"],["/tags/index.html","9292c3c4ddd982e2f717ca9fa837520d"],["/tags/アボガド６/index.html","4af835e3ab759d797dff4f3477fbc531"],["/tags/三秋縋/index.html","013191a915985a0daf8765fcb02b1e29"],["/tags/中國武俠/index.html","2bf7c43d0600f379fe9c9d30d96866bb"],["/tags/中國言情/index.html","b4e57993cc24e70648bc82591878825d"],["/tags/二宮敦人/index.html","39d401201b7ba0f7fa6db05ff8300419"],["/tags/人性/index.html","e12b4e7c15c40a332823637862fb415a"],["/tags/人際/index.html","12b1ee35c351e0883b0c84ba225d2354"],["/tags/住野夜/index.html","f23a9499769caef266c9084add225fcb"],["/tags/佐野徹夜/index.html","088c0bbf0a34ad091cb614ac12e27540"],["/tags/努力/index.html","a6b66b84eeb6ec71f513d813cd50dd2d"],["/tags/動畫/index.html","746e13a33c80619445cd6a54bbe85196"],["/tags/動畫/page/2/index.html","4f9ba1c1ec6246acef9790e3f4914ecb"],["/tags/動畫/page/3/index.html","333ae092404f6659df00f9af00a41300"],["/tags/動畫/page/4/index.html","9b8e244753e7511e4ac41a2a07483d02"],["/tags/原諒/index.html","06997a125cdea80af01b61f65dcb80b4"],["/tags/反烏托邦/index.html","e5b3bac7b6b47e76cbf87ca48188770e"],["/tags/啞鳴/index.html","c608c14f778780427cb8a89a55edf1d6"],["/tags/喜劇/index.html","23b5916d61538e0a39cb5add1cdafa92"],["/tags/夢想/index.html","ae47a13f065aca46ba183fb340d51045"],["/tags/天澤夏月/index.html","3400cabb75fd0d423313fd9119745809"],["/tags/學習/index.html","49e90689dbf5d09bee4ee4ab00bd3c9e"],["/tags/學習/page/2/index.html","86a6522331495bba128bdaeb06f635e6"],["/tags/宮崎駿/index.html","52ccd75339c1041211bd25e516e4cb69"],["/tags/小說/index.html","899d07d9d90661d7ef6921110dae061c"],["/tags/小說/page/2/index.html","e0320f310da9e104bc8173a2501ddef2"],["/tags/小說/page/3/index.html","ea9598144e0c8cff691ffcc67deaa3fe"],["/tags/小說/page/4/index.html","a9a88d5f3bcf1bea1d275563eb963baa"],["/tags/小說/page/5/index.html","a969d01b5a35d734868e43e67b7ed5f0"],["/tags/小說/page/6/index.html","916fbf2b9a42fd0085f0525663fd7b6e"],["/tags/小說/page/7/index.html","bad5ffd39db8c40d8d155077b4df35fc"],["/tags/平淡生活/index.html","1792af637cc403f1784654df55203f4c"],["/tags/幸福/index.html","0b3f2da5ad4b7c23c2bf7e820f14b149"],["/tags/志茂文彥/index.html","eae5814c642f439e2744083d3356040a"],["/tags/愛情/index.html","4358fa791893cb3e2392eee59cc84569"],["/tags/愛情/page/2/index.html","d252d5b6c096bc1b4f5c68c0665bb54b"],["/tags/愛情/page/3/index.html","ad83b57d97564e643e14428a70142cd6"],["/tags/感動/index.html","479b4878478fbf0d27bc8bdaec6d100a"],["/tags/懸疑/index.html","60e8a48c01834141f623a6192cc304e6"],["/tags/懸疑科幻/index.html","969ff44ab06911cf8544be2cf327e2be"],["/tags/戀愛/index.html","600f8d382b6dc0977ef5e5c9fcf55b8d"],["/tags/成長/index.html","85e3e129cf5d5ea6a820dbd8cf9a0a02"],["/tags/成長/page/2/index.html","a5c3791160a0f3adc402441dc799a0ac"],["/tags/戰爭/index.html","d2c478f86407796be9f1d6563a24f473"],["/tags/推理/index.html","8000a6daea217e759975ecc97586aa22"],["/tags/搞笑/index.html","0094f4ec4ae130ff3867602a06f3b87d"],["/tags/救贖/index.html","947e10db4b8759c2d607a54c7d49e142"],["/tags/斜線堂有紀/index.html","856dcdeb5c79eeb445dd3f7b36640a83"],["/tags/日常/index.html","16a45cb11392e82f9bbd6c40c79fdbe2"],["/tags/末日/index.html","f0f458ca7a2251627f666d65538bcdd8"],["/tags/校園/index.html","3e179f79c9684f137bc71ccf124075e2"],["/tags/武俠/index.html","e329c302535d1cf1b4f8c32b45b31b9b"],["/tags/武俠言情/index.html","a5d9fb2abd8c3dbdf7a2c3d7dddb1e1e"],["/tags/漫畫/index.html","e786742b253ecfd291a68028b8000a5b"],["/tags/生命/index.html","53d4b1c6710284a7748f7fea5c1d662b"],["/tags/生命/page/2/index.html","0a23948f4850776b034346a1401fa74a"],["/tags/短篇/index.html","76e61bbc24c7427978040cd28a741d4e"],["/tags/社會/index.html","434e635f5690863e004f681ef4cf384c"],["/tags/科幻/index.html","df8bd00452fe68c3bdcd4d227302c71d"],["/tags/童話/index.html","275a2125ca73d483005e168dc74ef770"],["/tags/競爭/index.html","76085483a342dac671c340d71d2bda5b"],["/tags/自我/index.html","d7cad6ff032ae02a01e1f057486eaea8"],["/tags/自我認知/index.html","b0b1d7aeeac4fa4ded3c5c76ec98fbd3"],["/tags/葦舟ナツ/index.html","7832a83579b3b13ac669c2367f3d1aa5"],["/tags/藤萬留/index.html","13eee592f278d9641d75abe9228e0fee"],["/tags/親情/index.html","e51df31fc941a9b8c2a6256890ecc3b0"],["/tags/雜項/index.html","03984c4b761cb67e2a549e3d19e83d94"],["/tags/電影/index.html","10bb88b335f555922267d2ae2ac3c6b2"],["/tags/電影/page/2/index.html","430971fba45627c525fe6d1a86c32f5e"],["/tags/霸凌/index.html","83f4b90c561882509f17cbba326996b7"],["/tags/青春/index.html","00d75525ac16814f1986a4b41777eaa8"]];
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
