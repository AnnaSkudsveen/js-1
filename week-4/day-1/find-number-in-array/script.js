const number = [1, 2, 3];

function findNumber(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return arr[i];
    }
  }
  return -1;
}

const myArray = [1, 2, 3];
const valueSerach = 2;
let isNumber = findNumber(myArray, valueSerach);
console.log(isNumber);
