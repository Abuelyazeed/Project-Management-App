import React from 'react';

function Input({ isTextArea, label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {isTextArea && <textarea {...props} />}
      {!isTextArea && <input {...props} />}
    </p>
  );
}

export default Input;
