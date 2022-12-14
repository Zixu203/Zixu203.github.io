/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","9261f21e549b676e9b494730f87cd886"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","f529255ed8b8c7a7b80fded58c5bcc55"],["/2019/12/25/Review/無法計算的青春/index.html","f73475153ddc3501ed455fab9dd04706"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","d216ee480c05fd3c5ffd699757d56447"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","424d8e644ca5b876867cc2feb1b5a076"],["/2020/01/19/Review/下雨天，不上學/index.html","2b010bdb9ec82fd5134f138f6ba1e391"],["/2020/01/26/Review/三日間的幸福/index.html","6ebd50d9f4d06195c91f1785707e5dd1"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","bb749e85d4f383e5a2b60ac7b87006d8"],["/2020/02/09/Review/青春期超感應/index.html","313d9967fa7456a2ed1360bebdc41c63"],["/2020/02/15/Review/又做了，相同的夢/index.html","d802eb36319190b65b7d3ce96830978f"],["/2020/02/22/Review/回憶當鋪/index.html","af2944356716835f0beb1c9081c97d3f"],["/2020/03/22/Review/不適合自殺的季節/index.html","57804359f9c6555a6b55d983a08d9787"],["/2020/04/26/Review/我們都無法成為大人/index.html","7c7e28cad7667fabb3e920cf2d2b00e6"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","8225035fba5b6b61e8e32f06f24769f8"],["/2020/05/17/Review/人間失格/index.html","e80e2d84043112c0e701a5a85c610590"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","d3bcb7b740ad9f83ff394c548aa0741e"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","4614e96270eabdc4cfed9dda48fe596f"],["/2020/08/01/Review/銀河鐵道之夜/index.html","fa7c7d3db4bcdc1c1916e525e0658a1a"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","37a36a80c2c22a98e188a56fab31d293"],["/2020/08/16/Review/15歲的恐怖分子/index.html","f57870b3f4ff3636302a0e4f0a3a62c7"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","4ec969f53fc6ad848ad4dbd37dfc7849"],["/2020/09/13/Review/羅生門/index.html","38add456f4fba9f6efd4933d83d89dcb"],["/2020/09/20/Review/闇夜的怪物/index.html","932a6fe51d800f3b5bd3475c710fb3d8"],["/2020/09/27/Review/14歲，明日的課表/index.html","f68a3d30cb126d984f3d8752f31d8903"],["/2020/10/04/Review/致十年後的你/index.html","d00088a7c817e2dba211081145efef68"],["/2020/11/08/Review/滅絕之園/index.html","9125bf948b2a231b60221f80ba76a15c"],["/2020/11/15/Review/將愛拒於門外/index.html","595bce3f1cabda5d6c5836f0781ba5d3"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","954471b6b1c33275ffc06839eddc104e"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","8ccad56f95ed07a25643f9cb14d1718e"],["/2021/04/22/Review/道印/index.html","35bfaf9b0a7e6e2d668ad75ac84f1454"],["/2021/05/03/Review/戀入膏肓/index.html","1b54a1f04b80415a48cb69356a42da47"],["/2021/05/10/Review/Dice/index.html","0884b378f0fb452e1b9c76e80f7a0b7d"],["/2021/05/15/Review/魔女之旅/index.html","6aed61dc5c5ddb762b8ab6b4d8ed633c"],["/2021/05/28/Review/戀愛寄生蟲/index.html","1deba34b1ef8170d6792efc3e46d5a66"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","e32f6bc7f00d7f7312a7e5736378078a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4398edac9eb1440220e6d8729b372cd5"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8c11ad977fa45dcf4b9e87939b7aecef"],["/2021/06/05/Review/流浪的月/index.html","5d39cb3b90e773cf870d4065ddf263dd"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","367f814a973c52013bf80958e3c569a6"],["/2021/06/13/Review/第一人稱單數/index.html","bb944e55329bb6dc8ba01981b2eef630"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","86857209c38be926949a2146f52485bd"],["/2021/06/16/Review/願你幸福/index.html","29e0c86316777d4b3de58d9f7322006e"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","7785e8d4e8f021fcff5d651b4296b530"],["/2021/06/21/Review/神隱少女/index.html","7f69689af4af48ccac30ffc968cbf300"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","89799ae8a287e6f09cdceeefe3e4698e"],["/2021/06/23/Review/天空之城/index.html","aa4a9fa11138ca91b4cc7c6605fdb8bc"],["/2021/06/24/Review/魔女宅急便/index.html","93afe18eb55eb5e9f37a1ab4dbb3edc8"],["/2021/06/25/Review/借物少女艾利緹/index.html","7c9e935528ce363284c83998914ec6d8"],["/2021/06/26/Review/魔法公主/index.html","8bc33adcaeae5425c1347a21c2c1afb1"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","b1d6c74314546f78c453c1bf40bb5b64"],["/2021/07/04/Review/飛雪與劍/index.html","2136e0daa77b22daea93474017f1d886"],["/2021/07/09/Review/地球防衛少年/index.html","b7604285c09e318523435b2e1d2efd9e"],["/2021/07/12/Review/Angel Beats!/index.html","0c790fcc628c32b8057928d50382de0a"],["/2021/07/13/Review/Clannad/index.html","b7c0ee2b528837e39ed564614d12f817"],["/2021/07/15/Review/AIR/index.html","623dfe8b187f4088b439f35c078c8026"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","5db98227b7ceb71253d4881653f91585"],["/2021/07/15/Review/螢火之森/index.html","683254bbaf56e92044b9651ef0970abf"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","f300d2973757df6bdd3ae8cb28a2582f"],["/2021/07/17/Review/奇蛋物語/index.html","1b24f7d2dcafd95cfd8086e168f67bd8"],["/2021/07/18/Review/Vivy/index.html","218f71cd72e32465c57a5afbe18ded2f"],["/2021/07/18/Review/請妳消失吧/index.html","dd014e940a7a6b5c0922a2de0544144a"],["/2021/07/19/Review/漣漪的夜晚/index.html","8a23bdcb5c483d80e64859f538c7f189"],["/2021/07/20/Review/月色真美/index.html","718587093b8dad98c390834964d28361"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","5708f89dd0887a4eeb4157ec05caa24f"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","e48f04be180285f612a828f75f1582eb"],["/2021/07/22/Review/罪惡王冠/index.html","3b66a34d3327b11d2ed8b8a9b880b81f"],["/2021/07/23/Review/弱角友崎同學/index.html","eb9b34a3cd116833925c84491fa2b0b4"],["/2021/07/23/Review/惡之教程/index.html","b916d1282b0df144e68b30de4588673e"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","4a3a44a7c1939a2db1db4a3386077254"],["/2021/07/25/Review/魔王勇者/index.html","eddb9af76b504c8fefa5904d3c627fa0"],["/2021/07/27/Review/一年A班的怪物/index.html","840719005ea69fb8cb868de4c5ba07ef"],["/2021/07/27/Review/奇巧計程車/index.html","646ef509bdbff25ae859e0210d6193da"],["/2021/07/27/Review/專情的碧池學妹/index.html","aa3fb44cb3ff5237422dce0b586c7db4"],["/2021/07/29/Review/只有我不存在的城市/index.html","7b490080b8092aa9a447629509dfd69b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","5ccf7205a6097125e0c3196644ce9201"],["/2021/07/30/Review/可塑性記憶/index.html","3c613bf367ac3d6af1e5edd2aa82a20b"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","8ca21530bffbaa9285fed02b07f4994c"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","95b092166ac5ed5dc9000acb9b2449e2"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","538c8ff14c784bd860d75c78dd38829e"],["/2021/08/25/Review/清戀/index.html","03f25eaed12e7dab448c2bc54a4ea180"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","043d19672fa3bddefcdec21688fa6b88"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","ea12fab4adc83c2036c965220c322075"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","42b35e931977459c2c78cb8d01e18750"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","f31139fe27fc01ff215b637453e45899"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a1c1573adbe79f42d06652793dcdaf8b"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","2ef408b07c9c4ecefd69a4b5af5da327"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","67a21fcdbfaa986e6ac29f287e12e1f7"],["/2021/10/16/Review/龍與雀斑公主/index.html","9106db1559adc2b445af7d0dead13ca5"],["/2021/10/19/Review/孤狼不想開後宮/index.html","52296db8dab6262a34f961853d8ad3f9"],["/2021/11/13/Review/徹夜之歌/index.html","dd994762b7cb96d8ab7d96a6c39a6111"],["/2021/11/24/Review/武煉巔峰/index.html","b84b639a80a283222efc54acd9d9ebd9"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","339f9c329b69e36fb1e0780866227365"],["/2022/01/28/Review/神醫凰后/index.html","0b7101e07272c20fb0938f8fe50f37e9"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","faf1748029848e4356e3d987c1290934"],["/2022/02/13/Review/夏日幽靈/index.html","4ffb59cf3391a96321d8e0b1189e58a5"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","6e835190bc1585c0bfa6a21ada86727e"],["/2022/02/26/Review/賽馬娘/index.html","2f16e2252e7bbec48634100a23fa5a79"],["/2022/02/27/Review/大欺詐師/index.html","356739e176f6baa7c8513f2fbfd618c1"],["/2022/02/28/Review/前輩有夠煩/index.html","8e74bc5addbe4c683605cda2df53fc5a"],["/2022/02/28/Review/碧藍之海/index.html","d6d3e875c1730fd0875cfffb1c1d5102"],["/2022/03/05/Review/落第騎士英雄譚/index.html","d6b8ab8b1b70529b3b383d031597c92d"],["/2022/03/06/Review/Another/index.html","6d8c3038ad101ac37cd92664872c9525"],["/2022/03/06/Review/入間同學入魔了/index.html","d713e9713dc413e3fda87278cf6288d4"],["/2022/03/18/Review/再見宣言/index.html","5b8b27fb07e215a2ed09ec3b79cadc48"],["/2022/03/23/Review/生若冬花的妳/index.html","44904c9949acd231690f12206b6e6318"],["/2022/03/25/Review/天之弱/index.html","74e4f93a9d4b8a24d1e5276826d0fa34"],["/2022/03/31/Review/滅了天道之後轉生/index.html","2593ee607916b3579e382e9cb736faa5"],["/2022/04/30/Review/泡泡/index.html","247f184b53aa1a3ed9f5d9cace30f1ae"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","c4f081cb59ce9fec9f79c75d753efe29"],["/2022/06/13/Review/偵探已經，死了/index.html","90333bd8215a8e5c775becd018f5bb9e"],["/2022/06/14/Review/黑色子彈/index.html","82cafbba4b0ae504171c405fa169c1eb"],["/2022/06/15/Review/黑白來看守所/index.html","320b8baa18eed9cceffcf0ae2b3fc507"],["/2022/06/16/Review/虛構推理/index.html","722a6993afabb6cce881e064e8428088"],["/2022/06/17/Review/戀愛與謊言/index.html","c702e712254501a8069170024cedbbae"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","3a7b8ef646a354adb26f309e7db23694"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","eddbf65c58ebbb1e9744d5da66282edf"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","eb2e07fd782f9f38af949e6421b112ae"],["/2022/07/03/Review/Hello World/index.html","96b0b2eed201af5ccb1a8613c9e9d41d"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1d3bbc3fc12704b45562c714cabdc928"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","fed2db753dd2ee335a064d43914ee4c2"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","c17ecd0ba4b4d3a00533ee0df48821c9"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","f52d8325ec537b54c8bd2226c339c01e"],["/2022/07/16/Japanese/動詞分類/index.html","d7a64d6b1489cb113c03f1541f8fb50f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","b3d5a8292dba82b4daf92700e6ebff96"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","5616b5ade635f7370e3acdb21379cb69"],["/2022/07/17/Japanese/音便/index.html","57e849113c0a2e6300dd1e051991167c"],["/2022/07/18/Japanese/動詞 時態變化/index.html","0996a084bed8b79690c93dfb44abe4cc"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4974eb4e72a445bda1093b32955eedf3"],["/2022/07/26/Japanese/助詞用法整理2/index.html","3c1d7fe127a2b8e1ff2c98d2225cb113"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","47dde2c23f24594060e514c6d57079c9"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","fbca01ca3db702cc89c231ef4aa99f0e"],["/2022/07/30/Japanese/疑問詞/index.html","2561c5665cf13c4a472debec3e06cc07"],["/2022/07/31/Japanese/助詞用法整理3/index.html","0855e0708a0774ff08abcb9d78157ba1"],["/2022/08/02/Japanese/副詞整理/index.html","a98caec8d364a0f5914067ba980124be"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","ddb789eabb1aad64a97f08f1cccfa179"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","e5a8bf8aa08cddbba24db35047610781"],["/2022/11/22/Review/組長女兒與保姆/index.html","3734f8e862c1362228168a0c683ccb0b"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","29e935e643c19806416491ccc3507175"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","136adf460d86376ff91133921e5e8bde"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","303d975f3b6a64f5a1fd5b5b5f085f33"],["/404.html","06fdf985eee04541b88920be45335a3e"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","9a709b08f3176bb1eddcb60b8cb2d1af"],["/archives/2019/11/index.html","910ae7eb5ce3ec6f226cd54aadcad935"],["/archives/2019/12/index.html","e32633379775b4e61a520c5f2bad4198"],["/archives/2019/index.html","2b8962effab20ee98784d74d3786a327"],["/archives/2020/01/index.html","c8bc31fa5a80165b99bca8891b1356a6"],["/archives/2020/02/index.html","bb5235eaf832762125fb63d1cb48257f"],["/archives/2020/03/index.html","d31fe59edca465a6dd664df058dcaa45"],["/archives/2020/04/index.html","e700091477811e0477baf92c393c550d"],["/archives/2020/05/index.html","06b228f71da9a4712dfd5ab5ac1133b5"],["/archives/2020/07/index.html","838377e08cecb88b2caa0a8ef2ac73f3"],["/archives/2020/08/index.html","5ce20b7526aff3c83f3a3b08f02772ef"],["/archives/2020/09/index.html","44b37de8ffdf77f99920d7544fbe1b67"],["/archives/2020/10/index.html","a5379a268f48abe1ea1bea748c59a53c"],["/archives/2020/11/index.html","aa615a0623e04d75e210c036351cf648"],["/archives/2020/12/index.html","b322408267524114fc6fc06cdb7312db"],["/archives/2020/index.html","4618d7fc6528def84ec6bd2752ba2a0a"],["/archives/2020/page/2/index.html","b6e461fa5dba1a2e7a51ac52eec95236"],["/archives/2020/page/3/index.html","05056c8588d06e6e0686ca0b099499c6"],["/archives/2021/04/index.html","4de97c03d87d150893820e617f6ca9c5"],["/archives/2021/05/index.html","e652a6ff77da1d035d4b861c1a335e6f"],["/archives/2021/06/index.html","f8fa1b86c55e8761c6b462ec303df541"],["/archives/2021/06/page/2/index.html","a828a248a96e202f6732bbb72624d06a"],["/archives/2021/07/index.html","0503d569249b33ea024c11e7e2d688b1"],["/archives/2021/07/page/2/index.html","e1f4c79549e98464f7631009de4e5aba"],["/archives/2021/07/page/3/index.html","6ad78ac399e33b1f339845b12808f237"],["/archives/2021/08/index.html","1c566f6fe90e119233e11407b9d9a871"],["/archives/2021/09/index.html","5ad5cab25544f610a38cd0117929e16a"],["/archives/2021/10/index.html","110038c6087e5b5e702e59708a14d014"],["/archives/2021/11/index.html","6d95fe67eca4648237f70d092bebd803"],["/archives/2021/12/index.html","558d5f38b2d68d89eb896c5e8791daa4"],["/archives/2021/index.html","e1c621a0f8f816f3887bdb0c4407430b"],["/archives/2021/page/2/index.html","1ae0be1c9c00eaa9c2f23b1a3564dfbc"],["/archives/2021/page/3/index.html","28da17d3a28103c3b36f6174f83a0306"],["/archives/2021/page/4/index.html","6418349fa5f39f8eb3562d0554fd7d6f"],["/archives/2021/page/5/index.html","a65636178b3f75c47b6c0ad476f205b0"],["/archives/2021/page/6/index.html","6755a618239102ae1309b8e7677561aa"],["/archives/2021/page/7/index.html","8e74123e9e8dd401d3a39f7203ef23c7"],["/archives/2022/01/index.html","d71268a2c98ada0dfa6c6abc16c28522"],["/archives/2022/02/index.html","4c31b01553ccd51051e70df110a9bd67"],["/archives/2022/03/index.html","4c56bb7a2c5e64427cdccc401d73b8eb"],["/archives/2022/04/index.html","e6db207eec0f8d2528c22678d2c5bc97"],["/archives/2022/05/index.html","cf025bf9880e0c698387e6c995923a88"],["/archives/2022/06/index.html","35ec04d7416e0e3057927cd47d01c7ac"],["/archives/2022/07/index.html","dfd1e05baefbe3e2001cfa64cc8a7770"],["/archives/2022/07/page/2/index.html","483b926e5254f77e18800543148234b1"],["/archives/2022/08/index.html","304839e9460a5f394c46e849f167928b"],["/archives/2022/11/index.html","5640ac0d55fdea90306ccf1d5d1c0fc1"],["/archives/2022/12/index.html","f5cac767912454efb98639ce3f88400f"],["/archives/2022/index.html","5b017c200e5ed006f9e2837b4d7cb858"],["/archives/2022/page/2/index.html","10f196aa1df9331f1d5abd30b14d7ebe"],["/archives/2022/page/3/index.html","1facf181dbeffbd88306856f9b811941"],["/archives/2022/page/4/index.html","927efe1deb222a4b58cbf293bba3322d"],["/archives/2022/page/5/index.html","bf343012c4103093afb11fc14e19d331"],["/archives/index.html","8e430dfeb3ba6da7b57d5e34ae221c78"],["/archives/page/10/index.html","e466ec893b1b7965c98c92fd56ba565d"],["/archives/page/11/index.html","8e6b8fbc72e94b7f6ade2ea6991c11d6"],["/archives/page/12/index.html","a040f88ee0c00a187aa41f8ec6e6e259"],["/archives/page/13/index.html","04e3b928d374f5bd059561be5734c356"],["/archives/page/14/index.html","d8be357f5efb3d271021bdb441793102"],["/archives/page/15/index.html","cee680405cbfe6b2b2a7f1c79e86526b"],["/archives/page/2/index.html","4fb63594ca3066e3a6d95919ff70596b"],["/archives/page/3/index.html","0b707fea34d9c1e369a4f847597216b0"],["/archives/page/4/index.html","7ed029d30475209b16e27436e4c1f542"],["/archives/page/5/index.html","4e788a50e016e256b89440e991b8f2a1"],["/archives/page/6/index.html","ea908462edf6f77586a987d8008a7af0"],["/archives/page/7/index.html","8957284e3903d40c5014727e18b9cfe1"],["/archives/page/8/index.html","028478ae98a171ef874501afe78c09b1"],["/archives/page/9/index.html","97a51db1fd3de210e79b4e0376581bf9"],["/categories/Programming/index.html","8e00c30991b618c624cdbc7e1bf7879b"],["/categories/Review/index.html","cfdf67812056dfca2b5f438e2cf2acb8"],["/categories/Review/page/10/index.html","527677e8f1e46240b717c7e1c2f36402"],["/categories/Review/page/11/index.html","0c10637dab3667ffab83dec15a5ee0e4"],["/categories/Review/page/12/index.html","8f2f47d06f4ba26aee68fad8c3999de7"],["/categories/Review/page/13/index.html","bb2c5419eb7c31a2dbf8f435e2665776"],["/categories/Review/page/2/index.html","fd8e674eda36636b3488546ae32780e7"],["/categories/Review/page/3/index.html","4b56b3f5741e075904b730b9ce1252c2"],["/categories/Review/page/4/index.html","7edbe00b4f9d6c9a2a1ce30e299b4cc8"],["/categories/Review/page/5/index.html","51599939f8953aab05577a6767871cd9"],["/categories/Review/page/6/index.html","6065bf10b567aa8c56b76c2dc945d7e1"],["/categories/Review/page/7/index.html","76187b71cb30002aca473bcb51458fbd"],["/categories/Review/page/8/index.html","6920c1d72e4101997ef675851b39b2ed"],["/categories/Review/page/9/index.html","faa265351012fc8624e7b88bf100a14e"],["/categories/index.html","b322c209f7f518609cceda9b2418b239"],["/categories/日本語/index.html","d13bac490007d729cb639595fa82b920"],["/categories/日本語/page/2/index.html","91d5d472efc87edf4291624362a4c113"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","28ba2fa7b4efee165c240de53875c7f7"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","a5dafa7d05542bf476386c2152e64eb8"],["/page/10/index.html","d118dd748320ae82b42f3c00d38d8899"],["/page/11/index.html","b3914fba9db4e327a91686048c64c7da"],["/page/12/index.html","d7c03e60f49de07c3acff0eb34e77ae3"],["/page/13/index.html","442c9e25b09c2e82d5c7a1958f89b651"],["/page/14/index.html","a2f28d4ba9d3271419cc615cc30e9a25"],["/page/15/index.html","d0840caa2d6e70da0650129df479481c"],["/page/2/index.html","a3168a2acecd212ed9d8b5d8b8ba7358"],["/page/3/index.html","847073343ecbafe4ecb245cbebd81394"],["/page/4/index.html","6300e14171ac99a4f3be70ad2815425e"],["/page/5/index.html","24a21d63f0e751c6156d4587a41808f7"],["/page/6/index.html","624ffc1dc16c6ccf3fc7afeb73f1bb57"],["/page/7/index.html","d6bd57e3ad1c31873810cee3cb4b1561"],["/page/8/index.html","80e655e1e3efba33eb570cbd60a557fa"],["/page/9/index.html","55bea1a68b76984ae064ee76b2f0b588"],["/sw-register.js","c439e5e18b12f448e99f8f143cd29b06"],["/tags/10分作品/index.html","9cea35475bcaf6f925b976d5808744fe"],["/tags/3分作品/index.html","6837d60ac331919a7ed544caef78013f"],["/tags/4分作品/index.html","d5b9cedad0cd48de28e9b9a7e8f08e8a"],["/tags/5分作品/index.html","00b525c53d68ffa1f4a6339c7697b206"],["/tags/6分作品/index.html","b24a520871150d2468bae8137be953be"],["/tags/6分作品/page/2/index.html","01dade173d53db1a6c81cfc03d10637a"],["/tags/6分作品/page/3/index.html","9e3178bfb2c60467d684ecd8bd5dd44e"],["/tags/7分作品/index.html","5fb1288ec79f374188f0d46f0a8a8472"],["/tags/7分作品/page/2/index.html","bad6b465e1ed22df622454f82bd21625"],["/tags/7分作品/page/3/index.html","5f928854b3235fda6a9dfdae6b174ff5"],["/tags/7分作品/page/4/index.html","5a59a4bc6746b486153c40da91cc85c4"],["/tags/8分作品/index.html","fc0409bae454295c48d5d67e7614d459"],["/tags/8分作品/page/2/index.html","7beba1a196ddbdc8dcc811893cfe1b92"],["/tags/8分作品/page/3/index.html","0fec7d2608dafc668cb52588636a345f"],["/tags/8分作品/page/4/index.html","e35f6cfd855e34a505d51635234e627e"],["/tags/8分作品/page/5/index.html","aee367bd8d9f806c0cb541652dac1832"],["/tags/9分作品/index.html","12658afd624e3527a3633bf76dbc55ff"],["/tags/N5難度/index.html","531398f2885d9ecb890b9e591860bf61"],["/tags/N5難度/page/2/index.html","a7105844aabdc06593fc83fd8dad23c8"],["/tags/index.html","be8210e86535a41c9dfea97c0a1bc6a5"],["/tags/アボガド６/index.html","44d2096356dea33bbd61e745d3e14222"],["/tags/三秋縋/index.html","6fb77e09d7ff53e5f38222c3ac7ade3b"],["/tags/中國武俠/index.html","e3b1d092490a5ad28d27cbc24ce1ff3e"],["/tags/中國言情/index.html","ee3cbf668927b05b622fda4b0ec41f6b"],["/tags/二宮敦人/index.html","01847651576f7b6c358ad53ba19a4581"],["/tags/人性/index.html","3dcd8c5d6ef1c323d2a48d770536414a"],["/tags/人際/index.html","46f890cf7ac92e00f33bd423134bd990"],["/tags/住野夜/index.html","bf6f3be6049fc2b253648b6682c1c958"],["/tags/佐野徹夜/index.html","65e9798d42446be8f976bbad2cbc72b1"],["/tags/努力/index.html","3fcc5afc2a819e5f2f67c45ce4fd76d0"],["/tags/動畫/index.html","9a691b4f724aa6e0714cf7fd4eacfbf5"],["/tags/動畫/page/2/index.html","433609793f2004da0e3adcd77bfaf3eb"],["/tags/動畫/page/3/index.html","e9864e8fc785e0d221ad71ba8b3e6ea7"],["/tags/動畫/page/4/index.html","ab7d525f63c8b7a697f8111ce3bf1421"],["/tags/原諒/index.html","18030b326ff3b9d9f3eb7ee88d5d90f5"],["/tags/反烏托邦/index.html","3a91f8a111a20730adfad4e3bc17e894"],["/tags/啞鳴/index.html","644d8ca88b6fc4bac3ae4062d24fff7c"],["/tags/喜劇/index.html","793e94c65b3d422ff23968938b81b039"],["/tags/夢想/index.html","ba6e2a1262e6d02de2eaff008df85ee7"],["/tags/天澤夏月/index.html","4350e59a4c8b908b90747f9549bc6067"],["/tags/學習/index.html","7dd7a50f2467f7ec5622cb333985f1af"],["/tags/學習/page/2/index.html","352316c466ad0d6bb97bad4ef673abac"],["/tags/宮崎駿/index.html","5610fb883818fc17118a3d2d994d5cdc"],["/tags/小說/index.html","89522164385fc7f632933fa501f7a1cd"],["/tags/小說/page/2/index.html","812b7e413a94ffff6218b61394e0adc0"],["/tags/小說/page/3/index.html","2da8b233eb6bb9635511d3a8af817aad"],["/tags/小說/page/4/index.html","f24a639b068cb07906ce75a091912dd4"],["/tags/小說/page/5/index.html","13db37fbec54cffbb37a1eac0b863910"],["/tags/小說/page/6/index.html","d45fffd052ee1696648c04cd3ae412cc"],["/tags/小說/page/7/index.html","3283676b4d4fe82c2ae6360a80066a2f"],["/tags/平淡生活/index.html","041a28ca3f82bf8843d91d14e03dfad7"],["/tags/幸福/index.html","b08ecd504641a27aac35c6ed77abe3fe"],["/tags/志茂文彥/index.html","bec0bf89590a01e207eb323e21c46901"],["/tags/愛情/index.html","52b43b4cd849672a5b00d8b6ca3d40f4"],["/tags/愛情/page/2/index.html","3f59cd024bd7a82404d2f185ac977bad"],["/tags/愛情/page/3/index.html","49189f4644504774109a8f725bea1039"],["/tags/感動/index.html","5bb7833932044f2fbae52d61bf6fca4e"],["/tags/懸疑/index.html","fa41bd8eef87dc19740b42077eb60418"],["/tags/懸疑科幻/index.html","4d5403fe661aca6ffcd4ce09309f187f"],["/tags/戀愛/index.html","bc486f0073501869ecf068e4455bfeab"],["/tags/成長/index.html","28c07eb4aa83334df32fb15053b29028"],["/tags/成長/page/2/index.html","2a861f6eacf9169d7fac25f579756d9e"],["/tags/戰爭/index.html","264b6acebc5657e02e415e16c87390ca"],["/tags/推理/index.html","7b597148c9160c6253963858512663f7"],["/tags/搞笑/index.html","6136d66b93467db5853f391f2c24b2a1"],["/tags/救贖/index.html","89db9b45923bb337ccaf27131ecda27e"],["/tags/斜線堂有紀/index.html","0b474504833be6fee77933b454539658"],["/tags/日常/index.html","10509fb5ad91093da96a53eb8b760e07"],["/tags/末日/index.html","d4ff14de888f295a35c2d2e28ee33f6c"],["/tags/校園/index.html","9fd6c9f2b87d23e3f4f9f50d03271b8e"],["/tags/武俠/index.html","ef3531e31971f09e6450c118f41de655"],["/tags/武俠言情/index.html","40ae180c9b0293477050775cf1905ac9"],["/tags/漫畫/index.html","a0ee5dfbac676e2abb06b34604575b6c"],["/tags/生命/index.html","a682c5fce822708d8ac93597a850d6d7"],["/tags/生命/page/2/index.html","e8c0116fe7c6ed3a58b948a0c753599b"],["/tags/短篇/index.html","21951daeeeed8bbc5ac339ef0b1adf1f"],["/tags/社會/index.html","3385016a08c416e470b679cb7ea2ff9c"],["/tags/科幻/index.html","32885ec4de79001c62d64dbe8a5b3681"],["/tags/童話/index.html","1cf3c72a25d5bb5f27d62ee22d0d978f"],["/tags/競爭/index.html","b3cfa7ba5d5911e1b443ffc68417d95f"],["/tags/自我/index.html","5cfbc8a1a1b40c53e73c96eed640ae87"],["/tags/自我認知/index.html","bbd550412adff185eb2bfe920c23e434"],["/tags/葦舟ナツ/index.html","f5ab1f316318c4d4e2308d358a8ddb0b"],["/tags/藤萬留/index.html","25cf87cf60f85e580601d08a85e19e24"],["/tags/親情/index.html","66ffa167b8d3507fbf2cf11e3cbdaa72"],["/tags/雜項/index.html","8708b8e91b123ebe0df524116418af8a"],["/tags/電影/index.html","a4aca16cf83332cd49962fe2cc5cce64"],["/tags/電影/page/2/index.html","13b11eb5b4ea43f136094babd0886253"],["/tags/霸凌/index.html","2469b904bb416d6389478c94ad9dc806"],["/tags/青春/index.html","0aca9ded5ecd58ca495679c9c4f38088"]];
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
