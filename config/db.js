const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Devi&#2025$#",
    port: 5432
});

pool.on("connect", () => {
    console.log("✅ PostgreSQL Connected");
});

module.exports = pool;