$( document ).ready(function(){
    //create a variable that creates the random target number the players shoots for between 19-120
    var Random=Math.floor(Math.random()*101+19)
   
    //put the created random number in a place the user can see, want to text not append so we dont get a stack of numbers
    $('#randomNumber').text(Random);
    //create the random numbers each 'gem' will add between 1-12.
    var blueGemNum= Math.floor(Math.random()*11+1)
    var greenGemNum= Math.floor(Math.random()*11+1)
    var redGemNum= Math.floor(Math.random()*11+1)
    var yellowGemnum= Math.floor(Math.random()*11+1)
    //variables for the score/win lose ect.
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
  
    //add the variables into the dom for the user to see

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);


  //function to restart the game when a win or loss happens
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        blueGemNum= Math.floor(Math.random()*11+1);
        greenGemNum= Math.floor(Math.random()*11+1);
        redGemNum= Math.floor(Math.random()*11+1);
        yellowGemnum= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //function for if user matches number
  function winning(){
  alert("congrats!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //function for if user fails to win
  function losing(){
  alert ("Try again!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //click functions for gems
    $('#blueGem').on ('click', function(){
      userTotal = userTotal + blueGemNum;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            winning();
          }
          else if ( userTotal > Random){
            losing();
          }   
    })  
    $('#greenGem').on ('click', function(){
      userTotal = userTotal + greenGemNum;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winning();
          }
          else if ( userTotal > Random){
            losing();
          } 
    })  
    $('#redGem').on ('click', function(){
      userTotal = userTotal + redGemNum;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == Random){
            winning();
          }
          else if ( userTotal > Random){
            losing();
          } 
    })  
    $('#yellowGem').on ('click', function(){
      userTotal = userTotal + yellowGemnum;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winning();
          }
          else if ( userTotal > Random){
            losing();
          }
    });   
  });