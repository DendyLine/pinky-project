import React from "react";
import s from "../Profile.module.css";


const AvatarDescription = () => {
  return (
    <div>
    <div className={s.back}>
      <img src="https://media.rawg.io/media/screenshots/38a/38a834019a8740cd002fe872c07f782d.JPG" alt=""/>
    </div>
  <div className={s.avatar}>
    <img src="https://i.pinimg.com/originals/48/87/e9/4887e9f60f9bb30847baf69d7cc99863.jpg" alt="avatar"/> description
  </div>
    </div>
)
}

export default AvatarDescription