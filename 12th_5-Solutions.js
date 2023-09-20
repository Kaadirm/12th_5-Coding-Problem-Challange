/*
------   1   -------

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

SOLUTION

function diffArray(arr1, arr2) {
    const totalArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if(arr1.includes(arr2[i]) === false){
            totalArr.push(arr2[i]);
        }
    }    
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) === false){
            totalArr.push(arr1[i]);
        }
    }
    return totalArr
}

/*function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item || !arr2.includes(item)))
}
*/
------   2   -------

You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. 

Remove all elements from the initial array that are of the same value as these arguments.

SOLUTION

function destroyer(arr,...toClean) {
    const arr2 = [...toClean]
    return arr.filter(item => !arr2.includes(item)) 
}


------   3   -------

Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog



SOLUTION

function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before) === true){
        after = after.replace(after[0], after[0].toUpperCase())
    }
    else{
        after = after.replace(after[0], after[0].toLowerCase())
    }
    const beforeInd = str.split(" ").indexOf(before)
    const firstPart = str.split(" ").slice(0,beforeInd)
    const secondPart = str.split(" ").slice(beforeInd + 1,str.split(" ").length)
    return firstPart.concat(after, secondPart).join(" ")
}



------   4   -------

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. 

For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


SOLUTION 

function pairElement(str) {
    const pairedArr = []
    const arr = str.split("")
    console.log(arr[0]);
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "G":
                pairedArr.push(["G", "C"])
            break;
            case "C":
                pairedArr.push(["C", "G"])
            break;
            case "A":
                pairedArr.push(["A", "T"])
            break;
            case "T":
                pairedArr.push(["T", "A"])
            break;
        }
    }
    return pairedArr
}


------   5   -------

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.



SOLUTION

function fearNotLetter(str) {
    const plus = str[0].charCodeAt()
    for(let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) !== (plus + i))
        return String.fromCharCode(str[i-1].charCodeAt()+1);
    };
}

*/