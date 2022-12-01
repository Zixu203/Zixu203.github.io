/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","31db90ef516e104d57be6acfdd8c883a"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","864d8c189027b7a4f13a626f43e178cc"],["/2019/12/25/Review/無法計算的青春/index.html","305649395806f6398faed37bc70a6c0e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","b9baf00df641c7acbb31c087f53a4350"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","fcf5a01730e56423761976eee3a6f693"],["/2020/01/19/Review/下雨天，不上學/index.html","5c12bdcb3ec34174d5beb467f1c1b843"],["/2020/01/26/Review/三日間的幸福/index.html","1de852f4554fa51b28200eb633f5b637"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","a62b3641f4a4d0103ec727ebad54134e"],["/2020/02/09/Review/青春期超感應/index.html","b5f1e49cdb84df1c8f6089a2e42c0fb0"],["/2020/02/15/Review/又做了，相同的夢/index.html","ab5d6a4ef738345a448e9cdc9069aab7"],["/2020/02/22/Review/回憶當鋪/index.html","b98ed5ab1e1e811b672c009762471171"],["/2020/03/22/Review/不適合自殺的季節/index.html","b95b52e0221334dc1abcf59ec3e8dc12"],["/2020/04/26/Review/我們都無法成為大人/index.html","11f7fcc8d2869ef813c2985cf12ab220"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","0e93f1f56edf9acb55d819b404dad6e1"],["/2020/05/17/Review/人間失格/index.html","bb49e6bfd3b6a7bd2b08ab6efa31eb37"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ff568477b74fb4db3ff70bf1968eff44"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","590e4cca537976bd8a85d1e4ad2004f8"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6e99bfc926752aa0cb4f430bbfb1021e"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","82ed78f04d2041f2689e51d437257eb2"],["/2020/08/16/Review/15歲的恐怖分子/index.html","471810fb7cacb378466aea39d3961803"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e9dcd8660e8056123b703166dfdaad1f"],["/2020/09/13/Review/羅生門/index.html","c1c59126e6a8b311abdf990c5b30946e"],["/2020/09/20/Review/闇夜的怪物/index.html","54a49f18cbe7f22eec78beca1b0536dd"],["/2020/09/27/Review/14歲，明日的課表/index.html","24a38f0e14b6b00d39c62394ec16612d"],["/2020/10/04/Review/致十年後的你/index.html","33110986b6d9944d0083712302458809"],["/2020/11/08/Review/滅絕之園/index.html","7b53c5723e01487af8081d39923e9e97"],["/2020/11/15/Review/將愛拒於門外/index.html","9016931872e0200c0c37d7db41e77dd3"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","c13d914ec48f3d70458b11f46c7acbdf"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2c2b197d9453451a31c3f0c6f259dc6d"],["/2021/04/22/Review/道印/index.html","62adfb01c71faf9e5866fef680a3890b"],["/2021/05/03/Review/戀入膏肓/index.html","dd1682eed254623297dd0852982fea08"],["/2021/05/10/Review/Dice/index.html","dd1c8d35c0fe98c1eb65c0f4fda18fff"],["/2021/05/15/Review/魔女之旅/index.html","331b2ffa8b772f71912ea33773ea6161"],["/2021/05/28/Review/戀愛寄生蟲/index.html","d83afe4b1ff98b353e33c99e0cf5bdf1"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2389e8dae643911aec66623fa1feef03"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3c545996a5d9ee1cf81398c902a8417a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","169c3b5e772f1258e35b95cdc89cebbf"],["/2021/06/05/Review/流浪的月/index.html","46fccca2af5d50c10391140bf9de5699"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","3661b7ac48af6bd687540ebc1aa19e05"],["/2021/06/13/Review/第一人稱單數/index.html","c4098b51d8daba6de8725afe4fdc4f87"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","3987bd5699e894061d824620954e98f7"],["/2021/06/16/Review/願你幸福/index.html","892878b507bbb260cb88ae80bdd68dd0"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","dfbe1dd5ea2aaf9a1f0e558b01476ea5"],["/2021/06/21/Review/神隱少女/index.html","e7a500ec3399235ca16ad5188fd869a0"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","28efb142864f86f58cdf5fc35a83d51f"],["/2021/06/23/Review/天空之城/index.html","cf3903f4f110181db7251ed0e353c865"],["/2021/06/24/Review/魔女宅急便/index.html","086f4131cf7063b32ec30743a0635fc6"],["/2021/06/25/Review/借物少女艾利緹/index.html","122129b23681f5baf9578b6a05d3bf44"],["/2021/06/26/Review/魔法公主/index.html","c0532bca93f09e676d52abeffbf7f6a1"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","fe30d4c39d31e0e65dd405ceb0bd1a7d"],["/2021/07/04/Review/飛雪與劍/index.html","a1c2fc77d11929e4587bc7778d6a0cb0"],["/2021/07/09/Review/地球防衛少年/index.html","1063c9d0d03337327c75785f3d07673d"],["/2021/07/12/Review/Angel Beats!/index.html","2640239c43248a6da02887f578f6d236"],["/2021/07/13/Review/Clannad/index.html","995eb8b0f00d89fb4c45ac033ff13853"],["/2021/07/15/Review/AIR/index.html","57015f8012397ea99f85d7d53eb66f05"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d5426059f74d9dc0346e32d5f3e40820"],["/2021/07/15/Review/螢火之森/index.html","163c372af7c606187439d5657d932618"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","44d763a8d871441271b4da2f756b42eb"],["/2021/07/17/Review/奇蛋物語/index.html","32eb94287bee0e6238373ec8f1118d45"],["/2021/07/18/Review/Vivy/index.html","0428644978484f1c4934c0e5494f63ab"],["/2021/07/18/Review/請妳消失吧/index.html","fc199c115b2a4908f147b94969669053"],["/2021/07/19/Review/漣漪的夜晚/index.html","e09d5deb979742720fbeedc687684ad8"],["/2021/07/20/Review/月色真美/index.html","fc03837fffde394fa8424e5ddb34733d"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","577153ad4d8d262fa2f3098c31723c09"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ca38998b78c34e65bc941663be15f7b9"],["/2021/07/22/Review/罪惡王冠/index.html","69a27f8717eeaac3b255cbb749178805"],["/2021/07/23/Review/弱角友崎同學/index.html","6909296ed19a90bd0fd69577ee44b967"],["/2021/07/23/Review/惡之教程/index.html","1fae1e56619934525da8661586c96151"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","548ed1f11a1792cad2200955703d4937"],["/2021/07/25/Review/魔王勇者/index.html","4dfc1b1a5b9616af753226ffdc978edb"],["/2021/07/27/Review/一年A班的怪物/index.html","e3166d5627a8ad7aabd863934b1a0d88"],["/2021/07/27/Review/奇巧計程車/index.html","55f2539d339999cc1584ca363e845426"],["/2021/07/27/Review/專情的碧池學妹/index.html","44068c31e6f69454c94f38dfd5683090"],["/2021/07/29/Review/只有我不存在的城市/index.html","b35481c5ef5238c3abc4b88a1aac8a6c"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2afef9fdc2e610a0006c42e7978f8de0"],["/2021/07/30/Review/可塑性記憶/index.html","ea68720e7da0b28ec912c139c15805af"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1702ac4aed3acab14c0319bb40a19590"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","ee523c8818abda84ff7460613392dd5b"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","2e57d195e04c229e09e0382805becf9f"],["/2021/08/25/Review/清戀/index.html","0a1c03c3793c3e1c50003ca4441cdb40"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","f6de21c3666432559372160fe4fc5e08"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f0ad260e38ad2ef8f8f16d02891c9419"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6df5519324779488a24beead6bc28c27"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","21c64a989e706172981eb7dc758f4360"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c073315f0a758fcb83c24051751d8fa8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","fc67c7cdff63a9793922a592cb5fb71d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","237728f80545946a0087672dfe2a1f50"],["/2021/10/16/Review/龍與雀斑公主/index.html","af1ae765338c788495c5274a35195bd9"],["/2021/10/19/Review/孤狼不想開後宮/index.html","cb5f34cd6d5192ccbb7262af6bc54222"],["/2021/11/13/Review/徹夜之歌/index.html","a842169619d6fb2177efb7229cf5c8f5"],["/2021/11/24/Review/武煉巔峰/index.html","b9333411a7b1c9f2ff14a0faa61e208e"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d738b555d28e1b81194f01d67e64bdb6"],["/2022/01/28/Review/神醫凰后/index.html","a9ec6a9f8ae7433acca1315833643baa"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","3231d0722bff0b28b2feeb1217c77121"],["/2022/02/13/Review/夏日幽靈/index.html","267a6a85f6927f796aa3fa28e51e4c4e"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e6de4f44519636c0fbb4488590552b8f"],["/2022/02/26/Review/賽馬娘/index.html","0f610e9f09f998c1446204f4146eb6d7"],["/2022/02/27/Review/大欺詐師/index.html","83f04610dc6c0e8f85598f54a26009fa"],["/2022/02/28/Review/前輩有夠煩/index.html","ad235de3c754c0dfe4f98650eaf210b4"],["/2022/02/28/Review/碧藍之海/index.html","8b1b67288c0b829854f8a3e1cf078acd"],["/2022/03/05/Review/落第騎士英雄譚/index.html","3aaddfcb6164f253b24cf663d6ee0650"],["/2022/03/06/Review/Another/index.html","d3726821824dd15eb0e1b7c65264f2d4"],["/2022/03/06/Review/入間同學入魔了/index.html","59cc23ac1420a741c06d180284bd9f88"],["/2022/03/18/Review/再見宣言/index.html","4eae081a62230c9c34d0b794638153a6"],["/2022/03/23/Review/生若冬花的妳/index.html","b8cfa776170137a8999a0b5102567496"],["/2022/03/25/Review/天之弱/index.html","937d1bcdb08514c0185d0f17d4a944d4"],["/2022/03/31/Review/滅了天道之後轉生/index.html","12c87e8815c5e78b1636296d2697692d"],["/2022/04/30/Review/泡泡/index.html","1f9842d349718f41a47ad9449a070121"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","5c7bab0a27a6e7ee570f10f23eff3e48"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","3bdd83018db015956e08f0c1ffcef996"],["/2022/06/13/Review/偵探已經，死了/index.html","59222f9c30694e8daee21671e6722600"],["/2022/06/14/Review/黑色子彈/index.html","1a71a454b4335ed1a6391903ceba2adb"],["/2022/06/15/Review/黑白來看守所/index.html","6ccd8d2555d05cd40be1616e6f7587ef"],["/2022/06/16/Review/虛構推理/index.html","16d13785d109e995cc61e4b754e9825b"],["/2022/06/17/Review/戀愛與謊言/index.html","1483f309c388e1da06ac3b5e464571e6"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","b98d13040cd9a187cf95e77849e16fc8"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a1ac8ad5c8a951f60d11681259494d0c"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","30126ded142707721c716b6313189703"],["/2022/07/03/Review/Hello World/index.html","0f57dbaf6457faee143d17c4b6b91c49"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1fb6573adaf8edd1f7964c36a31f1098"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","c16e886d0f75d41a0611d36afd93d673"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","ce7c79bd4ae44cd1bde43533ff843d20"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","bcfb89744ce48a14eb283b47fa247568"],["/2022/07/16/Japanese/動詞分類/index.html","399208440cead3b10363802765d1c22f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","b5820a1a6bcd8243628fa8b8fda72e83"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","fd19a60755d5b45c6e96c9b24791df1c"],["/2022/07/17/Japanese/音便/index.html","c1f625037b5291c53c66e8dab1d8f4f6"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d09cb56c93f539dfced6268f477942be"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4495c7863098436c6b63616628c89c94"],["/2022/07/26/Japanese/助詞用法整理2/index.html","4057f976fd95477de3f893795f9fd9fb"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","1307da87793ee139d7c6c1a0afe851a4"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","08b6caf0490694fa9773a127c97cf3d9"],["/2022/07/30/Japanese/疑問詞/index.html","c933167e0711b319c6ab90994a1bd078"],["/2022/07/31/Japanese/助詞用法整理3/index.html","0989a778ae2c7dad1cf01e86c6a0c9b7"],["/2022/08/02/Japanese/副詞整理/index.html","d7be66d46d6d3d4f551ea67d859412af"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","584b10f5ace5ec1e47fea0f0c0dd09a0"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","6e9bd886be1b810868648714bc07fd78"],["/2022/11/22/Review/組長女兒與保姆/index.html","e672607d1ddcf14e6730532729691232"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","356614162d53d6713e6cb715e02afdc8"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","9bfe3bd016b6afb7178f68c7d916f548"],["/404.html","df34fca2a3e9619c0c26c7dd13306996"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b37587d947ed8d4001d556886985f42e"],["/archives/2019/11/index.html","3271df522535844c94c5c034efc87434"],["/archives/2019/12/index.html","d35bd678253d8151acf162d00ecea184"],["/archives/2019/index.html","427cc2386082506197b3d0d9761c3352"],["/archives/2020/01/index.html","127a2f0525e6b89a0b6579b4dfee9d19"],["/archives/2020/02/index.html","560c67d3f31b70fa75e13347b5e2b3ca"],["/archives/2020/03/index.html","99d1979c1f4f6961f6097a8dbea9773d"],["/archives/2020/04/index.html","91275b94b3cad0ab2963413e619bfcd2"],["/archives/2020/05/index.html","90ef8e44eabd895fe25d2ad9ac632438"],["/archives/2020/07/index.html","5578478ba56a59bc97ec9be8e0ae7069"],["/archives/2020/08/index.html","454ae5f5e4ea4178e5b35a235ad37042"],["/archives/2020/09/index.html","61bca11e8a577a259c866a176cb39145"],["/archives/2020/10/index.html","d16ff795ade664929d2eeeb1c1ff4225"],["/archives/2020/11/index.html","468d06bfc869680069c1490c0cff136a"],["/archives/2020/12/index.html","c0ec155e70803d1a6febd51f525c1771"],["/archives/2020/index.html","165ac92de51897589e6d8425f232dfc0"],["/archives/2020/page/2/index.html","49771dd328eb391dd4362d129cf7f067"],["/archives/2020/page/3/index.html","2b1488201122dafce033b4db3f8d8d07"],["/archives/2021/04/index.html","2d5c05793111c82a535a386296f843f6"],["/archives/2021/05/index.html","222acac60e552eaa684b15ddb9a50ef7"],["/archives/2021/06/index.html","f10b2043d97d6f5eca9bfee2d7f767d6"],["/archives/2021/06/page/2/index.html","5ba4d8ff079c05d8e275e37b8b962d57"],["/archives/2021/07/index.html","5d6bcf94f4ba7f0f747c6fab43cf25af"],["/archives/2021/07/page/2/index.html","ca0af52e89907042a4d12f1dcdb46c24"],["/archives/2021/07/page/3/index.html","b0e508b8b642c932b918d574d7befb34"],["/archives/2021/08/index.html","8a2f3eed6d34fc7c91dfa61e13dcbc10"],["/archives/2021/09/index.html","deba009b72d0bd5dbaa1f6fab39c3d03"],["/archives/2021/10/index.html","eceeedbe632bdd975bd5f8e83687f053"],["/archives/2021/11/index.html","c4ee23fa1318680a8d810c59301dab8e"],["/archives/2021/12/index.html","135bfb0815367aea36c9d6fe8f026d4e"],["/archives/2021/index.html","071b90c535a7f525b86f9d5e1c69e240"],["/archives/2021/page/2/index.html","fd88607910a3dbb03d2bc8ec456a68d0"],["/archives/2021/page/3/index.html","bdcd546d2a76b97842a7914ee097ee46"],["/archives/2021/page/4/index.html","83d5ffd85aa3982b3143ec0ac0682f71"],["/archives/2021/page/5/index.html","c3b86d1b1cd24bd0ee3605d0032d58cb"],["/archives/2021/page/6/index.html","7d7c42650f98b241ade39c70426f2030"],["/archives/2021/page/7/index.html","76885a14f4e1e6c438335c4e91aedbfd"],["/archives/2022/01/index.html","c4267c072334c3cea813b8d6782c0184"],["/archives/2022/02/index.html","f4ce63533e92dbf870740ea1a6e17431"],["/archives/2022/03/index.html","35760d6e34307504073d36e63199128a"],["/archives/2022/04/index.html","bfd50750b45a01a44ecfec58442f315a"],["/archives/2022/05/index.html","b639234a12483068c240a6b8f964c2fc"],["/archives/2022/06/index.html","77da6f7c99691233329a539c7a50d594"],["/archives/2022/07/index.html","8b3825b23fb4ebe99d371f6c96262f02"],["/archives/2022/07/page/2/index.html","18e690e2e1ca9b1bfdf9ec50bd08e00c"],["/archives/2022/08/index.html","8ba41f0fc76e3baeb752ba5d7b9049e2"],["/archives/2022/11/index.html","f50a0eba45cecebd49152cf9f5dcab44"],["/archives/2022/index.html","99d8cde7f1fef73f6524d3e65225b7b1"],["/archives/2022/page/2/index.html","50deb95f96372a7b06b0a88d681f7159"],["/archives/2022/page/3/index.html","2b7350bd1819cbd1b0ac583d70dfbcc4"],["/archives/2022/page/4/index.html","673d921f974c2a5365f666f0b290a487"],["/archives/2022/page/5/index.html","b8d3d5f2ff173dad22eeaa29da7112dc"],["/archives/index.html","a0ed3e1c7ecc6e210b5dfcbfcb9b961f"],["/archives/page/10/index.html","3d9aca428ec02ce18ceff0a543930636"],["/archives/page/11/index.html","9675320080f3192824916a5a6c62f68a"],["/archives/page/12/index.html","c80af0b034db3d86593f7fd2c1fabd48"],["/archives/page/13/index.html","b8cf1b1609ee8e2932e5d2a66239eae9"],["/archives/page/14/index.html","629493cdb1d3797fb0760bfbf664c441"],["/archives/page/2/index.html","b1d66af2c5f314bba763b40f02faec5d"],["/archives/page/3/index.html","8e1b81f02beb7ced297f423b88468257"],["/archives/page/4/index.html","002d9e83cb36c82ad741ffceeeda2f76"],["/archives/page/5/index.html","06e9904ecde6ee2d29b0d7f4b2d7319d"],["/archives/page/6/index.html","64058c23a63c1e836f61d4a53b4616af"],["/archives/page/7/index.html","1aa3022a7b6c06ea6372e2063d54a6e5"],["/archives/page/8/index.html","e9bfda15184a27491ad3fba84ea75594"],["/archives/page/9/index.html","190c7397e15b98f1e40cded67253ab6a"],["/categories/Algorithm/index.html","38b55d5487d013f685d4523f5697918d"],["/categories/Review/index.html","0a7801dc1c40e0d280ce7018992eddad"],["/categories/Review/page/10/index.html","c89a38c71baf9db495ba9240309db528"],["/categories/Review/page/11/index.html","1b2bbc3c11c6ab8d74c3a45f7f03d8b0"],["/categories/Review/page/12/index.html","ba5ed7e5e455d5c26223f5e37812f4a1"],["/categories/Review/page/13/index.html","e3ef26d75f19790d3745308b18ad0753"],["/categories/Review/page/2/index.html","9f2c58db286ef0b9916dd07a1a185547"],["/categories/Review/page/3/index.html","c9ddebe144ab0443c471cf78bf4afa3d"],["/categories/Review/page/4/index.html","0f9d15bb0ec2e8a54dfe256e6b0f3050"],["/categories/Review/page/5/index.html","581db38886c566cf0ed67cb12d30a13d"],["/categories/Review/page/6/index.html","6a46cdecc6aa150ad47d66ce9a9d2727"],["/categories/Review/page/7/index.html","9a3f5d7f86b64db18105c8697b7874bf"],["/categories/Review/page/8/index.html","49244e35b4c237720c301f7178242e47"],["/categories/Review/page/9/index.html","f78902825ead9344a89688aea931391a"],["/categories/index.html","b09e0492827d5131360bb9004fa07c6b"],["/categories/日本語/index.html","a4ac50a9d2e5b45ee4480e985caef9c2"],["/categories/日本語/page/2/index.html","9d6674d8ed4847ef491ed7529cf57ec7"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e9463ab9c89cd28ab57842fbd87b33e6"],["/js/custom.js","dbf68cba164126174a50778457d27f56"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e4f6cf6c415837642b7f8c26f2505ac0"],["/page/10/index.html","33759b7ee70454ff807858155ef67680"],["/page/11/index.html","f607f5db8f85685fa5b6f807217328f6"],["/page/12/index.html","6831b0f127185804407f3075ab720ba8"],["/page/13/index.html","3071b91cfdfb59ec6dd2cab1fd620ccf"],["/page/14/index.html","4dda6d9c770fe557af35f9ac4eb1b512"],["/page/2/index.html","9339926a83a0db2028793e92d05587df"],["/page/3/index.html","27af2a503d0dc499118cc3bf4aaba2d6"],["/page/4/index.html","af049ba6e05a4fb35e080362e7db2776"],["/page/5/index.html","2303a7d5255fa5e24903c3e656588247"],["/page/6/index.html","47017b731a475c843d9774e15bf7c14b"],["/page/7/index.html","d5093ce3fafeca3cf213d5d0ce1afe56"],["/page/8/index.html","6a6d0f673d0fc8139caaed4f7001410e"],["/page/9/index.html","51cfac686d1c4871dc9c7e0c29b1ac5b"],["/sw-register.js","1ffa85f12850903a17a3812e7cb6aa89"],["/tags/10分作品/index.html","101554953876f9cf33d8c6046677c2ea"],["/tags/3分作品/index.html","5d4d2ac7831c71c1c0c49e51905fdb58"],["/tags/4分作品/index.html","06d9160eb1c891910266dc2b7c9dece9"],["/tags/5分作品/index.html","4a5ff4fe9df9ff1278a5c79d0f255700"],["/tags/6分作品/index.html","4b198ded2ecf01cdf242f1cbb90e3dc3"],["/tags/6分作品/page/2/index.html","83479c52cc544db6013a100fe94a6de6"],["/tags/6分作品/page/3/index.html","86c8e0b4d29833c4a8049604455d6b55"],["/tags/7分作品/index.html","f7ae18686089c5378beb6cb5a453dd50"],["/tags/7分作品/page/2/index.html","b2b4ab0f5e19ff824ca9d1a526252df5"],["/tags/7分作品/page/3/index.html","f12f0a29324205450ba8b2956b4bf99c"],["/tags/7分作品/page/4/index.html","eda0efae348d71c8cf9b5beddb9f97a9"],["/tags/8分作品/index.html","c9570c03b5927d402762c3021d853558"],["/tags/8分作品/page/2/index.html","e0dabe61ac5d8be0c0966829893d192a"],["/tags/8分作品/page/3/index.html","d9a519311b20131dcad5f4e9cd175043"],["/tags/8分作品/page/4/index.html","2124b66a1e2e57ac0d8e74dba609f950"],["/tags/8分作品/page/5/index.html","4f1cc24cb2b92b0d798e1c0203f0abe5"],["/tags/9分作品/index.html","f647f1b67e8748d849dba698bd07be7f"],["/tags/index.html","e395e3d210a54ddd06117b1acd6cdf1a"],["/tags/アボガド６/index.html","6d3bea07fe13cb39041fd03bea6a0431"],["/tags/三秋縋/index.html","e3adb32367e7d5ac0961a330f1ac5779"],["/tags/二宮敦人/index.html","a623070e1ed160f1f0e60f43e3246bea"],["/tags/住野夜/index.html","944e503391020521d985867452d6e3ea"],["/tags/佐野徹夜/index.html","dbeda2049074920dcb5f104aecd81cba"],["/tags/動畫/index.html","087913ba516f8a0a4d9c37887042c52e"],["/tags/動畫/page/2/index.html","7770d30e864dd1f4f13f9ced661c7f63"],["/tags/動畫/page/3/index.html","6893290b54d9e2723468505a9d50d9cf"],["/tags/動畫/page/4/index.html","fbd353382c7ac719bb2e7db631c90bd8"],["/tags/啞鳴/index.html","adad8a92323fc347e1fb360cae1c06ec"],["/tags/天澤夏月/index.html","8f15935eea86e3760b82f0404c09073b"],["/tags/學習/index.html","114e22546b87e89ac73243547d1e79a8"],["/tags/學習/page/2/index.html","f3e578ed373ee517ec677fde24994116"],["/tags/宮崎駿/index.html","b6ba113382476d0569ca3a28aa4e5bfd"],["/tags/小說/index.html","01aadcaea3bb1a6421028f721eeaedf7"],["/tags/小說/page/2/index.html","32698f617e73f05db89d3fbf12c3008a"],["/tags/小說/page/3/index.html","5a852c647dfedfbe68422a853c9c7940"],["/tags/小說/page/4/index.html","e598c0cc5cb354f982c93cd120c41813"],["/tags/小說/page/5/index.html","d34e8de1798edbee92894e770cc246b2"],["/tags/小說/page/6/index.html","43a14cc99fdc9fe395d098634a1cd579"],["/tags/小說/page/7/index.html","2afc840e17571a0ac33c7e5dc5dab2e4"],["/tags/志茂文彥/index.html","438f5a60deca75fee85096bd1e6e9aa8"],["/tags/斜線堂有紀/index.html","71987066be76ea844c1f58851546b27c"],["/tags/漫畫/index.html","085f7e7422f9d081921e6b45e2b934db"],["/tags/葦舟ナツ/index.html","2b96f57f45d0403439663713c68a56a2"],["/tags/藤萬留/index.html","d3e55b1ae9cb5f4629733bb6e0b19c36"],["/tags/電影/index.html","699db35294a8e3fbccbc2cad57344ebc"],["/tags/電影/page/2/index.html","229497a875b5960b8a848165a5eb8071"]];
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
