const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hours-hand');

function rotateSecondsHand(now) {
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function rotateMinutesHand(now) {
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function rotateHoursHand(now) {
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setClockTime() {
  const now = new Date();

  rotateSecondsHand(now);
  rotateMinutesHand(now);
  rotateHoursHand(now);
}

setInterval(setClockTime, 1000);
