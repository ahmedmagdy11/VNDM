const express = require("express");
const connection = require("./configs/database");
const router = require("./router/router")
const app = express();


app.use(express.static('views'))
app.use(express.urlencoded({ extended: false }));
app.use(router)


connection.connect(() => {
    app.listen(3000, () => {
      console.log(`listening on port ${3000}`);
    });
});


