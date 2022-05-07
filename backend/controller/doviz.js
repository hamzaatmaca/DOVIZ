const Doviz = require("../model/doviz");

exports.getDoviz = async (req, res) => {
  try {
    const doviz = await Doviz.find({}).sort({_id: -1}).limit(1);
    return res.status(200).json({
      message: "Success",
      payload: doviz,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error",
      payload: err,
    });
  }
};

exports.getTimeDoviz = async (req, res) => {
  try {
    const doviz = await Doviz.find({
      createdAt: { $gt: req.params.startTime, $lt: req.params.endTime },
    });

    return res.status(200).json({
      payload: doviz,
    });
  } catch (err) {
    return res.status(500).json({
      payload: err,
    });

    console.log(err);
  }
};
