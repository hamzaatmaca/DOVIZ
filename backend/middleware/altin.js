const axios = require("axios");
const Altin = require("../model/altin");
const fs = require("fs");

exports.altin = () => {
  setInterval(async () => {
    const allAltin = await axios
      .get("https://api.genelpara.com/embed/altin.json")
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });

    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };

    const altin = await Altin.create(
      JSON.parse(JSON.stringify(allAltin, getCircularReplacer()))
    );

    const altinAll = await Altin.find({})

    fs.writeFile("./json/altin.json", JSON.stringify(altinAll), "utf-8", (err) => {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }

      console.log("JSON file has been saved.");
    });
  }, 3600000);
};
