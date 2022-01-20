//Display current date in the required format
var today= moment().format("dddd, MMMM Do")
$("#currentDay").text(today);

// save button variable
var saveBtn= document.querySelectorAll(".saveBtn")

//get current hour
var currentHour= moment().hours()
console.log(currentHour)

var workHours = [9,10,11,12,13,14,15,16,17]
var maxHours = 8

//choses backgroud-color based on current time
for(var i=0;i<=maxHours;i++){
    //present
    if(currentHour== workHours[i]){
        document.getElementById(i).children[1].classList.add("present")
        console.log(i)
    }
    //past
    else if(currentHour > workHours[i]){
        document.getElementById(i).children[1].classList.add("past")
        console.log(i)
   }
   //future
   else{
        document.getElementById(i).children[1].classList.add("future")
        console.log(i)
   }

    //when save button is clicked, the description will be saved in the local storage
        saveBtn[i].addEventListener("click",function(){
        //returns id of pressed button
        var id = this.parentElement.getAttribute("id") 
        console.log(id) 
        //returns typed text 
        var text = document.getElementById(id).children[1].value;
        console.log(text)
        //save to local storage
        localStorage.setItem(id,text)
        })
        //restores text from local storage
        if(localStorage.getItem(i)){
            document.getElementById(i).children[1].value = localStorage.getItem(i)
        }

};