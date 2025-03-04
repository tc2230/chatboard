const config = require("../config/db.config.js");   // database configuration
const Sequelize = require("sequelize");

// initialize sequelize client
const sequelize = new Sequelize( 
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT, 
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

// init db
const db = {};

// utils
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// add models
db.message = require("./message.model.js")(sequelize, Sequelize);
db.message.removeAttribute('id');

module.exports = db;