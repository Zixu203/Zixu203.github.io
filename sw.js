/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","2d3a037d3ffda88436ee87b1a8091d40"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","010ecf1613e723c152fdffa34122d90e"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","e733a74bc3178992cade483bc60fee1a"],["/2019/12/25/Review/無法計算的青春/index.html","1c32df2d459a1326ad52173608abb7b7"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","cc279f51d8d9b46637e6e8d1ce5856fa"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","206ab83dd97de1ba207c3ca281bcf6d2"],["/2020/01/19/Review/下雨天，不上學/index.html","ae6da0ef77c676182e4dca3a2f842804"],["/2020/01/26/Review/三日間的幸福/index.html","5b733d7f62cf047494881ac3d961dc62"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","4d28b1dffb7430cc9ddee4577cde9c03"],["/2020/02/09/Review/青春期超感應/index.html","45ca13a13eb3daa4c2ea72dae0b889b9"],["/2020/02/15/Review/又做了，相同的夢/index.html","ed787dd0ed09ac15796f1d49727b6d8e"],["/2020/02/22/Review/回憶當鋪/index.html","731ee129379997843dade40f10be42df"],["/2020/03/22/Review/不適合自殺的季節/index.html","2deab0445ffbbd4f93e51e6104cdebf4"],["/2020/04/26/Review/我們都無法成為大人/index.html","0245ae959cacb8de66f52bc2998f9708"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","4841910f14611b384ca0793705e93a15"],["/2020/05/17/Review/人間失格/index.html","d7bc1a8ab7696bfb9259d4caa4a49156"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","e939ac44551ea524f675462246f2b98c"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","263954b3919f0ea03298e553361ce438"],["/2020/08/01/Review/銀河鐵道之夜/index.html","faec451bbc1a8093c91e10b9385b92cc"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","af236a201ae9882ce94383c613aff9f4"],["/2020/08/16/Review/15歲的恐怖分子/index.html","3a593bdc12977a6c1e0f3829a735ef4a"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","527b3546c3afa247df834a19dc1cb733"],["/2020/09/13/Review/羅生門/index.html","956bdfc343d708191e36b0b4c5bc6d8e"],["/2020/09/20/Review/闇夜的怪物/index.html","1e105ad075af1efc9b996e7ce42fc0c9"],["/2020/09/27/Review/14歲，明日的課表/index.html","621cb61c7dc1021d11889a4dbf162d3f"],["/2020/10/04/Review/致十年後的你/index.html","5629b3e980f24cfb3d55e743511c520c"],["/2020/11/08/Review/滅絕之園/index.html","6c56dfdfb3939e9b8012f372c6002071"],["/2020/11/15/Review/將愛拒於門外/index.html","112cd76947bf659f4e8f4075d09198bc"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","23c98b6b6010c868df51e439d8ef4a83"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","bb3fc8e326b98737de3fc8a98ddb30b6"],["/2021/04/22/Review/道印/index.html","4be5a72b28060ae9f562bcdebe570d97"],["/2021/05/03/Review/戀入膏肓/index.html","069494bc564cddc2b94e5764cff8bbee"],["/2021/05/10/Review/Dice/index.html","b9540b4c810f7ee8557c92885c25cf8b"],["/2021/05/15/Review/魔女之旅/index.html","0bf8c1f5561c4acccb84fa4d691a0432"],["/2021/05/28/Review/戀愛寄生蟲/index.html","e90601ac5beadd183ef7631bcffbbcae"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","89cda5667b3199776e553ef2b2b57a81"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","4741966d33eb2adcdafe223209a096a2"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","c1b33beca98656d4d44cfef883d2bd62"],["/2021/06/05/Review/流浪的月/index.html","4e88867add106d911b0f343ad2a43568"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","53522022722181e71a93bee8283e791c"],["/2021/06/13/Review/第一人稱單數/index.html","e1ee44fc8382f51d20d9ac0fb045053e"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","fbbfdf63269c7b6da11aa430122e5f77"],["/2021/06/16/Review/願你幸福/index.html","bf1cb9200e377ea1b738c2417ad2827c"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","d73739cfb5a6ac349d33700fc2435c17"],["/2021/06/21/Review/神隱少女/index.html","05f42d1490ea75628b686dfc91dea1ab"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","e212218fcf31266d2deaf7698b6f7bd2"],["/2021/06/23/Review/天空之城/index.html","2d6185a7aee171bc6eaf803f4c0a60ca"],["/2021/06/24/Review/魔女宅急便/index.html","08cadec98fb9f25009f1e38366450bd9"],["/2021/06/25/Review/借物少女艾利緹/index.html","4be6967d17247437b5208fa1903201b4"],["/2021/06/26/Review/魔法公主/index.html","c60f9543b6084586fea551711e06c30d"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","666f690a214f8f9ee48bb3aa88fc9f2f"],["/2021/07/04/Review/飛雪與劍/index.html","c47fb97afda5b269b09c7f41076879e4"],["/2021/07/09/Review/地球防衛少年/index.html","44b9447e136ec96107a14d3073611c82"],["/2021/07/12/Review/Angel Beats!/index.html","9689d4e423a1b4faa4b0a77baf7b20a1"],["/2021/07/13/Review/Clannad/index.html","2304e7f4f8f4d5b1b8bed461f0fcb736"],["/2021/07/15/Review/AIR/index.html","bc9dc7395ef2ca09fccf9b17c561189b"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","8fe479ffd6c333163d760f2128aa5697"],["/2021/07/15/Review/螢火之森/index.html","3d91c98eaa4e686813ce03145a8932d3"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","5b168b3ee120071f6552c00735bd2194"],["/2021/07/17/Review/奇蛋物語/index.html","f80cfe3fb32f97634baae73e57884fbc"],["/2021/07/18/Review/Vivy/index.html","047f3eac8239cda6e1fef5eef5ea179a"],["/2021/07/18/Review/請妳消失吧/index.html","ebacf9d11388ec1080d58589c6cc21c0"],["/2021/07/19/Review/漣漪的夜晚/index.html","498548170af96542bd1491ed91e9357c"],["/2021/07/20/Review/月色真美/index.html","3335afc53f38c0aceed3e17b2325ddec"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","edfd186e8d9e528f7cd83ac3323ad276"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","c859a302da38ab5ba96ddead811329ac"],["/2021/07/22/Review/罪惡王冠/index.html","21f7f49cbbbb6ffc8f60a142cdfb60e4"],["/2021/07/23/Review/弱角友崎同學/index.html","c9ff0b1fb898244b2cab8ebb8344eb16"],["/2021/07/23/Review/惡之教程/index.html","9e008c94af60e6d44c1917858e046a53"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","eeae9f5487e9603aab4089f7a016323b"],["/2021/07/25/Review/魔王勇者/index.html","5275ce447c4468c1a721b6fc9f7ec00a"],["/2021/07/27/Review/一年A班的怪物/index.html","a14617d9d79836ebcbf5a653bd801de2"],["/2021/07/27/Review/奇巧計程車/index.html","64b8762d6a3605754c8a96674436df6d"],["/2021/07/27/Review/專情的碧池學妹/index.html","8c6283aa3ca8604742a791d16487ed3c"],["/2021/07/29/Review/只有我不存在的城市/index.html","506a2cf2d0abea38fd648afeb3909100"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","387f723c62b4497fdf66be3d8a0ebb3c"],["/2021/07/30/Review/可塑性記憶/index.html","612e36f4372e410c33bdb03ef68af2fc"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","72d1430b81e783cd1b8393145b245aac"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","02e880561ab3face666ebea0e32b5a97"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","6586d07672570098b26f03fbb6a48472"],["/2021/08/25/Review/清戀/index.html","36ac63ad97481711707d2e0bc088ef22"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","5b1d386c89f277fcecf87ca097491a59"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","603d2fe3d5e5d0581f1ad2e4d82c1ab8"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","8969250c93bc12e45186022691b609b0"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","41b8218a35382908a1799f377475b902"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","bbbdc1a3385ae90c2646b7bf5817ae14"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","cb8b17d0de78daa137865c4c8b3af0c0"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","8e55bd1ec14f86e45c78bf367cf917de"],["/2021/10/16/Review/龍與雀斑公主/index.html","6e145a051a76f51db37b6d40f640392c"],["/2021/10/19/Review/孤狼不想開後宮/index.html","abbf6cd593bc19dab7cf939a8b4cc54a"],["/2021/11/13/Review/徹夜之歌/index.html","e9f18f7eb64791fb99e5b42f60bea141"],["/2021/11/24/Review/武煉巔峰/index.html","d3239ee6db5fb783dea0e8b6b8692d57"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","0e6fd0b53d1bddd72c5a99747f55c231"],["/2022/01/28/Review/神醫凰后/index.html","8caec79524f9be68c151156525007d88"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","b2db1c9991b55b8ed19b8f42a6b0cc96"],["/2022/02/13/Review/夏日幽靈/index.html","e6534b8dc6760d3e06205f25bf80b64d"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","adae85490bbb3adc1cad1ea860de8351"],["/2022/02/26/Review/賽馬娘/index.html","580de1d108a4d0801119bb2cf70f745c"],["/2022/02/27/Review/大欺詐師/index.html","2caf365b2d5f948da29203775d85d23c"],["/2022/02/28/Review/前輩有夠煩/index.html","caa78b49b86a0674851875001bb947df"],["/2022/02/28/Review/碧藍之海/index.html","20b1f57bc0a7df82f453d1116e60d981"],["/2022/03/05/Review/落第騎士英雄譚/index.html","0bb85b20dcde296a3ee3eaedefd1a5ff"],["/2022/03/06/Review/Another/index.html","86092aea9d28ca590971394dffe87e6b"],["/2022/03/06/Review/入間同學入魔了/index.html","e0a4ed15ab788d349043d28b8b41d366"],["/2022/03/18/Review/再見宣言/index.html","0ebb6dc08c80b6b971092bd7a183783c"],["/2022/03/23/Review/生若冬花的妳/index.html","1d86640301a9e4a21b0e8fabde2d1c2e"],["/2022/03/25/Review/天之弱/index.html","0dd646c81b3d895ac3819b6a97d79313"],["/2022/03/31/Review/滅了天道之後轉生/index.html","3336a598422a9bd3e3f1145b0ec0db77"],["/2022/04/30/Review/泡泡/index.html","9d88d03d64f49509df4bfc51293db977"],["/2022/05/04/Programming/Dynamic Programming/index.html","ca0f7ea7e40fdf96311b4be726f551f6"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","8e08476db69ca9e0a1cbb6eb98102e34"],["/2022/06/13/Review/偵探已經，死了/index.html","cf62f544d684ced986fe03bca53d9b3e"],["/2022/06/14/Review/黑色子彈/index.html","9244712ecf948ab4444a36cbab3be98f"],["/2022/06/15/Review/黑白來看守所/index.html","de7717b432cee0f1f7ebc139d9ada581"],["/2022/06/16/Review/虛構推理/index.html","ac86ecb2fb74e609d44ade0b67a85169"],["/2022/06/17/Review/戀愛與謊言/index.html","4634da364cf602aefb2f2bdd875550cf"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","8f55844e7b09169baa19d204e422783d"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","86ea573ad7c4ee597c5e266f6241a8a6"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","f27c1240c40399e05e31e34574cab1bc"],["/2022/07/03/Review/Hello World/index.html","8559cfbe8f10ac43304d20c955855377"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","6dab579a493ff45fa8bc3133fa08e3ca"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","f4055c897d3f696e29f9acc7f9f8c7ad"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","fc450f67c5319a650026a53b44999474"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c350c6f0962c8c633a45baab2b334792"],["/2022/07/16/Japanese/動詞分類/index.html","364e26ad8d4d458bf5bbcd52058f51f1"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","c45a5ef42e1b51f4aa93496dd2b35be4"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","423d6aa96c916024a9688b83e5c2e674"],["/2022/07/17/Japanese/音便/index.html","8f038bbb392f4df8dc0a2335a008478e"],["/2022/07/18/Japanese/動詞 時態變化/index.html","6db363c4dae86032839ac1babfb148b6"],["/2022/07/19/Japanese/助詞用法整理1/index.html","0148982aae1a9bcd5b394714cfce1d37"],["/2022/07/26/Japanese/助詞用法整理2/index.html","14c637aa14d52cb3e84f100778059d96"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","b84bf6225f0954dbda8810ad2fdb3b56"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","a902f42be52407e4c6ac88fb3f73d668"],["/2022/07/30/Japanese/疑問詞/index.html","2699c713a447a3570f74c2936c9408e7"],["/2022/07/31/Japanese/助詞用法整理3/index.html","4721a09774d2984a4428543123617a43"],["/2022/08/02/Japanese/副詞整理/index.html","40f5085a9d85d00db3009ad2ba8311a1"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","c3c90ee9064ef7139f08340a7e3d1d0f"],["/2022/11/04/Programming/Data Structure/index.html","b4f1cb46e84c03ae4570ff812f089b72"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","9deb393a414c5376a118ae57b4405542"],["/2022/11/22/Review/組長女兒與保姆/index.html","785e25bc1cb7362b183d4a8401c3a08a"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","62dca0df837a1495190defad07f03b49"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","1f0cfde8b38416bcdad5a2c49a9e3859"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","635ae2afe101db00ab05de009797301b"],["/2022/12/31/Lyrics/一番の宝物/index.html","b6e569fb71dfccb62e332fee6c62c3f1"],["/2023/01/01/Review/あの夏が飽和する/index.html","64d6c6c3f70bd5e99df5f03ddf3d646d"],["/2023/01/02/Review/孤獨搖滾/index.html","6e0828298b3d9317eb69222f26bdc61c"],["/2023/01/03/Review/來自深淵/index.html","22dd679e77b464889f7c8fdd3097abe5"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","417317483faf221cd01288cb60838c05"],["/2023/01/05/Review/處刑少女的生存之道/index.html","970007172566a1c679b753ce4303e3d7"],["/404.html","2b88239ee8f50ba4e0cd675b0d0217d0"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","7e9905ba750586181899df010e93cd30"],["/archives/2019/07/index.html","21a02bc6648751a29e02a17c1e73ed74"],["/archives/2019/11/index.html","227888e25aa3cbb208724aba4e2389e9"],["/archives/2019/12/index.html","0c79142f9402cbb385f0521ba1d171e4"],["/archives/2019/index.html","05e8c85936bdd2ef2e37c0a861af7442"],["/archives/2020/01/index.html","5a5a74c44f168c28e3668a160a0949ed"],["/archives/2020/02/index.html","2d523da0c522c3ab356b358bdbcb4704"],["/archives/2020/03/index.html","5b7f8039f708662b48aa1dbda5849c5d"],["/archives/2020/04/index.html","9d56aba91f418ccdd7ed2515ffea303b"],["/archives/2020/05/index.html","8e46d591ded6469f652c17878c074136"],["/archives/2020/07/index.html","824b8bed9144f987955a0bcd9b251820"],["/archives/2020/08/index.html","328b1d707f8c7af1d8af282fbf22bb33"],["/archives/2020/09/index.html","d83949f11220bb646954e4c120970b58"],["/archives/2020/10/index.html","80fcc6b0842352810da743640ad9335d"],["/archives/2020/11/index.html","0c79b27232d30aa45c51822d42172e8a"],["/archives/2020/12/index.html","e50292eeb378b459c4de40c9753b03b6"],["/archives/2020/index.html","9559476d1fa76a3b56e69f94e1f43703"],["/archives/2020/page/2/index.html","5b6c32dc46c22da5fb3b407f95929807"],["/archives/2020/page/3/index.html","58cb6918a7764ffa665ada585d8d0a86"],["/archives/2021/04/index.html","1bcde21b303d9c601121327b13db5845"],["/archives/2021/05/index.html","c5c79c4e726a1d9f591226938da29def"],["/archives/2021/06/index.html","0700bed6f1754f9a65ca43349a5c56b8"],["/archives/2021/06/page/2/index.html","dd9ea1492d83fe61f12605e765305a97"],["/archives/2021/07/index.html","2a4267cc73facab2bbe56301fd68a3a0"],["/archives/2021/07/page/2/index.html","2cb6e3689df51ef106a602b65264b743"],["/archives/2021/07/page/3/index.html","88f2424336dde74975c540b24d8f512c"],["/archives/2021/08/index.html","9cc56e2c6ba5a0dbf13e8b2e19d05868"],["/archives/2021/09/index.html","6833cc0bc28314df7343cf2b66a3205f"],["/archives/2021/10/index.html","520bfd860f67cc2b2b07dd5c15accee5"],["/archives/2021/11/index.html","5c928bf516cec78a99dde5b172b9afb8"],["/archives/2021/12/index.html","6194dd7ed3d28912d9e4f28a0ef7fac6"],["/archives/2021/index.html","0dac57741732932dfc6fed8390c3ce87"],["/archives/2021/page/2/index.html","24b2ca712f25361f69826ffa58968b1f"],["/archives/2021/page/3/index.html","6fd9364fe29628c4d32d46dabaf4ae40"],["/archives/2021/page/4/index.html","2a37b0da59c1771a980e573fb3503ead"],["/archives/2021/page/5/index.html","42ede8126538f76a4b8f9d8590336b59"],["/archives/2021/page/6/index.html","fcb67e10b5bd9047befb8539b9d2672a"],["/archives/2021/page/7/index.html","769225ae1a3fcf3501177647a4b70918"],["/archives/2022/01/index.html","67b7ff9f66ec82a31a045dc762c4e2b8"],["/archives/2022/02/index.html","638aabd753af85e025049923cc29f9b0"],["/archives/2022/03/index.html","f7fbdc843d21df3dc6329f973d74f35b"],["/archives/2022/04/index.html","33262c12783d90b76f8f91784f9bacb8"],["/archives/2022/05/index.html","628adac0c329d70fd5025f098c9bcbc8"],["/archives/2022/06/index.html","3a6f74871aafb96d56ddd48a001f1c78"],["/archives/2022/07/index.html","5d94236ccf0285fdf2cddf69047f3146"],["/archives/2022/07/page/2/index.html","dda2b5e22fa4a12c8a5561401548e9d4"],["/archives/2022/08/index.html","24f8779ab88734179d26d6521ee24763"],["/archives/2022/11/index.html","3499550c2ec63bb2012b8bd9078d27c4"],["/archives/2022/12/index.html","da83acaed92d4e2323532ce676261b82"],["/archives/2022/index.html","e8cdeb47d9fc01e4a62b9a3157625495"],["/archives/2022/page/2/index.html","5ca49b275b5f3a431384d5633ea1784b"],["/archives/2022/page/3/index.html","d21bc235b52f34fac1e45ff63eab9f4e"],["/archives/2022/page/4/index.html","636d555316b81faeb5621af1e5bdd0bd"],["/archives/2022/page/5/index.html","1e910e5866ee928cfe1de110b63fced3"],["/archives/2022/page/6/index.html","8ed259f88de1c28e3c647b0681431c9b"],["/archives/2023/01/index.html","916402274e2d92164c9cbb2c32dddcd5"],["/archives/2023/index.html","db31a6d9bb4b3508b191c9326c013133"],["/archives/index.html","b2b866a224569fbd71d5666f99b0090c"],["/archives/page/10/index.html","f8238a191a8f3f94f847f52d6bbeb789"],["/archives/page/11/index.html","82b84ed523c105f1899a1557b0661867"],["/archives/page/12/index.html","c6cac6c9d579dd5f26ac5a1d3522be4a"],["/archives/page/13/index.html","353d772f9918f4f4427752ef36cfb07f"],["/archives/page/14/index.html","38e2a087a287b54fdb8540119e7588a0"],["/archives/page/15/index.html","1558569b5f8fb41e33681df384498387"],["/archives/page/2/index.html","843b33369e90dc063cd63f6584042eb5"],["/archives/page/3/index.html","b1edcc2f679e0106626baf05259f7004"],["/archives/page/4/index.html","a3b39bff93351a41a1f4f7400aec9266"],["/archives/page/5/index.html","29e4ddd9076d255dada459282477a59b"],["/archives/page/6/index.html","88acc89f91b8a923e764f65e113f83b5"],["/archives/page/7/index.html","fa460c1a20ac987d2a24be8caa6be92b"],["/archives/page/8/index.html","6a896ef309386ac697453be9c2223364"],["/archives/page/9/index.html","c737758b20f8ae5b7ed8b5d541d45825"],["/categories/Lyrics/index.html","72da4d0d34998e5d94ccf00e489e9899"],["/categories/Programming/index.html","6fdbb7f3df53579dc1f3d339ddbbdfd5"],["/categories/Review/index.html","5a443c3ad05058fda743109b83958861"],["/categories/Review/page/10/index.html","b0a4c0f777b4528442c7b1cb3dc92f38"],["/categories/Review/page/11/index.html","80925511bcd5e42d82a170e25a93bb72"],["/categories/Review/page/12/index.html","62c4e933f42c0b3f5f15c6c89c61f3ba"],["/categories/Review/page/13/index.html","1985171f0c4b56bee9af1842c36ba7df"],["/categories/Review/page/2/index.html","fa78c8b086be537954a3867131ac9844"],["/categories/Review/page/3/index.html","65ac9a5f9b4a440182add7ae2a9be679"],["/categories/Review/page/4/index.html","790752b1b8fd983d0111d1860f187876"],["/categories/Review/page/5/index.html","01fbb3c36b283251a77e039459506d97"],["/categories/Review/page/6/index.html","01b927d3785d28e0d973a5e46a2513e8"],["/categories/Review/page/7/index.html","1b6e437f1f7e076afd109b999b20357a"],["/categories/Review/page/8/index.html","0d3f5ce7865cc79c4e3903de49bf5da6"],["/categories/Review/page/9/index.html","0109623f45bcce1215b30639acb526aa"],["/categories/index.html","b1b757888925a004edd4f651e0905587"],["/categories/日本語/index.html","eddd4f2b22aa9addfefcc2a8883012c1"],["/categories/日本語/page/2/index.html","524b2b59e3f47dccfc1c004d73ac6645"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","cd2ea4177dc2b187721cde4b7a183c5f"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","24907de8607fccc958930afd8da8f16f"],["/page/10/index.html","e302b52d5de32d726bf9f4ee7c1227c9"],["/page/11/index.html","4ab1120f6c09bfc9d13af398483fd112"],["/page/12/index.html","ab8213f9b2bc229a907025a73b0c907e"],["/page/13/index.html","b854b21e422759979a7fd5926af9e722"],["/page/14/index.html","e81355addc9b743a553efee5a37e0f61"],["/page/15/index.html","7d59ebfc0b42b0fd8851956a3dbe9da1"],["/page/2/index.html","bd654c6448d03f72ba9513935006a6de"],["/page/3/index.html","e23b1c9963a37d35c48f381d5b8ac4bf"],["/page/4/index.html","b366e21ae0f474661464991b36ffad89"],["/page/5/index.html","a09d0db5c629934ace71a13ad402aab5"],["/page/6/index.html","5b8100a47d43dc3e1d169399ec914478"],["/page/7/index.html","497da7cdbe7abe34b3469804bea6704b"],["/page/8/index.html","a345ebcc9e084547b5c54b802d0d8b46"],["/page/9/index.html","c7412218e4a8019faf58dfe7617dcf3a"],["/sw-register.js","ec0e55894bf96944b2c8a45353ee2224"],["/tags/10分作品/index.html","4ee0f1ece3037bf00c27e6b75d9cc3d8"],["/tags/3分作品/index.html","1f1ffbfc84fbd79e229aa1d7dd96d9ff"],["/tags/4分作品/index.html","1861eff38c85ddc41c0a069045858ad1"],["/tags/5分作品/index.html","273d8c65197e99a80ce518f32e27259b"],["/tags/6分作品/index.html","1a8cef736da68c7a6b66e31d3c8844fd"],["/tags/6分作品/page/2/index.html","8ecd0dee857713550341fd723832be1f"],["/tags/6分作品/page/3/index.html","1efc88340b26c8432284f9d32081ddce"],["/tags/7分作品/index.html","06b485a982134c36bb1ea2b90280998c"],["/tags/7分作品/page/2/index.html","ddb9804090b5c70e64aaf54544eac5d9"],["/tags/7分作品/page/3/index.html","5027909e16b616ac300f60e55daf7b18"],["/tags/7分作品/page/4/index.html","783d311f13c0610cbc715a5504bc3b86"],["/tags/8分作品/index.html","5353eb85c76f541e18440af2d4a56aee"],["/tags/8分作品/page/2/index.html","5a688bb8a1e0d80a61be6970a168433c"],["/tags/8分作品/page/3/index.html","6164b4e05a0a787cae48ebc00e2db04f"],["/tags/8分作品/page/4/index.html","71f48e577c848d565fbb05eb70b50f86"],["/tags/8分作品/page/5/index.html","d8784ebb12af856905622579479ff37d"],["/tags/9分作品/index.html","3a042b2d5a5e105799a30e0221b2a9d8"],["/tags/Lyrics/index.html","5663f6b1b7c8bcee1d0263a7bf738585"],["/tags/N5難度/index.html","180099db0c276592a773912742e14c33"],["/tags/N5難度/page/2/index.html","1861e0fd3f9602a54849c650a0f60086"],["/tags/index.html","032e0e5c259cd63d97d1b88c29211fa8"],["/tags/アボガド６/index.html","f0779b147fa215fe36972b220f148628"],["/tags/三秋縋/index.html","98a56021d149de759bfdcc89dfe8c67b"],["/tags/中國武俠/index.html","5743d45fee449517ff9106b691b5fbc5"],["/tags/中國言情/index.html","9624c359b7387dcd7bbab0435cbe7ac7"],["/tags/二宮敦人/index.html","92f83cea1fb763d18cb835b3bb4b17b7"],["/tags/人性/index.html","b7f1c48ad799d3ba9a3e7066c3f5181f"],["/tags/人際/index.html","42174048f4dd350babf75b87dbf0aec3"],["/tags/住野夜/index.html","54f43494ce62766c511318dbecb1d1d1"],["/tags/佐野徹夜/index.html","1766e9a268c04a1bede5c9c812ad42f0"],["/tags/努力/index.html","5d5f8b95ed5ef865e640e9c8d3259b6f"],["/tags/動畫/index.html","f93591112ff71e079c70f4b36e144887"],["/tags/動畫/page/2/index.html","74ca6e14a2bcb49660a5e1f89b5c8ed7"],["/tags/動畫/page/3/index.html","7ab684c8df020c6226ad5ea5f54ab91f"],["/tags/動畫/page/4/index.html","a4be5cd635e5e4d7a5dee86650d98313"],["/tags/原諒/index.html","4d102e80c27e15f06a23b585f854e169"],["/tags/反烏托邦/index.html","548c0727c7806f9f86004a23d37c7810"],["/tags/啞鳴/index.html","37ca4d5ab7928a139778ce0572706ada"],["/tags/喜劇/index.html","7c4bf5234ecc1d2647ed2fc20c1329ee"],["/tags/夢想/index.html","5263856686d27868238547fc50d09dad"],["/tags/天澤夏月/index.html","3309d942bc89f21b5f1e510cef4890fc"],["/tags/奇幻/index.html","36359082c76ca35232de99ea2c06b4e5"],["/tags/學習/index.html","3b18bb63cb62a58f33879eb30900cc14"],["/tags/學習/page/2/index.html","a6887a5eb6ee0339fddcb28e6f17df51"],["/tags/宮崎駿/index.html","8f5ab761370825a80a5a8f6031d49b0e"],["/tags/小說/index.html","734752a3c44d45ae53d1ef5e676c2835"],["/tags/小說/page/2/index.html","3c401100a22e3af7951ae46f5c54cd2e"],["/tags/小說/page/3/index.html","db1ad34d17bd7bb0dcee94180e862b33"],["/tags/小說/page/4/index.html","0e02ef8499d7736ea9568f3a724a099e"],["/tags/小說/page/5/index.html","7c34a6f21c152b38bab05270022b4938"],["/tags/小說/page/6/index.html","9a99699e79843b4c7e25ea386dc692e6"],["/tags/小說/page/7/index.html","1eadbd5c039c4f8323f66172b5f603fa"],["/tags/平淡生活/index.html","d9028e2edcb6049c3776d56e4c44e016"],["/tags/幸福/index.html","a3d20a3f370c7fc9d172516bf55c5988"],["/tags/志茂文彥/index.html","092cfd6063a31a6469aea56603323097"],["/tags/愛情/index.html","cecf0e579dc85ac2099742da5aa1516e"],["/tags/愛情/page/2/index.html","d61db8f1894ac5407de09bccea20c69b"],["/tags/愛情/page/3/index.html","980e9659554c88285a85ff0f44895cf5"],["/tags/感動/index.html","3045b9435257e6fd0beff03eb5b80a27"],["/tags/懸疑/index.html","cfa69581614bf7bf2764f99e1de977f6"],["/tags/懸疑科幻/index.html","89d8b431fde7328465b7a2abec30ceeb"],["/tags/戀愛/index.html","2ace77d82e86e159ed44757db7be2005"],["/tags/成長/index.html","a047697edd704919affd11a31d4ac2f2"],["/tags/成長/page/2/index.html","bf650b784447c195807ff43a91a08248"],["/tags/戰爭/index.html","d24799c7067439640a3a175c833b9cde"],["/tags/推理/index.html","9a70c58a7dd3af94fdb52fd7f14090e2"],["/tags/搞笑/index.html","b67d2336bbc704ac6abc3046e2dcd19e"],["/tags/救贖/index.html","49d696118a15d04a29fd135f4aaf64b1"],["/tags/斜線堂有紀/index.html","0de614aa43df02358ce7b554cf5b84e5"],["/tags/日常/index.html","474e0e5b635436bcedaac427ea769818"],["/tags/末日/index.html","aa22ab1f32a4e159ce888a984ae1bb4d"],["/tags/校園/index.html","c3ccf13767d48ecfd646063ea5c74577"],["/tags/武俠/index.html","e8af4e0148a1c37726bb969c24df6cc2"],["/tags/武俠言情/index.html","67e7c802e08be3269c9b6f8f5c41229d"],["/tags/漫畫/index.html","f1500a6fba7c8392c0340c7a84b45a5a"],["/tags/生命/index.html","a6efd9c4fe97cfa55700503e90b46a28"],["/tags/生命/page/2/index.html","f5d584cd896253ff2ccb487529fed983"],["/tags/短篇/index.html","8d7cb9df749b8495a200f5de3999f33f"],["/tags/社會/index.html","4e728de8615734d507d421a58b10d957"],["/tags/科幻/index.html","46cc9bdaadc0496ed9e2412fff118d0d"],["/tags/童話/index.html","4dddd0c4822e348da3e3445178d9555a"],["/tags/競爭/index.html","9b1bdf91b4de5cdbab5c53c0876e8930"],["/tags/自我/index.html","0ff41f83b3476c7914d5b9a41e064e2e"],["/tags/自我認知/index.html","5a72e13724d64b69ce7ea5568c46bd7e"],["/tags/葦舟ナツ/index.html","dc04387ce937c0fb7366201b717633e0"],["/tags/藤萬留/index.html","4a266874d2dd340373c6e9a3f781ba26"],["/tags/親情/index.html","be31e05763422672b3160a4d01487bfc"],["/tags/言/index.html","90a1f03f8454b785d3d61214af929998"],["/tags/雜項/index.html","1e8a6f6b227137631df4a293d7b0f077"],["/tags/電影/index.html","7f3254d532cc564fd926d2fb552eda22"],["/tags/電影/page/2/index.html","784b0d7616c7e4e711b60ed30cd10fab"],["/tags/霸凌/index.html","bde7dda0cbbd557e09647b8c478d9a39"],["/tags/青春/index.html","6ac44a2f3572b1af8a5a920b456ceecf"]];
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
