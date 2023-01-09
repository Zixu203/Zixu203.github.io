/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","638cd08d93794675ca531cab95310282"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","678d00e4cd3a62901dd8a7d658f45547"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","73dbd3df10f3ff4421bb2c9d9721c8aa"],["/2019/12/25/Review/無法計算的青春/index.html","34ede8b9871f815585bd93f910cef90d"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","728500b86f231ae3ac9a22bc3bde9401"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","e755ddf75a28b765ed5e49d758495255"],["/2020/01/19/Review/下雨天，不上學/index.html","1ce2ed9f1127471c479d35c75b2417fe"],["/2020/01/26/Review/三日間的幸福/index.html","ed669fb791430b35999c867e4a4b5a5f"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","bf1ea639ec0aa7abdde77ca588e97867"],["/2020/02/09/Review/青春期超感應/index.html","06d52853f1efd9c2780f3cda2e047e83"],["/2020/02/15/Review/又做了，相同的夢/index.html","6fdb6b8c985a26379b056b0ca7747c12"],["/2020/02/22/Review/回憶當鋪/index.html","d065e0656923f5862918b35ed8a092ff"],["/2020/03/22/Review/不適合自殺的季節/index.html","6838293383e96429239be22695ab9c0f"],["/2020/04/26/Review/我們都無法成為大人/index.html","dfb20d07a2dcb3db5c9557765e1a193d"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","6e163ef1736d80183384399478d36938"],["/2020/05/17/Review/人間失格/index.html","a7ffaa3040d6902d3778da5b73af1bff"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","3e1f9fe405e0e911b9f128df82f34cbd"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","b2cf2c6803eb7c6fa0864b0cb47d5a24"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6214ad306c343372e7419549a522a51d"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","e7b63a2fa7f63dd96934fc029b1128b5"],["/2020/08/16/Review/15歲的恐怖分子/index.html","de1817ecb0c358deb7dd57b910cf094a"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","0bde2a2b43357b998f6ae0e6cc9f469d"],["/2020/09/13/Review/羅生門/index.html","a0a5c4f2e57d9797edce2d8e9e67a60f"],["/2020/09/20/Review/闇夜的怪物/index.html","a461f8676f59b50a7ee3661afd5352bf"],["/2020/09/27/Review/14歲，明日的課表/index.html","261ce7013bbd463f78f10bb771ee4faa"],["/2020/10/04/Review/致十年後的你/index.html","2c57e3095d2e8cb57caf12dc6ace0187"],["/2020/11/08/Review/滅絕之園/index.html","98bb2eb507189e503095c2e5f993b45a"],["/2020/11/15/Review/將愛拒於門外/index.html","0609d85e62f40ccf7bdbb9c26dbc1479"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e640496fb5254d534c41e301e4624900"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","baa9746c2e37e5eb2c1a19c2ecc85e5f"],["/2021/04/22/Review/道印/index.html","20a24fee301d4f8c35b065b141be3e47"],["/2021/05/03/Review/戀入膏肓/index.html","8841535b25cf6e68fdc1c47a80a740f5"],["/2021/05/10/Review/Dice/index.html","9213208b3f1e6654364eff9503bb01ad"],["/2021/05/15/Review/魔女之旅/index.html","b9fad00b47f28919cfe2f6bff14adbdc"],["/2021/05/28/Review/戀愛寄生蟲/index.html","30d81de6c9159274445f1bdc375ffbf8"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","4e6a8668d837f8602abed3cfbefdf4a0"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","6452c45afe2679e37b3323c4527f9c3b"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","7a45a6d70751fd6bc611e35de5d10e87"],["/2021/06/05/Review/流浪的月/index.html","783d24da9e45fa07a43949a625847571"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","cf445e9142d5631b98cc8b4fc93597dd"],["/2021/06/13/Review/第一人稱單數/index.html","0d340b0c95e8e59a4d978f7ef0c907b1"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","3e8b250e116faf33f27794a0d78c176a"],["/2021/06/16/Review/願你幸福/index.html","e303588c26116a6eb1c9b4e49375dab1"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","cee329357456f2aef4a6816ad81df989"],["/2021/06/21/Review/神隱少女/index.html","3a5922172e5d4cce8e1d1d40d2ac0285"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","508aba209203c0c1da284d0eb5931ad5"],["/2021/06/23/Review/天空之城/index.html","79fa38d7083553cc52a8fcaae03edb3b"],["/2021/06/24/Review/魔女宅急便/index.html","fe85041e1b14cecdc72451b2b1211575"],["/2021/06/25/Review/借物少女艾利緹/index.html","0eb2c8b7e1b588a3eb12f70e0668f71b"],["/2021/06/26/Review/魔法公主/index.html","4dae2390ab2abc6b79e873d6f6f6fa04"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","20376eea1ef81f6ad7716677eb30d55b"],["/2021/07/04/Review/飛雪與劍/index.html","189f7f77c3792d827cf432bebaeda50a"],["/2021/07/09/Review/地球防衛少年/index.html","3d6bce686224940c9f827fbd6dd28709"],["/2021/07/12/Review/Angel Beats!/index.html","90b7566f04241b8812b2a8d5b5db4780"],["/2021/07/13/Review/Clannad/index.html","82c2a801309c6fcf726a61475ff269e9"],["/2021/07/15/Review/AIR/index.html","6376fd983193f078854d9aea2a3ac30d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","a2ca489ac96b6b280b6bf92a5790082a"],["/2021/07/15/Review/螢火之森/index.html","a2d77b2bc3e6faac8f801acd2ef36842"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","eb53ef2920be2981fa4f042f38ec72e5"],["/2021/07/17/Review/奇蛋物語/index.html","583cba0da1ad76d90486e5f8cf3a6bb4"],["/2021/07/18/Review/Vivy/index.html","ba9edce4cbb87af4349e81e59da98533"],["/2021/07/18/Review/請妳消失吧/index.html","3c74c725343d6ada61325b250a048ce0"],["/2021/07/19/Review/漣漪的夜晚/index.html","d3a37d9c84be465bf352a84ee1c4bd91"],["/2021/07/20/Review/月色真美/index.html","dd361a11adf508ce7e871acdb6bd3108"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","93747537212e0f37d48a58727d62d3b7"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","d7a3d4bb7dea7be674163d0406396844"],["/2021/07/22/Review/罪惡王冠/index.html","12f6d13a9177791f7b456bdda0b38107"],["/2021/07/23/Review/弱角友崎同學/index.html","63d4e07942b02e6b4b345b0d37672f2e"],["/2021/07/23/Review/惡之教程/index.html","8d1af7f4b2b5ebb0d04c04f25c47c383"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","7117a0dd0ec42feab1408a473c93828e"],["/2021/07/25/Review/魔王勇者/index.html","9e6c723bba57a1a23c6308022aed892f"],["/2021/07/27/Review/一年A班的怪物/index.html","972250976d5d5cd55cca95f67864d3a5"],["/2021/07/27/Review/奇巧計程車/index.html","250fe09c24d098b2b2604aa10c028c62"],["/2021/07/27/Review/專情的碧池學妹/index.html","5b06a0ad681f92678cc378e7ea7bb4af"],["/2021/07/29/Review/只有我不存在的城市/index.html","20d28f2ab997d2a9de96bbbd8c05122a"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","924435e074e3ba155a301480cbf53975"],["/2021/07/30/Review/可塑性記憶/index.html","8288b7cf0960052082d1cf4d7fbb7965"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","2374144b2766dc7404fca715b2512036"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","56fade076bfafb12a1f94b27ff437bdb"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","849ca6eac34682e0a7b14cfa3858b89c"],["/2021/08/25/Review/清戀/index.html","a30612c6007311e715134ca8f1240caa"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","ec0e82721200515db0ddac999a2521bd"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","ecf8f3d84330f42e7f2bf175247da310"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","c26dff130468be7bf1458d9f94609b60"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","5c8320fd3476aeaaae60725e66ec083c"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","07e3f1fb5b46db0f434d18722263561b"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","9865d8f4576619c36535d5892037d698"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","e75b2e6a4b703e691297c2e5428d588c"],["/2021/10/16/Review/龍與雀斑公主/index.html","1fab6e5ef327df3946e34249efcd42a1"],["/2021/10/19/Review/孤狼不想開後宮/index.html","3bd68cb8f101867a52c06e1ab3772841"],["/2021/11/13/Review/徹夜之歌/index.html","a1c5f335fb24a6612ca8dfae8091ef32"],["/2021/11/24/Review/武煉巔峰/index.html","bd4fba97163d580e0e42e36807a0f5bc"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","05329a3a1e0a36f8b91026de04418897"],["/2022/01/28/Review/神醫凰后/index.html","6fc6d3721dabab18622d1eafadebc52b"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e684f86a087b998745b6628cac659907"],["/2022/02/13/Review/夏日幽靈/index.html","2ac15b3e2d1a703c8e13ac17a5a5acbe"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","563bff8b13eaa8a85cb15ede72b3c6dc"],["/2022/02/26/Review/賽馬娘/index.html","115175d4a689e34e97af0d89bf9f8546"],["/2022/02/27/Review/大欺詐師/index.html","c78e4d3f8d05197be83b7c9f1c505ee4"],["/2022/02/28/Review/前輩有夠煩/index.html","3dba392cb2fd1d439c6ed11f276983bc"],["/2022/02/28/Review/碧藍之海/index.html","649f7a25948ca3f0fa8715cfaf7af91a"],["/2022/03/05/Review/落第騎士英雄譚/index.html","9aafa473c41eb9a123fd60edba3b2705"],["/2022/03/06/Review/Another/index.html","24b65e942697a6c590e2a29e64f4234d"],["/2022/03/06/Review/入間同學入魔了/index.html","61151815943c10cb75dd8c41adfee121"],["/2022/03/18/Review/再見宣言/index.html","12e0d709e8950c224dd729f2fcca8bbb"],["/2022/03/23/Review/生若冬花的妳/index.html","06829ebb1f423efc96f42ebea4bd6b20"],["/2022/03/25/Review/天之弱/index.html","d2476e0173a8f9a2386e0bff3ddf35db"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c0c4959ef1ababf1628c34e5336c472b"],["/2022/04/30/Review/泡泡/index.html","94449d83ad5bd368bf71e67c0a49a76c"],["/2022/05/04/Programming/Dynamic Programming/index.html","cf54a66a848eaacc39f48b713e3a7fb3"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","46e4008aee60b5218b199bbb51261f43"],["/2022/06/13/Review/偵探已經，死了/index.html","38dfbfb7ea6944da35ffc47bfc18b5ef"],["/2022/06/14/Review/黑色子彈/index.html","179b1c6c0133a00252e2dc163c8ee5e6"],["/2022/06/15/Review/黑白來看守所/index.html","d7193517569f6b3737fc7423d2975333"],["/2022/06/16/Review/虛構推理/index.html","13c4b29de89cc919905d5dc780f1379d"],["/2022/06/17/Review/戀愛與謊言/index.html","6087404facce96098dc973f06d1592d1"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d7e50bb8504172fac00f6fd7e3863b74"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","b51b29b1d226343863de19a9762b3a5e"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","27ff180472bbd6f8bae2590dc1cef7c8"],["/2022/07/03/Review/Hello World/index.html","abf19361456fc40e9dda89ac3e6e1cc0"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","582d90d46b2206ee782814aa1507450f"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","25a266ac56053b7dd33e31174d5e4bf2"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","e0f1b1bd27c994ab31d9d873a81bf45f"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","16b21593bbc040267ae0026e2305465e"],["/2022/07/16/Japanese/動詞分類/index.html","b1128428446ee453af0f30067e82d546"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","4c278a049a551df0ca23a5961a705a00"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","ea43bb92675b49ee14e46d5a2e3861de"],["/2022/07/17/Japanese/音便/index.html","22df3d71cb9bbb50d8a4e14e0a5474f2"],["/2022/07/18/Japanese/動詞 時態變化/index.html","52c27e487ea19c4b306c81b5eb686fb3"],["/2022/07/19/Japanese/助詞用法整理1/index.html","f09d6600081484f9e1772fac1d946267"],["/2022/07/26/Japanese/助詞用法整理2/index.html","dcc0a34fad471aed50e4cf544324f452"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","f1f99e58450faca89bc8d049645dda86"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","50ce215d2296d8d5069194fb605e9aaa"],["/2022/07/30/Japanese/疑問詞/index.html","87f93d301353affd991644b2e6a8ace5"],["/2022/07/31/Japanese/助詞用法整理3/index.html","a93600a907144548429acc92a15032e2"],["/2022/08/02/Japanese/副詞整理/index.html","74ff18bbad51e95f5f54d9170a28003a"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","8ac685f6f2e46c6e007099e29ae0d7f2"],["/2022/11/04/Programming/Data Structure/index.html","c5879360a785b171f21c4c78fa95c1f4"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","efe6357df7c624017a70b9044793d61b"],["/2022/11/22/Review/組長女兒與保姆/index.html","f239b814bfe9577c7410242dd629a1dc"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","df3a0f7af22310f3f7cb405bee202130"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","22869f6394b082026483692d97c3dccd"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","648e91e99b51c99b9fca9ee6ba0efa9b"],["/2023/01/01/Review/あの夏が飽和する/index.html","b093198cfd9d9aaef0e6de4f662c6acd"],["/2023/01/02/Review/孤獨搖滾/index.html","8c830eaab06d6f2f478de1a23664c97a"],["/2023/01/03/Review/來自深淵/index.html","708040fbb61ebd06b9ce4ed5db9478e5"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","5932d4fed99b2f6a2bb2d1aea0aee3c6"],["/2023/01/05/Review/處刑少女的生存之道/index.html","67c0e9d2624e9ed445f6a1226ea0235b"],["/2023/01/07/Lyrics/不可解/index.html","80bee4b07b98b6a61ba1f83dbdcafcc0"],["/404.html","fdedba5a5d8dfc55b2dad1ef1c552982"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","7ab1642b47ebead5bc11eb2b0ba3a2f4"],["/archives/2019/07/index.html","e7ede6ab2c1284961bc876c0dc147d1b"],["/archives/2019/11/index.html","8503949c16e5ac3e192d4b902ee67a9b"],["/archives/2019/12/index.html","b5aad32bd723c8603f2f7ddd2da214b5"],["/archives/2019/index.html","9c38f725cc69475ff7c63c22d3f9acf0"],["/archives/2020/01/index.html","4464bd1e7d2159d7e030d13f44a96209"],["/archives/2020/02/index.html","7e018deab3ec78c8f461767a8f89df9a"],["/archives/2020/03/index.html","a6fb30530caddced174adde98c129389"],["/archives/2020/04/index.html","60501b456eac75e598e06d75886311b5"],["/archives/2020/05/index.html","7b84f615f6edebfa886932fa1619dc1a"],["/archives/2020/07/index.html","a3408726a09f0e8d329f8ee20e244d3a"],["/archives/2020/08/index.html","9cebe844e5c1458d9943c82860bc6d44"],["/archives/2020/09/index.html","8a8ac56a28d02bb95adf7292ea409ea2"],["/archives/2020/10/index.html","453594a8fcc0dca947cb61b3f22d37a9"],["/archives/2020/11/index.html","b04af001507a0ed7946dd71141f55859"],["/archives/2020/12/index.html","83c40bb90e62331fe96e8a0428f9d733"],["/archives/2020/index.html","77da38aa2811452ae6f616cc8b88dfff"],["/archives/2020/page/2/index.html","903553a6256a83ca3d66db629c7c8829"],["/archives/2020/page/3/index.html","e2c3fcabb2a27d68131021a2f48ee345"],["/archives/2021/04/index.html","56bde634009c544d395ca01ab7c83d0a"],["/archives/2021/05/index.html","003588816e280929b2978e20a3b2c1a8"],["/archives/2021/06/index.html","b10eb711f0eb38c912760250d84a45f2"],["/archives/2021/06/page/2/index.html","705dd070ab43d78229f5370e481cc9f7"],["/archives/2021/07/index.html","e98398aee94a26cbbd6ff296194ca803"],["/archives/2021/07/page/2/index.html","0554ae22c3be161b45183ebd81de35cc"],["/archives/2021/07/page/3/index.html","dbc5e63dcc6287eed4c4187c16770e1e"],["/archives/2021/08/index.html","0472104bfe4c4558af62cc4a4d19dd4c"],["/archives/2021/09/index.html","41fd7115099e7b0a313c3ceca773af4c"],["/archives/2021/10/index.html","1a9a79050a7d1e9274efdd39009929a3"],["/archives/2021/11/index.html","8c9e22cdfde6a7f0cd92e733579d99ab"],["/archives/2021/12/index.html","93474562314cbe05bf27472de2d5aa6e"],["/archives/2021/index.html","2dea7003651eb87ca645b5f8448323b4"],["/archives/2021/page/2/index.html","bbf3c63ff29e779291a08701279870c5"],["/archives/2021/page/3/index.html","e85ecf47654070e0f59fdc55f7da53b1"],["/archives/2021/page/4/index.html","c8114e70fe6d4137a5d283ad8db60857"],["/archives/2021/page/5/index.html","d6d36e048ca43b804d8438a08dcea704"],["/archives/2021/page/6/index.html","519722f3b6eca18de4a53f7b24d06220"],["/archives/2021/page/7/index.html","780e6c76770b113eb09fab81cf87032e"],["/archives/2022/01/index.html","1f70b0286e89a3bdf5df7c34e71871f8"],["/archives/2022/02/index.html","e7513538c23f3363a2b2685c3537cf33"],["/archives/2022/03/index.html","bacd0ffbfc1d408f3daa093c818cea1c"],["/archives/2022/04/index.html","12a36f5ea54c319d5aa8bb5fd2cc3152"],["/archives/2022/05/index.html","b6081712ccd91e41730cf2d3a76aa6c9"],["/archives/2022/06/index.html","540a5418a1f4c52c7c57e722ba955126"],["/archives/2022/07/index.html","d75e978bfee732e62f0689f5645a1e5d"],["/archives/2022/07/page/2/index.html","d07a0b71ec628a202c8768b3eab819b9"],["/archives/2022/08/index.html","6a447101d9ce7ef21311c6198ebff184"],["/archives/2022/11/index.html","1b3e6f4e9f111e7086d90798992ec8c8"],["/archives/2022/12/index.html","56bf934df7270a7219a47863e4041077"],["/archives/2022/index.html","474f0a76b32512e3881e51783058e431"],["/archives/2022/page/2/index.html","6626f20bceaa40b7e04367b2a0298927"],["/archives/2022/page/3/index.html","b94fd20a886443cd61b697511e487971"],["/archives/2022/page/4/index.html","4f34176cfbc3729ac686174f30895840"],["/archives/2022/page/5/index.html","5fea2a00af73d1f6c60bce94a01a871d"],["/archives/2023/01/index.html","fae8b9c4e0fefc800bc9ea7f8b52d38a"],["/archives/2023/index.html","396a37d1984afd40869dec35f6b1fbb4"],["/archives/index.html","38d7eefb87fb15d7cf90e3ef3969dba4"],["/archives/page/10/index.html","831fba1d4520654985aba6ee6fd5bf0e"],["/archives/page/11/index.html","328725e357cdfd0b887ed1cc25abf8a8"],["/archives/page/12/index.html","e2e06a4a508c15beead6054df1f19f58"],["/archives/page/13/index.html","b15889182ceda37d2c3b8ec0bdb20583"],["/archives/page/14/index.html","68cf39cefde924057f3826ea5440a648"],["/archives/page/15/index.html","9ca3b55b2be08bc4da632c72cba56af3"],["/archives/page/2/index.html","be611b88cb863c1863dfd3fe09d56fa9"],["/archives/page/3/index.html","369bd69ebc5ab4168a4c6704093d05ea"],["/archives/page/4/index.html","07e47c4def0ee7d26e438a7532a56708"],["/archives/page/5/index.html","6302914b318a698b5a59e2f85ce4908c"],["/archives/page/6/index.html","329aeae886272199f72baeabd4a0bd72"],["/archives/page/7/index.html","324843e6b1ae919b1f05cf63c4c82036"],["/archives/page/8/index.html","51c1fee0e901c18b5d44db092f42b1ea"],["/archives/page/9/index.html","c80036af7876f40778720f6beb1f8628"],["/categories/Programming/index.html","6f7a43a3ea347c3c7c660cdab1b24449"],["/categories/Review/index.html","f1fadf820371aff42b5de80e9818903e"],["/categories/Review/page/10/index.html","bb8473e3a79275906f30f8589c6f65bb"],["/categories/Review/page/11/index.html","f886df517bcf68708204967c79b3b5e8"],["/categories/Review/page/12/index.html","c690fcd214fa1a7639176356d0c3e0ea"],["/categories/Review/page/13/index.html","f629171e7bfc56764239483b398d1320"],["/categories/Review/page/2/index.html","1cfd9548a0c27fe088057e28cf83c975"],["/categories/Review/page/3/index.html","dc33fa109eb4096d4120b4fa4ed11580"],["/categories/Review/page/4/index.html","762451ad4382a65d4447c96e5b6dd7d3"],["/categories/Review/page/5/index.html","16bab9c3fb0951ce6c8ad1b9c81d0449"],["/categories/Review/page/6/index.html","0466a25b4035d8a7b516cd82b4e4ec98"],["/categories/Review/page/7/index.html","7942c680f82485ee07a82c2a07f26620"],["/categories/Review/page/8/index.html","651aea9219c86f9a9471380658ea0a4a"],["/categories/Review/page/9/index.html","9498113697b1271bb1ec7237dcdf32b4"],["/categories/index.html","11573a89a8fd156a259b3a270fa49163"],["/categories/日本語/index.html","f2c6df3dea011ae895db22ed7397c37b"],["/categories/日本語/page/2/index.html","4adf17a0cfa0afdba67ad30d7b381cf8"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","92afaa9d4f286a91340dcf58a4ac2a72"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","4b1d05c2ec37401c154e32ce89b46b76"],["/page/10/index.html","1793b1e1664ba5d95d5d93685cb5831b"],["/page/11/index.html","ee7b0821a076869277fcb069309ea25f"],["/page/12/index.html","722cce6ad823679480837f64d4a7e7e7"],["/page/13/index.html","f50b43c3a9902db0490d439826844159"],["/page/14/index.html","db9f592cf2124d2d4629a4cafb324f0c"],["/page/15/index.html","6450026124034d77b80e395111bbe470"],["/page/2/index.html","226776165d38d9b14818fe725ef710bf"],["/page/3/index.html","888b0380e7285d78b8bdf0b7ec2a988a"],["/page/4/index.html","404603b1ebf7cacd4019f76c215af515"],["/page/5/index.html","409c7771b42ca31bd5f23d9280ae1a3a"],["/page/6/index.html","846b735dbe700ef8a00e96aa3d95be1f"],["/page/7/index.html","f04dcc54ce71cf04cbeb8adac7877163"],["/page/8/index.html","512fa2930bce54f2161aa23ce19e50fe"],["/page/9/index.html","bb71a3e932e1883bd0363d7cbd5eb474"],["/sw-register.js","f1a07122f71c96ec350a2e80bfdc6c38"],["/tags/10分作品/index.html","cfefc8ef8e5f2ef910812ae944f3b15c"],["/tags/3分作品/index.html","e6252c6ef837b5deb1e6788ae2a82c65"],["/tags/4分作品/index.html","2e1e816c3359e0ad82772ab86a94fbac"],["/tags/5分作品/index.html","c03461271fcd97c4a565722460def19e"],["/tags/6分作品/index.html","0df9e7ab4ed2ee58dbde406cdc322b0b"],["/tags/6分作品/page/2/index.html","42a646c79203691345dd2caf131d2e42"],["/tags/6分作品/page/3/index.html","7bda80adcb8cb5853db84f09062ce224"],["/tags/7分作品/index.html","7505084be9482309fb39c6f31b738714"],["/tags/7分作品/page/2/index.html","0894f3a18d67e75464c2027692729463"],["/tags/7分作品/page/3/index.html","39104b6d1907026633199404d438a456"],["/tags/7分作品/page/4/index.html","9994cecae196079a3d334f033c88be97"],["/tags/8分作品/index.html","a45b4f69870766dcb206d0cae8198978"],["/tags/8分作品/page/2/index.html","97e6ef4ebb8298d27368e8bfc55dc603"],["/tags/8分作品/page/3/index.html","38c9553660f148bc3ec95599a1eeb935"],["/tags/8分作品/page/4/index.html","b31b8898ecd0a06eeafc7ba6d4cfc629"],["/tags/8分作品/page/5/index.html","75ecb820b9a807ba0a53353ecab3d16e"],["/tags/9分作品/index.html","0b306d57636b98033b376c82e1d389e2"],["/tags/N5難度/index.html","be55edffb1e31221be4ed045f1cf04a7"],["/tags/N5難度/page/2/index.html","f88ab56b13183db30d6d116307b31e59"],["/tags/index.html","329a3f63864a2f94fab10a2065dcbf7d"],["/tags/アボガド６/index.html","dad3442be45f9ed0748740cf309aac98"],["/tags/三秋縋/index.html","92df48b841d60301974c114860c1dbb9"],["/tags/中國武俠/index.html","0ca29ea4baa4689a275a561e27168b4f"],["/tags/中國言情/index.html","7c05ccdbb4fea5424c23fbe6d6a1a722"],["/tags/二宮敦人/index.html","debfeda9f978216079d210b05102b555"],["/tags/人性/index.html","8f20661b2dedf241c3cdcc0278318fd6"],["/tags/人際/index.html","a50a615e09ee94a5b163259b7a0d4c48"],["/tags/住野夜/index.html","55a51e46c35cc67cd3ebc898f6f96390"],["/tags/佐野徹夜/index.html","0e62f963abaddbb6fd5519b27f953542"],["/tags/努力/index.html","7431b55129135d455893edb00dbd086e"],["/tags/動畫/index.html","684f58e7fc326b0cf88a3ae8301685e5"],["/tags/動畫/page/2/index.html","9db8fbede238f9d74d97a6b7a04c3cb2"],["/tags/動畫/page/3/index.html","51d83a2649795aba4e3e30c011772646"],["/tags/動畫/page/4/index.html","d24a40175100d8f9bb2fea1c3cd2ca19"],["/tags/原諒/index.html","617136faf1b91eb6aee3d3c5cfcb0d67"],["/tags/反烏托邦/index.html","968ffbf2dc2b95cdfe657b4bd9bce5f7"],["/tags/啞鳴/index.html","c61dcf71cba3fd32af68da96feefa866"],["/tags/喜劇/index.html","432f7d16e468698f63aafe393affc926"],["/tags/夢想/index.html","2bf7401b3cd8885b9d92d1e24797dde4"],["/tags/天澤夏月/index.html","df0f8d362bd4b48ab16c4e6d86631bcc"],["/tags/奇幻/index.html","e651403071c203ca163d22778cad6018"],["/tags/學習/index.html","b5336cd425f92999402b2dc83f783782"],["/tags/學習/page/2/index.html","766baf6df8cd495d4de8d1d2321b9b03"],["/tags/宮崎駿/index.html","d4ce71a5be894e8a096a5f3e5c7ce10f"],["/tags/小說/index.html","4702771251473829f6449ac52e289212"],["/tags/小說/page/2/index.html","0301ed009a8027b8aea5ff1ada80f90e"],["/tags/小說/page/3/index.html","1b89b71d7c4b022c6406e8263967ebc2"],["/tags/小說/page/4/index.html","4184d3ea48d5a6c6f748691cf7d1d5c3"],["/tags/小說/page/5/index.html","01569f34e2c47bf0ebfdd65ff378b241"],["/tags/小說/page/6/index.html","292b18d4fb75385d704c990467d08b5c"],["/tags/小說/page/7/index.html","b18591200a4be6f40678226326adfd55"],["/tags/平淡生活/index.html","2ecb5edf7749ab3aaa5f47edf7138295"],["/tags/幸福/index.html","2cb0149c9c227c596f8d32d513229db3"],["/tags/志茂文彥/index.html","84abbe07d33ebe80217a7bdba3d5b9dd"],["/tags/愛情/index.html","3837349aa478de8e95194096a72df6f7"],["/tags/愛情/page/2/index.html","d0e687e84c6b9b8b7a1e133f4674cbf2"],["/tags/愛情/page/3/index.html","eaa500ff92be8deec3d08f73185ccfba"],["/tags/感動/index.html","725f60bd2a004f2ae307341e4b3a94ae"],["/tags/懸疑/index.html","7e9fb56aabb32943c8cdd192bb88a2da"],["/tags/懸疑科幻/index.html","245cffc51b7030c25261a1cad3f724ac"],["/tags/戀愛/index.html","eb2d494f69a4a1bdbccf00fbb31382c8"],["/tags/成長/index.html","54ec8b43fb6c40a93c64a5294fe039d4"],["/tags/成長/page/2/index.html","8f701b754f4309c437ed24c91402f846"],["/tags/戰爭/index.html","548963661a588da1f954962ee6a4c20d"],["/tags/推理/index.html","e1b404afd1031473d24ff04f9db8975a"],["/tags/搞笑/index.html","15cb29693c3631d69b71beece629fde6"],["/tags/救贖/index.html","28e6129865904ab2db73df63b9b8ff06"],["/tags/斜線堂有紀/index.html","6c9fcae0d13a7e488178e6bb21f5c98c"],["/tags/日常/index.html","49b5e1f96a509ab0784c1d9ca111a4b3"],["/tags/末日/index.html","05cfb0e532b74963f4566d05cf424236"],["/tags/校園/index.html","fb60f0a2b274eff59916207a4675279c"],["/tags/武俠/index.html","2d9d83e2c41c81e8e83c795c60c0ba06"],["/tags/武俠言情/index.html","bc595c979c44005a4dee655b13dce2f3"],["/tags/漫畫/index.html","fd14c35e7d9547e31025b2bbe0d7ab84"],["/tags/生命/index.html","8afc89cb7c69da36892948c839d09070"],["/tags/生命/page/2/index.html","5936aba49d649553743fe7c4cf7ec6f0"],["/tags/短篇/index.html","b83754f0770474268ba358bfd93e9345"],["/tags/社會/index.html","d00cecfbb8b2c80587391b74a68f9894"],["/tags/科幻/index.html","0f903f04c213097edc8ac1870d670d8f"],["/tags/童話/index.html","a1379328ae8be42cfd588395859e13ca"],["/tags/競爭/index.html","733848499603b61d5816b64a76f74a53"],["/tags/自我/index.html","ee568d1c0b8590a9eca48954195c6cd2"],["/tags/自我認知/index.html","701e1b71dfc0f49c7e139d93c020a1e1"],["/tags/葦舟ナツ/index.html","7fa5ccf53442d7046d7e8f3e4bba3162"],["/tags/藤萬留/index.html","0a5f904655e577503338f60c5a326d45"],["/tags/親情/index.html","190f8837a50d6ba0eef3dc3964074b20"],["/tags/言/index.html","4e57576cebc5c202a7d96d36d7d4bc35"],["/tags/雜項/index.html","10ad45d94bc1c326eb0e90f8619e18a0"],["/tags/電影/index.html","9e637bbaac58839ed7915188b5872a34"],["/tags/電影/page/2/index.html","8b9c5816aaf21aa4ba7a2b0c8bd60fa1"],["/tags/霸凌/index.html","cfaffe3586736bfdd46b94917b5c1e46"],["/tags/青春/index.html","5cc89a0e59a1f9b5938ba4bc9fd8e910"]];
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
