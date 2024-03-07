import TimeBlock from "./TimeBlock";
import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from '../../utils/CountdownTimer';

const defaultRemainingTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
}

const Clock = ({ countdownTimestampMs }) => {

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);

    return () => clearInterval(intervalId)
  }, [countdownTimestampMs])

  const updateRemainingTime = (countdown) => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-2 mb-8'>
      <TimeBlock time={remainingTime.days} format={'days'} />
      :
      <TimeBlock time={remainingTime.hours} format={'hours'} />
      :
      <TimeBlock time={remainingTime.minutes} format={'mins'} />
      :
      <TimeBlock time={remainingTime.seconds} format={'secs'} />
    </div>
  );
};

export default Clock;