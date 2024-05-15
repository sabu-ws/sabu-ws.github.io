// TypeWriter
var i = 0;
var txt = 'Welcome to SABU !';
var speed = 100;

onload=(typeWriter)

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title-content").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// ScroolView
function scroolViewFunc() {
  const element = document.getElementById("content");
  element.scrollIntoView({ behavior: 'smooth' });
}