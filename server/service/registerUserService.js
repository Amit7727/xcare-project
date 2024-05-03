const {pool} = require('../model/connection')

module.exports = async (req, res) => {
    const { firstName,lastName, email, password } = req.body
    const query = `INSERT INTO users(first_name,last_name, email, password) VALUES('${firstName}', '${lastName}', '${email}', '${password}')`
    await pool.query(query,(err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'User created successfully' })
    }
})   
}