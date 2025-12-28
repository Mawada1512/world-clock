function updateTime() {
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoTime = tokyoElement.querySelector(".time");
    let tokyoCurrent = moment().tz("Asia/Tokyo");
    tokyoDate.innerHTML = tokyoCurrent.format("MMMM Do, YYYY");
    tokyoTime.innerHTML = tokyoCurrent.format("h:mm:ss [<small>]A[</small>]");
  }

  let hongKongElement = document.querySelector("#hong-kong");
  if (hongKongElement) {
    let hongKongDate = hongKongElement.querySelector(".date");
    let hongKongTime = hongKongElement.querySelector(".time");
    let hongKongCurrent = moment().tz("Asia/Hong_Kong");
    hongKongDate.innerHTML = hongKongCurrent.format("MMMM Do, YYYY");
    hongKongTime.innerHTML = hongKongCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let khartoumElement = document.querySelector("#khartoum");
  if (khartoumElement) {
    let khartoumDate = khartoumElement.querySelector(".date");
    let khartoumTime = khartoumElement.querySelector(".time");
    let khartoumCurrent = moment().tz("Africa/Khartoum");
    khartoumDate.innerHTML = khartoumCurrent.format("MMMM Do, YYYY");
    khartoumTime.innerHTML = khartoumCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${moment().format("A")}</small></div>
        </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);
