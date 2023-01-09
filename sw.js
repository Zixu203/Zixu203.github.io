/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","c874ee6f17cb9e2005415b01c829d013"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","fd8da70cdf31c26dd11482fd315de6ed"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","b0e467b379e33d9cb684f51e56cdf463"],["/2019/12/25/Review/無法計算的青春/index.html","b166ba4c3aeeb9e759a4ce1b71b0f8c9"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","a373904c827d48d64052cd870461d42a"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","1f50bdba3cc9c267f0e0d0b851595849"],["/2020/01/19/Review/下雨天，不上學/index.html","1bffd7ff4fbff08a0364c93fb6f3eed2"],["/2020/01/26/Review/三日間的幸福/index.html","67397c7daa1cb2ecf17be1cd86c2b14f"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","10b47492a323c35185771dddb6276724"],["/2020/02/09/Review/青春期超感應/index.html","e98778275d60af781ace0313d13e83e2"],["/2020/02/15/Review/又做了，相同的夢/index.html","de3d9a74c951d3ddea514659f35f97b2"],["/2020/02/22/Review/回憶當鋪/index.html","2366f897f635a703d5135c1b0add236d"],["/2020/03/22/Review/不適合自殺的季節/index.html","fcaf4d09f261bb2f155a96c45925811f"],["/2020/04/26/Review/我們都無法成為大人/index.html","4d81a01d973e0852dfff17caec7d484f"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9ce9ef43d5f144d5cdf626101f9589f0"],["/2020/05/17/Review/人間失格/index.html","9f7a591927babb83fef7aad4b141f989"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","858dfaf8080b849e00f3ea8f184af6f4"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","d9e285e13712c59d59c6dd09567d3fa3"],["/2020/08/01/Review/銀河鐵道之夜/index.html","d6ed47d199b853ddeceedc4196be3853"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","509a582f0b50db1918a4384ba16cc7d5"],["/2020/08/16/Review/15歲的恐怖分子/index.html","a271adde37264cd6d3b5594d21e421cd"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","fae17d36ecd2b3ee328c92de9cf59f00"],["/2020/09/13/Review/羅生門/index.html","de9e637fee161731c07e6833c6c001cd"],["/2020/09/20/Review/闇夜的怪物/index.html","90c0a25322f5e561467fcf2904da77f7"],["/2020/09/27/Review/14歲，明日的課表/index.html","d96db1bd1b9cf6bff7ce762ae0e24ec8"],["/2020/10/04/Review/致十年後的你/index.html","cfccdabee5aa4030045f520589bb6f76"],["/2020/11/08/Review/滅絕之園/index.html","56bf35026a3d18763558075ebfcf6ee4"],["/2020/11/15/Review/將愛拒於門外/index.html","56355c90150a1c5f22224d854c3158a1"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e62f5fa94b762060a6e23462a498f76f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","8f02489e9dff81ae7ad5ab2d2fa39ad5"],["/2021/04/22/Review/道印/index.html","12deaf23c8bba06712fa47875de2f57f"],["/2021/05/03/Review/戀入膏肓/index.html","cd5888716a63511208d5246225d2958f"],["/2021/05/10/Review/Dice/index.html","0951e458aecaa689bace51a177cf5cab"],["/2021/05/15/Review/魔女之旅/index.html","52b3bdaa21563171278cda9a03690bd6"],["/2021/05/28/Review/戀愛寄生蟲/index.html","80fd5f57033fd3dc2fad336e20b3631d"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","4162c58042b36036733ebc2eb2c0db4d"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","7ba172c20b110402bc037c7f9721998f"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","496eb129058cf45c4fbde59368ec3fd1"],["/2021/06/05/Review/流浪的月/index.html","daa4df57a2f6b1592ce37047b315ed4f"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","0557a9be941629dc04076c014a4dab04"],["/2021/06/13/Review/第一人稱單數/index.html","e1b97368edb6d573e9c0d0e16ddfcce4"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","44187aa85ad55786952c5dbc27e56b95"],["/2021/06/16/Review/願你幸福/index.html","ded8a74b8cfcf35c574934c1f7a13bc8"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","3b7d12a3475d5889ff1b9644d69f6362"],["/2021/06/21/Review/神隱少女/index.html","7ce6afa773e757f6e83e56cd4431daaf"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","41c7662d7140246f9adaf60cde64d3cb"],["/2021/06/23/Review/天空之城/index.html","009cd4a9e8a405141f56d42de2ab5232"],["/2021/06/24/Review/魔女宅急便/index.html","0a5f2c97fc58fac6bfb1a37a5ed61beb"],["/2021/06/25/Review/借物少女艾利緹/index.html","9d69b73e1a31d48e7f2949b1fb3a35be"],["/2021/06/26/Review/魔法公主/index.html","503a3ef2a82a17e6fad46af14f2e5bca"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","cef3219eb065c185f55deebd2fb9ebe8"],["/2021/07/04/Review/飛雪與劍/index.html","6c76196956843d6d19946a78f3bac1c3"],["/2021/07/09/Review/地球防衛少年/index.html","0941748396203a9032a8902fa6ad3879"],["/2021/07/12/Review/Angel Beats!/index.html","fb55404cd33a8206e73d0bd248b1575d"],["/2021/07/13/Review/Clannad/index.html","aa6c8a83ed6e223d861474ac67961109"],["/2021/07/15/Review/AIR/index.html","3db14354fb6801d9d5118464c8b40a91"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","f8aec96c54b2765de98ad6206261a482"],["/2021/07/15/Review/螢火之森/index.html","6c67a556e937f51e0dd65545429942df"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","473cd8b09a03dbc952df20a6e78340fa"],["/2021/07/17/Review/奇蛋物語/index.html","968bfe406b83617d923b6bd5d2de73cf"],["/2021/07/18/Review/Vivy/index.html","4734c3d6a6f4c1369b0a1413466fc763"],["/2021/07/18/Review/請妳消失吧/index.html","5e30797c52c872679619ce76e7a7179a"],["/2021/07/19/Review/漣漪的夜晚/index.html","01474ffbdc8e6c5adcfbbddb600182f1"],["/2021/07/20/Review/月色真美/index.html","56a786ffe495eac93caeda07a941d71d"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","e03267a8d2653e16de7df8c843c1e073"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","5fcb22c795a20e877002121d50b29317"],["/2021/07/22/Review/罪惡王冠/index.html","ba1b3a87db1bb234a32129ca003df47f"],["/2021/07/23/Review/弱角友崎同學/index.html","cc171c69659f7231cbbf48805fda40ba"],["/2021/07/23/Review/惡之教程/index.html","22c8c4d4f178c9851a2cc64ebb6e483a"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","ed12c8d7fd12bb00191bc200073e7f88"],["/2021/07/25/Review/魔王勇者/index.html","fe61f4d6267c7e60f8baab232d0d594f"],["/2021/07/27/Review/一年A班的怪物/index.html","072508cd572682561dbbd0f9e2004ad5"],["/2021/07/27/Review/奇巧計程車/index.html","b38cf369374c081dbfde763047b29bff"],["/2021/07/27/Review/專情的碧池學妹/index.html","e3b0d59e800c210a66c1db89eb9f974f"],["/2021/07/29/Review/只有我不存在的城市/index.html","f0bc8a17cc81349d99ac34bef4240d60"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","79aae257b5810a93ef5c28cc3ee27966"],["/2021/07/30/Review/可塑性記憶/index.html","d09c4b4d675e493533ab77ae3ddae5dd"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","69099174f84648c0e7956c5f3130ce3b"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","a66811ec27eb31ca19db82041d3292c3"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","427102d708da72e7a44c5cd4a60b1640"],["/2021/08/25/Review/清戀/index.html","d73f32a7a1b11f5653810b2ddddadc1f"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","b46f0ec7a2c853993a4e2feddce434c0"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","4ee46ea730d7cb5e69f2ed3388d88e74"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","3a2b9a4cd9706a8c1cd5a84a1252c8ef"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","15bb37f450c4c39fa886ce11b6696194"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","8c7e5453dc54ae7488a96449941ae82f"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","ab7ebc2379217c7bc8fbde2500788043"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","8304820e7be1c868e9ebb7ea2f44bc01"],["/2021/10/16/Review/龍與雀斑公主/index.html","f1b0455778c84d2e25a82bfcfd3ab2d1"],["/2021/10/19/Review/孤狼不想開後宮/index.html","7e6c2d7fe952e307fa14436b98b21990"],["/2021/11/13/Review/徹夜之歌/index.html","1ec5317400ae1abe961821e961889ffa"],["/2021/11/24/Review/武煉巔峰/index.html","e0d48639db97cd9c0df61b4b782990a7"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","4601540f5e5d4440eeb15b3cd6ad89ba"],["/2022/01/28/Review/神醫凰后/index.html","9509f3d21669f1cfbca165b31c178855"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","af1ad7e9fb6392d8b4e3d59763cb04c5"],["/2022/02/13/Review/夏日幽靈/index.html","ba296cac0b288fcdc0114c02d9e5baf0"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","80bb2a6cf69c571490cea69f0dc45af8"],["/2022/02/26/Review/賽馬娘/index.html","b17d6a61c6885a6bc973da6b2a2d6f96"],["/2022/02/27/Review/大欺詐師/index.html","f564fc7bcca0b2a7051efdebec7b922f"],["/2022/02/28/Review/前輩有夠煩/index.html","ea2fc251d74113c1fc1731f23a0d5c6b"],["/2022/02/28/Review/碧藍之海/index.html","113cf37ef921b49e9998b548dcbd6ef2"],["/2022/03/05/Review/落第騎士英雄譚/index.html","419ae7ec7339c95e18bdf5f6ba5a2b4a"],["/2022/03/06/Review/Another/index.html","3df9f028e3dbcecfad49cc34434d83a3"],["/2022/03/06/Review/入間同學入魔了/index.html","de4097cba4eb8ca83ce5605c66bada73"],["/2022/03/18/Review/再見宣言/index.html","704c5fdb203ba5402e35523a3ed4a7b5"],["/2022/03/23/Review/生若冬花的妳/index.html","c7488af7b7464e85352fa49fedd8eeed"],["/2022/03/25/Review/天之弱/index.html","428136f809789e1209446963c64a7747"],["/2022/03/31/Review/滅了天道之後轉生/index.html","f868bd46e2f0b7d1f549c474f22f400d"],["/2022/04/30/Review/泡泡/index.html","df5c80007e71d9a1116442f2c72d5835"],["/2022/05/04/Programming/Dynamic Programming/index.html","ca0f7ea7e40fdf96311b4be726f551f6"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","ed0696a497d6962b38cbdd3bcf11cb48"],["/2022/06/13/Review/偵探已經，死了/index.html","2a57d58431f9dbd88b63e5ae4858eef7"],["/2022/06/14/Review/黑色子彈/index.html","8d16eb7a2c06f378f33dccb3fd84feff"],["/2022/06/15/Review/黑白來看守所/index.html","56037854751ef5d5d8b7119ac7e812f4"],["/2022/06/16/Review/虛構推理/index.html","945d659473b13d37dc8afe70839092e1"],["/2022/06/17/Review/戀愛與謊言/index.html","7871ea74e877b22b4a3b121cf0a6ee7a"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","52b1772c5150b64c7adef8dd905e2c25"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","fc1b612b25b5c70565f9a4c57ad65f47"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","bfd5fc305e2d6270e78b611887c40c90"],["/2022/07/03/Review/Hello World/index.html","a1351da6382fccb970597db290fd3058"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","f5731d922d9b35c453c8f4d55e0d3f28"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","06eed9404adce2fb1f952c551f2c30ff"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","2dae1347e3610fa98b3919b4fc512140"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","43636e4e9282f4b8809d9ca1a6ca5315"],["/2022/07/16/Japanese/動詞分類/index.html","8e165fb23c79f6b38ca17e13352b43a0"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","6ba4b095597fd7603fa9d5c75dba92e4"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","12ad1dc5e67546f8295b9c4055570907"],["/2022/07/17/Japanese/音便/index.html","2065485ed271aa9f0f59b09ba7588bf8"],["/2022/07/18/Japanese/動詞 時態變化/index.html","cef1b12736375499f638b84f73c344c9"],["/2022/07/19/Japanese/助詞用法整理1/index.html","738d7000e7b873b6b561079f95cb4ca9"],["/2022/07/26/Japanese/助詞用法整理2/index.html","38ab765852b7a6a24f623a860b300d55"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","c14a89f3a6338b76efcffdce62d01b2c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","fc05a1eff1cf219efe67d3969295769d"],["/2022/07/30/Japanese/疑問詞/index.html","1afd5860d26b7575e3dca76e7f75c927"],["/2022/07/31/Japanese/助詞用法整理3/index.html","6bb1af8accff27c2e6622e6987c8acd4"],["/2022/08/02/Japanese/副詞整理/index.html","b704d8853d1ee1aa623314bab612dd8c"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","01b21aeb8e80174651e8e844f059ebd9"],["/2022/11/04/Programming/Data Structure/index.html","b4f1cb46e84c03ae4570ff812f089b72"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","0715121911afdaaf97b295ffc0455a0b"],["/2022/11/22/Review/組長女兒與保姆/index.html","aedd1985df55f135b01d8b9c95d094b0"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","69eaf064685ef3d2dcbfd581792b50f2"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","38dabef54e1c6fe2915690adca1cdfd3"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","9fd2ce9a829e435676582241fc011392"],["/2022/12/31/Lyrics/一番の宝物/index.html","b6e569fb71dfccb62e332fee6c62c3f1"],["/2023/01/01/Review/あの夏が飽和する/index.html","28d32b5a69474a6c702ec2ea3e1c8900"],["/2023/01/02/Review/孤獨搖滾/index.html","f50c42ac880e336053d0495d62f42378"],["/2023/01/03/Review/來自深淵/index.html","22eda56b3d4f5d364073e8811aae0621"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","e3fdce66c059c014e93626209ef7b5ab"],["/2023/01/05/Review/處刑少女的生存之道/index.html","9e91d8a668bf56f70164e41872fced6f"],["/404.html","b67f8486feb59cf44d24432e44f2b498"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","858dee9f45fced6921e1a927067dc7c2"],["/archives/2019/07/index.html","e1d52e542d54443b2c9bfef527781831"],["/archives/2019/11/index.html","911b9d00510cdea7232f29f90cecae0a"],["/archives/2019/12/index.html","ad18228682a2eb4789eef94399d9654a"],["/archives/2019/index.html","0cd591b00c3159870a43f605437d2dd5"],["/archives/2020/01/index.html","d9de8f34c04c623d248922bbc7826687"],["/archives/2020/02/index.html","e363252a6a8ec3caa9c9b086f8346a27"],["/archives/2020/03/index.html","9fe2a2e97f86d44b1706edb9f353437f"],["/archives/2020/04/index.html","526d7ace3aca21bf89e72c53afc6bb81"],["/archives/2020/05/index.html","1bca7329c6033698e08fdca516c6e702"],["/archives/2020/07/index.html","73d38e23e25a55edd5e4b4de20d0942d"],["/archives/2020/08/index.html","95218273b9a69eb08c171a8a0281bce6"],["/archives/2020/09/index.html","85d75170b29b69ae14cee4372bc996c8"],["/archives/2020/10/index.html","b8f331b487c574d61eb0689c5ee7d924"],["/archives/2020/11/index.html","59b8cb2a2d4639833e66393c7a3fd10f"],["/archives/2020/12/index.html","862f5bb0a2672a9f529a729a6d281116"],["/archives/2020/index.html","779e1ad5c7dc2e591f9abdd476417a4e"],["/archives/2020/page/2/index.html","86ecefd3a2a679291a387ba48ea8f676"],["/archives/2020/page/3/index.html","79b26fd2d0f0eff3ad86551d799cc895"],["/archives/2021/04/index.html","98e55cc4014c8b5811a79194786cb989"],["/archives/2021/05/index.html","0000402e542e9717da155fdcaff3ba3b"],["/archives/2021/06/index.html","63d0eaf89062ec048e27953326424e58"],["/archives/2021/06/page/2/index.html","dd0843074b50a2f3755b6a1939163017"],["/archives/2021/07/index.html","73dd3e446ed75e8a770e0e26558d3e58"],["/archives/2021/07/page/2/index.html","b49bcb95532bba9d8fef273fb2036de4"],["/archives/2021/07/page/3/index.html","4537ef1c579d88b4e1260d021c2b47b5"],["/archives/2021/08/index.html","029072caf540355f6e05f6363c1a1174"],["/archives/2021/09/index.html","1ce1ad88ad087e2624e844e45217c372"],["/archives/2021/10/index.html","c7c31a0579c5f3e4f052bc5e9ef9243b"],["/archives/2021/11/index.html","b4b41e682dec878e1b7aae2360a655d5"],["/archives/2021/12/index.html","6e9e15afac3a0170ed16220f9dacdedc"],["/archives/2021/index.html","946822c2ab43e1591af3cfdb72f4ff94"],["/archives/2021/page/2/index.html","7e1c86ae53ebb169bbbce95e98de9643"],["/archives/2021/page/3/index.html","1dab430e73f5505af18e551df41598bc"],["/archives/2021/page/4/index.html","3cd30976bb78e94f61e41a61f9398e87"],["/archives/2021/page/5/index.html","3e3fa0175fbf449eae8ab51caeaa56f4"],["/archives/2021/page/6/index.html","57c329159d585451139ea216548fec21"],["/archives/2021/page/7/index.html","21226b0f57a47efca72d633481c4a358"],["/archives/2022/01/index.html","fbd66a9685949ba203319ffa62cf0a4d"],["/archives/2022/02/index.html","3d2965aa991f86b02ca43d39ceefe892"],["/archives/2022/03/index.html","d199a3e5d9637f7825cd6b2189417bb9"],["/archives/2022/04/index.html","5bb169c0f13c302812ffcc978d1429db"],["/archives/2022/05/index.html","cacf49e14821849bb5c69730b82b248e"],["/archives/2022/06/index.html","35a48ab1c72578688f77bf8f349fd06b"],["/archives/2022/07/index.html","cc8be6ec88d33a284ef6f79f0dc5e776"],["/archives/2022/07/page/2/index.html","3b3e7c3aca68c5fd55d4be084ff8841a"],["/archives/2022/08/index.html","6e7848c51c9a261d99c6249eea98a713"],["/archives/2022/11/index.html","370f62ddef0a2cfc977d2d0fe0c24950"],["/archives/2022/12/index.html","0770ee2cc7b2da6a2db5bd0dadb70fd9"],["/archives/2022/index.html","9b8c543aa18c686dfade7b6f7babc01f"],["/archives/2022/page/2/index.html","aa273a40e10a79246584db8048b92539"],["/archives/2022/page/3/index.html","9a1acc5bc79d2c2c4f36cf2385f27b70"],["/archives/2022/page/4/index.html","91e0aaeab9b4801b236583381e9f4301"],["/archives/2022/page/5/index.html","abb6343b1b36f00c0ef769170db0ddb8"],["/archives/2022/page/6/index.html","ee41caa7400158d19bcbb06d951b04d3"],["/archives/2023/01/index.html","8d51a06da224819b8645680349fb003d"],["/archives/2023/index.html","92b9a119772eaa4bbe55b5afbdb5bbe4"],["/archives/index.html","4ac8d9954905f657320fd5e0a0dcbc73"],["/archives/page/10/index.html","800d09880f1dad82d8a919b60b5ca563"],["/archives/page/11/index.html","d8c34fe6e4f6ab7591c219c86116de88"],["/archives/page/12/index.html","169a08f0c50dd670327d011bd4753b25"],["/archives/page/13/index.html","8a0160eb060b29320626ec054a6d95ce"],["/archives/page/14/index.html","2188e82a8b20eb43fbd5b8c156146eb7"],["/archives/page/15/index.html","6767705d380d88d1269c8ead66f67bc4"],["/archives/page/2/index.html","b7ae43e0f0488aa5b5bfd0c80aabe002"],["/archives/page/3/index.html","18a6c0b5220d9d84c6dcc280cdf8cdde"],["/archives/page/4/index.html","61795341e35b8ffd222368b72bae0f69"],["/archives/page/5/index.html","1c3f0717ec19bd9f7d2f91750e42b1a6"],["/archives/page/6/index.html","516a0c4bc3f7d5baec30532466007a21"],["/archives/page/7/index.html","5671e4270f89c5555e8dc8fb700a78b1"],["/archives/page/8/index.html","a69aa959f69c466c487c043f7f2c7060"],["/archives/page/9/index.html","e1f3a31de5d7e1e1e26100a33dbd11d9"],["/categories/Lyrics/index.html","58c8ad938aacdffcee8f4411d0935484"],["/categories/Programming/index.html","ddf23eb29245c7b238919f06267702a6"],["/categories/Review/index.html","31941eee513194d28495691e4834b54a"],["/categories/Review/page/10/index.html","97498b585f4a37a894266f3e1bdf6b45"],["/categories/Review/page/11/index.html","b7b0b599747edb2567feead2662b381b"],["/categories/Review/page/12/index.html","dc771f2920ad06267fbfce861b904348"],["/categories/Review/page/13/index.html","edafbfb45ed33d2ce17d52422de266d7"],["/categories/Review/page/2/index.html","81ece2517ea584ea3cb93f50561d0a9f"],["/categories/Review/page/3/index.html","9a22b7cc2615ce844ca7ce4eb6dddac1"],["/categories/Review/page/4/index.html","9ee5a70122e1cd0b8c5500d139d62c33"],["/categories/Review/page/5/index.html","33365ae00796fd740e54b2e501727dec"],["/categories/Review/page/6/index.html","acb16b49e7a28dcd4760f397cd3d022e"],["/categories/Review/page/7/index.html","d41a832c0affcafad34f74d665ef288c"],["/categories/Review/page/8/index.html","491584d056e0e7b52292ddcca8884a9e"],["/categories/Review/page/9/index.html","809d08be5c445f044c66a9cbc0ab1405"],["/categories/index.html","012f4a6716309a0e2c2195b99bfec17a"],["/categories/日本語/index.html","03fc6da2dd13e79c076a25ec099ceb6a"],["/categories/日本語/page/2/index.html","8bdfa34fd8148ad6e8f102e52b0230f8"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f18c2b3e6a81c652b9661de9c82fa294"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1b6bec216f278cedea610cd54a7cb7ed"],["/page/10/index.html","8e9752316d2fbd5b276c03d2a0766a72"],["/page/11/index.html","f361a0367031e5f30b0245f72e1537a7"],["/page/12/index.html","b99433ecb876e3e54d40c3df8f3e7958"],["/page/13/index.html","bdc288acc75726f118f9e52c2557c7db"],["/page/14/index.html","b35d818cdd2394ae20f932eea337966d"],["/page/15/index.html","1baa94902548324996f3042a385e0c67"],["/page/2/index.html","1072fecd5e16301d4c812055a0e7aa57"],["/page/3/index.html","b36adad507e3ec632229171e48678aa3"],["/page/4/index.html","3df2adb8e95c5e6fec4508abe7575131"],["/page/5/index.html","8a1b3074a3f420e7cb3e558c4b3c27b9"],["/page/6/index.html","3f4593bbe88c8258d86535630f6a7bd0"],["/page/7/index.html","f81cb5f2f3e3d158cea26b3c73a9a6b9"],["/page/8/index.html","74e97a23b1f1fc253e0afedf9cb7be4b"],["/page/9/index.html","c161ba24179e3951bca2fbf0709802f8"],["/sw-register.js","f3897ec4d3da814c46ab17ad8f96a9d8"],["/tags/10分作品/index.html","fb5fd2a09f696cfefb4d5d3d6a2f1170"],["/tags/3分作品/index.html","827d378f1c93ed3ac5059f1273de6df8"],["/tags/4分作品/index.html","a363c919a93e9b313a31e74d84a84286"],["/tags/5分作品/index.html","ebcd2a13f455a1157fdb4e7460e9afb2"],["/tags/6分作品/index.html","3f7522a27b18288aeb19ed8ad3e8828c"],["/tags/6分作品/page/2/index.html","731103bf93fc92658c9843182289e626"],["/tags/6分作品/page/3/index.html","690c7edcc24ab3a2f31b5bab2211b8da"],["/tags/7分作品/index.html","e5ec5c680f1cc2a6b5dbedf87a170984"],["/tags/7分作品/page/2/index.html","c7993cb08f66f5534129ae958110d052"],["/tags/7分作品/page/3/index.html","91385fd60ad9206cc0795a66fc359603"],["/tags/7分作品/page/4/index.html","a32c7e10a93410f6d2c0a6dec01416e0"],["/tags/8分作品/index.html","59bee8d1bcced79f2a029ea482ae4b54"],["/tags/8分作品/page/2/index.html","68771d98e45f6efff5b654a443a8713b"],["/tags/8分作品/page/3/index.html","46ba96e0da93ea770d1d56cf080a2ff7"],["/tags/8分作品/page/4/index.html","718cc6909ef07b7c72a699607d2a892d"],["/tags/8分作品/page/5/index.html","e53cb7456a19996e310eb78ae2e4f5ed"],["/tags/9分作品/index.html","ec0953d588e0057f45886a48bfb8831d"],["/tags/Lyrics/index.html","9e63fe211a62a3153dc1977c1530c28a"],["/tags/N5難度/index.html","ba9680771356f928f336e37cd489aed1"],["/tags/N5難度/page/2/index.html","ee6ce09adaaddfc0fba16323b19601d0"],["/tags/index.html","557ef0cdbe91968b87ae4c49dc32f7a3"],["/tags/アボガド６/index.html","81498c2a99752776a6bd11236ef215eb"],["/tags/三秋縋/index.html","2dfb16a2af0e4086e8589d90c7b8bfb0"],["/tags/中國武俠/index.html","e5561426feeb239d02f8cdc2d46a73a8"],["/tags/中國言情/index.html","8e654111402124813977459fc0e8fe3e"],["/tags/二宮敦人/index.html","cc911822610e2dde43a790f48578ce0f"],["/tags/人性/index.html","b17b4d9977394e434d297543f3d16fb6"],["/tags/人際/index.html","1cdf1e85479dd7165d5f855d2349781e"],["/tags/住野夜/index.html","f63535efe3de281ce51c34ca26b5726f"],["/tags/佐野徹夜/index.html","bd24781569dc8f547650d64cee1a6833"],["/tags/努力/index.html","4c9100aa5056684f95cdd4f07e82a288"],["/tags/動畫/index.html","c0b21b93f1af9ff2dfb1c7dbf3c3c135"],["/tags/動畫/page/2/index.html","024ebba4ebf111fea16c3e08bc077988"],["/tags/動畫/page/3/index.html","e0ac5a5b00e49713d3280df528eeca25"],["/tags/動畫/page/4/index.html","932d40a7bf2c4376bb08af7887cbc404"],["/tags/原諒/index.html","3c49beecf9d1b5577f934f37ae172248"],["/tags/反烏托邦/index.html","ddb99b5fb4b96e35f2849a48e07bd236"],["/tags/啞鳴/index.html","4a27f6931cd6b4b25902e09919e93330"],["/tags/喜劇/index.html","985a558a500810b32d67ae6b65e33440"],["/tags/夢想/index.html","3c9f81b1f38fade34aba74a5c9ffed94"],["/tags/天澤夏月/index.html","9d46721da6141fa4e8ff91c56bc53784"],["/tags/奇幻/index.html","9dc6b6cc3453fd2d448bba0062018b9e"],["/tags/學習/index.html","39c4ff8da43b68e38c4084aeff6c2f1a"],["/tags/學習/page/2/index.html","fc969ac7590ba39548b9b2bd26e957cc"],["/tags/宮崎駿/index.html","254f9aec02a67ec3a1d95f2b6876b4c2"],["/tags/小說/index.html","df0677e57f02aa97b76059a51a942a13"],["/tags/小說/page/2/index.html","0592ba7ead5c3d819802f6b9100614f7"],["/tags/小說/page/3/index.html","3157a12e554d80ed66e9b6f2d9e79af9"],["/tags/小說/page/4/index.html","31fd402484fbe95f5ca13f3e8be9e773"],["/tags/小說/page/5/index.html","33384928b8df32b23425e220c776d451"],["/tags/小說/page/6/index.html","2775600d363c8617a570713a8f9181bf"],["/tags/小說/page/7/index.html","4b4fcaf97c8e91aa16cb162b89cdcb01"],["/tags/平淡生活/index.html","7dfb1cb5f365ce49b1b41dc922524209"],["/tags/幸福/index.html","b625650aba3a0991fd6a307656a8e40f"],["/tags/志茂文彥/index.html","9e14ea86790d004417f5dbad5f32c0d4"],["/tags/愛情/index.html","4c486a69be5a77f644f4703435686e2f"],["/tags/愛情/page/2/index.html","1c20261fafacfc5cf76e5a792001e7b5"],["/tags/愛情/page/3/index.html","3b193913a1c9b133f0b07718d3678584"],["/tags/感動/index.html","6782b0a0f6a154a59ceec861cb6481af"],["/tags/懸疑/index.html","8c3dc3e8dfe785db2c66c5624c0639c2"],["/tags/懸疑科幻/index.html","4d04e0598cc52ac208f761f4c185a839"],["/tags/戀愛/index.html","4ba6d9500d4c78056622e642e41a64a1"],["/tags/成長/index.html","6f9e7022334d62b2264cfe8894a66927"],["/tags/成長/page/2/index.html","6b5589ada786299318526bd70ce4408f"],["/tags/戰爭/index.html","562e15f0b50ac6dde49dd12c3736439b"],["/tags/推理/index.html","10dd42c6204856133c54890c5c7288ae"],["/tags/搞笑/index.html","ae99a50b87827c20b4b77ef662309c19"],["/tags/救贖/index.html","a351df67f677630a36375541dbfd9898"],["/tags/斜線堂有紀/index.html","e54a1c500d80222a78293b5ceb95b2ff"],["/tags/日常/index.html","b258e1ff85eeb84701b84dfcc1ea27da"],["/tags/末日/index.html","f326f7e2ce2048ec00c3e273aa98e2f3"],["/tags/校園/index.html","6a96cb7d87004f877d2b53d6906be27f"],["/tags/武俠/index.html","de17e0750cc22fd93c73c50cec323843"],["/tags/武俠言情/index.html","0593a9be254c8ebff0007834bf1399e5"],["/tags/漫畫/index.html","a47dfdacf00facb8f481f899cac41b59"],["/tags/生命/index.html","63071cf35642b98053b5d4365a30c738"],["/tags/生命/page/2/index.html","8965da439c93523b9335295af53e8dc4"],["/tags/短篇/index.html","9cb7f5a2156ad461e57bc837c7e88903"],["/tags/社會/index.html","cf9cf4b25704cd11a3e3b711d712f633"],["/tags/科幻/index.html","f9f79393718fcad39500515e09108daa"],["/tags/童話/index.html","c8f8401608e0e03c466575b73a79a89c"],["/tags/競爭/index.html","11202b049579216f68c9390770a00618"],["/tags/自我/index.html","1ccbcd7f53ba4bab26b33e5c5ab3ba2b"],["/tags/自我認知/index.html","3dfb565f98368b0619eca9081ed6612b"],["/tags/葦舟ナツ/index.html","13c03c5e46fd06d0ee9f8f74c35ef324"],["/tags/藤萬留/index.html","19902fd0cfd6d76f7b2c8ba990d44fe9"],["/tags/親情/index.html","52f5ab3a914d6b8453b807325887ebe1"],["/tags/言/index.html","73f6f5b0854ce1a099ab1d8271822053"],["/tags/雜項/index.html","51d98a002bca645186719a234fc10bee"],["/tags/電影/index.html","9d7dde62aeae2f6a23202ab6250b9b77"],["/tags/電影/page/2/index.html","c025b3b852b95b525067d5af1aa8f984"],["/tags/霸凌/index.html","cbafec356f47a6778cde696fd3fb0b49"],["/tags/青春/index.html","06305c0da5ec8b8a0db594052d9fdcab"]];
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
