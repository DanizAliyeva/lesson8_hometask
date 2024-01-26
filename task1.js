//part1-switch
const dayofWeek="Friday"
let activity
switch (dayofWeek){
    case "Monday":
        activity="study"
        break;
    case "Tuesday":
        activity="rest"
        break;
    case "Wednesday":
        activity="code"
        break;
    case "Thursday":
        activity="play volleyball"
        break;      
    case "Friday":
        activity="watch films"
        break;
    default:
        activity="no activity is defined"
        break;
}
console.log(`${activity} on ${dayofWeek}\n`);

//part2- for 
const numbers=[22,8,46,17,24]
let sum=0
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
    sum+=numbers[i];
}
console.log("sum of the numbers in the array is:",sum, "\n");



//part3-for
const fruits=["kiwi","orange","cherry","pomegranate"]

for(let i=0;i<fruits.length;i++){
    console.log("Name of the fruit:",fruits[i],",The lenght of the word:",fruits[i].length);
}
console.log("\n");


//part4-if else
const student={
    name:"Deniz",
    grade:"98"
}

if (student.grade>60){
    console.log("pass");
}else{
    console.log("fail");
}