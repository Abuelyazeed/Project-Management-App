import React from 'react';

function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <p className="flex gap-4 mb-4">
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button className="text-stone-700 hover:text-stone-950">
          Add Task
        </button>
      </p>
      <ul>Tasks</ul>
      <p className="text-stone-800 mb-4">
        This project does not have any tasks yet.
      </p>
    </section>
  );
}

export default Tasks;
