//function
//1
const sum = function (a, b) {
  // TODO: Your code here
  return a + b;
};

sum(5, 10); // => 15
sum(15, 10); // => 25

//2
const average = function (a, b) {
  // TODO: Your code here
  let result = (a + b) / 2;
  return result;
};

average(20, 5); // => 12.5
average(10, 20); // => 15

//3
/*  
   5! = 5 * 4 * 3 * 2 * 1
 */

const findFactorial = function (num) {
  // YOUR CODE HERE
  let result = num;
  for (let i = 1; i < num; i++) {
    result *= i;
  }
  return result;
};

/*
    Examples:
    findFactorial(1) // => 1
    findFactorial(3) // => 6
    findFactorial(4) // => 24
    findFactorial(6) // => 720
    findFactorial(11) // => 39916800
    */

//4
const round = function (number) {
  // TODO: Your code here
  let result = Math.round(number);
  return result;
};

round(5); // => 5
round(2.4); // => 2
round(0.8); // => 1
round(1.7); // => 12

//5
const toThePowerOf = function (base, exponent) {
  // TODO: Your code here
  let result = Math.pow(base, exponent);
  return result;
};

toThePowerOf(2, 2); // => 4
toThePowerOf(2, 3); // => 8
toThePowerOf(9, 2); // => 81

//6
const randomNumber = function () {
  // TODO: Your code here

  let result = Math.random();
  return result;
};

randomNumber(); // => 0.5052417714491793
randomNumber(); // => 0.32678224417562673
randomNumber(); // => 0.43265697184952523

//7
const oneOrZero = function () {
  // TODO: Your code here
  let result = Math.round(Math.random()); // random btw range 0 and 1 and round method will return the nearest integer.
  return result;
};

oneOrZero(); // => 1
oneOrZero(); // => 1
oneOrZero(); // => 0

//8
const randomRange = function (number) {
  // TODO: Your code here
  let result = Math.random() * number;
  return Math.round(result);
};

// 10 and 0 are included
randomRange(10); // => 10
randomRange(10); // => 7
randomRange(10); // => 1
randomRange(10); // => 0

//9
const includeOf = function (string, character) {
  return string.includes(character);
  // TODO: Your code here
};

// Array
//1
const addToArray = function (array, string) {
  // TODO: Your code here
  array.push(string);
  return array;
};

addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]

//2
const convertToString = function (array) {
  // TODO: Your code here
  let str = array.join(" ");
  return str;
};

convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"

//3
// the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, index, value) {
  // TODO: Your code here
  if (array.length <= index) {
    return "there is no element to updated in this index";
  } else {
    array[index] = value;
    return array;
  }
};

updateOrCreate([10, 20, 30], 3, 50); // => "there is no element to updated in this index"
updateOrCreate([1, 2, 3], 0, 10); // => [10, 2, 3]
updateOrCreate([1, 2, 3], 1, 10); // => [1, 10, 3]
//4
const onlyString = function (array) {
  // TODO: Your code here
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === typeof "") {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]
onlyString([10, 20, 30, 40, 50, 60, false]); // => []

//5
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
  ["suha", "1234"],
];

const login = function (username, password) {
  // TODO: Your code here

  for (let i = 0; i < users.length; i++) {
    if (users[i][0] == username && users[i][1] == password) {
      return "Login Successful";
    }
  }
  return "Login Failed";
};

login("Jane", "123456"); // => "Login Successful"
login("Jane", "5321"); // => "Login Failed"
login("suha", "1234"); // => "Login Successful"
login("admin", "abc123");

//6
const maximumNumber = function (numbers) {
  // TODO: Your code here
  let result = Math.max(...numbers);
  return result;
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
maximumNumber([0, 5, 6]); // => 6

//7
const reversString = function (string) {
  // TODO: Your code here
  let split = string.split(""); //spilt sting into array
  let reversArr = split.reverse(); //revers array value
  let str = reversArr.join("");
  return str;
};

reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"
