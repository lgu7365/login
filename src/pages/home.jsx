import React, { useState } from 'react';
import { fbaseauth } from '../fbase';

const Home = ({isLoggedIn, userObj}) => {
  const [chats, setChats] = useState();
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
    <div className="container">
      <div className="inbox">
        <aside>
          <ul>
            {chats.map((chat) => (
              <li key={chat.id} onClick={() => handleChatClick(chat.id)}>
                <img className="avatar" src={chat.avatar} alt="User Avatar" />
                <p className="username">{chat.username}</p>
              </li>
            ))}
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
    </div>
  );
};

export default Home;