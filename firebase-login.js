window.addEventListener("DOMContentLoaded", () => {

    const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "tradebridge-cd5ab.firebaseapp.com",
  projectId: "tradebridge-cd5ab",
  storageBucket: "tradebridge-cd5ab.appspot.com",
  messagingSenderId: "1096983594296",
  appId: "1:1096983594296:web:ceb94e4a941b95407d2dcd"
    };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
    const app = firebase.initializeApp(firebaseConfig);
    // Signup
    async function signUp(email, password) {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            alert("User signed up: " + userCredential.user.email);
        } catch (error) {
            alert("Signup error: " + error.message);
        }
    }

    // Login
    async function login(email, password) {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            alert("User logged in: " + userCredential.user.email);
        } catch (error) {
            alert("Login error: " + error.message);
        }
    }

    // Logout
    function logout() {
        auth.signOut().then(() => {
            document.getElementById("login-form").style.display = "block";
            document.getElementById("user-info").style.display = "none";
            document.getElementById("current-user").innerText = "";
        });
    }

    // Button handlers
    window.handleSignup = function() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        signUp(email, password);
    };

    window.handleLogin = function() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        login(email, password);
    };

    window.logout = logout;

    // Show current logged-in user
    auth.onAuthStateChanged(user => {
        if(user){
            document.getElementById("login-form").style.display = "none";
            document.getElementById("user-info").style.display = "block";
            document.getElementById("current-user").innerText = user.email;
        } else {
            document.getElementById("login-form").style.display = "block";
            document.getElementById("user-info").style.display = "none";
            document.getElementById("current-user").innerText = "";
        }
    });

});
window.goToDashboard = function () {

    const user = firebase.auth().currentUser;

    if(user){
        window.location.href = "app/dashboard.html";
    }else{
        alert("Please login first.");
    }

};