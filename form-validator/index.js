const form = document.getElementById('form')
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Event Listeners


// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show success error message

function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Check valid email

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidPassword(password){
    const pass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$";
    return pass.test(String(password)).toLowerCase()
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        }
        else{
            showSuccess(input)
        }
    })
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else{
        showSuccess(input)
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordsMatch(input, input2){
    if(input.value !== input2.value){
        showError(input, "Passwords do not match")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault(e)
    // if(username.value === ''){
    //     showError(username, "Username is required")
    // }
    // else{
    //     showSuccess(username)
    //     }
    // if (email.value === "") {
    //   showError(email, "Email is required");
    // } 
    // else if(!isValidEmail(email.value)){
    //     showError(email, "Email is not valid")   
    // }
    // else {
    //   showSuccess(email)
    // }
    // if (password.value === "") {
    //   showError(password, "Password is required");
    // } 
    // // else if(!isValidPassword(password.value)){
    // //     showError(password, "Password Doesnt meet requirements")
    // // }
    // else {
    //   showSuccess(password);
    // }
    // if (password2.value === "") {
    //   showError(password2, "Confirm Password is required");
    // } else {
    //   showSuccess(password2);
    // }
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkPasswordsMatch(password2, password)

})