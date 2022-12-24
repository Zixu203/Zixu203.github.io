/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","1d23afbe22414f691c7fd270c5719489"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","17461d1e611b7f1c034a5991e34842c0"],["/2019/12/25/Review/無法計算的青春/index.html","0275638ddb5a673774918d00d8ce1c68"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","896ec1659d1ea50c9dabbea3aeb8b888"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","65a0c613347b6eb8f94fdeb146fcbae5"],["/2020/01/19/Review/下雨天，不上學/index.html","3e899a9a9f27417bcac360118d52d1b7"],["/2020/01/26/Review/三日間的幸福/index.html","b126e4047e435c3a0736ea8bbd0b0bf0"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a7fc46bce93b6c448cd7de0c747adc28"],["/2020/02/09/Review/青春期超感應/index.html","d97bc69103f8e2c7c750eecdb1cfab5b"],["/2020/02/15/Review/又做了，相同的夢/index.html","2c1da62866f7c0d2f76d8c62ea4308c4"],["/2020/02/22/Review/回憶當鋪/index.html","eb8a543a049285d936415a92ab463ff8"],["/2020/03/22/Review/不適合自殺的季節/index.html","5889834854bfb88a5bbb5f04a5691b62"],["/2020/04/26/Review/我們都無法成為大人/index.html","a8528c55a012c3573a9ef9f61b1889a7"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","bafe81cf4245958614bf7e8191dea23c"],["/2020/05/17/Review/人間失格/index.html","a3a0e952d046880dd18fae4fc2f48289"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","c52389cb73c6c1d9ec33d19fa8f20c92"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","1b8f5c2de0d7934b1a390bf1219f0132"],["/2020/08/01/Review/銀河鐵道之夜/index.html","78758cc0c4ab8638b4ea72f37e79c4a5"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","9f276618d66fc253dd4462b2a8312369"],["/2020/08/16/Review/15歲的恐怖分子/index.html","65ba293b0a7ec9e57095db97fb23f5ce"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","17462d4ce64bfc0e9f9468730fe597b7"],["/2020/09/13/Review/羅生門/index.html","0e915d49336057a2ad0662d8bf40fca7"],["/2020/09/20/Review/闇夜的怪物/index.html","5cfaef04c3f6026080718b624c31227a"],["/2020/09/27/Review/14歲，明日的課表/index.html","711dd5d0b6541428fe5b862415360228"],["/2020/10/04/Review/致十年後的你/index.html","a105ba0be15b9a843cd96f992d9243ea"],["/2020/11/08/Review/滅絕之園/index.html","c0f075d0487fd95b422abd76e753f65b"],["/2020/11/15/Review/將愛拒於門外/index.html","67a57f0b51e665369e0bf4ea59a1767a"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","f420f9e203d87bb9a5fe768f6722b572"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","b5d8b9acca40a194aa1c696847110a9d"],["/2021/04/22/Review/道印/index.html","d2771c5bd219ca4236e245942b0fc054"],["/2021/05/03/Review/戀入膏肓/index.html","6ff592099b476d67e71281a0ae5e7562"],["/2021/05/10/Review/Dice/index.html","fa0773124a8033d45e2eb69caf520956"],["/2021/05/15/Review/魔女之旅/index.html","0c5ed158176ffd4bd05d10e14c6760b6"],["/2021/05/28/Review/戀愛寄生蟲/index.html","eb58a2ed8bc30f06dbfd8a37562dd7b1"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","51b610e7346d927613d93dcab49a1c0a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","37bd20be93255e16803254ed644b5db9"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","d4c06062cd08d9b783d0b70f274409c4"],["/2021/06/05/Review/流浪的月/index.html","07b3fd9e1a31c733909d761028baf83e"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1b525f91b0af15ffdbbe23608d087acf"],["/2021/06/13/Review/第一人稱單數/index.html","57008ee54643778c68c8006d13d8649a"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","889669af75e9c7dc8e4fce9f48968eaf"],["/2021/06/16/Review/願你幸福/index.html","fec74774748062baedb7f8a07fda40ac"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","9929c237810c440496c9e2cad6b5f05d"],["/2021/06/21/Review/神隱少女/index.html","f62c90fe5eab2e1ad5f664dbb2b2729a"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","f8ab5f648e39dc31d13ede2f4ba260dc"],["/2021/06/23/Review/天空之城/index.html","ed57ad25417c02031ca901e5548273a8"],["/2021/06/24/Review/魔女宅急便/index.html","385a420333ed03482e88b3ca9301b066"],["/2021/06/25/Review/借物少女艾利緹/index.html","66481f2aa1fbca7bdfe69c4fe72b0649"],["/2021/06/26/Review/魔法公主/index.html","af47884dd701385ab9db21028e87b63e"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","56ed9cc9026a737228383363f7adbb2d"],["/2021/07/04/Review/飛雪與劍/index.html","338b475bd71fec874fed59189627f763"],["/2021/07/09/Review/地球防衛少年/index.html","74336b66d1bae8789fcb45bfaf98a1cd"],["/2021/07/12/Review/Angel Beats!/index.html","2239eb126f5e73963319ab70d473dcbd"],["/2021/07/13/Review/Clannad/index.html","9f476f8659d8809f256819de071932e2"],["/2021/07/15/Review/AIR/index.html","da0874395e073e9ac76f6aa408eafb69"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","33b85e887e92636bf0a1dbc721c5b89c"],["/2021/07/15/Review/螢火之森/index.html","6eacf973cf9e8d2148de1b1fd6976f0a"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","20adb6a6fa6334813458fecabbc8bde8"],["/2021/07/17/Review/奇蛋物語/index.html","e408c5783b8d95a6cba39f3e5e9cd216"],["/2021/07/18/Review/Vivy/index.html","1cb1131a57071c0a8b1246912634b3e8"],["/2021/07/18/Review/請妳消失吧/index.html","dbdf71c0ad3fd97c26fa9dcc96ccd425"],["/2021/07/19/Review/漣漪的夜晚/index.html","a1f92c24f3e8c6aa740fd86c6398ad39"],["/2021/07/20/Review/月色真美/index.html","729f7223b1a5489b5d04ecf161594bf7"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","075ca812ee632e3dd3948ca913eacbf5"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","0e1d7a9752f1285762f62eef9ef8f150"],["/2021/07/22/Review/罪惡王冠/index.html","7c48c22d12ff294d2ef64331931e4a8c"],["/2021/07/23/Review/弱角友崎同學/index.html","b9b9f880eceaffa7b3ad681ca00996dc"],["/2021/07/23/Review/惡之教程/index.html","c618a0681527efed495ad310a88afd9b"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","66641fa1cd433213a4974bd60744ab8a"],["/2021/07/25/Review/魔王勇者/index.html","437d8731aa45116e95ffb123663b2c54"],["/2021/07/27/Review/一年A班的怪物/index.html","a6e385ce8e10b2cdd69c759fa27079a6"],["/2021/07/27/Review/奇巧計程車/index.html","d8171ae91088da01ac82c53fb726a307"],["/2021/07/27/Review/專情的碧池學妹/index.html","844fe8735182f8cb09fbaa9528c8a791"],["/2021/07/29/Review/只有我不存在的城市/index.html","dede6c31096e899ded9928548ef650ca"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","26a7f5fa7950c94e65ce939d12e1d3ab"],["/2021/07/30/Review/可塑性記憶/index.html","486b5f9fd636714423a58016968d35c0"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","6adbfe586f009025c7f0c76eb6a22366"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","bfdeec8cdadeadd363a2d8a79517f07b"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","7e82bc3e8e179ebad2d736ef439d0603"],["/2021/08/25/Review/清戀/index.html","85707db3ec20ab57742068be5b53d544"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","f132cc2a90b4de5117d6d15d86176959"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","435a7510fc75b0813f0908e94623771e"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","e16cae13da9ffb8751f97faa6401362a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","6228c328590e294e42c6c14918ca038e"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","ddb890adf49d7d772eb5f51b54655342"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","51c118788410ca1c7ea86b31996f2525"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","935f9f7255a49dc4fc96264643fe742b"],["/2021/10/16/Review/龍與雀斑公主/index.html","88f7ba283123db9cfd97b13383f27e2f"],["/2021/10/19/Review/孤狼不想開後宮/index.html","390884505e80bde5892055647eb82d1e"],["/2021/11/13/Review/徹夜之歌/index.html","414e0575e20c0c00313e5ed8cb4294a2"],["/2021/11/24/Review/武煉巔峰/index.html","e2f1cece0a44b3fa2caf3c1eee9f5163"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","68ad884b6bec01defc3e4bd49b69d955"],["/2022/01/28/Review/神醫凰后/index.html","cfd93f717fbf81a57bd117883fc1b635"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","c8f5e4f8a6822c732f148d4361fb33ac"],["/2022/02/13/Review/夏日幽靈/index.html","a1763a7b880d079ffb97ae8d4cce4d8a"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","0ca1617e4c5e8476823178482bb4f665"],["/2022/02/26/Review/賽馬娘/index.html","d31b1a7fb7e219917db488d9c5fd5501"],["/2022/02/27/Review/大欺詐師/index.html","4e27a6abfbeceb25987a05bbbf5b0b3c"],["/2022/02/28/Review/前輩有夠煩/index.html","a4e518aa86f0fd3b1068b8790b00297a"],["/2022/02/28/Review/碧藍之海/index.html","95d59a19534528b6d1d24cbef4054f25"],["/2022/03/05/Review/落第騎士英雄譚/index.html","8851214750cb2b2d3acbf347084b156e"],["/2022/03/06/Review/Another/index.html","8bb536812ddf700b677fe4be5f99a74a"],["/2022/03/06/Review/入間同學入魔了/index.html","b3c3d0f4827e11c59969af81fbb022de"],["/2022/03/18/Review/再見宣言/index.html","54d3787e27e1c1b91023b231f1f355c2"],["/2022/03/23/Review/生若冬花的妳/index.html","34ff1b6ff81d71ff91893274ae9c1dd7"],["/2022/03/25/Review/天之弱/index.html","5b0a1cc0d38c318ca5d5b85ef5ba401b"],["/2022/03/31/Review/滅了天道之後轉生/index.html","c6b15fec4e5ee354faaefbba333c4651"],["/2022/04/30/Review/泡泡/index.html","daa0c3ebc21676b7a407868e4dacb328"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","10cf7e8ea7d65a1499975a3317eff1de"],["/2022/06/13/Review/偵探已經，死了/index.html","8aed20d12df7f10fc00c77409e47c581"],["/2022/06/14/Review/黑色子彈/index.html","4de6b0f615fc4c22264c9fc00270a127"],["/2022/06/15/Review/黑白來看守所/index.html","29cf91c546b8f2318cf30740a19e5422"],["/2022/06/16/Review/虛構推理/index.html","b4035e4261ef710a71a631a2c086009b"],["/2022/06/17/Review/戀愛與謊言/index.html","18318191051895c615a675734b131ff4"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","6fe45100f1a37d3a8927054adbd12402"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","6bd0e9ca78ab5ea0626f2490feb8b799"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","af7d962fe6df073efeecb1ffef1b9b57"],["/2022/07/03/Review/Hello World/index.html","92f0a6fc77b2fc464fd859270427754b"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","135d0a99ce8da55d1d45a9e16ae42b98"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","ccc6e53b7c86ddef8c60a5fa275f9b71"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","582e1696c5cd40b64a342fcae17c5e17"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","bbb22ac04404d66a1e7fa8007c1d0ab4"],["/2022/07/16/Japanese/動詞分類/index.html","bf624ece470b3a75f857ded96a9096ee"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","ed87380c053f11c29bd40804c801ffab"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","cdca5f95cd03dae8b64a490067a01663"],["/2022/07/17/Japanese/音便/index.html","81dce0ecd471de141f49bfba8ca69504"],["/2022/07/18/Japanese/動詞 時態變化/index.html","c81b31b802d866b2af0b6f1302832d0d"],["/2022/07/19/Japanese/助詞用法整理1/index.html","0b00b451ec84df5d7425c9be6b47e657"],["/2022/07/26/Japanese/助詞用法整理2/index.html","ee542e0a79d2195ea9aed42877211d9b"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","aac4040ed43886b7a816e654752f734c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","d6ff4cf80bbc285729349b5b255bef13"],["/2022/07/30/Japanese/疑問詞/index.html","cf4cd5819176ff9b7ac25f18be29acb4"],["/2022/07/31/Japanese/助詞用法整理3/index.html","a6819c0e1b0d11ca888444191117575f"],["/2022/08/02/Japanese/副詞整理/index.html","775c663024c9c182c1b08f5c121c3500"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","5f2ecfaf74183e3627dd044ca66251a8"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","27b61ae6979e77bc09b7a02fd8754233"],["/2022/11/22/Review/組長女兒與保姆/index.html","282fd2ef3a0ff4287c042ed53a07b08f"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","70fc55f2c60aacaedfc314e2151e470a"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","d98adb62d797b5adc391a15c720c4527"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","61a617b77385f5b11ce97437645f73fd"],["/404.html","1647d695528c3873fa14f288e96d43ee"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","44f0c752a8b86ec8bbd5249869856df8"],["/archives/2019/11/index.html","0f63917bfca6b51866cc5d72aa3de286"],["/archives/2019/12/index.html","7d88252e0e052bf57f650e35b88089fb"],["/archives/2019/index.html","6c4aa61a6a31ba4aaf6dd73a7202d752"],["/archives/2020/01/index.html","52f7f6aa15b759f7c6ecc0c780ca6c1c"],["/archives/2020/02/index.html","b71f34f5328d57f342e56dc8f9909107"],["/archives/2020/03/index.html","45c6511d62415d8ed89b9c68280a0894"],["/archives/2020/04/index.html","b06e405b8df3b850826b674a3dc2f7d6"],["/archives/2020/05/index.html","83e846e9d28a4f32792b98dee3ba73e4"],["/archives/2020/07/index.html","17b7bafb5afb45d130e1f8384424e2d1"],["/archives/2020/08/index.html","234ae694aeb22920dabfb07f61989d16"],["/archives/2020/09/index.html","58e5dc0d036e6cc99cc191a8a822a7f9"],["/archives/2020/10/index.html","5fea4da074917266cde685d03301c1a1"],["/archives/2020/11/index.html","2e9d018a04a5fb711b9669ea4ee0b867"],["/archives/2020/12/index.html","11af4937d89c73936d5cbe706e45abe1"],["/archives/2020/index.html","e9d1fd7800e739097dac1054ccc2d51e"],["/archives/2020/page/2/index.html","8837f07e52c8c71ad7138eb89a7d07d8"],["/archives/2020/page/3/index.html","216d177dd251a064805c3f231a4dcba4"],["/archives/2021/04/index.html","1da85ed1907c701870ea0153622905fe"],["/archives/2021/05/index.html","1fb3f7c951b211f7f72c4b63ba760406"],["/archives/2021/06/index.html","e1b1a20fc06835d66013291d75eba190"],["/archives/2021/06/page/2/index.html","eb8b3eb7418c76344c5168b7a6f3c084"],["/archives/2021/07/index.html","4b24a312991a9fd14a6836a5b1c8ccb2"],["/archives/2021/07/page/2/index.html","446672f287fa3b72bdcdabcaabe4e209"],["/archives/2021/07/page/3/index.html","fecab4f218a8c0fc9ae866f403bd6273"],["/archives/2021/08/index.html","8f31a7e4663476e4a58b07bac754df55"],["/archives/2021/09/index.html","689b92e26f71e58870fc0b2acb83faab"],["/archives/2021/10/index.html","561fdf57d358a95ff80991dc279a6ef6"],["/archives/2021/11/index.html","b2db83af6e8083fcce57309d9e897838"],["/archives/2021/12/index.html","142cf9ddfc48dabf970736a56cda3a62"],["/archives/2021/index.html","5ff6c60ad49cf574a40237bb79d14c15"],["/archives/2021/page/2/index.html","b35bcb09b9af4972b259f8eb8a1ea2cb"],["/archives/2021/page/3/index.html","7e2180f52a752c13dfe837e27204a3bd"],["/archives/2021/page/4/index.html","b11d1dde136646a7f6099554b390d15c"],["/archives/2021/page/5/index.html","e8fd68c2114a6ae09c8bacea9b5261a3"],["/archives/2021/page/6/index.html","3ea1574b9d6b047a93b029f5d3e7356d"],["/archives/2021/page/7/index.html","b2dc2a811904b198a148fea66faac92b"],["/archives/2022/01/index.html","827cb6bb8afc9df267eaf8d8c8be7931"],["/archives/2022/02/index.html","7e20df2d053b4f64c16056024604f118"],["/archives/2022/03/index.html","24bc98e18b5754d8484c694f7c63e421"],["/archives/2022/04/index.html","5230850d23189bad6dc5c9e911c9192b"],["/archives/2022/05/index.html","b92f5fe15c64180882f0bf0cb0e9225b"],["/archives/2022/06/index.html","01aedf27956b44e6079779a9967eb459"],["/archives/2022/07/index.html","0bf4cfee9a54e7a1badecfa0db8c6c3a"],["/archives/2022/07/page/2/index.html","08bdcc7c5248cb133d6c6b7db071531e"],["/archives/2022/08/index.html","de944e0e57f7062edc1e44967adfa4c0"],["/archives/2022/11/index.html","93970c9841c8aadaee180475007ec7d0"],["/archives/2022/12/index.html","267db6d1eab8ae1475450514dd1a0eb4"],["/archives/2022/index.html","19473fb1c0195b0467c25aa9952bc66b"],["/archives/2022/page/2/index.html","1e7932689428206882ce421a80866a10"],["/archives/2022/page/3/index.html","2ec63935bd8b4b952cde82bd81829eae"],["/archives/2022/page/4/index.html","4d54886a4a9e624242735709c6c69d61"],["/archives/2022/page/5/index.html","d51f707f0ce9fa9353fb87956dab4daa"],["/archives/index.html","e23595438ae1afa9adc4138d85350bf9"],["/archives/page/10/index.html","3666f6ace655686f641c83dae88cb7c4"],["/archives/page/11/index.html","59c86dcfa0d4ef5442636d11bbb17ee1"],["/archives/page/12/index.html","b6b3b76a633a087493ca30ebca696c0a"],["/archives/page/13/index.html","29d0b68edb99abef1f90b58f8cf08e5a"],["/archives/page/14/index.html","02e9d8af68e3197a92679aba8e54b994"],["/archives/page/15/index.html","ac2fc66f0445e2ac9fdd8f1e175403ae"],["/archives/page/2/index.html","290e7302fba42084a3c3c55b01c80866"],["/archives/page/3/index.html","48f2c0f2b4cbc1ca08654a0c965e3a00"],["/archives/page/4/index.html","f1cc754e1b642d92f9f519546a9d017d"],["/archives/page/5/index.html","d43f3b2e87312f19e3d13dd2408aa940"],["/archives/page/6/index.html","d10fb81b03c776ebb604060724bb4e89"],["/archives/page/7/index.html","f720c01ba928247fd31c56165664db1a"],["/archives/page/8/index.html","73d0643071a91d806e27995fc21430ed"],["/archives/page/9/index.html","8d1bad94da2120941bd9261d3de082da"],["/categories/Programming/index.html","ff8cd34651217320e58814df8a1a80cd"],["/categories/Review/index.html","514c03d210f4d0488809a70f60f9f4d3"],["/categories/Review/page/10/index.html","c1cfc142992efc4c23d98913cc7d9ad8"],["/categories/Review/page/11/index.html","83bdd6e9c992476e9bf4ea1a046f5386"],["/categories/Review/page/12/index.html","f4cd0f471eb15f52ffc4a76ae0d1ce66"],["/categories/Review/page/13/index.html","c43bb1da55d461f55ae5178f305f9f2b"],["/categories/Review/page/2/index.html","c527651d00eacbe975181eac75de0654"],["/categories/Review/page/3/index.html","e1c4bae3b62e54fd0ae186898229276d"],["/categories/Review/page/4/index.html","b077639c2bd96d43e18f5fcaac360b04"],["/categories/Review/page/5/index.html","808f91cd7cdd1759587471a0d9204221"],["/categories/Review/page/6/index.html","6775bc1470973d7fbbb78bc0b651dd7d"],["/categories/Review/page/7/index.html","eb09cf4d787fab9ee1a5ccdd5ed2f7b6"],["/categories/Review/page/8/index.html","a2c39db0dfa26ee49172f4b0f5e0abb2"],["/categories/Review/page/9/index.html","e3d971363d9fa3510d1d2051b18303f9"],["/categories/index.html","517a63235a99db01bf771f5043c0714b"],["/categories/日本語/index.html","da81c50c02d4577c51ae54694d223381"],["/categories/日本語/page/2/index.html","a521a7cb17a55fd28f32656a280a43dd"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e8934119f7bef8e414c98654d0bd09f3"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","9ab6a06df03fac714f8e594016b0bf43"],["/page/10/index.html","25527e0b85a8687f5f041c433bf53ed8"],["/page/11/index.html","359cf90fca9e8a82105624efa652d766"],["/page/12/index.html","b593ac44a5bda6045b74cc78f553af2c"],["/page/13/index.html","097cd4f366338927a8b81a0fd2859eb8"],["/page/14/index.html","c76ce6060e5191e90ffec8bd1964458f"],["/page/15/index.html","b8fcda8ec4775c9cbd9e2a60e71cef01"],["/page/2/index.html","fb563778fcc584515486417c1e439f37"],["/page/3/index.html","e3634864a69a6cf8784421132876870b"],["/page/4/index.html","a34bbd1ad954713c5c1ca0daa482b918"],["/page/5/index.html","455347b7b768e26834f603c0a669598d"],["/page/6/index.html","239ccd52a97da729130a1dc9ab60f732"],["/page/7/index.html","351e652a36d3c5cabcb5ed53184de333"],["/page/8/index.html","14682d93c4eccd2b3af803e111753f61"],["/page/9/index.html","ec33fca7445ea8852e7fc666aaa4c7e0"],["/sw-register.js","fb795493d79d3e19fd5b78bb51f4a7d4"],["/tags/10分作品/index.html","0aa2532731c47edb230994da1e1fffc5"],["/tags/3分作品/index.html","129a4c3d5106d0d6bab3e61fa691938e"],["/tags/4分作品/index.html","0a6fb1f6d6af54c78657b5111aad93d1"],["/tags/5分作品/index.html","890488c70114a100b7d7f670c2b5f978"],["/tags/6分作品/index.html","7978eb421d7134a3355680ab83a1f07f"],["/tags/6分作品/page/2/index.html","8cb92ff8e0d00fa5c15d7f3f0d56c753"],["/tags/6分作品/page/3/index.html","a49db31b2a0756ba92566d720048c213"],["/tags/7分作品/index.html","e316973c7c243d712e52a69ff4ef932e"],["/tags/7分作品/page/2/index.html","227dcffdc6986e76437db17045bc937f"],["/tags/7分作品/page/3/index.html","aecf6cde6e653b28cf56aceba70bb359"],["/tags/7分作品/page/4/index.html","1d2f54dc36288e6ec7e8455ae832df82"],["/tags/8分作品/index.html","3cb497e008bf8a489a1c78e8f7e0dd33"],["/tags/8分作品/page/2/index.html","d16b393e1961deb705028932c76916bb"],["/tags/8分作品/page/3/index.html","a001c4a0e0a6a71ff53304047f059a9a"],["/tags/8分作品/page/4/index.html","cd4efb7c678271228817f7fa337b8676"],["/tags/8分作品/page/5/index.html","da051b1a629219d9139c6fbb3ebd153d"],["/tags/9分作品/index.html","43d2a40905035574631a2e66b4ea195e"],["/tags/N5難度/index.html","64f7be4c55a9bf3f02b4af115c52eaa2"],["/tags/N5難度/page/2/index.html","a7e5e0d633a30301092577b401154def"],["/tags/index.html","c4ea17c84003e7340f1ed94721a54cbb"],["/tags/アボガド６/index.html","ce1740b71f42bcefbd7012ba2409e1dd"],["/tags/三秋縋/index.html","697e6a47803445723a75e5094cbf28d4"],["/tags/中國武俠/index.html","e3faaf50fd698756ba44443337328d7e"],["/tags/中國言情/index.html","43ddfffc49f74bfedc1a179dd83baa9c"],["/tags/二宮敦人/index.html","814875c15733ddcea66a5157d68e9017"],["/tags/人性/index.html","052ec9e14947d251abb281d998cf3949"],["/tags/人際/index.html","b65d747bb0d26354cfdc4bc78d77a225"],["/tags/住野夜/index.html","07aa93de8b78fb57f4646024383ab6fa"],["/tags/佐野徹夜/index.html","9cbb048a657cdaa18f325a2f2395c694"],["/tags/努力/index.html","c9de089992b5ccd37b2981137ebc57b5"],["/tags/動畫/index.html","32ac8735fca050381d4041ad75b1c610"],["/tags/動畫/page/2/index.html","5fd0270b71bf0a3269f3af958d6cab72"],["/tags/動畫/page/3/index.html","47051f93e379aeb250d8c7c0744a9190"],["/tags/動畫/page/4/index.html","7637d5d8c5af1fc27dca4ecb854caafa"],["/tags/原諒/index.html","e580af948300aa78dc9235b7b8501c21"],["/tags/反烏托邦/index.html","f9971a4e81a8b973f5499439d54fc062"],["/tags/啞鳴/index.html","925ae1e0a1628e2888ab8483965582c2"],["/tags/喜劇/index.html","69741220d6725f2914e8f10ed29e4013"],["/tags/夢想/index.html","f9f7f71b25cf35e1616be14ea27e23d8"],["/tags/天澤夏月/index.html","824110b909b3e8384e1881498838126b"],["/tags/學習/index.html","fdad859bab0d47fc04fe032e598c8e8c"],["/tags/學習/page/2/index.html","e57837d46eef9ead9e1154cf8b826b51"],["/tags/宮崎駿/index.html","80a922f7dac7213c90a2a8859a111016"],["/tags/小說/index.html","1a33694deeae9abcbdcd48479a418e63"],["/tags/小說/page/2/index.html","0c7b6648d876d2042fcee1d7510757e5"],["/tags/小說/page/3/index.html","5f97d1af83df7291b16dbe74e34bee83"],["/tags/小說/page/4/index.html","e640beb94059a7d22ca7d8ccc5104c86"],["/tags/小說/page/5/index.html","96a7f06f9d4f358fc4313833a33772ea"],["/tags/小說/page/6/index.html","7685f3f5fe3f11187ce54c07a06df3fd"],["/tags/小說/page/7/index.html","00bc7cff11be1b2d7592da855c5995c1"],["/tags/平淡生活/index.html","23be6d0c09e315837acaabd7812faa72"],["/tags/幸福/index.html","b5b01523e23e781571344cb0c666f5ae"],["/tags/志茂文彥/index.html","b7fcb8cc8fcedf2eaf8c5d442a52c221"],["/tags/愛情/index.html","b1731c29e079e6ec32770e3114806770"],["/tags/愛情/page/2/index.html","6d513dd65d8b63cfe6887a2064257a25"],["/tags/愛情/page/3/index.html","eef82779df654bf01bae94dabc17721f"],["/tags/感動/index.html","7afde801d4f30d3c16bcae9c60af6230"],["/tags/懸疑/index.html","c835f6b4e02cc40366bd737c112677d7"],["/tags/懸疑科幻/index.html","968b43f58ae631ddc9dd3c585cb38613"],["/tags/戀愛/index.html","b7eacf3e46ffc1ace33252ebaefab470"],["/tags/成長/index.html","aa2155e541c5bee6567ef068c947aa25"],["/tags/成長/page/2/index.html","41f9fe6e25c517c62dcbbc2464b98baa"],["/tags/戰爭/index.html","8bb7c2c0c53c6b1c9b3c34ff82593599"],["/tags/推理/index.html","3b8109bb8e8300dcf7270cd0a1ec6338"],["/tags/搞笑/index.html","b7453dbdb8396b2ba085007aba1b214c"],["/tags/救贖/index.html","8e273adb0d799ea563b7a71b0047fb67"],["/tags/斜線堂有紀/index.html","51bed8da6b5b75cdc6e12aaa5a5e8499"],["/tags/日常/index.html","996c0fa7e79ecf2d2b50b24e968849bd"],["/tags/末日/index.html","84c9f5d28c871e7a2741f2801a0dcc59"],["/tags/校園/index.html","23dfbf676be7948abfaf2fc329e112aa"],["/tags/武俠/index.html","10e17400884eb98c53beb78abf5f7dfd"],["/tags/武俠言情/index.html","2519c99bde882cacddeb562f022a7494"],["/tags/漫畫/index.html","468d067eb05e0e7401c3a486c1f3fc98"],["/tags/生命/index.html","553b9ce18dd740e506ee0c2f5258667c"],["/tags/生命/page/2/index.html","56850e6e18170e0e51522dd5e1941e74"],["/tags/短篇/index.html","c799d3a7b4c60ff41f5474386ecad41e"],["/tags/社會/index.html","6b6a768fa646a9d7017f5caacc86539b"],["/tags/科幻/index.html","9680faf0e15969b4e2cccb65b997a9ff"],["/tags/童話/index.html","b9ff3133dc2073edeca8689cdb952031"],["/tags/競爭/index.html","8af1449edb0410a56bfa4d53aaf00d9f"],["/tags/自我/index.html","d8a5e912be778826a255954e640132e7"],["/tags/自我認知/index.html","fd8d2d12e3e717089c955a7313171f07"],["/tags/葦舟ナツ/index.html","fcaba634c06730f6404abd74b24aec36"],["/tags/藤萬留/index.html","69e4874e1eada211c0f35d7806aaa8b4"],["/tags/親情/index.html","a4f68e9b558c3ade128a3e1b0947dd6d"],["/tags/雜項/index.html","a225ea7b0240bffcb60efe814f71111f"],["/tags/電影/index.html","62b9b198001d57c644b8b97f0bd1d93c"],["/tags/電影/page/2/index.html","2c244b74bfb0fb0f2f78aae9c70b8786"],["/tags/霸凌/index.html","52e7fccdb67e5641971a9579d1fd3d61"],["/tags/青春/index.html","710f0f456a8ea2184898fb82ad112ddf"]];
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
