const express = require("express");
const router = express.Router();
const id = require("../controllers/id");

router.post("/", id);
module.exports = router;
