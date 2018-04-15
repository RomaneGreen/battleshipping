alert("Select one square for a patrol boat,two squares for a submarine and then select three squares for a Battleship")


let es =  document.getElementById('es');
const enemyShips = ["a1","d2","d3","b5","c5","d5"];
 let addPatrolBoat = document.getElementById('pp');
let patrolBoat = document.getElementById('pb');
let selection = [];
let enemyHits = [];
let yourHits = [];


const pickCoordinate = () => {
  
    
     es.addEventListener('click',function(){
         let attackEnemy = document.getElementById("ei").value;
         if (enemyShips.includes(attackEnemy)){
             alert('Enemy ship hit!');
             yourHits.push('1');
             weHaveAWinner();
             
             document.getElementById(attackEnemy).innerHTML = "X";

               
                
         }else{
             alert('Miss');
             
             document.getElementById(attackEnemy).innerHTML = "M";
             if(randNum() >= 5) {
             
             alert("Enemy Attacked and hit!");
             enemyHits.push(randNum());
             console.log(enemyHits.length);
             weHaveAWinner();
            }else{
            alert("Enemy Attacked and Missed")
            }
         }
     
  })
}

pickCoordinate();




const randNum = () => {

return Math.floor(Math.random()*10);

}






const goingtowork = () => {
td = document.getElementsByTagName('td');
for (var i = 0; i < 25; i++) {
     
     
     
    td[i].addEventListener('click',function(){
    this.innerHTML = 'X';
    selection.push(this.innerHTML);
    console.log(selection.length);
   donePicking();
    })
}
}

goingtowork();



const donePicking = () => {
 if(selection.length >= 6){
    alert("Now enter plots to fire at enemy ships!");
}
}


 const weHaveAWinner = () =>{

if(enemyHits.length === 10){

alert("Game over! Enemy Sunk all your ships!")
}else if (yourHits.length === 6){

 alert('Congrats! You have sunk all enemy ships');
}
}

weHaveAWinner();
