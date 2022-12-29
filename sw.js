/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","7b07a47fa651492460955b829cce3e08"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","54588c79203ac1bda8c29d4195757756"],["/2019/12/25/Review/無法計算的青春/index.html","9a3a73e69ebbd8a583c78423700cc6de"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","88337bf46a1d4f64ba6f2fc17c8aa72a"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","09b7abf6edb94b69edc856201eb396ed"],["/2020/01/19/Review/下雨天，不上學/index.html","ccb67987ddfd792cc392db3327181226"],["/2020/01/26/Review/三日間的幸福/index.html","d5853076edb97034536cd71a247b4068"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","085612382b913ed71f2095d67519c924"],["/2020/02/09/Review/青春期超感應/index.html","f9ccdc2a041017c9d596673f3aafdfa9"],["/2020/02/15/Review/又做了，相同的夢/index.html","19c1e973f4814ad1e81f8e73fac7b1ec"],["/2020/02/22/Review/回憶當鋪/index.html","72c3a1350923afe2581066ec80850f4d"],["/2020/03/22/Review/不適合自殺的季節/index.html","8ca81949d3dcaf4cd0718c1af1ee39f7"],["/2020/04/26/Review/我們都無法成為大人/index.html","5610dde4bef0fb76866ad73a3e60d086"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","98d93628f8df01d862e84d71c3619c0f"],["/2020/05/17/Review/人間失格/index.html","3eaa628292d721b36f274d5171ef5805"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","591709bfc4fbf26ba74062433ac77466"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","959ad5533a9af44222d0503f59d9b7db"],["/2020/08/01/Review/銀河鐵道之夜/index.html","05b0435caa9e50aeb55bc5fc9f65b673"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","0f4bc27e78afc387dac0a47a0907a3ef"],["/2020/08/16/Review/15歲的恐怖分子/index.html","ffb02a2821bfa60fd93a135ed126478f"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b2aaa4faa4b01e5eea7f4f6581b24052"],["/2020/09/13/Review/羅生門/index.html","22a47ca66789d649e7dc56c899247b79"],["/2020/09/20/Review/闇夜的怪物/index.html","95b7f69c8719eedadcd3068bb3dd3e8e"],["/2020/09/27/Review/14歲，明日的課表/index.html","4a74ae80a7f3d728d78411db3edab4cc"],["/2020/10/04/Review/致十年後的你/index.html","294fe2c6efb882343bdd1eb6be22c017"],["/2020/11/08/Review/滅絕之園/index.html","368f703ce27cb5f2a16e6e6ca79ac383"],["/2020/11/15/Review/將愛拒於門外/index.html","a2e0cd8f1fc389cc6d5bdbe9a58bf8ec"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","5dce978021bd1b9f94748071305a14c7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","871a345c1ae46ed55982c9410aa7cf4f"],["/2021/04/22/Review/道印/index.html","4163979fcd73acfc162d4208707bd9af"],["/2021/05/03/Review/戀入膏肓/index.html","e4a0bbe206f3c8877fcb2465c4cbec22"],["/2021/05/10/Review/Dice/index.html","1e5eb1df3b7859feb882e98ce197cc82"],["/2021/05/15/Review/魔女之旅/index.html","067b3b537cb6f0d1ea828f55a4000fa4"],["/2021/05/28/Review/戀愛寄生蟲/index.html","79cd9837d666eed7430bc92d7ab3f829"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","fff389848f97638bf9d9bf2d770742c9"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","8183c0163616b012e7aa984e76671ab3"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","3755353f059395047743f471c9ec9b75"],["/2021/06/05/Review/流浪的月/index.html","d9519957bf9537011af19c691fec5243"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","6634a4cadc92c3b5f5195476de3ff9b1"],["/2021/06/13/Review/第一人稱單數/index.html","b9b9473df43c9f65c5ed7e8d483dfa88"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","eea75b5bc956f76512c0f257f77eaf56"],["/2021/06/16/Review/願你幸福/index.html","f2c2127afae3a5d149a0f6b9c03cdd94"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","9ebf99120700146e5bf2c9db90789e3f"],["/2021/06/21/Review/神隱少女/index.html","cfcca8b9233e110c16fe57e6ba2618b8"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","9e5c222a5ba1c0af7f6924b5b8b56186"],["/2021/06/23/Review/天空之城/index.html","df750aee2ae5d0becee5e6c22a3026a6"],["/2021/06/24/Review/魔女宅急便/index.html","47b17e5e7a9de6971df14bfcaf92f24e"],["/2021/06/25/Review/借物少女艾利緹/index.html","c8295cf07389ca771b4e1fa73bb65ecc"],["/2021/06/26/Review/魔法公主/index.html","472ed68b81fcfb792205c91760453dad"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","c5155586b80d52313e6be6511b788464"],["/2021/07/04/Review/飛雪與劍/index.html","744f73f237ab715b0c716c29ef48be2a"],["/2021/07/09/Review/地球防衛少年/index.html","8b27b97b0c082fe20ae47786daa69558"],["/2021/07/12/Review/Angel Beats!/index.html","0987410d5a2de9bf9c74bcbf7822ada3"],["/2021/07/13/Review/Clannad/index.html","0e6b8467e8bdc887234261e46587bfb2"],["/2021/07/15/Review/AIR/index.html","30832c0d8813389a72eca75b040bd1e5"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","ea52a86f49685fa5cf6be54c9a6347a4"],["/2021/07/15/Review/螢火之森/index.html","90d060924168654dc75206ce5729b0fd"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","fafb78ab4f822887f45c50e9fbd66fa1"],["/2021/07/17/Review/奇蛋物語/index.html","5bedb61151d571b1d6a2334180bf0f05"],["/2021/07/18/Review/Vivy/index.html","227580ab049b2e060ff5e7d890cfa760"],["/2021/07/18/Review/請妳消失吧/index.html","a21b3edd6921a624aee20e72a725649a"],["/2021/07/19/Review/漣漪的夜晚/index.html","168f9e918826df81ee159a6164d93ac8"],["/2021/07/20/Review/月色真美/index.html","97080cf4752e6704302fa3eb7f006d0d"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","6202a9647a7d5c3234969913b83b37a2"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","4b3da86a46d119e581de3d49ef59547f"],["/2021/07/22/Review/罪惡王冠/index.html","6931b47cedbe134f66c3f021d98e325d"],["/2021/07/23/Review/弱角友崎同學/index.html","2632cb74dceab5a755ed18d3f042e9be"],["/2021/07/23/Review/惡之教程/index.html","a1da96152adfa2e28f72aa44c52a538d"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","30c0f65419406f07f24e5ac6e579db12"],["/2021/07/25/Review/魔王勇者/index.html","7eadb094319d7dcc7640b62d3a09a49c"],["/2021/07/27/Review/一年A班的怪物/index.html","3e5b07241ff40657407cb1da2bc91149"],["/2021/07/27/Review/奇巧計程車/index.html","922312085113497ee242acf29cb5050c"],["/2021/07/27/Review/專情的碧池學妹/index.html","411b06db8371436d31bc34a52700206b"],["/2021/07/29/Review/只有我不存在的城市/index.html","67ceae3c49ac18727baead12d8b00d0f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","8d5f434286a2d99509a5555ea3cfbc4c"],["/2021/07/30/Review/可塑性記憶/index.html","c5ac5e4e07e7d2f643ada64961370520"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","5dad52804b9eb8702f50ab316720bd16"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","0313fdd92acb82af6ce6757610c1937f"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","986d1966a553be4c32947d28d2c9eff0"],["/2021/08/25/Review/清戀/index.html","1f6bc812a4905a68a07784229e3bcced"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","fbe8660f994336adf61919da44a636bd"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","608ed2fcea9de74fe22f2a4dbe4f50fd"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","2ffac4bb36fc0ccb02d9f22b2b486321"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","2909a4812f987eb95be9d432701207aa"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c9577c455e814038f6a0f768ec25c5f4"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","8811938ce0260f44d7725def157cd145"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","8d309d7b786efc3e7f75002786d17dea"],["/2021/10/16/Review/龍與雀斑公主/index.html","2e99dfbe0545e82a4361d82feccb7c69"],["/2021/10/19/Review/孤狼不想開後宮/index.html","a5dfad28c5bf46e282e87c856d3c06ab"],["/2021/11/13/Review/徹夜之歌/index.html","67a2ad9410db36502d23ffa08cde482a"],["/2021/11/24/Review/武煉巔峰/index.html","eda6e744cb40a781384cb4ec28523615"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","c233da0b898c01aa01e56d6c1cf98819"],["/2022/01/28/Review/神醫凰后/index.html","5fed26f7378524152190eee7cda91cd7"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","ed15f77f58ffbc04e24dad01ebdf77e6"],["/2022/02/13/Review/夏日幽靈/index.html","3f41ec4606ee248650340b63be04f249"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","0ab1bbbff74aa9c6ca06bf08ff7d4b7c"],["/2022/02/26/Review/賽馬娘/index.html","744b5370d2b374596a120aaad3376c0f"],["/2022/02/27/Review/大欺詐師/index.html","ecefa8f4e3ddd3c54ec2900edf1a98e2"],["/2022/02/28/Review/前輩有夠煩/index.html","62d08e97fac76607def2af3b9128eaa4"],["/2022/02/28/Review/碧藍之海/index.html","555955b51ddb3f4a137707e5cef37cc9"],["/2022/03/05/Review/落第騎士英雄譚/index.html","9595dabc511382419ef0f1b944001723"],["/2022/03/06/Review/Another/index.html","96044fb3b7304f3711cb8967f0bd7f23"],["/2022/03/06/Review/入間同學入魔了/index.html","10c2ec90e373c3113f78cb60fa7824fb"],["/2022/03/18/Review/再見宣言/index.html","c6b4ba2b6e86cfe56fc74fcdae208561"],["/2022/03/23/Review/生若冬花的妳/index.html","6803b01a6c6564d20c1c584cf0097c1c"],["/2022/03/25/Review/天之弱/index.html","155889ade5601eb211681dcd55194791"],["/2022/03/31/Review/滅了天道之後轉生/index.html","fa7a7e18eca4945039ad160885692e3c"],["/2022/04/30/Review/泡泡/index.html","dcf3fee7fe5f4bc45ce517fcf367a727"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","8be07428439433c1356d76b903a60e77"],["/2022/06/13/Review/偵探已經，死了/index.html","bfc9eef78dc0236f97aa45aeb76c4f4f"],["/2022/06/14/Review/黑色子彈/index.html","1fe2a4f7d5a4c2847c6d561dd460ac7e"],["/2022/06/15/Review/黑白來看守所/index.html","cf964f5c641fe10e0c05c8da1563c87b"],["/2022/06/16/Review/虛構推理/index.html","4bd2944bb831506a35897a3cd89811e2"],["/2022/06/17/Review/戀愛與謊言/index.html","22a37e68306458e3b2e3288f566183d6"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","7b258f1b20f72ee3510a766f7c928a87"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","7b0c9ccef014ab0950a5d84405efe111"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","6907009a6def5506aa47a3ae66c19176"],["/2022/07/03/Review/Hello World/index.html","c1a5397460f55f989779de1be7806e43"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","03dd89ddebfa6dd41c16dff72a7a6f8c"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","69a5b5db9309c87878564e906d8853b8"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","691ff0e9e9d1ccd69caaafc649b99cfd"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","70e7bd05abd2a645424f04152875aad6"],["/2022/07/16/Japanese/動詞分類/index.html","4fda8180a68ca564befc60c776eee878"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","51a55a0f9fde4b97ca03545a7da0585a"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","248003cfe7378db3fae5ae01a83b21a2"],["/2022/07/17/Japanese/音便/index.html","78aaf5657009ebc0dde060880162836a"],["/2022/07/18/Japanese/動詞 時態變化/index.html","c8add1a7a11650ddea557aa048cddb5e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","d4293fcd87c512653b488ebdd066344e"],["/2022/07/26/Japanese/助詞用法整理2/index.html","e0b9c0283551cbe3ad60873aa357c257"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","0ab0d899d75d4ad1a2cf1f6dd79e7a37"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","9e59818972188499be39c9601dc1a9c9"],["/2022/07/30/Japanese/疑問詞/index.html","b41e8fe551473b28faec801f8e150d14"],["/2022/07/31/Japanese/助詞用法整理3/index.html","033bd4cc7290e83c70dcec01bf4e07ec"],["/2022/08/02/Japanese/副詞整理/index.html","0e1ba6e798d2c0f0003762401f9fdb78"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","0c1dbe4820a314e8b7b8fee4c493535e"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","ba95ef76b22ef9a16b70ba3b16e58715"],["/2022/11/22/Review/組長女兒與保姆/index.html","f2848634a6850082c13077b0baaa66ed"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","915531c0587e74ae866fef8b517da388"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","19ce5d54e730bcf5826d97348d62a426"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","527a966e87493eca1e309406105e0f38"],["/404.html","9493846298b72caab8b2944f0beb79f9"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","4a8c34dd2f113b03dd546a542c31d978"],["/archives/2019/11/index.html","9b8c928b68aa97421bb43e876b061968"],["/archives/2019/12/index.html","ac16a4d77319f86db51ae91e5632d25b"],["/archives/2019/index.html","5c79b52bf30152a2583abcd63f920ac2"],["/archives/2020/01/index.html","2641441b430538dbd8e52e61020f132b"],["/archives/2020/02/index.html","43e0fab662930ba9f5dc03d274596947"],["/archives/2020/03/index.html","8cfa4b88d521f5d6afeea53206dc1739"],["/archives/2020/04/index.html","d1faf12316bea89ce327b0b9e53324a9"],["/archives/2020/05/index.html","5188eba5b48f530bcb5d1d8ffa058721"],["/archives/2020/07/index.html","20a01b7f184ae20999b710ff90065c6a"],["/archives/2020/08/index.html","1e45548014a73ba6da88ff6c31a36229"],["/archives/2020/09/index.html","e1e9ef687c05446b44f0e827d0d6a303"],["/archives/2020/10/index.html","e5c1a1010a92fb8719b7368e57f77476"],["/archives/2020/11/index.html","51ddf8810981550d2005a2acafda54e6"],["/archives/2020/12/index.html","93b3f255e5616435911857683651ac32"],["/archives/2020/index.html","3ecaba81a16b3eb056c349a941dcfd28"],["/archives/2020/page/2/index.html","5bdaff1596801b85d21e43758c19d5b2"],["/archives/2020/page/3/index.html","36f502c1a14b65fbedc0079f7627066c"],["/archives/2021/04/index.html","7e9914d5e55984ccc1b8177d36bcf6e7"],["/archives/2021/05/index.html","ffb6410268aae30ed34b720078878141"],["/archives/2021/06/index.html","ed3d3c4cbe144dd8794e9911c2e6050a"],["/archives/2021/06/page/2/index.html","a36b3731be151e5ec4ec2389d9ec3d3f"],["/archives/2021/07/index.html","20c3aba5e51ed625685936248ec9ef7c"],["/archives/2021/07/page/2/index.html","5a4736905dd6a7977b195c77f06c59b6"],["/archives/2021/07/page/3/index.html","07c008218a252541f0264efb9c3ad7cd"],["/archives/2021/08/index.html","bce6dbca23715eb66f02376c1a8e5a61"],["/archives/2021/09/index.html","01cd9114f5461ecd706a5d26fdb0de43"],["/archives/2021/10/index.html","275d4736646f20275d02ee671436f84a"],["/archives/2021/11/index.html","524e6f3500c8e0f5ba64f52398f8153d"],["/archives/2021/12/index.html","283bb30a1842fc514f57338ea549e477"],["/archives/2021/index.html","dffa044b126ab7ab3ea74cb95060c8d8"],["/archives/2021/page/2/index.html","c5944284798f8516322fa24b695163bf"],["/archives/2021/page/3/index.html","46ea813e7523540c91ef0b90d2685d90"],["/archives/2021/page/4/index.html","fbb8e9ce020e9a87cc5fb792c1d40f23"],["/archives/2021/page/5/index.html","7e7bf3619dcb6912bfcd2b0d6b704ef2"],["/archives/2021/page/6/index.html","adafcdd74aeea4df1184126764e019a8"],["/archives/2021/page/7/index.html","91e273cd5a731ed4cc1ef94bae4f5f9f"],["/archives/2022/01/index.html","3bff73c38eec39f6b629b3ae31ff218b"],["/archives/2022/02/index.html","914f8d3dd1958b2c368d8b9bc4c5ee6e"],["/archives/2022/03/index.html","fcfc1a673dbced1b9dc9bedd7f46cb6e"],["/archives/2022/04/index.html","1f692f74e9dfbddc93d31c323fd86c49"],["/archives/2022/05/index.html","b380e5f61b4e8c113fead67250fddbc2"],["/archives/2022/06/index.html","277584e06d3b7064103a812e6e7050fa"],["/archives/2022/07/index.html","7246e237ef1587e41636cf5e64506dd4"],["/archives/2022/07/page/2/index.html","0e152d3a2401c91b7b8a9ada27d1031d"],["/archives/2022/08/index.html","97e644703a729f1fb07217cfb850ee2e"],["/archives/2022/11/index.html","6726838307c1d5b911bb751d734c7947"],["/archives/2022/12/index.html","9ef2c8ffe1f770c0bddc77307c84fc8f"],["/archives/2022/index.html","09dc2933c9eb8192241809ae9ab6acd4"],["/archives/2022/page/2/index.html","e7329e36150c988acb75048100e4d135"],["/archives/2022/page/3/index.html","18741ed2afbd6106f52d3e120a778c56"],["/archives/2022/page/4/index.html","e00b76c42df664e47abb0b143b443dde"],["/archives/2022/page/5/index.html","561ff23b8fe4d25ae85b5f41164ed5d0"],["/archives/index.html","718e18f18f3ac230a174eb672bccc151"],["/archives/page/10/index.html","23af6fb6439bea54041ad7cf30b8b86e"],["/archives/page/11/index.html","98014642651917aeec19cc5cd1436d97"],["/archives/page/12/index.html","02e7545bce36de94953f2fb50dc75395"],["/archives/page/13/index.html","a5da0cdafa224ef6753c0c0786288d41"],["/archives/page/14/index.html","5f7964e92d518ec9c09467706e5581e6"],["/archives/page/15/index.html","fc7d0834a69b404bf78589d597ac1136"],["/archives/page/2/index.html","15d8c52e04c4cd6facdd9a10c6b76b01"],["/archives/page/3/index.html","80ca53248f09f38b7a46f6d4c70bb113"],["/archives/page/4/index.html","076d4de1f234e033587818e74837ac95"],["/archives/page/5/index.html","65c64ccf534d8a371692492738d0b724"],["/archives/page/6/index.html","ce17c6dbf2cac73525e03fe491aa43b2"],["/archives/page/7/index.html","7e4b89b2864f3c01b2de23272bb57170"],["/archives/page/8/index.html","4ef8a4ec516d69eeb6b5545aae826c87"],["/archives/page/9/index.html","4e3dc06252db117b6ab5cf68cf0df342"],["/categories/Programming/index.html","2a10e54d747ff23f08dd74e8b16fc254"],["/categories/Review/index.html","32715236a0f2e593f6894311e5c51c16"],["/categories/Review/page/10/index.html","c4680bb9a268f839ad145e77d71afea5"],["/categories/Review/page/11/index.html","22a006ce43471d927c150aee2d10f376"],["/categories/Review/page/12/index.html","164cee98837274ec3f03782629d4e036"],["/categories/Review/page/13/index.html","092f34aef95af0281d5d3667866d08cb"],["/categories/Review/page/2/index.html","0996724a74132d4e1897d12a85a1965f"],["/categories/Review/page/3/index.html","0091fb6634ae28b911dc3a6faa1e41e5"],["/categories/Review/page/4/index.html","3c898bdc57968928547997840b9e35a2"],["/categories/Review/page/5/index.html","46b3c97e9373ff29a022ec9148ea13bb"],["/categories/Review/page/6/index.html","ebf78dc16cc24692862c73ea9b407d04"],["/categories/Review/page/7/index.html","696ef7d5b05af809bf52a543228fbd44"],["/categories/Review/page/8/index.html","347ed65f9cc89311dd53f1cf5394145d"],["/categories/Review/page/9/index.html","bc532618c11698ff26bb9430dd79ca6c"],["/categories/index.html","ff56ffb554ee75a86fcee44212366fa8"],["/categories/日本語/index.html","36e99fc2fe2f3ac58b727c62ed74d290"],["/categories/日本語/page/2/index.html","20997a24345c4c1e497162a040b7ffd0"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","803879c497691e59e6a82b3245b8d53d"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","74a6a514c33b5268a7aaee27ab9ba442"],["/page/10/index.html","c6e75652ed92b131f42253023fa4c900"],["/page/11/index.html","adc6a4a9c020d965e3e3b18358d575b5"],["/page/12/index.html","81688dd91af45aaa9e2a932d4188be3d"],["/page/13/index.html","fa55bbfb16da9535ff646f1f721ccff3"],["/page/14/index.html","41baecf39ac073af45fbb502676da68a"],["/page/15/index.html","3fb2e03ba93c9171e8d546b6e817faad"],["/page/2/index.html","4848913e340f09fa62714ebe738ffab0"],["/page/3/index.html","bac303ff0f393a16b0ab1d5cc8521a79"],["/page/4/index.html","786689b6f44e493c5844268d6b7baee8"],["/page/5/index.html","1a6e789e484861cfc3bc72ecb8c51a76"],["/page/6/index.html","b9ddd521c8615a89c2421f2e828790d1"],["/page/7/index.html","1d7c17dda1aa99dbd59474837cf50b8e"],["/page/8/index.html","692eaa7474a8eba0f0ec1b48c04b9408"],["/page/9/index.html","610109371df16b414fa13b2b9f1ab773"],["/sw-register.js","d3c3e5130478176799356f155696d4b1"],["/tags/10分作品/index.html","a47bc3839d64ece2d65fc03b10597ce4"],["/tags/3分作品/index.html","5c8310dd00ef7ffc52a6b0249d2adf71"],["/tags/4分作品/index.html","51680e47a5b539f93ee88fe633da6a50"],["/tags/5分作品/index.html","31ed6d50c010580ee8d60f4fdae9234a"],["/tags/6分作品/index.html","3fc41d52e25ed6cfd5f42fced06bf41e"],["/tags/6分作品/page/2/index.html","ec28124b1f404804f6de3ec26394ec63"],["/tags/6分作品/page/3/index.html","675c0fa1fdb59017ae58b9274b2fba43"],["/tags/7分作品/index.html","09a7096f2778de3796f4f50dc63d8d77"],["/tags/7分作品/page/2/index.html","e9c71ad5f69108642a36aa64142442eb"],["/tags/7分作品/page/3/index.html","db8ab02fb77e5dab112824aaaa470a0f"],["/tags/7分作品/page/4/index.html","dd096a4fe0f50c4b4800933d6d0fb9ae"],["/tags/8分作品/index.html","4691d015b33ac8e2681f3941814f973a"],["/tags/8分作品/page/2/index.html","5147ed5cde191cc751084ea2de3043a6"],["/tags/8分作品/page/3/index.html","7349ca93db8c52b6e311765edde37b56"],["/tags/8分作品/page/4/index.html","95ca4d3cf6d5e8ae0b6120d177fcde20"],["/tags/8分作品/page/5/index.html","0b146ff640b2ed6a26075cc5a8f81e1e"],["/tags/9分作品/index.html","db6d83b02fc630cec32bb56808b06c3e"],["/tags/N5難度/index.html","d8aeebbbeef1566627a11b778613d505"],["/tags/N5難度/page/2/index.html","9f97f4b9d4d35d09332446e0d5ed2ed7"],["/tags/index.html","8ab7e86852b181f67fd8d61c553ab658"],["/tags/アボガド６/index.html","92d8d89a8d5cf72226c4b1d1c74a5e86"],["/tags/三秋縋/index.html","a890ab9b4a74834ad0d2bfcabb106eae"],["/tags/中國武俠/index.html","ef2c69e9a75e482f5161f9511dc5a41a"],["/tags/中國言情/index.html","8627a78b187a9b24b925c62cd915092f"],["/tags/二宮敦人/index.html","efb2b77c2a70c3439c7b9d9195f71e56"],["/tags/人性/index.html","87a3a1710734eab1fa46821ba42c8e64"],["/tags/人際/index.html","22e6cee8c15d00a37a92eb44c58a36e7"],["/tags/住野夜/index.html","892ccfeb03546f96bfe0972126c06f60"],["/tags/佐野徹夜/index.html","b0731edf30982ed2e8ac57fe552f6521"],["/tags/努力/index.html","fc7eeb6b267077cf316e7043987f604f"],["/tags/動畫/index.html","42190c9b186ca010c7195e63a8e11dc7"],["/tags/動畫/page/2/index.html","c72eb9c5b9edbf72f128e57896a50b0a"],["/tags/動畫/page/3/index.html","8cb3cc9405b53419e21328f4e8a2b92d"],["/tags/動畫/page/4/index.html","5a9a80f6154654ad41247f9e5fe0f90b"],["/tags/原諒/index.html","d1e2f2cd994b3692c528d564d5fb56fd"],["/tags/反烏托邦/index.html","e2bd5bca61f1b8ab571312c62f772b71"],["/tags/啞鳴/index.html","a3c31c0492f282c1d25ce424961ed55c"],["/tags/喜劇/index.html","c7a4b9eaf62520ed050c5a5787033082"],["/tags/夢想/index.html","88af736ad9094f0b2affb527c8938cd0"],["/tags/天澤夏月/index.html","34ff9cf405a817f88132727174eac325"],["/tags/學習/index.html","375932fb509451ac58fe0fb8caf50c75"],["/tags/學習/page/2/index.html","032ae13c1aa516636dd7af305e49e89a"],["/tags/宮崎駿/index.html","8ecd5f16fc16debe0621c86331403785"],["/tags/小說/index.html","f7109816978dce29168684b62d510d0c"],["/tags/小說/page/2/index.html","19869028f6ed36dda34cfba57de03b01"],["/tags/小說/page/3/index.html","dca6e14c62e76ef40239ae21aee7fedd"],["/tags/小說/page/4/index.html","5de4211bea1c2682764817616ad1fa60"],["/tags/小說/page/5/index.html","66ca44412c32928b44e28420d42ba251"],["/tags/小說/page/6/index.html","51c9100b982b1a42c30ad654fb76e003"],["/tags/小說/page/7/index.html","053d0a0064d99f929081d1f191f625e2"],["/tags/平淡生活/index.html","a36da4736be7a947d7d4d48fb53e90bd"],["/tags/幸福/index.html","bef06159bbb28d3958f0db5a58814ab8"],["/tags/志茂文彥/index.html","01ab414ed50a9dea6526a0ace2f52247"],["/tags/愛情/index.html","c901be20423d9ac864c0dd4342f66cd3"],["/tags/愛情/page/2/index.html","9252793082470a3daafe06b3bf9540aa"],["/tags/愛情/page/3/index.html","b435ca1f95e01ff6f8228e3818c9882c"],["/tags/感動/index.html","5827c90ded644ace76ca418b079e85ff"],["/tags/懸疑/index.html","2c2dd3b2035b89c453f7962ada3fffdf"],["/tags/懸疑科幻/index.html","97cc7c94df4dba3d6593da7537eb0f4b"],["/tags/戀愛/index.html","486bade8eb6bd55e7125cb17c99d36e0"],["/tags/成長/index.html","0008597ffb22a9a61a76bb0de5661b4f"],["/tags/成長/page/2/index.html","a9d8ba8dd59f7061e1f7323dbcfda1da"],["/tags/戰爭/index.html","7876cfd9d0e7d9d45730e9d606144a7c"],["/tags/推理/index.html","3005054b51c439b17cab9a0a25de8862"],["/tags/搞笑/index.html","478e82b096888504721f6b20c1ad2f73"],["/tags/救贖/index.html","2e2f56485eed0fbdbce746eb69d41f32"],["/tags/斜線堂有紀/index.html","514cb891a374747296319194a0c37d65"],["/tags/日常/index.html","9187fecbae41aff0551b19fe5bfc3c88"],["/tags/末日/index.html","f216a0f39e3d5c3eae8d24d60b66049b"],["/tags/校園/index.html","0981399667ef804cd4b01ab9c037db14"],["/tags/武俠/index.html","ab1636ebbaf56795214c01afa051da88"],["/tags/武俠言情/index.html","4e278119ea5515e79314ff1370f2cf44"],["/tags/漫畫/index.html","d505517d7fc3716a645fd0c6a9782736"],["/tags/生命/index.html","fa334feb04b94fff4659c6c7adb03af3"],["/tags/生命/page/2/index.html","37aa932dd5648adad0b2d8e9429241d5"],["/tags/短篇/index.html","1e0103430939e305008ae818370875df"],["/tags/社會/index.html","4ac819482ad44493803a6862dd132396"],["/tags/科幻/index.html","ee2c9fd6d42804cb2bd48467827f63f5"],["/tags/童話/index.html","2fceb7a7dabe7ca76ad6449d8cfc0992"],["/tags/競爭/index.html","f396e786feeac0cb33ed38255f3e2313"],["/tags/自我/index.html","3e3b0d165f21d421075ec5e7942907b9"],["/tags/自我認知/index.html","e5daa9f97af687c70bfa4cc1be61b4d4"],["/tags/葦舟ナツ/index.html","30d2c52e3882e3ff45e67a3b802fe333"],["/tags/藤萬留/index.html","c7f5d8f38886ee3b723dba5fd34693d9"],["/tags/親情/index.html","0ba5c0d1d612f00b0d7b0ddf6cb1ffb9"],["/tags/雜項/index.html","4b7aa82a56b39935807686f40046ee69"],["/tags/電影/index.html","48c9753fff2c4d76d36e7cb15a3529e5"],["/tags/電影/page/2/index.html","159aff8693a13ee79c3104f1c6edffbe"],["/tags/霸凌/index.html","5ab74bcf047c24364e3b6c5956a4a53c"],["/tags/青春/index.html","a50f4fadfa9a16f52510712d3656c961"]];
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
