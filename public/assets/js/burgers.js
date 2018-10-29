// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // Handles the devouring of a hamburger
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Handle sthe creation of a hamburger
  $(".create-form").on("submit", function(event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ba").val().trim(),
      devoured: false
    };

    $.post("/api/burgers", newBurger)
    .then(function() {
      console.log("created new burger");

      // Reload the page to get the updated list
      location.reload();
    })
  });
  
});
