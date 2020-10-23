module.exports = {
	url: process.env.DATABASE_URL,
	type: 'postgres',
	synchronize: true,
	logging: false,
	entities: [process.env.ENTITIES_PATH],
	migrations: [process.env.MIGRATIONS_PATH],
	subscribers: ['src/subscriber/**/*.ts'],
	cli: {
		entitiesDir: 'src/entity',
		migrationsDir: 'src/migration',
		subscribersDir: 'src/subscriber',
	},
};
