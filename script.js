const RATE = 1.95583;

const form = document.getElementById("converterForm");
const amountInput = document.getElementById("amount");
const directionSelect = document.getElementById("direction");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Моля, въведете валидна сума.";
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
});