import React, { useState } from 'react';
import { auth } from '../fbase';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sign, setSign] = useState(false);

  const signInBtn = document.getElementById("signIn");
  const signUpBtn = document.getElementById("signUp");
  const container = document.querySelector(".container");

  const ClickLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const Onchangeinput = (e) => {
    setUsername(e.value);
    console.log(username)
  }

  const handlesign = () => {
    setSign(!sign);
  }

  return (
    <div className={`container ${sign ? 'right-panel-active' : ''}`}>
      <div className="container__form container--signup">
        <form action="#" className="form" id="form1">
          <h2 className="form__title">Sign Up</h2>
          <input type="text" placeholder="User" className="input" />
          <input type="email" placeholder="Email" className="input" value={username} onChange={Onchangeinput} />
          <input type="password" placeholder="Password" className="input" value={password} />
          <button className="btn">Sign Up</button>
        </form>
      </div>

      <div className="container__form container--signin">
        <form action="#" className="form" id="form2">
          <h2 className="form__title">Sign In</h2>
          <input type="email" placeholder="Email" className="input" value={username} onChange={Onchangeinput} />
          <input type="password" placeholder="Password" className="input" value={password} />
          <a href="#" className="link">Forgot your password?</a>
          <button className="btn">Sign In</button>
        </form>
      </div>

      <div className="container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="btn" id="signIn" onClick={handlesign}>Sign In</button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="btn" id="signUp" onClick={handlesign}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;