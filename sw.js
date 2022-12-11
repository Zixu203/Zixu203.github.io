/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","8b9bc1d7a99d23f9a5d42fe7bb997464"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","c166b280942193442df0a41852768d90"],["/2019/12/25/Review/無法計算的青春/index.html","8b3c7046edc716c031d481eb7f979cbc"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","c9c3cbf5137495caf66edaffdbcdfcc8"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","4e9beeae7f7bc859485adb93d131fd37"],["/2020/01/19/Review/下雨天，不上學/index.html","4f28834c14320fb29dd8a52a5e716ba0"],["/2020/01/26/Review/三日間的幸福/index.html","ee315a46e959c3176d428e1890fa940c"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","44e65ba687c9a66bdce772485b25506d"],["/2020/02/09/Review/青春期超感應/index.html","ba23890df24af9d3a803d85f93c12a04"],["/2020/02/15/Review/又做了，相同的夢/index.html","c16ad1dbd2c5d746a56ba2628fafbd0e"],["/2020/02/22/Review/回憶當鋪/index.html","aeabd5e9a88dd918ea5f1c4904d90774"],["/2020/03/22/Review/不適合自殺的季節/index.html","f3fc209e38269b186d7297dd3cc7a4d8"],["/2020/04/26/Review/我們都無法成為大人/index.html","5d005ca3b66f2c8aab99374c74981ff1"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","f8a63fc3db1b4e8020e49bd071daa34d"],["/2020/05/17/Review/人間失格/index.html","eab317d7c5c45563fab0d432a9c40988"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","2004e1ffb147b71cecac7e9a457c2c7d"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","f4b6bdf24ef1b09d55eed2569f814366"],["/2020/08/01/Review/銀河鐵道之夜/index.html","b5408a67031b3d25f9bd1b0e2255df0c"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","29c208dffb3a9425fb524ecefc933861"],["/2020/08/16/Review/15歲的恐怖分子/index.html","ae7394acbabe522cbb380d0bb742aa38"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","a84e1508d763b84e280b5ceff485e96d"],["/2020/09/13/Review/羅生門/index.html","563d40b4bbb26f1fb3d4f52fa1bb103a"],["/2020/09/20/Review/闇夜的怪物/index.html","35af0800a831eae4cce9ebb82aa8eaf4"],["/2020/09/27/Review/14歲，明日的課表/index.html","a9af1f74394cbe616721bed5afb1743e"],["/2020/10/04/Review/致十年後的你/index.html","15c7b0486ba2c1803647ceb9579b078c"],["/2020/11/08/Review/滅絕之園/index.html","7475d0701f9b6aaab0c4aca94c3bfbbd"],["/2020/11/15/Review/將愛拒於門外/index.html","acbd16678e0777c61a0834053c3a7548"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","a9e1a112c065816eaa49f682c7f80d42"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","7687c56c433252ce87a8d9eecdb7b9bc"],["/2021/04/22/Review/道印/index.html","675d44c13865a4f6badfe4b75aeb1863"],["/2021/05/03/Review/戀入膏肓/index.html","124073d0bbec0782460ac69df76a677d"],["/2021/05/10/Review/Dice/index.html","5f9903c1224a3008ceee08a78bc785d8"],["/2021/05/15/Review/魔女之旅/index.html","223a24ee43b3c703d73c9ddb2ae6e274"],["/2021/05/28/Review/戀愛寄生蟲/index.html","3553c083dea2a97402e16d1f6a03dd8a"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","bfae6dd64c7659afb2c3e1ace903e21f"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","0fc7d127d454e52580e118ab3da87e34"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","484ed74976bec5a93198356305da268d"],["/2021/06/05/Review/流浪的月/index.html","94b9761baa4985641c3f699afe6be490"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","07990485fe5c6ca8f513f37f16853f18"],["/2021/06/13/Review/第一人稱單數/index.html","182023163f57b07faca8119e73045990"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","152f0ed0d8f7f4af2a8c1970ff856737"],["/2021/06/16/Review/願你幸福/index.html","8308e2b10bb06cd903a26970da01d884"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","37127958f4f794fdafd98218612a14f3"],["/2021/06/21/Review/神隱少女/index.html","226038aaf2797a2c10d3327fb56ad64d"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","1f2b275957408842c4a6e151e1d79225"],["/2021/06/23/Review/天空之城/index.html","4c55419f6fd4c1be1388d8d1cdbc6225"],["/2021/06/24/Review/魔女宅急便/index.html","0c5e3503c5d85a1adb80eb2efdfaadc7"],["/2021/06/25/Review/借物少女艾利緹/index.html","91ee7c25e98e090788f19531d95dcc5d"],["/2021/06/26/Review/魔法公主/index.html","9927859ea25c3ca9c174a1355befe28c"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","d6650cca812490989d55bf5e0fe9dbfd"],["/2021/07/04/Review/飛雪與劍/index.html","d9d5ea66022e53a4b9f7eef483306f42"],["/2021/07/09/Review/地球防衛少年/index.html","9a2673edc7deaf63193cd2598c13a8f1"],["/2021/07/12/Review/Angel Beats!/index.html","42d44c9582ff0d769aad6308931013c9"],["/2021/07/13/Review/Clannad/index.html","5fec407db9c39b39eca9d1a44b6a46ea"],["/2021/07/15/Review/AIR/index.html","48a069f773cc1605e08227eb3f2bff3f"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","9a1c65876010e6eb633183cf7280ca09"],["/2021/07/15/Review/螢火之森/index.html","58720fbd57555c3e6847d7b3e1aed19e"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","7dde04dbe4c89ac54096bc4ab9945f82"],["/2021/07/17/Review/奇蛋物語/index.html","1987b46fa1292bd5e3b57b178e8d55ce"],["/2021/07/18/Review/Vivy/index.html","e0deb3eb6ab4958ab2f93f8bfac9dc2b"],["/2021/07/18/Review/請妳消失吧/index.html","888106fff254e1cdb10993cbd486306e"],["/2021/07/19/Review/漣漪的夜晚/index.html","a26bfeafee4d2f9d5ea2f76f959773e9"],["/2021/07/20/Review/月色真美/index.html","ad629bab888bffa27c8f86ae00cc6971"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","7af7d066eddcbebdaf39b1308ef8d363"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","5c511eb8e196a4f00d169153bfa2973b"],["/2021/07/22/Review/罪惡王冠/index.html","dc388f2f8a771e7d9f1a0e8c982417aa"],["/2021/07/23/Review/弱角友崎同學/index.html","fbb06247ce7aba4060d779d9727bfed4"],["/2021/07/23/Review/惡之教程/index.html","71a048798b63468ee0412dff76a1c355"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","6dab8d841128e531b576e0743073724c"],["/2021/07/25/Review/魔王勇者/index.html","2cb8c25ee77d71657cf09aa0aaf6598d"],["/2021/07/27/Review/一年A班的怪物/index.html","a34a2d735c3e1b504ed775970739af3f"],["/2021/07/27/Review/奇巧計程車/index.html","3d31a825a28c4ee4607b0ce5c7919a7f"],["/2021/07/27/Review/專情的碧池學妹/index.html","7ee4e6b0f48f053f2485c77433f1c5d9"],["/2021/07/29/Review/只有我不存在的城市/index.html","4680dcc92903d701fb14585c68e2df2a"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","cc2658f28708cfa0f7e0bf6c428c8ccd"],["/2021/07/30/Review/可塑性記憶/index.html","e2a2255578a53d3c92299e06bf93dcbf"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1e000a4d72e1e4dfde25676b7a4f70a3"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","2e38670200222c6dc22f7753f3d79bd5"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","deaa0743676bb7ba11cedd8a97851485"],["/2021/08/25/Review/清戀/index.html","fc5c78cd48714493b1011eb2cfe12400"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","545bff8039c3d0f9ada1986203a2203d"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","51512415e02e6ba97040086810101201"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","eaf654506caca6a9ae90926be98a068c"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","2d77291a76ef2a8c9ff46a34078f17d1"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a021d0450e512e2f9f160048ddbe3fce"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","09810ddf3fb789665d3b70fd119eaa34"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","7d6e61987800cc79124fbd0deddefec2"],["/2021/10/16/Review/龍與雀斑公主/index.html","219f7c0a28429bd46532a16235ae7e03"],["/2021/10/19/Review/孤狼不想開後宮/index.html","768ca40a082f5076825c678801092a27"],["/2021/11/13/Review/徹夜之歌/index.html","8aadba48f5f868b3ce5caabe19be2452"],["/2021/11/24/Review/武煉巔峰/index.html","f3336ccf3e4724d883f8047eee9bccc7"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","22ab3fbb8cd520646d78b06df1fa3a59"],["/2022/01/28/Review/神醫凰后/index.html","208a5531b4c4f8ac35872432441b84a2"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e213f888a63cff4a2762c4323efc4ac7"],["/2022/02/13/Review/夏日幽靈/index.html","9db3d34eccfed70a528c5048c7f9b4be"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","4a2bc235261feea917c92d689f032211"],["/2022/02/26/Review/賽馬娘/index.html","2c5ae1f3a9dea2e8c5626f5f441021a6"],["/2022/02/27/Review/大欺詐師/index.html","0f0d070ca292de37f154969292d962e1"],["/2022/02/28/Review/前輩有夠煩/index.html","5d0fae470d51cc3ea3fd1cb33d26ad4d"],["/2022/02/28/Review/碧藍之海/index.html","c08e18fa44ddce9ec66f0175a1c0d0e1"],["/2022/03/05/Review/落第騎士英雄譚/index.html","547c27126d2bd20f35e4f21788e7863b"],["/2022/03/06/Review/Another/index.html","bf041adaf891f076889f28a56efe92fc"],["/2022/03/06/Review/入間同學入魔了/index.html","2f4225ac9b1cd96f77eccd561a49aefc"],["/2022/03/18/Review/再見宣言/index.html","1aab8d8d6a6c65be1616fc1912f53f09"],["/2022/03/23/Review/生若冬花的妳/index.html","ef4d4dbac6447bfab34b4c7a9e3d96fd"],["/2022/03/25/Review/天之弱/index.html","e592866dedb391be2524d309c51c211b"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c4526601b0c896944f9ebeeb9b789d4d"],["/2022/04/30/Review/泡泡/index.html","9f9fde410f61303907b90475d420901a"],["/2022/05/04/Programming/Dynamic Programming/index.html","91f90aa984597ce7a54dd622a77d625b"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","68a56d720f1803bd027bdd5c565a6f45"],["/2022/06/13/Review/偵探已經，死了/index.html","6b85284d0cb1c3b9781bb6c7aa0fc646"],["/2022/06/14/Review/黑色子彈/index.html","5b0eb8723e29a47c3e92c4849d10a3cf"],["/2022/06/15/Review/黑白來看守所/index.html","53fa3f9c12df372301eff0c7dd0b4439"],["/2022/06/16/Review/虛構推理/index.html","a7b0d52ef470338cf272839119836cc6"],["/2022/06/17/Review/戀愛與謊言/index.html","000639e6e207d42f87b03504e34052a3"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","37a3cfcbf1de5a96b237f533d4436bf7"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","384685961bd153aaad06b9e259c302b6"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","f22a7548f1827e4d56f9f278ff4e2124"],["/2022/07/03/Review/Hello World/index.html","cc292e95e8db01e04d1a66e68421a786"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","02321e7400208e6e15feecc6d940d4e6"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","3e51670d07a7057da958b66a3499c70f"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","d2174b4b80decf7753c5a0145459ab13"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","cab16f86a88019fc697530a509f5a832"],["/2022/07/16/Japanese/動詞分類/index.html","3cba446ed4577a5bb4ebf7d5e504878a"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","0baa429b475fa919289ebf36d272eb4e"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","13943c9afea2c503b7c6a57434a9dc8e"],["/2022/07/17/Japanese/音便/index.html","658c8eaf90b6fd24bf8697a809d1f544"],["/2022/07/18/Japanese/動詞 時態變化/index.html","8d0347e5f493a45eb37f61e5fbfc6533"],["/2022/07/19/Japanese/助詞用法整理1/index.html","3c6c8d1abe55f4165e421df55636443a"],["/2022/07/26/Japanese/助詞用法整理2/index.html","c40139a2f7680066699825b710aa3f35"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","5fea249b29b98f23ca1daa9eca14a45e"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b00b11bc472597a187666a327d74a8ef"],["/2022/07/30/Japanese/疑問詞/index.html","617528d62659c2ccd60cc20dfa3fe97c"],["/2022/07/31/Japanese/助詞用法整理3/index.html","ba286eafceecfe6b0b5c1f4be0cd3910"],["/2022/08/02/Japanese/副詞整理/index.html","fc0a83a3f5005dcdd7466d8791cb3ff0"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","7b4d1c943246e9cf45a58fd8c92ca66a"],["/2022/11/04/Programming/Data Structure/index.html","5f6206a8b59683585b13e413e1d68455"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","f9285331983cc6768571fb88c20ca40b"],["/2022/11/22/Review/組長女兒與保姆/index.html","fc53789e6a6cc772c5e246fe541d8698"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","f8d375ac8d3330e4b7e2e7aa797f5771"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","d648af6f129a9f74aad66ec0e3ae24eb"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","c0b6716f13790b90e4e8792f846de147"],["/404.html","13e501c66ea3fa10511c90e1b998674f"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","9524709052a28af14f5a5eb0529c68f5"],["/archives/2019/11/index.html","b1ade6a3d9bdd2a696b9983adfaac9b0"],["/archives/2019/12/index.html","ac67efe3fb899a0440f4671f4db32656"],["/archives/2019/index.html","6f73bc4b0808bf8dde47658b38df3ed0"],["/archives/2020/01/index.html","c770020f785f4d7ba9f1009fdb793a31"],["/archives/2020/02/index.html","8ab05dc84dd8f306989277478aee691a"],["/archives/2020/03/index.html","1ee9bd026db6d3d19f3d67a733eb26b2"],["/archives/2020/04/index.html","1f2241f9520dc1e24d6bf0b3f4bbe11e"],["/archives/2020/05/index.html","904ad713cc5a6e13d21b16d41afe330a"],["/archives/2020/07/index.html","9cc8dbef41c1fa96e1d534c3900efbba"],["/archives/2020/08/index.html","aa2e82d269e7f8f11f84f13dbd4b77d2"],["/archives/2020/09/index.html","80fdd3c31accdbf03e3f2b8c487ee81f"],["/archives/2020/10/index.html","7dbe8d82d8e2410583179f02e7dd4399"],["/archives/2020/11/index.html","ec60151522eea7e181e3ec7205810909"],["/archives/2020/12/index.html","21c0f2de25c3dd519f14f8b7e75de319"],["/archives/2020/index.html","366ab4c659abf62f7415073f3dd6871c"],["/archives/2020/page/2/index.html","f7e15fe34e337d6aa8d296c3ba5b8434"],["/archives/2020/page/3/index.html","e14995a04bb15cc8d0b69bba63a8a2dd"],["/archives/2021/04/index.html","77045725d15ecb6718586403b8b59607"],["/archives/2021/05/index.html","d900fb558339e2460b38c15d2e3d9bfb"],["/archives/2021/06/index.html","6ceeb5e9be2ea0a9888a1d40fb10af0b"],["/archives/2021/06/page/2/index.html","657ad1621feab0188bc3746049d359f9"],["/archives/2021/07/index.html","5c9fa351ab83bcf088aad2018f120b81"],["/archives/2021/07/page/2/index.html","65b1b4cdf117c069d07c8866a52844a7"],["/archives/2021/07/page/3/index.html","010e7ecd4083486bb350887cd6e31a62"],["/archives/2021/08/index.html","41b583e6a3de298e0073a05fff5766cd"],["/archives/2021/09/index.html","a2440ed37b891b9489c9322c3ec0ffaf"],["/archives/2021/10/index.html","ae8bae0884831df2e08586e8c5d924a8"],["/archives/2021/11/index.html","57030ee129280093b2599dfb1166b988"],["/archives/2021/12/index.html","6b2c80218c80bb4011c7b38f7948d5f0"],["/archives/2021/index.html","07fa0209020f7fa518348619f641dde4"],["/archives/2021/page/2/index.html","b7db148f87b3ec1ff92ff9fb7f37abc4"],["/archives/2021/page/3/index.html","6b49bd789a588d37a5b2c67fc57fe32d"],["/archives/2021/page/4/index.html","035f6cd4527cad9c852f05c98c7140b2"],["/archives/2021/page/5/index.html","3b70c3995ed6eb9e19941327cbaee211"],["/archives/2021/page/6/index.html","e6ffa4d351fbe8dc393452558255714f"],["/archives/2021/page/7/index.html","5cc28faf98b837f5a532c27ac1f38673"],["/archives/2022/01/index.html","ada024a3bdac54a46673f5278a604e9b"],["/archives/2022/02/index.html","819ad4eb43526bc4b6e5392c637978d8"],["/archives/2022/03/index.html","8e12b45a59fbc1700253d81d8960e8b8"],["/archives/2022/04/index.html","86a5615be6cd1d65add6a7034f37cc0a"],["/archives/2022/05/index.html","bf0e65d2e0cf0abae3a9fc2ca731892f"],["/archives/2022/06/index.html","190540e1d18326d580e39a611ada4c56"],["/archives/2022/07/index.html","d1f48cd4c421f63ab8f1d3f76da3b9d1"],["/archives/2022/07/page/2/index.html","6af0b7d7320f34b075d442e84fa0dee9"],["/archives/2022/08/index.html","01f24a0472e21d04d8c83ff49761eec0"],["/archives/2022/11/index.html","9acfdfe47ef39ea5afee28ec7213d8d7"],["/archives/2022/12/index.html","f3ec6496d2c204537d4fe7db9825bf3a"],["/archives/2022/index.html","7e2786d4b3d25157bfdc06cd6b514308"],["/archives/2022/page/2/index.html","e48878e1c8c4c41be34c628597fc6947"],["/archives/2022/page/3/index.html","1acd89864ce324aee8c0300940174786"],["/archives/2022/page/4/index.html","5f06f41ea40482ea94ce06b6772c6d3f"],["/archives/2022/page/5/index.html","a6d5158a41cbe4e1ee96f1dbd9ea68a0"],["/archives/index.html","6cc395d4faa47ad252204db4097a1c0e"],["/archives/page/10/index.html","f4a4cb463edd38898b898146a3fdff25"],["/archives/page/11/index.html","f86186af2896e8948e9e0050ccebe4b9"],["/archives/page/12/index.html","ccb9ae1fade0b495f9c6945a3d36f31c"],["/archives/page/13/index.html","2d2a47ccdf70ff74f85fbffd215623a7"],["/archives/page/14/index.html","9fd7b3289742fb1d2978f5096eddfcae"],["/archives/page/15/index.html","277e7ecdf5f66876ebc52c6396c24360"],["/archives/page/2/index.html","a053b1ac239dcf522981d5ecc30e4e4b"],["/archives/page/3/index.html","0c73f98d1ad82af3b9a2eb7a0371240c"],["/archives/page/4/index.html","41888fc32a29fe82c62f404c1b119002"],["/archives/page/5/index.html","f9ab51d33bd3b69f369c080ead33324b"],["/archives/page/6/index.html","46fe0a4caf1492a6c8f1acea3a2fa341"],["/archives/page/7/index.html","fd4e105957f95af887e86b569eb7763f"],["/archives/page/8/index.html","1f71cb8c975827f45b62975ccd4b07f4"],["/archives/page/9/index.html","1199296503aefeddaeee2cfe2dd6ea07"],["/categories/Programming/index.html","b5cafcd5339fa3e6c65535b65051316b"],["/categories/Review/index.html","b61a4d48a5e1e98e45a90a07a14f851b"],["/categories/Review/page/10/index.html","a3e12308dc24c3de822d69a5ae3ce55c"],["/categories/Review/page/11/index.html","6fc2c4466ceead4cd2c5bf62bdcefc33"],["/categories/Review/page/12/index.html","a08ad1284bd74ac9cb35dd13f6c31e33"],["/categories/Review/page/13/index.html","eeeeb23ca20ab206e00b43d7a4eebf18"],["/categories/Review/page/2/index.html","518525cc3ecba5694bd2ef216cc0a528"],["/categories/Review/page/3/index.html","a4a8fa59fa736ac6e866eb5930a3734b"],["/categories/Review/page/4/index.html","afc73527a1e4e41863433b8354523b7a"],["/categories/Review/page/5/index.html","cca01c35805f2151d8270c254d377ce6"],["/categories/Review/page/6/index.html","544692d8ae06fe182be82aa8cb04b225"],["/categories/Review/page/7/index.html","08dac0691fd5302218f4dfa1c50c631a"],["/categories/Review/page/8/index.html","1b6e74aa712ac492d3602f28deb882df"],["/categories/Review/page/9/index.html","eee2c8fcfc9315be9dbad369113da065"],["/categories/index.html","7c9b0b8aa1c7658f85d8a339f6679602"],["/categories/日本語/index.html","3bbd6f953a2e38f29888fb95f243faea"],["/categories/日本語/page/2/index.html","2be31415676c5b4c41ad1663ed6d4fd7"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","917270d97c0216aa2ae01c01a59008b9"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","68ee9eb26c24cccc41a20606cd0e35b5"],["/page/10/index.html","e1632ba88e7b3c49d79251a0900e313d"],["/page/11/index.html","210f718ff2cf64afe4cae19139b510a5"],["/page/12/index.html","a0bc159c44858dc25185f91446691c5e"],["/page/13/index.html","3669a2b8244bbc9da7e47ba7e059dc1b"],["/page/14/index.html","fdc49b507cff834f4dd4ec5411cb1956"],["/page/15/index.html","8adcdb123a998cf1624f87fb77de5774"],["/page/2/index.html","f267cc071e36de31f5eaa844e2600221"],["/page/3/index.html","7bf4af0d825a90b0950e87917e79b083"],["/page/4/index.html","9359af00a4cac9cb0e23b67e105a8d6a"],["/page/5/index.html","4565924a51212a95ab2049d590b4fa03"],["/page/6/index.html","9456589f6f1bee14f9bde374feebd0e3"],["/page/7/index.html","d9b4e166b6cccad37ce72e64f9a5c04d"],["/page/8/index.html","61cb3dfe86d80a7d8cc71118b8e64b80"],["/page/9/index.html","e56dd8bba49e4020ba43b88387737ff9"],["/sw-register.js","3a1ca2257c60a77bfe3bf61b1d695db8"],["/tags/10分作品/index.html","3da5ba52aa46882ba82241d6f7a2d294"],["/tags/3分作品/index.html","e060a4924f238d005adc5cb2d6acf6a2"],["/tags/4分作品/index.html","ae126f96900a83c65f90bd127bdb9676"],["/tags/5分作品/index.html","ea6d1be0465654693945f8a7de74324a"],["/tags/6分作品/index.html","4d325899e213b09027f5ee3832fe2315"],["/tags/6分作品/page/2/index.html","59e8227e8e3f7da95b6632c7ca4e2c95"],["/tags/6分作品/page/3/index.html","73b32b51de31d0f263f0b0cafabe667c"],["/tags/7分作品/index.html","0a61f30c0e03921e28c094c3c34ab0b6"],["/tags/7分作品/page/2/index.html","23454ec9ef1dae48bfce98f620916782"],["/tags/7分作品/page/3/index.html","bddc92089b3c17324a25bbee70d4e79d"],["/tags/7分作品/page/4/index.html","5a566f4a1159b262901f9a035c0d63eb"],["/tags/8分作品/index.html","9dfca5e056ff7cc8aaea86e8ae4b1892"],["/tags/8分作品/page/2/index.html","08e1dadfd77820d24dd322e898d41bb5"],["/tags/8分作品/page/3/index.html","e94f58bd2f0c62a47db03e4fc83bf4a9"],["/tags/8分作品/page/4/index.html","b549a52b2002d7c276bce7a7bc8fa277"],["/tags/8分作品/page/5/index.html","9dc32b9d91c38a7c593be811973eaebc"],["/tags/9分作品/index.html","15bc13da4d8133de45c388802111ef0f"],["/tags/N5難度/index.html","25b33bace93d65324d3d2adb456b1d8d"],["/tags/N5難度/page/2/index.html","242a3269aba98c6dc28e8f1c22adb4a3"],["/tags/index.html","0d054765327f1b3ee5e514c203833c75"],["/tags/アボガド６/index.html","8527980a2af4eb3399a199b406deb317"],["/tags/三秋縋/index.html","7549e770445a27ccd3f92222d013f5f1"],["/tags/中國武俠/index.html","dad5151b0f24a8cd2b32f8e99f7856e9"],["/tags/中國言情/index.html","ea6168e35360d9339fb1870e59fc7625"],["/tags/二宮敦人/index.html","fb66ded448b45d6600373c3c8906bcdb"],["/tags/人性/index.html","9325028bf33a31733be4b6352f3d46ab"],["/tags/人際/index.html","d8173d70cd79c08a91d27d0325519e68"],["/tags/住野夜/index.html","b06a09893387dcde7acd319382902c9c"],["/tags/佐野徹夜/index.html","07a619f5adb2221fd2b007357b2bbf0a"],["/tags/努力/index.html","ea3e484ca0f8ff2b5a9e3b5eb46f28f2"],["/tags/動畫/index.html","9cb6b5d49ca6be6d6a8ac5e10616f984"],["/tags/動畫/page/2/index.html","3167d438f1bdd6e93f6bdd9b2d350b52"],["/tags/動畫/page/3/index.html","5ae58ed93245a85aae7a707571fbbd46"],["/tags/動畫/page/4/index.html","c87a9736777b866f6a5f9aa32ba1b763"],["/tags/原諒/index.html","6ca106b06a06210ed075f00a437a4a9a"],["/tags/反烏托邦/index.html","0f3f82208eefd54dfc0bbeefaf055cea"],["/tags/啞鳴/index.html","236bbbf95b32cd2825a3119150ca67ac"],["/tags/喜劇/index.html","fbe9b738319ea33dedd8f0f391edbaba"],["/tags/夢想/index.html","ac2af40c20ffd4923110d2d1786012c0"],["/tags/天澤夏月/index.html","c7d6b6cfb8963b92e5888bc9e765625e"],["/tags/學習/index.html","5c9a9881709a6ca5c7cc04f14b9b244c"],["/tags/學習/page/2/index.html","19dc6c6301f641a2df85933878476d72"],["/tags/宮崎駿/index.html","822faa59a83bbe70e4c8c20bc3c74fca"],["/tags/小說/index.html","6d61aa298987ff88042ae55945bd82a4"],["/tags/小說/page/2/index.html","b31e5c932bc76f991f739e4f2a8f9a66"],["/tags/小說/page/3/index.html","c4f5ddec6afc7cafcc5ab1d5fad6dc52"],["/tags/小說/page/4/index.html","d46b687878da5c80aac3bef31f397576"],["/tags/小說/page/5/index.html","241c8ccf6510d7c1510413d506ed91aa"],["/tags/小說/page/6/index.html","0a174fb0924c0029202fac9238cffe14"],["/tags/小說/page/7/index.html","b6fd7423dd6da97c8fd6a881ed850e70"],["/tags/平淡生活/index.html","d0e04a4931ca9653654bdf7d34a964d9"],["/tags/幸福/index.html","ed39f48fb883cc0ce38288a0baa67e12"],["/tags/志茂文彥/index.html","1a313e1e4791c3ea5b200741d15b9117"],["/tags/愛情/index.html","83c6dde5733c2a6b4628b318d6b7c45c"],["/tags/愛情/page/2/index.html","b9bdf0b9e84770b02e2942d45afb2c75"],["/tags/愛情/page/3/index.html","82c377ade767473c98e4fd6f292a7121"],["/tags/感動/index.html","69c0a7e55051de4f45a26b7ffccfbfe6"],["/tags/懸疑/index.html","7d4cc3d957be275dbec220a1bf0b9493"],["/tags/懸疑科幻/index.html","8a6d5af65187c1603644466609ce056b"],["/tags/戀愛/index.html","2dd20d71f978f4d5c7b9badd5fb81532"],["/tags/成長/index.html","d91a013489cd0ebfd8a8036351fa0aed"],["/tags/成長/page/2/index.html","b15740dfeb760cdc1df829ad42b9811a"],["/tags/戰爭/index.html","bc2e88b59e81d9ca4a8e64cab38b0212"],["/tags/推理/index.html","1826be1d172d18c4e9bfddda64d8431e"],["/tags/搞笑/index.html","59f90657094c1b32853f61cff4e79625"],["/tags/救贖/index.html","a9752e9f7a7041c4f3c867278e70b401"],["/tags/斜線堂有紀/index.html","b5aac4edbd71a86861694adb1c5e2941"],["/tags/日常/index.html","d675a424e3387b09292827efcc8ba2c7"],["/tags/末日/index.html","0d98771ca23b8efdc01fabff2eeb21e0"],["/tags/校園/index.html","8cacd18f64a96c4e3ad0c2310355e94e"],["/tags/武俠/index.html","584c081eaffdd7171fde8e1a66956442"],["/tags/武俠言情/index.html","133a471a32e2e187766d78e5ace1f68e"],["/tags/漫畫/index.html","d587064fa01c0c3eac44b446d08d89ed"],["/tags/生命/index.html","8ff2a3fff5683b15fa9ed4816b9de43c"],["/tags/生命/page/2/index.html","abd7a83dfedb420e1562c0ea6a319558"],["/tags/短篇/index.html","889c34f29468b6daeb02102fab929a0f"],["/tags/社會/index.html","7ac29ee4c8dacfb7f26066ba5d38f68e"],["/tags/科幻/index.html","9335167c1fadc37275338c1ff6be45ee"],["/tags/童話/index.html","2a754a925a2bb48ec0b86dc9f3e8754d"],["/tags/競爭/index.html","1354ea63cf07718b993e42e3507d7694"],["/tags/自我/index.html","7781ee9525371f286e287230db8e3a58"],["/tags/自我認知/index.html","6c2fd613be6d5edd088802016e9bdbf4"],["/tags/葦舟ナツ/index.html","eeb14cea3950a298570d81d9fd7aa051"],["/tags/藤萬留/index.html","76ded94f709478095d6c6e35ee669f4b"],["/tags/親情/index.html","7c5529008c3604c675db9d41a5ace1db"],["/tags/雜項/index.html","f364c66f90eb39fc89fe0ab0f700889f"],["/tags/電影/index.html","704e567fc20b999510f8a344952570ac"],["/tags/電影/page/2/index.html","e00c927f1cabeb3bdd14c1464159c19d"],["/tags/霸凌/index.html","cf6ed724c21d6c04dbfe843ad28a2f4f"],["/tags/青春/index.html","4ac238f174815015784c67fa499d29ab"]];
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
