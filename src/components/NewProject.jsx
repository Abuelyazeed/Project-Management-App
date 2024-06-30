import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };
    if (
      enteredData.title.trim() === '' ||
      enteredData.description.trim() === '' ||
      enteredData.dueDate.trim() == ''
    ) {
      // show error modal
      modal.current.open();
      return;
    }
    onAdd(enteredData);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="my-4 text-xl text-stone-700 font-bold">Invalid Input</h2>
        <p className="mb-6 text-stone-600">
          Oopss ... looks like you forgot to enter a value.
        </p>
        <p className="mb-6 text-stone-600">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] pt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md text-stone-50 bg-stone-900 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" isTextArea={false} type="text" />
          <Input ref={descriptionRef} label="Description" isTextArea={true} />
          <Input
            ref={dueDateRef}
            label="Due Date"
            isTextArea={false}
            type="date"
          />
        </div>
      </div>
    </>
  );
}

export default NewProject;
