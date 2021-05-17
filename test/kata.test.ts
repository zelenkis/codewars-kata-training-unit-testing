import { Kata } from '../src';

describe('Kata scenarios', () => {
  it('should create instance', () => {
    const sut = new Kata();
  }); //instantiates the clasa - basic test

  it('should execute', () => {
    const sut = new Kata();
    const actual = sut.execute('something', 2);
  });


  it('should remove lowercase vowels', () =>{
    const sut = new Kata();
    const actual = sut.shortcut('codEwars');
    expect(actual).toBe('cdEwrs');
  })

  it('should return true if true', () =>{
    const sut = new Kata();
    const test1 = sut.compare('2', 2);
    expect(test1).toBe(true);
    const test2 = sut.compare('2', 4);
    expect(test2).toBe(false);

  })

  it('should test calculator', () =>{
    const sut = new Kata();
    const test1 = sut.calculator(2,2,"+");
    expect(test1).toBe(4);
    const test2 = sut.calculator(2,2,"-");
    expect(test2).toBe(0);
    const test3 = sut.calculator(2,3,"*");
    expect(test3).toBe(6);
    const test4 = sut.calculator(2,2,"/");
    expect(test4).toBe(1);
    const test5 = sut.calculator(2,2,"n");
    expect(test5).toBe("unknown value");
    const test6 = sut.calculator(2,"2","n");
    expect(test6).toBe("unknown value");
    
  })

  it('should test calculator2', () =>{
    const sut = new Kata();
    const test1 = sut.calculator2(2,2,"+");
    expect(test1).toBe(4);
    const test2 = sut.calculator2(2,2,"-");
    expect(test2).toBe(0);
    const test3 = sut.calculator2(2,3,"*");
    expect(test3).toBe(6);
    const test4 = sut.calculator2(2,2,"/");
    expect(test4).toBe(1);
    const test5 = sut.calculator2(2,2,"n");
    expect(test5).toBe("unknown value");
    const test6 = sut.calculator2(2,"2","n");
    expect(test6).toBe("unknown value");
    
  })

  it('should return odd if input is odd number or even if input is even number', () =>{
    const sut = new Kata();
    const testOdd = sut.evenOrOdd(1);
    expect(testOdd).toBe("Odd");

    const testEven = sut.evenOrOdd(4);
    expect(testEven).toBe("Even");
  })

  // it('should return the new array', ()=>{
  //   const sut = new Kata();
  //   const test1 = sut.transformArray(["a", "b", "c","d"]);
  //   expect(test1).toBe([{a:0}, {b:1}, {c:2}, {d:3}])
  // })

  it('should show average number', ()=>{
    const sut = new Kata();
    const testAvg1 = sut.avg(2,2,2,2);
    expect(testAvg1).toBe(2);
    const testAvg2 = sut.avg(2,2,2,2,2,2,2,2);
    expect(testAvg2).toBe(2);
    const testAvg3 = sut.avg(2,2);
    expect(testAvg3).toBe(2);
  })


  it('should return an array with values multiplied with the integer provided in second function call', ()=>{
    const sut= new Kata();
    const testMultiplyAll = sut.multiplyAll([1, 2, 3])(2);
    expect(testMultiplyAll).toStrictEqual([2, 4, 6]);

    const testMultiplyAll2 = sut.multiplyAll([1, 2, 3])(0);
    expect(testMultiplyAll2).toStrictEqual([0, 0, 0]);
    
  })
  // it('should not return null', () => {
  //   const sut = new Kata();

  //   const actual = sut.execute('something', 2);

  //   expect(actual).not.toBeNull();
  // });

  // it('should return expected result', () => {
  //   const sut = new Kata();

  //   const actual = sut.execute('something', 2);

  //   expect(actual).toBe('something2');
  // });
});

