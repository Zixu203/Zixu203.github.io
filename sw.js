/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","f3c7a5e80b327c3c16b80f29fb48fde2"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","b5d34bb7b5b41f0fd7944538eb240e47"],["/2019/12/25/Review/無法計算的青春/index.html","535e5c3fbbf86d7a92310a239a7be3da"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","9ced7c99c73ceef5bc43210e1c2a956c"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","c717de62d26759c055a467904e2aeed6"],["/2020/01/19/Review/下雨天，不上學/index.html","2eb5a2d66c84e8d0ed4a13e2a3db5954"],["/2020/01/26/Review/三日間的幸福/index.html","723545a950674dce2c536c491bc536ea"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","e212695ba1ff05f68812b2a159261fb2"],["/2020/02/09/Review/青春期超感應/index.html","08b913a64d2cd0bb10a61d65cc91f666"],["/2020/02/15/Review/又做了，相同的夢/index.html","f607f29ea71fb288c973a92a620738f1"],["/2020/02/22/Review/回憶當鋪/index.html","adf6f4e34825283d2ee8935d94add4fc"],["/2020/03/22/Review/不適合自殺的季節/index.html","46fc11f50509f33af6256b6ff39c9d5d"],["/2020/04/26/Review/我們都無法成為大人/index.html","4ee3f2adfcdbffa51b84b6e7673ff3b6"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","59d903b2e0ae0e0c558531fe92ad9552"],["/2020/05/17/Review/人間失格/index.html","9a365c7d818c0f7f2b937b5e0007bee4"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","d34c11affffb3296c587a1f256120d69"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","2493fd04efcca61d3219834b11a31e80"],["/2020/08/01/Review/銀河鐵道之夜/index.html","d7045b903d99d84f73eb03958f4f934e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","65b2d3fb75a8a2dc459ef115154709d4"],["/2020/08/16/Review/15歲的恐怖分子/index.html","a28eabcc6b667d7be70c116856f780f4"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e87b1ccf6025428ad6058e8330fa66eb"],["/2020/09/13/Review/羅生門/index.html","bc92c76e7283433dbcff2bffdcb41aec"],["/2020/09/20/Review/闇夜的怪物/index.html","5039a91a0d3d6d72fa3c6af883609723"],["/2020/09/27/Review/14歲，明日的課表/index.html","c14846671c89ccaea2c9db224a02bf39"],["/2020/10/04/Review/致十年後的你/index.html","79f526fbb8933da119539f25a7659d91"],["/2020/11/08/Review/滅絕之園/index.html","60d3142a60fe77926ed2530491cce5c4"],["/2020/11/15/Review/將愛拒於門外/index.html","2fec0ad3c497362af448814c66bf3bd8"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","602bfc832a7ba1052b5904a5b1ad27f9"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","a2987002b18cb3e60464cf44fb484390"],["/2021/04/22/Review/道印/index.html","b3907694221837e90c215d5895e54368"],["/2021/05/03/Review/戀入膏肓/index.html","ef4d64e99ecdb7016ecb92e132246f86"],["/2021/05/10/Review/Dice/index.html","b1e4f03123f56c2d38df983707feaa18"],["/2021/05/15/Review/魔女之旅/index.html","271393291bfbecfd7636ec7b8bf21886"],["/2021/05/28/Review/戀愛寄生蟲/index.html","719add2c428e9acea04f21aee092c8e8"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","79bfd23f2c9738ebe61d42f3fa9ad815"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","63bc9a9f8885e702311cd1bbe9181be9"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","19aa78618448726cbf8954d285adacaf"],["/2021/06/05/Review/流浪的月/index.html","ed637deafe32546ebcec330348ee3bde"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","c69773b025f652ddc9f8b6983d1256e4"],["/2021/06/13/Review/第一人稱單數/index.html","5dc15e6d6d8932ae908f8194ceb8ce63"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","af1d231d8ddd2ba24bb604f2ab01a280"],["/2021/06/16/Review/願你幸福/index.html","bc118f81976270fe68324ca840334b1a"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","3f51f94ca43f0f46c30f942c733d8a28"],["/2021/06/21/Review/神隱少女/index.html","1f7ff38ec4c12c53bf835317e9942afe"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","1a27707188eeadacf1e118ab4e24e67c"],["/2021/06/23/Review/天空之城/index.html","50f4a20f932a2a91f15fd91677039d96"],["/2021/06/24/Review/魔女宅急便/index.html","02a7447644427b7836a5fea592eac06f"],["/2021/06/25/Review/借物少女艾利緹/index.html","7994da88950337ed85ead67af6938d3b"],["/2021/06/26/Review/魔法公主/index.html","bd1361935db048837cdf1c5223ac36ec"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","c3145ca628de8053f36e37f40abe2213"],["/2021/07/04/Review/飛雪與劍/index.html","59cb109bc6835e9f7714794cf2103b3d"],["/2021/07/09/Review/地球防衛少年/index.html","0bd0c288c6fa3a7b2668ec20074f9915"],["/2021/07/12/Review/Angel Beats!/index.html","5d056e4a64725e76e7fbf65583c3ef84"],["/2021/07/13/Review/Clannad/index.html","b7d83cb3d8bffdbe69220d8c443c5709"],["/2021/07/15/Review/AIR/index.html","84d8da2376ba94e5bd63f05ea5f4bf31"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","11574b70d6f3fbb5e5048b942e62e282"],["/2021/07/15/Review/螢火之森/index.html","2c4cae860e7fd4ef72ed1f01d6766d20"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","20dd733bc9fd8c08d944ca0517061bba"],["/2021/07/17/Review/奇蛋物語/index.html","a07e274c6e16221e98dd19b2716b4dff"],["/2021/07/18/Review/Vivy/index.html","33f9d64b04887f89b341ae8ce0e8d506"],["/2021/07/18/Review/請妳消失吧/index.html","98b6bd899f54ea71da0d318aedc43736"],["/2021/07/19/Review/漣漪的夜晚/index.html","06bed51ec534870b7d9d91d6ac1130bc"],["/2021/07/20/Review/月色真美/index.html","c5a46eb4552fa35f99b5eda472212d14"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","29cbe0eb99f0720351ba905decbb3c0a"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","36c4c3bc9afe0a72f69847fa31fe1294"],["/2021/07/22/Review/罪惡王冠/index.html","a636f716f540a63128e078e81f77261b"],["/2021/07/23/Review/弱角友崎同學/index.html","28df378d880a1341a2aad2b3bbeb6ff2"],["/2021/07/23/Review/惡之教程/index.html","de2a5803c5bd4eb608e563dc076b1f52"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","1597ae8b42e4f6f5ab776b6846563efa"],["/2021/07/25/Review/魔王勇者/index.html","053c2477c7d20bcf6d1191d78ee0384d"],["/2021/07/27/Review/一年A班的怪物/index.html","e03adfb9b6171a59d4471483d8c69bcf"],["/2021/07/27/Review/奇巧計程車/index.html","a887b1b3182bed8fa0952048d0ebf1d6"],["/2021/07/27/Review/專情的碧池學妹/index.html","c774ae6a407113958bfd4122290542b0"],["/2021/07/29/Review/只有我不存在的城市/index.html","68763a9b4b2a37121ab0ce65b544857c"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","eb2f43f297efa29aa0a54c7348a3c273"],["/2021/07/30/Review/可塑性記憶/index.html","7d70144236fe2296fc3b7578e318e9b7"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","30ffd56d1c8c312f95fb1dee81153ade"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","7e754b391bfd9abff6e1619a2df3b0a6"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","3d5533956dff36367e00d08e898e781f"],["/2021/08/25/Review/清戀/index.html","56f5d6786a022931ea3aceeb5a00c500"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","2e66d62a2f369a98d2ce75736601ef9a"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","72e7b921753fd60cfb2d5265cab1d2de"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","e2143d2bf2c8b01b21e6e812395717e0"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","ada297fd4edd57081598ba656158c6f3"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","f77f72ab584563a3d6030aaf6f607ac2"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","77cbc2f2ffbc643f450d225f6420f501"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3442bf3b7f86c9f2d11ece0feea51211"],["/2021/10/16/Review/龍與雀斑公主/index.html","9d75de74862b9dc9a0e1a3edab967753"],["/2021/10/19/Review/孤狼不想開後宮/index.html","df1c2945bd0570363119c9621c659ca9"],["/2021/11/13/Review/徹夜之歌/index.html","850d36df0ad5140832c9bfc5de53458f"],["/2021/11/24/Review/武煉巔峰/index.html","d5368886d3bf6be5a97a728011d0cdec"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","2bcd0a3a4d82c9d90b9769d74338b3bc"],["/2022/01/28/Review/神醫凰后/index.html","42ebb45b98cf54a88bf6ef3168f44560"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","a3952b4a7c7b3953f0a844df64eeb870"],["/2022/02/13/Review/夏日幽靈/index.html","b5c42efdfb3a033c0267220d9ee60185"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","019f9636fb48c0b52539f49141300451"],["/2022/02/26/Review/賽馬娘/index.html","1e7b1eedc3ae41d05c504758943f1968"],["/2022/02/27/Review/大欺詐師/index.html","352eec5d2805e5f8a5a7a7702e66df2c"],["/2022/02/28/Review/前輩有夠煩/index.html","d5de21a2af17b1045e1830c6a6e0d6d6"],["/2022/02/28/Review/碧藍之海/index.html","914c0e464748b8bafc5a320f4ac6c8f7"],["/2022/03/05/Review/落第騎士英雄譚/index.html","8f2eb6a34d79f71b0b3349e012fc034c"],["/2022/03/06/Review/Another/index.html","626a9e843845b70b018466a6bf8990ec"],["/2022/03/06/Review/入間同學入魔了/index.html","8d14613a4cad56691342fec44b82f2b0"],["/2022/03/18/Review/再見宣言/index.html","aa63c48a9a05c6e73bacd1d2a3d89c2c"],["/2022/03/23/Review/生若冬花的妳/index.html","b2fa4f74183453d0f80c40f74448cb8d"],["/2022/03/25/Review/天之弱/index.html","fac33c235761b4cc1ad1a71591db2872"],["/2022/03/31/Review/滅了天道之後轉生/index.html","a101d47fe238a10d0902cf3e6fe11c96"],["/2022/04/30/Review/泡泡/index.html","f346f496c0726082429f5fe86aa40ed7"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","84325b0b33cbbc396035253d8fdd3cde"],["/2022/06/13/Review/偵探已經，死了/index.html","0717eadbf5e497b35a8148ac077bdc83"],["/2022/06/14/Review/黑色子彈/index.html","53139bbb3cb8509df9e01e82a3cbffc9"],["/2022/06/15/Review/黑白來看守所/index.html","3da63850ec409436b0b0290042aa46bb"],["/2022/06/16/Review/虛構推理/index.html","186581043c00565489c4b54df06ee1db"],["/2022/06/17/Review/戀愛與謊言/index.html","eb5dda225274b33a4b09b639d06d8d92"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","f6cd136f72b8f96b7a292e650140754d"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","da1467d13aa6e69f49f7939703d1819c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","5e11a18af066037f273d1ebcf50e68d2"],["/2022/07/03/Review/Hello World/index.html","e496441b15c8ff4eaf652106ffca9384"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","308c265bef4b798c76dd08dfe6d1f9b3"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","840489bf1623dbf0e58b2d35ebde5b9d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","d086b81eb49d5676b55823a7eb6adf6c"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","517614c7f4b2370954c8730758613ecc"],["/2022/07/16/Japanese/動詞分類/index.html","01266a42404eb16615cd1af367d5a108"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","edb49eb493486c68e1fe4984de81cf5b"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","15c44fa5b15467fb4f93c0004bd66c7d"],["/2022/07/17/Japanese/音便/index.html","a22010d8a35a23e7ca94f903634ef087"],["/2022/07/18/Japanese/動詞 時態變化/index.html","b66c7168233db4dcfd35c638842bfacc"],["/2022/07/19/Japanese/助詞用法整理1/index.html","caa2a770e83c2e57eab18431f0f63284"],["/2022/07/26/Japanese/助詞用法整理2/index.html","1644919060b02682b54bbca38ae3f1cf"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","34bb6759a6cb991cf23c1a5d45ad6788"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","98d1116685397f9f1d731ebcd63f7d57"],["/2022/07/30/Japanese/疑問詞/index.html","65bcb8b8677b55a02ca300ad09b77f64"],["/2022/07/31/Japanese/助詞用法整理3/index.html","cdc03565a06c8b3a76209ce5bd7a8ef4"],["/2022/08/02/Japanese/副詞整理/index.html","59ec3dca89ced3ce94cee63ac2e70557"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","455eb5a5ca4b651d30897cd0c8939c8f"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","726e8f09e2366d774a00018c102f6465"],["/2022/11/22/Review/組長女兒與保姆/index.html","a01d4c20ed55243bf1eebdd7977c3152"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","af3149d2af02543d2a036ecb7f2a3e9b"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","bd9a49fadffc1feb6acdb5eca7562399"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","b31cc475c070c78bcb784e22d036e4cd"],["/404.html","38a275bc58bbca46b8bfdce1c2cc09fc"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","4091dba014f5ac28e6f4ebc14042ac5e"],["/archives/2019/11/index.html","d3a56e7101147c8b0b6050cf3121b50b"],["/archives/2019/12/index.html","0778f3d1926fd6e7fb65fcaafd966777"],["/archives/2019/index.html","62382315a9161bb488b5d806c41a069e"],["/archives/2020/01/index.html","aa1b104084d746916448b3094e55539b"],["/archives/2020/02/index.html","1c4595150ebdcca01cd8bb0642223917"],["/archives/2020/03/index.html","8459a352d2f40d825c37c421cab15cd7"],["/archives/2020/04/index.html","03afef51e476e45e9f42f0d090580dd4"],["/archives/2020/05/index.html","ea25b7d7bba9902724fca9b8036a95e9"],["/archives/2020/07/index.html","207b4fe7db9cf9e6ef637eda9748c478"],["/archives/2020/08/index.html","5a8eccea2afc3a29870cb0ad4ef855e1"],["/archives/2020/09/index.html","d7964481282794d027d603668a7109c9"],["/archives/2020/10/index.html","7486462ddf29996d986d3bc4bfb86c01"],["/archives/2020/11/index.html","bacbd5fc14055908ad200109328a6404"],["/archives/2020/12/index.html","8fbc2113017572faf8e8cd17e12504a1"],["/archives/2020/index.html","b37041f65e6db538b615dac7e23b43a4"],["/archives/2020/page/2/index.html","60e4e6e80ba5ad20ced336938c6e00d6"],["/archives/2020/page/3/index.html","7354578be9858fc2800126629003073e"],["/archives/2021/04/index.html","306910e5e024197d3f8cc752c12ad259"],["/archives/2021/05/index.html","f01c6cd475bed1ba65dd2a32d248f155"],["/archives/2021/06/index.html","531a22b7d967158cbf06d3d9faaf4ac5"],["/archives/2021/06/page/2/index.html","344ee0141829bfebb94618d9e6909611"],["/archives/2021/07/index.html","8dcf0546c1ff18e973fbdcffb088c1e4"],["/archives/2021/07/page/2/index.html","fe6e28ded79998552c586f736800da19"],["/archives/2021/07/page/3/index.html","b02007da5dec3d14a6d0e73cd9628e16"],["/archives/2021/08/index.html","5a33270d5a39929cf03b4e809206126d"],["/archives/2021/09/index.html","61caf62c1cdf0806974d3a480e0ca7fb"],["/archives/2021/10/index.html","8e27d36eaf1fd2adbd15d0a5b91c85cf"],["/archives/2021/11/index.html","93d457616b1251f477acbc9d1fd6afab"],["/archives/2021/12/index.html","d81a8c00007a091042e8536eca61561e"],["/archives/2021/index.html","b51892e8a7f9d96a367ce39f9dab95b2"],["/archives/2021/page/2/index.html","8b8624e6c3cff0498e02d94b8e94d597"],["/archives/2021/page/3/index.html","b5215ddb39aa578a75f284a0f3faa5f1"],["/archives/2021/page/4/index.html","ef0d4a8bcac9bc9aee72dc45be039b9a"],["/archives/2021/page/5/index.html","07fe086ea1036dd66b4b8ea70daa91c4"],["/archives/2021/page/6/index.html","7021ee66fa5ff175941b83c8f8cf11cb"],["/archives/2021/page/7/index.html","b135996459c5b0bb075d7612fc286e2a"],["/archives/2022/01/index.html","98578b28c2c9eb5022b2befd09a1df37"],["/archives/2022/02/index.html","b7460e447015c68374c4cb16b2b82ed1"],["/archives/2022/03/index.html","fabcfd0f0f67340e74b58866fc796f69"],["/archives/2022/04/index.html","393a43e356c587c2a6d9ff89079c44d0"],["/archives/2022/05/index.html","2907651b29a69c5fa7e7cdf8760d214e"],["/archives/2022/06/index.html","d07288c4c65ce26521ae605aa0356ba0"],["/archives/2022/07/index.html","ca924f3d58297ff7de1453466f601e55"],["/archives/2022/07/page/2/index.html","158c92cf19e27ee43dae15386769721d"],["/archives/2022/08/index.html","be89d2726129dbe84ca4a54a6538668c"],["/archives/2022/11/index.html","6006fe54abd152ba0fdbbbf737fb89d0"],["/archives/2022/12/index.html","7f19db268170f0191c2af63b9f849d81"],["/archives/2022/index.html","8f1d23576ed7568e2d88553475e8ad50"],["/archives/2022/page/2/index.html","3ed6e19fef408ac47e2b80582a3cca4b"],["/archives/2022/page/3/index.html","186dc48b431aff00abfe2dc20a763fcb"],["/archives/2022/page/4/index.html","a7f208a0dc5bbd357c325eba9a0cc08c"],["/archives/2022/page/5/index.html","cb1f84b412d12e238da8f830889b5bcb"],["/archives/index.html","663a83c664e779472a87169e52ecec13"],["/archives/page/10/index.html","c56db19a2756de01a825d3866599bbd9"],["/archives/page/11/index.html","043ac08e3ef4490f361fdd281e8fcd6f"],["/archives/page/12/index.html","cdea25b07280fa7a87b336ae7dabb778"],["/archives/page/13/index.html","f71378ba44c7708144d1f1a2739f45cf"],["/archives/page/14/index.html","a996021de191b9f1a15f4905d4d77ff0"],["/archives/page/15/index.html","7641139d90bbcf953c459df61b247fbe"],["/archives/page/2/index.html","d77f656d84aa189c2cd97e4102e4f790"],["/archives/page/3/index.html","637aa55343940f0cc71b4718298980fe"],["/archives/page/4/index.html","3d5d1b483ecc5b8a9c854b007213f1dc"],["/archives/page/5/index.html","1b2c824fb73bc0c31c97c236fbad8838"],["/archives/page/6/index.html","bfb0364c079e49740d78ab027a5ec95f"],["/archives/page/7/index.html","b23636cee34b44924b2430253752c452"],["/archives/page/8/index.html","ba16f530140cace83aec59a30e9edef4"],["/archives/page/9/index.html","77cfd2704ef7e8bd97d1c1e1da994daa"],["/categories/Programming/index.html","e9b1481d1c006725dcdf4f0ad825b36a"],["/categories/Review/index.html","cfcf7c0bc915711cd66eb61d49cda9f8"],["/categories/Review/page/10/index.html","32676e97423b1555d293c92f1f721647"],["/categories/Review/page/11/index.html","977d1d1927ceb8ce040432c9503828cd"],["/categories/Review/page/12/index.html","269011d5301e487db1dbc21cd070c852"],["/categories/Review/page/13/index.html","58d151f810ae5dd557b9d31716120564"],["/categories/Review/page/2/index.html","d788e80a37f33628dd5d7a78231e8f4d"],["/categories/Review/page/3/index.html","6cb32742588fc60ee04f3735131e6ab6"],["/categories/Review/page/4/index.html","d18268cd1fb8b31299f93329db88e74a"],["/categories/Review/page/5/index.html","97a1ed41199db5f13acaad7b996e0dc9"],["/categories/Review/page/6/index.html","81ae76d06ef1e10f1507d8a6d3304753"],["/categories/Review/page/7/index.html","bcf1a16fb50fec481393b78ccd44ccaa"],["/categories/Review/page/8/index.html","28397ac5c5ddfab9e1e0aeaf8509f181"],["/categories/Review/page/9/index.html","82a5c9bed65d176773cdb01c8e9b7bcf"],["/categories/index.html","3f71882ac4d525afbb3c122bd473da1f"],["/categories/日本語/index.html","70519ce6de51d7dc965ccfc779296dc5"],["/categories/日本語/page/2/index.html","0a15f9e8a9a70e62de7619e64688928b"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6b34d036978cbb56101613c7e8ecccdc"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0013c68524ba6e3c8e8c78a8d29f8c03"],["/page/10/index.html","cd3d2c3eb271fcc2ce0a07495382acb9"],["/page/11/index.html","039963318b7fa2bf196a6125c38f23cf"],["/page/12/index.html","3c79d9c118b305f50950d9e3cc00b4b8"],["/page/13/index.html","72d31af77c9feff976ffd4fb5b4871a3"],["/page/14/index.html","557866ed9c587fa7edf1b6b4949af125"],["/page/15/index.html","822dec5685d7d64d044213f00611ad21"],["/page/2/index.html","38321bec917e83f34670cfe561943085"],["/page/3/index.html","dde1a6ce76add60c9c876179b6794a11"],["/page/4/index.html","f511b9fa2a7fde37303262d723c7a262"],["/page/5/index.html","f4f84c7963f622d448a6f6aefc54229b"],["/page/6/index.html","b967221da8026020d3640bedb8b120b7"],["/page/7/index.html","3f4648f059c7e29ed5fec3d275b94256"],["/page/8/index.html","94f6725d0fbf3f92628678ec0dfa1a07"],["/page/9/index.html","4d45d05ae89e353a51ea39c8fc81d460"],["/sw-register.js","2c8840f480fb7bded302c1b2a2a604e2"],["/tags/10分作品/index.html","c2db640706937f8b69ab3fbfd3f22ae4"],["/tags/3分作品/index.html","14c81c324b582a924de1d5846055a217"],["/tags/4分作品/index.html","24a67d038b71cc36f51905f927a8ccd6"],["/tags/5分作品/index.html","d62a145bc63ff060a86d9f3043655e47"],["/tags/6分作品/index.html","7af1eeb3ad25ebbf2c89730a4629dfb2"],["/tags/6分作品/page/2/index.html","f72dcdf7a3d29b7ffa6c4acaa3892f1e"],["/tags/6分作品/page/3/index.html","aa001312bb8378acb1a793aae405f584"],["/tags/7分作品/index.html","aa307cd9c5030e5bd80b273b28e37b31"],["/tags/7分作品/page/2/index.html","31d31011ba58011bb2463d753ead7b2a"],["/tags/7分作品/page/3/index.html","4e7d158dfbd279d278ccb576fd49d594"],["/tags/7分作品/page/4/index.html","296f2965a06c0c979aa12e20bcae237b"],["/tags/8分作品/index.html","c11a630298dfa92d8f6a40ae861b1a31"],["/tags/8分作品/page/2/index.html","d485aea2fa7c31015f2bb7ae3f3eba4f"],["/tags/8分作品/page/3/index.html","86bdd5e310e49769c2d29fd3ebf81feb"],["/tags/8分作品/page/4/index.html","563adc83bcd9336bfe045fab539e6eac"],["/tags/8分作品/page/5/index.html","51678a9bed3380681d48166eddbc1a4e"],["/tags/9分作品/index.html","1f8186a259cc80af75ec4afc48a29a1c"],["/tags/N5難度/index.html","f7ab8bb047e0e9dec6ecb36c3d4a1573"],["/tags/N5難度/page/2/index.html","24147343cef6154359b67002701256dd"],["/tags/index.html","c95af7500d9807f1498c93ed4617efdf"],["/tags/アボガド６/index.html","05257b1b82f0de63fc455a261459ffff"],["/tags/三秋縋/index.html","dd9c3db1231989d34ee3a66a08d1ae3c"],["/tags/中國武俠/index.html","0e4dfe3c4581c2d10fb08e17a5e74857"],["/tags/中國言情/index.html","5d51e9ea38a4d39cfed2a0f678bcabae"],["/tags/二宮敦人/index.html","5315c0dc3d1e967e7e2c17a51487c6e9"],["/tags/人性/index.html","eeaee87a9c3dd565ed843ab0aaef40a2"],["/tags/人際/index.html","304bbce3185e0b8277c2a8bcf83430d6"],["/tags/住野夜/index.html","2a8ed6777896127e27e36b83ac46bc5c"],["/tags/佐野徹夜/index.html","400f1805cbd5139a2c731208e325af6d"],["/tags/努力/index.html","a51a3ef2ddbc5a17da7fbb7df1ba6b55"],["/tags/動畫/index.html","c42f4ec0e28c078315847e7b9f93781e"],["/tags/動畫/page/2/index.html","9c2163a68c5634d998d08cf8cae4f59c"],["/tags/動畫/page/3/index.html","5eafcddf84acb02147c749af47365aa6"],["/tags/動畫/page/4/index.html","215d749aa727625cbf4127d55d1afa00"],["/tags/原諒/index.html","bcb3ab473a00c48f246c16df9ac083bf"],["/tags/反烏托邦/index.html","7fdc67142cd25061bb6b4813e83dfbc6"],["/tags/啞鳴/index.html","350497aae7886acdafa8202eacb7d1cc"],["/tags/喜劇/index.html","f273b4fe0c1d3fa6c4814fe0a4bc8625"],["/tags/夢想/index.html","f34f69cdc0fc7e924cecb805aa6673e5"],["/tags/天澤夏月/index.html","ec74fcfbbd1748041d95d6669b92adf1"],["/tags/學習/index.html","3df795dea3e97fd7435f00ffdacd609a"],["/tags/學習/page/2/index.html","f20d34fab8689aef95884f50f797e9ca"],["/tags/宮崎駿/index.html","d96d0cc87f99ff23ee6990a6af416a19"],["/tags/小說/index.html","02f4ecfc2f771666dfe30717341d6d39"],["/tags/小說/page/2/index.html","1ed1d2bd3d6c320a86963fffc1b7120a"],["/tags/小說/page/3/index.html","9c943a2465c061d77aae6ce834785d58"],["/tags/小說/page/4/index.html","8b6c36d881e5ccd43644a730b68c1a35"],["/tags/小說/page/5/index.html","476d475fe3d208d579a8396d213bb4d7"],["/tags/小說/page/6/index.html","086a2b637d368bdd1caf9191afd8a0ce"],["/tags/小說/page/7/index.html","f906a4e2eae7833e8ab1ad6577d376bb"],["/tags/平淡生活/index.html","687bb4beabca3b53c3dcdfd797222006"],["/tags/幸福/index.html","b18bd1be99f427941129878c28df21c2"],["/tags/志茂文彥/index.html","8a9065c6a55c83f5dea310ef55f72dd5"],["/tags/愛情/index.html","699aaa77838d275e16da693b399db20f"],["/tags/愛情/page/2/index.html","dc5a2c93510d9d264ff8feb7eb68fb7b"],["/tags/愛情/page/3/index.html","09aa2467bbd97475906123b8be8fbd9a"],["/tags/感動/index.html","43864a584514256ee677451eeb9cc534"],["/tags/懸疑/index.html","6be250ee1aa32d7a3910ee4a994a4aa9"],["/tags/懸疑科幻/index.html","0d013c85588d289de2076cb548e268fc"],["/tags/戀愛/index.html","9baa8e9bd23288d5429dbfee62bec528"],["/tags/成長/index.html","2827b4bfa0af5fab90378471a1f6be07"],["/tags/成長/page/2/index.html","b4ccddf98e91c1b1a9b67d637760c1a3"],["/tags/戰爭/index.html","82bf23f76794cd13db038a736c1b26dd"],["/tags/推理/index.html","150ed49e7c48287eb68fed1ca1d960c6"],["/tags/搞笑/index.html","32a141d161582734b949716c17f63fb5"],["/tags/救贖/index.html","2e2a07d2e82b3c821a88c2df0ba8213e"],["/tags/斜線堂有紀/index.html","3e183130de6783e67227ae11fc4c1139"],["/tags/日常/index.html","3717bbe419c18bb4c22f0deace556bc0"],["/tags/末日/index.html","807ff788864f79146741d563fa9ba7f7"],["/tags/校園/index.html","2fce68009fbd617689df43eb5763a6b9"],["/tags/武俠/index.html","5ac099f2facd092fa20dec4f6d177bc2"],["/tags/武俠言情/index.html","14e1d6cdc803e6d6358de28c4f4ca66c"],["/tags/漫畫/index.html","0bb17556210d6e59e3b734c241df0a27"],["/tags/生命/index.html","5e2552f13010b17cf9d5c3206296ba81"],["/tags/生命/page/2/index.html","e3a0d3a9257a15a3c22296da898cf81a"],["/tags/短篇/index.html","48e8e9e7b7a53add1f73b35ab72ed70f"],["/tags/社會/index.html","e61a9c7bbd00745422e47e184a9db879"],["/tags/科幻/index.html","aac2d00c8b15a179b60374be10ae19d0"],["/tags/童話/index.html","d56e28329000421e6280871d9012fc60"],["/tags/競爭/index.html","a748d6b23967957a8d50c839848c61dd"],["/tags/自我/index.html","ab5941da9e476cd93ca8100e1aa6c7c0"],["/tags/自我認知/index.html","e211a6912503d969ca8c4ba8cb3e78d8"],["/tags/葦舟ナツ/index.html","94221263878239b5c83ea3c7d4de17cf"],["/tags/藤萬留/index.html","db7f23751359cca3c36e74c3401228d2"],["/tags/親情/index.html","1c6b4de473f21afbee833895e1100e9d"],["/tags/雜項/index.html","699a699f603c054756ba19141d3088da"],["/tags/電影/index.html","0ae6ba97e1793d614be6ed24c986fb36"],["/tags/電影/page/2/index.html","f9d1e51a08e55a15c6041ca56bfc8129"],["/tags/霸凌/index.html","e285c39854aac2e6a2c9885be88ccf23"],["/tags/青春/index.html","5b1df1ad9c9e7b0df06504d5d97bf016"]];
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
