/**
 * Finds the longest increasing subarray from a given array
 * of integers. A subarray is said to be "increasing" when each
 * non-last value is followed by a value that is greater
 * than the previous value.
 * If there are multiple contenders of the same length, returns
 * the first occurring subarray.
 * If no increasing sub-array of length 2 or greater is found,
 * returns an empty array.
 *
 * @param {number[]} seq  An array of integers
 * @returns {number[]} The longest increasing subarray of `seq`
 */
function longestIncrSubArray(seq){
  var subArr = [];
  if (seq.length < 2)
    return [];

	var max_start = 0;
	var max_end = 1;

	var cur_start = 0;
	var cur_end = 1;

	var i = 0;

	while ( i < seq.length -1) {
		while( seq[cur_end] > seq[cur_end - 1] ) {
			cur_end += 1;
			if(cur_end > seq.length -1){
				break;
			}
		}

		var old_max = max_end - max_start;
		var new_max = cur_end - cur_start;

		if (new_max > old_max){
			max_start = cur_start;
	    max_end = cur_end;
		}

		cur_start = cur_end;
	  cur_end = cur_end + 1;

		i = cur_end;

	}


// Test for the second exercise
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
