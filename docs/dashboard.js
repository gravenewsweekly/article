import { auth } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("user-name").innerText = user.displayName || "User";
    } else {
        window.location.href = "login.html"; // Redirect if not logged in
    }
});

// LOGOUT
document.getElementById("logout").addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out!");
        window.location.href = "index.html";
    });
});
