require("dotenv").config();

module.exports = {
    dialect: "postgres",
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST 
}
