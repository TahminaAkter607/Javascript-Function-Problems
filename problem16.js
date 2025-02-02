// Given a person input a time of day, tell whether it is morning, afternoon, or night.
function timeOfDay(time){
    if(time>=6&&time<=12){
        return "Morning";
    }else if(time>12&&time<=17){
        return "Afternoon";
    }else if(time>17&&time<=24){
        return "Night";
    }else{
        return "Invalid time";
    }
}