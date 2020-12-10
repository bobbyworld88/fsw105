//Preliminaries//

 if(5 > 3){
   console.log("is greater than");
  
}

 if ("cat".length === 3){
   console.log("is the length");
  }

  if ("cat" === "dog"){
   console.log("true");
}

  else{
    console.log("not the same");
  }

//Bronze Medal//

const person = {
    name: "Bobby",
    age: 18,
}

//Are you old enough for the movies//

if (person >= 18 ) {
    console.log(`${person.name} is allowed to go to the movie if they are old enough`);
}

else {
    console.log(`${person.name} is not allowed to go to the movie since they are not old enough`);
}


//Only allow names that start with "B"//

const firstLetter = "Bobby";
 console.log(firstLetter.charAt(0));

//Only allow name that starts with "B" and they are older than 18//

if (person.age = 18 && firstLetter) {
    console.log(`${person.name} is allowed into the movies because his name starts with a ${firstLetter.charAt(0)}`);
}

else {
    console.log("ERROR 54");
}

//Silver Medal//

// if / else if / else problem//

if (1 === 1) {
    console.log("strict");
}

else if ("1" == 1){ 
    console.log("loose");
}

else if (1 == "1") {
    console.log("abstract");
}

else {
    console.log("not equal at all");
}

// 

if (1 <= 2 && 2 === 4) {
    console.log("yes");
}

else {
    console.log("no");
}
