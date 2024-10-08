import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './login/Login';

function App() {

  // const user = useSelector((state) => state.user.user);
  const user = null;

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar></Sidebar>
          <Chat></Chat>
        </>) : (
        <>
        <Login />
        </>
      )}

    </div>
  );
}

export default App;
