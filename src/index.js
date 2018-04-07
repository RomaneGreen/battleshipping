

//  const shipFactory = (length) => {
    
//     const shiplength = () => console.log(length);
//     const hit = () => console.log(length -1);
//     const isSunk = () => {
//         if((length -1) === 0){
//             console.log('Your ship has sunk');
//         }else{
//             console.log("keep fiting");
//         }
//     }
//     return { shiplength, hit, isSunk };
//   };
  
//   const jeff = shipFactory(1);

//   jeff.shiplength(); 
//   jeff.hit();
//   jeff.isSunk();


//   const gameBoard = () => {
//     const placeShip = () => console.log("coordinates");
//     const recieveAttack = () => console.log("attacked");
//     const allShipsSunk = () => console.log("sunk");


//     return { placeShip, recieveAttack, allShipsSunk };
//   }

//   const game = gameBoard()
//   game.placeShip();
// const pickShips = () => {
//  let patrolBoat = prompt('Enter Coordinate for your patrol boat');
//  let submarine = prompt('Enter Coordinate for your submarine');
//  let battleship = prompt('Enter Coordinate for your battleship');
// // console.log(`${patrolBoat}+${submarine}+${battleship}`);

// const done =document.getElementsByClassName(patrolBoat,submarine);
// console.log(done);

// }
// pickShips();

let x = document.getElementsByClassName("a1");
let i;
for (i = 0; i < x.length; i++) {
    x[i].innerHTML= "X";
    
}

let attemps = []
const YouWon = () => {
    if (attemps.length === 6){
   alert('hi');
    }
    
}



const enemyShips = ["a1","d2","d3","b5","c5","d5"];

const pickCoordinate = () => {
  
    let es =  document.getElementById('es');
     es.addEventListener('click',function(){
        let attackEnemy = document.getElementById("ei").value;
         if (enemyShips.includes(attackEnemy)){
             alert('Enemy ship hit!');
             document.getElementById(attackEnemy).innerHTML = "X";
                attemps.push("1");
                console.log(attemps);
                YouWon();
         }else{
             alert('Miss');
             document.getElementById(attackEnemy).innerHTML = "M";
         }
     
  })
}

pickCoordinate();

YouWon();



 export function sum(a, b) {
    return a + b;
  }
  