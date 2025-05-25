// Ganti konfigurasi Firebase ini dengan project kamu
const firebaseConfig = {
  apiKey: "AIzaSyDr15b_aZBAgxBquT7hqQQe9HTjFr-Akdg",
  authDomain: "livechat-6ef78.firebaseapp.com",
  databaseURL: "https://livechat-6ef78-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "livechat-6ef78",
  storageBucket: "livechat-6ef78.firebasestorage.app",
  messagingSenderId: "116999451226",
  appId: "1:116999451226:web:cefd2e6b93610384c49e63",
  measurementId: "G-WKZ4NTL1QX"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

const chatBox = document.getElementById("chat-box");

function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  if (username && message) {
    db.ref("chats").push({ user: username, text: message });
    document.getElementById("message").value = "";
  }
}

db.ref("chats").on("child_added", function(snapshot) {
  const msg = snapshot.val();
  const msgElement = document.createElement("div");
  msgElement.textContent = msg.user + ": " + msg.text;
  chatBox.appendChild(msgElement);
  chatBox.scrollTop = chatBox.scrollHeight;
});
