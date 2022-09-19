import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './create.css';

const Create = () => {
  let history = useHistory();

  const sendDataToApi = (e) => {
    e.preventDefault();
    axios
      .post('https://631f1b8722cefb1edc430414.mockapi.io/crud', {
        name,
        surname,
      })
      .then(() => {
        history.push('/read');
      });
  };

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <div>
      <div>
        <h3>Create User</h3>
      </div>
      <form
        onSubmit={sendDataToApi}
        className='create-form'
        style={{ marginBottom: '14px' }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Name'
        />
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type='text'
          placeholder='Surname'
        />
        <button type='submit'>Submit</button>
      </form>
      <Link to='/read'>See all users</Link>
    </div>
  );
};

export default Create;
