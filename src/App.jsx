import React, { useState, useEffect } from "react";
import Clock from "./Clock";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Time</h1>
      <Clock time={currentTime} />
    </div>
  );
};

export default App;
