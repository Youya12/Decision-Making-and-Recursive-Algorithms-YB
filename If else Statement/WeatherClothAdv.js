let temprature = parseInt(prompt("What's the current temprature?"));
let weather = prompt("Is it raining outside? (Yes/No)");

function clothingAdv() {
    
    if(temprature<=18){
        alert("It's cold outside, wear a warm coat and winter clothes")
    }else if(temprature>18 && temprature<22){
        alert("The weather is mild outside, wear regular clothes and take a light jacket")
    }else{
        alert("It's hot outside, wear summer clother, no jacket needed")
    }
    if (weather.toLowerCase() === "yes") {
        alert("Take an umbrella with you");
    } else {
        alert("No need to take an umbrella with you");
    }
}
clothingAdv()