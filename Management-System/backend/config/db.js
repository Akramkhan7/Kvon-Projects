import mysql2, { createConnection } from 'mysql2';

const db = createConnection({
    host : "localhost",
    user : "root",
    password : "halloween",
    database : "task_management",
})

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

export default db;