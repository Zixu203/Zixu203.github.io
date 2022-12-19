/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","ae1d4cbf1408bbcf119b0374f84609d1"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","6cadfea4230d39d7b8199343c7859351"],["/2019/12/25/Review/無法計算的青春/index.html","fc18fde71a30a18c5812168419e0ac1b"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","0bf6315e7399eaac7c98e7f3d0fcefa3"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","38d3055718ebe43bcf769e1ef5b4f691"],["/2020/01/19/Review/下雨天，不上學/index.html","50c82004c1c9cf90efaa09cf2f6916b5"],["/2020/01/26/Review/三日間的幸福/index.html","e3b712abe3efbdd7ff05af024e70f59f"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","dac27c67c0d72ab4a7a0939bf48a2b50"],["/2020/02/09/Review/青春期超感應/index.html","902616db77c775d3e6ff2a07abfd010a"],["/2020/02/15/Review/又做了，相同的夢/index.html","98f1b025cff551f4922ad3030cd54b5d"],["/2020/02/22/Review/回憶當鋪/index.html","faa44dedf6a53d45926fae906be3d125"],["/2020/03/22/Review/不適合自殺的季節/index.html","40eaeb0581a46e87a4db630d0d9516f6"],["/2020/04/26/Review/我們都無法成為大人/index.html","2c6ef5a2b76160cbafeb4d9642a0e70c"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","cccafd603e3cf3ec534ad1d474ed034e"],["/2020/05/17/Review/人間失格/index.html","66ed6a4cea12d49245a472ff9020b51f"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","d2f790795d1bcd5f1ecb85ab70c679b5"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","f0bb30812ae2e673f1f62ed28fe57f4c"],["/2020/08/01/Review/銀河鐵道之夜/index.html","b61871732ae19abd98f339ebb470f6f6"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","45be883db6574ba32ebcd93fc6b77c45"],["/2020/08/16/Review/15歲的恐怖分子/index.html","7a0beca9d839442d05259c4b81a7ff1e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b4d5b6def5598006a8b4b1a56dcf51eb"],["/2020/09/13/Review/羅生門/index.html","f8465487475ce51ae26e8a90db0b9a63"],["/2020/09/20/Review/闇夜的怪物/index.html","bf601ace04fa426869d856d788419eb7"],["/2020/09/27/Review/14歲，明日的課表/index.html","be1761a5e3670db752a633bf9b49933b"],["/2020/10/04/Review/致十年後的你/index.html","0476ec974df6042f256c2e9f0896528f"],["/2020/11/08/Review/滅絕之園/index.html","e12d6005b71396126c8446b528b88ae9"],["/2020/11/15/Review/將愛拒於門外/index.html","664d1116e67305ccb826f9e1bd6484ac"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","bce44ccfbf764d38308a4cfa772ad1f7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","7a57b9d44ed6623a587fc32c33722619"],["/2021/04/22/Review/道印/index.html","697e000758e5f82787cbfe9550eb09ce"],["/2021/05/03/Review/戀入膏肓/index.html","e76c094b69c7f58335e988014ad12a67"],["/2021/05/10/Review/Dice/index.html","6203c2dfe444bc0049cc51ba3f0e97de"],["/2021/05/15/Review/魔女之旅/index.html","71199b6625c00d0c4cf818314ac5431b"],["/2021/05/28/Review/戀愛寄生蟲/index.html","21a907105c46e767df706b8819c20438"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","04e4e88ff6945d81e3752e7f0d136068"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","61666284b93abadd3b2e767fd3daeb85"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","708df2f216960891ee0b5874631d677e"],["/2021/06/05/Review/流浪的月/index.html","b1de430679c939028fa64b6b281efecd"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","b19f51d88f1770bc2dfce8bec38c354a"],["/2021/06/13/Review/第一人稱單數/index.html","5004a7e04482c027f2ef9f6104786e9d"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","632fe1be45706f8d9c70fad145865c6c"],["/2021/06/16/Review/願你幸福/index.html","5f24a57a5f2d8d3590cc99c6a3439522"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","eb2fe02fdf5e5a3f36cbe732438a4560"],["/2021/06/21/Review/神隱少女/index.html","b6d51af8c966706ea9bbb49504d68c76"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","e4f77d6bbcd0766475b100cd8c3e05bf"],["/2021/06/23/Review/天空之城/index.html","68a0f05cc74a99773bd454f4c60a9c25"],["/2021/06/24/Review/魔女宅急便/index.html","d79546ea3ab7df3a3f79aafc81d53698"],["/2021/06/25/Review/借物少女艾利緹/index.html","7442b6b0f83d80073190d1e1a26bcc7e"],["/2021/06/26/Review/魔法公主/index.html","400a4ce8bf08ddedf9db6e17f2678931"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","a2d9f43b6c8627cef22ed092f1318a18"],["/2021/07/04/Review/飛雪與劍/index.html","8bc57bd869c9855cca5380fff5533845"],["/2021/07/09/Review/地球防衛少年/index.html","dffcc79961c530ed2ca9ab19ab57cf7b"],["/2021/07/12/Review/Angel Beats!/index.html","7ec8f8bc2a120668b8d1e5a901ffa240"],["/2021/07/13/Review/Clannad/index.html","7388f1eef7a72fa0f4e2152d85498ce1"],["/2021/07/15/Review/AIR/index.html","d5aa666fc3ed6966deb0bb7cc88bf9b9"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","e0c1d7e5435a07af3e6d104120f9e1ae"],["/2021/07/15/Review/螢火之森/index.html","e43592e84707c91ab2f750859dde68ad"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","b2fe23826182a6c114a8b5e9ac27d0b1"],["/2021/07/17/Review/奇蛋物語/index.html","b6e02eb451bb092fcf7604f5dcddb8a2"],["/2021/07/18/Review/Vivy/index.html","e127f606f4abe02d6d00f5c0ea22379d"],["/2021/07/18/Review/請妳消失吧/index.html","4595a6eecaa8c89fdb5d200faa9ba200"],["/2021/07/19/Review/漣漪的夜晚/index.html","60183285841d6d35d2e9247008d2991e"],["/2021/07/20/Review/月色真美/index.html","2575675a45343d2e924648602f9c183c"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","ce416b6e5b38386b8f2ad606fcd82dc3"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","b8819987334ce156c794e71b16d32d7a"],["/2021/07/22/Review/罪惡王冠/index.html","ea21a77dbf9520ece1d0f6668766bb6a"],["/2021/07/23/Review/弱角友崎同學/index.html","97f54a98f7dd1d92fe2588511e11fac6"],["/2021/07/23/Review/惡之教程/index.html","d4b3d40f26d56da20fe0f77c7979a0a6"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","c46a8eb8154e50aa42df3850598023db"],["/2021/07/25/Review/魔王勇者/index.html","38d8a424cef85e7663c83fe39e9d5513"],["/2021/07/27/Review/一年A班的怪物/index.html","744a1c6863e4aba38eaa239532fb1cba"],["/2021/07/27/Review/奇巧計程車/index.html","0847de043ec6f92b3364089d41d0444f"],["/2021/07/27/Review/專情的碧池學妹/index.html","59f3bad2bd91e6f6702901b2c9273e1f"],["/2021/07/29/Review/只有我不存在的城市/index.html","6a7325bc9af16e75cbb2766b9c63abd9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","65c08d447551b455f681282864db5c31"],["/2021/07/30/Review/可塑性記憶/index.html","af70a67c4f64d8df758ed654c91645ea"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","b303305aec7082b31ddd338467e7242f"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","682a7223f7b70a59c32805532325b8f7"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","182e0c30de8de042e208c7684d058e2b"],["/2021/08/25/Review/清戀/index.html","755b9b99a41c9e0d22c2aaa5f24ded49"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","4422b14a0cc1003cd7b71d9a86b428de"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","67533c8e51350a83877e133fd1d1f628"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","a5e2a28b6e8ebf49aa77916d19074737"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","23dd5538762af32218031b244f839ca2"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","35f66395be92936ecb5b613a2a5824bc"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","924bc3e2a516e02903b686c3d7e940f4"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","b30d2735859ad02eca750fc6b0bbfa7d"],["/2021/10/16/Review/龍與雀斑公主/index.html","c6d95af4c44605e287b13a30460a29c4"],["/2021/10/19/Review/孤狼不想開後宮/index.html","f4ef62a6a6778b99ba7801943a7516b7"],["/2021/11/13/Review/徹夜之歌/index.html","eda64e112cb68e16f99fb5324cf264d8"],["/2021/11/24/Review/武煉巔峰/index.html","1d690ae33602cdfac5d164f02fe8274e"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","889404e03421a60794a525baea16b5e2"],["/2022/01/28/Review/神醫凰后/index.html","76ef6375305e46294186ddc7efb80a7c"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","590dfebed412a283dae00bab697767a4"],["/2022/02/13/Review/夏日幽靈/index.html","c107191a9727b1ddf8febb1ddd201e04"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","c5ea40865ad528aa7d92be6cdb4005ea"],["/2022/02/26/Review/賽馬娘/index.html","4b721e54fb81375333f189cf6d2f32eb"],["/2022/02/27/Review/大欺詐師/index.html","f5e9754000d0649e78a503e587e1831f"],["/2022/02/28/Review/前輩有夠煩/index.html","57be5d908eb9469f88e86471e58c75d8"],["/2022/02/28/Review/碧藍之海/index.html","8df8b2ebb89768c870eab9757c4b9a40"],["/2022/03/05/Review/落第騎士英雄譚/index.html","d56fdf1a6c0405c3c9d787415e0add20"],["/2022/03/06/Review/Another/index.html","0b7be0c6a11a7edef1a4b35dd6600c97"],["/2022/03/06/Review/入間同學入魔了/index.html","e7f90f227955112589de5d5b866d6ec9"],["/2022/03/18/Review/再見宣言/index.html","e91eca41912ea944b92f7a4e844b77d3"],["/2022/03/23/Review/生若冬花的妳/index.html","5ff392775baef52175c6eb47eb8c0271"],["/2022/03/25/Review/天之弱/index.html","dc67952eaeaa42351e856c7b26d6605e"],["/2022/03/31/Review/滅了天道之後轉生/index.html","6d5ccafdba3c3fc91c466f14779a3eb9"],["/2022/04/30/Review/泡泡/index.html","411a84600373478e236466c05f210112"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","6d3d15a00314ce69f02f702ad45dd529"],["/2022/06/13/Review/偵探已經，死了/index.html","bc7d952495965880cb422437de3371e7"],["/2022/06/14/Review/黑色子彈/index.html","4731207a7e55eeecbc514e25774ec90e"],["/2022/06/15/Review/黑白來看守所/index.html","7ab3bfb4f2c21fac983a880726ed1a3e"],["/2022/06/16/Review/虛構推理/index.html","9f1209339134f22b870cfc2a3a272a93"],["/2022/06/17/Review/戀愛與謊言/index.html","cc4f49b38399701dbdaffb310e061691"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","69046f244dee0e294a879e028638f7ec"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","83a278dafdcb4a5dbd2cc7a06dea829d"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","d3c6500ad424ef12687820ea06ebda27"],["/2022/07/03/Review/Hello World/index.html","b0152872ef1d153cede55703a4b8301f"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","426f7e7e695c53a58662ce93f9addce6"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","e9ed3182a0fbc475845d1c80632c4d93"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","3abfa21e30071164e7944aa65df0f725"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","4a1f2e6dba0ebc61535fa86ec183fb90"],["/2022/07/16/Japanese/動詞分類/index.html","e2fcf8ea2d38a70ad2098106501e2ba2"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","f128f764db250ea7166e6a4ed0f83c05"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","ce54315ce0f54d935daa88fe0be10a16"],["/2022/07/17/Japanese/音便/index.html","9136dc57bc490f072ea805fd71a6a05e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","5563473ba0dfaf45cbb004c5c692a2b2"],["/2022/07/19/Japanese/助詞用法整理1/index.html","118a1ef5d79b47a0db4ac7cfec781683"],["/2022/07/26/Japanese/助詞用法整理2/index.html","c1afb3eef56bf8cb07401546ff6b6d61"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","711997432f37ed3340e85d24629b9a6d"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","188acae49a0e9f43554ed51d45f78b01"],["/2022/07/30/Japanese/疑問詞/index.html","4e16918da4f9a8c2e1719529c3fdacca"],["/2022/07/31/Japanese/助詞用法整理3/index.html","c430cd0784035eb373ce52efc85fc4d6"],["/2022/08/02/Japanese/副詞整理/index.html","9644ba2eb1bf1363e3a11c24908472a2"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","6200f182cfd440862c54e7ddd1c0ac99"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","5117436e8b39975c623cf27fc570140e"],["/2022/11/22/Review/組長女兒與保姆/index.html","20f62916d3ccc44c116e2a9e8e5b2635"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","e488fa508f07acb439f37fd4d7ec044b"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","a42895c96a72cbf556fcb7f1de29e595"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","ff415536500a4118d5e82590089894a6"],["/404.html","37e5f1c3adad972d1148efe1072592f8"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","919df7cf553edb34b64885007f4aae34"],["/archives/2019/11/index.html","112ebc19e72de0bd96e6ab2500e2fd98"],["/archives/2019/12/index.html","295eec713c87ec3ec19516c9fd7d2270"],["/archives/2019/index.html","206cf60e92b492e51587f51752c19aa3"],["/archives/2020/01/index.html","5ae68a74dbf7db83d8fd60d67009555c"],["/archives/2020/02/index.html","7d5ea1ac8ce5c2abcd8e3f4aced7a434"],["/archives/2020/03/index.html","548416f5baf7423368e5839de3686373"],["/archives/2020/04/index.html","5cf9d3332d0edc7b98f2970a8a5b9e4c"],["/archives/2020/05/index.html","505101f930b14b952b97636cbe3d2cd6"],["/archives/2020/07/index.html","a410bd9c7da2b550967545bdfbb537df"],["/archives/2020/08/index.html","37482e7dc45be84ec54df075331ccadc"],["/archives/2020/09/index.html","fb610a3482c72923f0406a1ef54bbe9a"],["/archives/2020/10/index.html","d9937ce952948390425bdb2359d9bf7e"],["/archives/2020/11/index.html","35ab45206aec6a25057a51ccce8e8583"],["/archives/2020/12/index.html","d463b5b8ca41679f78ab50dbdac8d140"],["/archives/2020/index.html","3df69f55cdcc7faa6b7b7c0f81722d8d"],["/archives/2020/page/2/index.html","81a301e92adefe858f8c6466e393ee48"],["/archives/2020/page/3/index.html","e9a4d48635f6a3f2bde51cb0a0193624"],["/archives/2021/04/index.html","f16ab5e243ce5ea3429e4eba7eed210f"],["/archives/2021/05/index.html","d82f8c0093df4e66cc1de1c88f8cf771"],["/archives/2021/06/index.html","4e18321c0d3e215f01dfc29d50228d5e"],["/archives/2021/06/page/2/index.html","01fa9343209e672e9ef46f18db2c3ba7"],["/archives/2021/07/index.html","e1fcbed6db9a20e55601ae57fbb1fa6d"],["/archives/2021/07/page/2/index.html","970a95efa3628add5319696b9295413d"],["/archives/2021/07/page/3/index.html","8c93c0481cde815846ef9523651f89dd"],["/archives/2021/08/index.html","f29693a573ddbff485bd4139018ca7d9"],["/archives/2021/09/index.html","25b1597f03e9d5cf36c363e7cc31145b"],["/archives/2021/10/index.html","093c965bca4dba4161cbd3651f5a0799"],["/archives/2021/11/index.html","48a29e512668c27d0e526b9fa33234ce"],["/archives/2021/12/index.html","ee6d2cf8b46a9f57eb6b283a18331709"],["/archives/2021/index.html","a5f282e61ca5120ae723807cf6ba6cc0"],["/archives/2021/page/2/index.html","70e43956cdd97e35d12b40c86ee08197"],["/archives/2021/page/3/index.html","ab27db0b2ac77428a855cb10c18eb1b7"],["/archives/2021/page/4/index.html","234f3684ac1dd64ec6e26f0a5383142f"],["/archives/2021/page/5/index.html","e234fd30b300176fe12826f2a4dc1a6e"],["/archives/2021/page/6/index.html","edd70bbcb9fed7f12da3c5ab8bf79722"],["/archives/2021/page/7/index.html","a2b36eb36272e87806a8d0c767a84283"],["/archives/2022/01/index.html","1d89cf60888ad00b2b1ce6d27a080c07"],["/archives/2022/02/index.html","135094fa89d0d7b71fd2f646be932beb"],["/archives/2022/03/index.html","069fde0add18eeb3da1f2652b2ccbabf"],["/archives/2022/04/index.html","89bae3c3b9832949dd81cd2739d78d66"],["/archives/2022/05/index.html","228260d93ea91224db263d556e476597"],["/archives/2022/06/index.html","444bafc3b7834302727a5e6689c2068b"],["/archives/2022/07/index.html","5f7df6f1f81c4a781bab86b58d540d93"],["/archives/2022/07/page/2/index.html","8da359473aa0d56258c879e8bcc43bbd"],["/archives/2022/08/index.html","ed8bb56f7c3c7b18a2f715125ae89ff0"],["/archives/2022/11/index.html","da14ac15357ac66d5ce3605251396ff6"],["/archives/2022/12/index.html","bcd417029801a43b793e3ccf577eabb8"],["/archives/2022/index.html","07fca00c8bf31bda30fb8ae089612ece"],["/archives/2022/page/2/index.html","64dc815d8ece3daf62e173fff27ea0a9"],["/archives/2022/page/3/index.html","9aac7c3f6f3cc01b347c6ed7324cc48e"],["/archives/2022/page/4/index.html","b4e97ac58ad59717107fe91f805007ed"],["/archives/2022/page/5/index.html","d1cc82b7d91a8a04054a3a21d05b59a3"],["/archives/index.html","d537fcb6e156cf2b87dba5e2640c0dfb"],["/archives/page/10/index.html","0145b3c4faed9d1bf7a8892a8c1e3178"],["/archives/page/11/index.html","9e151a8deca759c7cd792207ff97fb19"],["/archives/page/12/index.html","8fbac39d2e3b0922f7ab3008a173aa10"],["/archives/page/13/index.html","5447ecf6ca7b81df7e5cdbd0464d7784"],["/archives/page/14/index.html","b5df2a09118ba6685d6810fae151835b"],["/archives/page/15/index.html","72f0821d06ed9b5129cb755d03543729"],["/archives/page/2/index.html","eb59a2be59f606d9b046f625cd775957"],["/archives/page/3/index.html","685a31c140001cb908f36d334e2030eb"],["/archives/page/4/index.html","b2bf7afca8c92786ef93a185e23f4def"],["/archives/page/5/index.html","66ff3e8c27c95d41e70d538fb5df8198"],["/archives/page/6/index.html","ef77392d8a0d3a79daece09480a55beb"],["/archives/page/7/index.html","f61920eebd39b2b45f1f9fe140e9238a"],["/archives/page/8/index.html","efa3dadf0f35d01f055a068b9e869e85"],["/archives/page/9/index.html","33fb2da16c1297b979af5552e21dd1ad"],["/categories/Programming/index.html","75d4e014286fceb60dc7dbc002b485df"],["/categories/Review/index.html","1182c996b606a8f91cb8ae90127bd457"],["/categories/Review/page/10/index.html","8baf420a8a428049702be2a00c28c38a"],["/categories/Review/page/11/index.html","bdc0f1d0cb7c3af02fe6193b0f34f571"],["/categories/Review/page/12/index.html","7b654bdb9f3eed6952256ab2bd114ea7"],["/categories/Review/page/13/index.html","e491ff0823875650babfb7603d283fc2"],["/categories/Review/page/2/index.html","cd4f6676b2b98c260bb4a2755c0af9c4"],["/categories/Review/page/3/index.html","5fa8a2e250e10ff655e4b60668039fac"],["/categories/Review/page/4/index.html","94a94b293d74859d21eaa83c44954f74"],["/categories/Review/page/5/index.html","92d31a9469cd39e9fc2e7b0fc2fffbc6"],["/categories/Review/page/6/index.html","0e559cd794ca4d231eba5817d0a161de"],["/categories/Review/page/7/index.html","a80b251210d6c37b30ff62f14f26c099"],["/categories/Review/page/8/index.html","a9a05846015f6c376e5ea55d295fbaf1"],["/categories/Review/page/9/index.html","53ddea611b98c15ebbc1cc0ac6a074f6"],["/categories/index.html","0b3cb8a28e4097ec7ff60a6fe242ae21"],["/categories/日本語/index.html","96a9d3ca9bd254034b303cb7a2704690"],["/categories/日本語/page/2/index.html","a70bcafa606005aa9f501a45d9578556"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","11dffa541e6f9696bea3cb8a65aed78a"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","45d564b93c19925be894edf7b268bd91"],["/page/10/index.html","64cc544abc98cc689227ecc62647a24d"],["/page/11/index.html","c90068b57dd5bcd0a2bdd6b750fef345"],["/page/12/index.html","bd6746aadfdac430935ae3d8b79e6be7"],["/page/13/index.html","63b02c81a33a4608776b3a24cc66a3d7"],["/page/14/index.html","5a962da2bcdaa1f79b955acac48ef973"],["/page/15/index.html","c89114afc0d9396b441adf643444e7e8"],["/page/2/index.html","fdbd38b5bd5b3f6f8a964f6bf354ca66"],["/page/3/index.html","6141c5e40f6dbdf3015630050f91bf37"],["/page/4/index.html","3a42937586ef6ad372bc7f6b4cbc7a1a"],["/page/5/index.html","46862d6d0da32c7acbe625baeec3bca3"],["/page/6/index.html","44571caf9e1669b3f2fca8d3e1c3a7e8"],["/page/7/index.html","ce99c36fc27856bde8bc689d7edac9c6"],["/page/8/index.html","628978ee32bbbf64bb4d685cb5c3d0d5"],["/page/9/index.html","17d815e64e85e9b3134b56443953bafa"],["/sw-register.js","6b0b89ebcf05a04c73c6391c31373b3c"],["/tags/10分作品/index.html","796812744b37e292fb788886e49999f3"],["/tags/3分作品/index.html","64074ba4c8c0882467da17d511bc850f"],["/tags/4分作品/index.html","5911ab4cdcc27fc76d2589cac1bb25c5"],["/tags/5分作品/index.html","109959a7ed34da48089756a0355ff03e"],["/tags/6分作品/index.html","422495c6ef59f01417dcbd57a3c44c02"],["/tags/6分作品/page/2/index.html","7e4a26351a894062a5c34471de4b495d"],["/tags/6分作品/page/3/index.html","215ab5081e14c2dd5709152ecc42c0c0"],["/tags/7分作品/index.html","b99eb86975bbc7ed202cdbf148714f45"],["/tags/7分作品/page/2/index.html","8379f45977e6cc70902c17156b6027ac"],["/tags/7分作品/page/3/index.html","ca7c375652c11b7acfa2dd53deb0b1fc"],["/tags/7分作品/page/4/index.html","57c501beedcf4cc34377b1c4256fe923"],["/tags/8分作品/index.html","9cf195329821ed82da58a5af9f4dc521"],["/tags/8分作品/page/2/index.html","f1fa73b9173969747ad015747d9e7e84"],["/tags/8分作品/page/3/index.html","a39867902d6715b04862cb7ad6a8d421"],["/tags/8分作品/page/4/index.html","50a8f73cf8d48eb77a6d4db9a5478279"],["/tags/8分作品/page/5/index.html","b130dbd0348e9d7a13b344de332ecdf1"],["/tags/9分作品/index.html","1b9dc6e04d11160e344a3e7d9ce86f61"],["/tags/N5難度/index.html","c90d9b387c4054f9ab8bdd059503b8e2"],["/tags/N5難度/page/2/index.html","8bd307ab3ec8c513b1b100c77b33389a"],["/tags/index.html","1c8eef3deaec29b3ac0a96c81f6242f1"],["/tags/アボガド６/index.html","fbc3d669bb23ed6bb11c746aeefcc1e8"],["/tags/三秋縋/index.html","9cb39133c38ebd3205b3e0cb271ee2aa"],["/tags/中國武俠/index.html","3eec4b670613303e6c722d84296ca588"],["/tags/中國言情/index.html","a727ad0f8c622499572d9e2cbac3aeb0"],["/tags/二宮敦人/index.html","56e666504483bbff5ad178c5719afd91"],["/tags/人性/index.html","ba957a4d7d6674c11fa6da65d01a6de7"],["/tags/人際/index.html","0e980ed066da3a98ef1eb0ece0be51e6"],["/tags/住野夜/index.html","f9c6ea3386db859ca87f605c46484d5e"],["/tags/佐野徹夜/index.html","f781ce5ab2076d67659df563c9930e0c"],["/tags/努力/index.html","74156e82229ed65b0b7c7a718e837829"],["/tags/動畫/index.html","06b7ae3c01c3d657d74e1c393069da4e"],["/tags/動畫/page/2/index.html","a50b5363c22fad34194303f116defe08"],["/tags/動畫/page/3/index.html","7c0180c5addb98a6b77aba4dd77d7a1c"],["/tags/動畫/page/4/index.html","6bbec9dbbaac152cfe6733d39e4f871f"],["/tags/原諒/index.html","6c2ddfb8991d331bdfe7b9508cbb3e79"],["/tags/反烏托邦/index.html","3d143473f162b34684bc1e5e49e7f694"],["/tags/啞鳴/index.html","8b9fa3cecfc798310663b1c2af513942"],["/tags/喜劇/index.html","2b0aee759a88a6659a0ba64fc85be83a"],["/tags/夢想/index.html","e550a1578619e7615dfc9b7316c6c9cf"],["/tags/天澤夏月/index.html","694a68eae38b174f125245db85af4424"],["/tags/學習/index.html","d65fd9b84d183f77cecaf813e11b0437"],["/tags/學習/page/2/index.html","41fcafb1980c6325f3c012dd9d8fc386"],["/tags/宮崎駿/index.html","addb4b3e1f0ec0abf00dedffb99a87a0"],["/tags/小說/index.html","6edb70480109ae3533e864aed25d9824"],["/tags/小說/page/2/index.html","1a052360bfccd60b419ac587b8f52217"],["/tags/小說/page/3/index.html","1afe8532f40b6652e3d6437457e1e390"],["/tags/小說/page/4/index.html","fe61405c888a1f5bf5c14864ec85b5bc"],["/tags/小說/page/5/index.html","16bfe80a1baa2fbe67c3de5772f9fbde"],["/tags/小說/page/6/index.html","c761af15d5bd9b36e43049d8c3ac66a0"],["/tags/小說/page/7/index.html","6a605be64da466656f5d5a9e786bd327"],["/tags/平淡生活/index.html","312a144dd28b39c820d88af76566c263"],["/tags/幸福/index.html","5611a34081710fdbd91d10ffe7db6e46"],["/tags/志茂文彥/index.html","2f480d936b4bb2d08483297da86a6ae5"],["/tags/愛情/index.html","16b77544f6cb289fbd20e9e410abf630"],["/tags/愛情/page/2/index.html","3ef37f9168b4c37f1746e802fbc6c467"],["/tags/愛情/page/3/index.html","7856c308ab69b788103fa68b57e92d0f"],["/tags/感動/index.html","4e6096c581e5218f61f5d05d3903756c"],["/tags/懸疑/index.html","910af378f3ae158b3cb304e7e499b63e"],["/tags/懸疑科幻/index.html","e3b1c0c5e359657f4d42dbf2ca8d1d5b"],["/tags/戀愛/index.html","6e74ed7fcda7dc44e3336e8043b3f9f2"],["/tags/成長/index.html","16b13cbf852f91ba9295333fe8cad62b"],["/tags/成長/page/2/index.html","88239506a53d2f5864603aa6ddea2b0b"],["/tags/戰爭/index.html","a2b884cab34844f0ba76c3289c70c64d"],["/tags/推理/index.html","12d66209356a360812ca72211820b2ba"],["/tags/搞笑/index.html","bf2656675dd721cbcf93bde09923999d"],["/tags/救贖/index.html","2c8ee25286f0e81f127c93b020f313ba"],["/tags/斜線堂有紀/index.html","97e137ba52bb6b33d1e3ea548258fd45"],["/tags/日常/index.html","82563221028db4fc2a200c8495ed3393"],["/tags/末日/index.html","4c098101e4bb23c733b10cfd0ff5d832"],["/tags/校園/index.html","5e03ec0a87d499fe81bfefbfd2e2f8b6"],["/tags/武俠/index.html","3a9b2797513c3142b36e01e3dbc250d8"],["/tags/武俠言情/index.html","aebda11fc2d606b3920df13f1351f414"],["/tags/漫畫/index.html","31d4c8fc5c51ec30d7168ef51a5349bb"],["/tags/生命/index.html","98375e8de50fe16cc4127b74f1458c64"],["/tags/生命/page/2/index.html","baf3cb7a4da4a15b3bcb9d93504c7922"],["/tags/短篇/index.html","e1ce308aa1e8b9cd24b348a0242f4f84"],["/tags/社會/index.html","e483741fd23a5d96c2c93d6f0eb7efa9"],["/tags/科幻/index.html","6d9a9fdcf6440f85f47782d7e1df9094"],["/tags/童話/index.html","a763851d0782ce875ad52077571c5266"],["/tags/競爭/index.html","30317910b2c48fcd3a16bb64ab49ec83"],["/tags/自我/index.html","d072e987e3805f7e468cb6d2dfbf1dc9"],["/tags/自我認知/index.html","620d5d890f7034c816e2fabdd15f9e39"],["/tags/葦舟ナツ/index.html","4a4d6d875e6d26206a233c1206fd2645"],["/tags/藤萬留/index.html","5d838ffc0af8a1396935926d421f0d57"],["/tags/親情/index.html","058f3e74af13da2d1143b2b515c4bcea"],["/tags/雜項/index.html","6b65696b15c0a760ea023fc8fcbec2c4"],["/tags/電影/index.html","6aca371eef9e580a8f9d11e710b9e6fe"],["/tags/電影/page/2/index.html","51d5d7262cc33fb836c9b4b34f3e2013"],["/tags/霸凌/index.html","1bc95d5ee053da37149c779679dda9d7"],["/tags/青春/index.html","a4f3de800e4cb98587d5749e19425109"]];
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
