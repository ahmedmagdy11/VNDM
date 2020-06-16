const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.urlencoded({ extended: false }));




mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
  }).connect(() => {
    app.listen(3000, () => {
      console.log(`listening on port ${3000}`);
    });
  });

