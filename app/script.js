"use strict";

const testForm = document.querySelector(".test__table");
const formRows = testForm.querySelectorAll(".questions__body .questions__row");
const checkboxes = testForm.querySelectorAll(".form__checkbox-input");

function handleFormSubmit(event) {
  formRows.forEach((row) => {
    if (!row.querySelector(".form__checkbox-input:checked")) {
      event.preventDefault();
      row.classList.add("isError");
      console.log("error");
    } else {
      console.log("Отправка");
    }
  });
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    console.log("change");
    checkbox.closest(".questions__row").classList.remove("isError");
  });
});

testForm.addEventListener("submit", handleFormSubmit);
