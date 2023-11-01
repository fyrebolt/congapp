const firebaseConfig = {
    apiKey: "AIzaSyBh3lG5bakkiyeNnAPWhFnrL884vpLcLSc",
    authDomain: "congressapp-67162.firebaseapp.com",
    projectId: "congressapp-67162",
    storageBucket: "congressapp-67162.appspot.com",
    messagingSenderId: "579045935855",
    appId: "1:579045935855:web:7673e2d8daf56dabbfa91a",
    measurementId: "G-W6D45LZY7F"
  }

firebase.initializeApp(firebaseConfig);
const database = firebase.database()

function check(){
    if(!(localStorage.getItem("loggedIn")=="yes" || sessionStorage.getItem("guest")=="yes")){
        window.location.href = "index.html";
    }
    if(sessionStorage.getItem("guest")!="yes"){
        email = localStorage.getItem("user")
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"))
        database.ref(user+'/status').once('value').then((snapshot)=>{ 
            if(snapshot.val().surveyed==false && window.location.href != "https://fyrebolt.github.io/everybodyvotes/setup.html"){
                window.location.href= "setup.html"
            }
            if(snapshot.val().surveyed==true && window.location.href == "https://fyrebolt.github.io/everybodyvotes/setup.html"){
                window.location.href= "profile.html"
            }
        })
    }
}
function checkIndex(){
    if(localStorage.getItem("loggedIn")=="yes" || sessionStorage.getItem("guest")=="yes"){
        window.location.href = "home.html";
    }
}
