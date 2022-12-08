/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","3f7f690e7563aee70d98e854dad5c6f0"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","0c2858364300b2b3c8af7a9e8d2f6b77"],["/2019/12/25/Review/無法計算的青春/index.html","eb7cd73d8bfe294d9d7bf1def857ab1d"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","c8e45168e9436eec1be2c35aeef04d35"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","bf86e5b78214f28b4b005002a8065650"],["/2020/01/19/Review/下雨天，不上學/index.html","7e85d078ef97db82e6156093ee416ace"],["/2020/01/26/Review/三日間的幸福/index.html","0b99ec0152238c42538450ca815f19da"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","916008bc029131e9a238a78b67bffc2c"],["/2020/02/09/Review/青春期超感應/index.html","9af20abe575e4557c8865b1268e189d2"],["/2020/02/15/Review/又做了，相同的夢/index.html","694503766e3e3c1cdb036ff30876f16d"],["/2020/02/22/Review/回憶當鋪/index.html","1885b7282446f7844c718b71cc9ff544"],["/2020/03/22/Review/不適合自殺的季節/index.html","f7ca1e7dbd017929f0fe9a15a33e8157"],["/2020/04/26/Review/我們都無法成為大人/index.html","4e5ca923a4d282d260c7e85e178d0cab"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","372a97adfdaa960b1a4008fbf9518e01"],["/2020/05/17/Review/人間失格/index.html","37f566a5a8543a1df2158886cd2c505c"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","10a1a4884ba2521f81493b0550395abb"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","963290e57e4a847f61416157eb66dba9"],["/2020/08/01/Review/銀河鐵道之夜/index.html","c6e62d63094bed2884beff59dae58d9d"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","1cb25f488b115a570f190ebb95716493"],["/2020/08/16/Review/15歲的恐怖分子/index.html","8dfee1281f521c93d566315934174380"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b2d24909e5ae118e05e871792147d74a"],["/2020/09/13/Review/羅生門/index.html","b5a8bb579bd2f3a43eeea384f9ed9232"],["/2020/09/20/Review/闇夜的怪物/index.html","7f9a8b4746f1bfc8c105d3d10c784ee1"],["/2020/09/27/Review/14歲，明日的課表/index.html","b331c5bcf79b382ffe1dd15ba4de33c6"],["/2020/10/04/Review/致十年後的你/index.html","097200d693aa681188cd09ad58a113d9"],["/2020/11/08/Review/滅絕之園/index.html","806a5af2e743e622a0ba1aeaf7681fd2"],["/2020/11/15/Review/將愛拒於門外/index.html","a76f21ff6fb09501ff838c999bc6cf90"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","98e0dddcbfff9732e5edac4398ca4641"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","727f5f63e8443b58801b051e8c2e5691"],["/2021/04/22/Review/道印/index.html","95c747c3b5d573341326fe74ff7582d0"],["/2021/05/03/Review/戀入膏肓/index.html","4c7e3a632938df65c350374c02107328"],["/2021/05/10/Review/Dice/index.html","1b96fcc0854ead1fe37503be3a3ba783"],["/2021/05/15/Review/魔女之旅/index.html","a9cfba7c553e7d61cae89138fccd0edf"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8823e16284f39e1d539674b6cdcf87e0"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","7c5f9d8154c33263ca4fb434a2231e5c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","f0abf85839c6a8db3ea6c0b60d9686dd"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","021423cfa7604d6ff54513e52b22926d"],["/2021/06/05/Review/流浪的月/index.html","f228376a9bc834029022c72be69ef55c"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","c282405bc932c3703bb958e1241169d9"],["/2021/06/13/Review/第一人稱單數/index.html","29f1925740fadac300e0b591745c452e"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2104462a77f7b73477bcf8baa4a1c2c4"],["/2021/06/16/Review/願你幸福/index.html","b1071e14bcd284f52fe9bbf6ceaf4fcb"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","6e2f839f3c5e1f2eec4ed66601d8225a"],["/2021/06/21/Review/神隱少女/index.html","b9901ff1f7cbcba6cdaa8e2305ec5031"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","9ab8e34eeb9ae06557f08658da11506c"],["/2021/06/23/Review/天空之城/index.html","04020ef781488901fc40fd48cd681754"],["/2021/06/24/Review/魔女宅急便/index.html","77bc70a469c544146efe389742c9e1ca"],["/2021/06/25/Review/借物少女艾利緹/index.html","ba573b32ff44e20216f72c0d60c416b6"],["/2021/06/26/Review/魔法公主/index.html","10b2c15b24b4764082e413cbca31efda"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","673bae9d7a02ad81662602fb37211141"],["/2021/07/04/Review/飛雪與劍/index.html","09e9c72689fdcf723cc903c905003677"],["/2021/07/09/Review/地球防衛少年/index.html","1542e77972a71ef2c18bb73d625f4df5"],["/2021/07/12/Review/Angel Beats!/index.html","cb8e502ead0e9d1a71d3e25b2456d387"],["/2021/07/13/Review/Clannad/index.html","274b7ed2576230be99b7a141f084cd4d"],["/2021/07/15/Review/AIR/index.html","ec220bf6d4662620e765fa72f10702a5"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","6940b306de5dd7ad53c29d38d17e228f"],["/2021/07/15/Review/螢火之森/index.html","4cea6eaa13aa4df003ba2c20d5bd9ecc"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","aa77c09b4e87d70e8c0e034f3602c11d"],["/2021/07/17/Review/奇蛋物語/index.html","3f9d3700e79860156099171875c1e64c"],["/2021/07/18/Review/Vivy/index.html","b84ab19975ebd3bc00652df8ab5e42a2"],["/2021/07/18/Review/請妳消失吧/index.html","da8d76f39fa11a826f7f09e28589cf45"],["/2021/07/19/Review/漣漪的夜晚/index.html","8aa4c0d168ba32e99c2579ac97ae157a"],["/2021/07/20/Review/月色真美/index.html","c31ff16959d968ae2bb270f99bac891e"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","18e220a65b32382941f3bb2f42b79a86"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","93b62550508f1340ac616b0cad73302d"],["/2021/07/22/Review/罪惡王冠/index.html","572f258afc0ef3392f49de14a6cc57d0"],["/2021/07/23/Review/弱角友崎同學/index.html","409ec89aea8ca1e295489d6a5d939041"],["/2021/07/23/Review/惡之教程/index.html","38ef1dda6572a6948dd4551125ebb243"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","9ac87fb6f93231ffff93e3be56288481"],["/2021/07/25/Review/魔王勇者/index.html","a033127fd0636740846c56f77d8b818e"],["/2021/07/27/Review/一年A班的怪物/index.html","42a9356001389a402f1977fd02c45229"],["/2021/07/27/Review/奇巧計程車/index.html","bf6f109ceb9a7341720f5d0106ca3539"],["/2021/07/27/Review/專情的碧池學妹/index.html","adbe3923659e8aaf0cd97b5ed87bbd4c"],["/2021/07/29/Review/只有我不存在的城市/index.html","78785e3014b7a110091a158e3e0381e9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","d18495954ec257d39df70ad5f13d98f1"],["/2021/07/30/Review/可塑性記憶/index.html","08786f44319e82c79fea617536786759"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","aff9cfd6e4765c02de05ad4903700f1f"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","896b49ff382916cb1ae3702f90f805e5"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","3348131a886de5c4acce3093024d23f4"],["/2021/08/25/Review/清戀/index.html","801ddc7535a88ac5e5cacc12e4c04b51"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","af46450583b8f7a12d8495786bedf2a4"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","43cdf9019ba450ca1967ad6c9b11902c"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","2cb403ecde8bf50712967ac148038a0e"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","8d6895c1533d29f135211c66f558c66b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a8afe2aa2f98612a633d0da01c467410"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","84a1574820b7234453af43b59fa5e90a"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","921796c044d06987a5f635c48b124d2f"],["/2021/10/16/Review/龍與雀斑公主/index.html","632f9d1e33414f544ff39c80c3d76228"],["/2021/10/19/Review/孤狼不想開後宮/index.html","f9fb17e3ab45ccd3cf1953f40c37d0a4"],["/2021/11/13/Review/徹夜之歌/index.html","2a707b85d42dd8897ec0b25e50d1babb"],["/2021/11/24/Review/武煉巔峰/index.html","f3f7252654d09785c213b3f965eba645"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","a239fad5ff9d40dcfb92aa18349b4cd4"],["/2022/01/28/Review/神醫凰后/index.html","f1f7b5582a1bb6a41381e8ab7e72b5e2"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","6e232a798441977430468580d859205e"],["/2022/02/13/Review/夏日幽靈/index.html","391f9f404466f27f5e8e37473bc033ce"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","1c5c3ba900352a948ae0ff5fd937dadc"],["/2022/02/26/Review/賽馬娘/index.html","6a656e5bf1e79a3c51ec2de1b0e49d86"],["/2022/02/27/Review/大欺詐師/index.html","b677081f27141c16bdd62d13843b7433"],["/2022/02/28/Review/前輩有夠煩/index.html","6f71aa9ecaa44d851ad1e9a2071a0c14"],["/2022/02/28/Review/碧藍之海/index.html","40d3ac713d8a48bf02f91a8cec72a5b9"],["/2022/03/05/Review/落第騎士英雄譚/index.html","7aa2ab0794a399c6f7b139057ef79568"],["/2022/03/06/Review/Another/index.html","40123895460a6daaebdda56c9a1e4547"],["/2022/03/06/Review/入間同學入魔了/index.html","91230c1421f19249c5e845ce6322d4b2"],["/2022/03/18/Review/再見宣言/index.html","ddc3fd9f8f8c41d2f8781a8572d4fce0"],["/2022/03/23/Review/生若冬花的妳/index.html","640017c2885bb4ba8a4be2a42437d950"],["/2022/03/25/Review/天之弱/index.html","ff40b3a28077461287a4d307d37ef879"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c06a114d643b540c805c5fb16a90a0c6"],["/2022/04/30/Review/泡泡/index.html","3cf14ef3d9873ff147c41cff24da9220"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","df9caffb49c6af3479b0e9034da25b8d"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","f8cf172e6220177a2b307923d273c8ff"],["/2022/06/13/Review/偵探已經，死了/index.html","a811f76db1316dd9da51f01e77c823e9"],["/2022/06/14/Review/黑色子彈/index.html","be0c735ada39c5e39740e008f194d863"],["/2022/06/15/Review/黑白來看守所/index.html","b111461ee3628c5f529a7bf204fdc67b"],["/2022/06/16/Review/虛構推理/index.html","64ddc2ac8a4be4fb279e7ccadfd089e8"],["/2022/06/17/Review/戀愛與謊言/index.html","7b7623d431952255882d90ba44a5c092"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","b559e79f057a8a9f74153a317877e46f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","32e3a9da2ba757c88c21334bfaf67f46"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","bec8bd75da0a90efe2579d95dba23208"],["/2022/07/03/Review/Hello World/index.html","bbabbb399ff36a804e9f0c9dacd6b30b"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a8d565dc135eff5775400ee6a163424e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","9b77458c4e4e9bd1884f67c2e320e43a"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","61f5001e851ab6c981add34ad491cdfe"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","3bbc362e6fb7fe2d63844bd2748e78fd"],["/2022/07/16/Japanese/動詞分類/index.html","0b00c637953c41fd00e14feebc7d7135"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","e86aeeedfad2ea1b46a46e6c85d4f9b2"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","15dc7d88c974d158454e592f3b7ddff2"],["/2022/07/17/Japanese/音便/index.html","ae6661181c97bee2ea660635b05ea53a"],["/2022/07/18/Japanese/動詞 時態變化/index.html","9b3bb87ef4e2b6898bab6c994aed29dd"],["/2022/07/19/Japanese/助詞用法整理1/index.html","2153a3a00582f23b770ad835bb01c062"],["/2022/07/26/Japanese/助詞用法整理2/index.html","383ab55758cb1d881a0d6211bfa0d801"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","8856287e40a84cf13cae2a3aa4b9d72f"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","55a1b3585e4703ec2d71b602d66dbc14"],["/2022/07/30/Japanese/疑問詞/index.html","9fa697ef44752e1552fb792f412f4577"],["/2022/07/31/Japanese/助詞用法整理3/index.html","ce2cf20111fba4d7df10905614b7542e"],["/2022/08/02/Japanese/副詞整理/index.html","8cdbc6e88d6fb363fc7f2cb1a5bcee44"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","5da04a12f3567f566ee272df479a0ceb"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","59c58d2b710be96f9797e685d886ee80"],["/2022/11/22/Review/組長女兒與保姆/index.html","5d3e335a4b37f27681a4275211842b52"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","99877b3bc9e0009f3d49ae2ce5aa4232"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","f083a7b1cf492b8c2844c56ba0c03259"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","58a0bb0e58b694aba615b850f8a180f4"],["/404.html","24f2d639dd737cfbf2a81ba2dbbfe0d2"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0f8f821713bf80833f2ddc938f047964"],["/archives/2019/11/index.html","44704680b415ffcf60bd14f890958868"],["/archives/2019/12/index.html","3fb77bafe793facaf6ed363a59e3cabe"],["/archives/2019/index.html","0e3adedaa55b170444e5a138aa96b420"],["/archives/2020/01/index.html","30a6a2a7614435235a2595b96087e6eb"],["/archives/2020/02/index.html","10e7926aa0d33e058456db3298da956f"],["/archives/2020/03/index.html","1027b706ae753dc5fb367ce664b5aed1"],["/archives/2020/04/index.html","9ee1308e4759aa291a6d3f4309c01dee"],["/archives/2020/05/index.html","2eab98fdc13fd71d21f3011e667c991a"],["/archives/2020/07/index.html","66ee08ee5a8e8f9f424b074145d0413f"],["/archives/2020/08/index.html","cf7f57bf7b44cdbef6f39b8a38c4542d"],["/archives/2020/09/index.html","c5ad80e2c0e05e7c90e841a64ea7a771"],["/archives/2020/10/index.html","8113c97dbdcb0e5d6e56e203d86ad0bd"],["/archives/2020/11/index.html","acd76536be60295d23a137571c87f68f"],["/archives/2020/12/index.html","f90807575977c5225cbf1dcc86aeb2ce"],["/archives/2020/index.html","7c22592c5d7e3e81bea54aebcf99c2bf"],["/archives/2020/page/2/index.html","f3c408c060df3493db5edb8636b15c5c"],["/archives/2020/page/3/index.html","a47b5e5a6fc1607c5aed0c09ca1d17b9"],["/archives/2021/04/index.html","72dff1688b5cc91b94177cde923e5319"],["/archives/2021/05/index.html","499fa1dcf3bbf97d8914f5c8f205aec8"],["/archives/2021/06/index.html","e7ca48a1ab222cab4c4059474664c4c2"],["/archives/2021/06/page/2/index.html","a42faf4e33a531dc2949c7595fb53e3a"],["/archives/2021/07/index.html","72d22496b3ff0628042ce6b0533fe72c"],["/archives/2021/07/page/2/index.html","132841679f1681fb3a68c03cce164553"],["/archives/2021/07/page/3/index.html","ccf54e9df6f2aadb5f70aec1a0122153"],["/archives/2021/08/index.html","0046d32331d9ec962b54d2f050deac9a"],["/archives/2021/09/index.html","ded87c0dce720d08dcace97ebdb5dc00"],["/archives/2021/10/index.html","4f145d6c0315b9bf028a4fd8dcc9d2e6"],["/archives/2021/11/index.html","8ce876a7f65b4cb4f37b389fe102281f"],["/archives/2021/12/index.html","bc54f656562d5a9a62295cbba8dc764b"],["/archives/2021/index.html","eac5498245413998efe70344b059f478"],["/archives/2021/page/2/index.html","6aef11843e9d189182ea0f5fefa632e2"],["/archives/2021/page/3/index.html","6bf715cf2030862052b7d1fdf2091671"],["/archives/2021/page/4/index.html","e6db0a9506c5cb34512ee346f3554dea"],["/archives/2021/page/5/index.html","db6c92dd0966a8c5a3664af3ad60f2a7"],["/archives/2021/page/6/index.html","82ea40e45100ead365fe8d278a020647"],["/archives/2021/page/7/index.html","7f531a47a247ffab6a1a41e07d480919"],["/archives/2022/01/index.html","089ba03bef3c5754e93ec9f8bef0afd8"],["/archives/2022/02/index.html","9953c09e87dd5bc2082819445e1dd80b"],["/archives/2022/03/index.html","c0f358f3b976282c84d114debc822642"],["/archives/2022/04/index.html","7bccc82c285b81fff0228ae014dfe6e7"],["/archives/2022/05/index.html","efd175163a706480a860d9f8c20fb1ba"],["/archives/2022/06/index.html","8a879ab5dc879767ce301e44effe2868"],["/archives/2022/07/index.html","c5e8f03fc929d201d7ea5f75e6cbe348"],["/archives/2022/07/page/2/index.html","33aa27773c2959f837bafeababb7cb04"],["/archives/2022/08/index.html","9ace85c1f70577087f2abcd92a6522e6"],["/archives/2022/11/index.html","76ffb701340e6e99240b8ccfae658598"],["/archives/2022/12/index.html","0cb5e8ee41530a680b8ff9ca0568674c"],["/archives/2022/index.html","223aa7519515bd2b417c2898120a7cdf"],["/archives/2022/page/2/index.html","d40fcdd3a5220722b4eabf80d9553f78"],["/archives/2022/page/3/index.html","69442b3fcff8016eddc05439ca2a294b"],["/archives/2022/page/4/index.html","47e50735a7b1741a4ff19b46c0422838"],["/archives/2022/page/5/index.html","0eaaf1680ebfeebcfa715934c6214d02"],["/archives/index.html","f7f4a35878aeff77e07bd04f27145a4b"],["/archives/page/10/index.html","82c6d1cc82976bb0d81fce734ec588b3"],["/archives/page/11/index.html","853c2b33f397709fb6df0472d11df984"],["/archives/page/12/index.html","ef1113a29b9eb1f2fc205fe17a675fdc"],["/archives/page/13/index.html","bbe07dd4567beb4b98f0a1cf39ed01ce"],["/archives/page/14/index.html","ec9eefb4ef096158a3b8033d97e97673"],["/archives/page/15/index.html","7583e3722e223fae8b5051e9640ecc36"],["/archives/page/2/index.html","a1d368b3b411c3cc2f72873607a74cd7"],["/archives/page/3/index.html","c2276103e2cff99946fee08b8b80a327"],["/archives/page/4/index.html","22366731342521a9dfcfe63eefa5f19f"],["/archives/page/5/index.html","39597124fdddd1660bbee7e8d342b156"],["/archives/page/6/index.html","dfc0fb011030212ac2e97ef5a7ee4541"],["/archives/page/7/index.html","0e537a4048d610e4a878d90d4db77645"],["/archives/page/8/index.html","f958fdec7d06fca57536d84c99c0c8dc"],["/archives/page/9/index.html","f8ce47adcdcf0a9f8c6d73740872b5a2"],["/categories/Algorithm/index.html","e7383546e0fcd1408ff23f254496e22e"],["/categories/Review/index.html","162e064e26b5ffd234e5e5079abbdd35"],["/categories/Review/page/10/index.html","eddb408ffc9219dbbadd3d54e32b8777"],["/categories/Review/page/11/index.html","1f3da0817164e611fd1bb88eec5ef375"],["/categories/Review/page/12/index.html","dec7356f758238bcc31b4f711ee279a1"],["/categories/Review/page/13/index.html","1684239f5b3a31aa982e644f04392ebd"],["/categories/Review/page/2/index.html","8840ad6d617eadc6d12b3c777ea3e3ab"],["/categories/Review/page/3/index.html","6316fed3684acc898b9718ba1af32b84"],["/categories/Review/page/4/index.html","7dd87762c4273e191190f9d33263d304"],["/categories/Review/page/5/index.html","aceed8f02811f372754adaa3a33d114e"],["/categories/Review/page/6/index.html","982092c69382f90b433c01a3170f1e02"],["/categories/Review/page/7/index.html","2e037d30248ff2cee12048437bd2db67"],["/categories/Review/page/8/index.html","de8a4a2466d279fd9e18af3af6a6cdf5"],["/categories/Review/page/9/index.html","61e5129f60883da097f22a2abe9fc7b9"],["/categories/index.html","5c3501e1cb39f5dc0ad40f6be03d0373"],["/categories/日本語/index.html","661ae46c17e21cb3a623ada3e5ccc166"],["/categories/日本語/page/2/index.html","517123a508a6237c9cfe573f2e10aa4a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","921f7b4bf55ca02b090801109a6b345f"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","74e75afd12d6280e0cc82b27693ca6d3"],["/page/10/index.html","aab659208ff068fa03891ae6297919ab"],["/page/11/index.html","919c6515db1f2a702ed201783cbfecc1"],["/page/12/index.html","2229ccfc05a624ec27e29480c09ebd0f"],["/page/13/index.html","db2321fb1c7df2b97da835d10f0269e2"],["/page/14/index.html","cc34662da9d4fbf8f385debd09ac6d9f"],["/page/15/index.html","c3122fc52da96234ba27d0bb0eb401df"],["/page/2/index.html","2705e7789ff6549c9d4f8707387ac985"],["/page/3/index.html","db47fd3e4b415cc98f73ea13552bbf6e"],["/page/4/index.html","a2a1167f9ab18ca6dc5f2aca985422f9"],["/page/5/index.html","0ac554b2dd6dbbdc0bfed6c7642c583e"],["/page/6/index.html","1b458eca6cb24c2e1e3e6e643eda498e"],["/page/7/index.html","9a053d8cf93a6d93bb5cde5262f12c0e"],["/page/8/index.html","a0db4767b195bf8d8a08aa702e62d6a9"],["/page/9/index.html","61545cbe0b04cc5259639bde69e9dce3"],["/sw-register.js","6885c176205005ea7e4c28eb1ae453e7"],["/tags/10分作品/index.html","90b2f09cc081da128dba8b085333bd7d"],["/tags/3分作品/index.html","9b39cf411d3bb5b3d2c78e1cce107d3b"],["/tags/4分作品/index.html","3fdafe2c77a171d004636bba68594a34"],["/tags/5分作品/index.html","b52bfdb6191370be68dc93a9cec9e4cb"],["/tags/6分作品/index.html","68d3ba881b1ae84278aaf440a1307c27"],["/tags/6分作品/page/2/index.html","d7a9446cdf0c4ec6d294c2ec91b85cda"],["/tags/6分作品/page/3/index.html","997cb44951adeefd60e8e01428e1f435"],["/tags/7分作品/index.html","972b921dab63dd4bfe72584774a83e05"],["/tags/7分作品/page/2/index.html","9fc94d7bc98f8b3af859392f883f12e1"],["/tags/7分作品/page/3/index.html","656b8b18fc4b14ae64461144ac5a67f4"],["/tags/7分作品/page/4/index.html","7bfd51fb1d78439aaff6504ed1e79428"],["/tags/8分作品/index.html","131af730cad74cf3449d9cfbfd234a34"],["/tags/8分作品/page/2/index.html","2e48f5a9507948f7c0e8f3a17824c777"],["/tags/8分作品/page/3/index.html","225734ee85a25bf83842c9db9e9f051b"],["/tags/8分作品/page/4/index.html","cfc2267c005e133a19897b6b360955d6"],["/tags/8分作品/page/5/index.html","b0c19af4d616f1365daf6d1d6f3d21bc"],["/tags/9分作品/index.html","42f797ccf8334710827a2cc5ab1bc3bf"],["/tags/index.html","bf42b1e061ae26435278ec7093efe15d"],["/tags/アボガド６/index.html","53a9887cc618737291000e878c60c3dc"],["/tags/三秋縋/index.html","16d618ef68930218be7e113cfffaef63"],["/tags/二宮敦人/index.html","00dedcd48dde46ce4fb4e1138d3bdca9"],["/tags/住野夜/index.html","008644b564593f3816c1920fcbcb1ab1"],["/tags/佐野徹夜/index.html","75fb4ae1d7b0264faa377931e28ecede"],["/tags/動畫/index.html","bb47a8fefe1dc67f0d02d7de2e0dbf68"],["/tags/動畫/page/2/index.html","7965caefbd1f52699c550cb54f48c2d7"],["/tags/動畫/page/3/index.html","aeaf60ba701c5b84680353125dd36e4e"],["/tags/動畫/page/4/index.html","1d60c7f92aeab237f6d9f706789efa0f"],["/tags/啞鳴/index.html","beea198a1385a689efe200ddc533980b"],["/tags/天澤夏月/index.html","3dc035027e7ea1f96033d8ed44583f01"],["/tags/學習/index.html","7295bc9e064d1a2f5de1dad40d168ab8"],["/tags/學習/page/2/index.html","adfc586150b49589d0b78f90153aa469"],["/tags/宮崎駿/index.html","6d2b3ea77a3908158c0cafe032c26013"],["/tags/小說/index.html","debe16eae9dac6988458cc8480073b71"],["/tags/小說/page/2/index.html","ee75f88aefcd74885c471401d138bdcb"],["/tags/小說/page/3/index.html","cbe6186f1e6aa11506eea0b0e5cbde80"],["/tags/小說/page/4/index.html","abc7f41f352a97799a8c3aea7d87f706"],["/tags/小說/page/5/index.html","431da6628f054c4208fc4f05b84e9eb7"],["/tags/小說/page/6/index.html","a149740b67b938f05b68f6d259083124"],["/tags/小說/page/7/index.html","fc16306075b519c1c143970c68d2d6c7"],["/tags/志茂文彥/index.html","41e04ad2790e8d91ec6d1dc9790469c7"],["/tags/斜線堂有紀/index.html","272d2325b0f6e52e3e3faa8fc02a137f"],["/tags/漫畫/index.html","4d0b98d4617330a65e7d7718ef67af20"],["/tags/葦舟ナツ/index.html","fb0ee0bbe48497b6b7e26af85be6d339"],["/tags/藤萬留/index.html","789f0d3812ee7696f940d806c321ca7b"],["/tags/電影/index.html","165078c87836f7999defe97000f4b5bc"],["/tags/電影/page/2/index.html","fbb3ececb6113288e32b9819c95220d4"]];
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
