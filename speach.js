speaks = [
  {
    "name": "Alex",     //0
    "lang": "en-US"
  },
  {
    "name": "Alice",    //1
    "lang": "it-IT"
  },
  {
    "name": "Alva",     //2
    "lang": "sv-SE"
  },
  {
    "name": "Amelie",   //3
    "lang": "fr-CA"
  },
  {
    "name": "Anna",     //4
    "lang": "de-DE"
  },
  {
    "name": "Carmit",   //5
    "lang": "he-IL"
  },
  {
    "name": "Damayanti",//6
    "lang": "id-ID"
  },
  {
    "name": "Daniel",   //7
    "lang": "en-GB"
  },
  {
    "name": "Diego",    //8
    "lang": "es-AR"
  },
  {
    "name": "Ellen",    //9
    "lang": "nl-BE"
  },
  {
    "name": "Fiona",    //10
    "lang": "en"
  },
  {
    "name": "Fred",     //11
    "lang": "en-US"
  },
  {
    "name": "Ioana",    //12
    "lang": "ro-RO"
  },
  {
    "name": "Joana",    //13
    "lang": "pt-PT"
  },
  {
    "name": "Jorge",    //14
    "lang": "es-ES"
  },
  {
    "name": "Juan",     //15
    "lang": "es-MX"
  },
  {
    "name": "Kanya",    //16
    "lang": "th-TH"
  },
  {
    "name": "Karen",    //17
    "lang": "en-AU"
  },
  {
    "name": "Kyoko",    //18
    "lang": "ja-JP"
  },
  {
    "name": "Laura",    //19
    "lang": "sk-SK"
  },
  {
    "name": "Lekha",    //20
    "lang": "hi-IN"
  },
  {
    "name": "Luca",     //21
    "lang": "it-IT"
  },
  {
    "name": "Luciana",  //22
    "lang": "pt-BR"
  },
  {
    "name": "Maged",    //23
    "lang": "ar-SA"
  },
  {
    "name": "Mariska",  //24
    "lang": "hu-HU"
  },
  {
    "name": "Mei-Jia",  //25
    "lang": "zh-TW"
  },
  {
    "name": "Melina",   //26
    "lang": "el-GR"
  },
  {
    "name": "Milena",   //27
    "lang": "ru-RU"
  },
  {
    "name": "Moira",    //28
    "lang": "en-IE"
  },
  {
    "name": "Monica",   //29
    "lang": "es-ES"
  },
  {
    "name": "Nora",     //30
    "lang": "nb-NO"
  },
  {
    "name": "Paulina",  //31
    "lang": "es-MX"
  },
  {
    "name": "Samantha", //32
    "lang": "en-US"
  },
  {
    "name": "Sara",     //33
    "lang": "da-DK"
  },
  {
    "name": "Satu",     //34
    "lang": "fi-FI"
  },
  {
    "name": "Sin-ji",   //35
    "lang": "zh-HK"
  },
  {
    "name": "Tessa",    //36
    "lang": "en-ZA"
  },
  {
    "name": "Thomas",   //37
    "lang": "fr-FR"
  },
  {
    "name": "Ting-Ting",//38
    "lang": "zh-CN"
  },
  {
    "name": "Veena",    //39
    "lang": "en-IN"
  },
  {
    "name": "Victoria", //40
    "lang": "en-US"
  },
  {
    "name": "Xander",   //41
    "lang": "nl-NL"
  },
  {
    "name": "Yelda",    //42
    "lang": "tr-TR"
  },
  {
    "name": "Yuna",     //43
    "lang": "ko-KR"
  },
  {
    "name": "Yuri",     //44
    "lang": "ru-RU"
  },
  {
    "name": "Zosia",    //45
    "lang": "pl-PL"
  },
  {
    "name": "Zuzana",   //46
    "lang": "cs-CZ"
  }
];




const msg = new SpeechSynthesisUtterance();
msg.volume = 1; // 0 to 1
msg.rate = 0.75; // 0.1 to 10
msg.pitch = 1; // 0 to 2
msg.text  = "Hej!, Jag gillar dig.";
const voice = speaks[2];//35 //47
console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
msg.voiceURI = voice.name;
msg.lang = voice.lang;
speechSynthesis.speak(msg);
