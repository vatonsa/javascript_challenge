// from data.js
var tableData = data;
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

button.on("click", function() {
var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("date");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(data => data.datetime === inputValue);

  console.log(filteredData);



// YOUR CODE HERE!

data.forEach(function(data) {
     console.log(data);
 });
 data.forEach(function(data) {
       console.log(data);
      var row = tbody.append("tr");
     });
    
    data.forEach(function(data) {
     console.log(data);
       var row = tbody.append("tr");
    });
    
});
