import React from 'react';
import noProjectImage from '../assets/no-projects.png';

function NoProjectSelected() {
  return (
    <div className="w-2/3 text-center mt-24">
      <img
        src={noProjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="my-4 text-xl text-stone-500 font-bold">
        No Project Selected
      </h2>
      <p className="mb-6 text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <button className="px-4 py-2 text-stone-400 bg-stone-700 rounded-md">
          Create new project
        </button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
