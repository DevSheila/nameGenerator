// #itemForm 
// #genderSelector
// #bdate
// #btnSubmit

const form = document.getElementById("itemForm")
const gender = document.getElementById("genderSelector");
const bDate = document.getElementById("bDate");
const btnSubmit = document.getElementById("btnSubmit");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(gender.value + ""+bDate.value );
    validateForm();
    
});

function validateForm(){
    //No Empty Fields
    if(gender.value === ""){
        alert("Please Enter Gender");
    }else if(bDate.value === ""){
        alert("Please Enter Birth Date!")
        
    }else{
        console.log("All form fields have been filled")
    }
}

//----------------------------------------Determining Name-----------------------------

function getName(){
    //determining day born
        var daysOfWeek =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var d = new Date(bDate.value);
        var dayBorn = daysOfWeek[d.getDay()];
        var name;
    //determining gender name
    if(gender.value == "male"){
        if(dayBorn == "Sunday"){
            name="Kwasi";
        }else if(dayBorn == "Monday"){
            name="Kwadwo";
        }else if(dayBorn == "Tuesday"){
            name="Kwabena";
        }else if(dayBorn == "Wednesday"){
            name="  Kwaku";
        }else if(dayBorn == "Thursday"){
            name="Yaw";
        }else if(dayBorn == "Friday"){
            name="Kofi";
        }else{
            name="Kwame";
        }
        
        alert("Your Gender: "+gender.value + " Day Born: "+ dayBorn +" Ghanian Name: " +name );
    }else {
        if(dayBorn == "Sunday"){
            name="Akosau";
        }else if(dayBorn == "Monday"){
            name="Adwao";
        }else if(dayBorn == "Tuesday"){
            name="Abenna";
        }else if(dayBorn == "Wednesday"){
            name="Akkua";
        }else if(dayBorn == "Thursday"){
            name="Yaa";
        }else if(dayBorn == "Friday"){
            name="Afua";
        }else{
            name="Ama";
        }
        alert("Your Gender: "+gender.value + " Day Born: "+ dayBorn +" Ghanian Name: " +name );  
    }

    
}
