const Altin = require("../model/altin");


exports.getAltin = async (req, res) => {
  try {
    const altin = await Altin.find({}).sort({ _id: -1 }).limit(1);
    return res.status(200).json({
      message: "Success",
      payload: altin,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error",
      payload: err,
    });
  }
};

exports.getTimeAltin = async (req, res) => {
  try {
    const altin = await Altin.find({
      createdAt: { $gt: req.params.startTime, $lt: req.params.endTime },
    });

    return res.status(200).json({
      payload: altin,
    });
  } catch (err) {
    return res.status(500).json({
      payload: err,
    });

    console.log(err);
  }
};
