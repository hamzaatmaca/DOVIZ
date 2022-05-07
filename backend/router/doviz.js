const express = require("express");
const router = express.Router();
const { getDoviz,getTimeDoviz } = require("../controller/doviz")


router.route('/').get(getDoviz);
router.route('/:startTime/:endTime').get(getTimeDoviz);

module.exports = router