/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","698a4292932d46eae30c35415d2a5661"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","d5bb6cd08b0e58f53095d7fb1feac13c"],["/2019/12/25/Review/無法計算的青春/index.html","d44deba1766d38a94e2eb94c499d6c89"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","bd4ed574dce9e8913ba492818f55e0ec"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","a92052021389dad08fcc05a88df41b62"],["/2020/01/19/Review/下雨天，不上學/index.html","c92c772b50e07cbd9c3580cce8cd159a"],["/2020/01/26/Review/三日間的幸福/index.html","6b7c569b655904e882b4c8add081e24b"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","dda4eb7533f03de499bf4b12ecd86b1d"],["/2020/02/09/Review/青春期超感應/index.html","8990e7909d3c99f152ad85828c3b1383"],["/2020/02/15/Review/又做了，相同的夢/index.html","b3f2c9f703cc55942ca919d5071bdf9d"],["/2020/02/22/Review/回憶當鋪/index.html","fdd25fdfe2bb8e1ec07c88d1e48bc230"],["/2020/03/22/Review/不適合自殺的季節/index.html","0c302ec364db888281624cff4a60fc0f"],["/2020/04/26/Review/我們都無法成為大人/index.html","36c053fb75b98312c1193bdf02565310"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9cdebbc6d7629277780beffa327603d4"],["/2020/05/17/Review/人間失格/index.html","0fcd23ae95af1a7e12663ddd50342696"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","9597eff89e4bf858cce3894135be615d"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","1b40ee8017a8b8daf3970ec207d66437"],["/2020/08/01/Review/銀河鐵道之夜/index.html","6c0ab3408a9f172b1ed68fbc421acd26"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","9c1e58b40265a0540e5548b3611c32ae"],["/2020/08/16/Review/15歲的恐怖分子/index.html","81e5f43d00a33da058b0a971a6bf6bcf"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","67a5508b33d207f8ac2b0366875973b5"],["/2020/09/13/Review/羅生門/index.html","9ab8e65719967665a8a7c8131790eef3"],["/2020/09/20/Review/闇夜的怪物/index.html","204b28e72213b6a153ad2a044e60a271"],["/2020/09/27/Review/14歲，明日的課表/index.html","a496c4074035938db03225e8fe3d635f"],["/2020/10/04/Review/致十年後的你/index.html","c2f191022263b2612b469658fdf71316"],["/2020/11/08/Review/滅絕之園/index.html","31129ef6773a8bf6e8d9d83ea97f54f2"],["/2020/11/15/Review/將愛拒於門外/index.html","201cd27b4ecdeb8e6b6c9e091eae2229"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","5fde0684e363e966978615af6b757162"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","c0a84b318dace89d7303629b3fac57da"],["/2021/04/22/Review/道印/index.html","c4d3e020987e31af9759f456b5a1a9af"],["/2021/05/03/Review/戀入膏肓/index.html","eefe2e564b36342e81e10b0058ec6716"],["/2021/05/10/Review/Dice/index.html","958ff6fb54ae230cb79df6886a8093d0"],["/2021/05/15/Review/魔女之旅/index.html","21d2d4554c78c8a7d97009761201ea91"],["/2021/05/28/Review/戀愛寄生蟲/index.html","2c4b385abf11eb13fa8b71756dc0af77"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","a88f70da1007cd04efef4813ab926d70"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","c49a54fa032b5f1a86304aba442fefe2"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","55598cc42c35a92297dcb5c316628daa"],["/2021/06/05/Review/流浪的月/index.html","941da428ce6ff3baa6d54e80ba1541a0"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","ded8dcfb6cb9dce2a54828fe828b3ea7"],["/2021/06/13/Review/第一人稱單數/index.html","803bbc311c9f2c6fb6ab16ac9c1538ba"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","415f6966359613df6d1470b7000eab72"],["/2021/06/16/Review/願你幸福/index.html","ac02575893f512ddc3034b1e886ad123"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","6445a90a103de67cd5ddd750a84ad744"],["/2021/06/21/Review/神隱少女/index.html","ab1920ffee4d67ce83a38296f09385a5"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","1e65ee6f6d1ae345e3a4731885a25ba4"],["/2021/06/23/Review/天空之城/index.html","fbc3e65ecc6a755459c10984c38fd610"],["/2021/06/24/Review/魔女宅急便/index.html","787f55477df870aff9ce11487e0dcecb"],["/2021/06/25/Review/借物少女艾利緹/index.html","a066bb789321ed6c7905e56a3c497e19"],["/2021/06/26/Review/魔法公主/index.html","3229288169bddddaaa057ad4c82596ff"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","8f663f19060457e92fac547ced52e9f9"],["/2021/07/04/Review/飛雪與劍/index.html","06236273a321d26357d45feff815faad"],["/2021/07/09/Review/地球防衛少年/index.html","1849d2dcdcfd4743a10cfe5bed07dc85"],["/2021/07/12/Review/Angel Beats!/index.html","7ad1e41ee5d707fe8eeb51273ba5d010"],["/2021/07/13/Review/Clannad/index.html","c23d1c3601f0a6204c1b9b4bff98c700"],["/2021/07/15/Review/AIR/index.html","ee558013f4d9788685ffce91f724c6c6"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","d2eab18f4503e126100a04f983e958cd"],["/2021/07/15/Review/螢火之森/index.html","9cd213783d082a3c7ac5d9080559d575"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","9e5626d928e3b3b24f1fb5d1e23e2f08"],["/2021/07/17/Review/奇蛋物語/index.html","f4208bca103ac5724974b35e03ff36a4"],["/2021/07/18/Review/Vivy/index.html","73861ce38ca1a0058e3dba59f2c7a508"],["/2021/07/18/Review/請妳消失吧/index.html","f8279284a222f00a5aad52aa9d0a22e1"],["/2021/07/19/Review/漣漪的夜晚/index.html","5ab078e45ade467dcd2b4aeb9df46a71"],["/2021/07/20/Review/月色真美/index.html","bea9645acfec6e05ce0c68eae2b8ff16"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","cfc92b2997dc0c259c8b52f0613cf517"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","62a7fc27062be02e2070a463c7495c00"],["/2021/07/22/Review/罪惡王冠/index.html","adfe240a0ebf2253cfd7736326b325ae"],["/2021/07/23/Review/弱角友崎同學/index.html","84a1d0f3c4654a609067ec551151d1b6"],["/2021/07/23/Review/惡之教程/index.html","7a77ee0f91b2c7f1d3e8435ccecaf1d3"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","3a9e9fe2ce21e6bc9ec178fba24bd28a"],["/2021/07/25/Review/魔王勇者/index.html","61669e077e1a283e42fa4fd090c8632f"],["/2021/07/27/Review/一年A班的怪物/index.html","5d842cd6b76d32386fa2e460e98764f7"],["/2021/07/27/Review/奇巧計程車/index.html","306c8979214f1da9e5d2af172e959f69"],["/2021/07/27/Review/專情的碧池學妹/index.html","92cf9acde2f7f3bd5725fa34de32a6e0"],["/2021/07/29/Review/只有我不存在的城市/index.html","d7bc08566b46d93bc3e780999089bd9f"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","42e7aa1bdd87b78f43d8710a86598428"],["/2021/07/30/Review/可塑性記憶/index.html","9968eb148410ca8ddb52a44344287124"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","fbae3f65315f5ab7f2621d6de3f2bee2"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","9268a0e75feb02567932847035fd8e1b"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","ce840e9d5cda4c7ef1af4678e0c2abe5"],["/2021/08/25/Review/清戀/index.html","61b631fce1025bb6b0edfd7130ebe94d"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","edf93b1f26b8e8161d06eb83c44e9369"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","6b23b295cddba1a415c91718d96e3351"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","f40180f1dcdda7ea94e35aa6b0d4f5ea"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","c24b4bd239e5ad6e52649c2fe371dc28"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","e8c7fbd688e9a19b144ee707122bdb2d"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","2de3150621e15f21fd7c4672ff6946b3"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","fa6347b40785184ae3392d96dcdb0b5c"],["/2021/10/16/Review/龍與雀斑公主/index.html","0553c606ee04b44a9937f2b596f80c51"],["/2021/10/19/Review/孤狼不想開後宮/index.html","9da84aed95fd89a1e63c3c87d28b52dc"],["/2021/11/13/Review/徹夜之歌/index.html","e95cebec89e6e5e1782fcb9fcf81325e"],["/2021/11/24/Review/武煉巔峰/index.html","2a1a757d83fb5fbc546131df2b2bcf01"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","1bd0615f95cfb46984fd6954af800f51"],["/2022/01/28/Review/神醫凰后/index.html","2388f39b4bfc020a9d486e9fbee3fa1a"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","76ab4376be0aadc18f9e83467ff7864a"],["/2022/02/13/Review/夏日幽靈/index.html","54fa5cd56b35ffb567090ce1c1c9767c"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","b0e2dcef59c1eae41905cc913a6f35ac"],["/2022/02/26/Review/賽馬娘/index.html","daaf6f0086406a794926f0b63d43360c"],["/2022/02/27/Review/大欺詐師/index.html","85244a83a7861730b08243a4390c40fc"],["/2022/02/28/Review/前輩有夠煩/index.html","f7432402926d2c41230195ff0779494d"],["/2022/02/28/Review/碧藍之海/index.html","786a71bc6b2b4ef0175126d21670df88"],["/2022/03/05/Review/落第騎士英雄譚/index.html","78ec751b59c5d76c773910ebe1289582"],["/2022/03/06/Review/Another/index.html","78bc87a7f028b8e298dbf81341438a39"],["/2022/03/06/Review/入間同學入魔了/index.html","0e3101eff3fc6f474b81ba8bf413192a"],["/2022/03/18/Review/再見宣言/index.html","04fe357d7968d9a4535b0154ebebe62e"],["/2022/03/23/Review/生若冬花的妳/index.html","d25150a31e56f6dc8e3d85481f49cb1d"],["/2022/03/25/Review/天之弱/index.html","cf5390772f565c2335adc31fef65abe9"],["/2022/03/31/Review/滅了天道之後轉生/index.html","a55a648e55dc344f618a39b005925b59"],["/2022/04/30/Review/泡泡/index.html","72c3ffe29aadfb9f61678402381e0577"],["/2022/05/04/Alogrithm/Dynamic Programming/index.html","df9caffb49c6af3479b0e9034da25b8d"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","0678b341a90f203f04fc4bd12a7234ab"],["/2022/06/13/Review/偵探已經，死了/index.html","adb203824539ea4c3321d801ef977bab"],["/2022/06/14/Review/黑色子彈/index.html","8561caed3b875fff385025d3b4f824ef"],["/2022/06/15/Review/黑白來看守所/index.html","08cfa723710fd5f00016e5d3d4b9fc80"],["/2022/06/16/Review/虛構推理/index.html","93a7727759178f74cd647fb34fcbf58f"],["/2022/06/17/Review/戀愛與謊言/index.html","9fedf590db3320693b72c662253e9d71"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","002be819ae5947f6eeb34258a0a01dbc"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","3598c2be90549d8c7c33028284b1b9bc"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","abdff7617adf2c65245f68b6e3a63ef8"],["/2022/07/03/Review/Hello World/index.html","cc767ca06a4128ad3e06ff9fb13fd1c6"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","6f8c7fcd0c9eda6e296f85ca30592dba"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","b6b40a25845e38d807fc2a907fcffdc1"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","74bcd245765cdc7044fa8df08f8f5fbf"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","149b5dbf6b8a85315624cb568fc7f766"],["/2022/07/16/Japanese/動詞分類/index.html","14970e338804f6918f9fd738c022cc8f"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","0b6420ff44554d006871cd1854886d69"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","d81f1425d24744168569a935449dfe71"],["/2022/07/17/Japanese/音便/index.html","9e3f3a8f4e634951af16cc2137eda775"],["/2022/07/18/Japanese/動詞 時態變化/index.html","b52ef71ebf1d84311b02d55b6fa14bcb"],["/2022/07/19/Japanese/助詞用法整理1/index.html","74d3f49f1fb77ce0591ed4e06d938891"],["/2022/07/26/Japanese/助詞用法整理2/index.html","435e81ae76c352ecc9ce21a8445b10dd"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","ec61339bffc69673a1c4cd0e84f34216"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","490a36e147092f934bb8cfdb9b67c377"],["/2022/07/30/Japanese/疑問詞/index.html","609ad4eafad3cb3ee6391d970ab4239b"],["/2022/07/31/Japanese/助詞用法整理3/index.html","3439b45fdaf461f47e203a2db15af74c"],["/2022/08/02/Japanese/副詞整理/index.html","7ee3f51f656227db6a0d0aa8c28ff9cf"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","cafe4d64876a454be880af58e263d29b"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","1c1ac0d4bb7cb67244c42de0a83fcdef"],["/2022/11/22/Review/組長女兒與保姆/index.html","269edbf8788cd8d990bfa8372b22c615"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","a181966c73db07fad2914023cd88d62b"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","005cd953518413b70a1e9186f255e2f1"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","a42310e039bd77bcdccf7dbfcd3a5325"],["/404.html","cde55c1e42b38bdd276ed9df824c65a0"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","3a9041c9a2ef2cc9bb0bcc1ad373d249"],["/archives/2019/11/index.html","63d61d9879dc3afad6c6ea188c0ea531"],["/archives/2019/12/index.html","7bea5ba45de761debe7aa78f47e7114a"],["/archives/2019/index.html","c5f1163118804d8a31ecf25e186735b7"],["/archives/2020/01/index.html","355a298e7d5c6520b537da7868e0c069"],["/archives/2020/02/index.html","3f6e738c72ba520eaacbb500e6a7d9bc"],["/archives/2020/03/index.html","89fc136530a64e7277a7cd61988fc359"],["/archives/2020/04/index.html","722147227aa110b7d7e49542e672383a"],["/archives/2020/05/index.html","cb349f504742352742bdefbb19aa3245"],["/archives/2020/07/index.html","a66bbbe84b324f4db8fad8d0d9e33988"],["/archives/2020/08/index.html","d9245556f2341a3eb47ad006e71dad43"],["/archives/2020/09/index.html","fe67cb928c2d0df206cc45ca3f30c107"],["/archives/2020/10/index.html","8795232b9dca8e615fcd94756f80ec38"],["/archives/2020/11/index.html","48da0f8c42f9c9e0fbde52094883244d"],["/archives/2020/12/index.html","15e1a92ba5901e89caa44f7235b66116"],["/archives/2020/index.html","f0eb42d8074c7aed7fad9fd17bfd66ac"],["/archives/2020/page/2/index.html","b5e8dda7463a9c329952531a207cf45e"],["/archives/2020/page/3/index.html","5ecc582c43c3fffa6e86d92eb10d8234"],["/archives/2021/04/index.html","792d1e4fcf51216d43b2609b98e2d01d"],["/archives/2021/05/index.html","d9ea5709795748ccb31115834bf98caf"],["/archives/2021/06/index.html","bc9d8af0175c77c6565f0b6a53537750"],["/archives/2021/06/page/2/index.html","9d55a41f38fca569e41006ebdb96d8d5"],["/archives/2021/07/index.html","b34d8fcf2fec7111e0ff488a6ca0fd72"],["/archives/2021/07/page/2/index.html","b6ee5adf382862ed4327785921d246c6"],["/archives/2021/07/page/3/index.html","237fbbcf786f0143b8a710aec0502af8"],["/archives/2021/08/index.html","801bfaf68b3910d80e1f962bb225eccb"],["/archives/2021/09/index.html","1b6222382a900895bb7874c6b9710563"],["/archives/2021/10/index.html","c9cca69f4fdfbe168ee8eccf76fe8307"],["/archives/2021/11/index.html","078196f02be5146c7edbec4b79862e69"],["/archives/2021/12/index.html","382a6ecfae59db53c75b3ec9cab4d15f"],["/archives/2021/index.html","9967f924fe5d8cdc6ca66ded059a36ba"],["/archives/2021/page/2/index.html","538aa21b14e8de5e8be7f67cb805c43f"],["/archives/2021/page/3/index.html","6b0f7213c128a0fc78cf4a91f890f2ca"],["/archives/2021/page/4/index.html","4ab49867a81f93b3d8237daf171fc00e"],["/archives/2021/page/5/index.html","5c00c7b53ed12ab05951095134688285"],["/archives/2021/page/6/index.html","6b3cb6cb47aa61ad970717e77725fd1c"],["/archives/2021/page/7/index.html","e9070eb9fc28d617e6e133c6582ff63a"],["/archives/2022/01/index.html","559d94f1921c257437e66707a2954542"],["/archives/2022/02/index.html","978c2982115ae7da987a3a3923731fdd"],["/archives/2022/03/index.html","9dee91fcc94bd7a5100733393eeecb7f"],["/archives/2022/04/index.html","ee8e2bf8fae4a2f00dd2b3258efc88cb"],["/archives/2022/05/index.html","b9a610e929f3d896804fddef8e2cc834"],["/archives/2022/06/index.html","cf085fd3eff1e7c8aa06d27d9a12a690"],["/archives/2022/07/index.html","cbf2585ee66fd0caabb7038d4bba5eb3"],["/archives/2022/07/page/2/index.html","a772ab265c5f10c9e7ae874cfbbae84f"],["/archives/2022/08/index.html","b78cec0635d03d38b4f10cb6f964537e"],["/archives/2022/11/index.html","a856e9553b16c25e11300f1704c19c30"],["/archives/2022/12/index.html","1842ef917d65e5933a8b0409a31a64a4"],["/archives/2022/index.html","ebb614af238fe5a062735b9fca891c88"],["/archives/2022/page/2/index.html","3387bd88095d7c335fdf52b50eaae2ef"],["/archives/2022/page/3/index.html","21a39e918b8ee03b251f43b72fa12b72"],["/archives/2022/page/4/index.html","84af842eeeb2ee419ce1bcc3dfda66cc"],["/archives/2022/page/5/index.html","dc3425a229a03c1117c47c92c5a71fbe"],["/archives/index.html","3a1e8ad2ede7f5b84847d10549547c42"],["/archives/page/10/index.html","27bbab6ddcf0305effaff9f9b3f0c11d"],["/archives/page/11/index.html","f94fc7e340c00cfccd280f326ba35e04"],["/archives/page/12/index.html","9b444d6cea57d5a7752fd7b7ae314eaa"],["/archives/page/13/index.html","eb93d70877f0f6980f431451920a8880"],["/archives/page/14/index.html","50f6a4991ca5da4cf38316fb495abad7"],["/archives/page/15/index.html","7b3ede6556a3670151a4adbe3d108df2"],["/archives/page/2/index.html","a952031182962197bfde9732a61402ff"],["/archives/page/3/index.html","0c3363d77818811ad54b1e665cd584ca"],["/archives/page/4/index.html","7602a7690eeb7e324392c74136465a31"],["/archives/page/5/index.html","f210741fa469b991beb240ba67b8e61c"],["/archives/page/6/index.html","7c9bbb6b25d0889ae5acef3a52c25135"],["/archives/page/7/index.html","2e49711dbac91d64adff8d33b7d6d8fc"],["/archives/page/8/index.html","d4bbe749fa7d451d6803b64eef7b217f"],["/archives/page/9/index.html","8ef164ced3c91ba9dae8d40e47bca2fe"],["/categories/Algorithm/index.html","e4088a65860cb2aa98f088f198ae788b"],["/categories/Review/index.html","f3afffd6078d531a396701e7e589146f"],["/categories/Review/page/10/index.html","e41ec085910ac46a9051a425d66e9598"],["/categories/Review/page/11/index.html","8d725ec4363fc3eac37aa7b0eda655b0"],["/categories/Review/page/12/index.html","e1184e2c1002a62009ef39cd2e1925ed"],["/categories/Review/page/13/index.html","7b46f4151184dbf0aa18f975c8c221d8"],["/categories/Review/page/2/index.html","cf8e8de44d4f71ba2a25d2fbb669ef7a"],["/categories/Review/page/3/index.html","a2d4cdf6968d74bff712b6b1ac78c3f0"],["/categories/Review/page/4/index.html","b866224d0c743434ebe7426b496d5dbf"],["/categories/Review/page/5/index.html","4a8c9f9376ee043ce2b9ecb0dd3741f0"],["/categories/Review/page/6/index.html","4769ac7997b1bea15dde68a3851ef8cd"],["/categories/Review/page/7/index.html","5039243a7f4dc1d6520514954938698f"],["/categories/Review/page/8/index.html","34f6e6bb1d3bf5a26547ccd0bd0b4f2c"],["/categories/Review/page/9/index.html","a1ec55bb69345706505c4120e0363131"],["/categories/index.html","103a7706b3a4717a135b6c28927c41b0"],["/categories/日本語/index.html","bfddb57e0b797897285235a80c5a392e"],["/categories/日本語/page/2/index.html","6d5dd4628e6f124f236c025e491ae2c3"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bd8fa167643def02903ccc0609154817"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","a4f12edb21c421bfba84a210737df53f"],["/page/10/index.html","79ca2f9bcca77a7bc21a66c9c5cda64f"],["/page/11/index.html","cfb5d4cdf1d5a853f2f99288c17c82f4"],["/page/12/index.html","f3a1d3c34595b65ca349ec6158e1e32d"],["/page/13/index.html","8c2e8583cdc9f68469054880c72d5df3"],["/page/14/index.html","0fa2c925f8c490686823b5ef9c7cac36"],["/page/15/index.html","2d563678e7c187144ec491ae9be8d02c"],["/page/2/index.html","da303a62a7b5d6814272c76472434033"],["/page/3/index.html","bd6fb3ec78de4c915711a9f01d2f3776"],["/page/4/index.html","24c9cf61982945d1729626ef03aeea7d"],["/page/5/index.html","76a68aab39768a7fe1d25b890780941d"],["/page/6/index.html","212a0e098ee36794c44bedd438f9701a"],["/page/7/index.html","9d7a7befea42a6cf81752677ba1741ac"],["/page/8/index.html","aae414cb738b4bc16681cb5b801b3232"],["/page/9/index.html","de1e3104f8ae2fcfffd1a37b6087f6b6"],["/sw-register.js","9ff8b0b8134b839b2d8c97cb83265336"],["/tags/10分作品/index.html","daebc93efa0f8a4d8a72887099f67158"],["/tags/3分作品/index.html","9eb0c846c3b6edfc875a548d5f9431d5"],["/tags/4分作品/index.html","1b6ee4c148294857482de943328502a6"],["/tags/5分作品/index.html","ee1cbfd1a6feeef08a1308fb1b59624c"],["/tags/6分作品/index.html","4062418cf5f1ddea4c6ad366b7362a4f"],["/tags/6分作品/page/2/index.html","bb00602b6b8cb1679f855c28547facad"],["/tags/6分作品/page/3/index.html","dd82c446637018ab84dc55a7cc1c3b30"],["/tags/7分作品/index.html","24f9608b459ac198bd1957dcf1f391d5"],["/tags/7分作品/page/2/index.html","51cb47caae63ac6a70d0db8bf2c836ad"],["/tags/7分作品/page/3/index.html","f5a566b5f8841469fd4683a3d17fd101"],["/tags/7分作品/page/4/index.html","adb8ab279674d4c999f4af3a7ed8c2ad"],["/tags/8分作品/index.html","f2492207407ca0d71dfb9598f2ee1087"],["/tags/8分作品/page/2/index.html","9e0291c802f6777496309c9bc9344b8b"],["/tags/8分作品/page/3/index.html","37b2dcb16f7cb3c6da9b5281a8679a9d"],["/tags/8分作品/page/4/index.html","e25faf4eff397c8706cffd3628c49982"],["/tags/8分作品/page/5/index.html","3059d7b70b3971ef9eaad7e6cd99a890"],["/tags/9分作品/index.html","0c076f15dada1c34add50dec615eb352"],["/tags/index.html","ba057e41e54c560e4478915e6cbf864c"],["/tags/アボガド６/index.html","0376fc6605a71ad4a0ebbd7154c07a88"],["/tags/三秋縋/index.html","b93b0734097568b9ed8110d87fa27baa"],["/tags/二宮敦人/index.html","b226694bb3e08d2c6db92e66469e3918"],["/tags/住野夜/index.html","58b314209239b490a42a652a201c0f15"],["/tags/佐野徹夜/index.html","92a1e07dd712ec091c19cd51cd0914d3"],["/tags/動畫/index.html","9b3aa3e6747779652b93f4b8e46c314c"],["/tags/動畫/page/2/index.html","ccd3128276b1c1d414e08cab60a00407"],["/tags/動畫/page/3/index.html","5abd463c6297eae62ea23b391c8b9a1c"],["/tags/動畫/page/4/index.html","3775b3ce771546c0ea5644565eb911df"],["/tags/啞鳴/index.html","1fc784ef60ce6d5f156bfb5fb9f9ed9c"],["/tags/天澤夏月/index.html","2a1ab0bb27d92b988dcbb0c0e7ad64f8"],["/tags/學習/index.html","3db98d36de961e22f2008dcd5a83a4e6"],["/tags/學習/page/2/index.html","4334785218d17253e28669aeda6e3893"],["/tags/宮崎駿/index.html","5ba94c980d1176482446e45a9350681b"],["/tags/小說/index.html","1fe53bf1e03a1968f8f2e5f03876aa25"],["/tags/小說/page/2/index.html","535823c3d25eb10c0b52e542be452650"],["/tags/小說/page/3/index.html","2d17ff506d8510bb4f12b36262b61bb5"],["/tags/小說/page/4/index.html","91608e274df073e54b7b3b2f6ccc4d28"],["/tags/小說/page/5/index.html","4d887e3470d5ed40641185d26f994c2a"],["/tags/小說/page/6/index.html","b68ade90dd1e801b380db98be89f2814"],["/tags/小說/page/7/index.html","b82efd4e6da0031b657f692649b213a6"],["/tags/志茂文彥/index.html","5b799e7d756be20a6713e250db8df43d"],["/tags/斜線堂有紀/index.html","01a9f04838ad1bc15f661f820cae34b7"],["/tags/漫畫/index.html","c67df7eb94429b05dc49aa3e8f25a7fe"],["/tags/葦舟ナツ/index.html","ff57a7811a22b0ce35e951ed5ec160bd"],["/tags/藤萬留/index.html","aba4d99e1da3a818202b24d939c79382"],["/tags/電影/index.html","774590c24949060a7e06963115a0a9c3"],["/tags/電影/page/2/index.html","ee69ba94f7f7e5a2315dce30d9a1cf19"]];
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
