const addButton = $("#addButton");
const input = $("#input");

function newListItem(text, id, type = "normal") {
  $("#list").append(
    `<div id="${id}" class="listItem ${type}"><div class="listItemText"><p class="actualText">${text}</p></div><div class="listItemButton">x</div></div>`
  );
}

function addNew() {
  let inputRaw = input.val();
  if (inputRaw != "") {
    if (inputRaw.length <= 30) {
      let inputNew = inputRaw.split(" ").join("_");
      newListItem(inputRaw, inputNew);
      input.val("");
    } else {
      $("#alert").fadeIn(1000);
      $("#alertText").text("Input exceeds 30 characters!");
      $("#alert").fadeOut(1000);
    }
  }
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

$("#alert").hide();
