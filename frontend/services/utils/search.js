export const search = document.getElementById("search");
import { uri } from "../fetch/index.js";
export const startDate = document.getElementById("startDate");
export const endDate = document.getElementById("endDate");
import date from "./date.js";

export const findAndGet = async (url) => {
  if (startDate.value == "" && endDate.value == "") {
    startDate.style.borderColor = "red";
    endDate.style.borderColor = "red";

    setTimeout(function () {
      startDate.style.borderColor = "grey";
      endDate.style.borderColor = "grey";
    }, 3000);
  } else {
    const menkul = document.getElementById(`${url}Body`);
    menkul.innerHTML = "";

    Swal.fire({
      title: 'Lütfen Bekleyiniz!',
      text: 'Veri Yükleniyor',
      icon: 'success',
      confirmButtonText: 'Kapat'
    })
    await fetch(uri + `${url}/${startDate.value}/${endDate.value}`)
      .then((res) => res.json())
      .then((data) => {
        let allMenkulArray = data.payload;
        console.log(allMenkulArray)
        allMenkulArray.forEach((element) => {
          const x = Object.entries(element.data);

          for (let i = 0; i < x.length; i++) {
            const row = ` <tr>
                    <td><b>${x[i][0]}</b></td>
                    <td>${x[i][1].satis}</td>
                    <td>${x[i][1].alis}</td>
                    <td>${x[i][1].degisim}</td>
                    <td>${date(element.createdAt)}</td>
                </tr>`;

            menkul.innerHTML += row;
          }
        });
      });
  }
};
