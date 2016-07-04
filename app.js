console.log("app.js");
// upon submission, execute the function below
$('#user-input').on('submit', function(event){

  // prevent default, hold value
  event.preventDefault();

  // empty gradientArray upon each submission, declared in function.js
  gradientArray = [];

  // obtain values from form and pass into generateGradient function
  var firstRGB = $('#firstcolor').val();
  var secondRGB = $('#secondcolor').val();
  var numSteps = $('#steps').val();
  generateGradient(firstRGB, secondRGB, numSteps);

  // append divs onto page with id i and css color based on the hexadecimal output
  for (i = 0; i < numSteps ; i++){
    $('.display').append($('<div class="gradient">').attr('id',i).css("background-color","#"+gradientArray[i]));
  }
})
