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


//Make sure user starts game on right path
alert("Select ONE square for a patrol boat,TWO squares for a submarine and then select THREE squares for a Battleship");

//Arrays are being used as limit markers
var es = document.getElementById("es");
var enemyShips = ["a1", "d2", "d3", "b5", "c5", "d5"];

/*
 *let addPatrolBoat = document.getElementById("pp");
 *let patrolBoat = document.getElementById("pb");
 */
var selection = [];
var enemyHits = [];
var yourHits = [];

//onload added for jest,allows user to pick coordinate
window.onload = function () {
    var pickCoordinate = function pickCoordinate() {
        es.addEventListener("click", function () {
            var attackEnemy = document.getElementById("ei").value;
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
var randNum = function randNum() {
    return Math.floor(Math.random() * 10);
};

//allows user to select pieces on board
var goingtowork = function goingtowork() {
    var td = document.getElementsByTagName("td");
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
var donePicking = function donePicking() {
    if (selection.length >= 6) {
        alert("Now enter plots to fire at enemy ships!");
    }
};

//counts values pushed to array to determine winner
var weHaveAWinner = function weHaveAWinner() {
    if (enemyHits.length === 10) {
        alert("Game over! Enemy Sunk all your ships!");
    } else if (yourHits.length === 6) {
        alert("Congrats! You have sunk all enemy ships");
    }
};

weHaveAWinner();

/***/ })
/******/ ]);