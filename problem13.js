// If a student inputs the numbers of 5 subjects and tells whether he passed or not.

// (Pass if = 33 in each subject)
function checkPassMark(sub1,sub2,sub3,sub4,sub5){
    if(sub1>=33&&sub2>=33&&sub3>=33&&sub4>=33&&sub5>=33){
        return "Pass";
}else{
    return "Fail";
}
}
console.log(checkPassMark(33,33,33,33,33));