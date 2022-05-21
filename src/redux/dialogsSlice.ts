import { createSlice } from '@reduxjs/toolkit';

const dialogsSlice = createSlice({
  name: 'poniesDialogs',
  initialState: {
    dialogsList: [
      {id: 1, direction: '/scootaloo', name: 'Scootaloo', src: '/images/Scootaloo.jpg'},
      {id: 2, direction: '/spitfire', name: 'Spitfire', src: '/images/Spitfire.jpg'},
      {id: 3, direction: '/mom', name: 'Mom', src: '/images/Mom.jpg'},
      {id: 4, direction: '/soarin', name: 'Soarin', src: '/images/Soarin.jpg'}
    ],
    messages: [
      {id: 1, senderId: 5, text: 'hi rainbow dash!'},
      {id: 2, senderId: 1, text: 'hi sis'},
      {id: 3, senderId: 5, text: 'will you go on rodeo quest with me???'},
      {id: 4, senderId: 1, text: 'i dont know, i have some work in claudesdaile...'},
      {id: 5, senderId: 5, text: 'please! please!'},
    ],
    activeDialogId: 1
  },
  reducers: {
    sendMessage(state, action: {type: string, payload: {text: string, senderId: number}}) {
      const newId = state.messages[state.messages.length - 1].id + 1;
      state.messages.push({id: newId, senderId: action.payload.senderId, text: action.payload.text});
    }
  }
});

export const {sendMessage} = dialogsSlice.actions;

export default dialogsSlice.reducer;