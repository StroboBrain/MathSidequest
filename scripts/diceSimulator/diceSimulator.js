

  function rollDice(number){
    const result = Math.floor(Math.random() * number) + 1;
    document.getElementById("diceResult").textContent = "You rolled a " + result;
  }