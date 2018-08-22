"use strict"


// ++++++RENDER COFFEE FUNCTIONS +++++++ //
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
};

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;

};


// ++++++ "ADD NEW COFFEE" CODE BELOW +++++++ //

var roastSelectionNew = document.querySelector('#roast-selection2');
var newCoffeeInput = document.querySelector('#addNewCoffee');

function addCoffee(){
    var newCoffee = {};
    newCoffee.name = newCoffeeInput.value;
    newCoffee.roast = roastSelectionNew.value;
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
};


// VAR COFFEES ARRAY
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var coffees = [
    {id: 1, name: 'Light City', roast: "light"},
    {id: 2, name: 'Half City', roast: "light"},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);


// RIGHT TOP EVENT LISTENERS

var roastSelection1 = document.querySelector('#roast-selection1');

var submitButton1 = document.querySelector('#submit1');
submitButton1.addEventListener('click', updateCoffees);



// var searchCoffee = document.querySelector('#addNewCoffee');
// searchCoffee.addEventListener('keydown', renderCoffee);




// RIGHT BOTTOM SECTION BUTTONS/ EVENT LISTENERS
var roastSelection2 = document.querySelector('#roast-selection2');

var addNewCoffee = document.querySelector('#addNewCoffee');
addNewCoffee.addEventListener('click', updateCoffees);


var submitButton2 = document.querySelector('#submit2');
submitButton2.addEventListener('click', addCoffee);



//Update Coffees function & submit //
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection1.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
            if (selectedRoast == "all") {
                    filteredCoffees.push(coffee);
                }
            else if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
    });
        tbody.innerHTML = renderCoffees(filteredCoffees);
}

// need to improve JS functionality on left side of webpage
