/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","3ac437e4be19bfe17d57f07a13be2aee"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","07643c2611e2d54fe30641e51ff0f47d"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","b6352b3a4ae34621394c5b484fe0b813"],["/2019/12/25/Review/無法計算的青春/index.html","6dc297321caa40fcef702275fb7e0c0c"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","ff8642fe15c51965169b9a19ec734e3d"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","d7ca50e41503aa0629f375d600816ea2"],["/2020/01/19/Review/下雨天，不上學/index.html","483e8f94382575d8e320b204a422513a"],["/2020/01/26/Review/三日間的幸福/index.html","79c0ba8408facfff225d082c1ba10ac3"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","74115d80b201ba2f52801b027d43ce1e"],["/2020/02/09/Review/青春期超感應/index.html","d4e99772bc79023afcda46d16c4c65e7"],["/2020/02/15/Review/又做了，相同的夢/index.html","c2cf1e49c1d81c6b82edf47f557294c8"],["/2020/02/22/Review/回憶當鋪/index.html","72855c27ddd32c5d687af9e671273b86"],["/2020/03/22/Review/不適合自殺的季節/index.html","d7b3063a9826fd66cffaf29ef4e64d70"],["/2020/04/26/Review/我們都無法成為大人/index.html","7b3c3143f0c82fcf6ce009e761f2e73b"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","47b120dac277acc980bae153c9e95c21"],["/2020/05/17/Review/人間失格/index.html","6eb514c6d2e4b150c71901c6a6343163"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","3a5f15a650c95cd65cc48bd855010f14"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","90ff2c651197af991cc69a38944d47ea"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6b7d7b2d4f515defc23b55dd9c148e8a"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","ce282e497249dc7317746f69653adc2c"],["/2020/08/16/Review/15歲的恐怖分子/index.html","2360854c037cfdf4ef8872c3472b4424"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","dcb80951ff090bec261e59009c6ffb97"],["/2020/09/13/Review/羅生門/index.html","faaa8537580441c2ef66de2d7f4e4d68"],["/2020/09/20/Review/闇夜的怪物/index.html","409403337687d206f813a93e35eea94b"],["/2020/09/27/Review/14歲，明日的課表/index.html","2312184902be21d7ebb506d0c4208737"],["/2020/10/04/Review/致十年後的你/index.html","4b016b1bb8dbb2ec3bf83dc3b7dc0086"],["/2020/11/08/Review/滅絕之園/index.html","0552c3434bacad2462e6848c38855d08"],["/2020/11/15/Review/將愛拒於門外/index.html","b0ceb837639579ebdc6b3184656c612f"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","9695aa4065a0d626846b0f589098b38b"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","184ebdc029961952ea6c7591491b2547"],["/2021/04/22/Review/道印/index.html","69e305f80c8bcdb2c5049d824e1ddf8f"],["/2021/05/03/Review/戀入膏肓/index.html","ac3aa761722838e1e3dc072184673c4d"],["/2021/05/10/Review/Dice/index.html","06f2b8f1d5ea63d05423361ad68a0e82"],["/2021/05/15/Review/魔女之旅/index.html","a73d8170d4f60988decb0a7320d31a41"],["/2021/05/28/Review/戀愛寄生蟲/index.html","80d1c8ead9b65e33271cbb4a3b2618b4"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","78020362eccc43f1a8b86f9a1071ed30"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","e57f82a29b37d592a446de8819fe32d9"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","727f9e9031db82af19f35d73cb61cea0"],["/2021/06/05/Review/流浪的月/index.html","65e489068dbad2b8ed709920d11ba645"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","08f8f4d3d5656223d783e57c6dfd799c"],["/2021/06/13/Review/第一人稱單數/index.html","246b7a03aaaa6a7d1c7e8842486216f2"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","0205b1a6e627f9d949146b8b675c8474"],["/2021/06/16/Review/願你幸福/index.html","155a759e24bc406265a3daa682394509"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","c056d5e29bd4387fadb11c41e238c1a7"],["/2021/06/21/Review/神隱少女/index.html","87080adcf354384694cd73bc13830026"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","3f5444e9d3c5f19cd21db38f8e0f0806"],["/2021/06/23/Review/天空之城/index.html","f661514d609f81820cf2ade54c9c2bdf"],["/2021/06/24/Review/魔女宅急便/index.html","bdffb33ce9cc1f04ef978673bf166e71"],["/2021/06/25/Review/借物少女艾利緹/index.html","1773be7752903f20a90a1c44f5544be3"],["/2021/06/26/Review/魔法公主/index.html","7c889b39f82e0f16475b12dcdbec1a66"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","22a56cfe4f90ca76124e50acbd03102f"],["/2021/07/04/Review/飛雪與劍/index.html","b8cce99407edb9eed476ee8d960128bd"],["/2021/07/09/Review/地球防衛少年/index.html","300df686597364e11fbe3c82e644e370"],["/2021/07/12/Review/Angel Beats!/index.html","c24d5ea4bba010e12c1d5f563a792799"],["/2021/07/13/Review/Clannad/index.html","25a0eb088a665c402f6eea885cf887f3"],["/2021/07/15/Review/AIR/index.html","8fc41a6736ca2a90da5f49455aaec80f"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","22925d90fe2dda18287292024a8eac4b"],["/2021/07/15/Review/螢火之森/index.html","5e1dfbccf9c63609d99445287e5c3700"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","b89c3f1f2d5cb4c4cc14456de93e2744"],["/2021/07/17/Review/奇蛋物語/index.html","81b44bf2ffd27523a7a72bf5be3f0efc"],["/2021/07/18/Review/Vivy/index.html","ce9d258fdc6cfb724ae2714e94ea8f6d"],["/2021/07/18/Review/請妳消失吧/index.html","f0430b0dc568e4a2b2dcba9d7081191d"],["/2021/07/19/Review/漣漪的夜晚/index.html","eae827442e3f8dc22a511e9fdcf90721"],["/2021/07/20/Review/月色真美/index.html","11391189c109ccf0d8b8dd5a4f17b0c8"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","b70fbacbb058d175bd2dcf56055b33fe"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","e7d5c0674b089bb7daf5747902bd0313"],["/2021/07/22/Review/罪惡王冠/index.html","e920d04a7b271965f41298295f6fd3fd"],["/2021/07/23/Review/弱角友崎同學/index.html","dc072f9076bb9151c42feed27d15d519"],["/2021/07/23/Review/惡之教程/index.html","469590666742bbf621f241f39748ec2e"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","fc68fa0a548aeafd6623eb952b8f0658"],["/2021/07/25/Review/魔王勇者/index.html","67cedaa83579340138115b5a47204e2b"],["/2021/07/27/Review/一年A班的怪物/index.html","a0dd393cbe7f09f0510a17b03e52a402"],["/2021/07/27/Review/奇巧計程車/index.html","da5bc6192ae7e782e3cc4d46e17031a6"],["/2021/07/27/Review/專情的碧池學妹/index.html","15e96e5451fa6120d80fa0ab200c38cf"],["/2021/07/29/Review/只有我不存在的城市/index.html","161c69eadfa719b4556d0474aea4ab80"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2058d80db4b435b8524e785d931dcd33"],["/2021/07/30/Review/可塑性記憶/index.html","141f52e4bd6ac924ad26aa03166ff93b"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","bf6fe63547ca488854039cdb49091a34"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f1c28c6f79057758d7244d8308ef0df7"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","15da59732feae90a4dd44074702238fd"],["/2021/08/25/Review/清戀/index.html","216b9e557ddf7e7501f87983afbf77e3"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","740a9861461921ff193e9efca0718767"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","8e1c9f7309f1127c69e01fab922f8851"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","592f137d0d6ce8de2a028705c5a81a7f"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","e7340ac33722871ae42671f33d7becac"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a62cc8ab3b1ec1eea13934ffedeef0e9"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","6186a78842fbc90dd972dfe8e0ad05ed"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3a8ad0835ea376d6a7f6081eb952bf10"],["/2021/10/16/Review/龍與雀斑公主/index.html","dececf55cdb85ae6026bb9ccc6efa7b9"],["/2021/10/19/Review/孤狼不想開後宮/index.html","6e9870292686247cea5b24071eeab2a4"],["/2021/11/13/Review/徹夜之歌/index.html","b6f8a07598e185b3b7c7b9c862e3c049"],["/2021/11/24/Review/武煉巔峰/index.html","2c9e1ad29878272c19270e0212a3362d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","f326597f6ec0109677ddb5bad49953b9"],["/2022/01/28/Review/神醫凰后/index.html","0a1d51a529a2b70e1439fa8892b44f49"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","2cc2cbed46bb542dc53eb26d683fcda0"],["/2022/02/13/Review/夏日幽靈/index.html","013afc58b3d98b30214b949add5431d0"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","116ccf9bc93045c234ec37fc49061bf6"],["/2022/02/26/Review/賽馬娘/index.html","838dac9a65013d698e56d605a2b16959"],["/2022/02/27/Review/大欺詐師/index.html","f3deaed6eab39cd6acdd811f4e4938ff"],["/2022/02/28/Review/前輩有夠煩/index.html","58480914851b3f6d7362a9c06f21ddc0"],["/2022/02/28/Review/碧藍之海/index.html","8680c0c4cd79b76782922f04e1326339"],["/2022/03/05/Review/落第騎士英雄譚/index.html","80ccf31879e31da1d0708994aa101391"],["/2022/03/06/Review/Another/index.html","17a390141dd73600b890c9bc87e3261f"],["/2022/03/06/Review/入間同學入魔了/index.html","5ac82a31e63e4dbeb5ada930b369621c"],["/2022/03/18/Review/再見宣言/index.html","07ded51a5277aa1aff5f347e9066b70f"],["/2022/03/23/Review/生若冬花的妳/index.html","f6d018952d9d1fa5d37d5e8774d80382"],["/2022/03/25/Review/天之弱/index.html","e2bb40e00cc5573b33f5cf44f71f108c"],["/2022/03/31/Review/滅了天道之後轉生/index.html","f55759511da67fd3b5400e9fe1cc1a6f"],["/2022/04/30/Review/泡泡/index.html","1adaa2f7ec20e913992bd28c4a8ce69d"],["/2022/05/04/Programming/Dynamic Programming/index.html","97c173cc50c28b36ac41de424825a251"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","b555b91dcfccfe037a2b78cd479bb55f"],["/2022/06/13/Review/偵探已經，死了/index.html","7b4a6100eb7532354cc5614b5054c4e6"],["/2022/06/14/Review/黑色子彈/index.html","ac22f34cf0c6093fa6e0077466e20a4b"],["/2022/06/15/Review/黑白來看守所/index.html","8b02baf619b20e6517acb57477593f2b"],["/2022/06/16/Review/虛構推理/index.html","5386c453a9321798263a3e946645b333"],["/2022/06/17/Review/戀愛與謊言/index.html","027fc118ad28e95e8dd9c4ee04391ac6"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","9c757c0a068a801122e638b6ecf48c20"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f8133eb6bddb1d6903ab85ffd89d156d"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ae420c6c956a153713ccd788f72315f1"],["/2022/07/03/Review/Hello World/index.html","ba9e77ae6742412f1651e2bd53f1c6ee"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a7b30b3a8240ec819c466f8856a56bab"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","27a98269beadc2f461701a13632567e7"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","24c4974a17b41d928f2e85d2592aa5d9"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","2449edd7a67b867001b84e9cb44657c1"],["/2022/07/16/Japanese/動詞分類/index.html","2a9ccba38c20744c91a81703a6a79c02"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","c617e93240fd754099ac3b8643b1051c"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e482381d573db7b30af6b43dae56fb25"],["/2022/07/17/Japanese/音便/index.html","1a8b55513e777db5747d4c7c946816ac"],["/2022/07/18/Japanese/動詞 時態變化/index.html","4d3d39135cdcb25b035ab79c675ce602"],["/2022/07/19/Japanese/助詞用法整理1/index.html","cc484d520d149a49416a35731074b394"],["/2022/07/26/Japanese/助詞用法整理2/index.html","d8112e4970bc4985762949175b79ab3e"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","778e1ed5ece7dcc92c1e56a8e6b253ab"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","9dc80a4f1c46ae47fb4cbb7b5ccb585d"],["/2022/07/30/Japanese/疑問詞/index.html","041d506563f51922b39c57ba6ebd28a2"],["/2022/07/31/Japanese/助詞用法整理3/index.html","f71a2beb39e07ff021b0a356d7fd0b5a"],["/2022/08/02/Japanese/副詞整理/index.html","c3e7a83b370e70b3563b6146f0c346cf"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","90347b41ff8a3044ff72c17efdf97918"],["/2022/11/04/Programming/Data Structure/index.html","50d6dd4a489a86a00b60ae66d066ea24"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","9665671c35f8cf87e126e615a8185b3d"],["/2022/11/22/Review/組長女兒與保姆/index.html","3a244db4781254b80a8adf0eac6db58d"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","38d83f598a1898cc01eed0a3a4b871b9"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","9a5b635f8f87f365095d1c910c187f88"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","d96a1aae57c0d2016df2c1ade61794c6"],["/2022/12/31/Lyrics/一番の宝物/index.html","4e84646f8736670c75e0315d6b6a8b7e"],["/2023/01/01/Review/あの夏が飽和する/index.html","758f73c2c5b83bef6417ceafe3165f88"],["/2023/01/02/Review/孤獨搖滾/index.html","d11eb8e551cd90a44c76e76cfedc453c"],["/2023/01/02/Review/藍色監獄/index.html","666c4daa4e76d6031e1eb52833ba4d30"],["/2023/01/03/Review/來自深淵/index.html","4ce3ff6b3c4f54b7131ed6ed1e1eb37c"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","472f50862ad3d55ef446995715455e15"],["/2023/01/05/Review/處刑少女的生存之道/index.html","d7b8ca742095bb74c76198d4e6547770"],["/404.html","4ee9262a808f7f0d3be72eb87e747522"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b8962bddf314b1ad16818a3b23836f45"],["/archives/2019/07/index.html","902b968589e32a591c1fade7c86b6aec"],["/archives/2019/11/index.html","453e7ba18c047a803cb37f609b7f3902"],["/archives/2019/12/index.html","c9e54dec5fd190e1437584cb3f44f047"],["/archives/2019/index.html","26b1e0adb8f438a8d01c43609222774c"],["/archives/2020/01/index.html","c1fe0766b919e4967c90eec399284634"],["/archives/2020/02/index.html","94f453e2123c56cd4ac7d4587ba9f349"],["/archives/2020/03/index.html","ee7334de8aed7a41a08c0916e21acc37"],["/archives/2020/04/index.html","52f146542f7e78fe96fc9ca737a23343"],["/archives/2020/05/index.html","cf7cad3a847cf442727955d8505f1e6f"],["/archives/2020/07/index.html","ad5a7327af69577aaf88b656f1ac2754"],["/archives/2020/08/index.html","7bc6eb517b1f5bc9a7a556ed56b33a33"],["/archives/2020/09/index.html","e2d089b5265e886ca68f3462ad4c8748"],["/archives/2020/10/index.html","17f0827f96a8c93e2290fcb2852f3179"],["/archives/2020/11/index.html","bfda0778509207e8283a090e4989cbd0"],["/archives/2020/12/index.html","be91b91daa345b12ace218fdfc5d9670"],["/archives/2020/index.html","dfa0ceae2861b8f2bc2e336cd19b8249"],["/archives/2020/page/2/index.html","a9a6b6e39000ca8da884cd0a11e0d95b"],["/archives/2020/page/3/index.html","a9762b59c8f13211cd07a6bd8cddc18b"],["/archives/2021/04/index.html","be46fc92f3974ab042754a1cab67bcbf"],["/archives/2021/05/index.html","495b5cebadf7ebc5e0407324be17baaf"],["/archives/2021/06/index.html","e18b98551088754dcbb491085bcf0633"],["/archives/2021/06/page/2/index.html","caadb0b52ae7d11d09a5c751c2e82cae"],["/archives/2021/07/index.html","cc3a016f3dc6d17b0f0191c36de957bc"],["/archives/2021/07/page/2/index.html","2d24a8e9b8e7670e8926141fcbf7932c"],["/archives/2021/07/page/3/index.html","90090b35cdb231ad6dba64125ae84aff"],["/archives/2021/08/index.html","4806ed7679e3566c1530f49dc4038f5b"],["/archives/2021/09/index.html","a47f02985e893fee18cfc466dc7c74c2"],["/archives/2021/10/index.html","8be93b86c8f9b012bb9f80537c4e08e4"],["/archives/2021/11/index.html","52af6ecf7d6b2d9c56b4c609e48e71b7"],["/archives/2021/12/index.html","5bc0b9082708b3ecc2e2fb2ea46b3bbb"],["/archives/2021/index.html","d0be115f2ac54c3f96e0a71b2949a4d9"],["/archives/2021/page/2/index.html","f1906bbbed2dd4dbe4a5916387fa75ee"],["/archives/2021/page/3/index.html","5efa81f2f290a3f5edee36a8bd354173"],["/archives/2021/page/4/index.html","c06996b3006aca1eb76ec102c67a3ff8"],["/archives/2021/page/5/index.html","de674af3e23b3bb84e10226506b410f2"],["/archives/2021/page/6/index.html","8f6697158b902b09c5b9aae5017695bb"],["/archives/2021/page/7/index.html","a4c0b20322bc3c2d09e763662e415a35"],["/archives/2022/01/index.html","5d3a5ddf90bc556418df937b47385fb7"],["/archives/2022/02/index.html","f6e97b73cfaaaf2f899a78ff298862e6"],["/archives/2022/03/index.html","e7762a81eb80b7a21f01a1b55110da2e"],["/archives/2022/04/index.html","b51af9c45bdf317bd2193ff4dcf69f21"],["/archives/2022/05/index.html","6e7333c79d2f51340d94e140462ded1c"],["/archives/2022/06/index.html","8421d8867a0e47d45599d2e2efc720fe"],["/archives/2022/07/index.html","e1594a938b90c0c2f8af83e840868217"],["/archives/2022/07/page/2/index.html","c71d4d7ce7a470a3b0c4858075a539a8"],["/archives/2022/08/index.html","e417e5a1e6252df22eb054316d7662a7"],["/archives/2022/11/index.html","1f78cc61443fc2c199db1839ded1d44f"],["/archives/2022/12/index.html","de69d910ab245adba040be901ee1f597"],["/archives/2022/index.html","77cac17cc95ca731f3288952320439e2"],["/archives/2022/page/2/index.html","5772ac7d0c3a591dc27652ef9b590db6"],["/archives/2022/page/3/index.html","424aab503c2352c073ac0596427a49a4"],["/archives/2022/page/4/index.html","c14f08f8ec9b3cbba416b24f83dfbc94"],["/archives/2022/page/5/index.html","3df89112c5852a4a8dbceb054c0bdbae"],["/archives/2022/page/6/index.html","3ceaa971678213ef4e5da7bbf17a131f"],["/archives/2023/01/index.html","f48117653641650ec517abd7e0132072"],["/archives/2023/index.html","2d8ca955d446ee763a6e25da6da94a60"],["/archives/index.html","9e348cdf0b7d52027a76e82463d3ef0c"],["/archives/page/10/index.html","093191cde91a8c829b2122f3a93282b2"],["/archives/page/11/index.html","7abcebb56da8679d0bd46e9f82716b1e"],["/archives/page/12/index.html","f67355f74b5ccd4771d6e0e9b577c387"],["/archives/page/13/index.html","00b0dcc225fac72b5a6fe88e333c3c79"],["/archives/page/14/index.html","373bbede9943067449da87b7e8f97de8"],["/archives/page/15/index.html","81634805a3262ac6eb7d890a45916d17"],["/archives/page/2/index.html","5e05f6216995428464d3781c390baecf"],["/archives/page/3/index.html","2f5425b8538fbecc92edf3e86e89d9ad"],["/archives/page/4/index.html","635a6cbbac43123d183e3b759bd46aec"],["/archives/page/5/index.html","17aebb61df88d2542dfb840027e1f8eb"],["/archives/page/6/index.html","1b57cbaab119a4d5497f98b69cf524b7"],["/archives/page/7/index.html","e39fd5812b30b39e6043871b8b96c6fe"],["/archives/page/8/index.html","c5d05cdf210894f79c87967cccb276aa"],["/archives/page/9/index.html","ddb65ef3ae45cf4f2819585a82aa891a"],["/categories/Lyrics/index.html","2b9d3c80e8d5a0f6f8555e6cf8eebc82"],["/categories/Programming/index.html","3a2e9dd2cd3620981046e56c92efb187"],["/categories/Review/index.html","e86a16848a3dcbe55ad90dfe2a759d9b"],["/categories/Review/page/10/index.html","fb057f628c3520fa78bd622fbdaeaff0"],["/categories/Review/page/11/index.html","b94ecfb3ca82c2a524fc32d04960c414"],["/categories/Review/page/12/index.html","4e487219ad575c75679cac5f228bfe5d"],["/categories/Review/page/13/index.html","653dbd47618d4460668858c1760d6b27"],["/categories/Review/page/2/index.html","ec3bc0c142460782b6c1eab617f6b7fa"],["/categories/Review/page/3/index.html","9405e7a5b4572c11fd7be2c85e8a4eb3"],["/categories/Review/page/4/index.html","5dcc553e21682bb71cae437e8ef99ce7"],["/categories/Review/page/5/index.html","e5aee1426ab617b0d338a63e207f5034"],["/categories/Review/page/6/index.html","13b363da9e34bdf96e63181a85516f2c"],["/categories/Review/page/7/index.html","e06230026c427e5839ccb72306e958f3"],["/categories/Review/page/8/index.html","a2d1af289ace029c6ce41c2f4630484c"],["/categories/Review/page/9/index.html","5521a517c14e2957772f5efc6f8aabad"],["/categories/index.html","1124a70abbe21cb786b93150f9e8de55"],["/categories/日本語/index.html","6796e8b995377ce51213a1df30747887"],["/categories/日本語/page/2/index.html","77cd93fa052668184e6f35ec772ebdb4"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a4ced81a7587f80d5dfe57dff34e823f"],["/js/custom.js","2b7e785b857773766c776e2af8375ca3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","5d187d392fb7a80b45db1f276b38520c"],["/page/10/index.html","9b68f389dbec084fcb7019bd5ec19621"],["/page/11/index.html","ee8add1936852cf4c526fe99c9a4afa6"],["/page/12/index.html","b0d0fc7a25de244473a4550c40fb80a0"],["/page/13/index.html","7b80ce468e2d61b4295acee9bf14aba4"],["/page/14/index.html","20f7ddafb4156d9b73342458298a4838"],["/page/15/index.html","2e43a816e729c404234d90e3f443741d"],["/page/2/index.html","38510947a8af78df42ebdd93862a19ee"],["/page/3/index.html","e38b75d4cb6b8a1be0da1f3835e870d8"],["/page/4/index.html","8466be2e8a3631afd9416faa129c863f"],["/page/5/index.html","b63b7fa075d5df4c982e59b3ee1e3e28"],["/page/6/index.html","b9580ec7501046ddb9a50756f9270ff3"],["/page/7/index.html","76b1c793326c013f48d83be5cea4e4ca"],["/page/8/index.html","2c259446e53f367da48c5446ba720992"],["/page/9/index.html","33f1f663a66e9ea89163d8c68a648fad"],["/sw-register.js","500034b417ca2dc3ef8db362e5e02579"],["/tags/10分作品/index.html","96f847eadf1b9f2497890219436d85b7"],["/tags/3分作品/index.html","c1826a07cb3aec288c76b181b2044f4a"],["/tags/4分作品/index.html","a899431000efcb0c6382068d570493fb"],["/tags/5分作品/index.html","814a33924cd3482a2996ba0dd09ea8ed"],["/tags/6分作品/index.html","77478fcdd3f969c336aa7b0f98c891b8"],["/tags/6分作品/page/2/index.html","291359e0c8c16749e3d0672b5d259d46"],["/tags/6分作品/page/3/index.html","293eba3bf761bf5f44ff101a3956720b"],["/tags/7分作品/index.html","8def353e440b3e8951877304ae5a5271"],["/tags/7分作品/page/2/index.html","8e9dccf9dbeb9ceee566f0f6c82245b3"],["/tags/7分作品/page/3/index.html","92cf53bf0d62a6e17129db2d27ae1e70"],["/tags/7分作品/page/4/index.html","845afffe825196c55c0095fd70752af8"],["/tags/8分作品/index.html","1c5f3de4ce3e62ceb649223b8980595e"],["/tags/8分作品/page/2/index.html","71f4b218da1877751694ed8d1ef768b5"],["/tags/8分作品/page/3/index.html","3c7e9192732fdb6b870da33b08ef1ece"],["/tags/8分作品/page/4/index.html","cb3067f95679fdc21934a890f3b0442d"],["/tags/8分作品/page/5/index.html","ae2ef955744dcb2da1432f7a2d3e7369"],["/tags/9分作品/index.html","91ec4fe79a4255053b144eab39bd67c2"],["/tags/Lyrics/index.html","4c260f438feb3a97f19d4e3bb38bdf48"],["/tags/N5難度/index.html","be8d8e1e7d57c88daa9ae6f656f0e3fc"],["/tags/N5難度/page/2/index.html","d02580034f4ca48edb6073a0a2681430"],["/tags/index.html","1357a7ccb66b30f0ff12706771cae791"],["/tags/アボガド６/index.html","b3468fcf6fa5fe56eaadade0b0439896"],["/tags/三秋縋/index.html","ee5a26d2042e3e2da2414f3e7ec08f78"],["/tags/中國武俠/index.html","97bc2d25964662950ff61f58674b062f"],["/tags/中國言情/index.html","579908887411e5d66c0d9c3de08ca2ea"],["/tags/二宮敦人/index.html","6bf142f06e502e8da095270b5707b74a"],["/tags/人性/index.html","b36aa260ee6042c65597ceee7e5b68e8"],["/tags/人際/index.html","728cf29d7c7b0a33a3037e57111e70f2"],["/tags/住野夜/index.html","4edc2b74298a549507d6b4ecfac492cc"],["/tags/佐野徹夜/index.html","deaa37d2ca20c5c5d8b2a21d28c304df"],["/tags/努力/index.html","9c5b0ac54172fe541971aefbc1928b08"],["/tags/動畫/index.html","5bce8fc80e2761c9c0b9fdb6b800b370"],["/tags/動畫/page/2/index.html","5dd0fd773ea78058839791644da94954"],["/tags/動畫/page/3/index.html","25b7a60866fd4f7f06df9d6101f729c4"],["/tags/動畫/page/4/index.html","2a3b5eff387d05598fc1497eea861cc5"],["/tags/原諒/index.html","4d0147d53fef993fb408e0e13d1cdc66"],["/tags/反烏托邦/index.html","f49687cd55e05539d31d0621076f8101"],["/tags/啞鳴/index.html","a9f0f74bf483124c821a6d1f825746a4"],["/tags/喜劇/index.html","6a75f9eb15c02a2b7f041c0dbf56fe51"],["/tags/夢想/index.html","f414771ad04f04a819391fd1389b3366"],["/tags/天澤夏月/index.html","780d38e8d0b621bfbbcbd594199671ce"],["/tags/奇幻/index.html","872aa7679ad00f0c0055bbffe70d2e7e"],["/tags/學習/index.html","dca8c8c50d64e1b807690eb87af8d063"],["/tags/學習/page/2/index.html","676a398338ec0bb5a5a8c07088e2c42f"],["/tags/宮崎駿/index.html","f9d7014122d154960f79f20b38c4b84e"],["/tags/小說/index.html","6e404b9bb8031b47306688f4220b0301"],["/tags/小說/page/2/index.html","14724d665bfac38c8c3302ea83e9acd2"],["/tags/小說/page/3/index.html","5a722d9d444fca855b7099c5d05343d6"],["/tags/小說/page/4/index.html","c3747188ca545b1d2845e848c84e6c15"],["/tags/小說/page/5/index.html","a50fb480197c7163cccddcc45fe587d1"],["/tags/小說/page/6/index.html","b85ea9c593d4f0d1bf3132b465c2a79d"],["/tags/小說/page/7/index.html","9279d370cd4af1b685e71bf31304b7c3"],["/tags/平淡生活/index.html","12cdb3c25264806d4956c7b342195ae4"],["/tags/幸福/index.html","fcc900d64518bddc44f61f5667984b24"],["/tags/志茂文彥/index.html","598e4c130152973a2c46d8f3bb34c951"],["/tags/愛情/index.html","c82e6e204d07dacaf929885fb8b2b852"],["/tags/愛情/page/2/index.html","041f4b2377794f5e238cc75db54c0b9d"],["/tags/愛情/page/3/index.html","5deed5fa58eb0d427462433dd8045f4c"],["/tags/感動/index.html","768eb84b33e53fbc927db537f6ccfef6"],["/tags/懸疑/index.html","f180898820fdae07f15ff5cd71842dd6"],["/tags/懸疑科幻/index.html","5ee861b95b0da0829f9fe513780d2775"],["/tags/戀愛/index.html","bd72908faca83935ff61628577ac75e7"],["/tags/成長/index.html","12cbe9c838cd7838ec5b48a219e38ea9"],["/tags/成長/page/2/index.html","1cb7969971fab981915bf7e6e5d07884"],["/tags/戰爭/index.html","b572d8be8925084736682347d0a248cd"],["/tags/推理/index.html","797a4ec80788db46577e95154596b2f1"],["/tags/搞笑/index.html","9ed7f101ee81fa47fc656768f4d969d0"],["/tags/救贖/index.html","812de336efd5cc5f8b6021bf5f06d515"],["/tags/斜線堂有紀/index.html","a4b2315a9e1ea4490865c632aae1e3c1"],["/tags/日常/index.html","afe8f0c63aa1b33fcd529b1074a6422f"],["/tags/末日/index.html","29a5c3751263128a17e6a377f49d0d1f"],["/tags/校園/index.html","86ec4be09ceca70a1517395c0efb74fc"],["/tags/武俠/index.html","63ecb0ce3943521f5f505bbff0c9df09"],["/tags/武俠言情/index.html","fb5899dbce7c26e261ebd9589211cb5a"],["/tags/漫畫/index.html","f935b5ab6f725e9e702f02d09b6897f8"],["/tags/生命/index.html","7bb8f38d48e61577da8bb52cf63d44ca"],["/tags/生命/page/2/index.html","561618492c232f48ae00a044bf1930ef"],["/tags/短篇/index.html","bc92717fe272bafbd40588270f6c1558"],["/tags/社會/index.html","06e8322615a0088e6436f53faa26478a"],["/tags/科幻/index.html","8a975c30e8b5fabff4a32ca6023d809e"],["/tags/童話/index.html","bbd6d0f3d6dad9160b20b073dab2e15c"],["/tags/競爭/index.html","5b61da3811cea327042277918cd9b926"],["/tags/自我/index.html","fa1c72fbda957bf85794ed7b56845d86"],["/tags/自我認知/index.html","72cce38c892a03e78212234a27c6b92a"],["/tags/葦舟ナツ/index.html","3444a0c5167ab98bb2cec3b6435db351"],["/tags/藤萬留/index.html","a4cd08eb231eb30b0d22df494676be74"],["/tags/親情/index.html","04388f9342d20d03a069126c96bac6c3"],["/tags/言/index.html","a9d456428f626dd8f70850da5dca8363"],["/tags/雜項/index.html","f75351cd8868d3e9b9506ac3b5af4cba"],["/tags/電影/index.html","ddff53e3c261c10aef228fd5b665ca6a"],["/tags/電影/page/2/index.html","3b35cf39db34e48424663f703873d090"],["/tags/霸凌/index.html","e57f192712cb378b67885947a1413c7a"],["/tags/青春/index.html","74ed436926791125be2f1d838a3ddc38"]];
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
