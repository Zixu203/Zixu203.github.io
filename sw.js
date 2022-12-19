/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","fd620ddd702ddf672e00d2e2bf26e9bf"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","47564c60edf3052765ffe410a02a3049"],["/2019/12/25/Review/無法計算的青春/index.html","a00c807c207a30c93bb8990ebee6abe6"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","bbac1a03cf2ef30f1d148904c2759754"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","b6c2601660455cf987142e68f2ff9113"],["/2020/01/19/Review/下雨天，不上學/index.html","f1e8b0474ed7e10ad4b07a93170ee105"],["/2020/01/26/Review/三日間的幸福/index.html","d7b7771de3e36b19fd8f2b810f633a60"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","06ef0a5e0c342d667ca1c8e1599006f1"],["/2020/02/09/Review/青春期超感應/index.html","eba2040572455e23e32b33aabc459e31"],["/2020/02/15/Review/又做了，相同的夢/index.html","7d31b2a0405e89f9696a27a056da46b9"],["/2020/02/22/Review/回憶當鋪/index.html","85a22a801fd7af2f67b2febffadb13c7"],["/2020/03/22/Review/不適合自殺的季節/index.html","a6b12c8e10c61edc40678c92aa763154"],["/2020/04/26/Review/我們都無法成為大人/index.html","df33935d80f35c91b077611befb35183"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","95005a891ea623437cd5cb2497b21eec"],["/2020/05/17/Review/人間失格/index.html","86fde6ef72eb250c0e6910a7eecbafe4"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","0e76d9eacf9ba849913eb076682358c9"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","2ab6baa3c6598bba69e0e99a2ffaddbd"],["/2020/08/01/Review/銀河鐵道之夜/index.html","5d33358a93f666d795dc7238671bcc91"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","9031e7b7e0a64a851ca5ab9096c86013"],["/2020/08/16/Review/15歲的恐怖分子/index.html","6c7d5343de54167f320ded7c89972191"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b3dcbc142c14530d42bddc5e7ecafd82"],["/2020/09/13/Review/羅生門/index.html","a802cb97733b2aeb2bb804b746749949"],["/2020/09/20/Review/闇夜的怪物/index.html","cc74466ab5a59636d2ebad0390ae07f0"],["/2020/09/27/Review/14歲，明日的課表/index.html","990f30128fab624d53a0b49115c7600c"],["/2020/10/04/Review/致十年後的你/index.html","0d0c360b3f74776949ae3f2fe474dd0c"],["/2020/11/08/Review/滅絕之園/index.html","a6ad9e4ec0d17b2860726c9fb528e597"],["/2020/11/15/Review/將愛拒於門外/index.html","a7c38783b3982050b81d79f48f26f266"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","b27a1130cc05388aae6dc7a210f0b2e1"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","be8691aef0785b5f7448d4055fde3c53"],["/2021/04/22/Review/道印/index.html","a19f0e9f562db2aacb35458489552454"],["/2021/05/03/Review/戀入膏肓/index.html","1e1dc6c548b1bd2a17c5cfaf84f78252"],["/2021/05/10/Review/Dice/index.html","7f035619a2de30ee0931057c35504525"],["/2021/05/15/Review/魔女之旅/index.html","2dd849dc0532da1f38b03f0a139e0a34"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8359bafb31b43ef46db17cedf4c39fc9"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","8db49dddb249ff87dee93682fae0dfa9"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","c918129d662a97e550066d23318d1f89"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","71d59f3f28a78e29508fd7197ac38d3d"],["/2021/06/05/Review/流浪的月/index.html","1144eac7fcae7228de8264052c02bd24"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","18f9d32392ef55cf86603cb7041a88e2"],["/2021/06/13/Review/第一人稱單數/index.html","7aa7bb1c6d8b8f47952978cd7a91d6eb"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","627d8295398d0baa52cf2d8cdf0d5c69"],["/2021/06/16/Review/願你幸福/index.html","794b8a765c91f7a25c984482403a24d8"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","e7eb20940441d740324e63937abc2c35"],["/2021/06/21/Review/神隱少女/index.html","30726d8a3c83e26a8828adc71c489485"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","6c4b1de9b693b1700874c9e47bf931a3"],["/2021/06/23/Review/天空之城/index.html","ab3a96e804024bcf58e42a7229d9ba8e"],["/2021/06/24/Review/魔女宅急便/index.html","37044c058e85b4c17a5c9c893ae279d2"],["/2021/06/25/Review/借物少女艾利緹/index.html","5999d370961e37a2ca5d086241f259a1"],["/2021/06/26/Review/魔法公主/index.html","de0b2a76e4ec9e99a7bfed1bcd25ec58"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","cd5d355ce90eb316e734bea2bea5f582"],["/2021/07/04/Review/飛雪與劍/index.html","05c21348f842ec4331d2510125d5830e"],["/2021/07/09/Review/地球防衛少年/index.html","f6863f11cdfb59e4502ebc7c94063300"],["/2021/07/12/Review/Angel Beats!/index.html","156807e252027ce9cee8746c240ec5e7"],["/2021/07/13/Review/Clannad/index.html","623cd8334055cac56886215e3417bbf0"],["/2021/07/15/Review/AIR/index.html","45719721a5e7b2b8cb58e8b7df78dda9"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","e1c636b3ab6dc2b59f48611eabf00302"],["/2021/07/15/Review/螢火之森/index.html","5ae146b7cf0dbea3cd9e3276841de5cb"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","fd8ae80997e7aef83078afdc537c7691"],["/2021/07/17/Review/奇蛋物語/index.html","c527e08d1236aa17e9d9042dc5d52f95"],["/2021/07/18/Review/Vivy/index.html","e0e4e5a5b0fd029effcc286e1e652c53"],["/2021/07/18/Review/請妳消失吧/index.html","aad7493b6ece63ac73352696b63686ef"],["/2021/07/19/Review/漣漪的夜晚/index.html","717b73900dc5a0d1d41c62644ae9719e"],["/2021/07/20/Review/月色真美/index.html","57f217c8f22c8a412dcea550d6e6f0cd"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","a8a7cbccc1a8f17f8f199ee46f2aefb1"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","4df362b03f12f15a8d61dfc00b723a81"],["/2021/07/22/Review/罪惡王冠/index.html","41032f8c08023a0db0539fc65b0c20bf"],["/2021/07/23/Review/弱角友崎同學/index.html","4365d0e66c38ca21df16a8b66483c58c"],["/2021/07/23/Review/惡之教程/index.html","a472c9c4af7bf21e7ce51ca4df70c2fd"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","ef92ac66d173c40250608b49738ff411"],["/2021/07/25/Review/魔王勇者/index.html","18e7850700e2e7f31b8246e37c245cb5"],["/2021/07/27/Review/一年A班的怪物/index.html","fbacc59ea2a52c94d069252c386f52cf"],["/2021/07/27/Review/奇巧計程車/index.html","3eb4c0b9a002e834c063a39ddae0ebd2"],["/2021/07/27/Review/專情的碧池學妹/index.html","6f1351b6edee366276dc5c9a27c17113"],["/2021/07/29/Review/只有我不存在的城市/index.html","ae47408ed11bba766da13adb1e07c59f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","f294efe4697a2319798ecb598d2df1d4"],["/2021/07/30/Review/可塑性記憶/index.html","00f6e59eb68d9898532d650872422aa5"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","e91c5b683bb177ab1c80d3c61d1c8ce8"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","b01bff7aa24ec41e8ae8e43df3ed30cb"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","29750d0e4d3961d820e54a1e016962fb"],["/2021/08/25/Review/清戀/index.html","dc3929e678e9e5c0fdf23d694f14e38d"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","2925d75be6cd460743a36d77e7f00820"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","51374c2be90852db91e9dd66628694d6"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","253296f29767b4ef18897c3cd24f4c49"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","b6957beed2c4e63976985be976b96cbe"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","9de82023db43fba471201c3629a4aa63"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","f445e3928c5aba4aca85022aacce5982"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","b0a76fe754251012928dcc8910baed4b"],["/2021/10/16/Review/龍與雀斑公主/index.html","5a3f0f8afbddb24add9e63259660d101"],["/2021/10/19/Review/孤狼不想開後宮/index.html","68fe56b24ccaead37464e06d44dcc366"],["/2021/11/13/Review/徹夜之歌/index.html","366d42672eddaad23bd00efd72318f97"],["/2021/11/24/Review/武煉巔峰/index.html","259dc36898fc2cd47436ab8add24e7ad"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","c65dd3b4c2e537527a97389be51e4199"],["/2022/01/28/Review/神醫凰后/index.html","4b2c5da86167ae697693fdbee89a307a"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e3e75be68384d6b7cc5e2055e1c51130"],["/2022/02/13/Review/夏日幽靈/index.html","6937663f5b5429b6bff0847bfbe754bc"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","403cdb49e77f4e7ab994f60a4354c0ac"],["/2022/02/26/Review/賽馬娘/index.html","9641ee3feaadf42977c04c9a0b91c3fa"],["/2022/02/27/Review/大欺詐師/index.html","7213128feb989b34982f046b0475ffec"],["/2022/02/28/Review/前輩有夠煩/index.html","44b9c70b740aaaba29479fc9d39212a4"],["/2022/02/28/Review/碧藍之海/index.html","86629d9348fcebee1245dbeb10de0a9d"],["/2022/03/05/Review/落第騎士英雄譚/index.html","0ff3296cb97dea1c05cccff32133e185"],["/2022/03/06/Review/Another/index.html","80ea766b668258dcfd667d31b1a9b4b8"],["/2022/03/06/Review/入間同學入魔了/index.html","446707281b1bc9a033e94f538883fc76"],["/2022/03/18/Review/再見宣言/index.html","1ee421cbc540853b06ad6376dd3beb93"],["/2022/03/23/Review/生若冬花的妳/index.html","a4ee66beb83274e85b5b4e7521efe0d5"],["/2022/03/25/Review/天之弱/index.html","5c15d5a0fe2ead0888409031dcd38013"],["/2022/03/31/Review/滅了天道之後轉生/index.html","70439d2ae48455f2b693d194e6e6a0db"],["/2022/04/30/Review/泡泡/index.html","3c732c0b01b0ced576e86155d8b825d1"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","48db226a89146f912f79b90d4eddacc7"],["/2022/06/13/Review/偵探已經，死了/index.html","ad22862c47ac3688745e557cd1605cf6"],["/2022/06/14/Review/黑色子彈/index.html","28da604e8d5c3c3241d43907be52aecf"],["/2022/06/15/Review/黑白來看守所/index.html","2b2960a9555be980b58ccce6b703bbfe"],["/2022/06/16/Review/虛構推理/index.html","7ab1b72f739b29d4be76e97c8a56fa71"],["/2022/06/17/Review/戀愛與謊言/index.html","b5239f3043f24682a96cc5989e70dfc7"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c378fbe943a081117f48f0d7ff4cbd2c"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","b84109c04ea095cbca0003d8eaa664a0"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","222fed99233c784811fb254be63bd1fb"],["/2022/07/03/Review/Hello World/index.html","11806d1510e626248caaec6975735c2e"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","898b06e351840dbb862828f70088765b"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","215a9328a4d95ae43a88201eb301fe21"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","60e6f91e39e8aa153b2e0316ebc6766b"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","47bd73f994e962ac96126e08d1b0014f"],["/2022/07/16/Japanese/動詞分類/index.html","cd39b266b0b9c9f179988f7add6c0754"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","fc5fafb3b6ab194f60d845faf39577c8"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","7f31a18a96f58f0bb53c29c049765285"],["/2022/07/17/Japanese/音便/index.html","5ab27ae1648e1308dc92c13b8b52bdc6"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d3c24f1542f92a44a8f5dcfc5a519518"],["/2022/07/19/Japanese/助詞用法整理1/index.html","51ca21a13fd6282b4c40be5f11da20a8"],["/2022/07/26/Japanese/助詞用法整理2/index.html","caeebd73b6e2e86687a54610e8d44b10"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","5ce36bd62967f9317e32f2e82ffe2a46"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","290f317af4a726a30673a88a7f775b55"],["/2022/07/30/Japanese/疑問詞/index.html","d412835ce7226c9df79b42891d57dd62"],["/2022/07/31/Japanese/助詞用法整理3/index.html","7ae7d1307113aef16790d14005295ccc"],["/2022/08/02/Japanese/副詞整理/index.html","cebf8b212195b1846cde32e1da037517"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","a93ed458d07c5799d0a3fe30c1a1898c"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","c4f999c56484565d09f6e404c1a235fc"],["/2022/11/22/Review/組長女兒與保姆/index.html","3226f65926005a77d33d6c28eadfb925"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","54055be6e31fd9a6b83f62cef2160e1c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","cd4a17d00038306d99a69e156f8e673a"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","1ee570ce85d4b0d8d15bb19fd238b1b9"],["/404.html","ec5447ffb233be1692683347ef8bf77f"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","114ee94cc747f662fa070f5f3495671a"],["/archives/2019/11/index.html","0683642f0eeb028d7d67ceb8a3ca697b"],["/archives/2019/12/index.html","aaa4247e88aad5db69e88df60ed1f7cb"],["/archives/2019/index.html","fffe4ac4b2ada540baa3e4b1c535c6bd"],["/archives/2020/01/index.html","065a2d3b30d0f345d691f75e0411d7b5"],["/archives/2020/02/index.html","c94bd26d6a6630e8d33c56a98c78c8d1"],["/archives/2020/03/index.html","ec0d1b6887e5c1d287026e319ebcc06a"],["/archives/2020/04/index.html","082c93da84ab85159202119f6cae25ea"],["/archives/2020/05/index.html","75e22cde30e9a376fc8f3759e00fee44"],["/archives/2020/07/index.html","64556a6d5c2b75089d3513b59e5a9582"],["/archives/2020/08/index.html","bfb56d0d8e6bc6048915b62be54856ed"],["/archives/2020/09/index.html","9574729b088a3610181bf747466db07e"],["/archives/2020/10/index.html","0cdbcfd8370e745d2bc18e496a0776d5"],["/archives/2020/11/index.html","10e5a0970a3aa296c5e66b40f4d55c69"],["/archives/2020/12/index.html","39e110445f00f8e00ca2688cb5b76f7b"],["/archives/2020/index.html","e6a73a3c18996fb17c7ba5ea07af77f5"],["/archives/2020/page/2/index.html","feca29f5ce55d1ba459cbf60624f6955"],["/archives/2020/page/3/index.html","213c9ca17f24f9bbca2b6604f33ee4c4"],["/archives/2021/04/index.html","e11fa7c4f363810ddab338e2119898e3"],["/archives/2021/05/index.html","69a7fa30e34ac1fc86c7a7b5ca8bdf03"],["/archives/2021/06/index.html","6fd706c28621cdd1a1d450d3e3ac861d"],["/archives/2021/06/page/2/index.html","b56e1053b5c662fa75ff3cbb22871016"],["/archives/2021/07/index.html","7e4dafcdf65f969d4abe3b8ba19c4c63"],["/archives/2021/07/page/2/index.html","41e280bb0fb19f2fe374e02219d1fc2f"],["/archives/2021/07/page/3/index.html","25827d594d15e2ac5a6798d7fbc9a699"],["/archives/2021/08/index.html","931b633b87d8e19ca716f58bae67ad25"],["/archives/2021/09/index.html","10cf13aa7a552465dcfc79849a4157d5"],["/archives/2021/10/index.html","c70ca78ff89d7b4cd02a9213d68b0916"],["/archives/2021/11/index.html","3485e51a331329f8804c03f86a40e679"],["/archives/2021/12/index.html","52baefd77da116cffb34a931a9df7b47"],["/archives/2021/index.html","3cbc72495b64f9f2f3680c5c69d4971f"],["/archives/2021/page/2/index.html","7538cbf755a418a2632ca6a668af3b08"],["/archives/2021/page/3/index.html","6fd5f60c4afc9880108395eaea3c3e89"],["/archives/2021/page/4/index.html","a57164bfcb57c971625d820d1169658c"],["/archives/2021/page/5/index.html","18a9a521e13f4103e86645cd13add047"],["/archives/2021/page/6/index.html","4f018fd5940e0965d8df15f8a883ffd8"],["/archives/2021/page/7/index.html","a57ae6ce58957dc93a50cded0198cd34"],["/archives/2022/01/index.html","b57c7d18bbeeb5fb8cf6bdb45f8eef2b"],["/archives/2022/02/index.html","bc3bf4425577a3f9977dc5bc644c1c71"],["/archives/2022/03/index.html","7d4e9791cb1972ef69a5c4501f8f8bf2"],["/archives/2022/04/index.html","70692a278d9d87610770081f08ec5dd8"],["/archives/2022/05/index.html","071b4ebe90f0578684cb6d49d8aad9c9"],["/archives/2022/06/index.html","e5036eab702979b6bdecf8743ede7265"],["/archives/2022/07/index.html","533425c08ecbc7784b4ef3ad16e46ad9"],["/archives/2022/07/page/2/index.html","1a1fe667ecb242dab0024521e08fc290"],["/archives/2022/08/index.html","f7d8c0ac639c1ec60a0ac11d01884994"],["/archives/2022/11/index.html","f27ac3ca7889ae1287e285cf8d4cf673"],["/archives/2022/12/index.html","5569d31c664b7f10a4c2f1f165e85af2"],["/archives/2022/index.html","8115740b4b5b1851fc226b4cdb48ba9d"],["/archives/2022/page/2/index.html","3688ad4626f71353da1cfb89c03090fc"],["/archives/2022/page/3/index.html","e7591a146ccfe1d456b0bd18741392d5"],["/archives/2022/page/4/index.html","77e9907b483e7455b3d094e68fdad5fc"],["/archives/2022/page/5/index.html","ded2f90a28bf5a656bc02fa61113ba6a"],["/archives/index.html","f19a23ed9516c3500646ad4d03960990"],["/archives/page/10/index.html","8829fcae114a08fb6b54551d58ff37f0"],["/archives/page/11/index.html","2d0cc5a961b33fe8de03d7a3cd487115"],["/archives/page/12/index.html","a3018bcf5c82edfa05b28faa3b0b595a"],["/archives/page/13/index.html","e058aa6dfbdfceeee2993eff4c7b4820"],["/archives/page/14/index.html","4b2747ece9be254de735f260ce7973be"],["/archives/page/15/index.html","60f0dc0085eb4c9419722956d0b1ad8a"],["/archives/page/2/index.html","78de352773dddd87faedd2bd5d152e54"],["/archives/page/3/index.html","7c80c8335ca024c97a4dc9e9d2ff61e3"],["/archives/page/4/index.html","1ff72206b0d672923ae6673d659ac208"],["/archives/page/5/index.html","b27533fa2034e519a07ddeee6588a997"],["/archives/page/6/index.html","f84c464c29f1fc5ca8b44b256ce5e55d"],["/archives/page/7/index.html","5e494854e7725e428540f02ea6ac9828"],["/archives/page/8/index.html","53ddef01d38074730ab63f9aa89359a6"],["/archives/page/9/index.html","f27c2e70e1c38fe08c4c401ac44a17fb"],["/categories/Programming/index.html","105c10131127617ebe1c8e0a607af5b4"],["/categories/Review/index.html","87a622cbd22611f58cca70e6fb49c828"],["/categories/Review/page/10/index.html","9dcbb13e925c956712be6ca67167cb0f"],["/categories/Review/page/11/index.html","591dc3a0bd34a75c6a4e40eeaeea6fec"],["/categories/Review/page/12/index.html","a5d95accb521fe425a6a8bf44fb37789"],["/categories/Review/page/13/index.html","af5da80a011325f9eb16e60546481e49"],["/categories/Review/page/2/index.html","00694bc95b4f8edd885d7b7bdb41e789"],["/categories/Review/page/3/index.html","43a89269e5ef41efb75e23180b0ac210"],["/categories/Review/page/4/index.html","4d1c1656212e95addfcc140dac80b729"],["/categories/Review/page/5/index.html","4e29f563ebf0b1572ec13ae46bc3cbd8"],["/categories/Review/page/6/index.html","da003d6d2b19ed7b50c21b606c285232"],["/categories/Review/page/7/index.html","09eecc29eede6f6afbe8d5b5ac03e9af"],["/categories/Review/page/8/index.html","660876ab9ced5a6ec3e2f66c8583f886"],["/categories/Review/page/9/index.html","ac25ebcffc8fd1cb8988812ee71ed002"],["/categories/index.html","837b10785b3f48cb65601a6fb2fb322f"],["/categories/日本語/index.html","aec03af4af0daf885003e61e25a2fdb2"],["/categories/日本語/page/2/index.html","3ab66c00f7d8db5b54d8dd77c0087af9"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e443c2174adace53db5b037414ba7469"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1ef8f1a23325c3542c79f0be3406a883"],["/page/10/index.html","188ae00117f84637dbbf8b0558f84b23"],["/page/11/index.html","63980135aec8aa63c42b05b960dfe003"],["/page/12/index.html","04c41ead21766d00ec70c24d6f3cce36"],["/page/13/index.html","2662dc380d74c982e1afc42422cab13a"],["/page/14/index.html","d1290d122425fc7e6d1fc0990045d19e"],["/page/15/index.html","fc9958eb34add85712706df476150929"],["/page/2/index.html","abd08b3bb2932ed793bae7f50350a66f"],["/page/3/index.html","85baf735267b5466e3e3469e21685533"],["/page/4/index.html","40e3728d0e133c9e4a3cdf86a9b760f5"],["/page/5/index.html","cf16e3ece68a739b29a05e3bcd7fba41"],["/page/6/index.html","fbc7ccaeafa620015e4a61e96509b0de"],["/page/7/index.html","911dde53598509dd443854131f56a720"],["/page/8/index.html","391ff2edb1bf6cc26791061eb579cb4d"],["/page/9/index.html","0852e2b6359777de2b238eda50a58916"],["/sw-register.js","cdbfd215044b64736d99bc826dfdeb5e"],["/tags/10分作品/index.html","bcf47e457520720dbdc5de44e583c8c9"],["/tags/3分作品/index.html","a2ccf3d1a1b23d815cb8af173cd6dc2b"],["/tags/4分作品/index.html","ce810715d24fc669a239a92898af47cb"],["/tags/5分作品/index.html","21f01aa5fb60817ed3f1de5bad6d41a9"],["/tags/6分作品/index.html","0fa9b347d5f9e58e3713ffd1260a59a3"],["/tags/6分作品/page/2/index.html","fc0871a9bb114b6b3b6af08a7b8d9e43"],["/tags/6分作品/page/3/index.html","e57bd34a99b1ab3af66c9e6fad3b84be"],["/tags/7分作品/index.html","74285d6f76a2df617c876911d5117374"],["/tags/7分作品/page/2/index.html","ec44205d7d3d0de6d1113864e9d4ed73"],["/tags/7分作品/page/3/index.html","7a8ef48a86253691d4acd9152fb781cb"],["/tags/7分作品/page/4/index.html","c8be4b6dbd45178e228040d6a9f50cd6"],["/tags/8分作品/index.html","73d85ed055caa31d0b3d7048721a3a6c"],["/tags/8分作品/page/2/index.html","5e6321801849d2e665202f167bfdaf49"],["/tags/8分作品/page/3/index.html","02cf4f39f8635561fbb26a003437ace2"],["/tags/8分作品/page/4/index.html","9bf0092d7251707985f5a26c4658ab4d"],["/tags/8分作品/page/5/index.html","67f359ef1882d828cd4f1e652091c4b9"],["/tags/9分作品/index.html","c8ef122231b48b3ffc71fa0cf28d6ce5"],["/tags/N5難度/index.html","4976338cc8d85efef4da381b324dd6b6"],["/tags/N5難度/page/2/index.html","1d6694ef36d2cce7cd885a434475933c"],["/tags/index.html","c4aced56b799078e33ea7edd61a90440"],["/tags/アボガド６/index.html","9768d17d29babced57bcf8977ee81777"],["/tags/三秋縋/index.html","8623a072c074daac09ca9cbb55c33e8e"],["/tags/中國武俠/index.html","3f128a51c546b500d7cbaca959972b64"],["/tags/中國言情/index.html","1a07f23bd08d3aba9d4df042494c1413"],["/tags/二宮敦人/index.html","73292ed5738bf92bec32c867525f6943"],["/tags/人性/index.html","143cd3126804cb95d1b87e7ebfd62ebc"],["/tags/人際/index.html","1e97b1ac6b1a6e2cbc417c266ed4b2dd"],["/tags/住野夜/index.html","a6e2d1513e5d13c706db2884b637090e"],["/tags/佐野徹夜/index.html","1cc54a6d20baca35af1a9417ecb5da3c"],["/tags/努力/index.html","3146a35adad849fbb95b6ff1a4d699ca"],["/tags/動畫/index.html","36f66a03f7520b200c81160dbda192fb"],["/tags/動畫/page/2/index.html","f69403e5e64cdd2caec9e9abc2343e9a"],["/tags/動畫/page/3/index.html","031e7a785687f18f6f8e21c0c1488d31"],["/tags/動畫/page/4/index.html","78b0d26c9a1f75e08b4e2dcdf1cbafdb"],["/tags/原諒/index.html","ea990e0327c687f363556173f8f47cb8"],["/tags/反烏托邦/index.html","cc8480c0b6922dd31e56e451dff5b5cd"],["/tags/啞鳴/index.html","09a71687337212ecf745bb409a2e2c4a"],["/tags/喜劇/index.html","33aaba3df4dea9bbe120ca92d5cb4fe5"],["/tags/夢想/index.html","82ec6cead5794fa0ca3b90a55e4e232c"],["/tags/天澤夏月/index.html","832719d14292c116cd655a7698360854"],["/tags/學習/index.html","b39fd5463c458578b509694213399387"],["/tags/學習/page/2/index.html","d3fc9897a3ed507c6cdcee10c9dc836e"],["/tags/宮崎駿/index.html","b53f70ad758643ad7ca5ce0e6c4eb92c"],["/tags/小說/index.html","2eca8cf58aefdde44e54561b28365008"],["/tags/小說/page/2/index.html","97969c69dd0e8f8ffb5873d6f66a7578"],["/tags/小說/page/3/index.html","c068029bfbe6a58dfdd09b75c430b844"],["/tags/小說/page/4/index.html","15d8df588a0f23c557987182bc7f08f0"],["/tags/小說/page/5/index.html","1d60f333de69b500eac2a51d7a0e1779"],["/tags/小說/page/6/index.html","e5d6d1c6e3aa0deaf9cd84797ca2e93f"],["/tags/小說/page/7/index.html","b1e2d9bb68a20a0d6e87623a297fa2ed"],["/tags/平淡生活/index.html","d3f41c78f8b2a589859db71afdcd9ebb"],["/tags/幸福/index.html","f3485e5bbb0820fa0390b6ce57651a88"],["/tags/志茂文彥/index.html","bfa05330ee59c3fb5874429ca62279ed"],["/tags/愛情/index.html","ed188c5c42b9aaf6e1676d34f82290a9"],["/tags/愛情/page/2/index.html","d4d810cb6e61139401aa85478a72c5f2"],["/tags/愛情/page/3/index.html","b2ab8b479166dd263a4db3cd6ed123bb"],["/tags/感動/index.html","c5eec2dc41be7a18879317496f204bdc"],["/tags/懸疑/index.html","04e06248a22f8ef80cbd59f6f9698907"],["/tags/懸疑科幻/index.html","62a5c7ba55f6df7a37220a62669d9b58"],["/tags/戀愛/index.html","0258038754fb15c1aaad163405e47efd"],["/tags/成長/index.html","a820fe0ded5dfd53193e331cce0d0be0"],["/tags/成長/page/2/index.html","a327786adbc6a75af486abf6162426a9"],["/tags/戰爭/index.html","8b4aac8f4563e9f53a79fe20062ca84d"],["/tags/推理/index.html","8c37e6e31d82258631b0d4e4cae24416"],["/tags/搞笑/index.html","e9cbf8eca2f014ccfb70b425358b7cbd"],["/tags/救贖/index.html","6b5db1a728fb4ba0948eae099edcbd8b"],["/tags/斜線堂有紀/index.html","59d3c685f69f5e98d1a7599e1a5b5061"],["/tags/日常/index.html","de581a7508ff95472ff40970546647a3"],["/tags/末日/index.html","8d51bb65d08ae9cb86159cf0e8012ae8"],["/tags/校園/index.html","9ca52439d72abf55812103446c607b47"],["/tags/武俠/index.html","2de01f3b328ec01134d457865f4c5900"],["/tags/武俠言情/index.html","639722e588d307fae64130629e8538ef"],["/tags/漫畫/index.html","9d8478519267d7bffe9d74e849a0232e"],["/tags/生命/index.html","1b81bdfa678e07f03f68580f9eae69dc"],["/tags/生命/page/2/index.html","8fd82839ecae7062068922a87df78d4f"],["/tags/短篇/index.html","27f467bf046a48f20d25bbf51c5eead2"],["/tags/社會/index.html","c14478ab7ab056eaf0656e0eb7ac0f11"],["/tags/科幻/index.html","8fb1bcf7008c447ea33faf9c23fcfdbd"],["/tags/童話/index.html","02beab13355a8972e7bfae1b75a91c84"],["/tags/競爭/index.html","f9b7d99f22903c6fe5bf0f091c931bd8"],["/tags/自我/index.html","e08ac7f0d0c70952af2a15f54bcbeb54"],["/tags/自我認知/index.html","206cd8e084943eda2fc03706e13c9290"],["/tags/葦舟ナツ/index.html","ac4ca0c2ae25d32aca083da01216c37f"],["/tags/藤萬留/index.html","43224ab897bf7147bcaf191186a71b53"],["/tags/親情/index.html","87befd8a0528ae705c66b9056d9d9a67"],["/tags/雜項/index.html","1494051a4f353b39ffcd1082d2b6e392"],["/tags/電影/index.html","2fa44c59ec784b44058def0844c61103"],["/tags/電影/page/2/index.html","ede428a15fb748261bf161d276186488"],["/tags/霸凌/index.html","ba73448bae0a3ff082d168bfe394901d"],["/tags/青春/index.html","68e1ab19d9c75cee15c09c6d90fdc9ff"]];
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
