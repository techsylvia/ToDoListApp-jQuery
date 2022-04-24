//1.

let inputSelector = $("#input");
inputSelector.on("keyup", (event) => {
  let addButton = $("#button");
  // keyCode13 == enterButton
  if (event.keyCode === 13) {
    event.preventDefault();
    // Trigger the button element with a click
    addButton.click();
  }
});

function newItem() {
  let li = $("<li></li>"); // creating li for HTML

  let inputValue = $("#input").val(); // selecting the id="input" in HTML file
  li.append(inputValue);

  if (inputValue === "") {
    alert("Type something");
  } else {
    $("#list").append(li); // selecting id="list" from the HTML file
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike"); //Toggles between hide() & show() for the selected elements.
    //This method checks the selected elements for visibility,
    //show() is run if an element is hidden. hide() is run if an element is visible.
  });

  // Adding the delete X
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //what crossOutButton is suppsed to do:
  crossOutButton.on("click", deleteListItem);
  //create a function to delete
  function deleteListItem() {
    li.addClass("delete");
  }
  //4. Reordering the items:
  $("#list").sortable();

  $("#input").val("");
}
