"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  // console.log("Array: ", array)
  // console.log("array.length/2", array.length/2)
  // console.log(Math.floor(array.length/2))

  let midPoint = Math.floor(array.length / 2);

  if (array[midPoint] === target) {
    console.log("midpoint is target!");
    return true;
  } else if (array.length <= 1) {
    console.log("array length is 0");
    return false;
  } else if (array[midPoint] > target) {
    console.log("target is less than midpoint");
    return binarySearch(array.slice(0, midPoint), target);
  } else if (array[midPoint] < target) {
    console.log("target is greater than midpoint");
    return binarySearch(array.slice(midPoint), target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
