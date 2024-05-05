while(age=true){

let age = prompt("Please enter your age");

function ticketPrice() {
    if (age <= 12) {
        alert("Your are a child, the price of your ticket is $10");
    } else if (age >= 13 && age <= 17) {
        alert("You are a teenager, the price of your ticket is $15");
    } else if (age >= 18 && age<100) {
        alert("You are an adult, the price of your ticket is $20");
    } else {
        alert("Please enter a valid age");
    }
}

ticketPrice();
}