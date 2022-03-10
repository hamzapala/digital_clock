const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const mood = document.querySelector(".mood");
function setTime() {
    let realTime = new Date();
    let realHour = realTime.getHours();
    let realMinute = realTime.getMinutes();
    let realSecond = realTime.getSeconds();
    if (realHour >= 12) {
        realHour -= 12;
        mood.innerText = "PM"
    } else{
        mood.innerText = "AM"
    }
    hour.innerHTML = realHour.toString().padStart(2, "0") + ":";
    minute.innerHTML = realMinute.toString().padStart(2, "0") + ":";
    second.innerHTML = realSecond.toString().padStart(2, "0") + "&nbsp;";
}
setInterval(setTime, 1000);