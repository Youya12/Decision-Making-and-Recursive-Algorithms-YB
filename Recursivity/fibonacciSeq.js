function fibonacci(n) {
//base cases
    if (n <= 0) {
        return "Invalid input. Please enter a positive integer.";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
//Recursive case
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(10))