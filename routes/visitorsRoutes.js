const express = require("express");
const {
  getAllVisitors,
  insertVisitors,
  deleteVisitor,
  updateVisitor,
} = require("../controllers/visitorsController");

const router = express.Router();

router.get("/", getAllVisitors);
router.post("/", insertVisitors);
router.delete("/deletevisitor/:id", deleteVisitor);
router.put("/update", updateVisitor);


module.exports = router;
