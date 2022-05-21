import React from 'react';
import s from './Profile.module.css';
import NewPost from './newPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import AvatarDescription from './AvatarDescription/AvatarDescription';

interface IProfileProps {
  addPost: (postMessage: string) => void;
  newTextPost: string;
  postsData: {like: number, message: string}[]
  dispatch:(action: any)=> void
}

const Profile = (props: IProfileProps) => {

  return <div className={s.profile}>
    <AvatarDescription />
    <NewPost dispatch={props.dispatch} newTextPost={props.newTextPost} addPost={props.addPost} />
    <MyPosts postsData={props.postsData} />
  </div>;
};
export default Profile;