let nbPlayers= 2;                                   //will be changing later to set how many canvas and the width of each of them
let canvas = document.querySelector("canvas");      //select the canvas
canvas.height = innerHeight;                        //set the height to the height of the screen
canvas.width = innerWidth / nbPlayers -20;          //set the width of the width divided by the number of players, and with 20 px to have a space between them
let c = canvas.getContext("2d");                    //context will be needed to create canvas object
let x=100;
let y=100;
let a=50;
let b=50;
let da=3;




function animate(){                                 //function that repeat itself infinitely
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.moveTo(x,y);
    c.lineTo(x+5,y-4);
    c.lineTo(x+10,y);
    c.lineTo(x+7,y);
    c.lineTo(x+7,y+7);
    c.lineTo(x+12,y+12);
    c.lineTo(x+9,y+12);
    c.lineTo(x+9,y+17);
    c.lineTo(x+6,y+17);
    c.lineTo(x+6,y+12);
    c.lineTo(x+4,y+12);
    c.lineTo(x+4,y+17);
    c.lineTo(x+1,y+17);
    c.lineTo(x+1,y+12);
    c.lineTo(x-2,y+12);
    c.lineTo(x+2,y+7);
    c.lineTo(x+2,y);
    c.lineTo(x,y);
    c.stroke();
    c.fillRect(a,b,20,20);
    a+=da;          
    requestAnimationFrame(animate);                 //call the the function inwich it is
}
animate();                                          //first call to initiate the infinity loop




// c.lineTo(75,30);
// c.lineTo(100,50);
// c.lineTo(85,50);
// c.lineTo(85,85);
// c.lineTo(110,110);
// c.lineTo(95,110);
// c.lineTo(95,135);
// c.lineTo(80,135);
// c.lineTo(80,110);
// c.lineTo(70,110);
// c.lineTo(70,135);
// c.lineTo(55,135);
// c.lineTo(55,110);
// c.lineTo(40,110);
// c.lineTo(65,85);
// c.lineTo(65,50);
// c.lineTo(50,50);