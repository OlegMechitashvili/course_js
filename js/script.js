'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

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