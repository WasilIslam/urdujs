import React from "react";
import "./Examples.css";
export const examples = [
  {
    title: "Multiplication Table",
    code: `
// You can try more examples from below
// آپ نیچے دئے گئے کوڈز کو آزما سکتے ہیں۔

kaarkhana likhoTable(number, b) {
  rakho i barabar 1 ke;
  jabtak (i chota ha b jama 1 ke) {
    rakho result barabar number jama " x " jama i jama " = " jama (number zarb i);
    bolo(result);
    i ko barabar karo i jama 1 ke;
  }
}

// Usage example: Print the multiplication table for 5 up to 10
likhoTable(5, 10);

`,
  },
  {
    title: "Fibonacci Number",
    code: `
kaarkhana fibonashi(n) {
  agar (n chota ha  2 se) {
      wapis bhejo n ko;
    } warna {
      wapis bhejo fibonashi(n tafreeq 1) jama fibonashi(n tafreeq 2);
    }
  }
    
bolo(fibonashi(10))`,
  },
  {
    title: "Assalam-o-alaikum!",
    code: `
rakho naam barabar (pucho("جناب، آپ کا نام کیا ہے؟")) ke;

bolo("! "+naam+ " السلام علیکم");`,
  },
  {
    title: "Print A",
    code: `
rakho a barabar 10 ke;

jabtak (a bara ha 0 se){
  bolo("A ki value ha=",a);
  a ko barabar karo a tafreeq 1 ke;
}`,
  },
  {
    title: "Even Odd",
    code: `
rakho a barabar 10 ke;

agar (a barabar ha 0 ke){
  bolo("a even ha");
}
warna bolo("a odd ha")`,
  },
];

export default function Examples({ runCode }) {
  const handleButtonClick = (code) => {
    runCode(code);
  };
  return (
    <div>
      <div style={{ display: "flex", padding: "0px 10px" }}>
        <h1>مثالیں</h1>
      </div>
      <div className="button-holder">
        {examples.map((example) => {
          return (
            <div
              onClick={() => handleButtonClick(example.code)}
              className="button-1 button-chalk"
            >
              {example.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
