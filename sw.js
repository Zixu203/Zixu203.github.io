/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","6b566e993d679ec12556f636ad6f5edd"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","c983ce96e93f6e73eb56e132d360b367"],["/2019/12/25/Review/無法計算的青春/index.html","83f9cd6bac0b6aac2ed7d6f41d3d030a"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","3757f2bdac8e5110b707e51583b8089f"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","cf1ad930efdf87a4ae41b1904cd7545a"],["/2020/01/19/Review/下雨天，不上學/index.html","553d1e7e1e346174e0cfc4ff37ae9d6e"],["/2020/01/26/Review/三日間的幸福/index.html","5362bdc7f5c404636c624928bf12612e"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","bd144fc4cf73885ca7e5c40d3ba1b284"],["/2020/02/09/Review/青春期超感應/index.html","2b2fcf8644903deec3bf67b2086f8174"],["/2020/02/15/Review/又做了，相同的夢/index.html","3bba7c0f759e7e7795163d25e6b7099d"],["/2020/02/22/Review/回憶當鋪/index.html","b9b1c12e868934ef1be92691e9f28563"],["/2020/03/22/Review/不適合自殺的季節/index.html","0cc32c9902c77049f5c95e86f1fad2c9"],["/2020/04/26/Review/我們都無法成為大人/index.html","fdbcb904597d200625336fab1b73a530"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9a72adf544bdcc1865cd3122567c1d63"],["/2020/05/17/Review/人間失格/index.html","eeef89625b95c35fbd09b71fcbd5f7aa"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","12c804da5313c61c31a0b307136647d6"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","28dbe3bfe34f62906777f6d0f10aeecf"],["/2020/08/01/Review/銀河鐵道之夜/index.html","a66ee1ddc2e073dfc949e12288eeaae8"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","18c0c2823d1b3193e8500ee1244a431b"],["/2020/08/16/Review/15歲的恐怖分子/index.html","cf96ed52bca471d17aaddbcc04c1758b"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","cfced87ed3ecb13a9ca8f3ecad3f3757"],["/2020/09/13/Review/羅生門/index.html","d2a7cea55781902429bcc127131cb72b"],["/2020/09/20/Review/闇夜的怪物/index.html","63229c3a1df429a476c486ce19359448"],["/2020/09/27/Review/14歲，明日的課表/index.html","9237251e0873ed48dd29a458ffba6086"],["/2020/10/04/Review/致十年後的你/index.html","a15aca9e1fb78b9238481e11df527726"],["/2020/11/08/Review/滅絕之園/index.html","678e0309f2caf4cd295da4b618e6c656"],["/2020/11/15/Review/將愛拒於門外/index.html","318a0fe601b13f9ce3d8adb00012d309"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","6b17f7155f5ade9b91664d84dd96ebe3"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","7494ccf7691d497f5eee3646e008212b"],["/2021/04/22/Review/道印/index.html","cb4d99538cb384c017a1857591ee5b0c"],["/2021/05/03/Review/戀入膏肓/index.html","5f6111a16e4b16f45284cac4f9a788c5"],["/2021/05/10/Review/Dice/index.html","021136f27cc118cb84687df754b74f01"],["/2021/05/15/Review/魔女之旅/index.html","60493bab49a200bbde5f200b45f0edd7"],["/2021/05/28/Review/戀愛寄生蟲/index.html","9efb3fed37b1d8ccbe9fd534be381662"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","98dd6c90e9f30475963d6a3fa968833e"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4981326292cca49d29841994359e21fb"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","73519bfb3e1da3720f746ea19d04ffae"],["/2021/06/05/Review/流浪的月/index.html","ded84449a61b032d87db00b51fae9d47"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","ccac7a9f3e31e189b0dafed16f816106"],["/2021/06/13/Review/第一人稱單數/index.html","b3247f0b729610748b2302d7f673106c"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","bfef5466ed4123f8dc64f4de6f325fd2"],["/2021/06/16/Review/願你幸福/index.html","a4384171d39f0940b6d3bc89ff6ddc76"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","c5ea378b5ba504c4a0c0ae5fa273f20c"],["/2021/06/21/Review/神隱少女/index.html","175f0f7b1be27bf01cc6050489b9efcf"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","bc6d5ff484dbe924c87039c5387d7c8d"],["/2021/06/23/Review/天空之城/index.html","81449401f5026f812fe87b7cb9ec97b6"],["/2021/06/24/Review/魔女宅急便/index.html","8a5594853410305a52907932be3e45aa"],["/2021/06/25/Review/借物少女艾利緹/index.html","f717fe42504f17aea73c1091935ca863"],["/2021/06/26/Review/魔法公主/index.html","932414de0c8cc8c261922c6b30d0031b"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","4acfd87b03abd62f4f352d3b18b2a802"],["/2021/07/04/Review/飛雪與劍/index.html","18c47e35d4ea11482d93c1a15a4c1bf1"],["/2021/07/09/Review/地球防衛少年/index.html","b49f19ff83bff602fb4c2fb62934d9dd"],["/2021/07/12/Review/Angel Beats!/index.html","5ec354c0ca5a1386ce7a112fffa10ba5"],["/2021/07/13/Review/Clannad/index.html","5256bc56d47c19fdabaee80787157513"],["/2021/07/15/Review/AIR/index.html","98ef0af0b1bd9d3915ebb0810d722c94"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","5828924e03a4ecc4ff1104bc0171f365"],["/2021/07/15/Review/螢火之森/index.html","9f223a906873d7d113a77eda1af3139b"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","8b7830ad3b135fc6dd964a61f5af949a"],["/2021/07/17/Review/奇蛋物語/index.html","d3d72f00c0e3265a665cb296ba70b8c7"],["/2021/07/18/Review/Vivy/index.html","2bf94769407767281a942cec74d6543a"],["/2021/07/18/Review/請妳消失吧/index.html","b21e39832e473d2be1dc5f33be4238be"],["/2021/07/19/Review/漣漪的夜晚/index.html","4161c34d97d6e0366f3ad862d53ca06e"],["/2021/07/20/Review/月色真美/index.html","2120dab54cd59a85f4525c5b5d84be94"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","641c5a03bfe7aea4d049a022c91970db"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","d0d52839d02cb188ac9aaffd175da78c"],["/2021/07/22/Review/罪惡王冠/index.html","36ca180219f99ca6005b2320bb61617c"],["/2021/07/23/Review/弱角友崎同學/index.html","f6f0731a8af70aa5308095f895c6e256"],["/2021/07/23/Review/惡之教程/index.html","a86a5463a6f421be1a105985d621a4d5"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","6359ddcf52dc0bce3fd192afb3a258a5"],["/2021/07/25/Review/魔王勇者/index.html","71faef27d221c0b6121514b4931d5cfc"],["/2021/07/27/Review/一年A班的怪物/index.html","c74a3ef928fda91b110b14e89997bf27"],["/2021/07/27/Review/奇巧計程車/index.html","45e7b4205f9ca07a9a01e2f56995d64f"],["/2021/07/27/Review/專情的碧池學妹/index.html","f0547858cab2ad7a419a2c1fd1e497b5"],["/2021/07/29/Review/只有我不存在的城市/index.html","3bbdfee63c867a9ea9e49c35355d128f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","bfcda2c96ab4f3425cce1b603b69add7"],["/2021/07/30/Review/可塑性記憶/index.html","9ba0724326870d16d68bcce3bfe9e61d"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","bc707f152fbfc85b564a5d7545decd13"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","c2615b2fc5f3d637da8c57975ff43340"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","9ed3b56e8fe3d8686c00faa156f0b0f5"],["/2021/08/25/Review/清戀/index.html","9eb2d61f2e33c4d5ae217f9f827bd88d"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","9af98a57b07e40b151c0ac0209b0cb96"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","142f2c9b33dc64aadb653358e86b4f82"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","fce799c3e2a146e6549cbbaf203531c7"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","8e3b87613034ea9f2baa12724ce1db0a"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","eb7911b0322c06cbe61d2de9b33212b8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","1711704f4c849b698cfdbcd00dd8eb02"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","9ee4c6058527d906c574bea57b76b93d"],["/2021/10/16/Review/龍與雀斑公主/index.html","57b293fd5006b80e3de0e611a86b6706"],["/2021/10/19/Review/孤狼不想開後宮/index.html","b8bef5755330794d9af19a19fbec5ebc"],["/2021/11/13/Review/徹夜之歌/index.html","b1d3d067f90b8ea78216d389ea6b770d"],["/2021/11/24/Review/武煉巔峰/index.html","d8800aa584c82f7861969634f00a3cb2"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","cc9e90010ca49e9cb657781394dc546d"],["/2022/01/28/Review/神醫凰后/index.html","cbff42246d4d7eecad10b99dd029bbb8"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","b6f54e119c623d330f38971b180a91c4"],["/2022/02/13/Review/夏日幽靈/index.html","2adaf89eaa323aed3ae1da50a8b7bb1e"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","f565814d466f8f5be0c63e5d1baf6765"],["/2022/02/26/Review/賽馬娘/index.html","d2ca7efa001657bcbdfb9101710625d3"],["/2022/02/27/Review/大欺詐師/index.html","362e12afefb9d813c47ed35479c22ebd"],["/2022/02/28/Review/前輩有夠煩/index.html","e2b564411fc38f94f15a85df9428866e"],["/2022/02/28/Review/碧藍之海/index.html","94c5dd477ba5ff9b18221c15f2910fcd"],["/2022/03/05/Review/落第騎士英雄譚/index.html","b557a4d9f58ba290659026d4e8aa5c53"],["/2022/03/06/Review/Another/index.html","0ac607c12dbef6335914ad5d5be73863"],["/2022/03/06/Review/入間同學入魔了/index.html","3dc4ad0fbc8b87d723e129df6ecd2b5e"],["/2022/03/18/Review/再見宣言/index.html","a4f74f5e0373a38f229edbff2708609d"],["/2022/03/23/Review/生若冬花的妳/index.html","3cc0fcfbc74fd254c15514eabbd7a79b"],["/2022/03/25/Review/天之弱/index.html","418f023657695f7eecdaf77f4b708417"],["/2022/03/31/Review/滅了天道之後轉生/index.html","2bcea02a4eeb0b583f6d3f58b4d2669f"],["/2022/04/30/Review/泡泡/index.html","2aecd33884b0c5844ef502e1fe9db1cf"],["/2022/05/04/Programming/Dynamic Programming/index.html","6ed3d50d64a6100934d9bdac07cf3871"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","17d1698c6ab91a04c4d21d4b56f5ee7d"],["/2022/06/13/Review/偵探已經，死了/index.html","8c851639f937d76af02578d882c99ef8"],["/2022/06/14/Review/黑色子彈/index.html","091411438a60e409352cc708caba242f"],["/2022/06/15/Review/黑白來看守所/index.html","ea4caa81135cdfbb5beec3e95c1c3890"],["/2022/06/16/Review/虛構推理/index.html","0346a0ce88e640fc0525aac2fc458511"],["/2022/06/17/Review/戀愛與謊言/index.html","181694b20420e4e3ed99266dc3f91097"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","0762a0953a30d200564eb1cc1ecc4552"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","dea24c3ba3f1aad9600e68c6306dbbe5"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","9a43cc4d9f5fe68ea2d0022daf5beb60"],["/2022/07/03/Review/Hello World/index.html","85e08a5ac0c9ce3d7d91aebea592d483"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a2754c6aceb59bd4eed2fe28edcfbf61"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","61f6a7740593228db96d0aa68f372cab"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","376156025315c2d0f09b5b16bda29b89"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","669d8e45cc38e2079028456467799530"],["/2022/07/16/Japanese/動詞分類/index.html","3a4a2769eb889ebd902a017c0c11fe23"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","828d2c3fb8c119dc3e574d0d4ff7e346"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","430214d43fb932043f633d44ed61b043"],["/2022/07/17/Japanese/音便/index.html","34baeca894f08422baf87843cd0e2d2d"],["/2022/07/18/Japanese/動詞 時態變化/index.html","aeb2cef4aa150f992cf6d6f233741ad4"],["/2022/07/19/Japanese/助詞用法整理1/index.html","1aaee9c8c076ef143cd6f61b80743e21"],["/2022/07/26/Japanese/助詞用法整理2/index.html","9aa0e7a00a7b55d5b8ff4ae596589a2c"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","66cd18fee483fae9b9a3491e884f7dec"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","c240a0b89427ce47cb667bd49e4e8f24"],["/2022/07/30/Japanese/疑問詞/index.html","2ab32e392494eeda336ed71c39fd5956"],["/2022/07/31/Japanese/助詞用法整理3/index.html","5029080d73be0944b63165893c7847d3"],["/2022/08/02/Japanese/副詞整理/index.html","c1d073bfb1f1aac2d95f871de97c25b4"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","1cb467040f6478fbaff38ae6e2104ce2"],["/2022/11/04/Programming/Data Structure/index.html","17e654b60fbf28d36ef96672fa26a52d"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","4f388628927d2f99513a2001504da369"],["/2022/11/22/Review/組長女兒與保姆/index.html","e087c6a17f7408194a41ea365267ee68"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","4e7f8c47acc0f78a9182f9bf0f84f0a7"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","ec58206c826b65ed1e9290aef5a1fd5e"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","520580c77852db65e470b93e949dc80a"],["/404.html","53c8fe4a989af5e2eb2d765f95b2973f"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","95439d9fd415ddbb347a5e23568c5a6e"],["/archives/2019/11/index.html","995c920c88151753ea4c8d92c87643d2"],["/archives/2019/12/index.html","41eeb93f77f1ba2f43ccd2c5d56c0430"],["/archives/2019/index.html","2bce6bcded239ee49b5eb631da27ccb0"],["/archives/2020/01/index.html","f5ba7b6619cdd78cc22142598a1ac240"],["/archives/2020/02/index.html","5c654c039eb6885ffe3a8d6d608c3953"],["/archives/2020/03/index.html","1eeb4c55b8febb2e7630fb54dbad3bda"],["/archives/2020/04/index.html","211b0c7f72d2da1551879788f2ac1437"],["/archives/2020/05/index.html","fac2d142df3d034a09f0b8af9221a17a"],["/archives/2020/07/index.html","ac85e7ac3ac138547361aacd81dfd51f"],["/archives/2020/08/index.html","3cec5510b78d679df967fb6601573dbe"],["/archives/2020/09/index.html","a7b30114ea9818a9ada08eb256498bb4"],["/archives/2020/10/index.html","a7a09a4d77bf6a7f2572b5b3e48ccf21"],["/archives/2020/11/index.html","b9809e8feab9f0f8da39a0048c2046f1"],["/archives/2020/12/index.html","d8a3dd4bc661c03430f206cf2ab88de6"],["/archives/2020/index.html","d459c8db0d5ddfe57afa061af1fc95a3"],["/archives/2020/page/2/index.html","43264f9e7ce5170b0f162e644f0069ea"],["/archives/2020/page/3/index.html","0d59a220b1e185a3e4fb1291a83e2dbf"],["/archives/2021/04/index.html","8165c379e8655f8551fce92bf546d8e6"],["/archives/2021/05/index.html","acf75d479ae8b129998d2fba80f53566"],["/archives/2021/06/index.html","54010329a1219c3e4ba0bef8412372db"],["/archives/2021/06/page/2/index.html","ec9d85a725ef1e032e5f179668eaab0c"],["/archives/2021/07/index.html","50ca166c785b3923208ee060b851735a"],["/archives/2021/07/page/2/index.html","9119239bb3a51136cbc575c056ab61c2"],["/archives/2021/07/page/3/index.html","2b44b1f0a940173f658b2ca6f8ae40b1"],["/archives/2021/08/index.html","262ab52e8289627ae5c3843a2e6f8da5"],["/archives/2021/09/index.html","8a167da5cd498e000006a05582b0e9d4"],["/archives/2021/10/index.html","4b0b7c9d59d27d3e37b64d26b5ad06e4"],["/archives/2021/11/index.html","0c982f33270d52fec50cdd9ae6a1e761"],["/archives/2021/12/index.html","03610db5697395579aef8b832c9da900"],["/archives/2021/index.html","38b6309b4fa51b0d464512ac0b0555da"],["/archives/2021/page/2/index.html","ee3db3c718981138e7ad35e4dd7d1c05"],["/archives/2021/page/3/index.html","0d1607eabb4a001cd462893d6614aa5e"],["/archives/2021/page/4/index.html","3a4dd6dbb6e4bf4685ab09b114e58f12"],["/archives/2021/page/5/index.html","dc59ef824deaef69ce733d73d515febe"],["/archives/2021/page/6/index.html","8b16c1a3105ec92b1d157af92c305adb"],["/archives/2021/page/7/index.html","4c5401b693b5c0f6c969bd7796acedd2"],["/archives/2022/01/index.html","2deb44213a38e664aad327ce921db910"],["/archives/2022/02/index.html","af2fd8ebbd63e109960c89d39abd805d"],["/archives/2022/03/index.html","180113155dcb59c079ecbd841c1d1a97"],["/archives/2022/04/index.html","8dace6418dd63a1a3eea5a0095f99582"],["/archives/2022/05/index.html","97e2f886c3160751897303f5dd639ef3"],["/archives/2022/06/index.html","7113660d5f01252adac663212e7fdafc"],["/archives/2022/07/index.html","ecbee13aea35bd55f59cba22c5895d74"],["/archives/2022/07/page/2/index.html","6e400e5804fa524eb51db6ac7ddd7867"],["/archives/2022/08/index.html","ec7f5f41f99f1c82dc0b3cde0a336343"],["/archives/2022/11/index.html","65c9834a31761f7c2239fe6c373b8cef"],["/archives/2022/12/index.html","161e62df5e12780c9512dae509b1fbb0"],["/archives/2022/index.html","6f71b8b0fe4fd395fb398b19738ea0bd"],["/archives/2022/page/2/index.html","ceb67c743aeb2ac4bc9945c7d896b22b"],["/archives/2022/page/3/index.html","c03475a852851775a45134f4cab51422"],["/archives/2022/page/4/index.html","8a484b35c6fbee44330b5dd77da0892d"],["/archives/2022/page/5/index.html","f63c213057fa0112ef168e4b137b81fb"],["/archives/index.html","7b78b6714bb2084ca0e6513af4c741c6"],["/archives/page/10/index.html","7a51a02b1bc79458e1dd9a2f67a66006"],["/archives/page/11/index.html","e7d607e346d6b9650100113c70c92264"],["/archives/page/12/index.html","84aad4a5163334ba827d960e98e62545"],["/archives/page/13/index.html","46de5183712ac73665cfea56e60398f3"],["/archives/page/14/index.html","1219e15d4f8905149bf636c9f16a0044"],["/archives/page/15/index.html","d02dbbfcf84947a503e650322142a57a"],["/archives/page/2/index.html","4e2bbaf372f0f22fc542d60d30690710"],["/archives/page/3/index.html","30bf8362f54198933dc0f2fa67642879"],["/archives/page/4/index.html","d8069c1e82894d4ff891574301fa55b0"],["/archives/page/5/index.html","c2323bdeced5cb93e45025f4335d135e"],["/archives/page/6/index.html","4943a25b4b88597025bde76fdcaed43d"],["/archives/page/7/index.html","61a96a7ee27c70156886971a5b078320"],["/archives/page/8/index.html","a81f769115314a5dfbd6062a84940110"],["/archives/page/9/index.html","36efaea67320fc10d29b8513852f56d3"],["/categories/Programming/index.html","481f710d148c41f726d54bf3b9134d6c"],["/categories/Review/index.html","6e1c22470b61e868d576788302351dcf"],["/categories/Review/page/10/index.html","5f8ab8ec2bdb909187df3b66bc1b6c8c"],["/categories/Review/page/11/index.html","6fe961bd319070663646b165af63f2a8"],["/categories/Review/page/12/index.html","4e07dfe4b5b572c5b8619b904c33c4d3"],["/categories/Review/page/13/index.html","9d55824568516aea5d896e37769411d3"],["/categories/Review/page/2/index.html","1b0ffe3cbba68b9338b97c716ae78743"],["/categories/Review/page/3/index.html","374745cf3e16f795929f8e86f80e0726"],["/categories/Review/page/4/index.html","52b4fbd862ab4e2db41a9bbf4c573a18"],["/categories/Review/page/5/index.html","95b4725fef513a9d63eee05b92640854"],["/categories/Review/page/6/index.html","e7869aa50de59710f2f10a3203fe367f"],["/categories/Review/page/7/index.html","0fe95b88752c2c69a32f2a6eddca444c"],["/categories/Review/page/8/index.html","5514334af767709ccd087826c09baca1"],["/categories/Review/page/9/index.html","0ffc25c96cc7db82b8be58925461062e"],["/categories/index.html","9782b2f2cd7c12f9b810adc481d65085"],["/categories/日本語/index.html","c057905695bfc3b79d714e48feaed185"],["/categories/日本語/page/2/index.html","d0218056502fa91da942c85b77e84a59"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7a4d72ca08de7439d72da3536e7f7221"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c31fe26c7f6b0f5d80d3dde1c7f89e77"],["/page/10/index.html","c41d2386d180a6cee23c96eb2effcde2"],["/page/11/index.html","94ddb19705f8257fec43c3481ecc1c34"],["/page/12/index.html","69696752d714237aa62fa74649e90b5f"],["/page/13/index.html","768b2cc1647b7b9136ffaf3fcf6d16af"],["/page/14/index.html","6fe3ecff48947e2507cdea673133fe9c"],["/page/15/index.html","cd4432ad99e83ae0366e347109e6e346"],["/page/2/index.html","18fa3f7e39f3ea26d88e220efcd4aeb7"],["/page/3/index.html","c09ac6270e7325d2fba2e0765843932d"],["/page/4/index.html","f382363705fe12e6dba5093889135e73"],["/page/5/index.html","30c5a1ef07b84fbdef5ed895d316b38e"],["/page/6/index.html","6351f831aea26b3d21a0713cb0e12e3c"],["/page/7/index.html","20071b63bbf79210be679ebaa519def1"],["/page/8/index.html","186551510cb1e1dc5594d13aa90b926f"],["/page/9/index.html","712620cbebb38f8b944850ba8d58ccfd"],["/sw-register.js","56769c539b8dfdfac6eb6898873d34fc"],["/tags/10分作品/index.html","3452ff45c50abd71088da83530688e04"],["/tags/3分作品/index.html","c8e4a976e87d539f6465e37079109fc7"],["/tags/4分作品/index.html","09edd893e6fab067f49b0324ff3f5045"],["/tags/5分作品/index.html","727a683f1409e8903a502c66a83b57e0"],["/tags/6分作品/index.html","bf81549ad5fc01fe9de5c4265ec6ad3f"],["/tags/6分作品/page/2/index.html","583200c4dbef72e1e5471146dac9802f"],["/tags/6分作品/page/3/index.html","8a7711449c451651dc4d52e9badc917f"],["/tags/7分作品/index.html","cfe84b2bfaddac9a529ceb8d78edd8d4"],["/tags/7分作品/page/2/index.html","9331b5a7d74624c9059bbca67df886c6"],["/tags/7分作品/page/3/index.html","1c15ea09a60e078b80f23ae959f8e0e7"],["/tags/7分作品/page/4/index.html","110f9db8043d19ee70ec4138956e016c"],["/tags/8分作品/index.html","5fd64369a1a43101d2150eceeaa8e861"],["/tags/8分作品/page/2/index.html","090a0b891e438e9d4faafa08f387dab4"],["/tags/8分作品/page/3/index.html","74f28c154a8a539b1b2f22607b2712c5"],["/tags/8分作品/page/4/index.html","70e98496b68c90ed092cb142fa7f412a"],["/tags/8分作品/page/5/index.html","7240c88f6342e8fa8a86ef62e2a921ca"],["/tags/9分作品/index.html","c548854d0a7697261e93cdb4d6913074"],["/tags/N5難度/index.html","eddd814f7a14bc46c80b9aa127966ecf"],["/tags/N5難度/page/2/index.html","b1d2cf39488bebafa8badcc3a27c1643"],["/tags/index.html","9cfc400397e502f8405afae2731211a7"],["/tags/アボガド６/index.html","b3c2832587e0d69378a77e8019a5538a"],["/tags/三秋縋/index.html","cd4ad7bea7e34e4af4adcf1ccb23323e"],["/tags/中國武俠/index.html","b015b64f8dc12b4599e6a7e01ac9670f"],["/tags/中國言情/index.html","cad25b390327252e1025574115bd633d"],["/tags/二宮敦人/index.html","c9955a9117ca5cf2d6fa4e1e96ddd016"],["/tags/人性/index.html","ee9169b9e561d9b268d5e05dda37bc05"],["/tags/人際/index.html","b78d516a8fd519a86397ad5e4be2be7e"],["/tags/住野夜/index.html","ff384ed04c2a73971c006d3360711633"],["/tags/佐野徹夜/index.html","2f7eb33431dda30c95296c058362432f"],["/tags/努力/index.html","93e58e4611045d03514dbc6b1d4a5964"],["/tags/動畫/index.html","541bf073e415df6a10de05996cfd7781"],["/tags/動畫/page/2/index.html","2a884387e0510743c98aed349048d99d"],["/tags/動畫/page/3/index.html","6ece4c0a6bbdd8b25950fa1083f5567b"],["/tags/動畫/page/4/index.html","71a5b94f8ad2a24801e497b28756acdc"],["/tags/原諒/index.html","003218393b7cdb4410a68bbc90e1def8"],["/tags/反烏托邦/index.html","6e29d89f29f67c152e2316f5862284f2"],["/tags/啞鳴/index.html","44eda9b673a05511c4b36bed9c1797d4"],["/tags/喜劇/index.html","7bdddc58de34a61702ad8abf0d2b4a84"],["/tags/夢想/index.html","2c8b263f83981c74a8a96b32e1b6abc7"],["/tags/天澤夏月/index.html","9432a6dc06fd85f2562ba9ea2f0708d3"],["/tags/學習/index.html","0e13aef8c023c3966e10485feb68816f"],["/tags/學習/page/2/index.html","29e54040f0ad3c0b016b7f0cd84a0849"],["/tags/宮崎駿/index.html","3bf05855f57085a4e5e6c9dba2c2b0e4"],["/tags/小說/index.html","72881a3ed97835b68ae17f6623ae58b9"],["/tags/小說/page/2/index.html","9b0e04e5f8e0a46526b0aad3a82b8a6a"],["/tags/小說/page/3/index.html","36d44370e4e1986ca95ac4323888bc84"],["/tags/小說/page/4/index.html","e0128abd7e37fa508febba9874887732"],["/tags/小說/page/5/index.html","3a8a75a77712de5229215a1c0bad3c2f"],["/tags/小說/page/6/index.html","c83d490ef1012cd45538a5925c94bdce"],["/tags/小說/page/7/index.html","3aae6e0d2f3dce29b4e2e4582777cad2"],["/tags/平淡生活/index.html","0c03562c15d41d8aee259aa0c281e8ce"],["/tags/幸福/index.html","f0d33f70101475fe43876ab43d4a7a20"],["/tags/志茂文彥/index.html","40714743f22f8de6ab6cbe94229bf5de"],["/tags/愛情/index.html","df8598ae4dac9c2f59cf06cf323cab14"],["/tags/愛情/page/2/index.html","ac95e42d1db2019b422ef14611da5fb2"],["/tags/愛情/page/3/index.html","4ca78a02cfc1d9241d9b91da90a7b49b"],["/tags/感動/index.html","798795d3832261183c5291dcdcd627f2"],["/tags/懸疑/index.html","6cd456bda690b1cf62802afe2f78e641"],["/tags/懸疑科幻/index.html","f58faeaafd5e5620a19db617c12b71ff"],["/tags/戀愛/index.html","b34906fcfbf00865865c4a402cfed745"],["/tags/成長/index.html","cb3ad7ab231dae645aebf1aeaee66259"],["/tags/成長/page/2/index.html","f853ca5a730b61e2b2598f094f352a30"],["/tags/戰爭/index.html","3d651673a42a5d2c6ef5e0c99e22792f"],["/tags/推理/index.html","0a8b8bb36a6f7afd6f6b98d0fac0f05a"],["/tags/搞笑/index.html","0e901345197717832bdecd4c9bc94dd8"],["/tags/救贖/index.html","4d26576bd06dae0b3621599d60716920"],["/tags/斜線堂有紀/index.html","bb95f3e4c3c1f841415586f2bca249ea"],["/tags/日常/index.html","1097902dce132be0ed12bb47cbd5313a"],["/tags/末日/index.html","c1d1591475e69ae48d8b1c86f9410755"],["/tags/校園/index.html","27825a64f346947ed5c993c6d31fe1e7"],["/tags/武俠/index.html","1f537d06531ea907c5d3294b40ecda39"],["/tags/武俠言情/index.html","39337cf917d9e116e8c0fe714b042fc6"],["/tags/漫畫/index.html","41082d927a99eb17422944a93788ac23"],["/tags/生命/index.html","69193daf138486eaba9c06b714135bbf"],["/tags/生命/page/2/index.html","829899606918d5c14cd393247348ec23"],["/tags/短篇/index.html","6245ec9ec0c8a22d214d29fb72f92912"],["/tags/社會/index.html","776372fd231c91353e0726e951b93531"],["/tags/科幻/index.html","987ab4e2a90b00ee5214bb7fc844be87"],["/tags/童話/index.html","20f698e007544f64345179adb555c6fd"],["/tags/競爭/index.html","b67d572b545d877a23b0ec7e5cb80546"],["/tags/自我/index.html","dd74abb0eb2a5b043d88d2808587c99d"],["/tags/自我認知/index.html","9adf688e684461cb4831ed94e807d8ed"],["/tags/葦舟ナツ/index.html","74698cec946acd097275db956f98b257"],["/tags/藤萬留/index.html","cd6628c0dbef0621e8697f19e591c1ed"],["/tags/親情/index.html","9f2c6b7632b5caad055a48ca20923fdf"],["/tags/雜項/index.html","ff64f2400450b73cf96c8464ccf356a3"],["/tags/電影/index.html","75ae611ca568c47c7323b2ded608d1ba"],["/tags/電影/page/2/index.html","27942e604923315abd05ad9120cbedd2"],["/tags/霸凌/index.html","2502c8f98e54ccd067843d9dd3ed966d"],["/tags/青春/index.html","7e8155b4924f7da872e83ce835ebc1c1"]];
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
