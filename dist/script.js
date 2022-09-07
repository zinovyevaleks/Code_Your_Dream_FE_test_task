"use strict";

var testForm = document.querySelector(".test__table");
var formRows = testForm.querySelectorAll(".questions__body .questions__row");
var checkboxes = testForm.querySelectorAll(".form__checkbox-input");
var errorMessage = document.querySelector(".test__error");
var scrollToButton = document.querySelector(".test__error-scroll");

function handleFormSubmit(event) {
  formRows.forEach(function (row) {
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

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    checkbox.closest(".questions__row").classList.remove("isError");
    checkIsErrors();
  });
});
testForm.addEventListener("submit", handleFormSubmit);
scrollToButton.addEventListener("click", function () {
  var firstError = document.querySelector(".isError");
  firstError.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
  setTimeout(function () {
    firstError.classList.add('isError--animated');
  }, 1000);
  setTimeout(function () {
    firstError.classList.remove('isError--animated');
  }, 1500);
});