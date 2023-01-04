/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","495f242607df0cf1119677c4f8db2e5e"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","fb6fc6ed219346c2af29c2e98d28c493"],["/2019/12/25/Review/無法計算的青春/index.html","9fd916e93911d09821b9baabab863d6c"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","6b475af495675636d9a13256fbbcd865"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","38aa931bbc373940725c3294f71c17b9"],["/2020/01/19/Review/下雨天，不上學/index.html","3faebc5436ce055dd9d4fcae48871e31"],["/2020/01/26/Review/三日間的幸福/index.html","c8d2d7853bdf0aadc42f831b6a65ddd5"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","1f36a075a2a69e6e9f2dae4e63da0194"],["/2020/02/09/Review/青春期超感應/index.html","4d12c1e704ce914c9f422facebc6a42d"],["/2020/02/15/Review/又做了，相同的夢/index.html","852620d6947f8525abfc4b963d2f948b"],["/2020/02/22/Review/回憶當鋪/index.html","37a3e050d99636d0c3a54f752599a1af"],["/2020/03/22/Review/不適合自殺的季節/index.html","a6f5cf0a88c85e467808e7e0d5c99795"],["/2020/04/26/Review/我們都無法成為大人/index.html","027e609c16248df554ea7c9bfb4fc781"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b7ab150591a483b0fc43595dd04eb4fb"],["/2020/05/17/Review/人間失格/index.html","526df56f6edcbcf9bd7564b8b49fab06"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","f179df3c642f7957977bfe420b057725"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","f52893817e690d2d0dbba46d1156e028"],["/2020/08/01/Review/銀河鐵道之夜/index.html","b9bf5440cec809939c745e83bfb0f17b"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","dc21676cc3ea9047f181327fc821174b"],["/2020/08/16/Review/15歲的恐怖分子/index.html","fee5051766c31b884ca9c65bb5dc9c13"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","af17d2488aea2b56fc9cc3b98a3911a7"],["/2020/09/13/Review/羅生門/index.html","13d47cde65e1e81a255c6aad65433c30"],["/2020/09/20/Review/闇夜的怪物/index.html","3f12792b49079d40813e06af7191a902"],["/2020/09/27/Review/14歲，明日的課表/index.html","8412b9734e46e9e42a0b7df0d163c443"],["/2020/10/04/Review/致十年後的你/index.html","584dad7ba19f8d1b04129fb3d3f339e8"],["/2020/11/08/Review/滅絕之園/index.html","9ac27c0c20f219d62696dbab6a895ea7"],["/2020/11/15/Review/將愛拒於門外/index.html","bbc55d3712acc593c2c86e53095e7761"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","54f750c3fd9e67bfdc4b211b24adda6c"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","700af4f04d7ac20ecf2c5d04777c1d44"],["/2021/04/22/Review/道印/index.html","4510738a36b75ce07697fb83dbdc0014"],["/2021/05/03/Review/戀入膏肓/index.html","29b588dc6c0eee6e013ed2e508ff087d"],["/2021/05/10/Review/Dice/index.html","7075b31ebb1656eef5d4433b1cd3e7b3"],["/2021/05/15/Review/魔女之旅/index.html","2c22589b7406ef7b74fd16ced390b90d"],["/2021/05/28/Review/戀愛寄生蟲/index.html","1b374d4195e090264483030aa93341c9"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","91d0d4ff6ef815590ed17c1d2d8ab9a0"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","7ec2d654729027a22b7dd0fa8c273275"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","7d61e8831082184a44cfc3dd0f2cdf04"],["/2021/06/05/Review/流浪的月/index.html","694b46d398f73dd9a4761e0ad13f34a0"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","896721437ffb3972a899dc64adab4dd0"],["/2021/06/13/Review/第一人稱單數/index.html","43b71b66697c65e9ca2fbc1d25ad5e42"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","cdc091bee6efc7caa70070f144190858"],["/2021/06/16/Review/願你幸福/index.html","0abde75daba5dfc72f61d15c6ccaa3cf"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","6dd98af2cfca3bc6e381e53e003aad87"],["/2021/06/21/Review/神隱少女/index.html","225ad4ed4a457ed48d508ad3b43a1f15"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","c30d17db0129f314b9129ee6116cdcaa"],["/2021/06/23/Review/天空之城/index.html","2933397f384e05cdbcfe159cbb59048a"],["/2021/06/24/Review/魔女宅急便/index.html","9260ba9b2e4f728410c9e9d0ec197e1a"],["/2021/06/25/Review/借物少女艾利緹/index.html","12f5e360e4e6164cc06da7de6e5ed510"],["/2021/06/26/Review/魔法公主/index.html","cc859360a0b5ec1e934af510b0946b9d"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","4372a5176e12a8168e60351045a78348"],["/2021/07/04/Review/飛雪與劍/index.html","4a2dfd938aed0fc616c7e93f45d844ba"],["/2021/07/09/Review/地球防衛少年/index.html","b3434ae856fb359d3c623d9991c6ebd6"],["/2021/07/12/Review/Angel Beats!/index.html","b8ad73a6d7c9fa97a33739d892c7f865"],["/2021/07/13/Review/Clannad/index.html","340227878896be5f73bbd5e95489d28a"],["/2021/07/15/Review/AIR/index.html","503ba702c5664596bbd155c02a1de152"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","45db9c834375352606c3e66a0562574b"],["/2021/07/15/Review/螢火之森/index.html","0f37bfd70ce44dcbd237308795b1df14"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","d3ab5ed71cf7a71b3750a9b032089ac5"],["/2021/07/17/Review/奇蛋物語/index.html","df79b6fa74ae0bd72de7a6fe6e04fd8b"],["/2021/07/18/Review/Vivy/index.html","7abe03ebe76dead69c1c8080f68a7d62"],["/2021/07/18/Review/請妳消失吧/index.html","44d9c60a2039b735017d38f38b92e868"],["/2021/07/19/Review/漣漪的夜晚/index.html","ada15065bf0c4f1a2a02935fbbadabba"],["/2021/07/20/Review/月色真美/index.html","69959bef8440140d862740cc2041891c"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","a5e38c65fcf31cd26c7483a6d73370c0"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","099e68333e783bd611b5f2dd8c3d457e"],["/2021/07/22/Review/罪惡王冠/index.html","6504697559e10c22e4150b7cb87da018"],["/2021/07/23/Review/弱角友崎同學/index.html","66786d6e97d385cb2008add901bc8242"],["/2021/07/23/Review/惡之教程/index.html","52f19f22d591d1f6d6d2c09210ded0f3"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","853aa9fed5cc360dfadc7b529308acd9"],["/2021/07/25/Review/魔王勇者/index.html","88f91509215f49ef932a826f08248034"],["/2021/07/27/Review/一年A班的怪物/index.html","f453389528269e1b612ce8e4120e2403"],["/2021/07/27/Review/奇巧計程車/index.html","64cc6b83b7a2bc2743ee81d29fba27d3"],["/2021/07/27/Review/專情的碧池學妹/index.html","7df7b385b3d7f29b3bd13e55ac9db088"],["/2021/07/29/Review/只有我不存在的城市/index.html","0a461e8e98d8ef6a7bf680f09b91ed2f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","8bf5190d786df1a0bd48786adf09fa74"],["/2021/07/30/Review/可塑性記憶/index.html","b988ac56f34efc8d30ffa9a2ab291a9e"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","9790bef7e7bbfc7b9a94c874549ce17c"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","82912b7c5259dc69f32b4c289698a0e6"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","fa5a5a188eaad3ebe16e2af40becd325"],["/2021/08/25/Review/清戀/index.html","4b70470ab7a71816b9d71480f873035f"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","72059f663ec50be7a6129de0539c671b"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7c2544e9b79ac3c4500d89c98448c25c"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","d0775754a6793a3b70207e3be8de4246"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","122baf0603e812fb97297b77186659ab"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","f6cd506bdd93f8366f7d16a6fa2c48d0"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","01588d2eae1f66f90ba3aa85f11fd331"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","00b2e53f4293bca5f63333e62447e683"],["/2021/10/16/Review/龍與雀斑公主/index.html","1bbe2dbe0289bcfeede8695753d725fa"],["/2021/10/19/Review/孤狼不想開後宮/index.html","4a4744a96bc8331ba3825fc5fc78a2f1"],["/2021/11/13/Review/徹夜之歌/index.html","e7d29d865c7681f458cd9129a4038291"],["/2021/11/24/Review/武煉巔峰/index.html","ba425dbc35103600ab9ebc229cae004a"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","8138cea8b02b1696912b8f2a2b52edac"],["/2022/01/28/Review/神醫凰后/index.html","bb5d8f833f716e684ba61008c9bf08e9"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","6569bbb1d5e3c5a952cf3afab9933604"],["/2022/02/13/Review/夏日幽靈/index.html","62dae615bfa0947f08f3cf4bdbc0679e"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","055a7333bca445dd9ab8c5b152da67a3"],["/2022/02/26/Review/賽馬娘/index.html","adc51f7fc02b8a47f7d4d31229ba87eb"],["/2022/02/27/Review/大欺詐師/index.html","b217cc1b18a80a41c8fa9d30884b7322"],["/2022/02/28/Review/前輩有夠煩/index.html","9023a532673718d0e5c688e4320ab5b7"],["/2022/02/28/Review/碧藍之海/index.html","3252387a2f6a2c3d3dcf0b2287eb3b9e"],["/2022/03/05/Review/落第騎士英雄譚/index.html","f544e448c0d72a9307b36160436cbeba"],["/2022/03/06/Review/Another/index.html","b63804c89b9f1dfdb510ad9bc130c4fe"],["/2022/03/06/Review/入間同學入魔了/index.html","ba234eb96a1382e9d8ad319e729ea3d2"],["/2022/03/18/Review/再見宣言/index.html","1d239b9609074f02f5ff2d5d070de2bb"],["/2022/03/23/Review/生若冬花的妳/index.html","e5245b16a5095e943740217923f0e01f"],["/2022/03/25/Review/天之弱/index.html","a468be7233c76c743f47ca7045751a52"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c3f9796857f6a0a4173a3d96d3dd4a5b"],["/2022/04/30/Review/泡泡/index.html","f2bdf9a0e381d7d55dfa538cfd7a68a0"],["/2022/05/04/Programming/Dynamic Programming/index.html","05cd25bb24e9e83aa29cd87bacc1ab05"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","1706b8c79fd88b9f7d1b38ba3d6d8b7d"],["/2022/06/13/Review/偵探已經，死了/index.html","ee3328932b4008c7e25d71893cf853a4"],["/2022/06/14/Review/黑色子彈/index.html","c2e7bc8dbeac350f3f9e5b730f49a36e"],["/2022/06/15/Review/黑白來看守所/index.html","0fdb3084c4380c2f0777b85d07bb0a75"],["/2022/06/16/Review/虛構推理/index.html","dbf403bbf7861f3c2215913812db1fce"],["/2022/06/17/Review/戀愛與謊言/index.html","d3824757f54c8ac19c277976f973444a"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","dc663a52049b5e564dd81a315b6b8201"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","d69f67c70bc588c7bf621fae9a4e6b7a"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","7a406656667a39f676e5c46b8ecfe118"],["/2022/07/03/Review/Hello World/index.html","f2425149792ed44cedb03bcfa948934e"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","6b27dfae8a3bbf6266f291af8d1a8d61"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","d16c9864a479f6e031e53c57c7aca608"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","0a61d54d9982c59d1d973698ec16b60e"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","85d57ac58243353faa593193f4dbfdc2"],["/2022/07/16/Japanese/動詞分類/index.html","720ae0f468c558d9b22f9cfc2a1d7907"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","ebe48aac7448207c5587936f1d1a085b"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","648d36d05362303e0559108b45ded227"],["/2022/07/17/Japanese/音便/index.html","704997eb3daf846749d3b6badad662f1"],["/2022/07/18/Japanese/動詞 時態變化/index.html","b588d5c76eee9747cefa2777ef8b7b8e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","315ce31d9c78e80d529d0e4eba11cc66"],["/2022/07/26/Japanese/助詞用法整理2/index.html","005da49b49d9282cdb74a0d546cacd4e"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","2c92c4f3840184ffa2c4b82498ba6122"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","64aaa1b661fe919b14a747a94b299ea5"],["/2022/07/30/Japanese/疑問詞/index.html","3b7ac006257c59c7d0fe19df55966c7d"],["/2022/07/31/Japanese/助詞用法整理3/index.html","e529157f876977b3b704cd3209a16dd0"],["/2022/08/02/Japanese/副詞整理/index.html","b2634db5d56510b903faff799324662f"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","590b1f906b483303ffb1bf47fe2da437"],["/2022/11/04/Programming/Data Structure/index.html","41f106632bb77ac7a690c9b87459fbad"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","8cc00c9150c166d3baaa11a4c77c3957"],["/2022/11/22/Review/組長女兒與保姆/index.html","94e6260b67a880d154cd4c6462692c98"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","4be5fefde72b2a9ffe93943e4e290981"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","b57d4aefe6b0152daabbd7f9981390ea"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","0fa0c8eb6ecab63632a64c7ded759125"],["/2023/01/01/Review/あの夏が飽和する/index.html","0d8e72eb723b955ba68d6f185d349ce5"],["/2023/01/02/Review/孤獨搖滾/index.html","fd08862a45fe83b5106498065d496c6d"],["/404.html","96488762feca376397983f35eb53c81a"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","436d1b858fba392e9c63f5eecbc18374"],["/archives/2019/11/index.html","fe54b0f7c6e6aecda4fb1d173bdf3ef9"],["/archives/2019/12/index.html","82a6d150e4d7c1d8c8d55fd93012c838"],["/archives/2019/index.html","4e389352e195eb3cbb2d07fb19e2b678"],["/archives/2020/01/index.html","1b2a1d2cc29b61a74e26bf1a303c7c8a"],["/archives/2020/02/index.html","0cde5a2cc527a55d11e8dffe7158021c"],["/archives/2020/03/index.html","070f3f5e87541016340f89adbe2eb85a"],["/archives/2020/04/index.html","04566b2f193c60d1424a085e31dc02bd"],["/archives/2020/05/index.html","93326ac1c64ca738ad2da7603b872ff4"],["/archives/2020/07/index.html","cc41f2b679b5b05205e72d6ba0103e0d"],["/archives/2020/08/index.html","5033758d99d52168e5adfe171db07b61"],["/archives/2020/09/index.html","01f09767345acac4a204998b68d16bfc"],["/archives/2020/10/index.html","d0eaf4d6f2872fb6a4a5fd3281da5b3d"],["/archives/2020/11/index.html","70b867c7d409ee5a42727949f3ae2cb9"],["/archives/2020/12/index.html","7f6720c9f5ee1d2a5ebb16159d2f5a44"],["/archives/2020/index.html","d93bcdef83408abe1ef3f826a28072ca"],["/archives/2020/page/2/index.html","5481fa73ffab9d2907923652a5d1c9ad"],["/archives/2020/page/3/index.html","edff5ff3d675e59d3e9c510bf64af27f"],["/archives/2021/04/index.html","bd0da357e5bf5d6bc3421d3656887741"],["/archives/2021/05/index.html","4e4693bd7cf4e1b0decd700481c50b8d"],["/archives/2021/06/index.html","135da596376b7832a48417a9396fabef"],["/archives/2021/06/page/2/index.html","7fecbbce7159265a4353c0cd51998a18"],["/archives/2021/07/index.html","c46eb9f25f96a8fe8cf9e88830e94dda"],["/archives/2021/07/page/2/index.html","c48d9121b23546b6bb355f83a747d08b"],["/archives/2021/07/page/3/index.html","2082b76878fe3c1b0ad98f6a123f9bd3"],["/archives/2021/08/index.html","b4e9621dbdc1b53472dcef7a8233e913"],["/archives/2021/09/index.html","105a00609dca19e56649846ecd7a0d04"],["/archives/2021/10/index.html","dd4dc7e5bf9b1e73c3f1c2d4ff2a4b5a"],["/archives/2021/11/index.html","4e643b09582e4c2f45b83ebd405a365c"],["/archives/2021/12/index.html","7603a4c0a206960847070d36eb9b996e"],["/archives/2021/index.html","0517fc99945b1a6908c8245403a69916"],["/archives/2021/page/2/index.html","903a4b3daaceadf02f22ad3ff1a67be1"],["/archives/2021/page/3/index.html","bbd89b618e65915fd87f94e5441fd5e0"],["/archives/2021/page/4/index.html","5220dd94424419c4c7ae6b3adaacff67"],["/archives/2021/page/5/index.html","d423be8047942888be4daafa6d4c89a4"],["/archives/2021/page/6/index.html","248dfca9d89a35170d142e40daf5cd0e"],["/archives/2021/page/7/index.html","50ba227e2696b0c7fa290801bc095981"],["/archives/2022/01/index.html","4727b72fbfe2ab1da02684ea50cb6a6c"],["/archives/2022/02/index.html","ee1efe7d9e933085f19cbc1be8d89604"],["/archives/2022/03/index.html","0224b1ede3718bede9c0b755557ecc10"],["/archives/2022/04/index.html","f9c2c73b5baca3fd16d3031d1708c2f0"],["/archives/2022/05/index.html","27c0f941d9550db20ac2923130ceccb7"],["/archives/2022/06/index.html","496b2f8f0e975ac1d682470bf67f3665"],["/archives/2022/07/index.html","76d9755954a71bada3ecfbab8bbee7c4"],["/archives/2022/07/page/2/index.html","7935fa82a607b9231626bb91a2f2ec6d"],["/archives/2022/08/index.html","79eac503ceed35f065dfb920c47bcfc5"],["/archives/2022/11/index.html","d2b435ff44e4274021636e894a3bcc4e"],["/archives/2022/12/index.html","7a20dc20acc8cd6ee8b74d801dfd5397"],["/archives/2022/index.html","4fc6579d87d7a1c769876ef2137146dc"],["/archives/2022/page/2/index.html","1c65c54896eb8553e409a2837ef93f99"],["/archives/2022/page/3/index.html","c1355b9660de7ad6cbd7e4de98511699"],["/archives/2022/page/4/index.html","8e9739fb0c26bc7f3ba6b4338a989cb5"],["/archives/2022/page/5/index.html","b85cb18860dd1781e4efb6dbd367f62e"],["/archives/2023/01/index.html","6dfa5bc6dc706c247761f99f0074258c"],["/archives/2023/index.html","857a7cd5a2500af00ce06a8831e20fe8"],["/archives/index.html","42d837fc141cb0063865618b9b654c6e"],["/archives/page/10/index.html","1ea75ccd5b46bfbbd5a8af7aba66f02c"],["/archives/page/11/index.html","43704ffb7db56edca30c257472dba1c9"],["/archives/page/12/index.html","7eb52f0238b5faa0a414f3ffe513fe30"],["/archives/page/13/index.html","c1e51f38f94fe3fb02e8dca2886ada08"],["/archives/page/14/index.html","af64c15fa68dedda44bff73eeda79e85"],["/archives/page/15/index.html","5d453a16a37b87d7013e183f0f6fdff3"],["/archives/page/2/index.html","55dc618e90961c4e1d5453143f9bddd6"],["/archives/page/3/index.html","6e71ed1799adf44eb3d1247eb468436b"],["/archives/page/4/index.html","cc85e4f2a1f08f04c97c417985472bd7"],["/archives/page/5/index.html","fad013bd0451478ae93f31849d958962"],["/archives/page/6/index.html","7d079e2b57bbcf363da5ad617e26e35a"],["/archives/page/7/index.html","17b1d678631b60f20cf4e16d7febb0f5"],["/archives/page/8/index.html","e85db8169b519cfff917454c5953f739"],["/archives/page/9/index.html","b7473fa20a68ae7ece15af8fceeff551"],["/categories/Programming/index.html","fec71a5e9a2ba63068c083c42a6970bc"],["/categories/Review/index.html","d0b9cb36369ec5100e9c77905078f5bb"],["/categories/Review/page/10/index.html","a21056f6a50a13a94a367fe982dd1756"],["/categories/Review/page/11/index.html","dbe8408991c020ad9b16a3d253254d56"],["/categories/Review/page/12/index.html","65ed7cea88c256d74ff3d13f3d18a28d"],["/categories/Review/page/13/index.html","59aef8c0fbea7335ef1a31a60799dd60"],["/categories/Review/page/2/index.html","e8e87a8233ef786007bb218375e72bc8"],["/categories/Review/page/3/index.html","915bf8ecd01c76d7610569a84d3758b6"],["/categories/Review/page/4/index.html","37314c2cbc9cd5f43a730c1af5a31d89"],["/categories/Review/page/5/index.html","b839c2c4e30c2977c887cc65a563144e"],["/categories/Review/page/6/index.html","0b0db226c9a0e66f524fe574dc63c03d"],["/categories/Review/page/7/index.html","f44489e995ce252eb78f027a7f32e660"],["/categories/Review/page/8/index.html","1c357d49acbd976c3c395f2cfe17473a"],["/categories/Review/page/9/index.html","263af8f94bce24faef7887ccb618b5e9"],["/categories/index.html","bf8cf2de963becf5b0f393a95f67b2b7"],["/categories/日本語/index.html","43448ae1a7a6ac48852def4779edddb7"],["/categories/日本語/page/2/index.html","4e14047f9fb12798104548da3ff56864"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8a5c57aea88d56b43d0e29253544d872"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","fe727d11324cf2ed65ec98fb7d390a41"],["/page/10/index.html","672221b52e58a77109644a748b1012b9"],["/page/11/index.html","0712517c491718fb0f126dc7ca67bf3a"],["/page/12/index.html","ed5b41a1410c468cedbd7fba1d5fff55"],["/page/13/index.html","9b87bc93750bc610795418e77e399564"],["/page/14/index.html","333cef22f59caceeda0bd6b28cec6425"],["/page/15/index.html","e19133ee8dbae89c1934b2b95a50938d"],["/page/2/index.html","be2a029dd3174ca6d787653643125865"],["/page/3/index.html","c2e9f65fbd477b9c6bff0c25678eb44d"],["/page/4/index.html","4eefdf5c33a1ad9026984139b76f138c"],["/page/5/index.html","afbb3336c6ce208ab0317401be08d56e"],["/page/6/index.html","90e55ec9e36e2089e961a5112980b37a"],["/page/7/index.html","bc869a82a6e0ab02a2041ff46dc7fb8f"],["/page/8/index.html","1aedcc95b086adb72ec14f180f34d343"],["/page/9/index.html","d0ed875a71a46b1b00767ff68db3a654"],["/sw-register.js","998f8418ec0597a9bf277b63f41b8c37"],["/tags/10分作品/index.html","a5d1016c48dab098676346f9f85c64f6"],["/tags/3分作品/index.html","5894c531984afdf00ae2dee40cf010b2"],["/tags/4分作品/index.html","0d5443032ba7884decb18277598ea601"],["/tags/5分作品/index.html","2d25cb283220940d77d6f5d11206fcb4"],["/tags/6分作品/index.html","69f0e8dc1fa703c90c3feef0f5dd83d1"],["/tags/6分作品/page/2/index.html","90a9cf5e3807beff34d3a29edbd6e18e"],["/tags/6分作品/page/3/index.html","62f82f00d19858b3b246aef147d7d6d1"],["/tags/7分作品/index.html","1b5b6227ccc80aa1603256bd4bf5fb22"],["/tags/7分作品/page/2/index.html","8cac42cf82b3b7ce3b420ee499b1f3d4"],["/tags/7分作品/page/3/index.html","e92b58f3df862575cc456af8791783d9"],["/tags/7分作品/page/4/index.html","54c4b74a56021e1fa5d3668ed9522f27"],["/tags/8分作品/index.html","4cdbc470afe9f83557ee9588e36fdece"],["/tags/8分作品/page/2/index.html","6e8cc3c8e82109cd8256fe355ca4472c"],["/tags/8分作品/page/3/index.html","f6aaf7469888237fe0f7452877eb926f"],["/tags/8分作品/page/4/index.html","c85a791bf7e14b31405bebd32d7e11bd"],["/tags/8分作品/page/5/index.html","2bf63179a6fa073009ac640f772317f9"],["/tags/9分作品/index.html","776e4eb99a269c8f55e08e4468be9b94"],["/tags/N5難度/index.html","b207df0c0228d97fe4e8ef3a7486974c"],["/tags/N5難度/page/2/index.html","695b047dcfe1e42501f2c8d16de816fe"],["/tags/index.html","ee82119943a370dec0b3a69b0f63e416"],["/tags/アボガド６/index.html","285f302e42a6fbc3fec428c452738df7"],["/tags/三秋縋/index.html","9d905bfd9a0f1e77c0926607190db13c"],["/tags/中國武俠/index.html","fd6a9b22d521cd24525c33731bb602af"],["/tags/中國言情/index.html","df56b93f89662930f1983e6d2f8b7a88"],["/tags/二宮敦人/index.html","ce91ed8e7bbe4cb64c83ce13fc78bd78"],["/tags/人性/index.html","8ea4bd9c5f1527d5756d12c68b998c15"],["/tags/人際/index.html","ea251c4f4bea0227bc5c0985093207c6"],["/tags/住野夜/index.html","d1843f4fc5d9a66056c2024ffb30bdf3"],["/tags/佐野徹夜/index.html","37155941bca0ad57bcf6b5f503bff0b1"],["/tags/努力/index.html","d83c19ebcbbeff58d0b9f2a92091f23b"],["/tags/動畫/index.html","4cf8d6bbb4722121fa497a8254daf204"],["/tags/動畫/page/2/index.html","c66d1b3562f75365287bff133cae0ec5"],["/tags/動畫/page/3/index.html","bf19226249917ed0f887860f2b87bafa"],["/tags/動畫/page/4/index.html","e12d047d99ca959b47e38c2a4a8e395b"],["/tags/原諒/index.html","2128678734bb9c24af4e778daebbd431"],["/tags/反烏托邦/index.html","6ee800444aa207481dba2e6533844d39"],["/tags/啞鳴/index.html","9d29443a7fb4f80fa4166a0a68eae95b"],["/tags/喜劇/index.html","2bb3adfce46c7d20ac12b841fc6b5b13"],["/tags/夢想/index.html","27867270def1c35ac5125368c6598022"],["/tags/天澤夏月/index.html","5fe09606cee67d098c073c8501691599"],["/tags/學習/index.html","03ebdf50553eec0fc3012ee3a0de25c6"],["/tags/學習/page/2/index.html","bca90d99c8955f4f12f3195209f580e7"],["/tags/宮崎駿/index.html","789b9f351458ea42e3aadc51afc20dd8"],["/tags/小說/index.html","8ebe6d25f2bb35f30104020928993e2d"],["/tags/小說/page/2/index.html","611dab14d6f5ded0aa7ef25b100e873b"],["/tags/小說/page/3/index.html","d9b16d7d1270c50d975897192e7d08fd"],["/tags/小說/page/4/index.html","4660c01d466c79e2051fd6a62490dc09"],["/tags/小說/page/5/index.html","2b6c4865f1fc480112cc6e0c4f9adbdc"],["/tags/小說/page/6/index.html","6f70387eeedf91d6b6f557b6714846b0"],["/tags/小說/page/7/index.html","3d0ad7bbf32f2d4c63eb72854a90af8b"],["/tags/平淡生活/index.html","d445935e4ef9df764d158cd8842ba8d0"],["/tags/幸福/index.html","ced44da394b3b826af89369bba74db12"],["/tags/志茂文彥/index.html","d252561a1b6d6f308132f572928f8e93"],["/tags/愛情/index.html","352a5c4f42f9bc2dee72788478fde72b"],["/tags/愛情/page/2/index.html","aa427c68871a5075a0afbbb71566c098"],["/tags/愛情/page/3/index.html","aa6db6240d0e19ae72dd3813bc7523af"],["/tags/感動/index.html","48883bfe6ecbf2554c194b8511b4e203"],["/tags/懸疑/index.html","c0bb94c6c00585ac41c7c5c182a5344d"],["/tags/懸疑科幻/index.html","6ab3804317cb60016e34ff19f6ec8180"],["/tags/戀愛/index.html","acaf88f2bbf8f9ee8dcae86cf69ae449"],["/tags/成長/index.html","130d10cd75151bc56e11638918d06e52"],["/tags/成長/page/2/index.html","d3b4fc11918cb8d1df35661f3024cee9"],["/tags/戰爭/index.html","87f6fe697d447ff0035047ed80ac33e6"],["/tags/推理/index.html","da304a83c41326e2a9dca841a491b73a"],["/tags/搞笑/index.html","dfffa52ad0cfc16d5cf8f7f8df66105a"],["/tags/救贖/index.html","e504e9627de9a592fb8a728aeda477d7"],["/tags/斜線堂有紀/index.html","66da946837a37ab152731c80260cfdd6"],["/tags/日常/index.html","5cd29b082adb26ecf143f0c05763b313"],["/tags/末日/index.html","18797c05f7045dc9a5379576869f617f"],["/tags/校園/index.html","e8769cd0105f2ccd380afd7fd776a025"],["/tags/武俠/index.html","1a2b8d7804c0cd23448e239668e15492"],["/tags/武俠言情/index.html","10b87bb9f095464f3eaf20cb8bd1383d"],["/tags/漫畫/index.html","b877b775d094fa4ac672717eff9fb474"],["/tags/生命/index.html","43d84c6ac645ac3c9507a06b896149f7"],["/tags/生命/page/2/index.html","22815be523eadc449ea30d332fbc2f5d"],["/tags/短篇/index.html","fc6880663deaed6b6b15489e69e48138"],["/tags/社會/index.html","12e3f08d214c22435880b6ca38d8c6a1"],["/tags/科幻/index.html","f7c4384a2be1b3cee6199c9da715f691"],["/tags/童話/index.html","b7432777e92d632ecb79aebbf56ac713"],["/tags/競爭/index.html","e3f140979d4f72f3c3a709c06cc78842"],["/tags/自我/index.html","5c358a239b3a02997fa243886b14de5d"],["/tags/自我認知/index.html","82a1c71998ce80e5504478f24560bbc5"],["/tags/葦舟ナツ/index.html","3a7a103fa347678376c2f335d284116c"],["/tags/藤萬留/index.html","00f1ad62853242c2889985b8d25fb5d7"],["/tags/親情/index.html","897b42d32e07ddb189c95bd8b4989205"],["/tags/雜項/index.html","4e8b02c9d7d65ad98ab5821abe56e8b8"],["/tags/電影/index.html","884ac92422ec89ba425312b0de22eb36"],["/tags/電影/page/2/index.html","4e74cbe3d7c111362d638aeb2a70a155"],["/tags/霸凌/index.html","634ad20178fafed2ff5b698a0c37f295"],["/tags/青春/index.html","f896f5ae87b765fa1f4c1284e2b4868d"]];
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
