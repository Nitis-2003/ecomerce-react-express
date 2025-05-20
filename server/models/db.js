import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});

// ฟังก์ชันทดสอบการเชื่อมต่อ
async function testConnection() {
  try {
    // ทดสอบการเชื่อมต่อ
    const [result] = await pool.query('SELECT 1');
    console.log('Database connection successful!');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

// ทดสอบการเชื่อมต่อ
testConnection()

export default pool