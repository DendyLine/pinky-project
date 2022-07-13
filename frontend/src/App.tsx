import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Dialogs from 'src/routes/Dialogs';
import Messages from 'src/routes/Messages';
import Music from 'src/routes/Music';
import News from 'src/routes/News';
import Profile from 'src/routes/Profile';
import Settings from 'src/routes/Settings';
import SignInPage from 'src/routes/Sign-in';
import SignUpPage from 'src/routes/Sign-up';
import Users from 'src/routes/Users';
import './App.css';


const App = () => {

  return (
    <div className='center'>
      <div className='App'>
        <Header />
        <div className='lowContent'>
          <Nav />
          <div className='changeContent'>
            <Routes>
              <Route path='/sign-up' element={<SignUpPage />} />
              <Route path='/sign-in' element={<SignInPage />} />
              <Route path='/profile/:id' element={<Profile />} />
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
