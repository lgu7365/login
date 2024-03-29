import React, { useState } from 'react';
import { fbaseauth, signInWithEmailAndPassword, createUserWithEmailAndPassword, storage, db } from '../fbase';
import GithubButton from '../components/githubbtn';
import { sendPasswordResetEmail } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [sign, setSign] = useState(false);
  const [err, setErr] = useState('');
  const [file, setFile] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const signInBtn = document.getElementById("signIn");
  const signUpBtn = document.getElementById("signUp");
  const container = document.querySelector(".container");

  const SubmitLogin = async (e) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(fbaseauth, email, password);
      
    } catch (error) {
      setErr('입력하신 이메일 또는 비밀번호가 일치하지 않습니다')
    }
  };

  const SubmitSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(fbaseauth, email, password);
      const user = userCredential.user;
      let downloadUrl;
      /*
      await user.updateProfile({
        displayName: name,
      });
      */
      if(file) {
        const storageRef = ref(storage, `profile_images/${user.uid}/${file.name}`);;
        const result = await uploadBytes(storageRef, file);
        downloadUrl = await getDownloadURL(result.ref);

        console.log('Profile image uploaded:', downloadUrl);
      }

      const doc = await addDoc(collection(db, "users"), {
        profile: downloadUrl,
        joinDt: Date.now(),
        username: user.displayName || "Anonymous",
        userId: user.uid
      });
    } catch (error) {
      setErr('회원 가입 중 오류가 있습니다.')
    }
  }

  const Clicksearchpw = async (e) => {
    try {
      await sendPasswordResetEmail(fbaseauth, email); // Firebase 비밀번호 재설정 이메일 보내기
      setIsEmailSent(true);
    } catch (error) {
      console.error('비밀번호 재설정 이메일 보내기 중 오류가 발생했습니다.', error);
    }
  }

  const OnchangeinputNAME = (e) => {
    setName(e.target.value);
  }

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
    setErr('');
  }

  const onFileChange = (e) => {
    const { files } = e.target;
    if(files && files.length === 1){
      setFile(files[0]);
    }
  }

  return (
    <div className={`container ${sign ? 'right-panel-active' : ''}`}>
      <div className="container__form container--signup">
        <form action="#" className="form" id="form1" onSubmit={SubmitSignup}>
          <h2 className="form__title">Sign Up</h2>
          <input type="text" placeholder="User" className="input" value={name} onChange={OnchangeinputNAME} />
          <input type="email" placeholder="Email" className="input" value={email} onChange={OnchangeinputID} />
          <input type="password" placeholder="Password" className="input" value={password} onChange={OnchangeinputPW} />
          <div className="errorcode">{err}</div>
          <label htmlFor="file">{file ? "Photo added ✅":"Add photo"}</label>
          <input onChange={onFileChange} type="file" id="file" accept="image/" />
          <GithubButton />
          <button className="btn">Sign Up</button>
        </form>
      </div>

      <div className="container__form container--signin">
        <form action="#" className="form" id="form2" onSubmit={SubmitLogin}>
          <h2 className="form__title">Sign In</h2>
          <input type="email" placeholder="Email" className="input" value={email} onChange={OnchangeinputID} />
          <input type="password" placeholder="Password" className="input" value={password} onChange={OnchangeinputPW} />
          <div className="errorcode">{err}</div>
          <a href="#" className="link" onClick={Clicksearchpw}>Forgot your password?</a>
          <GithubButton />
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