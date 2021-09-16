// [polish,english,maybe second form]
// ["",""],
const config = [
  ["sklep z antykami", "antique shop"],
  ["piekarnia", "bakery", "baker's"],
  ["księgarnia", "bookshop"],
  ["butik", "boutique"],
  ["sklep mięsny", "butcher's"],
  ["sklep należący do sieci handlowej", "chain store"],
  [
    "sklep z rzeczami używanymi z którego dochód przeznaczony jest na cele dobroczynne",
    "charity shop",
  ],
  ["apteka", "chemist's", "pharmacy"],
  ["sklep odzieżowy", "clothes shop"],
  ["delikatesy", "delicatessen"],
  ["dom towarowy", "departament store"],
  ["sklep budowlany", "diy store"],
  ["butik z modnymi ubraniami", "fashion boutique"],
  ["sklep rybny", "fishmonger's"],
  ["kwiaciarnia", "florist's", "flower shop"],
  ["sklep meblowy", "furniture shop"],
  ["sklep ogrodniczy", "garden centre"],
  ["warzywniak", "greengrocer's", "fruit and veg shop"],
  ["sklep z artykułami metalowymi", "hardware shop"],
  ["sklep ze zdrową żywnością", "health food shop"],
  ["główna ulica handlowa", "high street"],
  ["sklep należący do sieci handlowej", "independent shop"],
  ["jubiler", "jeweller's"],
  ["rynek", "market"],
  ["rynek na którym handlują okoliczni rolnicy", "farmers' market"],
  ["sklep muzyczny", "music shop"],
  ["kiosk", "newsagent's"],
  ["monopolowy", "off-licence"],
  ["sklep z artykułami dla zwierząt", "pet shop"],
  ["centrum handlowe za miastem", "retail park"],
  ["szmateks", "second-hand shop"],
  ["sklep obuwniczy", "shoe shop"],
  ["centrum handlowe", "shopping centre", "shopping mall"],
  ["sklep sportowy", "sports shop"],
  ["sklep papierniczy", "stationer's"],
  ["supermarket", "supermarket"],
  ["sklep z zabawkami", "toy shop"],
  ["alejka (między regałami)", "aisle"],
  ["pokój matki z dzieckiem", "baby changing facilities"],
  ["kod kreskowy", "bar code"],
  ["koszyk", "basket"],
  ["nowy", "brand-new"],
  ["tani", "cheap"],
  ["kasjer", "checkout assistant", "cashier"],
  ["kasa w sklepie", "checkout", "till"],
  ["wybór", "choice"],
  ["gotowe potrawy", "convenience food"],
  ["taśma przy kasie", "conveyor belt"],
  ["lada", "counter"],
  ["klient", "customer"],
  ["dział", "department"],
  ["wejście", "entrance"],
  ["schody ruchome", "escalator"],
  ["drogi", "expensive"],
  ["dział spożywczy", "food hall"],
  ["na sprzedaż", "for sale"],
  ["dział mrożonek", "frozen foods section"],
  ["poziom", "level"],
  ["winda", "lift"],
  ["miejsce spotkań", "meeting point"],
  ["w sprzedaży", "on sale"],
  ["karma dla zwierząt", "pet food"],
  ["metka z ceną", "price tag"],
  ["kolejka", "queue"],
  ["gama produktów", "range of products"],
  ["używany", "second-hand"],
  ["kasa samoobsługowa", "self-service checkout"],
  ["półka", "shelf"],
  ["sprzedawca", "shop assistant"],
  ["osoba uzależniona od zakupów", "shopaholic"],
  ["osoba robiąca zakupy", "shopper"],
  ["torba na zakupy", "shopping bag"],
  ["lista zakupów", "shopping list"],
  ["stragan", "stall"],
  ["konserwy", "tinned food"],
  ["artykuły higieniczne", "toiletries"],
  ["toalety", "toilets"],
  ["wózek na zakupy", "trolley"],
  ["parking podziemny", "underground car park"],
  ["zakupić", "pucharse"],
  ["stać w kolejce", "queue up", "stand in line"],
  ["Czym mogę służyć", "Can I help you?"],
  ["wybrać produkt z półki", "pick a product off a shelf"],
  ["kupować przez internet", "shop online"],
  ["przymierzalnia", "changing room", "fitting room"],
  ["markowe ubrania", "designer clothes"],
  ["moda", "fashion"],
  ["modne dodatki", "fashion accessories"],
  ["marka modowa", "fashion label"],
  ["najnowsza moda", "the latest fashion"],
  ["modny", "fashionable"],
  ["metka", "label"],
  ["model z ubiegłego roku", "last year's model"],
  ["moda męska", "men's wear"],
  ["strój", "outfit"],
  ["rozmiar", "size"],
  ["the right size", "odpowiedni strój"],
  ["za luźny", "too loose"],
  ["za mały", "too small"],
  ["za ciasny", "too tight"],
  ["modny, na topie", "trendy"],
  ["moda damska", "women's wear"],
  ["pasować (pod względem rozmiaru)", "fit"],
  ["zapakować na prezent", "gift-wrap"],
  ["pasować (pod względem koloru, wzoru)", "match"],
  ["pasować (do osoby, jej stylu)", "suit"],
  ["chodzić po sklepach", "go round the shops"],
  ["iść na zakupy", "go shopping"],
  ["Noszę rozmiar 38", "i'm size 38"],
  ["szukać czegoś", "look for sth"],
  ["kupować ubrania", "shop for clothes"],
  ["przymierzać coś", "try sth on"],
  ["50 procent zniżki", "50 per cent discount", "50 pet cent off"],
  ["okazja, produkt w niskiej cenie", "bargain"],
  ["okazja, dobry interes", "deal"],
  ["znaczne obniżki cen", "great reductions"],
  ["cena", "price"],
  ["uczciwa cena", "fair price"],
  ["za pół ceny", "half price"],
  ["niska cena", "low price"],
  ["wyprzedaż", "sale"],
  ["oferta specialna", "special offer"],
  [
    "być przecenionym ze 100 funtów na 50 funtów",
    "be reduced from 100 pounds to 50 pounds",
  ],
  ["kupić coś ze zniżką", "buy sth at a discount"],
  ["kupić coś na wyprzedaży", "buy sth in a sale"],
  ["jeśli kupisz dwa, jeden dostaniesz gratis", "buy two, get one free"],
  ["salon piękności", "beauty salon"],
  ["myjnia samochodowa", "car wash"],
  [
    "punkt opieki nad dziećmi, przedszkole, żłobek",
    "daycare centre for children",
  ],
  ["pralnia chemiczna", "dry cleaner's"],
  ["knajpka, mała restauracja", "eatery"],
  ["miejsce w centrum handlowym, gdzie znajdują się restauracje", "food court"],
  ["warsztat samochodowy", "garage"],
  ["fryzjer", "hairdresser's"],
  ["kawiarnia w sklepie", "in-store cafe"],
  ["pralnia samoobsługowa", "launderette"],
  ["pralnia", "laundry"],
  ["multipleks", "multi-screen cinema"],
  ["stacja benzynowa", "petrol station"],
  ["fotograf", "photographer's"],
  ["poczta", "post office"],
  ["stacja obsługi pojazdów", "service station"],
  ["usługi", "services"],
  ["naprawa obuwia", "shoe repairs"],
  ["numer konta", "account number"],
  ["bank", "bank"],
  ["oddział banku", "branch of a bank"],
  ["konto bankowe", "bank account"],
  ["kurs wymiany walut", "exchange rate"],
  ["ubezpieczenie", "insurance"],
  ["stopa procentowa", "interest rate"],
  ["pożyczać pieniądze (od kogoś)", "borrow money"],
  ["wymienić pieniądze", "change money"],
  ["popaść w długi", "get into debt"],
  ["inwestować w akcje", "invest in stocks and shares"],
  ["pożyczać pieniądze (komuś)", "lend money"],
  ["otwierać konto", "open an account"],
  ["spłacać pożyczkę", "pay off a loan"],
  ["wpłacić pieniądze na konto bankowe", "put money in a bank"],
  ["wziąć pożyczkę", "take out a loan"],
  ["wypłacić pieniądze", "take out a money"],
  ["przelewać pieniądze", "transfer money"],
  ["bankomat", "ATM", "cash mashine", "cashpoint"],
  ["przelew bankowy", "bank transfer"],
  ["banknot", "banknote", "note"],
  ["gotówka", "cash"],
  ["reszta, drobne", "change"],
  ["czek", "cheque"],
  ["moneta", "coin"],
  ["karta kredytowa", "credit card"],
  ["karta debetowa", "debit card"],
  ["targować się", "haggle"],
  ["płacić", "pay"],
  ["honorować karty kredytowe", "accept credit cards", "take credit cards"],
  ["be broke", "be broke"],
  ["kosztować fortunę", "cost a bomb"],
  ["wprowadzić numer PIN", "enter your PIN"],
  ["wypłacić pieniądze z bankomatu", "get money out of a cash machine"],
  [
    "nie mieć przy sobie wystarczającej ilości gotówki",
    "not have enough cash on oneself",
  ],
  ["płacić przelewem", "pay by bank transfer"],
  ["płacić czekiem", "pay by cheque"],
  ["płacić kartą", "pay by credit card"],
  ["płacic gotówką", "pay in cash"],
  ["oszczędzać pieniądze", "save money"],
  [
    "wydać fortune/pieniądze na coś",
    "spend a fortune on sth",
    "spend a money on sth",
  ],
  ["zepsuty", "broken"],
  ["wyszczerbiony", "chipped"],
  ["reklamacja", "complaint"],
  ["pęknięty", "cracked"],
  ["niezadowolony", "dissatisfied"],
  ["wadliwy, mający usterki", "faulty"],
  ["po dacie przydatności, przeterminowany", "past the sell-by date"],
  ["paragon", "receipt"],
  ["produkt na wymianę", "replacement"],
  ["zwrot", "return"],
  ["zdzierstwo, złodziejstwo", "rip-off"],
  ["porysowany", "scratched"],
  ["porysowany", "stain"],
  ["rozdarty", "torn"],
  ["wymienić", "exchange", "replace"],
  ["działać", "work"],
  ["otrzymać zwrot pieniędzy", "get a refound", "get your money back"],
  ["zwracać pieniądze", "give refounds"],
  ["ciągle się zawieszać, psuć", "keep crashing"],
  ["złożyć reklamację", "make a complaint"],
  ["zwrócić, oddać coś do sklepu", "return sth back", "take sth back"],
  ["porozmawiac z kierownikiem sklepu", "talk to the manager"],
  ["reklama", "ad", "advert", "advertisement"],
  ["kampania reklamowa", "advertising campaign"],
  ["billboard", "bilboard", "hoarding"],
  ["marka", "brand", "make"],
  ["nazwa handlowa", "brand name"],
  ["broszura reklamowa", "brochure"],
  ["ogłoszenie drobne", "classified ad"],
  ["reklama telewizyjna/radiowa", "commercial"],
  ["melodyjka reklamowa, dżingiel", "jingle"],
  ["ulotka reklamowa", "leaflet"],
  ["logo", "logo"],
  ["presja grupy rówieśniczej", "peer pressure"],
  ["plakat", "poster"],
  ["hasło reklamowe", "slogan"],
  ["reklamować", "advertise"],
  ["przyciągać tłumy", "attract the crowds"],
  ["zamieścić ogłoszenie", "place an advertisement"],
  ["konsument", "consumer"],
  ["społeczeństwo konsumpcyjne", "consumer society"],
  ["konsumpcjonizm", "consumerism"],
  ["konsumpcja", "consumption"],
  ["wolny rynek", "free market"],
  ["towary", "goods"],
  ["produkt", "product"],
  ["zysk", "profit"],
  ["protekcjonizm", "protectionism"],
  ["handel", "trade"],
];
export default config;