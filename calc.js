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
let multiplyFlag = false;
let additionFlag = false;
let subtractionFlag = false;
let divisionFlag = false;
displayb.innerHTML = currentDisplay;



  
function changeDisplay(a){
  //if statement to limit the length of the display by limiting the string length
  if(currentDisplay.length < 8 || nonInput == true){
  a = a.toString();
  if(nonInput == true){
  currentDisplay = a;
  
  }
  else if(nonInput == false){
    if(currentDisplay.includes(".") == false && a == "."){
    currentDisplay += a;
    }
    else if(a != "."){
      currentDisplay += a;
    }
    
    nonInput = false;
  }


  
  displayb.innerHTML = currentDisplay;
}
  
  };


function pickOperation(){
  let operationAnswer;
  if(multiplyFlag == true){operationAnswer = input1 * input2;
    
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
  changeDisplay(operationAnswer);
  
  
}

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
    changeDisplay(0);
    multiplyFlag = false;
    divisionFlag = false;
    additionFlag = false;
    subtractionFlag = false;
  

} );
zerob.addEventListener("click", function() {
    
    
    changeDisplay("0");
    multiplyFlag = false;
    divisionFlag = false;
    additionFlag = false;
    subtractionFlag = false;
} );
decimalPointb.addEventListener("click", function() {
  console.log(nonInput);
  nonInput = false;
  changeDisplay(".");
  multiplyFlag = false;
  divisionFlag = false;
  additionFlag = false;
  subtractionFlag = false;
} );




