module.exports = {
  type: 'sqlite',
  database: './src/database/database.sqlite',
  migrations: ['./src/database/migrations/**{.ts, .js}'],
  entities: ['./src/models/**{.ts, .js}'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
}