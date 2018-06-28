function pasanganTerbesar(num) {
  var numString = num.toString();
  var larger = '';
  var nextDigit = '';


  larger = numString[0];
  for (var i = 0; i < numString.length; i++ ) {
    for (var j = i + 1; j < numString.length; j++) {
      if (larger < numString[i]) {
        larger = numString[i];
        nextDigit = numString[i + 1];
      }
      if(larger === numString[0]) {
          nextDigit = numString[1];
      }
    }
  }
  return Number(larger + nextDigit)
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
