/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","0bc527e4a745128cf43ce98d1701ade4"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","0efc511610fd739b7d624bbddc8629cd"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","922bbb85467b31769efef415d691c0b3"],["/2019/12/25/Review/無法計算的青春/index.html","ddc66572b86e869a2e8b8f24a03cf8f2"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","1bff2155b84ed016422eee55b524298d"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","b208fa9a175da185f80c31a2986fe74b"],["/2020/01/19/Review/下雨天，不上學/index.html","263e30bfd476539491764e6cf4f0f3de"],["/2020/01/26/Review/三日間的幸福/index.html","81f0e9a523dc74bbecbcea8c979b51d1"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","90352ee6e9e3e3fc8cb0badb4ad644d4"],["/2020/02/09/Review/青春期超感應/index.html","207f607f94f9dfac26ae79980bdb4f4f"],["/2020/02/15/Review/又做了，相同的夢/index.html","f8f78a5f9835e522cfb7f35bc06445e1"],["/2020/02/22/Review/回憶當鋪/index.html","74378b1a419d7880fcae7806e85f11a5"],["/2020/03/22/Review/不適合自殺的季節/index.html","38f5ed8fc7c9783993738018b0f1d0ba"],["/2020/04/26/Review/我們都無法成為大人/index.html","34cec2254d2808397d649698af56b9d9"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","e3f500f6e5895ca9093bdf10a339c9d9"],["/2020/05/17/Review/人間失格/index.html","1cf8118ea45e8fc9cc23d9051dfd5f87"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","f3ded549ed69d4d8485bbca807ff8834"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","0c15c58544257fddaa3456095e8f501a"],["/2020/08/01/Review/銀河鐵道之夜/index.html","46e87d0e6abb32ce2bf9292972c33529"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","eccda29a51364d08e95e5814fa12295a"],["/2020/08/16/Review/15歲的恐怖分子/index.html","42437490d933299a548d92c4a2f0f07c"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","465af226e9cddb33efe9fcd5284c94d2"],["/2020/09/13/Review/羅生門/index.html","bee3552a1cddb2738a40ab84b9abc79f"],["/2020/09/20/Review/闇夜的怪物/index.html","b34e3419443e87648d65f976b291cfe4"],["/2020/09/27/Review/14歲，明日的課表/index.html","80cbad5ab47eb59e9448cfad475ed73a"],["/2020/10/04/Review/致十年後的你/index.html","105c644fc37e954fe7b615d4196aafb6"],["/2020/11/08/Review/滅絕之園/index.html","a140bddd3c07860e15405cc720de583a"],["/2020/11/15/Review/將愛拒於門外/index.html","45643ee420832ba6c1dedb8b56033083"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","6a8bbe4d5067bb367bf58b1615e63bd3"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","24df8fd54a5751c7566fb09b8751638c"],["/2021/04/22/Review/道印/index.html","c21c7240cfed816d5dfb363098e3182b"],["/2021/05/03/Review/戀入膏肓/index.html","6e1c77a21bb3e307c1bc7c6add23e34d"],["/2021/05/10/Review/Dice/index.html","6af3235493dafddb604f6aa077038ee1"],["/2021/05/15/Review/魔女之旅/index.html","0801c570f45feb0593f712f2be09e1f5"],["/2021/05/28/Review/戀愛寄生蟲/index.html","ef1129f4dc1dfb524e8598290e5cbf32"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","7edf66eb77113930aba2e49678297c8d"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","593354f2ea6068514494a0fe38ee9f19"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","013702bf02e28921a93bc3e86af488f6"],["/2021/06/05/Review/流浪的月/index.html","d14820306553e55f36a8090ac2f87f78"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","7a5d9234dcf6dc8c877055d9bf886939"],["/2021/06/13/Review/第一人稱單數/index.html","7a924f82e15c16cf8a936203d771edf0"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","81177c0efd46bd6b04ca8e6a31bf4b1f"],["/2021/06/16/Review/願你幸福/index.html","8cfa395dbbfcf37288f113751358771f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","6f6de3a8809080cbcb89ba8899a1dc93"],["/2021/06/21/Review/神隱少女/index.html","3d2db063bdeba65cbe7ad9f517d16127"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","8a4e146e54662bc2087826ebb61ef5bf"],["/2021/06/23/Review/天空之城/index.html","950f06c82f337a573373891d567b8978"],["/2021/06/24/Review/魔女宅急便/index.html","c4c675090cbe2ea9628b9ff183c048f0"],["/2021/06/25/Review/借物少女艾利緹/index.html","0fe413ceb9031f2379ae291b90641f10"],["/2021/06/26/Review/魔法公主/index.html","97c91f9163bf178b2e71326604252179"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","018f96967c0397c9ee529e0eb93747aa"],["/2021/07/04/Review/飛雪與劍/index.html","0c6e0cf41d033a777ba1eaeb8743fe54"],["/2021/07/09/Review/地球防衛少年/index.html","dc9da047939805287a83004c47a15a1f"],["/2021/07/12/Review/Angel Beats!/index.html","b0e66abb23f6464c2352a4f614317627"],["/2021/07/13/Review/Clannad/index.html","72e61c9843ff87ea4c56a61f9ab68d78"],["/2021/07/15/Review/AIR/index.html","937a184eb76df6d3d1d93a026f414d73"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","0c4cfa4d71f0be20c6b450903b995e71"],["/2021/07/15/Review/螢火之森/index.html","9382a012e6746e138d1151f231260b4c"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","f3018f1c67bf2dc20cfadef80c5fc073"],["/2021/07/17/Review/奇蛋物語/index.html","dd7185d35d17cc493e2a6af048b07942"],["/2021/07/18/Review/Vivy/index.html","a0c9da195bc04ea2a4277dc4ff33bcb2"],["/2021/07/18/Review/請妳消失吧/index.html","cfa9c3827d410d194e188e65c3a840c5"],["/2021/07/19/Review/漣漪的夜晚/index.html","fda7efdd03b773b9606fbdb323364d2e"],["/2021/07/20/Review/月色真美/index.html","46532c83852c5d9cde802e758cb8fdde"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","c37b90cf189978de80f0f9e0858432bb"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","2ed5213978de8f0f7fb2e3ce7de87c0a"],["/2021/07/22/Review/罪惡王冠/index.html","098b7dbad75bc701df385767b2060552"],["/2021/07/23/Review/弱角友崎同學/index.html","78131911c4c459d8dc46c3807d32809d"],["/2021/07/23/Review/惡之教程/index.html","3675802355fea1ac83331895f83b048f"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","7be284c9c22d7934adca9aa530520d32"],["/2021/07/25/Review/魔王勇者/index.html","8c9afb4871f64458dda8c7c505ae028a"],["/2021/07/27/Review/一年A班的怪物/index.html","05afeaaae9aeb29e895edea57c293632"],["/2021/07/27/Review/奇巧計程車/index.html","985d76cbddacd4097982e3776799e707"],["/2021/07/27/Review/專情的碧池學妹/index.html","c6b0d4f863d5ba4881a87f98c40a6892"],["/2021/07/29/Review/只有我不存在的城市/index.html","90c5fba740b1a6a28ab497cde4fe03bd"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","912d74d70028d7a5625ac30db25b8ae7"],["/2021/07/30/Review/可塑性記憶/index.html","65deb926d489f613a84a1080cda8e988"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","f6eec3e31ce941bf05f44ecdb929c6fc"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","54c23ae4c516c1153b582d87b95d24bb"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","365483ad2a2a701270e26ad966c8f128"],["/2021/08/25/Review/清戀/index.html","3a332c0390a75a9da354fa8c5fcb7115"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","e4ba9950b623f65651d4f72d46c4d3ee"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","f3a1e671f4f83f0e9b45cb8b483055ae"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","c19f9a4ea778cf2d681c8e05d1a8770a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","94bb45a3c25a52f9e55a11a95f4e1e3c"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a13d8afe25991fa4c4b7fc537d893d55"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","59fb669f2b7cfabf22f2b43235958e64"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","10a2515f0a0b4d1a50ed56a2ebafe393"],["/2021/10/16/Review/龍與雀斑公主/index.html","f684a87e1de11a060b3efebc44e75683"],["/2021/10/19/Review/孤狼不想開後宮/index.html","9cba6ba780fec362878e3a76193422ca"],["/2021/11/13/Review/徹夜之歌/index.html","85402d2abfc4fa5ca3c5efc926de79df"],["/2021/11/24/Review/武煉巔峰/index.html","be688f929e821ee3eae357f587627cdd"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","295ceff6ef35621a1aa74bf641e2ce63"],["/2022/01/28/Review/神醫凰后/index.html","71bd903f4e520efad24e962875444af4"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","11f3e383a2f2be9f13b97ed9a18eb0c3"],["/2022/02/13/Review/夏日幽靈/index.html","25432e20d7759110e1e71a3a46c8b10b"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e6081d901dffe857cbe7e465129a8954"],["/2022/02/26/Review/賽馬娘/index.html","4573456184aaa9385610e815eec230e0"],["/2022/02/27/Review/大欺詐師/index.html","a5f240215df1d22395aa1b2fa7e174dc"],["/2022/02/28/Review/前輩有夠煩/index.html","67b2d4a01b612893c37e235adc97a13a"],["/2022/02/28/Review/碧藍之海/index.html","83a62fa2d32379e3641199867b562d86"],["/2022/03/05/Review/落第騎士英雄譚/index.html","1198bf3d6318daaafb4525e2c54907a3"],["/2022/03/06/Review/Another/index.html","6ee9e2e18400c1e978bb94d62fae93ed"],["/2022/03/06/Review/入間同學入魔了/index.html","5b7a97431a7752a2a8b4bc40fb2aecbd"],["/2022/03/18/Review/再見宣言/index.html","abf570e16848ec9df06e3dbf03149d55"],["/2022/03/23/Review/生若冬花的妳/index.html","c433af2e19eb9c2a3e7d53b5e37fff21"],["/2022/03/25/Review/天之弱/index.html","4cae99cab251436c223bb1b178f9f2fd"],["/2022/03/31/Review/滅了天道之後轉生/index.html","75d509f296ef5019141fdb21a213e8a9"],["/2022/04/30/Review/泡泡/index.html","fb05d309d29a78b55c639196b18a0b46"],["/2022/05/04/Programming/Dynamic Programming/index.html","97c173cc50c28b36ac41de424825a251"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","86751ee4aadaf3861eb23029664cfb63"],["/2022/06/13/Review/偵探已經，死了/index.html","d492ba62bdaa476a546df80eee8d65eb"],["/2022/06/14/Review/黑色子彈/index.html","050e9788d313b2aa213d46f2a7c2b5b5"],["/2022/06/15/Review/黑白來看守所/index.html","9486162c1007be3f5dc5cef7e30a7255"],["/2022/06/16/Review/虛構推理/index.html","720442fc31bb5b67c339437fcce984a3"],["/2022/06/17/Review/戀愛與謊言/index.html","915897abb894ee5f9941c10e8153a6c3"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","002f67340e16bed8e29adf4575534c00"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","f075b75ee2d26e95f06fb093ea7d2a19"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","f582a8977a089427eca93d0e8060db95"],["/2022/07/03/Review/Hello World/index.html","941d0920c06b638ffcf23529b33e6283"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","70018248a61922600429e99f8d95c254"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","b4ccddfcc8b308417b01f245959ed10c"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","ce8cdc4cbd6671a34171c1b6c3f7da1f"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","dc7f87475985b573514b82db798171cc"],["/2022/07/16/Japanese/動詞分類/index.html","d171cde7c38bea6b0d4bc67c0770aa4a"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","ecca06cd5d17a207f18e37f300a14acc"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","dd971f2f041825710cefe4bedba27d42"],["/2022/07/17/Japanese/音便/index.html","f5d82f231283072c83c196a2c79e3350"],["/2022/07/18/Japanese/動詞 時態變化/index.html","7a242635d42ba1bb066f3a26ac9b271a"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ac4ce4591e61fdc7b2ac713c5dda7d67"],["/2022/07/26/Japanese/助詞用法整理2/index.html","85c916ce181394bf1fc8d85f647d449d"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","15ae79cb305ab00b65bd1b6404b79bd3"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","652af2b1428679b71e92447b93f76d5f"],["/2022/07/30/Japanese/疑問詞/index.html","a3e412d106cbdbf661ff2f3fc52b29cb"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3d932233c80a1956e0c409f3204d745d"],["/2022/08/02/Japanese/副詞整理/index.html","64e62e7eea4655c92528eabc6bb36c70"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","0115ff813f571773538e5ed947d26dd0"],["/2022/11/04/Programming/Data Structure/index.html","50d6dd4a489a86a00b60ae66d066ea24"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","8647ad1a12ab8d50de1128b5af474e6f"],["/2022/11/22/Review/組長女兒與保姆/index.html","731b71552e9639bee029e99ac892ab17"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","ac36a6c7b181a598f9336b0cbd6741aa"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","c8a8f9fad18401df2db65e494b976da8"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","03abbf5916e181221893c61ff41e534b"],["/2022/12/31/Lyrics/一番の宝物/index.html","4e84646f8736670c75e0315d6b6a8b7e"],["/2023/01/01/Review/あの夏が飽和する/index.html","6edfc1ec61bb54fed611b2ffae6b72f0"],["/2023/01/02/Review/孤獨搖滾/index.html","c0bf76907cb5a04fbe515ea8b0d4cd7a"],["/2023/01/02/Review/藍色監獄/index.html","bc6f5acf57b1a89de20dfae03fd9b19a"],["/2023/01/03/Review/來自深淵/index.html","c77b5184bbc3e7ff3feb20e6e88dc1f4"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","533d66a898a643736a2c012bc207255e"],["/2023/01/05/Review/處刑少女的生存之道/index.html","817f8b3d2e193201462b26c38d85fa86"],["/404.html","df3e5ca8ff1c5883d6eb9e70cd254f0d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","e666f0fe4abe03b2ed5b2f2354d27d4c"],["/archives/2019/07/index.html","c0674f7640e4329b72e4b2c8afc42b2d"],["/archives/2019/11/index.html","3438753ea930a4728ef84dbbc8325be6"],["/archives/2019/12/index.html","44e304e79a239261adc963d9d6b05a57"],["/archives/2019/index.html","de08498b092cbd738a3b72c1d67431d2"],["/archives/2020/01/index.html","6351de7bd065d0e995a4ce5752026ab9"],["/archives/2020/02/index.html","51b37e8b389e2791c25bee292f58274c"],["/archives/2020/03/index.html","1d5d66fef916f8284123c059fc899d3e"],["/archives/2020/04/index.html","e036ed3a760db7ea0bdc082ddef0bd58"],["/archives/2020/05/index.html","67c72050274a51f48b7b2e3f3715752e"],["/archives/2020/07/index.html","dd25b6efda06c0d8264b68e898bb5c17"],["/archives/2020/08/index.html","d6e461925f5f8d5068083b725c6a5971"],["/archives/2020/09/index.html","10f2cbd9a6527af110a6549577786beb"],["/archives/2020/10/index.html","34b52edfec68d89f9ed5c71817b9e8f9"],["/archives/2020/11/index.html","ed640f67df3e823f18165f99311c19e2"],["/archives/2020/12/index.html","57a360f94c4d1c62544a5207034ee6e0"],["/archives/2020/index.html","60782f2d030d7fca62609527a7221fa8"],["/archives/2020/page/2/index.html","ba9101f448c5b5dcefb32e9ee1c4c633"],["/archives/2020/page/3/index.html","da600a10510b33f19a39957b8ffedeb9"],["/archives/2021/04/index.html","7b558462e59599df72b1dea26c79c347"],["/archives/2021/05/index.html","d49f051a4314c472c0ccf55fb83ad3c9"],["/archives/2021/06/index.html","e69da15895034755e3ae186000c2e514"],["/archives/2021/06/page/2/index.html","b43551cfc3a254ba95dbaa0a0650171b"],["/archives/2021/07/index.html","aef7400cda1d47a31f51b45ab483dc25"],["/archives/2021/07/page/2/index.html","f485e85b8adc4889dedd79ad33198e75"],["/archives/2021/07/page/3/index.html","165b9133c3100e62e55d06693593012f"],["/archives/2021/08/index.html","5323a7a356204bf02624978ad391979d"],["/archives/2021/09/index.html","843e773132bc2ba884a49c25290bbebb"],["/archives/2021/10/index.html","9deef1e995326d748945fb529cdec16d"],["/archives/2021/11/index.html","c46d7293cff103ae8592efc67eb84c78"],["/archives/2021/12/index.html","1fa1ed642cd6be172cc4103e23e9a768"],["/archives/2021/index.html","a87b1ebb92a587c3705e6bde65b167ab"],["/archives/2021/page/2/index.html","0a25e2f81169029d59541ab13fbb2a84"],["/archives/2021/page/3/index.html","e21065add1de56e978d7072c0d989012"],["/archives/2021/page/4/index.html","df1f81ef09300d5f94df11fddc9dafae"],["/archives/2021/page/5/index.html","b5dcc0737bc006423f0f48262f9fa13c"],["/archives/2021/page/6/index.html","fae8a5ca6c530e9e1fc8a4980ce9aa1a"],["/archives/2021/page/7/index.html","acdd63921ce370cbab0590a3cc2c56d5"],["/archives/2022/01/index.html","7a6dbc435f3439216688199eda149a08"],["/archives/2022/02/index.html","bd4a50309b80b49cb170edfc3e638319"],["/archives/2022/03/index.html","3494995fba7f3245a4155c28497cb53d"],["/archives/2022/04/index.html","ea6cb2689079b91d1a53e4773ee8053b"],["/archives/2022/05/index.html","057d7ceeb9b970f2508cee3eaab59d11"],["/archives/2022/06/index.html","42c428a9fca1889ebebcc4e14ba06d31"],["/archives/2022/07/index.html","35db6ff5c14fc24ee5ddc25b1dbb9c65"],["/archives/2022/07/page/2/index.html","043d14a43719023f45c7769bace166c9"],["/archives/2022/08/index.html","17e4b1e0ff4b12fcf1a73a6ebb593acb"],["/archives/2022/11/index.html","314c2e86af52a94b3dd52ba7955f69fd"],["/archives/2022/12/index.html","75735d4ba6c4223d1c3d0418b6599d17"],["/archives/2022/index.html","6e120b7a80324a608c2865a8c4677d7f"],["/archives/2022/page/2/index.html","78e70f53a804663e5e008f00132bdfc0"],["/archives/2022/page/3/index.html","39626892f2ff81aaa90d1b01835e9482"],["/archives/2022/page/4/index.html","cccb5cf37fbe200845166bd140124ec5"],["/archives/2022/page/5/index.html","52b13a08dc5ecbf301d4cda32f1ae76a"],["/archives/2022/page/6/index.html","250ae2ed643dd12ac6cff411e187d50a"],["/archives/2023/01/index.html","b8dfcc77e04409266bfc069da81b501a"],["/archives/2023/index.html","0677900b8dc590380ff2df4cea4b7939"],["/archives/index.html","d56322f2e13901c42ba96115e6763bb1"],["/archives/page/10/index.html","590019e6d0f6ac50b7a23aadf189dec1"],["/archives/page/11/index.html","1422f2f89424c397768c9d71c4379448"],["/archives/page/12/index.html","0fbcc7c52ddb5f52c6a0ff047ad9b372"],["/archives/page/13/index.html","a6b5bb79e63d467dff65bf6ff67ce6d4"],["/archives/page/14/index.html","0127e108ca9d29ac661bb3f40d491b4b"],["/archives/page/15/index.html","0c02ef7e744768142f3eced10ba2bd96"],["/archives/page/2/index.html","54073aca097c0b350b4b9d992206e0a3"],["/archives/page/3/index.html","f7eedf514458c7704f5fb4261d454921"],["/archives/page/4/index.html","f0e40237901fe11bbffa1e4f726bec72"],["/archives/page/5/index.html","d2ade6414efb979c5c29577916be31b3"],["/archives/page/6/index.html","79844ddab292ed7c2b3c6244e443fe36"],["/archives/page/7/index.html","34967267705d0a86ab5a33e2acbdfc5a"],["/archives/page/8/index.html","e24076f64f9de66de7294d1810977c0f"],["/archives/page/9/index.html","8d9555639e6d6a267e2c54c7b31d7d36"],["/categories/Lyrics/index.html","5eac98d1fae9c395c73cfd7e9af3a1a5"],["/categories/Programming/index.html","91251a96d7428d53a8a00ed8992b6ded"],["/categories/Review/index.html","f23ea9c5d7823af793135e59b522f323"],["/categories/Review/page/10/index.html","465526e9b6bfe0c5d91f30841825581c"],["/categories/Review/page/11/index.html","10ca5a950d2e0e5aad97758c622282ca"],["/categories/Review/page/12/index.html","c199ce491b53ba4cdd04d53726d62c4c"],["/categories/Review/page/13/index.html","dbbe8a4bc0e82054a9d9bfbdb6532617"],["/categories/Review/page/2/index.html","33242e15b46d21dfe76d9c1a283f765f"],["/categories/Review/page/3/index.html","43278c73ccdcbaac331f19d289fe82fb"],["/categories/Review/page/4/index.html","31ac31be16295f8e70bd611cb1eb697f"],["/categories/Review/page/5/index.html","48db4518f94567bf84214b4d5127dcda"],["/categories/Review/page/6/index.html","362a1b10f285ec06ca74a6935d82a20d"],["/categories/Review/page/7/index.html","492c2a6cb44cac83cfe25f7f6d92cf40"],["/categories/Review/page/8/index.html","086be4520b0fb91b6d3151a345dc0c34"],["/categories/Review/page/9/index.html","f643fa4f0aa4ce3cb04157b3d0a31c10"],["/categories/index.html","96a66eaf2fff043bac9efb4378ff1994"],["/categories/日本語/index.html","46e84f736328d4ad15c6f9ee581a0abb"],["/categories/日本語/page/2/index.html","02d8823a4973bdbd9c67f94d6f5e7e4d"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","948a8637b03232ff344f7cdf64689747"],["/js/custom.js","2b7e785b857773766c776e2af8375ca3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","7d693211a62249950b93a82c544325a0"],["/page/10/index.html","e202c6f17569135776831cf37badfabe"],["/page/11/index.html","3cc6dd8f28963827055177f2d6a8db58"],["/page/12/index.html","beac3c8dbd13932b04ca6800ec5b5038"],["/page/13/index.html","784c9d260ccdd693a6706eee202c9145"],["/page/14/index.html","dfe4f0886112811046f565e969205ff8"],["/page/15/index.html","7d836d8e84347b5139b32ec8667d0170"],["/page/2/index.html","4e0d8aa9a06321edd0390728a6ff2c59"],["/page/3/index.html","cd081cfb423f7e496c2c995484ef1705"],["/page/4/index.html","65e85d633455da5c0bb17d9f5c765d41"],["/page/5/index.html","48b3abca9f7a685ad073cdf4fe38fcc1"],["/page/6/index.html","e813f4e79134d4d58f0c6b42e3edf3e2"],["/page/7/index.html","d02f735c907e17213f71ee8281539b9e"],["/page/8/index.html","5bbe7cd7e516f4daef113d89020f44bf"],["/page/9/index.html","938109c9d2780456b8360a33dc0cb778"],["/sw-register.js","3283ecb3ab241a62e6c1c6b1dfec2ba3"],["/tags/10分作品/index.html","5397fd882996a87be815410714c3428d"],["/tags/3分作品/index.html","e33af1d3e7d3c2ab11fd55baba322559"],["/tags/4分作品/index.html","f2bb19aaa57b5b831acdd74e13bec7eb"],["/tags/5分作品/index.html","466d6e4efccbd70f856e20b98e9a041b"],["/tags/6分作品/index.html","88d3b7803c83ea78b1ef8218fe0f3998"],["/tags/6分作品/page/2/index.html","9173b6eb62c39861964df8f96b0fb11e"],["/tags/6分作品/page/3/index.html","865ed38c89e60de1c452c8969d8454d8"],["/tags/7分作品/index.html","08b42a9dfb23c165f4fc53653f2b6250"],["/tags/7分作品/page/2/index.html","3b6d22ccbbaf2e6170228e47905ae1f4"],["/tags/7分作品/page/3/index.html","e671ab6845387afdcef374d9659e7e3f"],["/tags/7分作品/page/4/index.html","cfc4e8012c4c28e21e51f9685f47b782"],["/tags/8分作品/index.html","bae33eed71593940ff91cb8061581c0c"],["/tags/8分作品/page/2/index.html","e402c57a77e5a62e87ca0b693039dab0"],["/tags/8分作品/page/3/index.html","660e8555a88b669033227efd63feefbd"],["/tags/8分作品/page/4/index.html","1ac7ced2251df558236a90232b7433b3"],["/tags/8分作品/page/5/index.html","39eab7c573437dbe7be1c4674e8a99fd"],["/tags/9分作品/index.html","7faad5c335ddf277c6c57a204fa4dbea"],["/tags/Lyrics/index.html","f772e2d2d9e6de854379b296b3706f09"],["/tags/N5難度/index.html","dd3467584926423bc78e85116ebc7f7a"],["/tags/N5難度/page/2/index.html","778fe652033ac3f1cfb5d10f793fc609"],["/tags/index.html","84256f6a76794370c0c2bac17593b024"],["/tags/アボガド６/index.html","4c141d6995e89244fc5849835fa74793"],["/tags/三秋縋/index.html","c059bb75fb4965b13031059ebb16662b"],["/tags/中國武俠/index.html","b1edc5853847cb07451338f5bceae9f5"],["/tags/中國言情/index.html","ec73e6e348a7035381cd9efd61bbf80c"],["/tags/二宮敦人/index.html","95f9932c22365f0c585e6b6ef702d4ae"],["/tags/人性/index.html","f6ac01337bbe052e4336db82361c22f5"],["/tags/人際/index.html","55301354b5e4fba5b8fa7c4ca0c7423f"],["/tags/住野夜/index.html","ffb89dae4371becd7e8cc005fc72ba67"],["/tags/佐野徹夜/index.html","0d5490704bc2f7fe3450cc80a07007f7"],["/tags/努力/index.html","bdca1c91a76ae9c3bfbcf44fab450996"],["/tags/動畫/index.html","cedb8adc4a6ebcc89efffb716b49bb20"],["/tags/動畫/page/2/index.html","7b082f327443d7000159c47480fb7561"],["/tags/動畫/page/3/index.html","a5b8127290f87ba493907af247bc1747"],["/tags/動畫/page/4/index.html","193575693091386a0f227381055cc296"],["/tags/原諒/index.html","b5111c2b2ce0db5d44d2e530798f838a"],["/tags/反烏托邦/index.html","b7521cbac9de4ed8919c491ee0d673b2"],["/tags/啞鳴/index.html","f68d49f2a9013788833e031d2129ad72"],["/tags/喜劇/index.html","65d2aaab00950c9fc92023d210ed8b28"],["/tags/夢想/index.html","0f0039f4c242a4d6948a8908bde7fa01"],["/tags/天澤夏月/index.html","af9b9f45c8aa6f2251998fbbb53df9f9"],["/tags/奇幻/index.html","07a5f5233a8fdeb213814d1e1d2787bb"],["/tags/學習/index.html","4fcc67a602723260763fa60cad3b587e"],["/tags/學習/page/2/index.html","896f5eccc1358db9f10f7b38543ca468"],["/tags/宮崎駿/index.html","6f3679b8bdd8d5045b4afa35707b4bf8"],["/tags/小說/index.html","75cbcd8cc48be3bf7411cac010acd596"],["/tags/小說/page/2/index.html","0d95375f5da9a9e0afac4df0abb702f2"],["/tags/小說/page/3/index.html","9dc46cf16226a8ac4d0337923b0e66ba"],["/tags/小說/page/4/index.html","18fc020f940c56222222338721eabee8"],["/tags/小說/page/5/index.html","826ebbb525236d26e06e533593727ea5"],["/tags/小說/page/6/index.html","f85ed889666df753fd5ae0fb72889efd"],["/tags/小說/page/7/index.html","2d268542c2e4e95c580eebda00712d3a"],["/tags/平淡生活/index.html","e48582eada426f4d2ddb5909d2ec508b"],["/tags/幸福/index.html","e62a9227c16d49154a364b8bbba4b172"],["/tags/志茂文彥/index.html","ac1650398ebe157c6666feda4742eafc"],["/tags/愛情/index.html","dddbd3d88729d5fb33ce3af3053295fb"],["/tags/愛情/page/2/index.html","96b6bf7efccf5dd6e00a51892486155f"],["/tags/愛情/page/3/index.html","f672b81f5b1d4871dee600e71b084cc8"],["/tags/感動/index.html","35edd8f471de04b89d2a0f9d03c0010b"],["/tags/懸疑/index.html","b8e12601c77825258511e2c13dc7fdd1"],["/tags/懸疑科幻/index.html","e03254bb3ffef4756ba7c34e09b61f1d"],["/tags/戀愛/index.html","d7de2fef7fbd7c46b4096dca02fab054"],["/tags/成長/index.html","0ad37a581557e0d3a4e0908c0b501ea5"],["/tags/成長/page/2/index.html","69d39d08217f385f90b711dd2a93f284"],["/tags/戰爭/index.html","54216b6dfedf28e3cf4c2b7ae4c30dbd"],["/tags/推理/index.html","1a36001c860dcd9696c04ec62ff34d5d"],["/tags/搞笑/index.html","62a8203d76ffb392d24b66f801fbb7dd"],["/tags/救贖/index.html","44e8cfa0028e6bee9f253e64471530bb"],["/tags/斜線堂有紀/index.html","1b553ae72e6edb729e977e0cb4eb90b8"],["/tags/日常/index.html","8aa21380f6b05f2b4a7922cc9f9f5584"],["/tags/末日/index.html","dbfd5b40982298d033fdfbd1b349442f"],["/tags/校園/index.html","9dfd92f79158a3d8edd5a7d231230d2b"],["/tags/武俠/index.html","e04a6749a9c7cf21f40f29dc3c63bad0"],["/tags/武俠言情/index.html","e36472b980f2fc36ba242d6fc0a74e38"],["/tags/漫畫/index.html","076157ca8728c5d3985834daf5126664"],["/tags/生命/index.html","4278153a15a006443a14efb92c78d3d6"],["/tags/生命/page/2/index.html","0a65d63f9030aed01b2566bef93b11a6"],["/tags/短篇/index.html","8c531315cead686711efb11f29b2e89f"],["/tags/社會/index.html","2b1166f7342de50cc9b125d7a014116f"],["/tags/科幻/index.html","92b6d888b13ec72b22aa09f623e8eb47"],["/tags/童話/index.html","3b041104cc76db6f016e90287478322c"],["/tags/競爭/index.html","2aa141b9bc2007636148f2f89e93c811"],["/tags/自我/index.html","9a684e322ecf4882badf6b826b8cd77a"],["/tags/自我認知/index.html","f22824bdaa066d9d1f9ed9d8ffbfc386"],["/tags/葦舟ナツ/index.html","e30ef1c75e2f0508f73ae1c85255c686"],["/tags/藤萬留/index.html","50962cefe429849ae3e3e3cda2b7ecb7"],["/tags/親情/index.html","41676c7ab784ff0c07ec967518dd095e"],["/tags/言/index.html","530a2dac62eef8d4e71eb8414125536e"],["/tags/雜項/index.html","52b1eb3820a71c7e698a9ba7569caecd"],["/tags/電影/index.html","0dfaffb85b33f386efa5fe5a5a89e2f2"],["/tags/電影/page/2/index.html","86d2b8bf85082cfcb3aa937b18e780c8"],["/tags/霸凌/index.html","b7034b7804f0f5b32bd854d597767334"],["/tags/青春/index.html","ddbd12592c06b1cab0a1573881a65ffd"]];
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
