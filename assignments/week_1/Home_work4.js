// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    //This runs the function and multiples the two variables to create a product
    let product = option * option2;

    // This prints out the product of the equation of the given variables 
    console.log(product);

       //This prints out the option parameters of the respective variables. 
    console.log("The value of the option parameter is " + option);

    //if the option equals zero, "Everything is good will be the result and there will be no problem with the output 
    if (option === 0) {
        
          //this will effect the eventual end of the function 
        return "Everything is good!";
    //if it does not equal zero and equals 1 though, it will report that an error has occured
    } else if (option === 1) {
        
          //if the option is equal to 1, the below will be returned later in the code and lead to Catastrophic failre
        return "An error happened!";
       //If the above "else if" doesn't get to the bottom of things, this will be the next prompt 
    } else if (option === -1) {
        
        //There does not appear to be any specific outcome that comes from this condition 
        return "Everything is bad!";
    }

}
//Calculates the results of the function, parameters of option1 times option2 
let result = myFunction(1, 11);
//This calculates the same as above with different variables 
let result2 = myFunction(2, 200);

//Prints out catastrophic failure if both the prior conditions are met for either of the two function inputs. 
if ( result === "An error happened" && result2 === "An error happened") {

//If the above condition is met, then this message will be printed out. 
  console.log("Catastrophic failure.");

}

// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
//function myFunction(option, option2) {

    
    //let product = option * option2;

    
    //console.log(product);

 
    //console.log("The value of the option parameter is " + option1);

    
    //if (option === 0) {
        
      
      //  return "Everything is good!";
   
    //} else if (option === 1) {
        
      
      //  return "An error happened!";
 
    //} else if (option === -1) {
        
        //If 
      //  return "Everything is bad!";
    //}

//}


//let result = myFunction(1, 11); 
//let result2 = myFunction(2, 200);

//
//if ( result === "An error happened" && result2 === "An error happened") {

    
  //  console.log("Catastrophic failure.");

//}