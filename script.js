
// ASSINGMENT ON F=ODERING FOOD

let q1 = document.getElementById('question1');
let q2 = document.getElementById('question2')
let q3 = document.getElementById('question3');

let btn = document.getElementById('btn');
let selectedMeal = document.getElementById('selectedMeal');


let p = document.getElementById('up');
let top1 = document.getElementById('top');



let mainMeal = ["jollof", "jollof rice", "fried rice", "yam & egg sauce", "white rice", "fried", "yam", "white"]

let protien = ["chicken", "kpomo", "prawns", "snail"]

let drinks = ["fanta", "coke", "chivita", "monster"];

let username = prompt('What is your name');
top1.innerHTML = `Welcome ${username}! What meal are you getting from us?`;

btn.addEventListener('click', function() {
    let userMainMeal = q1.value.toLowerCase(); 
    let userProtien = q2.value.toLowerCase();
    let userDrink = q3.value.toLowerCase();

    let a = document.getElementById('question1').value
    let b = document.getElementById('question3').value

    let c = document.getElementById('question2').value


    let aErr = document.getElementById('aErr')
    let bErr = document.getElementById('bErr')
    let cErr = document.getElementById('cErr')



    let avalaibleMeal = mainMeal.includes(userMainMeal);
    let avalaibleProtien = protien.includes(userProtien);
    let avalaibleDrink = drinks.includes(userDrink);


    if(a === ""){
        aErr.innerHTML =  ' Meals field cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else{
        aErr.innerHTML = ""
    }
    if(b === ""){
        cErr.innerHTML =  ' Drinks feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else{
        cErr.innerHTML = ""
    }
    if(c === ""){
        bErr.innerHTML =  'feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else{
        bErr.innerHTML = ""
    }
    if (avalaibleMeal && avalaibleDrink && avalaibleProtien) {
        alert (`Thank you ${username}, for ordering ${userMainMeal}, ${userProtien}, and ${userDrink}! Please proceed to payment.`);
        selectedMeal.innerHTML = '';
        // top1.innerHTML = `Thank you ${username}, for making this purchase with us!`;
        top1.innerHTML = '';
        q1.value = '';  
        q2.value = '';  

        q3.value = '';  
    } else if (avalaibleMeal) {
        selectedMeal.innerHTML = `Sorry ${username}! We don't have ${userDrink} or ${userProtien}. Please choose a drink from our Drink menu: ${drinks.join(', ')} and a Protien From our Protien Menu: ${protien.join(', ')}.`;
        top1.innerHTML = `Sorry ${username}, we dont have all that you've orded for`
        q2.value = '';
    

        q3.value = '';  
    }else if (avalaibleProtien) {
        selectedMeal.innerHTML = `Sorry ${username}! We don't have ${userMainMeal} and ${userDrink}. Please choose a main meal from our menu: ${mainMeal.join(', ')} and a Drink from our Drinks Menu  ${drinks.join(', ')}.`;
        top1.innerHTML = `Sorry ${username}, we dont have all what you've orded for`
        q1.value = ''; 
        q3.value = '';  
    } 
    else if (avalaibleDrink) {
        selectedMeal.innerHTML = `Sorry ${username}! We don't have ${userMainMeal} and ${userProtien}. Please choose a main meal from our menu: ${mainMeal.join(', ')} and a Protien from our Protien Menu: ${userProtien}`;
        top1.innerHTML = `Sorry ${username}, we dont have all what you've orded for`
        q1.value = ''; 
        q2.value = '';  
    }else if (avalaibleMeal && avalaibleProtien){
        selectedMeal.innerHTML = ` sorry ${username} please fill in the form`
    } 
    else if (avalaibleMeal && avalaibleDrink){
        selectedMeal.innerHTML = ` sorry ${username} please fill in the form`
    } 
    else if (avalaibleProtien && avalaibleDrink){
        selectedMeal.innerHTML = ` sorry ${username} please fill in the form`
    }
    else {
        selectedMeal.innerHTML = `Sorry ${username}, We don't have ${userMainMeal}, ${userProtien} or ${userDrink}, Please choose from our menu: Main Meals - ${mainMeal.join(', ')}, Protien - ${protien.join(', ')} Drinks - ${drinks.join(', ')}.`;

        top1.innerHTML = `Sorry ${username}, we dont have what you've ordered for!`

       
        q1.value = ''; 
        q2.value = '';  

        q3.value = '';  

    }});
// ASSINGMENT ON F=ODERING FOOD





