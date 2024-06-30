import { useState, useRef } from 'react';
import Modal from './Modal';

function NewTask({ onAddTask }) {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      modal.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="my-4 text-xl text-stone-700 font-bold">Invalid Input</h2>
        <p className="mb-6 text-stone-600">
          Oopss ... looks like you forgot to enter a value.
        </p>
        <p className="mb-6 text-stone-600">
          Please make sure you provide a valid value for the task.
        </p>
      </Modal>
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
