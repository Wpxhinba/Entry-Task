document.getElementById("add_button").addEventListener("click", function () {
  var inputValue = document.getElementById("to-do_input").value;
  addToDoItem(inputValue);
});

function addToDoItem(inputValue) {
  if (inputValue) {
    var li = document.createElement("li");

    var div = document.createElement("div");

    const time = Date.now();

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = time;
    div.appendChild(checkbox);

    var text = document.createElement("label");
    text.htmlFor = time;
    text.textContent = inputValue;
    div.appendChild(text);

    li.appendChild(div);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Устгах";
    deleteButton.addEventListener("click", function () {
      this.parentElement.remove();
    });
    li.appendChild(deleteButton);

    document.getElementById("to-do_list").appendChild(li);
    document.getElementById("to-do_input").value = "";
  }
}
