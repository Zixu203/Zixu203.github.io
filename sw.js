/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","a1afd881e8f05d3ebc7100b856b61b12"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","1d0e8c04ecc8bb5eb327f61caf5d9e1d"],["/2019/12/25/Review/無法計算的青春/index.html","24074c550dd215bc9670bd1f51597569"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","60f33f1826f1aba07bd6ba67aaa4c4b7"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","554a8a3ea65647197d23f33381093017"],["/2020/01/19/Review/下雨天，不上學/index.html","20059c7739abadd3f5c6939d3f3aa7a2"],["/2020/01/26/Review/三日間的幸福/index.html","d2fdf62bdd5abac7100a0bc1f5815ee2"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","86b91b41abf1b1127969f15127642cb8"],["/2020/02/09/Review/青春期超感應/index.html","b6845cd6f229182f4be722b33893c85a"],["/2020/02/15/Review/又做了，相同的夢/index.html","b93b3db24ebfa2e72ba5f7555ae8269e"],["/2020/02/22/Review/回憶當鋪/index.html","75fe15d65b2fcda495f51b38e0590244"],["/2020/03/22/Review/不適合自殺的季節/index.html","be280c546440da6a4416f8a0b886b4b8"],["/2020/04/26/Review/我們都無法成為大人/index.html","ea53af9d4bd334da17ae91ae851f1c0f"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","e470e9807bf89c1bb2dac638ad818b24"],["/2020/05/17/Review/人間失格/index.html","c89ff0660480c3d09b111ad9a010e06a"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","fcbcc1f378891c015821a68ebfc80af5"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","6f5d627b9a6a9a9804fc3f9a876a7df6"],["/2020/08/01/Review/銀河鐵道之夜/index.html","12064dc8d4544fbc3c252bf4879e4dd5"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","302d42f30f32f2c270c4dfd4d6e67267"],["/2020/08/16/Review/15歲的恐怖分子/index.html","0593d0495cb35e5e942b10a7fcf3e2c5"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","a5edee23ffbe5b14e5629ef7f823ac57"],["/2020/09/13/Review/羅生門/index.html","3941f4fa0e0fb704f577f7d1fd00e7d1"],["/2020/09/20/Review/闇夜的怪物/index.html","f8ac685ba14155e109bec9810bda6658"],["/2020/09/27/Review/14歲，明日的課表/index.html","1f45dd4ae95e9408418d905ef800884c"],["/2020/10/04/Review/致十年後的你/index.html","1d6f6dc4bf3c71063eaa3744a6f34f57"],["/2020/11/08/Review/滅絕之園/index.html","e5ecccaf50bbfae4e8eec83cfe261810"],["/2020/11/15/Review/將愛拒於門外/index.html","9bac181c2edf23e8e14348221b567bc8"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","22c4b261f172f6deb48018452ac7514c"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","7a79e351a6d7d8f4f743801aa945c287"],["/2021/04/22/Review/道印/index.html","01668e5180084bb975dbe06098cdc8e7"],["/2021/05/03/Review/戀入膏肓/index.html","96f64cb4fc0c3a9409c641ad089434e1"],["/2021/05/10/Review/Dice/index.html","fb1e3ec76e4385c06c7e3964b1d257ab"],["/2021/05/15/Review/魔女之旅/index.html","c9454248dcd3cccb147c88091f2ecd86"],["/2021/05/28/Review/戀愛寄生蟲/index.html","33e0bdb9ad51f611838bf16cd70a2e82"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","fb1b123ae8bf21c579a51c363a1803ef"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","7a5091f39c1541a2e2a8331d88f8e9be"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","f58cd424c8326ec33df3332431e055f8"],["/2021/06/05/Review/流浪的月/index.html","b200a7a2476cd745f674722a68d9ab1d"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","ebb429c5a1999a351ca3fa61493f24f7"],["/2021/06/13/Review/第一人稱單數/index.html","7019e8d04132e85e8c0c57ab7be9bc84"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","15a085dec2777b63ea2024255f0e4659"],["/2021/06/16/Review/願你幸福/index.html","224739ef135ce09df14f83fa57e2c81f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","8d225e61c71886e8350eb70d5b24867e"],["/2021/06/21/Review/神隱少女/index.html","8577a1ab19f2e63d8a4fac789c37257b"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","785d67e38f8e3bfc866c6b2895324997"],["/2021/06/23/Review/天空之城/index.html","65ae899532e93b2977a021db7b9f4456"],["/2021/06/24/Review/魔女宅急便/index.html","00bf2ecdc4346c3219159e2ccaef9693"],["/2021/06/25/Review/借物少女艾利緹/index.html","880204be5a07195c1f5a6900585be848"],["/2021/06/26/Review/魔法公主/index.html","15d31ab7cf18bdcad50bf64db124bae9"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","ac45512efe55c9e9665f8f0ab44c9179"],["/2021/07/04/Review/飛雪與劍/index.html","2512ade4cad16e96fc7c6bcd72c03bfc"],["/2021/07/09/Review/地球防衛少年/index.html","354b92eeb0490c8be52830e3829a4470"],["/2021/07/12/Review/Angel Beats!/index.html","8ca73b438757ead6a75e72b599a7d965"],["/2021/07/13/Review/Clannad/index.html","aeed262be49113ff223af22e7be0b2a0"],["/2021/07/15/Review/AIR/index.html","155b7e31c1a9c9bb536f22c11a3c73a1"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d99966ae12b6c43b2055a03e9e010a5f"],["/2021/07/15/Review/螢火之森/index.html","9e86581e7837ae0f78f77feebd8ee16a"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","a8be2239c043eeace2ee730de4c3c932"],["/2021/07/17/Review/奇蛋物語/index.html","3a7dd0d0280b94977d185cd23e8fa74f"],["/2021/07/18/Review/Vivy/index.html","14000a082d45f8e4655b309d7dc2d2e2"],["/2021/07/18/Review/請妳消失吧/index.html","bf9d8d56bdc58e8d6ed2cdcb7506e582"],["/2021/07/19/Review/漣漪的夜晚/index.html","84eb014f209e1864b737046a1f68d919"],["/2021/07/20/Review/月色真美/index.html","206c95b53e3826c63eab25b63e52e7bf"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","ecf19b068263077cebe4d1d159e977ae"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","9d2a268d85ffb0fe600318d1a9d4e5f0"],["/2021/07/22/Review/罪惡王冠/index.html","c4574e93dd91c6c31ea9d78e584cd53d"],["/2021/07/23/Review/弱角友崎同學/index.html","83cb336305e73352b42621086138e9b4"],["/2021/07/23/Review/惡之教程/index.html","f0995b6fb35594fedcc212a5b0f3093d"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","d869bf81b12ad5d7a77bce6f8d12682a"],["/2021/07/25/Review/魔王勇者/index.html","76eaa87243e7338891a93ad622c23dff"],["/2021/07/27/Review/一年A班的怪物/index.html","09a10b0a76e364bca5ea8b9f8aa88e9c"],["/2021/07/27/Review/奇巧計程車/index.html","b4a55ffbad9e911062928275c3a85cac"],["/2021/07/27/Review/專情的碧池學妹/index.html","7da6c83a3cccff2d3b2b927a044582f8"],["/2021/07/29/Review/只有我不存在的城市/index.html","873dedd5e1f10f8a499270763fd7b39d"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","56914acb3cb21d70fa47187907aedbf8"],["/2021/07/30/Review/可塑性記憶/index.html","adb4251e299716e2dec3620ebb06c3af"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1a9f9c3627e44cbd39727518c20078e6"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","e4d99a584b37ad5a846b044bdab900ef"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","5d253097b2c4eebd37affb941fe299be"],["/2021/08/25/Review/清戀/index.html","503142c33465e532c9a9fbd2619a17c8"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","212b1c35eb563c4d8bd2585e3b8611f2"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","df0a9a2ad1421d63327c9224ffda10e4"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","781bea444c9fc351665c3f984ac40764"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","b60bf1d0b38b8fca1926580d548aa363"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","0dc158001c331f0d279159a129b75697"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","9d2904ef45cf53a981b7360cd8e876b3"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","98d4134e47b0f755e23a32f77d92c120"],["/2021/10/16/Review/龍與雀斑公主/index.html","7df64d21ef2d36b00d3eced0bbc88cb0"],["/2021/10/19/Review/孤狼不想開後宮/index.html","2981c8d82aba8aebf5bb56b8f588444b"],["/2021/11/13/Review/徹夜之歌/index.html","4208b245e6acb2e686d89f57e7aa7116"],["/2021/11/24/Review/武煉巔峰/index.html","7da7392c94152b96a08fd286ce82eb3f"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e8dfd9ec6d0f937da8eb5d1301457512"],["/2022/01/28/Review/神醫凰后/index.html","410f88ab7308287af81a635550dbbf1f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","81b049736103e18f6884a26d1db866e8"],["/2022/02/13/Review/夏日幽靈/index.html","4e7d65dbc53360ca58c89a3c5663b4f9"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","13bab884e8e4fcc3ccdc41f36927c2eb"],["/2022/02/26/Review/賽馬娘/index.html","306843332973185854e3cf8b4fed8389"],["/2022/02/27/Review/大欺詐師/index.html","d8ee6857e5363bf6b2822099c1630544"],["/2022/02/28/Review/前輩有夠煩/index.html","b873a5ef59c79453c64de5bbfe26c9ee"],["/2022/02/28/Review/碧藍之海/index.html","d2595a6de8f93c36d25fdcd513540b64"],["/2022/03/05/Review/落第騎士英雄譚/index.html","328ba7f40d2178b6c3d20dd598e0541e"],["/2022/03/06/Review/Another/index.html","998ef929adf7136cb508d0a0b9f5dd88"],["/2022/03/06/Review/入間同學入魔了/index.html","d292e0a202cad28b0d5d260ec3ee4a2c"],["/2022/03/18/Review/再見宣言/index.html","577b705ae18f8fa6a8de4c83858bf03c"],["/2022/03/23/Review/生若冬花的妳/index.html","6d3d1db86109fc9901b4f104dbb41de0"],["/2022/03/25/Review/天之弱/index.html","ad28d5b05708a86b4eb373512820efad"],["/2022/03/31/Review/滅了天道之後轉生/index.html","4b72e195472669a8db41af1d06ae22dc"],["/2022/04/30/Review/泡泡/index.html","29b2b492b36bf8d39b25ca3cbd9a6fac"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","435c8fb683957c349a7e2a41b2141c86"],["/2022/06/13/Review/偵探已經，死了/index.html","7ad514e933d72ce333fc21871cc0a426"],["/2022/06/14/Review/黑色子彈/index.html","91294c6dd9e32a65539b829182299432"],["/2022/06/15/Review/黑白來看守所/index.html","be35c7483fe6e315f04ce4c1b52fea80"],["/2022/06/16/Review/虛構推理/index.html","07d301ad7ecfccfc0e318f1239df988e"],["/2022/06/17/Review/戀愛與謊言/index.html","2b0a5ae8905f4d632c1dd622c0bbd49e"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","f9b0742e3b89841d3f8cfdc183c8d700"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","26230bb3d9a8f0d3fcf6cef703c0e59a"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","4ed9e5bc82eb7ad01ff69baf69a277b8"],["/2022/07/03/Review/Hello World/index.html","522b5cb7b9ef1bee951576d7f8dbe201"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","01746c30c5e67dedf7e6d5ce30b6e6c0"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","20f093eaff24e23c1d46f3c9f4b7567c"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","3bc345496a70c7303e71a092b25094f3"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","44d7e785016984545683c03cdcbc0f83"],["/2022/07/16/Japanese/動詞分類/index.html","688944213e8b81cf10f1933ad24b5e8d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","534cf67b03592fea6c969054480b82b2"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","d03839ed33cc7103e4f954b9a2b3ca44"],["/2022/07/17/Japanese/音便/index.html","1a9060664c1c1e92d4647b0032068912"],["/2022/07/18/Japanese/動詞 時態變化/index.html","61fe33765121ece4780af41d4aebfde8"],["/2022/07/19/Japanese/助詞用法整理1/index.html","c2d37c2cf9c85eed9b86acfc7f998505"],["/2022/07/26/Japanese/助詞用法整理2/index.html","2b99bb61e414ca32f8278ebdafa73c3d"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","9dc6bc19e33a42626f92119d280a0734"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","ad5b04bc85b7fc25241305e80dd56fd6"],["/2022/07/30/Japanese/疑問詞/index.html","f32b4de54ced4e6a4ead7c5af38b67a0"],["/2022/07/31/Japanese/助詞用法整理3/index.html","76af29992d2b112b25f696b078ade444"],["/2022/08/02/Japanese/副詞整理/index.html","fea21c5b2b7e0125822f00876d47c0ac"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","7887c7890b41f1a17752c5d113deab06"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","4818816a36431bc62594c5e80ca52a91"],["/2022/11/22/Review/組長女兒與保姆/index.html","3fe2fe32679e7f289efa15a30524e412"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","7e27a01d3090bd4902b533e3e6ed23fc"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","421cdb2bb5fb271c08d6295958589cf5"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","d52d5a94c8710f325312a6de9c8ece29"],["/404.html","c2a08de7afce57950136b28505582c18"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","4d9d8d1fa4afc7bb476b237fc25dcdcc"],["/archives/2019/11/index.html","4692cf7afbba5316f67b68a77d7263d5"],["/archives/2019/12/index.html","33e14cc4eb1170aadf0fc07ff7e3c454"],["/archives/2019/index.html","0eec2f0b26d68565258f58905e3da9f9"],["/archives/2020/01/index.html","736fcf468ebe0aa9b725ddde92dd8720"],["/archives/2020/02/index.html","b5b0a92d3703657379159cc8ab9560f0"],["/archives/2020/03/index.html","436b14921a391f83fa5f11a45e001a81"],["/archives/2020/04/index.html","0f8096322d4b66b18475ed3097cf4b66"],["/archives/2020/05/index.html","dd6c08eac10063700ba6d3578062617f"],["/archives/2020/07/index.html","fd3bd413e8b834ee91f99a94cedf904e"],["/archives/2020/08/index.html","2f4caa10f6f7e188b72ca3b8fa297fbc"],["/archives/2020/09/index.html","cdb2a9c0f335ea7ecd16107daa38550b"],["/archives/2020/10/index.html","7edf49d067108c63237e0a294a9e6ae6"],["/archives/2020/11/index.html","bf76ada0cd35efeb65d91d219bc15457"],["/archives/2020/12/index.html","378e1cc46c32e03a911a53b756ba5d41"],["/archives/2020/index.html","b275361cb95c1750da57a2089158c089"],["/archives/2020/page/2/index.html","2c3a28af10e06884467514eb2a0581a7"],["/archives/2020/page/3/index.html","14fceb3296affd873b8cfbf3d0a82c9f"],["/archives/2021/04/index.html","a4b62ba6c3ead3cdd9d9f2f643b574bf"],["/archives/2021/05/index.html","5aee6c3725dcd8c4fd2de654c7f8ed25"],["/archives/2021/06/index.html","6431f107c0ec40dcb053101acaf2046d"],["/archives/2021/06/page/2/index.html","d482ef88ddb7d940be5b813c6a62804a"],["/archives/2021/07/index.html","c72562253b2556ca814c5575f2e46b5e"],["/archives/2021/07/page/2/index.html","3ddbd5e1a274643dcd2c2feaf0a66953"],["/archives/2021/07/page/3/index.html","714506143027fdf3327d8e5bd5671f94"],["/archives/2021/08/index.html","dec5507a8fad1483cfac63bc602287ca"],["/archives/2021/09/index.html","a27938b1ce8572faa196d5c5e313aed3"],["/archives/2021/10/index.html","e626ee023d1901a2e00712f16ebed350"],["/archives/2021/11/index.html","f58b380c7a8b7c429ccafe79246ba358"],["/archives/2021/12/index.html","2410c1bb00ccac130ac520c794448423"],["/archives/2021/index.html","875d23f4d66b420a96875e4fd0b0312f"],["/archives/2021/page/2/index.html","f686a25712a3514558e28b96ceb7fae6"],["/archives/2021/page/3/index.html","fe29df10f523dfe6f1b4a206c88d28d9"],["/archives/2021/page/4/index.html","62d60d77119deb6de78ee70718511e58"],["/archives/2021/page/5/index.html","cb7e76d3f69f5f2cfed3a2919b8bd395"],["/archives/2021/page/6/index.html","45c63abe12a69148f7944f2dcc3ca5b3"],["/archives/2021/page/7/index.html","1d8f7553305404e3abd26be79eb282bc"],["/archives/2022/01/index.html","1533fc49fdefd059444d71a804552361"],["/archives/2022/02/index.html","3be30dd6db9628ea78dc5a9f99fa3ff8"],["/archives/2022/03/index.html","cf8ed40d834df844a10e1f302f677d3c"],["/archives/2022/04/index.html","5a293e8e6dac4f7c5c330566355aa8bc"],["/archives/2022/05/index.html","965c0c784b998a049d9c2c5bad7661d0"],["/archives/2022/06/index.html","599cc07439740ba2fb2288049e3fe1ab"],["/archives/2022/07/index.html","7bc8246f2943ebb53f80e412fffc9eda"],["/archives/2022/07/page/2/index.html","f146561629373c7fc172254dbf886ef9"],["/archives/2022/08/index.html","9c05f7d992a108a2157e383de2490c8b"],["/archives/2022/11/index.html","e42cd8164d2dffafe0bb21d5bc583768"],["/archives/2022/12/index.html","eaeea683fbf3f04dbe7f8bd17385fcd6"],["/archives/2022/index.html","a75087d0f025ba4a3752298f89d7d217"],["/archives/2022/page/2/index.html","ec0e87419d078871edcd809088797497"],["/archives/2022/page/3/index.html","6ca0476db4f85d0a8f1ca0dec3742de2"],["/archives/2022/page/4/index.html","ca1a1465c113223e380c839c2efbb63a"],["/archives/2022/page/5/index.html","d9847352d4e5d0358e2dd380f89ea5ed"],["/archives/index.html","630b2ff3e510e874dbebc6002e037e74"],["/archives/page/10/index.html","bd93fce07aeb63559cb1eb153cafbb3d"],["/archives/page/11/index.html","c3d93f272accbc43e665d2ac18a18d60"],["/archives/page/12/index.html","fb72b2059b01fa2fead96d3362339b39"],["/archives/page/13/index.html","f1514eee8479e5aeb8fea71e65b4175c"],["/archives/page/14/index.html","67d64d877f2afe994538a17cdb1da5c0"],["/archives/page/15/index.html","e9f7c9b3089d732640b8bdb47103a7c5"],["/archives/page/2/index.html","c1c1962dce544c73a658617fa8f4f52c"],["/archives/page/3/index.html","874c7922c80896d1e9eddc6b90ab8864"],["/archives/page/4/index.html","b71ddc03c2b3732fbac3c42f66289405"],["/archives/page/5/index.html","976e1510adfddd3b7364cb473977b960"],["/archives/page/6/index.html","3f8df9a4d7192adaaa71ef8888f59d34"],["/archives/page/7/index.html","5e390351c6c84da6365bb7dfec679e46"],["/archives/page/8/index.html","7181a38f4bb94f607b063cf35e0ef0cc"],["/archives/page/9/index.html","ef1bbf9c216457b51d96f2c1aa32737c"],["/categories/Programming/index.html","ff04bcc2e7646bef7b0d904dd9ae367d"],["/categories/Review/index.html","a6e872ad600bd9c23d2fe30efb4c8524"],["/categories/Review/page/10/index.html","b7a2badf9ac78ad726872c05675d5f4a"],["/categories/Review/page/11/index.html","9576efbcdd6b34a50e8dcf8c1dfdf191"],["/categories/Review/page/12/index.html","ec1e5701b0b0a30a23278832407e547a"],["/categories/Review/page/13/index.html","f2681be01501429155a7b669ae9140b3"],["/categories/Review/page/2/index.html","dfadda101996297c5701f095eafdaeec"],["/categories/Review/page/3/index.html","ce18a9c9bdba5e8c83e090679d5ffdc9"],["/categories/Review/page/4/index.html","6cd0e9621060ec533566c147872b201a"],["/categories/Review/page/5/index.html","fad12df3a8dbfa09296e7df28db64d72"],["/categories/Review/page/6/index.html","f446697ba4ad7eeee56ecae8ad9748b7"],["/categories/Review/page/7/index.html","c423f624eebe5a09b4f4b3bc80b439f5"],["/categories/Review/page/8/index.html","0bd46a741854f36f03c966644e0f37fb"],["/categories/Review/page/9/index.html","dc910c8b3c6473993b233c6cb1d1dfbb"],["/categories/index.html","e38e41f4c1e020d1317c9860640659a4"],["/categories/日本語/index.html","1a3b147a20e8b75c165e689e8fcb6735"],["/categories/日本語/page/2/index.html","c3b568a4be7d48aa2e65bb04e89b9954"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c658b013ac1f1d4c20c152eb6ee51c9e"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c55dbb6ab02539a672a20d356dce3c38"],["/page/10/index.html","54204261543a9859a180ba2f2c0f9eba"],["/page/11/index.html","b2fb2b765ccd34ed70bef0216b63f569"],["/page/12/index.html","7ed2f3affa959cc4ec2873ad7d92dd72"],["/page/13/index.html","9387da20678a557daf737f0182b00176"],["/page/14/index.html","7f4ff1c8c89d045f743ea0a6c4f68a0c"],["/page/15/index.html","0e030de5f3f46239782e035f83238101"],["/page/2/index.html","dc05a2999a6b25a778d278c33b86cec2"],["/page/3/index.html","789aefea297a56b92cf8e0ec0bddc2a2"],["/page/4/index.html","b93633036f2504580a941728601cec13"],["/page/5/index.html","c3be37186721d517cd1001cc0126a8f4"],["/page/6/index.html","e7f1af1e4a7a5a08b4fe29a604d4e339"],["/page/7/index.html","50d4a9a4b84ae346ed0a6544b93a0b74"],["/page/8/index.html","bf699043ee1da44228002532e1559bc8"],["/page/9/index.html","c8db53b327d704341569577a27ae7830"],["/sw-register.js","df7ae86b544e45035c6acd2c0a5dbfb3"],["/tags/10分作品/index.html","22e537c3e39154af3708a24298327b80"],["/tags/3分作品/index.html","701afc5f9064d56ef641f160ed69d57d"],["/tags/4分作品/index.html","34ef257f47390c4fdee7e6de604f40b7"],["/tags/5分作品/index.html","222141b0b637267280c434f60de08625"],["/tags/6分作品/index.html","496f1fd0ec5cb3e7a347ba586949a04b"],["/tags/6分作品/page/2/index.html","dcbf7b00f618dbf4c9b3c2ae0d4d2168"],["/tags/6分作品/page/3/index.html","f7963a816e76ab229996241d85819be3"],["/tags/7分作品/index.html","a2d5e215101aa855df37ce91029100c0"],["/tags/7分作品/page/2/index.html","060ad48dd16be3f13f5346081277bede"],["/tags/7分作品/page/3/index.html","b53084c2d8011617ebd094ec5643e9f2"],["/tags/7分作品/page/4/index.html","2e3ea1bf5c8dd9babea10b1f2a8ad5dc"],["/tags/8分作品/index.html","e15f84f686957a971a94b93afd5119ad"],["/tags/8分作品/page/2/index.html","71e615bbb95bc67e425d494d14f99739"],["/tags/8分作品/page/3/index.html","da1145eabfc4c1444f1eb97fca5e2246"],["/tags/8分作品/page/4/index.html","cbafc8659137bb89a14bda4df354d534"],["/tags/8分作品/page/5/index.html","89c802dc6d6d71b6fc9280c98187afcb"],["/tags/9分作品/index.html","d94bd08034b90d6e5fd7d811c425ad13"],["/tags/N5難度/index.html","77de86253df0c7dba8c9471cdb41a9ef"],["/tags/N5難度/page/2/index.html","212d7bd4bb4c6153746fc41485741f5f"],["/tags/index.html","0a01dd1982e7494d088085c62a0249bb"],["/tags/アボガド６/index.html","d61c00f26c47e63344125f84f7b58989"],["/tags/三秋縋/index.html","ec6f23f5034e7cde8a3adab81e5a41dc"],["/tags/中國武俠/index.html","5956a6692a938ee8d085e59640b83434"],["/tags/中國言情/index.html","a3f3520b182d4aab185092f16b1f4b94"],["/tags/二宮敦人/index.html","fd1ba8ca8297912c8911a6a2de20a285"],["/tags/人性/index.html","7f920b34d01df983210fdca8d2d09327"],["/tags/人際/index.html","ffdc3c9c31b8d3f689666ced85461989"],["/tags/住野夜/index.html","5eb610e40d40b929b0b76d2115c5d71f"],["/tags/佐野徹夜/index.html","46755aea8f75d59f0a934dd1b674aa2e"],["/tags/努力/index.html","0d7e8cc1185030b82d2a1609054c8a7f"],["/tags/動畫/index.html","d16e20893f12f1cf08075d513a6d37f4"],["/tags/動畫/page/2/index.html","a5f6ce58bef692e65c53d7274867d5b1"],["/tags/動畫/page/3/index.html","2504b65b4da3315371a17645dbb7bd27"],["/tags/動畫/page/4/index.html","cad651c60a86aad01d234f49439fab9a"],["/tags/原諒/index.html","45399a355b302c4bd19e1a2f73d55e0d"],["/tags/反烏托邦/index.html","9aa644c6d081662f33149242d0f4a95f"],["/tags/啞鳴/index.html","d2819e489c736edb2f9234e9c9d70a9d"],["/tags/喜劇/index.html","52608e0abb8ff7c22b9fcb66be65dff2"],["/tags/夢想/index.html","508ccb776b072c8381fc1389eed3a95b"],["/tags/天澤夏月/index.html","91611091e24485e6c55e078a2a8d068e"],["/tags/學習/index.html","40697535e1103d6ceb48e54fede957b3"],["/tags/學習/page/2/index.html","21ab3eed0c5c6864d46aa8d07e266ae0"],["/tags/宮崎駿/index.html","49a73b83ebe05bd5eeeaac1d0202dec4"],["/tags/小說/index.html","aa4db359ffbe4a2322fd87273fd479f8"],["/tags/小說/page/2/index.html","cb14859b33bb16e9c73e77f81ebe9afd"],["/tags/小說/page/3/index.html","88ff80503bb6b022034aa3897e299f5d"],["/tags/小說/page/4/index.html","6320fe2f82f2c034907f4a640e975dff"],["/tags/小說/page/5/index.html","8086fd2d382ab4227bbc90cde28ef7fe"],["/tags/小說/page/6/index.html","76c89243a59db47c812b305167ac012f"],["/tags/小說/page/7/index.html","cfb41342702d86c989f82ae75f1854b4"],["/tags/平淡生活/index.html","7351e6c58c6c76f66594789db498b2bc"],["/tags/幸福/index.html","ed4c9bad1d3323328fb643cf730415bd"],["/tags/志茂文彥/index.html","7955a1b1a8055d776e633af6bd17b566"],["/tags/愛情/index.html","6f68323123de04d2426d4300b1050dad"],["/tags/愛情/page/2/index.html","63f0afe66ac4f743fc809a6fd255ad70"],["/tags/愛情/page/3/index.html","2d4d82732d935f91f4fc513822ffefb6"],["/tags/感動/index.html","b49140a2a2fee6090e4de9d7b763bd7e"],["/tags/懸疑/index.html","44a13c9496576f152aa815a7a4f0c21b"],["/tags/懸疑科幻/index.html","fa5ee5af16b9a42ba162ff7fb2fbb73f"],["/tags/戀愛/index.html","245853264bcc15d70ce9ab3e29a6459d"],["/tags/成長/index.html","c0f090e8c2d3650595896731beb0048c"],["/tags/成長/page/2/index.html","2770c9b389fba9a8c2a1166716de6ada"],["/tags/戰爭/index.html","f4fe6b9463885918d81223e15a8866fd"],["/tags/推理/index.html","1e1d2816ecce6b3ab09400701b55eb64"],["/tags/搞笑/index.html","05004fdd0a132c1e1c41c4beeff63674"],["/tags/救贖/index.html","2bc5f7ad5536ac4192e61f9b5dc94967"],["/tags/斜線堂有紀/index.html","d75e2c0f969aaf15918bc31bfc9e8296"],["/tags/日常/index.html","bc5622cc06d654198a33dc1a34a6df73"],["/tags/末日/index.html","7b9aacfbb280dc4cbabb93731b27a03b"],["/tags/校園/index.html","161d1746fe44fc0d9a6a45e2475709da"],["/tags/武俠/index.html","8ba09dc6912e00bde636ed60d3fab780"],["/tags/武俠言情/index.html","11e3c7228e380549451fd43b7f4b7a1a"],["/tags/漫畫/index.html","0029853e1f58ba0693ecf0da50b89a3a"],["/tags/生命/index.html","7589d1dfad0da34d4a718b7e9d712e2f"],["/tags/生命/page/2/index.html","180058ed161561c10a70a9574840df54"],["/tags/短篇/index.html","8e9cfd2f713c9af70c0f31424030e35b"],["/tags/社會/index.html","06373f278c559c31e18aeb3273918c3e"],["/tags/科幻/index.html","d7efa46b95123236da4aff57035a0c29"],["/tags/童話/index.html","43d11fa9b81883cd436b6dfaa800c0f8"],["/tags/競爭/index.html","827fa90b8f14cf65b591a7a597f927f4"],["/tags/自我/index.html","07dfc815cb4abc49286dca3dc927a14d"],["/tags/自我認知/index.html","a1730117fba903f0bbeaca63dfbc4c1d"],["/tags/葦舟ナツ/index.html","e7ae9fc1307abb4a3681ee63718afd75"],["/tags/藤萬留/index.html","4d0f794b52cadebf73301c9299e8009c"],["/tags/親情/index.html","bad5d65d2dec29bd6b4cc16b2b2d7942"],["/tags/雜項/index.html","5c5c2b0759e537c23da151516e58a2ed"],["/tags/電影/index.html","738650086ced081c266b9cc642a116af"],["/tags/電影/page/2/index.html","1a05d997d47501525dab8f38d17a996c"],["/tags/霸凌/index.html","97251e76c651b1fcb593118ff04c3cea"],["/tags/青春/index.html","40f53f64311ecd156974414c708122d5"]];
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
