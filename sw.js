/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","8fa6862982d2d551947cc2b3c36e91c9"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","2c8643ca11709d06b7cf8e9b22000620"],["/2019/12/25/Review/無法計算的青春/index.html","7af44702ab331c5383969383f64dc8b6"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","4b70ee272a138554fdf0ae45f93425ee"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","cd6e29343ac766b15caceaee54a4212b"],["/2020/01/19/Review/下雨天，不上學/index.html","55456c9495d9b21ce98772a4e41a2ae4"],["/2020/01/26/Review/三日間的幸福/index.html","374b104759a0cc0606649618f4cb59b8"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","2306d2825f1126ce4a3958ea6da927e2"],["/2020/02/09/Review/青春期超感應/index.html","056b6fb1784c9a3e3cff6268c785c9b4"],["/2020/02/15/Review/又做了，相同的夢/index.html","97d88a0cdde272e292e93f95533a65b2"],["/2020/02/22/Review/回憶當鋪/index.html","a900f044079d3a88cff8364d158289ab"],["/2020/03/22/Review/不適合自殺的季節/index.html","cb8a1348722b4f922a195eccb50de8b3"],["/2020/04/26/Review/我們都無法成為大人/index.html","45a564f6d62431f088f258144c4df2a8"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","691314b83e58778cbdafe14784620e87"],["/2020/05/17/Review/人間失格/index.html","bdfbf26ebc2ba161165ffbe8e2e1019a"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","0b5a92eeeeea06dcdd43d123aa26be98"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","135b8f5d34977bc4117e34e8d891785c"],["/2020/08/01/Review/銀河鐵道之夜/index.html","9fe0eca55908ee1f573ce8ef46ac99d5"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","289602d205d2390f46e92fc8551bef79"],["/2020/08/16/Review/15歲的恐怖分子/index.html","86cfa2fa2960911f9f1e17a6bc615a7e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","6ff6c48a0e6d6e63a811cf93ba97f6e8"],["/2020/09/13/Review/羅生門/index.html","cdcf1c9b23aa52c9f8cb2c615670194d"],["/2020/09/20/Review/闇夜的怪物/index.html","971e1f0463a79b7aa78db5eb5e62691e"],["/2020/09/27/Review/14歲，明日的課表/index.html","384bbadf34c3d539045065a020bb75c6"],["/2020/10/04/Review/致十年後的你/index.html","8f4801843eef87b5c44cd40c616fc2d5"],["/2020/11/08/Review/滅絕之園/index.html","1d9a370b28477d65a527e445f7246780"],["/2020/11/15/Review/將愛拒於門外/index.html","9f63b229012d8518cb8bb3eb94f61d88"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","0f5ea16f2e3ede22cf707bd2eed35ac0"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","b6770adc2842c1cbe9ffb4fb00b8f531"],["/2021/04/22/Review/道印/index.html","e2efd6afcce0ce2712d727013e708090"],["/2021/05/03/Review/戀入膏肓/index.html","6eb40d73b8f83bc936b892e9c6961100"],["/2021/05/10/Review/Dice/index.html","bae048be2acc5292301c71e5928f9e73"],["/2021/05/15/Review/魔女之旅/index.html","1d70eadc00912efbfb4143e11f1e503c"],["/2021/05/28/Review/戀愛寄生蟲/index.html","7a632aaadedb854f739388cc701da272"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","4bd1b93d19da4bb10ae4005926de46c0"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","8d28de8efa3f29b038901b44c4f463b8"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","5ab6b4e612ba7b2455b95f33106dd47e"],["/2021/06/05/Review/流浪的月/index.html","813519f6f157db6bb135c0d974fd6d5f"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","c5a74a64cb156fb4f4b2faa643d2a032"],["/2021/06/13/Review/第一人稱單數/index.html","82888ea1fc5595a6a030c012ca3ad2f1"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","1dce9ea37321bea2e79e86ed7f4573cb"],["/2021/06/16/Review/願你幸福/index.html","2d7c079c94fe4e7d5aee787bde35466f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","d7d25c11f0dd6f3c066ca9a0305c6861"],["/2021/06/21/Review/神隱少女/index.html","5b7343154ee5343e11b67aaf413f527b"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","e5141742b07238c0289665ef56fb7a18"],["/2021/06/23/Review/天空之城/index.html","4ba0f99efa3c53ba2cdc2a1fadf1a8ec"],["/2021/06/24/Review/魔女宅急便/index.html","f241f978dc92ddf3fd1c0eae55667eb2"],["/2021/06/25/Review/借物少女艾利緹/index.html","e46245118555c5f4103d154f2fa0431b"],["/2021/06/26/Review/魔法公主/index.html","d15d1fbd9a3b8774af76a0c94023d1bc"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","0e1239d21ea3111e95ccd095f5db06e4"],["/2021/07/04/Review/飛雪與劍/index.html","99c286b343a41d9b3ff01d407cd5e069"],["/2021/07/09/Review/地球防衛少年/index.html","40b871eb1137ef6a94b5239d3d1508c8"],["/2021/07/12/Review/Angel Beats!/index.html","66f9e1547c7588defec7b70e1984dfb0"],["/2021/07/13/Review/Clannad/index.html","1c838c0e5ddcad551776febb5ad7eaae"],["/2021/07/15/Review/AIR/index.html","f0b3131bc64853467beb7c7870e12051"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","4238f23ebfaad040c2c660d51d002f08"],["/2021/07/15/Review/螢火之森/index.html","03c682b1b0d2d5323b96d27a31c7304c"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","79e390625ef1a5d3c2d0c4e19a8b04fd"],["/2021/07/17/Review/奇蛋物語/index.html","9e14bdf45f85b615f94d477fafb2d4c6"],["/2021/07/18/Review/Vivy/index.html","521392aa2e77683d4ec22fa3a70bd371"],["/2021/07/18/Review/請妳消失吧/index.html","5f2bb08d93fc5b7fe02772b2773809d2"],["/2021/07/19/Review/漣漪的夜晚/index.html","3d3d04c191877b22ca12ff6e35ee8c43"],["/2021/07/20/Review/月色真美/index.html","de5cf8ed40ef56a6bf203792c14656bb"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","ead1892e78f4576b48f63c38fd0b2311"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","0277c7e057564819ae94b7946ec4c954"],["/2021/07/22/Review/罪惡王冠/index.html","f4278f9b8a130b984ffaf66607e78e0e"],["/2021/07/23/Review/弱角友崎同學/index.html","652e05cae344bcf76212fd89b9df330e"],["/2021/07/23/Review/惡之教程/index.html","1d55b1126278d73e41b37c91ddd86903"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","073bdd944ac47959a20761fa982af473"],["/2021/07/25/Review/魔王勇者/index.html","d8be0c4cc324a9fd3a08d6583b6ac479"],["/2021/07/27/Review/一年A班的怪物/index.html","a61e8fb89eaf79e45a4697ed3af67c7d"],["/2021/07/27/Review/奇巧計程車/index.html","79eccdcdc4f12f9d4c39dc4849793717"],["/2021/07/27/Review/專情的碧池學妹/index.html","452dc6c7b330851a3766fae1fb5e550b"],["/2021/07/29/Review/只有我不存在的城市/index.html","d199dd9e06e723993ada4b41c8437d9b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","11a04206a0de861e8180b182362f3f21"],["/2021/07/30/Review/可塑性記憶/index.html","783a18ca585f37a64ac1ba4e965bb3ed"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","cf9db36b4fffe1134a2104d802148a69"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","9b2887db22cbecc55bb7201a75414e78"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","cf162eceff979811710e63ddec4c030c"],["/2021/08/25/Review/清戀/index.html","476c2d6613a8d6022832b98f3d250d75"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","6d8a50de05b86373524522215931408c"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f3fa0085b7c4970a122b1c4d8793c628"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","be2c90f08bf7cf4d09ed27862bfa6759"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","291ed16759dbfadc938d1c3d6229221b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","de9c62be2ca336d19ba3ac583dfdc99e"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","6a6cbac4356c4ae8f054572aaffb417c"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","e218ad9263da9f91a1a315e425b38b2b"],["/2021/10/16/Review/龍與雀斑公主/index.html","3738066331f329d69422258f57af7a02"],["/2021/10/19/Review/孤狼不想開後宮/index.html","f7c2111259df27210d19d96f86c69aa7"],["/2021/11/13/Review/徹夜之歌/index.html","0fdbf4b0baaeae8da1b4b112c259123c"],["/2021/11/24/Review/武煉巔峰/index.html","837b8bc39f7aa519842941413251b5be"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","55c7c7b8a51c149f893a2b5c6410457a"],["/2022/01/28/Review/神醫凰后/index.html","dd239ddee601fc83295246d5ac37d607"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","8123c16445f3386e556ec1290c77bdf1"],["/2022/02/13/Review/夏日幽靈/index.html","84271df604ce70f5848f7f16a0585494"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","0ca1a847e9f59798429ac2c582208be7"],["/2022/02/26/Review/賽馬娘/index.html","8e275312fd361a2acaf32a682dc8fca1"],["/2022/02/27/Review/大欺詐師/index.html","516b7559f78d7d354c30dac0c4819b3d"],["/2022/02/28/Review/前輩有夠煩/index.html","fb9ecc69115348444e087e57eabae6ee"],["/2022/02/28/Review/碧藍之海/index.html","b799e40e34802b744b23ffcfc022f88f"],["/2022/03/05/Review/落第騎士英雄譚/index.html","49f23ac8a6cdc3d57312ec7581bac23a"],["/2022/03/06/Review/Another/index.html","9264d0a832e28555f2fe2f4a7da3830d"],["/2022/03/06/Review/入間同學入魔了/index.html","6d3b7fbb2035546368b7e1dfcb0d9c5f"],["/2022/03/18/Review/再見宣言/index.html","b411eea1d93eb33e9992a8b317b139a0"],["/2022/03/23/Review/生若冬花的妳/index.html","52f813b1cf4fe0b4bb16ad318113e392"],["/2022/03/25/Review/天之弱/index.html","c7d7d475de26f07b753cd2124a4f877c"],["/2022/03/31/Review/滅了天道之後轉生/index.html","afa72082585e82f873f5da31dd884139"],["/2022/04/30/Review/泡泡/index.html","8c5033c32c80f29714331c8981a1c99a"],["/2022/05/04/Programming/Dynamic Programming/index.html","5756afef6144e4c511cbfb750ceb5446"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","d1523c2213f12d3c241d3f7c811e0986"],["/2022/06/13/Review/偵探已經，死了/index.html","758e9cab2730d0f0ed20089b6b49da17"],["/2022/06/14/Review/黑色子彈/index.html","c897313c859a916a724e6230720740a5"],["/2022/06/15/Review/黑白來看守所/index.html","6c3e9981f118c88c4f8700e6b844d9bb"],["/2022/06/16/Review/虛構推理/index.html","c2461ca80ede1b44ef632f242ddd5947"],["/2022/06/17/Review/戀愛與謊言/index.html","7bb87026e4971df726d64bffe9d2d1c5"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","32e15ff09dc22b9e7f4884412318d703"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f709081047ab04f4ef428392a0170a0c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","552ab448cf7607ff90a8c8ce186a36a4"],["/2022/07/03/Review/Hello World/index.html","b85ee9350e2cacd54387902b6b52f492"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","b78cf1e6654b22bfef3aeb51b15b8d83"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","79fa7989f1950d3a3e37ffc753aaf112"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","74bb06c2b14fcae27cc0220dddb8d2fd"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","d3fa2747c081e7316269cac6be3c0977"],["/2022/07/16/Japanese/動詞分類/index.html","8090c31f6f84beda3d4ea122b2ba8b0f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","db07e8fa19ca14a680a438edd4399fef"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","0acf6cd55ae86aaf8ec6bdeae86ed5c0"],["/2022/07/17/Japanese/音便/index.html","11b2ba9d1447885c25fc5020a776f47e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d7e39caa99ff1129ef8724e002a1edc1"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ab0cbdc8c47de2732560ad2b9dccfc1d"],["/2022/07/26/Japanese/助詞用法整理2/index.html","2322d6a971a8cc30249b1a4b2d57a09d"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","712b40703012be9be022009aa77abd20"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","e9bbd0fc6b215e73f634872c0756b25a"],["/2022/07/30/Japanese/疑問詞/index.html","38d3ab653eabe8d4584f7165419519d6"],["/2022/07/31/Japanese/助詞用法整理3/index.html","1a943d025937b28b716eb00aeb483381"],["/2022/08/02/Japanese/副詞整理/index.html","cef503e26a8c873c70072209d64ce6bf"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","b6b0d6c7dcac30157292a96d015c35e5"],["/2022/11/04/Programming/Data Structure/index.html","96dd1136c5270cb7a92d83798fe2b039"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","def9e3506e4f873782f09e9663948d9f"],["/2022/11/22/Review/組長女兒與保姆/index.html","69279a18e2ded44b68a28eeb17c12eed"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","a966b6308af4d9e7c323d0d97e05ee17"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","2b09167447ead3ebac88db0516f20c99"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","d7982142cf561328c2a4f0630f504f67"],["/404.html","258bece434bffa330edfe33bfdd35058"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","4133e68a5c647a8c577c359476d31291"],["/archives/2019/11/index.html","f98be9b642fca9bad76dd1c981cb1945"],["/archives/2019/12/index.html","d015ba0d8cd192231d5f37373d6f370b"],["/archives/2019/index.html","b5d8349f4824b24aad03732a43e53a2a"],["/archives/2020/01/index.html","6d84d409b9f66ffeb823e655a8a4c7a2"],["/archives/2020/02/index.html","b7a6bfee6cbe221e3fbb02c49a3f1967"],["/archives/2020/03/index.html","eaa3b4a6b6b756915cc99c8f0cefb91a"],["/archives/2020/04/index.html","96d8917f4a5dac2d6705bf9c34a59afa"],["/archives/2020/05/index.html","7939a923142fa749a56cb1c783ca87ec"],["/archives/2020/07/index.html","791407324738846f405652583569d0c1"],["/archives/2020/08/index.html","da0b74e5e5abd0f197c8f81b2e2b234f"],["/archives/2020/09/index.html","2ef0897b11c2c3f45c8b4844b58a16b9"],["/archives/2020/10/index.html","b1d2020af176d56eb59c1c71808c42b2"],["/archives/2020/11/index.html","0b02486c37c5e245cba964933a120dad"],["/archives/2020/12/index.html","776be1c24156bb9fc6b7119cb4345703"],["/archives/2020/index.html","65997a37721abc4fb9870cd1023ef424"],["/archives/2020/page/2/index.html","e5d9d9e2cffd8ff21962f574d28000e0"],["/archives/2020/page/3/index.html","7ed77bf12bafa0cafd498ea6c9ccc149"],["/archives/2021/04/index.html","946c6791dfc60e48169068e51b0007be"],["/archives/2021/05/index.html","b6d98a90fb5db0b071981993b8c379ae"],["/archives/2021/06/index.html","e3b0dda2a829fb34b6c00d5959aca102"],["/archives/2021/06/page/2/index.html","5311a7d440b04b33f780db57537f91cf"],["/archives/2021/07/index.html","0b18070af7f10152a1478b619b7a0338"],["/archives/2021/07/page/2/index.html","1e62db3a8501d7c3198c36e530bd1093"],["/archives/2021/07/page/3/index.html","cbfe00b1c6e7007f6d527f6270e2b06c"],["/archives/2021/08/index.html","d0bfbb93427bd3cec9548dd05cdff6e5"],["/archives/2021/09/index.html","26a77dad6dd97c759e28b8d44fba642b"],["/archives/2021/10/index.html","79b0a60c407a6b9188f71a3ba7126262"],["/archives/2021/11/index.html","656232ffbd9e3926dc4dd31b8566c6ad"],["/archives/2021/12/index.html","1e5712dc956a2501828a898c26f292f2"],["/archives/2021/index.html","a11a545a61ed797f86a6c2946abba608"],["/archives/2021/page/2/index.html","b9bf11e0c1a789cd8f45c3c574b77b05"],["/archives/2021/page/3/index.html","37bacf41a7fc10dbdb96870ba9a97c0c"],["/archives/2021/page/4/index.html","b2dc0949be061fef75a18fafdcb243a3"],["/archives/2021/page/5/index.html","9440291e0227797e0e0e9f2916ba747b"],["/archives/2021/page/6/index.html","4c03958963940f623c7778c1fab261a1"],["/archives/2021/page/7/index.html","c22d33036be8a6879355c4d5d7a32cfe"],["/archives/2022/01/index.html","a9d6d1f780c703e2e1431c2839cb3fb5"],["/archives/2022/02/index.html","df933d5b0beefe78c3dda9928470da74"],["/archives/2022/03/index.html","7c09e93eb5c84a99b473d31e66eab22b"],["/archives/2022/04/index.html","033d2399d23d8bc272e2755beb758886"],["/archives/2022/05/index.html","f64913f7c6095bf36efdde024f149222"],["/archives/2022/06/index.html","4304054e3067e2bf75c0718fe4c766cd"],["/archives/2022/07/index.html","4f603a5a4e6b2849e4b14e2f1f3ef5da"],["/archives/2022/07/page/2/index.html","6645cb97ffbc293bb61b0620fa56375c"],["/archives/2022/08/index.html","e3e75da27f9530e76e393cb6aea2c18c"],["/archives/2022/11/index.html","f4cc8c7bbc7ef02bc119980b2f687216"],["/archives/2022/12/index.html","b34784b9997064b7c0dd8faf534b6036"],["/archives/2022/index.html","d397f11f137cf481a7b7eb59ac74dd33"],["/archives/2022/page/2/index.html","e0447c1315589b5ccbc5fdeccf8b1628"],["/archives/2022/page/3/index.html","7abc55cfcb40c39f68e24ebcec83b47f"],["/archives/2022/page/4/index.html","09659bbdf8a7f5bfb9f7f7644392bcd7"],["/archives/2022/page/5/index.html","525162b42f7e59b06b8e06beca6f8495"],["/archives/index.html","f7cf3005f45b8488af156d75e69ea010"],["/archives/page/10/index.html","482bd1689277a366a2a999517d6e002c"],["/archives/page/11/index.html","966d97cc5236128b388881a1fb356b46"],["/archives/page/12/index.html","0b62fa24bb32ba7955f92610f95d9fc9"],["/archives/page/13/index.html","866233fc33942cc5c06ce48e5b3bb1cd"],["/archives/page/14/index.html","97fc696fc529d8b2ce4584bf6c9ddb55"],["/archives/page/15/index.html","82815e4b73c614c8fc62300756279a20"],["/archives/page/2/index.html","4a330203269a7d49977274ce935a5fa2"],["/archives/page/3/index.html","dad49f5c873bac9abf0959bc3ff307fc"],["/archives/page/4/index.html","7a88daa940d19ead3d0134d7ea9335ed"],["/archives/page/5/index.html","a5b4b5434df61bfbc0875f1e8f02a073"],["/archives/page/6/index.html","20f2ff8f84bdac829e453b781a8aaa2f"],["/archives/page/7/index.html","631fb4cb84c8423b662513d7c4acd7e6"],["/archives/page/8/index.html","98bebed3ca747c579eb2411a09cd8f6e"],["/archives/page/9/index.html","8115d81df419eae8d1409b6f732e1bd4"],["/categories/Programming/index.html","fab47a8d5eec44ba085e2e15f8a2aeb1"],["/categories/Review/index.html","5e5cc03654084283ca6937d3fc38c099"],["/categories/Review/page/10/index.html","09572a8198c75695797cc3007cc2917d"],["/categories/Review/page/11/index.html","61208ac880b8800edabbe9bb4c20712a"],["/categories/Review/page/12/index.html","b909981f4faa1d715be2c12d131e828b"],["/categories/Review/page/13/index.html","6bbb627a3d930a7b167ae7a95af627bb"],["/categories/Review/page/2/index.html","113db5e9467bdb63e9ddc27e6e45519a"],["/categories/Review/page/3/index.html","be6a3c6079b3bc209d8e5c8afcf4fd04"],["/categories/Review/page/4/index.html","5419f4803d013a959dcb31819702720f"],["/categories/Review/page/5/index.html","16bd8a4bf4d5731bbad6d21f8c7cfb16"],["/categories/Review/page/6/index.html","9b6df7e109361a7d911a480f86334e51"],["/categories/Review/page/7/index.html","9590b356f7813e2655c8c50fb3a9ff0f"],["/categories/Review/page/8/index.html","ad71523a8a095deb82156756c6727ae0"],["/categories/Review/page/9/index.html","91880261bd05f48025d9b1da4f4a4421"],["/categories/index.html","c912775d3cf5756fc9f74f42df618317"],["/categories/日本語/index.html","f54e87c3899312f8073292110dbe871b"],["/categories/日本語/page/2/index.html","61fb854da0e3812563b1aee25da975ae"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","95ff7d103634390349fb2ad86bb0c78e"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","fdd40cc518e346afecc44ab922916303"],["/page/10/index.html","a7cfdb15432bed277bf93467b79e3868"],["/page/11/index.html","d61c0c0fabeed1a7d9128810cf5ee1bd"],["/page/12/index.html","e9d2c276637f97afde0098d11d5e86db"],["/page/13/index.html","1cd3c2822b6b70918d60457a00823388"],["/page/14/index.html","4af6c624ca50419a8560ae8c24ae6129"],["/page/15/index.html","8aebba141ed82df15213f37d54c40b2a"],["/page/2/index.html","320a8882fa085d5181cf080b6414ffef"],["/page/3/index.html","1edcb7a9e3117c14ad9c111a4ba76b95"],["/page/4/index.html","a4b92ad379c308a5681982194122aa14"],["/page/5/index.html","5945f17b258686272d9f62040633b14e"],["/page/6/index.html","97ac446cbc2abdde6c82d2905a6583e2"],["/page/7/index.html","7decee9a361004bb3b86c501458c9817"],["/page/8/index.html","8e35a5475aa9636a51799cceeeab81e7"],["/page/9/index.html","9e5a5613b8e13ef2ecb3650c6bea983e"],["/sw-register.js","ba752017d84d84c1e2fbe1ebbd888444"],["/tags/10分作品/index.html","edb6d237a99e615c0595d79a4517f76c"],["/tags/3分作品/index.html","f0483f4b1015b85a5335913200f3ff8f"],["/tags/4分作品/index.html","8c3ae1728b249423060f0795125657d5"],["/tags/5分作品/index.html","c3dc5d15068bfd7a4e3f18b30a45636d"],["/tags/6分作品/index.html","0c5b7aa8ff876ae1d8200932645808cd"],["/tags/6分作品/page/2/index.html","584c8f33c12a89bd026c8de23e83217d"],["/tags/6分作品/page/3/index.html","4fe78b13c0da7037b3c8a481b793f1f4"],["/tags/7分作品/index.html","6de1d623c2e1ee45fc53f1520c99ecfd"],["/tags/7分作品/page/2/index.html","999cbe750cb07b1129e182a2978294b8"],["/tags/7分作品/page/3/index.html","a3b8e3938135183f6f5ceaebb268c74f"],["/tags/7分作品/page/4/index.html","041fdd09d21aa83cfb543531145aaaa6"],["/tags/8分作品/index.html","96d7bec2198bd24db53cecc8bfe042b2"],["/tags/8分作品/page/2/index.html","f8f8174eaf62e7b3a38dde3c9c7d71a1"],["/tags/8分作品/page/3/index.html","f0e8afa45599c2ef5abf28c661f2c8e5"],["/tags/8分作品/page/4/index.html","d55fa2640b611e0a8818b9ca6ec42146"],["/tags/8分作品/page/5/index.html","cd21a05245c4c36bab5fbc70115128f7"],["/tags/9分作品/index.html","8406a95adc0bc992701b1dd45c0f6065"],["/tags/N5難度/index.html","03614e5e102d5e263473d13bbea745ba"],["/tags/N5難度/page/2/index.html","bb8e3728593035e14f633cfb6accdb04"],["/tags/index.html","040b6f4dd1d88a4bbda9082525e3b275"],["/tags/アボガド６/index.html","8bf9fbbc1773898f3121fd1ace65625e"],["/tags/三秋縋/index.html","f9c173db266cf0026c96712699be27be"],["/tags/中國武俠/index.html","24a1201f70653e1e71df886189e1c983"],["/tags/中國言情/index.html","085bd299abbf31db2c2d2cd910a3d6a9"],["/tags/二宮敦人/index.html","c1617bd341558c769d4401cc00896401"],["/tags/人性/index.html","c38f48aeed09f0adfa199c41e1d41f2c"],["/tags/人際/index.html","eb8f80a42188676011c954f6f4628397"],["/tags/住野夜/index.html","8eb420a264bd419fbfd2a38c149f29dc"],["/tags/佐野徹夜/index.html","31d92462fe95f289f048e616f34233e6"],["/tags/努力/index.html","be5bfc9404734d6356bc08a20a0b2549"],["/tags/動畫/index.html","18559c9e5bcf10cb7f5453d600455255"],["/tags/動畫/page/2/index.html","f6f3c73b87731c2f65e84de17756d2ed"],["/tags/動畫/page/3/index.html","5487680a5b3232344e94ab451d0d4a26"],["/tags/動畫/page/4/index.html","07336b2ec5af9f44a27ba319bff9a8ed"],["/tags/原諒/index.html","27f8b080d8d6ccad7b7c5bbd56850c87"],["/tags/反烏托邦/index.html","f4370256bba52a8048e42aa7e7c2328c"],["/tags/啞鳴/index.html","8c3f776a067ae1885647066f4fa59e05"],["/tags/喜劇/index.html","a4c5299230ae431f79e39a58f61c2014"],["/tags/夢想/index.html","93afed9956844a9f9c83081c911a16a9"],["/tags/天澤夏月/index.html","d4e7bb7097e7ef99b4bf9a2b5582f388"],["/tags/學習/index.html","4e6f16baaea6748468f93185d4bdc003"],["/tags/學習/page/2/index.html","a2fce9ab03a1e66b0b4ea00ef921b082"],["/tags/宮崎駿/index.html","0dcc9027e3d6ea6aa3cd3974224b9f1a"],["/tags/小說/index.html","d0f6627ffcb48b5cfed7003ffaf323b1"],["/tags/小說/page/2/index.html","ac457ab63fb4016d873a18d90db0d6a6"],["/tags/小說/page/3/index.html","2d7d2562bfe99d68c98ebba93f0c1e76"],["/tags/小說/page/4/index.html","a786f91b22cd977aa7afc7802aece15c"],["/tags/小說/page/5/index.html","9b583fac5d6eda347568ef719831e010"],["/tags/小說/page/6/index.html","afb4a0c7f54bebc5f60302d4d0fa771f"],["/tags/小說/page/7/index.html","5d0e4818481733cc4e5916b4583e36cc"],["/tags/平淡生活/index.html","239d28ce5433f32d2dfc2770a0115b3c"],["/tags/幸福/index.html","90d6cdc8e8d65ad1daf2538938abec87"],["/tags/志茂文彥/index.html","07720d6b383a84681ff3b76f24612fcd"],["/tags/愛情/index.html","17e4b7702ae85ecb0f061a1a829cdf5f"],["/tags/愛情/page/2/index.html","5aadc742ec54377e1feea990f17372c0"],["/tags/愛情/page/3/index.html","471569612871fe2fb2d4a2f22c4b66db"],["/tags/感動/index.html","0e77b6661ec2450cc839ee6a6fe5c34e"],["/tags/懸疑/index.html","a83107897ba60e06d2a716d0a95e8fbe"],["/tags/懸疑科幻/index.html","e3aea9a3aa26985de80df43d5ffcaee4"],["/tags/戀愛/index.html","4b6055c2e345155a22019ef54649893e"],["/tags/成長/index.html","6f820a46b48a60870d2e0f7cbf6034b8"],["/tags/成長/page/2/index.html","db7494f2891e4a319c59d8e50176a9af"],["/tags/戰爭/index.html","1e28c5bc8225ac93988460101e5b61ce"],["/tags/推理/index.html","1cf9f32d70442a114db0f4f82328f977"],["/tags/搞笑/index.html","2b3e9a036bd0a85979468fc4ec7ed474"],["/tags/救贖/index.html","8a94b5fe67015e5c6c35dc8b204179f7"],["/tags/斜線堂有紀/index.html","a82fe1e942f4af925833561101dadc08"],["/tags/日常/index.html","2be29ac605d26f1bed9cfdd70d8d01bb"],["/tags/末日/index.html","edaf76b81eea3c100401bc46728a0f47"],["/tags/校園/index.html","b047f1bbfea3f7b97edf711abaabfccd"],["/tags/武俠/index.html","9de452b34c9c37267b8619c6a2867e09"],["/tags/武俠言情/index.html","e621caffc25764b2e1990aa78ebbd595"],["/tags/漫畫/index.html","a85a0419ef80689408c8effb88a27546"],["/tags/生命/index.html","0996a5d3297542af80835b879fbc2ddb"],["/tags/生命/page/2/index.html","bc43cbd7bef8b3fc07ad71e164b5d002"],["/tags/短篇/index.html","49ebe735a52fdfc2ce58bb4174c0686a"],["/tags/社會/index.html","14a18b32a6830a736cd65376b88b6491"],["/tags/科幻/index.html","543256ecdc89b40b959ab61f7b895a7c"],["/tags/童話/index.html","bd08bf2d5685eb33aa962b7f186f1dac"],["/tags/競爭/index.html","6c4ccc4d482d60baac0f4f05dea9a289"],["/tags/自我/index.html","b35206b45b44cadbe70bb3034a05c960"],["/tags/自我認知/index.html","3e514ad1c931dbcfb1d3d343d8b47c85"],["/tags/葦舟ナツ/index.html","ecee3dbe5c8c6d3fb2205bd39f4b6f53"],["/tags/藤萬留/index.html","dec3b116b54bce14b90ffdf929293142"],["/tags/親情/index.html","8278d8950b580d9c9650772edbf2ff15"],["/tags/雜項/index.html","e08c7f7b315d47fd6fdb1596cdfe6874"],["/tags/電影/index.html","a60680a8d226b20fd47043a418f2bf5f"],["/tags/電影/page/2/index.html","d6686c207999b5afcd0ac343fd436326"],["/tags/霸凌/index.html","173869d73cb0c96993073569988518b2"],["/tags/青春/index.html","431fdb80b8f9f6aa1823c7876dcfde80"]];
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
