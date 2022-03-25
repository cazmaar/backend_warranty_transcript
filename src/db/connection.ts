import pg from "pg";
 import { connectionString  } from "../config.js";
const pool = new pg.Pool( {
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default function query(text:string , params:(string|number) []) {
  return pool.query(text, params);
}
