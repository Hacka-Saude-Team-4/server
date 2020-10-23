import 'reflect-metadata';
import app from './app';
import './database';

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
// import { User } from './entity/User';

// (async (connection) => {
