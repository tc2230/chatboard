// const db = require("./models");  

// async function syncDatabase() {
//     try {
//         await db.sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         await db.sequelize.sync({ force: true });
//         console.log('Drop and Resync Database with { force: true }');
//     } catch (err) {
//         console.error(err);
//     }
// }

// syncDatabase();

const db = require("./app/models");  
console.log(123123123);
db.sequelize.sync({ force: true }).then(() => {
    console.log(45645646);
    console.log('Drop and Resync Database with { force: true }');
    // initial();  // 産生資料表後，呼叫 initial function 為 roles table 新增三筆初始資料
}).catch((err) => {
    console.log(789789789);
    console.log(err);
});

// const Sequelize = require("sequelize");
// const config = require("./config/db.config.js");
// const sequelize = new Sequelize(                    // 由資料庫連結設定檔的設定值來備置 Sequelize
//   config.DB,
//   config.USER,
//   config.PASSWORD,
//   {
//     host: config.HOST,
//     dialect: config.dialect,
//     operatorsAliases: false,
//     pool: {
//       max: config.pool.max,
//       min: config.pool.min,
//       acquire: config.pool.acquire,
//       idle: config.pool.idle
//     }
//   }
// );


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// const sequelize = new Sequelize('web', 'postgres', 'postgres', {
//     host: '192.168.80.3',
//     dialect: 'postgres'
// });
// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// async function end(s) {
//     await s.close();
//     console.log('closed.');
// }

// end(sequelize);
// process.exit();