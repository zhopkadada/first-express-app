const sequelize = require("../productDB");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  actionStatus: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const TypeBrand = sequelize.define("typeBrand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Brand.hasMany(Product);
Type.hasMany(Product);
Product.belongsTo(Brand);
Product.belongsTo(Type);

Brand.belongsToMany(Type, { through: TypeBrand });
Type.belongsToMany(Brand, { through: TypeBrand });

module.exports = {
  Product,
  Brand,
  Type,
  TypeBrand,
};
