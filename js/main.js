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
