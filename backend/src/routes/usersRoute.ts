import { User } from '@prisma/client';
import Router from 'express';
import { db } from '../db';

const usersRoute = Router();

usersRoute.get('/', async (req, res) => {
  const users = await db.user.findMany({orderBy: {id: 'asc'}}) as User[];
  res.json(users);
});

usersRoute.patch('/:id/follow', async (req, res) => {
  const user = await db.user.findUnique({where: {id: Number(req.params.id)}});
  if (!user) {
    return res.status(404).send('User with such id does not exist');
  }
  const updatedUser = await db.user.update({
    where: {id: Number(req.params.id)},
    data: {followed: !user.followed}
  });
  res.json(updatedUser);
});
usersRoute.delete('/:id', async (req, res) => {
  await db.user.delete({where: {id: Number(req.params.id)}});
  res.send('user deleted');
});


export default usersRoute;
