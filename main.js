/************** Numbers of true value **************/

function countTrue(arr) {

// const elementToCount = true; 
// let count = arr.filter(x => x == elementToCount).length
// console.log(count)

    let count = 0;
    let element = true;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}
  // Test cases
    console.log(countTrue([true, false, false, true, false]));  //➞ 2
    console.log(countTrue([false, false, false, false]));  //➞ 0
    console.log(countTrue([]));  //➞ 0


/************** Numbers of true value **************/

function possibleBonus(a, b) {
    if (b - a <= 6 && b - a >= 1){
        return true;
    }
    else {
        return false;
    }
}

  // Test cases
    console.log(possibleBonus(3, 7)); //➞ true
    console.log(possibleBonus(1, 9)); //➞ false
    console.log(possibleBonus(5, 3)); //➞ false


/************** Numbers of digits **************/

function numOfDigits(num) {
    // let text = num.toString();
    // let count = text.length;
    // return count;
    return num.toString().length;
}

  // Test cases
    console.log(numOfDigits(1000)); //➞ 4
    console.log(numOfDigits(12)); //➞ 2
    console.log(numOfDigits(1305981031)); //➞ 10
    console.log(numOfDigits(0)); //➞ 1


/************** Object to array **************/


function toArray(obj) {
    // Use Object.entries to get an array of key-value pairs
    const result = Object.entries(obj);
    
    // Return the resulting array
    return result;
}

  // Test cases
    console.log(toArray({ a: 1, b: 2 })); // ➞ [["a", 1], ["b", 2]]
    console.log(toArray({ shrimp: 15, tots: 12 })); // ➞ [["shrimp", 15], ["tots", 12]]
    console.log(toArray({})); // ➞ []

/************** Array Multiply numbers **************/

    function arrayOfMultiples(num, length){
        
        if (num && length) {
            let multiplesArray = [];
            for (let i = 1; i <= length; i++) {
                multiplesArray.push(num * i);
            }
            return multiplesArray;
        }
        else {
            return null;
        }
    }


  // Test cases
    console.log(arrayOfMultiples(7, 5)); // ➞ [7, 14, 21, 28, 35]
    console.log(arrayOfMultiples(12, 10)); // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
    console.log(arrayOfMultiples(17, 6)); // ➞ [17, 34, 51, 68, 85, 102]


/************** Trailing and leading zeros **************/

function removeLeadingTrailing(str){
    if (str){
        return parseFloat(str).toString();
    }
}

// Test cases
    console.log(removeLeadingTrailing("230.000")); // ➞ "230"
    console.log(removeLeadingTrailing("00402"));    // ➞ "402"
    console.log(removeLeadingTrailing("03.1400"));  // ➞ "3.14"
    console.log(removeLeadingTrailing("30"));        // ➞ "30"


/************** Trailing and leading zeros **************/

function sortIt(arr) {
    return arr.sort()
}

// Test cases
    console.log(sortIt([4, 1, 3]));          // ➞ [1, 3, 4]
    console.log(sortIt([[4], [1], [3]]));    // ➞ [[1], [3], [4]]
    console.log(sortIt([4, [1], 3]));        // ➞ [[1], 3, 4]
    console.log(sortIt([[4], 1, [3]]));      // ➞ [1, [3], [4]]
    console.log(sortIt([[3], 4, [2], [5], 1, 6])); // ➞ [1, [2], [3], 4, [5], 6]


/************** Calculator **************/

function calculator(a, operator, b){
    if (operator === "+"){
        return a += b;
    }
    else if (operator === "-"){
        return a -= b;
    }
    else if (operator === "*"){
        return a *= b;
    }
    else if (operator === "/"){
        if (b > 0){
        return a /= b;
        }
        else {
        return "Can't divide by 0!";
        }
    }
    else {
        return undefined;
    }
}


// Test cases
console.log(calculator(2, "+", 2)); //➞ 4
console.log(calculator(2, "*", 2)); //➞ 4
console.log(calculator(2, "/", 2)); //➞ 2
console.log(calculator(2, "-", 2)); //➞ 0
console.log(calculator(4, "/", 0)); //➞ 1


/************** Area of a country **************/

function areaOfCountry(country, superficy){
    superficy = (superficy / 148940000) * 100; 
    superficy = superficy.toFixed(2);
    return `${country} is ${superficy} of the total world's landmass`;
}

console.log(areaOfCountry("Russia", 17098242)); // ➞ "Russia is 11.48% of the total world's landmass"
console.log(areaOfCountry("USA", 9372610)); // ➞"USA is 6.29% of the total world's landmass"
console.log(areaOfCountry("Iran", 1648195)); // ➞ "Iran is 1.11% of the total world's landmass"


/************** reverse order of a string **************/

function reverseWords(str){
    return str.trim().split(/\s+/).reverse().join(' ');
}

// Test cases
console.log(reverseWords("the sky is blue"));     // ➞ "blue is sky the"
console.log(reverseWords("hello   world!  "));    // ➞ "world! hello"
console.log(reverseWords("a good example"));       // ➞ "example good a"