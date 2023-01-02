/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","79d909bea82273df5b154768c19862c1"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","06970b4c418d46d8241afe1a1b68c294"],["/2019/12/25/Review/無法計算的青春/index.html","3a366707ba9f3a65916c8f5ae25ddc30"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","73b4715bb3ce8455a0be5fa9b543b2a0"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","143de5c2d50298f681530c60f9488b57"],["/2020/01/19/Review/下雨天，不上學/index.html","7c9978221929c3bd724db1ee9a65e755"],["/2020/01/26/Review/三日間的幸福/index.html","11aa1e2fccf92ab89d0128e3d7df9246"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","b00c61166fd612ba7ca971202a8ea86e"],["/2020/02/09/Review/青春期超感應/index.html","0bbe84a0ea87b704dd7b2f9ce99a8b7c"],["/2020/02/15/Review/又做了，相同的夢/index.html","5d45ee71e3f2a08f001fe5a1560ba371"],["/2020/02/22/Review/回憶當鋪/index.html","a77f1a9ceb5e280534540048d2723ed8"],["/2020/03/22/Review/不適合自殺的季節/index.html","f4a858e4b2240e30fb0c47c7601e18e4"],["/2020/04/26/Review/我們都無法成為大人/index.html","2bea46670a3cbcb5a348f2a669e25e91"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","2fcb20e8504a53b35a3e33da143990fc"],["/2020/05/17/Review/人間失格/index.html","6d913c3c6c9e37e30ebe292f330f5327"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","93ad3bd3a540054a9279d8991dd7d953"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","cebc48e4d8637ef5b3e32b6c1ccac04f"],["/2020/08/01/Review/銀河鐵道之夜/index.html","309d3db5e2ce6f203700dfdc4a9e3e31"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","90954019b5b912898b75d8acfbdba5f5"],["/2020/08/16/Review/15歲的恐怖分子/index.html","4ba9413be73df26c6c28ef817adfd042"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","2a26b37eefa639325b93b992283cbd46"],["/2020/09/13/Review/羅生門/index.html","5011a63f509f83fedd2d5c7eec521e85"],["/2020/09/20/Review/闇夜的怪物/index.html","ea410455dcca2d2ea78bbc6b23842923"],["/2020/09/27/Review/14歲，明日的課表/index.html","186b11e88c9f0de29d14c0738eb29c66"],["/2020/10/04/Review/致十年後的你/index.html","1cd8bc633b37924db6b266cff3d10a5f"],["/2020/11/08/Review/滅絕之園/index.html","4c216cd81b2165ca9650e9d25d57b0dc"],["/2020/11/15/Review/將愛拒於門外/index.html","a534fcb2f28b995040fd46fb97c272ef"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","2e145a405ba93a8d672ad10b4062045e"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","cb1a576b089ed32dea8cbf834d371d89"],["/2021/04/22/Review/道印/index.html","d04665217b8c60f0ac5a98b1ea854809"],["/2021/05/03/Review/戀入膏肓/index.html","cbcb98ba0b527be70f6569de9186d6fc"],["/2021/05/10/Review/Dice/index.html","464a109237e981629467c1817fa21d3d"],["/2021/05/15/Review/魔女之旅/index.html","f0e7011ccd944e6edd811a335ddb727e"],["/2021/05/28/Review/戀愛寄生蟲/index.html","af1304f49c6741e9a87a2c5fb9a17c49"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","32e0d763ace90a9936983631cddb377e"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","e4f61cf9da5e66a098965a79acc13573"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","063dad73f8596fa2f3afadd521384f8d"],["/2021/06/05/Review/流浪的月/index.html","4baf2f11ba0af23fe35cdda5b2a493e8"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","372aa9b5499c41db11df2842db919794"],["/2021/06/13/Review/第一人稱單數/index.html","4bbb604ea6d4e45c052aae3920249685"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","6915b726aa6f128c4d03ead4db094bc1"],["/2021/06/16/Review/願你幸福/index.html","048dfb4792a076e41612044e642e04ab"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","e21fba68df92d29cd11f796252a0a7e7"],["/2021/06/21/Review/神隱少女/index.html","f21223662c47af1ea1d8fd351ffc76e1"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","aa6d45395550062bb75e8105e714aa49"],["/2021/06/23/Review/天空之城/index.html","37441e769c5c20f18eb61a62e8309695"],["/2021/06/24/Review/魔女宅急便/index.html","f561c5979d33e50e2b929faeda976561"],["/2021/06/25/Review/借物少女艾利緹/index.html","f4bf877b31167eef3c302a478abed570"],["/2021/06/26/Review/魔法公主/index.html","ddfbdcacf74e02594537bde9fb2cb22e"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","eb1646a3cbb0e2a37083dfa134ccb20e"],["/2021/07/04/Review/飛雪與劍/index.html","a52a2c12cf5e4441000af9e9c1fd3e0a"],["/2021/07/09/Review/地球防衛少年/index.html","2e8819c76c9311b4b1756cf5bc7e65f6"],["/2021/07/12/Review/Angel Beats!/index.html","035d2b2bd68b5942a718f57d04f4df14"],["/2021/07/13/Review/Clannad/index.html","6d522a015a8306cfffffa9a6e2b1e03d"],["/2021/07/15/Review/AIR/index.html","21908e100f83c08d58a238d11cef9598"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","78dc691ee88f70747a31c2d5c2dcf033"],["/2021/07/15/Review/螢火之森/index.html","4ec7a3ffd66a1c775cfb872c7ab27c7e"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","c6c53036d66f20d7bc321a10edc7871a"],["/2021/07/17/Review/奇蛋物語/index.html","18f848581b889971eed5ad6ff7b3341a"],["/2021/07/18/Review/Vivy/index.html","2c7adeedb1b4dabc4a48db0ab45beb45"],["/2021/07/18/Review/請妳消失吧/index.html","2a985f9a8a5a514d629639747efe30f9"],["/2021/07/19/Review/漣漪的夜晚/index.html","d1b71b20f690cea5dbd108a16d2af890"],["/2021/07/20/Review/月色真美/index.html","b113e79fe0a5997c0e5b000fd77d67e9"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","4659f06afb69f6867f3dd8000230be91"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","041335d07190ca9f3a1db73f02a9a1f6"],["/2021/07/22/Review/罪惡王冠/index.html","f345257c63342fb35140144656724bf4"],["/2021/07/23/Review/弱角友崎同學/index.html","1620a66843fff8c7b7a27b10f7302eec"],["/2021/07/23/Review/惡之教程/index.html","293bc7c05ed47009e8a61973cbd17676"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","86fcbcc19e942001dbd8d448b1f6f5cd"],["/2021/07/25/Review/魔王勇者/index.html","5f6e5c6dc3604802aa96d9dfe7f38f3d"],["/2021/07/27/Review/一年A班的怪物/index.html","f80a110c7aac3b71436b99b73b444a43"],["/2021/07/27/Review/奇巧計程車/index.html","7ff316e6c6790a6e545a7e85c87d3a15"],["/2021/07/27/Review/專情的碧池學妹/index.html","2d6196a9e330d1d771c9bc4302ab6049"],["/2021/07/29/Review/只有我不存在的城市/index.html","3fe4386ff5475957d187b16ad5df4f37"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","1b6062064ad4b7740e8a3ce256f138bd"],["/2021/07/30/Review/可塑性記憶/index.html","ba64d144b64b3dd5f812aaf35730d2cc"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","f04209c3d712b66e181f393e836a463e"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","111b2fc688d5141317ce69f32af5ceef"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","d55da80e98383f2f92f30ba44ce5ce6d"],["/2021/08/25/Review/清戀/index.html","333b5bc1b1c855a94cd81b58e89bd84e"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","02969226edfca320ba3416819697eb1b"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7a5462e9c0a7c76a57479baac7582205"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","75e6ce278581aa1bc94cdf397c2f3831"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","72e6bb9b0f34c2ebbe8618a48f54027d"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","73f438d94175e258ad4f88a64e147ed5"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","1820a5e1c1cd51b49665dc700bf4f7df"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","937156e806cdff2b08350ffe0af9ac65"],["/2021/10/16/Review/龍與雀斑公主/index.html","2fd54163b112b3cdbf3cfa23d9d26020"],["/2021/10/19/Review/孤狼不想開後宮/index.html","105e8e63e3d775620a0373cfda672cb0"],["/2021/11/13/Review/徹夜之歌/index.html","d7ede664eada0a2465d3787c1c8a8028"],["/2021/11/24/Review/武煉巔峰/index.html","425461c95fa068b00f7d2e0bec498a15"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d410cc34f7ad8d2e0bce5364c2c18e8c"],["/2022/01/28/Review/神醫凰后/index.html","f959d6c90fd2a9e14c4b48fcaaf235f0"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","2ddf0f6dc28d7ac86fdd9cb2e6808386"],["/2022/02/13/Review/夏日幽靈/index.html","3ccfa7fa338265d12e857d1994f64b7d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","fe0072365ae7c5950fded83adaf1ff07"],["/2022/02/26/Review/賽馬娘/index.html","eeb3bae91beda71554bf547960dfeaa6"],["/2022/02/27/Review/大欺詐師/index.html","1d7e9ecb14940865aafa52401aee6972"],["/2022/02/28/Review/前輩有夠煩/index.html","1da2df59d3629da02d781ffb58573055"],["/2022/02/28/Review/碧藍之海/index.html","171a1451e4421237357beba759a600ae"],["/2022/03/05/Review/落第騎士英雄譚/index.html","aa0cad40b4e906a8328cb058b5357517"],["/2022/03/06/Review/Another/index.html","b2b89491c930c5521a446297f424aa54"],["/2022/03/06/Review/入間同學入魔了/index.html","1f15550ee117adab337cc57f3347ae40"],["/2022/03/18/Review/再見宣言/index.html","6ef18e4cd238a492bb1818ed992a8e42"],["/2022/03/23/Review/生若冬花的妳/index.html","6659e736f4364a34233c9d0c47239cff"],["/2022/03/25/Review/天之弱/index.html","8ec6198ab39dadc065a9478588b2bb47"],["/2022/03/31/Review/滅了天道之後轉生/index.html","7691ccbc4b67cf50c6e14f314b4ea0d0"],["/2022/04/30/Review/泡泡/index.html","e595de242abd33dddbc60675208f73ea"],["/2022/05/04/Programming/Dynamic Programming/index.html","a6b27db0758ae55c3cc73e446afc7978"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","e46130ef091f8de4b179ac471ae6246a"],["/2022/06/13/Review/偵探已經，死了/index.html","b52ceae538c7843e23829908a4ef9d86"],["/2022/06/14/Review/黑色子彈/index.html","a8ff1b18e25ac2f0e183560ffc3e051f"],["/2022/06/15/Review/黑白來看守所/index.html","8ea6baf45e103a3410bd9b038711a2d4"],["/2022/06/16/Review/虛構推理/index.html","2adf2a8c3316c3a4a1cd7513d899742e"],["/2022/06/17/Review/戀愛與謊言/index.html","d01ae28f4d4b967d919b693e8dd62a0b"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","0d44c9db021628160237fc865c64300c"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","eddcc85cbd479052ea28812478e4a67a"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","4eac6c4e284cfa93299e80c0c0581125"],["/2022/07/03/Review/Hello World/index.html","bcf4da4f359f0c13a20e5639c4d3f2ce"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","51514b6106f41cffbec1f2bafbffe40a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","1f2965835637b5da757ac7ac3c6e9232"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","3402785027811cf5152994aab20b7e0f"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","2db97be36f023daeda87b50641837f2f"],["/2022/07/16/Japanese/動詞分類/index.html","ebf7334c5ddaf25b5517f0a661787c5a"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","7df8fe9d3efeeb1dbc2a98e4825c3319"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","a184e721e5bc4a8760eb3edfac6371d2"],["/2022/07/17/Japanese/音便/index.html","7f6987329071f2e5b06308dd5088426c"],["/2022/07/18/Japanese/動詞 時態變化/index.html","c1376663536637975d169dd25fe73a0e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4c9a76f35c81b8161442ef67b8872a1d"],["/2022/07/26/Japanese/助詞用法整理2/index.html","fe2307f70aed16e3495ab034e5af99a9"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","42aabe9a83c0b0370235977708bfcc29"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b82a033ddd60e781e615d4f4d1d69a11"],["/2022/07/30/Japanese/疑問詞/index.html","287f705f4bc3a532b78e0214b5c2d9bd"],["/2022/07/31/Japanese/助詞用法整理3/index.html","55147129cb1620fea7b08e065ad3e4c9"],["/2022/08/02/Japanese/副詞整理/index.html","a066618aa7d28703bbd40ceaa5f25a7f"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","7e4a17975f5eb568524712523243e5fc"],["/2022/11/04/Programming/Data Structure/index.html","0c54584dc275835f05c9566642d5bd25"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","28325ff38980e19e58e9215af80f6ded"],["/2022/11/22/Review/組長女兒與保姆/index.html","6a1fe666d70e5236a24e7a974df130eb"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","b281b60a0ca4dcfe375c6295e8b75d0c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","00f13d1eb2633203fe73860da7ace96e"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","2f7d0898c623b59bc861c6675b3c490b"],["/2023/01/01/Review/あの夏が飽和する/index.html","b88a8a22f40b70d136766afeee76c5ca"],["/404.html","b067660fa528c096c10831a0dca7f140"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f075d4a1bb4b6c5a38cbd2e012a2ea79"],["/archives/2019/11/index.html","26e10a18d34b0adf6f4e7c7bb5c90438"],["/archives/2019/12/index.html","9626b25ea02d1d2d8f1f5e1b9eb09b0b"],["/archives/2019/index.html","ccd4e6d92d085cb4abd94ccd5b805614"],["/archives/2020/01/index.html","885f2a0e632e62e0bee2b9429d5a6aa4"],["/archives/2020/02/index.html","37c09d4b709431c678e15139bd4f716c"],["/archives/2020/03/index.html","7eab37a9e2c4e4a2901d829b5188fcd8"],["/archives/2020/04/index.html","f1aecbbfb0818ef9eae8b6ae3d9aeca5"],["/archives/2020/05/index.html","57487162d828e1893a54ecfa9df1629e"],["/archives/2020/07/index.html","a026ebcd37e85947b1fbd6aac3d0cb11"],["/archives/2020/08/index.html","f2f5a3c2c5163d2056ec29d74a2973c7"],["/archives/2020/09/index.html","2991859369fc84f718ec907285591b7f"],["/archives/2020/10/index.html","3a42a8ce5c126318bd669ff7421c2039"],["/archives/2020/11/index.html","aadd8510f1ea45ff10cefb725b6435cf"],["/archives/2020/12/index.html","2ee19ae227f882693808bcd88338eb46"],["/archives/2020/index.html","0df99ae381ec8d289159ef18402defc1"],["/archives/2020/page/2/index.html","9c898d81a33dab04e80682e2fbfd4299"],["/archives/2020/page/3/index.html","4105e453ac7e8102b679425e110266cb"],["/archives/2021/04/index.html","91ee7c010b0e99406de34df90918b678"],["/archives/2021/05/index.html","0e36db36c39a3e5b82e451587787592b"],["/archives/2021/06/index.html","965668d542dd3654cd85bed2c4ba9a6f"],["/archives/2021/06/page/2/index.html","4b2b2cb9a05e2980f27f2eb23d143889"],["/archives/2021/07/index.html","f4a3165a6317e750045d487356e3ed17"],["/archives/2021/07/page/2/index.html","0221600e814eeb390776da237c6defbb"],["/archives/2021/07/page/3/index.html","e6669382ae78d924c8340b6fabdca11a"],["/archives/2021/08/index.html","b911c8167fabf3d369b7a7edefb95c5b"],["/archives/2021/09/index.html","e0a3dbf093daf1ed315c89bf20cbe46e"],["/archives/2021/10/index.html","6257fcf6e3c3567fdd80602ac41dbbb5"],["/archives/2021/11/index.html","5cd1c81dbdc45076a92da276cee27781"],["/archives/2021/12/index.html","59ed0962d3da4e7b7cefdc3f313b37dc"],["/archives/2021/index.html","43744ac881a3cb3ba23d479c5da1551c"],["/archives/2021/page/2/index.html","7892a1110c4beb311a7dfede8305e56d"],["/archives/2021/page/3/index.html","905f75a126c93d9dbb4318e558ec1011"],["/archives/2021/page/4/index.html","5e55349dbfc3eb6d7682b7acf59c4cb3"],["/archives/2021/page/5/index.html","8bc4e2a88b622e50edd548f5f3281220"],["/archives/2021/page/6/index.html","bfa747d7790bfe786673a09ee7540190"],["/archives/2021/page/7/index.html","9a921d30c1b4562ad534f5012faa64c8"],["/archives/2022/01/index.html","29cda5c1c21fc7b9460427a2d3837bd5"],["/archives/2022/02/index.html","7d0183670e85ad8dc67198bfe739e507"],["/archives/2022/03/index.html","ab82443ccc424b276a10b52c695c9fbf"],["/archives/2022/04/index.html","f1e907ac8c709b9f1f8b1074657d60f5"],["/archives/2022/05/index.html","30ef587ca74e72c2a6ed016e25adfbfa"],["/archives/2022/06/index.html","5d55a7e1c139af92a7284499af87eeab"],["/archives/2022/07/index.html","a0edc56468d7f2e947a123968d2995af"],["/archives/2022/07/page/2/index.html","6164289741c24f84fd442906c90dc39c"],["/archives/2022/08/index.html","da8551524eab76aee3ba56238804ecd4"],["/archives/2022/11/index.html","7cf964d97d1625f62815f09e3247fc03"],["/archives/2022/12/index.html","ef706b6b506682322ef5bb2e0849acb5"],["/archives/2022/index.html","41def077e8fa6a77fabf014f19dc3a8b"],["/archives/2022/page/2/index.html","37d1e42f7ca46427b83f8b7bf88aff0d"],["/archives/2022/page/3/index.html","c1a35040f58394f81c97b4f5b856c91d"],["/archives/2022/page/4/index.html","afcd73e66212d8f0dd470f7a0bcff300"],["/archives/2022/page/5/index.html","a547464479a82b154dd64a13931cd606"],["/archives/2023/01/index.html","11fe86c0d7de6855ccf21ea4723598e4"],["/archives/2023/index.html","fba0d4ae224eb06f0f0e0ff3a74b9292"],["/archives/index.html","384a122da3c55eec00e6aef32b2759cb"],["/archives/page/10/index.html","b9ddc823486e24fb5d0a8cc74a42f2d2"],["/archives/page/11/index.html","e5caa65caf7bf13041ef4b5109cea65c"],["/archives/page/12/index.html","6339edc67e010746102ce4f13da346b3"],["/archives/page/13/index.html","f7df175560ee2079d69c248b0adea380"],["/archives/page/14/index.html","5e38d23e5c3254e2d57894939aebad57"],["/archives/page/15/index.html","2c1cea2cb7bb6cb7e8adbfe9f1532549"],["/archives/page/2/index.html","9f10692a845af5d7c20c5d0e68ff0c89"],["/archives/page/3/index.html","cf47857dc4c542f41033f11b03187a85"],["/archives/page/4/index.html","f379c696ec909b9b7df0ae450989c1c4"],["/archives/page/5/index.html","cf5049af9a82ec4a9b533a64ed1a5b9f"],["/archives/page/6/index.html","6b7858fb3900a5adb39cc56f253f2ab7"],["/archives/page/7/index.html","3798b731e560f09d435ca105627c2f37"],["/archives/page/8/index.html","60c2450c1b1d0b751afaedd112876507"],["/archives/page/9/index.html","cef1bd930592ac38163ebe41e214adba"],["/categories/Programming/index.html","44234c3270c0e5b3a36f0e56860a91d2"],["/categories/Review/index.html","1ba660e8e63339625bfa64365dbcb2ed"],["/categories/Review/page/10/index.html","d90bdc38876d0ba1d32fbd6938df5f35"],["/categories/Review/page/11/index.html","2ee05485479555a6f8e1ae0cea536629"],["/categories/Review/page/12/index.html","c0ca6c333a938ba467b237ece35830cd"],["/categories/Review/page/13/index.html","027359e5ae3514117ef0504c638ca414"],["/categories/Review/page/2/index.html","7fc6748ea347ed20835e4a7b7d4fe8b6"],["/categories/Review/page/3/index.html","4cbbc757bc0e210e0eec3fd6e34089ae"],["/categories/Review/page/4/index.html","501541ce36e074dfdb1960abee8bbb7e"],["/categories/Review/page/5/index.html","4d32986ed191e0ec950d6619ccc18d3a"],["/categories/Review/page/6/index.html","8e3cc3320e0842e4ce47bf4c2e0e8d99"],["/categories/Review/page/7/index.html","be413e28dba53905016d485988031980"],["/categories/Review/page/8/index.html","c4f32dcc2eb0e3533820d5f4a45d5165"],["/categories/Review/page/9/index.html","1c96c6d44d1f07c4816e27e7584d111e"],["/categories/index.html","0228846c2b3e174eb022d06e11df8089"],["/categories/日本語/index.html","ab5a96e2e8904e7de522b4bb70756b30"],["/categories/日本語/page/2/index.html","2c82f2c3687310df64148a83dfd47946"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","edf6b72c52f2a34d4d4450f287995dc8"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","b01171104b7286332373a307ed504f6c"],["/page/10/index.html","79cf06cb63605d9ec58c7fdecf76ff76"],["/page/11/index.html","a5359756dd5882d0d785fab10a863353"],["/page/12/index.html","045afec8de0cfb8a7deb23f1ff6d99ea"],["/page/13/index.html","576dc2cb256b6e77c8e3b3b3dd046ba0"],["/page/14/index.html","788ff73369c189a64a7069d345483d2c"],["/page/15/index.html","aeb220fc0ec66b26eb28b79d3745eab2"],["/page/2/index.html","b330fa5e5c9218ffce3c8a74c99630d0"],["/page/3/index.html","8aa8cf81e8b33d6ddaf15516da5f857b"],["/page/4/index.html","4b74e0f984444edb1184c371317962f3"],["/page/5/index.html","9ae7650a33c8292d70b4b746f2af19b3"],["/page/6/index.html","c385c57b127e67f0990d23ffe65c8012"],["/page/7/index.html","6705032dd1c3070ddc3a0784a5555d83"],["/page/8/index.html","7d7d904c24b6275733380d181aef929d"],["/page/9/index.html","9148f18e56d725abb91601351278a30a"],["/sw-register.js","70bf12f9ee92c6c424aefd440570276f"],["/tags/10分作品/index.html","fd83c738852eeeb897be292d9c6bc398"],["/tags/3分作品/index.html","e442463bd8ec66de16f864b466afe1b9"],["/tags/4分作品/index.html","3e45f4783fb8924297c9a41b57ff7399"],["/tags/5分作品/index.html","9550c28213fdbc452fdafcfc5a0d274b"],["/tags/6分作品/index.html","2b766a372801cdc5230f9ad6d39b3829"],["/tags/6分作品/page/2/index.html","694919a3f71d4847f4c0b113dc444dca"],["/tags/6分作品/page/3/index.html","6b18bb882cadf319fcaabb753f511ffe"],["/tags/7分作品/index.html","070d2d65e4219bf2506dbca6b9cb97e0"],["/tags/7分作品/page/2/index.html","21af11cf5fe907d916f7f95e0b751e2d"],["/tags/7分作品/page/3/index.html","42ecaa88637b0b56ee3e60685d3a2d4a"],["/tags/7分作品/page/4/index.html","1cdc23ac33db456951ba9dce4696223d"],["/tags/8分作品/index.html","b19691337281c23d5b86d95ea8a5fd8b"],["/tags/8分作品/page/2/index.html","fa309426add0df624428e385828ccf03"],["/tags/8分作品/page/3/index.html","13c02b92c1d8d848b85dee60b23eebf2"],["/tags/8分作品/page/4/index.html","c39a3a7499d8d2d453d47678e0a01ed4"],["/tags/8分作品/page/5/index.html","26b98c31f4b76f8b4d33b740393cac13"],["/tags/9分作品/index.html","905a88963f1c76a64d41ca01ec72318f"],["/tags/N5難度/index.html","e69762984c221930fea1d1dc11fa6ddf"],["/tags/N5難度/page/2/index.html","1a44315976d650e525cd27441bd201bc"],["/tags/index.html","869253615d0bdef1c6e0dc369110064c"],["/tags/アボガド６/index.html","35db0f741ae0d252836e07e669e7dc88"],["/tags/三秋縋/index.html","c1516ba521ca5519938712b258d84c98"],["/tags/中國武俠/index.html","f068f4211f38c08f3573219e1da4e3e7"],["/tags/中國言情/index.html","a7c85b677923a2a4818fb320ea93f695"],["/tags/二宮敦人/index.html","490b7db04b3a48c081f29157364a4a25"],["/tags/人性/index.html","a6db43b7ae6cb8a2f9a81fc4c1791c4c"],["/tags/人際/index.html","1ce7cc62b8de41ca17eee6d75b47fbe7"],["/tags/住野夜/index.html","c91039e37487a6bc5b94db4ac3fdef5e"],["/tags/佐野徹夜/index.html","4adc07cca5eae328ce48836e7e61ff51"],["/tags/努力/index.html","5eecdd049b145439d99a1c2c0e743c1e"],["/tags/動畫/index.html","f2086ff811e0792a85cb7b739494f9f4"],["/tags/動畫/page/2/index.html","889512b7f2ea0c8e8eb0e430fd65f923"],["/tags/動畫/page/3/index.html","d2828c425b8eaab53313a08d56877867"],["/tags/動畫/page/4/index.html","cd0ac6f8893f5bbeaafd1be21e3ad24c"],["/tags/原諒/index.html","7a31ec76822d579ff5e15073700ab380"],["/tags/反烏托邦/index.html","b7e65ba0e0664c33dfa134f03b1bdc23"],["/tags/啞鳴/index.html","765d1da002edfd4c7505c1ea300be15e"],["/tags/喜劇/index.html","85bae86ec14b5e4415f5b7eabd302da7"],["/tags/夢想/index.html","ae0a513ded718874b7ba8b5150e4d619"],["/tags/天澤夏月/index.html","e4bc316f6fe15640142715a07d0e4c79"],["/tags/學習/index.html","0328af5989036ff7f367b2bbe508fe68"],["/tags/學習/page/2/index.html","48babc7aecdc899a47867fa9e5d5268d"],["/tags/宮崎駿/index.html","58b3ae0f8b3f9269fc0276e8d4e4771e"],["/tags/小說/index.html","f2dc0dd37cab02093f5b1f5beb36a72e"],["/tags/小說/page/2/index.html","b82454b49f0c60849afc6fbb1ce80dc0"],["/tags/小說/page/3/index.html","8332f0079a7a5782ec03debc80e2a570"],["/tags/小說/page/4/index.html","b5710384bc9a6af056a0bae963bce8e4"],["/tags/小說/page/5/index.html","5addb6c55f85377a3a283a03816d43bb"],["/tags/小說/page/6/index.html","a2a79fa3fb731d8e1d901cdef076cf90"],["/tags/小說/page/7/index.html","faf27cd87fbd40e65f56d34548fb5b1f"],["/tags/平淡生活/index.html","0c8048ad704e6418683d9b8a9ea322e5"],["/tags/幸福/index.html","83adbe9062ff85b8cd18ef22991b2020"],["/tags/志茂文彥/index.html","5d657221c422140b5195a3646166be13"],["/tags/愛情/index.html","10f7d64d1f934a4168908772bcaaba5b"],["/tags/愛情/page/2/index.html","dcac4523836a1472e668c277ac5381ac"],["/tags/愛情/page/3/index.html","777662d5058ff8950767f0137d7a66a2"],["/tags/感動/index.html","33e743effa405905fd78553765b9d0fa"],["/tags/懸疑/index.html","72a5a930c588eecbdc9cb536f5803615"],["/tags/懸疑科幻/index.html","0e20f4fd8f9a022f1798004a6e3da0dd"],["/tags/戀愛/index.html","d9e6699ceaf2e927e97e0ccf7aa373fb"],["/tags/成長/index.html","0115770d28355118618c163b1429fd2b"],["/tags/成長/page/2/index.html","585612bf41ff25d224cd3a5254b4e1b2"],["/tags/戰爭/index.html","a4dae371ee752a6d90bdc02a928b068d"],["/tags/推理/index.html","b10db983628f0cade0723da8c65e556e"],["/tags/搞笑/index.html","2c2c25a9b8df8d1693533d14453b1a85"],["/tags/救贖/index.html","4789e40d711d78dcd87a56e5fc6f88b2"],["/tags/斜線堂有紀/index.html","97e637367fe3d1dc2f23efb224653db3"],["/tags/日常/index.html","9fab52bedd5d6f889b8f1b34dd669fac"],["/tags/末日/index.html","7bde9284ba839ee73c395d217e3d50e9"],["/tags/校園/index.html","9678bcfa42f7c14dfd73fce25e1b8019"],["/tags/武俠/index.html","25e3ecd7f9b092d45d300cc4a7db8539"],["/tags/武俠言情/index.html","03009f82788787db9d4b43cef882f446"],["/tags/漫畫/index.html","73cf71e43a9a88e705f82c3c0c6cbb7b"],["/tags/生命/index.html","c2311e3611bdc73c9bd9880060d8797b"],["/tags/生命/page/2/index.html","2678eeb8072f693baf8f9da5af8de8f2"],["/tags/短篇/index.html","ca8708b6dcc8001faa918d5e14957f25"],["/tags/社會/index.html","25d592afd839562f86dda6d6b7e3d046"],["/tags/科幻/index.html","7f709467f167cc5a314a20d08636c30c"],["/tags/童話/index.html","8fb7000f5f3ed5e6c75482d3ccf05d41"],["/tags/競爭/index.html","b9ea29f4563bc851af1ef028ecb2ebb6"],["/tags/自我/index.html","c9e274d9882711be397fc393b64e22b0"],["/tags/自我認知/index.html","1f566ec9f55dd2e27974922646b85ffe"],["/tags/葦舟ナツ/index.html","ca2a54433837a4b4304d267d1a9b7656"],["/tags/藤萬留/index.html","f111777c092e290976520e312341ff9c"],["/tags/親情/index.html","c1656ac9aa787f89e19d99ed1e14ff0f"],["/tags/雜項/index.html","cfec073915a10d320fc1d35b65825258"],["/tags/電影/index.html","7e799eb143ead3772c181851a27c9c34"],["/tags/電影/page/2/index.html","e119074781ae6f2cfad680b5edda4e35"],["/tags/霸凌/index.html","814789267a3c9b0d6b620ee656e51a89"],["/tags/青春/index.html","8aa05f574a1f4824c94bc29f3fc26727"]];
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
