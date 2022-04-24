$(function () {
  let li = $("<li></li>"); // creating li for HTML
  let inputValue = $("#input").val(); // selecting the id="input" in HTML file
  $("#li").append(inputValue);

  if (inputValue === "") {
    alert("Type something");
  } else {
    $("#list").append(li); // selecting id="list" from the HTML file
  }
});
