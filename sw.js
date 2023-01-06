/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","b8ff9d142961bbcb469b7b62a7bc3136"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","691237af8011059a7d1097c950c0b165"],["/2019/12/25/Review/無法計算的青春/index.html","2e00dc11a5afe949c3061f823cabc7f2"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","e052217b0422d437160d34d51721c6d7"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","95624b58c7f7877c1f37bbf58d962d0e"],["/2020/01/19/Review/下雨天，不上學/index.html","335406ec477898fc7a58bf2d70ee661e"],["/2020/01/26/Review/三日間的幸福/index.html","7e41a546aee792d8afab8b11b1afa1f2"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","3c3093dee51dec2190977d018def431c"],["/2020/02/09/Review/青春期超感應/index.html","6018ce9e8816cb67b1c2664af03603e5"],["/2020/02/15/Review/又做了，相同的夢/index.html","7ae245363a43812b9db31f0842058a52"],["/2020/02/22/Review/回憶當鋪/index.html","bd5d4d3ba08ad3cf855ee0a0e2cf6870"],["/2020/03/22/Review/不適合自殺的季節/index.html","0a0bf32dc1009e421a1704a86702c225"],["/2020/04/26/Review/我們都無法成為大人/index.html","58d7ac214895272053998b89f0564f01"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","a09f718c1af434235a3125e653f9b6dc"],["/2020/05/17/Review/人間失格/index.html","d1a08e3592f865474b1609e032070a54"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","cc03522218415641b5df00a17b475181"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","9e4ebfd0016d66c37b4e5f707f3a1512"],["/2020/08/01/Review/銀河鐵道之夜/index.html","0ef593f29afee14f958f902ec560c0d5"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","1d81463bb98de831cfa913456324a1e8"],["/2020/08/16/Review/15歲的恐怖分子/index.html","e0514542b9516fa2843cea884d639573"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","397ce139ca70af6219915bf93125bb17"],["/2020/09/13/Review/羅生門/index.html","1d5e272b276304004540407e1ff0daa5"],["/2020/09/20/Review/闇夜的怪物/index.html","7239c3ed95e04871cd94f95a93fa1950"],["/2020/09/27/Review/14歲，明日的課表/index.html","e622278c0277ca7a9f6231f8911018e2"],["/2020/10/04/Review/致十年後的你/index.html","e4f074008e78a30b701e4271df6f6268"],["/2020/11/08/Review/滅絕之園/index.html","46154630880218e29b1ff2893b97b44c"],["/2020/11/15/Review/將愛拒於門外/index.html","c525faee631afc90b758426304cb56a3"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e93118fc4f46c417c81f7a8e977bf2a9"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","79023d7058af55d6b8e910304c85da27"],["/2021/04/22/Review/道印/index.html","105f84707a28063a535033c8401fade3"],["/2021/05/03/Review/戀入膏肓/index.html","780a036dc10f76ee1885ea438dbd83cd"],["/2021/05/10/Review/Dice/index.html","8863180d4c3f45f9f5cc47332d827b9a"],["/2021/05/15/Review/魔女之旅/index.html","5846639a22bcc7a0db643b02a666a55f"],["/2021/05/28/Review/戀愛寄生蟲/index.html","a827c036249639edaf5749efea8f53b4"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","9c49323541ece5f18438fac3e015d11d"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","b5f9f7414c5dba4c770c0175cd08d23a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","052c72b5845e19f7c2232340783d5421"],["/2021/06/05/Review/流浪的月/index.html","460118f88c6bd87cc3871dbc16b3ac90"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1924b760c8691c715b88c92178ce6f1e"],["/2021/06/13/Review/第一人稱單數/index.html","fa6d060a28ad802378312413be4f0d39"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","6312ef1c0c4410e3e5ee8547aef8d66a"],["/2021/06/16/Review/願你幸福/index.html","b90951ab4e800e62e3ca83c58283004a"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","e0688a7ec586e57ac5b743b7cce15845"],["/2021/06/21/Review/神隱少女/index.html","c00109c7004a050fa45c5ac277a6f314"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","28fe94b65bb7ed5003a5e790c4c35874"],["/2021/06/23/Review/天空之城/index.html","9419575cb09a6c64bc36c0945f942403"],["/2021/06/24/Review/魔女宅急便/index.html","8f695d8c820e0551b06671dc50e1b963"],["/2021/06/25/Review/借物少女艾利緹/index.html","6329321a101fb0be2e6e7e649c6137fb"],["/2021/06/26/Review/魔法公主/index.html","45d7982041be6c5f0552d969c3e90cd2"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","97fcc8242b40e1efae339827585ff5c0"],["/2021/07/04/Review/飛雪與劍/index.html","2692c7ef50826bd31a56272cb88749cc"],["/2021/07/09/Review/地球防衛少年/index.html","b354c0fb9cd5a15f6731a23c2ed750bb"],["/2021/07/12/Review/Angel Beats!/index.html","b2d32f4d3d04b477aad8844e137276b7"],["/2021/07/13/Review/Clannad/index.html","80e02bead49734c6cbf76f717cae4ca4"],["/2021/07/15/Review/AIR/index.html","73cb6bdf0e1f10c3447369775c3a6bef"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","b2f85ff20b2b205095dd90540a3d261e"],["/2021/07/15/Review/螢火之森/index.html","ffca58bc64a45e167fd43695a3cf869a"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","c766b70470629a825a9b3fc7aaa40f46"],["/2021/07/17/Review/奇蛋物語/index.html","b76d0232f4d14a6726c32d4684b76210"],["/2021/07/18/Review/Vivy/index.html","a24c3e16581045ec9cacc9774b20386c"],["/2021/07/18/Review/請妳消失吧/index.html","73935484fe14197a36500f397832df47"],["/2021/07/19/Review/漣漪的夜晚/index.html","69e68c0ac9ddd639575bbf13b8fab0ff"],["/2021/07/20/Review/月色真美/index.html","f9020d5ad9b8d8c9e162a771fa4b85af"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","a48ba69c67af3f316314e162f0b59dc2"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","f45561b1d8d838e6c780704096a4ad10"],["/2021/07/22/Review/罪惡王冠/index.html","1aa607f531afdc9606440e0643761322"],["/2021/07/23/Review/弱角友崎同學/index.html","d708f7bdce58863558f1ca40923ce241"],["/2021/07/23/Review/惡之教程/index.html","8a5915b11432366cfea447b77ba97da4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","d3251b4c4220a6cbbb4dd8e77d97eff3"],["/2021/07/25/Review/魔王勇者/index.html","8c0d418e40d6a42e2e8e76f067b7d9ea"],["/2021/07/27/Review/一年A班的怪物/index.html","ae9b0baf7350a25147a45e128247df1d"],["/2021/07/27/Review/奇巧計程車/index.html","e28e4596d4f789a25cbe44583d476970"],["/2021/07/27/Review/專情的碧池學妹/index.html","db2b82f2a7e19bdd48bc865b1f68718e"],["/2021/07/29/Review/只有我不存在的城市/index.html","a4a08f060aab7eb8ebe0d67a8c0fc490"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","0bbb4427b1191b4b6a7196e0194a3d64"],["/2021/07/30/Review/可塑性記憶/index.html","60c46a65709e215538fdfc08c3adb151"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","0dc3febea8e9688e8a14470f1aab5505"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","01fe3b24dfdc7a5d38e55778c35d2a31"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","27f6477154a24312fa02d68d78830283"],["/2021/08/25/Review/清戀/index.html","6dd1dc833d8178fe6dbe85ed776c7442"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","05371cbeb4135c6139da4e2e6af3c4ec"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","e952f4ddd6b52c9f9b949e3b913d2090"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","7f6c13c94f5f21decf33521b85aa49c2"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","24ac14724238c56c09944e8f47fde4bb"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c94271d70d10f466e2e5c141df2d1f60"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","6d8378ba9bd4da8f6eb03e93f9362734"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","1012c0ff85ab5e6511bde422eab0a42d"],["/2021/10/16/Review/龍與雀斑公主/index.html","c00d55f3667793510ff541001e28a6ee"],["/2021/10/19/Review/孤狼不想開後宮/index.html","491faceff98b946fba59999d5eb53c37"],["/2021/11/13/Review/徹夜之歌/index.html","e7a1b130912ffa763ee21a73eae9c2c7"],["/2021/11/24/Review/武煉巔峰/index.html","28b8e039bc284bd9998fb9436270e8de"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","fbed9146f4fbcdc4dd0ebb8a3527ffde"],["/2022/01/28/Review/神醫凰后/index.html","1e2736290130107c342826c2ddb08825"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","367428fd5d389c276b9269a8ea32f01d"],["/2022/02/13/Review/夏日幽靈/index.html","f6504c1a73065246b13bd5f63bd5ae77"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","33d000b9482990c5a0cfec14ce027e6c"],["/2022/02/26/Review/賽馬娘/index.html","ec6378a3d4b98dcdd0632fda8ad333a9"],["/2022/02/27/Review/大欺詐師/index.html","32988737ce82cf6f5df5e2fc96c26445"],["/2022/02/28/Review/前輩有夠煩/index.html","b301954a2c9056784db41ce283e65795"],["/2022/02/28/Review/碧藍之海/index.html","f00b854d3697622ad4f3ca3206436e81"],["/2022/03/05/Review/落第騎士英雄譚/index.html","5b0a31b453b3f9ad5bfdc5aff3fa9dbe"],["/2022/03/06/Review/Another/index.html","9c3458b42ea4ef758fba0558896f6450"],["/2022/03/06/Review/入間同學入魔了/index.html","cec3851fd5eb36d5be4b7a4f1a5b855d"],["/2022/03/18/Review/再見宣言/index.html","0c3d372e28a61db53a6791b1de899361"],["/2022/03/23/Review/生若冬花的妳/index.html","08d53ca26678381cc6b7c57d53851b6b"],["/2022/03/25/Review/天之弱/index.html","9ddc0c2fd46da0006fa5b1b6114bd1e3"],["/2022/03/31/Review/滅了天道之後轉生/index.html","00994850322a18260cdffb28ed57f86a"],["/2022/04/30/Review/泡泡/index.html","3e78cb5e24b86a78c64501ec8e5460f9"],["/2022/05/04/Programming/Dynamic Programming/index.html","a48e9405a9c1c01dd024c78515b4dfc6"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","ef5660742c15886b5d6c1d8d70933906"],["/2022/06/13/Review/偵探已經，死了/index.html","2c07c57bd5f5b72025deb7e0e57ef21e"],["/2022/06/14/Review/黑色子彈/index.html","b9411ba02dbee44170bd4fc5a56ff935"],["/2022/06/15/Review/黑白來看守所/index.html","05231f04b5f64d5f33e196ce1fd0ebf4"],["/2022/06/16/Review/虛構推理/index.html","3b1c321bf3759d8060d37cdbc2acd16e"],["/2022/06/17/Review/戀愛與謊言/index.html","d67af67bcc686607961a4ffba0cf6c25"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","961b32db3193c71b663943cae461be1f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a518674c7f821c10787bb2ad80064d03"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","7f3755edfd02fcb0114b51a3c183c1ae"],["/2022/07/03/Review/Hello World/index.html","ae10a06360c89e876dce46248cc277d3"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","14fe8967f4bb831f4eaab366e8fbd3c7"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","10f6a3bd15c40d0b3e27fb32cd3211a4"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a46eddacc9e60a2860c48b89faf0183e"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","5f196782ef510847dacb0dc0f9f56dce"],["/2022/07/16/Japanese/動詞分類/index.html","026277f43ab1d4e81a69c3f390d7f0f6"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","8098cf1cac95a1fc6c28602ced2a6d37"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e7f985569e18d609dd7258dccfbabdd8"],["/2022/07/17/Japanese/音便/index.html","299393855fb4b93efbcae79c0cc4467a"],["/2022/07/18/Japanese/動詞 時態變化/index.html","0505e9d6fd4c46215b40c773a633a8d3"],["/2022/07/19/Japanese/助詞用法整理1/index.html","07f8d42c8ac68675da6113ad50e41c7b"],["/2022/07/26/Japanese/助詞用法整理2/index.html","0149f9336fe4d0c8e6bb04bcce8d1ad6"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","19f8cebac80471f849aee9996dd80971"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","51a1688a832f1d8f4ecdd7c5098b8b04"],["/2022/07/30/Japanese/疑問詞/index.html","d101f41de3378021d6ad71e60ed3f2d3"],["/2022/07/31/Japanese/助詞用法整理3/index.html","67ed6862ee8c1336a11d9bb6d1bfbcaa"],["/2022/08/02/Japanese/副詞整理/index.html","89268a369d95c86ce08605f05d797a45"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","c345ebd966575b67ae797eb649544fe5"],["/2022/11/04/Programming/Data Structure/index.html","18f113b42ae1b5861e09e419093ff090"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","672980bd908dcf242ae6d714aca28e8a"],["/2022/11/22/Review/組長女兒與保姆/index.html","edab7cec6501816842919b2bce017413"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","e8cc74d724e4c731aa8f3a8ba1388665"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","d72e18a9181f11320424a6169fa19613"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","73cbba086938fff9184010fa779fa1fe"],["/2023/01/01/Review/あの夏が飽和する/index.html","716906f346348a3f8d618290d7e2450d"],["/2023/01/02/Review/孤獨搖滾/index.html","f3c0c2674222214967d867820a189e51"],["/2023/01/03/Review/來自深淵/index.html","f4a553d2840ae4f205737621737f3d29"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","fd2d0148602f29298a25c288267b768d"],["/2023/01/05/Review/處刑少女的生存之道/index.html","6c0aade1c1d3eea963dc1dba3a42b9c4"],["/404.html","dda18887b965afdbfe551b21cdcdf3df"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","5e14f7573779f101df28bcfcc7c0341f"],["/archives/2019/11/index.html","c15b4a24ad6a0e5996731aa6a574be4a"],["/archives/2019/12/index.html","9b5879869d0c792bc28985a46aa29db4"],["/archives/2019/index.html","d4b7c8a4752bbaa09086b3cd7d192372"],["/archives/2020/01/index.html","18e6895eaf6623d58dbc6f0c212226c0"],["/archives/2020/02/index.html","df4462635a20b45c42aa260ec811dede"],["/archives/2020/03/index.html","4736ab592de3de7ac120033dc29ccb4d"],["/archives/2020/04/index.html","d2865abcfa1b81f09f2a72885bf7de45"],["/archives/2020/05/index.html","a3dffa51e77d2d22c9f1dc018d9f7daf"],["/archives/2020/07/index.html","9846251ab1f9f9aebbb5c48a408d783f"],["/archives/2020/08/index.html","1b014a56cd9b02a4915d01a6f6e53782"],["/archives/2020/09/index.html","ce906cfe6a578bcd148793a4dfe44166"],["/archives/2020/10/index.html","5a6e854cbf471f7406b2dcd92ef6d002"],["/archives/2020/11/index.html","0a84e9ecfb9c769ab7bf447463f2c952"],["/archives/2020/12/index.html","cd78f512bf17e909fd761c79adf06773"],["/archives/2020/index.html","e5048a74499dc6ecdb357184385a95b5"],["/archives/2020/page/2/index.html","887822ba8515b5721dfaa67f1c4bfbd7"],["/archives/2020/page/3/index.html","a445e6d8bb43ad49a61c201916a3e982"],["/archives/2021/04/index.html","dea4bc559cd3809b6730ee5cb188927a"],["/archives/2021/05/index.html","bac6190efd6938a6f65510c116b49cae"],["/archives/2021/06/index.html","d531886ac3730089de6e1120cbc0be96"],["/archives/2021/06/page/2/index.html","f95da31ebb7d2f0b8edc4bd57d4df983"],["/archives/2021/07/index.html","48a33a052e2c8ba9cd290bfff59c7f99"],["/archives/2021/07/page/2/index.html","3715bbe45f001f61fa3e6b156acbf4b1"],["/archives/2021/07/page/3/index.html","cec61f3ccb0168105d6389b5439daaad"],["/archives/2021/08/index.html","47a3086b9b4003755759e618add5873b"],["/archives/2021/09/index.html","d26fb13d615e8c9c66b26390311d7800"],["/archives/2021/10/index.html","bc353da62b1440cb52071568baedc109"],["/archives/2021/11/index.html","a41f079656f12d69c3cde7bacc978fdb"],["/archives/2021/12/index.html","00fd4fe1b4ec7c618f2842ccc3de5249"],["/archives/2021/index.html","75af84941326ea2d7f3f3ef997c243e6"],["/archives/2021/page/2/index.html","8eff493a8e71beba16a78d430c44b45a"],["/archives/2021/page/3/index.html","10c331ddfe7c41a2d86615e9903bb103"],["/archives/2021/page/4/index.html","193a3885fba685acd728625092dceb1a"],["/archives/2021/page/5/index.html","4d5658bca2823e231f07e906937c81a9"],["/archives/2021/page/6/index.html","1353d847e44bc8cc6161424396cf8a86"],["/archives/2021/page/7/index.html","b0cb232fe2e27ad0be21d6e30fdf8257"],["/archives/2022/01/index.html","51ef9e61472ff0c2cc71af31ceeef338"],["/archives/2022/02/index.html","ad28295788af2982a32b029d64cbcbd3"],["/archives/2022/03/index.html","cf8701def2c3be2a26c841f3b1e1f3ac"],["/archives/2022/04/index.html","e94808bb7b773e96616f559fbd896929"],["/archives/2022/05/index.html","2bcd9fdbc8f24de4efbe7b9051c03304"],["/archives/2022/06/index.html","9dac6d0cd66373a86cff1bfc1b71e6fb"],["/archives/2022/07/index.html","1d5b9f36dab591c697de855040498fd1"],["/archives/2022/07/page/2/index.html","e31ee8ba2ae557d3f6cc067b4adce23c"],["/archives/2022/08/index.html","ec17d4a352b03a78f0dccbda2c742e25"],["/archives/2022/11/index.html","60d778227e043a834ba206794712f5d8"],["/archives/2022/12/index.html","c18e67e1b13a1a31077be95e61bf785e"],["/archives/2022/index.html","31f0532f46b73ec7fb54c281deb6abaa"],["/archives/2022/page/2/index.html","9b1c30ec1d4ef784ee1c4fa612a2681d"],["/archives/2022/page/3/index.html","c0da59020327a56bca67d1502b972f15"],["/archives/2022/page/4/index.html","62f29eb2c33274a6aa85feec6c9d2ee8"],["/archives/2022/page/5/index.html","d33a1f4d1f0eaf05f8f53152a2cbaec7"],["/archives/2023/01/index.html","07b3b19ad48f5c26712f7ec3665b170e"],["/archives/2023/index.html","339b4589868c635cc7edf636d2cd3aaa"],["/archives/index.html","d79e1049d4ba5ec735bf7a76b9e7ae44"],["/archives/page/10/index.html","9fe65ba6c4e2f27bec05d4f58f2e323f"],["/archives/page/11/index.html","b841cf5d82697235c1d9ed95a0dd9ce7"],["/archives/page/12/index.html","bde81b018b9659d0a34996345ded2f91"],["/archives/page/13/index.html","dbe1c1fcd0ad1f047788cd39d9615e8b"],["/archives/page/14/index.html","b36e7417de0fd66f6756999599bf5400"],["/archives/page/15/index.html","804afdad968f91513277e339d89cf0d3"],["/archives/page/2/index.html","593f95b0be7ab71abc75e970f57152fe"],["/archives/page/3/index.html","d2bca9de33d9c3db23d5623778ace52f"],["/archives/page/4/index.html","8a8a17cf282505fe82847d5ce1971b89"],["/archives/page/5/index.html","8b582e83e9def78ee8f51979aad0948c"],["/archives/page/6/index.html","aff20fc850b7bb79b9eca313ff3fadcb"],["/archives/page/7/index.html","43c46d8b694a4ebf0177c4097d00e526"],["/archives/page/8/index.html","90b76d4a057d67ec6302c1a06ca66f18"],["/archives/page/9/index.html","fbe516b165b7b664218e7f2e9667e0fe"],["/categories/Programming/index.html","a71868ae6af311ab0cb8a5108da7f9fd"],["/categories/Review/index.html","01b0b06b90fb349f7048c8d24da22233"],["/categories/Review/page/10/index.html","9d871b55ff8945b98f9146416198591b"],["/categories/Review/page/11/index.html","09f01be625bf0725ff05a95b2382626b"],["/categories/Review/page/12/index.html","c39161ba2a672756bf90dbbc6edf36b7"],["/categories/Review/page/13/index.html","1d6f543ec348058ef53c711ded8dc318"],["/categories/Review/page/2/index.html","ccb06515b6cffafa67662fdb2ca17932"],["/categories/Review/page/3/index.html","6ae03352c0839c4f9b42a163b3c7ca4b"],["/categories/Review/page/4/index.html","f4d8b9daf97067277a09239c29f5bf91"],["/categories/Review/page/5/index.html","9f4872d7511495ae322ed198968278ec"],["/categories/Review/page/6/index.html","cc9e4f3d471c7929eda8c99ba6f55a2d"],["/categories/Review/page/7/index.html","40cb6e4a65195aa93238efda9227f412"],["/categories/Review/page/8/index.html","447374e53cdea38ceeac5612e0c29abb"],["/categories/Review/page/9/index.html","12a36440039715b9e24a6515bfbd0313"],["/categories/index.html","6446b00f19100599edc5f8f320681ff9"],["/categories/日本語/index.html","7c84bc739411aacf6e2e92928a486bdf"],["/categories/日本語/page/2/index.html","9612bb9fd8b98e96145e6051c3434d6b"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5e775e336630899edab65efa676c1fd4"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","49e0a08b1794cac0bc925f77cd1c9eff"],["/page/10/index.html","813875045c17769b696e0946c1ded78f"],["/page/11/index.html","91c8be15d05543ff68526ba6b2a89534"],["/page/12/index.html","94584cf2a608113ecd2b9c5d98a01fea"],["/page/13/index.html","049541b98eb0c337a753dfa6ba98a321"],["/page/14/index.html","3e6df7ea182c7f3880e311cd2ed5712e"],["/page/15/index.html","d1fdee3a345abf3f2ab831d467db250b"],["/page/2/index.html","4bc8615bdda45519164842db14b0c8df"],["/page/3/index.html","d6904e9b36ddbebf783b7b7719f6a967"],["/page/4/index.html","aa78236dee28f6eb75d8823327162fb3"],["/page/5/index.html","36780f2e9ff93e5ea24fd568039b219f"],["/page/6/index.html","a7475e56a3625df204a54a3568d6988e"],["/page/7/index.html","b098d79100f86788f651fdfebc539c9e"],["/page/8/index.html","2d7338f5168ee50e2efb1279b10e9945"],["/page/9/index.html","2ef9b48514b25822089f4c9d2c42d059"],["/sw-register.js","b85c124e7ac9287effda305393ed7f6d"],["/tags/10分作品/index.html","d99c04e55b7674b85c63d9a33014bbb1"],["/tags/3分作品/index.html","28b9087e7e78ac8c25b74ab85d80e7d6"],["/tags/4分作品/index.html","fd0fc6e700da8c69d71e6a1924ba8d28"],["/tags/5分作品/index.html","7cd6c697c5f03508dff623b891c888ee"],["/tags/6分作品/index.html","4c38c08637cbab21ccf4fa93341974c5"],["/tags/6分作品/page/2/index.html","1e7bea54e8ca438d9ceb4662ec3b589e"],["/tags/6分作品/page/3/index.html","b187a2bc6a15312e1e2b663bbd003586"],["/tags/7分作品/index.html","cc18994305c02905509f700dbf63e91f"],["/tags/7分作品/page/2/index.html","ffac6bfab44268cf0869874785c84b73"],["/tags/7分作品/page/3/index.html","7696fdbd53f0c769cc2c85561e042607"],["/tags/7分作品/page/4/index.html","41c0853e31bc47f21c4c83517ea88044"],["/tags/8分作品/index.html","7752664385755249fd5fc5cfd29c7aa8"],["/tags/8分作品/page/2/index.html","bb25e60661d3e22e3d5df0789927afea"],["/tags/8分作品/page/3/index.html","c1d998e58dd650f3828a4f53a416a1d3"],["/tags/8分作品/page/4/index.html","54d6505dbaec958ba5d488fef5474a61"],["/tags/8分作品/page/5/index.html","3c19c75966e912879aed26c2981873d9"],["/tags/9分作品/index.html","bad9610407540c53be77d05f2287b6cd"],["/tags/N5難度/index.html","9d0992b4db4ea21364e6a4ada64cafe7"],["/tags/N5難度/page/2/index.html","cc8039355efba3105a11a30309653f47"],["/tags/index.html","47425f9667be0241ddf93461e3c517e4"],["/tags/アボガド６/index.html","523fd77ab095499a522b3d48d28e3063"],["/tags/三秋縋/index.html","64455db61ac1f8b531597868a66a65eb"],["/tags/中國武俠/index.html","2157859633a358263123964d1db9c5b6"],["/tags/中國言情/index.html","033d8b28ca07332ecf7f9d214231e83c"],["/tags/二宮敦人/index.html","0511f2daca472fc7a78802ea11336cfa"],["/tags/人性/index.html","7436978d3dcadf673dbaf2a5e49d851a"],["/tags/人際/index.html","c681bdda89e6340ae3d0a31afc8eacea"],["/tags/住野夜/index.html","c8c3c2d262c44503824288c0b756f512"],["/tags/佐野徹夜/index.html","bebf7ae22a53efdd0bc740bf59e78340"],["/tags/努力/index.html","ec28da308b1de8aa0511605a906d2de9"],["/tags/動畫/index.html","aa630564caa4c07d631bd55860055a97"],["/tags/動畫/page/2/index.html","56f326ebf2d06c2e2396f88a7d44e3a8"],["/tags/動畫/page/3/index.html","cb29f80df672f35cfa8592ae127e61be"],["/tags/動畫/page/4/index.html","d757892f26958c4201a8a2583c1fe9a0"],["/tags/原諒/index.html","f5596d0b389a0cdd633cc20df9b49cdd"],["/tags/反烏托邦/index.html","940883c8f9c666814efbe77e7d24c50a"],["/tags/啞鳴/index.html","9f9c40725e6857cd10a64abdcec248b0"],["/tags/喜劇/index.html","a7eb750f4ae01fed6ba69024122e4864"],["/tags/夢想/index.html","fbeb3d24d988365426a6e6f7c855f370"],["/tags/天澤夏月/index.html","807292082762998887f0cc6e0ee338ec"],["/tags/奇幻/index.html","b54dcccc328c1fff08ac18bc2150a749"],["/tags/學習/index.html","afb87957cf7356a2f42b5fa2749e231e"],["/tags/學習/page/2/index.html","48943200cb12178abaccca4b36ddd3cf"],["/tags/宮崎駿/index.html","5520d07ae9c5f68e590a1009ffc5e065"],["/tags/小說/index.html","490fdc5603d206dfa79c94f1345192c8"],["/tags/小說/page/2/index.html","ea46d9d425c5aff73927d83bff71c9cb"],["/tags/小說/page/3/index.html","d5f6ed6e44e86a23d2af148a242961c7"],["/tags/小說/page/4/index.html","12aef178bf91c670a85678245d98e10b"],["/tags/小說/page/5/index.html","12fe9b63ee54ffd58f9749b5725f7103"],["/tags/小說/page/6/index.html","fd0c97eb48de3d53b4a13d6a8f8185f9"],["/tags/小說/page/7/index.html","ad955bf10bbee181138dc996c89855f1"],["/tags/平淡生活/index.html","fad5ef265bed99a869604659320f2c2d"],["/tags/幸福/index.html","0139ae3c2538df5ce0bc17e8ab1579ac"],["/tags/志茂文彥/index.html","f7dbb756461352b52ad1bd8b5495d532"],["/tags/愛情/index.html","d0da26182d2f7c515fb0d4d426168778"],["/tags/愛情/page/2/index.html","b5274c0d0040b3f0b629cbd7b07f27d6"],["/tags/愛情/page/3/index.html","5b34ad26d3a94bad5226dbc92923ea99"],["/tags/感動/index.html","bcf84ac53161113edcdcf6ec7af72cec"],["/tags/懸疑/index.html","5e60db427401dc9af4ca8a6d7157d851"],["/tags/懸疑科幻/index.html","e47e534ce8592aa7b857f4194dbf8b38"],["/tags/戀愛/index.html","dcf57fe70e193cdc2f39496fe0afe4f4"],["/tags/成長/index.html","1bffe843c5c02b667fee6e2ce44a471a"],["/tags/成長/page/2/index.html","f6eaa96d350c49fa829e2a73468608e2"],["/tags/戰爭/index.html","2486fde1e37ca414b6ffd9fc4639289a"],["/tags/推理/index.html","7ee11da84c3e9e214ad676235426e73f"],["/tags/搞笑/index.html","f31e7c2ef9655fbe99e4be605825a2f6"],["/tags/救贖/index.html","c34dda9dee9ea5a1db1a838b94a8a487"],["/tags/斜線堂有紀/index.html","29b063576524e508f0a09aefa4fbcdd6"],["/tags/日常/index.html","7438a1f68aef71fbdae99e6ba06df975"],["/tags/末日/index.html","7c02c0b1a72e48781e4e38344fc9e842"],["/tags/校園/index.html","48cc20217554b1d627f7c0ba46cc0954"],["/tags/武俠/index.html","769f5e8a196e7d3fa8d2925ce5e1990f"],["/tags/武俠言情/index.html","f9e725378ad749ea2dc3a18da5a545d2"],["/tags/漫畫/index.html","8a1952173ba2a28dc41a9112a1464d23"],["/tags/生命/index.html","a9a090b693c0e11ac94f24723d26f42d"],["/tags/生命/page/2/index.html","aca15c460b8fc6337ae7472f167d472e"],["/tags/短篇/index.html","a7d65c001b0a7971fdcc466890dab97f"],["/tags/社會/index.html","851cf47c62ad6a5b47588576e49b5136"],["/tags/科幻/index.html","22a1820a3b4b4acb9fee837e5df006c2"],["/tags/童話/index.html","6278a0b3f9d9647a51527672fcd9d6d1"],["/tags/競爭/index.html","88d1bc00d82d69cd30919d7e980ded0e"],["/tags/自我/index.html","d5c63fa8cb0e7293ab2532995aadda27"],["/tags/自我認知/index.html","58bd63cf2985e7b0326a8c2d12da64c0"],["/tags/葦舟ナツ/index.html","c70959e851371f05368e76fc121a8cda"],["/tags/藤萬留/index.html","d2aa35c2417c1116261111e7b4de8bfc"],["/tags/親情/index.html","8b43902c3211828472d462943306e46e"],["/tags/雜項/index.html","985a4cae861d00292350adf2c406ef50"],["/tags/電影/index.html","2485c0fd3f8db936c70d4829904ce17d"],["/tags/電影/page/2/index.html","dc85e0c86b0da6271633dcb8fd4d3392"],["/tags/霸凌/index.html","aa2b8d3b4340b392a941728e4d78c3f3"],["/tags/青春/index.html","9f6c8a85a41c7c4caf61278e42d31163"]];
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
