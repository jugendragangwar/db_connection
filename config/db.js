const mysql = require('mysql2/promise');

let pool = null;

const connectDB = async () => {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });

    const connection = await pool.getConnection();
    console.log('MySQL Database connected successfully');
    console.log(`Database: ${process.env.DB_NAME}`);
    connection.release();

    return pool;
  } catch (error) {
    console.error('MySQL connection error:', error.message);
    console.error('Stack:', error.stack);

    process.exit(1);
  }
};

const getPool = () => {
  if (!pool) {
    throw new Error('Database pool not initialized. Call connectDB() first.');
  }
  return pool;
};

const query = async (sql, params) => {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Query error:', error.message);
    throw error;
  }
};

const closePool = async () => {
  if (pool) {
    await pool.end();
    console.log('MySQL connection pool closed');
  }
};

module.exports = connectDB;
module.exports.getPool = getPool;
module.exports.query = query;
module.exports.closePool = closePool;
