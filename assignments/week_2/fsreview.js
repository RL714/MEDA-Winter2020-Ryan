const fs = require ("fs");

let contents = fs.readFileSync("smallessay.txt", "utf-8"); 

fs.writeFileSync("example2.text", "this is some text.", "utf-u");

fs.existsSync("example.txt"); // returns true because the file exists in the folder 

fs.readFile ("smallessay.txt", "utf-8", (error, text) => {
    if (error) {
        console.log("we have an error!", error message) 
    }
}
} else

(text) => {
  //  console.log("Done!");
}); //Asynchronous version



console.log ("program done!"); 