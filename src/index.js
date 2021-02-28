
const main = document.querySelector(".item_list");

main.querySelectorAll(".item_list .item").forEach((e) => {
  e.addEventListener("dragstart", item_dragstart);
  e.addEventListener("dragover", item_dragover);
  e.addEventListener("drop", item_drop);
});

function item_dragstart(e) {
  e.dataTransfer.setData("id", this.id);
}

function item_dragover(e) {
  e.preventDefault();
}

function item_drop(e) {
  let from = document.querySelector("#" + e.dataTransfer.getData("id"));

  [this.innerHTML, from.innerHTML] = [from.innerHTML, this.innerHTML];
}

main.querySelectorAll(".item").forEach((e) => {
  e.addEventListener("click", edit);
});

function edit(e) {
  let productName = e.target;
  let da = document.getElementById("red");

  function checkClass() {
    if (productName.classList.contains("item__name")) {
      da.style.display = "block";
      da.getElementsByClassName("newName").[0].value = productName.innerHTML;
    }
  }
  checkClass();

  let net = document.getElementById("knopka");
  net.onclick = function () {
    da.style.display = "none";
    productName.innerHTML = da.getElementsByClassName("newName").[0].value
  };
}
