import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import chatsRoute from './routes/chatsRoute';
import newsRoute from './routes/newsRoute';
import postsRoute from './routes/postsRoute';
import profileRoute from './routes/profileRoute';
import usersRoute from './routes/usersRoute';


const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());

app.use(usersRoute);
app.use(chatsRoute);
app.use(postsRoute);
app.use(profileRoute);
app.use(newsRoute)

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});


