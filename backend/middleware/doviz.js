const axios = require("axios");
const Doviz = require("../model/doviz");
const fs = require("fs");

exports.doviz = () => {
  setInterval(async () => {
    const allDoviz = await axios
      .get("https://api.genelpara.com/embed/doviz.json")
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

    const doviz = await Doviz.create(
      JSON.parse(JSON.stringify(allDoviz, getCircularReplacer()))
    );

    const dovizAll = await Doviz.find({})

    fs.writeFile("./json/doviz.json", JSON.stringify(dovizAll), "utf-8", (err) => {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }

      console.log("JSON file has been saved.");
    });
  }, 3600000);
};
