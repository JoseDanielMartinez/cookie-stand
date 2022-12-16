'use strict';

// ************ GLOBALS VARIABLES******************

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
let cookieData = document.getElementById('cookie-data');

cookieData.addEventListener('submit', handleSubmit);

let tableSelector = document.getElementById('stores');

// ************ DOM WINDOW **************

let storeSection = document.getElementById('stores');

// ********** RENDERS ***********************

function header() {

  let trElem = document.createElement('tr');
  tableSelector.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.textContent = 'Stores';
  trElem.appendChild(thElem);

  for (let j = 0; j < hours.length; j++){
    thElem = document.createElement('th');
    thElem.textContent = hours [j];
    trElem.appendChild(thElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = 'total';
  trElem.appendChild(thElem);
}
header();
ShopOne.prototype.render = function () {
  
  console.dir('stores', tableSelector);

  let trElem = document.createElement('tr');
  tableSelector.appendChild(trElem);

  let tdElem = document.createElement('td');
  tdElem.textContent = this.name;
  trElem.appendChild(tdElem);

  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesBought[i];
    console.log(this.cookiesBought[i]);

    trElem.appendChild(tableData);

  }
  let totalTableData = document.createElement('td');
  totalTableData.textContent = this.total;
  trElem.appendChild(totalTableData);

  function handleSubmit(event){
    event.preventDefault();

    console.dir(event.target);

    let name = event.target.userName.value;
    console.log(name);

    let min =  +event.target.min.value;
    console.log (min);

    let max =  +event.target.max.value;
    console.log (max);

    let average =  +event.target.average.value;
    console.log (average);

    let newStore = new storeSection(name, min, max, average);
    storeLocations.push(newStore);

    document.getElementById("stores").deleteRow(-1);

    newStore.randomCustomers();
    newStore.randomCookies();
    newStore.render();
    footer();

    function footer(){
      let table = document.getElementById('stores');
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.textContent = 'totals';
      tr.appendChild(td);
      for (let i = 0; i < hours.length; i++){
          let totalHours = 0;
          for (let j = 0; j < storeLocations[j].cookiesPerHour[i]
      }
      let td = document.createElement('td');
      td.textContent = totalHours;
      tr.appendChild(td);


    }
  }


};
// *********** OBJECT LITERALS ****************

// Store #1
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++){
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function(){
//     this.cookieSales();
//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);
    
//     for(let i =0; i < this.cookieSales.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; cookies
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// seattle.render();

// // Store #2

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++){
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function(){
//     this.cookieSales();
//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);
    
//     for(let i =0; i < this.cookieSales.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; 
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// tokyo.render();

// // Store #3

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++){
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function(){
//     this.cookieSales();
//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);
    
//     for(let i =0; i < this.cookieSales.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; 
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// dubai.render();

// // Store #4

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++){
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function(){
//     this.cookieSales();
//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);
    
//     for(let i =0; i < this.cookieSales.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; 
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// paris.render();

// // Store #5

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++){
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function(){
//     this.cookieSales();
//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);
    
//     for(let i =0; i < this.cookieSales.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; 
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// lima.render();

// *************** CONSTRUCTOR *********************

function ShopOne(name, minCust, maxCust, avgSale){
  this.name =name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.cookiesBought = [];
  this.total = 0;

}

let Seattle = new ShopOne('Seattle', 23, 65, 6.3, [], 0);
let Tokyo = new ShopOne('Tokyo', 3, 24, 1.2, [], 0);
let Dubai = new ShopOne('Dubai', 11, 38, 3.7, [], 0);
let Paris = new ShopOne('Paris', 20, 38, 2.3, [], 0);
let Lima = new ShopOne('Lima', 2, 16, 4.6, [], 0);

// ****************** METHODS ************************************

ShopOne.prototype.getRandomInt = function (min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

ShopOne.prototype.cookieSales = function (){
  for (let i = 0; i < hours.length; i++){
    console.log (this.minCust, this.maxCust);
    let avgCookie = Math.floor(this.getRandomInt(this.minCust, this.maxCust) * this.avgSale);
    console.log (avgCookie);
    this.cookiesBought.push(avgCookie);
    this.total = this.total + this.cookiesBought[i];

  }
};

Seattle.cookieSales();
Tokyo.cookieSales();
Dubai.cookieSales();
Paris.cookieSales();
Lima.cookieSales();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

console.log(Seattle);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(Lima);
