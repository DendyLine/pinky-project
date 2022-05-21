import React, { RefObject } from 'react';
import s from './scootaloo.module.css';

const Scootaloo = () => {
  let newMessage = React.createRef() as RefObject<HTMLTextAreaElement>;
  let send = () => {
    window.alert(newMessage.current?.value);
  };


  return (
    <div className={s.scootaloo}>
      <div className={s.you}>
        hi rainbow dash!
      </div>
      <div className={s.me}>
        hi sis
      </div>
      <div className={s.you}>
        will you go on rodeo quest with me???
      </div>
      <div className={s.me}>
        i dont know, i have some work in claudesdaile...
      </div>
      <div className={s.you}>
        please! please!
      </div>
      <textarea ref={newMessage}></textarea>
      <button onClick={send}>send</button>
    </div>
  );

};
export default Scootaloo;