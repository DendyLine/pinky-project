import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import dialogsReducer from './dialogsSlice';
import postsReducer from './postsSlice';
import profileReducer from './profileSlice';
import usersReducer from './usersSlice';
import newsReducer from './newsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    news: newsReducer
  }
});
type TAppDispatch = typeof store.dispatch
export type TAppState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
