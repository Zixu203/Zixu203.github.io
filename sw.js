/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","fceab72973cd9cd436516452d8149dc1"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","e5dec8bb0853dc1c7ae2d85d6348af86"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","1c91619b6dc6d5705361cb83c645c980"],["/2019/12/25/Review/無法計算的青春/index.html","fe2d89548eb2610c5336afb922a99dc3"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","8ecd5469490f05d15f68048e04814a48"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","4164ee67be78e47cb728d9964f0e4cb9"],["/2020/01/19/Review/下雨天，不上學/index.html","ea6b9e184ae5759e42ec0f20b7edd119"],["/2020/01/26/Review/三日間的幸福/index.html","0f729c07fe66947a84a1af63e99e9583"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","937cd8b7819ca95a9597ccc19f913075"],["/2020/02/09/Review/青春期超感應/index.html","b440a891ee13ffc9f5b03b6fef095642"],["/2020/02/15/Review/又做了，相同的夢/index.html","2ae3d5efdddffc3904e3b4375032238c"],["/2020/02/22/Review/回憶當鋪/index.html","735529dd72b095292d6cc83af280b878"],["/2020/03/22/Review/不適合自殺的季節/index.html","6dd03e0cb66237331801bb9ded94268f"],["/2020/04/26/Review/我們都無法成為大人/index.html","b02a60aacb90d220c3c735a5661fe453"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","167a51e7719cae68395a11a39f2dba20"],["/2020/05/17/Review/人間失格/index.html","efe18f5544604d02f50c35866d7d1c8b"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","e908b2b02bb26939db4cc4359a73376a"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","233a3f276065457c158e940585eaba5d"],["/2020/08/01/Review/銀河鐵道之夜/index.html","c12d038db39da93776051019da810b1f"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","ac49008fde574374120a7a4483468276"],["/2020/08/16/Review/15歲的恐怖分子/index.html","beee262288470be8df4b9f1cde784665"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","210e938aad5ce821b0bd263358fec4e1"],["/2020/09/13/Review/羅生門/index.html","0451ce9e530f30594ee9242355e521b9"],["/2020/09/20/Review/闇夜的怪物/index.html","83e57e5db0e6197f549cf2311f7cc8b2"],["/2020/09/27/Review/14歲，明日的課表/index.html","96279c4f2e7626c686f34c49df0f3219"],["/2020/10/04/Review/致十年後的你/index.html","dc31a8c432f12ad4e22aa6059569ea75"],["/2020/11/08/Review/滅絕之園/index.html","0c5e5747f295f6e47890e35add64018d"],["/2020/11/15/Review/將愛拒於門外/index.html","eb74c9efedac5b4adf8e6bdea4780e4d"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","9016f9c63101a0afc9f275b05d0d13ca"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2a1c038a77a67517f0f3b69f69db4527"],["/2021/04/22/Review/道印/index.html","7df60e922b2828b9a61b320846a27a07"],["/2021/05/03/Review/戀入膏肓/index.html","e7e4b5b8c0d5b8d537dd4a87c16f6a59"],["/2021/05/10/Review/Dice/index.html","fef4c2ab761a0628ee7de784c288d20c"],["/2021/05/15/Review/魔女之旅/index.html","1808abc78aa10623c0ca202b20041cb9"],["/2021/05/28/Review/戀愛寄生蟲/index.html","03369168772309ddc487e04d2b47c8e6"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","3508707d914bd84942b985bffb7d0ba4"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","faa7c5f983084b03905dc222e3a43311"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","f87c25bcc1453c472bee263d95a70626"],["/2021/06/05/Review/流浪的月/index.html","bfeddd8275a2f610738200adcdd39d42"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","600c76a775355bd7810979a864be3a2f"],["/2021/06/13/Review/第一人稱單數/index.html","8fa302e4f68614bdebdb577f9e5594f5"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","dca69f449384d25e4e085b30dbc6d838"],["/2021/06/16/Review/願你幸福/index.html","2d56844665bcbc6b76fa9fa2f6f62d90"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","61325ff251ed258e108266b947ead1e2"],["/2021/06/21/Review/神隱少女/index.html","5a7b1bfb275db0f52a2c1d771f546ddb"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","56c00282154d830a79e30f9d0d7d7b18"],["/2021/06/23/Review/天空之城/index.html","88c9f7d525e73c948ec2b854d3791e36"],["/2021/06/24/Review/魔女宅急便/index.html","2bd9623ba2fc3ae83d0f457fb0fedd9f"],["/2021/06/25/Review/借物少女艾利緹/index.html","c8ec8bd725214cfd45fe84201dae8edf"],["/2021/06/26/Review/魔法公主/index.html","06e9bb0e5b9acf8f3a7c6fd7db0594a3"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","80cda5dece51fd8d1b71b714b7d96f75"],["/2021/07/04/Review/飛雪與劍/index.html","3581c2107823b6ae9263d13d6860752f"],["/2021/07/09/Review/地球防衛少年/index.html","64da095d4306187487d2697b6b278cb9"],["/2021/07/12/Review/Angel Beats!/index.html","990c2a47f26216eb5c620b610f11f027"],["/2021/07/13/Review/Clannad/index.html","f62d6b10f34d3c9de08b73bd35296058"],["/2021/07/15/Review/AIR/index.html","8a4c67e233cec34c9d3de6a50b44eab5"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","88a9e28401da0623d03e7e8d2431c142"],["/2021/07/15/Review/螢火之森/index.html","d9eaee307fc3894a65c465599bc52fb6"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","3c0dca4ee9429e93cd868be32e8129c6"],["/2021/07/17/Review/奇蛋物語/index.html","0761264eb0e6cb0c4ca2f14ecd4600a6"],["/2021/07/18/Review/Vivy/index.html","7a483e59619d89938a41c3419093cfda"],["/2021/07/18/Review/請妳消失吧/index.html","5df3d7670489242d354932ab7c9ec025"],["/2021/07/19/Review/漣漪的夜晚/index.html","6b74d6a71623eddf390ed9cd5e8b0826"],["/2021/07/20/Review/月色真美/index.html","8e375ec43d7498ea2146ba288c237810"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","be04e11e06f49532de041b6cee13a853"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","2508d64603c6c0a6ad7a3ed9111115de"],["/2021/07/22/Review/罪惡王冠/index.html","9b0d10f378f6db3c8e2b447c02526c93"],["/2021/07/23/Review/弱角友崎同學/index.html","a686beb6531f2e64199af48209c6e26c"],["/2021/07/23/Review/惡之教程/index.html","c816668d368b3f6977e76f237f77c95d"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e47aa2780355b8d694e9ba1afb39a2b5"],["/2021/07/25/Review/魔王勇者/index.html","b06b7148a4c18b145d0815c66857b4ea"],["/2021/07/27/Review/一年A班的怪物/index.html","4890733612a7dd7f8240760e4a6ea5bf"],["/2021/07/27/Review/奇巧計程車/index.html","36713369bdba63c40e22c1c8009a6b04"],["/2021/07/27/Review/專情的碧池學妹/index.html","0580ffecb3b571ff37f27e50573b8a8f"],["/2021/07/29/Review/只有我不存在的城市/index.html","2b3d06d37d09eb17e6a0a3e95dc35095"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","d286883d6b62e70d3ca79ba974a63b07"],["/2021/07/30/Review/可塑性記憶/index.html","ea285735c6217497e9b1b94cb3a6a6c5"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","ce77ea01b612dc0f4e1bceb3c2ae040f"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","6ead4b8521da5ffa009104401904db5e"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","a4347cba178a8a002d8c36763b38903d"],["/2021/08/25/Review/清戀/index.html","6f8d555de208a919cd8bfd1922393d50"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","3d9aca7969d83f8549e80e7d56e134a8"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7a7a162b99d1f855ea56333afdb6ac7a"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","4205e9a29591adb8f557f56c15309169"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","5d4a587112bf3503591ef4a55b38c898"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","5822df02f9be1467a6391f8deed28223"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","5d6893e1b5e0056c454c915f9dc4362b"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3ea2404c9bdea5db89877cc3a1fa2f2a"],["/2021/10/16/Review/龍與雀斑公主/index.html","922c46cc8f5b3f4daa5e2890f3cad119"],["/2021/10/19/Review/孤狼不想開後宮/index.html","6b5ad825f7512d942cdad1f4622e0396"],["/2021/11/13/Review/徹夜之歌/index.html","ade79340e414140c84a454f065af6841"],["/2021/11/24/Review/武煉巔峰/index.html","53a915c18e28d807d7422f5d4c7f9b94"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","b2d380644dc98e47e7daa600101dfa7e"],["/2022/01/28/Review/神醫凰后/index.html","a30db7bc0837d48d2dcc1689d19f9663"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","0fa44c37abc158542e518c55184c0793"],["/2022/02/13/Review/夏日幽靈/index.html","0dbc9967074463e3917cc639aad64eac"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","38ac6fd290ab7df2361e2d6c9c5b4bcd"],["/2022/02/26/Review/賽馬娘/index.html","670336b6e708c2434ab41e9fffb0258b"],["/2022/02/27/Review/大欺詐師/index.html","f65ddfbfb6ebdeba1c37601bb572e80b"],["/2022/02/28/Review/前輩有夠煩/index.html","44457d9e99e27df3a97a1ff7ad0e3e4c"],["/2022/02/28/Review/碧藍之海/index.html","3bbe94827c85d536fed623f65ac6c859"],["/2022/03/05/Review/落第騎士英雄譚/index.html","bcdcb9a0a0a83638c07f70fdb75bf2f7"],["/2022/03/06/Review/Another/index.html","b5cb06ec80a1b190194d4011f132c237"],["/2022/03/06/Review/入間同學入魔了/index.html","40ddb9a8933d4c0a6f67421a60c5666e"],["/2022/03/18/Review/再見宣言/index.html","b92ed13096c40c79a28f1fe988b8148e"],["/2022/03/23/Review/生若冬花的妳/index.html","304c10e0f54215f60a540e2f8a631121"],["/2022/03/25/Review/天之弱/index.html","2583ecc921b58d9a357640b4bdcafd74"],["/2022/03/31/Review/滅了天道之後轉生/index.html","54d3ac8296768156db6a16e4340cd319"],["/2022/04/30/Review/泡泡/index.html","bf841d81e34c8ebe7609d1a37003771c"],["/2022/05/04/Programming/Dynamic Programming/index.html","97c173cc50c28b36ac41de424825a251"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","8bd0a9a838b8cb39284830e5fd0fbcf4"],["/2022/06/13/Review/偵探已經，死了/index.html","1860e2deb2db14e70b918d24194823db"],["/2022/06/14/Review/黑色子彈/index.html","a828d4221c94f55d5ab7ad50a6fbde66"],["/2022/06/15/Review/黑白來看守所/index.html","08a2291171c3d3995ad37d052d9d2282"],["/2022/06/16/Review/虛構推理/index.html","d2ab06cdf7803c83cccab9e3f0164c78"],["/2022/06/17/Review/戀愛與謊言/index.html","777c93cac89b949a6a15e228897b68ba"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","576354c0c9ba3cde7303b46f8e596e3a"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","3b25846a56600425cff4a52619e72f72"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","9f43ccfd33b52ef82c2705b1474c01a8"],["/2022/07/03/Review/Hello World/index.html","a1d0af5f67cc11824d0e2fe0a59e61f1"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1ce9d9433d1460cc45ffa28c585e3c6e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","0e6ea927d04deb880af7eb7693e8876d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","61b1e4934d67cddb5d1c2ae1c232e034"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","2604aae4d8a0c770beb72918dfe8a8a3"],["/2022/07/16/Japanese/動詞分類/index.html","ba08545c7b8349cd62d4daaae2d269fd"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","3b1951635717c227c0500250ffb18e92"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","1a9267fc18931492a4447ecd110fdc37"],["/2022/07/17/Japanese/音便/index.html","d281074d2effb575b4287af33f05812f"],["/2022/07/18/Japanese/動詞 時態變化/index.html","0a76843fcb00c270053d0a6955ca3031"],["/2022/07/19/Japanese/助詞用法整理1/index.html","2bdc01ea5e23b2ec8b1342c5603b93cb"],["/2022/07/26/Japanese/助詞用法整理2/index.html","3c79f36b19d1d5e6ea1f9914d541b2d4"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","a1b0b652c85dfbda3324c2bf5fc719df"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","35c4637727e45c61cfd4fcff360eb80a"],["/2022/07/30/Japanese/疑問詞/index.html","f7c4def292e683c16c06a25854199482"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3298d23384ad659f27b666a2ea45e9ae"],["/2022/08/02/Japanese/副詞整理/index.html","699bedaf13b65eea8da974bceb1e6b44"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","644a5414ba656ea3fc2877c7ad7228a3"],["/2022/11/04/Programming/Data Structure/index.html","50d6dd4a489a86a00b60ae66d066ea24"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","1c6ee0fe70ce4f7b00d77cc99619927a"],["/2022/11/22/Review/組長女兒與保姆/index.html","5accadeb425561bea4aa9dd30d99de6f"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","415ddc424cce7882aab36ce5e6bd8d01"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","3220e9007fb453ca56cd54199e119c85"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","5708acef8c700ab68b5b13d84c6b9044"],["/2022/12/31/Lyrics/一番の宝物/index.html","4e84646f8736670c75e0315d6b6a8b7e"],["/2023/01/01/Review/あの夏が飽和する/index.html","34b8096cdaccbb00dd82b5b5931b98e1"],["/2023/01/02/Review/孤獨搖滾/index.html","a5ef5a88578b775da4080c7b33b44480"],["/2023/01/02/Review/藍色監獄/index.html","010c5cfe38d174e52e3215f272ac5969"],["/2023/01/03/Review/來自深淵/index.html","5adc64e49c861b90c5d505c41a1a4ce2"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","4a19f978d92d549ac80c766a22af6244"],["/2023/01/05/Review/處刑少女的生存之道/index.html","9b8d70169ece3ff610b73b1d2752e940"],["/404.html","5745de1563e4ec86326265fd8a328ab3"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","06c01726492619474a78a73e7619dba0"],["/archives/2019/07/index.html","84fc12c21e0d44684c7fd0588a03b1f4"],["/archives/2019/11/index.html","d0754055d6b8f29ccffd944e2879eb16"],["/archives/2019/12/index.html","348785dde1f8a033383069084aebec12"],["/archives/2019/index.html","5073d5363511e369af496e0d474808a4"],["/archives/2020/01/index.html","9f540695b56d1a49b3826654a7a5b187"],["/archives/2020/02/index.html","30ce66d7579723fb9fdb7820e1dc683e"],["/archives/2020/03/index.html","5298151f825c3f473add50ffc98f206c"],["/archives/2020/04/index.html","b70af60fcd77e52834a961bd08c41570"],["/archives/2020/05/index.html","48efefce76e76b58a36d5af5e1f1616b"],["/archives/2020/07/index.html","8706e30f492e57f8c2e98d34728b8e35"],["/archives/2020/08/index.html","fb4d12ca345b8654f7c44dababa31e97"],["/archives/2020/09/index.html","89d21ef8873e616f62a13507fca77afd"],["/archives/2020/10/index.html","7dcc77f9d143a18cc6abc4edc83c80c1"],["/archives/2020/11/index.html","4ef7844b3b536295346a33ac072e9ca6"],["/archives/2020/12/index.html","d581219f45083b02d760e665fc0f8077"],["/archives/2020/index.html","1d5f81040ae0b5cd3d197afbafa2adb0"],["/archives/2020/page/2/index.html","44720ed4d661fe2796bc1a0d068b5687"],["/archives/2020/page/3/index.html","cde2e6b118823b79a9a42d5d2bf5bd53"],["/archives/2021/04/index.html","8b3a2b6d945dad7be3640f346674c514"],["/archives/2021/05/index.html","fd15e27fe626930b8416a75f6970df93"],["/archives/2021/06/index.html","6219abc6eb63a88617ba3831db420883"],["/archives/2021/06/page/2/index.html","f91bb3910dadb3879c5d63bde37c6755"],["/archives/2021/07/index.html","dbbceec2d6c17cea5d860952178ad4e2"],["/archives/2021/07/page/2/index.html","584eb20d9170e6d06fc6163a4f500513"],["/archives/2021/07/page/3/index.html","dd77d7c055d16c8bbc2e5eede940f333"],["/archives/2021/08/index.html","3598b669bfb12e66b58c459d3cc5d4a8"],["/archives/2021/09/index.html","5b94767af4f04b83394d0c0eb8cac3d8"],["/archives/2021/10/index.html","01a9ad9a1172db7a0eef16ccdd5aca72"],["/archives/2021/11/index.html","37b159ed302d7660c0eed75bc12115a1"],["/archives/2021/12/index.html","811e8c2fb49482861858d26f38478e85"],["/archives/2021/index.html","4bd6c017519b8efe8915d0e872dbc052"],["/archives/2021/page/2/index.html","b12fbadfd6b91d5471b7a279845562b0"],["/archives/2021/page/3/index.html","378ee7593fe8fa499a3d594d9f18e347"],["/archives/2021/page/4/index.html","034b73d219a2c8f9127bf9be593863f6"],["/archives/2021/page/5/index.html","3be0bce92d8006867897c4f3b3ddba26"],["/archives/2021/page/6/index.html","2303f7745222aa4b6835ad57fe07faa6"],["/archives/2021/page/7/index.html","8b46aff8cf406488f8526dd5d41e338e"],["/archives/2022/01/index.html","dd148501c7eff988671110a822635d23"],["/archives/2022/02/index.html","9c66a55ad903475fd361abb8b6a1de66"],["/archives/2022/03/index.html","c5c516f5a8ae0d06aa49f095ac32d4c5"],["/archives/2022/04/index.html","6ec317ab573941c7e20f5ff82510d764"],["/archives/2022/05/index.html","342446c535c9966bbf18be08e076f6f2"],["/archives/2022/06/index.html","69f1746ec68ad776ec12a5b9583afaa6"],["/archives/2022/07/index.html","d60172911722f95618f7e7a97377f7c0"],["/archives/2022/07/page/2/index.html","95950e59e0bdda1f20d3256be7763285"],["/archives/2022/08/index.html","fc6f3944527186a783ae069a529dfdc6"],["/archives/2022/11/index.html","3c979f73c68aa033b047cd8d0f32ca38"],["/archives/2022/12/index.html","95e32bb52c254b273ff7fd0c6bc3a860"],["/archives/2022/index.html","92e36a72decdb41f118cf267784610d6"],["/archives/2022/page/2/index.html","bd7b6214fee8add23098fdff6823fc26"],["/archives/2022/page/3/index.html","8859bb56295d84db71e32fdd15493dca"],["/archives/2022/page/4/index.html","3c67b6c28c8a8bda71c2db81d82ba3e5"],["/archives/2022/page/5/index.html","1659b4bb900aea83026e445a41cd07c9"],["/archives/2022/page/6/index.html","81b58c2e739b043bb53e4509f4985b49"],["/archives/2023/01/index.html","f1f61fa08d40a8d76be7331cb59dfd3d"],["/archives/2023/index.html","e5b4a71d62cb537b9df3b710ca6f228c"],["/archives/index.html","b69b81b275fc9bdbf6bc2d50ccc38890"],["/archives/page/10/index.html","69a6347ac53c2925319cbacdaf3ab33b"],["/archives/page/11/index.html","dcfebef8c1f86b3656b9710600296fb7"],["/archives/page/12/index.html","1d82cb05b5a7503418b82bfd42e4c0b7"],["/archives/page/13/index.html","640df0e5adff86c629a673737f6c9615"],["/archives/page/14/index.html","f4e47e726c50e1a128922fc1db418acd"],["/archives/page/15/index.html","c8f75cf87073e90a2642d8f69105aa53"],["/archives/page/2/index.html","4abe0194ae0795844c54aa1624831877"],["/archives/page/3/index.html","c64014fe0369b24f7813568a4f176481"],["/archives/page/4/index.html","0d129a69f284b16d17743b22ea685d73"],["/archives/page/5/index.html","22030005165a54cc783364778c703d7d"],["/archives/page/6/index.html","c0cc897cb32546e0e136ee73376e29e5"],["/archives/page/7/index.html","fe9ca115e6d52fd25ae24ef58d151923"],["/archives/page/8/index.html","61756d41d81bf3c85e0a2dd5c026dfa8"],["/archives/page/9/index.html","87f0f895a74d60844a9bbc2069f7c677"],["/categories/Lyrics/index.html","e4105134ec3e991a8199f88a0970d0f0"],["/categories/Programming/index.html","4138371105eac446026f2612442b3987"],["/categories/Review/index.html","08700a5219adf35297a99774e8173f52"],["/categories/Review/page/10/index.html","b4ba98cf08a5ccdf30c6daee41616f67"],["/categories/Review/page/11/index.html","4dcbdac207ac18a259ccb2d77ae08894"],["/categories/Review/page/12/index.html","eb893b628c43dda1496c7512ba500fe9"],["/categories/Review/page/13/index.html","c930950de106cc2b6f8050bc154a3d66"],["/categories/Review/page/2/index.html","d78effa5ed82dbfe8f9a84bb6b8ebf83"],["/categories/Review/page/3/index.html","19929d53b30b719f0b18b9e6eb351608"],["/categories/Review/page/4/index.html","ecc56e47a2c9e4d5e378317306c8ece5"],["/categories/Review/page/5/index.html","4dd0f312d2a567fcfc96ddf9c0f2914d"],["/categories/Review/page/6/index.html","b7837e35782a1403f7667ec5997485a3"],["/categories/Review/page/7/index.html","d860ca4cdac643b992f9ed1d49dc5d4e"],["/categories/Review/page/8/index.html","6e5295b409ee2d7051f583759ebc7578"],["/categories/Review/page/9/index.html","40d2c5c3ac86c23ade6586decd311513"],["/categories/index.html","834aa503320c5945630ae4d2978bc390"],["/categories/日本語/index.html","8a1fa863aac8737dc5148430843f69e5"],["/categories/日本語/page/2/index.html","421be467ce5d49491c7186ae321875b6"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e7c2c7fb54cacf0ac8cead3ea8f77ebb"],["/js/custom.js","2b7e785b857773766c776e2af8375ca3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","15d103b3e07b33ea12c7cf11271dad92"],["/page/10/index.html","0af5e4d5b7185b2323e442633f5a8482"],["/page/11/index.html","5e34c9e9795154f7559ad318c0b8761f"],["/page/12/index.html","7e4b0cbabd85ba90d4e7104e434f9528"],["/page/13/index.html","14d7e90712bc49c3261836aa0cda5911"],["/page/14/index.html","64d39b3e5029c00aae77f49b7a849b92"],["/page/15/index.html","547feb5138f0c658e00f93e77d8da6e7"],["/page/2/index.html","e96b05d85e2679a34895b9ec05578bd6"],["/page/3/index.html","e6dca01e92a40534cc08fff654368e2e"],["/page/4/index.html","11de6dba7164ba3537ef021f267eb51f"],["/page/5/index.html","3b2c20b8270386fc9bb653b5c34b13d8"],["/page/6/index.html","63e97673c9ae6d2aea8984cb8248d4c3"],["/page/7/index.html","ba6697cb6349fdf93be349f39944a465"],["/page/8/index.html","dcdd05d596dfc9ad72e993c1019f019c"],["/page/9/index.html","fc336eb5d58144b09ba6ddf3d6765e6b"],["/sw-register.js","b1a81be3a6164e60ff55b4cc3b8d0be1"],["/tags/10分作品/index.html","32ec449de9c2a774e7b567e55b9cc4ed"],["/tags/3分作品/index.html","67dcf942c155eec7f754000c2ee115cc"],["/tags/4分作品/index.html","110ec118e9b0877e889846eac5f103d6"],["/tags/5分作品/index.html","b9902e867574241a7636f9ed9d306094"],["/tags/6分作品/index.html","30a620fc9a0c2fe85d920875bf7f0abd"],["/tags/6分作品/page/2/index.html","16f0381c29b2a005cd9d8d3a1365fe79"],["/tags/6分作品/page/3/index.html","44ac7af71e3921ef70d80a085dae11a7"],["/tags/7分作品/index.html","b4a628f7fbbc403bd7d050fbd1c10a60"],["/tags/7分作品/page/2/index.html","96af5f2122fee6886d3d470117411c4c"],["/tags/7分作品/page/3/index.html","9ac90b2807805c8e8b5d94f91d58a87d"],["/tags/7分作品/page/4/index.html","e0479bb9a0c498a52d75572b0e6491ea"],["/tags/8分作品/index.html","8c1a8a57c2abff745765b7a2be9b1e91"],["/tags/8分作品/page/2/index.html","870ca9cd194c1bd08eb4c6a3cd680153"],["/tags/8分作品/page/3/index.html","9be9a2fc74dbd9c5b95b9cd4ed4aece5"],["/tags/8分作品/page/4/index.html","66b85e23405c4ca285880dc20f55098c"],["/tags/8分作品/page/5/index.html","88227c87ef6912a9ec5146e03c73cbcf"],["/tags/9分作品/index.html","9f8ed9382e48756851ff0778a8785e69"],["/tags/Lyrics/index.html","817056ed5f0e7c3c675747defc2061c4"],["/tags/N5難度/index.html","847d276c754c8dc3a346c452605b45c4"],["/tags/N5難度/page/2/index.html","694d8885e66cc642020f979089ac18d0"],["/tags/index.html","722a1d4d8fb26e95db8a71403181f6fe"],["/tags/アボガド６/index.html","6ec21de79998ba3b41ba07e7fa417172"],["/tags/三秋縋/index.html","56ee8e6927a7e43079e10b32dbe84752"],["/tags/中國武俠/index.html","94a8fef51be8d0bf081dd1d4c63ec20a"],["/tags/中國言情/index.html","885b2dde7b809c07d5d21c65180fe40e"],["/tags/二宮敦人/index.html","5bdd2f60e633baa971a154d6997cf6aa"],["/tags/人性/index.html","3aeb5a8526003e8c351dd41d826d617c"],["/tags/人際/index.html","d36e24559fa971e30db2b0a799a18d59"],["/tags/住野夜/index.html","5249d61d9bc147149d6e834f5a2eb178"],["/tags/佐野徹夜/index.html","6009255e168954b10598c62c1d1e2f59"],["/tags/努力/index.html","9ab60d79e90eb7eba126ccaf9bad64af"],["/tags/動畫/index.html","30d9a04591506d0594d2eba52c436a73"],["/tags/動畫/page/2/index.html","c22108c9c4f61f435350d3365fb2479d"],["/tags/動畫/page/3/index.html","e55a8f622cd228ba092dfb29a5c986c6"],["/tags/動畫/page/4/index.html","195f7b7877be36adbe9f5a9e747531e8"],["/tags/原諒/index.html","546236ff0c1917a71bcb10cbba38a3ba"],["/tags/反烏托邦/index.html","4d14901639fa0a8e016d207ceb6b7739"],["/tags/啞鳴/index.html","374ff5df4f8fadd4774087cf1b5b646c"],["/tags/喜劇/index.html","afe38d4abfeb31315cd2ecdaf9732109"],["/tags/夢想/index.html","b5f673cf721a4540e9665187542cffa8"],["/tags/天澤夏月/index.html","549f7ddf6202d4d60fc5d616d122cdd7"],["/tags/奇幻/index.html","176a84674e4b4a9794b3f5b50903663c"],["/tags/學習/index.html","11bc16d7c8f9be553b3f8e0e5568daee"],["/tags/學習/page/2/index.html","8889d56cd4dd4a102728db97ad1142e2"],["/tags/宮崎駿/index.html","7f5ab3ba64a7ff7185f0d2804426163f"],["/tags/小說/index.html","4c2d1aa77e1eba6c0d5c89a64354bb96"],["/tags/小說/page/2/index.html","f7dc115ce3a422bb04b99b3cf81f491b"],["/tags/小說/page/3/index.html","4adcb1fab08f5a0498600fb2a8f205a9"],["/tags/小說/page/4/index.html","b9790b0a85105e92461d4f0fd6513a5a"],["/tags/小說/page/5/index.html","3e1fb4df521623d9bb73699d4750b9df"],["/tags/小說/page/6/index.html","97ac7360a2f1260a6489dc80090f9f4f"],["/tags/小說/page/7/index.html","f95bb15cad08762c0b0b6445afe8c9d5"],["/tags/平淡生活/index.html","925b322734b7360f40db56b4e025c05e"],["/tags/幸福/index.html","bb279b94c9e0f93a483bae47b3330c18"],["/tags/志茂文彥/index.html","78f181490c96840a516ddf43e36fdb4d"],["/tags/愛情/index.html","33b79b26e8faa08dc6b7b85c1a1e9525"],["/tags/愛情/page/2/index.html","202d84d977156d47bb42d6b604effc84"],["/tags/愛情/page/3/index.html","6dc7a7811bf1d93218c80a10b8d5e4a5"],["/tags/感動/index.html","a8eee956898cba520f3595eb2ca3284e"],["/tags/懸疑/index.html","d9df737563c19c1919898a95c9643014"],["/tags/懸疑科幻/index.html","92c79c5725ce80d95f5cfd582cb480a1"],["/tags/戀愛/index.html","47e0b10dc02fbfe93eaa4b7b46a41c45"],["/tags/成長/index.html","28fe1a43697dd224d15178884056619c"],["/tags/成長/page/2/index.html","65aa49a3e8744b58ea9d42601cc371c1"],["/tags/戰爭/index.html","bc80376f3c0028bc2f17fb75553cbb0c"],["/tags/推理/index.html","a6b6cc9b9bd73dace2740c4e51ceaab9"],["/tags/搞笑/index.html","d125d711c61be13180bd933d6fa95f43"],["/tags/救贖/index.html","ee919eff32a6a2b9a6452f780a1251a4"],["/tags/斜線堂有紀/index.html","4bfdf73b19d268e90ca28ae78d0bf05f"],["/tags/日常/index.html","eb6989ba8b2e21bfab63ad824dc34e0e"],["/tags/末日/index.html","45bc345cf3b6c538f0410aff7bf2a751"],["/tags/校園/index.html","a710f7b7733eb39c9dbd7aa116945623"],["/tags/武俠/index.html","e4cf0817e4d3583cb3b00259b3d94bf7"],["/tags/武俠言情/index.html","b8a8dc0358a2e70875fb10e7ab5ba20a"],["/tags/漫畫/index.html","1e96e70eee975b246c8fda6b3b6ea97d"],["/tags/生命/index.html","8302c238f3b15a441d4a874d4440a179"],["/tags/生命/page/2/index.html","2394611e3ae79b7d62ecf15e3274b84a"],["/tags/短篇/index.html","cb06760b4811798acaef0be3f7c81202"],["/tags/社會/index.html","ff1961c40c56b3d725b7bef11da830f7"],["/tags/科幻/index.html","6b5e0b743c6f501d6820efe8917d9f22"],["/tags/童話/index.html","e858ac215b9fe92e5129ae64716ca439"],["/tags/競爭/index.html","2c233e3bf467554080429d58c67f89c6"],["/tags/自我/index.html","c807fa62242ba24271b837cfd04257d9"],["/tags/自我認知/index.html","3c69b3dc0fa83b0672164e18f3f70645"],["/tags/葦舟ナツ/index.html","f8ecca37066bd006f3895987ce8fbed4"],["/tags/藤萬留/index.html","12e30775e67660b01ea1cb2666ccee4e"],["/tags/親情/index.html","930b477651eb1476c4ec5f0c6e0ab5b3"],["/tags/言/index.html","3b293e245ab6a4a20d3c18aae0731342"],["/tags/雜項/index.html","1d0d61d9837abe021374c0bf7036c4ca"],["/tags/電影/index.html","afb1a8869a493914a6a61bc8e9617114"],["/tags/電影/page/2/index.html","3e0d84cc08133f549be53b34ef59585f"],["/tags/霸凌/index.html","d703a717e2989abf7ec6feb485b01f87"],["/tags/青春/index.html","eefec349ad36d7d462712733989bff66"]];
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
