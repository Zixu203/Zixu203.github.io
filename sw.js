/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","88288614cad42ca14a4468dc45a0bf1d"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","21aa02fa0dba9eabad512d74bc57c5b9"],["/2019/12/25/Review/無法計算的青春/index.html","bf8a8296238a44d0c66af6a27865450e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","bd2b574ef097d9dca849484228a2c2ee"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","f8e155a6d2c7f4e2538f0f9f7eac23c9"],["/2020/01/19/Review/下雨天，不上學/index.html","e89a33fb6aafa8227f998b5ad0efb013"],["/2020/01/26/Review/三日間的幸福/index.html","ed86f860a5ae5791ef49bba4bdbfd55e"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","3735c6b36c21e978b1cf5eb5cac298a0"],["/2020/02/09/Review/青春期超感應/index.html","5a2807cf0aad7f7cf0cea070237fc227"],["/2020/02/15/Review/又做了，相同的夢/index.html","2299eb21de4f7676e31a84638831ad8a"],["/2020/02/22/Review/回憶當鋪/index.html","74c6c05e2464705cdaeb9ef72438a73d"],["/2020/03/22/Review/不適合自殺的季節/index.html","97fac7ded7e99671e4b76e9dcfd14479"],["/2020/04/26/Review/我們都無法成為大人/index.html","8588c7f776ea307d226dc4aca9933384"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","c960c7f6517b526772d47cce15a9693e"],["/2020/05/17/Review/人間失格/index.html","683254f5c9c030518e137c043ab3a024"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","88b8e7c7f0865a4a1e6cf1ba9c9a7692"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","07b11feefad9ba17eceb1e11a9fc78b1"],["/2020/08/01/Review/銀河鐵道之夜/index.html","b48939bce3ae31a27f69c160f89ac339"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","0e8da88ad6246b14568332b829830045"],["/2020/08/16/Review/15歲的恐怖分子/index.html","e1eabc0679bb6e872c2127725867a4ff"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","ede9fee75fc5167a96538492f19413a5"],["/2020/09/13/Review/羅生門/index.html","2c0b843fc30edbe0858fe61f0561a400"],["/2020/09/20/Review/闇夜的怪物/index.html","6ade87d50e282bd172d5f30ed608180a"],["/2020/09/27/Review/14歲，明日的課表/index.html","4dbad8f510d6a9192d64b0a12a2f3cf7"],["/2020/10/04/Review/致十年後的你/index.html","6ad48f92f7989c5fe7ff890ec24d5d26"],["/2020/11/08/Review/滅絕之園/index.html","4849206c16a3d4412b1438d55c740301"],["/2020/11/15/Review/將愛拒於門外/index.html","aacaa02a02c20491524abe8ebae0c65c"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","aadcc0abfbc51fa837f7de5143ca7b6a"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","4fe0bfecfd83bcfb5bd7f4262feb06d5"],["/2021/04/22/Review/道印/index.html","79b011335357fbcd9407f5d5ee88d394"],["/2021/05/03/Review/戀入膏肓/index.html","7c3ec9e7c2eb0d1e753ec64e02a15196"],["/2021/05/10/Review/Dice/index.html","a97b9fe789c27e38243c8d03a39d59de"],["/2021/05/15/Review/魔女之旅/index.html","b72c62eeca2a3e3fe7da24a35da860d2"],["/2021/05/28/Review/戀愛寄生蟲/index.html","afac9dc661cb1d394de8d2cdecbfa469"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","ea1ca686ddfd265a6d914384228b8995"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","93fd8cdde90fd488b66a10bfebdfe4f9"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","ea00266340c7e16aabfb8d69dd8100eb"],["/2021/06/05/Review/流浪的月/index.html","dfd3f79d051a87be3484d734351f1929"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","ef01fe369ce0c333d078a383671660c5"],["/2021/06/13/Review/第一人稱單數/index.html","a89ece8e581bfd1cea9010bd42153fa1"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","6c9523eec5a9f871dfd15bcbe7846226"],["/2021/06/16/Review/願你幸福/index.html","4a87024255004d28ff7b1b8a9135b729"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","2182519147e1e77626bc2c8e70715407"],["/2021/06/21/Review/神隱少女/index.html","6c54a21bfe8c27619539b21ba22a85e4"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","0e9d0bb62332bb8319e07bc78ca30d08"],["/2021/06/23/Review/天空之城/index.html","25c100678b368e7873769e6232a6bba7"],["/2021/06/24/Review/魔女宅急便/index.html","8ecb0baaec899f33c8420bab5427ad81"],["/2021/06/25/Review/借物少女艾利緹/index.html","9ebd1fcef67442d53ee6eb2ea3665d3d"],["/2021/06/26/Review/魔法公主/index.html","6ea3ce95dbc385d84126282925221012"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","5eb6482779281322388dd142d8aef569"],["/2021/07/04/Review/飛雪與劍/index.html","bd15c2c59052c3b6747e4ac751d78892"],["/2021/07/09/Review/地球防衛少年/index.html","1589ec6c4837c67cfa42e6a6292c9944"],["/2021/07/12/Review/Angel Beats!/index.html","d85a8ad054b6f05caa24da4058e92b88"],["/2021/07/13/Review/Clannad/index.html","408efa914ce27d5fd5399a85069f4c4f"],["/2021/07/15/Review/AIR/index.html","b68ecd0868059600e401b2bcb0cd4802"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","28cadabc5149f05f93355503ec0258d9"],["/2021/07/15/Review/螢火之森/index.html","1aadb76bd08aaa8e5678a792452a2fe1"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","bb17a2b11e148b468cafd41ed9d77e2f"],["/2021/07/17/Review/奇蛋物語/index.html","c9b768ded49edaf1dee7d8df493f1898"],["/2021/07/18/Review/Vivy/index.html","74d75af051030067a7462e5ae6f6acf1"],["/2021/07/18/Review/請妳消失吧/index.html","bc543994bc57aa61a43289190761bb75"],["/2021/07/19/Review/漣漪的夜晚/index.html","02c9d8c937481413f90b9e1fba56c031"],["/2021/07/20/Review/月色真美/index.html","dd6405b43e6a27d6ac8bef852b743a48"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","5286b0c9db1d8f74d2c0b67616a56411"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","d23565772982685612328edbccc855c1"],["/2021/07/22/Review/罪惡王冠/index.html","c8334add3d03213a96620e097f6de403"],["/2021/07/23/Review/弱角友崎同學/index.html","446b0f648487a5a75389673abcc592a9"],["/2021/07/23/Review/惡之教程/index.html","d98b1e1a70be1a340dd7feff58c87c63"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","bbb92919ea72515f67753ffc417480f3"],["/2021/07/25/Review/魔王勇者/index.html","0c0b23d904a12d32f8ee263a3863ba19"],["/2021/07/27/Review/一年A班的怪物/index.html","564a273c6feff884868e81c66573b3cf"],["/2021/07/27/Review/奇巧計程車/index.html","5cad9de2b0d3ee968bfa40f8f65f48e7"],["/2021/07/27/Review/專情的碧池學妹/index.html","703fcccca16b922805f185a45a28cd0d"],["/2021/07/29/Review/只有我不存在的城市/index.html","864ad6f0882df14692504fd5719d628f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","5d31e51df42fc478bd4465f28a5af394"],["/2021/07/30/Review/可塑性記憶/index.html","236a644f48cb8c0f3e800a74da7e0650"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","2cf73f284b38282acd044ea11801df1b"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","0cee0c53f8c142289a96f4114944fc0a"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","d83362442b669e1f196147ffc3571cd2"],["/2021/08/25/Review/清戀/index.html","2d709ee8e55d3c42f1af1fdc6874fdb4"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","a1539455ba6396d67a20bc9ee2de6eec"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","cfbe2eb81a5c4fda8c01e78f3e4cb6b2"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","97f70a66c9b4295c39ecd427ed3b8d06"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","93f48a82eeb92b998d28477d91e14970"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","83d6b7fe6fdc7c4cfd57facadcddeab4"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","b6cdb7e52ad73e7be0bf26d15f524d9c"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","72c348b30b8e4fef40730dae804dea8d"],["/2021/10/16/Review/龍與雀斑公主/index.html","e3952db3611716c2c94ce6366bfbd594"],["/2021/10/19/Review/孤狼不想開後宮/index.html","9b36abf24f5d4df3030f14f9d797d5c5"],["/2021/11/13/Review/徹夜之歌/index.html","8c1ad133c554f00c12c042dcda0092e6"],["/2021/11/24/Review/武煉巔峰/index.html","f0c9bb1e35435cedcae580da94364ba5"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","6c9b7507aab7bcb95452afe056ca0c19"],["/2022/01/28/Review/神醫凰后/index.html","f5278b70ef95b101c54af75b1e1252f7"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","befb8da1cb4a9956f0280d8555a5a3e4"],["/2022/02/13/Review/夏日幽靈/index.html","0c4d2a901c1abe0682466780963e2583"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","71d8a00f311bc07ad2467884165209ef"],["/2022/02/26/Review/賽馬娘/index.html","732d1a408acb5b4aa183ea3902349aac"],["/2022/02/27/Review/大欺詐師/index.html","6b4b22e12e3b9ebf77ee292ac49fd059"],["/2022/02/28/Review/前輩有夠煩/index.html","17433a8365cce2643be7efbaeb02c5bf"],["/2022/02/28/Review/碧藍之海/index.html","0288ce56b379d26924dc96716bbd6059"],["/2022/03/05/Review/落第騎士英雄譚/index.html","440db86509d5de79f0860f4046b2d186"],["/2022/03/06/Review/Another/index.html","336d5081b8938f5c04a36ca2b1a4a940"],["/2022/03/06/Review/入間同學入魔了/index.html","b374240e7390a9174ed1075e481e64fd"],["/2022/03/18/Review/再見宣言/index.html","cd30ba6af95057c3f0979b81abf93e7d"],["/2022/03/23/Review/生若冬花的妳/index.html","18073a5f54dc80861eb6e38076f9f954"],["/2022/03/25/Review/天之弱/index.html","088f5f9efeb0818ba2a45735017df8ad"],["/2022/03/31/Review/滅了天道之後轉生/index.html","047e319871f773a1e9c966aa1713b133"],["/2022/04/30/Review/泡泡/index.html","6d27af9b1467608230e4134dfed959b8"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","df9caffb49c6af3479b0e9034da25b8d"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","fd3d50292867a223faccdbffac88f246"],["/2022/06/13/Review/偵探已經，死了/index.html","3c5179a676fd89d692f9dbeb0f598a37"],["/2022/06/14/Review/黑色子彈/index.html","1fe877d5cd00f6c3088004c085893394"],["/2022/06/15/Review/黑白來看守所/index.html","122673b989921e3412f20ce17362fcc9"],["/2022/06/16/Review/虛構推理/index.html","06a5244302fc84324ced441253bb7572"],["/2022/06/17/Review/戀愛與謊言/index.html","3eae642a27c6701b874efa94199f2e16"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","e31577a8b296681e2e009dfab3fec757"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a342f273f2d6dcc0583553fbbd661970"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","897948c8263cb48cf9b77d62d174e4cc"],["/2022/07/03/Review/Hello World/index.html","ed304ca081f433919587c7d15044dd36"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","6d551b1a85c3d5cf05948fad2a24cf2f"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","01aaa0f8ad0dc7981171b0041106eb05"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","d8171f29390da45622c0484d491c6079"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","02efad47e9321683b40137d150a066f5"],["/2022/07/16/Japanese/動詞分類/index.html","21a0e42c7f9a10d731aa590cccc3db54"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","4532f249c154d15b18375bbe08205f10"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","2c6b360fe2af460bbe2960c35aa83563"],["/2022/07/17/Japanese/音便/index.html","336a5e2d66639672c4ced8174420586e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d0d294b99474bc1ea12d32c561a39c92"],["/2022/07/19/Japanese/助詞用法整理1/index.html","40333811a77e2c1119ea0b64b8b3936d"],["/2022/07/26/Japanese/助詞用法整理2/index.html","bcc5288bb57ca456d057e493aa868435"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","e2ebff04541c27717afabfde305bfcfa"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","c7676300e6f4b458266927ab14dd9657"],["/2022/07/30/Japanese/疑問詞/index.html","d92c83373c1e95b31805ad9e00cd5331"],["/2022/07/31/Japanese/助詞用法整理3/index.html","e3205c7c3c9d4662a9bb7a896ee8b779"],["/2022/08/02/Japanese/副詞整理/index.html","8d7a204a77fc7391294036f3a080e441"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","ef1920f0d46aa2ab77a17d6806a028bd"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","45ca4b24762975423c2fc7eb666912ca"],["/2022/11/22/Review/組長女兒與保姆/index.html","6416e84b0c163505f5daa485da3c7d37"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","d93f20fdc19d4cd4fd091b9624232b3d"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","f626e15d93eed45eafffa8c4e42940ac"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","dbb39331d52298ed60860418117d675b"],["/404.html","585e399f8a8e25124ef6ba037297f4a6"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","64ba57313a69e871df035ee1860a0da1"],["/archives/2019/11/index.html","72ef812ff4517559cd8a1845a8303884"],["/archives/2019/12/index.html","384eae87199d127b8fd823b68e652e43"],["/archives/2019/index.html","35e733e32fe8e8c8a0f8c0254cecd290"],["/archives/2020/01/index.html","96f5d3a9279811102a1de52a68710f38"],["/archives/2020/02/index.html","d5b1696c9b8c2439c55c0e6b78ed3ab5"],["/archives/2020/03/index.html","729910eb569281012bf0d56bd072ca65"],["/archives/2020/04/index.html","89320b3464752dcd52198e9b7a373a0b"],["/archives/2020/05/index.html","5099c9e97b84f5a9b6b794eb55d121b6"],["/archives/2020/07/index.html","8eba77235d09ecf50460c1169de33c2b"],["/archives/2020/08/index.html","cc9f62ea6986cb591fee6533db2db6ff"],["/archives/2020/09/index.html","a43f16d2be5d26da771029839dfdc3d8"],["/archives/2020/10/index.html","4e701aeed051c6f571101029a56720e6"],["/archives/2020/11/index.html","7ee60a53b86138e24407c5543606c2cb"],["/archives/2020/12/index.html","c54a4af3e3469235d7d9076999f41895"],["/archives/2020/index.html","b1b4b11574b4812724cf6bc38a10eab4"],["/archives/2020/page/2/index.html","4a301d1731721aec4ede5534885a25fc"],["/archives/2020/page/3/index.html","96863f7858f289f7bd3711684a36ae08"],["/archives/2021/04/index.html","0a98cde9184e0a20d7a5950bd29bf7a9"],["/archives/2021/05/index.html","4fdd9f015ce2966e185f49647f915e3f"],["/archives/2021/06/index.html","309218f0f17c1e0bb9d836c4dd9ce1fd"],["/archives/2021/06/page/2/index.html","4a0c826d3a0ee31e6f3393d5dc78ddb9"],["/archives/2021/07/index.html","28f46a982fb1dc7ab34d756e56903239"],["/archives/2021/07/page/2/index.html","51ada5904394966c7015945331752a24"],["/archives/2021/07/page/3/index.html","c2bb2795200cbc8e1d9f375b83ca710d"],["/archives/2021/08/index.html","a89b651e81ae66aaf42fc6a02183ad95"],["/archives/2021/09/index.html","44244fc0ecc5b879705b48091c74dd3b"],["/archives/2021/10/index.html","330c8e93379cb3eec7dacde2ea16d23d"],["/archives/2021/11/index.html","c0c6bee75433e25f91bb5cc11a682f55"],["/archives/2021/12/index.html","0a3b94c58bf0634b825f1461bc547352"],["/archives/2021/index.html","e0ef3060dd1642a52149bb274998ae06"],["/archives/2021/page/2/index.html","476790db844ef72afa2b03d7d1188575"],["/archives/2021/page/3/index.html","8634d68b5af4152c644517c0203827b0"],["/archives/2021/page/4/index.html","a2fb8416022f24dc5409a6a204139c6d"],["/archives/2021/page/5/index.html","96bb73a7151bfade6d43c51aadd994ed"],["/archives/2021/page/6/index.html","dff4d0055e84f2521edd98825f77acc7"],["/archives/2021/page/7/index.html","f5962ebc35d0273c5271e693bf6dc079"],["/archives/2022/01/index.html","9d5d1489613fb4d7407a3e292c3f61b9"],["/archives/2022/02/index.html","07be00d3b1c24c6036e6feb9467ceb0e"],["/archives/2022/03/index.html","d75d8043e5a4999a5766f5f746beeaca"],["/archives/2022/04/index.html","dd77a2ed1e80249762ad4fa6bbfe3bf9"],["/archives/2022/05/index.html","43d65309b6eb588c54e6ebed45d84a74"],["/archives/2022/06/index.html","60803c560c9069991c67d888d4701837"],["/archives/2022/07/index.html","0a7d682fa8c702c7f2928fb58f5b67f4"],["/archives/2022/07/page/2/index.html","a4d86d25c35e1a6349aeca8206af52fe"],["/archives/2022/08/index.html","b0c0c5cd7ccb66dc245fc64f56305f1b"],["/archives/2022/11/index.html","16e5b9d1e27f05a17a5588629bdd482a"],["/archives/2022/12/index.html","8f7bc03366f16d180024f6bf0c98be4e"],["/archives/2022/index.html","9d018513c6128372860b640a351bee44"],["/archives/2022/page/2/index.html","ae6baba766a6ae4d991c1773664aa655"],["/archives/2022/page/3/index.html","701209b898d1f1bfd4e4659ce524c80b"],["/archives/2022/page/4/index.html","7491aef9be9451aea152d0b263010fe8"],["/archives/2022/page/5/index.html","241df0d21fb2448703ed2652f13c48a6"],["/archives/index.html","7d59dffd4e3c3ec81c1709bab5187d52"],["/archives/page/10/index.html","f26a0b619d2d6e0e0e553b2a40e93ba1"],["/archives/page/11/index.html","ea61261ee6475b99322db5d70a890ece"],["/archives/page/12/index.html","be5d81a032cf7e36fccdf38b76d9cb22"],["/archives/page/13/index.html","0cf53f4d0f1b1aaae630de9733219a6b"],["/archives/page/14/index.html","ec04736411fbbc50ac613aad14b96208"],["/archives/page/15/index.html","b349ce8f85827eece7645320ef4f940c"],["/archives/page/2/index.html","49e2a873f89ee62b00e65cd9450c26a8"],["/archives/page/3/index.html","a4bffe4e664a96fd973eb62828f6d99b"],["/archives/page/4/index.html","b61f0ccc09d175461fb43f08dbe1cb2d"],["/archives/page/5/index.html","8992cc623e6a72a858a9e3d3a98c12b3"],["/archives/page/6/index.html","86c7cb59359e9f3ac3ba63c67b12bacf"],["/archives/page/7/index.html","1bf3d5e918ff0ed58927ebeab434ba70"],["/archives/page/8/index.html","8db2306c334042d93bdba8c0ed40b91e"],["/archives/page/9/index.html","230040110aaa8c2ba389ac8e820c071a"],["/categories/Algorithm/index.html","2765cbb01c79a6a6abb82830334c1718"],["/categories/Review/index.html","0a1535f4774484e5c3df0f77e2b470f2"],["/categories/Review/page/10/index.html","5c1ebe8669e7a6c0d8b1d4dcfae798ba"],["/categories/Review/page/11/index.html","6ab524b59c2e52251e918133d3e8dc4b"],["/categories/Review/page/12/index.html","a400804057cb01af1dc0e79bd60034e0"],["/categories/Review/page/13/index.html","af935ee9468fac310a8bc10ae3e53ed2"],["/categories/Review/page/2/index.html","6ad780865bbfa3c8221ffa2688adf4fa"],["/categories/Review/page/3/index.html","d05393439b1eedefa1b84a97b81ee0f9"],["/categories/Review/page/4/index.html","bf3fcbc0c23d4a4483c04a32805933de"],["/categories/Review/page/5/index.html","9cad51225e52515b77e9c41d8458a635"],["/categories/Review/page/6/index.html","dbc9b382e82d12866e1d7a8a98efd240"],["/categories/Review/page/7/index.html","326eff8025a2647f8cac78011b237bce"],["/categories/Review/page/8/index.html","f66320c08f14a27632aa6ae895322db6"],["/categories/Review/page/9/index.html","550948427c2b54011eca684d64b66f60"],["/categories/index.html","782a2dd66376c64fcb54ca955574b069"],["/categories/日本語/index.html","60e6bb9b645783343c359a8d2c4a83a7"],["/categories/日本語/page/2/index.html","640e3c8c08937fd6cf3c386be6cb0e07"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","581acadf8ed93c056b5d5ae1834c9ef4"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","7f7529301fee4f626e8e1073ffd46e2b"],["/page/10/index.html","07a87d467b8493251f4ecd0196450e6a"],["/page/11/index.html","d789ef1fc85ef99efe76ef012c2cd3a5"],["/page/12/index.html","6724d4cece2f9aef7d7c469ab5354d4d"],["/page/13/index.html","e3c04bf83ccc6babf2bcd315781f8134"],["/page/14/index.html","1a6cf159c73f050cd0c3a8273365da69"],["/page/15/index.html","dde88fc55ed16d1ae158c13af79e217f"],["/page/2/index.html","7dfdbd5a35f331353a249bec77b9be7d"],["/page/3/index.html","0abdeaa2232028409531b332531a73c1"],["/page/4/index.html","7038d25c62aebd711d665da7953d1bd0"],["/page/5/index.html","08a34ebf4b4b43ae1309633ab0814c31"],["/page/6/index.html","404320ea16b75f6d1f14ad673e1720d1"],["/page/7/index.html","aadeb189eefd16629569b341faf716be"],["/page/8/index.html","91cb47b7e1014ec29be3aa99fab5ae2d"],["/page/9/index.html","1901dd38c21060311e4b2ec8debe61d5"],["/sw-register.js","ae47bbd79df0280548d5f5b91341aecc"],["/tags/10分作品/index.html","3a02637feebb2ec9135c05cd65f6dcdf"],["/tags/3分作品/index.html","21d8beb8632177b5901e8e19eecf69b9"],["/tags/4分作品/index.html","fa633ff167db2d23ef7f25c81b8670ce"],["/tags/5分作品/index.html","4beccb7a3eb1cade8b1a577d5e1ce4e0"],["/tags/6分作品/index.html","20d3fc0afb39cae000b0b536f3897e01"],["/tags/6分作品/page/2/index.html","72837a72719e68474eefa78439031a1f"],["/tags/6分作品/page/3/index.html","bc04ed70bb909fa89886c9e883941e8a"],["/tags/7分作品/index.html","82936a46ae99702278116615d75114d4"],["/tags/7分作品/page/2/index.html","4cdb32aa029469601828a214d538db8c"],["/tags/7分作品/page/3/index.html","a5b910f9c245d4af05223ce3085fbc92"],["/tags/7分作品/page/4/index.html","f292ab47ac65a70d186b71c69d7abecd"],["/tags/8分作品/index.html","7750f80d36403fecb5202fe7e24ae85e"],["/tags/8分作品/page/2/index.html","25036aec69c5eb921cc9d50429158821"],["/tags/8分作品/page/3/index.html","9bb9ac3095c2eb623a47667094f336f4"],["/tags/8分作品/page/4/index.html","84a665495f7e9169294497452f1b6d04"],["/tags/8分作品/page/5/index.html","dfa628953a061ca9fbb8f6fcc26a2e6c"],["/tags/9分作品/index.html","4c3f15f820f3f363d5ee7f75e6c9a327"],["/tags/index.html","c52daf49f6dce2e6da89a6681ef8cda4"],["/tags/アボガド６/index.html","edef6c5db7b8b82c767bf1b62e6706e9"],["/tags/三秋縋/index.html","17b63acf431827ec432ef6b5555f3d78"],["/tags/二宮敦人/index.html","23571ee6078244458060f8ca5394c763"],["/tags/住野夜/index.html","387a09087e35e0ba7920392fe8358201"],["/tags/佐野徹夜/index.html","7f5e9d18be32c08f9d9a369b91527a21"],["/tags/動畫/index.html","de816427184e2107b272abf10ec49e63"],["/tags/動畫/page/2/index.html","5e45636a3be1ffd5a9bb1c5fa5af3685"],["/tags/動畫/page/3/index.html","5d72be53fbcb589ed9204aac47cc4152"],["/tags/動畫/page/4/index.html","32ce11127e1ee046a0b3f85c89505022"],["/tags/啞鳴/index.html","bce03ca0fbf9edad97aab9a814d7cdc1"],["/tags/天澤夏月/index.html","b5b5cc7874b0038cc69f0e91bbeac731"],["/tags/學習/index.html","acd69afcaadc3125d678a79f587886c8"],["/tags/學習/page/2/index.html","bb40a43fff21ae09e01f43803de9babc"],["/tags/宮崎駿/index.html","b16cf75ad9870dfbbe8abfb5aeff7191"],["/tags/小說/index.html","fda017bd5042a8968830ee800c6b346d"],["/tags/小說/page/2/index.html","9e2ad480cb9fb53583abfab370409f2b"],["/tags/小說/page/3/index.html","724a5c2f4bd4ec6ecf25b0afd430b836"],["/tags/小說/page/4/index.html","b03967a37586e59a73f3f299d30a14f4"],["/tags/小說/page/5/index.html","443a2263ef7a74be3d7055f018026128"],["/tags/小說/page/6/index.html","0ded4c929fc1d0670f5bec83b62d1540"],["/tags/小說/page/7/index.html","f9ab2609b827b64c4855559c5dc97c11"],["/tags/志茂文彥/index.html","8e02bcd5d24940b96d0cda48763c4628"],["/tags/斜線堂有紀/index.html","a8d1fbddc5d9bde41b35e74386d4c294"],["/tags/漫畫/index.html","1a34ed529bd6face9399ec8012e7e842"],["/tags/葦舟ナツ/index.html","f4b9fb471b17e6acdcf809b22bc276f6"],["/tags/藤萬留/index.html","940294a367cf7caa4e74a174082a8ece"],["/tags/電影/index.html","c85a1aad3a752841486da0fbe342ba30"],["/tags/電影/page/2/index.html","afb28611236838921e3f8d8225e94bc1"]];
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
