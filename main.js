let plus = document.querySelectorAll(".plus-btn");
let moins = document.querySelectorAll(".minus-btn");
let trashs = document.querySelectorAll(".fa-trash-alt");
let hearts = document.querySelectorAll(".fa-heart");
// plusbtn
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++;

    total();
  });
}
// minusbtn
for (let i = 0; i < moins.length; i++) {
  moins[i].addEventListener("click", function () {
    if (moins[i].previousElementSibling.innerHTML > 0)
      moins[i].previousElementSibling.innerHTML--;
    total();
  });
}
// delete product
for (let trash of trashs) {
  trash.addEventListener("click", function () {
    trash.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    total();
  });
}
// like product
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("hear");
  });
}
// total price
function total() {
  var quantity = document.getElementsByClassName("qute");
  var unitPrice = document.getElementsByClassName("unitt-price");
  var totalPrice = document.querySelector("#total-price");
  let somme = 0;
  for (let i = 0; i < quantity.length; i++) {
    somme += quantity[i].innerHTML * unitPrice[i].innerHTML;
  }
  totalPrice.innerHTML = somme;
}




