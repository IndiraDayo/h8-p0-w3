function groupAnimals(animals) {
  // var ordered = [];
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var groups = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  var filledGroups = [];

  for (var i = 0; i < animals.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if(animals[i][0] === alphabet[j]) {
        groups[j].push(animals[i]);
      }
    }
  }

  for (var k = 0; k < groups.length; k++) {
    if (groups[k][0] !== undefined) {
      filledGroups.push(groups[k])
    } else {

    }
  }

  var temp = '';
  for (var m = 0; m < filledGroups.length; m++) {
    if (filledGroups[m].length > 1) {
      for (var n = 0; n < filledGroups[m].length; n++) {

          if (filledGroups[m][n] > filledGroups[m][n + 1]) {
            temp = filledGroups[m][n];
            filledGroups[m][n] = filledGroups[m][n + 1];
            filledGroups[m][n + 1] = temp;
          }
          for (var q = 0; q < filledGroups[m].length - n; q++) {
            if (filledGroups[m][q] > filledGroups[m][q + 1]) {
              temp = filledGroups[m][q];
              filledGroups[m][q] = filledGroups[m][q + 1];
              filledGroups[m][q + 1] = temp;
            }
          }

      }
    }
  }



  return filledGroups;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'kelinci', 'kadal', 'kancol', 'kanbol']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
