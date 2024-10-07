var suboptimal = function (nums) {
  let m = nums.length;
  nums = new Set(nums);

  for (let i = 0; i < m; i++) {
    if (!nums.has(i + 1)) return i + 1;
  }

  return m + 1;
};

var optimal = function (nums) {
  nums = nums.filter((num) => num > 0);
  let i = 0;

  while (i < nums.length) {
    if (nums[i] <= nums.length && nums[i] != nums[nums[i] - 1]) {
      let idx = nums[i] - 1;
      let temp = nums[i];

      nums[i] = nums[idx];
      nums[idx] = temp;
    } else {
      i += 1;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (j + 1 !== nums[j]) return j + 1;
  }

  return nums.length + 1;
};
