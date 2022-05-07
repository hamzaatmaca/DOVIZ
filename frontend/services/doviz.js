import { uri } from "./fetch/index.js";
import date from "./utils/date.js";
import { search, findAndGet, startDate, endDate } from "./utils/search.js";

class DovizService {
  async getAllData() {
    await fetch(uri + "doviz")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const doviz = document.getElementById("dovizBody");

        let allDovizArray = Object.entries(data.payload[0].data);
        allDovizArray.forEach((element) => {
          const row = ` <tr>
            <td><b>${element[0]}</b></td>
            <td>${element[1].satis}</td>
            <td>${element[1].alis}</td>
            <td>${element[1].degisim}</td>
            <td>${date(data.payload[0].createdAt)}</td>
        </tr>`;
          doviz.innerHTML += row;
        });
      });
  }
  async getTimeData() {
    search.addEventListener("click", async () => {
      findAndGet('doviz');
    });
  }
}

let doviz = new DovizService();
export default doviz;
