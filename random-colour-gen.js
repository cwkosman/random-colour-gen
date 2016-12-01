function generateColour () {
  function generateHex(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (MAah.floor(Math.random() * (max-min)) + min);
  }

console.log('#' + generateHex(0,256*256*256).toString(16));

}

generateColour();