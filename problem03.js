function passMarks(marks){
    if(marks>33){
        return "Pass";
    }else{
        return "Fail";
    }
}
console.log(passMarks(30));