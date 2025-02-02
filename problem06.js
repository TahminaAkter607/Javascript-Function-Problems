function isDivisibleBy10(num) {
    if (num%10===0){
        return `${num} is divisible by 10`;
    }else{
        return `${num} is not divisible by 10`;
    }
}
console.log(isDivisibleBy10(100));