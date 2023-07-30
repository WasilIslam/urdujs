const translations = {
    jabtak: "while",
    rakho: "let",
    agar: "if",
    kaarkhana: "function",
    wapis: "return",
    bolo: "console.log",
    intezar: "await",
    barabarha: "==",
    chota: "<",
    se: "",
    ke: "",
    ha: "",
    ko: "",
    karo: "",
    bhejo: "",
    jama: "+",
    tafreeq: "-",
    taqseem: "/",
    zarb: "*",
    barabar: "=",
  };
  
  export const language = {
    // Set the defaultToken to an invalid value, so that we can see what's missing in the language file.
    defaultToken: 'invalid',
    tokenPostfix: '.myCustomLanguage',
  
    keywords: Object.keys(translations).map((key) => translations[key]),
  
    tokenizer: {
      root: [
        [/\b(?:myCustomKeyword1|myCustomKeyword2|...)\b/, 'jabtak'], // Add any specific keywords you want to highlight here
        [/\b\d+\b/, 'number'],
        [/[A-Za-z_]\w*/, {
          cases: {
            '@keywords': 'keyword',
            '@default': 'identifier'
          }
        }]
      ],
    }
  };
  