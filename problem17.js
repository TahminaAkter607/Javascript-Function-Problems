// Given a password, tell whether it is more than 8 characters.
function isMoreThan8Characters(password){
    if(password.length>8){
        return "Yes";
    }else{
        return "No";
    }
}
console.log(isMoreThan8Characters("123456789")); 