const signInLink = document.querySelector(".signInLink");
const signUpLink = document.querySelector(".signUpLink");
const wrapper = document.querySelector(".wrapper");

signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.add("active");
});

signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.remove("active");
});

