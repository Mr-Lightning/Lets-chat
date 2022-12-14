
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBf_U3pqgF1jBmFgF7VMlshnlER2fx48oU",
    authDomain: "chat-box-b2dc8.firebaseapp.com",
    projectId: "chat-box-b2dc8",
    storageBucket: "chat-box-b2dc8.appspot.com",
    messagingSenderId: "690786231217",
    appId: "1:690786231217:web:328531194821566b1d5390",
    measurementId: "G-ZCWCNC4QRJ"
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig)
 };

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
