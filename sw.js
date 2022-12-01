/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","bd41f0eced2777552f3ea59e5d5b62cd"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","6d4f79c4b0d808ebe28f19e20277b8da"],["/2019/12/25/Review/無法計算的青春/index.html","2c2fc023399c42a2cc93869f66976f25"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6ec1286645828e130f56e3facb5ecc43"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","0a35cb9207d20afd4cb504db1e6d96a8"],["/2020/01/19/Review/下雨天，不上學/index.html","d6f979df2c90499ada96754b60b50f6a"],["/2020/01/26/Review/三日間的幸福/index.html","8acb531fe1cb4d50a03a4567b87c9b57"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","6255efb7bddd278beb17c3172424bc29"],["/2020/02/09/Review/青春期超感應/index.html","7a3310441f8114ac5379ad6b95894bab"],["/2020/02/15/Review/又做了，相同的夢/index.html","9839970f30ac71f4a62e4847470cc1c7"],["/2020/02/22/Review/回憶當鋪/index.html","02ac9f697ee78db5918843abbf848c19"],["/2020/03/22/Review/不適合自殺的季節/index.html","65a81cf72d8e7b18df2efdfc81fc0aa2"],["/2020/04/26/Review/我們都無法成為大人/index.html","8409b8a6003c3f5fa028eedcc2a98d5d"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","537bad98482602d82f5b7182cc113f64"],["/2020/05/17/Review/人間失格/index.html","c18f42216e39be61dd080b229aa51845"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","99789bf1da07c8a6052f2fd247444265"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","f5e7727e4e6a8b953822c87bb0e3bf58"],["/2020/08/01/Review/銀河鐵道之夜/index.html","50bfc93a88cba931f7da6923922c93c9"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","3a96067055976b1c8dfc0ec48c7fc9b3"],["/2020/08/16/Review/15歲的恐怖分子/index.html","e00fa1dd88824aa3304fdc67a957770c"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e485e473dfc8a095ec29d5eba73c3359"],["/2020/09/13/Review/羅生門/index.html","03febe06e050e5dbd3e8af082b9810a3"],["/2020/09/20/Review/闇夜的怪物/index.html","12ed56875503f08cd195d04ab5adb144"],["/2020/09/27/Review/14歲，明日的課表/index.html","cde0e5dfca3bb512a58e4f2201f267ca"],["/2020/10/04/Review/致十年後的你/index.html","250110e35e0c6e317d1922de95ebff38"],["/2020/11/08/Review/滅絕之園/index.html","73654fc9b525f7ef49e4734d441a92b1"],["/2020/11/15/Review/將愛拒於門外/index.html","0fe3d85354453671c89242b4e6298bd0"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","f7c7a94f66ecc079db6bfbcee31901b7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","04aa5a732db5613c094e5444fbe303ab"],["/2021/04/22/Review/道印/index.html","f39e6d57efe490a24f5f045ce6a1723a"],["/2021/05/03/Review/戀入膏肓/index.html","ba43700a7377b45a85e30b7614710344"],["/2021/05/10/Review/Dice/index.html","4857204b8afe55f534af4db1eca89ef7"],["/2021/05/15/Review/魔女之旅/index.html","024c73207b27af5fe5c84e662c06ef04"],["/2021/05/28/Review/戀愛寄生蟲/index.html","3b56c615960e58397018d5aef0a31f0a"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","b7f9630d0742ce4813ea32551e8aa1f7"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","090ca9601c06ab76c1209da96fb44093"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","e8806b31cb344bcb323c3500a2d10795"],["/2021/06/05/Review/流浪的月/index.html","69072f98dc1aef26afa8bcc29540b519"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","5a7dd77da57df337d72765fceeaaf0bd"],["/2021/06/13/Review/第一人稱單數/index.html","2d42dbf8170befa77c91c7cb844598a1"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","8b0831603d23faf7a3eee44d6bfc1e23"],["/2021/06/16/Review/願你幸福/index.html","c82a5212e5fee83fe4fd246b15ba2762"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","8cb4a04aee417ea020602828394318ad"],["/2021/06/21/Review/神隱少女/index.html","770c533b38108cd55de87d72693728f8"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","20053dbc0dbd153b4536dfc1b5de26c4"],["/2021/06/23/Review/天空之城/index.html","a5f3b84d4792e82717c60a4a3a323bbb"],["/2021/06/24/Review/魔女宅急便/index.html","1968e134dfe2826f2dcdb96995f9d301"],["/2021/06/25/Review/借物少女艾利緹/index.html","4fa582fd9349383ac9f755ca4a3c0c23"],["/2021/06/26/Review/魔法公主/index.html","f645b5c92e74fe6fa79a61ef49489c47"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","f4f8ed2dbd94e5aa5ad8a9f46c6469fb"],["/2021/07/04/Review/飛雪與劍/index.html","1245c493c21d4d692a809808561cafe3"],["/2021/07/09/Review/地球防衛少年/index.html","b553d7c3d6876335fe01667b32fc4210"],["/2021/07/12/Review/Angel Beats!/index.html","8e93ec5945651b81f83c4cec41a94f05"],["/2021/07/13/Review/Clannad/index.html","be4dcb78b66c44346f43d70d61bbe264"],["/2021/07/15/Review/AIR/index.html","699ed1aea91706a9369e5d88d0c7adc4"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","59f749f8bbdad15195fdaf76a72994e9"],["/2021/07/15/Review/螢火之森/index.html","f02c11e20ef9146490684d52b5d40b0a"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","637b4815d21b3a0c14313763919b5b2e"],["/2021/07/17/Review/奇蛋物語/index.html","658c4572408aa623df381d5e71f78f08"],["/2021/07/18/Review/Vivy/index.html","f6379a491d62f854d157864ed64432ee"],["/2021/07/18/Review/請妳消失吧/index.html","c72efc116945d6198dd871881d4a48f1"],["/2021/07/19/Review/漣漪的夜晚/index.html","c8631a3cd5a09c1bdf9f3189990affa7"],["/2021/07/20/Review/月色真美/index.html","a60c610b6690ef422a841619d035bdf0"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","c00c8bc9a90f90746fbae46e3cc5517b"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","adcfe4a1a7dbd207776db8f588bc66b7"],["/2021/07/22/Review/罪惡王冠/index.html","3df912f23246feeeb3843b5a24e46188"],["/2021/07/23/Review/弱角友崎同學/index.html","07c502af6edd16de2caca49dd5caa941"],["/2021/07/23/Review/惡之教程/index.html","c8ac652acbe2cfce4d9ce41a34a9847f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","f908da9a9c7ef55aa468383e8badfc6d"],["/2021/07/25/Review/魔王勇者/index.html","0240a3a2249c27bb3cb5e95178a54c53"],["/2021/07/27/Review/一年A班的怪物/index.html","736ce92413c32034d0a7133eb4369813"],["/2021/07/27/Review/奇巧計程車/index.html","718bfaaa3c2422f316167ed6c8458ca1"],["/2021/07/27/Review/專情的碧池學妹/index.html","8f09666044ee333ba94d254429b5ed6d"],["/2021/07/29/Review/只有我不存在的城市/index.html","f8c5e6e6b5b0f4ded273a7e1ff279f7d"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","81b0195d2be9f0164cbcf795e480f886"],["/2021/07/30/Review/可塑性記憶/index.html","b6869208f2eb0118f53a059c8265a00b"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","db0c36223f093f4a82842fb199eef696"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","624ecd9dba4ef79d634b4038d65b445b"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","a16d4ff7bc473be454256652ba833705"],["/2021/08/25/Review/清戀/index.html","883811e87f586451a13dcf31fd8de02f"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","c4099c8e6975e1d2860412f6c08b6c23"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","61a570cc94a92bbad909c68a4afac115"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","1c669282067218462a6b6761749aab31"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","5fee3aa5a6ff40ceac964c5e0cd637c6"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","90e5d0520e4c8a9fbb4050eaff0d12fc"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","29c6a729b864afb8337675f462e55439"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","92433fb1b07d75e6f8dcf3c962bddcfe"],["/2021/10/16/Review/龍與雀斑公主/index.html","04293beb73fe109352ff6a55ba78a842"],["/2021/10/19/Review/孤狼不想開後宮/index.html","6fc69ed0df1274b39d0275949ee2da15"],["/2021/11/13/Review/徹夜之歌/index.html","73ee275bf13d1e581cb7594afa5146cf"],["/2021/11/24/Review/武煉巔峰/index.html","1094c80a8a22027e1b58cd4847bf81c7"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","c092e91f966b218e7f895992498e04f9"],["/2022/01/28/Review/神醫凰后/index.html","33333feb7f293f0fa305d1895c2e9904"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","cec729b15665a1725e7f179f3e5fdc96"],["/2022/02/13/Review/夏日幽靈/index.html","8712ee1b83a1dfa26ecc826d251b0e6f"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","433a4978c1261e00c32f77ffb640a296"],["/2022/02/26/Review/賽馬娘/index.html","8aec0104894b3a1665ced8cab0b595b2"],["/2022/02/27/Review/大欺詐師/index.html","13aa1f012abe5e67110e96b5e8449ce6"],["/2022/02/28/Review/前輩有夠煩/index.html","0d647e8c41a6f962070a3832c1999d30"],["/2022/02/28/Review/碧藍之海/index.html","83f61eb9d45d158cde9d686017ad7537"],["/2022/03/05/Review/落第騎士英雄譚/index.html","1385653df7dba4f92a96d5b36ccfdf5e"],["/2022/03/06/Review/Another/index.html","f44449f1678b42ffb8081b78abf7b071"],["/2022/03/06/Review/入間同學入魔了/index.html","90a421b105fabe3cef365bc91ffc66c0"],["/2022/03/18/Review/再見宣言/index.html","5dfbf91d8e6e9d583c6ecf08d28c2a6d"],["/2022/03/23/Review/生若冬花的妳/index.html","1b25ca3969dfd7c296a6a37dd7adafda"],["/2022/03/25/Review/天之弱/index.html","ca444355b4d6d43b48e0d12492971238"],["/2022/03/31/Review/滅了天道之後轉生/index.html","177338a61944fb04527a7d8356826c14"],["/2022/04/30/Review/泡泡/index.html","74b66ab660b0233787e5d72b50e6283e"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","0755ecc6d953963192e4639be0bc7cda"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","068fa1dc8bc004d76993ff9bed678de9"],["/2022/06/13/Review/偵探已經，死了/index.html","34cd6e8ea83528dc506f92a39cfd2c5f"],["/2022/06/14/Review/黑色子彈/index.html","534fbd2f96c678884ae37de53ea918ed"],["/2022/06/15/Review/黑白來看守所/index.html","b09913f830b9898dfbeb76acc1c60b72"],["/2022/06/16/Review/虛構推理/index.html","de37dd1cf643a9fae995aa992905b6d4"],["/2022/06/17/Review/戀愛與謊言/index.html","1207b287c4ca91aee74c1832856b8c17"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c4a046cf2a74ca12ccffe44b12efde4d"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","5bbb9013399d15070aff92ec6dd7b0f9"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","df8d832c4974741bce99545b270fbfe2"],["/2022/07/03/Review/Hello World/index.html","41fb583e5094b204cf10f2f2fa0410b2"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","f827b619486e14285e6710770d88c72b"],["/2022/07/12/Review/易忘日文名詞解釋/index.html","3eb27ba2cfb03de14de7c46112447cf1"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","f60d0d376630cc251ce189a22a468440"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","821bb7b5fb901ada8ff5f6f532c0b1cf"],["/2022/07/15/Review/ナ形容詞 時式/index.html","a8cb9c013d2a9b6fa57a282db7963d6b"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","d36a6a6c42db7df1c540ded6b75db836"],["/2022/07/16/Japanese/動詞分類/index.html","fc3f72f20c63a4f4f3a2cb53a98e6443"],["/2022/07/16/Review/五段動詞 語尾變化/index.html","21fb2d1bb980acd1deb3ed606d55b6f4"],["/2022/07/16/Review/動詞分類/index.html","80d21987d55bef37cf395934f6801cf2"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","0885e732eda59da29aa7c696f7be0318"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","89670d3f309825e374a7dbad73ec7ad2"],["/2022/07/17/Japanese/音便/index.html","ea3fe70c37821d2d239641666c7cb59e"],["/2022/07/17/Review/カサ變格動詞 語尾變化/index.html","eeda3a7f65cf116517cc105c0a962451"],["/2022/07/17/Review/上下一段動詞 語尾變化/index.html","6e996b74b4f6a39a6618fafe0b796d15"],["/2022/07/17/Review/音便/index.html","c07648ddda1eb02183e79e54b72ed13b"],["/2022/07/18/Japanese/動詞 時態變化/index.html","222107ad7e415676227e0062c6818b06"],["/2022/07/18/Review/動詞 時態變化/index.html","79b18c0be3534a6aef8c961638c63752"],["/2022/07/19/Japanese/助詞用法整理1/index.html","a22b142f217f8d7ba23bec55dc254a64"],["/2022/07/19/Review/助詞用法整理1/index.html","acb8577342cfe232dd83d45df4191bc7"],["/2022/07/26/Japanese/助詞用法整理2/index.html","f02116e2187e0704717e743990c24d58"],["/2022/07/26/Review/助詞用法整理2/index.html","8cf2a3a107b842e6caa45e21a946a2c9"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","3ad3c2f148f1388119a96a938eb8123e"],["/2022/07/28/Review/動詞屬性 ている、てある/index.html","9449b0d5f4746b6cbc1876ac72e0e714"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","191cf0a04ab90d1e8561d824497b5f5c"],["/2022/07/29/Review/動作順序助詞 整理/index.html","e48ace4b07a9a6c275e6aba014914211"],["/2022/07/30/Japanese/疑問詞/index.html","9a033cba5ce1bd2e4d7a41b5dd673188"],["/2022/07/30/Review/疑問詞/index.html","2cf39d16bca05cf8c83f8755c9a84c9a"],["/2022/07/31/Japanese/助詞用法整理3/index.html","db98bca2363255e99aea0f49e32d6628"],["/2022/07/31/Review/助詞用法整理3/index.html","cf2ec1733a5146f88e659ed9fcd545d9"],["/2022/08/02/Japanese/副詞整理/index.html","8c07eb8836aa026672663f9f981b6560"],["/2022/08/02/Review/副詞整理/index.html","27db0aa693d76686b3b37430d10dfd4d"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","b69beed795adf3692c2671f7c23b54f4"],["/2022/08/05/Review/接續詞 感嘆詞/index.html","b5ea37dcce9512094ecd913116124ad5"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","a7b2b2a3dc687f57ef5aabaacd4f34d9"],["/2022/11/22/Review/組長女兒與保姆/index.html","31b2565ecda8029c19de8d8c2fa8a3e2"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","662aa103de6f25224e315605f64b6219"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","7d957ea6a58d16b030092e2330e5ab7e"],["/2022/12/01/Review/MeUmy言/index.html","f821d5f6c546c1f0cc0fbba8f9cae4d1"],["/2022/12/01/Review/イ形容詞 時式/index.html","00d1f0b291fd8525d04f31ecbdaffdd6"],["/2022/12/01/Review/想要揭穿班上太完美女孩的弱點/index.html","1105f2f08400c0148214cd05ecb80549"],["/2022/12/01/Review/果青言/index.html","3ac2421e0d64a8582db7ec973b5a26fb"],["/2022/12/01/Review/梅挽香言/index.html","c380266a1607996217cc7b0020badd61"],["/2022/12/01/Review/雜言1/index.html","87cd5e4f9ba517e8336e1b5a3dab1374"],["/2022/12/01/Review/雜言2/index.html","8d40c7d41765e406d6826c3ec45da028"],["/2022/12/01/Review/雜言3/index.html","e5b4f359e2b8ff9769da94ac82742938"],["/404.html","ee6586dab0fb6d648dae23d893824866"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","d29a9f15522dae26db14d2af7606723d"],["/archives/2019/11/index.html","3fba9d970f5e3e35202160875a3fdb85"],["/archives/2019/12/index.html","0f21457e1c9e41a62daa1cf16c8111b7"],["/archives/2019/index.html","da18f341ce842fcbb0b8349abc4a74d9"],["/archives/2020/01/index.html","82108c5b17305965f7b9e0fdcd7568b2"],["/archives/2020/02/index.html","6af052576fcb52e95e5e9ab27d7885e4"],["/archives/2020/03/index.html","7223a1e63b7903d0e6a64e1284516f60"],["/archives/2020/04/index.html","e71c23bec4a6c3bac8cda0b5ce8c7d37"],["/archives/2020/05/index.html","dd017c019961262de13d3f38db291866"],["/archives/2020/07/index.html","3a14c89f67894b5a6df566e4fc642703"],["/archives/2020/08/index.html","b85b094fb962498c66636c6631dc4e8f"],["/archives/2020/09/index.html","79c86f544709bc2049596a3fc8fb451c"],["/archives/2020/10/index.html","903715f8965eeb986efe9dfdc14b62ac"],["/archives/2020/11/index.html","c106ebcf08478caa9aded6c7f4b746ce"],["/archives/2020/12/index.html","df0a9954b708a401008a92f5fa6e9127"],["/archives/2020/index.html","c340db2518fc9bc60e280d5cf11a5149"],["/archives/2020/page/2/index.html","781ddf841d1a4ae52c6a63f400763d6f"],["/archives/2020/page/3/index.html","49c099e08843a1293d212c8225a59aae"],["/archives/2021/04/index.html","df6e31973739e67cca7b2a183c494828"],["/archives/2021/05/index.html","a6a9e0f0e46814cb592a46042d7b1b37"],["/archives/2021/06/index.html","2cd94fee1c35e8d9970dcb826a9d0da1"],["/archives/2021/06/page/2/index.html","a70d1a39d595337b866e922038e7b983"],["/archives/2021/07/index.html","bdb6b96241ec8cdaa33f71a61de426a8"],["/archives/2021/07/page/2/index.html","1a777371e8d95ac63143d181e96df653"],["/archives/2021/07/page/3/index.html","d44c7b2700200f525b4856f5827398ea"],["/archives/2021/08/index.html","34aa5c1b2c60a06dabb3536ee5daff27"],["/archives/2021/09/index.html","0a4a9405a83c50d0265641125ae0e2ca"],["/archives/2021/10/index.html","aebf827abec23d557df41571bda02c25"],["/archives/2021/11/index.html","afb10d52821abefb5c920e5aeb039f28"],["/archives/2021/12/index.html","cbd7ee4073f1b94aa21ea9f677f1c365"],["/archives/2021/index.html","54581351b9cc387b6f849bc7fb792431"],["/archives/2021/page/2/index.html","2bc6de700756420f0f7e1c203e77245f"],["/archives/2021/page/3/index.html","757b3ae22def37620124389e3919e24e"],["/archives/2021/page/4/index.html","8907c4d804609a38d6846f6a2603d7f7"],["/archives/2021/page/5/index.html","1cec3b27b33c55b49f702c97b8e74b05"],["/archives/2021/page/6/index.html","636fb06af6ce10a9ff9f8930d4e8ca35"],["/archives/2021/page/7/index.html","d4689fab755226c50db36b73d2846a86"],["/archives/2022/01/index.html","2801e815a1b164d88f75c7593d2098dc"],["/archives/2022/02/index.html","d570220c803f67a9077cc68d991e85ac"],["/archives/2022/03/index.html","8e01474839e4852dd15b85cc2a6bee87"],["/archives/2022/04/index.html","ad8a730fef54956dd144c6c950fae04e"],["/archives/2022/05/index.html","8f33c183a37009d2302b316391d2980c"],["/archives/2022/06/index.html","150ff45478cef81e9221a79a125a2f27"],["/archives/2022/07/index.html","4d8bfad65ad2b0e748cceddf6321d651"],["/archives/2022/07/page/2/index.html","e78b7f4a12ceacd88e1587742ca69a99"],["/archives/2022/07/page/3/index.html","067efc14cf008d63e7ac15b456339aa8"],["/archives/2022/08/index.html","c9b63e6a192ff3fa86b341fc40ccdb4e"],["/archives/2022/11/index.html","40283509eff30c794539d9e1d70739cd"],["/archives/2022/12/index.html","f867892dfcef5e91837d35588d9c3d92"],["/archives/2022/index.html","4d7c28491fe5f5f1c25084286252f465"],["/archives/2022/page/2/index.html","bf7aea3b9d73b64a4d7120b95c36061b"],["/archives/2022/page/3/index.html","bc6c0104c1258a73a20426479294ad3b"],["/archives/2022/page/4/index.html","36992d83b21c2cf8eaf863a3892c8109"],["/archives/2022/page/5/index.html","6e35259ff5c430c647ce85daa958eb63"],["/archives/2022/page/6/index.html","52921f32dec7afa73bf388689f157be3"],["/archives/2022/page/7/index.html","3fc3ae79736567ba34becd1099c756ef"],["/archives/2022/page/8/index.html","815365398d9eaf6050c17caf51716309"],["/archives/index.html","5b0c171c3cc109f6c3ba8fa1a6ab1c43"],["/archives/page/10/index.html","191d1dc8292be97b365afea93d994f8b"],["/archives/page/11/index.html","c677f28a86cbebb601bfa29f942bf25f"],["/archives/page/12/index.html","549dd1e748b713fd57a77bd8c94b4777"],["/archives/page/13/index.html","88c48a0217717f5f9b3e16386e888c3a"],["/archives/page/14/index.html","c271c520cef3da6f23656c7dce3debd8"],["/archives/page/15/index.html","165a5f36777350ab103da554b83e0203"],["/archives/page/16/index.html","28bfaf866bdcc1c8bf8ab3b05751d34d"],["/archives/page/17/index.html","76738041dd2c1d1fce637633bea0d9ec"],["/archives/page/2/index.html","347bde19bafc7832ab94b7297a34dad4"],["/archives/page/3/index.html","0e53ab0501c39b7063edc6de6e910037"],["/archives/page/4/index.html","cba55449d280f1545787b7e87191b8a8"],["/archives/page/5/index.html","916bf1fda6e6ed4ed9b728f60d844885"],["/archives/page/6/index.html","81608443620d4ce78a45950d2822ed95"],["/archives/page/7/index.html","b3850a8c2e6adba13c4db78681226f50"],["/archives/page/8/index.html","82d14ff894e2266c5f4c5ccb69047335"],["/archives/page/9/index.html","1beef6f7ebc902f15376222569805b3b"],["/categories/Algorithm/index.html","f5fad936ed3321026001c57bdbf9ae3a"],["/categories/Review/index.html","f695396c8da7f278a3a95259970a6bec"],["/categories/Review/page/10/index.html","a98c1e7168f17d47b21523ccc0dff8fd"],["/categories/Review/page/11/index.html","be9a75f2256f3f407dd6a288664e580d"],["/categories/Review/page/12/index.html","1f34e75412699bcb8a147288dba364fa"],["/categories/Review/page/13/index.html","25ee607b24319aaf82c5f2b87b2846de"],["/categories/Review/page/2/index.html","64c4efb8c8049c6502b6de0313a0d59d"],["/categories/Review/page/3/index.html","47eb601daeef324566739a1d06979e03"],["/categories/Review/page/4/index.html","202e5bad533ba488bc9952f5faab0ca7"],["/categories/Review/page/5/index.html","d558d0c616154a4298d52f8169a4d377"],["/categories/Review/page/6/index.html","d4b0739ae411eb543b9713f13bee4d0d"],["/categories/Review/page/7/index.html","46efc95b1cb2d9943f7c56291d8ff512"],["/categories/Review/page/8/index.html","bddeb52403eddc7e1f12ec6c715c239a"],["/categories/Review/page/9/index.html","64adda258e0b8c689b055823af9df122"],["/categories/index.html","f59ed0b121484611e703938b139bcc07"],["/categories/日本語/index.html","3bc5a69bc8ccf2bbe0df76b1c9b4c3dd"],["/categories/日本語/page/2/index.html","67755c75261fa805fccc1b5210e24d5e"],["/categories/日本語/page/3/index.html","0620e16425d4a71952eb98852f1f4b31"],["/categories/日本語/page/4/index.html","12fbbe2f5b301bed35aac29ae1a7a3b8"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","02ee91e191fb890e6e73403e3d809ec8"],["/js/custom.js","fe59cbe1ca6b7aee7ce6ad0cf3d4b434"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","d74782013eb997ccdfa8f8679bf39a2f"],["/page/10/index.html","e779d3793c4237780ac8820d32e3a2a8"],["/page/11/index.html","7e0c996551b25cfe4ad1a7fe288ea640"],["/page/12/index.html","a15c7a9877afdf45c84f66c85f09c0ed"],["/page/13/index.html","31879ee379f3d23cd26a8426d694dadc"],["/page/14/index.html","c5ad5a30cc7a40687f5faa43eac1f4aa"],["/page/15/index.html","ac6711f6f874450a9bf849236f75c4ec"],["/page/16/index.html","1aaf6ff2e47d9564fd18a6b5ea10218c"],["/page/17/index.html","9195a022f535c5e9bba4d33511eeb7c7"],["/page/2/index.html","f65e691115f36c807faa5e23fc693d5a"],["/page/3/index.html","5945494aaafee3ab126b1c4a82c4da5d"],["/page/4/index.html","bc9f80758416c055219a98d98eb3a9cf"],["/page/5/index.html","5a03301625ec2fc3bb8245657b378fd3"],["/page/6/index.html","c2a120604b6ad63c693b6770e51e5e4c"],["/page/7/index.html","299a72d85a1cad60e35bdf08ea4ae341"],["/page/8/index.html","24a103ad19708d9d9ea37d58d616e2cb"],["/page/9/index.html","62721aae960e689f874e33e1f538d30f"],["/sw-register.js","cbe4cd9dfae96a074852174a17dfd79a"],["/tags/10分作品/index.html","3ddbf8257ca8f846fa7b7182041d2123"],["/tags/3分作品/index.html","2363edd0fecdc04752eabb1b32d9ec00"],["/tags/4分作品/index.html","730058e316720b00931aa0968bea999e"],["/tags/5分作品/index.html","611478d463fda86dc53505552b30545d"],["/tags/6分作品/index.html","4b869d91bd2c701a5a65b4ad0ec49dc5"],["/tags/6分作品/page/2/index.html","b1d0de26b60ab989664c4ac6fdb1e851"],["/tags/6分作品/page/3/index.html","0c07942a2196fe8f9a73bd25b7ec2f76"],["/tags/7分作品/index.html","3c7bc300a9326ab1342b1b7e7f8246ee"],["/tags/7分作品/page/2/index.html","fc66f05aa586cb0c5299a8159a200eb0"],["/tags/7分作品/page/3/index.html","d162ad2aba724a8b8d4fb76f96d4ee92"],["/tags/7分作品/page/4/index.html","636dfc655a5a386749d1ba9ae80f9f9a"],["/tags/8分作品/index.html","8431b0aa3fe6f8090483311c9ff91354"],["/tags/8分作品/page/2/index.html","31ffe4d4554aac9ec35ac6283be75062"],["/tags/8分作品/page/3/index.html","dce9678b3ecc8a771d66392fac51d1fa"],["/tags/8分作品/page/4/index.html","3897fe7a895422de2c231d3c0242247b"],["/tags/8分作品/page/5/index.html","1eb18b426e5e3ae0619efac366da9986"],["/tags/9分作品/index.html","b30dced25bddd09c743dcb8eae64221f"],["/tags/index.html","04a2672486b3ab8200fd4f5c1e1f6be5"],["/tags/アボガド６/index.html","8b423994c15fe76e87f54cc5d7525013"],["/tags/三秋縋/index.html","948cd1bb53ccef17319e1f788a4f604f"],["/tags/二宮敦人/index.html","18d9a542fdf3a5974f42d4d055c4cf50"],["/tags/住野夜/index.html","aa67fd09a3c8261b94d6a1c9fbab6b0f"],["/tags/佐野徹夜/index.html","6b227c28581c2e22ee7bd8018ee2c458"],["/tags/動畫/index.html","b894cc879bc2d5df4dcb26857d5812ea"],["/tags/動畫/page/2/index.html","e1c23c6d3b4473cac43b2e635e312f98"],["/tags/動畫/page/3/index.html","ee2f6826cd41c68b3c93c662a3fc9043"],["/tags/動畫/page/4/index.html","8dd9ec93486e1f784677a4bdd458bf7f"],["/tags/啞鳴/index.html","4b7b269c61bba6b2e5b3ef652954d2bb"],["/tags/天澤夏月/index.html","e4fd17ef605011423829956566c780c3"],["/tags/學習/index.html","c61e340cbef106ec6b1cd0f0dc835713"],["/tags/學習/page/2/index.html","bdc5d95ae0d704bd6b7608f1f8cabf57"],["/tags/學習/page/3/index.html","84cc1e2682b8de8a3906b980a824f5ed"],["/tags/學習/page/4/index.html","eac2ea22bf6df4263da42e5322b30af6"],["/tags/宮崎駿/index.html","fab13d86485d1a7cc1a2a99186a72a7f"],["/tags/小說/index.html","b3b64ca78d6fc5dc6d09e20fc059e82c"],["/tags/小說/page/2/index.html","32d325f961b61bcdedf27d459db28c43"],["/tags/小說/page/3/index.html","07613d6264694350233072cb1d059ffb"],["/tags/小說/page/4/index.html","59264e5f8abf478b144961861349fce8"],["/tags/小說/page/5/index.html","0ec4f8be7edb10583eb1932147b0cf8a"],["/tags/小說/page/6/index.html","a12cdc4631104074bf9b6568e54cb26f"],["/tags/小說/page/7/index.html","1b8c9dba1c79ccd1f77efbfb6a2d3bd1"],["/tags/志茂文彥/index.html","ac462de7cabc1e1c7151e68b8b0bcfba"],["/tags/斜線堂有紀/index.html","9d607bbe8205321dcd7a7037fb15fd00"],["/tags/漫畫/index.html","14dcdb851cbbbd8e729e3dda11731178"],["/tags/葦舟ナツ/index.html","80fcf9588943512dd3ce718410b0e9ae"],["/tags/藤萬留/index.html","0645a4fcac588745594da425ebe55195"],["/tags/電影/index.html","8acf6b4e4e8fc1074225409e751eacd4"],["/tags/電影/page/2/index.html","2bd65190a3e7398fda0a1816b5da412f"]];
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
