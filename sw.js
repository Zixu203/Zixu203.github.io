/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","7899d6ebea7ff43aae85de4a26679052"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","ef6ec99aeae81e3fd531fec25adbecc3"],["/2019/12/25/Review/無法計算的青春/index.html","18f628a6a4b108a51d22eeeec5ad41a5"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","986d9490433d81c294e72f255e630e4f"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","5e52fcd63b13a6da0c947cd0c4d0989b"],["/2020/01/19/Review/下雨天，不上學/index.html","2e1aac2287a427afeb938b6bdd662795"],["/2020/01/26/Review/三日間的幸福/index.html","13267466b25a9faeabd8a688ac9a12ae"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","619f55fa2136ed010d8f87765b3dd895"],["/2020/02/09/Review/青春期超感應/index.html","a0848dd114122c4d7c8c96ddc5ef7504"],["/2020/02/15/Review/又做了，相同的夢/index.html","0595fedc3c602b424599e2558ac029bc"],["/2020/02/22/Review/回憶當鋪/index.html","41df35ed1067d59461271c3af55af14b"],["/2020/03/22/Review/不適合自殺的季節/index.html","9b60a0009e0c596e9ad8096c3d310087"],["/2020/04/26/Review/我們都無法成為大人/index.html","de751e75d7dfd25d88f38f1eacccacdc"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9ba22c474cae15c0fb44b425cf281a0d"],["/2020/05/17/Review/人間失格/index.html","28effa898741ea9cb8b15513827f0dfd"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ad9e794f180ccbe570d0d9be5b0a5670"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","e0541081ad9dc8d9ffbbd81cff8cec25"],["/2020/08/01/Review/銀河鐵道之夜/index.html","12ae6e7d5e67ac521a459496ede2f9b6"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","bbf167d876e127ca09fc626284f29616"],["/2020/08/16/Review/15歲的恐怖分子/index.html","8835f2ee8506ad6499176b8ed8e4f6fa"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e64864f1b920b180d440ae4e602f2b09"],["/2020/09/13/Review/羅生門/index.html","da340e5fe0d84e72e71a2eeac6e72135"],["/2020/09/20/Review/闇夜的怪物/index.html","7ad0077a12606de066d331dd918bc883"],["/2020/09/27/Review/14歲，明日的課表/index.html","3350dabf5362ad8f9830ef934ee5a0db"],["/2020/10/04/Review/致十年後的你/index.html","80b7b1d1e9a3cf77c05f4386f823134a"],["/2020/11/08/Review/滅絕之園/index.html","20b3bb222b4e2b6e8f526608a7d20581"],["/2020/11/15/Review/將愛拒於門外/index.html","306a7f6373ff93821ff876ab74015509"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","2f4b10291e0d9feb77060903cf04c592"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","c5e99b9ea063a22aa15fa4690d878f62"],["/2021/04/22/Review/道印/index.html","a78cfb8615091eb60de1f1fb5bb4b403"],["/2021/05/03/Review/戀入膏肓/index.html","507afeb48e92253958b454acc6b04178"],["/2021/05/10/Review/Dice/index.html","10b1cae3b31d1db6a5e5e72ccf97013c"],["/2021/05/15/Review/魔女之旅/index.html","d8a31d06dd46bf4e73b345eb20482d73"],["/2021/05/28/Review/戀愛寄生蟲/index.html","6510e330359b20b8a635e4e26bbca8f0"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","a7e9e9c8ab6bdcf13bdc81e941378101"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","b8e0a70d3b95736e114c11335bf256a0"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","5cbb1c15403d592f375e76abfd2674f0"],["/2021/06/05/Review/流浪的月/index.html","3a64c2913cb8983c075f7f90183d587c"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","e933306053b8ffbd9d11ddf1bb6698a8"],["/2021/06/13/Review/第一人稱單數/index.html","ddd1f4086ed5630a36e7c563fd0d753a"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","fa653c4f45d92e34e7b4238ca59d0a9c"],["/2021/06/16/Review/願你幸福/index.html","0096adab16181fe0290a65c32e2359ee"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","f15150e880cdd7337a0ce03664e5c8fc"],["/2021/06/21/Review/神隱少女/index.html","ea116f1e485a8c680e64cc4fee4b32f2"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","105cba55444c460db1076f782e4fa239"],["/2021/06/23/Review/天空之城/index.html","9a2568684d1dfd4641328a22ea9cf439"],["/2021/06/24/Review/魔女宅急便/index.html","a6abd259bb022b39f76217121dc96c26"],["/2021/06/25/Review/借物少女艾利緹/index.html","fb4094e85bf42c1b97a8cb7bdf745d26"],["/2021/06/26/Review/魔法公主/index.html","76a2c89d088566749e47fcfcfba94cf5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","6dd663007d5827ecb51b5911dc2fdbe0"],["/2021/07/04/Review/飛雪與劍/index.html","b5af9b130a870252fa572eb62db1857b"],["/2021/07/09/Review/地球防衛少年/index.html","f401828b68b2c1fa275a17e5ca1c296d"],["/2021/07/12/Review/Angel Beats!/index.html","f02dce733897efb17c259ce69f0a182d"],["/2021/07/13/Review/Clannad/index.html","e998eca36301806378885d86dcc31f03"],["/2021/07/15/Review/AIR/index.html","a5a5b8225d890bf27e1121cdab6895b6"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","9934c0616b2e7992c08c587fb0758c32"],["/2021/07/15/Review/螢火之森/index.html","07349a8b6f456657e3d4b72a2dfb91b4"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","95e453d2620d7fd07ca375c591ea9d2d"],["/2021/07/17/Review/奇蛋物語/index.html","21193b92bee249369e960243e2af5244"],["/2021/07/18/Review/Vivy/index.html","b0657c596ef8b025bd41754916a2e794"],["/2021/07/18/Review/請妳消失吧/index.html","d96f290d04ee87275b68b19aa3874638"],["/2021/07/19/Review/漣漪的夜晚/index.html","ba2db68c5059661d702b9e97c765ad9e"],["/2021/07/20/Review/月色真美/index.html","b2e4622de392e9603be0cfd3f8f6301a"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","b0c68be452d87f025a2f603ca8be9179"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","6491a2b936503d5c1f720352a6c7b70b"],["/2021/07/22/Review/罪惡王冠/index.html","3eed7f513b96877e3d5d60c76ce854d8"],["/2021/07/23/Review/弱角友崎同學/index.html","f6340561528b993b345732e5597810c8"],["/2021/07/23/Review/惡之教程/index.html","1a6987a70a1498776678a96c0652fab6"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","baa9a47a31925583e0ddd9bb34452447"],["/2021/07/25/Review/魔王勇者/index.html","744fd94acb978d5faf6edff085e1230e"],["/2021/07/27/Review/一年A班的怪物/index.html","37befa5711414718f9d70aafc92200bc"],["/2021/07/27/Review/奇巧計程車/index.html","1b9da829f1612a1bd3eaf93dfebacb0a"],["/2021/07/27/Review/專情的碧池學妹/index.html","7ab8025d762b4034b6e7c3255762948b"],["/2021/07/29/Review/只有我不存在的城市/index.html","a4e27d980e09b290fe5f0dae6ab5bbd9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","aba1517a1e1b6ceee6f787f4bb02af04"],["/2021/07/30/Review/可塑性記憶/index.html","23fded9de6ac4f2ecc47f4caf1d8aef6"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","9c07da9e5e58f036ba2ef65ebe84ec94"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","52cc57b4e5a31018bf7080170a649d1a"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","cab0ed058f87ce5b08567b5fcf82662e"],["/2021/08/25/Review/清戀/index.html","b22a78d431e643e84dd0fba50eb60499"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","eed71eea85cfee3b4d05582c0d03a8d7"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","a2fdbf1aa995323ab1319069b8b5a953"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","b91fc153050955ce3e872b6b5c8d3608"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","a84b7db9ff47f1c0adc991b096a4e07b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","e95bd2663d226c771bbc94c732bf7ce3"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","d6e38172f0c01d1f03e17b23460168de"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","2c00e6145f7cb6803fdcc12ac58782ae"],["/2021/10/16/Review/龍與雀斑公主/index.html","6eb489fa118e0d72b872108b268af25a"],["/2021/10/19/Review/孤狼不想開後宮/index.html","3a393c8769a7b7693f76088ad30c20d9"],["/2021/11/13/Review/徹夜之歌/index.html","5c1f87ff37d5074322b3274935115bbf"],["/2021/11/24/Review/武煉巔峰/index.html","601c476d1d388eb89b050f23bbe0dc48"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","46e84f786e0a202eda4440707d40e187"],["/2022/01/28/Review/神醫凰后/index.html","c4102f932072dead8872bebe8da6b24b"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","04708b2f6b9dd95d0464e420f524c037"],["/2022/02/13/Review/夏日幽靈/index.html","4eaf6a57994bcf7e60258c6a0a5212b8"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","232e3271e9b3763f172329864983eb0c"],["/2022/02/26/Review/賽馬娘/index.html","79f68846e938cd338a680e5e720b012d"],["/2022/02/27/Review/大欺詐師/index.html","e1e679a943680fb19669c1ac60b8c78d"],["/2022/02/28/Review/前輩有夠煩/index.html","1fc50d1f106555a697e4486f2a0c98ab"],["/2022/02/28/Review/碧藍之海/index.html","6aa8d786e54935a76e0344aa39b0c669"],["/2022/03/05/Review/落第騎士英雄譚/index.html","96f5d39749a2d7a650816e56ed58df13"],["/2022/03/06/Review/Another/index.html","6c2b38331022c7b2951c2593b3043e07"],["/2022/03/06/Review/入間同學入魔了/index.html","4820efcdc67191a681c41629ee6faf2f"],["/2022/03/18/Review/再見宣言/index.html","8a92a27f1f86f6af3f996ff9fe9a9326"],["/2022/03/23/Review/生若冬花的妳/index.html","5a7492d1afda72b275b72c1ca7c0d2fc"],["/2022/03/25/Review/天之弱/index.html","5b8e4523638992c908bdfbbf899d1345"],["/2022/03/31/Review/滅了天道之後轉生/index.html","cf6edf56a19e8cdba5b5c2c6c5827155"],["/2022/04/30/Review/泡泡/index.html","f06ea138e47d2a487abef597283488f8"],["/2022/05/04/Programming/Dynamic Programming/index.html","7233340e26f59d54de120a910c808a79"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","f41c41daaf58df281eae8c66175c9334"],["/2022/06/13/Review/偵探已經，死了/index.html","93003a57c4a3423622c550b128c30a96"],["/2022/06/14/Review/黑色子彈/index.html","923002f08e71ece15209c6deb3039cba"],["/2022/06/15/Review/黑白來看守所/index.html","a6a2a84f59f551cf5d5cd8066a8a624c"],["/2022/06/16/Review/虛構推理/index.html","c05c51ffee6f528c90e29fa32e83dc6b"],["/2022/06/17/Review/戀愛與謊言/index.html","e5c7b5c69b084a42569dbeb0c24d309d"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","50f98480d2c8c24ae1e3616d11176c93"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","bf01b87851c1e4f8398ae2893b221381"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","0d77a22c28dcbbe24bccc92e35efed33"],["/2022/07/03/Review/Hello World/index.html","80b802a2fc56b9636e692d68ba5e0eba"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","77650db97a22651fdc5f75e3088bc79b"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","c9dde76da0d8b40947ff1b0f0a82c570"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a298c99bc0c80dac5893b21bb36e084a"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","e4c7866e1a46c668ade017db96bfacdc"],["/2022/07/16/Japanese/動詞分類/index.html","dcebd0d51213807d6e1632582d8782a7"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","edf33f7b8dbeb0997d87f7a3a6756e86"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","d428639e914646efcb440ecd62be0b4c"],["/2022/07/17/Japanese/音便/index.html","16bace1b076cbe4ae34dbbe3f562f5bf"],["/2022/07/18/Japanese/動詞 時態變化/index.html","9aa5d4a41e0dd0050efcd9516ddb4867"],["/2022/07/19/Japanese/助詞用法整理1/index.html","52bdea5398234dfab01d7284949dfd1a"],["/2022/07/26/Japanese/助詞用法整理2/index.html","1a6c0b7af4826e8a161407058520290c"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","8ffe3649aaeaac5df42c1e3e7c030209"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","fb7442b28a5e560993e33ac11db4dde7"],["/2022/07/30/Japanese/疑問詞/index.html","f7cb29eb53ebd76290b6ea697e0d5e92"],["/2022/07/31/Japanese/助詞用法整理3/index.html","0092bf154ebd388517d4eece1cc92b9c"],["/2022/08/02/Japanese/副詞整理/index.html","abcf201caa417152839beb7d05815821"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","6368cd84c35f5046969bb7e519d696e7"],["/2022/11/04/Programming/Data Structure/index.html","fc6fa2012761f5560cc03d2131cc8b33"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","8f30e3f90596dbebbed13004e217e57e"],["/2022/11/22/Review/組長女兒與保姆/index.html","39a66592371b907006de811b59879ca8"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","300fce05ee4c3fcc394511fccf46ae50"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","aeac83644ddac20750571e799c3de79c"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","3f724b959e0f9b2de451820b6a7dc6d4"],["/2023/01/01/Review/あの夏が飽和する/index.html","0c47d6c61068bed6555c2a7c4b930ffe"],["/2023/01/02/Review/孤獨搖滾/index.html","6e06a2cf94c452b6d2b1c2dd03cd84c9"],["/2023/01/03/Review/來自深淵/index.html","97d7d94ee70d8aeed2e3b6549cf9969d"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","64c40cdc85ed754c6cf1a1a9e86a979a"],["/404.html","80acfd7b2a509c5b1abd3700d805d1ff"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","bce51d8e47c65cd6e71ef64bb173fabf"],["/archives/2019/11/index.html","948cd831eb8acf337f4f2015de250a4b"],["/archives/2019/12/index.html","4784f8e4e2101810d7bfcbc429bd4134"],["/archives/2019/index.html","c7a3f5dfb36da71aa4222b27dcf462a9"],["/archives/2020/01/index.html","58fe578ac12cebf46c8b0210a04b6e9a"],["/archives/2020/02/index.html","82ddd4fba6dac54c5fafa6b9fdac68da"],["/archives/2020/03/index.html","4194498e7c6ade887ae47f2679ea7269"],["/archives/2020/04/index.html","f084e055603aee90ff3ad056c70c7312"],["/archives/2020/05/index.html","dd4d69f58fe9f41c50138dee00f7ed4f"],["/archives/2020/07/index.html","4030ca3ea70046a090e28fc4f06ad711"],["/archives/2020/08/index.html","53588923b31f34ac26625a8ff093ec71"],["/archives/2020/09/index.html","858997efe16e5ec067bf6df801e81ee9"],["/archives/2020/10/index.html","dbfcc68178a24c3d66f2de3d3838d173"],["/archives/2020/11/index.html","8776b09609cc7b993ab47273a2ea024f"],["/archives/2020/12/index.html","940db0f71678cbd69377ca68a9a336a4"],["/archives/2020/index.html","d4da568552db83f0c953a81003938658"],["/archives/2020/page/2/index.html","48b6b976e959b40dd14761c5d71d12ac"],["/archives/2020/page/3/index.html","a9e121a758d64b562d1824dd937c5440"],["/archives/2021/04/index.html","d6d57b2a3cd967821d4ee91d57515fa6"],["/archives/2021/05/index.html","642289f9fa7db9333e72b4ff95ef21a3"],["/archives/2021/06/index.html","812a2ff5aacee6b3453372c52d0871b3"],["/archives/2021/06/page/2/index.html","7a66b7f7110617f7185fdf8dccb49769"],["/archives/2021/07/index.html","ff41a9c80b518fca05f8ad2e44918b1d"],["/archives/2021/07/page/2/index.html","459b5a80e3a380f12963f3c55a0905de"],["/archives/2021/07/page/3/index.html","30f1851d5790436dfedd00d443c34de8"],["/archives/2021/08/index.html","e169291cc993b8fe5eea51461ade498a"],["/archives/2021/09/index.html","ae156178b95572218bc3efaf57b667df"],["/archives/2021/10/index.html","75f4280896747c65bb1d5387dee3b004"],["/archives/2021/11/index.html","2339a318c3924fe1ed8e653ada52fd21"],["/archives/2021/12/index.html","8399be15a8a26aaaab1a9fc956c3a305"],["/archives/2021/index.html","b7aa8b75a0f663ae0d5a280a9f2ee5e8"],["/archives/2021/page/2/index.html","d8a721d146b132f57a364b7a5ebe7ef5"],["/archives/2021/page/3/index.html","daf778f903f543cbc4e6e63abf32d291"],["/archives/2021/page/4/index.html","cb86650246db70f0a128953986226bec"],["/archives/2021/page/5/index.html","847cc6bc044ddd997b08b32f62967568"],["/archives/2021/page/6/index.html","3942a5d9655bdbdb3ecf23f5a73f3799"],["/archives/2021/page/7/index.html","44033e845fe841707d1b29e292191f10"],["/archives/2022/01/index.html","3cfaffeb954280e81922bd28654ee46b"],["/archives/2022/02/index.html","479e247930920c5b347c536fe43e4849"],["/archives/2022/03/index.html","e2ed5261f7c808c55e70884d728e2e7e"],["/archives/2022/04/index.html","568637f4750fb693b3ce1797147cfe23"],["/archives/2022/05/index.html","c45f7e84a8fa41ea7b63b84721f8e5a7"],["/archives/2022/06/index.html","a0a2f8ab2a1381297eed7cbebcd72fc4"],["/archives/2022/07/index.html","1e120bc580c492ab389633b6fa815115"],["/archives/2022/07/page/2/index.html","cee1472f86522d35722c6e88ea914a45"],["/archives/2022/08/index.html","14315f4a960c008441521169d8c0c449"],["/archives/2022/11/index.html","3588cb4d72cbcba56bb16d5844f770c9"],["/archives/2022/12/index.html","9664cea94517af5aa8d3113a71a8809e"],["/archives/2022/index.html","1e47637e62419d7b0f79594839774f44"],["/archives/2022/page/2/index.html","26c1f26a8ff81912be3604d4a4885489"],["/archives/2022/page/3/index.html","5f77fbfa4b3f5a2563b157165280a926"],["/archives/2022/page/4/index.html","50be282841264e5c65108b355702ee0c"],["/archives/2022/page/5/index.html","11db7e31b70d5483c7a0834d1e08389e"],["/archives/2023/01/index.html","485c60482d1d65ea2fda857d1178ad8e"],["/archives/2023/index.html","24af7ccfbf3f37abd720449394cb76ba"],["/archives/index.html","f857d1919eb74f310980258853924401"],["/archives/page/10/index.html","a645ce66e99f2d7fc5a83e452928857d"],["/archives/page/11/index.html","9477466b0a1b2947ac66c5a872454710"],["/archives/page/12/index.html","8d108068f5c16050d5d26ad564eea058"],["/archives/page/13/index.html","5315c9b27be8d819e416225cbace4e8d"],["/archives/page/14/index.html","bbf2eaeebe6da5a3183b8a0b9469db47"],["/archives/page/15/index.html","4333de78b658fff239fa35e21e52cba0"],["/archives/page/2/index.html","a11aa799e95e6693bd38abb10e78796b"],["/archives/page/3/index.html","c3b5e786f1cb00d3c5b43bda5c48e606"],["/archives/page/4/index.html","b08ff22faf69b197511a7204f2615ef0"],["/archives/page/5/index.html","40d25d94437ca3e1de78d9f5b1185114"],["/archives/page/6/index.html","dbde1243840d9f3aae2534c061a9b9ca"],["/archives/page/7/index.html","b929d1bdfc157e56a0b7d0d38507cd6d"],["/archives/page/8/index.html","a9a08e51d6a20b400b7a987faee68038"],["/archives/page/9/index.html","e32325696097c84e14f056b67558d52c"],["/categories/Programming/index.html","6563791688ee9d3ad5a1663ad68253d8"],["/categories/Review/index.html","9b06e72bb460483cb95211d72f9ffe65"],["/categories/Review/page/10/index.html","390e4abe11920dfc49c950bdc0a23c8b"],["/categories/Review/page/11/index.html","03cc88971604bf8da6c624bc2fb9cb04"],["/categories/Review/page/12/index.html","989742209856cd49ddbed4948a70ebe8"],["/categories/Review/page/13/index.html","9a9c95303280528c71d3eee02aaaa074"],["/categories/Review/page/2/index.html","569fbc08fe0aebb7324f5408c01e7bb2"],["/categories/Review/page/3/index.html","3be5fe9d8954ef3305644744cc2901f4"],["/categories/Review/page/4/index.html","2c43a607b3498b3bb5ce0207a1b10ce9"],["/categories/Review/page/5/index.html","2bb1c25bd506316684cebba1dc657768"],["/categories/Review/page/6/index.html","b1b36d8bebbbc296e10274c0b2797fc5"],["/categories/Review/page/7/index.html","213951a2d49d3c5ebdbefb2a1fd3ad9b"],["/categories/Review/page/8/index.html","d847e8aad626d6155b732279cdf9f8f5"],["/categories/Review/page/9/index.html","e62ea52f20a274649aea8b0e6a341dc8"],["/categories/index.html","eb553c1c8f1026487154d63cf3406444"],["/categories/日本語/index.html","119d030c28b65728b420d845fda54dd8"],["/categories/日本語/page/2/index.html","3a15915227d3f7af832b5dcf0a915435"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","571fd31d4dcf5aa5fe7f3ce01c857e15"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","4ac0fd21d19703685144014cffceee4d"],["/page/10/index.html","09575be5ce1dfa289ee19f6aac2c84f2"],["/page/11/index.html","e0853f4905f224d284afbf34b2809c8b"],["/page/12/index.html","f60c63dcd864dabec395ad8420e38b02"],["/page/13/index.html","1d1617906746ae04a053dfdcc3f55bf8"],["/page/14/index.html","335a5dbc6581f86bfedc05a5285f9e6e"],["/page/15/index.html","52d85301adb84159f7c12270652fad91"],["/page/2/index.html","5a3d36604396dff0f4d9f124ccd5670c"],["/page/3/index.html","5a3bb8603f4ee82431e0c666299a6088"],["/page/4/index.html","fe0a46e1f71f9859bd14cbe835a79423"],["/page/5/index.html","6b5a09fa72fb114baed718099a903d87"],["/page/6/index.html","5269efef032a0b1e46da9eb85ac03cd6"],["/page/7/index.html","1f254be5e589c19b6a8d071872cc6754"],["/page/8/index.html","0de277311bbf4db54806c85a1d3a1324"],["/page/9/index.html","adc675308bf96c19b7b74f779d3c6fb1"],["/sw-register.js","4de357a3d42da3b4f7ce53b88d984a6a"],["/tags/10分作品/index.html","a32e0d2cda2ad465b0ac65a04e311211"],["/tags/3分作品/index.html","fcf618fc7d804571251081708316621a"],["/tags/4分作品/index.html","cba747d5d2a26e9bdaa90cbc3c57c02c"],["/tags/5分作品/index.html","ae30803e2704b8829e556cefebb6947b"],["/tags/6分作品/index.html","78b82d3c18e933a35d545aa0f1f5d4ad"],["/tags/6分作品/page/2/index.html","e9f4c3fe24a608d916fd1f399d52e9d6"],["/tags/6分作品/page/3/index.html","0c669b9d65fc9806d10485a4b9e2b1b0"],["/tags/7分作品/index.html","10554708fa33ce634bf7e319ccc80c56"],["/tags/7分作品/page/2/index.html","93230002a60d563b125f55e30dae779b"],["/tags/7分作品/page/3/index.html","a6eb73785445542fc3e7f8e9d13f7d96"],["/tags/7分作品/page/4/index.html","6e767aa9823a105d61867e24f7cd84c6"],["/tags/8分作品/index.html","d14da0039402e10a2485aca8ecdb8b96"],["/tags/8分作品/page/2/index.html","a81cdca7d4f4cca17be02a49dd0007d2"],["/tags/8分作品/page/3/index.html","db8ee953aa50bc525848dd6e26b7496e"],["/tags/8分作品/page/4/index.html","d0f259018a193dd028555d5122a4c31d"],["/tags/8分作品/page/5/index.html","a51665df4df1d72a894acd69c7d2bc69"],["/tags/9分作品/index.html","9b0bb8678656873cb35af969303a02fb"],["/tags/N5難度/index.html","5ddf969c9ceb0c2d6be8bb4654499cae"],["/tags/N5難度/page/2/index.html","ab63c7c16ada9459d0a8616b3fd2b2da"],["/tags/index.html","612b1a9b923a412fabeb77639c727ca6"],["/tags/アボガド６/index.html","b6a95f35170c4fa6a02ef3d660062c5a"],["/tags/三秋縋/index.html","3d08c8b53760fc434d8c0c245c276a7f"],["/tags/中國武俠/index.html","c83085f61a85c7e5e85bb0a1b4c56683"],["/tags/中國言情/index.html","eb8cc84529f5dfb545c3b5302d8a86ef"],["/tags/二宮敦人/index.html","7a8dbf2632ce35ef957223e0e2a25bc2"],["/tags/人性/index.html","b43c8dfe595174a0041a0526b71aa8d7"],["/tags/人際/index.html","9106101272cab3cd3777f902675f9e6f"],["/tags/住野夜/index.html","b452994e641642e57518fe5bff912586"],["/tags/佐野徹夜/index.html","96f77f258f0ee2e9c538e29b7999856a"],["/tags/努力/index.html","e2e12b1a0fd4f07418fbcf1623767f13"],["/tags/動畫/index.html","eaf779a2603b36b86d35a1c76e32734c"],["/tags/動畫/page/2/index.html","5e9d95a1c7358cd7e50e2d52800530ed"],["/tags/動畫/page/3/index.html","3b917b3fb9f774b7ae11619318f8a29d"],["/tags/動畫/page/4/index.html","6128e631dc12391ce0a6d7b0af4c28cf"],["/tags/原諒/index.html","d7b43a0a9e9cf908141ee601698d789e"],["/tags/反烏托邦/index.html","ed9b16a9675e92bdf611dfdaac164be0"],["/tags/啞鳴/index.html","be4ba93b9b0cc3609cfb10ed72504fc8"],["/tags/喜劇/index.html","c3725858583e9b08c30bb7e49a0e0a8f"],["/tags/夢想/index.html","9fb52c9e21aecd2f9f03da62e4264f3b"],["/tags/天澤夏月/index.html","c8f6d8b31b88cb1aba0d57b0d2194bec"],["/tags/奇幻/index.html","74823e3dfef05969e80cf22e870237e5"],["/tags/學習/index.html","8ef0923537e00e81872e649e7cd4862d"],["/tags/學習/page/2/index.html","f6591d91ea2119e606336c496c5a74e1"],["/tags/宮崎駿/index.html","6e4252e8d07cf54c43b6f44a315378f3"],["/tags/小說/index.html","c851f5f60285871475f96b2a65190588"],["/tags/小說/page/2/index.html","f30948a82efc7b3de5043dafbec9571a"],["/tags/小說/page/3/index.html","2e3e3df7ce749fe5772a8ba706511cf8"],["/tags/小說/page/4/index.html","36fc8de59397db90e5004d8ed738ba86"],["/tags/小說/page/5/index.html","24ffa0517f8221ec501b72aa46620009"],["/tags/小說/page/6/index.html","5dc133a9639b97b5ff594f45cb5b9da3"],["/tags/小說/page/7/index.html","9e7a409bad8d58767dede71dc8751471"],["/tags/平淡生活/index.html","27d43e567b6ebf79f1eee8d6a6c8e422"],["/tags/幸福/index.html","d14d7ffc7edbc89825640bd4b095e5d4"],["/tags/志茂文彥/index.html","cb0fcc72ed0f2c97fcb061ffffe2a857"],["/tags/愛情/index.html","227a45d56a38da70c823e42aa91991f5"],["/tags/愛情/page/2/index.html","9cad46a653ce991984017ca96e349234"],["/tags/愛情/page/3/index.html","006c04da453eee1a23405f4233e8efc8"],["/tags/感動/index.html","9f3492e8d8f42ee1720447239282472b"],["/tags/懸疑/index.html","89c1b6b36062927ba4a5d25bca39b820"],["/tags/懸疑科幻/index.html","5654b9cb70a08b3307751c67490cc7bb"],["/tags/戀愛/index.html","30e7b772d77ba26d32c901045f9ad051"],["/tags/成長/index.html","0cb8b800a1921e3ba959574d9f05cbe0"],["/tags/成長/page/2/index.html","57db0e67eeebf99faa0d6386bd02e2a6"],["/tags/戰爭/index.html","7dde9f339ae141fcb85530a693aca345"],["/tags/推理/index.html","088fe800dd6c4d920c28fb9c2906908d"],["/tags/搞笑/index.html","9f45fa2c2ac0c4754e01c92ed519d00a"],["/tags/救贖/index.html","65afc7950357368023202ac47b024d31"],["/tags/斜線堂有紀/index.html","eff6f5dac548c1d4193192af1c8f15a6"],["/tags/日常/index.html","c126e29409e23801f85833d0c8cd354b"],["/tags/末日/index.html","70da052c6e8d8e04fbd224ab61a4ed6c"],["/tags/校園/index.html","1fedda9f2fb5ff3e5d160e324c77e63e"],["/tags/武俠/index.html","a62789f9081731b76ad0b441aeb23a09"],["/tags/武俠言情/index.html","d629ce8015594f61361bd3217e67bb18"],["/tags/漫畫/index.html","122770d4046366f1518a03e0233209c5"],["/tags/生命/index.html","4fef0b5e9fad82232efd066dacd155dc"],["/tags/生命/page/2/index.html","224c09aecf237e0a68107029772f1e1e"],["/tags/短篇/index.html","cdfa8111b89f4058bdbcda06c3c077d7"],["/tags/社會/index.html","cd737da93b627b0df6d412d3e52f36d4"],["/tags/科幻/index.html","454ec414f7ae76a656ee94b5c615db2e"],["/tags/童話/index.html","0a74800cf93a781df83fb5720a8fd866"],["/tags/競爭/index.html","0d5ef65e4af71d31fd3508dd356f6614"],["/tags/自我/index.html","39d73345f60916533c51bc643eb0ad52"],["/tags/自我認知/index.html","2ba3252b2a27f635ae48bd9e0042b3c9"],["/tags/葦舟ナツ/index.html","36a76b03896c3b25aa121d0f5a4cc3aa"],["/tags/藤萬留/index.html","c79cba775e4068c0a87aeb8f896e053d"],["/tags/親情/index.html","7185a684d22ec00daf943233e60a6579"],["/tags/雜項/index.html","0f9c5af8799070e38f321ed6917d121c"],["/tags/電影/index.html","0ff3a0d737e3877e326a519dea190735"],["/tags/電影/page/2/index.html","5a38065e9a4b1eb6ef978665c31dc9d4"],["/tags/霸凌/index.html","959ef36bdc68be3a6f4d7ee72a5f3541"],["/tags/青春/index.html","aa84efc20c40fd831f18245d6f68070b"]];
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
