let store = {
  rerenderTree(store: any) {
    console.log(store);
  },
  _state: {

    newPostText: '',

    navMenu: [
      {direction: '/profile', name: 'Profile'},
      {direction: '/dialogs', name: 'messages'},
      {direction: '/news', name: 'news'},
      {direction: '/music', name: 'music'},
      {direction: '/settings', name: 'settings'}
    ],

    postsData: [
      {like: 10, message: 'Pinkie, you sure i need this?'},
      {like: 23, message: 'That\'s some kind of mail?'},
      {like: 55, message: 'look, i\'m so cool!'},
      {like: 3, message: 'hey Applejack, may i take more sidr?'},
      {like: 46, message: 'fast and furious!'}
    ],


    dialogData: [
      {direction: '/scootaloo', name: 'Scootaloo', src: '/images/Scootaloo.jpg'},
      {direction: '/spitfire', name: 'Spitfire', src: '/images/Spitfire.jpg'},
      {direction: '/mom', name: 'Mom', src: '/images/Mom.jpg'},
      {direction: '/soarin', name: 'Soarin', src: '/images/Soarin.jpg'}
    ],

    friendList: [
      {img: '/images/Applejack.webp', name: 'Applejack'},
      {img: '/images/Pinkie_Pie.webp', name: 'Pinkie Pie'},
      {img: '/images/Twilight.webp', name: 'Twilight'},
    ]
  },
  getState() {
    return this._state;
  },
  addPost(postMessage: string) {
    let addNewPost = {
      like: 0, message: postMessage
    };
    this._state.postsData.push(addNewPost);
    this.rerenderTree(this);
  },
  updatePostText(newText: string) {
    this._state.newPostText = newText;
    this.rerenderTree(this);
  },
  subscribe(observer: (store: any) => void) {
    this.rerenderTree = observer;
  }, dispatch(action: any) {
    if (action.type === 'GET-STATE') {
      return this._state;
    } else if (action.type === 'ADD-POST') {
      let addNewPost = {
        like: 0, message: this._state.newPostText
      };
      this._state.newPostText=""
      this._state.postsData.push(addNewPost);
      this.rerenderTree(this);
    } else if (action.type === 'UPDATE-POST-TEXT') {
      this._state.newPostText = action.newText;
      this.rerenderTree(this);
    } else if (action.type === 'SUBSCRIBE') {
      this.rerenderTree = action.observer;
    }
  }

};


export type TStore = typeof store
export type TState = ReturnType<typeof store.getState>
export default store;