"use strict"

function validateLogin () {
    try {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let result = document.getElementById("result");

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-z])(?=.*\d).{8,}$/;

        if(!emailRegex.test(email)) {
            throw new Error ("Invalid Email");
        }

        if(!passwordRegex.test(password)) {
            throw new Error("Week Password");
        }

        result.innerHTML = "Login Successful";

    } catch (error) {
        result.innerHTML = error.message;
    }

}