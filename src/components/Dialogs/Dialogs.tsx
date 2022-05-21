import React from "react";
import s from "./dialogs.module.css"
import {NavLink} from "react-router-dom";
import Scootaloo from "./Scootaloo/Scootaloo";

interface IDialogsProps{
  dialogData: {direction: string, name: string, src: string}[]
}

const Dialogs = (props: IDialogsProps) => {
  return (<div className={s.dialogs}>
      <div className={s.people}>
        <ul>
          {props.dialogData.map(dialog => (
            <li key={dialog.direction}>
              <NavLink to={dialog.direction}>
                <img src={dialog.src} /> {dialog.name}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
      <hr />
      <div className={s.messages}>
        <Scootaloo />
      </div>
    </div>
  )
}

export default Dialogs