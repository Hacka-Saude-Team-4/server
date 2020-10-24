import 'reflect-metadata';
import app from './app';
import './database';

const PORT = process.env.PORT;

app.listen(PORT, () =>
	console.log(`hacka-saude server is running on port ${PORT}`)
);
