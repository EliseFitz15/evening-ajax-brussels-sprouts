$("#get-dish").click(function() {
  $.get("/new-dish.json", function(newDish) {
    debugger;
    alert("Your random delish dish is " + newDish["dish"]);
    });
  })
