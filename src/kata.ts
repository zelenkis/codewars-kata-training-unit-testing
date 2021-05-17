import { resourceLimits } from "worker_threads";

export class Kata {
  public execute(a: string, b: number): any {
    return a + b;
  }

  public shortcut(str: string): string{
    return str.replace(/[aeiou]/g, '');
  }
 
  public compare(a: any, b: any): boolean{
    if(a == b){
        return true;
      } else if (a !== b){
        return false;
    }
  }

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

  public calculator2(a:any,b:any, sign:any): any{
    if (typeof a === "number" && typeof b === "number" && sign == "+" || sign == "-" || sign == "*" || sign == "/"){
      return eval(a+sign+b);
      } else {
      return "unknown value";
    }
  }

  public evenOrOdd(int: number): string{

    if(int % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

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
 

 public avg(...rest:number[]):number {
   let sum = rest.reduce( (a, b) => {
        return a + b;
    })    
    return sum / arguments.length;
  }

  /*
    To complete this Kata you need to make a function multiplyAll which takes an array of integers as an argument. 
    This function must return another function, which takes a single integer as an argument and returns a new array.
    The returned array should consist of each of the elements from the first array multiplied by the integer.
    Example:
    multiplyAll([1, 2, 3])(2) = [2, 4, 6];
    You must not mutate the original array.
  */

    public multiplyAll(arr:number[]):any{
      return function(int:number){
        return arr.map(el => el * int);
      }
    }
}


