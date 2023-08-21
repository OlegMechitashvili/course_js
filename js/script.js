'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
            thu: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0,
                close: 24,
            },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Renaming destructed variables:
const{name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Sat a default value
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);






/*
///////////////////////////////////////////
DESTRUCTURING ARRAYS
///////////////////////////////////////////
// const [first, , third] = restaurant.categories;
// console.log(first, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [firstMeal, secondMeal] = restaurant.order(2, 0);
console.log(firstMeal, secondMeal);

// Nested destructuring
const nested = [2, 4, [5, 9]];
const [a, ,[b, c]] = nested;
console.log(a, b, c);

// Default velues
 const [p = 1, q = 1, r = 1] = [8, 9];
 console.log(p, q, r);
 */