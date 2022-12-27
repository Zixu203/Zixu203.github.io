/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","6e955c24a3c3c0fb17118b9c01d2df73"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","87bb4cd8c24d6dddfab4425c6b97db72"],["/2019/12/25/Review/無法計算的青春/index.html","9d112318cfb772aea59732ba27b4babd"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","7d3f150e746663423299dad4ca714e24"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","91a076bed9e0aff580018a44a7da7a1e"],["/2020/01/19/Review/下雨天，不上學/index.html","03a74cbdf2f620b12bd6bed640668d81"],["/2020/01/26/Review/三日間的幸福/index.html","454f04b841a010b898065e04f0ba2340"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","045318c1c6e43dae2f50b9d20de41867"],["/2020/02/09/Review/青春期超感應/index.html","e4594cc51c19c9326fa88fd2ab8fabda"],["/2020/02/15/Review/又做了，相同的夢/index.html","bc72077e28f5c1ea60b2772b35b0b1db"],["/2020/02/22/Review/回憶當鋪/index.html","056393279d27a8f2b5045ef9f3d38fb3"],["/2020/03/22/Review/不適合自殺的季節/index.html","59f33c0edaaa35f660882a572c9ce640"],["/2020/04/26/Review/我們都無法成為大人/index.html","dbf344a4a6c1b1afbb469e4018ae986e"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","f9b4c246b898230fd1a5e610e050aa89"],["/2020/05/17/Review/人間失格/index.html","44fd0e3318072f0766ecb458d0a8f359"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","753d8e78f500c496087591cabf440dc8"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","79623c05f77b6e94cd784c02b7957a27"],["/2020/08/01/Review/銀河鐵道之夜/index.html","38054cd73e5a0a45d51f7e05cfcafee4"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","5a5a858f96ac90f2d08d5e47d7f4f61f"],["/2020/08/16/Review/15歲的恐怖分子/index.html","38c6210ac0d84d8b9741f938024de170"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","f1ae4bacfc31d28200919a7a548f9602"],["/2020/09/13/Review/羅生門/index.html","cd959365fe870e8b5f49b204cca0cf6d"],["/2020/09/20/Review/闇夜的怪物/index.html","ef577bed8c617947acb4a62e2ee86c6c"],["/2020/09/27/Review/14歲，明日的課表/index.html","673831eac09f15cf5960ebeb0694b05a"],["/2020/10/04/Review/致十年後的你/index.html","86dc12c12dbc55aad4d657e90c4118a1"],["/2020/11/08/Review/滅絕之園/index.html","56efd3064cebf49cec6fbc13bc4c3bc5"],["/2020/11/15/Review/將愛拒於門外/index.html","e902ee474771c464db9400fbea0cb21b"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","9d9e4db317bcc34a2db3a88f3e2368d2"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","11f81cfce156602e16d3a2c832d336f5"],["/2021/04/22/Review/道印/index.html","b58f7fda2d291876ef1e301c1adcfba1"],["/2021/05/03/Review/戀入膏肓/index.html","16f3bb8dbcbeca34ac9721d6f91fc422"],["/2021/05/10/Review/Dice/index.html","94800df4af7be73eeeaba8fa76aae971"],["/2021/05/15/Review/魔女之旅/index.html","ed5e4e2b127dc2a8915e5bc0f3518f58"],["/2021/05/28/Review/戀愛寄生蟲/index.html","f359a76a5ac2382e22120b4daac5e5df"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","169096c169abb7c36b9a6b0c87c4a8e7"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","7d04d2200e1872b3da5ce38bcda75434"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","15a7c396219c82645c48fffbdc53fece"],["/2021/06/05/Review/流浪的月/index.html","1c5713b7ad103e32145c4c613e4f019c"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","cad400f673adca078455fa397c9f8e06"],["/2021/06/13/Review/第一人稱單數/index.html","26242d02b0d3e63b4b3bcbe49438c8ea"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","5f7316394ea1774514f132474a3f8ab9"],["/2021/06/16/Review/願你幸福/index.html","7e855c48baf5656dfe2e3f9fc2e002e0"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","3bcbc3f4d5ea2f8fcd1aa8fac11ffb07"],["/2021/06/21/Review/神隱少女/index.html","8c9772adf9fbc1e273007ef211d57ca0"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","c89a7977292dfe394f252a0f77b6ac76"],["/2021/06/23/Review/天空之城/index.html","357360720899c634cf94b6dd63424f9c"],["/2021/06/24/Review/魔女宅急便/index.html","7d5c095c5c77ab503dbdb82f0514c5c1"],["/2021/06/25/Review/借物少女艾利緹/index.html","39b4af94839dab0fca41bb4106ae2c79"],["/2021/06/26/Review/魔法公主/index.html","ba742ca00b0bfdb30840f8da8e64d2ce"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","4003efe07809b3243229a710280d4955"],["/2021/07/04/Review/飛雪與劍/index.html","6b25feffd82a079113057dd46bbce83e"],["/2021/07/09/Review/地球防衛少年/index.html","2b4c419f778a5e2437656bd2ea6e151d"],["/2021/07/12/Review/Angel Beats!/index.html","1dce553f6477f2c3e0dc16a9b68431ca"],["/2021/07/13/Review/Clannad/index.html","28ac74a02345bf699b96caf786c52676"],["/2021/07/15/Review/AIR/index.html","d63d76489e542e3023d1bb776830d2c8"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","c77a5b05e2d2ad2a8fd68d63650f736a"],["/2021/07/15/Review/螢火之森/index.html","82604f58aefe13ef0ec31676c6cda107"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","d78288283b031cc4cb742a983fda1272"],["/2021/07/17/Review/奇蛋物語/index.html","80fa3a90256fd5fdd5fe7c143d8aa0ef"],["/2021/07/18/Review/Vivy/index.html","9c66ab1600d9a967836abc50b6a500dc"],["/2021/07/18/Review/請妳消失吧/index.html","ccfac8a001759b66bbfe720a8bdb3c0d"],["/2021/07/19/Review/漣漪的夜晚/index.html","42b3dcea525310c9057eaa3653993986"],["/2021/07/20/Review/月色真美/index.html","61d67058c3220b41216a58971c8f6c97"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","bbe3f278db87f5ffcc8300b8c9a8d158"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","578dbd87582f4f8379c95a39660cecba"],["/2021/07/22/Review/罪惡王冠/index.html","e405df5a2a4e27281e1974d335783a20"],["/2021/07/23/Review/弱角友崎同學/index.html","4134cdcafb1b5d204759d180bafe27eb"],["/2021/07/23/Review/惡之教程/index.html","f128f292c84e47540d6c00a92ef68894"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","8e2af83d9236fe17a70dc54a261208f6"],["/2021/07/25/Review/魔王勇者/index.html","c47df0a43d68a91a7ee32494ed478e86"],["/2021/07/27/Review/一年A班的怪物/index.html","8e2248194d39f81b4197cab141761bbd"],["/2021/07/27/Review/奇巧計程車/index.html","72c5912131e8a49ce227466b335a8ffb"],["/2021/07/27/Review/專情的碧池學妹/index.html","4d19c05ba53cff132b8d097acfd46c64"],["/2021/07/29/Review/只有我不存在的城市/index.html","08527cfbc15501073cd36c716cb28f15"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","e2174caa3532c3fc0c877c9d0e53a6f3"],["/2021/07/30/Review/可塑性記憶/index.html","a88644e06068b6d4797b35f3b7c37c8a"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","df92757780199dcb89bcd2feae228039"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","ef90aa187fb3083ea508f021b07565b2"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","bc014a85c3a21727506d7074d33d17e4"],["/2021/08/25/Review/清戀/index.html","4e32b5c20debf7767a09b75186a71ee1"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","abdca4f51f7e204ae315a318813fb052"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","527b427fe525a9b6f72b48c46afa4265"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ce919a0e10c9135cdbda8fbc086ac8f5"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","3eb37c8e58618ff0430efdb4065d8f19"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","98b5aa8bd004fe672488add867ee5dc8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","c1105383953d7919973c6300b32a41f0"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","4439f4939b236818c4b8e89b03e74dcd"],["/2021/10/16/Review/龍與雀斑公主/index.html","373007c5752280fa490d6e77d105aa82"],["/2021/10/19/Review/孤狼不想開後宮/index.html","7ce377b4c15ab045aed197155e5fab37"],["/2021/11/13/Review/徹夜之歌/index.html","0c4f35b088716dc7830a26603bee1f20"],["/2021/11/24/Review/武煉巔峰/index.html","163693609d6101ea8395c47629f15d8c"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","38f507b1197c6edb924bd87d047d3c96"],["/2022/01/28/Review/神醫凰后/index.html","348262921a770cc1bf3fc4b885eea688"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","e856c72b7f1bbcc090dec0c71bb60d04"],["/2022/02/13/Review/夏日幽靈/index.html","cb9898bf83f08b7190ca7bd8178fc039"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","96d03ad6511a1b2bd351fd6d3e8eb99d"],["/2022/02/26/Review/賽馬娘/index.html","549856b183de9719602933dc1d968844"],["/2022/02/27/Review/大欺詐師/index.html","6cd5d7c0ae7f986a226fd7009ff77766"],["/2022/02/28/Review/前輩有夠煩/index.html","78be74cd71b2fc9b32f2202b05b822ba"],["/2022/02/28/Review/碧藍之海/index.html","8b2865071f3c6b7592e05ceaae369bcf"],["/2022/03/05/Review/落第騎士英雄譚/index.html","6affb7d67b22c11ac29c9ceadb8db965"],["/2022/03/06/Review/Another/index.html","c4ab561aae34cb3601565d23f41decee"],["/2022/03/06/Review/入間同學入魔了/index.html","59363c6c9c92e6815fabf4a26d5f9cf0"],["/2022/03/18/Review/再見宣言/index.html","0fd29a95b7e7840713d69907f8a110de"],["/2022/03/23/Review/生若冬花的妳/index.html","3bd251976a51dafaa4b418aa2dd9da18"],["/2022/03/25/Review/天之弱/index.html","2c5cc1987f457e662f692261a5014719"],["/2022/03/31/Review/滅了天道之後轉生/index.html","5524057da552c302fee68771b0c370cc"],["/2022/04/30/Review/泡泡/index.html","d7f3df19cb8e9cb44545673046d96f8c"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","2d548886f1e49a6fdc07cf8ff79b919f"],["/2022/06/13/Review/偵探已經，死了/index.html","f596aa2cb3f5b3d0288f6df78141e35f"],["/2022/06/14/Review/黑色子彈/index.html","0caaca30cecffe4e832e430a4afe4096"],["/2022/06/15/Review/黑白來看守所/index.html","6d75c7db8aac664d899fb04b2b0bf60f"],["/2022/06/16/Review/虛構推理/index.html","583df6b0225b1215969f18604bcfae62"],["/2022/06/17/Review/戀愛與謊言/index.html","b90e679700ff7c140f07542e5ccf49f8"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","75d3424f4e00083cd780fb4028b3e542"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","9de3ebecca9ae7eebd3a6e55f9d226b1"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","2993b4d6224c3b455fe647b10cc0dcf4"],["/2022/07/03/Review/Hello World/index.html","8dceae6c4f9082732665f5198bb30b03"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","b93c0859fc3d9970e874e0b11ae397df"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","b6427b21570ba4772b7a0b421ec3e6fe"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","d36a4e007a54afb84dded7415704a42f"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","3bee5187c365d0d4892fe945beaff902"],["/2022/07/16/Japanese/動詞分類/index.html","bae4e7d8be8cb321d41299f1a69f56cd"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","7a6b758506b79e4397fb0b9022f23235"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","2aa0ed5aefdfb516557f4208a0b57532"],["/2022/07/17/Japanese/音便/index.html","05cd5612ee809b70e75614b126fba5b6"],["/2022/07/18/Japanese/動詞 時態變化/index.html","9dae07fc6e0b454fe4ba4dbe3510c859"],["/2022/07/19/Japanese/助詞用法整理1/index.html","f5f701238cc2d3c46f9d2ec77422210f"],["/2022/07/26/Japanese/助詞用法整理2/index.html","687d4ad9bb0fc3d6393c6e973ceb594b"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","54e54e2c533c868ba44e831ad8ba95f2"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","07c439594fdfcb1df46c72e33fe252ce"],["/2022/07/30/Japanese/疑問詞/index.html","34b1769d90af8b9781219a9b659bada7"],["/2022/07/31/Japanese/助詞用法整理3/index.html","efe26894cdea44b03d65fbe443e7bd9e"],["/2022/08/02/Japanese/副詞整理/index.html","6bb15dab19d250bd85d3f8ea6ab81113"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","556d62f5734b4f4ab1831a99ebe318c5"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","6d07801d1adb1b843eeb71167d3c6d01"],["/2022/11/22/Review/組長女兒與保姆/index.html","87db380ef0bb6b9b0e5bc7c2fa1bdf9a"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","b914716a97aad33de09f0520bd430d02"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","ca7b98304be9c3279ff38d9317fbcffd"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","d85c6ef8a07a4ba0113bff48f92cd7d3"],["/404.html","0a76f1bcc5429fde2be68640186a9d35"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","e439b0d60514676637d2d9958d19e81b"],["/archives/2019/11/index.html","ebac06b7329274d6ebcc3644228c5795"],["/archives/2019/12/index.html","0a8e5ef64d51fc35d11c228fdda53a44"],["/archives/2019/index.html","ddfcb52af1f500438c2da20a327b21ef"],["/archives/2020/01/index.html","cff08928adb3da415e075327715ed9a6"],["/archives/2020/02/index.html","defb04f37192383b45e19ec525b7c90f"],["/archives/2020/03/index.html","275cc80869ff0c00e8eb6a495391c442"],["/archives/2020/04/index.html","dd24adca30fc05f07f9cb332ae6e406e"],["/archives/2020/05/index.html","d90bd6c384ff5e7e80051dfe47b2c352"],["/archives/2020/07/index.html","c875f2ea1c7bf6c2b53eadea1ffa3f29"],["/archives/2020/08/index.html","6c2ea96cf355ee312bd0c4f3b3cb1537"],["/archives/2020/09/index.html","e6d5d1a2e4a8e21df0a9ff83489c35fe"],["/archives/2020/10/index.html","f1210e0417ffea53e0c5d96390d425b1"],["/archives/2020/11/index.html","209bb86bf2a08aae2b390f9c759bb2e9"],["/archives/2020/12/index.html","876f8ae4f195dc6cf96e465d0d5e9136"],["/archives/2020/index.html","c93846f6fa268da33fa5acad935dc985"],["/archives/2020/page/2/index.html","84156975dd2db1adb5748ec08828b086"],["/archives/2020/page/3/index.html","2cb43a033b82b88816d7de589c2c7746"],["/archives/2021/04/index.html","e738976f19904df909b85f759c9d21bb"],["/archives/2021/05/index.html","708b65df850648f1191980fb57ec388d"],["/archives/2021/06/index.html","21fbcc3a48e6ca079c984a7c84505fbb"],["/archives/2021/06/page/2/index.html","14fb0c40a73cc01936d53ec5cf8d7617"],["/archives/2021/07/index.html","4b1737aaeafa57a01d35f8a8c7ff6d57"],["/archives/2021/07/page/2/index.html","5bef491d0dc340d56ec60225984e1cf1"],["/archives/2021/07/page/3/index.html","020897af94653d0f01826d49e35ce182"],["/archives/2021/08/index.html","4657310f04121d15cef8d2bfec638a8f"],["/archives/2021/09/index.html","5cf36b2423f0b57542ce9124f602a630"],["/archives/2021/10/index.html","f33457a9a6868a81a76cc9e3bf330b54"],["/archives/2021/11/index.html","633f740bc12e12e7c6d59df36b78a7a9"],["/archives/2021/12/index.html","661ce346be96eab75b5e4a58df2b1130"],["/archives/2021/index.html","2010d41df85d997aaae4c995f7c17e88"],["/archives/2021/page/2/index.html","34c2c8258a400e4e1a3ab4eedc4ef410"],["/archives/2021/page/3/index.html","766c9d8f61be7905d15290c176a5b09e"],["/archives/2021/page/4/index.html","735e3091026e01349d35577f2f80c523"],["/archives/2021/page/5/index.html","ca77d180764ad255081482f5c5634b18"],["/archives/2021/page/6/index.html","2ca78950a100a5a40aabe085957bedad"],["/archives/2021/page/7/index.html","676d8679f5d098f124df3dc514598099"],["/archives/2022/01/index.html","945e46328c5657e501e2157f41a6bed0"],["/archives/2022/02/index.html","d3be11455130af81c8b95c8248fb9851"],["/archives/2022/03/index.html","7974fe0eb48d8735774617effe6ad04a"],["/archives/2022/04/index.html","6bb4013180f736593c7a6be5b2de8d19"],["/archives/2022/05/index.html","f00f038438cdfa2db6a5eb8eef6afaed"],["/archives/2022/06/index.html","c0f0bb87d4717dcf646719274800a598"],["/archives/2022/07/index.html","9dac227eafafae7b9ad94ff2d1c41f77"],["/archives/2022/07/page/2/index.html","46e789719c7a2169020f668e0e3ddc94"],["/archives/2022/08/index.html","bbce3bde422ea46da413011e8249bd23"],["/archives/2022/11/index.html","e8ae46b1e8da8bcada740713b40c87ac"],["/archives/2022/12/index.html","8130f8e8dde8f5830cd8ff93190341b8"],["/archives/2022/index.html","531ec17fa7696506b351f27ff8d45129"],["/archives/2022/page/2/index.html","7154b59e5da48117ed88aea7ddc18b06"],["/archives/2022/page/3/index.html","a83393c21897ff41ebf946f4abb7f24f"],["/archives/2022/page/4/index.html","b53e79494427c677625946c2964fa1c4"],["/archives/2022/page/5/index.html","7eaaee5d2530100eb60e8911c890dd81"],["/archives/index.html","e0c306e24f891069d70d8a5cf5224e62"],["/archives/page/10/index.html","ff3ead556552ca04b949ca248bab5552"],["/archives/page/11/index.html","a011fdacce1b969b054c350b1ea45556"],["/archives/page/12/index.html","86a780c0a521c110dd81a55cb6f2a5b5"],["/archives/page/13/index.html","d19a44ff8ea54681cb55a597c2cda95b"],["/archives/page/14/index.html","b69ea2f88c15c835834af4601a5802ae"],["/archives/page/15/index.html","1129aaed83aaeb668fdb5e04e0130f79"],["/archives/page/2/index.html","5e649eb99089969146643f4b78ab5e24"],["/archives/page/3/index.html","70218e780335e93a7308db5b8b9bdbfd"],["/archives/page/4/index.html","bd25ad298a30303747ff90e42dddd5a8"],["/archives/page/5/index.html","9b336991e98b2db87d95dd5544aa4199"],["/archives/page/6/index.html","25630f2ff77066cc5b057cd0bcf9456a"],["/archives/page/7/index.html","174a71c92254a2fa144ae7b23854f38d"],["/archives/page/8/index.html","76dc196384c99473cdbb7ea490eb251a"],["/archives/page/9/index.html","b8c017151301a09ab97bd424eef384da"],["/categories/Programming/index.html","4a200a5a6e716754155143ffaf2efb5b"],["/categories/Review/index.html","a462f345dc134064b7a00cd24885e1ac"],["/categories/Review/page/10/index.html","16e2f45896d203567c045f3fc9b3e57c"],["/categories/Review/page/11/index.html","881c978cf90d7d808bdda99febf33d6a"],["/categories/Review/page/12/index.html","68856a768111668dfb88c215941d2b9f"],["/categories/Review/page/13/index.html","7dd22439e6201ab0f9b6d19510017696"],["/categories/Review/page/2/index.html","697feb57af57ad4f5f5e3e012af06249"],["/categories/Review/page/3/index.html","f52bfb09359e1841508db34c81f214f8"],["/categories/Review/page/4/index.html","896f4ad973ab47d50d58b17a149554f8"],["/categories/Review/page/5/index.html","6bafd7ffd2bae3e8547aaf9f0c1a6652"],["/categories/Review/page/6/index.html","352c9f26fc5083e5754244ced8317529"],["/categories/Review/page/7/index.html","70919e8b970398e68a88cfab460fbb6c"],["/categories/Review/page/8/index.html","80f2ffbc3105abf41bbc894ce07b7e4c"],["/categories/Review/page/9/index.html","b55b009b76af0c1dd869e80114ec2fb3"],["/categories/index.html","e4b5b0897945aa3fb80aac39a0edbb2c"],["/categories/日本語/index.html","79c0e8e598da5384ad9f0710efa3f172"],["/categories/日本語/page/2/index.html","e6265f367bf1ed5f39df60507bee7cb5"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","aaadc71fbff770203cc77494dd89c3f6"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","610b9e4d753f874689bf383797c5800e"],["/page/10/index.html","f6c38fa1353f7319d1cff38c6b484b22"],["/page/11/index.html","00ae0c38e441889cd299a49a27a6f85c"],["/page/12/index.html","670c1c9c7786b385bcbef433cf2356c6"],["/page/13/index.html","6340e2ecdee46f601a61999a7a138fd5"],["/page/14/index.html","c0b3c76a001a6139c0479c31b68c5ed8"],["/page/15/index.html","66d14aba6962ce0f1185950cf936af3f"],["/page/2/index.html","9fd48a7e4635cd36b876a6906a563a99"],["/page/3/index.html","4e710c48399da5895d270f043a93515d"],["/page/4/index.html","0824af52839e25e1ef6dd029576ab56c"],["/page/5/index.html","d15720e095041d87833932296895d3fd"],["/page/6/index.html","ceb45012c5de665c3a0c69802f807191"],["/page/7/index.html","f36ca91e0458d5a00148f01f9d8fcea7"],["/page/8/index.html","3a2470032adbfd8153b836bbfb57ba0d"],["/page/9/index.html","1b77a74d0a5e747e240c6e4ce863f557"],["/sw-register.js","ef2592b9d4ca7eba16bf620f89c42e01"],["/tags/10分作品/index.html","c91b96134caa3787f84020939b1e2fd8"],["/tags/3分作品/index.html","2e1e70097b544b2cd6a2157bf99ecd65"],["/tags/4分作品/index.html","2fb77fbbd1c7c21d99a95af0c653fc5b"],["/tags/5分作品/index.html","df1322f3bf1e178dfe99648f6528c808"],["/tags/6分作品/index.html","13a5defa63302a5c6cf01693160b3514"],["/tags/6分作品/page/2/index.html","34524c018bfeee3c4f43be55d305a8a4"],["/tags/6分作品/page/3/index.html","3e41c512ac8a6284d9c709eb8f832380"],["/tags/7分作品/index.html","9b5823b4b9983ecdefce06948db07d20"],["/tags/7分作品/page/2/index.html","3813e72a2e494e4f03168bb5924e9d6c"],["/tags/7分作品/page/3/index.html","5679e84b6a404aaefaf882fd3a32e73f"],["/tags/7分作品/page/4/index.html","e13e158c4667a1d47f883964e821c471"],["/tags/8分作品/index.html","dcd0c30c9f61a7f600a13902a61d3c5d"],["/tags/8分作品/page/2/index.html","94fba22f2f1fcf4ceb472f628c160cf0"],["/tags/8分作品/page/3/index.html","2def91b5a7f15e6a93e0547cde704c3d"],["/tags/8分作品/page/4/index.html","bcffce07742b39f41f06ac3bd5bb4146"],["/tags/8分作品/page/5/index.html","8535056d31a2b7f9a8f70005bcea13ec"],["/tags/9分作品/index.html","b1dd41143fd5c127ada2c65026677fb1"],["/tags/N5難度/index.html","c3f932cbe838ec356b321ec09275a1fa"],["/tags/N5難度/page/2/index.html","bae7fe45330edd1a5fd5fd8a4801b8b5"],["/tags/index.html","f4062170405c3ae75f23d5084818c929"],["/tags/アボガド６/index.html","76cfdb1acb8233e793865d6931817ac1"],["/tags/三秋縋/index.html","5608dedbaba81c4f092fa0114d4a66e4"],["/tags/中國武俠/index.html","5e4e9b9657401f5d4815810c8250aee2"],["/tags/中國言情/index.html","702614b44d42f019f489144c504097cc"],["/tags/二宮敦人/index.html","20a7dab3bf3775d72517f20b48e490c5"],["/tags/人性/index.html","56649fe0295110163ff3977e3dfc67af"],["/tags/人際/index.html","c25b5d901548c666af7395de923527d8"],["/tags/住野夜/index.html","f3ef8d9ec66d96da07265d77b456a75f"],["/tags/佐野徹夜/index.html","8c183fe58c4bae4ad6f69ade18e99d9e"],["/tags/努力/index.html","0dee909417d310bdf56bd9a1986e66e6"],["/tags/動畫/index.html","70e6cac50ad02f2b71379513749f3dd1"],["/tags/動畫/page/2/index.html","e2a2fdc03f3c240af70c64676fdd9240"],["/tags/動畫/page/3/index.html","f13e3d8d9cb4fd1a1ab016a6c5309608"],["/tags/動畫/page/4/index.html","65d8b0a6e25e1c27c947b1916562356b"],["/tags/原諒/index.html","41ae76e4866f54ab9a2c5f7bdd4d7d0b"],["/tags/反烏托邦/index.html","514004e9d513fc666a077fa1a4eb923e"],["/tags/啞鳴/index.html","05c19eecf42693d4cc45bd351fa929a1"],["/tags/喜劇/index.html","75418daae68faf31736cadabc93bc4da"],["/tags/夢想/index.html","84fc7801752d4b3e1234146e37fb65ee"],["/tags/天澤夏月/index.html","1444349fd2ca83fa1c8d9529dfad4fbd"],["/tags/學習/index.html","c305abcdb1b2bf50396d5deb418ab681"],["/tags/學習/page/2/index.html","9259a9de13cc702e301255593e8c14cf"],["/tags/宮崎駿/index.html","72578bc05b9787207ab5cb2a55a3d652"],["/tags/小說/index.html","2618fe65379fb6c589605954bdc1b514"],["/tags/小說/page/2/index.html","8e62e2fa7b25342a72a8af5f7e9b1cf7"],["/tags/小說/page/3/index.html","fb3002f89b2e527aed701c7be3e9c1fa"],["/tags/小說/page/4/index.html","c7e96b5bfc4d474de5cf8713a886f7e5"],["/tags/小說/page/5/index.html","fcf1afc422ff17669f011b23c344733f"],["/tags/小說/page/6/index.html","0e560635c52eb0fe19aecddaf55e6ca7"],["/tags/小說/page/7/index.html","e75a411cf8c3f13b03937cc7a1cfc962"],["/tags/平淡生活/index.html","d2b4f987b93a745e4f41991a38c9c617"],["/tags/幸福/index.html","600ac481ce2327dc10c457f7e2a151a8"],["/tags/志茂文彥/index.html","360df005774157d57d27136972c52ccc"],["/tags/愛情/index.html","2ce2e6de720d8f34bc7ef53d444ade09"],["/tags/愛情/page/2/index.html","13670210175dba542eb4ee252c262663"],["/tags/愛情/page/3/index.html","e83d8b6d2bea02a07641420393b4371b"],["/tags/感動/index.html","8f132dce2ce0a9d3d50e0e1ddcf90baa"],["/tags/懸疑/index.html","c1d79f1d73f6f079ff09f0ba984e9484"],["/tags/懸疑科幻/index.html","c958edef3b9ad8c95cb9a60225fb3a71"],["/tags/戀愛/index.html","cb456bd22b7e0bb6035b055b6936eb85"],["/tags/成長/index.html","7a5b3f22d4a5a69969f8c99f1de59476"],["/tags/成長/page/2/index.html","fe400d16185488b44c606bbe4c8a8386"],["/tags/戰爭/index.html","ee7a3592f8b93072849549c352924a81"],["/tags/推理/index.html","356d760762bd686df24bc7dfacdf56b4"],["/tags/搞笑/index.html","499fe8630530073522fc34fd5397d34c"],["/tags/救贖/index.html","332b8b5821d9cfd294e1cf5a58e581cc"],["/tags/斜線堂有紀/index.html","aac191caa402cba45bf265d3028f6b9d"],["/tags/日常/index.html","7cb74f3cb840877d028baf3c3f51a183"],["/tags/末日/index.html","5ca4fbc252ac7807651b4fc262ebabd0"],["/tags/校園/index.html","bdd402980f944499a3acf773bb06b58e"],["/tags/武俠/index.html","e2c08294b2ee1ef7a1618e1b5da69172"],["/tags/武俠言情/index.html","a16bde3d002edd2003468f40b72ade48"],["/tags/漫畫/index.html","172217dded3d5f7a9f81cf2d7aa75d0e"],["/tags/生命/index.html","1253c7c137f82784090ca373629e58b2"],["/tags/生命/page/2/index.html","841391c0898b405a08a83698a7542445"],["/tags/短篇/index.html","1f76d828571ea3822d2eee137ced59f1"],["/tags/社會/index.html","a0ef8b6c333cc3f743e94fcb24e5593e"],["/tags/科幻/index.html","9fc845be916115f5f0778742194d9d91"],["/tags/童話/index.html","d0763c7173bd9248d263c9106007519f"],["/tags/競爭/index.html","e3d4a7ed874af92229d096fedb3a7ecd"],["/tags/自我/index.html","8045e36c2bdf78778c77e1727f32dbfb"],["/tags/自我認知/index.html","26b861809910955e6851074943450203"],["/tags/葦舟ナツ/index.html","7328f189c5099da2b14dbf0743d47fcb"],["/tags/藤萬留/index.html","80994f8b698261ac791a752e0cf4a0fc"],["/tags/親情/index.html","0f8974a35bbb79a941a63c39830d4f80"],["/tags/雜項/index.html","4691b23eca2ddef52f3cd643fa212bfd"],["/tags/電影/index.html","eef495873f7a027ba1c71414886ac9e4"],["/tags/電影/page/2/index.html","84d30f207410b4b6e6082fa356678d9c"],["/tags/霸凌/index.html","e2276cd503a099d4da9beb0712b9337d"],["/tags/青春/index.html","a7d512ddb22eb7803632f3957d122db4"]];
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
