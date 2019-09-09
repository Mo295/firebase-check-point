var firebaseConfig = {
  apiKey: "AIzaSyDydDzH9MDKzsMZWNShDPYbuWsiJi-s4Pw",
  authDomain: "subscribe-7f5b7.firebaseapp.com",
  databaseURL: "https://subscribe-7f5b7.firebaseio.com",
  projectId: "subscribe-7f5b7",
  storageBucket: "",
  messagingSenderId: "953062806272",
  appId: "1:953062806272:web:e58189379b4309c07919e5"
};

document.getElementById("formulaire").addEventListener("submit", function (e) {
  e.preventDefault()
  submitapp()
})


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()
var ref = database.ref("subscribe")

function submitapp() {
  var data =
  {
    name: document.getElementById("name").value,
    phonenumber: document.getElementById("number").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    school: document.getElementById("school").value,
    s: document.getElementById("course").value

  }

  ref.push(data)
}  

  

