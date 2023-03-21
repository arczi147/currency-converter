let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-form__currency");
let amountElement = document.querySelector(".js-form__amount");
let resultElement = document.querySelector(".js-form__result");

let EUR = 4.6967;
let USD = 4.4508;
let GBP = 5.3213;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let currency = currencyElement.value;
let amount = amountElement.value;
let result = resultElement.value;

switch (currency) {
    case "EUR":
        result = amount * EUR;
        break;

    case "USD":
        result = amount * USD;
        break;

    case "GBP":
        result = amount * GBP;
        break;

}
resultElement.innerText = result.toFixed(2);
});