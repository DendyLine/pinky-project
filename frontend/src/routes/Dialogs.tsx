import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { fetchChats, } from 'src/redux/dialogsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import s from 'src/styles/dialogs.module.css';


const Dialogs = () => {
  const dispatch = useAppDispatch();

  const {dialogsList} = useAppSelector(state => state.dialogs);

  useEffect(() => {
    dispatch(fetchChats());
  }, []);
  return (<div className={s.dialogs}>
      <div className={s.people}>
        <ul>
          {dialogsList.map(dialog => (
            <li key={dialog.chatId}>
            <Link to={String(dialog.chatId)}>
              <div className={s.oneChat}>
                  <img src={dialog.imageURL} />
                  <span className={s.name}>
                    {dialog.title}
                  </span>
                  <span className={s.lastMessage}>
                    {dialog.lastMessage?.text}
                  </span>

              </div>
            </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;