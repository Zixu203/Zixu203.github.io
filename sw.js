/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","4a222135387aa47c3c14a2fb55eb9a9d"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","3eef081706a5a8902dfde44e5cc3f32c"],["/2019/12/25/Review/無法計算的青春/index.html","b2d9330e3c8a195b99f513b2cc8b7e2e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","705858c47c65f06df951658b76c3d5ba"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","563c1c53de28ee7142e5a8602f95004a"],["/2020/01/19/Review/下雨天，不上學/index.html","51c08320351c74f49592eb8ea726ecff"],["/2020/01/26/Review/三日間的幸福/index.html","31f337d48c084f36f9ea1c84b47594fd"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","9ccfc0120ad93ac602657d2d6ec097f8"],["/2020/02/09/Review/青春期超感應/index.html","9f2412c05ecb129025029d8478903f1b"],["/2020/02/15/Review/又做了，相同的夢/index.html","c0637522167bad93076d1fcfc332d710"],["/2020/02/22/Review/回憶當鋪/index.html","eda2b621c87b36644747315765aae950"],["/2020/03/22/Review/不適合自殺的季節/index.html","a8e1e33dc132b809d6bce73439b43fbf"],["/2020/04/26/Review/我們都無法成為大人/index.html","37458479b852b70c26c828fb6edd16d1"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","217dcb09c00f73de66636600681c302c"],["/2020/05/17/Review/人間失格/index.html","26ef26f5632874dc81153dc10075d5e8"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","6daac75cd3155e4ab96aedca540129a6"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","740cd3ee888ae86ded3ac507bced0ec0"],["/2020/08/01/Review/銀河鐵道之夜/index.html","51d3ef70d1e59332b1e7f9bf0274f03c"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","230036adb67f188812e8764d56718234"],["/2020/08/16/Review/15歲的恐怖分子/index.html","cf34ec5e01c520309c154d4bfbf9663f"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","3207924094a73734c2fa3542fce0a285"],["/2020/09/13/Review/羅生門/index.html","2cac25b5ff99d49810b85b1d9276e5b0"],["/2020/09/20/Review/闇夜的怪物/index.html","c4a75cb0a9d8248c1aa6d2e07d4736f4"],["/2020/09/27/Review/14歲，明日的課表/index.html","8512bf1e16b12c479eb3cf6dc677ffbb"],["/2020/10/04/Review/致十年後的你/index.html","9d61bdf30c5240c1c5b1ac300cb7f43c"],["/2020/11/08/Review/滅絕之園/index.html","ebc756f07e1098f3814f7daefc78cb70"],["/2020/11/15/Review/將愛拒於門外/index.html","6886fc4223855e323c748b3a3be34e7d"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","46975a2a940c04b3972e173450c67c7f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","bc039011dfdde6ca902da33835badeba"],["/2021/04/22/Review/道印/index.html","8207964e93b322b42e773c2d527e8d1a"],["/2021/05/03/Review/戀入膏肓/index.html","348512e44942a88ca8f0498905ed07da"],["/2021/05/10/Review/Dice/index.html","9fada1d575cbc860ba0ac8ee890dd35e"],["/2021/05/15/Review/魔女之旅/index.html","7a12368d52adcd6d84371496fb48dae5"],["/2021/05/28/Review/戀愛寄生蟲/index.html","289b474984516a0b015cef8fd9628000"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","904ab2862f0602eb74b2d29c6ba2cdc2"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4c3ba9d6bffacab9989b92d969d26aeb"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","5697a41267e3d5423d8ba8e02190097d"],["/2021/06/05/Review/流浪的月/index.html","40aad99a10d006a08e0c143dc56d80ec"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","5b5dee1fd48f282473ded7ebe527c6d6"],["/2021/06/13/Review/第一人稱單數/index.html","4a8e950a73b80ab742a6779d45543099"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","8450c65d171181d14b69c86fe1c8ee34"],["/2021/06/16/Review/願你幸福/index.html","563454e404c1c429e8cd738acdec7e04"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","514daa04f2bee9070f7e11fe7c34ecd4"],["/2021/06/21/Review/神隱少女/index.html","30dd7fcaa7d3c58d19f037594a369ddc"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","c04949afb9d47aa254555cdf65a947dc"],["/2021/06/23/Review/天空之城/index.html","b49ebaa99d73a1f1a5b26d8654e6a6f2"],["/2021/06/24/Review/魔女宅急便/index.html","dd5d7ab1d5b8341350aa1c2e55472fee"],["/2021/06/25/Review/借物少女艾利緹/index.html","14d7a8e82ccf6dfdb8f5f2a22ffec88f"],["/2021/06/26/Review/魔法公主/index.html","57d8d81bc6c9ce1a2a700ab6f1898453"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","791623ac57d95170446da076f035e177"],["/2021/07/04/Review/飛雪與劍/index.html","508666b47493cbb8498cc19061f22af5"],["/2021/07/09/Review/地球防衛少年/index.html","440b370695c37464e88c1a2966ac957b"],["/2021/07/12/Review/Angel Beats!/index.html","9ebb85384aed31ed71c78803c170b575"],["/2021/07/13/Review/Clannad/index.html","7db21799789bd9b862c1ea78fdd8a3a4"],["/2021/07/15/Review/AIR/index.html","e5c9841be6139ebb9f20a151f4089e65"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","3815d9eb89317b905cf4f91bca915243"],["/2021/07/15/Review/螢火之森/index.html","75adda28497fce6a1dce2681fd3c42c9"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","677255da0076f757142b7e7bb3bdecd1"],["/2021/07/17/Review/奇蛋物語/index.html","71381960a76258200d5df8658e2df10d"],["/2021/07/18/Review/Vivy/index.html","3dd267345e58f613b013e30623fff6d6"],["/2021/07/18/Review/請妳消失吧/index.html","5d9179d0e4a6cc6fdcdfa4b6a82f5b58"],["/2021/07/19/Review/漣漪的夜晚/index.html","96fc663b48f9b709024f751bbfc5f904"],["/2021/07/20/Review/月色真美/index.html","4426679f09044aec186d48cc37259dcc"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","f3ff61efc455671acb40868af749c880"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","6fc73ba748a67a6f5fd26053d3e4ea1b"],["/2021/07/22/Review/罪惡王冠/index.html","0ecb73ed783c6fc01adaa1b6af41a60f"],["/2021/07/23/Review/弱角友崎同學/index.html","3c980a0b3ddee2c7243a4ed617326b4e"],["/2021/07/23/Review/惡之教程/index.html","308efc7a0eff210c3f9606f22ccd0b39"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","1e37cf4cb4197bb24f871e3a31a6e410"],["/2021/07/25/Review/魔王勇者/index.html","6636d0c568893d4f5c430e68ae153f8e"],["/2021/07/27/Review/一年A班的怪物/index.html","d9bf825641f5a677e6c1c52fcd94f887"],["/2021/07/27/Review/奇巧計程車/index.html","a07fe200bfc0344416136907d6a57729"],["/2021/07/27/Review/專情的碧池學妹/index.html","89e6aa2a28f1fad3b31f3770e8d6c6a7"],["/2021/07/29/Review/只有我不存在的城市/index.html","1079abfa630bb75668f51e8e495900ec"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","5e500fc24306b65bac6771aaaa9d8ea9"],["/2021/07/30/Review/可塑性記憶/index.html","3c1f5e94e43fda585615e1bf30f6d9a4"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","b4de61d63d721528ad94d44837d0871e"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","1a212a14acf8cf96b23059a2f3983457"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","b6233ad95eab0ca20f3451999f7e4386"],["/2021/08/25/Review/清戀/index.html","20c9fc69c688c12626339d483ddab3db"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","5d5578635bac2007b579c6a805c5cf33"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","ffad2b38a7ba7e1dbb2a4c854d1b9f19"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","d93e89f294986afd0f04b4543bb0d128"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","61f1d8fca99c87b689ab1fb1c97b4d0e"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","2a2358fbd8c9b4287ac07cc06d2e8360"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","ce8dff989f5d29927c537faf142dad43"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","68da7921d156e2e8f85cadae10101d16"],["/2021/10/16/Review/龍與雀斑公主/index.html","edc82e809649922040fc900e5964d820"],["/2021/10/19/Review/孤狼不想開後宮/index.html","44a962cd33c4d972ae247bcd8a8a433d"],["/2021/11/13/Review/徹夜之歌/index.html","ea20002606f59bf4a3d311420741eab5"],["/2021/11/24/Review/武煉巔峰/index.html","f9c1cd3762c4ef6421640960c0377361"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","b3ba5bfb961a1463626a158b789e41b7"],["/2022/01/28/Review/神醫凰后/index.html","dab8295f159d26e309b2ed6bf960aae9"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","7a3773d219292f6e4ed389a49cfab406"],["/2022/02/13/Review/夏日幽靈/index.html","326ea300d549c631b1629720065bbf9d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","d92b583c84d6c888ee01569e29f37d2a"],["/2022/02/26/Review/賽馬娘/index.html","25a0439081ca2b29ec5a95074885fad5"],["/2022/02/27/Review/大欺詐師/index.html","e815441f682d72640c5079739d630b83"],["/2022/02/28/Review/前輩有夠煩/index.html","17688cd9c0724711fd2f5fb47b1ceca1"],["/2022/02/28/Review/碧藍之海/index.html","5e2d12120d94011ad328eaf0f3a4cc41"],["/2022/03/05/Review/落第騎士英雄譚/index.html","48a174e2520f4f797b062ad3c9ba28bf"],["/2022/03/06/Review/Another/index.html","cb0748b8475ab91b030ab264f7873e5c"],["/2022/03/06/Review/入間同學入魔了/index.html","66447284b99838db064b73cfaf87b32a"],["/2022/03/18/Review/再見宣言/index.html","418b41018554033093eba55d290b539f"],["/2022/03/23/Review/生若冬花的妳/index.html","e1564a7a0ba31b7b44430d5eb5f0bcef"],["/2022/03/25/Review/天之弱/index.html","47a7220da4de47106b65fc7db1649698"],["/2022/03/31/Review/滅了天道之後轉生/index.html","87be68ac11cf5ff86e62ae130c412561"],["/2022/04/30/Review/泡泡/index.html","44305c5fc0dad7c5f441499e6a58663f"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","30f1a6c54d629367994a789a10f3c949"],["/2022/06/13/Review/偵探已經，死了/index.html","e0962ecefbd315cb270802e8580789ea"],["/2022/06/14/Review/黑色子彈/index.html","f527f973969a53ccc3464606a7d321bd"],["/2022/06/15/Review/黑白來看守所/index.html","20705f2dd4e03039f10e931c3a408aaf"],["/2022/06/16/Review/虛構推理/index.html","a0ab5f8d37878890df580ce15e52d110"],["/2022/06/17/Review/戀愛與謊言/index.html","0c1db65694136480a0ac13c9905ad412"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","7f84550531292af0be0252f77b22d32a"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","76fc71679440ac9b2d87a14aadfad306"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","34f9eda9949c8ccba8363a4f91c40536"],["/2022/07/03/Review/Hello World/index.html","0d88195c1d7845f9b04b3403add78113"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","780f680aa797145374872705a6fdc69a"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","d736f7aaf8856b98288a47eaa8b8be5f"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","901c42205f1afe515af1c3b121f82857"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","3b073c18aa58fb349b0ae88f672ab19d"],["/2022/07/16/Japanese/動詞分類/index.html","46d5613dec2facc455027c7202a1ff36"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","eb1b933df75bf1b82f5f7a9f59fb84fb"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","bbac01100d97d6decbd90ba5f1f8d28c"],["/2022/07/17/Japanese/音便/index.html","7184a4c5f697bcb10e21fe999f997d20"],["/2022/07/18/Japanese/動詞 時態變化/index.html","0114e6146a54970c27e21cb464447bfe"],["/2022/07/19/Japanese/助詞用法整理1/index.html","6e21e7af4e3118b09b1f11bf9be9cfee"],["/2022/07/26/Japanese/助詞用法整理2/index.html","a65286882cfe93566819344b466df9d5"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","b2f74eec5edfd94c81d8010c5d72bad0"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b2f84c744f1a6b45fff0aa42d9eb0b7a"],["/2022/07/30/Japanese/疑問詞/index.html","878d2785fb45000fd37a76e3997155ca"],["/2022/07/31/Japanese/助詞用法整理3/index.html","02d1b325205b5edf2ba1db51dfd591e2"],["/2022/08/02/Japanese/副詞整理/index.html","a947021e77847946201fd48e5d87c7c0"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","c754db3e9f06b6b41e60b9a3b7425297"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","fa27949dd0bdc8e1cd19f7ba7148ec28"],["/2022/11/22/Review/組長女兒與保姆/index.html","9bb63d701d9f16e3b6b1b34f0b33aeaa"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","053967ef4ae187f580f7b184ec34a439"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","fe7c88532779227b739ce575dffe86c1"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","162a7894074b9abda1fbb8c076a2285e"],["/404.html","aca7e2748211b0b58f96caebe232c781"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f29a8a7253ea83111830bff3f37f113f"],["/archives/2019/11/index.html","635a58f4348200224007ec3b17c32650"],["/archives/2019/12/index.html","756a296d5cfd630f9f3ead8d10f6ef54"],["/archives/2019/index.html","24844b3af71f6ceb8ffc700e48508c2e"],["/archives/2020/01/index.html","9f8c1ff1f204d8d4561514bbad7f7ad4"],["/archives/2020/02/index.html","db4f6fe71910bca77f44642ae9ac3742"],["/archives/2020/03/index.html","f065099e07a2b356f5174390bd313427"],["/archives/2020/04/index.html","58b32e7bfd28ad16ecae9520eef2a419"],["/archives/2020/05/index.html","0a306723a22cfa8f844d5c077eddaebe"],["/archives/2020/07/index.html","7bc319891cd72972a588672cb292a566"],["/archives/2020/08/index.html","19eeb3511e084d107ef3edb9f144b3a5"],["/archives/2020/09/index.html","2b4aa134ce52cb8252df15f35be22529"],["/archives/2020/10/index.html","c0a960deb97dd425a5609a9c5d32074b"],["/archives/2020/11/index.html","b5225200fb8870f53888e7722f3c892d"],["/archives/2020/12/index.html","6b34034aa5551918650ac058fa25bd18"],["/archives/2020/index.html","f62bc65b9d6c869f095ee97c07f2d85a"],["/archives/2020/page/2/index.html","665d77145a9c67a3c3b797d20086fd37"],["/archives/2020/page/3/index.html","e1ef399e77cf453e21b2342d4af945b6"],["/archives/2021/04/index.html","46c1d844a547236927b191e1f8646ce5"],["/archives/2021/05/index.html","3ea478381e17f4d3dd889f192dd80a99"],["/archives/2021/06/index.html","10aa389b9370fc61e10869693cd437a2"],["/archives/2021/06/page/2/index.html","8b98147389f207b8070366b4b00ba108"],["/archives/2021/07/index.html","3a834bbd136f85c6da6a0723064c3d67"],["/archives/2021/07/page/2/index.html","f5d1478cc709e10ecb4945729b67af2f"],["/archives/2021/07/page/3/index.html","bfaa385ebb352203acdc37a1186db34d"],["/archives/2021/08/index.html","3eb2e955a3c49b067e4c0633f18590b9"],["/archives/2021/09/index.html","99e3ccc7ff4e50d36cf7a2d88e261552"],["/archives/2021/10/index.html","42717a5e2124f9369963fcd2ca875b46"],["/archives/2021/11/index.html","9ea37323ada6e4d0c385cd92721a2611"],["/archives/2021/12/index.html","304cf92e285007fa84556a3774820eac"],["/archives/2021/index.html","0f08de68c4146e4c972fe2cac01df9a9"],["/archives/2021/page/2/index.html","17eb760ae4cb498a147eb0bb92678ac0"],["/archives/2021/page/3/index.html","8ccc35c02c7747113567a185353142c0"],["/archives/2021/page/4/index.html","c5357650e98d19ed6c00debf045ef379"],["/archives/2021/page/5/index.html","23d81c47cd51d4dc9309d8a9ce39dffc"],["/archives/2021/page/6/index.html","e37bfa27757bcee7b6872168927ded32"],["/archives/2021/page/7/index.html","7f576f2de660d870acbfc3a820203873"],["/archives/2022/01/index.html","7828d0d0d5dc33b322ae8ea21c679a1c"],["/archives/2022/02/index.html","75f26c08cdf1467b44acfbe1c85be234"],["/archives/2022/03/index.html","bac6c5c1f7f9b63d5b937f711fd6697b"],["/archives/2022/04/index.html","af4bea4a73cba112e62c67353b88d17b"],["/archives/2022/05/index.html","47878477a5772eea38acbdf88b5842e7"],["/archives/2022/06/index.html","d77276f083681358a333a805b49430d6"],["/archives/2022/07/index.html","5e036c8735f2d0035a7a1cd90ca9e382"],["/archives/2022/07/page/2/index.html","505aa4af4975202ee40a9de78534a93f"],["/archives/2022/08/index.html","12c653e003652edc47af786a96ede2b3"],["/archives/2022/11/index.html","72ba994fd273cc4d1eedee670e5d2891"],["/archives/2022/12/index.html","d5d19c718c5110f0a316dd37eaff98eb"],["/archives/2022/index.html","dbaedb5ad42fe4036b93b077b288f0b3"],["/archives/2022/page/2/index.html","a48e27f20a6ff3a520f2b16d1529b1d2"],["/archives/2022/page/3/index.html","4703f6625d8c1fa241e58d7420c9c125"],["/archives/2022/page/4/index.html","c2941d10db45a6b1ed3374949f638714"],["/archives/2022/page/5/index.html","34060dbbe50c1fce8be448a6b29f099b"],["/archives/index.html","a6eda0441c38e245be095e8aabd2ce68"],["/archives/page/10/index.html","94cae121d2baa929b0ca5594c9a904f7"],["/archives/page/11/index.html","dd312835ea9347ca97b7af4e2880bf91"],["/archives/page/12/index.html","ac669a5548e19f62fe0c461e6ab043c1"],["/archives/page/13/index.html","a21f2577227d12200b5398d0e11db6a0"],["/archives/page/14/index.html","f5260d77bef2ad3776ae5e8bee514c9a"],["/archives/page/15/index.html","61e4abb2bec9a5d698d3285075c9cd03"],["/archives/page/2/index.html","fb62f9bd83867f1d13dd727f3c6c2b6d"],["/archives/page/3/index.html","4b28279eebd78d89ff80ae767ae563e7"],["/archives/page/4/index.html","71cf9089a6bba55629a69a275e960eab"],["/archives/page/5/index.html","829f934c82765bfd2582c7ccd3a8abf1"],["/archives/page/6/index.html","ba4692837a82f60dfa974a0b7294864d"],["/archives/page/7/index.html","549c6776efc56ae92e121ac157c446d5"],["/archives/page/8/index.html","607fc07cc82d67207efdd3e3a8e998f9"],["/archives/page/9/index.html","a46bc002b22280c37d0e336cce044c3a"],["/categories/Programming/index.html","f5328548e448023f632255928db9a5df"],["/categories/Review/index.html","dc1435e0199cbeff33fbbee74bfc9348"],["/categories/Review/page/10/index.html","bada964973dd1d66581d5990cff3adc0"],["/categories/Review/page/11/index.html","8040231d5e2460a08b32903b75810479"],["/categories/Review/page/12/index.html","07477787478137699d02ab3abb45a026"],["/categories/Review/page/13/index.html","61b4828b1e33b50360c4bf76425d1ca0"],["/categories/Review/page/2/index.html","735849a86b438a0535e2c65da353f8f5"],["/categories/Review/page/3/index.html","66032136c6f5a92714474655d782d236"],["/categories/Review/page/4/index.html","e2885df9123da690dc362296876e298d"],["/categories/Review/page/5/index.html","c6f42918b403cd5f9d8cae6f54860b6a"],["/categories/Review/page/6/index.html","f0b9e0d3010e671499991ff22fd208cb"],["/categories/Review/page/7/index.html","7f0d407f997e2f6c82ae62d49f9cce63"],["/categories/Review/page/8/index.html","058ad30378b7d938295a1ec72314ab0b"],["/categories/Review/page/9/index.html","7f22fa124dbf3aa4d746194d7cb30e3f"],["/categories/index.html","bf4745dad1f15c10c0b7c8c9a2fd1dc8"],["/categories/日本語/index.html","c8dcb754358b3462442048088cb929d6"],["/categories/日本語/page/2/index.html","0363abb8050c3bcd16b9fe165458b51a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5c3c42c13963dda256d27d94883e4f45"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","19a45b7b9029ddae73e3656378580638"],["/page/10/index.html","21c203744f409b8ded8fe1d7d4040d7f"],["/page/11/index.html","b4ae880f596a5b7fe26b0e034d6756aa"],["/page/12/index.html","656f4d15f264b732b2fe023d491666bb"],["/page/13/index.html","3e9f6981e26983882636695d2fa6b6a8"],["/page/14/index.html","94e1568399014bc872b55f5477538919"],["/page/15/index.html","b84611ed32c52c25960e5be111cdf84b"],["/page/2/index.html","c4dac279d130bc2bfcc46f07dc147268"],["/page/3/index.html","1c0b3cf390aa7095e7e6d9bd900e9b1b"],["/page/4/index.html","6886a8d2a5812ec07c7d686ff5842540"],["/page/5/index.html","3c09f3c2b825238741d571c2895e2fe8"],["/page/6/index.html","9dda782c7b4120ef043dbb9559753a2f"],["/page/7/index.html","dd24f450ea15a27a3c6cec8c42adac82"],["/page/8/index.html","6e1e4f579c8d20e4607a318344569b53"],["/page/9/index.html","3aa8a27a5e75f84b5b979b683e4b34d9"],["/sw-register.js","b22a7e34dc700fbe2b055d7583e4d302"],["/tags/10分作品/index.html","9bc4c5409183524644378d6bb8267d84"],["/tags/3分作品/index.html","347b9a4200ed792081367b3aa27bca58"],["/tags/4分作品/index.html","6e6e9c653c5b6e3a0e6f397ff2bbc786"],["/tags/5分作品/index.html","bb21c2ffef3b420949927753a69a6352"],["/tags/6分作品/index.html","43b515abccec9aa2b6dd0287848d4f60"],["/tags/6分作品/page/2/index.html","c54e47f370b42ee7cb9215c9e456c62e"],["/tags/6分作品/page/3/index.html","f15a27220d970b7c8b1544d8abc0a5cb"],["/tags/7分作品/index.html","80b40ebc9cd7b6c4da9d8c45fd4d6da3"],["/tags/7分作品/page/2/index.html","49137193bd71c03aa2c98043ffa95ee3"],["/tags/7分作品/page/3/index.html","eb3d8148bc3c9ad71c75b1e3c5a30425"],["/tags/7分作品/page/4/index.html","f185fca99a1d82ecfb74f42d342d8ec4"],["/tags/8分作品/index.html","42a04c4e4b4b7cc747ea8348123556a6"],["/tags/8分作品/page/2/index.html","b79e3bd0787b0f5555fb3f9880760bff"],["/tags/8分作品/page/3/index.html","e71a340601902219cf28641829bbcfbd"],["/tags/8分作品/page/4/index.html","97a352df58575f0065888f6e9323d287"],["/tags/8分作品/page/5/index.html","0113821ca8eec49ad17eae570e5c2fc9"],["/tags/9分作品/index.html","11c6294b74ab0eed395ccd57ec9b3c39"],["/tags/N5難度/index.html","cd781b629b6431676d0b0ddf1ed11450"],["/tags/N5難度/page/2/index.html","6effa197c291d86ec977928be0380e0d"],["/tags/index.html","78ea7a062383afbce1327771afb257f6"],["/tags/アボガド６/index.html","c8d2c72f5ed9732d2c2e90a1a2998ee1"],["/tags/三秋縋/index.html","bedc6779c7fe5d042c87fea71d39785f"],["/tags/中國武俠/index.html","ee1014c9732716b66832428cdd0c3705"],["/tags/中國言情/index.html","de9cf3675b878f52f18f8782722fe2de"],["/tags/二宮敦人/index.html","68759f1b954868fb96173b8d828b9660"],["/tags/人性/index.html","b554f725045ce583dcc8f5bc4e0e1f8b"],["/tags/人際/index.html","42128d727b1aa44d6c08f9e1b3da1a0d"],["/tags/住野夜/index.html","fba742de3b5a85985c30ce7baf8be663"],["/tags/佐野徹夜/index.html","41031a582c6848e03d38ae2136752008"],["/tags/努力/index.html","dee73337d32f47a9b6688b9e42a952b4"],["/tags/動畫/index.html","011e5606b65c9b3a7551309425b59a2a"],["/tags/動畫/page/2/index.html","de99145a997527d0f9a2fc8b489268cb"],["/tags/動畫/page/3/index.html","59aed08a39b24a5600b4d10a83198209"],["/tags/動畫/page/4/index.html","506913254f0fe5c83faf5b3827e34a58"],["/tags/原諒/index.html","86776643dcb6b72d7484730cbc702f3b"],["/tags/反烏托邦/index.html","89dfbbe1757a9dab1a045d41ae9763bb"],["/tags/啞鳴/index.html","4a44d75e45b49b11159bd7a70c9bbd3a"],["/tags/喜劇/index.html","0e6d63d749a39d7d3f3d47a46a80b6a0"],["/tags/夢想/index.html","a97dc9ea9f6bee6e43b1dcf8438e7011"],["/tags/天澤夏月/index.html","8d4207f5dddc4b4409a7c688614f5c17"],["/tags/學習/index.html","da0adbc13564a4b903c1cc407fc64a2a"],["/tags/學習/page/2/index.html","a9aa5036b0aa1905f8fce514b5588ad0"],["/tags/宮崎駿/index.html","b4102f5139aaf4064ddb417a9260b30d"],["/tags/小說/index.html","821391c9f6b094f9f064fdd690e9fbc6"],["/tags/小說/page/2/index.html","cbed1196b1d705722948f85b1ae5589f"],["/tags/小說/page/3/index.html","0bbf110856b71888516d6a078d6bfaaa"],["/tags/小說/page/4/index.html","79a2bcec3b89245eef5d84de023ef9b4"],["/tags/小說/page/5/index.html","fd7dd0d17a5a753f97839deee03ceaf9"],["/tags/小說/page/6/index.html","b3284a193ef645327551496ba74d4c83"],["/tags/小說/page/7/index.html","92d4034ae25e4ecc8cb4064e59debe2f"],["/tags/平淡生活/index.html","04be9483a0b58398f293b54989434062"],["/tags/幸福/index.html","472d35cc517ea5181a4f3f865a2b922b"],["/tags/志茂文彥/index.html","a6a1eb5d48a96df13e3223f721c4a3cc"],["/tags/愛情/index.html","594877b9fa48691d500f9cbbc9a001a4"],["/tags/愛情/page/2/index.html","479d12c27756f6744d61e6ae32c26053"],["/tags/愛情/page/3/index.html","5d9773e2684c125b112d65a7bf6fc7e1"],["/tags/感動/index.html","9d8323e4d2f36e9d45c1f656f8809909"],["/tags/懸疑/index.html","1a46a306f22deaadf44865ad84a69f1c"],["/tags/懸疑科幻/index.html","ce7023ad44dd591c46ab0bf5c2f3e2aa"],["/tags/戀愛/index.html","5b77f14840285b224fbc22db4de9b6a0"],["/tags/成長/index.html","80bd8c4a3f5564f15197314479074a7f"],["/tags/成長/page/2/index.html","5cf0f119b51c13028046f0a4c4e45fc4"],["/tags/戰爭/index.html","e585d834b16bdb262c2788c7f0f5dcd1"],["/tags/推理/index.html","6a805b047d912657c9a7ec248a5d19d3"],["/tags/搞笑/index.html","885bf5fa1aa39071c6ec9579a4312181"],["/tags/救贖/index.html","a29eb1d9d8200f2c0c522a8cb341d680"],["/tags/斜線堂有紀/index.html","f0bc33c3f3c2645be4d5124576446796"],["/tags/日常/index.html","18b5e115f5229cb5049218e9f801c247"],["/tags/末日/index.html","b9dbc3ae0190fd81f78a3fd7d3afcb4d"],["/tags/校園/index.html","6fe57ca500751d4d503018c19297c488"],["/tags/武俠/index.html","2cf511734b2b039c976b679f3c98298e"],["/tags/武俠言情/index.html","ad6cda29f7ae81b34f39847b1d5c9336"],["/tags/漫畫/index.html","4235b6acdb0a271b7ecfd3e80a5dbffe"],["/tags/生命/index.html","a9a3c25d8477218c5b7b7e97e1a0acb3"],["/tags/生命/page/2/index.html","ffb8b033ec92493f91036e56fb728a74"],["/tags/短篇/index.html","be74b3559b731fac0610b5f42906127f"],["/tags/社會/index.html","84fe54415c1679d6d46c7aa7b8f74b8a"],["/tags/科幻/index.html","f0347c43ef5740e48752938b0c5cb924"],["/tags/童話/index.html","41a3b1c0db5f7f26dbc46102f8cc1875"],["/tags/競爭/index.html","eecde101a4f5c2197cd7e90145136fb5"],["/tags/自我/index.html","9972996ef36fa4b0ec85a3a52638872a"],["/tags/自我認知/index.html","216dbe2d96cbb3b201b2e4a112ff84f0"],["/tags/葦舟ナツ/index.html","e68fc444bfae32db8e206dda28e8a20e"],["/tags/藤萬留/index.html","2abbd77001176aa9be1e3ad99e60be2f"],["/tags/親情/index.html","849f2211c2c806a48026781aabed5fbb"],["/tags/雜項/index.html","ee56763199a34d2e0e41bc4f5e87d5c8"],["/tags/電影/index.html","dd06736f6a1b79ef905b12aefb063770"],["/tags/電影/page/2/index.html","362b8e8c70237935c2aaae21a8c86407"],["/tags/霸凌/index.html","199caabb0f122b5bc5cda5339ad62d7f"],["/tags/青春/index.html","a668aa9ab2907e446ab666b47e515a55"]];
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
