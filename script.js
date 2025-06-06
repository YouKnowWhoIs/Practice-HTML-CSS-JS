// перше завдання на ToDo List
function showToDoListError(text) {
  const errorToDoText = document.querySelector(".errorToDoText");

  errorToDoText.textContent = text;
}

function addTask() {
  const input = document.getElementById("input");
  const list = document.querySelector(".list");

  const textText = input.value.trim();

  if (textText === "") {
    showToDoListError("Поле пусте!");
    return;
  } else {
    showToDoListError("");
  }

  const li = document.createElement("li");
  li.classList.add("listBorder");

  const span = document.createElement("span");
  span.classList.add("listContent");
  span.textContent = textText;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "видалити";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  span.appendChild(deleteBtn);
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
  closeModalBtn.classList.add("closeModalBtn");
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

function showFormError(text) {
  const errorText = document.querySelector(".errorText");

  errorText.textContent = text;
}

function submitForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  const trimmedName = name.value.trim();
  const trimmedEmail = email.value.trim();

  if (trimmedName === "" && !trimmedEmail.includes(".")) {
    showFormError("Поля пустi!");
  } else if (trimmedName === "") {
    name.focus();
    showFormError("Поле з iм'ям пусте!");
  } else if (!trimmedEmail.includes(".")) {
    email.focus();
    showFormError("Поле з емейлом не правильне або пусте!");
  } else {
    showFormError("Все правильно!");
    name.value = "";
    email.value = "";
  }
}

// шосте завдання

function timerSecond() {
  const second = document.querySelector(".second");

  let timerId = setInterval(() => {
    let count = Number(second.textContent);
    count--;
    second.textContent = count;

    if (count === 0) {
      clearInterval(timerId);
      alert("10 секунд пройшло!");

      second.textContent = 10;
    }
  }, 1000);
}

//  сьоме завдання
function errorSearch(text) {
  const errorSearch = document.querySelector(".errorSearch");

  errorSearch.textContent = text;
}

const inputSearch = document.querySelector(".inputSearch");
const items = document.querySelectorAll(".listFruit li");

const itemsArray = Array.from(items);

function search() {
  const query = inputSearch.value.toLowerCase();
  if (query.trim() === "") {
    errorSearch("Поле пусте!");
    inputSearch.focus();
    return;
  } else {
    errorSearch("");
  }

  let foundCount = 0;

  itemsArray.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const match = text.includes(query);
    item.style.display = match ? "list-item" : "none";

    if (match) {
      foundCount++;
    }
  });

  if (foundCount === 0) {
    errorSearch("Нiчого не знайдено");
  }

  inputSearch.value = "";
}

function resetList() {
  itemsArray.forEach((item) => {
    item.style.display = "list-item";
  });
  inputSearch.value = "";
  errorSearch("");
}

// восьме завдання (переключатель теми)

const toggle = document.querySelector(".themeToggle");

const saveTheme = localStorage.getItem("theme");

if (saveTheme === "light") {
  document.body.classList.add("light");
  toggle.checked = false;
} else {
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  let theme = toggle.checked ? true : false;

  if (theme === true) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    toggle.checked = true;
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    toggle.checked = false;
  }
});

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
