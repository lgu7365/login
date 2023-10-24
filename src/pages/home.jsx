import React from 'react';
import { fbaseauth } from '../fbase';

const home = ({isLoggedIn, userObj}) => {
    const handleLogout = async() => {
        try {
        await fbaseauth.signOut(); // Firebase 로그아웃
        } catch (error) {
        console.error('로그아웃 중 오류가 발생했습니다.', error);
        }
    }
    
    return (
        <div>
            <h2>welcome</h2>
            <button onClick={handleLogout}>Log-out</button>
        </div>
    );
};

export default home;