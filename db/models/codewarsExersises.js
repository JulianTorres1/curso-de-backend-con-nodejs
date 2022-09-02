var romanToInt = function(s) {
    const symbolArray = s.split('');
    console.log(symbolArray);
    var count = 0;
    for (let i = 0; i < symbolArray.length; i++) {
        console.log(symbolArray[i]);
        if (symbolArray[i] == 'I') {
            count = count + 1;
        }else if(symbolArray[i] == 'V'){
            count = count + 5;
        }else if(symbolArray[i] == 'X'){
            count = count + 10;
        }else if(symbolArray[i] == 'L'){
            count = count + 50;
        }else if(symbolArray[i] == 'C'){
            count = count + 100;
        }else if(symbolArray[i] == 'D'){
            count = count + 500;
        }else if(symbolArray[i] == 'M'){
            count = count + 1000
        }
    }

    return count;
};


function invertWords(word) {
  let outputWord = word.split('');
  outputWord.reverse();
  outputWord = outputWord.join('')
  return outputWord;
}


//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers){

  numbers.splice(0,0,'(');
  numbers.splice(4,0,')');
  numbers.splice(5,0,' ');
  numbers.splice(9,0,'-');

  return numbers.join('');
}

/**
 * If the length of the array is 0, return "no one likes this". If the length of the array is 1, return
 * the first element of the array + " likes this". If the length of the array is 2, return the first
 * element of the array + " and " + the second element of the array + " like this". If the length of
 * the array is 3, return the first element of the array + ", " + the second element of the array + "
 * and " + the third element of the array + " like this". If the length of the array is 4 or more,
 * return the first element of the array + ", " + the second element of the array + " and " + (the
 * length of the array minus 2) + " others like this"
 * @param names - an array containing the names of people who like an item.
 * @returns the text variable.
 */
function likes(names) {

  let text = "";

  if (names.length == 0) {
    text = "no one likes this";
  } else if(names.length == 1) {
    text = names[0] + " likes this";
  }else if(names.length == 2){
    text = names[0] + " and " +names[1] +" like this";
  }else if(names.length == 3){
    text = names[0] + ", " +names[1] + " and " + names[2] + " " +' like this';
  }else if(names.length == 4){
    const many = names.length - 2
    text = names[0] + ", " +names[1] + " and " + many + " others" + " " +"like this";
  }
  return text;
}

const names = ["Max", "John", "Mark"];
console.log(likes(names));

//Max, John and Mark like this
//Max, John and Mark  like this

//console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//console.log(invertWords('brown'));
//console.log(romanToInt("MCMXCIV"));
