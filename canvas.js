// setting the canvas

// let canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let c = canvas.getContext('2d');

// design of the asteroid

c.beginPath();
c.arc (6, 300, 5, 0, Math.PI * 2, false);
c.strokeStyle = 'white';
c.stroke();
c.fillStyle = "#FFFFFF";
c.fill();

// movement of asteroid

let x = 6;                                                                //set x so the position can be changed
let dx = 5; 
let radius = 5;

function move() {  
                                         
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();                                                          //circle
    c.arc(x, 300, radius, 0, Math.PI * 2, false);                           //circle
    c.strokeStyle = 'white';                                                //circle
    c.stroke();                                                             //circle
    c.fillStyle = "#FFFFFF";                                                //circle
    c.fill();                                                               //circle

    if (x > innerWidth || x < 0) {                                          
        dx = -dx;
    }

    x += dx;                                                                //set velocity
    requestAnimationFrame(move);  
}

move();

// for (let i = 0; i < 10; i++) {
// 	let star = {}; 
// 	star.x = random(0, width); 
// 	star.y = random(0, height);
// 	stars.push(star); 
// }

// generate multiple asteroid

// with class

// class Asteroid {
//     constructor(y) {
//         // animate();
//         this.y = y;
//     }
    
// }

// // with for-loop

// let n = innerWidth - 20;

// for (let i=1; i<n; i+=10) {
//     animate();  
// }



// for (let i=0; i<100; i++) {
//     setTimeout(() => {
        
//     }, 1000)
//     }
// }



















