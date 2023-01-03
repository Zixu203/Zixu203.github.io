/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","cfde2da076b930ebef14685c1c943a2f"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","8d06aca478fff47db2435c889216ad3c"],["/2019/12/25/Review/無法計算的青春/index.html","76a9774fc915e4b027e92ad146c35aa8"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","537f09f2cb8632787a2b639423c2955b"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","70732e7ce56761b0e8b6b0219cfaf47f"],["/2020/01/19/Review/下雨天，不上學/index.html","92b7a66eccfd01103d0434dcc01c9fd6"],["/2020/01/26/Review/三日間的幸福/index.html","a72e0a574756b6f4e9fe4be53203d271"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","6c88fa6e2861646ed021fcb35913af3d"],["/2020/02/09/Review/青春期超感應/index.html","6cc3cbf1b33cfc03883381cdae9f76ca"],["/2020/02/15/Review/又做了，相同的夢/index.html","13f96326b075bab951a445ddee4a3e31"],["/2020/02/22/Review/回憶當鋪/index.html","802dff934df0b092920c56cfa5a17b9c"],["/2020/03/22/Review/不適合自殺的季節/index.html","5a37323100e1acad93c26d06569babd5"],["/2020/04/26/Review/我們都無法成為大人/index.html","7ff854928ad7929a976635581af2289d"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","e4a4a0283a910af38123204358adaae2"],["/2020/05/17/Review/人間失格/index.html","ef47b48e62f7a96d6b7a8d3b8298828c"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","e1657090ce56cedbd322fb953cd8362b"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","6133e79549d4e79c340024fee6cb6c2e"],["/2020/08/01/Review/銀河鐵道之夜/index.html","90a4a7d44533b782e9432fe553dd14df"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","9092104679c2c697464d93a1f07b51ed"],["/2020/08/16/Review/15歲的恐怖分子/index.html","b3d6eba3490b65c2a66aeb21edb6fce2"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","080331ace97b2415da19b0add0c8c645"],["/2020/09/13/Review/羅生門/index.html","05470d4c19eef1a043d385853a8a92df"],["/2020/09/20/Review/闇夜的怪物/index.html","7b1cf370a45990c65fa17a8306cd09e1"],["/2020/09/27/Review/14歲，明日的課表/index.html","dcdc107c351a50edacb17a2431b4e213"],["/2020/10/04/Review/致十年後的你/index.html","a5d28ed46257fe4a7edaec417da72a01"],["/2020/11/08/Review/滅絕之園/index.html","8249a63c385a169c04c4504ce9b5c724"],["/2020/11/15/Review/將愛拒於門外/index.html","90a380d47cb39cedf87bee19639b5641"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","59c31f6b6b82cd0e942b46dd188c0a40"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","6b69dcfac91dd4e8381afda799aa55d6"],["/2021/04/22/Review/道印/index.html","db1bc6566cbac22131ffc519ffe50321"],["/2021/05/03/Review/戀入膏肓/index.html","1a3b8fa8c3bcf0321d4ff5f0d49cc2c1"],["/2021/05/10/Review/Dice/index.html","8a4d6351dfabacf9c98f45ad5aa7a06f"],["/2021/05/15/Review/魔女之旅/index.html","27a8c42c7df7c2c203e7502d289bf003"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8d7439ae426a1de5fe4a9674bee6dbf6"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","7bf29bc7c43f12127a7c6341dd2f60bb"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","95ae63e12a754fc7e2f3ef5cf64806ca"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","0466b30a6afcfbb2f8160dbafc059452"],["/2021/06/05/Review/流浪的月/index.html","1213dc764e0bebea64efa22139f5a570"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","f25c34efb6ace4845da7c82fc8f98d3b"],["/2021/06/13/Review/第一人稱單數/index.html","4c2cff7cb0f418225b0983b9ed88454a"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","9a3462bdf65a0874ebc34b666e891f71"],["/2021/06/16/Review/願你幸福/index.html","738bec16a72a4b89b3ca070ccecc122b"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","3582038377ad2e49ac6ce9670d873630"],["/2021/06/21/Review/神隱少女/index.html","2426a13693a943c4f957ae2907ed7b93"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","ae03f9b317513d6bd18c152478896727"],["/2021/06/23/Review/天空之城/index.html","49ff601a41de852b476f7f7fdceab8b4"],["/2021/06/24/Review/魔女宅急便/index.html","8a702006b9fa589ff99be846d920bba1"],["/2021/06/25/Review/借物少女艾利緹/index.html","844e25328a7eda22c7b7970c4c32e93a"],["/2021/06/26/Review/魔法公主/index.html","21dfe905e8accc48414325730e0956e0"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","c554b0b61716719e6b276d42906db55e"],["/2021/07/04/Review/飛雪與劍/index.html","af3fea03cc895563a58cde47cda4013c"],["/2021/07/09/Review/地球防衛少年/index.html","e9c822620742bc40410b5287de92202c"],["/2021/07/12/Review/Angel Beats!/index.html","6762ba7cca023fa5aeb5434012eff3c9"],["/2021/07/13/Review/Clannad/index.html","f93c6f05610e5c3214ad49b2384c4233"],["/2021/07/15/Review/AIR/index.html","5f759c9885c4164f48f737adba9d2b66"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","6ea5b745359448c44cc2cc656ae60ad0"],["/2021/07/15/Review/螢火之森/index.html","45c7007067a375fae936625f1aea1309"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","0fe8d07802888ab0d3294d5448df1371"],["/2021/07/17/Review/奇蛋物語/index.html","1d2c406f89b518906fd012288843c452"],["/2021/07/18/Review/Vivy/index.html","7a92b1350b4c57c3328d94d3440a7d04"],["/2021/07/18/Review/請妳消失吧/index.html","8e8b5907f30a31075fe15c94cb4d89b4"],["/2021/07/19/Review/漣漪的夜晚/index.html","f60be0fe8919360b4019815e7dd326c9"],["/2021/07/20/Review/月色真美/index.html","0758b81ba2b776a456026ec44cd3235e"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","630c9506bc376cc5d06e671636d9453c"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","62d5ccdeb2c9a9315e020dc5b4ca1d62"],["/2021/07/22/Review/罪惡王冠/index.html","520057b801637116a6fb34a8fbe568c7"],["/2021/07/23/Review/弱角友崎同學/index.html","845fe65b9ed8a9b46f434707e57ca2c8"],["/2021/07/23/Review/惡之教程/index.html","c15221300fe517ee0e3e21984ecf243f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","8258122dcb133517073ff25461e06f16"],["/2021/07/25/Review/魔王勇者/index.html","85fb7e6d8dbbbb7966775a18ac237231"],["/2021/07/27/Review/一年A班的怪物/index.html","8c6b0917e9c2851db938c6ae3d6010d9"],["/2021/07/27/Review/奇巧計程車/index.html","ddb172ca26337e0ad47aeff4a3275cac"],["/2021/07/27/Review/專情的碧池學妹/index.html","413f6e1fd56eb87740c45d5542a206e2"],["/2021/07/29/Review/只有我不存在的城市/index.html","4bcf8c1de35e2decf770526bcebbfc8e"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","639dd82ea35aaf7cbd2877d3f2a7dc8b"],["/2021/07/30/Review/可塑性記憶/index.html","ff116fde0ad7862b7c63a9fc0a023c80"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","5fd28787cf1bd0b211ce99cafa76c4f6"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","8a9bd1ae98d33f80947530de897b5008"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","3d92e7fac5ef430ecc6433b3dabd6a33"],["/2021/08/25/Review/清戀/index.html","8285b0a86cecc0a17f5d9b66357fa2aa"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","861dcb17d8ea1289915a715034e09fed"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","8ffc172f5abe76872a09bfea7f029795"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","26ebc37c8cde5292165fc7841bf574c5"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","b81e15921e11357e181c31dcd0d33c32"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","173b7e11a09dbdcdf01084967f3352f4"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","bc41c907dcb20196659dc6da94cd65a7"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a6a2b765d8e321105abb659675a8a273"],["/2021/10/16/Review/龍與雀斑公主/index.html","6de285ed8ff57a0d3258647082614195"],["/2021/10/19/Review/孤狼不想開後宮/index.html","d9a15b3624286c4413535882da703a8c"],["/2021/11/13/Review/徹夜之歌/index.html","aeffd1c2ade2f13a89eaf2508017f210"],["/2021/11/24/Review/武煉巔峰/index.html","e8e5484ea90edb20972cda603e364d38"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e522a79558499e6ca7afc53bcd9c4a50"],["/2022/01/28/Review/神醫凰后/index.html","bbc9fcee443537d700bbcb80407d8292"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","7d55851b285273ebbfd0b716a13ed3e9"],["/2022/02/13/Review/夏日幽靈/index.html","ac3f25f551ef4da41e2d0fffa94cb742"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","252dce1abbea4342c42e8441e75af97a"],["/2022/02/26/Review/賽馬娘/index.html","53b9bdd598b0951c3f870a4e8e2a3ac8"],["/2022/02/27/Review/大欺詐師/index.html","41a95bd28fdd3996add64b3b62aec0ac"],["/2022/02/28/Review/前輩有夠煩/index.html","d700395a126504a319e7c45733e1a2f2"],["/2022/02/28/Review/碧藍之海/index.html","8aabac1dd279558adf38a213c2a95542"],["/2022/03/05/Review/落第騎士英雄譚/index.html","688274348dcbf3dc6ef0b77db76a5081"],["/2022/03/06/Review/Another/index.html","2bb0da1e03de34b64b79dd1078ec4f21"],["/2022/03/06/Review/入間同學入魔了/index.html","2edaea5f63c7fd049001745162404478"],["/2022/03/18/Review/再見宣言/index.html","d2525d962cbbee2f507b4ca6898661a1"],["/2022/03/23/Review/生若冬花的妳/index.html","aec14bbb90607704f6a07e97d536e673"],["/2022/03/25/Review/天之弱/index.html","6d903b2be35149d48cf1f93795401e17"],["/2022/03/31/Review/滅了天道之後轉生/index.html","8e4fce4a81f723b8429731e3a080f5b4"],["/2022/04/30/Review/泡泡/index.html","bb411c712ec09bdcd5f0bda1ca1d5e17"],["/2022/05/04/Programming/Dynamic Programming/index.html","05cd25bb24e9e83aa29cd87bacc1ab05"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","938f00e8a05dc5d1a55fdaae636a64ae"],["/2022/06/13/Review/偵探已經，死了/index.html","16689f468ee1e929d2205a5614051366"],["/2022/06/14/Review/黑色子彈/index.html","fcee979c0c4739160441686ad80bc010"],["/2022/06/15/Review/黑白來看守所/index.html","4c36c1e4b792e95e6bd9b49d7a33b2b2"],["/2022/06/16/Review/虛構推理/index.html","0d7241acdd24fcbf19be71695f5cab4e"],["/2022/06/17/Review/戀愛與謊言/index.html","b8ee14a72851b7eb1e5a75fb393a3113"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","5bd348a33194c5fe7fb7b0aeae3dfb1f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","e087d1a5aa31809b01dea09431ca55f6"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","0f5c9ce41726ce1597228ea4cc363f54"],["/2022/07/03/Review/Hello World/index.html","3e18a3bde54f5de8e041528968ca27fb"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","9be71f4cc2141c79504baa4098570204"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","229a6d78e9775b4571e641387f2e577a"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","7b0676839862810b4351a5d7915b33c1"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","5017fe4ca661403da66857330b48e4ba"],["/2022/07/16/Japanese/動詞分類/index.html","fea04a8b9c34b92fc98bc3db59b93854"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","c9c61f395c0f5bebf4becce6bada916f"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","cab5295786b283c4d8f3114babf29903"],["/2022/07/17/Japanese/音便/index.html","0baf577a028d570e03b5d272c07fc0a0"],["/2022/07/18/Japanese/動詞 時態變化/index.html","dddb9289a72bb28b96f9ebef9a609966"],["/2022/07/19/Japanese/助詞用法整理1/index.html","28f81e6600f0c4775e2e8f76c0166d0b"],["/2022/07/26/Japanese/助詞用法整理2/index.html","33c47e642c238ca43a187a04886d00b4"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","8474bc6f957f14ec17a6a668e718114f"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","dfb54e2a3dd318e950971694baf2089f"],["/2022/07/30/Japanese/疑問詞/index.html","20873e894d4f79d1df2fa8d550606e06"],["/2022/07/31/Japanese/助詞用法整理3/index.html","792c23c1f018d8ef6cc9a27eaca31702"],["/2022/08/02/Japanese/副詞整理/index.html","86f621b263d7f37dd1de69e4014ddddb"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","0e1663e38d3fecb48ebd0ccb7ad62b22"],["/2022/11/04/Programming/Data Structure/index.html","41f106632bb77ac7a690c9b87459fbad"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","5bbf7e2dc2668772498aa4d45a988477"],["/2022/11/22/Review/組長女兒與保姆/index.html","95a9179aa2bd50eef5cc808cad17a691"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","b14a821e808f7680138387cc88d5fea4"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","a2867731673c4fbbe66f396f32c26415"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","6a6e7a384be049ce2e3e53ec6593f482"],["/2023/01/01/Review/あの夏が飽和する/index.html","c5e0bd8d6a13f7993abba3cb3de2b9c3"],["/2023/01/02/Review/孤獨搖滾/index.html","ba01e9f228961db564e35a02127ebc65"],["/404.html","8c2010cbac59f7efe0f1f8d70482acd2"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b01ae3e78c79aa7c6146ddb0d74ac1d2"],["/archives/2019/11/index.html","308fd72d267fd89510979804e7b8bb7c"],["/archives/2019/12/index.html","08b2364ff10f75269ab7c74f18fd42ae"],["/archives/2019/index.html","9e42879b3be22ebb5b9592f1ae41e328"],["/archives/2020/01/index.html","8a6d34177cb1597dad0374a01fb4f62e"],["/archives/2020/02/index.html","91be74d6927bea9102ee078f14e0c20b"],["/archives/2020/03/index.html","f74319a0368b6222947352aba23b03d1"],["/archives/2020/04/index.html","2715abc79b90beb4ae6ebc57dfa698a3"],["/archives/2020/05/index.html","c1ae26ebcec9b30de7202793ca24f0ed"],["/archives/2020/07/index.html","060915bad47fb289e0dec6b28fbc3695"],["/archives/2020/08/index.html","2aad1e3ae0ff3a80e8d8a516e516fc5a"],["/archives/2020/09/index.html","afcd0b43c116729cb6acb84d7274444a"],["/archives/2020/10/index.html","0d708fc0ca721d3e9afd01f5c64c303b"],["/archives/2020/11/index.html","b56d601b7f12fc293605cd5cd484e0c8"],["/archives/2020/12/index.html","e3094a44a67a5b12b6e2e6ddade3f02d"],["/archives/2020/index.html","a03d5072e647774ddb7e043691df17cb"],["/archives/2020/page/2/index.html","066057d8fc456d1f3c3cd84ccb54ee5f"],["/archives/2020/page/3/index.html","a3332a451e03acee0a337bf08fddcedd"],["/archives/2021/04/index.html","1cb432051ff1b21990daf946bc3e56c9"],["/archives/2021/05/index.html","6c10321df4690ad31a01ec59e534ef98"],["/archives/2021/06/index.html","4c09bd7985243a891f898b568f1ef43d"],["/archives/2021/06/page/2/index.html","00075f7a187f5d19c84d509acd2138b4"],["/archives/2021/07/index.html","250159f9f477f788f28b991cc1b8578c"],["/archives/2021/07/page/2/index.html","ec2d50c9200bc55dccdb1d1a22c2e813"],["/archives/2021/07/page/3/index.html","ba60325906777e7887987a1903e50ee5"],["/archives/2021/08/index.html","8c05744330ff9b8fc293916fda40fac9"],["/archives/2021/09/index.html","262d6fc4852ba1d85a9efc5bbb53d289"],["/archives/2021/10/index.html","3ba07fd450b1b81f6018c34d87f3c0c1"],["/archives/2021/11/index.html","ba67d4209b49f0caf82a4fc6e149d2d8"],["/archives/2021/12/index.html","47630f55441261a79f97b77953b14382"],["/archives/2021/index.html","f9b6d6bb96922dad45e1a64e9958b190"],["/archives/2021/page/2/index.html","b071e15f8c20981025b3009dc9dc9b07"],["/archives/2021/page/3/index.html","287bd4932733fbc3585e2cd1aa8bc7dc"],["/archives/2021/page/4/index.html","54db57de9d2f02f9b2fee9746720c301"],["/archives/2021/page/5/index.html","0663bcfed29b652ca404f40d393c506e"],["/archives/2021/page/6/index.html","46d40e166d3b7a0f66292a67592da88b"],["/archives/2021/page/7/index.html","e7fb8d0603b3c97444fa4e6e292cab2a"],["/archives/2022/01/index.html","ebbc8e1df3b3021e11d45c7e32976f89"],["/archives/2022/02/index.html","2b8bbfc322edcec02de69215a044964d"],["/archives/2022/03/index.html","a840db0ed06b0f0b943f23fdf033e87f"],["/archives/2022/04/index.html","b4dcd62ab0b205e16549308b791796ea"],["/archives/2022/05/index.html","d4b561959a5120d69d10ebfb8f2557ae"],["/archives/2022/06/index.html","c46d1230677a878ffe6f99b6afdec360"],["/archives/2022/07/index.html","ef8cb7f1d3f57aaf2876efae71a5d550"],["/archives/2022/07/page/2/index.html","ad62ee96988b07908dff44aff566def9"],["/archives/2022/08/index.html","158fa1f4f7043303d8fd4891b1efb496"],["/archives/2022/11/index.html","6c5c88cdaddb29a8c18f4b6f6209b153"],["/archives/2022/12/index.html","e7ea3786ed7b09b8cc329e65de359d0e"],["/archives/2022/index.html","e7f637133f82df5507ed47bab80a9573"],["/archives/2022/page/2/index.html","6824a46cc1c39e758c0e02a454180ec1"],["/archives/2022/page/3/index.html","a02ace81b3727f4ec2e65e824ebfcafd"],["/archives/2022/page/4/index.html","69ee840eac03784ed1c90a9a3d9057ad"],["/archives/2022/page/5/index.html","7cb3fc7b0d9e15a0efc114e8d43e0ed6"],["/archives/2023/01/index.html","6a87a8ba2c9b7e3e175338f14e547cde"],["/archives/2023/index.html","4d387c223d5d876de8ebbdcafd8de7d4"],["/archives/index.html","02a9755acc9f176cfe9c77a51bea192b"],["/archives/page/10/index.html","eb8546bbcf4ece620eabd665b69ddac6"],["/archives/page/11/index.html","9bd6f5304359ec7b7a82054d685ca01d"],["/archives/page/12/index.html","1e1f94861de8d40251bd3a32d6a07728"],["/archives/page/13/index.html","e3204cbc163fc2b867fd50b9bd19e817"],["/archives/page/14/index.html","c48341e3f47f06733d9fa615415c3bf1"],["/archives/page/15/index.html","6b153630729e0c3f055b686c9399ad60"],["/archives/page/2/index.html","144279ef6cafd9e78a456004c388fe7f"],["/archives/page/3/index.html","a96fbe558d86da844994879f653d3af3"],["/archives/page/4/index.html","f58bb7baa81fe83665222d1be6909066"],["/archives/page/5/index.html","7d9771dc7ca1b9746bea342d4e029ab9"],["/archives/page/6/index.html","2b92ce801aabe613ee802642dfb5d0e4"],["/archives/page/7/index.html","66a8f07f5c374697460bb2634dd29b4e"],["/archives/page/8/index.html","0f7080f54d4c216282030cd5e04333f2"],["/archives/page/9/index.html","23b81bdc85956706d19dced36fa6663e"],["/categories/Programming/index.html","d3e6f7fbc0fdfe9461d37a139692d654"],["/categories/Review/index.html","a9230f5c48ff62b471c3a77118572ac1"],["/categories/Review/page/10/index.html","4f4cf6d7f31fc634e8f6d7e937ddf4d0"],["/categories/Review/page/11/index.html","658f60c350d2a593b794ed39d533a425"],["/categories/Review/page/12/index.html","966860ea33e8213847f4ad959259adf4"],["/categories/Review/page/13/index.html","6421c883d8ca7fdb0747fa6862a1ac87"],["/categories/Review/page/2/index.html","3613476e30520ff33dbe50002d33b25f"],["/categories/Review/page/3/index.html","27313db4b0adf467d80083a3960ca9f4"],["/categories/Review/page/4/index.html","e7bf562cfb9c63bacd421749616a85fb"],["/categories/Review/page/5/index.html","6200b23bb8e6033b703b8e57194c639d"],["/categories/Review/page/6/index.html","e679658a4c265d96d80cca57ba60bec2"],["/categories/Review/page/7/index.html","71eedf01b4f1faeb4e5d2f3630292242"],["/categories/Review/page/8/index.html","7205ae91876e2ab11b405cda0b3e9325"],["/categories/Review/page/9/index.html","1954412b2c3510e08e7836f317a236da"],["/categories/index.html","29b71dfc78f416e827223c589377af4e"],["/categories/日本語/index.html","0870a81528256839377b6f0d0d9e1306"],["/categories/日本語/page/2/index.html","bf75525f07e7ff9d28cbc6589999dd3b"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","571ef8e603b49cec979a50af4f1e16d6"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","838fdc94b6728048de06b3cf783ecf09"],["/page/10/index.html","cb5127ea927d2878815beffbd12ead26"],["/page/11/index.html","3eae4a2ec3ad6288d617e688bdcc0597"],["/page/12/index.html","1d76b61fed3e6f77d35e5b546e22032f"],["/page/13/index.html","7c36915a7a7e2fe60314e5793c3eec10"],["/page/14/index.html","7977ca66bc8a0cd75893538ce7a3ffec"],["/page/15/index.html","3a36e465fcb91c822bdd1c9a253df793"],["/page/2/index.html","dd7fea7165c22371c97bd383a14ca75b"],["/page/3/index.html","f3b3ed64b2dff98dad1772dba568cd8a"],["/page/4/index.html","b256d26e3c92df0eaf7607b076f97d2d"],["/page/5/index.html","4dd2ffcca7217bf99bac74d0650662a6"],["/page/6/index.html","8f352bec88fcfb72afe73a64a461dd24"],["/page/7/index.html","631368f324c4a6c02e7855c91568bf77"],["/page/8/index.html","596cc0278671880a115741c0336272ed"],["/page/9/index.html","d45e0127ef62d4a62d275ac51144ad82"],["/sw-register.js","9b13baa7e8e48416beb1a519b8cde609"],["/tags/10分作品/index.html","224fc5ecbc8985347b5266c9c5e22230"],["/tags/3分作品/index.html","4200fc7b29477fe8256e7c2b6823335e"],["/tags/4分作品/index.html","9901b349fc349bc1084c9177f420a24b"],["/tags/5分作品/index.html","480b501164e418153e32f4b81899b59b"],["/tags/6分作品/index.html","404a6c2c5e970f2980ebd5b5ff8eddbb"],["/tags/6分作品/page/2/index.html","1ba9ae9641382a32e16cee27b9515e69"],["/tags/6分作品/page/3/index.html","6d45e9eadcf05e10ece9e87bb2f40f80"],["/tags/7分作品/index.html","a519a873d21e6d825443713291a974df"],["/tags/7分作品/page/2/index.html","af36ece9aba5c1dbe41d3f0644d2ea5c"],["/tags/7分作品/page/3/index.html","5b8f7028bf4f19ec8a049420359a06df"],["/tags/7分作品/page/4/index.html","55a9d356bcbbdf9eb83ffaadc7022a81"],["/tags/8分作品/index.html","2af39ce24c18526ec4cbf9fb9feb34fa"],["/tags/8分作品/page/2/index.html","a533782b9fadd7f0b2ea9a381447ef8d"],["/tags/8分作品/page/3/index.html","38a5f7d923dccee06635de3b849ad1c1"],["/tags/8分作品/page/4/index.html","bac873265fb7830a77c4dca672e0308c"],["/tags/8分作品/page/5/index.html","f2acbb21ce90a8cc90e14030fb2e3454"],["/tags/9分作品/index.html","24fd7cc387aea41c1c0be01955ad8ec0"],["/tags/N5難度/index.html","5596456cb3479c886a83bc487bb3a8fe"],["/tags/N5難度/page/2/index.html","6705baa78a4048ac24531e120bd70ffc"],["/tags/index.html","be8fcec16b693bea27dd44de23946734"],["/tags/アボガド６/index.html","f8114132ad174fb033511ec8afdb44a3"],["/tags/三秋縋/index.html","f9b141f34b9f65999e4637ec4f8b33c6"],["/tags/中國武俠/index.html","31f1bdd313059b4d7e701cf2b6feee2c"],["/tags/中國言情/index.html","a12ef9c35831b4f6a3ca232bee9c5adb"],["/tags/二宮敦人/index.html","35406d7f8d9197f5971401b18cae3b01"],["/tags/人性/index.html","777532c1fa441b41697b31c80fce9629"],["/tags/人際/index.html","f03bd7f8bf46a9f3d877ccd76c4d0883"],["/tags/住野夜/index.html","d7dd5432b1abf0f3cbd4629d9d6b8b4e"],["/tags/佐野徹夜/index.html","7cc77c136a5de1f2ca412abc6eec87bf"],["/tags/努力/index.html","512126cc167cb176264f74a4cce3789c"],["/tags/動畫/index.html","3117342a743b4be6fc743bdd12cc1538"],["/tags/動畫/page/2/index.html","284f84de5c91c1f4349c22dfd219b630"],["/tags/動畫/page/3/index.html","08eaf7e0c7443aa55a298e24689ecf17"],["/tags/動畫/page/4/index.html","bfc0dcd9a14d7eda5d16f4abfb5fadc6"],["/tags/原諒/index.html","ce9bb43a78930f78cc1ee1a49930dc37"],["/tags/反烏托邦/index.html","857327799fffa26eb7a1a23925767432"],["/tags/啞鳴/index.html","bd04b85298aaac1b8602ac7b8512aacf"],["/tags/喜劇/index.html","dbb581cb4db28931b079023348600751"],["/tags/夢想/index.html","abd768119756cb78c6e912d656a7cccc"],["/tags/天澤夏月/index.html","6394fbe84d27260b9ee5e18becacab85"],["/tags/學習/index.html","4e357a1a4880c98cb19bce8ff42accf2"],["/tags/學習/page/2/index.html","1d7aa3b3b18bf3d2981adf67cb325c8e"],["/tags/宮崎駿/index.html","ebeb107e222728f87a21a4f67597d1b4"],["/tags/小說/index.html","c80970e523894c2bc0dc5504f9641b0a"],["/tags/小說/page/2/index.html","ad9b0f50abceaf31c9e7b9054a76d22e"],["/tags/小說/page/3/index.html","2a53e0fa61370c8a8b139083c2f56e87"],["/tags/小說/page/4/index.html","1a881514e3220ace901f8887f85797b9"],["/tags/小說/page/5/index.html","233236d2802e2daff902492560715893"],["/tags/小說/page/6/index.html","d456c69f0787af067a8482f151935513"],["/tags/小說/page/7/index.html","16a96c10277be2edb33f85ae000c0066"],["/tags/平淡生活/index.html","7070d5b65f68acfc6702c4e84dc5e566"],["/tags/幸福/index.html","60fc05eeab43d360df3d4ca4f998e66a"],["/tags/志茂文彥/index.html","06b0588775d3a9b1901efbb1041ddb80"],["/tags/愛情/index.html","36510ace0e2fff390b5345208316c8ef"],["/tags/愛情/page/2/index.html","4374366f94273021ecfb7404c31dba59"],["/tags/愛情/page/3/index.html","d47a55a605503928a0b60a3105248480"],["/tags/感動/index.html","81fd7f3d0b9fb418beaa3594678218fc"],["/tags/懸疑/index.html","7a2fde8e39154d8e90580446b675ca0e"],["/tags/懸疑科幻/index.html","2fdec58b346bb14af286105ddd4f1985"],["/tags/戀愛/index.html","1706a59014e685749ed7cb073c494c28"],["/tags/成長/index.html","97ca9cbdcee911c1b9b0e904bd9760c8"],["/tags/成長/page/2/index.html","9c35201bd3c9b3c1a37e0d67c9f6b4b9"],["/tags/戰爭/index.html","9d869a7a3a5cd262c587f519d518bdb6"],["/tags/推理/index.html","d56b9a76cfb1b0e209ed63b5a2290c44"],["/tags/搞笑/index.html","1d5c58113f0c052dac049486ee8290df"],["/tags/救贖/index.html","6682676d92ac3c7f87021a57ead6cf2e"],["/tags/斜線堂有紀/index.html","ec9d3c22a02094197a6c8dda45af2690"],["/tags/日常/index.html","d30441a79762f3d84d29bb94826c329b"],["/tags/末日/index.html","d0a18954268a0c742647339ed952742d"],["/tags/校園/index.html","7b1e03e4f29ba4fc49c267aba25ca103"],["/tags/武俠/index.html","14c5b90bfda456b74a98fa21b9ac50a2"],["/tags/武俠言情/index.html","6890b9b908b35eacab4d61a559d81196"],["/tags/漫畫/index.html","4c714d1f58d7481aee0d668361ba3824"],["/tags/生命/index.html","4e3caa216ffb5f6fbb0a2f816350c693"],["/tags/生命/page/2/index.html","23dc5cf6ddd97afe7f95ea13dbe0b42c"],["/tags/短篇/index.html","dd4b3b93a3a71b4918f1d8aa55d592e3"],["/tags/社會/index.html","0f32d89b0d2b0d9f1ae3bd78993359e4"],["/tags/科幻/index.html","1b12e41f2d4f7b01d682fb834f3f4421"],["/tags/童話/index.html","9a744785bde069faa319259981fd4873"],["/tags/競爭/index.html","815218176a993dab3daaddd3c6dfc32a"],["/tags/自我/index.html","a909207676860bf45a3a824a0d1c1be5"],["/tags/自我認知/index.html","b5f3023c1c4f8530aaa4ca0ae38c8686"],["/tags/葦舟ナツ/index.html","1c821a5c33e54b640c99a073ef7a4372"],["/tags/藤萬留/index.html","fc5a5a5f4a56eec49ffcaf6cff8b5f72"],["/tags/親情/index.html","e40e4fe739f01ab6075de347d2138971"],["/tags/雜項/index.html","5fdf322bc3544aac0b40f3b0226e029a"],["/tags/電影/index.html","5242287a31690dff370a2afc58f2cf82"],["/tags/電影/page/2/index.html","49a4aa6d57c6c30493ce4234f3edaac2"],["/tags/霸凌/index.html","aab0cb55fa61677cbfd9fc6d8a36a534"],["/tags/青春/index.html","db5591032e6b8acb19c2f95bece464a1"]];
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
