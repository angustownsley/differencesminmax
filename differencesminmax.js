

function numbers(input){
    validate = typeof input;
    let arr  = []
    let largest = 0
    let smallest = 0
    if(Array.isArray(input) == false)
    {
        arr = [input];
        largest = Math.max(...arr);
        smallest = Math.min(...arr);
    }
    else
    {
        largest = Math.max(...input);
        smallest = Math.min(...input);
    }
    const difference = largest - smallest;
    if(isNaN(difference)){
        return "Please ensure your list only contains numbers and is formatted 4, 10 ,16, ... etc.";
    }
    
    return difference;
    
    
}

let test = [10, 45, 3, 51, 30, 99, 5, 44, 55, 76]; //expected 96
console.log(numbers(test));
test = [-19, 4, 48, -24, -7, 66, 27, -42, 39, -10]; //expected 108
console.log(numbers(test));
test = [20, 4, 89, -26, 35, 86, -32, -61, -78, 33];  //expected 167
console.log(numbers(test));
test = [-74, -82, -64, -92, -39, -45, -20, -30, -32, -97];  //expected 77
console.log(numbers(test));
test = [-20, -58, 97, -47, -2, 3, 90, -76, 23, 0] ; //expected 173
console.log(numbers(test));
test = ['twenty', , 'sixty']  ;//expected List contains non number values
console.log(numbers(test)); 
test = [-20, -58, 97, 'nineteen',,,,,,  , 3, 90, -76, 23, 0]  //expected List contains non number values
console.log(numbers(test));
test= 9 //expected 0
console.log(numbers(test));
test="nine"; //expected List contains non number values
console.log(numbers(test));