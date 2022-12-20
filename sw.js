/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","203486122abaff35f88e881bc6957d34"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","52f0f58ac22fb4fc3d76f35b0a99d503"],["/2019/12/25/Review/無法計算的青春/index.html","1b23ea40605e910a371fcb1234562dd2"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","5bd9950c1de89b02bf6d2e13e47f1b6e"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","6b2785a21fa59a361972c3b8d09f026a"],["/2020/01/19/Review/下雨天，不上學/index.html","1ed7f4431499b6e08dcd866cd66e9cb8"],["/2020/01/26/Review/三日間的幸福/index.html","2cfc7c6f0056ef71dd4cfb4be464562d"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","fc58c9900ef6b7ba4531a5f84a449d80"],["/2020/02/09/Review/青春期超感應/index.html","90ce471c5d2ad286fa3965068b897e9d"],["/2020/02/15/Review/又做了，相同的夢/index.html","4eaa539e7578e90bd39a863aa858f209"],["/2020/02/22/Review/回憶當鋪/index.html","bd520a9246beb905bdf0b6a16839f9cd"],["/2020/03/22/Review/不適合自殺的季節/index.html","d68b35e85aa09be430853ca6c121f52e"],["/2020/04/26/Review/我們都無法成為大人/index.html","f4659597c69b8fc3367823ce2f6de6e8"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","f1c8170e862e68581dda199be822e806"],["/2020/05/17/Review/人間失格/index.html","7ddd334174d1027c95b6d5810213b8bb"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ca1c056b831d4d39ed9827a04f74adac"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","cdd594f872d7a277f9d63d46d722c524"],["/2020/08/01/Review/銀河鐵道之夜/index.html","d156f888ff71ae57a7a19b2fbc251001"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","6db61fb719601a2ddd8993bc3233be2e"],["/2020/08/16/Review/15歲的恐怖分子/index.html","b0817eb7518514bb5eba84983ab29d3d"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","2edf767a2050038ebaa4a5cb5398a75e"],["/2020/09/13/Review/羅生門/index.html","bc44c433f7bac5532e8d8cafb1dfea51"],["/2020/09/20/Review/闇夜的怪物/index.html","8fbf65aab15f5cf7f302bb1f7cc4f884"],["/2020/09/27/Review/14歲，明日的課表/index.html","1fec9cc024f3cc0d3538744dfb3a66fa"],["/2020/10/04/Review/致十年後的你/index.html","ee7ea1e7f8edd6ab6dad167fe64ab357"],["/2020/11/08/Review/滅絕之園/index.html","2bf2d6c3d1aaa1525b3ccbeeb5bd3353"],["/2020/11/15/Review/將愛拒於門外/index.html","4c5752887822b6ff65a6b036d0fd02e6"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","4ba0addde1952c9ab406860d83fce743"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","6c113d7f13e479645edb93e45704fd2d"],["/2021/04/22/Review/道印/index.html","c3a48c80be6d41e72d2f35c2dbf76595"],["/2021/05/03/Review/戀入膏肓/index.html","89b8a78cbd8aa82a6dcb23b032474769"],["/2021/05/10/Review/Dice/index.html","11bce3704009c9409baf78fd86433641"],["/2021/05/15/Review/魔女之旅/index.html","5e73416b7580cd00015de34206973c5f"],["/2021/05/28/Review/戀愛寄生蟲/index.html","08e00fc24bbcb01aee12c76410b9c4ee"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","8eee44ac5dd84c1e0227273b4025990a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","ee53c240f9ad05cf967bf23513f7325a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","e15283c91919b4d1db6e08aa4aaf7a40"],["/2021/06/05/Review/流浪的月/index.html","560808e18316cc1245ffef0eae71f844"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","73dc150ad1ec7c6ca16c0186e3440023"],["/2021/06/13/Review/第一人稱單數/index.html","dc80a39ea2085296f5ae3c51303d134c"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2160f26d6726d8187beae60fccda3fc1"],["/2021/06/16/Review/願你幸福/index.html","1aab651d64bbed3ec49c8e7925f925cc"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","7a8a48de708fd9749eee1a30d3588108"],["/2021/06/21/Review/神隱少女/index.html","2dc7059fa6751b1f4929a1c10b4c55ad"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","35c6cffc2bfa54f57be198bfb68f8b86"],["/2021/06/23/Review/天空之城/index.html","6973cf50267402226ceeebb3a4486ded"],["/2021/06/24/Review/魔女宅急便/index.html","c5d6bfaed5aeb37d0ca47d8a0ed7095d"],["/2021/06/25/Review/借物少女艾利緹/index.html","c67b10f8557424801c8983102fa143c9"],["/2021/06/26/Review/魔法公主/index.html","b0ffcf4e854ac276b33db0c2f1ef749f"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","adde575a1871a636918905012f3fe8c5"],["/2021/07/04/Review/飛雪與劍/index.html","681494a69c6da81231a939c548cf20b4"],["/2021/07/09/Review/地球防衛少年/index.html","53a437779d99db5ef903b58d09fd8cfd"],["/2021/07/12/Review/Angel Beats!/index.html","278ac3ea2f9d56a0672880836fecc147"],["/2021/07/13/Review/Clannad/index.html","c28cb966db3b1f1b4477809391dbea40"],["/2021/07/15/Review/AIR/index.html","7c22809a81268cc23fbb3d4c355b6362"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","2d54ee40ebcc41ae990b52854aeed4fe"],["/2021/07/15/Review/螢火之森/index.html","2d1deb6645fd6ba89e68f5277bef2e27"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","a5b11d7edfcfdc960e1b32b623eb7ed9"],["/2021/07/17/Review/奇蛋物語/index.html","b448f2f19a5197d75d1cc6bb5f32bb7d"],["/2021/07/18/Review/Vivy/index.html","ad3c4085e11e9659d26b871c9b44ba53"],["/2021/07/18/Review/請妳消失吧/index.html","72fc53c2afaee16b8a6c9b1dd4676d02"],["/2021/07/19/Review/漣漪的夜晚/index.html","831a010f9870e32a8545619a88d084e3"],["/2021/07/20/Review/月色真美/index.html","8a3fe17f274f575896e0faa8f2cb5be2"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","c30eae98f31ccf06438dea8aa5c48f1e"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","844d783e0077c2d5d0ed08907bd0f52c"],["/2021/07/22/Review/罪惡王冠/index.html","fc31a3d57bb938823971cf06f8593192"],["/2021/07/23/Review/弱角友崎同學/index.html","897efbd9e3e819f7d42a31c4f0b57e87"],["/2021/07/23/Review/惡之教程/index.html","2c709571cc8957e6271c20833803a2ca"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e7822365a3124948fccb6bc43b755306"],["/2021/07/25/Review/魔王勇者/index.html","c53a8ec594ddcbe21ce30ce5ebf780cc"],["/2021/07/27/Review/一年A班的怪物/index.html","875dcfdf4f11be4725d09a99850e58f3"],["/2021/07/27/Review/奇巧計程車/index.html","fbda3ee4841525954c919a5318700397"],["/2021/07/27/Review/專情的碧池學妹/index.html","6137b6f3b476c0f4a902bd55499b239c"],["/2021/07/29/Review/只有我不存在的城市/index.html","52597f0f3db56e6480e35fda64f77c43"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","0ebe8984ba5adc8acbb55cbb1e8f9baa"],["/2021/07/30/Review/可塑性記憶/index.html","8aa2b3aae2e6816d700e446ede18b1ff"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","03ccf88ae940b0ae7ad5a4714c85d126"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","2e1eb9897dc4554e067894ea7710ddac"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","1f9a3310888966cf63ab2d052c728b3a"],["/2021/08/25/Review/清戀/index.html","c13dfb3bb94643f08c168f0ffd7a113c"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","720d954758907da355876aff72a0b4f7"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7c4482b5feb92ea89fbe2b32c015de25"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","59fe32cce53a36488f0d8b37ade1ff75"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","876b57f1690fb330a11d478d1a37340d"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","1c7c34cc4bb42a3914ae4e45d371d816"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","19cf7277e927d8f51a8aaabf9dc24997"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","4f9da6326857be66ba3065b88c1ca5d6"],["/2021/10/16/Review/龍與雀斑公主/index.html","51bd5bfc450869dd24a517c38fe75c53"],["/2021/10/19/Review/孤狼不想開後宮/index.html","fe3360453bed85705eb67e43b3f5c684"],["/2021/11/13/Review/徹夜之歌/index.html","bf2cf07e3feef1a12d80ecced5be9629"],["/2021/11/24/Review/武煉巔峰/index.html","e3956a2bae10f569ac18f2535275e7e4"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","ccb523685092453c4490f0f00fe0e240"],["/2022/01/28/Review/神醫凰后/index.html","1dd691e061cbe6514814b46273a7e3f6"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","5cbe337c907895639fd16a08aa4147c2"],["/2022/02/13/Review/夏日幽靈/index.html","cb814fcf1710f595e6a1623f36275cb1"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","c2a85ffa3d57cbf79fa6295e30b96472"],["/2022/02/26/Review/賽馬娘/index.html","3f2ee277efd5e89320c8b3cb6f0c1763"],["/2022/02/27/Review/大欺詐師/index.html","26464866f6d36d50cbfd5338a2facd0d"],["/2022/02/28/Review/前輩有夠煩/index.html","b3e288401c1f718473b9770746d9c2c7"],["/2022/02/28/Review/碧藍之海/index.html","d3cf36219b33730007887a20c2b8868a"],["/2022/03/05/Review/落第騎士英雄譚/index.html","d16b1bfafa426fe2b073c38bda452ebd"],["/2022/03/06/Review/Another/index.html","1fae5bf28e58d2012774e0cdd1134262"],["/2022/03/06/Review/入間同學入魔了/index.html","4d40f6e3fc755a61326ba678a6fc4476"],["/2022/03/18/Review/再見宣言/index.html","43ffbec89e277127e356e00c1bd7b55d"],["/2022/03/23/Review/生若冬花的妳/index.html","7418a7805c0dc64479c2ae7c4b7a9c2b"],["/2022/03/25/Review/天之弱/index.html","e43db8e90672b9038c946a878c35f000"],["/2022/03/31/Review/滅了天道之後轉生/index.html","f6608ce0ed8f962a470c6b017294c0de"],["/2022/04/30/Review/泡泡/index.html","1ce9eb9af8a3ea15309698b1348cbdb6"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","469542ea231ca0ffaada85abe3e0a304"],["/2022/06/13/Review/偵探已經，死了/index.html","3d1040e584d7d49ac1b1f63345be692c"],["/2022/06/14/Review/黑色子彈/index.html","7b43e04eb114903880965b487519b81f"],["/2022/06/15/Review/黑白來看守所/index.html","b185c2f48755ab75cf724a3954355762"],["/2022/06/16/Review/虛構推理/index.html","5d9fd7888a3b9988cc66b587d372b5bd"],["/2022/06/17/Review/戀愛與謊言/index.html","fb4bf3b672aa022c6d2ee46b5ae3cbaf"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","ed53cb53000116a369e4f681f74c0b06"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","471764f0443dab6888a788f6374f1f49"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","8ec7d9e02a47d569c13a1630d43f6a87"],["/2022/07/03/Review/Hello World/index.html","27a403c7bd4eb3fef380096f2cfa5949"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","02837f12776f6e6ab771f9fd5a8c82a5"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","a0ce78dd962baaa915cb104d4718134c"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","1212ff50b1af902a6c9ac792f312963b"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","8beb519143b4b28fb0eb90a8a047a585"],["/2022/07/16/Japanese/動詞分類/index.html","c3ebb95c3cdb63387f7358b7fe19a82d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","b27796f6138cfcd24fedbf773f42734e"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","8c82ad19661ae21cb3616f8ca0a2bb78"],["/2022/07/17/Japanese/音便/index.html","ec71aa774f5ce2050a258e8e62d34d8f"],["/2022/07/18/Japanese/動詞 時態變化/index.html","802813a54f557d2520c8c76a8f0740a6"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4d00c4b5eefa8bfb6ce0f1f172645d9e"],["/2022/07/26/Japanese/助詞用法整理2/index.html","10721225f2f28f14242cfda1e709b184"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","872b7e5345936ebaa5e86ad182774d2e"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","88ab0616a945420c0c1061771edbc6dc"],["/2022/07/30/Japanese/疑問詞/index.html","e0fca2203de7ddac6942ff4effe15ab2"],["/2022/07/31/Japanese/助詞用法整理3/index.html","b63a2a5916214237fdc0a6ded37222c3"],["/2022/08/02/Japanese/副詞整理/index.html","90a67321a5a772671d1ea3570c61c50b"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","6eee69b6ed3817d0ae2e910eef69c619"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","ec19c610a2652d2e9fbad29c3d67aec6"],["/2022/11/22/Review/組長女兒與保姆/index.html","41a606d2186afc563401470d9958c64c"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","779c63a6c067544a8f7444419ec2695c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","0a07675a770384c43123a08f8ca74ead"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","75a8bb1af42bcbecc22278d27b8ccefe"],["/404.html","d8fb383a9807faa8c0b93104229d5d3d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","008a08f4b4ab2f372684c0aecbdc7a9b"],["/archives/2019/11/index.html","3e2b4ff900957f744cdbaf4096f99b28"],["/archives/2019/12/index.html","3782cf77dde638e1260ae8ce798a629a"],["/archives/2019/index.html","144e48bd282015f3599081d2ced345b1"],["/archives/2020/01/index.html","f9bc218192d5a3a0dcd646cbee7be487"],["/archives/2020/02/index.html","c376d18116b1f760560ad02a24775433"],["/archives/2020/03/index.html","b5dbae7c71e4dfa2a95439fb9d324308"],["/archives/2020/04/index.html","6047be4e13f0c261b433ea0f796cac70"],["/archives/2020/05/index.html","e4c6eed32c9f9bea5634a07773c0a5cd"],["/archives/2020/07/index.html","88cb2ab5001bb573545708fd9b3254bb"],["/archives/2020/08/index.html","2ba70c3a09f87b54f53512f3c24fc0e9"],["/archives/2020/09/index.html","94707d507b5c0f9c371960a131b44155"],["/archives/2020/10/index.html","8d70b7f92969322d718ee5701008b85e"],["/archives/2020/11/index.html","aaffb8f13c1d27ce326af4f3b05c6b11"],["/archives/2020/12/index.html","67ce07646ab593ead740a04f124b0c7b"],["/archives/2020/index.html","dab9ec2bf36663b1589fafc0cb16cd7a"],["/archives/2020/page/2/index.html","ec1d512d3d57c0ea2d1abe5e9ec186a7"],["/archives/2020/page/3/index.html","d18a8ea927daad6e30c2e672e4c7cc0f"],["/archives/2021/04/index.html","25a87c169ed48a7108edfbee17240610"],["/archives/2021/05/index.html","cb97bff86a2ed3537bb60960db33f9f4"],["/archives/2021/06/index.html","9d003ff00ef97c1bd94e5b1c230c8492"],["/archives/2021/06/page/2/index.html","35a8ad87221fa319db6a221d166c03e4"],["/archives/2021/07/index.html","24755aa857a605eab53bca8028e61d16"],["/archives/2021/07/page/2/index.html","4ca5e9107b20be7c13b19399c046a9fb"],["/archives/2021/07/page/3/index.html","d1b9e077577704bb04b7b8fede6b9d26"],["/archives/2021/08/index.html","7ca13e70dd8d2aad9823c30a7dd08e3a"],["/archives/2021/09/index.html","2584ddffd2f3c3302fb30a4e0e2029d0"],["/archives/2021/10/index.html","b8f4c1ff5f4fc2263e63d0c778942700"],["/archives/2021/11/index.html","5eb8869166e8a66842e89e189505bcc7"],["/archives/2021/12/index.html","411886a027864388fefb201edf40d8ee"],["/archives/2021/index.html","3a3a7ab67679f7158a05fb1ec619c7a7"],["/archives/2021/page/2/index.html","d9a4a90f729176fc23c4755884615ee3"],["/archives/2021/page/3/index.html","5d17eb139da045e3633fdba1b57e9163"],["/archives/2021/page/4/index.html","f82bba53d9cea5f7dfafbfc5ea18837c"],["/archives/2021/page/5/index.html","ec6204ee59e880d69930e34c7a78779a"],["/archives/2021/page/6/index.html","0cc7c250dd3662ba12d11b56f61a3877"],["/archives/2021/page/7/index.html","cf751b3b28d6bfc79e1674862b370c18"],["/archives/2022/01/index.html","37ccf88a6d89d40859f92b0c11863028"],["/archives/2022/02/index.html","da570175ff54d72af27d97f90022151b"],["/archives/2022/03/index.html","b72c43736242c3ec1742dec6e6821fe1"],["/archives/2022/04/index.html","6382968e97cf95405682b94441aacc6d"],["/archives/2022/05/index.html","b8def051329522d74c785ac0ec38a266"],["/archives/2022/06/index.html","1564c6cb72b72694e01367f234808f56"],["/archives/2022/07/index.html","8e9b6bb40f0d5222b5f0f505577a1304"],["/archives/2022/07/page/2/index.html","da43b363256a090123d2de343b5d8654"],["/archives/2022/08/index.html","02a59e435d208c10896e0e76787c2559"],["/archives/2022/11/index.html","7d563f9b03db003f8899a03a33c4a6be"],["/archives/2022/12/index.html","00ad3e7be5dd9d81c0df3d5c5a3153c8"],["/archives/2022/index.html","ecc0f77cafb70e5ae6d69bf839ff9b43"],["/archives/2022/page/2/index.html","773218cd8e3f492180e758762317ed1c"],["/archives/2022/page/3/index.html","5de38bcdfa4ee445f273ff6342523f1e"],["/archives/2022/page/4/index.html","a1d5087107ae2219586b221b2a56ab29"],["/archives/2022/page/5/index.html","1a9fad1ee66c8d60c36a29dbee884d31"],["/archives/index.html","131d450bd6493e086594d71403de98f6"],["/archives/page/10/index.html","087b761f1db26dd826730294a23339fe"],["/archives/page/11/index.html","3f00111f55678ce23332d34f742835b6"],["/archives/page/12/index.html","837cc22ec4123481a0fba4fb6faae40a"],["/archives/page/13/index.html","c6a037c5dc5166b18231a05cbe870bae"],["/archives/page/14/index.html","38d85d1790790078010902ad8d032393"],["/archives/page/15/index.html","989770414871c3007a8a670bdd9d165b"],["/archives/page/2/index.html","e6cdfb61f5634ca09510f238ebd08651"],["/archives/page/3/index.html","c02ae2041e1e25fb962e82e320461ed2"],["/archives/page/4/index.html","780593037f09f99e1f90c37b5f09964d"],["/archives/page/5/index.html","4615f107eafdc53b173fedc9da84139d"],["/archives/page/6/index.html","24e2ce7bf3e5b7586c8a86362ca8254e"],["/archives/page/7/index.html","1fdb1bb2ae254f556a9cfe7eaaba8273"],["/archives/page/8/index.html","c602714ed74f6b2634744a4e12f1032e"],["/archives/page/9/index.html","13816bae4dabca8f2cc0695dd15bf350"],["/categories/Programming/index.html","8deca01297f85fc9efe0f79f668ddcf7"],["/categories/Review/index.html","8f6b6a6ca0388eba92dda7d074cb076f"],["/categories/Review/page/10/index.html","b2dc440ffce51b044e7b3bcc32369240"],["/categories/Review/page/11/index.html","e7b7fc4173dfa7034e7f86257e2eee77"],["/categories/Review/page/12/index.html","5793889c3cd3599970fbbc427000a837"],["/categories/Review/page/13/index.html","2f105cf5e5b0de9997291e29aa209943"],["/categories/Review/page/2/index.html","f6223024363e0fb596f7316f48cf3741"],["/categories/Review/page/3/index.html","a7df0907bba10ebe559276a6c4ec9e60"],["/categories/Review/page/4/index.html","fb00c8df71a464080ee311fd175d36d1"],["/categories/Review/page/5/index.html","04b552e7de49c8489dcc77bcd544cf86"],["/categories/Review/page/6/index.html","8bdc5f7e1330ff9a930f2777c8ea06f7"],["/categories/Review/page/7/index.html","76ec424f3df56867a654b6d522e6a3b5"],["/categories/Review/page/8/index.html","3172052b5af5c2e55bfc89dffdefb4b0"],["/categories/Review/page/9/index.html","3ea990afbbd48210dec737036bf40cef"],["/categories/index.html","2efb322e8a6f0ecdd0fe21587d94b120"],["/categories/日本語/index.html","0e3f3b961f5c66a3fe583c7a13485e33"],["/categories/日本語/page/2/index.html","d5684e043783c8297858139cc6a08b7a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","67afad81652ffe3e337cb5d69bd1554b"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","7e35fab7785146825416a2304316049c"],["/page/10/index.html","0b709e0abfa0e6b3c973358b2c7df0ab"],["/page/11/index.html","47d04200c7e0818954521eedc849a507"],["/page/12/index.html","0537f34db310eb1da067ebcff76089c9"],["/page/13/index.html","879627cf3ca4c76ceeed7f84477df113"],["/page/14/index.html","eac4fc4d908a6d65955053d5bacc2ddc"],["/page/15/index.html","43f7b62f4f2c4e5330ecf23f1aa0d035"],["/page/2/index.html","1da5e12d7ae46a7e49ac7bf5e1018386"],["/page/3/index.html","c1fdc1b636cebf5ca26da08fd7bd1323"],["/page/4/index.html","36bca63e4587b8350ee12580e867dc53"],["/page/5/index.html","1e9c7b79fc1fd2185ed8f1a3219e5d2a"],["/page/6/index.html","ebed2d1011dfe552f9e61fd8e931f489"],["/page/7/index.html","a8c6136ec9a31f9aa7afd94978b4ff0f"],["/page/8/index.html","d0c84773c2d912f4f2edec1c04f9e250"],["/page/9/index.html","9e25d44a1af956e04bef8a9f9761b395"],["/sw-register.js","46684d654adc1b31eee2fd28c5565562"],["/tags/10分作品/index.html","4f673eb3e6ce4adcdb57a30cf4556d63"],["/tags/3分作品/index.html","5a17d8d7375caf90677272250bf09cca"],["/tags/4分作品/index.html","bcbf1b077f62d14fa7a35702186c55e6"],["/tags/5分作品/index.html","e53b0a22a41d9b453ee1e260784ebb9d"],["/tags/6分作品/index.html","fdf8c13e72a33f16e2b960a62c662a30"],["/tags/6分作品/page/2/index.html","43be7e605802cc15df3bbf9245d4f449"],["/tags/6分作品/page/3/index.html","3077890bed8d16d78988d4c14afc8339"],["/tags/7分作品/index.html","6fc83d4a5fcbb314b2ba9c08a6900aef"],["/tags/7分作品/page/2/index.html","ac67cf50026b42f05e149fbc6fc5f3c1"],["/tags/7分作品/page/3/index.html","19c851d1841025592cf625347a20ba67"],["/tags/7分作品/page/4/index.html","b254cb3393c11a14f74172d80f11b05c"],["/tags/8分作品/index.html","986420e8348631d503869db3e3a72944"],["/tags/8分作品/page/2/index.html","10368f5fbf1a65e34467718de0b23405"],["/tags/8分作品/page/3/index.html","0fe40724c163569ebb1f504e1d4c2d37"],["/tags/8分作品/page/4/index.html","9f7593d88f2a0968640cbf0273ef98b8"],["/tags/8分作品/page/5/index.html","995f6740183a15dba47f5fd2a2d76e6b"],["/tags/9分作品/index.html","5f5e890570a6f06cacb9dad405353037"],["/tags/N5難度/index.html","493010b6c62355f47ad22f003282cca6"],["/tags/N5難度/page/2/index.html","c32e51843a69f6736aea5a6b9d6a8199"],["/tags/index.html","877cb328efd4c1a564061e370ae880ba"],["/tags/アボガド６/index.html","b412b6672ab7b96025a698c6a17fd189"],["/tags/三秋縋/index.html","819a9647c9a3e816ac32aea53a8f7692"],["/tags/中國武俠/index.html","e6c180737d09da3d6efb23b70bdd7fdc"],["/tags/中國言情/index.html","6da7040209e17285512a85dfdad9f756"],["/tags/二宮敦人/index.html","fb55300f8a90b4aad340345c3615406d"],["/tags/人性/index.html","87a6511bed8f0ff7cec89dcdc3b8afcd"],["/tags/人際/index.html","13648474e7f918732ab306326e06a1b1"],["/tags/住野夜/index.html","6064137f814ac5d1515290e0bc046cf6"],["/tags/佐野徹夜/index.html","f2fd6a4f5436fa87265d066e8056a8cb"],["/tags/努力/index.html","f6cc4319d8bcaf61090dc103a21c83fa"],["/tags/動畫/index.html","6477fd7ae98e769baa8b9869d0b1460d"],["/tags/動畫/page/2/index.html","8d847deb362dc903194122575c5db367"],["/tags/動畫/page/3/index.html","95aa272af5d2e30990cc6cc9037ee2ab"],["/tags/動畫/page/4/index.html","ad230c02493a3d7946f55720cdba90e8"],["/tags/原諒/index.html","4b2aacbf45e84eedc35177b3169c60b6"],["/tags/反烏托邦/index.html","fe4990e5cf0dd6802990a8f81901432f"],["/tags/啞鳴/index.html","2e9a860198d278241726a355bb20e1a8"],["/tags/喜劇/index.html","57308bc31a09225249282c86d2fd14a0"],["/tags/夢想/index.html","c99d6c3b23998bc89eeb6aa0a052ef83"],["/tags/天澤夏月/index.html","96b15855b5242c475882fd0c0f4886a0"],["/tags/學習/index.html","55b56de9349307cadc3b02995a194457"],["/tags/學習/page/2/index.html","9b2ddccdb9962426b98b383cd7fc8d0c"],["/tags/宮崎駿/index.html","8c89f3d56aaccc39cfc2ae05a03a8433"],["/tags/小說/index.html","803fd44302a80fe649b8afa07997a768"],["/tags/小說/page/2/index.html","ed6ebce65df332457695595d1a3d6e15"],["/tags/小說/page/3/index.html","a025229ca1c07666c29d07e289f562c6"],["/tags/小說/page/4/index.html","d57484d59ee7e287cb7748534a007127"],["/tags/小說/page/5/index.html","27a74e9a18def6f0227635d462ffe1da"],["/tags/小說/page/6/index.html","0cb75cd5fba633677fb6d25706d1a01a"],["/tags/小說/page/7/index.html","9e30c784533139ec89c09bdcf7a1878c"],["/tags/平淡生活/index.html","ed4586e97c688ba679cd5c954055153d"],["/tags/幸福/index.html","f1a9d5f2ebf0b6c8cf3c8d1651ceac90"],["/tags/志茂文彥/index.html","5eafb16a8002b744989d73cdc9d17ba5"],["/tags/愛情/index.html","8c0c471111f4c9b4c65719e78baca2ce"],["/tags/愛情/page/2/index.html","0e0d2a27e5e099fd341d509be7085e22"],["/tags/愛情/page/3/index.html","4fcb227a5bbd01ee9b55027dfd0716c5"],["/tags/感動/index.html","c3a3d0f7861d3e66ccdd6e59f947a52a"],["/tags/懸疑/index.html","32c35d7d583de69271a699e70e9a3d42"],["/tags/懸疑科幻/index.html","bbc7646ee8e8890bdba91f94ffc3d123"],["/tags/戀愛/index.html","ed109c54895191672d78ab20271eb061"],["/tags/成長/index.html","66864581f9e40c6d27c9cfeb9ac4847c"],["/tags/成長/page/2/index.html","34dc10a08c35a024d131da591d58167a"],["/tags/戰爭/index.html","ff0ffcaf00f31ec33173134832a65c9a"],["/tags/推理/index.html","79a8103ea19b5d73d95388ec55a56b5c"],["/tags/搞笑/index.html","f656c889fda3a40a266865eaf44a1514"],["/tags/救贖/index.html","d4a19e6cc6016dfba20c143c018d554b"],["/tags/斜線堂有紀/index.html","603072653e6ec9f3d32066350ddf4aa7"],["/tags/日常/index.html","902aafe25b0c439b1d7aa70a295c3e56"],["/tags/末日/index.html","271885072b3f27bfbd370ce26a951eaf"],["/tags/校園/index.html","d288a10ecabb260c7e8862a4d1142586"],["/tags/武俠/index.html","9772a2a797c93eec7756a1409f856cb0"],["/tags/武俠言情/index.html","3c7b4b60854ac15304d7fdf7c825e05c"],["/tags/漫畫/index.html","dbb71df8154123b41ffa1149d95dc557"],["/tags/生命/index.html","a89aec30dccb20db6b8ae0e825d8a6f6"],["/tags/生命/page/2/index.html","f87850192ebeb051fad2b761bd6ef5a7"],["/tags/短篇/index.html","bda4991035d26d3e10ade97ccf6c83ea"],["/tags/社會/index.html","c64acb2bdecfa9828e995551f1af75fd"],["/tags/科幻/index.html","550b234212079fbd6a67bbd191933797"],["/tags/童話/index.html","15b1d06b421c392f9d05cee1fda6b1fc"],["/tags/競爭/index.html","de634e9dce727d7e0eb378996a3fa3b8"],["/tags/自我/index.html","3def9b1af351e3d995f076aecfbe1d8d"],["/tags/自我認知/index.html","24aa9c6f0ed19d73197938e1ee83072a"],["/tags/葦舟ナツ/index.html","607a17e21695f8d53aaf395e4de54a0e"],["/tags/藤萬留/index.html","75dbbcd529f811b276819c3330a491e6"],["/tags/親情/index.html","26f140b5f8d987ff89830faa80a5f040"],["/tags/雜項/index.html","3b0ebba51ab10d3fa7447ca7c4b279bc"],["/tags/電影/index.html","138eb033433dc2b2a9b42237802f71d6"],["/tags/電影/page/2/index.html","a31dff12290cbcc6435511aac57d998f"],["/tags/霸凌/index.html","2c0d125936c10b8bffd827f8475bf276"],["/tags/青春/index.html","6b53f9a237ebcc006500a94774afbe20"]];
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
