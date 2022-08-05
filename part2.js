// Add to Zero runtime: O(n^2) spacetime: O(n)
function addToZero(arr) {
  let result = false
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if (i !== j){
        if(arr[i] + arr[j] === 0){
          result = true; 
        } 
      }
      
    }  
  }
  return result
}

console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -1]))

// Unique Letters runtime: O(n) spacetime: O(1)
function uniqueLetters(str) {
  let split = str.split(''); 
  let newArr = []; 
  for(let i = 0; i < split.length; i++){
    if(!newArr.includes(split[i])){
      newArr.push(split[i])
    }
  }
  return split.length === newArr.length
}

console.log(uniqueLetters('Monday'))
console.log(uniqueLetters('Moonday'))
 
// Pangram runtime: O(n) spacetime O(1)
function pangram(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let lowercase = str.toLowerCase(); 
  for(let i = 0; i < alphabet.length; i++){
    if(!lowercase.includes(alphabet[i])){
      return false
    }
  }
  return true; 
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))
console.log(pangram("The quick  fox jumps over the lazy dog!"))

// longest word runtime: O(n) spacetime O(1)

function longestWord(arr) {
  let longest;
  for(let i =0; i < arr.length; i++){
     longest = arr[i]
    if(arr[i].length > longest.length){
      longest = arr[i]
    }
  }
  return longest.length; 
}

console.log(longestWord(['hi', 'hello']))