// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {

    let result = arr.sort((a,b) => a - b)


    return result[0]

}

console.log(findSmallestInt([78,56,232,12,8]));
