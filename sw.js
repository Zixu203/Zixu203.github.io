/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","48bd2219b95dfddb52f0ec3c10cfaa54"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","d0ab19a096c617c1f7afdc6b1530adef"],["/2019/12/25/Review/無法計算的青春/index.html","df70ba4096ffd821efb308a7c452be8c"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","ac4b289e7ad771c469173a09713f950f"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","a901342503760c032ee109cb294e0660"],["/2020/01/19/Review/下雨天，不上學/index.html","3b08c2e83dc2376d1d14b5dd41a1aa9b"],["/2020/01/26/Review/三日間的幸福/index.html","e2bcc688c8a21191401b3b8637d32e64"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","cdf8753461b39bed9ed03335c6d9d8e5"],["/2020/02/09/Review/青春期超感應/index.html","65720b6644758d27eb2d28a8cd896522"],["/2020/02/15/Review/又做了，相同的夢/index.html","e717eb8ce8566537e323d26bc991d251"],["/2020/02/22/Review/回憶當鋪/index.html","446d9ba18937717b03390c4bb6523ac2"],["/2020/03/22/Review/不適合自殺的季節/index.html","7f463c40f53b227d01267b2a6a380a10"],["/2020/04/26/Review/我們都無法成為大人/index.html","f6b1fcac353f2aed4b22310f60eb727c"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","081b40283850ed281f549ee9a27c4b55"],["/2020/05/17/Review/人間失格/index.html","9aec1abc455f6d8143fb5936186f3519"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","5ae109c3298cfdd6239a7960e19e2fee"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","5a07d4d61ca5241711fcdc73f44107c0"],["/2020/08/01/Review/銀河鐵道之夜/index.html","166e4017c72b655927c927c513e861ab"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","6abb8078dfc89ea70512e6cbd5dd4e4f"],["/2020/08/16/Review/15歲的恐怖分子/index.html","65283f1f1dc457dcc39cc931ee45c2b8"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","080e5eaaeec652140431211446176935"],["/2020/09/13/Review/羅生門/index.html","105af543bbad4312f9200f6cfaafd387"],["/2020/09/20/Review/闇夜的怪物/index.html","f1f34d42bfee8f4b0b3cd4fee974257a"],["/2020/09/27/Review/14歲，明日的課表/index.html","e4fbd99e4c7b4a7cbaa808336c5cb60e"],["/2020/10/04/Review/致十年後的你/index.html","615c7997b419060a2e3623d50f483f93"],["/2020/11/08/Review/滅絕之園/index.html","d01bc9ebefd0652fb8cc498a4e657d53"],["/2020/11/15/Review/將愛拒於門外/index.html","844367efa89b90c18f16802303af1eb7"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","4e98cfb2990535976a9099b1c5fa709d"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","64b8620f078340609eb5f9cf479720b2"],["/2021/04/22/Review/道印/index.html","d18bbd5e1b36ba058ae93e8a41db2219"],["/2021/05/03/Review/戀入膏肓/index.html","d0476751cb5655dd20c4e18f1a9eea44"],["/2021/05/10/Review/Dice/index.html","88ba88079fc9f6ee8fe6c04a42bdbe4c"],["/2021/05/15/Review/魔女之旅/index.html","4aa9a6b06053193b2eb357e9bdc2e6db"],["/2021/05/28/Review/戀愛寄生蟲/index.html","23df709887ce2d8d81662dad5fe28db9"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2257d052c0bfa5bb8b77daba5ba9fabb"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","3c6eeddbaa01ef3869d7c76ffe264fc6"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","b2372d09c11014a906dfb79ff0662653"],["/2021/06/05/Review/流浪的月/index.html","2d112060eb6c3da3f43f18227ba04d98"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1a151713f9c9326c6190042d891a0891"],["/2021/06/13/Review/第一人稱單數/index.html","08163e5d16cbd83d99636414d03facbc"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","a5178196a088c314ae0eac3192ab2eb9"],["/2021/06/16/Review/願你幸福/index.html","1c0e997542e82a1ccaef39c912a8492d"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","0cb476dc3388a2b81ce96fccc036b487"],["/2021/06/21/Review/神隱少女/index.html","53f7d5ac986716dda73af68c25721960"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","91aa28ee23f9910858cad162b8454234"],["/2021/06/23/Review/天空之城/index.html","e2fe303d29a1fdf75a1e0fa01d6c51dd"],["/2021/06/24/Review/魔女宅急便/index.html","5813ec448b423cce3dc8a7e2be6b059d"],["/2021/06/25/Review/借物少女艾利緹/index.html","17f1e61e1e93e3132aeead2b38c8ed05"],["/2021/06/26/Review/魔法公主/index.html","76fd919f775fe5d2e2d88dc49d055078"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","dbb44567608b9fce5b43f7a3df1a000b"],["/2021/07/04/Review/飛雪與劍/index.html","e7de25b78add01f275b936a2d6686e07"],["/2021/07/09/Review/地球防衛少年/index.html","78a6dbd57f1b9ec9abc0cdf4b5a5d79b"],["/2021/07/12/Review/Angel Beats!/index.html","500eb80836742e1560c678ab8f744ccd"],["/2021/07/13/Review/Clannad/index.html","0122d46ff71bf50895621a3b6a34c1cf"],["/2021/07/15/Review/AIR/index.html","6611243757b9ebb314063eee70f92c70"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","73956d078680470456148d4d815ed107"],["/2021/07/15/Review/螢火之森/index.html","166daa23ecd32a49ff83bf8172e6d7f4"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","ff474f0718cd175520c9a8695bae72e0"],["/2021/07/17/Review/奇蛋物語/index.html","2097ed6f5674e9e2e19c21362d9c3ea6"],["/2021/07/18/Review/Vivy/index.html","49e7e4f47bf752ebfdf2347b2ca81588"],["/2021/07/18/Review/請妳消失吧/index.html","34e4f773f0296cdba2f930ef5b458595"],["/2021/07/19/Review/漣漪的夜晚/index.html","a595b0c625bd6d501fdfe4bedcc99bde"],["/2021/07/20/Review/月色真美/index.html","733d2a9050936c1e4c78f452d3e939d9"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","910dc9d550613f7afb5bf5607540cc9f"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","a57dba02436abdbab2be8a9f4d9b7e86"],["/2021/07/22/Review/罪惡王冠/index.html","5bc41fc2741bce741f46b36852e044e4"],["/2021/07/23/Review/弱角友崎同學/index.html","9c37afb8d424d3f9d5b152b27049ec4f"],["/2021/07/23/Review/惡之教程/index.html","3ec587e56a5d30226fd2f5aa5fcb28b9"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","0d6127df4d0b8f10e2eb64e6139db776"],["/2021/07/25/Review/魔王勇者/index.html","48c98951331e99fe1cd5c6fad827b233"],["/2021/07/27/Review/一年A班的怪物/index.html","ff835520a2688cef1c60875369527256"],["/2021/07/27/Review/奇巧計程車/index.html","698bcd9dd65af667ed4ecff15ff0a1ab"],["/2021/07/27/Review/專情的碧池學妹/index.html","03b9dc3fe661fcce33b19ffe34c740d7"],["/2021/07/29/Review/只有我不存在的城市/index.html","0549a1496c5d2d11e2cdfaab8e4832df"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","e03cc3df29b64fd190c67de788857528"],["/2021/07/30/Review/可塑性記憶/index.html","bb509f227245bfc531e4b8343164d6ab"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","2ee1653fca44ef6a47a528a770bba7c7"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","452c9f1b99db3f26a7a3650d3e95084b"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","50aef8376d45f9774193a044fc98a3e7"],["/2021/08/25/Review/清戀/index.html","6841dea8a4acbbd34df4dc47376035df"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","fbc4ff8e306f8f501d730688c4ba1fbc"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","ab9618184e51de10702ca21e5d479d47"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","86d2268ad471480dd1e5f9a5e589abbb"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","794472a24fc7d17de8ae9600e2b6d50b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","9d849a41f1c80e22a020307cf9315107"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","3c2193f73f1b3ec5101c604abc264a01"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","6486e2b8ca35b34e5e624b0253febba6"],["/2021/10/16/Review/龍與雀斑公主/index.html","fcf5e5ef6b6712a8035f1bdf92c7fcb6"],["/2021/10/19/Review/孤狼不想開後宮/index.html","1217110951be5d3a34ee06b2bed723fc"],["/2021/11/13/Review/徹夜之歌/index.html","35574ac0171d9703db6de6d0b841ec0e"],["/2021/11/24/Review/武煉巔峰/index.html","4f02245149372e8fa1c881288c651f41"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","8bf9b5e9e60973d477d9f945059895bb"],["/2022/01/28/Review/神醫凰后/index.html","2fa5764ceba894efac67ac5682b8cb45"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","301a98a2f005e77c31b867166b030525"],["/2022/02/13/Review/夏日幽靈/index.html","31438736ca7db8ca8ef0ce9391577292"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","50c6f2de5afa720bf25db754d79372dd"],["/2022/02/26/Review/賽馬娘/index.html","136c39bffdcb06c33f3ee88aa46ba702"],["/2022/02/27/Review/大欺詐師/index.html","0c06556b872e66f2c2d6e5cd5cdde148"],["/2022/02/28/Review/前輩有夠煩/index.html","d01bc884c5a67ca62013ef9289a4d09f"],["/2022/02/28/Review/碧藍之海/index.html","2b987c85639de525eea36f6b3c47a3d3"],["/2022/03/05/Review/落第騎士英雄譚/index.html","ba07d9ddd747cf44f1ca5e02ad5f1b8c"],["/2022/03/06/Review/Another/index.html","a9abafd12690fb1e5e55bb36c5bcf41a"],["/2022/03/06/Review/入間同學入魔了/index.html","4f12da05834ef8105f30124076283d0f"],["/2022/03/18/Review/再見宣言/index.html","18cb4dca93165004811f30ee66025f34"],["/2022/03/23/Review/生若冬花的妳/index.html","3c456d03e55375b0fe4355401bb50b8d"],["/2022/03/25/Review/天之弱/index.html","f8e331c0992f8f27c699f92df0be1bdf"],["/2022/03/31/Review/滅了天道之後轉生/index.html","be0d14fe205e6da2ad7f944f1b5df0b9"],["/2022/04/30/Review/泡泡/index.html","41f3f2b51d5f230a51eeb3dd07fe7fac"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","95b64e9945344a19ceff34bb58f1ec9e"],["/2022/06/13/Review/偵探已經，死了/index.html","1b0ee272ba5610a01908f025ef083136"],["/2022/06/14/Review/黑色子彈/index.html","96625228c33d59ead961bc2cdc08291f"],["/2022/06/15/Review/黑白來看守所/index.html","8c47cb563011b923ac4a9cb9829bc68d"],["/2022/06/16/Review/虛構推理/index.html","74db816cf493e72bcfa73ebab4246daf"],["/2022/06/17/Review/戀愛與謊言/index.html","89c83c61133568bf64ee20011ec0764e"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","d7dba9d59ef539391a4d1fde108fb4a4"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","77ab7260d264a87448d5d24ef9901ddf"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2f4245d32a81e9cec9e44916de05c6ac"],["/2022/07/03/Review/Hello World/index.html","d50fefd2aa0a27c26033b8eafc161851"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","f1a7f13320154b71c4115343f108b692"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","53dbd2e72b33ff368e0fa03f1183215b"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","57540f105c2047eb6fb4b4214692ca6c"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","35dea766290dcd1498548966fa133c8e"],["/2022/07/16/Japanese/動詞分類/index.html","9553c8df3def8f76c0bc0b48e066200d"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","3e0092f029c04e80ed297a0a1e25f21c"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","938bb7809beb7c210460dee5cb488e0b"],["/2022/07/17/Japanese/音便/index.html","f78ba7563830ae5f2500b505b4afa542"],["/2022/07/18/Japanese/動詞 時態變化/index.html","f88fe2f34a7f1865f5816483f8bf4dd5"],["/2022/07/19/Japanese/助詞用法整理1/index.html","c1a878aa19faf1907a86a197ba16a7b8"],["/2022/07/26/Japanese/助詞用法整理2/index.html","ea0a50c07f4c6aef00faaee5e49a6469"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","f5e1369bd8498a97239910e4834a0a4f"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","ee02e08443f89eb51a312a2f7abeb270"],["/2022/07/30/Japanese/疑問詞/index.html","5f5e7435356c881c09e5d801b2058fa3"],["/2022/07/31/Japanese/助詞用法整理3/index.html","b702f1415988772fde99653f82f93a0a"],["/2022/08/02/Japanese/副詞整理/index.html","885ed9be112b15cdfc51d5a700c1e267"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","d33fa0c9225e4f1511a1a9df1d5f06b0"],["/2022/11/04/Programming/Data Structure/index.html","2a03c08a273f1e91effef84a551f2e31"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","9b621696edeb4692a1ec3e49a7245a8b"],["/2022/11/22/Review/組長女兒與保姆/index.html","4ba75e8cbf02d7d6511d072f911282b6"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","8471226825a644cd4dfc4cf0e90ffd40"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","0fa89e5e85b8b5be6aff67737adb72a0"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","8976184604cae03c1c7c0a880c5cedc4"],["/404.html","75a4c857660e2b589eaadaba14df5066"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","6ea53a1474e3354ed9aa0748b2de4074"],["/archives/2019/11/index.html","527845a63df8e98f56136d682774eac8"],["/archives/2019/12/index.html","850c66dffa03df85b491d3e4f25f11ac"],["/archives/2019/index.html","e5bb36ee4bf06e72f8a9fda6cc564795"],["/archives/2020/01/index.html","aafd08dc00fb46460c07cf05c030e84c"],["/archives/2020/02/index.html","73101848bafa67993a6b86a36d384315"],["/archives/2020/03/index.html","c05f539b115d998cf33b33ca37b50d90"],["/archives/2020/04/index.html","3e7d8d88b2d4ae46bb7bcccdaef0c838"],["/archives/2020/05/index.html","0065164bca268c6e22ee09bfb70d1b31"],["/archives/2020/07/index.html","e08b75ea69f5c7a84f1049ef85727c79"],["/archives/2020/08/index.html","5a063c50ac9a2b644221ad86cd4f4ba3"],["/archives/2020/09/index.html","1b71a2e0b5d4bf39f4f396efac131e85"],["/archives/2020/10/index.html","8d44c46f7fc92f616e0307b30ca158c6"],["/archives/2020/11/index.html","d839fd455331b069fda58214e58ab8e7"],["/archives/2020/12/index.html","79648168f893b3bd415e81f7eaf2746c"],["/archives/2020/index.html","4acb2845dc8b00073435b55c48b34cb6"],["/archives/2020/page/2/index.html","c0cdf382b89ecaacdf6999d33ff9f9c5"],["/archives/2020/page/3/index.html","5b2c457c931bd2aa2d8d8b491ffee8d4"],["/archives/2021/04/index.html","bad2baaf53512cbc9367f7ee3197e906"],["/archives/2021/05/index.html","b225c90a3ff4909b9740d57c5d5f23b6"],["/archives/2021/06/index.html","732be3d1cc7359c59416f263b1ff6bca"],["/archives/2021/06/page/2/index.html","ca27b523b0baf3948b499d3a4ee4ee10"],["/archives/2021/07/index.html","4283451fe36ef22ec72a971a03fa90cd"],["/archives/2021/07/page/2/index.html","6a3d2623f61ac592c88a221430699ff4"],["/archives/2021/07/page/3/index.html","42cff34d95740a18e927bb15eae26e86"],["/archives/2021/08/index.html","5a5905ca8a51843a16538b6ab5795bcf"],["/archives/2021/09/index.html","7b8720b984b0c2ee9561cf8b6bccfe6b"],["/archives/2021/10/index.html","3b2d0f1921829fa6046185fa5c8f1763"],["/archives/2021/11/index.html","2ff4b69fd76b55fefc4660448e2099da"],["/archives/2021/12/index.html","0cf3aed735229ec19f08d7c21c4ea174"],["/archives/2021/index.html","2c82e5cd46441e92628985933633e110"],["/archives/2021/page/2/index.html","00d19004af50f6184d676e67c0977aa3"],["/archives/2021/page/3/index.html","096e6b7b15432a1abf15220eaa9f56a3"],["/archives/2021/page/4/index.html","a19c35fb29b310f141de38c0819a1fd0"],["/archives/2021/page/5/index.html","0dd45de9111e3771fabcc6e54a43695f"],["/archives/2021/page/6/index.html","3cc530fa1387cd40ced8bebbcb4eb76c"],["/archives/2021/page/7/index.html","257091ea5223efe2eee58d2535588261"],["/archives/2022/01/index.html","f3c2d1a9bb44b407fbd92856b229d44a"],["/archives/2022/02/index.html","5e4aa0eb66a47342c35c81318a4dd5a1"],["/archives/2022/03/index.html","ebf35d7e9b76fcf6de90818d6a1716a0"],["/archives/2022/04/index.html","634158033c05aeb0298d6c0dfd763427"],["/archives/2022/05/index.html","21a8de31fb8f1da82cb4b6627a3b8c53"],["/archives/2022/06/index.html","b11179368c2680dfe3c8dd601df1d696"],["/archives/2022/07/index.html","0af1c03e25b0e50f9198495e62d3d924"],["/archives/2022/07/page/2/index.html","ef7b1225295b95cedfec5e11cafa7613"],["/archives/2022/08/index.html","1d3b6424c0c0829e8809349d1b5c3e1d"],["/archives/2022/11/index.html","72a5ec6f4cebf3a6f6c6a3df1f075185"],["/archives/2022/12/index.html","a9969c6f066c8940654f92716faa293a"],["/archives/2022/index.html","4025decea461cf5c9dd9968cac22afbe"],["/archives/2022/page/2/index.html","ba78aceb36e98c7f454a49e12c681517"],["/archives/2022/page/3/index.html","6bcbc7a0db0b7271c490913df8bf4a8a"],["/archives/2022/page/4/index.html","d81146e3ce4e878f7c74dec58eacee14"],["/archives/2022/page/5/index.html","a857d30d620496669a400ffeff3375ab"],["/archives/index.html","d4eff0079d58f411531f89daeb436da1"],["/archives/page/10/index.html","bbff37885d478425c391297ede3d7c51"],["/archives/page/11/index.html","edf8f4ef5f5b09aa1d3651199b5db125"],["/archives/page/12/index.html","7ce2d7d855c688b3999248930c1cd502"],["/archives/page/13/index.html","62f5d4df3e49cb87d2122ff73878d6a9"],["/archives/page/14/index.html","c98eb4cc4b8d313204659fcd78015330"],["/archives/page/15/index.html","c348c7878deab7e35ab5edb2df947ceb"],["/archives/page/2/index.html","bb6c297bcb74113a1560b2cbb5a6a0bb"],["/archives/page/3/index.html","9c63fe329b6798d70af5bc18f781f3f3"],["/archives/page/4/index.html","0aa456caaf94b97861a9d425d068e8a9"],["/archives/page/5/index.html","4fe57fb8e3aceaadce8b6ff7e077f426"],["/archives/page/6/index.html","f8683d50d1340aae49b970372e545748"],["/archives/page/7/index.html","e62e0890816a4d8bb958618ea5fc87e4"],["/archives/page/8/index.html","541acd4250caea4afc5f1d59f8aff035"],["/archives/page/9/index.html","652831fff538ffa95278cfe7ef7c34ae"],["/categories/Programming/index.html","8e81d8202eecb522a8096fda8d3fc6ee"],["/categories/Review/index.html","6b9cdcdbf88db4088e51211971925fb6"],["/categories/Review/page/10/index.html","2a78eef7381cd956a41d1d3fc3c846b6"],["/categories/Review/page/11/index.html","0ba4ef823403056d11943a5d6c9af4bf"],["/categories/Review/page/12/index.html","fe0300ddef6946be573e9ad0931abf0d"],["/categories/Review/page/13/index.html","1616b972cbd773e3d210a31c4a8f4d6d"],["/categories/Review/page/2/index.html","bed14eae82575d40c0b48bab7c971abd"],["/categories/Review/page/3/index.html","cf51b391c6879aff6fab819bdd7d2f8d"],["/categories/Review/page/4/index.html","6549fd62949ee1db4bb291894226eb8e"],["/categories/Review/page/5/index.html","2b38b4f36a952df51436f43438fb96cf"],["/categories/Review/page/6/index.html","1693f0a813f8f0596ac1e8d70a371c0d"],["/categories/Review/page/7/index.html","81509a8f236d58a26e9061aa8240364d"],["/categories/Review/page/8/index.html","7da9e0617b83edef79d1f9bfd31775e0"],["/categories/Review/page/9/index.html","9e745b580e24260eef1a73d49f3af366"],["/categories/index.html","f359bdee884190dba749e55fbaebe0e6"],["/categories/日本語/index.html","9e9b40195dd123b8127cc3c6169b75ee"],["/categories/日本語/page/2/index.html","dea65883d65c81fc9ff6c6cf1c8e1ce2"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","607263dd84a12cf5e8db007aefe8449f"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1c9a0b6d99d4eddec4783da1feeffd5c"],["/page/10/index.html","9da47f67f619334572c4ebebd3b4e009"],["/page/11/index.html","c12802c5963c9383842a858a47245a03"],["/page/12/index.html","2e7bf9dbe7f1b264ba6c885ce039beb2"],["/page/13/index.html","b2462ac0bd3d3880e7f8e1f75830fe6c"],["/page/14/index.html","c9d59c2af7d25924bc9a69ccdbb3f1fe"],["/page/15/index.html","2c1fec269672a4bb1d5242a91a8c2736"],["/page/2/index.html","450e88410965e646234830c68333bc07"],["/page/3/index.html","c257703b32b4974370845b9c8418f9a1"],["/page/4/index.html","19baa7f9db96275f4671f1b9d4bb03ec"],["/page/5/index.html","94b20bbf755a352b11ad9af22fad3ea4"],["/page/6/index.html","df32b9db67fb024322ba90e86b3c5748"],["/page/7/index.html","5b6780e1ea2d59f790275008e2f95731"],["/page/8/index.html","a616d87ee45c340ad89bcd6c967be8fa"],["/page/9/index.html","46de4e568a64604746f3cfd1f7402194"],["/sw-register.js","ccba5933b3dcf80629424665bfa24137"],["/tags/10分作品/index.html","f1d2cfe17d175ca942f7320843d00935"],["/tags/3分作品/index.html","ae0240f7198b6052602c9a8fb3f15867"],["/tags/4分作品/index.html","3a6caca18e090a73cc52794bc94153a3"],["/tags/5分作品/index.html","8f0ee78c04001a1264c09a7ef27d2ec6"],["/tags/6分作品/index.html","5b148ad2317e1ab52521da9f82e9466c"],["/tags/6分作品/page/2/index.html","a6e78fab5e7fbc2b56fe0b54b3ca98fc"],["/tags/6分作品/page/3/index.html","81a41afdc3557ea4d8d952702aee4ede"],["/tags/7分作品/index.html","a57711e4b7cd56dc1382d09e89cb2b1f"],["/tags/7分作品/page/2/index.html","e459c92ddcd85e924fa29ac9841c5fe6"],["/tags/7分作品/page/3/index.html","1e5d30e9ed4ccfc8eeff53c19d6c94b8"],["/tags/7分作品/page/4/index.html","0975269e25442d5f34eff8fb8c9e3a7b"],["/tags/8分作品/index.html","45d6090fcb4c94f1a4301733243d750d"],["/tags/8分作品/page/2/index.html","0c5f5a8829cab5e812602c8f13ec5683"],["/tags/8分作品/page/3/index.html","063f6cddd5402719f3d840a7d8968d27"],["/tags/8分作品/page/4/index.html","88709740ce6e823f7ec2048ac7a8d9a9"],["/tags/8分作品/page/5/index.html","a5472633a04bf0ed3aa0b3a76f98a2ae"],["/tags/9分作品/index.html","d7a478d2e1f2a02512dcbfc283b944dc"],["/tags/N5難度/index.html","ff2920fcf25a73d284c527374c55b3cd"],["/tags/N5難度/page/2/index.html","03726552e3c3537649bd2cc86bcad2b8"],["/tags/index.html","f089347bd334ac055d87728290a62e43"],["/tags/アボガド６/index.html","6926ceea4488c7cac6a0db85f7879a97"],["/tags/三秋縋/index.html","76bd8a424daff804903590701b57ccf1"],["/tags/中國武俠/index.html","b0ac4446bda13bc475c9f721a3ddd96d"],["/tags/中國言情/index.html","f18266ebfdf1b8e0862c283e463095e7"],["/tags/二宮敦人/index.html","e80195a41ec04bdc8ab069a95ea53666"],["/tags/人性/index.html","7f63e77bcaa04934c9151ae0e961d6a5"],["/tags/人際/index.html","3411d4e1959a95cbf3f3507c71134d74"],["/tags/住野夜/index.html","7ef441892b7447ff4651de97b57999b3"],["/tags/佐野徹夜/index.html","e231e427621151adedb36968259fe436"],["/tags/努力/index.html","8bb1bf77e10cdc44da5681279895b18e"],["/tags/動畫/index.html","67dae200d3c298033d92ad38223091f9"],["/tags/動畫/page/2/index.html","0b1f7f5902ac31f9db665bd17451a57c"],["/tags/動畫/page/3/index.html","cf75a4b7f1f6113dafc9e93d2a6f627c"],["/tags/動畫/page/4/index.html","fb623f7cc2d1c15263842415d32b52af"],["/tags/原諒/index.html","ac772a89744885c43f9da85862c13787"],["/tags/反烏托邦/index.html","1fb0efa47e5351b6fc418f13d6eff4f1"],["/tags/啞鳴/index.html","9c4877e8c41ebdfa535df45f2caa6b27"],["/tags/喜劇/index.html","2d31baf4b49c2a650df410e8930d8ab5"],["/tags/夢想/index.html","82aa293aebce05223ee368afadadb0c7"],["/tags/天澤夏月/index.html","442047a5739d8dc6fc1372e053d87c38"],["/tags/學習/index.html","5fe69ea83d5f1f1cad0989f81181b0e9"],["/tags/學習/page/2/index.html","a8a2e112ba81576b447480cc6badec42"],["/tags/宮崎駿/index.html","e229b6b78e89e99a473af22370d36633"],["/tags/小說/index.html","8b764880a1aa45015a8fca7611c1f139"],["/tags/小說/page/2/index.html","1fdca0c2acdc70245a95e878ded141cb"],["/tags/小說/page/3/index.html","3c0b74ab3e006da0efc93c85d79a45dc"],["/tags/小說/page/4/index.html","71a739f38e3e0e02cbf3330cf8be4a8a"],["/tags/小說/page/5/index.html","6a810c2a3a8743003630396eb7e87010"],["/tags/小說/page/6/index.html","ea31d2f8143e3a645f23d2155be55966"],["/tags/小說/page/7/index.html","555fd13fe5bcb337659cfe9c1087ce62"],["/tags/平淡生活/index.html","729786515082e484d74ba31d898616dd"],["/tags/幸福/index.html","129d6c9e93c3eeafabacef69c9cc7ea4"],["/tags/志茂文彥/index.html","607afe10c8e7807feb21c490aaf7ba3b"],["/tags/愛情/index.html","8459876cb050eeac8ecbccaff74a9030"],["/tags/愛情/page/2/index.html","d7451822ef2e131e9aaca5bd61cb7832"],["/tags/愛情/page/3/index.html","85d64cef787ab125b3729705726a6631"],["/tags/感動/index.html","7204bcdbe707cbaf46f09e9f3909f31f"],["/tags/懸疑/index.html","27c23e75b2a7a6c0ff2e68ca843b5608"],["/tags/懸疑科幻/index.html","113198736ddc9c0ac0ecbf8dc60b9a4d"],["/tags/戀愛/index.html","2aa71f7ae0e3c51c84da792110dcf138"],["/tags/成長/index.html","b2374ba73beb3716eb0fe52b3f421b8b"],["/tags/成長/page/2/index.html","064084c831841a6b785bc2e31cf7d288"],["/tags/戰爭/index.html","81bded0f66d4ab3d6fdf319457f85991"],["/tags/推理/index.html","17a1c654913267e148ebdb2b339ab1e2"],["/tags/搞笑/index.html","b74f6090e92f5bb18688836a726bd1e2"],["/tags/救贖/index.html","2402188b06a558cdb6e9d0414c34c17e"],["/tags/斜線堂有紀/index.html","0716ee231e8f66d389144870a61daf79"],["/tags/日常/index.html","b113e36f5ca52f9a73a82573f288f025"],["/tags/末日/index.html","97a93f748ca6f61df00673aacd389391"],["/tags/校園/index.html","9bf65babe5d6b024d7cf5be7e6065241"],["/tags/武俠/index.html","97c455ed8a0163cfff236fa6e6db43ad"],["/tags/武俠言情/index.html","1afc2fe605c3beb5e99f65506928a644"],["/tags/漫畫/index.html","36cdbf028c1cfd5d219b4868a8c8fddf"],["/tags/生命/index.html","740ab9ce0ad500d01d4aef1a1a45702e"],["/tags/生命/page/2/index.html","15a5d4e8fa1a7f00a107383b81c1852c"],["/tags/短篇/index.html","eb0cde8501399e8a669f5204e94851a0"],["/tags/社會/index.html","49fa731a21b5190cfa0949afe26807f8"],["/tags/科幻/index.html","103b0aa6ad5d0ce0cf1fe4394b2095a0"],["/tags/童話/index.html","cedd51ae86502069ab8f1bf68197cbc4"],["/tags/競爭/index.html","45af7900a4e3e7a2816b88bf8e11eec3"],["/tags/自我/index.html","2b88ccca8627b445355a82a337efa460"],["/tags/自我認知/index.html","9fb60947749db5fb73ed2d624e537bf3"],["/tags/葦舟ナツ/index.html","086033416b9805c1ce2bda08e1977bf6"],["/tags/藤萬留/index.html","d9f6878c3dac228146b70ce808e98368"],["/tags/親情/index.html","3fd4bdcc7c6c208d193bb28b65781c5b"],["/tags/雜項/index.html","c03749a6a75db0ed1389dafabf241707"],["/tags/電影/index.html","ef3cddf9b242469bacb46fed2c52d801"],["/tags/電影/page/2/index.html","aad1c7a25eb74c0794c6780f2b2d1e23"],["/tags/霸凌/index.html","a20b4ad097287b4b14b58cb91a6c7496"],["/tags/青春/index.html","2518cdbfe8e2e46dd94b1bceb9b783be"]];
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
