let emailBtn = document.getElementById("one")
let firstBtn = document.getElementById("two")
let lastBtn = document.getElementById("three")
let Form = document.querySelector(".form")
let emailError = document.querySelector(".emy-error")

function validateEmail() {
    // emaillabel.style.bottom = "45px";
    if (!emailBtn.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email is not valid";
        emailBtn.style.borderBottomColor = "red";
        emailError.style.top = "120"
        return false;
    }
    emailError.innerHTML = "";
    emailBtn.style.borderBottomColor = "green";
   
    return true;
}



Form.addEventListener("submit" , function(event){
    validateEmail()
    if (validateEmail()  == true) {
        signin.innerHTML = "All fields are valid"
        signin.style.color = "green";
      
 

    }else {
event.preventDefault()


emailError.innerHTML = "Email is not valid";
emailBtn.style.borderBottomColor = "red";
emailError.style.top = "120"
return false
    }

})





