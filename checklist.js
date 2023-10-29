createButton = document.querySelector("a")
createButton.onclick = (event) =>{
    event.preventDefault()
    localStorage.setItem("loggedIn", "null")
    sessionStorage.setItem("guest", "null")
    localStorage.setItem("user", "null")
    window.location.href = "register.html"
}

o1 = document.getElementById("option1");
o2 = document.getElementById("option2");
o3 = document.getElementById("option3");
o4 = document.getElementById("option4");
o5 = document.getElementById("option5");
o6 = document.getElementById("option6");
o7 = document.getElementById("option7");
o8 = document.getElementById("option8");
o9 = document.getElementById("option9");

profileWrapper = document.getElementById("checklistWrapper")
guestWrapper = document.getElementById("guestWrapper")

if(sessionStorage.getItem("guest")!="yes"){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    database.ref(user+'/checklist').once('value').then((snapshot)=>{ 
        data = snapshot.val()
        o1.checked = data.option1;
        o2.checked = data.option2;
        o3.checked = data.option3;
        o4.checked = data.option4;
        o5.checked = data.option5;
        o6.checked = data.option6;
        o7.checked = data.option7;
        o8.checked = data.option8;
        o9.checked = data.option9;
    })
}
else{
    profileWrapper.style.display = "none";
    guestWrapper.style.display = "flex";
}

editButton = document.getElementById("editProfile")
//editButton.onclick = (event) => {
window.onbeforeunload = (event) => {
    data={}
    data["option1"] = o1.checked;
    data["option2"] = o2.checked;
    data["option3"] = o3.checked;
    data["option4"] = o4.checked;
    data["option5"] = o5.checked;
    data["option6"] = o6.checked;
    data["option7"] = o7.checked;
    data["option8"] = o8.checked;
    data["option9"] = o9.checked;
    database.ref(user+'/checklist').set(data).then(()=>{
        email = localStorage.getItem("user")
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"))
        database.ref(user+'/checklist').once('value').then((snapshot)=>{ 
            data = snapshot.val()
            o1.checked = data.option1;
            o2.checked = data.option2;
            o3.checked = data.option3;
            o4.checked = data.option4;
            o5.checked = data.option5;
            o6.checked = data.option6;
            o7.checked = data.option7;
            o8.checked = data.option8;
            o9.checked = data.option9;
        })
    })
}