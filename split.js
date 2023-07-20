const List1 = [1,2,3,4,5,6,7,8,9,10];
const List2 = [1,2,3,4,5,6,7,8,9,10];

while(List1.length >0){
    const newList = List1.splice(0,3)
    console.log("sliced = ",newList)
    const latestList = List2.splice(0,5)
    console.log("latestList = ",latestList)
}