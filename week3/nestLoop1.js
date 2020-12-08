var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
  
    }
  ];
  
  //Loop #1
  function areYouOldEnough(){
    for(i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is OLD Enough! ");
      }
      else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT OLD enough! ");
  
      }
      
  
    }
  }
  areYouOldEnough();
  
  //Loop #2
  function whoIsOldEnough(){
    for(i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is OLD enough!");
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name + " is NOT OLD enough to see Mad Max! ");
    }
  }
  }
  
  whoIsOldEnough();
  
  //Loop #3
  function accessControlList(){
    for(i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[1].name + " is OLD enough SHE'S good to see Mad Max Fury Road");
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT OLD enough to see Mad Max! ");
    }
  }
  }
  
  accessControlList();
  
  //Loop #4
  function oddOrEven(){
    for (i = 0; i < 100; i++){
      console.log([i]);
    }
  
  }
  oddOrEven();