/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","5e05b6e42327110ae723a663875a72cd"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","bb5340d9605e9419fd998cf8fbbb63af"],["/2019/12/25/Review/無法計算的青春/index.html","fe1ba4d2ea3890eda4c65884cccce08e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","664e5e1d1a6d8373715e6d488f8eef75"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","63070c2f7429dbc6d42a3566e63efe11"],["/2020/01/19/Review/下雨天，不上學/index.html","7d0e138ed45a6d7e8c822d2ef7628e46"],["/2020/01/26/Review/三日間的幸福/index.html","043887e24fb48b376c2e4aefa41713b7"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","0340b31793eeb99fb1460275c3dea7a8"],["/2020/02/09/Review/青春期超感應/index.html","284169664076584ae9964b5cfece3c01"],["/2020/02/15/Review/又做了，相同的夢/index.html","cc3181b0775781e520481c1312f668ac"],["/2020/02/22/Review/回憶當鋪/index.html","b5be8929d42afd12ada03b78c5256b13"],["/2020/03/22/Review/不適合自殺的季節/index.html","1f71fdc8107c1ceba1d95f647881a393"],["/2020/04/26/Review/我們都無法成為大人/index.html","f89b36ea521058b4855e62714238699a"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","4351defcba5df6db1034251e58cd1f20"],["/2020/05/17/Review/人間失格/index.html","f99d98e6f8ea2fa1745713f6b5938a1c"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ec9213e24011574b00ff76dd420f8ed1"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","b32bb326305075fc6869a7760c6ee9ae"],["/2020/08/01/Review/銀河鐵道之夜/index.html","42071da8b1a1f473e562574eb5ae3e3c"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","16efae55b02e585ad170293aa8689317"],["/2020/08/16/Review/15歲的恐怖分子/index.html","a913a48ea0c7ec4e92fc856ee49b3c1d"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","a1d8ec02778cf4390b76fc609c3704c0"],["/2020/09/13/Review/羅生門/index.html","abe771869e25eeeb07cd0cf6e9cbda79"],["/2020/09/20/Review/闇夜的怪物/index.html","8c1379fe6edfb21bf192b29a27e15b85"],["/2020/09/27/Review/14歲，明日的課表/index.html","9642b68f669fa91d5df87b78906ebf4e"],["/2020/10/04/Review/致十年後的你/index.html","6fd339c4fe935c128758b6a3adb461dc"],["/2020/11/08/Review/滅絕之園/index.html","e14261af492b7c88066eadf15654d2e3"],["/2020/11/15/Review/將愛拒於門外/index.html","f91c676c49aaa688c416d9ab83f3b501"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","5e0721ee8168bf62cc0a02817bdf0919"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","695b3212016c3014ecea702c678de360"],["/2021/04/22/Review/道印/index.html","8744b999e76a942a5e76c131d12b6923"],["/2021/05/03/Review/戀入膏肓/index.html","539374f7847015d8b9b71eb8cca3a5d6"],["/2021/05/10/Review/Dice/index.html","845cd63852e827d50f54c434d4c5999d"],["/2021/05/15/Review/魔女之旅/index.html","3764183529d45268d2c015badda3d89a"],["/2021/05/28/Review/戀愛寄生蟲/index.html","978f010245040b0ca627e9907f6b6a74"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","17ba1466c579b3a532aa77bec659ca0f"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","051da9cb4fcad97e8ad797a7207f28fe"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8825a4f72e6c0ad3d6bcf6531acc6f4d"],["/2021/06/05/Review/流浪的月/index.html","8a79fcc1abc8f36f285d064b4a858e8b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","4bfbb4f59cd86b79a9aff6dfc0cceaaf"],["/2021/06/13/Review/第一人稱單數/index.html","8ddfa9fde56eeb5c85d739e63e51a32b"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","04a87c88adeb3571ad9d4ed351e1fc8d"],["/2021/06/16/Review/願你幸福/index.html","d8b42a9efd3f317cd268daff9b9f6747"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","42d4c014d8779835794777a73324cecb"],["/2021/06/21/Review/神隱少女/index.html","3740b13bfaa313cfebd6b2dd2617e1d4"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","d0a63f4c8e388ce0f186551f237a807e"],["/2021/06/23/Review/天空之城/index.html","8537877481356a9c86eb3d738975a768"],["/2021/06/24/Review/魔女宅急便/index.html","e099cc38a1691825b737accfa3bc3407"],["/2021/06/25/Review/借物少女艾利緹/index.html","8b62385ad6661a5123cd0173dbdedc4b"],["/2021/06/26/Review/魔法公主/index.html","2febc6763e564baa333625a8e816ae11"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","5269e4d538f9dd325bc67f57fc7ec34a"],["/2021/07/04/Review/飛雪與劍/index.html","28a8679f5f1a0cf53a58ca729a60a90e"],["/2021/07/09/Review/地球防衛少年/index.html","1565a38ad32417648209eb310cf4a95e"],["/2021/07/12/Review/Angel Beats!/index.html","e1bba02e4110b882e17cdc310cedc047"],["/2021/07/13/Review/Clannad/index.html","d22c9a4ece83f613fd75a45f379f99c9"],["/2021/07/15/Review/AIR/index.html","ab382d7f165690a7f599fe568feaecec"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","ef932fc3500ab2818d416f31b85163d7"],["/2021/07/15/Review/螢火之森/index.html","ef2861de79dcf9fdf35b8ef0a7a4eff6"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","e67e191d6e38167e6742b08c7eb30e42"],["/2021/07/17/Review/奇蛋物語/index.html","e9e8fb90d92f55d9426ae9b2840abd8a"],["/2021/07/18/Review/Vivy/index.html","59d8063f9e75c3dafc16e1ff03c26f1f"],["/2021/07/18/Review/請妳消失吧/index.html","a925fafacae0e57b6fdaea2a79840fa7"],["/2021/07/19/Review/漣漪的夜晚/index.html","cbc09d66a4a5a29e60a8b786866643b1"],["/2021/07/20/Review/月色真美/index.html","eab0881b969345f3e3dd475096b38f40"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","94c84c01aae9cf21d9bcfc2735120e51"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","af95c7bc0e81f462f79fd1ca53123024"],["/2021/07/22/Review/罪惡王冠/index.html","6203958d8e886d43364942e9317d523c"],["/2021/07/23/Review/弱角友崎同學/index.html","1850f48c6599d8b0e6a259bf84dc5360"],["/2021/07/23/Review/惡之教程/index.html","8123fbc2ffc2db4e7fcc0040e03d6139"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","500f61e900132712e58aa593815701c1"],["/2021/07/25/Review/魔王勇者/index.html","a8d5ef27bdd82b17b055eb85a9f29bc3"],["/2021/07/27/Review/一年A班的怪物/index.html","db571579369a59a6daf477c3044edd24"],["/2021/07/27/Review/奇巧計程車/index.html","f8c9210f1d5e2183d073c8312bb949d1"],["/2021/07/27/Review/專情的碧池學妹/index.html","b19e1a290313385d126e974a48fdbf1e"],["/2021/07/29/Review/只有我不存在的城市/index.html","7fa2e58c711f42d4dfd020b2fbd39844"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","4202f1453421e2f1851e58fc5c18cc34"],["/2021/07/30/Review/可塑性記憶/index.html","f4834c80bfac75dbd5fc5e16ac29cce3"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","7071f1c2fc3faafe9753a38d8817e7fb"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","b9465429e7c7f8dfddfc79ab78c5a1a9"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","140154100488a768d1f6bd0dcc44a779"],["/2021/08/25/Review/清戀/index.html","388c3fe4aea69e08653ee9d9a3089979"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","14c1fca132af3df7fee7072deddade12"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","8ad0a262d6be35227eb556d25c5b490e"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","a1473736045250674e296437aa8becb0"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","c0a2a7b921da14f221751e6a78e5d502"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","82784072b76814538025589f9801afbd"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","bbea5d04851ba842465ab09d7283e98c"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","0f8a1290f6f85b068337dbeb5a2d2e6d"],["/2021/10/16/Review/龍與雀斑公主/index.html","4fca1daba55618a8d674200a740490f9"],["/2021/10/19/Review/孤狼不想開後宮/index.html","be04f3ff7010a6f45663ff04c16612cb"],["/2021/11/13/Review/徹夜之歌/index.html","cf9179f105426220b1e78c7903a25ffa"],["/2021/11/24/Review/武煉巔峰/index.html","675f8fad4a66852a090503ed0b520ae3"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","622cd3d7f95324fe66d6adaf4348a33f"],["/2022/01/28/Review/神醫凰后/index.html","6da59e20d132934aa86d95071851eed2"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","ef63855692d3d37ffd9b9c7d00007bcb"],["/2022/02/13/Review/夏日幽靈/index.html","729dba9c1776346ef74d7dc898d3a7e0"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","41944896ca28fd47a0f918b59adde355"],["/2022/02/26/Review/賽馬娘/index.html","bd679e776a06e2cd2dae32c4bf2eb7c3"],["/2022/02/27/Review/大欺詐師/index.html","a93ee8bff772247c49497339afece4d3"],["/2022/02/28/Review/前輩有夠煩/index.html","cd119d9378c6ced59c846eb30e0e9f2a"],["/2022/02/28/Review/碧藍之海/index.html","70b790963ebe53c62fbf92f68230636a"],["/2022/03/05/Review/落第騎士英雄譚/index.html","6773353d9205a8d8533e015d07eb3b83"],["/2022/03/06/Review/Another/index.html","d4eb26807ea55cb47a9b9bdddf2aecb4"],["/2022/03/06/Review/入間同學入魔了/index.html","4e3e4511a48642af01e5b0d904688aed"],["/2022/03/18/Review/再見宣言/index.html","e665cbd6da5ca952ddb58dff7abd5388"],["/2022/03/23/Review/生若冬花的妳/index.html","233e2d66fb17bb7ddfa3bd3226f27d51"],["/2022/03/25/Review/天之弱/index.html","8213875baabfe9afe9af475f31845256"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c94719aefe80ee1787e87e2933b8aa04"],["/2022/04/30/Review/泡泡/index.html","a9585d82ac7b408f0a2186d18c6eefb9"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","8760d6c2768302dea1ccec6278e0b0e5"],["/2022/06/13/Review/偵探已經，死了/index.html","9f1c91a4d84b6f89d31fec9190fe25f0"],["/2022/06/14/Review/黑色子彈/index.html","f43780037124d543d44ef9f477b88ecd"],["/2022/06/15/Review/黑白來看守所/index.html","63c2311622fcac84ea528f814388cfe0"],["/2022/06/16/Review/虛構推理/index.html","14cad4ef74c26ad5add18e7a73214408"],["/2022/06/17/Review/戀愛與謊言/index.html","8654543267b932c65b1353892e886e7e"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","0f8f25a99b2a788635539f4b422bd28a"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f187d55b27e7e8ee575c83959657dadb"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","132314b10cc4a3a594e1d3c87993fe13"],["/2022/07/03/Review/Hello World/index.html","4d2a3b1ed97feea18af97b94f55aa017"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","c79bd94092345586c4a016bb90d1017b"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","9c6dbb716522448c306442b3450d26f2"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","30d971e4e854e901b88b62b7049c05c4"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","f8497339df763e4eedb175e4c8a5afbc"],["/2022/07/16/Japanese/動詞分類/index.html","7d80d5062a7bec8e64e50e19c71b4c6d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","2f34edfcbd0812eb80f5b5e8de7745ab"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","105c19cee9a8fead199c1ee6aecfe78f"],["/2022/07/17/Japanese/音便/index.html","86da9e6bb7f89adc0f18529e7ad3fcea"],["/2022/07/18/Japanese/動詞 時態變化/index.html","c4952a519834cb3c3e7f70961870c7ab"],["/2022/07/19/Japanese/助詞用法整理1/index.html","3ed169243e6d292de77fb6af95d6b687"],["/2022/07/26/Japanese/助詞用法整理2/index.html","ba3bf99a63d2da81e5c0d6201b592084"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","284c2e717d481bddc35f1832b3a966f8"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","bd9542dd8e4e81327b640a5f5270ead2"],["/2022/07/30/Japanese/疑問詞/index.html","2aac9db5c248ba7ca43f5e00eaba6e78"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3e2dc45c18811fc37674ac010d90f4a6"],["/2022/08/02/Japanese/副詞整理/index.html","660ad891f61f7c4d4ef8c5a99e8cb182"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","00efb7b364a8a5f509b447df930734c1"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","6b046f37309aa110b1e76082b5081afd"],["/2022/11/22/Review/組長女兒與保姆/index.html","1f4c6d791336724bddb346a2e1200ffc"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","4c8794a091c4f4045e49bc44be84a206"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","49e0a284a2090384723407e11f077199"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","81b320b77a559bba3591b1cc47b69cf1"],["/404.html","90bce8d0b13dd4c94123edc61ebcfdad"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","bf4c7b0580a3adc1e58be96727e22bba"],["/archives/2019/11/index.html","1cc81eb8b777c8431ebee027c1113cc8"],["/archives/2019/12/index.html","56c8a3a2a1fe637777ebaa1586a64dd8"],["/archives/2019/index.html","776a5ea202edc00b2200ff82ad9d4283"],["/archives/2020/01/index.html","45bee8cafc35d00eb121a8752dd84504"],["/archives/2020/02/index.html","c0edd855af560b56e185724d54421215"],["/archives/2020/03/index.html","37cbbfe905f4877369b0e2991209ff01"],["/archives/2020/04/index.html","0aad0ea39df6a6531c8800383c9e6823"],["/archives/2020/05/index.html","d1a116165024babf7e04d6df50f10ef2"],["/archives/2020/07/index.html","53e5020d996b4585b628f177e16dfdca"],["/archives/2020/08/index.html","ce28754aa6f86cf6c3da4a2a48def13f"],["/archives/2020/09/index.html","7fc6045dc0d3a072d475441a39aae4fe"],["/archives/2020/10/index.html","1f69fa607ad258ccb02d76dd98755a66"],["/archives/2020/11/index.html","2eef531314d209bed196dc8c8c919883"],["/archives/2020/12/index.html","179713e703131b68882a2fc03812f459"],["/archives/2020/index.html","e71e998aec8d4bb188b04f1b22e60b16"],["/archives/2020/page/2/index.html","3a984991ca3f0936e54af67c119cf20f"],["/archives/2020/page/3/index.html","5d00045d1f31cb2c6faba3943d552715"],["/archives/2021/04/index.html","d2c8ca43df02740e853fe8a6c4929100"],["/archives/2021/05/index.html","c8b0d2ac424a0e7c4c656a07642a29e1"],["/archives/2021/06/index.html","5935ef54626e6f843eb4ae2dd98605f0"],["/archives/2021/06/page/2/index.html","6039b9162376e5c21e87d57da54b9fa5"],["/archives/2021/07/index.html","0b129920b546465d6f3ffc6ce59a1bf0"],["/archives/2021/07/page/2/index.html","88460be3cadf3eebb6947be7093548b1"],["/archives/2021/07/page/3/index.html","c53c706140add67a62dc416c07e38b8c"],["/archives/2021/08/index.html","e99f7d157cf59ceb0487507ce9a090e5"],["/archives/2021/09/index.html","8cef146f725db59d45e37488f0a36185"],["/archives/2021/10/index.html","8c8651cf0fc0f54a70746c136b7e9202"],["/archives/2021/11/index.html","3194b424340a40f26d1610e49607b51b"],["/archives/2021/12/index.html","1ad38fd318d373af596a47c1b83060fb"],["/archives/2021/index.html","ef3939f4e47351e59a424af58ad76637"],["/archives/2021/page/2/index.html","a7f4a4f6c64c1640a134d46b9465b573"],["/archives/2021/page/3/index.html","93b12dcf6723c0c13b232ed1a35debb1"],["/archives/2021/page/4/index.html","9f8aa1e4b546c05b16dbb3ea3865e459"],["/archives/2021/page/5/index.html","90369250ca2660eae2b345dfcbe820ff"],["/archives/2021/page/6/index.html","640ee76c76f833cb0fbe8d9f08d62575"],["/archives/2021/page/7/index.html","161a10ec3db697ef854ff74e08502cc2"],["/archives/2022/01/index.html","c73bc772517c0ce8e09d9bd2544e314a"],["/archives/2022/02/index.html","8b800d74e355d98e2bfd5c837f6a94de"],["/archives/2022/03/index.html","331cffcdb0e2524c6f73d81816637fbd"],["/archives/2022/04/index.html","7fbccb25461ecd72819a75c3646097e1"],["/archives/2022/05/index.html","8586bd22a2360f05e7583aeca51522bc"],["/archives/2022/06/index.html","5647147b56e0ab194f0ff5813ab50db1"],["/archives/2022/07/index.html","53b0c33024beb11adea6e83b663ff1be"],["/archives/2022/07/page/2/index.html","0c6a9d19dd84e9c2fd13092276ba8eb5"],["/archives/2022/08/index.html","4a258f2bfd021ae26c6ec6310ce709b6"],["/archives/2022/11/index.html","9d64313af989029d8606089f62181b37"],["/archives/2022/12/index.html","8e86640875c0a73e737a4c95660434d8"],["/archives/2022/index.html","5c3fd2a7a5d997cc999aee05c0478ae6"],["/archives/2022/page/2/index.html","c208ca919aa5476bfdebb9e1b87c9280"],["/archives/2022/page/3/index.html","0d1d05c511d9da244d734238b42027b6"],["/archives/2022/page/4/index.html","f9159c9a70bce186e0cc1134fcbd126e"],["/archives/2022/page/5/index.html","31641f7760633494d92dae1431ca7627"],["/archives/index.html","a5560e66587f5c701ba41b41c1a587e8"],["/archives/page/10/index.html","5f23322b1d57eab3351811bad3284034"],["/archives/page/11/index.html","6b4ce17f3689e44faa20314be2a84f5d"],["/archives/page/12/index.html","0eca4bb3c500586e284af57d520d4308"],["/archives/page/13/index.html","61075ccec960de633ade2290c5d75eb6"],["/archives/page/14/index.html","68107299fbcaeea0ed74aaed4bcb84cd"],["/archives/page/15/index.html","273364895d4569ca0e405f0de5c35c4a"],["/archives/page/2/index.html","be6756bc5a361d9e8e2b7c6c6814cb17"],["/archives/page/3/index.html","92c11b23aae083efcf13aa535653bc03"],["/archives/page/4/index.html","e58ed0a9478d5c6dc3dce321ab27bd9e"],["/archives/page/5/index.html","302feb1c8d406ce14bec01e9d4d99096"],["/archives/page/6/index.html","47b08a93be3b016ea9216a1a24ca2fd8"],["/archives/page/7/index.html","2603a955a0966998dfa9e113b3a51067"],["/archives/page/8/index.html","992ddd5c1e39b4e6155d2f5a6e36ad08"],["/archives/page/9/index.html","25751b93a41896189a81aeb019bb5ce3"],["/categories/Programming/index.html","3aa90bf563b3a06070f9ecb9143c7ea8"],["/categories/Review/index.html","ccd048ddd9caf46809f4360ccc8c5be8"],["/categories/Review/page/10/index.html","0313e076d8f2b4c6e2f51d3e21f2d7ab"],["/categories/Review/page/11/index.html","3580f8328ab70c828d7189d2a849a022"],["/categories/Review/page/12/index.html","74b2a46875fe1e55dfe50cb0a119fe30"],["/categories/Review/page/13/index.html","81dcd0fca74e6c6367fd55064b581d5b"],["/categories/Review/page/2/index.html","e0de87abb143371509e76cf633508f19"],["/categories/Review/page/3/index.html","1e20d7c8983171ecdc8a5288aa1aa8fa"],["/categories/Review/page/4/index.html","d2e9985b078ca5c736ab08ebfba2e175"],["/categories/Review/page/5/index.html","c3c1574f7ff17e902f30d8bc8bb53792"],["/categories/Review/page/6/index.html","e9b563ed7652fd14f5ee8829d0edee6f"],["/categories/Review/page/7/index.html","b17ec565ffd03611de6d126cd1ac737b"],["/categories/Review/page/8/index.html","a57113a8744bfb9e75e1cf1dd4d73825"],["/categories/Review/page/9/index.html","4b5ac8d551956f4e370f7c38f4f58fe6"],["/categories/index.html","7cbaf29db3e792e73263e7d6c5fc2555"],["/categories/日本語/index.html","dfaee8c6cfd6c7e2e47f205e2a4fc2ef"],["/categories/日本語/page/2/index.html","42b82fabda9bd6f7929aa9119f9281f3"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","95967521b712b5e01d1bfb06093cdf7e"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","9bf2a4c54b8727fb0888dbed99403f84"],["/page/10/index.html","e260e20149043ad4640439845869a15e"],["/page/11/index.html","9c22a10115791384548399679f29f74a"],["/page/12/index.html","b9be413f794865cb0bf7bb1056c2f90d"],["/page/13/index.html","3143802a05d196d43a1663662d723db5"],["/page/14/index.html","190c464a1a97157180857bd67e3a5af0"],["/page/15/index.html","8e9c5e5792920bd26513aab186f99ccd"],["/page/2/index.html","338684a445f0926a27212ce6f14d5631"],["/page/3/index.html","8591bdabfc75e7041df617a2c8413f85"],["/page/4/index.html","d3d5d6ad3534db933ad06200c297bed0"],["/page/5/index.html","1cb6ae3fbe84186d178437255111065e"],["/page/6/index.html","2bd2471dca7411dca9c9b212ab0a9550"],["/page/7/index.html","ee27367b5ea1f0662ecddae9103cd037"],["/page/8/index.html","356138ac6e0463d56b18cfd98680a2c7"],["/page/9/index.html","c82c34ba41c348cbf76879a5ec9115ed"],["/sw-register.js","98d01122a571ef6a82828683e36c491f"],["/tags/10分作品/index.html","f7f0325b4a668b6732974d082d34a0d5"],["/tags/3分作品/index.html","1f1d91691b15f4a4381844a8e06886e4"],["/tags/4分作品/index.html","bdaf9cb1f6481cd670468d2998a43f17"],["/tags/5分作品/index.html","c96df944639cf1832a2fe1168bc2fadc"],["/tags/6分作品/index.html","33b3b3aecc4dee5f8864fb6025c6be20"],["/tags/6分作品/page/2/index.html","e8239f44feb67b9607e216a78f9d3ba6"],["/tags/6分作品/page/3/index.html","91fe5fba0f516a779ab13a1391894552"],["/tags/7分作品/index.html","499c455e468bacfbcae07a20631a3080"],["/tags/7分作品/page/2/index.html","1ca89a25b45e70a2736d8f2b44a2acaa"],["/tags/7分作品/page/3/index.html","891b0de109e3fe04ec9f2476e07c30f2"],["/tags/7分作品/page/4/index.html","7b2edc7e6407d30618397bf0a9176305"],["/tags/8分作品/index.html","4fe8c11303adf8ab014dc30edd489f54"],["/tags/8分作品/page/2/index.html","8adb82cf4d2be419f1605e15d0867b66"],["/tags/8分作品/page/3/index.html","2f8fc1ba88d4bd582571d05fff2ff9da"],["/tags/8分作品/page/4/index.html","0a931f841cbcd5383eabdde3e60bb798"],["/tags/8分作品/page/5/index.html","a2977e3898deae149cd386b6dcbae919"],["/tags/9分作品/index.html","94450ab753746608848837d212e50858"],["/tags/N5難度/index.html","10cb1f49521ac5cc475118634c43a7b2"],["/tags/N5難度/page/2/index.html","c252f745bdc4c9f6338285e0db33c20c"],["/tags/index.html","bd658e383e6697572b5c6d3554e187ca"],["/tags/アボガド６/index.html","44d18f6ef7694ad7d20750695c1197e0"],["/tags/三秋縋/index.html","dc72a44bfeff6d3e7fbf9930502169b0"],["/tags/中國武俠/index.html","9f11e50e2d2b79d1fd3a95076c6ba4e4"],["/tags/中國言情/index.html","4d44f05a768d440ea900355f508f5ba0"],["/tags/二宮敦人/index.html","a1b643ff9467722267a3cc05e2ca5b65"],["/tags/人性/index.html","c4c17484de740dde47422ed84c46664d"],["/tags/人際/index.html","0fd819fe57a1f45d8c8b78bcd16b38ba"],["/tags/住野夜/index.html","f8d07ece9ac7c37f8664736b34c8ee5c"],["/tags/佐野徹夜/index.html","c5d52cfc1b00f281f6d8ac60c6f8e33f"],["/tags/努力/index.html","d3ac406f484fbd3f3d973cb38d9872e6"],["/tags/動畫/index.html","8d699eba1ed011f7e56fc7598c3788ab"],["/tags/動畫/page/2/index.html","cba5a04161f80d5dc945c3394b2eef34"],["/tags/動畫/page/3/index.html","9f3bffd95ff3f14f2cb2171829f7f5be"],["/tags/動畫/page/4/index.html","e7d9872d2719d85eda26f5b081ffdb7a"],["/tags/原諒/index.html","431a3c2ba86d16560fa1508a9f4d4d31"],["/tags/反烏托邦/index.html","a26c39ffdcdc23745286f409a45b124c"],["/tags/啞鳴/index.html","3ba9b00cc4dfaeb52663bcc116964be0"],["/tags/喜劇/index.html","95981d64e98f88c850068bc5c0dc043b"],["/tags/夢想/index.html","948d25464cba55dc25660233f2aa3f2d"],["/tags/天澤夏月/index.html","2d5f6ad407424f7320bd0c8fede4f9e9"],["/tags/學習/index.html","915e8616ab13aecd93b54ea37c7a933d"],["/tags/學習/page/2/index.html","58f17e64bbff2b7c7804f90c1009df34"],["/tags/宮崎駿/index.html","1394d643dd07e60f2d9aa89ee74dbac6"],["/tags/小說/index.html","82e894968dc138a9bc2c8b670791b3c0"],["/tags/小說/page/2/index.html","526c002bde6eac3dd078980508ed78c1"],["/tags/小說/page/3/index.html","e43b5240cf13e36d29aa731cd24bf5b4"],["/tags/小說/page/4/index.html","6900802b67a1070952a7af88689e016f"],["/tags/小說/page/5/index.html","942af8ffb492a71b29a1392d78e16b5b"],["/tags/小說/page/6/index.html","ad51a2e84d10166a65889e39167a6a73"],["/tags/小說/page/7/index.html","7f2e0ee0bde3b812c8a1b5d96fbdce9a"],["/tags/平淡生活/index.html","2a2bc96de75bb9f9afe925a029d578f8"],["/tags/幸福/index.html","114d9f8c52c7c27430e5797d4fb9468e"],["/tags/志茂文彥/index.html","d02f6093a035799fdbf0d02d36e78c62"],["/tags/愛情/index.html","6735273b91292523ec8642e2f7f7f0ea"],["/tags/愛情/page/2/index.html","a363785ecb4e2720cc340f07ba3885a5"],["/tags/愛情/page/3/index.html","33b04f0446d8eeab6238d21c01034320"],["/tags/感動/index.html","7f61c70221d80d0f86e85150a332272e"],["/tags/懸疑/index.html","68fcda5f0260dfa11b77227bc1c87c1f"],["/tags/懸疑科幻/index.html","286ad6db01328138bf357adb72ac3444"],["/tags/戀愛/index.html","0b37b92003b3e689706927f6a2b80c6f"],["/tags/成長/index.html","672f544bde4831bdf2dd8a08f8343234"],["/tags/成長/page/2/index.html","f50f923206259f66aa8e90fc5d28d5d6"],["/tags/戰爭/index.html","ad9712e4dbbd9adcbfd8cb33298caf22"],["/tags/推理/index.html","a09b9ef5c24c97385c59c3a2d4c5e5e4"],["/tags/搞笑/index.html","4e125c135cf699882f90676ef2deb05a"],["/tags/救贖/index.html","225639d25e2a35e987a3426907df3297"],["/tags/斜線堂有紀/index.html","f392a476e27ecb2ab1a33d2777621ec0"],["/tags/日常/index.html","889ec29d71010cf6499ca4dd877faaca"],["/tags/末日/index.html","04a8ab8c35285b9ab78ca5264ab9154c"],["/tags/校園/index.html","3c72688de88b0ceeb23519318e0a7043"],["/tags/武俠/index.html","bc338680321e4198dcaa55442c2db05c"],["/tags/武俠言情/index.html","cd1aba399a0769ba556504ed19a0c3b3"],["/tags/漫畫/index.html","862e5e90be1047d37541dfe89cd7a49b"],["/tags/生命/index.html","8e1b06363482ff2e65db18f58cfd8e23"],["/tags/生命/page/2/index.html","586e4db8ccd1dabb17fe6d77988d1b9a"],["/tags/短篇/index.html","18cdc27275ebf9877b6359d57607675e"],["/tags/社會/index.html","8dd8ed96ff145359f8bad2e6e52f438b"],["/tags/科幻/index.html","eedf9f38d3e99eaec4314d9013380773"],["/tags/童話/index.html","6f3069669c0df148ad7d32740a2669e3"],["/tags/競爭/index.html","1de0f6dda75a859b4036fe83f7a62fb5"],["/tags/自我/index.html","7107485b45919f321e43f5e96ca8eaad"],["/tags/自我認知/index.html","34e09736ecbfe72a7156b1bdb545a8b3"],["/tags/葦舟ナツ/index.html","d149e64bc5eaa0286396c982c92cc13e"],["/tags/藤萬留/index.html","3cf4a2d33f2dbcd2081c95cea79f811c"],["/tags/親情/index.html","57534f9d81671fb11a87e16352d0e18e"],["/tags/雜項/index.html","8dc6316630af27e944e1f2248f5520ec"],["/tags/電影/index.html","d73dec93a9108022fd493c2f885b03c2"],["/tags/電影/page/2/index.html","992ecde14a8e082602c3f29d4669f478"],["/tags/霸凌/index.html","ae1bde1c7f993d4bfb941ccedc0f97de"],["/tags/青春/index.html","0b7862cb44207e6f9de516d1a3ca0740"]];
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
