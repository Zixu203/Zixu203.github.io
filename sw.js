/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","4e2001690c21b4c3eeebc76a70cbdb53"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","394fa95d0bb99d6f10a0df6a7256610d"],["/2019/12/25/Review/無法計算的青春/index.html","b303d75623249b2f3ce4d180b196801d"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","ce6e39167ed73f2322e0301e7a8e3138"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","bf6a246bac4caa4b4917b563dea53bcb"],["/2020/01/19/Review/下雨天，不上學/index.html","454a3ac680281a2f1b33ae828340fae3"],["/2020/01/26/Review/三日間的幸福/index.html","e507c8d4b4a6d97025eae7b9bba3bb82"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","22e8541587ff51c58db62d26ac5a14ad"],["/2020/02/09/Review/青春期超感應/index.html","99c9c0e322c193f6fd8b8877b60e2b10"],["/2020/02/15/Review/又做了，相同的夢/index.html","45462722bd1aae13efc65acd29493981"],["/2020/02/22/Review/回憶當鋪/index.html","8bdf51d98d9921380ce649b4164cb162"],["/2020/03/22/Review/不適合自殺的季節/index.html","1aeb6ba68d5dd6072fae0aab19b1fbb2"],["/2020/04/26/Review/我們都無法成為大人/index.html","deb9fac8bacd34a88f49b36e0932d219"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","470f418992e9b4cb901b6f4735e60579"],["/2020/05/17/Review/人間失格/index.html","93e70f975a9abe223644207aa37cb682"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","9a3c7b07c7f7889cb41065ce49bbf5f4"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","29b10c86b8540ff87b6ebbe45f698f66"],["/2020/08/01/Review/銀河鐵道之夜/index.html","ab38b0333732d1adb51b061fc2e4be9b"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","9b3bf0ee06d16188a3e062899f8519c2"],["/2020/08/16/Review/15歲的恐怖分子/index.html","46592e933635737e2841bd652a684faa"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b7a5e42db24a2e8c8e8ae4c69af156b5"],["/2020/09/13/Review/羅生門/index.html","c36235e053536b7d65d4a1637f13e38e"],["/2020/09/20/Review/闇夜的怪物/index.html","b75b30d120508d090bb1632cf95ac82e"],["/2020/09/27/Review/14歲，明日的課表/index.html","8cf00084d0edf754b5b1ed2ac4156061"],["/2020/10/04/Review/致十年後的你/index.html","ac13d2f23fb9504aefdc1df3740f568f"],["/2020/11/08/Review/滅絕之園/index.html","7239eaa1ee1d90d988936a74253af315"],["/2020/11/15/Review/將愛拒於門外/index.html","05837fd6e4c3e08542154aec782fd97b"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","dd62acb8d9536de85ea3b3f0d47e1132"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","3f4944e9c58cc069d08d5ee4825b09a6"],["/2021/04/22/Review/道印/index.html","db36146b4c7334caa10d745f77fa3ee3"],["/2021/05/03/Review/戀入膏肓/index.html","08104059c88131d49e2ee633ea1cbee2"],["/2021/05/10/Review/Dice/index.html","8816eab3a03b89a335d94a1324b0b9f6"],["/2021/05/15/Review/魔女之旅/index.html","6b494c27810651b259ef817560ea0d46"],["/2021/05/28/Review/戀愛寄生蟲/index.html","02457f618726279ef0fa697110c09f0b"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","7e10b203c7a039710014e02e8a8d8ce8"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","eb60a81ddf7b638fa82bb420f570f0ef"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","82b710b2e8cb21289f375966f7b73062"],["/2021/06/05/Review/流浪的月/index.html","9b636d42f29a1e450a7db605a2c9e672"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","a820d0b143eba9fe46f0857fa6c7d692"],["/2021/06/13/Review/第一人稱單數/index.html","2c2389db9c89b60d332ef23e38009060"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","2f796f424647097d55cd63f88eb9fd31"],["/2021/06/16/Review/願你幸福/index.html","534075c080687f8410539bdef96e4e02"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","16875e55fe7d5b9c2274407dc3052a9c"],["/2021/06/21/Review/神隱少女/index.html","3f83fd8335375c13a6c2e8a7ca82d5aa"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","4f91342da4cbe116212b2ebab92d7e12"],["/2021/06/23/Review/天空之城/index.html","10661efa3825fffcbc5e7707127adc18"],["/2021/06/24/Review/魔女宅急便/index.html","f470a8178da32fa626577fc6aa45d67e"],["/2021/06/25/Review/借物少女艾利緹/index.html","a7b70c37eae6d24c531659634ea2cc24"],["/2021/06/26/Review/魔法公主/index.html","73f95748df0c3e6599fbc1c51adfddf0"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","7465ea6375ee555f0d36e9b4526fbb27"],["/2021/07/04/Review/飛雪與劍/index.html","7272a92aaaca3c94afd72411c5093a96"],["/2021/07/09/Review/地球防衛少年/index.html","fc83aedf796bcc23b10b96befbbba33a"],["/2021/07/12/Review/Angel Beats!/index.html","207846b53d0588b5989115a53319497f"],["/2021/07/13/Review/Clannad/index.html","749ec79c3a6feafb9669e084f2d02407"],["/2021/07/15/Review/AIR/index.html","0c519c60247d3312f9e41823193af110"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","a848b4e2bfb24983d84c53305ec503d4"],["/2021/07/15/Review/螢火之森/index.html","133ad9875fff8a63ea9861dadfefeca4"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","98f897e6e471e466ea76984d518f7d28"],["/2021/07/17/Review/奇蛋物語/index.html","fee6af4c7b5620fe280346c031a4603d"],["/2021/07/18/Review/Vivy/index.html","3f75dede4f8dc0729850365b1e26200f"],["/2021/07/18/Review/請妳消失吧/index.html","6b1e99cc2d7c1529ce7a08a7af12fb95"],["/2021/07/19/Review/漣漪的夜晚/index.html","69b22622c955faffda4d802131de6113"],["/2021/07/20/Review/月色真美/index.html","a45daf833a314a753993b50b74317249"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","8a96159748f2996fb4c3a0ff12583988"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","65c3a8fde441e12fca8dc4e2bc0a50b7"],["/2021/07/22/Review/罪惡王冠/index.html","28f051b6ad4ec4b24fc737bcedcc6c42"],["/2021/07/23/Review/弱角友崎同學/index.html","718f543cc9ac2b7d65f4148e271b86c1"],["/2021/07/23/Review/惡之教程/index.html","80ae6f6bbbe60a28f57dae0109bdb268"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e770ebece54b44a2921447dba0d73737"],["/2021/07/25/Review/魔王勇者/index.html","b9a4759838796d30ade4d5fafb7ba5f3"],["/2021/07/27/Review/一年A班的怪物/index.html","7bfe9203cc957973afbca020b7beb4c1"],["/2021/07/27/Review/奇巧計程車/index.html","b5118980dd41ac2da5e59828d72b2b34"],["/2021/07/27/Review/專情的碧池學妹/index.html","51ef911b85a8706298d97aec2c00a9dd"],["/2021/07/29/Review/只有我不存在的城市/index.html","3115de794c8054370e8885bfbec5de88"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","4e2cb47a2459021bd31554c782b4cede"],["/2021/07/30/Review/可塑性記憶/index.html","f96b140cd2ad160abe8afb7686197225"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","6b51a069dd8eb48dca908533e06a4924"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","18f1e9fbe0d662c9b72fefb231d48198"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","f67afef1a7a7911d419fed3e83c5e2b4"],["/2021/08/25/Review/清戀/index.html","cbd04640abeb483fe7c36556ecc4472a"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","731b955f82a7f9d28a27efd76ff66f6a"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","8bdbd53fa341208467062f863e8ba380"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","6c9fb0d56a14f386e93fc7fd2456cf8d"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","199b8300202b636fd1568550cade2395"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","70b384ed177eccf6861a0465b93bcea7"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","b10757ba3c33a2aca4c13f07022f8383"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3c3b0047c9cff65a0a176eed138968ba"],["/2021/10/16/Review/龍與雀斑公主/index.html","46fde5adeb3afcf7c9aae2fbd3ea3552"],["/2021/10/19/Review/孤狼不想開後宮/index.html","190cf16ae7faef795c8603ba36f828f2"],["/2021/11/13/Review/徹夜之歌/index.html","39820d346ff9ae330cdacdc240bbc891"],["/2021/11/24/Review/武煉巔峰/index.html","4feabe599e0b2dfa4b855870352c2e52"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","53e49ae958033d0da160ee8fd7e513ff"],["/2022/01/28/Review/神醫凰后/index.html","7444756167213366433228e34ff42b1b"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","ada33d7c6737513596c33a60d5d69971"],["/2022/02/13/Review/夏日幽靈/index.html","9b3584efa48a5ae7188a0278318ed431"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","9095539d5ad12a36d3e320dbc949c032"],["/2022/02/26/Review/賽馬娘/index.html","741d6cf1ec526b685a9ad8d7ded93796"],["/2022/02/27/Review/大欺詐師/index.html","bf835ea4f0308e2314e6bcca4663f84e"],["/2022/02/28/Review/前輩有夠煩/index.html","bebb4c8f660502082fbb9a35e3f7b131"],["/2022/02/28/Review/碧藍之海/index.html","b0aa51a2539c9b9a5f058551f5c2a092"],["/2022/03/05/Review/落第騎士英雄譚/index.html","eebe72c0134af2c76671148ac50f2048"],["/2022/03/06/Review/Another/index.html","99c06ced1371c160aedb21c2933a5cd0"],["/2022/03/06/Review/入間同學入魔了/index.html","eebc1f59fe5475443ce25fec33832e93"],["/2022/03/18/Review/再見宣言/index.html","bb5d99d16521cae699a1d989f61a1056"],["/2022/03/23/Review/生若冬花的妳/index.html","9b7d448e5d6bc7d778eaa1c3d0fdcc46"],["/2022/03/25/Review/天之弱/index.html","17c9b0366ba887836335ebc546004889"],["/2022/03/31/Review/滅了天道之後轉生/index.html","7f9d434b91749cbe7a68b40e694f47bd"],["/2022/04/30/Review/泡泡/index.html","d2a34f4ad7bd54d9c774bb24856b9d04"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","c4eb590cd583eb0ce2128730db4172da"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","976cc60d8201eb9a8b279b144e19566e"],["/2022/06/13/Review/偵探已經，死了/index.html","992bffcd4dc58395b56609693d6f250d"],["/2022/06/14/Review/黑色子彈/index.html","f9e7c70e787105de6206e560ad0a26fb"],["/2022/06/15/Review/黑白來看守所/index.html","bd70b4f7d554672b67b03733a0fd9a62"],["/2022/06/16/Review/虛構推理/index.html","6a9dc6a1ff46da765f05863d9d266e2a"],["/2022/06/17/Review/戀愛與謊言/index.html","27df0f53e2e4fb7d09cb5dbe3af9ca35"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","750b0ba23278c667cdf5094e28acf548"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","48cc20382be628b8195f443f3498a58f"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","1252f64ceeecb996172c4682677e98ca"],["/2022/07/03/Review/Hello World/index.html","d30ba228adde76259c6780ce3dd5f987"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","89ad31105c6750f6b84a3bfc883dd13d"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","bb06041909fe12700b1c11cf130e21ef"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","f8fada2c18b030c834d27d4d2c071c93"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","37276b615e5ecdaab028d9b811ef967e"],["/2022/07/16/Japanese/動詞分類/index.html","6e9de5cc64d95263142e42dca43aee26"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","788a125a6d2c6b37e0c20e30bc9eb7ac"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","db5998e76a4976d7984ad800bb4165e9"],["/2022/07/17/Japanese/音便/index.html","08eb3ec8f013eece8026dbf23132ce18"],["/2022/07/18/Japanese/動詞 時態變化/index.html","c7aff68e8d93d551d63225aea2a77a50"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ff64c61cd34d8ac68ce7ae1ce22b43e8"],["/2022/07/26/Japanese/助詞用法整理2/index.html","1028ffa267c0b72026c6785113318772"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","795456bd8ae53374ad5433f46c0adece"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","a9f972120a89b12135d676a48035fde2"],["/2022/07/30/Japanese/疑問詞/index.html","85018daaaf95a0f876af158167b6ad69"],["/2022/07/31/Japanese/助詞用法整理3/index.html","65399e454861f9483e29b647499aea00"],["/2022/08/02/Japanese/副詞整理/index.html","558ccee35a74633dce71c3d7e006f3f5"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","468d08bbfb4872838314ed688dbc44a1"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","96455934325d4f6cb5b6219186a74f0d"],["/2022/11/22/Review/組長女兒與保姆/index.html","f84a20fec169e800dca3b648fddabbc0"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","bb035bd1a3854f88e9051c3f32fc524f"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","b486ff4235d31fc20a2b7e62e5b4674f"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","70a586b7841d5cd4fa88d92685ce366f"],["/404.html","8d32e319c4e2fc4e2360be07fb0141fc"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","5452d1d887061090800a0eb7154ada61"],["/archives/2019/11/index.html","a581a251e290acaca94ad7ba68e572a6"],["/archives/2019/12/index.html","ba77da9dc3a789f07d3ad382e1b6bdce"],["/archives/2019/index.html","67993eb9336639fad5b0093544a4d04d"],["/archives/2020/01/index.html","f4e8c54f0ce980d6cc4698b6ec0ad822"],["/archives/2020/02/index.html","068e4e6f5878424358b352131847d3c9"],["/archives/2020/03/index.html","9b8ff1b0a1f84079ade94ca3a417f706"],["/archives/2020/04/index.html","046c79dfed1761cf68fa0b60bfc5e0e7"],["/archives/2020/05/index.html","461fe6e98799c4cadf4d9704d9b0935c"],["/archives/2020/07/index.html","ced035e0d9f4fb52d19e723c02debb07"],["/archives/2020/08/index.html","76b31c0d8f6de0c6cdefe89be151ed5f"],["/archives/2020/09/index.html","17f7ff9ffe39d02fac174d4bb1868b53"],["/archives/2020/10/index.html","58f533d467243a7b3288aa141b93fc56"],["/archives/2020/11/index.html","be109b74fd822bffa6b571e08e0f7d78"],["/archives/2020/12/index.html","6feac22d225dc84da5d57af9dba5c56d"],["/archives/2020/index.html","d0a904cf8ac9f42e290a5916aaae84fb"],["/archives/2020/page/2/index.html","ced86d980a647c5b4b6976899d773d7f"],["/archives/2020/page/3/index.html","b4b1e13bc9403492f4b46820a765c070"],["/archives/2021/04/index.html","5183ea965e15090b7b95ce96749a612c"],["/archives/2021/05/index.html","afc72351d5714129e833a9d11c177028"],["/archives/2021/06/index.html","b3bd1b7b29ff1629744356525a2a286b"],["/archives/2021/06/page/2/index.html","30b38cbad648b482a635d63bc63fb704"],["/archives/2021/07/index.html","570ce2d65fb25bfddd621465b9245274"],["/archives/2021/07/page/2/index.html","9fa05170cd2aafda738545bd55f760be"],["/archives/2021/07/page/3/index.html","a9c8508caa3d0f3fc9e8f0e74d11533b"],["/archives/2021/08/index.html","07ffef0af135a4a232e17729f69574c5"],["/archives/2021/09/index.html","5a0967a0fee1f85df9762d6c89436761"],["/archives/2021/10/index.html","742e5b7c3021c0a03d2d10eee929b3c7"],["/archives/2021/11/index.html","c295e7cdb309f76bc7feef837e7eb70a"],["/archives/2021/12/index.html","e1debf62d4da3bac79d2da93c453679e"],["/archives/2021/index.html","7e7efb41d640f80a7882e5fd77a8af50"],["/archives/2021/page/2/index.html","a5c4a37413b8aa11e166e5ed905f7863"],["/archives/2021/page/3/index.html","42b83e1ade5c5bbfa47d0fe8e99307fe"],["/archives/2021/page/4/index.html","b830aafdeffb0c42479f83d7902eac4a"],["/archives/2021/page/5/index.html","70b18f210bf2df026f3e804c2db717ce"],["/archives/2021/page/6/index.html","e106f2f3c468643cd27f37278652396e"],["/archives/2021/page/7/index.html","7aa5d8fdcc740eb53463e65948745252"],["/archives/2022/01/index.html","8608ab95d9e2d1494d1bb3720b9d5e6c"],["/archives/2022/02/index.html","eae676a74a5735be66d19c440d51e186"],["/archives/2022/03/index.html","2fd7e20dbb43432972460ad7c9a461d3"],["/archives/2022/04/index.html","9db11d7fdbd8a1cfd46dc0da2397e0cc"],["/archives/2022/05/index.html","ac27f6ac42f448d46d3a829eb0b8237c"],["/archives/2022/06/index.html","e615292ad7ed7d78632416b64a45ea33"],["/archives/2022/07/index.html","6a14639b3398608fb54c589b55487410"],["/archives/2022/07/page/2/index.html","27111ef083532d25239e164d203a4c95"],["/archives/2022/08/index.html","bc0ccd8b2fd3379b4ca282f3b3e90c51"],["/archives/2022/11/index.html","933a23bd0cc7105494f101cd484d152a"],["/archives/2022/12/index.html","b683973587a99f5674967793472c6812"],["/archives/2022/index.html","13c0ee946b39b6bca65c031ee4a94f1d"],["/archives/2022/page/2/index.html","fff7a626f0cefd26621aa79b8f9beea2"],["/archives/2022/page/3/index.html","81ea3952e6839acc7be0dd43f1e617d4"],["/archives/2022/page/4/index.html","0bbe4d429ec853c03bb7544a93e07ce0"],["/archives/2022/page/5/index.html","ff87081047b34b493f334900f5dd225b"],["/archives/index.html","c0a12c0f505c90eaa85451c7558c45c8"],["/archives/page/10/index.html","ce8c159ea1023a8894aa7f2c98f3811c"],["/archives/page/11/index.html","227c73d898d5f23d6fed08d1dea30505"],["/archives/page/12/index.html","2dd9766929043c5626b897cd28fee88f"],["/archives/page/13/index.html","b595959123a060c9440a1ad3a641b3da"],["/archives/page/14/index.html","e52b307b96fb1234ea542bc785852abc"],["/archives/page/15/index.html","947bd265c805e38832552c9d796934ec"],["/archives/page/2/index.html","9744dad1944527bf29313e57581d0d4a"],["/archives/page/3/index.html","6a1d84caac4c49e7a028f2a73e8105d2"],["/archives/page/4/index.html","730b7388fc81f57227e1900bea522a50"],["/archives/page/5/index.html","b032639315ff3c39ab9a15dcbfb13c4a"],["/archives/page/6/index.html","ca70acbb4f54280bcfe754077f556da6"],["/archives/page/7/index.html","893bccd2f2767890f0e739c02875ae92"],["/archives/page/8/index.html","047ae1aaed468c8aac26de6f65b69bd6"],["/archives/page/9/index.html","2ef9b57f7d8818c050ecfdc0212bc341"],["/categories/Algorithm/index.html","82bb1081fac61d16627a7ce6e237474e"],["/categories/Review/index.html","a30830705406e300bfb419478ae9fae7"],["/categories/Review/page/10/index.html","ce19cf604b2be118e5b5c76d47147267"],["/categories/Review/page/11/index.html","9eb817db63eecb994e2da8560a9c7cbc"],["/categories/Review/page/12/index.html","54c44789ec0919294410811091b00d8a"],["/categories/Review/page/13/index.html","1901ce4f16e24a68a6e8b3d02d6ae093"],["/categories/Review/page/2/index.html","6fbdb1a49d075dd4b48bcda394ca78b8"],["/categories/Review/page/3/index.html","3043976e4a1a4b503e9f6c07fc338e9d"],["/categories/Review/page/4/index.html","040926489ca79506440ed2d7453bd84c"],["/categories/Review/page/5/index.html","12c45246a17064da007272c1e7032aa7"],["/categories/Review/page/6/index.html","9e15f145a7a19eaa1320e17ecf2a40fb"],["/categories/Review/page/7/index.html","218b405f22db3e328999a048868bdc1b"],["/categories/Review/page/8/index.html","32ccae79226c9cbabe2aedb50fab63ef"],["/categories/Review/page/9/index.html","39a055f0a46513d15ed789cb4d145a41"],["/categories/index.html","0c59396d56b49fc0e3f8bc4e5134a051"],["/categories/日本語/index.html","88c4d790b510254afa3f1f5439a68977"],["/categories/日本語/page/2/index.html","e7893c7dc1d5dba1ab124ac875fe3924"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5b27dd3d15e276b350a772ef18ddbef3"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","53b6f226b7d999affaa554c43d45d294"],["/page/10/index.html","0415e409db32711c4cdfcfcd9b8698bf"],["/page/11/index.html","b67e5d527135af16b2c754972239de78"],["/page/12/index.html","db73568a4780f272fc3cfcd28cdc1358"],["/page/13/index.html","b51f6afcf8331c5e4c6ef5eb07127e85"],["/page/14/index.html","9f0c2977489c02d879208e84c8ee30fb"],["/page/15/index.html","c0ee72e7853a43775b7e372b854c5a7e"],["/page/2/index.html","41efab5d906a2821d018ea36b51309b9"],["/page/3/index.html","7cf8bbed0640988536c4d7123f639d37"],["/page/4/index.html","c768372343c6849bb409d6b1d98fb187"],["/page/5/index.html","23143780f583ee07d70bc4ec620509fe"],["/page/6/index.html","91b47ab39289c3836df7b4092f353a4e"],["/page/7/index.html","80753d70926d804a4db0f7acc5c4af73"],["/page/8/index.html","1e6a7c89f8e9b2c7de008dfe425dae60"],["/page/9/index.html","10de61b22a483abeffe73eeebe3cca6b"],["/sw-register.js","5958405191d68c9389fccd658ec72bb0"],["/tags/10分作品/index.html","e8caace2494aa5ad10b3041ecc3e1abd"],["/tags/3分作品/index.html","ac58b3607bbbd348f1e6eea8a8a1bd81"],["/tags/4分作品/index.html","55a635ffd0e597ca111015c0fcb06f61"],["/tags/5分作品/index.html","991bbe5e2586b1f5a6ba66b682b95fad"],["/tags/6分作品/index.html","b9989aacaeab7fec73d6a424ee726265"],["/tags/6分作品/page/2/index.html","d6d00990db884b26d0481838bddb170a"],["/tags/6分作品/page/3/index.html","5d87b3bad5e289356b9dc736b92ef80a"],["/tags/7分作品/index.html","fc45d4fb752fb5dbe4f4f9ddf0bee9fa"],["/tags/7分作品/page/2/index.html","48b706734effdc13bb558058af6c3984"],["/tags/7分作品/page/3/index.html","db362da8227ef5557fef8e9c12bedcf0"],["/tags/7分作品/page/4/index.html","7f8621cbd1353a2d0a0fe134f6bc5d75"],["/tags/8分作品/index.html","4408ceaf15c935fa328b152c4b0e3dca"],["/tags/8分作品/page/2/index.html","ba44fa01eb52de09d289d7d21440f8b8"],["/tags/8分作品/page/3/index.html","bf027b3329417f81f583db6d32271d49"],["/tags/8分作品/page/4/index.html","b1cb31ba3223d04d8464f5a0c5ce6481"],["/tags/8分作品/page/5/index.html","6379a9482f7493dd2ff69947bcb78cec"],["/tags/9分作品/index.html","539e6ee3d78d1d9b3864d3c052ec2088"],["/tags/N5難度/index.html","4c569841b9ad3a4cf24664cdd4c6f33a"],["/tags/N5難度/page/2/index.html","42df1ca043cd92de03caae4ad166439e"],["/tags/index.html","7a31c698881be1443f0fd2a5be8cd0f1"],["/tags/アボガド６/index.html","1cbf9a10f81d4b9ab0483c903207bd59"],["/tags/三秋縋/index.html","77833f9affe42f6c8b333a6882f8bdee"],["/tags/中國武俠/index.html","33195028f8eb4b3dc11fc2f6547dbf85"],["/tags/中國言情/index.html","545fb9fd6ff423fb7a659f96ed276824"],["/tags/二宮敦人/index.html","7180649c694e629209122ef5ec72deb8"],["/tags/人性/index.html","b4f5fc372410f8a97c23be1f074b1cae"],["/tags/人際/index.html","18dc3934559a08804c385259f12967dc"],["/tags/住野夜/index.html","52aca253137ab6f51355fba352d30d26"],["/tags/佐野徹夜/index.html","8b4b318f0a29d778bb69db157681c938"],["/tags/努力/index.html","2052ebcf9961b85e9af2110684dc1284"],["/tags/動畫/index.html","37af2d60677f667fbd1e1e72b5ebe1bc"],["/tags/動畫/page/2/index.html","0b1724ad6488f30d0a0bae2b585c3ddc"],["/tags/動畫/page/3/index.html","4e02cc8bdb7a2c0a48ce659e90ce9e1f"],["/tags/動畫/page/4/index.html","f568771c191ac270f25395a0efae94f5"],["/tags/原諒/index.html","fb4c4d8dcafb8ebf59ba76b1bc96ef94"],["/tags/反烏托邦/index.html","9ec730c92adae7ed5622f05585360f81"],["/tags/啞鳴/index.html","8ae1da6fc11abc4a633d4a5d5c86af13"],["/tags/喜劇/index.html","b63ceca11d4e1689c367b307e8789c3b"],["/tags/夢想/index.html","5f8431f283e00ab055c44ceed84ec452"],["/tags/天澤夏月/index.html","708265a238824623daaba07c9b371197"],["/tags/學習/index.html","8ca67bfa443af496854cfbd1ba237f68"],["/tags/學習/page/2/index.html","2087310b973aafc47ac2dfc0a50484d7"],["/tags/宮崎駿/index.html","abfbc6088f4e38cfe84fb55f86e3b4c0"],["/tags/小說/index.html","9474e7c60e3dec86c20b394e84e7a011"],["/tags/小說/page/2/index.html","6a8cd226b21273de48946b7bb100636c"],["/tags/小說/page/3/index.html","ab09e02251788f59ad25afb30ad5a0f1"],["/tags/小說/page/4/index.html","c6324e1dc68300b56e7e21c21b12aaf0"],["/tags/小說/page/5/index.html","3d1097197cbdcd20d2ffa8df5072c880"],["/tags/小說/page/6/index.html","0a699e666ad8a7a2a72ed563eb09aac6"],["/tags/小說/page/7/index.html","e86f40c3b09b6c4f0e9729cf7e71c344"],["/tags/平淡生活/index.html","f8931c349884183a286c44729cd2d323"],["/tags/幸福/index.html","7575bf1af0c7db76549959580dd395e6"],["/tags/志茂文彥/index.html","9980d57db2dbf72060a89833d96662b6"],["/tags/愛情/index.html","45f84e0385d1bf8f209a01826fa61a0e"],["/tags/愛情/page/2/index.html","64a2542b6e4088dd4c524f5c1dfa7ef3"],["/tags/愛情/page/3/index.html","dc04e85c3a47b50056b5ecc78c045a6b"],["/tags/感動/index.html","3ec00b289ad4a0be89c393267fff02a2"],["/tags/懸疑/index.html","1a47645235194b8172bd8073a8940eaa"],["/tags/懸疑科幻/index.html","19b199c816fc65f40e178f5f7296d9da"],["/tags/戀愛/index.html","5e53670f7c13df6aaf4b5c6b9cfa124c"],["/tags/成長/index.html","15b9609de2b44a884c49ca929bb6b4b9"],["/tags/成長/page/2/index.html","fc8ff114f7c24b484056609a6506c15a"],["/tags/戰爭/index.html","9be112dc85d8a5b3568234a8792ddc57"],["/tags/推理/index.html","41ff9f20e84af1788be76f24edf38301"],["/tags/搞笑/index.html","a2ea9f65bc0e0eed8ef4f370de1b7bee"],["/tags/救贖/index.html","faa1b8087568eeb422367d060389873b"],["/tags/斜線堂有紀/index.html","bce826bf11742abed2abd2845530112f"],["/tags/日常/index.html","af218c1d47771012ff4a79c0ef7b874d"],["/tags/末日/index.html","376085cd28edfe446c8473d21fbe8621"],["/tags/校園/index.html","fa7d0eafb28a1ca8117d52b431ba7353"],["/tags/武俠/index.html","e8658a608ebb1afb50c1b9efaf30a3d6"],["/tags/武俠言情/index.html","b6c919730533a584845d62f81530fb9a"],["/tags/漫畫/index.html","7da90939c9d6c8685eec5c1527745d95"],["/tags/生命/index.html","79601ce1bacbf0d92ccb9fa1572ad6bf"],["/tags/生命/page/2/index.html","30f913b3278f80a35728804177c193ca"],["/tags/短篇/index.html","beb60c5968ec7244f585e0dff3d3554d"],["/tags/社會/index.html","1bfb90a3c8bf50f395fa60d287e0f61c"],["/tags/科幻/index.html","51ed65a59a595bafa89800c6d43e23d2"],["/tags/童話/index.html","6cddf52780a50a93396f3996ac6178a0"],["/tags/競爭/index.html","eba086d1953a99473d6d88cdda34bf6a"],["/tags/自我/index.html","2a583dbe2ce9bc57ff9c05c2af798f64"],["/tags/自我認知/index.html","05aad6e0abc7b56ee96066747712f136"],["/tags/葦舟ナツ/index.html","50c47fa956c4083a685228ae76683a27"],["/tags/藤萬留/index.html","5f0d3f60083eb2c463f323456f1b5c7f"],["/tags/親情/index.html","7067306f8ccf7e9888947ff0d34bb032"],["/tags/雜項/index.html","85d53135941a7b7c99f4081f89eec8dd"],["/tags/電影/index.html","82af7f9ed365d8216a694a75e96ea798"],["/tags/電影/page/2/index.html","0113d016cc59e4041543fc2b1aadf307"],["/tags/霸凌/index.html","30178877c99523cafa0c06a41963f79b"],["/tags/青春/index.html","95f3de3236ad14858696527c216da4a7"]];
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
