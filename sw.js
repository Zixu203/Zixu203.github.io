/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","21a6abdc8c5e4b6b05626f53bc3807b4"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","cbf42f27f9b59c73e7dc274d88a82323"],["/2019/12/25/Review/無法計算的青春/index.html","914f7f4b3ff90a9bdce675d488eb9000"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","100f8717c74f842e21a13d525c8704cf"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","8b74c3e377d41849e5953c52ef680778"],["/2020/01/19/Review/下雨天，不上學/index.html","b5c4af204083295464baa412ffb13860"],["/2020/01/26/Review/三日間的幸福/index.html","36af7ff6119855493e9ec1b58f913d54"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","fdf9a47340e9fbe39da8a32840601c3a"],["/2020/02/09/Review/青春期超感應/index.html","771c0bb2b8aaec7f33865c85ac1acb68"],["/2020/02/15/Review/又做了，相同的夢/index.html","2ef533c82b4bb127dcd5778ed90cfea3"],["/2020/02/22/Review/回憶當鋪/index.html","fc3fad460c976cf4c4b00968e9bd732c"],["/2020/03/22/Review/不適合自殺的季節/index.html","0aa168f271443736815fdf6b557b45c6"],["/2020/04/26/Review/我們都無法成為大人/index.html","53ca2e81ffdba00aab9e9b8f15a5d6a8"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","94e99a2ee87fa734bc5e131370c89dc4"],["/2020/05/17/Review/人間失格/index.html","59d75c8e8791a69293730665c8f00dcd"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","8fca848bc7ba617e74b4830e2df98c74"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","3ee5dd1934fdd8af948ef8cfc4fa221b"],["/2020/08/01/Review/銀河鐵道之夜/index.html","7b6910c4aee80f169c7407324b9bebd3"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","bd0cba7161461ef2269063102126bf73"],["/2020/08/16/Review/15歲的恐怖分子/index.html","7395b71eb0ebf02552ba1cee541ca6ec"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","26654db3a953fd3f026e0d575321d849"],["/2020/09/13/Review/羅生門/index.html","e195af0ba1ff95cb013c58eccf1de176"],["/2020/09/20/Review/闇夜的怪物/index.html","96eba6fed10ce0a21ce97ecf8215e0a3"],["/2020/09/27/Review/14歲，明日的課表/index.html","bebe51935e61698d091e1d78a32380bd"],["/2020/10/04/Review/致十年後的你/index.html","767e44343f82f75ffadce4aa691c4a3e"],["/2020/11/08/Review/滅絕之園/index.html","39bfb159bc4aadd14914ecb53557d36e"],["/2020/11/15/Review/將愛拒於門外/index.html","7d8689ecf46b8fe0365cfd41ad1aaf91"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","85f796cfcec58f6fcdd51b93fe9da061"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","1b38ebab9880f5594fb0f4ec12efba9a"],["/2021/04/22/Review/道印/index.html","d7dbb1b82edda612a78584075fce9bc0"],["/2021/05/03/Review/戀入膏肓/index.html","27cec079aeb5f4755803a2a1ce0b2c9e"],["/2021/05/10/Review/Dice/index.html","af5c7056ad27d4fc87438b0c4022d518"],["/2021/05/15/Review/魔女之旅/index.html","9466c671abe8e81eedee272dc0ce9ffd"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8c934d11f6db96fe66fed5c873e07da9"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","1b27ac9eac89cb073ff59d5918866e2c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","34cb7cce03180c42473d455f3d5fc909"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8a784b5e1c04648696682f90adfe803e"],["/2021/06/05/Review/流浪的月/index.html","dde97a2c0e5e35da0e5d740e35d3f674"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","b5be4b077790807906fafb6d42a66ee2"],["/2021/06/13/Review/第一人稱單數/index.html","65c70362d522e0ea5f4e9c4b7d58ba27"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","22fdc8ce22fd4553edbce675823c4556"],["/2021/06/16/Review/願你幸福/index.html","63fe5877fad97cac95ed66cfb6e06d85"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","172d6526e6f5efe3eb0ef81d4753dcb2"],["/2021/06/21/Review/神隱少女/index.html","796b60304d82b6f83868f6def88c9925"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","c072ed5e4a83bdf2a9b8ea7a3d59e7a5"],["/2021/06/23/Review/天空之城/index.html","c1a26d1c27ed316f4e907ee943016786"],["/2021/06/24/Review/魔女宅急便/index.html","20b324cd9c4fbe99087797e599cdba19"],["/2021/06/25/Review/借物少女艾利緹/index.html","0d8c28d6bb665c410a7d446fa3705cde"],["/2021/06/26/Review/魔法公主/index.html","1ac50922f5d305e9d41396247c52dee5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","eaa4fd01011b6745e63010e511fcfd98"],["/2021/07/04/Review/飛雪與劍/index.html","b470f1832932aa287c1a9d78b67dabdc"],["/2021/07/09/Review/地球防衛少年/index.html","161dbef18fb902b7024c365ef95a1f04"],["/2021/07/12/Review/Angel Beats!/index.html","69f9c77049d5667e2fe6f98a0074b028"],["/2021/07/13/Review/Clannad/index.html","e4b5891f24523d293da8c8a92dc3c06e"],["/2021/07/15/Review/AIR/index.html","907f0e4785c44c68ffbd0a21c9ba8388"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","ca68be829090186805a00bc70642d4c3"],["/2021/07/15/Review/螢火之森/index.html","e37255bc86ed8a1f6ed11ad86f4f8dce"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","def252571656c9dfad1254576c85f56c"],["/2021/07/17/Review/奇蛋物語/index.html","065cd6059ac5b28a0e612037d59cb18a"],["/2021/07/18/Review/Vivy/index.html","69f727d0809c3253e85002902dc20544"],["/2021/07/18/Review/請妳消失吧/index.html","722188c5c46fb1d0904c52405e3ea97f"],["/2021/07/19/Review/漣漪的夜晚/index.html","3025e9be6c0612e0166fc49f4f82d7d1"],["/2021/07/20/Review/月色真美/index.html","37d75134a46ff6224a0cf58f6110cb9d"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","0f86df5dd2901d9073dc5af76c6ce7a1"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","b29db45416e002e3cfacdeae220ba11a"],["/2021/07/22/Review/罪惡王冠/index.html","39448397928b7db9a91469eea57847cf"],["/2021/07/23/Review/弱角友崎同學/index.html","20d164463a311434d4ff17b7ca69ff18"],["/2021/07/23/Review/惡之教程/index.html","6a7c7bbd628e04873074ba19d8f96972"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","60b47351001d6379f006d3a65af26a40"],["/2021/07/25/Review/魔王勇者/index.html","6d4dd2faefdf199a4e450605b69b30c7"],["/2021/07/27/Review/一年A班的怪物/index.html","9356ba81a477e6e9de48352425ed6819"],["/2021/07/27/Review/奇巧計程車/index.html","f28b267e6f37991ed60d9f05a138057c"],["/2021/07/27/Review/專情的碧池學妹/index.html","66bc1c13b0d2b5fe80f853532c002f1b"],["/2021/07/29/Review/只有我不存在的城市/index.html","70bb75ad9c7a81e066653e7428e577da"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","4074484de97523c14ce4654cc939e560"],["/2021/07/30/Review/可塑性記憶/index.html","b7d4a789c3ed9201aea41797d7f16d43"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1cb84f75f263a384735ff154758911aa"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","30f10de6b73722779872c041bcdd1cb4"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","654a3d9597a3020644cf417a0a2b3560"],["/2021/08/25/Review/清戀/index.html","0a4bc5d2e1628e4738ce9329ef48a179"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","700cc464f90420958fef2ad91cecead0"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","d014055985210fd35c833445d45d3c18"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","d5a3565a4d562ffe90504582c5ca06fe"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","495d7eddf0fe9add542fe965902230cc"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","119fdde69471a1bf6dd60793a4a70ea2"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","d7b4cdab00f1f2dd5ea3ddfe038c21d6"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","8085bd2ed1502c47176d9c39f06bbd21"],["/2021/10/16/Review/龍與雀斑公主/index.html","90466534c7db5cb4cbd60ce8ae87080f"],["/2021/10/19/Review/孤狼不想開後宮/index.html","463b0d761bdfcb21371ce0add25a688b"],["/2021/11/13/Review/徹夜之歌/index.html","ed5f6b7d1f339c15e63cf5a6d0530d89"],["/2021/11/24/Review/武煉巔峰/index.html","cdef380d37e92ab4e4476b013def646c"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","a483f3b48e03f085d3ee48a799b6c68c"],["/2022/01/28/Review/神醫凰后/index.html","af67e4b7a2f554db6d953d314e3bd39e"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","2c8b569abe3ec04d140eaa5be37626d4"],["/2022/02/13/Review/夏日幽靈/index.html","af2d0a05b43975b98ffc83bf3440c187"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e2b8b4592ea6816da382a74aa5033e18"],["/2022/02/26/Review/賽馬娘/index.html","a491dc401914d795626a7c1824955874"],["/2022/02/27/Review/大欺詐師/index.html","ff24c3e3a1725b85bba296a917e21bed"],["/2022/02/28/Review/前輩有夠煩/index.html","a7e34ac8b4f17d33b5d875f840893b42"],["/2022/02/28/Review/碧藍之海/index.html","11fe7bb4db4d847ce75e4c1d136eec30"],["/2022/03/05/Review/落第騎士英雄譚/index.html","a79bdd24edb2e910311327a80c6082c1"],["/2022/03/06/Review/Another/index.html","b8ffbef3491cfd08349a119226386a46"],["/2022/03/06/Review/入間同學入魔了/index.html","2e04ce402cfaef8987ed8fc5061caf03"],["/2022/03/18/Review/再見宣言/index.html","d7a2e734d9dd95e5f744195633df9e7c"],["/2022/03/23/Review/生若冬花的妳/index.html","8970286ca6954a2a5de5c54ab73fad8b"],["/2022/03/25/Review/天之弱/index.html","8eacf40faf216d3330df8ea3efea7657"],["/2022/03/31/Review/滅了天道之後轉生/index.html","f4b09f7a63626add1f879289c08e6635"],["/2022/04/30/Review/泡泡/index.html","3818e29adeb54a786f979fa596ebbea9"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","a42e7291e6d905a738f2d50ef462ebae"],["/2022/06/13/Review/偵探已經，死了/index.html","2cc096147677e9ad44d4365b98b65546"],["/2022/06/14/Review/黑色子彈/index.html","7275bff46e88a715084793b9a37ef4a1"],["/2022/06/15/Review/黑白來看守所/index.html","253124b0e3754b17dbba897995229682"],["/2022/06/16/Review/虛構推理/index.html","8b848f8eed7d27d2658a2c855bdf28f0"],["/2022/06/17/Review/戀愛與謊言/index.html","b8a8d3750d207a06eed10e855bfc830f"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","fe9cd56b884cb9f7b89c499fe830c642"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","c7a3e79cc299eca06d016799ba290cf8"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","c871bbfdb3be2e771359d3de0836bb85"],["/2022/07/03/Review/Hello World/index.html","6429a8fafd5f0c80bc01eeb487b574bf"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","4d212ec488d876bdebec165d156d995d"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","735a1ffecfa93dbab40337198b01fb4e"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a72b22d954713d59e503e16014b621a8"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","4bc663421bdb49e2764135cc9d9128de"],["/2022/07/16/Japanese/動詞分類/index.html","39fcd8209488a7e39ac12274818238e9"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","c6e68fb65e5551eeb35872edd56ce20e"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","5cda18500a1e195085beafaed1cdcbce"],["/2022/07/17/Japanese/音便/index.html","32f97c864bc9f42a16d57db7aff8fd33"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d59b9d212f7362dfe4a0d60ec2fa3252"],["/2022/07/19/Japanese/助詞用法整理1/index.html","7b5d64e495cfa25df366beb087db4442"],["/2022/07/26/Japanese/助詞用法整理2/index.html","4172477df49d1069c09afc8e8db250f0"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","4d8a4e73bb976f6a95db55533988b295"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","8429f83d171834c7259f3523c8cbf09c"],["/2022/07/30/Japanese/疑問詞/index.html","3b42e4b127e32b81a6ed2c92232bb7cd"],["/2022/07/31/Japanese/助詞用法整理3/index.html","78e690494eb06aa6045316d4883deb0c"],["/2022/08/02/Japanese/副詞整理/index.html","dde03c2510e69a668d5af793662094a2"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","8a312dd89c662d2e66cf95c2bb5ad90c"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","27ee05a76cf923e241590c0aa84484bc"],["/2022/11/22/Review/組長女兒與保姆/index.html","ae8bbc6746f84c3cd246059d010bed0f"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","a4f39943dee971eb56e20e532a3a7be7"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","5dd2cb8991b73377e82036e036427c8b"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","b989c16d22251d80dad88a294f5797dd"],["/404.html","7fd868ce50a50ee4a3e9adb332756a02"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f8e3c017872679d234177c968d991c50"],["/archives/2019/11/index.html","8d76d13d7294351c55354021c5970d43"],["/archives/2019/12/index.html","1ed5a710e7023bf3f49578741214eb26"],["/archives/2019/index.html","adf26761c28d0351d40645585a3d4d57"],["/archives/2020/01/index.html","9856380ffbc3a6e5563818308e85bfc1"],["/archives/2020/02/index.html","3dd343f489033b5d861d2a8bad6c6d82"],["/archives/2020/03/index.html","ee8bbf4001edf683c2c86b248b5f4d25"],["/archives/2020/04/index.html","a182c51526eeae181e003ad7b6fdc555"],["/archives/2020/05/index.html","34048b6fd4c1b02c4bac9978722dd843"],["/archives/2020/07/index.html","20f6b99ba8873cc060546e192d62a3e0"],["/archives/2020/08/index.html","13743088f17fdcc0cdc35877113eaf66"],["/archives/2020/09/index.html","a0bf234718b4f5c61cbe84cbcbd36aca"],["/archives/2020/10/index.html","e95882a6abe36e7912037206498226ea"],["/archives/2020/11/index.html","273604f0ec5f51c6a2933752254118f7"],["/archives/2020/12/index.html","2338ee8889bef5c180aa1f1e100ab086"],["/archives/2020/index.html","9ced34700e93b398122366d939cdb5bb"],["/archives/2020/page/2/index.html","57fb8a8cf958e4f86e74c6a7c25badd6"],["/archives/2020/page/3/index.html","ea113e0b918d684b9e98b474f0b09461"],["/archives/2021/04/index.html","4956d636e69584adbd85d5c0c04c3d92"],["/archives/2021/05/index.html","27a19b54afc00f168f32174e65c507c8"],["/archives/2021/06/index.html","75e7d3827e521a9505762bf4785b1a04"],["/archives/2021/06/page/2/index.html","1c504cc4da411bb167c146eb7ae34321"],["/archives/2021/07/index.html","f8cdc57bb1cdadfd4d1aecce93c79173"],["/archives/2021/07/page/2/index.html","4734a4e5880537cc9edf02f0a0633b3d"],["/archives/2021/07/page/3/index.html","0d9c14e6110ebfdee38b89ff517ada5a"],["/archives/2021/08/index.html","1476dc4b9959247ca32f637e8bf11b53"],["/archives/2021/09/index.html","31aba72854f4d9caa530be2a48bd92c4"],["/archives/2021/10/index.html","408e65d1d9494eda7ac800d917984dbf"],["/archives/2021/11/index.html","3a925befacde413f80bfde470eb384ad"],["/archives/2021/12/index.html","4c6a25f9b8d9eee68409ebd54d52ed15"],["/archives/2021/index.html","2f82e635676122031d0e755eeead9eb3"],["/archives/2021/page/2/index.html","031133ad3ee7f3d406456ac6c1d101ff"],["/archives/2021/page/3/index.html","6ba9df75d96896aef89834c12f7d51b1"],["/archives/2021/page/4/index.html","dce035fe3c45a68853bdb9bd9b940de4"],["/archives/2021/page/5/index.html","ad0bb41b58e98e9b3fad450878d30acd"],["/archives/2021/page/6/index.html","33478e8e09cbc88aef5a4e2347062e76"],["/archives/2021/page/7/index.html","499656f31b29969f7ce70802b4022adf"],["/archives/2022/01/index.html","fcc5d7b509cc322118a77a322a587e08"],["/archives/2022/02/index.html","c045ccca746dbbf89bbb6087df07092f"],["/archives/2022/03/index.html","375b845f4d1fcc7fd054067164319b1c"],["/archives/2022/04/index.html","ab40d90df8cf8203e842d86a88ba4297"],["/archives/2022/05/index.html","bc69b0173f97fe2a60d40e0d1317b2cd"],["/archives/2022/06/index.html","b4a8280367d7369f7b637e1e75930084"],["/archives/2022/07/index.html","70d6445b1e562653180de7b7428388f0"],["/archives/2022/07/page/2/index.html","60a2924807062a53309e91987daba0e9"],["/archives/2022/08/index.html","28b757f52efe52be2e63a72bdaa834bb"],["/archives/2022/11/index.html","7c0909a49b880c2f9b84b441436719ba"],["/archives/2022/12/index.html","2036595627f26e76f676eaadd912ebc1"],["/archives/2022/index.html","0efd03d1640a08af4bd1dc1efc7d3399"],["/archives/2022/page/2/index.html","a481b0d97a45136d4ec661646c451718"],["/archives/2022/page/3/index.html","6bb58c9df7a2dc729d9a6a2ad3a35b00"],["/archives/2022/page/4/index.html","908ab2690c247e2944b9a7d294101c66"],["/archives/2022/page/5/index.html","fa8d146905a905fb8b68d7bf5638f342"],["/archives/index.html","db683071300c0c2e6a6cef836e882784"],["/archives/page/10/index.html","ad2edb4a92a63350f4bf4517f6b023e9"],["/archives/page/11/index.html","3f7e3c424144d78646ff2e6d7dbaf413"],["/archives/page/12/index.html","0ac38065342c3060e78bf6d76630117b"],["/archives/page/13/index.html","76f3e2751e202112f14da1d317f03a5d"],["/archives/page/14/index.html","d054b1297d087f3f75e4dbd5cb682cc8"],["/archives/page/15/index.html","f657815dc93a4d3a34416f8e4f90801c"],["/archives/page/2/index.html","a2aed23829e202ac33a25d21305ab926"],["/archives/page/3/index.html","b8e50c58c36dcd2a82fe34b2365ea263"],["/archives/page/4/index.html","947f7cd7b22a8b4b9de212760de2711e"],["/archives/page/5/index.html","1e144e9a55b84baad7989820e71f5c6a"],["/archives/page/6/index.html","d3d158edc0184542c9a01112132f7188"],["/archives/page/7/index.html","a82c9e69edb58418aa1c2aa56ac93a11"],["/archives/page/8/index.html","a6cc54fc6a6f471b77c4bb70bdfcc17b"],["/archives/page/9/index.html","1eb15d911b1e007eeedc655f116c8174"],["/categories/Programming/index.html","4333e675c24a6618a3dd37ba7275e2d0"],["/categories/Review/index.html","774f70159586ee5f4661cb65076f0e2c"],["/categories/Review/page/10/index.html","fb3f9945f4c1a6fe32d51ba3d9a5f015"],["/categories/Review/page/11/index.html","51b340b7623e10b6c15f57c3d8442718"],["/categories/Review/page/12/index.html","44d125c19cadf567ce608d0bc14cd99e"],["/categories/Review/page/13/index.html","a5779c9ceb751f733d532fddb7e0deb8"],["/categories/Review/page/2/index.html","fda90777b6dbcbed953439a5a169e016"],["/categories/Review/page/3/index.html","f24f4625d065dcdbc2b2dd624658e71e"],["/categories/Review/page/4/index.html","dfb9875b99344f35a94de8e375d087a6"],["/categories/Review/page/5/index.html","c7a08c7c244359ce13f56a3fa392a860"],["/categories/Review/page/6/index.html","fc5f3c8e7bee43364d4f015ee08fde3d"],["/categories/Review/page/7/index.html","85f44c1cb4039ad5f414890d1c67d237"],["/categories/Review/page/8/index.html","17c754d58456f87b6e3e37182e2bfcb9"],["/categories/Review/page/9/index.html","1bf1cb2719c06af902410bcecef90757"],["/categories/index.html","3bb492b5fcdc80f107b1d8c3838f6534"],["/categories/日本語/index.html","43b6ecf625b5082df6239934797f3ee5"],["/categories/日本語/page/2/index.html","797c8b33870eba7dabfc8cacb75f495a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9f96d7910358a6c50de02508f88cb6c7"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","fb8b1407bc4ee4f8fb8d9cdc2edd66f3"],["/page/10/index.html","35d2a3e40c336cc4c31a09e8a315413c"],["/page/11/index.html","f3166c0ef4b84ce09c76fc4a21305298"],["/page/12/index.html","e3b6da991acbc58cd5ee07cd1382e05b"],["/page/13/index.html","0f692c2b08ea0186757d7c9f2f7ed8d0"],["/page/14/index.html","1dacbf0be2d3b55e9107318d5cff954b"],["/page/15/index.html","d537ed4176ff26bb966978d7ee2e08fe"],["/page/2/index.html","156abe451633516c586af0bd4ab36658"],["/page/3/index.html","e7fbd5d0fbf7362d18f30dd6d5ffea0d"],["/page/4/index.html","f1d71fc5b14aee7ed96347f482bc4747"],["/page/5/index.html","b3698c61f32f8d2b007c6fadbdb5ce0c"],["/page/6/index.html","74ddc6c1eb6a974673beebf49e37f270"],["/page/7/index.html","47fea0fe4589751fd2aa151892a24676"],["/page/8/index.html","be593c0806ae5f95e40377ac02febc95"],["/page/9/index.html","92f4b275a686526218c3213c28f4e51a"],["/sw-register.js","1b3a1966dcfb6c4f870394623293ae30"],["/tags/10分作品/index.html","e9446bf2b9073b85524733526836b37d"],["/tags/3分作品/index.html","2bfb2b8ec42ad5b13d4ffa87d8a173f2"],["/tags/4分作品/index.html","b9e9907859df80ff52a7369bbbee058d"],["/tags/5分作品/index.html","c7dc631533e9f7e6a29f4530666a34ad"],["/tags/6分作品/index.html","35e7116b918f144c893ccfb39962f3bc"],["/tags/6分作品/page/2/index.html","92abc9c28b4bb8af611b5c6093403ede"],["/tags/6分作品/page/3/index.html","528d1c90bb0457095f3113ddb67dcdd9"],["/tags/7分作品/index.html","50ab26e165705d8b705aca60f8330347"],["/tags/7分作品/page/2/index.html","cbeba262eee74c71dd5b08c1accaa9d7"],["/tags/7分作品/page/3/index.html","5a529e18948d0595636944c5170fbf23"],["/tags/7分作品/page/4/index.html","51a12256b8f7828bff5fc6effce68ea9"],["/tags/8分作品/index.html","10573e71f48f40aa5c650226da24e63d"],["/tags/8分作品/page/2/index.html","da87b67a9fdf628d3d70420fd2c2cc2d"],["/tags/8分作品/page/3/index.html","7fd2a054c8791805fb6cff93b230f517"],["/tags/8分作品/page/4/index.html","279292ca55d3114f5cb24d899834812c"],["/tags/8分作品/page/5/index.html","7252b10c2b96eeb0f11167353ee97ff9"],["/tags/9分作品/index.html","6f728be5ac0cdbd4b87fdb2fb35eae64"],["/tags/N5難度/index.html","a7c96d5581cb518faa8d2b17b461f70f"],["/tags/N5難度/page/2/index.html","c20ec0e0f920dfff3bb54094c3f7b43d"],["/tags/index.html","c07caa8fd3f924f2637bf7cccae53999"],["/tags/アボガド６/index.html","114fe553f11dc7e6e34f21881ba49204"],["/tags/三秋縋/index.html","411c6c37a9f30169f973acd0e96aeee1"],["/tags/中國武俠/index.html","52dffc6422a361093eb5ab5e56ded384"],["/tags/中國言情/index.html","cd8f6fcd7b96f82cc217561728b122c1"],["/tags/二宮敦人/index.html","cd1ef61e05b33ff345f2e3fa294d994d"],["/tags/人性/index.html","0a8d26bec23884b0f208c317029ec9ba"],["/tags/人際/index.html","447438d51e51efc9349a800c1f98ba8c"],["/tags/住野夜/index.html","4c32fd9f0162331e1d5f9a54085aa731"],["/tags/佐野徹夜/index.html","cf9afa7a5555f51af3ec15ca5cb4ce45"],["/tags/努力/index.html","c9789f60624c4e5425d652af2fdcfd79"],["/tags/動畫/index.html","740c1bd4cab1df81adb5484f7e8ad8d2"],["/tags/動畫/page/2/index.html","0c6925964ea63ee205f2df5c00e4e63e"],["/tags/動畫/page/3/index.html","3561b0276bc3cea27dda1ec3d1ae0cae"],["/tags/動畫/page/4/index.html","05a9ec9a97ce9a1968db715a44822de3"],["/tags/原諒/index.html","4379eefbe36942d25d39631565d1deef"],["/tags/反烏托邦/index.html","46a902dae73ea809465cbaf249dbac33"],["/tags/啞鳴/index.html","f81b3895e88c6f25a2c542f5756bf678"],["/tags/喜劇/index.html","3e55e6744a0795cd05161316624620d6"],["/tags/夢想/index.html","81f9fb99378fc47966c6f0aaafb7ccac"],["/tags/天澤夏月/index.html","b1aeebbade0b1fc1697836bd61f26846"],["/tags/學習/index.html","81554c4477e616ff693eaeb600679f51"],["/tags/學習/page/2/index.html","9a9a609fde46a492011ed019b0bef6fc"],["/tags/宮崎駿/index.html","3dfce26ce97993eac7064548d70ff9b5"],["/tags/小說/index.html","19b334d91b2b03f005b06d667b752e8b"],["/tags/小說/page/2/index.html","f455ef5d081b42cb645a2c823705b768"],["/tags/小說/page/3/index.html","3ce3c65f63a429bd8e1bf0a74066d941"],["/tags/小說/page/4/index.html","85a2283ee694c4a95f765ff809b65488"],["/tags/小說/page/5/index.html","27cdb62aab55c1d5b430f5c3a99305e9"],["/tags/小說/page/6/index.html","77684f38409585b464e62b92e46ae99a"],["/tags/小說/page/7/index.html","53d9226b485574aa9964bd8ee2c924aa"],["/tags/平淡生活/index.html","7a41d2c0a94d9a0dee1c7fcec4272bfd"],["/tags/幸福/index.html","11bf65d1fb5a4028739d63a5e2bd5287"],["/tags/志茂文彥/index.html","733736cd43793c02b9cfec60014bc95c"],["/tags/愛情/index.html","a722bc4089e76d184596ae5ee958d10b"],["/tags/愛情/page/2/index.html","ca398807759bde590f8f4322eee127b5"],["/tags/愛情/page/3/index.html","936e05943c841f6a3fc827586c1d90bc"],["/tags/感動/index.html","8f798997ddc42f48a5ca1be9c8a87bf4"],["/tags/懸疑/index.html","4baf1b3ff25550172fcadbd5e81ca2da"],["/tags/懸疑科幻/index.html","2799f1f4cb6ef93c26c10252f81be462"],["/tags/戀愛/index.html","a91a4967b0e156c552672ba2ee90140e"],["/tags/成長/index.html","bd16b905e731f7a1cfa54c475924bd64"],["/tags/成長/page/2/index.html","19bee4d110f474480f22a8fb425b92e3"],["/tags/戰爭/index.html","191bace480d0c0c342bd8cd8afe3f153"],["/tags/推理/index.html","36f61b88e678560a5aaceec8340e2ee1"],["/tags/搞笑/index.html","fc6b840e5d86bd33b5c9788ecaec4f3d"],["/tags/救贖/index.html","1d10ae488a6e1d913755b9dbe187aead"],["/tags/斜線堂有紀/index.html","0a40ab5c06da5e47f24ad513de8cdf8d"],["/tags/日常/index.html","e9c549c41682ece0ee65ae41dc4beae0"],["/tags/末日/index.html","a96ed9b36f47f9bb14eae423c1a9629d"],["/tags/校園/index.html","0c30a890cc6649c954cf4bc152f53541"],["/tags/武俠/index.html","a2af7fc4615d860397150e9ea778a76c"],["/tags/武俠言情/index.html","62be9d870fdbc15905b83e98f9a401b0"],["/tags/漫畫/index.html","11c58001bd4d144f390b7fce988c1fbb"],["/tags/生命/index.html","f5b347d6032fc298093e0415c4082e71"],["/tags/生命/page/2/index.html","74d7fdb4d4824acf83b9d4fdb77e2bdc"],["/tags/短篇/index.html","ee1c1bbe7aafebed0dbf98ff04e4382c"],["/tags/社會/index.html","4ea26b03c533d33081b09f479183e312"],["/tags/科幻/index.html","9012f57eabec43ada7cc2d340acba8a8"],["/tags/童話/index.html","37f8a30af60f1e357572fce1cde7bcd9"],["/tags/競爭/index.html","7feed6dcfddc86f38a04c772753ba692"],["/tags/自我/index.html","c9a3c59abf9a273b2dc0ebba77cc8664"],["/tags/自我認知/index.html","fa99ef843ad7d347a7f94d6a988b4ac8"],["/tags/葦舟ナツ/index.html","ac63fc6785f7da97e26aab5bfd6fcb7d"],["/tags/藤萬留/index.html","35d86271cc82f8f6fdd7afabaaae3e35"],["/tags/親情/index.html","6c287a5c65864d1fe454858c90c8c287"],["/tags/雜項/index.html","e9516b47a4ccaf5412c080c6e03dbd09"],["/tags/電影/index.html","c20caf10cf1739f5b2243cb2d9754c67"],["/tags/電影/page/2/index.html","df2bfc1b52a825458558df65a2202a0a"],["/tags/霸凌/index.html","f836bfe923e58a96367d7c3631067d5a"],["/tags/青春/index.html","f56312cf65904400cedfb416f8b1580f"]];
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
