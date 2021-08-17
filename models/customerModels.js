const sequelize = require("../customerDB");
const { DataTypes } = require("sequelize");
const { Product } = require("./productModels");

const Customer = sequelize.define("customer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING, allowNull: false, unique: true },
  address: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Cart = sequelize.define("cart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const CartProduct = sequelize.define("cart_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Customer.hasOne(Cart);
Cart.belongsTo(Customer);

Cart.hasMany(CartProduct);
CartProduct.belongsTo(Cart);

Product.hasMany(CartProduct);
CartProduct.belongsTo(Product);

module.exports = { Customer, Cart, CartProduct };
