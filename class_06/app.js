'use strict';
var workingHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumOfCustPerHour(maxNum, minNum) {
    return Math.floor(Math.random() * (maxNum - minNum+1)) + minNum;
}

var Seattle = {
    cityName: 'Seattle',
    minCust: '23',
    maxCust: '65',
    avgCookieSale: '6.3',
    totalCookies: [],
};
hourAndTotalCookie(Seattle);

var Tokyo = {
    cityName: 'Tokyo',
    minCust: '3',
    maxCust: '24',
    avgCookieSale: '1.2',
    totalCookies: [],

};
hourAndTotalCookie(Tokyo);

var Dubai = {
    cityName: 'Dubai',
    minCust: '11',
    maxCust: '38',
    avgCookieSale: '3.7',
    totalCookies: [],
};
hourAndTotalCookie(Dubai);

var Paris = {
    cityName: 'Paris',
    minCust: '20',
    maxCust: '38',
    avgCookieSale: '2.4',
    totalCookies: [],

};
hourAndTotalCookie(Paris);



var Lima = {
    cityName: 'Lima',
    minCust: '2',
    maxCust: '16',
    avgCookieSale: '4.6',
    totalCookies: [],

};
hourAndTotalCookie(Lima);



var allCity = [Seattle, Tokyo, Dubai, Paris, Lima]

function hourAndTotalCookie(city) {

    var title = document.getElementById('salmonCookies');
    var par = document.createElement('p');
    par.textContent = 'This is a list of orders per hour for '+ city.cityName +' city';
    title.appendChild(par);
    var ulList = document.createElement('ul');
    par.appendChild(ulList);
    for (var i = 0; i < workingHour.length; i++) {
        var liList = document.createElement('li');
        ulList.appendChild(liList);
        var random = Math.floor(randomNumOfCustPerHour(city.maxCust, city.minCust) * city.avgCookieSale);
        liList.textContent = workingHour[i] + ': ' + random +' Cookies';
    }

}
