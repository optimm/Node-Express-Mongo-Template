const express = require("express");
const router = express.Router();

const {
  exampleController,
  errorExampleController,
} = require("../controllers/example");

router.route("/").get(exampleController);
router.route("/error").get(errorExampleController);

module.exports = router;
