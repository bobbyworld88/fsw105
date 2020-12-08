//Return the sum
function sum(num1, num2) {
    return num1 + num2;
  }
  var result = sum(4, 8);
  console.log(result);
  
  //Three numbers returns largest
  var numbers = [3, 10, 44, 56, 88];
  var largestNumber = (values) => {
    var highest = 0;
    for (var i = 0; i < values.length; i += 1) {
      if (values[i] > highest) {
        highest = values[i];
      }
    }
    return highest;
  };
  
  console.log(largestNumber(numbers));
  
  //Returns Even or Odd
  function isEven(number) {
    return number % 2 === 0;
  }
  var result1 = isEven(8);
  console.log(result1);
  
  
  
  const str = "Mozilla is the best site for me";
  
  function concatString(str) {
    if (str.length > 20) {
      // Get the length of the string
      let stringLength = str.length;
  
      console.log("Length of string =", stringLength);
  
      // Get half of the string length, divide by 2 to get half!
      let halfString = stringLength / 2;
  
      console.log("Half of string =", halfString);
  
      // Slice start at first index, ends with halfString
      console.log(str.substring(0, halfString));
      str = str.substring(0, halfString);
    } else {
      //
      str = str.concat(str);
      console.log(str);
    }
    return str;
  }
  
  concatString(str);