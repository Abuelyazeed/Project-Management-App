import { useState } from 'react';

function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    onAddTask(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
