/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","d1ec9b5ab44f50db79e9116775ba224c"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","90ed5a9a7ebb0977ada0db4d904a5bc3"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","11dab5269bd9be39ce4b743b9ac565a1"],["/2019/12/25/Review/無法計算的青春/index.html","ef7b9c2f78427f18695c8b7cd11d3596"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","fcef91e79e804e5d595c3c0dc7c6d06a"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","d9958b406075937dfd1010dafd0cd1b1"],["/2020/01/19/Review/下雨天，不上學/index.html","08fad7d4b4d2da95c4e0db535f767c02"],["/2020/01/26/Review/三日間的幸福/index.html","65ef0a37ca9e600df4910eec5ac5ec38"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a45566bd68ad2158414c567e2c304b0c"],["/2020/02/09/Review/青春期超感應/index.html","5645a3f3150ccc956f114a5d38eac89b"],["/2020/02/15/Review/又做了，相同的夢/index.html","3e700b24e61504cc73f64880f1b9f5bc"],["/2020/02/22/Review/回憶當鋪/index.html","3b11711925103915fea3db54396f08e9"],["/2020/03/22/Review/不適合自殺的季節/index.html","5001e22070f6336902cd7d671cbd9a28"],["/2020/04/26/Review/我們都無法成為大人/index.html","ac899942d7ee9f617c56f75adaea8e71"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","1b0633d07dcd4cee8d917dcc93387c33"],["/2020/05/17/Review/人間失格/index.html","211cd14a309418ccf07ae7a54cba6815"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","d655ac3d56deb02fcdba6d90c3805394"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","b67cf5abbfce6ef3aba266cd675b4af5"],["/2020/08/01/Review/銀河鐵道之夜/index.html","e317627406fe82c0f0fef1c42bdca09f"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","703e2f734613a71e03ed6a5a58807cda"],["/2020/08/16/Review/15歲的恐怖分子/index.html","8dbe837733b405b6c75d5348336f3dbe"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","76583be5cc154ab4a9214fad783ba965"],["/2020/09/13/Review/羅生門/index.html","711ded556fbf283b5d22cee644db1261"],["/2020/09/20/Review/闇夜的怪物/index.html","8180d6ad316d8a631c24362dbd220149"],["/2020/09/27/Review/14歲，明日的課表/index.html","cf0c5e558591158918cd10f5994b21eb"],["/2020/10/04/Review/致十年後的你/index.html","b9d4cdbcf41cc54ef133bad64da2caaa"],["/2020/11/08/Review/滅絕之園/index.html","14cafef9c210b9b0fc4ec272296626ce"],["/2020/11/15/Review/將愛拒於門外/index.html","91ab60d67339818582574e9e40793670"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","bd3fa3fa38ae2faffbf700408c63be5e"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","4e9bbb2dbd777f7492249bdca606bb9e"],["/2021/04/22/Review/道印/index.html","2626821cb9dbfcbff7e69b46f83f26f6"],["/2021/05/03/Review/戀入膏肓/index.html","4ed8771d19cfb24d152b655970bda4ba"],["/2021/05/10/Review/Dice/index.html","104230a825e44b856338907f7df22b76"],["/2021/05/15/Review/魔女之旅/index.html","bdc68bb7d7ca249e3b8ef285dc39d72d"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8853ef55bf21123190d359a73cff2cce"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","ed815d611e8ea0d90ee7f697e0fe4141"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","18a65a6b146e9144d33520d21c0bc450"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","06df21696405d609522a1e98522fe15c"],["/2021/06/05/Review/流浪的月/index.html","688aaa22667c5276c89ebf017ba3a55e"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","91a272b744c80c0356444f9bc192e052"],["/2021/06/13/Review/第一人稱單數/index.html","343a9015bba499c83861f4df11e6b24f"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","c106db23abf85da377a46270b859179b"],["/2021/06/16/Review/願你幸福/index.html","335f65845e36d82d22f1d0a43abaeea5"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","087dd0fc289a90f9ceed5d90ddbc94d8"],["/2021/06/21/Review/神隱少女/index.html","08d79452601efc37e58c46f3cccbe7a2"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","58671a75680b61e4f6fb5b57348eeef1"],["/2021/06/23/Review/天空之城/index.html","218b7d7fc833c1704ee9fe65236590a3"],["/2021/06/24/Review/魔女宅急便/index.html","f07bcc2e39be4a95920fcde3eb54acdf"],["/2021/06/25/Review/借物少女艾利緹/index.html","3c61ba4baeaff26d7c8a8516b647a5f3"],["/2021/06/26/Review/魔法公主/index.html","4e6e30f6678b3f2faa8b649a83984ec5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","8cd35de34faf180bf1090b6e3d4b46ff"],["/2021/07/04/Review/飛雪與劍/index.html","23bc776d0143d524c8287ad0b283398b"],["/2021/07/09/Review/地球防衛少年/index.html","33431082b14149d4bf311008cf83c4c6"],["/2021/07/12/Review/Angel Beats!/index.html","4418e8469e8285b4eabb5bf996b1f359"],["/2021/07/13/Review/Clannad/index.html","c1f73c18f71f43d554b18e708409b081"],["/2021/07/15/Review/AIR/index.html","7add479aa5fdc2fe1809d18f5e4295d1"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","0cf140aa3c3dbf29cc77849c40556ed7"],["/2021/07/15/Review/螢火之森/index.html","f1cf77820904594f056c0f71f7bf3bec"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","8c658988b7a2aef504efd0841f7cdefb"],["/2021/07/17/Review/奇蛋物語/index.html","784fe1054dfa433755b6e6b970d4bb88"],["/2021/07/18/Review/Vivy/index.html","3d4943a3b90311018bbaf8cbb0b61474"],["/2021/07/18/Review/請妳消失吧/index.html","1d9b2b2c2fca16659ab605fa3115d004"],["/2021/07/19/Review/漣漪的夜晚/index.html","b35563b0f51e0238485d06c6b2b8e631"],["/2021/07/20/Review/月色真美/index.html","524328e28e9b123586413bfb8192d3e8"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","d418ab8ec40227c5c01bed8007056d3f"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","4dbae7a488fd45da8cd6d1634542df8b"],["/2021/07/22/Review/罪惡王冠/index.html","b3352163bb57b1e8c0d0b5f7e356d330"],["/2021/07/23/Review/弱角友崎同學/index.html","54ccd7fa8957dfc87e651d0bbc8d0370"],["/2021/07/23/Review/惡之教程/index.html","938972cefb921af423ffc1d3d6bcc28f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","fa24a8696d883b29895cb9f67149e33c"],["/2021/07/25/Review/魔王勇者/index.html","d550581771a3fa838d926d489465f2c1"],["/2021/07/27/Review/一年A班的怪物/index.html","b4282171c83132280056285557d9d30a"],["/2021/07/27/Review/奇巧計程車/index.html","9d9af809450e11dd0fdc58e7cf0b2dbf"],["/2021/07/27/Review/專情的碧池學妹/index.html","936a633dfbc24969600b82177e372963"],["/2021/07/29/Review/只有我不存在的城市/index.html","ca9f5063e11f4deb7421c9ac72cdfa1b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","716253b6e36b60673ce0afe6bfe7a114"],["/2021/07/30/Review/可塑性記憶/index.html","503f052d2f365f7052efbc9a8968b2ed"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","ac0db0c66f82ae92f744cd6a319db514"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","4f507a62e53518c610b5a4ab42fe82e1"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","bf34defc1ebbc09b810152bb23020003"],["/2021/08/25/Review/清戀/index.html","527da5e845941335c540621845c41346"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","fef1d4781329f0d64228a1985612850e"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","75f695048011d937b79e9954ec1a53c1"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","7f44ffe012b3b63ae374a2e1fcbc1fe6"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","069c4869cc320d70643e1aa9fc111f96"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","5db68ac4ddf2d1cf04803fa34479e041"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","894e32c5dc7c45ddee4620b19b1ac530"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","d02ee1e180b3c5ac77be726c85a05110"],["/2021/10/16/Review/龍與雀斑公主/index.html","e29c4d43ddaa093cefad3c81df9945cf"],["/2021/10/19/Review/孤狼不想開後宮/index.html","544957b845f3a77435ec4bc2e8466ddf"],["/2021/11/13/Review/徹夜之歌/index.html","c6971ff21d53e500375e7c35018bfc31"],["/2021/11/24/Review/武煉巔峰/index.html","8884449bec0850b048d3716dfef794fd"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","86ecb490e9d9c251f3f08cba89d337b3"],["/2022/01/28/Review/神醫凰后/index.html","70bff1e8290dc72d10de68f4ccb7dee5"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","1655b7f302d0c9cf8587d7fe17f531f8"],["/2022/02/13/Review/夏日幽靈/index.html","b84057e15365c9e1dffb12cf22c89cf5"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","4d06bcb2cb394739b8d1c0e0df77d638"],["/2022/02/26/Review/賽馬娘/index.html","edd3dd735bf252746a69f2e0174029c6"],["/2022/02/27/Review/大欺詐師/index.html","c044cebcd5ef17449e87dccffeef28bc"],["/2022/02/28/Review/前輩有夠煩/index.html","d6d164f41e4edc8fc5c5a25636a51b46"],["/2022/02/28/Review/碧藍之海/index.html","6be327621c3ba09d57a2b90b9aa095eb"],["/2022/03/05/Review/落第騎士英雄譚/index.html","5d603d260251b4e94500c5bbba5dbd43"],["/2022/03/06/Review/Another/index.html","04d840147412a755872a90610d0e4e83"],["/2022/03/06/Review/入間同學入魔了/index.html","0b8ae753f01f35621f53902c728cd076"],["/2022/03/18/Review/再見宣言/index.html","faae4159230893b32e8ee99e287d8d44"],["/2022/03/23/Review/生若冬花的妳/index.html","c6e6d094bc82f285311b74ea2ebd1a14"],["/2022/03/25/Review/天之弱/index.html","89c35f834027b9641062bdec77d48146"],["/2022/03/31/Review/滅了天道之後轉生/index.html","35314f530a3b05253a984ea0b6aee0b4"],["/2022/04/30/Review/泡泡/index.html","1b59399228c76ff757e388f192ce0f47"],["/2022/05/04/Programming/Dynamic Programming/index.html","3f106154fc2939c123549c8cb3dea762"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","0b2426af5ffeef92aafba640bc137ac0"],["/2022/06/13/Review/偵探已經，死了/index.html","4029b787e0f949af3039e97264800b22"],["/2022/06/14/Review/黑色子彈/index.html","159845988462f82274fcbc5d1387cd52"],["/2022/06/15/Review/黑白來看守所/index.html","f79521c089cbac8a0d630568ecce1292"],["/2022/06/16/Review/虛構推理/index.html","ce3754f4fc3a884b34404516eb25f865"],["/2022/06/17/Review/戀愛與謊言/index.html","4f6647684612ea8d1e58f65d45e03e62"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","793ffaa2b702d97c64a3a8d11c7c4b13"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","65506ad70f8c12d9228ad780d4ca2791"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","af8d485991b2f21f0642274f350b1ada"],["/2022/07/03/Review/Hello World/index.html","009abbcc0bcc37f8e1a4a45ce2dfcb23"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1f1b823e8172a183ba71572668778633"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","c951ea5303eed4ccdc9c0e5dfa7ee2b1"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","31e4b2aa07bf029bb2e025c3fc875a9c"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","cca2a2e241e1041fe4befc81f59bc021"],["/2022/07/16/Japanese/動詞分類/index.html","420c58396858f7cfc22a31b0824cdaaa"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","6b8e5348618e38b67947b426d26cbdb2"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","68113d8943a178e5030a6bcb73ebf619"],["/2022/07/17/Japanese/音便/index.html","1b2d4400e613cf620eae9cba287496f8"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d95e744d654b44284e8509895b59b1ff"],["/2022/07/19/Japanese/助詞用法整理1/index.html","2442c5ddf028e59020376f775de405cc"],["/2022/07/26/Japanese/助詞用法整理2/index.html","87d85ffc7e001692aec3cf385f8e9f60"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","ec93b0ccf4b56804cfd5d45b22987822"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","8fc2508748c9980e9a2d226dead93bc9"],["/2022/07/30/Japanese/疑問詞/index.html","aba3c0afa850e4ad3aafdc805d5b5a69"],["/2022/07/31/Japanese/助詞用法整理3/index.html","13c1c7066607df7a53d0fdc0eaad0697"],["/2022/08/02/Japanese/副詞整理/index.html","7c9107d2842cd4057b6c5cc511478053"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","b0871cdef492e656610e46032b9605f5"],["/2022/11/04/Programming/Data Structure/index.html","daa8c5734756659aad194160cea03681"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","8e8a339b013350d0dcab5d6baf7a479b"],["/2022/11/22/Review/組長女兒與保姆/index.html","c65554e582061df88632a88f33117ae9"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","39b2ae39f39710c43d7c93a9fe9c9ee0"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","b8ca36e58319bf0e9df121a9c84b83bf"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","d2ffc5ea41b42baa5ec1bec58804fc76"],["/2023/01/01/Review/あの夏が飽和する/index.html","eb7ccbcc309d1b6c2cf810e677c07c12"],["/2023/01/02/Review/孤獨搖滾/index.html","72bd817d69abfaa0bbe194e49a21627a"],["/2023/01/03/Review/來自深淵/index.html","31676c22cf929f4a5b75233792f45946"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","3fa568f57e24688da7f9c3f94263dc13"],["/2023/01/05/Review/處刑少女的生存之道/index.html","bd8a91d3afe50f001b2cc27eccd25fcf"],["/404.html","ba61018bcdfdb42edbe2e0e10c1c36a4"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0d04ad13c969f7cdb1b17c7a4b38ba9b"],["/archives/2019/07/index.html","1ebc4741b3241426e6939f4219ed6ee2"],["/archives/2019/11/index.html","b858a89663802d3c17ec12b286806c94"],["/archives/2019/12/index.html","2a598184dc01dc6f66b8fcd47092c23d"],["/archives/2019/index.html","491857dcba24e97e09fc49d8997fe143"],["/archives/2020/01/index.html","8c981287722bcd1886ba011252829075"],["/archives/2020/02/index.html","5e6e3c9bb225cfa3edbaf8b890631c92"],["/archives/2020/03/index.html","869f21d4eb0e85d2c2362225d3fc651b"],["/archives/2020/04/index.html","b0c9247c5a2877686b302b7d9d286946"],["/archives/2020/05/index.html","967780425e50daad3ffe3fae9b282549"],["/archives/2020/07/index.html","988b8aafb1bb8e85c4f0b596af5a2612"],["/archives/2020/08/index.html","c0e86144071e071e95729479e1a6cb93"],["/archives/2020/09/index.html","b979d0177be055bec8fc1e9bf03816fa"],["/archives/2020/10/index.html","ecf8cc959d3ce337f0e9ea579f439c09"],["/archives/2020/11/index.html","038c22ecf4876bb695dce7681952d1a9"],["/archives/2020/12/index.html","6373c8be0d19065445f5936c9a6e7fef"],["/archives/2020/index.html","19be3903138082d86ff37ee744153589"],["/archives/2020/page/2/index.html","3df50551d4771bcbc1a57d610816339c"],["/archives/2020/page/3/index.html","dff10425485e57fd036413722464302c"],["/archives/2021/04/index.html","9e27d24a3f80b24a85c7abbf8b10ab1a"],["/archives/2021/05/index.html","43527d9c3914faaba24931b83c0e1f58"],["/archives/2021/06/index.html","3ebd4a0747c01bec62c8b19c463c263c"],["/archives/2021/06/page/2/index.html","70a8f025872926664c163242c13fe6bf"],["/archives/2021/07/index.html","ab12c9df5d67fa898cac5b439b6663ec"],["/archives/2021/07/page/2/index.html","805fc6a469dabaed61598aaf129ccb55"],["/archives/2021/07/page/3/index.html","e0e29367775dc97eee569b8ad73beee2"],["/archives/2021/08/index.html","8f8944473b24dd725f0191c3cd2515c8"],["/archives/2021/09/index.html","36794d3c39da01f10c942c87a713d358"],["/archives/2021/10/index.html","18e9be32e1760a7fa6a1ded4fd2ac1fe"],["/archives/2021/11/index.html","78577a37fec4826397c70bcce5737331"],["/archives/2021/12/index.html","6c6bf995d8901e3e108283eb6948e49e"],["/archives/2021/index.html","7b1ac9764fb257f7ac45f357d2a0a27e"],["/archives/2021/page/2/index.html","13224e1db6fa8b5a94af8d2f019b8949"],["/archives/2021/page/3/index.html","8d925b86ad4d1ee57f0325985db0de3d"],["/archives/2021/page/4/index.html","c7d9d535b9b133c27f2e49ac1f8676ab"],["/archives/2021/page/5/index.html","298b0a00dbe1a6d2375df64069611993"],["/archives/2021/page/6/index.html","6ab3449518bdc0284d98415544a218d2"],["/archives/2021/page/7/index.html","61e49f040a69a81d1aa198e73b7322bc"],["/archives/2022/01/index.html","f450622f427feb28b6966504dc62987b"],["/archives/2022/02/index.html","2deb3fbbc9df9c14086032cdbd7dbd0d"],["/archives/2022/03/index.html","a82268609bc84610257f8d624eaa8e06"],["/archives/2022/04/index.html","b9e51eb746af0c9e006fcf5624aa642b"],["/archives/2022/05/index.html","1b96b80be689b1922fabc0d078a68506"],["/archives/2022/06/index.html","c7b18d75eb043da30dbbc067c540262a"],["/archives/2022/07/index.html","3e53a420c3d6232c7037e7e1a8aca886"],["/archives/2022/07/page/2/index.html","fe84e56b1f2e7d2850ced704c36ff304"],["/archives/2022/08/index.html","36e753ec7752360a67b230c2feeb2964"],["/archives/2022/11/index.html","44d1e201103b3faa8ff2054861eff0a4"],["/archives/2022/12/index.html","8f8e7680dc141a73983c6a0a28f27b36"],["/archives/2022/index.html","a001d4a9489af5e60c0c598b5351e9a9"],["/archives/2022/page/2/index.html","a3bb4aecca1c09892d6161b5af5d7d46"],["/archives/2022/page/3/index.html","db68458e43e35d7e30c58b93386c205b"],["/archives/2022/page/4/index.html","56baa6494e04e59898ddcc03d583f08a"],["/archives/2022/page/5/index.html","510c2ce81d30a2d6b346d64e318cc14e"],["/archives/2023/01/index.html","09fa42940860a6ca66979cb45980b616"],["/archives/2023/index.html","57c27560e95e66a91d607baddd31ff2c"],["/archives/index.html","083a54993438eb844540fbd5d8c4e4cf"],["/archives/page/10/index.html","5fe5f7f9879de99b6eac4f1ba527d596"],["/archives/page/11/index.html","58ec8ae57b2e2b5da4a8a712759b90aa"],["/archives/page/12/index.html","0085d21a7ec227c07f6964955c7aa522"],["/archives/page/13/index.html","fbff184ad95f3b4a10d227372a8ebd33"],["/archives/page/14/index.html","8553ab941088b412fc627a893a07cfb7"],["/archives/page/15/index.html","97a8b53c08804bb88d38f9f9b5fa3e50"],["/archives/page/2/index.html","360e88af635107d6807a4da97980b270"],["/archives/page/3/index.html","f1672f71aa62e43a630f248c1cfba317"],["/archives/page/4/index.html","9b11d2325cdd8ff705266b29d926e209"],["/archives/page/5/index.html","b22691a8228456e5c9e6f25651e0be12"],["/archives/page/6/index.html","8d62071c28714ef439f5f619e8fd8765"],["/archives/page/7/index.html","c2e405a2d89ae9de6bfd4f63fa146965"],["/archives/page/8/index.html","5a1049b47374c187ad737921be8d67a3"],["/archives/page/9/index.html","0062d292c3e5bd32a28ae3e99506d9e9"],["/categories/Programming/index.html","a4c5c622a0d40e4f113a070ee59fc439"],["/categories/Review/index.html","4b3563c28427f90918f404308a77e0b3"],["/categories/Review/page/10/index.html","9d7ec4b0f2d79f9679027a9c0488ac56"],["/categories/Review/page/11/index.html","48c94f01acd689a65cf98698348642f4"],["/categories/Review/page/12/index.html","08c2f1f426a01acaaaaadc8036e30a1e"],["/categories/Review/page/13/index.html","30a5ea74c52236b0a2b4c78b5873f4c3"],["/categories/Review/page/2/index.html","c1adab4c5ae7e26347a481a1941ce2a2"],["/categories/Review/page/3/index.html","596ae47600f97bd3d0527104e1beb174"],["/categories/Review/page/4/index.html","0904b926bd6f311430bb1bb45b731cb4"],["/categories/Review/page/5/index.html","6ce02e5a6b59feba98a2c7aee3de234d"],["/categories/Review/page/6/index.html","10964a6fccc797dca562f0f2d0dbfb57"],["/categories/Review/page/7/index.html","1f5a28b97b28ceb38b318b5830cf7a07"],["/categories/Review/page/8/index.html","e2f5772744ae29686bdb6b23d8ee014b"],["/categories/Review/page/9/index.html","23b70af0d0e46b3492103dd2c3008bd1"],["/categories/index.html","3866478b8772f3c90de9446aa53885bb"],["/categories/日本語/index.html","88173aebf4079c03fbaf612f1222e02d"],["/categories/日本語/page/2/index.html","dad8beeb18da134db9e054c2da9cfd1e"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9bbf863793ecd4b3ed0088b45711a051"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","2a41b9d0d7a056225db3bc090a3b0967"],["/page/10/index.html","3486a4e1afd6f058c67916d4800bca1f"],["/page/11/index.html","4c29254432cf5020eebf58eeb1fffa9e"],["/page/12/index.html","5b9bcfe99da69f2b4fc7b95281e0a84e"],["/page/13/index.html","8f1d39005859f1056d2a056018e9c6df"],["/page/14/index.html","3dc16f90d580d6b35e28cbd888fb63eb"],["/page/15/index.html","18f7904854a6a697b5392077c17ba85a"],["/page/2/index.html","f83c9ed461cfd2f60f3c98552f33472b"],["/page/3/index.html","1ad0952d6909937f6064d5f4fce439c2"],["/page/4/index.html","76f4d6c4cb46c42509dbc65a262cdffd"],["/page/5/index.html","cc700be51c01ddc2faea4f59fc0fb0eb"],["/page/6/index.html","3345af23c4ab9790a788f5f05ae0153d"],["/page/7/index.html","e7345e6aa31e51ef6393d9de6141478a"],["/page/8/index.html","99d2069ea1ede5349ac4d2171cc91e6d"],["/page/9/index.html","03208835c30e6326c0f4f5271c30333e"],["/sw-register.js","ee1704d31d63c7230b157f2aa28e703e"],["/tags/10分作品/index.html","1ca1e96f4045feaf12b10c23e2010dc9"],["/tags/3分作品/index.html","5390ed78d9d4b2e0eb04afe0dc89dfbc"],["/tags/4分作品/index.html","86949dd0b4adf333b7f4728bc599f067"],["/tags/5分作品/index.html","b5ed82c85c9101f9a1068b4ec2fb08c4"],["/tags/6分作品/index.html","60a84526008e748c64812336016336a9"],["/tags/6分作品/page/2/index.html","09a902d8af505e453c90d55142d3e056"],["/tags/6分作品/page/3/index.html","e1a86595685f93db3e450705a89c5c83"],["/tags/7分作品/index.html","c7091105b71ad7acf27f6fbcaade0bdd"],["/tags/7分作品/page/2/index.html","b20f723adcbe4d6583fc13057f8a13b9"],["/tags/7分作品/page/3/index.html","09a72b9c112dd11b5fee418f6900b97e"],["/tags/7分作品/page/4/index.html","a31271b06cfce2af61514e7ebaed9652"],["/tags/8分作品/index.html","c13716d9221590f2f077e6e6beead556"],["/tags/8分作品/page/2/index.html","a981f9570d2725da4ba249581b2bc977"],["/tags/8分作品/page/3/index.html","8caa365a650c4d6bd1c893fef30d2d3d"],["/tags/8分作品/page/4/index.html","912ad5379ee6ea30aa6013e7f0930996"],["/tags/8分作品/page/5/index.html","283d9c7f1285ac5a8c0aec32bc965085"],["/tags/9分作品/index.html","3316732b2864792c38137d63c6e09861"],["/tags/N5難度/index.html","58be1dc69bf25b2f0ebdc0667ae33bcb"],["/tags/N5難度/page/2/index.html","f69a98d24cff7c839ad7bae352e58be6"],["/tags/index.html","3d379bb50f034b392718e4ec0eaff77e"],["/tags/アボガド６/index.html","6121efa67e0ed3b05be3d59faa5d395d"],["/tags/三秋縋/index.html","c8b073778d3063aed34b679f6fa82a85"],["/tags/中國武俠/index.html","413f2d049f8a52bdc38427e5d703f267"],["/tags/中國言情/index.html","df55190dede3c98993957b6a1c8251e5"],["/tags/二宮敦人/index.html","549042e874f5633b148826c8bfe47fe9"],["/tags/人性/index.html","4cdd88299ca39cb3bfed029c7074530e"],["/tags/人際/index.html","b78e646d70d26a2315d50cdccc7490d9"],["/tags/住野夜/index.html","2eb3f1cc2b5c65e48128c4c049bc7d5d"],["/tags/佐野徹夜/index.html","22544ce565ebebcaaae257485885cea8"],["/tags/努力/index.html","5d83c2778c3a9a4fe97cc9f2b9e2c775"],["/tags/動畫/index.html","ea6470ec2f633de2712a5522ecd4d6c1"],["/tags/動畫/page/2/index.html","cfd770edadae00de83639d509d0c61f7"],["/tags/動畫/page/3/index.html","a80823d34aad3662fe794dbd8ed9cbed"],["/tags/動畫/page/4/index.html","e518d0e50b54588f445a041abdb14b3a"],["/tags/原諒/index.html","a47e884cf55c0b5169e53a30d51aad1c"],["/tags/反烏托邦/index.html","62e5167f2ee97d19b7b4323b3ecd8ed2"],["/tags/啞鳴/index.html","4261dae67210d85f3959e6c3af1a7c49"],["/tags/喜劇/index.html","4efb6e5d84736f94ae78dafe4822fab4"],["/tags/夢想/index.html","d5cec2b7aa7b4c766a1e6b755a8271f5"],["/tags/天澤夏月/index.html","922acfc8e200d1ea010abaa873c2178a"],["/tags/奇幻/index.html","e9dbcd09ecadd0429d01344fc16e5b66"],["/tags/學習/index.html","00be5a93f75fc6d9bafebc3f1c852f66"],["/tags/學習/page/2/index.html","4606476e5084e60c5e8df112bef47066"],["/tags/宮崎駿/index.html","c3674f5595c53f180c4d35c6f0839a88"],["/tags/小說/index.html","d61ce6036da3f87bab3da68194e06954"],["/tags/小說/page/2/index.html","bcbcc7ad6c52a01f4bedadddf7cf911b"],["/tags/小說/page/3/index.html","445ad4d4b45d62f3d91e7af99e2d42ef"],["/tags/小說/page/4/index.html","a89243bdcea889e177b48d2fc60f6dbc"],["/tags/小說/page/5/index.html","f33f59d5ab27d3c2c6d174740a7a562e"],["/tags/小說/page/6/index.html","8955651571032c9a221cce484880d6de"],["/tags/小說/page/7/index.html","f4db75c85e08398b395c1a0561b407a3"],["/tags/平淡生活/index.html","22f562e636796bc1f63af59016d92e9c"],["/tags/幸福/index.html","ad6ff3927c793edec9d4b3838bb1e17a"],["/tags/志茂文彥/index.html","3e2ef9fcbae5e570119b1d27d688a0a4"],["/tags/愛情/index.html","fefe1c54ff8022a61bcf2d244d2f312a"],["/tags/愛情/page/2/index.html","030afb07d1491fed873dea80b0a32d3c"],["/tags/愛情/page/3/index.html","ece47812e8621d756525be825bea09ea"],["/tags/感動/index.html","d8446a2041d39dffa380f81b1d7fc517"],["/tags/懸疑/index.html","cb9c9f8a609e1e83a7a67128df177274"],["/tags/懸疑科幻/index.html","e2d1e79be887ad302fe282cd3ac6a589"],["/tags/戀愛/index.html","79c044180bf390a63330fe9b36d0a905"],["/tags/成長/index.html","e2e47bff603e80b470640ff0c789ffa4"],["/tags/成長/page/2/index.html","cc173fabbcff5238b3012782fcf3bca2"],["/tags/戰爭/index.html","d0bac3451fca4ba20cbb844b68a0657d"],["/tags/推理/index.html","065e1739ec9edc0af5da34cbdf0131e9"],["/tags/搞笑/index.html","836fd41a583ece6a676ba4edf49e5627"],["/tags/救贖/index.html","6f52ca00ceb8bd76d228de5769c35660"],["/tags/斜線堂有紀/index.html","41f6015c93f05e2740153a5e9e315aa1"],["/tags/日常/index.html","33158dc156bfa756e7f85c496ae390ca"],["/tags/末日/index.html","0fb8cf99584c5829076e70df84277549"],["/tags/校園/index.html","651c42384ff440c430da9ca536f4f89d"],["/tags/武俠/index.html","06350d5618e3bb68fd0814b3fc3a6146"],["/tags/武俠言情/index.html","8a4d7a2dd8537a6e2b25a93831319953"],["/tags/漫畫/index.html","67021132ffb59d7bef3ed333ea342d5e"],["/tags/生命/index.html","ce664f630cb2338582efc05c2975d5a6"],["/tags/生命/page/2/index.html","9401bb63f00c39d36080d5f6a5208a6c"],["/tags/短篇/index.html","10f1153e0856e256dcf0e145f8386502"],["/tags/社會/index.html","62c011dd81c81dd4111fa7d2ef91f7d2"],["/tags/科幻/index.html","b5ade966532d134780a572f08c887c1c"],["/tags/童話/index.html","ca83eabdf73ccb8217d584e19388f81d"],["/tags/競爭/index.html","39250fa8af0bb764d5e7213b79dbba0f"],["/tags/自我/index.html","7359fdd1776c1d35a154a74aebbe4a7e"],["/tags/自我認知/index.html","22d5e6398262312a09b8bc3ffeadc901"],["/tags/葦舟ナツ/index.html","ea106c9337ea83d3e3d0ffc1c14d595b"],["/tags/藤萬留/index.html","6d9d9f00ef16d8985e528192c3228b46"],["/tags/親情/index.html","0d2fe5d466952ef90634fe25b98a1944"],["/tags/言/index.html","86f48a63222d0a1298b3283bc8668d98"],["/tags/雜項/index.html","69fa6919bf9b331235942ed901d2146d"],["/tags/電影/index.html","afcce4d2154b76c023dc6851a407bf6d"],["/tags/電影/page/2/index.html","4aec9adc2d3eb9b2b25b21003464adff"],["/tags/霸凌/index.html","8594538b8edf4fb4650d4663d28c76ef"],["/tags/青春/index.html","5c83ac84df9a1472330db7f882c97bb0"]];
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
