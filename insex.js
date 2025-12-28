function updateTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyoCurrent = moment().tz("Asia/Tokyo");
  tokyoDate.innerHTML = tokyoCurrent.format("MMMM Do, YYYY");
  tokyoTime.innerHTML = tokyoCurrent.format("h:mm:ss [<small>]A[</small>]");

  let hongKongElement = document.querySelector("#hong-kong");
  let hongKongDate = hongKongElement.querySelector(".date");
  let hongKongTime = hongKongElement.querySelector(".time");
  let hongKongCurrent = moment().tz("Asia/Hong_Kong");
  hongKongDate.innerHTML = hongKongCurrent.format("MMMM Do, YYYY");
  hongKongTime.innerHTML = hongKongCurrent.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
