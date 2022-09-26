import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(10);

  useEffect(() =>{
      console.log('useEffect ran')
setInterval(()=>setTime(time=>time-1),1000)
  },[])

  return (
    <div>
      <h1>Timer</h1>
      <div>{time}</div>
    </div>
  );
};

export default CountdownTimer;
