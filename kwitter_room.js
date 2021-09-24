var firebaseConfig = {
  apiKey: "AIzaSyDAsCYs_6_ktth1N8-wPJ4jqf_IP5WR4N4",
  authDomain: "database-987f5.firebaseapp.com",
  databaseURL: "https://database-987f5-default-rtdb.firebaseio.com",
  projectId: "database-987f5",
  storageBucket: "database-987f5.appspot.com",
  messagingSenderId: "643767708306",
  appId: "1:643767708306:web:6e93cdd87e2b6e069b944b",
  measurementId: "G-ETP7Q5FV2L"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name_display").innerHTML = " Welcome : " + user_name;



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;  
      });});}
getData();

function addRoom(){
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });

     localStorage.setItem("room_name" , room_name);

     window.location = "kwitter_page.html";
}


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location="kwitter_page.html";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}