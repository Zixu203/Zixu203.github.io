/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","4f783d2fff2bd28eb1ea7e64bb01d459"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","6596bdbefcc5d27dbe8af5c582311d53"],["/2019/12/25/Review/無法計算的青春/index.html","36d1d0a2f1cf57fcfe6d0a950a6be209"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","b71f6acf61aafa4bd861e4023173dd47"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","d10175578cd071c3c7bdf7388d15aa1b"],["/2020/01/19/Review/下雨天，不上學/index.html","39ad0a41385151d3068ce8cc9d990392"],["/2020/01/26/Review/三日間的幸福/index.html","1600e3327d889ec56637504306bb67c4"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","37aaa132eff9c9a9f585e268b125dbb8"],["/2020/02/09/Review/青春期超感應/index.html","94cfebce4060581b6773e684ea60a1fb"],["/2020/02/15/Review/又做了，相同的夢/index.html","5ef8cad329b4564ac6710540807b8c35"],["/2020/02/22/Review/回憶當鋪/index.html","2c842c163e42f9afb0a400ae797a338c"],["/2020/03/22/Review/不適合自殺的季節/index.html","d9c2dd7c5b57bf803687dabd23511ea2"],["/2020/04/26/Review/我們都無法成為大人/index.html","f147115a84b4252b97a2a20f237c09fc"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","37c17aa1893057083658d834f4cbdf82"],["/2020/05/17/Review/人間失格/index.html","ed057eb3682fe1f183d40c18c426ed90"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","b8d35bb1be7d8f71b29791e85f1199ab"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","9d2151855a4c39bcaf13761b91f292c8"],["/2020/08/01/Review/銀河鐵道之夜/index.html","d648fc4a724fcc93d669ba79cd8513e9"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","143aba28d375deb20c47fe6c1c9316c4"],["/2020/08/16/Review/15歲的恐怖分子/index.html","0f1b4b9227e21822ff8d0c02a4ca2eed"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","ca3aca1079c6e26f8fdf47133f92ad8e"],["/2020/09/13/Review/羅生門/index.html","ba8e5b96c334e84df7244f525451b6ea"],["/2020/09/20/Review/闇夜的怪物/index.html","752badaf8560dac1dddcddaca538efd3"],["/2020/09/27/Review/14歲，明日的課表/index.html","330c1218ca1ce72f4b44e418184232ba"],["/2020/10/04/Review/致十年後的你/index.html","98b73d9d7c80dccabc4e09f7fb87d948"],["/2020/11/08/Review/滅絕之園/index.html","3c939505ed1ba47c8c39a74d7cdebfa9"],["/2020/11/15/Review/將愛拒於門外/index.html","59388021796a028bd55be2bbaf79f7d4"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","d992d351832a1c6b3f1951efff949199"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","41f0ab60d035fb91d1ed43f880b2e7be"],["/2021/04/22/Review/道印/index.html","04e4586e10ba6d9c786e9c384f8981b1"],["/2021/05/03/Review/戀入膏肓/index.html","41c2f57d99f9e3921fb3e94755bb5882"],["/2021/05/10/Review/Dice/index.html","a6ffb9098585c9192662e1df0bee06ff"],["/2021/05/15/Review/魔女之旅/index.html","22b0a7989862017d2abdf7963befefe3"],["/2021/05/28/Review/戀愛寄生蟲/index.html","fa55434a31aca8ad5bab5c1202d0ff4a"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","35945ff0c4202b90e812bcdab4a7c5b9"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","03e5116c2c9f9f1fc35b564558badf9b"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","f765fa8752669fd6590470af564b2db0"],["/2021/06/05/Review/流浪的月/index.html","dcedc4ccddfe3fa254f2a73562a0d2b5"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1065f72d32cebbc0a9fc9b8a3b8c8e78"],["/2021/06/13/Review/第一人稱單數/index.html","2f2a1063bb9d92fc4f8f62d35b96d994"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","dff53fd68962a72e13ba125fde52a90d"],["/2021/06/16/Review/願你幸福/index.html","25bd58bf34b754c83cd95fe4761901a4"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","5114f0f14b5039282713100bef97620e"],["/2021/06/21/Review/神隱少女/index.html","dad9b19d75211c1af164a8116f21c043"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","faa6ec84002292c928f2b0732dfc2548"],["/2021/06/23/Review/天空之城/index.html","5a711ed829f47e02b9324aec89ad993e"],["/2021/06/24/Review/魔女宅急便/index.html","c93ae1623aa1bc577ad1b85dabde6b4f"],["/2021/06/25/Review/借物少女艾利緹/index.html","431d34136aaaa053bf78462790cae30b"],["/2021/06/26/Review/魔法公主/index.html","9377b6b51e3afea536f8ba441da974a8"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","4b1c323457740a9129d6ed31d9b53229"],["/2021/07/04/Review/飛雪與劍/index.html","94aa7ff0ea1026681943edab91782ab4"],["/2021/07/09/Review/地球防衛少年/index.html","15818472ab8ffa0bb7f28c7591e33e68"],["/2021/07/12/Review/Angel Beats!/index.html","e7d51b488b725627d0436d6d34d6a15f"],["/2021/07/13/Review/Clannad/index.html","459382294e6b7ae734e1b745f1f2450d"],["/2021/07/15/Review/AIR/index.html","b14dd40d917929847b114d793f1ffd10"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","aeca613f69fa6166069ad942ccab0afa"],["/2021/07/15/Review/螢火之森/index.html","d17fb3db546633acb2f9320782b95781"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","f84bc2cc660ff4554ba1dbdc33e048e4"],["/2021/07/17/Review/奇蛋物語/index.html","0172ed909ccad14c43961263134d311e"],["/2021/07/18/Review/Vivy/index.html","150828fbe1659beac793c79cc0f48e85"],["/2021/07/18/Review/請妳消失吧/index.html","7d1364df3c192238da877882b20e2758"],["/2021/07/19/Review/漣漪的夜晚/index.html","f7fbbb93d9392a5a5b4654aaefa8071c"],["/2021/07/20/Review/月色真美/index.html","b80bf5ee239b758a20d90eb03c09a555"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","dc234768f88ed8a7ecf30102910d778e"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","8c2d119ee1eb9a47df8f06f91edce07d"],["/2021/07/22/Review/罪惡王冠/index.html","73e917af7aa2ffe350b6aa588b445aeb"],["/2021/07/23/Review/弱角友崎同學/index.html","0852fea4b1137fafc040cb52a327a229"],["/2021/07/23/Review/惡之教程/index.html","05c7e77e1d44578df7516babe6e581c6"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","937c0f3c59068e1e4de5dfbbecd9eab4"],["/2021/07/25/Review/魔王勇者/index.html","5c64ef187340c5cf874a65f2ef179e0c"],["/2021/07/27/Review/一年A班的怪物/index.html","8ee1c50a2ba48ef200a0a820522a9916"],["/2021/07/27/Review/奇巧計程車/index.html","cae19d66d7ee05a4ac2274f68e9b8630"],["/2021/07/27/Review/專情的碧池學妹/index.html","53c80c64cb32ab7ffca7719bba776174"],["/2021/07/29/Review/只有我不存在的城市/index.html","4cf14d368a7ee8f4f2ce7f440dbd5a87"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","7435744306e19990d8cb2f0dbcfb8377"],["/2021/07/30/Review/可塑性記憶/index.html","e282c7736674b08ae0b3c4a7346e24e3"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","085ff5e3e313f362592637e169d0ad18"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","f01c2c882a7e55cba02432b5f6003be5"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","2264c361e7aa6983322816551b2ea905"],["/2021/08/25/Review/清戀/index.html","2d696566bcfdc475f20d6614ca1e83ad"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","32f9f72d8c5b04f1c3b09844389c732b"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","2ad9b4bdac83a391586e6f2fe00fccb9"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","0528a913e9cf4643e4cc3fbacf14ebd9"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","68a95d2ef105d1d282edffe45bfa97c1"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","40ab650b4d072d75f1cc81370009f4c8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","f3f6acc9233e7d080ad097c0e4d62fe6"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","68ce515fd9d52422d0ec1be20f65001a"],["/2021/10/16/Review/龍與雀斑公主/index.html","bf931f2b7aadb353688fc289392b420f"],["/2021/10/19/Review/孤狼不想開後宮/index.html","ccec8df2f8807ad2f0636db0fee2da1c"],["/2021/11/13/Review/徹夜之歌/index.html","80257306109756bfe36541a565c9e779"],["/2021/11/24/Review/武煉巔峰/index.html","30c9766b89800a25c99d39fde9e7dd7d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","bd1a35bbf3031ad15882688d54bc9b6b"],["/2022/01/28/Review/神醫凰后/index.html","ca9a4a38f60750fbaf4b7d10818e2876"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","260a0fc95d487547d3dedae31f7b37a9"],["/2022/02/13/Review/夏日幽靈/index.html","cadafbb870c97faba165c2ffda3f771f"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","2d6340f7cb0e3b5a2de81516b5eb25e1"],["/2022/02/26/Review/賽馬娘/index.html","5da6224ad875e25f044d6f07a4891be2"],["/2022/02/27/Review/大欺詐師/index.html","aacfb350610e5539ad015115c90a55f2"],["/2022/02/28/Review/前輩有夠煩/index.html","b88bf1d02d5d1bfec150e4101788226c"],["/2022/02/28/Review/碧藍之海/index.html","b9dd30ee990425cf03b72cdaaba42724"],["/2022/03/05/Review/落第騎士英雄譚/index.html","6420cbd917e11b4c5bc610b605dd08d9"],["/2022/03/06/Review/Another/index.html","cacbd5939c1bcf8cbfba4deda3d9f202"],["/2022/03/06/Review/入間同學入魔了/index.html","1ae1cf32dce132f25f351ac30ce1afc7"],["/2022/03/18/Review/再見宣言/index.html","bc54bd5cbe906c0a6916e18cedbd3a38"],["/2022/03/23/Review/生若冬花的妳/index.html","add565a1811a3d6f4163b56fdeac5ae1"],["/2022/03/25/Review/天之弱/index.html","5fa6810a2af580a016c67667218a8bd4"],["/2022/03/31/Review/滅了天道之後轉生/index.html","f579d838743fda14a2889e68614d2e6a"],["/2022/04/30/Review/泡泡/index.html","98e81c44faca3de09650c34a7ec1fafb"],["/2022/05/04/Programming/Dynamic Programming/index.html","8d32f770a8a9b1707b8b447c810f527a"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","bdb108f72b83851ac61586e0198f9770"],["/2022/06/13/Review/偵探已經，死了/index.html","d19add5332d7b38f6b61b0815e17800a"],["/2022/06/14/Review/黑色子彈/index.html","b81c0736206516f375c6f4d89e30134e"],["/2022/06/15/Review/黑白來看守所/index.html","0dedccb40b73993121fe036452edb2c2"],["/2022/06/16/Review/虛構推理/index.html","c0a3a22cbbea09e30569c8a8242d68c5"],["/2022/06/17/Review/戀愛與謊言/index.html","a7112a6293581b4a9b47adf5818e8013"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","887d01697404b88ec4ba3115ad41000a"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","866603b2e81783ae587b00ac56046a33"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","1a496f06a404da4941539bb85015a426"],["/2022/07/03/Review/Hello World/index.html","893b1752b177721c78cd56790e39cee7"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","68bacf2e01ab2a68f45c529350a3996a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","0be37a45e9a0d93476453d7975377493"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","52ee629f635fd0774d4d41fec50d3f3a"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","41b4197ce5770a0c9bafc131b9e04641"],["/2022/07/16/Japanese/動詞分類/index.html","95a2734c19a6ae493448d2f5a766bc9b"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","5af8357b355336b34ad68f3ab6dd51c4"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","78b84956eac32e82ca6f3ec59a59791e"],["/2022/07/17/Japanese/音便/index.html","169ad12e0a500c72956c3f646776d47b"],["/2022/07/18/Japanese/動詞 時態變化/index.html","7838220ef1b6c09492e7b9ffd305b511"],["/2022/07/19/Japanese/助詞用法整理1/index.html","752cb32b6f824994cc1574ead8c29e8d"],["/2022/07/26/Japanese/助詞用法整理2/index.html","43de2f4b8317b5a29d539a2f153a1c78"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","913daf45601d62e23c3a44b634c9440b"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","c566924ea7249dbe95cbfc14b4458536"],["/2022/07/30/Japanese/疑問詞/index.html","7435674b3a0f4753ddb9fb39e0c13822"],["/2022/07/31/Japanese/助詞用法整理3/index.html","66540f517e715ed02ae322dbce0be320"],["/2022/08/02/Japanese/副詞整理/index.html","58c34f0c87c62620f2063e900a955ed5"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","23fb5c1902e09b3e26d5856350684796"],["/2022/11/04/Programming/Data Structure/index.html","cc674ca60c351899cee372c2129b4a02"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","d463404328b7bd6c36b960e1d7eff5d0"],["/2022/11/22/Review/組長女兒與保姆/index.html","7fd3ff68ca78b8b4084e0b7e7e41bcb7"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","10f4795f236f1e766004771e8df76eb4"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","56721be26d1c9bcc3b46a2f6af86fd61"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","c17f2718f886374cbdd9916a34fdbfaa"],["/404.html","b3fcff9e710927bac01340cb073ed6ed"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","b0a6877d102a3ae4d64aada1ea33e802"],["/archives/2019/11/index.html","adc4c744836cc72450345557de71101b"],["/archives/2019/12/index.html","4e7e54e30661cae1a575de925497dac3"],["/archives/2019/index.html","fd10e9f022910793f2d67c980bbc19b4"],["/archives/2020/01/index.html","2f888ad816af55b3ae9e5d47c75250dd"],["/archives/2020/02/index.html","efafc2c52fae3dcf9658c7a180a5a4dc"],["/archives/2020/03/index.html","2514f4ea8b8d72ae85a4b317e6e84fce"],["/archives/2020/04/index.html","96a6160e30eab4661ac9e3e33ffed712"],["/archives/2020/05/index.html","a8609b9826f0b4150e612bfe5e12aa27"],["/archives/2020/07/index.html","988f7e65f1fa4de89ba113b1c4aad3f1"],["/archives/2020/08/index.html","a11bf6f0118365983b1fcf1f53ac62a4"],["/archives/2020/09/index.html","4a99b07fe90a3add1746705cdcca812d"],["/archives/2020/10/index.html","9f8a9da0a837022e0aab083463a97919"],["/archives/2020/11/index.html","97d70d9281962206332e7455e79f7005"],["/archives/2020/12/index.html","dbca1cf1e58c38c23022cb1f89fc7407"],["/archives/2020/index.html","e96d066dd015c3a8523b4a0f7a7b43e2"],["/archives/2020/page/2/index.html","b3c41a8f6756b19030bf397e13833399"],["/archives/2020/page/3/index.html","4c71e14ffdfbe17a6416f32021126caa"],["/archives/2021/04/index.html","c64437d52b5433666b2db4a4043204e6"],["/archives/2021/05/index.html","f9ab1dc8e17287f765dc494dd2f5f5fc"],["/archives/2021/06/index.html","9359fbef440d160ea61e7503d6ffa37c"],["/archives/2021/06/page/2/index.html","b15e018979870401ff649a504d5c39bd"],["/archives/2021/07/index.html","a71cdc69d9635eb6ac8112b612beb8d6"],["/archives/2021/07/page/2/index.html","98ea1d3ed79d10b3027275d43a84251b"],["/archives/2021/07/page/3/index.html","b14ab1dc611f0c44e19d996bec08a24d"],["/archives/2021/08/index.html","c880bcb3df39cb7e8430fb236f80a5a3"],["/archives/2021/09/index.html","77e23ff77911abc9675a0eecbccc9457"],["/archives/2021/10/index.html","a386a173d9bd8a10e0073561b1161126"],["/archives/2021/11/index.html","1dbcc5219e932c6c10bd2671ef58e141"],["/archives/2021/12/index.html","047761239c92f0621c08fa98ce4e3eff"],["/archives/2021/index.html","f9a3f013c84dced08fd4b921b8965b95"],["/archives/2021/page/2/index.html","45beb697fa2af785e9fca7c16ef46240"],["/archives/2021/page/3/index.html","0c6505bd594bf42ddacae6bf4b05cdc2"],["/archives/2021/page/4/index.html","bb74aee7b1787f16b572a23cff96f509"],["/archives/2021/page/5/index.html","da28157e76504d4466bcb26d56644764"],["/archives/2021/page/6/index.html","243859425894bef87c3cb4eadec2c77a"],["/archives/2021/page/7/index.html","3c641ff718c4085f376ca632b82154f9"],["/archives/2022/01/index.html","2cf456fbfa78ae5f323fbca335328ca1"],["/archives/2022/02/index.html","17f08f350e52c1086b77d3f2573d8ef9"],["/archives/2022/03/index.html","ceafac6953327581d7d4ccce59e359c3"],["/archives/2022/04/index.html","e59ab4d38ccfcff0c796d94866e3979a"],["/archives/2022/05/index.html","abd5dbb442bde344b3c6c39a0816e200"],["/archives/2022/06/index.html","0a0ed3f0e8b320ca5b733058db1e5db7"],["/archives/2022/07/index.html","2da5eb18f2e22581664461e3a9509b74"],["/archives/2022/07/page/2/index.html","dbbd72a4f25addc6212ebf3b506db38f"],["/archives/2022/08/index.html","8b746fa7345f0c617e0033b8b3c459ab"],["/archives/2022/11/index.html","ba43a3195ea12b77b11723c91366c766"],["/archives/2022/12/index.html","302f40610faf31bf1b2bd2827faf9392"],["/archives/2022/index.html","e325a3e20c1f84da9a642ecf9cef1df0"],["/archives/2022/page/2/index.html","8d26a30c5ffd76f8d420a2ab76154815"],["/archives/2022/page/3/index.html","451140bc9ff7bb14912387c6c3d029b8"],["/archives/2022/page/4/index.html","482e392706a1b4c1b564682f827e1e7f"],["/archives/2022/page/5/index.html","a14001569f8f3e4790f2f664b3bb5bff"],["/archives/index.html","671467b34b0ead6751d9febe9b65c96a"],["/archives/page/10/index.html","d8317b7fd087a8f504003fde100c289c"],["/archives/page/11/index.html","844f7d811b7578f0bcd401e08d5fcc72"],["/archives/page/12/index.html","0359d2b1cc5b0dbf509ffd2f5669428d"],["/archives/page/13/index.html","a7a56692853233830927a752c6d29a17"],["/archives/page/14/index.html","2ddd8302486be615e600d7bbea2c4d2d"],["/archives/page/15/index.html","0f4f124be106c636d6fe7bf3d3bfaca5"],["/archives/page/2/index.html","7cf1e542ea0f03d9e2015708dfde147e"],["/archives/page/3/index.html","b958dbd83613f4e34fe19c17b3b93145"],["/archives/page/4/index.html","1fd150898b52a2ba479578f5d810f63d"],["/archives/page/5/index.html","41752674c2bbf88fc726afceb7c8abd1"],["/archives/page/6/index.html","4c88a4064c0e458f461958af85d15a5b"],["/archives/page/7/index.html","f1c4eadf796fbe95a1330f986ed1a94e"],["/archives/page/8/index.html","80cd2dea57216af89befb331c92b19da"],["/archives/page/9/index.html","5a7e8c9053ef30ff5a37877a52bb5762"],["/categories/Programming/index.html","1dfd5583512b428fc51c87035efc29ea"],["/categories/Review/index.html","06fc5c5e0b35f91e31d3d47d23d97158"],["/categories/Review/page/10/index.html","c4e400b70442a5bd39226e96051a857a"],["/categories/Review/page/11/index.html","4e32d977abeaccb1cdae686085fbc6f3"],["/categories/Review/page/12/index.html","a50cdfe5117079f37b6770aec45aaa3f"],["/categories/Review/page/13/index.html","2f943917785b74a4d3db1c6c1f560637"],["/categories/Review/page/2/index.html","cc18496c25296bd7da4ab11091499d31"],["/categories/Review/page/3/index.html","2dc7e4bf979caca3aa7ded19be5b3a8a"],["/categories/Review/page/4/index.html","8a8a4944e53dd20193bf7ff76e70209a"],["/categories/Review/page/5/index.html","60313a194c131cf41243a49813d46bf9"],["/categories/Review/page/6/index.html","6950ee4adff6bdae79f31feef03c8442"],["/categories/Review/page/7/index.html","826f5bc1b50a3709d5840d519886818e"],["/categories/Review/page/8/index.html","bbe9ef98b960d6e5d14d15de591d0c9c"],["/categories/Review/page/9/index.html","a2d0d7b10c051fce2fd83aa63ec724ac"],["/categories/index.html","6bae55a0aed9ad5efaf9cd47246687a2"],["/categories/日本語/index.html","787d8e157aa1448f45979ae4bc72b625"],["/categories/日本語/page/2/index.html","1089ee0300cd65364f3a2071512ea5c5"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c4582f14c297ed85494b241afa91299e"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","521c782a7220822b4c4b9eed1321a459"],["/page/10/index.html","75c4dbb4ceb918cd8a1077bbb69fe653"],["/page/11/index.html","c90530cac5c9d6496d5fc5b638bb2d76"],["/page/12/index.html","a604d7efe4bec725d51f039e6b2fd612"],["/page/13/index.html","f14dbff366dcce93fed442715cbb68a2"],["/page/14/index.html","9e2a6902e67325519bff564241bab557"],["/page/15/index.html","44a314d24c195d7330b37c25ee8fd7b8"],["/page/2/index.html","864b4efa3f12c380608281deae855b16"],["/page/3/index.html","cb314a2027c4ac0463452e19595171c1"],["/page/4/index.html","615e52e2c2d9320ac9b7bd828f5f5398"],["/page/5/index.html","e2677fbfdce7e06d56466b5861334d5c"],["/page/6/index.html","d0dbb0046e044968f01924956c552132"],["/page/7/index.html","9fb903c8cd5aff2ba2b77e0ebb363c15"],["/page/8/index.html","d1b561548a377d0c1c55b4d135323a8f"],["/page/9/index.html","346e992961b589c15e63627c3e29f13d"],["/sw-register.js","7cc05dff585d10c090feae98a3e6a33f"],["/tags/10分作品/index.html","2ce10083c15145219af3601e19266283"],["/tags/3分作品/index.html","fe1461c64a4438f41e9a1dc0c8019314"],["/tags/4分作品/index.html","b827c7a17a0d593edcddcf959ce7f4b7"],["/tags/5分作品/index.html","bc70be0ccdf54571020a4dd4fdf1093c"],["/tags/6分作品/index.html","ddff44fb9177772757ef26ccd1cf2646"],["/tags/6分作品/page/2/index.html","7a38109d5333d8422e86bfb31dae49bc"],["/tags/6分作品/page/3/index.html","2d7fe21be409d762b4ea8747b98987f9"],["/tags/7分作品/index.html","ea2e3284db5b76a6ec047262fdd1cbe1"],["/tags/7分作品/page/2/index.html","683dd15e922d47ecdeb555ec297fea0c"],["/tags/7分作品/page/3/index.html","56c15693d248d077cb6d40444a58459e"],["/tags/7分作品/page/4/index.html","77d0b5ab858bff3302e5ff7c77fd4d88"],["/tags/8分作品/index.html","d3ef82414b4db9c822382cc7025370b4"],["/tags/8分作品/page/2/index.html","883684ff41c9b7c96706302bba325677"],["/tags/8分作品/page/3/index.html","7836d91b82fc5839400b4dfb7d83f76b"],["/tags/8分作品/page/4/index.html","1b7c66abfa80cb37d981608379dae31a"],["/tags/8分作品/page/5/index.html","cf8dbeb637e362063df57cdd51e76c0f"],["/tags/9分作品/index.html","b76cdee340301323c3d5ace5f2c3161f"],["/tags/N5難度/index.html","44d714f006a5b230142ea6162202c1b9"],["/tags/N5難度/page/2/index.html","4ae28fd190502d50ab2ef98a43e7612b"],["/tags/index.html","720dbf4141ad76dab2e368f603f8d7a1"],["/tags/アボガド６/index.html","139a2c1747f0d9734db675b82faec50b"],["/tags/三秋縋/index.html","df65443cfbeb4aa9f63fdeb8797cf0bd"],["/tags/中國武俠/index.html","55046a6ffa331452463e1bade92297d4"],["/tags/中國言情/index.html","14dc3cdec1a1fed787bdcd8db98c9331"],["/tags/二宮敦人/index.html","de84d5b96e1ccad29e1ceb7226a82650"],["/tags/人性/index.html","22a366021f53a80515799370c74dd23f"],["/tags/人際/index.html","9cdf2a755a7f227a541779aa8c2d7902"],["/tags/住野夜/index.html","fd725d193866b621a62ac05c9cc99082"],["/tags/佐野徹夜/index.html","af9f48ab73fa51c3349a3bb399063a2e"],["/tags/努力/index.html","90fe435bb931fbd6c063b05ea85bfb7e"],["/tags/動畫/index.html","eace310f0f65d4fe9e83ba7ef6026f12"],["/tags/動畫/page/2/index.html","68cb1dfb877957338fb82a93b6bbd459"],["/tags/動畫/page/3/index.html","e811fbb177e9bb995f9226287ea4a09a"],["/tags/動畫/page/4/index.html","40380ed25603b31592e6c1d50ae3fa89"],["/tags/原諒/index.html","93eda436c34890b741f42e08cffda602"],["/tags/反烏托邦/index.html","54f87acfc7c4da0f439dba1819788c32"],["/tags/啞鳴/index.html","14555b6139239d98a31be8f508eb8900"],["/tags/喜劇/index.html","7fc972de4ef6edfdc5807ddc24092561"],["/tags/夢想/index.html","45c7458439151b6bb8dd14fe45e8b4fe"],["/tags/天澤夏月/index.html","543a80507accdaf82c6b947a353b7d73"],["/tags/學習/index.html","bf9528a878542e9d488c4c86324f2c7d"],["/tags/學習/page/2/index.html","8e0d17c7e388bb67912f51ce91d9a2a8"],["/tags/宮崎駿/index.html","cd59e4639a202774b76b1a1c64d161a2"],["/tags/小說/index.html","17346e0d319ec9a34cd9978b1f2d4681"],["/tags/小說/page/2/index.html","70c8d6a89e4582b7d5028c6b547bb7c1"],["/tags/小說/page/3/index.html","ded4bdd9af2787c1083c887a96c21633"],["/tags/小說/page/4/index.html","632beb020e26f7696dadf4b11e45aef4"],["/tags/小說/page/5/index.html","12b29f5226f4319e750b648b384477bd"],["/tags/小說/page/6/index.html","1d4a023b7698ca2290c196b864972cf8"],["/tags/小說/page/7/index.html","dd139c0ad769d8d1ab86b5da6c23e67a"],["/tags/平淡生活/index.html","9972e56daefc60afb3281bba70e92ff3"],["/tags/幸福/index.html","9c4effbc3f21f3287f0b0ac2e3307f91"],["/tags/志茂文彥/index.html","2cb9bed54b815e332c36834cf50f2a0f"],["/tags/愛情/index.html","d566654a58cb5bac5c4830167dd48d7a"],["/tags/愛情/page/2/index.html","dc967b502c4cd2e64cf6cead441cdf36"],["/tags/愛情/page/3/index.html","3115c1226688a848b6f2b2dfc121b081"],["/tags/感動/index.html","9d5e86b21e0d9f8ba02951ca9fe0aa40"],["/tags/懸疑/index.html","94ea0063cd09ad1686dbdb315744cae5"],["/tags/懸疑科幻/index.html","a9549854f8f053a5c9e0acb334b086de"],["/tags/戀愛/index.html","ac55bb358a15f379df548d59cc100f75"],["/tags/成長/index.html","257604a032577eec589b3396b8dfb989"],["/tags/成長/page/2/index.html","4edfd06b13d3feb5ae28c4e41e4f42d3"],["/tags/戰爭/index.html","334d3f14e97ec3f1d2593ac522298468"],["/tags/推理/index.html","277fb3c19a059f9b4e0cc0027b16c5f4"],["/tags/搞笑/index.html","b59122d3c9823da2e1d08f46df3beb0c"],["/tags/救贖/index.html","a00f91f59bc6f26e98fb1fc9387c1683"],["/tags/斜線堂有紀/index.html","48bbf4010845e88f3df2f448f05e741b"],["/tags/日常/index.html","126a22902c9e29c55ff8a2bd1aecbfe0"],["/tags/末日/index.html","b1ba6510a35e7916eba39bef868439b1"],["/tags/校園/index.html","49c7ea8a7b185d5b673e4d15c42ae5ad"],["/tags/武俠/index.html","ddaa6f98c0b7b8e81a4fd7871c6bdcba"],["/tags/武俠言情/index.html","6a73a1a2e1da0f2562733eefbb8db805"],["/tags/漫畫/index.html","2f7e1844ef3c1f2e27d66d58d287b356"],["/tags/生命/index.html","00af79471124b8d31ab889f91d8d6eb5"],["/tags/生命/page/2/index.html","0a3ae2dd5822adca60e36844fb0a51f2"],["/tags/短篇/index.html","243ffb6dec86a52e8182d0455f62c3d5"],["/tags/社會/index.html","db6758b64c07f4a8bd2f4d09fdf440bc"],["/tags/科幻/index.html","69160530604bef601d0983a4b11b89ea"],["/tags/童話/index.html","53cb830d2b130cf051dbfc93a77738a1"],["/tags/競爭/index.html","f8de94865689a44f3a0f8e7925dfb347"],["/tags/自我/index.html","fa1a319cedcaeb37219a39b9bc2ff958"],["/tags/自我認知/index.html","4fecf336d4fed6f7f8777254dc72041d"],["/tags/葦舟ナツ/index.html","5b82829659f9a2090c0e65ccc1dde940"],["/tags/藤萬留/index.html","00d0b5d9f88eaecbc31528f0242eba73"],["/tags/親情/index.html","35ba615843daa0123cc2120823b821e8"],["/tags/雜項/index.html","982cb024d2b130d3f5dc947b8501a919"],["/tags/電影/index.html","54bb3d7b4c503ad532521b3cb81a95cd"],["/tags/電影/page/2/index.html","75f34b032366f74e029af8e99eee8259"],["/tags/霸凌/index.html","0edc7849d95cdce784de8d0a68c10b33"],["/tags/青春/index.html","7e601846ba8a5a1d427634faf6fe983d"]];
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
