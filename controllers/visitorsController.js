const db = require("../db");
// res je odgovor klijentu (NIJE ODGOVOR BAZE), req je zahtjev ili request klijenta
const getAllVisitors = (request, response) => {
  const sqlQuery = "SELECT * FROM visitors";
  // err je greška koja se desi kada vršimo upit nad bazom
  // result je rezultat upita
  db.query(sqlQuery, (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    response.status(200).json(result);
  });
};

const insertVisitors = (request, response) => {
  const { phoneNumber, email } = request.body;
  const sqlQuery = "INSERT INTO visitors(phoneNumber, email) VALUES(?,?)";
  db.query(sqlQuery, [phoneNumber, email], (err, result) => {
    if (err) response.status(500).json("Desila se greška na serveru!");
    response.status(200).json(result);
  });
};

const deleteVisitor = (req, res) => {
  console.log("/:id", req.params.id);
  const sqlUpit = "DELETE FROM visitors WHERE id= ?";
  db.query(sqlUpit, [req.params.id], (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    res.status(200).json(result);
  });
};

const updateVisitor = (req, res) => {
  console.log("id", req.body);
  const { phoneNumber, email, id } = req.body;
  const sqlUpit = "UPDATE visitors SET phoneNumber=(?), email=(?) WHERE id=(?)";
  db.query(sqlUpit, [phoneNumber, email, id], (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    res.status(200).json(result);
  });
};

module.exports = {
  getAllVisitors,
  insertVisitors,
  deleteVisitor,
  updateVisitor,
};