

document.addEventListener('invalid', (function () {
    return function (e) {
        //prevent the browser from showing default error bubble / hint
        e.preventDefault();
        // optionally fire off some custom validation handler
        // myValidation();
    };
})(), true);




const button = document.querySelector('.form-btn');
//   const email = document.getElementById('email');

button.addEventListener('click', function () {


    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let errorIcon = document.querySelectorAll('.error-icon');
    let errorMsg = document.querySelectorAll(".error-msg");


    if (document.getElementById('first-name').checkValidity()) {
        firstName.classList.remove("input-invalid");

        errorIcon[0].style.display = "none";
        errorMsg[0].style.display = "none";

    } else {
        firstName.classList.add("input-invalid");
        errorIcon[0].style.display = "block";
        errorMsg[0].style.display = "block";
    }


    if (document.getElementById('last-name').checkValidity()) {
        lastName.classList.remove("input-invalid");

        errorIcon[1].style.display = "none";
        errorMsg[1].style.display = "none";

    } else {
        lastName.classList.add("input-invalid");
        errorIcon[1].style.display = "block";
        errorMsg[1].style.display = "block";
    }


    if (document.getElementById('email').checkValidity()) {
        email.classList.remove("input-invalid");

        errorIcon[2].style.display = "none";
        errorMsg[2].style.display = "none";

    } else {
        email.classList.add("input-invalid");
        errorIcon[2].style.display = "block";
        errorMsg[2].style.display = "block";
    }


    if (document.getElementById('password').checkValidity()) {
        password.classList.remove("input-invalid");

        errorIcon[3].style.display = "none";
        errorMsg[3].style.display = "none";

    } else {
        password.classList.add("input-invalid");
        errorIcon[3].style.display = "block";
        errorMsg[3].style.display = "block";
    }



}


);
