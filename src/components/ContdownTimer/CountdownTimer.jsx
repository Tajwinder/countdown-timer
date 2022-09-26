import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(10),
    [stop, setStop] = useState(false);

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
    if (!time) {
      setStop(true);
    }
  }, [time]);

  return (
    <div>
      <h1>Timer</h1>
      <div>{time}</div>
    </div>
  );
};

export default CountdownTimer;
