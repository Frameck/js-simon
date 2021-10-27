const randomNumbers = generateRandomNumbers()


setTimeout(function () {
    const pointsScored = grabInputAndCheck(randomNumbers)
    alert(`Hai inserito correttamente ${pointsScored.length}/5 numeri:\n\n${pointsScored.join(' - ')}\n\nNumeri originali:\n\n${randomNumbers.join(' - ')}`)
}, 30000)


/**
 * Genera un array di 5 numeri casuali
 * @returns array di numeri generati casualmente
 */
function generateRandomNumbers() {
    const randomNumbers = []

    for (let i = 0; i < 5; i++) {
        const generatedNumber = randomIntFromInterval(1, 50)
        if (randomNumbers.includes(generatedNumber)) {
            i--
            return
        } else {
            randomNumbers.push(generatedNumber)
        }
    }

    alert(`I numeri da memorizzare sono i seguenti:\n\n${randomNumbers.join(' - ')}\n\nQuando premerai OK partirà un timer di 30 secondi e poi dovrai reinserire i numeri`)

    return randomNumbers
}


/**
 * 
 * @param {[]} arr1 array of random generated numbers
 * @returns array che contiene i numeri correttamente inseriti dall'utente (dopo la verifica)
 */
function grabInputAndCheck(arr1) {
    const userNumbers = []

    for (let i = 0; i < 5; i++) {
        const userInput = prompt(`Inserisci i numeri che hai visto precedentemente\nNumeri già inseriti: ${i}/5`)
        userNumbers.push(parseInt(userInput))
    }

    const pointsScored = []

    for (let i = 0; i < userNumbers.length; i++) {
        const userNumber = userNumbers[i]

        if (arr1.includes(userNumber)) {
            pointsScored.push(userNumber)
        }
    }

    return pointsScored
}


// genera un numero casuale tra un min e un max (included)
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}