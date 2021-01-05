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
    this.numCookies = [];
}
var Seattle = new AllCity('Seattle', 23, 65, 6.3);

var Tokyo = new AllCity('Tokyo', 3, 24, 1.2);

var Dubai = new AllCity('Dubai', 11, 38, 3.7);

var Paris = new AllCity('Paris', 20, 38, 2.4);

var Lima = new AllCity('Lima', 2, 16, 4.6);

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
fillArray(Seattle);
fillArray(Tokyo);
fillArray(Dubai);
fillArray(Paris);
fillArray(Lima);

var par = document.getElementById('salmonCookies');
var table = document.createElement('table');
par.appendChild(table);
var tableBody = document.createElement('tbody');
table.appendChild(tableBody);
var tableRow = document.createElement('tr');
function cityRandNum(city) {
    tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    var tableData = document.createElement('td');
    var sum = 0;

    for (var index = 0; index < city.numCookies.length + 1; index++) {
        tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        tableData.textContent = Seattle;
        var randValue = city.numCookies[index];
        if(randValue){
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
function totalCookie() {
    var cityArray = [Seattle, Tokyo, Paris, Dubai, Lima];
    var par = document.getElementById('salmonCookies');
    var table = document.createElement('table');
    par.appendChild(table);
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    tableRow.textContent = 'Total   ';
    var totalCookiePerHoue = [];
    for (var i = 0; i < workingHour.length; i++) {
        var tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        totalCookiePerHoue.push(cityArray[0].numCookies[i] + cityArray[1].numCookies[i] + cityArray[2].numCookies[i] + cityArray[3].numCookies[i] + cityArray[4].numCookies[i]);
        tableData.textContent = totalCookiePerHoue[i];
    }
}
cityRandNum(Seattle);
cityRandNum(Tokyo);
cityRandNum(Paris);
cityRandNum(Dubai);
cityRandNum(Lima);
totalCookie();

// function hourAndTotalCookie(city) {
//     var title = document.getElementById('salmonCookies');
//     var par = document.createElement('p');
//     par.textContent = 'This is a list of orders per hour for ' + city.cityName + ' city';
//     title.appendChild(par);
//     var ulList = document.createElement('ul');
//     par.appendChild(ulList);
//     for (var i = 0; i < workingHour.length; i++) {
//         var liList = document.createElement('li');
//         ulList.appendChild(liList);
//         var rand = Math.floor(randomNumOfCustPerHour(city.maxCust, city.minCust) * city.avgCookieSale);
//         liList.textContent = rand;
//     }
// }