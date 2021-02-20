
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
        message = `Please Enter Gender`;
        msgClass = 'alert-danger';
        displayFeedback(message,msgClass);
    }else if(bDate.value === ""){
        message = `Please Enter Your Birth Day Date`;
        msgClass = 'alert-danger';
        displayFeedback(message,msgClass);
        
    }else{
        validatedate(bDate)
    }
}

//Date validation

function validatedate(bDate){

    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // Match the date format through regular expression
    if(bDate.value.match(dateformat)){
        document.myForm.text1.focus();

        //Test which seperator is used '/' or '-'
        var opera1 = bDate.value.split('/');
        var opera2 = bDate.value.split('-');
        lopera1 = opera1.length;
        lopera2 = opera2.length;

        // Extract the string into month, date and year
        if (lopera1>1){
        var pdate = bDate.value.split('/');
        }else if (lopera2>1){
        var pdate = bDate.value.split('-');
        }

        var dd = parseInt(pdate[0]);
        var mm  = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);

        // Create list of days of a month [assume there is no leap year by default]
        var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        if (mm==1 || mm>2){
            if (dd>ListofDays[mm-1]){
                message = `Enter date of The Format:dd-mm-yyy or dd/mm/yyyy`;
                msgClass = 'alert-danger';
                displayFeedback(message,msgClass);
                return false;
            }

        }

        if (mm==2){
            var lyear = false;
            if ( (!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }if ((lyear==false) && (dd>=29)){
                message = `Enter date of The Format:dd-mm-yyy or dd/mm/yyyy`;
                msgClass = 'alert-danger';
                displayFeedback(message,msgClass);
                return false;
            }
            if ((lyear==true) && (dd>29)){
                message = `Enter date of The Format:dd-mm-yyy or dd/mm/yyyy`;
                msgClass = 'alert-danger';
                displayFeedback(message,msgClass);
                return false;
            }
        }

    }else{
        message = `Enter date of The Format:dd-mm-yyy or dd/mm/yyyy`;
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
        message = `Your Akan Name:  ${name}`;
        msgClass = 'alert-success';
        displayFeedback(message,msgClass);
       
      
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
