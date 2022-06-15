import { News } from '@prisma/client';
import Router from 'express';
import { db } from '../db';

const newsRoute = Router();

newsRoute.get('/news', async (req, res) => {
  const searchString = req.url.split('?')[1] ?? '';
  const params = new URLSearchParams(searchString);
  const page = Number(params.get('page') ?? 1);

  const news = await db.news.findMany({
    orderBy: {createdAt: 'asc'},
    take: 3,
    skip: (page - 1) * 3
  }) as News[];
  const total = await db.news.count();

  res.json({news, total});
});
export default newsRoute;
