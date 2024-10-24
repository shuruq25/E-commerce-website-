import React from 'react';
import './form.css';

const Form = ({ setUserInput }) => {
  function onChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          type='text'
          onChange={onChangeHandler}
          className="form-input"
          placeholder="Search for a product..."
        />
      </form>
    </div>
  );
};

export default Form;
