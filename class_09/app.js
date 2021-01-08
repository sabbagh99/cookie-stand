'use strict';
var workingHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumOfCustPerHour(numOne, numTwo) {
    return Math.floor(Math.random() * (numOne - numTwo)) + numTwo;
}
var cityArray = [];
var form = document.getElementById('newBranch');

function AllCity(cityName, minCust, maxCust, avgCookieSale) {
    this.cityName = cityName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.numCookies = [];
    cityArray.push(this);
}

var Seattle = new AllCity('Seattle', 23, 65, 6.3);
var Tokyo = new AllCity('Tokyo', 3, 24, 1.2);
var Dubai = new AllCity('Dubai', 11, 38, 3.7);
var Paris = new AllCity('Paris', 20, 38, 2.4);
var Lima = new AllCity('Lima', 2, 16, 4.6);

var par = document.getElementById('salmonCookies');
var table = document.createElement('table');
par.appendChild(table);
var tableBody = document.createElement('tbody');
table.appendChild(tableBody);
var tableRow = document.createElement('tr');

function tableHead() {
    var titleHeadArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
    var titleHead = document.createElement('thead');
    table.appendChild(titleHead);
    var tableRow = document.createElement('tr');
    titleHead.appendChild(tableRow);
    var tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = 'Hour';
    for (var index = 0; index < titleHeadArray.length; index++) {
        var tableHead = document.createElement('th');
        tableRow.appendChild(tableHead);
        tableHead.textContent = titleHeadArray[index];
    }
}

tableHead();

function fillArray(location) {
    for (var i = 0; i < workingHour.length; i++) {
        var rand = Math.floor(randomNumOfCustPerHour(location.maxCust, location.minCust) * location.avgCookieSale);
        location.numCookies.push(rand);
    }
}

for (let index = 0; index < cityArray.length; index++) {
    fillArray(cityArray[index]);
}
function cityRandNum(city) {
    tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    var tableData = document.createElement('td');
    var sum = 0;
    for (var index = 0; index < city.numCookies.length + 2; index++) {
        tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        tableData.textContent = cityArray;
        var randValue = city.numCookies[index - 1];
        if (randValue) {
            sum = sum + randValue;
            tableData.textContent = randValue;
        } else {
            tableData.textContent = sum;
        }
        if (index === 0) {
            tableData.textContent = city.cityName;
        }
    }
}


function addBranch(newData) {
    var totalNewBranch = 0;  
    var tempRow = document.getElementById('totalRow');
    tempRow.remove();

    form.appendChild(table);
    tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    var tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = newData.cityName;
    for (let i = 0; i < workingHour.length; i++) {
        tableData = document.createElement('td');
        tableRow.appendChild(tableData);

        var rand = Math.floor(randomNumOfCustPerHour(newData.maxCust, newData.minCust) * newData.avgCookieSale);
        totalNewBranch = totalNewBranch + rand;
        tableData.textContent = rand;
    }
    updateGrandTotal(totalNewBranch, tempRow.cells[15]);
    table.appendChild(tempRow);
    tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = totalNewBranch;
}

function newInfo(event) {
    event.preventDefault();
    var cityName = event.target.name.value;
    var minCust = parseInt(event.target.minNumber.value);
    var maxCust = parseInt(event.target.maxNumber.value);
    var avgCookieSale = parseInt(event.target.avgNumber.value);


    var addNewBranch = new AllCity(cityName, minCust, maxCust, avgCookieSale);
    addBranch(addNewBranch);
}
form.addEventListener('submit', newInfo);

function totalCookie() {
    var totalSum = 0;
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    tableRow = document.createElement('tr');
    tableRow.setAttribute("id", "totalRow");
    tableBody.appendChild(tableRow);
    var tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = 'Total';
    var totalCookiePerHoue = [];
    for (var i = 0; i < workingHour.length; i++) {
        tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        totalCookiePerHoue.push(cityArray[0].numCookies[i] + cityArray[1].numCookies[i] + cityArray[2].numCookies[i] + cityArray[3].numCookies[i] + cityArray[4].numCookies[i]);
        tableData.textContent = totalCookiePerHoue[i];
    }
    // updateGrandTotal(totalCookiePerHoue[i],)
    for (var index = 0; index < totalCookiePerHoue.length; index++) {
        totalSum = totalSum + totalCookiePerHoue[index];
    }
    var tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    updateGrandTotal(totalSum, tableData);
}
for (let i = 0; i < cityArray.length; i++) {
    cityRandNum(cityArray[i]);
}
totalCookie();
function updateGrandTotal(valueToAdd, td) {
    td.textContent = Number(valueToAdd) + Number(td.innerHTML);

}
