


function logTime(count) {
    let initialTime = Date.now()
    generateFibonacciSeq(count).then((value) => {
        console.log("sequence is - ", value)
        let currentTime = Date.now()
        console.log(`time taken - ${currentTime - initialTime}ms`)
    }).catch((reason) => {
        console.log(reason)
    })
}


function generateFibonacciSeq(count) {

    return new Promise((resolve, reject) => {
        if (count < 0) {
            reject(`${count} is negetive!`)
            return
        }
        if (count < 2) {
            resolve([0, 1].slice(0, count))
            return
        }

        resultArray = [0, 1]

        while (resultArray.length != count) {
            resultArray.push(resultArray[resultArray.length - 1] + resultArray[resultArray.length - 2])
        }
        console.log(resultArray);
        resolve(resultArray)
    })
}

logTime(2)