var input = document.querySelector("#phone"),
errorMsg = document.querySelector("#error-msg"),
validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
var iti = window.intlTelInput(input, {
utilsScript: "js/utils.js",
preferredCountries: ['in'],
});

var reset = function() {
input.classList.remove("error");
errorMsg.innerHTML = "";
errorMsg.classList.add("hide");
document.getElementById('phone').style.borderBottom= '3px solid #03A9F4' ;
validMsg.classList.add("hide");
};

// on blur: validate
function mobileNumberOne() {
reset();
if (input.value.trim()) {
  if (iti.isValidNumber()) {
    validMsg.classList.remove("hide");
  } else {
    input.classList.add("error");
    var errorCode = iti.getValidationError();
    errorMsg.innerHTML = errorMap[errorCode];
    errorMsg.classList.remove("hide");
    document.getElementById('phone').style.borderBottom= '1px solid red' ;
  }
}
}

var input2 = document.querySelector("#phone2"),
errorMsg2 = document.querySelector("#error-msg2"),
validMsg2 = document.querySelector("#valid-msg2");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap2 = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
var iti2 = window.intlTelInput(input2, {
utilsScript: "js/utils.js",
preferredCountries: ['in'],
});

var reset2 = function() {
input2.classList.remove("error");
errorMsg2.innerHTML = "";
errorMsg2.classList.add("hide");
validMsg2.classList.add("hide");
document.getElementById('phone2').style.borderBottom= '3px solid #03A9F4' ;
};
var reset3 = function() {
input2.classList.remove("error");
errorMsg2.innerHTML = "";
errorMsg2.classList.add("hide");
document.getElementById('landline').style.borderBottom= '3px solid #03A9F4' ;
};
// on blur: validate
function mobileNumberTwo() {
reset2();
if (input2.value.trim()) {
  if (iti2.isValidNumber()) {
    validMsg2.classList.remove("hide");
  } else {
    input2.classList.add("error");
    var errorCode2 = iti2.getValidationError();
    errorMsg2.innerHTML = errorMap2[errorCode2];
    errorMsg2.classList.remove("hide"); 
    document.getElementById('phone2').style.borderBottom= '1px solid red' ;
  }
}
}
function phonenumber()
{

var errorMsg3 = document.querySelector("#error-msg3");
var patt = new RegExp(/^\d{10}$/);
var inputtxt=document.getElementById('landline').value;
var str=inputtxt=="";
var res = patt.test(inputtxt);
var result=(res || (str));
if(result)
{
  document.getElementById('landline').style.borderBottom= '3px solid #03A9F4' ;
  errorMsg3.classList.add("hide"); 
  errorMsg3.innerHTML = '';
}
else if(!res)
{
    
    errorMsg3.innerHTML = 'Invalid';
    errorMsg3.classList.remove("hide"); 
    document.getElementById('landline').style.borderBottom= '1px solid red' ;
  
}
}
       
        

        function usernameValidate()
        {
          var username = document.getElementById('user_Name');
          var username_error = document.getElementById('user_error');
          if(username.value == "" ) {
            username_error.innerHTML="required";
            username.style.borderBottom="1px solid red";
            return false;
         }
         else if(username.value.length<5)
         {
          username_error.innerHTML="maximum length 5";
          username.style.borderBottom="1px solid red";
          return false;
         }
         username_error.innerHTML="";
         username.style.borderBottom="3px solid #03A9F4";
         username.classList.remove("Error");
         return( true );
        }
        function emailValidate()
        {
          var email = document.getElementById('user_Email');
          var email_error = document.getElementById('email_error');
          console.log(email.value,email_error.value);
            var emailval=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(email.value!="")
            {
               
                if(email.value.match(emailval))
                {   email_error.innerHTML= "";
                    email.style.borderBottom="3px solid #03A9F4";
                    return true;
                }
                else
                {
              
                    email_error.innerHTML= "Invalid email";
                    email.style.borderBottom="1px solid red";
                   
                    return false;

                }
            }
            else
            {
              email.style.borderBottom="1px solid red";
              email_error.innerHTML= "required";
              return false;
          }
            
        }


function validZip()
{
  var zip=document.getElementById('zipCode');
  var error=document.getElementById('zipError');
  error.style.color='red';
  
  if(zip.value=="")
  {
    error.innerHTML="required";
    zip.style.borderBottom="1px solid red";
           
              return false;
  }
  else if((isNaN(zip.value))||((zip.value.length)<5))
  {
    error.innerHTML='Invalid';
    zip.style.borderBottom="1px solid red";
    return false;
  }
  error.innerHTML='';
    zip.style.borderBottom="3px solid #03A9F4";
    return true;
}
function validateCityName()
{
  var city=document.getElementById('cityName');
  var error=document.getElementById('cityError');
  if(city.value=="")
  {console.log('error');
    error.innerHTML="required";
    city.style.borderBottom="1px solid red";
           
              return false;
  }else
  if(!(isNaN(city.value))||((city.value.length)<3))
  {
    error.innerHTML='Invalid Name';
    city.style.borderBottom="1px solid red";
    return false;
  }
  error.innerHTML='';
    city.style.borderBottom="3px solid #03A9F4";
    return true;
}