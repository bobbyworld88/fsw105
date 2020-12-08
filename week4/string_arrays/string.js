//String in caps followed lower case
var greetCase = "Hello";
var str1 = greetCase.toUpperCase();
var str2 = greetCase.toLowerCase();
var result = str1.concat(str2);

console.log(result);

//Returns a number half the length, and rounded down.
function check(string) {
  let x;
  if (string.length % 2 == 0) {
    x = (string.length / 2);
  } else {
    x = (string.length / 2) - 1;
  }
  const string2 = string.substring(0, x);
  var result = Math.round(string2.length);
  return result;
}
var halfNum = check('RobertYoung');

//Use slice function that returns first half of string.
function first_half (str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(first_half("HelloWorld"));

//Return first half capitolized second half lowercased
var stringOne = "Hello World";
var res1 = stringOne.substring(0, 5).toUpperCase();
var res2 = stringOne.substring(5, 11).toLowerCase();
var answer = res1 + res2;
return answer;