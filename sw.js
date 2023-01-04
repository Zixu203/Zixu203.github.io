/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","3ef1fbc4c6f1e4a09f2fb0b02045888e"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","9d9f5de341b3012a4b41bc9cf22d1ed3"],["/2019/12/25/Review/無法計算的青春/index.html","50abfbbaff3fd4d36434a0dfce512fbd"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","c2aae6cb9e192df532c58909839a5e9d"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","cb95f919b5e1da3912506556de9e2f11"],["/2020/01/19/Review/下雨天，不上學/index.html","26d38f2426975b14acbe7e9d86e417a4"],["/2020/01/26/Review/三日間的幸福/index.html","449f666326cf0251a5d0a86420b04cf5"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","36f34e17194122fe964059a6de469ea7"],["/2020/02/09/Review/青春期超感應/index.html","0293f304bf2ceb7a8ac9349228824e10"],["/2020/02/15/Review/又做了，相同的夢/index.html","ac7935f48a3e92e399a88bc0fc6fd03d"],["/2020/02/22/Review/回憶當鋪/index.html","18c9e9a985f70b10d498a74ae3482c46"],["/2020/03/22/Review/不適合自殺的季節/index.html","67a4e674dc8e6eb9ca5a2297eae88c15"],["/2020/04/26/Review/我們都無法成為大人/index.html","dbdee17f0bcb704db13d4bc03c042cbe"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","8e02c72565e2fd0b2276c98baf170122"],["/2020/05/17/Review/人間失格/index.html","d89bca70a092df366354d758a66e1866"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","4eac19e83a769d37b3080297adff89fd"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","36d1b67bdab26fdcedc244ee5f4a7ec9"],["/2020/08/01/Review/銀河鐵道之夜/index.html","5f780f145442c498dde827524f65dc7e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","8e136961daed4c0648c2c29357fad1a8"],["/2020/08/16/Review/15歲的恐怖分子/index.html","ceb14a01c547188b25991f7801383fd4"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","2906a71575398db2cd871d775749c66e"],["/2020/09/13/Review/羅生門/index.html","97bcd13fd0db710bce662511c546b566"],["/2020/09/20/Review/闇夜的怪物/index.html","ad658ff243d29edbf3b4b33bf6e4f5e5"],["/2020/09/27/Review/14歲，明日的課表/index.html","ee4269c9227fcaf87860eb0eb43f2195"],["/2020/10/04/Review/致十年後的你/index.html","6828a87953949959d4e7479f111d91c7"],["/2020/11/08/Review/滅絕之園/index.html","f37efa938399b667e10165f25623dcde"],["/2020/11/15/Review/將愛拒於門外/index.html","effb290a40e8840e5e96fb0d9b98396b"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","a70534a90207e6d88fd0b77853a01edf"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","cb9751c8c23fc285575f7d6a9fb9e3c9"],["/2021/04/22/Review/道印/index.html","be3917dccaaa4bd25f2f6015cf3f2af8"],["/2021/05/03/Review/戀入膏肓/index.html","26fc53563d7b4299b287f06ebfe90779"],["/2021/05/10/Review/Dice/index.html","2d2573024a3c4f8178aadf07d66aeb8f"],["/2021/05/15/Review/魔女之旅/index.html","19262fae76e3ce5ca306b2437af386b9"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8b42bd1f97d45a90e17616c9eef53c7e"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","7cd4e5df5c288e5fc2825881f0fd0b1a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","ce5b94c271368410baa83a78edc41b15"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8210fd812c7d03e5a49c102133203dd1"],["/2021/06/05/Review/流浪的月/index.html","cae2e070d697d508a35c1c1d24fad33d"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","fa70518eeac1f5edf95c7be1ac13c150"],["/2021/06/13/Review/第一人稱單數/index.html","cbee2bcdcd610bd7785a731db007f700"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","3716a904d9cd7e549e45aa94512b6c5d"],["/2021/06/16/Review/願你幸福/index.html","fe08e231086d5a72e7db83c79581df17"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","fb6cc19141b3927e6b3d1311108bc29f"],["/2021/06/21/Review/神隱少女/index.html","86970b07fa629c85a3d06fc26b607cc5"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","42bd24c67d3c92d91364f0417fd3a540"],["/2021/06/23/Review/天空之城/index.html","64c565314059da69aa59ef4afbb762d2"],["/2021/06/24/Review/魔女宅急便/index.html","d0e88810655bdc1b868edb63be5f01d9"],["/2021/06/25/Review/借物少女艾利緹/index.html","0453bc9ce95ccef2be7541822348c201"],["/2021/06/26/Review/魔法公主/index.html","94fd200f94582f3c0924dc5e4187e3c5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","3de73b17b8f4bea56ecef4a37377245f"],["/2021/07/04/Review/飛雪與劍/index.html","743e8398993228243528b55a1b034058"],["/2021/07/09/Review/地球防衛少年/index.html","82cd45156c90bb9fb5230770ecbd68ff"],["/2021/07/12/Review/Angel Beats!/index.html","a7eb7f3b96fac7d1e6b996fd05377a0f"],["/2021/07/13/Review/Clannad/index.html","bd3f9ff9a5be0995c50ec99236277921"],["/2021/07/15/Review/AIR/index.html","c8116a736710e272d213ec4cab784daa"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","11b825a8fd11e03c46748d2fb8c083ac"],["/2021/07/15/Review/螢火之森/index.html","643cbeb3db2697899dc173a2fdbaa1d9"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","b205d814839752528b6de21ff537e198"],["/2021/07/17/Review/奇蛋物語/index.html","40fd71c78d24c94ca145b9f2fd13c8f8"],["/2021/07/18/Review/Vivy/index.html","3bbde8926cd9dc125dcca32a8b4551e6"],["/2021/07/18/Review/請妳消失吧/index.html","f191bbf444b2e38b8414c2f93ff00808"],["/2021/07/19/Review/漣漪的夜晚/index.html","69ab0ad3b981592b19fcd3547622cdef"],["/2021/07/20/Review/月色真美/index.html","13376593d985366e7a40648e80625ac2"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","804e7f745d62e314591c6b41dc014497"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","530b1d532ec0783da02980992093e36f"],["/2021/07/22/Review/罪惡王冠/index.html","63e00b072f02d7c80d2623846e90df30"],["/2021/07/23/Review/弱角友崎同學/index.html","4d1d63d46c3b69cc43e3b306dda234c3"],["/2021/07/23/Review/惡之教程/index.html","990e1feba210a245111866bb4bc803a1"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","517380bd2eca435495c4bbeed5ba90bf"],["/2021/07/25/Review/魔王勇者/index.html","00c07644f7647f64f94d7a9d7a8448a6"],["/2021/07/27/Review/一年A班的怪物/index.html","78d37594b882802646265a194b866e37"],["/2021/07/27/Review/奇巧計程車/index.html","ce4fa8df0eaf22cb83a80bdbd2560508"],["/2021/07/27/Review/專情的碧池學妹/index.html","db9ddf3d904904f690cfe02788b780ea"],["/2021/07/29/Review/只有我不存在的城市/index.html","68aee52efcb313f3254d64eb30ed91f9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","e47ba260a5a56f571913c432b98c1e4e"],["/2021/07/30/Review/可塑性記憶/index.html","94ff6311a6917ede66e72bef7a7a05ee"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","5bacb3b7f06af7ef1461a171241c0696"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","d0c963b880f2cb726baa4506dc313210"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","0c59fb094f3b19ece8afcd2d6dec026b"],["/2021/08/25/Review/清戀/index.html","bcfb3689a41a75f66d19fda29c3324f2"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","3d8a6e6a79fcb9c2ed03b8d9e214a351"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","31fec41f947c50b7066b8918d86657dd"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","1043a65464004dfc1b3954f740e9a6f0"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","31e80225f16d7deec5616659e2c2d0d2"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","07152f15a677480e32b12de2cf8717f3"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","f07090ff325c4b31371b2f2ae065d451"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","43d803133eb86475f0c89424a444b4ef"],["/2021/10/16/Review/龍與雀斑公主/index.html","0e88bfee5012961dd49f5dc284d076d0"],["/2021/10/19/Review/孤狼不想開後宮/index.html","98ddff2a20f34d8d82518dfd58c3967d"],["/2021/11/13/Review/徹夜之歌/index.html","47b48a92245874614a15f82c721ab41d"],["/2021/11/24/Review/武煉巔峰/index.html","e117c6e8d609fcf40d4cf82be5eba448"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","3b81b9883407902a2b5e452ac16e5697"],["/2022/01/28/Review/神醫凰后/index.html","e86feebab17cc8c87878192002cf347e"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","ef53b6d86d161a79771c1df5aa27ecb3"],["/2022/02/13/Review/夏日幽靈/index.html","93e40e49991e724971469a7a573b38ea"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","1dd83ae8386fcf1a074bd46752b3fbfe"],["/2022/02/26/Review/賽馬娘/index.html","0c4df7c903c99d650f22fb8182d36c0a"],["/2022/02/27/Review/大欺詐師/index.html","8f4a58aaec562cc07285ecdb25970ea2"],["/2022/02/28/Review/前輩有夠煩/index.html","651b6de7f989b38f11319b395c503746"],["/2022/02/28/Review/碧藍之海/index.html","588ffb3a8fb06dbac2edccdfbb1ffbcb"],["/2022/03/05/Review/落第騎士英雄譚/index.html","7563ee1a2fee404d3cf52f4d747e6ab2"],["/2022/03/06/Review/Another/index.html","8c600391b425a830c94c84a7a1e61587"],["/2022/03/06/Review/入間同學入魔了/index.html","516d0f57d1be8806d2eaa04a95f6492b"],["/2022/03/18/Review/再見宣言/index.html","9b2bffbabcc2c4caf843f82804610128"],["/2022/03/23/Review/生若冬花的妳/index.html","985b93dc766995f77ea4d22d62c80c69"],["/2022/03/25/Review/天之弱/index.html","50854e570f29f87ceb05cfd22dd6457b"],["/2022/03/31/Review/滅了天道之後轉生/index.html","0ae7474215205d0abc5e180042246436"],["/2022/04/30/Review/泡泡/index.html","675a8b6dd31248f01ec953357725a116"],["/2022/05/04/Programming/Dynamic Programming/index.html","05cd25bb24e9e83aa29cd87bacc1ab05"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","9953ac4b9f12105580caed200b7ea434"],["/2022/06/13/Review/偵探已經，死了/index.html","7718c1ac94e8aa130f6f7ee973712aff"],["/2022/06/14/Review/黑色子彈/index.html","4ad5c71768a52fb1f8eda5bead5c5b71"],["/2022/06/15/Review/黑白來看守所/index.html","126efe5304798d87719132671a3cc68d"],["/2022/06/16/Review/虛構推理/index.html","707010fc3851fcf2935f479e7896f7e4"],["/2022/06/17/Review/戀愛與謊言/index.html","2283f931423c73760aee65b74c2d0f78"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","065dd9444613e278392036908f58c282"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","5f907afcbdac86aa4ec55014bd4641f8"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","793ae76921a79585c2c47ac39ac10870"],["/2022/07/03/Review/Hello World/index.html","fa18a8464c38c0fb31c366d368505e0a"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","849dc479f92e25468f99a1d891d6a84a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","50bb8512bfb41a5b9ab06ef5a8fad824"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","d1439147b366cb70a3c907d76c73ce54"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","667728dc21ad20aaab25dcaf1db02eca"],["/2022/07/16/Japanese/動詞分類/index.html","4817da7a5c701c4224f648e3b1d007fa"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","c245a5d68fb82248d9e77c70293d1277"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","4472f1d75df7632afe0229e3ef42af2d"],["/2022/07/17/Japanese/音便/index.html","bfe5656a0e8067af246e5ef7bd64ac2d"],["/2022/07/18/Japanese/動詞 時態變化/index.html","baf20a05f699490fc2e13c0e8d8bbb7e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","c8cb4c047d383aa2c3c6619ff7d50f14"],["/2022/07/26/Japanese/助詞用法整理2/index.html","6490838cbc191cb7717d2a7fa91f17f7"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","67afdcc9d8df8059b8731dbe3d711a40"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","6e07cd24466cee8d4de91b38edd356dc"],["/2022/07/30/Japanese/疑問詞/index.html","fa8e01a994b574348c45bb6c5a0ed6ae"],["/2022/07/31/Japanese/助詞用法整理3/index.html","48d2824e59cbcd7884231a0eca3def4c"],["/2022/08/02/Japanese/副詞整理/index.html","b04fc0e02ffcb25ebfd0067ef4c9c806"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","b2236baff2e650ca054136318711cc72"],["/2022/11/04/Programming/Data Structure/index.html","41f106632bb77ac7a690c9b87459fbad"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","5282326c387d6084846570438be82cec"],["/2022/11/22/Review/組長女兒與保姆/index.html","4773a0f6c69fbdaf8e679d98e943e56e"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","bc4c2f82088d97cb764d9c71ad8f3ba8"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","71334f94764d4dd1cdd042532ce30932"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","e55e1abab22bdde85c8fc0381ffa7470"],["/2023/01/01/Review/あの夏が飽和する/index.html","645515f95c67b4284c57ecd1fad9b78b"],["/2023/01/02/Review/孤獨搖滾/index.html","0d56c6db7bca7e09decc69e4c4ca706f"],["/404.html","ad22eff8d7a03bbed42abb65d7990aa1"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","5708ca86eb6f22a57cde4111adc03053"],["/archives/2019/11/index.html","2d9082b16bc504216daca7c5452b9fac"],["/archives/2019/12/index.html","1bdb91a300f046e13059c3e1930aaf8e"],["/archives/2019/index.html","cbb04e962c7b52270d2fa0519b8eae43"],["/archives/2020/01/index.html","74c402e193de80507b9daa75b06b1a9d"],["/archives/2020/02/index.html","c8b2e1e6439b23be9797bcbc1d9c9ff7"],["/archives/2020/03/index.html","5cdc87555951cabd744e9592caa8aa3e"],["/archives/2020/04/index.html","9a8ed2cc6d888286c3cf98eade066813"],["/archives/2020/05/index.html","fd3d887682f563b4460d82dc65e1af79"],["/archives/2020/07/index.html","ca15da7200faeee7cb1f116fdff78281"],["/archives/2020/08/index.html","5edbd26604bf17e613e659d6d43b90d6"],["/archives/2020/09/index.html","5a0aa072c49ac17eeabe9bfe321e17f9"],["/archives/2020/10/index.html","1e12ac08cc6d4a55873582371878d7aa"],["/archives/2020/11/index.html","9e3cbf0c0d41435d799775c6b3beff53"],["/archives/2020/12/index.html","f18de91639a39e853bad5aab45421dcf"],["/archives/2020/index.html","6d48fc6153a9cec4f3edbb9b0143a8b8"],["/archives/2020/page/2/index.html","5eacb03f1e90328f67603a02aefd078d"],["/archives/2020/page/3/index.html","545805bc6d7f8157c49b8dee29bb474f"],["/archives/2021/04/index.html","76dc4d29848495aefe1e5d4a75c6986f"],["/archives/2021/05/index.html","4e6ba7b306548535a75fb39372e91891"],["/archives/2021/06/index.html","6eaa44f44317766c02e879b211538dfb"],["/archives/2021/06/page/2/index.html","cdb042bb0edfb16d2ce4925502faee6e"],["/archives/2021/07/index.html","3f657ea5a42fff96b1a63744173ea445"],["/archives/2021/07/page/2/index.html","319993273bc14421c659918d92390fba"],["/archives/2021/07/page/3/index.html","5116fc27efc64d1fbc0f0652c8f1d7e3"],["/archives/2021/08/index.html","1df600b7ebdb9619aab6cca12b65b57e"],["/archives/2021/09/index.html","2097a266451dbba2a2f3da561b1092bf"],["/archives/2021/10/index.html","5f3d5faba6d09e7c4e5f764558502c54"],["/archives/2021/11/index.html","ce7217624c66f129244fd871cdd0fd47"],["/archives/2021/12/index.html","5ad26b1a4b72f03da57b6897efbb14a6"],["/archives/2021/index.html","fef1ab2f84bb96e6f8880e5a40fda75e"],["/archives/2021/page/2/index.html","0979fdf3b5ebed0177609300a93a07d0"],["/archives/2021/page/3/index.html","a642f79a41e5dc43ada592c724379d68"],["/archives/2021/page/4/index.html","fbcc480ad69884a14f3eb1debac30b52"],["/archives/2021/page/5/index.html","72f088cca42312675733cae3ee4a5ddb"],["/archives/2021/page/6/index.html","23d58dabfa1adf5c1b7f8aee62260fa5"],["/archives/2021/page/7/index.html","6a8e8fe33f48d5a9e2160187d9270661"],["/archives/2022/01/index.html","7ae0a351ae5bbc5afe29fbbac1bde0b2"],["/archives/2022/02/index.html","5b6478a4cbf0ae938b2815fd99bd5df8"],["/archives/2022/03/index.html","9567d48e6d6f26f7a8e3e878296b3564"],["/archives/2022/04/index.html","17c946b03d82e743c493b827b9cd513e"],["/archives/2022/05/index.html","58cbae48ad674c6ce6deb1d009acd987"],["/archives/2022/06/index.html","100357ad9ddf5e8753ecb62aa2ec4da3"],["/archives/2022/07/index.html","9f9656b0f29fe60ecb51e12c51ab4253"],["/archives/2022/07/page/2/index.html","074ded7a7fa179d1192496815f0086db"],["/archives/2022/08/index.html","c3e8e9fb24c9c1ea2995a8a0103edb07"],["/archives/2022/11/index.html","38a307b4b5fb885d9eb3747a67bfa81f"],["/archives/2022/12/index.html","c8e52fa9b1b139ef65c4917f43af9af0"],["/archives/2022/index.html","5547fc917736bbd1f7449ada0aa56960"],["/archives/2022/page/2/index.html","2f3aecba565c5424d924d399bd278f0c"],["/archives/2022/page/3/index.html","7fd4f73ab216e365affa3abf78088f4a"],["/archives/2022/page/4/index.html","6979ba46d7efdb9f13ed0f7cea443d5b"],["/archives/2022/page/5/index.html","2fcc03ba44728c51b74ee65203da6d7a"],["/archives/2023/01/index.html","22b7c01e628eae68a91485cc258ce806"],["/archives/2023/index.html","fed42bffb706a1096d787f7ff9fdde32"],["/archives/index.html","4841c7cc34236e463b91a52925bc3014"],["/archives/page/10/index.html","80210000f56e686b1a448ae0a3028af9"],["/archives/page/11/index.html","d361b823a24b88bb1a9940a06549d484"],["/archives/page/12/index.html","181d081e7d08e688058ed1d0cd8f6692"],["/archives/page/13/index.html","c6443c42aa35cf3febc423527134cb77"],["/archives/page/14/index.html","ab7a918fa1ed222af42c248560a991e5"],["/archives/page/15/index.html","069119112ebe9987e422c7ceaf10c584"],["/archives/page/2/index.html","32bbf8239d32a80961cc97089be06c29"],["/archives/page/3/index.html","b903fa4c06b5ac472e8efe7225e51493"],["/archives/page/4/index.html","1621dd6551ced39815fdbe24212d036b"],["/archives/page/5/index.html","9d3bd8bdd5d23f4954f0f685beed778b"],["/archives/page/6/index.html","9c7afeada1b84cc6e035b885d15dbcfb"],["/archives/page/7/index.html","9577586fa1c72b4eff9bac4651dc7e43"],["/archives/page/8/index.html","66194c74495c46f598b04457c1698714"],["/archives/page/9/index.html","fdd7635749758d59268392713ef5794d"],["/categories/Programming/index.html","2f52040e54ae37445ad6372e7d3d3754"],["/categories/Review/index.html","818116923845d747b62982fe6d78d1a0"],["/categories/Review/page/10/index.html","29997d972db61db267b6b0ea457f67b0"],["/categories/Review/page/11/index.html","6fd87e87bd5d8e4b16b90e6648b8ba32"],["/categories/Review/page/12/index.html","e750a216c339b8ecee924870f620b85f"],["/categories/Review/page/13/index.html","e1861012b17849d1c0a4a4f4416c928d"],["/categories/Review/page/2/index.html","2bcea01130b6625a837de79b3cd3d5d4"],["/categories/Review/page/3/index.html","4d1f75b66d8a5667c0935a727e13a574"],["/categories/Review/page/4/index.html","b4fcc634c03b908a077d56cfed649179"],["/categories/Review/page/5/index.html","36e6bd7249dde0d57933d4d8e8cabf5a"],["/categories/Review/page/6/index.html","4fe10ae165b99793e6697c2e3ab517e0"],["/categories/Review/page/7/index.html","601150d630837f37580b35a153a45067"],["/categories/Review/page/8/index.html","fe51f55161d7148a216a782f4f9388d0"],["/categories/Review/page/9/index.html","20d0489b7e7ecfcfbba9df0ae3a0fe5d"],["/categories/index.html","1753f7f1086d22701cd78beb8c0c961e"],["/categories/日本語/index.html","4a4ded2ed3dafe66485d03fa37757ede"],["/categories/日本語/page/2/index.html","7038924a461519ffc39b10d49da20840"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c63db2e774972aaf78576424f44140d4"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","acfa82aed1a9bd1681f7668582964809"],["/page/10/index.html","097e306ffe745710a390409039dcdc7e"],["/page/11/index.html","c9a6e059fae86ad4ced1cd071ee5a5b3"],["/page/12/index.html","1885e5f7facaaf1be1a941bf3a48afc5"],["/page/13/index.html","fde09d14c092bb179dce2e6281d1356d"],["/page/14/index.html","b6cc440ba0bf17f8b8c14ff7bef55f6e"],["/page/15/index.html","7c99cf4cfb8cdcf358db0d922d084974"],["/page/2/index.html","bf7549dd650e8ce9bcc5ffdcb896e7a2"],["/page/3/index.html","fcf3990abad07fc2e1190ad47f6e106e"],["/page/4/index.html","7be36cb1e2d9beca82bf9bb837970b92"],["/page/5/index.html","fceeb8fca61fb8045fc6f38ca8aa35fb"],["/page/6/index.html","d9d2b2d0d7188c7f0b9c67382cf8c8d9"],["/page/7/index.html","f930af3fbddcb883526eca018b4d175c"],["/page/8/index.html","cee68c53ba30051f76c36557e1a4af7c"],["/page/9/index.html","8a866dc1933ee13a919591db166dc55a"],["/sw-register.js","f79df7bbc846dcd86725f75e61a4ccd1"],["/tags/10分作品/index.html","4c1b95e6f6f2e2267748338403f4d197"],["/tags/3分作品/index.html","86e55a09cf728f78f635f40f45764ebe"],["/tags/4分作品/index.html","4c63dcfd43a695a5954bc0ee2e9570b7"],["/tags/5分作品/index.html","4b8052bc5dd613072fbcf7ee8a20d8db"],["/tags/6分作品/index.html","51412e6c301018bc7be338dd364e01c9"],["/tags/6分作品/page/2/index.html","0cf55cc857dd7e17635e2052633448e6"],["/tags/6分作品/page/3/index.html","4e06fac4fd3ff4b237bf7001fcfebcd5"],["/tags/7分作品/index.html","1c76e0016b0c70e01782234ff19a8331"],["/tags/7分作品/page/2/index.html","6979f3e51b27809477beddc262662196"],["/tags/7分作品/page/3/index.html","4a3612ed932c979250601cc31ff05f45"],["/tags/7分作品/page/4/index.html","fb204b1304532b4d42b7b45cb7be0ad4"],["/tags/8分作品/index.html","20f945859a7eade765b39096e97de158"],["/tags/8分作品/page/2/index.html","69082a770490235c0ff443f6b5a575ca"],["/tags/8分作品/page/3/index.html","94e9c4aac44e2fbbb2ef2ea1077818be"],["/tags/8分作品/page/4/index.html","6b8954cd9cacf9be8175b129afbc8d2f"],["/tags/8分作品/page/5/index.html","bcd8852526ffd7b2e34c08ba3f1d2d75"],["/tags/9分作品/index.html","0d71606d039518aec283a5fa8a6a01a0"],["/tags/N5難度/index.html","81926b4b7bacb576d21b43e3b45b9896"],["/tags/N5難度/page/2/index.html","fe347439b72c8038f08268464f54f2ab"],["/tags/index.html","703e2c838c46f63b567a38457bb60ef2"],["/tags/アボガド６/index.html","a290e6b1c7c8441d38d214309c082e3e"],["/tags/三秋縋/index.html","cdfd90178431892547e1823a54be5523"],["/tags/中國武俠/index.html","7332e8867ceaebca9c86f65cbf500876"],["/tags/中國言情/index.html","6b9e14bcf11afbd076517cf9293b04e3"],["/tags/二宮敦人/index.html","fa345cb26decb23098501b8e593fefa9"],["/tags/人性/index.html","376d35a69464f262e64083140d715165"],["/tags/人際/index.html","a0cffde8c7491edc604e0a49bbeb9abc"],["/tags/住野夜/index.html","593ce548c7beb1b767006302791938b5"],["/tags/佐野徹夜/index.html","a15ba72d43ba25eeafd3370eef4e421e"],["/tags/努力/index.html","9348da2b24335b92492494fba57aa495"],["/tags/動畫/index.html","1f61f8df87041d10407c5175ca902ead"],["/tags/動畫/page/2/index.html","5bb38b50ef06cc8de8a89cad441446b3"],["/tags/動畫/page/3/index.html","de57b38c8ff24152af58e6afd5a24b2b"],["/tags/動畫/page/4/index.html","b3f3bb9e7ccef16b1a4e6ac44e8ad392"],["/tags/原諒/index.html","2e6cf7d1d38b2bf35e5de3bf9ed4812a"],["/tags/反烏托邦/index.html","22d4f70c28004dd983d8817c1a020f32"],["/tags/啞鳴/index.html","cf2af94c66c1e321154717277aad996b"],["/tags/喜劇/index.html","b639379c33093ef17711ae841dffea48"],["/tags/夢想/index.html","bf0a966c26c04c7fab4e2da9a0495778"],["/tags/天澤夏月/index.html","b129d7cb8722c9c6f7d9c8ffe83ed8ee"],["/tags/學習/index.html","894408bbad6717eaa05173f893a3fa9a"],["/tags/學習/page/2/index.html","855f5be059fa5fc2b38b34ecbd3c262f"],["/tags/宮崎駿/index.html","c033682d1cf3c9f6829390df085b3d94"],["/tags/小說/index.html","72d9c013c653332eb89722f4481def1c"],["/tags/小說/page/2/index.html","e43c4248a96b616ea7c063a6c9c29b25"],["/tags/小說/page/3/index.html","397dd0c50cac660624a82bac52dd7130"],["/tags/小說/page/4/index.html","f380bd06b5e248f9f5af98b3a5d67212"],["/tags/小說/page/5/index.html","e2af7da9a44066db75cd06ce3f114d51"],["/tags/小說/page/6/index.html","7f58f67a94823b5107be8e889dc6278d"],["/tags/小說/page/7/index.html","0cabc6d9dfa847d2364fe28d1417d869"],["/tags/平淡生活/index.html","95c8bef82d1f16258de54ae4d9990bb3"],["/tags/幸福/index.html","4caa0c72f83ac4c38700d0ca48f0d215"],["/tags/志茂文彥/index.html","2ddf1d90873da82c6e06ea32b12e669d"],["/tags/愛情/index.html","47fba99258b93f82b474cad877ac3836"],["/tags/愛情/page/2/index.html","a116dfb1cb556c942a11bac2ca53e2b5"],["/tags/愛情/page/3/index.html","b00580a979e69d544dc51b4a94d5f7ee"],["/tags/感動/index.html","d755412d810cd3873b63f1a729b22899"],["/tags/懸疑/index.html","2f00496a871f3837727c5e1babd283d6"],["/tags/懸疑科幻/index.html","40969f09d21a763ea6b991289b1bdda6"],["/tags/戀愛/index.html","b7884fd6833cb97a9b7d46d23968901c"],["/tags/成長/index.html","5f82841d88c8976f1a7b6903e9f3ef02"],["/tags/成長/page/2/index.html","4b1311f3f8c7d9650e49a291efdabffb"],["/tags/戰爭/index.html","9994e4cc04f13efdff40d1f1e98fdb72"],["/tags/推理/index.html","5ec581657b6d32b390906421c3eeb84f"],["/tags/搞笑/index.html","f685290853d00dcd0bd3f36577a50ba3"],["/tags/救贖/index.html","d1d3643f921913e8cdcaa6be21f612e7"],["/tags/斜線堂有紀/index.html","04d66f658720bbeb658bca024ca044f1"],["/tags/日常/index.html","8e260781e9222ed36d8dbfde6032c506"],["/tags/末日/index.html","42633ad652fe31f369bef8c0608fc41e"],["/tags/校園/index.html","0e683ff75ca645056985aaef7c3092b8"],["/tags/武俠/index.html","a10559d9a65be2ab12931c1f270a2adb"],["/tags/武俠言情/index.html","110efe3ed47c8bd498e6fc93d8c557fd"],["/tags/漫畫/index.html","9282e1138af273f0183320c1910114c3"],["/tags/生命/index.html","c54d59245cf389192f1af6affe50d7df"],["/tags/生命/page/2/index.html","9975237e28d590932e504e30b68beaef"],["/tags/短篇/index.html","fe133f4cba83f6ab023217c0d7a24efa"],["/tags/社會/index.html","cf9593ca67d7eb2de212fa283edda5bf"],["/tags/科幻/index.html","7888df812da497c40b20252751a4a80e"],["/tags/童話/index.html","ddae2dc6b751d2972aeffd2ca58974d7"],["/tags/競爭/index.html","ed8792b0af7b8aa9ab624073124f5385"],["/tags/自我/index.html","dbee19be9538e2b320605f8c3548f441"],["/tags/自我認知/index.html","04fc08b4089b358c2deb4bada3e2ffda"],["/tags/葦舟ナツ/index.html","7b23987dfa05732814b4a2aa0096f314"],["/tags/藤萬留/index.html","2d2e5daba34a0b366346f2650438f778"],["/tags/親情/index.html","c3554350c610c33a90c32aca374cb51f"],["/tags/雜項/index.html","f0422f2cfb841a18b5bc2d942f01b526"],["/tags/電影/index.html","b5712373ccc119bbc88be9f751ac6d75"],["/tags/電影/page/2/index.html","b5dbc1dd19193a526c700e3d8fd449a1"],["/tags/霸凌/index.html","c0d169b60c932dcd27a8347cfd59af8d"],["/tags/青春/index.html","856508c4ddaa9e468f550d34bdbc8184"]];
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
