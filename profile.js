logoutButton = document.getElementById("logout")
logoutButton.onclick = () =>{
    localStorage.setItem("loggedIn")=="null" 
    sessionStorage.setItem("guest")=="null"
    window.location.href="index.html"
}