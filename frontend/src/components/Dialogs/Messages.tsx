import React, { useEffect, useState } from 'react';
import s from './dialogs.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchMessages, sendMessage } from '../../redux/dialogsSlice';
import { useParams } from 'react-router-dom';


const Dialogs = () => {
  const dispatch = useAppDispatch();
  const [newMessage, setNewMessage] = useState('');
  const {chatId} = useParams();
  const {dialogsList, messages} = useAppSelector(state => state.dialogs);
  const currentUserId = useAppSelector(state => state.profile.id);

  useEffect(() => {
    dispatch(fetchMessages(chatId!));
  }, []);

  let onSend = () => {
    dispatch(sendMessage({senderId: currentUserId, text: newMessage}));
    setNewMessage('');
  };

  return (<div className={s.dialogs}>
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
  );
};

export default Dialogs;