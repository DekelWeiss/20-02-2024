// CustomForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './CustomForm.css'



const CustomForm = ({ formStructure = [], postId, initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData || {});
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(initialFormData || {});
  }, [initialFormData]);

  const handleInputChange = (fieldId, value) => {
    setFormData({
      ...formData,
      [fieldId]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postId === undefined) {
      dispatch({ type: 'ADD_POST', payload: { formData } });
    } else {
      dispatch({ type: 'UPDATE_POST', payload: { postId, updatedData: formData } });
    }
    setFormData({}); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {formStructure.map((field, index) => {
        const { id, type, label, options } = field;
        let inputField;

        switch (type) {
          case 'checkbox':
            inputField = (
              <input
                key={index}
                type="checkbox"
                checked={formData[id] || false}
                onChange={(e) => handleInputChange(id, e.target.checked)}
              />
            );
            break;
          case 'select':
            inputField = (
              <select
                key={index}
                value={formData[id] || ''}
                onChange={(e) => handleInputChange(id, e.target.value)}
              >
                {options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            );
            break;
          case 'input':
          default:
            inputField = (
              <input
                key={index}
                type="text"
                value={formData[id] || ''}
                onChange={(e) => handleInputChange(id, e.target.value)}
              />
            );
        }

        return (
          <div key={id}>
            <label>{label}</label>
            {inputField}
          </div>
        );
      })}
      <button type="submit">{postId === undefined ? 'Add Post' : 'Update Post'}</button>
    </form>
  );
};

export default CustomForm;
