import React, { useEffect, useState } from 'react';
import s from './dialogs.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchChats,} from '../../redux/dialogsSlice';

import { Link } from 'react-router-dom';



const Dialogs = () => {
  const dispatch = useAppDispatch();
  const [newMessage, setNewMessage] = useState('');

  const {dialogsList, messages} = useAppSelector(state => state.dialogs);
  const currentUserId = useAppSelector(state => state.profile.id);

  useEffect(() => {
    dispatch(fetchChats());
  }, [])

  let onSend = () => {
    dispatch(sendMessage({senderId: currentUserId, text: newMessage}));
    setNewMessage('');
  };

  return (<div className={s.dialogs}>
      <div className={s.people}>
        <ul>
          {dialogsList.map(dialog => (
            <li key={dialog.chatId}>
              <Link to={String(dialog.chatId)}>
                <img src={dialog.imageURL} /> {dialog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;