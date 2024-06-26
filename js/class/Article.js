/**
 * 文章列表
 */
define([
   'ArticleType',
   'CETWord',
   'english-vocabulary/CET4mini',
   'phrase/Phrase'
], function (
   ArticleType,
   CETWord,
   CET4mini,
   Phrase
) {

   // 字符串 -> []英文单词
   function getWordsArrayFrom(contentStr) {
      let tempArray = contentStr.split('\n');
      let tempArrayAll = [];
      tempArray.forEach(item => {
         let wordArray = item.split('\t');
         tempArrayAll.push(new CETWord(wordArray[0], wordArray[1]));
      })
      return tempArrayAll
   }
   // 字符串 -> []词条
   function getPhraseArrayFrom(contentStr) {
      return contentStr.split('\n');
   }


   return {
      top500: {
         name: '常用前500',
         value: 'top500',
         type: ArticleType.character,
         content: '的一是了不在有个人这上中大为来我到出要以时和地们得可下对生也子就过能他会多发说而于自之用年行家方后作成开面事好小心前所道法如进着同经分定都然与本还其当起动已两点从问里主实天高去现长此三将无国全文理明日些看只公等十意正外想间把情者没重相那向知因样学应又手但信关使种见力名二处门并口么先位头回话很再由身入内第平被给次别几月真立新通少机打水果最部何安接报声才体今合性西你放表目加常做己老四件解路更走比总金管光工结提任东原便美及教难世至气神山数利书代直色场变记张必受交非服化求风度太万各算边王什快许连五活思该步海指物则女或完马强言条特命感清带认保望转传儿制干计民白住字它义车像反象题却流且即深近形取往系量论告息让决未花收满每华业南觉电空眼听远师元请容她军士百办语期北林识半夫客战院城候单音台死视领失司亲始极双令改功程爱德复切随李员离轻观青足落叫根怎持精送众影八首包准兴红达早尽故房引火站似找备调断设格消拉照布友整术石展紧据终周式举飞片虽易运笑云建谈界务写钱商乐推注越千微若约英集示呢待坐议乎留称品志黑存六造低江念产刻节尔吃势依图共曾响底装具喜严九况跟罗须显热病证刚治绝群市阳确究久除闻答段官政类黄武七支费父统'
      },
      mid500: {
         name: '常用中500',
         value: 'mid500',
         type: ArticleType.character,
         content: '查般斯倒突号树拿克初广奇愿欢希母香破谁致线急古既句京甚仍晚争游龙余护另器细木权星哪苦孩试朝阿队居害独讲错局男差参社换选止际假汉够诉资密案史较环投静宝专修室区料帮衣竟模脸善兵考规联团冷玉施派纪采历顾春责夜画惊银负续吗简章左块索酒值态按陈河巴冲阵境助角户乱呼灵脚继楼景怕停铁异谢否伤兰置医良承福科属围需退基右速适药怀击买素背岁土忙充排价质遇端列印贵疑露哥杀标招血礼弟亮齐穿脑委州某顺省讨尚维板散项状追笔副层沙养读习永草胡济执察归富座雨堂威忽苏船罪敢妇村著食导免温莫掌激慢托胜险寻守波雷沉秀职验靠楚略族藏丽渐刘仅肯担扬盘唐钟级毛营坚松皮供店饭范哈赶吧雪斗效临农味恶烟园烈配杂短卫跳孙曲封抓移顿律卖艺旧朋救防脱翻划迎痛校窗宣乡杨叶警限湖软掉财词压挥超屋秋跑忘馆暗班党宗坏技困登姐预耳席梦朱组旁份禁套亚益探康增诗戏伯晓含劳恩顶君庄谓付田毕纸研虚怪宁替犯灯优您姓例丝盖误架幸隐股毒娘占智佛床米凡介征彩演射祖欲束获舞圣伙梅普借私源镇睡缓升纳织歌宫概野醒夏互积街牌休摇洋败监骨批兄刀网率庭熟创访硬仁菜丁绿牛避阴拍雄秘缺卷姑尼油恐玩释遍握球降虑荣策肉妈迷检伸欧攻练育危厅啊睛摆茶勇判材抱亦妻吸喝趣嘴逐操午吉浪轮默毫冰珠'
      },
      tail500: {
         name: '常用后500',
         value: 'tail500',
         type: ArticleType.character,
         content: '鼓阶孔徐固偏陆诸遗爷述帝闭补编巨透弄尤鲁拥录吴墙货弱敌挑宽迹抽忍折输稳皇桌献蒙纷麻洗评挂童尊舍唯博剧乃混弹附迟敬杯鱼控塞剑厚佳测训牙洞淡盛县芳雅革款横累择乘刺载猛逃构赵杜庆途奔虎巧抗针徒圆闪谷绍聚额健诚鲜泪闲均序震仿缘戴婚篇亡奶忠烦赛闹协杰残懂丹柳妹映桥叹愈旅授享暴偷蓝氏寒宜弃丰延辈抢颜赞典冒眉烧厂唱径库川辞伴怒型纯贝票隔穷拜审伦悲柔启减页纵扫伟迫振瑞丈梁洲枪央触予孤缩洛损促番罢宋奋销幕犹锁珍抬陪妙摸峰劲镜沈夺昨哭讯貌谋泰侧贫扶阻贴申岸彼赏版抵泽插迅凭伊潮咱仙符宇肩尝递燕洁拒郎凝净遭仪薄卡末勒乌森诺呀壮忧沿惯丢季企壁惜婆袋朗零辛忆努舒枝凤灭韩胆灰旦孟陷俗绕疾瞧洪甲帐糊泛皆碰吹码奉箱倾胸堆狂仲圈冬餐厉腿尖括佩鬼欣垂跃港骗融撞塔紫荡敏郑赖滑允鸟课暂瓦祥染滚浮粗刑辆狗扑稍秦扎魂岛腾臣琴悉络摩措域冠竹殊豪呆萨旋喊寄悄倍祝剩督旗返召彻宾甘吐乔腰拔幅违详臂尺饮颗涉逼竞培惠亏叔伏唤鸡邻池怨奥侯骑漫拖俊尾恨贯凌兼询碎晨罚铺浓伍宿泉井繁粉绪筑恢匹尘辉魔仰董描距盗渡勤劝莲坦搭挺踪幽截荒恰慧邦颇焦醉废掩签丧灾鼻侵陶肃裁俱磨析奖匆瓶泥拾凉麦钢涌潜隆津搞蛋奈扰耐傅锦播墨偶捕惑飘屈鸣挤毁斜啦污赤慰饰锋覆汤寿跨羊航'
      },
      top500tw: {
         name: '常用前500港臺',
         value: 'top500tw',
         type: ArticleType.character,
         content: '的一是在不了有和人這中大為上個國我以要地他時來用們生到作出就分於對成會可主發年動同工也能下過子說產種行而方面後多定學法所民得經十三之進等部度家電力如水化高都自二理起小長物現實加量兩體機還當使點從業本重去把性好應開它合因制由其些然前外天政四日那社義事平形相全裏間樣表與關各新線內數正心反你明看原又麼利比或但質氣第向道命此沒變條只結解問意建月公無軍很情者最立代想已通提直題黨程展五果料象員革位入常文總次品式活設及管特件求老頭基資邊流路級少圖山統接知較將組見計別她手角期根論運農指幾九區強放決西被做必戰先則任取據回給調處隊南色光門即保治北造百規熱領七海口東導器壓世金增爭濟階油思術極交受幹聯認六共權收證改清志己美再轉更單風切打白教速花帶安場身車例真務具萬每目至達走積示議聲報鬥完類八離華名確科傳張才信馬節話米採整空元況今集溫土許步群石廣且記需段研界拉林律叫究觀越織裝影算低持音眾系書容兒際商非驗連斷率深難近須礦千省委素技備半辦青列習便響約支般史感勞團往酸稱市克何除消構府甚太精歷值係周什號族維劃選標寫存候親毛快查效斯院江型眼王按格養易置派層片始卻專狀育廠京識適參屬圓包火住滿縣局照準紅輕引細聽該鐵價嚴底首液'
      },
      mid500tw: {
         name: '常用中500港臺',
         value: 'mid500tw',
         type: ArticleType.character,
         content: '官德隨病失爾死講呢蘇配女黃推顯談罪神藝席含企望密批營項防舉球英氧勢告李落布木幫輪破亞朝師圍遠字材注排供河態封另復施減樹溶怎止案台言士均武固葉魚波視僅差費降緊愛左章早害續服食試充兵源判似司護足某練略田黑犯負擊繼興堅輸曲修故城覺夫夠送笑船右財吃富春職漢畫功巴裡跟雖雜板飛佔曾樂致檢吸里助陽互初創抗考投壞策古徑換未跑留鋼端責站簡升述錢副盡帝射草範承獨令限阿宣環雙請超微讓控州良軸找否紀益依優頂礎載倒房突坐粉敵客袁冷勝絕析塊劑測絲協訴陳仍羅餘鹽友洋錯苦夜刑移模頻念逐靠混母短皮終聚汽村哪既衛距校停烈央察燒迅境若印洲刻括激孔搞室待核散侵吧甲久菜味舊湖貨彈損預阻毫乙普穩媽植息擴銀語揮酒雲守拿序紙醫熟缺雨嗎針劉啊急唱訓誤願審血附茶鮮糧斤孩脫硫善肥演龍父漸歡掌械歌沙獲著剛製攻謂盾討晚佈粒亂燃矛乎殺複藥寧魯貴煤伯讀班句香迫介豐培握蘭弦擔蛋沉假執穿答誰順煙縮臉喜腳異免困背星福買染井概慢怕游磁倍祖皇薄促靜補評鐘翻肉踐尼衣寬揚棉希傷操藏垂宜秋氫露套督筆振亮憲末架慶綠編牛映觸銷雷座詩居抓裂胞呼娘景盟威晶厚衡孫延雞危膠屋鄉沖臨陸顧掉呀奇燈歲措束耐劇玉趙跳哥季課凱額齊款紹偉蒸永殖宗苗川爐弱楊零奏沿岩探滑鎮飯濃航懷趕庫奪伊'
      },
      tail500tw: {
         name: '常用后500港臺',
         value: 'tail500tw',
         type: ArticleType.character,
         content: '稅靈途滅賽召歸鼓播盤裁險康唯錄菌純蓋橫繫私符努堂域糖槍潤幅哈竟澤腦壤碳歐側遍寨干敢徹惡慮斜庭納于塞折飼伸濕麥荷暗瓦床卡築戶塔訪透刀旋借氯遇份毒泥退洗蟲擺灰彩賣圈耗夏擇忙獻銅硬予削卷繁雪亦函抽篇陣陰丁尺追堆盛雄迎泛樓爸避謀噸野豬旗偏典館索秦脂潮爺忽塑遺松累愈朱替纖豆傾粗尚痛楚驚壁衝謝奮購磨君池旁碎骨徵監捕弟胡暴割殊貫釋托詞頓寶午塵聞揭炮殘橋婦綜警招吳付浮遭徐冬您搖谷箱隔訂男吹園柱唐紛敗嘴宋玻巨耕坦榮灣閉鍵剝凡並駐救鍋恩凝堿齒截跡麻禁紡廢版緩淨睛昌婚涉筒插岸朗莊街姑貿奴煉腐啦慣乘恢匀梁紗辯耳彪抵臣億脈璃秀薩俄網舞店噴縱寸童汗洪賀閃掛柬爆烯勒津軋稻軟勇像杆厘滾蒙芳肯坡腿儀旅尾伙蕩冰貢登黎鑽秘逃障氨湯郭亡峰幣港伏夢畝軌畢擦莫刺浪援株健售股采島泡甘睡鑄休閥牧繞哲炸磷朋績淡啟尖陷柴呈徒顏淚稍忘扎泵藍拖洞弄授鏡埔壯辛鋒虛貧佛彎摩泰匯幼尊廷窗綱氏隸疑宮姐震瑞怪尤夾循琴描膜違珠緣腰枝森窮竹溝催憶繩邦剩欄漿擁牙貯禮濾鈉紋咱拍罷幸喊袖埃勤焦罰伍潛墨縫姓刊畜飽獎鋁余鬼麗挖跨默鏈仿掃喝袋殼炭幕諸弧污勵梅奶潔災舟鑒苯訟抱毀懂寒智寄屆躍挑渡丹艱貝拔爹戴碼芽碰赤漁哭鉛敬顆奔欲仲柯稀虎妹乏珍桌申遵允螺隆倉魏曉銳征兼氮隱'
      },
      yuhao500: {
         name: '宇浩作品前500',
         value: 'yuhao500',
         type: ArticleType.character,
         content: '的了一是我不上在你山他這來道有下到個天岳人復説去們後中大高就着門子和也看出好地過點都麽還起前會把要頭以師時手家華得靈那然年多回裏没對日之真開可小爲學又月事宗清聲三兩話掌見能同今顔身用面問心果走些發想晚十很自但喫霽幾宇向邊如從只弟二太打於生境什笑白現知所午明間方讓嘉而正力音給眼成意分做口海四當聽進行便動雲字情最長她作司被第入定應堂再法外吧氣先經何老别跟次比思早位西無平文剛其樣水已覺王帶内程週感五書朱東放完住本直少乾坐候接場兒車此術重新己半院各色九全希轉派相卻星機名往常關光通陳拿右主房飯神部齊左張國理等電樓處怎買臉輕元兄因加金柳嗎孫步語將路實微父指站謝安期摇答種立快活公體啊結花堯連調浩您祖解請信火許傳它表寫纔找扇更數母並變合六幫陽該遠題非洞算特收離斷送玉習每叫呢教讀岫八聊代功校低風百論物件南始言忙慢李輩望禮服倒嘴工空確死客拍雖雙錯交提整則臺爸量玩講寒魁難初居室世保及滿近片菜照續酒且弄雨參任像哪葛親才留條告準化盟受閣修馬深記久竟計哥驚喝萬景備周原睡桌趙管流七隨美越韻尚市擡叔團節刻目由米句楊館君班側息木取包未茶著眉媽品至泰杯誰者寶肉根座爺紅需傷度考排容式觀鐘細辦推伯決認議突查衆利餘嘆慶反衣總較'
      },
      yuhao1000: {
         name: '宇浩作品次500',
         value: 'yuhao1000',
         type: ArticleType.character,
         content: '喜赫破終試號樂哈紹故旁繼尤落姐石裝畫建單千德漢女穿待領介若背首基靜章牀睛況底腳淼退改課緊淵古跑拜霏格尊識持殿靠勢按急黑昨江員強寧察必極般遊丹依訴影支呀北絶隊另命業歷失角普喊級報圖挺懷飛舉拉友消換似韓黃權楚郭界愛食群據護置閉曲錢求使刀紙緩春怕層切秋停隻區奇歲精湖令敢絲義蓉既性商擊芙乎雞招封展熱份殺林青衝除聯圍腦皇廣歡亂規牆武香血凱統視麻線藏害夜練育賽疑階設峰值够休示料英塊盒福鎮共段類與呼窗架擺志店顯民運草舊曾伸冷器頂案幹城亮腿陣翻注怪諸制束畢土響形嚴致煩證柱暗假達盡順漸價醒戰街討拱速秘嗯差歸敬即選燈味系樹陰鬥閔筆奶套抓爭廳樞露興歐密龍虚博或務質養餐秦念資稍傅組病嘿潛導陪曉演倆呵塞獨忘端蘭易舒醫吸偷田圓詞屋夫拼産掉巴河象究典顧附沉燒朋搞係約迎趕估揮鼻簡劃願沙骨蘇集超例椅藥袋溫抱鳴苦激箱模胸谷掛官隔散腰園甫造塵趣荷標引仲悠盤訪徒姑淡存足善麗洗詩摸助昀尹努徐男痛充遞彩雪擔環魚肩村珠救藍遇異淨副番監姜佩否抽駡探湯列禁鍋止紫剩效政稱費玄積僅壓舌綿狀皺紀狼夏逛輪姓蛋里尖豐型毛默蓋衛牙頓肯甚拾社州具壁牌搬防劉繫京承圈複紛態勞耳鹿升遍閃牛隱賓擦趟穩皮克史輝緑責奪抖夢職優製局聞釋惑板概貼炒厲網盛朝彷暈登康'
      },
      phrase: {
         name: '常用词条',
         value: 'phrase',
         type: ArticleType.phrase,
         content: Phrase.content,
         getPhraseArray() { return getPhraseArrayFrom(Phrase.content) }
      },
      article0: {
         name: '致有缘人',
         value: 'article0',
         type: ArticleType.article,
         content: "当你点开这个页面的时候，你就是一名有缘人。从第一次牙牙学语，到知道自己名字的写法，再到于洁白的信纸上写下洋洋洒洒的文章。这每一座人生的里程碑，都是一次同母语母文的邂逅和牵连。上下五千年，东西九万里，中国历史上，多少人曾穷经皓首、青灯红烛，在不同的载体上，写下一个又一个的汉字。只在那方寸之间，将灿烂的中华文明，传承了一代又一代。你是否怀念初中时代的书桌前，用几种颜色的中性笔，书写着自己青春的悸动？你是否记得高中时代，你曾以笔为剑，书写着生活、对国家的思考？你是否想起，曾经一笔一划抄录过下唐诗宋词。那些波澜壮阔，抑或是清新隽永的诗句，至今还让你不时地想起而心潮澎湃？如果你怀念这种一笔一划书写地感觉，那么，你来对了地方。宇浩输入法，就是这样的一款输入法：他为了创作而设计，对汉字怀有一份脉脉的温情。不同于拼音输入法需要先输入读音，再选择想要的汉字，宇浩输入法将汉字的部首和笔画，安排在键盘的 26 个按键上。当你连续按下一个汉字中若干部首，这个汉字便会跳到屏幕上。在宇浩输入法中，每一个汉字，都基本对应着唯一的编码。因此在输入地过程中，你并不需要进行「选择汉字」这个操作。就像你在写字的时候，从不会停下来选择汉字。用了它，你在打字中便不会经历恼人的停顿，在无尽的菜单栏中搜索想要的那个汉字；你可以如同在纸上书写一般打字，享受一种「下笔如有神」的自由感和「我书我所想」的掌控度。你甚至可以忽略输入框，享受闭眼创作的乐趣，自由书写古今汉字，在现代文、文言文之间随心徜徉。文字不再是一匹匹无羁的野马，而是你指间缓缓流淌的旋律。「确定带来自由」。如果你心动于这种体验，说明你是一个既浪漫又有品味的人，不妨加入我们吧！"
      },
      article1: {
         name: '春 - 朱自清',
         value: 'article1',
         type: ArticleType.article,
         content: "盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草软绵绵的。桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味儿；闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿。花下成千成百的蜜蜂嗡嗡地闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里，像眼睛，像星星，还眨呀眨的。“吹面不寒杨柳风”，不错的，像母亲的手抚摸着你。风里带来些新翻的泥土的气息，混着青草味儿，还有各种花的香，都在微微润湿的空气里酝酿。鸟儿将窠巢安在繁花嫩叶当中，高兴起来了，呼朋引伴地卖弄清脆的喉咙，唱出宛转的曲子，与轻风流水应和着。牛背上牧童的短笛，这时候也成天在嘹亮地响。雨是最寻常的，一下就是三两天。可别恼。看，像牛毛，像花针，像细丝，密密地斜织着，人家屋顶上全笼着一层薄烟。树叶子却绿得发亮，小草也青得逼你的眼。傍晚时候，上灯了，一点点黄晕的光，烘托出一片安静而和平的夜。乡下去，小路上，石桥边，有撑起伞慢慢走着的人；还有地里工作的农夫，披着蓑，戴着笠的。他们的草屋，稀稀疏疏的，在雨里静默着。天上风筝渐渐多了，地上孩子也多了。城里乡下，家家户户，老老小小，他们也赶趟儿似的，一个个都出来了。舒活舒活筋骨，抖擞抖擞精神，各做各的一份事去。“一年之计在于春”，刚起头儿，有的是工夫，有的是希望。春天像刚落地的娃娃，从头到脚都是新的，他生长着。春天像小姑娘，花枝招展的，笑着，走着。春天像健壮的青年，有铁一般的胳膊和腰脚，他领着我们上前去。"
      },
      article2: {
         name: '冰灯',
         value: 'article2',
         type: ArticleType.article,
         content: "冰灯是流行于中国北方的一种古老的民间艺术形式。因为独特的地域优势，黑龙江可以说是制作冰灯最早的地方。传说在很早以前，每到冬季的夜晚，在松嫩平原上，人们总会看到三五成群的农夫和渔民在悠然自得地喂马和捕鱼，他们所使用的照明工具就是用冰做成的灯笼。这便是最早的冰灯。当时制作冰灯的工艺也很简单，把水放进木桶里冻成冰坨，凿出空心，放个油灯在里面，用以照明，冰罩挡住了凛冽的寒风，黑夜里便有了不灭的灯盏，冰灯成了人们生活中不可缺少的帮手。后来，每逢新春佳节和上元之夜，人们又把它加以装饰，而成为供人观赏的独特的艺术表现形式。清代《黑龙江外纪》里对此有过详细的记载：“上元，城中张灯五夜，村落妇女来观剧者，车声彻夜不绝。有镂五六尺冰为寿星灯者，中燃双炬，望之如水晶人。”其实，冰灯在南方一些地方也相继出现过。乾隆、嘉庆年间，四川诗人张问陶曾写过一首专门描写冰灯的诗，题名就叫《冰灯》，诗云：“黑夜有炎凉，冰灯吐焰长。照来消热念，凿处漏寒光。影湿星沉水，神清月里霜。三冬足文史，底用探萤囊。”南京诗人金德荣在被谪戍新疆巴里坤时，在其古风长诗《巴里坤冰灯歌》中也咏叹道：“雪山高与天山接，上有万古不化雪。朔风一夜结作冰，裁雪妙手搏为冰。以矾入冰冰不化，以烛照冰光四射。五里之内尽通明，半月能教天不夜。元夕月轮照碧空，大千人入水晶宫。”哈尔滨是中国冰雪艺术的摇篮，哈尔滨冰灯驰名中外，饮誉华夏。哈尔滨大规模有组织地制作和展出冰灯始于1963年，人们利用盆、桶等简单模具自然冷冻了千余盏冰灯和数十个冰花，于元宵佳节在兆麟公园展出，轰动全城，形成了万人空巷看冰灯的盛大场面。至今许多老哈尔滨人回想起来仍然记忆犹新，感慨万千。这也是我国第一个有组织、有领导的冰灯游园会。当时就有人即兴作词，来形容这“万人空巷，盛极一时”的今古奇观：“灯节，灯节，玉树冰灯明月。人山人海兴浓，园北园南烛红。红烛，红烛，普照万民同乐。”冰灯是黑土地的特产，是黑龙江人的骄傲。从盆制冰景到一年一度大规模的冰灯游园会，哈尔滨冰灯艺术日趋成熟，它的影响和辐射早已使其驰名世界，风靡海内外。1985年，勤劳智慧的冰城人民进一步挖掘冰雪热能，开发冰雪资源，以蜚声中外的冰灯游园会为中心，推出了以冰雪艺术、冰雪体育、冰雪文化、冰雪旅游、冰雪经贸为内容的哈尔滨冰雪节，把让人畏惧的冰雪变成了宝贵的自然资源，给冰城之冬增添了盎然的春意。以后每年的1月5日，便成为哈尔滨人民特有的地方性传统节日，北方人改变了足不出户的“猫冬”习惯，开始参加各种冰雪活动，哈尔滨之冬不再寂寞，哈尔滨的冬天热了起来。"
      },
      customize: {
         name: '自定义发文',
         value: 'customize',
         type: ArticleType.customize,
         content: "",
      },
   }
})


