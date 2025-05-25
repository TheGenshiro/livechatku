// Firebase setup
const firebaseConfig = {
  apiKey: "AIzaSyDr15b_aZBAgxBquT7hqQQe9HTjFr-Akdg",
  authDomain: "livechat-6ef78.firebaseapp.com",
  databaseURL: "https://livechat-6ef78-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "livechat-6ef78",
  storageBucket: "livechat-6ef78.appspot.com",
  messagingSenderId: "116999451226",
  appId: "1:116999451226:web:cefd2e6b93610384c49e63"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const form = document.getElementById("chatForm");
const input = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

// Push message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;
  db.ref("chat").push({ text: msg });
  input.value = "";
});

// Load messages
db.ref("chat").on("child_added", (snap) => {
  const msg = snap.val();
  const div = document.createElement("div");
  div.classList.add("message", "you");
  div.innerHTML = `<div class="bubble">${msg.text}</div>`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});

// Dark mode toggle
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};