var firebaseConfig = {
      apiKey: "AIzaSyDCFuWe85XJ3ktHxrxsbWJCQc6LqxZVX_M",
      authDomain: "kwitter-231d5.firebaseapp.com",
      databaseURL: "https://kwitter-231d5-default-rtdb.firebaseio.com",
      projectId: "kwitter-231d5",
      storageBucket: "kwitter-231d5.appspot.com",
      messagingSenderId: "538840912525",
      appId: "1:538840912525:web:b6d509e30a44d0170888c4"
    };
    
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name;
    function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.data().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStarage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location ="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
