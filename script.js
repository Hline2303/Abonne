// console.log("connecté !");

const icone = document.querySelector("i");
// console.log(icone);

const btnButton = document.querySelector(".btn");
console.log(btnButton);
// Transformation de l'icône au clic
icone.addEventListener("click", function () {
  console.log("icone cliquée");
  icone.classList.toggle("fa-smile-wink");
  icone.classList.toggle("happy");
});

//  Je modifie le bouton au clic
btnButton.addEventListener("click", function () {
  console.log("bouton cliqué !");
  btnButton.classList.toggle("abonné");
  if (btnButton.innerText === "Abonné") {
    btnButton.innerText = "Abonnez-vous";
  } else {
    console.log("else");
    btnButton.innerText = "Abonné";
  }
});
