let elInputNumber = document.querySelector(".input-value");
let elBtnCheck = document.querySelector(".btn-checked");
let elResult = document.querySelector(".result");

elBtnCheck.addEventListener("click", (evt) => {
    evt.preventDefault();
    elResult.textContent = (Number(elInputNumber.value) * 9/5) + 32 + " farengeyt";
    if (elInputNumber.value === "") {
        elResult.textContent = "Iltimos raqam kiriting";
        elResult.style.color = "red";
    } else {
        elResult.style.color = "black"; 
    }
});  