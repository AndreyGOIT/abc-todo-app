/**
 * A React component that represents a single todo item.
 * 
 * The component displays the title of the todo item, a timer, and buttons to start, pause, and reset the timer.
 * It also provides a detail view where the user can edit the description of the todo item and save the changes.
 * 
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the todo item.
 * @param {string} [props.initialDescription] - The initial description of the todo item.
 */
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ title, initialDescription = '' }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDetailView, setIsDetailView] = useState(false);
  const [description, setDescription] = useState(initialDescription);

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

  const handleViewDetails = () => setIsDetailView(true);
  const handleSave = () => {
    // Emit updateTask event here
    console.log('Task updated:', { title, description });
    setIsDetailView(false);
  };

  return (
    <motion.div 
      className="bg-frost-white shadow-lg rounded-lg p-4 flex flex-col h-full"
      layout
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-2 text-midnight-navy border-2 border-slate-mist p-2 rounded">
        {title}
      </h3>
      {isDetailView ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col flex-grow"
        >
          <textarea
            className="flex-grow p-2 mb-4 border-2 border-slate-mist rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
          />
          <button 
            onClick={handleSave}
            className="bg-vibrant-coral text-frost-white px-4 py-2 rounded self-end"
          >
            Save
          </button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col flex-grow"
        >
          <button 
            className="text-vibrant-coral hover:text-bold-crimson mb-4"
            onClick={handleViewDetails}
          >
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
        </motion.div>
      )}
    </motion.div>
  );
};

import PropTypes from 'prop-types';

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  initialDescription: PropTypes.string
};

export default TodoItem;