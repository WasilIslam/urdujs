import React, { useEffect } from "react";
import "./IframeComponent.css"; // Import the CSS file for IframeComponent

const IframeComponent = ({ onDataUpdate, initialCode }) => {
  console.log("Code value", initialCode);
  const externalHtmlUrl =
    "./e.html" +
    (initialCode ? "?code=" + encodeURIComponent(initialCode) : ""); // The URL of the external HTML file

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "dataUpdate") {
        onDataUpdate(event.data.payload);
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="iframe-wrapper">
      <iframe title="external-iframe" src={externalHtmlUrl} />
    </div>
  );
};

export default IframeComponent;
