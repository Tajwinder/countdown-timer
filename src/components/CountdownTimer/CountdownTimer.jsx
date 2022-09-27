import { useState, useEffect } from "react";
import "./CountdownTimer.css";
export const CountdownTimer = ({ status, timeLimit }) => {
  const [time, setTime] = useState(timeLimit),
    [stop, setStop] = useState(true);

  useEffect(() => {
    let interval;
    if (!stop) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [stop]);

  useEffect(() => {
    setStop(() => !time || status === "PAUSE");
  }, [time, status]);

  return (
    <div>
      <div id="timer">{time}s</div>
    </div>
  );
};
