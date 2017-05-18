function longestIncrSubArray (seq) {
  var subArr = []
  if (seq.length < 2) {
    return subArr
  }

  var maxStart = 0
  var maxLength = 1

  var currentStart = 0
  var currentLength = 1

  for (var i = 1; i < seq.length; i++) {
    if (seq[i] >= seq[i - 1]) {
      currentLength++
      if (i < seq.length - 1) {
        i++
      }
    }

    if (currentLength > maxLength) {
      maxLength = currentLength
      maxStart = currentStart

      currentStart = i
      currentLength = 0
    }
  }

  if (maxLength > 1) {
    for (i = maxStart; i < maxStart + maxLength; i++) {
      subArr.push(seq[i])
    }
  }
  return subArr
}
