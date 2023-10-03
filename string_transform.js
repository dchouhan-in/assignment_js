

//  transforms string in following manner 
// 1. reverse all the words
// 3. lowercase vowels
// 2. replace special characters with ascii index
// 4. join all the words into a single string, using pipe ("|")


function reverseString(string) {
    const reverseArray = string.split("").reverse()
    return reverseArray.join("")
}

function transformString(string) {
    let split_str = string.split(" ")
    split_str.map((value) => {
        let reverseStr = reverseString(value)

        const vowelRegex = "/^[aeiou]$/i"

        reverseStr.replace(vowelRegex, (value) => {
            value.toLowerCase()
        })

        return reverseStr
    })

}

console.log(transformString("this is a string!"))
