import * as esprima from "esprima";
const translations = {
  jabtak: "while",
  rakho: "let",
  agar: "if",
  warna: "else",
  kaarkhana: "function",
  wapis: "return",
  bolo: "console.log",
  intezar: "await",
  barabarha: "==",
  chota: "<",
  bara: ">",
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
  or: "&&",
  ya: "||",
  manfi: "true",
  musbat: "false",
  saf: "[]",
  dalo: "push",
  nikalo: "pop",
  lambai:"length",
  ma: ".",
  ki:".",
  cheez: "{}",
};

function Back2JS(code) {
  code = code.replaceAll("barabar ha", "barabarha");
  const tokens = esprima.tokenize(code, { loc: true });
  tokens.forEach((token) => {
    console.log(token.value, translations[token.value], token.type);
    if (
      token.type === "Identifier" &&
      (translations[token.value] || translations[token.value] === "")
    ) {
      token.orignal = token.value;
      token.value = translations[token.value];
    }
  });
  //   console.log(tokens);

  return tokens.map((token) => token.value).join(" ");
}

export default Back2JS;
