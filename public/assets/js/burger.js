// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  //change burger devour status
  // $(".change-status").on("click", function (event) {

  //   alert("Clicked!");
  //   var id = $(this).data("id");
  //   var newDevour = $(this).data("newdevour");

  //   var newDevourState = {
  //     Devour: newDevour
  //   };
  //   // Send the PUT request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "PUT",
  //     data: newDevourState
  //   }).then(
  //     function () {
  //       console.log("changed devour to", newDevour);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $(".change-status").on("click", function (event) {

    alert("clicked");
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      Devoured: newDevour
    };
    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $("#btnSub").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      // want to set auto default devoured = false
      devoured: $("[name=devoured]:checked").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  });


  // btn: Delete Burger  
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
