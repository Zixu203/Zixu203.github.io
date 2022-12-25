/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","907eab18c0d4ea762db035c7be785e4c"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","2225107adb9a0224b9d52fb7dbe138c8"],["/2019/12/25/Review/無法計算的青春/index.html","3b604127b787b04265d840861715c208"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","7c8fd083888bd6b1343a0169ef6138ab"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","c90121c74b28cd85ae5dc6a70422dc01"],["/2020/01/19/Review/下雨天，不上學/index.html","cd92de7eda664550899b9c7baa35545c"],["/2020/01/26/Review/三日間的幸福/index.html","506c7e30b48d2c86170e45d3ffbee73a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","eedfd29850040fea6f6cd19778a9d303"],["/2020/02/09/Review/青春期超感應/index.html","e23cefb826300d555dfd84d1f83b8854"],["/2020/02/15/Review/又做了，相同的夢/index.html","9c7f0bb01dbf344302896f527640645e"],["/2020/02/22/Review/回憶當鋪/index.html","109737cf8a9c2be6c0a33d4b3ef6348b"],["/2020/03/22/Review/不適合自殺的季節/index.html","ca87476de195641c59fe6bf011356690"],["/2020/04/26/Review/我們都無法成為大人/index.html","b9c5b6893479c87e67f3d19c43b8f1fc"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","791c4daca54c56d0182b10399d758db8"],["/2020/05/17/Review/人間失格/index.html","e9b2775c4ba3624ceba85a263ccd9fbe"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","f151d30a47812c50f28aa87eab91ec7f"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","062602bda18f77e155dde40550a6731b"],["/2020/08/01/Review/銀河鐵道之夜/index.html","54b5287cad274d4c657349e712737467"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","f05695da179211ec827facb5704c0636"],["/2020/08/16/Review/15歲的恐怖分子/index.html","94559eeb9a8d5df6f14fb43bc830ae77"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","39ae34ceeb8c3894bee028e4eaa2bd92"],["/2020/09/13/Review/羅生門/index.html","6cd84b56b7bca673bb75cad69393255e"],["/2020/09/20/Review/闇夜的怪物/index.html","001fb5337d7ac87a7703401aabe2b970"],["/2020/09/27/Review/14歲，明日的課表/index.html","058f84d2842adc702e62423143ef9fd9"],["/2020/10/04/Review/致十年後的你/index.html","01d08be1ef8e10543fb9c50b6380f594"],["/2020/11/08/Review/滅絕之園/index.html","23a02704878e1c0a9f6af0bee3c6dddd"],["/2020/11/15/Review/將愛拒於門外/index.html","dee06db849989d0413c87fffe536a744"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","d6d3fa3f349ed1ebe933e9b3369acfb4"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","269915741897bff4d612fe64639033c6"],["/2021/04/22/Review/道印/index.html","d332fcf301c43d4020284a4193fe68d3"],["/2021/05/03/Review/戀入膏肓/index.html","765269158f6a88db0f2d5eb4d7d11af1"],["/2021/05/10/Review/Dice/index.html","0684e6a94222e21cfb983d240dc6e28c"],["/2021/05/15/Review/魔女之旅/index.html","0c6818839343f556a59fb2de077f2fe4"],["/2021/05/28/Review/戀愛寄生蟲/index.html","f5413e975fb6b2042b03dde2aaf328ad"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","303b95a5fcf207b594e78f8f134de3e7"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","ebbf662db9eee9b9c885097e66896096"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","1f5b3bd51f2fdf64e584a0d2809e5890"],["/2021/06/05/Review/流浪的月/index.html","4353712530749930af50cedcc7f4546b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","7a26cc1c48f45e88f13ee97abc3ef3ee"],["/2021/06/13/Review/第一人稱單數/index.html","832f47dd799db7ddffb541dc030879b8"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","4e6e598c27f43a72ec624468464782a6"],["/2021/06/16/Review/願你幸福/index.html","576a7e4ebec7c6bffa80498078b83e42"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","cabe17c967847cb7726b0a9bbcff6473"],["/2021/06/21/Review/神隱少女/index.html","f036c5937d20cf9fcc6f702a9983c77b"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","30f09ef842502f98aac919f1bb418716"],["/2021/06/23/Review/天空之城/index.html","34b06de6670d6eb2df9f07c22e51a921"],["/2021/06/24/Review/魔女宅急便/index.html","5fc380816f42ea6a3d7e1e37c1c14927"],["/2021/06/25/Review/借物少女艾利緹/index.html","fee97c13ef2d33645cca4015659dcbb3"],["/2021/06/26/Review/魔法公主/index.html","881bc3b50956130cb90b1398dd1dc5d0"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","4255e36b8cb36cb00b9bf773fb68b067"],["/2021/07/04/Review/飛雪與劍/index.html","fd2e91a2d74171929de9c18cb22a2537"],["/2021/07/09/Review/地球防衛少年/index.html","b6e05dc9b126b14ba045d0df03b3f2aa"],["/2021/07/12/Review/Angel Beats!/index.html","7212c2e26d483d9026a92bdf2e09c271"],["/2021/07/13/Review/Clannad/index.html","541092cc81e26e27a167cb0189606708"],["/2021/07/15/Review/AIR/index.html","61a24ae57131048e5dd485b92e685aed"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","7055999beb5dc149e98ab30f9517e72b"],["/2021/07/15/Review/螢火之森/index.html","8eeee32268f931a1a3baea3694272a03"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","0430208ab3458c4867d9137c27e1c5c0"],["/2021/07/17/Review/奇蛋物語/index.html","ac289596d11f1be0c4ab2e6e0354ae28"],["/2021/07/18/Review/Vivy/index.html","8307a11004eba8b21b62c0a11692dbca"],["/2021/07/18/Review/請妳消失吧/index.html","15b06818763f73a1cd5295a2bda7cb07"],["/2021/07/19/Review/漣漪的夜晚/index.html","5a2e5eaec362c2b1bf09f790b0d20a4c"],["/2021/07/20/Review/月色真美/index.html","03387f5fb4bb49bec4189996af3ce759"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","e3297b1a1ab7ee61f069219da75a45b2"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","4ed2c09f5c1541e346e1305baa3adf19"],["/2021/07/22/Review/罪惡王冠/index.html","15e664bb6abe03f29e2bf38982e61fb8"],["/2021/07/23/Review/弱角友崎同學/index.html","4f413f504c4c4a7292998cf4525748ff"],["/2021/07/23/Review/惡之教程/index.html","81026d71f6d6ecc760c60c5005697bea"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","2cb207158445caf1a284b8c647c05a45"],["/2021/07/25/Review/魔王勇者/index.html","81e9c0316752b5fc8353bf27a27e29ca"],["/2021/07/27/Review/一年A班的怪物/index.html","b50824cdbc40c14210d1cc2c3b8dfef0"],["/2021/07/27/Review/奇巧計程車/index.html","a9432e597fdbc2e99a120d8e142f106d"],["/2021/07/27/Review/專情的碧池學妹/index.html","fe17da922c586b1ee534d70e330f7aa5"],["/2021/07/29/Review/只有我不存在的城市/index.html","6ab3e0a1b53c5478524d5a3d0c80faaa"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","f63b60869d796d13a570471f035a3f7a"],["/2021/07/30/Review/可塑性記憶/index.html","35098b64b8753e050921a2a7bb75025e"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","40bb1c176dfff6f599cf71d2e15224ca"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f70adcf579d881f8b7c1b434413026b0"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","c468ccd6b787afa51deb882e2234de08"],["/2021/08/25/Review/清戀/index.html","910d5cccd6d1fad7908a7fdcc3f4f8e6"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","3687872ca7db6e3b6e670e580bf1237d"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","e727e25527498c3af6c84c351fa64976"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","142185d54eed5f6c25a03d0afea55243"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","f0858b2997b692c09d2271388dbe1e2b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","91f6bdec4e738086975928d53c0bf85f"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","3bc9ab414d94eb0b9e592d1431baa564"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","33478c6f2994a1936525e6dead097e25"],["/2021/10/16/Review/龍與雀斑公主/index.html","4058e9ce39a17088c50fbd709cb7f30c"],["/2021/10/19/Review/孤狼不想開後宮/index.html","88c3f01fd553616bccde4b83eda30d5c"],["/2021/11/13/Review/徹夜之歌/index.html","402654e347d458cc1972c787538da144"],["/2021/11/24/Review/武煉巔峰/index.html","70409c4d81a126810e70874a8e77cdc8"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","a47a8009eac20e400d10682d6e920158"],["/2022/01/28/Review/神醫凰后/index.html","6ba1f771ce2cb503c1349c4cfdc3c80f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","76a03c549888070ba005791b30fcc190"],["/2022/02/13/Review/夏日幽靈/index.html","5fee20aec14d4f84d8dbb0bacc09966e"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","1a9b08c16760cafe23ecf378e2d8e75f"],["/2022/02/26/Review/賽馬娘/index.html","71b7e8c200fd11ece6ff53c750e77cda"],["/2022/02/27/Review/大欺詐師/index.html","4133bb75f4af46bbaa1638be7d4aee7c"],["/2022/02/28/Review/前輩有夠煩/index.html","7f55f9147f038cab4998fe0269df041e"],["/2022/02/28/Review/碧藍之海/index.html","9d14454d759b3f7ee08bd75d89e5722c"],["/2022/03/05/Review/落第騎士英雄譚/index.html","11037ad677e2b1573427d1ac79a1f57e"],["/2022/03/06/Review/Another/index.html","cb692711212adafc50bff8832e54b576"],["/2022/03/06/Review/入間同學入魔了/index.html","c2266a68d3b79e1ae31c9c558b0924f0"],["/2022/03/18/Review/再見宣言/index.html","2a57e74aa6677d1b5e5d53e513b02fb3"],["/2022/03/23/Review/生若冬花的妳/index.html","b0a333183eb606d2789b11e20195c71b"],["/2022/03/25/Review/天之弱/index.html","ef073a02934ee52696679065019d65ba"],["/2022/03/31/Review/滅了天道之後轉生/index.html","1421efe98a49ff2c0920e388afa239c7"],["/2022/04/30/Review/泡泡/index.html","01657028e28ecc58167c81a4bf19d231"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","a99468acb642145b2a24b09f4cc2c180"],["/2022/06/13/Review/偵探已經，死了/index.html","c1e813a20b60d26b1ccc8973539a04fb"],["/2022/06/14/Review/黑色子彈/index.html","08cf5a9c4abcccdb80b513c1b7c06bef"],["/2022/06/15/Review/黑白來看守所/index.html","e9045cf96c8eb402405c7bf5b0b1865c"],["/2022/06/16/Review/虛構推理/index.html","843e3e000798568b5b5b7934a7f367f7"],["/2022/06/17/Review/戀愛與謊言/index.html","c28e7832b91384dfbb599de429dde50f"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","f9c657b4829e0d283acb9924ad01fafe"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","b0b52312bc078e8191e988fcaa608864"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","6649535a2dec6347f561ce19491b3523"],["/2022/07/03/Review/Hello World/index.html","09ebcf5ccc4aee754763891520ca4fc2"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","0705ca3caf3ae9a7ad7b5c00d9c46554"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","158448ed7a9f29df839653992187f05d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","6c2338ea455bb119e22f3f8e3925688f"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c4cb86faf1ca0b0de0725093249d2c57"],["/2022/07/16/Japanese/動詞分類/index.html","9fc4b54ae0a0c9db3bd4eaa82e7f930c"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","bbc733e4d8491aa9b1a2da68db80a813"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","19bdb419319896fa31414d4d5b8ae816"],["/2022/07/17/Japanese/音便/index.html","ac5868c16a55726d48634cda41208ac6"],["/2022/07/18/Japanese/動詞 時態變化/index.html","977552f9ca874a32ef71c83dd4e1ddd5"],["/2022/07/19/Japanese/助詞用法整理1/index.html","c1ce0fa3ce5c2a1367e1c925385bbba7"],["/2022/07/26/Japanese/助詞用法整理2/index.html","5804d97da7e893324444768d23c0400e"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","e9804fa7fa24e2a8cd6dda94ef9261b9"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","e2e2ab9810bb20692da608a9a66ab7d1"],["/2022/07/30/Japanese/疑問詞/index.html","669c865a8c702279a8e92086bf1f2dbd"],["/2022/07/31/Japanese/助詞用法整理3/index.html","30cc6270eb98352a40fe761eb165b260"],["/2022/08/02/Japanese/副詞整理/index.html","5f65311fd0947f0b3b0d4f7dca78c345"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","648065004645deec58f4e6248f69c8c5"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","beff5fa4bdce552475baa3e969fd26e5"],["/2022/11/22/Review/組長女兒與保姆/index.html","f0d854b34703772ab0556c2f6a020904"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","15f285167b91d3f747e5f1e53e667891"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","24ca368109ce98f5b95510944ccd46da"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","c5e899e9cb955000077cf58c20ee5335"],["/404.html","7cfee46b8cd3f083b4fe384adf447c34"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","ea4fb627bfd613f093558fcd56131a89"],["/archives/2019/11/index.html","0dc934a167e50acc36fad0184d86eb2d"],["/archives/2019/12/index.html","2dcd63403e8a6919a2191c53b41598ef"],["/archives/2019/index.html","fa3eaa5419d085788368b925c96e3f5e"],["/archives/2020/01/index.html","c529361908c30e79ee28b53cd43822c8"],["/archives/2020/02/index.html","c94c1b433c86290ae54c756d25862139"],["/archives/2020/03/index.html","dd865f83ce800d15e3703c04052a61ee"],["/archives/2020/04/index.html","8e9d2fc4629146f0da32e85c9889e656"],["/archives/2020/05/index.html","cff932c21e458a22308a95762cabda1e"],["/archives/2020/07/index.html","0c1ab0e708c67265a504dc73784c085d"],["/archives/2020/08/index.html","0ea396610c6326202c14eae99cc78e4c"],["/archives/2020/09/index.html","15ba78a1d7b5ee90cc5af196b7606945"],["/archives/2020/10/index.html","35008d755361717effea759f938d61cc"],["/archives/2020/11/index.html","281b93a166cda3c83d13891285695606"],["/archives/2020/12/index.html","523924c989e19c458c96e4cd1234138f"],["/archives/2020/index.html","fd992d439e4f54656d9c3516f1f6493f"],["/archives/2020/page/2/index.html","16ca5f6807d3b36aadf93be00e88cc29"],["/archives/2020/page/3/index.html","25e20557d1983b47fc33b05684b30bf4"],["/archives/2021/04/index.html","179af39200166703579148739d71da34"],["/archives/2021/05/index.html","b4408d96beeb34e7aa9ed579052ebf9d"],["/archives/2021/06/index.html","d1ac47d21a7b982851940f847bdb64ad"],["/archives/2021/06/page/2/index.html","65068044d5e5b2a5d3e9aeb023c4c9cd"],["/archives/2021/07/index.html","d8706434cf562926fc54682b68487dd6"],["/archives/2021/07/page/2/index.html","7e40a386b19234e25ec7ad79f0e9fe34"],["/archives/2021/07/page/3/index.html","bd652f156da10a2bbe4203d6a3085081"],["/archives/2021/08/index.html","f2ed9fca4e2dc1ed1a081908fd36c29d"],["/archives/2021/09/index.html","2ec1916f5dca5f6b293949c8da0aeca0"],["/archives/2021/10/index.html","249dfee9ad163544cb5262477749807e"],["/archives/2021/11/index.html","17d17122b3910eb60dd0cec9939ef193"],["/archives/2021/12/index.html","ab775d035c61e200ea016d1819dfacbe"],["/archives/2021/index.html","1bea606e10cf29b5b8035d48286f2507"],["/archives/2021/page/2/index.html","06f757047675f89be47aed3c346bafac"],["/archives/2021/page/3/index.html","5619f3efa5c5fe9eaf4d15a3985da552"],["/archives/2021/page/4/index.html","fe86e2d701524491092badf3f1c1cde9"],["/archives/2021/page/5/index.html","dae379254d39075266fd9c228335109c"],["/archives/2021/page/6/index.html","7c938ec86b9a142ce74420ac02d25339"],["/archives/2021/page/7/index.html","5a37a37fd140b5f896108861fa4af334"],["/archives/2022/01/index.html","3136eb3da19326d28dd8014c89ae0055"],["/archives/2022/02/index.html","bd4cd9ac0c4bacfa61b10e959eed995b"],["/archives/2022/03/index.html","c4eb618930b42a3925a61c3fedace7c3"],["/archives/2022/04/index.html","c49ac60c5e593a92c5fc7db249065004"],["/archives/2022/05/index.html","f0c34aad5f037e3bc5c5eb269b0e5d44"],["/archives/2022/06/index.html","05b29ea14267956cae3ffc7f4b842535"],["/archives/2022/07/index.html","26276be47801ae400943d42ec0ea3954"],["/archives/2022/07/page/2/index.html","b291b3121ef2c2f0f83d7ef59454dab8"],["/archives/2022/08/index.html","75f8bf6052d893565e7569ffe9bafcd6"],["/archives/2022/11/index.html","2517345fc3c613917a1af5c22760786b"],["/archives/2022/12/index.html","b70f0e38c0bfffe88b1e5f1946e0f696"],["/archives/2022/index.html","9b4a32c8e584ace0fcfce3e3f9919b95"],["/archives/2022/page/2/index.html","222eb1b74c097ce1e9cd47510faf9998"],["/archives/2022/page/3/index.html","d48988cec902d1014fea105aa3c39f57"],["/archives/2022/page/4/index.html","c7d2267e27352f1a7f74ad034c698464"],["/archives/2022/page/5/index.html","28fb720f2763ace6c13ad7572f54f57d"],["/archives/index.html","2b1baf129ea847fbf3f5997365a084fb"],["/archives/page/10/index.html","e2ac0d68b83c070f789aba69b986e0f0"],["/archives/page/11/index.html","a907b438eec3613b738c0ce83aa778db"],["/archives/page/12/index.html","3bf372d470c7efe9fad3c0e17b78d057"],["/archives/page/13/index.html","df9d2d3b1d4d64154bbdd0d207467b12"],["/archives/page/14/index.html","9bcb9b5cc8b5693c550f4266aad668d4"],["/archives/page/15/index.html","ef01f09a8853e1ab620803dc369c93e8"],["/archives/page/2/index.html","046210a4a8ed349175cc644447330926"],["/archives/page/3/index.html","5fd2e7ef0741004229488daa21289153"],["/archives/page/4/index.html","bf3f27eab07667e97d1ab5fa7ff6a985"],["/archives/page/5/index.html","8492021144fe4a3ce266626753c8bfa5"],["/archives/page/6/index.html","de7bb5ae4a8d8831101cdefacc9b7c58"],["/archives/page/7/index.html","fc4795d959dab7332751667d0492482a"],["/archives/page/8/index.html","58d2c2d9dbb096bf92674b242e1c8e8f"],["/archives/page/9/index.html","ec5cb6e1611a9552fb47b6f9353487a0"],["/categories/Programming/index.html","7297407257366576aaec7302bf704698"],["/categories/Review/index.html","fc5bef21d074342eb8960cd74e30e798"],["/categories/Review/page/10/index.html","31b2c97dd334fe17b6b9c7a8b4f36362"],["/categories/Review/page/11/index.html","7f31521cc2bd5e1059dc97ba8e8a251a"],["/categories/Review/page/12/index.html","5ff4876608a010d841912b201287604f"],["/categories/Review/page/13/index.html","452211f00493581fc1416448e71b66ee"],["/categories/Review/page/2/index.html","334ccf0a1a5b1b15e27c9fd79987861c"],["/categories/Review/page/3/index.html","24e4620d967672431bc0a13ea4a0c7e4"],["/categories/Review/page/4/index.html","ccadf1348168e6fb7b50320f9be57caf"],["/categories/Review/page/5/index.html","1f965daaf5abb828bf5d11b7a9ae0c4f"],["/categories/Review/page/6/index.html","f4439623ceebe247b950a4c6a52afb08"],["/categories/Review/page/7/index.html","5357967122a829487aa7e4cd41271c6a"],["/categories/Review/page/8/index.html","13f1393e66a5d3aeda63bae784cabc30"],["/categories/Review/page/9/index.html","49414fcfdc55920eee43b08a271ab9bb"],["/categories/index.html","dadf3b1b3106f694ef455e3412df38da"],["/categories/日本語/index.html","08cb2dc77579d4802d457b71438300b8"],["/categories/日本語/page/2/index.html","36b1f622b1bb2ed7926c27935cde652c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","858497aa5f09737583cad2d985bf44e0"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c31fa68e685fdb015859ba4534b98ffa"],["/page/10/index.html","3d03be859bf0527c012c1d19d8c23777"],["/page/11/index.html","5dfed5f4d7a954824492b4bc750c4718"],["/page/12/index.html","03e2fc23d75dc67f5be70bb00b764631"],["/page/13/index.html","152f0f1759506a6db9b53b3d0fa1eedb"],["/page/14/index.html","e2d1929f02a4ed987e2093b988c740a0"],["/page/15/index.html","1b8fc62506d0ba084173f2ba1828f7c8"],["/page/2/index.html","e64af71b3a350bccf864e42ab31d6f82"],["/page/3/index.html","d6c7bb9195af139a8cea77650a720033"],["/page/4/index.html","e18c9d4d368f4b7a158d1fba111371bf"],["/page/5/index.html","0d4c6290aa2c9f3f1519a502863c6a84"],["/page/6/index.html","f65c3e956da7b79479876d1bcfc30fe6"],["/page/7/index.html","1e7a9768a845a975f9f4771c0fdc7a27"],["/page/8/index.html","1f24ffd9c8076f26b7d2f3b64cd8245f"],["/page/9/index.html","7f498a48497426ad7584db0eae5c9228"],["/sw-register.js","b5943b3eae69d231fb7525e23edc14ca"],["/tags/10分作品/index.html","78db6621c77dead701e1565a55a8c193"],["/tags/3分作品/index.html","7fb7e71bfe0949581941b65d754f0717"],["/tags/4分作品/index.html","e04d1ce61d3cecff59e904c699be4f58"],["/tags/5分作品/index.html","7a2e1693a05211964d71993a673766a4"],["/tags/6分作品/index.html","4f310bca022afa6583ba25ad495e567a"],["/tags/6分作品/page/2/index.html","a58f45efd2ee13748fc22843b360fc5c"],["/tags/6分作品/page/3/index.html","57de35a287285cc6b4fdd862dd64110a"],["/tags/7分作品/index.html","cb1c3403624a700238e71f5c6fa7e68f"],["/tags/7分作品/page/2/index.html","bfb5194766dd2c645dd992c1716fce2c"],["/tags/7分作品/page/3/index.html","76145260428a929b5bd222c036da37ba"],["/tags/7分作品/page/4/index.html","ff3a157c8265b9a401405b2904e19001"],["/tags/8分作品/index.html","72606e729c949591be6c449366e45cb3"],["/tags/8分作品/page/2/index.html","82882a9a5b1d9cbca5f73b77c789ab03"],["/tags/8分作品/page/3/index.html","02a68951a11b59cc26f7b1382e718e5b"],["/tags/8分作品/page/4/index.html","5040bf7c1f545d1c9c62ef303b10dc1a"],["/tags/8分作品/page/5/index.html","4f471b13e18d37c0a242d0c2d6b1e0df"],["/tags/9分作品/index.html","15dffad9096da7d6e99e101ad6178242"],["/tags/N5難度/index.html","93475b50f1a979727aed8180ed33d96f"],["/tags/N5難度/page/2/index.html","313105014fb5b7fef61f6e1c96d82056"],["/tags/index.html","b7faa20c9e5541b15133b5870f055e96"],["/tags/アボガド６/index.html","52b8c8fb7f4c7a4846de9764d44cbf8c"],["/tags/三秋縋/index.html","4e7cd5bebbdc8149b808860b9f2b7ce7"],["/tags/中國武俠/index.html","5df752832153490403c144538d3514fe"],["/tags/中國言情/index.html","dc833e3529ae037479b0174c34dfe1b8"],["/tags/二宮敦人/index.html","a9387e2afefa97d96ef715e262b122ed"],["/tags/人性/index.html","0f2aac6283b81e48868b79719d50e95f"],["/tags/人際/index.html","c89a63a40e812af8816d3fe3d33e6721"],["/tags/住野夜/index.html","e5097ec496c8dd6be677d44f67a6cecd"],["/tags/佐野徹夜/index.html","06bddbe6a68adf216e89150cdcde7120"],["/tags/努力/index.html","967a7bca4b24a16e527e8e2b7f659b00"],["/tags/動畫/index.html","71100ffa29444571a24fe1dc3fa3f46d"],["/tags/動畫/page/2/index.html","e74697f40e66ce5ff33fd2c1548e7bd6"],["/tags/動畫/page/3/index.html","995b53261054ec2e177d0e68a2c9fe4e"],["/tags/動畫/page/4/index.html","f568363740a119a5f106d0afc0e1ff21"],["/tags/原諒/index.html","3ce8fb0c4631cfdc4970aa4a91e2da74"],["/tags/反烏托邦/index.html","fc42803c9a0307aa28729b4ba2e47c57"],["/tags/啞鳴/index.html","8c1772a82ce8470834b3dcc1aa45a6ad"],["/tags/喜劇/index.html","6b0d068e087e5461c23ed52d857922b3"],["/tags/夢想/index.html","feedada32b577568064b2eb61757a8cf"],["/tags/天澤夏月/index.html","9ec056bd3a9b4f7c9a4b6f4e3eee2600"],["/tags/學習/index.html","61ea15d8564268d05860316620cf35bc"],["/tags/學習/page/2/index.html","11bf66ddbe26bdfd31688f405f78f8c6"],["/tags/宮崎駿/index.html","8890eded97e027d28d6ba9839a75b4c0"],["/tags/小說/index.html","5e8887203709abac1b8781d54206be34"],["/tags/小說/page/2/index.html","65614439fc4f40315eec035c63fe7980"],["/tags/小說/page/3/index.html","81d123b383b997120fdb035ffa27f495"],["/tags/小說/page/4/index.html","cf550b003eeb2c59ad0029905b529215"],["/tags/小說/page/5/index.html","8335b03f30f061c7141adf06fb70476b"],["/tags/小說/page/6/index.html","1754a68de4b2c3211a6d4f804fa4726e"],["/tags/小說/page/7/index.html","75a1948a9b37cfc03d997d505e93e5db"],["/tags/平淡生活/index.html","2144ed1583028fd469e1b281104b70b7"],["/tags/幸福/index.html","745ffab9aa6a09276e879990aa074e2f"],["/tags/志茂文彥/index.html","2db57aba6bc6f0a1d18932af686a87e1"],["/tags/愛情/index.html","8e70a7bf05f9777bba723df302181842"],["/tags/愛情/page/2/index.html","1e10ae622f9853d256f051cca6353e66"],["/tags/愛情/page/3/index.html","9ad1c4ed335c81073e3c668cd5b8e831"],["/tags/感動/index.html","c6dc2793af5ffaf8ebbd6c7d1a12aad1"],["/tags/懸疑/index.html","0d9f6771bef520aa95e8ecfb56bfb19f"],["/tags/懸疑科幻/index.html","b66e8b1d3b85fbf15a47ec8253cbd055"],["/tags/戀愛/index.html","0d2a132b2273f78a6339f78ba916d612"],["/tags/成長/index.html","ce66958ceb9aae2df769e0393ffd5e7d"],["/tags/成長/page/2/index.html","89f14bc0958e032287177e834d61d7c7"],["/tags/戰爭/index.html","0553810deb21ae7738d184d8f9f38a91"],["/tags/推理/index.html","3c73a55c0d080164abf83325b68e2043"],["/tags/搞笑/index.html","a59c6ff4dc67a7ff6ae48c5e3e1e0ba6"],["/tags/救贖/index.html","0749111f3881962c6164770a866294a6"],["/tags/斜線堂有紀/index.html","d5cc8b7781d15aa59201f0a6b9fde195"],["/tags/日常/index.html","0a63b9b96b1473e39b2637cb9886126f"],["/tags/末日/index.html","683fea4fcc7df041ca33cc25c5f3af33"],["/tags/校園/index.html","9d6e548462b22be92fe73c1f4726f4a9"],["/tags/武俠/index.html","6b36505a23a6094bc54cf8ee308c08ed"],["/tags/武俠言情/index.html","73a9dbb580c5f85080eebab463f51e0a"],["/tags/漫畫/index.html","725b58c318663ed5adebb654b8408a84"],["/tags/生命/index.html","b336f6c9a84c768951db91d42662b423"],["/tags/生命/page/2/index.html","762d5d89049ab822f7abfee733591a62"],["/tags/短篇/index.html","31d360d0d5aabe84f2c935437505ea1f"],["/tags/社會/index.html","ee02ea162358663a8522de412e7348e3"],["/tags/科幻/index.html","9486121ad0d40fc1e245aa472342ada2"],["/tags/童話/index.html","492c1222e24f948409504ccb2bbdcf3b"],["/tags/競爭/index.html","2f28bc684c060a4da057c346de549f36"],["/tags/自我/index.html","a81761584bd5fe255575015a91a33fc8"],["/tags/自我認知/index.html","d51548bff7a73cc1578779bef191b409"],["/tags/葦舟ナツ/index.html","81bfd304b3621d364e89a9e5f67b865a"],["/tags/藤萬留/index.html","8c348440c00e6b5bce239d6699384c07"],["/tags/親情/index.html","36a117bcf95166dd6db26101ebc6075b"],["/tags/雜項/index.html","81a3feec7a580cf138042b9b93886192"],["/tags/電影/index.html","b2912d68fd6d03c4a9a9b3895a196404"],["/tags/電影/page/2/index.html","fb19c917eb464297e46bc2a7bc20f80a"],["/tags/霸凌/index.html","f4c1bf3b8cdd502a1c7eba7e32009bac"],["/tags/青春/index.html","f6233fb9725809b48cd4e638fb4559f6"]];
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
