function canVote(age) {
if(age>=18){
    return `${age} yes you can vote`;
}else{
    return `${age} no you can't vote`;
}
}
console.log(canVote(17));