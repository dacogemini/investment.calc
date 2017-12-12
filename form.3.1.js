// Ask for Name in Pop-Up
var yourName=prompt("What is your Name?");
if (yourName !=null){ // If NAME is Not = to Nothing or if a NAME is entered
  document.getElementById("sayHello").innerHTML = "Hello" + "\xa0" + yourName + "\xa0" + "Please Sign In";
} else {
  alert("Please Enter a Name");
}