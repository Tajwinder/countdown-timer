import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";
const CountdownTimer = ({ status, timeLimit }) => {
  const [time, setTime] = useState(timeLimit),
    [stop, setStop] = useState(true);

  useEffect(() => {
    console.log("useEffect running");
    let interval;
    if (!stop) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [stop]);

  useEffect(() => {
    if (!time || status === "PAUSE") {
      setStop(true);
    } else setStop(false);
  }, [time, status]);

  return (
    <div>
      <div id="timer">{time}s</div>
    </div>
  );
};

export default CountdownTimer;
