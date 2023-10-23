addressInput = document.getElementById("addressInput")
cityInput = document.getElementById("cityInput")
zipInput = document.getElementById("zipInput")
birthInput = document.getElementById("birthInput")
//yyyy-mm-dd
numbers='0123456789'
submit = document.getElementById("continue")
submit.onclick = (event) => {
    event.preventDefault()
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
            database.ref(user+'/status').set({surveyed:true}).then(()=>{
            window.location.href = "profile.html"
        })
        })
    }
    else{
        console.log("Please enter valid information")
    }
}
