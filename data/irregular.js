// ["polish", "first", "scnd", "third"], json model
// ["", "", "", ""],
const config = [
  ["powstawać", "arise", "arose", "arisen"],
  ["budzić", "awake", "awoke", "awoken"],
  ["być", "be", "was/were", "been"],
  ["znosić; rodzić (się)", "bear", "bore", "born(e)"],
  ["bić", "beat", "beat", "beaten"],
  ["stawać się", "become", "became", "become"],
  ["rozpoczynać", "begin", "began", "begun"],
  ["zginać, kłaniać", "bend", "bent", "bent"],
  ["zakładać się", "bet", "bet", "bet"],
  ["gryźć kąsać", "bite", "bit", "bitten"],
  ["krwawić", "bleed", "bled", "bled"],
  ["wiać dmuchać", "blow", "blew", "blown"],
  ["łamać", "break", "broke", "broken"],
  ["hodować rozmnażać (się)", "breed", "bred", "bred"],
  ["przynosić", "bring", "brought", "brought"],
  ["transmitować (TV, radio)", "broadcast", "broadcast", "broadcast"],
  ["budować", "build", "built", "built"],
  ["palić, płonąć", "burn", "burnt", "burnt"],
  ["wybuchać", "burst", "burst", "burst"],
  ["kupować", "buy", "bought", "bought"],
  ["łapać, chwytać", "catch", "caught", "caught"],
  ["wybierać", "choose", "chose", "chosen"],
  ["przylegać; przyczepiać", "cling", "clung", "clung"],
  ["przychodzić", "come", "came", "come"],
  ["kosztować", "cost", "cost", "cost"],
  ["czołgać się; pełzać", "creep", "crept", "crept"],
  ["ciąć", "cut", "cut", "cut"],
  [
    "współpracować prowadzić interesy lub rozprowadzać",
    "deal",
    "dealt",
    "dealt",
  ],
  ["kopać", "dig", "dug", "dug"],
  ["robić", "do", "did", "done"],
  ["rysować; ciąć", "draw", "drew", "drawn"],
  ["marzyć, śnić", "dream", "dreamt/-ed", "dreamt/-ed"],
  ["pić", "drink", "drank", "drunk"],
  ["prowadzić", "drive", "drove", "driven"],
  ["jeść", "eat", "ate", "eaten"],
  ["spadać", "fall", "fell", "fallen"],
  ["czuć", "feel", "felt", "felt"],
  ["walczyć", "fight", "fought", "fought"],
  ["znaleźć", "find", "found", "found"],
  ["uciekać", "flee", "fled", "fled"],
  ["latać", "fly", "flew", "flown"],
  ["zabraniać, zakazywać", "forbid", "forbade", "forbidden"],
  ["zapominać", "forget", "forgot", "forgotten"],
  ["wybaczać", "forgive", "forgave", "forgiven"],
  ["mrozić", "freeze", "froze", "frozen"],
  ["dostawać", "get", "got", "got"],
  ["dawać", "give", "gave", "given"],
  ["iść, jechać", "go", "went", "gone"],
  ["mielić; ścierać (proch)", "grind", "ground", "ground"],
  ["rosnąć", "grow", "grew", "grown"],
  ["wieszać", "hang", "hung/-ed", "hung/-ed"],
  ["mieć", "have", "had", "had"],
  ["słyszeć", "hear", "heard", "heard"],
  ["chować", "hide", "hid", "hidden"],
  ["uderzać", "hit", "hit", "hit"],
  ["trzymać", "hold", "held", "held"],
  ["ranić", "hurt", "hurt", "hurt"],
  ["trzymać", "keep", "kept", "kept"],
  ["znać, wiedzieć", "know", "knew", "known"],
  ["kłaść (sb/sth)", "lay", "laid", "laid"],
  ["prowadzić", "lead", "led", "led"],
  ["wychylać (się); pochylać", "lean", "leant", "leant"],
  ["skakać; przeskakiwać", "leap", "leapt", "leapt"],
  ["uczyć (się)", "learn", "learnt", "learnt"],
  ["opuszczać", "leave", "left", "left"],
  ["pożyczać", "lend", "lent", "lent"],
  ["pozwalać", "let", "let", "let"],
  ["leżeć, kłaść się", "lie", "lay", "lain"],
  ["zapalać", "light", "lit", "lit"],
  ["gubić, tracić", "lose", "lost", "lost"],
  ["produkować", "make", "made", "made"],
  ["znaczyć", "mean", "meant", "meant"],
  ["spotykać", "meet", "met", "met"],
  ["pomylić (się)", "mistake", "mistook", "mistaken"],
  ["źle(błędnie) zrozumieć", "misunderstand", "misunderstood", "misunderstood"],
  ["płacić", "pay", "paid", "paid"],
  ["kłaść", "put", "put", "put"],
  ["czytać", "read", "read", "read"],
  ["jeździć", "ride", "rode", "ridden"],
  ["dzwonić", "ring", "rang", "rung"],
  ["wznosić się", "rise", "rose", "risen"],
  ["biec", "run", "ran", "run"],
  ["mówić", "say", "said", "said"],
  ["widzieć", "see", "saw", "seen"],
  ["szukać; poszukiwać", "seek", "sought", "sought"],
  ["sprzedawać", "sell", "sold", "sold"],
  ["wysyłać", "send", "sent", "sent"],
  ["ustalać", "set", "set", "set"],
  ["trząść", "shake", "shook", "shaken"],
  ["świecić", "shine", "shone", "shone"],
  ["strzelać", "shoot", "shot", "shot"],
  ["pokazywać", "show", "showed", "shown"],
  ["kurczyć (się)", "shrink", "shrank", "shrunk"],
  ["zamykać", "shut", "shut", "shut"],
  ["śpiewać", "sing", "sang", "sung"],
  ["tonąć; zatapiać", "sink", "sank", "sunk"],
  ["siadać", "sit", "sat", "sat"],
  ["spać", "sleep", "slept", "slept"],
  ["przesuwać", "slide", "slid", "slid"],
  ["pachnieć; wąchać, czuć", "smell", "smelt", "smelt"],
  ["mówić", "speak", "spoke", "spoken"],
  ["literować", "spell", "spelt", "spelt"],
  ["spędzać", "spend", "spent", "spent"],
  ["rozdzielać; rozłączać", "split", "split", "split"],
  ["popsuć; rozpieścić", "spoil", "spoilt", "spoilt"],
  ["stać", "stand", "stood", "stood"],
  ["kraść", "steal", "stole", "stolen"],
  ["przylepiać; utknąć", "stick", "stuck", "stuck"],
  ["żądlić", "sting", "stung", "stung"],
  ["śmierdzieć", "stink", "stank,stunk", "stuk"],
  ["uderzać; strajkować", "strike", "struck", "struck"],
  ["przysięgać; przeklinać", "swear", "swore", "sworn"],
  ["pływać", "swim", "swam", "swum"],
  ["brać", "take", "took", "taken"],
  ["uczyć (kogoś)", "teach", "taught", "taught"],
  ["rwać, rozrywać", "tear", "tore", "torn"],
  ["powiedzieć", "tell", "told", "told"],
  ["myśleć, sądzić", "think", "thought", "thought"],
  ["rzucać", "throw", "threw", "thrown"],
  ["rozumieć", "understand", "understood", "understood"],
  ["budzić", "wake", "woke", "woken"],
  ["nosić, ubierać", "wear", "wore", "worn"],
  ["tkać; prząść", "weave", "wove/weaved", "woven/weaved"],
  ["szlochać; łkać", "weep", "wept", "wept"],
  ["wygrywać", "win", "won", "won"],
  ["pisać", "write", "wrote", "written"],
  ["upadać, spadać", "fall", "fell", "fallen"],
  ["czuć", "feel", "felt", "felt"],
  ["wypełniać", "fill", "filled", "filled"],
  ["kłaść coś/kogoś", "lay", "laid", "laid"],
  ["leżeć, kłaść się", "lie", "lay", "lain"],
  ["kłamać", "lie", "lied", "lied"],
  ["opuszczać", "leave", "left", "left"],
  ["mieszkać, żyć", "live", "lived", "lived"],
  ["podnosić coś", "raise", "raised", "raised"],
  ["podnosić się", "rise", "rose", "risen"],
  ["okręcać, owijać", "wind", "wound", "wound"],
  ["ranić", "wound", "wounded", "wounded"],
];
export default config;

// arise arose arisen powstawać
// awake awoke awoken budzić
// be was/were been być
// bear bore born(e) znosić; rodzić (się)
// beat beat beaten bić
// become became become stawać się
// begin began begun rozpoczynać
// bend bent bent zginać, kłaniać
// bet bet bet zakładać się
// bite bit bitten gryźć kąsać
// bleed bled bled krwawić
// blow blew blown wiać dmuchać
// break broke broken łamać
// breed bred bred hodować rozmnażać (się)
// bring brought brought przynosić
// broadcast broadcast broadcast transmitować (TV, radio)
// build built built budować
// burn burnt burnt palić, płonąć
// burst burst burst wybuchać
// buy bought bought kupować
// catch caught caught łapać, chwytać
// choose chose chosen wybierać
// cling clung clung przylegać; przyczepiać
// come came come przychodzić
// cost cost cost kosztować
// creep crept crept czołgać się; pełzać
// cut cut cut ciąć
// deal dealt dealt współpracować prowadzić interesy lub rozprowadzać
// dig dug dug kopać
// do did done robić
// draw drew drawn rysować; ciąć
// dream dreamt/-ed dreamt/-ed marzyć, śnić
// drink drank drunk pić
// drive drove driven prowadzić
// eat ate eaten jeść
// fall fell fallen spadać
// feel felt felt czuć
// fight fought fought walczyć
// find found found znaleźć
// flee fled fled uciekać
// fly flew flown latać
// forbid forbade forbidden zabraniać, zakazywać
// forget forgot forgotten zapominać
// forgive forgave forgiven wybaczać
// freeze froze frozen mrozić
// get got got dostawać
// give gave given dawać
// go went gone iść, jechać
// grind ground ground mielić; ścierać (proch)
// grow grew grown rosnąć
// hang hung/-ed hung/-ed wieszać
// have had had mieć
// hear heard heard słyszeć
// hide hid hidden chować
// hit hit hit uderzać
// hold held held trzymać
// hurt hurt hurt ranić
// keep kept kept trzymać
// know knew known znać, wiedzieć
// lay laid laid kłaść (sb/sth)
// lead led led prowadzić
// lean leant leant wychylać (się); pochylać
// leap leapt leapt skakać; przeskakiwać
// learn learnt learnt uczyć (się)
// leave left left opuszczać
// lend lent lent pożyczać
// let let let pozwalać
// lie lay lain leżeć, kłaść się
// light lit lit zapalać
// lose lost lost gubić, tracić
// make made made produkować
// mean meant meant znaczyć
// meet met met spotykać
// mistake mistook mistaken pomylić (się)
// misunderstand misunderstood misunderstood źle(błędnie) zrozumieć
// pay paid paid płacić
// put put put kłaść
// read read read czytać
// ride rode ridden jeździć
// ring rang rung dzwonić
// rise rose risen wznosić się
// run ran run biec
// say said said mówić
// see saw seen widzieć
// seek sought sought szukać; poszukiwać
// sell sold sold sprzedawać
// send sent sent wysyłać
// set set set ustalać
// shake shook shaken trząść
// shine shone shone świecić
// shoot shot shot strzelać
// show showed shown pokazywać
// shrink shrank shrunk kurczyć (się)
// shut shut shut zamykać
// sing sang sung śpiewać
// sink sank sunk tonąć; zatapiać
// sit sat sat siadać
// sleep slept slept spać
// slide slid slid przesuwać
// smell smelt smelt pachnieć; wąchać, czuć
// speak spoke spoken mówić
// spell spelt spelt literować
// spend spent spent spędzać
// split split split rozdzielać; rozłączać
// spoil spoilt spoilt popsuć; rozpieścić
// stand stood stood stać
// steal stole stolen kraść
// stick stuck stuck przylepiać; utknąć
// sting stung stung żądlić
// stink stank,stunk stuk śmierdzieć
// strike struck struck uderzać; strajkować
// swear swore sworn przysięgać; przeklinać
// swim swam swum pływać
// take took taken brać
// teach taught taught uczyć (kogoś)
// tear tore torn rwać, rozrywać
// tell told told powiedzieć
// think thought thought myśleć, sądzić
// throw threw thrown rzucać
// understand understood understood rozumieć
// wake woke woken budzić
// wear wore worn nosić, ubierać
// weave wove/weaved woven/weaved tkać; prząść
// weep wept wept szlochać; łkać
// win won won wygrywać
// write wrote written pisać
// fall fell fallen upadać, spadać
// feel felt felt czuć
// fill filled filled wypełniać
// lay laid laid kłaść coś/kogoś
// lie lay lain leżeć, kłaść się
// lie lied lied kłamać
// leave left left opuszczać
// live lived lived mieszkać, żyć
// raise raised raised podnosić coś
// rise rose risen podnosić się
// wind wound wound okręcać, owijać
// wound wounded wounded ranić
