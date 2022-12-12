/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","18c5babe22c0e053a8e7a4cafcf30cf8"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","7aec66fa5e43eb801a61b2a626bc8bf7"],["/2019/12/25/Review/無法計算的青春/index.html","fc44d46fe5dbf13ed1214f0702a64706"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","8f1fad6428af9e36d9f7adf606ad0ae6"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","bc51d9ed85cfa819cdd6effcbfa51aff"],["/2020/01/19/Review/下雨天，不上學/index.html","c4cfa894b554327fa1b51bdeee44b18c"],["/2020/01/26/Review/三日間的幸福/index.html","f1fb959f407c6829402f993be81a9778"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","d10abee583bb3b7f0fa50aa86d618ce8"],["/2020/02/09/Review/青春期超感應/index.html","162e1bd63f04bd8cd0564c0502b2b2cb"],["/2020/02/15/Review/又做了，相同的夢/index.html","8c83f34dd6ae600b3810981605491eb6"],["/2020/02/22/Review/回憶當鋪/index.html","fd91c5aab3305628891f04f282a77046"],["/2020/03/22/Review/不適合自殺的季節/index.html","c5f39cb8458e8644ccc906a29d78e93e"],["/2020/04/26/Review/我們都無法成為大人/index.html","d070f62020b569c601174f98d5be2240"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","8d8875e8b14111c88f92b41547f05269"],["/2020/05/17/Review/人間失格/index.html","e26cc51a24a48f736bf87bd893e92516"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","dc2577e358668b6eed14f0bdc8d7f91c"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","51295e46fbc74fdc38eeea6e563a28ca"],["/2020/08/01/Review/銀河鐵道之夜/index.html","447073162ba64889c94818885c3cb705"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","1cfb1781f0bb87879f9f2b3b00329f76"],["/2020/08/16/Review/15歲的恐怖分子/index.html","2468023ff637eac9a7d8fcb116b48260"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b4f78adda66ffe228db61a66cba94b1a"],["/2020/09/13/Review/羅生門/index.html","1b7b4dfca05801b62473351767c45f4e"],["/2020/09/20/Review/闇夜的怪物/index.html","42a6ed17a560466dae259f13b4bdc400"],["/2020/09/27/Review/14歲，明日的課表/index.html","70a20ac12d232eeb9d4394558d642aa6"],["/2020/10/04/Review/致十年後的你/index.html","3ce1de2f44cec0cf681be6e6882cc899"],["/2020/11/08/Review/滅絕之園/index.html","12259700b5d3423215b17ee5a09f644c"],["/2020/11/15/Review/將愛拒於門外/index.html","5198045efcb2f120cf3d7d8208a25cf6"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","df67c6df97af8a9dc2ca0cf0e56111be"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","8a8565381f074ffc89a0d92b7d1bae64"],["/2021/04/22/Review/道印/index.html","6a3a6225a929fb92096e47b0bf6bfdb1"],["/2021/05/03/Review/戀入膏肓/index.html","9daeb8539e64dd87bbcda18c25742853"],["/2021/05/10/Review/Dice/index.html","0ae697042a5bf296dae38f50bfd418ed"],["/2021/05/15/Review/魔女之旅/index.html","b0571a11f351b93bc94819f755742310"],["/2021/05/28/Review/戀愛寄生蟲/index.html","2441110f325f22b819616b1237a97998"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","deee44b4c1b47045dc945d2886f18a48"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","46155c5750940bc31887102630a9a191"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","c86f845da4fa752c5fa479635eb2ad6a"],["/2021/06/05/Review/流浪的月/index.html","95a8b3d14700b957b68f008026eab947"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","2db00b93e4b158c9e1e44b5a866a9216"],["/2021/06/13/Review/第一人稱單數/index.html","e3cb8d33f9c26d3c4afe1b1055426518"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","dfb64d7916c7cf23ede0b4f4a503f786"],["/2021/06/16/Review/願你幸福/index.html","26a7d878bb65e49689db0d3acb5fdda0"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","a7db36a4b8417ceeab04def969768d7b"],["/2021/06/21/Review/神隱少女/index.html","8470ea83cb6cba600e3a6a14151e7c59"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","98e274036875ebd022e83d4b75695aec"],["/2021/06/23/Review/天空之城/index.html","edd9c18b7accb936a8cd80b787fc0773"],["/2021/06/24/Review/魔女宅急便/index.html","b49f0d3cca5aa2e9607ea936c5761398"],["/2021/06/25/Review/借物少女艾利緹/index.html","e863472252454be45a6be46adf887e76"],["/2021/06/26/Review/魔法公主/index.html","095c594709501fea93d7473654daf312"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","1a21bc29e2aacba98f12652fa3a3a89c"],["/2021/07/04/Review/飛雪與劍/index.html","fb828777e3ea0d2ff51c10c06313ae43"],["/2021/07/09/Review/地球防衛少年/index.html","dc1f4d07be89b5375d3801eda2132f27"],["/2021/07/12/Review/Angel Beats!/index.html","72ba41b530d42d1e77f7f7bf3a7e1aa3"],["/2021/07/13/Review/Clannad/index.html","bb4aef144e08c8205f7f4e012f789ae0"],["/2021/07/15/Review/AIR/index.html","7e2e908fb3c53bbae7234cc292d59bb7"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","6dbf72e6eaab2641129fbaea9ff3d070"],["/2021/07/15/Review/螢火之森/index.html","1cbb547c4608c59a19998ad20effe978"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","bff16cca81a0a8f43bcc4b4c4e06f92c"],["/2021/07/17/Review/奇蛋物語/index.html","01b73798a5a7bbfe086763721e2a91ea"],["/2021/07/18/Review/Vivy/index.html","cb2c28653e294f851a452febed6ab101"],["/2021/07/18/Review/請妳消失吧/index.html","c77c4afdcb6cf582af54b649d696ac2b"],["/2021/07/19/Review/漣漪的夜晚/index.html","97aa88ee7fc697f95a93a506d19839f1"],["/2021/07/20/Review/月色真美/index.html","4022010734be3b55aac92325ce7c75ec"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","1d3aa8aa789223d0052ded46a82aa795"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","9bc06aca0651d636deff91024157d7c6"],["/2021/07/22/Review/罪惡王冠/index.html","f619a5df914d202163418a39dbece7d4"],["/2021/07/23/Review/弱角友崎同學/index.html","27dec9816e8e0a19894b8613596d797f"],["/2021/07/23/Review/惡之教程/index.html","393c0789f106aecbc5a7cb7e6635a640"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3919d1ca20c299f1a013556dc60d1425"],["/2021/07/25/Review/魔王勇者/index.html","92616b3e110f74300f4afc1f9946fdfb"],["/2021/07/27/Review/一年A班的怪物/index.html","8ceab3bec44dc3479e2ec362f341dc34"],["/2021/07/27/Review/奇巧計程車/index.html","74193c5135c2bb59deb1ada86a0ad798"],["/2021/07/27/Review/專情的碧池學妹/index.html","011018cdcdec617dfaf8c6e03fb7ad2f"],["/2021/07/29/Review/只有我不存在的城市/index.html","84312ce57409720a1375e65b9e563594"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","60e25975fd212efd417d8e3ac00f428c"],["/2021/07/30/Review/可塑性記憶/index.html","373e90e3b391992461ea495ddbebe651"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","44f636a7e9e41f54c6aadca09e666f4b"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","2356a299aa27f634c6a0f9aa9979c3e8"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","b43aeaf40c034ecad0faf9f336b8c686"],["/2021/08/25/Review/清戀/index.html","63523e1cc2ab29d0f608398c6f9b8218"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","d5e623f0b7b228c67dc384fcc601f04b"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","949c6e783e904e0511ecd14eb1172725"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","318f96e1a6cf01f073ca1d2d08bdc3bd"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","d9dde1655fd0b608c123a65b8ea3e4d2"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","0bdd0fa1223d055f7e7c12656d6df646"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","c95073403f425b3b684fa5adc31de273"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","453152741385b7cdbff664fdfc2bd001"],["/2021/10/16/Review/龍與雀斑公主/index.html","1dc9bb2e0675bf5b23e20261bf1f7e32"],["/2021/10/19/Review/孤狼不想開後宮/index.html","36e1d3f9851907c315b7557decc5afab"],["/2021/11/13/Review/徹夜之歌/index.html","182af5bf699767adc6c6f83251942784"],["/2021/11/24/Review/武煉巔峰/index.html","df7ec202cc93be8fe6b6df1aba1c2ffe"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","8b4848f47db2fb28e148cfc3d1198609"],["/2022/01/28/Review/神醫凰后/index.html","da4cdfda7bd6a11419755cf86efa516d"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","8178fe7c83a0f3564bac3cde5b030133"],["/2022/02/13/Review/夏日幽靈/index.html","27b367a54c07fc1b8b16c9b71401dbf2"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","2ae6f965e6520ea6eefd704fde4f57ed"],["/2022/02/26/Review/賽馬娘/index.html","863680e2cf267af0ab142e1ddcc3c080"],["/2022/02/27/Review/大欺詐師/index.html","88a05903f3d9c83be12b15e7a054ada1"],["/2022/02/28/Review/前輩有夠煩/index.html","43a73cc138caf5bcca4253350f68e8d5"],["/2022/02/28/Review/碧藍之海/index.html","8054917d4f89eb2c5f483ce45f72b080"],["/2022/03/05/Review/落第騎士英雄譚/index.html","c7f6008080755be5568e9f4250a3b4ef"],["/2022/03/06/Review/Another/index.html","320734b7809fa155341bd1689aa64b51"],["/2022/03/06/Review/入間同學入魔了/index.html","a40d286cb8736aeb0a8eb1558a8e80bd"],["/2022/03/18/Review/再見宣言/index.html","ee0f9c1e4690b2a55794dc7de6b7fa37"],["/2022/03/23/Review/生若冬花的妳/index.html","ec1d8fce17a7cbee3a3a50eeb379f2ac"],["/2022/03/25/Review/天之弱/index.html","e3b3f7985a50964926ea735ef61985b4"],["/2022/03/31/Review/滅了天道之後轉生/index.html","15710437edb83aaec93c5b1e3787fb31"],["/2022/04/30/Review/泡泡/index.html","c120c063a56a5c1547be960ecfc8cfa4"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","b650d71d2c4a8d9ba0638b2259d9785a"],["/2022/06/13/Review/偵探已經，死了/index.html","4ad8beff10eeeae54ab8cc540ae316df"],["/2022/06/14/Review/黑色子彈/index.html","5d69e7be42a0ee03878103276f412557"],["/2022/06/15/Review/黑白來看守所/index.html","b607d93c255e60d4a4bff193dc0e3200"],["/2022/06/16/Review/虛構推理/index.html","998a6874ff78a98de898b2ffec5c9bc9"],["/2022/06/17/Review/戀愛與謊言/index.html","be6f2274db69bb38dc6a1eed5b51d67f"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","e2111200fe81e7430bd7c358be0d1661"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","2b1aa64c5d2fc172f11250bbda196cec"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","cc786cb551f0e6b72e836702e55c8197"],["/2022/07/03/Review/Hello World/index.html","5dc1a844eb13c92efde6b82278d2875f"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","0482543e33c817fdac65ce5b9b511048"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","f54835d29738168809b4338909e44f6b"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","9a58b5f9d47f220e7fa9659a9f1cb2ca"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","bc8d830d707f3e5516826b9450e2ff97"],["/2022/07/16/Japanese/動詞分類/index.html","ec416fba7b35b6f077218367927cc807"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","45bc11c56dad41bdebff220282439244"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","d14b8f4c3de9e0f2c120c8c45ee0cfcf"],["/2022/07/17/Japanese/音便/index.html","36ee5180a16331036eb110d6e19d5243"],["/2022/07/18/Japanese/動詞 時態變化/index.html","2135565ca7f3a7ef0e322bb9d5562668"],["/2022/07/19/Japanese/助詞用法整理1/index.html","01d8a429cbe1eaaf68bfac362c91ddc8"],["/2022/07/26/Japanese/助詞用法整理2/index.html","2a82aa098b72165d0fb4e7118827021f"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","38ba7744148fb93ad55d958df5bea766"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","cd278095ba0bbafe9a58e0e6c777988c"],["/2022/07/30/Japanese/疑問詞/index.html","bfd00fa0878c92b7cd0dece264e869aa"],["/2022/07/31/Japanese/助詞用法整理3/index.html","64dbd736055dfe261210d654bb90eb2b"],["/2022/08/02/Japanese/副詞整理/index.html","56e56457caae17accc8b20f8253ffe7c"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","a234d04337c5daea6fd5c83d52a78cf3"],["/2022/11/04/Programming/Data Structure/index.html","f7555e5a81c9f1770990fc2d3be0428c"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","1a2746bdb9d21f997e7b4cc9aed88ce1"],["/2022/11/22/Review/組長女兒與保姆/index.html","8c15e890c89a3e332096cb9fa82abc08"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","8adf47ed701b686a892cb02967375405"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","668442dcda89af74b08e03ff5b88a46e"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","be2037905942703ab0f458919c8539d5"],["/404.html","da22b386566d271e9f7832314dddeb0b"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","47e91da12f79cdaf5775f28aa4337ae7"],["/archives/2019/11/index.html","3cba0dddc0859665302edab976107ed9"],["/archives/2019/12/index.html","520ccca8f7a960a6fce9d524c75ab291"],["/archives/2019/index.html","58f96f00eb24d4b3ffe13d75fa3bfe13"],["/archives/2020/01/index.html","b34d6a8e7963138f7ea667140d5bf470"],["/archives/2020/02/index.html","4f60e0a20c89c2a7244c600a51d12e0d"],["/archives/2020/03/index.html","c1dd90801be731437980f5a77e10f672"],["/archives/2020/04/index.html","cd92efa7c302bd1687a88c31b5f7d8d5"],["/archives/2020/05/index.html","444cc148e2816645969948fe62504b92"],["/archives/2020/07/index.html","0485e310dd8e94ff251920539a9ce1c3"],["/archives/2020/08/index.html","2aaae13b429fb89be3d16b47ffeaebb1"],["/archives/2020/09/index.html","e34ef1ddf49132b4a9afeeae4fc0e836"],["/archives/2020/10/index.html","e6f7f81f946eeba87545e60865e5f263"],["/archives/2020/11/index.html","5a3c45b4f2b63d74ffa221a0373cfb75"],["/archives/2020/12/index.html","c122bf9e74c1630a2df310341dfa8c50"],["/archives/2020/index.html","d0dcc7a889fd24a6c310be89b703e999"],["/archives/2020/page/2/index.html","7bbff7a609b2773d198bea0addcf9dd1"],["/archives/2020/page/3/index.html","e2b504da467e0e53c8c575ebbfc95bdb"],["/archives/2021/04/index.html","44ca7c4aed889445938f6b41a8399106"],["/archives/2021/05/index.html","33083ee2f8ff6384d223bfd5359dfe90"],["/archives/2021/06/index.html","d65c8f122034e604685edfb954a90999"],["/archives/2021/06/page/2/index.html","eb1f4ff6232dac6f4729771ebf39dd35"],["/archives/2021/07/index.html","6d3a193583f75df511695215634ebc6b"],["/archives/2021/07/page/2/index.html","ba33c99c7ab8e7d4b51997da799399dd"],["/archives/2021/07/page/3/index.html","8298ffab342c2355ba4a423ae0167936"],["/archives/2021/08/index.html","8553515c8758aaa2e3b75822b4ab960b"],["/archives/2021/09/index.html","6c1cbcfef8ff01cdc6d185dbbfef10d6"],["/archives/2021/10/index.html","465da372bda53ed721424f28991577c0"],["/archives/2021/11/index.html","503881bcfa4cd1a687478391225307f5"],["/archives/2021/12/index.html","b93ca2adee23bc918c29d3005f242af3"],["/archives/2021/index.html","28743470dd7adf74f8f64645edc90bca"],["/archives/2021/page/2/index.html","51a418c15b228c6e4eaa5a77356b13ad"],["/archives/2021/page/3/index.html","7902c598c28056fd1c989837b84f17c5"],["/archives/2021/page/4/index.html","4c76f89f7dce12eaf31129f859763b52"],["/archives/2021/page/5/index.html","e53d1e705f2e5ad3ac641260f32559f1"],["/archives/2021/page/6/index.html","e3964e54a2615124237809a97a2f2d0d"],["/archives/2021/page/7/index.html","8081ef9565026b8ea51e43d54536b9d6"],["/archives/2022/01/index.html","6b4ea4ce52c455dcd2a80362477babf4"],["/archives/2022/02/index.html","03dc953c69569f96214a3b7eb6ec2cff"],["/archives/2022/03/index.html","e8ad7090f91bca90443980e11a3cfe31"],["/archives/2022/04/index.html","28ffc7a076771a917467243945590633"],["/archives/2022/05/index.html","27acfc402e9b300186c8d27454ccc508"],["/archives/2022/06/index.html","3f7377ea25e453f2d31ed4d546e833f4"],["/archives/2022/07/index.html","5aaf4848b27949e4451e1fb612d131b2"],["/archives/2022/07/page/2/index.html","9a96a2f153363b87518e402f4c85ce73"],["/archives/2022/08/index.html","13d9023f7b58cfc9a425ac2c01629e8a"],["/archives/2022/11/index.html","09104212c90bef49e3d3a82f4d1f57b1"],["/archives/2022/12/index.html","65f68306e527485f7282b3899ab4c12c"],["/archives/2022/index.html","d8fd4b46000af7bdb008c79952e6764e"],["/archives/2022/page/2/index.html","bb2afa03292cf29ff3c2cb3ab690cf83"],["/archives/2022/page/3/index.html","d8371efd2a63eceb8c0748d321dab37b"],["/archives/2022/page/4/index.html","9769dd11e7e8eb38f6ba2887b377d012"],["/archives/2022/page/5/index.html","1e1a723b49d0e73a57c75fe1d839e1d3"],["/archives/index.html","3b728cb16609ec23c9803abebb014483"],["/archives/page/10/index.html","f1e3b78bb585701900cd61ce8a0459fb"],["/archives/page/11/index.html","89909449c870eee0a26e3ffd3f92cb2b"],["/archives/page/12/index.html","8f20739bfacf1f7a8e368d8ee602cf64"],["/archives/page/13/index.html","ff3114215459c5b8246bd22e3f791d09"],["/archives/page/14/index.html","9c510d0febdfa384c95fb86c3e33a4f6"],["/archives/page/15/index.html","526afb1481f5968428af623d3bf5891d"],["/archives/page/2/index.html","2a96a463ea4d6bb2a25e2528685cdd8a"],["/archives/page/3/index.html","72111ae7d5b275fca2e0f93cda6354f0"],["/archives/page/4/index.html","a0b4bd4e06a2475465dfb2fdcfef45ef"],["/archives/page/5/index.html","f762d610ec768aa5fd9f7dcd3de5eaaf"],["/archives/page/6/index.html","4512acf42cbf316f434be05095629fe9"],["/archives/page/7/index.html","d8281861e14de52d5b07a9ffa627a07a"],["/archives/page/8/index.html","6f8e3fb8c8b28fab45599b2cf6f93e0c"],["/archives/page/9/index.html","6398e116047a73840de27c5463b287ef"],["/categories/Programming/index.html","43112b0166601c845174066041a3c500"],["/categories/Review/index.html","9ce6a9c13a0faf33df80e1698240fd71"],["/categories/Review/page/10/index.html","a17ba11890f6c5789271ac3c5351d923"],["/categories/Review/page/11/index.html","6ea07fa3df983b08e98da3ccde7a3d69"],["/categories/Review/page/12/index.html","af64f6a116fe0b7df5d560c8def7c201"],["/categories/Review/page/13/index.html","628c04555990d87242ef67933d0d7517"],["/categories/Review/page/2/index.html","8c4ec1bc6e51d44e6b524bcf6c7a19a3"],["/categories/Review/page/3/index.html","613a7475b6fbc0ba2eec672d64758f85"],["/categories/Review/page/4/index.html","4911a8277b5be393bd8ae507fdf4062d"],["/categories/Review/page/5/index.html","4103d86da1af9d059c72bf941a48f737"],["/categories/Review/page/6/index.html","33c0d7d350a6c25377880f40fea988fd"],["/categories/Review/page/7/index.html","87b36ab1c524f8c008da0cff4052a919"],["/categories/Review/page/8/index.html","206a8aa79fdad1f37b3aa53b588d69f9"],["/categories/Review/page/9/index.html","b2a1f80090e0da7017abca31da76b41e"],["/categories/index.html","8ba9bbc943b3a7c5a6a32eced79fd0de"],["/categories/日本語/index.html","dbd86f409c6265ffd91c848fde1607cc"],["/categories/日本語/page/2/index.html","cc172910860fa6cd03417b4957aaf33a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9a2314c4e453e5c36277ec6acb39e3df"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","62b7b6e606cd20c04792c9e3047e2389"],["/page/10/index.html","6ddff77228239dcc81405d41706b0fb9"],["/page/11/index.html","98bfaa851eeb4328d8cffac536245148"],["/page/12/index.html","c4a6552d25995fc1a354fdb48424bd32"],["/page/13/index.html","c7477db8bab4dce5ad402e8ce41a9b27"],["/page/14/index.html","5dd6ce6a785449768bd8c0d4de4fda32"],["/page/15/index.html","5595b9bd4c127e8f332e6a793a256371"],["/page/2/index.html","c043ffd03ed24bcabaf630687fd7304e"],["/page/3/index.html","e4fd3d53253a0d5b3315c9a4e58fac25"],["/page/4/index.html","f43b140517b69f09cfa9a113951e86f6"],["/page/5/index.html","a391d03cea79b5f43ddcd7aeafe6931c"],["/page/6/index.html","f6bc9644a69fa4a0f7f7d624264a3d85"],["/page/7/index.html","452ac23caf73cd3e5fc6e8aa0242d3e5"],["/page/8/index.html","3cf7a47f512cd58002f09d6f0eaa918d"],["/page/9/index.html","feb8ce77562cefd443168bca631c13c7"],["/sw-register.js","54e607ce61691a372e7fc79d177187ff"],["/tags/10分作品/index.html","1aa88b019c780c6fd95026a3f2d2e6bb"],["/tags/3分作品/index.html","9795e05d0912886458286134cbd2e607"],["/tags/4分作品/index.html","950271a99e19e054366b16a3222c0794"],["/tags/5分作品/index.html","96fc16af4ef8c03620e8da6c3f5c6a58"],["/tags/6分作品/index.html","fa0f65b9dbd1aaea87c9830851bdfb71"],["/tags/6分作品/page/2/index.html","ad8d9d64cd62b0c185c7cb3ad5ad5831"],["/tags/6分作品/page/3/index.html","589c68d0d56bdef701cecf7e0910043e"],["/tags/7分作品/index.html","df9c6becbdb72e05bb381e4c3978a25e"],["/tags/7分作品/page/2/index.html","1be5932799782c3ac375c4409ea5c567"],["/tags/7分作品/page/3/index.html","4bf815b4e58982f613e9549ecd75b743"],["/tags/7分作品/page/4/index.html","ca15cd63cc717a6becca678056601199"],["/tags/8分作品/index.html","99bb2280e37ccf867de7585ab46eec7f"],["/tags/8分作品/page/2/index.html","e9119c29428a02950e59796c375aeeeb"],["/tags/8分作品/page/3/index.html","e0feeeee9995c56d0ece25241d8ed29a"],["/tags/8分作品/page/4/index.html","965c45b610f76a830e2f335543bd753b"],["/tags/8分作品/page/5/index.html","c95831859cfc767c741879e1d909bfa7"],["/tags/9分作品/index.html","35598582e7b911f441e244c2e5fcf0cf"],["/tags/N5難度/index.html","0e5fc66f8e8ab1011255dbe9071a1d0e"],["/tags/N5難度/page/2/index.html","c284e995ac0899567196812181fd339a"],["/tags/index.html","063ab2fc7eba7e7860e8d67b45e7013c"],["/tags/アボガド６/index.html","529511a810c8dfe6d41b45712298d3ec"],["/tags/三秋縋/index.html","e9159578bd79f83f0abda43aa7c00a3a"],["/tags/中國武俠/index.html","324b01a17cdc8306b44d071ac730f98b"],["/tags/中國言情/index.html","e6e9191b84d60eebcb232e1b0369c4ed"],["/tags/二宮敦人/index.html","47ac669bb2abdcca94cdccc1f0a697c9"],["/tags/人性/index.html","ab3564ae1658031b0dd60ca3b093356c"],["/tags/人際/index.html","66743af38450922ebf42f72f3ed73a78"],["/tags/住野夜/index.html","c6ab2b6b23dec60c5e3c4f53439a3742"],["/tags/佐野徹夜/index.html","61f0a0bd7fda9c63d75ddcfdead7a910"],["/tags/努力/index.html","1b53a3693fa1e293873159d3825c0bd1"],["/tags/動畫/index.html","29d6029ff6a170d0cb5527654c6acd8a"],["/tags/動畫/page/2/index.html","d3d535b6bdee08f43a0c90e1fa913afb"],["/tags/動畫/page/3/index.html","f57bc90178fe36998f104a4923a8bd1b"],["/tags/動畫/page/4/index.html","0c835c1190cd1cdf94d7525aab3b0350"],["/tags/原諒/index.html","31c0f18d8c0e167de0ae60550ff99a40"],["/tags/反烏托邦/index.html","46ecaa112a6a49e95a8d0e5646c873b5"],["/tags/啞鳴/index.html","e7c2a2b381bf7a6fcbb1843dd8e00881"],["/tags/喜劇/index.html","b2479a6a38fb7a354f3b89bcc46e88eb"],["/tags/夢想/index.html","a3d05fd2c5fb13f518f6f472f61d409a"],["/tags/天澤夏月/index.html","8b664ffba8e6613aab7119b474095240"],["/tags/學習/index.html","b96f1698d085891328678f59b8f10e36"],["/tags/學習/page/2/index.html","cee475a3a570e96b2ed880b98357988b"],["/tags/宮崎駿/index.html","419641960f963733b9ede958727c76fb"],["/tags/小說/index.html","4dfaff6e06ca3d7f419c4281c218e2e5"],["/tags/小說/page/2/index.html","a7408d16125325add153224b7de532b2"],["/tags/小說/page/3/index.html","db6b5b90b59db354a06414cab41482e7"],["/tags/小說/page/4/index.html","94681c57274c974771c2441218bb809a"],["/tags/小說/page/5/index.html","af40aa17711645301f2d9d6755f47aac"],["/tags/小說/page/6/index.html","c96663adfb618e6db8d54e7409e3556e"],["/tags/小說/page/7/index.html","c92a783766f3a3e0d91eb3e0ed30e56f"],["/tags/平淡生活/index.html","ea3cd09d9059c555e55e563711d4c5ce"],["/tags/幸福/index.html","6932b491c42076ce0cd26632926bde3a"],["/tags/志茂文彥/index.html","4aad276093758318f65b8380dbb27552"],["/tags/愛情/index.html","5c596b2895899222d65b75162ef2fa01"],["/tags/愛情/page/2/index.html","655a99b9b2723c45f9bebb31f001b34d"],["/tags/愛情/page/3/index.html","9c0aab656bdb07228de7113c7ed2a2b3"],["/tags/感動/index.html","57f439fdad19b18e8fe56b4d8c66d36b"],["/tags/懸疑/index.html","8a5364c410b801443d6a221af1c03254"],["/tags/懸疑科幻/index.html","6a008a3709fb901e2117f8f882325325"],["/tags/戀愛/index.html","854bb0ea3600b25a20337c77f2ad9c7d"],["/tags/成長/index.html","5e9ddf440206e1ca8d9551c447bacef2"],["/tags/成長/page/2/index.html","db8a6cced6e5589471ab297b08179e1b"],["/tags/戰爭/index.html","ba0fde8a0052ea535a2e55cbb29d5524"],["/tags/推理/index.html","c2b21eca98652589bdb4e7d8a5506a5a"],["/tags/搞笑/index.html","84a291208c3892fbb2ff8aed05043983"],["/tags/救贖/index.html","15180f54be98b2cd0acae85420d7d5d1"],["/tags/斜線堂有紀/index.html","a6819f6f7382d58926fc44e704d6bc97"],["/tags/日常/index.html","d05815028843ceedd3b4074eef791ca2"],["/tags/末日/index.html","634aaf4f0df28d1a9067a373b9bc9f03"],["/tags/校園/index.html","57411219fab9a6fd83c5e4235794cd89"],["/tags/武俠/index.html","b8c80337b68d762fbb1e037cadbd58d7"],["/tags/武俠言情/index.html","6e5fd4bffc2479b93ff0520bc2f264f2"],["/tags/漫畫/index.html","053e1d4fb8fb546dcad38b2281ed578e"],["/tags/生命/index.html","5d882365f065422331b613d85689ed46"],["/tags/生命/page/2/index.html","b9cb72172a2e8b97bc190be1e0f9e4ab"],["/tags/短篇/index.html","f03f6309c20741f91a0c9b2a3b5414d5"],["/tags/社會/index.html","aa2fc40dedd65ae9ec7f3c89a9bfbb8a"],["/tags/科幻/index.html","dbb912d4ba67aa2f57aaefdf9ef7583e"],["/tags/童話/index.html","3a5e28b727b2f825ed39aa2de884b180"],["/tags/競爭/index.html","7c695c276e6071d0c7b7f5e6d3393f78"],["/tags/自我/index.html","5cf929341ef9e8867490ab106fcbe577"],["/tags/自我認知/index.html","842da0412a83dfdabe3b6d107edb4773"],["/tags/葦舟ナツ/index.html","599bbb3a3f06d1bb0eb9c43ea9865bb4"],["/tags/藤萬留/index.html","518633e6b1df1904cb2ff48e3ad6ce10"],["/tags/親情/index.html","a3d11fa60f29240568efd6aff4bc779d"],["/tags/雜項/index.html","a94ba9d648b4bcb7ae4c8044fe2504b5"],["/tags/電影/index.html","cc5ca7ed981e39643d03d7b3abd1638c"],["/tags/電影/page/2/index.html","2d095009ef1eaabbb34bcd1cf23edc98"],["/tags/霸凌/index.html","f3ce796e70c1347ebe6ffa6c0ca9783e"],["/tags/青春/index.html","a748fecd64080ddea42d1764486a724e"]];
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
