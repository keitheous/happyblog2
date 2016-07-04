console.log("function.js")

// declaring global variable gradientArray to be used throuhout.
var gradientArray=[];

var generateGradient = function(xRGB, yRGB, steps) {

  // breaking user input into massiveHexArray to process
  var massiveHexArray=[xRGB[0]+xRGB[1], xRGB[2]+xRGB[3], xRGB[4]+xRGB[5], yRGB[0]+yRGB[1], yRGB[2]+yRGB[3], yRGB[4]+yRGB[5]] ;
  // turning Hexadecimal into Decimal using parseInt(variable,radix), store in massiveDecArray
  var massiveDecArray = massiveHexArray.map(function(hexNum){
    return parseInt(hexNum, 16);
  })
  // display the two arrays in console
  console.log("Hexadecimal Breakdown:", massiveHexArray);
  console.log("Decimal Breakdown:",massiveDecArray);

  // obtain the range factors between each gradient points for R, G and B.
  var redRangeFactor = Math.round((massiveDecArray[0]-massiveDecArray[3])/steps);
  var greenRangeFactor = Math.round((massiveDecArray[1]-massiveDecArray[4])/steps);
  var blueRangeFactor = Math.round((massiveDecArray[2]-massiveDecArray[5])/steps);
  console.log("Range Factors:", redRangeFactor,greenRangeFactor,blueRangeFactor);

  // store the first RGB input as base gradient point before incrementation
  var gradientPoint = [massiveDecArray[0],massiveDecArray[1],massiveDecArray[2]];

  // apply respective range factors to the first RGB, increment/decrement and push into gradientArray
  for (var i=0 ;i < steps-2 ; i++){
    gradientPoint[0] = gradientPoint[0] - redRangeFactor;
    gradientPoint[1] = gradientPoint[1] - greenRangeFactor;
    gradientPoint[2] = gradientPoint[2] - blueRangeFactor;

    // push R,G&B into array while keeping "_ _" hex format with .toString(radix) and ("0"+variable).slice(-2)
    gradientArray.push(
    ("0" + gradientPoint[0].toString(16).toUpperCase()).slice(-2) +""+
    ("0" + gradientPoint[1].toString(16).toUpperCase()).slice(-2) +""+
    ("0" + gradientPoint[2].toString(16).toUpperCase()).slice(-2)
    )

  }

  // insert first and last (user input) R,G,B into the Array.
  gradientArray.splice(0,0,xRGB);
  gradientArray.splice(gradientArray.length,0,yRGB);
  // output
  console.log("Gradient Array:" , gradientArray);
}
