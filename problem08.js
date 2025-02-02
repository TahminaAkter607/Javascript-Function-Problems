// প্রাপ্ত নাম্বার নদধ্য় নিক্ষার্থীর কেড ীভাধ্ব ননয ণারর্ রধ্ব?
// o ৮০ বা তার কবনি = A+
// o ৭০-৭৯ = A
// o ৬০-৬৯ = Ao ৩৩-৫৯ = Passed
// o ৩৩ এর ম = Failed

function grade(num){
    if(num>80){
        return "A+";
    }else if(num>70){
        return "A";}
    else if(num>60){
        return "A-";
    }else if(num>33){
        return "Passed";
    }else{
        return "Failed";
    }
}
console.log(grade(65));