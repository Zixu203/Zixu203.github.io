/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","898e105d235cd214f4af6fed10a00a2b"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","b626be22771739456bc2a4ee8b81c254"],["/2019/12/25/Review/無法計算的青春/index.html","8dcc69d8acac8715b4d8b8b07fa6aa16"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","f099f7cdf69c83fd4b1a77d562b9c8aa"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","f4985dc283c2483275bc3eb1aeb9af8b"],["/2020/01/19/Review/下雨天，不上學/index.html","baa493012e7c60a3f248fe42abeb1df2"],["/2020/01/26/Review/三日間的幸福/index.html","209cb796d310a42fa7b0163bedd701c1"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","53d74baa763e6ae4c5ce2ece135e562a"],["/2020/02/09/Review/青春期超感應/index.html","61fc183b9a21c5b45e79bbfcc9d9bd9f"],["/2020/02/15/Review/又做了，相同的夢/index.html","103709563567aaca30d3c1fd61614961"],["/2020/02/22/Review/回憶當鋪/index.html","6e6a63588e61545424b317577749dd06"],["/2020/03/22/Review/不適合自殺的季節/index.html","b1453f3c2b1dd6e1eb7a27a46f779033"],["/2020/04/26/Review/我們都無法成為大人/index.html","e2de199b6c21b65a11cb64b2ecd960f3"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","89244c98c22a02983e88f21cb6f5337d"],["/2020/05/17/Review/人間失格/index.html","c24f48b7e0222a65e5de89b4dc8eeeff"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","8d3985170163793d70db390abe62732b"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","a0e44447dd5bc039f74d6e931fbdc125"],["/2020/08/01/Review/銀河鐵道之夜/index.html","f13224c18924ec26cf12f6d4178f4fcc"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","a7e0d5dcc968fb9e6a644fac1cacb57b"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d3f89ca0b7a2c812654843689e516fd8"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","af0d65bffc48943f71d2a47a2be1670a"],["/2020/09/13/Review/羅生門/index.html","c921d399c783a63ccd996b73e895eb41"],["/2020/09/20/Review/闇夜的怪物/index.html","9d3a72346662465a0d59f997193d25ec"],["/2020/09/27/Review/14歲，明日的課表/index.html","55bdb13bda6e76d3a0353976635275fa"],["/2020/10/04/Review/致十年後的你/index.html","ab6301450b381b451215e6d01bb5f7ea"],["/2020/11/08/Review/滅絕之園/index.html","0ad3c7d6cdb76fd07a7b26d900c71f4b"],["/2020/11/15/Review/將愛拒於門外/index.html","3440684c3501e1da2c7e67148825e25a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","2db0baadd0fcdb659ec6fca1156caadb"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","1daf1fa22ebac49ae09fd732af0c3d9a"],["/2021/04/22/Review/道印/index.html","198b91eadf4a8e272344c0eb46e124a8"],["/2021/05/03/Review/戀入膏肓/index.html","ba9fc9cff369d9960225720dea269f3c"],["/2021/05/10/Review/Dice/index.html","05f58393c9722de61ac5759a3e55d5ac"],["/2021/05/15/Review/魔女之旅/index.html","9005335d6c9bfc28991313dede0e9384"],["/2021/05/28/Review/戀愛寄生蟲/index.html","5baa3ad6b943d72026cf3242d450f79a"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","20cabb2dc5219e8eb17126e64413510a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3eed01c15b2c9d754b77b2204b2e54a8"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","a5454f767606eb1c884beeb87d5379f3"],["/2021/06/05/Review/流浪的月/index.html","0db0b6aff00716bbce017f0ce91db55c"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","43ea58ba9d00907f9340b8817d266f4e"],["/2021/06/13/Review/第一人稱單數/index.html","640449ccfb978110578f0eda5760c3a7"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","727579e430e9c6d712024bfd5688c1a7"],["/2021/06/16/Review/願你幸福/index.html","c8d6b1383a1516700012c0f29d9aa7de"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","5ad1f7b6b4f744404ada2cae68a48049"],["/2021/06/21/Review/神隱少女/index.html","10d77f3a5789550f39675cf936c0674c"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","ec334182df27feabcba73dc2e1fb7b01"],["/2021/06/23/Review/天空之城/index.html","1535b65fb227db9867778886a0f39f52"],["/2021/06/24/Review/魔女宅急便/index.html","16ec748abbb64d385cef7bb259b14885"],["/2021/06/25/Review/借物少女艾利緹/index.html","4e1d2a7cbe9c0cc78f832df70beffe14"],["/2021/06/26/Review/魔法公主/index.html","7292732bab738b323cfc46d7774aa387"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","7d066a01da2741f9621ce71fd051a649"],["/2021/07/04/Review/飛雪與劍/index.html","6113d8c047d454ef1edfcfc1aa6046db"],["/2021/07/09/Review/地球防衛少年/index.html","658aa6a835958c383ae35e0d53b429b5"],["/2021/07/12/Review/Angel Beats!/index.html","11fdf819352d1f97c65866207f9f2ed7"],["/2021/07/13/Review/Clannad/index.html","104b429df45764686398495418b6cf1f"],["/2021/07/15/Review/AIR/index.html","9ec52aee37dc3f749138883a814faafb"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d674ec5a297909e8215e1974e5935d3f"],["/2021/07/15/Review/螢火之森/index.html","402639ba5023ad31c00c05444f3e279b"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","01b406b29388f6413236349b16f7f498"],["/2021/07/17/Review/奇蛋物語/index.html","f201956ccdcd1feddf87f08fc64dfdb0"],["/2021/07/18/Review/Vivy/index.html","ab15d420b8f0bfacf0a554b6d126f5e6"],["/2021/07/18/Review/請妳消失吧/index.html","40d50b400e0750fdba2033a72c8a8c4b"],["/2021/07/19/Review/漣漪的夜晚/index.html","cb7c01002716dca9d3d387c296eb9995"],["/2021/07/20/Review/月色真美/index.html","d4523ccb626b08eaeae26e8010c1af97"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","0a5b7c94691594941c914e440693d12d"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","6d2dcb461d4f6a1221c9ecdeae16907a"],["/2021/07/22/Review/罪惡王冠/index.html","6c04d64c3a379a074df3045c74c45788"],["/2021/07/23/Review/弱角友崎同學/index.html","efb421b112743fba94b764df22883074"],["/2021/07/23/Review/惡之教程/index.html","fd3778f95a279ffa900b54fe41ca0d39"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","f7933e794f5d342121f32d4d5ff042a6"],["/2021/07/25/Review/魔王勇者/index.html","fa9ec6415254182edd1e581ff8223303"],["/2021/07/27/Review/一年A班的怪物/index.html","6fe41dd959fde60c8f124b8e5129d0b6"],["/2021/07/27/Review/奇巧計程車/index.html","f933c022b62371c4e44537411e605455"],["/2021/07/27/Review/專情的碧池學妹/index.html","fbee852ce76c853cad30146961f286d0"],["/2021/07/29/Review/只有我不存在的城市/index.html","c18090509226d09ee3fc5fa14c19a2cc"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","d097578a146994eab245f7ead53f8bb3"],["/2021/07/30/Review/可塑性記憶/index.html","fc5abe96a7e4b0d53bfffd1878da8eff"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","0607a1ce6269e0630ebc9d2d32a5e79c"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","3fa1c64e30e5a4a7a7109c7dcae98d66"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","d4427400865e631ba41eb892619e1bc5"],["/2021/08/25/Review/清戀/index.html","f704c426a740a5b87a52ee38d3ad27c2"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","1dca90ef08b75e24e70486d5379b9c6c"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","39f322c4387f8e7334ebc96becab8974"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","8edd72f642f35793abe85fc71c2e8782"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","10a65d0df6bd0d5c4e1a1c5872b8bcb0"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","3fa527c696da59e863e7ec80fa0e4864"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","61d9d02699f7b139a2df67aef81e2022"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","cffde2dd0c456fde38d81f5a940dbc16"],["/2021/10/16/Review/龍與雀斑公主/index.html","efc94a17b9f49e058f259cd876f5afe5"],["/2021/10/19/Review/孤狼不想開後宮/index.html","3dd03fc1d6d8f3224de4c68423c73583"],["/2021/11/13/Review/徹夜之歌/index.html","fa731fdbb629f51c9e8fac8aaf32d4a8"],["/2021/11/24/Review/武煉巔峰/index.html","0464e7efcf0db2a27e499a9ea16d1086"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","63f2486d4c31b69d6fc3ea59a175de2e"],["/2022/01/28/Review/神醫凰后/index.html","9347463019bd807054b1c3c2977b8721"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","fb76b08ea47a92727dea2ae35767c429"],["/2022/02/13/Review/夏日幽靈/index.html","143687fa8910ffffd554a7cffba608d9"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","03e006355bfaa8d57025efdc2e562f86"],["/2022/02/26/Review/賽馬娘/index.html","8f55fede54df3315549ef8e52c6f745d"],["/2022/02/27/Review/大欺詐師/index.html","011709793aca052503f5f7813d0fe5ed"],["/2022/02/28/Review/前輩有夠煩/index.html","ef90e0f76c78cd4d210aa0a2b2654696"],["/2022/02/28/Review/碧藍之海/index.html","d83229540772ab117ff0a48aac1c8a66"],["/2022/03/05/Review/落第騎士英雄譚/index.html","956bc57c437c99d01adac4aa03d7b8ab"],["/2022/03/06/Review/Another/index.html","9ba39f7cb3a4c30f3c921bed51e77fad"],["/2022/03/06/Review/入間同學入魔了/index.html","ce9b16a0094bd299a36d64b59712d001"],["/2022/03/18/Review/再見宣言/index.html","2a938076523ffaa48032137c415c4c29"],["/2022/03/23/Review/生若冬花的妳/index.html","7a596882036beb94c6ba362ce5a2b73d"],["/2022/03/25/Review/天之弱/index.html","ff0ce63b53b101a0c5498bb892c4ae4d"],["/2022/03/31/Review/滅了天道之後轉生/index.html","802df547e1b28f8d62b23cfe6e1d8762"],["/2022/04/30/Review/泡泡/index.html","b64c914b75683dea70f3ae71962182fd"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","45875d81f1d7635ead5ecb0843d1ed5f"],["/2022/06/13/Review/偵探已經，死了/index.html","ed2e9ae82304ad3e424ac6f665600501"],["/2022/06/14/Review/黑色子彈/index.html","2c660d4b634b2602e48941f523c8491c"],["/2022/06/15/Review/黑白來看守所/index.html","8bf7a5806cd799fd7b2f0bce5807bbec"],["/2022/06/16/Review/虛構推理/index.html","0634250c76aa959835bbc1594b61068f"],["/2022/06/17/Review/戀愛與謊言/index.html","86c3e4a1e28b99b619d6e2c4f136bcde"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","83153802e277d4bc4d4a5f1505b5674f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","1453ed9cda26ecd8f3857c00b4c42d6e"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ec6c838140a56e65952551cd5a182ca9"],["/2022/07/03/Review/Hello World/index.html","178d22faa6a0a5c55ba01065cb910ac3"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","115eebdf60103b2277a2db6f2eb046c7"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","9c86d7feee29ec961ea3dcb579f12332"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","53ddb7ff7efc0ca938679544ff32d8e0"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c4fdc608be5689e6dd9a81f60c797e6b"],["/2022/07/16/Japanese/動詞分類/index.html","d79cae60e2cb63d8e8e7119f4f171afa"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","7c39b165185baecfc2b7f39828f874a2"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","b28ccb8ab8f30ceb3c151eea7571550c"],["/2022/07/17/Japanese/音便/index.html","cd4ba93b4e0857762d9f8a3a615409e7"],["/2022/07/18/Japanese/動詞 時態變化/index.html","8cc28d77f4beee71458882f014fd306b"],["/2022/07/19/Japanese/助詞用法整理1/index.html","da9812b50ba76ae7dc788a1bb46a0dd4"],["/2022/07/26/Japanese/助詞用法整理2/index.html","8fccdf81e9d8e6dbb4bc8175f21ee1a8"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","0fe0ed5ad1031c55dad9341acfdf06d7"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","62eb211083001a0d4a546e3fbaab2df9"],["/2022/07/30/Japanese/疑問詞/index.html","db3122d818ce80862eb3345eed76b5a1"],["/2022/07/31/Japanese/助詞用法整理3/index.html","96f4dc46a101544e83429b50f82cc001"],["/2022/08/02/Japanese/副詞整理/index.html","83baac1ca183c430a22e6c6ab5b422ea"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","4556403b46c72992770fc51f004a56df"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","e661d920a890cb1f89e077279545539f"],["/2022/11/22/Review/組長女兒與保姆/index.html","2e4a8b9b04491f061fc641eced26f5ce"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","6b4329ac3c70b491fea1077d2ac79fc4"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","a4896331ae28a17e16268c07b29bd4ab"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","b86a23ad8b12d3fd264cd541059ba865"],["/404.html","bd481ea5c03fce3bfef77c5d144aaf5d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","c80df1fe918df37f754bf0d84736818d"],["/archives/2019/11/index.html","507287a26499c1178201fa3fb7f701cb"],["/archives/2019/12/index.html","b5cf9512dbfa668bdb5e97ad31243d68"],["/archives/2019/index.html","bf33eaf61b19b813691e6c3a5a8b06f8"],["/archives/2020/01/index.html","4354974ef6dc7a703479cb27152191cf"],["/archives/2020/02/index.html","39d5b21735827fda1cb9f62780d8a515"],["/archives/2020/03/index.html","dfe7bceacc107f5934ddee161233abe6"],["/archives/2020/04/index.html","f47153bdb71e9806aa6658b089369b53"],["/archives/2020/05/index.html","5b25f8184272fa34c68d842b5b0ed84d"],["/archives/2020/07/index.html","ea5590518dd85f8fed381a8b9504cbc2"],["/archives/2020/08/index.html","45e3a4d6f3478058262d6ac91094d60f"],["/archives/2020/09/index.html","2957fd33ee9921bab8669dfe6dc663cc"],["/archives/2020/10/index.html","ee77f9745113ed47def62c23ac83e0f1"],["/archives/2020/11/index.html","37808bb800f515a06a55f9a05aff00e8"],["/archives/2020/12/index.html","c761f0768c17004933e859d0326eb335"],["/archives/2020/index.html","9e3708283f9215fa51de75c6313ba843"],["/archives/2020/page/2/index.html","eebbbf405debd03f13cb59a12a2fa586"],["/archives/2020/page/3/index.html","f536cc66ae75598256571aa8f5743b7b"],["/archives/2021/04/index.html","f2a40afc409da8035b96e6712636323c"],["/archives/2021/05/index.html","8e643027c09bf0ca84faa5b14d32f132"],["/archives/2021/06/index.html","e2f751d98490faddb63626529e6a03b2"],["/archives/2021/06/page/2/index.html","0a286391f2ea097a3ba3661f3f48cfe0"],["/archives/2021/07/index.html","7937e2dec143420295b01105b9541793"],["/archives/2021/07/page/2/index.html","b9e342d51f74a5f77e3c54cbb6ffeb4b"],["/archives/2021/07/page/3/index.html","5206cdbe0829b038dca207e0bc027a10"],["/archives/2021/08/index.html","bd826849a56bfe2e2f4c6c620871f812"],["/archives/2021/09/index.html","15b6f447b7534f4457cbfefa1a741bf6"],["/archives/2021/10/index.html","c11a41ee2f410d707e6dac6903305bc2"],["/archives/2021/11/index.html","d73e7f5e7be51a697ed363501d1e1e75"],["/archives/2021/12/index.html","736ee6f9dfad2c76213574d143f2568b"],["/archives/2021/index.html","119d5133147d4821f678169c9edf1e2b"],["/archives/2021/page/2/index.html","1e11fd9db89672fd326435656579ca89"],["/archives/2021/page/3/index.html","4eb98caccf1132f47fb8ebd1a77c25bf"],["/archives/2021/page/4/index.html","9be79f000fb289ea0fc3def2e8924e46"],["/archives/2021/page/5/index.html","fc8203aa9efab6d42b96d0560811714c"],["/archives/2021/page/6/index.html","b6adbbdfb102db7da3f03edafabd7569"],["/archives/2021/page/7/index.html","3ce3185ef09b1d862124e5c1ecd439af"],["/archives/2022/01/index.html","670f9b0f5146091c99eabdc982bda83a"],["/archives/2022/02/index.html","66d77ddde6497af0378f23904595b5d4"],["/archives/2022/03/index.html","12d56f4992379580877f449fd7ac465c"],["/archives/2022/04/index.html","bd2177cedb39f933ffedd9f8174f4967"],["/archives/2022/05/index.html","b1657ef830ceb398c9c4785847153e37"],["/archives/2022/06/index.html","0c330d4244c3d971a0e5aadd663ee122"],["/archives/2022/07/index.html","07d8799eebd47dafde41624cc07a3dce"],["/archives/2022/07/page/2/index.html","e6bd78b78694c07330fa71eb270be72c"],["/archives/2022/08/index.html","29d1bc2e2af9e669785056383152408d"],["/archives/2022/11/index.html","8526f9418ed343ae27b484da4054945b"],["/archives/2022/12/index.html","10315589f6382060464f92f8278f8b0b"],["/archives/2022/index.html","b7240276de8dc03074ff5a6a6baa41d9"],["/archives/2022/page/2/index.html","a88a20a4db045824475db0cdfd824550"],["/archives/2022/page/3/index.html","0f235a706e28954a3720ab3079a4b60a"],["/archives/2022/page/4/index.html","1ef646d1702b8cc425f5886b24862eea"],["/archives/2022/page/5/index.html","67d7cf72aac6df376c0b07f4828cd429"],["/archives/index.html","a77d641564eef084cc9782df97c837a6"],["/archives/page/10/index.html","09f16a18057f5e6bd0d7eb3445d63046"],["/archives/page/11/index.html","2acce4622a6b586db15939372db71d36"],["/archives/page/12/index.html","0f21336fb2906033a53ed0ea4b745850"],["/archives/page/13/index.html","44e8476fb423ce0aedc5084cb32a1c09"],["/archives/page/14/index.html","25eeac8c1de6d56f5bf6723b0f2dcd2d"],["/archives/page/15/index.html","8d699aabc2fab6dd7069e1dc2636de27"],["/archives/page/2/index.html","d61bbf0a000fe4929a07f86480be07ee"],["/archives/page/3/index.html","47b5551db2afa82a480763fff603712b"],["/archives/page/4/index.html","bfee0dfda0adab40addd8f7803031121"],["/archives/page/5/index.html","fa2ad4457da13eb5deba30471ef50de8"],["/archives/page/6/index.html","a4a9a123b4168064a80e0f5bc6fb8342"],["/archives/page/7/index.html","bbc709247fd024c83bc91c287d989c9a"],["/archives/page/8/index.html","90188ccaadc1b7895ed8ac2a16b4cd8f"],["/archives/page/9/index.html","70bbc1ada66adeec2d03a4e485091098"],["/categories/Programming/index.html","0cf544528a2592ccb6543c2d14ec8138"],["/categories/Review/index.html","cc38016af344e7455b6d562bbd35ff84"],["/categories/Review/page/10/index.html","a03ee7668e4bd70b7b82d59ae5efef25"],["/categories/Review/page/11/index.html","d236ba26a71f052d930ed7f3f58bb294"],["/categories/Review/page/12/index.html","9f16e59efdda7f7c9b60e6a945662566"],["/categories/Review/page/13/index.html","d8710f1d3db037491daa3e0400ab9251"],["/categories/Review/page/2/index.html","873daab864d9cdae9f45615ae6e151e4"],["/categories/Review/page/3/index.html","498db143848ef115b2536a77739fb73c"],["/categories/Review/page/4/index.html","b4300b25973b1ec69d8796ced54efd82"],["/categories/Review/page/5/index.html","73fb04f0b08722446f511a22839d46fa"],["/categories/Review/page/6/index.html","71886d23663a1f541cfc555b9d1576ab"],["/categories/Review/page/7/index.html","9b1baeea68f7ce5d8e26f15fddf84ec5"],["/categories/Review/page/8/index.html","a376a156609c87215df31a3458e738d2"],["/categories/Review/page/9/index.html","df81e34432a20b3d17952e35ec8e765e"],["/categories/index.html","608fe6cc5d1354ae32bc6c2fbd83cd39"],["/categories/日本語/index.html","24480c82376c33ca671f50c26c83b56f"],["/categories/日本語/page/2/index.html","180b964bc99fb777f89aca6f4d897447"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","06f25ae6e36d631834fde235f5110933"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","144ff561adeb94be458bdf60bac596eb"],["/page/10/index.html","e64c5970a02d7145616594a80f6503fa"],["/page/11/index.html","26fb39a16b139d42f8a8bf8505698fc4"],["/page/12/index.html","841a147c9a68056be11ffbdf2eabac39"],["/page/13/index.html","1d4031f073874f24855a6625cd5a5762"],["/page/14/index.html","7ac0b97580b51444f8ec47d4c7dac0d7"],["/page/15/index.html","3e4b977f35f48a750869887d49f8a2b4"],["/page/2/index.html","6380ee41ceeb84a8cdf7ab77adf6c192"],["/page/3/index.html","7f4804f869ec370aad8f44d619e8a62d"],["/page/4/index.html","3a0e5cc73bee7186f58c28b2fa600973"],["/page/5/index.html","49c38e3258b4b03262221965fa1f0fe0"],["/page/6/index.html","743da9b612a48d02c82495bf9bba8e27"],["/page/7/index.html","e46d2bba4d3185ef02b7511222398796"],["/page/8/index.html","2931cea2fdcdb5f657eedc45c2ee1148"],["/page/9/index.html","be15d074b85f33310fec8377c3b930a0"],["/sw-register.js","b8eab8700b693344f6ef9d38c50d8518"],["/tags/10分作品/index.html","45c2ba29135c9d5c256061fea8c3ee26"],["/tags/3分作品/index.html","35dac3b235e5902ef6bfb50c5e7fd5f4"],["/tags/4分作品/index.html","d6fe6c9747673136d102333175fc4b63"],["/tags/5分作品/index.html","457f9fb777eb30bc854e59e18a5a1951"],["/tags/6分作品/index.html","a305a3e1897c0528193f3bab703483f8"],["/tags/6分作品/page/2/index.html","6507d84840b1c7ed7bfef9c65662537e"],["/tags/6分作品/page/3/index.html","28df6576d96447c8b6cc70e95aad525a"],["/tags/7分作品/index.html","3796efb94051cbcfa6134390010245e6"],["/tags/7分作品/page/2/index.html","31209af7d699c56149aa772aa0a20519"],["/tags/7分作品/page/3/index.html","4c5bd3ee34fc931427033afe234fe8d9"],["/tags/7分作品/page/4/index.html","f16f07a7cbd9cf10aa8baf81f6a6a0ed"],["/tags/8分作品/index.html","2b5415eed63745ba19453cfda27db84e"],["/tags/8分作品/page/2/index.html","1b9e21269b07aef3bb4771581821632c"],["/tags/8分作品/page/3/index.html","8d5e903c1f0690be7aedff442de7679f"],["/tags/8分作品/page/4/index.html","f973a3ac22e6fbf522a6194fdf6093bb"],["/tags/8分作品/page/5/index.html","bb0b56b608f7a8936e1aadd61e003ea0"],["/tags/9分作品/index.html","a5e44d5ea61854975e16f1a5fe99aab5"],["/tags/N5難度/index.html","cf7ae2d78c4b5a06d0a2153d97c35c5e"],["/tags/N5難度/page/2/index.html","4c3f3b1c66d627518c2a7ca288acd3db"],["/tags/index.html","6900aa14558ee7189ef1696233a4a01f"],["/tags/アボガド６/index.html","09ed17bb4da3294fba3fe064274e7687"],["/tags/三秋縋/index.html","c07c6c12a4428a3e53882e9a615f205f"],["/tags/中國武俠/index.html","4a947b193ea15b1aaedb5d1cc50bb584"],["/tags/中國言情/index.html","3f3ee6dd94fcb27c176ac6fdf623da78"],["/tags/二宮敦人/index.html","456279825571e43d4c5c2ea0b9e25ffc"],["/tags/人性/index.html","0cf8638cbe3bffa7285919b19fbaf3fc"],["/tags/人際/index.html","d965b66e688167d3d6ebff983264b501"],["/tags/住野夜/index.html","c5d96e4b6852c38854f791bd0970bba1"],["/tags/佐野徹夜/index.html","8e00dd808b5d4d1575da74a65bf4b7ed"],["/tags/努力/index.html","84bca5da9d78cbf40b892dbcf56fcb3b"],["/tags/動畫/index.html","15ad913968dc35194df75115260e377e"],["/tags/動畫/page/2/index.html","f6162e86dce8fd6d0c4bc8f99646b272"],["/tags/動畫/page/3/index.html","09c444a00b22ebcd3067e9c42e19694f"],["/tags/動畫/page/4/index.html","e983503e7d7603946ca407e9176bd64f"],["/tags/原諒/index.html","3cf810130c35d960301f20c6d77cde59"],["/tags/反烏托邦/index.html","e95a56d36abde845dca4017892d13dec"],["/tags/啞鳴/index.html","ce083ecba0bc0872245bb957c87a25d0"],["/tags/喜劇/index.html","79c14049a4eea4b969ade5013323e1c2"],["/tags/夢想/index.html","362be6470808d6aec9aadbd7a8c029a4"],["/tags/天澤夏月/index.html","b4dd9883fe3f75c32cb341eea88b4e5a"],["/tags/學習/index.html","ac31dbe20338d0ab9c151220b34b5ecc"],["/tags/學習/page/2/index.html","1719ec0139654dea703a60c0ff234d6f"],["/tags/宮崎駿/index.html","22db8eb1ff82ae28b471bbd7675ee199"],["/tags/小說/index.html","144a36b9b4dfb3ed64198af99b4b9fef"],["/tags/小說/page/2/index.html","09cacfc7ea543eee08b02163aa24c8db"],["/tags/小說/page/3/index.html","668a78f465357715a911c736fca80ca7"],["/tags/小說/page/4/index.html","7eb0db978eca9af1025362766e5423be"],["/tags/小說/page/5/index.html","cca1896a86fe34ba626771aaf121fe7c"],["/tags/小說/page/6/index.html","987db7b081747377e3f2c7a6bccbdfd4"],["/tags/小說/page/7/index.html","7f82fea4da593835dec976ad40d1f5c0"],["/tags/平淡生活/index.html","2f8e67c11b7e6473e3b45e0968c62291"],["/tags/幸福/index.html","8510242bf0ffc67b2e42a43228d9040c"],["/tags/志茂文彥/index.html","004845ccbf9758b4467821811afd06fc"],["/tags/愛情/index.html","06396e4ae78d1f69b4b9a795deb202ba"],["/tags/愛情/page/2/index.html","f28dd712b8386f161bf7de7d94b3cce5"],["/tags/愛情/page/3/index.html","ac7cbc0f2e0f48449dee9cb73a1acac1"],["/tags/感動/index.html","53278db6ecc0e0ed323f3cae118642cf"],["/tags/懸疑/index.html","b1719d1570d4a2a107b09e0e9f77355e"],["/tags/懸疑科幻/index.html","9b705f33a664b62050eb4aac966e1bfc"],["/tags/戀愛/index.html","37de3135b8f01eb5c842fce03338d271"],["/tags/成長/index.html","d0585fe3188b40033c9c23fe3cb6891f"],["/tags/成長/page/2/index.html","4df0ae572f7dd33eb4af67058aa27777"],["/tags/戰爭/index.html","c49c7762d496f2c15ca63d45431b0913"],["/tags/推理/index.html","8484de41102e729c2a5a6f96095c3159"],["/tags/搞笑/index.html","cdf764be37da619d34b0d605be3ffb6a"],["/tags/救贖/index.html","3f69083c58a4679cfc504a3bf9223bbc"],["/tags/斜線堂有紀/index.html","eed535fbf541765317854ad5d2884d99"],["/tags/日常/index.html","329ec3af96025f840d9aa09a2929afca"],["/tags/末日/index.html","41f29283ad98b6fbfc9c53299413f01b"],["/tags/校園/index.html","0b0afe7daa20ca4016b9c7ba3449985d"],["/tags/武俠/index.html","3bb3030f9c8422884e7013f42c71eb2b"],["/tags/武俠言情/index.html","3546ebc36a994d28775904eeff488c55"],["/tags/漫畫/index.html","2755a87c8690408982dc7d028e6f1922"],["/tags/生命/index.html","e5d8bd4ad9451b8c4b1c292ecc7cd927"],["/tags/生命/page/2/index.html","8249eda613ca87a4a912f2ac9a8b32ff"],["/tags/短篇/index.html","e3b352502eb1aa19351168935de5093c"],["/tags/社會/index.html","a47a6cccac42eac1477b4517a8998873"],["/tags/科幻/index.html","971b3c000e14df117cdb33d0ffe328fa"],["/tags/童話/index.html","eaf231b2bf7bf77205041440011ad91f"],["/tags/競爭/index.html","a36a5ec6086707beae226fb867dbb024"],["/tags/自我/index.html","3634ea992120fbe6b72f25222bc042cf"],["/tags/自我認知/index.html","9daae89a8d9de6943b81df004ee6ac0a"],["/tags/葦舟ナツ/index.html","9d97562365332d6546f2c4f343e8d0cc"],["/tags/藤萬留/index.html","99709ec6bff5d7035ae7ed670ccf307c"],["/tags/親情/index.html","fb3e0f3df9d18a869134329519261236"],["/tags/雜項/index.html","d03e7a0096ec60cc2557b48854903b25"],["/tags/電影/index.html","8d3863ee1e49ed29df255e0465711248"],["/tags/電影/page/2/index.html","7115890489736b83e58d18ca451a5de9"],["/tags/霸凌/index.html","b73d9de0643ced599bf30148e20831e8"],["/tags/青春/index.html","85381daea5f4681818b9e5d897d597cd"]];
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
