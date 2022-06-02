import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { IChats, IMessage } from '../types';


export const fetchChats = createAsyncThunk('chats/all', async () => {
  return api.get('/chats') as Promise<IChats[]>;
});

export const fetchMessages = createAsyncThunk('message/all', async (chatId: string) => {
  return api.get(`/chats/${chatId}/messages`) as Promise<IMessage[]>;
});


const dialogsSlice = createSlice({
    name: 'poniesDialogs',
    initialState: {
      dialogsList: [
        // {id: 1, direction: '/scootaloo', name: 'Scootaloo', src: '/images/Scootaloo.jpg'},
        // {id: 2, direction: '/spitfire', name: 'Spitfire', src: '/images/Spitfire.jpg'},
        // {id: 3, direction: '/mom', name: 'Mom', src: '/images/Mom.jpg'},
        // {id: 4, direction: '/soarin', name: 'Soarin', src: '/images/Soarin.jpg'}
      ] as IChats[],
      messages: [] as IMessage[],
      activeDialogId: 1
    },
    reducers: {
      sendMessage(state, action: {type: string, payload: {text: string, senderId: number}}) {
        const newId = state.messages[state.messages.length - 1].id + 1;
        state.messages.push({
          id: newId, senderId: action.payload.senderId, text: action.payload.text,
          chatId: 1
        });
      }
    },
    extraReducers: ({addCase}) => {
      addCase(fetchChats.fulfilled, (state, action) => {
        state.dialogsList = action.payload;
      });
      addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
      });

    }
  }
);

export const {sendMessage} = dialogsSlice.actions;

export default dialogsSlice.reducer;