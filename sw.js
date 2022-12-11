/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","a0c6c4cf9fe5edf7d7d64a970781f466"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","ecc3c63ebb8f90b11011fdcf5ee6e224"],["/2019/12/25/Review/無法計算的青春/index.html","930831fdb6d63660a041b27b768b7ff0"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","688dc748a9a23f4a4e292356fabc4745"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","7e18ec42241ee98c58e6475323d766f7"],["/2020/01/19/Review/下雨天，不上學/index.html","7ca688d6fd5f69b239e07d7feb5dc78b"],["/2020/01/26/Review/三日間的幸福/index.html","7fc87a1da4ef901a10ee7c7c94b63e55"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","f43c2b312b68659e3e7aad0157fddd8a"],["/2020/02/09/Review/青春期超感應/index.html","66c113ff947f0eca7be5668840f0c780"],["/2020/02/15/Review/又做了，相同的夢/index.html","e2eb72f1aad14d30fe6ee2e983d4a744"],["/2020/02/22/Review/回憶當鋪/index.html","08817706e6d2822ca6ade1126996d360"],["/2020/03/22/Review/不適合自殺的季節/index.html","723c8392ea6167d2be98daad2ad14982"],["/2020/04/26/Review/我們都無法成為大人/index.html","c5d70fd8cca098fb1376421e01b3d15e"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","1e3fcc22da114f15702fb62e0025b1a5"],["/2020/05/17/Review/人間失格/index.html","43662de8213010188b4fada1656662fb"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","364bc3eeb85075ce723d01190ee71ad7"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","a0c73916fddbb06fcbcf7052071c9b33"],["/2020/08/01/Review/銀河鐵道之夜/index.html","a04d6b76278ef6029800b5e95af52a11"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","fbb20449db9ff37d6537e4728702d194"],["/2020/08/16/Review/15歲的恐怖分子/index.html","07292cac87618da4e1b8150ff343e568"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","306c6bc078362b20f76012905357a68b"],["/2020/09/13/Review/羅生門/index.html","7e36a6b3c36854da0fa261e463e231ad"],["/2020/09/20/Review/闇夜的怪物/index.html","e8c77ac3b263f61684cace94b7b7eeaf"],["/2020/09/27/Review/14歲，明日的課表/index.html","8268849debd91c1235dc987c749f8de0"],["/2020/10/04/Review/致十年後的你/index.html","e69409543b6056e4e4e843a999c99a3a"],["/2020/11/08/Review/滅絕之園/index.html","a1e988370c1fc7cf21bd1d52116be12d"],["/2020/11/15/Review/將愛拒於門外/index.html","e3667c00127f7576b2f4fffae5900a3d"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","1f7e1286f3958739696592a530f1453d"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","ee8f8d093e643d40a95584bbac2014e3"],["/2021/04/22/Review/道印/index.html","da92116f24be78fc22228a93815f9fae"],["/2021/05/03/Review/戀入膏肓/index.html","8bd13823fa2ed4d89a356bf753c75c10"],["/2021/05/10/Review/Dice/index.html","f028daa19e053b7b616cabd3302f1869"],["/2021/05/15/Review/魔女之旅/index.html","61b2f7498b11f629f6ca61a1cc241b32"],["/2021/05/28/Review/戀愛寄生蟲/index.html","7e67df0eacde7aaa253334c74b1727ce"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","7f02f95520b481b821ff8223207576bb"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","6e85d49610d25232dfe370ce6877bfbd"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","e22749ee52fa38ade72a8bf17a667eb0"],["/2021/06/05/Review/流浪的月/index.html","20a47211688637947460704526c0ca90"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","3e000e16d81ae463004970fb44980645"],["/2021/06/13/Review/第一人稱單數/index.html","8c4005152e9cbc991d0bf24122c8ed07"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","e60db5663090728dd9afda941b28cdbf"],["/2021/06/16/Review/願你幸福/index.html","25144797fbd4a6039be2b795bec94c39"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","d0de50f664446f9240b59f689e515efb"],["/2021/06/21/Review/神隱少女/index.html","c6d24e15d772fa8880b96f5423c44a4c"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","7b01bff2ad28952d1548757cb9d2fbcb"],["/2021/06/23/Review/天空之城/index.html","dabbf7c6f583e6de7391ed8b48a1d5be"],["/2021/06/24/Review/魔女宅急便/index.html","7df9be593b7747033548a268d85d25a2"],["/2021/06/25/Review/借物少女艾利緹/index.html","c0e8d4d63050ce32245bfc334ff0a05d"],["/2021/06/26/Review/魔法公主/index.html","4b166a68f6b28759449080a371e68976"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","a40dea366651c78d5f0abb9c8d007acd"],["/2021/07/04/Review/飛雪與劍/index.html","968e2244a3a651401f4352f643c107da"],["/2021/07/09/Review/地球防衛少年/index.html","2ed4037e3cb92097883ebbaef4f9a76b"],["/2021/07/12/Review/Angel Beats!/index.html","d004aa6ae6977ae00366dde539f175a0"],["/2021/07/13/Review/Clannad/index.html","674ff5085442375bad4b020f717cf997"],["/2021/07/15/Review/AIR/index.html","67fd67c01415520e15ae9f388c4ca640"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","e068c749e1632b33242c45cb2d05bda5"],["/2021/07/15/Review/螢火之森/index.html","a143923c00bd455b27cf19c78e411666"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","206a4fe4ebee45d6706d468ee93622a8"],["/2021/07/17/Review/奇蛋物語/index.html","1ac781bc7b7f14c6c2427324b4821776"],["/2021/07/18/Review/Vivy/index.html","8aa6f9247693c5bfe8b304ebf5ef2b18"],["/2021/07/18/Review/請妳消失吧/index.html","1e7d65bbed6a51b30aa2220c7b1ae887"],["/2021/07/19/Review/漣漪的夜晚/index.html","aa7a5b5adc6da2994f28b0227b588960"],["/2021/07/20/Review/月色真美/index.html","c680e9ce903a87a9f3897f776fcf43c4"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","f77d21be8b28b5465d99312c4ee33dd3"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","3701f04192077b8aa460342880aab710"],["/2021/07/22/Review/罪惡王冠/index.html","b0ee27e98c9e99e83bdce912e63e790f"],["/2021/07/23/Review/弱角友崎同學/index.html","b5aefcc858182c4d7f2aadf5ba88a4b9"],["/2021/07/23/Review/惡之教程/index.html","35b035847796722579a1c62f15505e8c"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","8455b4e9526f27577a720fd1f0b20c6b"],["/2021/07/25/Review/魔王勇者/index.html","87b2ca9de6efa8efa8b8cabea2daf623"],["/2021/07/27/Review/一年A班的怪物/index.html","d6a092a4f125e97da56c5c77f44852ee"],["/2021/07/27/Review/奇巧計程車/index.html","3aeb56e4aaeb6752de7d02c4ceb3a00b"],["/2021/07/27/Review/專情的碧池學妹/index.html","7829046b65e0b1869ecaf5a70c87a203"],["/2021/07/29/Review/只有我不存在的城市/index.html","c437e4c05cab6d7b6c889422f5913fec"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","71f9a46c965102c7661fbeb8693b9622"],["/2021/07/30/Review/可塑性記憶/index.html","774474b69c9c9b00a7dbbf50ffdc393e"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","6c11f644ec23bb76ff122725e4019e16"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","0de870716988a6ece2ff5ee698f9ab9a"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","4575cdda8804357af88bdf57ee2b93e8"],["/2021/08/25/Review/清戀/index.html","12407ea99532f351dfdd5abb6af87d43"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","989be1e1b28a8d7abff6461e188e5085"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f92361038e9f1e431f2063c8e4177ab9"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","2e47b4bc1ebac6f890336e52bd2d62c1"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","477ba4c2b2ca3d9859574127642bd55f"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","651aea1062681822b7d2a6aaeee4a7cc"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","58fe79c4e036c839bad84fc28f5db753"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","47071aae312da70a9c78884572a64b09"],["/2021/10/16/Review/龍與雀斑公主/index.html","8009feee940bed75704c1519c0e84d2c"],["/2021/10/19/Review/孤狼不想開後宮/index.html","5468242788e0c9bdd7897cdb165b6365"],["/2021/11/13/Review/徹夜之歌/index.html","bdb8c4960f2850413d30f09cdffaea6e"],["/2021/11/24/Review/武煉巔峰/index.html","698396d06eef0737ab3ba0682dbfbf18"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","16bca0a17e08242b2eb5a22e0b051226"],["/2022/01/28/Review/神醫凰后/index.html","60988de099cfcc9741ac18f8025c8226"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","9f85e245bb1ad1b7a7bd5f7a6f3e430b"],["/2022/02/13/Review/夏日幽靈/index.html","66e94e5c7ee689b01ba66512cf4bf52e"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e30ee7ea26b3a7b4f2f29c4ec0af96f7"],["/2022/02/26/Review/賽馬娘/index.html","5fd7dad161ac49101b27acb79abfb46f"],["/2022/02/27/Review/大欺詐師/index.html","60e2ddf8b41ecf53d969efec2a733ee0"],["/2022/02/28/Review/前輩有夠煩/index.html","7c16861283408fc058a28409077694e5"],["/2022/02/28/Review/碧藍之海/index.html","d7ad9ab3d12d73ce5c54ede2c998fcfd"],["/2022/03/05/Review/落第騎士英雄譚/index.html","fb627b96464491fd02b0deb70569eb1f"],["/2022/03/06/Review/Another/index.html","8cac7680c865272f53f1e5883890d7e4"],["/2022/03/06/Review/入間同學入魔了/index.html","0b2df53f1c4b266df9061be28981960b"],["/2022/03/18/Review/再見宣言/index.html","0073e88175fee070fad49a14f5d77df2"],["/2022/03/23/Review/生若冬花的妳/index.html","cf42e4062e3cacf5f54f51d87d777a4a"],["/2022/03/25/Review/天之弱/index.html","7aabb5f3ada472dc89fa09714a9b6f77"],["/2022/03/31/Review/滅了天道之後轉生/index.html","388cf246880efa34923553cf5b4c15f3"],["/2022/04/30/Review/泡泡/index.html","a3f69d187133a32065d5a2aed1f99f69"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","c4eb590cd583eb0ce2128730db4172da"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","8eecbc6f13acf37d6f76afe8751a48f5"],["/2022/06/13/Review/偵探已經，死了/index.html","2f55c908c9f91808bdcf47ad5f2fc729"],["/2022/06/14/Review/黑色子彈/index.html","e0c0ee4096ac8315b9279b0a41b97f80"],["/2022/06/15/Review/黑白來看守所/index.html","f918c5bc2cd99d956ece05c3a4e6cd35"],["/2022/06/16/Review/虛構推理/index.html","4dee7bd9dbd115ed1043ebea0c17a322"],["/2022/06/17/Review/戀愛與謊言/index.html","a8845d221da7c8c48e2198cced42c1d1"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","65029d52c0f0a2fb90d754ff39144def"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","54cc97111de6b3aeb4b030ea41f8d6fe"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","bbbea72d1ac0972670278533a3bd675c"],["/2022/07/03/Review/Hello World/index.html","2c6d3fe3860bd77f713904ea707d253f"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","727c75909bef16d3198649bf0c4dc85e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","026720260edd06537e6823a6a349d7cd"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","f36f89b6012f98442c9404f7bbc2d740"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","a644ac566d5b56fd40accbb98ad90a47"],["/2022/07/16/Japanese/動詞分類/index.html","97dfdcf687088dd77c3858d2c075e91e"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","d1fad142272cbe88574dd79568900880"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","ed9d56001c2ef9361b735273f5cefed0"],["/2022/07/17/Japanese/音便/index.html","119f8e4e83d6d88d0e17e4f0c9791d17"],["/2022/07/18/Japanese/動詞 時態變化/index.html","defbd3c38bc17c63e11400ccf949e060"],["/2022/07/19/Japanese/助詞用法整理1/index.html","b47760af10f896ab7ced02c4b1b718f6"],["/2022/07/26/Japanese/助詞用法整理2/index.html","69a5a2f758081f64a47e5114bcf0c7d2"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","da701bc60bfe2e9471f6d064db1cd26b"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","19e3efdb34dd93cb37d6254e2e6e14cf"],["/2022/07/30/Japanese/疑問詞/index.html","55e27e8e5d0c0fa40b94ea97ec8be23a"],["/2022/07/31/Japanese/助詞用法整理3/index.html","07c0d2b000333bd11de08c9211a5688b"],["/2022/08/02/Japanese/副詞整理/index.html","de6e05e974209d86e97fd5e8e24ccd86"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","1540134f9b541f94889079197d5d8bb5"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","d0b046cee6d14839d5a7749966085c7f"],["/2022/11/22/Review/組長女兒與保姆/index.html","1302f0df586477b8bbe489677d6db992"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","6f2673e84a940b2e52d74101e7485635"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","63577dbb5db8db658a9f5b2f12fb2f81"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","b4dd95ffbbe47f0f22c7661bac2ed1e2"],["/404.html","c383a695fa9f30eae1747051c0919d13"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","1b979aa995b2fe3c4755951a34b3de51"],["/archives/2019/11/index.html","a9518c7ab40740783d8d6cd78e8d77f8"],["/archives/2019/12/index.html","ac661a4cbf64da5dedf52d97f48a3054"],["/archives/2019/index.html","095506a325b8734a4b90067dc8fcfa0f"],["/archives/2020/01/index.html","468c02a58a1e6ab6c75c120e45a24629"],["/archives/2020/02/index.html","4286815d4b82df5db5134de4a1a2088a"],["/archives/2020/03/index.html","d5000b2bc23ddb2789121aebd2d9c9af"],["/archives/2020/04/index.html","dd0eb752d6f0e4c372e9121220cfa4c0"],["/archives/2020/05/index.html","b7a34c55169b877bd3c8d9e2181d13c5"],["/archives/2020/07/index.html","8ffe6b466f02a0719daaab5fccf645e3"],["/archives/2020/08/index.html","59027aa9ef175505b4261c54304c6c9e"],["/archives/2020/09/index.html","48dc10ecc1df513f492a5295c595409e"],["/archives/2020/10/index.html","8108ee81280aa7d8403e350ac20d814a"],["/archives/2020/11/index.html","a7da778f35ad14bdb381079816bff607"],["/archives/2020/12/index.html","b4b9d77a6ba236badc4483bd45985f2a"],["/archives/2020/index.html","b98786b21432ce9a88ab279d8bd9458c"],["/archives/2020/page/2/index.html","f75f1d8c896a22dd8293b8cd95eefafd"],["/archives/2020/page/3/index.html","e8d4c33e865cf237c5bcf386574987a4"],["/archives/2021/04/index.html","32396d6a1b7e15f20232160a6976669d"],["/archives/2021/05/index.html","a2b0b4a523fe2a45fc4691d5594f3cc4"],["/archives/2021/06/index.html","eeb3e4928141ef46f341c7cbd0b4cfd3"],["/archives/2021/06/page/2/index.html","c798d4c5821f9f4e499f08c3d61170fe"],["/archives/2021/07/index.html","ca6666aa7ddf53bc38899158f078fe26"],["/archives/2021/07/page/2/index.html","8ac14823b0f2a672ed4b6733738c08d9"],["/archives/2021/07/page/3/index.html","e7a36399dccdbb521f1229d644caae2d"],["/archives/2021/08/index.html","e4744e083f82b69a6db353439819aa15"],["/archives/2021/09/index.html","11fbd4dd3532dbdc5a56b3dc62ecefcd"],["/archives/2021/10/index.html","059209786946740fa37d5778ce128411"],["/archives/2021/11/index.html","95715a751451db557f4a94f8f3609e3f"],["/archives/2021/12/index.html","9fe15fa4b303b4f155263c5b248958ac"],["/archives/2021/index.html","fd590c80b4620be3ccbcb40e44a0edca"],["/archives/2021/page/2/index.html","c064d782dcb85333b102df85f8972b3e"],["/archives/2021/page/3/index.html","503fe938494191d1d5c0a7111b7df0de"],["/archives/2021/page/4/index.html","ca3d4f719a62cd6dbec71f32ab87e087"],["/archives/2021/page/5/index.html","8253867006f8607327d8c09099d5bcf3"],["/archives/2021/page/6/index.html","665cfb3cf50b703a85e6a76299fbecf9"],["/archives/2021/page/7/index.html","25bed47432f01106fd18e7ed3379f0cd"],["/archives/2022/01/index.html","c2f0c9531345f5f7f60d107dffd6d559"],["/archives/2022/02/index.html","fe88209212c585d47bec61b75070bf7b"],["/archives/2022/03/index.html","4284a3ed55b018ed745b76b6796da66d"],["/archives/2022/04/index.html","8e1f13dc2aac048dda4cc9965c75132e"],["/archives/2022/05/index.html","fde143dec3cfad7dca1ab1cace56697f"],["/archives/2022/06/index.html","6e33031b3cf59262a7eb08c196f11911"],["/archives/2022/07/index.html","354cd6640a0f46e5d899db3fa67e305a"],["/archives/2022/07/page/2/index.html","435a4172013d0366782c3702ac0556cb"],["/archives/2022/08/index.html","901072020acfe07f738254c3e962dd90"],["/archives/2022/11/index.html","4a0d83c004e794b27034ff54f9099cca"],["/archives/2022/12/index.html","12d9c39ddb26a7587bc03352f1849948"],["/archives/2022/index.html","c7fc2d431f3fa94622a0779030be93e5"],["/archives/2022/page/2/index.html","b46587f3ef72ed4e1b24a449f8ec279a"],["/archives/2022/page/3/index.html","c4e171f905fe9f3c3bc77231b49bf7fe"],["/archives/2022/page/4/index.html","49b59dbe31fd0fe513cabd0af8aeb677"],["/archives/2022/page/5/index.html","e133c81e86aacb4780cc6b6e413a1562"],["/archives/index.html","5411ba4b09c1cf579b1dd329461dfe56"],["/archives/page/10/index.html","7b2c7a6a7896e403b3602150a8043110"],["/archives/page/11/index.html","2ed7950ebfd2ebcb6a77de83c8b2ec7b"],["/archives/page/12/index.html","ab98a4345d5a801ddbe4da54b729bbca"],["/archives/page/13/index.html","078c92ce2fc6d68dcf43fad4d0c2ff00"],["/archives/page/14/index.html","358a2d9edfc061d320dd22ea738e050d"],["/archives/page/15/index.html","03b82a38788eff2ac163d036baf1d0b0"],["/archives/page/2/index.html","d8fb1d3088715d30c8b598877b5ec3d6"],["/archives/page/3/index.html","bd3c1d44f30457bf7571cfb67e35788f"],["/archives/page/4/index.html","5f298c659d8ae5841d190148bffdbd10"],["/archives/page/5/index.html","965d47fc12b2e9d67a779bb093d93783"],["/archives/page/6/index.html","b47564690fdb146f89c378023b3798d9"],["/archives/page/7/index.html","2323ac8bcdafc5fbfe7330d2fea9683d"],["/archives/page/8/index.html","f02314954f1654bb9dface8b8d1adbed"],["/archives/page/9/index.html","af9df41917e7af59bac5951c27bb97cf"],["/categories/Algorithm/index.html","fe997dcdadf94411ce4bc2434b87491a"],["/categories/Review/index.html","4251d48d8f591f3d29c9c0e870f1d149"],["/categories/Review/page/10/index.html","e9bc33e516a48d6371fefd2438acde20"],["/categories/Review/page/11/index.html","daf1acca08e1541524b722542bd63821"],["/categories/Review/page/12/index.html","40cdc34fa15528bb45338716e2981b1b"],["/categories/Review/page/13/index.html","6c875c75d3bff074b994ff2f21a31e01"],["/categories/Review/page/2/index.html","c74a0679c7d5cb08ba096d885c7fd412"],["/categories/Review/page/3/index.html","bb3605f001ee6f010834613f9f176347"],["/categories/Review/page/4/index.html","62cde81b6de0a52c6848b8ff8f130f17"],["/categories/Review/page/5/index.html","7c5e2f05afd5a9ad27c6730fff337297"],["/categories/Review/page/6/index.html","4e7330f5b789752758c4e588fbba3c25"],["/categories/Review/page/7/index.html","e30831a0c669439935d9f2fbaa8dc951"],["/categories/Review/page/8/index.html","a4a3b59385d5ef79c5860276f76bfec3"],["/categories/Review/page/9/index.html","d8021d972ef1679b64f8b1a13772e2e9"],["/categories/index.html","ef9f501c18b9adac5f504ab1635b4477"],["/categories/日本語/index.html","734ab77d63b89408ce6382f0dded5903"],["/categories/日本語/page/2/index.html","5976a85f7b65f0df5139f6de98ba8489"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fbdf0b82bf707d110cec540b82ab92f3"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","175e214862f8a425261b62f22b75bb76"],["/page/10/index.html","3925093b5d5591728a2b00c337c35813"],["/page/11/index.html","379922febe0f8bd9d7a1a6568c3b3c43"],["/page/12/index.html","908f5015631c8b5f34773caae76dbe9a"],["/page/13/index.html","5c4e90886bb26faf19c01527f4fffbed"],["/page/14/index.html","e2d0e48aba8cab7eba4572990556c8fd"],["/page/15/index.html","7f276822c77a75e76577b09009201a44"],["/page/2/index.html","3a15d347af5ffddef2a263f4d4d016b7"],["/page/3/index.html","0e64162705a00899c18b9c90c624246a"],["/page/4/index.html","129ec3962f70fd0cb080fa143ffbb247"],["/page/5/index.html","2225c6b9fa98f25e5f60f536de0be14e"],["/page/6/index.html","bf3cdd1651400c6ae65a1b9febec5331"],["/page/7/index.html","7dd092b6b1da3615aed508aa066a498f"],["/page/8/index.html","83f7259b0a2ca140d7b9dadd76c7bd61"],["/page/9/index.html","8952481062ef421180424c6c85ae3d81"],["/sw-register.js","0ed083ea4e54bad5457865526c0a4164"],["/tags/10分作品/index.html","89b806ae2eb76842ec3970648f76fa93"],["/tags/3分作品/index.html","f09d1e3844c643d93079e12f546d2e8f"],["/tags/4分作品/index.html","721fda015e64bfc8dab9ebc96393674a"],["/tags/5分作品/index.html","ae7eedc12b0cd07d801e27025ef1649d"],["/tags/6分作品/index.html","54d7531a2625873609bfa0c9ba2c2d67"],["/tags/6分作品/page/2/index.html","1e444338439b071494cd59782773adcc"],["/tags/6分作品/page/3/index.html","e2a79f415d8a415c0a37ba1b2f1cafe7"],["/tags/7分作品/index.html","e5529cdb6e799b5b7eb2ab068fe26b6a"],["/tags/7分作品/page/2/index.html","169225772803d01c673d01e814b96617"],["/tags/7分作品/page/3/index.html","81a4bf9576468d3539341da5b89ef740"],["/tags/7分作品/page/4/index.html","daecaad9828800b509eeaf928ce3b2e9"],["/tags/8分作品/index.html","761f9e9dd5e260fcf2e9ba6c9eacbff0"],["/tags/8分作品/page/2/index.html","27981e974920f591035393e255d1cb45"],["/tags/8分作品/page/3/index.html","07c9c09193b972f79df2f70feca8a160"],["/tags/8分作品/page/4/index.html","0fe9dbf41abe19cc2c8c9e434224b076"],["/tags/8分作品/page/5/index.html","2055c8c56c07b351cd2db6b52baad5d1"],["/tags/9分作品/index.html","fb218382b6dd4033ff26c86e6d7e3321"],["/tags/N5難度/index.html","53468cb7add68351c67a9ca1b85f83d9"],["/tags/N5難度/page/2/index.html","3064e49f2aac56213c9f906f99a3a832"],["/tags/index.html","1bdbb776b32ddc7724e5d07c64f28d8e"],["/tags/アボガド６/index.html","73d259b98173ca111a9e362515fab5a5"],["/tags/三秋縋/index.html","1b5a9d7ec2e670af32209bd807635cba"],["/tags/中國武俠/index.html","24ffae26a6c97d8f57271f2e7dcc636b"],["/tags/中國言情/index.html","bf1f9b31dd92ce396a8eb2b763a97f70"],["/tags/二宮敦人/index.html","abb10f721390072a9753ff4fdb8c3303"],["/tags/人性/index.html","fcb1ba9046a9e37beb32ee22798a4106"],["/tags/人際/index.html","c833e0c0c00b2ecf710ddbd339f38ca9"],["/tags/住野夜/index.html","0b856ac92f1b7d1f4303d9e50604c3a2"],["/tags/佐野徹夜/index.html","068765e036a08062f65b2d1f4ea8bdd2"],["/tags/努力/index.html","1461b58067cb588e555480ade2535546"],["/tags/動畫/index.html","a820a8f4e8ef3b85ba1e82092bc0eeb7"],["/tags/動畫/page/2/index.html","592a54c944bc0ed7bceaeeaea2b52940"],["/tags/動畫/page/3/index.html","66bacbac246df97a2a823cef36912bc0"],["/tags/動畫/page/4/index.html","5f3820295c7c961b2b908216ea4e7740"],["/tags/原諒/index.html","24c3e59a8c72ae0ddac4d47b77a09237"],["/tags/反烏托邦/index.html","a72110e48b1c2adb32b794b0beda7097"],["/tags/啞鳴/index.html","8d4f9c0d08b697eb0fd221cbbdc70554"],["/tags/喜劇/index.html","2ba82288917ae4ff586ed40cf3620219"],["/tags/夢想/index.html","6661a60877ab50c69f04218f4c5b5415"],["/tags/天澤夏月/index.html","80fafbd804da1467825f8345795c83f2"],["/tags/學習/index.html","85e11dc482f5aac31c448023d9fce18e"],["/tags/學習/page/2/index.html","1b1df2d7a0bacaa6238576f3602ba575"],["/tags/宮崎駿/index.html","ed708a22be71f1d31cee38beeca43ab8"],["/tags/小說/index.html","fb70da4fb8f1f9a23d815f66f1e3704d"],["/tags/小說/page/2/index.html","2e506d3cbd95625b35ba6d0d73c3a91e"],["/tags/小說/page/3/index.html","7a1a176e1926ddc784e65502c80ea125"],["/tags/小說/page/4/index.html","122cde5950979ed4350af24537f23cef"],["/tags/小說/page/5/index.html","f0738f7047b86c71f85fc7f46dc6035e"],["/tags/小說/page/6/index.html","ef4480fceec1234c36056908adf24e6b"],["/tags/小說/page/7/index.html","666d2e0553851fc6e9d0e0854054f69a"],["/tags/平淡生活/index.html","c6869f303c5444c85526d794d61316a7"],["/tags/幸福/index.html","f25127f969b8364f3f1e3ecf086327a0"],["/tags/志茂文彥/index.html","33ae3a1df4388e48ffa63b718a810366"],["/tags/愛情/index.html","07f2ddccc2c04b55bd287e4297ca0e19"],["/tags/愛情/page/2/index.html","08dbf08b89679322b76da1721fa23a24"],["/tags/愛情/page/3/index.html","7450d317ea1771da4b95e95dceaf86f7"],["/tags/感動/index.html","0006c8329b183e3cf8d871d41bf92800"],["/tags/懸疑/index.html","41f2e2d61468d45a1daf7a91a3d0bbfb"],["/tags/懸疑科幻/index.html","eadcd6ef400ffd338028a1bead9b3777"],["/tags/戀愛/index.html","952ae3d38099b8fa0c7330a5c0c24a2c"],["/tags/成長/index.html","fbdae2717e5deb72c2e9635fbf606f56"],["/tags/成長/page/2/index.html","9da2c76c27572c4339e7eeb029296fd5"],["/tags/戰爭/index.html","c95ce9ab945e37b34705a798143ceec8"],["/tags/推理/index.html","a1faa4ed7098dae4f98842e7eb461cb3"],["/tags/搞笑/index.html","18a0a73da0b3345402a26d7f146a777f"],["/tags/救贖/index.html","a7ea8e310bf38fe466e4c87b262c5c6c"],["/tags/斜線堂有紀/index.html","e3d009283529b643e7d90d1f66de1ac5"],["/tags/日常/index.html","c148b110b162165e2a1c7044dcbd20ea"],["/tags/末日/index.html","069ba6e7c741be1b7a51beceb58d3935"],["/tags/校園/index.html","04cff1ad6307ef0898974ede5e515821"],["/tags/武俠/index.html","f71a493e35557bb6a23a05ac47f41095"],["/tags/武俠言情/index.html","dd071a7875e9f30c74e5f672d1ba2f36"],["/tags/漫畫/index.html","6e04cd496d31e905228083be7bf5e475"],["/tags/生命/index.html","ce0211ed96a59fb12aa3c0c141494255"],["/tags/生命/page/2/index.html","46b7764c2b01013de6952a67cc70ed91"],["/tags/短篇/index.html","cc847325ac7e2897afa3d98546bb4d8d"],["/tags/社會/index.html","8bc1dbbc61cb83fc9b1e0707db694cea"],["/tags/科幻/index.html","115884d0d73befede9e0904bbd7fd4cd"],["/tags/童話/index.html","81ce2aa4c4f81f3fe6576d06d3b5c844"],["/tags/競爭/index.html","d8411429cd683016fcd64dc36c86c3c2"],["/tags/自我/index.html","ef85cefc07ca355c54596529894199cf"],["/tags/自我認知/index.html","62e851443613511ae9ab4d17e0f8cae6"],["/tags/葦舟ナツ/index.html","62c5fdcbd58154762be151cbf1c10bcd"],["/tags/藤萬留/index.html","746d2ab1afebe39010911de461e87432"],["/tags/親情/index.html","3ea95ea187a4ece60cd16e57525c6ef1"],["/tags/雜項/index.html","24684d569558de2a94d60068ebab0840"],["/tags/電影/index.html","eff01766be57def947d790c16978d972"],["/tags/電影/page/2/index.html","fb9f8da3bc4660fb7d0b340857ae2561"],["/tags/霸凌/index.html","d4c271fd6de81ad78c8f64b493ad364f"],["/tags/青春/index.html","39705ec07560109a717fd77846c24e81"]];
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
