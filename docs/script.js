const clock = {
  hour: undefined,
  minute: undefined,
  second: undefined
};

clock.hour = document.querySelector(".hour");
clock.minute = document.querySelector(".minute");
clock.second = document.querySelector(".second");

setTime();
setInterval(setTime, 1000);

function setTime() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  
  setRotation(clock.second, secondsRatio);
  setRotation(clock.minute, minutesRatio);
  setRotation(clock.hour, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360 + "deg");
}
