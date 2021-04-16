require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
    user : process.env.PGUSER,
    host : process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

console.log('connexion réussie')

/**
 *
 * @param request
 * @param response
 */
const getItems = (request, response) => {
    pool.query('SELECT * FROM items',(error,results)=>{
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getItems,
}