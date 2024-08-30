
// ASSINGMENT ON F=ODERING FOOD


let q1 = document.getElementById('question1');
let q2 = document.getElementById('question2')
let q3 = document.getElementById('question3');

let btn = document.getElementById('btn');
let selectedMeal = document.getElementById('selectedMeal');


let p = document.getElementById('up');
let top1 = document.getElementById('top');
let top2 = document.getElementById('top2');
let top3 = document.getElementById('top3');
let top4 = document.getElementById('top4');


let mainMeal = ["jollof", "jollof rice", "fried rice", "yam & egg sauce", "white rice", "fried", "yam", "white"]

let protien = ["chicken", "kpomo", "beef", "snail"]

let drinks = ["fanta", "coke", "chivita", "monster"];

let username = prompt('What is your name');
top1.innerHTML = `Welcome ${username}! What meal are you getting from us?`;

btn.addEventListener('click', function() {
    let userMainMeal = q1.value.toLowerCase(); 
    // let userProtien = q2.value.toLowerCase();
    let userDrink = q3.value.toLowerCase();


    let avalaibleMeal = mainMeal.includes(userMainMeal);
    // let avalaibleProtien = mainMeal.includes(userProtien);
    let avalaibleDrink = drinks.includes(userDrink);

    if (avalaibleMeal && avalaibleDrink) {
        selectedMeal.innerHTML = `Thank you ${username}, for ordering ${userMainMeal}, and ${userDrink}! Please proceed to payment.`;
        top2.innerHTML = `Thank you ${username}, for making this purchase with us!`;
         top1.innerHTML = '';  
    // top2.innerHTML = '';  
    top3.innerHTML = '';  
    top4.innerHTML = ''; 
        q1.value = '';  
        q3.value = '';  
    } else if (avalaibleMeal) {
        selectedMeal.innerHTML = `Sorry ${username}! We don't have ${userDrink}. Please choose a drink from our menu: ${drinks.join(', ')}.`;
        top3.innerHTML = `Sorry ${username}, we dont have all that you've orded for`
        // q1.value = '';
    top4.innerHTML = ''; 
    top1.innerHTML = '';  

        q3.value = '';  
    }else if (avalaibleDrink) {
        selectedMeal.innerHTML = `Sorry ${username}! We don't have ${userMainMeal}. Please choose a main meal from our menu: ${mainMeal.join(', ')}.`;
        top3.innerHTML = `Sorry ${username}, we dont have all what you've orded for`
        q1.value = '';  
        // q3.value = '';  
    } else {
        selectedMeal.innerHTML = `Sorry ${username}, We don't have ${userMainMeal} or ${userDrink}. Please choose from our menu: Main Meals - ${mainMeal.join(', ')}; Drinks - ${drinks.join(', ')}.`;

        top4.innerHTML = `Sorry ${username}, we dont have what you've orded for`

         top1.innerHTML = '';  
    top2.innerHTML = '';  
    top3.innerHTML = '';  
    // top4.innerHTML = '';
        q1.value = '';  
        q3.value = '';  

    }

    // top1.innerHTML = '';  
    // top2.innerHTML = '';  
    // top3.innerHTML = '';  
    // top4.innerHTML = '';  



});
// ASSINGMENT ON F=ODERING FOOD





