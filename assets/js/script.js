const pepsiBody = document.getElementById("pepsiBody");

const mainImg = document.getElementById("pepsi-main-img");
const pepsi1= document.getElementById("pepsi001");
const pepsi2= document.getElementById("pepsi002");
const pepsi3= document.getElementById("pepsi003");

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
})

pepsi1.addEventListener("click", () => {
    let colorValue = pepsiBody.classList.value;
    pepsiBody.classList.remove(colorValue);
    pepsiBody.classList.add("blue-background");
    mainImg.src = "./assets/img/pepsi/pepsi-pepsi001.png";

});

pepsi2.addEventListener("click", () => {
    let colorValue = pepsiBody.classList.value;
    pepsiBody.classList.remove(colorValue);
    pepsiBody.classList.add("red-background");
    mainImg.src = "./assets/img/pepsi/pepsi-pepsi002.png";
});

pepsi3.addEventListener("click", () => {
    let colorValue = pepsiBody.classList.value;
    pepsiBody.classList.remove(colorValue);
    pepsiBody.classList.add("black-background");
    mainImg.src = "./assets/img/pepsi/pepsi-pepsi003.png";
});