const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.getElementById("cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("active");
});

cartClose.addEventListener("click", () => {
    cart.classList.remove("active");
});