/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","3437f81a6584df302b69b24a43f0ca45"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","47ba72193d12136c98e6f3b1ea49672a"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","eb8e5351ee218f3bf8c6800e76743e9d"],["/2019/12/25/Review/無法計算的青春/index.html","c4143b5591e7b48ece6156007f154d5a"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","4bb5448738641685112ae6994f9e36b3"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","3a320c5be82713fd55ada55d4c35a4fc"],["/2020/01/19/Review/下雨天，不上學/index.html","a666b4a80f13275ce46ed112384bd4d5"],["/2020/01/26/Review/三日間的幸福/index.html","ff056e5ebf2adfba1b6aaf8728448aac"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","afb9689ece3a6c5af69e4e010822fe07"],["/2020/02/09/Review/青春期超感應/index.html","a7b1087d5d83186ed76994cef4549f66"],["/2020/02/15/Review/又做了，相同的夢/index.html","f59b181c3f637dd8622ec2f3698afad6"],["/2020/02/22/Review/回憶當鋪/index.html","b33744882ccf030882f167044430f26a"],["/2020/03/22/Review/不適合自殺的季節/index.html","fe605202deaba6391a3a9296799ff761"],["/2020/04/26/Review/我們都無法成為大人/index.html","dc30548f92a9883fd86f30c9fa333e76"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","1461c2db63dcd599636b14402d2f4a9c"],["/2020/05/17/Review/人間失格/index.html","55a685838b67a613f921882084863418"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","b55018b8837d99418c19c88fce8fd909"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","852078ada7d351581d2b4bbb8a304053"],["/2020/08/01/Review/銀河鐵道之夜/index.html","62595236ae2df80695178c5d3af73e88"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","c931782f5912c7481f5e45f2d2854a14"],["/2020/08/16/Review/15歲的恐怖分子/index.html","fce79ee6bd694fa6c389e63ab128c4cb"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","e49d09ec59e74d10f1420c1746ab1c36"],["/2020/09/13/Review/羅生門/index.html","1a039e8e19a0e515862e105e7d970b6b"],["/2020/09/20/Review/闇夜的怪物/index.html","dc5925c884586f4acd0cd1b5e86298ce"],["/2020/09/27/Review/14歲，明日的課表/index.html","4dd663931850f0b78ae2c77de178c9f5"],["/2020/10/04/Review/致十年後的你/index.html","d9191f0f31b71c1aa44da525ee83fc24"],["/2020/11/08/Review/滅絕之園/index.html","ae93f136a4d7a16ae59a3ebaae034bbf"],["/2020/11/15/Review/將愛拒於門外/index.html","9a911b308329c25da9d14cf17bac0a06"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","b5d6c7f680b1643dde47b6ed8ea73a9f"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","72f300048a75908bc1ac1a3507679f70"],["/2021/04/22/Review/道印/index.html","479f7a63251b80fd001ea3e1719f9e42"],["/2021/05/03/Review/戀入膏肓/index.html","514dc7f058df1133e0ed417e4ffdfb1a"],["/2021/05/10/Review/Dice/index.html","09f4dceb383cd126c5fcdd3402785b08"],["/2021/05/15/Review/魔女之旅/index.html","f35b6a1224eb4b431e8ce24b1479c21b"],["/2021/05/28/Review/戀愛寄生蟲/index.html","1debb430811b721783ae2212f37c9cc3"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","2a42ae1bf5383e453f4ab7c2066f87f4"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","d758e145a52e2f4c548f16ee910a9877"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","b3c5b6736e8fec7520189345a83a8119"],["/2021/06/05/Review/流浪的月/index.html","af32eeb63a0172a17a7a01ced64cfda1"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","79319f6e12ab8453c1439e04094fa34c"],["/2021/06/13/Review/第一人稱單數/index.html","db1882aeda9aaa8d0cdd2d8725a88ca7"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","5d86bd0c05718eab6a8876a6cb7b7d59"],["/2021/06/16/Review/願你幸福/index.html","04047617e98ad2a55d63b2274a5180fd"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","7d2407ed2accffc1a645a2b12a1ac7c2"],["/2021/06/21/Review/神隱少女/index.html","aacdfb4143fad6d7ed2fe00371f83a90"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","ba7400c451fc003df30bc6b07cdf2112"],["/2021/06/23/Review/天空之城/index.html","bd8d6bfcb481c80c64594a7588ae2c66"],["/2021/06/24/Review/魔女宅急便/index.html","c7bf57d4d4b3e94a840c91de70236157"],["/2021/06/25/Review/借物少女艾利緹/index.html","e1785747e0e751b8d1e387dcd2e5b8a3"],["/2021/06/26/Review/魔法公主/index.html","089d98d55357cf1201a70ebc06b3c40e"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","4b0a57d4cad6b5697b8c0334032900d9"],["/2021/07/04/Review/飛雪與劍/index.html","cbdd2becd89f2bacbdc0c22ea4d70993"],["/2021/07/09/Review/地球防衛少年/index.html","1ce5f4a0be6f0053fea09c5a072ea8da"],["/2021/07/12/Review/Angel Beats!/index.html","a437f5480040b1ee9c4af400cb7332f4"],["/2021/07/13/Review/Clannad/index.html","13f3847a006803f7de22dbadd7f9376c"],["/2021/07/15/Review/AIR/index.html","5b3e4e95e6423e91d29e4ad63fd77786"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d54e2ea8b93f794a64c6db958e88ecb3"],["/2021/07/15/Review/螢火之森/index.html","4c093c8bea2808784a7b33c8135e0abb"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","90d6ad3fbcfb6c3e048ab3ec81789be3"],["/2021/07/17/Review/奇蛋物語/index.html","81791e4fc6d512b305c729cfff7d5bc0"],["/2021/07/18/Review/Vivy/index.html","c4152cdc94fb70bdc737211ddcdee2e4"],["/2021/07/18/Review/請妳消失吧/index.html","59c90fb2d2fe3c0fb15620e7cbc8aec6"],["/2021/07/19/Review/漣漪的夜晚/index.html","317933fde27a96897e28654c1b935f5c"],["/2021/07/20/Review/月色真美/index.html","f05b2409eef2698a37b54562230aa459"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","539b2342b14d0feeee9eaf95edc7720a"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","10fdcb4ff0e2574476313dedf5c99217"],["/2021/07/22/Review/罪惡王冠/index.html","0b0b0535a685f7bcf6a850f88985c677"],["/2021/07/23/Review/弱角友崎同學/index.html","66f270300f9cef1cbf1ea279bf35fb32"],["/2021/07/23/Review/惡之教程/index.html","7284ed2eef3d2227308fca8de62747d4"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","342fa1421f42ad66e683003e9441a35c"],["/2021/07/25/Review/魔王勇者/index.html","18bfdcbeebdf8902c6caaf22205972fd"],["/2021/07/27/Review/一年A班的怪物/index.html","c3c2c2cc4f07cca0b211c7f538608f7c"],["/2021/07/27/Review/奇巧計程車/index.html","a8cb9dc61a5db498d134465e9ffb1bd7"],["/2021/07/27/Review/專情的碧池學妹/index.html","b81140bcc0d270a315e42b54793dab95"],["/2021/07/29/Review/只有我不存在的城市/index.html","f0c3c6be179fbc47cb704134bed7b6a2"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","fb4aeef26fd2a5d509c7e83295870df2"],["/2021/07/30/Review/可塑性記憶/index.html","93008d50dcf996b1e69e311889e17753"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","f4b919c01c27dce1e31fc3e100a12d79"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","55d651b94c1708fc663b7e02f3cbc2a0"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","1c56a29fd2265e3e13bac3c3affddf14"],["/2021/08/25/Review/清戀/index.html","ee3a45343507cb322a8864172f0d879e"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","fd4ec86ae1892eb83611e219868f145d"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","871b9a9c91477f06012e4a158e308a4d"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","8c513f0e64d4977edae49ecf313e8d10"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","be3adfe2980cd707f7baaccfdbcad9f7"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","7542034a01f20d783e0f7aebddbbdf3e"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","519ffcd039841072cffde50a4e4a8ffc"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","09de2103595b9d7bd40c9c0a87948878"],["/2021/10/16/Review/龍與雀斑公主/index.html","c61e0ee6bd109a59be433f2095ada28d"],["/2021/10/19/Review/孤狼不想開後宮/index.html","af524e7a9c99c6aadead00b158aece90"],["/2021/11/13/Review/徹夜之歌/index.html","f266ad703d0089051da0485ecba978f3"],["/2021/11/24/Review/武煉巔峰/index.html","96a24988ab97c3acb60ac0b0768359f5"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","10c5e16b57def2ab54d5ed28d2ae3cf1"],["/2022/01/28/Review/神醫凰后/index.html","435021d2b3b25ff219bf972119f2bcf8"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","7b7ce3fc580b60f5d1581f6249fbaace"],["/2022/02/13/Review/夏日幽靈/index.html","712b51f9f22b8fef0d5ddae445562803"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","32065e4c26afe0f2bbec92f0a8948d2f"],["/2022/02/26/Review/賽馬娘/index.html","7570f71a051d4e62d246358aac6a8a12"],["/2022/02/27/Review/大欺詐師/index.html","1111ad41fd8c76498b86761abad5a7ef"],["/2022/02/28/Review/前輩有夠煩/index.html","209d81545464c9d0a42fa276c749d84a"],["/2022/02/28/Review/碧藍之海/index.html","d7c887d68360c475d391115da2e290c4"],["/2022/03/05/Review/落第騎士英雄譚/index.html","3fe051754423cfbe9bf67062703f7a90"],["/2022/03/06/Review/Another/index.html","fd43eee31513ec6dc66252324c3b9e19"],["/2022/03/06/Review/入間同學入魔了/index.html","942fdfff439ed527ea70bcf7f1b195e3"],["/2022/03/18/Review/再見宣言/index.html","9975fb7d96b86ddeb5220d016255b345"],["/2022/03/23/Review/生若冬花的妳/index.html","1443072ad9f5d546a8a390e77e979987"],["/2022/03/25/Review/天之弱/index.html","62a7a0991e92877e63524fc41233a180"],["/2022/03/31/Review/滅了天道之後轉生/index.html","400821b9403b34ad10b670e200eb9702"],["/2022/04/30/Review/泡泡/index.html","2d48370087fce95e5bef42a32051757c"],["/2022/05/04/Programming/Dynamic Programming/index.html","80143adc60e1cf8deec59d839158f968"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","cef3a89916bc752a44f1fe1a7c3d0eb2"],["/2022/06/13/Review/偵探已經，死了/index.html","d0ea4dc95a001f72f89081e551857221"],["/2022/06/14/Review/黑色子彈/index.html","439372c2e9da733d5c77ec97b3bd27cd"],["/2022/06/15/Review/黑白來看守所/index.html","d1d9e7a82b6fb29746208a7d13dd1ba7"],["/2022/06/16/Review/虛構推理/index.html","69ff507d51eee9f15556032a94dbb9b3"],["/2022/06/17/Review/戀愛與謊言/index.html","d95710e0f5632f181fc80157c8cf81f5"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","bd77a02f61bd2d11918c0d4e7c4df29c"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","c7697597726b85ee7afbbabcf1a3e9e5"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","76eb2a5cc386d20a8610a5e30d5112ac"],["/2022/07/03/Review/Hello World/index.html","91d43261018ba1ce9a1b8b18185cabed"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","0faaa48316d5b128acbb925e8127f3f6"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","2935019b73b0b4a72f568bdb1fd2dbda"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","5c03f7f98ff1a0a8cbb61bcbaa4f48cd"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","313c9bd06230ee5fe5f2f6a4778d5bc1"],["/2022/07/16/Japanese/動詞分類/index.html","64e0c370ae4c2baa55f4e96fe730f846"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","d7b296605751896e97da46108ab0c2ea"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","bb8b6b28206bfe7ce3f5ab5a4ac5dea3"],["/2022/07/17/Japanese/音便/index.html","20c160eccb9465f1ef53011a65b73ad6"],["/2022/07/18/Japanese/動詞 時態變化/index.html","6af3944bbcdcb7099646c8ad85035976"],["/2022/07/19/Japanese/助詞用法整理1/index.html","0733d6d898ae9629d011ea695fa06bb3"],["/2022/07/26/Japanese/助詞用法整理2/index.html","a750ea37efeaa726ab9e59e457391b17"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","5a368be2825406264b863cfc26f16c58"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","d7c97154dca43a52d82e160f6f6b12f1"],["/2022/07/30/Japanese/疑問詞/index.html","f5d98db1a7fd367dc1bf83b842419e31"],["/2022/07/31/Japanese/助詞用法整理3/index.html","dd1e7e558c392976c2180a76e5108719"],["/2022/08/02/Japanese/副詞整理/index.html","534ae158c6345107e5ef0b8cca7c1f4c"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","9a0777832c1b286bb8a3fbc68a80468d"],["/2022/11/04/Programming/Data Structure/index.html","df56046dcf2cb32d9dae351d0fd51105"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","8d1135fbee7affb62a2536baa43c2f56"],["/2022/11/22/Review/組長女兒與保姆/index.html","d306e0a8d95655236aa6e2c56a5cd1a1"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","3740894ad97363bba766d51ef99ca8b8"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","d68e436d013a3cd1b03746c330794561"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","9e1c02e47d4bc07239926838db653630"],["/2022/12/31/Lyrics/一番の宝物/index.html","57b8322460fbb44b7258c78376137d20"],["/2023/01/01/Review/あの夏が飽和する/index.html","4152640c0a0cd0a4d0146d2aee1c50bd"],["/2023/01/02/Review/孤獨搖滾/index.html","940d37bda538697985ebc9320a621034"],["/2023/01/03/Review/來自深淵/index.html","c12484d8eb622654d6fdbe886c90cf51"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","3d8fe3e09e40b7091071311fc0f355f9"],["/2023/01/05/Review/處刑少女的生存之道/index.html","a5a55884fa3735381b8984c96ba1c49c"],["/404.html","6325a06104a358a266fac07634964cea"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","1fc82e0647fd83b36ea5582ae35c7cce"],["/archives/2019/07/index.html","b878a39d6c022fd4c536efb3d720db7d"],["/archives/2019/11/index.html","585d20fb3c6578a66bb27036034e7180"],["/archives/2019/12/index.html","d55f7eb21bd0d894d9bf05915d7b0c70"],["/archives/2019/index.html","192fb032f59253ef7cd4a41c4e60ece5"],["/archives/2020/01/index.html","8d5a159581b8b35dbc0efa8b974b824d"],["/archives/2020/02/index.html","64979769b09507d28cdb6928ecce281f"],["/archives/2020/03/index.html","b93b4c1478202a2c2e7c9a29b7add2cd"],["/archives/2020/04/index.html","cad5fdb143bdd452f29cf8c621c129a0"],["/archives/2020/05/index.html","74e2a8b4aead467ea8fb653b7eb2a117"],["/archives/2020/07/index.html","92f453787c6a55b988f0bc337744970b"],["/archives/2020/08/index.html","d03b283ff61e80623d6c4d646fe45049"],["/archives/2020/09/index.html","aa03a238a6071f2581055db75d870952"],["/archives/2020/10/index.html","370d95c9999a779933b71925e6704a84"],["/archives/2020/11/index.html","0b8f34d77c3f8aafdf194c66b392445f"],["/archives/2020/12/index.html","08d7f38a76d71cb5347c33ce328a9ba8"],["/archives/2020/index.html","2757c41b32b998ddfb95d05f1a4f16d2"],["/archives/2020/page/2/index.html","0d6d8651c45e54d49e423c790263dcaf"],["/archives/2020/page/3/index.html","21c5da2ac5dd6b64be70216eb4a85c5d"],["/archives/2021/04/index.html","5a793e707b1756cadc8a09a19117d756"],["/archives/2021/05/index.html","cbe7722167e11aaf003e767e552c0519"],["/archives/2021/06/index.html","28b5588f1d37ccc1be2517c8d1947d6a"],["/archives/2021/06/page/2/index.html","7aa3a0dfbbab835c06177abc3defb7f3"],["/archives/2021/07/index.html","364df511ce68bd12ab10e85bec3b9c1a"],["/archives/2021/07/page/2/index.html","5fd28cc7e7b1d2c8a0fcd8e48e0c12c0"],["/archives/2021/07/page/3/index.html","a16d6efb088bfaf0b6268054d960fb82"],["/archives/2021/08/index.html","7e139d1dc391d39e7bfa88b90b4c973e"],["/archives/2021/09/index.html","4867f94ac75d7b1b97ee99ee9a38558d"],["/archives/2021/10/index.html","ac94b12f591c1831174fa7571dabf3c3"],["/archives/2021/11/index.html","1b1e0f5b68925e9811abb1b415602261"],["/archives/2021/12/index.html","f71b4f467807f300a6b46b35b1cbd1a2"],["/archives/2021/index.html","e836792f534091cb4066b2f28383fbd8"],["/archives/2021/page/2/index.html","0c901b39fe3d9a81daf6a4b159a1019c"],["/archives/2021/page/3/index.html","faf45099920fc47892519f40e618fc55"],["/archives/2021/page/4/index.html","e27fc217cb3b8aa1026cfa1045aeaa44"],["/archives/2021/page/5/index.html","0a05c3fc5056a08a683b74ae3038f13e"],["/archives/2021/page/6/index.html","fada135e7b9bfea18a255e18d04f7c31"],["/archives/2021/page/7/index.html","2db59f7b03a6659c0b97b02a4e5c1918"],["/archives/2022/01/index.html","84a435d07d9736a3f7791c54083dccf0"],["/archives/2022/02/index.html","ff2e383c71ba5e326b1f968a84ed3769"],["/archives/2022/03/index.html","0f184a5e168f8a0835059513425138ac"],["/archives/2022/04/index.html","8ac8d4de46803e574a2cbdb7ffbbdf63"],["/archives/2022/05/index.html","b1c5592f5061a52070d1691cf9930ee5"],["/archives/2022/06/index.html","cb1008dd95c4bf4ae9b2d099bab1a478"],["/archives/2022/07/index.html","3246ed4411d1d67d0abc30c2f6b4b2bd"],["/archives/2022/07/page/2/index.html","d02b3e8b0cfb63fdcbb9d1f329980241"],["/archives/2022/08/index.html","612f86d8ba80ae76bfdfd4cf7e7a2eda"],["/archives/2022/11/index.html","ae0e9005cdba26216c18fd8ffe83c071"],["/archives/2022/12/index.html","5cfe1513e7117ff482ee71dc7ff6c30a"],["/archives/2022/index.html","3454b4db61fc11d31eb3db7c065298ae"],["/archives/2022/page/2/index.html","62d2c3fdbd36b6f060b1c40702490666"],["/archives/2022/page/3/index.html","a88a629c9c3e80069c6fc1dc890e0934"],["/archives/2022/page/4/index.html","c981b2ca6e5f97cd33f6bffbfcd4b40a"],["/archives/2022/page/5/index.html","31a1100533e31a61b13032128c94eb1e"],["/archives/2022/page/6/index.html","ab66c5778b2c03b74cb1627a0e3a085b"],["/archives/2023/01/index.html","23796b2cb7ba9fb305aab3bf25a6d2f9"],["/archives/2023/index.html","c2716d9fe27559284dbeca8d1466dd66"],["/archives/index.html","9e7f5a35752b6cc6ebde71ecba785380"],["/archives/page/10/index.html","cc1b4302721e2f6fd633d7970f956cd2"],["/archives/page/11/index.html","53ced56d4b2c8744741483462d4f977e"],["/archives/page/12/index.html","191b4b89410356c760a38d51b27d8015"],["/archives/page/13/index.html","28bc5d2304c2f123ced93a00f3b62503"],["/archives/page/14/index.html","61602597b20ebd6fcce77096f414c26d"],["/archives/page/15/index.html","4bbe6e3abea58b652a4256502a3d2f9e"],["/archives/page/2/index.html","420067c309fbca7e85d0b5b76b57d2a4"],["/archives/page/3/index.html","a9bf6b732ec69bdf7624d97787ef1a7a"],["/archives/page/4/index.html","efd0dc2ee10718ec476cd83e4a47be92"],["/archives/page/5/index.html","156afb651cdff472ebbcbe487bce4887"],["/archives/page/6/index.html","85799e8fd5507d3018969a52035305ca"],["/archives/page/7/index.html","fdc3ef3efe3ba3a078b6bcf779008d93"],["/archives/page/8/index.html","957063b7aa2734d9ad73d3bac1c47573"],["/archives/page/9/index.html","19cccfe42005050fceb5c1b2fa498c9c"],["/categories/Lyrics/index.html","107fc432161edb02eb5d3ee6aae4dff2"],["/categories/Programming/index.html","1d183ca1d18aac3e53ef355ae236228e"],["/categories/Review/index.html","faf793a6f6ce4c081563e999f8c8f4a1"],["/categories/Review/page/10/index.html","1000ca6df6d8acf00ca8e77d9dfa7af0"],["/categories/Review/page/11/index.html","3e61d526a37bfbc301263ed1ffe0bed8"],["/categories/Review/page/12/index.html","6e7cce808883c4674baec42575d24ecf"],["/categories/Review/page/13/index.html","e46b80d56d598e22b2477f0b7738905f"],["/categories/Review/page/2/index.html","45a0ba9d0c36e68a5239bb5da4bb41ff"],["/categories/Review/page/3/index.html","2a9a4184e517028bdbf2ce7ab35561b6"],["/categories/Review/page/4/index.html","09ed0c6de0d78cc1e383edac4397c4aa"],["/categories/Review/page/5/index.html","8b325f26dfbc14fb44e5a8d75ba9e370"],["/categories/Review/page/6/index.html","31ce8147926921edf6df683af1c85749"],["/categories/Review/page/7/index.html","b90ee80797cadbd0a38f4c8fb42e50ad"],["/categories/Review/page/8/index.html","13a9a2a21ef42f2b8564f1644ace56cf"],["/categories/Review/page/9/index.html","ffc221dc4ef32d981ec3dccf5e15f531"],["/categories/index.html","36342b2430ac4ee6d99bc5d9d4b527f9"],["/categories/日本語/index.html","ea2b1f18452313afca62af8c13f45363"],["/categories/日本語/page/2/index.html","b1e21bbdb1b48d8d3e085df4544864f2"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","57bb4de991f9b37ae3dcb1a78cf37426"],["/js/custom.js","2b7e785b857773766c776e2af8375ca3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","7671364614e9c38abe5660c24a54a636"],["/page/10/index.html","a4a7b29141911021c7a7d402364083d1"],["/page/11/index.html","80fc46bce25d7468636c55e258195571"],["/page/12/index.html","8f12cd8bd232c402e6886e07b0b2ebb7"],["/page/13/index.html","2945b69d92053317bcad413438f0d8e7"],["/page/14/index.html","35fed323135c3521ace2fb069a575627"],["/page/15/index.html","84cf846a6bae74a42edc298c1c778451"],["/page/2/index.html","6576dfef7ba14fac5e83b9937cff0067"],["/page/3/index.html","3e6a095d8584abf79b6f3b74f1b4773d"],["/page/4/index.html","f08229d2df1758fae6e873b55e4e772d"],["/page/5/index.html","92a2a91e02c494b9c2be8e1b622f3867"],["/page/6/index.html","79c4e344ce633fa6ac509e24c180d947"],["/page/7/index.html","b6e5841df7b85bccdb3a5b0191bfe29d"],["/page/8/index.html","e46b0b014aba087478d0fc9b1b995d96"],["/page/9/index.html","0da3c889eb5e7c315ca9613c3218e4a0"],["/sw-register.js","75b4d84410be913661a16bc11f77e790"],["/tags/10分作品/index.html","13dd74f9d7af1da392504bd7d4fe4644"],["/tags/3分作品/index.html","3feb55eda94de48ba0a14d57ad7995be"],["/tags/4分作品/index.html","5f9973da9bcaaba79de4c05e699e4490"],["/tags/5分作品/index.html","55516dd43aad793bff6c18d2f6d61fe1"],["/tags/6分作品/index.html","8d404361e5b683a41de0eacb9237f57e"],["/tags/6分作品/page/2/index.html","717eef2a84e47d72368714f272b0f797"],["/tags/6分作品/page/3/index.html","cf26ad345df4777d9bfe38abfd01f55f"],["/tags/7分作品/index.html","dabc2f9469e07d35795f6a1c4d2eb0d9"],["/tags/7分作品/page/2/index.html","b0a99b9573df44fe2a1edde156822415"],["/tags/7分作品/page/3/index.html","b4dc7ec5753a93bdd71b7c9394532137"],["/tags/7分作品/page/4/index.html","e46c923de365f404b405af1589088ef5"],["/tags/8分作品/index.html","a8167109b9a14717fbe96ac393566b97"],["/tags/8分作品/page/2/index.html","ba2a04986a53123a4fef2d3c68410906"],["/tags/8分作品/page/3/index.html","32c1c463fbf2d2000a1f3621bb58cbcd"],["/tags/8分作品/page/4/index.html","2d3f599323202fe09b7909b33bde6546"],["/tags/8分作品/page/5/index.html","d4a296806b7654086b74fce44ea87aeb"],["/tags/9分作品/index.html","75276da0578a06a067f17f1e266c5b54"],["/tags/Lyrics/index.html","a0c5cd51396e6ec7835f5692269db3a0"],["/tags/N5難度/index.html","d35208bd3ca89aefd8bf7d8422d0cd81"],["/tags/N5難度/page/2/index.html","2aeb966b09d7310d4e2b1a6facc5ff24"],["/tags/index.html","77726e494c239dcec82663cd48d1c2f4"],["/tags/アボガド６/index.html","67e88073436e4ea2f2fa3808c709b8d7"],["/tags/三秋縋/index.html","0f2442d014e660a5a9ef7aaf9b02da3c"],["/tags/中國武俠/index.html","f33ad59bf01667accc94e3095d66ce2c"],["/tags/中國言情/index.html","d5901bd070a5b0c7ed14089c63e0b813"],["/tags/二宮敦人/index.html","1e9b5064229808cf920e103f453a09a6"],["/tags/人性/index.html","8276951eedb7e6e7fb6d0b30da818b58"],["/tags/人際/index.html","d9e957eeed401a2ef572f4b7e0956536"],["/tags/住野夜/index.html","4a98aeb70f94fb10214f4450aad0574b"],["/tags/佐野徹夜/index.html","b19d47540a4fa1bee3aa42695de49982"],["/tags/努力/index.html","9adb4d5043b1d5b9d110b86ce98e9f4e"],["/tags/動畫/index.html","ef48ff53ae0c6d126d03a53c8f40e02a"],["/tags/動畫/page/2/index.html","f71533d4a9f56ba477244e532d77188a"],["/tags/動畫/page/3/index.html","a2fec9b74b9f7a21a75edaf52efbebc2"],["/tags/動畫/page/4/index.html","0ed307cd3fa34670af114236631684a4"],["/tags/原諒/index.html","c99b474ad87d06d90acd70cb0900364e"],["/tags/反烏托邦/index.html","5ab1f460377add372d63dd420fc26c16"],["/tags/啞鳴/index.html","4c33677c6a561b070ff3f519a306f005"],["/tags/喜劇/index.html","96fb40fadeb1eab1af8a8acfbbeedea1"],["/tags/夢想/index.html","741e8d8a410ca6fa7fd6d4e19b60f196"],["/tags/天澤夏月/index.html","f30ea50a2bced8d3771248d28b6b9eee"],["/tags/奇幻/index.html","75a6dee465915c10d29894ec21adda37"],["/tags/學習/index.html","99aae86b34f2ea1209bc90e5020aa23c"],["/tags/學習/page/2/index.html","0139da1c95639ba56219ecfdc7f6458d"],["/tags/宮崎駿/index.html","15e4a92b4e42f9f2234a3e7676c4e807"],["/tags/小說/index.html","d4c29300753a6b01d6d119519523d2f6"],["/tags/小說/page/2/index.html","d26a4e54637634099f0637b3105493b7"],["/tags/小說/page/3/index.html","621835a1b3d14c5a0e54e5af40f745a0"],["/tags/小說/page/4/index.html","10a4e37e3522c4b5a047e38348bac033"],["/tags/小說/page/5/index.html","accb044b60413ec1e75b8ac30ca75809"],["/tags/小說/page/6/index.html","4bed9732bb06e59995dc34b9def7b7bc"],["/tags/小說/page/7/index.html","9cfd0934f452dd3307146e0e930f5afd"],["/tags/平淡生活/index.html","003e75b7c5871ca9da8e644e533a56cf"],["/tags/幸福/index.html","463ba377028cf79700953384ad3acd7d"],["/tags/志茂文彥/index.html","6fb98386f3edeb19247f60474a573808"],["/tags/愛情/index.html","72abe0cf345e6dfa534e8cd7a7e6e645"],["/tags/愛情/page/2/index.html","9605ef26b4e078f41e67ef7d85a15692"],["/tags/愛情/page/3/index.html","c811af391e00cb949aaed806b516a03c"],["/tags/感動/index.html","8b59733218fd4aa647950bee6059955a"],["/tags/懸疑/index.html","a4e9137be89649d08462deeb5cd68473"],["/tags/懸疑科幻/index.html","1b67fbf85978f8ef2ce6d2446573d56a"],["/tags/戀愛/index.html","00adfff93600358981ce3bed184e5b06"],["/tags/成長/index.html","169eb0b7ba579bcfe58b253ec7a2d4af"],["/tags/成長/page/2/index.html","61509fb2ed522476b8c61ff883b2f928"],["/tags/戰爭/index.html","cfcd244b0aa0bbb2dfe82dc5ada63a0c"],["/tags/推理/index.html","e4b295b80a188471a78fa39e8ece7b85"],["/tags/搞笑/index.html","50457270a7069f491a6f4320fa4ead07"],["/tags/救贖/index.html","747fbd0cccc866bb446eb641cef243ec"],["/tags/斜線堂有紀/index.html","f2a5dcea8eea398d264d7862a58eb342"],["/tags/日常/index.html","7d277a0d4ca8e0a0818b1b9bcb879509"],["/tags/末日/index.html","a2bdc747ff0cf942863cca4d63261fff"],["/tags/校園/index.html","184c5de92db2850a6f982915e6b9b9d5"],["/tags/武俠/index.html","2eb5add6ce6acbdfc0450438650ce121"],["/tags/武俠言情/index.html","c699f234ed421b21afb9bc9a342ce396"],["/tags/漫畫/index.html","956f5c6a7611684837fbdfc5f2774c95"],["/tags/生命/index.html","9dd8a2936865e2f92220d25952d8a600"],["/tags/生命/page/2/index.html","353937a199feb7371a9ebe6fb190a5ce"],["/tags/短篇/index.html","92372a3c9e2fa97453bb3b84d4207b87"],["/tags/社會/index.html","118b028b666d305c4090178f555d41b7"],["/tags/科幻/index.html","4fec2351ecfc493bdfc3121060a5d44d"],["/tags/童話/index.html","f20d62e620e4b726ef533c00c46e775a"],["/tags/競爭/index.html","30d2b2e6a3e803681e2d098f532b842d"],["/tags/自我/index.html","d52d0196ef30845a158ddf3cda25568d"],["/tags/自我認知/index.html","e4d2f74c81dc1bae5bb622e71b7c8b28"],["/tags/葦舟ナツ/index.html","0ecd6369cd7bed239c2849160bb84629"],["/tags/藤萬留/index.html","af4ce99abb6fffaa5c50608590a1a04a"],["/tags/親情/index.html","4eb0631625ef5640c366b85f0e1e1eb7"],["/tags/言/index.html","6c6b524fbd4271c2be8301b74d3a6f16"],["/tags/雜項/index.html","35e862e0bf1d9ed02efbfe2962c2b488"],["/tags/電影/index.html","6a710b40a7a1e5950300706ec52881d8"],["/tags/電影/page/2/index.html","778b660dd880bea1126182a516dfc4ce"],["/tags/霸凌/index.html","b8a298cc11c3cee4f7c1cf4ec4f0706c"],["/tags/青春/index.html","6916c4b3ad53bed6bc3c5d82cd4b835f"]];
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
