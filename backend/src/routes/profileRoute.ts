import Router from 'express';

const profileRoute = Router();
// debugger
// profileRoute.get('/users/:id', async (req, res) => {
//   const user = await db.user.findUnique({where: {id:Number(req.params.id)}
//   });
//   res.json(user);
// });

export default profileRoute;