const { pool } =   require('../model/connection')

module.exports = async (req, res) => {
    const { title, startDay, endDay, startTime, endTime} = req.body
    const query = `INSERT INTO schedule_hours(title, start_day, end_day, start_time, end_time) VALUES('${title}', '${startDay}', '${endDay}', '${startTime}', '${endTime}')`
    pool.query(query,(err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Schedule hours created successfully' })
        }
    })
}