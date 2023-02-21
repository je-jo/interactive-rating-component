const btnSubmit = document.getElementById("submit");
const form = document.getElementById("form");
const modal = document.getElementById("modal");
const output = document.getElementById("output");
let rating;
const buttons = [...document.getElementsByClassName("ratings")];
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    btnSubmit.removeAttribute("disabled");
    rating = e.target.value;
    output.textContent = rating;
  })
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.showModal();
});

modal.addEventListener("click", () => modal.close()); //click anywhere to close modal
