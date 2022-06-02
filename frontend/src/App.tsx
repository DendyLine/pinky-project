import './App.css';
import Header from './components/Header/Header';
import Nav from './components/SideBar/Nav';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React from 'react';
import Users from './components/Users/Users';
import Messages from './components/Dialogs/Messages';

const App = () => {

  return (
    <div className='center'>
      <div className='App'>
        <Header />
        <div className='lowContent'>
          <Nav />
          <div className='changeContent'>
            <Routes>
              <Route
                path='/profile'
                element={<Profile />}
              />
              <Route path='/dialogs' element={<Dialogs />} />
              <Route path='/dialogs/:chatId' element={<Messages />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
