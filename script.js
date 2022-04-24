$(function () {
  let li = $("<li></li>"); // creating li for HTML
  let inputValue = $("#input").val(); // selecting the id="input" in HTML file
  $("#li").append(inputValue);

  if (inputValue === "") {
    alert("Type something");
  } else {
    $("#list").append(li); // selecting id="list" from the HTML file
  }
  // Crossing out an item from the list of items:
  function crossOut() {
    li.classList.toggle("strike"); // toggle() attaches two or more functions to toggle between for the click event
    //for the selected elements. When clicking on an element, the first specified function fires, when clicking again,
    //the second function fires, and so on.
  }
});
