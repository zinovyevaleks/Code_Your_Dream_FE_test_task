"use strict";

const testForm = document.querySelector(".test__table");
const formRows = testForm.querySelectorAll(".questions__body .questions__row");
const checkboxes = testForm.querySelectorAll(".form__checkbox-input");
const errorMessage = document.querySelector(".test__error");
const scrollToButton = document.querySelector(".test__error-scroll");

function handleFormSubmit(event) {
  formRows.forEach((row) => {
    if (!row.querySelector(".form__checkbox-input:checked")) {
      event.preventDefault();
      row.classList.add("isError");
      errorMessage.classList.add("test__error--shown");
    }
  });
}

function checkIsErrors() {
  if (!document.querySelectorAll(".isError").length) {
    errorMessage.classList.remove("test__error--shown");
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    checkbox.closest(".questions__row").classList.remove("isError");
    checkIsErrors();
  });
});

testForm.addEventListener("submit", handleFormSubmit);

scrollToButton.addEventListener("click", () => {
  const firstError = document.querySelector(".isError");
  firstError.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => {
    firstError.classList.add('isError--animated');
  }, 1000);
  setTimeout(() => {
    firstError.classList.remove('isError--animated');
  }, 1500);
});
