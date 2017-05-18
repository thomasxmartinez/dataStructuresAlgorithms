function longestIncrSubArray(seq) {
  var longIncArr = [];
  var initSubArr = [];
	var start = 0;
	var end = 0;
	if (seq < 2) {
		return [];
	}
	for (var i = 0; i < seq.length; i++) {
		if (seq[i] < (seq[i + 1]) || (i + 1 === seq.length)) {
			end = end + 1;
			initSubArr = seq.slice(start, end);
		}
		if (seq[i] > (seq[i + 1])) {
			end = end + 1;
			initSubArr = seq.slice(start, end);
			if (longIncArr.length < initSubArr.length) {
				longIncArr = seq.slice(start, end);
			}
			if ((i !== seq.length - 1)) {
				start = end;
			}
		}
	}
	if (longIncArr.length < initSubArr.length) {
		longIncArr = seq.slice(start, end);
	}
	if (longIncArr.length > 1) {
		return longIncArr;
	} else
	return [];
}

console.log(longestIncrSubArray([3, 4, 2, 8, 3, 9, 11, 9, 10]));
console.log(longestIncrSubArray([3, 4, 1, 2]));
console.log(longestIncrSubArray([3, 4, 2, 8]));
console.log(longestIncrSubArray([3, 4, 2, 8, 9, 11, 9, 10]));
console.log(longestIncrSubArray([3]));
console.log(longestIncrSubArray([2, 1]));
console.log(longestIncrSubArray([]));
console.log(longestIncrSubArray([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]));
console.log(longestIncrSubArray([7, 6, 5, 4, 3, 1, 2]));
console.log(longestIncrSubArray([8, 7, 5, 3, 2, 0]));
console.log(longestIncrSubArray([4, 5, 7, 8, 9, 11]));
console.log(longestIncrSubArray([1, 1, 1]));
