//canvas API = a means for drawing graphics 
//             used for animations, games, data visualization

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//draw lines
context.strokeStyle = "#4d4d4d";    //line color
context.lineWidth = 10;  //line thickness
context.beginPath();
context.moveTo(0, 0);   //this is the starting point
context.lineTo(250, 250);   //ending point?
context.lineTo(250, 500);   //coordinates... x and y maybe? pixels
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();   //border

//draw triangle
context.beginPath();
context.fillStyle = "#4bff00"; //fill color
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill(); //function to fill 

//draw rectangle
context.fillStyle = "#0e0e0e";
context.strokeRect(0, 0, 250, 250); //starting coordinates, followed by width and height
context.fillRect(0, 0, 250, 250);

context.fillStyle = "#4bff00";
context.strokeRect(0, 250, 250, 250); //starting coordinates, followed by width and height
context.fillRect(0, 250, 250, 250);

context.fillStyle = "#0e0e0e";
context.strokeRect(250, 250, 250, 250); //starting coordinates, followed by width and height
context.fillRect(250, 250, 250, 250);

//draw circle
//(x, y, r, sAngle, eAngle, counterclockwise) r= radius, sAngle= starting angle, eAngle= ending angle
context.beginPath();
context.strokeStyle = "#4d4d4d";
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();

//draw text
context.font = "30px MV Boli";
context.fillStyle = "white";
context.textAlign = "center";
context.fillText("OMNITRIX", canvas.width /2, canvas.height /2);
