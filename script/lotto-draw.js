let localNumbers = JSON.parse(localStorage.getItem("lottoNumbers"));
document.getElementById("yourNumbers").innerHTML = localNumbers.join(" ");

let drawnNumbers = [];
function loto7of39r() {
  for (let i = 0; i < 7; i++) {
    let drawNum = Math.ceil(Math.random() * 39);
    if (drawnNumbers.indexOf(drawNum) == -1) {
      drawnNumbers.push(drawNum);
    } else {
      i--;
    }
    drawnNumbers.sort(function(a, b) {
      return a - b;
    });
    document.getElementById("yourNumbersDrawn").innerHTML = drawnNumbers.join(
      " "
    );
  }
}

loto7of39r();

let rightNumbers = [];
rightNumbers = drawnNumbers.filter(value => -1 !== localNumbers.indexOf(value));
document.getElementById("numbersRightArray").innerHTML = rightNumbers.join(" ");
document.getElementById("numbersRightNum").innerHTML = rightNumbers.length;
