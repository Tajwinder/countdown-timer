import { useState } from "react";
import "./Timer.css";
import { CountdownTimer } from "../CountdownTimer";

export const Timer = () => {
  const [status, setStatus] = useState("PAUSE");

  const handleClick = () => {
    setStatus(() => (status === "PLAY" ? "PAUSE" : "PLAY"));
  };

  return (
    <>
      <h1>Timer</h1>
      <CountdownTimer status={status} timeLimit={10} />
      <button
        id={status === "PLAY" ? "btn-pause" : "btn-play"}
        onClick={handleClick}
      >
        {status === "PAUSE" ? "Play" : "Pause"}
      </button>
    </>
  );
};
