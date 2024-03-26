const mysql = require("mysql")

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "cinema"
})

db.connect(()=>{
    console.log("Uspješno konektovan na bazu!");
})

module.exports = db