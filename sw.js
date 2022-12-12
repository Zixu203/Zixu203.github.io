/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","40ea9ad00fbe73dcf95fdba2e3d9fd57"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","2365aae9a877e91768bb47023e4e3ddd"],["/2019/12/25/Review/無法計算的青春/index.html","873881afe4a8d3893627e16292e9bd07"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","c7933c50cebfb0e1e2c1a9061d5c5e64"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","f7de8b533d8c190637a2ec60e7c97e40"],["/2020/01/19/Review/下雨天，不上學/index.html","ff0933c2c5d6bbff1be9d9f24be25e10"],["/2020/01/26/Review/三日間的幸福/index.html","e9517da2b5e0803e26969dbfae17aaee"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","6393d7dabbc2006dbe8892f556d0b5ee"],["/2020/02/09/Review/青春期超感應/index.html","ab594f79b9456079351c4c314cce89f6"],["/2020/02/15/Review/又做了，相同的夢/index.html","e1a7d5ffabf3d7258cdb3c723334fd72"],["/2020/02/22/Review/回憶當鋪/index.html","64c9393e75ba620e319aaab58e130e0c"],["/2020/03/22/Review/不適合自殺的季節/index.html","8572cb8448c5f77194ac6050817fc07d"],["/2020/04/26/Review/我們都無法成為大人/index.html","2d92ed18033c681f6b87e58ff82af279"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","281429861632a6f5cfb6908fa532d747"],["/2020/05/17/Review/人間失格/index.html","7084862a65ff8989f1bf5cb45aac61c7"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","860a12eb0a29f844085e45e5222d0513"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","68e19e7f1fcd03dcd4160a167c5550d1"],["/2020/08/01/Review/銀河鐵道之夜/index.html","7da1f8679bd27dfe0482da2b3c10dbb3"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","352af728cb42fa1159e7037f4578ee65"],["/2020/08/16/Review/15歲的恐怖分子/index.html","810e1bd941ae4e306563cc44bf8e7809"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","dae02dc1465e3c22a56d69e074909292"],["/2020/09/13/Review/羅生門/index.html","8344e91103bc0385570de49d96f7be16"],["/2020/09/20/Review/闇夜的怪物/index.html","1e89e5df0e3dc0f34698eee40d3606d5"],["/2020/09/27/Review/14歲，明日的課表/index.html","678d423e589e7563a8bdd359d44ee275"],["/2020/10/04/Review/致十年後的你/index.html","75f90e44e8c160e1622942b1b729ba51"],["/2020/11/08/Review/滅絕之園/index.html","dff9300e18563e3436661e7ec627092f"],["/2020/11/15/Review/將愛拒於門外/index.html","efa253e9b6ac150506249e94edc7305d"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","8d9c0eaccfb15aec873b3af5f4aec299"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","a9913123ef021aa757b5fbe2cfa33561"],["/2021/04/22/Review/道印/index.html","dc2bfae7ede440df69da661c2071b3a9"],["/2021/05/03/Review/戀入膏肓/index.html","161093b9d6c485c260dc86f9fc7a413e"],["/2021/05/10/Review/Dice/index.html","b9f2c35c37013f71c7dd42522364b929"],["/2021/05/15/Review/魔女之旅/index.html","878145c56edbac7cf5b3128384ccad31"],["/2021/05/28/Review/戀愛寄生蟲/index.html","18b8649363b19eecc1e4c3e68232a17c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","35ead5a32da4b50914a5a82bbc5bd975"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4e89e5391e7c0808764031823db55a42"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","623a1e6f11b9cd88a3650c5e3049de82"],["/2021/06/05/Review/流浪的月/index.html","b58500f4887d2bff20d8578d13cecc0b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","9ff6598725becd9daf7485a4fa4460b5"],["/2021/06/13/Review/第一人稱單數/index.html","bfc401969c158fcb9066fa8f5bf2b90e"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","9d3b5e525fed855cfa80a15d9a070b57"],["/2021/06/16/Review/願你幸福/index.html","e4498ec3cd5b71408c1bcd73fb2be3bf"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","4e67f657995a97765fd2bef39e2dc060"],["/2021/06/21/Review/神隱少女/index.html","3de9fc678815b627a32bf2b81cb0f520"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","dcc9317970a86096172d9b5afad3b4e7"],["/2021/06/23/Review/天空之城/index.html","e67bcc58491f144bf207a29a397fc4c1"],["/2021/06/24/Review/魔女宅急便/index.html","e27892f8b7b9af8d72a037ff865f3d48"],["/2021/06/25/Review/借物少女艾利緹/index.html","1f4003b950f8993b4d75a77eff7810f7"],["/2021/06/26/Review/魔法公主/index.html","8e6a4f371259d805cebcb66807dc2f76"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","471d9b2461ca556b8540041565ee2c6f"],["/2021/07/04/Review/飛雪與劍/index.html","3db1c1fcb931edac8967b6b563f1c1db"],["/2021/07/09/Review/地球防衛少年/index.html","a898e97261b0778fee96d9dd00c8f78a"],["/2021/07/12/Review/Angel Beats!/index.html","e52b85ae66fcc411376174ce34f811d3"],["/2021/07/13/Review/Clannad/index.html","e4f6e2c11d3512f2b7d0e544eb4e8792"],["/2021/07/15/Review/AIR/index.html","dee45cec647b73e2ebf2f1562d91b5df"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","9b29ea1e83901be04db5962c4bc2d610"],["/2021/07/15/Review/螢火之森/index.html","222eab2daf2e4038853dcc419bf54708"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","0873788ed18a762d0533b87568799e94"],["/2021/07/17/Review/奇蛋物語/index.html","f61e43df21a931adc6cbbe49aa3285c1"],["/2021/07/18/Review/Vivy/index.html","61bf53277758387f928b0f5ed95b352c"],["/2021/07/18/Review/請妳消失吧/index.html","2a107c2d8f78566050c04d515cd6e0ac"],["/2021/07/19/Review/漣漪的夜晚/index.html","5ddc2dd475cd5579e07a4134c1990dd5"],["/2021/07/20/Review/月色真美/index.html","5ea7f7f29af03255bdcba5c41de05de2"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","589b1c3fc0b1b07959f767ec21b9973a"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","69e45990ca515cba8ba4df413ea53c71"],["/2021/07/22/Review/罪惡王冠/index.html","f2f2a056f2ad44a06fc249e13c68bdc6"],["/2021/07/23/Review/弱角友崎同學/index.html","e0e5e5a3e355265095ca8eb64963e948"],["/2021/07/23/Review/惡之教程/index.html","f249bfc49d5b56ac0fa38c29e7a08781"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","4576e2ca8208c612550609bdd160eefe"],["/2021/07/25/Review/魔王勇者/index.html","9e269e5e28064dc5b6e3701c0ef3df44"],["/2021/07/27/Review/一年A班的怪物/index.html","bee5efeb0d0655cde20c3dc0162e7251"],["/2021/07/27/Review/奇巧計程車/index.html","61ea73616ab015a133c49b044b8211cb"],["/2021/07/27/Review/專情的碧池學妹/index.html","05499466cc66c1ef3a0ac69551f5582c"],["/2021/07/29/Review/只有我不存在的城市/index.html","708fe5167ea6cde5a9121775a2033929"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","0989cd7da57aaf55b9deb12e5c7bdfc3"],["/2021/07/30/Review/可塑性記憶/index.html","707f25833b623a00ec758fb84e37f7b5"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","b8735d09e4f7ff2fc582c36e67382fcb"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","c1b58934bd230fc9f157d9cbedb808b5"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","26a31aadcb5e40e66acf0e3accd9cabf"],["/2021/08/25/Review/清戀/index.html","058ea695955d1aa947774d26a6bd197c"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","bbdad829600f48eca8efebc3e70c4297"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f4550ce5de8986070b8d0504bb4e9891"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f2509ca811cfe1046a85b52c0a02c425"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","f097ac806c77b72739816f13bdb245c7"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","075ef657df79d84b3209ec136e4dc49d"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","691c60ffb7dbb21ea42ff7715ce7fc95"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","936f595459cda37ca9e7218766994d2a"],["/2021/10/16/Review/龍與雀斑公主/index.html","358745f585d622bffd19f67dc4193833"],["/2021/10/19/Review/孤狼不想開後宮/index.html","00398bd9da29672d4e6edc75901c3ae0"],["/2021/11/13/Review/徹夜之歌/index.html","909edc584db57914a29d97d98a2958e7"],["/2021/11/24/Review/武煉巔峰/index.html","8654b0d406bfa2781dd6eb83f8c7c3f9"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","c83aa142dd288694b396560fd3d3b2d3"],["/2022/01/28/Review/神醫凰后/index.html","9d8557d6aeedd4868b7c4256c3518dc8"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","c00a4ce7da501b9117fc9dbef9f17e9c"],["/2022/02/13/Review/夏日幽靈/index.html","f1040f59808fe04a5d1fe57c43027c48"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","c446dcf362be2ab4b3245bc405cd2ebe"],["/2022/02/26/Review/賽馬娘/index.html","2660b4ca54ba911f10d28124085e409f"],["/2022/02/27/Review/大欺詐師/index.html","0053077b073f4286a6b70f708b1dcc79"],["/2022/02/28/Review/前輩有夠煩/index.html","9f40b6b6c3a2b84973fcd85e9854b312"],["/2022/02/28/Review/碧藍之海/index.html","6733fbff854f2525006d98cf020cd165"],["/2022/03/05/Review/落第騎士英雄譚/index.html","a962e5dfcddd4c90ccf2d2ca98b41907"],["/2022/03/06/Review/Another/index.html","f7db2612c85ab178e8910a83b004f89f"],["/2022/03/06/Review/入間同學入魔了/index.html","a1c0d2334e152514c4e33d95f4060e43"],["/2022/03/18/Review/再見宣言/index.html","e364e4b59388e5a1cc78b70f02daa4d0"],["/2022/03/23/Review/生若冬花的妳/index.html","8fc4537217a4ea815930988aeb398a93"],["/2022/03/25/Review/天之弱/index.html","53a567889c0876d594ca5f398f7d4f78"],["/2022/03/31/Review/滅了天道之後轉生/index.html","2320ee9c92d75731498c270ca500c29b"],["/2022/04/30/Review/泡泡/index.html","538b62892ef2e8dec004eeae41bd79a3"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","45707734f75a552d6525e5e3a2903098"],["/2022/06/13/Review/偵探已經，死了/index.html","3c0efa6d3e320e4c44f6d69554b2cee0"],["/2022/06/14/Review/黑色子彈/index.html","9a3a3d3cb4c1caa969705eeecae3acb9"],["/2022/06/15/Review/黑白來看守所/index.html","2583b8b0dc072e1f6359e66321f078b3"],["/2022/06/16/Review/虛構推理/index.html","4eecd36adf4582585351fb581a579505"],["/2022/06/17/Review/戀愛與謊言/index.html","26e9d34006909fc1a444f851dec7ecb6"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","e804c07791df4b8f23534fa501ec618f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","1327ab337a1d991d0d8b7c9977c23903"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","167ad0683847257abe40bb75b4e80e20"],["/2022/07/03/Review/Hello World/index.html","aaf312c6369d5d14a62d5002c4348925"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","94d188827e8981f50ed90406e0bbf42f"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","bdd943a8540baa8c9316f045e0cd721d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","261c79f91584efac52affe3d45a9e68b"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","bf9b78c3239839f658188f2c814e014d"],["/2022/07/16/Japanese/動詞分類/index.html","23fc097aeb5793fab62b4039903ababb"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","532d8a0e363db13858bf98c7579dedd5"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","b1c91bac8306866c1002a8f70cbfdae9"],["/2022/07/17/Japanese/音便/index.html","50c482f8bb94c935137063a4b203392d"],["/2022/07/18/Japanese/動詞 時態變化/index.html","1aaaaf9b7b26bd4ad7082c933b97833d"],["/2022/07/19/Japanese/助詞用法整理1/index.html","6e9858c2a81ad16f4e6a10f66d514ace"],["/2022/07/26/Japanese/助詞用法整理2/index.html","84f0d02a42af8863a64b1fafc792d465"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","e8cfc2943b91c654a6ea42c67a26d465"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b63932df62356780a815d82b6a57f3ca"],["/2022/07/30/Japanese/疑問詞/index.html","c15238c4aa20f021ad9120c91ac35ee9"],["/2022/07/31/Japanese/助詞用法整理3/index.html","b8826f9caa3c2527038245a03512743b"],["/2022/08/02/Japanese/副詞整理/index.html","ec40234814e8580b72defdf92e9b2e80"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","c98b7ed53881cf654613bbe72ecdd1d9"],["/2022/11/04/Programming/Data Structure/index.html","f7555e5a81c9f1770990fc2d3be0428c"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","964fed6e137fc15039214b2f862208a4"],["/2022/11/22/Review/組長女兒與保姆/index.html","f29e972175dd906b0ac95b040f5e7e92"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","95bee839cb46af815f9a14ef10504e35"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","4afa28573d51934ff59b10c124fc858f"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","b5f7d825cf02a27d66bafc7dd6c9c138"],["/404.html","ca336249b61a6cf95d8051f56d0d71f4"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","45b6f22bdd9c7f3ab5b024a2144c9340"],["/archives/2019/11/index.html","74ba78584df2303638f096a806876454"],["/archives/2019/12/index.html","f5c292871ea8c145d22b1998c4b0582f"],["/archives/2019/index.html","1d0fab199a107bbeaa465f8d62c8e2db"],["/archives/2020/01/index.html","7a2413e6947591af0fcfd0a6c47edcb5"],["/archives/2020/02/index.html","870979f1ff4472899cbe423c1d19b2a3"],["/archives/2020/03/index.html","1137fd3f64610182746be5a3a51932df"],["/archives/2020/04/index.html","651f921783c15c62fdd76946c9a8128d"],["/archives/2020/05/index.html","1b171c98358d77a18470f0af94c96948"],["/archives/2020/07/index.html","9712c151ffef624e059409efa32b6789"],["/archives/2020/08/index.html","14233652db5d352930185900a65e9161"],["/archives/2020/09/index.html","2b51528374df860da9535db015c545a3"],["/archives/2020/10/index.html","554f540c65ea36e67c9b3df2d7dd1c4f"],["/archives/2020/11/index.html","3157acdd540ac1c226687b3814530897"],["/archives/2020/12/index.html","22c5700fabe41e3c90ced9289cdad150"],["/archives/2020/index.html","a9b50d623b89e49a55e5e6735097aa0b"],["/archives/2020/page/2/index.html","b0446bffe432ec831af3d3e96b6fabb3"],["/archives/2020/page/3/index.html","4e4b9bb1fe054b94e2fff09fd0f93f06"],["/archives/2021/04/index.html","4fd3a4f4ba0955c7a2d18b75709ac678"],["/archives/2021/05/index.html","06eddd5f233e8d2361ff55a0d2371675"],["/archives/2021/06/index.html","b2ccb7d3cc004de875218f7143799ab3"],["/archives/2021/06/page/2/index.html","527a7bc23bcdb0a300a71e70c9b9f52b"],["/archives/2021/07/index.html","fa96ff0d0d47adf34dd2aa35ee126801"],["/archives/2021/07/page/2/index.html","8c45be95a06eec7fc84543d3f333aa7d"],["/archives/2021/07/page/3/index.html","e402747ccd789c6abf5990e9115d78d4"],["/archives/2021/08/index.html","06757d6d82737b7dcee5218a7100b3f5"],["/archives/2021/09/index.html","cdc750d38ab908619ee624f735b931bc"],["/archives/2021/10/index.html","9282993a56bd01b5a2cd62f3a3c7e236"],["/archives/2021/11/index.html","aa009c03834905191a5b0cad3c5f7006"],["/archives/2021/12/index.html","663a40e573527ee6d1ba3737492bf871"],["/archives/2021/index.html","0ccd7fbb54a90aa6bc8009171efde070"],["/archives/2021/page/2/index.html","770538464a57a37710bd4a59409544ea"],["/archives/2021/page/3/index.html","dfa7c77fa7999e04e056c49046b34f3c"],["/archives/2021/page/4/index.html","30f726ed849c18853ae3a16314d06358"],["/archives/2021/page/5/index.html","7a22b4673241f8202bed2a7d2129ce9e"],["/archives/2021/page/6/index.html","a8c57013e73d067b684aea6dc94504bc"],["/archives/2021/page/7/index.html","3e72401715fcc153875f6b0676e119b7"],["/archives/2022/01/index.html","7b20153d46fedaa89517ff4ae1643fda"],["/archives/2022/02/index.html","2de6bd4b2cd0951f5732b11ef8fbf8f7"],["/archives/2022/03/index.html","8a6ae614dd7d6a0729f67fb140b62ef6"],["/archives/2022/04/index.html","006249d11e441f8bb90a820c6cfb42ed"],["/archives/2022/05/index.html","68724de0a5b8b845c54e6814027ae1dc"],["/archives/2022/06/index.html","92e9dc8b4200f92aba71e4fc59119449"],["/archives/2022/07/index.html","5e7b5f2b972e9e4bd91b11d79273b56b"],["/archives/2022/07/page/2/index.html","f426989797d1f4ea1f30c515942bed05"],["/archives/2022/08/index.html","da9cc21f69b8b10288cb85743b1664d6"],["/archives/2022/11/index.html","33f2b888bf3ce8e6b6a27a40f0dc875a"],["/archives/2022/12/index.html","09f0346109be22588d628ee73d8ed861"],["/archives/2022/index.html","66cd7fd3a569cb7f3336e3b206d30f0d"],["/archives/2022/page/2/index.html","55dee682401b09e9d78b1aa3e632ec69"],["/archives/2022/page/3/index.html","d78aa94b9fa8707c3b6435fa6fb8bea0"],["/archives/2022/page/4/index.html","7e0a04dee1075ac8c808695fd527c7eb"],["/archives/2022/page/5/index.html","31ef33f5562b2cfd8afb29f56e8b45f8"],["/archives/index.html","f629b2a15411050813cf152be213db20"],["/archives/page/10/index.html","957780bd0ebde54e26eea03eba52b8f1"],["/archives/page/11/index.html","a3bdbf9fa5c152aceec86f6e36b1a3fc"],["/archives/page/12/index.html","4722ba2d78fdd4289457eb66bccb44c4"],["/archives/page/13/index.html","649e422150fc2d97ff1cab00a5b0208d"],["/archives/page/14/index.html","7cbaea9ee8c2e467748ad159e3d72c87"],["/archives/page/15/index.html","ad748033c5437ec56dfc7a4f5eec715a"],["/archives/page/2/index.html","3437f93d3ed128812c51e290951d08eb"],["/archives/page/3/index.html","71a4bf33b6151495badb8e08ab36d054"],["/archives/page/4/index.html","92f5d438a38192eb99bdc64268bd19ee"],["/archives/page/5/index.html","de6b4e07588044086c17f7073041ba56"],["/archives/page/6/index.html","c2bc6aa3d26145c4ae42c1f9a830fb6e"],["/archives/page/7/index.html","a66be1f0ce1530e010f2b9f7c2948a79"],["/archives/page/8/index.html","af43753628f54f241d534198b419d693"],["/archives/page/9/index.html","ef54e663ffe8fd32932823df4d8499a0"],["/categories/Programming/index.html","a2cd197bf419ad6759100f1e5bdd8fbb"],["/categories/Review/index.html","2a10b20e2eab26f4a5bc54709c55395e"],["/categories/Review/page/10/index.html","d770241ca7c7cc648c299d1da4795acc"],["/categories/Review/page/11/index.html","7eb955f759abe2e440fc33bc0649246e"],["/categories/Review/page/12/index.html","a5e3846b36ddee3cc3f9e296bfa17c20"],["/categories/Review/page/13/index.html","4d2000ec58dfa2549ca48d2731ca7e52"],["/categories/Review/page/2/index.html","4b27f3bac4ee36562b678daa3bba6779"],["/categories/Review/page/3/index.html","8668162cf537122ac151856752f9efc0"],["/categories/Review/page/4/index.html","e9bdc711669ee9f14cf8d65b0828a5ad"],["/categories/Review/page/5/index.html","9d834fc811653925bb14d81892023f3d"],["/categories/Review/page/6/index.html","2b4a3a0ce1e5b9cb071065d2021fdaef"],["/categories/Review/page/7/index.html","00d35ddb35efb19f38cfc26baecb8ece"],["/categories/Review/page/8/index.html","394eb6a0979418060841415e8c44dd53"],["/categories/Review/page/9/index.html","cb6eb64f8446a597f9d8b8288ace6a78"],["/categories/index.html","c5d6ddf3af89e7481e4ee87d4b1dddf2"],["/categories/日本語/index.html","870e5515eb6200d5888d4b6f936db941"],["/categories/日本語/page/2/index.html","13ffedadfbeb92776153e97aa6d27239"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b9232be15232d1848d6852738f7a34b8"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e676118ec4f99d3435efdf8b242bb1ca"],["/page/10/index.html","cff6655c6a0bbf3debd4bbfb7e9a1e35"],["/page/11/index.html","685160800f0fdb54c62408d9cc6f940a"],["/page/12/index.html","dcce28af20afd469fce73f855de2fa1e"],["/page/13/index.html","9579668c31e8f1f42f270ce6121c0fc3"],["/page/14/index.html","e6b0ab8532af3e0b0e73a70ef8cefe37"],["/page/15/index.html","14fda06acccfb4993a39d709f1992a28"],["/page/2/index.html","0f57e1380662422869942ad52859adae"],["/page/3/index.html","f1b6a970cbf9460488c4f22519e97e4a"],["/page/4/index.html","83a5ee00cfd6f49dd969d1b9ee5dfd51"],["/page/5/index.html","2cfa71908bc853d43594a7b073245ecc"],["/page/6/index.html","571b66157925ebae1622beb4254a3471"],["/page/7/index.html","7d87fbb3b7d69713f6cfe728612095f5"],["/page/8/index.html","0a1e886d7b3ec62be89b92d9c4e3c0cb"],["/page/9/index.html","d9ea2c788402705a5b985e9c33cf2698"],["/sw-register.js","3ccd816c09faad4e0a37ec9305f86a0a"],["/tags/10分作品/index.html","8496d966c3c6ec47dc5ee729ce831ada"],["/tags/3分作品/index.html","19eeb2d0b012351bb07f53fff8425ea2"],["/tags/4分作品/index.html","275e834c5d91da55acd331285ea04109"],["/tags/5分作品/index.html","8e6b1751b5f4bd9c7adeb97953389b7a"],["/tags/6分作品/index.html","79f59ed9eeff9a68379d5a42fe26e1c6"],["/tags/6分作品/page/2/index.html","7a94b6adc991db41ca7e7f272996d720"],["/tags/6分作品/page/3/index.html","2254af5d54aa229bdde8acc2a224603f"],["/tags/7分作品/index.html","a9f8329509800ec83180189ad49477a4"],["/tags/7分作品/page/2/index.html","b571e1cead404cc8499fe15ca0b2aa29"],["/tags/7分作品/page/3/index.html","5e67dfb49d9b4cb8b35fc73e234f9718"],["/tags/7分作品/page/4/index.html","e9ce15f5eb8546ccf8b1482651c85a01"],["/tags/8分作品/index.html","f9c07959e1475b0552e59104ad2b9a56"],["/tags/8分作品/page/2/index.html","71851dcf2ed33f0413597e9c38a84081"],["/tags/8分作品/page/3/index.html","1ad223b80ee459eede1604ee91a23570"],["/tags/8分作品/page/4/index.html","e12c5c5a7ca4b4462d488445512a6a83"],["/tags/8分作品/page/5/index.html","a5159ed015f0d56e28a4adef6345e17e"],["/tags/9分作品/index.html","772066344a56d20c3842771a74f1522b"],["/tags/N5難度/index.html","312799434239ef38a8dbb55f55b2ac61"],["/tags/N5難度/page/2/index.html","ec289f84fd8f158e0353e2afc7d7437b"],["/tags/index.html","8ad02cc98432e9d12d85becf81fd7b51"],["/tags/アボガド６/index.html","da0e4a42d6fbc2c2fce4d423957100b2"],["/tags/三秋縋/index.html","11feb72583c94cb339b14fb07617a5ac"],["/tags/中國武俠/index.html","3e02ed941fa61c2a62a615b440ea66e0"],["/tags/中國言情/index.html","d208b54e9ef84f2d342bde82f4249f04"],["/tags/二宮敦人/index.html","8219c726ed552c6cc339bd516ba628cc"],["/tags/人性/index.html","588d690abc794a00516cbb0448128d53"],["/tags/人際/index.html","2154f42e3267cde983621a6da6f1acba"],["/tags/住野夜/index.html","e80f007bae9b5e6a392fb340cc6e7007"],["/tags/佐野徹夜/index.html","8bb77cea65e2f23d8785cdf3e912269b"],["/tags/努力/index.html","35a0dc8b35b4e6d7e67bdf226c096f0f"],["/tags/動畫/index.html","5d74e8e33f31ec7fe0583358f06cf5c4"],["/tags/動畫/page/2/index.html","0d4847b563807f39f6b410b26c0c4031"],["/tags/動畫/page/3/index.html","e986ee0819a835601547aafc2f8312e4"],["/tags/動畫/page/4/index.html","04a03a36cfbdad62faef1ac1a90d7eaa"],["/tags/原諒/index.html","3005c4d5e2ab26c0d002029874308d69"],["/tags/反烏托邦/index.html","269df94529d20c4012eaa35b95941edc"],["/tags/啞鳴/index.html","3f756340dbba2249175d1c8576f4cc16"],["/tags/喜劇/index.html","e98d66a51169fe622be433279203668c"],["/tags/夢想/index.html","3dc96e5da464d275880cf1210518597a"],["/tags/天澤夏月/index.html","43ab06e9f988695e2393731f61729153"],["/tags/學習/index.html","bb2989e96f69865bd9e377d3e7f2a5fb"],["/tags/學習/page/2/index.html","bc58e8724787aed5c9d1b4e3ac778132"],["/tags/宮崎駿/index.html","f33db79be1fd032c812725f1f85a52e7"],["/tags/小說/index.html","3519891e73233475e12f5b54fdf754c7"],["/tags/小說/page/2/index.html","f2ed473bc52866403fcec3b0edad9b49"],["/tags/小說/page/3/index.html","b13f755a10773b6faaf8b5414ead2710"],["/tags/小說/page/4/index.html","027c0450975a118d9d93fcc35eabfc8b"],["/tags/小說/page/5/index.html","984ba1218050c9528e055dd8a983e2c3"],["/tags/小說/page/6/index.html","54fa26265d501ea9f73ef9fd97ad2431"],["/tags/小說/page/7/index.html","b39b184a8f7c3a03b52645f88c5893ab"],["/tags/平淡生活/index.html","1feb20af8c4eed7343ef45ba25310ee5"],["/tags/幸福/index.html","a24029423ed7e5fd05c63eded7a29392"],["/tags/志茂文彥/index.html","84eab33de0eb4b72e6d6c8e2d5389c85"],["/tags/愛情/index.html","812dbc50642b9462a9a7563237d87b42"],["/tags/愛情/page/2/index.html","5bbfcbd6288bb968a7802d662e5541a1"],["/tags/愛情/page/3/index.html","569c1935a55e0a7b382fe55dec97d198"],["/tags/感動/index.html","08c4bfe7ee8f6ac649a6ba5d592dbcb9"],["/tags/懸疑/index.html","ff63d0652475a35960731dda8f4b9d2b"],["/tags/懸疑科幻/index.html","a9876ef57e07631989511f0d1330d888"],["/tags/戀愛/index.html","944669cc5777b6085fcb329d61e9b464"],["/tags/成長/index.html","c15f21705e1f8f93922e64471567dff5"],["/tags/成長/page/2/index.html","a5060c07e04d58f0789d8f45621c2e9e"],["/tags/戰爭/index.html","dcf07dcc07b3887f34e75fefbbda600a"],["/tags/推理/index.html","37ae57ff610afe1f50b20e28b4c1e5c0"],["/tags/搞笑/index.html","c6683a42098381c9c2a04e79f0bf63bf"],["/tags/救贖/index.html","c3133bc0665063d3f36a251f69184dae"],["/tags/斜線堂有紀/index.html","3ab8992987a36d3428a52e4f2dbfa1ff"],["/tags/日常/index.html","6d8abc642995bc48fc34de4f3ff570e4"],["/tags/末日/index.html","fcf6187a6d524218673da87f32ecfcc7"],["/tags/校園/index.html","f75c31fd9555fd990b06201d743d425b"],["/tags/武俠/index.html","761b01ba4cc99616115818819da8d8f6"],["/tags/武俠言情/index.html","a9de2f66e80e71afd19e1c89cf789c2f"],["/tags/漫畫/index.html","dd4fb117f01b289c8914b87df949b8bc"],["/tags/生命/index.html","5477116ec05623b57450bbf2d2fb5076"],["/tags/生命/page/2/index.html","dcaecbb5faca7a03d98ac12db0169c3a"],["/tags/短篇/index.html","9fc7cfe92366d454f020c85700995940"],["/tags/社會/index.html","a4d8c5fc773a4e6541ce8e57b0081538"],["/tags/科幻/index.html","b76d9c9df01bb89e940c4a31511d8a63"],["/tags/童話/index.html","6d6cf98582ff4a5a65202fc3ce17c87f"],["/tags/競爭/index.html","90baef6b080c5e02fa05443d7c6f0454"],["/tags/自我/index.html","25553a920ea05af9ab1e1df8b05c8c14"],["/tags/自我認知/index.html","87c81bada2325274757edca18723eadb"],["/tags/葦舟ナツ/index.html","3f73a3c5da49adf38bbfe8c32d5939df"],["/tags/藤萬留/index.html","720852bfc81a91e7255788372650230f"],["/tags/親情/index.html","88651603b8b720bc731253e147c80e94"],["/tags/雜項/index.html","7cf8380949f2db91ddac5b54bc1a522d"],["/tags/電影/index.html","3b3e25556c2d5da45e46427c4ffd1aa9"],["/tags/電影/page/2/index.html","efd53dc11dbb50db2a4bc48a1ffe7500"],["/tags/霸凌/index.html","dda772547401bba255886e61774f4c31"],["/tags/青春/index.html","458eda42fc22f8dde03fc4cd6eba5f5f"]];
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
