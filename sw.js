/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","5bc7cca7d3026f3d349bc2ddffcad4e9"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","5d141cab3a737787e217dddf8caf2f98"],["/2019/12/25/Review/無法計算的青春/index.html","fe02531170c74bf14a34bf2c2c84436a"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","3cbfd6a27db7b8934b5827d8b18ace53"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","21b143e561f52c6a8a804b2e7f59caa8"],["/2020/01/19/Review/下雨天，不上學/index.html","36718c29dea1f9d0b00c6d99d2586bcb"],["/2020/01/26/Review/三日間的幸福/index.html","4dea267103ac0e9ecc19de5134eb4114"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","5a43ccb8b80955ea3f3c3d624b8c0807"],["/2020/02/09/Review/青春期超感應/index.html","9316803c1b4cc2b1b1d5fe88729a8b09"],["/2020/02/15/Review/又做了，相同的夢/index.html","14a9ab5701ce56ff4c91904d6e2cc24d"],["/2020/02/22/Review/回憶當鋪/index.html","66aa837c5b4fb5b1dfdc0cdce4181f10"],["/2020/03/22/Review/不適合自殺的季節/index.html","1ce8b44b8edcd7e612c3cc037d5e4604"],["/2020/04/26/Review/我們都無法成為大人/index.html","4a02d9858f35c76378e0290cf29760c4"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","3591c12741b6f5a196542eb2719f200d"],["/2020/05/17/Review/人間失格/index.html","e3f0d8efe6693e3e97a5e19dc2309b8f"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","27ee66ba00781212cd51be1d60ec0d13"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","e9fd701ea9d344fdb55c5d4a1530f44a"],["/2020/08/01/Review/銀河鐵道之夜/index.html","e4c495b0d0c8209e88775abd324892bf"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","684e7cbe3d1606e05f95969bdd2ea9b5"],["/2020/08/16/Review/15歲的恐怖分子/index.html","f7fc2eeae9d2d52bb5fd45c4a830f4a9"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","b6a5d15fb01b2af607f569af8f903585"],["/2020/09/13/Review/羅生門/index.html","26f9c8da1a74c61c690a6d9891871324"],["/2020/09/20/Review/闇夜的怪物/index.html","2d1d38d5c106334c16982e9456a4bbb0"],["/2020/09/27/Review/14歲，明日的課表/index.html","18b49711b5a316d775da3461f1098e99"],["/2020/10/04/Review/致十年後的你/index.html","a1f1e3e1c3aa3ec3986e8554db004cf8"],["/2020/11/08/Review/滅絕之園/index.html","f3f18472120b6227945e890441aaa3b8"],["/2020/11/15/Review/將愛拒於門外/index.html","21a243de5d0558a4eb23e557462ac6af"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","7dc530b21880643369cbce277a67e6bc"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","25ba135191d8c5ed6ffb9a9f98560f47"],["/2021/04/22/Review/道印/index.html","163fda822ebd6ec767e04286e32bde5d"],["/2021/05/03/Review/戀入膏肓/index.html","74d1808a892d6e019f21ebe190015d77"],["/2021/05/10/Review/Dice/index.html","6983756f4a64f5eb8c7f89462fc3a2dc"],["/2021/05/15/Review/魔女之旅/index.html","ce9127b7461509d27e848a422ca9e0b7"],["/2021/05/28/Review/戀愛寄生蟲/index.html","e684f9404c926a5dfd6f8cbfdf3ccf5c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","5ac5059a90be5d7e5d255723dc1cca2e"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","a3b2a159133de06c013cec501ea3ebb6"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","cd471f210ea356eab087ab6f3cff4781"],["/2021/06/05/Review/流浪的月/index.html","8129bee6344866d2b16ed0342fad4c21"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","a7ed13c9c3140c793716e16bc5780e10"],["/2021/06/13/Review/第一人稱單數/index.html","7ef46c6046a1301e1c6af9a355e02967"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","e6754a5b0fff59387f8725fa22d282e7"],["/2021/06/16/Review/願你幸福/index.html","c651c96593067c4b1ec3e52481cbfb8c"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","83a56786c5d8e5697c41795d617acea3"],["/2021/06/21/Review/神隱少女/index.html","693dc7859502dfa220a6432f5d448a3b"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","caf4f10b12291a9dc6ed6e40af3b7389"],["/2021/06/23/Review/天空之城/index.html","51ec77259f50b42265418da44dc4055a"],["/2021/06/24/Review/魔女宅急便/index.html","656135d9ec91048ab26d9fa08c73d039"],["/2021/06/25/Review/借物少女艾利緹/index.html","e37a15a343faa1a1864c0bc1f36fd4e8"],["/2021/06/26/Review/魔法公主/index.html","3c133b317965822ac05d6434d246f2dd"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","d7cb08149331885ca883d8f1404dcb71"],["/2021/07/04/Review/飛雪與劍/index.html","6721afb85ddfac762c00f0cfdc800d25"],["/2021/07/09/Review/地球防衛少年/index.html","1008747594bdb69dce06938e4151ec73"],["/2021/07/12/Review/Angel Beats!/index.html","618b7d9eee76a1e6a2f96fc9a4f8ad4a"],["/2021/07/13/Review/Clannad/index.html","609341f46a06e29530f68db6b5d927cb"],["/2021/07/15/Review/AIR/index.html","597e0c977c884a8fd9d0ed914d35058c"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","79421eabd603bce650e25288ff748240"],["/2021/07/15/Review/螢火之森/index.html","3c1842ad470359b29928998f14fe9ab2"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","07a7ceacd0a8eb563fb7bbbeca93f521"],["/2021/07/17/Review/奇蛋物語/index.html","f5ebb1840612fca4c4258cece110b0dc"],["/2021/07/18/Review/Vivy/index.html","e85278c245c72321f34a63c9a1901f76"],["/2021/07/18/Review/請妳消失吧/index.html","ee5abe27c2a92690cfea2b07b30c7019"],["/2021/07/19/Review/漣漪的夜晚/index.html","85d6ef991fe64909207d635173f1b538"],["/2021/07/20/Review/月色真美/index.html","b3926d68fb47df29f32a4fea0652e89c"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","1eb82b3e7b1c084ea89fe9ecff2cfcaf"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","16252669e04c98d13e3b7303a0f79b60"],["/2021/07/22/Review/罪惡王冠/index.html","06413d0bffdcd6e22b688e5c0570a7bd"],["/2021/07/23/Review/弱角友崎同學/index.html","4837168167f99a6ac7562e98b726d06d"],["/2021/07/23/Review/惡之教程/index.html","05bbebd2f2ec0672003f9036600608c2"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","2f052aa42240d3202e534f5d81169478"],["/2021/07/25/Review/魔王勇者/index.html","2085f1f34f68ae0012a2ba7c9c683435"],["/2021/07/27/Review/一年A班的怪物/index.html","2eaa7892d8790cbcc8ddf7a7bd57c235"],["/2021/07/27/Review/奇巧計程車/index.html","db09337e997a3fe20cf833d4e37b08e1"],["/2021/07/27/Review/專情的碧池學妹/index.html","7d284ff09bb3f8123516a77ed1fca8bd"],["/2021/07/29/Review/只有我不存在的城市/index.html","dba669903d946d95bd3f3bc3b3d99a5b"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","7767c3fc680a47e1c596be81037cd71f"],["/2021/07/30/Review/可塑性記憶/index.html","4599c7c59cfb129dcc3284d497cd7037"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","a6f784fa349a9065647f7bf8908e6449"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","777640e181b2cbdd6244cc922aa3b2fb"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","d03d275037580d18763e024f6f2419d6"],["/2021/08/25/Review/清戀/index.html","17b8e173a1518dc0bbd6560a2089955d"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","1fa53d73b956de5aacf897ab6de4368f"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","43f9be9d0f7cb29553b3db60fb14f7a8"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","8453933c52d38c757408208aaa8f32f4"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","3f32d1b610115fd87a1c47198ebac73f"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","723031576d995572cab785d4ab7d2e05"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","4a3a4dad7e00a5d7afc18fac191593ce"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","3db72cbbc4d1d8028c1e2c8ad434459f"],["/2021/10/16/Review/龍與雀斑公主/index.html","55cb337d1d10df249aa9438384723227"],["/2021/10/19/Review/孤狼不想開後宮/index.html","8def6b655e02673f43d10c2cab695660"],["/2021/11/13/Review/徹夜之歌/index.html","952b2d0d37b2f25406ab427551e2767c"],["/2021/11/24/Review/武煉巔峰/index.html","005ae85c4fd102a94c190c0d9174ca14"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","e56fab6a38159cb7e4cc245fdefc032f"],["/2022/01/28/Review/神醫凰后/index.html","b16d159b30d195d2379d73722ad1f3d5"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","d576b100d38b6e9bd32ab80a118734f4"],["/2022/02/13/Review/夏日幽靈/index.html","4c957748cfde02d07120af04ecd3981c"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","7549afa77e165151728c434de9bb1c76"],["/2022/02/26/Review/賽馬娘/index.html","61974184e522577e6d84f13889287e21"],["/2022/02/27/Review/大欺詐師/index.html","cf399b27f1ff525f7bc42c5e9c7f68ce"],["/2022/02/28/Review/前輩有夠煩/index.html","df4fdf9627afa8451f2724e3815a9ddf"],["/2022/02/28/Review/碧藍之海/index.html","ad5c727e8971ed6b65aaaa7ff0656dd1"],["/2022/03/05/Review/落第騎士英雄譚/index.html","094a44180c5f20a0829bfd4f517355b3"],["/2022/03/06/Review/Another/index.html","531da5e0082c5d3deec37b9a00281faa"],["/2022/03/06/Review/入間同學入魔了/index.html","3f46e0156e72609d34d44421e8684123"],["/2022/03/18/Review/再見宣言/index.html","a69a526d14a4d1e055bc4b02300b04c5"],["/2022/03/23/Review/生若冬花的妳/index.html","b727c1fcadb7f648ac65ea8669dbeda4"],["/2022/03/25/Review/天之弱/index.html","2e587a196e383d9315226be6b346091b"],["/2022/03/31/Review/滅了天道之後轉生/index.html","be0ab4ea3c1d1d0939b4a9b4b05a974c"],["/2022/04/30/Review/泡泡/index.html","599e77ba3f3e4b4377a8e493f3f77b45"],["/2022/05/04/Programming/Dynamic Programming/index.html","66a15d5e19117f2cd87347a8cecd6e2e"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","c5cfa9f1baa959052273df92b0070504"],["/2022/06/13/Review/偵探已經，死了/index.html","f62edf20cec473a777830ce3203521e3"],["/2022/06/14/Review/黑色子彈/index.html","259e359b9b42f5f7dcd642e2d6e31054"],["/2022/06/15/Review/黑白來看守所/index.html","47203b741beeae9983a5c7e231d7116b"],["/2022/06/16/Review/虛構推理/index.html","9237cf532b3541acc7bde34b876f7a18"],["/2022/06/17/Review/戀愛與謊言/index.html","64ef16c5e841b9eb72477f57d2399094"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","4f275ee2085eb4793821097383f3afc5"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","af4337f75b0f4adcbc1cf65d77066b28"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","9e42d92a46b449706644d3a9b7a161f7"],["/2022/07/03/Review/Hello World/index.html","2817f182f8dd48e5882137add081381b"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","08d98f9d2960d7b26e513c0f356ef236"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","c14eb22d87ef169012928b51749c8973"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","4a2b3b20deed5fe260cac2a1969cda28"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","61158d13d186e3475c03fa78fcc850d8"],["/2022/07/16/Japanese/動詞分類/index.html","45d2c671237d1b59c4b671b4207a0319"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","8a29f8049cf1feb3947ec5cd289b1522"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","f16911c00419b0983be007f08e857c89"],["/2022/07/17/Japanese/音便/index.html","bef5e26795bd693dd04a95265d41b2be"],["/2022/07/18/Japanese/動詞 時態變化/index.html","83ac1469c0c3dc2996b9a23db1045dcc"],["/2022/07/19/Japanese/助詞用法整理1/index.html","a2730c7d0da05d6d45ef1d1ee08d091f"],["/2022/07/26/Japanese/助詞用法整理2/index.html","9a1ec286bd3caeaa99f1cf5cb6317ac7"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","b389c9ae05377fd4563586dbf9f71f99"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","664a87ad941bd67980f0af4fa663d365"],["/2022/07/30/Japanese/疑問詞/index.html","6f074f655f3274f5093a6150b09311ce"],["/2022/07/31/Japanese/助詞用法整理3/index.html","509c99973ad5765de0997dafa8b26160"],["/2022/08/02/Japanese/副詞整理/index.html","b24db3764dbaeb7af844afb140fb5d35"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","7df562a7d6ca5c197ba428417ea364e4"],["/2022/11/04/Programming/Data Structure/index.html","369381e30bcc71d6c68b78669244a321"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","a5ec248fcac362c60255c46cf856fabc"],["/2022/11/22/Review/組長女兒與保姆/index.html","6e489c446c902908d23fa6dddb3ca802"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","3d187c0fffa0a623ca2f767276eac527"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","5d9ef51ae54879600613397be5ff6a9e"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","217d77a8c1a481dc621beb35d945cd02"],["/404.html","d4cc78125b9dab04afcda2ae5e0e8d00"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","41c4da76cad1749db1cea7df1ca25e71"],["/archives/2019/11/index.html","3933f4a048a0ba19c85c683fd59f96c3"],["/archives/2019/12/index.html","4c52b716bb81b2fcf6ec60b6285349ba"],["/archives/2019/index.html","78e0e7818a93bee00f0539a4605eecb6"],["/archives/2020/01/index.html","1dc97bd0422eae1f0c56760a8764a388"],["/archives/2020/02/index.html","77970a902644c9aad175a2fa3f90eaf0"],["/archives/2020/03/index.html","6afabef57666c7e664cf9a038a87a6aa"],["/archives/2020/04/index.html","f6a2b41d7bfd8964a79972bbe57fcb14"],["/archives/2020/05/index.html","d86b0626f01003e562659d1c5c2885d0"],["/archives/2020/07/index.html","4d1f1c3f7bcc28f5dbd6184563a3cc21"],["/archives/2020/08/index.html","072ff3daef64ea5109d66e8543fc8cec"],["/archives/2020/09/index.html","01cf211eb0f4bd9f51438afb7b9de224"],["/archives/2020/10/index.html","a190953abc33eb7f3849c22d3730cd57"],["/archives/2020/11/index.html","e9b87c249976688c65a9b068a6a10ae0"],["/archives/2020/12/index.html","0cbc836389f33fe6cd9f8e401fb0b72d"],["/archives/2020/index.html","40363927e3b0bbfbd5ef297ede454a07"],["/archives/2020/page/2/index.html","4200f3074feacdd22eef92635303236d"],["/archives/2020/page/3/index.html","10930b5f97677c802cfa7a38d6403833"],["/archives/2021/04/index.html","4b817d0e1d61192c02fa0c866988e573"],["/archives/2021/05/index.html","8091c03ff0df4a4f8f1d68bcd74c25a9"],["/archives/2021/06/index.html","582c241351df0bd2ac49a143cfa3aa7d"],["/archives/2021/06/page/2/index.html","8dfc147e6cef270576e159f4250fda10"],["/archives/2021/07/index.html","27b8edeadba388feb25b7b85fedcf098"],["/archives/2021/07/page/2/index.html","43c32ee657394990f072fbd456025078"],["/archives/2021/07/page/3/index.html","623719de3aa681a72db4bd254f3859ec"],["/archives/2021/08/index.html","2da3743b454562b3b19b990ea5dda440"],["/archives/2021/09/index.html","9996de774cf40163b5fb7ce71fdcc00f"],["/archives/2021/10/index.html","52ec73ceb27b48d0d80f5743794700b4"],["/archives/2021/11/index.html","59ba831ff743cf27ea635d098188a0e2"],["/archives/2021/12/index.html","3cbf8e1c40d44496ade84c99d6a81be4"],["/archives/2021/index.html","75633bcd1cb29787ac98fcfb52703945"],["/archives/2021/page/2/index.html","b727eef676d4e8f5af93830560f68725"],["/archives/2021/page/3/index.html","2f1304731f3b05387fa52b93a04a1b4b"],["/archives/2021/page/4/index.html","24b446afc0f822abdca494fc51e5dfbc"],["/archives/2021/page/5/index.html","d213006821c6659f6a4509e84aac4e3d"],["/archives/2021/page/6/index.html","7a9b468a11c88ebea797c741a0a63d1f"],["/archives/2021/page/7/index.html","8178d0618e9d7015e36441789806e161"],["/archives/2022/01/index.html","8e3f8807d15443c8478477fbc1e27555"],["/archives/2022/02/index.html","ed8c2c32813cf7dcbc82ec4914b49021"],["/archives/2022/03/index.html","8ec914f4a6e2bef04d5db99e324645d8"],["/archives/2022/04/index.html","0f1baaa5cfea60639e7cc95aa6b3ea51"],["/archives/2022/05/index.html","beacc8792055bfda8c4b560e2bf1b640"],["/archives/2022/06/index.html","2bb409e8070d5621c8dd106cb7913e59"],["/archives/2022/07/index.html","49691a338fb42d41c685238c19f6ba0a"],["/archives/2022/07/page/2/index.html","b0bc72ffe9ac270c205e1cc28a2343e5"],["/archives/2022/08/index.html","51dcfed06ec67e20993730926f9855a6"],["/archives/2022/11/index.html","bc7179fb446c9b733b359ec2e7915ed5"],["/archives/2022/12/index.html","da74ff3067d2087c94a90ba534a6ef71"],["/archives/2022/index.html","decf34ad54d1171bfafc026e8bcf6cee"],["/archives/2022/page/2/index.html","a0550284f4f1a2fb4db52271ed358c3d"],["/archives/2022/page/3/index.html","720e3191acc9a0d4550b4d2a618fe612"],["/archives/2022/page/4/index.html","db5718dbb69d9c5bab7844fd27d57282"],["/archives/2022/page/5/index.html","5c70e82ee03878f8a9b93f8800a85ffc"],["/archives/index.html","a83da29ee19173b4d8c1da4d5db78241"],["/archives/page/10/index.html","0d04cea0456d1f6f0acdeece799d0948"],["/archives/page/11/index.html","d93ef373fde8d98f1e94252c3d5431e8"],["/archives/page/12/index.html","5fc428a9565d0dcd328a4791e68bf6ca"],["/archives/page/13/index.html","d00c4ec7124407649549e085cce28411"],["/archives/page/14/index.html","70d6ca695758ff44b08ff7d82f2b90ed"],["/archives/page/15/index.html","55ec40b2585a4231283c74e43402aa6e"],["/archives/page/2/index.html","4518567850fd92cbd7442e0473a78cc8"],["/archives/page/3/index.html","f94aa6447dd7e82c9ee646454905a4e0"],["/archives/page/4/index.html","16f6af34f7f2542ae68fd45722b92734"],["/archives/page/5/index.html","4f0988ae56b249652fedc609a8102b98"],["/archives/page/6/index.html","a8753bfc5e3b739c5f31fad7182f3e33"],["/archives/page/7/index.html","2c3c45ec4af39cacd3422cac2b87e0b5"],["/archives/page/8/index.html","a6fdfc53161d7b8eaeefffe473f4741e"],["/archives/page/9/index.html","b06ebc41a22532d7ca7d7abaaeb3269f"],["/categories/Programming/index.html","214c9afaad49eb90014a75ccc0baf82c"],["/categories/Review/index.html","8f54e7ca2178d46afd0c4fd94b512141"],["/categories/Review/page/10/index.html","1b678f49d75cadeb815d674b215f2aa2"],["/categories/Review/page/11/index.html","50e1890c0d15ed0e9ef0329f95e42e4d"],["/categories/Review/page/12/index.html","51524053c8c49f319866c7d130ee1cb3"],["/categories/Review/page/13/index.html","6206b6f22ffa69848b014aafe3da754f"],["/categories/Review/page/2/index.html","4756dedb69101b8f77a96d9371a69442"],["/categories/Review/page/3/index.html","4287e50fce111872e3d969a14ce92c0f"],["/categories/Review/page/4/index.html","e4f0bae9e8026f2d4ada1b52886b9594"],["/categories/Review/page/5/index.html","df3871c2627a9dec23a815d2e2e18f51"],["/categories/Review/page/6/index.html","acc1881bc3f138d3dcd3a34bec6495ca"],["/categories/Review/page/7/index.html","60bb1a226f6e49fe99b34e3fe4c1e7a9"],["/categories/Review/page/8/index.html","860ad4060e900fbc01a83d643051cf6f"],["/categories/Review/page/9/index.html","55c8fe869e2c1b202452bc1d7def519c"],["/categories/index.html","96710a7f6946012bd7c18a2c1b7fd587"],["/categories/日本語/index.html","2b19ba162c7690761426998eaa4a11a2"],["/categories/日本語/page/2/index.html","9f46d167f8cf2f7bb19f28b0bd2e01f3"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","eda3788a4eba67a6eb7ddf2f07850543"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1b60e3c42f8fab31893580fd0012fb28"],["/page/10/index.html","1b8a64f8a3a52743024ff27aa8db0ec5"],["/page/11/index.html","4540c26c231a770e31d74a33033cc2af"],["/page/12/index.html","9c6c70b92356bf4c6e5b06f14f6f7d28"],["/page/13/index.html","f0be8f8f0ef391c2209499084b649bb5"],["/page/14/index.html","294c381c0cd3f9ab4aeefcf2be34d5bb"],["/page/15/index.html","3764bc16e161651fcf2bdb7ef1b9f42b"],["/page/2/index.html","b617922ded220af2447b40a00837c810"],["/page/3/index.html","dca546ac6ecc124e1862b0a289afca1f"],["/page/4/index.html","86e4e1604dd31a95cb6bfdd0e3c58df9"],["/page/5/index.html","dfc825a08e2205b7614740c5ce8794c6"],["/page/6/index.html","42ce384d61cb7939ad8b37c67e72a0b0"],["/page/7/index.html","88968ffa02dbead729509dc5332c8649"],["/page/8/index.html","24704ef2708f58f3bead76df84093bf6"],["/page/9/index.html","a5fce6f48d0c5668096714bde3138d78"],["/sw-register.js","4b2098a86b89cdd9004daf64d5ebc191"],["/tags/10分作品/index.html","f782bd6bcdd3781b4ac1c5ba6deaa907"],["/tags/3分作品/index.html","7688df27bf9c5ebdf8ba0fc0dad3c8e5"],["/tags/4分作品/index.html","505e2a1f31670e4a5cd9bbb994d7b11b"],["/tags/5分作品/index.html","cb5b9f5d6dc95b45d502ac3dae0bf7ab"],["/tags/6分作品/index.html","ba740360fc0c2f776948bbb71316a5f6"],["/tags/6分作品/page/2/index.html","b8026558a44180732750a70975b38f38"],["/tags/6分作品/page/3/index.html","d2d2598af0a10348ef806a1ad0ba5cd2"],["/tags/7分作品/index.html","04cbb3dfdc9adb0c3595f60ea9f46c0c"],["/tags/7分作品/page/2/index.html","ba90da626f972038330756f2ddd1fe0a"],["/tags/7分作品/page/3/index.html","7d68ffba24b6706681eac84b121776c7"],["/tags/7分作品/page/4/index.html","c758fca567368271046bdbc1197f845c"],["/tags/8分作品/index.html","dd51d7bd295b61cee2f57f702544fcf8"],["/tags/8分作品/page/2/index.html","ca2ce81b942c48868da3e746f56aa85a"],["/tags/8分作品/page/3/index.html","27286632da2dc98b9fb954aa850d28ad"],["/tags/8分作品/page/4/index.html","ecac280362ec8968e154f7fa6d8af506"],["/tags/8分作品/page/5/index.html","a46bc0848653531d407f493dcd15ade4"],["/tags/9分作品/index.html","977ee66bcd2e7e7dddc74b783c4dee9c"],["/tags/N5難度/index.html","378c1fc7bbb8d00cba86a5054f2fde96"],["/tags/N5難度/page/2/index.html","80a4d41d72888c0429c6d310986a9d15"],["/tags/index.html","1ad1f68ca71fd61937108c671418f108"],["/tags/アボガド６/index.html","776b5dd3621ed6704a3957fd75d5e955"],["/tags/三秋縋/index.html","3cbd379c70e2e19b21ad2855e74273eb"],["/tags/中國武俠/index.html","85eef6a4ff07f40cccde349ac6a378f6"],["/tags/中國言情/index.html","df84e560c7b4913c4dce1f6bfe00ede2"],["/tags/二宮敦人/index.html","c9bb74284f57dd81d26399ec02e1f241"],["/tags/人性/index.html","7519f4d9e0b83c495b556a86dca478d2"],["/tags/人際/index.html","a8b9857bf6a997c4f876826f6ac3064d"],["/tags/住野夜/index.html","79cd00c2232fc3503a5f59215863af86"],["/tags/佐野徹夜/index.html","4c9890a38cd9f04f2539f1d537d9cc5c"],["/tags/努力/index.html","577761fb3a37e661945b2808a7bca3ab"],["/tags/動畫/index.html","7649bc97c157e93dcc6d2c527fcefc8e"],["/tags/動畫/page/2/index.html","c3fd43885be2652bc945472b4a5a77c0"],["/tags/動畫/page/3/index.html","e88275d2609a658e478e93a866b328a0"],["/tags/動畫/page/4/index.html","8514681a42937b675a48c5210ac182fd"],["/tags/原諒/index.html","3f2e165483accdc7c57803031dc762b6"],["/tags/反烏托邦/index.html","2d53e940b995f8e3145a3abef64f9722"],["/tags/啞鳴/index.html","bebe49dde68fa4385d056f8333cecaf2"],["/tags/喜劇/index.html","8e4eabc64b9b849c74fe45c2bae9bbd7"],["/tags/夢想/index.html","0fbf32c8a8b76a604dcb733204e82892"],["/tags/天澤夏月/index.html","973272f97d9fee122ee332520aab7dfe"],["/tags/學習/index.html","85c8abda40c9da81f2c59c1c1132aa78"],["/tags/學習/page/2/index.html","2dd926099ba3dc807b01e9818dc6e47c"],["/tags/宮崎駿/index.html","173d205be328bce553f46385b25e6be3"],["/tags/小說/index.html","97369d80c1ee61192bd3cf1e7d992ea5"],["/tags/小說/page/2/index.html","b2f5a7e4c6c42be6c4e2a273609e380f"],["/tags/小說/page/3/index.html","fe46bf77adc35f2cdaaa73c1f15e40f2"],["/tags/小說/page/4/index.html","77c40d2fd4a85350d0d3a37ebb818de8"],["/tags/小說/page/5/index.html","d7dd5c044255c74b2976d821c770d2dc"],["/tags/小說/page/6/index.html","bd62ab1a35647e0426b0aceac93ac589"],["/tags/小說/page/7/index.html","2f3bda51c5229043b545809c208637cb"],["/tags/平淡生活/index.html","d56d92bfa4a253a61b138f13797b95f9"],["/tags/幸福/index.html","67482292b78549f05440c0b48a7a4ed8"],["/tags/志茂文彥/index.html","b7dc43653de83a767da7f5dd31e8d0d2"],["/tags/愛情/index.html","e2b8bc8c320d888cb2df441f7f3890fd"],["/tags/愛情/page/2/index.html","0dcc84ca39452fc87c2963b7fa21d689"],["/tags/愛情/page/3/index.html","ca4d37852b1e2ced15b7c453aa038822"],["/tags/感動/index.html","2c85fa6c970e528a7de8f8d12186aaa4"],["/tags/懸疑/index.html","5b37b4e4e94078cca485e56c38589033"],["/tags/懸疑科幻/index.html","6eb53e8dd27a57ae09d7834d86c1975e"],["/tags/戀愛/index.html","a1d86a886785699ed17991c866b54c2a"],["/tags/成長/index.html","961d1002f10647c566a63db2724f6f16"],["/tags/成長/page/2/index.html","d6ec7c08b2898e54d4638f7fa422e339"],["/tags/戰爭/index.html","3fccddecada24a3901e86f12d2e8859c"],["/tags/推理/index.html","ca5f10b92889dcfc777148760169fb0d"],["/tags/搞笑/index.html","bd2c67c4dc318117e20fd2823c66bab8"],["/tags/救贖/index.html","8c8ecc07876be2a50b3768173ef02637"],["/tags/斜線堂有紀/index.html","47a80facb7b0d4b2830af4c071bcc5d5"],["/tags/日常/index.html","3c2669eca47b534654c309c790bd35cb"],["/tags/末日/index.html","0ec736bd7299b7e1da9d0c0311f127a2"],["/tags/校園/index.html","fa1f4455a703a29550b0f6cf39cc9501"],["/tags/武俠/index.html","8aff8c2ad5953567fc87eabb932e4a26"],["/tags/武俠言情/index.html","0fd9f8594c6c41816c82a32e61b5a815"],["/tags/漫畫/index.html","34efb7dc7de0a6f409eedfd3850f7c30"],["/tags/生命/index.html","471db16225f73e939547b126b5ae588f"],["/tags/生命/page/2/index.html","ddda31c259d90e5b3e3a53d191a5b9d0"],["/tags/短篇/index.html","809585e5da7016fd2bc25901f77761b5"],["/tags/社會/index.html","2f01f2f82a4c73c0309fad35c2e1c4dd"],["/tags/科幻/index.html","ea9c5860d1251d89483a65bf9e53681d"],["/tags/童話/index.html","3922fffd318bf3dfe757e3c85427cb91"],["/tags/競爭/index.html","c1c9791caa2eab9285f3664306962eaf"],["/tags/自我/index.html","cab3bfed17997fcb6985031e80a5bb54"],["/tags/自我認知/index.html","07925aa018a85e7d61dac601ad3965b4"],["/tags/葦舟ナツ/index.html","786b03d44d1fcffbcfdb16895d789175"],["/tags/藤萬留/index.html","c82dabd0f9d1d0fac0967e914aed17b3"],["/tags/親情/index.html","afc8535f8caa886a52684f2a5d0fe952"],["/tags/雜項/index.html","950fcdb0b56cc9fd0ae53f1158295d01"],["/tags/電影/index.html","f027d7d5796e4c88c9fcb82228e1c2c8"],["/tags/電影/page/2/index.html","dd01e8494400f72768a7027d3e1c1498"],["/tags/霸凌/index.html","043e2d2272497cdeeedfb9d020b30998"],["/tags/青春/index.html","d17efc77ebc5b504920eab8082cedac8"]];
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
