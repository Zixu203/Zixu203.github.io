/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","cd0ff062ed55f91563f30fd88ee86906"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","490327bd4a1530db9d21bc7c3b2e5c08"],["/2019/12/25/Review/無法計算的青春/index.html","bf6df28358b8d253d251ec836407ebab"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","45a635b1084438aea8e4caec9c9c5d29"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","66feedfd2c97a5b1d34bb03000449b8a"],["/2020/01/19/Review/下雨天，不上學/index.html","018238c5bb66acb19d5f12822619fb97"],["/2020/01/26/Review/三日間的幸福/index.html","84955b2b452d26bc7f7df5a4884c84fa"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","dd981541d0b3945cc514cb9a447c86b7"],["/2020/02/09/Review/青春期超感應/index.html","e836c4f9c8d5168d03f13c6b1dec966b"],["/2020/02/15/Review/又做了，相同的夢/index.html","3f9f61fe23f0b5fa435e6a1d4e23f824"],["/2020/02/22/Review/回憶當鋪/index.html","c7c9c38bc6ac0c50d45d3cfcfb87eea1"],["/2020/03/22/Review/不適合自殺的季節/index.html","82c1b75607a31c31486c639dc033ccb0"],["/2020/04/26/Review/我們都無法成為大人/index.html","1a1d2842fb69eee6ea736b9c19c21c19"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","10e2a15134627f4916c030aeaac3ccb5"],["/2020/05/17/Review/人間失格/index.html","ebe7415d858e4cae12d7d3218f4c0916"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","de69e4538e9a1b7cb417945dc53c0c35"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","d904b51aeef529db22074e99786ca8e4"],["/2020/08/01/Review/銀河鐵道之夜/index.html","d987889ae14410fc86d8ca2c3f9249d3"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","89d7106526b82c9894c2c758932861f8"],["/2020/08/16/Review/15歲的恐怖分子/index.html","8fd56a13b413ce89bfea0d5219269d45"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","4ac8d92dd40ad098a6ccedd287e9ccab"],["/2020/09/13/Review/羅生門/index.html","8f319c766e7002792da01da05e7a5c35"],["/2020/09/20/Review/闇夜的怪物/index.html","74c0052fb467615c9cdbcb1006c28f3b"],["/2020/09/27/Review/14歲，明日的課表/index.html","5ae3f4b65ba8a44d2b63172b38f4e71c"],["/2020/10/04/Review/致十年後的你/index.html","9a644bcf6ac619a3c1375de34788c601"],["/2020/11/08/Review/滅絕之園/index.html","e09ec940313e58693f40927b376212b2"],["/2020/11/15/Review/將愛拒於門外/index.html","a223d93a8f8dcf864e53d4f1cbc9833c"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","d0d5a9d7064eeb2e26ef105b2dc3a2a7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","4f75c9b8f9aa47d2f7b78a1000ee783b"],["/2021/04/22/Review/道印/index.html","dc6ea1fe749ffc8d5793a4a91813abfa"],["/2021/05/03/Review/戀入膏肓/index.html","58bba2b9deef8d10cd2540db807ff9d5"],["/2021/05/10/Review/Dice/index.html","644e946a2f5ca61899d980159a46a25e"],["/2021/05/15/Review/魔女之旅/index.html","38a1727cc97909352f670ba0dfdfd282"],["/2021/05/28/Review/戀愛寄生蟲/index.html","73c0beb3fc468d04b7972b238b16ec90"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","9153149a8cb92897790ee0934308f6f9"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","377a382b28e4fc96f3a8b0dc97163fb6"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","ef8b34378a0d61bffd1b3d63d8a09201"],["/2021/06/05/Review/流浪的月/index.html","0e61f4a07617f666b44391844b44b7c4"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","690a58dbb0e3e14019a640b9ef3dd822"],["/2021/06/13/Review/第一人稱單數/index.html","1c79026f67d3dc24eacf5632a9cbe829"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","6cd4e7def66474f4d219c74f908e1f52"],["/2021/06/16/Review/願你幸福/index.html","35d375b4e102c09f0972dd5ee934ab88"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","3b6eb55ccd0ea3219f4c417a5cd6d968"],["/2021/06/21/Review/神隱少女/index.html","94e8f59e00de1402160b4ca16c5e3db3"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","bcd7543efa9bbcdf0f0dbd0b39d022cd"],["/2021/06/23/Review/天空之城/index.html","19db40bef56e3a84e4247be110757754"],["/2021/06/24/Review/魔女宅急便/index.html","491f41c440f6b3121aeb0983a74ebfef"],["/2021/06/25/Review/借物少女艾利緹/index.html","ef9ba9e93851725ae2685481a7f6141a"],["/2021/06/26/Review/魔法公主/index.html","dace8cfa8f3bf3bb3328c17793208d02"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","27d27efa33984867612dd9333af46097"],["/2021/07/04/Review/飛雪與劍/index.html","6a26960b09301fdf20eb053bb1298cd9"],["/2021/07/09/Review/地球防衛少年/index.html","45e24ceaf03af5a528b9490a5aa6a99c"],["/2021/07/12/Review/Angel Beats!/index.html","afdfef32748be03e0f256b19940365e7"],["/2021/07/13/Review/Clannad/index.html","2656439d829acf556c5cabf188dcc794"],["/2021/07/15/Review/AIR/index.html","09e0b1e4f7b2904a20e74278bb6a21b2"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","4ab5fb023edede9e77afd7ac5a493366"],["/2021/07/15/Review/螢火之森/index.html","0b5e6e374bb98cf0aad14e87e2baec1a"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","f413d85cf4ea28b9d93bc66fc0570cd9"],["/2021/07/17/Review/奇蛋物語/index.html","26a5c8f66a8494dcd2d16aa35445d706"],["/2021/07/18/Review/Vivy/index.html","d675ea27c7f97b675b428911c0c74c8f"],["/2021/07/18/Review/請妳消失吧/index.html","73bc81746012a2117be8125e46a974f8"],["/2021/07/19/Review/漣漪的夜晚/index.html","5c9d631275533163f8da60f932d2d94b"],["/2021/07/20/Review/月色真美/index.html","14980f6473d9fb1e75b65e8e95cd152f"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","8c6003263e58b0f35fcea0dd088daa07"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","4bc0a0e2db4f04203d999d54296ac3c3"],["/2021/07/22/Review/罪惡王冠/index.html","2b26c803a22c95ada9eba78ff043305e"],["/2021/07/23/Review/弱角友崎同學/index.html","7fd380bcc617c418dfce1bfc04d35b1e"],["/2021/07/23/Review/惡之教程/index.html","9a332a9690549e5a2b3d065c791c170f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e3fb9192bf992945727aec56426c411a"],["/2021/07/25/Review/魔王勇者/index.html","8a28afcfa8ae452d21ded8f5e82548b7"],["/2021/07/27/Review/一年A班的怪物/index.html","3701d1a9156dcaa92c2b11945e92d47c"],["/2021/07/27/Review/奇巧計程車/index.html","7ebbaaf52af3bf2c99b5676845bd380e"],["/2021/07/27/Review/專情的碧池學妹/index.html","d7bcc8cbb6aa4aeec30e3f02ed98a5f3"],["/2021/07/29/Review/只有我不存在的城市/index.html","585f5701d75ab7df56bf86ffb584de0f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","f3f6825e65f531cc98dc17a3b1a8dac9"],["/2021/07/30/Review/可塑性記憶/index.html","854a04e997cc467bc965230bff872cdc"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","aca5c23072eb8aefdd28cd3c882148a1"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","8edbb25a2bb0b278e58a5a6e46239557"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","371ca88f3febdec7757c8759477f6104"],["/2021/08/25/Review/清戀/index.html","15d298edd86aab07f22c3a7ee42ec6a8"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","976614277e0676ee4c39e61cf2cffa69"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","76d77b0aee969f163efe8a67ec2d31bf"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","44044c3ad60fce568b082362621a8724"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","8721936cd3a2b72437d7b5291d9c4e81"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","ab12b263242a685d9c754d5e097d3927"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","779b1aa3bd05f52e2b9f37f59be41775"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","58df914d01b16f132562b73416cba808"],["/2021/10/16/Review/龍與雀斑公主/index.html","c616bf5206f505c238340174edbe14da"],["/2021/10/19/Review/孤狼不想開後宮/index.html","079c913a9ff5bca5d930230e07aeffba"],["/2021/11/13/Review/徹夜之歌/index.html","e01fb352e378196a52b3f6468a3998d1"],["/2021/11/24/Review/武煉巔峰/index.html","ba320ed79a96bf577348f5448d8a9ab5"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","7d69749f96c21e5347939dc7c844020e"],["/2022/01/28/Review/神醫凰后/index.html","52ad13c020691791fa88a3dd7579337e"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","1afce455c5de468b4145d9f15a549e4d"],["/2022/02/13/Review/夏日幽靈/index.html","0f571d21a4ffe927b2df8723417fcb3b"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","f22b5b80a25cb2dbc88450a2b11dbc30"],["/2022/02/26/Review/賽馬娘/index.html","90e7b2b3229daf697e9485fd3e1ee965"],["/2022/02/27/Review/大欺詐師/index.html","26334aeb234e5221785f472e6ac41603"],["/2022/02/28/Review/前輩有夠煩/index.html","fdd81aec1e909627f8adb14758c95df4"],["/2022/02/28/Review/碧藍之海/index.html","9dcdac36f18f9e0a9a5c0338a8f5eff9"],["/2022/03/05/Review/落第騎士英雄譚/index.html","5a3a079cbdfb3e4dc35ddfc798bfb3f3"],["/2022/03/06/Review/Another/index.html","8a5e9fd21de9c2cfdd8d7b3a0ed43713"],["/2022/03/06/Review/入間同學入魔了/index.html","1d39599493a16c7782fa45c73a63d88c"],["/2022/03/18/Review/再見宣言/index.html","b52dfc6bb17944f2389c888ce7d716a5"],["/2022/03/23/Review/生若冬花的妳/index.html","81cd4940d53664e2f34313a4ede0cc3f"],["/2022/03/25/Review/天之弱/index.html","c7652a848e1ed92dfde34cfcfdfbc019"],["/2022/03/31/Review/滅了天道之後轉生/index.html","9d1710f5785359fc0f9561604bf3e8d0"],["/2022/04/30/Review/泡泡/index.html","8b8270c120a7fde6c474d3f9e6a35001"],["/2022/05/04/Programming/Dynamic Programming/index.html","12965958d592e1b19cb33af7c0e8ba01"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","e5cf4a9f76ea5c8e9ed71a49576b2f92"],["/2022/06/13/Review/偵探已經，死了/index.html","34b0f5c2065b4ed7c64d675b0659ee79"],["/2022/06/14/Review/黑色子彈/index.html","3657e824d0b349a6139c098d658a73b7"],["/2022/06/15/Review/黑白來看守所/index.html","27a6e6a4b61b911ef46b24cdcfef14c0"],["/2022/06/16/Review/虛構推理/index.html","2cb30a70204c3f4826102b28881079e3"],["/2022/06/17/Review/戀愛與謊言/index.html","3146896a83e149ca7c174391f797b794"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d863dc87021133ef77295890a7584ffc"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","7501ee9fdca06572992ade04bda23590"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","e06d7739bf6b8a2a52e034eb8c302846"],["/2022/07/03/Review/Hello World/index.html","f336e52b1ab3ef1cc5a580989a111b70"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a1be0d2ba961ad261bc33801c635dc5d"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","b97c5c232707adf561b4b986ea02414c"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","90147cd2ca22e711e0dae232851747ef"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","93bc0a7ed690ec5808f97607588c46e8"],["/2022/07/16/Japanese/動詞分類/index.html","e1af3f6b411fe4939e4e8e59626d65d6"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","6b74a879b80532bcc24a5c2b2ba832f4"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","f84c4d5e9ecf1799a827c9085921e858"],["/2022/07/17/Japanese/音便/index.html","e859baebdf8214fb1287e648593e63e1"],["/2022/07/18/Japanese/動詞 時態變化/index.html","974929e56821c4b703728a5fa1db73cc"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4260a3723c036cc300918e301b575974"],["/2022/07/26/Japanese/助詞用法整理2/index.html","5d6ee9248f2a36738c399fcbb3ceef30"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","715243d9edd9f5381e49322dc4966f99"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","ef27e6f8290063ef5d8bdb7d6b10b447"],["/2022/07/30/Japanese/疑問詞/index.html","d555584c5c7ac6c86820eaa2de38d23f"],["/2022/07/31/Japanese/助詞用法整理3/index.html","5348a6bc7d6929393dc624948b2149d1"],["/2022/08/02/Japanese/副詞整理/index.html","3fae83a147e0ef9e98f3dc6df26a7c74"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","c893cc6ea0c1bd913f8ff13af8a0cedc"],["/2022/11/04/Programming/Data Structure/index.html","3532025a3313c837be5f1076d2c82f45"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","38b7c72acc3961ff5ec4011c8bb3538d"],["/2022/11/22/Review/組長女兒與保姆/index.html","f28fff1ff98d30010b71c57d0612d0a8"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","0363b55d7792139ccb7f96afd85769da"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","635bffb32d8b3531a6736e4155c9f2f5"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","2a889d610c70c8989745cf3e4363c955"],["/2022/12/31/Japanese/After Rain/index.html","eef702aa1a4efb2461b0259d3c8b0fe1"],["/404.html","d96f1a5d4148fe2040bc9d38a6174cad"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","e16d24ab846adf7fc62ab580b2d99420"],["/archives/2019/11/index.html","724d3306bc3800619c07fdc70a4bb975"],["/archives/2019/12/index.html","27c7caf9f0bf545ce2a8c4dbe9cc7359"],["/archives/2019/index.html","447ae9cf75f32820d7423f691737af44"],["/archives/2020/01/index.html","0445cb416f11b2ac42bcf3f34ea9451a"],["/archives/2020/02/index.html","145e304c6a5b7467925c469f52f2c8d8"],["/archives/2020/03/index.html","32e11b97a8e5d9daeaa8da2fc3de2d60"],["/archives/2020/04/index.html","058919121cbf0592f65fa4f832f24b24"],["/archives/2020/05/index.html","3746db15fdc20e7fbf899e796297c1f0"],["/archives/2020/07/index.html","d1c5ac28c4ad5742431b74decf908dc5"],["/archives/2020/08/index.html","bd50c3270552344f404b1e157168e7f2"],["/archives/2020/09/index.html","b2492bb2b0bf23326f96a9ad689679ac"],["/archives/2020/10/index.html","be5a94702fac7f47bdcbcf9cacef41c8"],["/archives/2020/11/index.html","7e6c42d6f8610ed5f0aa272ede2e3ed4"],["/archives/2020/12/index.html","e5df21b3a8282288d5ca21a94a011fb4"],["/archives/2020/index.html","303d067cf0f5d478c729b92c8fb5702f"],["/archives/2020/page/2/index.html","b7b42d76b55d79295084b0861dba98fc"],["/archives/2020/page/3/index.html","2205236962b90afe50d97bdf94732de9"],["/archives/2021/04/index.html","65e22b8c7d140ece3935de6b2f85de23"],["/archives/2021/05/index.html","b78c4cd28e8b4ebf3bf52e274ce3613c"],["/archives/2021/06/index.html","bd4803b79bbfea90ba2e75bacaf03d5f"],["/archives/2021/06/page/2/index.html","aac357068f5933a0102873564f6d0908"],["/archives/2021/07/index.html","c7cfaeb12f6c27ce4aa6e74cc7e3d6bd"],["/archives/2021/07/page/2/index.html","4875a98922c9e6af0ddfe6a8501e56ce"],["/archives/2021/07/page/3/index.html","314b5d2cebc8ae17c261d792a8b08f0f"],["/archives/2021/08/index.html","9977f2402fae34a2ef71e4167a586fc0"],["/archives/2021/09/index.html","6fc8e837b6c8316fb5d4f85274794198"],["/archives/2021/10/index.html","aa788d7c7dae55b3f5e9d83ad9a196de"],["/archives/2021/11/index.html","78f89b674eef1cc72bb939cd9560167d"],["/archives/2021/12/index.html","f67468d0993892a9ac19ce5cfd6384b8"],["/archives/2021/index.html","d61ac480d190d3d83ef5ff6633522566"],["/archives/2021/page/2/index.html","3c635a52397a00137dee3efcadc8595b"],["/archives/2021/page/3/index.html","9e7e4639e9a4aaa6bb58b23ccdd04dc2"],["/archives/2021/page/4/index.html","04ed2f167077e6cf76220a0a7d5b931f"],["/archives/2021/page/5/index.html","29164db53b78a3bdc2195a302591b173"],["/archives/2021/page/6/index.html","52e5f894ce2b167ea9d41e44070795d7"],["/archives/2021/page/7/index.html","0cd3845b76a38b8149e0729baa25caf2"],["/archives/2022/01/index.html","3c6894a7835523d7ba37d474206474f0"],["/archives/2022/02/index.html","dba5b4cf1b7d4286cde1b340ef483930"],["/archives/2022/03/index.html","0abaf6e022e736645d767dad20b91139"],["/archives/2022/04/index.html","4ffb0d9463d846dfa7945167701c1b74"],["/archives/2022/05/index.html","53db934758ac74892fa7971d69d785ca"],["/archives/2022/06/index.html","ef5c97707d0caba25af2d12fcae9daf6"],["/archives/2022/07/index.html","1a697f95df3e901ea47423fb31cc965a"],["/archives/2022/07/page/2/index.html","f10bb65afd5704d04d590a5d7f6d333c"],["/archives/2022/08/index.html","62450a2b66e6f4f5465ad6a20e6ba3da"],["/archives/2022/11/index.html","5cfe10f08485ad1c29c36148fbe28899"],["/archives/2022/12/index.html","54f74b675c1c272f9f974d93f332b2bd"],["/archives/2022/index.html","c4c2a10ead5d4d5c0d559d8951375cc8"],["/archives/2022/page/2/index.html","35daf144e0c911b520c8790bb48887c2"],["/archives/2022/page/3/index.html","1167e14f3c86a906dda17416dfa3e3b9"],["/archives/2022/page/4/index.html","96adb0bb0234d38245768a9ff0aaed36"],["/archives/2022/page/5/index.html","a4c1a86d3bfb2635c98ecbc148bdc9d0"],["/archives/2022/page/6/index.html","1b10f5cb328d165751cbdc693d3358da"],["/archives/index.html","bcab0333031372570f97ec596622a6a2"],["/archives/page/10/index.html","e8963cf67a778359bc5fe1e8a8a241c1"],["/archives/page/11/index.html","1ec2bfb8dc1279e1d0082267555c1ccf"],["/archives/page/12/index.html","359ac044f1271c0112386cc50869b22d"],["/archives/page/13/index.html","2451c9cc6afcc74ae7a3514c3b3a15fb"],["/archives/page/14/index.html","b27ba23bd5e4ce98c730781c443578cd"],["/archives/page/15/index.html","58b75f7276becc914571e0981f3ca5d0"],["/archives/page/2/index.html","818e9a593f545bd1baa2879d841799cb"],["/archives/page/3/index.html","3bba5f3a3ae476a8cf107b785ee3b2ee"],["/archives/page/4/index.html","9ce789ad5d5c2e3ee406ce02945bd945"],["/archives/page/5/index.html","1966db6fd3329f3f4a230206e0ea3137"],["/archives/page/6/index.html","8335b5c7fd8177f4b99464676d547217"],["/archives/page/7/index.html","701983e394ab09b2fca535f539ad9680"],["/archives/page/8/index.html","b0edc050d86dcb1968b0667985c19ef0"],["/archives/page/9/index.html","47ae05b02817e9ba406db26ada0ef48e"],["/categories/Japanese/index.html","c40cbce4c3c187cfa711e52c1a4f517e"],["/categories/Programming/index.html","efb0daa9045254bea3d6f2b35640c7b6"],["/categories/Review/index.html","db6c96c67a30745ae32c21590b045f72"],["/categories/Review/page/10/index.html","acd4700fad765c29de6260d22e37c5e8"],["/categories/Review/page/11/index.html","a855eb4e4c6b8a486d893b0d5bc47d34"],["/categories/Review/page/12/index.html","36d57ccb70f37a5a7406d505f1f9e28d"],["/categories/Review/page/13/index.html","32055f352cf973fbb4b36c154bbf6046"],["/categories/Review/page/2/index.html","5f765f5afb841d999c95939488209d89"],["/categories/Review/page/3/index.html","84bb0cfc33946758fb9002611d7a0399"],["/categories/Review/page/4/index.html","19881f85c979b6cd512e879bbda95234"],["/categories/Review/page/5/index.html","8e37a1f4c1791205788aa53d84b4722f"],["/categories/Review/page/6/index.html","5a819c5911677fda89efff27bf5d1062"],["/categories/Review/page/7/index.html","33299856dcae99e253a49510bf8c8416"],["/categories/Review/page/8/index.html","3f260b0b334ae770da28c6c5c256f1d2"],["/categories/Review/page/9/index.html","889f6d8b2c09cc19bb7144d56f26653b"],["/categories/index.html","4ddb61731e2a4ad262410e46e6264dc0"],["/categories/日本語/index.html","87411a6ae52d82637d9479c6f636f6db"],["/categories/日本語/page/2/index.html","5e374714d137acf366265e9278dae29b"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e5cb9a129fdd34c6fc4257f97c115158"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","8c3c86e462670aca729c6a9511872956"],["/page/10/index.html","bebcb4a1f7eee531c667c4846d11885a"],["/page/11/index.html","b7a5ded6fcc3fadb2ee789ebe577e8fb"],["/page/12/index.html","f9107d3917ba9f5f62fae6ae26560420"],["/page/13/index.html","9764f33cac35c7f25bdc65b614059d28"],["/page/14/index.html","2cf2ba775d970f811872f9f019259d77"],["/page/15/index.html","d9d507c0f8a1e180e44d17e240ab6b51"],["/page/2/index.html","0160385e405d30554897c584a8adef6b"],["/page/3/index.html","4239b04c111dd67ba11aac7f09489262"],["/page/4/index.html","00f864d80ba0a1b4cd728766ff2d493b"],["/page/5/index.html","205bb6e2d62e16328e6ad5635678be2b"],["/page/6/index.html","226baaedb57c7a8421937c586249a965"],["/page/7/index.html","1c9ab7e493bbea0ec13a205bedb770b9"],["/page/8/index.html","48b6badb55ab5030c1f882386ad71c38"],["/page/9/index.html","805977d1535e8b6802b0fdf94a1f877d"],["/sw-register.js","5c146a2b867854d2ddf1d195ce74d449"],["/tags/10分作品/index.html","56e1375ddf9062a6601d8a02daae9753"],["/tags/3分作品/index.html","8412bf57c7a3f1039a3075ea426e3f4e"],["/tags/4分作品/index.html","51d8f3626984113216185153b15f674c"],["/tags/5分作品/index.html","69518b729012c204deb15dd7e4b2a1ec"],["/tags/6分作品/index.html","1161144a95fa70ed23fd5f91f8defc35"],["/tags/6分作品/page/2/index.html","049e39043f8cab7790668b21883e26d0"],["/tags/6分作品/page/3/index.html","cf23bd51939d4db12411b1cba691144b"],["/tags/7分作品/index.html","3ce9e8a3d77351df6a49c2e68d8f779c"],["/tags/7分作品/page/2/index.html","60432552e24c787675911fdc383ab4a7"],["/tags/7分作品/page/3/index.html","ba7251cec616f36a4f29dfc51ef172c5"],["/tags/7分作品/page/4/index.html","62f8d4b60a27b91c67df6fd98e7c8bbe"],["/tags/8分作品/index.html","7ae57dd3c91c594e6e26cde00ffdbd29"],["/tags/8分作品/page/2/index.html","887d74f94cf8ae20b160dc308159bea4"],["/tags/8分作品/page/3/index.html","ef35e7b4789ffb5169ede004e9158381"],["/tags/8分作品/page/4/index.html","297f7957eb8542d1802dc66628571b86"],["/tags/8分作品/page/5/index.html","3dbe03bfddcf2d9483ffa6b71e96c94d"],["/tags/9分作品/index.html","13b887edb389a71b9ae92e32ca379502"],["/tags/Lyrics/index.html","f9b964c025f4fc3c3572c88b0cfb8754"],["/tags/N5難度/index.html","549f238027f396848080fa01abc677b5"],["/tags/N5難度/page/2/index.html","f923d10929e803a031e6cc9546b8e5b8"],["/tags/index.html","b387df6f63db9f37548bccd090121574"],["/tags/アボガド６/index.html","9d71e0fbd65774bcbc534038c10ac33a"],["/tags/三秋縋/index.html","553e836ed4bc2d480646e79cc8dc2af3"],["/tags/中國武俠/index.html","f871a42161e7187548e1849210579d59"],["/tags/中國言情/index.html","8463ed1493c10e543d2bd9606962c069"],["/tags/二宮敦人/index.html","7086938582865c205c1ed1ffd9d57b97"],["/tags/人性/index.html","40b71c6ecd0b7b68e3b26805f9dfec88"],["/tags/人際/index.html","fdd6428675ec75c33275d6b0e186a9c7"],["/tags/住野夜/index.html","1eaf8864743ff91824e1fac80e5b8a58"],["/tags/佐野徹夜/index.html","72652f79d5cd471006b4e5f4f3277065"],["/tags/努力/index.html","512b12a1fd8774d434023d25db412e65"],["/tags/動畫/index.html","910b6132d4297b7861a7b13020f681c8"],["/tags/動畫/page/2/index.html","297254ff3d7d657b8ff751953b3e08dd"],["/tags/動畫/page/3/index.html","75e4be1e43020877567fe070e1d1cad1"],["/tags/動畫/page/4/index.html","4371f1d63af3e1233699c910e62fbf19"],["/tags/原諒/index.html","ea116e1c7bb4ec4e4f0cb7842e2bca1b"],["/tags/反烏托邦/index.html","229e325fb828c4168ca61e0081f5930c"],["/tags/啞鳴/index.html","2bf4bfc3a7593101c466a00854ca3b20"],["/tags/喜劇/index.html","29ee45a53916482eab1c363dd5c64ff1"],["/tags/夢想/index.html","4f5d2e0acd96a61c77d92df3269c66ca"],["/tags/天澤夏月/index.html","bfacf3573fa8785077711a2e681c8cb7"],["/tags/學習/index.html","c54f4f76047002816024e68ee58bd6bf"],["/tags/學習/page/2/index.html","9d1278f3bd79df98d510915f95cc2c53"],["/tags/宮崎駿/index.html","beeafdf9ec3db89f9f10a3ba91d4c5ab"],["/tags/小說/index.html","5e80b0d7cca741a01de69c3ef93fde9d"],["/tags/小說/page/2/index.html","3c6aee91998d5add4eeab595e5ab5010"],["/tags/小說/page/3/index.html","3f6be781d99e1d90e815367c98f62919"],["/tags/小說/page/4/index.html","e253a95f0e9d4c7320957a09c80cdaf3"],["/tags/小說/page/5/index.html","23fa7fbfc166bbcc67ea0c2442aa4b16"],["/tags/小說/page/6/index.html","3c3a58f7ae6e4fbcf33b248802999621"],["/tags/小說/page/7/index.html","25328a31398dab8c17997d6b7afb294b"],["/tags/平淡生活/index.html","b36bb1c716f2c7dfc34eddf872dfef64"],["/tags/幸福/index.html","7fbc1aa5f2bfd41386f10a4a81ff9c9e"],["/tags/志茂文彥/index.html","6111cc7d85b3a57739cdd6bdd2beb9be"],["/tags/愛情/index.html","1e819c55852b5aea9252323b393fc817"],["/tags/愛情/page/2/index.html","e812aa5913184e6f5ff84ce3d6619069"],["/tags/愛情/page/3/index.html","a01c919ffca16df76df3ceb2af5958aa"],["/tags/感動/index.html","74350e38438131d92f3787772c84a613"],["/tags/懸疑/index.html","461c0dbb3deb3c83698eb4a4bfe0486a"],["/tags/懸疑科幻/index.html","482644a2bf667f4a6f1a1886891d936c"],["/tags/戀愛/index.html","a9bb790db2f80e3d3208a4ec71f86270"],["/tags/成長/index.html","0ef418c6ae7d318f637e26d330b99660"],["/tags/成長/page/2/index.html","efe147d84d80580b485f7dd282181c51"],["/tags/戰爭/index.html","b779679283170493f2082a4999a1fd3b"],["/tags/推理/index.html","973bef954b76ac6fe910b4fd750a60d3"],["/tags/搞笑/index.html","7ef7450248495ab8413babcb3cb18231"],["/tags/救贖/index.html","ae4ab0d962f8d31446175181d98b78fe"],["/tags/斜線堂有紀/index.html","95a580db7cb74e60d5e47d5938c99a93"],["/tags/日常/index.html","7b3fa7afa5e3e6ba5e31f53a04aa14ab"],["/tags/末日/index.html","523e9084daa934d2c13531014c1f947d"],["/tags/校園/index.html","a0c723d1dc18e199e96acfb928f86cbb"],["/tags/武俠/index.html","6c28e673d81520644d6521114c94d70e"],["/tags/武俠言情/index.html","ff69500493662e056b44ec5514e74791"],["/tags/漫畫/index.html","4b265728cbc4cf1421387c0b3288c107"],["/tags/生命/index.html","cc824c4e1186ac16e4ba48a7574eb610"],["/tags/生命/page/2/index.html","651e653641db8b6b8ff0998cd7904fb2"],["/tags/短篇/index.html","067c3d7402bfdd4d192894a14d2ea767"],["/tags/社會/index.html","345ae4bf0bac56126c8bd62af96a32aa"],["/tags/科幻/index.html","7fc18707a478402414e1c5c4de0e98a0"],["/tags/童話/index.html","f54a23bac671fa7d3740ec48496c2167"],["/tags/競爭/index.html","964fee1d418ef33b455c62bf2036298e"],["/tags/自我/index.html","ea3c15e7562293b2553927f46566beb0"],["/tags/自我認知/index.html","7e9be915c65c057eb6080dacfe7501d2"],["/tags/葦舟ナツ/index.html","3b8f6c18be54441729748acbe978d1e4"],["/tags/藤萬留/index.html","e07a54aa77fa3384f484b12217c5a47a"],["/tags/親情/index.html","a951d567eb4089403c00be70f80c323c"],["/tags/雜項/index.html","f136fba417778b71f1cfabe14c67b060"],["/tags/電影/index.html","d89a1739dd3bb8c4dcf3b8bb465c6366"],["/tags/電影/page/2/index.html","55fb2229f80860b03a90a7660e254fc1"],["/tags/霸凌/index.html","b8f08c7f3babab878b49daede4d75b83"],["/tags/青春/index.html","b165f17b256a55cbb42302fe7cb2a21f"]];
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
