import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import profileReducer from './profileSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import dialogsReducer from './dialogsSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
  }
});
type TAppDispatch = typeof store.dispatch
type TAppState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;