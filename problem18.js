// Given a number, tell whether it is a positive even number.
function isPositiveEvenNumber(num){
    if(num>0&&num%2==0){
        return "Yes";
    }else{
        return "No";
    }
}
console.log(isPositiveEvenNumber(4));