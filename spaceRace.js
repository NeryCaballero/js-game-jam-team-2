let nbPlayers= 2;                                   //will be changing later to set how many canvas and the width of each of them
let canvas = document.querySelector("canvas");      //select the canvas
canvas.height = innerHeight;                        //set the height to the height of the screen
canvas.width = innerWidth / nbPlayers;              //set the width of the width divided by the number of players, and with 20 px to have a space between them

let c = canvas.getContext("2d");                    // context will be needed to create canvas object
let x = innerWidth/4;                           // X-coordinate of the ship
let y = innerHeight - 200;                      // Y-coordinate ofthe ship

function animate(){                                //function that repeat itself infinitely so everything have to be in it

    c.clearRect(0,0,innerWidth,innerHeight);            //this clears a given section of the canvas, in this case from topleft (0,0) to bottomright(innerWidth,innerHeight)
    c.beginPath();                                      // path begins ant the bottom center point and to the left.
    c.moveTo(x,y);                                      // heigth of the ship is 40px, width is 30px.
    c.lineTo(x-3, y);
    c.lineTo(x-3, y-5);
    c.lineTo(x-7, y-5);
    c.lineTo(x-7, y);
    c.lineTo(x-15, y);
    c.lineTo(x-5, y-15);
    c.lineTo(x-10, y-15);
    c.lineTo(x-5, y-20);
    c.lineTo(x-5, y-30);
    c.lineTo(x-10, y-30);
    c.lineTo(x, y-40);
    c.lineTo(x+10, y-30);
    c.lineTo(x+5, y-30);
    c.lineTo(x+5, y-20);
    c.lineTo(x+10, y-15);
    c.lineTo(x+5, y-15);
    c.lineTo(x+15, y);
    c.lineTo(x+7, y);
    c.lineTo(x+7, y-5);
    c.lineTo(x+3, y-5);
    c.lineTo(x+3, y);
    c.lineTo(x+1,y); 

    c.stroke();

    requestAnimationFrame(animate);                 // call the the function inwich it is
}

    input.addEventListener("keyup", ()=>{
        y = y+1;
    });        

    input.addEventListener("keydown", ()=>{
        y = y-1;
    }); 


 animate();                                          // first call to initiate the infinity loop 