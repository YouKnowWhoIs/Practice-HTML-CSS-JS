// перше завдання на ToDo List
function addTask() {
  const input = document.getElementById("input");
  const list = document.querySelector(".list");

  const textText = input.value.trim();

  if (textText === "") return;

  const li = document.createElement("li");
  li.textContent = textText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "видалити";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}

// друге завдання на модальне вiкно
// перший спосiб

function openModal1() {
  if (document.querySelector(".conteinerModal1")) return;

  const modal1 = document.querySelector(".conteiner");

  const divBackground = document.createElement("div");
  divBackground.classList.add("conteinerModal1");
  divBackground.onclick = () => divBackground.remove();

  const divModal = document.createElement("div");
  divModal.classList.add("modal1");
  divModal.setAttribute("role", "dialog");
  divModal.setAttribute("aria-modal", "true");
  divModal.onclick = (event) => event.stopPropagation();

  const closeModalBtn = document.createElement("button");
  closeModalBtn.textContent = "закрити модальне вікно";
  closeModalBtn.onclick = () => divBackground.remove();

  const p = document.createElement("p");
  p.textContent = "модальне вiкно №1";

  modal1.appendChild(divBackground);
  divBackground.appendChild(divModal);
  divModal.appendChild(p);
  divModal.appendChild(closeModalBtn);
}

// другий спосiб

function openModal2() {
  const conteinerModal = document.querySelector(".conteinerModal2");
  const modal2 = document.querySelector(".modal2");

  if (conteinerModal.style.display === "flex") return;

  modal2.onclick = (event) => event.stopPropagation();

  conteinerModal.style.display = "flex";
}

function closeModal() {
  const conteinerModal = document.querySelector(".conteinerModal2");

  conteinerModal.style.display = "none";
}

// третье завдання на карусель зоображень

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const img = document.getElementById("coruselImg");

const images = [
  "https://www.researchgate.net/profile/Ana-Belen-Petro/publication/221121660/figure/fig1/AS:393937056485384@1470933321643/Top-original-image-600-400-pixels-Bottom-two-representations-of-the-original.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/5b/India_Gate_600x400.jpg",
  "https://static.toiimg.com/thumb/width-600,height-400,msid-45454098.cms",
];

let currentIndex = 0;

function updateImage() {
  img.src = images[currentIndex];
}
updateImage();

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// четверте завдання

const acardionOpenBtn = document.querySelectorAll(".accordionOpen");

acardionOpenBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    const parentItem = btn.closest(".accordionContainer");

    const text = parentItem.querySelector(".accordionContent");

    if (text) {
      text.classList.toggle("open");
    }
  })
);

// п'яте завдання

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  submitForm();
});

function showError(text) {
  const errorText = document.querySelector(".errorText");

  errorText.textContent = text;
}

function submitForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  const trimmedName = name.value.trim();
  const trimmedEmail = email.value.trim();

  if (trimmedName === "" && !trimmedEmail.includes(".")) {
    showError("Поля пустi!");
  } else if (trimmedName === "") {
    name.focus();
    showError("Поле з iм'ям пусте!");
  } else if (!trimmedEmail.includes(".")) {
    email.focus();
    showError("Поле з емейлом не правильне або пусте!");
  } else {
    showError("Все правильно!");
    name.value = "";
    email.value = "";
  }
}

// завдання на логіку
// while (true) {
//   let n = prompt("Введи парне число", "");

//   if (!n) {
//     break;
//   }

//   n = +n;

//   if (n <= 1 || n % 2 !== 0) {
//     alert("Введи число більше 1 і парне!");
//     continue;
//   }

//   nextPrime: for (let i = 2; i <= n; i++) {
//     for (let a = 2; a < i; a++) {
//       if (i % a == 0) continue nextPrime;
//     }
//     alert(i);
//   }
// }
