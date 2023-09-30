import React, { useEffect } from "react";
import "./IframeComponent.css"; // Import the CSS file for IframeComponent

const CodeRunner = ({ code }) => {
  const externalHtmlUrl = `./run.html?code=${encodeURIComponent(code)}`;

  return (
    <div className="iframe-wrapper">
      <iframe title="external-iframe" src={externalHtmlUrl} />
    </div>
  );
};

export default CodeRunner;
