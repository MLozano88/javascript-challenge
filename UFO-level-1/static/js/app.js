var tableData = data;

//Look into the data.js file
console.log(data);

//Reference the table's body
var tbody = d3.select('tbody');

//This function will use the data to create the table
function UFOtable() {tableData.map (data =>{
    var nextRow = tbody.append('tr');


})

}