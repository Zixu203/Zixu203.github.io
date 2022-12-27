/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","c375258e32937dc0ba0dda9c4e65fd02"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","7afcc4c112303c96f1c8b3d6eeaa5d15"],["/2019/12/25/Review/無法計算的青春/index.html","0c7b20557f5f35be042bbc620c0c8951"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","d7b10124aff98aa2bdd9f61ca7221601"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","67cb18600755494ede81582f481ffa65"],["/2020/01/19/Review/下雨天，不上學/index.html","26294978d01063f2079eca5651011d15"],["/2020/01/26/Review/三日間的幸福/index.html","324800b55c75253c7e87cb03e516a0fc"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a47e7140a767c21e44d2304c56fb5cd1"],["/2020/02/09/Review/青春期超感應/index.html","e2a137d59dd62ac46b121dcf642aae40"],["/2020/02/15/Review/又做了，相同的夢/index.html","cea38fc69c67d08c176522e2f77037e6"],["/2020/02/22/Review/回憶當鋪/index.html","052d30742b7e84b0fdc22c30f2129294"],["/2020/03/22/Review/不適合自殺的季節/index.html","6635c1488813df8bea8a617377005f98"],["/2020/04/26/Review/我們都無法成為大人/index.html","f922bd250dcac7db8b3bd5f9d3b66f45"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","18f789f1c18035b3e99e2999988abab2"],["/2020/05/17/Review/人間失格/index.html","65e0e667ffd04081a8b7c59c9931d2e4"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","c8cabbbb0d8049d809973bab071be865"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","513368f68cbf73d7e2e51a26aa76fc2e"],["/2020/08/01/Review/銀河鐵道之夜/index.html","29583884a33fb1560def63a6380194f1"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","6086f505a7e540611374d2bab983b8b4"],["/2020/08/16/Review/15歲的恐怖分子/index.html","c414f4a5797a2462fdde67425b71517f"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e4f10932928f3a378f3e7a1ab3f77836"],["/2020/09/13/Review/羅生門/index.html","b23ad7cc8fb11b532877554ca03de53f"],["/2020/09/20/Review/闇夜的怪物/index.html","0a0a9d2f35e565a604d391770425549f"],["/2020/09/27/Review/14歲，明日的課表/index.html","9583c5c63fe430cc9ece629936ffaa85"],["/2020/10/04/Review/致十年後的你/index.html","0b08b3fcd52422bc0eddffde039dabeb"],["/2020/11/08/Review/滅絕之園/index.html","1a01ebc3bad221ee2d0bbdc911a84ca5"],["/2020/11/15/Review/將愛拒於門外/index.html","0fa957ade784371119a6d7930c897333"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","b469ea0d89549660b7bdd744fade9b3a"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","5b9ccd1cb953375356e525f8598d0fde"],["/2021/04/22/Review/道印/index.html","e5bc8b6ae744843bf7d2215486e807e4"],["/2021/05/03/Review/戀入膏肓/index.html","19a136f6d4e002da1ec14de0dbd8ed37"],["/2021/05/10/Review/Dice/index.html","eb685e6bee9b1f543742644b6bd855b9"],["/2021/05/15/Review/魔女之旅/index.html","3537a9df710ae275478de7483a735dff"],["/2021/05/28/Review/戀愛寄生蟲/index.html","917e9a03643c26f4fd486c91d587f230"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","65ebf7016cb456ee3f25190fd727a1ae"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","e2e6664ef66c9279fd7b646db909d3f2"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d4a5c1edb68542416d0a6e48b4943ca2"],["/2021/06/05/Review/流浪的月/index.html","493f82e2f237d081445b4c927d6f2f95"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","f3d4a76619b37415321c8cccf17090be"],["/2021/06/13/Review/第一人稱單數/index.html","f8fb867b26caade82fb31bc7f252e699"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","e3790e93a6d33433b1653e8b3fbfba11"],["/2021/06/16/Review/願你幸福/index.html","295c77a14088f5148e2fb24c46e4a9d7"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","875167babcac9e0c781c816f980d9a1d"],["/2021/06/21/Review/神隱少女/index.html","0a7fb909d162c14eb55cd36bae80e76d"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","cac5c14cf6d06e8f761c3fed49ec4c1a"],["/2021/06/23/Review/天空之城/index.html","dbc1dc2171d0c2c2831a9503b86c4c3f"],["/2021/06/24/Review/魔女宅急便/index.html","a378754464fa175ede4cd30c530dc5d9"],["/2021/06/25/Review/借物少女艾利緹/index.html","afa3f0112a9af6c0f9668f79c753748c"],["/2021/06/26/Review/魔法公主/index.html","ac04d142b208845c474323774152d039"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","2cb0cc760568dd447aba4ace1b429607"],["/2021/07/04/Review/飛雪與劍/index.html","03f99f06b31fc54261102d80518911fb"],["/2021/07/09/Review/地球防衛少年/index.html","8d820dfeed8f70c2b08fbfa2c46ebf1b"],["/2021/07/12/Review/Angel Beats!/index.html","7ac9034f13eb3493abb3259652eb37aa"],["/2021/07/13/Review/Clannad/index.html","a4c4672383e9914663f4503bf63668f3"],["/2021/07/15/Review/AIR/index.html","8700703cac12236d28591ec853a1e73a"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","e68b272d0bf44fc22c3a9c4c5a8b6f22"],["/2021/07/15/Review/螢火之森/index.html","e1400d9dd6a89626fe628dbd5d396254"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","1e9909124c48aed9b8a0a4524b62d4e4"],["/2021/07/17/Review/奇蛋物語/index.html","931b2c519e9694b694c81f81134174a1"],["/2021/07/18/Review/Vivy/index.html","4d1d5141e7f35a15d07d927acc972820"],["/2021/07/18/Review/請妳消失吧/index.html","0e23e0f92df5007fc9ecf6dbc5051735"],["/2021/07/19/Review/漣漪的夜晚/index.html","029607c3a47898288fe22615551924a7"],["/2021/07/20/Review/月色真美/index.html","d30114a0a616061b1e8b8eb685348a28"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","9c5e6701a3d16f60f307ac5aa719a6d9"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","20fa0c18d5001778b6529b1a5448d43d"],["/2021/07/22/Review/罪惡王冠/index.html","dc54d74ceaa580a3306c5f100d8fa962"],["/2021/07/23/Review/弱角友崎同學/index.html","6d8d2bfb7fab94eb46e68dcd70fa368e"],["/2021/07/23/Review/惡之教程/index.html","229cc581a90b9cb8377f00306b699ab9"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","a6e10dde00c96dfe39400461ac0a0966"],["/2021/07/25/Review/魔王勇者/index.html","5338f130d7323fc44ade1e3d4725bbe9"],["/2021/07/27/Review/一年A班的怪物/index.html","6bda7cc9a32e4551ad1b72e2b233afff"],["/2021/07/27/Review/奇巧計程車/index.html","68e770d0ee26975307d6edf6a055b45f"],["/2021/07/27/Review/專情的碧池學妹/index.html","5f405132d4772099c677ded79a39ccbe"],["/2021/07/29/Review/只有我不存在的城市/index.html","f024b5624f1f8a8ab8a1991e0c81da5b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","68f5cfc39f948b73f1116f7d977aa477"],["/2021/07/30/Review/可塑性記憶/index.html","3ec229c3c1b3124b27118cc02fb4e93c"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","007f9ddbefe3e75d0dc3f41c54dc0300"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f335b3625c24a38708b947d8c29e3b5a"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","40e8ccbb3610a906648092c0c1f97292"],["/2021/08/25/Review/清戀/index.html","17d446bece2ef49d4dfca5c159c8ea82"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","4321d290d9cb56816190b5428f2eecfe"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","a88d63092820db5c168645b025c22490"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ab20b1a12adce4fd51864012f3aa1938"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","0ce384b10113bbbba8965ec48730907b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","49332d48c373a96cb269d1998d794eba"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","14dd291115a969fa9f6ca33a28da5a3f"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","6cf8a5a552a1a33da53a12b35cbc623f"],["/2021/10/16/Review/龍與雀斑公主/index.html","104825c2c93bfdedd6e1d7fe34e3f4d9"],["/2021/10/19/Review/孤狼不想開後宮/index.html","a4783244970bc7084a5a354350b574d8"],["/2021/11/13/Review/徹夜之歌/index.html","3612f85768445df6922c72dac9d46f16"],["/2021/11/24/Review/武煉巔峰/index.html","b0281dc8094eaffbdb277c6f308c692d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","943d3280de2807b6eddcac03448ebacb"],["/2022/01/28/Review/神醫凰后/index.html","e96aa187ca8af61de39540747b4dfac0"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","a3f16215013b75c68940533f9fc78833"],["/2022/02/13/Review/夏日幽靈/index.html","913cecafc24468187cf7c9d52474ae48"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","2121149c2f1a781db76bed689ffb4bf4"],["/2022/02/26/Review/賽馬娘/index.html","f42e986476bab9e947a3a76ee2ba0100"],["/2022/02/27/Review/大欺詐師/index.html","b60ba8cd21d4726479b8bc909ce2c53b"],["/2022/02/28/Review/前輩有夠煩/index.html","fbb13b441f55e28dee6c594b00439451"],["/2022/02/28/Review/碧藍之海/index.html","82caca9b734cbd800aa2446d425f1bdf"],["/2022/03/05/Review/落第騎士英雄譚/index.html","a0353214f2651788582a625d54b476fd"],["/2022/03/06/Review/Another/index.html","ae5cc32857dc2427af058f58005dc8e3"],["/2022/03/06/Review/入間同學入魔了/index.html","2f1cba387f5e89aafb80076c2c517dd4"],["/2022/03/18/Review/再見宣言/index.html","968665c74343402b4523110784645bca"],["/2022/03/23/Review/生若冬花的妳/index.html","367360390693c839e1d6bdc45eb64c78"],["/2022/03/25/Review/天之弱/index.html","db944adcfbabd52e1f1eed04edfc5cc4"],["/2022/03/31/Review/滅了天道之後轉生/index.html","88e8f5bd99aea3e6fb6639ee81849457"],["/2022/04/30/Review/泡泡/index.html","32313ab4c0bdb46d1396b762ddc64b97"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","0931938d009a6df1ac158e22193a9f55"],["/2022/06/13/Review/偵探已經，死了/index.html","0e0fd30b7f194b11ff0d614a9b997204"],["/2022/06/14/Review/黑色子彈/index.html","9de55c0297c08f47511f22e15f98b369"],["/2022/06/15/Review/黑白來看守所/index.html","592ccce4cdd7a4b5b28f884354aeca70"],["/2022/06/16/Review/虛構推理/index.html","50307bc5ad7d5ff5c397e4a61153e18e"],["/2022/06/17/Review/戀愛與謊言/index.html","400e76d729f16b291805f4948244d15a"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c45d484ac6fedbb7b9ce3884f9f180db"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","0c1b6e0b208d259823d8d69f13bfcca8"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","9c380f77260b1940ae43449564fb0747"],["/2022/07/03/Review/Hello World/index.html","3811f8a2f071dc263dead180e95a330c"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","cf8137ae5a48979784eb14db13896f97"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","dd74ed97db0258ea99170711eb70dee7"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","13e783a3582efaf035828c44631f5f79"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","76ebd95ec7514be0f95c9c1b8de96ffa"],["/2022/07/16/Japanese/動詞分類/index.html","305578fee6f141c9aa88cc97fb78224d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","2de058d05505b1ef88b4ec54e137c6ad"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","c2f1788cac2393c6069adfb8bdedc214"],["/2022/07/17/Japanese/音便/index.html","881b54e455e5191e50d6331dbaf727a7"],["/2022/07/18/Japanese/動詞 時態變化/index.html","3fbcbc94caa54bb9b18fe22a0ebfbb2d"],["/2022/07/19/Japanese/助詞用法整理1/index.html","b0b93c9bfd4b2279d98b3f7fa2805975"],["/2022/07/26/Japanese/助詞用法整理2/index.html","89704c396ed30b90c4a03e713f31e009"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","150b72496f16a4ba0077f220ad092e6c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","48991bf2672e872747418184e973b2dd"],["/2022/07/30/Japanese/疑問詞/index.html","b6555cad1aac9e956c7efe580a7107b0"],["/2022/07/31/Japanese/助詞用法整理3/index.html","1fa6591c087a75dc1bfd7c3ce1a7219d"],["/2022/08/02/Japanese/副詞整理/index.html","6846c3f8761aef0ec0c7e64c71d76037"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","ce0c5ac27e74d34b43d6d29375072699"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","7fe48e0f865903f04eacdb9c5de05568"],["/2022/11/22/Review/組長女兒與保姆/index.html","fcfb1e971a1fa4e1aa397253451b2da2"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","103003d90865e047767300467bee517c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","c965b4f5d682f638d754281227ddc980"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","fb2fa12465f4693cd87d32bcca6d7e58"],["/404.html","54234d9b51986bcaf56c83ba5f9654c6"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","2e1786b34b736489ec8828b5c323dc16"],["/archives/2019/11/index.html","d6395abdb14a66059b5f3528ad4b83b2"],["/archives/2019/12/index.html","38b67c61fd1a5587188d70eeb71a02b3"],["/archives/2019/index.html","9ae6d34a429980ae8f98fd578f469d04"],["/archives/2020/01/index.html","5f5a9c4ec22219445c8992023ae21a6b"],["/archives/2020/02/index.html","f59cadf3a78509db9d4049bd81437093"],["/archives/2020/03/index.html","40da61da7787cc005aea7520dd6774fb"],["/archives/2020/04/index.html","292600a944073fc269ec0e52c0d8ceb7"],["/archives/2020/05/index.html","f411398c68288974eda0880101f1d551"],["/archives/2020/07/index.html","72b2e64e7a924d5197f0c8551bedd429"],["/archives/2020/08/index.html","7b0463ced085741402a92a153723467e"],["/archives/2020/09/index.html","9755f633af77eec3bbbe702219a62908"],["/archives/2020/10/index.html","e3a7fab17fb8a94b75bcab8161f0170c"],["/archives/2020/11/index.html","ff4c15d7f8fc79fbadb94ae0ef61417a"],["/archives/2020/12/index.html","50a826f58f75b1633a68ae9d40f31ddf"],["/archives/2020/index.html","3404e06852fbe7f48ec12719c1b1d422"],["/archives/2020/page/2/index.html","b986dfe64c554d56a4bb69f89318c7b7"],["/archives/2020/page/3/index.html","7a7ea78191c562153991c9d409912b3b"],["/archives/2021/04/index.html","91d17d8dad3047896606fe5bfd06b893"],["/archives/2021/05/index.html","49565779a4460ce446b1a4be28be5cb4"],["/archives/2021/06/index.html","9f61a5c74f002300d525dc1b8499391e"],["/archives/2021/06/page/2/index.html","b98636b6205ec5c7d5d70788c111e004"],["/archives/2021/07/index.html","416cc00f8f774b43822e6dc0fd846e42"],["/archives/2021/07/page/2/index.html","35c1a1416efcaa5a49f74cbc06cb7847"],["/archives/2021/07/page/3/index.html","5f5176fadb7fed4cd6ca89eec75e799c"],["/archives/2021/08/index.html","7faf905e4c96b4ef935ab937b16dcecd"],["/archives/2021/09/index.html","365f3936489ab8bd0598ac33aa50da8f"],["/archives/2021/10/index.html","a4163317c18e7179523b37c8ef1bf8ac"],["/archives/2021/11/index.html","0d17bf52c4ee4f80fdaf4e21eb323435"],["/archives/2021/12/index.html","81b871b7e3f64ff224c57ed55f9a98fe"],["/archives/2021/index.html","edc8e6e7975b68e17954f601a977c0ae"],["/archives/2021/page/2/index.html","376b58b6f68eb939392729eca9642f13"],["/archives/2021/page/3/index.html","a3a8aae4414cc1883ef0d433321d0aa2"],["/archives/2021/page/4/index.html","65b492803f1cac387d6aae78d322f385"],["/archives/2021/page/5/index.html","c0d216f9fd8a815a651a6554eac8bdb4"],["/archives/2021/page/6/index.html","33caf4da6560714fcf0811c609b1e29a"],["/archives/2021/page/7/index.html","c64cfb637f1ecd4f8c202b5673490c19"],["/archives/2022/01/index.html","72d01add53ed6bc8a98df781f3129bfe"],["/archives/2022/02/index.html","408ae0a819007a72aa2c17c65730a778"],["/archives/2022/03/index.html","f5a6f64bc2c97f03678934cf9a7d377f"],["/archives/2022/04/index.html","9c7938de34b3dd14ee534f47391a9781"],["/archives/2022/05/index.html","4fdeb49607eceba57823732ba29ac3d8"],["/archives/2022/06/index.html","60c79db902c557d6da273472593f54c2"],["/archives/2022/07/index.html","66d81722c4f73b25889df200e9c07173"],["/archives/2022/07/page/2/index.html","c39a7f1fcdcb574642a1690266ffacc2"],["/archives/2022/08/index.html","1f519c649979e5b300b05f4bf7cf7032"],["/archives/2022/11/index.html","5086773730fadeac09292285e028a197"],["/archives/2022/12/index.html","529977342ce0d93ff690842ee8f26124"],["/archives/2022/index.html","cb23e2befbc6cda0b0a95beddefc0377"],["/archives/2022/page/2/index.html","add732568df89138bfa9ba989eaf1c7b"],["/archives/2022/page/3/index.html","2d733ee33cef5140799078c56bba7ff7"],["/archives/2022/page/4/index.html","48702e565bbcddf3ab04ba4ad1e8f36d"],["/archives/2022/page/5/index.html","d4e951fadcab8f501b2dd7eecd482490"],["/archives/index.html","f8bd07d4362244024c69b4c9c303f24b"],["/archives/page/10/index.html","bdc177469a04a7a84a756db6b606e9b9"],["/archives/page/11/index.html","57835f41de32bef5691527d4d62724ce"],["/archives/page/12/index.html","3876efd32511a823260afe12f5466b6a"],["/archives/page/13/index.html","2bb69217a1941fbe9f34b8cca40d1f32"],["/archives/page/14/index.html","5e3427eb35cdcc6faf34b076780ada55"],["/archives/page/15/index.html","a35c38f5eaf6e91275474a1e020f2a62"],["/archives/page/2/index.html","3e2ce9f8f0faa5e68af541576fdebfa2"],["/archives/page/3/index.html","b237f966a34c3e95d35c0f6d328c06df"],["/archives/page/4/index.html","5924ce8b9767036bab11c44fddf5e11a"],["/archives/page/5/index.html","4040935b35b0dab6df11434e1f6f4be7"],["/archives/page/6/index.html","72974964e35c344ed8fdeef31e2cfddd"],["/archives/page/7/index.html","cd856dc4017ade2dbf2e93a5cf141b0f"],["/archives/page/8/index.html","0025b5b18735bb31e651b329b1b79047"],["/archives/page/9/index.html","a8cdfe673b16c5508aab0d93f36b03c5"],["/categories/Programming/index.html","682b85a4320c8a66512ffaf6a8703094"],["/categories/Review/index.html","fcece87f67b05a27f1883f2cbeb30d25"],["/categories/Review/page/10/index.html","4168f048d6812246cc5f12ead289281c"],["/categories/Review/page/11/index.html","0cd0862179e0a9508a2ea7ad6d347d8f"],["/categories/Review/page/12/index.html","0e29c62b2c133b12793128c4d5f2422a"],["/categories/Review/page/13/index.html","621c7c071007a4cf2b6e513eafd4ce71"],["/categories/Review/page/2/index.html","0076a0513535954771d6aca2b50099a0"],["/categories/Review/page/3/index.html","4aabba9458a3f8a69befcff65fd664cd"],["/categories/Review/page/4/index.html","c58b887efe40bc58cbfa4aa8df083279"],["/categories/Review/page/5/index.html","9644e9426a213880d564213f7d2d25b7"],["/categories/Review/page/6/index.html","6ce1c72a7865dfa5e72e38193f9a8bb3"],["/categories/Review/page/7/index.html","9417461d67b5171f175b6e1b7e5f0bbb"],["/categories/Review/page/8/index.html","bcc68a901772b7bf9826471aa534a20e"],["/categories/Review/page/9/index.html","8a8bbbc82e324150532b33be3d315619"],["/categories/index.html","8141a378b5a36a4a701b9e9badec431d"],["/categories/日本語/index.html","58b42773652fc7b7865a091a88d8afb7"],["/categories/日本語/page/2/index.html","c99d8961885478e5ecaa67410af562d9"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2db65788601ca985f84e4ab4395fa867"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","4cae2ea5b977d92b572bcb8b52ae6a6a"],["/page/10/index.html","84c48db4a11502a8caad8a55deade0d1"],["/page/11/index.html","2c4af4e8a22af5286b339c53bf76a319"],["/page/12/index.html","41813c7ffd6ba9246d3eb235192e247a"],["/page/13/index.html","03c38df0eb735491c366a15bb026a0fa"],["/page/14/index.html","b6c179433825ee8c54bff263a324ff5a"],["/page/15/index.html","6407b539e5d2d58c6d4e03be341fefd3"],["/page/2/index.html","44cf0530707a5e77b8d09e14180dfd15"],["/page/3/index.html","d63d849105417f5df7da357be58baa40"],["/page/4/index.html","7c74d918e88799c77eae1719862f3e0b"],["/page/5/index.html","8623ce752e148ae5a4a872274fcf934b"],["/page/6/index.html","a22b43c5108d55da5b03378a590d96db"],["/page/7/index.html","0e47f834b553fee5e61091c423557d22"],["/page/8/index.html","57d230420efd4dc4fde5952bc4856dcc"],["/page/9/index.html","9cf1203affc2b28ccb555fd0e74264a9"],["/sw-register.js","aa82e504f3cb4f25e1c5115b05dc9ff3"],["/tags/10分作品/index.html","8285d3b792988c18b3c6685adf0fea32"],["/tags/3分作品/index.html","e0cb85caaeb3fdfa2beec83ed8f3597e"],["/tags/4分作品/index.html","887cf48ecac014fbe8436c9f32c725c4"],["/tags/5分作品/index.html","9e242668b2a19c544d941fc44e173f19"],["/tags/6分作品/index.html","2ca5d8cdf91bccf839571507c6cff3be"],["/tags/6分作品/page/2/index.html","5c7853ede25ccd2c8c2effe0bda107f2"],["/tags/6分作品/page/3/index.html","cd024baad1ef3fc81a681d24835501fb"],["/tags/7分作品/index.html","ad6af4f9e6ffb380ad7124064f32b297"],["/tags/7分作品/page/2/index.html","2d565d8f68070cf738872af72bf003be"],["/tags/7分作品/page/3/index.html","181a745dbe7bb7fbb80b599bd0cb741f"],["/tags/7分作品/page/4/index.html","00aaf8ad2719959bce140f430c1fba80"],["/tags/8分作品/index.html","cde8b4aa19a4b35c5918ea5943441a1a"],["/tags/8分作品/page/2/index.html","2cc9365d0a3391fe136afbd84aaafd62"],["/tags/8分作品/page/3/index.html","6d04b06bacbabfe3a34bb927e0314725"],["/tags/8分作品/page/4/index.html","c18e75303e8bc37daffd06aed2370ed4"],["/tags/8分作品/page/5/index.html","be44f42449562ce9357a9520139db038"],["/tags/9分作品/index.html","b1c436018c3addb85918e02a799e43a6"],["/tags/N5難度/index.html","24c527eeb55243390e171e0761e28dca"],["/tags/N5難度/page/2/index.html","442f7b386d6cc869145feef43fe45981"],["/tags/index.html","e79ba66234f66bc245887e05c4032670"],["/tags/アボガド６/index.html","5fb2ad810b8216ef4147785ecb8dac70"],["/tags/三秋縋/index.html","1581eba6d5c9d0cb20b35adea54ee12b"],["/tags/中國武俠/index.html","ace0aafa06e6557ac530b1374dd8b800"],["/tags/中國言情/index.html","6e8e38e088c5495fca43fa96ccf647fa"],["/tags/二宮敦人/index.html","58260d36d7aa4ba5f44528ef1a6223a9"],["/tags/人性/index.html","f06a1abed122a98778df048425ff4305"],["/tags/人際/index.html","ce9f8966c0a1f24c81e6374369ec3e88"],["/tags/住野夜/index.html","fb01a871bb38b04a467ea3fe6bb2a1c2"],["/tags/佐野徹夜/index.html","bd2b6f143e88d4ed02a50e325679f219"],["/tags/努力/index.html","5404550be8c3e06115419a49b4cd28f5"],["/tags/動畫/index.html","c32b226552a8464c5400bb8c93c55510"],["/tags/動畫/page/2/index.html","bc5b7f1dde8a57484fbcdcac47542709"],["/tags/動畫/page/3/index.html","26c8caae0d24b48479918ad72dc13e04"],["/tags/動畫/page/4/index.html","4e382583a505b591365b9cb94dd146f9"],["/tags/原諒/index.html","1d51e7d74b32e6754adc08449351dd4e"],["/tags/反烏托邦/index.html","87d651afa9dae87852973343f3d99467"],["/tags/啞鳴/index.html","c2d20f029b548cbdff0759ce363228d0"],["/tags/喜劇/index.html","67e1ec32adc95476e70a61331bd9d26c"],["/tags/夢想/index.html","e76b71e3a09900e7e207bfbdc8adb5b9"],["/tags/天澤夏月/index.html","3f407b1826adefed7a3107f9cba43166"],["/tags/學習/index.html","eb1bbaa759b895bb276bbb180e6fe909"],["/tags/學習/page/2/index.html","dacdbf466897f8347bf9296cd5b55ab1"],["/tags/宮崎駿/index.html","46f6deb23ff726e73cd61fa3f7a29f40"],["/tags/小說/index.html","2e2e8360d7ad338cf31b280b76e9178a"],["/tags/小說/page/2/index.html","28198b46f94dd4f589f2caf0bcea5bc0"],["/tags/小說/page/3/index.html","b72df9eaaa5cc5f5bf6941600f987d1b"],["/tags/小說/page/4/index.html","3a3e91c086e83b186fc33c3df330eb03"],["/tags/小說/page/5/index.html","bae76a500753e00163cc6fa7c248ae52"],["/tags/小說/page/6/index.html","abd2740c57e94cb8c3176e177a115776"],["/tags/小說/page/7/index.html","327a758b6cec1f50067cef061b850171"],["/tags/平淡生活/index.html","b7a7bbcd993b8abd70ab83eafbe96547"],["/tags/幸福/index.html","7ced5f8be234734561e3e05e8a6f5570"],["/tags/志茂文彥/index.html","9b8fcb7e94475a325a706a432712486e"],["/tags/愛情/index.html","ad05c7ca9948d6a2f06ad537ba507cab"],["/tags/愛情/page/2/index.html","64999bd22b349c1b4090f49c38746ccf"],["/tags/愛情/page/3/index.html","ae681f394e0915c452998c1f81907f1c"],["/tags/感動/index.html","5e4aa53873b6a139b0cc661b53fd45d2"],["/tags/懸疑/index.html","88869420e90c5dcff892e0c475b9d5e5"],["/tags/懸疑科幻/index.html","1575716e0dfa28b71e1ecca6fb19560c"],["/tags/戀愛/index.html","0a9c1da284b6a1434de150b9cc2abae7"],["/tags/成長/index.html","ec84b26c30c21a727c8044ec98b87265"],["/tags/成長/page/2/index.html","6b88a924609af6e87173bbd2713ed048"],["/tags/戰爭/index.html","5a107b579126ee3c753ec03a3a3e633a"],["/tags/推理/index.html","0bb51ff8703c254d862618384bf29f93"],["/tags/搞笑/index.html","909e417d01cc3932da6b89d1773808d3"],["/tags/救贖/index.html","89a5d01792535b1d881802aa703e06a2"],["/tags/斜線堂有紀/index.html","71f80cf020631a206fb0a39b37b2edcc"],["/tags/日常/index.html","e5792f316c4216a5603bc7bbc0cfe9dc"],["/tags/末日/index.html","a21d9c76770a57c55bfaeb8668744f7b"],["/tags/校園/index.html","eb118c5c9afb711913de7167f497f2c8"],["/tags/武俠/index.html","cda480e623b56a10b8323024294e2e71"],["/tags/武俠言情/index.html","dfd9cda9fdcb9c1ad25d1d17685aab0c"],["/tags/漫畫/index.html","13c4be868b459810316f0ad7805a1096"],["/tags/生命/index.html","69e3482c4321320582b142866a8830ca"],["/tags/生命/page/2/index.html","598a0e93ca5020b6bb85f6f52445af90"],["/tags/短篇/index.html","91b8fc17698472f7ed96c1b423203dfc"],["/tags/社會/index.html","d9ba10bbbe8ee6c15a1e962e709a8a7c"],["/tags/科幻/index.html","5796ec8148e901339ed8a7e7b9f61ea0"],["/tags/童話/index.html","8f7284a9230fa80aac6014d51e955490"],["/tags/競爭/index.html","ff74e148a16bb8d1fc7241b49add008e"],["/tags/自我/index.html","ed2c456c7dbb2a3b4727aaa21fd2e6e2"],["/tags/自我認知/index.html","99a90e7d6ca0f49edd58f8bc7ef7eb48"],["/tags/葦舟ナツ/index.html","db3621bf66a48dbe6f92e43d4c4ea119"],["/tags/藤萬留/index.html","3d52b6fc09234eaeb38aca9a53347365"],["/tags/親情/index.html","397167a61ae92de1a2d6fde74dd34dec"],["/tags/雜項/index.html","2c0f756d7f9e7522167d5d9accfd8a5d"],["/tags/電影/index.html","99875b154147912322df0ce8abce0761"],["/tags/電影/page/2/index.html","d5994cf74f91ffc7d4b75268bd86e136"],["/tags/霸凌/index.html","ca240efa15e07e94db67a9c270445196"],["/tags/青春/index.html","278dd5ce276274009a0408ce4018b6b3"]];
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
