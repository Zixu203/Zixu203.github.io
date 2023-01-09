/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","f18b4f7eb89d4ec9d9447ae2d1b36793"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","3effe9f6b7e3fbebe57250d38cda5416"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","88d73e88ae3cddad578e9bf20fb22bdb"],["/2019/12/25/Review/無法計算的青春/index.html","a44b1bcab54f34ee757d4a0f43ea9a88"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6b1d92a5377918e66370e98017301c70"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","b705e4327895e0408d389ac95ef587e4"],["/2020/01/19/Review/下雨天，不上學/index.html","cc80f29b74d6aa7e38a316288b6ed7a6"],["/2020/01/26/Review/三日間的幸福/index.html","6d1a97d4aee753d66639e722b1d478bf"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","16e5bec92aff5fdc4c6b6619db46a47d"],["/2020/02/09/Review/青春期超感應/index.html","9ea94a54d486bc2c7fcd349f19f04391"],["/2020/02/15/Review/又做了，相同的夢/index.html","3eb1cd37ae0cef626155c695a8c5633a"],["/2020/02/22/Review/回憶當鋪/index.html","f1ae32578f5ec69675efeae9990cb28b"],["/2020/03/22/Review/不適合自殺的季節/index.html","84c47244ca80f4efeae476fd45695bb2"],["/2020/04/26/Review/我們都無法成為大人/index.html","3d9a033a954bfe92fb58b653548c6175"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","79f681d27a0ac335155ceed5238af957"],["/2020/05/17/Review/人間失格/index.html","660ecbab925fdb40550520fcf14579d6"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","36983130d6eecbb22c486e03476ad2ca"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","0064e1099cd079ad5d9d64e15ad6ad48"],["/2020/08/01/Review/銀河鐵道之夜/index.html","72751dc8ad1defff7286a9f7b0d63c3b"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","3a115ffb6582ab448d6ae3ae3084fff8"],["/2020/08/16/Review/15歲的恐怖分子/index.html","869b2ae982722fc728d65e9404769358"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","4a07a593028100646613852ffb3c2291"],["/2020/09/13/Review/羅生門/index.html","36c921ee8bb99dbedc5015e8ff5fa5ea"],["/2020/09/20/Review/闇夜的怪物/index.html","94ab30d72ea5acf9679487a91fbf22cc"],["/2020/09/27/Review/14歲，明日的課表/index.html","5e10a87a1583b565bbfcc4171c2453bd"],["/2020/10/04/Review/致十年後的你/index.html","7a7e856620d04a4a44c9d7a18fc58441"],["/2020/11/08/Review/滅絕之園/index.html","290d5c357c842e6aab90581b9c4ba2ef"],["/2020/11/15/Review/將愛拒於門外/index.html","10be5bfc7ef60884545795e1b5a16fa8"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","417b7a758e58a6884a85036015b589c2"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","169dcd4e5c2d3c2e290ae4c7584aa3ca"],["/2021/04/22/Review/道印/index.html","3d108ebdd71ca3f4682a3a4c66d5ccbb"],["/2021/05/03/Review/戀入膏肓/index.html","03fa7c120442f32d1095ddfd7c3767f9"],["/2021/05/10/Review/Dice/index.html","8cba174ee00d7ec0329d2bea0cdc5fde"],["/2021/05/15/Review/魔女之旅/index.html","4267a283c9b7453b34e321ecde8468c5"],["/2021/05/28/Review/戀愛寄生蟲/index.html","7456f9182e0f3224dfc351919c0bbda9"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","84363d6a189d63c04e0784563f186e92"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","351aa6cecbe8a7eb53bd9f97a63725cc"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","a190a75a6ca7aa51399595276656dc29"],["/2021/06/05/Review/流浪的月/index.html","0d682abc61be4c874b712d09a03ffc13"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","c89a551909071d4438311cc0ede51668"],["/2021/06/13/Review/第一人稱單數/index.html","831b1ad808ec49a048380dcd5e4f93b7"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","4d82ded1d821543b93cc7d3d4f3a0c7d"],["/2021/06/16/Review/願你幸福/index.html","a41b5fa26ea66d706533e3adf69dc32b"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","b47097b69ea4ea5bc899f6983969ae7d"],["/2021/06/21/Review/神隱少女/index.html","177e168b7a22ef4e045a3e7e0b34006e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","c331e564f03484e15e987f8dd049d406"],["/2021/06/23/Review/天空之城/index.html","36fbaa753f0cea9982f053b4b5bd0dc3"],["/2021/06/24/Review/魔女宅急便/index.html","7f05c04577b6a4f744c61ec80c78b3ef"],["/2021/06/25/Review/借物少女艾利緹/index.html","77769cc68974cf4d9a31bb74b4e37375"],["/2021/06/26/Review/魔法公主/index.html","94e6ba14124700a694a99243b7b37133"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","4317c6b78cf9cb5818af88394e2fd410"],["/2021/07/04/Review/飛雪與劍/index.html","b9c5535c834d6fddc53ecededc70268b"],["/2021/07/09/Review/地球防衛少年/index.html","25749ffb8eecdc209c0dafedcfeafce5"],["/2021/07/12/Review/Angel Beats!/index.html","26e9b95191e393b980fe576aab7c93f0"],["/2021/07/13/Review/Clannad/index.html","5f03d97c49ca1957ad6e12aa46d75e49"],["/2021/07/15/Review/AIR/index.html","0cec09e519597ff2460cdffa32ec3a58"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","21061a2d7c6416d12654595b6e529742"],["/2021/07/15/Review/螢火之森/index.html","a51ded3cbe90d5918ea51da0702c937e"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","4e4b35eb778738586d7f3ee3ef325f48"],["/2021/07/17/Review/奇蛋物語/index.html","de5a25698afe80f5559e6d7d2bcb974a"],["/2021/07/18/Review/Vivy/index.html","b6a5b2376d46a32bed65b2174d7f41b0"],["/2021/07/18/Review/請妳消失吧/index.html","56225406655e67bc2c33eb949e2098d8"],["/2021/07/19/Review/漣漪的夜晚/index.html","8c1a64d7fd752f65c35b117d1f5be9dd"],["/2021/07/20/Review/月色真美/index.html","26f73a5d97e8a8de91562f344a3ba70a"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","66e122fa32c0844298b0171e55b119a2"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","3d0c298763996a9d403ae9fd3f159d3e"],["/2021/07/22/Review/罪惡王冠/index.html","fa450277ba7f7b325585bd36f656a9a0"],["/2021/07/23/Review/弱角友崎同學/index.html","debd78bb889c0f275e2f1466615f8cfa"],["/2021/07/23/Review/惡之教程/index.html","41f014e8b4a88f511ce387cd2e3e76bf"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","b538192b88c06916b21b7e0f0fdd349c"],["/2021/07/25/Review/魔王勇者/index.html","164eb4af91ee67e3803f4f1f88d43579"],["/2021/07/27/Review/一年A班的怪物/index.html","2b845518352ce0866ff6df92c4b0fac6"],["/2021/07/27/Review/奇巧計程車/index.html","b727e682c2fd555530f2d1d8cfab9745"],["/2021/07/27/Review/專情的碧池學妹/index.html","2581b6f850b316a2c9c7309f3e52011f"],["/2021/07/29/Review/只有我不存在的城市/index.html","14aeea0a8ef7158e58b0d5d28efb769e"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","721a1655356c989043faad10835a26ad"],["/2021/07/30/Review/可塑性記憶/index.html","7ab20506ca7219f19cf00e8f4f98f520"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","b7067b7f29a2ef5288f631b83ee5aa8d"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","9db5c8d079d89464ff96c0072f3855ea"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","a0cdde1e86155e84ba2d01d70d937fa6"],["/2021/08/25/Review/清戀/index.html","e2a26796d2a8a437d7af121fb42740af"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","b97892acff78bb1712c66d93cc157a05"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","87ecb413b1865ad77c11187ab4ecb987"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","e7a00d00919d6393bffbbedd60d56cde"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","c9bdd6e74dafe11fcf0f48d1a4e30544"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","e5e5be1b48393f812793e31183c27d02"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","470fee43487a832daee3e63923ea8c08"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","8a0ac0d36bccb5ac6b0c77e3365c861f"],["/2021/10/16/Review/龍與雀斑公主/index.html","335e3bd7807827e79e5ee5ccedeed88a"],["/2021/10/19/Review/孤狼不想開後宮/index.html","91e86a1c39e71e48d801c11171c79dba"],["/2021/11/13/Review/徹夜之歌/index.html","8ecaca6c2cc220386a28d45c2ac781f1"],["/2021/11/24/Review/武煉巔峰/index.html","748b5192e071035d751c00b1eeed777d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","9c534bf011b780f0b3cf12f918750803"],["/2022/01/28/Review/神醫凰后/index.html","4b2207c4acac7dcd6fd9004377343dd4"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","968182ef6fb38eda0cebde0d8e94cbb3"],["/2022/02/13/Review/夏日幽靈/index.html","f602692bf3c390a5a857d0b4b199b125"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","24db5d6e426d1a70cb762cb267cdee1e"],["/2022/02/26/Review/賽馬娘/index.html","2fe886ef817c657e0df75e58ca918c8a"],["/2022/02/27/Review/大欺詐師/index.html","f45bf7d0d260e4dd1ae3a6b7532091c2"],["/2022/02/28/Review/前輩有夠煩/index.html","e81bf8cde7bb0f09e7fa811ba225d9d9"],["/2022/02/28/Review/碧藍之海/index.html","b17b80e204723b15407e1da4cf3d68f7"],["/2022/03/05/Review/落第騎士英雄譚/index.html","31a026dc899465224aee67357ca616f5"],["/2022/03/06/Review/Another/index.html","bf1a0cf195ec3abb80c51976a94148b3"],["/2022/03/06/Review/入間同學入魔了/index.html","9bb058a548cdd1a621ccbd33a4eba579"],["/2022/03/18/Review/再見宣言/index.html","00a04d4575cad3de9f68d040036fc375"],["/2022/03/23/Review/生若冬花的妳/index.html","4f1f08ade95b84b293bda6796f207e69"],["/2022/03/25/Review/天之弱/index.html","55758c2e1d2eb410c2c8c0aef7e84831"],["/2022/03/31/Review/滅了天道之後轉生/index.html","e4fb75649510a537c0e89a24a377abd5"],["/2022/04/30/Review/泡泡/index.html","9b19842dad7c11532bc2652dbbccf6d2"],["/2022/05/04/Programming/Dynamic Programming/index.html","ca0f7ea7e40fdf96311b4be726f551f6"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","1e9a2b9f9bf4366fb66047d2503f7247"],["/2022/06/13/Review/偵探已經，死了/index.html","ed26bc60730ead0248e95bcb1cf4f347"],["/2022/06/14/Review/黑色子彈/index.html","bfe98dd69af20d15a5bb4fbd656b48e3"],["/2022/06/15/Review/黑白來看守所/index.html","b71116b5594507c7dfd99d173a756a96"],["/2022/06/16/Review/虛構推理/index.html","07acc0e209a40c31381c5a87c9833f27"],["/2022/06/17/Review/戀愛與謊言/index.html","31dfbc8247fcfa4b85d852b1cb07a9bd"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","077272c4f918ba9cf32394b4016617ca"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","8d83a942e18f5e1fd81925db46e2c2c6"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2759dbec0da64a32109aff92365c5005"],["/2022/07/03/Review/Hello World/index.html","30c2c298f514b520d93b04426fec2071"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1c9210a894651bc5bc8acd3fb2205d02"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","6be45b25066fd37daf52fba420bb6ad1"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","e901bc4f78702b21293434a5ab1e2209"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","1b58898f8621a55d949a076e10eea658"],["/2022/07/16/Japanese/動詞分類/index.html","84d4393994d2ed29b3827f7dd3ec988f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","9ac885ac39eff201bad90552f570b4c9"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","5c8bfefdf0075ea0622a92f5dc881090"],["/2022/07/17/Japanese/音便/index.html","f53d2fee5805a228e80f98dbf5c8e3eb"],["/2022/07/18/Japanese/動詞 時態變化/index.html","4a7c0614b274b11e1abf05fcf6cd55f8"],["/2022/07/19/Japanese/助詞用法整理1/index.html","171fcf299d365c43ddcd61e30b2b88e3"],["/2022/07/26/Japanese/助詞用法整理2/index.html","cb8b283b0c7b2b8c9b68aad1a8716306"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","86408666227d172b6ece1fa955cafe8c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","6ab047b5e6765bd61f984b30498cda8e"],["/2022/07/30/Japanese/疑問詞/index.html","7bcba50fb1b5362a18c6e16ec3dd7662"],["/2022/07/31/Japanese/助詞用法整理3/index.html","f5ee27ffa391cd62efa24328c77faca3"],["/2022/08/02/Japanese/副詞整理/index.html","c8740cdc66b30eac214666cdae3a4179"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","be384ed5eec1da28b17381ce152c0c24"],["/2022/11/04/Programming/Data Structure/index.html","b4f1cb46e84c03ae4570ff812f089b72"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","0ee30359e583c3a4a3a813d2c8a642ae"],["/2022/11/22/Review/組長女兒與保姆/index.html","c13759cd88a8f472b15ff4daacfc99ef"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","c7c1a098441cffd2c414bf6a86c27e1d"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","1b197467facd9c40eaf05b5427d16119"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","16eec89ebc4f9461c74001a166177668"],["/2022/12/31/Lyrics/一番の宝物/index.html","b6e569fb71dfccb62e332fee6c62c3f1"],["/2023/01/01/Review/あの夏が飽和する/index.html","cbc65eb7cd0b38a7211b61b281410705"],["/2023/01/02/Review/孤獨搖滾/index.html","9e5114fa8680ec84a9f277d39db20ab3"],["/2023/01/03/Review/來自深淵/index.html","e9a4162fde454035d260351272ada587"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","b6d2b120f80f3ba96c5ce867f98776de"],["/2023/01/05/Review/處刑少女的生存之道/index.html","d30746616f34ae966229e373e3945692"],["/404.html","7793d121ddde1343f6ab2991a17ad827"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b3a37f5692c307ad476d1c40f2519f81"],["/archives/2019/07/index.html","9fb6d90f63d91e747ee443474ad30b46"],["/archives/2019/11/index.html","c24696d9ee613c93a276ca91a2c720b3"],["/archives/2019/12/index.html","2b856f34509d150fc4d2fd1f4f24d1f1"],["/archives/2019/index.html","2ce7e5f40646652fa017a50a4074fd8c"],["/archives/2020/01/index.html","f5dde1b4eb2caae9ab2c3823aa9621c6"],["/archives/2020/02/index.html","46d73437b62e917efc69a804e12c4a56"],["/archives/2020/03/index.html","dccf6c1033019fc79c535ecd588650b2"],["/archives/2020/04/index.html","f9d821de963385b16f84a5b25929e2b2"],["/archives/2020/05/index.html","da6aef2e2aebcb71b4856fc4fb61e9b1"],["/archives/2020/07/index.html","997ad536a35b4f494d3ebabc32a8bfc0"],["/archives/2020/08/index.html","b400ad3a6d92eb9cb030046582df6b48"],["/archives/2020/09/index.html","4330d15fe0d06b741759b737b80ab301"],["/archives/2020/10/index.html","b4518f78c10741d4e848f99374efd0a5"],["/archives/2020/11/index.html","c8eeff35e440fc568cadf6fc3da26ada"],["/archives/2020/12/index.html","f6b9936f1e21be45b573e1e6fb57576c"],["/archives/2020/index.html","0479433ceecd53cdcbcf4ad32cb52518"],["/archives/2020/page/2/index.html","e5aa874ec2a2a1212a89fc895213a1c5"],["/archives/2020/page/3/index.html","2768eed9cce32412f780bf177f65a395"],["/archives/2021/04/index.html","447b4eeed405647eaf2e658746bb3147"],["/archives/2021/05/index.html","89c312938f5eb3bda0e5cfff33cb43d4"],["/archives/2021/06/index.html","56e65c3ca4bd71127ba5fc1173272f35"],["/archives/2021/06/page/2/index.html","71b5569a4dd7fe451d58c1f7441b2483"],["/archives/2021/07/index.html","c73240a2bdff9e473d90d64f44f230fe"],["/archives/2021/07/page/2/index.html","ef4988ed2a4b920d72db0095db1acc72"],["/archives/2021/07/page/3/index.html","a11f50401bb817ceca49f887fec4aa8d"],["/archives/2021/08/index.html","34bd7cce9f219c7fcbc8c239df524585"],["/archives/2021/09/index.html","cc85aab436ec5165e37c85ae877b2fdd"],["/archives/2021/10/index.html","3b921d8044688094c6a186d2f7d5325c"],["/archives/2021/11/index.html","ebfdc594f0d50bf0df49dc4b273e3f3a"],["/archives/2021/12/index.html","15722bacc23e83c9aacfcc4d27b846bc"],["/archives/2021/index.html","4da310217784218f2cebe92772d5d0be"],["/archives/2021/page/2/index.html","597e5c7c6fb490d6cf47aae4ab54782e"],["/archives/2021/page/3/index.html","64d3db7a4736167a92f5a6d118befd10"],["/archives/2021/page/4/index.html","c6c3a67868a51e52dbacd802f296a811"],["/archives/2021/page/5/index.html","fe02f8aca9725084b2387e45d07fc7a6"],["/archives/2021/page/6/index.html","e0c2fea445015840d2d852dcd796bcf3"],["/archives/2021/page/7/index.html","d7c2343e0d898a243405fd733ac7f135"],["/archives/2022/01/index.html","fba54ac8fc4ce51562e463ef647a5a2f"],["/archives/2022/02/index.html","f30b746650ddff985d4ed0c11154ae42"],["/archives/2022/03/index.html","7889c8db5e19f22fd43cd76a128494bc"],["/archives/2022/04/index.html","707cb317d7ab98f43f5a66641f172ee3"],["/archives/2022/05/index.html","b51a8af7cdc5eb7e6481c2d080f587e5"],["/archives/2022/06/index.html","7c6a934f2020d112643dbba9018e5b4f"],["/archives/2022/07/index.html","631e8d590f1b994aa2cf960610039022"],["/archives/2022/07/page/2/index.html","cc26290891d88c065ab7ab368d037831"],["/archives/2022/08/index.html","5549b1c749cbde8e654906315f7b845b"],["/archives/2022/11/index.html","6e4580ff69314f06c875004087d5c7fb"],["/archives/2022/12/index.html","d0e5b4eff229f0d29be608674bd0fec7"],["/archives/2022/index.html","adca25a621f0547c3a8d7e763b81bc4d"],["/archives/2022/page/2/index.html","3a6cae2808d4e579d4d06ad6ed4043ad"],["/archives/2022/page/3/index.html","ec140dd26b62b90b2aea4881f2ff7c2b"],["/archives/2022/page/4/index.html","2920b90c1be683bca5bb61755ec303f2"],["/archives/2022/page/5/index.html","b2e0eb6406a37eced9280a51efbc20f7"],["/archives/2022/page/6/index.html","152f6c29df97928c40c7ed2c537a72e1"],["/archives/2023/01/index.html","caf6659c5a5cfc9b61a608184d029633"],["/archives/2023/index.html","8d6a9290bf837a9aa0b3f695b7785dc2"],["/archives/index.html","c7a00ffcc2602fe5456f547dd5c2ba77"],["/archives/page/10/index.html","1c5d9acc1c95199552eb0001da221a12"],["/archives/page/11/index.html","1174ac8d4bcba959c51bcd7315f3ffbb"],["/archives/page/12/index.html","21b2bb0be1d036e7a42094249826328a"],["/archives/page/13/index.html","80212ee40118ad289ee98ea3cc4a7ae6"],["/archives/page/14/index.html","6a7dc0d56331997286b9c30b08c66208"],["/archives/page/15/index.html","4c3d18fd938121092c2f5c1ba942d672"],["/archives/page/2/index.html","f76a97b15fba3c814c3ff1d23ec19dbc"],["/archives/page/3/index.html","be48987e43652569a8729d354f665b96"],["/archives/page/4/index.html","4fa5aba25630aa84a705ae5da6ed3e83"],["/archives/page/5/index.html","c8c4e62915b9827c805bb65cf9f02f85"],["/archives/page/6/index.html","8855979afa4535ff3f428efe6f87c2ba"],["/archives/page/7/index.html","b2a16d50b9c2ef7be59950b1f82f3c97"],["/archives/page/8/index.html","c1106f5073b479313a57a25c29591fc4"],["/archives/page/9/index.html","d21e699ffbd07efe4a1c4a412ad46631"],["/categories/Lyrics/index.html","8ec471d0af4ba384f75d004fcb1e554a"],["/categories/Programming/index.html","73aff592bb37f3b8dc425e2fb2f8b30a"],["/categories/Review/index.html","e55926af6e375889e2cf561a931f3ad9"],["/categories/Review/page/10/index.html","c895117fbfa0813f2f95e150fb850b14"],["/categories/Review/page/11/index.html","676f0a8ff28445ab301977010b877c35"],["/categories/Review/page/12/index.html","727796f52d5b13d86a3456df8a6a03c0"],["/categories/Review/page/13/index.html","62304c61567185461a3573b97a1daf5a"],["/categories/Review/page/2/index.html","23b3d84b6c08ab75d4a71a79ff67618b"],["/categories/Review/page/3/index.html","899f4ada0b6fc0d9bfeaa27cee972933"],["/categories/Review/page/4/index.html","3f02f38e1293923bc65f864781cc4046"],["/categories/Review/page/5/index.html","cf7c24eb031786f0da4d4dfd210c91df"],["/categories/Review/page/6/index.html","7071c531dcc6b50f526c3f6d9f34675b"],["/categories/Review/page/7/index.html","323ab52c8b711118e26147b320f930d8"],["/categories/Review/page/8/index.html","0a3b2630cefdd392e29da5a2e6c0a228"],["/categories/Review/page/9/index.html","4a1107c69714edb40e6ed4434749bd2a"],["/categories/index.html","799da13001ed2eeeb177ef12a1441168"],["/categories/日本語/index.html","2278436a6309d3332114e860434f77bb"],["/categories/日本語/page/2/index.html","8cc44f3a89c30c15ab4fd6d6c4c0ed9b"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","be9d929653a16b23faf45a81d3c23a27"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","06b41c444456ea3b5f139fcec4d2349d"],["/page/10/index.html","822a339104c1949bfbe710751f36f3b4"],["/page/11/index.html","14012c5618c69e9d45e902d525d2d962"],["/page/12/index.html","54f4e1f1b0d11457656ffc8f9099c8f4"],["/page/13/index.html","05fa38d9c2e827ac872341449be33b46"],["/page/14/index.html","b61fc677bd39ba277d25f8053cd004e5"],["/page/15/index.html","893bfb97927ec166d2af6c1e7fcda28b"],["/page/2/index.html","0a7be1290141b381bbee67372443c29d"],["/page/3/index.html","8ea747c7efe726a6f88eb09bd2636488"],["/page/4/index.html","12838e576fd39cc6582f0caefdec4788"],["/page/5/index.html","c8a4cd2e2921070ca9be35fe1c34da94"],["/page/6/index.html","36562246f0ed887902817adf84768416"],["/page/7/index.html","0a21284a003c6e8a6790f50156538357"],["/page/8/index.html","43ea5c5f5b93bba7bb40666ad4bfd76f"],["/page/9/index.html","49883a0c19e8017b3fcb0bc686433278"],["/sw-register.js","d64f4fa2af3afb1e0db02aa47e174724"],["/tags/10分作品/index.html","7a2b44ddf7ccf749878705bdef07196b"],["/tags/3分作品/index.html","459ed8f13a82401c097c3f73e974f3d0"],["/tags/4分作品/index.html","a314a595585f360e9689c6791010b980"],["/tags/5分作品/index.html","c4856f7eeb09ef1767001ebc90a6862b"],["/tags/6分作品/index.html","f0c87184c1007c444808a7c52a614055"],["/tags/6分作品/page/2/index.html","24d53e01c6e84096eedb2413dd7ed7d9"],["/tags/6分作品/page/3/index.html","1e074acbad33608d677a96ddeafb7f99"],["/tags/7分作品/index.html","eb587b89c5118fe768e1b2d5fe089fdf"],["/tags/7分作品/page/2/index.html","03674eefb0a8112ec5780a6f65758dbb"],["/tags/7分作品/page/3/index.html","ce28ef4bdeec65b4026401e6b81520a3"],["/tags/7分作品/page/4/index.html","c7e1300e549868bc0ece3ea9e455a79e"],["/tags/8分作品/index.html","a49ced238070720585a5531b41a2dc10"],["/tags/8分作品/page/2/index.html","10c6f8e1faf6d16793371afa6f62feaf"],["/tags/8分作品/page/3/index.html","4d3f1ed56c0168af205458ada5eb39fb"],["/tags/8分作品/page/4/index.html","f76fcfa9ace566372cd9d894c72ac92a"],["/tags/8分作品/page/5/index.html","448415171b16fb6c4159c154316dfb98"],["/tags/9分作品/index.html","5f59a0d85ef63c60439a9129bfae1c6d"],["/tags/Lyrics/index.html","0a0995a4c53b128a333e483aa1a5089b"],["/tags/N5難度/index.html","f9646408ab2ab78ea9d42f797a1cd140"],["/tags/N5難度/page/2/index.html","c54c4093a34a88c95823cc44b0abc80e"],["/tags/index.html","f39663fa39bd6f11069df61926985cba"],["/tags/アボガド６/index.html","7eef0ee445a767a56b23bbcc754c9e31"],["/tags/三秋縋/index.html","907fef19c37de0103bded85802db0cf1"],["/tags/中國武俠/index.html","99ef92236dba7bebd94f9c2332223628"],["/tags/中國言情/index.html","0ce65c8e590062f8d1da0e14610442cf"],["/tags/二宮敦人/index.html","87c0a9af9968e9b6ed965b5abf5bd985"],["/tags/人性/index.html","43765d88bf117dbb9fd563f0ac73044c"],["/tags/人際/index.html","8b584b331807b200d7e714f788e17298"],["/tags/住野夜/index.html","4761f6130b050faf4d64b39197e37642"],["/tags/佐野徹夜/index.html","a5c73f319900774cb273145fa618afc5"],["/tags/努力/index.html","e38b6a30c0e67979a054be87abb64265"],["/tags/動畫/index.html","667adcb6e0e75fb09d622c7564c87385"],["/tags/動畫/page/2/index.html","1c11da94631b99d2ea5696c4f6bcba7d"],["/tags/動畫/page/3/index.html","a1a328338927f60f7e61f5946874de4f"],["/tags/動畫/page/4/index.html","0c8a7554cf1cbe11605b459eb9dee0f1"],["/tags/原諒/index.html","f6cba645304e5a9f2627a2063b75f201"],["/tags/反烏托邦/index.html","67f20d9eef2fb9d7e6737e8b7c16fa4c"],["/tags/啞鳴/index.html","212d8fd1d90d9910af769df53311664c"],["/tags/喜劇/index.html","2ce8b91baff5bf834e32ff3a3bcb95b4"],["/tags/夢想/index.html","e7f463903025919465789e9d1cc8ec36"],["/tags/天澤夏月/index.html","e8870f28cf6d57101176fd8a9f9a4a1d"],["/tags/奇幻/index.html","33e38d95818587453dd7741416d6b4de"],["/tags/學習/index.html","5777e13ca3a4b4d8e5ac52dc5fdbc299"],["/tags/學習/page/2/index.html","8f28bc889690ff357ed2427df1ebef9c"],["/tags/宮崎駿/index.html","e8373659081c4b61ac5074d60c703f52"],["/tags/小說/index.html","760e590c29b02c2d07afc9b4fa0ed2ce"],["/tags/小說/page/2/index.html","4a53503bbfc7c67dab6000815dd6357b"],["/tags/小說/page/3/index.html","fa40cf1f7837f6a4096dd0a39ede1890"],["/tags/小說/page/4/index.html","0b91d38fced0cf02d199f28ec4dbae21"],["/tags/小說/page/5/index.html","04c66430b2c58cab3f2178e37b691814"],["/tags/小說/page/6/index.html","352dbf582de44d3bba5af0f4cae9f26f"],["/tags/小說/page/7/index.html","f340b354b79f9b6749c07bf3753add48"],["/tags/平淡生活/index.html","3749f776bc2be7e9d1db3bfa5eea9ce0"],["/tags/幸福/index.html","860cb7adb14f50a84dafe8c67611a035"],["/tags/志茂文彥/index.html","8ae9e29c89bdd85b961217e0aa9b2231"],["/tags/愛情/index.html","c2a327eb95dde694d029804b88f2005a"],["/tags/愛情/page/2/index.html","f3c71947776b11645ef03aac2821ee99"],["/tags/愛情/page/3/index.html","c6f9e7736b7034167adba73d6849ef4f"],["/tags/感動/index.html","f280241fdf8f458e9612889c97997fa8"],["/tags/懸疑/index.html","64d77489669a5bfb3317bf750297d996"],["/tags/懸疑科幻/index.html","5dcdee486bb7fc31f0daa3ae733559c6"],["/tags/戀愛/index.html","b5a30d227a3613f8c1b47734e03f78b9"],["/tags/成長/index.html","850b39d087692d67d81d2fef7d02bfe2"],["/tags/成長/page/2/index.html","b03355a7ab801e2d83d6a19fbaac42eb"],["/tags/戰爭/index.html","f6d7379fd1edc9abd2a9365ae3b73f52"],["/tags/推理/index.html","12263ce67725d2073fc9e6b5455b8f2f"],["/tags/搞笑/index.html","89c24b1841cfd3b23dea3168d227ada8"],["/tags/救贖/index.html","43e72db3e1d16ddfc91f6750dd7dd7b2"],["/tags/斜線堂有紀/index.html","072c7dea7d4608fbba5995b8d30487f1"],["/tags/日常/index.html","e9a0ec79d9c3a334bcbcd13f80140fce"],["/tags/末日/index.html","bfd4ef126092e53938d1e79adee40661"],["/tags/校園/index.html","1d0f4a33543b14c020841bd1108ab7aa"],["/tags/武俠/index.html","b447e778bb8809103af016a5afbc73e4"],["/tags/武俠言情/index.html","a24a0f5eb9088b52f7089591317365cf"],["/tags/漫畫/index.html","bbaac26a91d0df8012bc589bfe6f33e5"],["/tags/生命/index.html","c0b14bee3abd19c9b34dabc19f9e4c84"],["/tags/生命/page/2/index.html","eb0490210f900c005803458e3a8837ad"],["/tags/短篇/index.html","3b80c14d2cd53caffb5239ef22ed75f0"],["/tags/社會/index.html","868722d071f69629019a9cb0a8c3403f"],["/tags/科幻/index.html","0550557557deda15f6a9b98498554a5c"],["/tags/童話/index.html","9376a1fb42325e49b18e840a76e1dd85"],["/tags/競爭/index.html","9dee615d14c90b7c56ddee235ba6954b"],["/tags/自我/index.html","e8d8d5525f461e94d81dddadca2d98ee"],["/tags/自我認知/index.html","6e9fd79120e59a2acdcf470052eddbcf"],["/tags/葦舟ナツ/index.html","3ebacdf9e3fbdcbe1f713623bc7608fc"],["/tags/藤萬留/index.html","368a46c077ed5793d6434727fd1d585a"],["/tags/親情/index.html","5c47cca3f750be8397ee4f242d3877ad"],["/tags/言/index.html","eaa4006ae97de8173865ed48e6efda07"],["/tags/雜項/index.html","1b5f45380e396718de129450c0a0f9b2"],["/tags/電影/index.html","594807a597411b3c7a8ada7feb2aa273"],["/tags/電影/page/2/index.html","90c7c73cba819c465ef2d7fed756a45d"],["/tags/霸凌/index.html","3ac3f005c03747858f2ed365a6a16674"],["/tags/青春/index.html","49a57b489f07314bc119fa7b2e60e6ef"]];
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
