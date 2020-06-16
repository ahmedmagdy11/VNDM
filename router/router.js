const express = require("express");
const connection = require("../configs/database");
const router = express();


router.get('/',(req,res)=>{
    res.sendFile('index.html');
})

module.exports = router;