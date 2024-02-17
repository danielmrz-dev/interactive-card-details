const numberOnCard = document.querySelector(".cards__front-number");
const nameOnCard = document.querySelector(".cards__name");
const expDateOnCard = document.querySelector(".cards__exp-date");
const cvcOnCard = document.querySelector(".cards__back-number");
const nameInput = document.querySelector("#cardholder-name");
const cardNumberInput = document.querySelector("#card-number");
const monthInput = document.querySelector("#exp-date-month");
const yearInput = document.querySelector("#exp-date-year");
const cvcInput = document.querySelector("#cvv");
const confirmBtn = document.querySelector(".cards__button");
const emptyCardholder = document.querySelector("#empty-cardholder");
const emptyCardNumber = document.querySelector("#empty-card-number");
const emptyMonth = document.querySelector("#empty-month");
const emptyCvv = document.querySelector("#empty-cvv");
const form = document.querySelector(".cards__form");
const mm = document.querySelector("#MM");
const yy = document.querySelector("#YY");
const thankYouPage = document.querySelector(".cards__thank-you");
const continueBtn = document.querySelector(".cards__continue");

nameInput.focus();

nameInput.addEventListener("input", () => {
    nameOnCard.innerHTML = nameInput.value;
});

nameInput.addEventListener('keypress', (event) => {
    const charCode = event.charCode;

    if (charCode >= 48 && charCode <= 57) {
        event.preventDefault();
    } 
})

cardNumberInput.addEventListener("input", () => {
    const maxNumber = 16;
    if (cardNumberInput.value > maxNumber) {
        cardNumberInput.value = cardNumberInput.value.slice(0, maxNumber);
    }

    let value = cardNumberInput.value.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += " " + value.charAt(i);
        } else {
            formattedValue += value.charAt(i);
        }
    }

    numberOnCard.innerHTML = formattedValue;
    cardNumberInput.value = formattedValue;
});

monthInput.addEventListener("input", () => {
    const maxMonth = 2;
    if (monthInput.value > maxMonth) {
        monthInput.value = monthInput.value.slice(0, maxMonth);
    }
    mm.innerHTML = monthInput.value;
});

yearInput.addEventListener("input", () => {
    const maxYear = 2;
    if (yearInput.value > maxYear) {
        yearInput.value = yearInput.value.slice(0, maxYear);
    }
    yy.innerHTML = yearInput.value;
});

cvcInput.addEventListener("input", () => {
    const maxLength = 3;
    if (cvcInput.value.length > maxLength) {
        cvcInput.value = cvcInput.value.slice(0, maxLength);
    }
    cvcOnCard.innerHTML = cvcInput.value;
});

function validate() {
    if (nameInput.value.length == 0) {
        emptyCardholder.classList.add("active-error");
        nameInput.classList.add("active-error-input");
    } else {
        emptyCardholder.classList.remove("active-error");
        nameInput.classList.remove("active-error-input");
    }

    if (
        cardNumberInput.value.length == 0 ||
        cardNumberInput.value.length < 19
    ) {
        cardNumberInput.classList.add("active-error-input");
        emptyCardNumber.classList.add("active-error");
    } else {
        emptyCardNumber.classList.remove("active-error");
        cardNumberInput.classList.remove("active-error-input");
    }

    if (monthInput.value == 0) {
        monthInput.classList.add("active-error-input");
        emptyMonth.classList.add("active-error");
    } else if (monthInput.value > 12) {
        emptyMonth.classList.add("active-error");
        monthInput.classList.add("active-error-input");
        emptyMonth.innerHTML = "Invalid month and/or year";
    } else {
        emptyMonth.classList.remove("active-error");
        monthInput.classList.remove("active-error-input");
    }

    if (yearInput.value == 0) {
        yearInput.classList.add("active-error-input");
        emptyMonth.classList.add("active-error");
    } else if (yearInput.value < 24) {
        emptyMonth.classList.add("active-error");
        yearInput.classList.add("active-error-input");
        emptyMonth.innerHTML = "Invalid month and/or year";
    } else {
        yearInput.classList.remove("active-error-input");
    }

    if (cvcInput.value == 0) {
        emptyCvv.classList.add("active-error");
        cvcInput.classList.add("active-error-input");
    } else if (cvcInput.value.length < 3) {
        emptyCvv.classList.add("active-error");
        emptyCvv.innerHTML = "Invalid CVC";
        cvcInput.classList.add("active-error-input");
    } else {
        emptyCvv.classList.remove("active-error");
        cvcInput.classList.remove("active-error-input");
    }

    if (
        !nameInput.classList.contains("active-error-input") &&
        !cardNumberInput.classList.contains("active-error-input") &&
        !monthInput.classList.contains("active-error-input") &&
        !yearInput.classList.contains("active-error-input") &&
        !cvcInput.classList.contains("active-error-input")
    ) {
        form.style.display = "none";
        thankYouPage.style.display = "flex";
    }
}

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validate();
});
