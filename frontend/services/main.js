import doviz from "./doviz.js";
import hisse from "./hisse.js";
import altin from "./altin.js";

const uri = location.pathname;
const uriSplit = uri.split("/");
const path = uriSplit[1];

switch (path) {
  case "doviz":
    doviz.getAllData();
    doviz.getTimeData("2022-05-01", "2022-05-08");
    break;
  case "altin":
    altin.getAllData();
    altin.getTimeData("2022-05-01", "2022-05-08");
    break;
  case "hisse":
    hisse.getAllData();
    hisse.getTimeData("2022-05-01", "2022-05-08");
    break;
  default:
    doviz.getAllData();
    doviz.getTimeData("2022-05-01", "2022-05-08");
    break;
}




