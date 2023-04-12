function hasTargetSum(array, target) {
  // get first number
  for (let firstNum = 0; firstNum < array.length; firstNum++) {
    // look for second numer
    for (let secondNum = firstNum + 1; secondNum < array.length; secondNum++) {
      // add two numbers and compare to target
      if (array[firstNum] + array[secondNum] === target) {
        console.log(array[firstNum], array[secondNum])
        return true
        // return [array[firstNum], array[secondNum]];
      } 
    }
    // return false
  }  
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 6, 4, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
