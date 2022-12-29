/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","6fec431f36b68b52d9df84d2f9c1b0c1"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","3e665ecf59a7c947b570442922eb7553"],["/2019/12/25/Review/無法計算的青春/index.html","45fea21c6d5d5866832ad1face188d11"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","5a1d533734c72c147e35fa6707a8cb40"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","9509cbafe531c892754cd1dcddda9778"],["/2020/01/19/Review/下雨天，不上學/index.html","495bd0decc050d4e8831839317a1088b"],["/2020/01/26/Review/三日間的幸福/index.html","0062578522fdddc73841be334e9b73c3"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","65414684d373d97d115ebbb9dacb0e0e"],["/2020/02/09/Review/青春期超感應/index.html","3a4ac3ad1d631e5f163293c4aa758c55"],["/2020/02/15/Review/又做了，相同的夢/index.html","f66f6a70c0a45ccf33de85fa67ca9812"],["/2020/02/22/Review/回憶當鋪/index.html","b96b96085d9c92c280b1d0a62c1fc89b"],["/2020/03/22/Review/不適合自殺的季節/index.html","d2457246db24170f73a14d2b9121d58f"],["/2020/04/26/Review/我們都無法成為大人/index.html","3b4e6629fe67974989dd44456e0f1958"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","3ca396e3c6a511f61353252a3e5c0f42"],["/2020/05/17/Review/人間失格/index.html","4a42b5f2e8d47ee3d11a3c69842d0ae8"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","964c6e6f3ff97e4be95e79713e2e2672"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","178da905accfaecce6f56e947a452f01"],["/2020/08/01/Review/銀河鐵道之夜/index.html","0af4e5187edac32316cd6e7451c2bba0"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","d362e743b9d9387a0c9f6817cbe3e55a"],["/2020/08/16/Review/15歲的恐怖分子/index.html","12ede11f3544df772d2555362746d093"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","784cbd98edb64e20eda6524cfc571126"],["/2020/09/13/Review/羅生門/index.html","a7e63a68813708b057f01affe387d03b"],["/2020/09/20/Review/闇夜的怪物/index.html","1838cb422146cdaad94c967d53e92a90"],["/2020/09/27/Review/14歲，明日的課表/index.html","e348c82030e2e37f34d1c01a61670144"],["/2020/10/04/Review/致十年後的你/index.html","99f2a9a90f5f7c75507f16a7945d5074"],["/2020/11/08/Review/滅絕之園/index.html","80fd1a8ef9c5d9e33fb5f0d5c2a16d65"],["/2020/11/15/Review/將愛拒於門外/index.html","fe34fde1523b646969b68a30fb69c9dd"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","3aa9f80892ca81e552f4847750ea72c1"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","18c7b1afdc353ae3df50e1157f9f3f97"],["/2021/04/22/Review/道印/index.html","e48f23a7481334b3695bf3cb46a838a3"],["/2021/05/03/Review/戀入膏肓/index.html","1febfcdd17d0f33ce8d9f0d2643b3f27"],["/2021/05/10/Review/Dice/index.html","5e570298f0738bf2befab299517f6f2c"],["/2021/05/15/Review/魔女之旅/index.html","d81acbf5948a66c7c2cc3f29cc1eca6a"],["/2021/05/28/Review/戀愛寄生蟲/index.html","6c0d92a6279ac3939e3ac2ba0468be62"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","40b681c2c7482a4abe0e04a5857bbd85"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","f15beb041037d03990c3e9c86e7b6650"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","e9959b77357fc174a5ff280ac7debcc9"],["/2021/06/05/Review/流浪的月/index.html","fecca2098b6016dac874fc44ae2e959d"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","e3e63fc2d8ab301821db53f88549cb79"],["/2021/06/13/Review/第一人稱單數/index.html","4770dff9dbde52fbc48d601107843b52"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","c435d8df7890b9d4cd3f867e1e63502c"],["/2021/06/16/Review/願你幸福/index.html","f67737a8b6acc0694deed4bd290d6714"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","233e4459e3c6a66a525c663ebada40a6"],["/2021/06/21/Review/神隱少女/index.html","e97ee432090d588675fbfe5ec7af0025"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","4c65cedcae264989dc4a555ab3e71bb2"],["/2021/06/23/Review/天空之城/index.html","d780525d3e923397fe9138cafc309ceb"],["/2021/06/24/Review/魔女宅急便/index.html","3ccff19fdbbe0c191dd6aae6a05cf9c7"],["/2021/06/25/Review/借物少女艾利緹/index.html","6336ddfe7170f03944ec009aeb4208fd"],["/2021/06/26/Review/魔法公主/index.html","b38d29cb832e94dbf72e7271c3c9f11b"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","9350c1a8a61fad33746117334a971f16"],["/2021/07/04/Review/飛雪與劍/index.html","c925293dbfa4ab4ec8b9b353b713a73a"],["/2021/07/09/Review/地球防衛少年/index.html","b0dcf88840bc5d98e3bd829dc74d3426"],["/2021/07/12/Review/Angel Beats!/index.html","18b7e4b76d60f12d6c04cce1b9683dbe"],["/2021/07/13/Review/Clannad/index.html","60a8ea42643c1079104de360d5aa221d"],["/2021/07/15/Review/AIR/index.html","3fe5dd6be8af70c47f46adb4b1f4ae67"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","a790962c4021aa0e7dcb3785523f7da9"],["/2021/07/15/Review/螢火之森/index.html","1284e9a8ea31084aeb53e33c57d47aec"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","b7ba9cddadda50a52afbbf3ecee46f8c"],["/2021/07/17/Review/奇蛋物語/index.html","0efacc376b0e8e89348802e86a8d1627"],["/2021/07/18/Review/Vivy/index.html","501906124460bf91a314889f9678d13f"],["/2021/07/18/Review/請妳消失吧/index.html","b85a3b8e9815bba280955bbd4b51d3e5"],["/2021/07/19/Review/漣漪的夜晚/index.html","86bbac1151da889acc86821b5d36ce28"],["/2021/07/20/Review/月色真美/index.html","96ee8868daec53f89f24816f601ccf71"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","35462be62c5fa0ade10e4b9c58de44ab"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","4a8988ae4a1d66862d2e70447c15f379"],["/2021/07/22/Review/罪惡王冠/index.html","d24b78530f43699a5defdf0ec8bee0fc"],["/2021/07/23/Review/弱角友崎同學/index.html","8be1b7652ec7c2043eb1d86733cc8941"],["/2021/07/23/Review/惡之教程/index.html","90943ef0f264a4971437aaefe3eb8dad"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","06642cb542309bd28c339108d37d58a6"],["/2021/07/25/Review/魔王勇者/index.html","9db66991599217347527bab0165cece7"],["/2021/07/27/Review/一年A班的怪物/index.html","62f84de38b6e68c6bf52746b269313ad"],["/2021/07/27/Review/奇巧計程車/index.html","3b740bbc52a28fdab4764c6d793ed6f3"],["/2021/07/27/Review/專情的碧池學妹/index.html","c91a32170606fd12e9b48bfb1d9bf77d"],["/2021/07/29/Review/只有我不存在的城市/index.html","d54c0256ebff08b6123bcb9b02e6d281"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2875832eddf6f8ba88d46999613b05ff"],["/2021/07/30/Review/可塑性記憶/index.html","42093425f1fdac08f24e9565df984dde"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","f97ac86e2be38b9e8ddf36ec437ca507"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","d9af8dd05489b68024b7aeddf847e689"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","cac9f8518a619de9185dee537c090793"],["/2021/08/25/Review/清戀/index.html","88cb3d15fd6ae755cc54736a17667c57"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","b00d98e0252c14e53e82deca734faa83"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","95da67bc46ebe24a1e1e835e3b5664c5"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","5b96367c8eb400ae30d5bba282ea4466"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","19cfa854f7a9b0e1580ec79c9b9bb4d9"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","461618e728576823bc883ccc8487c593"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","447892406c06bbe09ead06315e44ebc0"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","46b06ce296963fcba170980b7e0a3c0a"],["/2021/10/16/Review/龍與雀斑公主/index.html","d8390de6fd637ae9a9cb3c18ce363873"],["/2021/10/19/Review/孤狼不想開後宮/index.html","f7ba2b7220721169b28b9080cc3aec13"],["/2021/11/13/Review/徹夜之歌/index.html","932678df909cfee69fa3704f684322b4"],["/2021/11/24/Review/武煉巔峰/index.html","12d1798e340a10e1ddca6092cb6a32d0"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","defbd8ce7a369130bae11f208c50309a"],["/2022/01/28/Review/神醫凰后/index.html","bda8c81c598373e9d5a41c37caaeccbf"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","f25b6227a882a35256cc3296818839b5"],["/2022/02/13/Review/夏日幽靈/index.html","46a1371238272da5c477c3ed917a9340"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","025f9d3950575d78df2ae9e6d8407ee0"],["/2022/02/26/Review/賽馬娘/index.html","56c1afcf069aa79b22774458998cbbcb"],["/2022/02/27/Review/大欺詐師/index.html","1a1ca19d2ce5789f7e3c57b951256190"],["/2022/02/28/Review/前輩有夠煩/index.html","fffed821f98fe1ea7fd97f10bcf6671b"],["/2022/02/28/Review/碧藍之海/index.html","6082797247249863ab071670fe6c66d8"],["/2022/03/05/Review/落第騎士英雄譚/index.html","53bad3344f015d479a593d950112fb50"],["/2022/03/06/Review/Another/index.html","02f51c06ea1d67377f9c5ad4d54d0142"],["/2022/03/06/Review/入間同學入魔了/index.html","9cb2b2e83c4a36f5ba329c4db8fbd45a"],["/2022/03/18/Review/再見宣言/index.html","9a4f56ecbb683f6d1f9cf263481c3a48"],["/2022/03/23/Review/生若冬花的妳/index.html","ae4da1b25e916432ba76238dd07fc641"],["/2022/03/25/Review/天之弱/index.html","8451171bf1427f883f66074b6430d2ab"],["/2022/03/31/Review/滅了天道之後轉生/index.html","d55001c52527b94f8ca40c169c0c26c7"],["/2022/04/30/Review/泡泡/index.html","742626f64564b01e1bfe71a7120ade72"],["/2022/05/04/Programming/Dynamic Programming/index.html","8d32f770a8a9b1707b8b447c810f527a"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","3be363f0f8a66f57fab121817c8e7e25"],["/2022/06/13/Review/偵探已經，死了/index.html","cd35a4c2089e500fe50a5e3208025e23"],["/2022/06/14/Review/黑色子彈/index.html","6578c36e803a9f0d6a5b2f6c941a34e9"],["/2022/06/15/Review/黑白來看守所/index.html","c03b09d32adec6f1f69d8f4a0d6b782c"],["/2022/06/16/Review/虛構推理/index.html","d82b31cddf1fbc6c46caffceb4caed58"],["/2022/06/17/Review/戀愛與謊言/index.html","b39f7bb7d655983802e55212335263cf"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","cf34f5b0989c796ea20b41ee09badb73"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","7583846ea14806b00d29ade8e54bd928"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","8dcda8ec7ead666ca39d5f0228cc16bf"],["/2022/07/03/Review/Hello World/index.html","16e5c768af510080c34490f16dcf85f6"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","601a6b2fc156a9cdf0f572467216ee1c"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","76d3dd57aa1a89c27db4e97ea4c5b564"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","7224b1384fd90f1281d716835d61d794"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","b1d14572e7358302476e43f8fc9c43ba"],["/2022/07/16/Japanese/動詞分類/index.html","4e9123adf64975f3e3017310a6bc462a"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","ad9c6fe7cbc7eda74ecb0330c6e04f3c"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","43ea0b3c2dbcae8c34a340ab4a16880a"],["/2022/07/17/Japanese/音便/index.html","6e04e36460243de36b7ca72324f4052f"],["/2022/07/18/Japanese/動詞 時態變化/index.html","84b077ac28703fe3e5fe37e22cfb20a1"],["/2022/07/19/Japanese/助詞用法整理1/index.html","5c5102bf4d43e4e3f23893e7961b39ea"],["/2022/07/26/Japanese/助詞用法整理2/index.html","30fad24503280975c9a65039b4ea768f"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","3615b906766fb3f5025a4b7f26b56c6e"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","98f61babd971879e55da47397d2373b2"],["/2022/07/30/Japanese/疑問詞/index.html","c36fcb7d5a10b3ae0df49a2456c5af8c"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3058ab8b032d8349d510a1a1653841b7"],["/2022/08/02/Japanese/副詞整理/index.html","c31a483871b25a2350ec1ee3b3154e26"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","8059cc391a6852fd50c8d194bf9ca2cb"],["/2022/11/04/Programming/Data Structure/index.html","bb87f0d45d41ac0c96e26975239e2b03"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","a8d66a76b8ae53188ee9218ed5bfbd51"],["/2022/11/22/Review/組長女兒與保姆/index.html","d3ce60196813e8fbe60e7765757c17e8"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","cace6f7fd70b47ce9543351ea82c35f6"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","c7188406b5f9681bb08697cb7d5534c7"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","2d1fb406d5788791f8da943a0388a768"],["/404.html","d11277610335f650982067f39c1aa0fe"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","17bb9abc0c7edd05171cb6c3a0f6d6bd"],["/archives/2019/11/index.html","b4d6922b80c9943c4b7e885cf024da22"],["/archives/2019/12/index.html","9dd46d7c7959c78cde6d359e58912679"],["/archives/2019/index.html","c85a9eeec30e02b575198cb7f0fd0447"],["/archives/2020/01/index.html","3000dfe67e40f8e24971d27d78758d1c"],["/archives/2020/02/index.html","1df06256493f9ba560ad5c44455fcc73"],["/archives/2020/03/index.html","43f8c1c417c3328ccb1ac968b158d8a3"],["/archives/2020/04/index.html","108ccc91b9ec69e031e2111116d51797"],["/archives/2020/05/index.html","c1821b747c220e874b6541f8e006b13c"],["/archives/2020/07/index.html","20551368855d3bbb5bc08fc26a113de5"],["/archives/2020/08/index.html","b9f5480ef419d729174b2b801f2dcd19"],["/archives/2020/09/index.html","5d045bcbb92e4ea72b0f212d9eda3d7c"],["/archives/2020/10/index.html","1566dd341fdcb2f6498013d88e635d4a"],["/archives/2020/11/index.html","d70de891c98b88e2faced394497a4f97"],["/archives/2020/12/index.html","ecd832e71e38cce0d878db3785396e50"],["/archives/2020/index.html","41b6f0e5df1bf183472c9e53adc71276"],["/archives/2020/page/2/index.html","aaa300e60819ff7db4e35370bf92f73f"],["/archives/2020/page/3/index.html","5c7e198abe9f65b973af19ae0b3711e4"],["/archives/2021/04/index.html","31808968f76b0c0ef3c915b5e38daf79"],["/archives/2021/05/index.html","951066967afbb8818d9e722d2bad00d2"],["/archives/2021/06/index.html","c75a9d4be8bdf8ef8e0f597c258cc59c"],["/archives/2021/06/page/2/index.html","2fdc7e1d18445475f21a8674e8004d5d"],["/archives/2021/07/index.html","22c1ee8647834cd3be20a0ffbb94f395"],["/archives/2021/07/page/2/index.html","518db06951ee8c40f5f6f7ed81e7c507"],["/archives/2021/07/page/3/index.html","0e0a4f55489de035fcfe83f5b117c409"],["/archives/2021/08/index.html","777998e682cd7b8cf73ce623718f6a42"],["/archives/2021/09/index.html","ba28cedae1102cc2defbcdb3830bba69"],["/archives/2021/10/index.html","70ecf36a2c2d3d3a9b8bec438d6a2655"],["/archives/2021/11/index.html","7bbbe31ef778af8a16b18d87fc895f90"],["/archives/2021/12/index.html","354c3e18764e74b709f7b1f08ec3a206"],["/archives/2021/index.html","870fb00c4b5c5ecb2e53af177e44115e"],["/archives/2021/page/2/index.html","2fcd456f5718827dc8e19fb04095e2b9"],["/archives/2021/page/3/index.html","8549724957d75daaee379f5436e523e4"],["/archives/2021/page/4/index.html","c3eb59b77cd102f73d3a1ed5e91e1d51"],["/archives/2021/page/5/index.html","9d28123c4f75695e2069eee6d66a4410"],["/archives/2021/page/6/index.html","4c9563d833df674d9a6bcfaa2f6307d0"],["/archives/2021/page/7/index.html","eeefd42b8afb26785318ddf0881a9179"],["/archives/2022/01/index.html","7dbae6546ba04dd8aec44818a264eb6c"],["/archives/2022/02/index.html","ea9609737fb5ff12f0be62c7e88bb754"],["/archives/2022/03/index.html","54838fa58787238495bd51ca8aa79232"],["/archives/2022/04/index.html","3061c1e531c4bf77db9f630a2827593c"],["/archives/2022/05/index.html","2b9fc2f56871ab409302066831c675bd"],["/archives/2022/06/index.html","f3fc26794942981709db67495d5a67fe"],["/archives/2022/07/index.html","fa983f0f918f41119f1a48ef6d2e9387"],["/archives/2022/07/page/2/index.html","1043cd5f4033e1f714cbe42e1a7cca78"],["/archives/2022/08/index.html","bae402c2575bfd3322d2ff6d15758c72"],["/archives/2022/11/index.html","043d1bfe4e1d32022c6d5a8ec4d7bff1"],["/archives/2022/12/index.html","6d24d34b00feefe421bb2a907de347c7"],["/archives/2022/index.html","98eefbc34f2bcb9fa7a9fcbfd3c907ad"],["/archives/2022/page/2/index.html","86988458d010ac5b84388a52d1b4ceba"],["/archives/2022/page/3/index.html","6920a9697ffbcfd28b408e5faef22ee1"],["/archives/2022/page/4/index.html","ebfd06f26eea097aa5b274ebb07209fe"],["/archives/2022/page/5/index.html","6530772b70d3f6945bc19c4609c3cdec"],["/archives/index.html","c230669b8b69ba40ce061c8aec1c64c5"],["/archives/page/10/index.html","d6095328324448f669c98f3ed50e6aea"],["/archives/page/11/index.html","486d8d93076c4663b50973d6af30438f"],["/archives/page/12/index.html","9689be684943734fa852b19c7f3ee9f5"],["/archives/page/13/index.html","5622ad6797ef328d1c27585b7a75ed5b"],["/archives/page/14/index.html","4c7f824df0a1201ca31e6576f29814be"],["/archives/page/15/index.html","f7621243fbc16cbf939c2f595ec11b7c"],["/archives/page/2/index.html","405358e38986837d4b9fbdeaf816563b"],["/archives/page/3/index.html","3c09773ee1cbd9f10605d5835d227349"],["/archives/page/4/index.html","52b33e3bf713134c34936905952f7aff"],["/archives/page/5/index.html","2e3e41e1e5fbdddc584f7d7f810e0bd5"],["/archives/page/6/index.html","30dd01e70da4ec4e13ee2558ad2e2e79"],["/archives/page/7/index.html","484367504db5228c3ccb1718cc074494"],["/archives/page/8/index.html","d89af2bb3235f52e59a440705a9b2763"],["/archives/page/9/index.html","51f2aedf663d30a04eef4317682ed050"],["/categories/Programming/index.html","22d27ab25c4fb68a404ba7cc33e59f08"],["/categories/Review/index.html","a67631ca1408436c9a8b73dff0f93e84"],["/categories/Review/page/10/index.html","0c237029fd7b9ceff37da0a983af76fe"],["/categories/Review/page/11/index.html","c213f54f44ff35b3a4330037c763dddf"],["/categories/Review/page/12/index.html","6a04e591ebc8b05f5e06d157f6244645"],["/categories/Review/page/13/index.html","b77cf2dbb9a2d2a735bc33668d1e0996"],["/categories/Review/page/2/index.html","0f5a8ae0291038b849d382a1695b8c6b"],["/categories/Review/page/3/index.html","7ca5464a1e6c8e8656434e62142685a3"],["/categories/Review/page/4/index.html","72343756e2fe034302c6e95cd378e5ec"],["/categories/Review/page/5/index.html","bd4007eefa4b5ce166e844546a894f72"],["/categories/Review/page/6/index.html","61cbe374864b75b160c036cee00764ee"],["/categories/Review/page/7/index.html","049876a9fa336b850390fe3cf51f120b"],["/categories/Review/page/8/index.html","1c75812f39c7d08d39ac46103bd736a8"],["/categories/Review/page/9/index.html","2e03c8839940c3d98e9d4544464f410c"],["/categories/index.html","d83b6829a554c86a17be9ec5a1eb01a7"],["/categories/日本語/index.html","4b7d2adc5c345a96ca036a3f3ad89148"],["/categories/日本語/page/2/index.html","fbafe5863229efb0c11fcedfbac1c8c8"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8ec5d2e96a58d47f753bb829137ba454"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","2718713f27d098453d805ce1e281328c"],["/page/10/index.html","983a3d6ec02a92c60e3280b9f6eaefcc"],["/page/11/index.html","8b8f867ea5ce139b679ed8daf3c173d5"],["/page/12/index.html","3751dc2565058dc22b09eb324d8626cb"],["/page/13/index.html","9fb5831d9c250a4300ec6af3d5e41612"],["/page/14/index.html","c40bd7e3982dcbbfcc0f2c4943af71ae"],["/page/15/index.html","6e9236a83d0f3536a8ac2606af67caff"],["/page/2/index.html","83fad3fa47a5a047b1fba8eeb44dffaa"],["/page/3/index.html","5a1d720f6c7a2caf1ff0f373f1084333"],["/page/4/index.html","2314c182cf69f04e525052921a5be4f3"],["/page/5/index.html","a13d5d1ffcba200b08cd821f1e07565e"],["/page/6/index.html","a70b7bd89bde06565f47a85e3733f1cc"],["/page/7/index.html","0241f36e69b2d9141eb54192a423cbcd"],["/page/8/index.html","19e2a0ff50c12704a7363a9c6d206cbb"],["/page/9/index.html","235f5309953dfe25d88b7b719d18317f"],["/sw-register.js","3a378527c96b116b0cad5d4e90a450a7"],["/tags/10分作品/index.html","bca4601f6f8545a60e2c1ff90301a299"],["/tags/3分作品/index.html","58c7d934b87c5ff550ffb61f21ed3313"],["/tags/4分作品/index.html","df6cf107ad5c394a0c19b47881de3af8"],["/tags/5分作品/index.html","533c50f6130f0100de7b49a00c1e7f18"],["/tags/6分作品/index.html","82eedeed5fb7304d16f676e13399b178"],["/tags/6分作品/page/2/index.html","6ed7a7929c5dc3f9bacd003daabe633b"],["/tags/6分作品/page/3/index.html","71fb443cd35db32ff6068ffa4a2b7de9"],["/tags/7分作品/index.html","c3993258a9d6e77142b414fcf860c03a"],["/tags/7分作品/page/2/index.html","f3a647b56d9fbf6dab38beb67585eb48"],["/tags/7分作品/page/3/index.html","29b133023df4695980109b86925a6136"],["/tags/7分作品/page/4/index.html","b2edaad844ebd155c7f26bfa62b685f3"],["/tags/8分作品/index.html","10cbb3ada556b60639b39655eacd87bc"],["/tags/8分作品/page/2/index.html","8cbb5164c0e98bc313744e8128af0b7b"],["/tags/8分作品/page/3/index.html","f4db5a6c3dd54f1628ad2a802a814bc8"],["/tags/8分作品/page/4/index.html","1e8cdf7cc3b82acd2f024723c3711301"],["/tags/8分作品/page/5/index.html","c79b2a610333c66d8b9e2eec6b5ea0be"],["/tags/9分作品/index.html","151726e8e11b41887e7e8700f3c17ff0"],["/tags/N5難度/index.html","9a24bb749fc965881be1305968dabba5"],["/tags/N5難度/page/2/index.html","6b9446ea3aa37d3186652f42b06fca4a"],["/tags/index.html","397cfce8de683e1998a96edecd191095"],["/tags/アボガド６/index.html","893fcd6f9e0e49d64a42219a5df6e4be"],["/tags/三秋縋/index.html","5e7197fa81de72ee4b5f811182d80c18"],["/tags/中國武俠/index.html","b4b38a5e86ee4ffd473c046bec61e097"],["/tags/中國言情/index.html","6217944b57963ad9227948b39e3376f0"],["/tags/二宮敦人/index.html","5c9c3d9492adbaa16862c199017a2ca6"],["/tags/人性/index.html","231e7e165a7bdcfda83ccbe6cb2e9181"],["/tags/人際/index.html","64f1c851eff987a8ed250d39c633cef4"],["/tags/住野夜/index.html","c86ff3879b21308d8906288b16ec43a4"],["/tags/佐野徹夜/index.html","98fe2a0d82e2850278f75b921594b405"],["/tags/努力/index.html","93f0910d20235c797c073cb7a229ba66"],["/tags/動畫/index.html","5394b21a197e6c28409a82cc4e638a7f"],["/tags/動畫/page/2/index.html","1d210185da25b10d91ee939011f8babf"],["/tags/動畫/page/3/index.html","4b2b32c6ca91e043681dae3bf064788e"],["/tags/動畫/page/4/index.html","67e83eceea011ef376d06d7eb434bd60"],["/tags/原諒/index.html","be6be6dff3220d702a4462ceaba84f98"],["/tags/反烏托邦/index.html","ec73b0579128952ba3e2350be06f3ac4"],["/tags/啞鳴/index.html","3dc05b998d245a959cbd5c8ee7525532"],["/tags/喜劇/index.html","9eb24187d93966eb322bade557f6daa2"],["/tags/夢想/index.html","59370c26f3d8e40d43e65f91cb0123c7"],["/tags/天澤夏月/index.html","f13a6b2ebc8575df0b6c0d249e31de79"],["/tags/學習/index.html","335320967b9b05a11a29d4bbeb028bcc"],["/tags/學習/page/2/index.html","d1d3800e2642de50963bf90c73b2e11f"],["/tags/宮崎駿/index.html","0cdaf26b154560c8a587de4c86e17e95"],["/tags/小說/index.html","12aa8305744337e309fc49365cd9c6f8"],["/tags/小說/page/2/index.html","927d7dbba93c7c577e45ccefd9ca8d2a"],["/tags/小說/page/3/index.html","7701e09fc4869c3fa58f6b58d2b360bf"],["/tags/小說/page/4/index.html","0422c48b089220b213232db13c2eb8eb"],["/tags/小說/page/5/index.html","d08e31f58c4ddc7dbd025ff0075aec42"],["/tags/小說/page/6/index.html","fc928da2790d54148044c95a78f32a62"],["/tags/小說/page/7/index.html","469ddb2847b73c71c7238d5e70e0a9b0"],["/tags/平淡生活/index.html","f3d8d7dd5d5e7718eda8ca4b61f8dde2"],["/tags/幸福/index.html","ce44941101e72fea8bc0a8a77b92f7e9"],["/tags/志茂文彥/index.html","36198fb627d2fb53264c1ae2a93a890f"],["/tags/愛情/index.html","0a097a56e960d9e3079c64487009d749"],["/tags/愛情/page/2/index.html","2e10f9e315b5be8a1508241e1588864c"],["/tags/愛情/page/3/index.html","86ad2a64a5b7839eb01c784f22eec138"],["/tags/感動/index.html","ea46ab30ebede8037b0c18134df387f6"],["/tags/懸疑/index.html","0c2be4faa59a12d0ae4d07d519f170d2"],["/tags/懸疑科幻/index.html","f1649338da117b765e797ea557497828"],["/tags/戀愛/index.html","3910ebcdc95ce3b3dc51b0c76bc77b2a"],["/tags/成長/index.html","09126ebf53fe6f41e50f60f9dbdf146b"],["/tags/成長/page/2/index.html","8d39be753efa65afc009fb1e78b87120"],["/tags/戰爭/index.html","c744c1c9eeefa6ca29ccb8c21eb39c51"],["/tags/推理/index.html","2cbedb7b3b775054624efa36dd9e6cd0"],["/tags/搞笑/index.html","1da392b249c30cf3958944d5a010ef40"],["/tags/救贖/index.html","edda84c2dd9e9f9f3942670cda39e7a9"],["/tags/斜線堂有紀/index.html","feae982abf1e9785aefa090ad699c438"],["/tags/日常/index.html","97e2ba56467fd1830092f35c23a7adf7"],["/tags/末日/index.html","5a2d6edd64574aa7c4c9d86d7bef04a6"],["/tags/校園/index.html","2117d0135650786fd2b70dca74121cff"],["/tags/武俠/index.html","0ff511f8d62480cc73f8dd0d1849f211"],["/tags/武俠言情/index.html","fc01c55b16472282daccefa9e5418eb0"],["/tags/漫畫/index.html","d124a9a73f77c3a1091104e4631f45a9"],["/tags/生命/index.html","e43841a2f9031ebee2b14a7e6febcb25"],["/tags/生命/page/2/index.html","4e14ce86c062223c7b543ec27f4657bf"],["/tags/短篇/index.html","79334300fa95704b0f2db053ee1bf1b9"],["/tags/社會/index.html","b7f630e4dc4f35581f43b11381f16378"],["/tags/科幻/index.html","681f91376a94bfe80e7741ba3c4b79e8"],["/tags/童話/index.html","b120fcd589e3fb51b127034adba717af"],["/tags/競爭/index.html","8cb3e1bb4452937b34bdd8165b6e3c6f"],["/tags/自我/index.html","bc8dacafc96bd0a993f63fd756c4840a"],["/tags/自我認知/index.html","1d208745220ee38998b1976d92f4dc86"],["/tags/葦舟ナツ/index.html","154cf7bd824b7e62d0ffd9cd48e506b9"],["/tags/藤萬留/index.html","13796cb14f474c59545e09f27b24f19c"],["/tags/親情/index.html","15fa8f20514933f24c4db65f97263308"],["/tags/雜項/index.html","86804da8a12ad3f137c17f096e0c792c"],["/tags/電影/index.html","4a9e90da5c17691e58ca482901fc81ab"],["/tags/電影/page/2/index.html","35a629fb1d981f071e90bddf7811b2f5"],["/tags/霸凌/index.html","938b6a0f8707fa38758b6868a63a0242"],["/tags/青春/index.html","b3dbd76f8df86a090eda5b629656446b"]];
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
