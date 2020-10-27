let nbPlayers= 2;                                   //will be changing later to set how many canvas and the width of each of them
let canvas = document.querySelector("canvas");      //select the canvas
canvas.height = innerHeight;                        //set the height to the height of the screen
canvas.width = innerWidth / nbPlayers -20;          //set the width of the width divided by the number of players, and with 20 px to have a space between them
let c = canvas.getContext("2d");                    //context will be needed to create canvas object
let x=100;                                          //X-coordinate of the ship
let y=100;                                          //Y-ccordinate of the ship

function animate(){                                 //function that repeat itself infinitely so everything have to be in it
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

    checkCollision(asteroid){
        let collides = false;
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width && 
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.lenght &&
            this.topLeftYPos + this.lenght > otherRectangle.topLeftYPos){
                collides = true;
            }
        return collides;
    }
    if(checkCollision(asteroid)){
        
    }
    requestAnimationFrame(animate);                 //call the the function inwich it is
}
animate();                                          //first call to initiate the infinity loop