// constants
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
