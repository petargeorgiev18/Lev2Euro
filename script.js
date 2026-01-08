const RATE = 1.95583;

const form = document.getElementById("converterForm");
const amountInput = document.getElementById("amount");
const directionSelect = document.getElementById("direction");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Please enter a valid amount.";
        return;
    }

    const result =
        directionSelect.value === "EUR_TO_BGN"
            ? amount * RATE
            : amount / RATE;

    resultDiv.textContent = result.toFixed(2);
});