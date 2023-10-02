import React, { useEffect, useState } from "react";
import MonacoIframe from "./MonacoIframe";
import "./App.css";
import CodeRunner from "./Runner";
import Back2JS from "./helper/Back2JS";
import Examples, { examples } from "./Examples";

const Links = () => {
  return (
    <>
      <a href="https://github.com/WasilIslam/urdujs" className="github-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="30"
          height="30"
        >
          <path
            fillRule="evenodd"
            fill="#000"
            d="M8 .154a8 8 0 00-2.534 15.694c.4.074.546-.174.546-.386 0-.19-.007-.693-.01-1.36-2.002.366-2.425-.484-2.425-.484-.328-.832-.8-1.053-.8-1.053-.653-.446.05-.437.05-.437.723.051 1.106.74 1.106.74.642 1.1 1.684.783 2.095.6.065-.463.25-.78.456-.958-1.596-.18-3.268-.798-3.268-3.547 0-.783.28-1.424.74-1.925-.075-.183-.32-.916.07-1.907 0 0 .6-.194 1.97.738a6.612 6.612 0 011.793-.252c.61.003 1.227.08 1.793.252 1.37-.933 1.968-.738 1.968-.738.392.991.145 1.724.07 1.907.46.5.738 1.142.738 1.925 0 2.756-1.675 3.365-3.277 3.542.257.222.487.66.487 1.33 0 .962-.009 1.739-.009 1.976 0 .213.144.463.55.385A8.002 8.002 0 008 1.154z"
          ></path>
        </svg>
      </a>
    </>
  );
};

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
      <div
        style={{
          display: "flex",
          padding: "0px 10px",
          justifyContent: "space-between",
        }}
      >
        <h1> اردو .JS</h1>
        <Links />
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
