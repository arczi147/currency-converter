const calculateResult = (amount, currency) => {

    const EUR = 4.6967;
    const USD = 4.4508;
    const GBP = 5.3213;

    switch (currency) {
        case "EUR":
            return amount * EUR;

        case "USD":
            return amount * USD;

        case "GBP":
            return amount * GBP;
    }
};

const updateResult = (result) => {
    const resultElement = document.querySelector(".js-form__result");
    resultElement.innerText = result.toFixed(2);
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-form__currency");
    const amountElement = document.querySelector(".js-form__amount");

    const currency = currencyElement.value;
    const amount = amountElement.value;

    const result = calculateResult(amount, currency);

    updateResult(result);
};

const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
};

init();