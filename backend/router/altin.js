const express = require("express");
const router = express.Router();
const { getAltin,getTimeAltin } = require("../controller/altin")


router.route('/').get(getAltin);
router.route('/:startTime/:endTime').get(getTimeAltin);

module.exports = router