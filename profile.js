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
guestWrapper = document.getElementById("guestWrapper")
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
editButton = document.getElementById("editProfile")
editButton.onclick = (event) => {
    event.preventDefault()
    if(editButton.src == "https://fyrebolt.github.io/everybodyvotes/images/editIcon.png"){
        editButton.src = "images/saveIcon.png"
        addressInput.disabled = false
        cityInput.disabled = false
        zipInput.disabled = false
        birthInput.disabled = false
    }
    else{
        addressInput.disabled = true
        cityInput.disabled = true
        zipInput.disabled = true
        birthInput.disabled = true
        if(addressInput.value.trim() && cityInput.value.trim() && ((zipInput.value.length==5 && !isNaN(zipInput.value)) || !zipInput.value.trim()) && birthInput.value!=0){
            data={}
            email = localStorage.getItem("user")
            user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
            user = user.substring(0,user.indexOf("@"))
            data["address"] = addressInput.value
            data["city"] = cityInput.value
            data["zip"] = zipInput.value
            data["birthdate"] = birthInput.value
            database.ref(user+'/info').set(data).then(()=>{
                database.ref(user+'/info').once('value').then((snapshot)=>{ 
                data = snapshot.val()
                addressInput.value = data.address
                cityInput.value = data.city
                zipInput.value = data.zip
                birthInput.value = data.birthdate
            })
            })
            editButton.src = "images/editIcon.png"
        }
        else{
            console.log("Please enter valid information")
        }
    }
}

// this part is for timer, removing it for now

// function updateCountdown() {
//     const currentDate = new Date();
//     const targetDate = new Date('2024-11-05'); //fixed election date
//     document.getElementById("timerTitle").textContext = `Next Election (${targetDate.toLocaleTimeString}) in:`;
//     const timeDifference = targetDate - currentDate;

//     if (timeDifference <= 0) {
//         // If the target date has passed, display a message
//         document.getElementById("timer").textContent = "Countdown has ended";
//     } else {
//         const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         document.getElementById("timer").textContent = `${daysDifference}d ${hoursDifference}h ${minutesDifference}m ${secondsDifference}s`;
//     }
// }

// updateCountdown(); // Initial update
// setInterval(updateCountdown, 1000); // Update every 1 second

