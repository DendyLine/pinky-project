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
}
export interface IMessage{
  id: number
  chatId: number
  senderId: number
  text: string
}
