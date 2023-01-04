/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","a740cc405f776d260abbc37e6d123b73"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","3fac4c3cca8b8cba7e62a9de5b60fbef"],["/2019/12/25/Review/無法計算的青春/index.html","6313033fff5825709e19d25ec4e1748a"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","810da5777efb2032540e314dcd2835ff"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","e3e3a9c56c11f6a00724f08bd963651d"],["/2020/01/19/Review/下雨天，不上學/index.html","de85ea40f1a16d6a8d6d732766a2f07c"],["/2020/01/26/Review/三日間的幸福/index.html","1de549d63925b8a3a0937f89c15bb05a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","7381c03a7c75b55a438db66da5415183"],["/2020/02/09/Review/青春期超感應/index.html","4db25ffc39522c3921fc90a5f38aa81f"],["/2020/02/15/Review/又做了，相同的夢/index.html","ead8d382c6fd59d1b13371627872c5fb"],["/2020/02/22/Review/回憶當鋪/index.html","97b8fbd0803e80e43e7b8d1db57dfcdb"],["/2020/03/22/Review/不適合自殺的季節/index.html","901a8979617a6db6381c6a61e2b5c51e"],["/2020/04/26/Review/我們都無法成為大人/index.html","961aa55ad1d78186dcd6410d177deb93"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","ddc4ab635cd01942c8698353ae8ac8bb"],["/2020/05/17/Review/人間失格/index.html","b0a4993a4c3e151dd1d9be318076d231"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","7a90b4a5f1c6aef8cd90d932ce484467"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","ee9108d8e2519282f3445090c22935fb"],["/2020/08/01/Review/銀河鐵道之夜/index.html","c4b9c3f77d569e64e0b6a398e178205e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","09f60a33c5260b0102dd079827a727dd"],["/2020/08/16/Review/15歲的恐怖分子/index.html","20425f053ad7ec0ec639f32898751355"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","69a1e3c3666ec90823102d1fba33034f"],["/2020/09/13/Review/羅生門/index.html","d0bc57aeba8af4c70b34621fa44c55f8"],["/2020/09/20/Review/闇夜的怪物/index.html","67a58897467029b4778bd4e2bb0c9131"],["/2020/09/27/Review/14歲，明日的課表/index.html","0bb0b8759dc25b46fbeeac1323daf967"],["/2020/10/04/Review/致十年後的你/index.html","5b15a1f6a1c0616c3e09cd08b7a32657"],["/2020/11/08/Review/滅絕之園/index.html","4a939257818a774b899787e43c1f29c4"],["/2020/11/15/Review/將愛拒於門外/index.html","05e6e2cb310375726ca8f274165c30b9"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","8af925a5216e4edcea86f873788836b6"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","a84d0166448dd3227db792f864559115"],["/2021/04/22/Review/道印/index.html","5ec8993433e159ac88435cbbf95d02d0"],["/2021/05/03/Review/戀入膏肓/index.html","db620e88d79319f1139ed5bf4d623238"],["/2021/05/10/Review/Dice/index.html","decbf562e27d391baa4b916e965ad5e9"],["/2021/05/15/Review/魔女之旅/index.html","48eb8c83c8ce3b5ecdf5480d4804a70c"],["/2021/05/28/Review/戀愛寄生蟲/index.html","ec32c29d4427233295f138b2acb07441"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","e1b642baa3524ec1f8ef15a0534ad45c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","d2ef8673fa34876058adf371af04cbe3"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","e31729c3b1cfaa7e4e6db12cfc914629"],["/2021/06/05/Review/流浪的月/index.html","c7ccfbce32d487b167aa65dbb6f8df05"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","d46b9a1f67ed92f38bcf03173c37d93b"],["/2021/06/13/Review/第一人稱單數/index.html","773bbe2936078909ffee303d8f2ddb31"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","e2e189a287f3048ee84eb8405e5339b4"],["/2021/06/16/Review/願你幸福/index.html","c283c3b8268a6b2d13b953a7e941bafd"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","c52c8718d8e102a4cf6bb07863de54f1"],["/2021/06/21/Review/神隱少女/index.html","176c89ef9e62878613c5e10e64ca036f"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","343a651707c128c9980577e19d54748a"],["/2021/06/23/Review/天空之城/index.html","c9739220e737d369d2e0ac0ca77bc4bf"],["/2021/06/24/Review/魔女宅急便/index.html","21a61931e7b7252b2b50621052a38a31"],["/2021/06/25/Review/借物少女艾利緹/index.html","a2eaca9b641103f9ba07547122a1c618"],["/2021/06/26/Review/魔法公主/index.html","6028b4ba93c111786b64cba1b116d964"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","18423cad136bc5449b5b86f8567798b1"],["/2021/07/04/Review/飛雪與劍/index.html","781df25cca23c35941fe56fbf62fe09a"],["/2021/07/09/Review/地球防衛少年/index.html","317ce4c16a6a0acba398a92a5706e816"],["/2021/07/12/Review/Angel Beats!/index.html","99c402f57fa7a9e092d48903103e3726"],["/2021/07/13/Review/Clannad/index.html","b8d28108339bfd044e2d935133750481"],["/2021/07/15/Review/AIR/index.html","e060570ff06daaddc2af8cc66640b52c"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","2542dafb4a8290dbd9bb8263c5a0dad7"],["/2021/07/15/Review/螢火之森/index.html","a2f828c239235146fa20a9cb25adb47e"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","a8b495dfd624b43aceafc6ddcef0d2f3"],["/2021/07/17/Review/奇蛋物語/index.html","6a5dc3b1754743fd8a2796230fd83982"],["/2021/07/18/Review/Vivy/index.html","c6d2a40d4612cf7f2e1926527b08ea8f"],["/2021/07/18/Review/請妳消失吧/index.html","5fa644972ac6b94c726e18303c8f3073"],["/2021/07/19/Review/漣漪的夜晚/index.html","0ae18a4bf8dd9ccf6e8a58e8a3ce526c"],["/2021/07/20/Review/月色真美/index.html","098a50d57cb76ef714bd88f4710d6f00"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","ce3cac36df701901ea7ebbce9186205d"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","a4957b25d70104138477bb6e6cb0c30b"],["/2021/07/22/Review/罪惡王冠/index.html","1b7ddaa627693c425626fc2817296691"],["/2021/07/23/Review/弱角友崎同學/index.html","884d7708e88e1337a80e8a7b9203e1fa"],["/2021/07/23/Review/惡之教程/index.html","352f3bc8b4ae8e6ec4496a53d58bda12"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","99aac165d2ab63f8459f8e172eb83e0d"],["/2021/07/25/Review/魔王勇者/index.html","69dc00b0af5af1d81a9210f0d63b5583"],["/2021/07/27/Review/一年A班的怪物/index.html","2d7c090923c3223fe10862fe8dafbf93"],["/2021/07/27/Review/奇巧計程車/index.html","a5ee07bd79c39b072b81eea3476f5a61"],["/2021/07/27/Review/專情的碧池學妹/index.html","f3f3ff2e05d59c03a4932542a6c6668e"],["/2021/07/29/Review/只有我不存在的城市/index.html","7f7f103635dc82a3a21082ad9561611c"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","6205511901f206d2dc3b58064c8d15a5"],["/2021/07/30/Review/可塑性記憶/index.html","0fc48010c519958d738ee063033a9133"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","a2ffc15b05bc6ad82061d1df6062c015"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","284ee4d02aa51234004c3af6ab950e03"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","c242505fb3189f7c9d8e306cf37e7ad2"],["/2021/08/25/Review/清戀/index.html","d568a7d61a3a1b5a55cffdd895abb117"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","8e59484eb004df8b0d7f639da80f9b7c"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","a890028b2929e33fb4320e965d1dab5b"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ff2c19bb02dd629f9b1d3fbef557e33f"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","e6a51a60ddf2f2cdf7aabab13fb80d3a"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","46bed6caca6e2135cfcb4591a6895c17"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","178ac2963411b0981a14c3fedb97420e"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","d75426f228e94132cd5ee237e9bddc02"],["/2021/10/16/Review/龍與雀斑公主/index.html","7e34c53c7706f4ded25451ca8fe01dfb"],["/2021/10/19/Review/孤狼不想開後宮/index.html","e3419fae7cf8999e13b77d02f833055e"],["/2021/11/13/Review/徹夜之歌/index.html","f37199081ea86fbe0edb3c50fd129c75"],["/2021/11/24/Review/武煉巔峰/index.html","94e8067e5b9ecc56b1976744da8b1fa0"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","1a09c4bb1570efffc03d01b449d649cd"],["/2022/01/28/Review/神醫凰后/index.html","5232fd5925851cc6b78fa75cca90ddeb"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","55b4ce4c25db9e44635e1d51c231aea8"],["/2022/02/13/Review/夏日幽靈/index.html","1334613298164d691031b2698de60c7d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","2a72ad94e450902dae037aedd1d12645"],["/2022/02/26/Review/賽馬娘/index.html","26ffb7200119b27cb527daab908cc559"],["/2022/02/27/Review/大欺詐師/index.html","c6f1945b6079d5a8a722d4f0c6bac4f0"],["/2022/02/28/Review/前輩有夠煩/index.html","e4fdc55bcc3ed98069b12ddeb963ebd0"],["/2022/02/28/Review/碧藍之海/index.html","0042e44a9a141ac51d61d146e0e322c5"],["/2022/03/05/Review/落第騎士英雄譚/index.html","3a6750d7eb66d075946a56554ec8d57a"],["/2022/03/06/Review/Another/index.html","5724430af39890394dfe0b759487f583"],["/2022/03/06/Review/入間同學入魔了/index.html","dc9e4a9c3ba357c49049ed95740863cc"],["/2022/03/18/Review/再見宣言/index.html","abb6f89a4a45a6eb9687a1dcd8a53f6b"],["/2022/03/23/Review/生若冬花的妳/index.html","bd76ef562cea4c2bcdb1dd0ebc093952"],["/2022/03/25/Review/天之弱/index.html","336697a0a4f6763db59e1d124affb7d3"],["/2022/03/31/Review/滅了天道之後轉生/index.html","0328886eb901c7ba9bc937271be45606"],["/2022/04/30/Review/泡泡/index.html","057ebeb52d8f251f6050fbd97b857527"],["/2022/05/04/Programming/Dynamic Programming/index.html","bf0381ef63b360dbfe1dc4e761e4a85a"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","a5cd58a775aa3b9298b003ea83d91a44"],["/2022/06/13/Review/偵探已經，死了/index.html","30895330b022b29d4bb421dc65d10458"],["/2022/06/14/Review/黑色子彈/index.html","1bbf4e19b64f621346ade6ca4fb6b11d"],["/2022/06/15/Review/黑白來看守所/index.html","733632cfa7a41c35d0fe1077b12c8e93"],["/2022/06/16/Review/虛構推理/index.html","9cc259dbffc8d3ae9a0094d5ec24b6b7"],["/2022/06/17/Review/戀愛與謊言/index.html","d89362388fdefc2c19a4e123e046e813"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","eb26e05d6377a67b621789b8306618ff"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","113486d329633b41f559925c801255f1"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","042ffc578e22cc4570990cb624104ded"],["/2022/07/03/Review/Hello World/index.html","24c65f6605fbb41b1065aacce7146b62"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","5acb277a053f436a05cb4c15933271f5"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","0062f5c8cb57fd042fc3b3b3924e7c0a"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","29644ed0ad95d00eed58c7d69aa2dcb0"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","a8d1ecac5a5c24c2ddcb7a65ca4efead"],["/2022/07/16/Japanese/動詞分類/index.html","3e1edf733a13e19d1bc92e3cb2478383"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","0c21826912b2c1c659adbd6dcc671759"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","f296e2b51dcae1ccaa2dae66929a4994"],["/2022/07/17/Japanese/音便/index.html","c9906d0c92897505ae716a2b8e09f1bc"],["/2022/07/18/Japanese/動詞 時態變化/index.html","68eb966c9fa4de94ef049128256bca3c"],["/2022/07/19/Japanese/助詞用法整理1/index.html","fa559f09e45d25d8b82160e3da210d93"],["/2022/07/26/Japanese/助詞用法整理2/index.html","835cc82c59b87a04a07555ba6b43cd09"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","aa65aa5222a269ab668d8139fc165078"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","da48c8792061de62e307fdc31e043411"],["/2022/07/30/Japanese/疑問詞/index.html","f540409f8de8e166dbbe35c717e96270"],["/2022/07/31/Japanese/助詞用法整理3/index.html","5451940dca8ddb4a6eb1234cbccee5bc"],["/2022/08/02/Japanese/副詞整理/index.html","e83a63cb8da78413612e3ad004043197"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","47da2a4eb2b238d1abf4fb57bc7fb19a"],["/2022/11/04/Programming/Data Structure/index.html","701f050c64ff14b747056b241ed23ac3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","1ccb94736cc645e6fdf008353c6646eb"],["/2022/11/22/Review/組長女兒與保姆/index.html","248b69b32d06726cd399f19b1b8d7198"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","dd02e3e640819aa75c0a74a7b8090d0b"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","f14c4a0c1ff81f5f0e45ebff24885a38"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","330c188d16bc2934d52df8e4027e832c"],["/2023/01/01/Review/あの夏が飽和する/index.html","ace7c61d4359c77d52a980875a202cad"],["/2023/01/02/Review/孤獨搖滾/index.html","8f52597297733f9757b64157f89c1f38"],["/2023/01/03/Review/來自深淵/index.html","5c6e7706d7979c49db538743eae38d7a"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","edd66803a8841328a2a480c45e1a9b45"],["/404.html","cbdbc91c5b095c9d6a92f4ee59cf38e0"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","90d4bc476ab1d5f3b0f9204b312d83d7"],["/archives/2019/11/index.html","f9aa250865dcb5c88df9824d775745ab"],["/archives/2019/12/index.html","4d85e479e9e8b6651a1c327f886988c1"],["/archives/2019/index.html","4d866c38f7bac1def9ba698285d2e86b"],["/archives/2020/01/index.html","1f1eb2d37d37c217b2de1dde0ba7184c"],["/archives/2020/02/index.html","ce986ab7bb7c39f465ff9846dc48e06e"],["/archives/2020/03/index.html","8d2896722506534108a066462ad4c567"],["/archives/2020/04/index.html","bf9c2a3bc4ccffd8db100831e10e44bf"],["/archives/2020/05/index.html","abea0f5b0809c0fda573a4f2634885a1"],["/archives/2020/07/index.html","f3c805b5a30dbd650fcbe79245582ce2"],["/archives/2020/08/index.html","58016bf560808c3f1a5891435599886f"],["/archives/2020/09/index.html","89a54f111f8a6420fb32168ef6c0bc15"],["/archives/2020/10/index.html","55b6e18912a1d412f254e129c765dcac"],["/archives/2020/11/index.html","a0398004c2a46d5e348bfa34aac384ee"],["/archives/2020/12/index.html","627ea7e450c0b714777907a40fe2529f"],["/archives/2020/index.html","d62bc3fe9f2151dbfc3bf97a4a16ddcb"],["/archives/2020/page/2/index.html","7c2b78d0500d8d447c77ee263de68edc"],["/archives/2020/page/3/index.html","d4c48fb8529e17a6a0f54a76c66528ab"],["/archives/2021/04/index.html","c38579206fd7b2e0584ba91683f229dd"],["/archives/2021/05/index.html","b0df0e34e64fcddcdf9e0d532b3b072f"],["/archives/2021/06/index.html","3cb746e1c45d3ee55714c310fe0531c0"],["/archives/2021/06/page/2/index.html","98d7406a5215efe9126834644c70b166"],["/archives/2021/07/index.html","ec39074debfd85d6603f9cb64374e6e0"],["/archives/2021/07/page/2/index.html","4a2626ff2ca70c83b191deeff188544c"],["/archives/2021/07/page/3/index.html","d7138cecac351bcbbd18c973fb686723"],["/archives/2021/08/index.html","df026cddf9c17519587075c6271bb9fd"],["/archives/2021/09/index.html","d6099b56cb3c15bc29348aaa0775083c"],["/archives/2021/10/index.html","3fb951422f20b58dcee9be60ec69ec8a"],["/archives/2021/11/index.html","6b741f820557c30232d3f535ac9848b5"],["/archives/2021/12/index.html","fb2cdc4ae5ddf5dad5cf03a920c1235c"],["/archives/2021/index.html","b1d02c71a86728be5db928425427a224"],["/archives/2021/page/2/index.html","b25f968069cdf5f8ae19b6722e8afa82"],["/archives/2021/page/3/index.html","d9b426c350b8a7d0176a4396876f40be"],["/archives/2021/page/4/index.html","1dbd2974fcb7dd691439b49ac817559f"],["/archives/2021/page/5/index.html","e1c5e972a8ce2c47799f259fd623a280"],["/archives/2021/page/6/index.html","4a2705393ebd07b4bae47a3a76cbf55e"],["/archives/2021/page/7/index.html","ed4e6c40ea4fd64c11df56be51607114"],["/archives/2022/01/index.html","77cb248372ef251ab7b005c05fb5d399"],["/archives/2022/02/index.html","239c8b23d5482d886c801ec9a3fd0bcf"],["/archives/2022/03/index.html","ab99593f2b8028472424b65a5dfbe276"],["/archives/2022/04/index.html","48d7af53be3fe8fa2aa713616180eff5"],["/archives/2022/05/index.html","0731b6dc695811dce0ee689750d7bebe"],["/archives/2022/06/index.html","726c8050ac3f1e79f2580806e46efd37"],["/archives/2022/07/index.html","2ce78a9113d3a137e190121e26c38fe0"],["/archives/2022/07/page/2/index.html","c6b615e38608dfc113800a186faf3c92"],["/archives/2022/08/index.html","2f24ebe3e8c67c8fbdabae049281b634"],["/archives/2022/11/index.html","b5c1366597f097360f0b16c028a5f4c9"],["/archives/2022/12/index.html","222a225792600873d496efc1565015b5"],["/archives/2022/index.html","770de86a783b98bbc64b5553747ebe00"],["/archives/2022/page/2/index.html","2c0960239ffe302f66a2a5189e15bca5"],["/archives/2022/page/3/index.html","8b734df376a693376ec332be83ce912d"],["/archives/2022/page/4/index.html","b1cb6620255ce3b6448c2d5afc9c5e3a"],["/archives/2022/page/5/index.html","fab63fc7347d28fbb46444b31ad37260"],["/archives/2023/01/index.html","0dd769c562259caa786985dd937adf65"],["/archives/2023/index.html","5ee7c70374b6392f5f01e2ed0be2f32b"],["/archives/index.html","93f40165bab5c1e68b6c5c78c4e14c59"],["/archives/page/10/index.html","89307bd1c0f3f2a2fb9f3556694d6c19"],["/archives/page/11/index.html","a363fe2abf5f0617d0d85d7b151d00d6"],["/archives/page/12/index.html","a41a14868e785ede29592ef03988ec81"],["/archives/page/13/index.html","6b91c0b4542987816ce4258c865df207"],["/archives/page/14/index.html","e45bf198c86d982c34a80a448db43c60"],["/archives/page/15/index.html","3b878e3c61e8a322d29c360917fc87d6"],["/archives/page/2/index.html","513107dd9c0d736f7cd0451195e4132e"],["/archives/page/3/index.html","9f7dc3dec12a130982450232949fd600"],["/archives/page/4/index.html","e4929d6b155741cf4853ac1d4f2e3b82"],["/archives/page/5/index.html","186395177025c2d219a13299a501fbe3"],["/archives/page/6/index.html","e1a08561479463f7dc5e5af5f55c890c"],["/archives/page/7/index.html","5b9b182b351d280e4b0284b2e0dc37ba"],["/archives/page/8/index.html","5016ceff304579aa796f707e8819a6ea"],["/archives/page/9/index.html","d8612a14722ad9cb45afa97739cef2f4"],["/categories/Programming/index.html","b4be665c4415d80de7e1dc72b4f984c1"],["/categories/Review/index.html","f1edfb08527eca1a567558d31c846e4c"],["/categories/Review/page/10/index.html","5f7d7ab8f050650ecb2f414c353590bb"],["/categories/Review/page/11/index.html","015657226b8d2458b5a5974cf4e7dd55"],["/categories/Review/page/12/index.html","cd1f66df80c891385286da3631b26e75"],["/categories/Review/page/13/index.html","09afcf6ccf72e1bff2fb170fef58ead2"],["/categories/Review/page/2/index.html","6398116c10a5b046e16c094432b1a41e"],["/categories/Review/page/3/index.html","eb1a94b5409b9e0bf420a3c92db9f883"],["/categories/Review/page/4/index.html","059133eb9d55de0567923e6817161fc5"],["/categories/Review/page/5/index.html","dad1f9a41885bc62fe4f8ed68e6b4978"],["/categories/Review/page/6/index.html","2dda3c5d4735f99ccf25bfde6f1c4c7e"],["/categories/Review/page/7/index.html","d900a3702e340702f137640bfad7ae82"],["/categories/Review/page/8/index.html","c31af46b182cad8f066c43ee25002f51"],["/categories/Review/page/9/index.html","77d27eef9c58095183575370660f7bbd"],["/categories/index.html","af7b530d4dfa18a82dff95a581294b22"],["/categories/日本語/index.html","652e2d3ae53ca9677e14b70e75329043"],["/categories/日本語/page/2/index.html","756d36324b464ba891a95bde9227e1ee"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a3d4460ea094349fb4ca717c19113abe"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c75a6f46f7e1dfac876f426701baabca"],["/page/10/index.html","5da88252a16e75ae77af8ca6b8229943"],["/page/11/index.html","f162b642e5ab81e4249894fdd1435239"],["/page/12/index.html","5b866f3d0dd4fc90531f521a3ea0b434"],["/page/13/index.html","92e3704544789f535c77bb12d58fc843"],["/page/14/index.html","9e6745cf34715ff24ae8311ae4121012"],["/page/15/index.html","250454359859963d64283cdbea2e8267"],["/page/2/index.html","1f98e0bf4d4c48f390068441a3ca04c8"],["/page/3/index.html","65f5d78b28a458597d9aec8dcad3a83d"],["/page/4/index.html","bd6e18324d0cdfa6c15927efe74e5f20"],["/page/5/index.html","2eb6ad45b5550123755b22fdf12ff637"],["/page/6/index.html","ee84bf080e5f3b5f80ffe93f7fd32a22"],["/page/7/index.html","0537466deab40c4990024351d9d99893"],["/page/8/index.html","a135e54a014f5b55a8776f1bf0247865"],["/page/9/index.html","0ef23c044b3a2c717705a277426fc338"],["/sw-register.js","f8f34126eff1150c8bdb4bc55fb7fda4"],["/tags/10分作品/index.html","88f9209d4d720c96e53b465fefd35f3a"],["/tags/3分作品/index.html","ec88a7705a589b8716f232dbaefc324e"],["/tags/4分作品/index.html","a9c9b21f1dde02aace5ccb6f95dd7a91"],["/tags/5分作品/index.html","6cdfb2c3d001122c0e2926ae589c80de"],["/tags/6分作品/index.html","d218cc0ec8d0b35e6fc9d3b67dd36000"],["/tags/6分作品/page/2/index.html","64d0ae424367838f6d51b5615a91177a"],["/tags/6分作品/page/3/index.html","d4c3a1933011600f040dc1a37d4ad17b"],["/tags/7分作品/index.html","1d1b4ca7727395c2608039422fa45f8d"],["/tags/7分作品/page/2/index.html","d36c6f1b6694d503375f705777c430b1"],["/tags/7分作品/page/3/index.html","d59d22c985ad5f82de5cd03a13b62e63"],["/tags/7分作品/page/4/index.html","64be5f043b7aeaa2c9d74298b97484d1"],["/tags/8分作品/index.html","d445a368876b3e8dad4cee50f2ba786c"],["/tags/8分作品/page/2/index.html","155ae7c032da699588e9ca714c184841"],["/tags/8分作品/page/3/index.html","a8e28f7bafef712eaa5ce6a27b32d5e3"],["/tags/8分作品/page/4/index.html","51c413a159abb98dcce07d9e218da1a9"],["/tags/8分作品/page/5/index.html","f03e41b9607c7a3b06cbeccbeed84278"],["/tags/9分作品/index.html","385714a7fce6a11729bae33c23a3c85f"],["/tags/N5難度/index.html","c0bd1d36ecc708aaa34488efadb37c42"],["/tags/N5難度/page/2/index.html","62a96a9b4eae4c576de7e668d7be3b9a"],["/tags/index.html","1356b0a253d5f12145f3a6690e2534fc"],["/tags/アボガド６/index.html","c6ab208e165c43a2d66952c696f024af"],["/tags/三秋縋/index.html","61f186dd70156db0633bfd3cacbe7872"],["/tags/中國武俠/index.html","38d4940b09f017e3c29736a7f049ab3a"],["/tags/中國言情/index.html","e1b0889f799b4364766eba559282ae44"],["/tags/二宮敦人/index.html","d654811432af756967c92647fdc366dc"],["/tags/人性/index.html","4c3de3e1027b8477cf3288eee5c376ad"],["/tags/人際/index.html","0749415bb1e0e34311e2306cf3be0b0a"],["/tags/住野夜/index.html","1e0b2cf49856a7d7cc2e23b77befa63a"],["/tags/佐野徹夜/index.html","7f9f55c8dcbf4592fe0a97be40f89ac1"],["/tags/努力/index.html","9404714f4a1023e88f065c623879302a"],["/tags/動畫/index.html","f1ea1114c8a767b590ba00ebf5207bc4"],["/tags/動畫/page/2/index.html","e271de0f3d1ed7b83d69da967f8f6ac2"],["/tags/動畫/page/3/index.html","bb6b8a718eabfa8405289329ac3bf676"],["/tags/動畫/page/4/index.html","4d55bb25990366e551de29f7b9a16040"],["/tags/原諒/index.html","7d1122f02b73040a92f7754835442fdd"],["/tags/反烏托邦/index.html","a0071f41cbc54f3d73b42a22b3a3a7ad"],["/tags/啞鳴/index.html","29a705e34282f40e176d8af78135b0ee"],["/tags/喜劇/index.html","67f5fe0c2385444451e6a2f460b82e72"],["/tags/夢想/index.html","d81b5a5351bc595f0418275d376599d6"],["/tags/天澤夏月/index.html","d53181ee660b8ce1e5ed715b406391c3"],["/tags/奇幻/index.html","1c8f1c335954622b5a53dce5b62f5954"],["/tags/學習/index.html","f169d1b7b236f484da2d61dad327a23c"],["/tags/學習/page/2/index.html","15166967022346340fe0d0182758dc5e"],["/tags/宮崎駿/index.html","455eae4f442e21c03576df4e36ff1c5f"],["/tags/小說/index.html","d51ff31906ab2e5462ab02c1775e2ba3"],["/tags/小說/page/2/index.html","4ae4910c210307ae058244288eeca2d7"],["/tags/小說/page/3/index.html","df4071a6967940afbd0a9f814a14e83e"],["/tags/小說/page/4/index.html","c05cffc916103c4b98034081e4d46305"],["/tags/小說/page/5/index.html","445c1ce2638d091c3444b2835381b1f5"],["/tags/小說/page/6/index.html","2a858413ba7bb1cc89b8a367b823bca5"],["/tags/小說/page/7/index.html","8238f6255ac89801a12fa62221e0368d"],["/tags/平淡生活/index.html","e7b328d955f248e14d23de724aaca9c6"],["/tags/幸福/index.html","4b92b713e088f84dce7e159dee47a7b8"],["/tags/志茂文彥/index.html","43641ff7e801906596d1ee75b9d6cb3a"],["/tags/愛情/index.html","de610cbf42a8818d43a04d48e7774a55"],["/tags/愛情/page/2/index.html","07f3dbeb098a9df9be332007650bf6d1"],["/tags/愛情/page/3/index.html","d45a868ea57a32ef54e0643c14f62133"],["/tags/感動/index.html","29eaa3ce051fe872910e01f8bbb802e1"],["/tags/懸疑/index.html","e7c32ae5222b27c11cad92240aa31cfc"],["/tags/懸疑科幻/index.html","9763b3ba6636f285fec8696511e405fe"],["/tags/戀愛/index.html","46c9e1c3ff20c2d5a848d3e4f9d6b289"],["/tags/成長/index.html","70c6c3cf3ee8d8dc8731372147e811ea"],["/tags/成長/page/2/index.html","09ef826ef7fa8aa8f5dbb63d1cd6e5a9"],["/tags/戰爭/index.html","9a0fbc3c9b0692acaab58e2e2785984f"],["/tags/推理/index.html","ef46176e051483db04ef94b25e4940b3"],["/tags/搞笑/index.html","92c72bdaa07e28c26d11d0fd25f82b88"],["/tags/救贖/index.html","cb089f84aa605cd0b98a7076d710eeaf"],["/tags/斜線堂有紀/index.html","21b91238e0d8972e34c805eafa30e2d1"],["/tags/日常/index.html","2e1ec1f85b97511970a9666522819604"],["/tags/末日/index.html","f9e635c438279df568493f39a03c1097"],["/tags/校園/index.html","bb9d84c91e4c2b2bade8bed46ca48ca5"],["/tags/武俠/index.html","76c251fdb9d9309dc424ac29d46340d1"],["/tags/武俠言情/index.html","3e51bf1473043dc0e31522d377003714"],["/tags/漫畫/index.html","4322b44c9a8b01fb68c576b472c24b3e"],["/tags/生命/index.html","cd6bfeb44a3b462428af65e301628b45"],["/tags/生命/page/2/index.html","38b3e664130503e126113c858829fadc"],["/tags/短篇/index.html","ca588cdbb358aec9b3b483b60d035de1"],["/tags/社會/index.html","c176a9bd7c390b8aa3befa06244dda47"],["/tags/科幻/index.html","a4a641b4a8cec36d6d9473e69a28bb61"],["/tags/童話/index.html","67e95c1f1dccee9119576456f8c4ac0d"],["/tags/競爭/index.html","561d271620744b05a0e341a72d58ecc2"],["/tags/自我/index.html","a9af912c902028048219d52eed2f198c"],["/tags/自我認知/index.html","12f990cec564295561978083271809f8"],["/tags/葦舟ナツ/index.html","9404036bb0fd0bc3eec634e19e275d20"],["/tags/藤萬留/index.html","058708fb4a334f2032213c70f6ae2eb5"],["/tags/親情/index.html","a293e6ec19ba6a5fc3614851bdf0f214"],["/tags/雜項/index.html","27ad590569636c0b389af5e36821b156"],["/tags/電影/index.html","8028269a675e14e843e7e84f1b7b4252"],["/tags/電影/page/2/index.html","1609c8a184a18e88286d2859869d271d"],["/tags/霸凌/index.html","721463e1a27fce80b126d7be497cbbbd"],["/tags/青春/index.html","d16eaec9c2e0d0172649d11928d3e327"]];
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
