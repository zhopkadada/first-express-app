const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("images", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
}); // database name, username, password

module.exports = sequelize;
