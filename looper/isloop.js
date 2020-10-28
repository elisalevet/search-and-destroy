"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  const currentNode = linkedlist.head;

  for (let i = 0; i < 5; i++) {
    console.log(currentNode.next, "Current Node NEXT");
    currentNode = currentNode.next;
    console.log(currentNode.next, "NODE  in THE LOOOP");
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
