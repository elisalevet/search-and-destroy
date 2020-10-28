"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let currentNode = linkedlist.head;
  let observedNodes = {};
  // while loop
  // to traverse a linkedlist you 2always start at the head

  while (currentNode.next !== null) {
    console.log("CURRENT NODE: ", currentNode.value);

    if (observedNodes[currentNode.value]) {
      return true;
    } else {
      observedNodes[currentNode.value] = 1;
      console.log(
        "observedNode first occurrence",
        observedNodes[currentNode.value]
      );
    }
    currentNode = currentNode.next;
  }
  console.log(observedNodes, " <--------observed node obj");
  return false;
};

/*
 let runnerA = linkedlist;
  let runnerB = linkedlist;
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
