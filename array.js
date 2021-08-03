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
//console.log(Object.values(object));

// using set data type with a best solution
const newArr = [...new Set(orginalArray)]; // Array.from(new Set(orginalArray))
//console.log(newArr);

/*
 Sort
 Sort method sorts the elements of the array in place and
 returns the sorted array. the defult sort orderis ascending,
 built on  upon converting the elements into string then comparing
 their sequence of UTF-6 code unit values.

*/

let numbers = [4, 2, 5, 1, 3];
/* 
[2, 4, 5, 1, 3]
[2, 4, 5, 1, 3]

*/
numbers.sort((a, b) => {
  console.log({ a, b });
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

[].splice(
  startindex,
  numbertOfitemsToBeremovedSinceStartIndex,
  numberofItemsTobeAddedSicceStartIndex
); // modeifyes array
[].slice(startInedx, endIndex); // returns to the subset of array. endIndex is exclusive
[].reduce((total, element) = total + element, init)
/* 
find()
findIndex()
indexOf()
forEach()
forEvery()
push()
pop()
unShift()
shift()
flat()

*/