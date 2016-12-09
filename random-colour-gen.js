function generateHex() {
  var hex = Math.floor(Math.random() * Math.pow(256,3));
  return ('#' + hex.toString(16));
}

console.log(generateHex());