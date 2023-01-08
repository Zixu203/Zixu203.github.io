/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","8a90bf87e703c8bcb47a786359e9790a"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","cc1ef08d33ab797767608a6823e62e4b"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","2973895351356415317f597c262c3212"],["/2019/12/25/Review/無法計算的青春/index.html","93622e0c397f1160726e63e04996c149"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","508a2e939c76d8b78e5b5c841cd14d97"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","e4a4d8b7197061ead393d0263fab4e46"],["/2020/01/19/Review/下雨天，不上學/index.html","148de02e9a71f9e7a7f606aac896cabc"],["/2020/01/26/Review/三日間的幸福/index.html","2b2b0d27f57d5950a899820bc6442ed6"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","bf78f854febaaad28849772cd99c13e9"],["/2020/02/09/Review/青春期超感應/index.html","a5b3288e298c103475170bbbfb32b3f9"],["/2020/02/15/Review/又做了，相同的夢/index.html","922a409c15b6765d7ffcbd173cf606e3"],["/2020/02/22/Review/回憶當鋪/index.html","528d4cdf6867329b027861a1f15abe06"],["/2020/03/22/Review/不適合自殺的季節/index.html","1b916bf7fc42c2aa225cc0ce72c35c7c"],["/2020/04/26/Review/我們都無法成為大人/index.html","b785eabe17df003fad1897172aded2d6"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","170c1a5f8e120e9c8c09f932bac91b83"],["/2020/05/17/Review/人間失格/index.html","7846f43d851f7db58c945c737dd647d4"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","527dface2fe939339c518cf8b32fbf65"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","d42fdc2ed70e26ad858c953a23ed36b4"],["/2020/08/01/Review/銀河鐵道之夜/index.html","a8502cde561bbae3ff7d442ff6db61e2"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","c1b68965c740193c8d3fd0fc85c2b5cd"],["/2020/08/16/Review/15歲的恐怖分子/index.html","0ad7d463df1f604534678d757e90937f"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","4e1e34b99ef5ceba30f535f6249b84c4"],["/2020/09/13/Review/羅生門/index.html","53be44f4c1010f5ef842802ab2a9ef71"],["/2020/09/20/Review/闇夜的怪物/index.html","b87e35a3355408ec4294efab10cbdfab"],["/2020/09/27/Review/14歲，明日的課表/index.html","99d00ec1ce0686b1017ea08f6309cc6e"],["/2020/10/04/Review/致十年後的你/index.html","97e502dfaf331fbb1b980c229f60c5e9"],["/2020/11/08/Review/滅絕之園/index.html","f0a13e7b27d936a950c6a4ad3bda7c3b"],["/2020/11/15/Review/將愛拒於門外/index.html","721e96e253486653d127ac26329dd10f"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e4e09bd0e599253ac9761f0d4d879923"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","d87f20d1a7a28df992ad4c65f18cacdd"],["/2021/04/22/Review/道印/index.html","1aa9eeb5e5904d3be5aa9d2b4a19876b"],["/2021/05/03/Review/戀入膏肓/index.html","76e46aa24069e8038155d1a57099c701"],["/2021/05/10/Review/Dice/index.html","7a7ac42624958a39c14bfc04b694c93f"],["/2021/05/15/Review/魔女之旅/index.html","f56d006cb677f5c3fbe8647d1769008f"],["/2021/05/28/Review/戀愛寄生蟲/index.html","eecb51adb5e25f3e9f01a18f25c33675"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","80f408615369b52f622cb1b8be3cef11"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","89d59c06e577d5852e95eb03092ce6f3"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","a63b4a09b80bfd8fe111c45bc0881c5b"],["/2021/06/05/Review/流浪的月/index.html","1c8d155dc8386fbbd49de1c07ee2744b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","21748017c0eebed83658647ff33d7e07"],["/2021/06/13/Review/第一人稱單數/index.html","9e85df042bcaaca7c05174c9672a46d2"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","4e604ea9749584c251311c475aa5d33e"],["/2021/06/16/Review/願你幸福/index.html","ed18f519a302fa0ab853aa96a74d6df8"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","42f7b88ed8947cb6353452188aae1da2"],["/2021/06/21/Review/神隱少女/index.html","c71b45f759d09830c83864d552fa61e0"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","d282928ec4e194c0480389d794d441af"],["/2021/06/23/Review/天空之城/index.html","b8574d72b62810bc601ef844b83c8c94"],["/2021/06/24/Review/魔女宅急便/index.html","ddb0a73e989f7902fd8c576185f8a5be"],["/2021/06/25/Review/借物少女艾利緹/index.html","2101b0343d7f4e53fdb788774a6327cd"],["/2021/06/26/Review/魔法公主/index.html","ad49eff983ec07eb1d451861ba7b6af9"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","5d53eb5f665fa413515dbe8135f909ca"],["/2021/07/04/Review/飛雪與劍/index.html","1f4df23163df7955edc101e56c66b9ce"],["/2021/07/09/Review/地球防衛少年/index.html","ef64310abe8e8ad4ce32c5ec0700a801"],["/2021/07/12/Review/Angel Beats!/index.html","ce24f18cf772f3e9279fb48e420c1c44"],["/2021/07/13/Review/Clannad/index.html","f8ccc91bf661e0ac17545811403cbc9c"],["/2021/07/15/Review/AIR/index.html","38d2e1810a60e4175aeafdae68b75097"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","91f45ff667fae64baaff220a2a9dd801"],["/2021/07/15/Review/螢火之森/index.html","fe8cd91be8b6a0bf042013169613c7c4"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","6077053e11f35a313709c2281363f06b"],["/2021/07/17/Review/奇蛋物語/index.html","fbd7f9bada6726bf5dbde8fbd4757573"],["/2021/07/18/Review/Vivy/index.html","334d93dc1031771509679e1846f40583"],["/2021/07/18/Review/請妳消失吧/index.html","d0e7ad3d7418aace3f66565bf88b116b"],["/2021/07/19/Review/漣漪的夜晚/index.html","fe9c7dd4b0b98c7aa420439fb024b59b"],["/2021/07/20/Review/月色真美/index.html","9e3116c1830ba17640993a4a76b9edfa"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","0d7477d296217ff6692e6f09dcbf587f"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","3111d74ee743968b20a5991f113b505d"],["/2021/07/22/Review/罪惡王冠/index.html","ee13e897187fec24cc469e32f84ff67d"],["/2021/07/23/Review/弱角友崎同學/index.html","9c39b846476d52e12eff57c5def00895"],["/2021/07/23/Review/惡之教程/index.html","f73dc8d05f80a55007ac7695c488717c"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","1e12ed8369e85a7b20c5108de3517525"],["/2021/07/25/Review/魔王勇者/index.html","3bad3b0430a9cd2d26346dcfedcde66b"],["/2021/07/27/Review/一年A班的怪物/index.html","84e177a65634b1b0550adfce3b75fc9f"],["/2021/07/27/Review/奇巧計程車/index.html","fd4ded4b5c666d6a3cfe329dd1719204"],["/2021/07/27/Review/專情的碧池學妹/index.html","3a04843e98ddbcbf1fbb9a922e420727"],["/2021/07/29/Review/只有我不存在的城市/index.html","38036818fb5b60c4955adf8567f6fb27"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","990a33bca1e5298d65fb4e03a2333f91"],["/2021/07/30/Review/可塑性記憶/index.html","96bb42eda391de9f9ce40079ed4e364b"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1a699b48f7efd5f33bc20e1643e85f8e"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","3122b677126ae0518ef32cacbf777160"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","bc4fcd6d6524e80f78d7ad7c747a4076"],["/2021/08/25/Review/清戀/index.html","091c2a366143ea3d533601a2a618b2cf"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","fecd5f524235393574be1504c73e7df5"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","d5a4633dfc762f00e152ab7c0ee58e44"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","36f30cc1b8e5d78b06a5c97f2d067d25"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","9bc45239a6867b643c1c4de5066803d6"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","b36dade788993c3376322730492d074a"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","2b9f284b64198c0e4286ed0788d920d9"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","03e7724855393921ef9d2f6aed9b203d"],["/2021/10/16/Review/龍與雀斑公主/index.html","70f3a7d5ac9a52a0fadb6c8967878a5a"],["/2021/10/19/Review/孤狼不想開後宮/index.html","2699e3738c5f01ed834edf56ce1fa78a"],["/2021/11/13/Review/徹夜之歌/index.html","d8172b42fe2fd03ca3fb227405fa401f"],["/2021/11/24/Review/武煉巔峰/index.html","07ae96c55efd1b9e0cda393f13bcd54a"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","10505ea473429845f31d950b73af4d9e"],["/2022/01/28/Review/神醫凰后/index.html","f486bd58e7359410ba03fee0fd7e7e25"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e2bf3b2fcc4e294e9e81f1e0fcc42278"],["/2022/02/13/Review/夏日幽靈/index.html","a69e4b0949c0ed81bf63a075352705b6"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","bd880723125e4024c2b6d29b70ddfef3"],["/2022/02/26/Review/賽馬娘/index.html","4804a6bce7ea8f29e7a49262a6140002"],["/2022/02/27/Review/大欺詐師/index.html","ea024307f210e48acd6242e913f5c393"],["/2022/02/28/Review/前輩有夠煩/index.html","93f2102eb9803c9317f45580a7786e99"],["/2022/02/28/Review/碧藍之海/index.html","a977858bf17fb22be41a17707ae917c6"],["/2022/03/05/Review/落第騎士英雄譚/index.html","83f40181add0b9159a8227746157016b"],["/2022/03/06/Review/Another/index.html","e86e442830efcd8331b11054a88364da"],["/2022/03/06/Review/入間同學入魔了/index.html","61f47a579b56bbe2cd859c75336be9ef"],["/2022/03/18/Review/再見宣言/index.html","e99fe5dd2eacd7cbe456f70bb7f8644f"],["/2022/03/23/Review/生若冬花的妳/index.html","0fed44134ae46b6bee1ccc03b75fa6fa"],["/2022/03/25/Review/天之弱/index.html","525a813a62731cf950f52a3015f6aa2a"],["/2022/03/31/Review/滅了天道之後轉生/index.html","b90f075236ccdf9ab051287191b5c353"],["/2022/04/30/Review/泡泡/index.html","062f72ab0aa02bcbcf87c55831b56871"],["/2022/05/04/Programming/Dynamic Programming/index.html","3f106154fc2939c123549c8cb3dea762"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","e6c26d9e5a202f430fc3383e9c403dc4"],["/2022/06/13/Review/偵探已經，死了/index.html","aeb8e53c2b943884df1ebfa5e8bf432c"],["/2022/06/14/Review/黑色子彈/index.html","c01145bacc06c690258f0ad1f19ad522"],["/2022/06/15/Review/黑白來看守所/index.html","426e03badc054e1fcd09064d16f34872"],["/2022/06/16/Review/虛構推理/index.html","d1f324b42ed4233f9b87cdb978119f6e"],["/2022/06/17/Review/戀愛與謊言/index.html","f74465a50f3fc72d54313414181f5579"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","7b00181e77348b0247187dfd4e9f9317"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","ab52c8ccffc9f8c3718ddef9c082f9c7"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","e80fb2a1df23804521a82e7035287c2f"],["/2022/07/03/Review/Hello World/index.html","0e461647402cc055ba7e59498bd0e213"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1f6e292849a87443c1d5850387063ca9"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","7d6418ba8c6c98c7bdaf4a74e7ac3e19"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","fe75c6d365028db0e61b20ba81746037"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","2b34fe0310772f17eb71264be9797832"],["/2022/07/16/Japanese/動詞分類/index.html","9051b876a68dc11bccab7e3366676e71"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","7075ec7ef9abf25882969e73b5a4c590"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","aebbf179ad3e16f92e2b3e68b98f602c"],["/2022/07/17/Japanese/音便/index.html","485a1e64a02b98c7246432aef051f805"],["/2022/07/18/Japanese/動詞 時態變化/index.html","29c4fe19570fb6ba14a4b9d50a9e9ab8"],["/2022/07/19/Japanese/助詞用法整理1/index.html","bbc9b60facb70ad27e291753953f1333"],["/2022/07/26/Japanese/助詞用法整理2/index.html","2519cc528dc424aa942ef5a2328129f4"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","fb9db52a5f8b1f02c89464767ca1f147"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","6702daf92fd166b0c136d7d081b2dba1"],["/2022/07/30/Japanese/疑問詞/index.html","84d9bf5d6b2c3f40e8222b3a26f72318"],["/2022/07/31/Japanese/助詞用法整理3/index.html","8938778f977a58c6e2af80a9cceb6e2f"],["/2022/08/02/Japanese/副詞整理/index.html","c6d0e4f9ac4790ad884460f77700d361"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","1c5cc5cd2efc20aae53f724a6b2443b0"],["/2022/11/04/Programming/Data Structure/index.html","daa8c5734756659aad194160cea03681"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","7ae8c035abd5cb7e3b54e59e585fcbc6"],["/2022/11/22/Review/組長女兒與保姆/index.html","5c8268662dffad9a6a55d2b1399db336"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","801bde5e6059694b68c2baa3497d0ae8"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","9e18d057f0a27f016a6d1cbfe14c89dc"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","8b50a727518c4f7545297074883e6d4d"],["/2023/01/01/Review/あの夏が飽和する/index.html","9d8703b538ff1a396ac94765fc18aa43"],["/2023/01/02/Review/孤獨搖滾/index.html","9ed9ca4b5c7b88cbbcb3728893130035"],["/2023/01/03/Review/來自深淵/index.html","c47dfbe93d32b8df9d143fcc2f87ce12"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","2faf735aa412e29bd187cce880e3612e"],["/2023/01/05/Review/處刑少女的生存之道/index.html","df920557e1c33001637d655689628db4"],["/404.html","7988a50118f1e63caacf54a66beefb62"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","e54a1c4e0eb72ca5771abad318764573"],["/archives/2019/07/index.html","f3b653b3b848efa970e2f48ff4faecfc"],["/archives/2019/11/index.html","f9df7b86e31ae8b767204c17a7dcfe96"],["/archives/2019/12/index.html","8bde8af8f0d80101a98586fd8917c0c0"],["/archives/2019/index.html","ea465a60b4208734c50f55afe927152c"],["/archives/2020/01/index.html","fb7837bed99e7650e1fd3d24254c4fa0"],["/archives/2020/02/index.html","c3d45a7da7e0934762f79a2202f11239"],["/archives/2020/03/index.html","b9576ec42cb7530bb0538e0f57a347f8"],["/archives/2020/04/index.html","b772b970ac00dee232ecc4633e166e55"],["/archives/2020/05/index.html","111e86402d51fa66b813b966433f4189"],["/archives/2020/07/index.html","1d9f91a571ef5ae363564eeca9a219f0"],["/archives/2020/08/index.html","bc25fb8715444ef098d5dc41b883f275"],["/archives/2020/09/index.html","3138cd79543364be51db8bdb63f95814"],["/archives/2020/10/index.html","37e877b22381b1cd743448d47489a6e4"],["/archives/2020/11/index.html","7f0071a140dafa8b75b01387877082c0"],["/archives/2020/12/index.html","7f8abeb1d6683b91af8235c69b3bde26"],["/archives/2020/index.html","95876986625dca2d2ca238671461864a"],["/archives/2020/page/2/index.html","993dbf63edc477e53d8a5811afe55cef"],["/archives/2020/page/3/index.html","02ab70f9b03d01f611d2023995e14f3c"],["/archives/2021/04/index.html","b7142fb2d6acff623052a5be3f9341d5"],["/archives/2021/05/index.html","187acfd5c60f6c75e11062d7e7546d55"],["/archives/2021/06/index.html","60b3206295b85b67c9ebcf6ab785f525"],["/archives/2021/06/page/2/index.html","7701d55ca41bcea535630e01ef231f1b"],["/archives/2021/07/index.html","8fe492801d6fa239fd8942d0b0c22bc9"],["/archives/2021/07/page/2/index.html","209694809502b6fbfcbc2cadc8b2c9a8"],["/archives/2021/07/page/3/index.html","50c3bc8aa68d254860843a17c9499348"],["/archives/2021/08/index.html","ba7eba6d06a33166314fd1ef1ba20a82"],["/archives/2021/09/index.html","3f0fbd20d421b5ab9b7f2498319f2add"],["/archives/2021/10/index.html","800c0f8fd0b72849ea40deed4cf633fc"],["/archives/2021/11/index.html","0e1340bc342772299d558c0f8c3b609a"],["/archives/2021/12/index.html","5c5321e323c1c86c3f757e2509372b50"],["/archives/2021/index.html","a7b084782a923b27fae8039e7c257f15"],["/archives/2021/page/2/index.html","26df5b313b89c2a39ea88905101f9c39"],["/archives/2021/page/3/index.html","d99fb448d5cd9edd72b0df6438b7f0e2"],["/archives/2021/page/4/index.html","2f1af165847e0ca414b66769ff1665cd"],["/archives/2021/page/5/index.html","5ec9cb891a5a54af85fed4289432b633"],["/archives/2021/page/6/index.html","be5fbbb63311f345144b8410dfa91e90"],["/archives/2021/page/7/index.html","6c6e92c98e5e7c145d340107c51c63f0"],["/archives/2022/01/index.html","5166a5f1b9166a79e1bcc3a84404b035"],["/archives/2022/02/index.html","35cf5feccdbbfbd875eb7bae13c8d14b"],["/archives/2022/03/index.html","4ede2c15829d25f927962450fceecd09"],["/archives/2022/04/index.html","d43276392c45a7470b64159ecf82ccea"],["/archives/2022/05/index.html","5bd056db1c508e7a4f97ecfe14ff62ec"],["/archives/2022/06/index.html","fc26043ff7a28707c4ef2f2f7fbec6aa"],["/archives/2022/07/index.html","91f75abe68498007df3df8f3cfc9148f"],["/archives/2022/07/page/2/index.html","a50908ad3ac8b19057be6c8eddb6f058"],["/archives/2022/08/index.html","46e3035bf48f706d4b64bcf9009052a3"],["/archives/2022/11/index.html","3d5c5a0f9bd48d0017740773f7282069"],["/archives/2022/12/index.html","3701c8c0c94cd891c0ed77f1940ff652"],["/archives/2022/index.html","3429878e87789c20c74c1fccc5d07985"],["/archives/2022/page/2/index.html","c2f3a60323ac3991291f64c36e22df91"],["/archives/2022/page/3/index.html","49d5e909c3c3f70bad4923ea4b81bf40"],["/archives/2022/page/4/index.html","26808d91ccb6347cea3e260e5d4b880b"],["/archives/2022/page/5/index.html","02ac525fee2f984f397b4af50790abce"],["/archives/2023/01/index.html","4ba7d97947e0ad5468dc939de8bda433"],["/archives/2023/index.html","477c6360ef162397364848a1b953fd24"],["/archives/index.html","02e2a3c73e982aa195ea03e4af0e6312"],["/archives/page/10/index.html","50af797b3f61f5a6fd73b0f00d7f8cca"],["/archives/page/11/index.html","3d388037f50cfaa6bfcdcd9eb527b17e"],["/archives/page/12/index.html","1e9a75f3d42fb5fb171e495034a52ac5"],["/archives/page/13/index.html","d5b6e3c479cceeca5b207ac15ab34d59"],["/archives/page/14/index.html","0606420cf035b987ce3b04e074763142"],["/archives/page/15/index.html","9f113f7d8b21515bdd8c2453fbc6d131"],["/archives/page/2/index.html","7e764aca536b225e25a8068411a328e2"],["/archives/page/3/index.html","8ced4ef7267f4af8952e962ac6a2fe8d"],["/archives/page/4/index.html","006afe48f648f5e39548fcd76ab959ad"],["/archives/page/5/index.html","f2809d5ac7a358b4a3cd91903603e76e"],["/archives/page/6/index.html","f880eed108ba93265ba2b4bfbacd61ca"],["/archives/page/7/index.html","d7af47373a7bb5f3db31ec7859ada823"],["/archives/page/8/index.html","ab2756371c963a6e204ea09dcef980a2"],["/archives/page/9/index.html","28ad63d6ca1f43ae933eea3196330243"],["/categories/Programming/index.html","99e46b0d8bd9c04d2b6ffe212291ac7d"],["/categories/Review/index.html","3fd86707af98c6d55813c533767656a7"],["/categories/Review/page/10/index.html","ad8702d67f0216af02d40d0d449f1c28"],["/categories/Review/page/11/index.html","37d1feebda32f64612299a447a81dd63"],["/categories/Review/page/12/index.html","23231718f99703be924a051c7607475c"],["/categories/Review/page/13/index.html","f1bfe78cc0cd0cd2d5e166780a1f990b"],["/categories/Review/page/2/index.html","399a9c9cfabe371ec87cc1d1b8774582"],["/categories/Review/page/3/index.html","ae86fb9f1309b7462e1d4861fff4d646"],["/categories/Review/page/4/index.html","ba2db1170762ecd0475222f57d6ae08f"],["/categories/Review/page/5/index.html","34f331c32da6ca47a3a09558053ff49e"],["/categories/Review/page/6/index.html","0accb4f33a59039ad248bcbd6dd76c8a"],["/categories/Review/page/7/index.html","a6de91a165c9382d48151b64235364e0"],["/categories/Review/page/8/index.html","182333ac666471c4d037633f6ba97e13"],["/categories/Review/page/9/index.html","bbb6cc9704eb3f4ac97f261523964a60"],["/categories/index.html","63afa2fc9a0f89e7c84de1bf836e8144"],["/categories/日本語/index.html","d17b72e1a310b45cb0a42c25b875b983"],["/categories/日本語/page/2/index.html","833dc4d1a34fe8c129074e6043b94c0d"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","dbd7f706f5fa5e997b210429ecda67d6"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","70114abbe273f437d73b166f8a2e5199"],["/page/10/index.html","d0ddfdf929e5650ac1732eab282b9202"],["/page/11/index.html","a5af4b75cc0e0cde6e2ea4a3a84c3b99"],["/page/12/index.html","b2d448c28d58677efd88a9183853a052"],["/page/13/index.html","0b13b2a98b81d28697f3a0266fbe936f"],["/page/14/index.html","7dc000698a2a004bdbcbf3c07353560a"],["/page/15/index.html","3921f84fe45a8c178ad2977bccc6630a"],["/page/2/index.html","3670e7bd52f4420f06d65c2086ea29ff"],["/page/3/index.html","cc84cc82ea856bf3b2e1004d060b0fe2"],["/page/4/index.html","a530d9035f18e04ff3bbe71ecde5ecf3"],["/page/5/index.html","01a7685e9a2421f7c85b6c3eff5499d0"],["/page/6/index.html","ad085066f2bb96abe494a871d0619ecb"],["/page/7/index.html","142a95f2121246445016eafbe3428df0"],["/page/8/index.html","b2f0705ee6796b8f51a75f56e338b89f"],["/page/9/index.html","dcc7da690f5d131261d6cbf2a89788a9"],["/sw-register.js","14cfd07bfe377a3c28c3f997a5a6f0bd"],["/tags/10分作品/index.html","3e10a8a074f8307e79f17246c21be49b"],["/tags/3分作品/index.html","3913f21d9a88b91a3a0ee4c67e61aa11"],["/tags/4分作品/index.html","94f68aa1adfbc54a9e3bdeb92ce57d64"],["/tags/5分作品/index.html","336eca9c3fcd917052d9dfc838720bf1"],["/tags/6分作品/index.html","b63b51f34f090ac96191289f1eef00c7"],["/tags/6分作品/page/2/index.html","fa332a6058b258aa00edcac59d24e32a"],["/tags/6分作品/page/3/index.html","8e174a40b17f64d24e2e0f5b63bfb312"],["/tags/7分作品/index.html","2a1deb7d19507e60823c330e5b76f28c"],["/tags/7分作品/page/2/index.html","9460d5d0df347fd5188eeecc750e8a2c"],["/tags/7分作品/page/3/index.html","f24bd65bbbc83b052ffb8a444391fffd"],["/tags/7分作品/page/4/index.html","03032d7043fa1c739a43124db630cff8"],["/tags/8分作品/index.html","3f7c40bb9e3743fe5679273bb6e2c304"],["/tags/8分作品/page/2/index.html","43276f03a2d5d84479c013f4b151fb53"],["/tags/8分作品/page/3/index.html","3b2116fc66d8c98fcc117d6c51cde730"],["/tags/8分作品/page/4/index.html","b3e9d0f452b73f685ee0641dc194e730"],["/tags/8分作品/page/5/index.html","44701b7f082da7f32ec3928346dfbc6d"],["/tags/9分作品/index.html","1e5eb26b9f2a6f23c7e628bac3bfcdfc"],["/tags/N5難度/index.html","728e5af7dc74eb2d0af624cf8fa0aafc"],["/tags/N5難度/page/2/index.html","bef7b0035f9957e96ab60bd4096dbde7"],["/tags/index.html","3197fe6a40b06c870f2c30b34159dadf"],["/tags/アボガド６/index.html","3c11278604ef8a278da5f7fa36758df0"],["/tags/三秋縋/index.html","639242de48a98927ad4d2127268a3f06"],["/tags/中國武俠/index.html","841482ceead74e9b5b89f4b346a357ea"],["/tags/中國言情/index.html","a154cea18d131ea6194c9d7a2cada818"],["/tags/二宮敦人/index.html","cef4554f52c546b3aeaad34e69418010"],["/tags/人性/index.html","ad0a38ab05d9ce3c48167d98fd8104bb"],["/tags/人際/index.html","f54eb3f163904f1fbd9781385fffb744"],["/tags/住野夜/index.html","e626a3ba4668841c915e4dfc12d7fd33"],["/tags/佐野徹夜/index.html","19e0596cb0ca45f8642641d1181c5f2e"],["/tags/努力/index.html","605f39223b809bbd4797afb62fcb683f"],["/tags/動畫/index.html","d77c6490ebefe82acd09bed952891e31"],["/tags/動畫/page/2/index.html","de81c08715cecb87392a6a69d5362d70"],["/tags/動畫/page/3/index.html","1ede7110433a6f257829d25e5246f044"],["/tags/動畫/page/4/index.html","122b8207227e263e6049e6b22e4d18aa"],["/tags/原諒/index.html","6e4a9984d52a115b2a8df1193543b3bc"],["/tags/反烏托邦/index.html","8c6c19f24fcfda6bf4a33ad7fa667002"],["/tags/啞鳴/index.html","7551225b2bbd78738bffe83bff0dd669"],["/tags/喜劇/index.html","48d90861fbc891f89e697b4be48befff"],["/tags/夢想/index.html","411ecff3943bcb06663d3a7575061e17"],["/tags/天澤夏月/index.html","377bae673c3b01687f14bfc8a43ff649"],["/tags/奇幻/index.html","3b2ce9486883f3a54b9b7b7dbf39ef5c"],["/tags/學習/index.html","e3675b8d26eb08244f7e9445fdf039ab"],["/tags/學習/page/2/index.html","de3c1c98ee2a09b2eaf7de6a0126bd28"],["/tags/宮崎駿/index.html","e8db3739db84ac279ad2642b39a698a5"],["/tags/小說/index.html","41ed7d65ea345e9e31b912fec00eb09d"],["/tags/小說/page/2/index.html","008d95b5e6098d986809d258890bce90"],["/tags/小說/page/3/index.html","59c7ac6b550a9f05858e3ebae07d07cc"],["/tags/小說/page/4/index.html","76f3ed11cf7ba1a10c906d1851d6a4f1"],["/tags/小說/page/5/index.html","79cb99d04d6bd74943860b173f3d24bc"],["/tags/小說/page/6/index.html","bd8ba7032d278283c4e014223b64bb15"],["/tags/小說/page/7/index.html","95ad3dce728a63a891c6775f7d1f5257"],["/tags/平淡生活/index.html","836708c5112db749ad8b8e0b452bdcac"],["/tags/幸福/index.html","c6fa03df3c7242b615275112ff436460"],["/tags/志茂文彥/index.html","2bc42b4e68730ca6856a5e2499fcf800"],["/tags/愛情/index.html","2ad8af3e609bd3aa682d2b654c73bbfb"],["/tags/愛情/page/2/index.html","c877637b075a16ce94bab0ee2e371761"],["/tags/愛情/page/3/index.html","a0d0d5fef574d16347e865582f037890"],["/tags/感動/index.html","466bea7c2944c5f2b4a376ee108cffcc"],["/tags/懸疑/index.html","e4702cb9ab135641c91aa20994b1e18d"],["/tags/懸疑科幻/index.html","3ad555c746e8a73aab672ac148cb1532"],["/tags/戀愛/index.html","2a0ba929f7f6749f512c46b374402bcd"],["/tags/成長/index.html","c0808ca3bd5d5191a568dd2420479c51"],["/tags/成長/page/2/index.html","a3fbd2adabf9f6b392b48635b0ae32b8"],["/tags/戰爭/index.html","e2418c5d563346a0b3728c4e10611d96"],["/tags/推理/index.html","d90ac52faaa20699b5e7402d2d38ed11"],["/tags/搞笑/index.html","32251c97dedeb7872795f464b410bc72"],["/tags/救贖/index.html","a80223374e3849f5c2a01d36b0af8916"],["/tags/斜線堂有紀/index.html","8c2068746a98c7f225c69d68a2c51596"],["/tags/日常/index.html","b6809f8961074bba2a1ceda30f5c9e89"],["/tags/末日/index.html","2583c31bd7b9733a3b51fa96c73254f9"],["/tags/校園/index.html","1f5c4f1dbbc0dfd1db599dbde38c96cf"],["/tags/武俠/index.html","a81d594d72a302692234464cb85c9352"],["/tags/武俠言情/index.html","f187b2e62e579d43dfef99a54cdd14ab"],["/tags/漫畫/index.html","330697317e1b1679acaefdb9d9385d72"],["/tags/生命/index.html","b5652356cd35d6607fb2fd1526a80e36"],["/tags/生命/page/2/index.html","5ff377053835b3d0e657b6a376622122"],["/tags/短篇/index.html","47306adcc55545d97b60b374a1223853"],["/tags/社會/index.html","013dc9ba2a5ecf942f445885f919f50e"],["/tags/科幻/index.html","b638d051f1c305fd6ecc34471eb62bd8"],["/tags/童話/index.html","f8db20b17b1640cd932df373d183d991"],["/tags/競爭/index.html","28ef3d7111211135c6c277cfdfec100a"],["/tags/自我/index.html","b7bb45db83e65262fbc3d8e91c0085ac"],["/tags/自我認知/index.html","37d91dadf2966dce600d99d5c96e839f"],["/tags/葦舟ナツ/index.html","e5c5f12ccd95ed991a2be34b40835271"],["/tags/藤萬留/index.html","8f556a53474668b85e967419fdfa3734"],["/tags/親情/index.html","ce75a0b5cb449f9fa2b5fe0d0335ef39"],["/tags/言/index.html","444ff6b35a878a5460cad2548ae5cab4"],["/tags/雜項/index.html","dbcdb5bf6a46697abc716ca14eb73fd9"],["/tags/電影/index.html","6746eaa9971e1c6206e4b51acccda098"],["/tags/電影/page/2/index.html","b59960ebd7687cf211b614dc6b8ce92a"],["/tags/霸凌/index.html","3aacbc40b2e3f037cece4e7892996b50"],["/tags/青春/index.html","e779d3c5c5aed3ad34213094a97482be"]];
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
