// Remove Deplicates in An array

const orginalArray = [1, 2, 5, 8, 2, 1, 2];
const arrayLength = orginalArray.length;
const newArray = [];

// Using bruth force algorithim n sqared complexity
for (let i = 0; i < arrayLength; i++) {
  if (newArray.indexOf(orginalArray[i]) === -1) newArray.push(orginalArray[i]);
}

// // using sort and tem variable logn complexity
orginalArray.sort();
let _temp;
for (let i = 0; i < arrayLength; i++) {
  if (orginalArray[i] !== _temp) {
    newArray.push(orginalArray[i]);
    _temp = orginalArray[i];
  }
}

// using object with a compexity of one
const object = {};
for (let num of orginalArray) {
  object[num] = num;
}
console.log(Object.values(object));

// using set data type with a best solution
const newArr = [...new Set(orginalArray)];
console.log(newArr);
