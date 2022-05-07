const Hisse = require("../model/hisse");


exports.getHisse = async (req, res) => {
  try {
    const hisse = await Hisse.find({}).sort({ _id: -1 }).limit(1);
    return res.status(200).json({
      message: "Success",
      payload: hisse,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error",
      payload: err,
    });
  }
};

exports.getTimeHisse = async (req, res) => {
  try {
    const hisse = await Hisse.find({
      createdAt: { $gt: req.params.startTime, $lt: req.params.endTime },
    });

    return res.status(200).json({
      payload: hisse,
    });
  } catch (err) {
    return res.status(500).json({
      payload: err,
    });

    console.log(err);
  }
};
