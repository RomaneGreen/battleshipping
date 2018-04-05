

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
const pickShips = () => {
 let patrolBoat = prompt('Enter Coordinate for your patrol boat');
 let submarine = prompt('Enter Coordinate for your submarine');
 let battleship = prompt('Enter Coordinate for your battleship');
// console.log(`${patrolBoat}+${submarine}+${battleship}`);

const done =document.getElementsByClassName(patrolBoat,submarine);
console.log(done);

}
pickShips();

let x = document.getElementsByClassName("a1");
let i;
for (i = 0; i < x.length; i++) {
    x[i].innerHTML= "X";
    
}





const enemyShips = ["a1","d2","d3","b5","c5","d5"];
const attemps = []
const pickCoordinate = () => {
    document.getElementById('es').addEventListener('click',function(){
        let attackEnemy = document.getElementById("ei").value;
         if (enemyShips.includes(attackEnemy)){
             alert('Enemy ship hit!');
             document.getElementById(attackEnemy).innerHTML = "X";
         }else{
             alert('Miss');
             document.getElementById(attackEnemy).innerHTML = "M";
         }
     
  })
}

pickCoordinate();


 const YouWon = () => {
     if (document.getElementById('a1').innerHTML === 'X'&&
     document.getElementById('d2').innerHTML === 'X'&&
     document.getElementById('d3').innerHTML === 'X'&&
     document.getElementById('b5').innerHTML === 'X'&&
     document.getElementById('c5').innerHTML === 'X'&&
     document.getElementById('d5').innerHTML === 'X'
    ){
        alert("Conguratulations! You have won!")
        window.reload();
    }
 }

 YouWon();