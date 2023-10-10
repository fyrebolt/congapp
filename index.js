signUpButton = document.getElementById("signUp")
logInButton = document.getElementById("logIn")
guestButton = document.getElementById("guest")
signUpButton.onclick = () =>{
    window.location.href=register.html;
}
logInButton.onclick = () =>{
    window.location.href=login.html;
}
guestButton.onclick = () =>{
    localStorage.setItem("sessionStorage","guest")
    window.location.href=home.html;
}