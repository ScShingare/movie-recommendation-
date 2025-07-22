function validuse() {
  let input = document.getElementById("use");
  let msg = document.getElementById("usernameMsg");
  let str = input.value.trim();
  let isValid = true;

  if (str.length === 0) {
    msg.textContent = "Username is required.";
    isValid = false;
  } else {
    for (let i = 0; i < str.length; i++) {
      let ch = str.charCodeAt(i);
      if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch === 32)) {
        msg.textContent = "Only letters and spaces are allowed.";
        isValid = false;
        break;
      }
    }
  }

  if (isValid) msg.textContent = "";
  setInputStyle(input, isValid);
  return isValid;
}

function validpass() {
  let input = document.getElementById("password");
  let msg = document.getElementById("passwordMsg");
  let str = input.value;
  let isValid = true;

  if (str.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    for (let i = 0; i < str.length; i++) {
      let ch = str.charCodeAt(i);
      if (!(ch >= 32 && ch <= 126)) {
        msg.textContent = "Invalid character in password.";
        isValid = false;
        break;
      }
    }
  }

  if (isValid) msg.textContent = "";
  setInputStyle(input, isValid);
  return isValid;
}

function validConfirmPassword() {
  let input = document.getElementById("confirmPassword");
  let msg = document.getElementById("confirmPasswordMsg");
  let pass = document.getElementById("password").value;
  let cpass = input.value;
  let isValid = true;

  if (cpass.length === 0) {
    msg.textContent = "Please confirm your password.";
    isValid = false;
  } else if (pass !== cpass) {
    msg.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) msg.textContent = "";
  setInputStyle(input, isValid);
  return isValid;
}

function validEmail() {
  let input = document.getElementById("email");
  let msg = document.getElementById("emailMsg");
  let str = input.value.trim();
  let isValid = true;

  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(str)) {
    msg.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    msg.textContent = "";
  }

  setInputStyle(input, isValid);
  return isValid;
}

function validContact() {
  let input = document.getElementById("contact");
  let msg = document.getElementById("contactMsg");
  let str = input.value.trim();
  let isValid = true;

  if (str.length !== 10) {
    isValid = false;
  } else {
    for (let i = 0; i < str.length; i++) {
      let ch = str.charCodeAt(i);
      if (ch < 48 || ch > 57) {
        isValid = false;
        break;
      }
    }
  }

  msg.textContent = isValid ? "" : "Enter a 10-digit number.";
  setInputStyle(input, isValid);
  return isValid;
}

function validCity() {
  let input = document.getElementById("city");
  let msg = document.getElementById("cityMsg");
  let str = input.value.trim();
  let isValid = true;

  if (str.length === 0) {
    isValid = false;
  } else {
    for (let i = 0; i < str.length; i++) {
      let ch = str.charCodeAt(i);
      if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch === 32)) {
        isValid = false;
        break;
      }
    }
  }

  msg.textContent = isValid ? "" : "Enter a valid city name.";
  setInputStyle(input, isValid);
  return isValid;
}

function setInputStyle(input, isValid) {
  if (isValid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
document.forms["frm"].onsubmit = function () {
  let isFormValid =
    validuse() &&
    validpass() &&
    validConfirmPassword() &&
    validEmail() &&
    validContact() &&
    validCity();


};
