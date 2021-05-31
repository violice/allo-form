"use strict";

var deliveryCardKeys = ["pickUp", "courierCity", "courierCountry"];
deliveryCardKeys.forEach(function (key) {
  var cardEl = document.getElementById(key);
  cardEl.addEventListener("click", function () {
    deliveryCardKeys.forEach(function (key) {
      document.getElementById(key).classList.remove("a-card--active");
      document.getElementById("".concat(key, "Form")).classList.remove("d-block");
    });
    cardEl.classList.add("a-card--active");
    document.getElementById("".concat(key, "Form")).classList.add("d-block");
  });
});
var paymentCardKeys = ["cash", "credit", "creditCard", "onlineCard", "cashless"];
paymentCardKeys.forEach(function (key) {
  var cardEl = document.getElementById(key);
  cardEl.addEventListener("click", function () {
    paymentCardKeys.forEach(function (key) {
      document.getElementById(key).classList.remove("a-card--active");
      document.getElementById("".concat(key, "Form")).classList.remove("d-block");
    });
    cardEl.classList.add("a-card--active");
    document.getElementById("".concat(key, "Form")).classList.add("d-block");
  });
});