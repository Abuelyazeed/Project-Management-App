import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

function NewProject({ onAdd }) {
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

    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dueDateRef.current.value = '';
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Oopss ... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] pt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
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
