import React from 'react';
import Input from './Input';

function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2" border-stone-300>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-stone-600 font-bold mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-6 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap mb-4">
          {project.description}
        </p>
      </header>

      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <p className="flex gap-4 mb-4">
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button className="text-stone-700 hover:text-stone-950">
          Add Task
        </button>
      </p>
      <p>This project does not have any tasks</p>
    </div>
  );
}

export default SelectedProject;
