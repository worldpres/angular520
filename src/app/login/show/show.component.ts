import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public searchName;
  public firstLetter;
  @Input() logged;

  public database = [{'id': 3, 'name': 'artykuły higieniczne ', 'place': ' odpady  zmieszane'}, {'id': 4, 'name': 'bandaże ', 'place': ' odpady zmieszane'}, {'id': 5, 'name': 'baterie ', 'place': ' zbiórki, PSZOK'}, {'id': 11, 'name': 'bombki choinkowe ', 'place': ' odpady zmieszane'}, {'id': 20, 'name': 'buty ', 'place': ' odpady zmieszane'}, {'id': 22, 'name': 'ceramika ', 'place': ' odpady zmieszane'}, {'id': 23, 'name': 'cerata ', 'place': ' odpady zmieszane'}, {'id': 24, 'name': 'chusteczki higieniczne ', 'place': ' odpady zmieszane'}, {'id': 25, 'name': 'chusteczki nawilżane ', 'place': ' odpady zmieszane'}, {'id': 26, 'name': 'deska do krojenia ', 'place': ' odpady zmieszane'}, {'id': 28, 'name': 'deskorolka ', 'place': ' wystawki, PSZOK'}, {'id': 29, 'name': 'długopisy ', 'place': ' odpady zmieszane'}, {'id': 30, 'name': 'doniczka gliniana ', 'place': ' odpady zmieszane'}, {'id': 31, 'name': 'drukarka ', 'place': ' punkty sprzedaży, wystawka, PSZOK'}, {'id': 32, 'name': 'drut (drobny złom) ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 33, 'name': 'dywan ', 'place': ' wystawka, PSZOK'}, {'id': 34, 'name': 'elektryczne i elektroniczne zabawki ', 'place': ' wystawka, PSZOK'}, {'id': 38, 'name': 'flakonik po perfumach ', 'place': ' pojemnik/worek zielony'}, {'id': 39, 'name': 'flamastry ', 'place': ' odpady zmieszane'}, {'id': 40, 'name': 'folia aluminiowa ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 41, 'name': 'folia aluminiowa po czekoladzie ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 42, 'name': 'folia aluminiowa z kubków po jogurtach ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 43, 'name': 'folia bąbelkowa ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 45, 'name': 'folia przeźroczysta (czysta) ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 47, 'name': 'gałązki drzew, krzewów ', 'place': ' kompostownik, PSZOK'}, {'id': 48, 'name': 'gazety ', 'place': ' pojemnik/worek niebieski, PSZOK'}, {'id': 49, 'name': 'gąbka ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 51, 'name': 'gofrownica ', 'place': ' wystawka, PSZOK'}, {'id': 53, 'name': 'guma do żucia ', 'place': ' odpady zmieszane'}, {'id': 54, 'name': 'gumka do mazania ', 'place': ' odpady zmieszane'}, {'id': 56, 'name': 'grzejnik ', 'place': '  wystawka, PSZOK'}, {'id': 61, 'name': 'jarzyny (gotowane) ', 'place': ' odpady zmieszane,  kompostownik'}, {'id': 64, 'name': 'kapsle od butelek ', 'place': ' pojemnik/worek żółty PSZOK'}, {'id': 65, 'name': 'karimata ', 'place': ' pojemnik/worek żółty PSZOK'}, {'id': 66, 'name': 'kartonik po soczkach ', 'place': ' pojemnik żółty, PSZOK'}, {'id': 67, 'name': 'kartony, kartonaże ', 'place': ' pojemnik/worek niebieski, PSZOK'}, {'id': 68, 'name': 'karton po mleku ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 71, 'name': 'kaseta na tusz do drukarki ', 'place': ' PSZOK'}, {'id': 73, 'name': 'klucze metalowe ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 74, 'name': 'kołdra ', 'place': ' odpady zmieszane '}, {'id': 76, 'name': 'korek ', 'place': ' odpady zmieszane'}, {'id': 77, 'name': 'kosiarka ogrodowa ', 'place': ' wystawka, PSZOK'}, {'id': 78, 'name': 'kora ', 'place': ' kompostownik, PSZOK'}, {'id': 79, 'name': 'kości ', 'place': ' odpady zmieszane'}, {'id': 83, 'name': 'kuchenka gazowa ', 'place': ' wystawka, PSZOK'}, {'id': 85, 'name': 'kubek plastikowy po jogurcie ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 86, 'name': 'kubek plastikowy po produktach mlecznych ', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 87, 'name': 'kwiaty cięte ', 'place': ' odpady zmieszane, kompostownik, '}, {'id': 94, 'name': 'liście z drzew ', 'place': ' odpady zielone, kompostownik, PSZOK'}, {'id': 95, 'name': 'lodówka ', 'place': ' wystawka, PSZOK'}, {'id': 96, 'name': 'lokówka ', 'place': ' wystawka, PSZOK'}, {'id': 97, 'name': 'lusterko ', 'place': ' odpady zmieszane'}, {'id': 98, 'name': 'maszynka do golenia jednorazowa ', 'place': ' odpady zmieszane'}, {'id': 102, 'name': 'materac ', 'place': ' wystawka, PSZOK'}, {'id': 103, 'name': 'materac dmuchany ', 'place': ' odpady zmieszane'}, {'id': 105, 'name': 'mikrofalówka ', 'place': ' wystawka, PSZOK'}, {'id': 110, 'name': 'narty ', 'place': ' wystawka, PSZOK'}, {'id': 111, 'name': 'narzędzia elektryczne ', 'place': ' wystawka, PSZOK'}, {'id': 112, 'name': 'niedopałki papierosów ', 'place': ' odpady zmieszane'}, {'id': 113, 'name': 'obrus ', 'place': ' odpady zmieszane '}, {'id': 114, 'name': 'obuwie (zniszczone) ', 'place': ' odpady zmieszane'}, {'id': 115, 'name': 'odpady mięsne ', 'place': ' odpady zmieszane'}, {'id': 116, 'name': 'odtwarzacz DVD ', 'place': ' wystawka, PSZOK'}, {'id': 119, 'name': 'okulary ', 'place': ' odpady zmieszane, zbiórki, PSZOK'}, {'id': 124, 'name': 'opakowanie po kawie (szklane)', 'place': '  pojemnik/worek zielony, PSZOK'}, {'id': 128, 'name': 'opony od samochodu osobowego ', 'place': ' wystawka, PSZOK'}, {'id': 130, 'name': 'papier brudny, zatłuszczony ', 'place': '  odpady zmieszane'}, {'id': 131, 'name': 'papier listowy ', 'place': ' pojemnik/worek niebieski, PSZOK'}, {'id': 132, 'name': 'papier do pisania ', 'place': ' pojemnik/worek niebieski, PSZOK'}, {'id': 133, 'name': 'papier do drukarki ', 'place': ' pojemnik/worek niebieski, PSZOK'}, {'id': 136, 'name': 'papier pergaminowy (tłusty, zabrudzony) ', 'place': ' odpady zmieszane'}, {'id': 137, 'name': 'papier po margarynie ', 'place': ' odpady zmieszane'}, {'id': 141, 'name': 'pasek skórzany ', 'place': ' odpady zmieszane'}, {'id': 142, 'name': 'pasta do butów ', 'place': ' odpady zmieszane'}, {'id': 143, 'name': 'patyczki higieniczne ', 'place': ' odpady zmieszane'}, {'id': 144, 'name': 'pieluchy jednorazowe ', 'place': ' odpady zmieszane'}, {'id': 146, 'name': 'plastelina ', 'place': ' odpady zmieszane'}, {'id': 148, 'name': 'podpaski ', 'place': ' odpady zmieszane'}, {'id': 149, 'name': 'podściółka dla kotów ', 'place': ' odpady zmieszane'}, {'id': 155, 'name': 'pończochy ', 'place': ' odpady zmieszane'}, {'id': 156, 'name': 'popiół ', 'place': ' odpady zmieszane'}, {'id': 157, 'name': 'porcelana ', 'place': ' odpady zmieszane'}, {'id': 159, 'name': 'pralka ', 'place': '  wystawka, PSZOK'}, {'id': 160, 'name': 'produkty mleczne ', 'place': ' odpady zmieszane lub kompostownik'}, {'id': 164, 'name': 'pumeks ', 'place': ' odpady zmieszane'}, {'id': 171, 'name': 'radioodbiornik ', 'place': ' punkty sprzedaży, zbiórki, PSZOK'}, {'id': 172, 'name': 'ramy okienne ', 'place': ' PSZOK'}, {'id': 174, 'name': 'resztki jedzenia ', 'place': ' odpady zmieszane'}, {'id': 175, 'name': 'resztki krawieckie ', 'place': ' odpady zmieszane'}, {'id': 176, 'name': 'resztki świec ', 'place': ' odpady zmieszane'}, {'id': 177, 'name': 'rękawice gumowe ', 'place': ' odpady zmieszane'}, {'id': 178, 'name': 'roleta okienna ', 'place': ' pojemnik/worek żółty,  PSZOK'}, {'id': 179, 'name': 'rolki, rowery ', 'place': ' wystawki , PSZOK'}, {'id': 182, 'name': 'sierść ', 'place': '  odpady zmieszane'}, {'id': 183, 'name': 'skorupy jajek ', 'place': ' odpady zmieszane,  kompostownik'}, {'id': 185, 'name': 'skórki po owocach i warzywach ', 'place': ' odpady zmieszane, kompostownik'}, {'id': 202, 'name': 'szkło wielowarstwowe, klejone ', 'place': ' odpady wielkogabarytowe, PSZOK'}, {'id': 210, 'name': 'ścinki krawieckie ', 'place': ' odpady zmieszane'}, {'id': 211, 'name': 'ścięta trawa ', 'place': ' odpady zielone, kompostownik'}, {'id': 212, 'name': 'ściółka dla gryzoni ', 'place': ' odpady zmieszane, kompostownik'}, {'id': 214, 'name': 'świeca ', 'place': ' odpady zmieszane'}, {'id': 216, 'name': 'tacka styropianowa ', 'place': ' odpady zmieszane'}, {'id': 219, 'name': 'taśma uszczelniająca do okien ', 'place': ' odpady zmieszane'}, {'id': 220, 'name': 'taśmy klejące ', 'place': ' odpady zmieszane'}, {'id': 223, 'name': 'telewizory, monitory ', 'place': ' wystawka,  PSZOK'}, {'id': 224, 'name': 'tłuszcze spożywcze ', 'place': ' odpady zmieszane'}, {'id': 225, 'name': 'torebki z odkurzacza ', 'place': ' odpady zmieszane'}, {'id': 226, 'name': 'toster ', 'place': ' wystawka, PSZOK'}, {'id': 227, 'name': 'trawa ', 'place': '  odpady zielone, kompostownik'}, {'id': 228, 'name': 'trociny ', 'place': ' odpady zmieszane, kompostownik'}, {'id': 233, 'name': 'umywalka ', 'place': ' wystawka, PSZOK'}, {'id': 234, 'name': 'waciki kosmetyczne ', 'place': ' odpady zmieszane'}, {'id': 235, 'name': 'wanna ', 'place': ' wystawka, PSZOK'}, {'id': 236, 'name': 'wata opatrunkowa ', 'place': ' odpady zmieszane'}, {'id': 237, 'name': 'wentylator ', 'place': ' wystawka, PSZOK'}, {'id': 243, 'name': 'włosy ', 'place': ' odpady zmieszane'}, {'id': 245, 'name': 'worki po cemencie ', 'place': ' odpady zmieszane'}, {'id': 247, 'name': 'worki z odkurzacza ', 'place': ' odpady zmieszane'}, {'id': 250, 'name': 'zapalniczki ', 'place': ' odpady zmieszane'}, {'id': 257, 'name': 'ziemia z doniczek ', 'place': ' odpady zmieszane, kompostownik'}, {'id': 258, 'name': 'znicze ', 'place': ' odpady zmieszane'}, {'id': 263, 'name': 'żelazko ', 'place': ' wystawka, PSZOK'}, {'id': 264, 'name': 'zużyte baterie ', 'place': ' zbiórki, PSZOK'}, {'id': 265, 'name': 'żwirek dla kota ', 'place': ' odpady zmieszane'}, {'id': 266, 'name': 'żyletki ', 'place': ' odpady zmieszane'}, {'id': 267, 'name': 'żywność ', 'place': ' odpady zmieszane'}, {'id': 271, 'name': 'farby malarskie', 'place': 'PSZOK, zgłoszenie do Urzędu Miasta'}, {'id': 272, 'name': 'filtr do kawy z fusami', 'place': 'kompostownik, PSZOK'}, {'id': 273, 'name': 'fusy po herbacie i kawie', 'place': 'odpady zmieszane, kompostownik'}, {'id': 274, 'name': 'gruz budowlany', 'place': 'PSZOK, zgłoszenie do Urzędu Miasta'}, {'id': 275, 'name': 'hamak', 'place': 'odpady zmieszane'}, {'id': 276, 'name': 'haczyk wędkarski', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 277, 'name': 'haftka krawiecka', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 278, 'name': 'karton po pizzy (niezatłuszczony)', 'place': 'pojemnik/worek niebieski, PSZOK'}, {'id': 279, 'name': 'katalogi (bez plastikowego opakowania)', 'place': 'pojemnik/worek niebieski, PSZOK'}, {'id': 280, 'name': 'książki w miękkich okładkach', 'place': 'pojemnik/worek niebieski, PSZOK'}, {'id': 281, 'name': 'meble ', 'place': 'wystawka, PSZOK'}, {'id': 282, 'name': 'naczynie kuchenne aluminiowe', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 283, 'name': 'nakrętki z metalu', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 284, 'name': 'nakrętki z tworzywa sztucznego', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 285, 'name': 'opakowania po kosmetykach szklane', 'place': 'pojemnik/worek zielony, PSZOK'}, {'id': 286, 'name': 'opakowania po mrożonkach, z powłoką z tworzywa sztucznego', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 287, 'name': 'opakowanie po jogurcie', 'place': ' pojemnik/worek żółty, PSZOK'}, {'id': 288, 'name': 'pinezka', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 289, 'name': 'płyty gramofonowe, winylowe', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 290, 'name': 'pojemnik plastikowy po jogurcie', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 291, 'name': 'pojemnik plastikowy po maśle, margarynie', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 292, 'name': 'puszki (np. po konserwach owocowych)', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 293, 'name': 'puszki aluminiowe', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 294, 'name': 'puszki po napojach', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 295, 'name': 'reklamówka plastikowa', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 296, 'name': 'słoiki', 'place': 'pojemnik/worek zielony, PSZOK'}, {'id': 297, 'name': 'słoiki po konserwach', 'place': 'pojemnik/worek zielony, PSZOK'}, {'id': 298, 'name': 'szklanka (rozbita)', 'place': 'odpady zmieszane'}, {'id': 299, 'name': 'sztućce plastikowe', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 300, 'name': 'sztuczne kwiaty', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 301, 'name': 'spinacz', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 302, 'name': 'śruby', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 303, 'name': 'przeterminowane leki', 'place': 'pukty zbiórki w aptekach, PSZOK'}, {'id': 304, 'name': 'prospekty foliowane', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 305, 'name': 'teczki kartonowe na dokumenty', 'place': 'pojemnik/worek niebieski, PSZOK'}, {'id': 306, 'name': 'tektura falista', 'place': 'pojemnik/worek niebieski, PSZOK'}, {'id': 307, 'name': 'wiaderko metalowe', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 308, 'name': 'wiaderko plastikowe', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 309, 'name': 'worki foliowe', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 310, 'name': 'worki po proszku (czyste)', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 311, 'name': 'zakrętka od słoika', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 312, 'name': 'zakrętki i kapsle z tworzywa sztucznego', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 313, 'name': 'zeszyty', 'place': 'pojemnik/worek niebieski, PSZOK'}, {'id': 314, 'name': 'agrafka', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 315, 'name': 'akumulator', 'place': 'wystawka, PSZOK'}, {'id': 316, 'name': 'blaszane zabawki ', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 317, 'name': 'butelka plastikowa po jogurcie', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 318, 'name': 'butelka plastikowa po margarynie', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 319, 'name': 'butelka plastikowa po mleku', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 320, 'name': 'butelka plastikowa po napojach', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 321, 'name': 'butelka szklana', 'place': 'pojemnik/worek zielony, PSZOK'}, {'id': 322, 'name': 'butelka po płynie do zmywania naczyń ', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 323, 'name': 'gwoździe', 'place': 'pojemnik/worek żółty, PSZOK'}, {'id': 324, 'name': 'maszynka do golenia elektryczna ', 'place': 'wystawka, PSZOK'}, {'id': 325, 'name': 'lampki choinkowe', 'place': 'PSZOK'}];

  constructor() { }

  ngOnInit() {
  }

  private prepareDatabase(firstLetter = '', searchName = '', sortProp = 'name', sortAsc = true) {
    let data = this.database.sort(function(a, b) {
      if ( sortAsc ) {
        return a[sortProp].localeCompare(b[sortProp]);
      } else {
        return b[sortProp].localeCompare(a[sortProp]);
      }
      // if(asc) return (a[sortProp] > b[sortProp]) ? 1 : ((a[sortProp] < b[sortProp]) ? -1 : 0);
      // else return (b[sortProp] > a[sortProp]) ? 1 : ((b[sortProp] < a[sortProp]) ? -1 : 0);
    });
    data = data.filter(obj => obj.name.includes(searchName));
    if (firstLetter !== '') {
      data = data.filter(obj => obj.name.charAt(0) === firstLetter);
    }
    if (firstLetter !== '' || searchName !== '') {
      return data;
    } else {
      return;
    }
  }

  private alphabet() {
    let letters = [];
    for (const obj of this.database) {
      if (obj.name) {
        letters.push(obj.name.substr(0, 1));
      }
    }
    letters = letters.filter(function (item, index, array) { return array.indexOf(item) === index; } );
    return letters.sort( function(a, b) { return a.localeCompare(b); } );
  }

  private setSearchName(s) {
    this.searchName = s;
  }

  private setFirstLetter(l) {
    this.firstLetter = l;
  }

  private delete(junkName) {
    this.database = this.database.filter(item => item.name !== junkName);
  }

  public disableLetter(i) {
    return i === this.alphabet().indexOf(this.firstLetter);
  }

}
