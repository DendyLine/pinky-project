import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import usersRoute from './routes/usersRoute';
import chatsRoute from './routes/chatsRoute';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());

app.use('/users', usersRoute);
app.use(chatsRoute);

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});


