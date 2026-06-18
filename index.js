let sequence;
let phiApprox;
let drawFunFacts = false
const funFacts = "The Fibonacci sequence is made by adding the last two values to calculate the next value. So if you start with 1, you get following: 1, 1, 2, 3, 5, 8, 13, 21... \nBy dividing the last value by the one before it, you can approximate phi (φ). If you're interested in more details, read the Wikipedia articles below.";

function startSequence() {
    clearInterval(sequence);
    let inputElement = document.getElementById("startValue");
    let a = parseInt(inputElement.value, 10) || 1;
    let b = 0;
    let c = a + b;

    console.log(c);

    let sequenceNumber = document.getElementById("sequencesToRun").value;
    let currentSequence = 0;
    let timeout = document.getElementById("delayInMs").value;

    sequence = setInterval(() => {
        if (currentSequence >= sequenceNumber) {
            clearInterval(sequence);
        }


        a = b;
        b = c;
        c = a + b;

        phiApprox = c / b;

        console.log(c + " " + currentSequence + "/" + sequenceNumber + " " + phiApprox);

        document.getElementById("cDisplay").innerHTML = `Sequence: ${c}<br>φ Approx: ${phiApprox}`;

        currentSequence++;
    }, timeout);
}

function stopSequence() {
    clearInterval(sequence);
}

function toggleLearnMore() {
    drawFunFacts = !drawFunFacts;
    if (drawFunFacts) {
        document.getElementById("learnMore").innerHTML = "Learn Less";
        document.getElementById('learnMore').className = "stop";
        document.getElementById("funFacts").innerHTML = funFacts
        document.getElementById("linkFibonacciSequence").innerHTML = "Fibonacci Sequence"
        document.getElementById("linkPhi").innerHTML = "Golden Ratio"
        document.getElementById("linkRepo").innerHTML = "GitHub Repo"
    }
    else {
        document.getElementById("learnMore").innerHTML = "Learn More";
        document.getElementById('learnMore').className = "start";
        document.getElementById("funFacts").innerHTML = "";
        document.getElementById("linkFibonacciSequence").innerHTML = ""
        document.getElementById("linkPhi").innerHTML = ""
        document.getElementById("linkRepo").innerHTML = ""
    }
}