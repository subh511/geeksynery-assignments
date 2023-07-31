import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && credentials.name === storedUser.name && credentials.password === storedUser.password) {
      history.push('/movies');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={credentials.name} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} />
      </div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
