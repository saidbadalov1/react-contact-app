import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Update = () => {
  let history = useHistory();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [id, setId] = useState(null);

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios
      .put(`https://631f1b8722cefb1edc430414.mockapi.io/crud/${id}`, {
        name,
        surname,
      })
      .then(() => {
        history.push('/read');
      });
  };

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setSurname(localStorage.getItem('Surname'));
    setId(localStorage.getItem('ID'));
  }, []);

  return (
    <div>
      <div>
        <h3>Update Info</h3>
      </div>
      <form onSubmit={sendDataToAPI} className='create-form'>
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
    </div>
  );
};

export default Update;
