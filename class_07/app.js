'use strict';
var workingHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumOfCustPerHour(numOne, numTwo) {
    return Math.floor(Math.random() * (numOne - numTwo)) + numTwo;
}
function AllCity(cityName,minCust,maxCust,avgCookieSale,totalCookies){
    this.cityName = cityName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.totalCookies = totalCookies;
}

var Seattle = new AllCity('Seattle','23','65', '6.3',[]);
hourAndTotalCookie(Seattle);

var Tokyo = new AllCity('Tokyo','3','24','1.2',[]);
hourAndTotalCookie(Tokyo);

var Dubai = new AllCity('Dubai','11','38','3.7',[]);
hourAndTotalCookie(Dubai);

var Paris = new AllCity('Paris','20','38','2.4',[]);
hourAndTotalCookie(Paris);

var Lima = new AllCity('Lima','2','16','4.6',[]);
hourAndTotalCookie(Lima);

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
        var rand = Math.floor(randomNumOfCustPerHour(city.maxCust, city.minCust) * city.avgCookieSale);
        liList.textContent = workingHour[i] + ': ' + rand;
    }

}
