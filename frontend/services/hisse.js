import { uri } from "./fetch/index.js";
import date from "./utils/date.js";
import { search, findAndGet, startDate, endDate } from "./utils/search.js";

class HisseService {
  async getAllData() {
    await fetch(uri + "hisse")
      .then((res) => res.json())
      .then((data) => {
        const hisse = document.getElementById("hisseBody");

        let allHisseArray = Object.entries(data.payload[0].data);
        allHisseArray.forEach((element) => {
          const row = ` <tr>
            <td><b>${element[0]}</b></td>
            <td>${element[1].satis}</td>
            <td>${element[1].alis}</td>
            <td>${element[1].degisim}</td>
            <td>${date(data.payload[0].createdAt)}</td>
        </tr>`;
          hisse.innerHTML += row;
        });
      });
      
  }
  async getTimeData(startTime, endTime) {
    search.addEventListener("click", async () => {
      findAndGet('hisse');
    });
  }
}

let hisse = new HisseService();
export default hisse;
