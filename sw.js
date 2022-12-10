/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","f0118b827bc6407f8ab8a1cd9c724a67"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","b3c37a2bd52cf2fc2d2880b8375a1ea7"],["/2019/12/25/Review/無法計算的青春/index.html","41265d562dab235c99fbb64d32bee673"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","89ed236f83bf56a79fea285ea6306255"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","a8541df3ecb28cb372b728240410f6a2"],["/2020/01/19/Review/下雨天，不上學/index.html","4a4a10969a3c647308932cc2fac7c9e9"],["/2020/01/26/Review/三日間的幸福/index.html","4b72f101adc6ac7d2916ba41c791938f"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","37c3f24f64a9a1711af3d1109f3a8246"],["/2020/02/09/Review/青春期超感應/index.html","334aeb88d3d22a9701eae4cda7c2554d"],["/2020/02/15/Review/又做了，相同的夢/index.html","a92c95e35686b738a0a9e68aa3c3bfea"],["/2020/02/22/Review/回憶當鋪/index.html","8dadf23749ad36928cea5648522a53df"],["/2020/03/22/Review/不適合自殺的季節/index.html","2c1e3f3321b7c28b3e4c00bd99354f39"],["/2020/04/26/Review/我們都無法成為大人/index.html","0df4e2d1d6c146f815c6ec7fabef34a3"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","218400921d4e4a01af3bbc850c92ae16"],["/2020/05/17/Review/人間失格/index.html","73ef4b802a49c446ab578d92063f9bb9"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","6992bcfff4618d509a771148505ad655"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","ca11b5e9e748bc084b28158d4bfb0655"],["/2020/08/01/Review/銀河鐵道之夜/index.html","bafe91e60bff660d057e9dd1fcf12205"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","46f347296e4f91ac374362e9b4f2e770"],["/2020/08/16/Review/15歲的恐怖分子/index.html","210b540d70893e3149959e18a01bf348"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","1b163f1ca3c2e412647186bf75cc8b38"],["/2020/09/13/Review/羅生門/index.html","3e8993353fbc9f0593baa086d66c2fec"],["/2020/09/20/Review/闇夜的怪物/index.html","5799ad057f796c11a0842d3ca1cad143"],["/2020/09/27/Review/14歲，明日的課表/index.html","ed9b095a491dd996339d6fe008ef48b1"],["/2020/10/04/Review/致十年後的你/index.html","255d5a43ecb09a749b13a1b153e1a4ae"],["/2020/11/08/Review/滅絕之園/index.html","21c0fc58dda2feb0a92ca42c414f1d24"],["/2020/11/15/Review/將愛拒於門外/index.html","c8122f9b42c37730adf73a0e4aa33fba"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","e84f60ed98782ce8aecbfba45a17e81f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","5a7354a0ba759bb7ac8b57bd7a5a5e64"],["/2021/04/22/Review/道印/index.html","e1efbfac430e3d87afce7d78a5c9e9cd"],["/2021/05/03/Review/戀入膏肓/index.html","055c0e1ddd86804a25e0fc09549c08f6"],["/2021/05/10/Review/Dice/index.html","a21e1a467222368fdf19520467aac3ee"],["/2021/05/15/Review/魔女之旅/index.html","bcf3dde94086ab3be57779e314bfaeec"],["/2021/05/28/Review/戀愛寄生蟲/index.html","4a744b8e90ea6196f2ab35e0998ce42c"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","c1e17c02b7f8376e87d63dd86da1d115"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","79f4928a8c0cf57f41732e6fc5aa28fb"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","b619053bd7cb7038d4fe1835599b4870"],["/2021/06/05/Review/流浪的月/index.html","3125cb4fb653c6449bd185cd2c66cd5e"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","3548fa77d55c4a1e579272be3d28b4ba"],["/2021/06/13/Review/第一人稱單數/index.html","4f274b31fdc02d5a9d8f92279342cb54"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","e42f7b29754ccb85747c971acabd5617"],["/2021/06/16/Review/願你幸福/index.html","ad575c0a9198a064aa3438bdc42ae026"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","0cfb2ea75fdccc214e6aaf9e2571e84e"],["/2021/06/21/Review/神隱少女/index.html","00fdbbcffd5c903e2b65cb7eebfd989e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","bd3cf6338b67d42e51fc8b961299c151"],["/2021/06/23/Review/天空之城/index.html","ed381629ace58ddc0a13f7fa82b90e45"],["/2021/06/24/Review/魔女宅急便/index.html","bfd3ec73b50d0cdc72a29c838683f87b"],["/2021/06/25/Review/借物少女艾利緹/index.html","3408374a453d64c9e7e6253b7002a7ad"],["/2021/06/26/Review/魔法公主/index.html","4a116ba1523b3cd2ed59517040476400"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","2cc55ed64d92c0eca41a86bfa6e730a0"],["/2021/07/04/Review/飛雪與劍/index.html","7bb806445a30a345a791e4a55eef1d5f"],["/2021/07/09/Review/地球防衛少年/index.html","2c7878571b1d0dd6e2307916d33bbd07"],["/2021/07/12/Review/Angel Beats!/index.html","1c1b99cd0f489fb4e8191570b68890ed"],["/2021/07/13/Review/Clannad/index.html","319592036b504a99e4d87956951ef28e"],["/2021/07/15/Review/AIR/index.html","edc04c39df5075305ef49d66cbb01f4a"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","c6d38bc8a72e7e97d3c26d7ecbf0876e"],["/2021/07/15/Review/螢火之森/index.html","604479158f8b300a0a42d56ff93532c9"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","9691291e01a96a680b4e1321ab1463f8"],["/2021/07/17/Review/奇蛋物語/index.html","ee1d9465bd3dda371552e10ebb60559e"],["/2021/07/18/Review/Vivy/index.html","eaecbfeed2c9ff5d84157296a8626239"],["/2021/07/18/Review/請妳消失吧/index.html","34fbd858775a5edebfa7d57fd2a37de1"],["/2021/07/19/Review/漣漪的夜晚/index.html","583d1a30f471e715ecaac1d0d3803131"],["/2021/07/20/Review/月色真美/index.html","f86197ad851f0834b5a2e78d19a9522a"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","e0b0f641188405a30c5bbe462e84b8bc"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","3d98863216dd3615ab7bfe1bb52fbc01"],["/2021/07/22/Review/罪惡王冠/index.html","4bb6512b90c44fae05839062ceacf468"],["/2021/07/23/Review/弱角友崎同學/index.html","d15f33608a15706ea1ebdd520654a793"],["/2021/07/23/Review/惡之教程/index.html","171e76b46249df8925ea003691663329"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","b82c364358ea49e59bcb0114265d1ff2"],["/2021/07/25/Review/魔王勇者/index.html","5f5ef874372086e1b7f71196076416ef"],["/2021/07/27/Review/一年A班的怪物/index.html","f37cde4cdc7c956f4331b05dca746662"],["/2021/07/27/Review/奇巧計程車/index.html","abaf47d3b42877289ce4f531a47e416f"],["/2021/07/27/Review/專情的碧池學妹/index.html","acda7931bd4b80a88d7cbd1337cbdba6"],["/2021/07/29/Review/只有我不存在的城市/index.html","4d6fc5cb8f407998b406e486fbe563c1"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","1aafab02c9bb3ff058023cbad2c2ea9e"],["/2021/07/30/Review/可塑性記憶/index.html","0b5cc298fff8277850c1b9f619e80366"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","ee1707544ad46c19cc9e9b1a588829c4"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","234d9e6bc0a6e67918a8b1ebdfddaf0b"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","92bef324f7f0925dc506bfb22d749960"],["/2021/08/25/Review/清戀/index.html","8fbc08a62e493b38509fc99626328057"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","19c51c6d29afba0c62a48991504484bf"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","4a6dabd7fc593995204acf37ee94d414"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","d97dcfcfe655abc1e028038f3412112a"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","cb22446f72244a06460d15b540bde08b"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","2dc858b705a8ea9a3f2df4e40b493904"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","ba2e5e9e2ef465ab1c9e0ac006920ed7"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","81a1569d2c35744eaa9879d9e3bc47bc"],["/2021/10/16/Review/龍與雀斑公主/index.html","9dd675eaedd53632397b1ac41a605abe"],["/2021/10/19/Review/孤狼不想開後宮/index.html","909688ae618414e122547a57c330a045"],["/2021/11/13/Review/徹夜之歌/index.html","a062c32e87ab9d3f7225c5421ed7605b"],["/2021/11/24/Review/武煉巔峰/index.html","78aff8730d7a1177ed03b73ba1833f52"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","8fb96a2b2fa0b098c3cf90768b322d99"],["/2022/01/28/Review/神醫凰后/index.html","0a3a195650d806c51f3c1d6046377954"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","446ea35bc20eb5d41ecf643648e4fce5"],["/2022/02/13/Review/夏日幽靈/index.html","cd360d6ae18ca754f698b959a18176fe"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","5a2fb374c0544b6aeffc31c2ee4a32da"],["/2022/02/26/Review/賽馬娘/index.html","20d911fd6007a64606e512bb44ca8ba7"],["/2022/02/27/Review/大欺詐師/index.html","1df10feb2bb4902e38d47d747dfd9a81"],["/2022/02/28/Review/前輩有夠煩/index.html","4545be5988b6f60229acf95843278f81"],["/2022/02/28/Review/碧藍之海/index.html","8dc5fd9c88be28b78d14c28e5ca10ba5"],["/2022/03/05/Review/落第騎士英雄譚/index.html","eb8731f44a4249677b7d0a448448e410"],["/2022/03/06/Review/Another/index.html","f050dae5c6b9d58a7d260de9263fe8d5"],["/2022/03/06/Review/入間同學入魔了/index.html","4168beeef059496d641be6779ac4e181"],["/2022/03/18/Review/再見宣言/index.html","8e40a07fd3f8ab5caa63e00acac22d6f"],["/2022/03/23/Review/生若冬花的妳/index.html","a3459e9db89b1ef0152c1cbfa3c2e9df"],["/2022/03/25/Review/天之弱/index.html","a9f67d07e8884956afce75f90124a130"],["/2022/03/31/Review/滅了天道之後轉生/index.html","20f1516c9c0f6f7a8058d59c3ac28923"],["/2022/04/30/Review/泡泡/index.html","69e19a438e6ffa21798adeb953c6ae9b"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","c4eb590cd583eb0ce2128730db4172da"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","d31880644b4d4ed406a8cd88971ca46a"],["/2022/06/13/Review/偵探已經，死了/index.html","60b663d616d039792267f100be2447b0"],["/2022/06/14/Review/黑色子彈/index.html","24f0ea82daba93f630d35ebda108a96f"],["/2022/06/15/Review/黑白來看守所/index.html","7104e8ca8c025ccc91404770eafb5710"],["/2022/06/16/Review/虛構推理/index.html","3e45711e64aa7aee9312bb881dec2db0"],["/2022/06/17/Review/戀愛與謊言/index.html","522e3849df8b70c50fa88004eee14b7d"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","359e2e7844fe1f7b138086f33822f270"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","291e50c417836514be6a5dea5c190511"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","7648207fffe8cde15d8d7fb0b9c1194d"],["/2022/07/03/Review/Hello World/index.html","9e4960e1c36ee2fcae737be304ea0655"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","bfc12dec3ce0c2447ae74472f39d94fa"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","992755f1124eaa7a5dc9e6c461f80662"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","b9c0cb345a0f1f254445047a74aabb1a"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","4296236be7c1153ae714b33c755ed757"],["/2022/07/16/Japanese/動詞分類/index.html","bac7f1bc60e9aeea9ef5c86cf035ea33"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","e285013aaa1dbdc342f6c7ee03047605"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","efdd0175c5a2374f1481f0dba52c6d35"],["/2022/07/17/Japanese/音便/index.html","2c4073e1278c535541657a188d64049a"],["/2022/07/18/Japanese/動詞 時態變化/index.html","0083ad587a0c2d5bdb13a2b568a6fb38"],["/2022/07/19/Japanese/助詞用法整理1/index.html","cca3301c9fc735d46d82754b2564dc1a"],["/2022/07/26/Japanese/助詞用法整理2/index.html","72fd70e9d12287899c578a390e60f54f"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","bc840004caa700b42f9dce5cf4fb2815"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","ccbc8656ed8e50d07f12a629da21c168"],["/2022/07/30/Japanese/疑問詞/index.html","e17224eacbc6ac7344c17b82c75cbb4d"],["/2022/07/31/Japanese/助詞用法整理3/index.html","e472bb50954ace8ff513602f6ed64d81"],["/2022/08/02/Japanese/副詞整理/index.html","b1f39a29021021839336bdc461f95a0d"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","841cceea86f1c89d034d55648ccf6bf5"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","10b45e2d871c58b98efde30cac4f29f2"],["/2022/11/22/Review/組長女兒與保姆/index.html","36eba2995efff2f98ff7145e012c6d5d"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","cca21415508e5a2f9fd652a253454aea"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","f4e619df12eecedb1c4c9a3609f7903f"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","dd21bf56e13d2dd087cfd02afed4353d"],["/404.html","1a507294d504e5e0c559678aff9dc153"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","30f6ace706e0cb3c605120acdddaaa54"],["/archives/2019/11/index.html","f9f922bdf0b51d4bcea4bc7879df8136"],["/archives/2019/12/index.html","fdbe78b4e03294b10b4f335756869585"],["/archives/2019/index.html","f617da155fb9393e5590dca253d8f905"],["/archives/2020/01/index.html","68a4d77ad24ae9b904303ffbe0158145"],["/archives/2020/02/index.html","e179fb873598f343ba5443a0912b87d9"],["/archives/2020/03/index.html","e72a76903ee9342c72a4d5991ac17ec8"],["/archives/2020/04/index.html","76ff9bee43319d193aaaba0271b72e41"],["/archives/2020/05/index.html","567a5f720a60a1366cbdebbbd644f7c4"],["/archives/2020/07/index.html","24f6c9558d913cc6446788cce384feca"],["/archives/2020/08/index.html","5af3e515c6ac6279d63d636fb2b867cb"],["/archives/2020/09/index.html","ae24e16a483449abe7a3e1febf1f0251"],["/archives/2020/10/index.html","54eb032de2e523fe82ce0f823b733591"],["/archives/2020/11/index.html","272810c96599c7debc0a748da3cf8be2"],["/archives/2020/12/index.html","144d1f45830150d75c82692169d70a22"],["/archives/2020/index.html","7d38f90a4e616ffbb497f466b8b0161d"],["/archives/2020/page/2/index.html","73a3694fb2ec8f7fda0f782c1d195f0a"],["/archives/2020/page/3/index.html","3f686eb85fb2c2f88e597eb2f8f7fdfb"],["/archives/2021/04/index.html","c727fdaa0990d5314667617f8c053099"],["/archives/2021/05/index.html","0a7800b8f27b330eba27a618351297c1"],["/archives/2021/06/index.html","6e9325d940ae2bd8e3fc62f8e6203cd1"],["/archives/2021/06/page/2/index.html","900dba777c7a8d72c438b23aee4ac236"],["/archives/2021/07/index.html","ee0f8419f7e0a5474faa207e15e5769b"],["/archives/2021/07/page/2/index.html","d5950d5f9e61587168f010a61cd9d99f"],["/archives/2021/07/page/3/index.html","7d2f153f80dca4b542d1e5cda505198b"],["/archives/2021/08/index.html","6c4ad74669c8ad09917dacb6ea9ca5d8"],["/archives/2021/09/index.html","95ebbdffb891ddd11b88743b96b2ec7b"],["/archives/2021/10/index.html","38145b296a3b37f624ac45fb2e80c840"],["/archives/2021/11/index.html","909b38167c5cd6e943e57126e1d2f79e"],["/archives/2021/12/index.html","aa3d60e54f56e817eff2df3828e88bce"],["/archives/2021/index.html","928996c7e1dfc27ce40977d05e693d79"],["/archives/2021/page/2/index.html","064b5fb05215c41b62086ff0367f6293"],["/archives/2021/page/3/index.html","9b8ea93ea26aca14f61fe33076550913"],["/archives/2021/page/4/index.html","cf3ad548db88a20d885d19931f841467"],["/archives/2021/page/5/index.html","8388dfd19b591b7b14964794fcaf8db1"],["/archives/2021/page/6/index.html","58869fcd63b0e260847182d97802f2f2"],["/archives/2021/page/7/index.html","d15ce7a98225d30a97959e863e3f1d21"],["/archives/2022/01/index.html","69de84576abbdad831260aea5cf49ad0"],["/archives/2022/02/index.html","327fe08322f2b3d4664f045810b413b4"],["/archives/2022/03/index.html","b445ecc40deba6cd6a0d76a22b2a4d6e"],["/archives/2022/04/index.html","32107c4c1a1b0058a4f943eacfea6444"],["/archives/2022/05/index.html","883787a44f7f60aa00e6f6afb6dcf9bd"],["/archives/2022/06/index.html","320a3ca66591e0478aea8adc545d9f19"],["/archives/2022/07/index.html","0ead693bd5990419dd3a33561ab869de"],["/archives/2022/07/page/2/index.html","92cc82baf09956540ada90709f732e1d"],["/archives/2022/08/index.html","43a7ee087b73bb4fcd2e85f6c3814acf"],["/archives/2022/11/index.html","ca6414ce524732d00341e60e1d85d7f6"],["/archives/2022/12/index.html","87586a36d6997bcf5283c4c3dc647704"],["/archives/2022/index.html","6590c562caef05ec8711c8907be56591"],["/archives/2022/page/2/index.html","ec505e034086191ee75ad7f3982efc93"],["/archives/2022/page/3/index.html","477121fb7e2f452c04bf642c1a8e9806"],["/archives/2022/page/4/index.html","603ce85766d7dbaed53c8af856dee49c"],["/archives/2022/page/5/index.html","b68fd4284d55def74bf211181cba29a2"],["/archives/index.html","b68215f6b5f07dabc837f1ab9da5fa75"],["/archives/page/10/index.html","859a37f352a119f16c2e7579ad5b9223"],["/archives/page/11/index.html","3afc4ee2b84b1f9b0e10d4a8f055d0b6"],["/archives/page/12/index.html","cf88ad2a9d5447f0da55c423c895be0a"],["/archives/page/13/index.html","cdf25d87a735b9b537e84082891a89d6"],["/archives/page/14/index.html","ab5b237f008b960ec95b9bf54b80daf9"],["/archives/page/15/index.html","4b74bfdc1481c6bffc276554333ecc12"],["/archives/page/2/index.html","86a846ad9be4b21142cbd263eaa3a564"],["/archives/page/3/index.html","d7cc4839ecbbf95dcb32548e12e0fabd"],["/archives/page/4/index.html","2f3079c04445dc568c22d695af7817be"],["/archives/page/5/index.html","61a566bbd562b396cb39c0c91ae1ea91"],["/archives/page/6/index.html","8d67a15915058cf70e7e702109329eba"],["/archives/page/7/index.html","390f7daa6a9704ffe4527d64e7aa3eaa"],["/archives/page/8/index.html","9f75b361776e5fcb5e34deb489cd32a9"],["/archives/page/9/index.html","d9f4ff5c88927c15d6140fc835febd1b"],["/categories/Algorithm/index.html","3708213f5ca1d1dd2d75ee5defa178a1"],["/categories/Review/index.html","4edcd7761f9146b85b8a43ee5d67d4cb"],["/categories/Review/page/10/index.html","2abcd36ede189f8d1336b44876b7f391"],["/categories/Review/page/11/index.html","cbc835aa767a52657e35e49878a1229d"],["/categories/Review/page/12/index.html","d350be98ac70a149d046a617bdfe6e9a"],["/categories/Review/page/13/index.html","2557dd51a8e38982ec29aebc89e12b86"],["/categories/Review/page/2/index.html","9ca0a16b1f96ce2a3ac1a4661a5fcbdf"],["/categories/Review/page/3/index.html","6095e0713fb1f3a3559fdbd5b5d1801f"],["/categories/Review/page/4/index.html","581d70c58ca6c6422c88be98dde816b8"],["/categories/Review/page/5/index.html","e44f41ae6dc5b927826899f18a25493c"],["/categories/Review/page/6/index.html","8a7ee2ad46d03e412418519c7269b7b8"],["/categories/Review/page/7/index.html","3ff05d4eee871b610c900601596da13a"],["/categories/Review/page/8/index.html","5e4d746cc5872454ea5f04a3c870ec8d"],["/categories/Review/page/9/index.html","5a2a1a6f40d9a0fa6f4ab12365b75a74"],["/categories/index.html","5a6ee6577cd9c0ecbbd6053867bf4af4"],["/categories/日本語/index.html","b8d1c7fd002c47ceae76a217d4caea3f"],["/categories/日本語/page/2/index.html","ec9237762cbcbaf8a792aa6d55a4adfa"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f57e937dcf3b0f64b072ff344d34ebae"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","a2504492f1264b3f803f73d4281cc18f"],["/page/10/index.html","f89121623cc03f17116f2952515d157f"],["/page/11/index.html","de3d962c75e337efdee2106ef9fe1267"],["/page/12/index.html","d3425a150dba77501037086879716db7"],["/page/13/index.html","01546896b42590d3c652df8f20c721f7"],["/page/14/index.html","7608fc0cd6c8fe2ac01d2b6c5cdedebd"],["/page/15/index.html","5f7675b4fc3ec0bbca3c67ef938f0cb0"],["/page/2/index.html","b62023fbf57e045f51fec4ed8bdbf239"],["/page/3/index.html","5afd76512e4dd93eaf495df414ae7782"],["/page/4/index.html","dfb5aa2c8b73f5bd9fede33343582e65"],["/page/5/index.html","8a8d80538aa44ba612dabc70f46f09d8"],["/page/6/index.html","26016e412b878177345b7671ddde7d82"],["/page/7/index.html","a5aabeeb4cd4b0e371e0ec987b37addf"],["/page/8/index.html","1450877e82ed0ca18bad8326f8ceddb0"],["/page/9/index.html","98f4de68b228c4512bfd1acb86a70e4d"],["/sw-register.js","30060532b8b1722f5840e00f046cbeb4"],["/tags/10分作品/index.html","665e676141e1b609eccb702dd8233f28"],["/tags/3分作品/index.html","8c7e1829d36fa38480d92876adca9414"],["/tags/4分作品/index.html","280e39fc8f08baf08c615adb6aaf556e"],["/tags/5分作品/index.html","6d1f3991af8a7b3cadc47b9b2ac0b44d"],["/tags/6分作品/index.html","30c5af5c37adf645315716e65d628e51"],["/tags/6分作品/page/2/index.html","29845863e80695a753b26bb9c0dd6978"],["/tags/6分作品/page/3/index.html","ccd9f16539c4b6dd96d1977c822169ef"],["/tags/7分作品/index.html","8067eb7e48a4736c0440d094685a3f65"],["/tags/7分作品/page/2/index.html","4c0d074db93419149b00d4b150da4237"],["/tags/7分作品/page/3/index.html","60055685b7e1a4681eeed7afa6e31899"],["/tags/7分作品/page/4/index.html","f14b9376c535606d85d02458343a6083"],["/tags/8分作品/index.html","2a1f9fd7b043a4735d9bf03b4f50a287"],["/tags/8分作品/page/2/index.html","adb756396538cb139bf4fb87a39f0557"],["/tags/8分作品/page/3/index.html","5405da299ff274116fbbf7a2f9c9d624"],["/tags/8分作品/page/4/index.html","54fbdacaa8025d6d9d87b576ddf511ef"],["/tags/8分作品/page/5/index.html","a834de2a5897b860957e86f79a6752e2"],["/tags/9分作品/index.html","e6426d15bc385465e611b84cfa8c9272"],["/tags/N5難度/index.html","a5e23fd8ad142f5ec73629e61b165c1d"],["/tags/N5難度/page/2/index.html","6ea0fe0db7bd920190f5b41473b86789"],["/tags/index.html","13ad86aa5e170c61528c5e5e26a4c751"],["/tags/アボガド６/index.html","2831aa88788b45aae8dec9ce0473ea44"],["/tags/三秋縋/index.html","4e00c1b7cb57671e1f250fe26927e5d7"],["/tags/中國武俠/index.html","92ce84608270955dc1b4e6759f301b64"],["/tags/中國言情/index.html","9d89bdcb8bc75b9ba23b98bcdee7fcc9"],["/tags/二宮敦人/index.html","d41269ea925ab09616be9896c3087942"],["/tags/人性/index.html","fcd9e4c707601b43813402dcf6116dd1"],["/tags/人際/index.html","b0449bc09c6367cc030e024e89b26f58"],["/tags/住野夜/index.html","836cd20ef3270e7c8e9ab86fcd0bfc4c"],["/tags/佐野徹夜/index.html","1920bc0c36c6edc6b911b0965619e5d7"],["/tags/努力/index.html","c8740671ca65b85a8d2b8ced37aa4d76"],["/tags/動畫/index.html","a214e6e3d8e01c5763855f104408d1ed"],["/tags/動畫/page/2/index.html","ab188d987b793aee9dce4307d11bf574"],["/tags/動畫/page/3/index.html","04e8dc7a300c527d12519bf4ec455226"],["/tags/動畫/page/4/index.html","1f9cd49ebfc2ae2b80e871483e5a884b"],["/tags/原諒/index.html","e5c248565beb20ab88ad6be9b8387da3"],["/tags/反烏托邦/index.html","f11341e31a85e6eaf5034065f311033a"],["/tags/啞鳴/index.html","6e24350f64c34d44fd728016b5053203"],["/tags/喜劇/index.html","e9eab6fc2aa484a8a9a59d1e77565449"],["/tags/夢想/index.html","5c62f4e5796b4dbfb4523eea8b250667"],["/tags/天澤夏月/index.html","b769b5dc2d49dd4ce96ea4a7359f267c"],["/tags/學習/index.html","3366a4e6095c791fa142c086910bf4cc"],["/tags/學習/page/2/index.html","d6f553d61281262ef2ff759ba95b8f4f"],["/tags/宮崎駿/index.html","62a875e5d5eb903ee80edc54fc8a5024"],["/tags/小說/index.html","f763deee98c731149a105a02266a52b9"],["/tags/小說/page/2/index.html","14c9dc6d267c82da599e21552302cec9"],["/tags/小說/page/3/index.html","01eb5ef54aa0e519a9e4760e2580f01e"],["/tags/小說/page/4/index.html","0489d4994ef4fef3da0c86d9262abf13"],["/tags/小說/page/5/index.html","32cf138cd06b1f9d59956c977364a5af"],["/tags/小說/page/6/index.html","4535602cbff988a904a4aa5dc5abd621"],["/tags/小說/page/7/index.html","73144f89612fc78b32348b338b7ee5df"],["/tags/平淡生活/index.html","712fac6ff9d2d6e31964da1359481686"],["/tags/幸福/index.html","86614c9e16de34b4d3a115085aa79e8e"],["/tags/志茂文彥/index.html","7d2c2a6e2f4991a941acd49fd8fc9a63"],["/tags/愛情/index.html","25bfc1e96c9b099e79caa3869af748c1"],["/tags/愛情/page/2/index.html","a4052d755c92b6faa3b0fcd9c3270231"],["/tags/愛情/page/3/index.html","ff46d4e579d11673a628ac8e60731b25"],["/tags/感動/index.html","c1dc11bd73a4ba3f05e2c0a220d913d0"],["/tags/懸疑/index.html","ecef2a557b245d62bbcd5d3dd3e8af4b"],["/tags/懸疑科幻/index.html","493aec0f590945e28388ceb07ab39afa"],["/tags/戀愛/index.html","57d75fb60ba1b2e3158901da73d5413e"],["/tags/成長/index.html","6e89be3febbf71fd8f8886345eb6ed3e"],["/tags/成長/page/2/index.html","e58ee1d080351ed492820e776ea24734"],["/tags/戰爭/index.html","49787389c36be3f50d769e7661204b99"],["/tags/推理/index.html","a3d7674f5c7534bed70a824fb63cb7a2"],["/tags/搞笑/index.html","fb88aecf8c08265b954fbcb7ca03c0bb"],["/tags/救贖/index.html","7078584dd1f98d407950ed810d7b9ab8"],["/tags/斜線堂有紀/index.html","dc46ee0270006169b35642e80979694b"],["/tags/日常/index.html","03c9234c394ad71a00e46e37e8c488b4"],["/tags/末日/index.html","96ed87ad3163da098f69c8c1de58fdec"],["/tags/校園/index.html","8337be625c7363f45590b1c815ce5b30"],["/tags/武俠/index.html","5ee438a0331102b43797860af35ce3f7"],["/tags/武俠言情/index.html","ee52f6523398f4bf4a295874236ff256"],["/tags/漫畫/index.html","da3415434eecc4ac32d79028a4ffb07b"],["/tags/生命/index.html","7bad97521b92ecb7a82433d60f4c2323"],["/tags/生命/page/2/index.html","fbedf20f9370f81150bdc1e304e5b16d"],["/tags/短篇/index.html","d90ca46dab266a225bc685c3d6979da0"],["/tags/社會/index.html","dcd08d7809c72df5e05c0be8c1a9f2bf"],["/tags/科幻/index.html","8d964d1480b499a3313a43b3e04e2df8"],["/tags/童話/index.html","35d166ad1f102e580aceb234c689f604"],["/tags/競爭/index.html","9ec2743c10a7777dcee8f8df367d7260"],["/tags/自我/index.html","5bf1da061000a36bd4801d4894a5f08e"],["/tags/自我認知/index.html","0a48064aee8cc8634b55370e657387c6"],["/tags/葦舟ナツ/index.html","7569308b461e2f42dda7301328938e6f"],["/tags/藤萬留/index.html","fb0f003b5bd421e4f3dbd1ab1484df59"],["/tags/親情/index.html","5e3ae3f69cd5891033e8da1d2a1affd2"],["/tags/雜項/index.html","8af1132658c6f0cdeb70131c7255a38d"],["/tags/電影/index.html","4d407bb7423902278f62e611b7854df0"],["/tags/電影/page/2/index.html","3a2a8282f0056b612df1dc2116641624"],["/tags/霸凌/index.html","7ef03cae430c5fd9af256e009e124340"],["/tags/青春/index.html","058cb56942ce15394ea4075a6f5e93f3"]];
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
