//Return new array 5 or greater
function fiveAndGreater(arr) {
    const result = arr.filter(function (num) {
      if (num >= 5) {
        return true;
      }
    });
    return result;
  }
  console.log(fiveAndGreater([3, 6, 8, 2]));
  console.log("----------");
  
  //Return new array that is on even numbers
  function onlyEven(arr) {
    const result = arr.filter(function (num) {
      if (num % 2 === 0) {
        return true;
      }
    });
    return result;
  }
  console.log(onlyEven([3, 6, 8, 2]));
  console.log("----------");
  
  //Extra Credit: Who is old enough to see "The Matrix"
  // function ofAge(arr) {
  //   const result = arr.filter(function(arr){
  //     if (arr > 18){
  //       return true;
  //     }
  //   });
  //   return result;
  // }
    
  // console.log(
  //   ofAge([
  //     { name: "Angelin Jolie", age: 80},
  //     { name: "Eric Jones", age: 2},
  //     { name: "Paris Hilton", age: 5},
  //     { name: "Kanye West", age: 16},
  //     { name: "Bob Ziroll", age: 100},
  //   ])
  // );
  
  //Section B
  //Make array of numbersthat are doubled
  function doubleNumbers(arr){
    const results = arr.map(item => item * 2);
    return results
  }
  
  console.log(doubleNumbers([2, 5, 100]))
  console.log("----------");
  
  //Take array of numbers and make them strings
  function stringItUp(arr){
    const results = arr.map(Number);
    return results
  
  }
  console.log(stringItUp([2, 5, 100]))
  console.log("----------");
  
  //Capitalize names
  // function capitalizeNames(arr){
  //     return arr.map()
  //   }
  //   let upp
  //   // const result = arr.map(function(toUpper){
  //   //   return x.to
    
     
  // }
  
  // console.log(capitalizeNames(['john', 'JACOB', " jinGleHeimer", "schmidt"]));
  // console.log("----------");
  
  
  //Section C
  //Turn array of numbers to total
  function total(arr) {
    return arr.reduce((a, b) => a + b, 0);
  
  
  }
  
  console.log(total([1,2,3]))
  console.log("----------")
  
  //Turn array of numbers to long string
  function stringConcat(arr) {}
  //   const result = arr.reduce(function(accumulator, currentValue, index, array);
    
  //   // arr.reduce(function (accumulator, icurrentValue) {
  //   //   return arr + ' ';
  
  // })}
  
  
  // console.log(stringConcat([1,2,3]))
  
  //Array of voters count how many poeple voted
  // function totalVotes(arr) {
  //   let result = arr.filter(function(voters){
  //     return voters !==true;
  //   }).reduce(function(item,cur){
  //     return [(+item),+(+cur)];
  //   },[0]);}
  
  // }
  
  // let voters = [
  //   {name: "Bob", age:30, voted: true},
  //   {name: "Jake", age:32, voted: true},
  //   {name: "Kate", age:25, voted: false},
  //   {name: "Sam", age:20, voted: false},
  //   {name: "Phil", age:21, voted: true},
  //   {name: "Ed", age:55, voted: true},
  //   {name: "Tami", age:54, voted: true},
  //   {name: "Mary", age:31, voted: false},
  //   {name: "Becky", age:43, voted: false},
  //   {name: "Joey", age:41, voted: true},
  //   {name: "Jeff", age:30, voted: true},
  //   {name: "Zack", age:19, voted: false}
  
  // ];
  
  // console.log(totalVotes(voters));
  
  //Section D
  //Sort array smallest to largest
  // function leastToGreatest(arr){
  //   let result = arr.sort(function(a,b) {
  //     return a-b
  //   })
  
  // }
  // }
  // console.log(leastToGreatest([1, 3, 5, 2, 90, 20,]));