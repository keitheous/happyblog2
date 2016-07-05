console.log("function.js")

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
  var redRangeFactor = (massiveDecArray[0]-massiveDecArray[3])/steps;
  var greenRangeFactor = (massiveDecArray[1]-massiveDecArray[4])/steps;
  var blueRangeFactor = (massiveDecArray[2]-massiveDecArray[5])/steps;
  console.log("Range Factors:", redRangeFactor, greenRangeFactor, blueRangeFactor);

  // first gradientPoint
  var firstgradientPoint = [massiveDecArray[0],massiveDecArray[1],massiveDecArray[2]];
  // empty nextGradientPoint Array for iteration & storage.
  var nextGradientPoint=[]

  for (var i=0 ; i <= steps ; i++){
    //iterate from i = 0 to i = steps and apply RangeFactor to R, G, B based on i
    nextGradientPoint[0] = Math.round(firstgradientPoint[0] - i * redRangeFactor);
    nextGradientPoint[1] = Math.round(firstgradientPoint[1] - i * greenRangeFactor);
    nextGradientPoint[2] = Math.round(firstgradientPoint[2] - i * blueRangeFactor);

    // push R,G&B into array while keeping "_ _" hex format with .toString(radix) and ("0"+variable).slice(-2)
    gradientArray.push(
    ("0" + nextGradientPoint[0].toString(16).toUpperCase()).slice(-2) +""+
    ("0" + nextGradientPoint[1].toString(16).toUpperCase()).slice(-2) +""+
    ("0" + nextGradientPoint[2].toString(16).toUpperCase()).slice(-2)
    )
  }
  // output
  console.log("Gradient Array:" , gradientArray);
}
