import React from "react";
import "./Examples.css";
export const examples = [
  {
    title: "Fibonacci Number",
    code: `
// This is an example of fibonacci number
// یہ ایک فائبوناچی نمبر کا مثال ہے۔
// You can try more examples from below
// آپ نیچے دئے گئے کوڈز کو آزما سکتے ہیں۔
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
    title: "Print A!",
    code: `
rakho a barabar 10 ke;

jabtak (a bara ha 0 se){
  bolo("A ki value ha=",a);
  a ko barabar karo a tafreeq 1 ke;
}`,
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
              className="button-1"
            >
              {example.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
