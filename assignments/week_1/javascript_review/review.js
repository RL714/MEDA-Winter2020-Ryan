console.log("Hello there!");

let myFirstVariable = 10;
myFirstVariable;

var myFirstGloballyScopedVar = 11;

const masterkey = "http://www.somewebsite.com/data";

const january = 1;
const february = 2; 

if (january ===3) {
    console.log("January is the 3rd month"); 
} else if(february ===2) {
    console.log("February is the 2nd month");
} else {
    console.log("January is NOT the third month"); 
}

if (february === 2) {}

//=== means we are comparing data and datatype 
//1 == "1" this is TRUE
// 1 === "1" this is FALSE, JS will know this is not a number, don't want JS doing things for us, be specific 

while (false) {}

do {} while (false);

for (let i = 0; true; i++) {} 

function myFunction(parameter1, parameter2) {

    console.log(process.agrv);
    console.log(parameter1);

    return "hello";
}

//myFunction (argument1, argument2, argument3);
myFunction ("1", true, 400);

setTimeout(function () {}, 1000);

// Arrow Function, faster alternative of writing the above 
setTimeout((weNeedData) => {console.log(weNeedData); console.log();}, 1000);

settimeout (weNeedData => {
    console.log(weNeedData);
    console.log();
}, 1000);

// Type Coercion
//Is where Javascript converts one datatype to another 
// 100 == "100" // The string will try to be converted to a number.  

console.log(100 =="100");
console.log(100 =="100");

//Type Coercion into Booleans 
//Falseys 
0;
"";
undefined;
NaN; //Does not convert to a boolean meed to use inNan() function.
null; 

parseInt(); //takes the string argument, and converts it to a number
january.toString(); // Takes number from variable or  property and converts to a string. 