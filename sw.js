/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","e7f453e39bee0ec30738f17a5523e406"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","7533918816752d20817f0e5c6a512e44"],["/2019/12/25/Review/無法計算的青春/index.html","659e6758d56d9567eb4fa84331b332d4"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6e69579d01349bb3f87298cf8b8a8ab2"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","aaf1ccaaeb719d8b04c6a313bc70edc0"],["/2020/01/19/Review/下雨天，不上學/index.html","c179ad4e5ef6c7756a9fbee4f331dc0e"],["/2020/01/26/Review/三日間的幸福/index.html","58220924b02bd18255c613cbeef5fa7a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","c4ef9644a915bf3f3da3df8487af2a8d"],["/2020/02/09/Review/青春期超感應/index.html","f25dae260d4c54380623cb3dfe72c88c"],["/2020/02/15/Review/又做了，相同的夢/index.html","4ece3e28c053902b963a34a460f013b5"],["/2020/02/22/Review/回憶當鋪/index.html","16b1aee5293e085f4f74fd7ad22db302"],["/2020/03/22/Review/不適合自殺的季節/index.html","55565997ca1bfb3aa00b7df90472a287"],["/2020/04/26/Review/我們都無法成為大人/index.html","dd03c00db4e54d85eb8a4fce922fa405"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","5d0b3a76d8b7975b8242d798b14284b2"],["/2020/05/17/Review/人間失格/index.html","09c82da19f010907f0c103674f260fd4"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","5f8357d6c32b5fc5c4270da74710f61d"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","ba6c041c2e892517a496a3884c1bf94f"],["/2020/08/01/Review/銀河鐵道之夜/index.html","33b68c76d8817319d186c8b0fab47be5"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","3705d313eda9085d1d3ef1c5225ae8f3"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d7cd4e8a6ca26f97fcfdedcc9ba50034"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","70a9d9ee391c92cac5092cccb7ec2147"],["/2020/09/13/Review/羅生門/index.html","232da080a7da8cb8e44d934c09ac033f"],["/2020/09/20/Review/闇夜的怪物/index.html","9278f6d2f438bc132ee30fbf1a94cf88"],["/2020/09/27/Review/14歲，明日的課表/index.html","80a9c103e9cdbe3fa7b458576466cce4"],["/2020/10/04/Review/致十年後的你/index.html","b56f19268096cbad2ee2ca6ff04cb6f0"],["/2020/11/08/Review/滅絕之園/index.html","6bf033d1c32ca9f1a408f35b751da42a"],["/2020/11/15/Review/將愛拒於門外/index.html","e6e719304e7abd2735a7675c6cec817c"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","cb1534ac948821eb0aeabf715e56f682"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2aab5c0c72555607ac796ae350e45a48"],["/2021/04/22/Review/道印/index.html","6911ff2370187dec4e1339388b296a03"],["/2021/05/03/Review/戀入膏肓/index.html","f5c2e6789724041638f5def150cced5a"],["/2021/05/10/Review/Dice/index.html","b57a54c2381d15ef9cb1db701374df1c"],["/2021/05/15/Review/魔女之旅/index.html","204d61af95a8c55d19d764c5cc853322"],["/2021/05/28/Review/戀愛寄生蟲/index.html","db5a96b825ca7a8f0322aaac4474f279"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","c4a553ce289698595da4bcac7ea00cbb"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","c2ee999cc56ffe8b05d8a102d13c2489"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","1db3c0b93d678af401368ef19dfbed75"],["/2021/06/05/Review/流浪的月/index.html","ff2ac29567d151356317d3101b6f8c91"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","5fadd0a94a3d4e47b3ef66b8b9958e96"],["/2021/06/13/Review/第一人稱單數/index.html","9d4f29482f61db72a3efa878dc5a2502"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","c3c7c1b9cf1a70f89d82e2abb8aca21a"],["/2021/06/16/Review/願你幸福/index.html","1518c2b79edecec0831eb67583b7cebc"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","1ccb3c5dea15e29d08ffcff315e12997"],["/2021/06/21/Review/神隱少女/index.html","5668bbcdc59a0b14d51657706c4f2af5"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","6c74b0d137b1ba2b7f8e80deced0e7c9"],["/2021/06/23/Review/天空之城/index.html","19360ba0abcaf0d21efdf53132e2b221"],["/2021/06/24/Review/魔女宅急便/index.html","2e7f0b2ef13d9bd6d85fdd00ddfcf23e"],["/2021/06/25/Review/借物少女艾利緹/index.html","b32099e7c52ffdacd225d46cc75a1e66"],["/2021/06/26/Review/魔法公主/index.html","7247158e31174b77c3978a2ae3fb0921"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","b14746d0614220065833620c9d2a91d2"],["/2021/07/04/Review/飛雪與劍/index.html","e797c0426d0484c7d4645db6baa81ba6"],["/2021/07/09/Review/地球防衛少年/index.html","0fae37362d58c2c488116bb7ffefff72"],["/2021/07/12/Review/Angel Beats!/index.html","8ea4d0ef22083ff478359e602c30ca4c"],["/2021/07/13/Review/Clannad/index.html","a83c8df2d3b052312e30b951259824a3"],["/2021/07/15/Review/AIR/index.html","fed6cc7d64ab11f05de6c6eded565b19"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","fd2f510fe29b9746ac977df059840a01"],["/2021/07/15/Review/螢火之森/index.html","d1795a104e30bcdd01f5d4a531291eec"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","a8ece512e04bcfd6ae759863eb087127"],["/2021/07/17/Review/奇蛋物語/index.html","b5943f87d89c3edff32892e75992d505"],["/2021/07/18/Review/Vivy/index.html","ec808d389f556154a03d58a5c36ea8a3"],["/2021/07/18/Review/請妳消失吧/index.html","a1f9125ccfce9ad64a10834c17f48784"],["/2021/07/19/Review/漣漪的夜晚/index.html","0bd2d62961dd636ad6ce9304cd0061bf"],["/2021/07/20/Review/月色真美/index.html","79a8e35eba2996702dbf324229119a0c"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","322013e619f68c58872559aaa1e6f687"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","55d6f50da735812a1df1c0ea9afbd629"],["/2021/07/22/Review/罪惡王冠/index.html","a47a8f5e97afc6fb969ccfa13778b70b"],["/2021/07/23/Review/弱角友崎同學/index.html","0a0d0b4fad4aee451bd668ad9926a459"],["/2021/07/23/Review/惡之教程/index.html","854ae534d0e04de04634318b79d13437"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e3160af053f95e0d63c8c1626aa3aa62"],["/2021/07/25/Review/魔王勇者/index.html","451d566abff34de600d7b68568016867"],["/2021/07/27/Review/一年A班的怪物/index.html","8852a18d51e673b2a69101245ba5d6d9"],["/2021/07/27/Review/奇巧計程車/index.html","cca546b6af0536c17880433864fe1962"],["/2021/07/27/Review/專情的碧池學妹/index.html","fd6f636ae1172a7c6fd4ddb2c0a18586"],["/2021/07/29/Review/只有我不存在的城市/index.html","ee7d72a6ba107ad4d7e3e1fdf681a9f4"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","4ed3423d58ed372330f4cf0be61fb00a"],["/2021/07/30/Review/可塑性記憶/index.html","8ff13e557c1c87acdc4166d9fff88d7d"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","09db191e8e75d6220292f6eab9f7143d"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","4f6be0820ebab61cc6ab34fa25f440f2"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","4956bb0b7a5fbec074adc7d50872850a"],["/2021/08/25/Review/清戀/index.html","624b7308b1db6b896da7c1758512cefe"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","d8fcec3a4de720e602e9540c62c46531"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","d61ee49e80502c01c8a9544bbae43138"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","5a3442486751c522030add4660409de3"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","03782d2926af40a2d71b4a138ce85be3"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","ad326f349cca5d567fe161feaadd5562"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","2f464c0b489f975f43921a54e203b8ab"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","d5c83147cefe5721fef32d6313f049cf"],["/2021/10/16/Review/龍與雀斑公主/index.html","687defcf2e2edb9fb9edc9648d7f6a66"],["/2021/10/19/Review/孤狼不想開後宮/index.html","c25ac51491d0458da3baed24af73b0f2"],["/2021/11/13/Review/徹夜之歌/index.html","112760a1b6dbbeb207bd845f0451e626"],["/2021/11/24/Review/武煉巔峰/index.html","9492cb3a043634fb8a2357984f426180"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d9a620fb15f49b458e1dc335cf548402"],["/2022/01/28/Review/神醫凰后/index.html","d56e5d9e1e3fffbc443e25ab6180e632"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","53f2f693845fdfe32729ecb2ac73526d"],["/2022/02/13/Review/夏日幽靈/index.html","721893bb7dc3e9b4aac9612ac044a634"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","dfeb8ca04764ed9e8a9afd0a3a02c647"],["/2022/02/26/Review/賽馬娘/index.html","115380e58131ec2b5058dd3c01a82aa5"],["/2022/02/27/Review/大欺詐師/index.html","2f4bc847f1e8f2a2a1109022cabb8bcd"],["/2022/02/28/Review/前輩有夠煩/index.html","271e80e62617207d38f4e002a1ea360b"],["/2022/02/28/Review/碧藍之海/index.html","11a272c84bfcefc2e194d179801e5a6b"],["/2022/03/05/Review/落第騎士英雄譚/index.html","5f8444a6be07d29fede99468657bfba3"],["/2022/03/06/Review/Another/index.html","98d74dbea143da7e72adb4a35a90bf2a"],["/2022/03/06/Review/入間同學入魔了/index.html","957754378f2e5b3ebd43000bdbf9a7b8"],["/2022/03/18/Review/再見宣言/index.html","47342fff0345b332a0be0f7b0e01458f"],["/2022/03/23/Review/生若冬花的妳/index.html","89eec393bb842a97ab254c0985c5a0ef"],["/2022/03/25/Review/天之弱/index.html","14df2db6dd8f7e1463a17e637ab92fba"],["/2022/03/31/Review/滅了天道之後轉生/index.html","025a8b9cb521373048d70e31f18c4d68"],["/2022/04/30/Review/泡泡/index.html","92ca20645b52143cb09dbf294c67f85e"],["/2022/05/04/Programming/Dynamic Programming/index.html","07a6573484340583c9c5fff529963049"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","a2a85bb8fd560298f3189c45ade28c49"],["/2022/06/13/Review/偵探已經，死了/index.html","84f4eb0fa4f3869f3e1db486bd45057e"],["/2022/06/14/Review/黑色子彈/index.html","2adee2e4b11f25e278da4b286c60d5ac"],["/2022/06/15/Review/黑白來看守所/index.html","99428785b1badf714fc20af0035e6ef3"],["/2022/06/16/Review/虛構推理/index.html","6d50168f8d5ac3476591b16b115fc39f"],["/2022/06/17/Review/戀愛與謊言/index.html","f843b43abf1877d2093dd49d088b1257"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","6200fdf7c518abca9445ed5036cc9912"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f6a81acd02aa5cbdc8c35d2aed010f54"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","955a430a3acc697eea561305d26ad8d0"],["/2022/07/03/Review/Hello World/index.html","bd05e975f780cb9bc3d6b7cbc86be1ee"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","d0abd132cb128916ce6f37c2b7d27bb6"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","55b4a754ebef90da36f79b50430e650e"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","864ae6b9119a80c9279f0bac5d241c9d"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","69bf29b4309191c595e67c91f7133aa8"],["/2022/07/16/Japanese/動詞分類/index.html","350d2a78ebad4b8f2bad7f22e1d148e1"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","b84d14d2dcdb16bb35fdd18336d99a37"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","041a648b6b0606b1f28781ea8e9220b0"],["/2022/07/17/Japanese/音便/index.html","212ce872bf949fa6af1520c443d592c5"],["/2022/07/18/Japanese/動詞 時態變化/index.html","471c59b39aed9ff17064ad9ca9e86c1e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","765009edd4587a6b7ca3bc98e8fa4cb9"],["/2022/07/26/Japanese/助詞用法整理2/index.html","cc863b94f8ecfb7bf153f3e7ab3456ce"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","0944750666c3e543856a1c2a82a2491c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","eb56ca6029475318d7361dc4a89cc778"],["/2022/07/30/Japanese/疑問詞/index.html","a8f71139bdc8f9b700ba398774837550"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3ef0386a6e9b5abf26c4a0e141830cfd"],["/2022/08/02/Japanese/副詞整理/index.html","0efc33dc4d7d5766f0589d51c67ebda7"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","ee3f40c4eeed2e7e1ed098b206199fd2"],["/2022/11/04/Programming/Data Structure/index.html","aaa6ba042dbf9ac0034edad5ecfd36c9"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","ae33c09b684745408055b9f86e59db23"],["/2022/11/22/Review/組長女兒與保姆/index.html","fa7d5410b74d2780643f9b58dd0f9dbc"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","16e1bee9910d43b080d2548c5d462335"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","0b91ec6f0d64a89490b00608737621c2"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","cc10119196527529f7460907184aaff3"],["/404.html","c38e1975a6552e0e853b78300e3675fd"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","7c8193f23bfb925be2465b10d25d829c"],["/archives/2019/11/index.html","3d23f67337c20eb2f63375d9329b36db"],["/archives/2019/12/index.html","37d313ddaecf82b4416fd6b0d53396fc"],["/archives/2019/index.html","e917a085bc364e779db72e2121dfbfa2"],["/archives/2020/01/index.html","10542e71da64c13ceb62b89728e043b6"],["/archives/2020/02/index.html","e351bd10ec2bd843af00b6c2f39a7873"],["/archives/2020/03/index.html","fde8bc951f12d78c9cec91cc67c62304"],["/archives/2020/04/index.html","e49c25b0035c339e19c2f101aeac40b2"],["/archives/2020/05/index.html","eb12d7fa3a7618058e5d7718ea9f2d87"],["/archives/2020/07/index.html","a378bc5b8ff6759635529de6a4d58b32"],["/archives/2020/08/index.html","7f60b4ca31343787a07a1599ad724d96"],["/archives/2020/09/index.html","aa3f92296ed75a21a74a3513a9cefe7f"],["/archives/2020/10/index.html","59702a10cd696ab95fabbc6857130102"],["/archives/2020/11/index.html","f8327c589ec1f1211d2522914ecb610b"],["/archives/2020/12/index.html","c0dfb28553ac438f3f878458fd9248df"],["/archives/2020/index.html","59c3cedc706049a6dbf7d28baee64c03"],["/archives/2020/page/2/index.html","a6e66436a922589fe675ce0d109a7ef0"],["/archives/2020/page/3/index.html","9bb971e5c034bff8141fb6f843a310ed"],["/archives/2021/04/index.html","7303116bdbe2962d463b56ff687d58f2"],["/archives/2021/05/index.html","af8a6d50a66ba0df1d6428d31922c411"],["/archives/2021/06/index.html","6ce6ae964cdacc2f675cbfc47f258eca"],["/archives/2021/06/page/2/index.html","c6911d90d4b08d5cdfa04faa8ad19104"],["/archives/2021/07/index.html","92a2dc34fc5c99aea3ab8a1f7ae1591b"],["/archives/2021/07/page/2/index.html","917c074e4acf83e056262ec8171d8afc"],["/archives/2021/07/page/3/index.html","3b25c832d6df58b56771b80a0c2c2c08"],["/archives/2021/08/index.html","754f5a79b8d3e16423939c8d72dd9b54"],["/archives/2021/09/index.html","13cf03f4f6327fdd998e773d714be299"],["/archives/2021/10/index.html","88d11b90125841589da3f7d887c4c3b1"],["/archives/2021/11/index.html","04025b0277a3d659a30a506889b6f4c7"],["/archives/2021/12/index.html","6a2a850cc948a058aadceb5a3b4c81b3"],["/archives/2021/index.html","36790e1b35384c13dda8f99557b7bf51"],["/archives/2021/page/2/index.html","e1cc9b0d39d5c7b4ba9494a98c5fc667"],["/archives/2021/page/3/index.html","4e328884f458b70f7f82ae648311db94"],["/archives/2021/page/4/index.html","51232c06f166dc89c2d20b0f836830f4"],["/archives/2021/page/5/index.html","628285267442699e086628578357fe15"],["/archives/2021/page/6/index.html","eece17847fb4ca682892f4c5f959926d"],["/archives/2021/page/7/index.html","db63b40bad33e305d85072c1a69ac3a1"],["/archives/2022/01/index.html","932ac896cfb0a17fa46665fa2ecc2740"],["/archives/2022/02/index.html","f2f87d2952ba1b4e2d6511929aa1cf6e"],["/archives/2022/03/index.html","cf7ccfd80571f198f726474b0e3aa599"],["/archives/2022/04/index.html","fb941b2bd91b841915a6e606f3189fb5"],["/archives/2022/05/index.html","211daf16c1513208a6e6c537b69b7a10"],["/archives/2022/06/index.html","99a217c8289ed9d75efac615ecc460af"],["/archives/2022/07/index.html","f045d0b7506e0d7312e275c6caee939e"],["/archives/2022/07/page/2/index.html","c700de9446182c9c2ae9fcb851bd5b41"],["/archives/2022/08/index.html","5b86c000752f9bd578788117bf4569fe"],["/archives/2022/11/index.html","7e6af6f457e02ab20d81e8e7a1d15f33"],["/archives/2022/12/index.html","134e666d39f6e9a667599b0525c15c8d"],["/archives/2022/index.html","fdf186a4e05ea8a6c5310ad30fb9bcf2"],["/archives/2022/page/2/index.html","e8be0f288a61da9389790530a6f87138"],["/archives/2022/page/3/index.html","23649b00055cb7225e77a154a80c1b59"],["/archives/2022/page/4/index.html","40a237a8180070b613c9deb463ee22c5"],["/archives/2022/page/5/index.html","ffc33540488d1690bddd373355e45a81"],["/archives/index.html","8d77f49d0a48ea03c05b47a1a836b3a1"],["/archives/page/10/index.html","31e3b050e7d5626a9ac131612a4555af"],["/archives/page/11/index.html","db9d557eb65841cfc57889bbddd9af7b"],["/archives/page/12/index.html","4105bc0d84b693926f7104a88a4cfd41"],["/archives/page/13/index.html","1dee23db8abfdd9c72e9306740b2e9f3"],["/archives/page/14/index.html","989e1e9129bd43647016d400321ee336"],["/archives/page/15/index.html","4ec942f3628cd13a7bd7c157d5c5f8d2"],["/archives/page/2/index.html","70af237f8b19b39b88ce0f92c3db5bb6"],["/archives/page/3/index.html","7dd643b22a9962081edfbeac91387851"],["/archives/page/4/index.html","fcbfeb058b764eae3e9d4ac48b1af505"],["/archives/page/5/index.html","6a706b2f08f4839790f33596fd885fd3"],["/archives/page/6/index.html","9f63e674d15c0387722644ceea6f4c2d"],["/archives/page/7/index.html","8ef02e56c5969da6d03b5c1699b2d722"],["/archives/page/8/index.html","c30d0e753c57d1581b5c467b40b90e5a"],["/archives/page/9/index.html","89569a8bd58f85e14dba4c4deae85963"],["/categories/Programming/index.html","df9b256956edcc7704d97b2846086883"],["/categories/Review/index.html","a02db2122bb1e9c808f3205f6308219a"],["/categories/Review/page/10/index.html","e6bd218994a7aaf1eb51c07d83b9329f"],["/categories/Review/page/11/index.html","2deae8e0b7236bbedda7672437a2c661"],["/categories/Review/page/12/index.html","fafe8b4e5f117f8812513db14cfea705"],["/categories/Review/page/13/index.html","0d8c2fdd20f7a8c5697f17cce8d7e3d6"],["/categories/Review/page/2/index.html","65c6ddf651f54ff46ec1d7ef2fed928b"],["/categories/Review/page/3/index.html","ea722663df8da111c26f84a761e1b11e"],["/categories/Review/page/4/index.html","13be367bc6a3bdcc3a211324e2951246"],["/categories/Review/page/5/index.html","d69b7edcb82cffdf827f2ede75f939e2"],["/categories/Review/page/6/index.html","12d51dc64bbeb6a649e3acc3fc59a9d2"],["/categories/Review/page/7/index.html","ee33c1b56bd2971d6fcd6b448a660723"],["/categories/Review/page/8/index.html","8dd36ef13c1247de42325fb45f88bdc0"],["/categories/Review/page/9/index.html","4c1cc6a377e7c5418097546267d3c687"],["/categories/index.html","5be09667206662f92ffa8e544550a20c"],["/categories/日本語/index.html","c0987dd6f4304f56249a07a71dc04018"],["/categories/日本語/page/2/index.html","0bbb1500370a993fed2ecc57442eeaa6"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b62c95a9c91904f85b5c447e794dbf22"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","fbc1cfb8fbd3521cc697b11b53759c51"],["/page/10/index.html","cd801b024016195237a16b6608b0d458"],["/page/11/index.html","0e47e080bed9f9dcb245c170ca7b2e71"],["/page/12/index.html","b6c6ef23b239e6e7d0ad8550c0fac435"],["/page/13/index.html","ab3d52c5a0def8bdf9004cfcd5c0ffee"],["/page/14/index.html","e8123848afef64792d5960c8269e82f7"],["/page/15/index.html","6b9a0a0c2e11dfbcb3cf705ca034ae8b"],["/page/2/index.html","3665d030d27db386d36ed639f5d370d2"],["/page/3/index.html","2398740ee6a46fd6fa53a56810fe745b"],["/page/4/index.html","820dd455e03e6c97245ee4c9a613a940"],["/page/5/index.html","91a7ac6f6b9c5bd9fa533bd894a35200"],["/page/6/index.html","5bb471c66f542ecc56d54c06b9d7f389"],["/page/7/index.html","cd6e959a66527031073ba33b18f017f6"],["/page/8/index.html","d1b00d6571517a0f0d2c5d28013a6786"],["/page/9/index.html","22aa05545b648ce862c48e2e5b1b69bd"],["/sw-register.js","f945fdd60442b92322554bdec6219bb4"],["/tags/10分作品/index.html","12eac141acb5a9e1b1c745443d93573c"],["/tags/3分作品/index.html","da04dc4510102a87282ff652d4bfe414"],["/tags/4分作品/index.html","f4597e7751847507f4760ffd67168e09"],["/tags/5分作品/index.html","dc1d853bb72f8a47fc20d710078e5d52"],["/tags/6分作品/index.html","a3d5f2a67561ff7f9966b16fdff3176f"],["/tags/6分作品/page/2/index.html","c7dce9c1c84ecfc06af3c4d1345e1065"],["/tags/6分作品/page/3/index.html","b52f477b18940978c1a1fda9ca48a96f"],["/tags/7分作品/index.html","93a37f188446396e0aa4c0646cf5e10d"],["/tags/7分作品/page/2/index.html","2aa58e694b81a805b67ed0cc0c1fdbf0"],["/tags/7分作品/page/3/index.html","08c6177ef60e7fe5863238f3be61d41a"],["/tags/7分作品/page/4/index.html","170b139b8e4c93ba479f81d90545892e"],["/tags/8分作品/index.html","30d43ad9694fa530006936966b997f01"],["/tags/8分作品/page/2/index.html","254779faf6cc70ed43660b7293c1c0a4"],["/tags/8分作品/page/3/index.html","98d986e0b5396ff5a2096eeaf9ce1686"],["/tags/8分作品/page/4/index.html","50a120998cda7e95cc6516713d96fbe4"],["/tags/8分作品/page/5/index.html","1c6b72286df1835dd5318382eeee74b5"],["/tags/9分作品/index.html","54499bb3be59d0305ac17f571535a43f"],["/tags/N5難度/index.html","f4bfe4d941b33120f26c0ae1d31736d7"],["/tags/N5難度/page/2/index.html","8bc50f14914981a3caf57077239b1a14"],["/tags/index.html","bd7e9e8afbea660aaa558eb5841c5e65"],["/tags/アボガド６/index.html","ec648ff465fc140cec0bca539885c6a9"],["/tags/三秋縋/index.html","7636c36fafc3537a4c095a53588c3462"],["/tags/中國武俠/index.html","b6ce170c694a1f4776702ff824dd55c8"],["/tags/中國言情/index.html","18f933e86eb564e04c12b8f170a31588"],["/tags/二宮敦人/index.html","f283d7f1720665567ebf593d4efba15d"],["/tags/人性/index.html","018bcd27ed0c57a8d8735c18b1c0467c"],["/tags/人際/index.html","bef18fc3623417468cbfcdd156b40cc6"],["/tags/住野夜/index.html","3742f40c18606610910177244aad9567"],["/tags/佐野徹夜/index.html","beb36d58729fd0375616e0a009566351"],["/tags/努力/index.html","c4ad645a97e86429ab0f0c8850943bc6"],["/tags/動畫/index.html","96c52cc3fd175207b5dd1faa96b6c874"],["/tags/動畫/page/2/index.html","d80e9934f75545d02d0a512bd81b734b"],["/tags/動畫/page/3/index.html","76a64721cca5b40afce2c80dbc75afda"],["/tags/動畫/page/4/index.html","52226dc4626c7cabc0fdbb7571057758"],["/tags/原諒/index.html","6d1fd425c2568eabf9750d24de3f4bf8"],["/tags/反烏托邦/index.html","e7ba5328c957c2d4b326ffaa4a83ca4b"],["/tags/啞鳴/index.html","6dae7d2d78be4c194600ece701be0bc1"],["/tags/喜劇/index.html","93847363b2847825677fd4743313f88b"],["/tags/夢想/index.html","766fa3a7ca95e43735dd25aa8c665a2c"],["/tags/天澤夏月/index.html","6bc717afbfddc1d0817c56abc5240fb0"],["/tags/學習/index.html","4f7cb7f0b9502ecb5e1462e3a6f3545c"],["/tags/學習/page/2/index.html","050b6cd06b0058c1c3326ec0b538b5ff"],["/tags/宮崎駿/index.html","5b26e6eb69cd197f7ce85c9d436c0564"],["/tags/小說/index.html","8a7133aa60b19d814f363bb3e24fac46"],["/tags/小說/page/2/index.html","7edde938951f5afec6d5c9f23daffb17"],["/tags/小說/page/3/index.html","db835995580cf7ce4eec8315defdfeb2"],["/tags/小說/page/4/index.html","0f1c5da311ef1347be0e81f7827d24d6"],["/tags/小說/page/5/index.html","b3403688127e51fd6c324b955467c474"],["/tags/小說/page/6/index.html","9b182fb44a487585f23a71898620ce75"],["/tags/小說/page/7/index.html","170a25608bad5978aa9ed2cabc01242a"],["/tags/平淡生活/index.html","05d1c5d685891d4fc885f192ebd0fa60"],["/tags/幸福/index.html","2c817d25df4c630e518c68dac4f843ef"],["/tags/志茂文彥/index.html","8400937701bfaa2398424e2a4c50cf29"],["/tags/愛情/index.html","a71d99d2b3e6cefe659f20f0f3eb6b8c"],["/tags/愛情/page/2/index.html","b5876a9d631afb387c7cc786a9b54fb5"],["/tags/愛情/page/3/index.html","b78daec3f59e4e09e8f3f8811f642102"],["/tags/感動/index.html","d543d06262589977bc3abca10bee273e"],["/tags/懸疑/index.html","5c27870386fec2f5c2b56375d65d367a"],["/tags/懸疑科幻/index.html","bdaa6ede2925422c41e77ed01fe4faa5"],["/tags/戀愛/index.html","ca8a5e99dbc6be5952852df90d1a4bbd"],["/tags/成長/index.html","a26e50228b7f8762a03d33f8f4bfd2af"],["/tags/成長/page/2/index.html","ac88eb9b984024a54dc3a29e061524f3"],["/tags/戰爭/index.html","1fd78e56355d9b6831dba8c0d1a64c44"],["/tags/推理/index.html","3af24c60b03e8acaf4eb8367c78eb05f"],["/tags/搞笑/index.html","0bb6ebc29e4fdcff629158ad134602ce"],["/tags/救贖/index.html","088e00f566bdfcc15ef9c40db518ece7"],["/tags/斜線堂有紀/index.html","6f29b38e7142cfde3be4ea6f853bfc85"],["/tags/日常/index.html","2d5bff613cc40697553b8656cdfc5089"],["/tags/末日/index.html","2edc0f0ce40f5f133bd6a5a79e05d929"],["/tags/校園/index.html","04f52b5ca2ea90f38039e4ccedfb0223"],["/tags/武俠/index.html","2587e765e9cececb01adae70c99dcb5b"],["/tags/武俠言情/index.html","9730fe8638344a30a409179bf2c79cd1"],["/tags/漫畫/index.html","e3f9483304a70b3f6674ac3caa8be5cf"],["/tags/生命/index.html","f6c5adb2a19aa17dbf61324139042aa5"],["/tags/生命/page/2/index.html","0ebbeb55666e6becd9b235cea70c39d2"],["/tags/短篇/index.html","c9670b829d5a7ad45114229d378eab41"],["/tags/社會/index.html","7e6ffd6a9ef19cee965dab786fa490a6"],["/tags/科幻/index.html","766f518243643251b61bbfcb821e0df7"],["/tags/童話/index.html","86a9549c07298349e413c1f667ce9e92"],["/tags/競爭/index.html","681e665a8c7fc178de93b45b23aa83a5"],["/tags/自我/index.html","c35986488fa5df53ff243c015f8d64e6"],["/tags/自我認知/index.html","6bba6e781d80ad380caba1b7d1dfe19b"],["/tags/葦舟ナツ/index.html","007588d5922af5adc9e4d783778b54a0"],["/tags/藤萬留/index.html","8c3c944bc96194221df658159d9019b8"],["/tags/親情/index.html","550e6ad8d8b5eae13666d3cd7426a9e3"],["/tags/雜項/index.html","cc220995e4bdbe301723183dce32b590"],["/tags/電影/index.html","9796ecfff235ca1ce21bfb4d524d5d05"],["/tags/電影/page/2/index.html","3248ee793bb6c38b2e34a704fc57fa25"],["/tags/霸凌/index.html","36521a2ae61ab636f14f977dff598efc"],["/tags/青春/index.html","3e2419fb4b76658ab203023364c74a23"]];
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
