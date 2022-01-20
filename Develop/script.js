//Display current date in the required format
var today= moment().format("dddd, MMMM Do")
$("#currentDay").text(today);

// save button variable
var saveBtn= $(".saveBtn")

//when save button is clicked, the description will be saved in the local storage
saveBtn.on("click",function(){

})

//get current hour
var currentHour= moment().hours()
console.log(currentHour)

var workHours = [9,10,11,12,13,14,15,16,17]
var maxHours = 9

//choses backgroud-color based on current time
function color(){
   for(var i=0;i<maxHours;i++){
    if(currentHour== workHours[i]){
    document.getElementById(i).classList.add("present")
    }
    else if(currentHour > workHours[i]){
    document.getElementById(i).classList.add("past")
   }
   else{
    document.getElementById(i).classList.add("future")
   }
}};

color();