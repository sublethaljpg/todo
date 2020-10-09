const addButton = $("#addButton");
const input = $("#input");

function newListItem(text, id, type = "normal") {
  $("#list").append(
    `<div id="${id}" class="listItem ${type}"><div class="listItemText">${text}</div><button class="listItemButton">x</button></div>`
  );
}

function addNew() {
  let inputRaw = input.val();
  if (inputRaw != "") {
    let inputNew = inputRaw.split(" ").join("_");
    newListItem(inputRaw, inputNew);
  }
  input.val("");
}

addButton.click(function () {
  addNew();
});

input.on("keyup", function (event) {
  if (event.keyCode === 13) {
    // event.preventDefault();
    addButton.click();
  }
});

$("#list").on("click", ".listItemButton", function () {
  $(this).parent().remove();
});
