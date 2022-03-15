const mysql = require('mysql');
// 載入所有env環境變數
require('dotenv').config();
const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
})

dbConnection.connect((err) => {
    if (err) throw err;
    console.log("db connected!!")
})

module.exports = dbConnection 