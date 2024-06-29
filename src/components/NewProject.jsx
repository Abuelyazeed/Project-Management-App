import React from 'react';
import Input from './Input';

function NewProject() {
  return (
    <div className="w-[35rem] pt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md text-stone-50 bg-stone-900 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" isTextArea={false} type="text" />
        <Input label="Description" isTextArea={true} type="text" />
        <Input label="Due Date" isTextArea={false} type="text" />
      </div>
    </div>
  );
}

export default NewProject;
