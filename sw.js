/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","a83cb2fb6a5702181fd89684fda3274d"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","9dbb4fe4af0b0b7657871f4c710306cd"],["/2019/12/25/Review/無法計算的青春/index.html","e03b1b5c7f37679ca35c6c4c95a95aef"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","033e0a48dcc2a3542b6218c5cd351941"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","744d99264addc4daf08709596fa2d8d8"],["/2020/01/19/Review/下雨天，不上學/index.html","654a2a4b39dc9f77b19632ea1dff46f3"],["/2020/01/26/Review/三日間的幸福/index.html","5e1aa6cfe77c09561075a2b5aac0dd8a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","3c9b6cbcaede3bbdfce6f6e21476c769"],["/2020/02/09/Review/青春期超感應/index.html","e87556af05a57afc566fb85a7e5a91a5"],["/2020/02/15/Review/又做了，相同的夢/index.html","4e5700a694d643e13cf9b063a8f0ddbb"],["/2020/02/22/Review/回憶當鋪/index.html","b4ad0ec5a23b82a33d8e8742132b2135"],["/2020/03/22/Review/不適合自殺的季節/index.html","307cb57f372d634dcb52b08a88c2ad7b"],["/2020/04/26/Review/我們都無法成為大人/index.html","7b0fe94b56a6fa39f6f95dc3d3dc778a"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b8e9c99df294262f342685dc364d40b4"],["/2020/05/17/Review/人間失格/index.html","0e522d6a2317aa29e3509cc83ec47ffd"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","c3a305467cb5ac749239e268b998a726"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","8075fcfcb47fa6162e910dec8b5f965c"],["/2020/08/01/Review/銀河鐵道之夜/index.html","498eafdf2c00a0e8bde70e615627a2c0"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","7f9675d8e6c1e096542b8cb099ed0bee"],["/2020/08/16/Review/15歲的恐怖分子/index.html","4f89449b983b3adff05c1abe854f15e5"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","c032abf6ba3057ec1482c37e2c92a225"],["/2020/09/13/Review/羅生門/index.html","d0031534af067e160eac2649c52176ee"],["/2020/09/20/Review/闇夜的怪物/index.html","d3737bce9b9abf2ee7bc4d39ed2adacc"],["/2020/09/27/Review/14歲，明日的課表/index.html","9762de2e6fc4839195f229a0c54c5041"],["/2020/10/04/Review/致十年後的你/index.html","b66b2bb7bfa30c9cb783aa6ccb01cc34"],["/2020/11/08/Review/滅絕之園/index.html","6b3fa28e4548236ece32a0018e6882ff"],["/2020/11/15/Review/將愛拒於門外/index.html","541b24379901d5638c34204385d9a0c2"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","293143a702991877e70316df43f83cfd"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2abb5675384705178244813cd7fa7cf0"],["/2021/04/22/Review/道印/index.html","645ef90c1f2cedad20dd2701c05fbf91"],["/2021/05/03/Review/戀入膏肓/index.html","085e621a22e53994751476bc1dcf96df"],["/2021/05/10/Review/Dice/index.html","d21c54214a434736961f07b67a9cfdb1"],["/2021/05/15/Review/魔女之旅/index.html","5f121c4c67322410679a49414fb42350"],["/2021/05/28/Review/戀愛寄生蟲/index.html","43b21868c9ed65257f637ed04170d6e2"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","dfe0fb6be7a2ceaf8a017f72beeea3d1"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","91252e8845764c5554d906463634d346"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","e36ec12f835b8c0ec19015ec35dca039"],["/2021/06/05/Review/流浪的月/index.html","dd8c44312b2fc988c42bcd7613ac8c63"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","60a053e02daf89f442d9f377bbb4a8d1"],["/2021/06/13/Review/第一人稱單數/index.html","af96e0599f07d49ca341861469cb1738"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","9910ca531a174c58630604aa807bcc30"],["/2021/06/16/Review/願你幸福/index.html","5a1d49fa2e40e0171b6ebb5d772f1d33"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","7a9432861132251c8164e92b5c154416"],["/2021/06/21/Review/神隱少女/index.html","56acc2222862c626c77e75375992e15d"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","249d10cad00666fa0eb469524cd3197e"],["/2021/06/23/Review/天空之城/index.html","50441fc9266dfa8bb4829568bb32a6a7"],["/2021/06/24/Review/魔女宅急便/index.html","6ac55707df634eb30287d56ae4bccda1"],["/2021/06/25/Review/借物少女艾利緹/index.html","36282cf88a1a76ac7ad948e5c7250740"],["/2021/06/26/Review/魔法公主/index.html","9a7087eea8ed2561cdb01e46173aa11c"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","e58d57b77c67fc035b75a121b2f3e111"],["/2021/07/04/Review/飛雪與劍/index.html","f1a8519e5f35b0cf3838a0425693e6d3"],["/2021/07/09/Review/地球防衛少年/index.html","811b5780c2f9b8a07b5927395aa5718a"],["/2021/07/12/Review/Angel Beats!/index.html","d6f717610115e8dffb07ec57f34bfb6a"],["/2021/07/13/Review/Clannad/index.html","ed51defe47ed80cf79ec833e00308495"],["/2021/07/15/Review/AIR/index.html","00547bd26a5e7328994da5ce4cf81d6a"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","5af1952f320fdf1c105b57fbccdc98cf"],["/2021/07/15/Review/螢火之森/index.html","82bcba79d84b4f2cdc6d09d4458c2513"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","90a7ab370d9df6a5fcc3f40e274f360e"],["/2021/07/17/Review/奇蛋物語/index.html","9f67d805fd761af0a83659cc15fd40c2"],["/2021/07/18/Review/Vivy/index.html","2b3734ea51dc6dae829bbd7da7b68e17"],["/2021/07/18/Review/請妳消失吧/index.html","42e2efc3f97b2ad36d6593b88818ee68"],["/2021/07/19/Review/漣漪的夜晚/index.html","f2496fa43daecba253403dce76a51363"],["/2021/07/20/Review/月色真美/index.html","eb233b79cc822a264be481bbfe6e7f54"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","abae42946a947d0390975ba6d23fa6f9"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","44babb45120aa8c4eabed8f7414d5d94"],["/2021/07/22/Review/罪惡王冠/index.html","df641f522ba31339ba89371090b58fa1"],["/2021/07/23/Review/弱角友崎同學/index.html","45253bc6c2e8304d2e6c0a5fb7593ef6"],["/2021/07/23/Review/惡之教程/index.html","6643eccabe1fb895c4695822374b2a90"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","6b5d3d4e582c195a96272a3bac968869"],["/2021/07/25/Review/魔王勇者/index.html","227203de6b7d84ce584d3604ace8e45f"],["/2021/07/27/Review/一年A班的怪物/index.html","51348bc1253af67365974a7456474989"],["/2021/07/27/Review/奇巧計程車/index.html","0c5bb3f389f5b5a826c8846d41fbfbc7"],["/2021/07/27/Review/專情的碧池學妹/index.html","b18358cb54a03f67fb43c0505eb8fa0d"],["/2021/07/29/Review/只有我不存在的城市/index.html","4be599c19cf2c4bb73aa06e10b506b5e"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","45a1a8b20fd619180423610da31c8ab7"],["/2021/07/30/Review/可塑性記憶/index.html","ab8b767c95015d2bea1babf6c4114442"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","63617f90cefcfcd27db2741cd5981644"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","67461dab8fba9594fe31685eab1e5c0f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","e4aec2adaf652439a7a0b5cdd9b2d992"],["/2021/08/25/Review/清戀/index.html","c897f69775a33c75ff3a0940e280deff"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","310be6ecbfc6073eeec85b7c71e8ef24"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","172a08da46f6bfc60e6113843d69d056"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","148fe6a7f32647f717df3fe9c722b5e8"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","429c2016d2b597de61c92ee3f692962b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","d23a196f099897aa10d63cc8d855ac16"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","9a84ff93142c17b40d3eeba9d87bb72f"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3e7f09dbae65646ba1fcf7310b6506a4"],["/2021/10/16/Review/龍與雀斑公主/index.html","3c947b473eb11abd9d0d2219d7e9bb61"],["/2021/10/19/Review/孤狼不想開後宮/index.html","d9bd3dabe3fdd0b8f7e1a74feb049504"],["/2021/11/13/Review/徹夜之歌/index.html","e2867e84d9eb314440adb94db962becb"],["/2021/11/24/Review/武煉巔峰/index.html","40ace02ed84da032629600017dbb7479"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","dde1cb1490d3da7d44534c85809a0751"],["/2022/01/28/Review/神醫凰后/index.html","4353746e1ef1f8338228f4e2c601a288"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","38989e1506070a32011331561ac96de4"],["/2022/02/13/Review/夏日幽靈/index.html","36e3aafdcf56f3211bf90d1798e76820"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","2cc2776a9298b44bd9eba0fc2ace8812"],["/2022/02/26/Review/賽馬娘/index.html","c6f3922dc4d64a8137084a51514b90ed"],["/2022/02/27/Review/大欺詐師/index.html","686b740e4de55796052d7423f22b6b0d"],["/2022/02/28/Review/前輩有夠煩/index.html","5afb2206180d19a1538c452db1ca3fe5"],["/2022/02/28/Review/碧藍之海/index.html","9f006e615d1a2f23f638aff59734e801"],["/2022/03/05/Review/落第騎士英雄譚/index.html","f5dd9464d0ed9c50650aa22ee35de7a9"],["/2022/03/06/Review/Another/index.html","ee0d3935ffaf8ae214e275ff6ca269a2"],["/2022/03/06/Review/入間同學入魔了/index.html","47381b9703080151fa889ea04b1f8aab"],["/2022/03/18/Review/再見宣言/index.html","2b9de7a3dcbca59c0d64711bb7a5101e"],["/2022/03/23/Review/生若冬花的妳/index.html","715a3aae74802c03265d9be0a26fac52"],["/2022/03/25/Review/天之弱/index.html","8645e70ab4baa10c52d6b8634900c060"],["/2022/03/31/Review/滅了天道之後轉生/index.html","5a8c7fbfaabac1a16b55ad7e4be427d2"],["/2022/04/30/Review/泡泡/index.html","9fadc6bf976a0c5716ddc158db12c85e"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","d5c487e596c04856d482bfaf6680a483"],["/2022/06/13/Review/偵探已經，死了/index.html","fd7810875d967f50de2bafbf4556a7c3"],["/2022/06/14/Review/黑色子彈/index.html","7920298d79ece30b04e7ae7fbbff148f"],["/2022/06/15/Review/黑白來看守所/index.html","bf9ac3b24ed69c9e5c57ea13f7799ba1"],["/2022/06/16/Review/虛構推理/index.html","03a0c4c64e122f1b1ea56b2fab7152d5"],["/2022/06/17/Review/戀愛與謊言/index.html","7a536af009f269fe7dc16fc1d8610559"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d7dab70fcc0e42245c9c1c02d59055d0"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","ee799a8e7302a1c338ed26e5a38ec03b"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","972d351f4a7a171b6f6772df49aba8b0"],["/2022/07/03/Review/Hello World/index.html","db8b75caa609f76ee40440d1e73d783d"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","ad32ef4d5ad67302a3ba5bf1d2c49a27"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","7101a8804382e19039f54ca82cc21796"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","fcd3e0e914da104e6bab29b825b99d56"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","1df39f644807807d4c2b2be0e9094785"],["/2022/07/16/Japanese/動詞分類/index.html","df43eaad7d3290b0dbc6baa35a0cfa9b"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","75808619399f828b4e6d5304ca8bcb90"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","ef0cab4609551325113f643c3207e8c7"],["/2022/07/17/Japanese/音便/index.html","5b0ebb850cd8d3e9c2ba09ce84bbcaff"],["/2022/07/18/Japanese/動詞 時態變化/index.html","f17f711eda7cdbc7bf1e8affffc914b6"],["/2022/07/19/Japanese/助詞用法整理1/index.html","9a76be96d2218ceadde2f4e43dd48572"],["/2022/07/26/Japanese/助詞用法整理2/index.html","8ea5ec14f47cb49b4c82c4775bde318c"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","be1888402d864ba643ef14ab7071ffde"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","d9af378373979004d4417bb356eccc16"],["/2022/07/30/Japanese/疑問詞/index.html","908ead926b990d588d9eb59c2b1f9e2d"],["/2022/07/31/Japanese/助詞用法整理3/index.html","f1b0c31d231cae98dbfe7052aa778350"],["/2022/08/02/Japanese/副詞整理/index.html","cbc7ed91bd4dcb2c51c76ed6ee30adc8"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","ca12639108f8780d119adf987a4d0af9"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","aea829f8ad9d42b75fc37dd690c6a961"],["/2022/11/22/Review/組長女兒與保姆/index.html","3bd1c60c4e825c676787ea755d84c8e4"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","39eeb36fca6452bb47ccb1d687d5acf8"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","c44fa54191276fc66a0e27a65da347fc"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","c61d0a5ce03afcfe45f2e71fd79721cd"],["/404.html","e29286473b234c8db2a04f0b98242e2d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","64094b1e5470c2f5eaa67d183fdef7b7"],["/archives/2019/11/index.html","38dc9dbe3166562c216ea5f2f1a1d07f"],["/archives/2019/12/index.html","baed529161e642708777f7c006cead6b"],["/archives/2019/index.html","34cfb1f33e55460bf0aa01851590f1d8"],["/archives/2020/01/index.html","880ecf254badf183ab271c569b021332"],["/archives/2020/02/index.html","23de4d41b76d4ec144325817a7a3a291"],["/archives/2020/03/index.html","9aff6ea502792ac89208fcfbb801ac54"],["/archives/2020/04/index.html","f698f2496328e8133eae7ca08e60e7d2"],["/archives/2020/05/index.html","54f093a9e14a1f153aedb129c68e1d28"],["/archives/2020/07/index.html","89870903d97f36ac9be8df5814ef0c98"],["/archives/2020/08/index.html","35f2426eb0ca7a363629f4c46bdac0f1"],["/archives/2020/09/index.html","dc4deb2774dc03d0b15c211e87edbd2d"],["/archives/2020/10/index.html","bcd850886760beec2a5452058b892fc4"],["/archives/2020/11/index.html","868bff4349b8f9ca2a491d75c0c68df6"],["/archives/2020/12/index.html","4e84b0e8435720482296c11c99353738"],["/archives/2020/index.html","459fee4814c7b8332564063b34843937"],["/archives/2020/page/2/index.html","f07d0ed701601c2a84f09ad3b91d7698"],["/archives/2020/page/3/index.html","b79b9929d5e17bf7a6d5f584dedec60b"],["/archives/2021/04/index.html","0cf55bb28b5707e6de51a422039d5ba4"],["/archives/2021/05/index.html","8c8f7215d0b99796c27341870a68fe9c"],["/archives/2021/06/index.html","4ab025401ea8c6e61ac23738c3c3b622"],["/archives/2021/06/page/2/index.html","71549289a296e8934befd3589b215325"],["/archives/2021/07/index.html","d2b675433241ec29fa8054f9ab221991"],["/archives/2021/07/page/2/index.html","8c69cc5ee2be96c2fc11c18b3bebc256"],["/archives/2021/07/page/3/index.html","cdc03f0aca6a5fb30b11e72ccb6ca82a"],["/archives/2021/08/index.html","b6b57c8bcbd5ca643e115802ace0e128"],["/archives/2021/09/index.html","52f0c5945abd6c4aa7083df079e07bcc"],["/archives/2021/10/index.html","dd8bb269fa4baf68ef328512202b96bc"],["/archives/2021/11/index.html","9fcd6945188ca8493c6d810d8250b018"],["/archives/2021/12/index.html","b6c3cf3c3b54cec080947a13e586d0b4"],["/archives/2021/index.html","ed9b996d7233f1e9050132f459a29ad0"],["/archives/2021/page/2/index.html","cabeed976bdeab79768a8bbb61b34524"],["/archives/2021/page/3/index.html","856d68bf0c27b584f4ebf7a09a126ef8"],["/archives/2021/page/4/index.html","1ba1b9bbc0ff9132100d8e950aafe6ce"],["/archives/2021/page/5/index.html","61bdfb38035abd369eb5264fc58ef7a1"],["/archives/2021/page/6/index.html","15a25ff81bce4dbf2ae5357cb4677df0"],["/archives/2021/page/7/index.html","9299f323431509b99b8ce31776872732"],["/archives/2022/01/index.html","d10b33713a9e03c7c8f9b697dd45ede1"],["/archives/2022/02/index.html","0b39f2c6ee3d4614374b1a700f769625"],["/archives/2022/03/index.html","c4b1ca632b802386308963dfaa3cedd5"],["/archives/2022/04/index.html","1fad4b82dbf4276c692037a366d43cf5"],["/archives/2022/05/index.html","561f3399d5cbb4107e36464912604b4c"],["/archives/2022/06/index.html","599905608714669b085d476e2f601abf"],["/archives/2022/07/index.html","57a1f69d811b9280c30791f6f9f74f44"],["/archives/2022/07/page/2/index.html","c79ab7ec9b46f13bd71be084145bacfd"],["/archives/2022/08/index.html","6deac98928f5f9722c72f082d99feb29"],["/archives/2022/11/index.html","a5362e11345f779f2ce9e1cc1c9e7b3b"],["/archives/2022/12/index.html","9b8e1b691165e0f9e5cf4684d90c611d"],["/archives/2022/index.html","7e6b5b205385e16911e89174d68f72a9"],["/archives/2022/page/2/index.html","2d2575a607f6f5bf362afa6ea82fe92f"],["/archives/2022/page/3/index.html","32a0af1e2738b6d7d2bcf54bbbb49a3e"],["/archives/2022/page/4/index.html","78b8a77c76a39b7a13a2f102e90e43cb"],["/archives/2022/page/5/index.html","5cad2332d0ab6fc3bac44666ce90e869"],["/archives/index.html","4bb60b4151ce76213ed0f53809221014"],["/archives/page/10/index.html","f941a197d0738e14c532144a9e27b26f"],["/archives/page/11/index.html","0560a9a1aec7f78968ee057413094f9e"],["/archives/page/12/index.html","5e463e9c6dfb5bff2392997bc1765826"],["/archives/page/13/index.html","e2865473bc3bd4bcd0449e72b392905d"],["/archives/page/14/index.html","b02430adf69fdb173d662c5a25ad494b"],["/archives/page/15/index.html","3e97d789e2498f1151225d20096f6306"],["/archives/page/2/index.html","5e59e6535af4ea861d7abc59164d3d42"],["/archives/page/3/index.html","352277958b5503778e2fae37e5dfe6eb"],["/archives/page/4/index.html","e7a180472f0ab707ad26e048dc1d30b1"],["/archives/page/5/index.html","a05154197cbc0da2e51832d563ab1a8a"],["/archives/page/6/index.html","2c7b7cf4614cc869b02ba4688507c6b9"],["/archives/page/7/index.html","82db772810e5eb54131e7ec9bd1416d5"],["/archives/page/8/index.html","198497f0c909352f879c2f9ce1fee6c0"],["/archives/page/9/index.html","9220bcb0c2ea715d527daed3b3f24ec1"],["/categories/Programming/index.html","bdcb7186f8418f748d1f481e5d6a5957"],["/categories/Review/index.html","bcec5e5f70fa14c4a893ddad543bed16"],["/categories/Review/page/10/index.html","103fe10a86f6076137d53ca64d5c6a6f"],["/categories/Review/page/11/index.html","ab239f11e9d27dfe7b53fa23b1b709b3"],["/categories/Review/page/12/index.html","352b391a48380cc5981539ff7a72886c"],["/categories/Review/page/13/index.html","9e306df159de34e8cc6770b2d2c2475d"],["/categories/Review/page/2/index.html","deaece96425e85c955d11f408cbd1fd6"],["/categories/Review/page/3/index.html","f9524ec2b2266b68ecbbe87bf5dcc66f"],["/categories/Review/page/4/index.html","e87bf63750367e25ae6cf7247eec5c2c"],["/categories/Review/page/5/index.html","a8e533974832a0118f0e5749188a2f88"],["/categories/Review/page/6/index.html","3c974457c6db67d2d62f7d0d0027f7e0"],["/categories/Review/page/7/index.html","5e415d75198722fe92048e0e6378855e"],["/categories/Review/page/8/index.html","caff37866b1ed7421fd401919ec6caba"],["/categories/Review/page/9/index.html","7a5cdde00b11f9693a6404f5ab62007b"],["/categories/index.html","2b27d5696e96b91c8864ead7eb5f13ea"],["/categories/日本語/index.html","75267116769861f6baf90f265c1dfaca"],["/categories/日本語/page/2/index.html","746047fb5f59e4b138c47c29f3520229"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0564b853f14cd73d89ecab018dacc7be"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c7b7c7994b498372d0118fe87f2f0d4e"],["/page/10/index.html","7dd74309e18062e66ff5e99b3c3d8c39"],["/page/11/index.html","c72cfeae4351bc173010662d81b25218"],["/page/12/index.html","c308368fbc49cc243697c6e10ca6b70b"],["/page/13/index.html","0e7f0dd7f82de7d145a97a0c8929d27b"],["/page/14/index.html","59546212901408a8a2e7dd2320f68933"],["/page/15/index.html","2dae72ba7f70b344319ed9dc0d819c8f"],["/page/2/index.html","97103666579727dc6f50ace5548c6d3e"],["/page/3/index.html","1cd8a77322907d221880bd5429fd9fca"],["/page/4/index.html","36b500de032ee0eaebae22514b233359"],["/page/5/index.html","f2daf7e5f0ced375398a326308a66257"],["/page/6/index.html","12f120c739b28a1095d8aeb6603ef951"],["/page/7/index.html","a76a02ab1c8caad93cc0c041fc68df34"],["/page/8/index.html","5f3a52863469f9dcf5cd0672d450894a"],["/page/9/index.html","15b10bdcfd7af257bcfda27ca8e5655c"],["/sw-register.js","292c4a9336b3a41fae58e7a0d1632778"],["/tags/10分作品/index.html","7c1376b6a98fee39dc3295515d62aaf6"],["/tags/3分作品/index.html","669d3487ae8d7cdff74cfb00ca07afaf"],["/tags/4分作品/index.html","dbe33d6c5db7e581a7d42564f8ecee9f"],["/tags/5分作品/index.html","a85c5688dd77e791593bec68f74aee95"],["/tags/6分作品/index.html","baa66fe8950db6f704a22fdf1cf48185"],["/tags/6分作品/page/2/index.html","7e4ec6d56d46c02b8fea1cb66f7d7b05"],["/tags/6分作品/page/3/index.html","d2bbc8a0b5b7362e2e66ba640ed8350d"],["/tags/7分作品/index.html","1a80981103ccdfd53db8088d2ea2f6c3"],["/tags/7分作品/page/2/index.html","3ed739c62b83a6c5277e023d51ab60fe"],["/tags/7分作品/page/3/index.html","a0d9210d118e86f93953523343b7fde3"],["/tags/7分作品/page/4/index.html","ebe05f0ee739599bc0852e6f56d32b8b"],["/tags/8分作品/index.html","4b0561d7b1b29cc6d1b14d31704ece58"],["/tags/8分作品/page/2/index.html","3e6d40030bc7834e597ad24640cb78e1"],["/tags/8分作品/page/3/index.html","8b1b06c71ec85189849602fb093c94f8"],["/tags/8分作品/page/4/index.html","bbf39378e9ba70c202a2e4a444a6eab4"],["/tags/8分作品/page/5/index.html","5d0614bad6e1637909cd79b3e2abde6b"],["/tags/9分作品/index.html","4a09e99a575c4e8cb502146f29a492e5"],["/tags/N5難度/index.html","d68209198b10aff0262b6485964e71af"],["/tags/N5難度/page/2/index.html","8713dc192828950d76af7363e6759c7f"],["/tags/index.html","6955ed8b66fb6057eae37231d231ad6f"],["/tags/アボガド６/index.html","3503a9b7c9f3e14dfbeb920dd7dfde56"],["/tags/三秋縋/index.html","57dace9c40193432bae4509a4f4cf011"],["/tags/中國武俠/index.html","35b6a882925c30915fec8d686eac5881"],["/tags/中國言情/index.html","f54b169eded8ce16504a315669efcda3"],["/tags/二宮敦人/index.html","dd2ea47d63b2ea41849c491b26d7085a"],["/tags/人性/index.html","6ea104782d91f393d37df54155cf4851"],["/tags/人際/index.html","d2a1742a132be2e4cf06b2c90b5fff4d"],["/tags/住野夜/index.html","67d5c9eba69d54138364e77d6c34072d"],["/tags/佐野徹夜/index.html","ab00ed54c370099c30c5d512c727a760"],["/tags/努力/index.html","b3189f462580da12f9754a5a4bdf33d4"],["/tags/動畫/index.html","6e17f8a7da1c558f39b68d1fb703a10e"],["/tags/動畫/page/2/index.html","5ecfac65e98d9a184a1024035faefadd"],["/tags/動畫/page/3/index.html","7a196259446a4017d6b2748a76d98d67"],["/tags/動畫/page/4/index.html","e026abfb99fdda3309d43d369193eef0"],["/tags/原諒/index.html","cbecd09af11a34e4725f2841ef6e3ece"],["/tags/反烏托邦/index.html","695b89dc9bd0b662ffc8b3218a2e008f"],["/tags/啞鳴/index.html","958a3e76dbd723c32e12b4a429c2d389"],["/tags/喜劇/index.html","a6d852693677ec31f9bc6773ee6f9fe3"],["/tags/夢想/index.html","05ad0e4639309d1af4c2cef7567817d7"],["/tags/天澤夏月/index.html","0364bd8ff176fceef26542f0f0aec75d"],["/tags/學習/index.html","9f7b21bfd80e2fa738d7231eeb6c456a"],["/tags/學習/page/2/index.html","6a779bd73969c433d197d6d8c33710b8"],["/tags/宮崎駿/index.html","9ae4cfa970646c8bd2b64245d3fad0ae"],["/tags/小說/index.html","645ed208fb31e9ae2350c0604d88bdcd"],["/tags/小說/page/2/index.html","bbba4d16848060c60eaa8e31b1c74d37"],["/tags/小說/page/3/index.html","eb451d7bca5f617ee598a94152b70ff1"],["/tags/小說/page/4/index.html","9efb6ab6d1cf8e61430794818ba4af9e"],["/tags/小說/page/5/index.html","7976bd964cfb360bd8706ef1735d797a"],["/tags/小說/page/6/index.html","429e1367944440e47e820b77354a93cc"],["/tags/小說/page/7/index.html","59f1e1b24ddec3f56ceef6f970dc0336"],["/tags/平淡生活/index.html","c23192876ccc864b358692ce62b7a7f4"],["/tags/幸福/index.html","e3bce62ee064ccbe2e6063311d54709b"],["/tags/志茂文彥/index.html","5d0d0b23def98a0f8d56fcdafcf5ef9f"],["/tags/愛情/index.html","3be8f7979451e0d9db8f6d3dadbb246d"],["/tags/愛情/page/2/index.html","5fcc267f8b1e868ad1867ad994f5672a"],["/tags/愛情/page/3/index.html","cbfc33963143405585b7c2e5e0e58942"],["/tags/感動/index.html","a683a8a67c74cbb09e5e821b2540495c"],["/tags/懸疑/index.html","b6eceead78ddfce25da693d3cd9bfcd6"],["/tags/懸疑科幻/index.html","8cb357f2d8943ec7559da3e848e5f346"],["/tags/戀愛/index.html","13744ec56bac084115dbeaf9274e3df9"],["/tags/成長/index.html","5788ff0710144fbcb080c8639e16a1e2"],["/tags/成長/page/2/index.html","fc7d4147e3bae4f0707984de531f49c7"],["/tags/戰爭/index.html","2debed46ce8f1403a0033ab00b9fb729"],["/tags/推理/index.html","4b8ccec908bca9da47c486ce9f04bf71"],["/tags/搞笑/index.html","f28c0c06ec661d142aa0e096dc4483b2"],["/tags/救贖/index.html","ec1e56a937b96f8e9a32ced70ea287a0"],["/tags/斜線堂有紀/index.html","e21574631159880e16a01ac9a4fc4e5a"],["/tags/日常/index.html","01092e22141fce1d357714849bf95625"],["/tags/末日/index.html","643995a38d37c64fad7eed13ffdbb2bc"],["/tags/校園/index.html","ffe8e62dd9c9ccc5db4448fe3229d058"],["/tags/武俠/index.html","9236eb2c8f303f8ed41b162dd7e59ba5"],["/tags/武俠言情/index.html","338b54bcb07c9f0435d6a352e544f037"],["/tags/漫畫/index.html","4c0d0dd211c31df3a2dfad94b8cc0887"],["/tags/生命/index.html","ca2fff305259575eba631f15ff308dcb"],["/tags/生命/page/2/index.html","41278f2339aa60065352b076ab4433a1"],["/tags/短篇/index.html","6cb9e7521e85fec796f96c74f70dd1e4"],["/tags/社會/index.html","add61d0a38883bee445c0acfdaf8c614"],["/tags/科幻/index.html","b3371c02039bfbe34dd6881197892d75"],["/tags/童話/index.html","27d81caae5b3b417c67ae8549862ed32"],["/tags/競爭/index.html","fa00bbbc7dcb77f3fdb8c44df1fe9e7e"],["/tags/自我/index.html","e9b12ec8637090c78b81074bbf22852e"],["/tags/自我認知/index.html","5337f65a73e471e4a1413067ceefe153"],["/tags/葦舟ナツ/index.html","eacb64a036e661b5b779fcc1af9613fe"],["/tags/藤萬留/index.html","56fd2cf87f3307ba455ed54fa3a21cb1"],["/tags/親情/index.html","fce50b6bdb2665081868d7b5437dcbbf"],["/tags/雜項/index.html","5a19b87c2738664b094c83d2451b5492"],["/tags/電影/index.html","0fe397525b7f67cad131017ec467a85a"],["/tags/電影/page/2/index.html","f272560b064864049f0b0a6719f7bbb3"],["/tags/霸凌/index.html","45d75528927bac687e683e27118b4552"],["/tags/青春/index.html","6af8262b4062df5af1505bf89dfc6d19"]];
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
