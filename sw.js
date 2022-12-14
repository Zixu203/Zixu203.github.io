/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","beca9d5d492d9d13d690fde2dd06586e"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","c46e5fb772d9749de0de69946d03915b"],["/2019/12/25/Review/無法計算的青春/index.html","f7fe941ebfebd099711038178d22c601"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","71ad0a22cb16e24811ad963eef7bf870"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","7c3366a6a8361245a2cfa9bf38ce3a29"],["/2020/01/19/Review/下雨天，不上學/index.html","0c4e2225a3d88eb8e86330f5f4a30ae2"],["/2020/01/26/Review/三日間的幸福/index.html","0de7e46a033e3beed623bdf8926b5bb1"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","07bcb11c5b446562a539d582d1bfba9b"],["/2020/02/09/Review/青春期超感應/index.html","56a552c88c8d07d885034c96cd2a8645"],["/2020/02/15/Review/又做了，相同的夢/index.html","e276d2aa60956e32dbe9c4d1a065d5eb"],["/2020/02/22/Review/回憶當鋪/index.html","a146e19f26e86f53857d20994e5abdd9"],["/2020/03/22/Review/不適合自殺的季節/index.html","3b8db717cba01db8f87d714ac528cfdc"],["/2020/04/26/Review/我們都無法成為大人/index.html","85456d53bfbd66d1265ad9446652d75c"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","4ea6822544c7724d4a453a406fcb7b08"],["/2020/05/17/Review/人間失格/index.html","42bacd38c8fd6611a1ff93d967fee73f"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","e5a0ef79da2444fa94dc81a2a9f305f8"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","599163abf5b39b34be1ac9897231a70f"],["/2020/08/01/Review/銀河鐵道之夜/index.html","27861b23f41c7b59edfe7b8dd446d06f"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","ec390d3df80ab27fe78dbff09f742c2a"],["/2020/08/16/Review/15歲的恐怖分子/index.html","32664b5eabcb4ff9bd86c19be86c1045"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","71fd472cf996254db4ffbf990eb88d0d"],["/2020/09/13/Review/羅生門/index.html","58eb87142b8aab8211830b5d74d925b0"],["/2020/09/20/Review/闇夜的怪物/index.html","dc6b60e41be0546f554f0084fcc2e7e7"],["/2020/09/27/Review/14歲，明日的課表/index.html","6a8dba4447b5542bd08b203e06904f21"],["/2020/10/04/Review/致十年後的你/index.html","fd2bd7bb5c18cbe15a2da9970b093909"],["/2020/11/08/Review/滅絕之園/index.html","182d64ae87b015466b1dc3b6d616af1a"],["/2020/11/15/Review/將愛拒於門外/index.html","3ec3b768d9eb9e59f28829a4405b1e0c"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","aa6fb7b894814c9ba106dcc582b93427"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","8778754d729440fa8a9879c119f9435a"],["/2021/04/22/Review/道印/index.html","4ed8e3626aa8c75c4ae0b43a382c5121"],["/2021/05/03/Review/戀入膏肓/index.html","fbced877bbad9cdb474666263909afdb"],["/2021/05/10/Review/Dice/index.html","688d3093b0cd2a4f8eb56a2b8b48f837"],["/2021/05/15/Review/魔女之旅/index.html","1c52e912f6405215c75bf2507544d757"],["/2021/05/28/Review/戀愛寄生蟲/index.html","fc0b41e9b683a5a3dded269a24beecd2"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","482ac17c4af94ab901d91b69013aedd7"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","e130bc9efc0d52221576aae261e1b32a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","220063f489838804871c2803d519cf8f"],["/2021/06/05/Review/流浪的月/index.html","0bd6a3b939c2debe61e716b1154019b4"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","e57b12d4b87e5692d428fa2996522356"],["/2021/06/13/Review/第一人稱單數/index.html","a3837a948877bee9276c47616ab1f040"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","95af0bb47b499b35cd88a90e4de36ad5"],["/2021/06/16/Review/願你幸福/index.html","716523fa0c6e292c74efe7f5d1cd0657"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","64c79c5b88ebaa8b42a790328a36ece6"],["/2021/06/21/Review/神隱少女/index.html","c5dbe6f1eabd20f0b6928efc73a7e98e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","2e7546b13f7976bf7fd5566d86973030"],["/2021/06/23/Review/天空之城/index.html","4ffbe64496cbb5ad1bbca322d1bfb0e5"],["/2021/06/24/Review/魔女宅急便/index.html","43c119c6d5d27aa03cea8ed7b21d739d"],["/2021/06/25/Review/借物少女艾利緹/index.html","42e35883522551775a88b8b386992a67"],["/2021/06/26/Review/魔法公主/index.html","5d745d3e271b435f4e2321835b7ac4c1"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","2bddca70f895604d3754a0811a432fa6"],["/2021/07/04/Review/飛雪與劍/index.html","6f073bbf88377e29f81a1e0e4ac140c0"],["/2021/07/09/Review/地球防衛少年/index.html","09b3bb73258fb3e0d7a91dc1e64e7543"],["/2021/07/12/Review/Angel Beats!/index.html","2e5227210fc2d81c808487ae504da013"],["/2021/07/13/Review/Clannad/index.html","69e7d7b6e3add7b9e7d90b73e9c87568"],["/2021/07/15/Review/AIR/index.html","c1398dbcbc989a13ddf6bd46125de0d3"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","b734a054cbc02bd1ffb981e15ee27161"],["/2021/07/15/Review/螢火之森/index.html","0c0b9eb9f14db839ff18e73df149e547"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","55b21a64d3085076125d795638eb730f"],["/2021/07/17/Review/奇蛋物語/index.html","6fcaeb44c23cce9aa1f438cdc2f26015"],["/2021/07/18/Review/Vivy/index.html","44eb6e89b923c0e0f9b12f366cb1267e"],["/2021/07/18/Review/請妳消失吧/index.html","5b3f8730d9d811c57fd70649dce3e549"],["/2021/07/19/Review/漣漪的夜晚/index.html","bbd7894f01fb9a209137dc3a9a25c9a2"],["/2021/07/20/Review/月色真美/index.html","afcb7dd5bc0f1ae11cb0c0125a70b26b"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","78fe0c3088f60023f0177588d41458f7"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","79917436bc51ee5e0a522773d4d7b5cc"],["/2021/07/22/Review/罪惡王冠/index.html","e6f3dfa0405ea57b0885fee192577297"],["/2021/07/23/Review/弱角友崎同學/index.html","edaecf31df5c55bcb054806bff5854e4"],["/2021/07/23/Review/惡之教程/index.html","9e7f613f888ab3f952005da4c6f48dd4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","5f76587f89ead1c604a7d8af665809d8"],["/2021/07/25/Review/魔王勇者/index.html","70dd1cfadf5cbd8e707b4f324324fa30"],["/2021/07/27/Review/一年A班的怪物/index.html","f23ed0c88306fdfdcad4a75efac5855e"],["/2021/07/27/Review/奇巧計程車/index.html","8ff1bbd776eee1f3415733ffce07ca12"],["/2021/07/27/Review/專情的碧池學妹/index.html","44ce81b00dc1f5b30f73ba6887a0785f"],["/2021/07/29/Review/只有我不存在的城市/index.html","caa90e3e1fb391d8cf43cf4c75297962"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","23f486591c08f126502f97c426afcb6d"],["/2021/07/30/Review/可塑性記憶/index.html","0827336626d6a0471e950c84854a7edc"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","ef402cd8bb669d0925f33f38832a271c"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","93164fb1cc9c59481c0c52f2270cfcff"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","fa27027c5cf179979de7a010fe511c69"],["/2021/08/25/Review/清戀/index.html","367b49a88f6d7b6d1d5a9d37ccdc6443"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","3a4150b3ef15c02e5003762f5eaa7dd0"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","47aac016d48eb7df2087aa0b935e0aa5"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f831a2e82d762cef9a1a125e235f6211"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","309af6ad5f7b0cd29baba4a94c3243c9"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","9c75e8cf7a51493de8b568cb114e69f0"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","ebc9c2571ba15983365714d6d8e9d85d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a95bcf17ee540db554dbeeac28cb6482"],["/2021/10/16/Review/龍與雀斑公主/index.html","b75253dd8d68400308c5a2364ddcd96d"],["/2021/10/19/Review/孤狼不想開後宮/index.html","ed6512669b15486010043ff1f29fcdb1"],["/2021/11/13/Review/徹夜之歌/index.html","e5242aa0e7484f2d7886cd6d5ba5e525"],["/2021/11/24/Review/武煉巔峰/index.html","e1aad80ae16e7b5357ee2594daa11e61"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e3f17c0598485c818da30ab044975791"],["/2022/01/28/Review/神醫凰后/index.html","25995c029effd0e2ad4e2bcfd21dd776"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","8c43f3685b482d624dcc359fd89b2371"],["/2022/02/13/Review/夏日幽靈/index.html","a8886d86aafb742118ea39595274af01"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","c56baf12e281fb4782488c7fcc341de2"],["/2022/02/26/Review/賽馬娘/index.html","26be956105df296cbe5495d2e7360f50"],["/2022/02/27/Review/大欺詐師/index.html","b188fcd5785a73311e8f8e53b5847138"],["/2022/02/28/Review/前輩有夠煩/index.html","d1ff802ab625894f486e2148b94b6511"],["/2022/02/28/Review/碧藍之海/index.html","a4f1631a3f110065a2b5957a3c885a11"],["/2022/03/05/Review/落第騎士英雄譚/index.html","7fff586b4f0378cc481c732d23128615"],["/2022/03/06/Review/Another/index.html","605527f02e1951521286060ae8bd4f67"],["/2022/03/06/Review/入間同學入魔了/index.html","d06aa0f64eb138d171aa43a910d184f3"],["/2022/03/18/Review/再見宣言/index.html","d8e67f03f1a552fa5371a2aceda21480"],["/2022/03/23/Review/生若冬花的妳/index.html","5dc91446ccda3011649740fb98471d92"],["/2022/03/25/Review/天之弱/index.html","56ea84a58ca88fd8cfc1f72556cd7b0b"],["/2022/03/31/Review/滅了天道之後轉生/index.html","46620d319038cfe358d6e4b66d92a4ad"],["/2022/04/30/Review/泡泡/index.html","c2d0443563bffef84e845882576e07c9"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","84ae577128ce7453609393067872c748"],["/2022/06/13/Review/偵探已經，死了/index.html","b38623f14bc1da5919d9d653583f54a0"],["/2022/06/14/Review/黑色子彈/index.html","5904c7e15545c3dffc947f4ad579103b"],["/2022/06/15/Review/黑白來看守所/index.html","5db02990b0d1be93bac9e61fe5a8699f"],["/2022/06/16/Review/虛構推理/index.html","70c70a9db01cbd326b058e7fa9397cd4"],["/2022/06/17/Review/戀愛與謊言/index.html","bc4582f73637e90459c1785277ca6471"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","9c10247e3d6b357fa4cfea8b5447b73c"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","9014a15b76d891e3cb23cdb11a20113e"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","885d473ce00beb5feeb2df8f0f91f5cd"],["/2022/07/03/Review/Hello World/index.html","7c2b9a9ed59b10a9cbdb9d48a201647e"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","84bfd756f10685bead5968811e3f177e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","ea95f58815970785e9f09be58a7dadf2"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","57386b9435154fc6c399bb80e29ce30b"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","4101d290a7ff09f932b04fad38777cb7"],["/2022/07/16/Japanese/動詞分類/index.html","433070523d2fb32f13a213297a070aa5"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","8b431473bbbe4a5e5930dedf445e9e0c"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","a0df1e2f17c811187f66cb8d9f42b543"],["/2022/07/17/Japanese/音便/index.html","723358f970ee92f24a04759a8a821d8d"],["/2022/07/18/Japanese/動詞 時態變化/index.html","afec0f02476651e34d3d365947807508"],["/2022/07/19/Japanese/助詞用法整理1/index.html","815e5250440a3d080a96b93b36477c35"],["/2022/07/26/Japanese/助詞用法整理2/index.html","4298e2a1f70c8e73ff6a428ce70e4366"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","7a6306fd408dd4735fd6d759c6fd5348"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","c8185be4c25e1dd5fb0f80feabd0735e"],["/2022/07/30/Japanese/疑問詞/index.html","3f1d2b525e876b957b17aa7ed2852b86"],["/2022/07/31/Japanese/助詞用法整理3/index.html","b814e8c85f92357c454c0f1a0fb9469b"],["/2022/08/02/Japanese/副詞整理/index.html","b2656465e8342f7232aa8ae79acd20f2"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","dddba806a778e2ad1ebf1db7ae5fcb76"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","48b95120ddfb8b61cfa120e178b57b1a"],["/2022/11/22/Review/組長女兒與保姆/index.html","d1c52ad208446e408731ff0d4e1c04a8"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","f7f3e13232b988222700896a41c159cb"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","b1f179281d941aeb65fac847de65856e"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","b1d4c6b24aa67d37364a732c50de5562"],["/404.html","6134e7b580dba670a0bf7a219f4724d7"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","44683e91baa7d3c7b31da3eb331bf395"],["/archives/2019/11/index.html","cf2dcbb491ad0dcd7f38d61ccd229882"],["/archives/2019/12/index.html","b88414dbd19a423edd88bae810e5ce76"],["/archives/2019/index.html","73709c9445adc1f170f4ee2a7afac2c2"],["/archives/2020/01/index.html","d5c8f559253dda7356ba16ce5c3bb075"],["/archives/2020/02/index.html","52abb7149201c7987465a01a5351f488"],["/archives/2020/03/index.html","27b132f173effc5699a9298cae2d8194"],["/archives/2020/04/index.html","dfe815ada07eb8283862add3e7b79448"],["/archives/2020/05/index.html","001a6bf18e94fc90ccde9cead23e5783"],["/archives/2020/07/index.html","124d686235f06250f76aada7ff06e034"],["/archives/2020/08/index.html","8a7dbb60552610d36338cf16d6eb0d8e"],["/archives/2020/09/index.html","3d588fd128c6fc8b557c48797a9d636e"],["/archives/2020/10/index.html","79915337c7091667fb1218148863bea6"],["/archives/2020/11/index.html","c2ebc65bbb9a5848a885c4ff255f85aa"],["/archives/2020/12/index.html","9c7d401d10801f61036780e9ffc0d921"],["/archives/2020/index.html","8e8012998d9e646cf7e3cc5d13f08842"],["/archives/2020/page/2/index.html","c2e3c4c5b62c92152336ba14e9245ffc"],["/archives/2020/page/3/index.html","eb8bf2bb5b9b2eda849c19165abb1237"],["/archives/2021/04/index.html","67fccdbe22342d37b6065c0d6e344660"],["/archives/2021/05/index.html","c5356293e9aaa7bb0fb0f95c21abd1e3"],["/archives/2021/06/index.html","f23a6aff68521c0da571bb620570ab52"],["/archives/2021/06/page/2/index.html","f18a8c8a6235ef366ed196f72eb85ca4"],["/archives/2021/07/index.html","397c6fd68106ca95e090c7283070867d"],["/archives/2021/07/page/2/index.html","7359652d5c5d6dba811c1db70afa8e8b"],["/archives/2021/07/page/3/index.html","a4294b4e01782854b926a7af6b128a20"],["/archives/2021/08/index.html","7f45285762a5a9b042df50a8f7891aec"],["/archives/2021/09/index.html","a0067abadd793ee8a16c9803eff54b56"],["/archives/2021/10/index.html","3e4269126a889009a84d6760f71b5d54"],["/archives/2021/11/index.html","4baa6a3d0c3da5f08d32d3def0a7b86f"],["/archives/2021/12/index.html","e3a241552a5798bbb82915b3f90aa153"],["/archives/2021/index.html","9612eadfe94c07151d795c1a108f6627"],["/archives/2021/page/2/index.html","36741160bde72cea4cb5ab18f580c9b9"],["/archives/2021/page/3/index.html","009401ee548f0fdb2c20bfd5c0c1821b"],["/archives/2021/page/4/index.html","98396ffb8568d4476b248e3dc2bf07a5"],["/archives/2021/page/5/index.html","c54d4c4029ae776df7604e50938956b2"],["/archives/2021/page/6/index.html","51067c6ca4e06d3d05a2698f3c3dd5b0"],["/archives/2021/page/7/index.html","b83fdbd46f1d37f1bf841700d06924ec"],["/archives/2022/01/index.html","53df5005f08dd9f14b32fce428ee6626"],["/archives/2022/02/index.html","083a9d310e94c32b1e7c38a61b03fcef"],["/archives/2022/03/index.html","7ba8923852fec9f7a7df6427a86fd014"],["/archives/2022/04/index.html","77c873cc86994a394b7aa80c51dfa66a"],["/archives/2022/05/index.html","a7a24de6262e30232e072364f315b1f4"],["/archives/2022/06/index.html","2f702d4745ba08aca34bd7adceb5474f"],["/archives/2022/07/index.html","443c64caaf231de9d9ece013184a1efa"],["/archives/2022/07/page/2/index.html","29019676cbcf32a7f2a5331d7e030acf"],["/archives/2022/08/index.html","8058310ed6d8d0e65a00856d3513c4eb"],["/archives/2022/11/index.html","02420253970e7e282ed32de0eb739a44"],["/archives/2022/12/index.html","5fa4da043d9edfbff9609acf53d92680"],["/archives/2022/index.html","e7d83a685daae4785bbf8f59b080a2f5"],["/archives/2022/page/2/index.html","d56935a0b79a9d927fef4b2a8e1e34e4"],["/archives/2022/page/3/index.html","df1516051f8403d4628765185a93e4d8"],["/archives/2022/page/4/index.html","437254815a53a45adab63692da1d6db9"],["/archives/2022/page/5/index.html","a9b1cfcb7a135d5d73461021717fd94c"],["/archives/index.html","b889ef8eb237fe1e4b96ec0812fbb275"],["/archives/page/10/index.html","e6563155aaf406fafbe9b87548985a53"],["/archives/page/11/index.html","12444964c87c1832765b2558f323f11b"],["/archives/page/12/index.html","72551520ccd7808ed959cbb270177f73"],["/archives/page/13/index.html","fd6054011dac7112df9aeff49c3c563f"],["/archives/page/14/index.html","3cf8c6f47bfa5c70923cf03cb3aa90e2"],["/archives/page/15/index.html","21dcc797a2f9cbee394ddf1477b9aa32"],["/archives/page/2/index.html","7547582823689d594c279054447d205b"],["/archives/page/3/index.html","14c03ee4ded7ce9bfe6bb52b2398ed22"],["/archives/page/4/index.html","7106eb378a6b66fc2055892d8279a492"],["/archives/page/5/index.html","7201699d3058f11906989d20bbfe8054"],["/archives/page/6/index.html","51e0a639c8e94fe0ecb65ceebf3baa3f"],["/archives/page/7/index.html","e07872a5b23fee366f99f0ad4fd80b6e"],["/archives/page/8/index.html","c3212aa4796ea948ef462626565a9b8e"],["/archives/page/9/index.html","8b30b049c2d9555e1826644f140df633"],["/categories/Programming/index.html","22c87592ac3d0b4c5942b4c1a987bc1c"],["/categories/Review/index.html","f4c1009c5cd6d652c632c43762476793"],["/categories/Review/page/10/index.html","660150c39e7c529227082b60703b85c9"],["/categories/Review/page/11/index.html","01539e19939c7c35dc07f267be8d345f"],["/categories/Review/page/12/index.html","ab7bd9ec7f46770b87834834525df9ee"],["/categories/Review/page/13/index.html","a85152d46ef8e817d0919a101bd45309"],["/categories/Review/page/2/index.html","77c02c8c322e5d7d1c598346ac56b568"],["/categories/Review/page/3/index.html","25aa3be12b118a54738a60319a575cec"],["/categories/Review/page/4/index.html","c0322b51aa9f70def8b088f362bded2e"],["/categories/Review/page/5/index.html","95344410b2bad99bc5b1047d04236e6c"],["/categories/Review/page/6/index.html","9b66faf790f7af9205b7d86460b7b8c9"],["/categories/Review/page/7/index.html","4646f4cb4711eb5aaad7cbefa31e1d5b"],["/categories/Review/page/8/index.html","e47f9909b1deeac4bc94ca6abdfe1676"],["/categories/Review/page/9/index.html","58896a2f5830ce603d6c34056d513ece"],["/categories/index.html","4d25032d265b93a3b6f407a676f7be69"],["/categories/日本語/index.html","4d28b31062ac3f26bb5990233abd7ce5"],["/categories/日本語/page/2/index.html","869a88369549117aad166f36334f811c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c565ceccb0ad30f35eeeeb0d01204b49"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","f23aca3abb73c591d77e3deb582a6a7c"],["/page/10/index.html","0c9d8fea8e9e1e8856d0582db59e9158"],["/page/11/index.html","3f02ab2c78400534de2d81d02df7107f"],["/page/12/index.html","fde1547caa8531f94326a4c70396d843"],["/page/13/index.html","022b4a4d9d675df8f8629c8e5cf18dec"],["/page/14/index.html","0e342a542c9b903d49b6e0d6fe83dbc4"],["/page/15/index.html","7260e35af057e5a9afae1d94cc5f60c2"],["/page/2/index.html","f4acb9e9f7f5f304a4675cde564ffcfb"],["/page/3/index.html","d8b7a740e5703a7290e096130029cb19"],["/page/4/index.html","806c18146bd6642b9eef8b8f7fb6f8f4"],["/page/5/index.html","76a23cd30425a06297fecf5fc7b791f0"],["/page/6/index.html","1169233b355438333264803fdb28768a"],["/page/7/index.html","708a013b3abb25e405cdca0a36668fe9"],["/page/8/index.html","b5b54bf59fc26e135eaff12b7860d5b1"],["/page/9/index.html","c46be895d75a277d77777ad98c09bf24"],["/sw-register.js","93dfc1fc4461a7c95768b7d400f58513"],["/tags/10分作品/index.html","ba2b4d8e5395578b2578c77e57775e8b"],["/tags/3分作品/index.html","cbdae5d560269d37e6c44e41d0ba63be"],["/tags/4分作品/index.html","6d898de3a9b2c1f5fac016db386c349d"],["/tags/5分作品/index.html","ff5b94e15be552b6da76d048c07e3e9b"],["/tags/6分作品/index.html","af127464e417c112976f379ca57e9809"],["/tags/6分作品/page/2/index.html","0fe493e5661b0d0f131e00276c9f1ac7"],["/tags/6分作品/page/3/index.html","c06b0263226b7ccbe7cc2763524b65f9"],["/tags/7分作品/index.html","c89fe027685bae2003a7b043bbf3fcda"],["/tags/7分作品/page/2/index.html","6f4a6a7c1ac8558ebb625b49ad41a793"],["/tags/7分作品/page/3/index.html","6011cdcf1345e8812198206555c0959f"],["/tags/7分作品/page/4/index.html","9bfbcb1ecbe379ed6c0f2b845f3687a1"],["/tags/8分作品/index.html","041bb28a7a1b61aa411f10dc948eb885"],["/tags/8分作品/page/2/index.html","df2d71925f92214396d0d2d9991319f2"],["/tags/8分作品/page/3/index.html","3c15c0daf543aff82a9d85c1d6fb72d7"],["/tags/8分作品/page/4/index.html","64ce8a2bd8e75180080d08842b84fae8"],["/tags/8分作品/page/5/index.html","3c609b57d5a0548202b8b6a9841110a0"],["/tags/9分作品/index.html","739100a6547c01a1ef170509dff2963d"],["/tags/N5難度/index.html","5a0c9fe8ae73c19fbeebf4fadbc16c01"],["/tags/N5難度/page/2/index.html","6c1a8c5be8f14c08ebb47df3aca9ab6d"],["/tags/index.html","3301985de20c48999b22dc0af264533a"],["/tags/アボガド６/index.html","6af37e76c2919bb63dd2eb9bbbb9319b"],["/tags/三秋縋/index.html","ed2e02f30238bed552d553fff1a84dab"],["/tags/中國武俠/index.html","654819e186001591d7740fc107fb704e"],["/tags/中國言情/index.html","e60a70b26ab52a5429897bfa818e52a5"],["/tags/二宮敦人/index.html","8897d2f824119e580a0f0a6d4b585145"],["/tags/人性/index.html","bb22324b25bf379ee2462095599dd338"],["/tags/人際/index.html","3bee178c0e5b4d24c2ca3b94142d12ef"],["/tags/住野夜/index.html","08e2e86323a08530c32baf2ce9db17f6"],["/tags/佐野徹夜/index.html","07aa474a3b58b871764303e26d5a1f78"],["/tags/努力/index.html","43515c61c0ff5da0d1a2a0f1006049c0"],["/tags/動畫/index.html","232c95a626b667c5682575a6e9574228"],["/tags/動畫/page/2/index.html","2d8dcc07d50ba1732f0d47eb58575541"],["/tags/動畫/page/3/index.html","67c6283827d9043726603afcbd55104d"],["/tags/動畫/page/4/index.html","15c6e4fd56e53b8aac38f1818fbb5b6e"],["/tags/原諒/index.html","cdeb6a98b8fdab564a64fe93186746a7"],["/tags/反烏托邦/index.html","e011e62f57ec14e2b398db00f83b3b3d"],["/tags/啞鳴/index.html","79e8403a0b1f81a61133a1553cfcf408"],["/tags/喜劇/index.html","74d72379cd520866ea98cbecedac483e"],["/tags/夢想/index.html","c6c87c0b65e55d4fb3a9cf79c8fd6e1d"],["/tags/天澤夏月/index.html","07fff399037e13c03711d675e92696c2"],["/tags/學習/index.html","7705ef006d0443a524e79d33a8d2174f"],["/tags/學習/page/2/index.html","135cc793ff5f8784eba588065c0d153e"],["/tags/宮崎駿/index.html","2206f3e390410fcdba317056bb27e692"],["/tags/小說/index.html","17dfb8bc89a3a516416eb37ba17a2d3a"],["/tags/小說/page/2/index.html","45a1a77c6354006bd8ca3d1df1db65ae"],["/tags/小說/page/3/index.html","d931f9aef0512f0f5158721ddfb02d6e"],["/tags/小說/page/4/index.html","6220c63faea02c0a2134447284aa7b6e"],["/tags/小說/page/5/index.html","9b3ad508f75b1c7fd0c7f0845f9b3082"],["/tags/小說/page/6/index.html","7f37ebc980aaeb1786a48e386e1f3ea2"],["/tags/小說/page/7/index.html","c789fb80b2bf633217097bbaf47b9c7d"],["/tags/平淡生活/index.html","107ec0c66b327e9dce4f550f2eff488e"],["/tags/幸福/index.html","9b3ac6b48567980833bffbfb50d510fd"],["/tags/志茂文彥/index.html","465aaefb943a2c93fd959339348a83fa"],["/tags/愛情/index.html","70cc3fc8524f0377a05d1ec16a250068"],["/tags/愛情/page/2/index.html","ef22b6f6ed4e7b7be0fa5711ab8db051"],["/tags/愛情/page/3/index.html","6b52e2310c5933f383c1c367c190102b"],["/tags/感動/index.html","a455a8708b2d758d665c9c3a235a7b05"],["/tags/懸疑/index.html","2dc602c55bc452ca4dba318f38c0e228"],["/tags/懸疑科幻/index.html","df2aa1472aee367cc7100af635842721"],["/tags/戀愛/index.html","ee9f02d29ff77778ecdb689baf2ed2c9"],["/tags/成長/index.html","7ac1bd94efe6563ffe1531015d0adcac"],["/tags/成長/page/2/index.html","bf23c61f745ac763f679a47aa5635d45"],["/tags/戰爭/index.html","202899182ba3644a37b13b70ab8f8c65"],["/tags/推理/index.html","1420c97de3146368ec6553a3959da396"],["/tags/搞笑/index.html","a4f2b9ca6d263b227d09df2bdf1f064e"],["/tags/救贖/index.html","13630dcf3951b0326bb3b4614274e2df"],["/tags/斜線堂有紀/index.html","75f11a79759cf6730ad1d4a5619e2434"],["/tags/日常/index.html","11b2620b96c514864ec08bfb97b7bcbc"],["/tags/末日/index.html","fcbb9085be5046e9c0a0ae10fc5b2116"],["/tags/校園/index.html","a4d1bf01e2d1dc1e20180299946123b0"],["/tags/武俠/index.html","b6ad3e3fd22a55f00b325a2113f2f6e2"],["/tags/武俠言情/index.html","5fe8536df04ebc5d07d38cd9d64c7ea1"],["/tags/漫畫/index.html","6b220ebe3e4ee88cc4a7acfc934cf640"],["/tags/生命/index.html","c395b2fb584815328aa09de2da83a36b"],["/tags/生命/page/2/index.html","d88bfe8d76540c7ab23d31cf3275a68e"],["/tags/短篇/index.html","b12e0fb9cb139d6f43c5ca276f3e1c76"],["/tags/社會/index.html","242e9e1dffa12ae3c4c80d5fd96a3f02"],["/tags/科幻/index.html","7ea1e835b120a6aa26fc9b1fe50e19b5"],["/tags/童話/index.html","1edf27a8578b300bb29e23bcf8da5f21"],["/tags/競爭/index.html","293b3db8aa33cb82a0f2c84148841b73"],["/tags/自我/index.html","3991b1a8f8cc28f51787f6ef9066670d"],["/tags/自我認知/index.html","4fec758d3a693d7a92bf5c822bc6d96d"],["/tags/葦舟ナツ/index.html","f533b136bf427842e5db26f63f77dfcb"],["/tags/藤萬留/index.html","a2d1c6b0168788cc791b4be3b32a058a"],["/tags/親情/index.html","79f8787a0f8323992f663f897ed374d8"],["/tags/雜項/index.html","927d32c034b14f97b68648305137a70d"],["/tags/電影/index.html","2c5183b915157f928b4a0f684a7a5d49"],["/tags/電影/page/2/index.html","52fdc744fd13939d8a239528867018ef"],["/tags/霸凌/index.html","ac53949f681a8b947c876be14c2164ee"],["/tags/青春/index.html","2958bb42d5cb29a9a6445f67a35e62a8"]];
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
