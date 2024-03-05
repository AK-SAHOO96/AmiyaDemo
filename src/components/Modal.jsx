import React, { useState } from 'react'
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue || {
    page: "",
    description: "",
    status: "live"
  });

  const [errors, setErrors] = useState("")

  // const handlePageChange = (e) => {
  //   setFormState({
  //     ...formState,
  //     page: e.target.value,
  //   })
  // }


  // const handleDescriptionChange = (e) => {
  //   setFormState({
  //     ...formState,
  //     description: e.target.value,
  //   })
  // }

  const validateForm = () => {
    if (
      formState.page && formState.description && formState.status) {
      setErrors("")
      return true;
    }
    else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key)
        }
      }

      setErrors(errorFields.join(", "));
      return false;
    }

  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();

  }


  return (
    <div className='modal-cointainer'
      onClick={(e) => {
        if (e.target.className === "modal-cointainer")
          closeModal();
      }}>
      <div className='modal'>
        <form>
          <div className='form-group'>
            <label htmlFor='page'>Page</label>
            <input name='page' value={formState.page} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>description</label>
            <textarea name='description' value={formState.description} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='status'>status</label>
            <select name='status' value={formState.status} onChange={handleChange}>
              <option value="live">Live</option>
              <option value="draf">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
