"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let currentNode = linkedlist.head;
  let observedNodes = {};

  for (let i = 0; i < 10; i++) {
    console.log("CURRENT NODE: ", currentNode);
    currentNode = currentNode.next;

    // if (observedNodes[currentNode.value])
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
