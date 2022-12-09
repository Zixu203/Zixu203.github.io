/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","7e948dd36c673c260a88d6d4120de814"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","60cb53085d817a7c17a7f1f8b6e681b6"],["/2019/12/25/Review/無法計算的青春/index.html","7e0097575b75709692d72401fa0d9516"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","c59f0726f7c54b3a97f069cbf19a8d09"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","35dee7214327d8cf7c8a776439692ab1"],["/2020/01/19/Review/下雨天，不上學/index.html","8a4568699c526ce6d66b2e86db436391"],["/2020/01/26/Review/三日間的幸福/index.html","2b2ccf0052f534a8ba18f74e1cd853dd"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","24edac6217ec70466bafeffc88468da5"],["/2020/02/09/Review/青春期超感應/index.html","64435320192a15eebc1f2830b7d90b0b"],["/2020/02/15/Review/又做了，相同的夢/index.html","04ac3db64035ebe8f90c33eaa742b55e"],["/2020/02/22/Review/回憶當鋪/index.html","6706a59f062a82027b198ef9a90642aa"],["/2020/03/22/Review/不適合自殺的季節/index.html","7fd5f68ffc94e7e4c6f7bfdf2e526116"],["/2020/04/26/Review/我們都無法成為大人/index.html","7ee692c792a9e9c0ed4bf3e0e359f15f"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","364693f202278335eb73716bf034cd8e"],["/2020/05/17/Review/人間失格/index.html","8eee926c82aef008c022a07f89675a9a"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","17ed34d31a1b8f2099cae46f92a775c6"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","e2876e97e17a2236655932f385ecf1ab"],["/2020/08/01/Review/銀河鐵道之夜/index.html","3dc52beb01760397c1453d6696574e55"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","66d0165d27adbe0a093229b517d8241e"],["/2020/08/16/Review/15歲的恐怖分子/index.html","21f9bb7fa084ecefa1fbc5d14c33b693"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","331775826bc8a57deb409be94fecca1e"],["/2020/09/13/Review/羅生門/index.html","8edd7d355ddf9b6aa23754dd08399505"],["/2020/09/20/Review/闇夜的怪物/index.html","e4a866a1116940224078934ac2c66b07"],["/2020/09/27/Review/14歲，明日的課表/index.html","9b8d96c7d804af16f4707361dfbd9474"],["/2020/10/04/Review/致十年後的你/index.html","2b607c125fb0ad782710c1a45ee2df34"],["/2020/11/08/Review/滅絕之園/index.html","ee844ea5c646fc42d06eda7907af0944"],["/2020/11/15/Review/將愛拒於門外/index.html","87be417c86050f0baccee062a2e4c00a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","b39ae566b6e21535408bf88665538d32"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","1cfbe32f37a9ef15688e7a0a3def73ab"],["/2021/04/22/Review/道印/index.html","df16ea83f892597d7b19d1eaccc3df1a"],["/2021/05/03/Review/戀入膏肓/index.html","5195c2cbec3c1d123a47b535f7eb574e"],["/2021/05/10/Review/Dice/index.html","5979d14cf9029c5c41ed39478960ce5c"],["/2021/05/15/Review/魔女之旅/index.html","7bb580c05c42f55becaaa251a950dabf"],["/2021/05/28/Review/戀愛寄生蟲/index.html","55135e98e7b1dc1143224b47fd499917"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","da41c665462312c17f6b9ddef778562b"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","0b15c203d29060731d17031cb9c72a33"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","9b6cc39a05b8da8f86e278f05e734347"],["/2021/06/05/Review/流浪的月/index.html","696945e1087f0ad4709b59f63fd4a62b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","80a190a221ed2f8f4857a46a70790c13"],["/2021/06/13/Review/第一人稱單數/index.html","0d880073cd1d1f32fcc458c358016729"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","3060f30933be0a4b82bea5d6e74caae4"],["/2021/06/16/Review/願你幸福/index.html","d8d381a4de6fd9d66badffa9d363b51d"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","cd946811d1461386cc0f80225484894c"],["/2021/06/21/Review/神隱少女/index.html","4e3447e65e5039b983785341943764b5"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","53c70844c238de3e40b1970572ba9d16"],["/2021/06/23/Review/天空之城/index.html","2962760d7ef4e4f120b49e0665db70da"],["/2021/06/24/Review/魔女宅急便/index.html","ed2ab08cd84998deb49942956216ee72"],["/2021/06/25/Review/借物少女艾利緹/index.html","630e3b8a51fd273d08197f327fe0b2e9"],["/2021/06/26/Review/魔法公主/index.html","df29f1dba4e6482eef8481344e8503f9"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","6ff52b46f230b02b0f62afcb9a737289"],["/2021/07/04/Review/飛雪與劍/index.html","12e29e232d3e5f9e03c694c42a52d82b"],["/2021/07/09/Review/地球防衛少年/index.html","d1d970c296fdb236779842a1446fb237"],["/2021/07/12/Review/Angel Beats!/index.html","c87907ff71a5b729b5dc8526e1f27262"],["/2021/07/13/Review/Clannad/index.html","518ae6b847192a8a2c2d34de250c656f"],["/2021/07/15/Review/AIR/index.html","4bd675caa49b8340642254ad5b23eaee"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","f0602a736244943e767ca5dfe5b98784"],["/2021/07/15/Review/螢火之森/index.html","a0139202e6dc20abdc88c561c8ab0ab0"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","63a726b4ac7d4050b7777077f03dd166"],["/2021/07/17/Review/奇蛋物語/index.html","12fed58d741baeaad0e9f95793db5377"],["/2021/07/18/Review/Vivy/index.html","711f8249cfbd9c9ae06790e51bd36c55"],["/2021/07/18/Review/請妳消失吧/index.html","4354ddcc7dae50863a8786f15eb0247d"],["/2021/07/19/Review/漣漪的夜晚/index.html","ae63cc98821d4f3ad60521ec5ac5a7d7"],["/2021/07/20/Review/月色真美/index.html","f5e27a8b6445f90a0ff94c194165a65e"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","804a95ed9872cdafca67225bb9a37677"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","685abbeb249f25df65c9bab1f6dacfab"],["/2021/07/22/Review/罪惡王冠/index.html","6656a3f762a63a3223b1dffe6d85fc4b"],["/2021/07/23/Review/弱角友崎同學/index.html","3ed4b7b251205616e26ed8c1a224f234"],["/2021/07/23/Review/惡之教程/index.html","0b6b0f6f410ecf604811f788b92bf676"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","87130780ecd4793f14e8007e6d99cd22"],["/2021/07/25/Review/魔王勇者/index.html","06a5faeb5726dcb05b504ec35bc985d1"],["/2021/07/27/Review/一年A班的怪物/index.html","4e9754ef481abfdac57ca45b6dc0927e"],["/2021/07/27/Review/奇巧計程車/index.html","7313b7556f75f6f3b789fb69a19d39fd"],["/2021/07/27/Review/專情的碧池學妹/index.html","1312dd2402b2d71fcbcf2bf640477b74"],["/2021/07/29/Review/只有我不存在的城市/index.html","bba4948a1961c9c083d2f6cd1c64d140"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","1e4c57019be7b07a6b47e78d1b316a66"],["/2021/07/30/Review/可塑性記憶/index.html","de6d7ed28fa30554065735e70e5faba9"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","5cf0921cb2601df8d45aced0a09a1d32"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","bd98bbdff3fd77e12fd79d0e588b5e90"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","048194d405b62f923de350c780283d93"],["/2021/08/25/Review/清戀/index.html","accea35731b0bb271912d8863fe49dfe"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","d68302bb6c5ce0c31171abeee737368f"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","018a541d1cda5e62dd6dfda13c57ad42"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","279a1c6336625b8993a1d83e33dcd8fa"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","bbc6fd1d12b72300c656208298fad16c"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","7b0c7c43a0f900601da6eb20a0e7d693"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","4c2c38ab20098b40e0d60f6854b6396a"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","bbaedb92eca4671bf1ef1cccfb415136"],["/2021/10/16/Review/龍與雀斑公主/index.html","92f0b971b796e173f4f747bd0c1e4030"],["/2021/10/19/Review/孤狼不想開後宮/index.html","6bd69054474ec4c29b485cf995051341"],["/2021/11/13/Review/徹夜之歌/index.html","15563818cab97ec4aa969234603cc010"],["/2021/11/24/Review/武煉巔峰/index.html","27753334fbbee8459fca7a851ce89a77"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e13af127e0e629e15a1d2256f52a617b"],["/2022/01/28/Review/神醫凰后/index.html","e4ed3dd92c17fcf89e4be3ca7ca16e71"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","477cf376aee423fc8d3d19bc97c48120"],["/2022/02/13/Review/夏日幽靈/index.html","581b24b60310a1ccd01d19f843784a1c"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","878f75e508297135e64f807c10d5fc97"],["/2022/02/26/Review/賽馬娘/index.html","e8e301cd98ed010022c142fccef33167"],["/2022/02/27/Review/大欺詐師/index.html","27192d2a1585b8bf200f2f37816d4059"],["/2022/02/28/Review/前輩有夠煩/index.html","291a4c4c4dd7e150b4e82e8a3d125bbf"],["/2022/02/28/Review/碧藍之海/index.html","5a37358789b895129660f053a8240fdb"],["/2022/03/05/Review/落第騎士英雄譚/index.html","ca11acdd95d6eeba532fc23323d10e91"],["/2022/03/06/Review/Another/index.html","165a6e1696364786577d9cc92c1f3089"],["/2022/03/06/Review/入間同學入魔了/index.html","0f9c29216296a5dcabe85e77e01db9aa"],["/2022/03/18/Review/再見宣言/index.html","a15ea9c6e619587ffa2b930404b0ea27"],["/2022/03/23/Review/生若冬花的妳/index.html","89c4b382e062c1a83073c937626a05e5"],["/2022/03/25/Review/天之弱/index.html","4d66727fec9e0bcf897efa2b0d84d13d"],["/2022/03/31/Review/滅了天道之後轉生/index.html","d14803bb032a620e18c416546e8fa06c"],["/2022/04/30/Review/泡泡/index.html","a6c865f214138b9ffab1c17d17ce4313"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","aa6a82decd4627979ac2cb92f5f86375"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","3e68d4d0393e04358fcf10d79f46760a"],["/2022/06/13/Review/偵探已經，死了/index.html","fe0841cc178236f8ef71bf7bba30ff9b"],["/2022/06/14/Review/黑色子彈/index.html","cb3db3fc144b2d71924651dd00a11734"],["/2022/06/15/Review/黑白來看守所/index.html","89b2176c735c17f56fc6aa51c5ed6364"],["/2022/06/16/Review/虛構推理/index.html","fd48dcf110f93f541a9a5fc6d5f31aac"],["/2022/06/17/Review/戀愛與謊言/index.html","cced6fa8baaf46298f929f050855addc"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","69f9439670011e5d15f7923d8665aecf"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","7b0df0ea810f3b1ce792193827b0afc2"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ddce6ff72ccfdaa392c5cb7ba1051d83"],["/2022/07/03/Review/Hello World/index.html","f9bc773b07c98995f0f7543846abf8d9"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","51e43241f00dc05f7850b4393c2a3273"],["/2022/11/22/Review/組長女兒與保姆/index.html","729470fdf17ed36bee49811c96a2bfe3"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","c4ec30c2e9e11de128deea877da039b7"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","f7f9e3c0d821baa60f80eee0ef8b67cb"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","9b366626aa0b33d25ff8adf3f91be13f"],["/404.html","616a5680e72af1f33df9456864d6a93c"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","7f26eeef452580cd76914b004b29cd39"],["/archives/2019/11/index.html","1d1e68564edb2ae28228875596694d7f"],["/archives/2019/12/index.html","51858b8f4213b05da95594912a99ee7d"],["/archives/2019/index.html","3181ba6159b121faccc502e3ff6ac2f2"],["/archives/2020/01/index.html","f1db0e78729fc6819d97ccdeaaed1569"],["/archives/2020/02/index.html","f5a4cc478a635a6609825b7aa040da77"],["/archives/2020/03/index.html","0ea959d948e4be1cd2ad06bef9b190ed"],["/archives/2020/04/index.html","8d32245f2f3aa5efbf84da393df25cda"],["/archives/2020/05/index.html","f39af6f79833038ecdc13c0a16f6ee07"],["/archives/2020/07/index.html","c73676bbd0a4785d10b2005cb5fd211b"],["/archives/2020/08/index.html","7689a14662b1080f72b4f80504cbdf5e"],["/archives/2020/09/index.html","c77265c349aa37f0fdceda307deb21a5"],["/archives/2020/10/index.html","69272beabc9fcebe39994f93720f80f9"],["/archives/2020/11/index.html","dfa150224b9f1025e8b5d698c4a615f2"],["/archives/2020/12/index.html","39f627838d5af3bc1cefeb5db8565da4"],["/archives/2020/index.html","3938ecb1df6294864923bc1662a3d636"],["/archives/2020/page/2/index.html","ab75bf2b5a4fcea78215e68788b3fbfe"],["/archives/2020/page/3/index.html","ab6824a8c6a4c40a4c8e59887eb9bd45"],["/archives/2021/04/index.html","206bd8aaf039e32f61d01b4a1bea2231"],["/archives/2021/05/index.html","3bc1839d1de83138fb386522b4f25ce1"],["/archives/2021/06/index.html","fcd9c1f484ca94d06a74ac1a149797bb"],["/archives/2021/06/page/2/index.html","2eb64018a80dbd19183e4b25b4ca737d"],["/archives/2021/07/index.html","00445abbeff03e64931488234027c258"],["/archives/2021/07/page/2/index.html","eced648ffa58d89caab35174fa5b0433"],["/archives/2021/07/page/3/index.html","047e736003c51f3e18ede1ff95039491"],["/archives/2021/08/index.html","92934f8b9b4248557a348b9024393bf1"],["/archives/2021/09/index.html","47b8dd300c9855ffa9c5d744417fe091"],["/archives/2021/10/index.html","fa144c246901b0f1c63d51ea46aec6b7"],["/archives/2021/11/index.html","79d2eb0efd9449e9c292cd71a2b5c6a2"],["/archives/2021/12/index.html","ed05def6982f1c5fb0ba658d739c8e8f"],["/archives/2021/index.html","3284f60be6004c83f7461d236d78703e"],["/archives/2021/page/2/index.html","ae5dca3d8423ab9b15bfacb90f87cd1b"],["/archives/2021/page/3/index.html","cca0693923e6eca75c99b9d266a3743e"],["/archives/2021/page/4/index.html","664d685f5c45b4d80293c641c1813d1d"],["/archives/2021/page/5/index.html","ce6a449e52d6bdba8a3a3c0e304b3f28"],["/archives/2021/page/6/index.html","200e348959ae5371991e592c83e52a71"],["/archives/2021/page/7/index.html","863fad24b09faa487caeba01aab11a10"],["/archives/2022/01/index.html","fe5f16698cffd29f983a8d64b0287b0d"],["/archives/2022/02/index.html","7140943c7feadba48eb8311a0de6a406"],["/archives/2022/03/index.html","c9e79658ac8c7cd4fe258c719160266b"],["/archives/2022/04/index.html","c7617c2bdbce7522397598a3afe7365d"],["/archives/2022/05/index.html","9e68ad82a0369a1d392fe5c73b053cfd"],["/archives/2022/06/index.html","42118a1d84054679f4ac04fd7dcc360a"],["/archives/2022/07/index.html","1ad2fd538e38b78c1fd214dbe3a4904b"],["/archives/2022/11/index.html","3558f5004b0cba3f0f3270158e7f675a"],["/archives/2022/12/index.html","7d180d6cf1509dab449fea0549ba0009"],["/archives/2022/index.html","78f9c673fcfb3c89d8c5a1fd0f989ca2"],["/archives/2022/page/2/index.html","1c81f91d03515b16804dd2608a0c128d"],["/archives/2022/page/3/index.html","33e1f53c0e32b300f8b7a915991ed4fb"],["/archives/2022/page/4/index.html","6fdcd375051548b032236068e51e9128"],["/archives/index.html","64df22fb71c73cbbf62cdcbe05eee8c9"],["/archives/page/10/index.html","b37d8a8debc44eae6eadba09b2dd0c3f"],["/archives/page/11/index.html","4a2074df8985dbfa8bdf5b1443b32b7f"],["/archives/page/12/index.html","bf2e21e44ba6a268c8ba77a5d58f650e"],["/archives/page/13/index.html","48921d661cd7b6aaff50296242c162a5"],["/archives/page/2/index.html","45090c8bc306b8d235e45cb0c4613cf3"],["/archives/page/3/index.html","fd566e3021a437fc79af6dacf0d0e9c2"],["/archives/page/4/index.html","d14fce3559c47ad67b2bd41a50978e41"],["/archives/page/5/index.html","6c306a172edd71fbb1db510da140fc16"],["/archives/page/6/index.html","0fec791de862a28ba5426b3562a6b78f"],["/archives/page/7/index.html","12b3ddb8d9f8819ff74a505ca2706ebd"],["/archives/page/8/index.html","e6586e6645b740ee96e1ed44e4be644b"],["/archives/page/9/index.html","f2be86104528ba450af358c270d60560"],["/categories/Algorithm/index.html","ce9ec936e6ebacca9ea6b708e8a94071"],["/categories/Review/index.html","30fc817cf36196b2140ada0c50451b96"],["/categories/Review/page/10/index.html","fb9300f4effef8975a27f0510d784c41"],["/categories/Review/page/11/index.html","391f67d7e3fce18da2877a7146ddac77"],["/categories/Review/page/12/index.html","aea7248b8485b19c0042aa28efaef0fa"],["/categories/Review/page/13/index.html","45b5e9db20c3b2cd236f1f3d0cca392b"],["/categories/Review/page/2/index.html","47cfaf8e319999b4d549659169872504"],["/categories/Review/page/3/index.html","48845c23b97644eeede741186cf64a24"],["/categories/Review/page/4/index.html","f5b355e978531c335bb8a093953268c6"],["/categories/Review/page/5/index.html","b268d9df21170b73e8402deccff561bb"],["/categories/Review/page/6/index.html","e4cd04eae83b46091636dc5b89a10fef"],["/categories/Review/page/7/index.html","6c9f8bde082293d495d1841cc3d1d0e5"],["/categories/Review/page/8/index.html","a6322f983966e782b8a22799fc9deaff"],["/categories/Review/page/9/index.html","1e0f96b436e4b11e5cc36b6c8ade6b9e"],["/categories/index.html","851a006582bcfdc4f0b8e687e31325ca"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","84f77fc39b21d28d3971f59db954a788"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","396b2c12ab69897b658a704f52b502a5"],["/page/10/index.html","2528dc90fef60e8c59669238bab00e53"],["/page/11/index.html","83df322b8fb4a377b8d7cf4797a2d84a"],["/page/12/index.html","2380993f292a3334f59cc3d3954029ff"],["/page/13/index.html","499f240b87bd21085ad8ba3fed8f420d"],["/page/2/index.html","f9a93ea0b035b04e25a0b15e9944f252"],["/page/3/index.html","56b3e364df9c95ce01f9e90865ca1110"],["/page/4/index.html","76e14bea9a8db630a0821afff4aba0b2"],["/page/5/index.html","fb34df69cb37a5f311af77f599e290ba"],["/page/6/index.html","3a6090410355f4dbeccdb7fc0bf9b1b6"],["/page/7/index.html","57076999fab30a59f13489e621a95a76"],["/page/8/index.html","3e5695e3d8c508c9e9e870f25131f9e7"],["/page/9/index.html","d6fc421ac42df5eb0f8ea7583bb8955c"],["/sw-register.js","3057ec5748bbc83678f807beceed5825"],["/tags/10分作品/index.html","95aa57964d4f6c535420f3107682fbd3"],["/tags/3分作品/index.html","951ad247b3ee4cc0d8338021fc644f4a"],["/tags/4分作品/index.html","f283ee9653a8f8c69206262507d88ba3"],["/tags/5分作品/index.html","1d91c7438efae6e4b79a4a7fff219c26"],["/tags/6分作品/index.html","4c9a34342d68b35b8afc9e9d2309f7ce"],["/tags/6分作品/page/2/index.html","60f7efe736747d307551c60fe277204a"],["/tags/6分作品/page/3/index.html","53f5ca13461fd070e4c890465b4c2894"],["/tags/7分作品/index.html","c35510a1d739c32d5fa46d37cb633616"],["/tags/7分作品/page/2/index.html","905b2f73dade07ea607d318e42404749"],["/tags/7分作品/page/3/index.html","d363a6c5773bcc6c08e39799860805c1"],["/tags/7分作品/page/4/index.html","a244a45a19cd6cbebc5d07a99638986a"],["/tags/8分作品/index.html","de72f14ccb7ff5111984327e714f1a9d"],["/tags/8分作品/page/2/index.html","5d0768e2a5a95228ef2b14e750c2dcc2"],["/tags/8分作品/page/3/index.html","5f69591e6d79be5ff0ab56bdf6fd98f5"],["/tags/8分作品/page/4/index.html","798c646b25db253ed19cbcbf09fdcde8"],["/tags/8分作品/page/5/index.html","42bd71be567cc2d8baa1076f42cbebac"],["/tags/9分作品/index.html","f6020c91607834313d8d219c518ae715"],["/tags/index.html","33c7cf5d344fdc4d9fb4b34d2299be8d"],["/tags/アボガド６/index.html","657121a9148ea2ccfca083b85ae1dc38"],["/tags/三秋縋/index.html","a1fd0750dca88dd84d8920ad9b67a268"],["/tags/中國武俠/index.html","4d5ef86d44cd79ed4122824699067388"],["/tags/中國言情/index.html","da6943ba2c340027f7513b7052056ab9"],["/tags/二宮敦人/index.html","c7bd1513f538398817186b34e826aaf4"],["/tags/人性/index.html","7c9363ca2d25ff2dddcb356f8c340ddc"],["/tags/人際/index.html","f0fa8a3d319cbd90b0ded4ff5ebd7425"],["/tags/住野夜/index.html","80ce9dae5177509f8ace0c0569018561"],["/tags/佐野徹夜/index.html","6fe08096a5403637e0784c4556add0f1"],["/tags/努力/index.html","9f7dd0ec32ad3431337a3c17ee7c2a28"],["/tags/動畫/index.html","02efdee8919bad56c24aaddaa7abe1c4"],["/tags/動畫/page/2/index.html","56069d3a625182a14d1a850aa0907232"],["/tags/動畫/page/3/index.html","cd0542e041366a60ef10ecbfdcba5198"],["/tags/動畫/page/4/index.html","36713031e57b63996bc2d74dc77be3ac"],["/tags/原諒/index.html","d97db8a2b697b616d4d2502d305e17c1"],["/tags/反烏托邦/index.html","e2dfb1ba3c785d3337e19f195ee1de95"],["/tags/啞鳴/index.html","2b6da7f3c6de641ab0ac957cc6e2595e"],["/tags/喜劇/index.html","e6acadd9ab2d5d3177e3278555f44915"],["/tags/夢想/index.html","0910c4b2bd4ea82c827e90f30d3486db"],["/tags/天澤夏月/index.html","b0ca1c3cd3188c2519af1c30cd1b8257"],["/tags/學習/index.html","afca35138cd7b4f84c19319f7f20f172"],["/tags/宮崎駿/index.html","a4be24f5d48b950cc6b71d79ed4b10af"],["/tags/小說/index.html","625bab24f1acd5b12de5d21adc809ef2"],["/tags/小說/page/2/index.html","abcc37a5f8c4024fe3cadab114829264"],["/tags/小說/page/3/index.html","21e1c9ba7cc09e43a936f0a00e55af0b"],["/tags/小說/page/4/index.html","02987f000386c3880963d005a59db664"],["/tags/小說/page/5/index.html","d0bf98ec4df063acdee84552fd88bac5"],["/tags/小說/page/6/index.html","38ba8a61e7c01f7d1b5b87a59c5f34c6"],["/tags/小說/page/7/index.html","8c60850b7a2bcb507f0f743efdaced57"],["/tags/平淡生活/index.html","ee76052f588d969bd826f012c45ae5ed"],["/tags/幸福/index.html","b9112facdadc99a759b681fb4988672f"],["/tags/志茂文彥/index.html","fb723a84ccf70cf240b57e9afea94259"],["/tags/愛情/index.html","7f19ce4bcd27af7f4bfb05e24a58d98c"],["/tags/愛情/page/2/index.html","eab68375b31c84c6e4c2c2fb3a2a4ac4"],["/tags/愛情/page/3/index.html","9f12b626a76c699821a025616e7c4a2d"],["/tags/感動/index.html","15417009dd13429fc3c3dc838fd974b9"],["/tags/懸疑/index.html","c5e6cf49efcd3c819ed6f5ea595e1686"],["/tags/懸疑科幻/index.html","79a67bb5e34b642abbd4321dfba30faa"],["/tags/戀愛/index.html","ae3cd8d95cb7c19ced1fc808ab885ad1"],["/tags/成長/index.html","872c5847f33fe8c288d144a0c805f327"],["/tags/成長/page/2/index.html","144843420907b8d2abfaee56b6f4a99f"],["/tags/戰爭/index.html","d94daf14bfdf6e1adbb142caa00bbb4f"],["/tags/推理/index.html","a20e1f7c95981095d55e633eb84c1391"],["/tags/搞笑/index.html","ff1e4b6ae1dfbd2e91c014d07779c1ab"],["/tags/救贖/index.html","342631a032b8e682c6403dbd1ed2d68a"],["/tags/斜線堂有紀/index.html","f51f9daf7d7ab39eed3772ab95f81727"],["/tags/日常/index.html","f3b91f6ba8447e53b0bd48dfbac32ba4"],["/tags/末日/index.html","7db4524f4b65ed19998c91e9c6c11adb"],["/tags/校園/index.html","6064f04ebb2b13835ed3287dd74cf922"],["/tags/武俠/index.html","3018202f8c9fa43d6dae06ea28d4ac02"],["/tags/武俠言情/index.html","c32fa83eca1d3280c13446435144939f"],["/tags/漫畫/index.html","1065357d1246e9397b0bf9428e250e69"],["/tags/生命/index.html","f0f7d63077d8fcfea9a62606212fa3a2"],["/tags/生命/page/2/index.html","c84e4ba20d8937fccf9546b8d369d142"],["/tags/短篇/index.html","7ced9a123b7756176eaeb2039bee3d3c"],["/tags/社會/index.html","c9f99eec0055db175338805b6daa8173"],["/tags/科幻/index.html","fda877526883916134557f43127eebc0"],["/tags/童話/index.html","ff767cdcc12bdae5a03b8943dd96b148"],["/tags/競爭/index.html","6a6764d466c448dd5462b0120f066329"],["/tags/自我/index.html","b65065d5ee31657689d80e1ce373362d"],["/tags/自我認知/index.html","ea4c907737a74b3baf5399bbaeda27e1"],["/tags/葦舟ナツ/index.html","4d48f755077252616a7dfa68b88cd54a"],["/tags/藤萬留/index.html","fa84a155b253c033ec38483c9ae80ffc"],["/tags/親情/index.html","5e3b682a9b99892fc6bfa782d59357e2"],["/tags/雜項/index.html","6cd6d8b50c90c597c62c700f1f9e74b7"],["/tags/電影/index.html","a0256d3d98dcc64e283f862c2f3eeb5f"],["/tags/電影/page/2/index.html","13705cff609889554f3952cf946a5009"],["/tags/霸凌/index.html","b98b6081560f191b1628dad6ade1eae7"],["/tags/青春/index.html","b08a890f8ab27a79b6872e073a716252"]];
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
