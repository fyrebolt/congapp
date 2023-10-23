logoutButton = document.getElementById("logout")
logoutButton.onclick = () =>{
    localStorage.setItem("loggedIn", "null")
    sessionStorage.setItem("guest", "null")
    localStorage.setItem("user", "null")
    window.location.href="index.html"
}
emailLabel = document.getElementById("emailLabel")
profileWrapper = document.getElementById("profileWrapper")
if(sessionStorage.getItem("guest")!="yes"){
    emailLabel.innerHTML = localStorage.getItem("email")
}
else{
    profileWrapper.style.display = "none";
    guestWrapper.style.display = "flex";
}