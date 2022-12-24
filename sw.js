/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","baf87018e44072bba0bd9a48c03d9beb"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","d5da6fadf3a2fa19b75b29685a8c1d11"],["/2019/12/25/Review/無法計算的青春/index.html","1fdbb4343d828b9f02eb167c0ba776e6"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","a47513e5009fb89886afa74d1ec088d3"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","a621c8258a87c16e74140bd0692bfced"],["/2020/01/19/Review/下雨天，不上學/index.html","512dbbebc2f138607e493251fac79524"],["/2020/01/26/Review/三日間的幸福/index.html","1cd77121f6af3119a143ff613627cfb0"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a40709b3b980cd2ed7abb87d4d60ae06"],["/2020/02/09/Review/青春期超感應/index.html","46dc7f6ba57d7b8a02184689e4c8235e"],["/2020/02/15/Review/又做了，相同的夢/index.html","636e5dd8b5341f385a4f17c053617ddd"],["/2020/02/22/Review/回憶當鋪/index.html","3ed9c0f651f7e9a8c62820ee41bb7d81"],["/2020/03/22/Review/不適合自殺的季節/index.html","245eb637289723cdf2795e0245539275"],["/2020/04/26/Review/我們都無法成為大人/index.html","dec676c49185539b9f29133b65148b07"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b0d458a54f6f51a7da0aae24863d9f86"],["/2020/05/17/Review/人間失格/index.html","6e9d07d74616dd416f264cc7d9e85428"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","92232408ea39bd9a3375c73d38ea9da9"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","1d07bcbd1a78c94f519756e29d66a5aa"],["/2020/08/01/Review/銀河鐵道之夜/index.html","56958b832b7c6d0d68c27978440ec19e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","b3dc4070a741b1e99cbfe4171abf76fb"],["/2020/08/16/Review/15歲的恐怖分子/index.html","58f521ad400b6386d7f6dc1cf7303853"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b1930b483dc69ef427f19c33dc2f4359"],["/2020/09/13/Review/羅生門/index.html","560a1589474e3bf89496c7f509aa5082"],["/2020/09/20/Review/闇夜的怪物/index.html","8188be529fba44a59471535cc32dad25"],["/2020/09/27/Review/14歲，明日的課表/index.html","fefc174dad52ccb2eaabe2b6b887e282"],["/2020/10/04/Review/致十年後的你/index.html","2712b7e461a7eedda3eb8fe0c6a48f94"],["/2020/11/08/Review/滅絕之園/index.html","84ae815cb78c5a1756a79d7730a8a5eb"],["/2020/11/15/Review/將愛拒於門外/index.html","9840080746e8646b6016a40ef283cc83"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","3c848884ddb7525aeb77f09006d3f508"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","0033350b23f858de2d9afd3228ecc791"],["/2021/04/22/Review/道印/index.html","bdc081f4ef38ef048b4c48877ce2b769"],["/2021/05/03/Review/戀入膏肓/index.html","3ef180127697372b13b716a62fdf0dbd"],["/2021/05/10/Review/Dice/index.html","fb4d8a149574519df11f9e226df6bbfa"],["/2021/05/15/Review/魔女之旅/index.html","2be641ce04dc89649119b86b184bb39d"],["/2021/05/28/Review/戀愛寄生蟲/index.html","6fb6dfc5c0a260260280f12694611e3c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","69318d5847ca3532ccf55cdc07d940ec"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","c81d8afa79fc3bb1dae4b2939a332c87"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","ee2e0b1ed0ac85c792ce09f7c028bc81"],["/2021/06/05/Review/流浪的月/index.html","7678c1a069139318353edcab77ef29be"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","8bbe77cd1d0ffca6c81dd00e4fe70f69"],["/2021/06/13/Review/第一人稱單數/index.html","888e8f01f9cf8394c79f8a992a0f3bf9"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","9c0c0308d58e1d8540e734f5667f7d91"],["/2021/06/16/Review/願你幸福/index.html","dbee03c026c5aef8272b752f1ce6da17"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","c13d8ed2bce64ff232237b5df595a62b"],["/2021/06/21/Review/神隱少女/index.html","c21d5421a55155484f3bf5e74eb5cd39"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","33d49a0874d13a6a5a39cca4b8c836dd"],["/2021/06/23/Review/天空之城/index.html","e77ca1ab8d47b5d61453a09e78cbb341"],["/2021/06/24/Review/魔女宅急便/index.html","7d244a7398e862d88dbbe28009e671ea"],["/2021/06/25/Review/借物少女艾利緹/index.html","be0490891f0924e427549c38904d7d24"],["/2021/06/26/Review/魔法公主/index.html","5917bc59d3987a01e20e0fd44ea0176f"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","23b95cda8920d35d33ab621a3f67ec9a"],["/2021/07/04/Review/飛雪與劍/index.html","0e3a3b9f83d4430ddb07ffb9cdf879c9"],["/2021/07/09/Review/地球防衛少年/index.html","3bc3d8cc82ba52060c0a94ce2c8118c4"],["/2021/07/12/Review/Angel Beats!/index.html","1d7467249b93401b3e406f4b24fdac24"],["/2021/07/13/Review/Clannad/index.html","2a57bd6e81e82ca3954ae2dc79a21bf2"],["/2021/07/15/Review/AIR/index.html","0959a1bc2b8dd95d5bde931b72582be1"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","505dd404c696d6d28044eb8005b418c2"],["/2021/07/15/Review/螢火之森/index.html","ba588aaeb6aabcb30fcd80ef188c63b8"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","24497062ba06d04102245d1f342ed3de"],["/2021/07/17/Review/奇蛋物語/index.html","a1d04297e612999bdce1319a450b3732"],["/2021/07/18/Review/Vivy/index.html","a796791476781cbf63ae9660e5777874"],["/2021/07/18/Review/請妳消失吧/index.html","3ed55268ff93cf452ad5ef37710f1f9b"],["/2021/07/19/Review/漣漪的夜晚/index.html","e6075bc945b490deb08b8e1a1430e7bc"],["/2021/07/20/Review/月色真美/index.html","3ea109e3b862d98ffb65345d02b11971"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","47cbe6731029f14a194f26af7a753fb7"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","2a47d5e3ebf3a4e6cd05903def1b9e95"],["/2021/07/22/Review/罪惡王冠/index.html","0b5c208a396d1377cc9252f47655e7d4"],["/2021/07/23/Review/弱角友崎同學/index.html","e4eb43d6e674d3b01796e3348f0e4e11"],["/2021/07/23/Review/惡之教程/index.html","160968fd042b41d8e3514fc1a9215895"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3f03c6cbcb05aa7447f27fe0e3befc31"],["/2021/07/25/Review/魔王勇者/index.html","758b4090cf8aa826c2d611769a3474a3"],["/2021/07/27/Review/一年A班的怪物/index.html","85c23e2c0f9f30a828ad58bc79bcaaec"],["/2021/07/27/Review/奇巧計程車/index.html","e660cf19efbafaaf028b523e3dab56b2"],["/2021/07/27/Review/專情的碧池學妹/index.html","0996b44982309a7ba2399338ac8c6c8d"],["/2021/07/29/Review/只有我不存在的城市/index.html","ef98a77a2323957e711909afa006e2d6"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","4d01ed0bff35d5b0dac4efdc68c94bce"],["/2021/07/30/Review/可塑性記憶/index.html","65876d3cf657e77f84c807bd3c1ebdfe"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","02cf076ba850cb7a740e0cfccbaf02f5"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","32fca8d67390136da267b338782b7454"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","12e22a1122a56846fbfc9341aef914f7"],["/2021/08/25/Review/清戀/index.html","f6005867c1d18907e2a4171b966ec7a1"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","665bbc148522add9744814b95b7cdff6"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","56295f0ede360956231eabea4ed9630e"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","399efc475e739bacb5a1da139856ee94"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","099ae4f5256829ff5d9f569348dde189"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","247fb8490b8759d38a1df8865de62962"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","d1b2549f2a6521d602d9c6ca2f225645"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a4c53e9dd0006fe9d12625c9eb85f2f4"],["/2021/10/16/Review/龍與雀斑公主/index.html","ef6e3f46ee640e92b9bbc4b4bee9e404"],["/2021/10/19/Review/孤狼不想開後宮/index.html","708f1b4e1d3b541d81c86c5a333f3018"],["/2021/11/13/Review/徹夜之歌/index.html","0566f6278b6606d6f2dcf3d2762b798f"],["/2021/11/24/Review/武煉巔峰/index.html","f1967f7fb9618b19fb7d3cb9771ebf89"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","8a7a4faa5b670e51245a123c9f805d72"],["/2022/01/28/Review/神醫凰后/index.html","0c339a2996efad799a39a2c74b1030e6"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","6c03fa94dbe124cd9c588f1a74f509ca"],["/2022/02/13/Review/夏日幽靈/index.html","c096ee83790ffb8438c0d7040a2384f9"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","3bc2abdfc1d6be3bd44b81471936bebb"],["/2022/02/26/Review/賽馬娘/index.html","26394975401e4b4560f617240f60db08"],["/2022/02/27/Review/大欺詐師/index.html","ac34de6c100818697df94f22f5271699"],["/2022/02/28/Review/前輩有夠煩/index.html","8bb6c120d071c377186aaa3e80155f08"],["/2022/02/28/Review/碧藍之海/index.html","2a8c4dfe31fe78ae308e3977ba29b5ea"],["/2022/03/05/Review/落第騎士英雄譚/index.html","52413cc99372956053104f09838c85ed"],["/2022/03/06/Review/Another/index.html","3c54d4ea1aff11968c897ed043bbc610"],["/2022/03/06/Review/入間同學入魔了/index.html","a135e43da04a6d7fb45a15da4b0a3251"],["/2022/03/18/Review/再見宣言/index.html","4cd0f960631ffdf6c986e566473a2a05"],["/2022/03/23/Review/生若冬花的妳/index.html","87d75c7546aa3c1a839399051719d344"],["/2022/03/25/Review/天之弱/index.html","1b0fb8bc9d6a42fa9675b81591d5f648"],["/2022/03/31/Review/滅了天道之後轉生/index.html","b6427c136ea982890ce6079ae9c33c94"],["/2022/04/30/Review/泡泡/index.html","9c2cd9c6472c6c6c3a948c0df75aaab4"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","b2c3b2b85e13b83c3176b616cbd4df53"],["/2022/06/13/Review/偵探已經，死了/index.html","c76f6d2b4ec4e237b1441dfdc12dcc24"],["/2022/06/14/Review/黑色子彈/index.html","2d0b4b3a501b6946275ab0284fcf9626"],["/2022/06/15/Review/黑白來看守所/index.html","00c566671b7f15eda8b8ba38b2fe250d"],["/2022/06/16/Review/虛構推理/index.html","b2d96830bd931c0666e21fedcf605503"],["/2022/06/17/Review/戀愛與謊言/index.html","dba05039a73b698a02a1f1bcd93d258a"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","bcaecd1ba8d7eedf73a3d4c06cdecbe6"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","e8364d930af89c0a2d0976644da4c80f"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","da124f5bbc4094ef11b34cb82a3ceed2"],["/2022/07/03/Review/Hello World/index.html","0008a5f306dccc2a0b3700fc4fd01c8b"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","618b28f2dd6b050c0c26d0f8427097a0"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","a1f9ba6d3aa0da556d3053477c5faa35"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","baba5960f6f5513e1e0a6699ccd66f4e"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","8fa7f6f5bf1bad020544f76c36136c74"],["/2022/07/16/Japanese/動詞分類/index.html","fd43557fa7a3b612bbb540d0b40559bf"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","0c7ae3b41f33858bc3a97b43798ad8ec"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","f19210703e5cba6554596ed72f5fa7bd"],["/2022/07/17/Japanese/音便/index.html","a3db04f9a38ec0028991aef958690dc8"],["/2022/07/18/Japanese/動詞 時態變化/index.html","3a496a867dc789924313c47e19ae87c4"],["/2022/07/19/Japanese/助詞用法整理1/index.html","84a184b54841d7f0fd351cff08f11f9b"],["/2022/07/26/Japanese/助詞用法整理2/index.html","3cd52a3746cde492953243fe11686953"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","43f70797b2b2cff8ccebc55064ca66e2"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","c5808581d77530335d141bd5a4b9b105"],["/2022/07/30/Japanese/疑問詞/index.html","10cb18d7936b323b4f3c301429b90858"],["/2022/07/31/Japanese/助詞用法整理3/index.html","5fb8425e4a150e631debe0b8211a3b2b"],["/2022/08/02/Japanese/副詞整理/index.html","c92b751da9010e833a4b84c5301d33cb"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","d583046838861637e9bc712588e6ef0b"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","43b661b07683abaea6e7026e05b4c721"],["/2022/11/22/Review/組長女兒與保姆/index.html","e905c6bccbe5174f685926045e9385a7"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","715d9304bda1cd6922a3d0fd3079a136"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","445a17c50a0b19913c22912279970120"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","7f10cfb5ccc3290b05874bc72c03a3a1"],["/404.html","7e36c2af54c196da248cd05324b35e24"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","574d365f876a1fbaf80144bc65f9b33f"],["/archives/2019/11/index.html","c7582b53615cf210d87e8c2c172bf390"],["/archives/2019/12/index.html","baddc567bec17ea46679a5afb348c100"],["/archives/2019/index.html","17cb48d07e2bb34a3495c5c674252250"],["/archives/2020/01/index.html","c08bffb447de2dc6fb254c03471eb4b2"],["/archives/2020/02/index.html","aad6bdad296dbbbcd0b0ad1ec8947eae"],["/archives/2020/03/index.html","0344c7709cbd9fa338cb5c8f5924fbe1"],["/archives/2020/04/index.html","69c71874b74f294f78433972dd5f4033"],["/archives/2020/05/index.html","41aad1005f364603bf4aae8422f29158"],["/archives/2020/07/index.html","d432b42dc52364d49a9a1b2f0af597c7"],["/archives/2020/08/index.html","4544af4eeacc1f827d29ddd903050530"],["/archives/2020/09/index.html","f59e1f67bd3ff45a7ab07df20a1361cb"],["/archives/2020/10/index.html","c23dbacd041da7e527acadcf0cf94d6b"],["/archives/2020/11/index.html","4061060b4fbb000eb33f7e95592c503c"],["/archives/2020/12/index.html","4deae6fd97b1b348497646908760bbb7"],["/archives/2020/index.html","939f954c103bea4b1964d6049878650f"],["/archives/2020/page/2/index.html","70c0651fdee9a642ffa1ca4e04bb70cc"],["/archives/2020/page/3/index.html","d0304739f91c970a5fc94e82288459c4"],["/archives/2021/04/index.html","a24703df3df3b46398125ba7dcf351fa"],["/archives/2021/05/index.html","19aaf53e14ec7204f5de7d216d3a6759"],["/archives/2021/06/index.html","e94ef89d07c8e70ce34a4ca5141a5a0e"],["/archives/2021/06/page/2/index.html","967c4b33b40752cf9b5636836dfa9d01"],["/archives/2021/07/index.html","6f47cee46d46b25e26a6fd3ba5296639"],["/archives/2021/07/page/2/index.html","640d57d4fc8cbd8e6c6d398385fa6b2c"],["/archives/2021/07/page/3/index.html","f2d524be5b1bdffcf67cf060ed3e0e0c"],["/archives/2021/08/index.html","83e26bf9460a62e2db1fb55aa2f83752"],["/archives/2021/09/index.html","ab815c80a905b6b745d8204721d45aef"],["/archives/2021/10/index.html","88624f3ff79ec364406e2b7b1405a00a"],["/archives/2021/11/index.html","5064753c6241e04b7836187ff318a26c"],["/archives/2021/12/index.html","6452a3a1618e54ef77a383ba0f65c45c"],["/archives/2021/index.html","2df59587d84b7cdd33ad54683b791de3"],["/archives/2021/page/2/index.html","9b540e466ea52429cbd97c14a514671b"],["/archives/2021/page/3/index.html","e208ef0a6d33db575497a868e27bdc7d"],["/archives/2021/page/4/index.html","1d4d1fe5a30724154a3cba45a5a35d98"],["/archives/2021/page/5/index.html","a685ac6849f05b820822abab0af2e05b"],["/archives/2021/page/6/index.html","772592b91f189b7257478295089d535c"],["/archives/2021/page/7/index.html","15a3af0bc9f28cb898b50fbeb3de2edb"],["/archives/2022/01/index.html","34eb19b9a0277d6c4f3137957c9564d8"],["/archives/2022/02/index.html","3984873accc374312401b929001d416a"],["/archives/2022/03/index.html","8e076963d03cd420e0eaa3c2218a2c8e"],["/archives/2022/04/index.html","b6f5c0a15ccb450c4859a1c16b29c6e3"],["/archives/2022/05/index.html","1147ef5e4aff3142084ad4e5939332a9"],["/archives/2022/06/index.html","fe36bca73d065d5ad52a8dd65e08029e"],["/archives/2022/07/index.html","0eb500648628325ecd2db8e80d99894c"],["/archives/2022/07/page/2/index.html","c3d58855290c3a3870824a203a263125"],["/archives/2022/08/index.html","99effcddeb384208796fe02aec940da4"],["/archives/2022/11/index.html","578c76bbc1ed4f71ad6eb1d947fd5711"],["/archives/2022/12/index.html","9c549377661c56192baf0066603ec538"],["/archives/2022/index.html","c8888e60ae4e6bca2417da6200280327"],["/archives/2022/page/2/index.html","f3bfa85192a077c17b80a83a93ceac1f"],["/archives/2022/page/3/index.html","3bab4505240786bbbfecef705c08ba13"],["/archives/2022/page/4/index.html","0124adc585d14d6badab4cd2d6b1f027"],["/archives/2022/page/5/index.html","6b06466f90c830399f52fe70c2c7c3f1"],["/archives/index.html","a0c1c98dafe696ac543a44cd6ae88c47"],["/archives/page/10/index.html","687a8c6e40195b4bfdb26a10472509cb"],["/archives/page/11/index.html","44a014026038e2dcc9aeea068cbe809d"],["/archives/page/12/index.html","6ebb5744dff50853747113edcef08825"],["/archives/page/13/index.html","1b787eaf585aa6b96eb341ab12aa3852"],["/archives/page/14/index.html","65b60ae207f9e9ac00372150e7386f19"],["/archives/page/15/index.html","3d38e5ac132c7a26ac21c2cd403456b2"],["/archives/page/2/index.html","be6c6430d398b67442f027f7c9af87dc"],["/archives/page/3/index.html","5afc3769ffbf0171356bc2cf3fea47dd"],["/archives/page/4/index.html","bfb79e7e8219b625445a396600e96db8"],["/archives/page/5/index.html","9799d7a57a919b7dc3c5332e5a13ebbd"],["/archives/page/6/index.html","e5994e08c28f1a4fdffd64abbe0c7d1c"],["/archives/page/7/index.html","d867d2b8b5bdec719f364ce59c453190"],["/archives/page/8/index.html","82c908ef0d788ab5f162ce43c3165d2c"],["/archives/page/9/index.html","ed24f7a036045cf4d718f55d9741d7cc"],["/categories/Programming/index.html","a749f18befb34109450a597db3ac08b3"],["/categories/Review/index.html","c36fe96c25e76388ad16375638e55acf"],["/categories/Review/page/10/index.html","77997662302d9405821301918b043d0f"],["/categories/Review/page/11/index.html","2591b188bdac979b8780d5d10eba93c8"],["/categories/Review/page/12/index.html","7ca00fce9e7900a17f8ba600632572d5"],["/categories/Review/page/13/index.html","ad462086c4a5a6caa235433353c2efe4"],["/categories/Review/page/2/index.html","44ba9d8eb6fdad6f325302f409a5c864"],["/categories/Review/page/3/index.html","fd9b68a63849eefdaad83ba626b8a9b2"],["/categories/Review/page/4/index.html","cac54c8d9e476e1fd0ae22d8d8ae67f8"],["/categories/Review/page/5/index.html","15a17aacbfaca2f9060b0ec46cc14140"],["/categories/Review/page/6/index.html","7405991fa2993954221fff6a9f4ecc91"],["/categories/Review/page/7/index.html","97d05a7fffe88a0afefd313ddf25703f"],["/categories/Review/page/8/index.html","6e176c3be1b19e81dc397cdbe578791f"],["/categories/Review/page/9/index.html","faa7369831fd1fe19929c88500e795e1"],["/categories/index.html","aab1989f505db73de18fabd295d68ac7"],["/categories/日本語/index.html","c1adcad0d474e23b9c24a256c6c18803"],["/categories/日本語/page/2/index.html","9c1d8205768c0bf5722dc5f641a4bbad"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8b12cc4f176cf3cad29dc894f2b4c6a4"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","4789c6d5c5fd1f2317cc6d95d6f62cda"],["/page/10/index.html","8fb3ce2c7487989529864b47be554f32"],["/page/11/index.html","6b1f18261185825f8fdae9cc93a52d4c"],["/page/12/index.html","57a6ddbd80c5999448969fb8e998bfa7"],["/page/13/index.html","4aac764596c758df128acf9db37291c6"],["/page/14/index.html","ef089ddbccafe2d2e5228ad45c98e12f"],["/page/15/index.html","8dc137ce0ddf6380909b7a812e3b6191"],["/page/2/index.html","b4308d2833353fe1fe48c996c6447cd4"],["/page/3/index.html","786e0768b3b3b7eeb6a27cac2e0894fc"],["/page/4/index.html","06dc759b1abf8a9c070ee44026b2b20a"],["/page/5/index.html","b534ff2988fd3f6b53cc36f72af02f1c"],["/page/6/index.html","9542a6b148b45d2afd226eb7701e848b"],["/page/7/index.html","3d5b7bce725741c88f7740f857a68db4"],["/page/8/index.html","db3119df68e8596c8607bbc0c405fcc7"],["/page/9/index.html","2b5afa36196b88ef462a2ccb6ef95cfc"],["/sw-register.js","c87a6fad8b82fc5ebe00bfe8c7bf8a03"],["/tags/10分作品/index.html","6d824db00e19426eb465c142041e1b09"],["/tags/3分作品/index.html","f38a196b02b1573c64d8175c37ad91f2"],["/tags/4分作品/index.html","54bdb5c08c38fb5a1e61da8bdc7fe733"],["/tags/5分作品/index.html","774157b593a16094c00a4e3154c0caaf"],["/tags/6分作品/index.html","9bf55a1b891184296ae0a6fed375dae5"],["/tags/6分作品/page/2/index.html","aaf6faf1f97db073fdc866bcd1f470ed"],["/tags/6分作品/page/3/index.html","6942ce486c0b0751beb98aaea046c335"],["/tags/7分作品/index.html","de6e6ce6a6a4e833622c0c3aa53b6c0a"],["/tags/7分作品/page/2/index.html","1089b357bcea00ae18cebdd5b64d52de"],["/tags/7分作品/page/3/index.html","98b44fcd9892f91ff841a17e2f9528d3"],["/tags/7分作品/page/4/index.html","0fac16445eba9d071f78724a91e2ee7b"],["/tags/8分作品/index.html","35516bcf49e4d3844ab4ff9e199adfc9"],["/tags/8分作品/page/2/index.html","aa2cbfc5a07d3e37cb518d94ec898a50"],["/tags/8分作品/page/3/index.html","d5fbd9645db076d1c0dbfb5d77476c80"],["/tags/8分作品/page/4/index.html","2a7ed637aef9ffc86a69524682889bf5"],["/tags/8分作品/page/5/index.html","f0b9d4a377f47b829dc9c578321696e9"],["/tags/9分作品/index.html","18a3b53726adcf5d4de6fcda2825d700"],["/tags/N5難度/index.html","0547ff5df9baf626df7aeddb2fad11e7"],["/tags/N5難度/page/2/index.html","fcc612e647f05c9fa3330e8b7c3b20a8"],["/tags/index.html","3e1a9ec87fc2ac8e0411c4c6843b9933"],["/tags/アボガド６/index.html","44d7a154d43ab52b46f5ef581a8ab323"],["/tags/三秋縋/index.html","ff94cd646d143e2ae862f95d78ea2931"],["/tags/中國武俠/index.html","2d83d62106bc6a32a1f8438b89c9b256"],["/tags/中國言情/index.html","9b583bf7bbe2cb9125b6a3b74e9d810e"],["/tags/二宮敦人/index.html","0d26e527640c9837199875dacdee0a8b"],["/tags/人性/index.html","d7f285d3c3ac4ca5662e1fdb1f5f088b"],["/tags/人際/index.html","40387a6afa61ca276f49506f489542f0"],["/tags/住野夜/index.html","a6b6967cb24d5237a7ace25855024fba"],["/tags/佐野徹夜/index.html","e166726bcbeca452c05580d20f3b9c2b"],["/tags/努力/index.html","1223b40d382bb54e50572dc1ef0e5659"],["/tags/動畫/index.html","b04e190c348efee6bc2070a2ea45379d"],["/tags/動畫/page/2/index.html","568c186d9d51ad5cfb24245c13497f4a"],["/tags/動畫/page/3/index.html","80b9488dedbe14b713f5721b215510e7"],["/tags/動畫/page/4/index.html","3fdcc286da62ff7db548e1adcd744dd4"],["/tags/原諒/index.html","c9aa2fb4580b1a64944e229ec84af78a"],["/tags/反烏托邦/index.html","2cc53df0fb13d6b8bf9abdc5535ca09c"],["/tags/啞鳴/index.html","db8c9d6edd28b953c1d4cc064738d7d1"],["/tags/喜劇/index.html","94f75b83b369393096a222607956a60b"],["/tags/夢想/index.html","815de61c4504616daafce0e96ba5a1f4"],["/tags/天澤夏月/index.html","b05e098401624536766b7592b49c8d71"],["/tags/學習/index.html","c11456cb0e1251d4c4624797d5ac8189"],["/tags/學習/page/2/index.html","c8ad2d82e1c3bb2d2e8624392f030009"],["/tags/宮崎駿/index.html","eef85b404a07633b990f34f0891f653c"],["/tags/小說/index.html","17f98ad9728662cadaba505235bba312"],["/tags/小說/page/2/index.html","7a08c6db8123f7fefb80302dffe7ee59"],["/tags/小說/page/3/index.html","c5cce603417d976936ec5a84947c26b3"],["/tags/小說/page/4/index.html","22dba03d25c1867428b4d09907a08c61"],["/tags/小說/page/5/index.html","a6c9d840340fbea79361eaca2c2594db"],["/tags/小說/page/6/index.html","7591286bcc1ce082628e55db9a9df130"],["/tags/小說/page/7/index.html","962f8e0f26e32a037e086d21717cdb2a"],["/tags/平淡生活/index.html","96a368d99edb34208700eaa041c68c67"],["/tags/幸福/index.html","9491c54b2c9001aa1c1480adba583afd"],["/tags/志茂文彥/index.html","3ca34f3b610ca0002046f10ddd5516e6"],["/tags/愛情/index.html","b856dba15a1f09e88a83203f1e9a7cf7"],["/tags/愛情/page/2/index.html","c744e6f88af8288ac33ebdf91a58b794"],["/tags/愛情/page/3/index.html","83a92e2f4f4ee4389074d93d9bfd35d4"],["/tags/感動/index.html","66e584dde055ff4ea84ac2ba401cb043"],["/tags/懸疑/index.html","6cd657608647a92f5a85c92c9acac99b"],["/tags/懸疑科幻/index.html","a1833ce9631f3d6c8750e8e421f1f030"],["/tags/戀愛/index.html","5da0f236481d26b6df43433e7b2142b6"],["/tags/成長/index.html","18662a53756b5a3dd971c7b729286a85"],["/tags/成長/page/2/index.html","f5f36317ab478b5ad70417a7fceef923"],["/tags/戰爭/index.html","55a7e1310347541662654067109e5cb2"],["/tags/推理/index.html","535a4f28a0c9a0570cd484b725d15d86"],["/tags/搞笑/index.html","6a8a2b947880cefc44d795b943a11fa7"],["/tags/救贖/index.html","79c498a4286cbc3b95a7fcd46e71580f"],["/tags/斜線堂有紀/index.html","7aa88aa038d6ca69c7ac0be5a6d059a8"],["/tags/日常/index.html","c6c9dbdeb6aa71d47114acbcc48f2b29"],["/tags/末日/index.html","73f198dfee3053c9ea9fc9067c0db1b1"],["/tags/校園/index.html","6b5df8ad61a47081b8c2ace56d3abad4"],["/tags/武俠/index.html","a28bebc2abb4b3a122d185e9969d22cf"],["/tags/武俠言情/index.html","fa3bf3403bd9f21cf5f5093621fef74a"],["/tags/漫畫/index.html","ab0fe681c2bf2cc31c46f8011d587caa"],["/tags/生命/index.html","fd4d3c62ba7276e3aff4f9afecc01bf0"],["/tags/生命/page/2/index.html","cd7531d642e005d2ee0190e96e62b024"],["/tags/短篇/index.html","258fde94c8ad6a3c0634d8f9d1003aa8"],["/tags/社會/index.html","a6cddecd44e1df20ea8aab8e1e3b811e"],["/tags/科幻/index.html","9b1a5e098f29cbbef136f2de52147316"],["/tags/童話/index.html","15a800e80949055533832c5f3ceb2736"],["/tags/競爭/index.html","fc8caf51275943f870f764b453ada1af"],["/tags/自我/index.html","8122118569bce6db81b9dd3eb59c005e"],["/tags/自我認知/index.html","eaf08f92183bc492b87ee1a6d2e098c4"],["/tags/葦舟ナツ/index.html","aef6b5cafac958f327c7195c3c294313"],["/tags/藤萬留/index.html","29b625b2d463045f073dea9a17bb662e"],["/tags/親情/index.html","00ed21f8843e75bba36dd5c449b0cffc"],["/tags/雜項/index.html","8166f9b47d76ade6ae617533e99a7157"],["/tags/電影/index.html","0ade0650e38b77c2801d9175ca1366bd"],["/tags/電影/page/2/index.html","7ae534a15563364b39748939790e77a8"],["/tags/霸凌/index.html","94d63638df87674efd7b33b068e997fc"],["/tags/青春/index.html","39a0d191075ec01956df098bdf65d6d0"]];
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
