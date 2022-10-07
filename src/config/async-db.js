const mysql = require('mysql')
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
})

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                // 執行 sql 腳本對資料庫進行讀寫
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()  // 結束會話
                })
            }
        })
    })
}

module.exports = { query }