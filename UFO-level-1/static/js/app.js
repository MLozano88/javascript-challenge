var tableData = data;

//Look into the data.js file
console.log(data);

//Reference the table's body
var tbody = d3.select('tbody');

//This function will use the data to create the table
function UFOtable() {tableData.map (data =>{
    var nextRow = tbody.append('tr');

    //create new rows of data for every UFO sighting
    nextRow.append('td').text(data.datetime);
    nextRow.append('td').text(data.city);
    nextRow.append('td').text(data.state);
    nextRow.append('td').text(data.country);
    nextRow.append('td').text(data.shape);
    nextRow.append('td').text(data.durationMinutes);
    nextRow.append('td').text(data.comments);
});

}

//Show table to make sure its working
UFOtable();