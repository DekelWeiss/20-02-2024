// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CustomForm from './Components/CustomForm';
import FormDisplayComponent from './Components/FormDisplayComponent';

const formStructure = [
  {
    id: 'firstName',
    type: 'input',
    label: 'First Name',
  },
  {
    id: 'lastName',
    type: 'input',
    label: 'Last Name',
  },
  {
    id: 'age',
    type: 'input',
    label: 'Age',
  },
  {
    id: 'gender',
    type: 'select',
    label: 'Gender',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'isSubscribed',
    type: 'checkbox',
    label: 'Subscribe to newsletter',
  },
];

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Custom Form</h1>
        <CustomForm formStructure={formStructure} formData={store.getState().formData} />
        <FormDisplayComponent />
      </div>
    </Provider>
  );
};

export default App;