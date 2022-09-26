import React, { useState } from "react";
import "./Timer.css";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const Timer = () => {
  const [status, setStatus] = useState("PAUSE");

  return (
    <div>
      <h1>Timer</h1>
      <CountdownTimer status={status} timeLimit={10} />
      <button onClick={() => setStatus("PAUSE")}>Pause</button>
      <button onClick={() => setStatus("PLAY")}>Play</button>
    </div>
  );
};

export default Timer;
