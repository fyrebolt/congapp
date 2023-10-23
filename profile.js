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
addressInput = document.getElementById("addressInput")
cityInput = document.getElementById("cityInput")
zipInput = document.getElementById("zipInput")
birthInput = document.getElementById("birthInput")
profileWrapper = document.getElementById("profileWrapper")
if(sessionStorage.getItem("guest")!="yes"){
    emailLabel.innerHTML = localStorage.getItem("user")
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    database.ref(user+'/info').once('value').then((snapshot)=>{ 
        data = snapshot.val()
        addressInput.value = data.address
        cityInput.value = data.city
        zipInput.value = data.zip
        birthInput.value = data.birthdate
    })
}
else{
    profileWrapper.style.display = "none";
    guestWrapper.style.display = "flex";
}
