const  Input =  ["eat", "tea", "tan", "ate", "nat", "bat"]
const anagramGroups= {};

//for (let i= 0;i<=Input.length-1;i++){
for(i in Input){
    var word = Input[i];
    //console.log("word = ",word)
    const newArray = word.split('').sort().join('');
    //console.log("newArray = ",newArray)
    if (newArray in anagramGroups) {
        anagramGroups[newArray].push(word);
      } else {
        //console.log("if = ",[word])
        anagramGroups[newArray] = [word];
        //console.log("sorted = ",anagramGroups)
    }
   
}
const result = Object.values(anagramGroups);
console.log(result);


// using functions

// function groupAnagrams(strs) {
//     let anagramGroups = {};
    
//     for (let i = 0; i < strs.length; i++) {
//       let word = strs[i];
//       let sortedWord = word.split('').sort().join('');
      
//       if (sortedWord in anagramGroups) {
//         anagramGroups[sortedWord].push(word);
//       } else {
//         anagramGroups[sortedWord] = [word];
//       }
//     }
    
//     return Object.values(anagramGroups);
//   }
  
//   // Example usage
//   const inputWords = ["eat", "tea", "tan", "ate", "nat", "bat"];
//   const result = groupAnagrams(inputWords);
//   console.log(JSON.stringify(result));