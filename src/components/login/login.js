// import axios from 'axios';
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './login.css';

const Login = () => {
  // let history = useHistory();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
      <div>
        <h3>Login</h3>
      </div>
      <form className='create-form'>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type='text'
          placeholder='username'
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type='text'
          placeholder='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
