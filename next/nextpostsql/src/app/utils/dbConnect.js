import { Pool } from "pg";

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "81708",
    dialect: "postgres",
    port: 5432,
  });

export default async function dbConnect(){
    await pool.connect((err, client, release) => {
        if (err) {
          return console.error("Error in connection", err.stack);
        }
        client.query("SELECT NOW()", (err, result) => {
          release();
          if (err) {
            return console.error("Error executing query", err.stack);
          }
          console.log("Connected to Database.");
        });
      });
}
