var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1. Remove last item from veggie array
vegetables.pop();
console.log(vegetables);

//2.Remove first item from the fruit array
fruit.shift("orange");
console.log(fruit);

// //3.Index of orange
var index = fruit.findIndex((fruit) => fruit === "watermelon");
console.log(index);

//4. add number to end of array
fruit.push(1);
console.log(fruit);

//5.Get Length of veggies
console.log(vegetables.length);

//6.Add number to end of veggie array
vegetables.push(3);
console.log(vegetables);

//7.
var food = fruit.concat(vegetables);
console.log(food);

//8. remove two items starting at index 4
food.splice(4, 2);
console.log(food);

//9. reverse array
food.reverse();
console.log(food);

//10. Turn array into a string
var foodList = "newArray";
var splitList = foodList.split("");
var joinedName = splitList.join("");
console.log(joinedName);