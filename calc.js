const displayb = document.querySelector(".numberDisplay");
let nineb = document.querySelector(".nine");
let eightb = document.querySelector(".eight");
let sevenb = document.querySelector(".seven");
let sixb = document.querySelector(".six");
let fiveb = document.querySelector(".five");
let fourb = document.querySelector(".four");
let threeb = document.querySelector(".three");
let twob = document.querySelector(".two");
let oneb = document.querySelector(".one");
let zerob = document.querySelector(".zero");
let resetb = document.querySelector(".reset");
let addb = document.querySelector(".add");
let multiplyb = document.querySelector(".multiply");
let divideb = document.querySelector(".divide");
let subtractb = document.querySelector(".subtract");
let percentb = document.querySelector(".percent");
let decimalPointb = document.querySelector(".decimalPoint");
let plusMinusb = document.querySelector(".plusMinus");
let equalsb = document.querySelector(".equals");
let input1;
let input2;
let currentDisplay = "0";
/*used as a flag to indicate if the current display is being currently edited
or if it's about to be used in an operation or was recently used in an operation */
let nonInput = true;
/* these operation flags are used to indicate if the button for each has been pressed already so that the operation function knows which operation to do*/
let multiplicationFlag = false;
let additionFlag = false;
let subtractionFlag = false;
let divisionFlag = false;
let percentageFlag = false;
displayb.innerHTML = currentDisplay;
 
//changes the color of the operator element to show which element is active
function checkPressed(){
  if(multiplicationFlag == true){
    multiplyb.style.backgroundColor = "red";
  }
  else if(multiplicationFlag == false){
    multiplyb.style.backgroundColor = "dodgerblue";
  }
  if(divisionFlag == true){
    divideb.style.backgroundColor = "red";
  }
  else if(multiplicationFlag == false){
    divideb.style.backgroundColor = "dodgerblue";
  }
  if(additionFlag == true){
    addb.style.backgroundColor = "red";
  }
  else if(multiplicationFlag == false){
    addb.style.backgroundColor = "dodgerblue";
  }
  if(subtractionFlag == true){
    subtractb.style.backgroundColor = "red";
  }
  else if(multiplicationFlag == false){
    subtractb.style.backgroundColor = "dodgerblue";
  }
  if(percentageFlag == true){
    percentb.style.backgroundColor = "red";
  }
  else if(multiplicationFlag == false){
    percentb.style.backgroundColor = "violet";
  }
};


  
function changeDisplay(a){
  //potential is used for nonInput arguments being passed
  //a is a placeholder for input arguments to be concatenated or changing signs

  let potentialDisplay;
  a = parseFloat(a);
  
  a = a.toString();
  
  
    //if nonInput is true, the current display is being changed and not added to
    if(nonInput == true){
      potentialDisplay = a;
      if(potentialDisplay.length >= 6){
        potentialDisplay = parseFloat(potentialDisplay);
        potentialDisplay = potentialDisplay.toExponential(2);
        potentialDisplay = potentialDisplay.toString();
        console.log(potentialDisplay);
        currentDisplay = potentialDisplay;
      }
      else{
      currentDisplay = potentialDisplay;
      }
    }
    //nonInput being false indicates concatenation 
    else if(nonInput == false){
      if(currentDisplay.length >=6){
        //if the current number being displayed is 6 or greater characters in length
        //it gets converted to exponential form before being displayed
        currentDisplay += a;
        currentDisplay = parseFloat(currentDisplay);
        currentDisplay = currentDisplay.toExponential(2).toString();
        
      }
      else{
        currentDisplay += a;
      }

    }
  
  
    displayb.innerHTML = currentDisplay;
  };


function pickOperation(){
  let operationAnswer;
  if(multiplicationFlag == true){
    operationAnswer = input1 * input2;
    
  }
  else if( additionFlag == true){
    operationAnswer = input1 + input2;
    
  }
  else if(subtractionFlag == true){
    operationAnswer = input1 - input2;
    
  }
  else if(divisionFlag == true){
    operationAnswer = input1/input2;
  }
  else if(percentageFlag == true){
    operationAnswer = input1 * 0.01;
  }
  nonInput = true;
  multiplicationFlag = false;
  divisionFlag = false;
  additionFlag = false;
  subtractionFlag = false;
  percentageFlag = false;
  changeDisplay(operationAnswer);
  
  
};

nineb.addEventListener("click", function() {
  changeDisplay("9");
  nonInput = false;

} );
eightb.addEventListener("click", function() {
  changeDisplay("8");
  nonInput = false;

} );
sevenb.addEventListener("click", function() {
  changeDisplay("7");
  nonInput = false;

} );
sixb.addEventListener("click", function() {
  changeDisplay("6");
  nonInput = false;

} );
fiveb.addEventListener("click", function() {
  changeDisplay("5");
  nonInput = false;

} );
fourb.addEventListener("click", function() {
  changeDisplay("4");
  nonInput = false;

} );
threeb.addEventListener("click", function() {
  changeDisplay("3");
  nonInput = false;

} );
twob.addEventListener("click", function() {
  changeDisplay("2");
  nonInput = false;

} );
oneb.addEventListener("click", function() {
  console.log(nonInput);
  changeDisplay("1");
  nonInput = false;

} );
resetb.addEventListener("click", function() {
    nonInput = true;
    changeDisplay("0");
    multiplicationFlag = false;
    divisionFlag = false;
    additionFlag = false;
    subtractionFlag = false;
    checkPressed();

} );
zerob.addEventListener("click", function() {
    
    
    changeDisplay("0");
    multiplicationFlag = false;
    divisionFlag = false;
    additionFlag = false;
    subtractionFlag = false;
} );
decimalPointb.addEventListener("click", function() {
  console.log(nonInput);
  nonInput = false;
  changeDisplay(".");
  multiplicationFlag = false;
  divisionFlag = false;
  additionFlag = false;
  subtractionFlag = false;
} );


//the event listeners below trigger the respective operation flags 
// to be true 
multiplyb.addEventListener("click", function() {
    //converts the current display to a number from a string
    currentDisplay = parseFloat(currentDisplay);
    //the if else statement helps determine if any of the buttons has been pressed
    if(multiplicationFlag == true || divisionFlag == true ||
       additionFlag == true || subtractionFlag == true || percentageFlag == true){
        
        //if any of the flags are true, the second input is inputted from
         //the current display
        input2 = currentDisplay;
        pickOperation();
        //the new display becomes the first input of the next operation
        currentDisplay = parseFloat(currentDisplay);
        input1 = currentDisplay;
        
    }
    
    else{
      //if none of the flags are tripped, the first input is set from the display
      input1 = currentDisplay;
    }
    nonInput = true;
    multiplicationFlag = true;
    checkPressed();
 
} );

divideb.addEventListener("click", function() {
 
  currentDisplay = parseFloat(currentDisplay);
  if(multiplicationFlag == true || divisionFlag == true ||
     additionFlag == true || subtractionFlag == true || percentageFlag == true){
      input2 = currentDisplay;
      pickOperation();
      currentDisplay = parseFloat(currentDisplay);
      input1 = currentDisplay;
  }
  else{
    input1 = currentDisplay;
  }
  nonInput = true;
  divisionFlag = true;
  checkPressed();

} );

addb.addEventListener("click", function() {
 
  currentDisplay = parseFloat(currentDisplay);
  if(multiplicationFlag == true || divisionFlag == true ||
     additionFlag == true || subtractionFlag == true || percentageFlag == true){
     
      input2 = currentDisplay;
      pickOperation();
      currentDisplay = parseFloat(currentDisplay);
      input1 = currentDisplay;
      
  }
  else{
    input1 = currentDisplay;
  }
  nonInput = true;
  additionFlag = true;
  checkPressed();
} );


subtractb.addEventListener("click", function() {
 
  currentDisplay = parseFloat(currentDisplay);
  if(multiplicationFlag == true || divisionFlag == true ||
     additionFlag == true || subtractionFlag == true || percentageFlag == true){
      
      input2 = currentDisplay;
      pickOperation();
      currentDisplay = parseFloat(currentDisplay);
      input1 = currentDisplay;
      
  }
  else{
    input1 = currentDisplay;
  }
  nonInput = true;
  subtractionFlag = true;
  checkPressed();
} );

equalsb.addEventListener("click", function() {
 
  currentDisplay = parseFloat(currentDisplay);
  if(multiplicationFlag == true || divisionFlag == true ||
     additionFlag == true || subtractionFlag == true || percentageFlag == true){
      
      input2 = currentDisplay;
      pickOperation();
      currentDisplay = parseFloat(currentDisplay);
      input1 = currentDisplay;
      
  }
  
  nonInput = true;
  checkPressed();

  

} );



percentb.addEventListener("click", function() {
  let potentialNumber = parseFloat(currentDisplay);
  potentialNumber = potentialNumber * 0.1;
  nonInput = true;

  if(multiplicationFlag == true || divisionFlag == true ||
    additionFlag == true || subtractionFlag == true || percentageFlag == true){
      input1 = currentDisplay;
      pickOperation();
      currentDisplay = parseFloat(currentDisplay);
      input1 = currentDisplay;
  }
    
  else {
    changeDisplay(potentialNumber);
  }
  checkPressed();
} );

plusMinusb.addEventListener("click", function(){
  currentDisplay = parseFloat(currentDisplay);
  currentDisplay = currentDisplay * -1;
  currentDisplay.toString;
  displayb.innerHTML = currentDisplay;
  nonInput = false;
  multiplicationFlag = false;
  divisionFlag = false;
  additionFlag = false;
  subtractionFlag = false;

})






