/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","ae0a21f4b6e744e677243ea6554881c4"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","0aa4ce6d043402ec8461da4ab895a14f"],["/2019/12/25/Review/無法計算的青春/index.html","cec6471a38f09c8f8f03b5cdf1317ee6"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","167eaea6780987e241c24b434f7692a0"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","bc8ac30ebce0825f3a82c4182eefd8ac"],["/2020/01/19/Review/下雨天，不上學/index.html","63e47e587ffaaae6d2ec0b5daa89e433"],["/2020/01/26/Review/三日間的幸福/index.html","9629514c96b356d79f8152922630278e"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","6d4dc18220f51841ffa81112db5babe7"],["/2020/02/09/Review/青春期超感應/index.html","46f5ad714bd18a9e6edac99fa566e3a8"],["/2020/02/15/Review/又做了，相同的夢/index.html","a02e4b77cab75dac1cd4f821fc9568ab"],["/2020/02/22/Review/回憶當鋪/index.html","62ada3eb5c0b9f14b8a88612c0868d8c"],["/2020/03/22/Review/不適合自殺的季節/index.html","eecf08409ae374f942f41f7172d00abf"],["/2020/04/26/Review/我們都無法成為大人/index.html","085e2039b939bc24f587a4229942956f"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","bbad7a8e5a7c431d56b19f266b0e9f15"],["/2020/05/17/Review/人間失格/index.html","8fe0a2227804db90d095273fd187ce24"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","cb215b31ccc0388127e47dc929a65abc"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","96e6588c072a79f1b2274c48d90243b3"],["/2020/08/01/Review/銀河鐵道之夜/index.html","ae5100e84e9dce806ddbd35a4efaf69d"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","cf8bafdde205c857bcd41e5ed6c1a926"],["/2020/08/16/Review/15歲的恐怖分子/index.html","865b0b401bd47f318590e3154add75ef"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","c7f816ffc1b89753d879676d96cc7e11"],["/2020/09/13/Review/羅生門/index.html","7acfce7db22167d736511bfa853153da"],["/2020/09/20/Review/闇夜的怪物/index.html","459d6a646a05e79a8f5885fbd03fd710"],["/2020/09/27/Review/14歲，明日的課表/index.html","cd8f0815653b31a63ba97e842c79b196"],["/2020/10/04/Review/致十年後的你/index.html","080d32c5470cec51585d3a8f2ebc2eb8"],["/2020/11/08/Review/滅絕之園/index.html","e14739a2ab3b608a4253c2838f1bf88a"],["/2020/11/15/Review/將愛拒於門外/index.html","f6010606814d4377965ff702e13ba109"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","1a6ee936b1f8b43dd8cc41aa4aa89bb0"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","513902aebe2973ca7d1e5f5fe4afb4a8"],["/2021/04/22/Review/道印/index.html","b81d322467f790c149ca460b53ff892e"],["/2021/05/03/Review/戀入膏肓/index.html","90928981b7f109b6bbf5f9fcffffc634"],["/2021/05/10/Review/Dice/index.html","3d4732809fc84787acc5c9fea982e756"],["/2021/05/15/Review/魔女之旅/index.html","c566dd904600051aac38de499bbe0893"],["/2021/05/28/Review/戀愛寄生蟲/index.html","2280a6876ee0a47a4013af74cf8b9877"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","1b148f58f0b037b83249f4609f585778"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","c4aacccf89f4e75d25b2c71d7c4addb4"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8c4b8326acbbc950cfbd1f013636c257"],["/2021/06/05/Review/流浪的月/index.html","c725305d3f720997f4d46420d2126d66"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","9d1cb3f3fece23557e0267683291623c"],["/2021/06/13/Review/第一人稱單數/index.html","cd5e3c3a7960c6d16e215fdc90464945"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","13661aa0c9bf8ab54bf9704f52d7f601"],["/2021/06/16/Review/願你幸福/index.html","5d4792c0d891440c0bfcf3d37d1d9dc4"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","bc5f8c6a7ac875a8094f5137d7e5c1c9"],["/2021/06/21/Review/神隱少女/index.html","784811088d312d1e39957dae35993194"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","aad6fa2939e587231c83d4012f7d3461"],["/2021/06/23/Review/天空之城/index.html","ce76715793f41639ab4a3b264d645587"],["/2021/06/24/Review/魔女宅急便/index.html","2530859967d679ed9e733102a83ebc46"],["/2021/06/25/Review/借物少女艾利緹/index.html","2524640f98a650e927537c64ad79fbdf"],["/2021/06/26/Review/魔法公主/index.html","ac5b8a23496c298103ee03f8004c07d1"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","55ce19e28bcef1851380aea52fe5eb9d"],["/2021/07/04/Review/飛雪與劍/index.html","b6108846dfebe4a3d88ad1b97ed67af7"],["/2021/07/09/Review/地球防衛少年/index.html","81de9cbad171dde043974ed6f0712bcc"],["/2021/07/12/Review/Angel Beats!/index.html","0548da1c2c66c4aaaa279460eeb67cc5"],["/2021/07/13/Review/Clannad/index.html","6afb6ec055fcda2c6a9be2f577bb698d"],["/2021/07/15/Review/AIR/index.html","de66084b296392259d061f31b3c39c19"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","482d129e204d320fdb815f9b18bfb93a"],["/2021/07/15/Review/螢火之森/index.html","5eeb58accfcb578cbc11c23f88076193"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","078db7c08e05663cf9017383d8ebf152"],["/2021/07/17/Review/奇蛋物語/index.html","e5e6919c472220261f9d1112b846212f"],["/2021/07/18/Review/Vivy/index.html","7c944c87799efe4c2bed11458c718bf3"],["/2021/07/18/Review/請妳消失吧/index.html","24899ae3fa6d978662f1400e5dfdeead"],["/2021/07/19/Review/漣漪的夜晚/index.html","032acba614e704d61a24ebdbe702e9ab"],["/2021/07/20/Review/月色真美/index.html","27a4a2d59e8e207d6fe4819c52980bdb"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","f923fba9c15d378786439c974db4db8b"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","5c59dafcc8ca1c96cb0c7df96cec609c"],["/2021/07/22/Review/罪惡王冠/index.html","c46f6d1f8d2957e0ad878beb09adc8d6"],["/2021/07/23/Review/弱角友崎同學/index.html","c73fb4fc255fd14e7ea0ceccae6d9286"],["/2021/07/23/Review/惡之教程/index.html","9803d59124371b9cd331da683b4f16b6"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","95ad5d63d2e1dc5eb5a534c6e334537c"],["/2021/07/25/Review/魔王勇者/index.html","585225aa4fbae6967f96f56b99682bbd"],["/2021/07/27/Review/一年A班的怪物/index.html","169c654fe4ff9e8f5045bc4f52f868a6"],["/2021/07/27/Review/奇巧計程車/index.html","22f0adcdf27fa61bca52bbc276d3ecad"],["/2021/07/27/Review/專情的碧池學妹/index.html","8c4bfd35eb43869e1b420a8209c5862c"],["/2021/07/29/Review/只有我不存在的城市/index.html","e332a81d0a92d3375bddb92135997faa"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","8b6dd7788a8b85a18973df7862588be9"],["/2021/07/30/Review/可塑性記憶/index.html","ac969014ee9bd9158e440d731fe9a600"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","63a34974649ed1aa9152f9d35044bda5"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","0b2fba3f06e4586727bd98d804a964c3"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","63f0dc5869ef61d2da6caed36f5fff86"],["/2021/08/25/Review/清戀/index.html","b35f5142c50f9de98b625520d993a6e8"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","c8a82922f234dbfd84aed7d7e5938ae6"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7246dc3ef7a5074597110c5b978635b2"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","e23fa5c92c49e09557cade41f8542f69"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","157180adad39850572d17b6efe951f8d"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","7dcf34053370390f3b151b9cc5776f32"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","e121696c5463e05fc8f021cd0008fb8f"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","15140a2e81dfb9ec68227bc49338e3a6"],["/2021/10/16/Review/龍與雀斑公主/index.html","f142da6799d8d0c08011fe4570941e2c"],["/2021/10/19/Review/孤狼不想開後宮/index.html","2fdca51d2f487727c51ba2093a3bd548"],["/2021/11/13/Review/徹夜之歌/index.html","8096b5f8a5ba811725fc8b907067e46a"],["/2021/11/24/Review/武煉巔峰/index.html","f495b962085e7f2372cd8edbeed8a76d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","6f4b5a3f853aa0047f807863da7f8d6e"],["/2022/01/28/Review/神醫凰后/index.html","e40175615dcad710e09d415d9a99e77f"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","d3d5428b42c26622705991b37a62bec6"],["/2022/02/13/Review/夏日幽靈/index.html","dcc0c6444877edd37d84a367bf178739"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e4a7a376f2174aadb0e03da5ffc3a94e"],["/2022/02/26/Review/賽馬娘/index.html","a8771b72da501038519ebcc289d024d8"],["/2022/02/27/Review/大欺詐師/index.html","e973add4c767dbb5fabb16c558326e50"],["/2022/02/28/Review/前輩有夠煩/index.html","0d0a008feb0d96d0d09914406a451dfb"],["/2022/02/28/Review/碧藍之海/index.html","78e49538220d505630a470d07cad07b8"],["/2022/03/05/Review/落第騎士英雄譚/index.html","9f4dee93ba32b1448b7800a622b4b82d"],["/2022/03/06/Review/Another/index.html","03c2405e36e3aa9f5298060652059175"],["/2022/03/06/Review/入間同學入魔了/index.html","f7f42a2bf7d058aae5d51ec830d66800"],["/2022/03/18/Review/再見宣言/index.html","145827aacde8cddd224e45a55aa191b7"],["/2022/03/23/Review/生若冬花的妳/index.html","ac0e2f8a3c8509fa313dde0007c5b8e8"],["/2022/03/25/Review/天之弱/index.html","ba35a68ec302a92ebb421d64597b7f5d"],["/2022/03/31/Review/滅了天道之後轉生/index.html","718d1ce67ed617fb14bb398fd437e591"],["/2022/04/30/Review/泡泡/index.html","1adbea52f3f7b9faeb6ef8581bcd121b"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","f451b16b0ac408bc8566c99667042f8e"],["/2022/06/13/Review/偵探已經，死了/index.html","3cae6f71f3ded5e984a44ce0db3308af"],["/2022/06/14/Review/黑色子彈/index.html","7f8f891e677048bedb6b4a6c6aa66f6d"],["/2022/06/15/Review/黑白來看守所/index.html","ce28f530d4ada612fb2347dc9f6320ff"],["/2022/06/16/Review/虛構推理/index.html","b694c9e7be884bba2b2bed1bb3d1cb50"],["/2022/06/17/Review/戀愛與謊言/index.html","852f3aafcca97aff1bb50ddbb9da77d5"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","0004c42aa7f9e93e30f649ee26ec5803"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f970393a4c5e8ece079afba14660013a"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","fcf8019be1bdc1f5efb2df7e94acee0c"],["/2022/07/03/Review/Hello World/index.html","67a821f3c803f941f91e9f94355790ac"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","1a0cb29ae2a84ca15f7f812218cec6c8"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","c0baa0a70064a66e1e39ae9b01043c59"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","4b6d2d1ba2f6b8c2dd126246a7d50abe"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","d32f428626e4606a1b9d26d5c3274215"],["/2022/07/16/Japanese/動詞分類/index.html","3ce7844a70464d391fcb8f5105824c5a"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","639222b60111b1dbf8b95ef61facb02a"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","197a5d389031b64ee6e43beb335da39c"],["/2022/07/17/Japanese/音便/index.html","7b4ed6f0cb60b23a7e6ccd9dd6147c42"],["/2022/07/18/Japanese/動詞 時態變化/index.html","297071e0b9051bc8e50fcfcf962aec3e"],["/2022/07/19/Japanese/助詞用法整理1/index.html","da6d5c5860121c8724ac0a0c600b7186"],["/2022/07/26/Japanese/助詞用法整理2/index.html","11693a446cc867b3ffe1ba59fdf7880d"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","f4f7e75b4d7dc92d04192b1834715314"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","24e33898a244d8a1e7b16e2571067fdb"],["/2022/07/30/Japanese/疑問詞/index.html","dc5cc60e2626477140b30295410abd06"],["/2022/07/31/Japanese/助詞用法整理3/index.html","52b2c49da55c72e874b94f3e950fd178"],["/2022/08/02/Japanese/副詞整理/index.html","c7642b59bf0c69acc52569d8ad15c8f6"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","75b531363823dfc52038b2c428a29221"],["/2022/11/04/Programming/Data Structure/index.html","557ec59e4c16d55fc62537982b1f9c2c"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","7efdcacf2ca9172dd259e2b9bc7829fa"],["/2022/11/22/Review/組長女兒與保姆/index.html","e61b95f81149772200a49c133d57dde4"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","cac9ddd080fc9c3c6fa53c0ddfda8f27"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","a67093986c2e2c25a434974c623bc68a"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","8583239ad4728b751e9d2b91bbcc23d0"],["/404.html","9325afce3608167308ebc4fa773ba6bf"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","39c3325df1d7ae35bcea169273e2a88b"],["/archives/2019/11/index.html","3fffb20119d83e84fad9b8dd753d7f3f"],["/archives/2019/12/index.html","6a166fdd1f4aef828abdb86f14818f21"],["/archives/2019/index.html","d0dc3eddd0290a11bc6b905366643bcc"],["/archives/2020/01/index.html","bd9b7be8e67d70d56f9deb5b0b08fe38"],["/archives/2020/02/index.html","9df92e384b757fa2935cc3e726bcb0cd"],["/archives/2020/03/index.html","0e73e6f119830d7e7d636254e81c39d8"],["/archives/2020/04/index.html","da5348fa736a1c3a0d3380f31d8f6067"],["/archives/2020/05/index.html","3ff14234dc8ab6f2c325ee84d7fea6ec"],["/archives/2020/07/index.html","1ff0bf2b3a4f87d2346d61de2d404cd3"],["/archives/2020/08/index.html","55f861abdecc9493f8cc929f005eff8c"],["/archives/2020/09/index.html","142b2caae38f6ba689a09f6be67f4ac5"],["/archives/2020/10/index.html","691924dd3b5593543e6e97c8a8dde88b"],["/archives/2020/11/index.html","90dc443adb7f2e4441da2c47d95451d6"],["/archives/2020/12/index.html","a0a252cd1a45f9c75ab060f1f91c4a2e"],["/archives/2020/index.html","471709098e19f44a6af6e0804444520f"],["/archives/2020/page/2/index.html","1e4b2b61250f4d184859dcdbc4f29c97"],["/archives/2020/page/3/index.html","eee81071b6a2d415797aeba239ea29cb"],["/archives/2021/04/index.html","4872853c6ea1c008fcf21df15a849f20"],["/archives/2021/05/index.html","f7ad536af2ce799fa25d4a06594d5e50"],["/archives/2021/06/index.html","4f0bfd98ddf9abb88a7e8aff20fdf311"],["/archives/2021/06/page/2/index.html","11b9ef852e378b815d10032758cbf448"],["/archives/2021/07/index.html","7b387c7129179b670c7be09d19efb658"],["/archives/2021/07/page/2/index.html","38255528f6222704cd5a181d46c5ca15"],["/archives/2021/07/page/3/index.html","bca3d0a5ea9ba135d865f77586cc0ad6"],["/archives/2021/08/index.html","87a6315650441bce7c882f80c4467fb8"],["/archives/2021/09/index.html","a12513c8f9288b68597cb22e957bba32"],["/archives/2021/10/index.html","cc4d88cfaff60beb00e9e3ae8be2db67"],["/archives/2021/11/index.html","e7806553355cd16d350486cdfa0f94ec"],["/archives/2021/12/index.html","ebe329743d8e2cedbb629b18195fa082"],["/archives/2021/index.html","28fc2695368b073491b03ecd4a86f752"],["/archives/2021/page/2/index.html","0cdb7b41232b351ebb81547eb94897b6"],["/archives/2021/page/3/index.html","42766b9843f9e40239dcad4096003978"],["/archives/2021/page/4/index.html","c1c3ec5ded0474f96869e8f6cb94cfd7"],["/archives/2021/page/5/index.html","a48cb6437861dad2165fb605fea355fc"],["/archives/2021/page/6/index.html","3864eb66461571d874ec69658da83e1a"],["/archives/2021/page/7/index.html","3be60d4c62597297f8473fb7792e62a1"],["/archives/2022/01/index.html","b9b8a972197e2888f64ab472da40eb4d"],["/archives/2022/02/index.html","ec9b79078a830d0f7edf1fcc7ac103a0"],["/archives/2022/03/index.html","9e8f6e8fb83cf477ab049d96bc6f70ca"],["/archives/2022/04/index.html","44fe6ff207fe3b2041c538128aa47b14"],["/archives/2022/05/index.html","528385dd489d75c1a34829b9fd5dc9e4"],["/archives/2022/06/index.html","86f9e38f490c2daeb65aa84a107d7195"],["/archives/2022/07/index.html","0ca4b0b02de5c3bd5aac6e202e1bb917"],["/archives/2022/07/page/2/index.html","16bc1c0e3c2e7eb75829aa7a52abf362"],["/archives/2022/08/index.html","4514d49503423221feea69c515660acc"],["/archives/2022/11/index.html","72abf9244aa992a82564d8b5df360860"],["/archives/2022/12/index.html","8920ac843f4ffea60df420a44781a88a"],["/archives/2022/index.html","ddffe3d316b2303d71753985e240eea5"],["/archives/2022/page/2/index.html","d038d7a4283e98c714c18e2d9652918a"],["/archives/2022/page/3/index.html","5ac85491395696a5e0579be8f98f88ae"],["/archives/2022/page/4/index.html","d189e83252b53fe02eb59f5496516790"],["/archives/2022/page/5/index.html","ae3f5472e5746fcba25dbfb0d4b1b47b"],["/archives/index.html","4df907472f6aeb96048e3a593bf674b0"],["/archives/page/10/index.html","e33c1904034484cdf6b2fced2ab36c7a"],["/archives/page/11/index.html","7fb76a5e2688290d92ec24edf4064bb2"],["/archives/page/12/index.html","6761210e86ca8f68ed0ea4d4653bc4e6"],["/archives/page/13/index.html","f72b946e65fef473fd81cd72bab9f4c9"],["/archives/page/14/index.html","538010b1aa9d30d19508db0afeb5d99c"],["/archives/page/15/index.html","4efeb86060f39203dddc01b00a9606e6"],["/archives/page/2/index.html","3a0ce03777f45063ade123704233b7f2"],["/archives/page/3/index.html","1dfc505ba5b50b7111a497475d954206"],["/archives/page/4/index.html","6b0978a3efa5859eed04674ed7eef6a7"],["/archives/page/5/index.html","4154ad0ace64965a7b55e6f5d734b83e"],["/archives/page/6/index.html","d787cd1f444d4cfe2f4c8b27a28a06a5"],["/archives/page/7/index.html","e12266d53e5fdd9ce61fed3c7dfe4bd8"],["/archives/page/8/index.html","313793e7089641614a0801a68e65e915"],["/archives/page/9/index.html","c637ed5a360a3a82991fc41d0f74a93e"],["/categories/Programming/index.html","c56d2596055ffde1433aa99722d71315"],["/categories/Review/index.html","7e552b461ebb1786040d09966cc13204"],["/categories/Review/page/10/index.html","5c61cdf10ad9e56902a41d8aac9a5d2c"],["/categories/Review/page/11/index.html","86bd121be2c53df8fc9ea9f6f6525dd5"],["/categories/Review/page/12/index.html","1559e7ac74f605a00ef17edb7cbc9191"],["/categories/Review/page/13/index.html","b617a290d578a3106e1d7f47afc39816"],["/categories/Review/page/2/index.html","103373d52daa92eef6f48cc5ec77766d"],["/categories/Review/page/3/index.html","baffb3d78364728eff1b3de4fe6f0e85"],["/categories/Review/page/4/index.html","f09e6c6e5f698027ad9889a4b0f45af8"],["/categories/Review/page/5/index.html","d8212618cb4acf028455707a4b45a467"],["/categories/Review/page/6/index.html","c28285180ca9de3a08aa54d96bc7a022"],["/categories/Review/page/7/index.html","297a57e2df56b1e2e70054e7c5e8d869"],["/categories/Review/page/8/index.html","a99ac04b23edea6a6228e14e7538a7eb"],["/categories/Review/page/9/index.html","8f2fba8733ba9dac7807eb99556d58ee"],["/categories/index.html","69849438ce8d4c651fbfcfb71b48e089"],["/categories/日本語/index.html","3b20823c3a8df676cba3cfaa97d9ca26"],["/categories/日本語/page/2/index.html","d73b4a9f6ff27618ceade8ca31f0be61"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","36ca5e8d098c7aa0d9c2d393bc216b8c"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","6d52c8b4b679216ba8ebc12ddcef3ac8"],["/page/10/index.html","fcbab3e7379e99b97810913d8ae9d36d"],["/page/11/index.html","8357a4b4ae2474e33a8a3756b78a53f9"],["/page/12/index.html","87beaa60dd1a837928491305099116dd"],["/page/13/index.html","6dbbc63115181bb12a855de6a2c5ad76"],["/page/14/index.html","ebca046d0d469975c3fc009a0f56e35d"],["/page/15/index.html","cf8d6c3b264648c0693cafdfb41a438f"],["/page/2/index.html","15ab520e226de561b845d42b868d98a2"],["/page/3/index.html","e4165b2fe4ceea2cb6efb5d8c3ff62a1"],["/page/4/index.html","48ead48006c6d78655add0bc9cb3e1ef"],["/page/5/index.html","fd8017851fb66892e8dbf2e3231c4189"],["/page/6/index.html","5e916d35b94cbce1f87b346a96606c0b"],["/page/7/index.html","3a8e2864811288023d6251dc53de9a52"],["/page/8/index.html","95bade08b5244afe1b182c0c5f8efbdd"],["/page/9/index.html","a21139598c9fa18d4d4091186ca19bdf"],["/sw-register.js","4d609d31a4e26f99d23a9d9155833bd4"],["/tags/10分作品/index.html","e5de6b9060522e278339b56eceab9f30"],["/tags/3分作品/index.html","abaf56b68d96928605af7a66d85fd70e"],["/tags/4分作品/index.html","bb4e19ec6ff6fc7591b8b5f359e6c4d8"],["/tags/5分作品/index.html","afe0f167205d12265a75b988904d18ea"],["/tags/6分作品/index.html","6e970dbd4b7049956437a50f1fdcb717"],["/tags/6分作品/page/2/index.html","dce0f82fdc15ee213c54f1254e45b5e0"],["/tags/6分作品/page/3/index.html","d6e18d802c62fc9a81dc7aa18b2d663b"],["/tags/7分作品/index.html","13d3928e199a8ab4373165c0090b8ccf"],["/tags/7分作品/page/2/index.html","e6356a616e3af793167572095c75a25a"],["/tags/7分作品/page/3/index.html","9aef43278a8e367fb50968b417719a32"],["/tags/7分作品/page/4/index.html","fb628d45e720714938d3f377f430615e"],["/tags/8分作品/index.html","8a017f40281e75ed7f042f83bedb48bd"],["/tags/8分作品/page/2/index.html","33da070ea42a470fd4bc07e806e1d6a2"],["/tags/8分作品/page/3/index.html","8a6d5097c27b863a9c5bcceaf38221fe"],["/tags/8分作品/page/4/index.html","fe1d6da72cd75320b7fb1530e1f03a31"],["/tags/8分作品/page/5/index.html","2efa90cecaf670cc04cbe45072c17087"],["/tags/9分作品/index.html","ed6fa9d6cb88eeb20e7db69bb94e917a"],["/tags/N5難度/index.html","e9fec141ebc618ad42fd77050f31c7e8"],["/tags/N5難度/page/2/index.html","2e09274c3d0047b6712fb8a7d51d10b5"],["/tags/index.html","0866d02878f4adcf574610510333f51a"],["/tags/アボガド６/index.html","a820bff6eba15547028bbc2f9c89f047"],["/tags/三秋縋/index.html","c680b5bd73419c58ee65e3200dde596e"],["/tags/中國武俠/index.html","a42476e411a08ce14c195dae65752226"],["/tags/中國言情/index.html","d8b2c095f600f7dd2d7c7bc2a273efaf"],["/tags/二宮敦人/index.html","166d377076bf10543632f6fd183cc92e"],["/tags/人性/index.html","3bc3ddf684621d4485ff3d1e1ad0cf0b"],["/tags/人際/index.html","1945f26b0872539b68fd5f32dcea0198"],["/tags/住野夜/index.html","3cbfee30446fc33234b7c5ff75ad90a6"],["/tags/佐野徹夜/index.html","f8bb3ba2bfe4c3755a053626e291936e"],["/tags/努力/index.html","a2af5d1f6e4072a72520eb27fed040af"],["/tags/動畫/index.html","6cf9393c431c396cbd17739e8b2216ab"],["/tags/動畫/page/2/index.html","f7e5d186dba3a431fac57cc6e9b7c432"],["/tags/動畫/page/3/index.html","b7751975eef8adcfdb0c9bae9f5c9713"],["/tags/動畫/page/4/index.html","4d952a1d15d6937c52e03a490ad4a686"],["/tags/原諒/index.html","0bcf44a73c323c347046c6872fc2ba11"],["/tags/反烏托邦/index.html","2454060af7b5ef1d031b660eb9f068bf"],["/tags/啞鳴/index.html","fdfbbf5379af814e61a879b7ec24decb"],["/tags/喜劇/index.html","0d4398998ceb70a48fa9ecd6e4e1c0ae"],["/tags/夢想/index.html","37b8fdc7cee5bdd104782314c4b1c53b"],["/tags/天澤夏月/index.html","11a60d0f6f11bcc7035df05dac511725"],["/tags/學習/index.html","863b7d5a847866396b42e32180b51e4e"],["/tags/學習/page/2/index.html","4fa2ba47821cc6203eb4e82079e7445a"],["/tags/宮崎駿/index.html","b29cdf6246a2c1a3c453842d4b88cfa0"],["/tags/小說/index.html","649c49e68d786232446a6c8ee10de262"],["/tags/小說/page/2/index.html","c51fe5b5889ae3282019d5ed54074127"],["/tags/小說/page/3/index.html","fbfe741d7bbba6b2e8c3728a2dfb7152"],["/tags/小說/page/4/index.html","0084ed1686f93c60f3e6c8d6abd1b718"],["/tags/小說/page/5/index.html","1d04fc6d85ed52b2cab148b0ce504840"],["/tags/小說/page/6/index.html","ae03423224890d7bbe8e7c09a151d9b9"],["/tags/小說/page/7/index.html","59f1b72b5c8790f709b36ec305fe70c3"],["/tags/平淡生活/index.html","23a7f0bc1e7275b552c5dd29b2f3a2fc"],["/tags/幸福/index.html","7c4d16d0c47c9fb419f7174f35fd9230"],["/tags/志茂文彥/index.html","662347daecdc75a39f71017acf114f12"],["/tags/愛情/index.html","33accccc4670e832ff80092eab80b4d7"],["/tags/愛情/page/2/index.html","27e3094441125ec70c2fbbc246785716"],["/tags/愛情/page/3/index.html","481164a5e4a9d0e8aa3405278392eb56"],["/tags/感動/index.html","cd88f10bb89a81a500d9a50b4ee2f566"],["/tags/懸疑/index.html","10fb90a54e360ab483ed1ec18e7f5b71"],["/tags/懸疑科幻/index.html","347c7f2457080ae429657aee777314fe"],["/tags/戀愛/index.html","10db8c995acd8a4a1d0801345ba5dac5"],["/tags/成長/index.html","8e92e85f6bc9f124c8439a8a317ea608"],["/tags/成長/page/2/index.html","c6fa1b81e928b686776285d46690bd2b"],["/tags/戰爭/index.html","957342c1ab6e731c98b32a48d7f65c8f"],["/tags/推理/index.html","7916aa889b33c569d00dc25a54ada498"],["/tags/搞笑/index.html","0fa22028abcc2b07a7687629b134b195"],["/tags/救贖/index.html","e90f377fcf9f6659544824136a7e189a"],["/tags/斜線堂有紀/index.html","6efc352012c6f36401077fbc1f4c1759"],["/tags/日常/index.html","6d57409f152d038e3940806141e37b4f"],["/tags/末日/index.html","7fbca42ca1e0cd0338c067f7decec5fb"],["/tags/校園/index.html","84d4c45af3b21f955f547cd1e024a7d8"],["/tags/武俠/index.html","824aec4635755a8bbcfd8f37afe868a6"],["/tags/武俠言情/index.html","1a570acc54119562ca68f49a304ce161"],["/tags/漫畫/index.html","f203f0d7e1868287bfb2ae62a232f8bc"],["/tags/生命/index.html","5f9d2789443ab802344bd3cc8396d166"],["/tags/生命/page/2/index.html","b0f376a7f592e6a73d52d4b9ec289991"],["/tags/短篇/index.html","f38d2b07e3d1174df632e56262f0b91e"],["/tags/社會/index.html","627067405da078eda13582e973269a5c"],["/tags/科幻/index.html","9787b5a59c4c8491fc887ee5f59e12cb"],["/tags/童話/index.html","3cd5508abb245151d283a12b1fd7c5aa"],["/tags/競爭/index.html","0e2234c6e43655708a6843c3f9c4486a"],["/tags/自我/index.html","6f650330aff99975e0ddc2007c776157"],["/tags/自我認知/index.html","f96fa9b75be8556e3eac43edc0328e49"],["/tags/葦舟ナツ/index.html","cdfd476594d4eee18d67fe7be8422768"],["/tags/藤萬留/index.html","7f99d05f51a47df37eb2efe1e0e44b15"],["/tags/親情/index.html","118cd0b3a140ec5ed4ec1dc011f2a72f"],["/tags/雜項/index.html","f7c57495a198d7951a8fa5c4b552fa36"],["/tags/電影/index.html","8c062f5f1a6f2dd6a0470db65f95d5e1"],["/tags/電影/page/2/index.html","ea7c6b734352cf2404bbd9ff4dbfa389"],["/tags/霸凌/index.html","427687c54b047255ca37919f6aff2403"],["/tags/青春/index.html","1bd46cf00d90af445f0956a3e7ff9f4b"]];
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
