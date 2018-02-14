$(function() {
  // "Page load" event handler; anything you put here will run when the page loads
  $("#do-something").on("click", function(event) {
    console.log("button was clicked!");
    event.preventDefault();
    $("#unicorn").slideToggle(2000);
  });
})
