let sequence;
let phiApprox; // Declare phiApprox outside the function to make it accessible

function startSequence() {
    let inputElement = document.getElementById("startValue");
    let a = parseInt(inputElement.value, 10) || 1; // Default to 1 if invalid
    let b = 0;
    let c = a + b;

    console.log(c);

    let sequenceNumber = document.getElementById("sequencesToRun").value;
    let currentSequence = 0;
    let timeout = document.getElementById("delayInMs").value;

    sequence = setInterval(() => {
        if (currentSequence >= sequenceNumber) {
            clearInterval(sequence);
            return;
        }


        a = b;
        b = c;
        c = a + b;

        phiApprox = c / b;

        console.log(c + " " + currentSequence + "/" + sequenceNumber + " " + phiApprox);

        document.getElementById("cDisplay").innerHTML =
            `Sequence: ${c}<br>φ Approx: ${phiApprox}`;

        currentSequence++;
    }, timeout);
}

function stopSequence() {
    clearInterval(sequence);
}
