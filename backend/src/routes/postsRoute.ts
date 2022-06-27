import { Post } from '@prisma/client';
import Router from 'express';
import { db } from '../db';

const postRoute = Router();

postRoute.get('/posts', async (req, res) => {
  const posts = await db.post.findMany({orderBy: {id:'desc'}
  }) as Post[];
  res.json(posts);
});


postRoute.post('/posts', async (req, res) => {
  const post = await db.post.create({data: req.body});
  res.json(post);
});
postRoute.delete('/posts/:id', async (req, res) => {
  await db.post.delete({where: {id: Number(req.params.id)}});
  res.send(req.params.id)
});

export default postRoute;
