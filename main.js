let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let startVariable = false;

function start() {
  startVariable = true;
  stopWatch();
}

function stop() {
  startVariable = false;
}

function reset() {
  startVariable = false;
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ms").innerHTML = "00";
}

function stopWatch() {
  if (startVariable == true) {
    ms = ms + 1;

    if (ms == 100) {
      sec += 1;
      ms = 0;
    }

    if (sec == 60) {
      min += 1;
      sec = 0;
    }

    if (min == 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;
    let msString = ms;
    if (hr < 10) {
      hrString = "0" + hrString;
    }

    if (min < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (ms < 10) {
      msString = "0" + msString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("ms").innerHTML = msString;
    setTimeout("stopWatch()", 10);
  }
}
