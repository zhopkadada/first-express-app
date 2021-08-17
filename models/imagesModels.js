const sequelize = require('../databases/imagesDB')
const {DataTypes} = require('sequelize')

const CustomerImage = sequelize.define('customer_image', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true}
})

const ProductImage = sequelize.define('product_image', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true}
})

module.exports = {CustomerImage, ProductImage}