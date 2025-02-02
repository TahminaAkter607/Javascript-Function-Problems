// Given two numbers, tell whether their product can be divided by a larger number.
function isDivisibleByLargerNum(num1,num2){
if(num1*num2%num1==0){
    return "Yes";
}else{
    return "No";
}
console.log(isDivisibleByLargerNum(4,2));}