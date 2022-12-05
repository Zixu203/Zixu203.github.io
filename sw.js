/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","b92f91ee51d017adf2c78eb046a879d8"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","15eb024933ff42865ef743720310140b"],["/2019/12/25/Review/無法計算的青春/index.html","948402a1296c23e8f5db8e0f58a229ba"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","7439be29247a4a8dac6ac89724d503ef"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","c3b48ae026b94e6b0b4d00f44441f0cb"],["/2020/01/19/Review/下雨天，不上學/index.html","74659747053bc28c2ad3f7c69d1866e0"],["/2020/01/26/Review/三日間的幸福/index.html","5b2e17c3e25e3d2ff8286aa038ee58c0"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","eeb5b33e6fa0ee41b5a7c6ac7d4698c9"],["/2020/02/09/Review/青春期超感應/index.html","9378ba0d5599cbac1fbb29e26d89ad34"],["/2020/02/15/Review/又做了，相同的夢/index.html","5959465fffb2f07c867c508456493fc7"],["/2020/02/22/Review/回憶當鋪/index.html","1adb54cbc51e557907c0777c5b8a7ecf"],["/2020/03/22/Review/不適合自殺的季節/index.html","59d623f1dfd48f3118f3dec790a5d230"],["/2020/04/26/Review/我們都無法成為大人/index.html","ffad8611d058de115c2082d66a83215d"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9c6f89242f479bd1da8c535ebf529a9a"],["/2020/05/17/Review/人間失格/index.html","ea19902328dc9705112f7ba5320f5f30"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","0a953f4da7052139b6c17cecd3a9cd83"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","6c44cd4b93f6ab7bfcb34316c5efbaa2"],["/2020/08/01/Review/銀河鐵道之夜/index.html","9eb00c078f3eddcc0e88bcb0409cacf3"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","86cd9c458ca540d55ea22169b0d2da52"],["/2020/08/16/Review/15歲的恐怖分子/index.html","19c0db39de4f602d52dce4e476a3fb50"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","2bb69df9ee4d0f4ab9e6bf8b2606bc4e"],["/2020/09/13/Review/羅生門/index.html","8e6d8e4a5e1551d8afe4e8581c6c7fce"],["/2020/09/20/Review/闇夜的怪物/index.html","6ea0a97e065e11358e8ad1cc3d07d651"],["/2020/09/27/Review/14歲，明日的課表/index.html","63d1fa215f5f7756b0da466f4ba6edd6"],["/2020/10/04/Review/致十年後的你/index.html","6715e143aa49acc95f813019154d3589"],["/2020/11/08/Review/滅絕之園/index.html","7b71cd2c2fca834fcebbed399fcfbd44"],["/2020/11/15/Review/將愛拒於門外/index.html","fffb26c60575c7bc4a54244cb18df9b3"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","dad5f0995a14639c7d4009978e4e2698"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","fd120dac296e682de4b5b641fb7ee038"],["/2021/04/22/Review/道印/index.html","009c3b1de7620a8a267cace9ed126737"],["/2021/05/03/Review/戀入膏肓/index.html","b342407b74ba22fa5810a02653d1c858"],["/2021/05/10/Review/Dice/index.html","85288c6a3fe97b398305ff15b6146120"],["/2021/05/15/Review/魔女之旅/index.html","7cda157cac2b440bad30a31b95352dd6"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8b446d645191ae56013b28024611f682"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","262728b7eea03325e6c37179b477936c"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","331899d9547bcd113d63ceb37e04fa89"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","1b93c59e87b801af6d0986990e4e9177"],["/2021/06/05/Review/流浪的月/index.html","9e1ce12b908334ffdaabd7e9d98c5b12"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","93389f1b88dd2ebd61a3429b277d0869"],["/2021/06/13/Review/第一人稱單數/index.html","64eb4fd372d97700bbbfcbdffa1c815a"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","ec3cff3475f0dec66f4b8f06f371e1ff"],["/2021/06/16/Review/願你幸福/index.html","37762a90d761aa596a0dd4b125265915"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","96114cc94a78bac2880397026ea0c868"],["/2021/06/21/Review/神隱少女/index.html","f0b5640f3d7c2a600d529e3378ac8b88"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","8057e380f92e30a4f4ca587b06b3f504"],["/2021/06/23/Review/天空之城/index.html","b8c3a17bff2c4f7e5b3eafe4aa17fe8c"],["/2021/06/24/Review/魔女宅急便/index.html","4fdd9dc166238ef6ed72044da420c443"],["/2021/06/25/Review/借物少女艾利緹/index.html","d65180e531edb0687c9408e9cf9af58a"],["/2021/06/26/Review/魔法公主/index.html","97ac01266919783140cd216c95770630"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","fa3864ae4a7df1ed247a0f0052736190"],["/2021/07/04/Review/飛雪與劍/index.html","261f193003d1616301d7ceb76f658dc4"],["/2021/07/09/Review/地球防衛少年/index.html","1bac6475512304489e1a11e35b4e433c"],["/2021/07/12/Review/Angel Beats!/index.html","863c4eca6159d70f567ceef2815fae29"],["/2021/07/13/Review/Clannad/index.html","1768d1e7a7bc72363a73a78e561f5987"],["/2021/07/15/Review/AIR/index.html","5a2de1d82a2408fb67c7d64cd7dcd8be"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","ececd2d867915d8703d48a9fb2c5e4ec"],["/2021/07/15/Review/螢火之森/index.html","12c2fc84b9058e31961d0dec6c833f3d"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","6300e874715d48ee44901f17e00cf4c0"],["/2021/07/17/Review/奇蛋物語/index.html","f1938d4435e13d54cb856210a33087ae"],["/2021/07/18/Review/Vivy/index.html","6772e42c69d45ddec34e22e9980452c5"],["/2021/07/18/Review/請妳消失吧/index.html","a6845287cd9339279225073220133c26"],["/2021/07/19/Review/漣漪的夜晚/index.html","73dd029a8585b4ae9595f8382200a21c"],["/2021/07/20/Review/月色真美/index.html","efebd3ca69d8c728e195d5943aa61075"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","d0de3ba36e136c5d18c0288c47736be3"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","ee876d32256cccf04577009f5715664c"],["/2021/07/22/Review/罪惡王冠/index.html","50658221ebcbaab67b45b73294d96c4d"],["/2021/07/23/Review/弱角友崎同學/index.html","3ab9859163f668991a05342d70dcf60d"],["/2021/07/23/Review/惡之教程/index.html","1d5d4cd54195efa7d6521383a8c5f080"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","a2f6f673371c47101e548ff2cb2a8f2e"],["/2021/07/25/Review/魔王勇者/index.html","16cf259c6da9145f221c19495f10ca40"],["/2021/07/27/Review/一年A班的怪物/index.html","30cfa0da68d741eebdf05eea8937fe04"],["/2021/07/27/Review/奇巧計程車/index.html","5de0f2999029561ce396a1309b30fdcb"],["/2021/07/27/Review/專情的碧池學妹/index.html","7f03352048ae5cd50cb568190759fe8f"],["/2021/07/29/Review/只有我不存在的城市/index.html","520935eef1acaa1100437a28ffdd905a"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","ff4f9cbd2848d03e83b3ebf9f5531d36"],["/2021/07/30/Review/可塑性記憶/index.html","2fecc91e76e3d01eafd6616e350acc37"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","aec55d376a9049a3a6004701debcde83"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","3d44faa3deb20971e70bb24bfea25290"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","dd371afaedb6145c665c0eaeea25540e"],["/2021/08/25/Review/清戀/index.html","798a2c96f84b6d30ed501071cfd9c353"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","d27860ef99b5fdd24da2efeb96b38e18"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","49327205ef03a966eb7cd9d4e39a87e3"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","a49490b3bfdbd3bc8f6001f8b8ffc23a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","569cc63368718ccdf89e038f9489e9f1"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","8c41be27333b3779fef646c0c8ae09a9"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","37fcef3f657fdf1aba0408fdeec6abc8"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","9c55afb52011adbde9da4969424312f2"],["/2021/10/16/Review/龍與雀斑公主/index.html","75c0e71726d70598338d4c73a960b2c8"],["/2021/10/19/Review/孤狼不想開後宮/index.html","dd1005845a56550e07456df7b1af948c"],["/2021/11/13/Review/徹夜之歌/index.html","53d81d2bcc5998d93d2015450ad6c100"],["/2021/11/24/Review/武煉巔峰/index.html","6e369ed1f07fd599a65987df5d336791"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e91b56e479aab8f2a448d84e01912e1d"],["/2022/01/28/Review/神醫凰后/index.html","971253a782612767a6a284ca4ef893d1"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","15f5be8d521e312557e151579d0d59d5"],["/2022/02/13/Review/夏日幽靈/index.html","ea2d56162ccafc2a65600f7f51f9e5c9"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","c885230e58e31f91ff7c1f0d11c4d673"],["/2022/02/26/Review/賽馬娘/index.html","680a2ba5c14255ed8f09b8c525c6f5dd"],["/2022/02/27/Review/大欺詐師/index.html","cc6fd38bcb97e6710c62e9647a178ed3"],["/2022/02/28/Review/前輩有夠煩/index.html","a88bf9ed4f5c1a2ca7d7971f29d44608"],["/2022/02/28/Review/碧藍之海/index.html","7b0b696263428125113c910c6139db8d"],["/2022/03/05/Review/落第騎士英雄譚/index.html","5c414db7fd89bc52960c9d6fe56f34fd"],["/2022/03/06/Review/Another/index.html","d07e6ab1934c9e5c65bb13f85c6e1491"],["/2022/03/06/Review/入間同學入魔了/index.html","e35236d9ffc162450eeba06e14b5759e"],["/2022/03/18/Review/再見宣言/index.html","74c4ae19a8e643bb2891677488708eff"],["/2022/03/23/Review/生若冬花的妳/index.html","dc965e8b4df97daf25f5523d106be0bb"],["/2022/03/25/Review/天之弱/index.html","2d5e3ebc0f8683f58a83f789134bd12a"],["/2022/03/31/Review/滅了天道之後轉生/index.html","fc30636d5eaac6d871ecf153b8a481af"],["/2022/04/30/Review/泡泡/index.html","5c11d23a170749415ea0a6fa8213a158"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","1a55bcec904c2e8a4b1e3d453ddd4722"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","a98f18fad10be09e1b28c9fa3742f90d"],["/2022/06/13/Review/偵探已經，死了/index.html","7d23e80db3074388452beb28671e63db"],["/2022/06/14/Review/黑色子彈/index.html","cbef8c097c7415e4495210088c4c6da0"],["/2022/06/15/Review/黑白來看守所/index.html","56f8ca9e875f0e854ced946fd23afacb"],["/2022/06/16/Review/虛構推理/index.html","6a6ed2493cad8244fb10f8feff2ba290"],["/2022/06/17/Review/戀愛與謊言/index.html","c86fdd28cd04999e5bb147eedf09cff0"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","0b1f59d049f2eaf9de300cbe1b445987"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","84600e8a6aa8dcf5427db0e77051c64f"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","c4b5ab32f26c7aa75126db21678990ec"],["/2022/07/03/Review/Hello World/index.html","a338eb4507abb635f7ee589aa54672e0"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","2a01be1f1a38696fe5fc488fcc7e8f9c"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","979164a8e5d083cc048447af3bcc0290"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a8b2d18995e6a19039c51da5eb6503d9"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","4f1e7e63cd503c578ecb24d77a57fb82"],["/2022/07/16/Japanese/動詞分類/index.html","415be732b8b604b4f4b6c234646e469f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","a1a959e6b1568df053e9835405cd8c53"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","cd6c5f915149cc7c26ca9ec46feb9748"],["/2022/07/17/Japanese/音便/index.html","e0c5d967327516c00d2a1d7c96db6192"],["/2022/07/18/Japanese/動詞 時態變化/index.html","9737576341164caddca67aeb13bdd2d6"],["/2022/07/19/Japanese/助詞用法整理1/index.html","7aceb883749d4ecdede661fb67f32823"],["/2022/07/26/Japanese/助詞用法整理2/index.html","ccae9c73d70ed8f933bda010dbc97866"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","7ecaec053a116012ae628342bb69f453"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","08782c1ebe55a3a5545f3b8fe0d71c92"],["/2022/07/30/Japanese/疑問詞/index.html","752d39ac0257f226b370e8096d86d00d"],["/2022/07/31/Japanese/助詞用法整理3/index.html","fb7f609d258ee5796dc7b346577646bd"],["/2022/08/02/Japanese/副詞整理/index.html","6f709aa35ec00ec6b1f57099987d30cb"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","04c6b4adf928b393b04df8d86a46e406"],["/404.html","2c86a4e8514d591a80424fbbf36cefa4"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","63729d041a88421935b91639ae2978bb"],["/archives/2019/11/index.html","c37a41445b4ad51409986cdc25b50700"],["/archives/2019/12/index.html","139b039023340c88fc49b166b46e636c"],["/archives/2019/index.html","8398d722d50cf2b219ccf0e2624b0803"],["/archives/2020/01/index.html","ec7dd49fd86810715bb431760fecb2e6"],["/archives/2020/02/index.html","6b57ac5354efdee9f738ac4baa04b41c"],["/archives/2020/03/index.html","71005ab2ea52913ce39078e5cb257c66"],["/archives/2020/04/index.html","58b4c8acf33c0288fd7defb280a95cd0"],["/archives/2020/05/index.html","09a6268ea01d65982aeb5e6dbef49b9c"],["/archives/2020/07/index.html","27d920d44db1b8e81be1af68af2a6dc8"],["/archives/2020/08/index.html","360c385cf70ec3e9ec178fe10477fd39"],["/archives/2020/09/index.html","46f81e048deb6a9b4a032731addc3fac"],["/archives/2020/10/index.html","ff7079766372f95046d450901adc2632"],["/archives/2020/11/index.html","1a3bf6614b9369b078c1392e5f8c1fda"],["/archives/2020/12/index.html","8e8d305de69b756b7f8fdcda1682fd1d"],["/archives/2020/index.html","defa1c15c8c8b80c7068e9627c559bcc"],["/archives/2020/page/2/index.html","a3592785432bfeebe199cefdf3353916"],["/archives/2020/page/3/index.html","5ddc428677cfa24eba4e3cbf8d19b44f"],["/archives/2021/04/index.html","04c4bf28ffafc1b7eea1dd20e1803cf2"],["/archives/2021/05/index.html","d06748c7fcd0bfce8f739a7bed2e00d0"],["/archives/2021/06/index.html","c303e65cb984b4a3d0e19b689a9e9152"],["/archives/2021/06/page/2/index.html","731831fbe9dc5a18475947a7fdd5ec48"],["/archives/2021/07/index.html","8bc91cec0b363e5fa9e2071195f264d2"],["/archives/2021/07/page/2/index.html","2f148f876c68e08972b9f551299c1428"],["/archives/2021/07/page/3/index.html","94f754f01e62bf4dc6ef52e4db1ec16d"],["/archives/2021/08/index.html","df1583c21becfb40321624f95f6aa19a"],["/archives/2021/09/index.html","4241143b35108206394f97dca24f3e1c"],["/archives/2021/10/index.html","a9385c6e27a6e5892bd7fadb31c88642"],["/archives/2021/11/index.html","0cfc09e266b8b9e7f779859db5aa29f0"],["/archives/2021/12/index.html","e9885859893c8edcc099df3c2180c925"],["/archives/2021/index.html","ddcd361be3b935830674d6e2051ea72a"],["/archives/2021/page/2/index.html","2d869ca5aba1d5ba6996b61b86fa95e2"],["/archives/2021/page/3/index.html","63baa6d43c738a0c4ddbc72f5747f8f0"],["/archives/2021/page/4/index.html","d75ea4786caa913f13de9dab4deb7647"],["/archives/2021/page/5/index.html","376ed7d5e66bfa86688cbde2bbe99b62"],["/archives/2021/page/6/index.html","8782537e0a640e0c3774d70c7d2040d8"],["/archives/2021/page/7/index.html","b81bc27b27780279555c504b0c7d8ff4"],["/archives/2022/01/index.html","afb67ba59889ee9b4de6b15eaac7203e"],["/archives/2022/02/index.html","e9fe58c9ced58ffe7c7f6e9373134839"],["/archives/2022/03/index.html","a3a8ef56e69196e03324a27eda52f4aa"],["/archives/2022/04/index.html","12fe1a898d4cdb425735234aa8e7239c"],["/archives/2022/05/index.html","e4d1cb65dfa00771d2d69a0227cf6ba8"],["/archives/2022/06/index.html","fbd3ef90d70753ac5a91b5be86928547"],["/archives/2022/07/index.html","01b1d3effa60214d2b23d5b51d71fa01"],["/archives/2022/07/page/2/index.html","8e7372b4e831a4b63859d9cc7d4dfe68"],["/archives/2022/08/index.html","24c3d7ce954399f97655151773579fa6"],["/archives/2022/index.html","e2c6d5e1733f5ae8fd22adf6f6c19444"],["/archives/2022/page/2/index.html","31b02eaae153305b4b2284cd67c2255c"],["/archives/2022/page/3/index.html","a44f88f35b7ea7c6e6b3401d426cdfce"],["/archives/2022/page/4/index.html","e0bfd167c427fda1ce59392b9b46f6a3"],["/archives/2022/page/5/index.html","6842566a192b215b5d493005a4f67ece"],["/archives/index.html","a72b5fbefb2e043c692dc6275736fb79"],["/archives/page/10/index.html","1396cd4c9572c26f9a5f087c3a3b698d"],["/archives/page/11/index.html","0ef6c5ae8b034e75b4579b6d6427bc20"],["/archives/page/12/index.html","dc206b863f6035408eb34849fbc7f0b9"],["/archives/page/13/index.html","ff8593d1c799e87afdfc0194a5397341"],["/archives/page/14/index.html","e64f2b1ad8466a91f245321d03b2bc0d"],["/archives/page/2/index.html","ad69566b0a826a1fc23c860d04adf8f0"],["/archives/page/3/index.html","a4455fe5940498b17ed802baa3b6295a"],["/archives/page/4/index.html","b2f0e5c2195f71d555a351bca42c1b79"],["/archives/page/5/index.html","f3b8301fd384c4ac94e4aff744854e00"],["/archives/page/6/index.html","1b77c85dad86a377705f96606236d407"],["/archives/page/7/index.html","b72655479d1dca90a9890ad7bfb7939d"],["/archives/page/8/index.html","7dd2762f02b2e8200e2bef0edd03ae4b"],["/archives/page/9/index.html","db736b994766f46b1f73c7ff34791fb3"],["/categories/Algorithm/index.html","b25c614fec1d55a5365ee83718940260"],["/categories/Review/index.html","1d7e2fbf10ff0eb74833df875d0f2b2d"],["/categories/Review/page/10/index.html","2047b21959ae75f186f8f84e706c3a6f"],["/categories/Review/page/11/index.html","51d3c424c17b0bce91a739f36f229b1c"],["/categories/Review/page/12/index.html","43e22485392efbea76ed01a4e3712946"],["/categories/Review/page/2/index.html","7021617e03ed453a420a272ed412ef9d"],["/categories/Review/page/3/index.html","241ee26408e9fa866704aa15f87c0bcc"],["/categories/Review/page/4/index.html","4415c6ca2df1542da044b5ef2b9f3188"],["/categories/Review/page/5/index.html","6a0950a554a519523328a50e83dfe571"],["/categories/Review/page/6/index.html","c53c7479d9d14e0442e5b98af359749a"],["/categories/Review/page/7/index.html","9e3ce79c1f652f384f7d5726baac914b"],["/categories/Review/page/8/index.html","7d693c1fdb34579f61f58ca5876273cf"],["/categories/Review/page/9/index.html","3b9497f5d72d69a12f65d94b68485305"],["/categories/index.html","35ac9c931e2098e1ec5cabb9858a65e8"],["/categories/日本語/index.html","1cd77ebe62feb5a2f8b17cf3f15c8b9c"],["/categories/日本語/page/2/index.html","24d1c94923414d255261474bc076889f"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","38dccd42fe0baedfff53669b90c60660"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2c1e9bf6e2189863610bd5d90c631bba"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","16a9cf8bc6f66a2ce60872a414cf32bc"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","b79ab196f0ba26c635cf9d12caa0d980"],["/page/10/index.html","d53aabe6ea642dd631881b788551778e"],["/page/11/index.html","19c5121267a7d37e9f07e3d9ed6f3358"],["/page/12/index.html","6d36823b00a0276f2705c8f6b500f7c4"],["/page/13/index.html","81d93071eda7c9b6c7154edfd9059bd3"],["/page/14/index.html","e6536bcd2df111cbcce334f15e8d8ea7"],["/page/2/index.html","d68f5efa889c10cb0917c8b090053b67"],["/page/3/index.html","33dac95a7c84c321513056917e9ece9e"],["/page/4/index.html","4293c5a3146c1090af38f3a1c13f39c1"],["/page/5/index.html","8b5d6044721ecdc98a1125ad6f095684"],["/page/6/index.html","d5bb254732e0872022cf43e94975f517"],["/page/7/index.html","e88d5088992af46220f783e9356dd506"],["/page/8/index.html","426ec720d59e741fc316faa8cc8623d5"],["/page/9/index.html","faa7411fa6332b2978f650177c359f29"],["/sw-register.js","a3dfeb3968bccd38589ea66bc858d4d2"],["/tags/10分作品/index.html","f1c33bd3ccf4ffcb917a39ae9682c4e9"],["/tags/3分作品/index.html","ac6c3d94b88d908c2417ec4baf11f7a6"],["/tags/4分作品/index.html","32f14e495a5f2fef9f051a90a0fd0dcd"],["/tags/5分作品/index.html","867156426cef4593a7b6f1a5b0a1f051"],["/tags/6分作品/index.html","b97268bbed3364c7d323e5e9af3ac707"],["/tags/6分作品/page/2/index.html","5f870aaf852a13fa29a489216f153b99"],["/tags/6分作品/page/3/index.html","725a628176f3602fa31347d8ee36099b"],["/tags/7分作品/index.html","36cef8a8bfc1c6195806384a02a6fad5"],["/tags/7分作品/page/2/index.html","822a5b1b8c6397173f0ad64145837a55"],["/tags/7分作品/page/3/index.html","2017d27b7135f8e523980f1eb97e1e15"],["/tags/7分作品/page/4/index.html","5b0c984b762f88fff29c659ebd4dff94"],["/tags/8分作品/index.html","d0cc0b72ea14bbc4e9ae723281350488"],["/tags/8分作品/page/2/index.html","352d716e26489098a3bd9821e1d33a45"],["/tags/8分作品/page/3/index.html","6cd13f39a4592e249d4af547c5fa3577"],["/tags/8分作品/page/4/index.html","3f09eb3fa1daab4c9a541974d625ca84"],["/tags/8分作品/page/5/index.html","1aece679d059ab53faa26cc7f1ac4d3e"],["/tags/9分作品/index.html","3540e86033a38ba1af550e3445b2806f"],["/tags/index.html","5817c6684d52e1ab7c56e80e57160393"],["/tags/アボガド６/index.html","ce9f56d287c0b4fbdae534fb7cc25561"],["/tags/三秋縋/index.html","481c8a7e49a1e9dbd9da5044e81c7621"],["/tags/二宮敦人/index.html","fcb057ce3d269b90d0ed7f7a24ad3cef"],["/tags/住野夜/index.html","6bfef3b0d23ec97f185ba2c5b8e233ca"],["/tags/佐野徹夜/index.html","f21fed67847217346fb6d6876381eb1b"],["/tags/動畫/index.html","9fe271e22d3e4a1466895984025e9464"],["/tags/動畫/page/2/index.html","ac040678ffca016bc664961330b5ac0d"],["/tags/動畫/page/3/index.html","bc62e89abefa78856cc581897f8f8739"],["/tags/啞鳴/index.html","310fd316817aa576a4a7fba89fe5a2e4"],["/tags/天澤夏月/index.html","3d8cb9643000bbee471c0a781bbf5572"],["/tags/學習/index.html","31bfc3aec8bc5874cca421314529875e"],["/tags/學習/page/2/index.html","7fdf0e6e5babc51ae0892ac053650283"],["/tags/宮崎駿/index.html","432c9cc6d841c468520e09b8ba1405f2"],["/tags/小說/index.html","1c4036f582d961aa4d809f66151c9805"],["/tags/小說/page/2/index.html","1de4d331a36cbceca87ac94d0a7f8d94"],["/tags/小說/page/3/index.html","3d12c653ef8c09493cd683078d02c6c4"],["/tags/小說/page/4/index.html","66956e122cfe5168eb410200261e516c"],["/tags/小說/page/5/index.html","4afad3e7b765d97c9b143a3c679b4c97"],["/tags/小說/page/6/index.html","6579db346ab5d39cec1dc0743261aa13"],["/tags/小說/page/7/index.html","cae10ecadf7a3c309e09744894431045"],["/tags/志茂文彥/index.html","0ac83a555913471b4b49541970b2e395"],["/tags/斜線堂有紀/index.html","cf77731110e4487ac9685fd1225a9c73"],["/tags/漫畫/index.html","9ba5cc40e753ead3f73a0878562920fd"],["/tags/葦舟ナツ/index.html","15356b2d8680efb2d7e8fa41084ab5cc"],["/tags/藤萬留/index.html","1fd03c78b1642de09ac78d0e2b9bd28d"],["/tags/電影/index.html","bf865617e193d6fce2a95727023e9ebd"],["/tags/電影/page/2/index.html","951a5e6428ab6474140730147a850120"]];
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
