const fortunes = [
  "Talk is cheap, show me the Code.",
  "Things aren't always #000000 and #ffffff.",
  "Coding is my Cardio.",
  "One man’s crappy software is another man’s full time job.",
  "If at first you don’t succeed; call it version 1.0",
  "Everybody makes mistrakes.",
  "It’s not a bug – it’s an undocumented feature.",
  "Being a good programmer is 3% talent 97% not being distracted by the internet",
  "Don't forget to branch",
  "!False - it's funny because it's true.",
  "Wait, compiling in progress"
];

function openCookie() {
  let messageNumber = Math.floor(Math.random() * fortunes.length);
  let messageText = fortunes[messageNumber];
  document.getElementById("message-text").innerHTML = messageText;
}

function playSnap() {
  var audio = document.getElementById("audio");
  audio.play();
}
