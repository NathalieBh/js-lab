const textareaE = document.querySelector(".textarea");
const nombreCaracteresE = document.querySelector(".stat__number--caracters");
const nombreTwitterE = document.querySelector(".stat__number--twitter");
const nombreFacebookE = document.querySelector(".stat__number--facebook");
const nombreMotsE = document.querySelector(".stat__number--mots");

const inputHandler = () => {
  if (textareaE.value.includes("<script>")) {
    alert(" Texte non accapté");
    textareaE.value = textareaE.value.replace("<script>", "");
  }

  const nombreCaracteres = textareaE.value.length;
  const nombreRestantTwitter = 280 - nombreCaracteres;
  const nombreRestantFacebook = 2200 - nombreCaracteres;
  let nombreMots = textareaE.value.split(" ").length;
  if (textareaE.value.length === 0) {
    nombreMots = 0;
  }

  if (nombreRestantTwitter < 0) {
    nombreTwitterE.classList.add("stat__number--limit");
  } else {
    nombreTwitterE.classList.remove("stat__number--limit");
  }
  if (nombreRestantFacebook < 0) {
    nombreFacebookE.classList.add("stat__number--limit");
  } else {
    nombreFacebookE.classList.remove("stat__number--limit");
  }

  nombreCaracteresE.textContent = nombreCaracteres;
  nombreTwitterE.textContent = nombreRestantTwitter;
  nombreFacebookE.textContent = nombreRestantFacebook;
  nombreMotsE.textContent = nombreMots;
};

textareaE.addEventListener("input", inputHandler);
