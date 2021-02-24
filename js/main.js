// #itemForm 
// #genderSelector
// #bdate
// #btnSubmit

const form = document.getElementById("itemForm")
const gender = document.getElementById("genderSelector");
const bDate = document.getElementById("bDate");
const btnSubmit = document.getElementById("btnSubmit");
const feedback = document.querySelector('.feedback');
var message;
var msgClass;

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(gender.value + ""+bDate.value );
    validateForm();
    clearFields();
    
});

function validateForm(){
    //No Empty Fields
    if(gender.value === ""){
        alert("Please Enter your Gender")
        message = `Please Enter Gender`;
        msgClass = 'alert-danger';
        displayFeedback(message,msgClass);
    }else if(bDate.value === ""){
        alert("Please Enter Your Birth Day Date")
        message = `Please Enter Your Birth Day Date`;
        msgClass = 'alert-danger';
        displayFeedback(message,msgClass);
        
    }else{
        validatedate(bDate)
    }
}

//Date validation


function validatedate(bDate){

  var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    //using regular expression to match date format input.
  if( bDate.value.match(dateformat) ){

   document.myForm.text1.focus();
    //Testing what date seperator is used  slash('/') or ('-')
    var opera1 = bDate.value.split('/');
    var opera2 = bDate.value.split('-');
    len1 = opera1.length;
    len2 = opera2.length;
    // Extract the string to get the month, date and year

    if (len1>1){
    var extractDate = bDate.value.split('/');
    }else if (len2>1){
    var extractDate = bDate.value.split('-');
    }

    var mm  = parseInt(extractDate[0]);
    var dd = parseInt(extractDate[1]);
    var yy = parseInt(extractDate[2]);
      // Create an array list of days of a month 
    //Here,we are making assumption that there's no leap year.
    var DaysList = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (mm==1 || mm>2){
        if (dd>DaysList[mm-1]){
          //Invalid date input
     alert("Enter date of The Format:mm-dd-yyyy or mm/dd/yyyy");
     message = `Enter date of The Format:mm-dd-yyyy or mm/dd/yyyy`;
     msgClass = 'alert-danger';
     displayFeedback(message,msgClass);
        return false;
        }
    }

    if (mm==2){
        var lyear = false;
        if ( (!(yy % 4) && yy % 100) || !(yy % 400)) {

        lyear = true;
        }

        if ((lyear==false) && (dd>=29)){
          //Invalid date input
     alert("Enter date of The Format:mm-dd-yyyy or mm/dd/yyyy");
     message = `Enter date of The Format:mm-dd-yyyy or mm/dd/yyyy`;
     msgClass = 'alert-danger';
     displayFeedback(message,msgClass);
        return false;
        }

        if ((lyear==true) && (dd>29)){
          //Invalid date input
     alert("Enter date of The Format:mm-dd-yyyy or mm/dd/yyyy");
     message = `Enter date of The Format:mm-dd-yyyy or mm/dd/yyyy`;
     msgClass = 'alert-danger';
     displayFeedback(message,msgClass);
        return false;
        }

    }
  }else{
    //Invalid date input
    alert("Enter date of The Format:mm-dd-yyyy or mm/dd/yyyy");
    message = `Enter date of The Format:mm-dd-yyyy or mm/dd/yyyy`;
    msgClass = 'alert-danger';
    displayFeedback(message,msgClass);
   document.myForm.text1.focus();
    return false;
  }
    getName();
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
        }else if(dayBorn == "Saturday"){
            name="Kwame";
        }else{
            alert("undefined")
        }
        alert("Your Akan name is "+ name + " You were born on a " + dayBorn);
        message = `Your Akan Name:  ${name} .You were born on a ${dayBorn}`;
        msgClass = 'alert-success';
        displayFeedback(message,msgClass);

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
        }else if(dayBorn == "Saturday"){
            name="Afua";
        }else{
            alert("undefined")
        }
        message = `Your Akan Name:  ${name} .You were born on a ${dayBorn}`;
        msgClass = 'alert-success';
        displayFeedback(message,msgClass);
        alert("Your Akan name is "+ name + " You were born on a " + dayBorn);

       
      
    }

}

function displayFeedback(message , msgClass) {
    const feedback = document.querySelector('.feedback');
    
    //make the feedback view visible 

    feedback.classList.add('showItem', 'alert', msgClass);
    //set the timeout for feedback 

    feedback.innerHTML = `${message}`;

    setTimeout(function(){
        feedback.classList.remove('showItem', 'alert', msgClass);
    
    }, 7000);
};

function clearFields(){
    gender.value ='';
    bDate.value ='';
};
