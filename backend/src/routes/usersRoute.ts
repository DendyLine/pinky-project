import { User } from '@prisma/client';
import Router from 'express';
import { db } from '../db';

const usersRoute = Router();

usersRoute.get('/users', async (req, res) => {
  const searchString = req.url.split('?')[1] ?? '';
  const params = new URLSearchParams(searchString);
  const page = Number(params.get('page') ?? 1);

  const users = await db.user.findMany({
    orderBy: {id: 'asc'},
    take: 3,
    skip: (page - 1) * 3

  }) as User[];
  const total = await db.user.count();

  res.json({users, total});
});

usersRoute.get('/users/:id', async (req, res) => {
  const user = await db.user.findUnique({
    where: {id: Number(req.params.id)}
  });
  res.json(user);
});

usersRoute.patch('/users/:id/follow', async (req, res) => {
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
