const axios = require("axios");
const Hisse = require("../model/hisse");
const fs = require("fs");

exports.hisse = () => {
  setInterval(async () => {
    const allHisse = await axios
      .get("https://api.genelpara.com/embed/borsa.json")
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

    const hisse = await Hisse.create(
      JSON.parse(JSON.stringify(allHisse, getCircularReplacer()))
    );

    const hisseAll = await Hisse.find({})

    fs.writeFile("./json/hisse.json", JSON.stringify(hisseAll), "utf-8", (err) => {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }

      console.log("JSON file has been saved.");
    });

  }, 3600000);
};
