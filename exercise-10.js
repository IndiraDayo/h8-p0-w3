function perkalianUnik(arr) {
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    tempArr.push([])
    for (var j = 0; j < arr.length; j++) {
      if (j === i) {
      } else {
        // console.log(j)
        tempArr[i].push(arr[j])
      }
    }
  }
  var UnikArr = [];
  for (var k = 0; k < tempArr.length; k++) {
    var total = tempArr[k][0]
    for (var l = 1; l < tempArr[k].length; l++) {
      total = total * tempArr[k][l];
    }
    UnikArr.push(total)
  }


  return UnikArr
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
