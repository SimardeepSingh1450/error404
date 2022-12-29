const express = require("express");
const router = express.Router();
const run = require("../controllers/sockpuppetcontroller");

router.get("/", run);
module.exports = router;
