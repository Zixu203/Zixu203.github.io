/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","32e1d075b69a37de8749dbbba80500c3"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","8366564ffded87856ad1936617e0af38"],["/2019/12/25/Review/無法計算的青春/index.html","6f56f9ae0a58caade033ed2b2d8b8dc2"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","4860c510013fafc53874e231737db03e"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","e10ab8e49b04a440edcbf79a33a0e917"],["/2020/01/19/Review/下雨天，不上學/index.html","f2cd67e7e3d2eff4a9889821629216bf"],["/2020/01/26/Review/三日間的幸福/index.html","43e1b1a0ede5bf71ebadc0fdb8450f37"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","ef2b4ce187ad69d9f53121f9d20ab818"],["/2020/02/09/Review/青春期超感應/index.html","6af0112c670d906bf65737b815389cfb"],["/2020/02/15/Review/又做了，相同的夢/index.html","261966f1b831bdce5bad69155d4367ec"],["/2020/02/22/Review/回憶當鋪/index.html","9b29d219cc9006d34e4ce7f31b4c2d43"],["/2020/03/22/Review/不適合自殺的季節/index.html","eaa82bf9d8819e12bbd63b12e9fbb455"],["/2020/04/26/Review/我們都無法成為大人/index.html","ebb1b8e6094f32a38900c157760bd85b"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","243830c97504aa9cf0e0249a4cd6a89f"],["/2020/05/17/Review/人間失格/index.html","fca67625af2170ba94ee6389e1841a59"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","aa3094761546ed53323362263d5fe0bb"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","5e839ad08b61cf1b18b69c1c379f2b55"],["/2020/08/01/Review/銀河鐵道之夜/index.html","fb78ebe6e0c0a9811bb46322f06c0717"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","6810805c23db05247546619be56e2ea0"],["/2020/08/16/Review/15歲的恐怖分子/index.html","b199041a3016cf2612d5ea822b9218c9"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","d1a6c8d70218a857d4c1ad4e4a97eee4"],["/2020/09/13/Review/羅生門/index.html","37f39763ce9b826657b8702639612ac4"],["/2020/09/20/Review/闇夜的怪物/index.html","64064ec5df93bd784373921b10051b01"],["/2020/09/27/Review/14歲，明日的課表/index.html","896107a3a7d50618cc803abdc6b859e8"],["/2020/10/04/Review/致十年後的你/index.html","7e31ba7a91064dc127e1f728e5f8fa96"],["/2020/11/08/Review/滅絕之園/index.html","82583d64f3dc7ea621701e96afb5116b"],["/2020/11/15/Review/將愛拒於門外/index.html","fbe58954105d234dc3129bd6bd624c28"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","bad9ba1ca578768aaba7a1e376117cf0"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","04ed20c56e02090b063e7b469c113295"],["/2021/04/22/Review/道印/index.html","593a17f0d914815ddc9417335607f084"],["/2021/05/03/Review/戀入膏肓/index.html","bafbca6d9711f665ffb4e543d9e67cb4"],["/2021/05/10/Review/Dice/index.html","db87b61060cb3f299f1def86c8df61ab"],["/2021/05/15/Review/魔女之旅/index.html","b13758c01fceb0fc9ac39b10d2fcedbc"],["/2021/05/28/Review/戀愛寄生蟲/index.html","24ad533799b2dccdc4d1628c3c0c08df"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","d8353ec6dd2e06a98ab5f2084b1b68cd"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","71f21d4f634b150ffc39c656bf5b1489"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d311655484ac96d8d64fa2e4dfb98bff"],["/2021/06/05/Review/流浪的月/index.html","0d07779102a9540b090502e7971d2226"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","7c8189ca78f79ffb21c3418e2ec12f63"],["/2021/06/13/Review/第一人稱單數/index.html","007a1c71608f20907a59b63db36d0e10"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","4c4bf9a0e2f758e80ec71ada371ae9a4"],["/2021/06/16/Review/願你幸福/index.html","c32aa5aad86469e9fcf63992f58de18a"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","61e6dcea33953a831c31888f8ed48b51"],["/2021/06/21/Review/神隱少女/index.html","ec434bf6a65cd18f72129ab68c9b140b"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","b75e11a7c95ce13f890071fedaca0da9"],["/2021/06/23/Review/天空之城/index.html","5c039f2d4b7f28eb8352950fa427907d"],["/2021/06/24/Review/魔女宅急便/index.html","2b75a0bc7fffb9007905f310173befb9"],["/2021/06/25/Review/借物少女艾利緹/index.html","269090d11203e28d21b75caeca7e4391"],["/2021/06/26/Review/魔法公主/index.html","b46e07e279e6e85d59aa1bfaf4528bec"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","0258bdd092290b2952edf3fddb8de5e3"],["/2021/07/04/Review/飛雪與劍/index.html","c30713018797d83ab73bc8b772148198"],["/2021/07/09/Review/地球防衛少年/index.html","6f15d49aa4ad14216b8cb044619780a3"],["/2021/07/12/Review/Angel Beats!/index.html","dc3c445686244aa7bcb7aba30191aaed"],["/2021/07/13/Review/Clannad/index.html","0f008761fefd10ace48713a337e47861"],["/2021/07/15/Review/AIR/index.html","4633e6b056191b21865e544128ffd363"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","3a93dc1df5582a56154a72436c410238"],["/2021/07/15/Review/螢火之森/index.html","1afa7839ca64074257135042d5e22f14"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","3c06349476138169f9b2c36b9dbe547e"],["/2021/07/17/Review/奇蛋物語/index.html","5e66f9e2cf1a440299ce20c199dae120"],["/2021/07/18/Review/Vivy/index.html","680039d1a2618ccaa031905d1e68a126"],["/2021/07/18/Review/請妳消失吧/index.html","36e2bb78ead723bba95599a7036e564b"],["/2021/07/19/Review/漣漪的夜晚/index.html","18b8a659a842be94d26a276f250fc357"],["/2021/07/20/Review/月色真美/index.html","ab4527cea3ec5339d537ec33511ab299"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","6a67133c2500fca693bc591116e85952"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","6bc8d4287e2e57cc24941fb3cb7d9653"],["/2021/07/22/Review/罪惡王冠/index.html","f9db4d0e538aeadaacb5343e5067f088"],["/2021/07/23/Review/弱角友崎同學/index.html","725c39e98ee3200a6a01f76b617e0486"],["/2021/07/23/Review/惡之教程/index.html","7cf4ce404b65429e9e1c267daf3275b7"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","fe3e9138b83521051ada2f07c3a3f633"],["/2021/07/25/Review/魔王勇者/index.html","980917a5cd9e9583005f7b2c5095e2db"],["/2021/07/27/Review/一年A班的怪物/index.html","781ab5ba833c0c6636caea09705103d6"],["/2021/07/27/Review/奇巧計程車/index.html","c54fb08a56868d68e8d6b76820231fb1"],["/2021/07/27/Review/專情的碧池學妹/index.html","c799ec6100af7cf60a153ad366192104"],["/2021/07/29/Review/只有我不存在的城市/index.html","0c4abe7ffca9fced5a4eebb9bc2b10e7"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","c7762112a63cb3b7d7dc87ff3e91d811"],["/2021/07/30/Review/可塑性記憶/index.html","c249df57cd91903ba260d1533b671cbb"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","22e1a4ea7b887d57e1ef7d3024e53ffc"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","dd122e54fac507c52f2733357187d9a8"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","705dce07d6033fe619628f8c5aeb7025"],["/2021/08/25/Review/清戀/index.html","f9186bab96a352a00b692ce6d7b7edd4"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","5d502377f9074f7a9f396401ce83b3e7"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","e22545e3caca9439ba69045a057a6b9d"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","509e0dc316f245aaab1762452f071023"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","ee792233b2a6307b9a0ef4509cbf2179"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","05310e3a1afb45543a14e2b262d677ae"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","a7ca06782b3a2db562dd82fe324d1d72"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","efa15c8c590d09a220639ed80d65042c"],["/2021/10/16/Review/龍與雀斑公主/index.html","c323acaaa96ded1fcce591bdd7f3f845"],["/2021/10/19/Review/孤狼不想開後宮/index.html","65b63dfa1f66ad80099280d3c01af0eb"],["/2021/11/13/Review/徹夜之歌/index.html","ed5db899a705056d8815cfa8772ee831"],["/2021/11/24/Review/武煉巔峰/index.html","39b1f6896e8ca6e0f00fd41429e7327f"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","998d43f07cdb4528e29e153e78b43933"],["/2022/01/28/Review/神醫凰后/index.html","d0ce3502b7d9b192fea6658ec5c5948a"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","0511d63aed7d320760e4d09a78d441bd"],["/2022/02/13/Review/夏日幽靈/index.html","0ef81c41f01607c610f9c25b039b8514"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","6010ca1dd1183dd598a2b5666c74f6e6"],["/2022/02/26/Review/賽馬娘/index.html","fa08d53de3774910a0026e5206366512"],["/2022/02/27/Review/大欺詐師/index.html","ed5c5e60c315a6962f833f38431d6a20"],["/2022/02/28/Review/前輩有夠煩/index.html","7200f0e6b04b3f06d96f9ae35c04495f"],["/2022/02/28/Review/碧藍之海/index.html","af4da7abf61e94e920a1cbac7eb70be1"],["/2022/03/05/Review/落第騎士英雄譚/index.html","314cfa2f203234dbf4c658d5635458d5"],["/2022/03/06/Review/Another/index.html","a234dfb37b046a52e6856af2e41d18d9"],["/2022/03/06/Review/入間同學入魔了/index.html","abe9b97687dd63d63f7b5a453dc603b8"],["/2022/03/18/Review/再見宣言/index.html","9f2cda6242e4ce860482bdb9daa8693d"],["/2022/03/23/Review/生若冬花的妳/index.html","6ed70682c5697b36bd9adced8774762e"],["/2022/03/25/Review/天之弱/index.html","848b231005f29f8a95c1c43c224e4ac5"],["/2022/03/31/Review/滅了天道之後轉生/index.html","76ad455df1048a04749bddb3f9da024c"],["/2022/04/30/Review/泡泡/index.html","f824cbc8b9f58b411c78bd9eccecfd20"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","3007dd5108154a2ec099ff1f994c6163"],["/2022/06/13/Review/偵探已經，死了/index.html","eb8d1190de0f8c8c974a395a5f5afb62"],["/2022/06/14/Review/黑色子彈/index.html","caf4f0e964c59121fca758ea10d8c62d"],["/2022/06/15/Review/黑白來看守所/index.html","3e271a42a8806de0a5de735590792d43"],["/2022/06/16/Review/虛構推理/index.html","6305a540300c2f645a2d2d2ef09652cf"],["/2022/06/17/Review/戀愛與謊言/index.html","f793f40659c2963f72cf6164abc0c0fa"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","dbcf04d04988dfaaff1bd667c7939170"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","1dde6861e13b6af4f90283247b0925af"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","f5e9bf65e5defcde948bb54653cc8bc1"],["/2022/07/03/Review/Hello World/index.html","44696207f20d3b5f82ed75a526f658f0"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","ca77b82ccd9511218244515c64cc4fa6"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","f097188d25b9230f7ad122d579a02040"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","539514aaf85f8e1e64a6b777948b1c89"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","b8702fdfec0a09a2b40ac092396ce0c0"],["/2022/07/16/Japanese/動詞分類/index.html","59ec5434f2ca9bc30f6388596d29db34"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","2a22d32e0b75ec6801921e924bd9a501"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","b8f1aab6ec871e7ec89587da58397af2"],["/2022/07/17/Japanese/音便/index.html","5253e83d0916d8079bab11309963e063"],["/2022/07/18/Japanese/動詞 時態變化/index.html","14388aded1854462ba7ec3f4784acdae"],["/2022/07/19/Japanese/助詞用法整理1/index.html","23122550f5d1788905ff37c84c5a8b7b"],["/2022/07/26/Japanese/助詞用法整理2/index.html","92e59903787205960fc61f1a9c7defeb"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","0328e382fbaca77af391f8cf83c3f595"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","fa29e5701ac394daa2a8040f7beb8794"],["/2022/07/30/Japanese/疑問詞/index.html","c95c6f4441a3da89b165e7c9097e169d"],["/2022/07/31/Japanese/助詞用法整理3/index.html","5992b764613866dc3e2d15cb0782a41e"],["/2022/08/02/Japanese/副詞整理/index.html","d66ed8841681e357e47301ab54e2e134"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","bda904f7a425b468de94e1b3a1eff469"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","2f28622609f3514485a633c56d27eae3"],["/2022/11/22/Review/組長女兒與保姆/index.html","9447d503bbe2ee3176bd2ff680f68813"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","b5c577bcf023a5ed53cdaffe1ca55ade"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","9a1614e6db184a42f03d5644e508c374"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","f8005965060fd1d2254d373cb1075ee5"],["/404.html","5f36c3b96ec6a8d19860d87c646348eb"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","1d95dd1b2d80623fe6eb62862803e1e2"],["/archives/2019/11/index.html","18416a78a01fd4e2026329d68aedabfb"],["/archives/2019/12/index.html","39b8292c0a811761292ab1ed0394432c"],["/archives/2019/index.html","38d2732c26cdeb960d579ca6c706071f"],["/archives/2020/01/index.html","8816a239b0132008c21a99fbb3ecbb80"],["/archives/2020/02/index.html","014adb8530091de7c069f9f1916955ec"],["/archives/2020/03/index.html","dfe415b43f59486aefbf7116b5f88e3c"],["/archives/2020/04/index.html","70fe5b7e406293111d4b088b57e42040"],["/archives/2020/05/index.html","9ea590346752b5ebfabac445fb3dc1a5"],["/archives/2020/07/index.html","3e298eaa99c841ca838f65cc7bde9bec"],["/archives/2020/08/index.html","4845907606e4892ddcc847b0c09e027a"],["/archives/2020/09/index.html","bc7d5a928b38e56f764e62cbdace5402"],["/archives/2020/10/index.html","5fe66b74eaa99cf742687c1293c5218b"],["/archives/2020/11/index.html","d71e8a3fef0a2b250c807eb34140356c"],["/archives/2020/12/index.html","a586cfe5257cb824a077bbeaeb855673"],["/archives/2020/index.html","6e76336af7c9c55461b90afaf8891e11"],["/archives/2020/page/2/index.html","b74a1a5234606298a824ca34eaa29976"],["/archives/2020/page/3/index.html","9d7ffba26c5955a845621aac1c68418f"],["/archives/2021/04/index.html","e7f0b4b630e5bfc0b946c92bfbd1fec3"],["/archives/2021/05/index.html","aa6567202d58082caac3071c8b07e130"],["/archives/2021/06/index.html","bca5ecfaf14ae4184af41ef37ed70dcc"],["/archives/2021/06/page/2/index.html","33fc911a21c05ed199b2b1756c5f8b3a"],["/archives/2021/07/index.html","ca358c5671a4dae2f6cbe3ce309cbd24"],["/archives/2021/07/page/2/index.html","3baf1c98b9675830a3e15a8fb71e8757"],["/archives/2021/07/page/3/index.html","3b808486523248c8564f5026a85366b5"],["/archives/2021/08/index.html","b48465a5753bae7d80d4b5139628babf"],["/archives/2021/09/index.html","da6e436be88e05f826acd42af1caac26"],["/archives/2021/10/index.html","92ea04a0731a85bd48acc3166bf5d7bc"],["/archives/2021/11/index.html","97be47a32783758119ebccba4f9bc0b3"],["/archives/2021/12/index.html","97a63d44808ddfcf495f517affda1858"],["/archives/2021/index.html","044f40f6658c5234fff700cc14c46183"],["/archives/2021/page/2/index.html","3f2ee2985f23263aa62536457bed6bc4"],["/archives/2021/page/3/index.html","582ee2060a8b7e43e38e3662583456e6"],["/archives/2021/page/4/index.html","a08c168d1135727552e1274ccf9728d9"],["/archives/2021/page/5/index.html","56726c5566be10f0f2c9cba7e36f42cc"],["/archives/2021/page/6/index.html","e564facaaa454f56b2275a7cc47de704"],["/archives/2021/page/7/index.html","21d9efeedea9f5c71330a97566b6a712"],["/archives/2022/01/index.html","f9dac1a9eee01bd45ff2dbc92f24f236"],["/archives/2022/02/index.html","c6009b7e0eb5dbbc46ee220a35b93c1b"],["/archives/2022/03/index.html","a46899abdefc72c960a58f008c38d2cb"],["/archives/2022/04/index.html","c5ce48f1f07027240074a6d26c68e720"],["/archives/2022/05/index.html","be36527c45b26722951f7518d8ebcc91"],["/archives/2022/06/index.html","0869e541fe39be879cca42c3162cf2fb"],["/archives/2022/07/index.html","1704740c259345b441c42f74bd5541fc"],["/archives/2022/07/page/2/index.html","4817b491b1dc6d0b97fe31e9ca3919e0"],["/archives/2022/08/index.html","9e5964a5f083b91c1ca7cf0f49bcdc05"],["/archives/2022/11/index.html","6b2f5f7a06094f94a07579195aa5252b"],["/archives/2022/12/index.html","cbe052e898889758b2b6e13d77a416cd"],["/archives/2022/index.html","58ff92d406dd792dc87a9d8a03821581"],["/archives/2022/page/2/index.html","18594d9d32a6fca16fb13bd2a88b1934"],["/archives/2022/page/3/index.html","d8f41530b7758e6f6a07a037be575a2e"],["/archives/2022/page/4/index.html","cc0dfda236263e41c4ee0219bd0137b6"],["/archives/2022/page/5/index.html","a704245e962908ad7b46625df13c23b2"],["/archives/index.html","8439c20cc152cbeab179a666a20f6b2b"],["/archives/page/10/index.html","a4927e6d23873e9c141649d601d4d3c2"],["/archives/page/11/index.html","abceac34d01c74299fcaa421e9214c0a"],["/archives/page/12/index.html","e5af30fecd27b7ee56383d4c7d4592b9"],["/archives/page/13/index.html","177efaa7a8d7cac667707ad7bede82bd"],["/archives/page/14/index.html","f3068d383694a7069e28f30292fc1772"],["/archives/page/15/index.html","de3f5a1a21485acef926df332ac66630"],["/archives/page/2/index.html","21b2e1156d07ff4b57d7572f3879cf4d"],["/archives/page/3/index.html","4c7b8ec44939df5dfd83eec69434ab4d"],["/archives/page/4/index.html","a24409d3be48bb2d6f03f49dcbca3df5"],["/archives/page/5/index.html","75ec8e960e809c4f2920600e0a1ead2b"],["/archives/page/6/index.html","c77d6d2f4b2ffb1eacd09e00349c2dd7"],["/archives/page/7/index.html","89fee7407f351c51e41f335b1ea6b022"],["/archives/page/8/index.html","bb617588308774bb42cbd57eaa4d1abe"],["/archives/page/9/index.html","f63dfd33d49a35b1714d6e870111b9ff"],["/categories/Programming/index.html","86623bc361bb1f187d38d85278ea2ed2"],["/categories/Review/index.html","0eed6b0bb0031ebf08d41ebaec50520c"],["/categories/Review/page/10/index.html","5636e025afd82da4bcd91eb67069c243"],["/categories/Review/page/11/index.html","e199a8681adf09b17964bbd4a8918c62"],["/categories/Review/page/12/index.html","51b8310ec638c48409d34609a83cf29c"],["/categories/Review/page/13/index.html","7f143ba69df3db2fc3c85f3566471fb6"],["/categories/Review/page/2/index.html","0bed6b061634019dd71255b835e17a35"],["/categories/Review/page/3/index.html","7554e9e0001c7738112bf45c9cd64002"],["/categories/Review/page/4/index.html","513b0889bb03e0d4700f86ab4589dbac"],["/categories/Review/page/5/index.html","923e25a19cbb065c327489ff83642310"],["/categories/Review/page/6/index.html","9cc944c3595c0dd6da3af213cad1565d"],["/categories/Review/page/7/index.html","2fbcd784ca67c14c3dddc9dddcb1bba6"],["/categories/Review/page/8/index.html","b3b31cf7b7e39de1d6d6af3a05ab26b7"],["/categories/Review/page/9/index.html","36158729310e59f3ab5c93639a37c203"],["/categories/index.html","6cb5495a47e971af9d1e27dbc69aec88"],["/categories/日本語/index.html","fc9c69fe2f31e60d2fa70d13c05801b5"],["/categories/日本語/page/2/index.html","73de4488df7f7e5faa1c5aba8617dede"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","31b4d7a51f7a43f0b91d7e2ec0cc6bda"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","82119ebebb26a7b4d591541e339c2404"],["/page/10/index.html","2027bfa07998a6b80a638567bdd7803f"],["/page/11/index.html","02b8c5f4cf14072303c90430c4567279"],["/page/12/index.html","a6101de06a8e5b00e97b47ba38a40d8d"],["/page/13/index.html","9d6052539dfcd272e21443bfeaf680c2"],["/page/14/index.html","2a74b982d318ae8e7fc332f128256647"],["/page/15/index.html","bf322d045ee3fb8aa0e461135b072cca"],["/page/2/index.html","034127d888142b9a9dd24d3264ee2d08"],["/page/3/index.html","7dbc55db0930e1d5580ff03ddd2bd439"],["/page/4/index.html","9e5b5298666b939202f5d461a920d376"],["/page/5/index.html","69cff70a396955d05645036a3f240c41"],["/page/6/index.html","31ef148eab37ac9847ca3f2c12e121b7"],["/page/7/index.html","3cdbb0e4695b2731be927de26751f5cb"],["/page/8/index.html","6ff3c86cda859ec1a66a8cea16c8e809"],["/page/9/index.html","c9a3c816185d43d4979a15616dd68f50"],["/sw-register.js","bbe32ac40c8628bc8cbd0452450d0921"],["/tags/10分作品/index.html","b71279295d5d6cc28b83164b632d55ba"],["/tags/3分作品/index.html","1dfb0f16905889efb3efab835fff24e5"],["/tags/4分作品/index.html","b36d7eca670e1e47984edb7fae6412f2"],["/tags/5分作品/index.html","ee83330ad62c3c6c11f8982eef497763"],["/tags/6分作品/index.html","9ace6804133fd031f9c4412e1a8a41b2"],["/tags/6分作品/page/2/index.html","93eb75d126c4dd384d5d87dd6fbc9ccf"],["/tags/6分作品/page/3/index.html","4a3d92a76eee229f542a482c2ad71c4b"],["/tags/7分作品/index.html","7f96f21d224e8323ee9382ec7b5e6242"],["/tags/7分作品/page/2/index.html","c26c016ad781dd91d7391a30b08f0d8a"],["/tags/7分作品/page/3/index.html","53db78f08e97e60878a59eb39d7e7a5b"],["/tags/7分作品/page/4/index.html","1388d9878aefdf7ee4897524748b8a10"],["/tags/8分作品/index.html","9fd8386f6ac3cede68710bc676bdf171"],["/tags/8分作品/page/2/index.html","b99e4478f814ee4ef6f4e068cc53fb7e"],["/tags/8分作品/page/3/index.html","8affcac53c64701bb452daa5316bb417"],["/tags/8分作品/page/4/index.html","84ccdcf3e82a0f58be04d101be15bf2b"],["/tags/8分作品/page/5/index.html","52440d633620d8f615a5f575b84d9034"],["/tags/9分作品/index.html","e8bcd42758017e44f289b93fb997b7b4"],["/tags/N5難度/index.html","98c6ec83338faf8e602dbe0d3f73538c"],["/tags/N5難度/page/2/index.html","8e375271f80c0f6346e0870333368cd4"],["/tags/index.html","e9f5adc8cb843141a903a912ad6a4e37"],["/tags/アボガド６/index.html","5f82265a3f1a1a0fe1a1683ae33b234c"],["/tags/三秋縋/index.html","133625534070ad4417524006428432a4"],["/tags/中國武俠/index.html","1e0e9e339abfaa2cc4812341a451bafe"],["/tags/中國言情/index.html","d38244720fae72573851aca9dded490e"],["/tags/二宮敦人/index.html","5d6b68eab956296531ef21c2f8e1c547"],["/tags/人性/index.html","7c80d19bed3dd7f17561a3528e733d5f"],["/tags/人際/index.html","2df001f72f3b725a9f461297b3c09b51"],["/tags/住野夜/index.html","d32743cd123e947f8b4c4fc1bd13cfd0"],["/tags/佐野徹夜/index.html","ef18b2eccdb5e44344ff6d20e93f6527"],["/tags/努力/index.html","ec1fd947bce0a264afb161bf460bb6d9"],["/tags/動畫/index.html","c30d83a154061f5b4b0c9d62e1ed9814"],["/tags/動畫/page/2/index.html","d0f7084bd114fee5693850bfcf540537"],["/tags/動畫/page/3/index.html","a2407d4026d33223832ed65a2453564b"],["/tags/動畫/page/4/index.html","8f44b9f39adcbef88e206696eb56644c"],["/tags/原諒/index.html","2024cf7b3c54f69f7a591ded642ceca7"],["/tags/反烏托邦/index.html","9774ee4dae967c4007d79f334c55ad82"],["/tags/啞鳴/index.html","771d6741ca750473c0612a9aa87f4e15"],["/tags/喜劇/index.html","356d77723bb648a807765c5673ea3f7f"],["/tags/夢想/index.html","dc043eb74208b6dd6222d8b725ddb573"],["/tags/天澤夏月/index.html","d3c31170a0e54cd05d33b6b1d5a3b0de"],["/tags/學習/index.html","fd535534adeee262caf1e573d936f5e0"],["/tags/學習/page/2/index.html","353e8375461be2539bfeba6b4ecf554e"],["/tags/宮崎駿/index.html","436042c681603f98c6e1676781b06ff6"],["/tags/小說/index.html","c8d6b76e04234f5ecb403306afda8212"],["/tags/小說/page/2/index.html","ca79427ef43a265a80773ef6803bdc49"],["/tags/小說/page/3/index.html","29764c3ab086072a10733a72c32b4abf"],["/tags/小說/page/4/index.html","58fbd232e2eb2a9f1814b6375683e2c1"],["/tags/小說/page/5/index.html","87101ec69be3d9db775dcbdb72fba97f"],["/tags/小說/page/6/index.html","6fe3bae00c2ed9becd678b3dbdb4789d"],["/tags/小說/page/7/index.html","31faad57d9e5ecab94530d1d0955348a"],["/tags/平淡生活/index.html","0fbb3206e37b6a5befa5ed2d68d7d2ff"],["/tags/幸福/index.html","bd0397e991c5d47e2d0082388859deb0"],["/tags/志茂文彥/index.html","eea1710cf20a7416b0be58966a0dafe4"],["/tags/愛情/index.html","bd7c7d3817f496f82d910f01930a9c44"],["/tags/愛情/page/2/index.html","486a788399e951e99ba7e523f5dc4a8b"],["/tags/愛情/page/3/index.html","ebdb2676cee362943146744560fabac8"],["/tags/感動/index.html","617415f6599cfdbd4acda7b2a25a4538"],["/tags/懸疑/index.html","f97369d38bf40c007699c9795114b31d"],["/tags/懸疑科幻/index.html","0517f9f744691549e5e090af52e4b159"],["/tags/戀愛/index.html","ece66c7cf8876c2df086b01bc1db827b"],["/tags/成長/index.html","a206329313aad183246a855a36bb6a8b"],["/tags/成長/page/2/index.html","a83bd507aebb706afcd0dfdd19a5cb13"],["/tags/戰爭/index.html","187b5360e9f161ddc5fc27ea5a371740"],["/tags/推理/index.html","ba4ffc32c92a9a234e14776574f007bd"],["/tags/搞笑/index.html","adcb21c48fbd7adb67e1513d90f1d3e9"],["/tags/救贖/index.html","c7669309b91a4c37e8c468619a7130af"],["/tags/斜線堂有紀/index.html","8218566f6835563f1d2acd9d0fca881b"],["/tags/日常/index.html","913eedeaafdfd1499049a7bf97b60719"],["/tags/末日/index.html","5a39d30a745c9e4c3fcc35d0e82b1fd5"],["/tags/校園/index.html","00c50bb43c40a47e50981052f968f293"],["/tags/武俠/index.html","4e44f49119b48ea52489097139945e5f"],["/tags/武俠言情/index.html","d16c9055f420ca9176899fb64d42cd80"],["/tags/漫畫/index.html","3a7de4d40c1d8c346c65e2c426c4c6c6"],["/tags/生命/index.html","502096e541ee2a975856dfd715d7d7a6"],["/tags/生命/page/2/index.html","995f3b7525c72bb997ad080b1995f8d9"],["/tags/短篇/index.html","9b07c25f64dff4aa71571fee0ac5b16a"],["/tags/社會/index.html","0b8009ad1ef931962b11658cddbeb4ae"],["/tags/科幻/index.html","0c3f390bdf325a8c099ce70e4254b3a4"],["/tags/童話/index.html","5a464f938eb831f5ae02e9c7cdb5118c"],["/tags/競爭/index.html","43f7e83d75ba75d433899aabc5063eb8"],["/tags/自我/index.html","a45eef7cb2f80ce0f833de441afef44a"],["/tags/自我認知/index.html","f5351bb0329152a7d85908ee084f987d"],["/tags/葦舟ナツ/index.html","2e4850042fe8af69aa84bc0b10fa3427"],["/tags/藤萬留/index.html","75b78353f06e404052e94ff8d02071a6"],["/tags/親情/index.html","fad160608947349246db1a479bb29499"],["/tags/雜項/index.html","875a2b7bdecb66c07bf515c2ca9d76b2"],["/tags/電影/index.html","f23509dcc1088ed2e222d2d0a9648672"],["/tags/電影/page/2/index.html","7e8cd6f7283c4fc0a394eed2ba5ca921"],["/tags/霸凌/index.html","208982057add33aa6b391ef5a5d021f9"],["/tags/青春/index.html","abdb00ecbc6a52b9ca0f40da14e29723"]];
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
