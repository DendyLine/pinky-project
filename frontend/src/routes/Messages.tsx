import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMessages, sendMessage } from 'src/redux/dialogsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import s from 'src/styles/dialogs.module.css';

const Messages = () => {
  const dispatch = useAppDispatch();
  const [newMessage, setNewMessage] = useState('');
  const params = useParams();
  const chatId = Number(params.chatId);
  const {messages} = useAppSelector(state => state.dialogs);
  const currentUserId = useAppSelector(state => state.profile.currentUser.id);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMessages(chatId!));
  }, []);

  let onSend = () => {
    dispatch(sendMessage({chatId, senderId: currentUserId, text: newMessage}));
    setNewMessage('');
  };

  return (
    <div className={s.dialogs}>
      <button onClick={() => navigate('/dialogs')}>back</button>
      <ul className={s.messages}>
        {messages.map(message => (
          <li key={message.id} className={message.senderId === currentUserId ? s.me : ''}>

            {message.text}</li>
        ))}
      </ul>
      <div>
        <div>
          <textarea value={newMessage} onChange={e => setNewMessage(e.target.value)} />
          <button onClick={onSend}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;