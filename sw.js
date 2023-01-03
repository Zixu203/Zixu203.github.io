/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","abbd5e364644aea8f7367ff1dec40f53"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","568cb1662f9bcf21006b264a5c6d6126"],["/2019/12/25/Review/無法計算的青春/index.html","27d12c5a5a645388964bb149f78e2f2c"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","0f024259d2741dc10e607ea6bcf85508"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","cbd881c99f486f05e9bb643fee9ee052"],["/2020/01/19/Review/下雨天，不上學/index.html","33d099e895da6b12b427d97fc8f5be16"],["/2020/01/26/Review/三日間的幸福/index.html","457bc4966ed4df08f927aa7dd6b16c9a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","5d72cc946de7c89cc691820cd9948565"],["/2020/02/09/Review/青春期超感應/index.html","d8fea08917f41b618dcecb0574097977"],["/2020/02/15/Review/又做了，相同的夢/index.html","2f3c611cfa217059bced14235c04b058"],["/2020/02/22/Review/回憶當鋪/index.html","7d8bc6a0f8f66dc246e7205e7c48b147"],["/2020/03/22/Review/不適合自殺的季節/index.html","9566f31b0a40a023a892cc5c4616efe6"],["/2020/04/26/Review/我們都無法成為大人/index.html","f211bb587f628f7475d25aa4b6636532"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","cb2f28608906a9fbb9ee685f644a5260"],["/2020/05/17/Review/人間失格/index.html","57093b3efc2f2a0115b0bd394e52071c"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","aad33b3675612b178c4fd909ceb8849d"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","f033aca7c0451993537bbc2669e7080a"],["/2020/08/01/Review/銀河鐵道之夜/index.html","e52661b5bfe7b4b9cfa472c8ac4b7d48"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","520154e524a980aee07bccac932a9fce"],["/2020/08/16/Review/15歲的恐怖分子/index.html","4e9562f9f98e808d4692c3839a08bebb"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","f714efb5106debad48dbd4afef7f879f"],["/2020/09/13/Review/羅生門/index.html","ef51a05c8f60cc905b96f8a3342ddbdc"],["/2020/09/20/Review/闇夜的怪物/index.html","5bfa316b547b1c3912d9d8cfd50a6931"],["/2020/09/27/Review/14歲，明日的課表/index.html","d16ff8a38fcad62451e4b18e5d1b54f1"],["/2020/10/04/Review/致十年後的你/index.html","0ac04ed541c87a244d0b06c5ddbc2422"],["/2020/11/08/Review/滅絕之園/index.html","c2621a2cc94aa16b0b49bf464a61ce6a"],["/2020/11/15/Review/將愛拒於門外/index.html","a09f5e24eab33d9ba5a6bd78e6aedbe3"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","090ea9856994d2cec3cfbb9f64411107"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","52f4c1b25e8c39906e4a80cc10a02a14"],["/2021/04/22/Review/道印/index.html","7b2493d9930cc97566b4125914f8e4bb"],["/2021/05/03/Review/戀入膏肓/index.html","d00a49d426470ee1c3c1c10239a4d4f9"],["/2021/05/10/Review/Dice/index.html","7a69df6e1c2ff88285b6aba2bb3fb760"],["/2021/05/15/Review/魔女之旅/index.html","32206473c2f405024de35d0bab7d488e"],["/2021/05/28/Review/戀愛寄生蟲/index.html","22eee04230b19d9acc04f4bc75a10b55"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","c50c76ca54b44aef384a63e4875a8d98"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","9f6d6d4c83971101030eb725a3c37815"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","52dd022d8b08b5b13b9a8ae5b736c582"],["/2021/06/05/Review/流浪的月/index.html","4bf8089e09eb1e9ebdb25a52f68257b3"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","1cbe8a7096993cb54a5b4f178908ca3e"],["/2021/06/13/Review/第一人稱單數/index.html","8c270fb6ebaca1cd1ba75b443fae4fbc"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","9889b3998744023d32889e99ff8c7cfd"],["/2021/06/16/Review/願你幸福/index.html","6a87449b3d61d59bf2ac2e10020f34b5"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","1b964469a30717e66777e0fc2c6e27bc"],["/2021/06/21/Review/神隱少女/index.html","1b1c6d39ddaaf7b6eca464429e7e359e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","0316811eb78e3d9cf20ebeeda42a7fe3"],["/2021/06/23/Review/天空之城/index.html","1e33bc52606080e462028cc76fd9b4f6"],["/2021/06/24/Review/魔女宅急便/index.html","b3e339bac31161cabfd31683fc067fe1"],["/2021/06/25/Review/借物少女艾利緹/index.html","3411df62c85f786a7cd1e9144cec0e5b"],["/2021/06/26/Review/魔法公主/index.html","598991790c27addd97d6523c92693ff0"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","34d91e57dc712e257c862e8f4534dc97"],["/2021/07/04/Review/飛雪與劍/index.html","27452d1e193943eb78ebbad4601e1d4c"],["/2021/07/09/Review/地球防衛少年/index.html","848c193d30077d798442d0ee83c6747b"],["/2021/07/12/Review/Angel Beats!/index.html","c1b5af9b05fd29379a233a48d8ff0b61"],["/2021/07/13/Review/Clannad/index.html","39d84f5d31ee9049320133b69593a152"],["/2021/07/15/Review/AIR/index.html","ffff3f3fdfbb19e8fd20fdf08acedefb"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","f63af091891e9061e2083810acc4b944"],["/2021/07/15/Review/螢火之森/index.html","de77ed717e1d6419fa9b0ec552040886"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","2ece8a1406c70fe83194630d8a320b2f"],["/2021/07/17/Review/奇蛋物語/index.html","11bce0edf37fa2fddeffec6ccf0bd7c6"],["/2021/07/18/Review/Vivy/index.html","c06480ff008c99719ee8ce96e6ccb07d"],["/2021/07/18/Review/請妳消失吧/index.html","75cbbc0b65c374f8ffef08840d93a1a1"],["/2021/07/19/Review/漣漪的夜晚/index.html","c7adbff02b9efe09367b00aa593e4e1b"],["/2021/07/20/Review/月色真美/index.html","f992e1e06fedec5ce21a2dfcc213ac16"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","af1da98943e65b377ec7da55729457a5"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","138da12a019e040ffb6fd511cead6156"],["/2021/07/22/Review/罪惡王冠/index.html","e64bda62bcde2d4077dc9077c81b43bd"],["/2021/07/23/Review/弱角友崎同學/index.html","d34fda2c8cf20cd903458005eeba19e0"],["/2021/07/23/Review/惡之教程/index.html","3651060ba9db7ba3720b54b0619f92a2"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","d718e37b15e0c4041887b211ac2f5e11"],["/2021/07/25/Review/魔王勇者/index.html","3a8974f1cbff4013ef617d79fdbe82f4"],["/2021/07/27/Review/一年A班的怪物/index.html","f6740bb14613be3a9ad4f00dff122e98"],["/2021/07/27/Review/奇巧計程車/index.html","5b56501448b653d7b0bbf1976e68bff7"],["/2021/07/27/Review/專情的碧池學妹/index.html","193c72e454577988546ce310bee12185"],["/2021/07/29/Review/只有我不存在的城市/index.html","682fd31a3d425cc052b6dedeab51835f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","ff7403073cda9c45a18667f0668053f0"],["/2021/07/30/Review/可塑性記憶/index.html","0ea1710bb4f948fd89337efc006fe3aa"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","1afca142816c938796ed24c642c237ad"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","70fad551875487fcf91e781996842284"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","1475190694fd376ca930a35a2644aeb3"],["/2021/08/25/Review/清戀/index.html","1067d98bf73a7d7b56ab78b6bd574b2e"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","9b6573eb0832a9861a192aa9164c38dd"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","435a95c9ca97dc478700cb20a4d38e20"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ce36dea5612d076da5ec1ce275f49f68"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","48e15eb06ccde1a941c3386e2b461b83"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","79ca3fd944a3c6218ece81402eb8c2e8"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","30538a06ec7db4bc910eb4dafe4cd72b"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","6be854290f981997fa9d3774524a8e1b"],["/2021/10/16/Review/龍與雀斑公主/index.html","b458983cb1d952e1dd47aa7a128511d1"],["/2021/10/19/Review/孤狼不想開後宮/index.html","971bf34be42a204e92f0ca4f72275513"],["/2021/11/13/Review/徹夜之歌/index.html","b7b82e3f4b0ffbbb70ae6e6b0f70ba7c"],["/2021/11/24/Review/武煉巔峰/index.html","6b5f57c84eb6eb397350f26138b6e56b"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","d9ff197d0ae918d73aa80017f79312a7"],["/2022/01/28/Review/神醫凰后/index.html","a320d336feea901016eb3babdfd2714a"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","5796430633ba445c593b3851fece7dce"],["/2022/02/13/Review/夏日幽靈/index.html","cb24a1e04dd230117ce1d2869a82ac7b"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","e59b016d4d33ec1b0dc5d236aca8a317"],["/2022/02/26/Review/賽馬娘/index.html","38f8af7d2f87554a94ccb477fdb4f63f"],["/2022/02/27/Review/大欺詐師/index.html","6ee152646421ccdc4a813c8aa1df4397"],["/2022/02/28/Review/前輩有夠煩/index.html","d6cf3e8bb160b6f0f2145fd3ee2342e9"],["/2022/02/28/Review/碧藍之海/index.html","34000d885bbd7279c6bce3150c9ec2cd"],["/2022/03/05/Review/落第騎士英雄譚/index.html","d1911f2471bb4580f3c8b8b7ab143dda"],["/2022/03/06/Review/Another/index.html","3cab0f64910e81493ce5d2911d9b866c"],["/2022/03/06/Review/入間同學入魔了/index.html","5d21691d901d33b121fa062b0fea4c44"],["/2022/03/18/Review/再見宣言/index.html","f8adca16dc0506b788196ad4b447230c"],["/2022/03/23/Review/生若冬花的妳/index.html","c11befae52a3231093767a872c7c4cb8"],["/2022/03/25/Review/天之弱/index.html","364fa10c724fadc32115d2313e526aa1"],["/2022/03/31/Review/滅了天道之後轉生/index.html","de0af031dff2fff3442afa91fa187fd1"],["/2022/04/30/Review/泡泡/index.html","c1d065e5239498fafdc5eb0999195282"],["/2022/05/04/Programming/Dynamic Programming/index.html","05cd25bb24e9e83aa29cd87bacc1ab05"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","63639e33c1ebe99a40e8b7f72e8d1abf"],["/2022/06/13/Review/偵探已經，死了/index.html","92ab0fb2a6d4d3e89065a6272082fe4b"],["/2022/06/14/Review/黑色子彈/index.html","ba76d3a3cf342da736f9b95d32699499"],["/2022/06/15/Review/黑白來看守所/index.html","b361b0d1bfb13f4c2ecab7c3816e2b1f"],["/2022/06/16/Review/虛構推理/index.html","5049db6684ee2333d5eb4ba199b939a1"],["/2022/06/17/Review/戀愛與謊言/index.html","3f397f657d3d6e481ec38759262a0bcd"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c51cdd11b8461ac9dede142b760c48e3"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","9efd45ec5b3722186bda602ee1f2c734"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","a991d2a16b645a2cc9c79460e269e058"],["/2022/07/03/Review/Hello World/index.html","e0cd34e2b62644135b1d81a3a79e6a70"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","aee50d9797aeb41838cbd62d12a90fcb"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","69f778d8aaebf38d844c0da93b3d7043"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","8472154f42bdf7cb3b2400b8516e1771"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","08d8c4849ec112f70cce19ee11409c29"],["/2022/07/16/Japanese/動詞分類/index.html","22dfdef04f0cc4cd5c9806286714dcea"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","509e03dca16f6c0fec42b0245accd140"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","aeb9adfc343c4fcf64fb3c318a0af84f"],["/2022/07/17/Japanese/音便/index.html","5a23662b29b019701582a443cc188efd"],["/2022/07/18/Japanese/動詞 時態變化/index.html","15a2505dadbff94a94cf9376ac7aed28"],["/2022/07/19/Japanese/助詞用法整理1/index.html","d994e962cad6c6331da9146e51e114bb"],["/2022/07/26/Japanese/助詞用法整理2/index.html","70beb0859bd08368a0d1318751da06fa"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","14f450cad9b854b2cb8eb1db818b8674"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","5359fb3b6f118cb7f2831b340206a624"],["/2022/07/30/Japanese/疑問詞/index.html","c22e7ab1f03d125f832a8e838d15feaf"],["/2022/07/31/Japanese/助詞用法整理3/index.html","436da14faad9a5e49bd43ab3070af5be"],["/2022/08/02/Japanese/副詞整理/index.html","91ceb18bab3ae232066e48fe79ddfcfd"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","6d18a184fdabfc1254628dbc12503c17"],["/2022/11/04/Programming/Data Structure/index.html","41f106632bb77ac7a690c9b87459fbad"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","0460400559882dca3bf375ee5f8003ea"],["/2022/11/22/Review/組長女兒與保姆/index.html","ea8f838e0f95069420ff8a7aaf53c8f1"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","d199524837b4a713ee1651be1d4f80d6"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","245d5bd37a9109fd1b4186f302cbdbd1"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","152de9a117d0a6d1c745653da5e60aff"],["/2023/01/01/Review/あの夏が飽和する/index.html","ef2307611d3a51d07b0a6ab2373e8330"],["/2023/01/02/Review/孤獨搖滾/index.html","822048638acbe982454b069b84248d16"],["/404.html","68e3f3ff6738a92204677bb616c745e7"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","de2be9da1e041581f3e641ba81f28e06"],["/archives/2019/11/index.html","cd2348c24e373ef2a7a0871cac29c0d0"],["/archives/2019/12/index.html","6e7e79e363afa75ad750200d978429f0"],["/archives/2019/index.html","d588a24a1fc8cfe8df6617baece04266"],["/archives/2020/01/index.html","4881e38c44c0503bf8179af7baca909d"],["/archives/2020/02/index.html","c3561b5d50875f16fd166cf93a26c1a3"],["/archives/2020/03/index.html","7afe08ec19159a85225b912b375472c7"],["/archives/2020/04/index.html","814d3c024522b49dd26b690a27a7673a"],["/archives/2020/05/index.html","91767d6d83ff61e49feff3dfffe33243"],["/archives/2020/07/index.html","22cddb79df3a3d13f075a3c6de6dbac2"],["/archives/2020/08/index.html","09d71d98a1ebeac2d328f5f5994d622d"],["/archives/2020/09/index.html","2b2aab731777a1af543dd6471f294993"],["/archives/2020/10/index.html","46bcc85494ec1dafeb041c1c1d8af5bb"],["/archives/2020/11/index.html","e02dd687460a3a8477e17bf264d3f0b0"],["/archives/2020/12/index.html","2020bcf02e41a6cf6753500c2eb6e750"],["/archives/2020/index.html","3efd1e37533251aed98efebc1bc55b50"],["/archives/2020/page/2/index.html","9b2131797736cf0d944aa304c9be7c0b"],["/archives/2020/page/3/index.html","8115ea752923b5d2acfed1dd390b97dc"],["/archives/2021/04/index.html","7c01d21fb6f26492654ce6bfe750905b"],["/archives/2021/05/index.html","fb64fe5dd7fd2788f2c5f0a2c06a06b5"],["/archives/2021/06/index.html","01ca26f29fb2edee8a421f9f393675be"],["/archives/2021/06/page/2/index.html","8df95ee48f881c6623da3323982a0db3"],["/archives/2021/07/index.html","ed3f8fb39535ef570613977a6a5882ab"],["/archives/2021/07/page/2/index.html","e674ad69f59974d4941f041255671840"],["/archives/2021/07/page/3/index.html","5508bbe8f04d78860259384b9832c498"],["/archives/2021/08/index.html","b0d1795e584da2da8fe34029f3528dd5"],["/archives/2021/09/index.html","18748fb618a7492e560a0cb529a84be0"],["/archives/2021/10/index.html","ce5458e1e5519a86feaa9f02ff4b5e90"],["/archives/2021/11/index.html","a923aa6acfc8e909a4f52732cd3a7469"],["/archives/2021/12/index.html","6b42ea01947a453a00bf410494db040e"],["/archives/2021/index.html","a46f2a3dfb7e19fa98bae6acd9c899c5"],["/archives/2021/page/2/index.html","45bd5c0051c37ff12ff3271aa198e3d1"],["/archives/2021/page/3/index.html","defe2f4d4fb6f91d051fe9406b700f50"],["/archives/2021/page/4/index.html","8d141c565eaa496959d0c615932a0b61"],["/archives/2021/page/5/index.html","7c766a88f5be57d5105ac50f0a459ec9"],["/archives/2021/page/6/index.html","206d90a8c7e5baab20aa837782e74acc"],["/archives/2021/page/7/index.html","87a062c919936c2038d14e8e2ea853e7"],["/archives/2022/01/index.html","a64f06ae160b96b34e066f98efd35c55"],["/archives/2022/02/index.html","97866b9927047ad3a43f611e68833bb1"],["/archives/2022/03/index.html","b1c64d7cdfdfa09c77be851eb1a7df57"],["/archives/2022/04/index.html","a7abc18f0410c20b1890e0c50d57981d"],["/archives/2022/05/index.html","ecff40adb8ffeca9abcad929a64c06a2"],["/archives/2022/06/index.html","0994d9030b3e28c75a288742bc2c0385"],["/archives/2022/07/index.html","bff170c6aa9864c672d76d93210a1809"],["/archives/2022/07/page/2/index.html","4f5386e64c246a2f6fce8d7a4973df82"],["/archives/2022/08/index.html","43dbc86afad4f668ce3d50644330ab71"],["/archives/2022/11/index.html","ff6e10383d1172a7e9bebacff823a35e"],["/archives/2022/12/index.html","b3dba612a78b267f7e9d8ec29b256df2"],["/archives/2022/index.html","1f88721161ad0ff8b9a4a497c617718a"],["/archives/2022/page/2/index.html","91eacdb8766e3020744840d1cd66120c"],["/archives/2022/page/3/index.html","9e0b2ffb18d9dbb2efabc060907c4a2f"],["/archives/2022/page/4/index.html","cfb353d7a00a1ba22c874933606552e4"],["/archives/2022/page/5/index.html","824b069b89eb562735b0483bc5a92e40"],["/archives/2023/01/index.html","8d969e6bee57ff9a47d2974bf5a38589"],["/archives/2023/index.html","d81e38731ea92b4ba818d4d1fcc3783a"],["/archives/index.html","7983c655beba6ccd7244b97518103054"],["/archives/page/10/index.html","3223f76de8edc7a8c6049bb79ddea943"],["/archives/page/11/index.html","91527e4072e0252098372b9f81ad7efa"],["/archives/page/12/index.html","df7f6c0cfab59d581656ccfd8f9b25bb"],["/archives/page/13/index.html","bc15b68a5e093bf843c707c6c95d3394"],["/archives/page/14/index.html","97443fe5c11c8f2001da65cd673c7bdc"],["/archives/page/15/index.html","2f88f054f96dd3b7c4c04617047f5201"],["/archives/page/2/index.html","b88c1010a73438490099fce2e986c229"],["/archives/page/3/index.html","684537d441f1d2438a029c48b7e9c5c6"],["/archives/page/4/index.html","e6a5918134f5b268803ebedb69f7038f"],["/archives/page/5/index.html","30fcc11ca3aaea97dc064d06911c20c1"],["/archives/page/6/index.html","650d8fa0c69ab421a092f92375d732c5"],["/archives/page/7/index.html","b0a74ac78f8f04fd00017eaa3fcb2d0f"],["/archives/page/8/index.html","a5c3385430cb02e55ea0274bad8b8d18"],["/archives/page/9/index.html","2dfe617091a2c60aee2b2cba6e49de42"],["/categories/Programming/index.html","07c5b8acfa6a4d4251d3b4daffbfed55"],["/categories/Review/index.html","0caf5a12ad62e44d3df0cef253045186"],["/categories/Review/page/10/index.html","2714d19c2c1b1d1b68200217c584740f"],["/categories/Review/page/11/index.html","33ad3a2abe252ddc1ef8fd8a8781043f"],["/categories/Review/page/12/index.html","11eb871098b2b373fc00965b940bca3e"],["/categories/Review/page/13/index.html","08024b04423f29ae9d78895d560f511e"],["/categories/Review/page/2/index.html","f09901e92e616ca9c45e50708f9e9c9d"],["/categories/Review/page/3/index.html","1b463db81d6182a3c703249d8d079698"],["/categories/Review/page/4/index.html","fda35e828e6ce55730c7971725592d5a"],["/categories/Review/page/5/index.html","98d138524b0e3959b034f574fe5559a3"],["/categories/Review/page/6/index.html","daa35559b885d10f7ff3c66b29f573f8"],["/categories/Review/page/7/index.html","b990aeb8fc06fbfaa19548c55f49b38e"],["/categories/Review/page/8/index.html","068120e82bb58415788dee77ec6b0b17"],["/categories/Review/page/9/index.html","024d6e00d5dfcc9aa887cdc5078edbec"],["/categories/index.html","695a71a98183400f90c5a6734fbb0551"],["/categories/日本語/index.html","60ac5b0d6144cb4febb9d90242878eba"],["/categories/日本語/page/2/index.html","b0f96c27ed00546e92e2233664f558fd"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bf45bb1167fb5ab2f9c6477b8d767a58"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e1d4782e2cc7e7c0bb4cb675dcef6c79"],["/page/10/index.html","604864ce074508a0d9841b8dd7542ad3"],["/page/11/index.html","3838d8ad49840a85b0f856e8a6bf8177"],["/page/12/index.html","9d673370cc36c6854242a04c1b3ecc63"],["/page/13/index.html","c041be3ac1cd9bdc8a0aabc896c45f06"],["/page/14/index.html","38406e21ca3a806e7cbc9abf6c351867"],["/page/15/index.html","37a2c39dcbfac4c8da1411d19d7492d0"],["/page/2/index.html","15a69dfbf793b9b6cc0d85abdcbbe776"],["/page/3/index.html","54f000205e5611feb274262b9f25ec51"],["/page/4/index.html","1de7f06dc2e02c67cfc085cfe032d6fa"],["/page/5/index.html","2e5dc52665e7880bd80d53fd0398fbe8"],["/page/6/index.html","81a45238b1c623280538c8ed703f1241"],["/page/7/index.html","cca3bcde74ec002d9684b722def385f2"],["/page/8/index.html","373758d2fc711ad70b83dc7690308547"],["/page/9/index.html","0d2fcc7c140ffc7f6b80e81c9d77ad8a"],["/sw-register.js","15cb996b6fd629486171f3267ac94b3a"],["/tags/10分作品/index.html","fea11f96aac1ad958079ac7887f35da8"],["/tags/3分作品/index.html","5acf39f88432715b0c6324b6fb6fd738"],["/tags/4分作品/index.html","eb8e83bc2d02210f1d0317d52f6608d3"],["/tags/5分作品/index.html","f7780f4f146549539998dfde03dfc78e"],["/tags/6分作品/index.html","d34e106903517cd90a266f83c889af8d"],["/tags/6分作品/page/2/index.html","4292194274c8d064b27b6214cd2280bf"],["/tags/6分作品/page/3/index.html","24cadea47f0071955c8566c6f65eaca4"],["/tags/7分作品/index.html","294d1305414874bda1962963d946d103"],["/tags/7分作品/page/2/index.html","0236f6fce52646fbbd51f9af6189fae9"],["/tags/7分作品/page/3/index.html","279926a4c171ce6dc596ad66e0d1a367"],["/tags/7分作品/page/4/index.html","b77cc9ff3d9e1f7c1e9f5d5e85ad71c5"],["/tags/8分作品/index.html","251d764f6ff7fc692ccc1f62f3461faa"],["/tags/8分作品/page/2/index.html","71b73fe64358d629405ad22e8336245d"],["/tags/8分作品/page/3/index.html","a95346a942feae0d20cdda2ef920d8f3"],["/tags/8分作品/page/4/index.html","96a1931a71b8b1b6f21ff40c90da7a0e"],["/tags/8分作品/page/5/index.html","77f36b52e44b043653491a14244bcaa0"],["/tags/9分作品/index.html","5b4e66de15696f0185e4850c4e5f6fe8"],["/tags/N5難度/index.html","0a860a18b75b430abe5fe26d5b1f38ae"],["/tags/N5難度/page/2/index.html","c82dec01de4d8aebbd6080749d050a2d"],["/tags/index.html","9353f58d69f82ca6f335b8a9985666ca"],["/tags/アボガド６/index.html","a504e88f07ee2e31e0145f6e0ee32f41"],["/tags/三秋縋/index.html","4c4664887ba55eee75c2e33faba4692c"],["/tags/中國武俠/index.html","7f64d6285a0fee6d06432c6803bb2414"],["/tags/中國言情/index.html","a8596008fc01518fe879fb0321aa201d"],["/tags/二宮敦人/index.html","cc52478306d5da2adf535d52ff83da7c"],["/tags/人性/index.html","d9e2df6c561e8fe0244987b81e58eeda"],["/tags/人際/index.html","d6608ccb243a0673da15c46c8efce834"],["/tags/住野夜/index.html","7c14f0e989b83505dc01d9b16fb07cb6"],["/tags/佐野徹夜/index.html","6e638574d44985b396568c991b575d11"],["/tags/努力/index.html","79ba2fa278a58d39c524c6165c05b2f4"],["/tags/動畫/index.html","0b9c88841ddaaf12dcef25047849cdc5"],["/tags/動畫/page/2/index.html","a3d65f02e6fb770fc9dfdc126c42c8ec"],["/tags/動畫/page/3/index.html","4e1902576af8832830e3ca19f4cfeab2"],["/tags/動畫/page/4/index.html","aa94eccdcc2f1fcd85eb0e5768254223"],["/tags/原諒/index.html","16979837bf2b3df9b861f491f851cb34"],["/tags/反烏托邦/index.html","3274f6a9c5ad6ab31b780cda808c6cc1"],["/tags/啞鳴/index.html","fded3e722724c07e0f3782e13914666f"],["/tags/喜劇/index.html","0f32605c22f8447dd3c43675590c2322"],["/tags/夢想/index.html","87cd5bd96736cc79055cfea66b36ce5d"],["/tags/天澤夏月/index.html","13b3bf2afd24b7b090e4e1860a5c15a1"],["/tags/學習/index.html","7b8347a9cc6aed9e2524886ffa276f41"],["/tags/學習/page/2/index.html","eee788fa9e738c54d3180599a5f2b1b7"],["/tags/宮崎駿/index.html","f971ee166e8f8b7dad7d5894a060bad8"],["/tags/小說/index.html","4dc4ea68614fcbc2aef71de811d6094e"],["/tags/小說/page/2/index.html","72815e994015a9007b708c05d0c538ed"],["/tags/小說/page/3/index.html","075e5836e6c1d1932f9b50509cdc3851"],["/tags/小說/page/4/index.html","c71393abab303496503fe0fe1bafd4be"],["/tags/小說/page/5/index.html","65b921647a4e5254db7b0cf2ccf4b806"],["/tags/小說/page/6/index.html","9b685e9dfb2075f96ff3200d085b3980"],["/tags/小說/page/7/index.html","f42e41e58c2efb271c02dffbb2c0ac74"],["/tags/平淡生活/index.html","7e5341208ba7ce1ccd4ada569b09a04c"],["/tags/幸福/index.html","2d483fb65a926573c07afe6a9da3c2a3"],["/tags/志茂文彥/index.html","7b931c8a0b9a078ccfb573b61a012ea5"],["/tags/愛情/index.html","e0c49bd34976934d4586554859f32e7c"],["/tags/愛情/page/2/index.html","8366306ac1363f517c215306054ff671"],["/tags/愛情/page/3/index.html","97ba4e0b75120299b38cf04e95b6bc0d"],["/tags/感動/index.html","d309ede633b96e1631a320fe74e43e65"],["/tags/懸疑/index.html","d1a06f735900fd8f1ea12103026f754e"],["/tags/懸疑科幻/index.html","623d1100cf8753f3e7a1a8a32aeb6aed"],["/tags/戀愛/index.html","f31703437708e1a6c2a85e317c020448"],["/tags/成長/index.html","a2678ea20f0e67fd172cc5771df36b4e"],["/tags/成長/page/2/index.html","cd3c5818a059b3a153cac7de9d1947e7"],["/tags/戰爭/index.html","bdc05371fba41fb02ab692254f6c20a7"],["/tags/推理/index.html","3293093586c260791e4df9a54de96fce"],["/tags/搞笑/index.html","6273a52da021f4c3d78b11e73335b17b"],["/tags/救贖/index.html","1d7651b14e65e2b2e8e2e45200b12678"],["/tags/斜線堂有紀/index.html","31351fdbfbee74bf87aca816f63ef57b"],["/tags/日常/index.html","996961b45c1c5c085539082f631087a0"],["/tags/末日/index.html","7dd1a451ceca1a82c8fd0d62f9b4c92f"],["/tags/校園/index.html","ec36a7b2f1de9b23f7b4c0855422cc72"],["/tags/武俠/index.html","2c73e056cc6b3b141d5bf842363ccb17"],["/tags/武俠言情/index.html","88294ff239c8d7227ece88e255ba6fa1"],["/tags/漫畫/index.html","fabcc12f91b9380716eeede4e5f15638"],["/tags/生命/index.html","3875c95906d7cb1d42c4d51d2cdba1b6"],["/tags/生命/page/2/index.html","7c5236fb7ac45efeb57313760a8f66f7"],["/tags/短篇/index.html","4256a96f07e39a6c285f71385476feff"],["/tags/社會/index.html","7416ab56b778458e4a83077eba911459"],["/tags/科幻/index.html","366c94191a70f4bc3ae22864c317b55e"],["/tags/童話/index.html","45c15a6d7ef2ace3dd0634cbd98b4633"],["/tags/競爭/index.html","d036a69baed42c746f83f94ac4b6eb79"],["/tags/自我/index.html","4e3059bf2512502a774cd5b3ec190ea2"],["/tags/自我認知/index.html","f2bdbd45f7d8219ec5bd6b15ce93e39e"],["/tags/葦舟ナツ/index.html","1311f4a8130bcb5dadb96e9bf2f91bcd"],["/tags/藤萬留/index.html","31bcf57cd1db13363016f049959fd4e4"],["/tags/親情/index.html","637963ed1e2464db8a4645416aafc74a"],["/tags/雜項/index.html","08c6b7e8e78ac2faef221877ec3f2fca"],["/tags/電影/index.html","857cd368396afb31ec669accb4831ce1"],["/tags/電影/page/2/index.html","67850266d32593cb63a017e43dab2a8d"],["/tags/霸凌/index.html","10f87f193e227dd662329bef1f06333d"],["/tags/青春/index.html","a6a2270b6068f2ab07f345a31a22c0f6"]];
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
