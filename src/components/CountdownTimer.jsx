import React from 'react';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span> The time is over! </span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span> "Hours" {hours}:{minutes}:{seconds}</span>;
  }
};

const CountdownTimer = ({ date }) => {
  return (
    <Countdown
      date={date}
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
