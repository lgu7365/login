import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
/*
  const handleLogin = () => {
    // 로그인 로직을 여기에 추가
    console.log(`Username: ${username}, Password: ${password}`);
  };
*/
  return (
    <div className="container right-panel-active">
      <div className="container__form container--signup">
        <form action="#" className="form" id="form1">
          <h2 className="form__title">Sign Up</h2>
          <input type="text" placeholder="User" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button className="btn">Sign Up</button>
        </form>
      </div>

      <div className="container__form container--signin">
        <form action="#" className="form" id="form2">
          <h2 className="form__title">Sign In</h2>
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <a href="#" className="link">Forgot your password?</a>
          <button className="btn">Sign In</button>
        </form>
      </div>

      <div className="container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="btn" id="signIn">Sign In</button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="btn" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;