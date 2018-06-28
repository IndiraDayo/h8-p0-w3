function tentukanDeretGeometri(arr) {
  var diffNum = arr[1] / arr[0];
  // console.log(diffNum)
  for (var i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i + 1] / arr[i])

    // if (arr[i] === 3) {
    //   console.log('heyyy')
    // }
    if (arr[i + 1] / arr[i] === diffNum) {

    } else {
      //  console.log('yay')
      return false;
    }

  }
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
