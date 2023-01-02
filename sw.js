/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","f750ff589f308ea57e15578e8357eeae"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","294f259c854fd31badb26396a2e56650"],["/2019/12/25/Review/無法計算的青春/index.html","8166de35e5a2d686bf0dbf03e170f45e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","ffc161063cf62e8a301dd8cb73fb3a23"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","d3aa373f95fe9af17d3b1565592c2aaf"],["/2020/01/19/Review/下雨天，不上學/index.html","cad9a53dc9bf1ff37353c623e642d554"],["/2020/01/26/Review/三日間的幸福/index.html","930382a53758dfd031168f734442b72e"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","58f3cfeefeeaa95913390ab01e7b2113"],["/2020/02/09/Review/青春期超感應/index.html","331960fab9d2460de4e4556fd89a2b91"],["/2020/02/15/Review/又做了，相同的夢/index.html","656887002ba774c08a56c277671eddc9"],["/2020/02/22/Review/回憶當鋪/index.html","8d19f2b5bdff3ef8f00142176e3b4c18"],["/2020/03/22/Review/不適合自殺的季節/index.html","114e6f3f7d1b8c025594b6df13335e93"],["/2020/04/26/Review/我們都無法成為大人/index.html","cf1b92e55305d9a002979559f3e403f6"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","b66522876772805f839c858e36f6f6d8"],["/2020/05/17/Review/人間失格/index.html","334d70980eef70bac97d6c19a899dff3"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","572b914d438c2a67d884a9bfe305a4fe"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","a8f1291974703a54d9e4d848d9e86f4c"],["/2020/08/01/Review/銀河鐵道之夜/index.html","ab1b56c6164c3e194f42301e4fd3a66c"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","b95d02a330855e41c8133faa056948b2"],["/2020/08/16/Review/15歲的恐怖分子/index.html","75b559c4ffa863b0b04c1149d7ae09d5"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","a42902a6b7453ee0eb3a466e20c4eecc"],["/2020/09/13/Review/羅生門/index.html","d11cbe24b32b6ae4f5830ad1de2a9104"],["/2020/09/20/Review/闇夜的怪物/index.html","2bf7e571f4ccf5cd08103e84d96d4bb2"],["/2020/09/27/Review/14歲，明日的課表/index.html","344d810269199fdae2c258986fd48bef"],["/2020/10/04/Review/致十年後的你/index.html","e3d5e4a17705812ba51be31d705d5cbd"],["/2020/11/08/Review/滅絕之園/index.html","5e92d76874bf916c7e8798bf3858894c"],["/2020/11/15/Review/將愛拒於門外/index.html","b77b36f02a697999e653e793ae8dd7b0"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","5e6744546bab9d1c15fa1338812dc400"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","2d2939efb82ee64725a9cf8abcd9ee4b"],["/2021/04/22/Review/道印/index.html","db2e6ee08ff9688e0e2139cc8d346b74"],["/2021/05/03/Review/戀入膏肓/index.html","967f73415b076ec18a1691143ae8a662"],["/2021/05/10/Review/Dice/index.html","126fe905c9cedcfb580cf077b835a234"],["/2021/05/15/Review/魔女之旅/index.html","befcf4370f962e10c075cdba4b7fa45c"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8a25ae372a566f4bd5bef6a53462e249"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","98033d391e36d8b0cd0b89c8f1482128"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","30b10cd216f7288852fb617b8f095b7b"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","56b0dd505fbe3d4f8552769208ab5694"],["/2021/06/05/Review/流浪的月/index.html","fc2a3f4255c1757a5c0b10c13b926009"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","965378620d56f72cb78277d273184b37"],["/2021/06/13/Review/第一人稱單數/index.html","7d5296e468c26aaf52e98d0bb9914838"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","6ec34db0afced42bc3d39ebdbb398c17"],["/2021/06/16/Review/願你幸福/index.html","06f8f0a1ac50fadd6d2b1a32d6844da6"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","c49e93fa4d7e4e0636cc80d71082898f"],["/2021/06/21/Review/神隱少女/index.html","078e379b9b9ca8dabd1d6f9e2aee130e"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","7703d5954d7ac2f66968d4f4cacfb0d5"],["/2021/06/23/Review/天空之城/index.html","3e88502bd9044cb093f4ee0944a6ee0c"],["/2021/06/24/Review/魔女宅急便/index.html","db61ebc309b67708cc1adce05d6e4332"],["/2021/06/25/Review/借物少女艾利緹/index.html","79fd6337dda8fe053712d32bf5956e31"],["/2021/06/26/Review/魔法公主/index.html","dffb163e970a10ec7c77ee14d8760d9c"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","bd423d2c0209a0a4a81c5fdfce575db8"],["/2021/07/04/Review/飛雪與劍/index.html","3dafd7b0cacb85a8318c8a48bb1ef6af"],["/2021/07/09/Review/地球防衛少年/index.html","fe9a3935a7bc3b1285d4508f464cedaa"],["/2021/07/12/Review/Angel Beats!/index.html","8df5d51713c47bfeb115b3978d62ee2d"],["/2021/07/13/Review/Clannad/index.html","a364dbfb5f4c0c699994392d42953873"],["/2021/07/15/Review/AIR/index.html","00fe30d3a327db0b4d35786834296e71"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","28abea6ecb1585fa46a096ee402ec80d"],["/2021/07/15/Review/螢火之森/index.html","3a0155684931e8b64b2d1a45516af74a"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","82b09cab449913bef22e4024b8d3b651"],["/2021/07/17/Review/奇蛋物語/index.html","c9670925263194fe66c3f0bc54f7c732"],["/2021/07/18/Review/Vivy/index.html","4460fd1a1b34e2800b66d9e0123711d0"],["/2021/07/18/Review/請妳消失吧/index.html","8fac152ad8d5c8deb3c9ef46755a97ec"],["/2021/07/19/Review/漣漪的夜晚/index.html","4fc7467d4af7925d2e1681bb0509237e"],["/2021/07/20/Review/月色真美/index.html","1f43c38befcb61c021bedb295a76be71"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","3fe7a6d5352f9b2d768ce803316dcd7d"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","16256a36f950efb2747c88459b67375f"],["/2021/07/22/Review/罪惡王冠/index.html","831dd6dd48ee2a4a9d149e97635a4fea"],["/2021/07/23/Review/弱角友崎同學/index.html","0ab4542f01844e80a99c4787f379a52f"],["/2021/07/23/Review/惡之教程/index.html","cd159138b536bbdd097c78e3e416571a"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","eeb612838bf295f874907d379fc495ff"],["/2021/07/25/Review/魔王勇者/index.html","cae1f8a0691d2595679115314ebd50d3"],["/2021/07/27/Review/一年A班的怪物/index.html","9e97f978ba6850221a79682f059953c6"],["/2021/07/27/Review/奇巧計程車/index.html","0c559084d979af05a8877c6fb6903b91"],["/2021/07/27/Review/專情的碧池學妹/index.html","687887ba701a6d814f8a6872af5e93ef"],["/2021/07/29/Review/只有我不存在的城市/index.html","585d5c837363b2b25511d1bd5a505eed"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","da0ec08387bd7503e8e6b5b4131f1b11"],["/2021/07/30/Review/可塑性記憶/index.html","44cea319f8ff85e0b7e31d7909312aff"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","a097fe0cee7de25e8ea348b072b5eeaa"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","cd030eb3c2ff6560ea058c5adca98b48"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","6372c08429df7fbe4e9a4c2294d58d5e"],["/2021/08/25/Review/清戀/index.html","3f348b3ae8df76a7b5ffe5d11331d2ed"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","7198a3d1bedf946953de470e3fa80de2"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","7314de3c60a93a445c0ffb489fb2d930"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","9aa257707620b92c8509e1d93576fe18"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","9631759922d28f1e3dc2b23866cfc6a9"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","d3922bc66bb99af4a5dfc2086f91f4a9"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","b2d54086182005a9daf93ffdfcacd83e"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","d2b0a915a8e055969348ff8562214336"],["/2021/10/16/Review/龍與雀斑公主/index.html","714e7baf8574ee8057ce02a677d48e4e"],["/2021/10/19/Review/孤狼不想開後宮/index.html","a3d9acf96eea461dcda6fd12857181fe"],["/2021/11/13/Review/徹夜之歌/index.html","f1b3924ce72822bd33d5ef9b62d54f01"],["/2021/11/24/Review/武煉巔峰/index.html","680e1c11005bc86749e979a3206ff032"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","cd5f923e9c7d09b9c69307d8e7611d85"],["/2022/01/28/Review/神醫凰后/index.html","2104e4dc8e2117f977de79c553868b19"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","c1fbb9490271517a9f3d779ddb0c7b74"],["/2022/02/13/Review/夏日幽靈/index.html","99e3056fb1f52114d2b35ca1298a196b"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","70482dc2e9093da9bb1e891df14814fa"],["/2022/02/26/Review/賽馬娘/index.html","3d8a80b37cb9b6977f03bc610520534a"],["/2022/02/27/Review/大欺詐師/index.html","f378a46e67d3a9d7550cfcd562e22576"],["/2022/02/28/Review/前輩有夠煩/index.html","14687c0d899ff8a884e5ff9f2f29788a"],["/2022/02/28/Review/碧藍之海/index.html","ebbc22a7362826918b8b4fee6c113517"],["/2022/03/05/Review/落第騎士英雄譚/index.html","33412091ca780db60fdfa2f96c840bd2"],["/2022/03/06/Review/Another/index.html","cb25843b0886a91d97ed4473ec017bc2"],["/2022/03/06/Review/入間同學入魔了/index.html","87b9afd62100ffa01ac8197503dbac76"],["/2022/03/18/Review/再見宣言/index.html","e8ad69cbc531a8dd414bbbe7d6175a02"],["/2022/03/23/Review/生若冬花的妳/index.html","c5b64802dd9f268902bc596f9d4729ba"],["/2022/03/25/Review/天之弱/index.html","dea5fc1298b016f14c5ac50405acbfe0"],["/2022/03/31/Review/滅了天道之後轉生/index.html","05c9498c0ddd388599ef720ac738c9a7"],["/2022/04/30/Review/泡泡/index.html","86ac9d709ed09f2efdea60bbeede6f9c"],["/2022/05/04/Programming/Dynamic Programming/index.html","a6b27db0758ae55c3cc73e446afc7978"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","ae49e4fc00279fc67c030b4494e01ce6"],["/2022/06/13/Review/偵探已經，死了/index.html","ddaecc1f0cfad57323c8263be49a1d99"],["/2022/06/14/Review/黑色子彈/index.html","ea6cdaad2bbac6674daf97aafd5e9ed1"],["/2022/06/15/Review/黑白來看守所/index.html","e0bc8a09ee374c061a492d8e27dfce25"],["/2022/06/16/Review/虛構推理/index.html","8cca5629169dc09dffb1d839febd99ee"],["/2022/06/17/Review/戀愛與謊言/index.html","99b33811f5f77fdffd571f5b952c8cd5"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","3dc3ff2fd2a96420c7823aed4c74a3ae"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","0eca23c4db943240184bc9395d465423"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","fe066da529bef5fdad595d0c4a44e787"],["/2022/07/03/Review/Hello World/index.html","829db69869d63c348e2534e09428576c"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","e99235ec6349fdb2c9ef8437b282a429"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","36779ceb65cad96dd6a4875e31802ddb"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","9bbff987e3c3a71f225ee615c2397d38"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","17699bc2fa10f29985a7ae626ab83b09"],["/2022/07/16/Japanese/動詞分類/index.html","fde06a2c68afde8d0481db7305b4da05"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","439f94442172afbd80f7fe723b56fb31"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","ab7af4b5244d2491553caa3c0c8f2feb"],["/2022/07/17/Japanese/音便/index.html","dd6cc949805801aabfc5ccf20d494631"],["/2022/07/18/Japanese/動詞 時態變化/index.html","61ed91ea1bd7809b068986f7a219ce27"],["/2022/07/19/Japanese/助詞用法整理1/index.html","4f8c739ded78ae1b200008dbff362cca"],["/2022/07/26/Japanese/助詞用法整理2/index.html","95702f5ab1b0c3331a1a3adb69ce5091"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","7c6fb5fed5a83b8d49ce87d53ebd5f66"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","e1fb9e2cad6668ec9764100d07030eae"],["/2022/07/30/Japanese/疑問詞/index.html","6f7c6373746ee7a9bcf8117b62913576"],["/2022/07/31/Japanese/助詞用法整理3/index.html","aa065c402696a7e9f715d11e8d23b2ea"],["/2022/08/02/Japanese/副詞整理/index.html","5bb005cf2d1787d3263a012b666259af"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","a491d45c3ee4ff3abe20db812264878a"],["/2022/11/04/Programming/Data Structure/index.html","0c54584dc275835f05c9566642d5bd25"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","954fa17aaada3dd798f4d7218b84d552"],["/2022/11/22/Review/組長女兒與保姆/index.html","ae119c6ae25e304aeac3f55ef8a66160"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","cd15115486f9151a27b67566381b9094"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","98f1cb0682b23fd6fa7a1bc0847cf0c0"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","0ceba65d39f15826556996904a0fda68"],["/2023/01/01/Review/あの夏が飽和する/index.html","8467a10f1c5852503c6a9c3055899eea"],["/404.html","d68ef1ea87699020fcc909ef29561c54"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","4161ee6ab9e230b332dd3f97187c011d"],["/archives/2019/11/index.html","e4fb09fcb288f2fdc80fdc6485a56929"],["/archives/2019/12/index.html","442d7d3fcefa8c53791caa648306384e"],["/archives/2019/index.html","b2b50f762e45885fc451a59233b42d42"],["/archives/2020/01/index.html","1e231358600afcfd75b9639d8b8d842d"],["/archives/2020/02/index.html","451623ee790319e5646477f933174374"],["/archives/2020/03/index.html","9e28c398912beb6baf354032495caa29"],["/archives/2020/04/index.html","d4107b0c85c0666bff55449c9b6fe0b1"],["/archives/2020/05/index.html","281fe568470a42f5365529b5f7cb4ed5"],["/archives/2020/07/index.html","17f9932fb411777c4c8ed5122f1c5c38"],["/archives/2020/08/index.html","e2ddb9b87783ea2311ddea6a2d235101"],["/archives/2020/09/index.html","c06228e6672cda427e4536ec4b11eed6"],["/archives/2020/10/index.html","aa4adb4cba8a2a3387c0e70199fe9ca8"],["/archives/2020/11/index.html","eb73e1762aef68c3c6b031cad49719bd"],["/archives/2020/12/index.html","49577c65ca6bbf65907bf261ef7e7181"],["/archives/2020/index.html","e8c4166fc8e2e319afac9938a67352f2"],["/archives/2020/page/2/index.html","a2bb8e717a81f881f3cfb2dda5174064"],["/archives/2020/page/3/index.html","408adfa008f6155149a9b825d4826a72"],["/archives/2021/04/index.html","50e14376e13c4bfd7e045523a19378da"],["/archives/2021/05/index.html","429080d633d74830164bf208e18b514d"],["/archives/2021/06/index.html","b2289c83b4a64f103a338417498edcb8"],["/archives/2021/06/page/2/index.html","528ca37eb80e30a5f8df24b2e97c41ed"],["/archives/2021/07/index.html","4cc324818ed73273babc145c4584a5d0"],["/archives/2021/07/page/2/index.html","b8ee534cb0bb5d9cd927b685f78e2d2a"],["/archives/2021/07/page/3/index.html","3ef4f64fe09563d5e1dd582032411428"],["/archives/2021/08/index.html","9886c30afe1397e253a907fced201fed"],["/archives/2021/09/index.html","6cae7d39b50a3b3ec0b87460bfcada68"],["/archives/2021/10/index.html","6c9a20823a6ae3c230408fe730fe21ca"],["/archives/2021/11/index.html","0be69834869f65a518c67e229fb119c1"],["/archives/2021/12/index.html","48fc31891c54aa32265ee81fc4a95919"],["/archives/2021/index.html","111e108f031ab94bed0ddac1dc433f07"],["/archives/2021/page/2/index.html","a7337a3931351e88091cb41184a872ee"],["/archives/2021/page/3/index.html","825729a7846cef35bdfa297092e89a61"],["/archives/2021/page/4/index.html","c3ec738ce0dc36233539b46a1bfd168b"],["/archives/2021/page/5/index.html","7ba5ad40ec69cbda2aadb20c7fecc919"],["/archives/2021/page/6/index.html","5cb2b0a32c3b1a5aa7256b3768dc117f"],["/archives/2021/page/7/index.html","c24c358e7ee2ba761877ba670534b54f"],["/archives/2022/01/index.html","16d78e1602d01b7d2938579bf6b531a8"],["/archives/2022/02/index.html","d0c5f96862e28bd1acacdf1bfacf6bb1"],["/archives/2022/03/index.html","05c1d92ae990282ab17a4173c4ef13aa"],["/archives/2022/04/index.html","720d83a0d5c134fb052fcdb8967eae23"],["/archives/2022/05/index.html","c45e2a17af2d365d70971715c0fc55f8"],["/archives/2022/06/index.html","d7aa6498738ec7ad362e42f9d53e079c"],["/archives/2022/07/index.html","05e7ee93e9310aa0f5daf1d8bb07a86c"],["/archives/2022/07/page/2/index.html","5ee9e6492b85492b4d9519a5678bee58"],["/archives/2022/08/index.html","f88d20908afa0c9dd3cc6bae5c70151d"],["/archives/2022/11/index.html","6add8987bc23886dbb0894beaed1c302"],["/archives/2022/12/index.html","aefe6bbf1dd1b3a13535be6654dbf7c7"],["/archives/2022/index.html","96b65d9cafdd276dcfb0c604dd8418e7"],["/archives/2022/page/2/index.html","935954dbf3c0adb1ad39219d16f8368f"],["/archives/2022/page/3/index.html","7b837f8396403f51c402380fdd618f3e"],["/archives/2022/page/4/index.html","d6edf9b64e4584889943b8084f2d1cc2"],["/archives/2022/page/5/index.html","c415adf12e3c7178485250ecb085ff3c"],["/archives/2023/01/index.html","1e4c3e5e0e6a845c38c906e58eca443c"],["/archives/2023/index.html","da5ddaf9a323402c730432ddef3f0c00"],["/archives/index.html","757dc8216a7e0fcd7da6f499abea3372"],["/archives/page/10/index.html","bb81b41c202c550de72d874d46a21657"],["/archives/page/11/index.html","05645857bb76e056516890921bb40570"],["/archives/page/12/index.html","aaf94779cf4a75aa0d8a953b296afc28"],["/archives/page/13/index.html","b2e7b0ae42befd5eecf7515efde60141"],["/archives/page/14/index.html","eba1f83e0f3e6af2cea41f9009e82bb3"],["/archives/page/15/index.html","94dce783b2a6cd15e4ace9a3016ae371"],["/archives/page/2/index.html","400b64f1c1e809c6ba54b7047a600dc5"],["/archives/page/3/index.html","4c59ff63c51abfb9f7cb0180601d6f0c"],["/archives/page/4/index.html","6a2d1b36317291dc60b17b081a35fdbb"],["/archives/page/5/index.html","fd93a3150017d06673edb35390cafd66"],["/archives/page/6/index.html","2137d9c23e00c0279b53d4648d238aed"],["/archives/page/7/index.html","65175cc73e00385c871229f786996ac0"],["/archives/page/8/index.html","8a78cfd089510aadfc2d08e3b393d331"],["/archives/page/9/index.html","2e1dd8d34ce01c3518cfe8b17dd4a3de"],["/categories/Programming/index.html","3b2f8464172624bb8fc092dd3801e7a7"],["/categories/Review/index.html","9d8abb38a9d6523faf7840efc25de87e"],["/categories/Review/page/10/index.html","c7e0e441d49ff5d56264af6ce246b25a"],["/categories/Review/page/11/index.html","c4ac360f4434f4f3d762b6328bfd599d"],["/categories/Review/page/12/index.html","42f9a42a8c6fe1c796e3264933311629"],["/categories/Review/page/13/index.html","36f424e2d935a39bdb9054b5eef6e9cd"],["/categories/Review/page/2/index.html","6ce6feb64304b200d0c4b6834b34b099"],["/categories/Review/page/3/index.html","895dc1f4fe532637787d97d5f110148f"],["/categories/Review/page/4/index.html","d3be62277255058c356d9964a0bd5b56"],["/categories/Review/page/5/index.html","738ea485a85f5cf645d7fd5ac0b14749"],["/categories/Review/page/6/index.html","5fdc4053854ca78dcb927df38ba9b59f"],["/categories/Review/page/7/index.html","de23c1dec33724b9ebfb69a4df16f7a5"],["/categories/Review/page/8/index.html","167a6069384c81cae54a7fa1c49ad41f"],["/categories/Review/page/9/index.html","fc68f080b8690ee62faf38550aa32fe2"],["/categories/index.html","938b081bfdb08340d84ba2d97df35809"],["/categories/日本語/index.html","6fc882f1e2f939b375b5cc8a16d19935"],["/categories/日本語/page/2/index.html","dbe5736cf8ccef9578dff766ada5c33d"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e94efad4a13e903093e121cdeeee3c09"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","60dc0bfe865dd8934493df3866056619"],["/page/10/index.html","5f35e8db90e0030e2b26a571b8b01c13"],["/page/11/index.html","ee9a98ca2749b3709fc26f9e3b2efd00"],["/page/12/index.html","e3b0b110db4ad36a9201d585e9bea483"],["/page/13/index.html","7a31c9110313c2e0fd1cb98dd7ec76e6"],["/page/14/index.html","e8866afce810e42527eb51df7722c043"],["/page/15/index.html","7ce8ca7fd184bc8d41074b846748171b"],["/page/2/index.html","90c7ca27922584b86eefaa8276030928"],["/page/3/index.html","ce760b0d20cbbbe7444215370a373219"],["/page/4/index.html","6bdf9751dba644e2b7f73b4e084038e1"],["/page/5/index.html","b18f549069f8eb7aa141a08e5654159e"],["/page/6/index.html","ff4e2313eebf85af4a9070925fdd341d"],["/page/7/index.html","86583d0e2746f39b4de725f663f63233"],["/page/8/index.html","ba672ee9b72b9efbae218a6317c44197"],["/page/9/index.html","01e5d8348bf42e35a8f330890f32d78f"],["/sw-register.js","1b652284f93368695093361699aebf2e"],["/tags/10分作品/index.html","b0291b8133feaf40534ecfb928f54050"],["/tags/3分作品/index.html","aa04ff67a94ab6539f794739f990d232"],["/tags/4分作品/index.html","c8d6b2b316394fd9c38ed3f444b05fc6"],["/tags/5分作品/index.html","71fee3dea5d360400c8275726768b330"],["/tags/6分作品/index.html","37e285f388b1663cf00971bf1726a27f"],["/tags/6分作品/page/2/index.html","0637640279cba785ea1ea6b2bba781da"],["/tags/6分作品/page/3/index.html","53a54a1bafad0c6cdcfeaaa518916230"],["/tags/7分作品/index.html","af9689722bc866c64b6f2be9512798ae"],["/tags/7分作品/page/2/index.html","7d418448e8d6a1de7ac990edac733a89"],["/tags/7分作品/page/3/index.html","503c2184a0758a898d7cc2d15c519b60"],["/tags/7分作品/page/4/index.html","ca84262233607232347549c32a9f1345"],["/tags/8分作品/index.html","d3e65f8221eec0d7a019f5752ddf1d0f"],["/tags/8分作品/page/2/index.html","6e7f08fbb65a373c08d9436150840b31"],["/tags/8分作品/page/3/index.html","15b73b5e5f52fa08651740ae9805c082"],["/tags/8分作品/page/4/index.html","4e99c29fb6b3c8d51072c376fb59177c"],["/tags/8分作品/page/5/index.html","96fe0eb6bfdb2c4e80c4f8a06e283f7e"],["/tags/9分作品/index.html","f487db622addc2ee8a6c13822afa13e3"],["/tags/N5難度/index.html","090bdff59b3c524a11a374ccfd32e0b7"],["/tags/N5難度/page/2/index.html","9204125b5ec4c1f56333847097ea425f"],["/tags/index.html","222392a49a9563f5bb355357baeaf900"],["/tags/アボガド６/index.html","d2cff86e9fa43d25c988cf1384349d14"],["/tags/三秋縋/index.html","c24d274a7629e14af10b2b2c0ca0e336"],["/tags/中國武俠/index.html","7e04beb2b5c54a7178abbc292e6a18c1"],["/tags/中國言情/index.html","84ceb5aea85c80cff0fbb161f0fe311a"],["/tags/二宮敦人/index.html","64d8dd174267ea6b56e216414b082e20"],["/tags/人性/index.html","cfadf808d2ddb1285d921228ef30808d"],["/tags/人際/index.html","a23e6367a63ca1466be438484f986e52"],["/tags/住野夜/index.html","e5e39567305900573707241daef7acfa"],["/tags/佐野徹夜/index.html","5c3a5d5a6e3cf95ae5f5d3694ab6dc92"],["/tags/努力/index.html","c52b9cbc2cbbf03b06c1a15bad723300"],["/tags/動畫/index.html","538090f8cb5b517e1059c796f9ad7cc0"],["/tags/動畫/page/2/index.html","dcc71685d351ec5860d944bb07582ede"],["/tags/動畫/page/3/index.html","cf57a41c80af8e4d7239568db00cbdbc"],["/tags/動畫/page/4/index.html","9b7e2ee9f22f71cb6741ea10d3eba9ba"],["/tags/原諒/index.html","1f18827cfc140b47bef0d445bca1f008"],["/tags/反烏托邦/index.html","50dff73b4fdaca6c216e62a596f9b54d"],["/tags/啞鳴/index.html","21f59678039867a02ecab8df15d62297"],["/tags/喜劇/index.html","17b12253d202111bf157ffab4bf0550f"],["/tags/夢想/index.html","ea5eb7716f44800167b4bcc1ad77eccd"],["/tags/天澤夏月/index.html","b39d0728101fbf838764ef5c5deb5fc5"],["/tags/學習/index.html","7c7eb341979d0b5e94e909fc770f8883"],["/tags/學習/page/2/index.html","2b1c18366994afabbfbb711cc9e4236f"],["/tags/宮崎駿/index.html","7aef720e2fefb3f3ea7ae24140f900dc"],["/tags/小說/index.html","5bff0394d0554709b531d196f320239e"],["/tags/小說/page/2/index.html","5e57a0c6667ceaac9bcd88c02e1d7763"],["/tags/小說/page/3/index.html","78e269b685079ae4fbb86f6e8de1f193"],["/tags/小說/page/4/index.html","1f371d1237a453e2c896f12aadbae391"],["/tags/小說/page/5/index.html","e64b645eb7d6018c7f42b42adc222739"],["/tags/小說/page/6/index.html","1ba9f4183f27f169c675accb8f2743e7"],["/tags/小說/page/7/index.html","58920a99579ebfacce7fa749694729a5"],["/tags/平淡生活/index.html","3ce2d82be4d7509c538720af1cef626b"],["/tags/幸福/index.html","b4ae7772d4262357fb31c93611fee12c"],["/tags/志茂文彥/index.html","8929425c493f498ebc05a665d55fb557"],["/tags/愛情/index.html","e8aa3878c2e14391771f89e814f216e4"],["/tags/愛情/page/2/index.html","ee5240341f340213de9db1b21ff123bc"],["/tags/愛情/page/3/index.html","b43f937fb4afca52c36f43f40e3aa916"],["/tags/感動/index.html","cba94e4c0956e19be60ddfb54139d84c"],["/tags/懸疑/index.html","1040ffda1553b2d36360721a6c1fdff5"],["/tags/懸疑科幻/index.html","8c399eb5738f897fb23b8c605c9e73a8"],["/tags/戀愛/index.html","0eea5fe72bfc421e7b4e42d79c26179a"],["/tags/成長/index.html","66dde6c34cde762945cbf301e53d8acc"],["/tags/成長/page/2/index.html","786420544ac27195d0aaa35d7cbf83b8"],["/tags/戰爭/index.html","38a9ba11d1b91b8b14ea7db281d4c7f0"],["/tags/推理/index.html","e36e4d295de832e9f68486c7e4788ea7"],["/tags/搞笑/index.html","56c20665e26c278cdd8075346849cf91"],["/tags/救贖/index.html","15842c77bb36141272603305f1a2d629"],["/tags/斜線堂有紀/index.html","462478827266bf134a3341926e85d109"],["/tags/日常/index.html","735f4e71baae4f779e16ea49f582abe3"],["/tags/末日/index.html","029221ac6829723ae462f60f8a8e7eda"],["/tags/校園/index.html","985b59991c0e3d363496ad096020c664"],["/tags/武俠/index.html","b8d08a40e18ef43278812b4f63b1cc87"],["/tags/武俠言情/index.html","07bb93954f71c71b40041bfc7d58d0ee"],["/tags/漫畫/index.html","7960afdbd1a451ebe7199bcbc5c98afa"],["/tags/生命/index.html","7a0d3eb59013e9a07825824f0ddc5c43"],["/tags/生命/page/2/index.html","3a5cecf83da15a1e25d635da5341161c"],["/tags/短篇/index.html","752454d8ba0eab0c0efa645d23e8c70a"],["/tags/社會/index.html","e19bbe4c48a98366b1d2dec13fb6fb17"],["/tags/科幻/index.html","cf39c67e18af3a87b2973efe150551f2"],["/tags/童話/index.html","f6c74ce086db9bed88190a64752a61ca"],["/tags/競爭/index.html","d357f3e95337d6bcc35473f981961716"],["/tags/自我/index.html","9c824be9233597cfaf18bb929c275001"],["/tags/自我認知/index.html","a6a66011b1d7bf1af648243bbe0fabf7"],["/tags/葦舟ナツ/index.html","cd06d5cf8a3ff976c0b9258c9419e1f3"],["/tags/藤萬留/index.html","ea59818057c27a29876f3a4357057f3a"],["/tags/親情/index.html","8c5c3ddfdd564eade6294943fcb4e4ea"],["/tags/雜項/index.html","91c4d53386181b09262c787946704c65"],["/tags/電影/index.html","f6f74511122f35c342708351c2aa3848"],["/tags/電影/page/2/index.html","726bd61e3554e21758804a6384d6f2a7"],["/tags/霸凌/index.html","6403d947bab348707968ba10fb884949"],["/tags/青春/index.html","d39f2bb69cd3946348b8fa2d19542d95"]];
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
