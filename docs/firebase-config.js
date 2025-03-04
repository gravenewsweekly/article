import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAdfrFDBu0x4ZV2n0yohvFbtfK_GpdkmAw",
    authDomain: "article-2fc67.firebaseapp.com",
    projectId: "article-2fc67",
    storageBucket: "article-2fc67.appspot.com",
    messagingSenderId: "1015574729035",
    appId: "1:1015574729035:web:5d3a26e398e900ea1698ce",
    measurementId: "G-J8LTFDPG5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
