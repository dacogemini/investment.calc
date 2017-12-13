
// VARIABLES
var investment = 10000;
var rate = 7;
var years = 1;
var futureValue = investment;

// FOR LOOP -- 
for (i = 1; i <= years; i++) {
  futureValue = futureValue + (futureValue * rate/100);
}

alert(futureValue);
console.log(futureValue);
