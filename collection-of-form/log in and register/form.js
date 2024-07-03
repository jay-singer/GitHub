const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".registerLink");

const LoginLink = document.querySelector(".loginLink");
const button = document.querySelector(".login-btn");
const close = document.querySelector(".close-icon");
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

LoginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
button.addEventListener("click", () => {
  wrapper.classList.add("active-btn");
});
close.addEventListener("click", () => {
  wrapper.classList.remove("active-btn");
});
