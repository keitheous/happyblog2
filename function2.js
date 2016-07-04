console.log("function2.js");

var gradientArray=[];
var generateGradient = function(xRGB, yRGB, steps) {
  var massiveHexArray=[xRGB[0]+xRGB[1], xRGB[2]+xRGB[3], xRGB[4]+xRGB[5], yRGB[0]+yRGB[1], yRGB[2]+yRGB[3], yRGB[4]+yRGB[5]] ;
  var massiveDecArray = massiveHexArray.map(function(hexNum){
    return parseInt(hexNum, 16);
  })

  var redRangeFactor = Math.round((massiveDecArray[0]-massiveDecArray[3])/steps);
  var greenRangeFactor = Math.round((massiveDecArray[1]-massiveDecArray[4])/steps);
  var blueRangeFactor = Math.round((massiveDecArray[2]-massiveDecArray[5])/steps);
  var gradientPoint = [massiveDecArray[0],massiveDecArray[1],massiveDecArray[2]];

  for (var i=0 ;i < steps-2 ; i++){
    gradientPoint[0] = gradientPoint[0] - redRangeFactor;
    gradientPoint[1] = gradientPoint[1] - greenRangeFactor;
    gradientPoint[2] = gradientPoint[2] - blueRangeFactor;
    gradientArray.push(
    ("0" + gradientPoint[0].toString(16).toUpperCase()).slice(-2) +""+
    ("0" + gradientPoint[1].toString(16).toUpperCase()).slice(-2) +""+
    ("0" + gradientPoint[2].toString(16).toUpperCase()).slice(-2)
    )
  }
  gradientArray.splice(0,0,xRGB);
  gradientArray.splice(gradientArray.length,0,yRGB);
  
  console.log("Gradient Array:" , gradientArray);
}
