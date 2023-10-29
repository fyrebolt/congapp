createButton = document.querySelector("a")
createButton.onclick = (event) =>{
    event.preventDefault()
    localStorage.setItem("loggedIn", "null")
    sessionStorage.setItem("guest", "null")
    localStorage.setItem("user", "null")
    window.location.href = "register.html"
}


profileWrapper = document.getElementById("profileWrapper")
guestWrapper = document.getElementById("guestWrapper")
if(sessionStorage.getItem("guest")!="yes"){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    database.ref(user+'/checklist').once('value').then((snapshot)=>{ 
        console.log("kill yourself")
    })
}
else{
    profileWrapper.style.display = "none";
    guestWrapper.style.display = "flex";
}
