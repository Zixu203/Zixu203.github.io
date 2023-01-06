/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","75c93b7524d145f421c65341db946a4b"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","0946feae738a995e1ed9183b82d82c3b"],["/2019/12/25/Review/無法計算的青春/index.html","e45a6dcda40724e88e1e5798c1baf742"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","cce0c097afd5beae0c5db2f8cd7d5260"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","3e9aafd3d11de4f72f70ecf82ae5b030"],["/2020/01/19/Review/下雨天，不上學/index.html","86da1c84a9412741e1f0b392e4e3cc5f"],["/2020/01/26/Review/三日間的幸福/index.html","16ef6828ec20a76fe05ef5f351e0aa0c"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","ab476132524b51a6e1b1da6e8ff2dd43"],["/2020/02/09/Review/青春期超感應/index.html","579d6937205ec86498abaed448e9bdf7"],["/2020/02/15/Review/又做了，相同的夢/index.html","8ff53ca4c127967ff18c762e52f4473e"],["/2020/02/22/Review/回憶當鋪/index.html","333d47080dc42a89a7d9809d416cb13c"],["/2020/03/22/Review/不適合自殺的季節/index.html","01589b109fd02e3d281916b1dad016ba"],["/2020/04/26/Review/我們都無法成為大人/index.html","9dbfcde0dc46dfccf732d2a3b2889f43"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","a7c31d6110208c51283f26ca1cb812f6"],["/2020/05/17/Review/人間失格/index.html","e4d9f1925094576f99621edba0596554"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","7fe897ab85aed1744534e936a4fd3853"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","076b32cff45bb09bdf4f91d8d0b68436"],["/2020/08/01/Review/銀河鐵道之夜/index.html","840ce89baa054d222e822fd79c56f4af"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","6fc44e72e1f453c27b59e74aff353632"],["/2020/08/16/Review/15歲的恐怖分子/index.html","2235a5457278788544ad4354ebdfa7c6"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","503646d03e84f909f31da7eb11a8397b"],["/2020/09/13/Review/羅生門/index.html","7e6c2aa508c622c25a45e3fa63da95d4"],["/2020/09/20/Review/闇夜的怪物/index.html","36cb4afe38a1f9275fe9bc80d6d51285"],["/2020/09/27/Review/14歲，明日的課表/index.html","9ab80e6e756abab8fe9ee1d71000f49e"],["/2020/10/04/Review/致十年後的你/index.html","38af624027e2dae935d715944aaeb3d2"],["/2020/11/08/Review/滅絕之園/index.html","48169e0625a406293232bca0eac10068"],["/2020/11/15/Review/將愛拒於門外/index.html","f929601970a65d4e10356d62892cf013"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","9298c2f85b730bc025e2abe4a9121db2"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","d07ac7148b24d86534273a5a2404d9c3"],["/2021/04/22/Review/道印/index.html","4f53c8582be687ef63e85f467b4d2513"],["/2021/05/03/Review/戀入膏肓/index.html","c9f73105163ab7020df224b124eefbef"],["/2021/05/10/Review/Dice/index.html","57da9662679fe80ef500021f4e88d209"],["/2021/05/15/Review/魔女之旅/index.html","54a4eee04662e4397c43da6a2a4b302f"],["/2021/05/28/Review/戀愛寄生蟲/index.html","af118a9bf73279298f6f5f34f6fa6bef"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","03848ecfb6951308b802f79f15f45758"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4b9d9b65db01de2a27687f8558d0f6a9"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","0c06f10e542bc7a636688c22638812df"],["/2021/06/05/Review/流浪的月/index.html","21aa1caa1ca8ca2f70593d339ff68641"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","42da8079aa8745f6d2aebd528885050d"],["/2021/06/13/Review/第一人稱單數/index.html","418ff6c2c5c0841544c747b2848f57ff"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","22627e6d1acc1bd8a348858c364fe8ec"],["/2021/06/16/Review/願你幸福/index.html","e2f741671033e1b378dd254f9c212467"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","b800cf7270c1a105e97fff85237c54b1"],["/2021/06/21/Review/神隱少女/index.html","828c591df0d8d6972678197458e70ec9"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","6e39a31bd8f9eb398c4683e75540cdac"],["/2021/06/23/Review/天空之城/index.html","0909a5168f01a4f20e3ecf70ea0c79de"],["/2021/06/24/Review/魔女宅急便/index.html","43743dcafd163115d43072669d108d24"],["/2021/06/25/Review/借物少女艾利緹/index.html","d9455f9085be6fe97081c34b6af6620a"],["/2021/06/26/Review/魔法公主/index.html","882b5a378e889232bf9a12e104c6e458"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","79709aba17853ed67979e46e3ea52ab4"],["/2021/07/04/Review/飛雪與劍/index.html","68d5f717c2533d24507ceea9ca415348"],["/2021/07/09/Review/地球防衛少年/index.html","bf41cc920c29304b864400290eab1bb7"],["/2021/07/12/Review/Angel Beats!/index.html","0e04b55f523f013830ebfec7e119091b"],["/2021/07/13/Review/Clannad/index.html","83712e6f5e5d2bebc66f01cdf82d9369"],["/2021/07/15/Review/AIR/index.html","d1d8651bba58c5e29ed8ead25dfbe0a4"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","801861fb7f9336a5f4f5b21b77847f0b"],["/2021/07/15/Review/螢火之森/index.html","0f87a6f1bdefa5b0066115e59038ae17"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","b585487e8956059c380dd029f155899d"],["/2021/07/17/Review/奇蛋物語/index.html","6abf5e911a9b41513ef722ef4cf0f6d0"],["/2021/07/18/Review/Vivy/index.html","a050413a527a142135a14bfc749fad69"],["/2021/07/18/Review/請妳消失吧/index.html","e16e4794d52d480b1b9d419de5171a36"],["/2021/07/19/Review/漣漪的夜晚/index.html","898b786462e4d24668750b3df57aaaf4"],["/2021/07/20/Review/月色真美/index.html","d3992d92cea8f20414f2e342c7178d6f"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","a50315fa8cd386abcabc1752fa17c561"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","f576d3e0d7f3dc3b102236e063b32a2c"],["/2021/07/22/Review/罪惡王冠/index.html","28491d899e957d28a30c389acc5c8d03"],["/2021/07/23/Review/弱角友崎同學/index.html","380b36391e07bc005eb74cceed3eb7b1"],["/2021/07/23/Review/惡之教程/index.html","900fcc6a2a3360bb90ad1dbb0790aa7d"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","110f382df6a88679e08e83addaa90ec5"],["/2021/07/25/Review/魔王勇者/index.html","481e562ab8154a1d284c5230f1f314ea"],["/2021/07/27/Review/一年A班的怪物/index.html","5d1e3c4a99d4e5db9d56825a1732eeb4"],["/2021/07/27/Review/奇巧計程車/index.html","2ea1f7b70200ff7556886beb8af94336"],["/2021/07/27/Review/專情的碧池學妹/index.html","f570bc06a2d835e53a075732e5324fc7"],["/2021/07/29/Review/只有我不存在的城市/index.html","f2027f7de55063845b48c5a98943e6bd"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","992bbd1c171a6b112a9720f4ed4a9ee8"],["/2021/07/30/Review/可塑性記憶/index.html","a28c7b7f11a567712a169d6bc04a079b"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","5c923a5e29b99d0690472a3bfa7f7692"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","9b9da0f1aa9e4aae8e0a033b804c95d7"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","834a4c12364b5feaecbe6a273096a95e"],["/2021/08/25/Review/清戀/index.html","74a2c20b6fa21232e752b15ebdbfde1a"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","7cd53b6da77aa29d69dd73e9554ecac0"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","9609ba0fe94d4008070350dea174b70d"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","754d7de2f12ceb83874f5944fd57f32c"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","d7b3d6162ed6541658b399de534c0c5d"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","3dbf6ee8d72a9c0a67e84fbf173a998c"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","cf2afad70d3d7aca0368e8543dcc5c75"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","26fe0ecfab5471e3e21044d6a3b49d77"],["/2021/10/16/Review/龍與雀斑公主/index.html","6972e1c12fbb88354f40ebd070cf003e"],["/2021/10/19/Review/孤狼不想開後宮/index.html","bcd2be4354519f205ac3ec4695179175"],["/2021/11/13/Review/徹夜之歌/index.html","3c7e4eeeb33fc0e4aca5019f7255955e"],["/2021/11/24/Review/武煉巔峰/index.html","d6c7296b13c94133efa4f5e00de6eaeb"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","563aa168f66fa6e5f84ffa63ffe7f5c2"],["/2022/01/28/Review/神醫凰后/index.html","9d0f6ae7060a89c886464740ae36a152"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","d4ca68651045c1ce2320353c08f1872c"],["/2022/02/13/Review/夏日幽靈/index.html","650129d3c7de0ff011c0882a082bbf4d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","46c6f6629e87479d661bddeba5434fed"],["/2022/02/26/Review/賽馬娘/index.html","c334e3fc4b5b023d224bd82c2f66bb18"],["/2022/02/27/Review/大欺詐師/index.html","9ed2bb968184a9b245fd650915999bd6"],["/2022/02/28/Review/前輩有夠煩/index.html","b1d4b066da625e887c0d1783751670ea"],["/2022/02/28/Review/碧藍之海/index.html","bceb814f69b26706f97e5cb6f424433e"],["/2022/03/05/Review/落第騎士英雄譚/index.html","3018a1b1c37817fa19b5bd2ee863186f"],["/2022/03/06/Review/Another/index.html","4e1655a58312f7e51013d374915cda5d"],["/2022/03/06/Review/入間同學入魔了/index.html","196ef53cdde999629324ae96205e2784"],["/2022/03/18/Review/再見宣言/index.html","3ce4c5f932b3706609de4cef1d30fa0e"],["/2022/03/23/Review/生若冬花的妳/index.html","a830f09c00957196d28c4ca57426f94a"],["/2022/03/25/Review/天之弱/index.html","54cc0e1103786596d60219cd9b54712e"],["/2022/03/31/Review/滅了天道之後轉生/index.html","ff8181ffecd04edb4901a3d517e15ee9"],["/2022/04/30/Review/泡泡/index.html","ad97e1ecca7d3dbe2265de8e6474cb73"],["/2022/05/04/Programming/Dynamic Programming/index.html","7a918f5aa82e2de9f911aeb7e08427e4"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","207c842990d18bfc53a34694de01c2e5"],["/2022/06/13/Review/偵探已經，死了/index.html","9c5a23d559272427ccc11dbe22e8fb94"],["/2022/06/14/Review/黑色子彈/index.html","42c0fc4c0c768358dee9d548175c7e7d"],["/2022/06/15/Review/黑白來看守所/index.html","5f207bd2ea0b4ee130fd871560979933"],["/2022/06/16/Review/虛構推理/index.html","d88f72ad7b5e818d0bf8eacc8ca30bdb"],["/2022/06/17/Review/戀愛與謊言/index.html","129e805d4714fa22e7257b2fbc2c8df3"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","891a8a212cfcd7b042ab789710bbe292"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","1078f1023082720f9e0ec959906fcb02"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","d58555476a69a35cf959bd4e8093157a"],["/2022/07/03/Review/Hello World/index.html","2b1263e237b7b9f3401ae7d0d4e73b43"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","193554ce5516ef01ca6a81bd3592e329"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","0ffc466b11fdbb13036291e263183093"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","3746fd808607f7be881968774cfed033"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c5efbfe2bb905925f21d9d72e178f156"],["/2022/07/16/Japanese/動詞分類/index.html","788762df37008ba28828047995731047"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","2d0793013b31b68c94e8b47fd7760974"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","2f620573c60d18820db545f90694e5e6"],["/2022/07/17/Japanese/音便/index.html","82e532273880eecc489a19d84c311e9e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","1492933d013c4a52409d810ccc118fc8"],["/2022/07/19/Japanese/助詞用法整理1/index.html","84b84153eb48478b9ca49f08a22ed307"],["/2022/07/26/Japanese/助詞用法整理2/index.html","594410613e33c15386631167eef87bf2"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","7bf0ad72c662d5df6a67e2f88a28963e"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","b0d5497f700a80e4149beb7a49aa51a4"],["/2022/07/30/Japanese/疑問詞/index.html","ca77ce0c31741e0c38895641a52862c3"],["/2022/07/31/Japanese/助詞用法整理3/index.html","03a6d9578155b6a09199e3969a5fda23"],["/2022/08/02/Japanese/副詞整理/index.html","42d61b0cd5c311ce9c4ca7c835b966e5"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","b967be4c2da535a81446d8c931bcf6e9"],["/2022/11/04/Programming/Data Structure/index.html","483f5a505595c281d251fbd123d1eec2"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","e749c17c90d88ff85feda3c924443201"],["/2022/11/22/Review/組長女兒與保姆/index.html","ceab9378b0106d0c8675a34ef59a7d6e"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","eb784048ea93e2b378cd34600a33b878"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","24b4175e72142ab86800392ab5b19a78"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","4a58f59128b6eedeef01c9357f0cf439"],["/2023/01/01/Review/あの夏が飽和する/index.html","cfe3cb6b532c8adf2ee93b39fd5e04c2"],["/2023/01/02/Review/孤獨搖滾/index.html","763c208a42197b6a43bbb43b67344029"],["/2023/01/03/Review/來自深淵/index.html","bedf0a3575d4ddd2339487e81a098d28"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","7540a03bdc09cf8e4fb74846079dc6e7"],["/2023/01/05/Review/處刑少女的生存之道/index.html","db75c670b05af47d1c0d1c95d93cbc63"],["/404.html","5b257e58e4e49c508378fdbaa813420d"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","5a9db1e25ccf15130138193075b968ab"],["/archives/2019/11/index.html","e37eee877a8123af3662716955f88f18"],["/archives/2019/12/index.html","03a265e88fc38597f8a73a7047533c11"],["/archives/2019/index.html","bbba5511a5322ff31ce0cd7cc149bd7d"],["/archives/2020/01/index.html","fe0ce96cf1160ab5db75e1811600d7d7"],["/archives/2020/02/index.html","5a68ff0b0b9b086254e1f5faae6fcbb9"],["/archives/2020/03/index.html","11a3832c5ea54df92acc1cdf4c8183e3"],["/archives/2020/04/index.html","0fef739489f13af32f507c671d2c015d"],["/archives/2020/05/index.html","f19f9538f43183c5597652bbcd970f34"],["/archives/2020/07/index.html","126ed3c6afced56d7ee8ee93450e1e68"],["/archives/2020/08/index.html","5d3d59c71b36e3ff50275db849755e02"],["/archives/2020/09/index.html","d91bc02562ca82a05832d5f6772ba6ae"],["/archives/2020/10/index.html","41bafcd18013d08e847ce50ce3a8b184"],["/archives/2020/11/index.html","118a4964601f76f07d04228d78a61d9b"],["/archives/2020/12/index.html","52666253fe1f524043cf301b5dcb53f4"],["/archives/2020/index.html","3a6b3cb066e3bdc687e08a538c5b6b44"],["/archives/2020/page/2/index.html","d720e1f09e6ab957eea66aa415108f27"],["/archives/2020/page/3/index.html","fb8d18f0342bd68b4faa9a13da49269a"],["/archives/2021/04/index.html","67fd0febb34fb5cfcd0be9ed8a091a58"],["/archives/2021/05/index.html","4d5a7ee3295c6159a8389b45b83e6bc3"],["/archives/2021/06/index.html","88cedd4dab696ed9749433c0c8b81764"],["/archives/2021/06/page/2/index.html","59559b727941349f58ff420c72117c51"],["/archives/2021/07/index.html","1aa79056b09f941f08137a9fbb7db2fb"],["/archives/2021/07/page/2/index.html","21107e37fe5c4507e8519b6acd745e54"],["/archives/2021/07/page/3/index.html","5c55bbc7cd4903f4f57ba4135c7ab0f4"],["/archives/2021/08/index.html","f7f5158244f4c97e37fa328c0c83e1c1"],["/archives/2021/09/index.html","ce9b3e16af6e62c9b231410821cda0dc"],["/archives/2021/10/index.html","9ee024bd463e6ae76b3eae4148b2cda9"],["/archives/2021/11/index.html","975c1d80888f2f9aa45e25a287778962"],["/archives/2021/12/index.html","e42691c17271d303c293d74bbd11071f"],["/archives/2021/index.html","8a088ccd00d99afc3bde6dc40475ebfe"],["/archives/2021/page/2/index.html","315117ef6978cf255b56df2e2d406026"],["/archives/2021/page/3/index.html","76414df7cd1dcf7b1f9dd9c94119c609"],["/archives/2021/page/4/index.html","392aa752630306b692c9d4fc8a46ae73"],["/archives/2021/page/5/index.html","7852aeb1d101fa9558c6b9aca5c80af6"],["/archives/2021/page/6/index.html","3015dd80f8073b78a234308f4db72adf"],["/archives/2021/page/7/index.html","b7e962e1dd600adaf1e2c9ea0130b081"],["/archives/2022/01/index.html","f6caad3f22852a7917a926a30a90af17"],["/archives/2022/02/index.html","1c1d58fef2f51fa310d648364507a3a6"],["/archives/2022/03/index.html","bc1b47da84e3f05bbe07cdb6f999b244"],["/archives/2022/04/index.html","ee3bfbc7dfca33afaf92caecefe1c674"],["/archives/2022/05/index.html","0fc375e49566d0a209bccab7e4032926"],["/archives/2022/06/index.html","455c9ed7f6ecb97cc447355f2552f5e8"],["/archives/2022/07/index.html","bc7af807be2e4d24e8b09c3c8eb302c6"],["/archives/2022/07/page/2/index.html","132e2e7c71a1dd3a72dc6e849e941e27"],["/archives/2022/08/index.html","2613a4a86a2cd3d7c4b9afdf6fd4f577"],["/archives/2022/11/index.html","3248245161f2bd32d57e83ac632521c5"],["/archives/2022/12/index.html","dab0f433e4faa10acb4506b8f5445676"],["/archives/2022/index.html","b4b84522dddf141219352d5964e84736"],["/archives/2022/page/2/index.html","affba79a99c80b1f2e657e093107fea0"],["/archives/2022/page/3/index.html","e94a906cbb9c0c700a64e8ca5ed80b56"],["/archives/2022/page/4/index.html","13f0b189c23e1d374d2eb4f951baa07c"],["/archives/2022/page/5/index.html","841b1b093c95d433d4a674692dc7285b"],["/archives/2023/01/index.html","393eaf79559083eb5f661635bd3ab9b3"],["/archives/2023/index.html","317756dcfe344c137c00bbb63bde276c"],["/archives/index.html","78fa5f02c4fa2d4181b6ea878599b2d0"],["/archives/page/10/index.html","44a3401ee3200b18c73cc68045b72ee2"],["/archives/page/11/index.html","e6ef2efbe597c71f8021fbe939c115dd"],["/archives/page/12/index.html","12ae5ce069e3d52db40f37b1a467ba3c"],["/archives/page/13/index.html","dddada959fcff522c4d86a88cb5cd5a9"],["/archives/page/14/index.html","8920405ac7e925a670801ef596f0a989"],["/archives/page/15/index.html","3c25b2502c8641ce7078fc5b877f8ba5"],["/archives/page/2/index.html","45bc3846a42d05272eadb26c736ff4e9"],["/archives/page/3/index.html","ec122b757a1a7ebeb7799db0f8793e31"],["/archives/page/4/index.html","0ecba939a3189e9a320c21d6e1fd1488"],["/archives/page/5/index.html","158cd59162a1bb94c04a38eb82e3bf30"],["/archives/page/6/index.html","cb84d30ee7e3bf761b51d3433cbe1592"],["/archives/page/7/index.html","9bce00350e396ec56a93f9bba19d93ef"],["/archives/page/8/index.html","1253e87443f1b261a45a0197037d5f71"],["/archives/page/9/index.html","4ee58c14cfe3853d4ae72e3d4ede196f"],["/categories/Programming/index.html","b3e0da6e5dc1948ad612714f237a5759"],["/categories/Review/index.html","362ff92845e455e3303f0a46857c2d56"],["/categories/Review/page/10/index.html","887dde121f5c683fcba369b5a2ebaf77"],["/categories/Review/page/11/index.html","2eb7f6a9cecfce06ea5e353f0cf8da02"],["/categories/Review/page/12/index.html","65e66972be9dcf93f632f156ab898184"],["/categories/Review/page/13/index.html","d5ff618b776377690589715d6f7539e5"],["/categories/Review/page/2/index.html","f41947d4d2bbd4c4e9d9ff4f96029efe"],["/categories/Review/page/3/index.html","4703e0821767fe9746e6c8743908e099"],["/categories/Review/page/4/index.html","5899993ffff4049afcb6f701c5321520"],["/categories/Review/page/5/index.html","bf8ec7687294539e320b2abeee62511a"],["/categories/Review/page/6/index.html","051c93e4cafa683691c46cea9741815d"],["/categories/Review/page/7/index.html","70eec363fa0eadd1177db85dd7a07c0c"],["/categories/Review/page/8/index.html","597503c4b0251ff5f4c63e6cc95b6a36"],["/categories/Review/page/9/index.html","707e817de95d7114f926f1f4cf0b65b7"],["/categories/index.html","78294131f9a4b41aac6b25ba07af6c0b"],["/categories/日本語/index.html","4c44008db9c73d44bb3df39c58aa5688"],["/categories/日本語/page/2/index.html","2eb46cfe0286185199002b97795471e1"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b682feb0f90dbe989b3f1fa2a6e1f36c"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0d3c42d1452d522377b955a714e21749"],["/page/10/index.html","1ca4d4aaa49a8b489fa4364aa276d8f2"],["/page/11/index.html","28ccc2d14041528debc54ca973565b20"],["/page/12/index.html","9672428d83f92aefe1cf99df56c02220"],["/page/13/index.html","887829fd2b63392a05b6169858bb7b56"],["/page/14/index.html","9e82a6ac2c617a36119de2015d812dd6"],["/page/15/index.html","8fcf5a18079ac1cf9c3244973475230e"],["/page/2/index.html","7725006da7dd137ab81c978859123c94"],["/page/3/index.html","98958aac85ff2149f5fcb980ac85d2eb"],["/page/4/index.html","0cba46e99c3fd0271b2709f235206f57"],["/page/5/index.html","9378eec2b7884b9bfbf2698165e475a0"],["/page/6/index.html","5c256cd83f4745f2b3a5711c6768c1ce"],["/page/7/index.html","9ad2e7e5a347bbd7a1456e5d7759eee2"],["/page/8/index.html","e7fe1ad332539fe221949467aab6297f"],["/page/9/index.html","76fbb0b64526880051eeae10fb01a4b1"],["/sw-register.js","716042afc7ab354e45f631e144113547"],["/tags/10分作品/index.html","41dfc10c508a8c78c1aa7fcc2b459295"],["/tags/3分作品/index.html","718943447384d875d47f5c6095f7a2c4"],["/tags/4分作品/index.html","a742693687b2e96c8e6d7dc32f4f91d0"],["/tags/5分作品/index.html","c88c065748c6ab3661db34ccb67e255b"],["/tags/6分作品/index.html","2f43a6e3c26ed26a400892731d188dae"],["/tags/6分作品/page/2/index.html","6d41f9487f14ef6d1b658b774ef5899c"],["/tags/6分作品/page/3/index.html","e2297a20076e64a34fb2b2f4abc5a28f"],["/tags/7分作品/index.html","2a3399c2970aeacdfcd039054e0a7024"],["/tags/7分作品/page/2/index.html","9c7afbfc0fa19177f8eef193cf59ea17"],["/tags/7分作品/page/3/index.html","71afe25e59b4bc5186535adeb02814ac"],["/tags/7分作品/page/4/index.html","8c2defe15eaa25272fe3a314c5230cb6"],["/tags/8分作品/index.html","d891846d05e84e5eefa8cfb8ad702aeb"],["/tags/8分作品/page/2/index.html","45bb3cd9c193422e1a1b386c52880e8b"],["/tags/8分作品/page/3/index.html","55ed228901f9dc9a37328b05ee2ea61f"],["/tags/8分作品/page/4/index.html","ec1939fa2ec7401e50ab84b13ffea4be"],["/tags/8分作品/page/5/index.html","a0f692ab0c7fe5f5e4b6a62744d04e1d"],["/tags/9分作品/index.html","1d154e9319d20184f1d70e2aea277fdf"],["/tags/N5難度/index.html","d174fb0a12845d831c4917cd11841f82"],["/tags/N5難度/page/2/index.html","c1b3ae7601ecd29a19424e595ed9f5ef"],["/tags/index.html","f980524ee7dbad9c7c87bc09501e703f"],["/tags/アボガド６/index.html","e22b352f87c902a43d93bba2d223d789"],["/tags/三秋縋/index.html","f5ad1093543634985a85a26a665f2997"],["/tags/中國武俠/index.html","928b889a6fe76a7ff604b19d48b3bbc3"],["/tags/中國言情/index.html","b592ee3534c352cd29c7258da52f91f5"],["/tags/二宮敦人/index.html","b10d96dbc18be0bf575ee2f85cf65c14"],["/tags/人性/index.html","7c69d95c3cb57d687880e7e5209dd393"],["/tags/人際/index.html","2706dcc8eb3d3ac222caa7066ac2ee8b"],["/tags/住野夜/index.html","1bd21be48062feac23c1788b04b5b0b3"],["/tags/佐野徹夜/index.html","999d16167b7712eaa07121cdbda6bf72"],["/tags/努力/index.html","fb7c3ce0c493739b6a2b5f526c5d79a8"],["/tags/動畫/index.html","4ac5aa8242523611d8cc9cf8f3c3209a"],["/tags/動畫/page/2/index.html","eea4808c2fdadce40f075c84ab73c685"],["/tags/動畫/page/3/index.html","0e6d7d07fa7305a9619d6f66ced97d56"],["/tags/動畫/page/4/index.html","c32135f0456bd224e2bc670ba255dfb7"],["/tags/原諒/index.html","64241ae3eaa3c630d56f0db1ad78aa43"],["/tags/反烏托邦/index.html","81c01d585d1e8f72da5495ac7155cbad"],["/tags/啞鳴/index.html","a9dc7423c3f0c08d97231e8735871513"],["/tags/喜劇/index.html","7ae118a74d35e4624b6c59bd5ff7064e"],["/tags/夢想/index.html","c69431aa1a38914688fce4302d24ecd4"],["/tags/天澤夏月/index.html","ba700f23197edd09a17bda7021a17ca5"],["/tags/奇幻/index.html","df492facc2919df27d2fe1560f1bad11"],["/tags/學習/index.html","2eeae130cc9ad6c7804ecfa06d621a78"],["/tags/學習/page/2/index.html","74e79a034d49aad0bd6a4dcdcc1551b0"],["/tags/宮崎駿/index.html","159bd50ead793873fbd5dfc94a35414a"],["/tags/小說/index.html","0e2ce1a5ad5702e659c9d2c98e397dc1"],["/tags/小說/page/2/index.html","c2170840697bbcff6fb68a2063d1d356"],["/tags/小說/page/3/index.html","9164c9397c6d768071a9a140312e9a11"],["/tags/小說/page/4/index.html","4b94fe9e446d68d52e017bd9742e2d2f"],["/tags/小說/page/5/index.html","07807926cc1b642a1c567d58503b5e6c"],["/tags/小說/page/6/index.html","c159899f2a43f6ce74a863afcc4e2748"],["/tags/小說/page/7/index.html","a26911caafc572e851f83a33979f8c10"],["/tags/平淡生活/index.html","2682516a67e379a0b6deec51429f6680"],["/tags/幸福/index.html","a64c0abe64a2ae7577fedf93b7fbc2a4"],["/tags/志茂文彥/index.html","4a25483f165f84c721399d66844192e3"],["/tags/愛情/index.html","1bcd2cad65165e48c3854b3ade8fec6d"],["/tags/愛情/page/2/index.html","1c005cb0a96ac32213c7c96093cc49d0"],["/tags/愛情/page/3/index.html","64d032697a3599e7aade8dc3fd72026f"],["/tags/感動/index.html","0ce92bf827744313a0665e317ca565cc"],["/tags/懸疑/index.html","5b977dca7737cd993cf33bb76174d4a1"],["/tags/懸疑科幻/index.html","2b97a7782d0dd2c5dfea960642e66fe5"],["/tags/戀愛/index.html","ea00bf9ce6dc21ebd697d0d516529ced"],["/tags/成長/index.html","f0a52b590ac8716b371785212c38146c"],["/tags/成長/page/2/index.html","cbde705e0449d45768ed3a897216fc86"],["/tags/戰爭/index.html","2af1e1379da178f402c62c70bc22ba28"],["/tags/推理/index.html","8ea91f615b8f610fc2612745b5f319e9"],["/tags/搞笑/index.html","7e0a36d451ae1d22fa9c7afc8dee9f43"],["/tags/救贖/index.html","099029fb3b441f586086c01232f05cae"],["/tags/斜線堂有紀/index.html","4e40fb871bef89ecc73197399bb788d6"],["/tags/日常/index.html","8ec16e291c416959dfa5640de31212cc"],["/tags/末日/index.html","2e33b6bccb25dad2a6896a9bf23c947d"],["/tags/校園/index.html","8f0c23c93c860adcdd46f4089fbff0b5"],["/tags/武俠/index.html","20bcad4a84d6e9cb05ddc2fee506c821"],["/tags/武俠言情/index.html","99627dd9577dd42dcb54252e718df9d6"],["/tags/漫畫/index.html","7101a35849b074d9b95a68fbd8702c0c"],["/tags/生命/index.html","1054c5e778cc0354ea6253314bd8542a"],["/tags/生命/page/2/index.html","c7d58e3d099f62eb7541b3cb7b1ec7d7"],["/tags/短篇/index.html","4723ae1f95d481ede2b51155c1cdcc30"],["/tags/社會/index.html","ef01cb2a66a8b7759acbbedfe97ced1d"],["/tags/科幻/index.html","4c0fc0ba3cdcea018feb8f51699b0a7d"],["/tags/童話/index.html","cd4b3afbfdf993c31a7f7c270c8c5db0"],["/tags/競爭/index.html","bf0b16716798ca628858d370bc6f9423"],["/tags/自我/index.html","624f92b066c07bbc91c74eeb1d03e686"],["/tags/自我認知/index.html","f9e5d8658e2150aa0c91e9730410a08d"],["/tags/葦舟ナツ/index.html","4637c1f5e1bed3ff2a9e28179a4cea93"],["/tags/藤萬留/index.html","056324c5f81dc011b7b813adce22fcc7"],["/tags/親情/index.html","a76790b27376556872bf69db53f1b55b"],["/tags/雜項/index.html","45e7971e37a701bf8b23a5175c1a2f91"],["/tags/電影/index.html","d32117dacde23cca8ae01456935a10fc"],["/tags/電影/page/2/index.html","b7c45a56e58cdf6d1edac10bc4564ee9"],["/tags/霸凌/index.html","1e678d951a70f6afd96d4c0f7d74a7bb"],["/tags/青春/index.html","44eae5348b658ad791f1a32fba2b9cec"]];
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
