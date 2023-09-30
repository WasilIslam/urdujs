import React, { useEffect, useState } from "react";
import MonacoIframe from "./MonacoIframe";
import "./App.css";
import CodeRunner from "./Runner";
import Back2JS from "./helper/Back2JS";
import Examples, { examples } from "./Examples";

const App = () => {
  const [dataFromIframe, setDataFromIframe] = useState("");
  const [code, setCode] = useState();
  const [initialCode, setInitialCode] = useState();
  const runCode = async (code) => {
    // Access data from the iframe here and do whatever you want with it
    setInitialCode(code || dataFromIframe);
    setCode(Back2JS(code || dataFromIframe));
    console.log(Back2JS(dataFromIframe));
  };
  useEffect(() => {
    runCode(examples[0].code);
  }, []);
  return (
    <div className="App">
      <div style={{ display: "flex", padding: "0px 10px" }}>
        <h1> اردو .JS</h1>
      </div>

      <div className="parent">
        <div style={{ flex: "1" }}>
          <div className="header">
            <button className="button-1" onClick={() => runCode()}>
              ❮ چلاو
            </button>
          </div>
          <MonacoIframe
            onDataUpdate={setDataFromIframe}
            initialCode={initialCode}
          />
        </div>
        <div style={{ flex: "1" }}>
          <div className="header">
            {" "}
            <b>نتیجہ</b>
          </div>
          {code && <CodeRunner code={code} />}
        </div>
      </div>
      <Examples runCode={runCode} />
    </div>
  );
};

export default App;
