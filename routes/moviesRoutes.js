const express = require("express");
const fileUpload = require("express-fileupload");
const {
  getAllMovies,
  insertMovie,
  getOneMovie,
  deleteOneMovie,
  uploadImg,
  updateMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/", getAllMovies);
router.get("/singlemovie/:id", getOneMovie);
router.delete("/delete/:id", deleteOneMovie);
router.post("/", insertMovie);
router.put("/update", updateMovie);
router.post(
  "/uploadMovieImg",
  fileUpload({ limits: { fileSize: 10 * 512 * 512 } }),
  uploadImg
);

module.exports = router;
