console.log('hello');

for (let i = 2; i <= 10; i += 2) {
    console.log(`${i}`);
}
// let a = 0;
// console.log(a + 2)


function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
evenArr = arr.filter((i) => i % 2 === 0);
console.log(`only Even array = ${evenArr}`);
tripledArr = evenArr.map((i) => i * 3);
console.log(tripledArr);
reducedArr = tripledArr.reduce((total, i) => {
    return total + i});
console.log(reducedArr);