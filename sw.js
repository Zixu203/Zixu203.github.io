/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","4a10e708076fa5013181de9b308bf1dd"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","0270251c7919c869ed1a0bdc8f981309"],["/2019/12/25/Review/無法計算的青春/index.html","376995ed5c0d6be90d382d75493380ad"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","dde96bad992b5995747a3485e2cb2663"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","c850714c8ded6da5e9f5337b01d41180"],["/2020/01/19/Review/下雨天，不上學/index.html","08e2350de8a8516c0b8470509d281ba5"],["/2020/01/26/Review/三日間的幸福/index.html","57cb7927ddc08f0ee0da12d96fb65da7"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","2e2c895316abd64c37694ac9c5901199"],["/2020/02/09/Review/青春期超感應/index.html","4065ccfddd03d76db6aebfced5e2b566"],["/2020/02/15/Review/又做了，相同的夢/index.html","be680cf94de1cd3812aaaeb2a2956fc9"],["/2020/02/22/Review/回憶當鋪/index.html","6a3489acab6fe906b70d6a5028a5c904"],["/2020/03/22/Review/不適合自殺的季節/index.html","c5dc41f5124c4e86ac7e62f17fcbaaf9"],["/2020/04/26/Review/我們都無法成為大人/index.html","6f3d2e081937ac313020b7a6956af7a8"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","320b123aca8ec550660f26b6a9628acd"],["/2020/05/17/Review/人間失格/index.html","66534c123d2b3bcb980f9a37fea4cedc"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","169db5c804eac6e103acdbc1e349486e"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","d5b42e9bc750fce46183fa076a228fa5"],["/2020/08/01/Review/銀河鐵道之夜/index.html","eacae97cdb8f1de780d5fd287aa7019f"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","6ee7031af139b2928afa864887b1b3a8"],["/2020/08/16/Review/15歲的恐怖分子/index.html","8941c0a2cb3a67ba52cee6d0c0fd3f7b"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","9cd44057ed69dbbe3482a556d9746dfc"],["/2020/09/13/Review/羅生門/index.html","6733ea67e4a73107ad562fc5b3f466ea"],["/2020/09/20/Review/闇夜的怪物/index.html","14bed431645e675d66e5c231d987532b"],["/2020/09/27/Review/14歲，明日的課表/index.html","0ee2b2899d116daf58b20a53d13d9199"],["/2020/10/04/Review/致十年後的你/index.html","4579b2efa0a1d16d4e9c55ed147c62ab"],["/2020/11/08/Review/滅絕之園/index.html","c0c92d955e4236e6a568c711f7b95892"],["/2020/11/15/Review/將愛拒於門外/index.html","943f7ec4482b8131d763e97be082ad71"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","76c4ce111a84b679e090ad75db31ba8b"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","60c24eb124b4317cb8b57b37385e050e"],["/2021/04/22/Review/道印/index.html","99a2aad8aa4826e15fca1b2f8179105b"],["/2021/05/03/Review/戀入膏肓/index.html","c347666814aa513391fb70ba1265abd6"],["/2021/05/10/Review/Dice/index.html","940ad6b642a8e095aa7e24f182737ab1"],["/2021/05/15/Review/魔女之旅/index.html","ca0ff3019f7b6ea6ee467b3bd0cb7d13"],["/2021/05/28/Review/戀愛寄生蟲/index.html","3fd2f739a5cede6dfc1e63731dc53af2"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","08f7fcbe5ec04fced893128b67550b06"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","27348be0b7c2614b7a899d37762a6694"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","fac5a0ab611fb47263b54b4e9b25eaa2"],["/2021/06/05/Review/流浪的月/index.html","6bda6790dc750348a2439f9c9313c9e3"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","06ad8939df90ec5746254aaf814a8006"],["/2021/06/13/Review/第一人稱單數/index.html","8c1acfea5b866edfd2b4c062cf28f17f"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","7373648ca9a06526d85f204b9ef70819"],["/2021/06/16/Review/願你幸福/index.html","3190a20902458c2dab287d8a53482a49"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","361a539098c83f6b9db6e11192b3cc38"],["/2021/06/21/Review/神隱少女/index.html","62a2b909fbb4c03dcbfbc5fde61bb010"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","e53c48147d099c2df61dfcea3e429cc5"],["/2021/06/23/Review/天空之城/index.html","52f0f5c19cf7350c97dc8d3c700207ac"],["/2021/06/24/Review/魔女宅急便/index.html","8021028983b3fa4dfe6055783693f4c1"],["/2021/06/25/Review/借物少女艾利緹/index.html","6779c318f6721c47a3606652651f44b1"],["/2021/06/26/Review/魔法公主/index.html","da4a371a9803d88c9180863b1423b917"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","aa4690e1db4014cab3358260b5307ea3"],["/2021/07/04/Review/飛雪與劍/index.html","8ebca14acf8fc9ba6691cdd2cd02fa11"],["/2021/07/09/Review/地球防衛少年/index.html","bcc8436ee0788fb62834772df3e05b64"],["/2021/07/12/Review/Angel Beats!/index.html","a79ec979e1c1f51d7e8d50a13ee3d3b2"],["/2021/07/13/Review/Clannad/index.html","ba318c88a206d1ed81ca60f9f2247327"],["/2021/07/15/Review/AIR/index.html","fe75793affe09248c334b743eaa388c2"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","c653df8bdcb3be9c993754d9f8341fb8"],["/2021/07/15/Review/螢火之森/index.html","9aea3d97510095cc6ba88e4ee056bba2"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","6f050a41b55cf9164f1e5bb7fb164569"],["/2021/07/17/Review/奇蛋物語/index.html","60c9635583164055525c005031c0aa58"],["/2021/07/18/Review/Vivy/index.html","d3f371d6817a2abb2fea3a46d62a8a27"],["/2021/07/18/Review/請妳消失吧/index.html","af99f6275d8c164f6e776d11833e229e"],["/2021/07/19/Review/漣漪的夜晚/index.html","0a950820074648732f95fbab2b0b968c"],["/2021/07/20/Review/月色真美/index.html","9ad5aa90de27ec47e6d5b9a041ca91f1"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","e2f513d39792d52be0be4c46a1fae777"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","6750701948bc0975e622d5a08e83cbaf"],["/2021/07/22/Review/罪惡王冠/index.html","3d029c78087d16a2d5d717e2f8dbcccb"],["/2021/07/23/Review/弱角友崎同學/index.html","5e49f291f5235b85426ea9b36d5ff6b4"],["/2021/07/23/Review/惡之教程/index.html","828fcfcc49099e5bcf0aca5413da7942"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","447d9de03bd2023293e5f5baf10114ef"],["/2021/07/25/Review/魔王勇者/index.html","d2734098b07e8fbbf9cce9bd5482f882"],["/2021/07/27/Review/一年A班的怪物/index.html","b72af2f8a1bf7976ed0b392b923a3885"],["/2021/07/27/Review/奇巧計程車/index.html","e074f6c42e799aec0ba9472414d9f19a"],["/2021/07/27/Review/專情的碧池學妹/index.html","7c493e4fdb60862aaffe9955b47d9284"],["/2021/07/29/Review/只有我不存在的城市/index.html","e4e79bc2496e398cd36cf2aa91d7a476"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","f409c56d66f981e919c5fd041165581b"],["/2021/07/30/Review/可塑性記憶/index.html","356758bb1130d6a744e429a76721c82a"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","7216cc2fc4c82dbf2ac3da8a3bf007b0"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","b925153907274841bfd394f04aaaade1"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","a8b9f999428256a2421661973f8641cf"],["/2021/08/25/Review/清戀/index.html","7d77d64ff5ad0a6ddaadceab2009fa63"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","1149d9974894ce2566cb60a0acae7720"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","0c024483e8b1177b3f9fa174d1308061"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","1809e0e377c2c209f560a03c6cc54bbc"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","580131d7d032c260f637c5d110d60b37"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","4e863b0b7c447a047d8ac2fcac6ac299"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","774a43cd40294a74145d8815c524250d"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","bda413d4820571ece328f31c1b1647cd"],["/2021/10/16/Review/龍與雀斑公主/index.html","49d6f33ff4654cdbf123ef93dc99ff4d"],["/2021/10/19/Review/孤狼不想開後宮/index.html","1dbf1cd7152f0dbbe7145182edeb37b8"],["/2021/11/13/Review/徹夜之歌/index.html","124e4efaecd397ac55cf4859d0115140"],["/2021/11/24/Review/武煉巔峰/index.html","04e028e025c2edec29e074b0aad697ab"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","8f4d9f48c4f29d8d8c856a3c6a097bae"],["/2022/01/28/Review/神醫凰后/index.html","5bbc4b946d0b2f5634c0c198725b0781"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","592c8a0e9240c36ec942d0a0f10ed0b2"],["/2022/02/13/Review/夏日幽靈/index.html","fb11e9f7d6cc48529c70d4987596d71c"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","778824e11d8a92b6b9399c0f95ff9ee3"],["/2022/02/26/Review/賽馬娘/index.html","29394e245e8027ebcd5723d16822d924"],["/2022/02/27/Review/大欺詐師/index.html","dc325254692e0f7b9e69fa5d0850c658"],["/2022/02/28/Review/前輩有夠煩/index.html","bf127cb7711a54172d2d392a19c507f6"],["/2022/02/28/Review/碧藍之海/index.html","025c80c947273eb3f8bf0f0cc08d9c00"],["/2022/03/05/Review/落第騎士英雄譚/index.html","7033a5a462b0474627f10bc8ab33790e"],["/2022/03/06/Review/Another/index.html","80951683d3c2dcd30cdbe7cf4686832c"],["/2022/03/06/Review/入間同學入魔了/index.html","13508fee0cb821ac1de9cb9ee27f42e4"],["/2022/03/18/Review/再見宣言/index.html","a4bc235e128f6044c2d03ecb356e0733"],["/2022/03/23/Review/生若冬花的妳/index.html","8c5e30c85a9ba472d6495a7ff67dd5b2"],["/2022/03/25/Review/天之弱/index.html","c0e700181c9d0103a416a37a38602585"],["/2022/03/31/Review/滅了天道之後轉生/index.html","78af62fa1cca9f895ff079eb1a2aecd4"],["/2022/04/30/Review/泡泡/index.html","1f190da2c0821876e09f729aa96dc811"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","78fe81083b8e8191a3efb653eff195f5"],["/2022/06/13/Review/偵探已經，死了/index.html","f608e04ff4d27631c991d86f224549c4"],["/2022/06/14/Review/黑色子彈/index.html","acca9eff49c89a962886a5e5255408f9"],["/2022/06/15/Review/黑白來看守所/index.html","2b7c3c0230e7f59838f2c9dde5a53425"],["/2022/06/16/Review/虛構推理/index.html","378b0b05d3a36efc37ef7c12c323aeba"],["/2022/06/17/Review/戀愛與謊言/index.html","f37a35872de4754df47f51c8d425a859"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c40b108c9ba98d71d1dad856358ec5b3"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","df84f18f771a2e21c6283a7cfee6907b"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","b4b22559681abd86c4e8ee9f2ea6c8d5"],["/2022/07/03/Review/Hello World/index.html","7fca2a34a241b062c827c2e6d95b2194"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","9cdb7b3356283b15d56fc22eaa6359ba"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","81af5960beae001382b6c2f8a73757eb"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","65c60250ce447d83e186c920f3bfcb62"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c0a4b0292230e71c12624bd4590ed0ec"],["/2022/07/16/Japanese/動詞分類/index.html","d67d4b931fc8b667095f39bd544bc853"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","5e33d2e4334e5561b86219a2f15dc3e4"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","16e6d3497b5db8e7b9389d015711fffe"],["/2022/07/17/Japanese/音便/index.html","d84377132abff0bbd140fa293570150e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d1e3edcdf11627921b5339ceb4d0e960"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ca2832a6f46161b3175e340d4730800c"],["/2022/07/26/Japanese/助詞用法整理2/index.html","d88c1ed2b0332ae8094196254e5809b6"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","03afc70c9770ad94806eb4002b2d84a9"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","874059343d6afbaf356fc8ccb08c7d22"],["/2022/07/30/Japanese/疑問詞/index.html","117bf8e5edf391f90875ce679dd04cb7"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3ff306c94e24db59b9c57035514e66ef"],["/2022/08/02/Japanese/副詞整理/index.html","6ba23195353269c7d73621350b7e53ae"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","faa4b9a4c12d816e20892ffa8aad29d6"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","57beea833e542e482ce27991fa7d989c"],["/2022/11/22/Review/組長女兒與保姆/index.html","42a88acde06fba0ef3b107dd9a9b84fa"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","e94ecd3b5502aa5d8bda683c099eba6e"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","7137170e7041b1f16cf61b3438ff7084"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","77cf132de72fad4a54c76ad35a9f60d1"],["/404.html","a1975f7b17493403d5a62cc8931c0c41"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","1a61e42e1e4065d19c67deb530fd099d"],["/archives/2019/11/index.html","895637af79aa9e4fce86e64500599a28"],["/archives/2019/12/index.html","322c8561bdd2a13f6fd0f2fac6a31a14"],["/archives/2019/index.html","7df952456743c8738f09f2649e0b1fea"],["/archives/2020/01/index.html","f6d4f787abe876ef3f7a94bebf1e0c86"],["/archives/2020/02/index.html","a944871165fb44647d9710f4a4cbeaed"],["/archives/2020/03/index.html","17980aa63bb1f9ddc9aa959bf91675cb"],["/archives/2020/04/index.html","95f64a83767bc9fc74d3ae66936b181d"],["/archives/2020/05/index.html","34c864443ed9dff01b6680f22bc00ca0"],["/archives/2020/07/index.html","11ea3a196da46d7978e09aaed913a9ac"],["/archives/2020/08/index.html","f7bee82f6cb2d6a6fc21f60641e93320"],["/archives/2020/09/index.html","09dc0faebf27116d6f777720ac94328b"],["/archives/2020/10/index.html","6decbbc2698f589d39ab8d6a90b04a15"],["/archives/2020/11/index.html","11c92ccfe565000491b2a13f69ecaf21"],["/archives/2020/12/index.html","eeda5b795396e8857e34cf0592c989b3"],["/archives/2020/index.html","ee7c2852c5e1645ab0fdddb39d5f53e3"],["/archives/2020/page/2/index.html","2dc09969211faa7f1680e61ca2337d1c"],["/archives/2020/page/3/index.html","3bdf0db11a66b7e65846447cdf8b5418"],["/archives/2021/04/index.html","b0d0191e3746b2548a6bef1e66814fe1"],["/archives/2021/05/index.html","5a8f76df648eee4433bd6eff1faab976"],["/archives/2021/06/index.html","64b9e8e41640e1fa9519f877597e1008"],["/archives/2021/06/page/2/index.html","673e7ab89669f73f9b63a2f293054d26"],["/archives/2021/07/index.html","5b9ec7402c72c42df1700624fd9f9254"],["/archives/2021/07/page/2/index.html","741f316640caa6741da9957936bbd3d7"],["/archives/2021/07/page/3/index.html","767aefea885c556559ea3a113d1fb591"],["/archives/2021/08/index.html","22d8d37894101e6347a85634c8fe4915"],["/archives/2021/09/index.html","bd764e74db75aedbd031bcbb5a3b8faa"],["/archives/2021/10/index.html","8f921292d6f0aa56d70e22f8d48ccb7a"],["/archives/2021/11/index.html","e82dc8ce1ed0a4d7607b046278d4e590"],["/archives/2021/12/index.html","783e5a834a691377b50d0a768549bae4"],["/archives/2021/index.html","0fecc69dfac0dbe492797f72f4184068"],["/archives/2021/page/2/index.html","c161ffac59e1b0e1bd539a557ca5f93a"],["/archives/2021/page/3/index.html","441debd6e3dd0808e93a7351939b4e3b"],["/archives/2021/page/4/index.html","cceb4176e68ef56adc85fde40c27ee23"],["/archives/2021/page/5/index.html","aef7cbcf22478e97d3b34999fb4e0e4e"],["/archives/2021/page/6/index.html","b32923ceb860aca47abcbce11d2c58e5"],["/archives/2021/page/7/index.html","43804930b37df0248ee9cd67ce4c6a03"],["/archives/2022/01/index.html","8cf45180ce7211fd8c688a85b971d7c0"],["/archives/2022/02/index.html","797d56d4af31fa02ee46a1e316c8eb5d"],["/archives/2022/03/index.html","42b2f3c4e96e01bffda6e54a71d48d4c"],["/archives/2022/04/index.html","83a6ec2c035091fba61702c386f9ba6d"],["/archives/2022/05/index.html","760316336abe1a1576822cfef3196140"],["/archives/2022/06/index.html","abbaf8550240ad42bd16a03e4303b45a"],["/archives/2022/07/index.html","3516df65ca86b6abcf789e6c2d4fad99"],["/archives/2022/07/page/2/index.html","76279ccb3025099c294ed4e5a476f632"],["/archives/2022/08/index.html","6c2ae81a7091c6eb2bd0651a5a2bdda5"],["/archives/2022/11/index.html","3b93b185c182f424c37c5b5c86d44923"],["/archives/2022/12/index.html","42173ab3a0d9a6f39d9b60e24862dbdf"],["/archives/2022/index.html","c3b3f63f43e012a93d5d9c8bb0723527"],["/archives/2022/page/2/index.html","0ea4114ceaef462421883b7f70d2dfc0"],["/archives/2022/page/3/index.html","5c7a0c83e70020f143cffae1e6fcbcb7"],["/archives/2022/page/4/index.html","74383851361bb5c96ce2ee00e89136f9"],["/archives/2022/page/5/index.html","e9c0361caf214ff1b32d530c6f3b16ee"],["/archives/index.html","4f5ae23c707b094ba35f69b12d253bd8"],["/archives/page/10/index.html","e1d564f8f78e78a1fb767b872b5a49f7"],["/archives/page/11/index.html","9dc36051596d030f22e30b79425b2fcc"],["/archives/page/12/index.html","e206ca362ec5bfef96c62a76cbc99bcd"],["/archives/page/13/index.html","b455d9cd8c6c9bac67c573ae0fe838da"],["/archives/page/14/index.html","d466b0056b1347f11db74f0614fdbfa8"],["/archives/page/15/index.html","a972539fe79edc4d29ca2ca4b1cc4443"],["/archives/page/2/index.html","259f688b7bfcf69d50a7c9f7522db28f"],["/archives/page/3/index.html","ad3a0e4f77d9a70ad6c9a3fc0d91e6af"],["/archives/page/4/index.html","2b4147533b045ab40c6cd74e7cdfdc18"],["/archives/page/5/index.html","620100140d0bf692d80a9bd30b732656"],["/archives/page/6/index.html","58d4b39789bd29ad9d83d1acc218f3bf"],["/archives/page/7/index.html","17f1f84ad40143101d2c553469ce388e"],["/archives/page/8/index.html","676b7b48bb279188126da98749290411"],["/archives/page/9/index.html","12578c61cd576866a725a780d668883a"],["/categories/Programming/index.html","f2c209c4667e85ad9c01b36d6aeca85a"],["/categories/Review/index.html","363bdfe2c9ab12b82269896a0c0c412d"],["/categories/Review/page/10/index.html","3923ed598c7295d2da7f9bf820dcfad5"],["/categories/Review/page/11/index.html","74698208a8b03b2418caf5f9967b29f5"],["/categories/Review/page/12/index.html","ab703a673da0fcfdeafe544232e3c610"],["/categories/Review/page/13/index.html","1c3b945335d191151d6de09f43c710ad"],["/categories/Review/page/2/index.html","0dc96cb3f167695ae1145f69591cb0bc"],["/categories/Review/page/3/index.html","2cd57e956e39664906eab3a709e31b7e"],["/categories/Review/page/4/index.html","90970cabe5f8ef959b44849108a885aa"],["/categories/Review/page/5/index.html","483184dc85b6dc2f4ce38d8e09283cde"],["/categories/Review/page/6/index.html","3a417ab27acc205a96b8d0e1e3214515"],["/categories/Review/page/7/index.html","14dafcfb53fdf81779a1a85e749322cf"],["/categories/Review/page/8/index.html","003f389fb63c6098d5b143feee2394e6"],["/categories/Review/page/9/index.html","add75a04c0c04ea05727ee96e2baf77f"],["/categories/index.html","639e784e95f5a23d89e12f58d21121f2"],["/categories/日本語/index.html","e27ae3524e3689e6bde1b3390fb6b58b"],["/categories/日本語/page/2/index.html","a91ab597d15c9b4ec4b49ff5fdadc922"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","300b5faed18721331882426d9689fff3"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0bdb6817b6327139aee28fd82477e85e"],["/page/10/index.html","b465e16246d4fab14c60858a3a855374"],["/page/11/index.html","f48d391ac10d723aed8d7bfbd2984a6c"],["/page/12/index.html","f1450f131f2fac841ed426f270e8906c"],["/page/13/index.html","ca279430f2368e59e46d1e78b6c9f646"],["/page/14/index.html","a32365753713df901daee0a86e2f0732"],["/page/15/index.html","de335372098a5e2febc41502d07e141c"],["/page/2/index.html","8320711bd75ab2252302b2bb6316a7ad"],["/page/3/index.html","51f1b5ab8d210ec444e75f27f13f9dc7"],["/page/4/index.html","33b96a270d95430249659de7cc75a642"],["/page/5/index.html","c5fbea215335ea1e3b2d2dcb2537ab9a"],["/page/6/index.html","7f078f4ffb872c83c9a0ad4799440802"],["/page/7/index.html","518ecc044120dd42c30f7f86e61edaf8"],["/page/8/index.html","aff078bff786875cdc1901b968ea6d80"],["/page/9/index.html","20965677d4f97d9e9c476e680ee48b31"],["/sw-register.js","12168cab3f6bad1b442201333da8cbdf"],["/tags/10分作品/index.html","67adfcc28c5f4aee271ca5126914f3ac"],["/tags/3分作品/index.html","2ef045b8072059b0796b31b87b167ce4"],["/tags/4分作品/index.html","1b5a77cc8b838daa725d53323d5cab6b"],["/tags/5分作品/index.html","129dd9225d858549b0fea9c457b10e88"],["/tags/6分作品/index.html","03fb465e6bc5fa76ce4765cdaf6dd658"],["/tags/6分作品/page/2/index.html","8004c964af75d79fb6113fccb439dc3c"],["/tags/6分作品/page/3/index.html","6e45e36e88ffab2b23fbd9c6b0795024"],["/tags/7分作品/index.html","21d89f494c0b30df3eac63a026056ae1"],["/tags/7分作品/page/2/index.html","b980261e891fcde5569e6d0ac5f1e217"],["/tags/7分作品/page/3/index.html","c7053bbffa4a8e29f5a607d66c98c152"],["/tags/7分作品/page/4/index.html","60473658b31f8aa4af34241a5b981703"],["/tags/8分作品/index.html","b48fe3f9e5b013ab7e35a3443aedd02a"],["/tags/8分作品/page/2/index.html","1d94a8efc5a4e3ad921cbf43535eb1f2"],["/tags/8分作品/page/3/index.html","8a0fe119d7c10f675cc473090c876fe6"],["/tags/8分作品/page/4/index.html","17637484e01f5bfbc68fc4124fda00f6"],["/tags/8分作品/page/5/index.html","744fedecb59e5fc8bfff40b8d7f5699b"],["/tags/9分作品/index.html","15f9e627c865978350f3a197a6dc6f62"],["/tags/N5難度/index.html","69c3a24ae2ae151345b479be93aaf3e3"],["/tags/N5難度/page/2/index.html","0c5d362b4e882c6c56ec9253d3b4bf29"],["/tags/index.html","ecb0e8e6c58fb265af859e16149a9320"],["/tags/アボガド６/index.html","1890d60401fbdd946bd5893e6a978893"],["/tags/三秋縋/index.html","f2f9e34d3c104d5f465558bc1c51ab85"],["/tags/中國武俠/index.html","4ed2d087b447ad6502c1654f4274de4e"],["/tags/中國言情/index.html","9c5e8373b5b95537a002988708852df8"],["/tags/二宮敦人/index.html","1bb528b44a155aee04c87be0ea46ff6d"],["/tags/人性/index.html","b11992951f7d26483ef27c88c511787c"],["/tags/人際/index.html","2c85ca4703796fa5691a69a6904fe0d1"],["/tags/住野夜/index.html","bb86bb69d1defa269ccfc54f92423758"],["/tags/佐野徹夜/index.html","c7e8d2e5958cfe1cc07cfed10c030c05"],["/tags/努力/index.html","5b4cdfa8497061b644852caf9238b061"],["/tags/動畫/index.html","e035e8a67927bd431d323e4869efc703"],["/tags/動畫/page/2/index.html","a39a9d6b84f54b5aa2092ea950fadb1b"],["/tags/動畫/page/3/index.html","c443df9585766eb6fd834719b3d66d14"],["/tags/動畫/page/4/index.html","4f2419b826f6e955dae8485ae5de8f42"],["/tags/原諒/index.html","b968467e2e096d170c5e3b8dc0f28d0c"],["/tags/反烏托邦/index.html","18e9fbdb158a5bda4f747d43909a3859"],["/tags/啞鳴/index.html","ad9c40d693eff68cb23e5af2a3296790"],["/tags/喜劇/index.html","d5471de6329f5d309f43fc222867552f"],["/tags/夢想/index.html","cacf1197278291c1c7d0a1acf14828c4"],["/tags/天澤夏月/index.html","78c4ffa5f592eb6833f62a654f11e54d"],["/tags/學習/index.html","093d56feb948ceaf2e270150ee735f26"],["/tags/學習/page/2/index.html","8e2a5dc63060f192494cdf8321ae89c2"],["/tags/宮崎駿/index.html","58cacd390c0fd7a1addf7d47b5608a34"],["/tags/小說/index.html","7ce569fc4e3f0a19ac953bbdab2b0ab0"],["/tags/小說/page/2/index.html","f12f2e2949db0fd10def46e97929f460"],["/tags/小說/page/3/index.html","558eec74aa0e7e84e348617370a807df"],["/tags/小說/page/4/index.html","4ffbc2fa6696bb84565c277831ace75c"],["/tags/小說/page/5/index.html","58dd0d74940243d0c5340e4df29a4827"],["/tags/小說/page/6/index.html","a023465ec7a8f1fb057558ffc8729087"],["/tags/小說/page/7/index.html","947a58c1129a66606c7cff793aa8fae6"],["/tags/平淡生活/index.html","53b0a6870f48fa71f6878a7432e3ce6f"],["/tags/幸福/index.html","cbc2406d6f03c6c2bb870e26cfeb532e"],["/tags/志茂文彥/index.html","7faf9833980340558244f3a2601fadfd"],["/tags/愛情/index.html","0f4dd72f49048fbb634bc51a1c06a118"],["/tags/愛情/page/2/index.html","c1c685a7a02ac88b49a8aba2abee6607"],["/tags/愛情/page/3/index.html","30a5ea9c9649b9d6e712edde0cda130e"],["/tags/感動/index.html","878c85cc179e12928dbce759ba3942c9"],["/tags/懸疑/index.html","78bdf0e55bfd1b5c75d5797ce6afaf9a"],["/tags/懸疑科幻/index.html","bcad349319bea8ec3233ac3e03d92f24"],["/tags/戀愛/index.html","93a2f5acce606011a4bffdd78a5a924b"],["/tags/成長/index.html","90fa774191cbe4f5468857affbed6680"],["/tags/成長/page/2/index.html","0611e4a18b5a44fc7c1b2ab2fdcdde91"],["/tags/戰爭/index.html","6cfe74d1109c5fe1a041d5b6efb4251b"],["/tags/推理/index.html","efb0322e83d2d986b2368d688edb0e57"],["/tags/搞笑/index.html","9aacba1f3ce3f41cb0737284c121b5fa"],["/tags/救贖/index.html","daddfa0e6b45a839b217f72a61a02ad7"],["/tags/斜線堂有紀/index.html","bf534d028ab4c2372a85355f879481ce"],["/tags/日常/index.html","fc2d242b6b9af151e218a0935fa65746"],["/tags/末日/index.html","19d94dc7f02509e501f2cdadc00abcb4"],["/tags/校園/index.html","cc4324e5f07ce587f3a2b4dad672ce74"],["/tags/武俠/index.html","0ba3ac9be620086f0a933675518f72e9"],["/tags/武俠言情/index.html","47351e24c5980876ad5855af0c175281"],["/tags/漫畫/index.html","5b47fef15306c0450ffc4795e9a49d3b"],["/tags/生命/index.html","af15c89b8cd30c602e79a14469180121"],["/tags/生命/page/2/index.html","570c46ee09a8be981c1f6e9c5bdcc2c8"],["/tags/短篇/index.html","2a92304cef3d7e10efd5a0f33bd8c2d0"],["/tags/社會/index.html","e6117d265b4fdcc242e0e8cc5c54b80e"],["/tags/科幻/index.html","8abbc995f14b03c56cd765f4e1a5da4f"],["/tags/童話/index.html","2e588070e7c34efd4e47ae8a0ee2d3c5"],["/tags/競爭/index.html","04693d55ce58ae8ea9e40beb1e0707ee"],["/tags/自我/index.html","fbf040c9632c04400a8634b59685c04f"],["/tags/自我認知/index.html","753c11a4659125efd42c546f387fc3c8"],["/tags/葦舟ナツ/index.html","17cb3693cb8a40af3b10e3071333a9fb"],["/tags/藤萬留/index.html","2d69a255f388f53bc5f34d3d2a242924"],["/tags/親情/index.html","c72dbd467e23b69bc1620c763a3b7255"],["/tags/雜項/index.html","2a0da65ad7821d891ee51c437c14b27a"],["/tags/電影/index.html","b8b8e5b5d85ddb35eee5107c8870c0c6"],["/tags/電影/page/2/index.html","66da9a0bcccf3fee2106fc1a708675bd"],["/tags/霸凌/index.html","bfa7184fd7e1ea6c0959b5e36a85e19b"],["/tags/青春/index.html","e0a606d481d7f87aaaeb33fa4a06b652"]];
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
