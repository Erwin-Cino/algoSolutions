var twoSum = function(nums, target) {
    const numberMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const missingNumber = target - nums[i];
        if (numberMap.has(missingNumber)) {
            return [numberMap.get(missingNumber), i]
        }
        numberMap.set(nums[i], i)
    }
};