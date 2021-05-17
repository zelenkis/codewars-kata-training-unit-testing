import { resourceLimits } from "worker_threads";

export class Kata {
  // test method:
    public execute(a: string, b: number): any {
      return a + b;
    }

  /* 1.
    Create a function called shortcut to remove all the lowercase vowels in a given string.
    https://www.codewars.com/kata/5547929140907378f9000039
  */

    public shortcut(str: string): string{
      return str.replace(/[aeiou]/g, '');
    }

  /* 2.
    Coercion
    Write a function that will compare two values, one will be a number and one will be a string. 
    Return true if they are the same character (regardless of their different data types) and return false if they are not.
    To make this challange harder, do not use .toString(), .join(), .split(), parseInt and .Number().
    https://www.codewars.com/kata/57f6ecdfcca6e045d2001207
  */

    public compare(a: any, b: any): boolean{
      if(a == b){
          return true;
        } else if (a !== b){
          return false;
      }
    }

  /* 3.
    Create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
    Your function will accept three arguments: 
    - The first and second argument should be numbers.
    - The third argument should represent a sign indicating the operation to perform on these two numbers.
    If the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
    https://www.codewars.com/kata/5810085c533d69f4980001cf
  */

    public calculator(a:any,b:any, sign:string): any{
      if (typeof a === "number" && typeof b === "number"){
        switch(sign) {
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
            return "unknown value"
        } 
          
      } else {
        return "unknown value"
      } 
    }

  /*
    Another solution:
  */

    public calculator2(a:number,b:number, sign:string): any {
      if (sign == "+" || sign == "-" || sign == "*" || sign == "/"){
        return eval(a+sign+b);
        } else {
        return "unknown value";
      }
    }

  /* 4.
    Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers
    https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
  */

    public evenOrOdd(int: number): string{
      if(int % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }

  /* 5. 
    [[Task from a test]]
    Write a function that returns the average of many numbers passed as arguements.
  */

    public avg(...rest:number[]):number {
      let sum = rest.reduce( (a, b) => {
            return a + b;
        })    
        return sum / arguments.length;
    }

  /* 6.
    Create a function multiplyAll which takes an array of integers as an argument. 
    This function must return another function, which takes a single integer as an argument and returns a new array.
    The returned array should consist of each of the elements from the first array multiplied by the integer.
    Example:
    multiplyAll([1, 2, 3])(2) = [2, 4, 6];
    You must not mutate the original array.
    https://www.codewars.com/kata/586909e4c66d18dd1800009b
  */

    public multiplyAll(arr:number[]):any{
      return function(int:number){
        return arr.map(el => el * int);
      }
    }

  /* 7.
    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).
    The input string will only consist of lower case letters and/or spaces.
    https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/typescript
  */

    public getCount(str:string):number {
      const result = str.match(/[aeiou]/g);
      return (result == null ) ? 0 : result.length;      
    }

  /* 8.
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    Implement a function that determines whether a string that contains only letters is an isogram. 
    Assume the empty string is an isogram. Ignore letter case.
      isIsogram "Dermatoglyphics" == true
      isIsogram "aba" == false
      isIsogram "moOse" == false -- ignore letter case
      https://www.codewars.com/kata/54ba84be607a92aa900000f1
  */

    public isIsogram(str:string):boolean{
      //...
      return true;
    }


  /* 9. 
    [[Task from a test: ]]
    Having the code listed below, write down code that will output only truthy values:
    const arr = [1, 0, 10, '0', '1', NaN, false, null, undefined, 'false', 'true'];

    //my old solution:
    const falsy = [false, null, undefined, 0, NaN, '', "", ``];
    let notFalsyNumbers = function(element) {
        return !falsy.includes(element);
    }
    const newArr = arr.filter(notFalsyNumbers);
  */

      public getOnlyTruthyNumbers(){
        //...
      }

  /* 10.
    [[Task from a test]]
    Write a function that returns the sum of two elements. 
    The same function can be called SUM(5, 7); either SUM(5)(7);
  */

      
}


