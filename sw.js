/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","e99ed01bea85ce64e89394af26d1207f"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","5289b6cd21f429f973d091606315d3ca"],["/2019/12/25/Review/無法計算的青春/index.html","65d61ff2a69598abadb40447987a6f78"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","9a325ce89e11d237c304f0a3159ddcbe"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","2392d3d1ac036369d15d8c7722a4925c"],["/2020/01/19/Review/下雨天，不上學/index.html","bb5499d245fa41018ba53568b01fc1b3"],["/2020/01/26/Review/三日間的幸福/index.html","0e1318aa5636bb46a57336cd266c685f"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","1e237caa03a933e14a497328c38b0e54"],["/2020/02/09/Review/青春期超感應/index.html","6d6a338edc1e7f89bc34cb1f4195805e"],["/2020/02/15/Review/又做了，相同的夢/index.html","5b8b09b57255005b2670585b65aa370b"],["/2020/02/22/Review/回憶當鋪/index.html","bf6ab4e6fbe5763520f28862c5579c70"],["/2020/03/22/Review/不適合自殺的季節/index.html","82ee548f9c181715407d96d9d57c19a5"],["/2020/04/26/Review/我們都無法成為大人/index.html","980ae15485eec89852ee283bdff7470d"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","6b1eed37056b37a89b92a93ca70a698c"],["/2020/05/17/Review/人間失格/index.html","a68231982be1a11b471dc29a8cac2d3a"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","5af48d387a020519a38e9876f0c5f3d3"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","60754e03c77bcc2c308d08b73b74b1f3"],["/2020/08/01/Review/銀河鐵道之夜/index.html","d2a35262831329e0ee6913d1e8e51135"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","4d13f2a660e88f958dd2518432ce99f4"],["/2020/08/16/Review/15歲的恐怖分子/index.html","7afc14763956ff94e3b682f55c1e43a8"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","6b482d1fb60ed2bc4e67651ea5acf051"],["/2020/09/13/Review/羅生門/index.html","cc6991e170b008ae3f5f873955290c5e"],["/2020/09/20/Review/闇夜的怪物/index.html","a78f25506f58ba91d3e028ba72ddb69a"],["/2020/09/27/Review/14歲，明日的課表/index.html","789fa655f50e6ac59fed387008e0e1ff"],["/2020/10/04/Review/致十年後的你/index.html","eee1cd547dc5d609ecc087d6ecb0ead3"],["/2020/11/08/Review/滅絕之園/index.html","49d2c4fdb5bdad6d845bbf5e7ccd3bdb"],["/2020/11/15/Review/將愛拒於門外/index.html","7c50eb2aab6b9b27ccafe29460f8a06c"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","47ba13a9ce7baf0ad4df530bb243eece"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","5725347b90562f6d0a1fd50305f90303"],["/2021/04/22/Review/道印/index.html","e991c71c4929b3b7581470c874cccca0"],["/2021/05/03/Review/戀入膏肓/index.html","5adae0e479d1758797f199b8c7a3143b"],["/2021/05/10/Review/Dice/index.html","27f2006abfe008f829e41d4a05de0de1"],["/2021/05/15/Review/魔女之旅/index.html","29d657bab41a719cff017d90cf6c7b5b"],["/2021/05/28/Review/戀愛寄生蟲/index.html","89646f232094fb97d4d3ab724afde64e"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","18c83c1909b5d3005e563635ef0792c6"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","8bc40aa9162594d56289f3c4c221ad4d"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8db832acdbb38f572391083265c3f54e"],["/2021/06/05/Review/流浪的月/index.html","d90ee607e57a351b72309c436df7a353"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1019b21291e108376f78d84034d3e59f"],["/2021/06/13/Review/第一人稱單數/index.html","6c8d365a9fc3126aab882033dee9a701"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","d77d8c488db43967f2d157e75e427942"],["/2021/06/16/Review/願你幸福/index.html","1ac86be5ee7e9d8c282805be78d3f6b2"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","ee7ca94886decb715f0baf2948fc3dc1"],["/2021/06/21/Review/神隱少女/index.html","8d5148ef23dfedccb64b539b7bb23bee"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","c942b961037d78415979de2b68a8ecaa"],["/2021/06/23/Review/天空之城/index.html","716e96b0d6ab86a9663151868ac1e845"],["/2021/06/24/Review/魔女宅急便/index.html","05607ecc2b837a2edaf73cefe7f18cd0"],["/2021/06/25/Review/借物少女艾利緹/index.html","8ed8a9ef2adcb1d07349ee785a3e7406"],["/2021/06/26/Review/魔法公主/index.html","394c3dfe432980b8e5d10c87c6bd6673"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","9f79e1a3d901fca641285cdecec22bb2"],["/2021/07/04/Review/飛雪與劍/index.html","86c640ff76b04cfcb5efed68f4c73b31"],["/2021/07/09/Review/地球防衛少年/index.html","34bd179acb4b5b33eee89ca0c26a08c6"],["/2021/07/12/Review/Angel Beats!/index.html","67f2001fb7a604656aac00e7ebea81c8"],["/2021/07/13/Review/Clannad/index.html","fc2bd9d80885acf52626053d171c9a90"],["/2021/07/15/Review/AIR/index.html","9588c7e7bca8a8b20b686ea789851fea"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","706c2269d250ac5a8eccaa96383145ce"],["/2021/07/15/Review/螢火之森/index.html","ac6da1c426fa17c2b50a6e2e053b7905"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","c2a339b0dc3fe5fbe055b8decb76396a"],["/2021/07/17/Review/奇蛋物語/index.html","ad56c478196812b8f780f0debcf1d73a"],["/2021/07/18/Review/Vivy/index.html","08c8244911344219adec6cffd6c3781e"],["/2021/07/18/Review/請妳消失吧/index.html","74a8c723f2ae0cfd5375fef62322576d"],["/2021/07/19/Review/漣漪的夜晚/index.html","a8683a5f643324b78b19cd04b958fd9b"],["/2021/07/20/Review/月色真美/index.html","ef7305aa72510939f0bc1b2ad9ae6f95"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","07639d724a1d76cd503eb71ea8e28895"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","bf0688ecaaeee8756a1889ea6bcdba1f"],["/2021/07/22/Review/罪惡王冠/index.html","f36c48592caf9b0b8cfa553829fec5f5"],["/2021/07/23/Review/弱角友崎同學/index.html","515723095a2ef108d742a3638069b76b"],["/2021/07/23/Review/惡之教程/index.html","f9f7a8c483f075ae2740618dde84b4c0"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3ac35ee59a102c1dd6d0218e19d87107"],["/2021/07/25/Review/魔王勇者/index.html","0a529442ec19998bde5a3782c45c4691"],["/2021/07/27/Review/一年A班的怪物/index.html","34ccd170f8bf47790a4416015ab1cebe"],["/2021/07/27/Review/奇巧計程車/index.html","57292dc25ab76b7aa82116b9b786c4c9"],["/2021/07/27/Review/專情的碧池學妹/index.html","86784979d4563407ef7d3723800c2aa8"],["/2021/07/29/Review/只有我不存在的城市/index.html","2bbaa268299783b788db61adb92cf62e"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","f3767ec786ed287e09b2d76e746250db"],["/2021/07/30/Review/可塑性記憶/index.html","e9fc7b16490fdede9706a4fd5fb263c0"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","4dce31070e75c264bc1f4abc0e5bedea"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","89a91d374efd75e85e760e6e858777fe"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","2ad65ae87326769a9db9436f73c22e96"],["/2021/08/25/Review/清戀/index.html","db94c401fde271c24c618aafc16a6aa8"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","189d6ed74f9aac189b95674ac0923f4e"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","43d257ac3ec5a4124d41f2aadff415e4"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","abbef851a8be5c1f96b50570ec9455bd"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","5dfa1c42eca320d1f5bc3c92e09e43fc"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","d78d466df1619445d403a24e609f2902"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","699cc46fe2873dddb5958a2ed88522b7"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","6146a28ffc2ed23cf9cf9dd794288bcf"],["/2021/10/16/Review/龍與雀斑公主/index.html","8239d9ff10760bbe39e70458a0ddaf66"],["/2021/10/19/Review/孤狼不想開後宮/index.html","e813ecbf8f10c7fc3e417fcd8dfa11c3"],["/2021/11/13/Review/徹夜之歌/index.html","13784f51946745b75c5b40dcbba88f42"],["/2021/11/24/Review/武煉巔峰/index.html","4a419e7330f6bd2ea7d1427b22f1ac18"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","449bb6a053a938a0cdf0fecff41b17da"],["/2022/01/28/Review/神醫凰后/index.html","ee1c68552b64aaeadefd336e1e4631ec"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e136730e603d8963bec2c87d5b4e6f2b"],["/2022/02/13/Review/夏日幽靈/index.html","f394197e680793a17601090f02931f17"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","af3194695ef5db8d0242144c3d4cf721"],["/2022/02/26/Review/賽馬娘/index.html","986fad17ec20b84e2f79c147a5035291"],["/2022/02/27/Review/大欺詐師/index.html","8a2392847ff908b401b5f2d9f3bee740"],["/2022/02/28/Review/前輩有夠煩/index.html","ab36f1526f84edacf21793fc8f15f146"],["/2022/02/28/Review/碧藍之海/index.html","7f8670416585754327f38c75bd314bdd"],["/2022/03/05/Review/落第騎士英雄譚/index.html","2241009e47645bcd466c23844c66a7e9"],["/2022/03/06/Review/Another/index.html","2c74b7c4e38d05b3ce4e2173ba1d980a"],["/2022/03/06/Review/入間同學入魔了/index.html","8f9bf42607dff117250856c4ba1ad497"],["/2022/03/18/Review/再見宣言/index.html","0490724cb55fb90bff63d371b6089c1a"],["/2022/03/23/Review/生若冬花的妳/index.html","bd202655706d562a0176a037c26560a9"],["/2022/03/25/Review/天之弱/index.html","74600266b972864299cc58c04b1ac22b"],["/2022/03/31/Review/滅了天道之後轉生/index.html","6bfb1cc2e1ae171ab74c7ff48541ee38"],["/2022/04/30/Review/泡泡/index.html","2ef41aa59e0f14033103234229744260"],["/2022/05/04/Programming/Dynamic Programming/index.html","a6b27db0758ae55c3cc73e446afc7978"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","14e918dc1b247891c2acf85ae12f04de"],["/2022/06/13/Review/偵探已經，死了/index.html","a9f014f8a2bf52f8c577a756f1e594ef"],["/2022/06/14/Review/黑色子彈/index.html","5d029febf3913c0255be2b4970d93d26"],["/2022/06/15/Review/黑白來看守所/index.html","4a05cac8752b09fa61f48340ec9f003e"],["/2022/06/16/Review/虛構推理/index.html","7536cb24a561d4075a8a7e08b3df24ec"],["/2022/06/17/Review/戀愛與謊言/index.html","59b81d880cb6f58095f1dc743fa1f26a"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","499797d4418d1367d7c5c209ddb80517"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","6d206d5c1ae9d2515b1ebef35b818ca3"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ac5758b394cfb02c1d2fcd7d49265a22"],["/2022/07/03/Review/Hello World/index.html","4d6a752b134a5a6e084d2629fb9dc6bf"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","808d83cf66efb8209c50a38a952ed318"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","499b01635b738ad5e2c115c801e0aaa8"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a8d198e913ad99b1d807b61efe2b0ac4"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","2203ea0ba28e6ce64a5287791e2d0020"],["/2022/07/16/Japanese/動詞分類/index.html","56b0f19e03489097336f7d7369201956"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","115d016d773ea4b71dc0b3c34011cedf"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","dd0af1b0cc5d3ba12fba46980b010ab4"],["/2022/07/17/Japanese/音便/index.html","3a8872ccf31284a5f9d3f79eb613bd5f"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d99d218acc5eb33dc64174111d33880e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","a8bd913fcf02a8ff1f1b2d443ab33b46"],["/2022/07/26/Japanese/助詞用法整理2/index.html","102a4f4ac8587628551d7eb7d7d4b5b1"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","d32866683302ae3f02ffc0a846a2ee51"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","bcfab4c1a39a2556a15a09cd11de8397"],["/2022/07/30/Japanese/疑問詞/index.html","afada4fc22dffd3243fbe5ca51371fa0"],["/2022/07/31/Japanese/助詞用法整理3/index.html","d77ce83f1d9e410b37ed4551a79f5bf6"],["/2022/08/02/Japanese/副詞整理/index.html","45da6570357a37d883be7a1875a8c0a7"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","d4b80433da643bca20f4b1ac14260b27"],["/2022/11/04/Programming/Data Structure/index.html","0c54584dc275835f05c9566642d5bd25"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","97093a5aece48f7b08dcae58014fe621"],["/2022/11/22/Review/組長女兒與保姆/index.html","743f79dafa0e81e3edf062d46093e39a"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","1e1273e3f69e574ce65c02259ea49ac6"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","928d7fdf746da5bc491c86b432427999"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","e436a4baef240a2bbe4a4e1b538074ad"],["/2023/01/01/Review/あの夏が飽和する/index.html","4eb783fdf043077a8b26ed2707001525"],["/404.html","39eb5994894d6774de213c751e1c0844"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","7f14ae277c1cc8c02a13b78ace772962"],["/archives/2019/11/index.html","8a4014a6b6fc161414488c8325159179"],["/archives/2019/12/index.html","cb8e40180364eae939fab0c2c1b893ab"],["/archives/2019/index.html","d8a7dd78741273a9c6fd027bf754152f"],["/archives/2020/01/index.html","ed34f26b38869367b3b23484f26ce758"],["/archives/2020/02/index.html","310131adec52b6bb4ea45395610e980d"],["/archives/2020/03/index.html","5605ac15d040023bdaabfa8248b2f679"],["/archives/2020/04/index.html","02d8fe89cfda2ca6b98ff8e7f51bfcfb"],["/archives/2020/05/index.html","1793f3d7cf39ab8b1a6fe1666b428d1d"],["/archives/2020/07/index.html","79afad09055921a5a97be808cc63ec9f"],["/archives/2020/08/index.html","96dc682f335b5ff35c579a6e09cc3f1e"],["/archives/2020/09/index.html","4a4e50b32d020ceb25b12502a5290682"],["/archives/2020/10/index.html","ba4eab70493865cae53f630d006e310b"],["/archives/2020/11/index.html","8b872061f25280996f6cf5442299792e"],["/archives/2020/12/index.html","c7488eea340800fd6317526c58f8775a"],["/archives/2020/index.html","4ddb159d8525df63ecdbb3a559cbdebb"],["/archives/2020/page/2/index.html","c238f3c2024858850b2b85553e79eeae"],["/archives/2020/page/3/index.html","4c2755e285652b5479fd605037be986c"],["/archives/2021/04/index.html","7145cf47bc2e122cf18d3a35c3309032"],["/archives/2021/05/index.html","d96ae8658cda4781a76dff414a6174eb"],["/archives/2021/06/index.html","c652bfb258631d120ccce5946250b0d0"],["/archives/2021/06/page/2/index.html","b26df801188378d8e6ccd46e0e6ac69a"],["/archives/2021/07/index.html","2630f844562c2b1a43b68cf95dfcfff2"],["/archives/2021/07/page/2/index.html","e31de8956bffb9cf2726591a67fcdc60"],["/archives/2021/07/page/3/index.html","6cfaadc302a88266a35de185f0e8c29a"],["/archives/2021/08/index.html","b7fb2aed5167387b0f7e5b93a879c2c0"],["/archives/2021/09/index.html","553bfcf106537d44f8e8e7d686aa2d9e"],["/archives/2021/10/index.html","48e612347df4762180bd47a296fb9258"],["/archives/2021/11/index.html","e385ae17dd85918b0a17c60fb83e8d2e"],["/archives/2021/12/index.html","72020d476ccee35428314b54438eaa90"],["/archives/2021/index.html","af1d14e29f22250b7018ac8d0393dafa"],["/archives/2021/page/2/index.html","34a4be58422971f4337687cffcbfc385"],["/archives/2021/page/3/index.html","cabee88d2d4f9800a1cd3b784b445862"],["/archives/2021/page/4/index.html","5a38d02d31d5a3c342d9ea90359a2b39"],["/archives/2021/page/5/index.html","e4e70ef8d10ce03f7a8bfdac03978f66"],["/archives/2021/page/6/index.html","9e6598234c359843e700e7b37cdf310a"],["/archives/2021/page/7/index.html","8e1bae651367639193c6d02a9f8cc177"],["/archives/2022/01/index.html","363ba0c7163d1de232b214ccd5943743"],["/archives/2022/02/index.html","0afe15139160bf3bc6b0a521cc9fc15f"],["/archives/2022/03/index.html","167072154319c3a7d8a2d37a9b3de638"],["/archives/2022/04/index.html","4f4dff42394bdb6039a26be7e30e7420"],["/archives/2022/05/index.html","e23008ade0ba9dc815498a6aa6defbbe"],["/archives/2022/06/index.html","ba33113ea1e5ef0a97c6f43d71013a56"],["/archives/2022/07/index.html","706a16424dddaf66dd95de58c02c4bde"],["/archives/2022/07/page/2/index.html","ab7e2bafaff90ceda53bd26a0c99ee93"],["/archives/2022/08/index.html","228c028e29d1c79ba826187bde6bc8a1"],["/archives/2022/11/index.html","1d85fb6ce69d8a93550eecc2edfa77cf"],["/archives/2022/12/index.html","d6b6e729160e93d5953845bcffaaa8b4"],["/archives/2022/index.html","3815584ddbfe4dd94e16eb36ef425a21"],["/archives/2022/page/2/index.html","6572d7bcbc9b856073900fa47240e211"],["/archives/2022/page/3/index.html","524bded8f3b90cb03aed79a4267ce953"],["/archives/2022/page/4/index.html","12e50a65156e2147d2c94f3e654d5052"],["/archives/2022/page/5/index.html","3b8cf97f4815e0fcbe16cd57b110304a"],["/archives/2023/01/index.html","57f799f882c04d9eb81ba3d96fe1e95b"],["/archives/2023/index.html","5efb01330dbae5e0dc35f9ad8061f82a"],["/archives/index.html","fa3d9bc0ce120e01344bffcdb0cd9056"],["/archives/page/10/index.html","3740143f1a033f21671f7a2d943811a5"],["/archives/page/11/index.html","ac3155e09711e35feb2270e781c2e1a6"],["/archives/page/12/index.html","af2bd61b03261b3bf166d5a5e1bcb3d4"],["/archives/page/13/index.html","5c21dd91f6d7588ef9c814f203af0afc"],["/archives/page/14/index.html","212039a9f99a61723cfdbeb542ae1328"],["/archives/page/15/index.html","9d9cf0c51ee082a076eced610c557939"],["/archives/page/2/index.html","247448d03adc11a0853879ab086c698b"],["/archives/page/3/index.html","8bc2421944a0c71718bc9f210ce7ee34"],["/archives/page/4/index.html","d2421d84571639c02ce2aa9dafbceb1d"],["/archives/page/5/index.html","fe77f106894f61a977a01c324b46856d"],["/archives/page/6/index.html","1b9c3023483225043ba337663c337f9b"],["/archives/page/7/index.html","aa8acdc48684e1a91d81fe22682b074f"],["/archives/page/8/index.html","b520e544b9423ebb87ab95ac006e69a2"],["/archives/page/9/index.html","318e3902d5c802ded5913150358537bb"],["/categories/Programming/index.html","e50fcc2929855ecb05f505e1d6e07241"],["/categories/Review/index.html","d44782a34c1d05fa0e41884410e54c79"],["/categories/Review/page/10/index.html","02a13f167a44aa8941c48789d90d1671"],["/categories/Review/page/11/index.html","5658e6ba629cf4da6334abfa3cf0e702"],["/categories/Review/page/12/index.html","50cff86f84e132c2bb8731d5b6e7aab7"],["/categories/Review/page/13/index.html","9894557946a27196ae652caa38435cd3"],["/categories/Review/page/2/index.html","a7c1d6f307476e71d6367ae1c31ab2f7"],["/categories/Review/page/3/index.html","56f3346b28495a13a360237d2258b5eb"],["/categories/Review/page/4/index.html","d89a3db11bf7efeb6139697896feca82"],["/categories/Review/page/5/index.html","6a66e8d9dbc296df1b40a81f6c11b9e2"],["/categories/Review/page/6/index.html","08f68883db130a41dd44702c0a7b2962"],["/categories/Review/page/7/index.html","7fd99f270f69bbb4ba35ad8b18bc6d89"],["/categories/Review/page/8/index.html","ab90a33d357877f307982d506d793946"],["/categories/Review/page/9/index.html","3ba244bc774a5b1ef7e43b8192f7dd20"],["/categories/index.html","96f7a4d8e392286f90f89fdff819c2cd"],["/categories/日本語/index.html","3aff19cd9aed3a105c1e32a9f7183334"],["/categories/日本語/page/2/index.html","5a07a35d014d6d29814c7cc72bb908fb"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","90e8eb34b0098bab433f8089a9b24788"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","dc1d204f3324386a49b972e1712da45c"],["/page/10/index.html","7911eb85da5ceb4b9ff37295cc6ee5e4"],["/page/11/index.html","1d4b62dfe542d2aa2ffa2d9c4989c54b"],["/page/12/index.html","a006023f712720f856f77609b9a96760"],["/page/13/index.html","82cfd66f2b54beb74505421e665caadc"],["/page/14/index.html","a5b1655930df198ea87cbc6de24c2299"],["/page/15/index.html","a1a35018a890d630c77a5f2e28602c24"],["/page/2/index.html","9494c677fe714df494c2555d2d8251b1"],["/page/3/index.html","36031db700b0b6a24a2e790cf70ca76f"],["/page/4/index.html","95f92ff9c90144b87b08547a0859c634"],["/page/5/index.html","a8070b5cf672ba27f26db63bd63631fd"],["/page/6/index.html","06849f2e0e0f25ccbb6bf2bf1a883faf"],["/page/7/index.html","289388cec829ed0e578782a494af3422"],["/page/8/index.html","9ec47f874499367bc45735fed6eda53c"],["/page/9/index.html","0b19d1a3ba357dbaf819c8472a346051"],["/sw-register.js","f48e734b831059154614244fd2c7c381"],["/tags/10分作品/index.html","139b98cbe8cc1aea769e5413c4626fc1"],["/tags/3分作品/index.html","3d7549ba3d61f56c4b89982df01a4be2"],["/tags/4分作品/index.html","c0e9d73d622b79b01af1193eba363151"],["/tags/5分作品/index.html","00dbf3c2beb8da82d6e980ce71c4ff3e"],["/tags/6分作品/index.html","6e766a58711faa3d40bc8fade36c8e10"],["/tags/6分作品/page/2/index.html","6aa2b5b536748acd70e6b01d2a259af1"],["/tags/6分作品/page/3/index.html","2a80631fe46d864e56c1e7abc57627c2"],["/tags/7分作品/index.html","98fae51d2b330f4381651c86ac454f64"],["/tags/7分作品/page/2/index.html","9993d50ae1636b42fd2da4ef7eb7bed2"],["/tags/7分作品/page/3/index.html","32fee91a2161892c9055dc42104745e2"],["/tags/7分作品/page/4/index.html","69430aba937f0bb8128802ee80921b92"],["/tags/8分作品/index.html","a794c70f4b25adbc824ad7cc8e5706a1"],["/tags/8分作品/page/2/index.html","8125b336148a91366c66da5c9b471537"],["/tags/8分作品/page/3/index.html","496544f745b0a5e5468dfc76237331c7"],["/tags/8分作品/page/4/index.html","bd02d5caa32ef1ddad8309ba19428f45"],["/tags/8分作品/page/5/index.html","f278acf266086f4086d37b5c6a6d5255"],["/tags/9分作品/index.html","dd89e33250d08e02885ac1ae9fba36de"],["/tags/N5難度/index.html","3a0b45db0a484ea271a09acd3a9c0963"],["/tags/N5難度/page/2/index.html","847ce73228c498a582443006510f0276"],["/tags/index.html","d9682860185f7e9d37de2ef5816eefcc"],["/tags/アボガド６/index.html","31f762c78fb58353ab0768ad8396b426"],["/tags/三秋縋/index.html","3533c57f48fe9716683666ce05f957d7"],["/tags/中國武俠/index.html","83ff7da32d840b8749ae06eaa9a61708"],["/tags/中國言情/index.html","fdecc897905e459c8884dea9bd94b882"],["/tags/二宮敦人/index.html","71a3608b4fedbc20fcca498c12a41e98"],["/tags/人性/index.html","f394930e1a7b1e1f5bc97c664a406d3b"],["/tags/人際/index.html","66bfa7bb99a97296b581cc3beab5165f"],["/tags/住野夜/index.html","4ba7fbefc69fe8a783f5c682617935e2"],["/tags/佐野徹夜/index.html","cdb9c1d828c1342873d26006b8afc3e7"],["/tags/努力/index.html","d891fdbc058ca70618fb4e2797ead8a2"],["/tags/動畫/index.html","99f073729a83474e558bff865b4cd836"],["/tags/動畫/page/2/index.html","7e3a3a90d01b69615b3454c93e2dcec9"],["/tags/動畫/page/3/index.html","b396fb27ba724f057ab963f5273e63f3"],["/tags/動畫/page/4/index.html","b92d06efa6963cc91df5cba4a063edf9"],["/tags/原諒/index.html","a50b3c8ad3b6c4a598dbf69092dadcbe"],["/tags/反烏托邦/index.html","f9d6f3c62b99b1997ed55607e1f5ee47"],["/tags/啞鳴/index.html","0485a811a90f15ebd94faa0472e9f55d"],["/tags/喜劇/index.html","b85b98044d8af195ebcdd7b553a9bbf3"],["/tags/夢想/index.html","26b02a93a78d137ecef2ad090a162281"],["/tags/天澤夏月/index.html","d290fa682a2b20534a4bf5b375d17fc1"],["/tags/學習/index.html","ce3dea39105df429279d12531af1f9b9"],["/tags/學習/page/2/index.html","4abaaebab77a5328636fd6377b45986a"],["/tags/宮崎駿/index.html","1338feed729e23842a6dcc87bd862512"],["/tags/小說/index.html","92b399acc4327bb469b068a15649856b"],["/tags/小說/page/2/index.html","a1c7fa90b6761509c296e2616e23d0a3"],["/tags/小說/page/3/index.html","608575fe33954501758a4f59e69e146a"],["/tags/小說/page/4/index.html","caf78bce5dea71fb221304a0c7afb2ac"],["/tags/小說/page/5/index.html","7e3bdc7cdb60b918c9cecf896ee1bade"],["/tags/小說/page/6/index.html","c1b1ca6688ef4a86080c1d2fcc6532c2"],["/tags/小說/page/7/index.html","914250fb47ddf725c75c24eb45f6b10c"],["/tags/平淡生活/index.html","37d900de7b139c5e97532d4f247a82a2"],["/tags/幸福/index.html","fecad7ab928f736928128f62d57884e1"],["/tags/志茂文彥/index.html","b0b19342e373908a59e0003320a1272b"],["/tags/愛情/index.html","5e22254788aaa1e10976e9983f695c5b"],["/tags/愛情/page/2/index.html","4c4d7bbfb4d2efeb4858ccfac8aa8431"],["/tags/愛情/page/3/index.html","b97981c64d8386910a670c28719fba8b"],["/tags/感動/index.html","2f9f9b0e6b5624fd28a69cc26cc90d61"],["/tags/懸疑/index.html","49bdcc794b9fb81ffe3ccc9b0a9edba0"],["/tags/懸疑科幻/index.html","001f25810a2585570c238fda456192d6"],["/tags/戀愛/index.html","7fd5395b7be8bafdeecfabd989d5350c"],["/tags/成長/index.html","b6e458d517eeb36c84d999396466cd33"],["/tags/成長/page/2/index.html","712cf8853a88d3bd1a3b3eaea6bba797"],["/tags/戰爭/index.html","84e20eb01ae5c89527a1cc2c3b2475b6"],["/tags/推理/index.html","f226609c236e42ad0975cafaedd96986"],["/tags/搞笑/index.html","e9264521562c22300469b1251c92ff18"],["/tags/救贖/index.html","5bcd8b8a80574f81cfed8a2f6ceca822"],["/tags/斜線堂有紀/index.html","97e5f312ef44454cf9e03166132a5234"],["/tags/日常/index.html","9e449097572efd84c57c579afdc72533"],["/tags/末日/index.html","a05a41e4ca48e15c124074e3512c397a"],["/tags/校園/index.html","98a4f8041b254502ef6a0cfd343c28eb"],["/tags/武俠/index.html","0f9ee57885956a6d5e1249f6d0d8905c"],["/tags/武俠言情/index.html","87b37347e83b47ccff14819905af7f3c"],["/tags/漫畫/index.html","4e2796377041b2d51e338da5fe96e355"],["/tags/生命/index.html","995e769c8233cab1208721f672ed4bbe"],["/tags/生命/page/2/index.html","6f56edef2976fe25e762a2e99ba54298"],["/tags/短篇/index.html","49cdfe54f96fd946ba381166dd15063d"],["/tags/社會/index.html","763ffdc857adc60ba94ef003f22047dc"],["/tags/科幻/index.html","c63639daa2e6fc66991cf91952f4d83e"],["/tags/童話/index.html","98466ae117650e32c4a4cc1882c14f72"],["/tags/競爭/index.html","d2aee7ad56a556f8e37b91074332c7c5"],["/tags/自我/index.html","7ef97ea0722aa85d98244679976fd91e"],["/tags/自我認知/index.html","57bf4f41eeb9266d8a66753cb25d6e0b"],["/tags/葦舟ナツ/index.html","606d608755db6b9e27f5922dfa013a63"],["/tags/藤萬留/index.html","bb174f52d878161fbda7de316e5d1a54"],["/tags/親情/index.html","201a35ac8b522f3d006868939601f4ea"],["/tags/雜項/index.html","6ab0e0512689add79f2f1835233f97bb"],["/tags/電影/index.html","eb44f50d4c3c6656bd55ab30de3a9749"],["/tags/電影/page/2/index.html","9d63c152b14b6008622113e1c67cae61"],["/tags/霸凌/index.html","cff4ba2698f6b18e4f49d1bc8526a28c"],["/tags/青春/index.html","269e9e59d641d92cef7a9db23f7a098e"]];
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
