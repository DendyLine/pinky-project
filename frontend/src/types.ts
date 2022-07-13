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

export interface IMessage extends INewMessage{
  id: number;
  sender: Pick<IUser, 'username' | 'avaUrl'>;
}

export interface IPosts {
  id: number;
  like: number;
  message: string;
  userId: number;
  user: string;
  imgUrl: string;
}

export interface INews {
  id: number;
  userId: number;
  user: IUser;
  text: string;
  like: number;
  imgUrl: string;
}

export interface IUserCreate {
  username: string;
  password: string;
  country?: string;
  town?: string;
  avaUrl?: string;
}

export interface INewMessage{
  chatId: number;
  senderId: number;
  text: string;
}