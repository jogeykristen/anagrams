word = "Hello world"
let count = 0;
for(x in word){
    if(word[x] == 'a'|| word[x] == 'e'|| word[x] == 'i'||word[x] == 'o'|| word[x] == 'u'){
        count += 1;
    }
}
console.log("count =",count)