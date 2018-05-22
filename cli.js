let command = process.argv[2];
let variable = process.argv[3];
let Tv = require("./tv.js");

if(command === "show"){
    let newSearch = new Tv("shows", variable);
    newSearch.findShow();
}
else{
    let newSearch = new Tv("people", variable);
    newSearch.findActor();
}


