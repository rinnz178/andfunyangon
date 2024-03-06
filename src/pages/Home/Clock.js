import React, { useState, useEffect } from 'react';
import './Clock.css'; // You can style your clock using CSS

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const hourMarkers = [];

  // Calculate positions for hour markers
  for (let i = 1; i <= 12; i++) {
    const angle = (i / 12) * 360;
    const transformStyle = `rotate(${angle}deg)`;
    hourMarkers.push(
      <div className="hour-marker" key={i} style={{ transform: transformStyle }}>
        {i}
      </div>
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const secondsDegrees = ((time.getSeconds() / 60) * 360) + 90;
  const minutesDegrees = ((time.getMinutes() / 60) * 360) + 90;
  const hoursDegrees = ((time.getHours() / 12) * 360) + 90;

  return (
    <div className="clock">
      <div className="hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }}></div>
      <div className="hand min-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }}></div>
      <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>
      {hourMarkers}


    </div>
  );
};

export default Clock;
