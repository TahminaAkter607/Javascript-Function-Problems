function smallestNum(num1,num2){
    if(num1<num2){
        return num1;
    }else if(num2<num1){
        return num2;
    }
}
console.log(smallestNum(10,20));