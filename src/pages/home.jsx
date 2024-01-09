import React, { useState } from 'react';
import { fbaseauth } from '../fbase';

const Home = ({isLoggedIn, userObj}) => {
  const [chats, setChats] = useState([]);
  //const [selectedChat, setSelectedChat] = useState(null);
  //const [text, setText] = useState('');
  
  const handleLogout = async() => {
    try {
      await fbaseauth.signOut(); // Firebase 로그아웃
    } catch (error) {
      console.error('로그아웃 중 오류가 발생했습니다.', error);
    }
  }

  const handleChatClick = (chatId) => {
    //setSelectedChat(chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to send a message
  };

  return (
    <div className="containerh">
      <div className="inbox">
        <aside>
          <ul>
            
          </ul>
        </aside>

        <main>
          

          <footer>
            <form>
              <input
                type="text"
                placeholder="Enter a message"
                
              />
              <input type="submit" value="Send" />
            </form>
          </footer>
        </main>
      </div>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default Home;