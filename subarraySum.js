//Given a list of non-negative numbers and a target integer k, 
//write a function to check if the array has a continuous subarray of size at least 2 
//that sums up to a multiple of k, that is, sums up to n*k where n is also an integer.

var checkSubarraySum = function(nums, k) {
    let sum = 0;

    if(sum % k === 0) return true;
}

const checkSubarraySum2 = (nums, k) => {
    // Handle special case when k === 0
    if (k === 0) {
      // We need to find at least 2 zero together
      for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== 0) continue;
        if (nums[i] === 0 && nums[i + 1] === 0) return true;
      }
      return false;
      
    } else {
      let currentSum = nums[0];
      const modMap = {};
      modMap[0] = -1;
      for (let i = 1; i < nums.length; i++) {
        const nextSum = currentSum + nums[i];
        const mod = nextSum % k;
        if (modMap[mod] !== undefined) {
          console.log(`Sub Array is: from index ${modMap[mod] + 1} to ${i}`);
          return true;
        }
        const prevMod = currentSum % k;
        modMap[prevMod] = i - 1;
        currentSum = nextSum;
      }
      return false;
    }
  };



var checkSubarraySum3 = function(nums, k) {
    
    var map = {0: -1};
    var sum = 0;
    
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        
        if (k != 0) 
            sum = sum % k;
        
        if (typeof map[sum] !== "undefined") {
            if (i - map[sum] > 1) return true;   
        } else {
            map[sum] = i;
        }
        
    }
    
    return false;
    
};