const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./database/database");
const dovizRouter = require("./router/doviz.js");
const hisseRouter = require("./router/hisse.js");
const altinRouter = require("./router/altin.js");
const cors = require("cors");
const {doviz} = require('./middleware/doviz.js')
const {altin} = require('./middleware/altin.js')
const {hisse} = require('./middleware/hisse.js')

db();

/**
 * CREATE ALTİN DOVİZ HİSSE TO ==> DB
 */
doviz();
altin();
hisse();

app.use(express.json());
app.use(cors());


app.use("/api/doviz", dovizRouter);
app.use("/api/hisse", hisseRouter);
app.use("/api/altin", altinRouter);

app.listen(PORT, () => {
  console.dir(`Server is running on port : ${PORT}`);
});
