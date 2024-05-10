/*
* This program rverses a string using recursion
*
* @author  Emmanuel FN
* @version 1.0
* @since   2024-05-09
*/

function reverseString(stringToReverse: string): string {
    /*
    * This function reverses a string, using recursion
    * @param accepts a string
    * @return the string backwards, using recursion
    */
    if (stringToReverse === "") {
        return ""
    } else {
        const firstCharacterOfString: string = stringToReverse[0]
        const restOfString: string = stringToReverse.slice(1)
        
        return reverseString(restOfString) + firstCharacterOfString
    }
}

let aString = "KFC"

console.log(`The original string is: ${aString}`)
let theReverseString = reverseString(aString)
console.log(`The reversed string is: ${theReverseString}`)

console.log(`\nDone.`)
