const db = require("../db");
const path = require("path");
// res je odgovor klijentu (NIJE ODGOVOR BAZE), req je zahtjev ili request klijenta
const getAllMovies = (request, response) => {
  const sqlQuery = "SELECT * FROM movies";

  // err je greška koja se desi kada vršimo upit nad bazom
  // result je rezultat upita
  db.query(sqlQuery, (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    response.status(200).json(result);
  });
};

const insertMovie = (request, response) => {
  const { movieName, genre } = request.body;
  const sqlQuery = "INSERT INTO movies(movie_name, genre) VALUES(?,?)";
  db.query(sqlQuery, [movieName, genre], (err, result) => {
    if (err) response.status(500).json("Desila se greška na serveru!");
    response.status(200).json(result);
  });
};

const getOneMovie = (req, res) => {
  console.log("Pokrenut kontroler");
  console.log("id", req.params.id);
  const sqlUpit = "SELECT * FROM movies WHERE id=(?)";
  db.query(sqlUpit, [req.params.id], (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    res.status(200).json(result);
  });
};

const deleteOneMovie = (req, res) => {
  console.log("id", req.params.id);
  const sqlUpit = "DELETE FROM movies WHERE id=(?)";
  db.query(sqlUpit, [req.params.id], (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    res.status(200).json(result);
  });
};

const updateMovie = (req, res) => {
  console.log("id", req.body);
  const { movieName, genre, id } = req.body;
  const sqlUpit = "UPDATE movies SET movie_name=(?), genre=(?) WHERE id=(?)";
  db.query(sqlUpit, [movieName, genre, id], (err, result) => {
    if (err) res.status(500).json("Desila se greška na serveru!");
    res.status(200).json(result);
  });
};

const uploadImg = (req, res) => {
  console.log("dirname", __dirname);
  console.log(req.files);
  const files = req.files; // objekat gdje je svaki file property
  const imgPath = [];
  Object.keys(files).forEach((key) => {
    const filePath = path.join(__dirname, "..", "uploads", files[key].name);
    files[key].mv(filePath, (error) => {
      if (error)
        return res.status(500).json({ message: "User image upload failed!" });
    });
    imgPath.push(filePath);
  });

  console.log("Res path:", imgPath[0]);
  res.status(201).send(imgPath[0]);
};

module.exports = {
  getAllMovies,
  insertMovie,
  getOneMovie,
  deleteOneMovie,
  uploadImg,
  updateMovie,
};
