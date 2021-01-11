export function fizzbuzz(n: number): string {
  let result: string = "";

  if (isMultipleOf(3)(n)) {
    result += "Fizz";
  }

  if (isMultipleOf(5)(n)) {
    result += "Buzz";
  }

  return result || "" + n;
}

function isMultipleOf(m: number) {
  return function(n: number): boolean {
    return n % m === 0;
  };
}