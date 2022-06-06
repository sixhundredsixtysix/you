const inputName = document.querySelector(".inputName");
const buttonStart = document.querySelector(".buttonStart");
const mainTitle = document.querySelector(".mainTitle");
const subTitle = document.querySelector(".subTitle");
const kuromi1 = document.querySelector(".kuromi-1");
const kuromi2 = document.querySelector(".kuromi-2");
const kuromi3 = document.querySelector(".kuromi-3");
const boxImages = document.querySelector(".boxImages");
const images = document.querySelectorAll(".imgScreenshot");

let isFirstName = true;
let attempts = 0;

function validateName(name, nameExpected) {
  let nameCaps = name.toUpperCase();
  if (nameCaps == nameExpected) {
    return true;
  }
}

function clearInput() {
  inputName.value = "";
}

function updateScreen() {
  inputName.style.display = "none";
  buttonStart.style.display = "none";
  subTitle.style.display = "none";
  mainTitle.textContent = "I miss ''us'' more than I can describe :(";
  kuromi1.style.display = "none";
  kuromi2.style.display = "block";

  setTimeout(() => {
    boxImages.style.top = 0;
    setTimeout(() => {
      handleScroll();
    }, 2000);
  }, 3000);
}

function handleInput(e) {
  if (e.key == "Enter") {
    if (attempts == 2) {
      alert("you shouldn't be accessing this site!!!".toUpperCase());
      inputName.disabled = true;
      buttonStart.disabled = true;
      inputName.style.cursor = "not-allowed";
      buttonStart.style.cursor = "not-allowed";
      mainTitle.textContent = "Get out of this site right now!!!".toUpperCase();
      kuromi1.style.display = "none";
      kuromi3.style.display = "block";

      return false;
    }

    isFirstName ? handleFirstName() : handleSecondName();
  }
}

function handleFirstName() {
  let nameIsRamom = validateName(inputName.value, "RAMOM");
  const phrase = "Please insert your second name:";

  if (nameIsRamom) {
    alert(
      "Very well, Ramom. But before we go, I need you to know if u r rlly my momo"
    );

    subTitle.textContent = phrase;
    inputName.placeholder = phrase;

    isFirstName = false;
    clearInput();
  } else {
    alert("It seems to me that you shouldn't be accessing this site...");
    attempts += 1;
    clearInput();
  }
}
function handleSecondName() {
  let nameIsBenfica = validateName(inputName.value, "BENFICA");

  if (nameIsBenfica) {
    alert("So it is really you... I hope you enjoy :)");
    clearInput();
    updateScreen();
  } else {
    alert("You are a Ramom, but you're not the right Ramom.");
    attempts += 1;
    clearInput();
  }
}

function handleClick() {
  handleInput({ key: "Enter" });
}

function handleScroll() {
  images.forEach(el => {
    let elTop = el.getBoundingClientRect().top;

    if (elTop < window.innerHeight - 150) {
      el.classList.add("animate");
    }
  });
}

inputName.addEventListener("keypress", handleInput);
buttonStart.addEventListener("click", handleClick);
// updateScreen();

boxImages.addEventListener("scroll", function () {
  handleScroll();
});