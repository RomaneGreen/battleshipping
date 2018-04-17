//Make sure user starts game on right path
alert("Select one square for a patrol boat,two squares for a submarine and then select three squares for a Battleship"
);

//Arrays are being used as limit markers
let es = document.getElementById("es");
const enemyShips = ["a1", "d2", "d3", "b5", "c5", "d5"];

/*
 *let addPatrolBoat = document.getElementById("pp");
 *let patrolBoat = document.getElementById("pb");
 */
let selection = [];
let enemyHits = [];
let yourHits = [];

//onload added for jest,allows user to pick coordinate
window.onload = function () {
    const pickCoordinate = () => {
        es.addEventListener("click", function () {
            let attackEnemy = document.getElementById("ei").value;
            if (enemyShips.includes(attackEnemy)) {
                alert("Enemy ship hit!");
                yourHits.push("1");
                weHaveAWinner();

                document.getElementById(attackEnemy).innerHTML = "X";
            } else {
                alert("Miss");

                document.getElementById(attackEnemy).innerHTML = "M";
                if (randNum() >= 5) {
                    alert("Enemy Attacked and hit!");
                    enemyHits.push(randNum());
                    weHaveAWinner();
                } else {
                    alert("Enemy Attacked and Missed");
                }
            }
        });
    };
    pickCoordinate();
};

//random number for cpu hit or miss
const randNum = () => {
    return Math.floor(Math.random() * 10);
};

//allows user to select pieces on board
const goingtowork = () => {
    let td = document.getElementsByTagName("td");
    for (var i = 0; i < 25; i++) {
        td[i].addEventListener("click", function () {
            this.innerHTML = "X";
            selection.push(this.innerHTML);
            donePicking();
        });
    }
};

goingtowork();

//initates fire at cpu stage after picking ships
const donePicking = () => {
    if (selection.length >= 6) {
        alert("Now enter plots to fire at enemy ships!");
    }
};

//counts values pushed to array to determine winner
const weHaveAWinner = () => {
    if (enemyHits.length === 10) {
        alert("Game over! Enemy Sunk all your ships!");
    } else if (yourHits.length === 6) {
        alert("Congrats! You have sunk all enemy ships");
    }
};

weHaveAWinner();