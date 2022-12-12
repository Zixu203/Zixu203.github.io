/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","12a24bbd7001e3f50a823bcbebe5e4e5"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","48a9b26be9868acdb0dd07d408688961"],["/2019/12/25/Review/無法計算的青春/index.html","c66a32e3c829b38c60ebd1518fff1083"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","e7bbea2b63e06edd0b2e6bedcbc43852"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","1f6f3c946126c1e8b4a32c3728e4b96e"],["/2020/01/19/Review/下雨天，不上學/index.html","ea4aa9ac3f5d0bd35486a7a51f568562"],["/2020/01/26/Review/三日間的幸福/index.html","5354fabe1b85820f893fc4fcf112f472"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","0ba272d221dae99fb05b7b9718a420c5"],["/2020/02/09/Review/青春期超感應/index.html","24b65eebaea846e893d44dd41d8995c9"],["/2020/02/15/Review/又做了，相同的夢/index.html","075b78e0d21a4a704335d2adb73e3d76"],["/2020/02/22/Review/回憶當鋪/index.html","58ee1d8c4f8a8c21df8f754450710309"],["/2020/03/22/Review/不適合自殺的季節/index.html","9075b9955a8e4f990e9512b5bd899a77"],["/2020/04/26/Review/我們都無法成為大人/index.html","31d39b06edcead539546463d73129318"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","ff0577ad98895f4d662da3fde6909c92"],["/2020/05/17/Review/人間失格/index.html","29c4bcb64de474156e54d62227c109ee"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","afd95e8f3f91bad46c7df11b2f12fa7b"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","40a431f516cc17eabaf33720822aa677"],["/2020/08/01/Review/銀河鐵道之夜/index.html","4b5e915fdad4773b3fa90df2aeb71648"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","af9c52b12d07482155ec8d53f28be42d"],["/2020/08/16/Review/15歲的恐怖分子/index.html","408b1c3e6ff1b9b1d49334778998f9d1"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","648dfd526a2339afd9d5cfafda127e63"],["/2020/09/13/Review/羅生門/index.html","088e1fb4232b93c77ae4c9a6892113f1"],["/2020/09/20/Review/闇夜的怪物/index.html","b95555b6858b0563467f1a2823984494"],["/2020/09/27/Review/14歲，明日的課表/index.html","5b6ddc51a6b50ad666f0c4de3e55d66c"],["/2020/10/04/Review/致十年後的你/index.html","ca9dec6c0542f72e66b24f7d1aa13f7b"],["/2020/11/08/Review/滅絕之園/index.html","165d9ea6a15c5f127cf3ab0af57a03bf"],["/2020/11/15/Review/將愛拒於門外/index.html","de91612671f43ed27f2b2bfeda426726"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","81ea8884b0fae027d5d04f5552e4610d"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","d11fa8a7ee7634f2b9a8654fac1f9e51"],["/2021/04/22/Review/道印/index.html","1a04c1711a7cfa3468a11ad7508db206"],["/2021/05/03/Review/戀入膏肓/index.html","fee98761717651031131d68574ed224e"],["/2021/05/10/Review/Dice/index.html","cde3a8c3d119f43cf0104bc0936b6954"],["/2021/05/15/Review/魔女之旅/index.html","380372161c790964d4bf01012f123c07"],["/2021/05/28/Review/戀愛寄生蟲/index.html","eb85f4bca59593a2d0960825e43355f4"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","dbdfebcf26bd128297976d8bada6cbff"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","9b108243d986f65f58c368d0e8902854"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","6f0a101c3c18b1dddf98954bff307023"],["/2021/06/05/Review/流浪的月/index.html","3f71ea7e145414c1729dd5ceaec300c3"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","4db3c3ca638f8daaabf2fa6ec1ac0703"],["/2021/06/13/Review/第一人稱單數/index.html","3e6617749bb3ad8c55fde74d8e9fa42e"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","8e1bd9a0b51bf88f8287bcfed39a7b88"],["/2021/06/16/Review/願你幸福/index.html","dac49631b1df5cb17e49773d7ef79313"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","dfe4c56cf454d77cab97275c2b5942a7"],["/2021/06/21/Review/神隱少女/index.html","b355551fcd607ef0999bdfd0a0370fe3"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","151d0654294022a5c955ed0ccd55c56e"],["/2021/06/23/Review/天空之城/index.html","ffe313b352905c4dc58d0a08cb31d0ff"],["/2021/06/24/Review/魔女宅急便/index.html","4623ae70255331784a73c143a23cc7a5"],["/2021/06/25/Review/借物少女艾利緹/index.html","3fc931b228e03d97e8ebbc16520af025"],["/2021/06/26/Review/魔法公主/index.html","75e784fe97dabcd3eed99a848ef3d97a"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","9870ef8b698eb5eee2a6fef91758065c"],["/2021/07/04/Review/飛雪與劍/index.html","ee556fa8de4d536df4900592988f5876"],["/2021/07/09/Review/地球防衛少年/index.html","3eaab8adc11fb7ff373e76dad4755669"],["/2021/07/12/Review/Angel Beats!/index.html","e48a2949c26e44888255fef76d3f5fb8"],["/2021/07/13/Review/Clannad/index.html","f32701d64e765cb98aa90d1db8c654ca"],["/2021/07/15/Review/AIR/index.html","6e3bde06d81899eb84ceb0da0faf2ffe"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","90bd356f0448321910b297fe0c597669"],["/2021/07/15/Review/螢火之森/index.html","36758c3e28367344becefaf2a45d64ff"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","575743b3384930245235e128c066eda2"],["/2021/07/17/Review/奇蛋物語/index.html","14e0cf90aa5d1a84f3d8ba0a2ee7c73a"],["/2021/07/18/Review/Vivy/index.html","922b7846d512cdcc839ec98e4acb25b7"],["/2021/07/18/Review/請妳消失吧/index.html","a815c0f5249e421372e34079a62f8238"],["/2021/07/19/Review/漣漪的夜晚/index.html","e485b3b28ee7c8c9b07852853e5ec37a"],["/2021/07/20/Review/月色真美/index.html","d74c6a5beafb0ac5e6de017637a80b16"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","eafab94cdc42685e71f7353bbd8479c9"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","1be4f97f53a9f47b8158c51f1c54780c"],["/2021/07/22/Review/罪惡王冠/index.html","212c2c247745b0d0f29e6aa4dfa1039c"],["/2021/07/23/Review/弱角友崎同學/index.html","f0e23e53c06c48c175543a1a64184d98"],["/2021/07/23/Review/惡之教程/index.html","ca59784b077be747ff37eada6aed3d99"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","9a8b5a1a8ffd32e96a0ad7df5a6e0f98"],["/2021/07/25/Review/魔王勇者/index.html","45177cf20a0ae43a82cf73ead2a4a572"],["/2021/07/27/Review/一年A班的怪物/index.html","974868b17b87a305df548170ff2c6d83"],["/2021/07/27/Review/奇巧計程車/index.html","b0e6ae8c234b6a84b5229f9151fc5d69"],["/2021/07/27/Review/專情的碧池學妹/index.html","3cce013e17f0ebb476baf5c84732a00f"],["/2021/07/29/Review/只有我不存在的城市/index.html","3aec2e79953104ab9773b8b64a8e3e00"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","88ee21bab3b084dbc069ddc75a38fbdb"],["/2021/07/30/Review/可塑性記憶/index.html","1a778672caa7a343c2ac8787bb1fb964"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","bbd5df830b1f6092fb66e66f3b76b535"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","01916971c6654b8457834e53751e9f92"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","b549ff59eac9579b6707956149266ef7"],["/2021/08/25/Review/清戀/index.html","1180ccdc480e49b8cef16d1e619e471e"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","5e7139703f4a89d5844454b944bc4491"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","9e6e04aab3275912a4bb6a35296aaceb"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","19e354b7864b3509574591595c460723"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","29f9e70330b6d5bc38241acd7b037392"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","22010e7031fefb520d28e1cf17263778"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","56bc6bd1f761871ead5b7a1c700aeb62"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","5988b753b2355ed5a9ea6237440d01ea"],["/2021/10/16/Review/龍與雀斑公主/index.html","84b15554dccd61029cb62b787c213a60"],["/2021/10/19/Review/孤狼不想開後宮/index.html","417b77b8fef85b7f57a2986ec20493a1"],["/2021/11/13/Review/徹夜之歌/index.html","ecc6e367ec52c6dc77b18cc1fd4a2e34"],["/2021/11/24/Review/武煉巔峰/index.html","f5f0544d85769abb2bf08ef27484f8d1"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","13dfddb2f2fe5013986a362f4b8e1c1e"],["/2022/01/28/Review/神醫凰后/index.html","535649d256c65760063967ab84681622"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","4e6d66d75d7f29de92f3dbcdf926cebe"],["/2022/02/13/Review/夏日幽靈/index.html","81ce4f97bc2013724a53d12faeed07ad"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","06e23e28c5520e0010059dbf257a14af"],["/2022/02/26/Review/賽馬娘/index.html","0c8884554210636e9db2acc207b5dc66"],["/2022/02/27/Review/大欺詐師/index.html","8270ca6fa696cdc50fac48bade1fcfb9"],["/2022/02/28/Review/前輩有夠煩/index.html","ddb1ed8c7350b2e79508ba99855aa2fa"],["/2022/02/28/Review/碧藍之海/index.html","a4d13b8f5b7ae34003f57604fb5e090c"],["/2022/03/05/Review/落第騎士英雄譚/index.html","e9a1368e09a152f96bb469c7ada539e3"],["/2022/03/06/Review/Another/index.html","f47bd63b0c1da2946258b7dc631c42d1"],["/2022/03/06/Review/入間同學入魔了/index.html","065a77788e93b43bb9d77d2aa3ae4de9"],["/2022/03/18/Review/再見宣言/index.html","af3999ca1923c85ad43e94e51f15fe3d"],["/2022/03/23/Review/生若冬花的妳/index.html","6bc2e3877d57fac1c74783ac8b5fe614"],["/2022/03/25/Review/天之弱/index.html","764d447eae466f59efcabc0a0e571121"],["/2022/03/31/Review/滅了天道之後轉生/index.html","dedb15612481d369bf1370eb58ce4c2a"],["/2022/04/30/Review/泡泡/index.html","d7938a679b7cf51700c6187805a554f8"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","fbee69f7f89efd0c8adb5f7f1d8a4f44"],["/2022/06/13/Review/偵探已經，死了/index.html","d3f2ade12dc411e710f7ad2bd77a5d1c"],["/2022/06/14/Review/黑色子彈/index.html","01692c5df0dde2d627003e00b257032b"],["/2022/06/15/Review/黑白來看守所/index.html","0917bd0955b08debe585b2d42b4b2f8a"],["/2022/06/16/Review/虛構推理/index.html","c0b260a5c22c13d66691c7f228c558e8"],["/2022/06/17/Review/戀愛與謊言/index.html","57b50a2d98abd776ab3f529ec8398fa3"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","98cfcd951ad7e2697992f7391973a949"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","5adb9640c2879f00cb8c61085304d3b9"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","77141f5fa94b7b69801d321132583263"],["/2022/07/03/Review/Hello World/index.html","0b1736afc091625a9085a433c2157a57"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","a4013af729503cb4a25ddccdddf9755f"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","47a6665de02cfb94179efe57140409aa"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","fe008d692fbb8e5bb756fd39070f0600"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","df34f9fef6601f5091f85976ec4ffcb6"],["/2022/07/16/Japanese/動詞分類/index.html","82a85911a7b6274522c5c2069aed0c18"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","46be0c2be289695e037e9ccb28345fcb"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","aa3799b0e2af47b2ddf08d2263b8a10e"],["/2022/07/17/Japanese/音便/index.html","ef019235c6078d4a7c3f020ed00cec68"],["/2022/07/18/Japanese/動詞 時態變化/index.html","2a958d9a0d5ba724b7570a7cbf352542"],["/2022/07/19/Japanese/助詞用法整理1/index.html","03bfc2a961a26b153b02d25d72a7d909"],["/2022/07/26/Japanese/助詞用法整理2/index.html","1ad1d880d07b7c7b0f463e6ae7b047e5"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","b131dc05ee96279d60c5b53ea1915353"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b86d867f7e5b211a1234b9be02d0562e"],["/2022/07/30/Japanese/疑問詞/index.html","573ac822ce3bb4581a4f69b3d7c61bf7"],["/2022/07/31/Japanese/助詞用法整理3/index.html","90454711dd6ad6dd93fa469407f9d6aa"],["/2022/08/02/Japanese/副詞整理/index.html","4137bce476cf8e6898a03ece4d9f7c6a"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","cd7a1166e41297d3be798a27f5722e39"],["/2022/11/04/Programming/Data Structure/index.html","f7555e5a81c9f1770990fc2d3be0428c"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","9fdc5dbd912d1896d3ea9b12a3795661"],["/2022/11/22/Review/組長女兒與保姆/index.html","b1bbc2d029c3dde27aff8714e6050b96"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","36078e5924537493f6c4557677278867"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","ea2df22a9cc36d10288bcb5685cd3470"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","882d8e14852a64f586e994e54535e827"],["/404.html","dc8deff50c58b9f917379d3fd58813b4"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","e41b4fc11dcc90af712e0ecbfbf1c3db"],["/archives/2019/11/index.html","9d25d30d48de62e812ae00129706adcc"],["/archives/2019/12/index.html","8c629ef2ab64a6dd4e9547e5b6e97377"],["/archives/2019/index.html","23e7498edf215d9d1e9d8d6600d619bf"],["/archives/2020/01/index.html","3d20632093a1db3f823f3f4d642981b1"],["/archives/2020/02/index.html","ca30eff1afa8f370557b3ad63e9b8d0f"],["/archives/2020/03/index.html","14568ad964f8aeac519f72f5c8032706"],["/archives/2020/04/index.html","0271ed5b8d52ffa19e388796b4534878"],["/archives/2020/05/index.html","1aa2a10f5dbf377c342d26ac9fc47bf2"],["/archives/2020/07/index.html","2d7479835b31fca2d3f22d2e71060433"],["/archives/2020/08/index.html","b9bfa70b4d63820bedb1101081a3ab42"],["/archives/2020/09/index.html","4e15dece6e7474e45df66bdb80a922b8"],["/archives/2020/10/index.html","35d0dd7a81636d0113587565a4baf7b9"],["/archives/2020/11/index.html","7f410071bd8d2edbb6dab2c6ad6d162e"],["/archives/2020/12/index.html","1e21839f14cd1c090fbe53904f2d9379"],["/archives/2020/index.html","39ce3358cbc5df46fc19568aeb312ecf"],["/archives/2020/page/2/index.html","2026b110ebd54db43796a1e0e1491e94"],["/archives/2020/page/3/index.html","52f9b2c67a6a464a8037a86015997add"],["/archives/2021/04/index.html","d13cbd7d11a7ecdcf330674e7d9f1676"],["/archives/2021/05/index.html","0089fc7c26c6a2eaee032303bb2649ac"],["/archives/2021/06/index.html","8923c6ad0a7705cc37691f6bca8ff555"],["/archives/2021/06/page/2/index.html","744b49823ac92d6ec192a26da155ab3c"],["/archives/2021/07/index.html","8245331d6b10b1ca928e31b6a9b6e148"],["/archives/2021/07/page/2/index.html","869ff529e119baf60b79ff193306bd18"],["/archives/2021/07/page/3/index.html","4553bf3b4d5716ef888447673497b04e"],["/archives/2021/08/index.html","c778b7ff7fbf3b5cf2f68fedb051d594"],["/archives/2021/09/index.html","8348207896927de28d30710fb76200e3"],["/archives/2021/10/index.html","ddcdb55a96f6dd66828c3c211139a305"],["/archives/2021/11/index.html","f2870469d293f41487ee3cc0159ca0c9"],["/archives/2021/12/index.html","df18f0c9cb83a062245115d9df8f3127"],["/archives/2021/index.html","edfb52c538986fdd7d64f420b9d645da"],["/archives/2021/page/2/index.html","98dcaa2e64c3547e21ec61523f908daa"],["/archives/2021/page/3/index.html","ea2142c4af80930b57f6609cd33ef716"],["/archives/2021/page/4/index.html","ea66f2bdf8b23d9bcb3131a891fa9a36"],["/archives/2021/page/5/index.html","d30c16a05a63ac4553f3119c057ba01d"],["/archives/2021/page/6/index.html","d9c39541defc911e8f073765e667825d"],["/archives/2021/page/7/index.html","173f88c96f534eeb43ab8bf90a69a24f"],["/archives/2022/01/index.html","88a4e019c31bf909d47ce034552c38f8"],["/archives/2022/02/index.html","c18752da2df7d10a211234ad94fea07a"],["/archives/2022/03/index.html","8ea529eee2b49700706624a13d8207c6"],["/archives/2022/04/index.html","2faa204ad8398129cb55a9482e32b7c5"],["/archives/2022/05/index.html","a603d76bef07e553f9a16fcaff6ede75"],["/archives/2022/06/index.html","c5aefc6fe8f712ab6670ec507487b24d"],["/archives/2022/07/index.html","c1d98b801e37e33ba67e0d2d511fc478"],["/archives/2022/07/page/2/index.html","5c934950aa8a55fcb659da17ccb01b99"],["/archives/2022/08/index.html","1288be50c06105fa2ec71f139c2dfa97"],["/archives/2022/11/index.html","fc436d2a447508e3b63e4bb110ee5e12"],["/archives/2022/12/index.html","730501500c7a691965028089294c2bdf"],["/archives/2022/index.html","1c90e1fbf57535820c13c147d15f9c65"],["/archives/2022/page/2/index.html","339acf76303e60a6c49dfb085fee7214"],["/archives/2022/page/3/index.html","1f67700ff79812bec3c883073130ac17"],["/archives/2022/page/4/index.html","d9f4942d655e1395e2b6f3a43fd85a83"],["/archives/2022/page/5/index.html","de93ecafd3af03fca79247d98ac8d4b7"],["/archives/index.html","2a68bc85f5f87b69c42b480282e8975a"],["/archives/page/10/index.html","9c401e995c2bd3c3698a5f35d571ec49"],["/archives/page/11/index.html","9bef64c98dc43e44582cdbf08ba9fdd3"],["/archives/page/12/index.html","62a6fd5c1f1a25141c0347f81df68e23"],["/archives/page/13/index.html","fc5138e9c9b8ef75db089a762f219c1c"],["/archives/page/14/index.html","3ff3c0b93f9e97911647f6984906ec2e"],["/archives/page/15/index.html","b3fff57a2b917809861eb7b7e12c2038"],["/archives/page/2/index.html","b48ed4e361021264e7f038d101a6de26"],["/archives/page/3/index.html","d7febabb18ad4a5b245a6a55511ed361"],["/archives/page/4/index.html","26c68c60c6b4942e1eec9625c16dad34"],["/archives/page/5/index.html","67e886ab93ca43ddfba13d46099c78b0"],["/archives/page/6/index.html","e28071e63d8949e2607256cd78bb432c"],["/archives/page/7/index.html","a4cfb463a8d6b54afc9f6bf6b9afc831"],["/archives/page/8/index.html","daf7fd487d634fe91ba7d6b889a74367"],["/archives/page/9/index.html","dcb801c45ea74d91fd56bbe5e51ae462"],["/categories/Programming/index.html","4dc2cdb2b2e688a1e61d29b438b8cbb3"],["/categories/Review/index.html","f8e6b240a2aa0718565069c41c94eebd"],["/categories/Review/page/10/index.html","a0f234ff2bc5c607fcc318ed2e27e6c9"],["/categories/Review/page/11/index.html","cc4fecb3867932d725d3dc82d6a87786"],["/categories/Review/page/12/index.html","ee5ca144a0b0589ea7e3c0e587827daf"],["/categories/Review/page/13/index.html","015a26bcdf22709c171e91a92ee7069f"],["/categories/Review/page/2/index.html","6a1c020d0f9abbc24daa82082daf84e1"],["/categories/Review/page/3/index.html","edc6787ec220671c62e3f1278e4d697b"],["/categories/Review/page/4/index.html","0433333e861f8603addc847acc011183"],["/categories/Review/page/5/index.html","f0398a068ff59db864b7a82cb0d0265d"],["/categories/Review/page/6/index.html","b946c98e8c026add509edfb9b1cca7b5"],["/categories/Review/page/7/index.html","73d55913b3b35c090d4286f38d54676e"],["/categories/Review/page/8/index.html","18d691d9e6575fcdbeb743111c8f386d"],["/categories/Review/page/9/index.html","430fcb83ccb8ffe9ecb9aada1fe88786"],["/categories/index.html","8df41c8c8228fd571099eaace7fadbf7"],["/categories/日本語/index.html","0a47f8d42b9f685196dbf6e1704ffd9e"],["/categories/日本語/page/2/index.html","493c2c3e066d785de2d21f90e51bc5c9"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0426dd40d44abcf21042e8193ccb3354"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","11844b932d62fabeb2a142d051bd66e8"],["/page/10/index.html","28673a35edd29c0c73f9d3ac3f60c593"],["/page/11/index.html","844c78f4d9a0ff609d5c3d0a0d9f4ac8"],["/page/12/index.html","587729eb8e5e179a7be2b03530295d08"],["/page/13/index.html","c22aac4dabce0a13c2f1c33654d82363"],["/page/14/index.html","50b595af8e621fa5bc32ed5a28a0d998"],["/page/15/index.html","18c184f5aed9042ce8b5868d71f423c4"],["/page/2/index.html","e3231d725370668289697f10b0bad02e"],["/page/3/index.html","293e9ab6eeea7d129e1e1c0636f41f10"],["/page/4/index.html","b3bc7bd36e48b6a8537d81a103a52f0a"],["/page/5/index.html","ece6403a70e1eecd1457de938bdb7ed3"],["/page/6/index.html","1cfdb8089c363a0a85f197edf20c6105"],["/page/7/index.html","75d3aba538c85e3d87359e5a875dfc64"],["/page/8/index.html","34fd564845f6f37f871980caece9c4fe"],["/page/9/index.html","fa972f2a89997a55552ad53cad0b801e"],["/sw-register.js","e87761fcf350506d6ee215e0d82a668f"],["/tags/10分作品/index.html","92ff8fdc1e20ca9fd05e11a994e8ff71"],["/tags/3分作品/index.html","9de312656509ad874ca3a3be9954606c"],["/tags/4分作品/index.html","aa06937341676cc36a652fcc4b1fa8c0"],["/tags/5分作品/index.html","353563b4d78eedff5bda322092b3efdd"],["/tags/6分作品/index.html","99ab9fac0f77cdf6ee76214d4d72caec"],["/tags/6分作品/page/2/index.html","52209bad8652f08e78fb12e642bd2b3b"],["/tags/6分作品/page/3/index.html","1b18d10b2407ac71e3cbc7cfe119c3ab"],["/tags/7分作品/index.html","9d2062082388e66ab079c88b69d58084"],["/tags/7分作品/page/2/index.html","b8256e3be084d86fe8dd5032356f9d7a"],["/tags/7分作品/page/3/index.html","df7bcad4a9c62005937c1593e15c6b9c"],["/tags/7分作品/page/4/index.html","6db9c1ccd06bda5874636aaaa8a1f61b"],["/tags/8分作品/index.html","373bbcbb5208b052c24cf29c37e1437a"],["/tags/8分作品/page/2/index.html","5bca8786d7996da83772987a6526fc11"],["/tags/8分作品/page/3/index.html","2233366726d6121b9c95cd1d02a52bfd"],["/tags/8分作品/page/4/index.html","b4d95bbd0670b57f5712ea8f55a376bc"],["/tags/8分作品/page/5/index.html","f787af9985718583c544aab9be71e9a2"],["/tags/9分作品/index.html","430b63dbce16b31da5cb4cfb51974477"],["/tags/N5難度/index.html","02573028ab475bc202cb9e56a8002a30"],["/tags/N5難度/page/2/index.html","598b43fdbbdf5b2e0ab9f86f9e2ed33a"],["/tags/index.html","5609ae2702e15d01d2907313bd6873e9"],["/tags/アボガド６/index.html","302e3cbd0821da2efee0e0412f044cae"],["/tags/三秋縋/index.html","1d2b32fe73e8756fdb40f87a58ed631e"],["/tags/中國武俠/index.html","9f5563056433146dfacbdba11477ac40"],["/tags/中國言情/index.html","5697a1175731fcc8da9b0ad6d56b6fd7"],["/tags/二宮敦人/index.html","d17b88cf2ae26e8b56de865bb78cc6ea"],["/tags/人性/index.html","e64acf1c5af692c383c20244e8d530be"],["/tags/人際/index.html","f6cc4c2a0e958821406f74c47282de0b"],["/tags/住野夜/index.html","53a16fafe277ca8e3ae6881dc4507a72"],["/tags/佐野徹夜/index.html","80a276fccb11b430ce7ac1895a329a47"],["/tags/努力/index.html","ab29a8ccb697cb9996d62f95c0009b93"],["/tags/動畫/index.html","5cf1b25313070a82b7f916db370b16a2"],["/tags/動畫/page/2/index.html","d7f49eea5fc6d2bd75e1f21653e63822"],["/tags/動畫/page/3/index.html","bd630c59b31acb7748dcb5e84214f3ff"],["/tags/動畫/page/4/index.html","89874d6ef6d73f6cbe8a18bc998c3cfc"],["/tags/原諒/index.html","f91100ab0ae54058f45b8fc607122ef3"],["/tags/反烏托邦/index.html","095e700058270e342ea583658cb3ed70"],["/tags/啞鳴/index.html","fb7f8b476be645a89654186351de9cb5"],["/tags/喜劇/index.html","886ba979a0fca5fe14732b927b5f6413"],["/tags/夢想/index.html","b0fa84bf7d701876f8de7077200aa50b"],["/tags/天澤夏月/index.html","83a1e8d921f3a0dc4ba3fcd257c3c450"],["/tags/學習/index.html","2e4adb07f3a0a9961c350bedf156d360"],["/tags/學習/page/2/index.html","5e37de905944ff1ee94020e02c4aac86"],["/tags/宮崎駿/index.html","8a7fb786ae0f224fdc8fef4fb013675c"],["/tags/小說/index.html","8698f2a21514cda9d1de2628cb244203"],["/tags/小說/page/2/index.html","f13c3ff5b6b7e37d5cc02f891fe05184"],["/tags/小說/page/3/index.html","888bea09c6c03dce8a8ff758b47eff66"],["/tags/小說/page/4/index.html","cb1a710d110070356404dbe116437093"],["/tags/小說/page/5/index.html","8758f8943db8ca649ee621e8afa94a18"],["/tags/小說/page/6/index.html","86c153a2ae432e45ad5bdbed26840a92"],["/tags/小說/page/7/index.html","2f8fd299eaafc656a6789a93b3f2c32a"],["/tags/平淡生活/index.html","9fb5e6fabacfff2ba40eb321408f37f3"],["/tags/幸福/index.html","b0da95c807ac35728c97cd8bad91a860"],["/tags/志茂文彥/index.html","879d32c863270dde3e1e717f366557b1"],["/tags/愛情/index.html","8a01299b8697b02052af0beca0378d4c"],["/tags/愛情/page/2/index.html","5ed899e6d1e17c2ab8fbaf0e1b7ad1df"],["/tags/愛情/page/3/index.html","237091d6e498679bdc72a18a7cafa329"],["/tags/感動/index.html","90275243b80bdc83d0a349dbf7d79113"],["/tags/懸疑/index.html","b017fcd829e2157b73e01709e078fd2a"],["/tags/懸疑科幻/index.html","9e29a506e9bea6bde2a9c9ff3b4093c0"],["/tags/戀愛/index.html","172379bd38b8da3855d7f9b56e11dcda"],["/tags/成長/index.html","9335ddc5680bd930422536d3a45b4427"],["/tags/成長/page/2/index.html","9bff675ec027af07292d6e831fb56413"],["/tags/戰爭/index.html","63663d7ce6e03c68f1c6f9fc6238cd26"],["/tags/推理/index.html","a5a4cfc780d1cf08377905c307434f80"],["/tags/搞笑/index.html","12819213f60059a782e181413c66ca53"],["/tags/救贖/index.html","d7b6e59f28d3779299471ae383f280f6"],["/tags/斜線堂有紀/index.html","b893af20bf6721128d37a0c7a43863f5"],["/tags/日常/index.html","c5a8a38ca1460c476c55fb272c18a558"],["/tags/末日/index.html","e4a5e09fb92cf524c0d10fc09b3c090d"],["/tags/校園/index.html","ece75cc2bde87b8c61c024c8f751c7a5"],["/tags/武俠/index.html","fc177b462f2b73e2412bb41b161fb743"],["/tags/武俠言情/index.html","864643dc820f580eb8b664daa994df3d"],["/tags/漫畫/index.html","519801bf7382fade86d495a516aba82c"],["/tags/生命/index.html","bfc6639a3b925ff6fff1f071c9b655c1"],["/tags/生命/page/2/index.html","30809b040f075e00f4e6c40d3ce0e3bb"],["/tags/短篇/index.html","0d1457ca1c008aa0553efd4850741e3e"],["/tags/社會/index.html","254abaeae0bdd0457865552751e04f97"],["/tags/科幻/index.html","066df4e1e3afedf8de66d4af1a611727"],["/tags/童話/index.html","7e59043c17bff30f500d2cd7bb9b9148"],["/tags/競爭/index.html","db0864c5906933992f2f7beca5cba9cf"],["/tags/自我/index.html","7174b6bc6954ed8f3bed0d54f367ae87"],["/tags/自我認知/index.html","57a7de7695aef41d3008baa99c65b82f"],["/tags/葦舟ナツ/index.html","c92c0578dab4089201c680768a978699"],["/tags/藤萬留/index.html","0297cd5287a663ec01cd276fe77a97e0"],["/tags/親情/index.html","d2704c6a0ba50e2610ee7cb24b35a343"],["/tags/雜項/index.html","c012f2eb8f6d16dcbe3f05adba464c7b"],["/tags/電影/index.html","55a5ded943e7d5fac9ea6f25676a51ff"],["/tags/電影/page/2/index.html","1a45131a92f3a24c6d5a64aa2ba17bf5"],["/tags/霸凌/index.html","fa2286cd5f410c4a64ea9921b6688b96"],["/tags/青春/index.html","7ca0d58cf229fe079f3a89b784cd6fe6"]];
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
