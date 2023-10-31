const nextPElections = [
    "2024-11-05",
    "2028-11-07",
    "2032-11-02",
    "2036-11-04",
    "2040-11-06",
    "2044-11-08",
]
const nextGElections = [
    "2024-11-05",
    "2026-11-03",
    "2028-11-07",
    "2030-11-05",
    "2032-11-02",
    "2034-11-07",
    "2036-11-04",
    "2038-11-02",
    "2040-11-06",
    "2042-11-04",
    "2044-11-08",
]
  
//   function getBirthday() {
//     if (localStorage.getItem("user") != null){
//       email = localStorage.getItem("user")
//       user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
//       user = user.substring(0,user.indexOf("@"));
//       database.ref(user+'/info').once('value').then((snapshot)=>{ 
//         data = snapshot.val();
//         birthdate = data.birthdate;
  
//       })
//     }
//     else {
//       return '1980-01-01';
//     }
//   }
  
function updateElectionDates(){
    // console.log(localStorage.getItem('user'));
    if (!(typeof localStorage.getItem("user") === null) && !(sessionStorage.getItem("guest") == "yes")){
        email = localStorage.getItem("user")
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"));
        console.log("1");
        database.ref(user+'/info').once('value').then((snapshot)=>{ 
            console.log("2");
            data = snapshot.val();
            if (typeof data === null){
                const currentDate = new Date();
                let nextDate = new Date(nextGElections[0]);
                let i = 0;
                while (nextDate - currentDate <= 0){
                    i++;
                    nextDate = new Date(nextGElections[i]);
                }
                
                const targetDate = new Date(nextGElections[i]); //fixed election date
                const timeDifference = targetDate - currentDate;
                const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                const day = targetDate.getDate();
                const month = targetDate.toLocaleString('default', { month: 'long' }); // Full month name
                const year = targetDate.getFullYear();
                const customFormattedDate = `${month} ${day}, ${year}`;
            
                document.getElementById("nextGeneralElection").innerHTML = `${customFormattedDate}`;
                document.getElementById("birthdate").style.display = "none";
            }
            else {
                birthdate = data.birthdate;
                const birthday = new Date(birthdate);
                // console.log(birthday.toLocaleDateString());
                let nextDate = new Date(nextGElections[0]);
                // console.log(nextDate - birthday);
                let i = 0;
                while (nextDate - birthday < (18 * 365 + 2) * 1000 * 60 * 60 * 24){
                    i++;
                    nextDate = new Date(nextGElections[i]);
                }
                
                const currentDate = new Date();
                const targetDate = new Date(nextGElections[i]); //fixed election date
                const timeDifference = targetDate - currentDate;
                const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
                const day = targetDate.getDate();
                const month = targetDate.toLocaleString('default', { month: 'long' }); // Full month name
                const year = targetDate.getFullYear();
                const customFormattedDate = `${month} ${day}, ${year}`;
            
                document.getElementById("userNextElection").innerHTML = `${customFormattedDate}`;
                document.getElementById("noBirthdate").style.display = "none";
                console.log("calling this part");
            }
        })

        const currentDate = new Date();
        let nextDate = new Date(nextGElections[0]);
        let i = 0;
        while (nextDate - currentDate <= 0){
            i++;
            nextDate = new Date(nextGElections[i]);
        }
        
        const targetDate = new Date(nextGElections[i]); //fixed election date
        const timeDifference = targetDate - currentDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        const day = targetDate.getDate();
        const month = targetDate.toLocaleString('default', { month: 'long' }); // Full month name
        const year = targetDate.getFullYear();
        const customFormattedDate = `${month} ${day}, ${year}`;

        document.getElementById("anotherNextGeneralElection").innerHTML = `${customFormattedDate}`;
    }
    else {
        const currentDate = new Date();
        let nextDate = new Date(nextGElections[0]);
        let i = 0;
        while (nextDate - currentDate <= 0){
            i++;
            nextDate = new Date(nextGElections[i]);
        }
        
        const targetDate = new Date(nextGElections[i]); //fixed election date
        const timeDifference = targetDate - currentDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        const day = targetDate.getDate();
        const month = targetDate.toLocaleString('default', { month: 'long' }); // Full month name
        const year = targetDate.getFullYear();
        const customFormattedDate = `${month} ${day}, ${year}`;
    
        document.getElementById("nextGeneralElection").innerHTML = `${customFormattedDate}`;
        document.getElementById("birthdate").style.display = "none";
    }

    const currentDate = new Date();
    let nextDate = new Date(nextPElections[0]);
    let i = 0;
    while (nextDate - currentDate <= 0){
        i++;
        nextDate = new Date(nextPElections[i]);
    }
    
    const targetDate = new Date(nextPElections[i]); //fixed election date
    const timeDifference = targetDate - currentDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const day = targetDate.getDate();
    const month = targetDate.toLocaleString('default', { month: 'long' }); // Full month name
    const year = targetDate.getFullYear();
    const customFormattedDate = `${month} ${day}, ${year}`;

    document.getElementById("nextPresidentialElection").innerHTML = `${customFormattedDate}`;
}
  
updateElectionDates();