export interface IUser {
  id: number,
  username: string,
  avaUrl: string,
  country: string,
  town: string,
  bio: string
  followed: boolean
}

export interface IChats {
  chatId: number;
  imageURL: string;
  title: string;
  lastMessage: IMessage;
}

export interface IMessage {
  id: number;
  chatId: number;
  senderId: number;
  text: string;
}

export interface IPosts {
  id: number;
  like: number;
  message: string;
  userId: number;
  user: string;
  imgUrl: string
}
