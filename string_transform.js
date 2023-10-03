

//  transforms string in following manner - 
// 1. reverse all the words
// 3. lowercase vowels
// 2. replace special characters with ascii index from 0
// 4. join all the words into a single string, using pipe ("|")


function reverseString(string) {
    const reverseArray = string.split("").reverse()
    return reverseArray.join("")
}

function transformString(string) {
    let splitStr = string.split(" ")
    transformedArray = splitStr.map((value) => {
        let reverseStr = reverseString(value)

        const vowelRegex = /[aeiou]/gi

        reverseStr = reverseStr.replace(vowelRegex, (value) => {
            return value.toUpperCase()
        })

        const specialCharacters = /[^A-Za-z 0-9]/gi

        reverseStr = reverseStr.replace(specialCharacters, (value) => {
            return value.charCodeAt(0) + "!"
        })

        return reverseStr
    })

    return transformedArray.join("|")

}

console.log(transformString("this is a string!@#"))
