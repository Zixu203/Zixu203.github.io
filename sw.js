/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","d3e3de101f04c4e3525c43eda4385464"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","82e833066361a016c104506d4144549f"],["/2019/12/25/Review/無法計算的青春/index.html","2cd85370f948a00bce6016caefad689e"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","22109a849a80af4e04eedb55ec2d8b41"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","bc091794157f422c22cab1cf5856bf9b"],["/2020/01/19/Review/下雨天，不上學/index.html","f77cb5b5220811ccc1fa44d30a8b485d"],["/2020/01/26/Review/三日間的幸福/index.html","5af557b52ef9ef324e65bc787778b3bd"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","aedeead8a1084f07b5dea01841495c3a"],["/2020/02/09/Review/青春期超感應/index.html","60d41a85660e0872f13a826eb83510c3"],["/2020/02/15/Review/又做了，相同的夢/index.html","da0f243dcbb622acb0558886f7562515"],["/2020/02/22/Review/回憶當鋪/index.html","cf6fb1fb596211895ce269930730512d"],["/2020/03/22/Review/不適合自殺的季節/index.html","b3a1ba8f21b437328e30dcfa9167d800"],["/2020/04/26/Review/我們都無法成為大人/index.html","3291b311fd5acbab3536ec975a633486"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","9fe9fcda0dbe02c6679e260a5db5e1bd"],["/2020/05/17/Review/人間失格/index.html","2bfb18265ba222ef9cffead0f95ab3bb"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","1a7738fecb792f0ae92ddb612544c93b"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","adb0cf73faaafa2091220480c759664c"],["/2020/08/01/Review/銀河鐵道之夜/index.html","2cc1d70703f5bc0b8ed660070352e843"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","d54d3a7db0bba9fafb5d25ba1f93f56e"],["/2020/08/16/Review/15歲的恐怖分子/index.html","0c27f20baefc5349397cebf79b4273e1"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","ea5e594bfe099859f59911a1e845f852"],["/2020/09/13/Review/羅生門/index.html","4b995b53228dcc7911a6c8345de51119"],["/2020/09/20/Review/闇夜的怪物/index.html","b6ee996de5b65df328a721d96bddca56"],["/2020/09/27/Review/14歲，明日的課表/index.html","2d6611e965cd677fec0bbcc4a2454c28"],["/2020/10/04/Review/致十年後的你/index.html","b8a227911ff618f7c87ec6b5c81f9652"],["/2020/11/08/Review/滅絕之園/index.html","148a95602987f28f1d7f7f12b78769ea"],["/2020/11/15/Review/將愛拒於門外/index.html","b00208d20b880191bc216f1db35967f4"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","cc7b4a3533d5ddceed44a0e220ec5487"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","e4ca23d1e9e435c15ddd8f04d2039860"],["/2021/04/22/Review/道印/index.html","7e316d06bdd6798e619908d07e5af45d"],["/2021/05/03/Review/戀入膏肓/index.html","6b670a1245d29e195ad5508b2464a835"],["/2021/05/10/Review/Dice/index.html","8d280de6fa5f150e9be22604ad8706c9"],["/2021/05/15/Review/魔女之旅/index.html","c7f04ea77a20650aecd5c44e21059b64"],["/2021/05/28/Review/戀愛寄生蟲/index.html","8892363b91b98bd1d3eab3d1050f2388"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","6a5ff2d9e15a136fb5ed997164e5c1b5"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","def998e834d18ce38c46f69c3d3b2041"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","f6d93d6f35ae95d488166f9a8e3030bf"],["/2021/06/05/Review/流浪的月/index.html","32ffbf6c2f481f69b9e4951d07e447ef"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","6560287307ae8415459d61549e543d44"],["/2021/06/13/Review/第一人稱單數/index.html","cd4f2949089cd2af670f65424366a581"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","bc07bd6cfec04793e33a642c98315c3f"],["/2021/06/16/Review/願你幸福/index.html","0af1ab33cb4be3d41cee7b4c96fc9e0f"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","d2e7c988ba8c356784444de1ea587181"],["/2021/06/21/Review/神隱少女/index.html","66648701b5c10b7626b5c484d7ef2e88"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","60de12350507c417cad9be6c6f149391"],["/2021/06/23/Review/天空之城/index.html","f005dda376787eb304ce60adecd68c23"],["/2021/06/24/Review/魔女宅急便/index.html","d4ca67451997b80b2f1e9bcb942e163a"],["/2021/06/25/Review/借物少女艾利緹/index.html","a0209ba49b17defa7360bdaea7151f30"],["/2021/06/26/Review/魔法公主/index.html","58170292054c5e16db363efcb0ff8c50"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","5e95393f0c9b803b84c998e8f88a5a04"],["/2021/07/04/Review/飛雪與劍/index.html","635db9bd607cb4cfca37c20af4aef50f"],["/2021/07/09/Review/地球防衛少年/index.html","5d4ed221df0ecf5085b16a8d7210845c"],["/2021/07/12/Review/Angel Beats!/index.html","c631e7e68836faab2d21a0ad23204b70"],["/2021/07/13/Review/Clannad/index.html","475b8b3fcdae52926e1e62e7b52f2267"],["/2021/07/15/Review/AIR/index.html","9c23011bc0994eec43982b5efa50f619"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","ffd01fabde72c273de4f00af5f857afe"],["/2021/07/15/Review/螢火之森/index.html","ed030a108b8cc4b608636f002bdfdfb4"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","98e0b5cbed90b1644ddb9be22e2a18bd"],["/2021/07/17/Review/奇蛋物語/index.html","7c2545e2a17c4077a0177209e9b3f762"],["/2021/07/18/Review/Vivy/index.html","14c29d44cd989bb85cc29c8f21033075"],["/2021/07/18/Review/請妳消失吧/index.html","0c7bf3d11950b246443509d154e79d7c"],["/2021/07/19/Review/漣漪的夜晚/index.html","d4134640910577221a251c8c22066df1"],["/2021/07/20/Review/月色真美/index.html","d8a337a4bdb72be874eb8353615a5689"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","c9747b3ad24e942911eaa8d71050ae92"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","1fce7d63d8e376808535a89773a6c07d"],["/2021/07/22/Review/罪惡王冠/index.html","01466a3c600d54e666285c22f319d5a0"],["/2021/07/23/Review/弱角友崎同學/index.html","a8f1252c4e22664a944858449cd7fb4f"],["/2021/07/23/Review/惡之教程/index.html","4623fde2081026cef00414ada77c073e"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","e63bff41b7f11d253f93f4118690baac"],["/2021/07/25/Review/魔王勇者/index.html","c2de49a0d5b9622b8f1ceb9c98735dbc"],["/2021/07/27/Review/一年A班的怪物/index.html","a7502e00b980c737775001cf6897f421"],["/2021/07/27/Review/奇巧計程車/index.html","94e5a94f7376fd5d1d867c1bf973fcac"],["/2021/07/27/Review/專情的碧池學妹/index.html","7ada8835097e8da81ccd1a16428e9840"],["/2021/07/29/Review/只有我不存在的城市/index.html","58326bfc9271f86404e780263a016c80"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","a4d4084401c222fef1bd8ebd6cade077"],["/2021/07/30/Review/可塑性記憶/index.html","0dca7d8627f8c1b96fe1dd20bb1305b9"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","6351decf755bd96b085c839fe8b460be"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","7d17085c1326789f8da221cb036cc009"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","96000725fa4237dbf71322ca4e45ac8e"],["/2021/08/25/Review/清戀/index.html","bb1180e6d23d66da75db601d20f728ef"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","dd37d34b5486abce20572f1f9eaa40d3"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","9151009dfc4b23d1ca50fb3b807adbdf"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","ee5a068457fe3aaa065393bed7f3285d"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","8808bb27a9e4fc8a7c880210a12c08e1"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","a8efe42cdaa18d9c1338766a5d9ee3d0"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","04c7aceb89e6b7dd223dcf9f506fe2cb"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","91bc9ad10589a3d2929d82afdadf0f47"],["/2021/10/16/Review/龍與雀斑公主/index.html","e9fb9ebe6526d07646e6d7c11d7b5642"],["/2021/10/19/Review/孤狼不想開後宮/index.html","ed80b280fd9dbfa1debd440867eb2c3c"],["/2021/11/13/Review/徹夜之歌/index.html","a15a1a948bc91e20d75b66d1635a1f10"],["/2021/11/24/Review/武煉巔峰/index.html","f084bd6f5d3a5a433e2ec3e66f285aec"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","1917813ef7872b256c39ccc696b8261c"],["/2022/01/28/Review/神醫凰后/index.html","03d33d27b0b96c02745ced19ca2cba19"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","f84e5a0c5687fe403602064135071263"],["/2022/02/13/Review/夏日幽靈/index.html","c62b54e00dd5b5c450606c9c654c3dce"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","ec6d86cdf60aadcea8c45cae143528f9"],["/2022/02/26/Review/賽馬娘/index.html","70149ec12e7f1bc9ac687c9f7c9100ba"],["/2022/02/27/Review/大欺詐師/index.html","39c2f57a2683fceaa56aac6585749022"],["/2022/02/28/Review/前輩有夠煩/index.html","6938f1dd8336a5ecc8abb678f42fa83f"],["/2022/02/28/Review/碧藍之海/index.html","46af4a48b2f9eead9e8335fc1820db44"],["/2022/03/05/Review/落第騎士英雄譚/index.html","c8552e8de4001eb3b58b12ac78b44ec5"],["/2022/03/06/Review/Another/index.html","21a89503861ac68e84720aff4da937c7"],["/2022/03/06/Review/入間同學入魔了/index.html","e376c851cddb986684b48f3dd4ac4567"],["/2022/03/18/Review/再見宣言/index.html","df2fdc7d99bdd6e0984a7fb2fb002e8d"],["/2022/03/23/Review/生若冬花的妳/index.html","b14c49653fb2a44ffe40cb708a05c6f1"],["/2022/03/25/Review/天之弱/index.html","d627606bd27df72e68b6ad6fa45531ef"],["/2022/03/31/Review/滅了天道之後轉生/index.html","04e67a8f3ba7498d3aba669d8049c9e8"],["/2022/04/30/Review/泡泡/index.html","9867a675a85b32db38b89269cd0dc1bd"],["/2022/05/04/Programming/Dynamic Programming/index.html","a48e9405a9c1c01dd024c78515b4dfc6"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","728fb5c018855076da5b11ff519cdacd"],["/2022/06/13/Review/偵探已經，死了/index.html","52f8b913c797537605fd5de59aec242e"],["/2022/06/14/Review/黑色子彈/index.html","576ceebe58ba177f62b86366609d97bd"],["/2022/06/15/Review/黑白來看守所/index.html","dd877432bb65856ead5f476c27a6b27d"],["/2022/06/16/Review/虛構推理/index.html","7ad6a9bca07a4e144dd67dddc5d7477d"],["/2022/06/17/Review/戀愛與謊言/index.html","6b95d1bd2ddeb45c144af9b7e8e4a450"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","8f1bf69e24096e1f221bdd82a8103a23"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","cd4e1b82321229b0b4afbdfbc7778478"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","0aee9651229b1554c902a3d26e17b0b2"],["/2022/07/03/Review/Hello World/index.html","4e4a9f778eb066cb76126caf5751a173"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","7ef526bf9297eaf4571612402166115c"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","8af34d6ca3ca1887e9fea8c507ba0aa7"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","478c59bc927aa87215fa3238f671f40b"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","aeb1acb1ded26d79cf241beaf25fe35a"],["/2022/07/16/Japanese/動詞分類/index.html","26f1edd66b3978ffa61d3e458b53a12c"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","68e4bdf6c38ef32c4ce1b6db287b8e79"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","e21f4eb96db6913e93108cc4f38ee0c8"],["/2022/07/17/Japanese/音便/index.html","26e814099a00325060137d37279fe335"],["/2022/07/18/Japanese/動詞 時態變化/index.html","2fd7ee345d676c438ce94b8e5fd48023"],["/2022/07/19/Japanese/助詞用法整理1/index.html","c46b2170b6dc6ffdbae6dec0a4f8afca"],["/2022/07/26/Japanese/助詞用法整理2/index.html","279e4ad8e2dbeefb10007efe9da46d80"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","d4dc15994a4fd5231ae6794c91cb1886"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","5456f92dc808f9a54766cffb4cf590a9"],["/2022/07/30/Japanese/疑問詞/index.html","0d2cbe293d74180abf713b8251964741"],["/2022/07/31/Japanese/助詞用法整理3/index.html","dc112d2b5f55b61b850c358538147317"],["/2022/08/02/Japanese/副詞整理/index.html","f39629172f012db9f9994b8e1eb2eb46"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","02eebe902a36ad2258fbad70b33038ec"],["/2022/11/04/Programming/Data Structure/index.html","18f113b42ae1b5861e09e419093ff090"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","57da36db3303b8c3a8c05bbe20a7879f"],["/2022/11/22/Review/組長女兒與保姆/index.html","69b058a7228440c4b4b9545de52635c5"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","dfa96910c773e273df20e105ab67fb5a"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","8dd6042790d2d513c11c117aa481da2a"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","2905ced8c839e903ec8316e4de358b37"],["/2023/01/01/Review/あの夏が飽和する/index.html","fe838ee90d48aed6e309b9e17bf25d9f"],["/2023/01/02/Review/孤獨搖滾/index.html","2e2420109ba7ac2db639facc0bc70456"],["/2023/01/03/Review/來自深淵/index.html","4919642f762661a96721d915134e4461"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","2c39e739cc61bf0e9edba7116128313e"],["/2023/01/05/Review/處刑少女的生存之道/index.html","3da35256eec2a685057a472ebdd0e434"],["/404.html","4ad877b1b5c0496d1122eb60d5683c79"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","e7bb325aaceb905b778eb0ba10a35c06"],["/archives/2019/11/index.html","e6b9837f6c11326b693f162d705ef86f"],["/archives/2019/12/index.html","291a68a902241345f83f9a51105b88fa"],["/archives/2019/index.html","3761daa31ce86c2af59c9d58180ae06d"],["/archives/2020/01/index.html","975ce0df15cf941b740064866f9f7648"],["/archives/2020/02/index.html","f20a4ee38b067afe68c892fce541fab7"],["/archives/2020/03/index.html","3be91bedd9fa7b33467679378831b45f"],["/archives/2020/04/index.html","67fffce60b9c017cc4f1f816721b5e91"],["/archives/2020/05/index.html","48c2c0b547d134fac88e253fedbaeedd"],["/archives/2020/07/index.html","0d972fae288ebf71d24e341345526de5"],["/archives/2020/08/index.html","05dce06168aedefe2da6f68cfb3efaf5"],["/archives/2020/09/index.html","9a684e856a7c0036ea747e1d5d6caf77"],["/archives/2020/10/index.html","84e0a900bcacb517316e8de9651379b1"],["/archives/2020/11/index.html","585029bddaad231ca12018541a92d920"],["/archives/2020/12/index.html","497ac6988ac4031e6dbb312d207dcd49"],["/archives/2020/index.html","49f9b0067dfec6b7ec1fd201e0a3692c"],["/archives/2020/page/2/index.html","fe402beff12117408994d7dfdffe3c45"],["/archives/2020/page/3/index.html","2f0e6dd07aeef319b7b49e253434c5dc"],["/archives/2021/04/index.html","461c197d98ab8cc26ca2866565e6e222"],["/archives/2021/05/index.html","58b804addd4847f0252e8615feb19622"],["/archives/2021/06/index.html","53344b42d8096297ce265102a59a328d"],["/archives/2021/06/page/2/index.html","135527450d716c6080da02dd18434318"],["/archives/2021/07/index.html","16c042d250cfa7b53a5b2b47d9a3826a"],["/archives/2021/07/page/2/index.html","69aaa7db5faa568e73f8084b60a6afea"],["/archives/2021/07/page/3/index.html","f8cc57aa6b682c3b1bb421597ba32e5d"],["/archives/2021/08/index.html","3b92ce4948f1fa985098b638e11d5ced"],["/archives/2021/09/index.html","dfe19361a09ffaf7187681696b070f0a"],["/archives/2021/10/index.html","08b0ce3f34df576e3945ec1875341794"],["/archives/2021/11/index.html","0102c8342d1629f4c8bb993cbb35e0d9"],["/archives/2021/12/index.html","a8b90e61d5d0721dc6324492ebb68776"],["/archives/2021/index.html","d9621aefb43a75e2787d9a0b358f776d"],["/archives/2021/page/2/index.html","6c8c60f6f656797fc06b6cd4c689f095"],["/archives/2021/page/3/index.html","aa8ec5e6e90b319278e327908ae56568"],["/archives/2021/page/4/index.html","86cbfb293f9f2e266b57f38fa72761b0"],["/archives/2021/page/5/index.html","9f5663a8a32435b549c444df892934a8"],["/archives/2021/page/6/index.html","a4f117b247d0ccec3111fa8cb93ed796"],["/archives/2021/page/7/index.html","8dcce0c389ada610e4663ff3173ad2d0"],["/archives/2022/01/index.html","e84b6e594cc52520f1892c27b76f4642"],["/archives/2022/02/index.html","42a653c62638cd5705b018c546c9b5f8"],["/archives/2022/03/index.html","51f9e82adb37ba2ee14e941b23a55fd5"],["/archives/2022/04/index.html","647188a3340d447a0c504da7474453e2"],["/archives/2022/05/index.html","1ec1b3a1ae072b9526757e3bdc39bb99"],["/archives/2022/06/index.html","350079c176645270514006d38ca799a4"],["/archives/2022/07/index.html","e62fb002d65b0563c1f5ae3399d2b1e8"],["/archives/2022/07/page/2/index.html","0425e5aefee8375a1391718823c56c0a"],["/archives/2022/08/index.html","11a391fe928ef528eeb52639e318bf25"],["/archives/2022/11/index.html","875ef439114a195b5476e3e862955701"],["/archives/2022/12/index.html","9312609741ae6729dbfa6cf0c64ec1af"],["/archives/2022/index.html","67e3549ac2d016e579783cd0626f2af3"],["/archives/2022/page/2/index.html","210fc61dfb719009a99ae0deb1f25401"],["/archives/2022/page/3/index.html","cab4b2efe85d4b50859b3acd9eaf0536"],["/archives/2022/page/4/index.html","22e85459b86458d028ce05f0f8f18841"],["/archives/2022/page/5/index.html","1003ecc2b4a12a9eb42ea679bbd5a9d3"],["/archives/2023/01/index.html","547e5c596ee6e136b4a263744e62e736"],["/archives/2023/index.html","4abd41ab8563ff2cb0017460d1677119"],["/archives/index.html","34362e6aaf10f14b622e8d687f3af536"],["/archives/page/10/index.html","35a5d298ecbe72e8df19e750f90ff985"],["/archives/page/11/index.html","a7955e2367e6ed8b199bc5408cd92182"],["/archives/page/12/index.html","cb69c49c1b96bccb0eec410b76b70304"],["/archives/page/13/index.html","3c0548a6bb15f24bb9843a13644432e5"],["/archives/page/14/index.html","04eacecb5dcd0f9fb8ca715ba0d63290"],["/archives/page/15/index.html","19730e870c5219ebd84cf59911535a36"],["/archives/page/2/index.html","3a63ccbf53b6cd3f1f92ac2e8c4e936c"],["/archives/page/3/index.html","b3bc94094756c35151e78b9108d9da82"],["/archives/page/4/index.html","f0763f89fd9ffcf8ab5e9fda64b90f19"],["/archives/page/5/index.html","de6a305b1a2b9769a35bb8681a81e7c5"],["/archives/page/6/index.html","ae9a461dae43fa5cf9306e0b73011711"],["/archives/page/7/index.html","8b030fbc753d4f07d6bcd0dcf5888bd7"],["/archives/page/8/index.html","10a7b0406966c879c635f6218ddbccc1"],["/archives/page/9/index.html","7792873cd81ae37412dec5d4f63d3d54"],["/categories/Programming/index.html","d3898bc70219f43e736404cb05a49be9"],["/categories/Review/index.html","a2048a128c703899bf5fff526f310135"],["/categories/Review/page/10/index.html","6a884c4940d05f62a615999261f3216b"],["/categories/Review/page/11/index.html","7f97c5edfcfe21ebcc4cab7738e22a44"],["/categories/Review/page/12/index.html","bf9d291bd9724b198e3883566b9b8d8d"],["/categories/Review/page/13/index.html","7111eecf0659c97473b2c7c6557e62e4"],["/categories/Review/page/2/index.html","bb73eafd30005ef13ab6725b400d2e5f"],["/categories/Review/page/3/index.html","6193852a11eba7401383c3e662f0b549"],["/categories/Review/page/4/index.html","c42da2c81f399e0f3a20217aa63d335d"],["/categories/Review/page/5/index.html","8ea82aca3c6fa3a0c21c7ac166c3f9bf"],["/categories/Review/page/6/index.html","2cbf6a5fe37b326db079cb9af2eb6d79"],["/categories/Review/page/7/index.html","4eec86d183c138a9b71a198c4cd5e864"],["/categories/Review/page/8/index.html","031ea0efb61c50e78205485205866024"],["/categories/Review/page/9/index.html","c181780c9ac19b063827f0f23e844496"],["/categories/index.html","d710ffff46b509829cc4bf1e0f163d34"],["/categories/日本語/index.html","15db96bf8f7454afdbf36220eec97c19"],["/categories/日本語/page/2/index.html","2b46773e19858ae59f4faaecfb17e06e"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","86113b9dc8c671eb2a49c37c8ed0b4b1"],["/js/custom.js","d8d8ffc95bbc25a9fd19e82015b3f80a"],["/js/gitcalendar.js","94fc5e9667c0081fbd8b5a94e79b2ea3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c0904c45d16beb717fb33f067130e69e"],["/page/10/index.html","dc26498a4451ce73c661bcaba443ad7a"],["/page/11/index.html","d6603c2d61fc9b92fa06972c7c609e30"],["/page/12/index.html","51a48ddf01b99349a9dbaf386ce48367"],["/page/13/index.html","bff4d02573d88200d89db389d51bc1d5"],["/page/14/index.html","aea7397bf9820b7cc7bf76a9168ecc18"],["/page/15/index.html","1e1822197cd94625c2bb7a7742c48809"],["/page/2/index.html","caadbed91f2e077df73c7ed2307aad0b"],["/page/3/index.html","5eb2c8baed2a0d7e8ead345697e733d9"],["/page/4/index.html","e2addfb688906902221c23455a11940f"],["/page/5/index.html","80915fab77a3c050622c560e45ae04b4"],["/page/6/index.html","2df40e47a30d2ac97dfc47270f22563b"],["/page/7/index.html","fdc2256b1e3fa74c71b8ffd8efac2fbd"],["/page/8/index.html","f7ccc4c2032845914966133090655560"],["/page/9/index.html","69119e8d76c21b6eac5f831a4aec88c0"],["/sw-register.js","324e89a219aede0ad2b7bfeebf299b7f"],["/tags/10分作品/index.html","deeaa4f0c22cc00a9cc2df19ba50368b"],["/tags/3分作品/index.html","81e9c837f2ee7a9cfe34e8c246708859"],["/tags/4分作品/index.html","c843185011052b308ff70bc365e2afea"],["/tags/5分作品/index.html","c7f9581424db22d234d466c49d129e6b"],["/tags/6分作品/index.html","1f4ab3ddc5c533fa837c1d287be6a892"],["/tags/6分作品/page/2/index.html","b78a0538e196a8eda4f14bcdbe11a80f"],["/tags/6分作品/page/3/index.html","3ffaef542b59ae5685899790a3d192a4"],["/tags/7分作品/index.html","878fa76be5e264c9a6b50af000681b06"],["/tags/7分作品/page/2/index.html","2093f331b6d7860dad8b8a7cb5918b42"],["/tags/7分作品/page/3/index.html","c745da85f0d4d356cfb167c1038981bc"],["/tags/7分作品/page/4/index.html","f16c587e783556de3fdb91a8e4e8c6e2"],["/tags/8分作品/index.html","18e0f836aa5db4b1fa04e123190a062a"],["/tags/8分作品/page/2/index.html","fdeefbd1cdeadaefec61fb9029cdd12d"],["/tags/8分作品/page/3/index.html","dc23bcda1feb125fc6e91bc5d5c2bf96"],["/tags/8分作品/page/4/index.html","966e906dd3d712b34a42cdc87bb4e6a8"],["/tags/8分作品/page/5/index.html","2cf458bed521823a761bfa7ff497cafb"],["/tags/9分作品/index.html","8e6301e82ef98d1a55895c61a15ba433"],["/tags/N5難度/index.html","42c223d50d3cf7028a1b20931fcf080f"],["/tags/N5難度/page/2/index.html","8d22f2011fe252026709c750fb2a5f1c"],["/tags/index.html","fcfdbbf0e0428a748acab1ec0f69ec8d"],["/tags/アボガド６/index.html","6629f31cfd6a04ae1c64c2643513d0b7"],["/tags/三秋縋/index.html","88e7b1665fc8c8ec0a1ef2759183efbe"],["/tags/中國武俠/index.html","b49c0e4f471092e01ec697be2f39dce7"],["/tags/中國言情/index.html","969af8d9879962c15af0e38d2c258af9"],["/tags/二宮敦人/index.html","4265181fa76f146c84b07cff4b1879d6"],["/tags/人性/index.html","8fa662dcc257ab06573a4d81e5a5a6b7"],["/tags/人際/index.html","eb2dd16a3ddab215da1bf1cae1471c15"],["/tags/住野夜/index.html","f7f6e35b1e8fff150687cb0bba105278"],["/tags/佐野徹夜/index.html","914e380ad5eedfc993c9c06caa91368f"],["/tags/努力/index.html","3c62a7100c49dfc3f2b3344ddbca6c85"],["/tags/動畫/index.html","7ea97b9ca86fadb0a36fb517e6a1b6ed"],["/tags/動畫/page/2/index.html","eea707d84ca472ab7e00449d2d16be3d"],["/tags/動畫/page/3/index.html","1d7ba13236fce6e7a923688f9dd3344d"],["/tags/動畫/page/4/index.html","3096f42a0456d28a3d0c0d507d232ad7"],["/tags/原諒/index.html","d1e09945af93414c5e1a521dffa4992f"],["/tags/反烏托邦/index.html","15c5360725ada477fcad0757a5520bd5"],["/tags/啞鳴/index.html","46cb772fd8ff737cb8d8e5c09391b3f0"],["/tags/喜劇/index.html","02d8b7d4c07afdff78c25506a7b90398"],["/tags/夢想/index.html","6a9c5e26117a738b4decc5077c8de229"],["/tags/天澤夏月/index.html","504e689f5b53bc98b505669eddb8caf9"],["/tags/奇幻/index.html","c9b674e73e20514ea88f7c1629cef01f"],["/tags/學習/index.html","117a22a34b38f06d56f59ca0ac826fa7"],["/tags/學習/page/2/index.html","7d49685ed0c830eaac70c04c75779922"],["/tags/宮崎駿/index.html","16f86d5ef71c05a3973a56bbd36faa19"],["/tags/小說/index.html","a3c2a4b41d40ab542112c0ececbe4ab8"],["/tags/小說/page/2/index.html","c12d499fba76e6285774ac124c1679d5"],["/tags/小說/page/3/index.html","cb86ee9ec6a9b3b95b8d906c4814cabc"],["/tags/小說/page/4/index.html","6c8e6911325ef95f5415c170a67004dd"],["/tags/小說/page/5/index.html","ac3960954b6dbadc3a13ddf9d640bf57"],["/tags/小說/page/6/index.html","5134f0e8643cc151834bf8d845668125"],["/tags/小說/page/7/index.html","2a831209c99c38aa806f3a7de41225da"],["/tags/平淡生活/index.html","09781acf63a8e57610e744605301f3f0"],["/tags/幸福/index.html","9ee73ac58ae5bf56b791d9ce23ae2f09"],["/tags/志茂文彥/index.html","ab5fbbeed803f97b5a7351f578cc4fe0"],["/tags/愛情/index.html","47dde986cca53732232eb0210db87bdb"],["/tags/愛情/page/2/index.html","c80736409cfb2f9e5f89300210514dce"],["/tags/愛情/page/3/index.html","a77ca2bd36157da2260c5d2b9bb951a1"],["/tags/感動/index.html","4fcdcbe9b6f6979c05d09a89ad4c3cde"],["/tags/懸疑/index.html","ce33eebaad88dc45fc74dae233f1c444"],["/tags/懸疑科幻/index.html","1ddb77c6505a9bdc9fed0656489d4379"],["/tags/戀愛/index.html","4b5bd3d38bac66221a3fbef838f03075"],["/tags/成長/index.html","a09655bf63f94514e3790e2bc792773d"],["/tags/成長/page/2/index.html","922dc5e18983a1d7953ae80da841f159"],["/tags/戰爭/index.html","e427afe39732a8b529fc95227ce65cf5"],["/tags/推理/index.html","ce705bed65b8b19b38d08b5528cd7c9d"],["/tags/搞笑/index.html","f136ec73a608efdda0c5268f741932bc"],["/tags/救贖/index.html","396e0e11ba97c523f8ba30e4b0a3009b"],["/tags/斜線堂有紀/index.html","0e5885c63b4851969d57dc696f27f306"],["/tags/日常/index.html","9a23874262d1cc93b7721fc149c84867"],["/tags/末日/index.html","b20cb2bc2911caedf3bd2fd50938d8e0"],["/tags/校園/index.html","4d88054852a718476a057a2496cf4fce"],["/tags/武俠/index.html","a3de865faff2e4decb08f29c692fe0d7"],["/tags/武俠言情/index.html","7dffae3f6d3e6643f5a5a5ffc2bfe852"],["/tags/漫畫/index.html","00f90897dd764abe0f65d7b46adf12a4"],["/tags/生命/index.html","00ff06f3cb3306f4978dfceeb94acd77"],["/tags/生命/page/2/index.html","9ab35443f0fd1cd6013720a062062243"],["/tags/短篇/index.html","32d58bee9baab5951b5e64273030cdd0"],["/tags/社會/index.html","48f34771ff40a7843b5ce0e1d92f6631"],["/tags/科幻/index.html","e15b29dd8cd94f8f395d067c3f75d2ce"],["/tags/童話/index.html","d6dd2d6146cdaf5ad1f186db2434c36c"],["/tags/競爭/index.html","bf3bf0a7222f2ca23f4c10b0df642f30"],["/tags/自我/index.html","890d359c6af95ab26f3628df65f298a8"],["/tags/自我認知/index.html","7788cc356399bc2dd1d7c8ef6224e0ad"],["/tags/葦舟ナツ/index.html","9233bab74a7cf1a7955c6210ee178469"],["/tags/藤萬留/index.html","03fa2d929b58debdea70b32c6988a50e"],["/tags/親情/index.html","dc5e5cba8055da16dcae8a09aecaa0f5"],["/tags/雜項/index.html","b3419b1bf18bfa311bba4cb5cb8b8dac"],["/tags/電影/index.html","4fe4eee57e7d4c1c1663fc35eca19070"],["/tags/電影/page/2/index.html","6cca8255e29043d358b1f38be858bffc"],["/tags/霸凌/index.html","c18f3f10a0ab27c340485713793aa872"],["/tags/青春/index.html","d0d54156be89a7e82f47866bcc132a2b"]];
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
