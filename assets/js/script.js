const btnSubmit = document.getElementById("submit");
const modal = document.getElementById("modal");
const output = document.getElementById("output");
let rating;
const buttons = [...document.getElementsByClassName("ratings")];
buttons.forEach(button => 
    button.addEventListener("click", (e) => {
        rating = e.target.value;
        output.textContent = rating;
    }));

btnSubmit.addEventListener("click", (e) => {
modal.showModal();
})

