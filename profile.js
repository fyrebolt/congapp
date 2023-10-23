logoutButton = document.getElementById("logout1")
logoutButton.onclick = () =>{
    localStorage.setItem("loggedIn", "null")
    sessionStorage.setItem("guest", "null")
    localStorage.setItem("user", "null")
    window.location.href="index.html"
}

logoutButton2 = document.getElementById("logout2")
logoutButton2.onclick = () =>{
    localStorage.setItem("loggedIn", "null")
    sessionStorage.setItem("guest", "null")
    localStorage.setItem("user", "null")
    window.location.href="index.html"
}

createButton = document.querySelector("a")
createButton.onclick = (event) =>{
    event.preventDefault()
    localStorage.setItem("loggedIn", "null")
    sessionStorage.setItem("guest", "null")
    localStorage.setItem("user", "null")
    window.location.href = "register.html"
}

emailLabel = document.getElementById("emailLabel")
profileWrapper = document.getElementById("profileWrapper")
if(sessionStorage.getItem("guest")!="yes"){
    emailLabel.innerHTML = localStorage.getItem("user")
}
else{
    profileWrapper.style.display = "none";
    guestWrapper.style.display = "flex";
}