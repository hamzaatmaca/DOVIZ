const express = require("express");
const router = express.Router();
const { getHisse,getTimeHisse } = require("../controller/hisse")


router.route('/').get(getHisse);
router.route('/:startTime/:endTime').get(getTimeHisse);

module.exports = router