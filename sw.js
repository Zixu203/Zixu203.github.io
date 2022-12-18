/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","0d21b65e1ad47d9ce49e19f5da7f9c66"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","511193c45db3b7d54e62cd77c7b1a949"],["/2019/12/25/Review/無法計算的青春/index.html","edb68a2a7ae869063e19c0ad69762392"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","d76e423a8cf22c2a12cb517ff225dea5"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","f47f855d7aa646d2219675e89220ecd3"],["/2020/01/19/Review/下雨天，不上學/index.html","82a6dfddf7f3795a3a863ad91e8d6fc6"],["/2020/01/26/Review/三日間的幸福/index.html","1c825552cd92ec49e07eee6343e725b4"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a170d9dcde8b9e698ab37ea97a5981a4"],["/2020/02/09/Review/青春期超感應/index.html","c8c10fdf80666e4db59d11d2d12ad9a1"],["/2020/02/15/Review/又做了，相同的夢/index.html","d708a97d6ab54fdd48ab27d7208c8792"],["/2020/02/22/Review/回憶當鋪/index.html","dfedfb14d1c24e039c09e93316bc117a"],["/2020/03/22/Review/不適合自殺的季節/index.html","a42685091a7b00f126495bf4ebf765e4"],["/2020/04/26/Review/我們都無法成為大人/index.html","3837d2a7cc6cf8b32358f587168c7fad"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","1038ae36a3fa5365dba26dd1d8bb4969"],["/2020/05/17/Review/人間失格/index.html","4e972cec4c9e38636493cf64e78689b3"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","a89fe0c4d0016b2355e8b26d5f8c365d"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","ff31d5ee82dce7c6b7d678d3e722871b"],["/2020/08/01/Review/銀河鐵道之夜/index.html","0f0e690a82a1027d2974f0a5c55f5926"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","c687292468223897063d1dda42b4eebc"],["/2020/08/16/Review/15歲的恐怖分子/index.html","aaef6d52ef16d02b1f35b8825776360c"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","f9147e95e923f2e0c6401164abf14c38"],["/2020/09/13/Review/羅生門/index.html","5e2ce58cc8578d45c7cdcbbd315cdb4a"],["/2020/09/20/Review/闇夜的怪物/index.html","2de5f98ae221a1e2fd10132e72df8737"],["/2020/09/27/Review/14歲，明日的課表/index.html","2437722162bbf3cdb26b2e6baf7bb208"],["/2020/10/04/Review/致十年後的你/index.html","3030d0051829aec3bf926c35f2e2c795"],["/2020/11/08/Review/滅絕之園/index.html","3a0972a3eb5d8dd843783e5e4fa19e2a"],["/2020/11/15/Review/將愛拒於門外/index.html","e067e2e45800d0eeec5962b781f9d548"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","6155f32fe6b0b4175bfd7abed13bae71"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","454b00e7c3c884089c910037428ffdeb"],["/2021/04/22/Review/道印/index.html","ec6f454d096ae32e6fab0d8709b66705"],["/2021/05/03/Review/戀入膏肓/index.html","debe21f633d54ae32ac59bf3c85708a3"],["/2021/05/10/Review/Dice/index.html","ed115a43cbdea0a79daa0ccec6b64867"],["/2021/05/15/Review/魔女之旅/index.html","6ab74757a70e126cd9308bf3814e1dab"],["/2021/05/28/Review/戀愛寄生蟲/index.html","ca26ecdda87f523c28cc5e42c0455b2c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","fab4969b8e2e72e0a1b1592a1e916177"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3a31568f5fc2185bbba9c968b5830d11"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","845c07a93c4a779919a9d3212deb5381"],["/2021/06/05/Review/流浪的月/index.html","260ea999b2f0c310903f3a15ba4cb3b1"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","95ff8d4dd43459220c1de5e9f2790919"],["/2021/06/13/Review/第一人稱單數/index.html","4fa5b9c0bfce17a29209d6a0c11bc7fe"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","538aeec4ded547ebc38b5ae18188d6bd"],["/2021/06/16/Review/願你幸福/index.html","90647fcc9460bcd03bea2b496f8fabe5"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","219ea1c42cf64c1c8c85aa6d7361d636"],["/2021/06/21/Review/神隱少女/index.html","89591ce2005b4d26966ab5a2725c3507"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","45631c23542053a01b4d2ddd172de18d"],["/2021/06/23/Review/天空之城/index.html","907494dbb1d76c7f25820d97136dd95d"],["/2021/06/24/Review/魔女宅急便/index.html","c3850a076fdc7cd331946f992cb97c17"],["/2021/06/25/Review/借物少女艾利緹/index.html","3d097b9727babc75afc668690865063b"],["/2021/06/26/Review/魔法公主/index.html","74b8208cccd042b95430b39d9723686a"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","2bca7956bae32268dee6f839a8ce38e1"],["/2021/07/04/Review/飛雪與劍/index.html","69bab9962f4cfd1806c9838e45346f13"],["/2021/07/09/Review/地球防衛少年/index.html","2561c2d2a8d090f485a15e76bc6d9d9e"],["/2021/07/12/Review/Angel Beats!/index.html","fc1d34e3ab7d0928997364b8d02e9544"],["/2021/07/13/Review/Clannad/index.html","26a029a87bb458aa5f9c00607f17e15b"],["/2021/07/15/Review/AIR/index.html","73860132acdaea0e11f6b6ce89072b00"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","8152ee03879d03b6f9e91eeedf28a2b4"],["/2021/07/15/Review/螢火之森/index.html","3d7f1e31e2a33c37995681dde4e19a6d"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","da818f6a78b830f8bafab88bf7424fe9"],["/2021/07/17/Review/奇蛋物語/index.html","4df3147891ec7109ce0a5852a4870d20"],["/2021/07/18/Review/Vivy/index.html","9885c6d740aa5e59fd96bae5d889a046"],["/2021/07/18/Review/請妳消失吧/index.html","b798efa14c42c133a8fe2a4b56aaf103"],["/2021/07/19/Review/漣漪的夜晚/index.html","92ba06d96a7a04cafeadc190b070cc76"],["/2021/07/20/Review/月色真美/index.html","5993489f1ab2b22d29d8402100614e80"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","16d4a69e8b19e62bb47793c10d378eb3"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","7786eb7c5f8ca5f8df6648e070045ce5"],["/2021/07/22/Review/罪惡王冠/index.html","75690dafa3d3c1aafca52963e25814f9"],["/2021/07/23/Review/弱角友崎同學/index.html","f52c1fb1ca2001906bf652fbcbed9ad7"],["/2021/07/23/Review/惡之教程/index.html","d094eb4fe010d684fbf24ce339418abb"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","941efbe15a9df62172a125cf1997e71e"],["/2021/07/25/Review/魔王勇者/index.html","d9ed6854bc42e36d2a61f9bce57c612b"],["/2021/07/27/Review/一年A班的怪物/index.html","afd8fd249163ffefb06b6941ea7ce03e"],["/2021/07/27/Review/奇巧計程車/index.html","5c2a14cecafce90ab06e929dcad71eac"],["/2021/07/27/Review/專情的碧池學妹/index.html","5e50f8b18a6e7974d70c30544afae29a"],["/2021/07/29/Review/只有我不存在的城市/index.html","79a103b108eeee0b228415853f688c93"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","c2b879afe854952eea1abc25c9711ebb"],["/2021/07/30/Review/可塑性記憶/index.html","28e3231032920bebcbd9ebdbdb0362b3"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","7fada8a4b519350b8ea7b131a91abb71"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","389d94809f6f98099a73ebea1f8bd61f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","d0349a44f361703ecf652484f27b18d3"],["/2021/08/25/Review/清戀/index.html","9e1b1552d17f28a4e4e6787418f5b494"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","9d14548e968027dec78665f8e629d3d5"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","2ba9203e82735fbc1c7a8949476b2abb"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f3a006f8867e7dad1b0942a679d9c218"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","b4aeba4c4d0746e8ffef697853892d77"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","806ab5f417b3f95e053fb559533c582b"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","d01f33b364497577362b9f13873b3d42"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3908a54d8db58fa0cb37b9f2937cb944"],["/2021/10/16/Review/龍與雀斑公主/index.html","8f772813a3a416c3dba8f86de475ee45"],["/2021/10/19/Review/孤狼不想開後宮/index.html","ae1b399b59e2d9310af60df76f6b8c3d"],["/2021/11/13/Review/徹夜之歌/index.html","8e92e4c9e44d78079e18e364e8f940f8"],["/2021/11/24/Review/武煉巔峰/index.html","d9c999fc673b4c6fb354b9ffaf629054"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e231c4c7f3b608d70c85a83753372d63"],["/2022/01/28/Review/神醫凰后/index.html","4e3c824f77bafed47b79a6d5e59cb97b"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","7e162258581dee2d08d87db4bc5bc575"],["/2022/02/13/Review/夏日幽靈/index.html","01d92dcfebe16eaca34c9831afe9045c"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","2f3fac3e82922e528a28b0a5be5016aa"],["/2022/02/26/Review/賽馬娘/index.html","affbc6ed66723bf9433eacf1f6ac8b48"],["/2022/02/27/Review/大欺詐師/index.html","d6a78bdc9d757c5903937556958653df"],["/2022/02/28/Review/前輩有夠煩/index.html","ecc6d8b301eaad96009779768806f890"],["/2022/02/28/Review/碧藍之海/index.html","f734c4d5fc05797a06ae51501a426216"],["/2022/03/05/Review/落第騎士英雄譚/index.html","d4ed05ae77b60c1ad4754cdddc00cedf"],["/2022/03/06/Review/Another/index.html","e8395024a5140bb1f7f7d1c45bf9704c"],["/2022/03/06/Review/入間同學入魔了/index.html","50f8651390ddc2def6d6c0f16f7a940c"],["/2022/03/18/Review/再見宣言/index.html","d8c3859a8b06effaea203ae674f2089e"],["/2022/03/23/Review/生若冬花的妳/index.html","7caa49c0cdc84081a49620804b115421"],["/2022/03/25/Review/天之弱/index.html","63e8f4580ed803ec2135968c492a4d83"],["/2022/03/31/Review/滅了天道之後轉生/index.html","fc7588d3b5c09d45309947e79179c683"],["/2022/04/30/Review/泡泡/index.html","4243d602646092f8024bff0075ddffb1"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","7eec82c201e4abc1c21d964a1c363c08"],["/2022/06/13/Review/偵探已經，死了/index.html","88f80b3208545b36f91fc012f5941ff7"],["/2022/06/14/Review/黑色子彈/index.html","bd2d5dd4d6a1f66514b30790f99c1485"],["/2022/06/15/Review/黑白來看守所/index.html","e1e709a3764b1e2b52d333147f68cea9"],["/2022/06/16/Review/虛構推理/index.html","b47a5c13a72bb9c526c95445b04c9f03"],["/2022/06/17/Review/戀愛與謊言/index.html","108616df1e906f5ba0e97cf845cf90ac"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","77810f515ae7b7c07a8d902514ebdf9b"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","bfef8261995361d87afb654681123211"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","b1a6767ab7ca75526555c02fe74e631c"],["/2022/07/03/Review/Hello World/index.html","f545aaf07d9f58e2acbc80b8c7122b80"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","f29990aafba4409a592bd15c47d846d9"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","79026b25d9ae41dc23b77bc032a72aa1"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","598312cdcf6075a011aeffa3926e1f50"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","e92172dd7359ef0325f36236789235de"],["/2022/07/16/Japanese/動詞分類/index.html","9f18a601a5e38179146f68ac288147dd"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","671ede7ca873e22074b157205c5b9c68"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","7ddaed7fb857a1cacd43eb7f6b38282e"],["/2022/07/17/Japanese/音便/index.html","f5018d825dfbe9df5f2ba9e7d99eba8b"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d350131f70f35cff028fefbb2cc2914c"],["/2022/07/19/Japanese/助詞用法整理1/index.html","b56d38b7a281c1362e60bdd2dcaf9351"],["/2022/07/26/Japanese/助詞用法整理2/index.html","83a96300a59d3bcb3789401d6b3b4966"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","44d906084ada364917d83a81fb040626"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","d938a0f87932306f9e1a397ec1333699"],["/2022/07/30/Japanese/疑問詞/index.html","32896fbc62bf93062eaccd9539d80e7f"],["/2022/07/31/Japanese/助詞用法整理3/index.html","6936a84071b33d4bb824316ab4b36f98"],["/2022/08/02/Japanese/副詞整理/index.html","967908ffcebe15c6c3abc257ffd09578"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","5354220b8d0fad8611ecc5550d92d701"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","d1870c32453ae2afbe011dc307293ca8"],["/2022/11/22/Review/組長女兒與保姆/index.html","bc35726b91a9beb060af65e314e077dd"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","fe3abbc6217b6643cb1ffd55214489d6"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","ab02ce5b133546be173dca1f827f00c0"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","df35fde5295c51f27fe3b31ad4950e5d"],["/404.html","b4d2cb92e9d783eda26f66a9a3a12e17"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","1f7928398e2b635960ce75ecbf301eb4"],["/archives/2019/11/index.html","c27f320f2d0411075f7b9b9d6ac00478"],["/archives/2019/12/index.html","07e2f659d2f5e6c9c1e1d61580c0032f"],["/archives/2019/index.html","cf6df40db495b91a641be6b3b6348ae4"],["/archives/2020/01/index.html","ed287839009daa479e6180bcb43ab087"],["/archives/2020/02/index.html","c5388755f7fb342b60a346dc0355ea03"],["/archives/2020/03/index.html","607cb80159461b010b046034cf3fee09"],["/archives/2020/04/index.html","7a7151e935cb6ff053c30db42598f65b"],["/archives/2020/05/index.html","b53b667675263019164b9bbc977f85ca"],["/archives/2020/07/index.html","e0be5f3fe21d02d879c0ad98b9355625"],["/archives/2020/08/index.html","e9b1e42b57cf2eeeba47af94ed4b5665"],["/archives/2020/09/index.html","1a7b7dcddfe27dc4f3878fd7ebfdab5b"],["/archives/2020/10/index.html","e7db2c42925000a0ce682da7caec6faa"],["/archives/2020/11/index.html","edef3d01cbf17068bcbebee24e295a7d"],["/archives/2020/12/index.html","7f08a27d8f3d4f3a3a5882fc573e3123"],["/archives/2020/index.html","cb1e1c51449104144e6c40840a8cb90d"],["/archives/2020/page/2/index.html","e9433deec0e4f3fbe58d787d9fcb397c"],["/archives/2020/page/3/index.html","c66dce4c0c1f3d2975b579511b60caa7"],["/archives/2021/04/index.html","e32923e5e49441caf243ed212fce17d2"],["/archives/2021/05/index.html","e3730f9390ec2404785a51d61ffb3e98"],["/archives/2021/06/index.html","fdbd6bb85a00fc856eed04a2855bc41f"],["/archives/2021/06/page/2/index.html","a315f6d7e38a80e02aad6e8541732b24"],["/archives/2021/07/index.html","7e54fea5ee04a011ad4389237f08db2f"],["/archives/2021/07/page/2/index.html","6fc9d816155c24f2162f30072169863c"],["/archives/2021/07/page/3/index.html","2b4b1b42e6aba496cca73197333c1463"],["/archives/2021/08/index.html","983168f434ea2410c2c8ee560526e653"],["/archives/2021/09/index.html","2555587d86f400623d7ac022499c2b8d"],["/archives/2021/10/index.html","a452ab7516ba938a8e46ae6314b56acf"],["/archives/2021/11/index.html","0f862f95cd29baf3c04428b2f90298b4"],["/archives/2021/12/index.html","328f6bb91a396a95686ae74187cf84b2"],["/archives/2021/index.html","60519af7c9e5371314e5591906cbb945"],["/archives/2021/page/2/index.html","f98afd2acb1fd576d067950afdd1e4c5"],["/archives/2021/page/3/index.html","fc0a0bc9614bff407848d734043664e8"],["/archives/2021/page/4/index.html","5986f7642855ddec3dadf2427fe78b81"],["/archives/2021/page/5/index.html","8235c24f7194e8ea7c1162a7295a3194"],["/archives/2021/page/6/index.html","f0e185c81df589d2a4a1d678f6faaada"],["/archives/2021/page/7/index.html","45a927681cfa951e6c8fcd8a0886ab66"],["/archives/2022/01/index.html","6f690392be1cc364947739505d18fe94"],["/archives/2022/02/index.html","366c47ab43c2adbe356e1a02ac0f29a4"],["/archives/2022/03/index.html","a7452ab506d9b7b0f8a71019a89f5f75"],["/archives/2022/04/index.html","482b0f341e886b5c413e173c29919208"],["/archives/2022/05/index.html","fcb1b16146a91c079e7bf62b5b179377"],["/archives/2022/06/index.html","db43447c2ea5e7ddef0130da9e1400fd"],["/archives/2022/07/index.html","9685dd09c7ed85f68ea53dece7ddb765"],["/archives/2022/07/page/2/index.html","3c7ddc3b2844edeadb9c3156556d584a"],["/archives/2022/08/index.html","29ac8b6f582ea4d30da84eb7dfd626df"],["/archives/2022/11/index.html","3c1e20ab93372c3d537016a04064ddae"],["/archives/2022/12/index.html","df5d53f71c3f568ac970324dea8a23cf"],["/archives/2022/index.html","6f424365517c795cad876c31bb85d908"],["/archives/2022/page/2/index.html","3d101507fc3eb192700588c396d2bb13"],["/archives/2022/page/3/index.html","79b487f38130385d96cadce9010cb3b5"],["/archives/2022/page/4/index.html","46561ab6c087e83964446ef7fddbd746"],["/archives/2022/page/5/index.html","4872000516ad9241696ff23c3e5f0ab8"],["/archives/index.html","3d79af9da3ae5a9c0ddf459d8d7b3095"],["/archives/page/10/index.html","356e708c91fedb7d19f013bbfcf332b8"],["/archives/page/11/index.html","ce54b5c9028983b863188e676b494637"],["/archives/page/12/index.html","7158988899ac6cb1638eeab153c8badb"],["/archives/page/13/index.html","0b25040dcada9f82942e138a72021790"],["/archives/page/14/index.html","860cabb490c2cb05e8cb1243e49d6d39"],["/archives/page/15/index.html","eb7070a21c88f26279acdce6a34c91a3"],["/archives/page/2/index.html","fe7b0b1c268e0636bb145eccad900ecb"],["/archives/page/3/index.html","02080e0f17546791a314cefde6409881"],["/archives/page/4/index.html","12d5e3463aac210340d145913cd2afd6"],["/archives/page/5/index.html","05ecbb498962cc250702655e6fab358b"],["/archives/page/6/index.html","3cb5941995345f172d4f6ea08ca14d47"],["/archives/page/7/index.html","ffabcca4551cdbc05e84ebfd78730d53"],["/archives/page/8/index.html","837c9416badfa1fa59bc5d2a51bdad01"],["/archives/page/9/index.html","113a9532efc27653f4a6240306ec9c33"],["/categories/Programming/index.html","90fd02e758e17b2ca95df79cf9e6498f"],["/categories/Review/index.html","16b2467281229d8b9023372cd94f0b41"],["/categories/Review/page/10/index.html","5fb8855f528c62572664acfcdb1fcd93"],["/categories/Review/page/11/index.html","863787c2aba7c53e0cad1ee3f6be7ad2"],["/categories/Review/page/12/index.html","5a2904c4bbcae65deda833752992924e"],["/categories/Review/page/13/index.html","7540312ce6ff1c415d34be7c76a44820"],["/categories/Review/page/2/index.html","192ffe275aa45f49b14909da3585a0e4"],["/categories/Review/page/3/index.html","750d68be862e4a3d5399a192347765d5"],["/categories/Review/page/4/index.html","24967cbc8cc5a492ad2fc8dac5cf1660"],["/categories/Review/page/5/index.html","979bb5581033448119829e573cc9369b"],["/categories/Review/page/6/index.html","91d815d285ce97a42c617702bd54debc"],["/categories/Review/page/7/index.html","874951d4d7f8d4ef557230481910b75f"],["/categories/Review/page/8/index.html","55627a6ff4b790a0374420a8c301dbc2"],["/categories/Review/page/9/index.html","4ab2e55c6f4c50020c4773cca6d609e5"],["/categories/index.html","837016270a9665ae100959b331353b8c"],["/categories/日本語/index.html","315da691cc8f117a8e13145e28f65aee"],["/categories/日本語/page/2/index.html","476e4d58ba3bed4d45197661def9b9c9"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fc6b2e3e1a45144e76785b54a4d25212"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1a60fad78dc819b2d74d12339441bd1b"],["/page/10/index.html","53cf0e89780dfc1687a0eb2aed2d133d"],["/page/11/index.html","5f53d3c57e55775304790144d33f77cf"],["/page/12/index.html","f1ab3b09dd1b5d984876f994e55e66de"],["/page/13/index.html","9b2a4659cd4b3450b6e8fb1174f036a5"],["/page/14/index.html","7696d7db14754ac98d3fa0be98b1f2bf"],["/page/15/index.html","a5c43ddcd140efe76abdae182a04585b"],["/page/2/index.html","882471c2b0f044f99fcc58ad8a7259a7"],["/page/3/index.html","b845a673bc9f9a94352a5f9231ba0c35"],["/page/4/index.html","e8cba51e15f53b5abe439a0234c24257"],["/page/5/index.html","51552bff2b149b97741ffeffe8a587e6"],["/page/6/index.html","afa08c3c068e78a5a8b0c4208edac9ef"],["/page/7/index.html","a7167439e245a1952bcfd4257b26ee0c"],["/page/8/index.html","8cd32fe179eb683edce6a5d9270649aa"],["/page/9/index.html","3777fbdd3827e2da5d65342b4fc029aa"],["/sw-register.js","6fe748a132af13615679a2374f00d430"],["/tags/10分作品/index.html","42eeeb656440be072e8de25016f423a2"],["/tags/3分作品/index.html","f6a594dff89d983ee7b673442737469b"],["/tags/4分作品/index.html","6afc3717cceead262dcd2f3f0720cc42"],["/tags/5分作品/index.html","223562cfbee3d9861fcfa75227c753d4"],["/tags/6分作品/index.html","3b0785d82519b1b8b2105d30145012d0"],["/tags/6分作品/page/2/index.html","b3936fbafc8115e265d1f562baf0a9e8"],["/tags/6分作品/page/3/index.html","d6a1d4a0a96611a82a78cd16f8b3844c"],["/tags/7分作品/index.html","cca9ecebb4d51908bcaaefd26cf3ff65"],["/tags/7分作品/page/2/index.html","6772ee37582c2b4ab356e40693fa8d0c"],["/tags/7分作品/page/3/index.html","43f5bbf9e6ca49e1efd5e043e8143224"],["/tags/7分作品/page/4/index.html","1cf1310bea588317dcfe8bf0f19ec649"],["/tags/8分作品/index.html","77051f3daaf8e3588013181d33212d02"],["/tags/8分作品/page/2/index.html","8d3b1f6e5069747e097db5e1b15be0b7"],["/tags/8分作品/page/3/index.html","bea9494c016f2ecb6c893cc9ab80e2f7"],["/tags/8分作品/page/4/index.html","f59cb0e29835b8a042dbdecc94a79d8b"],["/tags/8分作品/page/5/index.html","821b2c26a82a57ac846fd9f0988f9acd"],["/tags/9分作品/index.html","338d342dc45227bec92ed8e6ecf0026d"],["/tags/N5難度/index.html","4893db3fd9c589357aef1e712355a430"],["/tags/N5難度/page/2/index.html","519269ec69853a3f856fc3ff2e0cfcb0"],["/tags/index.html","920a1cd0b33df64896788e754d715813"],["/tags/アボガド６/index.html","d7023c3e90d964098aa4c41141542a78"],["/tags/三秋縋/index.html","7dfa315d0e525ea86875d97c7068f70f"],["/tags/中國武俠/index.html","25590d2f37b33336a34f746fe6f628fb"],["/tags/中國言情/index.html","d83927d4bccdaaf112fac0f5297ea91c"],["/tags/二宮敦人/index.html","44aa4cb99e0349251930113abcfe6339"],["/tags/人性/index.html","938220f5d47c90245d474215806a9170"],["/tags/人際/index.html","bde3811e797304271b56e1f876542635"],["/tags/住野夜/index.html","3be5fbf5c85cf4a71a7f0b75a38b044d"],["/tags/佐野徹夜/index.html","c661993b19f7b3bf198c3dcb2f89d2e6"],["/tags/努力/index.html","7607e5263b8c54d8016ad73b5b5511d0"],["/tags/動畫/index.html","8936988b10c2a25bea2bd17253cc4a2f"],["/tags/動畫/page/2/index.html","353bc50ded39872c7e336cf1dab119ee"],["/tags/動畫/page/3/index.html","9d7f71f8754d0b6ea401734415fa72a2"],["/tags/動畫/page/4/index.html","7dd17f8f25fbcba1da7785f9c700a618"],["/tags/原諒/index.html","fa803fdbf2b6a0c35386f68f79ea44b2"],["/tags/反烏托邦/index.html","7b19e7f3670b748cd6b2812f78016c21"],["/tags/啞鳴/index.html","51f4add28f098977c15eacd77c7997a7"],["/tags/喜劇/index.html","5d79d4b547f6da834860efbb625bc758"],["/tags/夢想/index.html","274e6b9da60469997ea884e7e55fd815"],["/tags/天澤夏月/index.html","1eaaccc08b17d185d102cf1fb25c0e05"],["/tags/學習/index.html","87b4aed34d46b2a6c7ffef61fc5ae734"],["/tags/學習/page/2/index.html","d3f1adc275df58ae833f16971915cf45"],["/tags/宮崎駿/index.html","aa17965156b499eee3e6c1b8b12a0c58"],["/tags/小說/index.html","b64748c7b8a427ac722fbd9c67ee5107"],["/tags/小說/page/2/index.html","e4a48edca78f9a02133c48673a502e25"],["/tags/小說/page/3/index.html","6a5c9667c7d7daec40bb0db0f41d7450"],["/tags/小說/page/4/index.html","64abd9198de2dcc3270520ed277b0c70"],["/tags/小說/page/5/index.html","1e7491d7b58e03b81ecdb3c0cdb1157c"],["/tags/小說/page/6/index.html","6cac417f17a192331f958ad6365780ef"],["/tags/小說/page/7/index.html","707a8f9d9ca1f0d7074818244ebb456e"],["/tags/平淡生活/index.html","68386e106c34b25b73ceb5b084d0b81b"],["/tags/幸福/index.html","cdd0ac961d11e114cc71b3d0b15af2ed"],["/tags/志茂文彥/index.html","188629a039a2a1ca3676cb55a58372ca"],["/tags/愛情/index.html","37b98a61f1749c9fdbff88e2320a04f3"],["/tags/愛情/page/2/index.html","52f097809d2d8b16ae151e0764bdfd53"],["/tags/愛情/page/3/index.html","495e5378602021c17d087444b2261075"],["/tags/感動/index.html","e56a6b951c38298756d96f4d1c751b3e"],["/tags/懸疑/index.html","05b1742041c917a91bd759ab5d8e6aae"],["/tags/懸疑科幻/index.html","77fb88049eeed4c3a6785e9f74e72fbb"],["/tags/戀愛/index.html","9dc24cdd41917a172f4fa7a213b3abaa"],["/tags/成長/index.html","95574ffb7085e9c35234e36439ada9ad"],["/tags/成長/page/2/index.html","5e0426677f194bee85f3a0d59d69fb86"],["/tags/戰爭/index.html","6c5e1c02e9ca0e4afbe9eac979afc7c8"],["/tags/推理/index.html","459b3cc35bb3d3c1d70ea1964f3c3d4a"],["/tags/搞笑/index.html","c722b8ac0c895446bf24211394fa9254"],["/tags/救贖/index.html","e288c6bed0671f267311c15382cfeaf5"],["/tags/斜線堂有紀/index.html","f0cac49e8f62d1d50ba9c9b0254c0ec2"],["/tags/日常/index.html","08157728c40eaa9b8131f80c9b02d6f0"],["/tags/末日/index.html","d5c4d330691ffb6d20483aea92ee38ed"],["/tags/校園/index.html","64b609272c1dd8fc09f02ded1de010ea"],["/tags/武俠/index.html","0e07969da94977643e02e0d75449b5af"],["/tags/武俠言情/index.html","b7ecda6fa6c3cc2520b88e9a7511d8f6"],["/tags/漫畫/index.html","1dc27f57eab3051defbf4f7470f3bbac"],["/tags/生命/index.html","1b6faa9a072c27f071fdcc1f1a53d4a7"],["/tags/生命/page/2/index.html","fb5b7edae0afdf2ff2dc53ac465219a8"],["/tags/短篇/index.html","20f6ad8ca7c50d163d9feb71d8e239fa"],["/tags/社會/index.html","29021565364b30670d1cd17e3aa1518b"],["/tags/科幻/index.html","7601c2bd2c09d11d201b015140e5aee7"],["/tags/童話/index.html","5841046946c7bcc8b3f8b99ad7ce44db"],["/tags/競爭/index.html","88adc44aebe794416dc11c763eef5fa3"],["/tags/自我/index.html","3d30453aa0e3c143f110cb049d4f7e64"],["/tags/自我認知/index.html","a694fb4b2f3b7784fd4781d8885b8a1e"],["/tags/葦舟ナツ/index.html","15b46d4833eaab7247eaaa78e07eae3b"],["/tags/藤萬留/index.html","8ccb626b8796bcbf5646607c7426affd"],["/tags/親情/index.html","dd01407318aef365d9de5e98452e625e"],["/tags/雜項/index.html","1570e1e8e469b7ae0a82533052374538"],["/tags/電影/index.html","ffe7248e36ca6d4e48e438c003ccd149"],["/tags/電影/page/2/index.html","fdc0262814fffb37ea387fa71c4b4d95"],["/tags/霸凌/index.html","05483a8b9265d25cc292210c09ccda51"],["/tags/青春/index.html","62ec2be367ff24077cdda1688e9c948b"]];
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
