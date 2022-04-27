/**
 * @param {number[]} nums - ordered list of numbers sorted in ascending order,
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  // we declare 2 pointers 
  let left = 0;
  let right = nums.length - 1;
  
  // we check if the target value is greater than our biggest number in array
  // if so then target doesnt exist in array
  if(target > nums[right]) return -1


  //we iterate until we find target or we run out of elements to iterate over
  while(left <= right){
    // left is lower limit of the search "area" while right is the upper limit 
    // we calculate the middle by substracting left to right and dividing by 2 
    // and then we add the result to left since we need to start searching from there   
    let middle = left + Math.floor((right - left) / 2)
    
    // if middle element is equal to target we return middle, which is the index 
    if(nums[middle] === target){
      return middle
    }
    
    // if middle is less than target then we add one element to middle and assign it to left 
    // now our search area is the upper half 
    if (nums[middle] < target){
      left = middle + 1
    }
    
    // if middle is more than target then we substract one element to middle and assign it to left
    // now our search area is the lower half
    if(nums[middle] > target){
      right = middle - 1
    }
  }
  
  //if no result was found we failsafe 
  return -1
};

module.exports = search