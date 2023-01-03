/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","cb726c47342911a2cbbf01aae3da7032"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","a799fd4469fe9be87d720d37a02ec39f"],["/2019/12/25/Review/無法計算的青春/index.html","0534ea8068d35510c2592aa4b65ffab8"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","660a3d33b4b4a171e4b3c8936289aa85"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","657301326b8d74a04beff002a1db3940"],["/2020/01/19/Review/下雨天，不上學/index.html","972213e91adbd0716dc6bd95c6305a23"],["/2020/01/26/Review/三日間的幸福/index.html","83a129c7072235dd6405ed5579cef3cb"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a8577b020ad102ec491f79245b4225bf"],["/2020/02/09/Review/青春期超感應/index.html","bfd526178bc0dc105c827ec586117a86"],["/2020/02/15/Review/又做了，相同的夢/index.html","b07bc13fac110493001aadd260955cba"],["/2020/02/22/Review/回憶當鋪/index.html","7e563e5a02fde7802e58a73cc5208497"],["/2020/03/22/Review/不適合自殺的季節/index.html","443afda218091829b4dfb06b097d3253"],["/2020/04/26/Review/我們都無法成為大人/index.html","2c729b7e432643ac775ef19470f161c6"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","4fe68c0d23d3528d177bdda6eef5834a"],["/2020/05/17/Review/人間失格/index.html","6ffe0722ceb6ffe3835635df26575fd3"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","6788e17d064434d0e02ab8dbcd1be8fe"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","d851993c2590da48e14a10cf89b679de"],["/2020/08/01/Review/銀河鐵道之夜/index.html","4f7d1b6c11e6ca9d33041c25e52a54ee"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","5f61452a3a9c3430fce1acb8b5d5838f"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d978a88d91f649db2844fda8c5bda3b8"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","d3cf4252efcd0cc5748a71665ad136dd"],["/2020/09/13/Review/羅生門/index.html","4e7a4f28dbc215af5b9a3b8e27475d38"],["/2020/09/20/Review/闇夜的怪物/index.html","59a9cbcfa96093d20180e979416aea94"],["/2020/09/27/Review/14歲，明日的課表/index.html","993a518539b0c5dd11db96cbb2c2215a"],["/2020/10/04/Review/致十年後的你/index.html","dd92ebb80258a0a49d14a4b2f2051a0a"],["/2020/11/08/Review/滅絕之園/index.html","94cfc27139c564065f9830d475cc6676"],["/2020/11/15/Review/將愛拒於門外/index.html","45cd1cea9b9bb6fdaa6fe369b95aa0d3"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","da71c6f5aaa7eebaa75ca071a236fb6d"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","960abf4697fec287339763c7121dda91"],["/2021/04/22/Review/道印/index.html","2b495031c4dc2ac119316cb1d51436db"],["/2021/05/03/Review/戀入膏肓/index.html","8479df9df5eccd71fb4ea6cc5916127d"],["/2021/05/10/Review/Dice/index.html","ffd821bca99dee4c46a184d3fcab51bf"],["/2021/05/15/Review/魔女之旅/index.html","56be825268975baa172999b94e74dfe9"],["/2021/05/28/Review/戀愛寄生蟲/index.html","c19c8ff72ba57d58d805499d7284100e"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","c2d42ed5c87c7565ef641d103a3513c9"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","d0be7e53ae729d92100759614c09099b"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","5b2479ac5c6110832117f83187adeb2e"],["/2021/06/05/Review/流浪的月/index.html","edcc11855fee607ca56ac31afe30c518"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","4573bde57d30207558898ec827407660"],["/2021/06/13/Review/第一人稱單數/index.html","c5cbd60ff51ace44c3260e4f5a870481"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","6d5ba0e2140ff23fbd8ab46026cb2454"],["/2021/06/16/Review/願你幸福/index.html","f49d14bc2bb2fa896f7a4bce7b4e2b10"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","054f3c93a2739b69d3e921633bbc1eb3"],["/2021/06/21/Review/神隱少女/index.html","9d4dfe37ebf28b70188725875082cce5"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","ed9febe63b1bb3f44c51fad418858e38"],["/2021/06/23/Review/天空之城/index.html","a9e396393823fe131de162c9c7919ca6"],["/2021/06/24/Review/魔女宅急便/index.html","e33b676a40d8fd1a0ce92a2e1144dc03"],["/2021/06/25/Review/借物少女艾利緹/index.html","fa7c82a0c11c12dd56149fcadcc78b62"],["/2021/06/26/Review/魔法公主/index.html","926f581ced796f88b295e9d3443c361d"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","f745ba1b1e524c40a088957568ad3c22"],["/2021/07/04/Review/飛雪與劍/index.html","c449429bd7eaba41c6689fab61c4cf7e"],["/2021/07/09/Review/地球防衛少年/index.html","5535736ac6fca4c4fe335f35bd9e7132"],["/2021/07/12/Review/Angel Beats!/index.html","e8dabb4fbd0b582f3873a71858755491"],["/2021/07/13/Review/Clannad/index.html","dedea9579f581930c192e9c127df601a"],["/2021/07/15/Review/AIR/index.html","d580f23194c8fcf4ef7bc82bf4125c5b"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","f93f6884c8d1a68fc1aaa0442c8b47ca"],["/2021/07/15/Review/螢火之森/index.html","61477ab76a9a022781d4b614a8f7721d"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","9bc447a436f5fcd24608365b786246c6"],["/2021/07/17/Review/奇蛋物語/index.html","34f01c4222e8790b7607bad58c5cf871"],["/2021/07/18/Review/Vivy/index.html","455f72466601b53db8471244258e2478"],["/2021/07/18/Review/請妳消失吧/index.html","5dbcaac5f9df4fe57e9871007443e727"],["/2021/07/19/Review/漣漪的夜晚/index.html","8939b957c338241e63026592b1dac29f"],["/2021/07/20/Review/月色真美/index.html","8af73f8796ba0241c3ad2cbaf7b0191c"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","42d51d17c0cbcb71cb5755b2fd8af003"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","4b67be2cabb1e9dbca384485cf6e850a"],["/2021/07/22/Review/罪惡王冠/index.html","e416dd83009e3fc7955c1a163189e33e"],["/2021/07/23/Review/弱角友崎同學/index.html","0150277a88ebbade106478b6fff0ad54"],["/2021/07/23/Review/惡之教程/index.html","650b2ec0b4165eb7d7c1a0b7feaf47f2"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","b4367aa4d6962b6f1a03ab20dd7f43d1"],["/2021/07/25/Review/魔王勇者/index.html","4dc6240d5f0661b9c2285dffd8dd066f"],["/2021/07/27/Review/一年A班的怪物/index.html","f37c0ce9d4237ba240e1617abc72298f"],["/2021/07/27/Review/奇巧計程車/index.html","5e5c0244a1edf95c3f467d7a72073dd3"],["/2021/07/27/Review/專情的碧池學妹/index.html","0d6b416b40381daa8bfaf363391d7f41"],["/2021/07/29/Review/只有我不存在的城市/index.html","0a9300b62ab0bdc6bd263b454b04ce8a"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","eaeeac89d2cd5afe7daae238a97214eb"],["/2021/07/30/Review/可塑性記憶/index.html","cb70710968162982ca5486f108615319"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","2bc65a98328cafc276791f26db8695f0"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","c6e0f7ae4ccbfade6faf6165ee6fe8ff"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","78433a63eda0866e760839db318218e6"],["/2021/08/25/Review/清戀/index.html","c0531ee51d712434f0b06e9ea33ff5c7"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","4c5f8efbf1d0fb762e260680497c8f50"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","1f9e2e541590b77676e83eb1d09a1eca"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","480775d4b1e86a882ef8caabd70f7c36"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","98a63dee5d1b5df8ecddde87d445fca5"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","fd9389f0b7395c6d076af8b6f765d584"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","3e8bcf9df811b0d816f8cf7424673e27"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","944625ad5aaf3c6988dfd848016abbaa"],["/2021/10/16/Review/龍與雀斑公主/index.html","d3e07f3feed4924fa553501a45f79d75"],["/2021/10/19/Review/孤狼不想開後宮/index.html","48f61777927dd5f004bbfae9540692df"],["/2021/11/13/Review/徹夜之歌/index.html","a159473f3f49e30590b5bad9cedb3815"],["/2021/11/24/Review/武煉巔峰/index.html","32db44c4e32239cf5293f31cc7df3be8"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","295e1f5e8ff032a4a9f925d97a462171"],["/2022/01/28/Review/神醫凰后/index.html","f435354fa31527a78b7db0e27a516b5c"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","fd7902ce8b664c773df5cfd4d0e91779"],["/2022/02/13/Review/夏日幽靈/index.html","4d6b6b85a14c82a01b552691eef93f9b"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","2a275d760dc0aea7ce145a8f92b8e051"],["/2022/02/26/Review/賽馬娘/index.html","58940f057efc00dfc3640a8a12f36392"],["/2022/02/27/Review/大欺詐師/index.html","008568caed9fae59cfad6106757a1cc1"],["/2022/02/28/Review/前輩有夠煩/index.html","4115e4571caf5d7ab650e14ba34c4f41"],["/2022/02/28/Review/碧藍之海/index.html","645acd2b7cffa3b22080b3fdeae7229c"],["/2022/03/05/Review/落第騎士英雄譚/index.html","9cdccbd87b5b03cf569c5a2265d89c3d"],["/2022/03/06/Review/Another/index.html","384b23ba51a6dc3e248b2de1f6668d5a"],["/2022/03/06/Review/入間同學入魔了/index.html","3ecfe5b4231d9f0a12cbd2ecb6a9ecf5"],["/2022/03/18/Review/再見宣言/index.html","fbd95464d18d1eb5186d2e25ae6727eb"],["/2022/03/23/Review/生若冬花的妳/index.html","738c393b616ee762f86c793d262a6e9d"],["/2022/03/25/Review/天之弱/index.html","1697fb863fe0ca7d8737d12468ecee37"],["/2022/03/31/Review/滅了天道之後轉生/index.html","4e89c44bc76f3f62bb7eb4ea1c224380"],["/2022/04/30/Review/泡泡/index.html","24066159f978b58d90ed464214a4fac2"],["/2022/05/04/Programming/Dynamic Programming/index.html","2f83841cd0adfd505e316113c7bfcf0e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","4115d4a1dc55c749188b7441d35cf9bd"],["/2022/06/13/Review/偵探已經，死了/index.html","3dd2ee0fce73000ef75e95ff6b8219d9"],["/2022/06/14/Review/黑色子彈/index.html","a991cbbc7079f7da6e24ba9328123dce"],["/2022/06/15/Review/黑白來看守所/index.html","7e9072c3b0bc88af61fc5672ee5f545b"],["/2022/06/16/Review/虛構推理/index.html","4ab7c5113e3d2e386f41678da63878a6"],["/2022/06/17/Review/戀愛與謊言/index.html","7919e022074040d4af9134cac8f38e9e"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","8cb6ace56ac893f3057fa7f23029d052"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","5addcda367805e2a38bf3dc5c4104ca9"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","16648b28b760d83a9fab988f0b1fb0c2"],["/2022/07/03/Review/Hello World/index.html","94f2cddab0c7ad97f9d02eb61905e68a"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","98b943b21f4f44e5d55d55f0abf61291"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","6055cc7a33a5cd4d276660640bba5657"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","5b64abb6eb45a5f760fce47c0293d674"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","39303dcb519e1c8db0b2348127572d5f"],["/2022/07/16/Japanese/動詞分類/index.html","617752ba39f55057f7afcf808e4820be"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","cd9ec147ff69263634851c9597524549"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","22ed32ae646f396fa0860645816b8adf"],["/2022/07/17/Japanese/音便/index.html","6c89f34877eef83e84d7c2db91e816ba"],["/2022/07/18/Japanese/動詞 時態變化/index.html","33c5a3c6573bff39cfe4c697c0cc7a86"],["/2022/07/19/Japanese/助詞用法整理1/index.html","81d162caaddb578cf893b6ddbe053faa"],["/2022/07/26/Japanese/助詞用法整理2/index.html","f9563ae0f2efbfb71da95db055980a5b"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","26d681b7f4e165ae7df44559657e4d3c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","fc62190417fe502f7a7ec4d28a844301"],["/2022/07/30/Japanese/疑問詞/index.html","9e8afcf7ce676dbd6aef930512c9578a"],["/2022/07/31/Japanese/助詞用法整理3/index.html","6bfadb03db3d309f408c0f3c65e6c218"],["/2022/08/02/Japanese/副詞整理/index.html","010bdb7170bcf8e2b53ec72ec14d354c"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","fa22131686b6ed9e217c28b5e2a4b5bd"],["/2022/11/04/Programming/Data Structure/index.html","468bcffb5a2b989b53472403e23834ef"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","694fa3160ce227df2fefa55c21c7b86d"],["/2022/11/22/Review/組長女兒與保姆/index.html","2037cc2d992980e1ce39bb6157fa50c3"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","8f337e857e2503daa07cf5e790eaa366"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","daa93d6a76b299ed3acb1a5badb6fe11"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","78a4e799cd94fec484ed7c4b8f9b68f7"],["/2023/01/01/Review/あの夏が飽和する/index.html","27ba7bc170609509227057314039faa6"],["/2023/01/02/Review/孤獨搖滾/index.html","bbe0ffdd9cf8b3fff053a4a5c5353442"],["/404.html","2ee53e8ac28002b4e7efc974134d7e0d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","6103998f442b4e57afff857daa92e1b9"],["/archives/2019/11/index.html","101930993cc1fe3e7ad73b478aba45b5"],["/archives/2019/12/index.html","b93075e93c33a84721cbf1a79019fb48"],["/archives/2019/index.html","d409ec7a913588ef20e282f8c6bd2a12"],["/archives/2020/01/index.html","9c0d48d19f0541f263f6368b39533043"],["/archives/2020/02/index.html","ab677cb8b9541a08ff96d8c4bdc5c1b4"],["/archives/2020/03/index.html","0b107d8eb79d3732d9356dbc5ec6e3bc"],["/archives/2020/04/index.html","f05c798f570c4fb5f2ab636aa5d19b6f"],["/archives/2020/05/index.html","b9b0fd1247e443b2e99d4c78e2cd10b2"],["/archives/2020/07/index.html","5a3f960627147a9979b2eda36b226a43"],["/archives/2020/08/index.html","4fb73984e3c257c1d7195dba3341ca18"],["/archives/2020/09/index.html","79961fd1c82ad781b1f0631f4d0c4a0e"],["/archives/2020/10/index.html","22f93c1ff9ea0c85a852aeaa0e6d2101"],["/archives/2020/11/index.html","5082d320b09f78178a2355bbaa799b91"],["/archives/2020/12/index.html","749847e165c6611ae7efdde7348af59c"],["/archives/2020/index.html","38f30fe4b4e9ac4bfd048659ede43046"],["/archives/2020/page/2/index.html","7abc65b1884a225194032e80a1da38ce"],["/archives/2020/page/3/index.html","b2f2c99d9c85eb96b31e091b636ac1f3"],["/archives/2021/04/index.html","67517d54314b71f4b5b7ac09c37e02b4"],["/archives/2021/05/index.html","90faa3ae9d30ab1650635f657848304e"],["/archives/2021/06/index.html","74cd5f57bbb712f3391e9d09d3a039a0"],["/archives/2021/06/page/2/index.html","a65f90be666fea34fd7ad7c20036b4a5"],["/archives/2021/07/index.html","fcf59b23922668f5369a32443e49cbc1"],["/archives/2021/07/page/2/index.html","8d7322547572498dc5d91955ac010d3e"],["/archives/2021/07/page/3/index.html","3f4a4ecd2086f25edd003bcb3d871fc2"],["/archives/2021/08/index.html","5767a8f483b0d841dc51d8ef39e6215b"],["/archives/2021/09/index.html","792de78166f5a865900aae36140dd546"],["/archives/2021/10/index.html","efc79107bae1d67809a4ac441975c8fc"],["/archives/2021/11/index.html","d5ada0f17751d8ae55daf37795925988"],["/archives/2021/12/index.html","af9e539ebd168ce13eacaf8a1ab55b17"],["/archives/2021/index.html","90c225210fc534b3f28c69f48074aada"],["/archives/2021/page/2/index.html","0399c0fe154ecc8147bbf425df742bc3"],["/archives/2021/page/3/index.html","7945ca39f639261c213a1ecf5a95b2ee"],["/archives/2021/page/4/index.html","cc4c3ff067094758aef8d74fe0565bec"],["/archives/2021/page/5/index.html","11810527812bbf3f31fb557bb29dacf9"],["/archives/2021/page/6/index.html","4652fd249224fd7f61739e73b633d1d0"],["/archives/2021/page/7/index.html","ce1dc44abe257019ef15d8b6d5cc1d47"],["/archives/2022/01/index.html","1fb3d69859037bdbedfa8a86c6fbe3ab"],["/archives/2022/02/index.html","737df6254e974187e7c99f882d757352"],["/archives/2022/03/index.html","ff624efd76138b3d17f816f98b376225"],["/archives/2022/04/index.html","e12b483f88eb32402d4914944edde614"],["/archives/2022/05/index.html","e98750a9c9316b34fb01da2c8c058b1b"],["/archives/2022/06/index.html","1d20bdcb4fd7df695a4461f804a4a947"],["/archives/2022/07/index.html","957a58947875b5930b8e2874083344d0"],["/archives/2022/07/page/2/index.html","a656b63566c3f10c12a9d6f9d3c105a8"],["/archives/2022/08/index.html","50074df4b406100e9108376e01b0a799"],["/archives/2022/11/index.html","73a7b4502afe0e8663367cee9c61e70c"],["/archives/2022/12/index.html","8d83c9027b4f2214718bbe6cbc426801"],["/archives/2022/index.html","c8bbaf5531267aaa9f50873f8613522c"],["/archives/2022/page/2/index.html","0bdb27f1f9a946d247305e4407ceacc2"],["/archives/2022/page/3/index.html","d85735109ea50a52842dc719078ada80"],["/archives/2022/page/4/index.html","d68e585bd34fd7f72b3964fa65ea5041"],["/archives/2022/page/5/index.html","779f5de0175ac3aa2e6ec566ff5fb7a1"],["/archives/2023/01/index.html","5af1a1ef3826ee8f1d820234dd7c34a1"],["/archives/2023/index.html","771b80e537bf616762bd5b5ba0b76e76"],["/archives/index.html","f491f205fa978d705684b879412c86a5"],["/archives/page/10/index.html","27521c72cddf16d7492902d52f83fb20"],["/archives/page/11/index.html","0d1e9ef43f9a97a4f14ce1b2b98afa85"],["/archives/page/12/index.html","1ac193de418438ecf6f4ad2c80c6a596"],["/archives/page/13/index.html","36e5ca34841851af005be1ebbf964280"],["/archives/page/14/index.html","8f568bed962ac350e27cdba9d46f509f"],["/archives/page/15/index.html","0620e1e223036b56cf4441211710e4ed"],["/archives/page/2/index.html","114e09e93ac104f1d9dce8d93f9fb46c"],["/archives/page/3/index.html","8bc8e995f46ddcdd925337dcec9916b1"],["/archives/page/4/index.html","5791375078117db47217bc3e9fee414c"],["/archives/page/5/index.html","5b38e697cd6ed813648602b09327e693"],["/archives/page/6/index.html","0bd419deee1494b31b7ede661d0791a5"],["/archives/page/7/index.html","4e8d1172c8751d2072a8f6eea037696a"],["/archives/page/8/index.html","107d4e853efc3e54967a2cfee5a9873a"],["/archives/page/9/index.html","7fedbb628defecffbccd89d9deaa6f77"],["/categories/Programming/index.html","294640839633738e5ea7ac5d0532183b"],["/categories/Review/index.html","f36ec4aea3a36d01aaa68a0ebc303e60"],["/categories/Review/page/10/index.html","ebb4bb99070645d8dc05a86bc640dda2"],["/categories/Review/page/11/index.html","01295bc93701d42b99ffd8813cdf5509"],["/categories/Review/page/12/index.html","aa011086dddeac08f353e22879bcaeeb"],["/categories/Review/page/13/index.html","36779e0f25727a7a6261686b740ec773"],["/categories/Review/page/2/index.html","3059229a079e5629635774a06e570682"],["/categories/Review/page/3/index.html","8587b9eab2032c44dd6e4a869871c016"],["/categories/Review/page/4/index.html","1e5fb26e2f2430dd80bc2bb1656fc126"],["/categories/Review/page/5/index.html","a2738f0f18ec64c02531f6b6a5636e95"],["/categories/Review/page/6/index.html","9debaf8ad17fef302200c6ea72d145cc"],["/categories/Review/page/7/index.html","02cd08cf51c9002b57bbe1410db85e41"],["/categories/Review/page/8/index.html","19b1ea662add161cb04c08d24fd1fc9f"],["/categories/Review/page/9/index.html","407e18774cbf1e33e9c2aaf279992c36"],["/categories/index.html","cdafcaaec187c4724d1007cf42eb5dd6"],["/categories/日本語/index.html","ac28df709a89688290f3de23b372927c"],["/categories/日本語/page/2/index.html","5992642f8aaa4e6fcd970c4188a132ae"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bd38c88c7625acbd332a7e9648810926"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","5e478765a13ca40483aa2e2408ac5171"],["/page/10/index.html","c40926c7edce72eca87f9482d31b99de"],["/page/11/index.html","6e412d1d111fd5ea5c7f0404e8d786e6"],["/page/12/index.html","7ff5747efa18c4a041105957b513282b"],["/page/13/index.html","e21fff43cb538923962d492b8fd20e37"],["/page/14/index.html","e426cd016caca2f80917035ff4a92d3c"],["/page/15/index.html","83dc204e6cd5a7d4a058bc87a4a8d25d"],["/page/2/index.html","298cfc306c459ad7619b662706aae8a1"],["/page/3/index.html","0a71c375dc208de4935cb405080eac73"],["/page/4/index.html","91006c22295414608be0a384aefd3195"],["/page/5/index.html","9521d8edcf88c3f7202e8fbabf0c6134"],["/page/6/index.html","f15c5d118506de3c2f5cab53df157f84"],["/page/7/index.html","3f1de448e322b109adf34f74f85e7c50"],["/page/8/index.html","b8d2c14d95b35680467557892b22740c"],["/page/9/index.html","047cc107eaeed491d9042daf671204b8"],["/sw-register.js","bd72909d0428be0cebc8635d251e01fc"],["/tags/10分作品/index.html","d37a15ff50ac0925a248a8c267abe64b"],["/tags/3分作品/index.html","b4e91945f0e07cb6d7df1b586a05d694"],["/tags/4分作品/index.html","df00295d3d35b2465ae5df767571381b"],["/tags/5分作品/index.html","8a2046971e471b94984621009ce2888f"],["/tags/6分作品/index.html","ca87e12a550e46259d163376735e165f"],["/tags/6分作品/page/2/index.html","f5712ad22959c69ebc5e8945e0cead53"],["/tags/6分作品/page/3/index.html","081fe9d0e46af2a603cc693230741506"],["/tags/7分作品/index.html","6daa22bdcb234247d140a0d6f44a6f3c"],["/tags/7分作品/page/2/index.html","78d0e94361dad8d3031081f607c4aa0b"],["/tags/7分作品/page/3/index.html","b24d2a4a02f0095355ab971bbc63b787"],["/tags/7分作品/page/4/index.html","af26d285e11ea9dfa401e6d02803bc76"],["/tags/8分作品/index.html","85f202fc82b3a255f86e307f2954ed24"],["/tags/8分作品/page/2/index.html","daf760612b7e7c07b04d24dd2f6f81b9"],["/tags/8分作品/page/3/index.html","f7e3939fb4f66d5b751f0b5de1aca0d8"],["/tags/8分作品/page/4/index.html","b0c6b5de43e39d7a33c86de1873de03b"],["/tags/8分作品/page/5/index.html","12260477bf613e5deb2a8fb5ebc3a0fd"],["/tags/9分作品/index.html","6a7b3a7c15ecef5ab235e7dfedc598f5"],["/tags/N5難度/index.html","547030e40d344a18ed7fbb9c163e14a2"],["/tags/N5難度/page/2/index.html","5421d11fc9d78ff1d055bdbc9112a356"],["/tags/index.html","0b738e40595c13d95dfba442dc890994"],["/tags/アボガド６/index.html","e736b8ed892a3e022185a0787d5b3ed6"],["/tags/三秋縋/index.html","a7c9796f05ac313a34f2269c2be8a479"],["/tags/中國武俠/index.html","277ad2fcf2e3b310df24e82d2d08bef0"],["/tags/中國言情/index.html","0e29b316c49dbf8d2efc64406b8042c0"],["/tags/二宮敦人/index.html","aed224f63d1cca350e246d2370829fdb"],["/tags/人性/index.html","a06ab2fa4ccda7fb59eae2a9dd9a93e5"],["/tags/人際/index.html","35707d15bb9ba367d9f6106fa694169e"],["/tags/住野夜/index.html","c4ba8b4bbe7da16b830e58196b24de48"],["/tags/佐野徹夜/index.html","24f33771e8b7cf54c9266cad28acf526"],["/tags/努力/index.html","f20db30aa282905237d75f914342d249"],["/tags/動畫/index.html","6b85bd3fecabee0b0e8794a896518485"],["/tags/動畫/page/2/index.html","afae5777b9fc96fcc78c335090249db5"],["/tags/動畫/page/3/index.html","3c8041b612822ff865c06a69c9388c1d"],["/tags/動畫/page/4/index.html","caca44b0353eb1a3282bba39058dc7e0"],["/tags/原諒/index.html","dc4ee6ef739d2d9b0e2f22c4c39f1e17"],["/tags/反烏托邦/index.html","ceb97cf7ef710e6629a73b2357036500"],["/tags/啞鳴/index.html","7fe65fc4b3af0344ed51036488bef9cc"],["/tags/喜劇/index.html","f675aa37aa1243d972e7fd2247bee579"],["/tags/夢想/index.html","c6f68891b5c396b3dd23fd9cf47e3c15"],["/tags/天澤夏月/index.html","bb09c4c8a548dc89ef90926b6322b846"],["/tags/學習/index.html","690fa865788687055dea421a9f5a3bec"],["/tags/學習/page/2/index.html","983470fb6f1d429a770c34ad1e4e87eb"],["/tags/宮崎駿/index.html","ccece7f2d30979e9f886bda0c50c5b6f"],["/tags/小說/index.html","959b613e29880bed8e19ed84087389bb"],["/tags/小說/page/2/index.html","ea0cd47707b0b7f5fa1b77c9c3417e56"],["/tags/小說/page/3/index.html","4a58d976daea98e15a0cce75115a85c5"],["/tags/小說/page/4/index.html","8096652fb66fa7ce8f052569fe0496f7"],["/tags/小說/page/5/index.html","12855d26b543554441705ec8d6909db5"],["/tags/小說/page/6/index.html","a08e1d766791653dc82299fa981deca2"],["/tags/小說/page/7/index.html","054a669e5a0dbc2c70c3f954e48fca24"],["/tags/平淡生活/index.html","68fcd42807bfef541c5b42f9f8392fa3"],["/tags/幸福/index.html","9d0c6af4bbbe25abd8711dba0b088e73"],["/tags/志茂文彥/index.html","88e3699abd90bfb09ea893b5fdd1bb8e"],["/tags/愛情/index.html","56e19df8865e04db5b8c9513a6afe678"],["/tags/愛情/page/2/index.html","b540c2e1ba38dbb231561160e7afa93d"],["/tags/愛情/page/3/index.html","cc26e821a4eeb4c2d0da4c86e0bb416c"],["/tags/感動/index.html","044f143fad5b9ca272bc10740466c8ac"],["/tags/懸疑/index.html","0d68d9058e0580132959c26d65e804f7"],["/tags/懸疑科幻/index.html","e5af0796116c66e7bfc8a7b86708a1cb"],["/tags/戀愛/index.html","c74a7d5e1009f8e475b61f67b531b9a2"],["/tags/成長/index.html","2f5a4a704fc9a0952c27ace143beb70f"],["/tags/成長/page/2/index.html","0b3d570ecd6719c56fe1c2f63f20bb39"],["/tags/戰爭/index.html","2738f49e3a7c1722a8cc5e31df02fca9"],["/tags/推理/index.html","13a6501596fa308b8f6e98ba910c4f07"],["/tags/搞笑/index.html","8fd7342a0f9011f81aee03eed965f012"],["/tags/救贖/index.html","0c09300b3729e3847744e394f10a9aad"],["/tags/斜線堂有紀/index.html","878b3d296081765dfe8425a788718c7f"],["/tags/日常/index.html","dda0b951f00691b4d039b731171d51d7"],["/tags/末日/index.html","7d206cfcf9c6852cf7f57033413107e2"],["/tags/校園/index.html","72ee766c07aadd4eeeae40f5322680e8"],["/tags/武俠/index.html","dce0fffe15cd68b152a836cb162399c4"],["/tags/武俠言情/index.html","9c570d7e10153d7d9c21746e95431705"],["/tags/漫畫/index.html","5ab1dcfc5b99839e8cdf1c34237deeec"],["/tags/生命/index.html","032f81eb651a251a9b77cfef053de2a5"],["/tags/生命/page/2/index.html","94e2d8966728b9fc6b10cd915d1fe65f"],["/tags/短篇/index.html","13698a752c3956fb5b631d859a95b813"],["/tags/社會/index.html","76aa3243f1d0babd656acd0883eeb44e"],["/tags/科幻/index.html","9b96412360da75ddd620b2c9d74afc86"],["/tags/童話/index.html","fed8a56881443dcbc8906c2615516cb2"],["/tags/競爭/index.html","29c7c828708ac34ab6bbd9103aafafe0"],["/tags/自我/index.html","89126613e1bf8467dbb25b1d9f5a275a"],["/tags/自我認知/index.html","6d5fe5691b96cf7f4e2e393505a91889"],["/tags/葦舟ナツ/index.html","50f7daaf86ec94cefdb2c1ecc5577c3f"],["/tags/藤萬留/index.html","873ee3dfe462f8d2a25cda68e7c94133"],["/tags/親情/index.html","0935243fd275be7105737d96849825d3"],["/tags/雜項/index.html","2697c567954b748ef3e5b1200ea299ef"],["/tags/電影/index.html","7976bad4df1e12efd894f675afd83ee9"],["/tags/電影/page/2/index.html","ffbfc833aeed28310c828f0e68e6d297"],["/tags/霸凌/index.html","d0e8a50679a5d5dfc7fb647d5d33b5cf"],["/tags/青春/index.html","beec4d32b447144e6dc78e7786b8175d"]];
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
