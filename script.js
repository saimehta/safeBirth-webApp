const homeButtons = document.querySelectorAll(".homepage_button");
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

homeButtons.forEach((button) => {
  button.addEventListener("click", event => {
    homePageNavigate(button.id);
  });
});
