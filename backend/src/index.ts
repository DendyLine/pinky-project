import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoute from './routes/authRoute';
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

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000
  },
  resave: true
}));
app.use(cookieParser());

app.use(usersRoute);
app.use(chatsRoute);
app.use(postsRoute);
app.use(profileRoute);
app.use(newsRoute);
app.use(authRoute);

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});


