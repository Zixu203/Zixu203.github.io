/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","f8c3d69e2ccf5703d915d1892a8f44b5"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","7cc5432db7b44af57a0f3b6b4748e89a"],["/2019/12/25/Review/無法計算的青春/index.html","9f40d528dcce7fa4a209f2d3dda874b8"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","8b686f4f0caa75616ef8d5aa10b84105"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","02844d4b2747d549cd7cf627ab9308f9"],["/2020/01/19/Review/下雨天，不上學/index.html","0230f5fd01962a7f7b22bbf5720f90e2"],["/2020/01/26/Review/三日間的幸福/index.html","bb20ccd65af5bc1e4577b399c2aaf2c0"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","97cba0efe76dab7b48301322adaf100d"],["/2020/02/09/Review/青春期超感應/index.html","bde8faad5277f0697ffa2536c4d92f61"],["/2020/02/15/Review/又做了，相同的夢/index.html","772e6c993165f6512d7cd6863a832ee8"],["/2020/02/22/Review/回憶當鋪/index.html","d3082a0eb7b9ea877c97d5875d0e5f19"],["/2020/03/22/Review/不適合自殺的季節/index.html","fd0d875429da199f95d3424f74c6bbbc"],["/2020/04/26/Review/我們都無法成為大人/index.html","9dc5e5dc2a9140ddbd44ff1d1f9ff27e"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","a368386431e9d78f4fa56f62ee30b72a"],["/2020/05/17/Review/人間失格/index.html","c6f3078d16aa27cedd306e4655f7c8db"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","5eeca32d7f620506120da6bea9d87364"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","ebdb331c25c903eb1c4aea284e4172e0"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6d48687e8167af67570bae550d8c64b8"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","2be2b5046310168fa882cc3f6b2a70bb"],["/2020/08/16/Review/15歲的恐怖分子/index.html","5420f44daca9daf82153d7e4f4026b97"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","f9d66cbc2fe08c1ea6f92e3ea633e1f4"],["/2020/09/13/Review/羅生門/index.html","96cd7f850e1f00004dcae56d98ae78ad"],["/2020/09/20/Review/闇夜的怪物/index.html","44c25694d794732d77440f7f31b904b1"],["/2020/09/27/Review/14歲，明日的課表/index.html","f699436192cfa387e55d5a9e6d3f7d70"],["/2020/10/04/Review/致十年後的你/index.html","edea02278ce409ac65653c6334274b6d"],["/2020/11/08/Review/滅絕之園/index.html","0fdf36afc39bd890a9dad0e5c420482e"],["/2020/11/15/Review/將愛拒於門外/index.html","4037319a2f4143aa58a4ad8e2386900d"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","87ac77d348fbdec85839b88de3a9dc52"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","b803186e11ba8374f3e2b604ad5d6aa9"],["/2021/04/22/Review/道印/index.html","e83954be7a135ddb66a88b00a68392f6"],["/2021/05/03/Review/戀入膏肓/index.html","4efb90c0b616a504cc65fc9a2cb8c3b1"],["/2021/05/10/Review/Dice/index.html","59e12083395de6d33b8709900337504a"],["/2021/05/15/Review/魔女之旅/index.html","cfe9ba7bdc089849e1ef51e6ad9af052"],["/2021/05/28/Review/戀愛寄生蟲/index.html","6fea3104cac014a725be73cc0c53a096"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","e816f6483b01ee22e41373894e20ad5c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","6fb50fd4e1b2a03919801a4b1ef9c000"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","973e4436f9a2e60b7d5693f1549b4e28"],["/2021/06/05/Review/流浪的月/index.html","707c13d62fb0cb595ecdb5764828892a"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","30ca061860e3084fb67a40d707927c03"],["/2021/06/13/Review/第一人稱單數/index.html","0b1cc7c84e220c03859b1173d34289d9"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","0729f6645a5a7a8fbe3c7f984242a5d3"],["/2021/06/16/Review/願你幸福/index.html","61541d929c23eea475eb2554052abf65"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","39ab3dc36dceace5fdcc57e4575115df"],["/2021/06/21/Review/神隱少女/index.html","ae3c494e664a9784e22efb724f07dac1"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","8245e4d6cb64a9319af6f58eb2883305"],["/2021/06/23/Review/天空之城/index.html","0ea19b81e0ea427b16a3ea0e0bcbade8"],["/2021/06/24/Review/魔女宅急便/index.html","77dcf769a49d0789a83858c1d3c9fc97"],["/2021/06/25/Review/借物少女艾利緹/index.html","104023fb7d31a71fa605eef2a411e1d8"],["/2021/06/26/Review/魔法公主/index.html","b85ad663909969da9bcc5bbb85f0908d"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","dd156dea628021748e70fd8359418b09"],["/2021/07/04/Review/飛雪與劍/index.html","47c9949f132a585c1269f758ba624e6a"],["/2021/07/09/Review/地球防衛少年/index.html","873122f531976dd5e79447e79b91fa4c"],["/2021/07/12/Review/Angel Beats!/index.html","920c94a03b15bfec18a5e2cde0df26ff"],["/2021/07/13/Review/Clannad/index.html","b090af92f2b3506492518beb280d678d"],["/2021/07/15/Review/AIR/index.html","6783224fc9ab261c28fd5c7f68870671"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","b7cf879f0b61e1991291a7c8c9c8ef9c"],["/2021/07/15/Review/螢火之森/index.html","282f2d15edbfca8cd26c31b136bdea6a"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","32e091959c2bdcc4f800d18a3cef59ee"],["/2021/07/17/Review/奇蛋物語/index.html","992c5b733033799c8fce10a25c115a85"],["/2021/07/18/Review/Vivy/index.html","973fa861498f5522fcc8c4341bb8b66a"],["/2021/07/18/Review/請妳消失吧/index.html","21c153b3756ed502ed3dce5bd4f93231"],["/2021/07/19/Review/漣漪的夜晚/index.html","5402432aa5ca4b9c16b1b3509bb0271f"],["/2021/07/20/Review/月色真美/index.html","591b08b34834bd7f69d96b9875377567"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","2f3190c8e949160882d217b03a5fd003"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","16ac9ee8dc39d926cf612975aad2f861"],["/2021/07/22/Review/罪惡王冠/index.html","91052bbef38ef779c2eaad9f5839ecf4"],["/2021/07/23/Review/弱角友崎同學/index.html","d684d82d722091898c3e8829d2edc2e4"],["/2021/07/23/Review/惡之教程/index.html","972e81fd2703f47e5eb070efb34820c2"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","319e1e8b6cc7e5b13338e64ed8ce3219"],["/2021/07/25/Review/魔王勇者/index.html","a853fe54c012cede182f9453d00fd339"],["/2021/07/27/Review/一年A班的怪物/index.html","839fe410c3b9087956e819384baf39c0"],["/2021/07/27/Review/奇巧計程車/index.html","df9b5148c2c28353330eb96e72b1b3d5"],["/2021/07/27/Review/專情的碧池學妹/index.html","bea5f856abf5b07e48c415b36ed0d879"],["/2021/07/29/Review/只有我不存在的城市/index.html","0812d2101f9efc3f2e0f109b0cf6afdf"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","aac441fca9f6bc500dd54a24bd45f6b5"],["/2021/07/30/Review/可塑性記憶/index.html","c64d54498969c26b51a81680db1dba3c"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","2a2a24eb0d334185f4a7cd7ca2bc2410"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","64252dd50031648928038ce579f16d0d"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","7c07b52e5dcc632bc9607aceba286050"],["/2021/08/25/Review/清戀/index.html","727889322705afcbb472062c71a199ce"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","8273dc9cc2fe51e97584f4129a1fe9a2"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7cb2476accaae7e3182ec8aa706e9d4f"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","caec08df43ea7262f7d9bcd078ed0ecb"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","e405f04a79e1c49ccf829d67150a3549"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a97d140ca304b9b158f9fda9cb36a9d4"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","f38729a7189820e816d9037cc77b9320"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","034e63ef1f74286ec46ef259a387dd6b"],["/2021/10/16/Review/龍與雀斑公主/index.html","221a5dbcc0ace3e607bf53f9f2047bd8"],["/2021/10/19/Review/孤狼不想開後宮/index.html","7e41d644144a73eb3d8336a4769d965a"],["/2021/11/13/Review/徹夜之歌/index.html","a514c6ebdb879e9ec5e1f40831e9fac7"],["/2021/11/24/Review/武煉巔峰/index.html","e74325d86e889328588d9886e092e364"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e60c6f92dada815b1d7d9499c3351220"],["/2022/01/28/Review/神醫凰后/index.html","c6a60d20c1ea3af81d591017e49f7b66"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e1b275a4d22b3949792f37bc2d502497"],["/2022/02/13/Review/夏日幽靈/index.html","9035499a54d4095fda1d95166a044ad8"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","7740f8180db1b4fe5713520f7d83ae17"],["/2022/02/26/Review/賽馬娘/index.html","f2c88fc52f602c759ccd41679a38f18f"],["/2022/02/27/Review/大欺詐師/index.html","b95fdf5d6bb2d8f896dbec39cf25fa5d"],["/2022/02/28/Review/前輩有夠煩/index.html","ec5d10fbadafc2c658c71a494b7a4466"],["/2022/02/28/Review/碧藍之海/index.html","8040b1330305d6501fb348e9afdfd9ae"],["/2022/03/05/Review/落第騎士英雄譚/index.html","e716d5f7904e7a27b5d79986ca208822"],["/2022/03/06/Review/Another/index.html","6ee3e2a35e9a474ab0ec5775556fb885"],["/2022/03/06/Review/入間同學入魔了/index.html","725351009d4daff8bca4154361752eed"],["/2022/03/18/Review/再見宣言/index.html","ce52ec32d7d95e2e97783ad818ebfff6"],["/2022/03/23/Review/生若冬花的妳/index.html","bfe732fd4e2c56e790fe86e031b7ef6c"],["/2022/03/25/Review/天之弱/index.html","259c066f4f81b3db931bc37b322ea0fa"],["/2022/03/31/Review/滅了天道之後轉生/index.html","ad62a652c0e711db5ed47ba314db0178"],["/2022/04/30/Review/泡泡/index.html","d96688e743c8331a6fdc53598d703460"],["/2022/05/04/Programming/Dynamic Programming/index.html","a6b27db0758ae55c3cc73e446afc7978"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","6d9605a86b3f62f24a4058c7cc2ce060"],["/2022/06/13/Review/偵探已經，死了/index.html","3b29048495b85174f183e5879c891898"],["/2022/06/14/Review/黑色子彈/index.html","9c868c6129557f7f6e2c62cc18e8fd0f"],["/2022/06/15/Review/黑白來看守所/index.html","0ab2ebd68627fc9dfa976633fb3a43a5"],["/2022/06/16/Review/虛構推理/index.html","53cf4f8e0631030a7121e0a0013cc2dd"],["/2022/06/17/Review/戀愛與謊言/index.html","08c87f29cd1d7e8cf4962645e6da23c8"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","f5aa45f3f1208a14d2e76ddc6093a27c"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f0de7fe25b63eccaa0a0697b18e03d49"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","d35940ed57a31cf8f4a96b4fae198219"],["/2022/07/03/Review/Hello World/index.html","0cb35046b8c227d5ee5d88e8a56a5e5c"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","2fa259010c7a7dcb4abafb8f931e7f46"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","736bb6bb9bae67bc63b9399005bb5486"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","568bd4cfb88ad30c329b9652d8fa9c7a"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","f9f8dd08596d3a491ceb9a055c20f276"],["/2022/07/16/Japanese/動詞分類/index.html","d088be43a0f73ff918a11224822c0718"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","b6df6c74988024909e05e1f9225a2f34"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","98385ad691d617d9d575b3b6e34bd249"],["/2022/07/17/Japanese/音便/index.html","184da8639444c1e0529d4e528a10f9af"],["/2022/07/18/Japanese/動詞 時態變化/index.html","18e6f3053120f721aba81b94ff143041"],["/2022/07/19/Japanese/助詞用法整理1/index.html","cd3c2adee9f1755ff0e4ced4497c9874"],["/2022/07/26/Japanese/助詞用法整理2/index.html","fc0391cf66cdbd39ec941c2014a5d990"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","6a236ed2eb4e22775c617066fbb5aeb0"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","859995e5c5f9ecce8950effe5c665113"],["/2022/07/30/Japanese/疑問詞/index.html","acc720d88d56d254860304970fe903f9"],["/2022/07/31/Japanese/助詞用法整理3/index.html","bbdcceb42c0f99a15b0203171381f1ab"],["/2022/08/02/Japanese/副詞整理/index.html","9398b00c5c996eb6358c38c6f980b8f3"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","5e7091bb1f009dda225c1b23f92e877e"],["/2022/11/04/Programming/Data Structure/index.html","0c54584dc275835f05c9566642d5bd25"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","87d351751b388176141032c07abb8f56"],["/2022/11/22/Review/組長女兒與保姆/index.html","17315f0c6558525366f372c7934f5ef6"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","6fbe13dd696da86aa5f2cd993c92d380"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","a6c55868242d935b6b9a917227c8630a"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","db7d5f6325c7750d8c0f584dc0a20b64"],["/2023/01/01/Review/あの夏が飽和する/index.html","56d723ad40aea04a73375b3d3c81f37d"],["/404.html","d5f0c2e106ea96e6f66084f4c20b84ff"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b6318ced1c0e07eb1b3b04eb77e92c75"],["/archives/2019/11/index.html","aee6e729ecbb79b9326901b788d54e21"],["/archives/2019/12/index.html","a9b5807539a1236d4299e2fed1cbb2eb"],["/archives/2019/index.html","623f88a5afa6c5a2b7efea2af825533e"],["/archives/2020/01/index.html","4940162e9213eaba4c46b36fa8f9b7f0"],["/archives/2020/02/index.html","6adf8b19669e77137a55bbc1306beaf7"],["/archives/2020/03/index.html","76ae0886752c5ac0b71f92d94ff3afc0"],["/archives/2020/04/index.html","6c828c6a05b37214ce2cc9b1df15b6af"],["/archives/2020/05/index.html","3fb94bbae2e58f6628008a511729dba4"],["/archives/2020/07/index.html","6fa693a76048d62d777c7aede1d90e22"],["/archives/2020/08/index.html","23de5c42cdd1c2e1e188f1cabfed8fd3"],["/archives/2020/09/index.html","0a8d6572f1ea47a85353efe9be0ba2e2"],["/archives/2020/10/index.html","a0cb52a0a1ecb7338b23c96ed72cb0dc"],["/archives/2020/11/index.html","b9f9c0f1caec65ef9880024a5b98a40f"],["/archives/2020/12/index.html","fe171f1c69d91adf81475c7b92275423"],["/archives/2020/index.html","028f1003e1baf6f9ea88667f7a68ddea"],["/archives/2020/page/2/index.html","760a819bbbfe17a281d31b4f90ba4eeb"],["/archives/2020/page/3/index.html","5982b8690d88da63107cf106ae0439d1"],["/archives/2021/04/index.html","32b924e3262af211336ce4ddee76e667"],["/archives/2021/05/index.html","8c125cc8799b472d9510aea357e9bda6"],["/archives/2021/06/index.html","7943dfa416f13e9e40c9c81ef835e201"],["/archives/2021/06/page/2/index.html","c3f44771dd023fbb57781ebeb5339397"],["/archives/2021/07/index.html","a0a763ff46a0c58587de58b7cc7e208f"],["/archives/2021/07/page/2/index.html","1f254ad9944e225a599fb21b05403ce1"],["/archives/2021/07/page/3/index.html","4f14d959db3018c9c305a89271db58cf"],["/archives/2021/08/index.html","fd4016543bce72bab0ca233f1e685a2b"],["/archives/2021/09/index.html","535335f6e7e2f1840741989d0c259240"],["/archives/2021/10/index.html","706eb0595e9c51deb0795c0ff4e67a6b"],["/archives/2021/11/index.html","862b9b800baaccceedf4ab21ac8dbb13"],["/archives/2021/12/index.html","63c775f92b9f0b903c53cd0d9445cfe1"],["/archives/2021/index.html","618576ec6cc30febc5dccb8d9a1c7809"],["/archives/2021/page/2/index.html","e2acc2e346b2f8b0e0b3f52baa5748b7"],["/archives/2021/page/3/index.html","8093a2cf3d2717aac2db67111266daa1"],["/archives/2021/page/4/index.html","21b04aa9cfef1b471616936d22aa70b0"],["/archives/2021/page/5/index.html","cf19060ef85f4245a17a52039884f9d0"],["/archives/2021/page/6/index.html","1b46229f1ddb9d70813957055dbaeb53"],["/archives/2021/page/7/index.html","05d87380ea26b52b03f3a9602a96a10b"],["/archives/2022/01/index.html","48fbf97adbad9c8727f837dbe8f80730"],["/archives/2022/02/index.html","17ccfd7d8b084288eca4e991bec00377"],["/archives/2022/03/index.html","a504d72b47725ead6af9194db036228f"],["/archives/2022/04/index.html","7d29d647c7461caeab127afed45e7f97"],["/archives/2022/05/index.html","4156040799ad4b8202e18b4f862e0c04"],["/archives/2022/06/index.html","cc91c98751c6da8b88d190d1423a2d18"],["/archives/2022/07/index.html","bfa65e80bb6724ca6ddcaab5b94f59ca"],["/archives/2022/07/page/2/index.html","9da686b0f9f1ac90f8921caffe570e84"],["/archives/2022/08/index.html","6540bfa355eb1ed5b7b55f5dd7d162bd"],["/archives/2022/11/index.html","c079ea5f40aedcd14eb5e85e5e0a91bf"],["/archives/2022/12/index.html","83fe8a6a4006b47e7e5b9a1d91c55c76"],["/archives/2022/index.html","4c5d0a617ecbe4de6672f653e2a80bfa"],["/archives/2022/page/2/index.html","07afa5136010cb44907c4f6d99ed4fd8"],["/archives/2022/page/3/index.html","da92dd22d248f93bbd34adf7f981fa2d"],["/archives/2022/page/4/index.html","0e7aa5cb808490a1856050114e1dbac1"],["/archives/2022/page/5/index.html","570c05922967a6827f5fca6b914a82c3"],["/archives/2023/01/index.html","c541dae8c39a6d6f51b643c0941822c6"],["/archives/2023/index.html","59ad45310e6e076887b751449e405dc1"],["/archives/index.html","d63e4373ff01217be96aab6bd37cfc4e"],["/archives/page/10/index.html","f07fae7b4f264b58afb23b1a8e8fe53d"],["/archives/page/11/index.html","ea77b356fdd1deccc59bb304458c6e35"],["/archives/page/12/index.html","5aacf1e63b28f38ad1897cc6c987b797"],["/archives/page/13/index.html","8a50cacec1b02d2676ab8797766b708f"],["/archives/page/14/index.html","7e20a61d681e2af3b4d8ed6c172e3507"],["/archives/page/15/index.html","1d8c07d20d8d6947e59a6162d6809133"],["/archives/page/2/index.html","df1c8d49cdb2a04d4b89c5d11117a1a6"],["/archives/page/3/index.html","ba860c35f9d3c4ba0b29b541e99a0eee"],["/archives/page/4/index.html","6227334aa2b18bc18e28f04f99fdd0b6"],["/archives/page/5/index.html","406d4daf44d965d074d35eb74bcabea0"],["/archives/page/6/index.html","bdca18e51ea64ed756128d3d4edd88c3"],["/archives/page/7/index.html","b6a71d06599fdb128cb7fc887e28dd00"],["/archives/page/8/index.html","729bff242357942fc81de088dc6b5e81"],["/archives/page/9/index.html","2ec5f521a90f3925f0dfe43dcae80f79"],["/categories/Programming/index.html","5358e76fffe9d8237a183648bbfaf8f7"],["/categories/Review/index.html","4e04bcfd61d49cbe528f03edf5e6632d"],["/categories/Review/page/10/index.html","c7ad77f537044785dd69139b4f17fe18"],["/categories/Review/page/11/index.html","c276dc994abb91276f5593f096b51daf"],["/categories/Review/page/12/index.html","0386e1e529a8809c6aa943d45d799010"],["/categories/Review/page/13/index.html","c95c7b5991899977a7b96dda01ac558c"],["/categories/Review/page/2/index.html","0072903be0e0b19fd254f3fe3042be25"],["/categories/Review/page/3/index.html","f0a6c07e29fcf2c71f87f5ebb452dc8c"],["/categories/Review/page/4/index.html","0511eaccd229b63e00ddebbe4c473197"],["/categories/Review/page/5/index.html","77dc770746fb011d8f470afa4fddd4b9"],["/categories/Review/page/6/index.html","d92df278c733541b33cdaa3aee6a8399"],["/categories/Review/page/7/index.html","c1cf849ca612702c216c536da745f4b7"],["/categories/Review/page/8/index.html","05120bff105e7b9cc6392e4212d4ced1"],["/categories/Review/page/9/index.html","28e2a12bc27463ff89a32b1e792f1864"],["/categories/index.html","7d1b2d94e3f5efed0e2d0cd4f78d0ff4"],["/categories/日本語/index.html","ddfcd3259af03432a92ccd70bffe48d3"],["/categories/日本語/page/2/index.html","6efee572ff25554fcb8622dd64e28d01"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a5b8c9ca58864e543db8526f7164ffaa"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","610f52d96fcdc0190ab3d35abdd38b34"],["/page/10/index.html","d2bdd794d9488aa247b79c3e59905f8a"],["/page/11/index.html","cb01e26b756168cdaabef6628e7b4df3"],["/page/12/index.html","83f6554d8640825ab46618dfabfb16a4"],["/page/13/index.html","e8da6d97e6b62acd65435ef7d922a320"],["/page/14/index.html","7a324acc7277cd8504ccc44922c74a77"],["/page/15/index.html","95722f7ee26231275e0b68c56ca05b52"],["/page/2/index.html","16edde13bc3dd9abe1d4dd18e0812bb1"],["/page/3/index.html","3d52a64d380d2a5b9c59c99c38a98dff"],["/page/4/index.html","962803469b3084caa4edc3a46e7374d2"],["/page/5/index.html","ae953fb400c431f8dba13213cae15099"],["/page/6/index.html","b8da556fe5ceca12b2316c04c787b0c6"],["/page/7/index.html","a9081b14b1b297037dea29d3f5ecb680"],["/page/8/index.html","26548d9e12a1f5ae5726e5e6a9f45f5b"],["/page/9/index.html","82298699c00a46b3ab86cda1b62f341d"],["/sw-register.js","31e7c582b07f544137e786d2bc5b1a22"],["/tags/10分作品/index.html","d14c2b85a9255bbd70842ee52e42ebfc"],["/tags/3分作品/index.html","8f2a51ab468e5728eb99ab571767c8d3"],["/tags/4分作品/index.html","8a63275af6891a969ce00e5ce78c4a89"],["/tags/5分作品/index.html","cbdd868d2b47f3ee4a4d8cf733572218"],["/tags/6分作品/index.html","01edc1b6650f2cfa8ad54a8b5ad4b630"],["/tags/6分作品/page/2/index.html","9eb0d8f1993ec1cb4536916e52d03761"],["/tags/6分作品/page/3/index.html","470c9ece74a46d880f82ed60016aaa0f"],["/tags/7分作品/index.html","e302653d098ef952d505938e0e81b80f"],["/tags/7分作品/page/2/index.html","59eefe5dbdfa8012d0ef6257202e81cd"],["/tags/7分作品/page/3/index.html","774d8f5e7d4742e9ca38e66afd0682cd"],["/tags/7分作品/page/4/index.html","3a0ce79e00d5a0f9dbb6f2f2123cff3d"],["/tags/8分作品/index.html","c895fd921bbd5f6a5b0b6d29e31a333f"],["/tags/8分作品/page/2/index.html","33b30ceb0f4f2fcfbd14a415d7192e72"],["/tags/8分作品/page/3/index.html","0eff8c18f4bb050cdfd53b442afe530e"],["/tags/8分作品/page/4/index.html","6d79ef62782ffefb20e4fefeabcb002f"],["/tags/8分作品/page/5/index.html","18be6c06ddc675d021174caae787dabe"],["/tags/9分作品/index.html","18a3f0c57286b1e89225c390fb2508ad"],["/tags/N5難度/index.html","8286d849afed527c6fef47b3d0a27036"],["/tags/N5難度/page/2/index.html","62ec3f77037af031439cdb236320d62d"],["/tags/index.html","1490d36125ffe8d11b95fb0768ea3ae8"],["/tags/アボガド６/index.html","93eeb9fa4552802738d85636da5debf5"],["/tags/三秋縋/index.html","a9b0733bda724df2cfbafa3aa755ab05"],["/tags/中國武俠/index.html","1bc9d21b2a6539225179801540341a03"],["/tags/中國言情/index.html","b3f912792f3a8080328da2f2484c3535"],["/tags/二宮敦人/index.html","0c28bce36b9de50345a256534d9d3209"],["/tags/人性/index.html","daabbefb9f4e94e8e1809e3cca2ca84e"],["/tags/人際/index.html","512a92d4a6bb7d3fd95f76b14a522ab0"],["/tags/住野夜/index.html","1f85b3bfc70d0caa1be5a0bf1d9347dc"],["/tags/佐野徹夜/index.html","470be689b1a81fbfe6ca67eb2b803092"],["/tags/努力/index.html","cbf4bcf4edda667e5b454e9fcb5d6001"],["/tags/動畫/index.html","c73c0c2306cc167cc7a8bb5824f86933"],["/tags/動畫/page/2/index.html","9011b3725a83bb404104e9ed40b1cc13"],["/tags/動畫/page/3/index.html","6f506c36e400624b24b23cb7637db55a"],["/tags/動畫/page/4/index.html","aaf81d78960f42491d8bc2123920a3a0"],["/tags/原諒/index.html","adebccb24deafc14939004b39a7e30b0"],["/tags/反烏托邦/index.html","f1967687e92eaf6c410da2cbbb18d44e"],["/tags/啞鳴/index.html","1cdadff1cce4662da576fcb5edd22efc"],["/tags/喜劇/index.html","201feaac14964af75943fb82065dfe05"],["/tags/夢想/index.html","0acfbbd56f8a11e95e1196d923a6972e"],["/tags/天澤夏月/index.html","ebb034ddd66f027c24b02de08707d905"],["/tags/學習/index.html","7cb23100af53c9aa59fa1fddd2b2557c"],["/tags/學習/page/2/index.html","922a18c6adef498fda4c267bbdb5545e"],["/tags/宮崎駿/index.html","8ff92d485757d041529b6d3648ab4038"],["/tags/小說/index.html","cdfd2de3154e803ed4e4bff2f1dc42de"],["/tags/小說/page/2/index.html","192ee5ed4fba29904669f7ecefa5cabe"],["/tags/小說/page/3/index.html","1a436cb0c3d39fbfdc6afb15e954fc4a"],["/tags/小說/page/4/index.html","2444aee438b1ea0f0f56675552f7029a"],["/tags/小說/page/5/index.html","7a60ad71b8a6734db657c8a6cf5cedf3"],["/tags/小說/page/6/index.html","be655177a83141b8e19bf976ed82cea7"],["/tags/小說/page/7/index.html","153a1d5cd06cd1d895ba2d398c553c22"],["/tags/平淡生活/index.html","863ef3dbc71f0a01badc01c85a9e2227"],["/tags/幸福/index.html","26166ca410b2ba85e29d25782d2ad511"],["/tags/志茂文彥/index.html","45cfc148f570746ba9dad09f786ef7cf"],["/tags/愛情/index.html","3903145c0e6463f81c0b2d9d18b8448c"],["/tags/愛情/page/2/index.html","6eb61cfb8e6ea71f778c3f83a3aa1e37"],["/tags/愛情/page/3/index.html","538f72420737681c2a399399ac50d6dc"],["/tags/感動/index.html","d6c5f8a91b497633e07c9ad5260d5dbd"],["/tags/懸疑/index.html","f1920e4a9f30f9269e4b6cad5413a376"],["/tags/懸疑科幻/index.html","0c65797bbd1a26299209bffdcab6d1dc"],["/tags/戀愛/index.html","ab79ef9715fb6e2a6fc80066fd7b839c"],["/tags/成長/index.html","74ab15135581d7ec4f4ab5688dd032a4"],["/tags/成長/page/2/index.html","ea25e8f0426c751dc9e8e1c7982fcf9c"],["/tags/戰爭/index.html","eba2a3cd8124f786cb57e54569186763"],["/tags/推理/index.html","2ae78d19ccb9f31e65308fc944fd523e"],["/tags/搞笑/index.html","3b816fea202ba81126497f0075284c5d"],["/tags/救贖/index.html","852e6ba722a2a0eb2767defb765fdc64"],["/tags/斜線堂有紀/index.html","d3d97e3cce77afb65503bfd592fc6a61"],["/tags/日常/index.html","9a5aaceb766d4a712b154ac091c5a5fe"],["/tags/末日/index.html","87fad08b60cf3c09ed5160471aa918aa"],["/tags/校園/index.html","84273a4c8e99d89e7f4fe3a74285e5c0"],["/tags/武俠/index.html","d72be093760363a798d3f9b3a171a5d1"],["/tags/武俠言情/index.html","41b275f2dcc16e0d99c60f9a66ec633f"],["/tags/漫畫/index.html","b8c696b12da11a5d378124bfe98d5a5e"],["/tags/生命/index.html","53084d7c63e6c050ad72f01fee20640c"],["/tags/生命/page/2/index.html","98cb482582fd838c5289bf24c5169ce1"],["/tags/短篇/index.html","15d7de0bb418e1be14cf7c3c55a4f547"],["/tags/社會/index.html","6b8eea978db38dcb4fec5216e93658da"],["/tags/科幻/index.html","05aaec6ea3b423120c5a9be0775ad2e0"],["/tags/童話/index.html","23044a2043934e53b62650e3665d140e"],["/tags/競爭/index.html","85f9ae2c0b05e5ae8a1357f5928d4f1e"],["/tags/自我/index.html","c454a7b6cba0bf2e4d6481ad318497fa"],["/tags/自我認知/index.html","79f68fa84c669f3f8af92cde8515e579"],["/tags/葦舟ナツ/index.html","2af19fae0d415b4a6e614228af69d78c"],["/tags/藤萬留/index.html","f9a0df22a971dccc3b9abb1bae7523e4"],["/tags/親情/index.html","f755214ca411847abe4cdfb7d22d52b6"],["/tags/雜項/index.html","2843e275fba9d143096ae89a044ff53d"],["/tags/電影/index.html","5a4579927ca3b270f2960cadaea29b66"],["/tags/電影/page/2/index.html","bdab512327e5c4c6fe68a709a1452d39"],["/tags/霸凌/index.html","e8c85b97bfa7d6f6218f9aa5a64ced14"],["/tags/青春/index.html","dff78c2ecb0d38d633aa301cef128ac2"]];
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
