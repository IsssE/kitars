import React, { useState, useEffect }from 'react';

interface timerProps {

}

const Timer = (props: timerProps ): JSX.Element => {

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(
    () => {
      let timer: null | NodeJS.Timeout = null;
    if(isActive) {
      timer = setTimeout(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0 )
    return () => {
      if(timer) {
        clearInterval(timer);
      }
    }
    }, [seconds, isActive]);

  return (
    <div className="timer">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className="button-primary" onClick = {toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;