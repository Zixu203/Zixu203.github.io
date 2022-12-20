/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","ce91f91ce4a427cc3092cb5e31eaff26"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","d47b24d1d83345e58d34aa75a987111c"],["/2019/12/25/Review/無法計算的青春/index.html","6bfb944a1a55d64b38a8d5bc2c5b02f4"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","4ac2cc5daf863cf5a4d02fcc6cfa688a"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","743063512e1df3f4c5a0d70f48271bd4"],["/2020/01/19/Review/下雨天，不上學/index.html","3b9d7e800a8e5f932fbea184bd3d42fb"],["/2020/01/26/Review/三日間的幸福/index.html","45cab8cbeef9b8bd7d225d1c4d7df5f2"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a1668c5d6d64ef9841eb1bbb7d2ef8ec"],["/2020/02/09/Review/青春期超感應/index.html","eb26c3e0ca72832ceb4100321e10505a"],["/2020/02/15/Review/又做了，相同的夢/index.html","d874bc42c8b9fb28a7cc38323964a332"],["/2020/02/22/Review/回憶當鋪/index.html","2d1491e26772103a17b826b15e4893e1"],["/2020/03/22/Review/不適合自殺的季節/index.html","3134a9a846c91352ab1d490b45f57725"],["/2020/04/26/Review/我們都無法成為大人/index.html","0bc9d53eff85ac1cdd3e37c6ee026354"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","3c933f249e7352590c642a72bd9d9fdd"],["/2020/05/17/Review/人間失格/index.html","fc7d44e4efae688f77d55a2586dca6ee"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","f7714fa24e69890384b373257b24612e"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","457330f8faedb734821a8ebdcb363b46"],["/2020/08/01/Review/銀河鐵道之夜/index.html","48acc5c6e42b59164e8b2079e730efeb"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","306d966f2a3ad58bd3f69ca7f8cb8a79"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d2ee9a98e7fc9c0491c0e1747da8a01f"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","c008ed5ebf6308411645af406c8ff494"],["/2020/09/13/Review/羅生門/index.html","5bed5dbacefeb127740d9b66ef2c8b9e"],["/2020/09/20/Review/闇夜的怪物/index.html","875a3a255b60f09ab643e60d2e99d00f"],["/2020/09/27/Review/14歲，明日的課表/index.html","146235d36af56c0727d864c74a28c499"],["/2020/10/04/Review/致十年後的你/index.html","9d8d9a3548bef3f5c7e892c987aded40"],["/2020/11/08/Review/滅絕之園/index.html","ab7e3d412b4fbedcd6bbb476c8773b45"],["/2020/11/15/Review/將愛拒於門外/index.html","03f88c269a7164a0aacfe65328303c28"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","dc01a405fbd1e86cf2ee2c46e86d2cba"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","a49b1c48b43c1f8ba1f9bf20a3dbfc2d"],["/2021/04/22/Review/道印/index.html","b32a1a33ea04f971f2b41013f888ecb4"],["/2021/05/03/Review/戀入膏肓/index.html","861279d5109b13de404e4e37ea17c468"],["/2021/05/10/Review/Dice/index.html","95af43f07a0aecd39923b5857adbf87d"],["/2021/05/15/Review/魔女之旅/index.html","d2e3c4a809d57cdea6cf68cc18248734"],["/2021/05/28/Review/戀愛寄生蟲/index.html","791c5d5d0966042735b7f520241acdab"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","ea9e9a46b5806aeeb70ed88bf794dc0a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","d5880e3a803e83993dbc43b779f8cb02"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d520c13d13b365c50f0d6d576f45ef27"],["/2021/06/05/Review/流浪的月/index.html","9e6109956b4b9178dba243d531e95ac4"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","8c808c199707007922ec50f9019c5372"],["/2021/06/13/Review/第一人稱單數/index.html","7808fdc1231cda060ce4ed4919e1e316"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","7795254af06a723dc02ac7ac86e2377e"],["/2021/06/16/Review/願你幸福/index.html","5c81d24460fb3c753104af4b8eda6811"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","5948e4b7251a7f30c6c7fa32077a8c87"],["/2021/06/21/Review/神隱少女/index.html","6f777a25d103b6a315993275d2715813"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","641ce4a8fc5e5d15327d96bded8b3ba2"],["/2021/06/23/Review/天空之城/index.html","ea54c9cb43ca867d38f0ed0785cad758"],["/2021/06/24/Review/魔女宅急便/index.html","3780a1eab01b6630756eae16f0ae3805"],["/2021/06/25/Review/借物少女艾利緹/index.html","d174bf3932c0d5d760ec40492fd7a309"],["/2021/06/26/Review/魔法公主/index.html","804b9c677f203dfe6f2e5ec864e5133f"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","1d20a6ecf7e31da7be8577d3290430a3"],["/2021/07/04/Review/飛雪與劍/index.html","23109be5b58e8687eb0d30da3ff8675b"],["/2021/07/09/Review/地球防衛少年/index.html","5a6e09bf219aa4d305d1a8299058edde"],["/2021/07/12/Review/Angel Beats!/index.html","d20eb6b4918d1ad6cf688e5fab2960d4"],["/2021/07/13/Review/Clannad/index.html","5202a513bdb01b9712c83d7dc4e93818"],["/2021/07/15/Review/AIR/index.html","0d1794f80abb00d4bb3a90ff8f3ec3ac"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","e7ce8693a46060b51757528e144495a2"],["/2021/07/15/Review/螢火之森/index.html","52a5d1ea88a1958c71131496b0553bc9"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","a26e1ab2f7fb250df8bb2c2fd13032b5"],["/2021/07/17/Review/奇蛋物語/index.html","e3ec7588e93f54bd304ea919ca3ca3b8"],["/2021/07/18/Review/Vivy/index.html","2aadd9d6ebf56f73c0566be42d290dfc"],["/2021/07/18/Review/請妳消失吧/index.html","f8df3e046fb7678886ec9c02348b6248"],["/2021/07/19/Review/漣漪的夜晚/index.html","e73ecb8f868a41316326e2564f840322"],["/2021/07/20/Review/月色真美/index.html","08da05cd67e168671a285e8c83b65898"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","be1b637170cee998718bcebc39ad2ca0"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ba7b305e1ca10e1e6472d58d0a5903e3"],["/2021/07/22/Review/罪惡王冠/index.html","9e192daae2f38f4b2a29052682675cd0"],["/2021/07/23/Review/弱角友崎同學/index.html","a5cfb5aa41d83b438b476ab5379031cd"],["/2021/07/23/Review/惡之教程/index.html","60da21428fc967173edbeb603c738226"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","8fc778b6a10c14047b320a9caa067c6d"],["/2021/07/25/Review/魔王勇者/index.html","ea395eb0312fe0ce49d543b2589e15e5"],["/2021/07/27/Review/一年A班的怪物/index.html","7ffe12067e1f79fb6fba1230dff5f516"],["/2021/07/27/Review/奇巧計程車/index.html","1c95ce0677a5be0c785fff13f5c417b0"],["/2021/07/27/Review/專情的碧池學妹/index.html","7d16da540a418de2ab798303309469e8"],["/2021/07/29/Review/只有我不存在的城市/index.html","2b2c668c4f5ce60d1fb7c91186a89c4c"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","0e0fd7315c1bcd2010c3dcd68ec94f4b"],["/2021/07/30/Review/可塑性記憶/index.html","2ade2a4dc5199ed70589c2785087d7cd"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","3b89c341412280f91fbe8f40220808d6"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","a3e3b49371296199b36b010145979eb3"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","880afc2932b2f665d2c9034258aa0075"],["/2021/08/25/Review/清戀/index.html","a7fb39118c53cd9b8e19c9767cb7f150"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","0dd83480088c038819c57361bfd02425"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","4c950aed2d5a6ed94ed59aa5fada87f2"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","bfa1a084fccb9c93f3a301020d13badc"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","3deb2c3b41c5c130903ecd2deb14cd88"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","fde206bcea6df53f0e99f4876840045e"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","7a3de5a56d16522287e2e3f2467147ae"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","efe22fb82073cbdc7b2ba6103b4d0d8c"],["/2021/10/16/Review/龍與雀斑公主/index.html","e0723e479f74cb95ce5ab804715ae9d8"],["/2021/10/19/Review/孤狼不想開後宮/index.html","0e9d43db7a64edca7a1ce56f2ace076a"],["/2021/11/13/Review/徹夜之歌/index.html","dffba5662ecb9fc9578c02c0c2c252e9"],["/2021/11/24/Review/武煉巔峰/index.html","d2267eba6e0a16cb7c271f0f1d5c56ef"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","28ec4db967b5e1354268e5021927ec1b"],["/2022/01/28/Review/神醫凰后/index.html","a49885f83e955cf2b9af2510b8f609bc"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","80f21474c9ecd90bdee48081c36c8da4"],["/2022/02/13/Review/夏日幽靈/index.html","48cfa0d8c097390cf66d8f4ece2973b0"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","aab842113c4a6208b3226d1792546cf5"],["/2022/02/26/Review/賽馬娘/index.html","990a19eebba2738a9767cfb07102c43f"],["/2022/02/27/Review/大欺詐師/index.html","ce6cbaa35ec26d1ff4c83db066363ecd"],["/2022/02/28/Review/前輩有夠煩/index.html","77bd1e5ebff57734ebaedd92db3e6d41"],["/2022/02/28/Review/碧藍之海/index.html","aea02b810fe2ac3d140a69ec815aec5b"],["/2022/03/05/Review/落第騎士英雄譚/index.html","dd2c251ce1c8c6b1d6c77d3eb1d3afa2"],["/2022/03/06/Review/Another/index.html","4edf1131102a71a19ec820a36ea4288a"],["/2022/03/06/Review/入間同學入魔了/index.html","d1ce84d1ecfaf46c09c59e64a334a284"],["/2022/03/18/Review/再見宣言/index.html","12e5c78e5b9ee98b7372a6392a144cb6"],["/2022/03/23/Review/生若冬花的妳/index.html","ba1a9df1e07174e636e35eb7b6941c46"],["/2022/03/25/Review/天之弱/index.html","2ba7fe9a1bce4a5af7b3a8b415c8d4ce"],["/2022/03/31/Review/滅了天道之後轉生/index.html","5af10b72f80f241169ef6a761f640aaa"],["/2022/04/30/Review/泡泡/index.html","4f46a39aebfc9a7a5666827bcae0418a"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","523ed35ad82085b9d5796ee60de92ab0"],["/2022/06/13/Review/偵探已經，死了/index.html","ca82d43ebac28e5a4d5639dcc8a78d26"],["/2022/06/14/Review/黑色子彈/index.html","8c3e981fdd62a69cceff61177607c741"],["/2022/06/15/Review/黑白來看守所/index.html","774fb1abda6033e498371f4dffb50dc6"],["/2022/06/16/Review/虛構推理/index.html","c437413f6c759b8760af41d6d9da44bf"],["/2022/06/17/Review/戀愛與謊言/index.html","8ed97682973149d20a86523a2ca234ad"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","8919e54365aaf2ab1d48e1d0c7a3a95e"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","7d5c62a5802ea0f9cdfae954c4853dff"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","d7abedb41bee4cf576bcc279595d8fe2"],["/2022/07/03/Review/Hello World/index.html","d9b3abeb732a98be4e3f4ab425af1cb5"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","d1a18c83e1a03589042a0e645cf72ae7"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","62f5c0921f130008a0b202e74e04ff94"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","22ccaa0e1640a769776612bee75b2823"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","4a9578317bce5c660426a769f5c808b5"],["/2022/07/16/Japanese/動詞分類/index.html","ef47db661671893492fd49a40ca2ecd9"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","166f17179c6b24f10e73efa2f7302d4f"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","5227809a3bb5a3a5975f41a703f5311e"],["/2022/07/17/Japanese/音便/index.html","13778397cdf6e82c153a612645ae5837"],["/2022/07/18/Japanese/動詞 時態變化/index.html","a75b5f4f9fd340d6b7bec26f19864482"],["/2022/07/19/Japanese/助詞用法整理1/index.html","6cc77aea310752a1b7823196c575c352"],["/2022/07/26/Japanese/助詞用法整理2/index.html","8e17437ca140258c77bd41e33aee4e13"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","449bef954973e944a18e0ee00e03dcda"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","02a48aa3e5473ad70db1e0bd18412fdc"],["/2022/07/30/Japanese/疑問詞/index.html","12d29c9b45c4ceac52e8c137d66fc6cf"],["/2022/07/31/Japanese/助詞用法整理3/index.html","cdbd9cb435c75a37a374321565c30868"],["/2022/08/02/Japanese/副詞整理/index.html","fa893c1d3a7e97daa096fba0246dae8a"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","a78cf350c58cf1bae5b0a20be710bc09"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","15ca9207c530067364658f1d5d51364e"],["/2022/11/22/Review/組長女兒與保姆/index.html","6382333cef99505029f8c058fbcece18"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","c7ba261b152267851d08183f83a88777"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","4a378b55cdb6ee68e6ed2ea7fff26619"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","4ed693e1730ad23c2105722402ab31a0"],["/404.html","9749fb3ec2ff7d97412166b5b378854d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","77023acd4bfd1c2150b2f455808cbb67"],["/archives/2019/11/index.html","884137d464cb56b59974dfe91b079c09"],["/archives/2019/12/index.html","a94caa069c5d755c61b50ef779300c79"],["/archives/2019/index.html","101552973dd2e52d2c0710fc010a98c7"],["/archives/2020/01/index.html","37e653aad47c52a7af6de69703e4023b"],["/archives/2020/02/index.html","69b114c6323d24b481ca49ab85d583e4"],["/archives/2020/03/index.html","7a783c766bf590ccaf0f3f4414fb8759"],["/archives/2020/04/index.html","fe68a07cfa6419ff125129967f6198c6"],["/archives/2020/05/index.html","82b97d373eec47249353bffa8b913296"],["/archives/2020/07/index.html","621e7bb659b7bb321aba483b6856170e"],["/archives/2020/08/index.html","89cc3f812f981b998b097d7d37804f4f"],["/archives/2020/09/index.html","23d04e66d8ae9e55f509903b4c357498"],["/archives/2020/10/index.html","7be8779560fd15bf4a79a633231af225"],["/archives/2020/11/index.html","a38b04d997c213de668dc496e200b044"],["/archives/2020/12/index.html","1f8f0ca18863318426d8b387216e8499"],["/archives/2020/index.html","414f511da8919ae68f205fdc9d938d25"],["/archives/2020/page/2/index.html","9e0491e324fd7894fe1d3a40ba199f88"],["/archives/2020/page/3/index.html","bde306143af3b242afdb1eb449fe0122"],["/archives/2021/04/index.html","932d885533be53f9c41b42b8fa3ae0da"],["/archives/2021/05/index.html","5895f32a5b1037341e942f406bea527c"],["/archives/2021/06/index.html","cdc0d0e5a2bf6bfc4d5199385a7e373f"],["/archives/2021/06/page/2/index.html","3bf89c388a2c7bb90b30aac55049e3bd"],["/archives/2021/07/index.html","578551fc22dd048c403414d6fa4c9eca"],["/archives/2021/07/page/2/index.html","bc6bdd0dcb6b0349d878acad6aa8b024"],["/archives/2021/07/page/3/index.html","505f5a8b1cdfa0c4ee2b70b7fedf39c5"],["/archives/2021/08/index.html","2989bf06a68219feed98e067b32c212d"],["/archives/2021/09/index.html","7ec4788be12b6f5045cde831336f37b1"],["/archives/2021/10/index.html","9694c57a1d1bda21f2aa98b053549d93"],["/archives/2021/11/index.html","1ba162d31c416b1e06fa5ae9b87815db"],["/archives/2021/12/index.html","422794eee110b4818b6c4772041af6d3"],["/archives/2021/index.html","b64bfe50ab05d7e7b0dd59ec4a825114"],["/archives/2021/page/2/index.html","d79926ee4842cf1d40c3ff2c4f8419ce"],["/archives/2021/page/3/index.html","f5627f5555fbc790d7c66f550abadbf5"],["/archives/2021/page/4/index.html","54426df34da20380c544ee16af35c61e"],["/archives/2021/page/5/index.html","9a99a39c14608a0b77e3458563c872d3"],["/archives/2021/page/6/index.html","bb1a211bbe09cd0b7b6a4da2919263ce"],["/archives/2021/page/7/index.html","fce9f67316cf09fe379c00205f9e7351"],["/archives/2022/01/index.html","b8d635626beed6246628d692b904c39f"],["/archives/2022/02/index.html","af94e4680124283b134751e1dfdd805f"],["/archives/2022/03/index.html","b710c5fb633f8af002184df159137126"],["/archives/2022/04/index.html","00296b5fc30a6f47c81e65472a832810"],["/archives/2022/05/index.html","2b02874f49ece18bf4d51985131073d5"],["/archives/2022/06/index.html","99b22d05adf2757438f7389fcc173a52"],["/archives/2022/07/index.html","3ce17cfe343579e46015230bd9a6f6bc"],["/archives/2022/07/page/2/index.html","1b87b99a3bf8ae170338cec1209ad338"],["/archives/2022/08/index.html","1da928b1d7db37836dbcf2ae67047203"],["/archives/2022/11/index.html","4be894343d0a4fc50bcb435b2564f041"],["/archives/2022/12/index.html","65ce2585a5f852a10a2558a9f3610f78"],["/archives/2022/index.html","6e6c597fba8b4f313c32103a7aa0abef"],["/archives/2022/page/2/index.html","ff91e3473029829ecf732fa7f1dc75c3"],["/archives/2022/page/3/index.html","977f54754ec8f578c5f1331ceeff241e"],["/archives/2022/page/4/index.html","24e07900680c4c311963d8b347f415ac"],["/archives/2022/page/5/index.html","adb1a151f1779deaba851ffe0677d858"],["/archives/index.html","704f5ccf349dabb21fb414b9a406d1c1"],["/archives/page/10/index.html","3e25d1d088c56a10dca6c76b0603ce43"],["/archives/page/11/index.html","12e8b28eee0ab056175fb22547a203db"],["/archives/page/12/index.html","b99a3d8754e2fed98c711310f20c4b2f"],["/archives/page/13/index.html","ea2b635d60e6f294efa8af69ef5ae72f"],["/archives/page/14/index.html","4b9d86e40cb6c3246a81f951e9590d5e"],["/archives/page/15/index.html","3c68e801800b58ef5bce2d2eb914370a"],["/archives/page/2/index.html","b3465a208d1a22e20ce0caeb685ff95f"],["/archives/page/3/index.html","46ef38152e1053883cf32150eaa2abdc"],["/archives/page/4/index.html","c41a8936165e3e59654dea6aca2d29cc"],["/archives/page/5/index.html","f20d371011a8a5a3810886ad6517f06d"],["/archives/page/6/index.html","baadc2d89c656a7332e2bccb12bd2fbe"],["/archives/page/7/index.html","a7c1de0bc5589f7373aaa5cb5cc00ebd"],["/archives/page/8/index.html","b66dc3a591f8ac1a8c8ec4141a4e538a"],["/archives/page/9/index.html","9ca08a63207dd032843312c64bdf9be9"],["/categories/Programming/index.html","48b0c2db15dee665ad4156df04a342f8"],["/categories/Review/index.html","145916227373f6a789a94167ba550264"],["/categories/Review/page/10/index.html","5c094e07a5067fb06c62880c3b180536"],["/categories/Review/page/11/index.html","4e94491fd595cac70b322c08ffaadea7"],["/categories/Review/page/12/index.html","ddf47fcfbc6256b5184b9b1c18b6f236"],["/categories/Review/page/13/index.html","3786b6c7ff50020dd7038e793c92809e"],["/categories/Review/page/2/index.html","6c4565652f654b64750cad5e8e6fb9ba"],["/categories/Review/page/3/index.html","a8718fb630ac5aa68ff6b2fcc14ff267"],["/categories/Review/page/4/index.html","b252206d9246f09584bbb70631d85ee3"],["/categories/Review/page/5/index.html","b1124f1d7cf21149df14b27106a0690a"],["/categories/Review/page/6/index.html","e7fe3231765d1751f092ce647d0bd4fa"],["/categories/Review/page/7/index.html","8039dd57bcf9d9fd88ee1e5ad04f67b9"],["/categories/Review/page/8/index.html","6133d7aab31ed67f75a0bd05f38ac33a"],["/categories/Review/page/9/index.html","08c6086b27821fe7274cd968b8786f0a"],["/categories/index.html","573fe589a8d3caef0fbcdc46366fee7f"],["/categories/日本語/index.html","359a598c5f437f4909de4551ccd47e35"],["/categories/日本語/page/2/index.html","ddeb9eab710488ff80c7213b0e4fb18c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","04e03f1034537427512832eb3f0e6480"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c2686f970c1ead0a1f75304159989c83"],["/page/10/index.html","3696af37d925c3846250ff4cd42d05cb"],["/page/11/index.html","3d106dfed11bf06bf9f1e23307effeb2"],["/page/12/index.html","dbc78d0fb46e087f2d5bb6b68d0ab4b3"],["/page/13/index.html","4ae52676633d0dd523b7605b0dda5e49"],["/page/14/index.html","9549ed44bf9de6ecaa7b540d74351a06"],["/page/15/index.html","3ed9d9a4d4294b2d3851db1fa8d90606"],["/page/2/index.html","00dc10a090c817fde2803e51f9ec0048"],["/page/3/index.html","e15f25429736860f60b2283eb0f71972"],["/page/4/index.html","0178f7350ceadb6d94e7924fc5b7d7c1"],["/page/5/index.html","4617828270b02dcbb4ec6dfc3d2d8eb7"],["/page/6/index.html","6fdf83ae8b8b68f18d2e80eb97f33c65"],["/page/7/index.html","2af79617fb4a9490d37ba00882469ac4"],["/page/8/index.html","71079ed7947d27b5f48ab42c66bbb97e"],["/page/9/index.html","c8730c5fe1d0ef578043a748109ca074"],["/sw-register.js","69a6efa74523843941e7c4840eca0183"],["/tags/10分作品/index.html","1c4cbbfef254ce0497406db1948f4023"],["/tags/3分作品/index.html","67d2d78744568ba4109840c156ff96b3"],["/tags/4分作品/index.html","22adb0f53c1d9fecf01c654e5c60e155"],["/tags/5分作品/index.html","c2b75cae0fa705ef94ce2d64b8e93e02"],["/tags/6分作品/index.html","c3072053cdbe7f2dcff291f8b94d874a"],["/tags/6分作品/page/2/index.html","a4d6e9e085e07d75133405c6e1860961"],["/tags/6分作品/page/3/index.html","c8efb388a26a10daf7def6e8179d737e"],["/tags/7分作品/index.html","635519db1d66eb90079fd38844351aa3"],["/tags/7分作品/page/2/index.html","0847422eec55fe50acda20ad51e75ad4"],["/tags/7分作品/page/3/index.html","d4a18999fd1a65fc686cc5b2e248f657"],["/tags/7分作品/page/4/index.html","ca62b225bf16dd701301ce71ec4ab3f1"],["/tags/8分作品/index.html","4a83b859910e12de659a4c666378b626"],["/tags/8分作品/page/2/index.html","7e69b8337431a427d776e16678862117"],["/tags/8分作品/page/3/index.html","0c708c8a8f6d21e22cf864759ce38818"],["/tags/8分作品/page/4/index.html","a80e62bae94252e33147e5718b7ab741"],["/tags/8分作品/page/5/index.html","70da021e901c6fec39e4c3f219300ecf"],["/tags/9分作品/index.html","f6e9e525040370063c7add3c6e247ce4"],["/tags/N5難度/index.html","4d9d3a093702ae0930f73fa8ef828d02"],["/tags/N5難度/page/2/index.html","c4eba0dacb7152cdc42cac2aeb6a8a99"],["/tags/index.html","cf38e784c475eb27d82895cbb316dce5"],["/tags/アボガド６/index.html","04ee10a69424486c5942139762a1403a"],["/tags/三秋縋/index.html","3db4f4acd8f546dbfa0966859156cfb1"],["/tags/中國武俠/index.html","3d799d6b39227df6e9d6ec1681a27ff6"],["/tags/中國言情/index.html","88c4687934daee2ec4ccf09e01766c27"],["/tags/二宮敦人/index.html","1070a6b9d640a5220d0b9fa09a5a6be8"],["/tags/人性/index.html","7532811ad2b6246b9a5a248cfcc42df7"],["/tags/人際/index.html","2ad84704a1bdbc172ca3b26368208f26"],["/tags/住野夜/index.html","c3d40796c6c571155fa9065712664bc7"],["/tags/佐野徹夜/index.html","17b556595af2c5223da54aabb466eb39"],["/tags/努力/index.html","c676b34856d33976763727741a72431d"],["/tags/動畫/index.html","8327a1eff49cd5ca6f040b3c5e14a1d9"],["/tags/動畫/page/2/index.html","f2929180a5565cd9daa3fc8739161718"],["/tags/動畫/page/3/index.html","4137434d338cdcbcf65a7964be1942e2"],["/tags/動畫/page/4/index.html","6a5ee7c6378f88b576983e678bd54cab"],["/tags/原諒/index.html","8f994a98d699b4760b23518e76e6f350"],["/tags/反烏托邦/index.html","22c84d4600074d2956f8f005a6eb3338"],["/tags/啞鳴/index.html","81a584c75f0133a4645db989ada552fb"],["/tags/喜劇/index.html","921e9c297d8a11f7e999e7c6918bff19"],["/tags/夢想/index.html","40830a91c7d3442e80b91f54fe410439"],["/tags/天澤夏月/index.html","181511ba5ab6cefd3dbb1545b786fe6d"],["/tags/學習/index.html","d762d1f71316c35b2e60161cbde49fa9"],["/tags/學習/page/2/index.html","629187add08f457d281cbd289087e2a2"],["/tags/宮崎駿/index.html","25d791b174d64106ca18060d4997a4c5"],["/tags/小說/index.html","393e890fc64dc5a976913b661c9175d4"],["/tags/小說/page/2/index.html","961791f9ed79d906a9b75b1dbc1ae0f6"],["/tags/小說/page/3/index.html","2908e78230896c3439bf5ba0fd958db6"],["/tags/小說/page/4/index.html","5688c0db65034bcb68ed29cf761e9c89"],["/tags/小說/page/5/index.html","60dd1b1fdecb5edf73887fc7f16d7deb"],["/tags/小說/page/6/index.html","5469593d8b17456e14a96ad5d4cc5cb3"],["/tags/小說/page/7/index.html","befa59fa3b15f0593f7e106c551b0373"],["/tags/平淡生活/index.html","cb517a2695dbaf11e00419926363c44f"],["/tags/幸福/index.html","bcb7186e0da60c7fea2992355c5a0878"],["/tags/志茂文彥/index.html","efdf570c2e1cd3ff821e76b55d7cfa92"],["/tags/愛情/index.html","83f682a343842da040950cdc4130db63"],["/tags/愛情/page/2/index.html","ace7ed463a947f74f26e501fe6c05748"],["/tags/愛情/page/3/index.html","e23e0588db7794eda349d843f31709d4"],["/tags/感動/index.html","18b5399a86cd475eb78a5409f32a9de8"],["/tags/懸疑/index.html","66ac0219fe44e004cc8ac805b72f35c8"],["/tags/懸疑科幻/index.html","7f049a9092c4352eb01d965f5998f1b8"],["/tags/戀愛/index.html","2402c3695f45beb2edb403616fa13220"],["/tags/成長/index.html","ed38657f37ad44f8c28e55b806f9a425"],["/tags/成長/page/2/index.html","d7da27dc67d50b95319f7a460e246f8a"],["/tags/戰爭/index.html","5951aecb6a680e67ed2b0d577cca2639"],["/tags/推理/index.html","c1488aa7032ec6f78bc4b519509174c8"],["/tags/搞笑/index.html","afa7d67c714fe1d52d78fecf81a7e167"],["/tags/救贖/index.html","9b261a572ac6240d9604ad0349b48f45"],["/tags/斜線堂有紀/index.html","6a40bd524540c93c7f6a33d7ff37a665"],["/tags/日常/index.html","a3476f9dbf56f95b4966181fa08abf27"],["/tags/末日/index.html","974b58a0fc2088479b2cdeae3df9cef5"],["/tags/校園/index.html","778d47535aecdfafa1cefd233b4aa3d7"],["/tags/武俠/index.html","5f282dc2b0d8204ef3eba056f17a52f6"],["/tags/武俠言情/index.html","5c4dd66450ef5d53a6b62c4f26e3240d"],["/tags/漫畫/index.html","7406cb9786267cd02d3d8648e766dc9c"],["/tags/生命/index.html","5ab1f32d8b6a04f3072564b07ccea55e"],["/tags/生命/page/2/index.html","90efbbd0490dd2fc38eb3bc0e8d23145"],["/tags/短篇/index.html","3d71e06c93d9192504de5842c0ab26f5"],["/tags/社會/index.html","51bcf56d7a0a22bda1752d1c873e4823"],["/tags/科幻/index.html","64b675005808172496db9960a1a1b872"],["/tags/童話/index.html","3942d87e1f57d1b1f031d3011b658cab"],["/tags/競爭/index.html","1a845bea24e4a83445af8130eaec2e7c"],["/tags/自我/index.html","f043829bfab7adc284a87384047e94c2"],["/tags/自我認知/index.html","b22be7ac740a579835588a1c295bd9f9"],["/tags/葦舟ナツ/index.html","94e2b5366e70159694dc1d405b68142d"],["/tags/藤萬留/index.html","bc6814dd73cafb6ad5f82fa55485d16a"],["/tags/親情/index.html","e7d64b4fad37b579b98ecb51ec4e8dd9"],["/tags/雜項/index.html","3d70014906836c8b1aa0973336978c01"],["/tags/電影/index.html","b02a96bc01aaa7258637801c996b2cd0"],["/tags/電影/page/2/index.html","b80f0f7c7c9a16fb86225b51c7e31d3a"],["/tags/霸凌/index.html","be1416c17ba4ab5c27cf94480789379f"],["/tags/青春/index.html","917169775a230cf20a360746f1d878f1"]];
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
