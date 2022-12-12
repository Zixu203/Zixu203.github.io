/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","57d1bc4b07c1af2b8fca03a447b7948f"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","80ea71ec3c62be37a6938fcf0a6f6fbf"],["/2019/12/25/Review/無法計算的青春/index.html","b9764d29dedd022ff10fc938d65d6c63"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","c29fb61ab08e24435ced24badb57f9e0"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","7119d0730afe98067b826d4808afd3bb"],["/2020/01/19/Review/下雨天，不上學/index.html","f831346ecd0140a83668a23ae2828b82"],["/2020/01/26/Review/三日間的幸福/index.html","e6de211ab39404649908a798eb4f7dc4"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","3fd2b0cf872a3f802d4a14bb04105a76"],["/2020/02/09/Review/青春期超感應/index.html","684d92e9c34c599b5d20654ad459dfea"],["/2020/02/15/Review/又做了，相同的夢/index.html","1140ac3fe4f556a7f98b88864d917798"],["/2020/02/22/Review/回憶當鋪/index.html","0da4b72a654e0d6edac575b5a78a2054"],["/2020/03/22/Review/不適合自殺的季節/index.html","449bc0b3ac1e44635187ef3e95c4c184"],["/2020/04/26/Review/我們都無法成為大人/index.html","2e158552d7a3e81376d3c0cf362f998a"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9a687afa0a538af2f4f707bb3bf26d44"],["/2020/05/17/Review/人間失格/index.html","71ad54fb6a36201385a04795c1cc9c63"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","ab7df9836f2b77b1989c2a370b1a2f03"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","f5f1f447c00d36575de9f26941356875"],["/2020/08/01/Review/銀河鐵道之夜/index.html","9043908f69bfd14b1c24d688f4e0643d"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","dc6093749c3ca1f7e613e438099bc12c"],["/2020/08/16/Review/15歲的恐怖分子/index.html","594214c62346330bd0c010d1afe27ce9"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e816825dde9dbbda65ba0fc45ee8db28"],["/2020/09/13/Review/羅生門/index.html","19b824e5faa8b558fbb34006adb2251f"],["/2020/09/20/Review/闇夜的怪物/index.html","f3fad5162e7805b13e0247398c985f9c"],["/2020/09/27/Review/14歲，明日的課表/index.html","9846fdb14d48666c81bc146c432b9db1"],["/2020/10/04/Review/致十年後的你/index.html","15d80d7b52fab5fa381f92a54f20a130"],["/2020/11/08/Review/滅絕之園/index.html","91c35beaeff371fde6d1bc7e9e6d9428"],["/2020/11/15/Review/將愛拒於門外/index.html","1c23114d2a7aed762055b68a3e8c55f5"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","448d023c5b18c4ed6d72b9fe50aebcf7"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","8154d53373940c3b8a013acc2dd9579a"],["/2021/04/22/Review/道印/index.html","be9491dd83f9dcb0f0d82c00154ffe36"],["/2021/05/03/Review/戀入膏肓/index.html","5855f2b4051b1097399f76d9bfafe954"],["/2021/05/10/Review/Dice/index.html","4cfef5ae34e059ea52711e68184ad70f"],["/2021/05/15/Review/魔女之旅/index.html","6fd47135c9081aff406481fb377b0426"],["/2021/05/28/Review/戀愛寄生蟲/index.html","ae39ec1e099f0cbd60c174695b39d1a0"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","59319c2444bde2e9c2187c76d959b319"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","f8b7bef127e4125d87ec1ce3b021842e"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","501c0e627c9b57a4ff6a90d69c25ffd2"],["/2021/06/05/Review/流浪的月/index.html","d641874144ded8d5dbb0a07a46b3845b"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","dd6ab08588b5eaa3c4d0cb313d7b582a"],["/2021/06/13/Review/第一人稱單數/index.html","9cbedb22eaec8bb34a64d6788d06a19d"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","7db35d264a7adb84cc474cd9bffb0fa8"],["/2021/06/16/Review/願你幸福/index.html","62d5b93c8e63a0943d0fe38d85b75a3f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","e245d4c5d7fa3fbd42d8b587b4b2ce5a"],["/2021/06/21/Review/神隱少女/index.html","d554b62255708132cef011a90e99478d"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","87bc9a0a07abd2dff82eaecf91521d4e"],["/2021/06/23/Review/天空之城/index.html","31238114d7062b149203017ee26f1ed8"],["/2021/06/24/Review/魔女宅急便/index.html","377e7df63250db953a83a0955213dc87"],["/2021/06/25/Review/借物少女艾利緹/index.html","83ddb723527c8d951bb378855b2654d2"],["/2021/06/26/Review/魔法公主/index.html","73943ce7f8913876fbf1674804f2cd82"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","3d77a8558871c4688100538f25ee5aa6"],["/2021/07/04/Review/飛雪與劍/index.html","1752d4f01f8ca6c421c9a6e8a3676b67"],["/2021/07/09/Review/地球防衛少年/index.html","54f24813237daf2332ea1a5e3a067eff"],["/2021/07/12/Review/Angel Beats!/index.html","2399239edc8c8aa39da56232d01c5736"],["/2021/07/13/Review/Clannad/index.html","b7b63797a6737a59524cdce71c2ff3a8"],["/2021/07/15/Review/AIR/index.html","abb72b646e6903333119792e1de1383e"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","52f6bc130dcf4a635d76efa288cabc9d"],["/2021/07/15/Review/螢火之森/index.html","0280119b54d63e2627045797cecb29b7"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","7fe51e9eb8d932b9a41ea996a0f725c1"],["/2021/07/17/Review/奇蛋物語/index.html","2fc535dca1f8a349153e082dac7767c3"],["/2021/07/18/Review/Vivy/index.html","da4872c94ef31f6c550d11ba93d7df58"],["/2021/07/18/Review/請妳消失吧/index.html","acb35be994530ca9c0b7749a330759f9"],["/2021/07/19/Review/漣漪的夜晚/index.html","83b81c7962a2e35c80821a83a400acef"],["/2021/07/20/Review/月色真美/index.html","40eb8723d4001672cd851eafc47c2a65"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","05a5a9fbbf23bf3e0013e26720c67055"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","37269833799e3629c68110f06f3b4bbb"],["/2021/07/22/Review/罪惡王冠/index.html","bf841e1ac71170ae89182f0a47d5f005"],["/2021/07/23/Review/弱角友崎同學/index.html","80708bb9d055c33820681fd6cc1be730"],["/2021/07/23/Review/惡之教程/index.html","46d7dc35ccc1ed6590b8022519f477b3"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","c02a6999a1ecb941cc8a179b2eea7ee6"],["/2021/07/25/Review/魔王勇者/index.html","8de33bd20dfe2b7501ea87a00f98764a"],["/2021/07/27/Review/一年A班的怪物/index.html","38ccb8d17047c5cba2d0c285d23b9f3c"],["/2021/07/27/Review/奇巧計程車/index.html","518e60a16947a25d9fb68af072a00014"],["/2021/07/27/Review/專情的碧池學妹/index.html","2f10ec0d395f183bceba35c2f5b822cb"],["/2021/07/29/Review/只有我不存在的城市/index.html","8768b14cc1ca4c6a1df8625783864d00"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","cd61614a4b3197042c1448609f0dd9e8"],["/2021/07/30/Review/可塑性記憶/index.html","e6c77c47d6d395adb5aede60ea236c03"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","18b694455eb6ca31eddabc55f706585c"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","81e537ebc20e18cc3b9ee0d0819995b7"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","c6176b32f5c7e076770d18f0f2bf1d6c"],["/2021/08/25/Review/清戀/index.html","b110cc023020308aaca403239ec0309a"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","d117baa350a5f672a080690a477f1e66"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7351f6242633a6edec9d755eb0ed3411"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","91f70f6121f43239ebe8876ac048b2af"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","bc4e9b4334021ef06af092a8729972ae"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","7927d0bc215cecd255094fc08ac2fddc"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","0ce13d483a8b31b99ec3da3f8876ff86"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","5ae28001229fb8628c953d7686fa3478"],["/2021/10/16/Review/龍與雀斑公主/index.html","948aaec6695c215be529d44b16d44c01"],["/2021/10/19/Review/孤狼不想開後宮/index.html","60aff093a39f65e4cf1820385a053a4f"],["/2021/11/13/Review/徹夜之歌/index.html","eda9c033a9ae8dc8cbd7a7091e53ac7c"],["/2021/11/24/Review/武煉巔峰/index.html","a70114454233c5f2fcadb733efd85450"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","2f6a0db56a55c4468899630f102ce524"],["/2022/01/28/Review/神醫凰后/index.html","c1fe6fc9eb863948ac5048ce30ca17de"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","a409a39d0017436df7e0d3717c319608"],["/2022/02/13/Review/夏日幽靈/index.html","cdbd649e879cfacd55e3ce57b2cd4ad5"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","b83f991f1618f529154faf7774a4ee29"],["/2022/02/26/Review/賽馬娘/index.html","3d7f1572b496a3b177f1d89e79050c94"],["/2022/02/27/Review/大欺詐師/index.html","3e78b23880bf3dd386e1a7ecd2297920"],["/2022/02/28/Review/前輩有夠煩/index.html","2d4184064d262329eac34616459e6404"],["/2022/02/28/Review/碧藍之海/index.html","a985052b124934e44f84f4de9d579c44"],["/2022/03/05/Review/落第騎士英雄譚/index.html","6afa9b3bb979545ed9e9ef88b4ab2595"],["/2022/03/06/Review/Another/index.html","d69b5492f69e072e07b185ad40e13515"],["/2022/03/06/Review/入間同學入魔了/index.html","f742d4e9b6164ef216b842b748254a00"],["/2022/03/18/Review/再見宣言/index.html","e00b5c311beec5885748ce07f1c2dd28"],["/2022/03/23/Review/生若冬花的妳/index.html","ee2cb2b579e9f342a04f5add0347a0d1"],["/2022/03/25/Review/天之弱/index.html","d8894cb8d4034ea9f064066308548d28"],["/2022/03/31/Review/滅了天道之後轉生/index.html","a4e868516dab7e1d7f1da38e81c4891b"],["/2022/04/30/Review/泡泡/index.html","51b03414468f4184fa9a9aa32ecc7865"],["/2022/05/04/Programming/Dynamic Programming/index.html","addf3d1ca181887a1a53e70f27c1e756"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","31b32d59c6d0db1feccf26702411e924"],["/2022/06/13/Review/偵探已經，死了/index.html","f62871d18693a92bc1693fac03feff49"],["/2022/06/14/Review/黑色子彈/index.html","7a4c251631788d81924872dd1831c817"],["/2022/06/15/Review/黑白來看守所/index.html","8ab26f02bebd85db4832895fdbe995ca"],["/2022/06/16/Review/虛構推理/index.html","720d62a277e4f744356082120ce48f7c"],["/2022/06/17/Review/戀愛與謊言/index.html","b3bd61c3d01587448c4e5bcda578a0bb"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","a0d681bd254c92f4244af1fde862bb7f"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","a381d99c3a363206f9ed0be2a3d711b0"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","21b6549519fd67855405e4fb2582a6d8"],["/2022/07/03/Review/Hello World/index.html","3e70deb55e8fb03e4548e3e0b84ccbe6"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","342cfffe7a7ec153414a70ec923aaf3c"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","ffea4262ac3ee8b10c1cfaa377d14ba9"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","cd7f1c3947c6f961f4de0f252c70ce43"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","e052649b37d8891a7a36f26f5ae5da06"],["/2022/07/16/Japanese/動詞分類/index.html","679957892e6a69d1deeb3411b8a4e05e"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","623872e21805739cbaac420b288687bf"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","bfa8c02c12b0b98cbacc4ab760162dbd"],["/2022/07/17/Japanese/音便/index.html","89ea2650a20168849d19f063686cd950"],["/2022/07/18/Japanese/動詞 時態變化/index.html","026201e753fa2cffd9e3900bae312451"],["/2022/07/19/Japanese/助詞用法整理1/index.html","6d7b5a5f5ee089c9c7ceefb380e3765d"],["/2022/07/26/Japanese/助詞用法整理2/index.html","201a55803a9a6d81b3d568b64c5d09e9"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","a8bf17bae1b3dc3bafa8c4021afa8451"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","f4ce318d03fb6338a1d3cba87a4bb63d"],["/2022/07/30/Japanese/疑問詞/index.html","2a79f81aef89fd043bd440a52636e2b8"],["/2022/07/31/Japanese/助詞用法整理3/index.html","74377e38566018fc1b04383312500a04"],["/2022/08/02/Japanese/副詞整理/index.html","b5aac01f92de8375bbd677cd38b5738b"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","ccaef0bfd1f3e98c81b384480543a703"],["/2022/11/04/Programming/Data Structure/index.html","f7555e5a81c9f1770990fc2d3be0428c"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","c75e08e61d7f8cae97c69f6efb86cc4a"],["/2022/11/22/Review/組長女兒與保姆/index.html","31d1b3f73fef06e2c1faa7754b394995"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","bf1702cb3337b7506935bc0147f1a062"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","d40ff4e6c8b72c92016007d6338d5349"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","88dee23340c19b11525f1ec842ef7c2d"],["/404.html","2f715f7c7d3c8415e9cca2e7cc4b20c2"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","44d267c29b240ad437dd673a8ae5388a"],["/archives/2019/11/index.html","15ce8640e8385fa9b9b33a90d929ba85"],["/archives/2019/12/index.html","9b19f2ca22e574046b79e9cefbe0eaf7"],["/archives/2019/index.html","e47a1b68677fe7b42514b3498e8c98d9"],["/archives/2020/01/index.html","845712bf5ac7be0fa7345a2e0ae8b54d"],["/archives/2020/02/index.html","3d29802c6a8ee9d8564b0568c0a12090"],["/archives/2020/03/index.html","c23677e7d97447890ead78b00ef57fd9"],["/archives/2020/04/index.html","27667f5ef2c747be56ab8fc88b9aa628"],["/archives/2020/05/index.html","0549b21516a71620d1cca193eb788d8a"],["/archives/2020/07/index.html","6a61888e772f8c86402dd4277ac4ff64"],["/archives/2020/08/index.html","cefb3f01db948fe9544312675b2746a6"],["/archives/2020/09/index.html","80321a4596d5443a3d8f2aa31be013b4"],["/archives/2020/10/index.html","9e881c0a154d9ee8c817145fd3f3c673"],["/archives/2020/11/index.html","194fafd2869e930692fa60f1bcc7c893"],["/archives/2020/12/index.html","5478611a6f087b7d9a6da17c617b5b5a"],["/archives/2020/index.html","7048715da2df122b7039ebfdb9b53d65"],["/archives/2020/page/2/index.html","4a1682549b523da67186ed5ce93126e6"],["/archives/2020/page/3/index.html","bebd3372d9ad7307092d3f3a8c35d755"],["/archives/2021/04/index.html","48d8daf62ee70b10eb0ba8c5cf079098"],["/archives/2021/05/index.html","613b2714a8850144b41c373fd1ce4062"],["/archives/2021/06/index.html","503581f3b2a7637f712902d40fb52588"],["/archives/2021/06/page/2/index.html","fea2568ebe3325da3e1844ca1cc309c5"],["/archives/2021/07/index.html","5f59851c3fd1875cfaf685a5a4145de5"],["/archives/2021/07/page/2/index.html","a1c53799b00cefc175650105c4747924"],["/archives/2021/07/page/3/index.html","29fcd1f88c91c9c1b4f720de6d08fbd5"],["/archives/2021/08/index.html","2e9821bca143107ca895d6de6ef695d7"],["/archives/2021/09/index.html","3c0dd4fcc7341e16361f4ecab3b77d32"],["/archives/2021/10/index.html","88b13846b8cdfcca7667f6970879a321"],["/archives/2021/11/index.html","c301954b78736e72635805bdedaef685"],["/archives/2021/12/index.html","23038704fca7f080afb7ea69a874bc2d"],["/archives/2021/index.html","e7f43a059a3ba9a0e11e68e661c036b2"],["/archives/2021/page/2/index.html","8f0fb178b3fe5866e5e4b59d3970b3d0"],["/archives/2021/page/3/index.html","96e5f33fecb882d647d874a31d948c93"],["/archives/2021/page/4/index.html","747817cc11bb5b9c4b70cb912fd10401"],["/archives/2021/page/5/index.html","6823bea53afc7c0693f7eb0dc2a4d52c"],["/archives/2021/page/6/index.html","1f6df9f4aba1d6f75a7c07ec8de33da5"],["/archives/2021/page/7/index.html","7c8919735a301be4e5ac06c5199336af"],["/archives/2022/01/index.html","76d33a469c881c0ad5b63f6a55582686"],["/archives/2022/02/index.html","88a41ad95504d3d54dfaaa6b6d4126c3"],["/archives/2022/03/index.html","8b524f05a18d392a14f296f97ebe6720"],["/archives/2022/04/index.html","7f2ce8edab8d6d36749b5788769680fb"],["/archives/2022/05/index.html","cbb79c80dce6c8875d33852d1bf8f5bc"],["/archives/2022/06/index.html","8b31905810c5e23e9d205e404baf6e1c"],["/archives/2022/07/index.html","7ad99ecd90adf7e118d3cd0be4c0da5a"],["/archives/2022/07/page/2/index.html","d9a3c6a41f7799e51aa72d497003eed6"],["/archives/2022/08/index.html","8c2704b8af9b2d98ac18eed7f4c57a0b"],["/archives/2022/11/index.html","9e62cadc8a84850918ae54b449055a90"],["/archives/2022/12/index.html","6d1aba258bc045dca548d472b2e9c393"],["/archives/2022/index.html","20ee0618d4a5849c9a57e29486d2bd05"],["/archives/2022/page/2/index.html","d3788f86475db95020e6ec61b96e9d4f"],["/archives/2022/page/3/index.html","4a24fa327a666d8865da1d01d77c674e"],["/archives/2022/page/4/index.html","f08ecf02a97ca431295a608bc6aa201e"],["/archives/2022/page/5/index.html","530ec7422ddea60f56dc0e6e8fec9dc6"],["/archives/index.html","b5f85d61fe3b0f6c4fce8afd8b90f0d7"],["/archives/page/10/index.html","2191dafc765edcfeda59814fc93b67c0"],["/archives/page/11/index.html","77198982bb61641bc1a8c611d5928539"],["/archives/page/12/index.html","af22fb6751b8bf7f745e320ac936173e"],["/archives/page/13/index.html","8e7140fa882b889d5f1652bad4bb625a"],["/archives/page/14/index.html","7e078eeb971f1cb82289f2109883d479"],["/archives/page/15/index.html","58a37828a6e310e98cbdd5985200a514"],["/archives/page/2/index.html","9d30d38cb6e46e5768e9e98ef9f12adc"],["/archives/page/3/index.html","ef1be4f617ace626b0a0ce2fb399a35b"],["/archives/page/4/index.html","971f6a6e21fd727e15747d5a638d8326"],["/archives/page/5/index.html","dd1fddc3c737fd9105f3785ef56c1669"],["/archives/page/6/index.html","339a08efc0ed62c441ac25dfbf65060f"],["/archives/page/7/index.html","81183482014e25eb54c3b116e99f9f4d"],["/archives/page/8/index.html","42061f04aa7261edb560cdff9abf6f4c"],["/archives/page/9/index.html","fb7e92abbe955d485de27eb0b9e50d08"],["/categories/Programming/index.html","5687f3ffec8c2b050cdedef1efbb72c7"],["/categories/Review/index.html","c7d496356ededd5511bab95d406262cb"],["/categories/Review/page/10/index.html","138f1f251d183259c95f6ebf4fef512d"],["/categories/Review/page/11/index.html","70af5dc8ab14275b5f1bf5de3501df7b"],["/categories/Review/page/12/index.html","786573f1c257f6f287cae0b88ec16aaf"],["/categories/Review/page/13/index.html","d70b18e265ef2164f4f73dc6daea9735"],["/categories/Review/page/2/index.html","9efaa96f4488e985b3e932e2d319b265"],["/categories/Review/page/3/index.html","3961e0ff43a86e22f80eefac0032c28e"],["/categories/Review/page/4/index.html","6bc55d421de011a68be43b785893b32a"],["/categories/Review/page/5/index.html","7da851d79f0de0c289278fe0aa37d4fc"],["/categories/Review/page/6/index.html","cb3422fa803d130625d11608a95f3589"],["/categories/Review/page/7/index.html","17987467ea0e64c4e45fe6893bd510f6"],["/categories/Review/page/8/index.html","7c383ccf2a0133e0627e2266217f255e"],["/categories/Review/page/9/index.html","b9dd270a003343644e993831d057c940"],["/categories/index.html","9ff308f48d0f278acdb4494dff2ae64c"],["/categories/日本語/index.html","9cef43c448977e13f81060b3c8998b4d"],["/categories/日本語/page/2/index.html","93aedf024f103fda061e4799a9ca13aa"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","cdb8e2016d96e0ea33b72337ae3a83e8"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","521fddce7d33500a1f7c624ab5e2ef7f"],["/page/10/index.html","5b273e6fb3be0a9b8bbca83781e6c9cd"],["/page/11/index.html","72d05ace5b0f05cd31d81f2c15a523af"],["/page/12/index.html","a52367ff216f57ab0e19169a1d5fe08d"],["/page/13/index.html","96c51d70b96c684bb19a46deeb19d3b9"],["/page/14/index.html","463332d8732f75a2885f98bc4cf95bca"],["/page/15/index.html","b59e95381728ff337bbd18328bea06c0"],["/page/2/index.html","638d41813e1e3fcc78ed7f3dc30cabf4"],["/page/3/index.html","fdb5231ca15fedb51d5dde2fcff6b730"],["/page/4/index.html","37282a1a0db6b4a656189d6a3b436613"],["/page/5/index.html","72f82303e7d88cff644aa90c543fc3a9"],["/page/6/index.html","59d3a7ccc081dad63c6f26415ca2ccaa"],["/page/7/index.html","753594bf0fb03a9dfe5d44af2ff24b99"],["/page/8/index.html","59848d986e7ffdb5d1b2cd08e763bcb3"],["/page/9/index.html","aedcc95b13ebee402c27082b213f40c9"],["/sw-register.js","a99a12598bed8ba46672c4725cf6cbb2"],["/tags/10分作品/index.html","a75661d65ff2cc69b472aec771588869"],["/tags/3分作品/index.html","4a6c520b4f2dec7afeb83d90b6534003"],["/tags/4分作品/index.html","cbb80a13efd84e65b2990c719b2cd6ff"],["/tags/5分作品/index.html","b16e34323fc5873fc02176087145726d"],["/tags/6分作品/index.html","594f8869b337710a58115a9c6ae476b6"],["/tags/6分作品/page/2/index.html","6ab3f4eaeea7535c986e1148eb38c58b"],["/tags/6分作品/page/3/index.html","22705a1ac3b99665b9ba5270747727b1"],["/tags/7分作品/index.html","19a4ae245071842a7e0f6debcdd0df69"],["/tags/7分作品/page/2/index.html","117ab556cdea5a325493f2c4111cefbb"],["/tags/7分作品/page/3/index.html","d6e670a11b9e6be0af39ec6c091f8194"],["/tags/7分作品/page/4/index.html","ce93b46fbbb1e61bf6cf45712b0d528f"],["/tags/8分作品/index.html","df6e1689b2c0620fa14f3b337292f19b"],["/tags/8分作品/page/2/index.html","47a12b7ec83bfad0edca8e54835a8d1b"],["/tags/8分作品/page/3/index.html","510ffacb3a254cbccd2f6cd17e1921ed"],["/tags/8分作品/page/4/index.html","56d49baee8a18c9506e775b69cb14b5a"],["/tags/8分作品/page/5/index.html","2877cf50e0cfd17c7b121a9fe65e7e7c"],["/tags/9分作品/index.html","2ca4daf43b1b425719b2a30ab84a7047"],["/tags/N5難度/index.html","f48ac33a308e55b1138ae80984323a31"],["/tags/N5難度/page/2/index.html","ef5ec7f9239a40eb4e8fbdff25e23a92"],["/tags/index.html","18db5a215da4e6ae36368f3c64b332bb"],["/tags/アボガド６/index.html","ed2d9f2bf1991437992d48e85eb1d85b"],["/tags/三秋縋/index.html","a153ebbef8e6e766461e11c64e0cc9e2"],["/tags/中國武俠/index.html","180956b60131df59490aedac0d293d64"],["/tags/中國言情/index.html","15a10b356ced18c0542fcb0678efc08c"],["/tags/二宮敦人/index.html","2caa61704e36d8fec548918107bd1f04"],["/tags/人性/index.html","7e14401383a727656d88296ba93aa2d4"],["/tags/人際/index.html","8b844d80601d94efbc9bcd6c57d636de"],["/tags/住野夜/index.html","8a590492466c65ef391a0af7e7173a18"],["/tags/佐野徹夜/index.html","3c4f4ac1f307be112228faba37ce27bf"],["/tags/努力/index.html","1c9dc9ab899454edd21cd4694a720494"],["/tags/動畫/index.html","511bc2cedd9c963628b617b5500d6cd4"],["/tags/動畫/page/2/index.html","d67de8d2666b58a4a96dfc2ce072dd7c"],["/tags/動畫/page/3/index.html","be996b485605f35a6ca647ceafab988b"],["/tags/動畫/page/4/index.html","d7fe65bd259c1d149ef9fa4484ca03ba"],["/tags/原諒/index.html","5c96e184c15b6a45fa9e11f3973609b8"],["/tags/反烏托邦/index.html","e909e373adeec7b5db4ebe0158ef5c2f"],["/tags/啞鳴/index.html","64ef30b2642c554e56fb6fbc7dba82f1"],["/tags/喜劇/index.html","394025e278989b3d98580edb76ac1735"],["/tags/夢想/index.html","1c742a4bdb60f1d702e51aea135ad7a4"],["/tags/天澤夏月/index.html","0e2a41a324e4a6b6a37bd096ce723fb5"],["/tags/學習/index.html","70cbaea61c1f9f95d5566a2469fbb3e3"],["/tags/學習/page/2/index.html","4d2359eca1934a2432daae3251a22559"],["/tags/宮崎駿/index.html","763324ff0f03d23d79529dbd9dbc801b"],["/tags/小說/index.html","a926e840dc73c867351d1055b61023f1"],["/tags/小說/page/2/index.html","4010e0884ddb73d6e98b59c63bf54acf"],["/tags/小說/page/3/index.html","2e74b4a4ec593239242f839eff4a29e2"],["/tags/小說/page/4/index.html","dead30cf0849de27eea002d8127b7f0e"],["/tags/小說/page/5/index.html","df79c2d71bf093b21f19bff86f9678e0"],["/tags/小說/page/6/index.html","fcd659eb57b3686c43a9657f0de4c964"],["/tags/小說/page/7/index.html","0baa6d2ed0cde173f7cea9948ccd41ef"],["/tags/平淡生活/index.html","753f7d06eb4d542f4e76f1013341a0d7"],["/tags/幸福/index.html","8dba8cf5b4436423bea680b735836c6c"],["/tags/志茂文彥/index.html","b751235cb3748f4c63622d77752492db"],["/tags/愛情/index.html","b1d8d3f6f6c90661217beeeebcbbe929"],["/tags/愛情/page/2/index.html","8eb12585b40f05893c7360ba95052183"],["/tags/愛情/page/3/index.html","d4855ca3d1de7c39c4e841f9fcc496d8"],["/tags/感動/index.html","973df90e52612826b1b1a7b4bac909e8"],["/tags/懸疑/index.html","1562ec28eec9215c977331d0d5d53257"],["/tags/懸疑科幻/index.html","0ab26ab8a772da6512ca6a67dc7d51d7"],["/tags/戀愛/index.html","4f6f7488ade89315c6970355f640a22a"],["/tags/成長/index.html","7ee54143c263846f7fad17b5c6cd722b"],["/tags/成長/page/2/index.html","dd8ee5e28c737968e06edcd9f036b62c"],["/tags/戰爭/index.html","2a2293a6068cedc5b94491bcb5ccec52"],["/tags/推理/index.html","4cc6bccd318afa6e30beb1e5901acfaf"],["/tags/搞笑/index.html","0d2217913ab3a374f272e0f3a39af550"],["/tags/救贖/index.html","61fa40825268ef1c32af68193c8f3594"],["/tags/斜線堂有紀/index.html","aead58c0dd6f54b69c850186c3431b86"],["/tags/日常/index.html","a1283d413880f1ad76c8cccf83341aa7"],["/tags/末日/index.html","826325212edb694b21377e7f41ba6e80"],["/tags/校園/index.html","0f7d2344cc056b09533869d27206351f"],["/tags/武俠/index.html","54a2ee5fe228b8618bb31e713997819a"],["/tags/武俠言情/index.html","86ef203eb55b2d0c00e894aa7872bc08"],["/tags/漫畫/index.html","eb415143c7019a473329bc656283f029"],["/tags/生命/index.html","6d3ef904a5e57bd5e0bf8139aa11189e"],["/tags/生命/page/2/index.html","dbcbd1bcf50c750d80fcf3f904c9a0fb"],["/tags/短篇/index.html","b1398c305287b43a8fb64cf33cff9180"],["/tags/社會/index.html","d834146a12b2cb90c2b8fbb3e2b8dbe7"],["/tags/科幻/index.html","6207d4d4dd91b4bb8235978ed014828a"],["/tags/童話/index.html","d8eab2449fdc7a1ad3e4229ec5cc5154"],["/tags/競爭/index.html","b35fb0866bdd43f0fcc77dc9ce85955d"],["/tags/自我/index.html","f1fbcd17e47f35843b596a9dd3cda169"],["/tags/自我認知/index.html","484089f82e2a25b9e08c9c2e6eb9f300"],["/tags/葦舟ナツ/index.html","83d031157c58fe6661cd2d9a1514153d"],["/tags/藤萬留/index.html","accf2cd30306dcc6492bd8dfefde7359"],["/tags/親情/index.html","ba9816fe02271d411cecf657aa0e92c2"],["/tags/雜項/index.html","5a40ffa7b04d40504e77546c9524cdb1"],["/tags/電影/index.html","89f6697f4943ad1e17b272a88baf8921"],["/tags/電影/page/2/index.html","cf663e65955722192c49032e92d13561"],["/tags/霸凌/index.html","da356ef1e05363157703593ce1aca444"],["/tags/青春/index.html","e249ff2b4d2d8635fecf759f821796e1"]];
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
