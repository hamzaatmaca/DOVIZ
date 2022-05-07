import { uri } from "./fetch/index.js";
import date from "./utils/date.js";
import { search, findAndGet, startDate, endDate } from "./utils/search.js";
class AltinService {
  async getAllData() {
    await fetch(uri + "altin")
      .then((res) => res.json())
      .then((data) => {
        const altin = document.getElementById("altinBody");
        let allAltinArray = Object.entries(data.payload[0].data);
        allAltinArray.forEach((element) => {
          const row = ` <tr>
            <td><b>${element[0]}</b></td>
            <td>${element[1].satis}</td>
            <td>${element[1].alis}</td>
            <td>${element[1].degisim}</td>
            <td>${date(data.payload[0].createdAt)}</td>
        </tr>`;
          altin.innerHTML += row;
        });
      });
  }
  async getTimeData(startTime, endTime) {
    search.addEventListener("click", async () => {
      findAndGet('altin');
    });
  }
}

let altin = new AltinService();
export default altin;
