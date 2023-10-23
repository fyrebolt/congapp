addressInput = document.getElementById("addressInput")
cityInput = document.getElementById("cityInput")
zipInput = document.getElementById("zipInput")
birthInput = document.getElementById("birthInput")
submit = document.getElementById("continue")
continue.onlick = (event) => {
    event.preventDefault()
    console.log(addressInput.value)
    console.log(cityInput.value)
    console.log(zipInput.value)
    console.log(zipInput.value.trim())
    console.log(birthInput.value)
}
