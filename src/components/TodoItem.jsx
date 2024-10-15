import  { useState, useEffect } from 'react';

const TodoItem = ({ title }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return [hours, minutes, remainingSeconds]
      .map(v => v < 10 ? "0" + v : v)
      .join(":");
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="bg-frost-white shadow-lg rounded-lg p-4 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2 text-midnight-navy border-2 border-slate-mist p-2 rounded">
        {title}
      </h3>
      <button className="text-vibrant-coral hover:text-bold-crimson mb-4">
        View details
      </button>
      <div className="text-2xl font-mono mb-4 text-center">
        {formatTime(time)}
      </div>
      <div className="flex justify-between mt-auto">
        <button 
          onClick={handleStart}
          className="bg-midnight-navy text-frost-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button 
          onClick={handlePause}
          className="bg-slate-mist text-midnight-navy px-4 py-2 rounded"
        >
          Pause
        </button>
        <button 
          onClick={handleReset}
          className="bg-vibrant-coral text-frost-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

import PropTypes from 'prop-types';

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
