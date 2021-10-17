const sum = function (a, b) {
  // TODO: Your code here
  return a + b;
};

sum(5, 10); // => 15
sum(15, 10); // => 25

const average = function (a, b) {
  // TODO: Your code here
  let result = (a + b) / 2;
  return result;
};

average(20, 5); // => 12.5
average(10, 20); // => 15

/*  
   5! = 5 * 4 * 3 * 2 * 1
 */

const findFactorial = function (num) {
  // YOUR CODE HERE
  let result = num;
  for (let i = 1;  i< num ; i++) {
    result *= i ;
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

    const round = function (number) {
        // TODO: Your code here
        let result = Math.round(number);
        return result;
      };
      
      round(5); // => 5
      round(2.4); // => 2
      round(0.8); // => 1
      round(1.7); // => 12


      const toThePowerOf = function (base, exponent) {
        // TODO: Your code here
        let result = Math.pow(base,exponent);
        return result;
      };
      
      toThePowerOf(2, 2); // => 4
      toThePowerOf(2, 3); // => 8
      toThePowerOf(9, 2); // => 81


      const randomNumber = function () {
        // TODO: Your code here
        
        let result = Math.random();
        return result;
      };
      
      randomNumber(); // => 0.5052417714491793
      randomNumber(); // => 0.32678224417562673
      randomNumber(); // => 0.43265697184952523


      const oneOrZero = function () {
        // TODO: Your code here
        let result = Math.round(Math.random()); // random btw range 0 and 1 and round method will return the nearest integer.
        return result;
      };
      
      oneOrZero(); // => 1
      oneOrZero(); // => 1
      oneOrZero(); // => 0


      const randomRange = function (number) {
        // TODO: Your code here
        return Math.random() * (number);
      };
      
      // 10 and 0 are included
      randomRange(10); // => 10
      randomRange(10); // => 7
      randomRange(10); // => 1
      randomRange(10); // => 0

      const includeOf = function (string, character) {
         
        return  string.includes(character);
        // TODO: Your code here
       };


       const addToArray = function (array, string) {
        // TODO: Your code here
        array.push(string);
        return array;
      };
      
      addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
       
      
      //2
      const convertToString = function (array) {
        // TODO: Your code here
        let str =array.join(" ");
        return str;
      };
      
      convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
      convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"



      //3

      //4
      //5
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
  