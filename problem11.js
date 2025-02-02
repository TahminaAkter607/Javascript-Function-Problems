// তিনটি সংখ্যার যোগফল ১০০-এর বেশি কিনা তা কীভাবে বের করবে?
function biggerThan100(num1,num2,num3){
    var sum =num1+num2+num3;
    if(sum>100){
        return `${sum} yes bigger than 100`
    }else{
        return `${sum} No Less than 100`
    }
    }
    console.log(biggerThan100(10,20,80));
