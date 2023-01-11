/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","bf15c3b6466530e17e1ed7ccf2a0d13f"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","e946c339f7fed33b54080d5fe29fc6bc"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","1a75a46d9b911cd54dcb8c3517709688"],["/2019/12/25/Review/無法計算的青春/index.html","3a03028eb166e488cbb47a9ce30747f6"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","910c64142d49813e9e3f5235f81a36ab"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","decd95d6e8691b445d69d25d8cabd6f5"],["/2020/01/19/Review/下雨天，不上學/index.html","78b928a2ab428febef48e7d3511ff174"],["/2020/01/26/Review/三日間的幸福/index.html","d4c2da78d0a71be3f3d0676eb4f8a5be"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","d62a883cf4678c031ed94b0de785766c"],["/2020/02/09/Review/青春期超感應/index.html","cc0807974ba25c82acdbb8d64eaea73d"],["/2020/02/15/Review/又做了，相同的夢/index.html","7729ff082b6630b26389a4e2d8984c83"],["/2020/02/22/Review/回憶當鋪/index.html","abffad64e3bc12832c91b4b399c0a5f9"],["/2020/03/22/Review/不適合自殺的季節/index.html","6a135e972a83cfed2a7778bad4ef584b"],["/2020/04/26/Review/我們都無法成為大人/index.html","35a6eac3ab9b5e6112710d953f837671"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","a9301d35c778e14c39a5329974bce21e"],["/2020/05/17/Review/人間失格/index.html","4ed49ed304d1aae174f4c71cf0730368"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","791e463e5ebfe9462e51f90247a85770"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","100e5d756d6add43c8f27a051660ab72"],["/2020/08/01/Review/銀河鐵道之夜/index.html","f00228aebe1f51be1f2a87ad6e493ec2"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","fcb9a7512a404400375f72b06d7fbae9"],["/2020/08/16/Review/15歲的恐怖分子/index.html","d5884779ceec25a4fbcd220880525519"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","5861924ddc3edede515535e006468a33"],["/2020/09/13/Review/羅生門/index.html","f1dbbf6198b52838124c3feab90709da"],["/2020/09/20/Review/闇夜的怪物/index.html","772c5eecbac878642a519a22887458a0"],["/2020/09/27/Review/14歲，明日的課表/index.html","846c2badffcd1f2d50556cdc3e21d0df"],["/2020/10/04/Review/致十年後的你/index.html","224bb8df8dae4065fd8aeee246ea8be9"],["/2020/11/08/Review/滅絕之園/index.html","65b24f1005083d09ff6c1c0b85a9da4c"],["/2020/11/15/Review/將愛拒於門外/index.html","0bbbad15b850795429c4c2a4347d8279"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","26dce26bc90383f07fab205bd497b5ea"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","170487f11b340265c3ecd126be0c3c21"],["/2021/04/22/Review/道印/index.html","d667e9973c95de8a955fe12f7dc8986c"],["/2021/05/03/Review/戀入膏肓/index.html","c6e0f3dbee63f351cc49137ad9139804"],["/2021/05/10/Review/Dice/index.html","b47a191c508f8af8c9086b15a4fb64de"],["/2021/05/15/Review/魔女之旅/index.html","37871b1b211e415b891cfbc41bd425ad"],["/2021/05/28/Review/戀愛寄生蟲/index.html","57e84344299202d573945355c14855bd"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","64d30b48827d4fbf3c0615f914348056"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","7f3dc8e0e9e16ad7c995fdad65728c8c"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","aa9847bd55800111310f74fd67839f5e"],["/2021/06/05/Review/流浪的月/index.html","eea3fcd8f1f9179970a7af3129975572"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","7b936a081df356b8e7a61dab30b86c53"],["/2021/06/13/Review/第一人稱單數/index.html","f6419ecdf8e2e6aca7f04c871bb6af05"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","a0e2b115bde96758390194ccccca2f4a"],["/2021/06/16/Review/願你幸福/index.html","90fa2e3ab49b923db6d79abc1f095d1b"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","f13e39f0a2e5698e4ade5d0b8aac6001"],["/2021/06/21/Review/神隱少女/index.html","a0145d4297e61c5cfa66ee424eadf39b"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","6660e19e712890923c241f7883a00b10"],["/2021/06/23/Review/天空之城/index.html","44ebfdd57df3b3f46dc146bfd9ecb2b3"],["/2021/06/24/Review/魔女宅急便/index.html","6c6dbd88bc82c98d93c09dff657f4d66"],["/2021/06/25/Review/借物少女艾利緹/index.html","3a9263b1b77039ed0edab7da7592dae6"],["/2021/06/26/Review/魔法公主/index.html","9ff9dacfadc7351ab38d23bafdabe6f7"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","4042f3ad6de2c1f85ee32c602f9e7eae"],["/2021/07/04/Review/飛雪與劍/index.html","8c903f548d9d9f60d90de52b977756e6"],["/2021/07/09/Review/地球防衛少年/index.html","41e17d1269812816642623b3666e2d8c"],["/2021/07/12/Review/Angel Beats!/index.html","6801b50e7f7664efb0ded0bd04179afe"],["/2021/07/13/Review/Clannad/index.html","fda261d75c71c8c973701bfa003c0ba3"],["/2021/07/15/Review/AIR/index.html","e9a4faea9acde0980fb447b9435fe758"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","61d4ffa992f6326bc68994819dfaec00"],["/2021/07/15/Review/螢火之森/index.html","ab50ffa9f2c7b06e7f1d82c3eb85f0d8"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","eae321969f4645629dce71b519a3e644"],["/2021/07/17/Review/奇蛋物語/index.html","29f04b6cbb3d98c56ca52d0f545464e8"],["/2021/07/18/Review/Vivy/index.html","0e09be4676737b70a3ffc907d893970c"],["/2021/07/18/Review/請妳消失吧/index.html","82ead870d229affe0c3e8a870ec79be1"],["/2021/07/19/Review/漣漪的夜晚/index.html","8edeab316185525f1b513dacaa5e040c"],["/2021/07/20/Review/月色真美/index.html","480b4b36313df1f7ff4514eada4c502e"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","c5d3c247592c30ff1677f5269a73f5b0"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","614dcc6615d5bdf99332ed43e6c5eb3c"],["/2021/07/22/Review/罪惡王冠/index.html","57d9e9a9bbd1bdd9e2238601bdbb0f53"],["/2021/07/23/Review/弱角友崎同學/index.html","2bc99f8fde309f33bf6d5fb5948942f6"],["/2021/07/23/Review/惡之教程/index.html","600bae4032ee563361ec920028e36cea"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","65f2311e4a1898ca9f20f2578af2407a"],["/2021/07/25/Review/魔王勇者/index.html","2f4902beb9bc1ecf1e67e30c14eeeae4"],["/2021/07/27/Review/一年A班的怪物/index.html","ed7f39d4c01eb3070aa91066c9c01a8b"],["/2021/07/27/Review/奇巧計程車/index.html","443da6f46f1dabd095cf3371175f4e28"],["/2021/07/27/Review/專情的碧池學妹/index.html","7f358e07011a36f483da782bff6cadf6"],["/2021/07/29/Review/只有我不存在的城市/index.html","3624c11cc1186bf68793e15f5c54ec12"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","de59bc16f06dc10b3b9fc04891cd2126"],["/2021/07/30/Review/可塑性記憶/index.html","854ce30214a571eb618dcb86fd0d73df"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","70b6bb7e93e80b81fff1aea57a39f2e3"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","22cff142c4ac808b91d23872526e6e6d"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","d4f86fc8469fa7a34c72efaf78a35014"],["/2021/08/25/Review/清戀/index.html","daab078a58254ae27193306e2bad094e"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","e040327d4fcf97748e649a8ca2559c29"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","45e2332ca43cd92f6277ce00be393ba8"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","81599ce574164a01399a98709fc3f13d"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","c5c21803e87bcfbe06f57c324f89c177"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","c16a182c78b752d3aec2febf6dc41350"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","a67ca3f20e4a672116851183570af072"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","11fedd4cbeb976178ac370f604750009"],["/2021/10/16/Review/龍與雀斑公主/index.html","f3983d657e5f848a8f3e7ae99b81c0a9"],["/2021/10/19/Review/孤狼不想開後宮/index.html","b18056aa54fe2382c8be41c3f37b3769"],["/2021/11/13/Review/徹夜之歌/index.html","b2b69ed7e35e727235e1c7fb20ad2a13"],["/2021/11/24/Review/武煉巔峰/index.html","35379db93c988020384dbd6b803f58bd"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","7212ffd2cd3e98b31d47c813d1059321"],["/2022/01/28/Review/神醫凰后/index.html","e2e98ca2db93d2d10147663d95b8bafc"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","59583fea93f217dd3bad8885708e18d6"],["/2022/02/13/Review/夏日幽靈/index.html","4f8e5233af9e3c02d00d7891139ee0a4"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","4cc293367f747c861aa4a9daf202716f"],["/2022/02/26/Review/賽馬娘/index.html","d4274b76d2273332bd0bf1421344b5c0"],["/2022/02/27/Review/大欺詐師/index.html","0fb9ac2ea17fdc4edb700dd6812d9a12"],["/2022/02/28/Review/前輩有夠煩/index.html","4b8f8de123010e0183c9f616cbe2047c"],["/2022/02/28/Review/碧藍之海/index.html","0e548c8256bec9a1f43d9686f0add54c"],["/2022/03/05/Review/落第騎士英雄譚/index.html","a9e1b40c7592c641c5e3c8d25200d8a0"],["/2022/03/06/Review/Another/index.html","209966a0b7361f7dc247f419bbc3c9be"],["/2022/03/06/Review/入間同學入魔了/index.html","ffcd9799f8fe3a38878d6f932f260051"],["/2022/03/18/Review/再見宣言/index.html","722b3d78da0889d5cafe89e4bc7e266c"],["/2022/03/23/Review/生若冬花的妳/index.html","ea29e3c8073f7df445816c10e5a9ad74"],["/2022/03/25/Review/天之弱/index.html","d4c45dff1d33a9001a6dcf829c0f2126"],["/2022/03/31/Review/滅了天道之後轉生/index.html","4c46eccb89437df8d3ef40384f121ac2"],["/2022/04/30/Review/泡泡/index.html","e856dcdbd06388ca97c037b748c011ac"],["/2022/05/04/Programming/Dynamic Programming/index.html","97c173cc50c28b36ac41de424825a251"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","985fe1f044e789a403594656d1d0acd9"],["/2022/06/13/Review/偵探已經，死了/index.html","7e53fb38a886cc3ddead4b2d2326e746"],["/2022/06/14/Review/黑色子彈/index.html","d3ce0084060b5666bf1693baf75ec329"],["/2022/06/15/Review/黑白來看守所/index.html","eb0cc78984e7b1226fa5fec890a26916"],["/2022/06/16/Review/虛構推理/index.html","4846beee9f7f0aa0aa02e0029f065b39"],["/2022/06/17/Review/戀愛與謊言/index.html","f4be4fa25b8d30f8fcd6464db88972b2"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","fa28682a7045b5f46148a490cacde5a6"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","23868433b908bc715391f78e6d7e67d4"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","ff2fbdb4db60013741e3fee31d724ae2"],["/2022/07/03/Review/Hello World/index.html","94332d3bd093b9cea619c7e3e9d4c87c"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","51ad8b9e51b48294526b56b752779c59"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","91a8413473f13f7c4bc809a38acb2868"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","036ccd2acaa853f4ebdb491d0f279c37"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","1d015954a33e151a7e77c82ad76b21e5"],["/2022/07/16/Japanese/動詞分類/index.html","fe71e33665f81f47aca01e29cb088f3b"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","17f1d113fdbb15b10c6870c9c4c358f9"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","812bf4c046b74ef5732bd49effbac084"],["/2022/07/17/Japanese/音便/index.html","c75aa1c201d1bf204e6cfdf8467c513f"],["/2022/07/18/Japanese/動詞 時態變化/index.html","7f4edd71846623720a1167a4b9274e8b"],["/2022/07/19/Japanese/助詞用法整理1/index.html","91058be1a968bbc1009a85e1233da0b2"],["/2022/07/26/Japanese/助詞用法整理2/index.html","b9531be73b9e5d7f8d5bd2b76c5e398b"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","26c7481986437d3dcd36b772df44e727"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","1ed6719ead8f3b30516eaa76f61e27fc"],["/2022/07/30/Japanese/疑問詞/index.html","1692ddf53e5ffdde7754f71308a5c4ad"],["/2022/07/31/Japanese/助詞用法整理3/index.html","47aba7179a5a6cb416a7d669990359f8"],["/2022/08/02/Japanese/副詞整理/index.html","566560ad75f8aee0692ef2bed4481075"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","9614508a961fd038bd163888a4c5fb2b"],["/2022/11/04/Programming/Data Structure/index.html","50d6dd4a489a86a00b60ae66d066ea24"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","0e2abd5cea45ee4dbb1bef23cc9cbafd"],["/2022/11/22/Review/組長女兒與保姆/index.html","2403734acd3809df28185827729104cc"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","29c316fc373a593c485a3a66f471a5d5"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","6cfeb9ed302c2c78b26bd8f77a53e720"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","864b8dc9ff30e94b4d652dff8870e4ba"],["/2022/12/31/Lyrics/一番の宝物/index.html","4e84646f8736670c75e0315d6b6a8b7e"],["/2023/01/01/Review/あの夏が飽和する/index.html","b72b9d1417805673915e323181ac3f4a"],["/2023/01/02/Review/孤獨搖滾/index.html","8d2583796e57709de155741e8e00f868"],["/2023/01/02/Review/藍色監獄/index.html","a6d6ac098641945e749857c0402587ee"],["/2023/01/03/Review/來自深淵/index.html","1f12f5b91edd888ab7bb9df9df787530"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","67abd1fcb690be77ea6fd954182ccf83"],["/2023/01/05/Review/處刑少女的生存之道/index.html","4dac95d2c37b712d478217cbf2f362c3"],["/404.html","cdf142b05e49bdacad187fa464b957ff"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","12b3516ad5b609303ab95301b3efa63b"],["/archives/2019/07/index.html","2bc7c22dc510c2c9e99e6edd83021d26"],["/archives/2019/11/index.html","9aa5b984c31950246b14be6af2d0e20f"],["/archives/2019/12/index.html","9c6fc54086ca60c5026d0c7eda4b6120"],["/archives/2019/index.html","2cfdad52e18ad4f70443c8bd4860626e"],["/archives/2020/01/index.html","ed5bad2712ed92393b84dfb638fc8db7"],["/archives/2020/02/index.html","248c10737ffada91acb0e8e344012a17"],["/archives/2020/03/index.html","a1afa1e4d96d8bfad188c165ead49295"],["/archives/2020/04/index.html","dd7c009ae611419e8c2cd2242f5bb5a0"],["/archives/2020/05/index.html","06a3905b7a398b3d4cb97f6702b1a694"],["/archives/2020/07/index.html","a7d65e3830597a797123246dcd845a49"],["/archives/2020/08/index.html","59d73fcd06205a00af99721497e29e46"],["/archives/2020/09/index.html","ba3566a03681009c589a972fac2c6804"],["/archives/2020/10/index.html","0791fbb338d497c8e4b983a5201dbb0f"],["/archives/2020/11/index.html","2809530520972f6e03ae4571469caea3"],["/archives/2020/12/index.html","c186cb85428f8f1a41195aa52cae728d"],["/archives/2020/index.html","3707c0eb23a703910fd6696196179a84"],["/archives/2020/page/2/index.html","d6e376a8a2300562ad7947dba4f711d7"],["/archives/2020/page/3/index.html","f25d2e9ff3028b520f4ca62501d37484"],["/archives/2021/04/index.html","e60ba4fe2d5e7db350495c42a3e8dfff"],["/archives/2021/05/index.html","5dcf36e539ad413cea9bfd8e369b8dd5"],["/archives/2021/06/index.html","fd5699a1d628cadb12b43adef8d24b14"],["/archives/2021/06/page/2/index.html","e663d62c01ff51dea4e9bca9ffedcae9"],["/archives/2021/07/index.html","494419d71942a884392fefac29efb3cf"],["/archives/2021/07/page/2/index.html","6aff62f10f0e81b5af397ac2932b23c3"],["/archives/2021/07/page/3/index.html","c1c76856a326a9bc0452229847f09957"],["/archives/2021/08/index.html","91c1b643cd87cd96a04894bd6aa5f665"],["/archives/2021/09/index.html","8528a01cee372c92415ae85dbd31cc81"],["/archives/2021/10/index.html","ccc00513a702be803e623c242334a5b6"],["/archives/2021/11/index.html","0d320ab391315cd01eb46827d980068a"],["/archives/2021/12/index.html","dc35153bacc356f1d2067e3fb83f0c0d"],["/archives/2021/index.html","c40f7b3b29506695e0e4befd14706d12"],["/archives/2021/page/2/index.html","cf867d3ca06f99c2c91c5bf2171c3ea3"],["/archives/2021/page/3/index.html","64632ad98ee73b013bbdd4b8ab69d8a4"],["/archives/2021/page/4/index.html","7b4faf2ce711e13463c3eccb1c6c6402"],["/archives/2021/page/5/index.html","fc9c435db3942167d9f0020b25176bbf"],["/archives/2021/page/6/index.html","520c0fcc06f54e502795dbcfa158c2f7"],["/archives/2021/page/7/index.html","4866a0d5a0b4fa7f6c453763b4259d46"],["/archives/2022/01/index.html","df3f148695de5f942557430613e23e98"],["/archives/2022/02/index.html","76fe648e39aba9d9b9807e7f4eb25d66"],["/archives/2022/03/index.html","882e2f647a1c50100a2a04dce751f207"],["/archives/2022/04/index.html","c55d7a59dbcbdd8e78924053dad0640b"],["/archives/2022/05/index.html","1bc82e47bbe4e6ddd4bb1351f97e408a"],["/archives/2022/06/index.html","353034965b57f526a313161e2354afc8"],["/archives/2022/07/index.html","c9a80b47ada448bfd9bf6f647ba65ec6"],["/archives/2022/07/page/2/index.html","97342eec11f3ac5960d40b394b2f57f4"],["/archives/2022/08/index.html","f8cb036eb647dfc545c4bc5dec6e6c9f"],["/archives/2022/11/index.html","d63e320f48b766fd71e902e3be0cc82c"],["/archives/2022/12/index.html","86ea27b55f3e7dc5e131f10910c397d8"],["/archives/2022/index.html","69952700ed535ba73b3406788944c305"],["/archives/2022/page/2/index.html","2787a49a2eab04072c1b0eb028565794"],["/archives/2022/page/3/index.html","95570447d823890798d070544cb66abd"],["/archives/2022/page/4/index.html","789a05f5af1a33de327c0d7211e5dcba"],["/archives/2022/page/5/index.html","1a9e7367b036e806211fc899ba9b828b"],["/archives/2022/page/6/index.html","f62870ad10794f79b4560208deb76feb"],["/archives/2023/01/index.html","f5a241fc3bed5839dd545b83590ffe8e"],["/archives/2023/index.html","74e2e084c8d9054f7618ec3d5ac074d1"],["/archives/index.html","3fed0978db0058abd81662ee3eb94c30"],["/archives/page/10/index.html","da30f72ab66aa02d5698fcbdb3ad6108"],["/archives/page/11/index.html","6e03fef0e42d210c8fbc37f5cc74e346"],["/archives/page/12/index.html","68961071e63404d372676a86521dec4e"],["/archives/page/13/index.html","dd48979424ef8d18c2981719b14a4f8b"],["/archives/page/14/index.html","d99b72da74e9a0f461a3990a9203a8fc"],["/archives/page/15/index.html","265a76fd8b95c7901b5fae01d3057a63"],["/archives/page/2/index.html","005e84a3b3a092989509d707b13f10ca"],["/archives/page/3/index.html","061aaa673e61cd35006e13f88ec13493"],["/archives/page/4/index.html","d6c7b7c49760627b0e38bc6f2eac7928"],["/archives/page/5/index.html","242c7dcf06ddaabc67392bb3c366c3f8"],["/archives/page/6/index.html","136885b8f21cae23e9edcd557a51bc9f"],["/archives/page/7/index.html","6debe4e67636591bc2315b4c69fa9244"],["/archives/page/8/index.html","c19c600a8aef18de23b0c580321e2f40"],["/archives/page/9/index.html","cec2215828eb97ac9b874aafbe46dd28"],["/categories/Lyrics/index.html","16913326bf00822727280338dfc82142"],["/categories/Programming/index.html","a879e8bf4dde40c92e162a385086cd42"],["/categories/Review/index.html","6067859bf01cff2022af3b277acf4f7a"],["/categories/Review/page/10/index.html","727a6c245d55493fa27917b5963c0133"],["/categories/Review/page/11/index.html","04107a8137d70a149a08bc717652e470"],["/categories/Review/page/12/index.html","adc9b005ef778b380592631bdd155413"],["/categories/Review/page/13/index.html","b2742ec5b9c761db5245f35e7dffd0e8"],["/categories/Review/page/2/index.html","f48faee713a876a7e7cb67fe25cb1912"],["/categories/Review/page/3/index.html","70873c3e8af6ebf51e681811411e4b71"],["/categories/Review/page/4/index.html","46978e8c1e0e1ca4460ff14160f959bd"],["/categories/Review/page/5/index.html","919ff6ad1d61bb353b615c7a98b11f22"],["/categories/Review/page/6/index.html","1a7b7f3dc67ae34d5ff3f272599a8605"],["/categories/Review/page/7/index.html","019fb3011b4d8d625fcf278d4c5111f4"],["/categories/Review/page/8/index.html","0c85fb3d4f36ebe6b53070460ec4b6f7"],["/categories/Review/page/9/index.html","3a7175e492983723fe62ea5350e1adc8"],["/categories/index.html","63f6bb1a437c10a1926129e81b34c1e0"],["/categories/日本語/index.html","9905cc96fc609a90907e11dfc2995e2d"],["/categories/日本語/page/2/index.html","416930293b4788232038eacc26e215b4"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","04f7bb1a22f0f7e7f266217ffee64981"],["/js/custom.js","2b7e785b857773766c776e2af8375ca3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","f177ee78cb399e3abfa157b92284c0e2"],["/page/10/index.html","0d6f84ac953c7df4f779c7c57d9ed6a7"],["/page/11/index.html","2a7ea4881ee934d4f490343d2fb62703"],["/page/12/index.html","8385767a066ec2644531cec0524e174a"],["/page/13/index.html","1a34faeb4ceb0719d82feb9dd91f3af5"],["/page/14/index.html","715f5e896369d82247e1cadb87b20a92"],["/page/15/index.html","dd63e5cfd2e56a361662a943689a3082"],["/page/2/index.html","270d40c3e05489291ad4d9039eaa8917"],["/page/3/index.html","bbb11f4f463a3608e3b204bf58c50da4"],["/page/4/index.html","b181ac3d979980c4d51038927a99873c"],["/page/5/index.html","5d88bab22b2be92914fe19b555ef3b6e"],["/page/6/index.html","6ad5ce005bd9380ae4004fd32d32cee2"],["/page/7/index.html","4752f66765d3cfb5587f6f24c9312984"],["/page/8/index.html","48f88cdf44f08084996ed60a2c7196a4"],["/page/9/index.html","f8819200b3bc0fe3e488f3e21e3b2947"],["/sw-register.js","bfbcf6cb1f5d3adbac4540c1f81efc5e"],["/tags/10分作品/index.html","4f95ed8a4293a1f435d04a71a0900560"],["/tags/3分作品/index.html","9cfe2bfdfb8024a1bc024fa35c8d64a6"],["/tags/4分作品/index.html","928ffa0ccd1080e8ef4f30c4fce62681"],["/tags/5分作品/index.html","1435737b0159fc035e3b16d8abb63d61"],["/tags/6分作品/index.html","a77d6fd6cf3946dee12c1e67a510e041"],["/tags/6分作品/page/2/index.html","9f40b6c7788849c878ee757991e2a734"],["/tags/6分作品/page/3/index.html","ae7089f187e438061e97cf2a9d18cf14"],["/tags/7分作品/index.html","01712eaeb981eca6975d96041ca43f4c"],["/tags/7分作品/page/2/index.html","3b93486a2c0a890e7ff143acbdfc76bd"],["/tags/7分作品/page/3/index.html","edcc2f30796124aa318e6255b3043cb5"],["/tags/7分作品/page/4/index.html","c26cbea8c8e4257e257ee5999268529d"],["/tags/8分作品/index.html","05a3d5b922b055bae8bfa9a841358719"],["/tags/8分作品/page/2/index.html","502933543f65358562a1b746fa229009"],["/tags/8分作品/page/3/index.html","7d884acaed5008657f2c751463c6ab60"],["/tags/8分作品/page/4/index.html","ffad87e1c33b0b041b489762a334eb80"],["/tags/8分作品/page/5/index.html","601b48b49a55758d9c83e99dc94528ea"],["/tags/9分作品/index.html","55a60b3715235b18373f266a9fe043f6"],["/tags/Lyrics/index.html","c10c6b07448d147780c4751f4c50260f"],["/tags/N5難度/index.html","3a980d0e103089cc46ff66ccee17f4ff"],["/tags/N5難度/page/2/index.html","b5a7f786ec6b8c9e9a1c218fcedd219d"],["/tags/index.html","0f678c500635b2999d25e6fcbeb79bfb"],["/tags/アボガド６/index.html","4ef861a99d4e0daf2bcd3d199e359c6c"],["/tags/三秋縋/index.html","07a94609e88817dc76db5b4353760507"],["/tags/中國武俠/index.html","5c16c488d4db1b43a5ea9d72779aafc0"],["/tags/中國言情/index.html","0776d3d18d1575114ebde368e83a7684"],["/tags/二宮敦人/index.html","5f25b87ea61cc33e64828999255804e7"],["/tags/人性/index.html","c6e0e67963777573648156edd3c06619"],["/tags/人際/index.html","ee5806ad839ffd49ceb8562dc920b17b"],["/tags/住野夜/index.html","a8f443bd1b35c395348236c2bafa596e"],["/tags/佐野徹夜/index.html","32021c6172f12e8c1634fa8baa2c2dd5"],["/tags/努力/index.html","d1468732b27de3e0eed7958afb8e1609"],["/tags/動畫/index.html","d49a6033db81a44e09510a2450812f2d"],["/tags/動畫/page/2/index.html","857f6eb5b9075106a443728167ff6f34"],["/tags/動畫/page/3/index.html","e3498f3cad0e9f29492bb1e4cbf71f36"],["/tags/動畫/page/4/index.html","5a4960ab9ab34054d24c0e3db5db4ce9"],["/tags/原諒/index.html","bfbf194524372bfb45b22f2b8fed0b8c"],["/tags/反烏托邦/index.html","7694b6adb43da589ebc93000ac6373df"],["/tags/啞鳴/index.html","691d21b77e1ad82921c147761291512d"],["/tags/喜劇/index.html","2b3f6ed7ea272f03fee6d56f7abe1548"],["/tags/夢想/index.html","762fa2ec0a399fbeb6880d2ac1cffae1"],["/tags/天澤夏月/index.html","49f30f8b2a5a1850c4e323ef5ae988bc"],["/tags/奇幻/index.html","defee6027000b39d6e89a8c029cba976"],["/tags/學習/index.html","00352c48d3744b4d35c5e639ce3c98b3"],["/tags/學習/page/2/index.html","be2c59a0c1a92f5db09432147b83a9c2"],["/tags/宮崎駿/index.html","87a7fa0101f86d7ae878442c13e13a30"],["/tags/小說/index.html","36280263129b7f9dbf22c5bf9b8bc033"],["/tags/小說/page/2/index.html","2f37d82e5601d4ad165e3d8ee4da79c2"],["/tags/小說/page/3/index.html","0dc32ab219140f927e510d3f462efa60"],["/tags/小說/page/4/index.html","f3536abffd274c519127030571b21094"],["/tags/小說/page/5/index.html","a528a76b54c5cc054996f531a92f2679"],["/tags/小說/page/6/index.html","2ff71a1f60bffb9cfb779e79c2393a9e"],["/tags/小說/page/7/index.html","267a0fa034f15ffb97d1868cb460bee1"],["/tags/平淡生活/index.html","56a886099a3428350b71b7d9227fcbff"],["/tags/幸福/index.html","39f1818458319adca5863e99f7ea61b0"],["/tags/志茂文彥/index.html","85e97e30de1be7b27c579f1bf10a86b4"],["/tags/愛情/index.html","044e95c1af0ae2b93e72f9dfd425563e"],["/tags/愛情/page/2/index.html","9bdeda90c407b895ae871645c63dad59"],["/tags/愛情/page/3/index.html","342ee38efe3230eadbbbf9c2d9bdcef4"],["/tags/感動/index.html","7ec6cf5898f03121d7ad39a95059270b"],["/tags/懸疑/index.html","6e89155bcc4f3d1bc7f2b221af5dd5e4"],["/tags/懸疑科幻/index.html","9448c0ed2e73b1c17a038614a070e046"],["/tags/戀愛/index.html","47f9c18bddf12a9d3287ab5a23d9ea43"],["/tags/成長/index.html","2f329277da88da23b4e22c2503a8068a"],["/tags/成長/page/2/index.html","8689feea07deeedca828cd076f414ecb"],["/tags/戰爭/index.html","0506a2ebbb9de621b62d81b9047f4f39"],["/tags/推理/index.html","fc905b8682a6d47cbe91a9a4c1436c89"],["/tags/搞笑/index.html","ec60d5e09b85ce7c09164cf05706e03f"],["/tags/救贖/index.html","26cd6df3c88cf222bd8c472d54befb1e"],["/tags/斜線堂有紀/index.html","0d4fd015865acad3ccace49c77ca9aba"],["/tags/日常/index.html","924b8d4762c311018922f34726e42965"],["/tags/末日/index.html","f1d5ed975af2a3bf6d95c9751c5f471e"],["/tags/校園/index.html","faad3cc5d432f4898dfaebab60e9b8a8"],["/tags/武俠/index.html","87ce8beedf71dfd47bb5b278d4de32af"],["/tags/武俠言情/index.html","93ecd0f604d1d583343fd7fe0442513e"],["/tags/漫畫/index.html","b4f928834aa8702efbea5f20c56c16ea"],["/tags/生命/index.html","05b1beed8efb511ccac51dba43f889ce"],["/tags/生命/page/2/index.html","2564b50477d55fa4a2d8b51e3296d41d"],["/tags/短篇/index.html","38d9e599e5f29cb017921e14302af229"],["/tags/社會/index.html","0946d6b2a9bb645ff888a5aa1e057ea3"],["/tags/科幻/index.html","1d123f6fd0c1de6302a99385e41addcf"],["/tags/童話/index.html","0312571ed8118e15fe718659124161d3"],["/tags/競爭/index.html","5528dd1f8d31a4217d7fd676b392ff68"],["/tags/自我/index.html","2e379087445de76d636887579a4ccea0"],["/tags/自我認知/index.html","57543c4231e28f17503549a2fbeb8fcb"],["/tags/葦舟ナツ/index.html","58aa4d0daad13de38b797327cd2ee1c0"],["/tags/藤萬留/index.html","8cf8e13a390adc27e47ea6402c02b95c"],["/tags/親情/index.html","3a8987fe90cf8cbf0d3302ad6c20f85f"],["/tags/言/index.html","b99b2c9910d19019fef12193a4409742"],["/tags/雜項/index.html","94e3a79bac15a480a37435e3267423c1"],["/tags/電影/index.html","b6478bae6a7121db1ce8f1c182ce06e2"],["/tags/電影/page/2/index.html","408ad76b233679fce190ab2b36679d3f"],["/tags/霸凌/index.html","4f92e86af9b6c886351efb5d6e426c10"],["/tags/青春/index.html","badbcf810f8d9c562cbf13dba40dc53f"]];
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
