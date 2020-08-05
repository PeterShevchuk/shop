import "./css/styles.css";

import Timer from "./js/timer.js";

const timer1 = new Timer({
  day: ".saleTop__timer-day p",
  hour: ".saleTop__timer-hour p",
  min: ".saleTop__timer-min p",
  sec: ".saleTop__timer-sec p",
  targetDate: new Date("Sep 1, 2020"),
});
timer1.startTimer();
