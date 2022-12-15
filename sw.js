/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","c84cc7cd892417ebd5f0c8cae2f2ec86"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","8f45512a10eff028b14aa0fa937a30a1"],["/2019/12/25/Review/無法計算的青春/index.html","b221337bd87d79d9267e0e6dc56ad5f5"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6fc98b1184833b32ec8ed2a6818bb4f5"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","eea14d294e7590c94eb4a2e54f680990"],["/2020/01/19/Review/下雨天，不上學/index.html","9aa5f1421bbefbcb1b27ea6cc7adfc7e"],["/2020/01/26/Review/三日間的幸福/index.html","0d10564987eac854b95dc7b1f801164f"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","58af5f5f753c1a75d6a4cf48a492c452"],["/2020/02/09/Review/青春期超感應/index.html","6531571cc3df98ad6e2af035d2642930"],["/2020/02/15/Review/又做了，相同的夢/index.html","77c679916c13660719c93283fe4076f4"],["/2020/02/22/Review/回憶當鋪/index.html","8aaa62bbe63191aa229dee9f527eff6a"],["/2020/03/22/Review/不適合自殺的季節/index.html","68b77fcbbea54c5291e91d6341b42557"],["/2020/04/26/Review/我們都無法成為大人/index.html","af65b356ae84693f092bba4f24605000"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","eada72f3d5b5e6b459a1e6b3654e3b10"],["/2020/05/17/Review/人間失格/index.html","f66141fe798ae30d9eaebd2636b91c2d"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","b9b1c74af811fe78ab3ef5ffccbd3459"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","693575e201398f95af930d791847ee6b"],["/2020/08/01/Review/銀河鐵道之夜/index.html","11e653529b5e8f707e2a1616048089bf"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","422078cd7f4932dae987e5da025dc2f9"],["/2020/08/16/Review/15歲的恐怖分子/index.html","152330860a65faa11a86530348423d18"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","fe00bdff2ed801c4c67d60159472363c"],["/2020/09/13/Review/羅生門/index.html","c13a9367ff95ba06e1bae88541a3d897"],["/2020/09/20/Review/闇夜的怪物/index.html","705cc706701d6d34e05a83418b876e62"],["/2020/09/27/Review/14歲，明日的課表/index.html","17a90ae01c32b79a3e853d6f86b095c8"],["/2020/10/04/Review/致十年後的你/index.html","6d309cdc4c390d1d4da72f495a98fb83"],["/2020/11/08/Review/滅絕之園/index.html","f5e2f3a18d90611b3c66d1f2259ed853"],["/2020/11/15/Review/將愛拒於門外/index.html","90665aac92a5eaefd2d40fcb0f8759d0"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","ffcabd9d333a14600cf481b1b42edee0"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","19eb417ab91029c3b4643d89886f3df8"],["/2021/04/22/Review/道印/index.html","ba0404f298d0f0362e6501d82aca9806"],["/2021/05/03/Review/戀入膏肓/index.html","dab50a9b653bf9dd18f4bae43a6b7093"],["/2021/05/10/Review/Dice/index.html","442fb824cbfa273b2c8473296c1e1d0d"],["/2021/05/15/Review/魔女之旅/index.html","3dc472fbb3408d33469e9e064cc96d61"],["/2021/05/28/Review/戀愛寄生蟲/index.html","c646e3f9169ee612c00f2b21ff434ce0"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","db3e21dcdf4a30b35c844cbaa71535b2"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","bb2fab8dc043d1fbc7bea7c14c577917"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","0803e8642e489a4fc2ecadf6a27f3422"],["/2021/06/05/Review/流浪的月/index.html","8f25af6959366cd36d329c81331f7148"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","29edf59175599eac10b4aa9457098950"],["/2021/06/13/Review/第一人稱單數/index.html","d1bee62c0c63cd49f83a573b2325f050"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","763d2be4f6671420d0ef34687f69eb91"],["/2021/06/16/Review/願你幸福/index.html","e9c485f7d2e3235057d74355c7c6d622"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","88cc768a1da69a10ab2b57ea5c7d8b26"],["/2021/06/21/Review/神隱少女/index.html","7bdd3d8e9e23e6915fe5301ff674bbe2"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","05d142a075a643ed4cd6ab34d51a2755"],["/2021/06/23/Review/天空之城/index.html","a76c9d2974e6a70ff92abdb27d9932f5"],["/2021/06/24/Review/魔女宅急便/index.html","33000a61cc9971243af8a142cc37d6f1"],["/2021/06/25/Review/借物少女艾利緹/index.html","34976a5fc418166c986263cbc7dcc5f2"],["/2021/06/26/Review/魔法公主/index.html","c52a6b1b56b58e721f614f5848925154"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","e1cfa57508b644f599d2ec3493c64a34"],["/2021/07/04/Review/飛雪與劍/index.html","e49dd91074cba10f487432a992e8bb49"],["/2021/07/09/Review/地球防衛少年/index.html","82fdbc774c1cb4aadbaa43e99039fe21"],["/2021/07/12/Review/Angel Beats!/index.html","d815f366382ca53e736ea62e45f81255"],["/2021/07/13/Review/Clannad/index.html","8d94bb89fa7ce0f3f8f4fb0cb1541bf2"],["/2021/07/15/Review/AIR/index.html","ca9673c566f69c352a2e92eb5b54554d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","b4a7a5703d96aba8dc1de79e25d11182"],["/2021/07/15/Review/螢火之森/index.html","9f70e5927d359e90cf2ad2f141ea8526"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","c8a74125269b65e40f96dafdbb39440d"],["/2021/07/17/Review/奇蛋物語/index.html","765c666456f48a3bcf2a97bdc4adf035"],["/2021/07/18/Review/Vivy/index.html","ce237c7a1646c7705c572c060d5d6648"],["/2021/07/18/Review/請妳消失吧/index.html","d27c54ccdef8dad1e48cc2086b536934"],["/2021/07/19/Review/漣漪的夜晚/index.html","bc697a065fdec77e2bdcc5f041fa6a63"],["/2021/07/20/Review/月色真美/index.html","9b801a6f4c2fc0b71fababf4a37ccbfb"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","4ab06ce69ac756be01f428fe078f34bd"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","a3ed8d50d198634be41f41a0e86b1505"],["/2021/07/22/Review/罪惡王冠/index.html","4fd4583731a2207528f4dfc973b85d3a"],["/2021/07/23/Review/弱角友崎同學/index.html","d6e7ead37f02437aa610c7d2d37d4d5e"],["/2021/07/23/Review/惡之教程/index.html","def18d0c14071ab644026b8630364162"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","a19020f0f74966fa4cb8d2252446adc6"],["/2021/07/25/Review/魔王勇者/index.html","6294043b1705b4370411d50c7985d515"],["/2021/07/27/Review/一年A班的怪物/index.html","3ac489feef528a8f557e38cb49b5e73b"],["/2021/07/27/Review/奇巧計程車/index.html","8481f19e80d66b7214b340f4f2c25690"],["/2021/07/27/Review/專情的碧池學妹/index.html","75019dbc74117a3a059d3b9338dde0e5"],["/2021/07/29/Review/只有我不存在的城市/index.html","393aebda50bdf714e5d3b2d6ec271682"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","07757d60498860e7f8c51233faea08e5"],["/2021/07/30/Review/可塑性記憶/index.html","fb6fc483627e56f60be1859ac7600bdd"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","33ee88256805c20ac682e51f5343b7dc"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","27ad1593defc4f706f3085d2e968e82f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","807f1e4b9d28acb2bb4571c86cfd3202"],["/2021/08/25/Review/清戀/index.html","cc1ecd2827b2d63e87063c2825274d52"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","9fa812a97922309f3490e0322a01648a"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","47e875619a445b035675474c39e69a65"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","efc5c459fb83d4af7c8e31ddb57c6208"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","a8b76fc649903e7ff2265550809f329c"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","70f2f2ed3f44ad17dd38550f914e8a2b"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","32b544b73728b9f736d3c12e4eb93ee5"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","e8934a2acc9fb0f2fcddf620c7ade689"],["/2021/10/16/Review/龍與雀斑公主/index.html","4624fd6737ae1b2ed818e96d27520ee3"],["/2021/10/19/Review/孤狼不想開後宮/index.html","51b50d74b00a589d82353d0785a1670c"],["/2021/11/13/Review/徹夜之歌/index.html","86fcf724dc9e1194a0bc0f3e4cce9056"],["/2021/11/24/Review/武煉巔峰/index.html","762c437ef7e239feb9b8a9db29288a99"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","a1f918a0dcd7e64bd730783bb450c9d3"],["/2022/01/28/Review/神醫凰后/index.html","b2ad631a740b5427646a7c8e7b77ca49"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","2272edd8c01303661cbc2683df1f4976"],["/2022/02/13/Review/夏日幽靈/index.html","01293e3835d2b38189151d10603f8bf7"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","07520b1579836d06a47700e242d4a958"],["/2022/02/26/Review/賽馬娘/index.html","99c3dda0291ac276cc2261b5f1457712"],["/2022/02/27/Review/大欺詐師/index.html","504e562e775511a76607d5665001812e"],["/2022/02/28/Review/前輩有夠煩/index.html","b3e18f45a4c4a191cde71a4f057b9017"],["/2022/02/28/Review/碧藍之海/index.html","446b1a499f4d31dfadcf2a679935ec34"],["/2022/03/05/Review/落第騎士英雄譚/index.html","6327bcd9abf54a056d52e9abd5e32eaa"],["/2022/03/06/Review/Another/index.html","c315b47e4e6fb76db2c8f0249ed6348a"],["/2022/03/06/Review/入間同學入魔了/index.html","682f9e917f7b95b5a349ae97998c4b65"],["/2022/03/18/Review/再見宣言/index.html","6231e7035326f09ca01dbe68dff4721b"],["/2022/03/23/Review/生若冬花的妳/index.html","28f86bbacaa7d94c9053161dcbf84855"],["/2022/03/25/Review/天之弱/index.html","0a8c4e0f24b9e03fcebc315bc7d72fc0"],["/2022/03/31/Review/滅了天道之後轉生/index.html","45dc86d6e2ee7335f059c02cca9676c3"],["/2022/04/30/Review/泡泡/index.html","d6834e7c1bd46b1717feaf18f173fd91"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","6766382b55c0d7e113e539476fe918dd"],["/2022/06/13/Review/偵探已經，死了/index.html","dada4e6d2af6b2119f2fdb71350b57dd"],["/2022/06/14/Review/黑色子彈/index.html","10701d5822ae2b81f674a917c29a727e"],["/2022/06/15/Review/黑白來看守所/index.html","047a399a5227e1bf93cdd25fbbeb2a1a"],["/2022/06/16/Review/虛構推理/index.html","44527877bbdfc6fe4a8fdcf579963316"],["/2022/06/17/Review/戀愛與謊言/index.html","bd5b96dee6417b7f39ddf2f12cfb4560"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","fcbfb2db38b35e77b7a369f3258909f5"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","439e01d9e892f975b70a4ee617c6bd30"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","bf787e2eb829af48b8c4015e0baefd7d"],["/2022/07/03/Review/Hello World/index.html","97e569c5d59ff5b209473ef4a892245f"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","59deb107a3aa551d55c46ca9708b155b"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","e5967994e9ae62c501e125e9297510b9"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","f19c51baf7e08d3f1f9e00ec542366be"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","427fe8092de714715ab1baaf2409c75a"],["/2022/07/16/Japanese/動詞分類/index.html","585fff0cf38af9e53a7a9984551ba2ec"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","1ec3d033efb52ed628737f7dc0dcf528"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","c2ca01a7395377ae12359ec9c2303bb9"],["/2022/07/17/Japanese/音便/index.html","75c8b0bcf9b18daa3e8f2b9d70afa19e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","3f937c69e99962842bb459297d7dbf92"],["/2022/07/19/Japanese/助詞用法整理1/index.html","0c23c8f8ba3f8ce235993a9f63816c56"],["/2022/07/26/Japanese/助詞用法整理2/index.html","f8f40d22fc8067511e5f20a8bae2e2cf"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","5b1d678ba10ea79172d3233a72fa0c1a"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","527a3891e8773d679f73cef7992f197c"],["/2022/07/30/Japanese/疑問詞/index.html","cd9e56ed61bb89632ec219c41bf2eae6"],["/2022/07/31/Japanese/助詞用法整理3/index.html","ca10528a0b01252c6248bbc123d66cca"],["/2022/08/02/Japanese/副詞整理/index.html","21e52625fa9d7a8ba1a71d606ccf159d"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","f3040ff2de7715720e3f6b9b0038502b"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","4f58a4d6b1bec7cba335f66a87bd8821"],["/2022/11/22/Review/組長女兒與保姆/index.html","ee272b0350a174f3dea913e599a8c5f6"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","50e700423faed00f1f78e890b97d8fa8"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","bae54637013fa54b7b4c53da09f55729"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","a3fbf283ebe10de73a1755dffcdb3e28"],["/404.html","f3dc744727eeaa0e34b702bedc52955d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","fcc360c26fdfb8bb1dc2b28502088e01"],["/archives/2019/11/index.html","f38c1a077ae9d7e03962892ac2460996"],["/archives/2019/12/index.html","92beebdf5a40a5a5b10819ced013d4b3"],["/archives/2019/index.html","5cb89a359b202753ac902c30109de570"],["/archives/2020/01/index.html","2f72b6832e66f2604b453ee588fda1f7"],["/archives/2020/02/index.html","1e3e3a9bfbd2ffee94e64f0f5b04398f"],["/archives/2020/03/index.html","4f06f3aa36394920dbc04fc4ab6098d8"],["/archives/2020/04/index.html","f7906b2b3fb226bff1a93bdd57446226"],["/archives/2020/05/index.html","87fb08ca25e215ad88abf26179356501"],["/archives/2020/07/index.html","085c63a23ee13cad59795a71696febed"],["/archives/2020/08/index.html","ed623e399ea19f980cb38c5e33c63fd3"],["/archives/2020/09/index.html","6ebc26e768fad0b85a0c0fe4d2bc0e5f"],["/archives/2020/10/index.html","7340ff8ff47c746e6ec62c25fa1ae717"],["/archives/2020/11/index.html","c81b34da3f84ac6d6f69c637c7c634a2"],["/archives/2020/12/index.html","92d919272f7d08306e08cd10a20c22e9"],["/archives/2020/index.html","60220ab64ac6df56714ad51b29b28512"],["/archives/2020/page/2/index.html","cf0f8be82edf12e23ebb1d2aeb9baf55"],["/archives/2020/page/3/index.html","491ed2a710f75bb35a8424462135235e"],["/archives/2021/04/index.html","f349368708871bd07e8aa54f8aabf445"],["/archives/2021/05/index.html","16086bcca3a04c4c1d2c6588c5088ebd"],["/archives/2021/06/index.html","753e7da54cf43f113ab535b70bcf518b"],["/archives/2021/06/page/2/index.html","715979a3b3f94e448fa81c6f6979175b"],["/archives/2021/07/index.html","ec3b2621af0760c91dbbd3bbd78bd802"],["/archives/2021/07/page/2/index.html","8be569f29c17bacc33d969a5cc6ad139"],["/archives/2021/07/page/3/index.html","636704d2083f612d805fc80ef57847d9"],["/archives/2021/08/index.html","dcf344918d10635dfcb6250256d01839"],["/archives/2021/09/index.html","55f0536446764554730595c9a01df2cf"],["/archives/2021/10/index.html","65fcbfd750fc16de63c92d45e6377ea3"],["/archives/2021/11/index.html","93c0f6a8bbc710ca3f94b7d5ed29a36e"],["/archives/2021/12/index.html","65a2a2e22cbbe186f2a77abe7ed836d6"],["/archives/2021/index.html","fcff4dbc07ea86c539af0b1b8af5a319"],["/archives/2021/page/2/index.html","571b4383cfd00bff60f16eab9ed7cced"],["/archives/2021/page/3/index.html","abf3a5f1c64c19b8e155a8d9c45c2894"],["/archives/2021/page/4/index.html","585b9e6b624714d200d0b5be78d478cb"],["/archives/2021/page/5/index.html","6ac5cf7591df77aca68b50120868763d"],["/archives/2021/page/6/index.html","23eddafd190dc3281f306b63fd93223d"],["/archives/2021/page/7/index.html","9f6511580d71a279e6b715ae62969cc9"],["/archives/2022/01/index.html","533bcbae52ca2fa5a39528acde997517"],["/archives/2022/02/index.html","320174361124efa454b0d70fefa6bc18"],["/archives/2022/03/index.html","782779c92087fe0c2f5c011366a9cbaa"],["/archives/2022/04/index.html","778be9a5408538b7128270f783e6fadc"],["/archives/2022/05/index.html","d32e2ab23ec0ff4944a7023a3ccedf16"],["/archives/2022/06/index.html","29ae93f98483d735652764ea7a66d044"],["/archives/2022/07/index.html","ff6aa2add042de084cf103572b98861f"],["/archives/2022/07/page/2/index.html","48c363f8eba3dc32bb41fec04c604528"],["/archives/2022/08/index.html","ce7d63eb69cf55c03e1cc8fea3ec1d16"],["/archives/2022/11/index.html","e5a53355d7a07d328cd24a3ed711f0b4"],["/archives/2022/12/index.html","c97e5e74e1811365f9cf2d1d4af430bc"],["/archives/2022/index.html","15c7830a993ed45faa1b8003ee5f3b59"],["/archives/2022/page/2/index.html","105ee68f34822d2a03e9a06b3a5e79cf"],["/archives/2022/page/3/index.html","6f9041984327206835061ba4fc6e6d0f"],["/archives/2022/page/4/index.html","326ce4a2bb65220b4271bf574a12affa"],["/archives/2022/page/5/index.html","53c99d9052084c3d7c1b9188bd051b7d"],["/archives/index.html","a9531cc16a5ef066535c18dc670e5374"],["/archives/page/10/index.html","7480d23330052326442ec3253311143b"],["/archives/page/11/index.html","538076a4dd8e897ef694a698158cd37f"],["/archives/page/12/index.html","518efec3248c9219466556dd174fd7b4"],["/archives/page/13/index.html","c69dec7d60fd0d6d5ecfb81a8f64b889"],["/archives/page/14/index.html","affb0559f601ef6995f9533846d50064"],["/archives/page/15/index.html","eaa89ed4623999337830ecd078eb979e"],["/archives/page/2/index.html","e7087392b5e81d625c0dfad03b5a533a"],["/archives/page/3/index.html","55c1b7922aaae72eda13d8a76d61a8fe"],["/archives/page/4/index.html","674611a037c707cb8d9f461053e4ae6b"],["/archives/page/5/index.html","9c832fe74e023b96d584bc391c8abb95"],["/archives/page/6/index.html","1c11cb4395434067534d0ba7920f0a74"],["/archives/page/7/index.html","83ea0991602cb99f829382d1013ceb74"],["/archives/page/8/index.html","c557f0325ef06b6881c98901f118c9ad"],["/archives/page/9/index.html","9dc6618ae9ea76cfaee45c6cec5e380f"],["/categories/Programming/index.html","0cf91f2f18199dd0f4ebab97e720f8fb"],["/categories/Review/index.html","ee1b25be8d0ac9aaf88923903ee8bb58"],["/categories/Review/page/10/index.html","19326dc2e54fffdc883eaf59e440a61b"],["/categories/Review/page/11/index.html","ba127f9e04c984dedc496bd75da81375"],["/categories/Review/page/12/index.html","1eb221f35acccff8e001aa5255533a96"],["/categories/Review/page/13/index.html","66dbf6d3317ec18e4baa1fa8ef9ab27c"],["/categories/Review/page/2/index.html","002380171da70178c86ec4d05e6424ab"],["/categories/Review/page/3/index.html","86137293c6e1e29c80fe7d2144505707"],["/categories/Review/page/4/index.html","2e96306ab631b6d52e6499b13a8ad03b"],["/categories/Review/page/5/index.html","22212d358d06e3ff51bf91f59a8831d6"],["/categories/Review/page/6/index.html","a4c993d74a978da645b276c66672c8a9"],["/categories/Review/page/7/index.html","963d89731f48eb264bb2493661677225"],["/categories/Review/page/8/index.html","047e6c2caf49f4e42106b4dd0573e6d3"],["/categories/Review/page/9/index.html","b280c4e8bfb16a406b54346cde85e448"],["/categories/index.html","a2fbcfa08d3a05277a517006be042619"],["/categories/日本語/index.html","a66969c0f6df6284f9f1cecfea0a0b3d"],["/categories/日本語/page/2/index.html","421f7652a803eef2eab78f4375f9d1c6"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3b3d17b3c4e71afaf40555aeb78798f9"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","658a7a494ea9cf90b87491f97ae21f5d"],["/page/10/index.html","f23b6e25b8be3e270213f7e0ba476bae"],["/page/11/index.html","bf0c44e1feb1fc51df816d98356890b9"],["/page/12/index.html","a93ba65c995163d5012b0161e959ccba"],["/page/13/index.html","610f1de5753612c3c7008c6da1866692"],["/page/14/index.html","c55ed59b5737905eb655c93e6ef0f7aa"],["/page/15/index.html","dc0beb19f4fd773df8ecc935347bb0b3"],["/page/2/index.html","2177ef6241e666bae1a960a6a7b04ec0"],["/page/3/index.html","2badb3e547842fe605744404e78b95fc"],["/page/4/index.html","2e07bf65c170197cab0797d7a12a2a4b"],["/page/5/index.html","03928caef9de8c5d5035c7c33931b365"],["/page/6/index.html","1bbe463308b05709287739c8ba32af3b"],["/page/7/index.html","ce4d60203040da176dd44668d6eefea6"],["/page/8/index.html","621b28212f7bd9a4795b1d5e05197a7d"],["/page/9/index.html","68c46a4a273606ed320063dc440faa39"],["/sw-register.js","4ba8986db4d49178341dc7f184ccfa63"],["/tags/10分作品/index.html","48fa4925de294aba491256aa55cc2fd9"],["/tags/3分作品/index.html","64e84d7c068ad664eec551f844771faa"],["/tags/4分作品/index.html","dabd0980326a6dd70629296c2d91dfe5"],["/tags/5分作品/index.html","57bfe40c7031c3a8eb1bf0e0fe40ca00"],["/tags/6分作品/index.html","ebfe0e74c05cda3e9fcc7c3590461fae"],["/tags/6分作品/page/2/index.html","7cdf0b2f8f98de3c4bda168764f78ec7"],["/tags/6分作品/page/3/index.html","33152b78ad9c0e4d7c63f0debc08ce70"],["/tags/7分作品/index.html","251da7b2b317c5a4c255116f29a38df4"],["/tags/7分作品/page/2/index.html","5e9bcec6373e7c36619ad7778f5cc386"],["/tags/7分作品/page/3/index.html","18088d8acf75f7582f93a049f05cdce9"],["/tags/7分作品/page/4/index.html","0fe8a26b096f2ac03053bd1498252f8a"],["/tags/8分作品/index.html","1c0a08f72d0c2fe12eacc2c5433d1bba"],["/tags/8分作品/page/2/index.html","eb8d2e3faf331ea544168465d5dac662"],["/tags/8分作品/page/3/index.html","df845467c27fa82c22175644df544f2b"],["/tags/8分作品/page/4/index.html","c0619c1685ad335b0b8423a09be1e28f"],["/tags/8分作品/page/5/index.html","207ca6553a74d52e44a26e46988b7367"],["/tags/9分作品/index.html","f7207f7f5f92030226d39db4b25b8d24"],["/tags/N5難度/index.html","205f329751ca2cad6741af8dbe04c079"],["/tags/N5難度/page/2/index.html","af564bf71175988babe903385b258b89"],["/tags/index.html","5ab33f226b3d750c01da5f4238d56ef9"],["/tags/アボガド６/index.html","ca665c091c247fe7c72c1e63d5142823"],["/tags/三秋縋/index.html","2b89b4925ececd5f3134edf04c2d449e"],["/tags/中國武俠/index.html","72957766ebea3a2330bc34b7fce130b5"],["/tags/中國言情/index.html","dca0c5e2c2685af5ac62a72b8ecb59a3"],["/tags/二宮敦人/index.html","bf40d6fe2741fa23320dc7c6324b12dd"],["/tags/人性/index.html","b3ff0735a092bff730550eb719192cbd"],["/tags/人際/index.html","e1d677b7e1dd755df4fd4b925f22f4a1"],["/tags/住野夜/index.html","1d47da5cab41a02ec8907b49c798daa2"],["/tags/佐野徹夜/index.html","c0286383b2991161cae5d172a2dcf58a"],["/tags/努力/index.html","c64aad6e295dc3fcc1a4916acc3beae9"],["/tags/動畫/index.html","359e3d92945835e55a02fd521492550a"],["/tags/動畫/page/2/index.html","f44e00246de8e9b05f6463b00b2204d1"],["/tags/動畫/page/3/index.html","a7af599c0951c2ba6732c5421c135aa0"],["/tags/動畫/page/4/index.html","f235fd4043ed753ef9fa5e92bc19409a"],["/tags/原諒/index.html","2927758bbbe9514633b99f6c906b3fa9"],["/tags/反烏托邦/index.html","7c8ce967315d91a578dbdf25ab2c94c0"],["/tags/啞鳴/index.html","9aeef3b12118abe2a4c8164d9fed5dc3"],["/tags/喜劇/index.html","2480326db58299237b9787b95e134ff0"],["/tags/夢想/index.html","c0a47bc4a80401de44003e093e9e2273"],["/tags/天澤夏月/index.html","026dc0e80a7ab5290926aa96d275236f"],["/tags/學習/index.html","1de950f6b7ce20bda7d10f1f65a3c17d"],["/tags/學習/page/2/index.html","c26d0af69e12bdf5321bcbd0a2a36cd6"],["/tags/宮崎駿/index.html","2071afb3071924d1a2e5defdbab0d306"],["/tags/小說/index.html","65de593d80c786b8b3b0ff0a7dcaacc4"],["/tags/小說/page/2/index.html","e73a4c0f01fc4c7a121d4d0ff6808f88"],["/tags/小說/page/3/index.html","cd63442fe0908d0e5ef7ad1220ab8e9e"],["/tags/小說/page/4/index.html","222644ca39a60d2ff10b9cd7ffb5987b"],["/tags/小說/page/5/index.html","faeaae80edb624d2bb4337ae04abf124"],["/tags/小說/page/6/index.html","814a0817dbf4090f38618dce4f8ea53c"],["/tags/小說/page/7/index.html","aaaaa538ad5b62be544946f7a00f1987"],["/tags/平淡生活/index.html","f8ba518483a29a3731122d187fdeff9a"],["/tags/幸福/index.html","11d1c72c1d7fa9f1273a5775bd1b50b7"],["/tags/志茂文彥/index.html","72ddff30304f9463d6e00ef63bcb5656"],["/tags/愛情/index.html","1b99341545aa5c3c165641eb3434b59b"],["/tags/愛情/page/2/index.html","2c58b30e5aced46c766d02e4977dd73c"],["/tags/愛情/page/3/index.html","2db8114831c8074e6e28eb2a09c94418"],["/tags/感動/index.html","0ab0a6b61d0d17ebf4e412a90cf9ed3a"],["/tags/懸疑/index.html","0657783de89b1ac3a2995cafcf396950"],["/tags/懸疑科幻/index.html","ee1ff4555c8ffa074a98ded8baf3e72c"],["/tags/戀愛/index.html","05d8c16ecd5c9bbafc8d49b2d0475892"],["/tags/成長/index.html","5cbbbdfce56a916f8a1b4686305246cb"],["/tags/成長/page/2/index.html","50f7b1d0d296d0a162df98f3e2341353"],["/tags/戰爭/index.html","b78dde6c1196d4afd67860df079fb74d"],["/tags/推理/index.html","ffe2d019f265d049a5d17433d85dc2fb"],["/tags/搞笑/index.html","78710c4647ad570ae8c43147ebd15766"],["/tags/救贖/index.html","b091a6141f7dd534fb775040d1923d7d"],["/tags/斜線堂有紀/index.html","547d32116859ffff02ff92667aa3e569"],["/tags/日常/index.html","98d4e2ebd0c97e6ee5dbdc0580bde966"],["/tags/末日/index.html","c5b17fb7e3f9d124be499edc28e3bc2a"],["/tags/校園/index.html","10345e7a64e7ee4d738db139251ba7f9"],["/tags/武俠/index.html","534d87e228531ec6213af0789d92fb0a"],["/tags/武俠言情/index.html","41646cd47266eb6450729556222ea09e"],["/tags/漫畫/index.html","69d1e18511f5f230c2e62f66943ac59d"],["/tags/生命/index.html","a0db6551c3f6e8fabfa087f64227e3a9"],["/tags/生命/page/2/index.html","c96c03865d6df514e944613c1dad3c79"],["/tags/短篇/index.html","b3771e75181413ec77fa441e092e4656"],["/tags/社會/index.html","58a594e359eeb5bbc7e9ff771d694776"],["/tags/科幻/index.html","b09e49227a0df10754fb689f71bfecd2"],["/tags/童話/index.html","74f5d172697ebf69c04f4f48252eebe9"],["/tags/競爭/index.html","6380bbced70c24678f9e359edf006128"],["/tags/自我/index.html","d7fddb1bff75d9462a20365a83303a57"],["/tags/自我認知/index.html","b2bab4fd30c1e5cf992f5d83a329f1f6"],["/tags/葦舟ナツ/index.html","36c32c94476fba4cdccf2de9a731bd9d"],["/tags/藤萬留/index.html","190e3ba55c8345a822d6b1641861c8c8"],["/tags/親情/index.html","210d55b8a7b773ecd23fef21bfe8f8b2"],["/tags/雜項/index.html","b1c1ef7715c78b712cdfb57dced059b7"],["/tags/電影/index.html","c7d5b892cd3cbcec4f8a3ee02919c281"],["/tags/電影/page/2/index.html","12f80af93b0766f2ff3186670e6d387d"],["/tags/霸凌/index.html","312e2b47de4d922586e800c4136e5a47"],["/tags/青春/index.html","ba60d58248a700baf030a44c0781adf0"]];
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
