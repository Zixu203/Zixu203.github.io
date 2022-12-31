/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","5cc2a23248f788011c10017290fbd0e0"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","827fd59abb6229d7c2d409f028f740ed"],["/2019/12/25/Review/無法計算的青春/index.html","b7acc9af4311bc7d8cc87a4d3fd23819"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","bf8d8bd72784ba373336e2fb9556ab16"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","aa7e71206224e32db0f040814cb89eaf"],["/2020/01/19/Review/下雨天，不上學/index.html","31b45f6a824752e1bee1799073709a0f"],["/2020/01/26/Review/三日間的幸福/index.html","4c9b471afa46941a528f71d4ee888f0a"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","17d55facbd7112f809b8a428c8084a07"],["/2020/02/09/Review/青春期超感應/index.html","dda9485f49f475519f2f5cac0e802da8"],["/2020/02/15/Review/又做了，相同的夢/index.html","a876fe37a130b1280ad76cfa9e3610ba"],["/2020/02/22/Review/回憶當鋪/index.html","effdb3cc643a1d4f316bf8ea2b355c59"],["/2020/03/22/Review/不適合自殺的季節/index.html","34ebead4a5910fdb97ef0d37ca5242b7"],["/2020/04/26/Review/我們都無法成為大人/index.html","2ef266d6f0c726039687a96423dd9868"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","42b112e16e3c30cdd321a770964ed869"],["/2020/05/17/Review/人間失格/index.html","99ddcba4c5b8ac492e15eb0a64f6e7dd"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","7d9409a67cbc461fbc7852fe4abcd9a1"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","c136eb0e363abaffbb5b04491310550e"],["/2020/08/01/Review/銀河鐵道之夜/index.html","96f04cf8e5ffcb54a97a48a2e3c8a2bc"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","34781eb52afb84db73ee6d070c9cc363"],["/2020/08/16/Review/15歲的恐怖分子/index.html","ae754a9b54bf50532b89686d3830c0e9"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","f8d5c36020b5b1dd80e1fcc33e642384"],["/2020/09/13/Review/羅生門/index.html","1969ad4947d2a7b06c4e45e8bd320bc1"],["/2020/09/20/Review/闇夜的怪物/index.html","1c78960acd71de71c3017e1fe37bfc54"],["/2020/09/27/Review/14歲，明日的課表/index.html","b56b3fe9620093414307c6fc119ebd59"],["/2020/10/04/Review/致十年後的你/index.html","afd363da218699e264c02f16b91c23ec"],["/2020/11/08/Review/滅絕之園/index.html","7789ce2686c20c6a10e3b5060bcc4913"],["/2020/11/15/Review/將愛拒於門外/index.html","96c76291854a8b908bf2551d4281b58f"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","d108d739fa69cd9ed3f9acf8193e2973"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","f43234f7bb2a7c2da7c20808afb91b81"],["/2021/04/22/Review/道印/index.html","0167a3c4dc0adad2dbbb98a8127040b6"],["/2021/05/03/Review/戀入膏肓/index.html","3ca52e27f69a92cf2118c5f00e709c4e"],["/2021/05/10/Review/Dice/index.html","cf146f4a7812164c9ebdb7643b3ff147"],["/2021/05/15/Review/魔女之旅/index.html","e0767a754cee5ac13e436a3fadbe6487"],["/2021/05/28/Review/戀愛寄生蟲/index.html","d27d49113217c920e07e283c59426755"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","5299eca16befc6d5398b6baafda11c97"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","9cb15e86299416c6b0fb034f781a1f04"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","8ed288fc172ff4fb56f4dfc3130eb8a8"],["/2021/06/05/Review/流浪的月/index.html","5ce277cf9f49347990a484c94a367ddb"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","dba9d30b5eb60f6f63ea00c2d63220e7"],["/2021/06/13/Review/第一人稱單數/index.html","8b0c69fff9fe87ecbe828836abef9abc"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","0cafbd197bdf07d927fb753c74385aac"],["/2021/06/16/Review/願你幸福/index.html","5b03781ff3efe2697d420a8e5d276c02"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","a826802c20528c27ed9cd638e038f41d"],["/2021/06/21/Review/神隱少女/index.html","3b5b1e9c66075ae4301e2f51426a0c62"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","9ebc8cff21f0c71c0f5ef7bca269810d"],["/2021/06/23/Review/天空之城/index.html","3db57d28e4b6e280d7ea315de8eacc6f"],["/2021/06/24/Review/魔女宅急便/index.html","3dee9b4d107610b60e6103ab8f488096"],["/2021/06/25/Review/借物少女艾利緹/index.html","0a70a0c8054d8a2397c0a6a9142ab569"],["/2021/06/26/Review/魔法公主/index.html","49e75bab4fcd7b97375500fff4d3215d"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","11bf56d55892641dd0e2a7fe1c32a9c8"],["/2021/07/04/Review/飛雪與劍/index.html","08aa36b01da5c04238dabd4884541f9c"],["/2021/07/09/Review/地球防衛少年/index.html","9764fe398c76a229e9009b89d4c906f0"],["/2021/07/12/Review/Angel Beats!/index.html","35f8644544402b988ca577675c4b0fe4"],["/2021/07/13/Review/Clannad/index.html","ec692ec836ac6ff9034fc1986a7740f3"],["/2021/07/15/Review/AIR/index.html","e4c93e5ed734c6b09cd54a0046e13955"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","3a6c6dc1dd5792bddf2e6c0f7666aaf3"],["/2021/07/15/Review/螢火之森/index.html","556dba74b3ecb86ef61659a1ed966b82"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","17dd02d0444ea60c4fb332bdf230af8c"],["/2021/07/17/Review/奇蛋物語/index.html","3521ef23f13e3d959c9e5a26a108bbcf"],["/2021/07/18/Review/Vivy/index.html","44324a952389db864b8d39103d32ea2f"],["/2021/07/18/Review/請妳消失吧/index.html","bf22cb43d460253391766bcc468ee1ce"],["/2021/07/19/Review/漣漪的夜晚/index.html","065ba036beedd0bea3d6dbc03424801f"],["/2021/07/20/Review/月色真美/index.html","a83098447047805ef88a48596d50069d"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","e06f0325b57e4a0944f830bf66aad1e3"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","839939f1ca6a8983df91653b05a24c72"],["/2021/07/22/Review/罪惡王冠/index.html","83af32cbe7468287991359624b6ba2c4"],["/2021/07/23/Review/弱角友崎同學/index.html","94cf20ed4e2c2ccd7177312a7829762e"],["/2021/07/23/Review/惡之教程/index.html","b88cb2a383ea129ce6faf947de295cd3"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","563d48cd3208297bed59130b8c890384"],["/2021/07/25/Review/魔王勇者/index.html","c7e7134b896a0bb88e59af28e1b3d154"],["/2021/07/27/Review/一年A班的怪物/index.html","0b3ab32a81a240c55cf98598b7a0f957"],["/2021/07/27/Review/奇巧計程車/index.html","51d603833b7c2911e39f51f553074724"],["/2021/07/27/Review/專情的碧池學妹/index.html","6a82da543e4c4c5e9b303cd656ec9de6"],["/2021/07/29/Review/只有我不存在的城市/index.html","e11c7951444ab50a5362879b4466e9cd"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","c1e15ef8c16917d88a010c198b470bf5"],["/2021/07/30/Review/可塑性記憶/index.html","142357b9a8153afe3cff531e551d7572"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","81bc3e3d4e4e03f9a605e1ec7d453b12"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","54707ea9ffe9886d5c41c8a971931a81"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","6f1ff55e3608611b6a66e5dc89dd19d9"],["/2021/08/25/Review/清戀/index.html","3df72f0527c9b9b762dc5d2f6ad1ff6d"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","76b5a7271dde81d48ed83cac47c7f6ed"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","4fc8dd09727a88e81efd291d95d9966f"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","e78762f1583426c616e22abb507865d0"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","23c90dbe446d9725f549e3ab8455f9a0"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","2604fc0fe6826e087cb4f473ca86d6cf"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","03beda5e7c354e698e311957f00fa6fc"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","b04710b770ceee0d69a2a410bc6f5ade"],["/2021/10/16/Review/龍與雀斑公主/index.html","0dd8d72e931608c602e349773d7c093b"],["/2021/10/19/Review/孤狼不想開後宮/index.html","c6988c5f9231c131ee43bd2e6ce21cad"],["/2021/11/13/Review/徹夜之歌/index.html","d193899a5aa9102f6b4c4c591455aa79"],["/2021/11/24/Review/武煉巔峰/index.html","197a29030e5e014624c0d64aa9a25e66"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","4ca42be86e962ad34e39ae60d46d2d4a"],["/2022/01/28/Review/神醫凰后/index.html","83a34746c694f76f45a50ba90463d794"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","6bec09dfc3da7eaccf9055d3173dccd9"],["/2022/02/13/Review/夏日幽靈/index.html","7d54576c822feaf00b551a78041ea5b2"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","25a132f017e6a0fddd0647902f48e8ab"],["/2022/02/26/Review/賽馬娘/index.html","b85c188e1053813fa7be744733dead6a"],["/2022/02/27/Review/大欺詐師/index.html","18b2e8508a92a12c9ec321e36d8cd190"],["/2022/02/28/Review/前輩有夠煩/index.html","0d871a5c7a4ed14a403e4810c3498678"],["/2022/02/28/Review/碧藍之海/index.html","7ab263a2450c8599a5999e933228a0f2"],["/2022/03/05/Review/落第騎士英雄譚/index.html","55ba2ca37518bf5f5ba54dfb1ddb6400"],["/2022/03/06/Review/Another/index.html","180e12a8b6aa948ae2cff71f9b15e881"],["/2022/03/06/Review/入間同學入魔了/index.html","3b711a1ba1743ac620b6af5c75bd6cef"],["/2022/03/18/Review/再見宣言/index.html","af03716c3945ff219973153b4a9c81dd"],["/2022/03/23/Review/生若冬花的妳/index.html","bf5de3cdcce9ff4a90a6e16c073421cc"],["/2022/03/25/Review/天之弱/index.html","ffd038f8da4e3ce85335ff3c445de20a"],["/2022/03/31/Review/滅了天道之後轉生/index.html","7b4c9266ffe5e2d2b6a6760a95ba4c7c"],["/2022/04/30/Review/泡泡/index.html","dabf234c8e3a40d7c25ef2333afbfb9c"],["/2022/05/04/Programming/Dynamic Programming/index.html","70716de85bce839615b15cb25eb7aee8"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","f2a24f0b35433a852d2ab8f886176893"],["/2022/06/13/Review/偵探已經，死了/index.html","df14a19eef2d05821f0c3bbe642ab2c2"],["/2022/06/14/Review/黑色子彈/index.html","dbeb5d0c89ea93c7860bb682436e6d52"],["/2022/06/15/Review/黑白來看守所/index.html","573723fcb6aa43a5f8c7352bc334ad8a"],["/2022/06/16/Review/虛構推理/index.html","827cdc393d6f8d56ebadb535de79abe5"],["/2022/06/17/Review/戀愛與謊言/index.html","a3fbc402059037c7bbc6af28615dc431"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","232bbcfb56898d9d936c0df60a2dac1b"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","35cfffe16cfe49747b1dda560344104f"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","860e658cbe7c923e77b2d1d8672c76df"],["/2022/07/03/Review/Hello World/index.html","7a4cc8375bc923cabc7f1126c4c14f56"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","eb0b07329713b87a3ee6f548eab60833"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","df32722b42b9762bcfb64793a3357637"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","e125fba2e78f4bb47c6d345772948bdf"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","14ad4bdd2df995e34a870dfcd91e58a4"],["/2022/07/16/Japanese/動詞分類/index.html","6e9b817c728e267a5d25f8948d1a7fb5"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","9826ed8b4cb1c0ca22cd53c538dc1d8d"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","da1a55607e319616aff1d7a5763d8243"],["/2022/07/17/Japanese/音便/index.html","2f63c53de145314e7d14453add0fd505"],["/2022/07/18/Japanese/動詞 時態變化/index.html","774def2d4b092b91edd95a48708bd91c"],["/2022/07/19/Japanese/助詞用法整理1/index.html","e7e755aebf49618fa389212f35333504"],["/2022/07/26/Japanese/助詞用法整理2/index.html","0851c21c622192c1432c55f6ce1cde8c"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","933fa2c32c9c48a336c9d06cfc0f9f11"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","9d5217d143dbf21218b9734b70754c86"],["/2022/07/30/Japanese/疑問詞/index.html","bd632a1f8fc2a25f7e4cb33f3f7f667f"],["/2022/07/31/Japanese/助詞用法整理3/index.html","02caa9cffae85cee580ab210e21ce8ca"],["/2022/08/02/Japanese/副詞整理/index.html","22ac07f09b1c2ea29ae670b2008d5274"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","a1c055d860ffc6a65f6b3535bdf3ee72"],["/2022/11/04/Programming/Data Structure/index.html","e49e853e473f9b2c96a4bb56323af2c6"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","3aee3c068fafa7bd20a1ebf83ce675cb"],["/2022/11/22/Review/組長女兒與保姆/index.html","b0aacb876104dcb6b17c9b46a5d6e773"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","4d67945c85526ded3ba2e9170429bc0f"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","269ba7e1ea36d67de9c7c5aa87bd244f"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","ad904461f67bd7a523a7d4d694630612"],["/404.html","5d8e166400b8e7dfbc34295d4ecfa573"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","f9f9727f3c73c5d94a5748ffb172a9ac"],["/archives/2019/11/index.html","71c0f107a59c88bcba3823b06c85f5e4"],["/archives/2019/12/index.html","f3c46bedb57b658df72048a938ef32f5"],["/archives/2019/index.html","e78947ef29304b8c4fd01a0eb5e53848"],["/archives/2020/01/index.html","7b58e18da79334f7d314c81a2ffaddc3"],["/archives/2020/02/index.html","3fa1b124228321b792fe2fe0fce812d5"],["/archives/2020/03/index.html","fc624429c47ef83621f0c6330b6ebec6"],["/archives/2020/04/index.html","fb58be3fd047060e07ff22845adb09dd"],["/archives/2020/05/index.html","7dba145bc78faa7aba54a94809eb63be"],["/archives/2020/07/index.html","564a79c1d4eccce2c3a62801685f2447"],["/archives/2020/08/index.html","404addc37613e2fdd4875310f10cc11c"],["/archives/2020/09/index.html","0342b3f0440c7c0a5f2fb88b1a7a9aba"],["/archives/2020/10/index.html","6e06c649a6a61e090c545adb367766c0"],["/archives/2020/11/index.html","a8770e71e9d6551ba9e8121f2743c87c"],["/archives/2020/12/index.html","63611e96b3251d4f04a6e4f3fcdba3a5"],["/archives/2020/index.html","4edbde5dc5226832a8853f5177690c91"],["/archives/2020/page/2/index.html","18a9a24a8c5e6b5b2bf23bf42b354dde"],["/archives/2020/page/3/index.html","abe3455c9c0ca94909754e3f305b4d04"],["/archives/2021/04/index.html","81058c61b4df75dd2433878ba54cddd2"],["/archives/2021/05/index.html","68830eb667128e4cf430f8cf4c3dc5dd"],["/archives/2021/06/index.html","4edbea8b44355a41e4b5a0b5f89e57c5"],["/archives/2021/06/page/2/index.html","3811e48bdd52e99ac70177085a4159e7"],["/archives/2021/07/index.html","6c5404d3d418407481ddc112fb84fd52"],["/archives/2021/07/page/2/index.html","72564680bd7ffb6d35ebd7f423393469"],["/archives/2021/07/page/3/index.html","a1c6d8d4ba5f79cc55e1f4e3af8e294e"],["/archives/2021/08/index.html","a8f9733f80e610d3fb5c46cd03685a20"],["/archives/2021/09/index.html","885e05ee2f97a4ee01fd318f227917ad"],["/archives/2021/10/index.html","d1aa22754ecec8dfb5476eb7d2689b50"],["/archives/2021/11/index.html","58933695e52f6473404e08f7747bcb53"],["/archives/2021/12/index.html","bbf3fc4b37e2c6c4fb5177dda99ba618"],["/archives/2021/index.html","ba09382932dd9bc96c6ab881612f12f2"],["/archives/2021/page/2/index.html","351a5f887af44f4c467ae74c5c43c0b9"],["/archives/2021/page/3/index.html","f0e8907eec5a8bab071657a5b2788e4d"],["/archives/2021/page/4/index.html","2496c4d30e45d2fbcfebd5211ba9048a"],["/archives/2021/page/5/index.html","e39a8f2c7b69b6852b318c4de6320cb1"],["/archives/2021/page/6/index.html","8b774ca29256638087d8f32bd66e3838"],["/archives/2021/page/7/index.html","917e941e0f293435b08929eed6744d5e"],["/archives/2022/01/index.html","69bba8c77942e71dd6d9bfccc3530f54"],["/archives/2022/02/index.html","3c8ac643ba8baa48b4fb92f3bf8d3f70"],["/archives/2022/03/index.html","63efc0c9ec42d84b05a1769bb3fe8a21"],["/archives/2022/04/index.html","7506c1c8171da7c4986784ff0d57a3d9"],["/archives/2022/05/index.html","33e04bb4e15203c254bdf84a07f23ed8"],["/archives/2022/06/index.html","36163bbcca23977eac626694d763d590"],["/archives/2022/07/index.html","ace9354d80f949dc7f302c300738f82a"],["/archives/2022/07/page/2/index.html","8bbad87adf78fca4906ee1e4e8498b21"],["/archives/2022/08/index.html","7c7515c134050cc9ca4d97d2ff674aa8"],["/archives/2022/11/index.html","fabf6356b634eac689cca55133139f84"],["/archives/2022/12/index.html","d25d033bd411dafe87f5c6dbd72ddf9e"],["/archives/2022/index.html","0bd3a842775b46079bc51e26518088fc"],["/archives/2022/page/2/index.html","0cc06e89208b2f45b034db1a73ded755"],["/archives/2022/page/3/index.html","0ebab279fa9f012268d2f16108e3458d"],["/archives/2022/page/4/index.html","edfe0538b5c7ccbf2a4daa6e7f7d9956"],["/archives/2022/page/5/index.html","66759a4f8e7bc7885130e7c9f7039e73"],["/archives/index.html","ab654cb60dd0941430d7a6228e6b4f5b"],["/archives/page/10/index.html","216677bfc96f0f1847f088dcdbd19fb3"],["/archives/page/11/index.html","4054be25ca68521815ae5cb01176b905"],["/archives/page/12/index.html","0d4108f4ef99850ec7846717baea8b37"],["/archives/page/13/index.html","b896acd283d3f6c2ced55cd13b6c086a"],["/archives/page/14/index.html","76c02760ad40f23b4f3daa775095c4ce"],["/archives/page/15/index.html","325cc536b061c12bed43664cab35f7f0"],["/archives/page/2/index.html","d581180ca78ab91246ecd9112c87d384"],["/archives/page/3/index.html","c7a207eaf5cd659300b712b2962b0eea"],["/archives/page/4/index.html","ec659065d2619c7eb5d24c1525beb15a"],["/archives/page/5/index.html","eba1ccb2e168acbdf7ee4f04a28ce249"],["/archives/page/6/index.html","5295af139a4cff4beae848a85c18d700"],["/archives/page/7/index.html","a91d9baad504ad99f0bf7a2dcc08aae2"],["/archives/page/8/index.html","886e908cc8e3775c2b8bfc580fc40200"],["/archives/page/9/index.html","62b493613946b3d1f727182583b20e60"],["/categories/Programming/index.html","d444128b5bea469a6fbc723076150916"],["/categories/Review/index.html","216cd3eb2dfb41fe9d8dbf66e79d03b4"],["/categories/Review/page/10/index.html","17fffcd42999c380a1ed20f15c2628b9"],["/categories/Review/page/11/index.html","ee05ff16a18e6ab56f5eb38b3f61da2d"],["/categories/Review/page/12/index.html","44a6ab63279da86790ab24a3a59fd5e8"],["/categories/Review/page/13/index.html","b0c5b4a2d1d1e564f5e6af60b91bc28d"],["/categories/Review/page/2/index.html","4614ae1f430a7c4c46ccdddd682e1650"],["/categories/Review/page/3/index.html","947ac983f2291d2cc86e02510f4abcd3"],["/categories/Review/page/4/index.html","4fe5e5fd4bbb9e7ab43de28ed103ce53"],["/categories/Review/page/5/index.html","adf9358ecb082ee9e049243e5760e68a"],["/categories/Review/page/6/index.html","89bec3dcc74728bf084d320f6642871a"],["/categories/Review/page/7/index.html","77c929b3b7613d1a27f90b0cffc5e673"],["/categories/Review/page/8/index.html","78ea5232fae1a025ecba896f1c99260e"],["/categories/Review/page/9/index.html","77dd13a137f79a3236a194203eada351"],["/categories/index.html","9d6766ccc6a228cab8a5effb9372f11c"],["/categories/日本語/index.html","467bfd59fe82ca4fee2ec6ea8657c1cf"],["/categories/日本語/page/2/index.html","677d9747c3c7eb01861a52a7cd4cfb4c"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8e5b7192e71589e71abf3f291206dc87"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","bf32f4e9968f562685a6b46aa8a0fa3e"],["/page/10/index.html","47bac084d9af2410ec775dd13c10f6ab"],["/page/11/index.html","af89176c901b5f391aad2d431ec9858e"],["/page/12/index.html","219784e7f421acd08681373aa1643256"],["/page/13/index.html","5808dfc908eb2e720a021f830e6a5221"],["/page/14/index.html","e66757ec11ed0a7b3f4c21d8ed99811d"],["/page/15/index.html","bcf8c1d07046e120633bcca3f9d0e1b0"],["/page/2/index.html","0f1c667ed98b67d8ec5d02ed2bfac1c9"],["/page/3/index.html","8af994eaade474589e9c5847d0f45fcf"],["/page/4/index.html","b38f45ef8b90e859e928a20193275e73"],["/page/5/index.html","553b372637c740b7f2f4eb6660d4b71f"],["/page/6/index.html","f5f6a385895f0509cac69c27b941297e"],["/page/7/index.html","1daee40714dd4548088bf2641218e5fb"],["/page/8/index.html","f1aabd0b5ae1b06391cf5272666f7563"],["/page/9/index.html","f15cb6f42d190d2714e018869fb95f91"],["/sw-register.js","fad6cab3e2478097f893ae69b16092da"],["/tags/10分作品/index.html","7489c5d5558f9300510c672de6a495d8"],["/tags/3分作品/index.html","760ca8aea44adbe82a463d3a24152155"],["/tags/4分作品/index.html","77a2a6199521d8478decd7db8299c878"],["/tags/5分作品/index.html","fb6a30d31888104d40d886b381a21540"],["/tags/6分作品/index.html","a58582efa13b79cc3ce3874406f41652"],["/tags/6分作品/page/2/index.html","59f2f31e2c410ce54670a067b9661381"],["/tags/6分作品/page/3/index.html","59339204cbe157ff90c0b00b0babf0ef"],["/tags/7分作品/index.html","4117db81bec935197c2fd27b3ca76a81"],["/tags/7分作品/page/2/index.html","92f1d29b4cd67479388065832edc9ebe"],["/tags/7分作品/page/3/index.html","eb9d7af8739f6dde8e27e96d0df8ea29"],["/tags/7分作品/page/4/index.html","959e623e48e91f98091f95678460b510"],["/tags/8分作品/index.html","6ed091bd14da261c7d1f206e405b7e3e"],["/tags/8分作品/page/2/index.html","d0c0ba85e3e988e3787c048ec6e7dda6"],["/tags/8分作品/page/3/index.html","30e930abef47c6e2e4d5b9d2fef55c69"],["/tags/8分作品/page/4/index.html","46a12c4839c319b0ae49ae7643b6b858"],["/tags/8分作品/page/5/index.html","ad7045fa28e49d3f2e232eb989149da2"],["/tags/9分作品/index.html","dd53be758c984b1657512000a6b85647"],["/tags/N5難度/index.html","347ca84da9aadeb2ad99c80e34fa87a7"],["/tags/N5難度/page/2/index.html","ba6f9d17d6ed299cbf52f94eac626d67"],["/tags/index.html","05699ea770640862276a4cacc1f9cc5c"],["/tags/アボガド６/index.html","0a109e434d650286ac019307c072d74f"],["/tags/三秋縋/index.html","c2d85bc22cfa20d1bcaa3b2edaa28451"],["/tags/中國武俠/index.html","a447f8708309a1ade9e6e4c55faa7bc2"],["/tags/中國言情/index.html","2799b13257c6f340391611a0edd5aa77"],["/tags/二宮敦人/index.html","4a82ead4296f53d2bec3be88d6a65875"],["/tags/人性/index.html","a5b43cbca3a7f0bf360ed83e43f2a8d6"],["/tags/人際/index.html","77254fb14cae1c2d5c05fe67ecf6c5b2"],["/tags/住野夜/index.html","c8dc5cbef7337ca45c10f501f3714b45"],["/tags/佐野徹夜/index.html","ec5f1b8ac12a3c29ec73e91fa01d12f8"],["/tags/努力/index.html","e133f2b67d9479c3006fbc3721079709"],["/tags/動畫/index.html","b2a4799ab23b0ecc89ba75190de9597d"],["/tags/動畫/page/2/index.html","23a52518b003ab6f32bdebc89ccc7ae7"],["/tags/動畫/page/3/index.html","af733ed52b6fb5a0a4e5e3c50a0b4b1d"],["/tags/動畫/page/4/index.html","49b2a677489ae74b39bbabba8bf53d15"],["/tags/原諒/index.html","5a67e035a5972eea6ea363efdea45f89"],["/tags/反烏托邦/index.html","8c8ae138f0ebdc1ae7611573d8f17490"],["/tags/啞鳴/index.html","d8817d078e66760a5e0e1ebabe078c5c"],["/tags/喜劇/index.html","8cfd796e2b6f32702ad6905865d96803"],["/tags/夢想/index.html","dee1d7f2d0490141794a0dd3dd82e9b6"],["/tags/天澤夏月/index.html","df7a234f7c21221b331fe822a4c17b49"],["/tags/學習/index.html","dae404938e7eee8a7cbbfefb41a2dae0"],["/tags/學習/page/2/index.html","bf92b508fefb378b418fe4105b92c3a5"],["/tags/宮崎駿/index.html","07573cd91560c65c1dfad954aec2d7af"],["/tags/小說/index.html","03094eed6d920d9a02487bbe5ad775d4"],["/tags/小說/page/2/index.html","c2ab45c762f2b4bd5f9179b5c60c54ad"],["/tags/小說/page/3/index.html","da241732d934fc318f268284dee2b9e2"],["/tags/小說/page/4/index.html","399e1f33c0b445d76239cb66eb2612c4"],["/tags/小說/page/5/index.html","3cc84b979626aacac8efd8867ce2747e"],["/tags/小說/page/6/index.html","0e9299b098fa85b838b0bdac1a0eede1"],["/tags/小說/page/7/index.html","80a0729c955a0458f731771ae2b3fb62"],["/tags/平淡生活/index.html","ba82656fb422abe41c3c034f545435a0"],["/tags/幸福/index.html","a00e7180e8afcc5aabd9ed941387d334"],["/tags/志茂文彥/index.html","b60d49962738a40b307c881e6cee38aa"],["/tags/愛情/index.html","fd3a570b7c6343999df3518ba4a3f583"],["/tags/愛情/page/2/index.html","a29542c09b171f410e143b1735792dbd"],["/tags/愛情/page/3/index.html","386ee16a328475e37346f785ff001e64"],["/tags/感動/index.html","1d97e45da7e10e7a8d8e8c0206c181cf"],["/tags/懸疑/index.html","95e6aee4b897beab2fea1bce3ae487ce"],["/tags/懸疑科幻/index.html","592375a754121425b9ffea53272fa4d1"],["/tags/戀愛/index.html","763e72c69ac7a20e4ee92722e74ea3dd"],["/tags/成長/index.html","22a87e0af8a34c68b45efa2f0921225e"],["/tags/成長/page/2/index.html","4dd6d43db8c2ec29e12ed577c8166a77"],["/tags/戰爭/index.html","79225babb921462ecf3056f0f5ca915c"],["/tags/推理/index.html","d98b18a40deee79b917e79a9f27bb3f5"],["/tags/搞笑/index.html","788b7f93e5122fa259cd5b2462cbaed6"],["/tags/救贖/index.html","4e80328e003c09cb9772bce1a26940e9"],["/tags/斜線堂有紀/index.html","b0fb769dd4197651ad7f1325d1609c3f"],["/tags/日常/index.html","21b9d3622302f81075996267ea7039bc"],["/tags/末日/index.html","4c49fc15b8a72cea487dc7a2a9678513"],["/tags/校園/index.html","3befd992c17519db7d8ea8156a8ad4d1"],["/tags/武俠/index.html","416165f73736cf337a0bf3558004d5d1"],["/tags/武俠言情/index.html","b3319b68cb6866b4a8b775f135b33301"],["/tags/漫畫/index.html","de78e4cf79b4fc670829c76e54d9b6c9"],["/tags/生命/index.html","3d13b4aaa6723c7f8abf258db31dcb0d"],["/tags/生命/page/2/index.html","7585ba3b1fae1fb41eb398e49af67c19"],["/tags/短篇/index.html","c4e9b9ca728e1add591da6c50f9fd54f"],["/tags/社會/index.html","262f58d147d0e25770045a1d7e74dae6"],["/tags/科幻/index.html","392d26f61722423d92fdb8352152cd05"],["/tags/童話/index.html","ee3d15f09c3b33e5adba92a6f0af66d3"],["/tags/競爭/index.html","ba6b66bc34a51e5cd0127e52ff2c8e08"],["/tags/自我/index.html","463546f0ea4e8646d6c6329b74709e21"],["/tags/自我認知/index.html","39dca15e75fc0953aa7cf02105f1d433"],["/tags/葦舟ナツ/index.html","d045ad990a937ce5303bef1de575d6ae"],["/tags/藤萬留/index.html","f68b449d0373b19770d29b5b491a7309"],["/tags/親情/index.html","c7f0accae2b8701c55e399a8b3a2b7c6"],["/tags/雜項/index.html","7aa05a3e2cc79c7548f492d089675afb"],["/tags/電影/index.html","eaebb5b00310485d5173f5541c4459ea"],["/tags/電影/page/2/index.html","1ea3042a30e92f089ad1d0a8472a1d7e"],["/tags/霸凌/index.html","bbd249edaf1cfc47df885a11c30044d7"],["/tags/青春/index.html","b78de6003789981dfb96af8dc7995e93"]];
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
