const alertt = document.getElementsByClassName("noitem")[0];
const done = document.getElementsByClassName("additem")[0];
const empty = document.getElementsByClassName("clearitem")[0];
const item = document.getElementById("item");
const clear = document.getElementById("clear");
const form = document.querySelector("form");
const placeItems = document.getElementsByClassName("items")[0];
const removed = document.getElementsByClassName("removeditem")[0];
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  if (item.value == "") {
    alertt.style.display = "block";
    done.style.display = "none";
    empty.style.display = "none";
    setTimeout(() => {
      alertt.style.display = "none";
    }, 1000);
  } else {
    done.style.display = "block";
    alertt.style.display = "none";
    empty.style.display = "none";
    setTimeout(() => {
      done.style.display = "none";
    }, 1000);
    const newDiv = document.createElement("div");
    newDiv.innerHTML += `
    <span class="mine">${item.value}</span>
    <div class="icons">
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash"></i>
    </div>
    `;
    item.value = "";
    clear.style.display = "block";
    placeItems.prepend(newDiv);
  }
});
clear.addEventListener("click", (eo) => {
  const remove = document.querySelectorAll("div.items div");
  remove.forEach((item) => {
    item.remove();
  });
  alertt.style.display = "none";
  done.style.display = "none";
  clear.style.display = "none";
  empty.style.display = "block";
  setTimeout(() => {
    empty.style.display = "none";
  }, 1000);
});
placeItems.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("fa-trash")) {
    eo.target.parentElement.parentElement.remove();
    alertt.style.display = "none";
    done.style.display = "none";
    empty.style.display = "none";
    removed.style.display = "block";
    setTimeout(() => {
      removed.style.display = "none";
    }, 1000);
    if (placeItems.textContent == "") {
      clear.style.display = "none";
    }
  }
  if (eo.target.classList.contains("fa-edit")) {
    const find =
      eo.target.parentElement.parentElement.getElementsByClassName("mine")[0]
        .textContent;
    item.value = find;
  }
});
