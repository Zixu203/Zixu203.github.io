/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","ed363dd9b402d7e9cdc5e43a005ed276"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","c1d88248a9d487486c1df6e0e65fd16f"],["/2019/12/25/Review/無法計算的青春/index.html","8c9d14242a0f6b2e02dd0ef710525d04"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","8277b347b634404c03a235d7b668b10d"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","5560eaa9f33fd08621cbb0dde782292a"],["/2020/01/19/Review/下雨天，不上學/index.html","38af354ffc2b8533c4baaf3773de499c"],["/2020/01/26/Review/三日間的幸福/index.html","2f26de1ac15ed09ac18a80a861e14b4c"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","83ef828a0fa0a4fcf2486cb15ec537ab"],["/2020/02/09/Review/青春期超感應/index.html","23f11e2424b762a71c7fb5392d673fd7"],["/2020/02/15/Review/又做了，相同的夢/index.html","93cdac3b0a98c8301ec9431cebb71834"],["/2020/02/22/Review/回憶當鋪/index.html","df65a3313f5b781b6d00b7a6d420bf61"],["/2020/03/22/Review/不適合自殺的季節/index.html","716db46fbbe88179726a6b977fb6a00d"],["/2020/04/26/Review/我們都無法成為大人/index.html","864d71d113de87a5acf2c08bfa5e3eb2"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","febe32215bc2446796d120df1387cba4"],["/2020/05/17/Review/人間失格/index.html","5500c4a7323dc758a5ff6a060089b852"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","95876a780d2a31c5b691ce921fb6d74d"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","0bb0ce0fb7a3c4a093fab3de09d21b14"],["/2020/08/01/Review/銀河鐵道之夜/index.html","a42308d2267c64d88bacd67888cd413b"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","e9e3b9133b27333715cb1c96f2244d7c"],["/2020/08/16/Review/15歲的恐怖分子/index.html","862ca828c0a60cdd2ddd655c3f5e3b38"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","acda90cf50d486f8d471eba011de3eee"],["/2020/09/13/Review/羅生門/index.html","30b1e4751ce9feca758f856169efc4e4"],["/2020/09/20/Review/闇夜的怪物/index.html","b5032253aa030d65eb7f6add2fd5fbcd"],["/2020/09/27/Review/14歲，明日的課表/index.html","b58d56c2ca8de2d07ec72f6f02241041"],["/2020/10/04/Review/致十年後的你/index.html","49f0417120e7f403de1f55c74d2a6503"],["/2020/11/08/Review/滅絕之園/index.html","1ac995e8f0c22e825f25ecbbde6bda90"],["/2020/11/15/Review/將愛拒於門外/index.html","58d24b586da15a46187df86f0ea8975a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","4893c1a663bd9010c99918756f04704f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","33644bb9141defeac136d84aafe88015"],["/2021/04/22/Review/道印/index.html","0abf4af735cdf15607c1e1fe40ae1a8a"],["/2021/05/03/Review/戀入膏肓/index.html","94f5cc8b22be77c92dcc643bb4b54eb6"],["/2021/05/10/Review/Dice/index.html","c3756d1d5875a36790bf1eb9b00c3c10"],["/2021/05/15/Review/魔女之旅/index.html","f8fd2410904f62f2bbcbcff84e000e80"],["/2021/05/28/Review/戀愛寄生蟲/index.html","13292f56adba3ec999868c99c857cf67"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","83aa94619946807e966e8297d2c4e10c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","195dbc11a6f920eb82f17c897ba7c921"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","16a68ed9aba7659dca2dd0b88fcac7cf"],["/2021/06/05/Review/流浪的月/index.html","dd93cb6d0a8b95ec2389269adc11300a"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","ff46fc927003bd1427ffb24347d5d7b6"],["/2021/06/13/Review/第一人稱單數/index.html","44b068c167354ce53dd76e0dfdbf607d"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","a75704e4ae722cbc10362388df01f580"],["/2021/06/16/Review/願你幸福/index.html","460521b7c55ce69ffc332b582a810b84"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","44be0b319eb9bb694b178f4445bae981"],["/2021/06/21/Review/神隱少女/index.html","3640882001efd82f5d57a58251b39ff6"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","954c1160280e54ea8ad92c920a075690"],["/2021/06/23/Review/天空之城/index.html","93436293e73fb980c8612b0af6cd3df6"],["/2021/06/24/Review/魔女宅急便/index.html","adcada53b5d5e1faaad81296653c38b6"],["/2021/06/25/Review/借物少女艾利緹/index.html","03a3a31dc5511018c0693ea2e869185c"],["/2021/06/26/Review/魔法公主/index.html","48d96765424cbf76ba3cad80cdfe5dbc"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","cf6b4c6043f94e90f3c6435428b5da75"],["/2021/07/04/Review/飛雪與劍/index.html","f48851d0fb1f42427f78d39c958761ce"],["/2021/07/09/Review/地球防衛少年/index.html","1fd8082a284999f6e632fe6497efacef"],["/2021/07/12/Review/Angel Beats!/index.html","66c936a9ac1362a8fec83cbafeb4cf8d"],["/2021/07/13/Review/Clannad/index.html","c329034e7581ee5ddf0201ef70506160"],["/2021/07/15/Review/AIR/index.html","250fb7d22927430bac2c8760e7a70736"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d398b6d30b8ebaabf4329effa53a9908"],["/2021/07/15/Review/螢火之森/index.html","fa68b1682e045541ef2dde8e57791cf6"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","dd0f5f4760e4631ed8fb82bf58fbfa0f"],["/2021/07/17/Review/奇蛋物語/index.html","dc60ebcb67acf4d6899c44a5705b4362"],["/2021/07/18/Review/Vivy/index.html","562b7ddce2f79e0f992caa2b8f3c2948"],["/2021/07/18/Review/請妳消失吧/index.html","2e1ded35137f613e2bbf2079a013897b"],["/2021/07/19/Review/漣漪的夜晚/index.html","925d3b2581d793f6613477c32280ce9f"],["/2021/07/20/Review/月色真美/index.html","40178b6e81313b34dd69348911c78acd"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","e2fe7ec4f2c3dcd03b0f10f0aa416157"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","28704677e1eb311e4f2f431119725639"],["/2021/07/22/Review/罪惡王冠/index.html","2a318c0073bc2df65eb153d812e9b21d"],["/2021/07/23/Review/弱角友崎同學/index.html","6cebc555c0b96aa6c15eabd57d3cd962"],["/2021/07/23/Review/惡之教程/index.html","cce95884980a97a2c18c7fa96097f5f2"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","f97bafd4cd67397e290b56e315b963d3"],["/2021/07/25/Review/魔王勇者/index.html","498ba85d3834c6eafd9359cd03129808"],["/2021/07/27/Review/一年A班的怪物/index.html","51f7be0c90b96f757c26e0fc26f3e827"],["/2021/07/27/Review/奇巧計程車/index.html","976447cfccb8a928816f28124bff1afb"],["/2021/07/27/Review/專情的碧池學妹/index.html","7eb3841fd4510a21120f40b1df5e79cc"],["/2021/07/29/Review/只有我不存在的城市/index.html","419fcbf4f78b48577b89582a84f8a4b9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","8bb051f35951e753cd1b96d0c998af47"],["/2021/07/30/Review/可塑性記憶/index.html","1e592f74f852309910ee0bb115152cab"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","c702206e3468b1f665ee9faf92aa245a"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f54937b4df4e48a2206099314ebf8e95"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","338c30932feceeeb36cf7d0be81f6203"],["/2021/08/25/Review/清戀/index.html","35174f681ecabbef48358a9b2ea8f68d"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","816b6b50d8b64667991acb41156847c1"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","ec8434332b06a0e4fd6aaaed4f44156e"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","b22ad120f7e3af38cc7fc31b44ce3c33"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","e60655f6b55ec61006a10f7fe4319788"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","16e5382dd2409adbfdb9c7810046c098"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","cb7af6fcf279be7cbe15df54f7a90e3a"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","8eb48549609960cca2dc83cd0c70efd4"],["/2021/10/16/Review/龍與雀斑公主/index.html","e0f7eac2faf700b7dd559f18533fb016"],["/2021/10/19/Review/孤狼不想開後宮/index.html","b2c8ac1b0460e4165a7ce26758706053"],["/2021/11/13/Review/徹夜之歌/index.html","236036d3a28018567cc5da71e7aca3b0"],["/2021/11/24/Review/武煉巔峰/index.html","2e5ea6fbe041a9b03972a5e37836ff9d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","ece4cd4de7aea333f6d326a39f8fc6dc"],["/2022/01/28/Review/神醫凰后/index.html","f7629f54c8060c6d6c943ab21f55eb18"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","a3f788380be4906b538a1ad898080cc8"],["/2022/02/13/Review/夏日幽靈/index.html","021a2f525b3514e6a887e1dc6c08e47a"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","7f377d7a02cd6924eefeec47e2ce843f"],["/2022/02/26/Review/賽馬娘/index.html","933c2107ec4e00d4d59d54d4da2f4fe7"],["/2022/02/27/Review/大欺詐師/index.html","0205092eecdf082fdfbc0faa410653ba"],["/2022/02/28/Review/前輩有夠煩/index.html","9c4650d4394ffde029cbc7bcda0db011"],["/2022/02/28/Review/碧藍之海/index.html","b4edb7cc0b2800740acc81c9c65e2007"],["/2022/03/05/Review/落第騎士英雄譚/index.html","cfc4396fbaf80716bd2ddefecba178b8"],["/2022/03/06/Review/Another/index.html","e6ebc2d8bc35ca81fcf5ded30fe5ed49"],["/2022/03/06/Review/入間同學入魔了/index.html","1c772d4d7fa3c8168006b2c65a4c35d6"],["/2022/03/18/Review/再見宣言/index.html","2a16e19f722359011cdaa9fe10e74080"],["/2022/03/23/Review/生若冬花的妳/index.html","0297ce71abb1364c53e40f22ab453414"],["/2022/03/25/Review/天之弱/index.html","a609abe9f232c57dea3f4067710b9534"],["/2022/03/31/Review/滅了天道之後轉生/index.html","e9acdc1d68516eaacfd474037142876d"],["/2022/04/30/Review/泡泡/index.html","fb0bdd5ea51636f101867f953af460d1"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","ced846fd2c3bdbd417b04ee31c25ad79"],["/2022/06/13/Review/偵探已經，死了/index.html","57d27a11133794f456a83ec30d219bc0"],["/2022/06/14/Review/黑色子彈/index.html","656bf8ae026cbd17c782ca3d251b82b7"],["/2022/06/15/Review/黑白來看守所/index.html","41f078da5abd41bb752329d50c8c8b58"],["/2022/06/16/Review/虛構推理/index.html","7d7a6f1af8c48739a89bff69f36ada8e"],["/2022/06/17/Review/戀愛與謊言/index.html","dc3718adb055e86674f350c0efa4ead1"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","53f1261415b06c3331c71e6a94274cd4"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a3faab7da5b40768d17a3a80ffcadbd5"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","37e8625660d9c382a4a053e402df7e2b"],["/2022/07/03/Review/Hello World/index.html","962c61b31eca71e161cdfafd0b2ecf5a"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","3001aca2b4aa30631b3c2842a9d77e00"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","98256a3cab7e4aca39dcb4ad71b30650"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","44fb1130e5ab6ae0e641148d0f02f66d"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","3e707249a121d762cd80f3688c687bfd"],["/2022/07/16/Japanese/動詞分類/index.html","fdbd8ef373d45884f7aec0417a52bd59"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","20fba267263247c7a7be4bd03783fc9b"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","2d134641e289380ebcdda0017d68a4f2"],["/2022/07/17/Japanese/音便/index.html","d00d2c5d718589c2ce681557a18267d3"],["/2022/07/18/Japanese/動詞 時態變化/index.html","f7b265a11ab58535318d8743d943258a"],["/2022/07/19/Japanese/助詞用法整理1/index.html","24ed32abc7028be850edc4d3bf25de76"],["/2022/07/26/Japanese/助詞用法整理2/index.html","f91ac4e908246f94a4f9a953326f8308"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","6c7420293d742a7b92c84c9c3450ff0d"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","7d8ea3d2c61adfaea6fb4cadb97125e9"],["/2022/07/30/Japanese/疑問詞/index.html","be4fb81e6ad77540621959b85edd0d18"],["/2022/07/31/Japanese/助詞用法整理3/index.html","895173ae04459f1b90af816a8c672d99"],["/2022/08/02/Japanese/副詞整理/index.html","d063c7d44acd66116a16b726f0e3668e"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","17993368918634924fa49c225677e777"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","6f9faa6d6dba343fc3ec84b3b13aeb7a"],["/2022/11/22/Review/組長女兒與保姆/index.html","3f46d783231c8b77e11fc5ed1d3ee3be"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","219bfbf8a315b88532694fdd131d641d"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","0f7a7d0d9d5cdfddb088223e0dff9e0d"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","e977f727a0c2892a6cca1cf968f6c98b"],["/404.html","b33616ffdfec3204c9557580c0bd543b"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","82a29ac5dc519f59f7f0d362b3de7ecb"],["/archives/2019/11/index.html","c55ddb85909a0d07cabab65bc72a0c81"],["/archives/2019/12/index.html","695a195658e91ca335a8038a7fce33e1"],["/archives/2019/index.html","a6e5d8e66717770156cbe36fea2b0400"],["/archives/2020/01/index.html","43cd60b910ecf3baea463a318fa07018"],["/archives/2020/02/index.html","ad76ca20535e7ff888a6fa5599262f96"],["/archives/2020/03/index.html","3ed6d13a6a28568ac9d3a3612eed5593"],["/archives/2020/04/index.html","19158bfbfe41684b829a1cbfe34f0320"],["/archives/2020/05/index.html","8593c58c709615d43a4c3e930348529d"],["/archives/2020/07/index.html","81227cff8faceac2a1e44a6b777743a1"],["/archives/2020/08/index.html","5c440b2ec68ca131009236dbdb642baa"],["/archives/2020/09/index.html","06d293814e63249663a263848987e09b"],["/archives/2020/10/index.html","615618fe1c574e49679e07d40466fc90"],["/archives/2020/11/index.html","c3b79e55e86d2dc5ff2e924fcaeb69d9"],["/archives/2020/12/index.html","9df34dee3ae09ef5f6e3511d04a5948f"],["/archives/2020/index.html","beef93bb3d4c1edb535bcecead1287a3"],["/archives/2020/page/2/index.html","9eb3bba8f1d133f9ddde786efd94b9f3"],["/archives/2020/page/3/index.html","e0e15bad6c3720bf7f134f759db66eae"],["/archives/2021/04/index.html","36ba28403e6e707360a708343b473751"],["/archives/2021/05/index.html","44126439ce92b969b0456b2baabcb6a5"],["/archives/2021/06/index.html","cfb545e2db4d87cd95da746f94eef1c5"],["/archives/2021/06/page/2/index.html","32686de298797b27fd891fc945d6b9df"],["/archives/2021/07/index.html","eaa48b67856bae8bf8f30efa79d84189"],["/archives/2021/07/page/2/index.html","0da0711b7770f85ae57ed67af075b981"],["/archives/2021/07/page/3/index.html","ac6d8e2f6e544b1b1ce2e2f6d0545611"],["/archives/2021/08/index.html","01b3a784aa43adbe496c90157d0e6368"],["/archives/2021/09/index.html","c2b40f6110020b0ed5b38b9a7ebb6bab"],["/archives/2021/10/index.html","60ac6039af6bc9e7d7e50f70cca4dd5b"],["/archives/2021/11/index.html","418537fb42b552966228965e3b36d214"],["/archives/2021/12/index.html","bcd561c7eca79048d2d7e1ce8290ffba"],["/archives/2021/index.html","28ec74e5d50d6aac89418b76fae5b8a0"],["/archives/2021/page/2/index.html","81d2b4895e6b199f50aeb5308f025bb2"],["/archives/2021/page/3/index.html","776997e4ce88753403cb94a8a91f2a5d"],["/archives/2021/page/4/index.html","c8dae4b8fe67fb6af209a2759d4bf18a"],["/archives/2021/page/5/index.html","ddc31ec1920c1bcaad153306268901e1"],["/archives/2021/page/6/index.html","f14a557276bf4b0b6af7f44776c31b67"],["/archives/2021/page/7/index.html","686e2caaacb608dc6e7c5ca657db3983"],["/archives/2022/01/index.html","6b74a71e264000da25cc313aa0459f60"],["/archives/2022/02/index.html","bbd3f1fa2c699d10c42a3571810033a4"],["/archives/2022/03/index.html","6e411fbb5aae66be67983c188fe7233c"],["/archives/2022/04/index.html","05e0bb4f024be0c4f44a65e7d46617e1"],["/archives/2022/05/index.html","f714b20984e7c234d0de0db8b5aa96cb"],["/archives/2022/06/index.html","2de97a7f879ca11acda0152ac39010a4"],["/archives/2022/07/index.html","b844a90981e2680b6981ef3b156c7d2c"],["/archives/2022/07/page/2/index.html","9bc57f8564e6f3db22150a622cba5a7c"],["/archives/2022/08/index.html","e91da43eaab959006039e5a3321cb8c9"],["/archives/2022/11/index.html","4b752032472abf799ee2e04e23cabea0"],["/archives/2022/12/index.html","bd740a0dc6fb2f0acc8e73554e83467c"],["/archives/2022/index.html","642f74b61587d384bc0debb5993a4681"],["/archives/2022/page/2/index.html","f7ae8d8b6baeb18902afbe47fa41ff3d"],["/archives/2022/page/3/index.html","d32afb1e9dedc016356b26d1c42e8e00"],["/archives/2022/page/4/index.html","3d2f8d1540d25392a44ceb794232f2b5"],["/archives/2022/page/5/index.html","1f41d62233f62f30984525443e72f9c9"],["/archives/index.html","a7f6288107b3652b29e26f053ff9e15f"],["/archives/page/10/index.html","c0e1bfb0285e7a98dc1fd17132d0496b"],["/archives/page/11/index.html","0dd0276a25089700611bdae517caa908"],["/archives/page/12/index.html","3d19b6c87c3ef245aed50d6256216428"],["/archives/page/13/index.html","19fdcd721f8fd421e11f7fb29cbb30b1"],["/archives/page/14/index.html","5d7dbf7cb1dd0bdaf0341b5c07687597"],["/archives/page/15/index.html","a2d929a03cc64207d246df797384ca2b"],["/archives/page/2/index.html","bc4654af8a9934ee560b8ddd23a1a41f"],["/archives/page/3/index.html","4f0e85d1ad819e4e0cd094babb28b87e"],["/archives/page/4/index.html","b4c5965ec1ba2a27777ee8e42e04a931"],["/archives/page/5/index.html","fc68f770bcd1723cbe1d50028a29b00c"],["/archives/page/6/index.html","57d0bc2c99a27b82ce757124e258d2aa"],["/archives/page/7/index.html","b37d4fa2a814dac840dbbc4d5a0689fc"],["/archives/page/8/index.html","e63a176b7f5dd0c9009c0e5d8bb0a8c6"],["/archives/page/9/index.html","c7898d3a4768cceab60154058de5c224"],["/categories/Programming/index.html","d293764b9af2fbab79a021e9ac185ea4"],["/categories/Review/index.html","b6ccfd43f2d00aaf0b9aae5cfd531494"],["/categories/Review/page/10/index.html","969985a35db667d6395a9a5d8478e063"],["/categories/Review/page/11/index.html","c1f49f9ee0d594e082232db665eb8a84"],["/categories/Review/page/12/index.html","0a26a6fa5ac27b247d700da02ea7821a"],["/categories/Review/page/13/index.html","7cdecf5bb0c4d96c0ce1b8df34b12f6f"],["/categories/Review/page/2/index.html","46c3de4f610d9e04b46b70181b50cef0"],["/categories/Review/page/3/index.html","939af798e3092d1605daa6788b631d3e"],["/categories/Review/page/4/index.html","dab3b52443273b5a678e15c6d1cacd77"],["/categories/Review/page/5/index.html","d6c75487ac1ab4ebdcfc8786e8657d03"],["/categories/Review/page/6/index.html","8685a65195ef06721be34d7ec9753100"],["/categories/Review/page/7/index.html","698d3d2b8c0d066b007a0074415a5136"],["/categories/Review/page/8/index.html","f594a9ed986a82b1b39f761ab25ecf7b"],["/categories/Review/page/9/index.html","044574ab49e82ab632c81ca371ea1a07"],["/categories/index.html","bfe424c3f4b35292350523c21c6e44cb"],["/categories/日本語/index.html","78ad5256b0ae7c798f8a9ec1cada81d6"],["/categories/日本語/page/2/index.html","ef18c40c4aacc16a963d87b5bbb2bc07"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","10192287ed35b188f7fda269d0958e99"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","cca72b1f315cd9a11e71bfa3760367c9"],["/page/10/index.html","7ecf6321895af15922f1566ddee26cb9"],["/page/11/index.html","68c31923632e1a3d5ab65b71a728eca0"],["/page/12/index.html","09be4d80c6dd324f0a8915ddfd80395b"],["/page/13/index.html","4fc992e9e5271bf504b94c283bcb089c"],["/page/14/index.html","d8f05253d3cb27b8879690621de0e382"],["/page/15/index.html","bf8b87d62167390c1122b94050b72a0a"],["/page/2/index.html","f4d6b2cc41944679a4207349bfcb93d3"],["/page/3/index.html","f0656e8783c9d7df5592b875286c3d40"],["/page/4/index.html","101bfa2efcf4b6b4ba57530524b34a00"],["/page/5/index.html","5add44989f551312ae2d47f63d97bf8e"],["/page/6/index.html","8fd61b737f59b7ab99372219f410b351"],["/page/7/index.html","1590ce33e7d45c03d2c65cdf291c5664"],["/page/8/index.html","e5826f09e8aacf9931dc745606c4a84d"],["/page/9/index.html","ed0b9de5ad28acc346d0092a5019b4a9"],["/sw-register.js","884f9554017d12917cb5ec4fac6ede2b"],["/tags/10分作品/index.html","3973a61738f42121fbcd6122c652d947"],["/tags/3分作品/index.html","38fcf2f9a64bec54f9aa044679fb5ca0"],["/tags/4分作品/index.html","69643d1d526873823f189871e30ce36f"],["/tags/5分作品/index.html","8a6071c16d18651a32db7bb45a6dee41"],["/tags/6分作品/index.html","2a6e628fdb5974dc12863b2e6923bfeb"],["/tags/6分作品/page/2/index.html","e03c99dfad028d39cb3da33809bebf85"],["/tags/6分作品/page/3/index.html","6a81cb1e964c565694e94b3d480c11cf"],["/tags/7分作品/index.html","023c3b46a5d91b567854b318d7a4f2f1"],["/tags/7分作品/page/2/index.html","cb43da1ef839fb9bc018fc984d7f4acf"],["/tags/7分作品/page/3/index.html","b22061d8135afc7bf6894bb9f1cdfac6"],["/tags/7分作品/page/4/index.html","1a818128fbe88b1b93c861ce8fd63d2f"],["/tags/8分作品/index.html","5993279450abeaba2d6b4a055138e6ee"],["/tags/8分作品/page/2/index.html","cdbc04b1b7c2f785b07d808a7f462e62"],["/tags/8分作品/page/3/index.html","a79dc40b817a930984e8c55b41fd2286"],["/tags/8分作品/page/4/index.html","967fe823a4a8a41ea14989d61c2bb032"],["/tags/8分作品/page/5/index.html","6638e78db0c1d09ce1639d4d9f417f24"],["/tags/9分作品/index.html","62c5dca7ec2da56e54c51889504f8aac"],["/tags/N5難度/index.html","f12821d8a14dea07b41f25da98fab1de"],["/tags/N5難度/page/2/index.html","81c077ccf57ccc4aa9652b5a433f99c4"],["/tags/index.html","7a1c9082adc4c6336b72d540e82606b4"],["/tags/アボガド６/index.html","bf2cb60945dcdea5cf2236c92148c708"],["/tags/三秋縋/index.html","685eb49b5c61c6bceec8db118430047c"],["/tags/中國武俠/index.html","e84523622b9b4f7405250d1f2e1c60a0"],["/tags/中國言情/index.html","fbafc670659578cd3bfba2d90de8619d"],["/tags/二宮敦人/index.html","27ef0c982c3d53fad91073d217cb743d"],["/tags/人性/index.html","d0237648e204ffb130a4059fdf69a6ec"],["/tags/人際/index.html","87776e58db32bce1ae15830e05586b37"],["/tags/住野夜/index.html","709870494967a1de85d0ee7017fff066"],["/tags/佐野徹夜/index.html","f0361a79fe33610c7285067c1cf1f799"],["/tags/努力/index.html","58fd04c9bf6cef269e2ffb1172f8cba9"],["/tags/動畫/index.html","1baf43f04979ae8962aacce6c6323882"],["/tags/動畫/page/2/index.html","a9406e2811992e00f9b1385442e06619"],["/tags/動畫/page/3/index.html","47fa6345c44c36a8f69789d69993bd2a"],["/tags/動畫/page/4/index.html","9ea84dd7528b379f02c500b378704a49"],["/tags/原諒/index.html","8e13e650f7e1b120646416d10df75738"],["/tags/反烏托邦/index.html","815e3fa1a9702581c6045803b2506b69"],["/tags/啞鳴/index.html","28a14bb5a09aad4a806af1308dbd6386"],["/tags/喜劇/index.html","3f186125aa071b07c75a6e56f794c8f1"],["/tags/夢想/index.html","6f00103b3a05c1f11ec3cad6c5243e7d"],["/tags/天澤夏月/index.html","8f321e827882fcc3195980c261ab18fc"],["/tags/學習/index.html","855db7d5ff17c5be3d45a09ff4a14aac"],["/tags/學習/page/2/index.html","0bb9b1ad45dc6237ba6e6dad5a7e34e7"],["/tags/宮崎駿/index.html","fd8801e654f95e4e3c3967e760fcc8d9"],["/tags/小說/index.html","99bb7c00243e3b59303ac057bbd7071a"],["/tags/小說/page/2/index.html","dfa4667116d8fe391319532d372a46d6"],["/tags/小說/page/3/index.html","bec672b502176fcef22a735b3db5dae5"],["/tags/小說/page/4/index.html","ed57e79d768db06d24a0d96afb8f2831"],["/tags/小說/page/5/index.html","2a813506f3d36d9ba636871601534fe3"],["/tags/小說/page/6/index.html","d4d1e4ec6b3f0abb24011d9f4da76d9d"],["/tags/小說/page/7/index.html","04212d232f55a0a1f3ba0694b442a3e8"],["/tags/平淡生活/index.html","e3b818e94deba41fca95edb3a645006b"],["/tags/幸福/index.html","4fb452a4fc27f74ef6bec12c24fa20c3"],["/tags/志茂文彥/index.html","0b8847ccd0e706721dd74ca19430c22e"],["/tags/愛情/index.html","82083a5ad275b14d426c4f6a5509a9ff"],["/tags/愛情/page/2/index.html","27579f4e89bd12690c827b0f6d5c06c4"],["/tags/愛情/page/3/index.html","7dd8c4c8de2f29d8fa3d6e64f25961ad"],["/tags/感動/index.html","6d19090987d5b72a1e0da27083108741"],["/tags/懸疑/index.html","febb313dcba35772b456368bc7c3e4b9"],["/tags/懸疑科幻/index.html","ce6fdc9dfcb21f2f46f46db287bd2f6e"],["/tags/戀愛/index.html","48ea50735cb29687f88a03636d029def"],["/tags/成長/index.html","a55d4918a1291dea4197b918a886d746"],["/tags/成長/page/2/index.html","f603f9cb036f683815e39438ee739f31"],["/tags/戰爭/index.html","7c40c0aa814c476c41d608c7c84592c4"],["/tags/推理/index.html","0307a6404bc82016e631f3c77b3eaa4e"],["/tags/搞笑/index.html","778d1afbf404abbb2f96997f4c7b34cd"],["/tags/救贖/index.html","9e61b7d6d4e833f19ada9e8780a87a56"],["/tags/斜線堂有紀/index.html","5530dcb3f4685df874ab6454d0bd9dac"],["/tags/日常/index.html","f0cb8bb451f2c930a6e321a93ef3eb0c"],["/tags/末日/index.html","b91445b241c287013305ab6f6fa08551"],["/tags/校園/index.html","5c2b2ecd254cada4d5549d0321ff5250"],["/tags/武俠/index.html","df4a0193f08b23d00d61c219a5f603b8"],["/tags/武俠言情/index.html","715bcce70b3afa21ca90dee9f2bbba94"],["/tags/漫畫/index.html","ccbd432bfbadec482527e2184167c4bb"],["/tags/生命/index.html","9b05da1a55b9b836e506e21ca2257113"],["/tags/生命/page/2/index.html","5d4bb0ca67cfdc58db6a4fd06b9afa38"],["/tags/短篇/index.html","01e8e776328f481080255541bc789224"],["/tags/社會/index.html","ef91636ea436dca3fea8e88311c7ed67"],["/tags/科幻/index.html","fbfcaed3eaa9918ff58138efb4eedc50"],["/tags/童話/index.html","727eb9c469ee468fdde0c1ea0b645342"],["/tags/競爭/index.html","809acef76f735dc101f6903bb8ee8577"],["/tags/自我/index.html","99596dbf74e31dfc92a43223854a66d4"],["/tags/自我認知/index.html","35c5003cc33c857096594cec1eecd09a"],["/tags/葦舟ナツ/index.html","d2334ac91827ba383fb5708a9e2f8aa4"],["/tags/藤萬留/index.html","3e8b8636fd5e447fbade13670624d0e4"],["/tags/親情/index.html","fa88c8c52ebf97cca47198e46a2f98b6"],["/tags/雜項/index.html","81ca0cf708bb8b8f1cc4768681872c91"],["/tags/電影/index.html","1bf8b09b5092503d0b5772deba49dc14"],["/tags/電影/page/2/index.html","59c71f53eef4d80466a51cc183735ed5"],["/tags/霸凌/index.html","227fa2d520c3bb7118d6f9de542b5b94"],["/tags/青春/index.html","d07dc34c0d4f1a88ba3784c54da6a93b"]];
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
