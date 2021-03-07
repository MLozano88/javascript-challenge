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

//Show table
UFOtable();

//Listen for events and search through the date/time column to find rows that 
//match user input.
var inputfilter1 = d3.select('#filter-btn');
var inputfilter2 = d3.select('form')

inputfilter1.on("click", filterTable)
inputfilter2.on("submit", filterTable)


//Function to take user input and filter the table based on the request
function filterTable() {

    d3.event.preventDefault();

    //Use date/time values to filter data
    var userinput = d3.select('#datetime').property('value');
    console.log(userinput);

    var datafilter = tableData.filter(data => data.datetime == userinput);
    console.log(datafilter);

    //Clear table data
    tbody.html("");

    //Loop through all the data to append the rows that match the userinput
    datafilter.forEach(ufo => {

        //Reuse the format from the UFOtable function
        var newRow = tbody.append('tr');

        //create new rows of data for every UFO sighting
        newRow.append('td').text(data.datetime);
        newRow.append('td').text(data.city);
        newRow.append('td').text(data.state);
        newRow.append('td').text(data.country);
        newRow.append('td').text(data.shape);
        newRow.append('td').text(data.durationMinutes);
        newRow.append('td').text(data.comments);
    });
};