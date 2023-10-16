function returnIndicesOfNumbersThatAddUpToTarget(array, target){
    //initialize empty array
    let newArray = []

    //parse through array
    for(let i = 0; i < array.length; i++){
        //find the other number that will add up to target and store in new array
        newArray.push(target - array[i])

        //determine whether or not the second number exists in the first array
        if(array.indexOf(newArray[i])!= -1){
            //if it exists in the first aarray, return indices of both numbers. 
            return `[${i}, ${array.indexOf(newArray[i])}]`
        }
    }
}
const array = [4, 17, 11, 9, 8, 23, 2, 5]
const target = 27

console.log(returnIndicesOfNumbersThatAddUpToTarget(array, target))