/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","ec1b71e100b7c8b8232c428ea35fe512"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","ec2ddba155cca8bcd82ce467e2a6ffe1"],["/2019/12/25/Review/無法計算的青春/index.html","5930aa0949cdb4d20acf069063d1f6d6"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","1d250924fbaeba4a780594928737b558"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","1b5b73b001385e3f02baca33acc236e3"],["/2020/01/19/Review/下雨天，不上學/index.html","009a2f6324bf315b65772de213e403b6"],["/2020/01/26/Review/三日間的幸福/index.html","680328a43de051e971b4810cdec4140c"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","4d6675b68d9e0f54083745800b5e08ff"],["/2020/02/09/Review/青春期超感應/index.html","a238f888dfa0efe47815d2542ee0b861"],["/2020/02/15/Review/又做了，相同的夢/index.html","f11a37b52974f320383ef6389394c126"],["/2020/02/22/Review/回憶當鋪/index.html","bb4dd211cb2ab2d2e3fe4fe9b379025c"],["/2020/03/22/Review/不適合自殺的季節/index.html","c4c9b1a131ef1efafa87c594dbefc0f2"],["/2020/04/26/Review/我們都無法成為大人/index.html","06bef16294c5e16ac5c042c49b79a9f0"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","c430da1b4d64fc00eb83637e9d3ad3d6"],["/2020/05/17/Review/人間失格/index.html","6573025fa8fa3e435b9df1883a77830e"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","9f7e4e8159f37ed40b661f73d6171834"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","a12c7c5197cda4bd6648d20dd552f1af"],["/2020/08/01/Review/銀河鐵道之夜/index.html","c6b84e86a1ce1b14da92cf463908a5d4"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","9ce4f34c6a83bcac236a4e7b949d2955"],["/2020/08/16/Review/15歲的恐怖分子/index.html","1129e9bec77cf469c3a1aaa1bc758082"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","068ac3f4b20ca2398f8849d3c58eda7e"],["/2020/09/13/Review/羅生門/index.html","13b57fbb62cae690139a6d321c25e66b"],["/2020/09/20/Review/闇夜的怪物/index.html","be15923678cb4d0826acfcf35b0b1f51"],["/2020/09/27/Review/14歲，明日的課表/index.html","d6628abb0c04807c63e1c1fe141efff4"],["/2020/10/04/Review/致十年後的你/index.html","c3cba4b431296c87d874af7675a53697"],["/2020/11/08/Review/滅絕之園/index.html","08dbb24fa8a25cb59b331167c0e3a3b2"],["/2020/11/15/Review/將愛拒於門外/index.html","75b528b01e6da40253642fcdb1f6b6f6"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","7a869ab2f9ceb72ef4fce1d8fa6dbea5"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","e5643520cf8bf0fe670618fb3d2356ec"],["/2021/04/22/Review/道印/index.html","7eb28532070d39e51e8d187ff6b07bb0"],["/2021/05/03/Review/戀入膏肓/index.html","73d73bb3a80990bf7dfb21cdb6666cf3"],["/2021/05/10/Review/Dice/index.html","e036c6b5ceabd671e1ec335be10ded57"],["/2021/05/15/Review/魔女之旅/index.html","9e65ddc6c1de0cdff103b1383a64dd21"],["/2021/05/28/Review/戀愛寄生蟲/index.html","ac2589c9fc08265195e9894614265055"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","1ec04c34f094a5c1bc189cd49530ae6a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","5c330eb41cd68fec0acf350f2ecea694"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","cc3fcb037126ffe18310721ce6c2f339"],["/2021/06/05/Review/流浪的月/index.html","dc71e7b2ab9daf77709e116d5f6f178a"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","2cbf6adb3649caff53f11c5a63a2b63c"],["/2021/06/13/Review/第一人稱單數/index.html","64e357ebd9568d23bf81aed7fce62e9c"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","15e0431a59d002d63795e96a0613be2c"],["/2021/06/16/Review/願你幸福/index.html","2949b3758648a32844ea8a97970d0bc2"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","ef9b29e07fc003efa58f7d854986f07f"],["/2021/06/21/Review/神隱少女/index.html","5a20bb086daba1d0b6d95c02ab6d69c9"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","f5f9ed51e40ed1c84c79a244de42cc85"],["/2021/06/23/Review/天空之城/index.html","91711c1dea61fb64c16de6fbf22a7db8"],["/2021/06/24/Review/魔女宅急便/index.html","d9cc0254cd3aa3406aa9f67919b2b852"],["/2021/06/25/Review/借物少女艾利緹/index.html","d71356e3b0e5e767409c935214fa8cb8"],["/2021/06/26/Review/魔法公主/index.html","5023a76943665ca69ae495b641e9a683"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","79a4801b3acc4341d9f7d0c56bd8b688"],["/2021/07/04/Review/飛雪與劍/index.html","44547a4b696d9d179ad82b5567b0caed"],["/2021/07/09/Review/地球防衛少年/index.html","7beb5a14339c7996d031d78b05ba6229"],["/2021/07/12/Review/Angel Beats!/index.html","fc8cf5cf995d192f4cf82e27c8ff4a5c"],["/2021/07/13/Review/Clannad/index.html","b893c0a5330915af8ee40da0f4649b0d"],["/2021/07/15/Review/AIR/index.html","ada6df622cf2fce3c586f60e8554fa73"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","03be7151b555455dd6458e94e9b6e815"],["/2021/07/15/Review/螢火之森/index.html","6c78c8678aa5ece60b7c2bf98095d781"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","1571574e15619dfb06bda40ce688f41d"],["/2021/07/17/Review/奇蛋物語/index.html","dacdba148005255072a55ed32faa44c4"],["/2021/07/18/Review/Vivy/index.html","26e955e65a0ab7e073a8255a28082d6b"],["/2021/07/18/Review/請妳消失吧/index.html","91ccaa3c40d5e7587c4c28d3130ae691"],["/2021/07/19/Review/漣漪的夜晚/index.html","997086092343bb7f0bea7f78b7c40c37"],["/2021/07/20/Review/月色真美/index.html","feeab10dcf4d0b880fd3d66747c5679c"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","2336b4a8b4d23a21be705861eaae7538"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","c8bb6f4df56d2431713c946b15318882"],["/2021/07/22/Review/罪惡王冠/index.html","f8a0e9eb272130f3b5e4a0e3105f34fe"],["/2021/07/23/Review/弱角友崎同學/index.html","db1b2798f4b6c68c2c01a6a75b276897"],["/2021/07/23/Review/惡之教程/index.html","bc56f0934e2fa285cfd21da267936c37"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","0775ec5abd2cbd2935f10dbf8e0f323b"],["/2021/07/25/Review/魔王勇者/index.html","8926fc40dcd5d1d58f242239a13dc113"],["/2021/07/27/Review/一年A班的怪物/index.html","e21eaa4281ce1f4b2492ea3a7794dda2"],["/2021/07/27/Review/奇巧計程車/index.html","e25c336c7fecc9bd7b03d784b7537b4c"],["/2021/07/27/Review/專情的碧池學妹/index.html","29eb88385aa53a004590ae0d3ab2a592"],["/2021/07/29/Review/只有我不存在的城市/index.html","811d0f3092c86c87960382c09d266983"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","8ce3649de00ac2a7df9b1172e0c69f90"],["/2021/07/30/Review/可塑性記憶/index.html","ced066b5c9c2425391ced0c06790e308"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","3db881e79578ba48e44c58f1edd77417"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","25bfb924c6811c1a5622a4b4baf1d24c"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","36c90f30052a5928a655f26418bebc43"],["/2021/08/25/Review/清戀/index.html","131f5ad703b7f1a612f38db7996b521e"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","289f6f93534602311ea285c18476daef"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","cf8fe4c5c15d08bb6e3c44e4a79e0cf6"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","3ecffab76decff1e1c4895c4f39f6d8f"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","1f89e3b4b52a7fad4f1bcefbaab51f63"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","ce8f2e5b5fba60fec0072921b4f63d13"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","2eb777f4f11c129311514335e23a12c2"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a366231269b8e949848f1985fd5789f0"],["/2021/10/16/Review/龍與雀斑公主/index.html","5e85e900e675da3cd5d18d5f78d83eb8"],["/2021/10/19/Review/孤狼不想開後宮/index.html","97abf6953ce2e9c362abceb19eeff73b"],["/2021/11/13/Review/徹夜之歌/index.html","17e1d2c3ed3fe42bd72d99be0c9c0fae"],["/2021/11/24/Review/武煉巔峰/index.html","5836a9ee017c489243cd9b415e6853f2"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","be13daa8da799008492611dfa1ec757f"],["/2022/01/28/Review/神醫凰后/index.html","3e51aa8f5685c37a64b67495cd4a4d38"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","febbf335aeae00f3e96fd14df6c4ddee"],["/2022/02/13/Review/夏日幽靈/index.html","5c638470ac34dac4279a4b996419e7c2"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","9756b6cfdfac7306530605fb51f4c276"],["/2022/02/26/Review/賽馬娘/index.html","b5ac3045c109fa9788db6028f688f615"],["/2022/02/27/Review/大欺詐師/index.html","988e0ecd587003f5580ca62a5815697a"],["/2022/02/28/Review/前輩有夠煩/index.html","02ebc63916f725e8897be6a77b6a8a52"],["/2022/02/28/Review/碧藍之海/index.html","06d84e11e81885ef8ab6751519604fe8"],["/2022/03/05/Review/落第騎士英雄譚/index.html","23063382e3ea05c1f75bf60d7ca037b6"],["/2022/03/06/Review/Another/index.html","f0349f878b6856ba9a5fd32ca6256314"],["/2022/03/06/Review/入間同學入魔了/index.html","ad0246d88fbf3b7674cefed2c5cc0d0b"],["/2022/03/18/Review/再見宣言/index.html","b4c716870ba2b3e9e43b8f80b68a72ef"],["/2022/03/23/Review/生若冬花的妳/index.html","179c19fab8b6ae0f1a682372546023a0"],["/2022/03/25/Review/天之弱/index.html","33e58035005ab12b75297f6849f38520"],["/2022/03/31/Review/滅了天道之後轉生/index.html","8921fe7d80f7c8443186d695ae2dc267"],["/2022/04/30/Review/泡泡/index.html","8735299baa7c173e740a919ecf23255b"],["/2022/05/04/Programming/Dynamic Programming/index.html","70716de85bce839615b15cb25eb7aee8"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","3182e28c7afe057fcffbfdd41dbe1d12"],["/2022/06/13/Review/偵探已經，死了/index.html","1296866e6ca00b2fdc1c3931a6eac2fa"],["/2022/06/14/Review/黑色子彈/index.html","9e23377203411719d820b6a79038a3b5"],["/2022/06/15/Review/黑白來看守所/index.html","74d961ceadbba9952e0b9b476ed2e55e"],["/2022/06/16/Review/虛構推理/index.html","fc9e36c101732e3a20d44aaac0f9bc3e"],["/2022/06/17/Review/戀愛與謊言/index.html","bb62f25b0458c23eedafbeaef76b9e22"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","65234b838d93772a5d8372d14ebbeb00"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","4356719bb06ecf4de9dd98c162d36b6a"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","441d2f1abdc18e5798ce445c9375c9cc"],["/2022/07/03/Review/Hello World/index.html","d5bf77226c22c73353ddc2b12a0c002d"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a98334a1e9731a337ac2ee1d078a9a69"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","62c0a2e02530af9b2b709a298d4d3f36"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","12b33be8b681de308e82625e7fdf68e3"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","3c22ef2b0d16b1559748e7c1d8ff0488"],["/2022/07/16/Japanese/動詞分類/index.html","33d5e8bc2e149c8c86a787a153ce6e8a"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","ff233b53510860b0afc96957d5414318"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e3e336e78f296efb7b73b462729de9fe"],["/2022/07/17/Japanese/音便/index.html","ed2f2db94e8a283d800b4e7d5f9c57d2"],["/2022/07/18/Japanese/動詞 時態變化/index.html","3918b86b6c89de3f08968ac2609978ba"],["/2022/07/19/Japanese/助詞用法整理1/index.html","1e5e3fed069df3906a5cbf1f0a80904a"],["/2022/07/26/Japanese/助詞用法整理2/index.html","540bd79c0f8a7db72fe87c7554f10807"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","a56375ce5bfe29b13d9b40c1fbf2884c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","055cb4b731f8bfdec944e82bc7d7edc0"],["/2022/07/30/Japanese/疑問詞/index.html","df18159e11b7ceda3d5fef7ad7c7e42e"],["/2022/07/31/Japanese/助詞用法整理3/index.html","ff49e8c516f82ca76db0330d09d2081f"],["/2022/08/02/Japanese/副詞整理/index.html","e6e0ef7deff61eaf4b38835fd256f4ff"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","7da53dd879772917e7ad5886ce90855c"],["/2022/11/04/Programming/Data Structure/index.html","e49e853e473f9b2c96a4bb56323af2c6"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","385fe40c9cf4422647e8537c49ba58c6"],["/2022/11/22/Review/組長女兒與保姆/index.html","d49db8dd44a653ab2c95ea91b421f0fa"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","06e380e19708fc292543cad3a03c628d"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","9d386a05842e304bd40b93a15abc514a"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","30be2ab0d6a3e6fc10ffda2a21bf97f3"],["/404.html","963652492366a8b03310ea18c8e8f662"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","fb8eb0b974c3d7af2616bbb5f395c837"],["/archives/2019/11/index.html","ab3d727a0425f520ea018a3cc0225be2"],["/archives/2019/12/index.html","5be9b7c67ae18230b44182bd2311b279"],["/archives/2019/index.html","6abdbb04f11b64e617701b214f764f43"],["/archives/2020/01/index.html","0907d8e9f7d395a8df33a4adc180e5a9"],["/archives/2020/02/index.html","4ed11a304279a277044ff077585477e2"],["/archives/2020/03/index.html","a6d4f10b2536aec597707eed079bc173"],["/archives/2020/04/index.html","ddce8327616dc004ac0eb53bc4a30866"],["/archives/2020/05/index.html","e3f37c15233172f661a3030c1cd4c7d2"],["/archives/2020/07/index.html","3a9575bdc8698a964c463daff02f46fc"],["/archives/2020/08/index.html","a28312a4e799783d0ee8298f30ccbc6b"],["/archives/2020/09/index.html","f210baec134b45fd422ded46979cc451"],["/archives/2020/10/index.html","d51d1df45fdaea98c7448d769055c497"],["/archives/2020/11/index.html","6827b64416e2409214ec9e6883a06422"],["/archives/2020/12/index.html","9e2463bdaf4203b74aa92f75efcfef20"],["/archives/2020/index.html","ef7a99553f6647233806b57b30fbcb6f"],["/archives/2020/page/2/index.html","ba7013bfd53b9045d5015d4e19f09ecf"],["/archives/2020/page/3/index.html","3c7e27e039eeced79ed073183ee06429"],["/archives/2021/04/index.html","fc894dd3139b2990d995c7527e78c747"],["/archives/2021/05/index.html","129bb3f13baa038bd8c7c20619eaf6e1"],["/archives/2021/06/index.html","75b085fd7c14a595e022415a4b272d7b"],["/archives/2021/06/page/2/index.html","997b7cacbc62eff405cf44eb1eda3a88"],["/archives/2021/07/index.html","1006aa52dbfd017cc484a45469a4759a"],["/archives/2021/07/page/2/index.html","084cf544c8cd092d329ad5a0c8af020f"],["/archives/2021/07/page/3/index.html","a65db248436f5cc09d6cc01981592e91"],["/archives/2021/08/index.html","de69c8d0aa439780dcdc3aacfad1aee9"],["/archives/2021/09/index.html","5777124f737e3dc6168ec11fb858598b"],["/archives/2021/10/index.html","2a25c82ee3c6ce45f8931d57a39c954e"],["/archives/2021/11/index.html","67948002f6ad88c0dfb7eb0712e04e22"],["/archives/2021/12/index.html","9e0ce4fa7a31e60bac6fa2568dddc310"],["/archives/2021/index.html","2c51acf611b5964284e24bc19b0665c6"],["/archives/2021/page/2/index.html","b784ec44ee3fb03bebb3afcd76fa8211"],["/archives/2021/page/3/index.html","703d3e179682108b499b30325ecdac01"],["/archives/2021/page/4/index.html","a31c1b31627b49a8cb2342422ddeca79"],["/archives/2021/page/5/index.html","d3e05fb1b6cdd1e97a84a711cde91020"],["/archives/2021/page/6/index.html","93817bc8b9b5d79c449747d743489eea"],["/archives/2021/page/7/index.html","595bb6c7fce4b587f7dfaa417775300b"],["/archives/2022/01/index.html","f3b9eb9d5e95dd6ae29b761ea0f6e9d9"],["/archives/2022/02/index.html","205d6248f6e0f047128d072f23fa772d"],["/archives/2022/03/index.html","dedfa68b354461ce5faf3ff9eb518602"],["/archives/2022/04/index.html","6eb5ace7678627b3ecb8c8e6cbf7f9c4"],["/archives/2022/05/index.html","c937acbb84c19ce90750cf7394325c7f"],["/archives/2022/06/index.html","f70059e2ccafb190d02743a70120d486"],["/archives/2022/07/index.html","117862f1b5663aa4d53eb3d2cb457977"],["/archives/2022/07/page/2/index.html","5b0db24efb52cb267c6b3b628afbbf00"],["/archives/2022/08/index.html","b91f304e321fdc319b79173a9bb8ed5e"],["/archives/2022/11/index.html","55566e05cdca5fa44ee72629694f885b"],["/archives/2022/12/index.html","cb2e6284f8bf442a0a8e6340c6137770"],["/archives/2022/index.html","0c4b12e467ae13a5111afb736afd95dd"],["/archives/2022/page/2/index.html","dd28e0fbec028811a78e4cd1c694b87c"],["/archives/2022/page/3/index.html","dc88aafb41391ca76aeedd6c127e0d2d"],["/archives/2022/page/4/index.html","63748e530a4750a7c74a77a7295be946"],["/archives/2022/page/5/index.html","6518d6de704eb6b89ff7f9dec68efa51"],["/archives/index.html","300edd57ad16fa042cc0b5bbea0cea27"],["/archives/page/10/index.html","51e6f879d272e4544e2cf07852776797"],["/archives/page/11/index.html","bbe06347c6ce7f3c75b7d7d8fe2d783f"],["/archives/page/12/index.html","09436a1e4d2bae97dbf7fdacee981375"],["/archives/page/13/index.html","a09c3321491da30f4c89bca52c622537"],["/archives/page/14/index.html","828ebe8ef7dcee2f214af0109c2d71f5"],["/archives/page/15/index.html","db4200ddba63c6f3fa2e8b8993bdf202"],["/archives/page/2/index.html","68c8be1271144f2dac91a536833ec800"],["/archives/page/3/index.html","83fc2a5b5452ecbb51efb6fa1ac01abc"],["/archives/page/4/index.html","777a43825f9f61cbd9b4dd02935f1108"],["/archives/page/5/index.html","6b1024587025716f600c914b44046309"],["/archives/page/6/index.html","45f69c0024f5551c996b60bab3c59d41"],["/archives/page/7/index.html","5046bba0cc52b86aa4ed87d05bffbe61"],["/archives/page/8/index.html","5f284e8058ada359e9dd2f9085fcd885"],["/archives/page/9/index.html","4a8e49dbf53ec5ca6d69185e9f1b4474"],["/categories/Programming/index.html","f9e5fe60e869afa75178aef547565b7d"],["/categories/Review/index.html","bf4c5b2e1bde6ce4347b0e51d1f4d042"],["/categories/Review/page/10/index.html","7ce8c4790648d555d0a6cb2d68e722e0"],["/categories/Review/page/11/index.html","7f929caefeea5f0d44ab27e7b93b4cd8"],["/categories/Review/page/12/index.html","3948d4250f15e30c88742b322f305d90"],["/categories/Review/page/13/index.html","0d3e036b0875da4aaa18e1f812b92838"],["/categories/Review/page/2/index.html","e555df937809186e109ace918dbf2e76"],["/categories/Review/page/3/index.html","649e5a9fa5d819f478abee3641660a77"],["/categories/Review/page/4/index.html","6d654130d30aeba72fe8e7f2c12994bb"],["/categories/Review/page/5/index.html","ee4f1467e55d655bb089e2e335a39f86"],["/categories/Review/page/6/index.html","ab2734cdf59f29793aea03161c2501cf"],["/categories/Review/page/7/index.html","de0d8f9d33f164c28ecfc42e6ab0a941"],["/categories/Review/page/8/index.html","a3d1dbd5d5a174e542eaec8cd410352e"],["/categories/Review/page/9/index.html","2706fc5da79e015a38faa64992a952cd"],["/categories/index.html","cfb09ce9564888a53e92340b8066ed69"],["/categories/日本語/index.html","bda252fc616639bf86d371e565fcf03b"],["/categories/日本語/page/2/index.html","687bfe6dcb23c910147a817df987b244"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","47311da881b62af8775f9b379870b070"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","d68afdbd33ca0d7c3aee02d8196ac0cf"],["/page/10/index.html","af56fd52981f44fcfc79415fd12bf22e"],["/page/11/index.html","ef18858a8cd119c207ad61ff746a0aef"],["/page/12/index.html","0db8fcbddb3371a143cb6376ae34714d"],["/page/13/index.html","d4c2f35f75b992e392b69833c290073c"],["/page/14/index.html","c70033aa4b3f346543119ef1700c7eb7"],["/page/15/index.html","eff3cb16804d4c31098d0cbc4cd7a23b"],["/page/2/index.html","b4ce2a875d3dc5d3ce61257790fceccf"],["/page/3/index.html","fc438d0832118ea2af203d880eca5e22"],["/page/4/index.html","9adc7b827925e9a7846c14875a9672a1"],["/page/5/index.html","c472c5d87d3b4477b1078a4b409c70da"],["/page/6/index.html","7bdfcc71868b517f8bcaaccfcfbc133d"],["/page/7/index.html","08d6a4948427bc4758456bbb9f2606db"],["/page/8/index.html","67093e84e28e8420ee2e99752409b4d3"],["/page/9/index.html","1338ebabe899440d482cf423eab2855a"],["/sw-register.js","82aed9763cacf0f5774eb5d49f656aeb"],["/tags/10分作品/index.html","18fa3cf2a22e3d61d65bfc9e5c310bcd"],["/tags/3分作品/index.html","e85be905259605e1152115d10d7ef2e9"],["/tags/4分作品/index.html","633b35e23c74533f6b2210fade233126"],["/tags/5分作品/index.html","31d4871c7ee1f7ba19dd1c8831a0fb36"],["/tags/6分作品/index.html","5f3e3bc1a6e1d3b4ece2ed14d37c997f"],["/tags/6分作品/page/2/index.html","3089087affc178193b20f0babb5df801"],["/tags/6分作品/page/3/index.html","09d1f73cd3742b943140fae6a46ff86a"],["/tags/7分作品/index.html","531545f3a3f2c4fe384648750021c037"],["/tags/7分作品/page/2/index.html","cf51a69b9530686cdefa8125b0e656f2"],["/tags/7分作品/page/3/index.html","348fd8c408f3811874c3d523a52806ac"],["/tags/7分作品/page/4/index.html","23bc04bcd3a04ff811f03426be9a1e02"],["/tags/8分作品/index.html","cec7524442fe52c35e6c05fa4e0c2397"],["/tags/8分作品/page/2/index.html","a2b6f045dab864b9361588be9c15ab99"],["/tags/8分作品/page/3/index.html","b8a7108bf185468093a07e3c6c05d6ba"],["/tags/8分作品/page/4/index.html","855d4b6426da75d1fef3026a0dfca4ca"],["/tags/8分作品/page/5/index.html","8fdf0e6255bff3e545ac675a24a516e0"],["/tags/9分作品/index.html","5522a7e69fe57540d37740541483222d"],["/tags/N5難度/index.html","d28c816e2dcd8b67961e757a29ab8395"],["/tags/N5難度/page/2/index.html","670c34acd4afaa3d35a2f3918d2cc51a"],["/tags/index.html","8915f39470143cf1da5b83a632b00c10"],["/tags/アボガド６/index.html","db186b7e3161c2c2a3c4151402d2e597"],["/tags/三秋縋/index.html","e15885e9b1746e6bdabaa32a9499bf55"],["/tags/中國武俠/index.html","3dbaf6eaadbeae550a2958fe5300242a"],["/tags/中國言情/index.html","87b22033989ffd958c6a14ada63cab4a"],["/tags/二宮敦人/index.html","b052f3b5bb17cd083e4c579e2a0cf04e"],["/tags/人性/index.html","c24881079c05c969be10f22529a6a257"],["/tags/人際/index.html","7831538fea72de33523cae2c5d1bb184"],["/tags/住野夜/index.html","a88f03564d79ffb1c4f5450f45a17c35"],["/tags/佐野徹夜/index.html","1e85291e1cb15aa4e262b2feff9fa259"],["/tags/努力/index.html","b0a2e09411599149cbbd30f0caa3a6c7"],["/tags/動畫/index.html","45a659b59b2860178f496a0b6aca304b"],["/tags/動畫/page/2/index.html","79edac43e59a71072956d5d070d9039c"],["/tags/動畫/page/3/index.html","5227f3533e55d3b207517b0f5c88206f"],["/tags/動畫/page/4/index.html","1108fa0337d8d385c133fccf48ad7f2b"],["/tags/原諒/index.html","efe0faa8ee0cc4789b68362a249dfccc"],["/tags/反烏托邦/index.html","52df27320a5c79cbbc3e210ada4c0089"],["/tags/啞鳴/index.html","23888a1d59e375fa4e1be82550943e63"],["/tags/喜劇/index.html","c5dff3b3d027c4f0e4f46f09c5ba6013"],["/tags/夢想/index.html","c2652a55c88825ce56363682cb58a36c"],["/tags/天澤夏月/index.html","087f097f6bde2e6df6006664caa126fb"],["/tags/學習/index.html","833684d9f9c65c5141002ddf8f910aec"],["/tags/學習/page/2/index.html","53140333ee9db6245bf1342b0d24a3cb"],["/tags/宮崎駿/index.html","d6d1263911385f84ab9727871300b724"],["/tags/小說/index.html","83896a2e368a0ea5f06109250fba8b62"],["/tags/小說/page/2/index.html","83694baca27634aacd02dc0da25584e2"],["/tags/小說/page/3/index.html","56121bdcc9fd6c89aa4cf6991d4d99cf"],["/tags/小說/page/4/index.html","cc59788b7a391834989a9a193af3ea70"],["/tags/小說/page/5/index.html","a94c38411c0a6b8ef97a4578f90c4ca0"],["/tags/小說/page/6/index.html","b5bb9f1e2f28f6dd5192f43ffb12005d"],["/tags/小說/page/7/index.html","142d20ddefb77963fe716353fce91881"],["/tags/平淡生活/index.html","54343c543b56042c10d76b4d0cfc7ec8"],["/tags/幸福/index.html","028ae71de3392d4c7c2949b653571833"],["/tags/志茂文彥/index.html","dbd48fc64f85729aeecf9b7c1abeea19"],["/tags/愛情/index.html","f3dc33d2a470a400ccc335ddd72c4766"],["/tags/愛情/page/2/index.html","0ac6110f342f7e2aa769f11b8a977a15"],["/tags/愛情/page/3/index.html","89f009324383cc05937a51d66ddbd209"],["/tags/感動/index.html","597ddea56161e95f6e6d6277b02b8ed7"],["/tags/懸疑/index.html","1ab0b020abf064dd45965454fd4817e8"],["/tags/懸疑科幻/index.html","691fc8426383e680a8411b5ed8603c5a"],["/tags/戀愛/index.html","1018faaa28c15922ee917b450d81c1db"],["/tags/成長/index.html","9d6c344afa81a89985eb6e6a488d265d"],["/tags/成長/page/2/index.html","39710eca4c41a2068fe336088f4554a5"],["/tags/戰爭/index.html","857c0a04e3d130928c14685b64d92172"],["/tags/推理/index.html","5819b5e115cdc0e7153dcb319c211a62"],["/tags/搞笑/index.html","037cdcdec67f7395a08ee36e1d84af89"],["/tags/救贖/index.html","cf37d5e671158165979d2798cd7a8073"],["/tags/斜線堂有紀/index.html","5530689c2f903c502772f3a771175a93"],["/tags/日常/index.html","ad83d703e207d6d583687e00178bee15"],["/tags/末日/index.html","b6c3cd5401e11930817fc4c779e4c07f"],["/tags/校園/index.html","f6fc52b39edb0b951f1081c9b7e82c79"],["/tags/武俠/index.html","3b2a8d4b85af3a955580e52db3f31184"],["/tags/武俠言情/index.html","8d776f70f731cbb08cd26586cd38f142"],["/tags/漫畫/index.html","11719c7da01b478d6be7ffb881260563"],["/tags/生命/index.html","f79063ed42aac867439c73076cbdc11a"],["/tags/生命/page/2/index.html","d536b3b0d6938b5e6ef8aff5d75b046d"],["/tags/短篇/index.html","4de38ea6d26c989a32d2b74526a9aadd"],["/tags/社會/index.html","1d00f9c2f1e6d0053759b6c4563732dd"],["/tags/科幻/index.html","942396bf91ef27c1603d7b896a4ea5de"],["/tags/童話/index.html","617c566490c97e20ee1d0e1a7898ed60"],["/tags/競爭/index.html","98c6f2d4460bf068e2c43e761ccce491"],["/tags/自我/index.html","d7f2d6f93bc62529eae266cac1fbed55"],["/tags/自我認知/index.html","c29772d38a55834d6471ed01a730f260"],["/tags/葦舟ナツ/index.html","8796c695e00fd3a6b6bdc5eb1fc03920"],["/tags/藤萬留/index.html","ea14dd96db11d34c79bc465173d501e4"],["/tags/親情/index.html","4476a8a010efc4ce970d324f9277a646"],["/tags/雜項/index.html","b92afd20502f81d2a002122468dea6df"],["/tags/電影/index.html","5afe62f9593589bad5ec7c9833c9f8ff"],["/tags/電影/page/2/index.html","e75e86ba8dddc4f1722b0e5e5d0a60fd"],["/tags/霸凌/index.html","d67093ed31a5243c903a75eeaaa26998"],["/tags/青春/index.html","b1ea0e71deaae51af4734b4ab2a46661"]];
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
