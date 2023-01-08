/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","7ed140326fb0df160af8f2a2758bb74e"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","d67c0cf42471bba6b66f0011af9c5cb3"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","605ee05718223166d267864e1467cbfd"],["/2019/12/25/Review/無法計算的青春/index.html","8b1d7f402fcec026699be12a3f08b429"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","e429e53f4c811e153e39a0ef10dcc295"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","e808bd247586f4fa45f13ec6a6152653"],["/2020/01/19/Review/下雨天，不上學/index.html","407cc822f2802d4222d80798bdee0a1b"],["/2020/01/26/Review/三日間的幸福/index.html","b2ebeb9ac80c81ca1f9c14079287ff74"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","35f4fad754e1a3a8770338e1dda9cf8a"],["/2020/02/09/Review/青春期超感應/index.html","61d16b4b5096e37241c61b1ccdfc2424"],["/2020/02/15/Review/又做了，相同的夢/index.html","e55b699c5beb67d3885f34f5661e883d"],["/2020/02/22/Review/回憶當鋪/index.html","8903e7f0e276a4b4f9200ff1d83ff8fd"],["/2020/03/22/Review/不適合自殺的季節/index.html","ebffa29989d3bcad81a0d502e42979b6"],["/2020/04/26/Review/我們都無法成為大人/index.html","7d58bbd465427f48c454ac87cbe740dd"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","4422027cd8cfb2210f93db3a1460fa69"],["/2020/05/17/Review/人間失格/index.html","19d7aafbead364522c5c9e1ebf9727da"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","9e7388b632eec2008ea0295a1f5c99db"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","a6a1935b2f81cda4b305e78b34088d87"],["/2020/08/01/Review/銀河鐵道之夜/index.html","0ca91bb99e0049593fe8755ddef3077a"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","bd36f95ad133ab09cfaa5ea1894f5a05"],["/2020/08/16/Review/15歲的恐怖分子/index.html","bf2108c0ba202c3b7e2a4fe61d9dfc9e"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","67631b0d8ef55858b6995f01931a8d9a"],["/2020/09/13/Review/羅生門/index.html","dfd1ebc523d7d1cb9ac07f88402cc918"],["/2020/09/20/Review/闇夜的怪物/index.html","dd6f57bda37e4783edd10d953dac2507"],["/2020/09/27/Review/14歲，明日的課表/index.html","1ff12ed39421cec18c3e85b44e439475"],["/2020/10/04/Review/致十年後的你/index.html","b9b32b98dbcf2cb6b557bd308aa09901"],["/2020/11/08/Review/滅絕之園/index.html","c493ec9cf241b608d755f4593545b7d4"],["/2020/11/15/Review/將愛拒於門外/index.html","32f17cb84123c29ed64b40fc55ae36d7"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","0187397fc63d83ea8518bb3b178aaec3"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","ccddd3ecc63436baf8ef6f6c1e897e98"],["/2021/04/22/Review/道印/index.html","91863ce3022cd28dbdedce9c237193ec"],["/2021/05/03/Review/戀入膏肓/index.html","4c91e2fce48fcc144bcd62e9d4d5eaff"],["/2021/05/10/Review/Dice/index.html","6a6a7efd354a52ef8edfa45c7c93fed1"],["/2021/05/15/Review/魔女之旅/index.html","d0ce8d2671235f88a12df50a50862777"],["/2021/05/28/Review/戀愛寄生蟲/index.html","ef9c2ae8c45ec20d9019aeecee398d1f"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","52352eb92ee490f09b889695fbf258ab"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","b23fd1a0a6f11a3c2b5be5d805fb687c"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","721f8d57e64d84e725f1f3f9c5a33852"],["/2021/06/05/Review/流浪的月/index.html","b7a4d5478ea2326ef4278e86c8a19b0e"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","b183938640c9d8f0e0fa118c7299445b"],["/2021/06/13/Review/第一人稱單數/index.html","fdc959a3f7dd9c91984029da2921cd3c"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","3791897f239e4be6737b012beebdf769"],["/2021/06/16/Review/願你幸福/index.html","4c3bfc8853c1f2d4232faff9dd855f80"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","f22ab762ffebffa4ec22c0c3fda4c6ca"],["/2021/06/21/Review/神隱少女/index.html","2bc11344200899649f35a68f8cd6eb90"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","8964f592d79a50bef08b753caeb3e217"],["/2021/06/23/Review/天空之城/index.html","85ffad278780e0a9f828e1a7020ae975"],["/2021/06/24/Review/魔女宅急便/index.html","b4507b0cb4bedd335ed3c820d05eeae1"],["/2021/06/25/Review/借物少女艾利緹/index.html","04030d2190283d6f3e17fa3e86f92625"],["/2021/06/26/Review/魔法公主/index.html","463f5dc2f1c3ecd1945941542d0782e5"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","303c255af784cc047f6208cc4cf105d6"],["/2021/07/04/Review/飛雪與劍/index.html","e183cfd6c3d5404b50218f668750b4fc"],["/2021/07/09/Review/地球防衛少年/index.html","fadf93b90ad0edca1b9d989edae00ed7"],["/2021/07/12/Review/Angel Beats!/index.html","abf9a2555aaeef4407753b5c9c49fe00"],["/2021/07/13/Review/Clannad/index.html","28b02caa005489b42f21cba27baf0ee3"],["/2021/07/15/Review/AIR/index.html","f90578ba039d466ab4ac01f6bacb6059"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","c9799097c04cb93b1f84fb697d97a773"],["/2021/07/15/Review/螢火之森/index.html","04f643cb20f1ed13ffa79bd28519ce92"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","aa5b5a4a6ce6962fcf048b67fb591237"],["/2021/07/17/Review/奇蛋物語/index.html","ff6c593fbb5b335bdb7d94f157784329"],["/2021/07/18/Review/Vivy/index.html","6d9eb7e37e5ff05b93e929bd77559828"],["/2021/07/18/Review/請妳消失吧/index.html","801b4e81ce3d8d5718093e48eba0e4ba"],["/2021/07/19/Review/漣漪的夜晚/index.html","3fe4e33a0a8e69a6917ae2c628d5857b"],["/2021/07/20/Review/月色真美/index.html","2a64b520c6d3c17bd013d3ffce3b0a63"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","e51552e173dfbb2a1f78d5b4ba5982cb"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","fa2bef91baab3eb1919032ab945e2b7b"],["/2021/07/22/Review/罪惡王冠/index.html","8d68113bdbc31367e53d1e71ac729bbe"],["/2021/07/23/Review/弱角友崎同學/index.html","a9c862570ecaf50a94d27a2c00bdd634"],["/2021/07/23/Review/惡之教程/index.html","b339929061be752cb1c6921e849a32a0"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3b8d67d2db8ebd48fe73b27ea9eaba4e"],["/2021/07/25/Review/魔王勇者/index.html","99ef4f2f6de8d02fbe347f46d1ddc7cb"],["/2021/07/27/Review/一年A班的怪物/index.html","c8a48c2828c2362ae8d17d3dec516f78"],["/2021/07/27/Review/奇巧計程車/index.html","53f4414b3848d23feab2e7f37f03c47f"],["/2021/07/27/Review/專情的碧池學妹/index.html","d240a7dfdaefc4455b79f7b2b140761d"],["/2021/07/29/Review/只有我不存在的城市/index.html","4d0da9f1ee8cf89d89533173c8ecdce2"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","c12a1424519d3681cbd288895d584cdb"],["/2021/07/30/Review/可塑性記憶/index.html","d89bbeb5fb73335bd1332f560b8eb8ca"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","42783a3fbe6e1f0827e34dd20f465918"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","5b3dfa865bdb75077cbb20153343f9c5"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","7ba121497bb09eb3ae4baa6004bf66fc"],["/2021/08/25/Review/清戀/index.html","5cd3675349a9c22c4f81427a132e3ba7"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","47831f7fe70dfb44a540d13e820f4dbd"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","847b07e842a1d16181a0bf7cbedec212"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","1710eae7182d1dd5373ff6df60128e6a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","c11f7eb81fca70386ce92209c7a27914"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","083c5327a184b1a8026cc9bb0d2e906f"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","307832344b70ba84b9e89646d38ea421"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3a9ff18acf795e541e27b00aa8ce7248"],["/2021/10/16/Review/龍與雀斑公主/index.html","106915bcca25f5edc5d3dc38e759bd8f"],["/2021/10/19/Review/孤狼不想開後宮/index.html","eaeab86c2ff838363ff1bcdddf84df8f"],["/2021/11/13/Review/徹夜之歌/index.html","57b8239c14bbfb692b41f57bdd659db7"],["/2021/11/24/Review/武煉巔峰/index.html","fc02878a0cad8e061e6502134ff8855f"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","bcece3805787775ca94f4845fa0150e8"],["/2022/01/28/Review/神醫凰后/index.html","6a203afdf69fefee13eb8a60afba8c21"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e9003df1cbb7a15b75f1487e91d29c36"],["/2022/02/13/Review/夏日幽靈/index.html","b9f930c97c91f686afaa4e206d87dd58"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","8e53bc66bcd65151f2248a65e040b7ac"],["/2022/02/26/Review/賽馬娘/index.html","1d1594f521242e2c4e368ba57ba94f4a"],["/2022/02/27/Review/大欺詐師/index.html","2fec5ba753d16404037af27468440d25"],["/2022/02/28/Review/前輩有夠煩/index.html","d7504177894ba6738c2183c13ce6c3ae"],["/2022/02/28/Review/碧藍之海/index.html","3a5e91817a7b9a3fb7033be6f314a135"],["/2022/03/05/Review/落第騎士英雄譚/index.html","ad08f5d68c612ef6ecf7aa5b7f041627"],["/2022/03/06/Review/Another/index.html","904ca96d8ce8978ea52c6664036e9488"],["/2022/03/06/Review/入間同學入魔了/index.html","5aa7f3b876dabd470c8a854270a2c4b7"],["/2022/03/18/Review/再見宣言/index.html","e33f3ea5031cf98fe9c39ed65b79757b"],["/2022/03/23/Review/生若冬花的妳/index.html","58448a16628c2125adfcda0f87ef5f3d"],["/2022/03/25/Review/天之弱/index.html","da9be1e1c1d6dd254dc0955a98ba0e5f"],["/2022/03/31/Review/滅了天道之後轉生/index.html","dacc61518f69d221fa73531d82522036"],["/2022/04/30/Review/泡泡/index.html","f03450abfd82fb51753e228196d0495e"],["/2022/05/04/Programming/Dynamic Programming/index.html","3f106154fc2939c123549c8cb3dea762"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","0cfec23270074d91dbc19a4de8d1f1ec"],["/2022/06/13/Review/偵探已經，死了/index.html","c76659f9c6beb368b4f16a1ed71e9350"],["/2022/06/14/Review/黑色子彈/index.html","170c2d91d6ad31e7e0a0f6850d8bb4ac"],["/2022/06/15/Review/黑白來看守所/index.html","51ae8f24557076ee075c693af9ec35c4"],["/2022/06/16/Review/虛構推理/index.html","aac71664215bcadcabacc657917c8eae"],["/2022/06/17/Review/戀愛與謊言/index.html","21adc63158de594b640269c64a5a75f8"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","fc6a9ec86ee875e9f6b77a342fe5e7ad"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","abdb79b595210ca10f9c82efa94df4cb"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","b3753b5529caf008587bdd88567a02c6"],["/2022/07/03/Review/Hello World/index.html","92ae95236365268bc32d0b42096f617e"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","968a25f2329067cce08aa0a9825671b1"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","8fda4ef5d1564f1d26d570534984defe"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","6e6c8f182631f95920218c6452783b7b"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","e6a0de19b652973641754439ae434f36"],["/2022/07/16/Japanese/動詞分類/index.html","f1dc13efbcb18693843771964892eb4f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","4acecfc5218ddbc2688d9d385f666773"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","dd7c251706c5b560a0b51ca3082740be"],["/2022/07/17/Japanese/音便/index.html","e909c4d271b6b68f6fefd2aed7b81bc3"],["/2022/07/18/Japanese/動詞 時態變化/index.html","3b41a22b2b553272bea71656a1069cef"],["/2022/07/19/Japanese/助詞用法整理1/index.html","31553bfc761380d87997f0bf3372d006"],["/2022/07/26/Japanese/助詞用法整理2/index.html","9dc756c9b76cc889a0d166bf51da3f6f"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","f56a9cde2c52e54e2c6938cd423ab6d7"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","e39c2aa8b9be55b641853fe23d9fa6bd"],["/2022/07/30/Japanese/疑問詞/index.html","442e9387d15ea01d6765bd305fdbe85a"],["/2022/07/31/Japanese/助詞用法整理3/index.html","de591a97ad3c08cba6005ca7a138b67b"],["/2022/08/02/Japanese/副詞整理/index.html","2381c418379248ffd23534bd3e2789e2"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","b275020bc58c9ae4a747509f35bff582"],["/2022/11/04/Programming/Data Structure/index.html","daa8c5734756659aad194160cea03681"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","3ee9377e2874293fbf98f3df88bd002d"],["/2022/11/22/Review/組長女兒與保姆/index.html","dc444b03dbb14374c15b1e6eb8bf7222"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","84f15f81b1b5b07324381d99bcebf25a"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","ad1f618b617f932649ab99da749a6e2c"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","6036aa4fe8645cc6d014ef1b90870973"],["/2023/01/01/Review/あの夏が飽和する/index.html","b4430bb9a12a788f9d3c072316ff1ba8"],["/2023/01/02/Review/孤獨搖滾/index.html","a9929d6f895dc78e5c016397ae8ba3a9"],["/2023/01/03/Review/來自深淵/index.html","05b35f2a2f7a6ab2c4ab53a2394a00f4"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","5c9d82b749096e89e3a81d3875d78c34"],["/2023/01/05/Review/處刑少女的生存之道/index.html","ba6f891313a361b88ae8f53a51c5dab4"],["/404.html","4c77f098e1d7902ec8da6eea7f161529"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","0eacdc87005d96436f5870e54e8f7d8a"],["/archives/2019/07/index.html","4be8a1c46969cfaaae100deb985bb57a"],["/archives/2019/11/index.html","528cbb351bd00ff75cb122eb2b57a0a5"],["/archives/2019/12/index.html","1557003f273e1fad77fd36356bdf4c0a"],["/archives/2019/index.html","4784a42e442ce656abe645d8beb18911"],["/archives/2020/01/index.html","436dc789a8b8701873a1a6fa112e2f2c"],["/archives/2020/02/index.html","1f3c9b791a80ddaacc07860635f9a102"],["/archives/2020/03/index.html","45a4d2609f68017ad11ea8319702f546"],["/archives/2020/04/index.html","14b69ed477aa471189d812b92f141b2c"],["/archives/2020/05/index.html","c62cc7b448d0b8fa1884af07a33d36f4"],["/archives/2020/07/index.html","f7109e14a2f190d336322378f366095a"],["/archives/2020/08/index.html","e0131db436e612dbd7ee2ac6cb192479"],["/archives/2020/09/index.html","9eeeb1ece58f7c9d1912c582dae5aa20"],["/archives/2020/10/index.html","c674992f7dd481b6d0523d28db11d6d0"],["/archives/2020/11/index.html","5394b8f5bf29a02f0355711593610fb5"],["/archives/2020/12/index.html","f46871e57a46c4c6737050333a429cf9"],["/archives/2020/index.html","3a8f466056787cbe1ac08dab746e3b97"],["/archives/2020/page/2/index.html","335ee0c52ca6a8bb9d6f3e4a3184c87f"],["/archives/2020/page/3/index.html","743ee41ab321fc9d4ffddcff1327c524"],["/archives/2021/04/index.html","86131043d413f2a45f43ce451b23ad5b"],["/archives/2021/05/index.html","371892d001a4a07134dd0ef8b72dee4f"],["/archives/2021/06/index.html","1addc4ee97e16a06a5dff6481e806899"],["/archives/2021/06/page/2/index.html","2e60fb61ee554fec72312ff2b1cec114"],["/archives/2021/07/index.html","329a2cbccaed059f51aee797cce7fe1a"],["/archives/2021/07/page/2/index.html","4a7ff0499520859ecd519edf8f28575a"],["/archives/2021/07/page/3/index.html","11a99efbe2b758172bd5d024a6ad1bd7"],["/archives/2021/08/index.html","d05a4e9ef94b3601674e0fac337d832b"],["/archives/2021/09/index.html","39c06a5f783947e43f2ccb8fbf6d4c96"],["/archives/2021/10/index.html","56d75b8a8d5278c7a56ffded95fe4f1c"],["/archives/2021/11/index.html","f0023ee107e802df028ad41099da1015"],["/archives/2021/12/index.html","b1788c8ac303a75a59f0dcfc8e95d63a"],["/archives/2021/index.html","dc374ef4a386c4ee9fa10ccd4ab9ae80"],["/archives/2021/page/2/index.html","0a1f16d4a69aa6e194016f3ec71f3e19"],["/archives/2021/page/3/index.html","f16fa8796c8369a32bcc7be4a08fa3d6"],["/archives/2021/page/4/index.html","378f1254edd82f80fff2b0693e600506"],["/archives/2021/page/5/index.html","652d281378a18cfbf0d7661fe95b03c8"],["/archives/2021/page/6/index.html","f670eab02933b13a16fe3a1ec3ab5c80"],["/archives/2021/page/7/index.html","1ad18059a4de6164797c36815e67ac5c"],["/archives/2022/01/index.html","a68c832a5ca33650db743affd3a9e595"],["/archives/2022/02/index.html","9833eb6e50260008a98589133e583b20"],["/archives/2022/03/index.html","90a0d566dfa2a4e98c3c61da97182f15"],["/archives/2022/04/index.html","2000aa4f265b18d729ad97654b6ac04c"],["/archives/2022/05/index.html","eba7dd07f662b334bc9ff66a6f2d8b6a"],["/archives/2022/06/index.html","d93a23b17e2000d9979f7cd6fc409cfb"],["/archives/2022/07/index.html","3fcee3018c9b106f05b50908a4ee22d5"],["/archives/2022/07/page/2/index.html","6c4c7cdafcce0d9599ba7cc50e842991"],["/archives/2022/08/index.html","ad148f69a250d544dba59e0045ca9081"],["/archives/2022/11/index.html","60d8c00b0fa2bd87588cb43dbaee13d4"],["/archives/2022/12/index.html","658284ce77908c27adffd1f2e33ac269"],["/archives/2022/index.html","9f1846b813c22c9ab2b6c065a2e2df1e"],["/archives/2022/page/2/index.html","66c12a4d83f1105130fdafcda919a492"],["/archives/2022/page/3/index.html","f4c00c81ab11cc9dba0c4e3fd0cd852b"],["/archives/2022/page/4/index.html","5836445a3fd11058cd48768d836809a6"],["/archives/2022/page/5/index.html","13e9e2f10f3a30fc89c0a3766501527d"],["/archives/2023/01/index.html","82aa1e3ec06f7e661ce6570b650ebcd4"],["/archives/2023/index.html","d6e3742e0de50566cb45786a927f51c6"],["/archives/index.html","c626c74c1c4a7e9ecbfecc7109720acd"],["/archives/page/10/index.html","3a319690cf20c72e0e6a01385420117a"],["/archives/page/11/index.html","160d4eb8e9f5b22f3e50d9b6bbd1605f"],["/archives/page/12/index.html","463b78b463cebff80418986f199cbe46"],["/archives/page/13/index.html","41b1eaf60fa577e84110e8200e5bab01"],["/archives/page/14/index.html","1eac79a7819a28b0efa4ec8eb8f8dffa"],["/archives/page/15/index.html","ccbc4fa2c73c6e93c2261a65d9d3c4f9"],["/archives/page/2/index.html","9dc467fef456c2e0c690b3d26776caed"],["/archives/page/3/index.html","eb08b1a124f9f9b56d6b5236f1dde67b"],["/archives/page/4/index.html","b44a926d5e0e8936686a3bb8722fc1be"],["/archives/page/5/index.html","e43d8d2e2b883f3875cce0039d155457"],["/archives/page/6/index.html","b67049d984a45770cbb2afe268ccb1ef"],["/archives/page/7/index.html","a9db01ac708b4ad28fd21a1e63355d65"],["/archives/page/8/index.html","3020526070a8641d9c25190490d982d3"],["/archives/page/9/index.html","08e23d2eb69d30d68d3532b6893de921"],["/categories/Programming/index.html","af29d5d0f712fa1bcdad3745a07d3c05"],["/categories/Review/index.html","6e9c79529049ebbd5e0e303ec29cdf50"],["/categories/Review/page/10/index.html","1ce5ad213b2a65b4fe50aff3b331fad3"],["/categories/Review/page/11/index.html","97bbed76146b1673f2eff667286c3102"],["/categories/Review/page/12/index.html","0d47d757e7d60c8bbb8cb66511632067"],["/categories/Review/page/13/index.html","7a5a71955c6ba7c15e3b8ca204527361"],["/categories/Review/page/2/index.html","0aa49194a2109c72de6ed48172118c24"],["/categories/Review/page/3/index.html","781c2dc2fcb55265c4834b4a533de129"],["/categories/Review/page/4/index.html","cde2f50de35b314a23e4959a8a93d8b9"],["/categories/Review/page/5/index.html","76ccbc33f8d8af9da4a860c1021d5085"],["/categories/Review/page/6/index.html","488d3003a93ce232ea2f057ab933f550"],["/categories/Review/page/7/index.html","d1cc4d5dbd01d5178ef14523d226edb9"],["/categories/Review/page/8/index.html","bc1ac8858c960fe5361941e2e6d89e10"],["/categories/Review/page/9/index.html","e6f691a9e7ad6f2ccc2180b13477b01e"],["/categories/index.html","63507634a428bf26900034856f9ea9c0"],["/categories/日本語/index.html","82bc0c2c14c9e8d11ddff34efd6000f1"],["/categories/日本語/page/2/index.html","76f451dc9a20faf9a976c181532170c1"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c143f16ad2a26b1ad7fce940a5bf8910"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e44222eadc6b6ebeeedf1067bc62c9a5"],["/page/10/index.html","527794e86ec629b055cf08e5e8c97783"],["/page/11/index.html","20477f9ffab045ffe5100e6281bf1093"],["/page/12/index.html","d7fd90ada7387ed8a89415524119c3a3"],["/page/13/index.html","1ee2320822af28ef5a9172a622765b81"],["/page/14/index.html","5f24f9b42769c0dfc8a030d9833c9fe9"],["/page/15/index.html","8b7eb283a03afa7e37ef6a515bea2f95"],["/page/2/index.html","eb6fa3df9433756aa34617822cfdf735"],["/page/3/index.html","ba2521092e84bef8efeb33282f381367"],["/page/4/index.html","bfee8d6c6d135b5326fc47949622036d"],["/page/5/index.html","6fd2994f61f49dd31fa524ba685bc37c"],["/page/6/index.html","2af253975ad802253557874a1b7d0d02"],["/page/7/index.html","b5d5f03be52332ac2feda60eb1330f52"],["/page/8/index.html","75697aae48589e7f3f0b732339e251ed"],["/page/9/index.html","650b57e66c335de15775152aadb10b9d"],["/sw-register.js","27f7173fa2e5a6820cb0b26876f6d72f"],["/tags/10分作品/index.html","81f04a7a067cd5581c76564a1efac405"],["/tags/3分作品/index.html","a9c72710b4b06b931d5ed34e014bbcea"],["/tags/4分作品/index.html","b80a419d95c64dbffb5bb7ad0856fcb6"],["/tags/5分作品/index.html","a91095acb1907ad7b42f680b3f4b7b39"],["/tags/6分作品/index.html","748b4fc6d86a51115e5618fb0c5cc5bf"],["/tags/6分作品/page/2/index.html","e1d4f0884db5e450ee11f81698553f8d"],["/tags/6分作品/page/3/index.html","0b486bee7a0fab93fc95a4946b52ab7d"],["/tags/7分作品/index.html","a149a06594603ff8dee8dbeb4d34c252"],["/tags/7分作品/page/2/index.html","edd71e33f6e67b0440fa6c29ff7a4d57"],["/tags/7分作品/page/3/index.html","def156a2808aca8c73fa1deaa322e2b2"],["/tags/7分作品/page/4/index.html","fa0e054056c66f96756736ece26093eb"],["/tags/8分作品/index.html","86192b64d3d809e6d8baf81ba6b1b5be"],["/tags/8分作品/page/2/index.html","0a862d7b3b576f922a20ecc6b7de4150"],["/tags/8分作品/page/3/index.html","7f2c689263122abb87b99bd4ac5ae5d8"],["/tags/8分作品/page/4/index.html","cd2eb4eb64721dc8a0d102b652cb7d22"],["/tags/8分作品/page/5/index.html","8271c58eb2936f520e6f094321c0510b"],["/tags/9分作品/index.html","93f70ce50b72662e7d4e9cffa1749ad4"],["/tags/N5難度/index.html","0090d296576636bbf942e7f523551b20"],["/tags/N5難度/page/2/index.html","e94e7fedaa7bb93ac506d47af0a36a18"],["/tags/index.html","7718a321658f6e6bd62e16ee78fd7676"],["/tags/アボガド６/index.html","8bddcd1e26326fe3f09d83da539c7beb"],["/tags/三秋縋/index.html","baa8c4e5e2a2b90334f775abda50976d"],["/tags/中國武俠/index.html","24fecc5fedefd7fca051b712e3d9e9af"],["/tags/中國言情/index.html","d33e7d61ed2ad766a5d3e4e43571bb1b"],["/tags/二宮敦人/index.html","ab18494042ef826eabbbdb933236aa50"],["/tags/人性/index.html","20cd2d78d326bcb76628d026f327e07b"],["/tags/人際/index.html","1bc507f3b4eefb37da401774f3d183e6"],["/tags/住野夜/index.html","f9201eb5bdf40a37ed8ae44a0ace5caa"],["/tags/佐野徹夜/index.html","d14ad4e69a52201484b729d577bc8585"],["/tags/努力/index.html","48e51db9589e001f7f044f8fc34e5f0e"],["/tags/動畫/index.html","821a1548095bd8328cfdfc8911c83915"],["/tags/動畫/page/2/index.html","6c6db5007f9be7fd5b703b51d15cd1bb"],["/tags/動畫/page/3/index.html","08f0dd003095404eba64789b12c61e09"],["/tags/動畫/page/4/index.html","8af9e3a1c0fc503a4053884ebc96bf96"],["/tags/原諒/index.html","52f6d07024876164e71810369dffb233"],["/tags/反烏托邦/index.html","9bbaefe043a082ad3b72be21dda12a5d"],["/tags/啞鳴/index.html","7e965d9a0e48ac22a0bfd671caf4a098"],["/tags/喜劇/index.html","41a94a52c14e085378b3031c126a7db8"],["/tags/夢想/index.html","1ef09007bc493b8adb5123947fe59c98"],["/tags/天澤夏月/index.html","18afa802daea5f1593552e91ae0aae84"],["/tags/奇幻/index.html","9316bed08485bddd4ef8ffbb8203f0c7"],["/tags/學習/index.html","6b249b63b86c83cb11bf0ef49ff4734b"],["/tags/學習/page/2/index.html","9624b2740bda66956712c4bc14ef7324"],["/tags/宮崎駿/index.html","38a00c1a90bba55eed0af5b0730602bd"],["/tags/小說/index.html","ac51ff5711dcdebe9dcd571ae5a9adac"],["/tags/小說/page/2/index.html","8a79579ea51dcff8f0b01ac1a31c4364"],["/tags/小說/page/3/index.html","a656c3cfe73c0d9604418637d1fc539e"],["/tags/小說/page/4/index.html","dd1532a51abb9b7de5cd4f976353a0a9"],["/tags/小說/page/5/index.html","10b5210331d5fb630ddffde74158f9b9"],["/tags/小說/page/6/index.html","b4bba705d65075ebc280358a1f0869e4"],["/tags/小說/page/7/index.html","a6389125e6e4a9531bcb27772c5767a3"],["/tags/平淡生活/index.html","ba39f536b3c771f9808fee71defe4dc0"],["/tags/幸福/index.html","b278d0e57b528fee5bc1a3cf555b7cac"],["/tags/志茂文彥/index.html","ce67a5ae969ce280b79f53f79dbb395b"],["/tags/愛情/index.html","452ba3c073b76399c31a0d752b7ff134"],["/tags/愛情/page/2/index.html","d7a4c88af04d68ce5357ca437ae281c7"],["/tags/愛情/page/3/index.html","63c2d4cf7548401cf64c450fdb3d5064"],["/tags/感動/index.html","fbe5a734d92324a465a94ed4a9180f65"],["/tags/懸疑/index.html","4d10af2e1278ad4c6d1083eea43a949c"],["/tags/懸疑科幻/index.html","82a286f3fb02edef325077fdd736122e"],["/tags/戀愛/index.html","75bc3aca0f26221da9f7116a7d98b6b3"],["/tags/成長/index.html","20b8187c4cf6bbbae0ceaa3493872f59"],["/tags/成長/page/2/index.html","dcacacfe153d8a19ce06aae8a4ab257b"],["/tags/戰爭/index.html","370fea115a30be28ab7c2e222cbd3127"],["/tags/推理/index.html","bde10299970266a461e29c31bea84b0e"],["/tags/搞笑/index.html","357625c1d3d917d3b4c30e2a675ff51d"],["/tags/救贖/index.html","eeab7a3649aea4d7cbc14455c51bb5fd"],["/tags/斜線堂有紀/index.html","2339c5fe9ff560e67e1c7b1fe233a4ad"],["/tags/日常/index.html","65854a2d46078718c7fae9da6ae8250f"],["/tags/末日/index.html","baacd64f64992c9fc290a83e2984760e"],["/tags/校園/index.html","83368464706e58e1d8c0e13437e17638"],["/tags/武俠/index.html","05d43e5906f7c1edc2b94b9298af8eb3"],["/tags/武俠言情/index.html","58b829439c57076f0648fee6772afa04"],["/tags/漫畫/index.html","bd5bbf12b379133cb05abae522f51520"],["/tags/生命/index.html","27092503e875a7fd8a2d178d00ed5963"],["/tags/生命/page/2/index.html","c475438c5ed21bee0f1a4aba05fc07b5"],["/tags/短篇/index.html","954036b4f3ef3d6707e349ac23e6a248"],["/tags/社會/index.html","14d2b25ab09b7249e2f8635700a44c5b"],["/tags/科幻/index.html","b2dc9ca6b49f07dc76a8d9429cae0710"],["/tags/童話/index.html","caabcb3ff09847c150dbeed7f918a0f5"],["/tags/競爭/index.html","f70eb2fc3c8a46a80da4e0b9ea9a0fdd"],["/tags/自我/index.html","00d23e22ff076361d413d67825838856"],["/tags/自我認知/index.html","2b18a00f6c1bf4d59f533db168e6ace5"],["/tags/葦舟ナツ/index.html","baeb4899d67749b001fefcaa043b8043"],["/tags/藤萬留/index.html","51ea6caf09327df988517d1a40bee2ef"],["/tags/親情/index.html","dfff8253860bf76a4445ba23568d819a"],["/tags/言/index.html","562224fe1526c8c4d8751707af8a6be4"],["/tags/雜項/index.html","a7be27fd6051473668fd991a92bb0cea"],["/tags/電影/index.html","cf106a67e5fc06ec5975bb86deb51d2f"],["/tags/電影/page/2/index.html","f1d98c24442e1bf1b0082de9d0eaf266"],["/tags/霸凌/index.html","91d0372b673fe9bc50f34c0f5417aba6"],["/tags/青春/index.html","83ebd011bb4247850110bd19c87b4fc7"]];
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
