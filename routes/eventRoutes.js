const express = require("express");
const {
    getAllEvents,
    insertEvents,
    deleteEvents,
    updateEvent,
} = require("../controllers/eventController");

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", insertEvents);
router.delete("/deleteevent/:id", deleteEvents);
router.put("/update", updateEvent);


module.exports = router;
