module.exports = {
//  HOST: 'host.docker.internal', // Host Name
  HOST: 'postgres-server',
  PORT: 5432,
  USER: 'postgres', // User Name
  PASSWORD: 'postgres', // Password
  DB: 'chatboard', // Database Name
  dialect: 'postgres', // database type
  pool: {
    max: 5, //　max connection count
    min: 0,
    acquire: 30000, //　connection timeout(ms)
    idle: 10000, //　idle time(ms)
  },
};
