function angkaPalindrome(num) {

  var ketemu = false;

  if (num < 9) {
    return num + 1;
  } else {

    while (ketemu === false) {
      num =  num + 1;
      var numberStr = num.toString();
      for (var i = 0; i < numberStr.length; i++) {
        if (numberStr[i] !== numberStr[numberStr.length -1 -i]) {
          ketemu = false;
        } else {
          ketemu = true;
        }
      }
    }
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
