let nbPlayers= 2;                                   //will be changing later to set how many canvas and the width of each of them
let canvas = document.querySelector("canvas");      //select the canvas
canvas.height = innerHeight;                        //set the height to the height of the screen
canvas.width = innerWidth / nbPlayers;              //set the width of the width divided by the number of players, and with 20 px to have a space between them

let c = canvas.getContext("2d");                    // context will be needed to create canvas object
let x = innerWidth/4;                               // X-coordinate of the ship
let y = innerHeight - 200;                          // Y-coordinate ofthe ship
let upPressed = false;
let downPressed = false;

// //create asteroid

// c.beginPath();
// c.arc (6, 300, 5, 0, Math.PI * 2, false);
// c.strokeStyle = 'white';
// c.stroke();
// c.fillStyle = "#FFFFFF";                    
// c.fill();

// //movement of asteroid

let s = 6;                                                                //set x so the position can be changed
let ds = 5; 
// let s;
// let ds;
let radius = 5;
// let array_horiz_pos=[];
// for (let j=0;j<innerHeight-100;j+=50){

// }

// let array = [[1,5],[248,-5], [25,5]];                                        // [s, ds]


function animate(){                                                             //function that repeat itself infinitely so everything have to be in it
    // //asteroid
    c.clearRect(0, 0, innerWidth, innerHeight);                                 // Clear func()
    // //loop to create multiple asteroids                 
    let i = 0;
    for (let p=0; p<innerHeight-100; p+=50){                                    // func() creates asteroids in new vertical position(p)
        // s=array[i][0];
        // ds=array[i][1];                                                      // ds = speed
        if (s > innerWidth / nbPlayers || s < 0) {                              // changes the horizontal position of the drawing            
            ds = -ds;                                                           // intercalates the direction. positive=right negative=left
        }
        s += ds;                                                                // horizontal position + or - speed > creates the illusion of movement :D
        // array[i][0]=s;
        // array[i][1]=ds;
        c.beginPath();                                                          // Drawing creates asteroid
        c.arc(s, p, radius, 0, Math.PI * 2, false);                             // s = horizontal p = vertical
        c.strokeStyle = 'white';                                                //
        c.fillStyle = "#FFFFFF";                                                //
        c.fill(); 
        c.stroke();  
        i++;                                                                    // increment i by 1 (i is the variable that stores the horizontal position of every asteroid)
    }                                                                           
    // //bounce

    // if (s > innerWidth / nbPlayers || s < 0) {                                          
    //     ds = -ds;
    // }

    // s += ds;   

    // //draw ship

    // c.clearRect(0,0,innerWidth,innerHeight);            //this clears a given section of the canvas, in this case from topleft (0,0) to bottomright(innerWidth,innerHeight)
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
    c.strokeStyle="white";

    c.stroke();
    
    if (upPressed===true){
        y-=1;
    }
    if (downPressed===true){
        y+=1;
    }
   
    console.log(y) 
 
    requestAnimationFrame(animate);
}                                                          //set velocity
    
     
document.addEventListener("keyup", ()=>{
    if (event.keyCode==38){
        upPressed=false;
    }
    if (event.keyCode==40){
        downPressed=false;
    }
});

document.addEventListener("keydown", ()=>{
    if (event.keyCode==38){
        upPressed=true;
    }
    if (event.keyCode==40){
        downPressed=true;
    }
});


    // input.addEventListener("keydown", ()=>{
    //     y = y-1;
    // }); 


 animate();               
 
 // first call to initiate the infinity loop 


