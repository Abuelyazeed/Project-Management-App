import React from 'react';

function Input({ isTextArea, label }) {
  return (
    <p>
      <label>{label}</label>
      {isTextArea && <textarea type="text" />}
      {!isTextArea && <input type="text" name="" id="" />}
    </p>
  );
}

export default Input;
