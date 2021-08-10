var firebaseConfig = {
      apiKey: "AIzaSyAfwLZDynhYFeryAxU_k29UUWccS2SM2Js",
      authDomain: "kwitter-a5ec3.firebaseapp.com",
      databaseURL: "https://kwitter-a5ec3-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5ec3",
      storageBucket: "kwitter-a5ec3.appspot.com",
      messagingSenderId: "365257154806",
      appId: "1:365257154806:web:54331ba439d265c96a8cd7"
    };

    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

    function addroom() {
          roomname = document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomname).update({
                purpose: "adding room name"
          });
          localStorage.setItem("roomname", roomname);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + " </div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}