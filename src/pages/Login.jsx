import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sign, setSign] = useState(false);
  const [err, setErr] = useState(false);

  const signInBtn = document.getElementById("signIn");
  const signUpBtn = document.getElementById("signUp");
  const container = document.querySelector(".container");

  const SubmitLogin = async (e) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(email, password);
      console.log("로그인 성공!");
    } catch (error) {
      console.error("로그인 실패: ", error.message);
    }
  };

  const OnchangeinputID = (e) => {
    setEmail(e.target.value);
  }

  const OnchangeinputPW = (e) => {
    setPassword(e.target.value);
  }

  const handlesign = () => {
    setSign(!sign);
    setEmail('');
    setPassword('');
  }

  return (
    <div className={`container ${sign ? 'right-panel-active' : ''}`}>
      <div className="container__form container--signup">
        <form action="#" className="form" id="form1">
          <h2 className="form__title">Sign Up</h2>
          <input type="text" placeholder="User" className="input" />
          <input type="email" placeholder="Email" className="input" value={email} onChange={OnchangeinputID} />
          <input type="password" placeholder="Password" className="input" value={password} onChange={OnchangeinputPW} />
          <button className="btn">Sign Up</button>
        </form>
      </div>

      <div className="container__form container--signin">
        <form action="#" className="form" id="form2" onSubmit={SubmitLogin}>
          <h2 className="form__title">Sign In</h2>
          <input type="email" placeholder="Email" className="input" value={email} onChange={OnchangeinputID} />
          <input type="password" placeholder="Password" className="input" value={password} onChange={OnchangeinputPW} />
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