import { fizzBuzz } from ".";


describe("Else return n", () =>{
  it("Should return 1 for n = 1", ()=> {});
  it("Should return 2 for n = 2", ()=> {
    expect(fizzBuzz(2)).toEqual(2);
    
  });
});

describe("Else return Fizz",()=>{
  it("Should return 'Fizz' for n multiple of 3",() => {
    expect(fizzBuzz(6)).toEqual("Fizz");
  })
  it("Should return 'Fizz' for n = 3",() => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  })

})