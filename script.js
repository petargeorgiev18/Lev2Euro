const RATE = 1.95583;

const amountInput = document.getElementById("amount");
const directionSelect = document.getElementById("direction");
const resultDiv = document.getElementById("result");

function calculate() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "";
        return;
    }

    let result, currency;

    if (directionSelect.value === "EUR_TO_BGN") {
        result = amount * RATE;
        currency = "лв.";
    } 
    else {
        result = amount / RATE;
        currency = "€";
    }

    resultDiv.textContent = `${result.toFixed(2)} ${currency}`;
}

amountInput.addEventListener("input", calculate);
directionSelect.addEventListener("change", calculate);