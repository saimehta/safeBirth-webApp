// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// constants
const firebaseConfig = {
  apiKey: "AIzaSyBBSufFogAcMd_Mo1GlzUTeb9i44Yzr16M",
  authDomain: "safebirth-test.firebaseapp.com",
  projectId: "safebirth-test",
  storageBucket: "safebirth-test.appspot.com",
  messagingSenderId: "701634915042",
  appId: "1:701634915042:web:5465a5c7dbd5cdaf3a4cbb",
  measurementId: "G-FDN29VVEJT"
}
firebase.initializeApp(firebaseConfig);

const homeButtons = document.querySelectorAll(".homepage_button");
const navButtons = document.querySelectorAll(".navigation_button");
const patientSubmit = document.querySelectorAll(".patient_submit");
const infoButtons = document.querySelectorAll(".patient_information");
const visitButtons = document.querySelectorAll(".visit_button");

// functions
function homePageNavigate(buttonId) {
  switch (buttonId) {
  case "register":
    window.location.href = "register.html";
    break;
  case "login":
    window.location.href = "login.html";
    break;
  case "forgot_id":
    window.location.href = "forgot_id.html";
    break;
  case "forgot_password":
    window.location.href = "forgot_password.html";
    break;
  }
}

function userPageNavigate(buttonId) {
  switch (buttonId) {
  case "account_info":
    window.location.href = "login.html";
    break;
  case "patients_info":
    window.location.href = "patients_main.html";
    break;
  case "mapping":
    window.location.href = "mapping.html";
    break;
  case "risk_score":
    window.location.href = "risk_score.html"
    break;
  }
}

function patientSearch() {
  window.location.href = "patient_info_select.html"
}

function infoSelect(buttonId) {
  switch (buttonId) {
  case "demographic_contact":
    window.location.href = "demographics.html"
    break;
  case "visits":
    window.location.href = "visit_select.html"
    break;
  }
}

// function visitNavigate(buttonId) {
//   switch (buttonId) {
//     case "visit"

// function calls
homeButtons.forEach((button) => {
  button.addEventListener("click", event => {
    homePageNavigate(button.id);
  });
});

navButtons.forEach((button) => {
  button.addEventListener("click", event => {
    userPageNavigate(button.id);
  });
});

patientSubmit.forEach((button) => {
  button.addEventListener("click", event => {
    patientSearch();
  });
});

infoButtons.forEach((button) => {
  button.addEventListener("click", event => {
    infoSelect(button.id);
  });
});

visitButtons.forEach((button) => {
  button.addEventListener("click", event => {
    window.location.href = "visit.html";
  });
});
