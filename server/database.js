const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function fetchData() {
    const { rows } = await pool.query('SELECT * FROM messages WHERE sent = FALSE');
    return rows;
}

async function markAsSent(id) {
    await pool.query('UPDATE messages SET sent = TRUE WHERE id = $1', [id]);
}

module.exports = { fetchData, markAsSent };
