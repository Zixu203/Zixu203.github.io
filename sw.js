/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","d9f8e8b6040bf2c07a7f2890fef29c15"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","0591f949967eb0951549aaf54a120393"],["/2019/12/25/Review/無法計算的青春/index.html","6ba1197246f38cc4b899f0790e4a264f"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","8cc27651beb7977683da095e2b05f6ac"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","71b4b34665a611625817600c63d4f994"],["/2020/01/19/Review/下雨天，不上學/index.html","c2176b256f2bb9f3d61408a6936bba75"],["/2020/01/26/Review/三日間的幸福/index.html","f401dc34575c3af418d830a669fd5864"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","3bd89d447a1f0b6eb92a11db7caf52d0"],["/2020/02/09/Review/青春期超感應/index.html","4328cf68f9bf8772982833da597ecf46"],["/2020/02/15/Review/又做了，相同的夢/index.html","aa53f32e957a1acf5fc29249a1dc0ed7"],["/2020/02/22/Review/回憶當鋪/index.html","c72abb437c57d55dde6fce8e19f03c12"],["/2020/03/22/Review/不適合自殺的季節/index.html","839d75bc93719ac620ef7633b6a5b3ad"],["/2020/04/26/Review/我們都無法成為大人/index.html","ba3934b83c8bf0cc23651e1672cdd5be"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","6ecf648c85565d28a193cdfad478693f"],["/2020/05/17/Review/人間失格/index.html","d0346faa4b7ca343708393b968905553"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","75fb8cd0f02827cef3a2e7f0165f69a2"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","5a2c3fd20f1b675dfcbc5ca165ebabed"],["/2020/08/01/Review/銀河鐵道之夜/index.html","a8da9ed9d10c089f5e4acc80f940ddc9"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","e894c5a711d39b27c6397dc8d4e69e4c"],["/2020/08/16/Review/15歲的恐怖分子/index.html","10fa862d9672a74b8489ab4f7a8e3ca7"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","da2b19b8e07420ae1a2c6171e76f83c3"],["/2020/09/13/Review/羅生門/index.html","5481467dbf4047a47cffbb464508dd6c"],["/2020/09/20/Review/闇夜的怪物/index.html","dc8eb91a398e818a4759b5e3458c8530"],["/2020/09/27/Review/14歲，明日的課表/index.html","0ff65434ff3e5f2f867ffc749b847a26"],["/2020/10/04/Review/致十年後的你/index.html","afd5601dbc33eae6d83afd738bc0fc4c"],["/2020/11/08/Review/滅絕之園/index.html","9d63578e0d2445646eeabdc329a309da"],["/2020/11/15/Review/將愛拒於門外/index.html","876cc1049852edbd2754e55748893d7b"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","4e4ce2d9589a05352a8171f8fc4a8a1f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","38bc4e25a4b3c5a7e68f393951f94ec8"],["/2021/04/22/Review/道印/index.html","d5fdff4b1198df358cec769263ed7c49"],["/2021/05/03/Review/戀入膏肓/index.html","fbfba1522fc8b3b0821b766941e21152"],["/2021/05/10/Review/Dice/index.html","7440921d4b33a8039d958309f0295a2d"],["/2021/05/15/Review/魔女之旅/index.html","fa46b15777563daea022c290ea852d6d"],["/2021/05/28/Review/戀愛寄生蟲/index.html","b15984dde1b391cba0685e73f7262b30"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","ff42896b711cb2d4e97759e31f68a3ea"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","189aa7da8dc84ae576903781efa760ac"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","822789c542217f7fcdeb091cc10914e5"],["/2021/06/05/Review/流浪的月/index.html","bdcf2c1ded48f608224faaca427a8144"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","89a231895372d3a7c69cd9893f88ffd2"],["/2021/06/13/Review/第一人稱單數/index.html","563dad439d0f6fdeb9e5c789e925a624"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","59b654d86b4a985dcfffb1508bc55453"],["/2021/06/16/Review/願你幸福/index.html","da0bb8219245170eb8dd2e2e2e4912de"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","3adf6209dd0888b2677db06c358bfd13"],["/2021/06/21/Review/神隱少女/index.html","0514f5bd2eeda00ab15d7837a9daf0b1"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","0671a748da20f5fa04ada48b9ea2266e"],["/2021/06/23/Review/天空之城/index.html","ca3a5788b13c92d7134cab82a50f441e"],["/2021/06/24/Review/魔女宅急便/index.html","43531320c7e2e55a56b31bec620d712c"],["/2021/06/25/Review/借物少女艾利緹/index.html","7b113fee70b39e0b045c9ce6b1bd28ca"],["/2021/06/26/Review/魔法公主/index.html","f693094d1fb275c8018aa3212a9d999c"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","5092a0243386389cc4fe1fc1157e2dba"],["/2021/07/04/Review/飛雪與劍/index.html","c6cb0a6b7b8c370915bed04a036a798b"],["/2021/07/09/Review/地球防衛少年/index.html","f03195629d297fe128704b1a01450431"],["/2021/07/12/Review/Angel Beats!/index.html","e95316924fdb60bfee0ebe796a605268"],["/2021/07/13/Review/Clannad/index.html","e68fb45cac5457fb86d23035ce753b24"],["/2021/07/15/Review/AIR/index.html","d0ab1f2e094e77871213941cf1f16c65"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","2f7b3d407631d1b7c1e813eabf0916b3"],["/2021/07/15/Review/螢火之森/index.html","638c33488d9bdd1e7f1a451615ff9097"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","88fabf7b8f6a114f2cabab6909b0c673"],["/2021/07/17/Review/奇蛋物語/index.html","384522200a9ce7b4d47eb9e57f910d11"],["/2021/07/18/Review/Vivy/index.html","5a7925285ab3e60a71a21e5e17378488"],["/2021/07/18/Review/請妳消失吧/index.html","7dde197f0469bb1bf18f1a2d6a8f72bc"],["/2021/07/19/Review/漣漪的夜晚/index.html","610293eb82f2def6944d784407e5f4c2"],["/2021/07/20/Review/月色真美/index.html","448119ea5edce9e93d7df9692a4196dc"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","7a26ad065397b22a7855eaa39bbb7631"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","5dd538c07f5be31325a3e1c250a80387"],["/2021/07/22/Review/罪惡王冠/index.html","73c8dd8f0cbdf788eedbe19afb796522"],["/2021/07/23/Review/弱角友崎同學/index.html","998d578d5278a68fc205dd6867942b61"],["/2021/07/23/Review/惡之教程/index.html","a0dd2f3472d13c1c3be3a3b83ef104b7"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","c4e780f2d4384418cb57e349b231375d"],["/2021/07/25/Review/魔王勇者/index.html","d62c349b68fa45645ef5177ec5337582"],["/2021/07/27/Review/一年A班的怪物/index.html","b40a1f57a54a51a0d7cc7bca10bcfeb6"],["/2021/07/27/Review/奇巧計程車/index.html","82455abac55dcd9b89ab70c3ff31a8a2"],["/2021/07/27/Review/專情的碧池學妹/index.html","4f3a40a8ddbfb1d3409e2adee1aa852d"],["/2021/07/29/Review/只有我不存在的城市/index.html","78c323e58cbfd5ccfa36385cb4e1d8e7"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","0373643ac60f5e78b600cfd6ea20fa01"],["/2021/07/30/Review/可塑性記憶/index.html","d10874eb4be1633dba9f65202777ab47"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","58738b3188a0ab9a83cd6c80ec67226e"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","0ee639512f2b403f7eec83456fee741c"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","1ded46b0577dcdee8327b166b89dd56c"],["/2021/08/25/Review/清戀/index.html","f8563fc6f7a6e4bf8aa27bde74c6103f"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","68bf1b7ac4a53544521bad51a07162ba"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","50bd889e0663eb4b7c4f3436445e0a61"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","2725bdb9b7a2546081b9ffc663bb4943"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","0f2b64ce3003e61043aadb0219ce9c78"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","2be45b0a84cc39f48a5ad0eef35ea0c7"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","5d379d5aa694f7009fa1ed1f393592e4"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","1ded828e1f2d33a5200147353186853a"],["/2021/10/16/Review/龍與雀斑公主/index.html","4b34d6545cdc91669223ff78ca55de87"],["/2021/10/19/Review/孤狼不想開後宮/index.html","1877bf5aadacb0cea28aaef05f364b77"],["/2021/11/13/Review/徹夜之歌/index.html","69c4959e71d08d72820b35d6ecc71ce4"],["/2021/11/24/Review/武煉巔峰/index.html","456098881c3991e6728ddecc5f1a33bd"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d8d62e03e2bf887f47bdb9505e289fd6"],["/2022/01/28/Review/神醫凰后/index.html","abb0c51e9d06e3020af90d3f3a47c42b"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","8a0fd2b015c0bf4a5a406f68658fa843"],["/2022/02/13/Review/夏日幽靈/index.html","715497f683bab5bf6ca0a40851fe870e"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","9e353bd8b4162a82461f148e26b216fa"],["/2022/02/26/Review/賽馬娘/index.html","023e117fb936c8a3b25085c639a4ce75"],["/2022/02/27/Review/大欺詐師/index.html","7962671b74735a9700cbd51c4e609341"],["/2022/02/28/Review/前輩有夠煩/index.html","f7112a7712be37773444a529cdca56e1"],["/2022/02/28/Review/碧藍之海/index.html","4a2c8e5105e8e6684672123a30065aef"],["/2022/03/05/Review/落第騎士英雄譚/index.html","586b8b29f25e430c2f525b76d16231a9"],["/2022/03/06/Review/Another/index.html","898e08689d66ad434f2354409a9f45a6"],["/2022/03/06/Review/入間同學入魔了/index.html","2016ab10dcfd643177f3d9d0fa62da7b"],["/2022/03/18/Review/再見宣言/index.html","ac6cd66e7059f923b67716fb4f4bff9f"],["/2022/03/23/Review/生若冬花的妳/index.html","da316fad3f5ca7f84b1ea57dc2c00ae9"],["/2022/03/25/Review/天之弱/index.html","125e452cfd18b9a41e0fdfa11496f6b8"],["/2022/03/31/Review/滅了天道之後轉生/index.html","fc5976242d3abe9e4acddd166d399983"],["/2022/04/30/Review/泡泡/index.html","9234b24ae37da6bba75ccbb6bf65f5ff"],["/2022/05/04/Programming/Dynamic Programming/index.html","fd8980a5eda281e0e4b7c5d187437e07"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","06144824e8b448469383126e11fedb1c"],["/2022/06/13/Review/偵探已經，死了/index.html","34b7272980d592f9708300bdbf634d48"],["/2022/06/14/Review/黑色子彈/index.html","417463ac649f9e7581eb7821940e27b5"],["/2022/06/15/Review/黑白來看守所/index.html","af81f0243fa47dbf0eeecb8374a67ad7"],["/2022/06/16/Review/虛構推理/index.html","7294c373c395feba28fcc7b111e4089c"],["/2022/06/17/Review/戀愛與謊言/index.html","87db2cb6b799aa435da31ba7558ed75a"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","1294a786bfe26bb07dcf738348250ade"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","254cc95b7ab0b389d7dd501672b4c581"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","b6ded5bfbce015b396c855dbfca7e8ad"],["/2022/07/03/Review/Hello World/index.html","152858eae46d766893311a24d01ebfd1"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","3279db24849ea3f806aa2b680ef7d30a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","9b40aa53a264e71d99ee28bf4e267936"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","e8d57967193aff9ff86cbbbcf4dc9d38"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","affbbf64d4388c93e5a71315c9c86cb9"],["/2022/07/16/Japanese/動詞分類/index.html","bec7f8e9097a0716a1038d33a5a03f3f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","896b08927de22113ff77a1d5865484af"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","d83bd71c41559ef75093c1060ec131a6"],["/2022/07/17/Japanese/音便/index.html","476d89030ae726089562c3abd62f472e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","70a56f834e34a5025fdb7ee94fab60c3"],["/2022/07/19/Japanese/助詞用法整理1/index.html","c3bce0f88e854460232f0799fc9df9f5"],["/2022/07/26/Japanese/助詞用法整理2/index.html","448aece0af803e75d5bc2fcf916fc367"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","8d46ed77faa42377635c975b188cf0e1"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","f16f0e6771ceef7c60deb9df4235fd6b"],["/2022/07/30/Japanese/疑問詞/index.html","2d18f76f4f10f15bccd59257fb8c8779"],["/2022/07/31/Japanese/助詞用法整理3/index.html","900ffae16fcded62cce7ecba192ce98b"],["/2022/08/02/Japanese/副詞整理/index.html","b93f7eb25e092202696b11ef5c87b6a6"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","c3049df89175bb455bf6ee91ae413856"],["/2022/11/04/Programming/Data Structure/index.html","79303de2f2d4454e39d14d5e04547ee5"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","670a531b1773c8adb981dfc0c13b315f"],["/2022/11/22/Review/組長女兒與保姆/index.html","4bd32d78584eca781ccdde5f44a8cda5"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","145ab0cd56f80d05a8bacc504378641b"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","37edb61ffa94bba005e82a43cc662183"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","231a4f4699ce1376682d3e8ef224c0fa"],["/2022/12/31/Japanese/After Rain/index.html","658582246d46f5b175321462fc779e0b"],["/404.html","1d37fc004ef4605f287291e5508224ce"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b627c1b56c5983ccdee351d769f66443"],["/archives/2019/11/index.html","9746785530efe811b1322a42a8c279d4"],["/archives/2019/12/index.html","398fce0220ac39d64e302036780bf64f"],["/archives/2019/index.html","2f914b4b79f953d00d15f288a87f284b"],["/archives/2020/01/index.html","8c840eafaa8d34b4a5b182713ccf5a5c"],["/archives/2020/02/index.html","910a3fb1346b45e67cfd909d0f478039"],["/archives/2020/03/index.html","12b28f0654654f94620b391dd985afc1"],["/archives/2020/04/index.html","5774d4f3cbdb3fd67545705704a3e06f"],["/archives/2020/05/index.html","a03a824e057ffae1d17dca8502e386e2"],["/archives/2020/07/index.html","1fa33b3a3a92904a98c27137c3d3fb91"],["/archives/2020/08/index.html","c5ba59d1e7724f034ce3e671b08df5e0"],["/archives/2020/09/index.html","aea73f8917063791b1919a5f6bb0a501"],["/archives/2020/10/index.html","e9875b0fe1a307e1d7574c4900d50181"],["/archives/2020/11/index.html","39f287f021e188ed67769f38d43d5257"],["/archives/2020/12/index.html","821b95cad9108df37e81904891be20ca"],["/archives/2020/index.html","d182b8e49adcb9ae7c9310861a4bc3d6"],["/archives/2020/page/2/index.html","c0d8f1ded78855e52e6ccaed417787ba"],["/archives/2020/page/3/index.html","456a474f8e6776108c89c64b93f9f85e"],["/archives/2021/04/index.html","401c6928223c93aa01c698ad7e5f6ee4"],["/archives/2021/05/index.html","f192a6e4e42f5ebc107c6ddf4ba1133c"],["/archives/2021/06/index.html","41782c652a67dc2cfbd0bfd6a82419dd"],["/archives/2021/06/page/2/index.html","7aeb4f9468f1ecfd96f5e4930cf74c2c"],["/archives/2021/07/index.html","e99c2681bef7ed669590f299a822cdd1"],["/archives/2021/07/page/2/index.html","d6f47df408f18facbc63b516f504db53"],["/archives/2021/07/page/3/index.html","55630067f7441c5cd85b6a7a5342a25c"],["/archives/2021/08/index.html","b6f0fc40f20f973fb26ace170c16cd56"],["/archives/2021/09/index.html","6bd9ce974f4caf26694d27473652285d"],["/archives/2021/10/index.html","a26ebf85bbe320df5a3117f05615e8eb"],["/archives/2021/11/index.html","41540fae48e6e27eeeb5dc8afab32bf0"],["/archives/2021/12/index.html","1e1c3b11b8f8aeaff2d122a8b5d8c75e"],["/archives/2021/index.html","4e285eebc39f11c17652c678bd6e735f"],["/archives/2021/page/2/index.html","571d33bc1ec7d35354e087afc6213f49"],["/archives/2021/page/3/index.html","ffa887843854b194f5ddb7a66ed8c7df"],["/archives/2021/page/4/index.html","9896c03604ab3eec1d80c67e614e631c"],["/archives/2021/page/5/index.html","74e3fff7d8773885c093d3710044704a"],["/archives/2021/page/6/index.html","8f8192f11d8a591efaa9c51410c506bf"],["/archives/2021/page/7/index.html","3a6829e575ee18b978f7c47f28bd8f34"],["/archives/2022/01/index.html","560740f91dd87c7bfb16b6c3d9a22d63"],["/archives/2022/02/index.html","7d8e8f9184eec686a903847cb16a3c99"],["/archives/2022/03/index.html","8925ad3b41a958a53778bbf7cd71d117"],["/archives/2022/04/index.html","0ddf067b5630c1d989f1ff66ce6a7721"],["/archives/2022/05/index.html","5622aaa0b80dca2d37d47acdc5c96075"],["/archives/2022/06/index.html","b08aa10628bf72bd4ba009f7fd84de14"],["/archives/2022/07/index.html","7e6824cf56858c319787120ea7f662b7"],["/archives/2022/07/page/2/index.html","eff3500187368f7af8cd984a0935a7d9"],["/archives/2022/08/index.html","17e32437c09f0cc8f920190938f74ff5"],["/archives/2022/11/index.html","fba7f844ce4ba9b4f030640840dabc37"],["/archives/2022/12/index.html","b311c56155a41b86245046c3f5653858"],["/archives/2022/index.html","53d3e0e03e210c1d66edb051ee880dbb"],["/archives/2022/page/2/index.html","e48b146d147481ff219513b2131b5431"],["/archives/2022/page/3/index.html","eae737ffb22bfa2f98786f06a06615d3"],["/archives/2022/page/4/index.html","4fd9806af38d24478705d0e932e1fd24"],["/archives/2022/page/5/index.html","bae37b7d97a25774d817ae139d45ffd1"],["/archives/2022/page/6/index.html","eb42779a1a8337524eec42455c5fb83a"],["/archives/index.html","7d4ca93acd805796667a9eb72282a1a4"],["/archives/page/10/index.html","a66422318b09c743a594c642f4352dd0"],["/archives/page/11/index.html","4d408ffcf52cdd89c465c461bf90da35"],["/archives/page/12/index.html","8a9e3f02d5028c3668b8f3a4e4db37f7"],["/archives/page/13/index.html","3717e2ef82e3621f49d77c84e9d0e032"],["/archives/page/14/index.html","406bdfa93b76be695ad82fdacd946dc9"],["/archives/page/15/index.html","d8914b747ccd83f981555f4a53a2e875"],["/archives/page/2/index.html","80664cfcdde8f1c761bb2279986f62a4"],["/archives/page/3/index.html","b4749e6420c9487cb43f29fd930a963c"],["/archives/page/4/index.html","c57feb62934df57022d9edf1df17d54f"],["/archives/page/5/index.html","b63d4ebc1ccfcd9d5325c196e3977ed6"],["/archives/page/6/index.html","da3c99b59263865bd1e8dd9771a5eb97"],["/archives/page/7/index.html","52ff04996123a72e0c8013b1921e7c58"],["/archives/page/8/index.html","fd650622417bb882d9d113d1f21d55d6"],["/archives/page/9/index.html","a36219b5d11fd37e33b4bea28e3636df"],["/categories/Japanese/index.html","aaa651b25dcb06598513727efc8fa582"],["/categories/Programming/index.html","a99310c991de296cae2d3d78b96a8a68"],["/categories/Review/index.html","5dbcf672977517342f971fcbe32f305e"],["/categories/Review/page/10/index.html","5fbe26d1516a513e7c37917c4297e428"],["/categories/Review/page/11/index.html","314bbdd18329e05e76dc8adc0e0d7ac0"],["/categories/Review/page/12/index.html","1a2212ecb4825f87eedf91e24bf8923a"],["/categories/Review/page/13/index.html","485d5c8683d9047e38d16fcf2bbc87e6"],["/categories/Review/page/2/index.html","4b08ccf47acafdf107a8be12b89b6127"],["/categories/Review/page/3/index.html","e9e7d3270574b321ed8b484d8c3b83af"],["/categories/Review/page/4/index.html","7f12d08508a219489855060b39135667"],["/categories/Review/page/5/index.html","920cab5060a00509d2d8a8cd7e767afd"],["/categories/Review/page/6/index.html","5b5a91771aee2cd87c4f3b8a0a5b8eae"],["/categories/Review/page/7/index.html","ab7d204c5e731426129573d2a54c9ff0"],["/categories/Review/page/8/index.html","98fc2a648f05d2952b24c01c77abf472"],["/categories/Review/page/9/index.html","c23d712b94109e1040309176ae4a0266"],["/categories/index.html","fc7fbc1180ff15382785b6afe2ecee0c"],["/categories/日本語/index.html","12e698d67277154a86122acef2117810"],["/categories/日本語/page/2/index.html","a594d128d0152421454e0bdd53d9d253"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9a42b8162632fb73e600b196f55e0c37"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","de54f69a7071c90bbc12725413795bfc"],["/page/10/index.html","62c986bb085d53e78ec024a4cd0a99d0"],["/page/11/index.html","19b01dcf6270ccc2399cf82e3dc1f2ae"],["/page/12/index.html","e147e0e22b79b20f2993cd7c234ded92"],["/page/13/index.html","6e7b829e9dcdac785df1a0d0b9ec4fa8"],["/page/14/index.html","2ccdfc2c17e7dd61e7808cad6bb55b15"],["/page/15/index.html","455d43581a56438f9bf8e81db932700f"],["/page/2/index.html","d941aafe3922dd73f80f82b9ca067c82"],["/page/3/index.html","9685474ad5131c8ca5fcd45ec894c40b"],["/page/4/index.html","b894754c5ea3a598436c91de956d83cb"],["/page/5/index.html","38a70c4fa3b714bdc19b6219477f05ca"],["/page/6/index.html","ace2d779fdcd223a0368042164880337"],["/page/7/index.html","1f7a71f6c3e3bf4c31b518862ed92b01"],["/page/8/index.html","2a1242309fc0c58435394b79b2cfad3c"],["/page/9/index.html","f86945084ecb81232f52beeb38b674b1"],["/sw-register.js","f01bb3664691df9a12a123deab7bc1a7"],["/tags/10分作品/index.html","750448443c005de4d5bfe82ff3e130ea"],["/tags/3分作品/index.html","e4b3f932fb8cb078924beb4ec12b5da0"],["/tags/4分作品/index.html","2e3b5fbc3feeff329aacefb8f8630981"],["/tags/5分作品/index.html","913f752b6dbaa9a801c61c0e4743d1be"],["/tags/6分作品/index.html","7c57b7ae6d7001c33a62db5422b3cd7b"],["/tags/6分作品/page/2/index.html","0df264f4ddf7ae751404fb16a70daaaf"],["/tags/6分作品/page/3/index.html","8f8274a1ef9672ed2163fb6838dbd26b"],["/tags/7分作品/index.html","9dce12f675b0303bb7c0335525b786a6"],["/tags/7分作品/page/2/index.html","66c6b1b31dde37b9376c470291719701"],["/tags/7分作品/page/3/index.html","97a328e05347b27aaa0e7bad4e058120"],["/tags/7分作品/page/4/index.html","e9e679791223bf2e1f6c76b7504ff569"],["/tags/8分作品/index.html","4c75bebd043532c028e7e5a4cf6763a1"],["/tags/8分作品/page/2/index.html","2112165d8ea492ee3199a975c1131fae"],["/tags/8分作品/page/3/index.html","625a1c58cac76d8579e453facb72a72e"],["/tags/8分作品/page/4/index.html","0752762574dfd9c5ff38c2aed821b946"],["/tags/8分作品/page/5/index.html","0df4168a09a5b8952984071e25f1ea79"],["/tags/9分作品/index.html","769499ad84b552c061fee797dd65e722"],["/tags/Lyrics/index.html","416193262940f1de6ff504d817298be2"],["/tags/N5難度/index.html","d31420bf675af164f9ab6aceb8add0f4"],["/tags/N5難度/page/2/index.html","ec650741391dd245e2a9dfec9700909d"],["/tags/index.html","da7823cf75ebc17c01cd5d2fb24ae3ee"],["/tags/アボガド６/index.html","913e2764366f316e3e16c0b043c3e2d5"],["/tags/三秋縋/index.html","4fdc1f08f4dd2ffd55d5404f9f850651"],["/tags/中國武俠/index.html","c6fe70904da96110bd34c7ff01c02ca3"],["/tags/中國言情/index.html","132c3d596b20922906b8c6c7a0ac35bb"],["/tags/二宮敦人/index.html","cf43fa5cf874f1b19e97fe7726304a2a"],["/tags/人性/index.html","75c2b96ab58b6ee7b9a3de2f165d6d12"],["/tags/人際/index.html","99adf9c653b4433d46d52c5c4eaae19e"],["/tags/住野夜/index.html","f12e7d70255ec1636250f833f33b9b12"],["/tags/佐野徹夜/index.html","441bf25f3caa8969b1888a0dbc0c4bcb"],["/tags/努力/index.html","b5e4b1a002e7f6a534dbaf114a34f325"],["/tags/動畫/index.html","de17018b86acc1b293c75a956c561003"],["/tags/動畫/page/2/index.html","977f3503f01f4b3cb7a4bda566f2fa43"],["/tags/動畫/page/3/index.html","9aaeeb8272b80bf4c6e1d51d499846ce"],["/tags/動畫/page/4/index.html","888706db7ce811c9fcfd2ad7281f51e3"],["/tags/原諒/index.html","4e90b783abe043d1dcec2f25a961a822"],["/tags/反烏托邦/index.html","f062e067a0e91facacf888ed36f0edcc"],["/tags/啞鳴/index.html","5e1a1992b07fe11fdf0981e4f644325c"],["/tags/喜劇/index.html","0e7a479c8887384cc47422a032326274"],["/tags/夢想/index.html","d800e652f02cc340267dc75d12f82f52"],["/tags/天澤夏月/index.html","5e29d5c358ab7e27b2f814c3f267259f"],["/tags/學習/index.html","ba3b53425de7d40ec70e08f0a8a27c54"],["/tags/學習/page/2/index.html","be6fcee109d3075209af75d9ec72895b"],["/tags/宮崎駿/index.html","e54a350a1a1ea523e9d742cdc7cc4cd5"],["/tags/小說/index.html","21123c3e31cc3db3b710344a7e2e9e2f"],["/tags/小說/page/2/index.html","712be1f51cd84d4f44363010c836c99d"],["/tags/小說/page/3/index.html","3819979126b8dd0d0f2a0107c656a713"],["/tags/小說/page/4/index.html","3c43416a997e17f876650525de0b21f9"],["/tags/小說/page/5/index.html","371b02db8fc3dbfe78f5a0a12e1f3f76"],["/tags/小說/page/6/index.html","515336e327952bc1f3aee1f2406a7a2d"],["/tags/小說/page/7/index.html","ec266c8d356b0b710b839a33d3c7070b"],["/tags/平淡生活/index.html","c83095f69765e84dc53f93062bd8d6d0"],["/tags/幸福/index.html","81b0e37d6ac496b91e0a4b349faa4494"],["/tags/志茂文彥/index.html","9708ab75404bb6d50d29263e5a09217a"],["/tags/愛情/index.html","7dc22c48d06ef8d60d47a496233b7ace"],["/tags/愛情/page/2/index.html","088f51d31a073b9383a051b98835192c"],["/tags/愛情/page/3/index.html","9ac3fb28087489a4b9a5677d1d01185b"],["/tags/感動/index.html","0afee46dcb5d671d0cab7f2aff5efb23"],["/tags/懸疑/index.html","7078df69144245722cec2d70dade98e3"],["/tags/懸疑科幻/index.html","c66cc0ee319a0bb8cfec0d270d1f11cd"],["/tags/戀愛/index.html","00beac30f6dd1c2069efe385e901617e"],["/tags/成長/index.html","2750d2ab5c5152f8045ee15658d2db43"],["/tags/成長/page/2/index.html","61adc63104a43ebce63ba6ef059b0160"],["/tags/戰爭/index.html","ff19199029ba9f49175513f42e597762"],["/tags/推理/index.html","95d70f9be7a57babc42e1bca5216fa9b"],["/tags/搞笑/index.html","04ac7a07727c80f3a28c92e983aab32a"],["/tags/救贖/index.html","ba450fc1b7466b2eda3eb8643f3e3df0"],["/tags/斜線堂有紀/index.html","63a0470e2704f6ea55926fe0210bdcd2"],["/tags/日常/index.html","e34deb18b804a9137eada8029adecbed"],["/tags/末日/index.html","d6544abd0a7fed87ef14de29361da12a"],["/tags/校園/index.html","a5f8f9294760d63e7bd0f6d321a83b2f"],["/tags/武俠/index.html","283044e40c8a54399230b05bf14ba067"],["/tags/武俠言情/index.html","0bd6da62ef13b4a69bbc49d393ac5cda"],["/tags/漫畫/index.html","5d1841d1166500b6513d2b5873ce7356"],["/tags/生命/index.html","25f3626067d3f7a37ee1b8ca38a2270d"],["/tags/生命/page/2/index.html","cfd92b44a17c9f7fcb2a3ca020cf175c"],["/tags/短篇/index.html","8cd6be7f9a44c1db3170e64eb6ee3223"],["/tags/社會/index.html","a4c4dbaba21220ca1475608482177fd7"],["/tags/科幻/index.html","174912294f259c4f14d6e6938786aedb"],["/tags/童話/index.html","947bb9215e28cddde340541d5fc5cd79"],["/tags/競爭/index.html","72b233d441020ad679f7b9f2e8552a50"],["/tags/自我/index.html","bcafc51bde1e8408a1ca4f230479f02e"],["/tags/自我認知/index.html","d95b080a4b45955acd3dc4b25ae29233"],["/tags/葦舟ナツ/index.html","271409d3f70103afbd1e85d717ed767c"],["/tags/藤萬留/index.html","e3645d76c226d94943b888d97289a6cc"],["/tags/親情/index.html","b7e580cbdffb95ad5ee47048dafdac49"],["/tags/雜項/index.html","adb6b3a41c9e233c88523175a5c4372f"],["/tags/電影/index.html","58b1aa1f162f4ecdc433e9174334deff"],["/tags/電影/page/2/index.html","16b1cabc3ea1baeb7972fd5ae22e500f"],["/tags/霸凌/index.html","7c0a9c249cc8168a8e6ec98d0d35feb1"],["/tags/青春/index.html","13928cbe53dff27e40650b715730465e"]];
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
