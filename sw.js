/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","75baba1060b4120ea6c537ef172ce177"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","695fc3fba9a66a55fba166567d816ded"],["/2019/12/25/Review/無法計算的青春/index.html","20e4772d3807b84a17de22fdaa10db16"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","8fe63f339ab6783746e0925f0dc17aab"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","88b0549bd0a6aed8610251a22a44bbc3"],["/2020/01/19/Review/下雨天，不上學/index.html","bef735e0cc271d12605d55a7afad74ff"],["/2020/01/26/Review/三日間的幸福/index.html","11a53d2f491baffb9711ad9db6308f71"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","20c95dfbb766f6d37a7560b0764a9787"],["/2020/02/09/Review/青春期超感應/index.html","5e51df22e5a343140c541edd785a2535"],["/2020/02/15/Review/又做了，相同的夢/index.html","23c0e17c64e1ea754b238b01050ee37b"],["/2020/02/22/Review/回憶當鋪/index.html","be2d813b6a17ccf00b6310092ac0d0d1"],["/2020/03/22/Review/不適合自殺的季節/index.html","cea117f2c3f4d05f046ed5a3f9ef0490"],["/2020/04/26/Review/我們都無法成為大人/index.html","b79c37c230a8b4cc9414ad136b5161e7"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","8621ee94d00e9a27c141ae044551b4ba"],["/2020/05/17/Review/人間失格/index.html","35936c6d7abb698a94f7e7a3a302ab28"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","aa8c16cb02ebaa0f061edb229fdb4a19"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","aecce4346a4d0e329c7d146ff396d53e"],["/2020/08/01/Review/銀河鐵道之夜/index.html","1f062398153844ec6a45951e33657400"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","0a4e982a4c100ca8294fc8c2559fa53b"],["/2020/08/16/Review/15歲的恐怖分子/index.html","739c51a10453cd5c588a7b16479b4c5e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","67c82e5bb6454cf7d5797b0432eac08b"],["/2020/09/13/Review/羅生門/index.html","f54ad5e583b126df6b5efa68b5cca154"],["/2020/09/20/Review/闇夜的怪物/index.html","35f463e3f836d4b0ec798f49eff7ff85"],["/2020/09/27/Review/14歲，明日的課表/index.html","1af3db16af651f2bc3febbe050a707c5"],["/2020/10/04/Review/致十年後的你/index.html","e87e78d8b1ed1f252163e59ab3d9716f"],["/2020/11/08/Review/滅絕之園/index.html","a530e1ea3dbeff90efef8968d7fd8a78"],["/2020/11/15/Review/將愛拒於門外/index.html","a082bf7bb28068049bfeeb7e94d30078"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","a4755effdfaf8edc9f75e1424c489762"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","6bc6e029990632c3ef19d00976914022"],["/2021/04/22/Review/道印/index.html","615baf679b9bd6c93717b056d1ae7080"],["/2021/05/03/Review/戀入膏肓/index.html","c53b9b91d4279e2b34f56f19ad6e60b9"],["/2021/05/10/Review/Dice/index.html","01fc3df082fc4a7b04c87bbd318f0c6a"],["/2021/05/15/Review/魔女之旅/index.html","1b5d2d3a9fd9a8f1c7e5fa25f05e8a0f"],["/2021/05/28/Review/戀愛寄生蟲/index.html","6fd514d8a509564327678fa44a67d96c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","d1e84d648a298ed4d3e645659153736d"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","171cc73c6c1f51f82dd81247ec4cf268"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","2c086b446168d981bacab2d431be0e8e"],["/2021/06/05/Review/流浪的月/index.html","774d4d2763caa13167ee6bb03bbcae6e"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","7eda134ab444dae4f8362673f738f452"],["/2021/06/13/Review/第一人稱單數/index.html","8ff466688da3a9107495c1732bf224f2"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2200c522cbd0bf706538eb2cc166e3ad"],["/2021/06/16/Review/願你幸福/index.html","546171a206481cf6dc34dd424d945786"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","abccf456cc5b34934cf227ba0c28807c"],["/2021/06/21/Review/神隱少女/index.html","8642ceca2e957114e3b4fb019a44efca"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","b79bcd874139a4066d5fb3c630eb9713"],["/2021/06/23/Review/天空之城/index.html","f202d0e2fc68d10c9be072a60a2b09f7"],["/2021/06/24/Review/魔女宅急便/index.html","75babb119309806dda49e1e9a1867e4a"],["/2021/06/25/Review/借物少女艾利緹/index.html","bab2889100f05ac4f8e2e1d4c0f537f6"],["/2021/06/26/Review/魔法公主/index.html","a0279995937709a6b0549b251f658f0c"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","979b5a3f04107d4ebdb48bfe1c054af3"],["/2021/07/04/Review/飛雪與劍/index.html","e7e61c11e737f822747cd92f187b6399"],["/2021/07/09/Review/地球防衛少年/index.html","2457a536d20a016025ff016c5d271f18"],["/2021/07/12/Review/Angel Beats!/index.html","4b9e6310941e84e0182d537838454331"],["/2021/07/13/Review/Clannad/index.html","7ba91c54835c06043eda651fb70cb067"],["/2021/07/15/Review/AIR/index.html","12412caeec42e44e40546a6b6fe79193"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","19c88eef4449bdda75c1f1ec6e734351"],["/2021/07/15/Review/螢火之森/index.html","8ab38924c63b44a27bf7c593ec0e36bb"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","b2de7483c4a98fe4c0485e73fcff616d"],["/2021/07/17/Review/奇蛋物語/index.html","1cf6db334d48edd684e86c5f6e89230f"],["/2021/07/18/Review/Vivy/index.html","da1296f01904f4b2df0003ddd3b989fe"],["/2021/07/18/Review/請妳消失吧/index.html","ad969fc4ce04550628f9799d606f62fe"],["/2021/07/19/Review/漣漪的夜晚/index.html","9cf2e6f0be0643bb6d6b1af208e45d33"],["/2021/07/20/Review/月色真美/index.html","3fa834d5715d8f3185eacef20967f10f"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","6146027b7d9aadeb674a68788320e6ea"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","1a847ebca3ddd8faf83dbc1e6950eded"],["/2021/07/22/Review/罪惡王冠/index.html","80b47010b8adc634d0e83678ee6408f3"],["/2021/07/23/Review/弱角友崎同學/index.html","f36375c6afc24638f3319ad1dbaa7740"],["/2021/07/23/Review/惡之教程/index.html","6ee955a09a635a89fb756e1317a7b43c"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","8fe0646bdf64f642a282aba2fd82c506"],["/2021/07/25/Review/魔王勇者/index.html","38e71e93a43f3fc24a11a396d4f2f3a3"],["/2021/07/27/Review/一年A班的怪物/index.html","369d603e8d3bb7fb3334de72856be33f"],["/2021/07/27/Review/奇巧計程車/index.html","4ccfbfdca1283dccef70f440f2499c45"],["/2021/07/27/Review/專情的碧池學妹/index.html","db163ddc10ade0d0773bdb1388a6345d"],["/2021/07/29/Review/只有我不存在的城市/index.html","c3d12387aac41bea3cb89caebf2b6c1d"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","6eabf19e112a006aef06d67bd37cf3e5"],["/2021/07/30/Review/可塑性記憶/index.html","0a79f3f9e3aa1e9a4258c978491499fc"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","e3f5ac7add0b72aebd7dbf9b28893d1a"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","c81bee4fba9a893f4a94375e32dbac48"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","811ba32708289217badc666c4dca0ad5"],["/2021/08/25/Review/清戀/index.html","415b08587c129065bf3663240685d8d6"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","91b0fae21093a64d64e9caf22ba75523"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","ecbd3fe7aa7a5c7c88bb94c87ffae26d"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","1c1499ffa638e2f33be3b33810b62a81"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","5240df860b8fd58e4274094027d0bb91"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","8289818f90093a6b10c2de3fa3716a3d"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","bcbae7b236adef14f69fa3162552a84a"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","8d842ae419ab6fadca3cb07358dd094c"],["/2021/10/16/Review/龍與雀斑公主/index.html","2f12a7ce3488f5d5b68e3507379ad1f8"],["/2021/10/19/Review/孤狼不想開後宮/index.html","d4f6697efec87f781b82283f20a87814"],["/2021/11/13/Review/徹夜之歌/index.html","74b06df486f982b403613559f57ed8aa"],["/2021/11/24/Review/武煉巔峰/index.html","11977149dd6bed8683c7c78de5c12beb"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e705276e34ced938b86baabee6f7c3d7"],["/2022/01/28/Review/神醫凰后/index.html","394e6beecbe066a6e63269d687fbeeda"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","a305e5cacf4520893ac5e7f806f8d495"],["/2022/02/13/Review/夏日幽靈/index.html","0dbee73788222577f585556a13902257"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","0cd3df237745d3b6cea1a67d6bf8a194"],["/2022/02/26/Review/賽馬娘/index.html","72662c228bf3c9c60fd54e8d73281dba"],["/2022/02/27/Review/大欺詐師/index.html","93c96e47095ebe3deef4c27fbc222bc9"],["/2022/02/28/Review/前輩有夠煩/index.html","27ace0be6f84b3031186c998b24e15e3"],["/2022/02/28/Review/碧藍之海/index.html","c0bf3315806a390f44632562d5b73874"],["/2022/03/05/Review/落第騎士英雄譚/index.html","6fa0c0a0ecfe327929d3b870f01d9e1d"],["/2022/03/06/Review/Another/index.html","ece462c4370d1006e5935820cad7e674"],["/2022/03/06/Review/入間同學入魔了/index.html","abb293897b6f67e5a0410ad24d534995"],["/2022/03/18/Review/再見宣言/index.html","eb4a8447d14df4efe7ead0362e23ae5b"],["/2022/03/23/Review/生若冬花的妳/index.html","649719407fb5da0d5650a293f8147b3e"],["/2022/03/25/Review/天之弱/index.html","3ad6c5ea48f73f114ec8c4647be477e0"],["/2022/03/31/Review/滅了天道之後轉生/index.html","13f12954f43f75525eebc149860c3ccc"],["/2022/04/30/Review/泡泡/index.html","2df791a817ec5983376608c9c5039bd7"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","50afdd8f4df0ef6aa12528d64d0802bb"],["/2022/06/13/Review/偵探已經，死了/index.html","f8e0b6c4138b5525a1ca850bc2d4f8e6"],["/2022/06/14/Review/黑色子彈/index.html","23fa78db2d8023950c3ad121524aeff1"],["/2022/06/15/Review/黑白來看守所/index.html","48f792145a38654e39d9b9cf55a9889b"],["/2022/06/16/Review/虛構推理/index.html","00a0db1852a67e197a9530047d943218"],["/2022/06/17/Review/戀愛與謊言/index.html","1b243b9e7227d7ba56224bd6ca06bccd"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d5926492a4773a9759337bb5276a19c9"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","70973edd137b3f8ce7e5db17cbe9d444"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","41bb1dbdfba5a117e9796c0b009206a6"],["/2022/07/03/Review/Hello World/index.html","560930f99f926ca42f4cb07c196cfc85"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","481cdf6553a8582dd23d8ae22de27118"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","a5ea6a810a3bbab9d68db646fbaafaf1"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","63bce78bde8930fd85cb470c5fce2299"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","137d5bc381d7420839c93048a5dbca31"],["/2022/07/16/Japanese/動詞分類/index.html","dc7482f6dcb56fa8e7aae9e1055317ff"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","4e3211447773e138d177c36df93e692b"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","5ff6c13154017a7de081cf286f99a590"],["/2022/07/17/Japanese/音便/index.html","2bc72c1845b1b07b56cd71a5a95e794d"],["/2022/07/18/Japanese/動詞 時態變化/index.html","8e92a14f25c78b4caf3a70586f181f62"],["/2022/07/19/Japanese/助詞用法整理1/index.html","fa94ee8668e1f97fdb9907ff3fa527bb"],["/2022/07/26/Japanese/助詞用法整理2/index.html","aa71dc11b0b59ccfc9cbb9abc6389436"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","91b29dd760ab0985378c4ad5a8aa6ae0"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","bc0ad7e6c700cf47abd184093aacbcb7"],["/2022/07/30/Japanese/疑問詞/index.html","43a2987bf113ea7a414c7bbcd50ea351"],["/2022/07/31/Japanese/助詞用法整理3/index.html","c487fb2147ef89f1d24d853f60943897"],["/2022/08/02/Japanese/副詞整理/index.html","ddc86f6997971af5d99458ed383bca97"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","1977073411ce7d37afec1b7a0d990793"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","2b503c89bfeda99b1d8132352346c74a"],["/2022/11/22/Review/組長女兒與保姆/index.html","666647ab7e5c869f177e28723483b57b"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","be252743cf4cfd2efe2d7fef86fab54f"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","7429170e6a66fafff2bb52ed57a40e2b"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","188f8b483f23455d479105ba052cdea8"],["/404.html","cf05cba02bb2a5dc69da9b62dd287fad"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f5240338f9c4870d71b9f6f90511ceb8"],["/archives/2019/11/index.html","8c3ee9b7cf1a5cc1e1c4a8019e8c48dd"],["/archives/2019/12/index.html","6ba5475ada233a917d3609ecea940bff"],["/archives/2019/index.html","b93f21e100eefd0116f80d3b2faefa99"],["/archives/2020/01/index.html","aaf6c1143e187a2a3396e417caa8e54c"],["/archives/2020/02/index.html","c27b004dc51cf2ef7aecc27fa5ec6920"],["/archives/2020/03/index.html","8937ed89bfa08774a466993acc1f332a"],["/archives/2020/04/index.html","4b86198d7981784b5301317b68b49478"],["/archives/2020/05/index.html","e73bd693cd31fae8dde71dfeb36e0b38"],["/archives/2020/07/index.html","4d138cc968693a5531dd85e04d9340f8"],["/archives/2020/08/index.html","3f3a689ea53a2ac616a1debc628b517a"],["/archives/2020/09/index.html","463ab57e1bbe29719cb092f0f33f01bf"],["/archives/2020/10/index.html","a6ce44e974e7a538122406f7d70964af"],["/archives/2020/11/index.html","088ed0d81f50fc69dc44dface41a27af"],["/archives/2020/12/index.html","a69210876975daf2c871a65b3a0b07dd"],["/archives/2020/index.html","27aa6d36654ca70e3fcdd3bb45b6cf02"],["/archives/2020/page/2/index.html","0955f854b6ce2033ca067e177f6880fd"],["/archives/2020/page/3/index.html","da73d31c4dd8f66edafacfb13f8652fe"],["/archives/2021/04/index.html","e8d24664d5440ca03853f32a23bf3c5b"],["/archives/2021/05/index.html","459d7a9bea6ffb29382b0cc0271b1f9f"],["/archives/2021/06/index.html","211203373f04084bae017261e563d0bc"],["/archives/2021/06/page/2/index.html","56152e2420c114bb0cb456fbfe15b7f6"],["/archives/2021/07/index.html","9777995517c774afde6f1b856d360a2a"],["/archives/2021/07/page/2/index.html","c8e80e7061cdc449385d346a5619e28a"],["/archives/2021/07/page/3/index.html","f8bb75e07ed40910f49423e2030423df"],["/archives/2021/08/index.html","00a2c142b0a43dcb8a6c0ef204e1c4af"],["/archives/2021/09/index.html","d26c6eac604bb03e8a8b18b7f74f560a"],["/archives/2021/10/index.html","23e21aad238001b601abcf0dd72ef54d"],["/archives/2021/11/index.html","817a77b0d39f59c6fe6decfa817f9129"],["/archives/2021/12/index.html","c6da27965be0b28a73f6a89eba477e09"],["/archives/2021/index.html","05fd5020bb34d934cba2a9965c2534eb"],["/archives/2021/page/2/index.html","39d58efde730ca06d605ff16c3247460"],["/archives/2021/page/3/index.html","ad9d0ecce250204f44b5abc41fdee2ac"],["/archives/2021/page/4/index.html","4e001bf84a156a6595bcc4965725898d"],["/archives/2021/page/5/index.html","606ebf48cb5d5a3ea3263d98a3286368"],["/archives/2021/page/6/index.html","13bae3166d51004dcc1371d3297c29b4"],["/archives/2021/page/7/index.html","5e1e7690ab5cdfe18602cd9adfced7fc"],["/archives/2022/01/index.html","f7093a51d57bd7468325b9660bfd45f7"],["/archives/2022/02/index.html","8787799cedaf92347cec86b162db4128"],["/archives/2022/03/index.html","11bf156c9f7f76076591986f856d0897"],["/archives/2022/04/index.html","0bd86a0c6157cb0b41ee75bb8ff11168"],["/archives/2022/05/index.html","f52ea75937accb71a262db1ea1c3e550"],["/archives/2022/06/index.html","2c842303bc3b5d82a4a1ac8b21f46c8a"],["/archives/2022/07/index.html","9eb04126303a058b507eaf44b055e6ea"],["/archives/2022/07/page/2/index.html","880102b98fe334a570e2637c64052250"],["/archives/2022/08/index.html","3990a78fdfa39a3aa38af07ba9974ec9"],["/archives/2022/11/index.html","959bc734fffa9586b8eb69c3c7775eaa"],["/archives/2022/12/index.html","f099df55808cb8792b9dc54f244a88a5"],["/archives/2022/index.html","726652522e646abd862f966fdb6e42c6"],["/archives/2022/page/2/index.html","964083d814e225969d4f63bdbb176a51"],["/archives/2022/page/3/index.html","3bb2c27fda711fadf1c9735c746a2620"],["/archives/2022/page/4/index.html","50e608dc26ff56c4f4b62569ae56e1ec"],["/archives/2022/page/5/index.html","ef11ea74bff54c6bf174a979f2a8ab41"],["/archives/index.html","c1c3d1e734fd9688a8eeca89aec1ef50"],["/archives/page/10/index.html","e48f144ded2480a97a3ad0249679edc3"],["/archives/page/11/index.html","9359d3126661ebedaefd51d5ee4dafdc"],["/archives/page/12/index.html","4d49106113c0513686764ba596cd0f71"],["/archives/page/13/index.html","23c3ff8fa4be2c03d36af73b5d3bb700"],["/archives/page/14/index.html","7180a7591ddb840fa799e4abc5295c70"],["/archives/page/15/index.html","67326089f18a9b22cf867aed0e029e88"],["/archives/page/2/index.html","d8913bda72a3ebb9efebd87c2f3a8109"],["/archives/page/3/index.html","00660cf8345edcec9fb93ccf5a9bbd8e"],["/archives/page/4/index.html","bbb6d0cca73b3c08f8535050b7f1e4c0"],["/archives/page/5/index.html","fa901aeb4f9fd8077b1b37b166326484"],["/archives/page/6/index.html","4fb91baaf393a7147c6d7c7c2d6e35c0"],["/archives/page/7/index.html","122e29578243d800915b2f178738eddd"],["/archives/page/8/index.html","3c3170e8354546235c302b200b1fdab4"],["/archives/page/9/index.html","022a0878eeed22ae09c776a3b0d76123"],["/categories/Programming/index.html","0448f6766891d3fd556d5c9ddf9887e5"],["/categories/Review/index.html","5342322041c2c24f6c9c9384423ac619"],["/categories/Review/page/10/index.html","df71546179f6abd8e05c718793769ccf"],["/categories/Review/page/11/index.html","c691fd367dcd31f0a0fd42603652621c"],["/categories/Review/page/12/index.html","880b793e79f07f60892aa6d15f2801de"],["/categories/Review/page/13/index.html","8421b9ae9916e5eb2bbb4ad3ef2c2a02"],["/categories/Review/page/2/index.html","843d9665684fd2c79245833f76d36e96"],["/categories/Review/page/3/index.html","ffc2145880c974e60f092010ac4a5817"],["/categories/Review/page/4/index.html","09d908ae0de7566f28a47b0835a49f97"],["/categories/Review/page/5/index.html","b288ef9685569232ec56e768cc33d227"],["/categories/Review/page/6/index.html","0a01da8f84bf9f7d3bc0085f13f2a1a3"],["/categories/Review/page/7/index.html","4b004bc94cac709c5c82e4d1fb43cf03"],["/categories/Review/page/8/index.html","f42b412d7875a17d211efcf0edc3e1aa"],["/categories/Review/page/9/index.html","0d83c568ecc4e522372f1d0e2b976877"],["/categories/index.html","bb00fd1ee0b61fca06bf2b7d3021c296"],["/categories/日本語/index.html","8d8361adb00ff10eeed8cf8f8f950cc4"],["/categories/日本語/page/2/index.html","749d452854ec881c4a9aa65a051bf96d"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","82ecfa46bfbe7e10a53b0d5c38c057af"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","3edd5f4bf4ba13863d5e68d70cdf5442"],["/page/10/index.html","2cf23a879bfccec4d98a3131cc805976"],["/page/11/index.html","8dd34ab97294126b7241bf124b384fe6"],["/page/12/index.html","62f5e7139623baae77549d9d017f2305"],["/page/13/index.html","803204b2aba1a714e3bb3a72e98d969c"],["/page/14/index.html","633bd4cb0256627e55c4adacf5b13b77"],["/page/15/index.html","00c39824b9059b79c816bb3db3cfe69b"],["/page/2/index.html","186d37556384fa11f0ce5a1b8cefc06c"],["/page/3/index.html","e0d8ae4ec67c9883fc13960767a7fe9f"],["/page/4/index.html","0a9056ac81d6e0e136eee8d915b82ef3"],["/page/5/index.html","3ce31b772e6d458b25e3bc8a35397a0e"],["/page/6/index.html","5016d148f1604a71d744631279fa1caa"],["/page/7/index.html","d2110a5a5a2c09561ee9ad77551ae41b"],["/page/8/index.html","7b33758ceb9d7951c816387656383b79"],["/page/9/index.html","b58b8fa91064bca6cb8f7b039c088751"],["/sw-register.js","b4042902b76bdb23e174ed32704b3315"],["/tags/10分作品/index.html","056dead5dc26d38cf42b53bb69bb0238"],["/tags/3分作品/index.html","8cbba93d68d0ea04ea0530db18e15cd0"],["/tags/4分作品/index.html","aef1d6635805231fee300d22b490767a"],["/tags/5分作品/index.html","d8828056983316f5fc49e3acbc674152"],["/tags/6分作品/index.html","0ad04bdaf815a690c8f0c6a2ffb78173"],["/tags/6分作品/page/2/index.html","b5b0367f21c187ed3eccab3665e0d61d"],["/tags/6分作品/page/3/index.html","afbe105fe3c7ae98ce8cc6720810e0b4"],["/tags/7分作品/index.html","735e1e3e9083f0b64f07d2baaeac16b0"],["/tags/7分作品/page/2/index.html","b03a050b7650415f7f83b96a75702318"],["/tags/7分作品/page/3/index.html","d816ba67b9e87bd3b7a62d0e90363f1c"],["/tags/7分作品/page/4/index.html","a0517664a2d748c19f3b25d3acbb3e16"],["/tags/8分作品/index.html","9f422b1ca8333b43cbe8915fc0756cdc"],["/tags/8分作品/page/2/index.html","1d88422efad6bdceca80b9d603ba6249"],["/tags/8分作品/page/3/index.html","f1bc3ef1089b27de43a1d6879ef35dea"],["/tags/8分作品/page/4/index.html","560b4e868aca142a6c32141a1087f60f"],["/tags/8分作品/page/5/index.html","d5446477b6655f311b0b8473a2ae3b39"],["/tags/9分作品/index.html","5e6717138ef9439d8890ec74803c6021"],["/tags/N5難度/index.html","323cc2770a2e21de87bfce210b766691"],["/tags/N5難度/page/2/index.html","7e6d015998628aedce2f2da775686b63"],["/tags/index.html","b8b5a579e1db59ead9e42d4192444adb"],["/tags/アボガド６/index.html","9036d42c1a794e53a2805017e927acce"],["/tags/三秋縋/index.html","d09ad65a64f8828b000993d49197c728"],["/tags/中國武俠/index.html","fc004af9a16159120c915c39d32196a2"],["/tags/中國言情/index.html","785ed9e5316bf6be9e82e51b9f84c9db"],["/tags/二宮敦人/index.html","dc7372c2abedd1ea92c55d5d6419d385"],["/tags/人性/index.html","f350ebad5a8fa4bb33184c01d8f1c2c6"],["/tags/人際/index.html","21806efe4037347303bdda3a05e3ac0f"],["/tags/住野夜/index.html","d66a15ccfe1a294ad8541e8dcb51e347"],["/tags/佐野徹夜/index.html","794a8dddda5cb196498de357bad1d705"],["/tags/努力/index.html","dcd66bf34a25b81fc379fdaf44c95b70"],["/tags/動畫/index.html","0df5fe1a31efd80d297b8079ee5365d4"],["/tags/動畫/page/2/index.html","86d821b0393ccfabbcb97c6a77b2bfdd"],["/tags/動畫/page/3/index.html","48899b6e12f3a730fa9550d6861d3edd"],["/tags/動畫/page/4/index.html","1df3b13768d8bb716c72761db26e4e4c"],["/tags/原諒/index.html","cf2944418245f6ff18436a0dde07d7a8"],["/tags/反烏托邦/index.html","7b436053eef664b95631603e44aa071e"],["/tags/啞鳴/index.html","baeff9f12efeddc86627335a4aa0c4b4"],["/tags/喜劇/index.html","56057982cdf19adcaa09b06cada03601"],["/tags/夢想/index.html","30eefad0bc4a2e3b1d165e473d7f2250"],["/tags/天澤夏月/index.html","2be570ce11a4c4e64a3d8749d59b104b"],["/tags/學習/index.html","100d29555d9361ee5d7bfb1ccbf21831"],["/tags/學習/page/2/index.html","b44ffccae432d21d1123bd800df00f40"],["/tags/宮崎駿/index.html","e760f6e9c2b8ea99df5700e00ee8c7b5"],["/tags/小說/index.html","e77849f0e7f93042bcadea2fda3b4a37"],["/tags/小說/page/2/index.html","009b880fc3dca35528d98e180d87dfbe"],["/tags/小說/page/3/index.html","ed81f59ab3babe9e75d2221d1f026c0a"],["/tags/小說/page/4/index.html","02ae34b657c84df099c7e4acace6b1d0"],["/tags/小說/page/5/index.html","125b70c0f7359b5887a073bf10ee9e6f"],["/tags/小說/page/6/index.html","fc038a8ad6f03d063ce8bb6cc03f76ce"],["/tags/小說/page/7/index.html","2ae61719ffe8a7024ab3e69b3e2e5310"],["/tags/平淡生活/index.html","a962d9314bbcd390388188a95a74fb27"],["/tags/幸福/index.html","31c12a7f7afa0c2566273f9f48e2874b"],["/tags/志茂文彥/index.html","9de3255f38d1c4b3d520524822e58848"],["/tags/愛情/index.html","c0b675e874f46e97c3cce06d488d30eb"],["/tags/愛情/page/2/index.html","0bdc358eb276eb06ca4be1d3be48cb53"],["/tags/愛情/page/3/index.html","9118e7558a99f374facd18a38d3c87bb"],["/tags/感動/index.html","878863ea5cdbca9a7ee777762483ca1f"],["/tags/懸疑/index.html","35908d513c411dc0862bf106b78775d6"],["/tags/懸疑科幻/index.html","50a18a67f8577232658759cddfb7da56"],["/tags/戀愛/index.html","276db779a4d08d5f05f34ce5e7b644d3"],["/tags/成長/index.html","8ad5e17025f4a9de19da5fd0ed04845f"],["/tags/成長/page/2/index.html","d83a5c645a3ed0b760bef6583b5146ef"],["/tags/戰爭/index.html","1fae81b8f4f4ba67ecbda73f024f00a6"],["/tags/推理/index.html","1f81b6df0de35ad7781c39204a233058"],["/tags/搞笑/index.html","c2e51d81e0e372e6c3fa46a7d5675552"],["/tags/救贖/index.html","61fdd82042ad9fe211978f17affe2418"],["/tags/斜線堂有紀/index.html","1ad818a34800518e95039beb8efb0eec"],["/tags/日常/index.html","70c2143ed11fd3fd75c2d57868ef773b"],["/tags/末日/index.html","0e4ec5da5169b19296ef5a9df6494bc1"],["/tags/校園/index.html","4645719f0a4a06177d6d478c43da86be"],["/tags/武俠/index.html","b826134d30fe19383e17708f71f84eca"],["/tags/武俠言情/index.html","408d11a680d5a5f94444b5af23ad167a"],["/tags/漫畫/index.html","30a71e4135e01afa0fdbe200ed6a2304"],["/tags/生命/index.html","b1816dda3b3828cd0d34f8559fae2c1b"],["/tags/生命/page/2/index.html","e001aa9e8593bd69f91b94ea5296fff9"],["/tags/短篇/index.html","094dfe8e79cc4f3c3c5f77b1df849c8c"],["/tags/社會/index.html","e856d74a1fca75657c79a3c2fe02396d"],["/tags/科幻/index.html","6365718d8b812bc3b99c5fe7d79805a7"],["/tags/童話/index.html","cd86b1bc74d7ad088ad65343b478700f"],["/tags/競爭/index.html","fddfd37bf1b797d091ce05c4399badbc"],["/tags/自我/index.html","6929a2b3f8de9964d8eb413382bd6d6c"],["/tags/自我認知/index.html","d623a10f9ee4c69adae8e7bc82dc7398"],["/tags/葦舟ナツ/index.html","9835887f0f2f052dd6ebbd8dbe4873c0"],["/tags/藤萬留/index.html","42ef42afde069cf5dd9ef062396a7468"],["/tags/親情/index.html","839fd899585ac6e710c6b9b135b2e256"],["/tags/雜項/index.html","a39807af056b144d61965c0f02e65c3c"],["/tags/電影/index.html","946c6cde70e586bba25f60bbdfb4f101"],["/tags/電影/page/2/index.html","f4e0efac21fa16592191e324fd993abf"],["/tags/霸凌/index.html","30691a6ca4bd28e1291e916fe9c1a6d0"],["/tags/青春/index.html","724185a283bb3d33a77049b400b18329"]];
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
