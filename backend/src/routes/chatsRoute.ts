import { User } from '@prisma/client';
import Router from 'express';
import { db } from '../db';

const chatsRoute = Router();

const getAnotherId = (id: number, arr: number[]) => id === arr[0] ? arr[1] : arr[0];

const currentUserId = 5;

chatsRoute.get('/chats', async (req, res) => {
  const chats = await db.chat.findMany({
    include: {messages:{take: 1, orderBy: {createdAt: 'desc'}}},
    orderBy: {id: 'asc'}
  });
  const chatsData = await Promise.all(chats.map(async chat => {
    const anotherParticipantId = getAnotherId(currentUserId, chat.participants);
    const user = await db.user.findUnique({where: {id: anotherParticipantId}}) as User;
    return {chatId: chat.id, imageURL: user.avaUrl, title: user.username, lastMessage: chat.messages[0]};
  }));
  res.json(chatsData);
});

chatsRoute.get('/chats/:chatId/messages', async (req, res) => {
  const messages = await db.message.findMany({where: {chatId: Number(req.params.chatId)}});
  res.json(messages);
});

chatsRoute.post('/chats/:chatId/messages', async (req, res) => {
  const message = await db.message.create({data: req.body});
  res.json(message);
});


export default chatsRoute;
