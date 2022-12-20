/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","c35d094efb89b48c4ff7b84824f431c7"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","dacae33dc904a211846a6ee3962ad44f"],["/2019/12/25/Review/無法計算的青春/index.html","db370b8a5e027adb63ca1e5242afcd4c"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","028da869de6535bc171d2f4b45e54ade"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","1636c27c8d16f78d0ea531e829552165"],["/2020/01/19/Review/下雨天，不上學/index.html","d6fe39127f4a05ec91e138c298ea44ae"],["/2020/01/26/Review/三日間的幸福/index.html","73d02190b26e9b1b63321decb1864c2e"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","775b065c05cda8cd45fe889fd38c59a5"],["/2020/02/09/Review/青春期超感應/index.html","c795db1d6ea5300b9fde8899e702af2e"],["/2020/02/15/Review/又做了，相同的夢/index.html","09ee4be97136b83e6c1f1cbc037a597a"],["/2020/02/22/Review/回憶當鋪/index.html","5aeed6c8c39c088128901ad72c1ec2fb"],["/2020/03/22/Review/不適合自殺的季節/index.html","a9d64de8510da455a7b0f9cc4d25a299"],["/2020/04/26/Review/我們都無法成為大人/index.html","d0ef067a373fd758a0f7b66d19f898d1"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","1015c3922f5fc7475c148eb0bc4cb30d"],["/2020/05/17/Review/人間失格/index.html","c44af4aa6f67b28fd5fc7dd3fc5eb007"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","0d2fbc775d6744fc94a1e5fa34b90b77"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","fcd1683390732e265d838b0dea8db7cc"],["/2020/08/01/Review/銀河鐵道之夜/index.html","88972a15cbb39b829388d7c3893f525a"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","f65cea614c9cc8e115330104c8b94046"],["/2020/08/16/Review/15歲的恐怖分子/index.html","c9bffa8d8023de53f8c7a00651d20bb9"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","2e4f8ca406149034ee37d04a448e1812"],["/2020/09/13/Review/羅生門/index.html","263795078bd5afed2c8c72e3198fd661"],["/2020/09/20/Review/闇夜的怪物/index.html","83321b3e2191853427fa33f9470871db"],["/2020/09/27/Review/14歲，明日的課表/index.html","fa6d50a0fc552d17f27ee34a632b49a7"],["/2020/10/04/Review/致十年後的你/index.html","b59bb40b8c6da81e49322cc53394e86b"],["/2020/11/08/Review/滅絕之園/index.html","f180388c2412db5f0dc38c98c279a475"],["/2020/11/15/Review/將愛拒於門外/index.html","8f1a8e611e2171a3f7f16be5abcbeb83"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e650bb861ae5c8d60cf7f7c9d116a98c"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","33d6cacc4d12d1d0890330171f504608"],["/2021/04/22/Review/道印/index.html","caf363afcc1da9cb5c4f6401fa99aeb3"],["/2021/05/03/Review/戀入膏肓/index.html","921414eb005916e5922480d7b381e64f"],["/2021/05/10/Review/Dice/index.html","66db1ba3b506d3870ad3fda11fd812e8"],["/2021/05/15/Review/魔女之旅/index.html","8e00e4220d8255574dc72d915cbfb9e3"],["/2021/05/28/Review/戀愛寄生蟲/index.html","f4dc1270121677b440a73f8d067a23d5"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","37c1274c1ca9751a48b9d9bef37fc31c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","28702850fdb328c2451f9a22d5cab2e1"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d54e13c4a344ee882c6d579756303af4"],["/2021/06/05/Review/流浪的月/index.html","131e8c662383b14fade540d34845adf3"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","afbcffb33336cc6f03a50146ce5886e3"],["/2021/06/13/Review/第一人稱單數/index.html","2558f46b8004657ba4cd96c60bac1ca2"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","e1b7c9c8e0d4dff7ade8dc4a45ef82cc"],["/2021/06/16/Review/願你幸福/index.html","193d890686143b6695fe833e5e073095"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","cccc952f1bd516b11b5a6ed69d1b7a7f"],["/2021/06/21/Review/神隱少女/index.html","246ed0035e1ac80d1582dd14677c31b9"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","29358e88e83a6f7c16ac9cf6933b8cc1"],["/2021/06/23/Review/天空之城/index.html","7c17d81e250229eebeb87073be79fcea"],["/2021/06/24/Review/魔女宅急便/index.html","0479aee7f9c93ab6aa57ce3a80583223"],["/2021/06/25/Review/借物少女艾利緹/index.html","afba4ccd4da24e94fbe0d20f49b0dcfe"],["/2021/06/26/Review/魔法公主/index.html","ddad2cf24eead1cce229ce4420280042"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","b7c31a3f66d9afa156d0d967e042a14a"],["/2021/07/04/Review/飛雪與劍/index.html","bde9f87c6b54e648d940aa030a45ecd5"],["/2021/07/09/Review/地球防衛少年/index.html","269b2987db4bc2ab6ef0adcdd45e934a"],["/2021/07/12/Review/Angel Beats!/index.html","a23a154f79bd8c3c49e2214adf4ead0e"],["/2021/07/13/Review/Clannad/index.html","b698bf38e91806088b0cd7c047ea86fb"],["/2021/07/15/Review/AIR/index.html","04585474a864082f5724891d7946e747"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","5983e6a40cf7177a10a00412d864dd29"],["/2021/07/15/Review/螢火之森/index.html","b516a0ce18a9e1622741b8134bee8ee1"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","7dd71980492413579ee7d8f349aba4d9"],["/2021/07/17/Review/奇蛋物語/index.html","a65839df1fc8a5b8398387342029ff7c"],["/2021/07/18/Review/Vivy/index.html","3dc5b7334f1d34da63391cb0e97fe8c9"],["/2021/07/18/Review/請妳消失吧/index.html","0b49b16856fc9bcf101de824ed117d1f"],["/2021/07/19/Review/漣漪的夜晚/index.html","7a78390d6fee98c07c41f66ab2d85b5d"],["/2021/07/20/Review/月色真美/index.html","79642ed06969bebe729ac6007fc61664"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","3894703bba7422c198a266a62b6a8488"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","71c04dcb98827267003cf1df0bbcdd05"],["/2021/07/22/Review/罪惡王冠/index.html","809c26ba8fc394fe72c8fa6f4e87594f"],["/2021/07/23/Review/弱角友崎同學/index.html","84857e0db1df0d2a1c16ed6c26913150"],["/2021/07/23/Review/惡之教程/index.html","58cd9527f144e10f0a603b496b5c6112"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","76ef9fb0d647fba65739f97e5ffc04e0"],["/2021/07/25/Review/魔王勇者/index.html","aab70c82247a3ad4a9562479684fdb21"],["/2021/07/27/Review/一年A班的怪物/index.html","a8754ad24d1b2f0922914e2611f1825d"],["/2021/07/27/Review/奇巧計程車/index.html","83c7e7a2e2faa29d9dc7fa6fb94ace8e"],["/2021/07/27/Review/專情的碧池學妹/index.html","4a19139d477fbb799f5d8e20d85c37ae"],["/2021/07/29/Review/只有我不存在的城市/index.html","08849a13e8ff5146fd240a1430ac85f1"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","031845aa8d8e12ebe0292bd74729b1bf"],["/2021/07/30/Review/可塑性記憶/index.html","799cfe9cccd9d60bef991ca9c8f7f865"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","c4e9beb89d3cd189855c5cf5274f59e6"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","d917926e9895f329dd55f3479fb00483"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","fdc85d2f76caabeaa34a8cb7615159de"],["/2021/08/25/Review/清戀/index.html","6fd0d176d1e13f891f003496cfb3348f"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","0d0b12e3575b3a096fac3de03807a4ee"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","60cdaf49859f3decc922ddff58d551e9"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f222d7a09c1fc43c125eb76a2c6911e9"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","b8be2f245b9d464825334292db5edadd"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","844d880c7bd863549ee12276de1be796"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","0e0cfeff28846c5a570a196472abee0a"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3885964a8ed80898a533fe1d0e22a4e7"],["/2021/10/16/Review/龍與雀斑公主/index.html","4c96e662afb27d71c9d8554862155abf"],["/2021/10/19/Review/孤狼不想開後宮/index.html","fa9512889e3bd59e04b0b28a28084729"],["/2021/11/13/Review/徹夜之歌/index.html","9cd6fc30376f722bf84392d73f191842"],["/2021/11/24/Review/武煉巔峰/index.html","9eaaf5d03cd69ccc4696571619656e8c"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","5769c82765332636cac108e7309c4b41"],["/2022/01/28/Review/神醫凰后/index.html","a12cc13a6680d0f5d287dfd38510aed3"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","2a17091ea59f82741575c916af4e7f83"],["/2022/02/13/Review/夏日幽靈/index.html","52d8b5b8d69480365f844c3ce2619e7d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","af052e77bbc853b53c275b35d504d4bc"],["/2022/02/26/Review/賽馬娘/index.html","d769275845e8ade5efde631c19747423"],["/2022/02/27/Review/大欺詐師/index.html","da27c799ba27ec3d1b9a97f950be18dc"],["/2022/02/28/Review/前輩有夠煩/index.html","ce46ee7917be48793fd27e498539d7d0"],["/2022/02/28/Review/碧藍之海/index.html","d65fca4807fc296ac160d7fe65579297"],["/2022/03/05/Review/落第騎士英雄譚/index.html","3500c226e839cba632d6784795170469"],["/2022/03/06/Review/Another/index.html","ed636aaa6d099a29fa4ccbb7592cab23"],["/2022/03/06/Review/入間同學入魔了/index.html","720832c25d7fbcbd7bfa8a4060aa6463"],["/2022/03/18/Review/再見宣言/index.html","17c1606e10bed0bf59d5eb4d14c4d280"],["/2022/03/23/Review/生若冬花的妳/index.html","e4f697f4b6d9c9f0a0d169c9db930eab"],["/2022/03/25/Review/天之弱/index.html","768c49258091899fc9a98044c3baa66f"],["/2022/03/31/Review/滅了天道之後轉生/index.html","b7f9b49a7e775250cfac2da1be783e80"],["/2022/04/30/Review/泡泡/index.html","877635fd5e4a4481f6eeb1d2c28904bf"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","30209bd2f01c5b75bb4879e6563e5c8a"],["/2022/06/13/Review/偵探已經，死了/index.html","e276f675cc5af1482d5ea778179fe6f0"],["/2022/06/14/Review/黑色子彈/index.html","29c969d8b4e82f048b0407c95b2de7e1"],["/2022/06/15/Review/黑白來看守所/index.html","7bd7ecfde7b56bed791c9fb6d16b4404"],["/2022/06/16/Review/虛構推理/index.html","42851ae8bae45dbb599fb84e9ef84c5a"],["/2022/06/17/Review/戀愛與謊言/index.html","9f1b2fc58fab6ea6d4c12b8d13853a04"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","76bada1d80c30b69781f9c3ecffefed1"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","c717f119318b40b0c020d5989efa2e78"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","87be5f3cf3bda3139a48e977430c6f15"],["/2022/07/03/Review/Hello World/index.html","d2eee13b6cebec6af155deae2e3fda8e"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1d16443cd5afeacfee10b32d4808c64c"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","5b09bd301bff23c49c2a0af7a65bd4fb"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","c9121d1032f0a3348f05e89f8ca7516d"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","47ec26d735221b53fa8132d0b31bb72e"],["/2022/07/16/Japanese/動詞分類/index.html","c4eeaaceb6c0ddf4796aeca3af468bbe"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","443b0017f08dbb1bd0ee761b7cee89c6"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","900fbe75dada42316c7939f115e18b7e"],["/2022/07/17/Japanese/音便/index.html","bc2eeda0c28edf10c1d7609603461e35"],["/2022/07/18/Japanese/動詞 時態變化/index.html","eb6e4d4d92c8de0ec5806f05b02aea25"],["/2022/07/19/Japanese/助詞用法整理1/index.html","7138a11f06e47d6d7e54b15a4a1ca0fc"],["/2022/07/26/Japanese/助詞用法整理2/index.html","d67c3ca2015340cc55b9cfefb5597544"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","b2814f2abd0db92748fa56b8c794ee9c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","c09bf47859c7759137b55c58b5d45ffb"],["/2022/07/30/Japanese/疑問詞/index.html","0eb887b2db410df7a43ddca16fd782bd"],["/2022/07/31/Japanese/助詞用法整理3/index.html","006aa41562ff005337365da16a901678"],["/2022/08/02/Japanese/副詞整理/index.html","01a30258d3397f2591ac6b10503c604a"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","c04941f3f99a0de10d726d015f3aa057"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","8790628b9a5dcf2d9b4f8bac882a3bd3"],["/2022/11/22/Review/組長女兒與保姆/index.html","d3a139f4fce521cd6744958d4dcc7da5"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","5696ed7ff67ff005bbce0ae351a34b90"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","da106bbc21cb6715420cedb35e87de0c"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","27a7ed506575fb3fee441d4539b21623"],["/404.html","3058e5cd3c1106c1273f92085fa5994d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b93364c3b7116d165ca0242b1944330c"],["/archives/2019/11/index.html","4e64a0c93528e48689dc6def0524b207"],["/archives/2019/12/index.html","3e26da15b349d9d2a25a5b980adebdb2"],["/archives/2019/index.html","23cce54d8db8c3e94b04bef32b6be7ea"],["/archives/2020/01/index.html","391b43caf5a638c7c9958e0262db3df6"],["/archives/2020/02/index.html","c7f5bdc4753743427cb98ad7ba7326bb"],["/archives/2020/03/index.html","0a716284dd9d375f9e9fcb38300eca3d"],["/archives/2020/04/index.html","ebc01c2953efc1e45f63e58a05545ba5"],["/archives/2020/05/index.html","f7943bd3040dc08c77b41b8fbf80b8fb"],["/archives/2020/07/index.html","669d0e3dd0f66122d5644b0f9aa54fe0"],["/archives/2020/08/index.html","7b93fa03d188786cf26b016084d43e46"],["/archives/2020/09/index.html","2d13a2cca9c86d45d755d79c40de63c4"],["/archives/2020/10/index.html","249764823a89d35d312ef82a35342987"],["/archives/2020/11/index.html","14b0c62f277a2fa187394b924cd695e9"],["/archives/2020/12/index.html","731856df31d7be3cf62f84e4574f7c5e"],["/archives/2020/index.html","6d3fe6d16eb45062c1657544bdfd3d5b"],["/archives/2020/page/2/index.html","acef624606aef65d25576d0ad8b2ccef"],["/archives/2020/page/3/index.html","2c257d0e31f4ee3c10a11d6a4efa092a"],["/archives/2021/04/index.html","2085f9535506eadafc62f79d02638160"],["/archives/2021/05/index.html","6ec1beaffe19b6efc3b3eaecc36bd10a"],["/archives/2021/06/index.html","5cf2d1a31e9a82b698964c4f5f383911"],["/archives/2021/06/page/2/index.html","d3b6eb2bd6a5380cb586449d537a2b13"],["/archives/2021/07/index.html","9e96aa06f1e66e80e435b0ab75384bd1"],["/archives/2021/07/page/2/index.html","2f568cbf514d09d231153aeedec0e2b4"],["/archives/2021/07/page/3/index.html","5fd372253fe0c573de9076d89b68d28e"],["/archives/2021/08/index.html","4c4e5e475ed96788be60c95ecf95951b"],["/archives/2021/09/index.html","be3fa99a15ac85452e04e5aab5e6416e"],["/archives/2021/10/index.html","c17e9d363d1813d2d4e314a76d865b9d"],["/archives/2021/11/index.html","7aba29250739466c22f78e588aec13a4"],["/archives/2021/12/index.html","7df9af653fddc5e99ac3dac89a5ca685"],["/archives/2021/index.html","32078769659953c3179e13a95dce667b"],["/archives/2021/page/2/index.html","d4de5cb6e8ec8705923f0b323b1032b9"],["/archives/2021/page/3/index.html","fb89297cddb4bd49f81184427fc3e0fb"],["/archives/2021/page/4/index.html","6a3554aa1819c76fbe2f56bf8de86ddd"],["/archives/2021/page/5/index.html","075b7456be12b8e3268f4e3f585ae86f"],["/archives/2021/page/6/index.html","639ad86aa8c519f0c624385016929631"],["/archives/2021/page/7/index.html","5a821be0fb6556672bb1f8abdf43d08a"],["/archives/2022/01/index.html","685951be857f24293409704be891707c"],["/archives/2022/02/index.html","176e67f2c55f9b973503977453b209a7"],["/archives/2022/03/index.html","8e05bc17b19dd33900663c53501d0d0e"],["/archives/2022/04/index.html","cf706ae72ca5db7d87f9e7283608b149"],["/archives/2022/05/index.html","3bd0e66f3cc3a08e6c61e4478e086b3a"],["/archives/2022/06/index.html","11e07561d6a958aa029ec7917450aa27"],["/archives/2022/07/index.html","da813a5687846b08b69bb5a0f47af217"],["/archives/2022/07/page/2/index.html","137b125670ce64bb16d247b059c3c520"],["/archives/2022/08/index.html","1636a535b4b8258a58070560a6a934b4"],["/archives/2022/11/index.html","2c6ff876645a65f6a21ff1965dad1602"],["/archives/2022/12/index.html","fd71c993ad5f960f1bb7b47ed939858a"],["/archives/2022/index.html","3eb1feea3597fdac93dd4654d4f24938"],["/archives/2022/page/2/index.html","17e2a2658d92c927661cd07f62b14374"],["/archives/2022/page/3/index.html","362b3263638ad8b125f003a60aa16260"],["/archives/2022/page/4/index.html","d594fc2f52263696821d94a278353bac"],["/archives/2022/page/5/index.html","43e71cf4cc2ca7181d60f135f71db518"],["/archives/index.html","e3d82eec3195b26055b4c1fe9cfe0533"],["/archives/page/10/index.html","dc6d3217bcd5d74c19b42e3bea812cc3"],["/archives/page/11/index.html","b3bbc01fe67255bf96fa4626c4c5e6b5"],["/archives/page/12/index.html","9ad1a7a9c1c3ca04f09ef433f218226e"],["/archives/page/13/index.html","c4cfec78abd3aed064829867e54c1485"],["/archives/page/14/index.html","2a1b38cb0571897807779ee75c378899"],["/archives/page/15/index.html","dd6c475c66729d0e1491b3411cfaee5d"],["/archives/page/2/index.html","adea5aa62cc2ba695ac84269a4032f66"],["/archives/page/3/index.html","a9e4a5d8f3618a5370eeb08e01a1d870"],["/archives/page/4/index.html","a0d7080fad1710a8f1fab4e516c3c3fe"],["/archives/page/5/index.html","a878625c05e2d0f4880ac454b206fb60"],["/archives/page/6/index.html","45e6c1425ae4b5f4381d0dda0fff8e82"],["/archives/page/7/index.html","c3fef973874c190a62191405d09642f4"],["/archives/page/8/index.html","3db75b105293eee748f5357d2cf1bfdb"],["/archives/page/9/index.html","f212664ea2a9bd4321d43255bdb7fed0"],["/categories/Programming/index.html","886f37f3b0a3590866c8381334072172"],["/categories/Review/index.html","f0fffa5a4ec0e4a0c74d4faac61d6cc6"],["/categories/Review/page/10/index.html","9463fee93e3e4481e5fff5d2158f5c9e"],["/categories/Review/page/11/index.html","dbc31b26ad27007aef5bdf0c736a36bc"],["/categories/Review/page/12/index.html","d5e0eea127534cd989f475949a243e3f"],["/categories/Review/page/13/index.html","0435a153a9a60a34fee1a8250cfecf16"],["/categories/Review/page/2/index.html","c8d24d7720a03feea72c442876222e40"],["/categories/Review/page/3/index.html","17a9405ea462e8cbe7372e71a8ec8573"],["/categories/Review/page/4/index.html","b137a4149a5067e0c3b2757a794cb6cd"],["/categories/Review/page/5/index.html","fec8726ef19a281c7b7cf8f7c7e7fb66"],["/categories/Review/page/6/index.html","a851b2697bb28e8bd8b70feac412f65e"],["/categories/Review/page/7/index.html","b3f0e4a7deca4c252d5e17b09c227375"],["/categories/Review/page/8/index.html","ef76d2742e3849768693f2d28b05de67"],["/categories/Review/page/9/index.html","d182a0b4bb998fad52acfb4e49ed9881"],["/categories/index.html","b82c34566335737190c0b58c08f3a7af"],["/categories/日本語/index.html","6cd1ba451c90b979a916973e40ba8386"],["/categories/日本語/page/2/index.html","7ec7330460dfcd83cd8dee4efb7e39b5"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","737312992d3c41ffc6f98d390fef67bf"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","2e9d08686588421fe4e5d6dded1197d8"],["/page/10/index.html","a9bef02f582da8c061d15cc13dd7ef2b"],["/page/11/index.html","b770cd71413ec0d0772bcb7aefe0d04e"],["/page/12/index.html","ce8ad9c27c518d2487d1e080dcadd574"],["/page/13/index.html","ae1c83965617d1ff6345e702ea6ba90b"],["/page/14/index.html","6b50ea0a99d083d0286178e8f32f2545"],["/page/15/index.html","3eef2ca62b1a01389459301071145456"],["/page/2/index.html","e466b9e8f5d11e966e677107a724d37c"],["/page/3/index.html","0eb0a77e5a8676616d34edeb2e8fe49f"],["/page/4/index.html","8e08322f4648105b9f21b6d4920e3aff"],["/page/5/index.html","c41a1740a75a662ff5989dd8817331a6"],["/page/6/index.html","6a63760aa411cd3c78d0bbb958b7c26a"],["/page/7/index.html","6851eb8849027a8ae5630deb3553ac09"],["/page/8/index.html","b129bb0c19a76134bca20800088ac2d7"],["/page/9/index.html","89f0a65fa0ee2f3c0bab348b5062c259"],["/sw-register.js","bdd58814c5142685c4d50a85e3ea0fb3"],["/tags/10分作品/index.html","88dd8f790b056d92891ab4846df6a899"],["/tags/3分作品/index.html","29b2e4729eb718a98f62c94cc9ea2af6"],["/tags/4分作品/index.html","124a929f3e08b2bfa746cdadf0a1f4d5"],["/tags/5分作品/index.html","f9f6c065f6b37e39d64696c57406153e"],["/tags/6分作品/index.html","9b3a440412048bca1a8496e101dff7c9"],["/tags/6分作品/page/2/index.html","8659878459259312d5bd40e31d331b81"],["/tags/6分作品/page/3/index.html","62e6f0d9232f03193f4561b3b0830e15"],["/tags/7分作品/index.html","b7eae46b3679423c85d21cf63b25dea7"],["/tags/7分作品/page/2/index.html","b5bac1fc225050089d2ca402710f3973"],["/tags/7分作品/page/3/index.html","19b2375b2e1e64309973ce92620867b0"],["/tags/7分作品/page/4/index.html","d678d164e40c352c1aef0ad07e62ac48"],["/tags/8分作品/index.html","27515c035b1a233b5bcada2631a74ec2"],["/tags/8分作品/page/2/index.html","9e7b5acb30803c798b7f76a888e8178e"],["/tags/8分作品/page/3/index.html","9a9087397ce942c4feb1efe1b2b56ce4"],["/tags/8分作品/page/4/index.html","f7af45874273892f66aec3d64419ba83"],["/tags/8分作品/page/5/index.html","a300dfc1aad3121cf7367c47513093ac"],["/tags/9分作品/index.html","20b7c588d3f044d65384709db3a1d913"],["/tags/N5難度/index.html","4445b96b1355c3006a3986a73b70ea35"],["/tags/N5難度/page/2/index.html","63a15db7b531a9cb5f5b2d04a75d455d"],["/tags/index.html","4b8abf30134a3ea710681312e7dabc6e"],["/tags/アボガド６/index.html","389b23a30815bcff071e0de725b8ea6a"],["/tags/三秋縋/index.html","3feb40e807146148a52e05ca637a47db"],["/tags/中國武俠/index.html","8e266b93fd7201a43d7c1309a5e4f9c3"],["/tags/中國言情/index.html","8e1ee13f220de7b2e74d5e44156daba8"],["/tags/二宮敦人/index.html","ccbbbe387c6c80ef5a44bacea6e4bf71"],["/tags/人性/index.html","21b8e93a776f1c49e8178a6f47b6de0b"],["/tags/人際/index.html","49a5dd5e14f0468fdec860361850b607"],["/tags/住野夜/index.html","469ea1be3f46cfb9984e281c4a115163"],["/tags/佐野徹夜/index.html","d1f8ab44567cedb122f079c96118db31"],["/tags/努力/index.html","350a1cd80055df1276682722e32361e6"],["/tags/動畫/index.html","41c3eff0993377ad274e7be6f36ed10d"],["/tags/動畫/page/2/index.html","411553c94b9ef73e5d2c0213bf9cfcf7"],["/tags/動畫/page/3/index.html","106e4eca3ead5a5e2252061f4dea7334"],["/tags/動畫/page/4/index.html","e659e1962f8100ec175e0264cd6715d6"],["/tags/原諒/index.html","a9b69cb9a793f3ee533419ffbdb3f289"],["/tags/反烏托邦/index.html","87b780a2fcfeafe9e30fff147d59d81c"],["/tags/啞鳴/index.html","1ec80c722696493746d61ab82e7d5f45"],["/tags/喜劇/index.html","4404872c2b1b03648116400417798850"],["/tags/夢想/index.html","1a06fc13d7d81548baacf62e2b03094f"],["/tags/天澤夏月/index.html","d2f26d2316adeb428d26e6103ff2cc18"],["/tags/學習/index.html","21883264ff4331c1e5d4e1939085e430"],["/tags/學習/page/2/index.html","4c4f0a6e10eb5d8d08c84523db7d272d"],["/tags/宮崎駿/index.html","e4c1296b7a0d5da9004851d20a22e2c9"],["/tags/小說/index.html","3b96d768840c4953d03800742ffef1c7"],["/tags/小說/page/2/index.html","a491dcf29b76a78cde0330312f6bd1e9"],["/tags/小說/page/3/index.html","61f91403cf2d7aa9a87858db386de725"],["/tags/小說/page/4/index.html","b472e763506b57e4e028ec06cddd1e35"],["/tags/小說/page/5/index.html","7a224ab84823ec4ee9ca960374c1db7d"],["/tags/小說/page/6/index.html","a47280dface8d18e2fcfce88a4a8e22c"],["/tags/小說/page/7/index.html","00318b20c9f103b2f231929c38990ee3"],["/tags/平淡生活/index.html","d0a2f3b1a7671bd8df61e8ea6681731e"],["/tags/幸福/index.html","fa764502376f2e9b132a254061ccc8cc"],["/tags/志茂文彥/index.html","0af1e7ae64fd9ea67f43600c9995a9b2"],["/tags/愛情/index.html","914338c3b09b8508ba4aaf82e2395112"],["/tags/愛情/page/2/index.html","57c46f8c884680bea8b26a3d1ac86ec1"],["/tags/愛情/page/3/index.html","015e0924a8cd2a656812847e5d94d8ba"],["/tags/感動/index.html","870e78bd920739843883e2ef70dcb1b8"],["/tags/懸疑/index.html","b48d1fc87ccf703e75307144fe0403d5"],["/tags/懸疑科幻/index.html","30fc2b93472e6625e2f0d4c97cc8566f"],["/tags/戀愛/index.html","a95beeb530020a41f974b0bc86501ce8"],["/tags/成長/index.html","5cc2eea762b0d9049b9637ca2fe20ab6"],["/tags/成長/page/2/index.html","1cb1c54c38663bf93c70021fc0a2e675"],["/tags/戰爭/index.html","a6ab8b2478c4730db3b5ff8c804d9f3a"],["/tags/推理/index.html","5140f15220fa5866002bbabd11cad939"],["/tags/搞笑/index.html","98a53f91b302184d183937eda90e9bf0"],["/tags/救贖/index.html","ff989738341af89305055916cf5e1d0c"],["/tags/斜線堂有紀/index.html","d218719c7bab6d89e61674feefb308fe"],["/tags/日常/index.html","82301de50185bd765cae0497c908d189"],["/tags/末日/index.html","a20d4e50a2da782d99ed689dd8f76c46"],["/tags/校園/index.html","f04c28a4ab0a2a29302a7bfd839b8bc1"],["/tags/武俠/index.html","e7442a6172fff8eb09ff31ce818e6eed"],["/tags/武俠言情/index.html","45361c27300942a72e053b216284b97f"],["/tags/漫畫/index.html","8ea4c0279b3544203f2d22faef8a9abf"],["/tags/生命/index.html","7db31e73570f0807e888d07549a9a43c"],["/tags/生命/page/2/index.html","2ed136c762c1958298bce500b28b0b95"],["/tags/短篇/index.html","40e3aeeef3448a37576e969d34bab060"],["/tags/社會/index.html","5d292f48df2fdee0e81a77c5d0a11bb7"],["/tags/科幻/index.html","8ea1dd587d9bfabb6402344bfcebef58"],["/tags/童話/index.html","9850809e996de105b3b8742a05c73f43"],["/tags/競爭/index.html","03001604ede6672ad234eccfe48f493a"],["/tags/自我/index.html","2d761c3212dd94ffaa71af5ad1bebd1b"],["/tags/自我認知/index.html","72260a595a7bb23079a07c399641612f"],["/tags/葦舟ナツ/index.html","635814a267f2afd4ba5232093f791721"],["/tags/藤萬留/index.html","5d88d76742004ee1e5472b300f3a624b"],["/tags/親情/index.html","cbe1a08b4b7e7c808a29e97b9c85d324"],["/tags/雜項/index.html","5693211352840037d90d1f8276769dc2"],["/tags/電影/index.html","b7d2d17d45c729b2cf18f82d29c5effb"],["/tags/電影/page/2/index.html","a9b9713f6872b7466105babad00421f7"],["/tags/霸凌/index.html","ce054bfc49e3d62f4207b4ce702a5b9f"],["/tags/青春/index.html","9040eed1dce02b95c98b117587df19da"]];
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
