import 'reflect-metadata';
import app from './app';
import './database';

app.listen(3000, () => console.log('server is running on port 3000'));

// import { User } from './entity/User';

// (async (connection) => {