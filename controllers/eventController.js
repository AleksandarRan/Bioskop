const db = require("../db");
// res je odgovor klijentu (NIJE ODGOVOR BAZE), req je zahtjev ili request klijenta
const getAllEvents = (request, response) => {
  const sqlQuery = "SELECT * FROM event";
  // err je greška koja se desi kada vršimo upit nad bazom
  // result je rezultat upita
  db.query(sqlQuery, (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    response.status(200).json(result);
  });
};

const insertEvents = (request, response) => {
  const { naziv, tip, datum, vrijeme, mjesto, cijena } = request.body;
  const sqlQuery = "INSERT INTO event(naziv, tip, datum, vrijeme, mjesto, cijena) VALUES(?,?,?,?,?,?)";
  db.query(sqlQuery, [naziv, tip, datum, vrijeme, mjesto, cijena], (err, result) => {
    if (err) response.status(500).json("Desila se greška na serveru!");
    response.status(200).json(result);
  });
};

// const deleteEvent = (req, res) => {
//   console.log("/:id", req.params.id);
//   const sqlUpit = "DELETE FROM event WHERE id= ?";
//   db.query(sqlUpit, [req.params.id], (err, result) => {
//     if (err) res.status(500).json("Desila se greška na serveru!");
//     res.status(200).json(result);
//   });
// };

const updateEvent = (req, res) => {
  console.log("id", req.body);
  const { naziv, tip, datum, vrijeme, mjesto, cijena, id } = req.body;
  const sqlUpit = "UPDATE event SET naziv=(?), tip=(?), datum=(?), vrijeme=(?), mjesto=(?), cijena=(?)  WHERE id=(?)";
  db.query(sqlUpit, [naziv, tip, datum, vrijeme, mjesto, cijena, id], (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    res.status(200).json(result);
  });
};

const deleteEvents = (req, res) => {
  console.log("id", req.params.id);
  const sqlUpit = "DELETE FROM event WHERE id=(?)";
  db.query(sqlUpit, [req.params.id], (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    res.status(200).json(result);
  });
};


module.exports = {
    getAllEvents,
    insertEvents,
    deleteEvents,
    updateEvent,
};