"use strict";
exports.__esModule = true;
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.prototype.execute = function (a, b) {
        return a + b;
    };
    Kata.prototype.shortcut = function (str) {
        return str.replace(/[aeiou]/g, '');
    };
    Kata.prototype.compare = function (a, b) {
        if (a == b) {
            return true;
        }
        else if (a !== b) {
            return false;
        }
    };
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
    Kata.prototype.calculator2 = function (a, b, sign) {
        if (typeof a === "number" && typeof b === "number" && sign == "+" || sign == "-" || sign == "*" || sign == "/") {
            return eval(a + sign + b);
        }
        else {
            return "unknown value";
        }
    };
    Kata.prototype.evenOrOdd = function (int) {
        if (int % 2 === 0) {
            return "Even";
        }
        else {
            return "Odd";
        }
    };
    //write a function that will transform the first array into the second. "a" , "b", "c", "d" are values from first array, mapped to their index
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
    */
    Kata.prototype.multiplyAll = function (arr) {
        return function (int) {
            return arr.map(function (el) { return el * int; });
        };
    };
    return Kata;
}());
exports.Kata = Kata;
