/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/Review/雜言1 備份/index.html","72e757e3104cb8d20979a892edb0e342"],["/2019/11/22/Review/看得見謊言的我，愛上了不說謊的你/index.html","2fca8145e48be8616216b27403359ca4"],["/2019/11/29/Review/妳在月夜裡閃耀光輝/index.html","d599ca2954c2eb2233fef1c3513b21de"],["/2019/12/25/Review/無法計算的青春/index.html","25a759ede274c3b6997e20e26ab19531"],["/2020/01/05/Review/完美謊言的最後一句話/index.html","00675161c5aae94dc934972557375107"],["/2020/01/12/Review/不哭不哭，痛痛飛走吧/index.html","3fb939a2a35b888957684e2eafc7e8fb"],["/2020/01/19/Review/下雨天，不上學/index.html","a0b316f44f956979f9a60e56e18678cf"],["/2020/01/26/Review/三日間的幸福/index.html","a7e344826a3c4f21fe3e1c72927c3dc9"],["/2020/02/02/Review/那年夏天，我撥去的電話/index.html","615853dc4dc4d21dd34066f019fe3b7b"],["/2020/02/09/Review/青春期超感應/index.html","fc938f62640f5f5289a89b72887caaa7"],["/2020/02/15/Review/又做了，相同的夢/index.html","74ae0ae5ff095623277ca66db686543f"],["/2020/02/22/Review/回憶當鋪/index.html","16a7e07fdbcd33bd7e1ddada341ed2e0"],["/2020/03/22/Review/不適合自殺的季節/index.html","0195fedf620de5ff65ccff0cebd2f66d"],["/2020/04/26/Review/我們都無法成為大人/index.html","95015856b21db5a589640db79c996c0a"],["/2020/05/10/Review/她的Ｌ，騙子們的攻防戰/index.html","e0ad1e979b88a360061afb767b74d7ff"],["/2020/05/17/Review/人間失格/index.html","70291c7b50aa8921ab82cd3666389aed"],["/2020/07/04/Review/那一天，朱音投身青空/index.html","c7449cf845225af9996b09cc54d0b56f"],["/2020/07/26/Review/時薪三百日圓的死神/index.html","02a517590f8c327976b4f84bf8bbd4e3"],["/2020/08/01/Review/銀河鐵道之夜/index.html","120618eed18e53c81c4d8c5c1f1ad454"],["/2020/08/09/Review/Starting Over 重啟人生/index.html","fa0782066d2f9b6138c31f329fe911eb"],["/2020/08/16/Review/15歲的恐怖分子/index.html","c9066889950364c8c49427f60651692d"],["/2020/08/23/Review/直到殺了我最心愛的小說家為止/index.html","dd8db533221159d87e04abb0a4171ac0"],["/2020/09/13/Review/羅生門/index.html","c7c9907fd3d52e88f7a804aa51ae813f"],["/2020/09/20/Review/闇夜的怪物/index.html","039f59cd3b31ee3db95dda283fed7654"],["/2020/09/27/Review/14歲，明日的課表/index.html","1798e6facb8decd77df930cbc379b15e"],["/2020/10/04/Review/致十年後的你/index.html","d005aa13f306d1729ebc082444eee3ba"],["/2020/11/08/Review/滅絕之園/index.html","689768de6e371f99354cce8ce8c51421"],["/2020/11/15/Review/將愛拒於門外/index.html","4bb38ed50a5d6beb02ddaec011c9ca03"],["/2020/12/20/Review/審稿男孩與投稿女孩/index.html","9adc8e34db3a988f882204f077009703"],["/2020/12/26/Review/分手後，一起旅行好嗎/index.html","90c91e80afed8307d50612cda7540177"],["/2021/04/22/Review/道印/index.html","d5d516f7e2b48cda21af83efa963846d"],["/2021/05/03/Review/戀入膏肓/index.html","42dec54fc13503132efa50f7bcdc891c"],["/2021/05/10/Review/Dice/index.html","daafafc8bd2d39dfcb3496f2fec852ee"],["/2021/05/15/Review/魔女之旅/index.html","0d47bf891f9c0ef41841f9d0d4f65458"],["/2021/05/28/Review/戀愛寄生蟲/index.html","c078fff8fb9751a6e79c069916ca7c0d"],["/2021/05/30/Review/最後的醫生仰望雨後的天空為你祈禱/index.html","dfd215030d95159e56d670d57c182c95"],["/2021/06/01/Review/最後的醫生仰望櫻花想念你/index.html","326f631ce5e89bd40942e4fd0ce7d1cf"],["/2021/06/04/Review/那天，遇見可以實現願望的神明大人/index.html","7f527793ebfa91164257ef295e3f3b0c"],["/2021/06/05/Review/流浪的月/index.html","6349396b30f9f410c8b9d4ed1b8fe65c"],["/2021/06/07/Review/勇者，或被稱作怪物的少女/index.html","b599c277ba293d63e680eab3fc8e02b8"],["/2021/06/13/Review/第一人稱單數/index.html","e0885f1f7e025cb8bb6185bc4f7d1853"],["/2021/06/16/Review/滿是溫柔的土地上/index.html","d27bdaf794265317d3e9c667046eac5e"],["/2021/06/16/Review/願你幸福/index.html","5b8b8555b79d23af1d660348e32273a7"],["/2021/06/18/Review/我得了一種她不哭就會死的病/index.html","14f76ce7aa57dcedec40852fa5f6bf21"],["/2021/06/21/Review/神隱少女/index.html","b6f878ba2be2739370a2cadc74e7a64b"],["/2021/06/22/Review/想哭的我戴上了貓的面具/index.html","f2735133854fceb822e1d0871c03bf6e"],["/2021/06/23/Review/天空之城/index.html","d63396342fc97a32bf0c210feb28b30a"],["/2021/06/24/Review/魔女宅急便/index.html","71191c888fea0fbadc32e425c4406554"],["/2021/06/25/Review/借物少女艾利緹/index.html","d0096da774e71d44b7b6980199e37b2d"],["/2021/06/26/Review/魔法公主/index.html","0e8259f19b653ccf80bf96b721f06608"],["/2021/06/29/Review/月見似妳，溫柔如他/index.html","0f990c5b72e5ca492a6960f2d325b946"],["/2021/07/04/Review/飛雪與劍/index.html","3e0acb7e016f78941f3deb7c29189b74"],["/2021/07/09/Review/地球防衛少年/index.html","21e23b285c8781b2fcd0839b50c3ba19"],["/2021/07/12/Review/Angel Beats!/index.html","f0ad01b28da3d6a9392dbacac7c55407"],["/2021/07/13/Review/Clannad/index.html","a6aabe03fef8a6c40b02ffbc12491f74"],["/2021/07/15/Review/AIR/index.html","2023acf495c44befde441d146c656aad"],["/2021/07/15/Review/果然我的青春戀愛物語搞錯了/index.html","19c167193826f6dade83e624c4037467"],["/2021/07/15/Review/螢火之森/index.html","6605bdcc4236a60957516b20ca3c26c1"],["/2021/07/16/Review/刮掉鬍子的我與撿到的女高中生/index.html","d8e5535381abc6e2d502c9438ebf44bf"],["/2021/07/17/Review/奇蛋物語/index.html","c93472089e281c857dc939f00d2a6337"],["/2021/07/18/Review/Vivy/index.html","bf4f326f049f375a6cb3e2d7789e19ea"],["/2021/07/18/Review/請妳消失吧/index.html","fb9fcbf253f1998fa358f2de62b5a2ec"],["/2021/07/19/Review/漣漪的夜晚/index.html","5a44852cc8831b89d61a9755bd84d42b"],["/2021/07/20/Review/月色真美/index.html","1bd56b3c93b388e0fcd94ca3d45258a7"],["/2021/07/21/Review/86 - 不存在的戰區/index.html","b728062ca40cc1944415ec9e51592934"],["/2021/07/21/Review/青澀的傷痛與脆弱/index.html","c60d197e0b350282ce188a8f7164cbbf"],["/2021/07/22/Review/罪惡王冠/index.html","1985cc65ff4f78ae86451295b6f9f74c"],["/2021/07/23/Review/弱角友崎同學/index.html","34cd8548b1ef0a36a46e3db9bd0795ed"],["/2021/07/23/Review/惡之教程/index.html","cd33456a68d3f58423ee63a1f2803568"],["/2021/07/24/Review/青春豬頭少年不會夢到兔女郎學姊/index.html","a020a44f33837e6b4583969b771284f2"],["/2021/07/25/Review/魔王勇者/index.html","1a9e5d28472904291f67865cf3eef6dc"],["/2021/07/27/Review/一年A班的怪物/index.html","e46019e110ac960a95758f79011008ae"],["/2021/07/27/Review/奇巧計程車/index.html","2469c19ae1acdeffc3f4f25aa9961eec"],["/2021/07/27/Review/專情的碧池學妹/index.html","dec9131428c4095d67513c88b675706a"],["/2021/07/29/Review/只有我不存在的城市/index.html","206d8d93b2b16f301b4983f74e0c85b3"],["/2021/07/29/Review/愚蠢天使與惡魔共舞/index.html","cc1a3fde5ff26e06b5f26b9aa1bbfdd8"],["/2021/07/30/Review/可塑性記憶/index.html","031221b0adefe93ffcdf0061625653f5"],["/2021/07/31/Review/飼養溫柔死神的方法/index.html","56d3b0ff773359e805b849d0f555f34d"],["/2021/08/14/Review/與佐伯同學同住一個屋簷下/index.html","3f070b1e1cdd4cfb5baadc2330ced4e2"],["/2021/08/16/Review/公爵千金的家庭教師/index.html","6e88861054c548dcd0ccc78479a0f39c"],["/2021/08/25/Review/清戀/index.html","7dd146928b756284c9647f5ec87514cc"],["/2021/09/09/Review/彈珠汽水瓶裡的千歲同學/index.html","aba7ec34142bae3a33fbdaec4ae361e0"],["/2021/09/13/Review/我將在明日逝去，而妳將死而復生/index.html","1291440389584f2c2609ee8c2f037216"],["/2021/09/17/Review/讀者及主人公以及這兩人之後/index.html","b230ca743c88597795feeb52fe0fc5dd"],["/2021/09/27/Review/冷淡的佐藤同學只對我撒嬌/index.html","e30f91e85436efc23a9f3fa86ec23d27"],["/2021/10/02/Review/我所不知道關於前輩的一百件事/index.html","762750a1182b1c6841f161001b949c48"],["/2021/10/07/Review/被逐出勇者隊伍的我展開慢活人生/index.html","e1cb9ae7be13ebf73b6c13e74ce55bb0"],["/2021/10/11/Review/今夜F時，奔向兩個你所在的車站/index.html","ea98a4dc70b6b1d208699822bd1d8609"],["/2021/10/16/Review/龍與雀斑公主/index.html","bb55e9bba74cbf095f45f51fb8d2eb2a"],["/2021/10/19/Review/孤狼不想開後宮/index.html","397ab21a3d3afccb2bdb091222c11fc2"],["/2021/11/13/Review/徹夜之歌/index.html","77847770d1d54d4168f3fc8f67964649"],["/2021/11/24/Review/武煉巔峰/index.html","5df23624d93ca4e7f106ef7aa17e4097"],["/2021/12/05/Review/這份心情，總有一天會遺忘/index.html","b06290493fa5795227c6bad00ddf022b"],["/2022/01/28/Review/神醫凰后/index.html","3766e2223cf97147c2d643581cf2367a"],["/2022/01/29/Review/殺死聖誕老人，然後接吻/index.html","6f72ef1805f1fad9e1347c862dd7579d"],["/2022/02/13/Review/夏日幽靈/index.html","c3ec6fd971e14f9cddf5771d6781d1e8"],["/2022/02/13/Review/有五個姊姊的我就注定要單身了啊/index.html","20186ee4fe6a815cddc01859d87027bc"],["/2022/02/26/Review/賽馬娘/index.html","25c7b70f98d8aa4a40650392170a7915"],["/2022/02/27/Review/大欺詐師/index.html","5edf418bb8cefb662ac3ccb55ad7e01d"],["/2022/02/28/Review/前輩有夠煩/index.html","09841faa21e121f334b5653d7b164721"],["/2022/02/28/Review/碧藍之海/index.html","13625602cc54d54a53b0c0845a67861d"],["/2022/03/05/Review/落第騎士英雄譚/index.html","af573531b5cfab121cb26865b310bc74"],["/2022/03/06/Review/Another/index.html","14f127e4ebfae2ce5d6b88f661ca5c78"],["/2022/03/06/Review/入間同學入魔了/index.html","036bc0a60b63782b81fc86be5b74193f"],["/2022/03/18/Review/再見宣言/index.html","4f2341db26dff1a893e2354663814bff"],["/2022/03/23/Review/生若冬花的妳/index.html","d3aabf0956cd41017baef3489e12dd2d"],["/2022/03/25/Review/天之弱/index.html","bbd10b82bb109bd071de90f970560496"],["/2022/03/31/Review/滅了天道之後轉生/index.html","199fa85e0a26d09bd41a489fcf4b10e4"],["/2022/04/30/Review/泡泡/index.html","44657b87b7efccbf2736090457f17b52"],["/2022/05/04/Programming/Dynamic Programming/index.html","97c173cc50c28b36ac41de424825a251"],["/2022/05/07/Review/讓我聽見愛的歌聲/index.html","54c886f454bf66567379692aa4c8f8f5"],["/2022/06/13/Review/偵探已經，死了/index.html","56d915c596744d2d2e60bb27fa1eee49"],["/2022/06/14/Review/黑色子彈/index.html","ac0d4504be93d65f5c5f8040bdb1ddc5"],["/2022/06/15/Review/黑白來看守所/index.html","d11c6149bf72fc5bd20f460cf367b983"],["/2022/06/16/Review/虛構推理/index.html","cdaf5ee84ef7b339cd419872b2a0a7c8"],["/2022/06/17/Review/戀愛與謊言/index.html","af684620dbb0f4a7bb43e136639b6a9b"],["/2022/06/17/Review/與前女友令人焦灼不已的偽裝結婚/index.html","c5809bb0cd322710e06bf0156b414cba"],["/2022/06/24/Review/與美少女保持距離的方法/index.html","dbf8cd4df105d0abfbf880376f8c1b35"],["/2022/06/29/Review/知曉天空有多藍的人啊/index.html","3445ae1b8818d916a247e493cd6a1fa6"],["/2022/07/03/Review/Hello World/index.html","278583c3677ff461a0f89ae6ef43a924"],["/2022/07/12/Japanese/易忘日文名詞解釋/index.html","753ecea63cb05c5120e3635d8abc3922"],["/2022/07/13/Japanese/イ形容詞 時式/index.html","251de44ba98cd1c5d772c0b660c00952"],["/2022/07/15/Japanese/ナ形容詞 時式/index.html","a9c371037c7c7a2b8acaa03fe127aaf0"],["/2022/07/16/Japanese/五段動詞 語尾變化/index.html","16fc1151e46b94439b94611a8b8b1a8e"],["/2022/07/16/Japanese/動詞分類/index.html","2d1a65aaac2e32ccff9c1f418aa2e098"],["/2022/07/17/Japanese/カサ變格動詞 語尾變化/index.html","d1d7fcb5fb944178b05c2672d551f69e"],["/2022/07/17/Japanese/上下一段動詞 語尾變化/index.html","29be6002020661e91261288e41b97060"],["/2022/07/17/Japanese/音便/index.html","36796d83c950e44ea653700d4462208f"],["/2022/07/18/Japanese/動詞 時態變化/index.html","25c053479069557c3c5f94bd6791079a"],["/2022/07/19/Japanese/助詞用法整理1/index.html","ed0bef55024820cf55daa4b3e67347b9"],["/2022/07/26/Japanese/助詞用法整理2/index.html","0f3d797b333de194a28dfad29d0f3847"],["/2022/07/28/Japanese/動詞屬性 ている、てある/index.html","4bcd882ddd4c66928aeed00c46dfbe7c"],["/2022/07/29/Japanese/動作順序助詞 整理/index.html","0fca7fdaf8e906870a7e6d01c255c172"],["/2022/07/30/Japanese/疑問詞/index.html","302dd99764234aba248d0df62fb98b6a"],["/2022/07/31/Japanese/助詞用法整理3/index.html","2d38cd77cd6fa98864548ede6f5f766d"],["/2022/08/02/Japanese/副詞整理/index.html","9b2b5cf6c32847a33ca51d8fe09d2199"],["/2022/08/05/Japanese/接續詞 感嘆詞/index.html","a92ff8d9258c9154fef2c72475c680e9"],["/2022/11/04/Programming/Data Structure/index.html","50d6dd4a489a86a00b60ae66d066ea24"],["/2022/11/19/Review/即使，這份戀情今晚會從世上消失/index.html","c02cf652aa1a52b75dd7fd650dd38a6b"],["/2022/11/22/Review/組長女兒與保姆/index.html","48e2bab16cd8e4fa0d8df58f549a0789"],["/2022/11/23/Review/Lycoris Recoil 莉可麗絲/index.html","ad8794a6cd6bd02ede5f0e1e92b9a59c"],["/2022/11/24/Review/電馭叛客 邊緣行者/index.html","52e5ea482757a3a80f8c528e4d2a0a32"],["/2022/12/02/Review/通往夏天的隧道，再見的出口/index.html","193060684b429d0206b69560566e11cd"],["/2022/12/31/Lyrics/一番の宝物/index.html","4e84646f8736670c75e0315d6b6a8b7e"],["/2023/01/01/Review/あの夏が飽和する/index.html","9f9b1e3f4dd5600cf2108e2f5d68d964"],["/2023/01/02/Review/孤獨搖滾/index.html","cab58895cf8a0a1d49415fc8a3b904e8"],["/2023/01/02/Review/藍色監獄/index.html","25237cbf452c0a221c8f8c8509e46266"],["/2023/01/03/Review/來自深淵/index.html","9dc6b27d82f1c5ead228dd065299e426"],["/2023/01/04/Review/酷愛電影的龐波小姐/index.html","e09724984d37a725e94e3665581c1dd9"],["/2023/01/05/Review/處刑少女的生存之道/index.html","de9cc7677f4d2288bd7af09b4492c63c"],["/404.html","cea947acb78c35e162783919736a1259"],["/Resources/Avatar.jpg","3ef5c92f2291228d1bd0595c9aacc4e3"],["/Resources/Background1.jpg","01dd09a347b8ea623161c2b6f16dcec1"],["/Resources/Background2.jpg","b02f333f3c10efa8e11938a6f86195ca"],["/Resources/Butterfly.png","02456315f5d8d8557f806bb6fc6de48b"],["/Resources/Error.jpg","05a87dce94e86c7f74426bfe72f72bbe"],["/Resources/Japanese.jpg","d39077b5d7a9fc7331ef2835f1456bb1"],["/Resources/Logo.png","987ea7770f9b8f0e5e56c855c68c4833"],["/Resources/Notion.png","c1e5a5ba77824143a5c666f67daacefb"],["/Resources/Programming.jpg","7650b031da0660fe67b28718983cc3e4"],["/Resources/fontawesome.png","8db83add1282a4b9a848d4b4ed76259b"],["/Resources/github.png","ec3a60c8c6539a07eb70b52f6737ea6e"],["/Resources/shields.png","321fb49d0b1863c98d97d039b096911e"],["/Resources/test1.jpg","2ef4f54ed6a82d103bd6575762729d94"],["/Resources/test2.jpg","21ce58fa50e09b141000f4c4ef3bf1e4"],["/Resources/test3.jpg","3c5cd4b58f39fbc34cc2cc2a6f3f1435"],["/about/index.html","a52146ca105d4544e24c750065e32139"],["/archives/2019/07/index.html","7aec858dc595bed676a6f2c80b73cea1"],["/archives/2019/11/index.html","db7e30798e363c7d81a99a41aa92fbdb"],["/archives/2019/12/index.html","e3428b57c309890e4c47d2cc82846d1e"],["/archives/2019/index.html","7e2947e4fad8486263c66de592948eb5"],["/archives/2020/01/index.html","ab9458cb86fe7667b6f9547802cd9bc9"],["/archives/2020/02/index.html","7643e5c2de4685b5c960eafc024de326"],["/archives/2020/03/index.html","1170a999bcf8e6ee58c5082cde62f5d2"],["/archives/2020/04/index.html","08d6950754670ccb95bcab83a249c102"],["/archives/2020/05/index.html","4b3ff2e78c42e179dae75abc4e690165"],["/archives/2020/07/index.html","b3c3122136fe7bba38ce8ae38372740d"],["/archives/2020/08/index.html","f7fd36cffe79cd6ae8a8554d22c0e797"],["/archives/2020/09/index.html","2c629118e128bc092e16d6a4ed0bf00f"],["/archives/2020/10/index.html","4ccdcb5abe7a9ed4fa1f0a2a70fdc31f"],["/archives/2020/11/index.html","2c23d2ac017693d4d09aa133dc4a770f"],["/archives/2020/12/index.html","cf8822456bbe7e07bfe022dc22df7b26"],["/archives/2020/index.html","2cc586db41856733238d01b0531d6ea7"],["/archives/2020/page/2/index.html","ddfe189c7d27fed02a7fe84c92e4a7c1"],["/archives/2020/page/3/index.html","0cf30cdf9fb8b4bf97f48f598fcbd331"],["/archives/2021/04/index.html","c0afb7a2f2f45522a651295528e8253d"],["/archives/2021/05/index.html","a30865c86e514f05c51b1fbd7dac9809"],["/archives/2021/06/index.html","a5406666e3a091500859d1c889c328df"],["/archives/2021/06/page/2/index.html","13782e4358e0312d602353bf41743531"],["/archives/2021/07/index.html","a6b2b81ac10d510e990266f6d552c415"],["/archives/2021/07/page/2/index.html","e6b7cc637f6a3016472c0ee7dae18028"],["/archives/2021/07/page/3/index.html","4f5eab006691bf0a863c6ed6fceb3cbc"],["/archives/2021/08/index.html","19b64b773ec82989fa6f58f289c52ed2"],["/archives/2021/09/index.html","5aa6d80db61ed22032142d8ecad5a79e"],["/archives/2021/10/index.html","9a2724b808c46bf0fa565dd77d72a5de"],["/archives/2021/11/index.html","e2b6a50ba5b4ae9710f065a892431c3e"],["/archives/2021/12/index.html","6c7b391b25594b125482feb8bb7d759f"],["/archives/2021/index.html","e41b274d17863c8d68962694003d0fc5"],["/archives/2021/page/2/index.html","43dcb3dd938a19371108846b89dabff1"],["/archives/2021/page/3/index.html","aa06e88b3566e2514db8f7cddcf4f958"],["/archives/2021/page/4/index.html","6e24e0e6cacaea53e3252814c2288a50"],["/archives/2021/page/5/index.html","5488e07d2cdfcf210c86eab61a9bd382"],["/archives/2021/page/6/index.html","74265337872951eb62e01c35ee5c8a76"],["/archives/2021/page/7/index.html","1ac27179bb972b5a2c9f8707c1d53d2f"],["/archives/2022/01/index.html","5d2ae4d685f0dabc13fc3346725f5655"],["/archives/2022/02/index.html","6aab94cc38ead8c0165b9a08bec16673"],["/archives/2022/03/index.html","082911ef39906270f040feafa11e7322"],["/archives/2022/04/index.html","7ce75d81caf83a9c123c0903c6073144"],["/archives/2022/05/index.html","01f94b9a2de7ea10b1e1d9064f69a883"],["/archives/2022/06/index.html","2e18cd394d5fa789d1230c32ebb6aef4"],["/archives/2022/07/index.html","7047a5fc9a76f8ad4d1dd12eb6b34549"],["/archives/2022/07/page/2/index.html","faebedb8e03568ba35f7ba100031a60d"],["/archives/2022/08/index.html","a4eb156b10b824ae742f6d30777512dd"],["/archives/2022/11/index.html","f77c1b79f2cc3a3efda8c83cb60cd0b8"],["/archives/2022/12/index.html","35017cf1abf103ec9d9af8697d90c5f0"],["/archives/2022/index.html","30dc91c8e66424d577f48bf9b13c7f20"],["/archives/2022/page/2/index.html","6df04b8c98c6d9d64dd70d7c4770e6db"],["/archives/2022/page/3/index.html","b408d2a5b62e7341bf1bee99ca81d5f2"],["/archives/2022/page/4/index.html","f420d0d1cbf87d6dded31704bf0f67fa"],["/archives/2022/page/5/index.html","4ef35855ec31665ab7bf862643a411c7"],["/archives/2022/page/6/index.html","5760d0541270d60227458d236af8c7a8"],["/archives/2023/01/index.html","2fbd520ef5228aed45776e3e377edc8d"],["/archives/2023/index.html","526e0025d609ad11d75c704d9872d253"],["/archives/index.html","d8ca68232866fbf07b5cc2461c5cf104"],["/archives/page/10/index.html","23d1979ded0022db880926519538cf37"],["/archives/page/11/index.html","7f5b9f38e66861ad021c9272b3be182c"],["/archives/page/12/index.html","1168937052ea0215007110a77f0830dd"],["/archives/page/13/index.html","3d5f0b7972ab45af05f7a77155d582f9"],["/archives/page/14/index.html","6aad84059be9704629146ca9fabf7b7b"],["/archives/page/15/index.html","30890d8eaa82090d7ed00d1b1b6133ca"],["/archives/page/2/index.html","0c5fc2638899ab4e9fd898a34de374e9"],["/archives/page/3/index.html","f4f247541eee2e757128f6722d88f72a"],["/archives/page/4/index.html","b0070db3389e3e1d0c57f2ac10dfd3a9"],["/archives/page/5/index.html","dddaf9c1e83995242b719a44cec582ef"],["/archives/page/6/index.html","88eca08cadbc0d643b3d327a60859442"],["/archives/page/7/index.html","13acf4141d48c969ccc1eaea247ea33b"],["/archives/page/8/index.html","260446dbb05a4530be116a4110499731"],["/archives/page/9/index.html","d6038d8efd32043410cfad23e38402f1"],["/categories/Lyrics/index.html","d5ec60c4e098aed17cc4385c672113aa"],["/categories/Programming/index.html","f0e7832e1352a380365ecab04986648b"],["/categories/Review/index.html","ae03b9fd9a48df9622a6c114ac718cdd"],["/categories/Review/page/10/index.html","8f2ccaa83ed986db079f1a2a62ce5524"],["/categories/Review/page/11/index.html","40443c7d7e6fa418c3a9cbdacd184673"],["/categories/Review/page/12/index.html","52ded8ad26dd27095a495fff94227531"],["/categories/Review/page/13/index.html","74599586e6cbba5e4e3d947ace097e33"],["/categories/Review/page/2/index.html","fc6befa199026e8810c2107d3a033313"],["/categories/Review/page/3/index.html","d156c476aa06d23393d5c058a9371488"],["/categories/Review/page/4/index.html","188d95486bd7ca5e10d94fcc34e953b6"],["/categories/Review/page/5/index.html","575825478c8780729e3be9da1a4ab63a"],["/categories/Review/page/6/index.html","5cb218839553eb4612f5dc13a413d27d"],["/categories/Review/page/7/index.html","fe4459d1822ad550ad13121dbd3970a1"],["/categories/Review/page/8/index.html","2625a240d416feaf91e334f8836095fe"],["/categories/Review/page/9/index.html","6c04a534bcc0216ca93d662c40f8fb96"],["/categories/index.html","645589b51229fd44a787de9fcc323557"],["/categories/日本語/index.html","0abc143a217b8629fffe83eaef81f34a"],["/categories/日本語/page/2/index.html","d587a3f216ed0e46637a78554e0e8c3a"],["/css/custom.css","154171c095f03113964d87ac5c63ac3c"],["/css/index.css","57530920bdbad1b8b197f14ac23afcf7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/kenyan coffee.ttf","2ac7538d58942cbfd1c355f1e616d7b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","cc2eecd3ffda14c16077052c4ca42cd0"],["/js/custom.js","2b7e785b857773766c776e2af8375ca3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","8ef4d36ab07b232ed7dec817c55df9ab"],["/page/10/index.html","0a83f91edf1f76853117faa64171f636"],["/page/11/index.html","f20f0a9778312a2b5566d412bd8c19dc"],["/page/12/index.html","2538cae017a4a6947e64de21503e2603"],["/page/13/index.html","2a9deaf63c12ba8acf44ca271601e23e"],["/page/14/index.html","5ac3c6542330c495dbcaf51bd108e07e"],["/page/15/index.html","06fbb96b1f3ae26af3ad3e25d36fcf65"],["/page/2/index.html","ec06d37d1b6c0c612c94227c0af59bf5"],["/page/3/index.html","24ff0339602db28ea702292be27cc582"],["/page/4/index.html","d64b1a1af06ed37d86298385c62b9d09"],["/page/5/index.html","c9c96f81fcfc9d48cfe63bb0e7967686"],["/page/6/index.html","9416333d181d8bdf2d58b6b8959f8663"],["/page/7/index.html","7737c89139b34de388f45e19fd5c4985"],["/page/8/index.html","cd4545c04af1127462e4789529e5fe6a"],["/page/9/index.html","477a97b0512cdd81e3e5bdbe6a0b67a7"],["/sw-register.js","b8f8be0d19a049cf702b24418b48b591"],["/tags/10分作品/index.html","bb74fae2a274dcba31753e748c5c71f7"],["/tags/3分作品/index.html","3f31785356afe039919bcc96c88abd83"],["/tags/4分作品/index.html","0ffec17e6b74f029dbbe9654d484ff7c"],["/tags/5分作品/index.html","df2a4e0aacd0bc3083397c66d91cfeca"],["/tags/6分作品/index.html","a68c0884894f99089c1ba3dc3537ae77"],["/tags/6分作品/page/2/index.html","e158d55b58cebfc618fdb85484d34f25"],["/tags/6分作品/page/3/index.html","cd01e933f4b865d44e7f305a68d6b988"],["/tags/7分作品/index.html","ed8b3d2e1d7996af8149c1efca4a2a10"],["/tags/7分作品/page/2/index.html","683648dba333cceaf0b4199b323d621f"],["/tags/7分作品/page/3/index.html","ba1939768a94cb2dcc9eb4ed0b0bfa91"],["/tags/7分作品/page/4/index.html","6d41105690c9c963983fbd0480f75a57"],["/tags/8分作品/index.html","2eaabe44fb4a6555af1768ccbe8a13ed"],["/tags/8分作品/page/2/index.html","e2c5cb184a6d631c0ea28cdc43d44fc7"],["/tags/8分作品/page/3/index.html","e6f35dfb48eaafda7a7e96a4b5270c3a"],["/tags/8分作品/page/4/index.html","0e634859a70fee80f4e1298b8cfd9be3"],["/tags/8分作品/page/5/index.html","b1b32c5367f9c95cabccb890dec49fc7"],["/tags/9分作品/index.html","d6f223fc6232d4eef78e4d3a41723bec"],["/tags/Lyrics/index.html","f9219524b257f2758cb7ad7177d55ad5"],["/tags/N5難度/index.html","b2b36720e798d03b936238351fa7185b"],["/tags/N5難度/page/2/index.html","c4b252974cb0b9c5a7594d04da2007e1"],["/tags/index.html","976f4ed224d9c4a20291fcf8078b0360"],["/tags/アボガド６/index.html","df26372c3333ea5ac7170217ec74742b"],["/tags/三秋縋/index.html","977ebeea77f5659f9b25a7d7e12b2195"],["/tags/中國武俠/index.html","24ade3ce19188e4362d46e5689bfb921"],["/tags/中國言情/index.html","f8def6ccd711136371c1cc837bcb6737"],["/tags/二宮敦人/index.html","fbe26af761d46b23b82a4b29e6097ee0"],["/tags/人性/index.html","cb296b7bd61c78549de4e1ef20ac8b07"],["/tags/人際/index.html","9687d354846bc90eb318b186ad18ed15"],["/tags/住野夜/index.html","2b5d642cd74ca870d34a30ee8b6efef8"],["/tags/佐野徹夜/index.html","9dc9360dbb5474fa281b7f83408596d5"],["/tags/努力/index.html","f9f987b80c152b5e89eb6f2e7bc1f9d6"],["/tags/動畫/index.html","5d40382e6383cb1a993e91eaceba97fb"],["/tags/動畫/page/2/index.html","929a9e6c2e5fb8448e20e004e33b36ad"],["/tags/動畫/page/3/index.html","5e1d1c1156058710fc6e073f46096441"],["/tags/動畫/page/4/index.html","4c04d0d0f10a22d45f8277992e05684b"],["/tags/原諒/index.html","ab59b854b6dec0606cacca9e2352acb5"],["/tags/反烏托邦/index.html","bb714936cb26a9cf857a887db099527e"],["/tags/啞鳴/index.html","90fea72dd7711fbf40ede25a0729ecc0"],["/tags/喜劇/index.html","e112585fdaf98010387fb1cfbadeae35"],["/tags/夢想/index.html","39974414056662a715b0d2e0f42603b0"],["/tags/天澤夏月/index.html","942680109ccda10b4f1ecfedb87e9d1c"],["/tags/奇幻/index.html","77aecd27be28485ef1aeb78bbe0f6782"],["/tags/學習/index.html","1e6c4d32d536371edbb947cfdae615b2"],["/tags/學習/page/2/index.html","4c17c6184672b15f361c6226af57fdd9"],["/tags/宮崎駿/index.html","ad8912bd015baddfe5b6a92b2c1da028"],["/tags/小說/index.html","351b484c2b1b859e46b83ada77be0cc5"],["/tags/小說/page/2/index.html","a4e41cbaaf6eda97299c470f86462755"],["/tags/小說/page/3/index.html","bd33ab5c88b19f133ca213ce63a3287e"],["/tags/小說/page/4/index.html","52edd596d53975a00be76a04bf03b7e3"],["/tags/小說/page/5/index.html","083e16386ee26628f719dfcd071649b5"],["/tags/小說/page/6/index.html","19bb003c03d106c3f722549ea11ee254"],["/tags/小說/page/7/index.html","a70b30cee65934df889ae4495c62a00d"],["/tags/平淡生活/index.html","fddb1428d540e83109085790d115ffee"],["/tags/幸福/index.html","1e02cb66675eb0bcc50de495109c5c5c"],["/tags/志茂文彥/index.html","55babb77ef2eec595dfb98d51e716819"],["/tags/愛情/index.html","49ebb6a44095e85ef084b9b77f350f33"],["/tags/愛情/page/2/index.html","6383f0eb3d6fba38e8fffae2930ad80e"],["/tags/愛情/page/3/index.html","5cc031ebcc70345cc1a521f12aafcfc9"],["/tags/感動/index.html","b80f2be2b779733a66477405ba6c6988"],["/tags/懸疑/index.html","ea5cabc53fc580579584bf28c52647b3"],["/tags/懸疑科幻/index.html","bf7f134ee7ab4a6ccb26fb7f0a257761"],["/tags/戀愛/index.html","b1bf083fcf473f13d9d62c25d855cbc4"],["/tags/成長/index.html","25c620bdc89ef17605e9e7a6a06b3a1d"],["/tags/成長/page/2/index.html","f0acc8ce8b3b76aefcce00838c545f8f"],["/tags/戰爭/index.html","9ffacd19e73c8aab1eb1db1d54668bc8"],["/tags/推理/index.html","527d211cb2b4e2da6c9e3cd01d5997e3"],["/tags/搞笑/index.html","2652db9edf6a73c558f0c03f49d48c40"],["/tags/救贖/index.html","5fc5ad21eb25460bf3928f3bee793483"],["/tags/斜線堂有紀/index.html","db37c9a60dde2fe3fb3c0de04bfda8ed"],["/tags/日常/index.html","dd714ec258cd5e7ddafecec94351876a"],["/tags/末日/index.html","f1df4e9bd7055b55ff721f586926b4ad"],["/tags/校園/index.html","e4943261762eeefba31656869f1f943f"],["/tags/武俠/index.html","5df4b4de3e5046b8d677ef6c3c0974f2"],["/tags/武俠言情/index.html","5dd0dee20d08807c5da3c8d5714c3cc5"],["/tags/漫畫/index.html","4c437666e1ee3b89c0fbe2f1bab616e1"],["/tags/生命/index.html","168cd4431cab0b99c6ea2fdce6208805"],["/tags/生命/page/2/index.html","9c509f4c6483e4b066e02b09de961aeb"],["/tags/短篇/index.html","e2ff06003d7f4f9cbdf3650aa2a1e347"],["/tags/社會/index.html","d9d422e13b73e5e5c3676299be88eadf"],["/tags/科幻/index.html","b8d0a4cea0271b41c70f7cae565a7345"],["/tags/童話/index.html","4c143d9b37b3ffb46363ab23b5106e13"],["/tags/競爭/index.html","fdf6562bb454d8623c3ea662c896882a"],["/tags/自我/index.html","5025ba11d3436e58c46432e1c49005dc"],["/tags/自我認知/index.html","1c1fdaf6d5bdc949f29aad18333fa90d"],["/tags/葦舟ナツ/index.html","adbb461b1f6d6576c60529d9e3b9761b"],["/tags/藤萬留/index.html","0259d3f582e7e12396971ddfa59eb954"],["/tags/親情/index.html","0356faebd221fd30db45de8771dd9811"],["/tags/言/index.html","1f5c474ea4e1270b292153fef0b2494a"],["/tags/雜項/index.html","610fa72e9107a5209261418a308d9fc7"],["/tags/電影/index.html","6ee757a07a01ccf96013bc281c90a585"],["/tags/電影/page/2/index.html","c29d5fc69de372115b1876fdc959af7b"],["/tags/霸凌/index.html","e306742cabe1859083b15e52cb1eb409"],["/tags/青春/index.html","8b7563aca2ea1dc9a535f0dea1ee4689"]];
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
