import React, { useState } from 'react';
import s from './dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { sendMessage } from '../../redux/dialogsSlice';

interface IDialogsProps{
  dialogData: {direction: string, name: string, src: string}[]
}


const Dialogs = () => {
  const [newMessage, setNewMessage] = useState('');

  const {dialogsList, messages} = useAppSelector(state => state.dialogs);
  const currentUserId = useAppSelector(state => state.profile.id);

  const dispatch = useAppDispatch();

  let onSend = () => {
    dispatch(sendMessage({senderId: currentUserId, text: newMessage}));
    setNewMessage('');
  };

  return (<div className={s.dialogs}>
      <div className={s.people}>
        <ul>
          {dialogsList.map(dialog => (
            <li key={dialog.id}>
              <NavLink to={dialog.direction}>
                <img src={dialog.src} /> {dialog.name}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
      <div>
        <ul className={s.messages}>
          {messages.map(message => (
            <li key={message.id} className={message.senderId === currentUserId ? s.me : ''}>

              {message.text}</li>
          ))}
        </ul>
        <div>
          <textarea value={newMessage} onChange={e => setNewMessage(e.target.value)} />
          <button onClick={onSend}>send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs