function checkNum(num) {
if(num>0){
    return `${num} is a Positive Number`;
}else if(num<0){
    return `${num} is a Negative Number`;
}else{
    return `${num} is Zero`;
}}
console.log(checkNum(-9));