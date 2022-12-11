/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","148ddd60f50a8f65d26684c1b1f69442"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","9f3ce13bc24cd3f8a0e73826515a42e6"],["/2019/12/25/Review/無法計算的青春/index.html","05cf2761243504a0d764d1bb6bd34de9"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","73a5d41cd48d6014cedeab9da22bb8a3"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","08bbbcdd730255d542d511ec18aa47c4"],["/2020/01/19/Review/下雨天，不上學/index.html","eaa7d7cfc24c6e5bb607f90fc93644ac"],["/2020/01/26/Review/三日間的幸福/index.html","07befac7c8fec3dd4cc0e06f581f0561"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","df9e583f99c7860b78919241d735154b"],["/2020/02/09/Review/青春期超感應/index.html","a0d94d65b525335f8749a715a4d846cf"],["/2020/02/15/Review/又做了，相同的夢/index.html","0ae793934603df607fedf0d5ed678302"],["/2020/02/22/Review/回憶當鋪/index.html","9308590f768c59a2145872b117a3e706"],["/2020/03/22/Review/不適合自殺的季節/index.html","a90d18d2cfc91636d987d0ff163a84d4"],["/2020/04/26/Review/我們都無法成為大人/index.html","4b03deaf1c4ff87da986f742db2a42dc"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","8eddb13cb743dbff602ad6281ef0daf3"],["/2020/05/17/Review/人間失格/index.html","0d86d6866563cfcf06f30ca9aedcae00"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","512becb9fcf52355cdc851f9519b932f"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","ebe9bee9792be4967923ae85e3c0a2d1"],["/2020/08/01/Review/銀河鐵道之夜/index.html","bd01b8e4ee7a3ce31cd61625b0ccf2b4"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","3adf428208f180a7894d1f73466ed4ce"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d82c36a2ae60246c100becfd0a13326c"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","843f04c72df6e631931428c561452147"],["/2020/09/13/Review/羅生門/index.html","87bdff0ea74310e03c2d7269d8707842"],["/2020/09/20/Review/闇夜的怪物/index.html","9b6ff557e632a443964460252bc7d2f4"],["/2020/09/27/Review/14歲，明日的課表/index.html","d107b81dccc9b84b48e8000bf86a2fcc"],["/2020/10/04/Review/致十年後的你/index.html","6ef4f7884dcfbe5672be38a787984336"],["/2020/11/08/Review/滅絕之園/index.html","f0e6bc8e412619e2e5863c18e6cc06d2"],["/2020/11/15/Review/將愛拒於門外/index.html","f34230aac438af3c00acee912820f0eb"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","9f5283cff2da96d6dbed4be3a855a406"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","cc8f1b0d1a3b4e64d03e2f4b9697a845"],["/2021/04/22/Review/道印/index.html","637f8c5c9141b3b09c89d0e7147d9398"],["/2021/05/03/Review/戀入膏肓/index.html","0a0ecc27969dd0445c6399d6a5b45005"],["/2021/05/10/Review/Dice/index.html","87bdeaa5f9bbd67cf0120925caba368f"],["/2021/05/15/Review/魔女之旅/index.html","4d5419c4371944a32a2cd1aae7f342d5"],["/2021/05/28/Review/戀愛寄生蟲/index.html","5e01cea6b10a753806599fb9d9042405"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","a85957152a8d6bb86364bb3efae122c2"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","d721c4087d8674ceb9accf3b01f5a2ac"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","9e41c15dccbf548463254dfa212730e1"],["/2021/06/05/Review/流浪的月/index.html","836afd8671079cbcf5ca139d653ed1a3"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","992a90b4a496770eafd610f251040a0f"],["/2021/06/13/Review/第一人稱單數/index.html","29d28a97f7f0a1f6a533e00c92b60435"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2d72cb2141b39a314abc821dd6d9788a"],["/2021/06/16/Review/願你幸福/index.html","0246ed30a05b55c7abfd77b8316ffb8e"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","0df69a4e010ff78f074c25b2e0435e8e"],["/2021/06/21/Review/神隱少女/index.html","b1326045fb7837579c9094a6d539f435"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","6fbd532415816124998207b2c1b761e6"],["/2021/06/23/Review/天空之城/index.html","a24da923f8260ae11a4de9e8541e918e"],["/2021/06/24/Review/魔女宅急便/index.html","f57b8ebefeac415f3a9a06b2a8c8251b"],["/2021/06/25/Review/借物少女艾利緹/index.html","d32288bab816b15e622bd6a0be491d46"],["/2021/06/26/Review/魔法公主/index.html","c403d341e429516a4e2d34d3b6ce18c7"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","d68ec2e34f34db1148eece4b02db4b69"],["/2021/07/04/Review/飛雪與劍/index.html","b768a009f8fbae2733a35e18829dac2f"],["/2021/07/09/Review/地球防衛少年/index.html","162c3cc86a19a8563eee7d48cd4979a6"],["/2021/07/12/Review/Angel Beats!/index.html","2bd4c5f297b94137287f5c2d549dd210"],["/2021/07/13/Review/Clannad/index.html","d2ce36fab7b8ef1ae5d7f45836c19a00"],["/2021/07/15/Review/AIR/index.html","70b7b1d3478d0eb95694742a9da7328f"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","3a97abdb0bf210b748d24b8b316e7da4"],["/2021/07/15/Review/螢火之森/index.html","9b68089b1d4904339ebbd0758dc59ff0"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","59b6ce1ae3062bd4025c4aaa7f13a71e"],["/2021/07/17/Review/奇蛋物語/index.html","4f57a7803705a76479de0e89a0dcf397"],["/2021/07/18/Review/Vivy/index.html","49b0180422ef099e81acd07763195eda"],["/2021/07/18/Review/請妳消失吧/index.html","00cea04f9f87b06e99a7c37b3d550cd0"],["/2021/07/19/Review/漣漪的夜晚/index.html","2e5d8f9c123aa1a02447960575b5843f"],["/2021/07/20/Review/月色真美/index.html","882642c130264f1e337349cbae1d19d0"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","45d7a297608681d153578de71bfb89ee"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","2873dbf525c0c388c2f319ba848ac817"],["/2021/07/22/Review/罪惡王冠/index.html","bb505c7321a90c9b4fd5d6ec261e000c"],["/2021/07/23/Review/弱角友崎同學/index.html","9187946eb8bfd6af9b659a23c11ed3a7"],["/2021/07/23/Review/惡之教程/index.html","e370118ebbdead1171d47906809e8ed5"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","9a2464794e68b1201161fef67bb7bc6e"],["/2021/07/25/Review/魔王勇者/index.html","84d2c5eb5d9d5e024c38a098e36d7238"],["/2021/07/27/Review/一年A班的怪物/index.html","776e5389c887ffe23d25b8d85accd5d0"],["/2021/07/27/Review/奇巧計程車/index.html","bbe26699c27eec3bb8ba32d149621649"],["/2021/07/27/Review/專情的碧池學妹/index.html","0e4c360be6b1c49d4fa43e6bef94902e"],["/2021/07/29/Review/只有我不存在的城市/index.html","9d3bc92b3f2f5d1831ea3d66a6d23a4a"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","76b05de2f98d0fb194504a50b745effe"],["/2021/07/30/Review/可塑性記憶/index.html","c98f07fffdf5589f210c3b862dfc6bc9"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","f4266d98b67295b039abaafa71ae99f8"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","e05088333e5a472b52cea2cb55355174"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","3b7fa302c4c68c96131c389db1006ae8"],["/2021/08/25/Review/清戀/index.html","7ec5355ed33369b9da8232b63b401f78"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","1485cd30d38af47f86177140b810770d"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","b49d0964ce0bbed32a2217f1b0438829"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","39d7c609ea4401fb3ea6a05b38390cf3"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","b60d70dc7772f78882e8f6ca52b2637d"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","f0ec1aa44e727f11759b8542df4e3745"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","8fd2e72f1bd7c3d6fcadfebf9626de1d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","d2cec58768888381ecd40d0a345bfecd"],["/2021/10/16/Review/龍與雀斑公主/index.html","65a99f141dd772ef9608e23f3c25141b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","cbb5360a9331d3548fa4bc4a43eaa29d"],["/2021/11/13/Review/徹夜之歌/index.html","99b6f5e6bf033a02f1aefc90fd46561e"],["/2021/11/24/Review/武煉巔峰/index.html","b000f2021aa9e400db14c597d3a31f79"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","eb86a18564e95501cb1234f92b86153e"],["/2022/01/28/Review/神醫凰后/index.html","0717b59ab2a127d495746dc9b728c7d5"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","59bf38aee517c105751112898964bb55"],["/2022/02/13/Review/夏日幽靈/index.html","c7a5d6958df16a5b436a3899f10fc315"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e259011b7a3508f76494cb55822d7b72"],["/2022/02/26/Review/賽馬娘/index.html","4031c8adbe1a740474f5457d9aa418c4"],["/2022/02/27/Review/大欺詐師/index.html","9b7fb300854ec54d50c6510566c3d8ea"],["/2022/02/28/Review/前輩有夠煩/index.html","1e7bf444a74051a36fc90f1e0c857160"],["/2022/02/28/Review/碧藍之海/index.html","26b30171b9adc5aaab23e358eb81f4a6"],["/2022/03/05/Review/落第騎士英雄譚/index.html","ce2017ff509f53486595a2941ac5bb65"],["/2022/03/06/Review/Another/index.html","627ef4543861f5e987f01401894b032a"],["/2022/03/06/Review/入間同學入魔了/index.html","ffb8dd5987ac0a86feab03dcad2e878c"],["/2022/03/18/Review/再見宣言/index.html","5744b971104cbe944fc50374c13a0b03"],["/2022/03/23/Review/生若冬花的妳/index.html","b7f7b3d9099c9f6d1cd0975e3e3042d4"],["/2022/03/25/Review/天之弱/index.html","c585d6244fce7705015225c07d14122f"],["/2022/03/31/Review/滅了天道之後轉生/index.html","d9bc672a206f7710f0dc05b8eed997cc"],["/2022/04/30/Review/泡泡/index.html","2580df9f34604203f3c35d358b797632"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","902b88956c58ab53f848680c5a8d3d6b"],["/2022/06/13/Review/偵探已經，死了/index.html","de328aede2fa7161ab4459885ba6f43d"],["/2022/06/14/Review/黑色子彈/index.html","7c3a4a36488cc4fbc527bbe96a2ffd7d"],["/2022/06/15/Review/黑白來看守所/index.html","786457e3503654c16ded2767dd3c599b"],["/2022/06/16/Review/虛構推理/index.html","de3273d6b33ec39ae3d6453c4855e57e"],["/2022/06/17/Review/戀愛與謊言/index.html","7ba9c18a0a86a260b3ec2896a16ba750"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","eab1fa732096314fe5d3ed6673d86113"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","96091d4b63a163fef0efb6f855c621ac"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","b1bc34c1b52cc5b412cc014a7616b04b"],["/2022/07/03/Review/Hello World/index.html","18bf1593b2ebbb9305ce863dc7840fd7"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","813d9adc3428bee731de20434fb47a09"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","4bc481c974cf506147522ecd5345fa5e"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","65174f834d7eb8e409ef54fa799f7a5d"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","814a5d87e6d3afdc5555a6a217f794a5"],["/2022/07/16/Japanese/動詞分類/index.html","374ae06e800aaa411ee43aa09467f23b"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","0bd9b637dea12e37d14038ab8b2f6691"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","02d1dbd94c21da32b162bf956a96397d"],["/2022/07/17/Japanese/音便/index.html","4b7a412078ca811a8f722ad6bf66ecfe"],["/2022/07/18/Japanese/動詞 時態變化/index.html","9dc6cf1fcccfb20dfdbe649471707536"],["/2022/07/19/Japanese/助詞用法整理1/index.html","f17dc14e58e65c1031a0f73735d6bb92"],["/2022/07/26/Japanese/助詞用法整理2/index.html","4ddc2d586edeed191fcde7dea5f706c4"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","7e36dbd626a4eb4b00d6996a4eab254b"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","e00f43c86aafa458804aa49b12e533d4"],["/2022/07/30/Japanese/疑問詞/index.html","5df558b5e7166b7e4f32f9d1bc2288d2"],["/2022/07/31/Japanese/助詞用法整理3/index.html","a41b0fb364ddbaffb79ac154d34af110"],["/2022/08/02/Japanese/副詞整理/index.html","6a502eaaa7d8a09c3b61dbf4f0c033cc"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","e7676b64eaf3bb7d593a283199c6056e"],["/2022/11/04/Programming/Data Structure/index.html","f7555e5a81c9f1770990fc2d3be0428c"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","b823f0c0f9703b5ca2bc5d14c3f2a86d"],["/2022/11/22/Review/組長女兒與保姆/index.html","6276965caca41914e6cfe60a6c53c0be"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","a9da3b45a5af55026c85bc9cd25e4de5"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","cbef59c3fde6f7bbb8707492002e67a7"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","82e96881d2fd26d2aae929b0a961e4ad"],["/404.html","30e0c0f67b6ab5949ec30c28cfdef737"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0ec665dca7e5b77ecae608a1981a1318"],["/archives/2019/11/index.html","b88574af01e7c08075b06858120c3235"],["/archives/2019/12/index.html","02e420b5c1459fa95f4b4554a46f3402"],["/archives/2019/index.html","0fb3f4cd9ca11578e76313488d4c9a3e"],["/archives/2020/01/index.html","35bc66b27ee13e6df709d5d34d3af7de"],["/archives/2020/02/index.html","556361d9db59b66a07ab6a1d937b32c0"],["/archives/2020/03/index.html","9166673c7eb18b029306669c8545ec0d"],["/archives/2020/04/index.html","f6582495928301c7eadf3659093272dc"],["/archives/2020/05/index.html","c5ed0532fd10d8306c2180508a278105"],["/archives/2020/07/index.html","8ed3d746ce9c5b00f4ac3d54f084e401"],["/archives/2020/08/index.html","33b7bce484bb2846dc54511801afa997"],["/archives/2020/09/index.html","37d54ab6118c9712fdca3d10a90dd49b"],["/archives/2020/10/index.html","6427ef11a144fbd90b2b135ea7f75433"],["/archives/2020/11/index.html","5221fceb7e2bd791f005f02e4ee57b98"],["/archives/2020/12/index.html","66ebf67831a1fc09c652e58f820f4dc4"],["/archives/2020/index.html","41b90d37dc341826abcf93f9ab692d60"],["/archives/2020/page/2/index.html","61ea7dbdb730d940b81c2496f38b34f5"],["/archives/2020/page/3/index.html","75505429787cf6654aed0dd8220a7d34"],["/archives/2021/04/index.html","e6e0bcad45dd17a1becc723f13649ffc"],["/archives/2021/05/index.html","2352d42fbfae1704812f59c1a38dbb17"],["/archives/2021/06/index.html","a4f88817b6b82c8410ef6f2394bc6400"],["/archives/2021/06/page/2/index.html","099db70d0c0f24f26dfa5e4f1967ca5c"],["/archives/2021/07/index.html","b82541bd5c662201c29e407f234810c2"],["/archives/2021/07/page/2/index.html","030e62e3b93fde4df7e6bcdd4e0ed0c6"],["/archives/2021/07/page/3/index.html","185fe2471d1008b6433b8f03e380fab0"],["/archives/2021/08/index.html","5ba6d1dec96c3185ab86c0c999102558"],["/archives/2021/09/index.html","5d2871106bd53359466d44db5e3385cd"],["/archives/2021/10/index.html","6ef93ca475e03119e85b8d4711fc1487"],["/archives/2021/11/index.html","a2d3cbbe50ffc89b2649b220f8675ac8"],["/archives/2021/12/index.html","3973a2de99dfef9d538a20cce0ac051a"],["/archives/2021/index.html","126baa42021d0c66a9364fe3ff868ab6"],["/archives/2021/page/2/index.html","69b69749ae95edf5127881aadca063e6"],["/archives/2021/page/3/index.html","a934754d6419a3135b26b9bab240fe7a"],["/archives/2021/page/4/index.html","283b759e5becda77271a75b00935dfc7"],["/archives/2021/page/5/index.html","d6aa3708730e9beb1e9067f3384cd175"],["/archives/2021/page/6/index.html","fb620a8244f8b6e8ade5bcc3da3d33a6"],["/archives/2021/page/7/index.html","dc504275f9d9d8aa4c8d67bbdd048b96"],["/archives/2022/01/index.html","7ce6d8fd8b97e9d412bb585054355a2b"],["/archives/2022/02/index.html","99d48aac114984b6cdb85ccb95553150"],["/archives/2022/03/index.html","6044bc453b5a217bda6c17a81dcabf41"],["/archives/2022/04/index.html","572a35db7eb1c20e1b642b6b07a64897"],["/archives/2022/05/index.html","f36cc4baf792e88e55940e1ce6afa66b"],["/archives/2022/06/index.html","cf469721042256f678b03400eb684d1a"],["/archives/2022/07/index.html","194722ad416f2b68ff437d358891a645"],["/archives/2022/07/page/2/index.html","4f24cf1b6e1601a3f99faf393e5cc6f6"],["/archives/2022/08/index.html","dd60dec89bdc7c18f752296bf06d6227"],["/archives/2022/11/index.html","40893335bdd000a6f6ab684db9bfb6c0"],["/archives/2022/12/index.html","81a3de868f5afe7be56f120c67716782"],["/archives/2022/index.html","3eed493fc34c9c92d30626dae5f95d6e"],["/archives/2022/page/2/index.html","5d235414e785b709101936c9cde6a253"],["/archives/2022/page/3/index.html","1f44463bf30044c7491e26e98b6a67c3"],["/archives/2022/page/4/index.html","e0ea621337874cc84600d440f6d6c0dc"],["/archives/2022/page/5/index.html","025bb06ba7f4019fff0417dc9ea3442c"],["/archives/index.html","32a498392c9cbe9434fbc30f1c52f103"],["/archives/page/10/index.html","babd03ee02bc578a003aaacfa116fb72"],["/archives/page/11/index.html","40486cd62fba9e7b8818dde50f14cef9"],["/archives/page/12/index.html","6a5be0e6880e430db8d2b66175f21239"],["/archives/page/13/index.html","bf16d6405103151ad9766279147b69a8"],["/archives/page/14/index.html","53ed50b26757f77b6f1c2ef0c8c05b75"],["/archives/page/15/index.html","739faab87d4fe8be76f7232edf62a317"],["/archives/page/2/index.html","515ae86177ba4e8716912d9b8e034e61"],["/archives/page/3/index.html","a5802efb0c53e032c92a739adb51178b"],["/archives/page/4/index.html","f7c9776d1ef1de29749ea4d28f851c60"],["/archives/page/5/index.html","f06cb3cc612e254822d151d5b268c6ac"],["/archives/page/6/index.html","a2fc79cc854f4faae67204a8c58d0524"],["/archives/page/7/index.html","a96649e6f34ffa4eb6f18edabb1b07f6"],["/archives/page/8/index.html","b45fdb99978056adc326b17926feddae"],["/archives/page/9/index.html","9792339816bae6cee6118eddf31d8394"],["/categories/Programming/index.html","d6502eee0c756b5ad3f8e0761c4e2291"],["/categories/Review/index.html","c66a4cf57878450011d3e8430e6b9e6d"],["/categories/Review/page/10/index.html","673f10dbc377db377498ecee80fcc70c"],["/categories/Review/page/11/index.html","3ac1d3928cf6d80c5af27f87739a8e33"],["/categories/Review/page/12/index.html","3012799347ca6e294ed78381d0bde6f7"],["/categories/Review/page/13/index.html","13a73d76f9d3b2070ac7d8c7dcee9b5f"],["/categories/Review/page/2/index.html","618800f04bb05ce8525dd2af32316d5d"],["/categories/Review/page/3/index.html","22ad564f2f2b8501f0e1b34f31dcd408"],["/categories/Review/page/4/index.html","620d87ee06e4e37afdb6eaab625751d5"],["/categories/Review/page/5/index.html","8113f6059de86e744c5d98534dcb8417"],["/categories/Review/page/6/index.html","0e58e799b9134b889c84cf7fc8ba3652"],["/categories/Review/page/7/index.html","8893a60ab5bf901a494463031d42a2fe"],["/categories/Review/page/8/index.html","d420a8a587ce4382a39db0f81ccdddc7"],["/categories/Review/page/9/index.html","671f7ae9557c87e50492ce810b319d2c"],["/categories/index.html","43e678410b9071a44d69061812261041"],["/categories/日本語/index.html","156902849d0b09967b32c9fd9dbbfee3"],["/categories/日本語/page/2/index.html","2aa30b795927b4a0abd50dc9a3b0b9d6"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","503772fc14cb62a2c72c15e9d49be8ec"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","57a6c512fea66a7d0ca2a092b27a2166"],["/page/10/index.html","886a459385b8855ce99356e1acbba309"],["/page/11/index.html","f70d6bfdd03709bdff0fcabbe58c991b"],["/page/12/index.html","7e93076a413210717fb33ba2e8698c15"],["/page/13/index.html","bac5de2d4e36182d42764ec27ff96424"],["/page/14/index.html","80407b7bef433b3586bf1131f992d48b"],["/page/15/index.html","df29e70f447da61f175f9e583f13b5ba"],["/page/2/index.html","be8caf6a6dc7c8badf2aaffafd5eb603"],["/page/3/index.html","d389482d5d226791312762cdcdb6d2e3"],["/page/4/index.html","a0b0708767bddd7af4db5399f6af2e11"],["/page/5/index.html","32001e856b5ecbebf17de1c0e9a951a3"],["/page/6/index.html","b3491a9d86c9477c9cd7a967334cabad"],["/page/7/index.html","d103550caef77ab5daeb2fef2a06943b"],["/page/8/index.html","1e6899553fb0b94839aeeb5322297120"],["/page/9/index.html","9f7f2d4f87228abf02708ad758e42d8a"],["/sw-register.js","6d0ac4b42edf57326a98f117fd5bf0bb"],["/tags/10分作品/index.html","53332bc74e5cb7f4752d28be09df9aee"],["/tags/3分作品/index.html","eaf0e56dded818cb4b43c23db783caca"],["/tags/4分作品/index.html","367ce0871eee12aac32c98f9356ad107"],["/tags/5分作品/index.html","874d7ca3258b078aa807c38820854c04"],["/tags/6分作品/index.html","4099e68abb32ca8612881ed8622d6154"],["/tags/6分作品/page/2/index.html","961c759cb6d613016be838611ec56141"],["/tags/6分作品/page/3/index.html","1120b221fc64322ce7515abab5d16f88"],["/tags/7分作品/index.html","22fd935b98a563a68408e991148be528"],["/tags/7分作品/page/2/index.html","6913f249eaa05b3de6d4a99dbd2cfff4"],["/tags/7分作品/page/3/index.html","f77b25a899e1963c84e906ff2923598d"],["/tags/7分作品/page/4/index.html","403b75efacf6bba9d79e64b970113e91"],["/tags/8分作品/index.html","d5542cd9b0b9f42e590882e03a7781b6"],["/tags/8分作品/page/2/index.html","b530486e94d73754fbdd825e20df9f7e"],["/tags/8分作品/page/3/index.html","0a15d01e51dd9b5651bfb4982e070ab8"],["/tags/8分作品/page/4/index.html","ba549b466606ba14194ad82d3c906a47"],["/tags/8分作品/page/5/index.html","d71f02cf779356bb07bfc4c62267799f"],["/tags/9分作品/index.html","8ced24768da6c292e13ec38e47297d55"],["/tags/N5難度/index.html","35b45ae73b539525ad0098062f566351"],["/tags/N5難度/page/2/index.html","e8e2bad7403c9d8432a2768a2866dc90"],["/tags/index.html","19f766b9febaf33f34454402058ca86d"],["/tags/アボガド６/index.html","0f852da191d0934c542a4ff9a4365dcb"],["/tags/三秋縋/index.html","9f2a30852e7b10c7d69d716558c68c5a"],["/tags/中國武俠/index.html","292bf85046e714f02080989e87eff24f"],["/tags/中國言情/index.html","f260a3e96fddbe5b8f532d27f3111181"],["/tags/二宮敦人/index.html","a5dbbd879843c4295fc133ee75679ba8"],["/tags/人性/index.html","fe3ef5c5a1c7346e0970a788b491c1b0"],["/tags/人際/index.html","18c2695a1416ff26ebb65c7a5e854038"],["/tags/住野夜/index.html","0f84cefc446514095ab5f7e912282cd5"],["/tags/佐野徹夜/index.html","698f463ce5cc7e0fe01183cb028ae418"],["/tags/努力/index.html","e31c83c1e95c4ae1b6d3edad724230a1"],["/tags/動畫/index.html","8e7673bc4191a36664a879c89569e683"],["/tags/動畫/page/2/index.html","b88d0d4f2a8e9229e19a4a593c6edfbc"],["/tags/動畫/page/3/index.html","1aa4c8d73f7a0704bcb970b86f754dbd"],["/tags/動畫/page/4/index.html","078cf73e886d9ea8a3d1c5776330c661"],["/tags/原諒/index.html","ee6b75a3076aeb49a8fab3cd83164bbf"],["/tags/反烏托邦/index.html","4ab82a9c2978e09243cf2be7043ed465"],["/tags/啞鳴/index.html","ca06e0407a7e3b9fa0b07238a87c30d5"],["/tags/喜劇/index.html","a914f593e27be5435817cb60274eff27"],["/tags/夢想/index.html","a88a5674d53128bddfab1abc2f8fbf1b"],["/tags/天澤夏月/index.html","5567b41c5867d824455ff040fddfc4ee"],["/tags/學習/index.html","d04403ecfe0b1d9a7723c11a95cb5931"],["/tags/學習/page/2/index.html","89efa3ae3514261af4c38e4c17964975"],["/tags/宮崎駿/index.html","d3f801f16a63d5684d944612c91e86a0"],["/tags/小說/index.html","0ee82effc698c75f1ad939c360ecb6f2"],["/tags/小說/page/2/index.html","0087e4238041e4b6a1f04c96ce71053d"],["/tags/小說/page/3/index.html","74eb0410c182c3c2559a4a35b737cad2"],["/tags/小說/page/4/index.html","4c53b789b596da59539adc9b1480bb18"],["/tags/小說/page/5/index.html","a6a8ec1a7d87b8ab34d95458457e8515"],["/tags/小說/page/6/index.html","c034ac58ad30729858e986af70cef120"],["/tags/小說/page/7/index.html","059ccb8865fc8752f1c07109741ca985"],["/tags/平淡生活/index.html","5a06f6bda82558e29b984a0851635d92"],["/tags/幸福/index.html","80529c48755b3aac68d9a435d7a986fa"],["/tags/志茂文彥/index.html","e5a31ab202b1a59e2f29fc889a45d45c"],["/tags/愛情/index.html","8b27e3a478c26363063d3af242d8a48f"],["/tags/愛情/page/2/index.html","581cde90d18ab567162395b458d44d87"],["/tags/愛情/page/3/index.html","a652a73e012ebb05501f13193b483900"],["/tags/感動/index.html","156f668a8d6375dee39eb04d2ceca2bb"],["/tags/懸疑/index.html","a5d29c4d425edf0b83d657b7f681207b"],["/tags/懸疑科幻/index.html","22a7eb05455564663cd8c981d92beeda"],["/tags/戀愛/index.html","f150c6c6e68fb669d6a4a4f6650e14b9"],["/tags/成長/index.html","255cf1d1b67adc50fc17156ef8f9e7a0"],["/tags/成長/page/2/index.html","641b61b2c6c76e1791131fc26c39e6cc"],["/tags/戰爭/index.html","7898406eedd832a7f49799e840bea9a7"],["/tags/推理/index.html","98eee13d8719b387875762a101f3b7ee"],["/tags/搞笑/index.html","1c97043d7dd2e2fc424ffd67e8c1e9c9"],["/tags/救贖/index.html","39280de1c2ef555910f5496dcf1e1f1d"],["/tags/斜線堂有紀/index.html","c5e6a08b93bb7fa568837f45ecbd6feb"],["/tags/日常/index.html","b31c52d6225168e688e4586f8f0e5ab4"],["/tags/末日/index.html","4368a004f84c36b414a42898698101f5"],["/tags/校園/index.html","91fc8e43d62649f34ac4709e9c7e507e"],["/tags/武俠/index.html","42f414412e523a60abe7bd3a1d621d5c"],["/tags/武俠言情/index.html","84b2ba55a6d0c297408cd935c6ddcb9d"],["/tags/漫畫/index.html","4a2126a07a99dbdb292cc7928ec3b8cb"],["/tags/生命/index.html","3b77abfc13b7d9e8f514d1c8e3245e28"],["/tags/生命/page/2/index.html","8a3383985c4af28e939e1d905ef8ec99"],["/tags/短篇/index.html","475455c544ab249241d2ad9d5ed89692"],["/tags/社會/index.html","f04691af0344c98746d7a3fb8decdbaa"],["/tags/科幻/index.html","992e885c4e04fb4028dfccb748ff9b0f"],["/tags/童話/index.html","4609c66e75e719f84c0c05248c557233"],["/tags/競爭/index.html","08a30a88c350b27ad822d4906203dd1e"],["/tags/自我/index.html","8930cfc957de3122f44d6813d7d6a803"],["/tags/自我認知/index.html","eac725332ee9b038ba4b3eac58b4b901"],["/tags/葦舟ナツ/index.html","497190173740bc6f9da0c80c6038f49d"],["/tags/藤萬留/index.html","83bfa5606260fab58ac556140be6d98a"],["/tags/親情/index.html","96f938e7f7ce1f68416c59cb7d7926e0"],["/tags/雜項/index.html","4b1da1190d9dd94a6df5ad5337fcd617"],["/tags/電影/index.html","b135bafb058d80aaa9dda26e1973e467"],["/tags/電影/page/2/index.html","16cf06b99a68f9e65c9678cd44631cb8"],["/tags/霸凌/index.html","fa18739720f2ccf2ed47f3e982b58929"],["/tags/青春/index.html","e3384453413843622304fe9bf760cf1e"]];
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
