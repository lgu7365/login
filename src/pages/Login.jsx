import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직을 여기에 추가
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form'>
        <div className='form-group'>
          <label className='label' htmlFor="username">Username:</label>
          <input
            className='input'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='label' htmlFor="password">Password:</label>
          <input
            className='input'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='button' type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;