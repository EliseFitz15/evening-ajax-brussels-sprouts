$("#get-dish").click(function() {
  $.get("/new-dish.json", function(newDish) {
    alert("Your random delish dish is " + newDish["dish"]);
    });
  })
