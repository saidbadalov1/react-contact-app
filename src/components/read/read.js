import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './read.css';
import { Link, useHistory } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`https://631f1b8722cefb1edc430414.mockapi.io/crud`)
      .then((getData) => {
        setData(getData.data);
      });
  }, []);

  const pushDataToLocalStorage = (id, name, surname) => {
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Surname', surname);
    history.push('/update');
  };

  const getData = () => {
    axios
      .get(`https://631f1b8722cefb1edc430414.mockapi.io/crud/`)
      .then((getData) => {
        setData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://631f1b8722cefb1edc430414.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <div>
        <h3>Users</h3>
      </div>
      {data.map((dat) => (
        <div key={dat.id} className='user-list'>
          <div className='user-info'>
            <span>Name - {dat.name}</span>
            <span>Surname - {dat.surname}</span>
          </div>
          <button
            onClick={() =>
              pushDataToLocalStorage(dat.id, dat.name, dat.surname)
            }
          >
            update
          </button>
          <button onClick={() => onDelete(dat.id)}>delete</button>
        </div>
      ))}
      <Link to='/'>Create new user</Link>
    </div>
  );
};

export default Read;
