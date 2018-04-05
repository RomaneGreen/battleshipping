alert('this works');

 const shipFactory = (length) => {
    
    const shiplength = () => console.log(length);
    const hit = () => console.log(length -1);
    const isSunk = () => {
        if((length -1) === 0){
            console.log('Your ship has sunk');
        }else{
            console.log("keep fiting");
        }
    }
    return { shiplength, hit, isSunk };
  };
  
  const jeff = shipFactory(1);

  jeff.shiplength(); 
  jeff.hit();
  jeff.isSunk();


  const gameBoard = () => {
    const placeShip = () => console.log("coordinates");
    const recieveAttack = () => console.log("attacked");
    const allShipsSunk = () => console.log("sunk");


    return { placeShip, recieveAttack, allShipsSunk };
  }

  const game = gameBoard()
  game.placeShip();

  console.log(document.domain)