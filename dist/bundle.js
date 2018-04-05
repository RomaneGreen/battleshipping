/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
var pickShips = function pickShips() {
    var patrolBoat = prompt('Enter Coordinate for your patrol boat');
    var submarine = prompt('Enter Coordinate for your submarine');
    var battleship = prompt('Enter Coordinate for your battleship');
    // console.log(`${patrolBoat}+${submarine}+${battleship}`);

    var done = document.getElementsByClassName(patrolBoat, submarine);
    console.log(done);
};
pickShips();

var x = document.getElementsByClassName("a1");
var i = void 0;
for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "X";
}

var enemyShips = ["a1", "d2", "d3", "b5", "c5", "d5"];
var attemps = [];
var pickCoordinate = function pickCoordinate() {
    document.getElementById('es').addEventListener('click', function () {
        var attackEnemy = document.getElementById("ei").value;
        if (enemyShips.includes(attackEnemy)) {
            alert('Enemy ship hit!');
            document.getElementById(attackEnemy).innerHTML = "X";
        } else {
            alert('Miss');
            document.getElementById(attackEnemy).innerHTML = "M";
        }
    });
};

pickCoordinate();

var YouWon = function YouWon() {
    if (document.getElementById('a1').innerHTML === 'X' && document.getElementById('d2').innerHTML === 'X' && document.getElementById('d3').innerHTML === 'X' && document.getElementById('b5').innerHTML === 'X' && document.getElementById('c5').innerHTML === 'X' && document.getElementById('d5').innerHTML === 'X') {
        alert("Conguratulations! You have won!");
        window.reload();
    }
};

YouWon();

/***/ })
/******/ ]);