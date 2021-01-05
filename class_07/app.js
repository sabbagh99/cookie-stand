'use strict';
var workingHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumOfCustPerHour(numOne, numTwo) {
    return Math.floor(Math.random() * (numOne - numTwo + 1)) + numTwo;
}

function AllCity(cityName, minCust, maxCust, avgCookieSale) {
    this.cityName = cityName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
}

var Seattle = new AllCity('Seattle', '23', '65', '6.3');
// hourAndTotalCookie(Seattle);

var Tokyo = new AllCity('Tokyo', '3', '24', '1.2');
// hourAndTotalCookie(Tokyo);

var Dubai = new AllCity('Dubai', '11', '38', '3.7');
// hourAndTotalCookie(Dubai);

var Paris = new AllCity('Paris', '20', '38', '2.4');
// hourAndTotalCookie(Paris);

var Lima = new AllCity('Lima', '2', '16', '4.6');
// hourAndTotalCookie(Lima);
// console.log(hourAndTotalCookie(Lima));
// AllCity.prototype.tableRow =
    function tableRow() {
        var cityArray = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 'Tottal'];
        var par = document.getElementById('salmonCookies');
        var table = document.createElement('table');
        par.appendChild(table);
        var tableBody = document.createElement('tbody');
        table.appendChild(tableBody);
        var inArray = ['1', '20', '15', '1', '20', '15', '1', '20', '15', '1', '20', '15']
        for (var i = 0; i < cityArray.length; i++) {
            var tableRow = document.createElement('tr');
            tableBody.appendChild(tableRow);
            tableRow.textContent = cityArray[i];
            for (var index = 0; index < inArray.length; index++) {
                var tableData = document.createElement('td');
                tableRow.appendChild(tableData);
                tableData.textContent = [index];
            }
        }

    }
tableHead();
tableRow();


function tableHead() {
    var titleHeadArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
    var par = document.getElementById('salmonCookies');
    var table = document.createElement('table');
    par.appendChild(table);
    var titleHead = document.createElement('thead');
    table.appendChild(titleHead);
    var tableRow = document.createElement('tr');
    titleHead.appendChild(tableRow);
    var tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = "Hour";
    for (var index = 0; index < titleHeadArray.length; index++) {
        var tableHead = document.createElement('th');
        tableRow.appendChild(tableHead);
        tableHead.textContent = titleHeadArray[index];
    }
}

// function tableRow (){
//     var cityArray = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima','Tottal'];
//     var par = document.getElementById('salmonCookies');
//     var table = document.createElement('table');
//     par.appendChild(table);
//     var tableBody = document.createElement('tbody');
//     table.appendChild(tableBody);

//     for(var i=0; i<cityArray.length; i++){
//         var tableRow = document.createElement('tr');
//         tableBody.appendChild(tableRow);
//         tableRow.textContent = cityArray[i];
//         // for(var i=0; i<14; i++){
//         //     var tableData = document.createElement('td');
//         //     tableRow.appendChild(tableData);
//         //     tableData.textContent= [14];
//         // }
//     }
// }

function hourAndTotalCookie(city) {
    var title = document.getElementById('salmonCookies');
    var par = document.createElement('p');
    par.textContent = 'This is a list of orders per hour for ' + city.cityName + ' city';
    title.appendChild(par);
    var ulList = document.createElement('ul');
    par.appendChild(ulList);
    for (var i = 0; i < workingHour.length; i++) {
        var liList = document.createElement('li');
        ulList.appendChild(liList);
        var rand = Math.floor(randomNumOfCustPerHour(city.maxCust, city.minCust) * city.avgCookieSale);
        liList.textContent = rand;
    }
}