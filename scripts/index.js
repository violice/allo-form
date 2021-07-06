const deliveryCardKeys = ["pickUp", "courierCity", "courierCountry"];

deliveryCardKeys.forEach((key) => {
  const cardEl = document.getElementById(key);
  cardEl.addEventListener("click", () => {
    deliveryCardKeys.forEach((key) => {
      document.getElementById(key).classList.remove("a-card--active");
      document.getElementById(`${key}Form`).classList.remove("d-block");
    });
    cardEl.classList.add("a-card--active");
    document.getElementById(`${key}Form`).classList.add("d-block");
  });
});


const paymentCardKeys = ["cash", "credit", "installmentPlan", "creditCard", "onlineCard", "cashless"];

paymentCardKeys.forEach((key) => {
  const cardEl = document.getElementById(key);
  cardEl.addEventListener("click", () => {
    paymentCardKeys.forEach((key) => {
      document.getElementById(key).classList.remove("a-card--active");
      document.getElementById(`${key}Form`).classList.remove("d-block");
    });
    cardEl.classList.add("a-card--active");
    document.getElementById(`${key}Form`).classList.add("d-block");
  });
});