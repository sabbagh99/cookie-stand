'use strict';
var workingHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumOfCustPerHour(numOne, numTwo) {
    
    for(var i=0; i<workingHour.length; i++){
        return Math.floor(Math.random() * (numOne - numTwo)) + numTwo;
    }
}

var Seattle = {
    minCust: '23',
    maxCust: '65',
    avgCookieSale: '6.3',
    totalCookies: [],
};
Seattle.totalCookies.push(Math.floor(randomNumOfCustPerHour(Seattle.maxCust, Seattle.minCust) * Seattle.avgCookieSale)),
    console.log(Seattle.totalCookies);
    hourAndTotalCookie('Seattle '+Seattle.totalCookies);

var Tokyo = {
    minCust: '3',
    maxCust: '24',
    avgCookieSale: '1.2',
    totalCookies: [],

};
Tokyo.totalCookies.push(Math.floor(randomNumOfCustPerHour(Tokyo.maxCust, Tokyo.minCust) * Tokyo.avgCookieSale)),
    console.log(Tokyo.totalCookies);
    hourAndTotalCookie('Tokyo '+Tokyo.totalCookies);




var Dubai = {
    minCust: '11',
    maxCust: '38',
    avgCookieSale: '3.7',
    totalCookies: [],
};
Dubai.totalCookies.push(Math.floor(randomNumOfCustPerHour(Dubai.maxCust, Dubai.minCust) * Dubai.avgCookieSale)),
    console.log(Dubai.totalCookies);
    hourAndTotalCookie('Dubai '+Dubai.totalCookies);

var Paris = {
    minCust: '20',
    maxCust: '38',
    avgCookieSale: '2.4',
    totalCookies: [],

};
Paris.totalCookies.push(Math.floor(randomNumOfCustPerHour(Paris.maxCust, Paris.minCust) * Paris.avgCookieSale)),
    console.log(Paris.totalCookies);
    hourAndTotalCookie('Paris '+Paris.totalCookies);



var Lima = {
    minCust: '2',
    maxCust: '16',
    avgCookieSale: '4.6',
    totalCookies: [],

};
Lima.totalCookies.push(Math.floor(randomNumOfCustPerHour(Lima.maxCust, Lima.minCust) * Lima.avgCookieSale)),
    console.log(Lima.totalCookies);
    hourAndTotalCookie('Lima '+Lima.totalCookies);



var allCity = [Seattle, Tokyo, Dubai, Paris, Lima]

function hourAndTotalCookie(cityTotalCookie) {

    var title = document.getElementById('salmonCookies');
    var par = document.createElement('p');
    par.textContent = 'This is a list of orders per hour for each city';
    title.appendChild(par);
    var ulList = document.createElement('ul');
    par.appendChild(ulList);
    for (var i = 0; i < workingHour.length; i++) {
        var liList = document.createElement('li');
        ulList.appendChild(liList);
        liList.textContent = workingHour[i] +': '+ cityTotalCookie;
    }

}
