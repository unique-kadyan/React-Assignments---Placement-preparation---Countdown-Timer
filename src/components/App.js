import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);

  const reverseCount = (event, inputValue) => {
    if (event.keyCode !== 13) return;
    inputValue = Math.floor(inputValue);
    if (inputValue < 0) {
      inputValue = 0;
    }

    setCurrentTime(inputValue);
  };

  useEffect(() => {
    let id = null;
    if (currentTime > 0) {
      id = setInterval(() => setCurrentTime(currentTime - 1), 1000);
    }
    return () => clearInterval(id);
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            type="number"
            onKeyDown={(e) => reverseCount(e, e.target.value)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{currentTime}</div>
    </div>
  );
}
