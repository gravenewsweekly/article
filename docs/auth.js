import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// **Sign Up**
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
            alert("Account created successfully!");
            window.location.href = "index.html";
        })
        .catch((error) => alert(error.message));
});

// **Login**
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
            window.location.href = "index.html";
        })
        .catch((error) => alert(error.message));
});

// **Check if User is Logged In**
onAuthStateChanged(auth, (user) => {
    const signupLink = document.getElementById("signup-link");
    const loginLink = document.getElementById("login-link");
    const userLink = document.getElementById("user-link");

    if (user) {
        signupLink.style.display = "none";
        loginLink.style.display = "none";
        userLink.style.display = "inline";
        userLink.innerText = user.displayName || "Profile";
        userLink.href = "dashboard.html";
    }
});
