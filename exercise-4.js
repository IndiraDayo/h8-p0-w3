var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(input) {
var inputArr = input.splice(', ')
var name = inputArr[1];

inputArr[1] = inputArr[1] + 'Elsharawy';
inputArr[2] = 'Provinsi ' + inputArr[2];

inputArr.splice(4, 0, 'Pria');
inputArr.pop();
inputArr.push('SMA International Metro');

console.log(inputArr);

var date = inputArr[3].split('/');

switch(date[1]) {
  case '01': {console.log('Januari'); break;}
  case '02': {console.log('Februari'); break;}
  case '03': {console.log('Maret'); break;}
  case '04': {console.log('April'); break;}
  case '05': {console.log('Mei'); break;}
  case '06': {console.log('Juni'); break;}
  case '07': {console.log('Juli'); break;}
  case '08': {console.log('Agustus'); break;}
  case '09': {console.log('September'); break;}
  case '10': {console.log('Oktober'); break;}
  case '11': {console.log('November'); break;}
  case '12': {console.log('December'); break;}
  default: {console.log('invalid/input in string'); break;}
}

var newDate = [date[2], date[0], date[1]];

console.log(newDate)
console.log(date[0] + '-' + date[1] + '-' + date[2])
console.log(name)
}


dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
