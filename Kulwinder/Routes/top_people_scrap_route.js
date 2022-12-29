const express = require("express");
const router = express.Router();
const id = require("../Controllers/id");

router.post("/", id);
module.exports = router;
