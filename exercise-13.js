function targetTerdekat(arr) {
  var temp = [];
  var diff =[];
  var oCoordinate = 0;
  var smallest = 0;

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === 'o') {
      oCoordinate = i;
    }
    if (arr[i] === 'x') {
      temp.push(i);
    }
  }
  if (temp[0] === undefined) {
    return 0;
  } else {
    for (var j = 0; j < temp.length; j++) {
      diff.push(Math.abs(temp[j] - oCoordinate));
    }
    for (var k = 0; k < diff.length; k++) {
      smallest = diff[0];
      if (smallest > diff[k]) {
        smallest = diff[k];
      } else {
        smallest = smallest;
      }
    }
  }
  return smallest
  // console.log(diff);
  // console.log(smallest);

  // console.log( oCoordinate +' || ' + temp);
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
