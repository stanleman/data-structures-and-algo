var suboptimal = function (n, k) {
  let nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }

  let res = [];

  const permute = (arr, m = []) => {
    if (arr.length == 0) {
      res.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(nums);

  return res[k - 1].join("");
};

var optimal = function (n, k) {
  const factorial = [1];
  const nums = [];

  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
    nums.push(i);
  }

  k--;
  let result = "";

  for (let i = n; i > 0; i--) {
    const idx = Math.floor(k / factorial[i - 1]);

    result += nums[idx];
    nums.splice(idx, 1);

    k %= factorial[i - 1];
  }

  return result;
};
