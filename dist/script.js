"use strict";

var testForm = document.querySelector(".test__table");
var formRows = testForm.querySelectorAll(".questions__body .questions__row");
var checkboxes = testForm.querySelectorAll(".form__checkbox-input");

function handleFormSubmit(event) {
  formRows.forEach(function (row) {
    if (!row.querySelector(".form__checkbox-input:checked")) {
      event.preventDefault();
      row.classList.add("isError");
      console.log("error");
    } else {
      console.log("Отправка");
    }
  });
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    console.log("change");
    checkbox.closest(".questions__row").classList.remove("isError");
  });
});
testForm.addEventListener("submit", handleFormSubmit);