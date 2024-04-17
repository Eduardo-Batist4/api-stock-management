const { DataTypes, Sequelize } = require("sequelize")
const sequelize = require("../config/config.json");

const Product = new Sequelize(sequelize).define("products", {
    name: DataTypes.STRING,
    input: DataTypes.INTEGER,
    output: DataTypes.INTEGER
});

module.exports = Product;