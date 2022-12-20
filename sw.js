/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","61bdfa05774c95d84150b710f7a0f517"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","df3a8b4d32c6b9571c5f042da77d435c"],["/2019/12/25/Review/無法計算的青春/index.html","4e7a57662536e876a7e62c16100aa735"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","0c3e557ffde67f8995705ede2b31ce25"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","53acfe9bedf9023dc78c8b0cd3c77fbc"],["/2020/01/19/Review/下雨天，不上學/index.html","b57f0a865aa25403a0e5bbc38fa01b44"],["/2020/01/26/Review/三日間的幸福/index.html","11598a03a808f8719735282269fb8e51"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","900e392436808b951288b11e5db8cce2"],["/2020/02/09/Review/青春期超感應/index.html","190a7be58d2e2c29dd4c8aeea0647fa7"],["/2020/02/15/Review/又做了，相同的夢/index.html","0a3293938ed6aff66ee4401c3298c72f"],["/2020/02/22/Review/回憶當鋪/index.html","446591f8a7fd3222899a78d84d0a0a6a"],["/2020/03/22/Review/不適合自殺的季節/index.html","fef950c1ce328b1f55e37c0b70f6ee7f"],["/2020/04/26/Review/我們都無法成為大人/index.html","c019cdd9da9a7a5749286660b87fa7cb"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","d84a683300de3ffd78303b90b59739c6"],["/2020/05/17/Review/人間失格/index.html","774cea23f14e08c76623ee29acc46060"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","67b05a818f15a782a987aaee2a1271a8"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","ad84e5fbbedf3b9be0a9aa87fc6d2bc3"],["/2020/08/01/Review/銀河鐵道之夜/index.html","8dc9f1d4a9785552c7e25ef51e0707c0"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","1b2a342106945871e2de66f4b8dbfc1a"],["/2020/08/16/Review/15歲的恐怖分子/index.html","b623b96efe4e6610cf19760f8c82ebc5"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","6d875c26a7d0a16dec25d3062b22cfbf"],["/2020/09/13/Review/羅生門/index.html","dabf3699834f2c0a6768a805ceb684ab"],["/2020/09/20/Review/闇夜的怪物/index.html","96e56cc4ac2b2b34b9d43128623cbc7b"],["/2020/09/27/Review/14歲，明日的課表/index.html","5a27f2812deb402c3de68821e243cc18"],["/2020/10/04/Review/致十年後的你/index.html","fb19677a75f504e29a12f5c085590528"],["/2020/11/08/Review/滅絕之園/index.html","f17505abd6239cb30e61a5fab0716d79"],["/2020/11/15/Review/將愛拒於門外/index.html","6b1b1083d11fb47ba6f0748e7ef5dea4"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","b94bbb739d9ea06bc6cf73e423f63cd8"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","ca04e386ce61cabd02a0d1da8c4f3b59"],["/2021/04/22/Review/道印/index.html","032f32a5c53b023838cf5fb8d63f0090"],["/2021/05/03/Review/戀入膏肓/index.html","8f4f039f43f8b0ecc9464b33506be71d"],["/2021/05/10/Review/Dice/index.html","29c34fb96a9ef54c60d4fc48b84b09c7"],["/2021/05/15/Review/魔女之旅/index.html","685d975f95c997d920a6aa96d4f461ac"],["/2021/05/28/Review/戀愛寄生蟲/index.html","04143e950f072a556d6418b5397b9cf7"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","3bb72af50c74883784ff93adb9648cc7"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","c39aacf403e79d31c7ac72460af9117e"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","172580d77cc4a035a5465d208600a125"],["/2021/06/05/Review/流浪的月/index.html","f49e86168f0f00f9d78ec037c8641883"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","224a8d52ad106de536f4096b05415aff"],["/2021/06/13/Review/第一人稱單數/index.html","7bebef10c2a9ed2ea987d491aad2fc08"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","16dc78757a8892e015cce78f44f72117"],["/2021/06/16/Review/願你幸福/index.html","5c4ff6fb2b6e45bd218f888acb174c67"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","b561a0683a000e32cea11cc0bff539ec"],["/2021/06/21/Review/神隱少女/index.html","266e7905ea822fda9b7afd9b483ca72e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","ebf4cf2499d215c40d778e3d4018dd2b"],["/2021/06/23/Review/天空之城/index.html","9969c4cba0f824b15df30ecb19211e06"],["/2021/06/24/Review/魔女宅急便/index.html","559613865a0915b409dffd4d7544018a"],["/2021/06/25/Review/借物少女艾利緹/index.html","8fa801b47414429c0c6a7a835fe9d837"],["/2021/06/26/Review/魔法公主/index.html","dd7f58592429bea19d39e85d387d7d72"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","380c4b997007f7e5a3c4520f37037150"],["/2021/07/04/Review/飛雪與劍/index.html","3ca5b707266e3fb24fa92d7ce17d399b"],["/2021/07/09/Review/地球防衛少年/index.html","643fae2ffa839499af470a1a5093f2c4"],["/2021/07/12/Review/Angel Beats!/index.html","48a06e3e8709e57c0339088b2b26d6e0"],["/2021/07/13/Review/Clannad/index.html","ce022efdf12d4d331396ba2931742546"],["/2021/07/15/Review/AIR/index.html","36cddfbd56a8dcf15e1cbbdb6ebbf593"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","0029900924e8942e0e4aa9544a3b946a"],["/2021/07/15/Review/螢火之森/index.html","aeceaeadf6fada8ec409dfc109081a50"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","67e2e0c8c4b9eb2918c7bdb0bdcdb547"],["/2021/07/17/Review/奇蛋物語/index.html","0473c93fd72b0414ee62920d1e6ef154"],["/2021/07/18/Review/Vivy/index.html","c455361b900969b1095afdd0569da07e"],["/2021/07/18/Review/請妳消失吧/index.html","51be8c878b051b51e28b03d40f8807d9"],["/2021/07/19/Review/漣漪的夜晚/index.html","7b046f364a060d06cf902e8b3a9e4c27"],["/2021/07/20/Review/月色真美/index.html","aadfcfc97a572e965fbe7737ec8b13e5"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","de9a7b26982ea8e5824e678220906c0e"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","0374926d12d671ef5fb4e8c4109e08e2"],["/2021/07/22/Review/罪惡王冠/index.html","14ad7370471173f6ce3c1a0fb912d104"],["/2021/07/23/Review/弱角友崎同學/index.html","cf7e5342c913374fbb69a786bae5b6fe"],["/2021/07/23/Review/惡之教程/index.html","78cc9536d5a80493aa058de71d657a68"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","1d20db67618bd60153510a49afb9c62b"],["/2021/07/25/Review/魔王勇者/index.html","eda9fce24b575519cb03e955844d1a62"],["/2021/07/27/Review/一年A班的怪物/index.html","20e6f046c7c6f0132d174b1432a06227"],["/2021/07/27/Review/奇巧計程車/index.html","b32dd442aa458a53b7e48ba4a1b9e5e4"],["/2021/07/27/Review/專情的碧池學妹/index.html","3a33560d08fce6e8389a9ea3cdd00476"],["/2021/07/29/Review/只有我不存在的城市/index.html","1e6a127abb779410f19d8b9f1e2ba684"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","5a754c72cc4c386a843e134df0748d4b"],["/2021/07/30/Review/可塑性記憶/index.html","19ff6acb336f7d951c2e33945c68c735"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","8abf6566af80813ba712d2c210d4a21e"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","20f15542f75f7166ee85e4a190dc91e6"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","a0ed668922d24bab7167eec0ad8d07a5"],["/2021/08/25/Review/清戀/index.html","3ed4b1775b365be2bb91f68e85262ede"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","c99a7353c87d10b06aae6b5c9d33d9f9"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","1d744ced58798b291f3b70da4c35d9a4"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","24ae0f2e0c3a14a6a0b9705b43b7f647"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","c5a446e52fc9a7b9313b9fefc6e7847a"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","06a01888c92c3d3ac404520f119d223d"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","44eb92d6e66759d285d1e55880698e67"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","a1fcd811698982d51de0c5ba52e60800"],["/2021/10/16/Review/龍與雀斑公主/index.html","1474e43ef956644765cfbebde22ef61b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","fa425767a2735b7979c705406844d6fd"],["/2021/11/13/Review/徹夜之歌/index.html","1c6df61e2ebbc64302047526961ff65e"],["/2021/11/24/Review/武煉巔峰/index.html","d0d3b13902e46dead8d57f446c0e10a6"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","4fbbf80b3d2c3482f6895eb1485c7d10"],["/2022/01/28/Review/神醫凰后/index.html","9b0de55f0786b2b4d350d948f583835f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","c7312639c4fabc5b1ec8e0a46f354a5b"],["/2022/02/13/Review/夏日幽靈/index.html","bf6fd5084c0c225452efac571eb7f2f0"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","2eaa726ddf771ee586b73a9640e8a1d0"],["/2022/02/26/Review/賽馬娘/index.html","9aa2afbc8fec541b0276e9936491308b"],["/2022/02/27/Review/大欺詐師/index.html","250fff18c5005fa60a74ad320be87497"],["/2022/02/28/Review/前輩有夠煩/index.html","011508c2f4352278afbd6866be86cbbe"],["/2022/02/28/Review/碧藍之海/index.html","5933af290c633659e26989d9a14337b5"],["/2022/03/05/Review/落第騎士英雄譚/index.html","2154dc052497f7b2518016a2ec79930e"],["/2022/03/06/Review/Another/index.html","16ef4b4a36dca1764332baeacdc651d8"],["/2022/03/06/Review/入間同學入魔了/index.html","630d68e0ba4c9fb722ac3d4fd533b1b2"],["/2022/03/18/Review/再見宣言/index.html","be49329b8d06f7ab564b15c3432ef934"],["/2022/03/23/Review/生若冬花的妳/index.html","7c0c52288b7b98eadb2ad539cea63468"],["/2022/03/25/Review/天之弱/index.html","db5c5a62e641939de10ec65aa64862ec"],["/2022/03/31/Review/滅了天道之後轉生/index.html","b86b3948fb47f3ff2cf28be13e3c6c7b"],["/2022/04/30/Review/泡泡/index.html","29ef674fd4194c3a03a1e0bd2b76aa79"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","730115b9788c61fb498300894542e93e"],["/2022/06/13/Review/偵探已經，死了/index.html","7ca907a911c0740691ec12a893e29499"],["/2022/06/14/Review/黑色子彈/index.html","88fd2119eef08ee1971ee02169aa2d91"],["/2022/06/15/Review/黑白來看守所/index.html","71941f0f0540f48dc9e4c47420b574b0"],["/2022/06/16/Review/虛構推理/index.html","4d8399f3e8dc6befb0f29d24bf61e2ab"],["/2022/06/17/Review/戀愛與謊言/index.html","473645aaf0971551d5043c1d2c049128"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","620ef7ba2ff660d6d59399328dc2b9ae"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","c25a848505e7c97272f3bc6e1b685ee6"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","d53946c0bb53c14109f0178db01826dc"],["/2022/07/03/Review/Hello World/index.html","9c92fc9372f3276c907bc049cddf3333"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","ba864ea4a12b4ea035d6155b62ab7176"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","0130e5e0338da4f2d7401a94fe2319d0"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","b2ca71ab7d7a5fac5a826f8e2b406445"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","45cff268d0d758894af8a7c7c6ed0f63"],["/2022/07/16/Japanese/動詞分類/index.html","f1b777536c265304b63b52b36ee37e3b"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","0a64cc3350fe5df504250f9c2c0a2d98"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","0931bd27bbd410da821959f6e7ab2149"],["/2022/07/17/Japanese/音便/index.html","b5ce56581cda92c5e3f57e44f329cd96"],["/2022/07/18/Japanese/動詞 時態變化/index.html","3a864032e8f1f923a4960f030e1b785d"],["/2022/07/19/Japanese/助詞用法整理1/index.html","8d26a172d1b09198f2039b5cbacaf2d6"],["/2022/07/26/Japanese/助詞用法整理2/index.html","98313244eb8262f31059bda2ec4b51ae"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","b3e2abc31200c06308246d4b4092887d"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","5127132153ceac5f2dda8953811264e9"],["/2022/07/30/Japanese/疑問詞/index.html","18b39bcaa093b8ea45bc4d3dc93f7864"],["/2022/07/31/Japanese/助詞用法整理3/index.html","31758eed111992c8ccf907764bb54443"],["/2022/08/02/Japanese/副詞整理/index.html","442b6fa7bdd9c5ddb9af71591dfaabda"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","2a963f166d17a3fb56c68b7f27629e28"],["/2022/11/04/Programming/Data Structure/index.html","3a4d8b9033740436e46a9005d849dde3"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","c3772eda59f9e92800628c6ea5519a3c"],["/2022/11/22/Review/組長女兒與保姆/index.html","a5719d31e0c908737dfd89e1aa327dd3"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","f016c2e400c92e39a9f307640e37cc87"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","ffc907e531f22ca94699e3bad2e333df"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","e8e293aab0089d89253315d1da6242e4"],["/404.html","c4e9667aedf3c746940567ffeffc0339"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","a597470a28fdb733d06af65ec5eef092"],["/archives/2019/11/index.html","d92e48ef8cf27c41b0650ceba808c86f"],["/archives/2019/12/index.html","1f90cd4fe5a1b1201853b79cd1c43950"],["/archives/2019/index.html","8300ebb53207dc5cb42b6743e08878f5"],["/archives/2020/01/index.html","af381453ea1c44d06c9127ffd4fd4c5d"],["/archives/2020/02/index.html","5f919c1763ce2ff2aa9b115475e11f6c"],["/archives/2020/03/index.html","e96504fbbb82b150db5a3dd0ee4e3bbc"],["/archives/2020/04/index.html","58ae2abfc1104826f7f846ed75b9371b"],["/archives/2020/05/index.html","9d9369b48501f646c4e1747ea7679a29"],["/archives/2020/07/index.html","cc52d837717f68681b639c4d182984a4"],["/archives/2020/08/index.html","7edf221af11a3c8037e6f317083ad28b"],["/archives/2020/09/index.html","0affcf6161bc003326365ca4b91fe05f"],["/archives/2020/10/index.html","836917f788d4ac903a4ba25949deaabf"],["/archives/2020/11/index.html","91fbf4131c0c272cbe53fc8a0026f3c8"],["/archives/2020/12/index.html","f4831410a73331d38a514af31899af18"],["/archives/2020/index.html","7885f5dc9764c9e58fd6256ee48be8af"],["/archives/2020/page/2/index.html","05d32e06b7262144bd637e22453de6a1"],["/archives/2020/page/3/index.html","5854604cad18a7e0da0f8303cb55c4d8"],["/archives/2021/04/index.html","6d325f0b3bf61459add6340638c2c280"],["/archives/2021/05/index.html","3dc9ccaf32aa8535c80945ddf0648f56"],["/archives/2021/06/index.html","bea0156017533f06998776cc17133681"],["/archives/2021/06/page/2/index.html","961a71685d7219033d9d8cdc767c0dcc"],["/archives/2021/07/index.html","1b16c810874b62af4f15cd39e1c46640"],["/archives/2021/07/page/2/index.html","425b087a029cd3395553d56e4b3c0e2a"],["/archives/2021/07/page/3/index.html","cf442648a878751c607a95fd1f25c071"],["/archives/2021/08/index.html","33ed7ffdd4f402934bb7ec54ecc00b14"],["/archives/2021/09/index.html","6d885aab29a6638306a5fc796fc21b2a"],["/archives/2021/10/index.html","bb999703e9d39568fae959038d4880a8"],["/archives/2021/11/index.html","63a4e9fb14ba69ca91c5dbef7341a995"],["/archives/2021/12/index.html","6a098e169741a153123f05de9a95e313"],["/archives/2021/index.html","946cf80a7e4c5e3dd055d4341ad28a8e"],["/archives/2021/page/2/index.html","3967a1a2b4c41416f094ba445055957d"],["/archives/2021/page/3/index.html","a91234d4c258fcdc76ff8a696b7c0407"],["/archives/2021/page/4/index.html","53cc8101a6bc252f67f6e5c45b641855"],["/archives/2021/page/5/index.html","4f8d0bb3ca68e2976c7aa34958e47238"],["/archives/2021/page/6/index.html","2da9076ac201c2e73ce6b441abd1e445"],["/archives/2021/page/7/index.html","c89010a7990c61b5d5d2fcf5e1b8ab1d"],["/archives/2022/01/index.html","57a30e7bd35ed576a422df174370e9f5"],["/archives/2022/02/index.html","598334c7d595476201d89260c50585d0"],["/archives/2022/03/index.html","d76f444493b0a88a26038fd856338e14"],["/archives/2022/04/index.html","da9fae7bd8f7e8dd2ef4180ee803d1b4"],["/archives/2022/05/index.html","c3568e999b201df5539a6c6a6c4f299b"],["/archives/2022/06/index.html","60b324091f68ca0b5fecfeb8914aa126"],["/archives/2022/07/index.html","24ea39692b14ac6c28d384bc984e0023"],["/archives/2022/07/page/2/index.html","e001f4353094b1b36e464332e10292fb"],["/archives/2022/08/index.html","acacd5e41ad3300185259f9c3be21ce4"],["/archives/2022/11/index.html","2b9fb81300e9ebd3b7d7d8740b78b367"],["/archives/2022/12/index.html","110f9d2c27528954e8210e72849c227b"],["/archives/2022/index.html","0b3f040521d42ae7d30dc1278ff010bf"],["/archives/2022/page/2/index.html","59226ec37aa602c9b3c106454a059628"],["/archives/2022/page/3/index.html","76cf6f18a7f97ffa1804d65d61729aac"],["/archives/2022/page/4/index.html","e6a1025af9a0582b1750d42769380d6a"],["/archives/2022/page/5/index.html","6f8ecba92cbf643708a6cba6e0fad751"],["/archives/index.html","9811389f9a14106b6231c7c9145a7eac"],["/archives/page/10/index.html","347c9ff9aa9aeebe3127c11540cb921a"],["/archives/page/11/index.html","ff43156e84f8c336676a70781f8239e6"],["/archives/page/12/index.html","c08a7ca70b86d5dde62b3edc255db1c8"],["/archives/page/13/index.html","6277675082ccafd4028bddebd50d86fc"],["/archives/page/14/index.html","ba228545b121fda2d84fe5acbdd56dc8"],["/archives/page/15/index.html","ac3991117e887278f5b7cdea329a7f84"],["/archives/page/2/index.html","728e61895a759b2c42afa2aa35053a83"],["/archives/page/3/index.html","65f6e0998f5247523d8441d0ece64a60"],["/archives/page/4/index.html","dac95b0627d4008c45e047e7aa6000a2"],["/archives/page/5/index.html","800e8b94ae876ba6b65aa81c316a4c25"],["/archives/page/6/index.html","30d747a6c458e614e2bc2dc84537a3fb"],["/archives/page/7/index.html","480ebb6378861404bf8f669013ae6c66"],["/archives/page/8/index.html","9d501af8b01212976755f3ffbc99f986"],["/archives/page/9/index.html","7402efa3b235ac6c3d9df50b51b33681"],["/categories/Programming/index.html","973f214d8c7fe8f837ce19e75763faed"],["/categories/Review/index.html","0824b5db35f6d55b077e7ee05cf433dc"],["/categories/Review/page/10/index.html","8da77cc617b85191fb543cb34e06b7ad"],["/categories/Review/page/11/index.html","70c9fa6d581f5386b128a4e0d5618c95"],["/categories/Review/page/12/index.html","307d285ec56d5148de7b66fac6b31cd6"],["/categories/Review/page/13/index.html","4b3b418ec5e92ce08afce6474eeabd05"],["/categories/Review/page/2/index.html","f4f3dbdd2fdacdf9df5671269748b49d"],["/categories/Review/page/3/index.html","e85488f21d1f2b81f63f3484674a01e0"],["/categories/Review/page/4/index.html","adc619c650a9cfa2bb5986d4660af3b5"],["/categories/Review/page/5/index.html","32ac5fad2120bfdd809d9c5f0acc8276"],["/categories/Review/page/6/index.html","48615e726ed8cbbe6e0243d54efeb084"],["/categories/Review/page/7/index.html","177da51923084f49bb328b0a4b1ddb9a"],["/categories/Review/page/8/index.html","22f12ccb00b30207df8cab71f8162040"],["/categories/Review/page/9/index.html","8d4d1b498032682999e4a0e537ed28ca"],["/categories/index.html","fdf0c8a88d0a152befc8c8f297bfa653"],["/categories/日本語/index.html","1ed39f4d51c3c35ff839c9073264d4b4"],["/categories/日本語/page/2/index.html","a564f0f116b2bc6728e22035575bead2"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8cd280b1750e185e306b67d326018497"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","830475dcadcdbb6ec2e17b5ce69250cc"],["/page/10/index.html","3678bcec121e96cc4089d98a9a9f337c"],["/page/11/index.html","d53ff15fe1d0a4d1f5a9c1bd3a27c7d0"],["/page/12/index.html","2e26023d80394e138cf2c06ede374a3e"],["/page/13/index.html","a7e93dfbe7c84c066b5a50912db1ea09"],["/page/14/index.html","2a1145dbd85e6a0d868d52523528878f"],["/page/15/index.html","7ce6dcbbe4ebf71eff79719ef28f3f38"],["/page/2/index.html","a32c1853e529ab787bf632e1a32efd43"],["/page/3/index.html","011b522f1e5d17f4909e6535685bb990"],["/page/4/index.html","26759a5590c9327c18253c1761ce0078"],["/page/5/index.html","e70fab9a1c27a98b9360246ebafbbdda"],["/page/6/index.html","0cc6397a5803537cdaa3665b4c98b30d"],["/page/7/index.html","7687a9dda3dd94153ae18a9beafa8587"],["/page/8/index.html","a042d32fad26c8e96e069ea9f54631c3"],["/page/9/index.html","8a748889ebc72170400c935d694050f9"],["/sw-register.js","1d2b4fef6d8376bb194f57ce7f058635"],["/tags/10分作品/index.html","25f1a9271d82e309a4919023221f5908"],["/tags/3分作品/index.html","4f73e182fc8bea27668878ccbcea8362"],["/tags/4分作品/index.html","776d0f8e0b285116a56868fcf4f1aa88"],["/tags/5分作品/index.html","304b65b1bd0dc8d33049b41f4bd11743"],["/tags/6分作品/index.html","99732850f229030e7f9f8c78c3b9713f"],["/tags/6分作品/page/2/index.html","8dae4261411fedc117f6d4ec4ffa2676"],["/tags/6分作品/page/3/index.html","7cfce3bbcc224008b2374948a5805790"],["/tags/7分作品/index.html","723f921587671870c4163b8fe87a9d7a"],["/tags/7分作品/page/2/index.html","9741db48d42c11b19334de92cd52f9bf"],["/tags/7分作品/page/3/index.html","c7c0dbd9217c1ab8a514a5814a38409b"],["/tags/7分作品/page/4/index.html","255b9a5411ad0acdc7aad12c3a4e6602"],["/tags/8分作品/index.html","011d39757d9692374707bf6e5337d7b7"],["/tags/8分作品/page/2/index.html","f20327cf5b146e1031af218785854880"],["/tags/8分作品/page/3/index.html","889f99a9f8e42174c87145ed0f438c10"],["/tags/8分作品/page/4/index.html","f2555f58e239a70c0ea96715661549c1"],["/tags/8分作品/page/5/index.html","97b27da18f5868a6821fcdc76024d485"],["/tags/9分作品/index.html","09842ca3dbc07764c21be5c7270f1de3"],["/tags/N5難度/index.html","7f548ea282dff64c1e24b773637c74bd"],["/tags/N5難度/page/2/index.html","16ad454e611f139c47fa1e585ae1c03c"],["/tags/index.html","27901e0024dae9e10ab063d4f7b8e4e5"],["/tags/アボガド６/index.html","dc6996bc8b5e9ef2c4d7111c93dc2e8b"],["/tags/三秋縋/index.html","50c975039ebdc9ca2e2cc6f90d04330a"],["/tags/中國武俠/index.html","5afa00342fdff7de5458fc961d167e57"],["/tags/中國言情/index.html","e4fba0e7f7f2e2026c859b5f906d64e4"],["/tags/二宮敦人/index.html","8d69587b97a8d0b1ee7a4eaecdc87af4"],["/tags/人性/index.html","6bc2c97d660c4b6c0ed5d2977a716bc5"],["/tags/人際/index.html","9cbf5e4cbbae4a92ee02538df891c920"],["/tags/住野夜/index.html","5f9e45796f80d99c613d4c3f0f50f7c3"],["/tags/佐野徹夜/index.html","82f6295d4e959043cd97924885941ade"],["/tags/努力/index.html","7edd7d5e7f3ff818bb71343b794b0784"],["/tags/動畫/index.html","fc46d53c481e464529d1846142f10a5a"],["/tags/動畫/page/2/index.html","432c667ebebab5dbe38407cb6a12a5d5"],["/tags/動畫/page/3/index.html","32396185d1d2d31da369257b8c146d22"],["/tags/動畫/page/4/index.html","0180cb36dfaa141656c22e5e7304bda6"],["/tags/原諒/index.html","128c6ff1c5c7b83b703722b63da7bcbf"],["/tags/反烏托邦/index.html","f47608b76cbb850f10468b9c60fb185a"],["/tags/啞鳴/index.html","71e7700807122dbf6fd6ccd88ae4eb09"],["/tags/喜劇/index.html","f293f736cf9472bd59baa311db2c1d5a"],["/tags/夢想/index.html","110f517c3a161c233a4c58ecd7c6367b"],["/tags/天澤夏月/index.html","ca7e11461be7716e9d583cf0b7aa0e3c"],["/tags/學習/index.html","9f97af3873c214541c87377327e0513e"],["/tags/學習/page/2/index.html","b03bd6870ff8c1603c0254da1c75cada"],["/tags/宮崎駿/index.html","426fd5f694eb79cf577bb686901f8c2d"],["/tags/小說/index.html","384c3f8cdd227c505c8120203a40db1b"],["/tags/小說/page/2/index.html","1fc4fbd7913ce85da23b8ef51bf68d53"],["/tags/小說/page/3/index.html","75762de366652a7c486e8aeab0aa6cf8"],["/tags/小說/page/4/index.html","b8a9a3b212b150382b4beb2dd39aff8b"],["/tags/小說/page/5/index.html","fdabc7f286932a9f6833ca6db7caf9d5"],["/tags/小說/page/6/index.html","8b146266c1b223ed62d1ae670b2015cb"],["/tags/小說/page/7/index.html","89e83c568b73c56ff70cbcdcd08bd54a"],["/tags/平淡生活/index.html","06547c675bd6c6cb6b3f35fa3f469cd7"],["/tags/幸福/index.html","f4159b93a3a70e25ce7481f3705af4fc"],["/tags/志茂文彥/index.html","6e8a5743e2305e94ea2d588319812ae3"],["/tags/愛情/index.html","3cc90c2e042ce3ebb643e7be588ba344"],["/tags/愛情/page/2/index.html","d8d60760e6c4d375ec3dd3e32fd03053"],["/tags/愛情/page/3/index.html","d46a0e1d46a0fc653697da9c6cffe451"],["/tags/感動/index.html","c2d44a775a9220d37b7198ea89c03b15"],["/tags/懸疑/index.html","57992eee7647adeb9cb61ec8e01ef81b"],["/tags/懸疑科幻/index.html","b245ade766678d662f410444d5f762b1"],["/tags/戀愛/index.html","2be8c5449068db946c02c771c5059494"],["/tags/成長/index.html","9aae946f2fb2741ba73ce69a4a283e39"],["/tags/成長/page/2/index.html","ae468895e1f5fa305916959ee0b110b6"],["/tags/戰爭/index.html","ff836fd9cb11ec4bdb4d7869b618e670"],["/tags/推理/index.html","3adbaab6611a48dc7c2c5432ebbabc2b"],["/tags/搞笑/index.html","a987ade04f34c0100c2fadf81450fedd"],["/tags/救贖/index.html","f8d252a5d345b3826cdfdfd56f349a1c"],["/tags/斜線堂有紀/index.html","a8eaf6ae4bfaf0fd1007f2a06705f12d"],["/tags/日常/index.html","872ee0dc642135f7f7e384b0e544e287"],["/tags/末日/index.html","0732d23d3ba975a1b638eac2032c41a6"],["/tags/校園/index.html","956636b5617e11e47ae5bf1db298030c"],["/tags/武俠/index.html","eb1cee49794cfa65c286c053c56e7254"],["/tags/武俠言情/index.html","3634f5175ef1840d5eea313b20c2868c"],["/tags/漫畫/index.html","50bc59369103c59408d1ecfde34ba0f3"],["/tags/生命/index.html","33d84399e40204640b171125b85aa34e"],["/tags/生命/page/2/index.html","636550065dfd18dba88e63a7b46812e8"],["/tags/短篇/index.html","4aa265d87efa49627688ed4c1c18b300"],["/tags/社會/index.html","6c6d37aafe6807eafcd6f1d22fca560c"],["/tags/科幻/index.html","7bbc5dbb7314d9521331a8c5a01ba545"],["/tags/童話/index.html","a5fda45a54198d35d9a1054a9e2bb5d2"],["/tags/競爭/index.html","fa41ba88e3fd389235026cd597a64883"],["/tags/自我/index.html","c612ee410f155006dd529a4eb6ed7421"],["/tags/自我認知/index.html","c8e479ea4b454119f63e415fec801c67"],["/tags/葦舟ナツ/index.html","40987282b93424021756b558d31aba99"],["/tags/藤萬留/index.html","687fb9807f007c35e01f1d92e9b3672f"],["/tags/親情/index.html","722f349cbc0726a950ff33eacae37d55"],["/tags/雜項/index.html","0a8f38af941848d94debaba9312e13b3"],["/tags/電影/index.html","f98685e0e373253c38ac28117301a661"],["/tags/電影/page/2/index.html","3c95a92289429343aec6b2a8af698549"],["/tags/霸凌/index.html","e7c8732cc502d0f809c528ddafab4a86"],["/tags/青春/index.html","f5bdd3e6e6e1f9a8132c22af5ae0eb68"]];
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
