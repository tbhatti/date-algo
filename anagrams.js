function calculateAnagrams(str) {
const wordsArray = str.split(" ");
var nonRepWordsArray = wordsArray.reduce((acc,currentWord) => {
  if(acc.indexOf(currentWord) < 0) acc.push(currentWord);
  return acc;
},[]);

let length = nonRepWordsArray.length;
nonRepWordsArray[length] = "";
let matched = false; // if string has car, acr and arc then it should 
let counter = 0;
nonRepWordsArray.forEach((element, index) => {
   matched = false;
  for (let j = index+1; j< length; j++) {
    let nextElem = nonRepWordsArray[j];
    if(!matched && element.split('').sort().join('') === nextElem.split('').sort().join('')) {
      counter++;
      matched = true;
   }
  }
});
 return counter;


}
console.log('Number of Anagrams = ',calculateAnagrams("I arc have a car and acr ")); // kmno konm bcb bbc dlel dell I arc have a car and acr  aa aa odg dog gdo
