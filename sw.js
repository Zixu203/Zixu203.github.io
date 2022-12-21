/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","fc7c8752b74d0986ef673f9bb6521db2"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","e30c7363f22ecef9597cb2d05d35e31c"],["/2019/12/25/Review/無法計算的青春/index.html","17bac5c692ef493cf30a91129b1ac577"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","28b32bed9ae6f019563a0a4a24691a80"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","5f4d844b208324865ef1dc80c84e9c2a"],["/2020/01/19/Review/下雨天，不上學/index.html","fb87c64f36075a8bdf524fab80686225"],["/2020/01/26/Review/三日間的幸福/index.html","5338605bc709c3e61eb39a3ccab2d6ce"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","33db7202a96a377b4e3c8e2adae9d3d4"],["/2020/02/09/Review/青春期超感應/index.html","7ac55870a99716c12e61f746d09d05e1"],["/2020/02/15/Review/又做了，相同的夢/index.html","105e21193013f406f3f16171ae2b77b1"],["/2020/02/22/Review/回憶當鋪/index.html","15f1ec20462aeaa74fbf5fc184276330"],["/2020/03/22/Review/不適合自殺的季節/index.html","5f3a2e7b7426541f9460e78845635fda"],["/2020/04/26/Review/我們都無法成為大人/index.html","20b4d8b48cca1fee9bbb00fd3f01e1dd"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","fb0c32bfa281c8066c84785324c6ff50"],["/2020/05/17/Review/人間失格/index.html","64fad6f09ccd4d7938a56d8ada3463bc"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","f5c73744c06935862e3a31ab9d0e4169"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","116d4f2aa10c01a2fc08323bc28e35b0"],["/2020/08/01/Review/銀河鐵道之夜/index.html","8e3cfd6ee7fc886bd12412056f37e78a"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","5b3d64bde720e6e21d0841da56c4b7c8"],["/2020/08/16/Review/15歲的恐怖分子/index.html","14713e38e5c0a5cefe73f7b6bcc7a31b"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","1b4e8b26dc3c63dcaa89c8debf462916"],["/2020/09/13/Review/羅生門/index.html","e6f8cb621e59462f4ea4b532796a936c"],["/2020/09/20/Review/闇夜的怪物/index.html","e6181465526ef13f7511575bdac14732"],["/2020/09/27/Review/14歲，明日的課表/index.html","01ff5aee749f6e4662dacb15043a3319"],["/2020/10/04/Review/致十年後的你/index.html","0b9fd4ec0a0f1dc0d62ca43ab74a84e6"],["/2020/11/08/Review/滅絕之園/index.html","7416c69705e07e0ec203ab725ff3d903"],["/2020/11/15/Review/將愛拒於門外/index.html","56439c8af028fab636e015a0280807d2"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","6e37e161001fde67ba4e27b7153045d4"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","9f89b75d243636e6c047ffcec2f3474c"],["/2021/04/22/Review/道印/index.html","64ca56ab3ada89763316fe06f1a0a73a"],["/2021/05/03/Review/戀入膏肓/index.html","93e602af37b2012aae5d6c0493c4e0a3"],["/2021/05/10/Review/Dice/index.html","69ca04060d666826b4758326cbf4e6c7"],["/2021/05/15/Review/魔女之旅/index.html","b4400766026186b0a86595a3768006ed"],["/2021/05/28/Review/戀愛寄生蟲/index.html","3592ac1010a112be39fe1a233a30fbf6"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","5bdb9b2f367eefe42cfb41035a4f9872"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","77fd23b2b4174dcd4adb2220964dcd31"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8a00a41d6e7f514f7c922a146e48c622"],["/2021/06/05/Review/流浪的月/index.html","298cc04ba6731d3c6a567542cc2e3a9d"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","83448ac2ec64c4c0bce010d79d304195"],["/2021/06/13/Review/第一人稱單數/index.html","c25cc53934209e9118ed00712370d2cc"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","9e7cd9439ceded918f11fa4b8f1dc24c"],["/2021/06/16/Review/願你幸福/index.html","cfb31f9f3f29bedbe7720f5dbf8da97f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","db558385fdb2d67603d0f42160ae05a1"],["/2021/06/21/Review/神隱少女/index.html","c1800e6088126fdb35d78ef9757c2247"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","c3a0514d742db1bd1246fd5dffa302ba"],["/2021/06/23/Review/天空之城/index.html","df3329b717d7a6f46c882753af31de81"],["/2021/06/24/Review/魔女宅急便/index.html","bdf8e61310d8adc4eab53f2fdc2380fe"],["/2021/06/25/Review/借物少女艾利緹/index.html","12ecefc834c8843fb1976ee3ddd2e83a"],["/2021/06/26/Review/魔法公主/index.html","c1fbc4827b5a2093b4bdcb6dcca4b110"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","c8737cb8b2cdc5a240d39c2313645133"],["/2021/07/04/Review/飛雪與劍/index.html","1b71c519ccf5c5b275cd78ec6758b713"],["/2021/07/09/Review/地球防衛少年/index.html","c40ad535a75ad724a95a0225b004e514"],["/2021/07/12/Review/Angel Beats!/index.html","2b38a9c054119e14b2ea6ee9e8d3dbac"],["/2021/07/13/Review/Clannad/index.html","7b72d65a31aa425c320b9025a55ff7a0"],["/2021/07/15/Review/AIR/index.html","3478579c6c511faf13737f9e680b405e"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","eee97fb4c5195f7f047c1ee18f884952"],["/2021/07/15/Review/螢火之森/index.html","94d21cbea806e9980782f20a60c6a039"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","3759f14f157367726d1fe01acc24d860"],["/2021/07/17/Review/奇蛋物語/index.html","b21dc402278e4dd77041c1f05ee4444e"],["/2021/07/18/Review/Vivy/index.html","8fe27bf995675e05d8e5676db25722c5"],["/2021/07/18/Review/請妳消失吧/index.html","a959b318bb8bcda0af67007cb4629428"],["/2021/07/19/Review/漣漪的夜晚/index.html","2ff3fd13a99f1f18317c3f0af2426287"],["/2021/07/20/Review/月色真美/index.html","c2b9feea5834425f3fab326f1f29cdb8"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","c89c1a27eca28b87745683cb6c08ca5c"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","a570a21b41378c564ce2bf139b474f10"],["/2021/07/22/Review/罪惡王冠/index.html","c7b0ae49ac199b5b8b5fbd41b87a0e49"],["/2021/07/23/Review/弱角友崎同學/index.html","fdbb47b526c48d7bd181d6010e5df8c7"],["/2021/07/23/Review/惡之教程/index.html","7b11876c3d58d953bcabf77602ef597a"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","c60e7aca609089b50529fbb1b03a5a01"],["/2021/07/25/Review/魔王勇者/index.html","d94ec8dfb472dd6b0d1ba688adc27a92"],["/2021/07/27/Review/一年A班的怪物/index.html","3703b8e19dd9b63aaf755e3002a138c3"],["/2021/07/27/Review/奇巧計程車/index.html","82c86fe60616742faa63b04db67b6e36"],["/2021/07/27/Review/專情的碧池學妹/index.html","298904692b6a51133c2d84ad8d25b1cf"],["/2021/07/29/Review/只有我不存在的城市/index.html","5ffd6d0f20d2791083415fec959424af"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","37d0855570f52b179efc61cbf420b738"],["/2021/07/30/Review/可塑性記憶/index.html","1520db87ca3a9538ed40afa1b7d1420b"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","4953f11248af9bbd6fff785224e278f8"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","1853478d3becdadf3fcc08c9633ffb4e"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","3fbd82aac07f697c759ac697e68f4d75"],["/2021/08/25/Review/清戀/index.html","d54befa0587dfb816a86aac24d17259a"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","c0b1e8c815a698144a749e5bf1bf1666"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","be73544b0d8679a5b5d566c6aaa98a68"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","5f793cd3679de818b8c011b9a22c9253"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","23a0e374b7b1412c6204ebbe4d2fd6bc"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","b033adeef044e9cc633fc70d1a794455"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","9f031b25036211f39edd3bc0bd35e141"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","2b22c7ad4aa83689064a5861d4821bba"],["/2021/10/16/Review/龍與雀斑公主/index.html","af6dae00d4abbb7f7dc95a0013a58827"],["/2021/10/19/Review/孤狼不想開後宮/index.html","cafaef6f5f4d4467cf58365dd437261a"],["/2021/11/13/Review/徹夜之歌/index.html","3108c0734e8620c87eac765bf92636f0"],["/2021/11/24/Review/武煉巔峰/index.html","f06cc8e94c9bfa17b66125c853a0b624"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","358c016c2e1a4f079fafb26d8141eb0b"],["/2022/01/28/Review/神醫凰后/index.html","52cdb6a1ce57108e72ab5d8e46c36a74"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","974c259e8a9c3f3e9c7881103c0f6495"],["/2022/02/13/Review/夏日幽靈/index.html","640dad874270bdd7e13e4f015b2dfce1"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","066128045a628f6840e083e6fade5aa7"],["/2022/02/26/Review/賽馬娘/index.html","94dc06fcec076afe8687e1e578f24812"],["/2022/02/27/Review/大欺詐師/index.html","d99f2d777e4ec082638800cea5a7db10"],["/2022/02/28/Review/前輩有夠煩/index.html","5a9cb446d5443e970e04ec5a5f80a4eb"],["/2022/02/28/Review/碧藍之海/index.html","b87a4d92ef23a2425438c353973e7c52"],["/2022/03/05/Review/落第騎士英雄譚/index.html","54d52efbc48f2aa081dbc756803cbe33"],["/2022/03/06/Review/Another/index.html","059e870abe051f55664370c57897ca12"],["/2022/03/06/Review/入間同學入魔了/index.html","929fac52981faeb3c87cce25a51c013b"],["/2022/03/18/Review/再見宣言/index.html","cccac11e83c2009f65e93470deb8b9a6"],["/2022/03/23/Review/生若冬花的妳/index.html","5ab37077cb186808171c4895015a44ed"],["/2022/03/25/Review/天之弱/index.html","6efaa080d917fdbea5e83f4939e0b040"],["/2022/03/31/Review/滅了天道之後轉生/index.html","e93206dd20e69223b0aac92ec3a33294"],["/2022/04/30/Review/泡泡/index.html","d2b157c830939293935d766b549828ba"],["/2022/05/04/Programming/Dynamic Programming/index.html","77b248a275265b147d35e7b5e7f49fa5"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","a05ee5cc79a6184d259fc76654ac6cb0"],["/2022/06/13/Review/偵探已經，死了/index.html","2c40e406eb8aa919301e613547fc39be"],["/2022/06/14/Review/黑色子彈/index.html","e18d2086f4c126eb91185e3d1d0ec1db"],["/2022/06/15/Review/黑白來看守所/index.html","cee733875c1088f10f49a7442f3a01ac"],["/2022/06/16/Review/虛構推理/index.html","0d16c830637324d4aa2115d7ca51d269"],["/2022/06/17/Review/戀愛與謊言/index.html","4fc79f26df47cb2e73c59c71db8beaa9"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","01f00e3c12ce570cee585e86d0c7149f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","b190bba03887b103fd22f3341414d02a"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","0f16a9fab739d2820dc85db6b09a28a1"],["/2022/07/03/Review/Hello World/index.html","1e29dcec1ebb648c080139f8b81bffde"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","b968526f42738e146af69dc4fb9ed401"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","b67f113765e0d5bacb030c8d8e49be8b"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","3c29613236e519402d470b80457776c8"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","62d492868e3343e8efca56878b6e4c38"],["/2022/07/16/Japanese/動詞分類/index.html","229f2d0f3ea34399dab6431e90bc56d8"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","f16cdceb8ece711db54827a809cf4da6"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","a06100c57de07bc9ff93f5963842e743"],["/2022/07/17/Japanese/音便/index.html","2882ee0e84dd307e8f1ae26fb01886e3"],["/2022/07/18/Japanese/動詞 時態變化/index.html","8f32f6da8bebabfda4ecb239a333155a"],["/2022/07/19/Japanese/助詞用法整理1/index.html","44f4f8837a051b0b0e019ec901d2750f"],["/2022/07/26/Japanese/助詞用法整理2/index.html","09b38004bb6cb972fc5444fa8cd15f09"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","65aa04a3f9c5dbcc65cb0b15c3163980"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","2a685f4dc87d8af2ff472b9b947e1e0f"],["/2022/07/30/Japanese/疑問詞/index.html","065c430ecfb9df7c11339f71a68bdaa7"],["/2022/07/31/Japanese/助詞用法整理3/index.html","0e831f130dddb540e487fdb46aba0c02"],["/2022/08/02/Japanese/副詞整理/index.html","7fcb678b1c9d52d6610f6c15e84d627b"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","f13de1c79ba3f360b2e8c821a2064c75"],["/2022/11/04/Programming/Data Structure/index.html","d883bb38fdf4c57a37103230d493ddef"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","042f0e53d6fa070b6ac2c7f1cb7165d9"],["/2022/11/22/Review/組長女兒與保姆/index.html","c7335fea5d20abb4a2b1136b3b89d889"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","f38d47d01826e71aae33cf16f09c7405"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","6a7c0e277b14d57e2a75a6fcd19ca0ee"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","0366f5fb4b580bd47aef886e67310365"],["/404.html","1788aaacf8e3568d4d75ecbc78336727"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","3398b807b17a1da420376cd0fd6385fd"],["/archives/2019/11/index.html","e8d92e62ceaa7765e0387c65acc21890"],["/archives/2019/12/index.html","26569d211c4e239a4338d58a2b1fc3c9"],["/archives/2019/index.html","4879ebe8183d3c8174acb438ffdb04ca"],["/archives/2020/01/index.html","5b441fbc2b5540cbd1b69e5366536201"],["/archives/2020/02/index.html","1ce7294c80014b472c122647a0488123"],["/archives/2020/03/index.html","3fdc69452ca6646171b5fd88887beb64"],["/archives/2020/04/index.html","e41f38c0b3c196242905e303c33669b0"],["/archives/2020/05/index.html","56dc5f51374ae6141ee275ca618414b3"],["/archives/2020/07/index.html","c3e86d89b7d8aa798fd46b3c0d760aed"],["/archives/2020/08/index.html","270273a0f5bf594c72cbbc8ba3681f7c"],["/archives/2020/09/index.html","9381b263c70535af9d379a5f558821b8"],["/archives/2020/10/index.html","a62cff3d8ac167e0abd5dd260fb94b18"],["/archives/2020/11/index.html","ab46400c0e6470b9a78d4363f5b3b449"],["/archives/2020/12/index.html","54c6391bf8680549cf32aa285d0290a4"],["/archives/2020/index.html","b942b8b7504e7004ad69370dbce8a6c8"],["/archives/2020/page/2/index.html","d658a88fb6edd2064da95570e3e4c114"],["/archives/2020/page/3/index.html","d67accc1853b7c320d8977b5b45ec9a6"],["/archives/2021/04/index.html","577491c5916c422f8a9106074b4d6f48"],["/archives/2021/05/index.html","a00517df0d656e871857870c4b29ee9a"],["/archives/2021/06/index.html","b32b25cf5ba7d68da62af81a28e14a7d"],["/archives/2021/06/page/2/index.html","14ebc623a16483f7a8f6aab462668e69"],["/archives/2021/07/index.html","e67bf5a2d6dcf5d0f10b41bf13fe18bb"],["/archives/2021/07/page/2/index.html","9ca7a894eeab937b6e6b7fc60183a3a3"],["/archives/2021/07/page/3/index.html","28989a20fe1649573f998e2e29527e47"],["/archives/2021/08/index.html","3e393a0d7f49a07e9322c8dfae6bb783"],["/archives/2021/09/index.html","681f614402c7fdcc2ca9f2ace2f76023"],["/archives/2021/10/index.html","f83fcdf959a81932c57ead1f33d539a5"],["/archives/2021/11/index.html","4c27a29a7651999f9608fb2b477684ed"],["/archives/2021/12/index.html","367b095fc8a533aea6835d1b277f1aad"],["/archives/2021/index.html","09a2656cae6adbcf0bee58fd466a5847"],["/archives/2021/page/2/index.html","4e7cad044394f6c92f008b3226329e7b"],["/archives/2021/page/3/index.html","8d568fe4c0375c1968947474fffd8ecf"],["/archives/2021/page/4/index.html","71f3aae3a1971bbdfb163ef76997a26b"],["/archives/2021/page/5/index.html","86759c7597e7926e05de8683ecd9d72b"],["/archives/2021/page/6/index.html","54e4a1379e69a9b7c31a2c8872d64b4e"],["/archives/2021/page/7/index.html","32a517d0386058f9f7afb11093e03b6e"],["/archives/2022/01/index.html","44ffbfd536f4698f483445295583e7d4"],["/archives/2022/02/index.html","388e492b7f4f27732a43024803d1225b"],["/archives/2022/03/index.html","d33f5eb816cab440f8308f7d2311efe9"],["/archives/2022/04/index.html","3b8390a092f4531993ec9cf4dfd5afaf"],["/archives/2022/05/index.html","4b59dfce27ed394a1cb131a1acf43b1d"],["/archives/2022/06/index.html","754e6aa02bdc6fca7bb0e031fd5c5763"],["/archives/2022/07/index.html","752cff7d5dc63f6f57f0b6a561836af9"],["/archives/2022/07/page/2/index.html","a43673ec9b7efb57adec7cb7041a14b5"],["/archives/2022/08/index.html","d3e644ca162581fe7aa974d9e2228352"],["/archives/2022/11/index.html","1cf4433e22f3ad6fdcd3e401de72963e"],["/archives/2022/12/index.html","3a4717d3b0a21e3af9b9a875b55bc656"],["/archives/2022/index.html","db249195df1f2103b6a08f91ce8bad48"],["/archives/2022/page/2/index.html","f97292bccac8ce631e0b6df632412557"],["/archives/2022/page/3/index.html","cfc43dde8e6e47057dad51a4d34c5979"],["/archives/2022/page/4/index.html","a91ce0a2dec89858c62ed8de0553f064"],["/archives/2022/page/5/index.html","3295994252c63166af9d730b907e18c5"],["/archives/index.html","c68013601bb1c1f20d7c6618376d1753"],["/archives/page/10/index.html","cd7c65d1faa2f45f771c1c5ac87e6349"],["/archives/page/11/index.html","920f2ba28aa7551b9aaf12a3865a8382"],["/archives/page/12/index.html","556cba1ce455071a2c3e8d615f63226d"],["/archives/page/13/index.html","66c9e14539f761d7076cb25d8f17e91b"],["/archives/page/14/index.html","9a882fdab0442a8772acee53605b99b7"],["/archives/page/15/index.html","ffe1da965fdb9c4c168400e931eb9872"],["/archives/page/2/index.html","1ec9b49b63567e1d1664db1655c9118e"],["/archives/page/3/index.html","f6848631013f842775136ce2be6f846d"],["/archives/page/4/index.html","cf778bbbd57e7e6c6652a823ae05c607"],["/archives/page/5/index.html","b54f3c06e4fc33e2293ccbe18dda63d3"],["/archives/page/6/index.html","4dba2911c5eae0c107609785f4736c46"],["/archives/page/7/index.html","c056aa25282eebe8ba54c986fd56aa03"],["/archives/page/8/index.html","15705fb77a95c5045018abc592984e14"],["/archives/page/9/index.html","415859f361770218a04506f77e7801dc"],["/categories/Programming/index.html","d40dc5b5f5c870f171a89a1ce7f2d027"],["/categories/Review/index.html","766d5dd699c2dc9e03018827899ffd8b"],["/categories/Review/page/10/index.html","74528b5618721b63557b9013664e4de7"],["/categories/Review/page/11/index.html","069ae6033c68c5339217e2ff174ed2d6"],["/categories/Review/page/12/index.html","5002c3628cf99a396d41d379a6fa43ce"],["/categories/Review/page/13/index.html","cabad2721edb0c233b1d11f283b95a64"],["/categories/Review/page/2/index.html","eee0f074aa3cc9b99436133c71479607"],["/categories/Review/page/3/index.html","646d123d7455605ccedc81aee1157f72"],["/categories/Review/page/4/index.html","22983038721a5f9d9a7f117895a50140"],["/categories/Review/page/5/index.html","8e427953e1565a8451dd50b210d16c70"],["/categories/Review/page/6/index.html","44b9d25aa9dc422f9fc1bbe8f2ef1b76"],["/categories/Review/page/7/index.html","5b7346f10d5581500ee5e2239d3c36d5"],["/categories/Review/page/8/index.html","b6eef0e3e36e394a1371a3ec28fa06f0"],["/categories/Review/page/9/index.html","67c1f13291d726162cde885a86acff0d"],["/categories/index.html","98b14b3dbbb413870ba4f94edd99f33c"],["/categories/日本語/index.html","669938b4b8d54a93180e438ff34dbd44"],["/categories/日本語/page/2/index.html","bb0e8d37331c0cbc7092c10c77accacc"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c45252b9c4c848529fb740df0a306fcb"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0512dc9dd044afe2f300736a430fd422"],["/page/10/index.html","e338c4ea01a96bb3265939eb736717a3"],["/page/11/index.html","072776b4f67aae710a85fefb9154cac5"],["/page/12/index.html","5167e49c16d8166ae22f2d4fbbcf5ff1"],["/page/13/index.html","2d4170af24b9e99fc2e2fc87b6bc2d0d"],["/page/14/index.html","46eff1101f6362899d60f47d2d9c45f1"],["/page/15/index.html","5d1d3724202bf9934ae5df325223b0e7"],["/page/2/index.html","3c896a5ecc92d7eb70307f1896959357"],["/page/3/index.html","351d938eb680e91400b020af14faed5e"],["/page/4/index.html","fdf5e7c9af02557c1ee4c53fba9d624b"],["/page/5/index.html","c25679f9a684e223bee0ba40de67a275"],["/page/6/index.html","8890cac545d737ad350a069449932cbb"],["/page/7/index.html","594bf00cb01c594649ce304d1161c22c"],["/page/8/index.html","c71aa573e1366033958a0c7d19c5bc25"],["/page/9/index.html","9b2bc89caf2ea2e3e174b1cc1479ac8f"],["/sw-register.js","b66edbc7d5d7a515c4d482a1f62a72f6"],["/tags/10分作品/index.html","bffdb7dbcb9ca976a8cf21c05dabfcd5"],["/tags/3分作品/index.html","d1cbfcbb9bf151e93a4d02c3a7d72ec4"],["/tags/4分作品/index.html","6080406a79ebbe2d086555ebb3af9173"],["/tags/5分作品/index.html","6eaf2de72f7f9eaa2b3a0fc6a4aeee32"],["/tags/6分作品/index.html","6627a35fc9b96084a1fa882929ac22e3"],["/tags/6分作品/page/2/index.html","39286cb6da852cb2c84ed70a9c59fdd1"],["/tags/6分作品/page/3/index.html","0db6bf0f7b81c2a903c6e8a7e830f176"],["/tags/7分作品/index.html","12c91d58ba76e3c26e999f80bdebc9af"],["/tags/7分作品/page/2/index.html","3beb83c2a479d79a4221247bf7b4be2a"],["/tags/7分作品/page/3/index.html","8902246cadace28fa27b2bf80f1a5957"],["/tags/7分作品/page/4/index.html","1a3b34227922ab573bb0a0fbbde23124"],["/tags/8分作品/index.html","fa28417af9efe93869d6b6282ae65450"],["/tags/8分作品/page/2/index.html","d3261aa3f8bed21ace7007794fad4d13"],["/tags/8分作品/page/3/index.html","32de11704f825eee70b55271d554df4e"],["/tags/8分作品/page/4/index.html","354e0e8cb25a3d85d7f52fcf10c84401"],["/tags/8分作品/page/5/index.html","e02ae720c4071bbee9a834af53984184"],["/tags/9分作品/index.html","ff0def83ca0321921c285e67072ab157"],["/tags/N5難度/index.html","9584acba1d41db261c16d24657f5625b"],["/tags/N5難度/page/2/index.html","eb2a5e482f8a1fb5e44cb6cde522d4de"],["/tags/index.html","6fc4ebd7f4b063a504344263aaa45285"],["/tags/アボガド６/index.html","665c1a2375ab2abc68bbeaad4b08457f"],["/tags/三秋縋/index.html","c19337ab4101db4e1627431faa1149b0"],["/tags/中國武俠/index.html","57e5d3ef997942170fd62a843171dc05"],["/tags/中國言情/index.html","c9ad8eeec712f84fe065aeaa17d87e09"],["/tags/二宮敦人/index.html","1e91a9fe1649b6d25b4ea5391ebf2364"],["/tags/人性/index.html","629f5c25266ee4d8d5cfcbb5ccd7fc95"],["/tags/人際/index.html","457bddc22703dd3f18d3a86b4c336cc6"],["/tags/住野夜/index.html","bd89576c5b60a36a75daa995a482727d"],["/tags/佐野徹夜/index.html","24fa6c8725219d0945aeee0384d63e7d"],["/tags/努力/index.html","79cde4823e87469a921cdf02314446cc"],["/tags/動畫/index.html","3fdd6828adc546cad9927aa2132fac5a"],["/tags/動畫/page/2/index.html","0f7d27953d17d4cb8e35f259a2f80fb6"],["/tags/動畫/page/3/index.html","2ca48a92329a09a6a82d56ded5eb15fe"],["/tags/動畫/page/4/index.html","5c852323597aea9c405c02178f0af882"],["/tags/原諒/index.html","0444b370efd8ebc5294a3ae07afeb187"],["/tags/反烏托邦/index.html","8e2f523634aa905dda9d8432e1da88fd"],["/tags/啞鳴/index.html","a0a2353827174ad9ecbeb22c5d0accc0"],["/tags/喜劇/index.html","ef2f70d545c23d980eeb2e93516a59d6"],["/tags/夢想/index.html","5068ce614ccc23035fa75ad18ce987eb"],["/tags/天澤夏月/index.html","492527aa1f55efb8588e1d37d7733ab7"],["/tags/學習/index.html","00403ddd804685eaf941557af577c54b"],["/tags/學習/page/2/index.html","3191e5a02bb4689c32ff466f444c3869"],["/tags/宮崎駿/index.html","c110dbf0d34596bb9231886799da92af"],["/tags/小說/index.html","f0a33c6223c7e4d65f25c3faa7ad7143"],["/tags/小說/page/2/index.html","98bff1c1495eb3cb4c6d199800770f9d"],["/tags/小說/page/3/index.html","cae28b5a0f37c0613acf280af7fc9fac"],["/tags/小說/page/4/index.html","5d718f4a324e349dad232bcd91f9aeec"],["/tags/小說/page/5/index.html","0be1f81ad1e6d34d6a3c2d352b75e445"],["/tags/小說/page/6/index.html","a61fb22be87c85f2789b264e25f6b802"],["/tags/小說/page/7/index.html","83c5d3163109910b9e7d16d7a151941c"],["/tags/平淡生活/index.html","0a4535b3aa021937a65e219c7601ffd3"],["/tags/幸福/index.html","58623d37b7ed44cfa6c56d906f96233a"],["/tags/志茂文彥/index.html","3e56bdb9521c2af3a714bd6716f6ebca"],["/tags/愛情/index.html","fdf3a3fa1205ef2ef0901260c6e11b68"],["/tags/愛情/page/2/index.html","5b5544888298ab2e19b0b01514c6bfae"],["/tags/愛情/page/3/index.html","5dae191821dd9a38b3cb644d4bd001ce"],["/tags/感動/index.html","9162a05b579fec4c5d7d67f16bbe0413"],["/tags/懸疑/index.html","47269dbb834b7cd078b9ee4b6e4c3d15"],["/tags/懸疑科幻/index.html","70c21888639aeaeb9944716b0e0617bd"],["/tags/戀愛/index.html","6e2ce74648b47997a15ea44eb027b251"],["/tags/成長/index.html","b6383869f2904d4feb53f50a753ada76"],["/tags/成長/page/2/index.html","51e84a0791dece0180def724f9ae1f05"],["/tags/戰爭/index.html","2e23544fa70c7fc0c3bc16b0b54caf7b"],["/tags/推理/index.html","2b4fa9ce68befac22ff010aa021a2198"],["/tags/搞笑/index.html","02de20053f00896aca1b53dc3a1e4a15"],["/tags/救贖/index.html","cf48bf338207a7e78864b7eb0f027bc2"],["/tags/斜線堂有紀/index.html","81da5bf8bd64942a7384a23b7468f078"],["/tags/日常/index.html","740955dae21c79d4ef15f617b02f1267"],["/tags/末日/index.html","a6535fc0ab73f5e8a6688d12301e8c57"],["/tags/校園/index.html","86399a199c4701d56f90943ee3d0ab59"],["/tags/武俠/index.html","04521fd185bb8cf9763d2bc44c2ac50f"],["/tags/武俠言情/index.html","f0716356863a8a14e023450693985141"],["/tags/漫畫/index.html","cc83fe585c0cd8326c9195f58d1966cb"],["/tags/生命/index.html","25de85b25db31df2b0bd5a5ce6994f7e"],["/tags/生命/page/2/index.html","410cec15c9632480408d7dd2a20c07bb"],["/tags/短篇/index.html","71c14b24db31b951d2df602d7648bff6"],["/tags/社會/index.html","bea15022f8adefb8266bd0b4c0dbf379"],["/tags/科幻/index.html","9d29e5354aa9fce6fdc2bf6ef78aa46b"],["/tags/童話/index.html","4c302f1207c6f13844103399911bb437"],["/tags/競爭/index.html","d91718c48cf71648b4089a02fe402b18"],["/tags/自我/index.html","16263243f0722e60cd6a0b4d498ee32c"],["/tags/自我認知/index.html","16df37c43f21594df1125485e811446e"],["/tags/葦舟ナツ/index.html","b67acc3d41cf2367ff5594ab43bd3c50"],["/tags/藤萬留/index.html","12f29c3b87eb0729784e02b4bce07596"],["/tags/親情/index.html","8a289244761c58d7091583e3aea0ebbf"],["/tags/雜項/index.html","7b1e83b5b5140e152038b590ad498d72"],["/tags/電影/index.html","76a711e7ddcfa1c83660a242974e423f"],["/tags/電影/page/2/index.html","8102dc194adb2d4ceef6e8ee9a83b6da"],["/tags/霸凌/index.html","001e28ab27142b02131e5ad35f7abba1"],["/tags/青春/index.html","66285d8732a98b997b6500abb06a635b"]];
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
