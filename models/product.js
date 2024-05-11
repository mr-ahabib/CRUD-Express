const { DataTypes } = require('sequelize');
const db = require('../db');

const Products = db.define('ProductList', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
    allowNull: false,
      },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Products;
