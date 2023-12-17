var app = document.getElementById('typewriter');
var typewriter = new Typewriter(app, { loop: false, cursor: "" });

typewriter
  .typeString('Budi izvrstan u onom što vidiš!')
  .pauseFor(40)
  .deleteChars(6)
  .typeString(' voliš.')
  .pauseFor(350)
  .typeString('<br>')
  .typeString('<span style="color: #C61160;"><b>ZAISKRI</b></span>.')
  .pauseFor(5000)
  .start();
