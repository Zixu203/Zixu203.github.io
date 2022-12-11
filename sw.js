/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","662d01bb614a5c13aadb3099d01b0422"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","7645df0d225a8a1ee5a79d166caaed9d"],["/2019/12/25/Review/無法計算的青春/index.html","7c1fc7c7cf8ea3982519223f04507089"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","ead417604109cf812bb5d544b3b13333"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","e41142171e09815e076c679285f9519a"],["/2020/01/19/Review/下雨天，不上學/index.html","1559eaf5acb28ba3735d13f5915a5413"],["/2020/01/26/Review/三日間的幸福/index.html","d28026f9bf3f4ba059cc57d48bbb6d1b"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","8d4203e59d72408c3af34514701b63e8"],["/2020/02/09/Review/青春期超感應/index.html","b067e6fa313b6ce8236ba86549247675"],["/2020/02/15/Review/又做了，相同的夢/index.html","3e28fb2a9c9c810e0514d220b19d3633"],["/2020/02/22/Review/回憶當鋪/index.html","25d68b7defd8fc99625e5e40e05a8723"],["/2020/03/22/Review/不適合自殺的季節/index.html","33afc84a377a9541940cf885562db98f"],["/2020/04/26/Review/我們都無法成為大人/index.html","21abc483638f5e3d5fe37566885b39bf"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","6c31880776051e598efb214b4bcd5f8a"],["/2020/05/17/Review/人間失格/index.html","2d957bc5be4e02f95f1cc17aec3ae1e5"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","691e292b41bd9c8608c8d420696c9d4a"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","2c63744047d2100e9d11882538b25385"],["/2020/08/01/Review/銀河鐵道之夜/index.html","a4bceb765715c71ace7376ccdbef3f1d"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","bf782b0b7bdf4292f38ffaf3f8950f3c"],["/2020/08/16/Review/15歲的恐怖分子/index.html","cbbe6a85b2176c97715eb4bf09602d50"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","92d37dcac7f5127d9e7a9df147f81d86"],["/2020/09/13/Review/羅生門/index.html","d44932112d3f4bdaef745dee34285889"],["/2020/09/20/Review/闇夜的怪物/index.html","09f4977d091d70b5a57ee5ee66c31143"],["/2020/09/27/Review/14歲，明日的課表/index.html","c2af0e28580bea8df5b2eecb1014053b"],["/2020/10/04/Review/致十年後的你/index.html","5df200589499da16334decbe3cf3d2da"],["/2020/11/08/Review/滅絕之園/index.html","1114f7cdcc2175638733363e26308edc"],["/2020/11/15/Review/將愛拒於門外/index.html","c7a3f24b668a2f177f9eb3a1829dd8e9"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","a18192b55c3036e6635157c651396ad1"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","071a1b188ebc743be562a17b94928528"],["/2021/04/22/Review/道印/index.html","a32e94e08494e16c8c2e73ff9cdd6e73"],["/2021/05/03/Review/戀入膏肓/index.html","888ec3a7a309be17d73423448d7f998a"],["/2021/05/10/Review/Dice/index.html","22c182e8292d99f980633b5470501767"],["/2021/05/15/Review/魔女之旅/index.html","fe15ab6ef895d3f279289153757faac3"],["/2021/05/28/Review/戀愛寄生蟲/index.html","4492fcc4435bf177d832f586190e8ee0"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2180f16090e5cbea9ebe13758d6f642c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4004666209b354a1f0484e0098f1292b"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","128933adc1ee5bb10d98ea886ea2141e"],["/2021/06/05/Review/流浪的月/index.html","2f104d145fc48d91661654d2727f4e42"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","96029e9b45891eb5c4d3b404f41ca550"],["/2021/06/13/Review/第一人稱單數/index.html","567d109d0aaeb6b8b4978a7b1a1bd4d6"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","d32ac87e6ff2ecf8c4f66fef0297f05f"],["/2021/06/16/Review/願你幸福/index.html","3d2a901e9f84f8de53e7ca4ee49b2f42"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","2e2fe4711b3f7d638914cb0851d3b57b"],["/2021/06/21/Review/神隱少女/index.html","d2b7f35fb5018bc5930cf196160cca96"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","0929e4ee40112f61f99815a056521775"],["/2021/06/23/Review/天空之城/index.html","7ba892207940bc40b0976dc0da735476"],["/2021/06/24/Review/魔女宅急便/index.html","a5ec1b50c9d6f1ede5845f24f13025b1"],["/2021/06/25/Review/借物少女艾利緹/index.html","1869eae1cc24a7d4514a86d8909fd7d2"],["/2021/06/26/Review/魔法公主/index.html","5fde9ba6db4c5f35632a53475848300e"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","5802dd08e5cb6b8db326bb1bfb9a7782"],["/2021/07/04/Review/飛雪與劍/index.html","351fec57b39e43983381b31b7fc552e8"],["/2021/07/09/Review/地球防衛少年/index.html","d0b1f58a47b203cb22feab1fcd8c1133"],["/2021/07/12/Review/Angel Beats!/index.html","f7b32814b1e45b270656b353ca7581be"],["/2021/07/13/Review/Clannad/index.html","4d569c46f871237fd54e402696d4a6fd"],["/2021/07/15/Review/AIR/index.html","8171238250e438b954bc36235716822e"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","780a34a855d16007a8411e77b99d0b28"],["/2021/07/15/Review/螢火之森/index.html","ad33488d98b847570d6c3ba4c5183e3f"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","87274519b1e73dccae9963cd60d73f7d"],["/2021/07/17/Review/奇蛋物語/index.html","831abf798a186970b813b1a1746d4c28"],["/2021/07/18/Review/Vivy/index.html","a14fb4c96c89254bd5dea25f4e8e3a41"],["/2021/07/18/Review/請妳消失吧/index.html","263bcba5a401ec3f8887027c8db2fa2d"],["/2021/07/19/Review/漣漪的夜晚/index.html","7260a66cec53b5e4bea01dce07b7ccee"],["/2021/07/20/Review/月色真美/index.html","acbb22eb4578f2ca30c252403f10bd76"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","a6eb699f79d52805e5a6bc26b187c73a"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","c9f28921b48dada0dc54fabeb242fb4c"],["/2021/07/22/Review/罪惡王冠/index.html","5dcb075b7446f0ab21030edacbe6cc5e"],["/2021/07/23/Review/弱角友崎同學/index.html","531a9bfdcd9379a3020d59a83a68c05d"],["/2021/07/23/Review/惡之教程/index.html","b4e3b2e45a7f25c3da17b4d3a54446a7"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e0012018a836dc961ad48cd52eba537d"],["/2021/07/25/Review/魔王勇者/index.html","82026d3038e8f54ead5544f1b3d3761b"],["/2021/07/27/Review/一年A班的怪物/index.html","9c8092e5e0ae7c49ee30751640e162bc"],["/2021/07/27/Review/奇巧計程車/index.html","43758f0ddeb74c218708269f1c565b71"],["/2021/07/27/Review/專情的碧池學妹/index.html","be8d02c5bfc375e2ded68f7daf3e7bb7"],["/2021/07/29/Review/只有我不存在的城市/index.html","14d114c959abc7982622d9b6d32fd10c"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","385737ad2ae6cfb382345898dbc8378d"],["/2021/07/30/Review/可塑性記憶/index.html","11d8bad0fce04f59c248e13374198e0e"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","63d8cd8207beaa31cb0affb76f433247"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f0eb61c96b814d49e7f0cba8cd4931da"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","59b4264719e8266560dbcb44a140a58f"],["/2021/08/25/Review/清戀/index.html","a1df63e5f820b257d0e9e48282bcba6c"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","fb77571c7ae531ac60878d877e98d490"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","b0f2cacf605d3da4598030997e768b59"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","1db73812d2b10f4562b9d7ba756f547f"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","6ac86f36410b846d5edaafde6ede65a8"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","f5d5bbaa900e6a67195a48afe1651856"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","70e4f5a164449eb9b6906a033e92af6e"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","701db2dbd23fbdb365979a53ddc4daca"],["/2021/10/16/Review/龍與雀斑公主/index.html","a662d4b83ee72d3116c68184c8f036ef"],["/2021/10/19/Review/孤狼不想開後宮/index.html","781fc1dc5a7703647cb3db4ee65b78d0"],["/2021/11/13/Review/徹夜之歌/index.html","f5c1ea449f28a674a86baabe48b6283d"],["/2021/11/24/Review/武煉巔峰/index.html","847874b066e21e60a37e6bf23cb9b9a5"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","caac7687128976c59f6a7f6c6c2c4943"],["/2022/01/28/Review/神醫凰后/index.html","13f716a3faae1d1a2e5d3e6fec58f77c"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","503c0893b6ab7b8ec377b973e7c12b97"],["/2022/02/13/Review/夏日幽靈/index.html","c72288b7a2255f6f42dcd7df609f7021"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","44586577428c6d9d218743291821315a"],["/2022/02/26/Review/賽馬娘/index.html","7c60d3dc912e4cc81ecbdb010bf81f5b"],["/2022/02/27/Review/大欺詐師/index.html","3c943bdeb1e4801e03841067d1b57f73"],["/2022/02/28/Review/前輩有夠煩/index.html","9985e23fae571d4a8808aa581b789706"],["/2022/02/28/Review/碧藍之海/index.html","2e70f2a2d0ec01a235e3b6557c6240e4"],["/2022/03/05/Review/落第騎士英雄譚/index.html","33589dcb4a0a9ed180ebcc39013930a3"],["/2022/03/06/Review/Another/index.html","0ae338aedc4e572ac09d1b64c3c422b6"],["/2022/03/06/Review/入間同學入魔了/index.html","6449822d5e1313e1f6dbf1d8620725eb"],["/2022/03/18/Review/再見宣言/index.html","c02e03ea673ebc2da7322a42d0fa359b"],["/2022/03/23/Review/生若冬花的妳/index.html","b10341b666af6dd41aff45e97d0b7d73"],["/2022/03/25/Review/天之弱/index.html","f4a10b506a34d18c3814437e1dcc3d71"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c7a1a19edebe2a4cdf9286c3f98ec0da"],["/2022/04/30/Review/泡泡/index.html","37ada8c6669689231fb538494dbec5af"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","c4eb590cd583eb0ce2128730db4172da"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","583bd9be2aefed419fcc1b7e4f8c6e8f"],["/2022/06/13/Review/偵探已經，死了/index.html","e0e9093b5aebf30b601633d8bd5a3853"],["/2022/06/14/Review/黑色子彈/index.html","1ad33ea7dc74ac2e5d44af2632276f79"],["/2022/06/15/Review/黑白來看守所/index.html","bbaed6a440f04914fb9f5a4f010f1514"],["/2022/06/16/Review/虛構推理/index.html","6d0adbab75edbaf9daf831a2d421ce1f"],["/2022/06/17/Review/戀愛與謊言/index.html","1aadd55b53f70860924418917522cb98"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","0a3c7f1d4468d72c3ba75414c4a3ffce"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","787222f8a9a7e9315831933c7f150dd0"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","a8a2087c7ca680fed9a1bfcc63473705"],["/2022/07/03/Review/Hello World/index.html","51a04d3acd41704b0012ef4e97384619"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a0f468fef91fef4166022829d994e076"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","8a5fb88377712eb83579acf2f7af592d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","586ef0a5b09b62c8170c3c4217c2de8c"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","b8ff164c11e97c985ee99eb83a28653d"],["/2022/07/16/Japanese/動詞分類/index.html","555f5a68e46ec55f44914abc814bb588"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","691660c9245dd3a25f558f5ba35302d7"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e31c6a56748ac671a20e8e0b9e9a2de5"],["/2022/07/17/Japanese/音便/index.html","53c25db95ea71b8a4d3e6a34cf02e268"],["/2022/07/18/Japanese/動詞 時態變化/index.html","6612f463c73dde6df6ae415f57978282"],["/2022/07/19/Japanese/助詞用法整理1/index.html","289af3b0cf468832f26e8cf82b18f83f"],["/2022/07/26/Japanese/助詞用法整理2/index.html","db04e5925353064bcc061affc1cc0e35"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","4d1ec6fd52463b1866f934280f7b7f48"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","34e12b928a2b711a74ccc2bda01bc8ab"],["/2022/07/30/Japanese/疑問詞/index.html","78fd19449bbdf16772ef0ee44bd77298"],["/2022/07/31/Japanese/助詞用法整理3/index.html","92ffc45b4bf0efef0047afff5f62087d"],["/2022/08/02/Japanese/副詞整理/index.html","30a53434cf0989be82aa118ecb6a9df1"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","b7caa0bc77bd111969e49e86c2ae283a"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","05581dedf56572f9e15731a1537284ac"],["/2022/11/22/Review/組長女兒與保姆/index.html","414c86d93e95734568fabf0edf0460cf"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","ba12e8a45d8966fa460dad3841a8e935"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","0664a8854cc443ce96ff02c04188cc5f"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","1d6621602705843df2355d3d3432a9bf"],["/404.html","df1a6110f4c97e71fe77e3493fbf68ed"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","2333ddd47189ac9eab8d30a6b7cdcf2e"],["/archives/2019/11/index.html","e115bdb35cbdfa6ade981fafc796deb6"],["/archives/2019/12/index.html","b628dd0ae46c21073a817975b6c8edf7"],["/archives/2019/index.html","b311d4198ec19639243bcdefe3d18901"],["/archives/2020/01/index.html","cade64d2d209f9554aeef3354561431f"],["/archives/2020/02/index.html","b839ea338a2bff56dff1f4cab57495a2"],["/archives/2020/03/index.html","a37e009fd42a1af87992f8288eb16067"],["/archives/2020/04/index.html","3d976a3da954ca52ad0af2bd5dc94f58"],["/archives/2020/05/index.html","44a9b89b470308c035becae82515f3d2"],["/archives/2020/07/index.html","8093d5ae391be387e17586b1ae61b491"],["/archives/2020/08/index.html","b9a5badd6f5f1c92caddaef71605b39e"],["/archives/2020/09/index.html","3554be89dab10f6c4dc7e76ea48b5e40"],["/archives/2020/10/index.html","bb9eee4e87b997168b067eaec13829fd"],["/archives/2020/11/index.html","b93018c9cf94c86762eef6d3bae20994"],["/archives/2020/12/index.html","9003b839bc1ff98f7e5bac93b249610f"],["/archives/2020/index.html","6cf369b00cf86684490c65d1b2e46961"],["/archives/2020/page/2/index.html","f4c53a9acb4fbf9a6e6edabbfcdfd877"],["/archives/2020/page/3/index.html","67675147efb445b387c01a9f5fa16cc8"],["/archives/2021/04/index.html","76d8e350e4fce9d2cbac9af5868005fa"],["/archives/2021/05/index.html","c73a794448cdb7e7048a4125a923580d"],["/archives/2021/06/index.html","45b1207cc8dee58d455a319d00b7a258"],["/archives/2021/06/page/2/index.html","464bed1e62681adf346fd02cf8c9626d"],["/archives/2021/07/index.html","af23ed3443072c920b735b88579205a0"],["/archives/2021/07/page/2/index.html","164eb83cf7bcebd9d75704b13a2b3014"],["/archives/2021/07/page/3/index.html","0e5f5326795317b05b4d8d023d623f49"],["/archives/2021/08/index.html","24c3fe082fba8eac388cd75f922afa22"],["/archives/2021/09/index.html","83ce8ba8bec7a45b70444fc305d0e945"],["/archives/2021/10/index.html","472b385f3fb5fd444416674701fb1318"],["/archives/2021/11/index.html","ff8b59c567343c515dfca7c2ba886855"],["/archives/2021/12/index.html","a9c1758d162220036b2eff89e4e1d141"],["/archives/2021/index.html","d94471417d8fe7194de6d503b5c81dcd"],["/archives/2021/page/2/index.html","22253c94d021dbc5f33f7abb4f5495ad"],["/archives/2021/page/3/index.html","c7e7634e80d29155178fcb450f3c4fc7"],["/archives/2021/page/4/index.html","2a232868e1bdae071c7776edc7eebd5c"],["/archives/2021/page/5/index.html","fd6971367770589f5f36240e82ccf728"],["/archives/2021/page/6/index.html","334693092f88baeff309b5d725b7ca77"],["/archives/2021/page/7/index.html","69f48d46d367e3f543134ae4986617d0"],["/archives/2022/01/index.html","87bb6d2bcb7c095e55ae754d2644326c"],["/archives/2022/02/index.html","2be80d060ef209164aca01a2577b1458"],["/archives/2022/03/index.html","1640c8b6d10249a4eaa7b59411cd9e50"],["/archives/2022/04/index.html","8888b2995ee8e22039d912d543d7ee70"],["/archives/2022/05/index.html","95ee3bcd9277a242cc7e3fa8fbf1cab6"],["/archives/2022/06/index.html","e6e4e1af758d0fa7362a69a288664337"],["/archives/2022/07/index.html","076bbdb140ad1f895a1e397a31fed133"],["/archives/2022/07/page/2/index.html","58283e07076dd2c7918bb87e4e70f55c"],["/archives/2022/08/index.html","69014892c006ec642b4dd45f9b221825"],["/archives/2022/11/index.html","8fc3b22150941c0679c38754ab9d0cce"],["/archives/2022/12/index.html","4446978c010f7caeeb221e99609e83b5"],["/archives/2022/index.html","4dbac2b091a68317faeeb51c913926ca"],["/archives/2022/page/2/index.html","f26e71af64bf839c1caeec44bf13ded0"],["/archives/2022/page/3/index.html","02ccde4d81520e41303b8761029e7acd"],["/archives/2022/page/4/index.html","3d0866fae62acc3e8fd3040677b8a6d3"],["/archives/2022/page/5/index.html","1d059d3fb8ebe0d945a4f07abff25d50"],["/archives/index.html","792860c5f4f387962b0b522e130b976c"],["/archives/page/10/index.html","c7c83b4373bd81f0249cf39ba3b52ffe"],["/archives/page/11/index.html","c2dd73243b16eab8f43bac213a7cfa4d"],["/archives/page/12/index.html","c154f27a758245a86d8b7be6bc062ae1"],["/archives/page/13/index.html","f451a3d62349f158589c91836d101580"],["/archives/page/14/index.html","2247530ccaec8fc0d0a465846d09f802"],["/archives/page/15/index.html","15827ec224241df13bda222d7d07077f"],["/archives/page/2/index.html","17629d3addfffc9f1c018fc7cb887f7e"],["/archives/page/3/index.html","42ed0ec9bb491bed9813e5012536e46f"],["/archives/page/4/index.html","8f89c3c4f7f407e22b93aa7253a8c78e"],["/archives/page/5/index.html","09af4fd4d153797b0be9e3e85e8f7169"],["/archives/page/6/index.html","5495ac616b7a0e0d53f6863914f52e0d"],["/archives/page/7/index.html","4cd24f45d6ae884c5e35283178a7ba08"],["/archives/page/8/index.html","90491287870833b5a65a8886266287f0"],["/archives/page/9/index.html","78448be19e85d9c0344592e4d223a992"],["/categories/Algorithm/index.html","f19cd4f22140200c8e61624d55fb828f"],["/categories/Review/index.html","058a6bfde2ace7eea8d4ca511c775a24"],["/categories/Review/page/10/index.html","69a57ec561698bc295c15b0d19570f41"],["/categories/Review/page/11/index.html","e59105c1fe8d0ede0abe71469aecb0cf"],["/categories/Review/page/12/index.html","bcadd63c49f15ce681fee46306f73f15"],["/categories/Review/page/13/index.html","625838a5fb14683c363eb820ff23c81a"],["/categories/Review/page/2/index.html","7aa5472028f1143448cc835f8387f9fd"],["/categories/Review/page/3/index.html","c544e3d159583403587bb986fae65301"],["/categories/Review/page/4/index.html","2d5be15e9238c24e02a33f3c13fd15e5"],["/categories/Review/page/5/index.html","15f124c1932775fd9b2ed2c8dd1108e2"],["/categories/Review/page/6/index.html","6ff3bef831658e9360d060651810642b"],["/categories/Review/page/7/index.html","d182276b707aab685e1f3cf2e5480b79"],["/categories/Review/page/8/index.html","a223190a1cb38bcad4c4dff59b65b434"],["/categories/Review/page/9/index.html","9309933d0f50aa87e36a28190c7cf58b"],["/categories/index.html","a76c5305e5ef70f7e428ace64d6dae2e"],["/categories/日本語/index.html","b294adcd3c316ce13502e99e569134ff"],["/categories/日本語/page/2/index.html","f824c76e99cb933638f58b9eed5ec5e4"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","41dd0ad47bc75cbdfd89159f3140af43"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","94930d915b83cb247093cacd251f4918"],["/page/10/index.html","c42497a29dc6e409ec6a3a0af41089b1"],["/page/11/index.html","6e2f4dfa4aa55308f57fa8b524fb1373"],["/page/12/index.html","331b7f305f31605ba73da832995f7211"],["/page/13/index.html","134081e6f08479e36fe9af12a09bc5b3"],["/page/14/index.html","3647095030e538c469ae9a1ce21ed58b"],["/page/15/index.html","47309006629b792f3223d88ca4835264"],["/page/2/index.html","c197f8a3fa9991d9e076d213522a3982"],["/page/3/index.html","ba27f22430f507e821b184c7ad9dfc9a"],["/page/4/index.html","7f05a240ed89ea84ba74824e30a8bca2"],["/page/5/index.html","72d2ab3e6c9618230f095ad8e7ed5b4c"],["/page/6/index.html","194bf8c341abbc259298ad135d4e7316"],["/page/7/index.html","c2b76a09a4afcac7caccc5424fbe7d55"],["/page/8/index.html","004112ff133a25d0ad370f6d12964627"],["/page/9/index.html","c073b8aec1d125a91eab1fae6c4cb3a9"],["/sw-register.js","c9c4806229dce4a4a2800b1251b6339e"],["/tags/10分作品/index.html","ef0ad132b02672ae95f204df18c035be"],["/tags/3分作品/index.html","84ff952725f6f1de94d4272f0d9c612d"],["/tags/4分作品/index.html","c4ed999b5c1be4c598e45b395d300152"],["/tags/5分作品/index.html","31e0cacb767d1850bd15befab359203b"],["/tags/6分作品/index.html","3baab4cca9c6fd68c456345508a49d2b"],["/tags/6分作品/page/2/index.html","0993f917a611bf81775bd55a42e4a13d"],["/tags/6分作品/page/3/index.html","93e61a9b8e956bc0a8fe4e882d04a85e"],["/tags/7分作品/index.html","00258e845cc94d3e090fac29880b7a02"],["/tags/7分作品/page/2/index.html","7f24154fe155b6b756e84de1d936710a"],["/tags/7分作品/page/3/index.html","3035033793a6bfaef81e6ecfbe5e7576"],["/tags/7分作品/page/4/index.html","43feb2c66f68f04be09ee7025e338998"],["/tags/8分作品/index.html","ce013acdba218b787c2d338b3ed3dcd0"],["/tags/8分作品/page/2/index.html","c53338cf193dd48cf0139f48b827a60b"],["/tags/8分作品/page/3/index.html","e97b1916c29c4c0dfdb00ebb316bd96f"],["/tags/8分作品/page/4/index.html","33217752b9a039ff06a227e63049cbe6"],["/tags/8分作品/page/5/index.html","8c5b6c6dd8449d2b63ce0cb7db76f98b"],["/tags/9分作品/index.html","c66f8cdc81286c8adc186a5e24efe285"],["/tags/N5難度/index.html","22d1280a7b506250f98f8f2c98008ea3"],["/tags/N5難度/page/2/index.html","2fb743834a29442af2310bd4cdc11abc"],["/tags/index.html","3587044506cb4720b7a2a3084c38540c"],["/tags/アボガド６/index.html","e9f84b13d73512bdbdcd26a8a79d5e1d"],["/tags/三秋縋/index.html","836d344165fb8db733d1b9952de50f8e"],["/tags/中國武俠/index.html","f5c175ae1ae8b0289a66419013519766"],["/tags/中國言情/index.html","1df796ad40a85d5672818a026b2899f6"],["/tags/二宮敦人/index.html","9ec596901c394a87d22a8d858caf1200"],["/tags/人性/index.html","8f251e6f72e5a9e960a2ea1b684e9f5f"],["/tags/人際/index.html","d2c2a68fffae69744b7d8e2e8c7361c1"],["/tags/住野夜/index.html","e25dc46167c95964f23b9d20c25e1aab"],["/tags/佐野徹夜/index.html","a66201c0299b30d4fbb590be6fbc51b5"],["/tags/努力/index.html","4ef2655ee5a4b041285ec994bac298d5"],["/tags/動畫/index.html","379c5bf41262ebf97d4807aaad598b3b"],["/tags/動畫/page/2/index.html","11a4f535d9b60eeb9429e063b52700f9"],["/tags/動畫/page/3/index.html","af5f348d485087c0fb2e3012f22321c2"],["/tags/動畫/page/4/index.html","ca8e62046fcf31c55060d29f7ae480ad"],["/tags/原諒/index.html","9640f47b21c27308cc94fa9b06b2c2e5"],["/tags/反烏托邦/index.html","9e2a0dea44f89c01dd6a17b6d1dcac5c"],["/tags/啞鳴/index.html","5f4febc34d17490b211782caaab58f98"],["/tags/喜劇/index.html","8b12953f786a53b507e744cb3e2dafde"],["/tags/夢想/index.html","10af9045dd98c921401bbeb8f57499b6"],["/tags/天澤夏月/index.html","3d2b83f55cb36a4d300d6e4bb471caa2"],["/tags/學習/index.html","902abc8d4a28e6298cd27bbc4bc4d142"],["/tags/學習/page/2/index.html","59b05c1d591a7530acc0d92cc4d8fc7a"],["/tags/宮崎駿/index.html","d83a4b3e319210add551dba02b361336"],["/tags/小說/index.html","25bdb84435800f58918eb2e5e2dd7e8c"],["/tags/小說/page/2/index.html","e9d2a3cbcaf775979348c142cd1d7f6a"],["/tags/小說/page/3/index.html","8921ff3c56337a7da65f2151d88f9a1a"],["/tags/小說/page/4/index.html","2507b6b1ccdc335a11ec88bef5800c93"],["/tags/小說/page/5/index.html","0bfe7a55a11de1535f4644a3ddcba9a3"],["/tags/小說/page/6/index.html","60543f6cc94ffe3581510cf90c0d60e8"],["/tags/小說/page/7/index.html","743625098a0975c8765fefbd97e7b2cb"],["/tags/平淡生活/index.html","538ca6b37be6b8f0cf3b4bd63d98a31d"],["/tags/幸福/index.html","0aa91824ac2d58d5546a0f8d836869b2"],["/tags/志茂文彥/index.html","0cb74b8fd049fc001334c45386d26785"],["/tags/愛情/index.html","46142f78326bb6d2ee1813ea4a93fde4"],["/tags/愛情/page/2/index.html","535d6a3833e32b16a7cd557f6c3c296e"],["/tags/愛情/page/3/index.html","b32a3457790f2428af5944d9e929c371"],["/tags/感動/index.html","71f8c5b33457c7ae9651c631f7b3b7a6"],["/tags/懸疑/index.html","b8f1b0708b1e48e0a96dd5dca5c33078"],["/tags/懸疑科幻/index.html","09926948cf9351b0d12d1d1a5312ad86"],["/tags/戀愛/index.html","3cd2e1cb006d5ba9e15923d9b618b2e7"],["/tags/成長/index.html","a21e25c6172bd8e60111c26d81f482aa"],["/tags/成長/page/2/index.html","b3036f611cff197f57d7a7d3ff22a354"],["/tags/戰爭/index.html","33315b1c7281ca1b7091ece21cbbcd5b"],["/tags/推理/index.html","a3fe8fb5dc836812f742e0ea5778613f"],["/tags/搞笑/index.html","081442a27a8ed1860b47f51ba6660e73"],["/tags/救贖/index.html","6237f1391d2b520932c0a420fac722e1"],["/tags/斜線堂有紀/index.html","eb3621fc2d71b378d9b8e1a387f81ae0"],["/tags/日常/index.html","ef1f6f470e40668bbb3706f35e016fbb"],["/tags/末日/index.html","4a48d470ebd45fdaaf9c63fbfded151d"],["/tags/校園/index.html","7821405578269b3fe5947e2d248969cc"],["/tags/武俠/index.html","5e7a4d0098833617e032972ed145028f"],["/tags/武俠言情/index.html","761e785d06b4c2906f98f187e4e4b737"],["/tags/漫畫/index.html","d17995daeaff7ed430cd5ac9ed685e64"],["/tags/生命/index.html","be65798896ea60dddece0d6265fcdd0c"],["/tags/生命/page/2/index.html","d5e5c7653ac21e09b8006ba0784928ef"],["/tags/短篇/index.html","bf6b8d565025979c8193cca1e31da079"],["/tags/社會/index.html","02d5b38dab43e43b7283ca291d259a43"],["/tags/科幻/index.html","3edfb73dbde865df890c2b614e85e2a4"],["/tags/童話/index.html","e632818fa8042460e131372b607157ab"],["/tags/競爭/index.html","dec7d6e3a0d41910e2eb601b45771983"],["/tags/自我/index.html","69c9a11cc5db3d46123c19df171e389f"],["/tags/自我認知/index.html","d4b272b2afb041c68389cefc72ed6e45"],["/tags/葦舟ナツ/index.html","8c63a6fdd476fb3a80b9229cd498d008"],["/tags/藤萬留/index.html","a1e115f903c10101164a3b3b9c1953dc"],["/tags/親情/index.html","92d749f52f72f70ccf0fcf0981a953cc"],["/tags/雜項/index.html","2ae2974c02a856e0740ecb952d13617e"],["/tags/電影/index.html","ae2e4c27a918a3645e53db86eb44fd1f"],["/tags/電影/page/2/index.html","eaad6c724dede2880d623cf1d6166370"],["/tags/霸凌/index.html","1257b3ff3df626698a9c64126e6e14a2"],["/tags/青春/index.html","e61f4336a5ea74365d30b32b33c13e78"]];
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
