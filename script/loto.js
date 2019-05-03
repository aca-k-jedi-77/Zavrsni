let lottoNumbers = [];
function loto7of39() {
  for (let i = 0; i < 7; i++) {
    let drawNum = Math.ceil(Math.random() * 39);
    if (lottoNumbers.indexOf(drawNum) == -1) {
      lottoNumbers.push(drawNum);
    } else {
      i--;
    }
    lottoNumbers.sort(function(a, b) {
      return a - b;
    });
    document.getElementById("lottoNumbers").innerHTML = lottoNumbers.join(" ");
    localStorage.setItem("lottoNumbers", JSON.stringify(lottoNumbers));
  }
  lottoNumbers = [];
}

function playMarbles() {
  var audio = document.getElementById("audio");
  audio.play();
}
