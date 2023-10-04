
async function logTime(count) {
    let initialTime = Date.now()

    try {

        sequence = await generateFibonacciSeq(count)
        console.log("value - ", sequence)
        let currentTime = Date.now()
        console.log(`time taken - ${currentTime - initialTime}ms`)

    } catch (error) {
        console.log(error)
    }
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
        resolve(resultArray.slice(-1)[0])
    })
}



logTime(-1)
logTime(300)
logTime(378)
logTime(300000)