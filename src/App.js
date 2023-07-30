import React, { useState } from "react";
import MonacoIframe from "./MonacoIframe";
import "./App.css";
import CodeRunner from "./Runner";
import Back2JS from "./helper/Back2JS";

const App = () => {
  const [dataFromIframe, setDataFromIframe] = useState("");
  const [code, setCode] = useState();

  const handleButtonClick = async () => {
    // Access data from the iframe here and do whatever you want with it
    setCode(Back2JS(dataFromIframe));
  };

  return (
    <div className="App">
      <div style={{display:"flex",padding:"0px 10px"}}>
        <h1> اردو جے ایس</h1>
      </div>

      <div className="parent">
        <div style={{ flex: "1" }}>
          <div className="header">
            <button className="button-1" onClick={handleButtonClick}>
              ❮ شروع
            </button>
          </div>
          <MonacoIframe onDataUpdate={setDataFromIframe} />
        </div>
        <div style={{ flex: "1" }}>
          <div className="header">
            {" "}
            <b>نتیجہ</b>
          </div>
          {code && <CodeRunner code={code} />}
        </div>
      </div>
    </div>
  );
};

export default App;
