function calculateAnagrams(str) {
  const wordsArray = str.split(" ");
  var panagramsList = [];
  var nonRepWordsArray = findUniqueWord(wordsArray)

  let length = nonRepWordsArray.length; // length of nonRepWordsArray
  nonRepWordsArray[length] = ""; // To get next element from array
  nonRepWordsArray.forEach((element, index) => {  
    for (let j = index + 1; j< length; j++) {// fron 1 to length of the nonRepWordsArray
      let nextElem = nonRepWordsArray[j];
      /**Check "car" and "arc" are same*/
      if(element.split('').sort().join('') === nextElem.split('').sort().join('')) {
        panagramsList.push(element.split('').sort().join('')); // sort all words and save in array
     }
    }
  });
   return findUniqueWord(panagramsList).length;
}
/***Filter unique words from array of words and return list of words */
function findUniqueWord(wordsArray) {
    let unique = wordsArray.reduce((acc,currentWord) => {
    if(acc.indexOf(currentWord) < 0) acc.push(currentWord);
    return acc;
    },[]);
  return unique;
}

console.log('Number of Anagrams in given string = ',calculateAnagrams("us us are are are final rea plery fianl era reply rpley fanil filan")); 
