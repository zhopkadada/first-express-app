const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("customer", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
}); // database name, username, password

module.exports = sequelize;
