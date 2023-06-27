import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

const DB = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default DB;
