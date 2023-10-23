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
        console.log("works")
    }
}
