function power(num, n){
//base case
    if(n==0){
        return 1
//recursive case
    }else{
        return num*power(num, n-1)
    }
}
console.log(power(5,2))