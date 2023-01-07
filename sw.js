/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","ba33e43e3248dfefced7090ff7882816"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","91a781272030662191c58aa3366d749a"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","1f45aeb53ac024d22d75e594da0492e7"],["/2019/12/25/Review/無法計算的青春/index.html","6f846b2704fdf6be4a78bb3fa2771915"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","65c6cd0647d30f6dd44fda263a43aaec"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","4e5bb8a72b8755c308dee4b2271426ee"],["/2020/01/19/Review/下雨天，不上學/index.html","74406990962480d7dba67b64eb27788a"],["/2020/01/26/Review/三日間的幸福/index.html","d1f49bc9296c0d32d4c30c4893ecb882"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","117ba365f51e71aff0bbfb7e3c37b9e1"],["/2020/02/09/Review/青春期超感應/index.html","49c59cf59966c8f2ef17d0879cd49de0"],["/2020/02/15/Review/又做了，相同的夢/index.html","d80e73b900d8a5f0f31dcd132349f21c"],["/2020/02/22/Review/回憶當鋪/index.html","c5c2253199263e357a162295a5443fc9"],["/2020/03/22/Review/不適合自殺的季節/index.html","d7449771932cc0bdc80334aa138ed466"],["/2020/04/26/Review/我們都無法成為大人/index.html","a5e28a74bf554754c4605cfb80d5867f"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b082718d4bfd8ebf24f8652ab69d5fab"],["/2020/05/17/Review/人間失格/index.html","cc61877590900596c18b031d3d42d36b"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","0fdebfd607521e245c2bd130fb627cc0"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","2c8d4cca511aa46d9436cd14f0bf1679"],["/2020/08/01/Review/銀河鐵道之夜/index.html","2058f065890b48a620daed6d6e30f928"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","b46baa5c2b5f941b0d8f353848e729f7"],["/2020/08/16/Review/15歲的恐怖分子/index.html","798f0edf99fbcc20941afe86fd60400e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","673e8e14463e513797b7ea8083897b0d"],["/2020/09/13/Review/羅生門/index.html","bda5ead6b3b65e018950910020bd0614"],["/2020/09/20/Review/闇夜的怪物/index.html","04ef56b075ae81a19fd96a00f6f9e8c1"],["/2020/09/27/Review/14歲，明日的課表/index.html","56c1766983fc9c5bbc085d5711ea4a2b"],["/2020/10/04/Review/致十年後的你/index.html","977d04afafa892a366383ae50257c552"],["/2020/11/08/Review/滅絕之園/index.html","3d7bd86f6afdba3b4167374a4ddf6c3f"],["/2020/11/15/Review/將愛拒於門外/index.html","b4a3d1341b4f1414e759e1afc648f2f4"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","40def43d620ec3c987918a6050b9c014"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","ebb29c1a6aef7ef8d7ddf2930bd486d9"],["/2021/04/22/Review/道印/index.html","59c7fc42b9bbe5760d214df5b0b4464b"],["/2021/05/03/Review/戀入膏肓/index.html","a52dfbd69129bcc823cf46a1921d6183"],["/2021/05/10/Review/Dice/index.html","049d45c26383186bb30b60393273c92a"],["/2021/05/15/Review/魔女之旅/index.html","c487fa140e2b08355243b6efb9d086e8"],["/2021/05/28/Review/戀愛寄生蟲/index.html","f807decac16bced468a041a84999c6aa"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","a3580b20b353bf5f581f60232d666db0"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","9bc12fd11c8073911a43f9823f38035f"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d448bd35540eb3ad98e96626f5b5ebb4"],["/2021/06/05/Review/流浪的月/index.html","15d2f48be97384e2aa18237816087e84"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","38d419e70c2d78e451a217811dbe16cc"],["/2021/06/13/Review/第一人稱單數/index.html","71fdc3ffa16f40ba1f2d0959a6de01ad"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","d1f4242b53c0186cbd33b8a59164727a"],["/2021/06/16/Review/願你幸福/index.html","6fcad39e883fd4b3e745b678337e3d60"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","5ecc9f7a7acbc98210e6fc31971e9152"],["/2021/06/21/Review/神隱少女/index.html","0d3f82b92dec346776b538f0ac35b2c4"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","808637382a79d65b77fa0c094f5ae815"],["/2021/06/23/Review/天空之城/index.html","e2a70917e3d032ac15dd6cc717e40e58"],["/2021/06/24/Review/魔女宅急便/index.html","b3086e3f1fd6c9a90aa662e1ac3b7169"],["/2021/06/25/Review/借物少女艾利緹/index.html","d436ed37c1d95d7046c52840a8bfd7c7"],["/2021/06/26/Review/魔法公主/index.html","4e85db7ecc41831f07ff2ecfa0c8cb14"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","39262eb39201a9f4f03dfab03351a889"],["/2021/07/04/Review/飛雪與劍/index.html","7ae6ad19c8b1fe6803b863b2c3775952"],["/2021/07/09/Review/地球防衛少年/index.html","8122f56919df960a06a5c67f2d0344b1"],["/2021/07/12/Review/Angel Beats!/index.html","c743d3afc5b71181a41c753dbb6ea1c0"],["/2021/07/13/Review/Clannad/index.html","04398189ddc6c119374ae59626ae36ee"],["/2021/07/15/Review/AIR/index.html","38b185d1e8be6f599cf1bc0b7b6e9e0d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","9d1c210d5f53c9af79c797c9c54f08f8"],["/2021/07/15/Review/螢火之森/index.html","8997c0babcf388405a8f8685014205d5"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","40878da5d61a0b53f7ea799d8f62faad"],["/2021/07/17/Review/奇蛋物語/index.html","6be3bb3d0fb8a126c370e9e615e28c1d"],["/2021/07/18/Review/Vivy/index.html","bf8b005d06433d1463dbab3fed3a2d04"],["/2021/07/18/Review/請妳消失吧/index.html","2aa99437260698a8626c2acc635fb46b"],["/2021/07/19/Review/漣漪的夜晚/index.html","a8689b46475260642e3bd758c37960a8"],["/2021/07/20/Review/月色真美/index.html","32eded88bc1ffae03e505588342fd975"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","f32243d4d306fa4a3a5aac9e342d0841"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ce393998ba5082bd7591071f60923138"],["/2021/07/22/Review/罪惡王冠/index.html","883fef119c6dcc0fade978f08323dbe9"],["/2021/07/23/Review/弱角友崎同學/index.html","66cb1b1ce03f4aaeb4e6d64dad047db7"],["/2021/07/23/Review/惡之教程/index.html","7f7f5a597b02205582d7c152844efb33"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","cdcb3998e332fce9e735846f5fcee5c7"],["/2021/07/25/Review/魔王勇者/index.html","ea75cb2c0545ba5e37595b9588bf58cd"],["/2021/07/27/Review/一年A班的怪物/index.html","98c250c6e37e8da876f081da98fc7f68"],["/2021/07/27/Review/奇巧計程車/index.html","638e2979e053fa0883246be4273db905"],["/2021/07/27/Review/專情的碧池學妹/index.html","37af88685223e6cff781202d6766f7ff"],["/2021/07/29/Review/只有我不存在的城市/index.html","b227f3421e0693c69cc96d306b4ec2d9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","adbfa6128b44ef0cd21874646334716c"],["/2021/07/30/Review/可塑性記憶/index.html","3c13f99546c0a56956e21505bbc2aede"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","af398e90c22a7008c689c438bdae3238"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","99ee9af95a7d0f28939114b7b0b8eec5"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","d8a709fe060f4ebef66b4e65df5acbab"],["/2021/08/25/Review/清戀/index.html","1868db698a0f15557ceca87c42dace9a"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","c096368ca268848cee5b4aad7adc206d"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","ef62b3f4f882b3fddc06d2d670c9f90c"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6c17dd7e7aeb5255395b3f86eff34d80"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","a267667564544519f76c5fb3da37bd30"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","f27bdf2dd368dd68ebf8a50b3fd77568"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","c83692d7a81ebc48ee33b9b32c462425"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","dd406b2f620f2443db708fb6081ea8e5"],["/2021/10/16/Review/龍與雀斑公主/index.html","6bdc1ee3eac6dfeaa4acfdae72896df3"],["/2021/10/19/Review/孤狼不想開後宮/index.html","1645671ff6f68d0fdfbdd926dc2fe820"],["/2021/11/13/Review/徹夜之歌/index.html","c9e640714665e3bae9316d05b4c0432d"],["/2021/11/24/Review/武煉巔峰/index.html","f5d61989fccf83cf800101358da1d346"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","f73fe2d9fc1f66fd5d1735b31a48eb61"],["/2022/01/28/Review/神醫凰后/index.html","5798dd69a502b09bfc1a5abcb1174bb7"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","44356e855af8a9b39756bc1bc59a5d85"],["/2022/02/13/Review/夏日幽靈/index.html","d560ddb41eb69d67721565f2f86bfa70"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","d7389e8786bde890b74f0523032580c1"],["/2022/02/26/Review/賽馬娘/index.html","74e13375fc2cae79591cd8651d9d404f"],["/2022/02/27/Review/大欺詐師/index.html","b959e3e3ae281ab214ba404ccc4fe71c"],["/2022/02/28/Review/前輩有夠煩/index.html","bee060f952839c6932749ecba3574cab"],["/2022/02/28/Review/碧藍之海/index.html","638f532bc9c8ee111e3b532ef66caba0"],["/2022/03/05/Review/落第騎士英雄譚/index.html","182dabe4606ac9feb6fd0f482252cfff"],["/2022/03/06/Review/Another/index.html","1a0382e3fa5885f3f33b6e39e9e581c1"],["/2022/03/06/Review/入間同學入魔了/index.html","bf22b2bf96889c2ce860be691f35b360"],["/2022/03/18/Review/再見宣言/index.html","04f356e2616a89a8707cf8690500e3cd"],["/2022/03/23/Review/生若冬花的妳/index.html","eb575f3438a655640eae4de290edfbd6"],["/2022/03/25/Review/天之弱/index.html","e1abdfe09d80031a756dc6a5a6ee8769"],["/2022/03/31/Review/滅了天道之後轉生/index.html","5ce0145e12ac90e53f88fc8cee8e4626"],["/2022/04/30/Review/泡泡/index.html","fff156b7f39d88d437122555bbcf78c9"],["/2022/05/04/Programming/Dynamic Programming/index.html","3f106154fc2939c123549c8cb3dea762"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","8fa25c43443356399eedda8b59683360"],["/2022/06/13/Review/偵探已經，死了/index.html","41935b6e6324106aae0c577d5960f94b"],["/2022/06/14/Review/黑色子彈/index.html","6b96603fe52bdf3f4a9a2009263b1c5b"],["/2022/06/15/Review/黑白來看守所/index.html","eedaf92b52756d3697b75ec98754c03f"],["/2022/06/16/Review/虛構推理/index.html","42b5ca807b001b0bb5c4452c47933ce0"],["/2022/06/17/Review/戀愛與謊言/index.html","5fc0901f8cbcba86bf91933a14597b61"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","9484f371ed2ff4bfc3cad96e22542781"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f95bde1f7911f11a774c06c47d536fab"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","e1aca717970936b9183617f5b14f4558"],["/2022/07/03/Review/Hello World/index.html","0905e3ad269caa7b87ee78a6d0a0c57e"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","da859ef4095021d473b42b6ca53ea91f"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","47b996c886c2e5d9739f3381d3fd8ffc"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a268c35955f6c46f216c43b4618f96f9"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","307c2fa77b3c75be4f42380fd795c67e"],["/2022/07/16/Japanese/動詞分類/index.html","6c2468a42f1ad8ba5757b0da9fed4453"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","c5d7db7d2879c0f7815229de162cf09e"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","d092520636801d40d8fd12128500c7f5"],["/2022/07/17/Japanese/音便/index.html","52690f8a17ac8cfd7eb37bb5bff65182"],["/2022/07/18/Japanese/動詞 時態變化/index.html","47e11fbbd87651524e56cacc47bb001b"],["/2022/07/19/Japanese/助詞用法整理1/index.html","f055bdf00285bcd94e3f8f60cd1f220f"],["/2022/07/26/Japanese/助詞用法整理2/index.html","5e5395b2d51f3e76cd3520850bd7194d"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","f0163671e5fb7db95e64613b8857ad4e"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","5ed1e8bbff1ce08a9da0d4871a131ad3"],["/2022/07/30/Japanese/疑問詞/index.html","a33ae858fead429acad0dd0bbe9c55f0"],["/2022/07/31/Japanese/助詞用法整理3/index.html","146a2101a913d407e5768c7b63fa3ce3"],["/2022/08/02/Japanese/副詞整理/index.html","05341f70271520cb5ed24152cf533dfc"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","0f3b1adc6582e5021816df1618bd238b"],["/2022/11/04/Programming/Data Structure/index.html","daa8c5734756659aad194160cea03681"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","53fb45b1742186745579ee85a9079470"],["/2022/11/22/Review/組長女兒與保姆/index.html","156b76708043421a4ca0cc80c281c137"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","2dbcf4dfc636648767db9b8819fbb95c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","b4691ebf3bec0d1400ccc2927d6e7012"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","e4c649dc7b9d5b4bd07ce74cb05179ec"],["/2023/01/01/Review/あの夏が飽和する/index.html","3ab906826efabc5421ce13d8df6d49a8"],["/2023/01/02/Review/孤獨搖滾/index.html","f5968913c1dcf59321089f42c665295d"],["/2023/01/03/Review/來自深淵/index.html","50550adcc4e3b9e1218d50fae769fbbd"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","2fec1988b3ce363d8efa32fb93f67299"],["/2023/01/05/Review/處刑少女的生存之道/index.html","1e205c52e980b493b34c2933372c84f6"],["/404.html","85f1d76c62f8d9692f4cf1adad2489f0"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","7bb4be812280f827b943b05e60213c70"],["/archives/2019/07/index.html","49986a29e11db1f844334370ee30e10e"],["/archives/2019/11/index.html","d78f3f7c8c4e19bb1dd66fae6ad6d701"],["/archives/2019/12/index.html","faa4a43f3c5265feeb8d6e715b6660e5"],["/archives/2019/index.html","2a91c128fba15351ae78a3d8fc6751ee"],["/archives/2020/01/index.html","0060da9fc94b129d6307746ba8eb1803"],["/archives/2020/02/index.html","b4df98a91a857f5332f2e4b11ee13bd6"],["/archives/2020/03/index.html","81d047eebd43f2c989396b852f076f7c"],["/archives/2020/04/index.html","dff97a1d5f2233b4b66940c09a614b53"],["/archives/2020/05/index.html","f8e4af67e2cdbea313bc8b109c0c2557"],["/archives/2020/07/index.html","a38d4e19acfb7d63d0ca2ae278d19318"],["/archives/2020/08/index.html","905b4968cefb48e20505147ec20f7d49"],["/archives/2020/09/index.html","6cd245f8e95c0f99d1f154238927b433"],["/archives/2020/10/index.html","f1cf1ea47f444fa38d1338c3b0aea101"],["/archives/2020/11/index.html","0c3560096d88969ebb4cf555ada9df39"],["/archives/2020/12/index.html","51385ef3fef6aaf5b8cf0c9012f8d874"],["/archives/2020/index.html","9f32566a35893966692a53f9f4d94972"],["/archives/2020/page/2/index.html","cd09e7878e3eb88ee2672290cfe91f6f"],["/archives/2020/page/3/index.html","b6feebcdd015b267dca180296b7cabf3"],["/archives/2021/04/index.html","e419f72f1b6da70a32d6ca803c13c862"],["/archives/2021/05/index.html","3e209bdcae909dcbb037c9b1e0c1d9cf"],["/archives/2021/06/index.html","a60ac11c7705f2c6c7fd587302098531"],["/archives/2021/06/page/2/index.html","e64dd624b594583892e8ae6d1d53bda0"],["/archives/2021/07/index.html","ef8067bd1ebb114abb5b51f6d2e4b366"],["/archives/2021/07/page/2/index.html","f704c336c94be237ad9ec71868a6df2b"],["/archives/2021/07/page/3/index.html","b8fbff3d56e9ca29daf432746df2ef98"],["/archives/2021/08/index.html","c11b6c965af7189dfb02947441d430a1"],["/archives/2021/09/index.html","d6d811dfdda80ee998b703141afc7a10"],["/archives/2021/10/index.html","44edacf640aa3b2500ad3ef68204576e"],["/archives/2021/11/index.html","fbc30a975626ba3a5bbaad95137d8cff"],["/archives/2021/12/index.html","f08f68b7095c014deaba292ffb428eb8"],["/archives/2021/index.html","4a5f79ba04e0bb37fb38f2155b322e32"],["/archives/2021/page/2/index.html","a855ff098488da588b4262271f6f28ee"],["/archives/2021/page/3/index.html","2ff835ab3fa4a4bcb2291cf457b06fbb"],["/archives/2021/page/4/index.html","e42ebcbca0d07199e040c99398f6b03b"],["/archives/2021/page/5/index.html","8cdd93c7bbc9f3a100a09f23e6200c70"],["/archives/2021/page/6/index.html","0a8189be22e204db400c8729c8044ded"],["/archives/2021/page/7/index.html","146a39994a5d688179b908aa089a9929"],["/archives/2022/01/index.html","126f9c8ff40061a19233b578be7815ff"],["/archives/2022/02/index.html","4037be3e2d7f718eeda17df11d192c15"],["/archives/2022/03/index.html","124e7ddb63e06e3eb376ffdaaeb3fe26"],["/archives/2022/04/index.html","1bbf2c4a88f603560f85629e0d91afb3"],["/archives/2022/05/index.html","d4390fa26cc803d1689f1d518e061b4f"],["/archives/2022/06/index.html","7c62c0fd2ae59abed4a5cc607e5a05aa"],["/archives/2022/07/index.html","be7e0f59f8b2e394f755e6e81f2963ba"],["/archives/2022/07/page/2/index.html","faf989493d0497bf3604802c7e6d358a"],["/archives/2022/08/index.html","46b9ebf204579655471ff2829e0e4abe"],["/archives/2022/11/index.html","df160ee48bf5cfcb4f74cbfe13175363"],["/archives/2022/12/index.html","89d95a8fc615ec25ba754521c067ea30"],["/archives/2022/index.html","0b0e8f5310d55e81b4ab9afc5914af78"],["/archives/2022/page/2/index.html","d59f7115fbf6e3a05d6baa3fe8ed2fba"],["/archives/2022/page/3/index.html","badd6891294f4098b8eda29fd338391c"],["/archives/2022/page/4/index.html","2c9f77c296e854e4b292494b064d9597"],["/archives/2022/page/5/index.html","3c030a07a8560bf4faa3ac6df185c5b1"],["/archives/2023/01/index.html","f31dc215d2197365f50da8d6b5dbe566"],["/archives/2023/index.html","8dea7954ad14dda9158df2a904aa2144"],["/archives/index.html","e9df84b68e9e573c6813e2b2d880d8e3"],["/archives/page/10/index.html","6948f515882c85077afa80471560580a"],["/archives/page/11/index.html","613a5849b979879d5974f05695d0179e"],["/archives/page/12/index.html","e91f884db35e2ef34f0965199e176a25"],["/archives/page/13/index.html","ee2935d090fc8ad35a05d57b4d6169dc"],["/archives/page/14/index.html","a3a2ef82851d787d38a56722b5819d84"],["/archives/page/15/index.html","4509f7d1584948a59818ea889412c8fb"],["/archives/page/2/index.html","217652f02439c5019a0f6f88dd30a64b"],["/archives/page/3/index.html","18c59ad76f26520d9faf74bb226d2819"],["/archives/page/4/index.html","5e13a570bd6095f6e4b67ae0b7b67465"],["/archives/page/5/index.html","138218243b43d20a8fef90f15be94a84"],["/archives/page/6/index.html","5082a7887b701887a9c77ff174a43381"],["/archives/page/7/index.html","f13db7fc7147e5b1f07bb1487b062958"],["/archives/page/8/index.html","820add4115cb4e48ce061abb63e10eb9"],["/archives/page/9/index.html","49c8d15e728556561191df8cfcd742ab"],["/categories/Programming/index.html","4e4065cf9db979611f841f83cb8099f5"],["/categories/Review/index.html","cce55a54927acc120df6d0db9d7b01bc"],["/categories/Review/page/10/index.html","20a9b291c2ee7eb8a72816e6a96c0d77"],["/categories/Review/page/11/index.html","b8170326f738d9ae35d77b7b7b7e3ba9"],["/categories/Review/page/12/index.html","31384c1f5a286031a57aec4ef8cfdf24"],["/categories/Review/page/13/index.html","0e934847930eebba592706944f716e00"],["/categories/Review/page/2/index.html","d29f4652f031abc9c5db94ee4a1fcbae"],["/categories/Review/page/3/index.html","3871da984d206038f588e656ecabf944"],["/categories/Review/page/4/index.html","46ac2411cc3021908faa4acf275b781d"],["/categories/Review/page/5/index.html","3e5c8ae56986c68fbcbb18f1aa83fa22"],["/categories/Review/page/6/index.html","756737a2996b67c74d580cf11aee7a2c"],["/categories/Review/page/7/index.html","590936c9d6ee6b3d97145409266e7016"],["/categories/Review/page/8/index.html","5ad71c5ebd4e4f0f698d874af1cf066b"],["/categories/Review/page/9/index.html","f9ff6ec7060172632f518020856d1451"],["/categories/index.html","d615a965fe003777733d8094f6f9863a"],["/categories/日本語/index.html","ebadc5729179c371b1da47f4ea3ed8c4"],["/categories/日本語/page/2/index.html","accfeea15ef8184b5e880ba1161f5eb0"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f7786b9ae6396472c17beb14ad00324f"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","59f6e32120518128e76b81096802b622"],["/page/10/index.html","e94c5d97c95c22dd35cac66913a6e6da"],["/page/11/index.html","9bd413d9708be83a6b3ffcfa267aa6f6"],["/page/12/index.html","db56567ec4ff6f834cfb2d9b08308fc1"],["/page/13/index.html","ece6be2d86ca495a1ea57c10be5cc65b"],["/page/14/index.html","f5b2a262cdf724a1fa397812ffeb4f64"],["/page/15/index.html","e00d5f265d9bbe6006a215e0f5d1e4b5"],["/page/2/index.html","fb36546c084d37469ee2c6374698e281"],["/page/3/index.html","9f1e4a330eac4b253bf46eb134617100"],["/page/4/index.html","650094be70d6543a81c711622a400eb9"],["/page/5/index.html","25bdbdde92fc770e5033733f2536ad88"],["/page/6/index.html","372fce392b7f732d10f56bfcee25fc58"],["/page/7/index.html","9140261795c47e03cf0c92641b3e3634"],["/page/8/index.html","0e0373fd101b77e767f12ab1399b300b"],["/page/9/index.html","0b7dda3ee9d61ba20c9ef0fd53a26995"],["/sw-register.js","19c9fba8f339367703863cdaa150ad4e"],["/tags/10分作品/index.html","4373ec4e21cfe98e36b4b619941b4440"],["/tags/3分作品/index.html","b28a531c20f7395615aa0701794e9883"],["/tags/4分作品/index.html","7da0ac0bc58e1c6010883ae511ed7e89"],["/tags/5分作品/index.html","735805a6f185a57736cc4e25c254f6af"],["/tags/6分作品/index.html","fd185276768daa9bcf9561cadc71dd28"],["/tags/6分作品/page/2/index.html","006518a811727b2164b75e3213f3bb30"],["/tags/6分作品/page/3/index.html","589d7a25e4a71de1cfa2de82b9856b14"],["/tags/7分作品/index.html","b3a288faecaf35181e6d80d785c0d3fa"],["/tags/7分作品/page/2/index.html","59edda33c9d20a518b3736fa213001ac"],["/tags/7分作品/page/3/index.html","18be823574eb1bccb3c76052b2551e9f"],["/tags/7分作品/page/4/index.html","5147169e8d8bc9b2dc4249ccc93244ac"],["/tags/8分作品/index.html","72eacd6509e542d3464e54294186abd5"],["/tags/8分作品/page/2/index.html","498f1c7109dfc74c17ebd3a4ff566ab2"],["/tags/8分作品/page/3/index.html","de6cce470cdfcc3315535784079476b4"],["/tags/8分作品/page/4/index.html","9a3fea1655e71a710207f9a108533259"],["/tags/8分作品/page/5/index.html","2014e9b2ee180d894d8a8217c177ec06"],["/tags/9分作品/index.html","bcd563fa986c5b1b11328b51b4362cbf"],["/tags/N5難度/index.html","be970e41285291040a6c40bcb265e72e"],["/tags/N5難度/page/2/index.html","a79aa212f3ef9e042508b60381b71083"],["/tags/index.html","701f9ea0a402128a78d85e6e1ce23984"],["/tags/アボガド６/index.html","30eeee173957714935481a9911063cfa"],["/tags/三秋縋/index.html","e8dc02a9d16112c7c5e032e38510cd80"],["/tags/中國武俠/index.html","68b085854b6e3b9aeba1672236fee862"],["/tags/中國言情/index.html","be73070bb99316528bd6e11fdc84de0e"],["/tags/二宮敦人/index.html","0d070f6c74df5aaa714edb8173442bce"],["/tags/人性/index.html","a80e4aeb6e8d80a7df00f00e8264e684"],["/tags/人際/index.html","e94e03313e15920a999730da8c8c900b"],["/tags/住野夜/index.html","ebdab98e4adfe7ea255a5872a7ee5067"],["/tags/佐野徹夜/index.html","36da1d4225e80fa2744c86182f5570f5"],["/tags/努力/index.html","470efb0a218791a26ffefb19ca6cff34"],["/tags/動畫/index.html","be39e998607601cb9cc5d03b46265da7"],["/tags/動畫/page/2/index.html","513a057541ea408961c4c63aa09c843c"],["/tags/動畫/page/3/index.html","b5727fff00ced2dc1cca553051211015"],["/tags/動畫/page/4/index.html","0bd31f5038d5c6dadc99590fbc014298"],["/tags/原諒/index.html","bc39067481ca5faf679bc52dc0963e48"],["/tags/反烏托邦/index.html","b6a8ab187ff3362f12e72e28691fdb47"],["/tags/啞鳴/index.html","2fe5235569b49e8c6bea6cda5895f9d3"],["/tags/喜劇/index.html","551aad528f9ac5c42e7ec5d72afdccbb"],["/tags/夢想/index.html","b4fc364b1171143ae5575019ee4d5d25"],["/tags/天澤夏月/index.html","cc85dfca0bf39925e12a4ac27806677b"],["/tags/奇幻/index.html","d0a3b3867c24751f368548d2939260bd"],["/tags/學習/index.html","1bea12a8a13319c9edf013f958405614"],["/tags/學習/page/2/index.html","d1358b9a81d87db39bc0898d3f6b15bb"],["/tags/宮崎駿/index.html","e01b2a5b2178ecdcc5397c7c530f7250"],["/tags/小說/index.html","69f9b13c7f77ea398751745f4f74ebca"],["/tags/小說/page/2/index.html","ef2a2ba07f460831488f122503959b20"],["/tags/小說/page/3/index.html","60607a29e9f709bd74b343caec8ed2a3"],["/tags/小說/page/4/index.html","9c67545dfdd33340615fa229d8503728"],["/tags/小說/page/5/index.html","bea631d3edc11bd679792d62d45ac378"],["/tags/小說/page/6/index.html","bef912fc30de555add740c8bc4bfeb36"],["/tags/小說/page/7/index.html","c01e6aa34248fd26a22572d32bf93313"],["/tags/平淡生活/index.html","ef1d0b40b60ee3b6229c0651483bff6c"],["/tags/幸福/index.html","d4aaea2c13f569b1bce84f6a34839cbe"],["/tags/志茂文彥/index.html","5c44d4b36d7d607fc7f02ffdc5de8491"],["/tags/愛情/index.html","7c289218f438156a7cbb9e7dfa2990e4"],["/tags/愛情/page/2/index.html","4d35ab0d1cdfc06eff363c3903c1ad06"],["/tags/愛情/page/3/index.html","6d72aa3a8afbfe5afd1d080d7508289a"],["/tags/感動/index.html","595487800251425efd2f27dbee043a39"],["/tags/懸疑/index.html","c5831e220b52e4da38673f44de06af83"],["/tags/懸疑科幻/index.html","27b0a7cfc6e3ba61c2ea6d5fb0596b7e"],["/tags/戀愛/index.html","125934609221615b70bc64fe215000c0"],["/tags/成長/index.html","1e47fa32b12aae9ea333e5fe1fa41f5c"],["/tags/成長/page/2/index.html","e914c9f7500b1f9f23e9800169ca565d"],["/tags/戰爭/index.html","3028423eda09fb7cb22d4203cf243cc5"],["/tags/推理/index.html","bf794c157493f99d2b1a7b97c0624c7a"],["/tags/搞笑/index.html","968a3761465f8f813eb4e32f0da73b87"],["/tags/救贖/index.html","d1158be21b9bb112bc2cdae00506aa80"],["/tags/斜線堂有紀/index.html","5c0b9204a17f747b06fff75a7b5bc444"],["/tags/日常/index.html","f90a798dede02045ee32735a64d7c599"],["/tags/末日/index.html","261664af01f5868aaa03c13da04061c6"],["/tags/校園/index.html","927136cd14c2af14578b3b3d488a8619"],["/tags/武俠/index.html","ac15ce78de0a2c71641b662cb8e15488"],["/tags/武俠言情/index.html","69b72ba57a2df710d013c6dfa9ca73a4"],["/tags/漫畫/index.html","916bd575a45235902c7e8d79af402ce2"],["/tags/生命/index.html","dc5670eacd8658c3a577e497fb7c5490"],["/tags/生命/page/2/index.html","e437ea6a8450c22ab43e89264cd5d562"],["/tags/短篇/index.html","86684eb62054bc74fbfd0257d328ddf2"],["/tags/社會/index.html","155084212f1a9266b8fcec2371a4ecdc"],["/tags/科幻/index.html","35266f028e5df11ffbc9bb607a9398b1"],["/tags/童話/index.html","5403f5339f2b3a3db36367a7a748a0f2"],["/tags/競爭/index.html","510cc15a8d55a1aa8a72c335a914003c"],["/tags/自我/index.html","065f1d5a86b29a257e413b9931cb723c"],["/tags/自我認知/index.html","4dbe1b5c5c11895f74f33e4d81a8027a"],["/tags/葦舟ナツ/index.html","d5d6628a53ce3b21c56a2bc8cb8f7aed"],["/tags/藤萬留/index.html","3335184c035a0971a342ec1e8c7b8a61"],["/tags/親情/index.html","6f894a647fca04c37a4393089a8306ff"],["/tags/言/index.html","3923f90dff5e4ce10fe4c2d74e11d834"],["/tags/雜項/index.html","2aabdd4715451c25810033c5d96b3690"],["/tags/電影/index.html","697eb678c4f74f18f062d8d983201871"],["/tags/電影/page/2/index.html","29ff5b807b56182f1f699aeb865f5af9"],["/tags/霸凌/index.html","c7c35ee3d67afb2dec8c44c17e7fec5c"],["/tags/青春/index.html","a7151626fd451dbd2f1d52ff8e20353c"]];
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
