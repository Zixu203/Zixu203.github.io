/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","5ff444992089b8e1768ac259a43909e0"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","637c591e568973e8e2984357b62db1d9"],["/2019/12/25/Review/無法計算的青春/index.html","9f6b0f2fd1f935555f65b11be0299d12"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","64f825f6fa18f15f401db5cb2da11ef9"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","fa92b21fd3bb844c8a426bd260a3677c"],["/2020/01/19/Review/下雨天，不上學/index.html","1aaf7a9a4f88ac7b5fc686ecdedc6e61"],["/2020/01/26/Review/三日間的幸福/index.html","1840d1e85fb7d745ca758571d0f451ee"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","2ed5fd943b3313fe9dc5cfeda966f341"],["/2020/02/09/Review/青春期超感應/index.html","aa66291985209d48f32658f5ddb0bb35"],["/2020/02/15/Review/又做了，相同的夢/index.html","e6e00bd4b59223083148da253bcd3806"],["/2020/02/22/Review/回憶當鋪/index.html","9774a249b2e4a07acfa90e4953420ab4"],["/2020/03/22/Review/不適合自殺的季節/index.html","b477550d0c70b35d9d528e57f782e2e1"],["/2020/04/26/Review/我們都無法成為大人/index.html","94db00a21d020bdc96344b4e8fcab8fd"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9e87c9e04b2351cad3f0782b0b18f9fc"],["/2020/05/17/Review/人間失格/index.html","e6cf15e6545253b1133b4f5355305f20"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","8e364be8828201105949f5bf47f5d401"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","3e4ae397ae97663cce81b64ab5675d6a"],["/2020/08/01/Review/銀河鐵道之夜/index.html","7138d62f0a9f2e9582d990753faf4bc5"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","766d2e49ef043fd536b612fe8fe97ab3"],["/2020/08/16/Review/15歲的恐怖分子/index.html","ac095c3000fd91109e1e30b13eb6bc9e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","154005f43acd79b1c626b89b2bcbcb31"],["/2020/09/13/Review/羅生門/index.html","eedc405ea150c7482df27e8a0c0d32fc"],["/2020/09/20/Review/闇夜的怪物/index.html","4b57ee1c88809d64dafd80a7d95ab5e9"],["/2020/09/27/Review/14歲，明日的課表/index.html","ab9ae70b21f5880a7a9b9eae025bfdc2"],["/2020/10/04/Review/致十年後的你/index.html","da8b76b6db3612062f96c0e45398ff17"],["/2020/11/08/Review/滅絕之園/index.html","0025a4013e0b75446d284a8933e92863"],["/2020/11/15/Review/將愛拒於門外/index.html","b1426a3657e8d3356d8dd4d207c8fd91"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","ddeff8b12069c121ba158dbdd8525097"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","bf777fa3b34248504704fc453b53461f"],["/2021/04/22/Review/道印/index.html","aa7151e0a34c855381881efc1661259c"],["/2021/05/03/Review/戀入膏肓/index.html","a1ff21aba1bfa08d91d115653fd1f350"],["/2021/05/10/Review/Dice/index.html","61667c3e21025b3ca7a8b1a6af841118"],["/2021/05/15/Review/魔女之旅/index.html","92913f684757cc28eaa90956b2070f0b"],["/2021/05/28/Review/戀愛寄生蟲/index.html","2c6f8c4eb7e5555221f31ce64366be10"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","ac3ab9cc569507b8527cce21740471bf"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","473740eda52ab698d3f4b3194438c923"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","48fe6511320ae4eee5efced7e2dc8af5"],["/2021/06/05/Review/流浪的月/index.html","e7d356df271469f854947a7f0575ab29"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","4bed16e6d372ef3dfdaa50071126c0de"],["/2021/06/13/Review/第一人稱單數/index.html","a949eebcb0220c92293973272ea4d306"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","31f2c693bb6333a4c3036c9de518258f"],["/2021/06/16/Review/願你幸福/index.html","0eef38fbd49add0a3a7b4da151c291c0"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","798b0fa6d859a76546f1d6d691b72557"],["/2021/06/21/Review/神隱少女/index.html","5a37a786be95e74029f391e2de3eaca7"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","352b131591351e1c1db6353e47ce2f6a"],["/2021/06/23/Review/天空之城/index.html","206e9081476c5e095184a39ca2f61535"],["/2021/06/24/Review/魔女宅急便/index.html","cae5fb554ce903703913a2b6e11881be"],["/2021/06/25/Review/借物少女艾利緹/index.html","a9a51889c93781b79752a13533ccf7ef"],["/2021/06/26/Review/魔法公主/index.html","e0f7e00030d2694e4d2fb8b276294e9e"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","158de41f52054b051785e9df6a5b6cd2"],["/2021/07/04/Review/飛雪與劍/index.html","2a71c1dfce8dc1e8ed67245faca61e24"],["/2021/07/09/Review/地球防衛少年/index.html","1510044974f093c998ba55ff288846d3"],["/2021/07/12/Review/Angel Beats!/index.html","16cf2817ae3d8f757d2a691bf0f3a260"],["/2021/07/13/Review/Clannad/index.html","11f962d6a5754f57508b7bccba52dba8"],["/2021/07/15/Review/AIR/index.html","0a0f164cd9f147b8830e9afdf68d51eb"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","8202adfe698068e19754a964fc7b1763"],["/2021/07/15/Review/螢火之森/index.html","f9c4c3b3063e9ba0b17a8cf8bec1ea5f"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","d9cd617e39f8660cc405f0b39fa64ad6"],["/2021/07/17/Review/奇蛋物語/index.html","fd0db70f0bc1c87d8b039d7c4a79e235"],["/2021/07/18/Review/Vivy/index.html","46b8b7df9196781e67c46b65105e622e"],["/2021/07/18/Review/請妳消失吧/index.html","6ccfa5be77d644ce84d2839883d8ea7e"],["/2021/07/19/Review/漣漪的夜晚/index.html","d8c530fc912a4404f2a1fa4f3b172bda"],["/2021/07/20/Review/月色真美/index.html","5b3c50854c672299032dd4b0dd295d57"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","7b5788b114490dfd2c2a72bb39fc11a0"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","98a97eca8c8b8c235f4d74f84f4fbb70"],["/2021/07/22/Review/罪惡王冠/index.html","92a2f0ea9688af4f2125d90c5d0c72df"],["/2021/07/23/Review/弱角友崎同學/index.html","d8d25821c098eebb4733e7707e9a2843"],["/2021/07/23/Review/惡之教程/index.html","fdf6a03221b055eadd22003cd47b58b4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","f0b34d1626808f5cc173475acfe03dd9"],["/2021/07/25/Review/魔王勇者/index.html","3e9b104fed83e14c392755528b86e18f"],["/2021/07/27/Review/一年A班的怪物/index.html","2bbd6ef284c7fa5f264de64f2fc96aae"],["/2021/07/27/Review/奇巧計程車/index.html","81107091667ba0e236ce1014d47b6084"],["/2021/07/27/Review/專情的碧池學妹/index.html","f3c284fb19ceccf618a95b783feffe3a"],["/2021/07/29/Review/只有我不存在的城市/index.html","1cfad18c47f7f51dfad8dde3669855d3"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","a299effc7614333c0c0f6f3d3f5191e1"],["/2021/07/30/Review/可塑性記憶/index.html","2295fbfe607773b2be423cc90b8a6847"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","c27352d4c8d0267fa52ae10fea670749"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","b0c32fe04c747b8f756c69eeaca65234"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","6b7490c56344c6262b3bc3cbf96e4766"],["/2021/08/25/Review/清戀/index.html","67dd68227655c5099f528d9fde30aff2"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","bd908691fc9d9c2248d96b80b687733f"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","3ba18900165af5ea1df8c54835f27142"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","44678fcc6ac53d2c0afad04294291c16"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","8c2165f45cc199084393c740d8f975e3"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","6290e2a750da819efdee950e8af0625e"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","7fc507c206574b0b373ffd42f6326207"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","fab11fb00dd526f574d646ba74d348c4"],["/2021/10/16/Review/龍與雀斑公主/index.html","33fad99c35a3c4157f61ad94275f8960"],["/2021/10/19/Review/孤狼不想開後宮/index.html","a4f378e99d1da3155951b861f451ed63"],["/2021/11/13/Review/徹夜之歌/index.html","3a64bc4d854d1daf8c4d6bc862d9c20c"],["/2021/11/24/Review/武煉巔峰/index.html","98f99a8fa849c9786cc5bf51eef760fd"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","0d0624c72eed20206e46e884c5232aa6"],["/2022/01/28/Review/神醫凰后/index.html","da9273aca775b6513523b0335657578c"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","08f7ca5ccc7a2e36ebe677f057f5b06c"],["/2022/02/13/Review/夏日幽靈/index.html","2b6d6123049908c85d5fa54dc706a80d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","c76254ef054ac971a8945e4fa6485690"],["/2022/02/26/Review/賽馬娘/index.html","dcd1a76056439406a4e0a0adceea7122"],["/2022/02/27/Review/大欺詐師/index.html","62ccef04856363bb4f349239d7e3ab8f"],["/2022/02/28/Review/前輩有夠煩/index.html","8ec7d921fb2a97fddec6c6b0138cc730"],["/2022/02/28/Review/碧藍之海/index.html","5b56303f7df2ae33ccb2dd2e2f39576a"],["/2022/03/05/Review/落第騎士英雄譚/index.html","0c7d0bcc3ef57cc22ebc1f4b8635cfa2"],["/2022/03/06/Review/Another/index.html","87f75c0d54983566f8ad440b35eef276"],["/2022/03/06/Review/入間同學入魔了/index.html","623ccc795dcdef58a57952c46f04bfbf"],["/2022/03/18/Review/再見宣言/index.html","1ef178d70661afaaaa139cd9cc766a11"],["/2022/03/23/Review/生若冬花的妳/index.html","27e9451369644cd242bab506d4a92f88"],["/2022/03/25/Review/天之弱/index.html","b1291e1547667f3ec6dabacf3dd3b174"],["/2022/03/31/Review/滅了天道之後轉生/index.html","55b5b27bc400ee305245cfc743e7208a"],["/2022/04/30/Review/泡泡/index.html","14e94ed7d08333ac2d9b2b77c581cbfa"],["/2022/05/04/Programming/Dynamic Programming/index.html","16d474e0f746e5dab70ea93ee681adcf"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","37ab31d451f954e8b8e00c28449f5606"],["/2022/06/13/Review/偵探已經，死了/index.html","83bb2dc11d2626c3b723274780f7ad5d"],["/2022/06/14/Review/黑色子彈/index.html","0864a4b501a369b0057c7413498c222b"],["/2022/06/15/Review/黑白來看守所/index.html","c82f827e049f1e219e7efda1e776a9fd"],["/2022/06/16/Review/虛構推理/index.html","baf085d66d3aff23c1171eadc44e1383"],["/2022/06/17/Review/戀愛與謊言/index.html","4d8834526c4556d3560bc5257ad0f7de"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","17d3f1d105a497fa3f927a707be51b09"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","9dee7907635caf6a9fe45630f4cb0e3c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ac8d9aa18d2c06663c055dcbdf3f864e"],["/2022/07/03/Review/Hello World/index.html","ec6c8c93322a57e8ce32ab9668d2be7a"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","189c544e9b0c3fcc154054f6dcc1812a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","4adcf4cadafcc599ff381255da8d3b06"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","64f22ece00ad31c3b994f6c20fababcb"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","1cead0305f4c8838f629404aa5ef540f"],["/2022/07/16/Japanese/動詞分類/index.html","511ea8883d2df22d23720ec3b429bb4a"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","7613da4b331b1ba8ec28c6e880108b31"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","55022338a72d21aca44b7607f5f6b484"],["/2022/07/17/Japanese/音便/index.html","6d39f40792942fdb78c969cd630843f1"],["/2022/07/18/Japanese/動詞 時態變化/index.html","04dd528ca40c801ed9d7ea2d10cf8101"],["/2022/07/19/Japanese/助詞用法整理1/index.html","6af217d0fb02b0d8b099a9cb21f35b48"],["/2022/07/26/Japanese/助詞用法整理2/index.html","0ba25e75f92a590d4d3316f4c9bad9d6"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","0ad3f55294c7e388ca8c2093c44502f4"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","f7fd90d53adf142916e8138c41a4a71d"],["/2022/07/30/Japanese/疑問詞/index.html","bfab1dbf8708ee054ccedd8d55891a88"],["/2022/07/31/Japanese/助詞用法整理3/index.html","90c2654e6bd2d687d884e21582ab48a1"],["/2022/08/02/Japanese/副詞整理/index.html","a7efa7f1aa47cf3eb98b889aae6e54b2"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","4b82a456ef6ad1d969833242e2ef10f2"],["/2022/11/04/Programming/Data Structure/index.html","f8e70d19c94c515856208c21d00ca815"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","88357f6cee92002e0186ee4cc82fd192"],["/2022/11/22/Review/組長女兒與保姆/index.html","c6432ddf418eb7d309ffa0ea62ab5284"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","ef19937538ddb2f2e874120ff0f68753"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","33dab14c5a8ac78ff5933d193bbdceff"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","8b974bd1e93ef0d2179664a5b172a90c"],["/404.html","bb2507750aa1edae86768b22df5dfe39"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","129867b9cff7fddce9bda170d73efd4e"],["/archives/2019/11/index.html","91706719c085568bcca9b0a6aa046ca0"],["/archives/2019/12/index.html","5abf7a56125b252435193e80ef22006c"],["/archives/2019/index.html","e4dcbf7c4b4c9be2210f8eeaf24baaf1"],["/archives/2020/01/index.html","8b992db1b111d259408e8a3a4d708848"],["/archives/2020/02/index.html","cb52ca480e726186c2ee2fa38ac5e788"],["/archives/2020/03/index.html","fc468dc94cf39907245205fae21b0b60"],["/archives/2020/04/index.html","5cd0737d7eedea5faa23c754c1fd8c85"],["/archives/2020/05/index.html","1de19a9eefe6925dd44152080a07a071"],["/archives/2020/07/index.html","efcc2656ac0afe0aa8e974048e78fd9a"],["/archives/2020/08/index.html","1e9dde73db843e84f90a412b28d3421a"],["/archives/2020/09/index.html","99d877a2ef01da369faafdac251798b0"],["/archives/2020/10/index.html","de7c04ffc6376cb184234136e5d7b22a"],["/archives/2020/11/index.html","6d6b7815462523cc581c56116dc4891a"],["/archives/2020/12/index.html","4200c5de0ac6f60580b49c636f850eb6"],["/archives/2020/index.html","0e9020fa67a822aa5d4293311ffbc6b4"],["/archives/2020/page/2/index.html","d077baf692f3dfc4b8fdb323cf274c2c"],["/archives/2020/page/3/index.html","ce9455d5bc53bf22c8e56480f0943901"],["/archives/2021/04/index.html","8b0c5746a9115753a20355dffde21b3d"],["/archives/2021/05/index.html","f182e4570ccd978fe7cda0a7a76dbef9"],["/archives/2021/06/index.html","67cbfb60a2949dca5465cf163c971634"],["/archives/2021/06/page/2/index.html","5c41247731de340885fb8e44b8743e76"],["/archives/2021/07/index.html","cd4a7bea7a261324252a30248a1fece7"],["/archives/2021/07/page/2/index.html","92a3e9a86d994d6ee89bef29b35e3aff"],["/archives/2021/07/page/3/index.html","2ee474dc79a45ccef95fbea009b3fd0a"],["/archives/2021/08/index.html","c243716c62d9a8df75f57a45794b4e1b"],["/archives/2021/09/index.html","491e84f17a7de33ab23d1ab99178ade2"],["/archives/2021/10/index.html","5512d2c6a4a371872ee8b5fbdeb10c71"],["/archives/2021/11/index.html","7547648920f5aed97af53cf8f2baecb2"],["/archives/2021/12/index.html","0a20bde0abcc8385f3c4821c0f207e82"],["/archives/2021/index.html","3e4f1c66b3091bc3d67fe3ad9fe9867a"],["/archives/2021/page/2/index.html","35b7e2942badd64950529aab268309b9"],["/archives/2021/page/3/index.html","9333b5740f2ddb489c15a66e00975cea"],["/archives/2021/page/4/index.html","8afc353c9bf4a5706d2db6c9b7421072"],["/archives/2021/page/5/index.html","c8eee0dc7b49759272f1fe0e96263f5e"],["/archives/2021/page/6/index.html","c8f79a1b96f5a993e5d217f8ecfc61eb"],["/archives/2021/page/7/index.html","35977e74f6bd7faca97a788d1feb7300"],["/archives/2022/01/index.html","4eee637b8c74bc6cae74f88080934430"],["/archives/2022/02/index.html","ac6cbfefb0068f11c858e220830184d7"],["/archives/2022/03/index.html","e0a0ce5416ca92427dea2f32c88e9a77"],["/archives/2022/04/index.html","36a4bbab664bb07def89a0138b036f54"],["/archives/2022/05/index.html","063050aaa066c39aa759efc71144504e"],["/archives/2022/06/index.html","7105c2d48c96a6b9d588508308520e6f"],["/archives/2022/07/index.html","7d1b038b20fa6db915c126fb22f19295"],["/archives/2022/07/page/2/index.html","853958b77ceef2f857bb71563092f6c0"],["/archives/2022/08/index.html","672ce40a27b6dcbfcb33d659c8776be2"],["/archives/2022/11/index.html","7059025ed9234b6afff30ed0f449d835"],["/archives/2022/12/index.html","5497c613eb2e1a47378c6d7bcb9a8a10"],["/archives/2022/index.html","647f974f5dce8a612129d064391bcbcc"],["/archives/2022/page/2/index.html","bf0b6b3088b81e964a4c21c6f66ec3e6"],["/archives/2022/page/3/index.html","b05918903281681c68dd76a36083106f"],["/archives/2022/page/4/index.html","f133adb3d8d0f17d6ca156e18d8c0f7c"],["/archives/2022/page/5/index.html","44403aac9af7cb227adef928009a1cc4"],["/archives/index.html","da5f39a54cf8330e832a3637ece134c3"],["/archives/page/10/index.html","080ac53adcb909cfc4fe2869b85ebefe"],["/archives/page/11/index.html","e24c46be004599420f656aa390c6ecf8"],["/archives/page/12/index.html","8e2f41e1234af0e8dfd451a3987672e1"],["/archives/page/13/index.html","f8336fad6ddb7df50fc296f61de50588"],["/archives/page/14/index.html","8d17a335cc4458a4fe6c83831c4e409b"],["/archives/page/15/index.html","67af254dc7cc5d034cf17c4f00963cae"],["/archives/page/2/index.html","93219a1d8af411ba3a94c676c7a3f190"],["/archives/page/3/index.html","9b8e73169d493a1f3988eb02d78ef5da"],["/archives/page/4/index.html","33138acaf7212e7cda163a3e1b427cee"],["/archives/page/5/index.html","32cf75e0d3cc0a06d96ddab8a3e479c7"],["/archives/page/6/index.html","2806eb870d025f3c836fa9e2e06de424"],["/archives/page/7/index.html","1993967b836e152abe811a40910cfd25"],["/archives/page/8/index.html","fef735afc82f9c52884b44eff3de14cf"],["/archives/page/9/index.html","5d05178513fb0d73a065635a9bb6f5e6"],["/categories/Programming/index.html","b33dffde693227061a6accc29c028572"],["/categories/Review/index.html","cd8a4bbc0ea92055efbbe4e7b6e55b1f"],["/categories/Review/page/10/index.html","4baf626d8f75a8f6b3fa9fcd63d23d76"],["/categories/Review/page/11/index.html","7b65c876e8e09e32d9d00f77f2413ff1"],["/categories/Review/page/12/index.html","1da5a27b03ae5ab618ba7e282581425b"],["/categories/Review/page/13/index.html","68bdb9c811787b6259573264bfd3ae85"],["/categories/Review/page/2/index.html","ac11c900ca9bc834981608e8e8fa0f1e"],["/categories/Review/page/3/index.html","b11606a443fcfc73de94d7f50e91a8f8"],["/categories/Review/page/4/index.html","fc5d9e64dc350ec7421b3fee584cd2b9"],["/categories/Review/page/5/index.html","6a0a8af898f280822e930d3ee7062fc0"],["/categories/Review/page/6/index.html","998f22b39c1c95c91623e89fed9a54ba"],["/categories/Review/page/7/index.html","8efd581fa6412f8be96327df9bad4d91"],["/categories/Review/page/8/index.html","0479c76f119b282e91469d7b4043376d"],["/categories/Review/page/9/index.html","ba19cc12fe0911ed3ee3d338350d6c49"],["/categories/index.html","cde517d36430ebbf3c6d6d62f0591dc2"],["/categories/日本語/index.html","53b4aad975a262407a853026d1b01800"],["/categories/日本語/page/2/index.html","02601a4a6b51f1d4361296b1e4c4a03a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","03b15fc5343f14b877eb5b5e95644045"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","da7c3c15a81e367b13463ee2de499154"],["/page/10/index.html","72060de1dc3b196a7649172d0cd26bfe"],["/page/11/index.html","58d76c68c0a8d5bdaf328250912da774"],["/page/12/index.html","fcdcde7f8a37c4e8ad431f4a193ca355"],["/page/13/index.html","637c922c085bf455af7e985ac87fe4bc"],["/page/14/index.html","c9248e3a449510819dfe638d88b41ea2"],["/page/15/index.html","e6ed2c394493a89981d089aa53527660"],["/page/2/index.html","4c9a1072740407613ea86311714bff9e"],["/page/3/index.html","7c5dafcdd8ef8f30ef4479ff1a452967"],["/page/4/index.html","6fede561d7647f3993189f14ee44098f"],["/page/5/index.html","bc7b71b5baaf0de7c0c3bac8c7e39d8d"],["/page/6/index.html","23303ee09ae5041c4ef754ff36852eac"],["/page/7/index.html","3835d54a8d930c90c708e16f9269e1c3"],["/page/8/index.html","16f3ffcd0d8cb1cf110a5dc0c6eadae5"],["/page/9/index.html","b7ca4118cd7756ec4653968e0dadf6cf"],["/sw-register.js","c0f509f4a3b32b1be6e467c5677008b5"],["/tags/10分作品/index.html","5166593146cf31e2317d468c734dcde7"],["/tags/3分作品/index.html","f48b5f08152b740820cce39fdb1ffdde"],["/tags/4分作品/index.html","55f26610826b17b75abb31c6d157dc6c"],["/tags/5分作品/index.html","62dec4443268ccf9193e8a169333fbf9"],["/tags/6分作品/index.html","0c276c5266d40a7fa7dd35e0df7209af"],["/tags/6分作品/page/2/index.html","3bacdbdbf5b377595647e751f14db5a2"],["/tags/6分作品/page/3/index.html","eb881b577333c459e0519c679d4b86e8"],["/tags/7分作品/index.html","4c0ef1e8d009e13eb18009b379df30b2"],["/tags/7分作品/page/2/index.html","32ec1432c6c0c7f2abed3c40d9051b6d"],["/tags/7分作品/page/3/index.html","cd99b53b5d8a3ce513cd1461166e3baf"],["/tags/7分作品/page/4/index.html","eb016e8126277b2489f02499984bc0e0"],["/tags/8分作品/index.html","9310d3c56c73ed0c08e2f1ff763e5dca"],["/tags/8分作品/page/2/index.html","372b75608e2d93ce79a2a81d7111ac16"],["/tags/8分作品/page/3/index.html","9be3ad1dd9d79eb17f31e6b6b213324e"],["/tags/8分作品/page/4/index.html","c0873a111c70cb2612c864b57050829b"],["/tags/8分作品/page/5/index.html","43cf1314daeebb2042a8d010659d81ac"],["/tags/9分作品/index.html","12b48e9f91b3f8a30cf65769a41e6c78"],["/tags/N5難度/index.html","04fc8aa8f93fe4e2c84dc882f8802c32"],["/tags/N5難度/page/2/index.html","0d741706fb2ea72246dbd64560f604e9"],["/tags/index.html","aa110053ca3224ea685fd8a18fe47eb8"],["/tags/アボガド６/index.html","053772a0803fe39035a2f9d8b134bf01"],["/tags/三秋縋/index.html","c86aca297420285d194fc0cf7c82cff2"],["/tags/中國武俠/index.html","b4d8d4bbbb2cae8403e8bddc32fb6c03"],["/tags/中國言情/index.html","278f086c87129c4d0db2331f6abd81f8"],["/tags/二宮敦人/index.html","450c1e67b6ca514b7c1d40e69e9936c3"],["/tags/人性/index.html","b4b44ab71f518b59c6f9936f5e1c9a0e"],["/tags/人際/index.html","5cf6a230f00045175cf82b44f6d131df"],["/tags/住野夜/index.html","fb4514f0df9d507c3114a59d612896a5"],["/tags/佐野徹夜/index.html","cba4df8e1836e8f3aa0363787e2c3725"],["/tags/努力/index.html","c5ad633b1a6d1bb34ace673a31491075"],["/tags/動畫/index.html","1b80078e4f69686c7a9f08ffdf783af0"],["/tags/動畫/page/2/index.html","652609a747ca43a1be54ae26668fae0a"],["/tags/動畫/page/3/index.html","527752fe6354718aaa1e634f7ee5f8ed"],["/tags/動畫/page/4/index.html","e0475bda347181d649efc642a378732c"],["/tags/原諒/index.html","be2f43a5835f4e701e4124b86facb7fb"],["/tags/反烏托邦/index.html","88caf72f70108c984d6f463f5bea194e"],["/tags/啞鳴/index.html","da101eba37f8f3494378544e234e8b05"],["/tags/喜劇/index.html","5786946b553698b2722b6d377045b203"],["/tags/夢想/index.html","f5814c69fe45a3d63576eec60e60be70"],["/tags/天澤夏月/index.html","ece5510538948dfc6c9db37fa791668d"],["/tags/學習/index.html","edf9753cbd36816db34ad0c8ca99a3f7"],["/tags/學習/page/2/index.html","f6f38cc1fdad2afe43c7ce1829e40840"],["/tags/宮崎駿/index.html","f554f20ad36d5c1314fa55b56a81905e"],["/tags/小說/index.html","3dbce7781362818a7463164448e9285e"],["/tags/小說/page/2/index.html","67e32659ef059e07f9446b87b422cbf2"],["/tags/小說/page/3/index.html","b4bf5c57d578344844df300a083d9c28"],["/tags/小說/page/4/index.html","8d0a6271cf0fa9608eb287f2206f4de9"],["/tags/小說/page/5/index.html","350587f15c78fdfb18b65c7e7275a412"],["/tags/小說/page/6/index.html","bca7040d8cb44edc176994dec4bdc537"],["/tags/小說/page/7/index.html","7a1fddcad321bef1e5527bf78e527907"],["/tags/平淡生活/index.html","71e16accc12e8c01591af9d8a44a67ea"],["/tags/幸福/index.html","81fb386ce34ff333dca1de6fee501837"],["/tags/志茂文彥/index.html","fe581eaf1b971b770636065847d5582b"],["/tags/愛情/index.html","9bc2e92797aed06addd856956170d465"],["/tags/愛情/page/2/index.html","7795d561005cd5a9690f83cb75e6d910"],["/tags/愛情/page/3/index.html","00df5fdcf47a15575b45891ba6049c96"],["/tags/感動/index.html","5d81509e18cd200df6dc24283cae51ce"],["/tags/懸疑/index.html","2061b666990b0168c10eb9f688d3eab2"],["/tags/懸疑科幻/index.html","7e66807329afafaad386558e7f1aa6a4"],["/tags/戀愛/index.html","c2779e54072c2748033af0130b48a492"],["/tags/成長/index.html","6377ee5a625ce6c7d107752f8f2d4e5c"],["/tags/成長/page/2/index.html","9e2c2a7769aed66788c4385eec5e331b"],["/tags/戰爭/index.html","6ec1c85e70d832b7856f06c1c2866d9e"],["/tags/推理/index.html","d943b0858f5a00e3fe5378b9b270d0b1"],["/tags/搞笑/index.html","82ff835158584b960bdd357dcf72a277"],["/tags/救贖/index.html","321cd94fc0e4ed808e7cd51f8b49590a"],["/tags/斜線堂有紀/index.html","0c0c563a2a6236c7b30c135143882622"],["/tags/日常/index.html","69674ffcac598dfd62214e8725fb7202"],["/tags/末日/index.html","ab8a2794f5816f6e0dea67358b04050a"],["/tags/校園/index.html","b428e2abc75c5ce56cc7c931d8b50a5a"],["/tags/武俠/index.html","6cdeefc709675974593fa54c18e2e2d4"],["/tags/武俠言情/index.html","8f80379107ad51492017991a1bd826fe"],["/tags/漫畫/index.html","17f4f22c272a3187040be10745d7dfd9"],["/tags/生命/index.html","315c0866ada584bb4c51e824c6e32c79"],["/tags/生命/page/2/index.html","4e17342c531b43d3f2da63d0cba4cca0"],["/tags/短篇/index.html","47b9b4a49814bbd717d8b99c3a957fdf"],["/tags/社會/index.html","05a00eda49a2c02d0b5645502bb63005"],["/tags/科幻/index.html","ac95a68b6fbecdceef931e95c86a33f4"],["/tags/童話/index.html","9a134dd34722401c4546a74ab0298096"],["/tags/競爭/index.html","1629ee7deb1b13257f9a76df66a36e26"],["/tags/自我/index.html","8a5fe1db49cfe5836c09a64a03226e4b"],["/tags/自我認知/index.html","e17012f9762ee583f5e569a98bcc659f"],["/tags/葦舟ナツ/index.html","b12f9a791f20366251cb0cb66d5f13b5"],["/tags/藤萬留/index.html","8f3c720bbb3f7df6d3779ca1416f325b"],["/tags/親情/index.html","2bb11f9ec6709a3ae4c67525ba350fb9"],["/tags/雜項/index.html","e85083051f98652531f26f79a8d0e22c"],["/tags/電影/index.html","2c12107426d4e13f62781ef4f09d3a28"],["/tags/電影/page/2/index.html","b0e5e3f6d8960778200f7dc54fa62993"],["/tags/霸凌/index.html","1a8acd1cc0b2ad770514183b1643d4a5"],["/tags/青春/index.html","f1f16441437d784155f364a39bbd4ae7"]];
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
