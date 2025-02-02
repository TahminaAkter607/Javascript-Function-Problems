function isEvenOdd(num){
    if(num%2===0){
        return `${num} Even Number`;
    }else{
        return `${num} Odd Number`;
    }
}
console.log(isEvenOdd(7));