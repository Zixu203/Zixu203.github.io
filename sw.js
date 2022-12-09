/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","0baeca513c1f852269dd308f741d6caa"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","7600cc4366199b4a5d70feab376302a8"],["/2019/12/25/Review/無法計算的青春/index.html","c0ccdb335c8a5b688b8549306054236c"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","57f69554aa5877485603d70995e75de8"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","df7046b439ee8e8f49f2ff3c99cb9f2f"],["/2020/01/19/Review/下雨天，不上學/index.html","015751f4e8359547c9ad1eeb8ad78b54"],["/2020/01/26/Review/三日間的幸福/index.html","bf2a90ab72f96a7324b1c8d4896f3d63"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","729d680d4f4488480220e547ff9a1a35"],["/2020/02/09/Review/青春期超感應/index.html","fc3b0862847fe58104058df80cbd1e62"],["/2020/02/15/Review/又做了，相同的夢/index.html","80437a7528e9c4c5ae26d1604818c787"],["/2020/02/22/Review/回憶當鋪/index.html","f6ea669f8ac4cf1fbe3444430fd48530"],["/2020/03/22/Review/不適合自殺的季節/index.html","7eb76bf7bdb379a44376522d1b1a95b2"],["/2020/04/26/Review/我們都無法成為大人/index.html","43b364f6710b0238ee77bae7cc99fa16"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","ec7177e29ed9d843504cc7ec8a9d24f2"],["/2020/05/17/Review/人間失格/index.html","f69d6178fc3d7bc6dbfb695079f6fa3c"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","90f35dd488c240b974fef0ec59ee1a83"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","6e9dcdb0048b84223e32fdf800e2defe"],["/2020/08/01/Review/銀河鐵道之夜/index.html","cc2149af873e16d5fbb6619f6778d612"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","01fc737dcac5daeecc89721850cf2269"],["/2020/08/16/Review/15歲的恐怖分子/index.html","5917f6271af50016d25ce7cb392f078f"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b3c22a9aafc42f6a30e4fc1d2b001228"],["/2020/09/13/Review/羅生門/index.html","7a692d89e635568b42e0a0eb4596be50"],["/2020/09/20/Review/闇夜的怪物/index.html","3812ed34be3b8385e6a665f652063c0c"],["/2020/09/27/Review/14歲，明日的課表/index.html","b98d86127669f693ed5792d2b13c4608"],["/2020/10/04/Review/致十年後的你/index.html","91bd42c0893d8919b438c326e49d218f"],["/2020/11/08/Review/滅絕之園/index.html","d1d4d567e25d96e7316d5e647bd71b37"],["/2020/11/15/Review/將愛拒於門外/index.html","fa25ca2e4e52b0ac2a9a3bbec6084e3b"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","f9aff8a7d5dd4d0c495390919bc279dc"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","cf013a2c993e8e10b5db082840aac260"],["/2021/04/22/Review/道印/index.html","b547c2fc8d831df751fce5f0f1406aab"],["/2021/05/03/Review/戀入膏肓/index.html","ab3258414acdda1f5e12acbdf9095399"],["/2021/05/10/Review/Dice/index.html","353550d7acdaa56b222fee526eb831dd"],["/2021/05/15/Review/魔女之旅/index.html","318b37e9b6842af59f68c62a74e6df5b"],["/2021/05/28/Review/戀愛寄生蟲/index.html","ceecd530828a4b5a47a6695ff8997caa"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","1732cafc0e994d5d462ee5bdfd5a6358"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","50aa62580edb46912a08c315951ca6ba"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","78bc418ef9dca26880f60f78ad2f07f0"],["/2021/06/05/Review/流浪的月/index.html","1de6a788513913a206fa0797427d77e2"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1a35337c6c85f33ce632e4a95266ad4c"],["/2021/06/13/Review/第一人稱單數/index.html","d6f7092befdad12c908d4f661c51daf1"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","9eee4465abbe9af8c932e8c1a2decf74"],["/2021/06/16/Review/願你幸福/index.html","9b9427fadc17bdd42dbd9041458364de"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","9e932433365f45de81eb37bffeedccab"],["/2021/06/21/Review/神隱少女/index.html","05ae803261e071055ae105f1be063f7d"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","0b81721030365d3f4e6bd310c295dd6a"],["/2021/06/23/Review/天空之城/index.html","d4a8d9a77b396561fbb8ad698812756b"],["/2021/06/24/Review/魔女宅急便/index.html","3ad98442e9675c98fa5f3625c95fc8d4"],["/2021/06/25/Review/借物少女艾利緹/index.html","226054dc2dfba823514a12c883b93a81"],["/2021/06/26/Review/魔法公主/index.html","2065b92a9370eaf3d69c3f2b7cb798bd"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","5e8e8e9325f74374df9ef9781729d8f4"],["/2021/07/04/Review/飛雪與劍/index.html","22d00dca90cec3e3abe7d6bd3c52ede0"],["/2021/07/09/Review/地球防衛少年/index.html","22d1a371bc924dcc662ab46ff4aa83b6"],["/2021/07/12/Review/Angel Beats!/index.html","3f104edaf88774bb7262bbfd2774d22b"],["/2021/07/13/Review/Clannad/index.html","9f9d7ab35e2e44ef414bc8f08639fea7"],["/2021/07/15/Review/AIR/index.html","a81318af0659df242e258be89e217df6"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","bf733335c6a2b7828a7cfc7dcdb4c6d0"],["/2021/07/15/Review/螢火之森/index.html","2d516f7e93d8b8a986f18420e2c3d8a9"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","1ef214686d85573c9b3b35cb4cd38ea3"],["/2021/07/17/Review/奇蛋物語/index.html","0607f2534c52d421e9630319f84d6ce0"],["/2021/07/18/Review/Vivy/index.html","cbc4687f951d0e5fae69aea544b1367b"],["/2021/07/18/Review/請妳消失吧/index.html","7bc73a407e890a3d2127e9f9e20522fc"],["/2021/07/19/Review/漣漪的夜晚/index.html","cecd579ae38b582ae0cdaade62edcc83"],["/2021/07/20/Review/月色真美/index.html","e850d2dabbec76c73058956ed401663a"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","17aa59c64257b1cbc439cc05cc3b09c7"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","16cb08b1d0f54c97db753be4c1cc0626"],["/2021/07/22/Review/罪惡王冠/index.html","ab149dfaba5050d9dc32e1a43cdd6417"],["/2021/07/23/Review/弱角友崎同學/index.html","676995c5bff91bf74a6382e90d767d1d"],["/2021/07/23/Review/惡之教程/index.html","d9ffb6eed90a3b7d522b24b9ff0ee27f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","69b9f074d329841b8dd9528d0375fa32"],["/2021/07/25/Review/魔王勇者/index.html","d12f1c1726ce4435eec3ee1b7ff4149e"],["/2021/07/27/Review/一年A班的怪物/index.html","97fa2836c1d738f64d3101dea11e1bfb"],["/2021/07/27/Review/奇巧計程車/index.html","9f88949ac27e5c5de0317885d1d435f7"],["/2021/07/27/Review/專情的碧池學妹/index.html","c13dbe996dc17b375ce486dc2743c5b8"],["/2021/07/29/Review/只有我不存在的城市/index.html","c72da8aa5bc1a8bbc0069038bbc9ae0e"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","c237c3afec7df576bc1f48dfb224e107"],["/2021/07/30/Review/可塑性記憶/index.html","1f33af9ee2ebb313b5c972266e353afb"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","c44fb698cddbed0e825ba847153d97ab"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","3f9cdb35c9d224710becb594af69a3c2"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","7a6ee4666b92aa8e8d91112db513211a"],["/2021/08/25/Review/清戀/index.html","4366c04e97dec044903374671fc847bb"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","fa41ffb26d47fb78d0c3b514d6551c6b"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","0830ac8fc1ebdebc6b8c4b1ea30a35a1"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6329560c3fb15dc54550ec70cdb334a9"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","45c7ecf3c7afc1f0e49818359fccec6b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","4a8c957f5755899bf223165a3b167992"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","e29f665728bdfdc5cf232012a04131d3"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","6fc5f594a7571a9e7933f09f23113dcf"],["/2021/10/16/Review/龍與雀斑公主/index.html","21bfac576b270a7fab510e9b4baacbe8"],["/2021/10/19/Review/孤狼不想開後宮/index.html","15d449b15a73bae76bdb838498cc0f42"],["/2021/11/13/Review/徹夜之歌/index.html","1cea3fb70f6d2cab3559b8be58297c90"],["/2021/11/24/Review/武煉巔峰/index.html","b6b49cc43075130f13a0c8eef83406a5"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","3541e0019a03ceebeaf0e1ee7b713232"],["/2022/01/28/Review/神醫凰后/index.html","a5ddf95c5336534dba74eea5eec634b4"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","3b88ac89c0e4d9866c25072778c105fa"],["/2022/02/13/Review/夏日幽靈/index.html","f03529c55cb51eccb5557c9e92bff04c"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","ddbf77cc425e15d512fca5d3788ca08e"],["/2022/02/26/Review/賽馬娘/index.html","6af433b22d54f349196e8f71347a53d9"],["/2022/02/27/Review/大欺詐師/index.html","07febdf539b08232ee6d26f83ba9cfbb"],["/2022/02/28/Review/前輩有夠煩/index.html","07cf53006fa58d6966d9e6fabdb10818"],["/2022/02/28/Review/碧藍之海/index.html","e24a579e0ad881d04ec6d3b8091400cf"],["/2022/03/05/Review/落第騎士英雄譚/index.html","4c1de4f78d800c0bbf472f0713e0b4d8"],["/2022/03/06/Review/Another/index.html","0499bd7dd608e1ad7e32ff51deb9f317"],["/2022/03/06/Review/入間同學入魔了/index.html","bb95cd02572b13d32222e16a1c1fe4a0"],["/2022/03/18/Review/再見宣言/index.html","7f9c57b4c62194952313e4fa9864b6c8"],["/2022/03/23/Review/生若冬花的妳/index.html","ae09e1b93489e1631cc55c7d25215bbf"],["/2022/03/25/Review/天之弱/index.html","de79520d43eea7ea6b41afeea10d54a3"],["/2022/03/31/Review/滅了天道之後轉生/index.html","aed601cc83efddc838f8047d2337c867"],["/2022/04/30/Review/泡泡/index.html","87313f4c2e7573c735e46f5672ff5ed1"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","df9caffb49c6af3479b0e9034da25b8d"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","458abc456ff5ae805dcae41d8f702a65"],["/2022/06/13/Review/偵探已經，死了/index.html","962cb906d3a3fe8d2bf993567ef50461"],["/2022/06/14/Review/黑色子彈/index.html","e4393028e17e56a1f7c479ce0584514c"],["/2022/06/15/Review/黑白來看守所/index.html","df4175f80a8baddb19c47ee98c5cd598"],["/2022/06/16/Review/虛構推理/index.html","b443283306f6fb96d46689c3ac51fe98"],["/2022/06/17/Review/戀愛與謊言/index.html","a5650279423048384fda94f43b285952"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","ec072a6ce1d71f7dc1b0b47f62a9db24"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","d08c4aa495880de8f24e4c7422e9dd9f"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","6ebc25a7004c81e078b00fff976d0f1a"],["/2022/07/03/Review/Hello World/index.html","3a91e4e5101e7d7541c5d3efbbe3f87d"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","6aaec3cb7463c728712a58f2aba57281"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","5c30b3f721a3b8bffe1e6a294a62753b"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","d1fe113655e7d2559f45d2a0a6b02f0d"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","e2417e8ef494428dd92dea37b5d7c85a"],["/2022/07/16/Japanese/動詞分類/index.html","859d5fe6c95716a677a8ec401392eb6b"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","32036305b8f2322b44bab5e17d5f30ac"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","f0bb5f4acb03acdce8d01a2d5c1bf519"],["/2022/07/17/Japanese/音便/index.html","94c37e8a141b15e5c7de2ef3365f9ad7"],["/2022/07/18/Japanese/動詞 時態變化/index.html","545a77cc43d92fbc4509de2431be854e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","d3f21c337a9d789feb0e6f8683d70c35"],["/2022/07/26/Japanese/助詞用法整理2/index.html","96ae48c1922bb0bdfb851d07c65d7c24"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","2bce3a10831ffef00230db4476f124d4"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","883f90d36563a27d3abd75584c5075cd"],["/2022/07/30/Japanese/疑問詞/index.html","82f41f0978be798d68b4b4780c2748b9"],["/2022/07/31/Japanese/助詞用法整理3/index.html","d3481b4892d7c1fb63ea575e8e486820"],["/2022/08/02/Japanese/副詞整理/index.html","dc52362c07245786e45fcc0c734e00c5"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","0843c6aea6a34f81e57844b3e8b0420b"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","38644540b538e0d2c4dcb66e871ef58b"],["/2022/11/22/Review/組長女兒與保姆/index.html","7925e08ea3a4efc5809c9eaf7f513234"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","a27695f6957330280fbfc0713d28ba90"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","ac8b2e9427287cc8c8db0b94b7c1e4f8"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","a5a023bd34aeb2f3ef5584a11c186867"],["/404.html","82231a3d4767380e181184806b07cb42"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","a3ddca47004e36672e85bd7ec4f8c6cc"],["/archives/2019/11/index.html","85d5d389434e911fc67e039334335014"],["/archives/2019/12/index.html","7720142f033d985377b0e4932b7628ad"],["/archives/2019/index.html","50ca2cc96af35b91d64141d09028bd5d"],["/archives/2020/01/index.html","43e5904009569dac53befa48ec4e70f8"],["/archives/2020/02/index.html","c5c175f8e8a2c4e08144756d19b24c33"],["/archives/2020/03/index.html","414afd6a9ece8e124c265b6da5f67c07"],["/archives/2020/04/index.html","30a3a89b555e1a39cfc15c9f8cdc0bf7"],["/archives/2020/05/index.html","f0005d9f7d55edc5243fcd662859cc33"],["/archives/2020/07/index.html","b5629cd4ead0aa85525063721cfaed03"],["/archives/2020/08/index.html","8c4aa3eb61551c7da35f004ee81df9e7"],["/archives/2020/09/index.html","50de481035bbe14f0ade342c2f167c9d"],["/archives/2020/10/index.html","6e4ecd9807e440d577449a6e83c81b92"],["/archives/2020/11/index.html","012a88387d044b7bcfa9671475e984a5"],["/archives/2020/12/index.html","7935008bb99430d6450b84f1433e0587"],["/archives/2020/index.html","f38e0393ad695a899f33d08a670d8df7"],["/archives/2020/page/2/index.html","3160297efe13f28ac0e08cdfad29b6f8"],["/archives/2020/page/3/index.html","1b1ae626801bbbdf198c410e29bcab22"],["/archives/2021/04/index.html","87c100204ce7b02fdff52f8a521b9bd1"],["/archives/2021/05/index.html","2f6a875bc55d2c2edc0eaa28b7de8a8c"],["/archives/2021/06/index.html","970af07686dc49b9e4512f6629864303"],["/archives/2021/06/page/2/index.html","6d2f9fefee6dfc8ee1344755cad86796"],["/archives/2021/07/index.html","90d0ab63b50efe90e29e71dabb3a2f39"],["/archives/2021/07/page/2/index.html","bf4316ea9d3977eab9cffc07bfe02cf1"],["/archives/2021/07/page/3/index.html","929a5e51a1df074b2c8d077452fdb7d8"],["/archives/2021/08/index.html","e1a0b95d39e55a7e30e8b708eda53120"],["/archives/2021/09/index.html","9b0314b02a0dcdf29c58e16dab4d3ffc"],["/archives/2021/10/index.html","bd0c520fd68c2ec27c89a2e03097fc03"],["/archives/2021/11/index.html","a25d99789aaf28d1f68359891f8afb39"],["/archives/2021/12/index.html","1d48835e0c23099ccb06445595b6f39a"],["/archives/2021/index.html","5767089aab428ae78fd809643fbc4295"],["/archives/2021/page/2/index.html","c6429cd83425bffcad065d363ff08c6e"],["/archives/2021/page/3/index.html","045ecb06e80f16879e3f07be6e600f17"],["/archives/2021/page/4/index.html","865aae9f32800e2334a70f77df52158a"],["/archives/2021/page/5/index.html","6ad84a3b4aeacc3a956be3e5269f5746"],["/archives/2021/page/6/index.html","b42a4756b3f8a3879820a03f206800a5"],["/archives/2021/page/7/index.html","d2dd5a09548bcc7870990bdf463e459e"],["/archives/2022/01/index.html","390881a85f0c123d1154b30b97a8355d"],["/archives/2022/02/index.html","79dc7d363e8824aaf50ec3251b3ee868"],["/archives/2022/03/index.html","af57148b85d3284f8e5cb08339a1f87d"],["/archives/2022/04/index.html","7151d6342eb17fcdbf998f33d69b95a3"],["/archives/2022/05/index.html","981a7334d3cb8375f74d6deb352acf35"],["/archives/2022/06/index.html","1cebe55bedb356c55f1e3590999b7242"],["/archives/2022/07/index.html","1f400775e369d8385c7f5a91dc0c18e6"],["/archives/2022/07/page/2/index.html","6d21e5c30ea4c8b7f12deb24cba8e791"],["/archives/2022/08/index.html","edc9c56e36564ad2ea72247b1ce234e0"],["/archives/2022/11/index.html","3fbc6f40161648b6052dda15c92f9afb"],["/archives/2022/12/index.html","2464a403696945742bfaf2d6324680be"],["/archives/2022/index.html","5fbac44c4510c86891077c39a601f7f6"],["/archives/2022/page/2/index.html","41be6e2ff78524634bacfb9454d3fefa"],["/archives/2022/page/3/index.html","7bb20593c122a1ce19ffb9e2125b7772"],["/archives/2022/page/4/index.html","5c536b36b9eb1e0cb7942f7484434f53"],["/archives/2022/page/5/index.html","1b286b6ad4b6775454414da3228df069"],["/archives/index.html","4326c966c8ae3a634e4cb8417f7bacb4"],["/archives/page/10/index.html","68f176d6e07bcce0750f1d6a68ad9c2c"],["/archives/page/11/index.html","df79c34232f4c570eedc6086394adb8b"],["/archives/page/12/index.html","18fb0d86194d0d12f88c50c3aa619245"],["/archives/page/13/index.html","a54e319939e424dfad5085d530bea756"],["/archives/page/14/index.html","e84c57a12b3284f0bb7f1f343f9c2184"],["/archives/page/15/index.html","1a791bc83753f625b99b6a2bceee8700"],["/archives/page/2/index.html","ed63f18a4081e2724413a4a72edd03e2"],["/archives/page/3/index.html","182ed2383b4cc3debe64507dc0e316e7"],["/archives/page/4/index.html","b508a4517da833e3110d406088fa4d42"],["/archives/page/5/index.html","7e2e60be26ce004401f63b9462105e9e"],["/archives/page/6/index.html","776006acc52e522c2ef910e02ab5059b"],["/archives/page/7/index.html","13c164f7b86a3b2ba65da8340f5d02e5"],["/archives/page/8/index.html","8ded02df6f797441c108a71869999fa0"],["/archives/page/9/index.html","a2f4c8111de8a74999769c43f9b3e0ac"],["/categories/Algorithm/index.html","4543a0f0d6954be8808099a5370b5a7d"],["/categories/Review/index.html","c6be60e85ae03f637c115c979b6b4d1a"],["/categories/Review/page/10/index.html","51abd8d90c04a461fcb21b54cdc0a9d1"],["/categories/Review/page/11/index.html","be339b90e7b176cf27e65c480645d879"],["/categories/Review/page/12/index.html","da37bd4c911c99dd78f4f0f1fbf08681"],["/categories/Review/page/13/index.html","50c79098d4659086df69a4b30e3b4f0a"],["/categories/Review/page/2/index.html","3614cfb89cf5f1562ec73db1f8f0da63"],["/categories/Review/page/3/index.html","c47bef254bda6176717f7f228ebb505e"],["/categories/Review/page/4/index.html","e9a62a2c513169bb2c42dfe2dc7df71c"],["/categories/Review/page/5/index.html","55e3c8146e8ccee54c1af5a05a18e932"],["/categories/Review/page/6/index.html","810a8e36ffb0bce2521839bc9007bbe2"],["/categories/Review/page/7/index.html","cf9d62893f82bbb40c731bdfcbc46a38"],["/categories/Review/page/8/index.html","078e130440765c6c5393f2dba2bdc273"],["/categories/Review/page/9/index.html","357c0b20e7c2567e41c81cf7119e7059"],["/categories/index.html","7d317b00aec19ae3b2ed600a9e39cefb"],["/categories/日本語/index.html","889fe40771e892470544a7035e7f7233"],["/categories/日本語/page/2/index.html","55f8c1eb8cd417a6b8dd28bd324eb5ff"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8771a4e5eafd7b6c3c063dee3e564883"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","dbc7c0fec265073506a36e71dc29f557"],["/page/10/index.html","aa539076b8c9d0ede64e69af8a86af3e"],["/page/11/index.html","bd6639a0313e35950d6e94ae7f596357"],["/page/12/index.html","6f7e1217ae454b22d397c154e4d45985"],["/page/13/index.html","57927669a0789f680b747993dfa6e5fc"],["/page/14/index.html","69a4a383e28a367776cd0a832e583e61"],["/page/15/index.html","cf883019dc0e31f0d19bba42bd3de823"],["/page/2/index.html","448cd7491a0d24fc20abfdf36d8f6f29"],["/page/3/index.html","ee39021a52ca0d72ca689cdacf08a68c"],["/page/4/index.html","85a4568daebe8c239385e3d45f4877e1"],["/page/5/index.html","5409bdcfb9663e270b8496429f3a805e"],["/page/6/index.html","8c15800ad09d7a4aba8bfd5ee96ab4c5"],["/page/7/index.html","00896854a94c9600af29a5fe34f329bf"],["/page/8/index.html","66f28c8646c18cc457f5ce12e07b1a53"],["/page/9/index.html","38629012f6e41689691fb8f3ac046a53"],["/sw-register.js","949e0e0c635488f9ae6059db3a1c76c4"],["/tags/10分作品/index.html","a6ace6fa3cef8e5962649c138464bfdf"],["/tags/3分作品/index.html","13acc6640df1acb70ff02030dc65d3c4"],["/tags/4分作品/index.html","f2d9c194f3c2fce606344dca06636324"],["/tags/5分作品/index.html","4d3f2001c58deea2f7a2deb8167c6787"],["/tags/6分作品/index.html","716d6b7ebedc61e94b195b99c697f811"],["/tags/6分作品/page/2/index.html","959260e359ded4c32d8e64d30fd6a4a4"],["/tags/6分作品/page/3/index.html","d43268b3d931ec6fda0d853ef0531246"],["/tags/7分作品/index.html","99fa302754ec6d44c28e2f46d8e54237"],["/tags/7分作品/page/2/index.html","9583cb26d117dfb5b7b9ed2f913e7b18"],["/tags/7分作品/page/3/index.html","fee21cd6acdd710c94cdd85863076811"],["/tags/7分作品/page/4/index.html","d0a0ad17822441c092b24c57cd16333b"],["/tags/8分作品/index.html","33a7511f18ad5e1c2fbb84b38f01e918"],["/tags/8分作品/page/2/index.html","32d37506b7748e7e9b623f12b13fdb7d"],["/tags/8分作品/page/3/index.html","616327a641952eb12b8bc67beb25dc87"],["/tags/8分作品/page/4/index.html","a9e2d6deaf591d65308df32ec2d031c3"],["/tags/8分作品/page/5/index.html","dbcc05cfd7871bc335bc418de00c2c06"],["/tags/9分作品/index.html","c22f508462e6e20eb87c6821983adaca"],["/tags/index.html","1fb7fb28d740e64aa28e0007eb535f4d"],["/tags/アボガド６/index.html","16735c9608549b2a10e4e917f1cedb51"],["/tags/三秋縋/index.html","c18e351b63c0124bbecbd2270d6b6c0d"],["/tags/二宮敦人/index.html","439b685f3f3bebbfe77a7c82c8a29c48"],["/tags/住野夜/index.html","ebe082e45694131a64a4966008c498e1"],["/tags/佐野徹夜/index.html","1813c983a0973450e6583beba7cdc474"],["/tags/動畫/index.html","b4a221d226b43c8801e36a917574f6d6"],["/tags/動畫/page/2/index.html","4d937bdafc3fdd4f8cbd3d9ac363b4dc"],["/tags/動畫/page/3/index.html","84f3adeea81e6f638805589f094f8dc1"],["/tags/動畫/page/4/index.html","00211d8e15756b218b0c6468835b3562"],["/tags/啞鳴/index.html","312ec15d2503e3d61a022f4bb13d81d5"],["/tags/天澤夏月/index.html","2b10f00b0d7c94635ec5b02cbad0359c"],["/tags/學習/index.html","f331be1b1153efe32444160f18687c67"],["/tags/學習/page/2/index.html","2f6d9394583653809c111d96ed09fbef"],["/tags/宮崎駿/index.html","b7f5933d905be71915074b8a4e4f64ab"],["/tags/小說/index.html","f58a098ba536f532013a81ecc0aec026"],["/tags/小說/page/2/index.html","7348e01c8b9527189d4ec626e81914d5"],["/tags/小說/page/3/index.html","d79c15959b2ca0ba688d2636593da4c5"],["/tags/小說/page/4/index.html","e7f8ec6541af117c7b87e755a4793b14"],["/tags/小說/page/5/index.html","c98bc33100052c40f30f7698a2376915"],["/tags/小說/page/6/index.html","b88363db3fbb67613a888c6d3e523383"],["/tags/小說/page/7/index.html","2e1a38a8464c31843812ea3cc66e2d97"],["/tags/志茂文彥/index.html","99aa0d10b51ca9069d5a5bbc5e06d382"],["/tags/斜線堂有紀/index.html","8cf2bfba788b1836b9ce0ccbdda70e27"],["/tags/漫畫/index.html","c6a9ed8ad89b49ee77b1ca9dcfcd8fc3"],["/tags/葦舟ナツ/index.html","7f864102e7b31349e61bfa3215a6cafc"],["/tags/藤萬留/index.html","23776915c38b0cf0465296eff003b1e4"],["/tags/電影/index.html","2a82b5bfad32c8db08753b828b257cea"],["/tags/電影/page/2/index.html","d50c7fd82b83dbe4d11db94b6dc79b33"]];
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
