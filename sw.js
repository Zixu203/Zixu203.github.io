/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","4132e3a1ebfddeb1d5805f9e5083a88c"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","05a5d509b2b24c12160737a6cf08fe83"],["/2019/12/25/Review/無法計算的青春/index.html","e7423bfef1275eb5e91ff00046a1a4db"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","7c87a14281fe3895dbc0d4503db1524c"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","8a24327f1514287e743ab8a7a1a2b32d"],["/2020/01/19/Review/下雨天，不上學/index.html","757704c4337c6f148ad47e5060b3033b"],["/2020/01/26/Review/三日間的幸福/index.html","89ca881c2bf22b7caf05b62b9db3a083"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","2c3fbc06878668b05fb2565e9f6c5c22"],["/2020/02/09/Review/青春期超感應/index.html","fa5265fbe696c7dab7a0b97446d2e2d6"],["/2020/02/15/Review/又做了，相同的夢/index.html","d99201a27103976917d6f5882a957170"],["/2020/02/22/Review/回憶當鋪/index.html","2e3e5f01353642c0338aa7e54e0e7cb4"],["/2020/03/22/Review/不適合自殺的季節/index.html","085d989633df319aa1bf002ddcc6c6ba"],["/2020/04/26/Review/我們都無法成為大人/index.html","3bc89532ad4405e7080f5ecf07ac6027"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","6abe240cdb34ec236f6aa5ea699cb72c"],["/2020/05/17/Review/人間失格/index.html","6b3047cf93f26ab0b8e85ab6e34a5d6d"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","55deecdb6452ee61cef6d2f894bd16b8"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","e2e0236e7a1789f279d004e77a5d1158"],["/2020/08/01/Review/銀河鐵道之夜/index.html","a9ad649efb83b0aaef8e5696c26c29ee"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","4d215a69d79a70c7d57766950f66d78c"],["/2020/08/16/Review/15歲的恐怖分子/index.html","6e16c2de4a8cf7bf20635b9a9e341c69"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","39a927544972cd000e19b8ab4c702696"],["/2020/09/13/Review/羅生門/index.html","e83d9ee1240d6d41accd9a267abc2c4c"],["/2020/09/20/Review/闇夜的怪物/index.html","e10ee755787b0f76be9950afb0cac1c7"],["/2020/09/27/Review/14歲，明日的課表/index.html","202f2387fdd9cea45f726b2698b5b971"],["/2020/10/04/Review/致十年後的你/index.html","6fd9029d7e9f3a8fe3a8a1e171070193"],["/2020/11/08/Review/滅絕之園/index.html","d258b651b13e0a0799046f8ee34ad0e0"],["/2020/11/15/Review/將愛拒於門外/index.html","89aaa4ef2846d9c98ec96aa2a4941784"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","c6fdef619726b920e24b6f5b8305dbdf"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","f166af4daeac766e5e450c9d07112de0"],["/2021/04/22/Review/道印/index.html","f361751d4db00180498b1c80630d02f1"],["/2021/05/03/Review/戀入膏肓/index.html","03b7908889f75d1074d0181bba307d05"],["/2021/05/10/Review/Dice/index.html","83cb13972e6d44a68c457a20d5a21f3c"],["/2021/05/15/Review/魔女之旅/index.html","8a52bf3ecd7da971ab91d142132e6362"],["/2021/05/28/Review/戀愛寄生蟲/index.html","818833d28a5b88739d6345d1260462f6"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2a9fb3fc934685b4ca2c538c6a174c2a"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","e9122ecab7c0a4a75e034860aafda7ab"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","37ef87b849937c3be4d80b86248b60cf"],["/2021/06/05/Review/流浪的月/index.html","7c7949c99ae5c65769ac73657a89780b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","64ee32427bce81757a1cbc511b10e1d8"],["/2021/06/13/Review/第一人稱單數/index.html","fdbc4c7e32255de4916ca728e4ceccc3"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","d074843eb4e5589ef25978ba35433411"],["/2021/06/16/Review/願你幸福/index.html","e2aa552d3121c534bee17483934431cd"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","b1ae543c930c127cc2702f737f9d145d"],["/2021/06/21/Review/神隱少女/index.html","ce609d78c57b95429e9553c790f728a0"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","24f06f0d41e59555fa85365c63bef2e7"],["/2021/06/23/Review/天空之城/index.html","2d759a1d37e9f2be67820f9a124792a2"],["/2021/06/24/Review/魔女宅急便/index.html","a231640c642ee3a4dc234dd848d5fecf"],["/2021/06/25/Review/借物少女艾利緹/index.html","f8f528d681afbf28f0dbdebd64472273"],["/2021/06/26/Review/魔法公主/index.html","b7b60ec997a2d0c88b7a5cee27e73d2e"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","05dfb00ccd99faf02b442df493519799"],["/2021/07/04/Review/飛雪與劍/index.html","6c0f59849c56477c49aa136ebdd837a5"],["/2021/07/09/Review/地球防衛少年/index.html","84532fda0b0375510c3dee359254af10"],["/2021/07/12/Review/Angel Beats!/index.html","0e94fb8272fecae71aff5181975c6a72"],["/2021/07/13/Review/Clannad/index.html","25cc466c3cdd6c28f1448a113cee4ac9"],["/2021/07/15/Review/AIR/index.html","833179839e62158afcb0c410bf069f24"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","b750d26538ed039fa9af58d5a4d4e07c"],["/2021/07/15/Review/螢火之森/index.html","89378bb611b24fed0271840cecb69973"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","7b56460ceb6c9286d24cf97a2792425c"],["/2021/07/17/Review/奇蛋物語/index.html","7f5a3610afc8f5624e873b92393c1bdf"],["/2021/07/18/Review/Vivy/index.html","ac27f10792020b33840927eb067c109a"],["/2021/07/18/Review/請妳消失吧/index.html","0b049369d10761b66255f917d5068c9e"],["/2021/07/19/Review/漣漪的夜晚/index.html","b280dd9ebac266534a3c791a39d0a46b"],["/2021/07/20/Review/月色真美/index.html","8ac12e3b8647e790cbbeadd21613f2d4"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","7afc1f5d66e8cd418057962ebd96a3ae"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","fc8bb5f1f3f42bd624b72749b1911a43"],["/2021/07/22/Review/罪惡王冠/index.html","610c0c6b526b931b074ebd142cbce8d3"],["/2021/07/23/Review/弱角友崎同學/index.html","0e04e5f36f600ec925373be9b1e328b2"],["/2021/07/23/Review/惡之教程/index.html","78a3c6c949da422e84c165763e6b086e"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e7bea173af824cc5a45a352eca377050"],["/2021/07/25/Review/魔王勇者/index.html","3c313b71aa83b1600a088d10a7fc267e"],["/2021/07/27/Review/一年A班的怪物/index.html","2bf68e7608d8ea998c8070f15a61dd56"],["/2021/07/27/Review/奇巧計程車/index.html","080a7ed28096953a5bf8e3006a519477"],["/2021/07/27/Review/專情的碧池學妹/index.html","be354b0df4d58fbd83a5a6cc28817449"],["/2021/07/29/Review/只有我不存在的城市/index.html","82e64beea410afd44fae9bbd84f7ff9c"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","ed2529ef3de5ee51e1ca39c9a28bd86d"],["/2021/07/30/Review/可塑性記憶/index.html","ffb635b499aa41862824c84758dc0dbb"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","ad07cc0f131c12339a0fae2c9e64ff33"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","272b605c785a5893a94985b24ae058e9"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","922e0a19fe90e7a77f773e1fa1cbac80"],["/2021/08/25/Review/清戀/index.html","97e023753257fd6896afa89043be430b"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","bbc94ee4c682c68388478f8a9e1c79e1"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","c211960114bafaba41df831180082037"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ccadd21d7aa3e33e6dd49de787665a2d"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","f3b8577b67bdfb2ebb14ba19cfab2f2f"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","92c942246e3b4e8212fcd8e049cbe888"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","e7cc09c440644c434f80a5770a6ba8a2"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","615328a406a984ae38b2a6e2e2bf09f7"],["/2021/10/16/Review/龍與雀斑公主/index.html","a468823625a876aa149cffa2b2b81b0f"],["/2021/10/19/Review/孤狼不想開後宮/index.html","5f57d157ca61753297d19087a2c8223d"],["/2021/11/13/Review/徹夜之歌/index.html","d85e2e6dbb4e7dcc9fd982c175d7bee5"],["/2021/11/24/Review/武煉巔峰/index.html","af2e5c7eec5a3b21a6260824ceeee91d"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","0faa9556699ead2e0f9f7b2c36d00ff0"],["/2022/01/28/Review/神醫凰后/index.html","e26c04542cdddac0c72b30bbc36bbf2e"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","c19e94ef678f82e785bc8573868e6673"],["/2022/02/13/Review/夏日幽靈/index.html","fbfbc143e1cfb974586473f235cdd090"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","459d8f879bf706407fd612e542f2e7d0"],["/2022/02/26/Review/賽馬娘/index.html","4443e310edb4d3b99005f465f1c5dbb1"],["/2022/02/27/Review/大欺詐師/index.html","9a47ea63577d6aec59d86bfbd220db26"],["/2022/02/28/Review/前輩有夠煩/index.html","26af85e5d5e5291cba4adfad0453337a"],["/2022/02/28/Review/碧藍之海/index.html","5bc88db010c1fd6cd8c3aa44908f92b9"],["/2022/03/05/Review/落第騎士英雄譚/index.html","c3c2887c51efc2c4ea88d67a20cf12a5"],["/2022/03/06/Review/Another/index.html","51073c5b76758e991043f2c558c9d511"],["/2022/03/06/Review/入間同學入魔了/index.html","e0936807dc8fb0e606ab2849a34779d9"],["/2022/03/18/Review/再見宣言/index.html","6f3ee8a5b6af21361ab12dec846f5ae8"],["/2022/03/23/Review/生若冬花的妳/index.html","edb00becbe9364269d1a0f07c78c6241"],["/2022/03/25/Review/天之弱/index.html","365b52455e8620319674068e8e87c6ea"],["/2022/03/31/Review/滅了天道之後轉生/index.html","2dbc1e149cac283ce522f0933657a4c0"],["/2022/04/30/Review/泡泡/index.html","68fec3c1ae8673b4c9775b7a4a4b0b1d"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","f93d30797925bcbae6f904abe38c291e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","5440f6602647b17c687a9481bd448068"],["/2022/06/13/Review/偵探已經，死了/index.html","c3350ec97c0b8e8240fa18ff6f5349ea"],["/2022/06/14/Review/黑色子彈/index.html","912db217eeadc7e2df410986a2f81abf"],["/2022/06/15/Review/黑白來看守所/index.html","0539ee79b98ac25d2c09b2c816fec2ca"],["/2022/06/16/Review/虛構推理/index.html","98e7eabe9c9421023e28ed4680b480b7"],["/2022/06/17/Review/戀愛與謊言/index.html","8831f9a57bb499524b0f0b6f2809b99b"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","258141ce8675bb6b4338aca094b662be"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","5c254e567a002439805daafacac874ac"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ac3d4e6efd61c53a528e9f485b893a9e"],["/2022/07/03/Review/Hello World/index.html","40aaeee5847f91bda97bfd78e04cc0be"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","4f6d06c6ff90bb3b43c52e9fe4251d1e"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","183c33262651751525aebd81a861b5f8"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","379d041bac6c71a8e8e5fed864dbdee3"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","7f5f70f3c509f4112f5f333a037760c7"],["/2022/07/16/Japanese/動詞分類/index.html","92c6538283cbcdd713195556d845fb06"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","866c8da63fdf1cfa9b2cf63a414b48c2"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","5de49215a69ab2e3b1ffeddebc01921f"],["/2022/07/17/Japanese/音便/index.html","d63063a574aeb6b846ace7b18bb055a1"],["/2022/07/18/Japanese/動詞 時態變化/index.html","e33ed0b907953864f367d74b007425c6"],["/2022/07/19/Japanese/助詞用法整理1/index.html","70ceda726bd47009477897f1e553b071"],["/2022/07/26/Japanese/助詞用法整理2/index.html","c81c1baae92811c794266930d9f8f803"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","79800cefb1539298b19356210441fa1e"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","fe930938ffd1eeec02b3607d8d5c7023"],["/2022/07/30/Japanese/疑問詞/index.html","bb84c9b29fc1b211a84bde9603f46578"],["/2022/07/31/Japanese/助詞用法整理3/index.html","4e93560d6c1fd86868d3a90e5c0b00fd"],["/2022/08/02/Japanese/副詞整理/index.html","ebeee5054cd84ce19bc8a6d66e57086f"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","76185269c3dee0cc7cd030c5ecbfa75c"],["/404.html","c31b341279274cfdf8a36ab10ce39861"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","19b0cb8e7dfa04e238b5840c39bedb0b"],["/archives/2019/11/index.html","0a263859bc1d7d7f9c5270e56167f8d1"],["/archives/2019/12/index.html","e69f8fe004cefe22f7f6c51c5f8364be"],["/archives/2019/index.html","25006ab868f0cb06508f1f8f5ac40eb0"],["/archives/2020/01/index.html","f810cee959abd5e2b89e529b134182e9"],["/archives/2020/02/index.html","4bb34139fb117cf9428ac17e21733e99"],["/archives/2020/03/index.html","8b04ad4fe84933dc036fab25d0670e73"],["/archives/2020/04/index.html","dc7e487311145e4f955942705ad984ae"],["/archives/2020/05/index.html","55e0bf05813ad94865aea265a6a6b3ba"],["/archives/2020/07/index.html","7e15e97994e977dad71c59a678cdb3f5"],["/archives/2020/08/index.html","86ac2c98a51be8e02c2858ba48af03f1"],["/archives/2020/09/index.html","74487a11a693cfa801f3eec77420d2c0"],["/archives/2020/10/index.html","253025e20d740d1f5aa46c47d3ab540f"],["/archives/2020/11/index.html","5c6db1139b7f9787fbab608f0fab06d9"],["/archives/2020/12/index.html","318d20d6dc61fb81bcff69f39308074e"],["/archives/2020/index.html","3ce44c2ba8686857ec5687f91370fe9e"],["/archives/2020/page/2/index.html","760cb727eb49538adc43373f5f80ec67"],["/archives/2020/page/3/index.html","56a14a2588b719b06a8f1523b05907c4"],["/archives/2021/04/index.html","13bca8e9365f3528cc9fabc68e282843"],["/archives/2021/05/index.html","55eefc40b0cf7a07e0b32e3f73b2b3ab"],["/archives/2021/06/index.html","a9fd285165c5166bae3385f9ed72ab24"],["/archives/2021/06/page/2/index.html","21943552caceecb3fd3e5083f03a6d33"],["/archives/2021/07/index.html","4d7adb98a97fa1c7ed9996019d91e1c0"],["/archives/2021/07/page/2/index.html","363459ac844c54e1fda04038393f1af6"],["/archives/2021/07/page/3/index.html","93f2dedfe906b18c8ebc3e9e68a90d47"],["/archives/2021/08/index.html","66281e0be828e84bb355351b746219b0"],["/archives/2021/09/index.html","a7ad87978a0eda0b6886489289768dc0"],["/archives/2021/10/index.html","b4e6dbc0b964530b5daf0241fd4ba349"],["/archives/2021/11/index.html","fe33f5a471b7de7e4c11fb83dd7da91d"],["/archives/2021/12/index.html","55b586b47e568cfa4fc163c17aa71d40"],["/archives/2021/index.html","f9fb77f3de6bd7c27e0390e421b2c564"],["/archives/2021/page/2/index.html","f7c8fde474a2a08318759c83801cc22b"],["/archives/2021/page/3/index.html","576d0b82f7515698effa3c927ad1e6b8"],["/archives/2021/page/4/index.html","c9c463e08587f1dca8b65fb4d3ae2591"],["/archives/2021/page/5/index.html","2d168c500845b40e687efee94f28bd52"],["/archives/2021/page/6/index.html","4d86ff9186acdef94929893be71682a9"],["/archives/2021/page/7/index.html","efea138d3d95151edd33fb583cf127e7"],["/archives/2022/01/index.html","6234c52b2ef36037a052695267ac89b8"],["/archives/2022/02/index.html","3716aea3b2266969a932b0758e17a1ff"],["/archives/2022/03/index.html","82f5c2b5de2d6d1ea4e45278158898d1"],["/archives/2022/04/index.html","138c7cdde4fad36ae955e131d6d8e873"],["/archives/2022/05/index.html","6cb74036d359c2a3fe9c1a3d6a940d58"],["/archives/2022/06/index.html","bc3afc4b92d9530e565a005d0466f0cf"],["/archives/2022/07/index.html","c07bd089aa0514a457f68e10c9c47ff3"],["/archives/2022/07/page/2/index.html","90ed3f743b52b6126b2e7d226c8aac54"],["/archives/2022/08/index.html","a7c3d4e087cad37e5fc4a1defee92123"],["/archives/2022/index.html","d70abf257da932dc649866d0f8d81d15"],["/archives/2022/page/2/index.html","bacecab9efef65fe336381fd74fa7a2b"],["/archives/2022/page/3/index.html","cbbd4facf2420611a7abdefa5b642233"],["/archives/2022/page/4/index.html","f5223b3e9d7ba627c26d42e3cc57c6d5"],["/archives/2022/page/5/index.html","810bcac994367bef03b824f7209b48c2"],["/archives/index.html","03d800ce69e81aa462d2cf1fe4172e10"],["/archives/page/10/index.html","b355b8d3a7d4d6f1e0d55c05530c3b99"],["/archives/page/11/index.html","043f439164f3a617dc4affcf72e57bd8"],["/archives/page/12/index.html","f032bdfa9122b2c80ee43cfa43d7612d"],["/archives/page/13/index.html","bafaad4cf8f0bbc107ed95b7081fc47f"],["/archives/page/14/index.html","473226307952a5ddbc80518cf5569633"],["/archives/page/2/index.html","622dbf0678942908fcb8dd805f68ea63"],["/archives/page/3/index.html","02a39ad5887986aa150b7e38c645fb6c"],["/archives/page/4/index.html","8f14dc927ed61e9a51aa5c5cd1e98919"],["/archives/page/5/index.html","7d2a628f28dccec1cb6d438d20cd84f5"],["/archives/page/6/index.html","8cbf068ea7b10dea582a90fee7323d6f"],["/archives/page/7/index.html","3e87baba6d78f13f96571288767f4f92"],["/archives/page/8/index.html","c3764f81a63b4e90bb9b97fa16d44292"],["/archives/page/9/index.html","8e01672a61d37fc0b243e06ba20329a0"],["/categories/Algorithm/index.html","654b165b0a7ec75f6ac2566a554fe2b3"],["/categories/Review/index.html","a69a76a219ddee591901cc27e0ed4d1b"],["/categories/Review/page/10/index.html","b07c1443dcae731be2a292ff2c0de53e"],["/categories/Review/page/11/index.html","882bdb371e208a5b45f573e4a7a970fe"],["/categories/Review/page/12/index.html","5ff200c887768f6016d0d5d4a4015641"],["/categories/Review/page/2/index.html","774168dcd465dc091e466539e474bce2"],["/categories/Review/page/3/index.html","da78df677fc47a466d9ec9e361257faa"],["/categories/Review/page/4/index.html","ee9a46a458596495e0c8dd8cded97594"],["/categories/Review/page/5/index.html","46fb5e86f695fef3666e097ef84d2cc7"],["/categories/Review/page/6/index.html","5cdb2ea58bdb404b3a3cee0bee1dd54a"],["/categories/Review/page/7/index.html","9f69e1b5d2c432222d9a75fde701ce7b"],["/categories/Review/page/8/index.html","7e54bf642f72f1a2dcbd83c6d7ddf32b"],["/categories/Review/page/9/index.html","813a7fe517c70e0a69e985a33dc1caf3"],["/categories/index.html","7771f50a0bf2f01a2766e300a0a0a701"],["/categories/日本語/index.html","909680c2947eb27d34ee4cea1df12e79"],["/categories/日本語/page/2/index.html","47d11ee9f4322d10278dbe65d43b7ff7"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c6ef2d2165f8212e3bd4bc1893c83585"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","887ea35926101704862ca90e72865218"],["/page/10/index.html","e6652a058bb23ee0c209d2bcb9d8f4a1"],["/page/11/index.html","2798c15b0a23a2f982d4c8bfa2770d4d"],["/page/12/index.html","cc3f53389db798bb54717f27ca568d04"],["/page/13/index.html","c526699cb33b051d7cfc450f95758805"],["/page/14/index.html","b35630c31ecc000a4eb38eacd318a9f2"],["/page/2/index.html","8e7088e29d2fef747ca6f8c9abd485ed"],["/page/3/index.html","42ca14adbb66ca6ac4708d34b0c91c78"],["/page/4/index.html","6d2d0a7dbd539e3864a2d8d97b063bae"],["/page/5/index.html","3344dba57a45245bfbd7e36cb40f22fa"],["/page/6/index.html","50f73eea1d17207528525c1422edbe6e"],["/page/7/index.html","3258d46ec00bec4ecafb04583ea967e6"],["/page/8/index.html","4bb43a70037f8e0a2167df5f42ae7d18"],["/page/9/index.html","1082f6f6e209ef652007f843b9727e6d"],["/sw-register.js","12a77f36f628ca808f30f02dd661bd16"],["/tags/10分作品/index.html","b15b565c3477bebe6a5167c022805f56"],["/tags/3分作品/index.html","ee0400669cb2b406084b7ddc6584adb3"],["/tags/4分作品/index.html","11078002f82d4e7b6d4e6b97c2b2b25f"],["/tags/5分作品/index.html","2f3dc38e432fda033e06f0abcc15785e"],["/tags/6分作品/index.html","56d3a19a303dccdbe353f5307179109c"],["/tags/6分作品/page/2/index.html","df59bacb25673cfdf169cabf534936f6"],["/tags/6分作品/page/3/index.html","ae9489657356023e2ab7fa6a13dc283d"],["/tags/7分作品/index.html","d702bb00ff4b1d1f3a10ad0909b29f83"],["/tags/7分作品/page/2/index.html","93a003cd8ccd4af058681a381e7d2352"],["/tags/7分作品/page/3/index.html","f363ffb198320c7229e20214bd204e05"],["/tags/7分作品/page/4/index.html","b77e0aa5b47fda446129f3d405bfce6c"],["/tags/8分作品/index.html","46230a6516eaf45161cc3d8f8812def1"],["/tags/8分作品/page/2/index.html","0bd0adfe1eac0e73f73538d0bfd01b1a"],["/tags/8分作品/page/3/index.html","e422c05a57055bebf0d239bf3e11935e"],["/tags/8分作品/page/4/index.html","87169a9a05443d0e0ccbc2674c23cda0"],["/tags/8分作品/page/5/index.html","dea41f392c5cf4f9e95fd5effabe0997"],["/tags/9分作品/index.html","5985f3d52154110086adc098239d5fde"],["/tags/index.html","66859b465fd7322d09b6841cad74ef1c"],["/tags/アボガド６/index.html","0059c7f79b3e81f24480e4d8450d2dad"],["/tags/三秋縋/index.html","56ee66b610c606cf9dbc14bab4b06c42"],["/tags/二宮敦人/index.html","f878fba73f40cdac1358700fcb38560f"],["/tags/住野夜/index.html","aa75091414221d1728b18d4522bc081b"],["/tags/佐野徹夜/index.html","87bd62d7a0c62bdfa86a3797f0f9ff08"],["/tags/動畫/index.html","34cb50f7546223ff0408b7ba116c06d7"],["/tags/動畫/page/2/index.html","1e03619481ad70993a5c9965e1893156"],["/tags/動畫/page/3/index.html","335c9ed0ca86157963c88c515fe3fffe"],["/tags/啞鳴/index.html","bc4afc1509841be440d4b34cca59d721"],["/tags/天澤夏月/index.html","20d4fbc896cc8b8df79258d04db68fe5"],["/tags/學習/index.html","40149881a65ba8f4aa571b231ac5dca8"],["/tags/學習/page/2/index.html","cec4cb444e0a85eb45e78b312545467c"],["/tags/宮崎駿/index.html","81eb66b8d0383ed6556f3af3a4dc867f"],["/tags/小說/index.html","755545e4001dcc7817bdc1ac609c6d49"],["/tags/小說/page/2/index.html","2578a8b5b4d7900659ffc21d3bbc74cc"],["/tags/小說/page/3/index.html","cdf95c88d25f66bd3fa53f8d6821621b"],["/tags/小說/page/4/index.html","8c50d969af6e0415391c59080ee9d645"],["/tags/小說/page/5/index.html","556dfefcbfc288744c49bed5a745467b"],["/tags/小說/page/6/index.html","85e29e7124ed5ccce5e6be5c37d4bfdb"],["/tags/小說/page/7/index.html","7b5677e9a027e41cc626f6711b952fef"],["/tags/志茂文彥/index.html","0950437690700f0b2d8ef234d8d95285"],["/tags/斜線堂有紀/index.html","9ad8186fc04b45a85f5a867eb3e0e73d"],["/tags/漫畫/index.html","7ad0438b6c93b69f0b689d2a7c53e458"],["/tags/葦舟ナツ/index.html","d1aab7297dfbe0fb17a444dde845e2cf"],["/tags/藤萬留/index.html","58effb4804c88cfed874092a3d47c37e"],["/tags/電影/index.html","49f82f9272fcfa5130fb51aa3760ddf7"],["/tags/電影/page/2/index.html","3063e3253ac1480a3967f9585a8e5be5"]];
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
