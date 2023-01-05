/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","710b7fdbfe05d4bc27c0c656ca07ab51"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","1603c8748f6e2d7ba5efb7cbc2bdd13e"],["/2019/12/25/Review/無法計算的青春/index.html","fba2bd6210111aff6f0432ddf23ea037"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","5fac1df71da48d860c90444343a2db85"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","f339ee33e68624e9011638dc7ed5476d"],["/2020/01/19/Review/下雨天，不上學/index.html","823d37d38f8cd0baee06a71e1b7a01aa"],["/2020/01/26/Review/三日間的幸福/index.html","48c4c966f9196953af276150a601a66a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","303f0cf71b61a2954ecd5a3936bd51c8"],["/2020/02/09/Review/青春期超感應/index.html","cea12f5665578519c89c0439df0708f4"],["/2020/02/15/Review/又做了，相同的夢/index.html","f472a24f9a9bc79b09e52d06eaeef1e8"],["/2020/02/22/Review/回憶當鋪/index.html","63dc1cbd3a9b013f0664adc96689b8fe"],["/2020/03/22/Review/不適合自殺的季節/index.html","46e4e561d29b9d89e627bb356aa165cf"],["/2020/04/26/Review/我們都無法成為大人/index.html","cf9719031e724ff057ca4f9ecd4e648c"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","d7e6671c3a357beeda3ed8ce6f9fe05a"],["/2020/05/17/Review/人間失格/index.html","12a05358299a91a33d61ee773fa56e72"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","d9857deb371159e128ea5266b4f25442"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","089af0ab9f6901911fce7c8f2c5c74c4"],["/2020/08/01/Review/銀河鐵道之夜/index.html","9f79d62da44bd57368d69b9b2278e02f"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","34f12475c8093a5114c630edba5ed22b"],["/2020/08/16/Review/15歲的恐怖分子/index.html","eed7bb3a045abefe6adffaecf5df7c64"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b716c5465fc7b703632e10bf828113a9"],["/2020/09/13/Review/羅生門/index.html","d7bd62751907a86d319d089fd57a8007"],["/2020/09/20/Review/闇夜的怪物/index.html","35c60ac8ea6050be29fe75b52f6153c8"],["/2020/09/27/Review/14歲，明日的課表/index.html","df22c920dc968f4259abd364b5dd80f3"],["/2020/10/04/Review/致十年後的你/index.html","35e9016cd269efa017a786e830a38970"],["/2020/11/08/Review/滅絕之園/index.html","9cc46cb17c90d2a94b28ef33913922c4"],["/2020/11/15/Review/將愛拒於門外/index.html","44fe54de1d655a16f6888068f37aecfd"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","db16c18a0ee94ae4ef28b9a04489383f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","4c6bfd09ec29e6455bda6fa6be88d319"],["/2021/04/22/Review/道印/index.html","d8011b77a02fb7440c869e909b3a83a4"],["/2021/05/03/Review/戀入膏肓/index.html","268c2e607eb706ab530867fbddfe1cd1"],["/2021/05/10/Review/Dice/index.html","4d2d766d27a36027f2d91c64a14863a4"],["/2021/05/15/Review/魔女之旅/index.html","536af357b00879d73529c21e70d8bb84"],["/2021/05/28/Review/戀愛寄生蟲/index.html","d9c422cdcbce4faa2640941ffcbd2f30"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","b1089cc671a09e2b923b714f4272631e"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","f0a47c55de5c6d57b686d61e4a550523"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","ce58e057e7414cf2a7d8200005f4a973"],["/2021/06/05/Review/流浪的月/index.html","70f56e46ac11c15fb4f64fe4767e0338"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","90554c357ccf06a7b898331b85138d9a"],["/2021/06/13/Review/第一人稱單數/index.html","cbcfc26e931c35e8f46ef09d37633aee"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","fd0a70d3b5e710814186fe0909458a4c"],["/2021/06/16/Review/願你幸福/index.html","bc81f526f07e60565b921b60c702c5c8"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","05c5c3fe30b90836ad40467a4ca25f39"],["/2021/06/21/Review/神隱少女/index.html","4d6bcc408ea0bbadfc6972b1190815a2"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","d23843e0b10bfc5d72875dad9ee591ef"],["/2021/06/23/Review/天空之城/index.html","e668b29681d87232c396fbba60bc8438"],["/2021/06/24/Review/魔女宅急便/index.html","01e663546bba685c550f0f7e71e9b4f8"],["/2021/06/25/Review/借物少女艾利緹/index.html","fb6eee319e3fa51ee2f801face576a14"],["/2021/06/26/Review/魔法公主/index.html","8d6327e9aaf20b55819963107cb418c7"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","96b047c33ebf536c435a55f9833563b2"],["/2021/07/04/Review/飛雪與劍/index.html","26d56c7e7a335f305a2db3e101681c21"],["/2021/07/09/Review/地球防衛少年/index.html","7a3106d66bab1165e3fe3a3fd461fc42"],["/2021/07/12/Review/Angel Beats!/index.html","0e28991be90f73ab5cb3664c39525904"],["/2021/07/13/Review/Clannad/index.html","97cc084b15f62fa6ed4cc1766a648974"],["/2021/07/15/Review/AIR/index.html","c37a66902ee3feca2020e6d5a2708547"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","506e93e93ff6abbeec42d0bec76d3b1b"],["/2021/07/15/Review/螢火之森/index.html","b52bae11cfa88ae214c4294899316af3"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","49ad9dd12c3f231c7ab2997bc9621570"],["/2021/07/17/Review/奇蛋物語/index.html","f0b26ac126cc20214c79983cbf2d52d3"],["/2021/07/18/Review/Vivy/index.html","cf7869399f5cd91ef7ebaafb62ceeb61"],["/2021/07/18/Review/請妳消失吧/index.html","f73a188a5287b4ca6c5d6904c9b9e80b"],["/2021/07/19/Review/漣漪的夜晚/index.html","90388b627282b66452f5b3551b14185c"],["/2021/07/20/Review/月色真美/index.html","cab91840687174c3f9670ce5fa481978"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","ece7301ca7ccd0a22f1cdb0a753662ce"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","e15d9c2e62f574b35ed8f22778373bd9"],["/2021/07/22/Review/罪惡王冠/index.html","773c25da69a09bfeda672e1db4607ac2"],["/2021/07/23/Review/弱角友崎同學/index.html","71914c2505e0e31f1e91a284637b7013"],["/2021/07/23/Review/惡之教程/index.html","d17bfab5a685010afedc10682092d953"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","1bc5fcb23bcbb0e6e47ee0f722a8ef39"],["/2021/07/25/Review/魔王勇者/index.html","f14503d7cb0d3d48af6518d92837a0a5"],["/2021/07/27/Review/一年A班的怪物/index.html","ec6e8bd2c90dce439a63ecbd37ced205"],["/2021/07/27/Review/奇巧計程車/index.html","a51913929067033e2fcde5c157e8f85a"],["/2021/07/27/Review/專情的碧池學妹/index.html","e90d072a719573f041ab7fd42dd9f955"],["/2021/07/29/Review/只有我不存在的城市/index.html","a228d950ed86d006ea94447e32d3aa37"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","19680e5ca76035d115022316fe738abd"],["/2021/07/30/Review/可塑性記憶/index.html","85ec12a12231951003cde747a85e4123"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","fc8c14e02bbc9daace2aedef72a92af7"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","0bca708480d24d671ad5495e33d0a322"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","5aa8cd2393cf194fba58d7d58a071f7a"],["/2021/08/25/Review/清戀/index.html","0f5da402ec21a0019a1a5331757f7f29"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","129574098315b57a0a307bc255757317"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","a88b90575af3ac6ca0e6e73ba270bcc9"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","0cf6bad51e2ee293ca9828236135c5e5"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","8b5c44cedbb2a5f848e9803f0281cfcd"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","113480688339e22a33b0b2d9d0521642"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","1657a9bf168235922221557f3e0ede1b"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","c38bd0ac0ef829d890c924cde28667eb"],["/2021/10/16/Review/龍與雀斑公主/index.html","858eb8224c0f8fbfe6c8ff6b4c743534"],["/2021/10/19/Review/孤狼不想開後宮/index.html","83132abdad3fe1a7d6e607d960e21e1e"],["/2021/11/13/Review/徹夜之歌/index.html","8ad3181b347914014df96f5ae108230b"],["/2021/11/24/Review/武煉巔峰/index.html","a220706742e4783c5686ac885d8aee44"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","cbdaa1260d0387dd9eaf80021175cb60"],["/2022/01/28/Review/神醫凰后/index.html","35d1fa320fbafbebd132c33a387f718a"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","afb40c72a095150f7f946c11fc0bb73c"],["/2022/02/13/Review/夏日幽靈/index.html","298387834b1453db2166805a62f12c3a"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","c031730ba08c49c7a8f4b5e192305e8c"],["/2022/02/26/Review/賽馬娘/index.html","c11afb28ae33cbb754e441adb0254aab"],["/2022/02/27/Review/大欺詐師/index.html","2a6e37f2a7a4611def65b93daa9fdfc9"],["/2022/02/28/Review/前輩有夠煩/index.html","8825f85e63f2e76865f6004b894b69b1"],["/2022/02/28/Review/碧藍之海/index.html","23776a58ac36e41e0fa7d5d6969e54ef"],["/2022/03/05/Review/落第騎士英雄譚/index.html","b527ca48d42bfc24395b65d1d30eb217"],["/2022/03/06/Review/Another/index.html","58a380add38046185200f2c781f6a841"],["/2022/03/06/Review/入間同學入魔了/index.html","662d5ec4760be61a3cbac18c7c7c5a2f"],["/2022/03/18/Review/再見宣言/index.html","bd3f4c8b2d03abb0de71852f9d2f14f2"],["/2022/03/23/Review/生若冬花的妳/index.html","04ed5ae4ec0b96ab2d7cf6511991ad42"],["/2022/03/25/Review/天之弱/index.html","64597e0c74e41d4837661b65aba3c6c4"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c882ae924980401057b1432d6ef9f34f"],["/2022/04/30/Review/泡泡/index.html","a8f051b6a38b0acab755241fda09fb96"],["/2022/05/04/Programming/Dynamic Programming/index.html","7233340e26f59d54de120a910c808a79"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","c253f55bd08a9d183a72a592cdd46ce1"],["/2022/06/13/Review/偵探已經，死了/index.html","973746ceb666fa02a024815a4ac599a5"],["/2022/06/14/Review/黑色子彈/index.html","b898a5acfd3520541260cc135b63ba00"],["/2022/06/15/Review/黑白來看守所/index.html","9d90b89e609afa1acbd78f1383170e57"],["/2022/06/16/Review/虛構推理/index.html","88a418c9d8cebbffc96d531b602130fa"],["/2022/06/17/Review/戀愛與謊言/index.html","59469b50ea39c4f38e45d65d7d7f3333"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","0d9e9c59c51ab003d81d796ec236e4b9"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","862daa508eb74e7e7a5a9f8fb1002cb1"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","8fe019dc13745e4c12f0a664b8e2a571"],["/2022/07/03/Review/Hello World/index.html","57f8a9395bba51c8fc2441ea4e8a3467"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","97a7e97cb79870afb628473e0147644e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","34a7d3ae140725b319ffbaf82d3792aa"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","b5cf867b0d7100e6464ca412697e06fb"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","55b42904e0f42b4e2f6452b8b730acd0"],["/2022/07/16/Japanese/動詞分類/index.html","0fb0fb260dfcbc14487e3fdf494f1f61"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","46e6450a720b18ed0b20f331660b0157"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","73c9abecb93bf7c26c87f9b71c7c2419"],["/2022/07/17/Japanese/音便/index.html","7acb04108b5fca461e4dcb994b78f300"],["/2022/07/18/Japanese/動詞 時態變化/index.html","9bb916234e8c74a277f761ce1e391f1a"],["/2022/07/19/Japanese/助詞用法整理1/index.html","537e4223c4f5110c9a8de3dce01635c1"],["/2022/07/26/Japanese/助詞用法整理2/index.html","96306d5e07c48bb419e6639395bc79d9"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","e72bedbb7e9a376ddba36b210b35a4ea"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","3981d7dd4b753506af6e8baa136d4eac"],["/2022/07/30/Japanese/疑問詞/index.html","6c343694e133e22b464d353d068d1843"],["/2022/07/31/Japanese/助詞用法整理3/index.html","ea412643b615b9a25f61c17863e2d839"],["/2022/08/02/Japanese/副詞整理/index.html","17dfa8542a767d787237082709ac16a8"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","786cb736c339d1f24e1435ff1ccf9f6a"],["/2022/11/04/Programming/Data Structure/index.html","fc6fa2012761f5560cc03d2131cc8b33"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","21a6d183ccd44f74161ca45ba2536ed2"],["/2022/11/22/Review/組長女兒與保姆/index.html","74f14c74ba39c10bf5e593c74ba16dc3"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","ccc649755c94903c8468ce63c9f0f8c2"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","472c938009fd1daf9beb29d2d53349d6"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","3cf89005c41882290dd83b05661027a1"],["/2023/01/01/Review/あの夏が飽和する/index.html","1484d84a2f1f36e76d6eb01655f6e8ad"],["/2023/01/02/Review/孤獨搖滾/index.html","108502f2259fb8126c864f1dc494015a"],["/2023/01/03/Review/來自深淵/index.html","0f2e9a7c1053350582a69b984cb89a7c"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","136b9e24e6b67ed47f8e23732ba5f13d"],["/404.html","dabd0154c05d3ec16e21e1bbde7ecdf4"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0d7071f92e30477705a16b676d88a1e4"],["/archives/2019/11/index.html","70cd2872cdd539f57647355c3ced69ad"],["/archives/2019/12/index.html","ab376a22fec30f152c53703671b743a6"],["/archives/2019/index.html","54ad3c45ddaa4b890f1231e06afca938"],["/archives/2020/01/index.html","e45a06a25abc9c604d4e69c22e9998db"],["/archives/2020/02/index.html","e6942ef2c4947b7c73114c9d2dc0004d"],["/archives/2020/03/index.html","d530a2dba6aec5557ccb90fe0457e6e8"],["/archives/2020/04/index.html","4a0e489ae87c568e60177b93e45cef9f"],["/archives/2020/05/index.html","2b51dc3ce8fa765bef8e67b4124637f0"],["/archives/2020/07/index.html","05453cb59ff0a297446353e81d4c3b03"],["/archives/2020/08/index.html","3794f60847b48b243bec6c54a5750b92"],["/archives/2020/09/index.html","3d7a7984f26303538ba4d803fdfdc938"],["/archives/2020/10/index.html","959567858c4d8a4425db6cbfb52ef018"],["/archives/2020/11/index.html","52eb113411a09e148677b50c0317b55a"],["/archives/2020/12/index.html","edcf4c132636ddee5b34dbf24af36d3a"],["/archives/2020/index.html","12f297ca6d60848767fe74a48328ee9c"],["/archives/2020/page/2/index.html","1892049870f637188e7ec4797a461e07"],["/archives/2020/page/3/index.html","923f922dbec920ff9a0b826b798f3387"],["/archives/2021/04/index.html","0f202fef7b89774d7f4ce6d70ada3afa"],["/archives/2021/05/index.html","1e30ac62c00b0fa695fffe09b41ff76d"],["/archives/2021/06/index.html","42e51beca3079723c23c52caefb34107"],["/archives/2021/06/page/2/index.html","0da2a920222e57c2f20329abd45c5321"],["/archives/2021/07/index.html","e03e8a6a24c1b7ca846b7661e880907a"],["/archives/2021/07/page/2/index.html","fc729306ee40fa9a6b4b347f880648f9"],["/archives/2021/07/page/3/index.html","da78943c059439705b9c144dce5e2ade"],["/archives/2021/08/index.html","59c3e31ea3ea2f36f8520fceba204b99"],["/archives/2021/09/index.html","c3379a6d81baa637c811bbb8dbbea8c1"],["/archives/2021/10/index.html","12d0a79ebf3c4e00ce80222e7ff8bdd9"],["/archives/2021/11/index.html","ea326464bf0d4e379adaf4b38a95e470"],["/archives/2021/12/index.html","58a25cb9bf972ef1a8feeea8d15b3f4c"],["/archives/2021/index.html","c5d9a14591a1ae8043c8d4a94fea04e4"],["/archives/2021/page/2/index.html","300d57a1abdc7f1f763956e8d86749c7"],["/archives/2021/page/3/index.html","f9777c6cc0b4f7759d4919d3acd2e350"],["/archives/2021/page/4/index.html","3970a880577a76b235c3d0ca82dd9aa9"],["/archives/2021/page/5/index.html","997d09e8d7e1dd935957b63e443892b1"],["/archives/2021/page/6/index.html","06ae8746a9963cd078231a51324abf39"],["/archives/2021/page/7/index.html","3c4dd5039066dd8c93438d3cea74f270"],["/archives/2022/01/index.html","a9e26f375d54e686dd92501a8a655899"],["/archives/2022/02/index.html","e0974a1abb6e84d3186b5312431852b1"],["/archives/2022/03/index.html","8768df5bd99b20db7d3b8e394d723eff"],["/archives/2022/04/index.html","e1945d213dfe72848da7bda1005816a3"],["/archives/2022/05/index.html","b45d1e4e0c422e9e89b759389a6ecc84"],["/archives/2022/06/index.html","f522b1eecc3d3f292beee4af7c8310de"],["/archives/2022/07/index.html","63cd0a1a4c9fbcd3863aef6db0c2913e"],["/archives/2022/07/page/2/index.html","0deb4cbae0f81cb28fe0a7a773f44074"],["/archives/2022/08/index.html","dd3f0660f5ec50e9530db6fc1689a9aa"],["/archives/2022/11/index.html","6f2198810c98af875654b605ee295d34"],["/archives/2022/12/index.html","4b5058dd206eed3c7388eb85b1cfd4ff"],["/archives/2022/index.html","e1c2ea4898d59f2b77911fa13eec5fab"],["/archives/2022/page/2/index.html","d5e6de6f620fd31a781dad835cb8d599"],["/archives/2022/page/3/index.html","71f65d2cc1e93adfd229c580fcf6e932"],["/archives/2022/page/4/index.html","ff61981fbd27ada97b62ee47d6e8f254"],["/archives/2022/page/5/index.html","b3dd3afe942c1d3c5eb83faf7eb58303"],["/archives/2023/01/index.html","923593628b588e4c88ffc63f45d17a6b"],["/archives/2023/index.html","1fb9a2842b08957ed8658a293d3f47a3"],["/archives/index.html","eef2376fc65b146334c19de3321e73b9"],["/archives/page/10/index.html","183b7f5f1d67fe3b9e8e198a6a11c620"],["/archives/page/11/index.html","8db93b4e261e53b143a6cb0e500ec3e7"],["/archives/page/12/index.html","c18cd7b5dacb5908a03d773457000575"],["/archives/page/13/index.html","9be6400ceeaea84f5bb81f720a035f31"],["/archives/page/14/index.html","7edf483101130ad48813cde36933ee27"],["/archives/page/15/index.html","9e14de98db4968d35951497e22de5f24"],["/archives/page/2/index.html","480dff823b31ea808deee2d8ca416a92"],["/archives/page/3/index.html","1bc80b08d371cb0ecf32def87340d591"],["/archives/page/4/index.html","203a2b6c567450e74755de4b7aac641c"],["/archives/page/5/index.html","2c9108751959d81ea6c7b537937ac866"],["/archives/page/6/index.html","647939569b2eb0c075e57d214844c629"],["/archives/page/7/index.html","8f38dd97ad297de38fbf106054d57116"],["/archives/page/8/index.html","d9abdf73ef6b5103c1f83e8d9f637e19"],["/archives/page/9/index.html","73c4c0556a01a8474f32e8e94732655a"],["/categories/Programming/index.html","27aa71aad53c911a8b4969e3840cd079"],["/categories/Review/index.html","49adf1e9e2ac7e45cbfc52c4933b3eaf"],["/categories/Review/page/10/index.html","650cd6417ee2dff1b1fc9c73fdb9ad5a"],["/categories/Review/page/11/index.html","869cab396899116be616f78677dcfb90"],["/categories/Review/page/12/index.html","ec67badb058b92d0c3a0a981e09f20a7"],["/categories/Review/page/13/index.html","499a4cd5467ccee9f7ef106fdc339331"],["/categories/Review/page/2/index.html","6b2f7461e7f7113101c42d135d9f0dab"],["/categories/Review/page/3/index.html","c19387595e0870a3d33172b902a4ddac"],["/categories/Review/page/4/index.html","be1a8a63f9a56a7b23b9f4654bf209dc"],["/categories/Review/page/5/index.html","268afff833c62a80dbe9b0ae1b7bf0f4"],["/categories/Review/page/6/index.html","a8b1672840dcc16c68945f66f2588254"],["/categories/Review/page/7/index.html","1f3247005c255361cb6e838617ee34f2"],["/categories/Review/page/8/index.html","86d753d85d8c4c23911720f03003e418"],["/categories/Review/page/9/index.html","692aeab9ffb4c93a61e47ac3b3e97e64"],["/categories/index.html","68b0e84957e0381613b7c5e55cc083cc"],["/categories/日本語/index.html","453e7e21be21743fbc22101112b77455"],["/categories/日本語/page/2/index.html","eae3a9e819a126a53e5968b426c2533c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3f206569449ed36b5c6956ceaf84f5f0"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","5ff6c940898957c376d4f2ca8a6cb5aa"],["/page/10/index.html","a37c4732e2287f4149677a8b574409a2"],["/page/11/index.html","11b0dc2d57e4cffb48c719c60be0741b"],["/page/12/index.html","20444f0e7a5aa4badde4fa306359b384"],["/page/13/index.html","66ff755807332d45f51634ef104a5af7"],["/page/14/index.html","d6746d6b034f792ca12431a36708d495"],["/page/15/index.html","3eecf027e30077732225e3c163cda984"],["/page/2/index.html","98347b7002d61ba370885b665c51447f"],["/page/3/index.html","dd07e598b21d2be172347951987446d2"],["/page/4/index.html","cfeb747c0b8811a7922b54200db9906b"],["/page/5/index.html","41eb078433472d5eea9c9deb5f94b7ba"],["/page/6/index.html","15fc334c96a1bce8a1e1e9e6fa276912"],["/page/7/index.html","6750511baf55c8fbf7cd115e24d6fe9d"],["/page/8/index.html","804b84b0b82fb3c42d1843ece82e7cf6"],["/page/9/index.html","f2f2dedbd740c6bf4327ad7fea249f78"],["/sw-register.js","269d56fc108589677fd20b2f7ca2dd65"],["/tags/10分作品/index.html","27cbfc3faacb93baad5b7af3d23fbf98"],["/tags/3分作品/index.html","35c3b2da78250adec5337c58a0b16037"],["/tags/4分作品/index.html","893a95933580c08266e602ca80c43952"],["/tags/5分作品/index.html","424835429e76bcd3a552c573a7bec0a1"],["/tags/6分作品/index.html","1aeb8a2e1a499e4a850e9bd0d939d311"],["/tags/6分作品/page/2/index.html","4530a239ac751634264ad41f2cbe56e0"],["/tags/6分作品/page/3/index.html","e244a913e3793b11f822a50d3f1de8a6"],["/tags/7分作品/index.html","72b9df0c3e797cfc0b92442d6039fd19"],["/tags/7分作品/page/2/index.html","25c60a0176b2a49740f4b744e5bce8ce"],["/tags/7分作品/page/3/index.html","9ff14f4c8e89005c62671b15be015cb6"],["/tags/7分作品/page/4/index.html","8383f3de2e3f7a2fb05aa3ff8f8f0bdc"],["/tags/8分作品/index.html","1fbb13ba4cd2853700c247e99191685f"],["/tags/8分作品/page/2/index.html","57e823242f25198c86def64329141b40"],["/tags/8分作品/page/3/index.html","ba91690f3493d1a47c43c26fbae59627"],["/tags/8分作品/page/4/index.html","116d95da36cdc64bc3a34504c7b6929f"],["/tags/8分作品/page/5/index.html","180c43c8532a8f462e3fa2890ed00e7e"],["/tags/9分作品/index.html","ed4cd8e083c919b0a9ad1fc4600d4803"],["/tags/N5難度/index.html","bf15bafed9670a82aa7757b600efd04a"],["/tags/N5難度/page/2/index.html","18abe0b1963491e08ec5e4c99e3178b0"],["/tags/index.html","e8cade705518171a9a3e00cf57c8d740"],["/tags/アボガド６/index.html","655ea2585bbb28a268695830b41220dd"],["/tags/三秋縋/index.html","da696f5d0b79fbad9c5bd1d2c28084a8"],["/tags/中國武俠/index.html","0fdab36638e5231a1ca2942bcca01b18"],["/tags/中國言情/index.html","372ee9e4e526c55800352dda1ff6ad95"],["/tags/二宮敦人/index.html","e1bc062b87801cdce29cb8d5dcbb5674"],["/tags/人性/index.html","6b70c507ccdfbe4db06d07139040ff08"],["/tags/人際/index.html","435b7ebdabeab2c501f7eb509317cf0d"],["/tags/住野夜/index.html","e22d4c381292f0508801dddeba53e181"],["/tags/佐野徹夜/index.html","455d753bd6958452d2fa4c4c5916081a"],["/tags/努力/index.html","d58ed161ea6b3f4a336fa05b606cc36c"],["/tags/動畫/index.html","8748a30c367571e15a5dcd35d86da14a"],["/tags/動畫/page/2/index.html","cc86e059d91da6e388d99efe8b397c57"],["/tags/動畫/page/3/index.html","5da682ea9f7295928dee8d664f57a0b9"],["/tags/動畫/page/4/index.html","eeee455915bf5bf3237580d06859a729"],["/tags/原諒/index.html","26ed019aeedaaac78b0c962773e3a562"],["/tags/反烏托邦/index.html","199ac1defe1ff896479a43d2e2e8cf94"],["/tags/啞鳴/index.html","2c0ac09214e6148874cdbbfb9f3c0aa5"],["/tags/喜劇/index.html","ced764332c15fe2035157d1605e19016"],["/tags/夢想/index.html","8ca0b39cf4e2e95b57bb45984a1a9b9b"],["/tags/天澤夏月/index.html","fc6ac6ea442c95feb66fae6b6321888f"],["/tags/奇幻/index.html","d990d469b93247306f90b444c388cad8"],["/tags/學習/index.html","0a146d01929f7396efebda8c45dc954c"],["/tags/學習/page/2/index.html","c81a6383dc107e3edc22c4ec34e15fc9"],["/tags/宮崎駿/index.html","0194765f7bcf9ae1023dc18803cdf9f2"],["/tags/小說/index.html","13b0f7113b3e83a7f91381d8d6cd010e"],["/tags/小說/page/2/index.html","8737840bd0c43a9633b3e46ffba04bb3"],["/tags/小說/page/3/index.html","3e0dc153ec06d2d4226e2be0a8f6cd00"],["/tags/小說/page/4/index.html","d5a523738c3a8817451586bf2fc5a41a"],["/tags/小說/page/5/index.html","6f6d793b30f2cee761dc2876600eb0bf"],["/tags/小說/page/6/index.html","6b86ed7886a879b30d4b1abc38dc9508"],["/tags/小說/page/7/index.html","a9517a2a31610953993028f8bfb61aeb"],["/tags/平淡生活/index.html","a3155f53dc5f662fba974cf7032c017d"],["/tags/幸福/index.html","1238424548e8b133da86ede0bb29065d"],["/tags/志茂文彥/index.html","0f3908a8c8a9e98015dfa5094fc8c385"],["/tags/愛情/index.html","5a7dbec0ba54b794b393a34e4fe7517b"],["/tags/愛情/page/2/index.html","0739f8a7bd98f30961576a8e1edeedb5"],["/tags/愛情/page/3/index.html","191398ff582d1f845435648a4246cbfd"],["/tags/感動/index.html","75b628484a6184dbd892ad2139bdc9d0"],["/tags/懸疑/index.html","b795fc40189c257548c56372e0af59b5"],["/tags/懸疑科幻/index.html","cc6e4bef7b5d09ddeffef19a054b312f"],["/tags/戀愛/index.html","92c7fc7bb472fccee44c88cbb721b4e1"],["/tags/成長/index.html","27215dc6fb76c69eff7e78a4e3fbf477"],["/tags/成長/page/2/index.html","61179f5f9c598535d94a5eb2fdfb25b3"],["/tags/戰爭/index.html","f65d63b8831af35ed5795bf664f4c042"],["/tags/推理/index.html","0086ca445f819176cc93ad9bd4c59cc7"],["/tags/搞笑/index.html","ec56c797fb2700567e084e3d3f10dde5"],["/tags/救贖/index.html","a010c0f5f33c353b306fe21a7843aa59"],["/tags/斜線堂有紀/index.html","01de1d45a2804430bfe8baf3b7192175"],["/tags/日常/index.html","6cf4221719bde44df15e05e2a9f2e10f"],["/tags/末日/index.html","bc1f4adb471e48e6fd3ece89608735b6"],["/tags/校園/index.html","b4efbc7801a8948bf5e348e97ee32497"],["/tags/武俠/index.html","ddbaa17c049d57238a349cca309a8052"],["/tags/武俠言情/index.html","9224aa82cd76b3a46dbb9f9809322dac"],["/tags/漫畫/index.html","9ae75152cd033408d34d3fe31bd01639"],["/tags/生命/index.html","b1390df2cce7d9dbb93980ce8857fb22"],["/tags/生命/page/2/index.html","9efa1027978fd388533f87d8af2ba473"],["/tags/短篇/index.html","0b470df1d1760f94ecc858ba7c0840f8"],["/tags/社會/index.html","c74fb22018126c55577be984752fba3d"],["/tags/科幻/index.html","19b1019d46fb713d26fe0d24517faafd"],["/tags/童話/index.html","ea80519b4d46e7e191f349e7b2624f12"],["/tags/競爭/index.html","8714d9b104b5cf4a076d1f08342d4fe9"],["/tags/自我/index.html","58d23132fb6abc7fa56f5a44248eb0d1"],["/tags/自我認知/index.html","3cf9a839df6c40e5874b51c1b6be1f55"],["/tags/葦舟ナツ/index.html","4db245d8be9c32c4cdecc2d0b5744d30"],["/tags/藤萬留/index.html","fddc5cb1c8932de255df6643e2320ab4"],["/tags/親情/index.html","aba59dd2da7eb7d9a84c4e68ac4f4b2f"],["/tags/雜項/index.html","0f72bb89e04b19462ba80475a45e58c3"],["/tags/電影/index.html","704746c931758b5fb2ceff61b282bad1"],["/tags/電影/page/2/index.html","a9c5cb63585d1ea9f8f8eb7e02311ff0"],["/tags/霸凌/index.html","e35f04c7d335cef9fab6b65522f526a4"],["/tags/青春/index.html","08c0a42a1ea78670a4f7d1bf4f514b42"]];
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
