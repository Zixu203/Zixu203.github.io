/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","ec900e0085123d4316e5f9a517a2e056"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","f9d21986a18c94d8befce593c9879e78"],["/2019/12/25/Review/無法計算的青春/index.html","097f52cc309d92899aedb8b687fbf376"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","7578580c5a80ecea8623ea672f7dc978"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","d3c3a972c74b323d0e21a04f9e27689a"],["/2020/01/19/Review/下雨天，不上學/index.html","5c2ac46187eeb5e2e13dbe72f39cccf5"],["/2020/01/26/Review/三日間的幸福/index.html","6a1800fc73d8f22bb6aded5e02443151"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","93879b2ee3bece67548e8c5c926e7421"],["/2020/02/09/Review/青春期超感應/index.html","4bc3ac720687df5c51cd7578a7b4d14d"],["/2020/02/15/Review/又做了，相同的夢/index.html","029e71df0ae97f252c56477432cf6ca3"],["/2020/02/22/Review/回憶當鋪/index.html","2ff8ffdeffb972b08ad18f43478ca146"],["/2020/03/22/Review/不適合自殺的季節/index.html","6617f098d45efe449dc27d585ef842f6"],["/2020/04/26/Review/我們都無法成為大人/index.html","61076b11ebb57869408392ce994e6f04"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","8294c8fb6e1737fadd7ba2552bde9549"],["/2020/05/17/Review/人間失格/index.html","c193228eb0031b579dcd8d5b7abac0c6"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","b95e5b6b893920c45cd4f5b675b8a0fd"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","a95205c3094a518ec037aec456587a47"],["/2020/08/01/Review/銀河鐵道之夜/index.html","f5bee1997776dd71829ec9b72b3bef03"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","8f355660543d16b2516b471690d903b4"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d516ab0bfb516832af187ceb2be11487"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","5b4437f4ad51d8af8ba9afba4eb1d813"],["/2020/09/13/Review/羅生門/index.html","c26bc538306a5cc09874eed7ec321e52"],["/2020/09/20/Review/闇夜的怪物/index.html","1702838fe019f098bc073c681e8e0bc8"],["/2020/09/27/Review/14歲，明日的課表/index.html","7320a6fe9346ce41684b779130034e88"],["/2020/10/04/Review/致十年後的你/index.html","38e07b2d1f0742aa283efd19ffda211f"],["/2020/11/08/Review/滅絕之園/index.html","423ddb16ce688f102ac863bea1b7bbbc"],["/2020/11/15/Review/將愛拒於門外/index.html","23a08f872169d712c8649d430c837fc0"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","2b9bbd527389c06cb75797477ab1777a"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","d3e58e2beccb4f71996050dd09a6a22b"],["/2021/04/22/Review/道印/index.html","4b3b8082e8eeb4d8795aada9825093bc"],["/2021/05/03/Review/戀入膏肓/index.html","c0e9e6382d7b30ab109f432e23bcdc8f"],["/2021/05/10/Review/Dice/index.html","411212a6e35ce310729b39aae2f794ae"],["/2021/05/15/Review/魔女之旅/index.html","c4c37a7e5c89525c842a9de29513d9f6"],["/2021/05/28/Review/戀愛寄生蟲/index.html","323f523d85fb262ed5719f5789d75331"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","ae2e368e210f70711e17efc9821defa3"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","5c29caa2a3c1d7b7b58549bc22645f59"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","cc14c1c3416398821cf5a87944a60ba7"],["/2021/06/05/Review/流浪的月/index.html","cf1ca2e5900c3c0827ecdfc86f3f653d"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","be79208057645b89a76fd750ec55161a"],["/2021/06/13/Review/第一人稱單數/index.html","bea5d1921427205500c4c9b260431789"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","03a909e3b580075e6dec75151017ebe0"],["/2021/06/16/Review/願你幸福/index.html","2ff428d76452035c02b6f7476f66b1fe"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","491a183330d99a6b7183db404ebecb90"],["/2021/06/21/Review/神隱少女/index.html","12c639a192624997b9cc75b432f5425e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","cc947cb966e6b0370895f4293e683a6b"],["/2021/06/23/Review/天空之城/index.html","cd7a8524feae1d2f77416fa7d022f83c"],["/2021/06/24/Review/魔女宅急便/index.html","7ef0d16454a11a8161505cfcbd42ca8e"],["/2021/06/25/Review/借物少女艾利緹/index.html","975bf00a16c84d0ef16f883b67c4e5db"],["/2021/06/26/Review/魔法公主/index.html","88a0174c901315f5ecbbf5cf9eda550e"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","01200ad3212ec26662b3bec420f4a678"],["/2021/07/04/Review/飛雪與劍/index.html","2929d628eef0e6f7096ad3433fdebdb3"],["/2021/07/09/Review/地球防衛少年/index.html","70d31c721956e2a70e9f7c1080e24a74"],["/2021/07/12/Review/Angel Beats!/index.html","896b2e68e49c4ad62839ef60e74ccbc0"],["/2021/07/13/Review/Clannad/index.html","4721da0b436397d5b190984a981875b1"],["/2021/07/15/Review/AIR/index.html","f33278cc49a5f5b3dcf879e00304742d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","c4523d88e122c5cc2bb059b167446918"],["/2021/07/15/Review/螢火之森/index.html","cc53c6f5d1b3112b32aa0fee1347e871"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","aea75cab1e79f57292cc8a9f7b6f61ec"],["/2021/07/17/Review/奇蛋物語/index.html","e4b4cafedbcda2849af320eb26ae0a43"],["/2021/07/18/Review/Vivy/index.html","36b35248a02241c2c28bfdfb35268cec"],["/2021/07/18/Review/請妳消失吧/index.html","8f589e5bd6d7da504eb2452fb683d27c"],["/2021/07/19/Review/漣漪的夜晚/index.html","4d1945948ab178d9978fdf134b24c1f7"],["/2021/07/20/Review/月色真美/index.html","f17c2cd48963d56577cbe0f004ff0183"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","a892c08e524749543ce5d47e474d644c"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","41b070b031f3294e606ef15f0446ffb6"],["/2021/07/22/Review/罪惡王冠/index.html","762856ea66c55fbf300f3cf0ffebaff4"],["/2021/07/23/Review/弱角友崎同學/index.html","63f5b171b1b2e782a34767fbd559ad97"],["/2021/07/23/Review/惡之教程/index.html","977ed3f3f81455dc853e45c1c6f8e6b2"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","8ec172aa7390b693ad68c1de8725ecb1"],["/2021/07/25/Review/魔王勇者/index.html","2e45aa5afb508c894e7e1a0e84495ab6"],["/2021/07/27/Review/一年A班的怪物/index.html","8b2e9062f95e332e81d77f40d8b92e84"],["/2021/07/27/Review/奇巧計程車/index.html","93af6b225fb1309bdc8f600fa929289b"],["/2021/07/27/Review/專情的碧池學妹/index.html","dcbd9a5787513627ed88ed66ca87aa09"],["/2021/07/29/Review/只有我不存在的城市/index.html","6cdd29ef94a397fd0629cec39cd4977d"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","4d841b9ab232c584dbc9d9803ae92f7f"],["/2021/07/30/Review/可塑性記憶/index.html","e97947d58c64360c15f5d904c29a53e9"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","608afe431e6575124faa9505a61449f5"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","460b6226dad7a439774e084b5d2b49e7"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","db0f79944494ccc2b6c64d1438f90c23"],["/2021/08/25/Review/清戀/index.html","aed7a0344f00b5d53e58c82cd657f97a"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","86055d12d05694a8322f40746d2f0fc7"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","fb5d46b2de39f7e1768a1927e9cb4431"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","0891254efe0d651a4cb294bbbf4bfec2"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","b7ebde2944cf8e9dae308a05df0f3c3a"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","23d7b301d0e486c734dc041c3dc830ce"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","a6416fad047fba85e23c87b190d56442"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a3712d535e3c57ee0ccbafe2b03ee144"],["/2021/10/16/Review/龍與雀斑公主/index.html","77c38caf17f6a007e5b44285b754f7ef"],["/2021/10/19/Review/孤狼不想開後宮/index.html","06596b23dfc154a0a66ca446fe68bf1d"],["/2021/11/13/Review/徹夜之歌/index.html","c364db202470897c0eb3ae5892975265"],["/2021/11/24/Review/武煉巔峰/index.html","0f696fb312f8485094d148a49803a2a0"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","37dc96fab59fdd2eb1b44f50fc6f8ee2"],["/2022/01/28/Review/神醫凰后/index.html","c36587b488e38ab4755647f6cd24c664"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","fcf06e3dcba3e06c50e6895362084c0d"],["/2022/02/13/Review/夏日幽靈/index.html","8ca261a3aef30764c1644a49b29460f6"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","31dc559997116a5e2d1f0ea00e32e50e"],["/2022/02/26/Review/賽馬娘/index.html","1f36259ac5e6d8844750ae9ac7ef40c6"],["/2022/02/27/Review/大欺詐師/index.html","81b0ad10048f5a081b023f9c5a2f4654"],["/2022/02/28/Review/前輩有夠煩/index.html","c3d25affc677f87f44bee81b4e49b07a"],["/2022/02/28/Review/碧藍之海/index.html","1ab224b1cbe760c3a44c29383a473e5a"],["/2022/03/05/Review/落第騎士英雄譚/index.html","3defdf84582683d9732439ce869f4e31"],["/2022/03/06/Review/Another/index.html","05cb5031d8239f5a09707a5b1d2fe941"],["/2022/03/06/Review/入間同學入魔了/index.html","890be9a979cd3a34cef0e82434caa4b2"],["/2022/03/18/Review/再見宣言/index.html","9a03551eb93183d12f7be53f4d517e6e"],["/2022/03/23/Review/生若冬花的妳/index.html","3833bf61494be39c29a7ed7894bf6a33"],["/2022/03/25/Review/天之弱/index.html","a3e57cf7f1dec5c1b74050d671e2457e"],["/2022/03/31/Review/滅了天道之後轉生/index.html","731cf1ba1bbd4f0368332e3ad2696af4"],["/2022/04/30/Review/泡泡/index.html","c2308447c7686eb634fc7800d63beb77"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","c4eb590cd583eb0ce2128730db4172da"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","37301e6ed0f7fa9de04f870401ad51c3"],["/2022/06/13/Review/偵探已經，死了/index.html","6d6165881b4a78e1b7162c75f975d841"],["/2022/06/14/Review/黑色子彈/index.html","03ecd9cd05fb08a8357fac2eb5779360"],["/2022/06/15/Review/黑白來看守所/index.html","c652007a5e15ed2669d4d09498bdd406"],["/2022/06/16/Review/虛構推理/index.html","f119801960acba08cf4e400a106078ee"],["/2022/06/17/Review/戀愛與謊言/index.html","3e7cb295575ed9a5f41fd4239951e9ea"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","873d90d65640a64cec69529da77734f7"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","b17ca7339e167064bd6a780609092107"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","88706c92ec4e0d87ff4ef26296fdc3bf"],["/2022/07/03/Review/Hello World/index.html","f8af7033a2196c9ade4ba72f1346f2d5"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","06dbf33698a3b56c1c81fd69409a7d44"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","5c3ada8adf27e39507133d0497d5349c"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","c5f413da23eb71c43674ab189fb22a7d"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","485c4f7fe0ff26a37804ad25c49a2e95"],["/2022/07/16/Japanese/動詞分類/index.html","b14a05d5c4d2f292dd59202fd3598d4d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","155d95df889eba889df0bc8b740e8961"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","8dc085ebc218f28228f8b80bd72c59ab"],["/2022/07/17/Japanese/音便/index.html","ae73e9e36929461f37cb78ef83d915f1"],["/2022/07/18/Japanese/動詞 時態變化/index.html","914a35d3701304c5c64a75c5596ee861"],["/2022/07/19/Japanese/助詞用法整理1/index.html","2f1cd10de2cf0193008cb5a63935cc46"],["/2022/07/26/Japanese/助詞用法整理2/index.html","bf573836b27ac5258a9f65dcb1fe6a2a"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","c69213a616870e227c086edda7de84a6"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","5f86d98d8cf85c7d4f1f24fd57549b0f"],["/2022/07/30/Japanese/疑問詞/index.html","a2a3596b6d13a83929e2595af4fa428c"],["/2022/07/31/Japanese/助詞用法整理3/index.html","fa79b8880942e6d44e556b324db00515"],["/2022/08/02/Japanese/副詞整理/index.html","6ac82a8d3ea21a37571442fd04fc061c"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","f0acfe12d4fe3e9590b52fd64edd03ce"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","cb14abebfce4a7397d64dbbd006be79d"],["/2022/11/22/Review/組長女兒與保姆/index.html","2819de5e801c5998d42db887b885532d"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","81e4923d4e6e2d64954e6fe366b4aa33"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","df778d9a63fef1b9598a7518a7716304"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","d282751251634b836c830c665aa6567c"],["/404.html","9587d10804320b55bae56064931fb2cb"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","8324fece93460bea8432290d70730e26"],["/archives/2019/11/index.html","076a8340347ab29e2b545fb6a592e25c"],["/archives/2019/12/index.html","2a175d0210e58fbdc6329602eef974a3"],["/archives/2019/index.html","443e842f110c5d551882d59dc04e9a5f"],["/archives/2020/01/index.html","f9db716c32f1b5cf0900ff41992defa2"],["/archives/2020/02/index.html","4d05c8d2a9f12598a8f0c05472559bff"],["/archives/2020/03/index.html","68d82d7377209d568a4d1f8043c46d24"],["/archives/2020/04/index.html","ded97d123a9908e29eda0f3f489813fe"],["/archives/2020/05/index.html","cc92f696d3528c2a1808df6e86ac3e60"],["/archives/2020/07/index.html","5ce29c1aa57a2dfe8eb7b04b27baf082"],["/archives/2020/08/index.html","45a1dec9ad9efe9c55fd152c64a3709d"],["/archives/2020/09/index.html","04360e41edfd068f50dd236e289eb8dc"],["/archives/2020/10/index.html","c3924903b362fc07855681016ff5160a"],["/archives/2020/11/index.html","51eac3d9a045281e551c2c2e7614195a"],["/archives/2020/12/index.html","7902aa74604d2f07d5bb9fb5cf1fdc65"],["/archives/2020/index.html","e16edc3a80f4e2b03a1470e94ad2085d"],["/archives/2020/page/2/index.html","56439ce15bab3985d2db16e3bf6760a5"],["/archives/2020/page/3/index.html","1d8ee20b9f2c0b0c0f4f388f4ccb018d"],["/archives/2021/04/index.html","1c8ab2b86a1872f6fc6bb6e89d64a82d"],["/archives/2021/05/index.html","a3e282093212ab034b3d71205332fd4e"],["/archives/2021/06/index.html","246d525213c8a08dd1c0ba8695492f62"],["/archives/2021/06/page/2/index.html","4b4e344b5abbddc0c11c1d1d4d5311bc"],["/archives/2021/07/index.html","b9f1a451df210116a5147a7f4c296221"],["/archives/2021/07/page/2/index.html","88a246a5a476ddc2e4120c7f97f64018"],["/archives/2021/07/page/3/index.html","37e2a15eb69f388601cdea641b16e41f"],["/archives/2021/08/index.html","22667e2721c4e5ce65ffa15cf685458a"],["/archives/2021/09/index.html","e51eb35d4fd6e2149dad177613f43268"],["/archives/2021/10/index.html","4533e546fa45ffab5e7e6e6250382a16"],["/archives/2021/11/index.html","6108520a830942c1d11cf8e0b0facd6c"],["/archives/2021/12/index.html","f2fd6d2ee8b8da37411e439bf00a8878"],["/archives/2021/index.html","9e8d1f049298be4c3bbb6b4f745e54b6"],["/archives/2021/page/2/index.html","88cbc7608d12a35dc5fb8d5b8bfc8713"],["/archives/2021/page/3/index.html","cab3c5c078869ad0ff333e3d2aaa56cb"],["/archives/2021/page/4/index.html","91ab792accfbdf47df7edf62a88d045d"],["/archives/2021/page/5/index.html","d0059b3962131c0911fca8ce1df62f4d"],["/archives/2021/page/6/index.html","c0b354e46cdd65a1df1a90a821234439"],["/archives/2021/page/7/index.html","0d505cd616efdb4feb8a1d4979655328"],["/archives/2022/01/index.html","85013b5428c8083fc2c041506537aafa"],["/archives/2022/02/index.html","05d17fe1509bcfee30a05640a209ce19"],["/archives/2022/03/index.html","21a775480a6537ebe722c912f94ecb77"],["/archives/2022/04/index.html","8c24f4618823baaab2c11fb7b6cbae43"],["/archives/2022/05/index.html","1a9f94770e7c63a24da8db0ebd5876cf"],["/archives/2022/06/index.html","69041a5a0e8a6b9331c76b2e4d6e5c5b"],["/archives/2022/07/index.html","cafc1b752e7d2e711f31f470d868c6f7"],["/archives/2022/07/page/2/index.html","723e12b84404077fc53d62e0302a0d90"],["/archives/2022/08/index.html","d2da3f03b2db9fb36c3e2bfc83adf355"],["/archives/2022/11/index.html","1b4af461313a23b59d5776155a2e5b9e"],["/archives/2022/12/index.html","e625547f24054352030bc18e8ed45c73"],["/archives/2022/index.html","701851408852d1ccfdd1275567bd0b62"],["/archives/2022/page/2/index.html","cbc47ebd60c691846d011931bdd8ddda"],["/archives/2022/page/3/index.html","9521ea6e9258682d1ee324d01c2bb6d1"],["/archives/2022/page/4/index.html","46d8cfbc7e13527c5a6305d2a725c20e"],["/archives/2022/page/5/index.html","0c9ad3ef4cb119ea215334d917f6e42c"],["/archives/index.html","aad16aa3fdecfbababffe8349ea6f1df"],["/archives/page/10/index.html","ded4c4a51f3d162229bb29cdada6ac72"],["/archives/page/11/index.html","09a1cabbe9638ae4b394eec7ed8f494c"],["/archives/page/12/index.html","e1cbb08003b7d68413ea5c0091017fc0"],["/archives/page/13/index.html","4decf56a31f2f9be227c28fd14e71a43"],["/archives/page/14/index.html","fc6dcd9919cd07df359832ff32a232f1"],["/archives/page/15/index.html","1d4d7a69df1f41c2ed63783380cb7efb"],["/archives/page/2/index.html","f1309db92a469adca69cdea2c2dceffa"],["/archives/page/3/index.html","15a937093705aa43d27c491ec73cb753"],["/archives/page/4/index.html","7087f7911b22ae0285428c791bdfff0c"],["/archives/page/5/index.html","5c226fa30a3c0c338cb5c01effb624e4"],["/archives/page/6/index.html","40bd8b614bc3da1ed90f09754ceea5de"],["/archives/page/7/index.html","314be1a57a70519d10e7a51fb2e5df31"],["/archives/page/8/index.html","4cef2523758e532ad60f7b56ed9e081f"],["/archives/page/9/index.html","c734f1f0c764714ece03012764cee952"],["/categories/Algorithm/index.html","c0c81b82dc322f6fa586958acfd0f450"],["/categories/Review/index.html","b5d2ddd8507386d6f1aebb899e639141"],["/categories/Review/page/10/index.html","9a1f69982cf91ae0e2f0e6b968bdb6c7"],["/categories/Review/page/11/index.html","ada97737891d1c7ab95fca96d5732890"],["/categories/Review/page/12/index.html","fbaccb90b4cefe116bacbf2041361a91"],["/categories/Review/page/13/index.html","cec0a5169aca2ee1e9a5d6e35ea84e2c"],["/categories/Review/page/2/index.html","103bcaf3ee1c462ce088f565f13c243c"],["/categories/Review/page/3/index.html","d3cc676c5d07e0f1bc2a84de950a0d72"],["/categories/Review/page/4/index.html","bcaeb5d31f499f21840ecfcaf9f96a0f"],["/categories/Review/page/5/index.html","49848e1e565f3e64e99a747ce9a1e01b"],["/categories/Review/page/6/index.html","8959694df12c4739a5664811472c3824"],["/categories/Review/page/7/index.html","1db5ec642b3d8754002fbf3987751b27"],["/categories/Review/page/8/index.html","6331dcd18d3570fc8f7940bd7c58e3e6"],["/categories/Review/page/9/index.html","627aef37bf164a5098d9e6d2ffe95478"],["/categories/index.html","39ac3e0ef4d1fa86bf5a0b66db73e12b"],["/categories/日本語/index.html","1b9155839b7175f2bee60bb885319257"],["/categories/日本語/page/2/index.html","4200187834835687196a0ce5f14186ba"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c4dbfbb5bdce3d4033bd14fc7ff1acfa"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1ab75666b9d3e54e0a6acc00de3ec483"],["/page/10/index.html","b548a0d80f0e42e8233f1853516fcb63"],["/page/11/index.html","25ab7562beade5081061071680fd6102"],["/page/12/index.html","33189e833d476e81aa043240029998a5"],["/page/13/index.html","59eed71f874aa16efac2e9307b8e985a"],["/page/14/index.html","d705d5eb3e5726668af3fd634cb64e7c"],["/page/15/index.html","f2cc3045761b7a930beecf80af41ffa6"],["/page/2/index.html","de61cc10729891c59b6168f6042e4a0c"],["/page/3/index.html","62f52e6706fb04a2800d5fcd5b9b7661"],["/page/4/index.html","67df83430ef95c9e3e2b0ec78595bd9a"],["/page/5/index.html","7938a88890232e93c6afccb964ab4072"],["/page/6/index.html","6ad678bd9ed03519e0e5112aeeda3ae3"],["/page/7/index.html","bb30057b854dca9737b91b6b9cac2604"],["/page/8/index.html","b6b4b9cd25acc48fa5ecce9d78dbfa89"],["/page/9/index.html","daad6aff57ef6bf62a148f6b0331b57a"],["/sw-register.js","305590da43d66e547e4c6ba28cdb8644"],["/tags/10分作品/index.html","2e25f908a3ea19344d182bfdbbfc16b4"],["/tags/3分作品/index.html","6fbc342cc5342058875bd2748c7ae05a"],["/tags/4分作品/index.html","afa457820e725a73d34049730c35f6a3"],["/tags/5分作品/index.html","f4dcae6a38062bd92c51fee088ba740c"],["/tags/6分作品/index.html","24e18ba6dc8c5ae8d35eac30ce77d226"],["/tags/6分作品/page/2/index.html","24e8715814b8c7df25e17800ad9b991c"],["/tags/6分作品/page/3/index.html","c45166046e68e757f98ad2a1b3a12834"],["/tags/7分作品/index.html","cb1eb251ed6438d1df7fe1638a1190b4"],["/tags/7分作品/page/2/index.html","b8d2818e033a09d6d75bca073ac92ecb"],["/tags/7分作品/page/3/index.html","56109bfe69588c0079e62f714df88afe"],["/tags/7分作品/page/4/index.html","5c8075b10e22d4ae0622eb4b7dee128a"],["/tags/8分作品/index.html","6d8a27a38c2c66b267caba7225437d4d"],["/tags/8分作品/page/2/index.html","8eeea8d3b149868f4cab76efecd0ae28"],["/tags/8分作品/page/3/index.html","458806451e33ec623c1bf0518ab68c65"],["/tags/8分作品/page/4/index.html","3201624bab52b931c01a546e0fa37fcb"],["/tags/8分作品/page/5/index.html","665fc8ee9230268de4cfdabed130121d"],["/tags/9分作品/index.html","cc1cd44c06655425f7202338bc0c6ee6"],["/tags/N5難度/index.html","c61730ba6b49008675eb6cca25646f4e"],["/tags/N5難度/page/2/index.html","5bae89ddb771f5a43efd86ded26e6c60"],["/tags/index.html","765c6207618f11d125744852a325b678"],["/tags/アボガド６/index.html","cbd19d626a701f01541e2b56a87702ae"],["/tags/三秋縋/index.html","f21a183bb7c4989dfc3fefb821221021"],["/tags/中國武俠/index.html","5b663f1a29b4beb1dc5b9f46d6ab5f1b"],["/tags/中國言情/index.html","99eb6e1d2246479025257b5ca2cce864"],["/tags/二宮敦人/index.html","00fe07baf32121692df94745830ba21a"],["/tags/人性/index.html","603ce6666129c3c623008f90f04c953f"],["/tags/人際/index.html","6e515d314396b860e0daf59474e238cc"],["/tags/住野夜/index.html","0e1934885d0000d3fb40836577366ca9"],["/tags/佐野徹夜/index.html","bf08ec2def37839755236603d61d3954"],["/tags/努力/index.html","8d81c50257f886b676e37af3bbc0b7dd"],["/tags/動畫/index.html","44d5591d08c282b30d23e95b1742627f"],["/tags/動畫/page/2/index.html","c40d1099083bee8c096e490e262b77ec"],["/tags/動畫/page/3/index.html","422ddd80fa45ef574f22d12cef3873c9"],["/tags/動畫/page/4/index.html","990dbe5dda0a79772930a929f2979964"],["/tags/原諒/index.html","8eb14438db7326992bbbf65fb8a383d2"],["/tags/反烏托邦/index.html","6512a296e45ccf00f3e93fc2803516fd"],["/tags/啞鳴/index.html","ddf61727a096a24dc3b7c8f2d2996ded"],["/tags/喜劇/index.html","0514f56d4836b09acdf5914108e44ea0"],["/tags/夢想/index.html","a7dc891c20114a22c73190382fe01d69"],["/tags/天澤夏月/index.html","b2c0847ba41b5731d67cd7ae44a436c7"],["/tags/學習/index.html","75b58f667f2c97a945e4e0a2ac5c6c8c"],["/tags/學習/page/2/index.html","24442b89adc512634d60989f9b06b50d"],["/tags/宮崎駿/index.html","d87368134ffd5908fe4fbbcd5974430b"],["/tags/小說/index.html","4c2d9745e0cb68450f0c66d89a36455b"],["/tags/小說/page/2/index.html","fa40f135f239ff86614e38cc2de4615c"],["/tags/小說/page/3/index.html","3517e06f96827e34667d5a1763197aa4"],["/tags/小說/page/4/index.html","a36f48532d4a2ce9bd5b0d7eb38b197f"],["/tags/小說/page/5/index.html","593d60775c5ed47378b6c2eccf977119"],["/tags/小說/page/6/index.html","741ba4aaddb81476ac66ff13a85491cd"],["/tags/小說/page/7/index.html","9cdc382f3a8b726609df93b7ff5f717b"],["/tags/平淡生活/index.html","d953e8ed9a4aac0039afce3c89845503"],["/tags/幸福/index.html","2778ce47a52e7b8c1855ba18e0f24868"],["/tags/志茂文彥/index.html","f549c6fc11a8a2b5d486f94beea71a88"],["/tags/愛情/index.html","767850f05e341d4b44f35ea17e6e00b8"],["/tags/愛情/page/2/index.html","e5b96e43d0a87587dc0fa10932b26667"],["/tags/愛情/page/3/index.html","0e6afc2a9997d97153ce1f4121fd7167"],["/tags/感動/index.html","3020fd6cd7c9ff6df4c199b66f61e791"],["/tags/懸疑/index.html","54a19512d7e1076667a7b1cbb5c108e9"],["/tags/懸疑科幻/index.html","b0b70b1aeede7850c5ba94dd042ebc1a"],["/tags/戀愛/index.html","f77b5e3ac57227b0e04f3fdd182d93a4"],["/tags/成長/index.html","5acd5821a4aabbf38a4cbf261fbf9228"],["/tags/成長/page/2/index.html","2e6bb3be351e3942edc614e156149e87"],["/tags/戰爭/index.html","17abf4170d0f6ead85a13c2209c29c8c"],["/tags/推理/index.html","d4d197fbc7cfced6cabd1caaf89b3867"],["/tags/搞笑/index.html","e94c379de657a49adda97ec744df3cd1"],["/tags/救贖/index.html","8534ee558d1dfc2ca60f6e50ed8c48a9"],["/tags/斜線堂有紀/index.html","6c532942abc311db51fbe575ed53ee0e"],["/tags/日常/index.html","0ee25b8ee87c6db88ed03979f6fb3064"],["/tags/末日/index.html","dfd541291a7256299934e66e4a2cf146"],["/tags/校園/index.html","1d2af0bcaf90c4f2118ccb1a3ed31f3e"],["/tags/武俠/index.html","d4935539fb844676e79a211858688fbe"],["/tags/武俠言情/index.html","ff83bf15bc8594a32f7d92d0ff3ec270"],["/tags/漫畫/index.html","07d5a230cf86c4574a8a11a4b0ac7b64"],["/tags/生命/index.html","b38c9f27c6ed4738d7480408aa14b158"],["/tags/生命/page/2/index.html","1a16ad71a8ca82769df61638306b097c"],["/tags/短篇/index.html","d9952342d1132ed340b28132b0afd77d"],["/tags/社會/index.html","b401276c8f4a809025a8d556e6436a8d"],["/tags/科幻/index.html","0c89f49881517299aaee495092e32325"],["/tags/童話/index.html","f3044a80bf527a3316f6e62264f005d0"],["/tags/競爭/index.html","192c28dfc096b2f31558f88039e55aeb"],["/tags/自我/index.html","458b9fdf61f3cb2b3ecfeda3d0d70954"],["/tags/自我認知/index.html","4a40ddf9b60040471514ff7a2de256a8"],["/tags/葦舟ナツ/index.html","a24e14a7fd6745d540a46142c0f2d1dd"],["/tags/藤萬留/index.html","9654083baacfe77633c577734b1fd1a3"],["/tags/親情/index.html","52ef598eb9936a5b20955c770fc61bb0"],["/tags/雜項/index.html","6ea055c4ad9d4230b3bb63c437d5ee8f"],["/tags/電影/index.html","69daf60f8e1f0e5b127e8695fe25da2f"],["/tags/電影/page/2/index.html","cad4e8089a6cad01adcff087054f45a2"],["/tags/霸凌/index.html","4c9033c6e7d47055a4c73e941ea66e83"],["/tags/青春/index.html","557a0b8bcf2004440906097eee5aa262"]];
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
