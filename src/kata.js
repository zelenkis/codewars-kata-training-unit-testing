"use strict";
exports.__esModule = true;
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.prototype.execute = function (a, b) {
        return a + b;
    };
    /*
      Create a function called shortcut to remove all the lowercase vowels in a given string.
      https://www.codewars.com/kata/5547929140907378f9000039
    */
    Kata.prototype.shortcut = function (str) {
        return str.replace(/[aeiou]/g, '');
    };
    /* Coercion
      Write a function that will compare two values, one will be a number and one will be a string.
      Return true if they are the same character (regardless of their different data types) and return false if they are not.
      To make this challange harder, do not use .toString(), .join(), .split(), parseInt and .Number().
      https://www.codewars.com/kata/57f6ecdfcca6e045d2001207
    */
    Kata.prototype.compare = function (a, b) {
        if (a == b) {
            return true;
        }
        else if (a !== b) {
            return false;
        }
    };
    /*
      You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
      Your function will accept three arguments:
      - The first and Second argument should be numbers.
      - The third argument should represent a sign indicating the operation to perform on these two numbers.
      If the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
      https://www.codewars.com/kata/5810085c533d69f4980001cf
    */
    Kata.prototype.calculator = function (a, b, sign) {
        if (typeof a === "number" && typeof b === "number") {
            switch (sign) {
                case "+":
                    return a + b;
                    break;
                case "-":
                    return a - b;
                    break;
                case "*":
                    return a * b;
                    break;
                case "/":
                    return a / b;
                    break;
                default:
                    return "unknown value";
            }
        }
        else {
            return "unknown value";
        }
    };
    /*
      another solution:
    */
    Kata.prototype.calculator2 = function (a, b, sign) {
        if (sign == "+" || sign == "-" || sign == "*" || sign == "/") {
            return eval(a + sign + b);
        }
        else {
            return "unknown value";
        }
    };
    /*
      Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers
      https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
    */
    Kata.prototype.evenOrOdd = function (int) {
        if (int % 2 === 0) {
            return "Even";
        }
        else {
            return "Odd";
        }
    };
    /*
      write a function that will transform the first array into the second. "a" , "b", "c", "d" are values from first array, mapped to their index
    */
    // public transformArray(arr: string[]): any{
    //   let result = arr.map((el)=>{
    //     let obj:any = {};
    //     obj[el] = arr.indexOf(el)   
    //     }) 
    //     return result;  
    // } 
    /* Write a function that returns the sum of two elements.
    The same function can be called SUM(5, 7); either SUM(5)(7);
    */
    Kata.prototype.avg = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var sum = rest.reduce(function (a, b) {
            return a + b;
        });
        return sum / arguments.length;
    };
    /*
      To complete this Kata you need to make a function multiplyAll which takes an array of integers as an argument.
      This function must return another function, which takes a single integer as an argument and returns a new array.
      The returned array should consist of each of the elements from the first array multiplied by the integer.
      Example:
      multiplyAll([1, 2, 3])(2) = [2, 4, 6];
      You must not mutate the original array.
      https://www.codewars.com/kata/586909e4c66d18dd1800009b
    */
    Kata.prototype.multiplyAll = function (arr) {
        return function (int) {
            return arr.map(function (el) { return el * int; });
        };
    };
    /*
      Return the number (count) of vowels in the given string.
      We will consider a, e, i, o, u as vowels for this Kata (but not y).
      The input string will only consist of lower case letters and/or spaces.
      https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/typescript
    */
    Kata.prototype.getCount = function (str) {
        var result = str.match(/[aeiou]/g);
        return (result == null) ? 0 : result.length;
    };
    return Kata;
}());
exports.Kata = Kata;
