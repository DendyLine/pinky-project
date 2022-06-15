import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { fetchChats, } from 'src/redux/dialogsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import 'src/styles/dialogs.css';


const Dialogs = () => {
  const dispatch = useAppDispatch();

  const {dialogsList} = useAppSelector(state => state.dialogs);

  useEffect(() => {
    dispatch(fetchChats());
  }, []);
  return (<div className='dialogs'>
      <div className='dialogs__ul'>
        <ul>
          {dialogsList.map(dialog => (
            <li key={dialog.chatId}>
            <Link to={String(dialog.chatId)}>
              <div className='dialogs__ul--block'>
                  <img src={dialog.imageURL} />
                  <span className='dialogs__block--name'>
                    {dialog.title}
                  </span>
                  <span className='dialogs__block--lastMessage'>
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