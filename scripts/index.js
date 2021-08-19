const deliveryCardKeys = ["pickUp", "courierCity", "courierCountry"];

deliveryCardKeys.forEach((key) => {
  const cardEl = document.getElementById(key);
  if (cardEl) {
    cardEl.addEventListener("click", (e) => {
      deliveryCardKeys.forEach((key) => {
        const _cardEl = document.getElementById(key);
        if (_cardEl) {
          document.getElementById(key).classList.remove("a-card--active");
          document.getElementById(`${key}Form`).classList.remove("a-d-block");
        }
      });
      const innerEl = document.getElementById(`${key}Form`);
      const mql = window.matchMedia("screen and (max-width: 576px)");
      const targetEl = mql.matches
        ? e.currentTarget
        : document.getElementById("deliveryCards");
      targetEl.after(innerEl);
      cardEl.classList.add("a-card--active");
      innerEl.classList.add("a-d-block");
    });
  }
});

const paymentCardKeys = [
  "cash",
  "credit",
  "installmentPlan",
  "creditCard",
  "onlineCard",
  "cashless",
];

paymentCardKeys.forEach((key) => {
  const cardEl = document.getElementById(key);
  if (cardEl) {
    cardEl.addEventListener("click", (e) => {
      paymentCardKeys.forEach((key) => {
        const _cardEl = document.getElementById(key);
        if (_cardEl) {
          document.getElementById(key).classList.remove("a-card--active");
          document.getElementById(`${key}Form`).classList.remove("a-d-block");
        }
      });
      const innerEl = document.getElementById(`${key}Form`);
      const mql = window.matchMedia("screen and (max-width: 576px)");
      const targetEl = mql.matches
        ? e.currentTarget
        : document.getElementById("paymentCards");
      targetEl.after(innerEl);
      cardEl.classList.add("a-card--active");
      innerEl.classList.add("a-d-block");
    });
  }
});

window
  .matchMedia("screen and (max-width: 576px)")
  .addEventListener("change", () => {
    deliveryCardKeys.forEach((key) => {
      document.getElementById(key).classList.remove("a-card--active");
      document.getElementById(`${key}Form`).classList.remove("a-d-block");
    });
    paymentCardKeys.forEach((key) => {
      document.getElementById(key).classList.remove("a-card--active");
      document.getElementById(`${key}Form`).classList.remove("a-d-block");
    });
  });
