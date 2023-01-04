/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","e6dafc72e0a75b4775667146d23f67fc"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","b9bf52ea02a0b7e7a67b1d3d82e18b2e"],["/2019/12/25/Review/無法計算的青春/index.html","16b5e4570229a1ebe3750124c5becad5"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6a5b056aad2800d8d3b7ce0fb88de590"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","415a2e6e17400abf3a61666759edb5d8"],["/2020/01/19/Review/下雨天，不上學/index.html","0bbade89bac3c2e339912018ab66585c"],["/2020/01/26/Review/三日間的幸福/index.html","86070af0e27f953f019c83b0282e32ce"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","9af64e7574b8746e53b149bf07000558"],["/2020/02/09/Review/青春期超感應/index.html","2ed1e1055921df0810bac88cb0db6253"],["/2020/02/15/Review/又做了，相同的夢/index.html","c7b45d92118caa990ec064b8391f1546"],["/2020/02/22/Review/回憶當鋪/index.html","5c8801640584c0106ca9b7eee8428239"],["/2020/03/22/Review/不適合自殺的季節/index.html","619eb96f9a10dcd2a87053e3a0c4143d"],["/2020/04/26/Review/我們都無法成為大人/index.html","0c62fe6c95668340820bf3bbb5017fe7"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","1ac18fdeb71fb82730cb9ea0a7391a91"],["/2020/05/17/Review/人間失格/index.html","17b8319955adf32ddb8e43ce20093f6d"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","000a6f164c4b3d791f470b78a34add4b"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","ece687e0512a25cfa7786222808127a2"],["/2020/08/01/Review/銀河鐵道之夜/index.html","bd129844b19fb4ac1969e7d7b7c936de"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","3422c9207f508211103462c9945c8397"],["/2020/08/16/Review/15歲的恐怖分子/index.html","c62726c01e9c5ee3dcd71217b0e6b638"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","998da19906bf02fca5f09fd81cbf9024"],["/2020/09/13/Review/羅生門/index.html","f4f4aee6572ec361398afcb39522f13d"],["/2020/09/20/Review/闇夜的怪物/index.html","f95530b4714f976b5fb8575bae5b2a20"],["/2020/09/27/Review/14歲，明日的課表/index.html","2da60b1003df3e501f96fa76f6cc2ae0"],["/2020/10/04/Review/致十年後的你/index.html","69d8d4a223401f152ff8c23fb857c62f"],["/2020/11/08/Review/滅絕之園/index.html","ef21aac05e03b69df2db9c146bf9551c"],["/2020/11/15/Review/將愛拒於門外/index.html","d94abbe177fcb04745184aa5def604c9"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","276d0c19a1a8cb91cebb579a6e4b6dd7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","71442881a421bcea328ceb5ce8b0d510"],["/2021/04/22/Review/道印/index.html","788eca16859a91cb2aa6ab7fd568039a"],["/2021/05/03/Review/戀入膏肓/index.html","dc528cb281dae6332961c7d10309124f"],["/2021/05/10/Review/Dice/index.html","84bd3b88e9e132845cb3b4cf608345b6"],["/2021/05/15/Review/魔女之旅/index.html","98bbf030b35c15189631c09d8e1a3da5"],["/2021/05/28/Review/戀愛寄生蟲/index.html","eea68313ccbb9b3d9c9f73a6d483c49c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","aba5590d6bfa285cd537006643a94f16"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","f1198e573788cac8d562c97b203bb5da"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d55fc42c289c11805292c1c6fa4d79c5"],["/2021/06/05/Review/流浪的月/index.html","746bca0a4e7e36f2a497e11ec8eb4136"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","66e3402f244ead6b8434e4e9269835b5"],["/2021/06/13/Review/第一人稱單數/index.html","ce639bbefc23f0395648abab28a7fe15"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","03a2436069b39cec186e4ab5d079ab92"],["/2021/06/16/Review/願你幸福/index.html","378173a715f39b1f7ea941b8911e7777"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","50a2bc988dfce78c54314323bee169d4"],["/2021/06/21/Review/神隱少女/index.html","84f9937bd473f427cb6d1a22328b6d4c"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","e37a4738a1a61ed81a5ee268dac8f15a"],["/2021/06/23/Review/天空之城/index.html","114287a1c0bb2cfcba412600c8a32f4d"],["/2021/06/24/Review/魔女宅急便/index.html","3a34d378d82b7cebcde425c5297823d3"],["/2021/06/25/Review/借物少女艾利緹/index.html","4431a82e166a13d78606f37adfe4ad77"],["/2021/06/26/Review/魔法公主/index.html","f6812a27c6d9ef170c41cd3d002cfd8d"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","fd6dec7ad7927387e3b40c531f00f572"],["/2021/07/04/Review/飛雪與劍/index.html","69c0dd13f375d925f8d51970fc623ac5"],["/2021/07/09/Review/地球防衛少年/index.html","07641dd04b64b750d93714dd0dd9f424"],["/2021/07/12/Review/Angel Beats!/index.html","87898d6f867250495eb6fc9f90a2b082"],["/2021/07/13/Review/Clannad/index.html","4edc438221646104cac1802f6f6c6d19"],["/2021/07/15/Review/AIR/index.html","1ba71584b87acac4b983055a9b45fd27"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","11fb8cc25b4b0c4c0271a37a26ae2e2d"],["/2021/07/15/Review/螢火之森/index.html","6cf12a482cb82cdd37049a04cae5b8b8"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","6bb5636a00ef9236ac529793c4ec7ff5"],["/2021/07/17/Review/奇蛋物語/index.html","8c2c911ab16b8f79ab0206902d2e2fce"],["/2021/07/18/Review/Vivy/index.html","30173e99a39a7341d1c72442bdb178a3"],["/2021/07/18/Review/請妳消失吧/index.html","89f03913b9d3174443d39030f64b8984"],["/2021/07/19/Review/漣漪的夜晚/index.html","c11c18ae099b7a0ae6f48916e14d9f85"],["/2021/07/20/Review/月色真美/index.html","456be0f07c46e3618cd198948b291578"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","432ed981510c17754d99604e554032e8"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","3a9429a21b63ede62f291d54e3ad7a4b"],["/2021/07/22/Review/罪惡王冠/index.html","4f4fff2d9e58a2ad9dc04cb6dcd22120"],["/2021/07/23/Review/弱角友崎同學/index.html","089824923e8f0d1f9ec993e5db4abf69"],["/2021/07/23/Review/惡之教程/index.html","7f2f92ebfd49698e491f8e60c31cbf11"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","4d3ff9baae2d527d736edfe85f55d76d"],["/2021/07/25/Review/魔王勇者/index.html","5c274240694d050920660d156eb8b258"],["/2021/07/27/Review/一年A班的怪物/index.html","a06eecf78a01f00aea643aefabd1d1d0"],["/2021/07/27/Review/奇巧計程車/index.html","22bc109549710e99167fb6c6309b7806"],["/2021/07/27/Review/專情的碧池學妹/index.html","6d93d398f6117a62da59ff65fa97ff5e"],["/2021/07/29/Review/只有我不存在的城市/index.html","4cffb646e195a7fd9fbd723a180cc7a5"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","5e73515794ca056252b4e700fca3c9b1"],["/2021/07/30/Review/可塑性記憶/index.html","f8858cfb47c52e5df967c4ce0c1e6774"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","91cb267f3c6edd5a4d6b32f2631ae3f4"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","e4f271143a5aad2fe262229b6740dc8f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","c8ab1b9294aa0c31c69b74bf647ab72d"],["/2021/08/25/Review/清戀/index.html","6545ddbc66468f20c057cd697d52db43"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","e346110a8a7fdca83057ebb4f9bce149"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","edef02a7586a3fef5be10eef69eed460"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","a5c944e2d560011a9a79ca7e2b3fd746"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","94b87ed5f2da14b55dfd3d408f1fe58d"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","844abd4df9dbcd7e41cbab88fbdff35b"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","4453d8ab2b979a3525fc1246b3c0bfed"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","4ac3a40b94dd1b40aa4f24a92ebf160f"],["/2021/10/16/Review/龍與雀斑公主/index.html","608f4422249aa1c7999eafefddce7a8a"],["/2021/10/19/Review/孤狼不想開後宮/index.html","d40bb8d18182ad6bec3e7a486853b4f0"],["/2021/11/13/Review/徹夜之歌/index.html","5f78c35dd94793ea7befcf6f94c5ccb9"],["/2021/11/24/Review/武煉巔峰/index.html","defefd62be467fa08db564ead1c25c7d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","12ad43eec71e1e126716bbd694caf796"],["/2022/01/28/Review/神醫凰后/index.html","26bdd9672fe981c363d163a366eaea38"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","27467b30e396b51505015f25532e190a"],["/2022/02/13/Review/夏日幽靈/index.html","afcad6ec66dc1907cb94959abfc223ed"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","61dc6d1b22b2d2de54e3cb4cd2bae440"],["/2022/02/26/Review/賽馬娘/index.html","6e05013fb55e705d0550cf4dcdb0f119"],["/2022/02/27/Review/大欺詐師/index.html","00420cd407987ade8682092aaae3408e"],["/2022/02/28/Review/前輩有夠煩/index.html","0deb6caa9f11dec7766aa35bf0e7c30c"],["/2022/02/28/Review/碧藍之海/index.html","e00b518df1c0b4e2d53ce97124189d28"],["/2022/03/05/Review/落第騎士英雄譚/index.html","b5948c215d2def449a75501dee1a4d2d"],["/2022/03/06/Review/Another/index.html","a1947264919ce9f8ff5f21147708be9a"],["/2022/03/06/Review/入間同學入魔了/index.html","7940c6019c750def8cd12b3485a3f194"],["/2022/03/18/Review/再見宣言/index.html","b57c4c841f68566a6ceffbce5528a3e9"],["/2022/03/23/Review/生若冬花的妳/index.html","ad10f7956c1e4151be37872f1b635328"],["/2022/03/25/Review/天之弱/index.html","65107f01eafd61101d82268352b276ca"],["/2022/03/31/Review/滅了天道之後轉生/index.html","0bd50abab0ed79269ecd903252d4906d"],["/2022/04/30/Review/泡泡/index.html","d38f71002eaafdcfb841fc9f6795cb71"],["/2022/05/04/Programming/Dynamic Programming/index.html","05cd25bb24e9e83aa29cd87bacc1ab05"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","6940c0b78321f3d97a34e45e23cac879"],["/2022/06/13/Review/偵探已經，死了/index.html","ed2c860e3de3e5e647cb7fba0449ba3f"],["/2022/06/14/Review/黑色子彈/index.html","1e343cb58d947cec660620db3226d639"],["/2022/06/15/Review/黑白來看守所/index.html","d57cb9ddb00081654c1add481fd9a130"],["/2022/06/16/Review/虛構推理/index.html","ca7248dbbe4645b90069f2ea5f0541e7"],["/2022/06/17/Review/戀愛與謊言/index.html","30752816b95c7ca3f59a19e4f029d56e"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","b5302d03c7160e9f1640081406a02c58"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","be30bd6283ac80bdfcda95cea2751248"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","3997838777589e2172f6d5ec6370ba8c"],["/2022/07/03/Review/Hello World/index.html","2f93ef5f8091812559d8ad8ec231c4af"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","418483624aae439a07955007d89a2058"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","a8ff5782f4c7199be7991305d7764b8d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","2741e5cb0cf51243db8cf3d34e40daec"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","f96603c7d13a97ec3c43f90d6bb3096a"],["/2022/07/16/Japanese/動詞分類/index.html","f5c3ad4616db19c5d08fd635db903976"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","f18ff3977c7e065587cc6969d790d9ef"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","b9cb5ec0cf0986d49b92449e3f255446"],["/2022/07/17/Japanese/音便/index.html","b1ebb26d999f11acf2770e47bc129a1e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","0c166ac515a596f8a092d50e9187c382"],["/2022/07/19/Japanese/助詞用法整理1/index.html","2d71018c20b7218ddb528b4138e8a3f4"],["/2022/07/26/Japanese/助詞用法整理2/index.html","03d401cee559da2edb1924a2e3b89828"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","cc0c7442d46c4c6e145510a00dec10cb"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","6dc0c9e494b73cfe6ee082db54783411"],["/2022/07/30/Japanese/疑問詞/index.html","81998b8085953c3b53856ed2ed71ab80"],["/2022/07/31/Japanese/助詞用法整理3/index.html","dc1bfb066d3736fa6929cee6b076aec0"],["/2022/08/02/Japanese/副詞整理/index.html","9783201b727ebd485e91bb717e4c1fb1"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","8449ab22483ed7f90a30791490ae7495"],["/2022/11/04/Programming/Data Structure/index.html","41f106632bb77ac7a690c9b87459fbad"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","5f85d5fca4324e2a6dc1597b92f57704"],["/2022/11/22/Review/組長女兒與保姆/index.html","5eb39afa60a58a405848feb74a76c07f"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","49781a51b8bbe31c31983adc29424c1e"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","73e22e31898819fe6734f8e89986064a"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","c8934256e47e91c2caf4ba0002dd90f6"],["/2023/01/01/Review/あの夏が飽和する/index.html","c58264674f2961fb7d24c8750fcaaae4"],["/2023/01/02/Review/孤獨搖滾/index.html","76a21ba6147b43f3aed02e6ad5cd58f7"],["/404.html","332025c8beec79888d182a08a752284e"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","51b536213691990ceb34b5b5cdc68ddf"],["/archives/2019/11/index.html","a908fddc26bb8692edcfe24e8faf8903"],["/archives/2019/12/index.html","83bdf4dbb3e7185c8a14f5269e6e6626"],["/archives/2019/index.html","21860620cf20e1e504f8084673479b31"],["/archives/2020/01/index.html","dbbabc457a3fcc0647ac77b35fea223f"],["/archives/2020/02/index.html","3d73109d825eed905ab0d3afad7d6a9d"],["/archives/2020/03/index.html","44375aa501962d294aa62d66c4e2222e"],["/archives/2020/04/index.html","4cb015b6a920cfe15f33bc966db2599b"],["/archives/2020/05/index.html","2a1d586642a5e53561d47db946b3110f"],["/archives/2020/07/index.html","6f10b68eb8b19b872f975f797aeaaa54"],["/archives/2020/08/index.html","0f0347839fa3938a4f11638734637761"],["/archives/2020/09/index.html","d86ac4de7bb3688e634ec8c4e86dac1b"],["/archives/2020/10/index.html","d9de17b02184451a8bd6cfbdb2ef25c7"],["/archives/2020/11/index.html","5ec25823ebae46ff2f4f19a86a37bc00"],["/archives/2020/12/index.html","4a94283ecac23ff4adffc5560edf8775"],["/archives/2020/index.html","5eab55f3be410f192b57068a9b7d983b"],["/archives/2020/page/2/index.html","1e7fb417b39c1df707bc511bc3912445"],["/archives/2020/page/3/index.html","eef8276e6178b044ffd189ab65fa6739"],["/archives/2021/04/index.html","8ad34a5363d26b661b22f9f2302029c7"],["/archives/2021/05/index.html","102ac5a89891ff2d3d50d1e8e8c54942"],["/archives/2021/06/index.html","c2620e598f3ec8e188b33373c3e86df1"],["/archives/2021/06/page/2/index.html","28820a47423e08e159005042a263f643"],["/archives/2021/07/index.html","3c24b24321e8cddec960b25dff48252f"],["/archives/2021/07/page/2/index.html","aad8151f77a4b7f15e1e0cbbe06587bb"],["/archives/2021/07/page/3/index.html","337dec4aca41c233d275493dea6aabfb"],["/archives/2021/08/index.html","3e6f50161cbcb778cd1bf835bc944fdc"],["/archives/2021/09/index.html","a3fb5f5403fc04b61707897d35c2a317"],["/archives/2021/10/index.html","6fe1f9a602c37915020c6d23a41fbfe4"],["/archives/2021/11/index.html","c17b2a74c4d427ce23e7009178d54248"],["/archives/2021/12/index.html","351771bdc4a03f6b2dc084e827524ddf"],["/archives/2021/index.html","007a52e3a5b7f974975ad0f14eda6ea8"],["/archives/2021/page/2/index.html","8c52244ecdd9e86fe6361a2de0743d8f"],["/archives/2021/page/3/index.html","6e21ac93b3cf6ffe54cf0b1f5aa42bdc"],["/archives/2021/page/4/index.html","330eaac5a9cadfedd98e6cd8cef66840"],["/archives/2021/page/5/index.html","e4de669eae35d7d566a75c24e331285f"],["/archives/2021/page/6/index.html","fabea2eae178c8372625e31920951bc5"],["/archives/2021/page/7/index.html","d5061d788dd5ba7b79e42d69ea618745"],["/archives/2022/01/index.html","e01ff9ea2cdd4c946cc440f5ea82e0cd"],["/archives/2022/02/index.html","b4b4160cf47888b003f995b7c4992cc4"],["/archives/2022/03/index.html","87c9d940ab58cd5fd5fa30a3c909f7ed"],["/archives/2022/04/index.html","414f0f52a12adcb5086b1ee85d2af0d8"],["/archives/2022/05/index.html","8c15c57799b97dece88fdf5a66e84965"],["/archives/2022/06/index.html","7b7598b3fca64d64f6637f856a9e49c3"],["/archives/2022/07/index.html","bddff1296f3f876cb3212ba59d50bd09"],["/archives/2022/07/page/2/index.html","71cd9cfbb6e53cdcb7abfd9c58ffbb2e"],["/archives/2022/08/index.html","56e20cddad79a1f5f2221c49fc584033"],["/archives/2022/11/index.html","69ab195e382231e1bfc92e31cb80e2f5"],["/archives/2022/12/index.html","92633f5005019ac802a3fa707d10b9d8"],["/archives/2022/index.html","6caf86249aa6c347c0045d52528cec94"],["/archives/2022/page/2/index.html","a6a0a3229ea320774797974426c6c7bc"],["/archives/2022/page/3/index.html","cb6315b8a2ab42bb6bc4a7df1b3abb8b"],["/archives/2022/page/4/index.html","370fb165b24f00fb94d42b34141f3feb"],["/archives/2022/page/5/index.html","cf3d67b3c653b167a78206d0db931c07"],["/archives/2023/01/index.html","40445032fcb5d4bb1f86ae6dd6096ca0"],["/archives/2023/index.html","f0667b4bcd8e36f5e9aff0001e1f04bb"],["/archives/index.html","bd8987ad7d760f8adb2106ca1f3b22f6"],["/archives/page/10/index.html","2828943ed618105ffa4487cf5d634d84"],["/archives/page/11/index.html","0bdb065a85697f8f5f4c7f8be9ca238a"],["/archives/page/12/index.html","5713e82d35b3df5c03ec137192d94593"],["/archives/page/13/index.html","5cbd10411ff12f81ef3edbaff712656b"],["/archives/page/14/index.html","99c60ae7c1cb0483146c75096c4c7ceb"],["/archives/page/15/index.html","8a8b42d141cfd62ddc7c3495a202d461"],["/archives/page/2/index.html","b9c46de689c5c520c7b0f3267fd514fb"],["/archives/page/3/index.html","bc8f638d7980a3bee4776392d62517f1"],["/archives/page/4/index.html","952978afff62cc3f59f7c8371c8f487a"],["/archives/page/5/index.html","3781da60f9bc619b213e06d52f66f8e7"],["/archives/page/6/index.html","d8c65c2117f0cf1aa0b93cb0973977bd"],["/archives/page/7/index.html","c78b6b7ae964c1e519e756024d709ef4"],["/archives/page/8/index.html","7798641663bcf015d843f8ef55d0f8a0"],["/archives/page/9/index.html","3348b2f87a39b5d99f271fbf47050ac3"],["/categories/Programming/index.html","bdba8632fc2674d243850e17c148cd6b"],["/categories/Review/index.html","bc3fb613fc8c58ea3c569ea75bc7ae37"],["/categories/Review/page/10/index.html","2684dd0bed20ddeca2fb7fdc6147c18d"],["/categories/Review/page/11/index.html","efe328bb5148eee614bd0181cdd538c4"],["/categories/Review/page/12/index.html","f48613e02dc0acd14f137dc0d54dcd37"],["/categories/Review/page/13/index.html","1209270b9de5ae3ecd1564eed8bbe6e2"],["/categories/Review/page/2/index.html","a9f9793f20af70495b8cbcaf2cb768e7"],["/categories/Review/page/3/index.html","792941087a555a9fedbe7bbaf0405db0"],["/categories/Review/page/4/index.html","620b52538da8dcbd771bf310597b261c"],["/categories/Review/page/5/index.html","ae9251e6ac67117756ed3eec7e8ab884"],["/categories/Review/page/6/index.html","d336a526ee767e72710b5b16987bd638"],["/categories/Review/page/7/index.html","a04e0b8b43fc7fcf5d5be61355dfecc8"],["/categories/Review/page/8/index.html","f18ccae72ba4edcbf30949e47dd19660"],["/categories/Review/page/9/index.html","2c7c4c1d87a4f14bc941e0c5d4401591"],["/categories/index.html","03456ff219c92675da612de48e931666"],["/categories/日本語/index.html","5946c00ca3ea7539a85056b6604234e8"],["/categories/日本語/page/2/index.html","d236c188f621188ad9036adebb1464b4"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bd0d1efc4f500877a53838e154a8f2b2"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","97cdd3e654dc2f487aaa97ec1276b277"],["/page/10/index.html","27bbd5b898a82eae418b2fbed1100bc6"],["/page/11/index.html","b3c6486fd2b84ab992a22d2f281caeb8"],["/page/12/index.html","e43a165a15f335d637903f63155c5ef0"],["/page/13/index.html","93d747b8e1f12330155cdc9c32173f74"],["/page/14/index.html","5db2b0ac8e6c521a35ae1b7e21e8d62b"],["/page/15/index.html","1cea1a372a35156778e177f01edce2fb"],["/page/2/index.html","aa07130b9a8a47c307d43fef823f67fe"],["/page/3/index.html","45163bd35aae5428fb495c9244d0f066"],["/page/4/index.html","e1c63c68aff28d4c8748cad8193575ef"],["/page/5/index.html","da483bb09a030688db68c4fa305864b4"],["/page/6/index.html","43345424f1c9ce27ce1478ee3d7e1c4f"],["/page/7/index.html","df6186ddcbe37a6d24e9c22dd9b0c303"],["/page/8/index.html","51e187349ce6ec4dcd04e22f4785bc0f"],["/page/9/index.html","e328143df11b504b42b67ce80623810c"],["/sw-register.js","959c2abee276b3ccbafbaea4495297c1"],["/tags/10分作品/index.html","760f2bec27d2f50cb68a1c114f347f3e"],["/tags/3分作品/index.html","39d2b901496a2fa3ddc7d752ff14644a"],["/tags/4分作品/index.html","7e6ed26127076a4f4757d859f90ceb5a"],["/tags/5分作品/index.html","c0fbe55e611953a72ed2d38625a9d711"],["/tags/6分作品/index.html","e90efa863e4c1d6f07f1d0d38de6a28c"],["/tags/6分作品/page/2/index.html","1991483e8586ab56c8993957ee9cfe03"],["/tags/6分作品/page/3/index.html","a39604e8583bedd70322ef7cdbdde459"],["/tags/7分作品/index.html","49915797a15769cb1a4fde78a70f8546"],["/tags/7分作品/page/2/index.html","5bfb3d9ccb2d81fc5293136ee272c3e4"],["/tags/7分作品/page/3/index.html","5a4e88e19acf1ad68dad32a0d4855066"],["/tags/7分作品/page/4/index.html","0b7d7f094c25bcccd8cadf6e8edfbedb"],["/tags/8分作品/index.html","39032db1bf223158436f5503041b079b"],["/tags/8分作品/page/2/index.html","a1dfe0c1685d8ff872110a5e6efa456b"],["/tags/8分作品/page/3/index.html","3ea1276b5d8cb871b4691b6562e33f6c"],["/tags/8分作品/page/4/index.html","952f275fb4be0f4039e9b5191c43656f"],["/tags/8分作品/page/5/index.html","e9efba34f601dba351056e949080c70b"],["/tags/9分作品/index.html","d0ea01ac862d1b00f399031b77562b9f"],["/tags/N5難度/index.html","c6ec7316bad30287aa98c18918cae567"],["/tags/N5難度/page/2/index.html","c434ed18a465a2d87dade05ff6930ff3"],["/tags/index.html","fbddbf2add398790036d6eca34cd3557"],["/tags/アボガド６/index.html","cfc2c07df5a35c696d8843f37cc0bf6a"],["/tags/三秋縋/index.html","2c47d49050bb52cfd156d059a0628157"],["/tags/中國武俠/index.html","64d6504db89fcc657ae9b1d0173e5f5a"],["/tags/中國言情/index.html","0f21cec7b8e6d9404aaffed41b51c5a1"],["/tags/二宮敦人/index.html","b637c064d9d9bce518777e0906121ddb"],["/tags/人性/index.html","8f4559e1e545e24413fee1ee8903bbda"],["/tags/人際/index.html","69cf4fe17333a3e108d09dbdbe859352"],["/tags/住野夜/index.html","95718a5e564fbb1674c8ec36740035d1"],["/tags/佐野徹夜/index.html","5645b618f1592118202bd939a62a4228"],["/tags/努力/index.html","4a173a75c0c17f752f95361236268188"],["/tags/動畫/index.html","c6343b8729a4aee2d6cc27011d9b5935"],["/tags/動畫/page/2/index.html","b968f1860623b174cd80e42603e5e526"],["/tags/動畫/page/3/index.html","f683282b40a3ed85448c9ac93cdea0be"],["/tags/動畫/page/4/index.html","7957997928718bf9580c883a11833f97"],["/tags/原諒/index.html","48867c39a23d23400ad18f9d0067a0ba"],["/tags/反烏托邦/index.html","0c750c792da09d2592ad4752d3b8c907"],["/tags/啞鳴/index.html","4cf5e196729c6630889ff098d8a016c0"],["/tags/喜劇/index.html","b8357df28be40be3f3a44567623cde67"],["/tags/夢想/index.html","506031da8b4ac2b5d2270b8f56a8f709"],["/tags/天澤夏月/index.html","bb6ae4eb14797f4c09fc16d46e5f448a"],["/tags/學習/index.html","90af3fda3e309456fd3ea646a8894035"],["/tags/學習/page/2/index.html","cf72f77da1301a0f32dc1c3d5ba9afb5"],["/tags/宮崎駿/index.html","aaff6c711449e3afd697acaaacf7d87e"],["/tags/小說/index.html","5531433f2e7bc5029221495825f1517b"],["/tags/小說/page/2/index.html","d3e64691d2664a1b36bb0f1de0550624"],["/tags/小說/page/3/index.html","e27afb3b2a9174641b3755bba30f3b80"],["/tags/小說/page/4/index.html","9ba4343ef17df6cac11e3bd5d50d52a6"],["/tags/小說/page/5/index.html","e295281002041ad23daa75e74c992f8b"],["/tags/小說/page/6/index.html","80697b005f56840856682766cf1687ff"],["/tags/小說/page/7/index.html","33324ab184e66bec57eae142995a34b7"],["/tags/平淡生活/index.html","587494a7740986bc63fe8f01df52f2b2"],["/tags/幸福/index.html","d8bb3c94c9dab24feda6e36126b7d69f"],["/tags/志茂文彥/index.html","9d693e25819481cc466f31297cf53041"],["/tags/愛情/index.html","6c84bfadaa2018db1b916402b8bcf98d"],["/tags/愛情/page/2/index.html","4fe6a538b51ec0696b851d0158e44e50"],["/tags/愛情/page/3/index.html","86dd28d9cf52bbabbc4e6ddfa1f31d35"],["/tags/感動/index.html","07d456147b90fc9841724ad2d9b2cdb9"],["/tags/懸疑/index.html","1b04abbd0b362da9617a8e6cf3fbfbc7"],["/tags/懸疑科幻/index.html","9d3f916e3380bd165549ab70853c475c"],["/tags/戀愛/index.html","cae58717ae74c4c88ccfce5fbdb27dee"],["/tags/成長/index.html","a333c67377663a195f3a21aeff9a9551"],["/tags/成長/page/2/index.html","3ddcb7d19e3f615c2713798a4a5b56cf"],["/tags/戰爭/index.html","56b65814e5edf1cad4341b18dde5d1b4"],["/tags/推理/index.html","7c858700d763c9fdf93ec2f84ac3c422"],["/tags/搞笑/index.html","64cf0a12124144576037570619f9454a"],["/tags/救贖/index.html","2c07c8b0ce889b5a99a8969159e6186e"],["/tags/斜線堂有紀/index.html","52d161fe91130d56429ca9dddb09cb5e"],["/tags/日常/index.html","68ca5ecad73849b2e1c3d83d52ce6118"],["/tags/末日/index.html","3f356ed77b06aa4f66739e251cb7cdbb"],["/tags/校園/index.html","3b8285a12c91a3073d2336acb0e5a5ea"],["/tags/武俠/index.html","e000473522992c27a09edba5f512e712"],["/tags/武俠言情/index.html","cec4489345b3b272635d80f3555d7c56"],["/tags/漫畫/index.html","8a95fe841fa609728315c8f92c349969"],["/tags/生命/index.html","6374191662fc09be7f1aa34a625b4b73"],["/tags/生命/page/2/index.html","f6b61c459d18f97371b9f552a4eba34c"],["/tags/短篇/index.html","9194e54cfe5b58fce1010d19dd5d32b1"],["/tags/社會/index.html","221b5412144545eb8e27f60ecb899863"],["/tags/科幻/index.html","399ca9c4ac9ed8b00172e1af77aca2ea"],["/tags/童話/index.html","70cceae02fd0b4aa62a1dc43f2c0cbbc"],["/tags/競爭/index.html","e4ee365ce62d637883adb574638dfe0f"],["/tags/自我/index.html","661f191f4bc6c81b3bd01f9f527c82a8"],["/tags/自我認知/index.html","ae3071f58b6ba427c4ed5a8326810058"],["/tags/葦舟ナツ/index.html","d5c4f2cc5dcf8a07ba8a6915647ddd58"],["/tags/藤萬留/index.html","147a261a59d6e2e0e082aab5dd66c850"],["/tags/親情/index.html","5c3227ae29be4b7444040e31e0f66285"],["/tags/雜項/index.html","f0155c6209175866570bfd32f19e22f6"],["/tags/電影/index.html","890cbdfcffffe59c880dfc2c80753aba"],["/tags/電影/page/2/index.html","c41cc36cde1dc5ae7e33d73abcfb46f9"],["/tags/霸凌/index.html","b2a17d7d3f55e74cf14257012cb37b39"],["/tags/青春/index.html","bf15d6f1fcd8eea39a544df9c15490bf"]];
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
