/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","5bcdd8c0850e8821a11ebd7f54481c37"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","558b974b1034876ebf3b7ddd909b5fd3"],["/2019/12/25/Review/無法計算的青春/index.html","bd6609e2f22155509ba6462c96215e10"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","f44207817cead01b77db1889966e7376"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","11ae4ec7b4d99bb21121a2b0a925b927"],["/2020/01/19/Review/下雨天，不上學/index.html","b337353a6b7a569c341fca557be4ba45"],["/2020/01/26/Review/三日間的幸福/index.html","06bc4c0c976cb8136cd72b008486d23f"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","7165ea40cd832cee1c9628dfbb903c48"],["/2020/02/09/Review/青春期超感應/index.html","67d66f5f434552a1a5080e6e01b8cefb"],["/2020/02/15/Review/又做了，相同的夢/index.html","294cb781473c3a3d11b0e2525f64c844"],["/2020/02/22/Review/回憶當鋪/index.html","3f1ce3a7081990bb05d20177de15e88a"],["/2020/03/22/Review/不適合自殺的季節/index.html","cf984ee7c46d9292bd7d287eb214c3dc"],["/2020/04/26/Review/我們都無法成為大人/index.html","f064b301a73ca1281d6416898dbeca90"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","eb21ef8ecc205bc4a9c2fa2f1aedd26e"],["/2020/05/17/Review/人間失格/index.html","689b469a9a3d80b3edd9974acb5f6ac7"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","bbb45ed9f579c38d88324f24970ba35f"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","c85bdfe7f826e84f2453079e524caa25"],["/2020/08/01/Review/銀河鐵道之夜/index.html","017e8207b849563739bc789550c71848"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","4cd579e002ca741f8a10013ef36fd091"],["/2020/08/16/Review/15歲的恐怖分子/index.html","2aa42581bc41b3e316f562a7d86dac29"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","c23f76b9328250b33339674707867856"],["/2020/09/13/Review/羅生門/index.html","a9d07711fe617ef8e665e08d7aabe301"],["/2020/09/20/Review/闇夜的怪物/index.html","d1052ef4a6a04546321ca25b4bd43fa5"],["/2020/09/27/Review/14歲，明日的課表/index.html","748b465d6aa070b9fc1c95f26a9f655e"],["/2020/10/04/Review/致十年後的你/index.html","e563253183f36579bbc05feeb004ebf5"],["/2020/11/08/Review/滅絕之園/index.html","e5e3045405436ad069ab7701e9c30798"],["/2020/11/15/Review/將愛拒於門外/index.html","1b1c761f02e7e9af47d20e3b0a8a4b6a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","a15e5b0e75fc3011b2d5512eaf0f1992"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","63c6af5e1c5674d1a36f8d48d0ca95fd"],["/2021/04/22/Review/道印/index.html","acc5196500e0284f71c51f7bed7abe6f"],["/2021/05/03/Review/戀入膏肓/index.html","d694823f72c72bbceaf9e1581615f0b2"],["/2021/05/10/Review/Dice/index.html","46eb8735074c9089f2aff7441c6f2379"],["/2021/05/15/Review/魔女之旅/index.html","192ddfc642757a68612ab6fe5b92dac6"],["/2021/05/28/Review/戀愛寄生蟲/index.html","2c3dc720f8436dc21e56570d02910043"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","f4a43c01840250eca2978eeb28597c8c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4a19adc618dca4f68663b93b08a0bdb8"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","afddf158a90e8ab26382038c9c47f0bc"],["/2021/06/05/Review/流浪的月/index.html","e0261936435e91e81ad1e2bb45279dc4"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","c83c2953ba9292e708c233cfe6666ccf"],["/2021/06/13/Review/第一人稱單數/index.html","e5102a4ae49dc0df3ef07bb88c04428f"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","f9b5538151cadb90d8cde090d4903254"],["/2021/06/16/Review/願你幸福/index.html","41574b5e0ba670704e2baa1728ee4031"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","e208dde8e8cb876bc693e4ed476ee8b1"],["/2021/06/21/Review/神隱少女/index.html","a26db8da56b3ba844d27c7d9bcfcdbf0"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","180a543ba3561937259677982c7a9061"],["/2021/06/23/Review/天空之城/index.html","4a9b63249af368a2217de5966c40f94d"],["/2021/06/24/Review/魔女宅急便/index.html","e6ec1d81abec0ebb3da4ab0fc7213a3b"],["/2021/06/25/Review/借物少女艾利緹/index.html","c330951d5b8390e259aecc14044b4e30"],["/2021/06/26/Review/魔法公主/index.html","10e43118f8bbe1abd5a846cff60b11df"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","e820a67c085cd4f3c97e82be1b723a6e"],["/2021/07/04/Review/飛雪與劍/index.html","275b61b4360f871f21dfe23136849844"],["/2021/07/09/Review/地球防衛少年/index.html","41348485071179d0cd77902b898b2297"],["/2021/07/12/Review/Angel Beats!/index.html","01ec5ea3e7f0150df2bb3ea4a919f5ee"],["/2021/07/13/Review/Clannad/index.html","7d3ec1c094f1a47df9fc146ae5e61036"],["/2021/07/15/Review/AIR/index.html","247f71ac6bb3e4a67d9c037e286cda3d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","f6a767aae8a327af98dbb7c165e5abeb"],["/2021/07/15/Review/螢火之森/index.html","b99e260efc9a85b741a58ad00ca04b1f"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","3d18f2eb1b54a4401b5c9566c427aef8"],["/2021/07/17/Review/奇蛋物語/index.html","7bda121fcbe4426e0d90f3beaf8655db"],["/2021/07/18/Review/Vivy/index.html","0f6a280b6eea4e9ab3e2a89f2f532c3b"],["/2021/07/18/Review/請妳消失吧/index.html","5a5f95ceae20afcbc612b5b50242ec0a"],["/2021/07/19/Review/漣漪的夜晚/index.html","e23876d4c5fbe02707f76712665a940c"],["/2021/07/20/Review/月色真美/index.html","36dc7444abbfd1b83a5bdd4039a2f3bf"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","d353cb5f5a745ee1fd3d8400b01e10d5"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","7bca1039f34d0d79e6017e50f7ad1f41"],["/2021/07/22/Review/罪惡王冠/index.html","f52d334d456daef72e7b9c9350c3bf03"],["/2021/07/23/Review/弱角友崎同學/index.html","feba5a4291cb0ae1eb54cac61a4b35d4"],["/2021/07/23/Review/惡之教程/index.html","8a3d8efce8dd3738b279fe6e723be909"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","72173dd8de80802669769430044a2847"],["/2021/07/25/Review/魔王勇者/index.html","808f35ea30f6a3f5f71184506184d72d"],["/2021/07/27/Review/一年A班的怪物/index.html","c84dc8eb9828185e58670fd762b40303"],["/2021/07/27/Review/奇巧計程車/index.html","031c69daf6811700723571ca55a66de7"],["/2021/07/27/Review/專情的碧池學妹/index.html","8860c523079de934d7d333b7b952e536"],["/2021/07/29/Review/只有我不存在的城市/index.html","232beb943812b56ebbc6a1b746f3753b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","d36d4d4b3cd6a534fabb81112da5d4c7"],["/2021/07/30/Review/可塑性記憶/index.html","c54b46af11432cca76baa0b694e90d3f"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1172134ca75c005c3de466f8d6b0a76d"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","c48efae5c6520988e07c378407287fbc"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","83d886fbd0b8d7a015e0597fb4750ca2"],["/2021/08/25/Review/清戀/index.html","b876bb85591007fd71ec5a0b32174da4"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","47794bb5eb3b6e200f406e641ab5940c"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","3c8f2d6ec682149192d339904da9f1cf"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f87d0db7137af013bed955d33f553c09"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","d0fccd17e468e4dbf9d3a2fefecb40e2"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","f5e1aebe9e11096df236c76fbf2b52d2"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","af06fb939f3ae243d9c15850005ba89d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","1e54c646a6c353ab383d188f7b511793"],["/2021/10/16/Review/龍與雀斑公主/index.html","a7aafb43f16527dbc259f92c5226f452"],["/2021/10/19/Review/孤狼不想開後宮/index.html","718f1138c9e0b2110d45dc2bbbf02d2a"],["/2021/11/13/Review/徹夜之歌/index.html","247e96beea5c28d4c17afd0fc86a36d7"],["/2021/11/24/Review/武煉巔峰/index.html","f68b67e2c92e3827af6de0bc6c57c092"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","19d533b34ec00dc08c7a94cf8de6d9d5"],["/2022/01/28/Review/神醫凰后/index.html","a5ac22088bb8fdb8e709ffdeb7d98885"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","73cfc5b5c2ea4572635bf3d7e02a6628"],["/2022/02/13/Review/夏日幽靈/index.html","641a0e1ed3accba0ab2b7bd76de381a9"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","7780189de8349122ac340362e56d1516"],["/2022/02/26/Review/賽馬娘/index.html","2dc899c151e5fc1d0ae0c10a3360a055"],["/2022/02/27/Review/大欺詐師/index.html","db1306f221736768ce2927e551090d34"],["/2022/02/28/Review/前輩有夠煩/index.html","265893d3c16ecf522eed59fbe59e7c86"],["/2022/02/28/Review/碧藍之海/index.html","a9926013078bbef284de789a09ab3381"],["/2022/03/05/Review/落第騎士英雄譚/index.html","bcf088ebedb47ba1763240546205fb44"],["/2022/03/06/Review/Another/index.html","d3398df619f17c5664dc3bd44872df18"],["/2022/03/06/Review/入間同學入魔了/index.html","9a477d0065442738a93bc30548cac2d7"],["/2022/03/18/Review/再見宣言/index.html","98cf21de03a517c804bddfa956425dab"],["/2022/03/23/Review/生若冬花的妳/index.html","db75e6d628280b7c84b93977db90f5a5"],["/2022/03/25/Review/天之弱/index.html","961d0266004ee40a8c3887033d4c1598"],["/2022/03/31/Review/滅了天道之後轉生/index.html","ed68b9d6f13dbc412564393d64f86e5b"],["/2022/04/30/Review/泡泡/index.html","bdd64cc7f08feb12d7e7acbbffb038d0"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","62eab8b5e8ffb1b9b09d0f9aca3737cd"],["/2022/06/13/Review/偵探已經，死了/index.html","080e78655327a64ad3ddc17039405292"],["/2022/06/14/Review/黑色子彈/index.html","4cb7c4a6a833d2bf5e3db02cc66bbef6"],["/2022/06/15/Review/黑白來看守所/index.html","b6fe6dbf91c305723cd269aad5241d47"],["/2022/06/16/Review/虛構推理/index.html","4afe1b42c0db6a858a4b500ddd824413"],["/2022/06/17/Review/戀愛與謊言/index.html","6132a995e1fc96ef8fc78cb7f3a35270"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","3e2db162d47e66563384a3fc33e32d39"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","ff659ac786be02dcafdcceffe72b0c7f"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","5582c86ebbc3864aca0d6f6de6c644ef"],["/2022/07/03/Review/Hello World/index.html","1d3adad89452f17333ca94d3de73cd68"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1af49b21ea9b122875c5cdbc96181035"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","6f1fff7846cd6c155541cce92dd3b671"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","3bbb48e491b626157f5404ba1c5d31d8"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","2e19346d37120676efbbb13e93b86468"],["/2022/07/16/Japanese/動詞分類/index.html","9222ea7bf5d419fd72029248e25cd0a9"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","249390d5169437e9b49fdf975046429b"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","1f8c1b15bc773ee53abaa5cd29324002"],["/2022/07/17/Japanese/音便/index.html","5a20106244c49f0a3c700d87ad4fe36a"],["/2022/07/18/Japanese/動詞 時態變化/index.html","b4d189d8733927b1dc95c80b72aa20a4"],["/2022/07/19/Japanese/助詞用法整理1/index.html","775bfcaa891fc95a119e9512b67df5b6"],["/2022/07/26/Japanese/助詞用法整理2/index.html","62a58bd71cfcdbbc04e25a8320f31715"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","222552ccdc4906f131096d5d9ee61e0c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","01181092d92a167b291a11a12b044887"],["/2022/07/30/Japanese/疑問詞/index.html","553ef3f2d900eb4bb3e12afe47d79bee"],["/2022/07/31/Japanese/助詞用法整理3/index.html","99aacb4720c08752c0a03c1696abf1ab"],["/2022/08/02/Japanese/副詞整理/index.html","01c3e1845531f7c27311704f2bd84c15"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","5feb2af0a7f04b1244329f6da50fa52d"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","c47eb8d1fa0311adbf5713c04488605a"],["/2022/11/22/Review/組長女兒與保姆/index.html","b5d839d084be894282141f9b2e3f696f"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","278fb6beb361831ebc28652f4f124a57"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","c43c99a4bf52f25953fb0fffdee926cb"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","55efd2f2e2937401361ca648ecb243b5"],["/404.html","d92b61160d48d727eba205f134ab08ea"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","2cf1f968ad91e9a26446fff1f03bcd32"],["/archives/2019/11/index.html","50d008981380ad29b5a3f3f04454bcfe"],["/archives/2019/12/index.html","a274b3adb15ca5aa2324d4224c118f81"],["/archives/2019/index.html","843f9ec7ab49f4c6b22c1bcf375764c4"],["/archives/2020/01/index.html","977be6131129fbba2af91b88459b677c"],["/archives/2020/02/index.html","75e815d6f13ea7f64089a762e9c9c9da"],["/archives/2020/03/index.html","5e1f12a13aa2411675c8e1de703b35e4"],["/archives/2020/04/index.html","c4ae5b6db4cc7d022cc9ca642e5857ca"],["/archives/2020/05/index.html","2278d73aaf0652819c8cf3b9e8e84884"],["/archives/2020/07/index.html","8c18bb388bfd1990f0912d8e7a007e08"],["/archives/2020/08/index.html","2f18728093eba13dbfdba6aca4162c9e"],["/archives/2020/09/index.html","afa923f3f2ed3eccf366a8730b932991"],["/archives/2020/10/index.html","4a97e6531d3eba8b315aa212f031e9a0"],["/archives/2020/11/index.html","a3bc18f8d4efe38cb0c59783fe0c9741"],["/archives/2020/12/index.html","425982fe1ff96ae73fd401316f62b10e"],["/archives/2020/index.html","a3ac562e18674ea9fce3794e81ae3b62"],["/archives/2020/page/2/index.html","cc971a46a9cbff506d8a3b45868da4c2"],["/archives/2020/page/3/index.html","1c74a4f469e6ae528d0b75754a996359"],["/archives/2021/04/index.html","fe533c1f97e32692599763796370162c"],["/archives/2021/05/index.html","8ad69af72d449da0b06dad41c449a535"],["/archives/2021/06/index.html","ee9e990a17e0436270d9cdd4febee445"],["/archives/2021/06/page/2/index.html","96570fbe182ecfe633d4eb1379f206c2"],["/archives/2021/07/index.html","897b392b70faf7957ec87d40e011c607"],["/archives/2021/07/page/2/index.html","97cfb5155e5bf5aca5f4f66ba9ba7a65"],["/archives/2021/07/page/3/index.html","16a072bade0d65e7077fd36967518b75"],["/archives/2021/08/index.html","d1c6020688e0fed12db0a938e71c928d"],["/archives/2021/09/index.html","7ea042a195a82cef8a8f3deec9726f00"],["/archives/2021/10/index.html","3064f0e49b3efe45f07911e0634dfc76"],["/archives/2021/11/index.html","6721088243fad9acfad48e7634e6e7ff"],["/archives/2021/12/index.html","69c6278deff1cdaf2d5c3533fc35eaa8"],["/archives/2021/index.html","6b7275911f244ab910d039bd0c575751"],["/archives/2021/page/2/index.html","6f0c295e9284caadde1f889f53140194"],["/archives/2021/page/3/index.html","098e77310137d84554db57f66edbcb0b"],["/archives/2021/page/4/index.html","90b1f524ddbc1aa60a942ba19fe91d39"],["/archives/2021/page/5/index.html","d42b04dc947d922254e35954a9db1a1f"],["/archives/2021/page/6/index.html","ce41766b6acb1e04ab51bc81989278fb"],["/archives/2021/page/7/index.html","d66db190c29b23d10cdfd6e8e456bae1"],["/archives/2022/01/index.html","37d44e07269e7647e654a0af9a89ebad"],["/archives/2022/02/index.html","16350c874d4bed9f9c252c9e004fe34e"],["/archives/2022/03/index.html","80cca0abd3662dc8f7268842e618cf36"],["/archives/2022/04/index.html","eb9b6c90b775afbb8b0318d580c9d1be"],["/archives/2022/05/index.html","bdf3fad70d366263d710be1f7c836918"],["/archives/2022/06/index.html","8141b561731e97add9978059595d6303"],["/archives/2022/07/index.html","6ce9006166e60bae00f9aa4f45b45e01"],["/archives/2022/07/page/2/index.html","20622e60e172af683a5e2e35f6cb9c17"],["/archives/2022/08/index.html","b9c4cbe93cff337117becb3115df92fa"],["/archives/2022/11/index.html","74d99ef4ee98c3353d438685877f6a7a"],["/archives/2022/12/index.html","3cf2510514ffdbf9f096ccc1512fc0f7"],["/archives/2022/index.html","69b56de2cba68ba9afd377085f6b9164"],["/archives/2022/page/2/index.html","985896238fe20a58cf906e4236a2d7ea"],["/archives/2022/page/3/index.html","947b8240979496f3a7e994cb377a1e91"],["/archives/2022/page/4/index.html","911bbed9815951a36c9bbd8d3a54a841"],["/archives/2022/page/5/index.html","95b015e9bcadddf3ac2fed60a1b1887f"],["/archives/index.html","2ddd3a0c1664d25419d5134902b1078c"],["/archives/page/10/index.html","a1e01b10ab86470315c9014f866a6c32"],["/archives/page/11/index.html","3a6dd9199d8b0361b825b3446c937883"],["/archives/page/12/index.html","825c415761b6abe795b844f070569cd2"],["/archives/page/13/index.html","9a4afbc2a67c811a67b1bb3c325ec818"],["/archives/page/14/index.html","2e67b8292b78428935184fb0492b835a"],["/archives/page/15/index.html","95f807779fa4fdc62adf2c7ec67d60e8"],["/archives/page/2/index.html","b9a4b706bceb210484de7fd9e0d9a0a1"],["/archives/page/3/index.html","77c02d1866b0e70d33867b0ef85a2385"],["/archives/page/4/index.html","59fcb8a12773e97a8d464f5081b04af0"],["/archives/page/5/index.html","1fe00d229d0b3dae30f4a2d8347d311a"],["/archives/page/6/index.html","20705420bd28704a7c4ab4d5c2e4b846"],["/archives/page/7/index.html","72bc5a5322e9e162fc3170bfb4422aae"],["/archives/page/8/index.html","fd9f672211dabbb4b90c545bfef4794d"],["/archives/page/9/index.html","11450db48b9f2a75730b198a2928d0f1"],["/categories/Programming/index.html","03ad5699f5b621ce6a07dd470351293a"],["/categories/Review/index.html","93ecf2d8364b3c66a5435fd8f8a4836a"],["/categories/Review/page/10/index.html","bc7949ec9da766c00eceae5323ad97ac"],["/categories/Review/page/11/index.html","cb451aa348dad96b04f4bd540e768b18"],["/categories/Review/page/12/index.html","2c563628b72f88568ab0e4d3fac6e030"],["/categories/Review/page/13/index.html","10096603ddbb61ad8b8175e8cd016e8c"],["/categories/Review/page/2/index.html","f3bda61262e10eee6b20603d64eff5ef"],["/categories/Review/page/3/index.html","a6c32cc18940241214e7e88431a228c4"],["/categories/Review/page/4/index.html","27184261231dafb44368147262179ee3"],["/categories/Review/page/5/index.html","4d8eafd202fa6f42b67cc5e0bf04df4c"],["/categories/Review/page/6/index.html","17a3b65a002a1905e36797c774d9b2d4"],["/categories/Review/page/7/index.html","3d07c126b84909455a33d2e0560e016b"],["/categories/Review/page/8/index.html","c2f33bccd9b212e57efbcfcdc109e5bd"],["/categories/Review/page/9/index.html","ed0b13c2b20c34233dafdfe131aba713"],["/categories/index.html","2617eb88ccbe9a9fa9d580246c1e9f13"],["/categories/日本語/index.html","81bdeb04cdff80ca96d40ab99e71610c"],["/categories/日本語/page/2/index.html","7a586c8a14d3cf588ecc647c855a9a0d"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","45cfd0e5220177f4dc40e3c473f33be0"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","fe0e63091104af8ce614a2a580a09498"],["/page/10/index.html","d83b470ca7e6093ab9d8dc17aa5686e0"],["/page/11/index.html","b48889c15589c510712e0f1d7f68e7e2"],["/page/12/index.html","0a3c771b39031b5e3e0657ce474197e9"],["/page/13/index.html","5464ecb496d24f2a31a0792ab1ce3373"],["/page/14/index.html","9f0ce8d17e1566806253e630cf41ce1f"],["/page/15/index.html","4406748652bf8734f71c193d584bf683"],["/page/2/index.html","fc8ce2faf02f2b6dc3b70058529c4039"],["/page/3/index.html","6a50b883f630477db0188d1f91f7f29f"],["/page/4/index.html","7c25db07279dda406a10e26cd9fa5a5c"],["/page/5/index.html","fda37efdf34b614e12dcac8a8dc1bba4"],["/page/6/index.html","9b51f244094fc7d90e0d56f998e65640"],["/page/7/index.html","4fe27d44035930de6c2ffbd9c40dfd86"],["/page/8/index.html","6a510498d6ae46841b6b2c6b37fe994f"],["/page/9/index.html","0faa8ffd0a7f081fa6200ce8f8756f1b"],["/sw-register.js","d10ceaf0d358f4131e985c63a0be6e43"],["/tags/10分作品/index.html","9f7c40fea27c36cc2f3e0fbb97e6325b"],["/tags/3分作品/index.html","6f6f3423a79bcf1adb64e62780341a79"],["/tags/4分作品/index.html","94421012174488f4fc6ac6b781dbe2bc"],["/tags/5分作品/index.html","d749223b5049d42201e30a2aa6805a1a"],["/tags/6分作品/index.html","07b66b31f4f1130704bb90348cb4243c"],["/tags/6分作品/page/2/index.html","008dd2fc6a8a306588d31c1908903511"],["/tags/6分作品/page/3/index.html","9c9bc4874b8c1954ed1551d99e952339"],["/tags/7分作品/index.html","04445a529edca9712adc0e15010d55f9"],["/tags/7分作品/page/2/index.html","f6dd14059987fe2e2ea92230685de6ff"],["/tags/7分作品/page/3/index.html","45eef9fdd3f9fee7313ab970ca127253"],["/tags/7分作品/page/4/index.html","0e40c36922d272361f3c697ebae5fdd0"],["/tags/8分作品/index.html","7389a218c2575013a4feb1afb553bd7d"],["/tags/8分作品/page/2/index.html","46ad82ced1f53edeedf5c44a9df1e444"],["/tags/8分作品/page/3/index.html","3ae4c5c464eddb43aa9303397a88b50a"],["/tags/8分作品/page/4/index.html","773ddc30e6e5ce62cbf7604e89c1c91c"],["/tags/8分作品/page/5/index.html","c94b660789fd75e4cea743c3969637c2"],["/tags/9分作品/index.html","3ca5e95e5c8ce769ddacd9609b3d70c2"],["/tags/N5難度/index.html","bf126b79a052b25db2a2064e8b3e699b"],["/tags/N5難度/page/2/index.html","4451d20a868284ec31a1542f46558864"],["/tags/index.html","2248f3fb98578dbb1805b80c4bfc0870"],["/tags/アボガド６/index.html","93706a9b10db3f51c267f2845563d192"],["/tags/三秋縋/index.html","e0b6e6c0d9dc2e31d16e1b42e093c078"],["/tags/中國武俠/index.html","88b4be3614d07cdb3e511b3e660481d1"],["/tags/中國言情/index.html","08d10e83f483fdfd9dcd647cf749264c"],["/tags/二宮敦人/index.html","d61c104b93273e5246e0e0ed2f659c1d"],["/tags/人性/index.html","f67ed06edd08f9724eb2b9ab040bf6b8"],["/tags/人際/index.html","2ee3670ae114fafa21f0741c2d5b2d39"],["/tags/住野夜/index.html","621905aa1a413691be23ba35738c54ad"],["/tags/佐野徹夜/index.html","6e460fc372c6543df767976e1645e7fa"],["/tags/努力/index.html","a5fdeaf17c9342e67ec7aae0a2c3c84d"],["/tags/動畫/index.html","de5648f938921cc34c134b15c36d370e"],["/tags/動畫/page/2/index.html","f203a9ed92229919e57d0690e376dabc"],["/tags/動畫/page/3/index.html","3991979969c86230f86b14b1ae2def24"],["/tags/動畫/page/4/index.html","348bd1453af9e1ad3491ad67ed21322d"],["/tags/原諒/index.html","a158c81c712cd187ca09712ae3aca54d"],["/tags/反烏托邦/index.html","8851091787bbf24914ea770c317bc7a7"],["/tags/啞鳴/index.html","ac8a915b4a5f04698b41e2399ee319d1"],["/tags/喜劇/index.html","cb1cf661a8fa2dcfe3e4747596c98aa6"],["/tags/夢想/index.html","a5a8350e56deddeda4d024255f8d4561"],["/tags/天澤夏月/index.html","f856c78cc5998d97844c6a471b6cf51e"],["/tags/學習/index.html","cd6bf7931c91d248d43ff8d6cf5dc739"],["/tags/學習/page/2/index.html","6c8afd5450bdf2f61dc2cd96de725f6d"],["/tags/宮崎駿/index.html","eef82f84f79e95b81d42d8e6a2b1d416"],["/tags/小說/index.html","4f5f625f146ee5b5d42a727d618642dc"],["/tags/小說/page/2/index.html","84074c5064ee323a6c35dc503f6096ef"],["/tags/小說/page/3/index.html","145bced0b13e6d3afd57c76974584adb"],["/tags/小說/page/4/index.html","f87ab8f8239b58d389b519574a5db9f9"],["/tags/小說/page/5/index.html","2f88c317744c3388536b73b22d8177ee"],["/tags/小說/page/6/index.html","cfdb973b9957080d616835bdc7e473b1"],["/tags/小說/page/7/index.html","b2b46ed6c90bcac6232e6f6c61afc188"],["/tags/平淡生活/index.html","6dd4457646b8fe34d43ec197bf35271c"],["/tags/幸福/index.html","c6e75683a9d944943d71afa8b4acd5e7"],["/tags/志茂文彥/index.html","8e6cb152880f90ba1c93846df440a06e"],["/tags/愛情/index.html","ce9bbba4bcf6c29a629b0353619dac96"],["/tags/愛情/page/2/index.html","1f9644cd70f5a430d3ce502603863717"],["/tags/愛情/page/3/index.html","09b2254dbf4664621f708da20ec4b72a"],["/tags/感動/index.html","b2c315689cc78a055e27a55297e13950"],["/tags/懸疑/index.html","06c891dd511d3c33536eb330d618c874"],["/tags/懸疑科幻/index.html","6e29f047c014948349cc561d6fcceab4"],["/tags/戀愛/index.html","d883720f6c9f730bb0364a7c0b9b6f75"],["/tags/成長/index.html","6efe8eb1377b1ee3ad1fec30334c6497"],["/tags/成長/page/2/index.html","841733ec24269d681be23c92aa3ca36e"],["/tags/戰爭/index.html","07f3e2ce4f3681032538634ea517c97f"],["/tags/推理/index.html","88bb41095db3ae1349c12edf314d8f52"],["/tags/搞笑/index.html","52f4cd4e3f093ee05ff1655d92e23de1"],["/tags/救贖/index.html","05026d73c73f9f0c71b4834e0aef478d"],["/tags/斜線堂有紀/index.html","d89f105e962a3c8138a753687c1103de"],["/tags/日常/index.html","dbc6d2445bacf6d9ea08ed173262a518"],["/tags/末日/index.html","85e0484e513cee33a8e1ca11da4014eb"],["/tags/校園/index.html","a62feac1e982d0ccdce7cca3dd12384c"],["/tags/武俠/index.html","8a888ec8e11eaaea826a80e03616c246"],["/tags/武俠言情/index.html","10264a9076414aa6a1b7ba2969deb5cd"],["/tags/漫畫/index.html","7e265c0b90b7d6de21321aa93d8107e4"],["/tags/生命/index.html","ce18e9f94fb2f8a48aa565c23fb8d0aa"],["/tags/生命/page/2/index.html","bb00dd6ff634cd36cf6f70e2e05a0ce3"],["/tags/短篇/index.html","da998d89a39cfa5d64e62e197054f331"],["/tags/社會/index.html","c5a4c79360d76df93df540e92ff29c84"],["/tags/科幻/index.html","d248aa9405850db9344960740853be82"],["/tags/童話/index.html","7e7bd7456ba57a4c2ed0254376d4ff7f"],["/tags/競爭/index.html","d69dc5d01f1ea23a6702d040fa7a7048"],["/tags/自我/index.html","520c6636bbae7007313c9318dcdb9375"],["/tags/自我認知/index.html","40480b69d048cc92dab08291d51dabff"],["/tags/葦舟ナツ/index.html","8510ad82fba426b9003bb087642f071c"],["/tags/藤萬留/index.html","ba3e22f2ce73b6e54272ce9cec9548a5"],["/tags/親情/index.html","9e0e2fb132c69dd9c37a8e76a7523b66"],["/tags/雜項/index.html","6853d6dc58f4b2a63457d7dfcb25ddbd"],["/tags/電影/index.html","012b0495b31f3537ff9816b1c261b3ab"],["/tags/電影/page/2/index.html","dd297d0c18771f51664fb9b59b3bcfb6"],["/tags/霸凌/index.html","d68edb60728ef21b338b65af5cc3debe"],["/tags/青春/index.html","64fda1e8294f894d14deb1f4dce30234"]];
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
