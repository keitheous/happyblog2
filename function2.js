// code not in use.
console.log("function2.js");

var gradientArray=[];

var generateGradient = function(xRGB, yRGB, steps) {
  var massiveHexArray=[xRGB[0]+xRGB[1], xRGB[2]+xRGB[3], xRGB[4]+xRGB[5], yRGB[0]+yRGB[1], yRGB[2]+yRGB[3], yRGB[4]+yRGB[5]] ;
  var massiveDecArray = massiveHexArray.map(function(hexNum){
    return parseInt(hexNum, 16);
  })
  console.log("Hexadecimal Breakdown:", massiveHexArray);
  console.log("Decimal Breakdown:",massiveDecArray);

  var redRangeFactor = (massiveDecArray[0]-massiveDecArray[3])/steps;
  var greenRangeFactor = (massiveDecArray[1]-massiveDecArray[4])/steps;
  var blueRangeFactor = (massiveDecArray[2]-massiveDecArray[5])/steps;
  console.log("Range Factors:", redRangeFactor, greenRangeFactor, blueRangeFactor);

  var firstgradientPoint = [massiveDecArray[0],massiveDecArray[1],massiveDecArray[2]];
  var nextGradientPoint=[]

  for (var i=0 ; i <= steps ; i++){
    nextGradientPoint[0] = Math.round(firstgradientPoint[0] - i * redRangeFactor);
    nextGradientPoint[1] = Math.round(firstgradientPoint[1] - i * greenRangeFactor);
    nextGradientPoint[2] = Math.round(firstgradientPoint[2] - i * blueRangeFactor);

    gradientArray.push(
    ("0" + nextGradientPoint[0].toString(16).toUpperCase()).slice(-2) +""+
    ("0" + nextGradientPoint[1].toString(16).toUpperCase()).slice(-2) +""+
    ("0" + nextGradientPoint[2].toString(16).toUpperCase()).slice(-2)
    )
  }
  // output
  console.log("Gradient Array:" , gradientArray);
}
