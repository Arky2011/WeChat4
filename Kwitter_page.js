
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
  room_name = localStorage.getItem("room_name");


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}