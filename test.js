var listShow = 2;

var listClass = ["c0", "c1", "c2", "c3", "c4"];

function circle()
{
  var canvas = document.getElementById("canvas1"); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.lineWidth="2";
  context.arc(100, 100, 90, 0, 2 * Math.PI);
  context.stroke();
}
circle();  


function fillCircle()
{
  var canvas = document.getElementById("canvas2");
  var context = canvas.getContext("2d");
  context.beginPath();
  context.fillStyle="#FF4422"
  context.arc(80, 80, 70, 0, 2 * Math.PI);
  context.fill();
}
fillCircle(); 

if ("c0");