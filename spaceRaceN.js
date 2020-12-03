let nbPlayers= 2;                                   //will be changing later to set how many canvas and the width of each of them
let canvas = document.querySelector("canvas");      //select the canvas
canvas.height = innerHeight;                        //set the height to the height of the screen
canvas.width = innerWidth / nbPlayers;              //set the width of the width divided by the number of players, and with 20 px to have a space between them

let c = canvas.getContext("2d");                    // context will be needed to create canvas object
let x = innerWidth/4;                               // X-coordinate of the ship
let y = innerHeight - 200;                          // Y-coordinate ofthe ship
let upPressed = false;
let downPressed = false;


let s = 6;                                          // horizontal position of the asteroid
let ds = 0.1;                                       // desplazamiento
let radius = 5;                                     // tamaño


function animate(){

    c.clearRect(0, 0, innerWidth, innerHeight);

    
       

        for (let p=50; p<innerHeight-100; p+=100){                                  // func() creates asteroids in new vertical position(p)
            
            if (s > innerWidth / nbPlayers || s < 0) {                              // IF the asteroids is outside the game area            
                s = 0;                                                              // the asteroids returns to position 0
            }

            s += ds;                                                                // horizontal position + desplazamiento > creates the illusion of movement :D
        
            let a = Math.floor((Math.random() * 1000) + 1);

            // for (let i=0; i <= a.length; i++) {
                c.beginPath();                                                          
                c.arc(s+a, p, radius, 0, Math.PI * 2, false);                             
                c.strokeStyle = 'blue';
                c.fillStyle = "#FFFFFF";
                c.fill();
                c.stroke();

                // if (i == a.length) {
                //     i=0;
                // }
            // }



        }   




    































    // for (let p=0; p<innerHeight-100; p+=100){                                   // func() creates asteroids in new vertical position(p)
                                               
    //     if (s > innerWidth / nbPlayers || s < 0) {                              // IF the asteroids is outside the game area            
    //         s = 0;                                                              // the asteroids returns to position 0
    //     }
    //     s += ds;                                                                // horizontal position + or - speed > creates the illusion of movement :D

    //     c.beginPath();                                                          // Drawing creates asteroid
    //     c.arc(s, p, radius, 0, Math.PI * 2, false); 
    //     c.strokeStyle = 'white';
    //     c.fillStyle = "#FFFFFF";
    //     c.fill();
    //     c.stroke();
    //     // i++;                                                                    // increment i by 1 (i is the variable that stores the horizontal position of every asteroid)
    // }


// ::::::::::::::     THE SHIP    ::::::::::::::

    // c.clearRect(0,0,innerWidth,innerHeight);             // this clears a given section of the canvas, in this case from topleft (0,0) to bottomright(innerWidth,innerHeight)
    c.beginPath();                                          // path begins ant the bottom center point and to the left.
    c.moveTo(x,y);                                          // heigth of the ship is 40px, width is 30px.
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
 
    requestAnimationFrame(animate);
}                                                          
    
     
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

// Add EventListerner to a Button "START"
animate();