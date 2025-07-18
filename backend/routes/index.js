const express = require("express");
const emailRoutes = require("./email/emailRoutes");

const router = express.Router();
router.use("/email", emailRoutes);


module.exports = router;