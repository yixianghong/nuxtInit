const { query } = require('../../config/async-db')

// Select
async function getSomeone({pid}) {
    let sql = `SELECT * FROM xxx WHERE id = ?`
    let values = [pid]
    const res = await query(sql, values)
    const data = JSON.parse(JSON.stringify(res))
    return data
}

module.exports = {
    getSomeone
}