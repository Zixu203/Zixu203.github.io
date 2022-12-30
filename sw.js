/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","2c9b4494a829570e5243acd80be0f1e1"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","023847b4d0b2dd4ddd0291bf74a20a01"],["/2019/12/25/Review/無法計算的青春/index.html","6efae6b619f2ee8bccad0478abb40e88"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","12c547c0b072bf0043ebe2014c7ace5f"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","ecac937c324375899a77942888feacb7"],["/2020/01/19/Review/下雨天，不上學/index.html","59da33e99ba557167bc1bb532c64896c"],["/2020/01/26/Review/三日間的幸福/index.html","aa37c09d518017116a5d7bfac5712df6"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","4dd700633c5e129be066e6e507422ab5"],["/2020/02/09/Review/青春期超感應/index.html","d7e30fa1ef3d4407b2ce60d0e4c5558f"],["/2020/02/15/Review/又做了，相同的夢/index.html","ef08ed30050ca3117d883b8a747da12d"],["/2020/02/22/Review/回憶當鋪/index.html","ec6532fb77e6e3ba8d2cfcfd301cad38"],["/2020/03/22/Review/不適合自殺的季節/index.html","7357ad01e89e7f05af16f69c531b0632"],["/2020/04/26/Review/我們都無法成為大人/index.html","339d38ecd50792b6b1cf9c3e8041f37e"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","12bc2eace296948fb1b312d2a9cf2349"],["/2020/05/17/Review/人間失格/index.html","57fd4c456288f435b59def0360087dc6"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","1a76699f3f067c87f51a41ae52e2d781"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","2f8c4148d631e402e59143fe893f4022"],["/2020/08/01/Review/銀河鐵道之夜/index.html","eb3aa473136f10bcaa425c5f0b848cbc"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","8073139f2157e54d695fc9d17aa5f37e"],["/2020/08/16/Review/15歲的恐怖分子/index.html","877b7488b23001142961e7bc0c406193"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","2c0e02407fd978703b3c02bff9cbebdd"],["/2020/09/13/Review/羅生門/index.html","31545d644c2b8611da32832bb3eeaee2"],["/2020/09/20/Review/闇夜的怪物/index.html","7c3b73dd53199f9084c25f82a3d7c462"],["/2020/09/27/Review/14歲，明日的課表/index.html","326ce8b1d3801e304c39e200cedbb6c0"],["/2020/10/04/Review/致十年後的你/index.html","da15f6beac8147aef4b30389a35eb055"],["/2020/11/08/Review/滅絕之園/index.html","9cf710acec95e4240799b2f5116d9cea"],["/2020/11/15/Review/將愛拒於門外/index.html","831b25fe86b0f6bc31c476d920dde698"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","b825ff425f9f635eb3a0f567ae991d25"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","114231ca0a0c301484c73930d5a76386"],["/2021/04/22/Review/道印/index.html","e33217c4df846cca7e6688b6cc291fa2"],["/2021/05/03/Review/戀入膏肓/index.html","80c022da2d2b1b5322a48dd12c2508cc"],["/2021/05/10/Review/Dice/index.html","feb54fce8e4668be98e997cce1dbeb95"],["/2021/05/15/Review/魔女之旅/index.html","77af7e62c93a3329a7dc1ac02abcd14e"],["/2021/05/28/Review/戀愛寄生蟲/index.html","29d0b2d5a9d3b8d4adc770f36deb064b"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","8b948567883ae8e9999d606b756bc7a2"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","ebc73179099a8c97df29ace7c31ca40d"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","405414a6d63d8b48a450c1e0bad069ee"],["/2021/06/05/Review/流浪的月/index.html","e2e969fc58f0950dcb19d911dfb87edf"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","c656fd815b51d1700ec8a68483066215"],["/2021/06/13/Review/第一人稱單數/index.html","d1c5da5d54b91b42b79af6c88c5f6eab"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","eb8e1d9a7dda87f7279829bf04fd0d9b"],["/2021/06/16/Review/願你幸福/index.html","e5932bd5f22920769af6fb0dd0e35f8f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","d11c044a22a71e002a169f76acf16098"],["/2021/06/21/Review/神隱少女/index.html","66368535d58a7cf268336878e0b378c9"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","ad2d81dbc522dea5d7e5995e0e4f72e0"],["/2021/06/23/Review/天空之城/index.html","6226181ec8fd83f2f919f3c0a05868e2"],["/2021/06/24/Review/魔女宅急便/index.html","93a5e85745c9525a035c8c35139ad8fd"],["/2021/06/25/Review/借物少女艾利緹/index.html","73913802ae348ca0594d5372094ca62a"],["/2021/06/26/Review/魔法公主/index.html","2c290bfacf17442168b72dd52749f120"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","99398a586e56299ae340489dc00377bd"],["/2021/07/04/Review/飛雪與劍/index.html","2261c5b6df10a2b71104e488ac2e3594"],["/2021/07/09/Review/地球防衛少年/index.html","07631159f44ff83e1005ea8169ae114c"],["/2021/07/12/Review/Angel Beats!/index.html","fe5c96039f91527b0b63b0672771c799"],["/2021/07/13/Review/Clannad/index.html","56ef3e357b2364c7a1a058210122576e"],["/2021/07/15/Review/AIR/index.html","2673768d0587f9a37452034fd7b0fca4"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","72d01f104d49be8e8cb47060557b4dbb"],["/2021/07/15/Review/螢火之森/index.html","5e94cc713f572d548fc4239e969a0176"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","e85d8cbe656fc1d06d449b1bc7c254a4"],["/2021/07/17/Review/奇蛋物語/index.html","2db18164b5f67313f9813be214a4ee54"],["/2021/07/18/Review/Vivy/index.html","a951f689ad7256b27627cda92f641544"],["/2021/07/18/Review/請妳消失吧/index.html","fe57017b7d800933cefa24ce8e02eac9"],["/2021/07/19/Review/漣漪的夜晚/index.html","7a19bad6d9550d17f6324054d9c655d5"],["/2021/07/20/Review/月色真美/index.html","ec1148bf9aee184232b4934aec75a284"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","8fdb367410b12adb54581434cf4df476"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","67414fb3d1b46f0f5bac9aa02accfdb5"],["/2021/07/22/Review/罪惡王冠/index.html","040370395548793c52a17ff3b93b653e"],["/2021/07/23/Review/弱角友崎同學/index.html","99ff0a93330ca72e77131b8549c11b71"],["/2021/07/23/Review/惡之教程/index.html","3d4e0405a0963cad8c4097aa3fa79fbf"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","765be596dd6c2952858157658df859cf"],["/2021/07/25/Review/魔王勇者/index.html","619639a9d1985bd2fde67913bd2d91ee"],["/2021/07/27/Review/一年A班的怪物/index.html","e96535aa57bb3d5ba49802c582968e58"],["/2021/07/27/Review/奇巧計程車/index.html","aa927d286f2a9100f8c2f003a4d0c477"],["/2021/07/27/Review/專情的碧池學妹/index.html","3d37e519b1417b0ca7293fb27e3f022d"],["/2021/07/29/Review/只有我不存在的城市/index.html","7a67752ae3a9e55aec3f351a03746f8a"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","2b45298b2fa7aca608b1f8944bd7646a"],["/2021/07/30/Review/可塑性記憶/index.html","517d120c2dbc1c0a5fe83a433ecea979"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","c24a3a8de5547965e216226d1499fe12"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","ffde2c7f69d6d89d9e5b12532fd603e3"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","84b3dfba6dd762ce3cd9fe9eb28c2ec6"],["/2021/08/25/Review/清戀/index.html","22a4580b46045328f3c4932d05809870"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","51b5c609d58add96ba3d3f2b548c18f1"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","aed1969dadadcb53c0156a5e113e2a11"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","fdcc179ed3cd849c63e4d7940babcaae"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","253018f03bc6d6dd3013a3c8fa13c5a3"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","8b8404a67a8cd479f9037cdae2b625d2"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","2f87c36aae09421d7f72648b01c26e1b"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","0795a560a6fadc22409d33d1df7240ff"],["/2021/10/16/Review/龍與雀斑公主/index.html","1941ffd28c5efda66fa63afe08bbb1e7"],["/2021/10/19/Review/孤狼不想開後宮/index.html","853f7460856981dd91b7f861c770eff1"],["/2021/11/13/Review/徹夜之歌/index.html","8d031d0128356a3bc67b932cbaf7fdfd"],["/2021/11/24/Review/武煉巔峰/index.html","e13ad2ed5c01e613036b94c1e6d91b79"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","0cb8eb67a2ebc9360c145493b62fed6d"],["/2022/01/28/Review/神醫凰后/index.html","9389c1ad05bb7b0581a8d059c57ad958"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","d1916c2f46875b75843842f4f55a0211"],["/2022/02/13/Review/夏日幽靈/index.html","8115b56600c5d427dca9231e18952456"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","d6d398a8f7d865e545645a4db83b3221"],["/2022/02/26/Review/賽馬娘/index.html","56643f934ecde6e2af044f3d209b7eeb"],["/2022/02/27/Review/大欺詐師/index.html","169be1583c4900960d5a11292b398a80"],["/2022/02/28/Review/前輩有夠煩/index.html","70b5ad628a1e9b06a93d3d64b71dbbd3"],["/2022/02/28/Review/碧藍之海/index.html","a06e5137e5538f99f1a555065e15732f"],["/2022/03/05/Review/落第騎士英雄譚/index.html","6395da1bbfc644daff21625274bc8130"],["/2022/03/06/Review/Another/index.html","79a7409c35f63f5514ff1ab8dfe1dca5"],["/2022/03/06/Review/入間同學入魔了/index.html","11e38e90f74573db00b989d4ebda204a"],["/2022/03/18/Review/再見宣言/index.html","e2190c270b97807ace5351de22f8d254"],["/2022/03/23/Review/生若冬花的妳/index.html","b5545a5e45dfefb4769f5a3e3df0cd94"],["/2022/03/25/Review/天之弱/index.html","f4ed058f0eb150bb2329d0bff2cede2f"],["/2022/03/31/Review/滅了天道之後轉生/index.html","57099095d12b5d71a40d734fe4ee749a"],["/2022/04/30/Review/泡泡/index.html","6d59c986725c324293b2993c21f17565"],["/2022/05/04/Programming/Dynamic Programming/index.html","8d32f770a8a9b1707b8b447c810f527a"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","17c490e8cf31c875724e1ad2a61c1694"],["/2022/06/13/Review/偵探已經，死了/index.html","7428e3f7b2089c75f69b6a7b96330af6"],["/2022/06/14/Review/黑色子彈/index.html","4d15821cca40f3453698b24789b9b1ec"],["/2022/06/15/Review/黑白來看守所/index.html","6a9d493ede49400571bfbbab97f144b5"],["/2022/06/16/Review/虛構推理/index.html","796972cbc2d260c4d69ba64cf9a8fdb6"],["/2022/06/17/Review/戀愛與謊言/index.html","22926dc5fb3783d9e84cfac5dd14f7da"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","db20fb0c3c0a138ea4f949411e1dd3e8"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","956be226c64b747456ff50b00856365e"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","a614a4c253e7841fb9e6439fb112a92f"],["/2022/07/03/Review/Hello World/index.html","fa845ef9ac0058515242dd604ce0b77f"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","6fd860509e6e3f225aebfd3e0827b873"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","c7134be91abfaf1c56fc01b093ed7b4d"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","989556b97ed577e5ffa088754d560b6e"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","c0a84759cede63fca846df18d570516e"],["/2022/07/16/Japanese/動詞分類/index.html","92adf9ade28e2250a168871b80014046"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","f28c5d35e522551382a5ab2bc85a193d"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","85aadc469009d975b50e2f357360e2b4"],["/2022/07/17/Japanese/音便/index.html","6f1e5c646cd4063962aeec6c87d22d2c"],["/2022/07/18/Japanese/動詞 時態變化/index.html","d2ebe5a9b88fc4c543772094efdb0715"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4d8b11b342cf0de42d27ce059209e7a2"],["/2022/07/26/Japanese/助詞用法整理2/index.html","7c39fe67aaf27fda164fb5ce2d7ea171"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","fc9cfca0efbb93add4d00a800e2607c8"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","85488015c526135790b1776112ff2192"],["/2022/07/30/Japanese/疑問詞/index.html","84c70caef1643d6f6c626f261af0972d"],["/2022/07/31/Japanese/助詞用法整理3/index.html","5673fd441d6fe9d94d71200e89b17826"],["/2022/08/02/Japanese/副詞整理/index.html","3210b284a33f48cb3195e7d1db8f6153"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","669c5cd9687f619eefc1d7e0686db172"],["/2022/11/04/Programming/Data Structure/index.html","cc674ca60c351899cee372c2129b4a02"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","35c100857a10157ce6754ac54ab0b5ee"],["/2022/11/22/Review/組長女兒與保姆/index.html","83c846d87499ebfc967223ef85a39956"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","8c3b05455829e6545f9fa870c2195d6a"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","86f064f9f23710d4631c952099df3339"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","801892486549c03ba486545444c99133"],["/404.html","9effac691d4decf66a2769ffd1dcf943"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","92d48c3537ce143ad92e7fd89a2f5c3b"],["/archives/2019/11/index.html","b644697f21c25f8422a3b19cfe90170a"],["/archives/2019/12/index.html","16fa0e481b57ff6a107ea4122e002c18"],["/archives/2019/index.html","b77d96a617a97e369d798b50b8666174"],["/archives/2020/01/index.html","bcfb06bfecf149bde9758bb5e4a0a7ef"],["/archives/2020/02/index.html","e4862a6d6c26f36ae94edbb931143951"],["/archives/2020/03/index.html","02dab8c59a96fbd811bfbbd009c4238d"],["/archives/2020/04/index.html","9234c07dabe840ab4c35176a48e81fad"],["/archives/2020/05/index.html","aca5024027d187bf0c0e76e229df2d08"],["/archives/2020/07/index.html","2068ef8e1b261e049ca26dcd677276f4"],["/archives/2020/08/index.html","a4e1b796c99a97705f3d0e18190f3398"],["/archives/2020/09/index.html","80c5644dcee07b6c78ff8436aee8cc67"],["/archives/2020/10/index.html","c257dcde980e019aa52581d263f00587"],["/archives/2020/11/index.html","1c4f0c31517efb3d876147dba3db3a9d"],["/archives/2020/12/index.html","1174463b0c8367564d293db0c6c7dc69"],["/archives/2020/index.html","2c25cedf685317149676ec2ebf59a768"],["/archives/2020/page/2/index.html","a56a30385683bd8611b58efc26068991"],["/archives/2020/page/3/index.html","197ec285cfa4a022e6a16658ab2fa4c8"],["/archives/2021/04/index.html","29971aa6f2c33f0e97168a66147890ca"],["/archives/2021/05/index.html","295e6500f9689de1495a9f0a3cf292b4"],["/archives/2021/06/index.html","f6641016fe870748293536e08d8f95e0"],["/archives/2021/06/page/2/index.html","1ae937e187446e48f64e23258c8f728c"],["/archives/2021/07/index.html","bafcc86ba074402cfa4dbad51b782381"],["/archives/2021/07/page/2/index.html","f84d5459011d3b982815fc932477ad1a"],["/archives/2021/07/page/3/index.html","3ad2cb96ce27b0961acdc4198480cd71"],["/archives/2021/08/index.html","d62438fbcc60033d69c33b31e04f351b"],["/archives/2021/09/index.html","d08cd7d10ecf4df6eb010197e26c3734"],["/archives/2021/10/index.html","dda39cf5c6244dfca2ab86a7a2e13c2b"],["/archives/2021/11/index.html","a66d9dab13a756ce633e7b01df903f9a"],["/archives/2021/12/index.html","6f514f7223011630eccc3fd116b1c4cc"],["/archives/2021/index.html","d798704886c028e032b56353a46e05b5"],["/archives/2021/page/2/index.html","2a43c60acc02e6716d46384fc6bf0fd4"],["/archives/2021/page/3/index.html","5f4b04b07cb52b13f064386d0729f304"],["/archives/2021/page/4/index.html","458bee90b430ef1c7dcaba1456578068"],["/archives/2021/page/5/index.html","443c3ebde92cbb83a1163418934a2271"],["/archives/2021/page/6/index.html","04dfd45531b8d5535836f9527c178083"],["/archives/2021/page/7/index.html","9944c08b17904f6f056e9a532be6cc13"],["/archives/2022/01/index.html","26e6caf48f9ecd0254d69c2d61dadf9b"],["/archives/2022/02/index.html","3dfeaf914e6464afcc9052256031ef0c"],["/archives/2022/03/index.html","92afb89ce9c29bc713e9833a9ff76f1a"],["/archives/2022/04/index.html","a23faf3f0d88fb3d05c4f5b486114131"],["/archives/2022/05/index.html","191aee4bc773d6a5dc850b317ed23e8d"],["/archives/2022/06/index.html","83ed5b09c335c98507756e21e89f59c6"],["/archives/2022/07/index.html","c3393f9ad9ce1d9269333b520aa51c62"],["/archives/2022/07/page/2/index.html","e1b2d30d3c14e073cd00cfd9d353cdcd"],["/archives/2022/08/index.html","a7b2fcef937063155b061f813360c57d"],["/archives/2022/11/index.html","561a3573e4c87cdcc84d3eb1203bd08c"],["/archives/2022/12/index.html","ca0181375a74ecfbfedd6629ba49243a"],["/archives/2022/index.html","871ec5e1497df84ff27023781a93f66c"],["/archives/2022/page/2/index.html","1f48e2c2c7a88fe041ece922bb9e4c09"],["/archives/2022/page/3/index.html","3e8d3e322bd06fd96efab61ed8cd3264"],["/archives/2022/page/4/index.html","61f4a14a6be56a5df033ab2bbbbbe3c4"],["/archives/2022/page/5/index.html","a6887e74c9d1538d052203ce1cc1fb94"],["/archives/index.html","1f0734dc54fd3aee2014008baf4660e7"],["/archives/page/10/index.html","df062f1694f0da3c60d57cb5cb483807"],["/archives/page/11/index.html","eb9923af6fcba9ff264d3700f3a1bebb"],["/archives/page/12/index.html","4e00f50e104c0f4edf27d0fd8e0c7f57"],["/archives/page/13/index.html","85f1cefbb0c93be2c2e551718108189a"],["/archives/page/14/index.html","a382217e0f7c3f1d9136de9f2e472a9a"],["/archives/page/15/index.html","4eb5e618f5d51329d0d4df7abf0435de"],["/archives/page/2/index.html","723359698818d85208706c3a84442c2b"],["/archives/page/3/index.html","7ac47bba26eb51deb85f0e40b1660b50"],["/archives/page/4/index.html","764cf932866f54beb1924ed78aa9671d"],["/archives/page/5/index.html","dc747afcc93df9f43f20a562182112b7"],["/archives/page/6/index.html","184965316387f163f2b0fb8edfb2ef85"],["/archives/page/7/index.html","0cb569d10cd3efeb27155fd989be5eae"],["/archives/page/8/index.html","55415329692d0e09a4e1f361bea808c9"],["/archives/page/9/index.html","0ed980d8194f9621935f5f85e173988e"],["/categories/Programming/index.html","5ef37f757a78d3a8dd8097a889fbb16c"],["/categories/Review/index.html","48a38ead4ee91cefd691037a323e8e78"],["/categories/Review/page/10/index.html","512ce5e0a020c45399f1a6cc8efff28f"],["/categories/Review/page/11/index.html","2e69a22d757ef3487fe3c1ac81656af1"],["/categories/Review/page/12/index.html","d075be17fd827d05ac7cab699beee6da"],["/categories/Review/page/13/index.html","5426298c2358a851f972bd3a67ceecc4"],["/categories/Review/page/2/index.html","d5deb267c4271182d92927962ef45f22"],["/categories/Review/page/3/index.html","ca25269d076b8da4503ebab2d5828ab2"],["/categories/Review/page/4/index.html","60b31154a44ff239e8540925360bba22"],["/categories/Review/page/5/index.html","05539785b16b8d6810809fb91c9b14f3"],["/categories/Review/page/6/index.html","64b5f88a686e824705befe5f2971e346"],["/categories/Review/page/7/index.html","b6c66875ecf3e85d2a996dcf8461ffe6"],["/categories/Review/page/8/index.html","0798f2a1a8f1296bea08d7154cb6382d"],["/categories/Review/page/9/index.html","b52a04130307f6584e0dac01e320b9c0"],["/categories/index.html","b146d6bff36ec1296e6372ba6d0648b3"],["/categories/日本語/index.html","57a513c946226c52e7e01a600291a6ad"],["/categories/日本語/page/2/index.html","d8bccbe8b196afce7fb8a0b8a50073cb"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","081a454ca7f01657b838bbf53dcc899f"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","6a1937bbc18134a6ce3d7ae3beea3c47"],["/page/10/index.html","4eb79c2d2f4f0e42dd651cc8019bcd48"],["/page/11/index.html","66d39254cd58435d6aa258916bfa0ef0"],["/page/12/index.html","a6e7fd13d81938be8b4b714226bd2eb7"],["/page/13/index.html","60aa9af6b37156ba999f975ca721ddd4"],["/page/14/index.html","4b4caa13c00feeb2960d3957541991b9"],["/page/15/index.html","5c20572b2062c59b010de436d755bf30"],["/page/2/index.html","c3b266323e56c844f1b31696e57ec499"],["/page/3/index.html","a0eec74c46f5c9a3c10d863d1d338bcc"],["/page/4/index.html","974764fb0aa220bf2c4ee7af7a99bdbd"],["/page/5/index.html","2844425d1dd9fe69130eae3a9c94ce69"],["/page/6/index.html","8b7b639795e1fa757a741a284700e565"],["/page/7/index.html","4e4d6a177e37550a3633f695ad2ac166"],["/page/8/index.html","299bb404e81b3c5953592891862c0a05"],["/page/9/index.html","2e63f7ec8699c7a1590405c0b6438c13"],["/sw-register.js","2b520fb3cf9ca04d82c139db4c3e53a2"],["/tags/10分作品/index.html","9c78e4720445d14a779f9c93d3d5ff47"],["/tags/3分作品/index.html","ef901cc3886cd9550aba15a89f8c1ee1"],["/tags/4分作品/index.html","b566de850c3b64ec212e2edb697b7aa2"],["/tags/5分作品/index.html","e04955bff6af91543b8a450f933c103f"],["/tags/6分作品/index.html","168c07092796a2b0d4fc80741b5d93b6"],["/tags/6分作品/page/2/index.html","7614cfad91e1c547bd34dd3542f2b70f"],["/tags/6分作品/page/3/index.html","eb8c0be3b0dc070e355e334facd61d79"],["/tags/7分作品/index.html","69e7757179c3d303799d5a1f90dc5fad"],["/tags/7分作品/page/2/index.html","318fbf8c905cc42db02ca529f75ee094"],["/tags/7分作品/page/3/index.html","db2a94c9bb6c0590f2c041055f94130b"],["/tags/7分作品/page/4/index.html","af9222e1d49ea4efc0b1a39de5d524fd"],["/tags/8分作品/index.html","6830d74b3bf5515dce360c42d86d8176"],["/tags/8分作品/page/2/index.html","923e26a4881ee3cf428ecfdd7f68b1eb"],["/tags/8分作品/page/3/index.html","ef601dd740e036be76180467745daeb3"],["/tags/8分作品/page/4/index.html","1dd708c5420a131997059e0bba61b485"],["/tags/8分作品/page/5/index.html","ee8a21ac2234ffabead7c60bb1f45335"],["/tags/9分作品/index.html","621550039061aa36c05fc106d355ba38"],["/tags/N5難度/index.html","8deb72a1ac67e9b8ec76b45aebe5628c"],["/tags/N5難度/page/2/index.html","bb8bfd45a34a5056c43aacc12a177492"],["/tags/index.html","970e05bbd59a4438e6fd15dce398b831"],["/tags/アボガド６/index.html","9d2ad034350916ef64e1459b36e86d87"],["/tags/三秋縋/index.html","fffc65d3a67fa5a43880e2808c6a573e"],["/tags/中國武俠/index.html","68e0c1e30d761e696f61390cb4e5e143"],["/tags/中國言情/index.html","a2e6d676e3ae47e51a87b4d00e5441ab"],["/tags/二宮敦人/index.html","a26777fdbbe508ba92105b580b679d43"],["/tags/人性/index.html","8a65b5f4199f0eb1c1f6f34d58c95323"],["/tags/人際/index.html","7d6d808268ea9482b4d7384b610417ae"],["/tags/住野夜/index.html","4d0c274224c267f762bf5d59ab5f4855"],["/tags/佐野徹夜/index.html","b75d2c1fb611e1e26722dab1428e8ebc"],["/tags/努力/index.html","4581d0bbffad9b4131fa2186c9641943"],["/tags/動畫/index.html","7d9912fe5ea8f7ccdc3e375cf0b56100"],["/tags/動畫/page/2/index.html","dc54b626b88fc92eadd28200622bca24"],["/tags/動畫/page/3/index.html","db418979ce2960a1f9aee49438b0f67a"],["/tags/動畫/page/4/index.html","0aa2e69f816677654475a9b810bebe7e"],["/tags/原諒/index.html","37128db37f0f0aba37fc0d4bedfe7854"],["/tags/反烏托邦/index.html","a2183a3c34950da161ac2056ec5d2487"],["/tags/啞鳴/index.html","7f04013ab4e18a5f0478d6d385564961"],["/tags/喜劇/index.html","4c44e00ed76d740f1a90e3d499d89a4a"],["/tags/夢想/index.html","8b84100db658dfa73c9a26ec53aaa5bd"],["/tags/天澤夏月/index.html","d95bd2d9f318d806a3b9b033d7e336ad"],["/tags/學習/index.html","fe04c9ac02ecdbadc6737717bac13c71"],["/tags/學習/page/2/index.html","71d24a1e06fbf14ff9bb98929d26744c"],["/tags/宮崎駿/index.html","c91e79a40c19b2d1fcffd87d2612db54"],["/tags/小說/index.html","fb8a34e992ceae8e7ae541ee4f1cde3b"],["/tags/小說/page/2/index.html","b2748283506925ac30463adeb1b29a6e"],["/tags/小說/page/3/index.html","67bc1c82bd33cd83a74b5714e26be96f"],["/tags/小說/page/4/index.html","2c2e57eba1a3a85d0ae3b7112637d4dc"],["/tags/小說/page/5/index.html","21197efaf24809add908f72ac9579b4c"],["/tags/小說/page/6/index.html","528a0fdaec2e3191a68331a5e23e41e2"],["/tags/小說/page/7/index.html","59a6777297a041dde0527a5495bbd5d2"],["/tags/平淡生活/index.html","b0838a2a97ff72596cf850278e3a0e7e"],["/tags/幸福/index.html","58e5dc64ee91b8ee35d4bb8cdfa8cb5b"],["/tags/志茂文彥/index.html","e46893fc589ea89bb911579173b76592"],["/tags/愛情/index.html","277699812bf8e76bcc5958c797d2b8f2"],["/tags/愛情/page/2/index.html","002bd0e3f39d347ad4b2c4631cec2ee5"],["/tags/愛情/page/3/index.html","5b5053f72a4de64c4c4f6c5a4c3762da"],["/tags/感動/index.html","c1d52857dc311159c37f52d0501e82b9"],["/tags/懸疑/index.html","8cd6a2e6c758e59b396cd9e1617ac368"],["/tags/懸疑科幻/index.html","856269defb898b3739ef2e296d3b4adf"],["/tags/戀愛/index.html","1b150cf946d5a0390a3cc1c314b0c270"],["/tags/成長/index.html","8b572e852fcc80f716e7a0850ab81784"],["/tags/成長/page/2/index.html","d5e1a0fec7076effc7805bb3cb6da43e"],["/tags/戰爭/index.html","2a21f32ce0202fcb8a2875b8dc44dab2"],["/tags/推理/index.html","f685efbdcab4e560df32372470186748"],["/tags/搞笑/index.html","ea8e09f199b6dd0a7ee51b450569315f"],["/tags/救贖/index.html","dc25e02fb2bb5776671a25fd0685a68f"],["/tags/斜線堂有紀/index.html","06d3b281db5817f8e9adea6f79945fad"],["/tags/日常/index.html","178e9cf9bf61a1bba5a0a1a1c0042d29"],["/tags/末日/index.html","0e28da0911da13107e7c6b025424abaa"],["/tags/校園/index.html","806bedc9f9e7617efd9090a23ee4d0cb"],["/tags/武俠/index.html","94a09b9199e277e781386e6541bfef50"],["/tags/武俠言情/index.html","cfffde8680e2aab3f6e1d60598fb7851"],["/tags/漫畫/index.html","27e903a06716483bf7d6fb57d5e69300"],["/tags/生命/index.html","f509016dc44badf31d2e4227f1a8d1d8"],["/tags/生命/page/2/index.html","255840e892564d8742f6e92f7978d17c"],["/tags/短篇/index.html","f952a0c9c646b7d59cd5b4df38bcf08f"],["/tags/社會/index.html","4e968442f9a437c9f39965762b2d2178"],["/tags/科幻/index.html","31327f712f6460aab7eb3096b05111cc"],["/tags/童話/index.html","9eea62fe63f20dfd3cd7e3ea1fe70655"],["/tags/競爭/index.html","4f7f8cbce580088a16a914c0a6d429a4"],["/tags/自我/index.html","455586bda35a1be1c2865caeb4c47c0f"],["/tags/自我認知/index.html","025278a2f3ee010b472819911f274dfd"],["/tags/葦舟ナツ/index.html","d19cba3468e14000556801bf17f0ad4c"],["/tags/藤萬留/index.html","7231b601a63af22577112f38f31b151c"],["/tags/親情/index.html","5b95434daed02dc52496ec786275d379"],["/tags/雜項/index.html","18fc392fd6ea9a58a65681f9774ea489"],["/tags/電影/index.html","7b749d6974b04b32ee10cddf98c88656"],["/tags/電影/page/2/index.html","98ea647ae4338f99b615b63767de21b0"],["/tags/霸凌/index.html","9420f8ece416472f480ae3708ed434ac"],["/tags/青春/index.html","eeba62d447ae2e1431b33c30146c366e"]];
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
