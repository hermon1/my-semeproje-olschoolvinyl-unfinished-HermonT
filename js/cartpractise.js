window.localStorage.setItem("first value", "ahhahaha");

localStorage.setItem("second value aka key", "sjkxaskx" );

localStorage.removeItem("second value aka key");

localStorage.clearAll();

//Can only store variables 
//gottat stringify array than save it

var colours = ["red", "blue", "black"];


localStorage.setItem("colours", JSON.stringify(colours));

//get the stringified colour

var myCoulers = localStorage.getItem("colours");

//its still a string so i have to use parse

var myParseColours =localStorage.getItem(JSON.parse("myCoulers"));

//JSON.stringify to save the array or object

//JSON.parse to retrive the array or object
