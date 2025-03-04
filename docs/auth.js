import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// SIGN-UP
document.getElementById("signup-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return updateProfile(userCredential.user, { displayName: username });
        })
        .then(() => {
            alert("Sign-up successful! Redirecting...");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// LOGIN
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
