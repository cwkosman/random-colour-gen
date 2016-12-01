function generateColour () {
  function generateHex() {
    return (Math.floor(Math.random() * Math.pow(256,3)));
  }

console.log('#' + generateHex().toString(16));

}

generateColour();