import React from 'react';
import Input from './Input';

function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" isTextArea={false} />
        <Input label="Description" isTextArea={true} />
        <Input label="Due Date" isTextArea={false} />
      </div>
    </div>
  );
}

export default NewProject;
