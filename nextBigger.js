function suboptimal(n) {
  if (n.toString().length === 1) return -1;

  let digits = n.toString().split("").map(Number);
  let rightDigits = [];
  let pivotDigit = 0;

  for (let i = digits.length - 1; i > 0; i--) {
    rightDigits.push(digits[i]);

    if (digits[i] > digits[i - 1]) {
      console.log("swapNum: " + digits[i - 1]);
      rightDigits.sort((a, b) => a - b);

      for (let j = 0; j < rightDigits.length; j++) {
        if (rightDigits[j] > digits[i - 1]) {
          pivotDigit = rightDigits[j];
          console.log("pivotDigit: " + pivotDigit);
          rightDigits.splice(j, 1);
          rightDigits.push(digits[i - 1]);
          rightDigits.sort((a, b) => a - b);
          break;
        }
      }

      digits.splice(i - 1);
      console.log(digits);
      let result = digits.concat(pivotDigit).concat(rightDigits);
      return Number(result.join(""));
    }
  }

  return -1;
}

function optimal(n) {
  let digits = String(n).split("").map(Number);
  let i = digits.length - 1;

  while (i > 0 && digits[i - 1] >= digits[i]) {
    i--;
  }

  if (i <= 0) return -1;

  let j = digits.length - 1;
  while (digits[j] <= digits[i - 1]) {
    j--;
  }

  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

  let left = i;
  let right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  return parseInt(digits.join(""), 10);
}
