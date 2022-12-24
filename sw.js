/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","db0c4915e8c75490a75a0234ecfd3d87"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","b71743d345d317922f60d61ee8f5bd4a"],["/2019/12/25/Review/無法計算的青春/index.html","4c2f1044c140c1ef58783a0734f5f009"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","f68e0630febdaf8c62a66b47c8292675"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","d6f5e5fdca1a84105c973e05a0e78958"],["/2020/01/19/Review/下雨天，不上學/index.html","93bb9ef1c56638fb71c432890bc502f4"],["/2020/01/26/Review/三日間的幸福/index.html","03e947f750f0b2f7b37af20217197196"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","f2d7ab487f7bbcae30b2c0030c877cf4"],["/2020/02/09/Review/青春期超感應/index.html","a94ed191e03f73a613d71777d98ff3e1"],["/2020/02/15/Review/又做了，相同的夢/index.html","65894968d207dd0676647a98d189014c"],["/2020/02/22/Review/回憶當鋪/index.html","7a52b1f695949cab1a4d2333f619fc90"],["/2020/03/22/Review/不適合自殺的季節/index.html","fadab996a1b15c6121f22a2c39d58e5d"],["/2020/04/26/Review/我們都無法成為大人/index.html","89f33641372bf30ba155c533e06e70fe"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","c3b24f72eaf2857c47419b8dd8bc739d"],["/2020/05/17/Review/人間失格/index.html","7d765f85f92275cae1941638f55fd28a"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","780747e55924634876d3f5e80a361204"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","51454ac11c7f3add4a8ad3a36f325e3f"],["/2020/08/01/Review/銀河鐵道之夜/index.html","732e617b0250405f85807376bb4976ec"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","ae2059200cdaa0eb3f7c4bb5b38b6b10"],["/2020/08/16/Review/15歲的恐怖分子/index.html","79f900d0d98e27bfc65605d48c4ab61c"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","9691f9b1010f84efb0cee68bdffdc125"],["/2020/09/13/Review/羅生門/index.html","025d72d505641a83049cea124ab22436"],["/2020/09/20/Review/闇夜的怪物/index.html","c655fc4c221cc09105c21c9c7cb54c8d"],["/2020/09/27/Review/14歲，明日的課表/index.html","213409c7348015e55f96d814fd8d6562"],["/2020/10/04/Review/致十年後的你/index.html","db1a9d3c18441325de32ca4335b594c7"],["/2020/11/08/Review/滅絕之園/index.html","29eab03638e4a7ee97bb528c7cbb5e44"],["/2020/11/15/Review/將愛拒於門外/index.html","b594be08e8270a309a3ff56be76e394a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e11ed9b17983e5533fd5a7e875f7c4ab"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","28bc2f98b894d7828cd0b5a53d1e4989"],["/2021/04/22/Review/道印/index.html","b81e02d093e8d4d34997c14330c1f805"],["/2021/05/03/Review/戀入膏肓/index.html","0a6d3fb32b35400478f20b7d31b92bb4"],["/2021/05/10/Review/Dice/index.html","c3c62f490d8e28c549ac8be7934234ce"],["/2021/05/15/Review/魔女之旅/index.html","2a9d40296d61bbceb80d70295e3505a2"],["/2021/05/28/Review/戀愛寄生蟲/index.html","db5b84b5c3edefff8ae0e1c83c0cd508"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","fad245961c036d91a8753d3ef526413d"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4052897401b7359b59b1074db245090a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","305b66a7ef0706f6ef8a74e9970a293e"],["/2021/06/05/Review/流浪的月/index.html","9a8a247fc72d45e34e5f21be2b1bf0da"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","c94d2ba2328623ebcad4d07f4a366249"],["/2021/06/13/Review/第一人稱單數/index.html","ecfb90cb083905a29a242530ddb7c82c"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","5a92be08841c4128e34f3784e73faef4"],["/2021/06/16/Review/願你幸福/index.html","004f4554009d1a0937be3943ed5d076b"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","c3530f1d18e17b8b76e7e3bffa3e92f8"],["/2021/06/21/Review/神隱少女/index.html","77ba3ee63caf88ed1bfd0e6787d928cf"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","d20bfda4aebf3565a89500122e451006"],["/2021/06/23/Review/天空之城/index.html","8910b745e3fba5006177153482b59afd"],["/2021/06/24/Review/魔女宅急便/index.html","6863f9176f3f7ac8d4588996daf1bc7e"],["/2021/06/25/Review/借物少女艾利緹/index.html","324198126bcea02916b2a8fe2fc26dc1"],["/2021/06/26/Review/魔法公主/index.html","0ff4bfcdbef542ed01bc42aa0da2e0ba"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","502467fa9a51fb985f516c2eb4952291"],["/2021/07/04/Review/飛雪與劍/index.html","a9a5822ff05ab5d89b0b50156e14b647"],["/2021/07/09/Review/地球防衛少年/index.html","232692c28db2624f1d33547f1ff78989"],["/2021/07/12/Review/Angel Beats!/index.html","da9bc6c445c79f7d117a415954ec976e"],["/2021/07/13/Review/Clannad/index.html","535fa4edee537f7d905fdbbca0cd43c8"],["/2021/07/15/Review/AIR/index.html","7712b28ffe8f27bff80814b5d7b7b20d"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","e8a2cdca718adf79fdbe71472ac99fe7"],["/2021/07/15/Review/螢火之森/index.html","338b2401830a14de009cae9d0575a944"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","db485b667c7ee6ffaae56b6622f1bc32"],["/2021/07/17/Review/奇蛋物語/index.html","0c529fcba76e1fc83502bcd466bd84b0"],["/2021/07/18/Review/Vivy/index.html","c3952cd22e5aa916eb0b9e36496e6aad"],["/2021/07/18/Review/請妳消失吧/index.html","09e7e7368e9d6134edef0ca627400358"],["/2021/07/19/Review/漣漪的夜晚/index.html","0db14765e57a4637d529c3078d2660bd"],["/2021/07/20/Review/月色真美/index.html","0d71c71afb30bb61ef4774da4373b54d"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","1b9f90e8d9738ecae1686df9cd1c6976"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","a7986f0d5c8b543e05d66bc74ddecbd3"],["/2021/07/22/Review/罪惡王冠/index.html","297cff43d85302fdf5e5f6f003e394a4"],["/2021/07/23/Review/弱角友崎同學/index.html","02d69cc8fa6e37d9623ba7a6bba49a32"],["/2021/07/23/Review/惡之教程/index.html","f38e7d7f875877ff68d68a0232d3aecd"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","5b081286485d69916fe082e19def2382"],["/2021/07/25/Review/魔王勇者/index.html","8b8fba413c29d27dc61a412bedb4b591"],["/2021/07/27/Review/一年A班的怪物/index.html","1a48a2b11d837ed69966cc520eb10091"],["/2021/07/27/Review/奇巧計程車/index.html","5ed9d1277285e0ef5ca702058736d978"],["/2021/07/27/Review/專情的碧池學妹/index.html","698b8b2c1b61fceb812cc928f5641453"],["/2021/07/29/Review/只有我不存在的城市/index.html","328ccda2ffa2af98a5953adab3fb630b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","35e40370cb4329edb6ce5deadfd331f2"],["/2021/07/30/Review/可塑性記憶/index.html","99559ee06e840e077b8182ce2e33cf10"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","56fb247721f924cb670ed630fce2a1fd"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","2dbbf7c7ab4f7fea4dbea03b350fef1c"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","90c3ad73577a5e6990a7cd01a60931b1"],["/2021/08/25/Review/清戀/index.html","58ee1565bfef47990ea745a2e4a87de5"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","7ba03086fea0bebf79a364a6ebc15513"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","3468e7cf04d915232efa9b772fea782a"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","1df9702f6becb0285f88b79c38c14bc4"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","3ed88c8b04ef20a2dd4d2fed722fb025"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c819fce1be1859908ab1e5477be4b002"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","85cb4415652a00f65993060ca777509f"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","04597c7bb51c303c184acc0bc5eb4d17"],["/2021/10/16/Review/龍與雀斑公主/index.html","cccc0f569ec7f6eea686bb4bbde3f20b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","26dee3ad227e265df49b2d7a9e893909"],["/2021/11/13/Review/徹夜之歌/index.html","e64c3154d0500a5c5bbe4d14d17fc5e6"],["/2021/11/24/Review/武煉巔峰/index.html","4d82df4e9a23e8649a868a935a33878e"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","ef05d4939a212230945b0626edcdfd69"],["/2022/01/28/Review/神醫凰后/index.html","887f17a3126b29495e03b17f56eec20f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","24c3720d4d091d72a27c8c70aa3b34ef"],["/2022/02/13/Review/夏日幽靈/index.html","54a62cce98ea7ac2f908af0c1dd72a74"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","3c238899f9b9d5a3d3233114a1edb61a"],["/2022/02/26/Review/賽馬娘/index.html","8c9b6e28de2f9e13ffd01b05313fd8cc"],["/2022/02/27/Review/大欺詐師/index.html","9b849d992a4ee336eb64e0b8d51f91d5"],["/2022/02/28/Review/前輩有夠煩/index.html","3442b103a7de8895a538480a1532cf3f"],["/2022/02/28/Review/碧藍之海/index.html","94b7015bd56fafc678b7412c9235964c"],["/2022/03/05/Review/落第騎士英雄譚/index.html","84e6559642e171c2b5499d6f4b96aa80"],["/2022/03/06/Review/Another/index.html","c4fa7d7f2c20564d4edab125564d5fc5"],["/2022/03/06/Review/入間同學入魔了/index.html","9c770959d10c61e02a5811452efabb99"],["/2022/03/18/Review/再見宣言/index.html","b601b9ddcc08265b5fe550086aae0e37"],["/2022/03/23/Review/生若冬花的妳/index.html","aa938cf5c232d5db1d449058710a8655"],["/2022/03/25/Review/天之弱/index.html","f0e2127cc6cff362f73941f7faead8ab"],["/2022/03/31/Review/滅了天道之後轉生/index.html","2fd043f119ef03ebd871142892c65278"],["/2022/04/30/Review/泡泡/index.html","ee496a9408afd85e6a1791da4a1e3bfc"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","a24fb4716ebe742470c945d7c8abf087"],["/2022/06/13/Review/偵探已經，死了/index.html","ded5bb51dc7115c8007887b5bfc954b3"],["/2022/06/14/Review/黑色子彈/index.html","4dd1742eb1791b961a181c9ab9823429"],["/2022/06/15/Review/黑白來看守所/index.html","9021e15ce19d2acaa85f1cde4cbbc1f7"],["/2022/06/16/Review/虛構推理/index.html","a740268f8458aa77edf276e0ea412854"],["/2022/06/17/Review/戀愛與謊言/index.html","acfe387ba0f545813d4069567d082e29"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","9fec152ae089697cd09a5c5eb783c8bf"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","c06a99ce281afbe995f21bd0934c4058"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","296b116dbae0397dc742bfbddbc1ae62"],["/2022/07/03/Review/Hello World/index.html","d9b3a23ce83df243b45f9108a2ec1fb1"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","e9d7b109c808dd209319b5b6cb40a620"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","3cdcf7c69f778769798f3010aa123467"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","72ba924a870e1ef9d37dcd91d5edbd33"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c99804f1ede04a5cef8271b1f5a0f437"],["/2022/07/16/Japanese/動詞分類/index.html","286f17823165fa4fb739ee75512c3514"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","62573d56cc3fd0e5dbdfd7c2d45824b7"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","4b1ec34e0c621d6792331fe87b30b69d"],["/2022/07/17/Japanese/音便/index.html","578007c44f173c7d99bf6bafbae45e99"],["/2022/07/18/Japanese/動詞 時態變化/index.html","cc5e02b1c648df11fe308fcf01f67ba0"],["/2022/07/19/Japanese/助詞用法整理1/index.html","931121b3f464e56717094ab00f8060c5"],["/2022/07/26/Japanese/助詞用法整理2/index.html","44f1290a00ff984b1ec6faca4914676b"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","8309bcdeaf61b0636f50ede8b76d7bf2"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","c906d6fc95cbfb753fb975327a1014e2"],["/2022/07/30/Japanese/疑問詞/index.html","cc03cc76c94ccd9745542b846c6f387a"],["/2022/07/31/Japanese/助詞用法整理3/index.html","019db2b49ea90ea4854c228dcfe9f6e4"],["/2022/08/02/Japanese/副詞整理/index.html","23abfddf39c3c73f9b48edad439ae8fb"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","3b2c6f36833a13718758b20d480e8782"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","e3c6b697f5c6185c8cc03449f09a3704"],["/2022/11/22/Review/組長女兒與保姆/index.html","e286e16929821add2d321af302b8ac1d"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","9c5a42dd5d805311c7dea2aff5c0f864"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","87040533b085870dc6713b09f7433c16"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","f83678e890977a525c8b582760432e21"],["/404.html","018386b89f07459afd733fbe3df1c659"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","007daef21f65bf929f8ab79f50dd21f0"],["/archives/2019/11/index.html","ccb0893503257e8ec2320f21e79795bf"],["/archives/2019/12/index.html","78db52902a57211f3dd475452e976f73"],["/archives/2019/index.html","5f22011cf2848411438d1262a8270b48"],["/archives/2020/01/index.html","a86b8757b5a6a70d412d232ec200c1fd"],["/archives/2020/02/index.html","f1ab40088524dc1de1aa6300075b27aa"],["/archives/2020/03/index.html","ec414c4cc1aa66e45059b09d6860739a"],["/archives/2020/04/index.html","f621f63ad154766ad4551a2bf3d8a66e"],["/archives/2020/05/index.html","8ef4fcf81613bd4196a170feb856e310"],["/archives/2020/07/index.html","31b3f04ccb0f447527a060e6c84b9a4f"],["/archives/2020/08/index.html","7e4f4fceffd48891a7a939ec095458d0"],["/archives/2020/09/index.html","2c73defe9876a192838e5eb3ba98a081"],["/archives/2020/10/index.html","951a4de47c3e008ecec35a038ae7a057"],["/archives/2020/11/index.html","2f37287ba5f1f634c2ec8ba68fd7a5f0"],["/archives/2020/12/index.html","0883b5410a31b9e49464f6b78b2b8769"],["/archives/2020/index.html","37d5f74962eb9ba167c638b5b8451c54"],["/archives/2020/page/2/index.html","4521cf1831247fd14e6f81359645991c"],["/archives/2020/page/3/index.html","955a43dff459efea17239e39683dc625"],["/archives/2021/04/index.html","f0c909a66b0c85acf9017f25eac11976"],["/archives/2021/05/index.html","10c96a9cb55413180035dc85b442f7d9"],["/archives/2021/06/index.html","bad56da50ad75eff11ecd7d2bd555226"],["/archives/2021/06/page/2/index.html","d7cd62ac86211ca847ea0c765c10deee"],["/archives/2021/07/index.html","72c26d15aac0e9c684b1b25efa02bb10"],["/archives/2021/07/page/2/index.html","040b36c0b35debf1052e8ad44dd0b720"],["/archives/2021/07/page/3/index.html","57269762a8a4a056c4522387724187d7"],["/archives/2021/08/index.html","1ed197a2c0ce609e409996f4dedef487"],["/archives/2021/09/index.html","c96bc0a0cf95d1a552915d4a001547c3"],["/archives/2021/10/index.html","a5792dac1dbdbeb2d39fa60dceccfd22"],["/archives/2021/11/index.html","976e66b75ed407eaae99da3b1436fc0c"],["/archives/2021/12/index.html","0fe7fb4ac4b68375647fdb99dc84bedd"],["/archives/2021/index.html","d246f1a40336696bdeece0638229ad67"],["/archives/2021/page/2/index.html","a9e4cf24551be55fc5ab2398824df2ab"],["/archives/2021/page/3/index.html","3025569c86dbaf508bc128192d6bceb9"],["/archives/2021/page/4/index.html","74ef7de41dcaa8fed65d19b10ef073c8"],["/archives/2021/page/5/index.html","f83fd8906a28150a00dfdfa7b2628b04"],["/archives/2021/page/6/index.html","3a59c1460a44d50b2a3c94c91abacea5"],["/archives/2021/page/7/index.html","6cd4cceb9fd2a1c6fc7ea6210463357a"],["/archives/2022/01/index.html","c41238b15a0db6afe32675e9a53a7056"],["/archives/2022/02/index.html","22cea26b72b6cb7304874a958e7a6d6f"],["/archives/2022/03/index.html","b89d7111170cba66fc3fb30e64d48543"],["/archives/2022/04/index.html","bfad26b55f97e01b968763d75c153a1f"],["/archives/2022/05/index.html","6425a2cdaad3ecba5cac51fe784c9846"],["/archives/2022/06/index.html","f8a6d349b743068e523804d6bec42d23"],["/archives/2022/07/index.html","de95c00b7906eeae47b48ebb464d1b57"],["/archives/2022/07/page/2/index.html","f1fa5c7cc6ed82580670757559f6a9e6"],["/archives/2022/08/index.html","7a4cdaa88e6c18df5366a8e5c8f14b7b"],["/archives/2022/11/index.html","f206c4cd489c717ea8a1c01ab2794639"],["/archives/2022/12/index.html","6babffaa66b68a18e86e684b319e7ddc"],["/archives/2022/index.html","6a9b9079084b65b299139c3b161a433d"],["/archives/2022/page/2/index.html","c255cf93c4c51ecea09ccc68c5ffaced"],["/archives/2022/page/3/index.html","156cc01ab96846fc5110579b9f549efa"],["/archives/2022/page/4/index.html","82d53449cf1be77ae30678ec37ac744a"],["/archives/2022/page/5/index.html","a27200a7ccad549de4f5d9f1ebf0b1a8"],["/archives/index.html","aaf5d7241232f6629dd3315112da8317"],["/archives/page/10/index.html","9152daca4019df4e2657a9cc7c086784"],["/archives/page/11/index.html","5cf14d84dc2f9ac6b0768e98a0e05b15"],["/archives/page/12/index.html","4b511400b796a202f72fe3e3599821a4"],["/archives/page/13/index.html","95cf1bd8680b392252537ea6993cb7bd"],["/archives/page/14/index.html","025b4e995de79d60e5cd1b20576ae888"],["/archives/page/15/index.html","fbee6e99c02ed31afb206e7b93cbea98"],["/archives/page/2/index.html","34291a59912b03be85da36e41d30ef13"],["/archives/page/3/index.html","3eb112eba6cde1c978847ffd776a88ff"],["/archives/page/4/index.html","9cd901b12b8e1bf303a132a809d6e3f0"],["/archives/page/5/index.html","fb2671ea60f89538d8a6c5376da9752a"],["/archives/page/6/index.html","11a2f0001aa0a32b4f834a054af3afb1"],["/archives/page/7/index.html","c743814a6aaaaa56ff3db7a11912cbd7"],["/archives/page/8/index.html","65932e17fec60fdb0506cd15a5ca3120"],["/archives/page/9/index.html","4d888c5e424b1cb421b7d24ffd314a9f"],["/categories/Programming/index.html","1ab76c53558288e211844d641e167caf"],["/categories/Review/index.html","c0a01416d65093dbc6c7cdac5847c5cd"],["/categories/Review/page/10/index.html","78325335339fa7655c26719939b0f83e"],["/categories/Review/page/11/index.html","dc4246465d90b878d8cc3517a682d687"],["/categories/Review/page/12/index.html","d0b546d2e5595d60594428777e9d5380"],["/categories/Review/page/13/index.html","e1e45c4146f3f4fe252e342b2700fdcf"],["/categories/Review/page/2/index.html","a5ab1a09645fd84f8278e57d5fb0ae28"],["/categories/Review/page/3/index.html","25f533067f6133ae8059e7dd9d800ae6"],["/categories/Review/page/4/index.html","942ec913c7cc06b3aa49ec80517e1e0c"],["/categories/Review/page/5/index.html","80610267e2bd81951cdba156f4fdbefd"],["/categories/Review/page/6/index.html","20c7957ec03d396a4c4554118caf842f"],["/categories/Review/page/7/index.html","3a7c8bba96be3c32fdab5dd2ba01cb66"],["/categories/Review/page/8/index.html","bcebc949329269fb512618a6295a6e2c"],["/categories/Review/page/9/index.html","6462a78a0c577b4a6787890f18a60633"],["/categories/index.html","5aa745b4796e4f9067ab5d22e7162108"],["/categories/日本語/index.html","b84a89acd1c34bea42617d90d64f48e1"],["/categories/日本語/page/2/index.html","0970348936b3ba8247b1567528f24b1c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","68f4e573bf7bbea16748b2ff082a8035"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","6e6f857290cec96a46195bc361998197"],["/page/10/index.html","8715c3db1ae106c5a469d0f84c84e4ee"],["/page/11/index.html","948e2a687f49ee8750294784665441be"],["/page/12/index.html","5b1dcf8ef8cfaa4c075cbc7f6c082f38"],["/page/13/index.html","243ff239d84f7664bb21fe753cb16170"],["/page/14/index.html","5d266abddb167ca7344b720a811756f8"],["/page/15/index.html","3b80000da37797a3ba4190737e48fec3"],["/page/2/index.html","bcd53d2bfcdba5190bfa02cff431c251"],["/page/3/index.html","ffce3fc3d8f76d0cece92a00fd094228"],["/page/4/index.html","8bff0a5a8cd4cf357b824080246c62aa"],["/page/5/index.html","8da991196d2e000b32e84c92f3cc84ed"],["/page/6/index.html","c9177803b5aacf48e7166b6c3cde7c03"],["/page/7/index.html","85676c182ca3e5d67cd5c480e09e32ed"],["/page/8/index.html","078d1e0516eed598b9e3fe4885f01e1d"],["/page/9/index.html","f659b89ccb832c42768fceb294e1f47d"],["/sw-register.js","3ae1bf7f62658ca4253f8b767d3531ee"],["/tags/10分作品/index.html","aa3a39df72d7981b662a60cf3f5daa18"],["/tags/3分作品/index.html","181ab4bc3c15074dddd50bb16ed341db"],["/tags/4分作品/index.html","8d72cec7c74f9302bcfbcd66b70b64fa"],["/tags/5分作品/index.html","c094065a757dc5d0cea93ebd2b02d6cc"],["/tags/6分作品/index.html","bd28fc15ee529c2c24d68b815001357e"],["/tags/6分作品/page/2/index.html","3164841e77abd7407bd05f15417af212"],["/tags/6分作品/page/3/index.html","b223e38850f9b7b9cd230d0aa8112444"],["/tags/7分作品/index.html","4b13cf6a3e15c073907a740e4c0b5926"],["/tags/7分作品/page/2/index.html","aa847ab3ebead53571186b08d15eb8c2"],["/tags/7分作品/page/3/index.html","220f336809fc15ee96c83b0fc36127ee"],["/tags/7分作品/page/4/index.html","c9fda68ca1d4700f112aba57c1195dd4"],["/tags/8分作品/index.html","247a50a06d9325ac1861a06b3210e52a"],["/tags/8分作品/page/2/index.html","2bfb87a03abc5397addfe527d99e8bad"],["/tags/8分作品/page/3/index.html","0af15a53a1f4b531a322a7183393b3eb"],["/tags/8分作品/page/4/index.html","242cf80eb6ceed4b1d32d80fc1dba918"],["/tags/8分作品/page/5/index.html","a816aabce1594f98ba1098d7b4e77a9e"],["/tags/9分作品/index.html","9eb129f1b29b18a254a8af0ef025e611"],["/tags/N5難度/index.html","8c0f8a54ac2d16e2e92ea9f576351913"],["/tags/N5難度/page/2/index.html","88a4bbd34638c5a6dbda34c6b36524d8"],["/tags/index.html","3b4fecf4c91117d7c4bb06415a630f74"],["/tags/アボガド６/index.html","6d919d064a4b8fc078028dd31522df7a"],["/tags/三秋縋/index.html","45bf107f4070edcc529092272fef6e17"],["/tags/中國武俠/index.html","e53e10d23375911fa8112a2d2446fe08"],["/tags/中國言情/index.html","9978ba5bef242f55395dd42f923d638f"],["/tags/二宮敦人/index.html","10e04f7bc893c5fde4a793c9256b1731"],["/tags/人性/index.html","8d15a604a02468cce59ed912b22bf7ff"],["/tags/人際/index.html","eafb3cb22103f8b6add8ef8fd9131bf4"],["/tags/住野夜/index.html","f3e6f2591bfc740a7e81fdc3c724d497"],["/tags/佐野徹夜/index.html","920726712b507d1fd35cd52a7fa53466"],["/tags/努力/index.html","ba6491350a357d773e2e640cf20165f4"],["/tags/動畫/index.html","bd08e1a0338b05a799419de3c102bcc0"],["/tags/動畫/page/2/index.html","aa3c322529dab25b8f3e674713011630"],["/tags/動畫/page/3/index.html","b241d97bc320ae226ba2df7bf6e98afb"],["/tags/動畫/page/4/index.html","c80489fa3ded2d6323adbadefe29d6fe"],["/tags/原諒/index.html","73eeeea84d42af1277d25e4e0d80be7d"],["/tags/反烏托邦/index.html","d6187f7539cf4c566a1e9a82bdcf38d4"],["/tags/啞鳴/index.html","3e3e322fefc2cc94a3f5d29242ae8fda"],["/tags/喜劇/index.html","91c1b4dc77e2ad6988a4bb515787b716"],["/tags/夢想/index.html","61cb1b3245ed50a42368de85a8bc34d3"],["/tags/天澤夏月/index.html","707b53032a9a3b3a08082e5608000e19"],["/tags/學習/index.html","8c9048431c94c1e5196b4eae260c8b08"],["/tags/學習/page/2/index.html","2a539de3cb806ff41ef497e7a5aa4cba"],["/tags/宮崎駿/index.html","36246d4d889a05bae4903e51012c75ff"],["/tags/小說/index.html","6ee5a902e53603f9a2e607dabab5485b"],["/tags/小說/page/2/index.html","3ca7acdb7f63beddf2920c7c57633b36"],["/tags/小說/page/3/index.html","ae0ac09deb303773be3b142296861e8f"],["/tags/小說/page/4/index.html","50fe8df59c43a6d1041fda6e0ab8f6f8"],["/tags/小說/page/5/index.html","c03aba6470b80606bc274555d55d8a87"],["/tags/小說/page/6/index.html","2aaa7f70bfb8f17a9085c25d5bf739f6"],["/tags/小說/page/7/index.html","fe66df5e397338ad1e476fa9538be046"],["/tags/平淡生活/index.html","6704d687ff386bfe5f9b35af66ac69bd"],["/tags/幸福/index.html","ea1b2714eac6e51f86869500d5a315b4"],["/tags/志茂文彥/index.html","234f0be11b73f9a9eea07397ca14be8f"],["/tags/愛情/index.html","5f5b67bbd39b909552e18e8ca8694731"],["/tags/愛情/page/2/index.html","03c09bea5dcabf1e6abacd5ce2798b17"],["/tags/愛情/page/3/index.html","497b245443b6decb2485ad7f357c980a"],["/tags/感動/index.html","fb5c6e999e467feb4bd1ad6864c382dd"],["/tags/懸疑/index.html","330305074f28f4d705f40d851b9d3a93"],["/tags/懸疑科幻/index.html","858b9c8cc5e1afb9454ae37382c3a60a"],["/tags/戀愛/index.html","7f88483b120893da716d6a9d9e5e577a"],["/tags/成長/index.html","52aaed3bd91df2b4d89440fc4708c838"],["/tags/成長/page/2/index.html","dbd8f8440901390c4542c1abe2547e49"],["/tags/戰爭/index.html","8dfe0b930dd772db2c789ac3095f3a11"],["/tags/推理/index.html","c9b06ccc55c5f2c12ec52b76c62c531a"],["/tags/搞笑/index.html","0093e2de4ac7fc7a9cb759602af6ed2a"],["/tags/救贖/index.html","2872968937e18738e58a852cbe424ca3"],["/tags/斜線堂有紀/index.html","839694fa3ab4b70119b896afcdfb8cd0"],["/tags/日常/index.html","60e6ed923e7a958717fdf5caac9ac599"],["/tags/末日/index.html","8d8e64eddd5b505091290e43aaec37ab"],["/tags/校園/index.html","8747136be0b422ff70b6e8a488e03f39"],["/tags/武俠/index.html","06bff16639504fc3d7138ddb824d8632"],["/tags/武俠言情/index.html","a642c336194cac230efa43a83da6522f"],["/tags/漫畫/index.html","2ba96dd351723d307a23e8545bbb2b0f"],["/tags/生命/index.html","4e301f708c3bb38d761e75cce009d28e"],["/tags/生命/page/2/index.html","5c8033fcf23c87782c42fdec2d5dae0c"],["/tags/短篇/index.html","5f70891a5f2d54176ec35e3686ba5e9d"],["/tags/社會/index.html","53fe53c18517dca5dcc0309c3eb49783"],["/tags/科幻/index.html","6f7c5a57d29cbfceac592e93502afbc8"],["/tags/童話/index.html","25e149433508b0870cc9545f2c630ace"],["/tags/競爭/index.html","2f536c7bb2cfbd2643169ab1a4cf675b"],["/tags/自我/index.html","f986580821f6d1292586a1768a97cc7c"],["/tags/自我認知/index.html","efdf146fefbe3d5c1e0814d352698168"],["/tags/葦舟ナツ/index.html","fe3537cf94628387ee4a3e7d86e323cc"],["/tags/藤萬留/index.html","477ff81edf18d4ec472ab001496d19d7"],["/tags/親情/index.html","8daf2d05b764b5f061adbae18393d9ff"],["/tags/雜項/index.html","804659b1dc7e82445e43da44c930ca10"],["/tags/電影/index.html","80c83c56bbdd94883c32cfa21b5bf43f"],["/tags/電影/page/2/index.html","3e4a46eee2c8c25b4a3310971efd7839"],["/tags/霸凌/index.html","de4a98f39b9dee9a9187188570a82ed2"],["/tags/青春/index.html","7d4af13ce9f29e3a568c2e400768d49d"]];
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
