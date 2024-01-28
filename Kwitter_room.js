import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBp8aOmQT7kq2HfU-ypa7y46GkjWKGDn58",
    authDomain: "project-47-d4c41.firebaseapp.com",
    databaseURL: "https://project-47-d4c41-default-rtdb.firebaseio.com",
    projectId: "project-47-d4c41",
    storageBucket: "project-47-d4c41.appspot.com",
    messagingSenderId: "749927240836",
    appId: "1:749927240836:web:6493ff752d4c4311ec1ed1",
    measurementId: "G-DHHBW646CH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}

    function addRoom()
     {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });


          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";

    
     }

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_name");
    window.location = "kwitter.html";
}