/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","da522d0bd01c28db7ea4b9bf32439a23"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","5d83892b26e946fdc782866e3c4c6f63"],["/2019/12/25/Review/無法計算的青春/index.html","9a07e8daaf54c9c80dafbf8132f0ca7b"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","48e5bfb687667133ba025c740824a0e8"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","9c2e9c2fd60f2fb1835469c38f1e48bb"],["/2020/01/19/Review/下雨天，不上學/index.html","9eeaf381e67ee2e5cc06fd233e8765ff"],["/2020/01/26/Review/三日間的幸福/index.html","eb40512e57fe63b9920be8457cdb95b3"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","dbf09862f3b70d44427503c820af4ee8"],["/2020/02/09/Review/青春期超感應/index.html","567477530334b51b0f1990ec6666fd80"],["/2020/02/15/Review/又做了，相同的夢/index.html","b2e4bb75499be4b1dd4bace94efae255"],["/2020/02/22/Review/回憶當鋪/index.html","415179790a7ca09f4f94351f32aebeae"],["/2020/03/22/Review/不適合自殺的季節/index.html","c16fb8903f1a81073a5ccd89f39a8f41"],["/2020/04/26/Review/我們都無法成為大人/index.html","bf2c2c3b7dd9abad0a78a328a2f0be94"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","a4dc87ce4f5c45490b3a0de4c665c189"],["/2020/05/17/Review/人間失格/index.html","01a31f85400575766d03780fb472eaa4"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","810b7776bf1138f34dd66ae7d08406d7"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","e936fa76b2390a261a84889cd8fc1111"],["/2020/08/01/Review/銀河鐵道之夜/index.html","42b0c5a24905caf7159dab7897bc63ca"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","4006b30ba3c15aa6a6c6c15721632894"],["/2020/08/16/Review/15歲的恐怖分子/index.html","827e6f6619f84adf05271f100afc320c"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","0741cbf0a9c509069642b9ce5edc49a6"],["/2020/09/13/Review/羅生門/index.html","2afdf0b24b2b8090dc95fb5506446cf9"],["/2020/09/20/Review/闇夜的怪物/index.html","73b50f8f21fbc4673fcff3445312c79d"],["/2020/09/27/Review/14歲，明日的課表/index.html","9ea24524be418f62d3c4725e5328d728"],["/2020/10/04/Review/致十年後的你/index.html","87e98bcfdbfd27f6e5baa1f209a5eb77"],["/2020/11/08/Review/滅絕之園/index.html","22deae92770fe5f4fe588f2ecb1d6ffd"],["/2020/11/15/Review/將愛拒於門外/index.html","da3948328de44d11bfa403b68c6a34e8"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","2f88cbdf616e512435737c1ee763887b"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","faabdb9bc5cd02e9442088ab9790d2dc"],["/2021/04/22/Review/道印/index.html","995b9060a2d92f87ad79e47ac66ba011"],["/2021/05/03/Review/戀入膏肓/index.html","0e593b3c5812d4bdf026c269f4a78b14"],["/2021/05/10/Review/Dice/index.html","bf4965fca476f0bd9547441bbbccc3a5"],["/2021/05/15/Review/魔女之旅/index.html","a04291bf4540c75090dec5a84d75f94d"],["/2021/05/28/Review/戀愛寄生蟲/index.html","18406970c42360bbe4afe4e0fd11c119"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","39df66dc1fa1add41530d6091fe16b1e"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","a2ee43142c3cca3de9e588ad9ebefa5a"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","7b915c925cf07eaf554f7b739ea39247"],["/2021/06/05/Review/流浪的月/index.html","367644599fa8dec91ae2ddfcf64595f3"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","8deda243c02e0c85f660bf11f32d3e6b"],["/2021/06/13/Review/第一人稱單數/index.html","97869c0235a47f34623ae34428e42213"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","ae0a02bc782608e91925d8364e424837"],["/2021/06/16/Review/願你幸福/index.html","a2381911392a0bed8522b7a29c97d3d9"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","851326ecceb06397b79c8ad86106bb11"],["/2021/06/21/Review/神隱少女/index.html","f077c0883631e632c30e594d6cc2196a"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","f1d192e3f367ca111a172b7fceec4974"],["/2021/06/23/Review/天空之城/index.html","68638f55581d11468b1157baaa062777"],["/2021/06/24/Review/魔女宅急便/index.html","a39b4ee7edb66e9aa1ae8a4e537b2ba2"],["/2021/06/25/Review/借物少女艾利緹/index.html","67546e222e5f51cb6c3c1d125b4dfbef"],["/2021/06/26/Review/魔法公主/index.html","0927934e12075dd6d0ad6776f33174a5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","d9b5e38bc9eb72ad359e738841953d44"],["/2021/07/04/Review/飛雪與劍/index.html","0dcbed05d2510b16a980e7ec4bc0250a"],["/2021/07/09/Review/地球防衛少年/index.html","434dab5de80357674bc40c203f4e44af"],["/2021/07/12/Review/Angel Beats!/index.html","d0c60fc845f8bbfc304ddc1cd953986b"],["/2021/07/13/Review/Clannad/index.html","77b5959c1f47db6e3677c82693470762"],["/2021/07/15/Review/AIR/index.html","8ff8f94e72a8c1c4aea8cc253d2524a5"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d337d5177bc84314084128a5f85ea442"],["/2021/07/15/Review/螢火之森/index.html","afe6e576775fe179cdc8584f68f1ad02"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","d28c598bc53560bfb02d7aa2d972304e"],["/2021/07/17/Review/奇蛋物語/index.html","a5f0d988354723a01f97b6e1fb1d2ce0"],["/2021/07/18/Review/Vivy/index.html","f02c630c755d6d309efa0df4202804c0"],["/2021/07/18/Review/請妳消失吧/index.html","7a93d523feb4580300318163a80fec0a"],["/2021/07/19/Review/漣漪的夜晚/index.html","28a102bedf6b4c61c05c42f5b6e0c5a2"],["/2021/07/20/Review/月色真美/index.html","5fa03d8541fd959bc0facc16638b058d"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","f4d3d8c32e19bc6c768a6bc1a45603e1"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","e15ce9cb155c46c544f4d22c530cb00d"],["/2021/07/22/Review/罪惡王冠/index.html","3561f5c7198dce759b078373b28fce92"],["/2021/07/23/Review/弱角友崎同學/index.html","489fa055bcd8713c5c28c69553c0440b"],["/2021/07/23/Review/惡之教程/index.html","9b1770f7d1cf816ecc4e6216fed69a2d"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","c5e8e8b36912c737dc9a2d78d7faebfa"],["/2021/07/25/Review/魔王勇者/index.html","485a2c858dfbc6b111b9b3e59d66821b"],["/2021/07/27/Review/一年A班的怪物/index.html","2982a6232a38563540a16619a818b85c"],["/2021/07/27/Review/奇巧計程車/index.html","222196b75614d8081f9efc5843fbd2fe"],["/2021/07/27/Review/專情的碧池學妹/index.html","d439c0dba4cfb37bc63ffd97ae552ad6"],["/2021/07/29/Review/只有我不存在的城市/index.html","8da822942a92f78820c77b014225cdd9"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","cf1d2d643708b095c431bd132ec74aec"],["/2021/07/30/Review/可塑性記憶/index.html","60796c1642d30df35f89cfe908640b37"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","84dc7c6866a331088c1d8439b053f5ef"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","1306800969fdc38b547af69df30f8986"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","8268f0244d2e8f8e785f73648917a250"],["/2021/08/25/Review/清戀/index.html","38499ed2b62ca51516678b4855468f0a"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","72518d6dcf2c6c967227dea56f9028db"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","0bdd6a2e19739af32fcc6bfcbc869bab"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","61db9685367b831f653b981ae0621e51"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","861ddc6b606d1e90ff35c3061e9ebefa"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","aa2840dd033be96be380157d4bb83e02"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","7de629cabfc61d12ef3c44deac852884"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","60390ccef180cfe34b2b92d44379e56a"],["/2021/10/16/Review/龍與雀斑公主/index.html","757983fa7968151f5fa8bd9c35b03f78"],["/2021/10/19/Review/孤狼不想開後宮/index.html","03f73e9c7aa07428a67a8453f675b9d4"],["/2021/11/13/Review/徹夜之歌/index.html","b267154deeeebd36279bad4abb76323d"],["/2021/11/24/Review/武煉巔峰/index.html","67f9634aba0d8a3f840d800fa12c302c"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","0d9df2e129308b229e5770474be8b8da"],["/2022/01/28/Review/神醫凰后/index.html","191ce69c684fee033cd7c98991cd5bc3"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","75de3f7ba21589515917f46260e0fa54"],["/2022/02/13/Review/夏日幽靈/index.html","27cbb5553329c50dbc72b22f1f686976"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","6b7b2efa2d99dec5b5a6662415421d5c"],["/2022/02/26/Review/賽馬娘/index.html","66c442a2231008a9593ec25cb1064e4a"],["/2022/02/27/Review/大欺詐師/index.html","395d167f76b8ebed3dbd8f5365092988"],["/2022/02/28/Review/前輩有夠煩/index.html","75172ac12449e722e7cd1ebafcac64d2"],["/2022/02/28/Review/碧藍之海/index.html","9585f8fdac7d60d14f4e57e0910830c9"],["/2022/03/05/Review/落第騎士英雄譚/index.html","cb84392adc795e16772e94f5d6638b99"],["/2022/03/06/Review/Another/index.html","4abadeba65f2590f2b2ffec9ce1072e9"],["/2022/03/06/Review/入間同學入魔了/index.html","8e720aa4a6630b56044f94ca4ecb39f7"],["/2022/03/18/Review/再見宣言/index.html","fccf64d5d888db10f804391ada67c0b8"],["/2022/03/23/Review/生若冬花的妳/index.html","98316ddde536a808a72461caae9b5e4d"],["/2022/03/25/Review/天之弱/index.html","5b2766bbdd89b5da5dfdd615cf8af0be"],["/2022/03/31/Review/滅了天道之後轉生/index.html","f8cfafe6fa5813426308cbca781e190b"],["/2022/04/30/Review/泡泡/index.html","293b07169f40f06892954c47a58d90f4"],["/2022/05/04/Programming/Dynamic Programming/index.html","7233340e26f59d54de120a910c808a79"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","80683d06003ec61aa0ac932c2314c641"],["/2022/06/13/Review/偵探已經，死了/index.html","482e30659af11f31bcca3b118fb27556"],["/2022/06/14/Review/黑色子彈/index.html","b022390d4bdb3af19aa6b8b56e0cf34c"],["/2022/06/15/Review/黑白來看守所/index.html","bf4650945c27c977345156b01df79c1f"],["/2022/06/16/Review/虛構推理/index.html","c28c7c3b5a2501c02271a1b6f44def2c"],["/2022/06/17/Review/戀愛與謊言/index.html","0edcc927b1721b3e6d3b3a5c5c6400f8"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","b1eb68955af67870a693a3e035cf5691"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","e4013a48f228c6b71cf1b76c47d93508"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","b6fbdf8b9e9f32d06035750b7b8f15c4"],["/2022/07/03/Review/Hello World/index.html","5dd4eee75b3f6f4aacd655e2d28c3ed5"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","e6d4a07bbfc56a54c4c69bc2b78bfc0c"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","0a27484c3a3e738e7bdda268f433184e"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","d1ce8429f792d294364f9c8703f45076"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","a4467694cd1853bb6570050b9a52701b"],["/2022/07/16/Japanese/動詞分類/index.html","1ceee673a4afbdf2bc226c865af82928"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","39b1ed037b8b5db0dc6cc4c34c41f8d6"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","33840b7f36aeff51a04ac89cb2ca929f"],["/2022/07/17/Japanese/音便/index.html","2e71247e72ef2faaffdf1d2060a68c7f"],["/2022/07/18/Japanese/動詞 時態變化/index.html","c49ff3b0982ff1e44dab15b1a726fc40"],["/2022/07/19/Japanese/助詞用法整理1/index.html","1bed38bbd782356673d1460bf4fb57f6"],["/2022/07/26/Japanese/助詞用法整理2/index.html","cda2c6592bd821807e0711b1c0b11d93"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","a0b20e8bf5edf30ae9a5136b7f85828a"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","15060890593f5637d8c06ed5d3a7c233"],["/2022/07/30/Japanese/疑問詞/index.html","f302f9381feca9be3c36a40f19c604db"],["/2022/07/31/Japanese/助詞用法整理3/index.html","9faae7fe724fda67d13ce95ec165b534"],["/2022/08/02/Japanese/副詞整理/index.html","dba4715f17cef87d36fbd4636a9116b0"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","dded85db40e1a4aacabbbf6c6b9a68d9"],["/2022/11/04/Programming/Data Structure/index.html","fc6fa2012761f5560cc03d2131cc8b33"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","1109f46ab347639525896756cfca6a58"],["/2022/11/22/Review/組長女兒與保姆/index.html","a6865caaf899bafe16c4e56df67ae4af"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","adb094043fe889fe7dc038c0ecb0cd25"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","3567359e27e398fb4df99bdf35d278d2"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","3a94ca06efa159f0621f15111c4ea25b"],["/2023/01/01/Review/あの夏が飽和する/index.html","5cf3dbf3f1742b4e515c7965a3760864"],["/2023/01/02/Review/孤獨搖滾/index.html","040068a3681839a2cf82375dd85c378e"],["/2023/01/03/Review/來自深淵/index.html","a812585b10f4060057b7d7897494b3ca"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","e8e7d164279edd399c729022198da8ef"],["/404.html","46c7ca62aecc194c0744f4a61d0c8e34"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","4a43b63995074e655dec1f7f1a9201ee"],["/archives/2019/11/index.html","fe925f411ed4a586f8f57b0c930bf382"],["/archives/2019/12/index.html","f048351f60d3e151ccb90ccc08f2bfae"],["/archives/2019/index.html","cbdd24763b11dbdd0e7bcfd1324e97d0"],["/archives/2020/01/index.html","06e3c2b0661e60a14c1a00268f778212"],["/archives/2020/02/index.html","c37b32cd0857b1a7e14b8ee1f965f576"],["/archives/2020/03/index.html","c1f3a05378f077cb8a5557a89c0e8887"],["/archives/2020/04/index.html","d0becdcefef3035ffe9126a95c599262"],["/archives/2020/05/index.html","2efd711274207dcc5b73e27a5b83558d"],["/archives/2020/07/index.html","4e0bfbf58163f2c05e5797a721713656"],["/archives/2020/08/index.html","1088ae3c67b4b934331c215c01402106"],["/archives/2020/09/index.html","bbfd1ae80c088d5948ea2a381d5156fe"],["/archives/2020/10/index.html","e472225821e161dce49fda40c9140ab7"],["/archives/2020/11/index.html","570180e2f3ea6da6fe5f70d4ac987fbb"],["/archives/2020/12/index.html","b72b9fae072a1b4ca22be760379f864c"],["/archives/2020/index.html","d0b8929a2f570accf3929654fbf3b98c"],["/archives/2020/page/2/index.html","69d1280d61f030645d0bfffde992afe5"],["/archives/2020/page/3/index.html","4cefec9b1bf227e4159a1804cc3faba9"],["/archives/2021/04/index.html","af2d384fb0b2f6ed441ae75756ec76f2"],["/archives/2021/05/index.html","6539b46944c403e7ed64451ef66fdb0b"],["/archives/2021/06/index.html","ae8bec8934685ced2c777eb3963e7058"],["/archives/2021/06/page/2/index.html","4d70796817a607711a5f1bb8abf1e2ed"],["/archives/2021/07/index.html","57a8ad64f9c68073f9ced2b0560b1b9b"],["/archives/2021/07/page/2/index.html","5bf68edce5bbc20b7dd7ab39a03748d4"],["/archives/2021/07/page/3/index.html","358fd3d6021e9b4b322e99185324701c"],["/archives/2021/08/index.html","3ad8c445e4c7ae2a4ca7247990cd8a3a"],["/archives/2021/09/index.html","5c987c71d03b45742db855c15ff4f1c9"],["/archives/2021/10/index.html","8414224edb45b2b0069efd5349a0b73a"],["/archives/2021/11/index.html","2c113082d557a033ae095ef2667f473b"],["/archives/2021/12/index.html","25ed503a1b53e84c8ed40bae3ca4f7b4"],["/archives/2021/index.html","1c5c546bc54abf913751dc0fb0264f1d"],["/archives/2021/page/2/index.html","a44008f2af1d297dbb1cd9b71753f493"],["/archives/2021/page/3/index.html","f116ec6c64db78a3acd90b14a3c09eb5"],["/archives/2021/page/4/index.html","d6fa96fa99900125f42f669634d4d51a"],["/archives/2021/page/5/index.html","9fa6aa803d3c1fd24e636cd3af573c1d"],["/archives/2021/page/6/index.html","7f514036ae97541ce5c9cd2bcdfcf214"],["/archives/2021/page/7/index.html","1c27a008f960f9b740fe4dfea80f1cf7"],["/archives/2022/01/index.html","477df2c71d7e398187b57be7b62325c5"],["/archives/2022/02/index.html","31ac03daa7f55545596eca67dd283fe8"],["/archives/2022/03/index.html","e529f1ae69ffbe344eea3640292bfb5c"],["/archives/2022/04/index.html","222b8ffbcab42d64248798e275b90ed6"],["/archives/2022/05/index.html","1d31fc0857e93368fefcb2ada2f7f2ef"],["/archives/2022/06/index.html","dcf7a6f9538008920d4454bed315cb5c"],["/archives/2022/07/index.html","1b4d0333003ebcfcfbb308f2190113da"],["/archives/2022/07/page/2/index.html","91a33d5ec81608ece181fe380beeaa08"],["/archives/2022/08/index.html","94064a2c64a4d9b6b62eb54d9da26bcd"],["/archives/2022/11/index.html","ebf58619345fed411afdf3a0feaf6f87"],["/archives/2022/12/index.html","b8611aa1bb342b68679cc53114bc3663"],["/archives/2022/index.html","500a26980588547efb0052ced169a21f"],["/archives/2022/page/2/index.html","c00ac463d2642a539587ab75e734ac05"],["/archives/2022/page/3/index.html","dda6902f9e709c81e15dd501f1d5d330"],["/archives/2022/page/4/index.html","eb74abb4a95db36ad237153c1c777671"],["/archives/2022/page/5/index.html","9dd36710b184d2471be90398363ae097"],["/archives/2023/01/index.html","1e0aa0a9447e26500ba050fd2c84afcc"],["/archives/2023/index.html","14686803d4fa2ef29b1e48aa258e7809"],["/archives/index.html","18b96129a1b8dcf316a6c40264dfeb9c"],["/archives/page/10/index.html","2a488b61eace340240b65e0d780ee700"],["/archives/page/11/index.html","1d04400875a6b1a0665b6766b664f533"],["/archives/page/12/index.html","551d11d0cfe0a25fccb5a6491f1eebaa"],["/archives/page/13/index.html","c908bfe26be2abc68d6be3e82a518709"],["/archives/page/14/index.html","991653f5b62fd7b5bfadc8e777a67410"],["/archives/page/15/index.html","9300f0231bb0e048194e1ec993fc98a6"],["/archives/page/2/index.html","de71b44bc9255fb3da6244a7e40723d5"],["/archives/page/3/index.html","af9e5cea94cc12ce94f7ba14bd60268c"],["/archives/page/4/index.html","ae49e215fe2dc7e33a3243b8d55ed648"],["/archives/page/5/index.html","7d6d4f57afde5553cf2ccec20a8e80bb"],["/archives/page/6/index.html","1c2f6bfe6428b9cb909815741aa03d0d"],["/archives/page/7/index.html","703eadbd5c8fd9b83b3f27d1a6e5d61f"],["/archives/page/8/index.html","9e8ade9573f4a9a6be74f2e2fe21b9dc"],["/archives/page/9/index.html","d0d197a46d1dd904e4644109c69222bb"],["/categories/Programming/index.html","999137333263b7f80fafd1d6b75dc3dc"],["/categories/Review/index.html","c46c0dad22c7c4a4801f882d25c6d055"],["/categories/Review/page/10/index.html","e3a1ff81ca35c0057b20bb0a507908cd"],["/categories/Review/page/11/index.html","85757dfba4cc79209df6fdc852fdb45d"],["/categories/Review/page/12/index.html","c876f1addc4334cca689d3a4058f3b60"],["/categories/Review/page/13/index.html","d2a11b3bac38157a080075045cc40360"],["/categories/Review/page/2/index.html","69e83d27054a0817fb69f2e83de15c0f"],["/categories/Review/page/3/index.html","6add0645a73969f8251256438d3636d5"],["/categories/Review/page/4/index.html","06bf4b24575b0f8bbfcb961d755c6646"],["/categories/Review/page/5/index.html","2dd36475160b300ca10208332290f9dd"],["/categories/Review/page/6/index.html","2033d933a9a130f13fe4bdb9852edb92"],["/categories/Review/page/7/index.html","d084b01bfb55834a45703fa2d60a7f9c"],["/categories/Review/page/8/index.html","96bbddd63b432a8e8520af5f7a8b677a"],["/categories/Review/page/9/index.html","82101619508de75cb96b8257cc45c58e"],["/categories/index.html","1b8a42796e9c7d646497a67108b5a711"],["/categories/日本語/index.html","07980c729ee0a4a96c92608b078ca8e7"],["/categories/日本語/page/2/index.html","9b1bcc7c6c98481a1c0ce67ce283944a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","65b93578eb30023f57b8e6ff28d118a8"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","cf548264da57cf5455bc2b3b8e795d66"],["/page/10/index.html","5e3db3b8205409a85f0c2761c2b871b3"],["/page/11/index.html","58ca3295ea08a315c17be95558c4f106"],["/page/12/index.html","509d8a5eb03bd0b7bd2c28e0934663ce"],["/page/13/index.html","b33cc755b02c1e058d499d94c86ec53e"],["/page/14/index.html","52e5f60b2fda9654a1bd6125895b24b3"],["/page/15/index.html","4426988e2e3e22673ca6442d8dc70d29"],["/page/2/index.html","3374732e0b6d21a2e38d6f136197be89"],["/page/3/index.html","596280d79dda0885537c50e7a955d961"],["/page/4/index.html","9c24a3cbb1ea4bcc242d86f263b290a4"],["/page/5/index.html","fe37f6ad0304c910743301394acaf6fa"],["/page/6/index.html","570998a40e1662663e013fbc86837c31"],["/page/7/index.html","f5de9cfe321639f0890b59e852a9f35d"],["/page/8/index.html","2504873df6fb3553d1955dfe98ab9455"],["/page/9/index.html","3a1936e06461baeffd123d84d22494cb"],["/sw-register.js","db54dd09be223e76a3869fd39985d2aa"],["/tags/10分作品/index.html","7c927b40b02aae650c41e0418a36cabc"],["/tags/3分作品/index.html","f65fcc131b774b324cf74b1b0713748e"],["/tags/4分作品/index.html","607832c5834982b3cd71280182e4f944"],["/tags/5分作品/index.html","8f19b214cf3057af60cc6c4c95bb5e06"],["/tags/6分作品/index.html","04cdb432c9299a4bb727fbb96ee08944"],["/tags/6分作品/page/2/index.html","e97513f3fc09593f0cd0bd3a0cb8e37e"],["/tags/6分作品/page/3/index.html","d5527065269a9420063ecd134690d640"],["/tags/7分作品/index.html","c029ffd2d1faf1ce1a6c66f060e678f3"],["/tags/7分作品/page/2/index.html","971e96df70eff57747c45db006cf6705"],["/tags/7分作品/page/3/index.html","79aa8992ddb08d73f1d3106991be7b50"],["/tags/7分作品/page/4/index.html","6c4b4f727e774612c87982a1034e1468"],["/tags/8分作品/index.html","744d909522c1f249c38d912c2db85bf8"],["/tags/8分作品/page/2/index.html","8cf5a5e57511fd1ecf376b41a36efb94"],["/tags/8分作品/page/3/index.html","036d3b880e6898971957a94afca6f718"],["/tags/8分作品/page/4/index.html","449d0afd1751f18b1045fc5beefdffd6"],["/tags/8分作品/page/5/index.html","f054f795bade5a91cd03122a0cc29639"],["/tags/9分作品/index.html","55e07e30aac951111944f4ec628b4083"],["/tags/N5難度/index.html","6090ca9b3ac1fa98fbed7d60068121b6"],["/tags/N5難度/page/2/index.html","76de273d40ecf420ac5e313c6c29ad2b"],["/tags/index.html","53b71f2e91902038987bd085761e9e5c"],["/tags/アボガド６/index.html","61004a283b1ca1bdbd98ca133515c16e"],["/tags/三秋縋/index.html","ad2e78900bef1f14cf89918ac1bc1a40"],["/tags/中國武俠/index.html","fa173f525a55b3fa383f4d0715fa68e5"],["/tags/中國言情/index.html","bca6cef05bc8383c2f567f2909ab41e8"],["/tags/二宮敦人/index.html","99dd859ee1ebc0b85d79010fe1df24b8"],["/tags/人性/index.html","c7b7150ed898e6e16de1ea09fc0dc5fc"],["/tags/人際/index.html","71c8f3576d4f70287e565984cef5b55c"],["/tags/住野夜/index.html","82cab1ee3d22c8ae2678524bd6fbc0ae"],["/tags/佐野徹夜/index.html","56d47e0a6d446032aadf53f35e8024ea"],["/tags/努力/index.html","9849cb3468c2986a03dedce8b5de81f4"],["/tags/動畫/index.html","87f158e8b9bd771f775576966a18efe3"],["/tags/動畫/page/2/index.html","39c1c505a0440b5704eaeaae92822916"],["/tags/動畫/page/3/index.html","1dc883243c21f3e67c08b9d5bf183100"],["/tags/動畫/page/4/index.html","7e38ea725da3c6b39378f974687e38b6"],["/tags/原諒/index.html","2d61cef5cc0a2bcb1be8dac8ef02d751"],["/tags/反烏托邦/index.html","19f14d05e60211ef18fa1ea25a9416d1"],["/tags/啞鳴/index.html","53bc6d0b2475f29d9d0547cbf36e3af7"],["/tags/喜劇/index.html","e7bcd978b2c6be17d8cc2979a4460b87"],["/tags/夢想/index.html","3dc600096054cf251d00140380db395c"],["/tags/天澤夏月/index.html","197138299678134b33a1e8f66ea765af"],["/tags/奇幻/index.html","d0b673ab702bad4aabcb8b70a06299a0"],["/tags/學習/index.html","30c39518f3173ed84b61d22290998215"],["/tags/學習/page/2/index.html","964752e15aee0bfc34951ca16e4c3d2d"],["/tags/宮崎駿/index.html","cb8886aad8ffea4ad5d0ba889dac94b4"],["/tags/小說/index.html","f6d2db486d6b37d9187379571f2fb9f8"],["/tags/小說/page/2/index.html","15a2b28fe91731ae611c04c3c8d41736"],["/tags/小說/page/3/index.html","33f73439db45f424983e45f66db2935a"],["/tags/小說/page/4/index.html","4c225f944fcba9426d846b1c209cdf35"],["/tags/小說/page/5/index.html","c3e9018dd88cf2e1e7fa7796978f3ad0"],["/tags/小說/page/6/index.html","554b2f59b57197b8275c7d914f9bade2"],["/tags/小說/page/7/index.html","1469811d4e384c0b6b26e0158c35e71d"],["/tags/平淡生活/index.html","1f94ca51c28e5f93878460fa3c189a4f"],["/tags/幸福/index.html","64a7446f9dd5a39c9214d534b7ff5f1f"],["/tags/志茂文彥/index.html","ff1db8dc039d16169d23366430c46854"],["/tags/愛情/index.html","a14155bc78a693447405856b397bd0fe"],["/tags/愛情/page/2/index.html","c152ccf38b5cb6b27f590f57e88d3b0c"],["/tags/愛情/page/3/index.html","134507efa38645b102ac52c8cacb1c63"],["/tags/感動/index.html","67e162dd4ba56d9d9e9e75acac957d45"],["/tags/懸疑/index.html","54743d0e0b8bb1a7b1bb53b7cfcf3114"],["/tags/懸疑科幻/index.html","d4a2fa134c17aa07f0de943dcc6d40dc"],["/tags/戀愛/index.html","b520402c9d2cb927ade1fffc9626cae1"],["/tags/成長/index.html","b4ad161ef7c7fc5a5282b96bcb139c3b"],["/tags/成長/page/2/index.html","a6d42de9a5907e7a5c2912aa85b10198"],["/tags/戰爭/index.html","998b7b7d3f72680fb1807d90d2b3d079"],["/tags/推理/index.html","08acecad3e713b758d4e0e9697f90b83"],["/tags/搞笑/index.html","70ef23fcf058d9df3495a624d1efa32c"],["/tags/救贖/index.html","b165a7b654fd0a9b51c96b46071cc21d"],["/tags/斜線堂有紀/index.html","942df256448c8b06f794ba8a3c830697"],["/tags/日常/index.html","7dd2d8e783f6289d2f3bc0a1745c4300"],["/tags/末日/index.html","a2834599adadd113d94e9c0b4fda55b8"],["/tags/校園/index.html","4e12ab43dc550118df42e50d3baabfac"],["/tags/武俠/index.html","82882508f627e45d8b69f199e57ae561"],["/tags/武俠言情/index.html","5f423919f1ba196864fd9f0193646afd"],["/tags/漫畫/index.html","9e236d54848345fa573e3062663ad1e1"],["/tags/生命/index.html","8c3511e09d985365413835a532761f43"],["/tags/生命/page/2/index.html","93c1cc99fb28a0bb28c643335cb95da9"],["/tags/短篇/index.html","4bb19533ec7c47812835772cdec71197"],["/tags/社會/index.html","fb984f228ec24ae7092e2fac2c7e91eb"],["/tags/科幻/index.html","534d93a9a430df43df16133b9ed1a7f1"],["/tags/童話/index.html","e801a459a2d7f2f6825e2b00f05d0224"],["/tags/競爭/index.html","50ab5410b97bd0211502227288ded1cc"],["/tags/自我/index.html","2159adf6f6eba74d04dcfea5637854c3"],["/tags/自我認知/index.html","44560b7ed9106b6379badc9228c2a47d"],["/tags/葦舟ナツ/index.html","61a51a4ad6a979737c6e0bba1b92538f"],["/tags/藤萬留/index.html","de643b2a3d7eb645e29c7e8223c00fa0"],["/tags/親情/index.html","52a186e962c47d14d19571d33118fec9"],["/tags/雜項/index.html","1f36cd04c630d7e6abffa82348626e32"],["/tags/電影/index.html","5272ba58faafec92eedc34b2ee140878"],["/tags/電影/page/2/index.html","ed53df1c1313ca64d58206732346d0ff"],["/tags/霸凌/index.html","751e57b5bfc963fa36ebc8ee57e704d4"],["/tags/青春/index.html","7da2d39be90189449036628a11337341"]];
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
