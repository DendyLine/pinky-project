import bcrypt from 'bcryptjs';
import { Router } from 'express';
import { db } from '../db';

const authRoute = Router();

authRoute.get('/auth/me', async (req, res) => {
  // @ts-ignore
  const userId = req.session.userId;
  if(!userId)
    return res.send(null)
  const user = await db.user.findUnique({where: {id: userId}})
  res.json(user)
});

authRoute.post('/auth/sign-in', async (req, res) => {
  const user = await db.user.findFirst({where: {username: req.body.username}});
  if (!user) return res.status(404).send('wrong username or password');
  const matches = await bcrypt.compare(req.body.password, user.password);
  if (!matches) return res.status(404).send('wrong username or password');
  // @ts-ignore
  delete user.password;
  // @ts-ignore
  req.session.userId = user.id;
  return res.json(user);
});

authRoute.post('/auth/sign-up', async (req, res) => {
  const user = await db.user.findFirst({where: {username: req.body.username}});
  if (user) return res.status(409).send('user with this username already exist');
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const newUser = await db.user.create({data: req.body});
  // @ts-ignore
  delete newUser.password;
  // @ts-ignore
  req.session.userId = newUser.id;
  res.json(newUser);

});

authRoute.post('/auth/sign-out', async (req, res) => {

// @ts-ignore
  req.session.destroy()
  res.send('you have been successfully sign out')
});

export default authRoute;