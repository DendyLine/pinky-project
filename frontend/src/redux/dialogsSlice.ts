import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { IChats, IMessage } from '../types';




export const fetchChats = createAsyncThunk('chats/all', async () => {
  return api.get('/chats') as Promise<IChats[]>;
});

export const fetchMessages = createAsyncThunk('message/all', async (chatId: string | number) => {
  return api.get(`/chats/${chatId}/messages`) as Promise<IMessage[]>;
});

export const sendMessage = createAsyncThunk('message/send', async (message: Omit<IMessage, 'id'>) => {
  return api.post(`/chats/${message.chatId}/messages`, message) as Promise<IMessage>;
});


const dialogsSlice = createSlice({
    name: 'poniesDialogs',
    initialState: {
      dialogsList: [] as IChats[],
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


export default dialogsSlice.reducer;