"use strict";

var deliveryCardKeys = ["pickUp", "courierCity", "courierCountry"];
deliveryCardKeys.forEach(function (key) {
  var cardEl = document.getElementById(key);

  if (cardEl) {
    cardEl.addEventListener("click", function (e) {
      deliveryCardKeys.forEach(function (key) {
        var _cardEl = document.getElementById(key);

        if (_cardEl) {
          document.getElementById(key).classList.remove("a-card--active");
          document.getElementById("".concat(key, "Form")).classList.remove("a-d-block");
        }
      });
      var innerEl = document.getElementById("".concat(key, "Form"));
      var mql = window.matchMedia("screen and (max-width: 576px)");
      var targetEl = mql.matches ? e.currentTarget : document.getElementById("deliveryCards");
      targetEl.after(innerEl);
      cardEl.classList.add("a-card--active");
      innerEl.classList.add("a-d-block");
    });
  }
});
var paymentCardKeys = ["cash", "credit", "installmentPlan", "creditCard", "onlineCard", "cashless"];
paymentCardKeys.forEach(function (key) {
  var cardEl = document.getElementById(key);

  if (cardEl) {
    cardEl.addEventListener("click", function (e) {
      paymentCardKeys.forEach(function (key) {
        var _cardEl = document.getElementById(key);

        if (_cardEl) {
          document.getElementById(key).classList.remove("a-card--active");
          document.getElementById("".concat(key, "Form")).classList.remove("a-d-block");
        }
      });
      var innerEl = document.getElementById("".concat(key, "Form"));
      var mql = window.matchMedia("screen and (max-width: 576px)");
      var targetEl = mql.matches ? e.currentTarget : document.getElementById("paymentCards");
      targetEl.after(innerEl);
      cardEl.classList.add("a-card--active");
      innerEl.classList.add("a-d-block");
    });
  }
});
window.matchMedia("screen and (max-width: 576px)").addEventListener("change", function () {
  deliveryCardKeys.forEach(function (key) {
    document.getElementById(key).classList.remove("a-card--active");
    document.getElementById("".concat(key, "Form")).classList.remove("a-d-block");
  });
  paymentCardKeys.forEach(function (key) {
    document.getElementById(key).classList.remove("a-card--active");
    document.getElementById("".concat(key, "Form")).classList.remove("a-d-block");
  });
});