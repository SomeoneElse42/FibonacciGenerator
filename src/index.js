let sequence

function startSequence() {
    let inputElement = document.getElementById("startValue");
    let a = parseInt(inputElement.value, 10) || 1; // Default to 1 if invalid
    let b = 0;
    let c = a + b;


    console.log(c);

    let sequenceNumber = document.getElementById("sequencesToRun").value
    let currentSequence = 0
    let timeout = document.getElementById("delayInMs").value

    sequence = setInterval(() => {
        if (currentSequence > sequenceNumber) {
            clearInterval(sequence);
            return;
        }
        console.log(c + " " + currentSequence + "/" + sequenceNumber);
        a = b;
        b = c;
        c = a + b;
        currentSequence = currentSequence + 1
        document.getElementById("cDisplay").innerHTML = c
    }, timeout);
}

function stopSequence() {
    clearInterval(sequence);
}