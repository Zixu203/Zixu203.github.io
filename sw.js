/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","128d1c99ca628539c140663400c14afe"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","3ce0fca0873a1159c1a8ba0bc2fa282e"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","d3c2852d038adc4abbac7cec1a9d7c7a"],["/2019/12/25/Review/無法計算的青春/index.html","7f79c8fa9c01136af1dfff6bd683f0af"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","c22a5915541973aae497deb8a222d309"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","272bfe50617bd8a77811ed952bfcc50c"],["/2020/01/19/Review/下雨天，不上學/index.html","a2909079b702959dc693afb6646ea81c"],["/2020/01/26/Review/三日間的幸福/index.html","30e030d0a0c08328810ab6506bc4f2fd"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","575a7f4d63019f353ec0fd4b0e90d764"],["/2020/02/09/Review/青春期超感應/index.html","6b048ba09b5d6f2909b152230b1a0f96"],["/2020/02/15/Review/又做了，相同的夢/index.html","4bdebc9a02345c384d4cca2b2253e121"],["/2020/02/22/Review/回憶當鋪/index.html","3b953170d543a38027cc5d9c24a7294b"],["/2020/03/22/Review/不適合自殺的季節/index.html","ecdb608ac8997e32894dd8c71d2fcce6"],["/2020/04/26/Review/我們都無法成為大人/index.html","4ab715b1c860c0727bec9de8c222c603"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","ef5d3d779f14924b0104c8818f0099f6"],["/2020/05/17/Review/人間失格/index.html","2276487eb3fb7ed66ab9089ddb741ea1"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","9b32da45d93a068768461fad81fa2abb"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","939147697f97dd99ad8c951fc90f8159"],["/2020/08/01/Review/銀河鐵道之夜/index.html","ad74a783babcea8f6dea8895b73294b8"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","cec257b7e12e564995af2f7d0c5bf6cc"],["/2020/08/16/Review/15歲的恐怖分子/index.html","514d1ea1ff2d5084994d3d3f756bcb5b"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","59eb2e200159b823e9af8b6e34c0b1fc"],["/2020/09/13/Review/羅生門/index.html","990eeba0dfb9e78afce09e7229f6cda7"],["/2020/09/20/Review/闇夜的怪物/index.html","1cd13b438945b34600141f6f56c04e0d"],["/2020/09/27/Review/14歲，明日的課表/index.html","a6102cab8fc133b3efb6f5ee065347f9"],["/2020/10/04/Review/致十年後的你/index.html","2004b1b4bbc41d16f96c894536586fdd"],["/2020/11/08/Review/滅絕之園/index.html","45154c8ae137e1c67920625ca40cfd86"],["/2020/11/15/Review/將愛拒於門外/index.html","5fc1d28f364a29f35a2b88ba2924e16c"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","06658c20f849ea7b9bd7a8ebf84a6304"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","a2434135997676a4acdf9a27871b7209"],["/2021/04/22/Review/道印/index.html","3773fbef6d7ace89ea58d3b4615f8b7e"],["/2021/05/03/Review/戀入膏肓/index.html","637b4aa09b883865de394b97706b3e5f"],["/2021/05/10/Review/Dice/index.html","2cb5f799b01daa5d39c083fe04d4467f"],["/2021/05/15/Review/魔女之旅/index.html","75ad0d05ea09c7526935240bc31b59d3"],["/2021/05/28/Review/戀愛寄生蟲/index.html","7f0f79bca84a82dce6b391f58b9f8c52"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","ff53b3da8aee81652ac235b543fe5e73"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","5fbe19e4eb7ae2c7f2ca26a5991be1bc"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","fad796009170f9ca4c31eddbc8ab0626"],["/2021/06/05/Review/流浪的月/index.html","b6d85a2d9da407ff49e0b7886020ac38"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","dbc648819023ce407b45f537787db02f"],["/2021/06/13/Review/第一人稱單數/index.html","316285fe030b528d7ef855ac7e450574"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","4d294e5e3c6b684f529b72d9d71cad31"],["/2021/06/16/Review/願你幸福/index.html","ca7ba55322be94b6c457cb3b44ae4d13"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","738e68844f0c206ce3aff1aa45199b71"],["/2021/06/21/Review/神隱少女/index.html","415de049f302d3b37358df126b727f1a"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","2878c098a4dc381ff42efc1e3035642d"],["/2021/06/23/Review/天空之城/index.html","cb554ef216966bc0d7e7b086d89d0127"],["/2021/06/24/Review/魔女宅急便/index.html","03a943b6b2e29202c7bfba617b380649"],["/2021/06/25/Review/借物少女艾利緹/index.html","9b728d463c6ab3bd85c47fcdd3131840"],["/2021/06/26/Review/魔法公主/index.html","74f3492e8be76c6b720fa70b856e2a10"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","14c6e80dbf4a114cab4501618d6716a3"],["/2021/07/04/Review/飛雪與劍/index.html","9f385b0605975d3885999137c02028ed"],["/2021/07/09/Review/地球防衛少年/index.html","6d15c3c0514ba1317052540243884c0f"],["/2021/07/12/Review/Angel Beats!/index.html","62e25b838708306a3796cd5d91710af9"],["/2021/07/13/Review/Clannad/index.html","8cc9062d0a04f26eb67796643e9bbbe8"],["/2021/07/15/Review/AIR/index.html","a2551fb440657d07f8b07a0e23e238c4"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","061684c85524b38b4404bb7bf14e1987"],["/2021/07/15/Review/螢火之森/index.html","5b28fbebf6494150d54de4c818e37f73"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","cf564723ae7b95686236027edc84438e"],["/2021/07/17/Review/奇蛋物語/index.html","f4583b34ca5a463b3d72237b261d37b6"],["/2021/07/18/Review/Vivy/index.html","54a7630ae3ca7228c19cb7c612763c60"],["/2021/07/18/Review/請妳消失吧/index.html","c68d18c1772afc7eb854514f3530a0ad"],["/2021/07/19/Review/漣漪的夜晚/index.html","79b957563fb0312241eb16c53a122bf2"],["/2021/07/20/Review/月色真美/index.html","367aefc2a0623b84bcd2706491448133"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","ff676e07fe867d89d6ec32aad279904a"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","b5457340412184753810425aeea6b322"],["/2021/07/22/Review/罪惡王冠/index.html","cc49c5a65f2b5b2032648513d90ca14a"],["/2021/07/23/Review/弱角友崎同學/index.html","cf244c94fccc8242707dfaa4ef87ed28"],["/2021/07/23/Review/惡之教程/index.html","36e2f9ace87965d3186b604e840a66ff"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","7064f880245b8cfc0b7a6b95a0f6ab42"],["/2021/07/25/Review/魔王勇者/index.html","bf73b0adc06472d59d18d771119e3bb7"],["/2021/07/27/Review/一年A班的怪物/index.html","51df66566fa15747558499beec0864cd"],["/2021/07/27/Review/奇巧計程車/index.html","a19157fcae7231b95ff8f96b047db56e"],["/2021/07/27/Review/專情的碧池學妹/index.html","0897f8fc1f463b3b78728930617f42e3"],["/2021/07/29/Review/只有我不存在的城市/index.html","0029705fdb59e128b427aa590af60768"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","5cd3cdcc4695edd25ebf8c13b69c3b11"],["/2021/07/30/Review/可塑性記憶/index.html","b872536a4d1ef001ac6bb0bb115d96a8"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","dbd5d91aca9882b9ed9d863a1542e147"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","29cda173a85489425f48b81bf34efc2c"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","8ae8f88eada16c995db0cba2d6ada804"],["/2021/08/25/Review/清戀/index.html","ecdb14ba71a40d8576c4d0fddea0f2ac"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","2e11c76fb15648fca89a8f0b606382b4"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","b9f5ab80b05be4a2c20a54733fa645ec"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","276cf836c396662c64253b0c0f0c34d5"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","2cf17cab68ca97bb078d7ef6bd1eb8e5"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","5390d57af584e75bac53ed71adb22010"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","f335f6ca3f29748f02677777aa3b0dda"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a4b2add954c9f3bb03c70ff97f6e94b2"],["/2021/10/16/Review/龍與雀斑公主/index.html","af584753b668cf7799231af54f565ac8"],["/2021/10/19/Review/孤狼不想開後宮/index.html","36f79ab74ffb2340c314252ecbaa5cb9"],["/2021/11/13/Review/徹夜之歌/index.html","af9a632d8da5c62af015d45e0e51f528"],["/2021/11/24/Review/武煉巔峰/index.html","a8a16427d8be466841407596690cf6ca"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d7628ff67db5b117f4c5a1b1b2fabdda"],["/2022/01/28/Review/神醫凰后/index.html","609fccc4d72636fa9a78b8b464d115e1"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e4c9c8a6280b9fe8bfcd3063a25f9773"],["/2022/02/13/Review/夏日幽靈/index.html","58ce31803d2a5a944ebc10e522dea703"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","9dd4602942077d62cc3f552f5ed711f1"],["/2022/02/26/Review/賽馬娘/index.html","6cecae38ec7232199dc939f356a86401"],["/2022/02/27/Review/大欺詐師/index.html","b424415031e443b848300d3a45460f1e"],["/2022/02/28/Review/前輩有夠煩/index.html","9c78ea66a4cc1e91541053739676ba43"],["/2022/02/28/Review/碧藍之海/index.html","5bd056ad1fa102446c2720f609e5de87"],["/2022/03/05/Review/落第騎士英雄譚/index.html","1eac958b3afe57e421feaf0ebfd18825"],["/2022/03/06/Review/Another/index.html","4f5dcb8ea1d8d7bddb1c2b2c01770d92"],["/2022/03/06/Review/入間同學入魔了/index.html","6c22d7cdac5e52a3e635c658053d4c45"],["/2022/03/18/Review/再見宣言/index.html","158ecbd71f75e7e8ce152ef13d3f8b31"],["/2022/03/23/Review/生若冬花的妳/index.html","c3055cc8b45c484716789ab1c11589a7"],["/2022/03/25/Review/天之弱/index.html","7dc17369f227f6ddd0c46a3edca04c6f"],["/2022/03/31/Review/滅了天道之後轉生/index.html","de72c9ab542c8747706b20e393899572"],["/2022/04/30/Review/泡泡/index.html","c25c15d31364f6aef2a30a8eb3dec511"],["/2022/05/04/Programming/Dynamic Programming/index.html","97c173cc50c28b36ac41de424825a251"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","192df0ca2e8577e95c49e5d3916b5bf5"],["/2022/06/13/Review/偵探已經，死了/index.html","b52bab7f9fedcdafbbb9b4df2786c3ad"],["/2022/06/14/Review/黑色子彈/index.html","da439b6298c9b2fc8314f922434f154e"],["/2022/06/15/Review/黑白來看守所/index.html","6dc7452ddcafaa36ea766e7fa835523f"],["/2022/06/16/Review/虛構推理/index.html","2db748b22d0e8d110cd8ae2d8e129146"],["/2022/06/17/Review/戀愛與謊言/index.html","32a34366fb9d9928c009edcd73c21972"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","b789190e8d9f3aa14ee7983f6bce5e9c"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","9ac9058574f151dbb0ef682250906386"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","5626cc9247f9faf6821d5a05cb1681d8"],["/2022/07/03/Review/Hello World/index.html","d54c6bf86d0d1542558ed059ade301c6"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","e5ef78c2a819d7469a3b6304d3278477"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","12bab4311ee4e4c85a6d7309003279df"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","be18be87cdb643369d8d0b37e1a4ff48"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","745c4d5ecdc362bda76de6b132063e84"],["/2022/07/16/Japanese/動詞分類/index.html","ea022efae8c039951beca565d7d95799"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","56362adde9f5b335ca544a5b7924c11f"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","b9db33699d0e90792519deda6b34508e"],["/2022/07/17/Japanese/音便/index.html","612055ae2e6603e19e7a62abab6b7932"],["/2022/07/18/Japanese/動詞 時態變化/index.html","1b460de9f6f344b4b825d428eef4e639"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ca71732467eb7d8ab6fe02628beeec98"],["/2022/07/26/Japanese/助詞用法整理2/index.html","1e8c19db586224cf1c635f73a7d2f19c"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","027b54443c86c56cf7ecfc7b0f45442e"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b85f4d316ec0e674a63f21121c612439"],["/2022/07/30/Japanese/疑問詞/index.html","5ed88dd36095b0d3b61aa0fc8cac0c6c"],["/2022/07/31/Japanese/助詞用法整理3/index.html","f1eb000c9c7970f5369d45c33b153c96"],["/2022/08/02/Japanese/副詞整理/index.html","b43083b8a585de7e19ffc7340a6d81c2"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","5f93b069db4b70a076f84d1147e8e475"],["/2022/11/04/Programming/Data Structure/index.html","50d6dd4a489a86a00b60ae66d066ea24"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","ec3b01262bbfd10d5bf2c93b2b1500f6"],["/2022/11/22/Review/組長女兒與保姆/index.html","13dbb376329f02f2989c5ec35d93d8e6"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","89b98d2855f4ff32143915b163c1ad9f"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","ed0bfc612738af7f9ad497d9d2213140"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","61c9163c722638d261de8b27480a7090"],["/2022/12/31/Lyrics/一番の宝物/index.html","4e84646f8736670c75e0315d6b6a8b7e"],["/2023/01/01/Review/あの夏が飽和する/index.html","391ef25974e5dd66a0ca66c9b8ee9db4"],["/2023/01/02/Review/孤獨搖滾/index.html","5fb34247e1b89e43ca956a5d9a47ec45"],["/2023/01/02/Review/藍色監獄/index.html","408771dc14a9ab4fcab843b093f3135f"],["/2023/01/03/Review/來自深淵/index.html","9c6cd1bb18def0fdb87c17c93ca3f473"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","ad7e7bfc4d6fe8066ebcc4e2c7b44fe3"],["/2023/01/05/Review/處刑少女的生存之道/index.html","e27dc5e968a20910e1b894ff5a0d8abc"],["/404.html","7458372f7522e232461e6b30e10fdc7c"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","8ef918f55a9967291c5cd5bdf326e185"],["/archives/2019/07/index.html","102804309da87d70eab4fa99a62fff5a"],["/archives/2019/11/index.html","e85c0dd39023c8708382da09e25cf244"],["/archives/2019/12/index.html","ebeba426c13bc9bca293f5329a6dcec1"],["/archives/2019/index.html","5cf38d2321456dd9f7f8c1e6d01f452f"],["/archives/2020/01/index.html","17bd89c05a101b2be47c390348856a8d"],["/archives/2020/02/index.html","443e404dfaa41e5f27c81e0120725098"],["/archives/2020/03/index.html","f319bdc16f90ed3ebb7d3708877df0ff"],["/archives/2020/04/index.html","cd2cb06844c072cbf07a6a2003943b04"],["/archives/2020/05/index.html","f5df5d50519da6566fec9f23d684bada"],["/archives/2020/07/index.html","3ca591b254ac22f512fb6d5f7a38f27d"],["/archives/2020/08/index.html","417a3876b849e17f78e74eaf99de2c69"],["/archives/2020/09/index.html","19d8036e7079cf1b370e09be4acec6f9"],["/archives/2020/10/index.html","48999727b40e4f7028ddb194ecfdb15d"],["/archives/2020/11/index.html","8aaacc896202d9c10e1d509f29e56487"],["/archives/2020/12/index.html","595c39cd4dd442dd40a382db826bc5e9"],["/archives/2020/index.html","067f1ebf6cb1efc676941c7d814531bd"],["/archives/2020/page/2/index.html","64072d900f8bd958862e372b062c30cc"],["/archives/2020/page/3/index.html","76817134daf10dac9cb03d681161b323"],["/archives/2021/04/index.html","7303797dc0b05d326ed374934b22db9f"],["/archives/2021/05/index.html","a76e184bb821d23b65b2e9022a1c0f32"],["/archives/2021/06/index.html","e322c478d39b94090999fd4ca3220b82"],["/archives/2021/06/page/2/index.html","78fafdb82699e0d2555862bd44741fcb"],["/archives/2021/07/index.html","a0998b84ee2184b29eeaeaf9d15189ab"],["/archives/2021/07/page/2/index.html","83e59e3be7615942d51accedd4d3f3b9"],["/archives/2021/07/page/3/index.html","ee512e21b4fc349f87b7f2bcfe80d684"],["/archives/2021/08/index.html","b02659bf953f25aee41b5b9d1d918875"],["/archives/2021/09/index.html","55565679f37a458f39227b39e730319f"],["/archives/2021/10/index.html","2a5289e72a931cf9a6b4bbc66bfca951"],["/archives/2021/11/index.html","f0d51b43bf624330b8ece6449baf9214"],["/archives/2021/12/index.html","3d5e0f254441773795f634920df7ae1e"],["/archives/2021/index.html","bafe11a0946cda9003b34029900af0be"],["/archives/2021/page/2/index.html","16980f78d44bae650fe533f90cce8a45"],["/archives/2021/page/3/index.html","99d89e96704d8399cd268b5b426c088a"],["/archives/2021/page/4/index.html","897361f19f36058ea852c46cc93a76c0"],["/archives/2021/page/5/index.html","1c5da94a303454a09cda5a218a6ac87c"],["/archives/2021/page/6/index.html","a9a8dd9672c1123c9ef71b71f74f9f8c"],["/archives/2021/page/7/index.html","a3698c532bce138988186dd84a321c83"],["/archives/2022/01/index.html","87f34323c5ba858c7135d9afc91f37fe"],["/archives/2022/02/index.html","328696c47db37ce53e2313d42bbebc3a"],["/archives/2022/03/index.html","9e158402ff16a5038ff6197ad610ef55"],["/archives/2022/04/index.html","012648eea5724ac2c67ed9f80699b466"],["/archives/2022/05/index.html","24c705c510594b81a7ac11f5fe1425b4"],["/archives/2022/06/index.html","b8493ffd09e00748f469fd363d2329d9"],["/archives/2022/07/index.html","633275786ee803c1d1f8e9e28ab10424"],["/archives/2022/07/page/2/index.html","fe2568f2ba6cd3a18595af368f239f8f"],["/archives/2022/08/index.html","6532580daf330031015a691714f72a1e"],["/archives/2022/11/index.html","4c33197d50e0afafdfb30f407a123457"],["/archives/2022/12/index.html","3f72241c46d979aec4b39e876ba43147"],["/archives/2022/index.html","9cb14a19830a69bcf0aa7b90a4abd126"],["/archives/2022/page/2/index.html","0cfda9b2bd948c7b6205e7563b0fad5d"],["/archives/2022/page/3/index.html","de78889bf2b0cebc3276ee53729f389c"],["/archives/2022/page/4/index.html","ceff8e7ac0704d3c5c854bbf031f82c7"],["/archives/2022/page/5/index.html","784605e45bbf17d2493cbbda91f5c37b"],["/archives/2022/page/6/index.html","1905f9643fd6617415d1296cfde02676"],["/archives/2023/01/index.html","93cbe17d09305a18fd78be98ab51f621"],["/archives/2023/index.html","2043523620bf8e70ec5a1ea41a1603c3"],["/archives/index.html","2775806cd075a0eb56e8d2ed3276ce5d"],["/archives/page/10/index.html","087771e5f56e206b4ae7e39458e214c0"],["/archives/page/11/index.html","fe1e3fe3d6b501b156fc4c5f72d90275"],["/archives/page/12/index.html","76c68f0bd3981659fcbc219dd0ca44b2"],["/archives/page/13/index.html","2fbf601de3592fcfc23742ab37af90ba"],["/archives/page/14/index.html","d2f3f596cab822141012a7ee3e37e01d"],["/archives/page/15/index.html","b6a31997a1b6f781b36661767f253de3"],["/archives/page/2/index.html","7b3824be6bcbb5390910f0cbfd98b5f4"],["/archives/page/3/index.html","b836b5e4bba7aa6d090c09cebba5ec6e"],["/archives/page/4/index.html","5fca310320036dcd8d2dbc5e6888bbda"],["/archives/page/5/index.html","c623c40604f6256fe6332514d56f1d5a"],["/archives/page/6/index.html","e2f1b7b390d518d281d7cd5c81d3ba30"],["/archives/page/7/index.html","a83e53bf9a221f8c43440351edaec300"],["/archives/page/8/index.html","080d9cf2451baecc9733d15a3cdd62fa"],["/archives/page/9/index.html","d7164e1c17e4ad539b6156b76aabf151"],["/categories/Lyrics/index.html","b3003dd2ec0174ff02c452accfedbf09"],["/categories/Programming/index.html","ddae45c8d5742b2b36fbac730e19be79"],["/categories/Review/index.html","e24c5a53f4559e836a2e77607a6cc789"],["/categories/Review/page/10/index.html","a4c36ab9563a36f7dbcce0fcd52a2d70"],["/categories/Review/page/11/index.html","62b88af000251eb42efdeb7629ec1c8c"],["/categories/Review/page/12/index.html","31f604722712cccb229596d207e3fc06"],["/categories/Review/page/13/index.html","9cb0fd4c38bf6ccaa80609ef97000466"],["/categories/Review/page/2/index.html","99a483586d2f7a15fb8faeda321dd2b8"],["/categories/Review/page/3/index.html","3238e0534689a40927fdcddd82c99228"],["/categories/Review/page/4/index.html","a5211422fd7b9b93e083918b02ce39fb"],["/categories/Review/page/5/index.html","c1424745eea75f3f89fbe5c5cf3245c6"],["/categories/Review/page/6/index.html","533c836ef9b8ce14d34c52fbf9e1508d"],["/categories/Review/page/7/index.html","9eb5d5a6b09247e1fcb462c24c937a1f"],["/categories/Review/page/8/index.html","1b4ae9a36dde1aa755a5be216c60c084"],["/categories/Review/page/9/index.html","3d963fd5338782ae14353ca1f99618c8"],["/categories/index.html","a74bd736ca0a07380c90aea18ab0ac35"],["/categories/日本語/index.html","6ee1291f196cb4471636143431ab486b"],["/categories/日本語/page/2/index.html","07caca9e601903b4f7791253f5ff7fac"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","19b302c7b4738c64c981cb26443ffca9"],["/js/custom.js","2b7e785b857773766c776e2af8375ca3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0f5f201318e2bf236c235ddfbfde3872"],["/page/10/index.html","fc9fa0f5bef2268e466c6c2c2563714e"],["/page/11/index.html","65834bb2efd7d45eb5e7cd6843958f81"],["/page/12/index.html","a024639a114ffe89ebe7ce52a319a40b"],["/page/13/index.html","cb4c517f292bcf79775e054c4d3cb9ca"],["/page/14/index.html","7ac777d0d66a35b63a7d42819f3c31fc"],["/page/15/index.html","d211335d5507bd762951c3851eeafd44"],["/page/2/index.html","91257a21a56500cd5af8ccded3772150"],["/page/3/index.html","8520f0b94f74454ab4870d9ed7cec88b"],["/page/4/index.html","f95d6d34a07d27c424d01039ecb21cd1"],["/page/5/index.html","2a36608c76d3b7b7109610809dc431ea"],["/page/6/index.html","c49ca2385b5179857599ffc71ee8f772"],["/page/7/index.html","0de59c75a8f226add5625166ceced8a6"],["/page/8/index.html","31daa86671243eaa96e69b115e93a4e2"],["/page/9/index.html","78903cea6bac92c57eb30c330066e9fa"],["/sw-register.js","da003fa2b6f6febff84139de822a633b"],["/tags/10分作品/index.html","5e01f8a98200dae2c8f7f6d8a402db74"],["/tags/3分作品/index.html","89ae2e145b34d328934e6c93c47e131d"],["/tags/4分作品/index.html","35c5ccfa075323b17e38022af0da424e"],["/tags/5分作品/index.html","3b498eae98abda4ebb3e470c66f03039"],["/tags/6分作品/index.html","05783a8f7e0b99090abd4a7fbb4a086c"],["/tags/6分作品/page/2/index.html","0e84c7b9e9b99efbef006d564c852e5a"],["/tags/6分作品/page/3/index.html","98a86fb1aa4a907ffdb26bcd0aed4f0a"],["/tags/7分作品/index.html","439739c2a4de1a234f5807bb7a57b08d"],["/tags/7分作品/page/2/index.html","ffc21815d923f472644d71f3c3221a98"],["/tags/7分作品/page/3/index.html","c040b7b13078f788235da2d4d77e9509"],["/tags/7分作品/page/4/index.html","f23949dbe00be6bedc5c754969eb099e"],["/tags/8分作品/index.html","42cdbf12e1bc5dbe3466f832a8d60c6d"],["/tags/8分作品/page/2/index.html","0d8dbeb50848d87cb76b74c9100eec04"],["/tags/8分作品/page/3/index.html","ea70ebe7b7d2d6a6753bd3a591aff18c"],["/tags/8分作品/page/4/index.html","d456ce4be5729ea9f694f75db97a4c0f"],["/tags/8分作品/page/5/index.html","5e19e7bf3b024858d35aa0f4757ea28c"],["/tags/9分作品/index.html","47fb009604d192f0d9dc2d704e6621e3"],["/tags/Lyrics/index.html","eeb0e73c7738e3ebfe8ac4a1a3cf55cf"],["/tags/N5難度/index.html","8947363a3179ed4226195b90139e01bf"],["/tags/N5難度/page/2/index.html","687ce1591ca61bf455e61ce2f648ab41"],["/tags/index.html","159a74e432376608a439677470e8e149"],["/tags/アボガド６/index.html","e5044bd3a5ad8c7e05f8a0d198544c3b"],["/tags/三秋縋/index.html","aa53e1d2ecece3c6098ae5b9ae25a3eb"],["/tags/中國武俠/index.html","1edd63fb8a72b5311956cc200a31e7b7"],["/tags/中國言情/index.html","e9aa0f7382b4769d0d7040b6bb576a6c"],["/tags/二宮敦人/index.html","1d2c888f4a0cf9a7d6f5bdf0595ec1cb"],["/tags/人性/index.html","ec045b5fe2a4203f3518d09d8fb68bf1"],["/tags/人際/index.html","1a9978193d1df5ab1c41895f9689ba32"],["/tags/住野夜/index.html","29d13951118b67967cc7cb14c9402c22"],["/tags/佐野徹夜/index.html","59430951ad71b25aea4b408cb6cf8c67"],["/tags/努力/index.html","101699ca1b7f7f8e05f5fea5d11c0e62"],["/tags/動畫/index.html","05374280df0da730becb29fb01ccba6a"],["/tags/動畫/page/2/index.html","b45576bdac06dda4fbd7742cb4a48b35"],["/tags/動畫/page/3/index.html","6e6f7c06e33faf3c13555d8bb3d5a6a0"],["/tags/動畫/page/4/index.html","497a260c9cf73e75394cbaa0b659cab9"],["/tags/原諒/index.html","f8cdc8170ca0f3b1022712d6c11ddcf2"],["/tags/反烏托邦/index.html","a9099a8bcddbf44b994ef62e67d18890"],["/tags/啞鳴/index.html","3303508e6620b6e9d752798dbbe42227"],["/tags/喜劇/index.html","7e41ea1431f1f20cfa23bfc4be8070a8"],["/tags/夢想/index.html","3fcd6800e77ba26dd9eae43680af0d7c"],["/tags/天澤夏月/index.html","02c9a8ff8643e60bce50fabaa61ac9ab"],["/tags/奇幻/index.html","697f7febb66116db8b4e03b0e838fd8b"],["/tags/學習/index.html","4f042da12d18c7cae3a26ab3d0f3603a"],["/tags/學習/page/2/index.html","142b6f46abf79935d55c2c973062ee42"],["/tags/宮崎駿/index.html","e40e53b8c16f3fc4b6ae70475b7e4b67"],["/tags/小說/index.html","f39b7471aed5f247b0afec1fafd4d861"],["/tags/小說/page/2/index.html","e268499bd7bf16663d690c19110dc324"],["/tags/小說/page/3/index.html","b76f4d0dd0fdfa1ef7cedc644804a385"],["/tags/小說/page/4/index.html","1ec01d37f7208b2b353a2661226f4e0d"],["/tags/小說/page/5/index.html","270c7b6cd6de21aab32cc307a191a70f"],["/tags/小說/page/6/index.html","713f1b93e6659d1e3d06bdf05842ba2f"],["/tags/小說/page/7/index.html","6a80e1052c20a9ef45cfdd03ec2c8952"],["/tags/平淡生活/index.html","4ffb691b283698845b46bb09643665a4"],["/tags/幸福/index.html","284449c1de09d1c3e449690e6a73394d"],["/tags/志茂文彥/index.html","3f7e882e626b495d5aaa5931747f26dc"],["/tags/愛情/index.html","158384b34c0e5569a09d2af8307ef9f4"],["/tags/愛情/page/2/index.html","08957fddb07aec04572843e09f378ebd"],["/tags/愛情/page/3/index.html","cbd1f889f033face5991f5af2136caea"],["/tags/感動/index.html","377ca72d0b7a0e08cabb7387cb141119"],["/tags/懸疑/index.html","0cf40746bfaea826d186d7e9ffa0fb8a"],["/tags/懸疑科幻/index.html","a127402c197f8f4242f253595aa0b853"],["/tags/戀愛/index.html","3ca6baca476a79ef38b5db03440bf2b8"],["/tags/成長/index.html","0578923322b7f0fa5472d31bab51ee4e"],["/tags/成長/page/2/index.html","ad2673379d5b013583296dc060483db4"],["/tags/戰爭/index.html","3bc4c5f9cfbf7fa02f68134afae94162"],["/tags/推理/index.html","3407723aac9168507983b99fdaf5af10"],["/tags/搞笑/index.html","e03537e9a62e25873d4ed6b0d56b0def"],["/tags/救贖/index.html","510584be2bd32b1743c33601d1a7ec06"],["/tags/斜線堂有紀/index.html","338901848d8ddb6362a756d1d8fd13cb"],["/tags/日常/index.html","40d455b4b6f62d6de597064539342cd5"],["/tags/末日/index.html","4114da9a146b4f619c61671a4e774d1a"],["/tags/校園/index.html","279fa0e5cbff76e3c1615e5f8c23389f"],["/tags/武俠/index.html","166707dbf968187b500043d9c1c8e038"],["/tags/武俠言情/index.html","b9a5046d98664865c0f5862f5e88c5a3"],["/tags/漫畫/index.html","445c95d813fb60911b537c7ddbf234df"],["/tags/生命/index.html","ebc967041621ee44016d95b9cec00302"],["/tags/生命/page/2/index.html","a3147c50958fb4decf636b94f44625f0"],["/tags/短篇/index.html","d4761d277e73975254cd5a8172bc4081"],["/tags/社會/index.html","30b6f2908e3687c843423ec9b395a6c2"],["/tags/科幻/index.html","e627dfa8a5fab368f26edf78b1ada42c"],["/tags/童話/index.html","3888abbde29f5f7ff8a8aed1ce884007"],["/tags/競爭/index.html","0dc8c2341555b0c0153bc5ced002d32b"],["/tags/自我/index.html","e3f98d5ea16ac35d142bbab3667355b8"],["/tags/自我認知/index.html","4c3af8272a71e8e5e5b0390444272b3c"],["/tags/葦舟ナツ/index.html","98f5e7566b47ffc980a48b85cecd96af"],["/tags/藤萬留/index.html","8c61c8fa41e07e26ed58559e6d004a4d"],["/tags/親情/index.html","ef8fc46ddcd98ec296f719c88fd4c444"],["/tags/言/index.html","68dd96d58129452fecadf64bb23693df"],["/tags/雜項/index.html","c2d368df497e8a25dd873221041d37e4"],["/tags/電影/index.html","3d83dcf6c48327fe9abe4ef3f35a3750"],["/tags/電影/page/2/index.html","2c80a7e96fa01c75115ba66118374ae9"],["/tags/霸凌/index.html","52deb3ce8f900ad1edfb96f37adef44a"],["/tags/青春/index.html","79b8dee2c0b9ac8853f4c1e84f0600d8"]];
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
