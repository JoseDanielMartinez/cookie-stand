'use strict';

// ************ GLOBALS VARIABLES******************

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// ************ DOM WINDOW **************

let storeSection = document.getElementById('stores');

// *********** OBJECT LITERALS ****************

// Store #1
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function(){
    this.cookieSales();
    let ulElem = document.createElement('ul');
    storeSection.appendChild(ulElem);
    
    for(let i =0; i < this.cookieSales.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; cookies
      ulElem.appendChild(liElem);
    }
  }
};

seattle.render();

// Store #2

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function(){
    this.cookieSales();
    let ulElem = document.createElement('ul');
    storeSection.appendChild(ulElem);
    
    for(let i =0; i < this.cookieSales.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; 
      ulElem.appendChild(liElem);
    }
  }
};

tokyo.render();

// Store #3

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function(){
    this.cookieSales();
    let ulElem = document.createElement('ul');
    storeSection.appendChild(ulElem);
    
    for(let i =0; i < this.cookieSales.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; 
      ulElem.appendChild(liElem);
    }
  }
};

dubai.render();

// Store #4

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function(){
    this.cookieSales();
    let ulElem = document.createElement('ul');
    storeSection.appendChild(ulElem);
    
    for(let i =0; i < this.cookieSales.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; 
      ulElem.appendChild(liElem);
    }
  }
};

paris.render();

// Store #5

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function(){
    this.cookieSales();
    let ulElem = document.createElement('ul');
    storeSection.appendChild(ulElem);
    
    for(let i =0; i < this.cookieSales.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]}`; 
      ulElem.appendChild(liElem);
    }
  }
};

lima.render();
// ********** EXECUTABLE CODE ****************