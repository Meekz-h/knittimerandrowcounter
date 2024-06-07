import React, { useState, useEffect } from 'react';


function StopWatch() {
    const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (seconds) => {
    const getHours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const getMinutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const getSeconds = String(seconds % 60).padStart(2, '0');
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (<>
      <div className="mx-auto"> 
        <div className=" text-white text-9xl bg-transparent bg-purple-400 rounded-2xl my-2">{formatTime(seconds)}</div>
        <div className="my-auto ">
          <button className="bg-rose-400 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded mx-2" onClick={startTimer}>Start</button>
          <button className="bg-rose-400 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded mx-2" onClick={stopTimer}>Stop</button>
          <button className="bg-rose-400 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded mx-2" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </>
  );
}
export default StopWatch;