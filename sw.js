/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","6c664f5fa74c4469529c89db67a7fa9b"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","c905313d890f2c693590442e5ed87042"],["/2019/12/25/Review/無法計算的青春/index.html","ef494a8e0c94d7225f9e1e407dadeeb1"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","148089dbade223002fc375de897d2e85"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","58875b466431de917142ba61d537c0a6"],["/2020/01/19/Review/下雨天，不上學/index.html","6b351b32f00c77269f7dddc10d45402a"],["/2020/01/26/Review/三日間的幸福/index.html","67b75951d929246ea289e7cf7c81914b"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","428db372e39e15c1d28620cd40cb18aa"],["/2020/02/09/Review/青春期超感應/index.html","f9182e0c84c6e53d190aaf382a405c57"],["/2020/02/15/Review/又做了，相同的夢/index.html","e7b1b5f49ba5edd3c139d1bb781c2e3c"],["/2020/02/22/Review/回憶當鋪/index.html","32b1d345cae003f1d3506d643565c9fc"],["/2020/03/22/Review/不適合自殺的季節/index.html","e6f078ba312428624441abee9072e09d"],["/2020/04/26/Review/我們都無法成為大人/index.html","2a9402c4ce0aa14bcec6f9f322cb00af"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","fbdb4b6d0c0b3f87804579b09a6a5d25"],["/2020/05/17/Review/人間失格/index.html","8ed2b5b5d0decf60a972177594f07b29"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","373cd2d4d6af045213c20ed40a2ded70"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","34ec6962941f9d3aa64644f4807cf845"],["/2020/08/01/Review/銀河鐵道之夜/index.html","9fdbaf9593ed09f87caaf9431323769e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","b70cc3c6e45ffda80e14a3bb036c227b"],["/2020/08/16/Review/15歲的恐怖分子/index.html","e0c38e01c8494499966ecde8fbc2b617"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e3f222dd0084963c3419d11d637ade70"],["/2020/09/13/Review/羅生門/index.html","1bfbd9d48a902993f008a8ac507175dd"],["/2020/09/20/Review/闇夜的怪物/index.html","63159082f2fc971d1a07eac7f19ad22a"],["/2020/09/27/Review/14歲，明日的課表/index.html","f348574ab50cc6d1812ddc3bee73589b"],["/2020/10/04/Review/致十年後的你/index.html","51f2edda8d80fea557a1eb7ae37f54c4"],["/2020/11/08/Review/滅絕之園/index.html","f57956b7998decca4b0c9df6fbc9e1f7"],["/2020/11/15/Review/將愛拒於門外/index.html","1cc1d27db3e425cecb445518f3d57050"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e2cc0b6a57bb65a9a0885dbd16d8daa3"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","97716b7991b77839bfd67ee6b60a5379"],["/2021/04/22/Review/道印/index.html","5c6162e64b67e183e5fcdbe115f264d3"],["/2021/05/03/Review/戀入膏肓/index.html","40f211fe33c72b4905adddf21fb8a7a1"],["/2021/05/10/Review/Dice/index.html","0b4fdda2853b39fd0fd475788719d4ec"],["/2021/05/15/Review/魔女之旅/index.html","b72eb0a4e5931b1619ca5d6679f56f71"],["/2021/05/28/Review/戀愛寄生蟲/index.html","f7a437ef594307109ec147c9b102292c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","ff5cb3cc524190a7020a9ed328973107"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","b725367963232ce5f2529e898e7fb1ff"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","340911262cc46fe58ff9819f4ea0ba0e"],["/2021/06/05/Review/流浪的月/index.html","98a1b8e1807c2eaec9f152680343fee2"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","98f81e2b9a4dc62f46f0076b27a9777a"],["/2021/06/13/Review/第一人稱單數/index.html","7952ab85a8e2d59f3094d306eadf912c"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","ce5fd742e4b76107f64c53382e1f3696"],["/2021/06/16/Review/願你幸福/index.html","76d5082ed6e481c78978e8368211b19c"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","959d731c93c12105d193fa3e4335fe27"],["/2021/06/21/Review/神隱少女/index.html","88a7b620eb5bba274d8c204ab3cbce68"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","fdf200873fd11bf82c26540a99a9d5fc"],["/2021/06/23/Review/天空之城/index.html","10058efcfe57490da420a542dca8692b"],["/2021/06/24/Review/魔女宅急便/index.html","6ba30011e3460ac143143b03d306dcf8"],["/2021/06/25/Review/借物少女艾利緹/index.html","ac75dc6dac0a23b23378f062d90555d7"],["/2021/06/26/Review/魔法公主/index.html","edbc57eb80d02edcd8d7c561cae29594"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","e8143f0cdf527b41b2b65bd48bd0a832"],["/2021/07/04/Review/飛雪與劍/index.html","85b9d8af58f3a287a47100fa2cc40ce1"],["/2021/07/09/Review/地球防衛少年/index.html","6092da1a1facc4a7117e431813662177"],["/2021/07/12/Review/Angel Beats!/index.html","0d6346abb4eab5c9da1e72b9e7449fe6"],["/2021/07/13/Review/Clannad/index.html","d615e70b3aab91ce09e578f0879f49d6"],["/2021/07/15/Review/AIR/index.html","6f234ce1a53e90d1af7b1515dec78a82"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","49bedfbfca01d4ca7bf04fd639f9114c"],["/2021/07/15/Review/螢火之森/index.html","d0236d79e6cd8ef8f0aaa69aef6b4163"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","59c8e8a12a452b00165666eb5356a174"],["/2021/07/17/Review/奇蛋物語/index.html","9b0485288936f409949149e877d2b73a"],["/2021/07/18/Review/Vivy/index.html","d85cae255c56ae785eec6f233bff14f9"],["/2021/07/18/Review/請妳消失吧/index.html","6289aa704e2d9edbf12506abcd35b51f"],["/2021/07/19/Review/漣漪的夜晚/index.html","79725f0d857d4d12356f4f1e93bcda3c"],["/2021/07/20/Review/月色真美/index.html","29ef02736430fb2eefa56a8d77deb921"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","be0c60fe522fbfc8d2675345101417a9"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","fb2560660834d9bce224213cacf1b36b"],["/2021/07/22/Review/罪惡王冠/index.html","bd46f88524995d7e408e331686909b84"],["/2021/07/23/Review/弱角友崎同學/index.html","b903c65ad40cdd39af8ba97518974a8b"],["/2021/07/23/Review/惡之教程/index.html","820d9cd45c64041c6904fef2186ffe84"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","6e2c5a9e26520974fc6242c7c5a5006b"],["/2021/07/25/Review/魔王勇者/index.html","84a3848a36f511bf95a6c883596f3983"],["/2021/07/27/Review/一年A班的怪物/index.html","e0be680a704c75f07db9d0ddf5934050"],["/2021/07/27/Review/奇巧計程車/index.html","4b9629f4a2919c9f29fb2345dfd4f5de"],["/2021/07/27/Review/專情的碧池學妹/index.html","328bd42105066a26be3b1a6d99f83ae2"],["/2021/07/29/Review/只有我不存在的城市/index.html","c9465e0003e268c3a04d393f2cf4a79c"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","6cfceede4fb4f18c405483259613d015"],["/2021/07/30/Review/可塑性記憶/index.html","8681a4b4ffaccc951391d03d7b774ee8"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","7d7a30d49797727679318f7d5c38e7c0"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f7de3340240de04770ea8737972fd875"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","496cb9ab71a99b5f2a915f9ed58018a5"],["/2021/08/25/Review/清戀/index.html","fe1ad5f967b009c34b3e33b0fe5e4acc"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","a4862d49ab942679d2a669b1a612d887"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","93f47a3869c74a38926d18ea729de10b"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f91fdeffc54c8fa5580c558fa0028071"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","3edd3381a79807c8f37bc2b0353c9f9d"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","9a93c1ec032caf795ec86263528e7379"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","aa2323dd28b32823560b6db390d332fa"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","0f09be7aeb708c17ebe32eb47af7046e"],["/2021/10/16/Review/龍與雀斑公主/index.html","11f7a60e4b1ed0c540110b7b6718793f"],["/2021/10/19/Review/孤狼不想開後宮/index.html","2b535fdffeb696ad49607d38b996388b"],["/2021/11/13/Review/徹夜之歌/index.html","c3c463f16a71bd86c7eecf5f9fd3303b"],["/2021/11/24/Review/武煉巔峰/index.html","ffab368a66e5bea2b8e1d6bf76013d99"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","0ccbb57df58f88193e7fac7d99f6c52e"],["/2022/01/28/Review/神醫凰后/index.html","716ad5b1fb41bab0923e044d6b196107"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","9ceec378edc14886fc612973b5329b91"],["/2022/02/13/Review/夏日幽靈/index.html","c326be1d785f28725cd45345953aa5f1"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","497943473ba2967f8ec11eda9a8cd5f1"],["/2022/02/26/Review/賽馬娘/index.html","3496dc46a318a04a15bc88dc6d12928e"],["/2022/02/27/Review/大欺詐師/index.html","f9f89b83c2c31e1f83de8384550b71c5"],["/2022/02/28/Review/前輩有夠煩/index.html","6f762a9432d51a9df3df0db3b96df399"],["/2022/02/28/Review/碧藍之海/index.html","fb10c5e96c3e2aa798156890b8be97a8"],["/2022/03/05/Review/落第騎士英雄譚/index.html","c6a68ab069d7e0a7ff2ff0de0a17d5a3"],["/2022/03/06/Review/Another/index.html","368835d0497c44ad8fc7146bdeb4d72a"],["/2022/03/06/Review/入間同學入魔了/index.html","193d89e1aa1105c9a8a1b31d80a82244"],["/2022/03/18/Review/再見宣言/index.html","23234e30a2d6407a226923999e3cafec"],["/2022/03/23/Review/生若冬花的妳/index.html","5a362bd685606950606871fb069006cb"],["/2022/03/25/Review/天之弱/index.html","38cc70c0048b0cbe2ace3eb8b335aad8"],["/2022/03/31/Review/滅了天道之後轉生/index.html","28443b1f44048d3a3281699c516e96af"],["/2022/04/30/Review/泡泡/index.html","78acb4a13e0aea9bf82d1772a1e2c633"],["/2022/05/04/Programming/Dynamic Programming/index.html","a6b27db0758ae55c3cc73e446afc7978"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","e104e798885e76bb66eb007fee39650d"],["/2022/06/13/Review/偵探已經，死了/index.html","d63d2d5185e81b2827b67700bc316a03"],["/2022/06/14/Review/黑色子彈/index.html","38ddb4bbfe368b8062f488f26e86e102"],["/2022/06/15/Review/黑白來看守所/index.html","09c550c0d3f2fe1ff679c38c376cca54"],["/2022/06/16/Review/虛構推理/index.html","da6a5a23f76a8c18bf5a930c398a3e32"],["/2022/06/17/Review/戀愛與謊言/index.html","d2f0d9babb0dd21a840fc20e916a782e"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","02b49170bc251bc456a23bc3cf22c9ce"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","6bcc5781f9a5898c8927492bbd520152"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","bb07d574efed8e9e3dabcee6f43e0451"],["/2022/07/03/Review/Hello World/index.html","d28c98337351f0ec32ce28cbe583b99d"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","399ae3e32e36a14c278d9b1f488753b4"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","245c639fd054e4220100e11ecc284d75"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","98f2f4a26f06b910c4fc92f1a41be15b"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","33f55c2a4acc80acb5ba6150d7e7d2eb"],["/2022/07/16/Japanese/動詞分類/index.html","2a4ac65e1342001b7d323820148a75d9"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","fcc7b9df8c2c3b5fdd11cc110785c563"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","cc909dbd3058db7e33299a91412d23b1"],["/2022/07/17/Japanese/音便/index.html","46049b3b6a48c6a9b1281b3c8159d92e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","7080b1e3fbb497119fd8cb746a842a29"],["/2022/07/19/Japanese/助詞用法整理1/index.html","e190f3d385be3e1599b946aa585160e1"],["/2022/07/26/Japanese/助詞用法整理2/index.html","149e6efab9e5c8dfa0b13a5239652fd5"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","45d8d9ed8202b78192d1fef8cebd9c55"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","a318686fcf4dfb549985892591303093"],["/2022/07/30/Japanese/疑問詞/index.html","9710dcffb5deef8df605fdc5f2bb8043"],["/2022/07/31/Japanese/助詞用法整理3/index.html","70f85d0300b6f7b9d626c3aecba7c8a4"],["/2022/08/02/Japanese/副詞整理/index.html","fc8dd59182c297ceea5362a777c65c77"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","8084e0d4cafd1defd52804ca5a9ccc46"],["/2022/11/04/Programming/Data Structure/index.html","0c54584dc275835f05c9566642d5bd25"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","9e608ee29dc88b9f168799f983eedf82"],["/2022/11/22/Review/組長女兒與保姆/index.html","2774c5a16af7f6f351ca2a5a9f2bef0d"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","08f0abf8a11503b4328f2be7f6ac7f41"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","cdb46296a1191dec3ec5f9b02a9d7f9d"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","6fb6ffab17918ebe6c2e93b713f7cb06"],["/2023/01/01/Review/あの夏が飽和する/index.html","477b62761425170f7655c8c7766c3e85"],["/404.html","85d8e40ee3ad63efd213fb1d600b6635"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","9ac77a9afc1446f7b1cbc37f425bce6a"],["/archives/2019/11/index.html","5bb90c8903a30f4808ee341c7f31f058"],["/archives/2019/12/index.html","689767089d6eab125142a156968a21b0"],["/archives/2019/index.html","c3a30b49377ba80c1b3886158140651e"],["/archives/2020/01/index.html","94f0da08a47de5f22934645e43c6bb15"],["/archives/2020/02/index.html","9329dd470a2969baba02abd1f5f0f62f"],["/archives/2020/03/index.html","96820c6c73bfb1cd39fa061af7ba9cd0"],["/archives/2020/04/index.html","71c022c85b68b7ea34d9f97c90679f41"],["/archives/2020/05/index.html","b79b3e0ea0e68073a614545e1bca1336"],["/archives/2020/07/index.html","f71552628fff9788bb84c6b063f0328b"],["/archives/2020/08/index.html","92f909bb668586c79fddf42be5443fc7"],["/archives/2020/09/index.html","03c347f3ad06b09cc3c0236c3b6177f1"],["/archives/2020/10/index.html","e2b420a8a1fa47f900c94fb4f6489aea"],["/archives/2020/11/index.html","f5be81184e2c2c56a1c29538e2cfbf23"],["/archives/2020/12/index.html","043cea82d200273b6a14cd3406f08860"],["/archives/2020/index.html","abc206e7dad7dcde28d118c74fb470e0"],["/archives/2020/page/2/index.html","5814c79dda91d25276e4dd7a91a439b8"],["/archives/2020/page/3/index.html","84474633fe1299c078f03151e579717d"],["/archives/2021/04/index.html","111667a0d23dfab4730c2d61cab30d1a"],["/archives/2021/05/index.html","7ffdefc81e44399a99069e5394d6f1c3"],["/archives/2021/06/index.html","05627f6e513a832fd509ce92c9f82867"],["/archives/2021/06/page/2/index.html","b33880e253a1af228de0c7d677fc9256"],["/archives/2021/07/index.html","f0955ef9b6f6b479b37d30ff9a5dacc7"],["/archives/2021/07/page/2/index.html","1cf7b42689ca8954743167558a7646a6"],["/archives/2021/07/page/3/index.html","a1880c2eea382e08e1761535fb0ca6e6"],["/archives/2021/08/index.html","11e56672a544ef483d3a87598221eaf0"],["/archives/2021/09/index.html","b2c26f1c088267bd17f3d53640afa3ff"],["/archives/2021/10/index.html","5827ee3fbde908ab31d33163b34d7530"],["/archives/2021/11/index.html","8b30e40a1c452b14f1606f537eed3d86"],["/archives/2021/12/index.html","63f8b2cbfb88e6e60db1c08a9477c993"],["/archives/2021/index.html","cfd66a3b64c9e5be85e5755ccb48f3bf"],["/archives/2021/page/2/index.html","e452916f25c14b000751a50f958b43a6"],["/archives/2021/page/3/index.html","d150ea95a06117a805dc5f53698845de"],["/archives/2021/page/4/index.html","ffa8ed2ddeafd56480be84de02c89e5c"],["/archives/2021/page/5/index.html","90216fcb859d2eaae86602d752939712"],["/archives/2021/page/6/index.html","be61d476c99f75af4a6a97be7df6b426"],["/archives/2021/page/7/index.html","c3b83a3e2e93cdcff113481450427dd8"],["/archives/2022/01/index.html","f00251b6e2a70b4c854b717da7fc2b6b"],["/archives/2022/02/index.html","274f1a49e35e13a7f86ffbfc0d1f8562"],["/archives/2022/03/index.html","2653568c9543d82da2f5a2cba2bb2b7e"],["/archives/2022/04/index.html","21560e0def4ab642c76f7f0f37a84ad0"],["/archives/2022/05/index.html","9c8291a8437bb51025d623c69d14d741"],["/archives/2022/06/index.html","d38098727738755cdcbf666cc6c8c037"],["/archives/2022/07/index.html","1cb59c36c006b921b935985ad635cad7"],["/archives/2022/07/page/2/index.html","341dba8f4da5a8b97f6c8454cceab379"],["/archives/2022/08/index.html","aa1a153149e0c0129b018f88da50ba90"],["/archives/2022/11/index.html","494103fdb82ce36534fcde4ff572f99e"],["/archives/2022/12/index.html","5515410a152b56929052faa7dac0be77"],["/archives/2022/index.html","6476eb370a70893762afc7757f80c880"],["/archives/2022/page/2/index.html","23aa4145d33d9c5996b970422f203aea"],["/archives/2022/page/3/index.html","b0e774cd5c00ddc68e187eb66dbdd7f1"],["/archives/2022/page/4/index.html","6241419387d994e5d1c764c20673eaa4"],["/archives/2022/page/5/index.html","4051682d622b910a3d5063eec7ed77d3"],["/archives/2023/01/index.html","cb4c4f4de2b07657d132b85aed8175c4"],["/archives/2023/index.html","2daf88fe75e2efe51eec86014dd17eb9"],["/archives/index.html","210a0cbd73b8a51528bac18c56617bf0"],["/archives/page/10/index.html","cd154c172285958398c74a8805a8ae1d"],["/archives/page/11/index.html","20b270413fc2a065ad80f6458de6b5c1"],["/archives/page/12/index.html","b5c2650182f28fc90835c7c2652b0e03"],["/archives/page/13/index.html","779a4dac09cf62c74111eb29d81b463a"],["/archives/page/14/index.html","c1aedc3f594c4c0dfe522034a086965e"],["/archives/page/15/index.html","a53d93c1c91cc918a1529a9a4c89fcaf"],["/archives/page/2/index.html","dfad38e8d20660d039e2d68fdd110b6b"],["/archives/page/3/index.html","79dfbc38938ab2ebbf594cec375d4ea9"],["/archives/page/4/index.html","ce8072fbc35386680269b4ca1e34bc8a"],["/archives/page/5/index.html","6b6a3c830296464f4ec3301978ee004e"],["/archives/page/6/index.html","e8b730bdc1204a368ae5da0c03856f80"],["/archives/page/7/index.html","ea5b7687a404a28e5755362caabdb5a1"],["/archives/page/8/index.html","12d2afbae0b9c543ed9cd551f7b3a6a4"],["/archives/page/9/index.html","4b814dc0f20c6f74057ded7d94a1f289"],["/categories/Programming/index.html","753d15d9f6f102a8bd2dbaa1a0df6458"],["/categories/Review/index.html","fc539db94d267b8775f4c37bde02a8fb"],["/categories/Review/page/10/index.html","e7f434216d3040b9a5e887cac772bd4a"],["/categories/Review/page/11/index.html","6b8264286e401b4c6a923f4719dda92f"],["/categories/Review/page/12/index.html","dfb1acbc642e0855051d9585232b24fd"],["/categories/Review/page/13/index.html","5ad80f761b537557324b71edfe4a2e14"],["/categories/Review/page/2/index.html","9e71802723f35e0852950529fe0ebbd6"],["/categories/Review/page/3/index.html","12117f5aa4d450047853a425c43f657c"],["/categories/Review/page/4/index.html","eaef8e9960e6d556a7b34cb639931020"],["/categories/Review/page/5/index.html","377b3e8705b55aac1d69e445e4110316"],["/categories/Review/page/6/index.html","e416f7f91830f4320302952253d0045c"],["/categories/Review/page/7/index.html","ce7d595e4baa94a6c2b5762378086bf2"],["/categories/Review/page/8/index.html","a50b66a3d4f36b7695ab4b409d45ca92"],["/categories/Review/page/9/index.html","43af36c19ac3940fef01d8b157e86bf7"],["/categories/index.html","b88512926c8a4c1a4d0846a26a513d2b"],["/categories/日本語/index.html","2626caf0946ab80beb5f757a8af86afd"],["/categories/日本語/page/2/index.html","7d8e73b0cbd25c2e8e7ce2ac5006a53d"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e03ce258e8c1e58477641b73c76b2b6e"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","d8f27fa767a6872e8ac60caf38301c25"],["/page/10/index.html","48a00cf5adc78e485093b47acec67aea"],["/page/11/index.html","ce2c5afa8269254a318eecce28b58c27"],["/page/12/index.html","a721c6fb6c8bd3e991a399ec75e86a22"],["/page/13/index.html","f43f7b6b89f54830462bbd453054bb60"],["/page/14/index.html","0f8d4e6b5618e62ae24567d10f3275c1"],["/page/15/index.html","1ddeb1802ca56f777745b554d45ff8f4"],["/page/2/index.html","bbe6cf62c462e4e55092792dc895360d"],["/page/3/index.html","a77a57f167168b3a370bbfccdd7df06e"],["/page/4/index.html","f069ff28a9a0fe6828bcc5e694a565ce"],["/page/5/index.html","3dd8f094a9069289881db96d7695d830"],["/page/6/index.html","5ecf2b0b0763f4266ee2fd34739d7074"],["/page/7/index.html","127fd7639692c0b92c36c1bcbf126eaa"],["/page/8/index.html","3329886ca48fc4362077342fd9f99aa9"],["/page/9/index.html","f4e4ec5e35f296e0adfe247ee920ad8d"],["/sw-register.js","b754d7832c63e7a25dbfde2655748882"],["/tags/10分作品/index.html","49f40986561e98ae0cf5626a89f00f73"],["/tags/3分作品/index.html","d44854e88df17da898aa634be87edfe0"],["/tags/4分作品/index.html","4b2bfb4149cb18c4875b5e4c5f4bae2b"],["/tags/5分作品/index.html","0b93720285b8366518a3dcd50bf9b67f"],["/tags/6分作品/index.html","c578c647adfd1be73daeb749e305da3c"],["/tags/6分作品/page/2/index.html","a4be65bd6278705f834a34d0d299a8aa"],["/tags/6分作品/page/3/index.html","cc6dd91f08350114b797502738e6d53d"],["/tags/7分作品/index.html","96cabf2c7418890c6e4df3cc0c255509"],["/tags/7分作品/page/2/index.html","12cc6fe2f0c2c77f3e944f02b13a02a9"],["/tags/7分作品/page/3/index.html","108e191f257f625fa083cef39c676123"],["/tags/7分作品/page/4/index.html","5875d9a2c197fb62c1059fc4e6baa438"],["/tags/8分作品/index.html","7587ab01dfd63de852c2d271d51e04d6"],["/tags/8分作品/page/2/index.html","c4ab3eb9bfa9df82149b1764c282ba7b"],["/tags/8分作品/page/3/index.html","69866e28c92c538a1f1106a57d42d865"],["/tags/8分作品/page/4/index.html","2f7f9c54ed6c8f6bf0955c9f915c3e61"],["/tags/8分作品/page/5/index.html","01377a2992c239429463056fc7195550"],["/tags/9分作品/index.html","63acfb39e261668ac868f7e42af35d20"],["/tags/N5難度/index.html","4a0257a1e9247613f8c09627f7ba09eb"],["/tags/N5難度/page/2/index.html","fa51b92f76c657e0948c233aa6a6fc28"],["/tags/index.html","d043419d91a8975de2d2f076ae29842b"],["/tags/アボガド６/index.html","733ecebedfbe9d2be63dd3b901336b10"],["/tags/三秋縋/index.html","0f30a1f824fec48f528596d3e3da3371"],["/tags/中國武俠/index.html","69791d4f3fc61cf2270252cfa9cc2e75"],["/tags/中國言情/index.html","c79a390808a147d893596e21c07899d4"],["/tags/二宮敦人/index.html","b791b62d2b8f043cd4161125da8420e2"],["/tags/人性/index.html","d875865cfb296ad7d11e29109b94def0"],["/tags/人際/index.html","b0c9898ee907f1fda66a71be1df3c176"],["/tags/住野夜/index.html","e61bb7116576be8d8bfa700a88fdbfee"],["/tags/佐野徹夜/index.html","1374fa6b37ac6b2231840e525ff15c21"],["/tags/努力/index.html","f2ba4ad8891a43d8705071b4bff82fbb"],["/tags/動畫/index.html","15189c0e051157b6fbb28562e6550b51"],["/tags/動畫/page/2/index.html","5f38d925b1b0037e041956daa0569b95"],["/tags/動畫/page/3/index.html","6e70657c43e912d8328a9233dff12562"],["/tags/動畫/page/4/index.html","eb627e43d6717401e001eed4322de8f4"],["/tags/原諒/index.html","53d074ae4b1efbdbc6895e7c36e9c5f3"],["/tags/反烏托邦/index.html","9bbbd3ccebdbb0b5126919378740e6d6"],["/tags/啞鳴/index.html","898c177cfa20f26a3fffa1d233bb2f89"],["/tags/喜劇/index.html","f8f416dbbc95b80d15c4e98d2ab607f1"],["/tags/夢想/index.html","18c325c12661b0c6f540cf78fc77ca18"],["/tags/天澤夏月/index.html","4eb4c8c5fab88b653093217ef48514d0"],["/tags/學習/index.html","6e6e748a2f6bb63426182fe32e315d05"],["/tags/學習/page/2/index.html","5a66839fdc2c9ce04e0464200a082f13"],["/tags/宮崎駿/index.html","21e77fb3c9b2dd291ba90ff8570b34ed"],["/tags/小說/index.html","22147b35fc39cad10a7b6cc10abce8b4"],["/tags/小說/page/2/index.html","ab33bc3486fdf0679607e506780a7c20"],["/tags/小說/page/3/index.html","3e40757044854117d2250fd3a472aa60"],["/tags/小說/page/4/index.html","7fc20cfb45d7b9a5b6b608ba05662cea"],["/tags/小說/page/5/index.html","aec2184e3ebb7629d918927e26d940a9"],["/tags/小說/page/6/index.html","3b2f235d82c5ae125ce9a562cafa3d2a"],["/tags/小說/page/7/index.html","3bcf39a0d24977e9c77776a6b20d85f9"],["/tags/平淡生活/index.html","f0164844919d99977fc6bc7742da60f6"],["/tags/幸福/index.html","0bb9948c2f3d0299e726847146afc817"],["/tags/志茂文彥/index.html","3367b2a400b35612ca079f2b758fbc3b"],["/tags/愛情/index.html","4203f02a98e480ec95fec610dbc5c295"],["/tags/愛情/page/2/index.html","11df66ee4e393a32c16ed341689e03e8"],["/tags/愛情/page/3/index.html","96d833a597cfc7d700fba0f63e284ee6"],["/tags/感動/index.html","49d1af01f3a5d3fd6ed358750ecc9ba1"],["/tags/懸疑/index.html","aa740b67c90df39a90007bd0850c9c30"],["/tags/懸疑科幻/index.html","9f6239e06dc57013757751ebd54ce188"],["/tags/戀愛/index.html","205c0bef431767392a4eb1e5d671c3f3"],["/tags/成長/index.html","fb3bf6ee53bc2309fd527a324b2896ee"],["/tags/成長/page/2/index.html","297e1a602df9bbf9a99cddf296dcd451"],["/tags/戰爭/index.html","d494edc3132478462a696e842d695c3e"],["/tags/推理/index.html","5b00fea676f63faff8c1f0b5ea0df888"],["/tags/搞笑/index.html","e34cba9bd9a925d38e9e95ff8b4cd33a"],["/tags/救贖/index.html","cacf20df8f656141da3e9a21ac56511d"],["/tags/斜線堂有紀/index.html","ba089fad4b7a15143847cd8822936a56"],["/tags/日常/index.html","ed13a5810a25e5a9ac6836c52377f1bc"],["/tags/末日/index.html","b828a2caea9a37301bb6cc56d5dd6f01"],["/tags/校園/index.html","4ec04b46e17b8419d9aab6f82f09b313"],["/tags/武俠/index.html","7435eb1ac727d67de7fc0fdd4f217e0e"],["/tags/武俠言情/index.html","6a4d6615bf6be310f84e0ced30eedcd2"],["/tags/漫畫/index.html","dbe73f8200141bc87b3a1fa52a326258"],["/tags/生命/index.html","28ef12df69de003557dfb0d7246c339e"],["/tags/生命/page/2/index.html","1d77b05cd43fa5a49af513bd2c729979"],["/tags/短篇/index.html","a5637234b3d22065afb9814b76efc3ad"],["/tags/社會/index.html","5e22fd9786bd945fa34c9b3bcc743c9c"],["/tags/科幻/index.html","042bfc3b7f4f100aac1aabda1f0be4e8"],["/tags/童話/index.html","939a69dce5ef6da70b22dcdacbb5f229"],["/tags/競爭/index.html","3be70313496c063fd2c91cd61a29ccf2"],["/tags/自我/index.html","6c9d54d6be8f1c7cb06b41e77728a590"],["/tags/自我認知/index.html","9351b02a08495855d480a577e5bd1fda"],["/tags/葦舟ナツ/index.html","4f6d5a997d4170a8419c6a03a7045f5f"],["/tags/藤萬留/index.html","dd4c449a08744087db6a7c5131d0f25d"],["/tags/親情/index.html","7f94084bdb53022b7d188c8e68b296d6"],["/tags/雜項/index.html","dddda80176ce02e748bedc8dfea92754"],["/tags/電影/index.html","c59c991f4a8269b1bf7635fde1d29c46"],["/tags/電影/page/2/index.html","a21d278dd9bc2453bf539ace1ccb6cea"],["/tags/霸凌/index.html","f25c00d0ebca1758cc76c9dd33f5d9f9"],["/tags/青春/index.html","e68f94f55a8a3c0249fb10c1dc266e80"]];
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
