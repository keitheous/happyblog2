console.log("app.js");
$('#user-input').on('submit', function(event){
  event.preventDefault();
  var firstRGB = $('#firstcolor').val();
  var secondRGB = $('#secondcolor').val();
  var numSteps = $('#steps').val();
  generateGradient(firstRGB, secondRGB, numSteps);
  for (i = 0; i < numSteps-1; i++){
    console.log(decGradient[i])
    $('.display').append($('<div class="gradient">').css("background-color","#"+decGradient[i]));
  }
})
