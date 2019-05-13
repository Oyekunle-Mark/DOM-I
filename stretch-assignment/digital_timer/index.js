let interval;

document.getElementById("msTens").textContent = 0;
function timer() {
  let time = 0;
  let hundredSeconds = 0;
  let secondsOne = 0;
  let secondTen = 0;

  interval = setInterval(() => {
    time += 10;

    if (time === 100) {
      hundredSeconds++;
      time = 0;
    }

    if (hundredSeconds === 10) {
      secondsOne++;
      hundredSeconds = 0;
    }

    if (secondsOne === 10) {
      secondTen++;
      secondsOne = 0;
    }

    if (secondTen) {
      clearInterval(interval);
    }

    document.getElementById("msHundreds").textContent = hundredSeconds;
    document.getElementById("secondOnes").textContent = secondsOne;
    document.getElementById("secondTens").textContent = secondTen;
  }, 10);
}

timer();
